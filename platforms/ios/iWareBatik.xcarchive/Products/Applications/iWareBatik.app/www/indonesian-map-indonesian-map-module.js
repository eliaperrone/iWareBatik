(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["indonesian-map-indonesian-map-module"],{

/***/ "./src/app/indonesian-map/indonesian-map.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/indonesian-map/indonesian-map.module.ts ***!
  \*********************************************************/
/*! exports provided: IndonesianMapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndonesianMapPageModule", function() { return IndonesianMapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _indonesian_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./indonesian-map.page */ "./src/app/indonesian-map/indonesian-map.page.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pinch-zoom */ "./node_modules/ngx-pinch-zoom/fesm5/ngx-pinch-zoom.js");









var routes = [
    {
        path: '',
        component: _indonesian_map_page__WEBPACK_IMPORTED_MODULE_6__["IndonesianMapPage"]
    }
];
var IndonesianMapPageModule = /** @class */ (function () {
    function IndonesianMapPageModule() {
    }
    IndonesianMapPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_8__["PinchZoomModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_indonesian_map_page__WEBPACK_IMPORTED_MODULE_6__["IndonesianMapPage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]]
        })
    ], IndonesianMapPageModule);
    return IndonesianMapPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=indonesian-map-indonesian-map-module.js.map