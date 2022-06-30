/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadHome": () => (/* binding */ loadHome)
/* harmony export */ });
let content = document.getElementById('content');


//loads home page
function loadHome() {
    let main = document.querySelector('.main');
    main.innerHTML = '';
    let heading = document.createElement('div');
    heading.classList.add('heading');

    let review = document.createElement('div');
    review.classList.add('review');
    review.classList.add('content-section');
    let reviewText = document.createElement('p');
    reviewText.innerHTML = '"The best restaurant in the world!"';
    review.appendChild(reviewText);
    review.innerHTML += '-John Doe';
    main.appendChild(review);

    let hours = document.createElement('div');
    hours.classList.add('hours');
    hours.classList.add('content-section');
    let hoursHeading = document.createElement('h1');
    hoursHeading.innerHTML = 'Hours';
    let hoursText = document.createElement('p');
    hoursText.innerHTML = 'Mon-Fri: 11:00am - 9:00pm<br>Sat-Sun: 11:00am - 10:00pm';
    hours.appendChild(hoursHeading);
    hours.appendChild(hoursText);
    main.appendChild(hours);

    let location = document.createElement('div');
    location.classList.add('location');
    location.classList.add('content-section');
    location.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.968600295605!2d-77.3192711846762!3d38.78735417958786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b651da2a7a40cb%3A0xd5e28070895fe609!2sBurke%20centre%20library!5e0!3m2!1sen!2sus!4v1656589347130!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    main.appendChild(location);
    content.appendChild(main);
}



/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadMenu": () => (/* binding */ loadMenu)
/* harmony export */ });
let content = document.getElementById('content');

function loadMenu() {

    let main = document.querySelector('.main');

    main.innerHTML = ''; //clear content from previous page

    let menu = document.createElement('div');
    menu.classList.add('menu-grid');

    //chicken taco menu item
    let chickenTaco = document.createElement('div');
    chickenTaco.classList.add('menu-item');
    let chickenTacoImg = document.createElement('img');
    chickenTacoImg.src = './images/chicken.svg';
    chickenTacoImg.alt = 'chicken taco';
    chickenTaco.appendChild(chickenTacoImg);
    let chickenTacoText = document.createElement('p');
    chickenTacoText.innerHTML = 'Chicken taco';
    chickenTaco.appendChild(chickenTacoText);

    //lamb taco menu item
    let lambTaco = document.createElement('div');
    lambTaco.classList.add('menu-item');
    let lambTacoImg = document.createElement('img');
    lambTacoImg.src = './images/lamb.svg';
    lambTacoImg.alt = 'lamb taco';
    lambTaco.appendChild(lambTacoImg);
    let lambTacoText = document.createElement('p');
    lambTacoText.innerHTML = 'Lamb taco';
    lambTaco.appendChild(lambTacoText);

    //pork taco menu item
    let porkTaco = document.createElement('div');
    porkTaco.classList.add('menu-item');
    let porkTacoImg = document.createElement('img');
    porkTacoImg.src = './images/pork.svg';
    porkTacoImg.alt = 'pork taco';
    porkTaco.appendChild(porkTacoImg);
    let porkTacoText = document.createElement('p');
    porkTacoText.innerHTML = 'Pork taco';
    porkTaco.appendChild(porkTacoText);

    //shrimp taco menu item
    let shrimpTaco = document.createElement('div');
    shrimpTaco.classList.add('menu-item');
    let shrimpTacoImg = document.createElement('img');
    shrimpTacoImg.src = './images/shrimp.svg';
    shrimpTacoImg.alt = 'shrimp taco';
    shrimpTaco.appendChild(shrimpTacoImg);
    let shrimpTacoText = document.createElement('p');
    shrimpTacoText.innerHTML = 'Shrimp taco';
    shrimpTaco.appendChild(shrimpTacoText);

    //steak taco menu item
    let steakTaco = document.createElement('div');
    steakTaco.classList.add('menu-item');
    let steakTacoImg = document.createElement('img');
    steakTacoImg.src = './images/steak.svg';
    steakTacoImg.alt = 'steak taco';
    steakTaco.appendChild(steakTacoImg);
    let steakTacoText = document.createElement('p');
    steakTacoText.innerHTML = 'Steak taco';
    steakTaco.appendChild(steakTacoText);

    //veggie taco menu item
    let veggieTaco = document.createElement('div');
    veggieTaco.classList.add('menu-item');
    let veggieTacoImg = document.createElement('img');
    veggieTacoImg.src = './images/veggie.svg';
    veggieTacoImg.alt = 'veggie taco';
    veggieTaco.appendChild(veggieTacoImg);
    let veggieTacoText = document.createElement('p');
    veggieTacoText.innerHTML = 'Veggie taco';
    veggieTaco.appendChild(veggieTacoText);

    menu.appendChild(chickenTaco);
    menu.appendChild(lambTaco);
    menu.appendChild(porkTaco);
    menu.appendChild(shrimpTaco);
    menu.appendChild(steakTaco);
    menu.appendChild(veggieTaco);
    main.appendChild(menu);
}



