(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["regions-malut-details-malut-details-module"],{

/***/ "./src/app/regions/malut-details/malut-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/regions/malut-details/malut-details.module.ts ***!
  \***************************************************************/
/*! exports provided: MalutDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MalutDetailsPageModule", function() { return MalutDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _malut_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./malut-details.page */ "./src/app/regions/malut-details/malut-details.page.ts");







var routes = [
    {
        path: '',
        component: _malut_details_page__WEBPACK_IMPORTED_MODULE_6__["MalutDetailsPage"]
    }
];
var MalutDetailsPageModule = /** @class */ (function () {
    function MalutDetailsPageModule() {
    }
    MalutDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_malut_details_page__WEBPACK_IMPORTED_MODULE_6__["MalutDetailsPage"]]
        })
    ], MalutDetailsPageModule);
    return MalutDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/regions/malut-details/malut-details.page.html":
/*!***************************************************************!*\
  !*** ./src/app/regions/malut-details/malut-details.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>North Maluku</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\" style=\"color: black;\"></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content fullscreen>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/regions/malut-details/malut-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/regions/malut-details/malut-details.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: white;\n  --ion-color-base: transparent !important; }\n\nion-title {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcGVycm9uZS9Eb2N1bWVudHMvU1VQU0kvUHJvZ2V0dG9fRGlwbG9tYS9iYXRpay1tb2JpbGUtYXBwL2lXYXJlQmF0aWsvc3JjL2FwcC9yZWdpb25zL21hbHV0LWRldGFpbHMvbWFsdXQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBYTtFQUNiLHdDQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lvbnMvbWFsdXQtZGV0YWlscy9tYWx1dC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/regions/malut-details/malut-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/regions/malut-details/malut-details.page.ts ***!
  \*************************************************************/
/*! exports provided: MalutDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MalutDetailsPage", function() { return MalutDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MalutDetailsPage = /** @class */ (function () {
    function MalutDetailsPage() {
    }
    MalutDetailsPage.prototype.ngOnInit = function () {
    };
    MalutDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-malut-details',
            template: __webpack_require__(/*! ./malut-details.page.html */ "./src/app/regions/malut-details/malut-details.page.html"),
            styles: [__webpack_require__(/*! ./malut-details.page.scss */ "./src/app/regions/malut-details/malut-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MalutDetailsPage);
    return MalutDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=regions-malut-details-malut-details-module.js.map