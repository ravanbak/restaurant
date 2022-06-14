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

    const divTitleAndImage = addElement(header, 'div');
    const divTitle = addElement(divTitleAndImage, 'div', '', 'hero-text');

    const h1 = addElement(divTitle, 'h1', 'Cheese on Bread');
    const h2 = addElement(divTitle, 'h2', 'Bajan Restaurant');

    const img = new Image();
    img.src = _assets_hero_jpg__WEBPACK_IMPORTED_MODULE_0__;
    img.alt = 'A round table, with seating for six, with a view of the Caribbean Sea.'
    img.classList.add('hero');

    divTitleAndImage.appendChild(img);

    const h3 = addElement(header, 'h3', 'Discover the taste of cheese and bread in the Caribbean');

    return header;
}

function getNavElement() {
    const topnav = document.createElement('div');
    topnav.id = 'topnav';

    addElement(topnav, 'button', "Home", '', 'btn-home');
    addElement(topnav, 'button', "Menu", '', 'btn-menu');
    addElement(topnav, 'button', 'Contact', '', 'btn-contact');

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

    const footerContent = addElement(footer, 'div', '', 'footer-content');

    addElement(footerContent, 'span', 'Copyright © 2022 David Ravanbakhsh');

    const a = addElement(footerContent, 'a');
    a.href = 'https://github.com/ravanbak';
    a.target = '_blank';

    const i = addElement(a, 'i');
    i.classList.add('fa-brands');
    i.classList.add('fa-github-square');
    i.classList.add('fa-2x');

    return footer;
}

