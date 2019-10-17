(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["index-english-index-english-module"],{

/***/ "./node_modules/@ionic-native/camera/ngx/index.js":
/*!********************************************************!*\
  !*** ./node_modules/@ionic-native/camera/ngx/index.js ***!
  \********************************************************/
/*! exports provided: DestinationType, EncodingType, MediaType, PictureSourceType, PopoverArrowDirection, Direction, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinationType", function() { return DestinationType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EncodingType", function() { return EncodingType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaType", function() { return MediaType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PictureSourceType", function() { return PictureSourceType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverArrowDirection", function() { return PopoverArrowDirection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Direction", function() { return Direction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var DestinationType;
(function (DestinationType) {
    DestinationType[DestinationType["DATA_URL"] = 0] = "DATA_URL";
    DestinationType[DestinationType["FILE_URL"] = 1] = "FILE_URL";
    DestinationType[DestinationType["NATIVE_URI"] = 2] = "NATIVE_URI";
})(DestinationType || (DestinationType = {}));
var EncodingType;
(function (EncodingType) {
    EncodingType[EncodingType["JPEG"] = 0] = "JPEG";
    EncodingType[EncodingType["PNG"] = 1] = "PNG";
})(EncodingType || (EncodingType = {}));
var MediaType;
(function (MediaType) {
    MediaType[MediaType["PICTURE"] = 0] = "PICTURE";
    MediaType[MediaType["VIDEO"] = 1] = "VIDEO";
    MediaType[MediaType["ALLMEDIA"] = 2] = "ALLMEDIA";
})(MediaType || (MediaType = {}));
var PictureSourceType;
(function (PictureSourceType) {
    PictureSourceType[PictureSourceType["PHOTOLIBRARY"] = 0] = "PHOTOLIBRARY";
    PictureSourceType[PictureSourceType["CAMERA"] = 1] = "CAMERA";
    PictureSourceType[PictureSourceType["SAVEDPHOTOALBUM"] = 2] = "SAVEDPHOTOALBUM";
})(PictureSourceType || (PictureSourceType = {}));
var PopoverArrowDirection;
(function (PopoverArrowDirection) {
    PopoverArrowDirection[PopoverArrowDirection["ARROW_UP"] = 1] = "ARROW_UP";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_DOWN"] = 2] = "ARROW_DOWN";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_LEFT"] = 3] = "ARROW_LEFT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_RIGHT"] = 4] = "ARROW_RIGHT";
    PopoverArrowDirection[PopoverArrowDirection["ARROW_ANY"] = 5] = "ARROW_ANY";
})(PopoverArrowDirection || (PopoverArrowDirection = {}));
var Direction;
(function (Direction) {
    Direction[Direction["BACK"] = 0] = "BACK";
    Direction[Direction["FRONT"] = 1] = "FRONT";
})(Direction || (Direction = {}));
var Camera = /** @class */ (function (_super) {
    __extends(Camera, _super);
    function Camera() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Constant for possible destination types
         */
        _this.DestinationType = {
            /** Return base64 encoded string. DATA_URL can be very memory intensive and cause app crashes or out of memory errors. Use FILE_URI or NATIVE_URI if possible */
            DATA_URL: 0,
            /** Return file uri (content://media/external/images/media/2 for Android) */
            FILE_URI: 1,
            /** Return native uri (eg. asset-library://... for iOS) */
            NATIVE_URI: 2
        };
        /**
         * Convenience constant
         */
        _this.EncodingType = {
            /** Return JPEG encoded image */
            JPEG: 0,
            /** Return PNG encoded image */
            PNG: 1
        };
        /**
         * Convenience constant
         */
        _this.MediaType = {
            /** Allow selection of still pictures only. DEFAULT. Will return format specified via DestinationType */
            PICTURE: 0,
            /** Allow selection of video only, ONLY RETURNS URL */
            VIDEO: 1,
            /** Allow selection from all media types */
            ALLMEDIA: 2
        };
        /**
         * Convenience constant
         */
        _this.PictureSourceType = {
            /** Choose image from picture library (same as SAVEDPHOTOALBUM for Android) */
            PHOTOLIBRARY: 0,
            /** Take picture from camera */
            CAMERA: 1,
            /** Choose image from picture library (same as PHOTOLIBRARY for Android) */
            SAVEDPHOTOALBUM: 2
        };
        /**
         * Convenience constant
         */
        _this.PopoverArrowDirection = {
            ARROW_UP: 1,
            ARROW_DOWN: 2,
            ARROW_LEFT: 4,
            ARROW_RIGHT: 8,
            ARROW_ANY: 15
        };
        /**
         * Convenience constant
         */
        _this.Direction = {
            /** Use the back-facing camera */
            BACK: 0,
            /** Use the front-facing camera */
            FRONT: 1
        };
        return _this;
    }
    Camera.prototype.getPicture = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "getPicture", { "callbackOrder": "reverse" }, arguments); };
    Camera.prototype.cleanup = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "cleanup", { "platforms": ["iOS"] }, arguments); };
    Camera.pluginName = "Camera";
    Camera.plugin = "cordova-plugin-camera";
    Camera.pluginRef = "navigator.camera";
    Camera.repo = "https://github.com/apache/cordova-plugin-camera";
    Camera.platforms = ["Android", "Browser", "iOS", "Windows"];
    Camera = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], Camera);
    return Camera;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2NhbWVyYS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQXNGeEUsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qiw2REFBWSxDQUFBO0lBQ1osNkRBQVEsQ0FBQTtJQUNSLGlFQUFVLENBQUE7QUFDWixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFFRCxNQUFNLENBQU4sSUFBWSxZQUdYO0FBSEQsV0FBWSxZQUFZO0lBQ3RCLCtDQUFRLENBQUE7SUFDUiw2Q0FBRyxDQUFBO0FBQ0wsQ0FBQyxFQUhXLFlBQVksS0FBWixZQUFZLFFBR3ZCO0FBRUQsTUFBTSxDQUFOLElBQVksU0FJWDtBQUpELFdBQVksU0FBUztJQUNuQiwrQ0FBVyxDQUFBO0lBQ1gsMkNBQUssQ0FBQTtJQUNMLGlEQUFRLENBQUE7QUFDVixDQUFDLEVBSlcsU0FBUyxLQUFULFNBQVMsUUFJcEI7QUFFRCxNQUFNLENBQU4sSUFBWSxpQkFJWDtBQUpELFdBQVksaUJBQWlCO0lBQzNCLHlFQUFnQixDQUFBO0lBQ2hCLDZEQUFNLENBQUE7SUFDTiwrRUFBZSxDQUFBO0FBQ2pCLENBQUMsRUFKVyxpQkFBaUIsS0FBakIsaUJBQWlCLFFBSTVCO0FBRUQsTUFBTSxDQUFOLElBQVkscUJBTVg7QUFORCxXQUFZLHFCQUFxQjtJQUMvQix5RUFBWSxDQUFBO0lBQ1osNkVBQVUsQ0FBQTtJQUNWLDZFQUFVLENBQUE7SUFDViwrRUFBVyxDQUFBO0lBQ1gsMkVBQVMsQ0FBQTtBQUNYLENBQUMsRUFOVyxxQkFBcUIsS0FBckIscUJBQXFCLFFBTWhDO0FBRUQsTUFBTSxDQUFOLElBQVksU0FHWDtBQUhELFdBQVksU0FBUztJQUNuQix5Q0FBUSxDQUFBO0lBQ1IsMkNBQUssQ0FBQTtBQUNQLENBQUMsRUFIVyxTQUFTLEtBQVQsU0FBUyxRQUdwQjs7SUFxRDJCLDBCQUFpQjs7O1FBQzNDOztXQUVHO1FBQ0gscUJBQWUsR0FBRztZQUNoQixnS0FBZ0s7WUFDaEssUUFBUSxFQUFFLENBQUM7WUFDWCw0RUFBNEU7WUFDNUUsUUFBUSxFQUFFLENBQUM7WUFDWCwwREFBMEQ7WUFDMUQsVUFBVSxFQUFFLENBQUM7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxrQkFBWSxHQUFHO1lBQ2IsZ0NBQWdDO1lBQ2hDLElBQUksRUFBRSxDQUFDO1lBQ1AsK0JBQStCO1lBQy9CLEdBQUcsRUFBRSxDQUFDO1NBQ1AsQ0FBQztRQUVGOztXQUVHO1FBQ0gsZUFBUyxHQUFHO1lBQ1Ysd0dBQXdHO1lBQ3hHLE9BQU8sRUFBRSxDQUFDO1lBQ1Ysc0RBQXNEO1lBQ3RELEtBQUssRUFBRSxDQUFDO1lBQ1IsMkNBQTJDO1lBQzNDLFFBQVEsRUFBRSxDQUFDO1NBQ1osQ0FBQztRQUVGOztXQUVHO1FBQ0gsdUJBQWlCLEdBQUc7WUFDbEIsOEVBQThFO1lBQzlFLFlBQVksRUFBRSxDQUFDO1lBQ2YsK0JBQStCO1lBQy9CLE1BQU0sRUFBRSxDQUFDO1lBQ1QsMkVBQTJFO1lBQzNFLGVBQWUsRUFBRSxDQUFDO1NBQ25CLENBQUM7UUFFRjs7V0FFRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLFFBQVEsRUFBRSxDQUFDO1lBQ1gsVUFBVSxFQUFFLENBQUM7WUFDYixVQUFVLEVBQUUsQ0FBQztZQUNiLFdBQVcsRUFBRSxDQUFDO1lBQ2QsU0FBUyxFQUFFLEVBQUU7U0FDZCxDQUFDO1FBRUY7O1dBRUc7UUFDSCxlQUFTLEdBQUc7WUFDVixpQ0FBaUM7WUFDakMsSUFBSSxFQUFFLENBQUM7WUFDUCxrQ0FBa0M7WUFDbEMsS0FBSyxFQUFFLENBQUM7U0FDVCxDQUFDOzs7SUFVRiwyQkFBVSxhQUFDLE9BQXVCO0lBWWxDLHdCQUFPOzs7Ozs7SUF4RkksTUFBTTtRQURsQixVQUFVLEVBQUU7T0FDQSxNQUFNO2lCQTlLbkI7RUE4SzRCLGlCQUFpQjtTQUFoQyxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhT3B0aW9ucyB7XG4gIC8qKiBQaWN0dXJlIHF1YWxpdHkgaW4gcmFuZ2UgMC0xMDAuIERlZmF1bHQgaXMgNTAgKi9cbiAgcXVhbGl0eT86IG51bWJlcjtcbiAgLyoqXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkRlc3RpbmF0aW9uVHlwZS4gRGVmYXVsdCBpcyBGSUxFX1VSSS5cbiAgICogICAgICBEQVRBX1VSTCA6IDAsICAgUmV0dXJuIGltYWdlIGFzIGJhc2U2NC1lbmNvZGVkIHN0cmluZyAoREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlKSxcbiAgICogICAgICBGSUxFX1VSSSA6IDEsICAgUmV0dXJuIGltYWdlIGZpbGUgVVJJLFxuICAgKiAgICAgIE5BVElWRV9VUkkgOiAyICBSZXR1cm4gaW1hZ2UgbmF0aXZlIFVSSVxuICAgKiAgICAgICAgICAoZS5nLiwgYXNzZXRzLWxpYnJhcnk6Ly8gb24gaU9TIG9yIGNvbnRlbnQ6Ly8gb24gQW5kcm9pZClcbiAgICovXG4gIGRlc3RpbmF0aW9uVHlwZT86IG51bWJlcjtcbiAgLyoqXG4gICAqIFNldCB0aGUgc291cmNlIG9mIHRoZSBwaWN0dXJlLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS4gRGVmYXVsdCBpcyBDQU1FUkEuXG4gICAqICAgICAgUEhPVE9MSUJSQVJZIDogMCxcbiAgICogICAgICBDQU1FUkEgOiAxLFxuICAgKiAgICAgIFNBVkVEUEhPVE9BTEJVTSA6IDJcbiAgICovXG4gIHNvdXJjZVR5cGU/OiBudW1iZXI7XG4gIC8qKiBBbGxvdyBzaW1wbGUgZWRpdGluZyBvZiBpbWFnZSBiZWZvcmUgc2VsZWN0aW9uLiAqL1xuICBhbGxvd0VkaXQ/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSByZXR1cm5lZCBpbWFnZSBmaWxlJ3MgZW5jb2RpbmcuXG4gICAqIERlZmluZWQgaW4gQ2FtZXJhLkVuY29kaW5nVHlwZS4gRGVmYXVsdCBpcyBKUEVHXG4gICAqICAgICAgSlBFRyA6IDAgICAgUmV0dXJuIEpQRUcgZW5jb2RlZCBpbWFnZVxuICAgKiAgICAgIFBORyA6IDEgICAgIFJldHVybiBQTkcgZW5jb2RlZCBpbWFnZVxuICAgKi9cbiAgZW5jb2RpbmdUeXBlPzogbnVtYmVyO1xuICAvKipcbiAgICogV2lkdGggaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRIZWlnaHQuXG4gICAqIEFzcGVjdCByYXRpbyByZW1haW5zIGNvbnN0YW50LlxuICAgKi9cbiAgdGFyZ2V0V2lkdGg/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBIZWlnaHQgaW4gcGl4ZWxzIHRvIHNjYWxlIGltYWdlLiBNdXN0IGJlIHVzZWQgd2l0aCB0YXJnZXRXaWR0aC5cbiAgICogQXNwZWN0IHJhdGlvIHJlbWFpbnMgY29uc3RhbnQuXG4gICAqL1xuICB0YXJnZXRIZWlnaHQ/OiBudW1iZXI7XG4gIC8qKlxuICAgKiBTZXQgdGhlIHR5cGUgb2YgbWVkaWEgdG8gc2VsZWN0IGZyb20uIE9ubHkgd29ya3Mgd2hlbiBQaWN0dXJlU291cmNlVHlwZVxuICAgKiBpcyBQSE9UT0xJQlJBUlkgb3IgU0FWRURQSE9UT0FMQlVNLiBEZWZpbmVkIGluIENhbWVyYS5NZWRpYVR5cGVcbiAgICogICAgICBQSUNUVVJFOiAwICAgICAgYWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuXG4gICAqICAgICAgICAgIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZVxuICAgKiAgICAgIFZJREVPOiAxICAgICAgICBhbGxvdyBzZWxlY3Rpb24gb2YgdmlkZW8gb25seSwgV0lMTCBBTFdBWVMgUkVUVVJOIEZJTEVfVVJJXG4gICAqICAgICAgQUxMTUVESUEgOiAyICAgIGFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlc1xuICAgKi9cbiAgbWVkaWFUeXBlPzogbnVtYmVyO1xuICAvKiogUm90YXRlIHRoZSBpbWFnZSB0byBjb3JyZWN0IGZvciB0aGUgb3JpZW50YXRpb24gb2YgdGhlIGRldmljZSBkdXJpbmcgY2FwdHVyZS4gKi9cbiAgY29ycmVjdE9yaWVudGF0aW9uPzogYm9vbGVhbjtcbiAgLyoqIFNhdmUgdGhlIGltYWdlIHRvIHRoZSBwaG90byBhbGJ1bSBvbiB0aGUgZGV2aWNlIGFmdGVyIGNhcHR1cmUuICovXG4gIHNhdmVUb1Bob3RvQWxidW0/OiBib29sZWFuO1xuICAvKipcbiAgICogQ2hvb3NlIHRoZSBjYW1lcmEgdG8gdXNlIChmcm9udC0gb3IgYmFjay1mYWNpbmcpLlxuICAgKiBEZWZpbmVkIGluIENhbWVyYS5EaXJlY3Rpb24uIERlZmF1bHQgaXMgQkFDSy5cbiAgICogICAgICBCQUNLOiAwXG4gICAqICAgICAgRlJPTlQ6IDFcbiAgICovXG4gIGNhbWVyYURpcmVjdGlvbj86IG51bWJlcjtcbiAgLyoqIGlPUy1vbmx5IG9wdGlvbnMgdGhhdCBzcGVjaWZ5IHBvcG92ZXIgbG9jYXRpb24gaW4gaVBhZC4gRGVmaW5lZCBpbiBDYW1lcmFQb3BvdmVyT3B0aW9ucy4gKi9cbiAgcG9wb3Zlck9wdGlvbnM/OiBDYW1lcmFQb3BvdmVyT3B0aW9ucztcbn1cblxuLyoqXG4gKiBpT1Mtb25seSBwYXJhbWV0ZXJzIHRoYXQgc3BlY2lmeSB0aGUgYW5jaG9yIGVsZW1lbnQgbG9jYXRpb24gYW5kIGFycm93IGRpcmVjdGlvblxuICogb2YgdGhlIHBvcG92ZXIgd2hlbiBzZWxlY3RpbmcgaW1hZ2VzIGZyb20gYW4gaVBhZCdzIGxpYnJhcnkgb3IgYWxidW0uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUG9wb3Zlck9wdGlvbnMge1xuICB4OiBudW1iZXI7XG4gIHk6IG51bWJlcjtcbiAgd2lkdGg6IG51bWJlcjtcbiAgaGVpZ2h0OiBudW1iZXI7XG4gIC8qKlxuICAgKiBEaXJlY3Rpb24gdGhlIGFycm93IG9uIHRoZSBwb3BvdmVyIHNob3VsZCBwb2ludC4gRGVmaW5lZCBpbiBDYW1lcmEuUG9wb3ZlckFycm93RGlyZWN0aW9uXG4gICAqIE1hdGNoZXMgaU9TIFVJUG9wb3ZlckFycm93RGlyZWN0aW9uIGNvbnN0YW50cy5cbiAgICogICAgICBBUlJPV19VUCA6IDEsXG4gICAqICAgICAgQVJST1dfRE9XTiA6IDIsXG4gICAqICAgICAgQVJST1dfTEVGVCA6IDQsXG4gICAqICAgICAgQVJST1dfUklHSFQgOiA4LFxuICAgKiAgICAgIEFSUk9XX0FOWSA6IDE1XG4gICAqL1xuICBhcnJvd0RpcjogbnVtYmVyO1xufVxuXG5leHBvcnQgZW51bSBEZXN0aW5hdGlvblR5cGUge1xuICBEQVRBX1VSTCA9IDAsXG4gIEZJTEVfVVJMLFxuICBOQVRJVkVfVVJJXG59XG5cbmV4cG9ydCBlbnVtIEVuY29kaW5nVHlwZSB7XG4gIEpQRUcgPSAwLFxuICBQTkdcbn1cblxuZXhwb3J0IGVudW0gTWVkaWFUeXBlIHtcbiAgUElDVFVSRSA9IDAsXG4gIFZJREVPLFxuICBBTExNRURJQVxufVxuXG5leHBvcnQgZW51bSBQaWN0dXJlU291cmNlVHlwZSB7XG4gIFBIT1RPTElCUkFSWSA9IDAsXG4gIENBTUVSQSxcbiAgU0FWRURQSE9UT0FMQlVNXG59XG5cbmV4cG9ydCBlbnVtIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiB7XG4gIEFSUk9XX1VQID0gMSxcbiAgQVJST1dfRE9XTixcbiAgQVJST1dfTEVGVCxcbiAgQVJST1dfUklHSFQsXG4gIEFSUk9XX0FOWVxufVxuXG5leHBvcnQgZW51bSBEaXJlY3Rpb24ge1xuICBCQUNLID0gMCxcbiAgRlJPTlRcbn1cblxuLyoqXG4gKiBAbmFtZSBDYW1lcmFcbiAqIEBkZXNjcmlwdGlvblxuICogVGFrZSBhIHBob3RvIG9yIGNhcHR1cmUgdmlkZW8uXG4gKlxuICogUmVxdWlyZXMgdGhlIENvcmRvdmEgcGx1Z2luOiBgY29yZG92YS1wbHVnaW4tY2FtZXJhYC4gRm9yIG1vcmUgaW5mbywgcGxlYXNlIHNlZSB0aGUgW0NvcmRvdmEgQ2FtZXJhIFBsdWdpbiBEb2NzXShodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYSkuXG4gKlxuICogW1dhcm5pbmddIFNpbmNlIElPUyAxMCB0aGUgY2FtZXJhIHJlcXVpcmVzIHBlcm1pc3Npb25zIHRvIGJlIHBsYWNlZCBpbiB5b3VyIGNvbmZpZy54bWwgYWRkXG4gKiBgYGB4bWxcbiAqIDxjb25maWctZmlsZSBwYXJlbnQ9XCJOU0NhbWVyYVVzYWdlRGVzY3JpcHRpb25cIiBwbGF0Zm9ybT1cImlvc1wiIHRhcmdldD1cIiotSW5mby5wbGlzdFwiPlxuICogIDxzdHJpbmc+WW91IGNhbiB0YWtlIHBob3Rvczwvc3RyaW5nPlxuICogPC9jb25maWctZmlsZT5cbiAqIGBgYFxuICogaW5zaWRlIG9mIHRoZSA8cGxhdGZvcm0gbmFtZT0naW9zPiBzZWN0aW9uXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDYW1lcmEsIENhbWVyYU9wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NhbWVyYS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtZXJhOiBDYW1lcmEpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqXG4gKiBjb25zdCBvcHRpb25zOiBDYW1lcmFPcHRpb25zID0ge1xuICogICBxdWFsaXR5OiAxMDAsXG4gKiAgIGRlc3RpbmF0aW9uVHlwZTogdGhpcy5jYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLFxuICogICBlbmNvZGluZ1R5cGU6IHRoaXMuY2FtZXJhLkVuY29kaW5nVHlwZS5KUEVHLFxuICogICBtZWRpYVR5cGU6IHRoaXMuY2FtZXJhLk1lZGlhVHlwZS5QSUNUVVJFXG4gKiB9XG4gKlxuICogdGhpcy5jYW1lcmEuZ2V0UGljdHVyZShvcHRpb25zKS50aGVuKChpbWFnZURhdGEpID0+IHtcbiAqICAvLyBpbWFnZURhdGEgaXMgZWl0aGVyIGEgYmFzZTY0IGVuY29kZWQgc3RyaW5nIG9yIGEgZmlsZSBVUklcbiAqICAvLyBJZiBpdCdzIGJhc2U2NCAoREFUQV9VUkwpOlxuICogIGxldCBiYXNlNjRJbWFnZSA9ICdkYXRhOmltYWdlL2pwZWc7YmFzZTY0LCcgKyBpbWFnZURhdGE7XG4gKiB9LCAoZXJyKSA9PiB7XG4gKiAgLy8gSGFuZGxlIGVycm9yXG4gKiB9KTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENhbWVyYU9wdGlvbnNcbiAqIENhbWVyYVBvcG92ZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ2FtZXJhJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tY2FtZXJhJyxcbiAgcGx1Z2luUmVmOiAnbmF2aWdhdG9yLmNhbWVyYScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vYXBhY2hlL2NvcmRvdmEtcGx1Z2luLWNhbWVyYScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ0Jyb3dzZXInLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBDYW1lcmEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDb25zdGFudCBmb3IgcG9zc2libGUgZGVzdGluYXRpb24gdHlwZXNcbiAgICovXG4gIERlc3RpbmF0aW9uVHlwZSA9IHtcbiAgICAvKiogUmV0dXJuIGJhc2U2NCBlbmNvZGVkIHN0cmluZy4gREFUQV9VUkwgY2FuIGJlIHZlcnkgbWVtb3J5IGludGVuc2l2ZSBhbmQgY2F1c2UgYXBwIGNyYXNoZXMgb3Igb3V0IG9mIG1lbW9yeSBlcnJvcnMuIFVzZSBGSUxFX1VSSSBvciBOQVRJVkVfVVJJIGlmIHBvc3NpYmxlICovXG4gICAgREFUQV9VUkw6IDAsXG4gICAgLyoqIFJldHVybiBmaWxlIHVyaSAoY29udGVudDovL21lZGlhL2V4dGVybmFsL2ltYWdlcy9tZWRpYS8yIGZvciBBbmRyb2lkKSAqL1xuICAgIEZJTEVfVVJJOiAxLFxuICAgIC8qKiBSZXR1cm4gbmF0aXZlIHVyaSAoZWcuIGFzc2V0LWxpYnJhcnk6Ly8uLi4gZm9yIGlPUykgKi9cbiAgICBOQVRJVkVfVVJJOiAyXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBFbmNvZGluZ1R5cGUgPSB7XG4gICAgLyoqIFJldHVybiBKUEVHIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBKUEVHOiAwLFxuICAgIC8qKiBSZXR1cm4gUE5HIGVuY29kZWQgaW1hZ2UgKi9cbiAgICBQTkc6IDFcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIE1lZGlhVHlwZSA9IHtcbiAgICAvKiogQWxsb3cgc2VsZWN0aW9uIG9mIHN0aWxsIHBpY3R1cmVzIG9ubHkuIERFRkFVTFQuIFdpbGwgcmV0dXJuIGZvcm1hdCBzcGVjaWZpZWQgdmlhIERlc3RpbmF0aW9uVHlwZSAqL1xuICAgIFBJQ1RVUkU6IDAsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBvZiB2aWRlbyBvbmx5LCBPTkxZIFJFVFVSTlMgVVJMICovXG4gICAgVklERU86IDEsXG4gICAgLyoqIEFsbG93IHNlbGVjdGlvbiBmcm9tIGFsbCBtZWRpYSB0eXBlcyAqL1xuICAgIEFMTE1FRElBOiAyXG4gIH07XG5cbiAgLyoqXG4gICAqIENvbnZlbmllbmNlIGNvbnN0YW50XG4gICAqL1xuICBQaWN0dXJlU291cmNlVHlwZSA9IHtcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFNBVkVEUEhPVE9BTEJVTSBmb3IgQW5kcm9pZCkgKi9cbiAgICBQSE9UT0xJQlJBUlk6IDAsXG4gICAgLyoqIFRha2UgcGljdHVyZSBmcm9tIGNhbWVyYSAqL1xuICAgIENBTUVSQTogMSxcbiAgICAvKiogQ2hvb3NlIGltYWdlIGZyb20gcGljdHVyZSBsaWJyYXJ5IChzYW1lIGFzIFBIT1RPTElCUkFSWSBmb3IgQW5kcm9pZCkgKi9cbiAgICBTQVZFRFBIT1RPQUxCVU06IDJcbiAgfTtcblxuICAvKipcbiAgICogQ29udmVuaWVuY2UgY29uc3RhbnRcbiAgICovXG4gIFBvcG92ZXJBcnJvd0RpcmVjdGlvbiA9IHtcbiAgICBBUlJPV19VUDogMSxcbiAgICBBUlJPV19ET1dOOiAyLFxuICAgIEFSUk9XX0xFRlQ6IDQsXG4gICAgQVJST1dfUklHSFQ6IDgsXG4gICAgQVJST1dfQU5ZOiAxNVxuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZW5pZW5jZSBjb25zdGFudFxuICAgKi9cbiAgRGlyZWN0aW9uID0ge1xuICAgIC8qKiBVc2UgdGhlIGJhY2stZmFjaW5nIGNhbWVyYSAqL1xuICAgIEJBQ0s6IDAsXG4gICAgLyoqIFVzZSB0aGUgZnJvbnQtZmFjaW5nIGNhbWVyYSAqL1xuICAgIEZST05UOiAxXG4gIH07XG5cbiAgLyoqXG4gICAqIFRha2UgYSBwaWN0dXJlIG9yIHZpZGVvLCBvciBsb2FkIG9uZSBmcm9tIHRoZSBsaWJyYXJ5LlxuICAgKiBAcGFyYW0ge0NhbWVyYU9wdGlvbnN9IFtvcHRpb25zXSBPcHRpb25zIHRoYXQgeW91IHdhbnQgdG8gcGFzcyB0byB0aGUgY2FtZXJhLiBFbmNvZGluZyB0eXBlLCBxdWFsaXR5LCBldGMuIFBsYXRmb3JtLXNwZWNpZmljIHF1aXJrcyBhcmUgZGVzY3JpYmVkIGluIHRoZSBbQ29yZG92YSBwbHVnaW4gZG9jc10oaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1jYW1lcmEjY2FtZXJhb3B0aW9ucy1lcnJhdGEtKS5cbiAgICogQHJldHVybnMge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIEJhc2U2NCBlbmNvZGluZyBvZiB0aGUgaW1hZ2UgZGF0YSwgb3IgdGhlIGltYWdlIGZpbGUgVVJJLCBkZXBlbmRpbmcgb24gY2FtZXJhT3B0aW9ucywgb3RoZXJ3aXNlIHJlamVjdHMgd2l0aCBhbiBlcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBjYWxsYmFja09yZGVyOiAncmV2ZXJzZSdcbiAgfSlcbiAgZ2V0UGljdHVyZShvcHRpb25zPzogQ2FtZXJhT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZSBpbnRlcm1lZGlhdGUgaW1hZ2UgZmlsZXMgdGhhdCBhcmUga2VwdCBpbiB0ZW1wb3Jhcnkgc3RvcmFnZSBhZnRlciBjYWxsaW5nIGNhbWVyYS5nZXRQaWN0dXJlLlxuICAgKiBBcHBsaWVzIG9ubHkgd2hlbiB0aGUgdmFsdWUgb2YgQ2FtZXJhLnNvdXJjZVR5cGUgZXF1YWxzIENhbWVyYS5QaWN0dXJlU291cmNlVHlwZS5DQU1FUkEgYW5kIHRoZSBDYW1lcmEuZGVzdGluYXRpb25UeXBlIGVxdWFscyBDYW1lcmEuRGVzdGluYXRpb25UeXBlLkZJTEVfVVJJLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydpT1MnXVxuICB9KVxuICBjbGVhbnVwKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@ionic-native/streaming-media/ngx/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic-native/streaming-media/ngx/index.js ***!
  \*****************************************************************/
