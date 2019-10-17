(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["batik-motifs-batik-motifs-module"],{

/***/ "./src/app/batik-motifs/batik-motifs.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/batik-motifs/batik-motifs.module.ts ***!
  \*****************************************************/
/*! exports provided: BatikMotifsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatikMotifsPageModule", function() { return BatikMotifsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _batik_motifs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./batik-motifs.page */ "./src/app/batik-motifs/batik-motifs.page.ts");







var routes = [
    {
        path: '',
        component: _batik_motifs_page__WEBPACK_IMPORTED_MODULE_6__["BatikMotifsPage"]
    }
];
var BatikMotifsPageModule = /** @class */ (function () {
    function BatikMotifsPageModule() {
    }
    BatikMotifsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_batik_motifs_page__WEBPACK_IMPORTED_MODULE_6__["BatikMotifsPage"]]
        })
    ], BatikMotifsPageModule);
    return BatikMotifsPageModule;
}());



/***/ }),

/***/ "./src/app/batik-motifs/batik-motifs.page.html":
/*!*****************************************************!*\
  !*** ./src/app/batik-motifs/batik-motifs.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Discover Batik</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" style=\"color: black;\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen>\n\n  <!-- searchbar and filter options -->\n  <ion-row>\n    <ion-col size=\"10\">\n      <ion-searchbar id=\"search\" [(ngModel)]=\"searchText\"></ion-searchbar>\n    </ion-col>\n    <ion-col size=\"2\" align-self-center>\n      <ion-icon name=\"options\" (click)=\"presentPopoverFilter($event)\"></ion-icon>\n    </ion-col>\n  </ion-row>\n\n  <!-- this list is dinamically take to web site -->\n  <ion-list>\n\n    <div id=\"container\" *ngFor=\"let descriptions of description$\">\n      <div id=\"container\"\n        *ngIf=\"descriptions.title.rendered.toLowerCase().startsWith(this.searchText.toLowerCase()) || this.searchText == undefined\">\n\n        <ion-item lines=\"none\">\n          <ion-card>\n            <ion-card-header>\n              <ion-card-subtitle [innerHTML]=\" descriptions.title.rendered\">\n              </ion-card-subtitle>\n            </ion-card-header>\n            <img [src]=\"descriptions.image.guid\" />\n            <ion-card-content>\n              <p [innerHTML]=\"descriptions.content.rendered\"></p>\n            </ion-card-content>\n            <ion-row class=\"cardfooter\">\n              <ion-col>\n                <ion-button expand=\"block\">Read More</ion-button>\n              </ion-col>\n            </ion-row>\n          </ion-card>\n        </ion-item>\n\n      </div>\n    </div>\n\n  </ion-list>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/batik-motifs/batik-motifs.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/batik-motifs/batik-motifs.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: white;\n  --ion-color-base: transparent !important; }\n\nion-title {\n  color: black; }\n\nion-button {\n  --background: #2a5a54;\n  --background-activated: green;\n  margin-left: 5%;\n  margin-right: 5%; }\n\nion-icon {\n  width: 30px;\n  height: 30px; }\n\nion-card {\n  margin-top: 1%; }\n\n#container {\n  margin: 0;\n  padding: 0;\n  height: 0.00001;\n  width: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcGVycm9uZS9Eb2N1bWVudHMvU1VQU0kvUHJvZ2V0dG9fRGlwbG9tYS9iYXRpay1tb2JpbGUtYXBwL2lXYXJlQmF0aWsvc3JjL2FwcC9iYXRpay1tb3RpZnMvYmF0aWstbW90aWZzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFhO0VBQ2Isd0NBQWlCLEVBQUE7O0FBR25CO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0UscUJBQWE7RUFDYiw2QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYmF0aWstbW90aWZzL2JhdGlrLW1vdGlmcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIC0taW9uLWNvbG9yLWJhc2U6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG5cbmlvbi10aXRsZSB7XG4gIGNvbG9yOiBibGFjaztcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIC0tYmFja2dyb3VuZDogIzJhNWE1NDtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogZ3JlZW47XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cblxuaW9uLWljb24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xufVxuXG5pb24tY2FyZCB7XG4gIG1hcmdpbi10b3A6IDElO1xufVxuXG4jY29udGFpbmVyIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDAuMDAwMDE7XG4gIHdpZHRoOiBhdXRvO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/batik-motifs/batik-motifs.page.ts":
/*!***************************************************!*\
  !*** ./src/app/batik-motifs/batik-motifs.page.ts ***!
  \***************************************************/
/*! exports provided: BatikMotifsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BatikMotifsPage", function() { return BatikMotifsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/data.service */ "./src/app/service/data.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _popover_popover_filter_popover_filter_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../popover/popover-filter/popover-filter.component */ "./src/app/popover/popover-filter/popover-filter.component.ts");






var BatikMotifsPage = /** @class */ (function () {
    function BatikMotifsPage(dataService, loadingController, alertController, popoverController) {
        this.dataService = dataService;
        this.loadingController = loadingController;
        this.alertController = alertController;
        this.popoverController = popoverController;
        this.searchText = '';
        //
    }
    BatikMotifsPage.prototype.ngOnInit = function () {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(this.presentLoading()).subscribe(function () {
            _this.dataService.getDescription().subscribe(function (descriptions) { return _this.description$ = descriptions; }, function (error) { return _this.presentAlertInternet(); }, function () { return _this.loadingController.dismiss(); });
        });
    };
    BatikMotifsPage.prototype.presentLoading = function () {
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
    BatikMotifsPage.prototype.presentAlertInternet = function () {
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
    // Aceh
    BatikMotifsPage.prototype.presentPopoverFilter = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_filter_popover_filter_component__WEBPACK_IMPORTED_MODULE_5__["PopoverFilterComponent"],
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
    BatikMotifsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-batik-motifs',
            template: __webpack_require__(/*! ./batik-motifs.page.html */ "./src/app/batik-motifs/batik-motifs.page.html"),
            styles: [__webpack_require__(/*! ./batik-motifs.page.scss */ "./src/app/batik-motifs/batik-motifs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["LoadingController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["PopoverController"]])
    ], BatikMotifsPage);
    return BatikMotifsPage;
}());



/***/ })

}]);
//# sourceMappingURL=batik-motifs-batik-motifs-module.js.map