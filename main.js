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
    concontactManager.classList.add('contact-section');
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
    main.style.width = '60%';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2REE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHNXQUFzVztBQUN0VztBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQSx5QkFBeUI7O0FBRXpCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JGZ0M7QUFDQTtBQUNNOztBQUV0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFRO0FBQ2hCLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSwrQ0FBUTtBQUNoQixLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEscURBQVc7QUFDbkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFRO0FBQ1o7Ozs7Ozs7O1VDdEVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOK0M7O0FBRS9DLDhEQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy93ZWJzaXRlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGxvYWRDb250YWN0KCkge1xuICAgIGxldCBtYWluID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcblxuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7XG4gICAgbGV0IGNvbnRhY3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnRhY3RIZWFkZXIuaW5uZXJIVE1MID0gJ0NvbnRhY3QnO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdEhlYWRlcik7XG5cbiAgICAvL293bmVyIGNvbnRhY3RcbiAgICBsZXQgY29udGFjdE93bmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFjdE93bmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Qtc2VjdGlvbicpO1xuICAgIGNvbnRhY3RPd25lci5pbm5lckhUTUwgPSAnPGI+T3duZXI6PC9iPic7XG4gICAgbGV0IGNvbnRhY3RPd25lck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdE93bmVyTmFtZS5pbm5lckhUTUwgPSAnSm9obiBEb2UnO1xuICAgIGNvbnRhY3RPd25lci5hcHBlbmRDaGlsZChjb250YWN0T3duZXJOYW1lKTtcbiAgICBsZXQgY29udGFjdE93bmVyRW1haWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdE93bmVyRW1haWwuaW5uZXJIVE1MID0gJ2pvaG5kb2VAamQuY29tJztcbiAgICBjb250YWN0T3duZXIuYXBwZW5kQ2hpbGQoY29udGFjdE93bmVyRW1haWwpO1xuICAgIGxldCBjb250YWN0T3duZXJQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0T3duZXJQaG9uZS5pbm5lckhUTUwgPSAnMTIzLTQ1Ni03ODkwJztcbiAgICBjb250YWN0T3duZXIuYXBwZW5kQ2hpbGQoY29udGFjdE93bmVyUGhvbmUpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdE93bmVyKTtcblxuICAgIC8vY29udGFjdCBtYW5hZ2VyXG4gICAgbGV0IGNvbnRhY3RNYW5hZ2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uY29udGFjdE1hbmFnZXIuY2xhc3NMaXN0LmFkZCgnY29udGFjdC1zZWN0aW9uJyk7XG4gICAgY29udGFjdE1hbmFnZXIuaW5uZXJIVE1MID0gJzxiPk1hbmFnZXI6PC9iPic7XG4gICAgbGV0IGNvbnRhY3RNYW5hZ2VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0TWFuYWdlck5hbWUuaW5uZXJIVE1MID0gJ0phbmUgRG9lJztcbiAgICBjb250YWN0TWFuYWdlci5hcHBlbmRDaGlsZChjb250YWN0TWFuYWdlck5hbWUpO1xuICAgIGxldCBjb250YWN0TWFuYWdlckVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RNYW5hZ2VyRW1haWwuaW5uZXJIVE1MID0gJ2phbmVkb2VAamQuY29tJztcbiAgICBjb250YWN0TWFuYWdlci5hcHBlbmRDaGlsZChjb250YWN0TWFuYWdlckVtYWlsKTtcbiAgICBsZXQgY29udGFjdE1hbmFnZXJQaG9uZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb250YWN0TWFuYWdlclBob25lLmlubmVySFRNTCA9ICcxMjMtNDU2LTc4OTAnO1xuICAgIGNvbnRhY3RNYW5hZ2VyLmFwcGVuZENoaWxkKGNvbnRhY3RNYW5hZ2VyUGhvbmUpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY29udGFjdE1hbmFnZXIpO1xuXG5cbiAgICAvL2NvbnRhY3Qgd2FpdGVyXG4gICAgbGV0IGNvbnRhY3RXYWl0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWN0V2FpdGVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRhY3Qtc2VjdGlvbicpO1xuICAgIGNvbnRhY3RXYWl0ZXIuaW5uZXJIVE1MID0gJzxiPldhaXRlcjo8L2I+JztcbiAgICBsZXQgY29udGFjdFdhaXRlck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY29udGFjdFdhaXRlck5hbWUuaW5uZXJIVE1MID0gJ0phbmUgRG9lJztcbiAgICBjb250YWN0V2FpdGVyLmFwcGVuZENoaWxkKGNvbnRhY3RXYWl0ZXJOYW1lKTtcbiAgICBsZXQgY29udGFjdFdhaXRlckVtYWlsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RXYWl0ZXJFbWFpbC5pbm5lckhUTUwgPSAnamFuZWRvZUBqZC5jb20nO1xuICAgIGNvbnRhY3RXYWl0ZXIuYXBwZW5kQ2hpbGQoY29udGFjdFdhaXRlckVtYWlsKTtcbiAgICBsZXQgY29udGFjdFdhaXRlclBob25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvbnRhY3RXYWl0ZXJQaG9uZS5pbm5lckhUTUwgPSAnMTIzLTQ1Ni03ODkwJztcbiAgICBjb250YWN0V2FpdGVyLmFwcGVuZENoaWxkKGNvbnRhY3RXYWl0ZXJQaG9uZSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChjb250YWN0V2FpdGVyKTtcbn1cblxuZXhwb3J0IHtsb2FkQ29udGFjdH07IiwibGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5cbi8vbG9hZHMgaG9tZSBwYWdlXG5mdW5jdGlvbiBsb2FkSG9tZSgpIHtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPSAnJztcbiAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRpbmcuY2xhc3NMaXN0LmFkZCgnaGVhZGluZycpO1xuXG4gICAgbGV0IHJldmlldyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHJldmlldy5jbGFzc0xpc3QuYWRkKCdyZXZpZXcnKTtcbiAgICByZXZpZXcuY2xhc3NMaXN0LmFkZCgnY29udGVudC1zZWN0aW9uJyk7XG4gICAgbGV0IHJldmlld1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcmV2aWV3VGV4dC5pbm5lckhUTUwgPSAnXCJUaGUgYmVzdCByZXN0YXVyYW50IGluIHRoZSB3b3JsZCFcIic7XG4gICAgcmV2aWV3LmFwcGVuZENoaWxkKHJldmlld1RleHQpO1xuICAgIHJldmlldy5pbm5lckhUTUwgKz0gJy1Kb2huIERvZSc7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChyZXZpZXcpO1xuXG4gICAgbGV0IGhvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaG91cnMuY2xhc3NMaXN0LmFkZCgnaG91cnMnKTtcbiAgICBob3Vycy5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXNlY3Rpb24nKTtcbiAgICBsZXQgaG91cnNIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBob3Vyc0hlYWRpbmcuaW5uZXJIVE1MID0gJ0hvdXJzJztcbiAgICBsZXQgaG91cnNUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGhvdXJzVGV4dC5pbm5lckhUTUwgPSAnTW9uLUZyaTogMTE6MDBhbSAtIDk6MDBwbTxicj5TYXQtU3VuOiAxMTowMGFtIC0gMTA6MDBwbSc7XG4gICAgaG91cnMuYXBwZW5kQ2hpbGQoaG91cnNIZWFkaW5nKTtcbiAgICBob3Vycy5hcHBlbmRDaGlsZChob3Vyc1RleHQpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoaG91cnMpO1xuXG4gICAgbGV0IGxvY2F0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9jYXRpb24uY2xhc3NMaXN0LmFkZCgnbG9jYXRpb24nKTtcbiAgICBsb2NhdGlvbi5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXNlY3Rpb24nKTtcbiAgICBsb2NhdGlvbi5pbm5lckhUTUwgPSAnPGlmcmFtZSBzcmM9XCJodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvZW1iZWQ/cGI9ITFtMTghMW0xMiExbTMhMWQzMTA5Ljk2ODYwMDI5NTYwNSEyZC03Ny4zMTkyNzExODQ2NzYyITNkMzguNzg3MzU0MTc5NTg3ODYhMm0zITFmMCEyZjAhM2YwITNtMiExaTEwMjQhMmk3NjghNGYxMy4xITNtMyExbTIhMXMweDg5YjY1MWRhMmE3YTQwY2IlM0EweGQ1ZTI4MDcwODk1ZmU2MDkhMnNCdXJrZSUyMGNlbnRyZSUyMGxpYnJhcnkhNWUwITNtMiExc2VuITJzdXMhNHYxNjU2NTg5MzQ3MTMwITVtMiExc2VuITJzdXNcIiB3aWR0aD1cIjYwMFwiIGhlaWdodD1cIjQ1MFwiIHN0eWxlPVwiYm9yZGVyOjA7XCIgYWxsb3dmdWxsc2NyZWVuPVwiXCIgbG9hZGluZz1cImxhenlcIiByZWZlcnJlcnBvbGljeT1cIm5vLXJlZmVycmVyLXdoZW4tZG93bmdyYWRlXCI+PC9pZnJhbWU+JztcbiAgICBtYWluLmFwcGVuZENoaWxkKGxvY2F0aW9uKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xufVxuXG5leHBvcnQge2xvYWRIb21lfTsiLCJsZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGxvYWRNZW51KCkge1xuXG4gICAgbGV0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgIG1haW4uc3R5bGUud2lkdGggPSAnNjAlJztcblxuICAgIG1haW4uaW5uZXJIVE1MID0gJyc7IC8vY2xlYXIgY29udGVudCBmcm9tIHByZXZpb3VzIHBhZ2VcblxuICAgIGxldCBtZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LWdyaWQnKTtcblxuICAgIC8vY2hpY2tlbiB0YWNvIG1lbnUgaXRlbVxuICAgIGxldCBjaGlja2VuVGFjbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNoaWNrZW5UYWNvLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGxldCBjaGlja2VuVGFjb0ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNoaWNrZW5UYWNvSW1nLnNyYyA9ICcuL2ltYWdlcy9jaGlja2VuLnN2Zyc7XG4gICAgY2hpY2tlblRhY29JbWcuYWx0ID0gJ2NoaWNrZW4gdGFjbyc7XG4gICAgY2hpY2tlblRhY28uYXBwZW5kQ2hpbGQoY2hpY2tlblRhY29JbWcpO1xuICAgIGxldCBjaGlja2VuVGFjb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgY2hpY2tlblRhY29UZXh0LmlubmVySFRNTCA9ICdDaGlja2VuIHRhY28nO1xuICAgIGNoaWNrZW5UYWNvLmFwcGVuZENoaWxkKGNoaWNrZW5UYWNvVGV4dCk7XG5cbiAgICAvL2xhbWIgdGFjbyBtZW51IGl0ZW1cbiAgICBsZXQgbGFtYlRhY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsYW1iVGFjby5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBsZXQgbGFtYlRhY29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBsYW1iVGFjb0ltZy5zcmMgPSAnLi9pbWFnZXMvbGFtYi5zdmcnO1xuICAgIGxhbWJUYWNvSW1nLmFsdCA9ICdsYW1iIHRhY28nO1xuICAgIGxhbWJUYWNvLmFwcGVuZENoaWxkKGxhbWJUYWNvSW1nKTtcbiAgICBsZXQgbGFtYlRhY29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGxhbWJUYWNvVGV4dC5pbm5lckhUTUwgPSAnTGFtYiB0YWNvJztcbiAgICBsYW1iVGFjby5hcHBlbmRDaGlsZChsYW1iVGFjb1RleHQpO1xuXG4gICAgLy9wb3JrIHRhY28gbWVudSBpdGVtXG4gICAgbGV0IHBvcmtUYWNvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcG9ya1RhY28uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbGV0IHBvcmtUYWNvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgcG9ya1RhY29JbWcuc3JjID0gJy4vaW1hZ2VzL3Bvcmsuc3ZnJztcbiAgICBwb3JrVGFjb0ltZy5hbHQgPSAncG9yayB0YWNvJztcbiAgICBwb3JrVGFjby5hcHBlbmRDaGlsZChwb3JrVGFjb0ltZyk7XG4gICAgbGV0IHBvcmtUYWNvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBwb3JrVGFjb1RleHQuaW5uZXJIVE1MID0gJ1BvcmsgdGFjbyc7XG4gICAgcG9ya1RhY28uYXBwZW5kQ2hpbGQocG9ya1RhY29UZXh0KTtcblxuICAgIC8vc2hyaW1wIHRhY28gbWVudSBpdGVtXG4gICAgbGV0IHNocmltcFRhY28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzaHJpbXBUYWNvLmNsYXNzTGlzdC5hZGQoJ21lbnUtaXRlbScpO1xuICAgIGxldCBzaHJpbXBUYWNvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2hyaW1wVGFjb0ltZy5zcmMgPSAnLi9pbWFnZXMvc2hyaW1wLnN2Zyc7XG4gICAgc2hyaW1wVGFjb0ltZy5hbHQgPSAnc2hyaW1wIHRhY28nO1xuICAgIHNocmltcFRhY28uYXBwZW5kQ2hpbGQoc2hyaW1wVGFjb0ltZyk7XG4gICAgbGV0IHNocmltcFRhY29UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHNocmltcFRhY29UZXh0LmlubmVySFRNTCA9ICdTaHJpbXAgdGFjbyc7XG4gICAgc2hyaW1wVGFjby5hcHBlbmRDaGlsZChzaHJpbXBUYWNvVGV4dCk7XG5cbiAgICAvL3N0ZWFrIHRhY28gbWVudSBpdGVtXG4gICAgbGV0IHN0ZWFrVGFjbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0ZWFrVGFjby5jbGFzc0xpc3QuYWRkKCdtZW51LWl0ZW0nKTtcbiAgICBsZXQgc3RlYWtUYWNvSW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc3RlYWtUYWNvSW1nLnNyYyA9ICcuL2ltYWdlcy9zdGVhay5zdmcnO1xuICAgIHN0ZWFrVGFjb0ltZy5hbHQgPSAnc3RlYWsgdGFjbyc7XG4gICAgc3RlYWtUYWNvLmFwcGVuZENoaWxkKHN0ZWFrVGFjb0ltZyk7XG4gICAgbGV0IHN0ZWFrVGFjb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3RlYWtUYWNvVGV4dC5pbm5lckhUTUwgPSAnU3RlYWsgdGFjbyc7XG4gICAgc3RlYWtUYWNvLmFwcGVuZENoaWxkKHN0ZWFrVGFjb1RleHQpO1xuXG4gICAgLy92ZWdnaWUgdGFjbyBtZW51IGl0ZW1cbiAgICBsZXQgdmVnZ2llVGFjbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZlZ2dpZVRhY28uY2xhc3NMaXN0LmFkZCgnbWVudS1pdGVtJyk7XG4gICAgbGV0IHZlZ2dpZVRhY29JbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICB2ZWdnaWVUYWNvSW1nLnNyYyA9ICcuL2ltYWdlcy92ZWdnaWUuc3ZnJztcbiAgICB2ZWdnaWVUYWNvSW1nLmFsdCA9ICd2ZWdnaWUgdGFjbyc7XG4gICAgdmVnZ2llVGFjby5hcHBlbmRDaGlsZCh2ZWdnaWVUYWNvSW1nKTtcbiAgICBsZXQgdmVnZ2llVGFjb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgdmVnZ2llVGFjb1RleHQuaW5uZXJIVE1MID0gJ1ZlZ2dpZSB0YWNvJztcbiAgICB2ZWdnaWVUYWNvLmFwcGVuZENoaWxkKHZlZ2dpZVRhY29UZXh0KTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoY2hpY2tlblRhY28pO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQobGFtYlRhY28pO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQocG9ya1RhY28pO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoc2hyaW1wVGFjbyk7XG4gICAgbWVudS5hcHBlbmRDaGlsZChzdGVha1RhY28pO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQodmVnZ2llVGFjbyk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtZW51KTtcbn1cblxuZXhwb3J0IHtsb2FkTWVudX07IiwiaW1wb3J0IHtsb2FkTWVudX0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7bG9hZEhvbWV9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQge2xvYWRDb250YWN0fSBmcm9tICcuL2NvbnRhY3QnO1xuXG5sZXQgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbi8vV2Vic2l0ZSBoZWFkZXIgYW5kIG5hdmJhclxuZnVuY3Rpb24gY3JlYXRlSGVhZGVyKCkge1xuICAgIGxldCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIHRpdGxlLmlubmVySFRNTCA9ICdUYXF1ZXJpYSBFbCBSYW5jaGl0byc7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoY3JlYXRlTmF2QmFyKCkpO1xuICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU5hdkJhcigpIHtcbiAgICBsZXQgbmF2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbiAgICBsZXQgaG9tZVRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGhvbWVUYWIuY2xhc3NMaXN0LmFkZCgndGFiJyk7XG4gICAgaG9tZVRhYi5pbm5lckhUTUwgPSAnSG9tZSc7XG4gICAgaG9tZVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHJldHVybjtcbiAgICAgICAgc2V0QWN0aXZlVGFiKGhvbWVUYWIpO1xuICAgICAgICBsb2FkSG9tZSgpO1xuICAgIH0pO1xuXG4gICAgbGV0IG1lbnVUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIG1lbnVUYWIuaW5uZXJIVE1MID0gJ01lbnUnO1xuICAgIG1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZihlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSByZXR1cm47XG4gICAgICAgIHNldEFjdGl2ZVRhYihtZW51VGFiKTtcbiAgICAgICAgbG9hZE1lbnUoKTtcbiAgICB9KTtcblxuICAgIGxldCBjb250YWN0VGFiID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29udGFjdFRhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBjb250YWN0VGFiLmlubmVySFRNTCA9ICdDb250YWN0JztcbiAgICBjb250YWN0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkgcmV0dXJuO1xuICAgICAgICBzZXRBY3RpdmVUYWIoY29udGFjdFRhYik7XG4gICAgICAgIGxvYWRDb250YWN0KCk7XG4gICAgfSk7XG5cbiAgICBuYXYuYXBwZW5kQ2hpbGQoaG9tZVRhYik7XG4gICAgbmF2LmFwcGVuZENoaWxkKG1lbnVUYWIpO1xuICAgIG5hdi5hcHBlbmRDaGlsZChjb250YWN0VGFiKTtcbiAgICBzZXRBY3RpdmVUYWIoaG9tZVRhYik7XG5cbiAgICByZXR1cm4gbmF2O1xufVxuXG4vL1BhZ2UgdGhhdCBpcyBjdXJyZW50bHkgbG9hZGVkXG5mdW5jdGlvbiBzZXRBY3RpdmVUYWIoYnV0dG9uKSB7XG4gICAgbGV0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG4gICAgdGFicy5mb3JFYWNoKHRhYiA9PiB7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgICBidXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59XG5cbmZ1bmN0aW9uIGluaXRpYWxpemVXZWJzaXRlKCkge1xuICAgIGxldCBoZWFkZXIgPSBjcmVhdGVIZWFkZXIoKTtcbiAgICBsZXQgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGxvYWRIb21lKClcbn1cblxuZXhwb3J0IHtpbml0aWFsaXplV2Vic2l0ZX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2luaXRpYWxpemVXZWJzaXRlfSBmcm9tICcuL3dlYnNpdGUuanMnO1xuXG5pbml0aWFsaXplV2Vic2l0ZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9