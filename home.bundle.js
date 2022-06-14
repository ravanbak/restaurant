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

/***/ "./src/assets/beach.jpg":
/*!******************************!*\
  !*** ./src/assets/beach.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2916b83d7cef90e09f34.jpg";

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
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getHomeContent": () => (/* binding */ getHomeContent),
/* harmony export */   "showSlides": () => (/* binding */ showSlides)
/* harmony export */ });
/* harmony import */ var _assets_beach_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/beach.jpg */ "./src/assets/beach.jpg");
/* harmony import */ var _loadpage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadpage */ "./src/loadpage.js");



const reviews = [
    {
        'review': '"To say that both the meal and its maker have challenged my preconceptions about fine cooking is a gross understatement. They have rocked me to my core."',
        'name': 'Anton Ego',
    },
    {
        'review': '"I tried to order a cheeseburger but they said they don\'t have any cheese or bread."',
        'name': 'Kevin Reynette',
    },
    {
        'review': '"I like the fact that they serve food here because sometimes I get hungry."',
        'name': 'Reissa Scott',
    },
    {
        'review': '"I ordered some fried plantains and they were exactly as described."',
        'name': 'Natasha Ichiro',
    }    
];

let slideIdx = 0;
let slideIntervalID = -1;
const SLIDE_INTERVAL_MS = 7000;

function getHomeContent() {
    slideIdx = 0;

    const home = document.createElement('div');
    home.classList.add('tab-content');

    const container = document.createElement('div');
    container.id = 'home-img-container';

    const img = new Image();
    img.src = _assets_beach_jpg__WEBPACK_IMPORTED_MODULE_0__;
    img.alt = 'A beach in Barbados'
    container.appendChild(img);
    
    const textContainer = document.createElement('div');

    const h1 = document.createElement('h1');
    h1.textContent = "Located in the heart of Barbados"
    textContainer.appendChild(h1);

    const h3 = document.createElement('h3');
    h3.textContent = "(not pictured here — this is a different part of Barbados)";
    textContainer.appendChild(h3);

    container.appendChild(textContainer);

    home.appendChild(container);

    home.appendChild(getCustomerReviewSlideshowElement());

    return home;
}

function getCustomerReviewSlideshowElement() {
    const slideshow = document.createElement('div');
    slideshow.classList.add('slideshow-container');

    const prev = (0,_loadpage__WEBPACK_IMPORTED_MODULE_1__.addElement)(slideshow, 'a', '❮', 'prev');
    prev.addEventListener('click', () => showNextSlide(-1));

    let slide;
    for (let i = 0; i < reviews.length; i++) {
        slide = (0,_loadpage__WEBPACK_IMPORTED_MODULE_1__.addElement)(slideshow, 'div', '', 'slides');
        slide.classList.add('fade');
        (0,_loadpage__WEBPACK_IMPORTED_MODULE_1__.addElement)(slide, 'blockquote', reviews[i].review, 'quote');
        (0,_loadpage__WEBPACK_IMPORTED_MODULE_1__.addElement)(slide, 'figcaption', '—' + reviews[i].name, 'attrib');
    }
    
    const next = (0,_loadpage__WEBPACK_IMPORTED_MODULE_1__.addElement)(slideshow, 'a', '❯', 'next');
    next.addEventListener('click', () => showNextSlide(1));
    
    return slideshow;
}

function showNextSlide(n) {
    // Clear the interval and restart it so that, if the user clicked an arrow to
    // change slides, the next slide will be displayed for the full interval length.

    if (slideIntervalID >= 0) {
        clearInterval(slideIntervalID);
        slideIntervalID = -1;
    }

    let slides = document.getElementsByClassName('slides');
    if (!slides) {
        return;
    }

    slideIntervalID = setInterval(() => showNextSlide(1), SLIDE_INTERVAL_MS);

    slideIdx += n;
    
    if (slideIdx >= slides.length) {
        slideIdx = 0;
    } 
    else if (slideIdx < 0) {
        slideIdx = slides.length - 1;
    }

    showSlides();
}