/*! exports provided: StreamingMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StreamingMedia", function() { return StreamingMedia; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var StreamingMedia = /** @class */ (function (_super) {
    __extends(StreamingMedia, _super);
    function StreamingMedia() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StreamingMedia.prototype.playVideo = function (videoUrl, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "playVideo", { "sync": true }, arguments); };
    StreamingMedia.prototype.playAudio = function (audioUrl, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "playAudio", { "sync": true }, arguments); };
    StreamingMedia.prototype.stopAudio = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "stopAudio", { "sync": true }, arguments); };
    StreamingMedia.prototype.pauseAudio = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "pauseAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMedia.prototype.resumeAudio = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "resumeAudio", { "sync": true, "platforms": ["iOS"] }, arguments); };
    StreamingMedia.pluginName = "StreamingMedia";
    StreamingMedia.plugin = "cordova-plugin-streaming-media";
    StreamingMedia.pluginRef = "plugins.streamingMedia";
    StreamingMedia.repo = "https://github.com/nchutchind/cordova-plugin-streaming-media";
    StreamingMedia.platforms = ["Amazon Fire OS", "Android", "iOS"];
    StreamingMedia = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StreamingMedia);
    return StreamingMedia;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0cmVhbWluZy1tZWRpYS9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFpRnBDLGtDQUFpQjs7OztJQU9uRCxrQ0FBUyxhQUFDLFFBQWdCLEVBQUUsT0FBK0I7SUFRM0Qsa0NBQVMsYUFBQyxRQUFnQixFQUFFLE9BQStCO0lBTTNELGtDQUFTO0lBTVQsbUNBQVU7SUFNVixvQ0FBVzs7Ozs7O0lBakNBLGNBQWM7UUFEMUIsVUFBVSxFQUFFO09BQ0EsY0FBYzt5QkFsRjNCO0VBa0ZvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIE9iamVjdCBvZiBvcHRpb25zIHRvIHBhc3MgaW50byB0aGUgcGxheVZpZGVvIG1ldGhvZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdHJlYW1pbmdWaWRlb09wdGlvbnMge1xuICAvKiogRXhlY3V0ZXMgYWZ0ZXIgc3VjY2VzcyBwbGF5aW5nIGF1ZGlvLiAqL1xuICBzdWNjZXNzQ2FsbGJhY2s/OiBGdW5jdGlvbjtcbiAgLyoqIEV4ZWN1dGVzIGFmdGVyIGVycm9yIHBsYXlpbmcgdmlkZW8uICovXG4gIGVycm9yQ2FsbGJhY2s/OiBGdW5jdGlvbjtcbiAgLyoqIEZvcmNlIG9uZSBvcmllbnRhdGlvbiBmb3IgcGxheWluZyB2aWRlby4gKi9cbiAgb3JpZW50YXRpb24/OiBzdHJpbmc7XG4gIC8qKiBTaG91bGQgdGhlIHZpZGVvIGNsb3NlIGFmdGVyIGl0J3Mgb3Zlci4gRGVmYXVsdHMgdG8gdHJ1ZS4gKi9cbiAgc2hvdWxkQXV0b0Nsb3NlPzogYm9vbGVhbjtcbiAgLyoqIFNob3VsZCB0aGUgdmlkZW8gaGF2ZSBjb250cm9scy4gRGVmYXVsdHMgdG8gdHJ1ZS4gQW5kcm9pZCBvbmx5LiAqL1xuICBjb250cm9scz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogT2JqZWN0IG9mIG9wdGlvbnMgdG8gcGFzcyBpbnRvIHRoZSBwbGF5QXVkaW8gbWV0aG9kLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVhbWluZ0F1ZGlvT3B0aW9ucyB7XG4gIC8qKiBCYWNrZ3JvdW5kIGNvbG9yIGZvciBhdWRpbyBwbGF5ZXIuICovXG4gIGJnQ29sb3I/OiBzdHJpbmc7XG4gIC8qKiBCYWNrZ3JvdW5kIGltYWdlIGZvciBhdWRpbyBwbGF5ZXIuICovXG4gIGJnSW1hZ2U/OiBzdHJpbmc7XG4gIC8qKlxuICAgKiBCYWNrZ3JvdW5kIGltYWdlIHNjYWxlIGZvciBhdWRpbyBwbGF5ZXIuXG4gICAqIFZhbGlkIHZhbHVlcyBhcmU6XG4gICAqIGZpdFxuICAgKiBzdHJldGNoXG4gICAqIGFzcGVjdFN0cmV0Y2guXG4gICAqL1xuICBiZ0ltYWdlU2NhbGU/OiBzdHJpbmc7XG4gIC8qKiBTdGFydCBhdWRpbyBwbGF5ZXIgaW4gZnVsbCBzY3JlZW4uIGlPUyBvbmx5LiAqL1xuICBpbml0RnVsbHNjcmVlbj86IGJvb2xlYW47XG4gIC8qKlxuICAgKiBLZWVwcyB0aGUgc2NyZWVuIGxpdCBhbmQgc3RvcHMgaXQgZnJvbSBsb2NraW5nXG4gICAqIHdoaWxlIGF1ZGlvIGlzIHBsYXlpbmcuIEFuZHJvaWQgb25seS5cbiAgICovXG4gIGtlZXBBd2FrZT86IGJvb2xlYW47XG4gIC8qKiBFeGVjdXRlcyBhZnRlciBzdWNjZXNzIHBsYXlpbmcgYXVkaW8uICovXG4gIHN1Y2Nlc3NDYWxsYmFjaz86IEZ1bmN0aW9uO1xuICAvKiogRXhlY3V0ZXMgYWZ0ZXIgZXJyb3IgcGxheWluZyBhdWRpby4gKi9cbiAgZXJyb3JDYWxsYmFjaz86IEZ1bmN0aW9uO1xufVxuXG4vKipcbiAqIEBuYW1lIFN0cmVhbWluZyBNZWRpYVxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHN0cmVhbSBhdWRpbyBhbmQgdmlkZW8gaW4gYSBmdWxsc2NyZWVuLCBuYXRpdmUgcGxheWVyIG9uIGlPUyBhbmQgQW5kcm9pZC5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFN0cmVhbWluZ01lZGlhLCBTdHJlYW1pbmdWaWRlb09wdGlvbnMgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3N0cmVhbWluZy1tZWRpYS9uZ3gnO1xuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgc3RyZWFtaW5nTWVkaWE6IFN0cmVhbWluZ01lZGlhKSB7IH1cbiAqXG4gKiBsZXQgb3B0aW9uczogU3RyZWFtaW5nVmlkZW9PcHRpb25zID0ge1xuICogICBzdWNjZXNzQ2FsbGJhY2s6ICgpID0+IHsgY29uc29sZS5sb2coJ1ZpZGVvIHBsYXllZCcpIH0sXG4gKiAgIGVycm9yQ2FsbGJhY2s6IChlKSA9PiB7IGNvbnNvbGUubG9nKCdFcnJvciBzdHJlYW1pbmcnKSB9LFxuICogICBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsXG4gKiAgIHNob3VsZEF1dG9DbG9zZTogdHJ1ZSxcbiAqICAgY29udHJvbHM6IGZhbHNlXG4gKiB9O1xuICpcbiAqIHRoaXMuc3RyZWFtaW5nTWVkaWEucGxheVZpZGVvKCdodHRwczovL3BhdGgvdG8vdmlkZW8vc3RyZWFtJywgb3B0aW9ucyk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogU3RyZWFtaW5nVmlkZW9PcHRpb25zXG4gKiBTdHJlYW1pbmdBdWRpb09wdGlvbnNcbiAqL1xuQFBsdWdpbih7XG4gIHBsdWdpbk5hbWU6ICdTdHJlYW1pbmdNZWRpYScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLXN0cmVhbWluZy1tZWRpYScsXG4gIHBsdWdpblJlZjogJ3BsdWdpbnMuc3RyZWFtaW5nTWVkaWEnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL25jaHV0Y2hpbmQvY29yZG92YS1wbHVnaW4tc3RyZWFtaW5nLW1lZGlhJyxcbiAgcGxhdGZvcm1zOiBbJ0FtYXpvbiBGaXJlIE9TJywgJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgU3RyZWFtaW5nTWVkaWEgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBTdHJlYW1zIGEgdmlkZW9cbiAgICogQHBhcmFtIHZpZGVvVXJsIHtzdHJpbmd9IFRoZSBVUkwgb2YgdGhlIHZpZGVvXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTdHJlYW1pbmdWaWRlb09wdGlvbnN9IE9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBwbGF5VmlkZW8odmlkZW9Vcmw6IHN0cmluZywgb3B0aW9ucz86IFN0cmVhbWluZ1ZpZGVvT3B0aW9ucyk6IHZvaWQge31cblxuICAvKipcbiAgICogU3RyZWFtcyBhbiBhdWRpb1xuICAgKiBAcGFyYW0gYXVkaW9Vcmwge3N0cmluZ30gVGhlIFVSTCBvZiB0aGUgYXVkaW8gc3RyZWFtXG4gICAqIEBwYXJhbSBvcHRpb25zIHtTdHJlYW1pbmdBdWRpb09wdGlvbnN9IE9wdGlvbnNcbiAgICovXG4gIEBDb3Jkb3ZhKHsgc3luYzogdHJ1ZSB9KVxuICBwbGF5QXVkaW8oYXVkaW9Vcmw6IHN0cmluZywgb3B0aW9ucz86IFN0cmVhbWluZ0F1ZGlvT3B0aW9ucyk6IHZvaWQge31cblxuICAvKipcbiAgICogU3RvcHMgc3RyZWFtaW5nIGF1ZGlvXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUgfSlcbiAgc3RvcEF1ZGlvKCk6IHZvaWQge31cblxuICAvKipcbiAgICogUGF1c2VzIHN0cmVhbWluZyBhdWRpb1xuICAgKi9cbiAgQENvcmRvdmEoeyBzeW5jOiB0cnVlLCBwbGF0Zm9ybXM6IFsnaU9TJ10gfSlcbiAgcGF1c2VBdWRpbygpOiB2b2lkIHt9XG5cbiAgLyoqXG4gICAqIFJlc3VtZXMgc3RyZWFtaW5nIGF1ZGlvXG4gICAqL1xuICBAQ29yZG92YSh7IHN5bmM6IHRydWUsIHBsYXRmb3JtczogWydpT1MnXSB9KVxuICByZXN1bWVBdWRpbygpOiB2b2lkIHt9XG59XG4iXX0=

