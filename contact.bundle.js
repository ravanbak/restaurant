/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/loadpage.js":
/*!*************************!*\
  !*** ./src/loadpage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addElement": () => (/* binding */ addElement),
/* harmony export */   "loadPage": () => (/* binding */ loadPage)
/* harmony export */ });
/* harmony import */ var _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/hero.jpg */ "./src/assets/hero.jpg");


function loadPage() {
    const content = document.querySelector('div#content');
    if (!content) {
        return;
    }

    content.appendChild(getHeaderElement());
    content.appendChild(getNavElement());
    content.appendChild(getTabContentElement());
    content.appendChild(getFooterElement());
}

function getHeaderElement() {
    const header = document.createElement('div');
    header.classList.add('header');

    const divTitleAndImage = document.createElement('div');
    
    const divTitle = document.createElement('div');
    divTitle.classList.add('hero-text');

    const h1 = document.createElement('h1');
    h1.textContent = 'Cheese on Bread';
    divTitle.appendChild(h1);

    const h2 = document.createElement('h2');
    h2.textContent = 'Bajan Restaurant';
    divTitle.appendChild(h2);

    divTitleAndImage.appendChild(divTitle);

    const img = new Image();
    img.src = _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_0__;
    img.alt = 'A round table, with seating for six, with a view of the Caribbean Sea.'
    img.classList.add('hero');

    divTitleAndImage.appendChild(img);

    header.appendChild(divTitleAndImage);

    const h3 = document.createElement('h3');
    h3.textContent = 'Discover the taste of cheese and bread in the Caribbean';

    header.appendChild(h3);

    return header;
}

function getNavElement() {
    const topnav = document.createElement('div');
    topnav.id = 'topnav';

    const btnHome = document.createElement('button');
    btnHome.type = 'button';
    btnHome.textContent = "Home";
    btnHome.id = 'btn-home';
    btnHome.value = 'home';
    topnav.appendChild(btnHome);

    const btnMenu = document.createElement('button');
    btnMenu.type = 'button';
    btnMenu.textContent = "Menu";
    btnMenu.id = 'btn-menu';
    btnMenu.value = 'menu';
    topnav.appendChild(btnMenu);

    const btnContact = document.createElement('button');
    btnContact.type = 'button';
    btnContact.textContent = "Contact";
    btnContact.id = 'btn-contact';
    btnContact.value = 'contact';
    topnav.appendChild(btnContact);

    return topnav;
}

function getTabContentElement() {
    const tabContent = document.createElement('div');
    tabContent.id = 'tabcontent';

    return tabContent;
}

function getFooterElement() {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const footerContent = document.createElement('div');
    footerContent.classList.add('footer-content');

    const span = document.createElement('span');
    span.textContent='Copyright © 2022 David Ravanbakhsh';

    const a = document.createElement('a');
    a.href = 'https://github.com/ravanbak';
    a.target = '_blank';

    const i = document.createElement('i');
    i.classList.add('fa-brands');
    i.classList.add('fa-github-square');
    i.classList.add('fa-2x');
    a.appendChild(i);
    
    footerContent.appendChild(span);
    footerContent.appendChild(a);

    footer.appendChild(footerContent);

    return footer;
}

function addElement(parent, tagName, textContent, className) {
    const el = document.createElement(tagName);

    if (textContent) {
        el.textContent = textContent;
    }
    
    if (className) {
        el.classList.add(className);
    }

    parent.appendChild(el);

    return el;
}



/***/ }),

/***/ "./src/assets/hero.jpg":
/*!*****************************!*\
  !*** ./src/assets/hero.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b5f78dfcd3964c8e0bb.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getContactContent": () => (/* binding */ getContactContent)
/* harmony export */ });
/* harmony import */ var _loadpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loadpage */ "./src/loadpage.js");


