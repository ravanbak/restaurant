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

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIdx].style.display = 'block';
}


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFxQzs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsY0FBYyw2Q0FBSTtBQUNsQjtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2Z1QztBQUNDOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyw4Q0FBSztBQUNuQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixxREFBVTtBQUMzQjs7QUFFQTtBQUNBLG9CQUFvQixvQkFBb0I7QUFDeEMsZ0JBQWdCLHFEQUFVO0FBQzFCO0FBQ0EsUUFBUSxxREFBVTtBQUNsQixRQUFRLHFEQUFVO0FBQ2xCO0FBQ0E7QUFDQSxpQkFBaUIscURBQVU7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLG1CQUFtQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbG9hZHBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaGVybyBmcm9tICcuL2Fzc2V0cy9oZXJvLmpwZyc7XG5cbmZ1bmN0aW9uIGxvYWRQYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYjY29udGVudCcpO1xuICAgIGlmICghY29udGVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChnZXRIZWFkZXJFbGVtZW50KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2V0TmF2RWxlbWVudCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGdldFRhYkNvbnRlbnRFbGVtZW50KCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZ2V0Rm9vdGVyRWxlbWVudCgpKTtcbn1cblxuZnVuY3Rpb24gZ2V0SGVhZGVyRWxlbWVudCgpIHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICBjb25zdCBkaXZUaXRsZUFuZEltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgXG4gICAgY29uc3QgZGl2VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZUaXRsZS5jbGFzc0xpc3QuYWRkKCdoZXJvLXRleHQnKTtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS50ZXh0Q29udGVudCA9ICdDaGVlc2Ugb24gQnJlYWQnO1xuICAgIGRpdlRpdGxlLmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBoMi50ZXh0Q29udGVudCA9ICdCYWphbiBSZXN0YXVyYW50JztcbiAgICBkaXZUaXRsZS5hcHBlbmRDaGlsZChoMik7XG5cbiAgICBkaXZUaXRsZUFuZEltYWdlLmFwcGVuZENoaWxkKGRpdlRpdGxlKTtcblxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBoZXJvO1xuICAgIGltZy5hbHQgPSAnQSByb3VuZCB0YWJsZSwgd2l0aCBzZWF0aW5nIGZvciBzaXgsIHdpdGggYSB2aWV3IG9mIHRoZSBDYXJpYmJlYW4gU2VhLidcbiAgICBpbWcuY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuXG4gICAgZGl2VGl0bGVBbmRJbWFnZS5hcHBlbmRDaGlsZChpbWcpO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGRpdlRpdGxlQW5kSW1hZ2UpO1xuXG4gICAgY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIGgzLnRleHRDb250ZW50ID0gJ0Rpc2NvdmVyIHRoZSB0YXN0ZSBvZiBjaGVlc2UgYW5kIGJyZWFkIGluIHRoZSBDYXJpYmJlYW4nO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGgzKTtcblxuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGdldE5hdkVsZW1lbnQoKSB7XG4gICAgY29uc3QgdG9wbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9wbmF2LmlkID0gJ3RvcG5hdic7XG5cbiAgICBjb25zdCBidG5Ib21lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYnRuSG9tZS50eXBlID0gJ2J1dHRvbic7XG4gICAgYnRuSG9tZS50ZXh0Q29udGVudCA9IFwiSG9tZVwiO1xuICAgIGJ0bkhvbWUuaWQgPSAnYnRuLWhvbWUnO1xuICAgIGJ0bkhvbWUudmFsdWUgPSAnaG9tZSc7XG4gICAgdG9wbmF2LmFwcGVuZENoaWxkKGJ0bkhvbWUpO1xuXG4gICAgY29uc3QgYnRuTWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ0bk1lbnUudHlwZSA9ICdidXR0b24nO1xuICAgIGJ0bk1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBidG5NZW51LmlkID0gJ2J0bi1tZW51JztcbiAgICBidG5NZW51LnZhbHVlID0gJ21lbnUnO1xuICAgIHRvcG5hdi5hcHBlbmRDaGlsZChidG5NZW51KTtcblxuICAgIGNvbnN0IGJ0bkNvbnRhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidG5Db250YWN0LnR5cGUgPSAnYnV0dG9uJztcbiAgICBidG5Db250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgYnRuQ29udGFjdC5pZCA9ICdidG4tY29udGFjdCc7XG4gICAgYnRuQ29udGFjdC52YWx1ZSA9ICdjb250YWN0JztcbiAgICB0b3BuYXYuYXBwZW5kQ2hpbGQoYnRuQ29udGFjdCk7XG5cbiAgICByZXR1cm4gdG9wbmF2O1xufVxuXG5mdW5jdGlvbiBnZXRUYWJDb250ZW50RWxlbWVudCgpIHtcbiAgICBjb25zdCB0YWJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFiQ29udGVudC5pZCA9ICd0YWJjb250ZW50JztcblxuICAgIHJldHVybiB0YWJDb250ZW50O1xufVxuXG5mdW5jdGlvbiBnZXRGb290ZXJFbGVtZW50KCkge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcblxuICAgIGNvbnN0IGZvb3RlckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHNwYW4udGV4dENvbnRlbnQ9J0NvcHlyaWdodCDCqSAyMDIyIERhdmlkIFJhdmFuYmFraHNoJztcblxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgYS5ocmVmID0gJ2h0dHBzOi8vZ2l0aHViLmNvbS9yYXZhbmJhayc7XG4gICAgYS50YXJnZXQgPSAnX2JsYW5rJztcblxuICAgIGNvbnN0IGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgaS5jbGFzc0xpc3QuYWRkKCdmYS1icmFuZHMnKTtcbiAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhLWdpdGh1Yi1zcXVhcmUnKTtcbiAgICBpLmNsYXNzTGlzdC5hZGQoJ2ZhLTJ4Jyk7XG4gICAgYS5hcHBlbmRDaGlsZChpKTtcbiAgICBcbiAgICBmb290ZXJDb250ZW50LmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIGZvb3RlckNvbnRlbnQuYXBwZW5kQ2hpbGQoYSk7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudCk7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50KHBhcmVudCwgdGFnTmFtZSwgdGV4dENvbnRlbnQsIGNsYXNzTmFtZSkge1xuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcblxuICAgIGlmICh0ZXh0Q29udGVudCkge1xuICAgICAgICBlbC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIH1cbiAgICBcbiAgICBpZiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9XG5cbiAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoZWwpO1xuXG4gICAgcmV0dXJuIGVsO1xufVxuXG5leHBvcnQgeyBcbiAgICBsb2FkUGFnZSxcbiAgICBhZGRFbGVtZW50LFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgYmVhY2ggZnJvbSAnLi9hc3NldHMvYmVhY2guanBnJztcbmltcG9ydCB7IGFkZEVsZW1lbnQgfSBmcm9tICcuL2xvYWRwYWdlJztcblxuY29uc3QgcmV2aWV3cyA9IFtcbiAgICB7XG4gICAgICAgICdyZXZpZXcnOiAnXCJUbyBzYXkgdGhhdCBib3RoIHRoZSBtZWFsIGFuZCBpdHMgbWFrZXIgaGF2ZSBjaGFsbGVuZ2VkIG15IHByZWNvbmNlcHRpb25zIGFib3V0IGZpbmUgY29va2luZyBpcyBhIGdyb3NzIHVuZGVyc3RhdGVtZW50LiBUaGV5IGhhdmUgcm9ja2VkIG1lIHRvIG15IGNvcmUuXCInLFxuICAgICAgICAnbmFtZSc6ICdBbnRvbiBFZ28nLFxuICAgIH0sXG4gICAge1xuICAgICAgICAncmV2aWV3JzogJ1wiSSB0cmllZCB0byBvcmRlciBhIGNoZWVzZWJ1cmdlciBidXQgdGhleSBzYWlkIHRoZXkgZG9uXFwndCBoYXZlIGFueSBjaGVlc2Ugb3IgYnJlYWQuXCInLFxuICAgICAgICAnbmFtZSc6ICdLZXZpbiBSZXluZXR0ZScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgICdyZXZpZXcnOiAnXCJJIGxpa2UgdGhlIGZhY3QgdGhhdCB0aGV5IHNlcnZlIGZvb2QgaGVyZSBiZWNhdXNlIHNvbWV0aW1lcyBJIGdldCBodW5ncnkuXCInLFxuICAgICAgICAnbmFtZSc6ICdSZWlzc2EgU2NvdHQnLFxuICAgIH0sXG4gICAge1xuICAgICAgICAncmV2aWV3JzogJ1wiSSBvcmRlcmVkIHNvbWUgZnJpZWQgcGxhbnRhaW5zIGFuZCB0aGV5IHdlcmUgZXhhY3RseSBhcyBkZXNjcmliZWQuXCInLFxuICAgICAgICAnbmFtZSc6ICdOYXRhc2hhIEljaGlybycsXG4gICAgfSAgICBcbl07XG5cbmxldCBzbGlkZUlkeCA9IDA7XG5sZXQgc2xpZGVJbnRlcnZhbElEID0gLTE7XG5jb25zdCBTTElERV9JTlRFUlZBTF9NUyA9IDcwMDA7XG5cbmZ1bmN0aW9uIGdldEhvbWVDb250ZW50KCkge1xuICAgIHNsaWRlSWR4ID0gMDtcblxuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBob21lLmNsYXNzTGlzdC5hZGQoJ3RhYi1jb250ZW50Jyk7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuaWQgPSAnaG9tZS1pbWctY29udGFpbmVyJztcblxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgIGltZy5zcmMgPSBiZWFjaDtcbiAgICBpbWcuYWx0ID0gJ0EgYmVhY2ggaW4gQmFyYmFkb3MnXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgXG4gICAgY29uc3QgdGV4dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLnRleHRDb250ZW50ID0gXCJMb2NhdGVkIGluIHRoZSBoZWFydCBvZiBCYXJiYWRvc1wiXG4gICAgdGV4dENvbnRhaW5lci5hcHBlbmRDaGlsZChoMSk7XG5cbiAgICBjb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgaDMudGV4dENvbnRlbnQgPSBcIihub3QgcGljdHVyZWQgaGVyZSDigJQgdGhpcyBpcyBhIGRpZmZlcmVudCBwYXJ0IG9mIEJhcmJhZG9zKVwiO1xuICAgIHRleHRDb250YWluZXIuYXBwZW5kQ2hpbGQoaDMpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRDb250YWluZXIpO1xuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgaG9tZS5hcHBlbmRDaGlsZChnZXRDdXN0b21lclJldmlld1NsaWRlc2hvd0VsZW1lbnQoKSk7XG5cbiAgICByZXR1cm4gaG9tZTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3VzdG9tZXJSZXZpZXdTbGlkZXNob3dFbGVtZW50KCkge1xuICAgIGNvbnN0IHNsaWRlc2hvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHNsaWRlc2hvdy5jbGFzc0xpc3QuYWRkKCdzbGlkZXNob3ctY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBwcmV2ID0gYWRkRWxlbWVudChzbGlkZXNob3csICdhJywgJ+KdricsICdwcmV2Jyk7XG4gICAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNob3dOZXh0U2xpZGUoLTEpKTtcblxuICAgIGxldCBzbGlkZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJldmlld3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgc2xpZGUgPSBhZGRFbGVtZW50KHNsaWRlc2hvdywgJ2RpdicsICcnLCAnc2xpZGVzJyk7XG4gICAgICAgIHNsaWRlLmNsYXNzTGlzdC5hZGQoJ2ZhZGUnKTtcbiAgICAgICAgYWRkRWxlbWVudChzbGlkZSwgJ2Jsb2NrcXVvdGUnLCByZXZpZXdzW2ldLnJldmlldywgJ3F1b3RlJyk7XG4gICAgICAgIGFkZEVsZW1lbnQoc2xpZGUsICdmaWdjYXB0aW9uJywgJ+KAlCcgKyByZXZpZXdzW2ldLm5hbWUsICdhdHRyaWInKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgbmV4dCA9IGFkZEVsZW1lbnQoc2xpZGVzaG93LCAnYScsICfina8nLCAnbmV4dCcpO1xuICAgIG5leHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93TmV4dFNsaWRlKDEpKTtcbiAgICBcbiAgICByZXR1cm4gc2xpZGVzaG93O1xufVxuXG5mdW5jdGlvbiBzaG93TmV4dFNsaWRlKG4pIHtcbiAgICAvLyBDbGVhciB0aGUgaW50ZXJ2YWwgYW5kIHJlc3RhcnQgaXQgc28gdGhhdCwgaWYgdGhlIHVzZXIgY2xpY2tlZCBhbiBhcnJvdyB0b1xuICAgIC8vIGNoYW5nZSBzbGlkZXMsIHRoZSBuZXh0IHNsaWRlIHdpbGwgYmUgZGlzcGxheWVkIGZvciB0aGUgZnVsbCBpbnRlcnZhbCBsZW5ndGguXG5cbiAgICBpZiAoc2xpZGVJbnRlcnZhbElEID49IDApIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChzbGlkZUludGVydmFsSUQpO1xuICAgICAgICBzbGlkZUludGVydmFsSUQgPSAtMTtcbiAgICB9XG5cbiAgICBsZXQgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2xpZGVzJyk7XG4gICAgaWYgKCFzbGlkZXMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNsaWRlSW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHNob3dOZXh0U2xpZGUoMSksIFNMSURFX0lOVEVSVkFMX01TKTtcblxuICAgIHNsaWRlSWR4ICs9IG47XG4gICAgXG4gICAgaWYgKHNsaWRlSWR4ID49IHNsaWRlcy5sZW5ndGgpIHtcbiAgICAgICAgc2xpZGVJZHggPSAwO1xuICAgIH0gXG4gICAgZWxzZSBpZiAoc2xpZGVJZHggPCAwKSB7XG4gICAgICAgIHNsaWRlSWR4ID0gc2xpZGVzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgc2hvd1NsaWRlcygpO1xufVxuXG5mdW5jdGlvbiBzaG93U2xpZGVzKCkge1xuICAgIC8vIFNob3cgYSBzbGlkZXNob3cgb2YgY3VzdG9tZXIgcmV2aWV3cy5cblxuICAgIGxldCBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzbGlkZXMnKTtcblxuICAgIGlmIChzbGlkZXMpIHtcbiAgICAgICAgaWYgKHNsaWRlSW50ZXJ2YWxJRCA8IDApIHtcbiAgICAgICAgICAgIHNsaWRlSW50ZXJ2YWxJRCA9IHNldEludGVydmFsKCgpID0+IHNob3dOZXh0U2xpZGUoMSksIFNMSURFX0lOVEVSVkFMX01TKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHNsaWRlc1tpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cbiAgICBzbGlkZXNbc2xpZGVJZHhdLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xufVxuXG5leHBvcnQgeyBnZXRIb21lQ29udGVudCwgc2hvd1NsaWRlcyB9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==