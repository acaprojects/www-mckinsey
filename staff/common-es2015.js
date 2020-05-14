(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/globals/angular-animations.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/globals/angular-animations.ts ***!
  \******************************************************/
/*! exports provided: ANIMATION_SHOW_ENTER_LEAVE, ANIMATION_SHOW_CONTRACT_EXPAND */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_SHOW_ENTER_LEAVE", function() { return ANIMATION_SHOW_ENTER_LEAVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ANIMATION_SHOW_CONTRACT_EXPAND", function() { return ANIMATION_SHOW_CONTRACT_EXPAND; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const ANIMATION_SHOW_ENTER_LEAVE = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('show', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, height: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, height: '*' }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, height: '*' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, height: 0 }))
    ])
]);
const ANIMATION_SHOW_CONTRACT_EXPAND = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('show', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, height: '*' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0, height: 0 })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show <=> hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('200ms ease-in'))
]);


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map