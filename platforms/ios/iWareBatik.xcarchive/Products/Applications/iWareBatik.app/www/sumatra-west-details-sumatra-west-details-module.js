(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sumatra-west-details-sumatra-west-details-module"],{

/***/ "./src/app/sumatra-west-details/sumatra-west-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/sumatra-west-details/sumatra-west-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: SumatraWestDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumatraWestDetailsPageModule", function() { return SumatraWestDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sumatra_west_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sumatra-west-details.page */ "./src/app/sumatra-west-details/sumatra-west-details.page.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");








var routes = [
    {
        path: '',
        component: _sumatra_west_details_page__WEBPACK_IMPORTED_MODULE_6__["SumatraWestDetailsPage"]
    }
];
var SumatraWestDetailsPageModule = /** @class */ (function () {
    function SumatraWestDetailsPageModule() {
    }
    SumatraWestDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sumatra_west_details_page__WEBPACK_IMPORTED_MODULE_6__["SumatraWestDetailsPage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]]
        })
    ], SumatraWestDetailsPageModule);
    return SumatraWestDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/sumatra-west-details/sumatra-west-details.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/sumatra-west-details/sumatra-west-details.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>Sumatra West</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\" style=\"color: black;\"></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content fullscreen>\n\n    <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Description</ion-card-subtitle>\n          <ion-card-title>Sumatra West</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            West Sumatra (Indonesian: Sumatera Barat, abbreviated to Sumbar, Minangkabau: Sumatera Baraik, Jawi: سومترا بارايق,) \n            is a province of Indonesia. It lies on the west coast of the island of Sumatra. The latest official estimate for \n            January 2014 shows a population of 5,098,790. West Sumatra is sub-divided into 12 regencies and seven cities. It \n            has relatively more cities than other provinces in Indonesia, except Java province.[3] Its capital is Padang. The \n            province borders the provinces of North Sumatra (Sumatera Utara) to the north, Riau and Jambi to the east, and Bengkulu \n            to the southeast. It includes...\n        </ion-card-content>\n        <ion-row class=\"cardfooter\">\n          <ion-col>\n            <ion-button href=\"https://en.wikipedia.org/wiki/West_Sumatra\">Read More</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    \n      <ion-card> \n        <ion-card-header>\n          <ion-card-subtitle>Example</ion-card-subtitle>\n          <ion-card-title>Batik of Sumatra West</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-slides [options]=\"sliderOpts\">\n             <ion-slide *ngFor=\"let img of images\">\n                <img src=\"../../assets/image/{{img}}.jpg\" tappable (click)=\"openPreview(img)\"/>\n             </ion-slide>\n          </ion-slides>\n        </ion-card-content>\n      </ion-card>\n    \n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Regions</ion-card-subtitle>\n          <ion-card-title>Map of Sumatra</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <div class=\"photo-thumbnail\">\n            <img id=\"jakarta-map\" src=\"../../assets/image/sumatra_west/sumatra_west.png\" />\n            <!-- regions -->\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/sumatra-west-details/sumatra-west-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/sumatra-west-details/sumatra-west-details.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: white;\n  --ion-color-base: transparent !important; }\n\nion-title {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcGVycm9uZS9Eb2N1bWVudHMvU1VQU0kvUHJvZ2V0dG9fRGlwbG9tYS9iYXRpay1tb2JpbGUtYXBwL2lXYXJlQmF0aWsvc3JjL2FwcC9zdW1hdHJhLXdlc3QtZGV0YWlscy9zdW1hdHJhLXdlc3QtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBYTtFQUNiLHdDQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL3N1bWF0cmEtd2VzdC1kZXRhaWxzL3N1bWF0cmEtd2VzdC1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IGJsYWNrO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/sumatra-west-details/sumatra-west-details.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/sumatra-west-details/sumatra-west-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: SumatraWestDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumatraWestDetailsPage", function() { return SumatraWestDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-modal/image-modal.page */ "./src/app/image-modal/image-modal.page.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");





var SumatraWestDetailsPage = /** @class */ (function () {
    function SumatraWestDetailsPage(modalController, screenOrientation) {
        this.modalController = modalController;
        this.screenOrientation = screenOrientation;
        this.sliderOpts = {
            zoom: false,
            slidesPerView: 1.5,
            centeredSlides: false,
            spaceBetween: 20
        };
        this.images = ['sumatra_west/batik/batik1', 'sumatra_west/batik/batik2', 'sumatra_west/batik/batik3'];
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    SumatraWestDetailsPage.prototype.openPreview = function (img) {
        this.modalController.create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_3__["ImageModalPage"],
            componentProps: {
                img: img
            }
        }).then(function (modal) { return modal.present(); });
    };
    SumatraWestDetailsPage.prototype.ngOnInit = function () {
    };
    SumatraWestDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sumatra-west-details',
            template: __webpack_require__(/*! ./sumatra-west-details.page.html */ "./src/app/sumatra-west-details/sumatra-west-details.page.html"),
            styles: [__webpack_require__(/*! ./sumatra-west-details.page.scss */ "./src/app/sumatra-west-details/sumatra-west-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"]])
    ], SumatraWestDetailsPage);
    return SumatraWestDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=sumatra-west-details-sumatra-west-details-module.js.map