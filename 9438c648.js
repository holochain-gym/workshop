import{c as e,L as t,h as o}from"./466c6780.js";import{d as n}from"./962426a7.js";class i extends HTMLElement{constructor(){super(),this.list=[],this.__scrollHandler=this.__scrollHandler.bind(this),this.__isSetup=!1}connectedCallback(){if(this.__isSetup)return;this.__isSetup=!0,this.addEventListener("click",(e=>{var t;const o=e.target;if(o.classList.contains("anchor")){const t=o;e.preventDefault(),this.dispatchEvent(new Event("close-overlay",{bubbles:!0})),setTimeout((()=>{const e=new URL(t.href);document.location.hash=e.hash}),250)}const n=null===(t=o.parentElement)||void 0===t?void 0:t.querySelectorAll("ul a");if(n&&n.length>1){const t=n[1];t.classList.contains("anchor")||(e.preventDefault(),t.click())}}));const e=this.querySelectorAll("li.current a.anchor");for(const t of e){const e=document.getElementById(t.hash.substring(1));e&&this.list.push({top:e.getBoundingClientRect().top,headline:e,anchor:t})}window.addEventListener("scroll",this.__scrollHandler),this.__scrollHandler()}__scrollHandler(){for(const e of this.list)e.top=e.headline.getBoundingClientRect().top;const e=this.list.sort(((e,t)=>Math.abs(e.top)-Math.abs(t.top)));for(let a=0;a<e.length;a+=1){var t,o,n,i,s,r;if(0===a)null===(t=e[0])||void 0===t||null===(o=t.anchor)||void 0===o||null===(n=o.parentElement)||void 0===n||n.classList.add("current");else null===(i=e[a])||void 0===i||null===(s=i.anchor)||void 0===s||null===(r=s.parentElement)||void 0===r||r.classList.remove("current")}}disconnectedCallback(){window.removeEventListener("scroll",this.__scrollHandler)}}customElements.define("rocket-navigation",i);let s;const r=e(s||(s=(e=>e)`
  .global-overlays {
    position: fixed;
    z-index: 200;
  }

  .global-overlays__overlay {
    pointer-events: auto;
  }

  .global-overlays__overlay-container {
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .global-overlays__overlay-container--top-left {
    justify-content: flex-start;
    align-items: flex-start;
  }

  .global-overlays__overlay-container--top {
    justify-content: center;
    align-items: flex-start;
  }

  .global-overlays__overlay-container--top-right {
    justify-content: flex-end;
    align-items: flex-start;
  }

  .global-overlays__overlay-container--right {
    justify-content: flex-end;
    align-items: center;
  }

  .global-overlays__overlay-container--bottom-left {
    justify-content: flex-start;
    align-items: flex-end;
  }

  .global-overlays__overlay-container--bottom {
    justify-content: center;
    align-items: flex-end;
  }

  .global-overlays__overlay-container--bottom-right {
    justify-content: flex-end;
    align-items: flex-end;
  }
  .global-overlays__overlay-container--left {
    justify-content: flex-start;
    align-items: center;
  }

  .global-overlays__overlay-container--center {
    justify-content: center;
    align-items: center;
  }

  .global-overlays__overlay--bottom-sheet {
    width: 100%;
  }

  .global-overlays .global-overlays__backdrop {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    background-color: #333333;
    opacity: 0.3;
    display: none;
  }

  .global-overlays .global-overlays__backdrop--visible {
    display: block;
  }

  .global-overlays .global-overlays__backdrop--animation-in {
    animation: global-overlays-backdrop-fade-in 300ms;
  }

  .global-overlays .global-overlays__backdrop--animation-out {
    animation: global-overlays-backdrop-fade-out 300ms;
    opacity: 0;
  }

  @keyframes global-overlays-backdrop-fade-in {
    from {
      opacity: 0;
    }
  }

  @keyframes global-overlays-backdrop-fade-out {
    from {
      opacity: 0.3;
    }
  }

  body > *[inert] {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    pointer-events: none;
  }

  body.global-overlays-scroll-lock {
    overflow: hidden;
  }

  body.global-overlays-scroll-lock-ios-fix {
    position: fixed;
    width: 100%;
  }
`)),a=Symbol.for("lion::SingletonManagerClassStorage");const d=new class{constructor(){this._map=window[a]?window[a]:window[a]=new Map}set(e,t){this.has(e)||this._map.set(e,t)}get(e){return this._map.get(e)}has(e){return this._map.has(e)}};const l=navigator.userAgent.match(/iPhone|iPad|iPod/i);class h{static __createGlobalRootNode(){const e=document.createElement("div");return e.classList.add("global-overlays"),document.body.appendChild(e),e}static __createGlobalStyleNode(){const e=document.createElement("style");return e.setAttribute("data-global-overlays",""),e.textContent=r.cssText,document.head.appendChild(e),e}get globalRootNode(){return h.__globalRootNode||(h.__globalRootNode=h.__createGlobalRootNode(),h.__globalStyleNode=h.__createGlobalStyleNode()),h.__globalRootNode}get list(){return this.__list}get shownList(){return this.__shownList}constructor(){this.__list=[],this.__shownList=[],this.__siblingsInert=!1,this.__blockingMap=new WeakMap}add(e){if(this.list.find((t=>e===t)))throw new Error("controller instance is already added");return this.list.push(e),e}remove(e){if(!this.list.find((t=>e===t)))throw new Error("could not find controller to remove");this.__list=this.list.filter((t=>t!==e))}show(e){this.list.find((t=>e===t))&&this.hide(e),this.__shownList.unshift(e),Array.from(this.__shownList).reverse().forEach(((e,t)=>{e.elevation=t+1}))}hide(e){if(!this.list.find((t=>e===t)))throw new Error("could not find controller to hide");this.__shownList=this.shownList.filter((t=>t!==e))}teardown(){this.list.forEach((e=>{e.teardown()})),this.__list=[],this.__shownList=[],this.__siblingsInert=!1;const e=h.__globalRootNode;e&&(e.parentElement&&e.parentElement.removeChild(e),h.__globalRootNode=void 0,document.head.removeChild(h.__globalStyleNode),h.__globalStyleNode=void 0)}get siblingsInert(){return this.__siblingsInert}disableTrapsKeyboardFocusForAll(){this.shownList.forEach((e=>{!0===e.trapsKeyboardFocus&&e.disableTrapsKeyboardFocus&&e.disableTrapsKeyboardFocus({findNewTrap:!1})}))}informTrapsKeyboardFocusGotEnabled(e){!1===this.siblingsInert&&"global"===e&&(h.__globalRootNode&&function(e){var t;const o=null===(t=e.parentElement)||void 0===t?void 0:t.children;for(let t=0;t<o.length;t+=1){const n=o[t];n!==e&&(n.setAttribute("inert",""),n.setAttribute("aria-hidden","true"))}}(this.globalRootNode),this.__siblingsInert=!0)}informTrapsKeyboardFocusGotDisabled({disabledCtrl:e,findNewTrap:t=!0}={}){const o=this.shownList.find((t=>t!==e&&!0===t.trapsKeyboardFocus));o?t&&o.enableTrapsKeyboardFocus():!0===this.siblingsInert&&(h.__globalRootNode&&function(e){var t;const o=null===(t=e.parentElement)||void 0===t?void 0:t.children;for(let t=0;t<o.length;t+=1){const n=o[t];n!==e&&(n.removeAttribute("inert"),n.removeAttribute("aria-hidden"))}}(this.globalRootNode),this.__siblingsInert=!1)}requestToPreventScroll(){document.body.classList.add("global-overlays-scroll-lock"),l&&document.body.classList.add("global-overlays-scroll-lock-ios-fix")}requestToEnableScroll(){this.shownList.some((e=>!0===e.preventsScroll))||(document.body.classList.remove("global-overlays-scroll-lock"),l&&document.body.classList.remove("global-overlays-scroll-lock-ios-fix"))}requestToShowOnly(e){const t=this.shownList.filter((t=>t!==e));t.map((e=>e.hide())),this.__blockingMap.set(e,t)}retractRequestToShowOnly(e){if(this.__blockingMap.has(e)){this.__blockingMap.get(e).map((e=>e.show()))}}}h.__globalRootNode=void 0,h.__globalStyleNode=void 0;let c=d.get("@lion/overlays::overlays::0.15.x")||new h;function p(){let e=document.activeElement||document.body;for(;e&&e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}const _=({visibility:e,display:t})=>"hidden"!==e&&"none"!==t;function u(e,t){const o=Math.max(e.tabIndex,0),n=Math.max(t.tabIndex,0);return 0===o||0===n?n>o:o>n}function v(e){const t=e.length;if(t<2)return e;const o=Math.ceil(t/2);return function(e,t){const o=[];for(;e.length>0&&t.length>0;)u(e[0],t[0])?o.push(t.shift()):o.push(e.shift());return[...o,...e,...t]}(v(e.slice(0,o)),v(e.slice(o)))}const y="matches"in Element.prototype?"matches":"msMatchesSelector";function g(e){return function(e){return e[y]("input, select, textarea, button, object")?e[y](":not([disabled])"):e[y]("a[href], area[href], iframe, [tabindex], [contentEditable]")}(e)?Number(e.getAttribute("tabindex")||0):-1}function b(e){return e.nodeType===Node.ELEMENT_NODE&&("slot"===e.localName||function(e){return!!(e&&e.isConnected&&_(e.style)&&_(window.getComputedStyle(e))&&(e.offsetWidth||e.offsetHeight||e.getClientRects().length))}(e))}function f(e,t){if(!b(e))return!1;const o=e,n=g(o);let i=n>0;n>=0&&t.push(o);const s=function(e){if("slot"===e.localName)return e.assignedNodes({flatten:!0});const{children:t}=e.shadowRoot||e;return t||[]}(o);for(let e=0;e<s.length;e+=1)i=f(s[e],t)||i;return i}function m(e){const t=[];return f(e,t)?v(t):t}function N(e,t){let o=e.contains(t);if(o)return!0;return!!(e instanceof HTMLElement&&e.shadowRoot&&(o=N(e.shadowRoot,t),o))||(function e(n){for(let i=0;i<n.children.length;i+=1){const s=n.children[i];if(s.shadowRoot&&N(s.shadowRoot,t)){o=!0;break}s.children.length>0&&e(s)}}(e),o)}const w=9;function C(e){const t=m(e),o=t.find((e=>e.hasAttribute("autofocus")))||e;let n,i;function s(t){t.keyCode===w&&function(e,t){const o=m(e);let n;n=o.length>=2?[o[0],o[o.length-1]]:1===o.length?[o[0],o[0]]:[e,e],t.shiftKey&&n.reverse();const[i,s]=n,r=p();r===e||o.includes(r)&&s!==r||(t.preventDefault(),i.focus())}(e,t)}function r({resetToRoot:o=!1}={}){if(N(e,p()))return;let i;i=o?e:t[n.compareDocumentPosition(document.activeElement)===Node.DOCUMENT_POSITION_PRECEDING?0:t.length-1],i&&i.focus()}function a(){window.removeEventListener("focusin",a),r()}function d(){setTimeout((()=>{N(e,p())||r({resetToRoot:!0})})),window.addEventListener("focusin",a)}return o===e&&(e.tabIndex=-1,e.style.setProperty("outline","none")),o.focus(),window.addEventListener("keydown",s),window.addEventListener("focusout",d),function t(){n=document.createElement("div"),n.style.display="none",n.setAttribute("data-is-tab-detection-element",""),e.insertBefore(n,e.children[0]),i=new MutationObserver((o=>{for(const n of o)if("childList"===n.type){const o=!Array.from(e.children).find((e=>e.hasAttribute("data-is-tab-detection-element"))),s=Array.from(n.addedNodes).find((e=>e instanceof HTMLElement&&e.hasAttribute("data-is-tab-detection-element")));o&&!s&&(i.disconnect(),t())}})),i.observe(e,{childList:!0})}(),{disconnect:function(){window.removeEventListener("keydown",s),window.removeEventListener("focusin",a),window.removeEventListener("focusout",d),i.disconnect(),Array.from(e.children).includes(n)&&e.removeChild(n),e.style.removeProperty("outline")}}}const k=window.CSS&&CSS.number;class E extends class{constructor(){const e=document.createDocumentFragment();this.addEventListener=(t,o,n)=>e.addEventListener(t,o,n),this.removeEventListener=(t,o,n)=>e.removeEventListener(t,o,n),this.dispatchEvent=t=>e.dispatchEvent(t)}}{constructor(e={},t=c){if(super(),this.manager=t,this.__sharedConfig=e,this._defaultConfig={placementMode:void 0,contentNode:e.contentNode,contentWrapperNode:e.contentWrapperNode,invokerNode:e.invokerNode,backdropNode:e.backdropNode,referenceNode:void 0,elementToFocusAfterHide:e.invokerNode,inheritsReferenceWidth:"none",hasBackdrop:!1,isBlocking:!1,preventsScroll:!1,trapsKeyboardFocus:!1,hidesOnEsc:!1,hidesOnOutsideEsc:!1,hidesOnOutsideClick:!1,isTooltip:!1,invokerRelation:"description",handlesAccessibility:!1,popperConfig:{placement:"top",strategy:"absolute",modifiers:[{name:"preventOverflow",enabled:!0,options:{boundariesElement:"viewport",padding:8}},{name:"flip",options:{boundariesElement:"viewport",padding:16}},{name:"offset",enabled:!0,options:{offset:[0,8]}},{name:"arrow",enabled:!1}]},viewportConfig:{placement:"center"}},this.manager.add(this),this._contentId=`overlay-content--${Math.random().toString(36).substr(2,10)}`,this.__originalAttrs=new Map,this._defaultConfig.contentNode){if(!this._defaultConfig.contentNode.isConnected)throw new Error('[OverlayController] Could not find a render target, since the provided contentNode is not connected to the DOM. Make sure that it is connected, e.g. by doing "document.body.appendChild(contentNode)", before passing it on.');this.__isContentNodeProjected=Boolean(this._defaultConfig.contentNode.assignedSlot)}this.updateConfig(e),this.__hasActiveTrapsKeyboardFocus=!1,this.__hasActiveBackdrop=!0,this.__backdropNodeToBeTornDown=void 0,this.__escKeyHandler=this.__escKeyHandler.bind(this)}get invoker(){return this.invokerNode}get content(){return this.contentWrapperNode}get placementMode(){var e;return null===(e=this.config)||void 0===e?void 0:e.placementMode}get invokerNode(){var e;return null===(e=this.config)||void 0===e?void 0:e.invokerNode}get referenceNode(){var e;return null===(e=this.config)||void 0===e?void 0:e.referenceNode}get contentNode(){var e;return null===(e=this.config)||void 0===e?void 0:e.contentNode}get contentWrapperNode(){var e;return this.__contentWrapperNode||(null===(e=this.config)||void 0===e?void 0:e.contentWrapperNode)}get backdropNode(){var e;return this.__backdropNode||(null===(e=this.config)||void 0===e?void 0:e.backdropNode)}get elementToFocusAfterHide(){var e;return this.__elementToFocusAfterHide||(null===(e=this.config)||void 0===e?void 0:e.elementToFocusAfterHide)}get hasBackdrop(){var e;return!!this.backdropNode||(null===(e=this.config)||void 0===e?void 0:e.hasBackdrop)}get isBlocking(){var e;return null===(e=this.config)||void 0===e?void 0:e.isBlocking}get preventsScroll(){var e;return null===(e=this.config)||void 0===e?void 0:e.preventsScroll}get trapsKeyboardFocus(){var e;return null===(e=this.config)||void 0===e?void 0:e.trapsKeyboardFocus}get hidesOnEsc(){var e;return null===(e=this.config)||void 0===e?void 0:e.hidesOnEsc}get hidesOnOutsideClick(){var e;return null===(e=this.config)||void 0===e?void 0:e.hidesOnOutsideClick}get hidesOnOutsideEsc(){var e;return null===(e=this.config)||void 0===e?void 0:e.hidesOnOutsideEsc}get inheritsReferenceWidth(){var e;return null===(e=this.config)||void 0===e?void 0:e.inheritsReferenceWidth}get handlesAccessibility(){var e;return null===(e=this.config)||void 0===e?void 0:e.handlesAccessibility}get isTooltip(){var e;return null===(e=this.config)||void 0===e?void 0:e.isTooltip}get invokerRelation(){var e;return null===(e=this.config)||void 0===e?void 0:e.invokerRelation}get popperConfig(){var e;return null===(e=this.config)||void 0===e?void 0:e.popperConfig}get viewportConfig(){var e;return null===(e=this.config)||void 0===e?void 0:e.viewportConfig}get _renderTarget(){return"global"===this.placementMode?this.manager.globalRootNode:this.__isContentNodeProjected?null===(e=this.__originalContentParent)||void 0===e?void 0:e.getRootNode().host:this.__originalContentParent;var e}get _referenceNode(){return this.referenceNode||this.invokerNode}set elevation(e){this.contentWrapperNode&&(this.contentWrapperNode.style.zIndex=e),this.backdropNode&&(this.backdropNode.style.zIndex=e)}get elevation(){var e;return Number(null===(e=this.contentWrapperNode)||void 0===e?void 0:e.style.zIndex)}updateConfig(e){this.teardown(),this.__prevConfig=this.config||{},this.config={...this._defaultConfig,...this.__sharedConfig,...e,popperConfig:{...this._defaultConfig.popperConfig||{},...this.__sharedConfig.popperConfig||{},...e.popperConfig||{},modifiers:[...this._defaultConfig.popperConfig&&this._defaultConfig.popperConfig.modifiers||[],...this.__sharedConfig.popperConfig&&this.__sharedConfig.popperConfig.modifiers||[],...e.popperConfig&&e.popperConfig.modifiers||[]]}},this.__validateConfiguration(this.config),this._init({cfgToAdd:e}),this.__elementToFocusAfterHide=void 0}__validateConfiguration(e){if(!e.placementMode)throw new Error('[OverlayController] You need to provide a .placementMode ("global"|"local")');if(!["global","local"].includes(e.placementMode))throw new Error(`[OverlayController] "${e.placementMode}" is not a valid .placementMode, use ("global"|"local")`);if(!e.contentNode)throw new Error("[OverlayController] You need to provide a .contentNode");if(this.__isContentNodeProjected&&!e.contentWrapperNode)throw new Error("[OverlayController] You need to provide a .contentWrapperNode when .contentNode is projected");if(e.isTooltip&&"local"!==e.placementMode)throw new Error('[OverlayController] .isTooltip should be configured with .placementMode "local"');if(e.isTooltip&&!e.handlesAccessibility)throw new Error("[OverlayController] .isTooltip only takes effect when .handlesAccessibility is enabled")}_init({cfgToAdd:e}){this.__initContentWrapperNode({cfgToAdd:e}),this.__initConnectionTarget(),"local"===this.placementMode&&(E.popperModule||(E.popperModule=async function(){return import("./53702b2c.js")}())),this._handleFeatures({phase:"init"})}__initConnectionTarget(){var e,t;this.contentWrapperNode!==(null===(e=this.__prevConfig)||void 0===e?void 0:e.contentWrapperNode)&&("global"!==(null===(t=this.config)||void 0===t?void 0:t.placementMode)&&this.__isContentNodeProjected||this.contentWrapperNode.appendChild(this.contentNode));if(this._renderTarget)if(this.__isContentNodeProjected&&"local"===this.placementMode)this._renderTarget.appendChild(this.contentNode);else{const e=this._renderTarget===this.contentWrapperNode.parentNode,t=this.contentWrapperNode.contains(this._renderTarget);e||t||this._renderTarget.appendChild(this.contentWrapperNode)}}__initContentWrapperNode({cfgToAdd:e}){var t;if(null!==(t=this.config)&&void 0!==t&&t.contentWrapperNode&&"local"===this.placementMode?this.__contentWrapperNode=this.config.contentWrapperNode:this.__contentWrapperNode=document.createElement("div"),this.contentWrapperNode.style.cssText="",this.contentWrapperNode.style.display="none","absolute"===getComputedStyle(this.contentNode).position&&(this.contentNode.style.position="static"),this.__isContentNodeProjected&&this.contentWrapperNode.isConnected)this.__originalContentParent=this.contentWrapperNode.parentNode;else if(e.contentNode&&e.contentNode.isConnected){var o;this.__originalContentParent=null===(o=this.contentNode)||void 0===o?void 0:o.parentNode}}_handleZIndex({phase:e}){if("local"===this.placementMode&&"setup"===e){const e=Number(getComputedStyle(this.contentNode).zIndex);(e<1||Number.isNaN(e))&&(this.contentWrapperNode.style.zIndex="1")}}__setupTeardownAccessibility({phase:e}){"init"===e?(this.__storeOriginalAttrs(this.contentNode,["role","id"]),this.invokerNode&&this.__storeOriginalAttrs(this.invokerNode,["aria-expanded","aria-labelledby","aria-describedby"]),this.contentNode.id||this.contentNode.setAttribute("id",this._contentId),this.isTooltip?(this.invokerNode&&this.invokerNode.setAttribute("label"===this.invokerRelation?"aria-labelledby":"aria-describedby",this._contentId),this.contentNode.setAttribute("role","tooltip")):(this.invokerNode&&this.invokerNode.setAttribute("aria-expanded",`${this.isShown}`),this.contentNode.getAttribute("role")||this.contentNode.setAttribute("role","dialog"))):"teardown"===e&&this.__restoreOriginalAttrs()}__storeOriginalAttrs(e,t){const o={};t.forEach((t=>{o[t]=e.getAttribute(t)})),this.__originalAttrs.set(e,o)}__restoreOriginalAttrs(){for(const[e,t]of this.__originalAttrs)Object.entries(t).forEach((([t,o])=>{null!==o?e.setAttribute(t,o):e.removeAttribute(t)}));this.__originalAttrs.clear()}get isShown(){return Boolean("none"!==this.contentWrapperNode.style.display)}async show(e=this.elementToFocusAfterHide){if(this._showComplete&&await this._showComplete,this._showComplete=new Promise((e=>{this._showResolve=e})),this.manager&&this.manager.show(this),this.isShown)return void this._showResolve();const t=new CustomEvent("before-show",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented||(this.contentWrapperNode.style.display="",this._keepBodySize({phase:"before-show"}),await this._handleFeatures({phase:"show"}),this._keepBodySize({phase:"show"}),await this._handlePosition({phase:"show"}),this.__elementToFocusAfterHide=e,this.dispatchEvent(new Event("show")),await this._transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode})),this._showResolve()}async _handlePosition({phase:e}){if("global"===this.placementMode){const t="show"===e?"add":"remove",o=`global-overlays__overlay-container--${this.viewportConfig.placement}`;this.contentWrapperNode.classList[t]("global-overlays__overlay-container"),this.contentWrapperNode.classList[t](o),this.contentNode.classList[t]("global-overlays__overlay")}else"local"===this.placementMode&&"show"===e&&(await this.__createPopperInstance(),this._popper.forceUpdate())}_keepBodySize({phase:e}){switch(e){case"before-show":this.__bodyClientWidth=document.body.clientWidth,this.__bodyClientHeight=document.body.clientHeight,this.__bodyMarginRight=0,this.__bodyMarginBottom=0;break;case"show":{if(k)this.__bodyMarginRight=document.body.computedStyleMap().get("margin-right").value,this.__bodyMarginBottom=document.body.computedStyleMap().get("margin-bottom").value;else if(window.getComputedStyle){const e=window.getComputedStyle(document.body);e&&(this.__bodyMarginRight=parseInt(e.getPropertyValue("margin-right"),10),this.__bodyMarginBottom=parseInt(e.getPropertyValue("margin-bottom"),10))}const e=document.body.clientWidth-this.__bodyClientWidth,t=document.body.clientHeight-this.__bodyClientHeight,o=this.__bodyMarginRight+e,n=this.__bodyMarginBottom+t;k?(document.body.attributeStyleMap.set("margin-right",CSS.px(o)),document.body.attributeStyleMap.set("margin-bottom",CSS.px(n))):(document.body.style.marginRight=`${o}px`,document.body.style.marginBottom=`${n}px`);break}case"hide":k?(document.body.attributeStyleMap.set("margin-right",CSS.px(this.__bodyMarginRight)),document.body.attributeStyleMap.set("margin-bottom",CSS.px(this.__bodyMarginBottom))):(document.body.style.marginRight=`${this.__bodyMarginRight}px`,document.body.style.marginBottom=`${this.__bodyMarginBottom}px`)}}async hide(){if(this._hideComplete=new Promise((e=>{this._hideResolve=e})),this.manager&&this.manager.hide(this),!this.isShown)return void this._hideResolve();const e=new CustomEvent("before-hide",{cancelable:!0});this.dispatchEvent(e),e.defaultPrevented||(await this._transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),this.contentWrapperNode.style.display="none",this._handleFeatures({phase:"hide"}),this._keepBodySize({phase:"hide"}),this.dispatchEvent(new Event("hide")),this._restoreFocus()),this._hideResolve()}async transitionHide(e){}async _transitionHide(e){if(await this.transitionHide({backdropNode:this.backdropNode,contentNode:this.contentNode}),e.backdropNode){e.backdropNode.classList.remove(`${this.placementMode}-overlays__backdrop--animation-in`);let t=()=>{};e.backdropNode.classList.add(`${this.placementMode}-overlays__backdrop--animation-out`),this.__backdropAnimation=new Promise((o=>{t=()=>{e.backdropNode&&(e.backdropNode.classList.remove(`${this.placementMode}-overlays__backdrop--animation-out`),e.backdropNode.classList.remove(`${this.placementMode}-overlays__backdrop--visible`),e.backdropNode.removeEventListener("animationend",t)),o(void 0)}})),e.backdropNode.addEventListener("animationend",t)}}async transitionShow(e){}async _transitionShow(e){await this.transitionShow({backdropNode:this.backdropNode,contentNode:this.contentNode}),e.backdropNode&&e.backdropNode.classList.add(`${this.placementMode}-overlays__backdrop--animation-in`)}_restoreFocus(){var e;this.elementToFocusAfterHide?this.elementToFocusAfterHide.focus():document.activeElement&&null!==(e=this.__contentWrapperNode)&&void 0!==e&&e.contains(document.activeElement)&&document.activeElement.blur()}async toggle(){return this.isShown?this.hide():this.show()}_handleFeatures({phase:e}){this._handleZIndex({phase:e}),this.preventsScroll&&this._handlePreventsScroll({phase:e}),this.isBlocking&&this._handleBlocking({phase:e}),this.hasBackdrop&&this._handleBackdrop({phase:e}),this.trapsKeyboardFocus&&this._handleTrapsKeyboardFocus({phase:e}),this.hidesOnEsc&&this._handleHidesOnEsc({phase:e}),this.hidesOnOutsideEsc&&this._handleHidesOnOutsideEsc({phase:e}),this.hidesOnOutsideClick&&this._handleHidesOnOutsideClick({phase:e}),this.handlesAccessibility&&this._handleAccessibility({phase:e}),this.inheritsReferenceWidth&&this._handleInheritsReferenceWidth()}_handlePreventsScroll({phase:e}){switch(e){case"show":this.manager.requestToPreventScroll();break;case"hide":this.manager.requestToEnableScroll()}}_handleBlocking({phase:e}){switch(e){case"show":this.manager.requestToShowOnly(this);break;case"hide":this.manager.retractRequestToShowOnly(this)}}get hasActiveBackdrop(){return this.__hasActiveBackdrop}_handleBackdrop({phase:e}){switch(e){case"init":{this.backdropNode||(this.__backdropNode=document.createElement("div"),this.backdropNode.slot="backdrop",this.backdropNode.classList.add(`${this.placementMode}-overlays__backdrop`));let e=this.contentNode.parentNode,t=this.contentNode;"global"===this.placementMode&&(e=this.contentWrapperNode.parentElement,t=this.contentWrapperNode),e.insertBefore(this.backdropNode,t);break}case"show":this.backdropNode.classList.add(`${this.placementMode}-overlays__backdrop--visible`),this.__hasActiveBackdrop=!0;break;case"hide":if(!this.backdropNode)return;this.__hasActiveBackdrop=!1;break;case"teardown":if(!this.backdropNode||!this.backdropNode.parentNode)return;this.__backdropAnimation?(this.__backdropNodeToBeTornDown=this.backdropNode,this.__backdropAnimation.then((()=>{this.__backdropNodeToBeTornDown&&this.__backdropNodeToBeTornDown.parentNode&&this.__backdropNodeToBeTornDown.parentNode.removeChild(this.__backdropNodeToBeTornDown)}))):this.backdropNode.parentNode.removeChild(this.backdropNode),this.__backdropNode=void 0}}get hasActiveTrapsKeyboardFocus(){return this.__hasActiveTrapsKeyboardFocus}_handleTrapsKeyboardFocus({phase:e}){"show"===e?this.enableTrapsKeyboardFocus():"hide"!==e&&"teardown"!==e||this.disableTrapsKeyboardFocus()}enableTrapsKeyboardFocus(){this.__hasActiveTrapsKeyboardFocus||(this.manager&&this.manager.disableTrapsKeyboardFocusForAll(),this._containFocusHandler=C(this.contentNode),this.__hasActiveTrapsKeyboardFocus=!0,this.manager&&this.manager.informTrapsKeyboardFocusGotEnabled(this.placementMode))}disableTrapsKeyboardFocus({findNewTrap:e=!0}={}){this.__hasActiveTrapsKeyboardFocus&&(this._containFocusHandler&&(this._containFocusHandler.disconnect(),this._containFocusHandler=void 0),this.__hasActiveTrapsKeyboardFocus=!1,this.manager&&this.manager.informTrapsKeyboardFocusGotDisabled({disabledCtrl:this,findNewTrap:e}))}__escKeyHandler(e){return"Escape"===e.key&&this.hide()}_handleHidesOnEsc({phase:e}){"show"===e?(this.contentNode.addEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.addEventListener("keyup",this.__escKeyHandler)):"hide"===e&&(this.contentNode.removeEventListener("keyup",this.__escKeyHandler),this.invokerNode&&this.invokerNode.removeEventListener("keyup",this.__escKeyHandler))}_handleHidesOnOutsideEsc({phase:e}){"show"===e?(this.__escKeyHandler=e=>"Escape"===e.key&&this.hide(),document.addEventListener("keyup",this.__escKeyHandler)):"hide"===e&&document.removeEventListener("keyup",this.__escKeyHandler)}_handleInheritsReferenceWidth(){if(!this._referenceNode||"global"===this.placementMode)return;const e=`${this._referenceNode.getBoundingClientRect().width}px`;switch(this.inheritsReferenceWidth){case"max":this.contentWrapperNode.style.maxWidth=e;break;case"full":this.contentWrapperNode.style.width=e;break;case"min":this.contentWrapperNode.style.minWidth=e,this.contentWrapperNode.style.width="auto"}}_handleHidesOnOutsideClick({phase:e}){const t="show"===e?"addEventListener":"removeEventListener";if("show"===e){let e=!1,t=!1;this.__preventCloseOutsideClick=()=>{e&&(t=!0),e=!0,setTimeout((()=>{e=!1,setTimeout((()=>{t=!1}))}))},this.__onCaptureHtmlClick=()=>{setTimeout((()=>{!1!==e||t||this.hide()}))}}this.contentWrapperNode[t]("click",this.__preventCloseOutsideClick,!0),this.invokerNode&&this.invokerNode[t]("click",this.__preventCloseOutsideClick,!0),document.documentElement[t]("click",this.__onCaptureHtmlClick,!0)}_handleAccessibility({phase:e}){"init"!==e&&"teardown"!==e||this.__setupTeardownAccessibility({phase:e}),this.invokerNode&&!this.isTooltip&&this.invokerNode.setAttribute("aria-expanded",`${"show"===e}`)}teardown(){this._handleFeatures({phase:"teardown"}),"global"===this.placementMode&&this.__isContentNodeProjected&&this.__originalContentParent.appendChild(this.contentNode),this._teardownContentWrapperNode()}_teardownContentWrapperNode(){"global"===this.placementMode&&this.contentWrapperNode&&this.contentWrapperNode.parentNode&&this.contentWrapperNode.parentNode.removeChild(this.contentWrapperNode)}async __createPopperInstance(){if(this._popper&&(this._popper.destroy(),this._popper=void 0),void 0!==E.popperModule){var e;const{createPopper:t}=await E.popperModule;this._popper=t(this._referenceNode,this.contentWrapperNode,{...null===(e=this.config)||void 0===e?void 0:e.popperConfig})}}}function O(e,t){if("object"!=typeof e||"object"!=typeof e)return e===t;const o=Object.keys(e),n=Object.keys(t);if(o.length!==n.length)return!1;return o.every((o=>O(e[o],t[o])))}E.popperModule=void 0;const T=n((e=>class extends e{static get properties(){return{opened:{type:Boolean,reflect:!0}}}constructor(){super(),this.opened=!1,this.__needsSetup=!0,this.config={},this.toggle=this.toggle.bind(this),this.open=this.open.bind(this),this.close=this.close.bind(this)}get config(){return this.__config}set config(e){const t=!O(this.config,e);this._overlayCtrl&&t&&this._overlayCtrl.updateConfig(e),this.__config=e,this._overlayCtrl&&t&&this.__syncToOverlayController()}requestUpdateInternal(e,t){super.requestUpdateInternal(e,t),"opened"===e&&this.opened!==t&&this.dispatchEvent(new Event("opened-changed"))}_defineOverlay({contentNode:e,invokerNode:t,referenceNode:o,backdropNode:n,contentWrapperNode:i}){var s,r;const a=this._defineOverlayConfig()||{};return new E({contentNode:e,invokerNode:t,referenceNode:o,backdropNode:n,contentWrapperNode:i,...a,...this.config,popperConfig:{...a.popperConfig||{},...this.config.popperConfig||{},modifiers:[...(null===(s=a.popperConfig)||void 0===s?void 0:s.modifiers)||[],...(null===(r=this.config.popperConfig)||void 0===r?void 0:r.modifiers)||[]]}})}_defineOverlayConfig(){return{placementMode:"local"}}updated(e){super.updated(e),e.has("opened")&&this._overlayCtrl&&!this.__blockSyncToOverlayCtrl&&this.__syncToOverlayController()}_setupOpenCloseListeners(){this.__closeEventInContentNodeHandler=e=>{e.stopPropagation(),this._overlayCtrl.hide()},this._overlayContentNode&&this._overlayContentNode.addEventListener("close-overlay",this.__closeEventInContentNodeHandler)}_teardownOpenCloseListeners(){this._overlayContentNode&&this._overlayContentNode.removeEventListener("close-overlay",this.__closeEventInContentNodeHandler)}connectedCallback(){super.connectedCallback(),this.__needsSetup=!0,this.updateComplete.then((()=>{this.__needsSetup&&this._setupOverlayCtrl(),this.__needsSetup=!1}))}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback(),this._overlayCtrl&&this._teardownOverlayCtrl()}get _overlayInvokerNode(){return Array.from(this.children).find((e=>"invoker"===e.slot))}get _overlayReferenceNode(){}get _overlayBackdropNode(){return Array.from(this.children).find((e=>"backdrop"===e.slot))}get _overlayContentNode(){return this._cachedOverlayContentNode||(this._cachedOverlayContentNode=Array.from(this.children).find((e=>"content"===e.slot))||this.config.contentNode),this._cachedOverlayContentNode}get _overlayContentWrapperNode(){return this.shadowRoot.querySelector("#overlay-content-node-wrapper")}_setupOverlayCtrl(){this._overlayCtrl=this._defineOverlay({contentNode:this._overlayContentNode,contentWrapperNode:this._overlayContentWrapperNode,invokerNode:this._overlayInvokerNode,referenceNode:this._overlayReferenceNode,backdropNode:this._overlayBackdropNode}),this.__syncToOverlayController(),this.__setupSyncFromOverlayController(),this._setupOpenCloseListeners()}_teardownOverlayCtrl(){this._teardownOpenCloseListeners(),this.__teardownSyncFromOverlayController(),this._overlayCtrl.teardown()}async _setOpenedWithoutPropertyEffects(e){this.__blockSyncToOverlayCtrl=!0,this.opened=e,await this.updateComplete,this.__blockSyncToOverlayCtrl=!1}__setupSyncFromOverlayController(){this.__onOverlayCtrlShow=()=>{this.opened=!0},this.__onOverlayCtrlHide=()=>{this.opened=!1},this.__onBeforeShow=e=>{const t=new CustomEvent("before-opened",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this.__onBeforeHide=e=>{const t=new CustomEvent("before-closed",{cancelable:!0});this.dispatchEvent(t),t.defaultPrevented&&(this._setOpenedWithoutPropertyEffects(this._overlayCtrl.isShown),e.preventDefault())},this._overlayCtrl.addEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.addEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.addEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.addEventListener("before-hide",this.__onBeforeHide)}__teardownSyncFromOverlayController(){this._overlayCtrl.removeEventListener("show",this.__onOverlayCtrlShow),this._overlayCtrl.removeEventListener("hide",this.__onOverlayCtrlHide),this._overlayCtrl.removeEventListener("before-show",this.__onBeforeShow),this._overlayCtrl.removeEventListener("before-hide",this.__onBeforeHide)}__syncToOverlayController(){this.opened?this._overlayCtrl.show():this._overlayCtrl.hide()}async toggle(){await this._overlayCtrl.toggle()}async open(){await this._overlayCtrl.show()}async close(){await this._overlayCtrl.hide()}}));let S,L=e=>e;function M(e){return new Promise((t=>{e.addEventListener("transitionend",t,{once:!0})}))}class A extends(T(t)){static get properties(){return{useOverlay:{type:Boolean,reflect:!0},useOverlayMediaQuery:{type:String}}}_defineOverlayConfig(){return{placementMode:"global",viewportConfig:{placement:"center"},hasBackdrop:!0,preventsScroll:!0,trapsKeyboardFocus:!0,hidesOnEsc:!0,handlesAccessibility:!0,hidesOnOutsideClick:!0,viewportConfig:{placement:"slide"}}}_setupOverlayCtrl(){this.useOverlay&&(super._setupOverlayCtrl(),this._overlayCtrl.transitionHide=async({contentNode:e})=>{e.style.transition="transform 0.20s cubic-bezier(0.4, 0.0, 0.2, 1)",e.style.transform="translateX(-100%)",await M(e)},this._overlayCtrl.transitionShow=async({contentNode:e})=>{e.style.display="block",e.style.transform="translateX(-100%)",e.style.transition="transform 0.25s cubic-bezier(0.4, 0.0, 0.2, 1)",await new Promise((e=>requestAnimationFrame(e))),await new Promise((e=>requestAnimationFrame(e))),e.style.transform="translateX(0)",await M(e)},this._overlayCtrl.contentNode.style.transform="translateX(-100%)",this._overlayCtrl.contentNode.style.willChange="transform",this.containerEl=this._overlayCtrl.contentNode)}_teardownOverlayCtrl(){super._teardownOverlayCtrl(),this._overlayCtrl.contentNode.style.transform="translateX(0)"}updated(e){super.updated(e),e.has("opened")&&(this.opened?document.body.addEventListener("touchstart",this.onGestureStart,{passive:!0}):document.body.removeEventListener("touchstart",this.onGestureStart)),e.has("useOverlay")&&(this.useOverlay?this._setupOverlayCtrl():this._overlayCtrl&&this._teardownOverlayCtrl())}_setupOpenCloseListeners(){super._setupOpenCloseListeners(),this._overlayInvokerNode&&this._overlayInvokerNode.addEventListener("click",this.__toggle)}_teardownOpenCloseListeners(){super._teardownOpenCloseListeners(),this._overlayInvokerNode&&this._overlayInvokerNode.removeEventListener("click",this.__toggle)}__toggle(){this.opened=!this.opened}constructor(){super(),this.useOverlay=!1,this.useOverlayMediaQuery="(max-width: 1024px)",this.__toggle=this.__toggle.bind(this),this.onGestureStart=this.onGestureStart.bind(this),this.onGestureMove=this.onGestureMove.bind(this),this.onGestureEnd=this.onGestureEnd.bind(this),this.updateFromTouch=this.updateFromTouch.bind(this),this._startX=0,this._currentX=0,this._velocity=0,this._left=0,this.__touching=!1,this._timestamp=0}connectedCallback(){super.connectedCallback(),this.useOverlay=!!window.matchMedia(this.useOverlayMediaQuery).matches,window.matchMedia(this.useOverlayMediaQuery).addListener((e=>{this.useOverlay=!!e.matches}))}render(){return o(S||(S=L`
      <slot name="invoker"></slot>
      <slot name="_overlay-shadow-outlet"></slot>
      <div id="overlay-content-node-wrapper">
        <slot name="content"></slot>
      </div>
    `))}onGestureStart(e){this.containerEl&&(this.__touching=!0,this._left=this.containerEl.getBoundingClientRect().left,this._startX=e.targetTouches[0].clientX,this._currentX=this._startX,this._timestamp=(new Date).getTime(),this._velocity=0,this._overlayCtrl.contentNode.style.transition="",document.body.addEventListener("touchmove",this.onGestureMove,{passive:!0}),document.body.addEventListener("touchend",this.onGestureEnd,{passive:!0}),document.body.addEventListener("touchcancel",this.onGestureEnd,{passive:!0}),requestAnimationFrame(this.updateFromTouch))}addVelocitySample(e,t){if(0===t)return;const o=e/t;this._velocity*=.75,this._velocity+=.25*o}onGestureMove(e){if(!this.__touching)return;const t=this._timestamp;this._timestamp=(new Date).getTime();const o=this._timestamp-t,n=this._currentX;this._currentX=e.targetTouches[0].clientX;const i=this._currentX-n;this.addVelocitySample(i,o)}onGestureEnd(){if(!this.__touching||!this.containerEl)return void(this.opened=!1);let e;if(this.__touching=!1,Math.abs(this._velocity)>1)e=this._velocity>0;else{const{left:t}=this.containerEl.getBoundingClientRect(),o=this.containerEl.clientWidth;e=(t+o)/o>=.5}this._overlayCtrl.contentNode.style.transition="transform 0.20s cubic-bezier(0.4, 0.0, 0.2, 1)",this.containerEl.style.transform="",this.opened=e,document.body.removeEventListener("touchmove",this.onGestureMove),document.body.removeEventListener("touchend",this.onGestureEnd),document.body.removeEventListener("touchcancel",this.onGestureEnd)}updateFromTouch(){if(!this.__touching||!this.containerEl)return;requestAnimationFrame(this.updateFromTouch);const e=Math.min(0,this._currentX-this._startX+this._left);this.containerEl.style.transform=`translateX(${e}px)`}}customElements.define("rocket-drawer",A);
