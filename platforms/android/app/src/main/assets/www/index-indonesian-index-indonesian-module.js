(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-indonesian-index-indonesian-module"],{

/***/ "./src/app/index-indonesian/index-indonesian.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/index-indonesian/index-indonesian.module.ts ***!
  \*************************************************************/
/*! exports provided: IndexIndonesianPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexIndonesianPageModule", function() { return IndexIndonesianPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _index_indonesian_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-indonesian.page */ "./src/app/index-indonesian/index-indonesian.page.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");








var routes = [
    {
        path: '',
        component: _index_indonesian_page__WEBPACK_IMPORTED_MODULE_6__["IndexIndonesianPage"]
    }
];
var IndexIndonesianPageModule = /** @class */ (function () {
    function IndexIndonesianPageModule() {
    }
    IndexIndonesianPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_index_indonesian_page__WEBPACK_IMPORTED_MODULE_6__["IndexIndonesianPage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]]
        })
    ], IndexIndonesianPageModule);
    return IndexIndonesianPageModule;
}());



/***/ }),

/***/ "./src/app/index-indonesian/index-indonesian.page.html":
/*!*************************************************************!*\
  !*** ./src/app/index-indonesian/index-indonesian.page.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>iWareBatik</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\"></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content fullscreen>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/index-indonesian/index-indonesian.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/index-indonesian/index-indonesian.page.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4LWluZG9uZXNpYW4vaW5kZXgtaW5kb25lc2lhbi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/index-indonesian/index-indonesian.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/index-indonesian/index-indonesian.page.ts ***!
  \***********************************************************/
/*! exports provided: IndexIndonesianPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexIndonesianPage", function() { return IndexIndonesianPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");




var IndexIndonesianPage = /** @class */ (function () {
    function IndexIndonesianPage(statusBar, screenOrientation) {
        this.statusBar = statusBar;
        this.screenOrientation = screenOrientation;
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        this.statusBar.styleDefault();
    }
    IndexIndonesianPage.prototype.ngOnInit = function () {
        //
    };
    IndexIndonesianPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index-indonesian',
            template: __webpack_require__(/*! ./index-indonesian.page.html */ "./src/app/index-indonesian/index-indonesian.page.html"),
            styles: [__webpack_require__(/*! ./index-indonesian.page.scss */ "./src/app/index-indonesian/index-indonesian.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"], _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"]])
    ], IndexIndonesianPage);
    return IndexIndonesianPage;
}());



/***/ })

}]);
//# sourceMappingURL=index-indonesian-index-indonesian-module.js.map