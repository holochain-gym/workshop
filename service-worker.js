if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let r=Promise.resolve();return s[e]||(r=new Promise((async r=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=r}else importScripts(e),r()}))),r.then((()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]}))},r=(r,s)=>{Promise.all(r.map(e)).then((e=>s(1===e.length?e[0]:e)))},s={require:Promise.resolve(r)};self.define=(r,i,f)=>{s[r]||(s[r]=Promise.resolve().then((()=>{let s={};const d={uri:location.origin+r.slice(1)};return Promise.all(i.map((r=>{switch(r){case"exports":return s;case"module":return d;default:return e(r)}}))).then((e=>{const r=f(...e);return s.default||(s.default=r),s}))})))}}define("./service-worker.js",["./workbox-6881a531"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"_merged_assets/_static/noscript.css",revision:"1a5e2651bf419b6261b64869ca95af04"},{url:"466c6780.js",revision:"15f86081cd18057897da2a015e55346d"},{url:"490f016e.css",revision:"1753244dada61e9655aa180c07b74687"},{url:"53702b2c.js",revision:"07c169799d12863e22b288990c147f12"},{url:"5ccecf3a.js",revision:"069ca11fcdd4fe1dd25758cda6f334f4"},{url:"628d7ba7.js",revision:"ec179007dafffac73d2f0215a2147ea7"},{url:"628d7ba72.js",revision:"ec179007dafffac73d2f0215a2147ea7"},{url:"628d7ba73.js",revision:"ec179007dafffac73d2f0215a2147ea7"},{url:"628d7ba74.js",revision:"ec179007dafffac73d2f0215a2147ea7"},{url:"628d7ba75.js",revision:"ec179007dafffac73d2f0215a2147ea7"},{url:"628d7ba76.js",revision:"ec179007dafffac73d2f0215a2147ea7"},{url:"628d7ba77.js",revision:"ec179007dafffac73d2f0215a2147ea7"},{url:"628d7ba78.js",revision:"ec179007dafffac73d2f0215a2147ea7"},{url:"7f0f290f.css",revision:"c983a6de2922a360ff121cfcb42e594f"},{url:"84f75fb6.js",revision:"93eef02a4fa9454fabbc8754d6759e7d"},{url:"9438c648.js",revision:"bf67d2fbb385bc8e46ffbde5c7124577"},{url:"962426a7.js",revision:"bc399837bff7950c407d3c8248665659"},{url:"a0513237.css",revision:"a3d8fa08c801b54cf7b24db2c5e670d1"},{url:"b8c01bc2.css",revision:"93ea8bd0b5fbfa74d10ceb56c127a465"},{url:"e46c39c1.js",revision:"b7113104e3d07320b075bd5bbd349888"},{url:"e6ce5ae0.js",revision:"be99be1ac43afefee46272329b35a7ed"},{url:"e87d2fb2.js",revision:"d2d45f5a712c943d9db301148649507b"},{url:"index.html",revision:"0f363134af85bb5eadbedb7b6a931611"},{url:"workshop-1/chain-of-custody-zome/index.html",revision:"a91dbb55e8f3d12803e6074cc90117dd"},{url:"workshop-1/design/index.html",revision:"f8b6e9c02248b2b8bd216e991ceaf723"},{url:"workshop-1/index.html",revision:"66fff79fc4401b88995edd64b233e78e"},{url:"workshop-1/requirements/index.html",revision:"27d9d7ba3befb0c38a96ef019c7511f5"},{url:"workshop-1/requirements/resources/index.html",revision:"38cb64a7d06d349702891ed568267de2"},{url:"workshop-1/requirements/setup/index.html",revision:"e1ee1bfcf0000ae1cc954e9f866f3415"},{url:"workshop-1/resources-zome/index.html",revision:"a2ce97f0b2974df867f36bd9ce85f5d0"}],{}),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
