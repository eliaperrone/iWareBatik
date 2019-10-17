(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~indonesian-map-indonesian-map-module~regions-bali-details-bali-details-module~regions-jakart~e5936354"],{

/***/ "./src/app/indonesian-map/indonesian-map.page.html":
/*!*********************************************************!*\
  !*** ./src/app/indonesian-map/indonesian-map.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Discover Batik Regions</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" style=\"color: black;\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <div class=\"photo-thumbnail\">\n    <pinch-zoom>\n      <img src=\"../../assets/image/indonesian_map.png\"/>\n\n      <ion-icon (click)=\"presentPopoverAceh($event)\" id=\"pin1\" name=\"pin\" color=\"danger\"></ion-icon>\n\n      <ion-icon (click)=\"presentPopoverSumatraWest($event)\" id=\"pin2\" name=\"pin\" color=\"danger\"></ion-icon>\n\n      <ion-icon id=\"pin3\" name=\"pin\" color=\"danger\"></ion-icon>\n      <ion-icon id=\"pin4\" name=\"pin\" color=\"danger\"></ion-icon>\n      <ion-icon id=\"pin5\" name=\"pin\" color=\"danger\"></ion-icon>\n      <ion-icon id=\"pin6\" name=\"pin\" color=\"danger\"></ion-icon>\n\n      <ion-icon (click)=\"presentPopoverJakarta($event)\" id=\"pin7\" name=\"pin\" color=\"danger\"></ion-icon>\n\n      <ion-icon id=\"pin8\" name=\"pin\" color=\"danger\"></ion-icon>\n      <ion-icon id=\"pin9\" name=\"pin\" color=\"danger\"></ion-icon>\n      <ion-icon id=\"pin10\" name=\"pin\" color=\"danger\"></ion-icon>\n      <ion-icon id=\"pin11\" name=\"pin\" color=\"danger\"></ion-icon>\n\n      <ion-icon (click)=\"presentPopoverBali($event)\" id=\"pin12\" name=\"pin\" color=\"danger\"></ion-icon>\n\n      <ion-icon id=\"pin13\" name=\"pin\" color=\"danger\"></ion-icon>\n      <ion-icon id=\"pin14\" name=\"pin\" color=\"danger\"></ion-icon>\n      <ion-icon id=\"pin15\" name=\"pin\" color=\"danger\"></ion-icon>\n      <ion-icon id=\"pin16\" name=\"pin\" color=\"danger\"></ion-icon>\n      <ion-icon id=\"pin17\" name=\"pin\" color=\"danger\"></ion-icon>\n      <ion-icon id=\"pin18\" name=\"pin\" color=\"danger\"></ion-icon>\n      <ion-icon id=\"pin19\" name=\"pin\" color=\"danger\"></ion-icon>\n      <ion-icon id=\"pin20\" name=\"pin\" color=\"danger\"></ion-icon>\n      <ion-icon id=\"pin21\" name=\"pin\" color=\"danger\"></ion-icon>\n\n    </pinch-zoom>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/indonesian-map/indonesian-map.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/indonesian-map/indonesian-map.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".photo-thumbnail {\n  position: relative;\n  display: inline-block; }\n\n#pin1 {\n  position: absolute;\n  top: 8%;\n  left: 4%; }\n\n#pin2 {\n  position: absolute;\n  top: 34%;\n  left: 11.5%; }\n\n#pin3 {\n  position: absolute;\n  top: 42%;\n  left: 17%; }\n\n#pin4 {\n  position: absolute;\n  top: 50%;\n  left: 15.5%; }\n\n#pin5 {\n  position: absolute;\n  top: 58.5%;\n  left: 22%; }\n\n#pin6 {\n  position: absolute;\n  top: 68%;\n  left: 23.5%; }\n\n#pin7 {\n  position: absolute;\n  top: 65.8%;\n  left: 25.3%; }\n\n#pin8 {\n  position: absolute;\n  top: 70%;\n  left: 27%; }\n\n#pin9 {\n  position: absolute;\n  top: 73%;\n  left: 31%; }\n\n#pin10 {\n  position: absolute;\n  top: 75%;\n  left: 33%; }\n\n#pin11 {\n  position: absolute;\n  top: 75%;\n  left: 37%; }\n\n#pin12 {\n  position: absolute;\n  top: 77%;\n  left: 43%; }\n\n#pin13 {\n  position: absolute;\n  top: 34%;\n  left: 35%; }\n\n#pin14 {\n  position: absolute;\n  top: 32%;\n  left: 46%; }\n\n#pin15 {\n  position: absolute;\n  top: 50%;\n  left: 43%; }\n\n#pin16 {\n  position: absolute;\n  top: 14%;\n  left: 23%; }\n\n#pin17 {\n  position: absolute;\n  top: 58%;\n  left: 53.2%; }\n\n#pin18 {\n  position: absolute;\n  top: 40%;\n  left: 65%; }\n\n#pin19 {\n  position: absolute;\n  top: 28%;\n  left: 70%; }\n\n#pin20 {\n  position: absolute;\n  top: 41%;\n  left: 81%; }\n\n#pin21 {\n  position: absolute;\n  top: 52%;\n  left: 90%; }\n\nion-toolbar {\n  --background: white;\n  --ion-color-base: transparent !important; }\n\nion-title {\n  color: black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcGVycm9uZS9Eb2N1bWVudHMvU1VQU0kvUHJvZ2V0dG9fRGlwbG9tYS9iYXRpay1tb2JpbGUtYXBwL2lXYXJlQmF0aWsvc3JjL2FwcC9pbmRvbmVzaWFuLW1hcC9pbmRvbmVzaWFuLW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCLEVBQUE7O0FBR3hCO0VBQ0csa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRLEVBQUE7O0FBR1Y7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUdYO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBR2I7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUdYO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTLEVBQUE7O0FBR1g7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUdYO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTLEVBQUE7O0FBR1g7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUdYO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTLEVBQUE7O0FBR1g7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUdYO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTLEVBQUE7O0FBR1g7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFHWDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUdiO0VBQ0ksbUJBQWE7RUFDYix3Q0FBaUIsRUFBQTs7QUFHckI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9pbmRvbmVzaWFuLW1hcC9pbmRvbmVzaWFuLW1hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGhvdG8tdGh1bWJuYWlsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB9XG5cbiAjcGluMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogOCU7XG4gICAgbGVmdDogNCU7XG4gIH1cblxuICAjcGluMiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzQlO1xuICAgIGxlZnQ6IDExLjUlO1xuICB9XG5cbiAgI3BpbjMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQyJTtcbiAgICBsZWZ0OiAxNyU7XG4gIH1cblxuICAjcGluNCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDE1LjUlO1xuICB9XG5cbiAgI3BpbjUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDU4LjUlO1xuICAgIGxlZnQ6IDIyJTtcbiAgfVxuXG4gICNwaW42IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA2OCU7XG4gICAgbGVmdDogMjMuNSU7XG4gIH1cblxuICAjcGluNyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNjUuOCU7XG4gICAgbGVmdDogMjUuMyU7XG4gIH1cblxuICAjcGluOCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNzAlO1xuICAgIGxlZnQ6IDI3JTtcbiAgfVxuXG4gICNwaW45IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3MyU7XG4gICAgbGVmdDogMzElO1xuICB9XG5cbiAgI3BpbjEwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3NSU7XG4gICAgbGVmdDogMzMlO1xuICB9XG5cbiAgI3BpbjExIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3NSU7XG4gICAgbGVmdDogMzclO1xuICB9XG5cbiAgI3BpbjEyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA3NyU7XG4gICAgbGVmdDogNDMlO1xuICB9XG5cbiAgI3BpbjEzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzNCU7XG4gICAgbGVmdDogMzUlO1xuICB9XG5cbiAgI3BpbjE0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMiU7XG4gICAgbGVmdDogNDYlO1xuICB9XG5cbiAgI3BpbjE1IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNDMlO1xuICB9XG5cbiAgI3BpbjE2IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNCU7XG4gICAgbGVmdDogMjMlO1xuICB9XG5cbiAgI3BpbjE3IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1OCU7XG4gICAgbGVmdDogNTMuMiU7XG4gIH1cblxuICAjcGluMTgge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQwJTtcbiAgICBsZWZ0OiA2NSU7XG4gIH1cblxuICAjcGluMTkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDI4JTtcbiAgICBsZWZ0OiA3MCU7XG4gIH1cblxuICAjcGluMjAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDQxJTtcbiAgICBsZWZ0OiA4MSU7XG4gIH1cblxuICAjcGluMjEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUyJTtcbiAgICBsZWZ0OiA5MCU7XG4gIH1cblxuaW9uLXRvb2xiYXIge1xuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgLS1pb24tY29sb3ItYmFzZTogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/indonesian-map/indonesian-map.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/indonesian-map/indonesian-map.page.ts ***!
  \*******************************************************/
/*! exports provided: IndonesianMapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndonesianMapPage", function() { return IndonesianMapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _popover_popover_bali_popover_bali_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popover/popover-bali/popover-bali.component */ "./src/app/popover/popover-bali/popover-bali.component.ts");
/* harmony import */ var _popover_popover_aceh_popover_aceh_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../popover/popover-aceh/popover-aceh.component */ "./src/app/popover/popover-aceh/popover-aceh.component.ts");
/* harmony import */ var _popover_popover_sumatra_west_popover_sumatra_west_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover/popover-sumatra-west/popover-sumatra-west.component */ "./src/app/popover/popover-sumatra-west/popover-sumatra-west.component.ts");
/* harmony import */ var _popover_popover_jakarta_popover_jakarta_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popover/popover-jakarta/popover-jakarta.component */ "./src/app/popover/popover-jakarta/popover-jakarta.component.ts");










