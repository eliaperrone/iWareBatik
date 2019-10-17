(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["regions-kalteng-details-kalteng-details-module"],{

/***/ "./src/app/regions/kalteng-details/kalteng-details.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/regions/kalteng-details/kalteng-details.module.ts ***!
  \*******************************************************************/
/*! exports provided: KaltengDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KaltengDetailsPageModule", function() { return KaltengDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _kalteng_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kalteng-details.page */ "./src/app/regions/kalteng-details/kalteng-details.page.ts");







var routes = [
    {
        path: '',
        component: _kalteng_details_page__WEBPACK_IMPORTED_MODULE_6__["KaltengDetailsPage"]
    }
];
var KaltengDetailsPageModule = /** @class */ (function () {
    function KaltengDetailsPageModule() {
    }
    KaltengDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_kalteng_details_page__WEBPACK_IMPORTED_MODULE_6__["KaltengDetailsPage"]]
        })
    ], KaltengDetailsPageModule);
    return KaltengDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/regions/kalteng-details/kalteng-details.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/regions/kalteng-details/kalteng-details.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>Center Kalimantan</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\" style=\"color: black;\"></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content fullscreen>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/regions/kalteng-details/kalteng-details.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/regions/kalteng-details/kalteng-details.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: white;\n  --ion-color-base: transparent !important; }\n\nion-title {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcGVycm9uZS9Eb2N1bWVudHMvU1VQU0kvUHJvZ2V0dG9fRGlwbG9tYS9iYXRpay1tb2JpbGUtYXBwL2lXYXJlQmF0aWsvc3JjL2FwcC9yZWdpb25zL2thbHRlbmctZGV0YWlscy9rYWx0ZW5nLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWE7RUFDYix3Q0FBaUIsRUFBQTs7QUFHckI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpb25zL2thbHRlbmctZGV0YWlscy9rYWx0ZW5nLWRldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogYmxhY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/regions/kalteng-details/kalteng-details.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/regions/kalteng-details/kalteng-details.page.ts ***!
  \*****************************************************************/
/*! exports provided: KaltengDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KaltengDetailsPage", function() { return KaltengDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KaltengDetailsPage = /** @class */ (function () {
    function KaltengDetailsPage() {
    }
    KaltengDetailsPage.prototype.ngOnInit = function () {
    };
    KaltengDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kalteng-details',
            template: __webpack_require__(/*! ./kalteng-details.page.html */ "./src/app/regions/kalteng-details/kalteng-details.page.html"),
            styles: [__webpack_require__(/*! ./kalteng-details.page.scss */ "./src/app/regions/kalteng-details/kalteng-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KaltengDetailsPage);
    return KaltengDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=regions-kalteng-details-kalteng-details-module.js.map