function addElement(parent, tagName, textContent, className, id) {
    const el = document.createElement(tagName);

    if (textContent) {
        el.textContent = textContent;
    }
    
    if (className) {
        el.classList.add(className);
    }

    if (id) {
        el.id = id;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLDZDQUFJO0FBQ2xCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzVGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7O0FDZndDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxREFBVTtBQUNsQztBQUNBLElBQUkscURBQVU7QUFDZCxJQUFJLHFEQUFVO0FBQ2QsSUFBSSxxREFBVTtBQUNkLElBQUkscURBQVU7QUFDZCxJQUFJLHFEQUFVO0FBQ2QsSUFBSSxxREFBVTtBQUNkLElBQUkscURBQVU7QUFDZDtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2xvYWRwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2NvbnRhY3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhlcm8gZnJvbSAnLi9hc3NldHMvaGVyby5qcGcnO1xuXG5mdW5jdGlvbiBsb2FkUGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGl2I2NvbnRlbnQnKTtcbiAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2V0SGVhZGVyRWxlbWVudCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdldE5hdkVsZW1lbnQoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChnZXRUYWJDb250ZW50RWxlbWVudCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdldEZvb3RlckVsZW1lbnQoKSk7XG59XG5cbmZ1bmN0aW9uIGdldEhlYWRlckVsZW1lbnQoKSB7XG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuXG4gICAgY29uc3QgZGl2VGl0bGVBbmRJbWFnZSA9IGFkZEVsZW1lbnQoaGVhZGVyLCAnZGl2Jyk7XG4gICAgY29uc3QgZGl2VGl0bGUgPSBhZGRFbGVtZW50KGRpdlRpdGxlQW5kSW1hZ2UsICdkaXYnLCAnJywgJ2hlcm8tdGV4dCcpO1xuXG4gICAgY29uc3QgaDEgPSBhZGRFbGVtZW50KGRpdlRpdGxlLCAnaDEnLCAnQ2hlZXNlIG9uIEJyZWFkJyk7XG4gICAgY29uc3QgaDIgPSBhZGRFbGVtZW50KGRpdlRpdGxlLCAnaDInLCAnQmFqYW4gUmVzdGF1cmFudCcpO1xuXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IGhlcm87XG4gICAgaW1nLmFsdCA9ICdBIHJvdW5kIHRhYmxlLCB3aXRoIHNlYXRpbmcgZm9yIHNpeCwgd2l0aCBhIHZpZXcgb2YgdGhlIENhcmliYmVhbiBTZWEuJ1xuICAgIGltZy5jbGFzc0xpc3QuYWRkKCdoZXJvJyk7XG5cbiAgICBkaXZUaXRsZUFuZEltYWdlLmFwcGVuZENoaWxkKGltZyk7XG5cbiAgICBjb25zdCBoMyA9IGFkZEVsZW1lbnQoaGVhZGVyLCAnaDMnLCAnRGlzY292ZXIgdGhlIHRhc3RlIG9mIGNoZWVzZSBhbmQgYnJlYWQgaW4gdGhlIENhcmliYmVhbicpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gZ2V0TmF2RWxlbWVudCgpIHtcbiAgICBjb25zdCB0b3BuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0b3BuYXYuaWQgPSAndG9wbmF2JztcblxuICAgIGFkZEVsZW1lbnQodG9wbmF2LCAnYnV0dG9uJywgXCJIb21lXCIsICcnLCAnYnRuLWhvbWUnKTtcbiAgICBhZGRFbGVtZW50KHRvcG5hdiwgJ2J1dHRvbicsIFwiTWVudVwiLCAnJywgJ2J0bi1tZW51Jyk7XG4gICAgYWRkRWxlbWVudCh0b3BuYXYsICdidXR0b24nLCAnQ29udGFjdCcsICcnLCAnYnRuLWNvbnRhY3QnKTtcblxuICAgIHJldHVybiB0b3BuYXY7XG59XG5cbmZ1bmN0aW9uIGdldFRhYkNvbnRlbnRFbGVtZW50KCkge1xuICAgIGNvbnN0IHRhYkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0YWJDb250ZW50LmlkID0gJ3RhYmNvbnRlbnQnO1xuXG4gICAgcmV0dXJuIHRhYkNvbnRlbnQ7XG59XG5cbmZ1bmN0aW9uIGdldEZvb3RlckVsZW1lbnQoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgZm9vdGVyQ29udGVudCA9IGFkZEVsZW1lbnQoZm9vdGVyLCAnZGl2JywgJycsICdmb290ZXItY29udGVudCcpO1xuXG4gICAgYWRkRWxlbWVudChmb290ZXJDb250ZW50LCAnc3BhbicsICdDb3B5cmlnaHQgwqkgMjAyMiBEYXZpZCBSYXZhbmJha2hzaCcpO1xuXG4gICAgY29uc3QgYSA9IGFkZEVsZW1lbnQoZm9vdGVyQ29udGVudCwgJ2EnKTtcbiAgICBhLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL3JhdmFuYmFrJztcbiAgICBhLnRhcmdldCA9ICdfYmxhbmsnO1xuXG4gICAgY29uc3QgaSA9IGFkZEVsZW1lbnQoYSwgJ2knKTtcbiAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhLWJyYW5kcycpO1xuICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtZ2l0aHViLXNxdWFyZScpO1xuICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtMngnKTtcblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnQocGFyZW50LCB0YWdOYW1lLCB0ZXh0Q29udGVudCwgY2xhc3NOYW1lLCBpZCkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIGlmICh0ZXh0Q29udGVudCkge1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBpZiAoaWQpIHtcbiAgICAgICAgZWwuaWQgPSBpZDtcbiAgICB9XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWwpO1xuXG4gICAgcmV0dXJuIGVsO1xufVxuXG5leHBvcnQgeyBcbiAgICBsb2FkUGFnZSxcbiAgICBhZGRFbGVtZW50LFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBhZGRFbGVtZW50IH0gZnJvbSBcIi4vbG9hZHBhZ2VcIjtcblxuZnVuY3Rpb24gZ2V0Q29udGFjdENvbnRlbnQoKSB7XG4gICAgY29uc3QgY29udGFjdENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0Q29udGVudC5jbGFzc0xpc3QuYWRkKCd0YWItY29udGVudCcpO1xuICAgIFxuICAgIGNvbnN0IGNvbnRhY3RDYXJkID0gYWRkRWxlbWVudChjb250YWN0Q29udGVudCwgJ2RpdicsICcnLCAnY29udGFjdC1jYXJkJyk7XG4gICAgXG4gICAgYWRkRWxlbWVudChjb250YWN0Q2FyZCwgJ2gxJywgJ0NvbnRhY3QgVXMhJyk7XG4gICAgYWRkRWxlbWVudChjb250YWN0Q2FyZCwgJ2RpdicsICcyOSBGbGFtYm95YW50IEF2ZSBTdW5zZXQgQ3Jlc3QsJywgJ2NvbnRhY3QtYWRkcmVzcycpO1xuICAgIGFkZEVsZW1lbnQoY29udGFjdENhcmQsICdkaXYnLCAnU2FpbnQgSmFtZXMnLCAnY29udGFjdC1hZGRyZXNzJyk7XG4gICAgYWRkRWxlbWVudChjb250YWN0Q2FyZCwgJ2RpdicsICdCYXJiYWRvcycsICdjb250YWN0LWFkZHJlc3MnKTtcbiAgICBhZGRFbGVtZW50KGNvbnRhY3RDYXJkLCAncCcsICcnLCAnJyk7XG4gICAgYWRkRWxlbWVudChjb250YWN0Q2FyZCwgJ2RpdicsICdQaG9uZTogMjQ2LTQzMi03MTg5JywgJ2NvbnRhY3QtYWRkcmVzcycpO1xuICAgIGFkZEVsZW1lbnQoY29udGFjdENhcmQsICdkaXYnLCAnZS1tYWlsOiBjaGVlc2Utb24tYnJlYWRAaG90bWFpbC5jb20nLCAnY29udGFjdC1hZGRyZXNzJyk7XG4gICAgXG4gICAgY29udGFjdENvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFjdENhcmQpO1xuXG4gICAgcmV0dXJuIGNvbnRhY3RDb250ZW50O1xufVxuXG5leHBvcnQgeyBnZXRDb250YWN0Q29udGVudCB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==