var IndonesianMapPage = /** @class */ (function () {
    function IndonesianMapPage(navController, toastController, screenOrientation, statusBar, popoverController) {
        this.navController = navController;
        this.toastController = toastController;
        this.screenOrientation = screenOrientation;
        this.statusBar = statusBar;
        this.popoverController = popoverController;
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
        this.statusBar.styleDefault();
    }
    IndonesianMapPage.prototype.ngOnInit = function () {
        //
    };
    IndonesianMapPage.prototype.presentPopoverBali = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_bali_popover_bali_component__WEBPACK_IMPORTED_MODULE_5__["PopoverBaliComponent"],
                            event: event,
                            translucent: true
                            //backdropDismiss: false
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    IndonesianMapPage.prototype.presentPopoverAceh = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_aceh_popover_aceh_component__WEBPACK_IMPORTED_MODULE_6__["PopoverAcehComponent"],
                            event: event,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    IndonesianMapPage.prototype.presentPopoverSumatraWest = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_sumatra_west_popover_sumatra_west_component__WEBPACK_IMPORTED_MODULE_7__["PopoverSumatraWestComponent"],
                            event: event,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    IndonesianMapPage.prototype.presentPopoverJakarta = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_jakarta_popover_jakarta_component__WEBPACK_IMPORTED_MODULE_8__["PopoverJakartaComponent"],
                            event: event,
                            translucent: true
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    IndonesianMapPage.isAlreadyOpen = false;
    IndonesianMapPage.isCopyrightAccepted = false;
    IndonesianMapPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-indonesian-map',
            template: __webpack_require__(/*! ./indonesian-map.page.html */ "./src/app/indonesian-map/indonesian-map.page.html"),
            styles: [__webpack_require__(/*! ./indonesian-map.page.scss */ "./src/app/indonesian-map/indonesian-map.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_2__["ScreenOrientation"],
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__["StatusBar"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], IndonesianMapPage);
    return IndonesianMapPage;
}());



/***/ })

}]);
//# sourceMappingURL=default~indonesian-map-indonesian-map-module~regions-bali-details-bali-details-module~regions-jakart~e5936354.js.map