/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initializeWebsite": () => (/* binding */ initializeWebsite)
/* harmony export */ });
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");



let content = document.getElementById('content');

//Website header and navbar
function createHeader() {
    let header = document.createElement('header');
    let title = document.createElement('h1');
    title.innerHTML = 'Taqueria El Ranchito';
    header.appendChild(title);
    header.appendChild(createNavBar());
    return header;
}

function createNavBar() {
    let nav = document.createElement('nav');

    let homeTab = document.createElement('button');
    homeTab.classList.add('tab');
    homeTab.innerHTML = 'Home';
    homeTab.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveTab(homeTab);
        (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();
    });

    let menuTab = document.createElement('button');
    menuTab.classList.add('tab');
    menuTab.innerHTML = 'Menu';
    menuTab.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveTab(menuTab);
        (0,_menu_js__WEBPACK_IMPORTED_MODULE_0__.loadMenu)();
    });

    let contactTab = document.createElement('button');
    contactTab.classList.add('tab');
    contactTab.innerHTML = 'Contact';
    contactTab.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveTab(contactTab);
        (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)();
    });

    nav.appendChild(homeTab);
    nav.appendChild(menuTab);
    nav.appendChild(contactTab);
    setActiveTab(homeTab);

    return nav;
}

//Page that is currently loaded
function setActiveTab(button) {
    let tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    button.classList.add('active');
}

function initializeWebsite() {
    let header = createHeader();
    let main = document.createElement('div');
    main.classList.add('main');
    content.appendChild(header);
    content.appendChild(main);
    (0,_home__WEBPACK_IMPORTED_MODULE_1__.loadHome)()
}



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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _website_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website.js */ "./src/website.js");


