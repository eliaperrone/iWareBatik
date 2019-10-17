(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["regions-sumut-details-sumut-details-module"],{

/***/ "./src/app/regions/sumut-details/sumut-details.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/regions/sumut-details/sumut-details.module.ts ***!
  \***************************************************************/
/*! exports provided: SumutDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumutDetailsPageModule", function() { return SumutDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sumut_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sumut-details.page */ "./src/app/regions/sumut-details/sumut-details.page.ts");
/* harmony import */ var ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pinch-zoom */ "./node_modules/ngx-pinch-zoom/fesm5/ngx-pinch-zoom.js");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");










var routes = [
    {
        path: '',
        component: _sumut_details_page__WEBPACK_IMPORTED_MODULE_6__["SumutDetailsPage"]
    }
];
var SumutDetailsPageModule = /** @class */ (function () {
    function SumutDetailsPageModule() {
    }
    SumutDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                ngx_pinch_zoom__WEBPACK_IMPORTED_MODULE_7__["PinchZoomModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sumut_details_page__WEBPACK_IMPORTED_MODULE_6__["SumutDetailsPage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_9__["ScreenOrientation"], _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_8__["InAppBrowser"]]
        })
    ], SumutDetailsPageModule);
    return SumutDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/regions/sumut-details/sumut-details.page.html":
/*!***************************************************************!*\
  !*** ./src/app/regions/sumut-details/sumut-details.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>North Sumatra</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" style=\"color: black;\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <div *ngFor=\"let descriptions of description$\">\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>About</ion-card-subtitle>\n        <ion-card-title [innerHTML]=\"descriptions.title.rendered\"></ion-card-title>\n      </ion-card-header>\n      <ion-card-content [innerHTML]=\"descriptions.content.rendered\">\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Landscape</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-slides [options]=\"sliderOpts\">\n          <!-- numero di immagini da definire -->\n          <ion-slide\n            *ngFor=\"let img of [descriptions.image_region_1,descriptions.image_region_2,descriptions.image_region_3,descriptions.image_region_4,descriptions.image_region_5,descriptions.image_region_6,descriptions.image_region_7,descriptions.image_region_8,descriptions.image_region_9,descriptions.image_region_10]\">\n            <img [src]=\"img.guid\" tappable (click)=\"openPreview(img.guid, img.post_title, img.post_content)\" />\n          </ion-slide>\n        </ion-slides>\n        <ion-icon class=\"arrow\" id=\"back-arrow\" name=\"ios-arrow-round-back\"></ion-icon>\n        <ion-icon class=\"arrow\" id=\"forward-arrow\" name=\"ios-arrow-round-forward\"></ion-icon>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Batik</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-slides [options]=\"sliderOpts\">\n          <!-- numero di immagini da definire -->\n          <ion-slide\n            *ngFor=\"let img of [descriptions.image_batik_1,descriptions.image_batik_2,descriptions.image_batik_3,descriptions.image_batik_4,descriptions.image_batik_5,descriptions.image_batik_6,descriptions.image_batik_7,descriptions.image_batik_8,descriptions.image_batik_9,descriptions.image_batik_10,descriptions.image_batik_11,descriptions.image_batik_12,descriptions.image_batik_13]\">\n            <img [src]=\"img[0].image.guid\" tappable (click)=\"openPreview(img[0].image.guid, img[0].post_title, img[0].post_content)\" />\n          </ion-slide>\n        </ion-slides>\n        <ion-icon class=\"arrow\" id=\"back-arrow\" name=\"ios-arrow-round-back\"></ion-icon>\n        <ion-icon class=\"arrow\" id=\"forward-arrow\" name=\"ios-arrow-round-forward\"></ion-icon>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Map</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n        <div class=\"photo-thumbnail\">\n          <pinch-zoom>\n            <img id=\"bali-map\" [src]=\"descriptions.image_region_map.guid\" />\n          </pinch-zoom>\n        </div>\n      </ion-card-content>\n    </ion-card>\n\n    <ion-card>\n      <ion-card-header>\n        <ion-card-subtitle>Cities</ion-card-subtitle>\n      </ion-card-header>\n      <ion-card-content>\n\n        <ion-list>\n\n          <ion-item>\n            <ion-row>\n              <ion-col size=\"10\">\n                <h1 [innerHTML]=\"descriptions.city_1\"></h1>\n              </ion-col>\n              <ion-col size=\"2\">\n                <ion-icon name=\"ios-arrow-dropright\"></ion-icon>\n              </ion-col>\n            </ion-row>\n          </ion-item>\n\n        </ion-list>\n\n      </ion-card-content>\n    </ion-card>\n\n  </div>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/regions/sumut-details/sumut-details.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/regions/sumut-details/sumut-details.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: white;\n  --ion-color-base: transparent !important; }\n\nion-title {\n  color: black; }\n\nion-icon {\n  width: 30px;\n  height: 30px;\n  margin-left: 50px; }\n\n.photo-thumbnail {\n  position: relative;\n  display: inline-block; }\n\nion-button {\n  --background: #2a5a54;\n  --background-activated: green; }\n\nion-slides {\n  margin-top: 1%;\n  background: white; }\n\nion-slides img {\n    padding-top: 5px;\n    padding-bottom: 10px; }\n\n.arrow {\n  width: 30px;\n  height: 30px;\n  color: #2a5a54; }\n\n#forward-arrow {\n  margin-left: 73%; }\n\n#back-arrow {\n  margin-left: 2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcGVycm9uZS9Eb2N1bWVudHMvU1VQU0kvUHJvZ2V0dG9fRGlwbG9tYS9iYXRpay1tb2JpbGUtYXBwL2lXYXJlQmF0aWsvc3JjL2FwcC9yZWdpb25zL3N1bXV0LWRldGFpbHMvc3VtdXQtZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBYTtFQUNiLHdDQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLHFCQUFhO0VBQ2IsNkJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsY0FBYztFQUNkLGlCQUFpQixFQUFBOztBQUZuQjtJQUtJLGdCQUFnQjtJQUNoQixvQkFBb0IsRUFBQTs7QUFJeEI7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxlQUFlLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9yZWdpb25zL3N1bXV0LWRldGFpbHMvc3VtdXQtZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICB9XG4gIFxuICBpb24tdGl0bGUge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxuICBcbiAgaW9uLWljb24ge1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcbiAgfVxuICBcbiAgLnBob3RvLXRodW1ibmFpbCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICBcbiAgaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjMmE1YTU0O1xuICAgIC0tYmFja2dyb3VuZC1hY3RpdmF0ZWQ6IGdyZWVuO1xuICB9XG4gIFxuICBpb24tc2xpZGVzIHtcbiAgICBtYXJnaW4tdG9wOiAxJTtcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgXG4gICAgaW1nIHtcbiAgICAgIHBhZGRpbmctdG9wOiA1cHg7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgICB9XG4gIH1cbiAgXG4gIC5hcnJvdyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiAjMmE1YTU0O1xuICB9XG4gIFxuICAjZm9yd2FyZC1hcnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDczJTtcbiAgfVxuICBcbiAgI2JhY2stYXJyb3cge1xuICAgIG1hcmdpbi1sZWZ0OiAyJTtcbiAgfVxuICAiXX0= */"

