/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadContact": () => (/* binding */ loadContact)
/* harmony export */ });
let content = document.getElementById('content');

function loadContact() {
    let main = document.querySelector('.main');

    main.innerHTML = '';
    let contactHeader = document.createElement('h1');
    contactHeader.innerHTML = 'Contact';
    main.appendChild(contactHeader);

    //owner contact
    let contactOwner = document.createElement('div');
    contactOwner.classList.add('contact-section');
    contactOwner.innerHTML = '<b>Owner:</b>';
    let contactOwnerName = document.createElement('p');
    contactOwnerName.innerHTML = 'John Doe';
    contactOwner.appendChild(contactOwnerName);
    let contactOwnerEmail = document.createElement('p');
    contactOwnerEmail.innerHTML = 'johndoe@jd.com';
    contactOwner.appendChild(contactOwnerEmail);
    let contactOwnerPhone = document.createElement('p');
    contactOwnerPhone.innerHTML = '123-456-7890';
    contactOwner.appendChild(contactOwnerPhone);
    main.appendChild(contactOwner);

    //contact manager
    let contactManager = document.createElement('div');
    contactManager.classList.add('contact-section');
    contactManager.innerHTML = '<b>Manager:</b>';
    let contactManagerName = document.createElement('p');
    contactManagerName.innerHTML = 'Jane Doe';
    contactManager.appendChild(contactManagerName);
    let contactManagerEmail = document.createElement('p');
    contactManagerEmail.innerHTML = 'janedoe@jd.com';
    contactManager.appendChild(contactManagerEmail);
    let contactManagerPhone = document.createElement('p');
    contactManagerPhone.innerHTML = '123-456-7890';
    contactManager.appendChild(contactManagerPhone);
    main.appendChild(contactManager);


    //contact waiter
    let contactWaiter = document.createElement('div');
    contactWaiter.classList.add('contact-section');
    contactWaiter.innerHTML = '<b>Waiter:</b>';
    let contactWaiterName = document.createElement('p');
    contactWaiterName.innerHTML = 'Jane Doe';
    contactWaiter.appendChild(contactWaiterName);
    let contactWaiterEmail = document.createElement('p');
    contactWaiterEmail.innerHTML = 'janedoe@jd.com';
    contactWaiter.appendChild(contactWaiterEmail);
    let contactWaiterPhone = document.createElement('p');
    contactWaiterPhone.innerHTML = '123-456-7890';
    contactWaiter.appendChild(contactWaiterPhone);
    main.appendChild(contactWaiter);
}