(0,_website_js__WEBPACK_IMPORTED_MODULE_0__.initializeWebsite)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzV0FBc1c7QUFDdFc7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENBOztBQUVBOztBQUVBOztBQUVBLHlCQUF5Qjs7QUFFekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRm1DO0FBQ0g7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQVE7QUFDaEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLGtEQUFRO0FBQ2hCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBUTtBQUNoQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksK0NBQVE7QUFDWjs7Ozs7Ozs7VUNyRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ04rQzs7QUFFL0MsOERBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3dlYnNpdGUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuXG4vL2xvYWRzIGhvbWUgcGFnZVxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcblxuICAgIGxldCByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXZpZXcuY2xhc3NMaXN0LmFkZCgncmV2aWV3Jyk7XG4gICAgcmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtc2VjdGlvbicpO1xuICAgIGxldCByZXZpZXdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJldmlld1RleHQuaW5uZXJIVE1MID0gJ1wiVGhlIGJlc3QgcmVzdGF1cmFudCBpbiB0aGUgd29ybGQhXCInO1xuICAgIHJldmlldy5hcHBlbmRDaGlsZChyZXZpZXdUZXh0KTtcbiAgICByZXZpZXcuaW5uZXJIVE1MICs9ICctSm9obiBEb2UnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocmV2aWV3KTtcblxuICAgIGxldCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZCgnY29udGVudC1zZWN0aW9uJyk7XG4gICAgbGV0IGhvdXJzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaG91cnNIZWFkaW5nLmlubmVySFRNTCA9ICdIb3Vycyc7XG4gICAgbGV0IGhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3Vyc1RleHQuaW5uZXJIVE1MID0gJ01vbi1Gcmk6IDExOjAwYW0gLSA5OjAwcG08YnI+U2F0LVN1bjogMTE6MDBhbSAtIDEwOjAwcG0nO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzSGVhZGluZyk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNUZXh0KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnY29udGVudC1zZWN0aW9uJyk7XG4gICAgbG9jYXRpb24uaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMzEwOS45Njg2MDAyOTU2MDUhMmQtNzcuMzE5MjcxMTg0Njc2MiEzZDM4Ljc4NzM1NDE3OTU4Nzg2ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4OWI2NTFkYTJhN2E0MGNiJTNBMHhkNWUyODA3MDg5NWZlNjA5ITJzQnVya2UlMjBjZW50cmUlMjBsaWJyYXJ5ITVlMCEzbTIhMXNlbiEyc3VzITR2MTY1NjU4OTM0NzEzMCE1bTIhMXNlbiEyc3VzXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPic7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZXhwb3J0IHtsb2FkSG9tZX07IiwibGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcblxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7IC8vY2xlYXIgY29udGVudCBmcm9tIHByZXZpb3VzIHBhZ2VcblxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LWdyaWQnKTtcblxuICAgIC8vY2hpY2tlbiB0YWNvIG1lbnUgaXRlbVxuICAgIGxldCBjaGlja2VuVGFjbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoaWNrZW5UYWNvLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGxldCBjaGlja2VuVGFjb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNoaWNrZW5UYWNvSW1nLnNyYyA9ICcuL2ltYWdlcy9jaGlja2VuLnN2Zyc7XG4gICAgY2hpY2tlblRhY29JbWcuYWx0ID0gJ2NoaWNrZW4gdGFjbyc7XG4gICAgY2hpY2tlblRhY28uYXBwZW5kQ2hpbGQoY2hpY2tlblRhY29JbWcpO1xuICAgIGxldCBjaGlja2VuVGFjb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2hpY2tlblRhY29UZXh0LmlubmVySFRNTCA9ICdDaGlja2VuIHRhY28nO1xuICAgIGNoaWNrZW5UYWNvLmFwcGVuZENoaWxkKGNoaWNrZW5UYWNvVGV4dCk7XG5cbiAgICAvL2xhbWIgdGFjbyBtZW51IGl0ZW1cbiAgICBsZXQgbGFtYlRhY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsYW1iVGFjby5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBsZXQgbGFtYlRhY29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsYW1iVGFjb0ltZy5zcmMgPSAnLi9pbWFnZXMvbGFtYi5zdmcnO1xuICAgIGxhbWJUYWNvSW1nLmFsdCA9ICdsYW1iIHRhY28nO1xuICAgIGxhbWJUYWNvLmFwcGVuZENoaWxkKGxhbWJUYWNvSW1nKTtcbiAgICBsZXQgbGFtYlRhY29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxhbWJUYWNvVGV4dC5pbm5lckhUTUwgPSAnTGFtYiB0YWNvJztcbiAgICBsYW1iVGFjby5hcHBlbmRDaGlsZChsYW1iVGFjb1RleHQpO1xuXG4gICAgLy9wb3JrIHRhY28gbWVudSBpdGVtXG4gICAgbGV0IHBvcmtUYWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9ya1RhY28uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbGV0IHBvcmtUYWNvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcG9ya1RhY29JbWcuc3JjID0gJy4vaW1hZ2VzL3Bvcmsuc3ZnJztcbiAgICBwb3JrVGFjb0ltZy5hbHQgPSAncG9yayB0YWNvJztcbiAgICBwb3JrVGFjby5hcHBlbmRDaGlsZChwb3JrVGFjb0ltZyk7XG4gICAgbGV0IHBvcmtUYWNvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwb3JrVGFjb1RleHQuaW5uZXJIVE1MID0gJ1BvcmsgdGFjbyc7XG4gICAgcG9ya1RhY28uYXBwZW5kQ2hpbGQocG9ya1RhY29UZXh0KTtcblxuICAgIC8vc2hyaW1wIHRhY28gbWVudSBpdGVtXG4gICAgbGV0IHNocmltcFRhY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaHJpbXBUYWNvLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGxldCBzaHJpbXBUYWNvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2hyaW1wVGFjb0ltZy5zcmMgPSAnLi9pbWFnZXMvc2hyaW1wLnN2Zyc7XG4gICAgc2hyaW1wVGFjb0ltZy5hbHQgPSAnc2hyaW1wIHRhY28nO1xuICAgIHNocmltcFRhY28uYXBwZW5kQ2hpbGQoc2hyaW1wVGFjb0ltZyk7XG4gICAgbGV0IHNocmltcFRhY29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNocmltcFRhY29UZXh0LmlubmVySFRNTCA9ICdTaHJpbXAgdGFjbyc7XG4gICAgc2hyaW1wVGFjby5hcHBlbmRDaGlsZChzaHJpbXBUYWNvVGV4dCk7XG5cbiAgICAvL3N0ZWFrIHRhY28gbWVudSBpdGVtXG4gICAgbGV0IHN0ZWFrVGFjbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0ZWFrVGFjby5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBsZXQgc3RlYWtUYWNvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc3RlYWtUYWNvSW1nLnNyYyA9ICcuL2ltYWdlcy9zdGVhay5zdmcnO1xuICAgIHN0ZWFrVGFjb0ltZy5hbHQgPSAnc3RlYWsgdGFjbyc7XG4gICAgc3RlYWtUYWNvLmFwcGVuZENoaWxkKHN0ZWFrVGFjb0ltZyk7XG4gICAgbGV0IHN0ZWFrVGFjb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3RlYWtUYWNvVGV4dC5pbm5lckhUTUwgPSAnU3RlYWsgdGFjbyc7XG4gICAgc3RlYWtUYWNvLmFwcGVuZENoaWxkKHN0ZWFrVGFjb1RleHQpO1xuXG4gICAgLy92ZWdnaWUgdGFjbyBtZW51IGl0ZW1cbiAgICBsZXQgdmVnZ2llVGFjbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZlZ2dpZVRhY28uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbGV0IHZlZ2dpZVRhY29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB2ZWdnaWVUYWNvSW1nLnNyYyA9ICcuL2ltYWdlcy92ZWdnaWUuc3ZnJztcbiAgICB2ZWdnaWVUYWNvSW1nLmFsdCA9ICd2ZWdnaWUgdGFjbyc7XG4gICAgdmVnZ2llVGFjby5hcHBlbmRDaGlsZCh2ZWdnaWVUYWNvSW1nKTtcbiAgICBsZXQgdmVnZ2llVGFjb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdmVnZ2llVGFjb1RleHQuaW5uZXJIVE1MID0gJ1ZlZ2dpZSB0YWNvJztcbiAgICB2ZWdnaWVUYWNvLmFwcGVuZENoaWxkKHZlZ2dpZVRhY29UZXh0KTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY2hpY2tlblRhY28pO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobGFtYlRhY28pO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQocG9ya1RhY28pO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc2hyaW1wVGFjbyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChzdGVha1RhY28pO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQodmVnZ2llVGFjbyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51KTtcbn1cblxuZXhwb3J0IHtsb2FkTWVudX07IiwiaW1wb3J0IHtsb2FkTWVudX0gZnJvbSAnLi9tZW51LmpzJztcbmltcG9ydCB7bG9hZEhvbWV9IGZyb20gJy4vaG9tZSc7XG5cbmxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuLy9XZWJzaXRlIGhlYWRlciBhbmQgbmF2YmFyXG5mdW5jdGlvbiBjcmVhdGVIZWFkZXIoKSB7XG4gICAgbGV0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgdGl0bGUuaW5uZXJIVE1MID0gJ1RhcXVlcmlhIEVsIFJhbmNoaXRvJztcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChjcmVhdGVOYXZCYXIoKSk7XG4gICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTmF2QmFyKCkge1xuICAgIGxldCBuYXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCduYXYnKTtcblxuICAgIGxldCBob21lVGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaG9tZVRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBob21lVGFiLmlubmVySFRNTCA9ICdIb21lJztcbiAgICBob21lVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVUYWIoaG9tZVRhYik7XG4gICAgICAgIGxvYWRIb21lKCk7XG4gICAgfSk7XG5cbiAgICBsZXQgbWVudVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1lbnVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgbWVudVRhYi5pbm5lckhUTUwgPSAnTWVudSc7XG4gICAgbWVudVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlVGFiKG1lbnVUYWIpO1xuICAgICAgICBsb2FkTWVudSgpO1xuICAgIH0pO1xuXG4gICAgbGV0IGNvbnRhY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb250YWN0VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIGNvbnRhY3RUYWIuaW5uZXJIVE1MID0gJ0NvbnRhY3QnO1xuICAgIGNvbnRhY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZVRhYihjb250YWN0VGFiKTtcbiAgICAgICAgbG9hZEhvbWUoKTtcbiAgICB9KTtcblxuICAgIG5hdi5hcHBlbmRDaGlsZChob21lVGFiKTtcbiAgICBuYXYuYXBwZW5kQ2hpbGQobWVudVRhYik7XG4gICAgbmF2LmFwcGVuZENoaWxkKGNvbnRhY3RUYWIpO1xuICAgIHNldEFjdGl2ZVRhYihob21lVGFiKTtcblxuICAgIHJldHVybiBuYXY7XG59XG5cbi8vUGFnZSB0aGF0IGlzIGN1cnJlbnRseSBsb2FkZWRcbmZ1bmN0aW9uIHNldEFjdGl2ZVRhYihidXR0b24pIHtcbiAgICBsZXQgdGFicyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YWInKTtcbiAgICB0YWJzLmZvckVhY2godGFiID0+IHtcbiAgICAgICAgdGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVdlYnNpdGUoKSB7XG4gICAgbGV0IGhlYWRlciA9IGNyZWF0ZUhlYWRlcigpO1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQobWFpbik7XG4gICAgbG9hZEhvbWUoKVxufVxuXG5leHBvcnQge2luaXRpYWxpemVXZWJzaXRlfTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7aW5pdGlhbGl6ZVdlYnNpdGV9IGZyb20gJy4vd2Vic2l0ZS5qcyc7XG5cbmluaXRpYWxpemVXZWJzaXRlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=