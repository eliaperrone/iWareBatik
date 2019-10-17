(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["regions-jakarta-details-jakarta-details-module"],{

/***/ "./src/app/regions/jakarta-details/jakarta-details.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/regions/jakarta-details/jakarta-details.module.ts ***!
  \*******************************************************************/
/*! exports provided: JakartaDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JakartaDetailsPageModule", function() { return JakartaDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jakarta_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jakarta-details.page */ "./src/app/regions/jakarta-details/jakarta-details.page.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pinch-zoom */ "./node_modules/ngx-pinch-zoom/fesm5/ngx-pinch-zoom.js");










var routes = [
    {
        path: '',
        component: _jakarta_details_page__WEBPACK_IMPORTED_MODULE_6__["JakartaDetailsPage"]
    }
];
var JakartaDetailsPageModule = /** @class */ (function () {
    function JakartaDetailsPageModule() {
    }
    JakartaDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_9__["PinchZoomModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_jakarta_details_page__WEBPACK_IMPORTED_MODULE_6__["JakartaDetailsPage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]]
        })
    ], JakartaDetailsPageModule);
    return JakartaDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/regions/jakarta-details/jakarta-details.page.html":
/*!*******************************************************************!*\
  !*** ./src/app/regions/jakarta-details/jakarta-details.page.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Jakarta</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" style=\"color: black;\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/regions/jakarta-details/jakarta-details.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/regions/jakarta-details/jakarta-details.page.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: white;\n  --ion-color-base: transparent !important; }\n\nion-title {\n  color: black; }\n\nion-slides {\n  margin-top: 1%;\n  background: white; }\n\nion-slides img {\n    padding-top: 5px;\n    padding-bottom: 10px; }\n\nion-button {\n  --background: #2a5a54;\n  --background-activated: green; }\n\n.photo-thumbnail {\n  position: relative;\n  display: inline-block; }\n\n.arrow {\n  width: 30px;\n  height: 30px;\n  color: #2a5a54; }\n\n#forward-arrow {\n  margin-left: 73%; }\n\n#back-arrow {\n  margin-left: 2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcGVycm9uZS9Eb2N1bWVudHMvU1VQU0kvUHJvZ2V0dG9fRGlwbG9tYS9iYXRpay1tb2JpbGUtYXBwL2lXYXJlQmF0aWsvc3JjL2FwcC9yZWdpb25zL2pha2FydGEtZGV0YWlscy9qYWthcnRhLWRldGFpbHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQWE7RUFDYix3Q0FBaUIsRUFBQTs7QUFHbkI7RUFDRSxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBRm5CO0lBS0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQixFQUFBOztBQUl4QjtFQUNFLHFCQUFhO0VBQ2IsNkJBQXVCLEVBQUE7O0FBR3pCO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUdoQjtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGVBQWUsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3JlZ2lvbnMvamFrYXJ0YS1kZXRhaWxzL2pha2FydGEtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLXNsaWRlcyB7XG4gIG1hcmdpbi10b3A6IDElO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICBpbWcge1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIH1cbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzJhNWE1NDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogZ3JlZW47XG59XG5cbi5waG90by10aHVtYm5haWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmFycm93IHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6ICMyYTVhNTQ7XG59XG5cbiNmb3J3YXJkLWFycm93IHtcbiAgbWFyZ2luLWxlZnQ6IDczJTtcbn1cblxuI2JhY2stYXJyb3cge1xuICBtYXJnaW4tbGVmdDogMiU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/regions/jakarta-details/jakarta-details.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/regions/jakarta-details/jakarta-details.page.ts ***!
  \*****************************************************************/
/*! exports provided: JakartaDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JakartaDetailsPage", function() { return JakartaDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var JakartaDetailsPage = /** @class */ (function () {
    function JakartaDetailsPage() {
        //
    }
    JakartaDetailsPage.prototype.ngOnInit = function () {
        //
    };
    JakartaDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jakarta-details',
            template: __webpack_require__(/*! ./jakarta-details.page.html */ "./src/app/regions/jakarta-details/jakarta-details.page.html"),
            styles: [__webpack_require__(/*! ./jakarta-details.page.scss */ "./src/app/regions/jakarta-details/jakarta-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], JakartaDetailsPage);
    return JakartaDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=regions-jakarta-details-jakarta-details-module.js.map