function getContactContent() {
    const contactContent = document.createElement('div');
    contactContent.classList.add('tab-content');
    
    const contactCard = (0,_loadpage__WEBPACK_IMPORTED_MODULE_0__.addElement)(contactContent, 'div', '', 'contact-card');
    
    (0,_loadpage__WEBPACK_IMPORTED_MODULE_0__.addElement)(contactCard, 'h1', 'Contact Us!');
    (0,_loadpage__WEBPACK_IMPORTED_MODULE_0__.addElement)(contactCard, 'div', '29 Flamboyant Ave Sunset Crest,', 'contact-address');
    (0,_loadpage__WEBPACK_IMPORTED_MODULE_0__.addElement)(contactCard, 'div', 'Saint James', 'contact-address');
    (0,_loadpage__WEBPACK_IMPORTED_MODULE_0__.addElement)(contactCard, 'div', 'Barbados', 'contact-address');
    (0,_loadpage__WEBPACK_IMPORTED_MODULE_0__.addElement)(contactCard, 'p', '', '');
    (0,_loadpage__WEBPACK_IMPORTED_MODULE_0__.addElement)(contactCard, 'div', 'Phone: 246-432-7189', 'contact-address');
    (0,_loadpage__WEBPACK_IMPORTED_MODULE_0__.addElement)(contactCard, 'div', 'e-mail: cheese-on-bread@hotmail.com', 'contact-address');
    
    contactContent.appendChild(contactCard);

    return contactContent;
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsY0FBYyw2Q0FBSTtBQUNsQjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvSEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2Z3Qzs7QUFFeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscURBQVU7QUFDbEM7QUFDQSxJQUFJLHFEQUFVO0FBQ2QsSUFBSSxxREFBVTtBQUNkLElBQUkscURBQVU7QUFDZCxJQUFJLHFEQUFVO0FBQ2QsSUFBSSxxREFBVTtBQUNkLElBQUkscURBQVU7QUFDZCxJQUFJLHFEQUFVO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9sb2FkcGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9jb250YWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoZXJvIGZyb20gJy4vYXNzZXRzL2hlcm8uanBnJztcblxuZnVuY3Rpb24gbG9hZFBhZ2UoKSB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpdiNjb250ZW50Jyk7XG4gICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdldEhlYWRlckVsZW1lbnQoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChnZXROYXZFbGVtZW50KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2V0VGFiQ29udGVudEVsZW1lbnQoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChnZXRGb290ZXJFbGVtZW50KCkpO1xufVxuXG5mdW5jdGlvbiBnZXRIZWFkZXJFbGVtZW50KCkge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIGNvbnN0IGRpdlRpdGxlQW5kSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBcbiAgICBjb25zdCBkaXZUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdlRpdGxlLmNsYXNzTGlzdC5hZGQoJ2hlcm8tdGV4dCcpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gJ0NoZWVzZSBvbiBCcmVhZCc7XG4gICAgZGl2VGl0bGUuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLnRleHRDb250ZW50ID0gJ0JhamFuIFJlc3RhdXJhbnQnO1xuICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKGgyKTtcblxuICAgIGRpdlRpdGxlQW5kSW1hZ2UuYXBwZW5kQ2hpbGQoZGl2VGl0bGUpO1xuXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IGhlcm87XG4gICAgaW1nLmFsdCA9ICdBIHJvdW5kIHRhYmxlLCB3aXRoIHNlYXRpbmcgZm9yIHNpeCwgd2l0aCBhIHZpZXcgb2YgdGhlIENhcmliYmVhbiBTZWEuJ1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG5cbiAgICBkaXZUaXRsZUFuZEltYWdlLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoZGl2VGl0bGVBbmRJbWFnZSk7XG5cbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSAnRGlzY292ZXIgdGhlIHRhc3RlIG9mIGNoZWVzZSBhbmQgYnJlYWQgaW4gdGhlIENhcmliYmVhbic7XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gZ2V0TmF2RWxlbWVudCgpIHtcbiAgICBjb25zdCB0b3BuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BuYXYuaWQgPSAndG9wbmF2JztcblxuICAgIGNvbnN0IGJ0bkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5Ib21lLnR5cGUgPSAnYnV0dG9uJztcbiAgICBidG5Ib21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgYnRuSG9tZS5pZCA9ICdidG4taG9tZSc7XG4gICAgYnRuSG9tZS52YWx1ZSA9ICdob21lJztcbiAgICB0b3BuYXYuYXBwZW5kQ2hpbGQoYnRuSG9tZSk7XG5cbiAgICBjb25zdCBidG5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuTWVudS50eXBlID0gJ2J1dHRvbic7XG4gICAgYnRuTWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIGJ0bk1lbnUuaWQgPSAnYnRuLW1lbnUnO1xuICAgIGJ0bk1lbnUudmFsdWUgPSAnbWVudSc7XG4gICAgdG9wbmF2LmFwcGVuZENoaWxkKGJ0bk1lbnUpO1xuXG4gICAgY29uc3QgYnRuQ29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bkNvbnRhY3QudHlwZSA9ICdidXR0b24nO1xuICAgIGJ0bkNvbnRhY3QudGV4dENvbnRlbnQgPSBcIkNvbnRhY3RcIjtcbiAgICBidG5Db250YWN0LmlkID0gJ2J0bi1jb250YWN0JztcbiAgICBidG5Db250YWN0LnZhbHVlID0gJ2NvbnRhY3QnO1xuICAgIHRvcG5hdi5hcHBlbmRDaGlsZChidG5Db250YWN0KTtcblxuICAgIHJldHVybiB0b3BuYXY7XG59XG5cbmZ1bmN0aW9uIGdldFRhYkNvbnRlbnRFbGVtZW50KCkge1xuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWJDb250ZW50LmlkID0gJ3RhYmNvbnRlbnQnO1xuXG4gICAgcmV0dXJuIHRhYkNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGdldEZvb3RlckVsZW1lbnQoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3RlckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgc3Bhbi50ZXh0Q29udGVudD0nQ29weXJpZ2h0IMKpIDIwMjIgRGF2aWQgUmF2YW5iYWtoc2gnO1xuXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3JhdmFuYmFrJztcbiAgICBhLnRhcmdldCA9ICdfYmxhbmsnO1xuXG4gICAgY29uc3QgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhLWJyYW5kcycpO1xuICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtZ2l0aHViLXNxdWFyZScpO1xuICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtMngnKTtcbiAgICBhLmFwcGVuZENoaWxkKGkpO1xuICAgIFxuICAgIGZvb3RlckNvbnRlbnQuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgZm9vdGVyQ29udGVudC5hcHBlbmRDaGlsZChhKTtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChmb290ZXJDb250ZW50KTtcblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnQocGFyZW50LCB0YWdOYW1lLCB0ZXh0Q29udGVudCwgY2xhc3NOYW1lKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIFxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbCk7XG5cbiAgICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCB7IFxuICAgIGxvYWRQYWdlLFxuICAgIGFkZEVsZW1lbnQsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCB7IGFkZEVsZW1lbnQgfSBmcm9tIFwiLi9sb2FkcGFnZVwiO1xuXG5mdW5jdGlvbiBnZXRDb250YWN0Q29udGVudCgpIHtcbiAgICBjb25zdCBjb250YWN0Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50Jyk7XG4gICAgXG4gICAgY29uc3QgY29udGFjdENhcmQgPSBhZGRFbGVtZW50KGNvbnRhY3RDb250ZW50LCAnZGl2JywgJycsICdjb250YWN0LWNhcmQnKTtcbiAgICBcbiAgICBhZGRFbGVtZW50KGNvbnRhY3RDYXJkLCAnaDEnLCAnQ29udGFjdCBVcyEnKTtcbiAgICBhZGRFbGVtZW50KGNvbnRhY3RDYXJkLCAnZGl2JywgJzI5IEZsYW1ib3lhbnQgQXZlIFN1bnNldCBDcmVzdCwnLCAnY29udGFjdC1hZGRyZXNzJyk7XG4gICAgYWRkRWxlbWVudChjb250YWN0Q2FyZCwgJ2RpdicsICdTYWludCBKYW1lcycsICdjb250YWN0LWFkZHJlc3MnKTtcbiAgICBhZGRFbGVtZW50KGNvbnRhY3RDYXJkLCAnZGl2JywgJ0JhcmJhZG9zJywgJ2NvbnRhY3QtYWRkcmVzcycpO1xuICAgIGFkZEVsZW1lbnQoY29udGFjdENhcmQsICdwJywgJycsICcnKTtcbiAgICBhZGRFbGVtZW50KGNvbnRhY3RDYXJkLCAnZGl2JywgJ1Bob25lOiAyNDYtNDMyLTcxODknLCAnY29udGFjdC1hZGRyZXNzJyk7XG4gICAgYWRkRWxlbWVudChjb250YWN0Q2FyZCwgJ2RpdicsICdlLW1haWw6IGNoZWVzZS1vbi1icmVhZEBob3RtYWlsLmNvbScsICdjb250YWN0LWFkZHJlc3MnKTtcbiAgICBcbiAgICBjb250YWN0Q29udGVudC5hcHBlbmRDaGlsZChjb250YWN0Q2FyZCk7XG5cbiAgICByZXR1cm4gY29udGFjdENvbnRlbnQ7XG59XG5cbmV4cG9ydCB7IGdldENvbnRhY3RDb250ZW50IH07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9