(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["regions-sulsel-details-sulsel-details-module"],{

/***/ "./src/app/regions/sulsel-details/sulsel-details.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/regions/sulsel-details/sulsel-details.module.ts ***!
  \*****************************************************************/
/*! exports provided: SulselDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulselDetailsPageModule", function() { return SulselDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sulsel_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sulsel-details.page */ "./src/app/regions/sulsel-details/sulsel-details.page.ts");







var routes = [
    {
        path: '',
        component: _sulsel_details_page__WEBPACK_IMPORTED_MODULE_6__["SulselDetailsPage"]
    }
];
var SulselDetailsPageModule = /** @class */ (function () {
    function SulselDetailsPageModule() {
    }
    SulselDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sulsel_details_page__WEBPACK_IMPORTED_MODULE_6__["SulselDetailsPage"]]
        })
    ], SulselDetailsPageModule);
    return SulselDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/regions/sulsel-details/sulsel-details.page.html":
/*!*****************************************************************!*\
  !*** ./src/app/regions/sulsel-details/sulsel-details.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>South Sulawesi</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\" style=\"color: black;\"></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content fullscreen>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/regions/sulsel-details/sulsel-details.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/regions/sulsel-details/sulsel-details.page.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: white;\n  --ion-color-base: transparent !important; }\n\nion-title {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcGVycm9uZS9Eb2N1bWVudHMvU1VQU0kvUHJvZ2V0dG9fRGlwbG9tYS9iYXRpay1tb2JpbGUtYXBwL2lXYXJlQmF0aWsvc3JjL2FwcC9yZWdpb25zL3N1bHNlbC1kZXRhaWxzL3N1bHNlbC1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFhO0VBQ2Isd0NBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvcmVnaW9ucy9zdWxzZWwtZGV0YWlscy9zdWxzZWwtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiBibGFjaztcbn0iXX0= */"

/***/ }),

/***/ "./src/app/regions/sulsel-details/sulsel-details.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/regions/sulsel-details/sulsel-details.page.ts ***!
  \***************************************************************/
/*! exports provided: SulselDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SulselDetailsPage", function() { return SulselDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SulselDetailsPage = /** @class */ (function () {
    function SulselDetailsPage() {
    }
    SulselDetailsPage.prototype.ngOnInit = function () {
    };
    SulselDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sulsel-details',
            template: __webpack_require__(/*! ./sulsel-details.page.html */ "./src/app/regions/sulsel-details/sulsel-details.page.html"),
            styles: [__webpack_require__(/*! ./sulsel-details.page.scss */ "./src/app/regions/sulsel-details/sulsel-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SulselDetailsPage);
    return SulselDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=regions-sulsel-details-sulsel-details-module.js.map