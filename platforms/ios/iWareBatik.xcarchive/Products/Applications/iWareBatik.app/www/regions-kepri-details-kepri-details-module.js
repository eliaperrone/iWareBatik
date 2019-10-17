(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["regions-kepri-details-kepri-details-module"],{

/***/ "./src/app/regions/kepri-details/kepri-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/regions/kepri-details/kepri-details.module.ts ***!
  \***************************************************************/
/*! exports provided: KepriDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KepriDetailsPageModule", function() { return KepriDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _kepri_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./kepri-details.page */ "./src/app/regions/kepri-details/kepri-details.page.ts");







var routes = [
    {
        path: '',
        component: _kepri_details_page__WEBPACK_IMPORTED_MODULE_6__["KepriDetailsPage"]
    }
];
var KepriDetailsPageModule = /** @class */ (function () {
    function KepriDetailsPageModule() {
    }
    KepriDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_kepri_details_page__WEBPACK_IMPORTED_MODULE_6__["KepriDetailsPage"]]
        })
    ], KepriDetailsPageModule);
    return KepriDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/regions/kepri-details/kepri-details.page.html":
/*!***************************************************************!*\
  !*** ./src/app/regions/kepri-details/kepri-details.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>Kepri</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\" style=\"color: black;\"></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content fullscreen>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/regions/kepri-details/kepri-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/regions/kepri-details/kepri-details.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: white;\n  --ion-color-base: transparent !important; }\n\nion-title {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcGVycm9uZS9Eb2N1bWVudHMvU1VQU0kvUHJvZ2V0dG9fRGlwbG9tYS9iYXRpay1tb2JpbGUtYXBwL2lXYXJlQmF0aWsvc3JjL2FwcC9yZWdpb25zL2tlcHJpLWRldGFpbHMva2VwcmktZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBYTtFQUNiLHdDQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lvbnMva2VwcmktZGV0YWlscy9rZXByaS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/regions/kepri-details/kepri-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/regions/kepri-details/kepri-details.page.ts ***!
  \*************************************************************/
/*! exports provided: KepriDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KepriDetailsPage", function() { return KepriDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var KepriDetailsPage = /** @class */ (function () {
    function KepriDetailsPage() {
    }
    KepriDetailsPage.prototype.ngOnInit = function () {
    };
    KepriDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kepri-details',
            template: __webpack_require__(/*! ./kepri-details.page.html */ "./src/app/regions/kepri-details/kepri-details.page.html"),
            styles: [__webpack_require__(/*! ./kepri-details.page.scss */ "./src/app/regions/kepri-details/kepri-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], KepriDetailsPage);
    return KepriDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=regions-kepri-details-kepri-details-module.js.map