/***/ }),

/***/ "./src/app/regions/sumut-details/sumut-details.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/regions/sumut-details/sumut-details.page.ts ***!
  \*************************************************************/
/*! exports provided: SumutDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SumutDetailsPage", function() { return SumutDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../image-modal/image-modal.page */ "./src/app/image-modal/image-modal.page.ts");
/* harmony import */ var src_app_indonesian_map_indonesian_map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/indonesian-map/indonesian-map.page */ "./src/app/indonesian-map/indonesian-map.page.ts");
/* harmony import */ var src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");










var SumutDetailsPage = /** @class */ (function () {
    function SumutDetailsPage(statusBar, screenOrientation, modalController, alertController, dataService, loadingController) {
        this.statusBar = statusBar;
        this.screenOrientation = screenOrientation;
        this.modalController = modalController;
        this.alertController = alertController;
        this.dataService = dataService;
        this.loadingController = loadingController;
        this.sliderOpts = {
            zoom: false,
            slidesPerView: 1,
            centeredSlides: false,
            spaceBetween: 20
        };
        this.statusBar.styleDefault();
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
    }
    SumutDetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_8__["from"])(this.presentLoading()).subscribe(function () {
            _this.dataService.getNorthSumatraDescription().subscribe(function (descriptions) { return _this.description$ = descriptions; }, function (error) { return _this.presentAlertInternet(); }, function () { return _this.loadingController.dismiss(); });
        });
    };
    SumutDetailsPage.prototype.presentLoading = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var loadingElement;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadingController.create({
                            spinner: 'dots'
                        })];
                    case 1:
                        loadingElement = _a.sent();
                        return [4 /*yield*/, loadingElement.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    SumutDetailsPage.prototype.presentAlertInternet = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Please check your internet connection.',
                            message: 'The app tried to retrieve data from the website but failed. Make sure you have an internet connection',
                            buttons: [
                                {
                                    text: 'Ok',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SumutDetailsPage.prototype.presentAlertConfirm = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alert;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Please if you want to see the image you have to accept copyright request.',
                            message: 'The informations in this application is protected and managed by UNESCO so it\'s treatment is strictly reserved. If you \'Agree\' you are responsible for the forbidden sharing.',
                            buttons: [
                                {
                                    text: 'Disagree',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: function () {
                                        src_app_indonesian_map_indonesian_map_page__WEBPACK_IMPORTED_MODULE_6__["IndonesianMapPage"].isCopyrightAccepted = false;
                                    }
                                }, {
                                    text: 'Agree',
                                    handler: function () {
                                        src_app_indonesian_map_indonesian_map_page__WEBPACK_IMPORTED_MODULE_6__["IndonesianMapPage"].isCopyrightAccepted = true;
                                    }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SumutDetailsPage.prototype.openPreview = function (img, title, description) {
        if (!src_app_indonesian_map_indonesian_map_page__WEBPACK_IMPORTED_MODULE_6__["IndonesianMapPage"].isAlreadyOpen || !src_app_indonesian_map_indonesian_map_page__WEBPACK_IMPORTED_MODULE_6__["IndonesianMapPage"].isCopyrightAccepted) {
            this.presentAlertConfirm();
            src_app_indonesian_map_indonesian_map_page__WEBPACK_IMPORTED_MODULE_6__["IndonesianMapPage"].isAlreadyOpen = true;
        }
        if (src_app_indonesian_map_indonesian_map_page__WEBPACK_IMPORTED_MODULE_6__["IndonesianMapPage"].isCopyrightAccepted) {
            this.modalController.create({
                component: _image_modal_image_modal_page__WEBPACK_IMPORTED_MODULE_5__["ImageModalPage"],
                componentProps: {
                    img: img,
                    title: title,
                    description: description
                }
            }).then(function (modal) { return modal.present(); });
        }
    };
    SumutDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sumut-details',
            template: __webpack_require__(/*! ./sumut-details.page.html */ "./src/app/regions/sumut-details/sumut-details.page.html"),
            styles: [__webpack_require__(/*! ./sumut-details.page.scss */ "./src/app/regions/sumut-details/sumut-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"],
            src_app_service_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]])
    ], SumutDetailsPage);
    return SumutDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=regions-sumut-details-sumut-details-module.js.map