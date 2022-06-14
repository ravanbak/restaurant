(()=>{"use strict";var e={975:(e,n,t)=>{t.d(n,{Z:()=>c});var o=t(81),a=t.n(o),r=t(645),i=t.n(r)()(a());i.push([e.id,".menu-group-heading {\n    font-size: 4em;\n    margin: 20px auto 20px;\n}\n\n.menu-item * {\n    margin: 0;\n    color: var(--color-deep-ocean);\n}\n\n.menu-item {\n    display: flex;\n    flex-grow: 1;\n    flex-wrap: wrap;\n    align-content: center;\n    background: var(--color-sand-light);\n    padding: 25px 15px 0 25px;\n    margin: 0 50px 20px 50px;\n    border-radius: 20px;\n    box-shadow: var(--box-shadow);\n}\n\n.menu-item-name {\n    width: 60%;\n    font-size: 3em;\n    font-weight: bolder;\n}\n\n.menu-item-price {\n    margin-left: auto;\n    text-align: right;\n    font-style: italic;\n    width: 40%;\n    font-size: 2em;\n    font-weight: bolder;\n}\n\n.menu-item-description {\n    margin: 30px 0;\n    font-size: 1.5em;\n    font-weight: bolder;\n}\n",""]);const c=i},61:(e,n,t)=>{t.d(n,{Z:()=>u});var o=t(81),a=t.n(o),r=t(645),i=t.n(r),c=t(667),s=t.n(c),d=new URL(t(751),t.b),l=i()(a()),p=s()(d);l.push([e.id,":root {\n    --color-blue-ocean: #00b7a8;\n    --color-deep-ocean: #123a43;\n    --color-sand: #f4a460;\n    --color-sand-light: #f8c9a0;\n    --box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.5);\n}\n\n@font-face {\n    font-family: BernardoModa;\n    src: url("+p+");\n}\n\n* {\n    /* border: 1px solid rgb(255, 8, 136); */\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    font-family: 'BernardoModa';\n    margin: auto;    \n    background-color: var(--color-deep-ocean);\n    min-width: 700px;\n    max-width: 1000px;\n}\n\n.header {\n    display: flex;\n    flex-direction: column;\n    background-image: linear-gradient(azure , var(--color-blue-ocean));\n    color: var(--color-deep-ocean);\n    padding: 30px;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.header div {\n    display: flex;\n}\n\n.hero-text {\n    display: flex;\n    flex-direction: column;\n    text-align: right;\n    padding: 0 25px 0;\n}\n\n.hero-text h1 {\n    font-size: 4em;\n    margin: 0;\n    padding: 0;\n    text-shadow: 3px 3px 10px var(--color-deep-ocean);\n}\n\n.hero-text h2 {\n    margin-top: 0;\n    margin-left: auto;\n}\n\n.header h3 {\n    text-shadow: 3px 3px 16px white;\n    font-style: italic;\n    font-size: 1.5em;\n    margin: 20px auto 0;\n}\n\nimg.hero {\n    width: 450px;\n    border-radius: 20px;\n    box-shadow: 3px 3px 10px var(--color-deep-ocean);\n}\n\n#topnav {\n    display: flex;\n    justify-content: left;\n    background: var(--color-blue-ocean);\n    padding-left: 30px;\n}\n\n#topnav button {\n    color: var(--color-deep-ocean);\n    background-color: var(--color-sand);\n    font-family: inherit;\n    font-size: 2em;\n    font-weight: bolder;\n    text-decoration: none;\n    border: none;\n    border-color: var(--color-deep-ocean);\n    border-radius: 10px;\n    margin: 5px 10px 0 0;\n    padding: 5px 25px;\n}\n\n.tab-content {\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n    color: var(--color-deep-ocean);\n    background: var(--color-blue-ocean);\n    padding: 30px;\n}\n\n#home-img-container {\n    text-align: left;\n    position: relative;\n}\n\n#home-img-container img {\n    width: 100%;\n    border-radius: 20px;\n    box-shadow: 3px 3px 10px teal;\n}\n\n#home-img-container div {\n    max-height: 100%;\n    position: absolute; \n    top: 5%;\n    left: 50%;\n    transform: translate(-90%, 0);\n    font-size: 2em;\n    color: var(--color-sand);\n    text-shadow: 1px 1px 15px black;\n}\n\n#home-img-container h1 {\n    margin: 0;\n}\n\n#home-img-container h3 {\n    font-style: italic;\n    font-size: 0.5em;\n    text-shadow: 1px 1px 3px black;\n    margin: 0;\n}\n\n.body {\n    display: flex;\n    justify-content: center;\n    background-color: var(--color-deep-ocean);\n    color: var(--color-blue-ocean);\n    font-size: 10em;\n    padding: 40px;\n}\n\n.slideshow-container {\n    display: flex;\n    min-height: 300px;\n    justify-content: space-between;\n    align-items: center;\n}\n\n.slideshow-container .slides {\n    display: none;\n}\n\n.slideshow-container blockquote {\n    text-align: center;\n    margin: 10px;\n}\n\n.prev, .next {\n    color: var(--color-sand);\n    cursor: pointer;\n    padding: 16px;\n    font-weight: bold;\n    font-size: 18px;\n    user-select: none;\n}\n\n.quote {\n    color: var(--color-deep-ocean);\n    font-size: 2rem;\n    font-style: italic;\n    font-weight: bold;\n}\n\n.attrib {\n    text-align: center;\n    font-size: 1.5rem;\n    font-style: italic;\n    font-weight: bold;\n}\n\n.fade {\n    animation-name: fade;\n    animation-duration: 2s;\n}\n\n@keyframes fade {\n    0% { opacity: 0; }\n    100% { opacity: 1; }\n}\n\n.contact-card {\n    color: var(--color-deep-ocean);\n    background: var(--color-sand-light);\n    font-size: 2em;\n    font-weight: bolder;\n    padding: 0 40px 40px;\n    border-radius: 20px;\n    box-shadow: var(--box-shadow);\n}\n\n.footer * {\n    display: flex;\n    background-color: var(--color-deep-ocean);\n    color: var(--color-blue-ocean);\n    justify-content: center;\n}\n\n.footer-content {\n    padding: 10px;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n    align-items: center;\n    justify-content: center;\n}\n\n.footer i {\n    color: var(--color-sand);\n    margin-left: 20px;\n}",""]);const u=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",o=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),o&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),o&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,o,a,r){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);o&&i[l[0]]||(void 0!==r&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=r),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,o=0;o<n.length;o++)if(n[o].identifier===e){t=o;break}return t}function o(e,o){for(var r={},i=[],c=0;c<e.length;c++){var s=e[c],d=o.base?s[0]+o.base:s[0],l=r[d]||0,p="".concat(d," ").concat(l);r[d]=l+1;var u=t(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)n[u].references++,n[u].updater(m);else{var h=a(m,o);o.byIndex=c,n.splice(c,0,{identifier:p,updater:h,references:1})}i.push(p)}return i}function a(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,a){var r=o(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<r.length;i++){var c=t(r[i]);n[c].references--}for(var s=o(e,a),d=0;d<r.length;d++){var l=t(r[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}r=s}}},569:e=>{var n={};e.exports=function(e,t){var o=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var a=void 0!==t.layer;a&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,a&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),n.styleTagTransform(o,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},637:(e,n,t)=>{t.d(n,{Z:()=>a});var o=t(707);function a(){const e=document.createElement("div");e.classList.add("tab-content");const n=(0,o.M)(e,"div","","contact-card");return(0,o.M)(n,"h1","Contact Us!"),(0,o.M)(n,"div","29 Flamboyant Ave Sunset Crest,","contact-address"),(0,o.M)(n,"div","Saint James","contact-address"),(0,o.M)(n,"div","Barbados","contact-address"),(0,o.M)(n,"p","",""),(0,o.M)(n,"div","Phone: 246-432-7189","contact-address"),(0,o.M)(n,"div","e-mail: cheese-on-bread@hotmail.com","contact-address"),e.appendChild(n),e}},212:(e,n,t)=>{t.d(n,{J:()=>s,q:()=>l});const o=t.p+"2916b83d7cef90e09f34.jpg";var a=t(707);const r=[{review:'"To say that both the meal and its maker have challenged my preconceptions about fine cooking is a gross understatement. They have rocked me to my core."',name:"Anton Ego"},{review:'"I tried to order a cheeseburger but they said they don\'t have any cheese or bread."',name:"Kevin Reynette"},{review:'"I like the fact that they serve food here because sometimes I get hungry."',name:"Reissa Scott"},{review:'"I ordered some fried plantains and they were exactly as described."',name:"Natasha Ichiro"}];let i=0,c=-1;function s(){i=0;const e=document.createElement("div");e.classList.add("tab-content");const n=document.createElement("div");n.id="home-img-container";const t=new Image;t.src=o,t.alt="A beach in Barbados",n.appendChild(t);const c=document.createElement("div"),s=document.createElement("h1");s.textContent="Located in the heart of Barbados",c.appendChild(s);const l=document.createElement("h3");return l.textContent="(not pictured here — this is a different part of Barbados)",c.appendChild(l),n.appendChild(c),e.appendChild(n),e.appendChild(function(){const e=document.createElement("div");let n;e.classList.add("slideshow-container"),(0,a.M)(e,"a","❮","prev").addEventListener("click",(()=>d(-1)));for(let t=0;t<r.length;t++)n=(0,a.M)(e,"div","","slides"),n.classList.add("fade"),(0,a.M)(n,"blockquote",r[t].review,"quote"),(0,a.M)(n,"figcaption","—"+r[t].name,"attrib");return(0,a.M)(e,"a","❯","next").addEventListener("click",(()=>d(1))),e}()),e}function d(e){c>=0&&(clearInterval(c),c=-1);let n=document.getElementsByClassName("slides");n&&(c=setInterval((()=>d(1)),7e3),i+=e,i>=n.length?i=0:i<0&&(i=n.length-1),l())}function l(){let e=document.getElementsByClassName("slides");e&&c<0&&(c=setInterval((()=>d(1)),7e3));for(let n=0;n<e.length;n++)e[n].style.display="none";e[i].style.display="block"}},707:(e,n,t)=>{t.d(n,{M:()=>r,i:()=>a});const o=t.p+"1b5f78dfcd3964c8e0bb.jpg";function a(){const e=document.querySelector("div#content");e&&(e.appendChild(function(){const e=document.createElement("div");e.classList.add("header");const n=r(e,"div"),t=r(n,"div","","hero-text"),a=(r(t,"h1","Cheese on Bread"),r(t,"h2","Bajan Restaurant"),new Image);return a.src=o,a.alt="A round table, with seating for six, with a view of the Caribbean Sea.",a.classList.add("hero"),n.appendChild(a),r(e,"h3","Discover the taste of cheese and bread in the Caribbean"),e}()),e.appendChild(function(){const e=document.createElement("div");return e.id="topnav",r(e,"button","Home","","btn-home"),r(e,"button","Menu","","btn-menu"),r(e,"button","Contact","","btn-contact"),e}()),e.appendChild(function(){const e=document.createElement("div");return e.id="tabcontent",e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("footer");const n=r(e,"div","","footer-content");r(n,"span","Copyright © 2022 David Ravanbakhsh");const t=r(n,"a");t.href="https://github.com/ravanbak",t.target="_blank";const o=r(t,"i");return o.classList.add("fa-brands"),o.classList.add("fa-github-square"),o.classList.add("fa-2x"),e}()))}function r(e,n,t,o,a){const r=document.createElement(n);return t&&(r.textContent=t),o&&r.classList.add(o),a&&(r.id=a),e.appendChild(r),r}},80:(e,n,t)=>{t.d(n,{R:()=>x});var o=t(379),a=t.n(o),r=t(795),i=t.n(r),c=t(569),s=t.n(c),d=t(565),l=t.n(d),p=t(216),u=t.n(p),m=t(589),h=t.n(m),f=t(975),b={};b.styleTagTransform=h(),b.setAttributes=l(),b.insert=s().bind(null,"head"),b.domAPI=i(),b.insertStyleElement=u(),a()(f.Z,b),f.Z&&f.Z.locals&&f.Z.locals;var g=t(707);const v=JSON.parse('{"bT":[{"name":"Fried Plantains","description":"Our fried ripe plantains have a crispy, caramelized texture and an irresistibly sweet taste.","price":4.99},{"name":"Fish Cakes","description":"Tender flakes of fish mixed with butter, garlic, and potato, then coated with breadcrumbs and pan fried until golden.","price":6.99},{"name":"Conkies","description":"A sweet cornmeal-based food-like item.","price":5.99},{"name":"Jug-Jug","description":"Not sure about this one, either. Maybe two jugs?","price":7.99},{"name":"Rice and Peas","description":"Rice and peas.","price":5.49}],"gl":[{"name":"Cou-cou","description":"The national dish of Barbados when eaten with flying fish.","price":18.99},{"name":"Jug-Jug","description":"This again. Still don\'t know what it is.","price":18.99},{"name":"Fried Flying Fish","description":"Fresh flying fish fillets, fried frantically for five fortnights. Featuring fashionably fat french fries.","price":18.99}],"Gb":[{"name":"Bajan Black Cake","description":"Just read the name.","price":14.99},{"name":"Corn Pie","description":"This has onion in it, yet it\'s listed as a dessert. You can\'t explain that.","price":14.99}],"d":[{"name":"Water","description":"Only the finest hydrogen and oxygen atoms, combined in the perfect ratio of 2:1.","price":0},{"name":"Paw-Paw and Coconut Drink","description":"We take a paw and combine it with another paw, for a total of two paws, then we throw in some coconut.","price":3.99}]}');function x(){const e=document.createElement("div");return e.classList.add("tab-content"),y(e,"Appetizers",v.bT),y(e,"Main Courses",v.gl),y(e,"Desserts",v.Gb),y(e,"Beverages",v.d),e}function y(e,n,t){(0,g.M)(e,"h1",n,"menu-group-heading"),t.forEach((n=>{const t=`$${n.price} BBD`;!function(e,n,t,o){const a=document.createElement("div");a.classList.add("menu-item"),(0,g.M)(a,"h2",n,"menu-item-name"),(0,g.M)(a,"span",o,"menu-item-price"),(0,g.M)(a,"div",t,"menu-item-description"),e.appendChild(a)}(e,n.name,n.description,t)}))}},751:(e,n,t)=>{e.exports=t.p+"d68149b8f30eeeeb08ca.ttf"}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,exports:{}};return e[o](r,r.exports,t),r.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var o=n.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),o=t(795),a=t.n(o),r=t(569),i=t.n(r),c=t(565),s=t.n(c),d=t(216),l=t.n(d),p=t(589),u=t.n(p),m=t(61),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=i().bind(null,"head"),h.domAPI=a(),h.insertStyleElement=l(),n()(m.Z,h),m.Z&&m.Z.locals&&m.Z.locals;var f=t(707),b=t(212),g=t(80),v=t(637);function x(e){!function(){const e=document.querySelector("#tabcontent");if(e)for(;e.lastChild;)e.removeChild(e.lastChild)}();const n=document.querySelector("#tabcontent");if(n){switch(e){case"home":n.appendChild((0,b.J)()),(0,b.q)();break;case"menu":n.appendChild((0,g.R)());break;case"contact":n.appendChild((0,v.Z)())}!function(e){const n=document.querySelectorAll("#topnav button");for(let e=0;e<n.length;e++)n[e].style.borderBottom="9px solid",n[e].style.borderColor="#f8c9a000";let t;switch(e){case"home":t=document.querySelector("#btn-home");break;case"menu":t=document.querySelector("#btn-menu");break;case"contact":t=document.querySelector("#btn-contact")}t.style.borderColor="#123a43"}(e)}}(0,f.i)(),function(){let e=document.querySelector("#btn-home");e.addEventListener("click",(()=>x("home"))),e=document.querySelector("#btn-menu"),e.addEventListener("click",(()=>x("menu"))),e=document.querySelector("#btn-contact"),e.addEventListener("click",(()=>x("contact")))}(),x("home")})()})();