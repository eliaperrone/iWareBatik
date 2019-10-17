(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jakarta-details-jakarta-details-module"],{

/***/ "./src/app/jakarta-details/jakarta-details.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/jakarta-details/jakarta-details.module.ts ***!
  \***********************************************************/
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
/* harmony import */ var _jakarta_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jakarta-details.page */ "./src/app/jakarta-details/jakarta-details.page.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");








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
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_jakarta_details_page__WEBPACK_IMPORTED_MODULE_6__["JakartaDetailsPage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"]]
        })
    ], JakartaDetailsPageModule);
    return JakartaDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/jakarta-details/jakarta-details.page.html":
/*!***********************************************************!*\
  !*** ./src/app/jakarta-details/jakarta-details.page.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>Jakarta</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\" style=\"color: black;\"></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content fullscreen>\n\n    <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Description</ion-card-subtitle>\n          <ion-card-title>Jakarta</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            Jakarta (/dʒəˈkɑːrtə/; Indonesian pronunciation: [dʒaˈkarta]), officially the Special Capital Region of Jakarta \n            (Indonesian: Daerah Khusus Ibukota Jakarta), is the current capital and largest city of Indonesia. Located on the \n            northwest coast of the world's most populous island, Java, it is the centre of economics, culture and politics of \n            Indonesia, with a population of 10,075,310 as of 2014.[7][9] Jakarta metropolitan area has an area of 6,392 square \n            kilometers, which is known as Jabodetabek (an acronym of Jakarta, Bogor, Depok, Tangerang and Bekasi). It is the world's \n            second largest urban agglomeration (after Tokyo) with a population of 30,214,303 as of 2010.[10] Jakarta is predicted \n            to reach...\n        </ion-card-content>\n        <ion-row class=\"cardfooter\">\n          <ion-col>\n            <ion-button href=\"https://en.wikipedia.org/wiki/Jakarta\">Read More</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-card>\n    \n      <ion-card> \n        <ion-card-header>\n          <ion-card-subtitle>Example</ion-card-subtitle>\n          <ion-card-title>Batik of Jakarta</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <ion-slides [options]=\"sliderOpts\">\n             <ion-slide *ngFor=\"let img of images\">\n                <img src=\"../../assets/image/{{img}}.jpg\" tappable (click)=\"openPreview(img)\"/>\n             </ion-slide>\n          </ion-slides>\n        </ion-card-content>\n      </ion-card>\n    \n      <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Regions</ion-card-subtitle>\n          <ion-card-title>Map of Jakarta</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n          <div class=\"photo-thumbnail\">\n            <img id=\"jakarta-map\" src=\"../../assets/image/jakarta/jakarta.png\" />\n            <!-- regions -->\n          </div>\n        </ion-card-content>\n      </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/jakarta-details/jakarta-details.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/jakarta-details/jakarta-details.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: white;\n  --ion-color-base: transparent !important; }\n\nion-title {\n  color: black; }\n\nion-slides {\n  margin-top: 1%;\n  background: white; }\n\nion-slides img {\n    padding-top: 20px;\n    padding-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcGVycm9uZS9Eb2N1bWVudHMvU1VQU0kvUHJvZ2V0dG9fRGlwbG9tYS9iYXRpay1tb2JpbGUtYXBwL2lXYXJlQmF0aWsvc3JjL2FwcC9qYWthcnRhLWRldGFpbHMvamFrYXJ0YS1kZXRhaWxzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFhO0VBQ2Isd0NBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksWUFBWSxFQUFBOztBQUdoQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFGckI7SUFLUSxpQkFBaUI7SUFDakIsb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9qYWthcnRhLWRldGFpbHMvamFrYXJ0YS1kZXRhaWxzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10b29sYmFyIHtcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAgIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcblxuICAgIGltZyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/jakarta-details/jakarta-details.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/jakarta-details/jakarta-details.page.ts ***!
  \*********************************************************/
/*! exports provided: JakartaDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JakartaDetailsPage", function() { return JakartaDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../image-modal/image-modal.page */ "./src/app/image-modal/image-modal.page.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");





var JakartaDetailsPage = /** @class */ (function () {
    function JakartaDetailsPage(modalController, screenOrientation) {
        this.modalController = modalController;
        this.screenOrientation = screenOrientation;
        this.sliderOpts = {
            zoom: false,
            slidesPerView: 1.5,
            centeredSlides: false,
            spaceBetween: 20
        };
        this.images = ['jakarta/batik/batik1', 'jakarta/batik/batik2', 'jakarta/batik/batik3'];
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    JakartaDetailsPage.prototype.openPreview = function (img) {
        this.modalController.create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_3__["ImageModalPage"],
            componentProps: {
                img: img
            }
        }).then(function (modal) { return modal.present(); });
    };
    JakartaDetailsPage.prototype.ngOnInit = function () {
    };
    JakartaDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jakarta-details',
            template: __webpack_require__(/*! ./jakarta-details.page.html */ "./src/app/jakarta-details/jakarta-details.page.html"),
            styles: [__webpack_require__(/*! ./jakarta-details.page.scss */ "./src/app/jakarta-details/jakarta-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"]])
    ], JakartaDetailsPage);
    return JakartaDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=jakarta-details-jakarta-details-module.js.map