/***/ }),

/***/ "./src/app/index-english/index-english.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/index-english/index-english.module.ts ***!
  \*******************************************************/
/*! exports provided: IndexEnglishPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexEnglishPageModule", function() { return IndexEnglishPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _index_english_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./index-english.page */ "./src/app/index-english/index-english.page.ts");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");










var routes = [
    {
        path: '',
        component: _index_english_page__WEBPACK_IMPORTED_MODULE_6__["IndexEnglishPage"]
    }
];
var IndexEnglishPageModule = /** @class */ (function () {
    function IndexEnglishPageModule() {
    }
    IndexEnglishPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_index_english_page__WEBPACK_IMPORTED_MODULE_6__["IndexEnglishPage"]],
            providers: [_ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__["ScreenOrientation"], _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_8__["StreamingMedia"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"]]
        })
    ], IndexEnglishPageModule);
    return IndexEnglishPageModule;
}());



/***/ }),

/***/ "./src/app/index-english/index-english.page.html":
/*!*******************************************************!*\
  !*** ./src/app/index-english/index-english.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header no-border>\n  <ion-toolbar>\n    <ion-title>iWareBatik</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" style=\"color: black;\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n\n  <ion-grid fixed>\n\n    <ion-row>\n      <ion-col size=\"12\">\n        <!-- Spinning Wheel -->\n        <div id=\"fab-spinning-wheel\">\n          <img id=\"spinning-wheel\" src=\"/assets/image/home_component/spinning_wheel/spinning_wheel.png\"\n            (click)=\"disabledTapHere()\" />\n          <img id=\"tap-here\" src=\"/assets/image/home_component/spinning_wheel/tap_here.png\"\n            (click)=\"disabledTapHere()\" />\n          <ion-icon id=\"selector\" name=\"ios-play\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row>\n      <ion-col size=\"9\">\n        <!-- Input -->\n        <div id=\"fab-input\">\n          <ion-input id=\"input\" placeholder=\"try your luck, spin that wheel\" readonly></ion-input>\n        </div>\n      </ion-col>\n      <ion-col size=\"3\">\n        <ion-button id=\"goToRegion\" (click)=\"linkToRegion()\">\n          <ion-icon name=\"arrow-dropright\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n\n    <ion-row id=\"map-motifs\">\n      <ion-col size=\"6\">\n        <!-- Indonesian Map -->\n        <div id=\"fab-map-motifs\">\n          <div id=\"discover\">\n            <p>Discover Region</p>\n          </div>\n          <ion-slides [options]=\"sliderOpts\" #Slides1 autoplay=\"5000\" loop=\"true\" speed=\"500\"\n            (ionSlidesDidLoad)=\"slidesDidLoad1()\">\n            <ion-slide *ngFor=\"let img of imagesIndonesia\">\n              <img src=\"/assets/image/{{img}}.png\" tappable routerLink=\"/indonesian-map\" />\n            </ion-slide>\n          </ion-slides>\n          <ion-icon class=\"arrow\" id=\"back-arrow\" name=\"ios-arrow-round-back\"></ion-icon>\n          <ion-icon class=\"arrow\" id=\"forward-arrow\" name=\"ios-arrow-round-forward\"></ion-icon>\n        </div>\n      </ion-col>\n      <ion-col size=\"6\">\n        <!-- Batik Motifs -->\n        <div id=\"fab-map-motifs\">\n          <div id=\"discover\">\n            <p>Discover Batik</p>\n          </div>\n          <ion-slides [options]=\"sliderOpts\" #Slides2 autoplay=\"5000\" loop=\"true\" speed=\"500\"\n            (ionSlidesDidLoad)=\"slidesDidLoad2()\">\n            <ion-slide *ngFor=\"let img of imagesMotifs\">\n              <img src=\"/assets/image/{{img}}.png\" tappable routerLink=\"/batik-motifs\" />\n            </ion-slide>\n          </ion-slides>\n          <ion-icon class=\"arrow\" id=\"back-arrow\" name=\"ios-arrow-round-back\"></ion-icon>\n          <ion-icon class=\"arrow\" id=\"forward-arrow\" name=\"ios-arrow-round-forward\"></ion-icon>\n        </div>\n      </ion-col>\n    </ion-row>\n\n    <ion-row id=\"buttons\">\n      <ion-col>\n        <!-- Video UNESCO -->\n        <ion-icon id=\"buttonVideo\" (click)=\"playVideo()\" name=\"ios-play\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <!-- Games -->\n        <ion-icon id=\"buttonGames\" routerLink=\"/games\" name=\"logo-game-controller-b\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <!-- Batik Around You -->\n        <ion-icon id=\"buttonBatikAroundYou\" routerLink=\"/batik-around-you\" name=\"calendar\"></ion-icon>\n      </ion-col>\n      <ion-col>\n        <!-- Camera -->\n        <ion-icon id=\"buttonCamera\" (click)=\"takePicture()\" name=\"camera\"></ion-icon>\n      </ion-col>\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>"

/***/ }),

