(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["regions-denpasar-details-denpasar-details-module"],{

/***/ "./src/app/regions/denpasar-details/denpasar-details.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/regions/denpasar-details/denpasar-details.module.ts ***!
  \*********************************************************************/
/*! exports provided: DenpasarDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenpasarDetailsPageModule", function() { return DenpasarDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _denpasar_details_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./denpasar-details.page */ "./src/app/regions/denpasar-details/denpasar-details.page.ts");








var routes = [
    {
        path: '',
        component: _denpasar_details_page__WEBPACK_IMPORTED_MODULE_7__["DenpasarDetailsPage"]
    }
];
var DenpasarDetailsPageModule = /** @class */ (function () {
    function DenpasarDetailsPageModule() {
    }
    DenpasarDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_denpasar_details_page__WEBPACK_IMPORTED_MODULE_7__["DenpasarDetailsPage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_5__["ScreenOrientation"]]
        })
    ], DenpasarDetailsPageModule);
    return DenpasarDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/regions/denpasar-details/denpasar-details.page.html":
/*!*********************************************************************!*\
  !*** ./src/app/regions/denpasar-details/denpasar-details.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n      <ion-title>Denpasar</ion-title>\n      <ion-buttons slot=\"start\">\n        <ion-menu-button autoHide=\"false\" style=\"color: black;\"></ion-menu-button>\n      </ion-buttons>\n    </ion-toolbar>\n  </ion-header>\n\n<ion-content fullscreen>\n\n    <ion-card>\n        <ion-card-header>\n          <ion-card-subtitle>Description</ion-card-subtitle>\n          <ion-card-title>Denpasar</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            Denpasar (Indonesian pronunciation: [denˈpasar]) is the capital of Bali and the main gateway to the island. \n            The city is also a hub for other cities in the Lesser Sunda Islands. With the rapid growth of the tourism industry in Bali, \n            Denpasar has encouraged and promoted business activities and ventures, contributing to it having the highest growth rate \n            in Bali Province. The population of Denpasar was 897,300 in 2017, up from 788,445 at the 2010 Census. The surrounding metropolitan \n            area ...\n        </ion-card-content>\n        <ion-row class=\"cardfooter\">\n            <ion-col>\n                <ion-button href=\"https://en.wikipedia.org/wiki/Denpasar\">Read More</ion-button>\n            </ion-col>\n          </ion-row>\n      </ion-card>\n\n      <ion-card>\n          <ion-card-header>\n            <ion-card-subtitle>Example</ion-card-subtitle>\n            <ion-card-title>Image of Denpasar</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n              <ion-slides [options]=\"sliderOpts\">\n                  <ion-slide *ngFor=\"let img of images\">\n                     <img src=\"../../assets/image/{{img}}.jpg\" tappable (click)=\"openPreview(img)\"/>\n                  </ion-slide>\n               </ion-slides>\n          </ion-card-content>\n        </ion-card>\n\n        <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle>Booking</ion-card-subtitle>\n              <ion-card-title>How to get there</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n              <ion-button href=\"https://www.booking.com/hotel/id/b-bali.it.html?aid=303945;label=denpasar-lFz2DFXV%2AYBOpuTbX94j5wS151851640055%3Apl%3Ata%3Ap1145%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-285284110246%3Akwd-628607825%3Alp1003174%3Ali%3Adec%3Adm;sid=f61d285ee5f56266b7d52df622d9f366;seo_src=hotel_name\"> Hotel Bali & Spa</ion-button>\n            </ion-card-content>\n          </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/regions/denpasar-details/denpasar-details.page.scss":
/*!*********************************************************************!*\
  !*** ./src/app/regions/denpasar-details/denpasar-details.page.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: white;\n  --ion-color-base: transparent !important; }\n\nion-title {\n  color: black; }\n\nion-button {\n  --background: #6F8096;\n  --background-activated: #6F8096; }\n\nion-slides {\n  margin-top: 1%;\n  background: white; }\n\nion-slides img {\n    padding-top: 20px;\n    padding-bottom: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcGVycm9uZS9Eb2N1bWVudHMvU1VQU0kvUHJvZ2V0dG9fRGlwbG9tYS9iYXRpay1tb2JpbGUtYXBwL2lXYXJlQmF0aWsvc3JjL2FwcC9yZWdpb25zL2RlbnBhc2FyLWRldGFpbHMvZGVucGFzYXItZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBYTtFQUNiLHdDQUFpQixFQUFBOztBQUdyQjtFQUNJLFlBQVksRUFBQTs7QUFHaEI7RUFDSSxxQkFBYTtFQUNiLCtCQUF1QixFQUFBOztBQUczQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUIsRUFBQTs7QUFGckI7SUFLUSxpQkFBaUI7SUFDakIsb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpb25zL2RlbnBhc2FyLWRldGFpbHMvZGVucGFzYXItZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGUge1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWJ1dHRvbntcbiAgICAtLWJhY2tncm91bmQ6ICM2RjgwOTY7XG4gICAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzZGODA5Njtcbn1cblxuaW9uLXNsaWRlcyB7XG4gICAgbWFyZ2luLXRvcDogMSU7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG5cbiAgICBpbWcge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/regions/denpasar-details/denpasar-details.page.ts":
/*!*******************************************************************!*\
  !*** ./src/app/regions/denpasar-details/denpasar-details.page.ts ***!
  \*******************************************************************/
/*! exports provided: DenpasarDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DenpasarDetailsPage", function() { return DenpasarDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../image-modal/image-modal.page */ "./src/app/image-modal/image-modal.page.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");





var DenpasarDetailsPage = /** @class */ (function () {
    function DenpasarDetailsPage(navController, modalController, screenOrientation) {
        this.navController = navController;
        this.modalController = modalController;
        this.screenOrientation = screenOrientation;
        this.images = ['bali/regions/denpasar/denpasar1', 'bali/regions/denpasar/denpasar2', 'bali/regions/denpasar/denpasar3'];
        this.sliderOpts = {
            zoom: false,
            slidesPerView: 1.5,
            centeredSlides: false,
            spaceBetween: 20
        };
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT_PRIMARY);
    }
    DenpasarDetailsPage.prototype.ngOnInit = function () {
        //
    };
    DenpasarDetailsPage.prototype.openPreview = function (img) {
        this.modalController.create({
            component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_3__["ImageModalPage"],
            componentProps: {
                img: img
            }
        }).then(function (modal) { return modal.present(); });
    };
    DenpasarDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-denpasar-details',
            template: __webpack_require__(/*! ./denpasar-details.page.html */ "./src/app/regions/denpasar-details/denpasar-details.page.html"),
            styles: [__webpack_require__(/*! ./denpasar-details.page.scss */ "./src/app/regions/denpasar-details/denpasar-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_4__["ScreenOrientation"]])
    ], DenpasarDetailsPage);
    return DenpasarDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=regions-denpasar-details-denpasar-details-module.js.map