/***/ }),

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
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");




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
        (0,_menu__WEBPACK_IMPORTED_MODULE_0__.loadMenu)();
    });

    let contactTab = document.createElement('button');
    contactTab.classList.add('tab');
    contactTab.innerHTML = 'Contact';
    contactTab.addEventListener('click', (e) => {
        if(e.target.classList.contains('active')) return;
        setActiveTab(contactTab);
        (0,_contact__WEBPACK_IMPORTED_MODULE_2__.loadContact)();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNXQUFzVztBQUN0VztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7O0FBRUE7O0FBRUE7O0FBRUEseUJBQXlCOztBQUV6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwRmdDO0FBQ0E7QUFDTTs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBUTtBQUNoQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsK0NBQVE7QUFDaEIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHFEQUFXO0FBQ25CLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBUTtBQUNaOzs7Ozs7OztVQ3RFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTitDOztBQUUvQyw4REFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvY29udGFjdC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbWVudS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvd2Vic2l0ZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBsb2FkQ29udGFjdCgpIHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG5cbiAgICBtYWluLmlubmVySFRNTCA9ICcnO1xuICAgIGxldCBjb250YWN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBjb250YWN0SGVhZGVyLmlubmVySFRNTCA9ICdDb250YWN0JztcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RIZWFkZXIpO1xuXG4gICAgLy9vd25lciBjb250YWN0XG4gICAgbGV0IGNvbnRhY3RPd25lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RPd25lci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXNlY3Rpb24nKTtcbiAgICBjb250YWN0T3duZXIuaW5uZXJIVE1MID0gJzxiPk93bmVyOjwvYj4nO1xuICAgIGxldCBjb250YWN0T3duZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RPd25lck5hbWUuaW5uZXJIVE1MID0gJ0pvaG4gRG9lJztcbiAgICBjb250YWN0T3duZXIuYXBwZW5kQ2hpbGQoY29udGFjdE93bmVyTmFtZSk7XG4gICAgbGV0IGNvbnRhY3RPd25lckVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RPd25lckVtYWlsLmlubmVySFRNTCA9ICdqb2huZG9lQGpkLmNvbSc7XG4gICAgY29udGFjdE93bmVyLmFwcGVuZENoaWxkKGNvbnRhY3RPd25lckVtYWlsKTtcbiAgICBsZXQgY29udGFjdE93bmVyUGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdE93bmVyUGhvbmUuaW5uZXJIVE1MID0gJzEyMy00NTYtNzg5MCc7XG4gICAgY29udGFjdE93bmVyLmFwcGVuZENoaWxkKGNvbnRhY3RPd25lclBob25lKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RPd25lcik7XG5cbiAgICAvL2NvbnRhY3QgbWFuYWdlclxuICAgIGxldCBjb250YWN0TWFuYWdlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3RNYW5hZ2VyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Qtc2VjdGlvbicpO1xuICAgIGNvbnRhY3RNYW5hZ2VyLmlubmVySFRNTCA9ICc8Yj5NYW5hZ2VyOjwvYj4nO1xuICAgIGxldCBjb250YWN0TWFuYWdlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdE1hbmFnZXJOYW1lLmlubmVySFRNTCA9ICdKYW5lIERvZSc7XG4gICAgY29udGFjdE1hbmFnZXIuYXBwZW5kQ2hpbGQoY29udGFjdE1hbmFnZXJOYW1lKTtcbiAgICBsZXQgY29udGFjdE1hbmFnZXJFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0TWFuYWdlckVtYWlsLmlubmVySFRNTCA9ICdqYW5lZG9lQGpkLmNvbSc7XG4gICAgY29udGFjdE1hbmFnZXIuYXBwZW5kQ2hpbGQoY29udGFjdE1hbmFnZXJFbWFpbCk7XG4gICAgbGV0IGNvbnRhY3RNYW5hZ2VyUGhvbmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdE1hbmFnZXJQaG9uZS5pbm5lckhUTUwgPSAnMTIzLTQ1Ni03ODkwJztcbiAgICBjb250YWN0TWFuYWdlci5hcHBlbmRDaGlsZChjb250YWN0TWFuYWdlclBob25lKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGNvbnRhY3RNYW5hZ2VyKTtcblxuXG4gICAgLy9jb250YWN0IHdhaXRlclxuICAgIGxldCBjb250YWN0V2FpdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdFdhaXRlci5jbGFzc0xpc3QuYWRkKCdjb250YWN0LXNlY3Rpb24nKTtcbiAgICBjb250YWN0V2FpdGVyLmlubmVySFRNTCA9ICc8Yj5XYWl0ZXI6PC9iPic7XG4gICAgbGV0IGNvbnRhY3RXYWl0ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RXYWl0ZXJOYW1lLmlubmVySFRNTCA9ICdKYW5lIERvZSc7XG4gICAgY29udGFjdFdhaXRlci5hcHBlbmRDaGlsZChjb250YWN0V2FpdGVyTmFtZSk7XG4gICAgbGV0IGNvbnRhY3RXYWl0ZXJFbWFpbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0V2FpdGVyRW1haWwuaW5uZXJIVE1MID0gJ2phbmVkb2VAamQuY29tJztcbiAgICBjb250YWN0V2FpdGVyLmFwcGVuZENoaWxkKGNvbnRhY3RXYWl0ZXJFbWFpbCk7XG4gICAgbGV0IGNvbnRhY3RXYWl0ZXJQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0V2FpdGVyUGhvbmUuaW5uZXJIVE1MID0gJzEyMy00NTYtNzg5MCc7XG4gICAgY29udGFjdFdhaXRlci5hcHBlbmRDaGlsZChjb250YWN0V2FpdGVyUGhvbmUpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdFdhaXRlcik7XG59XG5cbmV4cG9ydCB7bG9hZENvbnRhY3R9OyIsImxldCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuXG4vL2xvYWRzIGhvbWUgcGFnZVxuZnVuY3Rpb24gbG9hZEhvbWUoKSB7XG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkaW5nLmNsYXNzTGlzdC5hZGQoJ2hlYWRpbmcnKTtcblxuICAgIGxldCByZXZpZXcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXZpZXcuY2xhc3NMaXN0LmFkZCgncmV2aWV3Jyk7XG4gICAgcmV2aWV3LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQtc2VjdGlvbicpO1xuICAgIGxldCByZXZpZXdUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJldmlld1RleHQuaW5uZXJIVE1MID0gJ1wiVGhlIGJlc3QgcmVzdGF1cmFudCBpbiB0aGUgd29ybGQhXCInO1xuICAgIHJldmlldy5hcHBlbmRDaGlsZChyZXZpZXdUZXh0KTtcbiAgICByZXZpZXcuaW5uZXJIVE1MICs9ICctSm9obiBEb2UnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQocmV2aWV3KTtcblxuICAgIGxldCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhvdXJzLmNsYXNzTGlzdC5hZGQoJ2hvdXJzJyk7XG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZCgnY29udGVudC1zZWN0aW9uJyk7XG4gICAgbGV0IGhvdXJzSGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaG91cnNIZWFkaW5nLmlubmVySFRNTCA9ICdIb3Vycyc7XG4gICAgbGV0IGhvdXJzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBob3Vyc1RleHQuaW5uZXJIVE1MID0gJ01vbi1Gcmk6IDExOjAwYW0gLSA5OjAwcG08YnI+U2F0LVN1bjogMTE6MDBhbSAtIDEwOjAwcG0nO1xuICAgIGhvdXJzLmFwcGVuZENoaWxkKGhvdXJzSGVhZGluZyk7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNUZXh0KTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhvdXJzKTtcblxuICAgIGxldCBsb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvY2F0aW9uLmNsYXNzTGlzdC5hZGQoJ2xvY2F0aW9uJyk7XG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnY29udGVudC1zZWN0aW9uJyk7XG4gICAgbG9jYXRpb24uaW5uZXJIVE1MID0gJzxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkMzEwOS45Njg2MDAyOTU2MDUhMmQtNzcuMzE5MjcxMTg0Njc2MiEzZDM4Ljc4NzM1NDE3OTU4Nzg2ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4OWI2NTFkYTJhN2E0MGNiJTNBMHhkNWUyODA3MDg5NWZlNjA5ITJzQnVya2UlMjBjZW50cmUlMjBsaWJyYXJ5ITVlMCEzbTIhMXNlbiEyc3VzITR2MTY1NjU4OTM0NzEzMCE1bTIhMXNlbiEyc3VzXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCIgcmVmZXJyZXJwb2xpY3k9XCJuby1yZWZlcnJlci13aGVuLWRvd25ncmFkZVwiPjwvaWZyYW1lPic7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChsb2NhdGlvbik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChtYWluKTtcbn1cblxuZXhwb3J0IHtsb2FkSG9tZX07IiwibGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBsb2FkTWVudSgpIHtcblxuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7IC8vY2xlYXIgY29udGVudCBmcm9tIHByZXZpb3VzIHBhZ2VcblxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LWdyaWQnKTtcblxuICAgIC8vY2hpY2tlbiB0YWNvIG1lbnUgaXRlbVxuICAgIGxldCBjaGlja2VuVGFjbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoaWNrZW5UYWNvLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGxldCBjaGlja2VuVGFjb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNoaWNrZW5UYWNvSW1nLnNyYyA9ICcuL2ltYWdlcy9jaGlja2VuLnN2Zyc7XG4gICAgY2hpY2tlblRhY29JbWcuYWx0ID0gJ2NoaWNrZW4gdGFjbyc7XG4gICAgY2hpY2tlblRhY28uYXBwZW5kQ2hpbGQoY2hpY2tlblRhY29JbWcpO1xuICAgIGxldCBjaGlja2VuVGFjb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2hpY2tlblRhY29UZXh0LmlubmVySFRNTCA9ICdDaGlja2VuIHRhY28nO1xuICAgIGNoaWNrZW5UYWNvLmFwcGVuZENoaWxkKGNoaWNrZW5UYWNvVGV4dCk7XG5cbiAgICAvL2xhbWIgdGFjbyBtZW51IGl0ZW1cbiAgICBsZXQgbGFtYlRhY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsYW1iVGFjby5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBsZXQgbGFtYlRhY29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsYW1iVGFjb0ltZy5zcmMgPSAnLi9pbWFnZXMvbGFtYi5zdmcnO1xuICAgIGxhbWJUYWNvSW1nLmFsdCA9ICdsYW1iIHRhY28nO1xuICAgIGxhbWJUYWNvLmFwcGVuZENoaWxkKGxhbWJUYWNvSW1nKTtcbiAgICBsZXQgbGFtYlRhY29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxhbWJUYWNvVGV4dC5pbm5lckhUTUwgPSAnTGFtYiB0YWNvJztcbiAgICBsYW1iVGFjby5hcHBlbmRDaGlsZChsYW1iVGFjb1RleHQpO1xuXG4gICAgLy9wb3JrIHRhY28gbWVudSBpdGVtXG4gICAgbGV0IHBvcmtUYWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9ya1RhY28uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbGV0IHBvcmtUYWNvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcG9ya1RhY29JbWcuc3JjID0gJy4vaW1hZ2VzL3Bvcmsuc3ZnJztcbiAgICBwb3JrVGFjb0ltZy5hbHQgPSAncG9yayB0YWNvJztcbiAgICBwb3JrVGFjby5hcHBlbmRDaGlsZChwb3JrVGFjb0ltZyk7XG4gICAgbGV0IHBvcmtUYWNvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwb3JrVGFjb1RleHQuaW5uZXJIVE1MID0gJ1BvcmsgdGFjbyc7XG4gICAgcG9ya1RhY28uYXBwZW5kQ2hpbGQocG9ya1RhY29UZXh0KTtcblxuICAgIC8vc2hyaW1wIHRhY28gbWVudSBpdGVtXG4gICAgbGV0IHNocmltcFRhY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaHJpbXBUYWNvLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGxldCBzaHJpbXBUYWNvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2hyaW1wVGFjb0ltZy5zcmMgPSAnLi9pbWFnZXMvc2hyaW1wLnN2Zyc7XG4gICAgc2hyaW1wVGFjb0ltZy5hbHQgPSAnc2hyaW1wIHRhY28nO1xuICAgIHNocmltcFRhY28uYXBwZW5kQ2hpbGQoc2hyaW1wVGFjb0ltZyk7XG4gICAgbGV0IHNocmltcFRhY29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNocmltcFRhY29UZXh0LmlubmVySFRNTCA9ICdTaHJpbXAgdGFjbyc7XG4gICAgc2hyaW1wVGFjby5hcHBlbmRDaGlsZChzaHJpbXBUYWNvVGV4dCk7XG5cbiAgICAvL3N0ZWFrIHRhY28gbWVudSBpdGVtXG4gICAgbGV0IHN0ZWFrVGFjbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0ZWFrVGFjby5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBsZXQgc3RlYWtUYWNvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc3RlYWtUYWNvSW1nLnNyYyA9ICcuL2ltYWdlcy9zdGVhay5zdmcnO1xuICAgIHN0ZWFrVGFjb0ltZy5hbHQgPSAnc3RlYWsgdGFjbyc7XG4gICAgc3RlYWtUYWNvLmFwcGVuZENoaWxkKHN0ZWFrVGFjb0ltZyk7XG4gICAgbGV0IHN0ZWFrVGFjb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3RlYWtUYWNvVGV4dC5pbm5lckhUTUwgPSAnU3RlYWsgdGFjbyc7XG4gICAgc3RlYWtUYWNvLmFwcGVuZENoaWxkKHN0ZWFrVGFjb1RleHQpO1xuXG4gICAgLy92ZWdnaWUgdGFjbyBtZW51IGl0ZW1cbiAgICBsZXQgdmVnZ2llVGFjbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZlZ2dpZVRhY28uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbGV0IHZlZ2dpZVRhY29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB2ZWdnaWVUYWNvSW1nLnNyYyA9ICcuL2ltYWdlcy92ZWdnaWUuc3ZnJztcbiAgICB2ZWdnaWVUYWNvSW1nLmFsdCA9ICd2ZWdnaWUgdGFjbyc7XG4gICAgdmVnZ2llVGFjby5hcHBlbmRDaGlsZCh2ZWdnaWVUYWNvSW1nKTtcbiAgICBsZXQgdmVnZ2llVGFjb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdmVnZ2llVGFjb1RleHQuaW5uZXJIVE1MID0gJ1ZlZ2dpZSB0YWNvJztcbiAgICB2ZWdnaWVUYWNvLmFwcGVuZENoaWxkKHZlZ2dpZVRhY29UZXh0KTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY2hpY2tlblRhY28pO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobGFtYlRhY28pO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQocG9ya1RhY28pO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc2hyaW1wVGFjbyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChzdGVha1RhY28pO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQodmVnZ2llVGFjbyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51KTtcbn1cblxuZXhwb3J0IHtsb2FkTWVudX07IiwiaW1wb3J0IHtsb2FkTWVudX0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7bG9hZEhvbWV9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQge2xvYWRDb250YWN0fSBmcm9tICcuL2NvbnRhY3QnO1xuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbi8vV2Vic2l0ZSBoZWFkZXIgYW5kIG5hdmJhclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9ICdUYXF1ZXJpYSBFbCBSYW5jaGl0byc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgICBsZXQgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgaG9tZVRhYi5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlVGFiKGhvbWVUYWIpO1xuICAgICAgICBsb2FkSG9tZSgpO1xuICAgIH0pO1xuXG4gICAgbGV0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIG1lbnVUYWIuaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZVRhYihtZW51VGFiKTtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KTtcblxuICAgIGxldCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBjb250YWN0VGFiLmlubmVySFRNTCA9ICdDb250YWN0JztcbiAgICBjb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVUYWIoY29udGFjdFRhYik7XG4gICAgICAgIGxvYWRDb250YWN0KCk7XG4gICAgfSk7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcbiAgICBzZXRBY3RpdmVUYWIoaG9tZVRhYik7XG5cbiAgICByZXR1cm4gbmF2O1xufVxuXG4vL1BhZ2UgdGhhdCBpcyBjdXJyZW50bHkgbG9hZGVkXG5mdW5jdGlvbiBzZXRBY3RpdmVUYWIoYnV0dG9uKSB7XG4gICAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xuICAgIGxldCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGxvYWRIb21lKClcbn1cblxuZXhwb3J0IHtpbml0aWFsaXplV2Vic2l0ZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2luaXRpYWxpemVXZWJzaXRlfSBmcm9tICcuL3dlYnNpdGUuanMnO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9