/***/ "./src/app/index-english/index-english.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/index-english/index-english.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content {\n  --background: url('background_index.jpg') 0 0/140% 100% no-repeat; }\n\n@-webkit-keyframes rotation {\n  from {\n    -webkit-transform: rotate(0deg); }\n  to {\n    -webkit-transform: rotate(4000deg); } }\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes blink {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@media screen and (orientation: portrait) {\n  #fab-map-motifs ion-slides {\n    margin-top: 1%;\n    background: transparent; }\n    #fab-map-motifs ion-slides img {\n      padding-top: 1%;\n      padding-bottom: 1%;\n      border-radius: 8%; }\n  p {\n    font-size: 14pt;\n    font-family: Arial, Helvetica, sans-serif;\n    text-align: center;\n    font-weight: bold; }\n  #spinning-wheel {\n    position: relative;\n    left: 20%;\n    width: 60%; }\n  .spin {\n    -webkit-animation: rotation 5.1s 1 ease-out; }\n  #selector {\n    position: absolute;\n    top: 41%;\n    left: 16%;\n    color: #2a5a54;\n    width: 30px;\n    height: 30px; }\n  #tap-here {\n    position: absolute;\n    top: 31%;\n    left: 40%;\n    width: 80px;\n    height: 80px;\n    -webkit-animation: blink 1s;\n            animation: blink 1s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite; }\n  #fab-input {\n    position: relative;\n    left: 5%;\n    background-color: #2a5a54;\n    border-radius: 8%;\n    text-align: center;\n    width: 100%;\n    height: 95%;\n    color: white; }\n    #fab-input ion-input {\n      margin: 1%;\n      height: 95%;\n      font-size: 12pt;\n      font-weight: bold; }\n  #goToRegion {\n    position: relative;\n    left: 6%;\n    bottom: 1%;\n    --background: #2a5a54;\n    height: 87%; }\n  #buttons {\n    margin-top: 15%; }\n  #buttonVideo {\n    color: #2a5a54;\n    width: 60px;\n    height: 60px; }\n  #buttonGames {\n    color: #2a5a54;\n    width: 60px;\n    height: 60px; }\n  #buttonBatikAroundYou {\n    color: #2a5a54;\n    width: 60px;\n    height: 60px; }\n  #buttonCamera {\n    color: #2a5a54;\n    width: 60px;\n    height: 60px; }\n  #map-motifs {\n    margin-top: 6%; }\n  #discover {\n    background: #2a5a54;\n    color: white;\n    border-radius: 5%; }\n  .arrow {\n    width: 30px;\n    height: 30px;\n    color: #2a5a54; }\n  #forward-arrow {\n    margin-left: 50%; }\n  #back-arrow {\n    margin-left: 7%; } }\n\n@media screen and (orientation: landscape) {\n  #fab-map-motifs ion-slides {\n    margin-top: 1%;\n    background: transparent; }\n    #fab-map-motifs ion-slides img {\n      padding-top: 1%;\n      padding-bottom: 1%;\n      border-radius: 8%; }\n  p {\n    font-size: 14pt;\n    font-family: Arial, Helvetica, sans-serif;\n    text-align: center;\n    font-weight: bold; }\n  #spinning-wheel {\n    position: relative;\n    left: 2%;\n    margin-top: 5%;\n    width: 25%; }\n  .spin {\n    -webkit-animation: rotation 5.1s 1 ease-out; }\n  #selector {\n    position: absolute;\n    top: 48%;\n    left: 0%;\n    color: #2a5a54;\n    width: 30px;\n    height: 30px; }\n  #tap-here {\n    position: absolute;\n    top: 33%;\n    left: 9%;\n    width: 80px;\n    height: 80px;\n    -webkit-animation: blink 1s;\n            animation: blink 1s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite; }\n  #fab-input {\n    width: 35%;\n    margin-left: -5%;\n    background-color: #2a5a54;\n    border-radius: 8%;\n    color: white; }\n    #fab-input ion-input {\n      margin: 2%;\n      font-size: 9pt;\n      font-weight: bold;\n      text-align: center; }\n      #fab-input ion-input ::-webkit-input-placeholder {\n        font-size: 12pt; }\n      #fab-input ion-input ::-moz-placeholder {\n        font-size: 12pt; }\n      #fab-input ion-input :-ms-input-placeholder {\n        font-size: 12pt; }\n      #fab-input ion-input ::-ms-input-placeholder {\n        font-size: 12pt; }\n      #fab-input ion-input ::placeholder {\n        font-size: 12pt; }\n  #goToRegion {\n    margin-left: -215%;\n    --background: #2a5a54;\n    height: 85%; }\n  #buttons {\n    margin-top: 15%; }\n  #buttonVideo {\n    position: absolute;\n    color: #2a5a54;\n    width: 60px;\n    height: 60px;\n    margin-top: -100%;\n    margin-left: 360%; }\n  #buttonGames {\n    position: absolute;\n    color: #2a5a54;\n    width: 60px;\n    height: 60px;\n    margin-top: -145%;\n    margin-left: 260%; }\n  #buttonBatikAroundYou {\n    position: absolute;\n    color: #2a5a54;\n    width: 60px;\n    height: 60px;\n    margin-top: -190%;\n    margin-left: 160%; }\n  #buttonCamera {\n    position: absolute;\n    color: #2a5a54;\n    width: 60px;\n    height: 60px;\n    margin-top: -235%;\n    margin-left: 60%; }\n  #map-motifs {\n    margin-top: -35%;\n    margin-left: 35%;\n    width: 50%; }\n  #discover {\n    background: #2a5a54;\n    color: white;\n    border-radius: 5%; }\n  .arrow {\n    width: 30px;\n    height: 30px;\n    color: #2a5a54; }\n  #forward-arrow {\n    margin-left: 50%; }\n  #back-arrow {\n    margin-left: 7%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcGVycm9uZS9Eb2N1bWVudHMvU1VQU0kvUHJvZ2V0dG9fRGlwbG9tYS9iYXRpay1tb2JpbGUtYXBwL2lXYXJlQmF0aWsvc3JjL2FwcC9pbmRleC1lbmdsaXNoL2luZGV4LWVuZ2xpc2gucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUVBQWEsRUFBQTs7QUFHZjtFQUNFO0lBQ0UsK0JBQStCLEVBQUE7RUFFakM7SUFDRSxrQ0FBa0MsRUFBQSxFQUFBOztBQUl0QztFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBOztBQVJkO0VBQ0U7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBLEVBQUE7O0FBSWQ7RUFDRTtJQUVJLGNBQWM7SUFDZCx1QkFBdUIsRUFBQTtJQUgzQjtNQU1NLGVBQWU7TUFDZixrQkFBa0I7TUFDbEIsaUJBQWlCLEVBQUE7RUFLdkI7SUFDRSxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLGtCQUFrQjtJQUNsQixpQkFBaUIsRUFBQTtFQUduQjtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVSxFQUFBO0VBR1o7SUFDRSwyQ0FBMkMsRUFBQTtFQUc3QztJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxXQUFXO0lBQ1gsWUFBWTtJQUNaLDJCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsMkNBQW1DO1lBQW5DLG1DQUFtQyxFQUFBO0VBR3JDO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVksRUFBQTtJQVJkO01BV0ksVUFBVTtNQUNWLFdBQVc7TUFDWCxlQUFlO01BQ2YsaUJBQWlCLEVBQUE7RUFJckI7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixxQkFBYTtJQUNiLFdBQVcsRUFBQTtFQUdiO0lBQ0UsZUFBZSxFQUFBO0VBR2pCO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFHZDtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWSxFQUFBO0VBR2Q7SUFDRSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVksRUFBQTtFQUdkO0lBQ0UsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFHZDtJQUNFLGNBQWMsRUFBQTtFQUdoQjtJQUNFLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osaUJBQWlCLEVBQUE7RUFHbkI7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWMsRUFBQTtFQUdoQjtJQUNFLGdCQUFnQixFQUFBO0VBR2xCO0lBQ0UsZUFBZSxFQUFBLEVBQ2hCOztBQUdIO0VBQ0U7SUFFSSxjQUFjO0lBQ2QsdUJBQXVCLEVBQUE7SUFIM0I7TUFNTSxlQUFlO01BQ2Ysa0JBQWtCO01BQ2xCLGlCQUFpQixFQUFBO0VBS3ZCO0lBQ0UsZUFBZTtJQUNmLHlDQUF5QztJQUN6QyxrQkFBa0I7SUFDbEIsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLGNBQWM7SUFDZCxVQUFVLEVBQUE7RUFHWjtJQUNFLDJDQUEyQyxFQUFBO0VBRzdDO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixRQUFRO0lBQ1IsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZLEVBQUE7RUFHZDtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsUUFBUTtJQUNSLFdBQVc7SUFDWCxZQUFZO0lBQ1osMkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiwyQ0FBbUM7WUFBbkMsbUNBQW1DLEVBQUE7RUFHckM7SUFDRSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsWUFBWSxFQUFBO0lBTGQ7TUFRSSxVQUFVO01BQ1YsY0FBYztNQUNkLGlCQUFpQjtNQUNqQixrQkFBa0IsRUFBQTtNQVh0QjtRQWNNLGVBQWUsRUFBQTtNQWRyQjtRQWNNLGVBQWUsRUFBQTtNQWRyQjtRQWNNLGVBQWUsRUFBQTtNQWRyQjtRQWNNLGVBQWUsRUFBQTtNQWRyQjtRQWNNLGVBQWUsRUFBQTtFQUtyQjtJQUNFLGtCQUFrQjtJQUNsQixxQkFBYTtJQUNiLFdBQVcsRUFBQTtFQUdiO0lBQ0UsZUFBZSxFQUFBO0VBR2pCO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixpQkFBaUIsRUFBQTtFQUduQjtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGlCQUFpQixFQUFBO0VBR25CO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsVUFBVSxFQUFBO0VBR1o7SUFDRSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGlCQUFpQixFQUFBO0VBR25CO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjLEVBQUE7RUFHaEI7SUFDRSxnQkFBZ0IsRUFBQTtFQUdsQjtJQUNFLGVBQWUsRUFBQSxFQUNoQiIsImZpbGUiOiJzcmMvYXBwL2luZGV4LWVuZ2xpc2gvaW5kZXgtZW5nbGlzaC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogdXJsKC4uLy4uL2Fzc2V0cy9pbWFnZS9iYWNrZ3JvdW5kL2JhY2tncm91bmRfaW5kZXguanBnKSAwIDAvMTQwJSAxMDAlIG5vLXJlcGVhdDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHJvdGF0aW9uIHtcbiAgZnJvbSB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxuICB0byB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg0MDAwZGVnKTtcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAjZmFiLW1hcC1tb3RpZnMge1xuICAgIGlvbi1zbGlkZXMge1xuICAgICAgbWFyZ2luLXRvcDogMSU7XG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgICAgaW1nIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDElO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMSU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDglO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHAge1xuICAgIGZvbnQtc2l6ZTogMTRwdDtcbiAgICBmb250LWZhbWlseTogQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIH1cblxuICAjc3Bpbm5pbmctd2hlZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiAyMCU7XG4gICAgd2lkdGg6IDYwJTtcbiAgfVxuXG4gIC5zcGluIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRpb24gNS4xcyAxIGVhc2Utb3V0O1xuICB9XG5cbiAgI3NlbGVjdG9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0MSU7XG4gICAgbGVmdDogMTYlO1xuICAgIGNvbG9yOiAjMmE1YTU0O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgfVxuXG4gICN0YXAtaGVyZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMzElO1xuICAgIGxlZnQ6IDQwJTtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYW5pbWF0aW9uOiBibGluayAxcztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgfVxuXG4gICNmYWItaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmE1YTU0O1xuICAgIGJvcmRlci1yYWRpdXM6IDglO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBpb24taW5wdXQge1xuICAgICAgbWFyZ2luOiAxJTtcbiAgICAgIGhlaWdodDogOTUlO1xuICAgICAgZm9udC1zaXplOiAxMnB0O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG5cbiAgI2dvVG9SZWdpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBsZWZ0OiA2JTtcbiAgICBib3R0b206IDElO1xuICAgIC0tYmFja2dyb3VuZDogIzJhNWE1NDtcbiAgICBoZWlnaHQ6IDg3JTtcbiAgfVxuXG4gICNidXR0b25zIHtcbiAgICBtYXJnaW4tdG9wOiAxNSU7XG4gIH1cblxuICAjYnV0dG9uVmlkZW8ge1xuICAgIGNvbG9yOiAjMmE1YTU0O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgfVxuXG4gICNidXR0b25HYW1lcyB7XG4gICAgY29sb3I6ICMyYTVhNTQ7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICB9XG5cbiAgI2J1dHRvbkJhdGlrQXJvdW5kWW91IHtcbiAgICBjb2xvcjogIzJhNWE1NDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cblxuICAjYnV0dG9uQ2FtZXJhIHtcbiAgICBjb2xvcjogIzJhNWE1NDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gIH1cblxuICAjbWFwLW1vdGlmcyB7XG4gICAgbWFyZ2luLXRvcDogNiU7XG4gIH1cblxuICAjZGlzY292ZXIge1xuICAgIGJhY2tncm91bmQ6ICMyYTVhNTQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xuICB9XG5cbiAgLmFycm93IHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgY29sb3I6ICMyYTVhNTQ7XG4gIH1cblxuICAjZm9yd2FyZC1hcnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcbiAgfVxuXG4gICNiYWNrLWFycm93IHtcbiAgICBtYXJnaW4tbGVmdDogNyU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgI2ZhYi1tYXAtbW90aWZzIHtcbiAgICBpb24tc2xpZGVzIHtcbiAgICAgIG1hcmdpbi10b3A6IDElO1xuICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxJTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDElO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4JTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwIHtcbiAgICBmb250LXNpemU6IDE0cHQ7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG5cbiAgI3NwaW5uaW5nLXdoZWVsIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbGVmdDogMiU7XG4gICAgbWFyZ2luLXRvcDogNSU7XG4gICAgd2lkdGg6IDI1JTtcbiAgfVxuXG4gIC5zcGluIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogcm90YXRpb24gNS4xcyAxIGVhc2Utb3V0O1xuICB9XG5cbiAgI3NlbGVjdG9yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA0OCU7XG4gICAgbGVmdDogMCU7XG4gICAgY29sb3I6ICMyYTVhNTQ7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICB9XG5cbiAgI3RhcC1oZXJlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAzMyU7XG4gICAgbGVmdDogOSU7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGFuaW1hdGlvbjogYmxpbmsgMXM7XG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gIH1cblxuICAjZmFiLWlucHV0IHtcbiAgICB3aWR0aDogMzUlO1xuICAgIG1hcmdpbi1sZWZ0OiAtNSU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJhNWE1NDtcbiAgICBib3JkZXItcmFkaXVzOiA4JTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICBpb24taW5wdXQge1xuICAgICAgbWFyZ2luOiAyJTtcbiAgICAgIGZvbnQtc2l6ZTogOXB0O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LXNpemU6IDEycHQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgI2dvVG9SZWdpb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAtMjE1JTtcbiAgICAtLWJhY2tncm91bmQ6ICMyYTVhNTQ7XG4gICAgaGVpZ2h0OiA4NSU7XG4gIH1cblxuICAjYnV0dG9ucyB7XG4gICAgbWFyZ2luLXRvcDogMTUlO1xuICB9XG5cbiAgI2J1dHRvblZpZGVvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICMyYTVhNTQ7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi10b3A6IC0xMDAlO1xuICAgIG1hcmdpbi1sZWZ0OiAzNjAlO1xuICB9XG5cbiAgI2J1dHRvbkdhbWVzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICMyYTVhNTQ7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi10b3A6IC0xNDUlO1xuICAgIG1hcmdpbi1sZWZ0OiAyNjAlO1xuICB9XG5cbiAgI2J1dHRvbkJhdGlrQXJvdW5kWW91IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6ICMyYTVhNTQ7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1hcmdpbi10b3A6IC0xOTAlO1xuICAgIG1hcmdpbi1sZWZ0OiAxNjAlO1xuICB9XG5cbiAgI2J1dHRvbkNhbWVyYSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjMmE1YTU0O1xuICAgIHdpZHRoOiA2MHB4O1xuICAgIGhlaWdodDogNjBweDtcbiAgICBtYXJnaW4tdG9wOiAtMjM1JTtcbiAgICBtYXJnaW4tbGVmdDogNjAlO1xuICB9XG5cbiAgI21hcC1tb3RpZnMge1xuICAgIG1hcmdpbi10b3A6IC0zNSU7XG4gICAgbWFyZ2luLWxlZnQ6IDM1JTtcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbiAgI2Rpc2NvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjMmE1YTU0O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1JTtcbiAgfVxuXG4gIC5hcnJvdyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiAjMmE1YTU0O1xuICB9XG5cbiAgI2ZvcndhcmQtYXJyb3cge1xuICAgIG1hcmdpbi1sZWZ0OiA1MCU7XG4gIH1cblxuICAjYmFjay1hcnJvdyB7XG4gICAgbWFyZ2luLWxlZnQ6IDclO1xuICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/index-english/index-english.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/index-english/index-english.page.ts ***!
  \*****************************************************/
