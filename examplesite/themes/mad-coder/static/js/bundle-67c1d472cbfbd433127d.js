/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Selected DOM elements
const html = document.querySelector('html');
const body = document.querySelector('body');
const menuToggle = document.querySelector('.menu-toggle');
const menuIcon = document.querySelector('.icon-menu');
const siteMenu = document.querySelector('.site-menu');
const socialMenu = document.querySelector('.social-menu');
const toTopBtn = document.querySelector('.to-top');

// Site and social menu toggle
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    siteMenu.classList.toggle('collapsed');
    socialMenu.classList.toggle('collapsed');
    menuIcon.classList.toggle('icon-menu');
    menuIcon.classList.toggle('icon-close');
  });
}

// Random emoji for 404 error message.
const randomErrorEmoji = () => {
  const error = document.getElementsByClassName('error-emoji')[0];
  const emojiArray = ['\\(o_o)/', '(o^^)o', '(˚Δ˚)b', '(^-^*)', '(≥o≤)', '(^_^)b', '(·_·)', '(=\'X\'=)', '(>_<)', '(;-;)', '\\(^Д^)/'];
  if (error) {
    const errorEmoji = emojiArray[Math.floor(Math.random() * emojiArray.length)];
    error.appendChild(document.createTextNode(errorEmoji));
  }
};
randomErrorEmoji();

// Object-fit polyfill for post cover
/* eslint-disable no-undef */
objectFitImages('img.post-cover');

// Show toTopBtn when scroll to 600px
/* eslint-disable no-undef */
let lastPosition = 0;
let ticking = false;
window.addEventListener('scroll', () => {
  lastPosition = body.scrollTop === 0 ? html.scrollTop : body.scrollTop;
  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (lastPosition >= 600) {
        toTopBtn.classList.remove('is-hide');
      } else {
        toTopBtn.classList.add('is-hide');
      }
      ticking = false;
    });
  }
  ticking = true;
});

// Smooth Scroll to top when click toTopBtn
const scroll = new SmoothScroll('a[href*="#"]');
toTopBtn.addEventListener('click', () => {
  scroll.animateScroll(0);
});

/***/ })

/******/ });