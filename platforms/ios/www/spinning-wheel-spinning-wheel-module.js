(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["spinning-wheel-spinning-wheel-module"],{

/***/ "./src/app/spinning-wheel/spinning-wheel.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/spinning-wheel/spinning-wheel.module.ts ***!
  \*********************************************************/
/*! exports provided: SpinningWheelPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinningWheelPageModule", function() { return SpinningWheelPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _spinning_wheel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./spinning-wheel.page */ "./src/app/spinning-wheel/spinning-wheel.page.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");








var routes = [
    {
        path: '',
        component: _spinning_wheel_page__WEBPACK_IMPORTED_MODULE_6__["SpinningWheelPage"]
    }
];
var SpinningWheelPageModule = /** @class */ (function () {
    function SpinningWheelPageModule() {
    }
    SpinningWheelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_spinning_wheel_page__WEBPACK_IMPORTED_MODULE_6__["SpinningWheelPage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]]
        })
    ], SpinningWheelPageModule);
    return SpinningWheelPageModule;
}());



/***/ }),

/***/ "./src/app/spinning-wheel/spinning-wheel.page.html":
/*!*********************************************************!*\
  !*** ./src/app/spinning-wheel/spinning-wheel.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title style=\"color: black;\">Spinning Wheel</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\" style=\"color: black;\"></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content fullscreen>\n  <img id=\"spinning-wheel\" src=\"../../assets/image/spinning_wheel.png\" (click)=\"spin()\"/>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/spinning-wheel/spinning-wheel.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/spinning-wheel/spinning-wheel.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: white;\n  --ion-color-base: transparent !important; }\n\nion-title {\n  color: black; }\n\n#spinning-wheel {\n  position: absolute;\n  top: 18%;\n  -webkit-transform: rotate(360deg);\n  -webkit-transition-duration: 5s;\n  -webkit-transition-delay: now;\n  -webkit-animation-timing-function: linear;\n  -webkit-animation-iteration-count: infinite; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcGVycm9uZS9Eb2N1bWVudHMvU1VQU0kvUHJvZ2V0dG9fRGlwbG9tYS9iYXRpay1tb2JpbGUtYXBwL2lXYXJlQmF0aWsvc3JjL2FwcC9zcGlubmluZy13aGVlbC9zcGlubmluZy13aGVlbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBYTtFQUNiLHdDQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGlDQUFpQztFQUNqQywrQkFBK0I7RUFDL0IsNkJBQTZCO0VBQzdCLHlDQUF5QztFQUN6QywyQ0FBMkMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NwaW5uaW5nLXdoZWVsL3NwaW5uaW5nLXdoZWVsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4jc3Bpbm5pbmctd2hlZWx7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTglO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tZHVyYXRpb246IDVzO1xuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kZWxheTogbm93O1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xuICAgIC13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/spinning-wheel/spinning-wheel.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/spinning-wheel/spinning-wheel.page.ts ***!
  \*******************************************************/
/*! exports provided: SpinningWheelPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinningWheelPage", function() { return SpinningWheelPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");



var SpinningWheelPage = /** @class */ (function () {
    function SpinningWheelPage(screenOrientation) {
        this.screenOrientation = screenOrientation;
        this.screenOrientation.unlock();
    }
    SpinningWheelPage.prototype.ngOnInit = function () {
        //
    };
    SpinningWheelPage.prototype.spin = function () {
        document.getElementById("spinning-wheel").style.transform = "rotate(-780deg)";
    };
    SpinningWheelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spinning-wheel',
            template: __webpack_require__(/*! ./spinning-wheel.page.html */ "./src/app/spinning-wheel/spinning-wheel.page.html"),
            styles: [__webpack_require__(/*! ./spinning-wheel.page.scss */ "./src/app/spinning-wheel/spinning-wheel.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["ScreenOrientation"]])
    ], SpinningWheelPage);
    return SpinningWheelPage;
}());



/***/ })

}]);
//# sourceMappingURL=spinning-wheel-spinning-wheel-module.js.map