/*! exports provided: IndexEnglishPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexEnglishPage", function() { return IndexEnglishPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "./node_modules/@ionic-native/status-bar/ngx/index.js");
/* harmony import */ var _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/screen-orientation/ngx */ "./node_modules/@ionic-native/screen-orientation/ngx/index.js");
/* harmony import */ var _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/streaming-media/ngx */ "./node_modules/@ionic-native/streaming-media/ngx/index.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");









var IndexEnglishPage = /** @class */ (function () {
    function IndexEnglishPage(statusBar, screenOrientation, streamingMedia, camera, navController) {
        this.statusBar = statusBar;
        this.screenOrientation = screenOrientation;
        this.streamingMedia = streamingMedia;
        this.camera = camera;
        this.navController = navController;
        this.isRunning = false;
        this.sliderOpts = {
            zoom: false,
            slidesPerView: 1,
            centeredSlides: true,
            spaceBetween: 5,
            observer: true,
            observeParents: true,
            observeSlideChilden: true,
        };
        this.imagesIndonesia = ['home_component/indonesia/indonesia1', 'home_component/indonesia/indonesia2', 'home_component/indonesia/indonesia3', 'home_component/indonesia/indonesia4', 'home_component/indonesia/indonesia5', 'home_component/indonesia/indonesia6', 'home_component/indonesia/indonesia7', 'home_component/indonesia/indonesia8', 'home_component/indonesia/indonesia9', 'home_component/indonesia/indonesia10'];
        this.imagesMotifs = ['home_component/batik/motifs1', 'home_component/batik/motifs2', 'home_component/batik/motifs3', 'home_component/batik/motifs4', 'home_component/batik/motifs5', 'home_component/batik/motifs6', 'home_component/batik/motifs7', 'home_component/batik/motifs8', 'home_component/batik/motifs9', 'home_component/batik/motifs10'];
        this.pageRegions = ['/aceh-details', '/bali-details', '/bangka-belitung-details', '/banten-details', '/bengkulu-details', '/gorontalo-details', '/jabar-details', '/jakarta-details',
            '/jambi-details', '/jateng-details', '/jatim-details', '/kalbar-details', '/kalimantan-timur-pisah-deatils', '/kalimantan-utara-details', '/kalsel-details', '/kalteng-details',
            '/kepri-details', '/lampung-details', '/maluku-details', '/malut-details', '/nusa-tenggara-barat-details', '/nusa-tenggara-timur-details', '/pabar-details', '/papua-details',
            '/riau-details', '/sulbar-details', '/sulsel-details', '/sulteng-details', '/sultra-details', '/sulut-details', '/sumbar-details', '/sumsel-details', '/sumut-details', '/yogyakarta-details'];
        this.statusBar.styleDefault();
    }
    IndexEnglishPage.prototype.ngOnInit = function () {
        //
    };
    IndexEnglishPage.prototype.playVideo = function () {
        var options = {
            successCallback: function () { console.log('Video played'); },
            errorCallback: function (e) { console.log('Error streaming'); },
            orientation: 'landscape',
            shouldAutoClose: true,
            controls: false
        };
        this.streamingMedia.playVideo('https://www.youtube.com/watch?v=wylWYSHkzoQ&t=', options);
    };
    IndexEnglishPage.prototype.takePicture = function () {
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.FILE_URI,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE
        };
        this.camera.getPicture(options).then(function (imageData) {
            // imageData is either a base64 encoded string or a file URI
            // If it's base64 (DATA_URL):
            var base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
            // Handle error
        });
    };
    // Ricerca numero casuale fra due estermi compresi 
    IndexEnglishPage.prototype.getRandomInt = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    IndexEnglishPage.prototype.sleep = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    IndexEnglishPage.prototype.spin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isRunning) return [3 /*break*/, 2];
                        this.isRunning = true;
                        document.getElementById("spinning-wheel").classList.add("spin");
                        return [4 /*yield*/, this.sleep(5300).then(function () {
                                var rand = _this.getRandomInt(0, _this.pageRegions.length - 1);
                                _this.writeRegion(_this.pageRegions[rand]);
                                _this.region = _this.pageRegions[rand];
                                // Reset animation
                                var element = document.getElementById("spinning-wheel");
                                element.addEventListener("click", function (e) {
                                    e.preventDefault;
                                    element.classList.remove("spin");
                                    void element.offsetWidth;
                                    element.classList.add("spin");
                                }, false);
                            })];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        this.isRunning = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    IndexEnglishPage.prototype.linkToRegion = function () {
        if (this.region != undefined) {
            this.navController.navigateForward(this.region);
            // svuotare l'input
        }
    };
    IndexEnglishPage.prototype.disabledTapHere = function () {
        document.getElementById("tap-here").style.visibility = "hidden";
        this.spin();
    };
    IndexEnglishPage.prototype.writeRegion = function (pageRegions) {
        switch (pageRegions) {
            case '/aceh-details':
                document.getElementById('input').innerHTML = "Aceh";
                break;
            case '/bali-details':
                document.getElementById('input').innerHTML = "Bali";
                break;
            case '/bangka-belitung-details':
                document.getElementById('input').innerHTML = "Bangka Belitung";
                break;
            case '/banten-details':
                document.getElementById('input').innerHTML = "Banten";
                break;
            case '/bengkulu-details':
                document.getElementById('input').innerHTML = "Bengkulu";
                break;
            case '/gorontalo-details':
                document.getElementById('input').innerHTML = "Gorontalo";
                break;
            case '/jabar-details':
                document.getElementById('input').innerHTML = "West Jawa";
                break;
            case '/jakarta-details':
                document.getElementById('input').innerHTML = "Jakarta";
                break;
            case '/jambi-details':
                document.getElementById('input').innerHTML = "Jambi";
                break;
            case '/jateng-details':
                document.getElementById('input').innerHTML = "Center Jawa";
                break;
            case '/jatim-details':
                document.getElementById('input').innerHTML = "East Jawa";
                break;
            case '/kalbar-details':
                document.getElementById('input').innerHTML = "West Kalimantan";
                break;
            case '/kalimantan-timur-pisah-deatils':
                document.getElementById('input').innerHTML = "East Kalimantan";
                break;
            case '/kalimantan-utara-details':
                document.getElementById('input').innerHTML = "North Kalimantan";
                break;
            case '/kalsel-details':
                document.getElementById('input').innerHTML = "South Kalimantan";
                break;
            case '/kalteng-details':
                document.getElementById('input').innerHTML = "Center Kalimantan";
                break;
            case '/kepri-details':
                document.getElementById('input').innerHTML = "Kepri";
                break;
            case '/lampung-details':
                document.getElementById('input').innerHTML = "Lampung";
                break;
            case '/maluku-details':
                document.getElementById('input').innerHTML = "Maluku";
                break;
            case '/malut-details':
                document.getElementById('input').innerHTML = "North Maluku";
                break;
            case '/nusa-tenggara-barat-details':
                document.getElementById('input').innerHTML = "Southwest Nusa";
                break;
            case '/nusa-tenggara-timur-details':
                document.getElementById('input').innerHTML = "Southeast Nusa";
                break;
            case '/pabar-details':
                document.getElementById('input').innerHTML = "West Papua";
                break;
            case '/papua-details':
                document.getElementById('input').innerHTML = "Papua";
                break;
            case 'riau-details':
                document.getElementById('input').innerHTML = "Riau";
                break;
            case '/sulbar-details':
                document.getElementById('input').innerHTML = "West Sulawesi";
                break;
            case '/sulsel-details':
                document.getElementById('input').innerHTML = "South Sulawesi";
                break;
            case '/sulteng-details':
                document.getElementById('input').innerHTML = "Center Sulawesi";
                break;
            case '/sultra-details':
                document.getElementById('input').innerHTML = "Southeast Sulawesi ";
                break;
            case '/sulut-details':
                document.getElementById('input').innerHTML = "North Sulawesi";
                break;
            case '/sumbar-details':
                document.getElementById('input').innerHTML = "West Sumatra";
                break;
            case '/sumsel-details':
                document.getElementById('input').innerHTML = "South Sumatra";
                break;
            case '/sumut-details':
                document.getElementById('input').innerHTML = "North Sumatra";
                break;
            case '/yogyakarta-details':
                document.getElementById('input').innerHTML = "Yogyakarta";
                break;
        }
    };
    IndexEnglishPage.prototype.slidesDidLoad1 = function () {
        this.slider1.startAutoplay();
    };
    IndexEnglishPage.prototype.slidesDidLoad2 = function () {
        this.slider2.startAutoplay();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Slides1'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSlides"])
    ], IndexEnglishPage.prototype, "slider1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('Slides2'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["IonSlides"])
    ], IndexEnglishPage.prototype, "slider2", void 0);
    IndexEnglishPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index-english',
            template: __webpack_require__(/*! ./index-english.page.html */ "./src/app/index-english/index-english.page.html"),
            styles: [__webpack_require__(/*! ./index-english.page.scss */ "./src/app/index-english/index-english.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__["StatusBar"],
            _ionic_native_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_3__["ScreenOrientation"],
            _ionic_native_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_4__["StreamingMedia"],
            _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"]])
    ], IndexEnglishPage);
    return IndexEnglishPage;
}());



/***/ })

}]);
//# sourceMappingURL=index-english-index-english-module.js.map