function showSlides() {
    // Show a slideshow of customer reviews.

    let slides = document.getElementsByClassName('slides');
    if (slides) {
        if (slideIntervalID < 0) {
            slideIntervalID = setInterval(() => showNextSlide(1), SLIDE_INTERVAL_MS);
        }
    }

    // Show the current slide
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIdx].style.display = 'block';
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLDZDQUFJO0FBQ2xCO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM1RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZnVDO0FBQ0M7O0FBRXhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxjQUFjLDhDQUFLO0FBQ25CO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLHFEQUFVO0FBQzNCOztBQUVBO0FBQ0Esb0JBQW9CLG9CQUFvQjtBQUN4QyxnQkFBZ0IscURBQVU7QUFDMUI7QUFDQSxRQUFRLHFEQUFVO0FBQ2xCLFFBQVEscURBQVU7QUFDbEI7QUFDQTtBQUNBLGlCQUFpQixxREFBVTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbG9hZHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGVybyBmcm9tICcuL2Fzc2V0cy9oZXJvLmpwZyc7XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChnZXRIZWFkZXJFbGVtZW50KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2V0TmF2RWxlbWVudCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdldFRhYkNvbnRlbnRFbGVtZW50KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2V0Rm9vdGVyRWxlbWVudCgpKTtcbn1cblxuZnVuY3Rpb24gZ2V0SGVhZGVyRWxlbWVudCgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBkaXZUaXRsZUFuZEltYWdlID0gYWRkRWxlbWVudChoZWFkZXIsICdkaXYnKTtcbiAgICBjb25zdCBkaXZUaXRsZSA9IGFkZEVsZW1lbnQoZGl2VGl0bGVBbmRJbWFnZSwgJ2RpdicsICcnLCAnaGVyby10ZXh0Jyk7XG5cbiAgICBjb25zdCBoMSA9IGFkZEVsZW1lbnQoZGl2VGl0bGUsICdoMScsICdDaGVlc2Ugb24gQnJlYWQnKTtcbiAgICBjb25zdCBoMiA9IGFkZEVsZW1lbnQoZGl2VGl0bGUsICdoMicsICdCYWphbiBSZXN0YXVyYW50Jyk7XG5cbiAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWcuc3JjID0gaGVybztcbiAgICBpbWcuYWx0ID0gJ0Egcm91bmQgdGFibGUsIHdpdGggc2VhdGluZyBmb3Igc2l4LCB3aXRoIGEgdmlldyBvZiB0aGUgQ2FyaWJiZWFuIFNlYS4nXG4gICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcblxuICAgIGRpdlRpdGxlQW5kSW1hZ2UuYXBwZW5kQ2hpbGQoaW1nKTtcblxuICAgIGNvbnN0IGgzID0gYWRkRWxlbWVudChoZWFkZXIsICdoMycsICdEaXNjb3ZlciB0aGUgdGFzdGUgb2YgY2hlZXNlIGFuZCBicmVhZCBpbiB0aGUgQ2FyaWJiZWFuJyk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xufVxuXG5mdW5jdGlvbiBnZXROYXZFbGVtZW50KCkge1xuICAgIGNvbnN0IHRvcG5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRvcG5hdi5pZCA9ICd0b3BuYXYnO1xuXG4gICAgYWRkRWxlbWVudCh0b3BuYXYsICdidXR0b24nLCBcIkhvbWVcIiwgJycsICdidG4taG9tZScpO1xuICAgIGFkZEVsZW1lbnQodG9wbmF2LCAnYnV0dG9uJywgXCJNZW51XCIsICcnLCAnYnRuLW1lbnUnKTtcbiAgICBhZGRFbGVtZW50KHRvcG5hdiwgJ2J1dHRvbicsICdDb250YWN0JywgJycsICdidG4tY29udGFjdCcpO1xuXG4gICAgcmV0dXJuIHRvcG5hdjtcbn1cblxuZnVuY3Rpb24gZ2V0VGFiQ29udGVudEVsZW1lbnQoKSB7XG4gICAgY29uc3QgdGFiQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhYkNvbnRlbnQuaWQgPSAndGFiY29udGVudCc7XG5cbiAgICByZXR1cm4gdGFiQ29udGVudDtcbn1cblxuZnVuY3Rpb24gZ2V0Rm9vdGVyRWxlbWVudCgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBmb290ZXJDb250ZW50ID0gYWRkRWxlbWVudChmb290ZXIsICdkaXYnLCAnJywgJ2Zvb3Rlci1jb250ZW50Jyk7XG5cbiAgICBhZGRFbGVtZW50KGZvb3RlckNvbnRlbnQsICdzcGFuJywgJ0NvcHlyaWdodCDCqSAyMDIyIERhdmlkIFJhdmFuYmFraHNoJyk7XG5cbiAgICBjb25zdCBhID0gYWRkRWxlbWVudChmb290ZXJDb250ZW50LCAnYScpO1xuICAgIGEuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vcmF2YW5iYWsnO1xuICAgIGEudGFyZ2V0ID0gJ19ibGFuayc7XG5cbiAgICBjb25zdCBpID0gYWRkRWxlbWVudChhLCAnaScpO1xuICAgIGkuY2xhc3NMaXN0LmFkZCgnZmEtYnJhbmRzJyk7XG4gICAgaS5jbGFzc0xpc3QuYWRkKCdmYS1naXRodWItc3F1YXJlJyk7XG4gICAgaS5jbGFzc0xpc3QuYWRkKCdmYS0yeCcpO1xuXG4gICAgcmV0dXJuIGZvb3Rlcjtcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudChwYXJlbnQsIHRhZ05hbWUsIHRleHRDb250ZW50LCBjbGFzc05hbWUsIGlkKSB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuXG4gICAgaWYgKHRleHRDb250ZW50KSB7XG4gICAgICAgIGVsLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgfVxuICAgIFxuICAgIGlmIChjbGFzc05hbWUpIHtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xuICAgIH1cblxuICAgIGlmIChpZCkge1xuICAgICAgICBlbC5pZCA9IGlkO1xuICAgIH1cblxuICAgIHBhcmVudC5hcHBlbmRDaGlsZChlbCk7XG5cbiAgICByZXR1cm4gZWw7XG59XG5cbmV4cG9ydCB7IFxuICAgIGxvYWRQYWdlLFxuICAgIGFkZEVsZW1lbnQsXG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBiZWFjaCBmcm9tICcuL2Fzc2V0cy9iZWFjaC5qcGcnO1xuaW1wb3J0IHsgYWRkRWxlbWVudCB9IGZyb20gJy4vbG9hZHBhZ2UnO1xuXG5jb25zdCByZXZpZXdzID0gW1xuICAgIHtcbiAgICAgICAgJ3Jldmlldyc6ICdcIlRvIHNheSB0aGF0IGJvdGggdGhlIG1lYWwgYW5kIGl0cyBtYWtlciBoYXZlIGNoYWxsZW5nZWQgbXkgcHJlY29uY2VwdGlvbnMgYWJvdXQgZmluZSBjb29raW5nIGlzIGEgZ3Jvc3MgdW5kZXJzdGF0ZW1lbnQuIFRoZXkgaGF2ZSByb2NrZWQgbWUgdG8gbXkgY29yZS5cIicsXG4gICAgICAgICduYW1lJzogJ0FudG9uIEVnbycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdyZXZpZXcnOiAnXCJJIHRyaWVkIHRvIG9yZGVyIGEgY2hlZXNlYnVyZ2VyIGJ1dCB0aGV5IHNhaWQgdGhleSBkb25cXCd0IGhhdmUgYW55IGNoZWVzZSBvciBicmVhZC5cIicsXG4gICAgICAgICduYW1lJzogJ0tldmluIFJleW5ldHRlJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgJ3Jldmlldyc6ICdcIkkgbGlrZSB0aGUgZmFjdCB0aGF0IHRoZXkgc2VydmUgZm9vZCBoZXJlIGJlY2F1c2Ugc29tZXRpbWVzIEkgZ2V0IGh1bmdyeS5cIicsXG4gICAgICAgICduYW1lJzogJ1JlaXNzYSBTY290dCcsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdyZXZpZXcnOiAnXCJJIG9yZGVyZWQgc29tZSBmcmllZCBwbGFudGFpbnMgYW5kIHRoZXkgd2VyZSBleGFjdGx5IGFzIGRlc2NyaWJlZC5cIicsXG4gICAgICAgICduYW1lJzogJ05hdGFzaGEgSWNoaXJvJyxcbiAgICB9ICAgIFxuXTtcblxubGV0IHNsaWRlSWR4ID0gMDtcbmxldCBzbGlkZUludGVydmFsSUQgPSAtMTtcbmNvbnN0IFNMSURFX0lOVEVSVkFMX01TID0gNzAwMDtcblxuZnVuY3Rpb24gZ2V0SG9tZUNvbnRlbnQoKSB7XG4gICAgc2xpZGVJZHggPSAwO1xuXG4gICAgY29uc3QgaG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvbWUuY2xhc3NMaXN0LmFkZCgndGFiLWNvbnRlbnQnKTtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5pZCA9ICdob21lLWltZy1jb250YWluZXInO1xuXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IGJlYWNoO1xuICAgIGltZy5hbHQgPSAnQSBiZWFjaCBpbiBCYXJiYWRvcydcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICBcbiAgICBjb25zdCB0ZXh0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICBjb25zdCBoMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaDEudGV4dENvbnRlbnQgPSBcIkxvY2F0ZWQgaW4gdGhlIGhlYXJ0IG9mIEJhcmJhZG9zXCJcbiAgICB0ZXh0Q29udGFpbmVyLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBoMy50ZXh0Q29udGVudCA9IFwiKG5vdCBwaWN0dXJlZCBoZXJlIOKAlCB0aGlzIGlzIGEgZGlmZmVyZW50IHBhcnQgb2YgQmFyYmFkb3MpXCI7XG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChoMyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dENvbnRhaW5lcik7XG5cbiAgICBob21lLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICBob21lLmFwcGVuZENoaWxkKGdldEN1c3RvbWVyUmV2aWV3U2xpZGVzaG93RWxlbWVudCgpKTtcblxuICAgIHJldHVybiBob21lO1xufVxuXG5mdW5jdGlvbiBnZXRDdXN0b21lclJldmlld1NsaWRlc2hvd0VsZW1lbnQoKSB7XG4gICAgY29uc3Qgc2xpZGVzaG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2xpZGVzaG93LmNsYXNzTGlzdC5hZGQoJ3NsaWRlc2hvdy1jb250YWluZXInKTtcblxuICAgIGNvbnN0IHByZXYgPSBhZGRFbGVtZW50KHNsaWRlc2hvdywgJ2EnLCAn4p2uJywgJ3ByZXYnKTtcbiAgICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hvd05leHRTbGlkZSgtMSkpO1xuXG4gICAgbGV0IHNsaWRlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmV2aWV3cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzbGlkZSA9IGFkZEVsZW1lbnQoc2xpZGVzaG93LCAnZGl2JywgJycsICdzbGlkZXMnKTtcbiAgICAgICAgc2xpZGUuY2xhc3NMaXN0LmFkZCgnZmFkZScpO1xuICAgICAgICBhZGRFbGVtZW50KHNsaWRlLCAnYmxvY2txdW90ZScsIHJldmlld3NbaV0ucmV2aWV3LCAncXVvdGUnKTtcbiAgICAgICAgYWRkRWxlbWVudChzbGlkZSwgJ2ZpZ2NhcHRpb24nLCAn4oCUJyArIHJldmlld3NbaV0ubmFtZSwgJ2F0dHJpYicpO1xuICAgIH1cbiAgICBcbiAgICBjb25zdCBuZXh0ID0gYWRkRWxlbWVudChzbGlkZXNob3csICdhJywgJ+KdrycsICduZXh0Jyk7XG4gICAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dOZXh0U2xpZGUoMSkpO1xuICAgIFxuICAgIHJldHVybiBzbGlkZXNob3c7XG59XG5cbmZ1bmN0aW9uIHNob3dOZXh0U2xpZGUobikge1xuICAgIC8vIENsZWFyIHRoZSBpbnRlcnZhbCBhbmQgcmVzdGFydCBpdCBzbyB0aGF0LCBpZiB0aGUgdXNlciBjbGlja2VkIGFuIGFycm93IHRvXG4gICAgLy8gY2hhbmdlIHNsaWRlcywgdGhlIG5leHQgc2xpZGUgd2lsbCBiZSBkaXNwbGF5ZWQgZm9yIHRoZSBmdWxsIGludGVydmFsIGxlbmd0aC5cblxuICAgIGlmIChzbGlkZUludGVydmFsSUQgPj0gMCkge1xuICAgICAgICBjbGVhckludGVydmFsKHNsaWRlSW50ZXJ2YWxJRCk7XG4gICAgICAgIHNsaWRlSW50ZXJ2YWxJRCA9IC0xO1xuICAgIH1cblxuICAgIGxldCBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZXMnKTtcbiAgICBpZiAoIXNsaWRlcykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2xpZGVJbnRlcnZhbElEID0gc2V0SW50ZXJ2YWwoKCkgPT4gc2hvd05leHRTbGlkZSgxKSwgU0xJREVfSU5URVJWQUxfTVMpO1xuXG4gICAgc2xpZGVJZHggKz0gbjtcbiAgICBcbiAgICBpZiAoc2xpZGVJZHggPj0gc2xpZGVzLmxlbmd0aCkge1xuICAgICAgICBzbGlkZUlkeCA9IDA7XG4gICAgfSBcbiAgICBlbHNlIGlmIChzbGlkZUlkeCA8IDApIHtcbiAgICAgICAgc2xpZGVJZHggPSBzbGlkZXMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBzaG93U2xpZGVzKCk7XG59XG5cbmZ1bmN0aW9uIHNob3dTbGlkZXMoKSB7XG4gICAgLy8gU2hvdyBhIHNsaWRlc2hvdyBvZiBjdXN0b21lciByZXZpZXdzLlxuXG4gICAgbGV0IHNsaWRlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NsaWRlcycpO1xuICAgIGlmIChzbGlkZXMpIHtcbiAgICAgICAgaWYgKHNsaWRlSW50ZXJ2YWxJRCA8IDApIHtcbiAgICAgICAgICAgIHNsaWRlSW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHNob3dOZXh0U2xpZGUoMSksIFNMSURFX0lOVEVSVkFMX01TKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFNob3cgdGhlIGN1cnJlbnQgc2xpZGVcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG4gICAgc2xpZGVzW3NsaWRlSWR4XS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbn1cblxuZXhwb3J0IHsgZ2V0SG9tZUNvbnRlbnQsIHNob3dTbGlkZXMgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=