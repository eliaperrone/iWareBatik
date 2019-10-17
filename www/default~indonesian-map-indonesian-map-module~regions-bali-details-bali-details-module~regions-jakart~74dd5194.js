(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~indonesian-map-indonesian-map-module~regions-bali-details-bali-details-module~regions-jakart~74dd5194"],{

/***/ "./node_modules/ngx-pinch-zoom/fesm5/ngx-pinch-zoom.js":
/*!*************************************************************!*\
  !*** ./node_modules/ngx-pinch-zoom/fesm5/ngx-pinch-zoom.js ***!
  \*************************************************************/
/*! exports provided: PinchZoomComponent, PinchZoomModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinchZoomComponent", function() { return PinchZoomComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PinchZoomModule", function() { return PinchZoomModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PinchZoomComponent = /** @class */ (function () {
    function PinchZoomComponent(elementRef) {
        this.elementRef = elementRef;
        this.i = 0;
        this.scale = 1;
        this.initialScale = 1;
        this.moveX = 0;
        this.moveY = 0;
        this.initialMoveX = 0;
        this.initialMoveY = 0;
        this.lastTap = 0;
        this.draggingMode = false;
        this.transitionDuration = 200;
        this.doubleTap = true;
        this.doubleTapScale = 2;
        this.zoomButton = true;
        this.linearHorizontalSwipe = false;
        this.linearVerticalSwipe = false;
        this.autoZoomOut = false;
        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(PinchZoomComponent.prototype, "id", {
        get: /**
         * @return {?}
         */
        function () {
            return this._id;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.element = this.contentElement.nativeElement;
        this.parentElement = this.elementRef.nativeElement;
        this.elementTarget = this.element.querySelector('*').tagName;
        this.setBasicStyles();
        this.element.ondragstart = (/**
         * @return {?}
         */
        function () { return false; });
    };
    Object.defineProperty(PinchZoomComponent.prototype, "isTouchScreen", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
            /** @type {?} */
            var mq = (/**
             * @param {?} query
             * @return {?}
             */
            function (query) {
                return window.matchMedia(query).matches;
            });
            if (('ontouchstart' in window)) {
                return true;
            }
            // include the 'heartz' as a way to have a non matching MQ to help terminate the join
            // https://git.io/vznFH
            /** @type {?} */
            var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
            return mq(query);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PinchZoomComponent.prototype, "isDragging", {
        get: /**
         * @return {?}
         */
        function () {
            /** @type {?} */
            var imgHeight = this.getImageHeight();
            /** @type {?} */
            var imgWidth = this.getImageWidth();
            if (this.scale > 1) {
                return imgHeight * this.scale > this.parentElement.offsetHeight ||
                    imgWidth * this.scale > this.parentElement.offsetWidth;
            }
            if (this.scale === 1) {
                return imgHeight > this.parentElement.offsetHeight ||
                    imgWidth > this.parentElement.offsetWidth;
            }
        },
        enumerable: true,
        configurable: true
    });
    /*
     * Desktop listeners
     */
    /*
         * Desktop listeners
         */
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.onMouseEnter = /*
         * Desktop listeners
         */
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.getElementPosition();
        if (this.isDragging) {
            this.draggingMode = true;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.onMouseMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.draggingMode) {
            event.preventDefault();
            if (!this.eventType) {
                this.startX = event.clientX - this.elementPosition.left;
                this.startY = event.clientY - this.elementPosition.top;
            }
            this.eventType = 'swipe';
            this.events.emit({
                type: 'swipe',
                moveX: this.moveX,
                moveY: this.moveY
            });
            this.moveX = this.initialMoveX + ((event.clientX - this.elementPosition.left) - this.startX);
            this.moveY = this.initialMoveY + ((event.clientY - this.elementPosition.top) - this.startY);
            this.centeringImage();
            this.transformElement(0);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.onMouseUp = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.draggingMode = false;
        this.updateInitialValues();
        this.eventType = '';
    };
    /*
     * Mobile listeners
     */
    /*
         * Mobile listeners
         */
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.onResize = /*
         * Mobile listeners
         */
    /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.setImageWidth();
        this.transformElement(this.transitionDuration);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.touchstartHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.getElementPosition();
        if (!this.eventType) {
            this.startX = event.touches[0].clientX - this.elementPosition.left;
            this.startY = event.touches[0].clientY - this.elementPosition.top;
            this.startClientX = event.touches[0].clientX - this.elementPosition.left;
            this.startClientY = event.touches[0].clientY - this.elementPosition.top;
        }
        this.events.emit({ type: 'touchstart' });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.touchmoveHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var touches = event.touches;
        // Swipe
        if (this.detectSwipe(touches) || this.eventType === 'swipe') {
            this.handleSwipe(event);
        }
        // Linear swipe
        if (this.detectLinearSwipe(touches) ||
            this.eventType === 'horizontal-swipe' ||
            this.eventType === 'vertical-swipe') {
            this.handleLinearSwipe(event);
        }
        // Pinch
        if (touches.length === 2 && !this.eventType || this.eventType === 'pinch') {
            this.handlePinch(event);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.touchendHandler = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        this.i = 0;
        this.draggingMode = false;
        /** @type {?} */
        var touches = event.touches;
        if (this.scale < 1) {
            this.scale = 1;
        }
        // Auto Zoom Out
        if (this.autoZoomOut && this.eventType === 'pinch') {
            this.scale = 1;
        }
        this.events.emit({ type: 'touchend' });
        // Double Tap
        if (this.doubleTapDetection() && !this.eventType) {
            this.toggleZoom(event);
            this.events.emit({ type: 'double-tap' });
            return;
        }
        // Limit Zoom
        if (this.limitZoom && this.eventType === 'pinch') {
            this.handleLimitZoom();
        }
        if (this.eventType === 'pinch' || this.eventType === 'swipe') {
            this.alignImage();
        }
        if (this.eventType === 'pinch' ||
            this.eventType === 'swipe' ||
            this.eventType === 'horizontal-swipe' ||
            this.eventType === 'vertical-swipe') {
            this.updateInitialValues();
        }
        this.eventType = 'touchend';
        if (touches && touches.length === 0) {
            this.eventType = '';
        }
    };
    /*
     * Handlers
     */
    /*
         * Handlers
         */
    /**
     * @param {?} index
     * @param {?} touches
     * @return {?}
     */
    PinchZoomComponent.prototype.moveLeft = /*
         * Handlers
         */
    /**
     * @param {?} index
     * @param {?} touches
     * @return {?}
     */
    function (index, touches) {
        return touches[index].clientX - this.elementPosition.left;
    };
    /**
     * @param {?} index
     * @param {?} touches
     * @return {?}
     */
    PinchZoomComponent.prototype.moveTop = /**
     * @param {?} index
     * @param {?} touches
     * @return {?}
     */
    function (index, touches) {
        return touches[index].clientY - this.elementPosition.top;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.handleSwipe = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        if (!this.eventType) {
            this.startX = event.touches[0].clientX - this.elementPosition.left;
            this.startY = event.touches[0].clientY - this.elementPosition.top;
        }
        this.eventType = 'swipe';
        this.events.emit({
            type: 'swipe',
            moveX: this.moveX,
            moveY: this.moveY
        });
        this.moveX = this.initialMoveX + (this.moveLeft(0, event.touches) - this.startX);
        this.moveY = this.initialMoveY + (this.moveTop(0, event.touches) - this.startY);
        this.transformElement(0);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.handlePinch = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        event.preventDefault();
        /** @type {?} */
        var touches = event.touches;
        if (!this.eventType) {
            this.initialDistance = this.getDistance(touches);
            /** @type {?} */
            var moveLeft0 = this.moveLeft(0, touches);
            /** @type {?} */
            var moveLeft1 = this.moveLeft(1, touches);
            /** @type {?} */
            var moveTop0 = this.moveTop(0, touches);
            /** @type {?} */
            var moveTop1 = this.moveTop(1, touches);
            this.moveXC = ((moveLeft0 + moveLeft1) / 2) - this.initialMoveX;
            this.moveYC = ((moveTop0 + moveTop1) / 2) - this.initialMoveY;
        }
        this.eventType = 'pinch';
        this.distance = this.getDistance(touches);
        this.scale = this.initialScale * (this.distance / this.initialDistance);
        this.events.emit({
            type: 'pinch',
            scale: this.scale
        });
        this.moveX = this.initialMoveX - (((this.distance / this.initialDistance) * this.moveXC) - this.moveXC);
        this.moveY = this.initialMoveY - (((this.distance / this.initialDistance) * this.moveYC) - this.moveYC);
        this.transformElement(0);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.handleLinearSwipe = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.linearVerticalSwipe) {
            event.preventDefault();
        }
        this.i++;
        if (this.i > 3) {
            this.eventType = this.getLinearSwipeType(event);
        }
        if (this.eventType === 'horizontal-swipe') {
            this.moveX = this.initialMoveX + ((event.touches[0].clientX - this.elementPosition.left) - this.startX);
            this.moveY = 0;
        }
        if (this.eventType === 'vertical-swipe') {
            this.moveX = 0;
            this.moveY = this.initialMoveY + ((event.touches[0].clientY - this.elementPosition.top) - this.startY);
        }
        if (this.eventType) {
            this.events.emit({
                type: this.eventType,
                moveX: this.moveX,
                moveY: this.moveY
            });
            this.transformElement(0);
        }
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.handleLimitZoom = /**
     * @return {?}
     */
    function () {
        if (this.scale > this.limitZoom) {
            /** @type {?} */
            var imageWidth = this.getImageWidth();
            /** @type {?} */
            var imageHeight = this.getImageHeight();
            /** @type {?} */
            var enlargedImageWidth = imageWidth * this.scale;
            /** @type {?} */
            var enlargedImageHeight = imageHeight * this.scale;
            /** @type {?} */
            var moveXRatio = this.moveX / (enlargedImageWidth - imageWidth);
            /** @type {?} */
            var moveYRatio = this.moveY / (enlargedImageHeight - imageHeight);
            this.scale = this.limitZoom;
            /** @type {?} */
            var newImageWidth = imageWidth * this.scale;
            /** @type {?} */
            var newImageHeight = imageHeight * this.scale;
            this.moveX = -Math.abs((moveXRatio * (newImageWidth - imageWidth)));
            this.moveY = -Math.abs((-moveYRatio * (newImageHeight - imageHeight)));
            this.centeringImage();
            this.transformElement(this.transitionDuration);
        }
    };
    /**
     * @param {?} touches
     * @return {?}
     */
    PinchZoomComponent.prototype.detectSwipe = /**
     * @param {?} touches
     * @return {?}
     */
    function (touches) {
        return touches.length === 1 && this.scale > 1 && !this.eventType;
    };
    /**
     * @param {?} touches
     * @return {?}
     */
    PinchZoomComponent.prototype.detectLinearSwipe = /**
     * @param {?} touches
     * @return {?}
     */
    function (touches) {
        return touches.length === 1 && this.scale === 1 && !this.eventType;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    PinchZoomComponent.prototype.getLinearSwipeType = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.eventType !== 'horizontal-swipe' && this.eventType !== 'vertical-swipe') {
            /** @type {?} */
            var movementX = Math.abs(this.moveLeft(0, event.touches) - this.startClientX);
            /** @type {?} */
            var movementY = Math.abs(this.moveTop(0, event.touches) - this.startClientY);
            if ((movementY * 3) > movementX) {
                return this.linearVerticalSwipe ? 'vertical-swipe' : '';
            }
            else {
                return this.linearHorizontalSwipe ? 'horizontal-swipe' : '';
            }
        }
        else {
            return this.eventType;
        }
    };
    /**
     * @param {?} touches
     * @return {?}
     */
    PinchZoomComponent.prototype.getDistance = /**
     * @param {?} touches
     * @return {?}
     */
    function (touches) {
        return Math.sqrt(Math.pow(touches[0].pageX - touches[1].pageX, 2) + Math.pow(touches[0].pageY - touches[1].pageY, 2));
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.getImageHeight = /**
     * @return {?}
     */
    function () {
        return this.element.getElementsByTagName(this.elementTarget)[0].offsetHeight;
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.getImageWidth = /**
     * @return {?}
     */
    function () {
        return this.element.getElementsByTagName(this.elementTarget)[0].offsetWidth;
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.setBasicStyles = /**
     * @return {?}
     */
    function () {
        this.element.style.display = 'flex';
        this.element.style.height = '100%';
        this.element.style.alignItems = 'center';
        this.element.style.justifyContent = 'center';
        this.element.style.transformOrigin = '0 0';
        this.hostDisplay = 'block';
        this.hostOverflow = 'hidden';
        this.hostHeight = this.containerHeight;
        this.setImageWidth();
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.setImageWidth = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var imgElement = this.element.getElementsByTagName(this.elementTarget);
        if (imgElement.length) {
            imgElement[0].style.maxWidth = '100%';
            imgElement[0].style.maxHeight = '100%';
        }
    };
    /**
     * @param {?=} duration
     * @return {?}
     */
    PinchZoomComponent.prototype.transformElement = /**
     * @param {?=} duration
     * @return {?}
     */
    function (duration) {
        if (duration === void 0) { duration = 50; }
        this.element.style.transition = "all " + duration + "ms";
        this.element.style.transform = "\n            matrix(" + Number(this.scale) + ", 0, 0, " + Number(this.scale) + ", " + Number(this.moveX) + ", " + Number(this.moveY) + ")";
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.doubleTapDetection = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (!this.doubleTap) {
            return false;
        }
        /** @type {?} */
        var currentTime = new Date().getTime();
        /** @type {?} */
        var tapLength = currentTime - this.lastTap;
        clearTimeout(this.doubleTapTimeout);
        if (tapLength < 300 && tapLength > 0) {
            return true;
        }
        else {
            this.doubleTapTimeout = setTimeout((/**
             * @return {?}
             */
            function () {
                clearTimeout(_this.doubleTapTimeout);
            }), 300);
        }
        this.lastTap = currentTime;
    };
    /**
     * @param {?=} event
     * @return {?}
     */
    PinchZoomComponent.prototype.toggleZoom = /**
     * @param {?=} event
     * @return {?}
     */
    function (event) {
        if (event === void 0) { event = false; }
        if (this.initialScale === 1) {
            if (event && event.changedTouches) {
                /** @type {?} */
                var changedTouches = event.changedTouches;
                this.scale = this.initialScale * this.doubleTapScale;
                this.moveX = this.initialMoveX - (changedTouches[0].clientX * (this.doubleTapScale - 1) - this.elementPosition.left);
                this.moveY = this.initialMoveY - (changedTouches[0].clientY * (this.doubleTapScale - 1) - this.elementPosition.top);
            }
            else {
                this.scale = this.initialScale * 2;
                this.moveX = this.initialMoveX - this.element.offsetWidth / 2;
                this.moveY = this.initialMoveY - this.element.offsetHeight / 2;
            }
            this.centeringImage();
            this.updateInitialValues();
            this.transformElement(this.transitionDuration);
            this.events.emit({ type: 'zoom-in' });
        }
        else {
            this.resetScale();
            this.events.emit({ type: 'zoom-out' });
        }
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.resetScale = /**
     * @return {?}
     */
    function () {
        this.scale = 1;
        this.moveX = 0;
        this.moveY = 0;
        this.updateInitialValues();
        this.transformElement(this.transitionDuration);
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.updateInitialValues = /**
     * @return {?}
     */
    function () {
        this.initialScale = this.scale;
        this.initialMoveX = this.moveX;
        this.initialMoveY = this.moveY;
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.centeringImage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var img = this.element.getElementsByTagName(this.elementTarget)[0];
        /** @type {?} */
        var initialMoveX = this.moveX;
        /** @type {?} */
        var initialMoveY = this.moveY;
        if (this.moveY > 0) {
            this.moveY = 0;
        }
        if (this.moveX > 0) {
            this.moveX = 0;
        }
        if (img) {
            this.transitionYRestriction();
            this.transitionXRestriction();
        }
        if (img && this.scale < 1) {
            if (this.moveX < this.element.offsetWidth * (1 - this.scale)) {
                this.moveX = this.element.offsetWidth * (1 - this.scale);
            }
        }
        return initialMoveX !== this.moveX || initialMoveY !== this.moveY;
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.alignImage = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isMoveChanged = this.centeringImage();
        if (isMoveChanged) {
            this.updateInitialValues();
            this.transformElement(this.transitionDuration);
        }
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.transitionYRestriction = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var imgHeight = this.getImageHeight();
        if (imgHeight * this.scale < this.parentElement.offsetHeight) {
            this.moveY = (this.parentElement.offsetHeight - this.element.offsetHeight * this.scale) / 2;
        }
        else {
            /** @type {?} */
            var imgOffsetTop = ((imgHeight - this.element.offsetHeight) * this.scale) / 2;
            if (this.moveY > imgOffsetTop) {
                this.moveY = imgOffsetTop;
            }
            else if ((imgHeight * this.scale + Math.abs(imgOffsetTop) - this.parentElement.offsetHeight) + this.moveY < 0) {
                this.moveY = -(imgHeight * this.scale + Math.abs(imgOffsetTop) - this.parentElement.offsetHeight);
            }
        }
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.transitionXRestriction = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var imgWidth = this.getImageWidth();
        if (imgWidth * this.scale < this.parentElement.offsetWidth) {
            this.moveX = (this.parentElement.offsetWidth - this.element.offsetWidth * this.scale) / 2;
        }
        else {
            /** @type {?} */
            var imgOffsetLeft = ((imgWidth - this.element.offsetWidth) * this.scale) / 2;
            if (this.moveX > imgOffsetLeft) {
                this.moveX = imgOffsetLeft;
            }
            else if ((imgWidth * this.scale + Math.abs(imgOffsetLeft) - this.parentElement.offsetWidth) + this.moveX < 0) {
                this.moveX = -(imgWidth * this.scale + Math.abs(imgOffsetLeft) - this.parentElement.offsetWidth);
            }
        }
    };
    /**
     * @return {?}
     */
    PinchZoomComponent.prototype.getElementPosition = /**
     * @return {?}
     */
    function () {
        this.elementPosition = this.elementRef.nativeElement.getBoundingClientRect();
    };
    /**
     * @param {?} value
     * @param {?=} transitionDuration
     * @return {?}
     */
    PinchZoomComponent.prototype.setMoveX = /**
     * @param {?} value
     * @param {?=} transitionDuration
     * @return {?}
     */
    function (value, transitionDuration) {
        if (transitionDuration === void 0) { transitionDuration = 200; }
        this.moveX = value;
        this.transformElement(transitionDuration);
    };
    /**
     * @param {?} value
     * @param {?=} transitionDuration
     * @return {?}
     */
    PinchZoomComponent.prototype.setMoveY = /**
     * @param {?} value
     * @param {?=} transitionDuration
     * @return {?}
     */
    function (value, transitionDuration) {
        if (transitionDuration === void 0) { transitionDuration = 200; }
        this.moveY = value;
        this.transformElement(transitionDuration);
    };
    PinchZoomComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'pinch-zoom, [pinch-zoom]',
                    template: "<div #content \n\t[class.pz-dragging]=\"isDragging\">\n\t<ng-content></ng-content>\n</div>\n\n<div class=\"pz-zoom-button\"\n\t*ngIf=\"zoomButton && !isTouchScreen\"\n\t(click)=\"toggleZoom()\"\n\t[class.pz-zoom-out]=\"scale > 1\">\n</div>",
                    styles: [":host{position:relative}.pz-dragging{cursor:all-scroll}.pz-zoom-button{position:absolute;left:50%;bottom:16px;margin-left:-22px;z-index:1000;color:#fff;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABVUlEQVR4Ae3PAwxQXRgA0Pvbto1sW2NDts0x27atIdeQrakpY8i23cnGe5nn8epDeO1h+VgeVdRVRJLwsCQ101nX2aWJd8OD8a7Ozrkda6UJ8XnPUsBZy43S2Wz7rs8UDnEZCZjn5+tzb6jqCDgucYhDakAnb4Rb+MdmMCPEYSqYfH2cXfPr/ymcBalDFF84izN+uD7TnHCdXqB7iCI/WByuuy1QbrAiRFEL9L3WlObmc/l7uUHfgn0hivqg47VaXMfluQ/A6RBFeTDmnq39D7aEKNKBXfcMVBVMCtFsB0XvFshbVoBSIZqGYL8/wh10B/u8F6L52E6wU7ZwEx/oC6gV4pHVOXDeIPn95WOZ1bYRsD7EJ79D7m4nmO7dEI+fTHC7o7p6h+uh4pJJB0vscMwKQ+X13uXZ6RGh4vKeeQ8c6nWoJiFadCjRFUXzntbeDc/GaxcAotf7cicflKkAAAAASUVORK5CYII=),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABS0lEQVR4Ae3UA8xWfQCG8afPNrNt240N2TbHbNu2hlxDtqamjCHbdr/s5905b9Z1fN/bdfyPfOZl8ZMSGmipggwvL8loqZsAOKaDb2Ir+UZ/t7zITjlio/nWRsBNm03T33KnHiflw4umAlaJ/ziLo6EL4LL04TTZAf3Eea5JYT9YEk60EMyP2mVxE2QP1vzuJm74P4Z+GBgcLCoN1sfYFwdbgkXNwMj7+4V1fnq6n/0DTgWLWoO+9/c7AwD3s+/B9WBRbTAjxj41OBAsygWOxdg3BPMiwTgMKkbtvrQFVAsjagtOSxKlGwxO+Tbc0HEUHFXomfx7IwHNIuFQ0C1w2zilJfOT/JrbC9gdCY/SzonOUbA49Mgknjme56KBvuaxKizy6WODIy7ZYqKSDx6xxUGq8MPeqlirPqs6RKljqwq6ovCq7r6JvBs+cwdLiOaEU9ek1AAAAABJRU5ErkJggg==),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABVUlEQVR4Ae3PAwxQXRgA0Pvbto1sW2NDts0x27atIdeQrakpY8i23cnGe5nn8epDeO1h+VgeVdRVRJLwsCQ101nX2aWJd8OD8a7Ozrkda6UJ8XnPUsBZy43S2Wz7rs8UDnEZCZjn5+tzb6jqCDgucYhDakAnb4Rb+MdmMCPEYSqYfH2cXfPr/ymcBalDFF84izN+uD7TnHCdXqB7iCI/WByuuy1QbrAiRFEL9L3WlObmc/l7uUHfgn0hivqg47VaXMfluQ/A6RBFeTDmnq39D7aEKNKBXfcMVBVMCtFsB0XvFshbVoBSIZqGYL8/wh10B/u8F6L52E6wU7ZwEx/oC6gV4pHVOXDeIPn95WOZ1bYRsD7EJ79D7m4nmO7dEI+fTHC7o7p6h+uh4pJJB0vscMwKQ+X13uXZ6RGh4vKeeQ8c6nWoJiFadCjRFUXzntbeDc/GaxcAotf7cicflKkAAAAASUVORK5CYII=),url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAQAAABLCVATAAABS0lEQVR4Ae3UA8xWfQCG8afPNrNt240N2TbHbNu2hlxDtqamjCHbdr/s5905b9Z1fN/bdfyPfOZl8ZMSGmipggwvL8loqZsAOKaDb2Ir+UZ/t7zITjlio/nWRsBNm03T33KnHiflw4umAlaJ/ziLo6EL4LL04TTZAf3Eea5JYT9YEk60EMyP2mVxE2QP1vzuJm74P4Z+GBgcLCoN1sfYFwdbgkXNwMj7+4V1fnq6n/0DTgWLWoO+9/c7AwD3s+/B9WBRbTAjxj41OBAsygWOxdg3BPMiwTgMKkbtvrQFVAsjagtOSxKlGwxO+Tbc0HEUHFXomfx7IwHNIuFQ0C1w2zilJfOT/JrbC9gdCY/SzonOUbA49Mgknjme56KBvuaxKizy6WODIy7ZYqKSDx6xxUGq8MPeqlirPqs6RKljqwq6ovCq7r6JvBs+cwdLiOaEU9ek1AAAAABJRU5ErkJggg==);background-color:rgba(0,0,0,.8);background-position:center,-1000px;background-repeat:no-repeat,no-repeat;width:56px;height:56px;border-radius:4px;opacity:.5;cursor:pointer;transition:opacity .1s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pz-zoom-button.pz-zoom-out{background-position:-1000px,center}.pz-zoom-button:hover{opacity:.7}"]
                }] }
    ];
    /** @nocollapse */
    PinchZoomComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }
    ]; };
    PinchZoomComponent.propDecorators = {
        containerHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['height',] }],
        transitionDuration: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['transition-duration',] }],
        doubleTap: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['double-tap',] }],
        doubleTapScale: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['double-tap-scale',] }],
        zoomButton: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['zoom-button',] }],
        linearHorizontalSwipe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['linear-horizontal-swipe',] }],
        linearVerticalSwipe: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['linear-vertical-swipe',] }],
        autoZoomOut: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['auto-zoom-out',] }],
        limitZoom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['limit-zoom',] }],
        id: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] }],
        events: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
        hostDisplay: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.display',] }],
        hostOverflow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.overflow',] }],
        hostHeight: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['style.height',] }],
        contentElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['content',] }],
        onMouseEnter: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousedown', ['$event'],] }],
        onMouseMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:mousemove', ['$event'],] }],
        onMouseUp: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:mouseup', ['$event'],] }],
        onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['window:resize', ['$event'],] }],
        touchstartHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['touchstart', ['$event'],] }],
        touchmoveHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['touchmove', ['$event'],] }],
        touchendHandler: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['touchend', ['$event'],] }]
    };
    return PinchZoomComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var PinchZoomModule = /** @class */ (function () {
    function PinchZoomModule() {
    }
    PinchZoomModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                    declarations: [
                        PinchZoomComponent
                    ],
                    imports: [
                        _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                    ],
                    exports: [
                        PinchZoomComponent
                    ],
                    entryComponents: [
                        PinchZoomComponent
                    ]
                },] }
    ];
    return PinchZoomModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-pinch-zoom.js.map

/***/ }),

/***/ "./src/app/indonesian-map/indonesian-map.page.html":
/*!*********************************************************!*\
  !*** ./src/app/indonesian-map/indonesian-map.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Discover Batik Regions</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button autoHide=\"false\" style=\"color: black;\"></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content fullscreen>\n  <div class=\"photo-thumbnail\">\n    <pinch-zoom>\n      <img src=\"../../assets/image/indonesian_map/indonesian_map.png\" />\n      <img id=\"zoom\" src=\"../../assets/image/indonesian_map/zoom.png\" />\n\n      <ion-icon id=\"pin1\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverAceh($event)\"></ion-icon>\n      <ion-icon id=\"pin2\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverBali($event)\"></ion-icon>\n      <ion-icon id=\"pin3\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverBengkaBelitung($event)\"></ion-icon>\n      <ion-icon id=\"pin4\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverBanten($event)\"></ion-icon>\n      <ion-icon id=\"pin5\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverBengkulu($event)\"></ion-icon>\n      <ion-icon id=\"pin6\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverGorontalo($event)\"></ion-icon>\n      <ion-icon id=\"pin7\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverJabar($event)\"></ion-icon>\n      <ion-icon id=\"pin8\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverJakarta($event)\"></ion-icon>\n      <ion-icon id=\"pin9\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverJambi($event)\"></ion-icon>\n      <ion-icon id=\"pin10\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverJateng($event)\"></ion-icon>\n      <ion-icon id=\"pin11\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverJatim($event)\"></ion-icon>\n      <ion-icon id=\"pin12\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverKalbar($event)\"></ion-icon>\n      <ion-icon id=\"pin13\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverKalimantanTimur($event)\"></ion-icon>\n      <ion-icon id=\"pin14\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverKalimantanUtara($event)\"></ion-icon>\n      <ion-icon id=\"pin15\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverKalsel($event)\"></ion-icon>\n      <ion-icon id=\"pin16\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverKalteng($event)\"></ion-icon>\n      <ion-icon id=\"pin17\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverKepri($event)\"></ion-icon>\n      <ion-icon id=\"pin18\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverLampung($event)\"></ion-icon>\n      <ion-icon id=\"pin19\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverMaluku($event)\"></ion-icon>\n      <ion-icon id=\"pin20\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverMalut($event)\"></ion-icon>\n      <ion-icon id=\"pin21\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverNusaTenggaraBarat($event)\"></ion-icon>\n      <ion-icon id=\"pin22\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverNusaTenggaraTimur($event)\"></ion-icon>\n      <ion-icon id=\"pin23\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverPabar($event)\"></ion-icon>\n      <ion-icon id=\"pin24\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverPapua($event)\"></ion-icon>\n      <ion-icon id=\"pin25\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverRiau($event)\"></ion-icon>\n      <ion-icon id=\"pin26\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverSulbar($event)\"></ion-icon>\n      <ion-icon id=\"pin27\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverSulsel($event)\"></ion-icon>\n      <ion-icon id=\"pin28\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverSulteng($event)\"></ion-icon>\n      <ion-icon id=\"pin29\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverSultra($event)\"></ion-icon>\n      <ion-icon id=\"pin30\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverSulut($event)\"></ion-icon>\n      <ion-icon id=\"pin31\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverSumbar($event)\"></ion-icon>\n      <ion-icon id=\"pin32\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverSumsel($event)\"></ion-icon>\n      <ion-icon id=\"pin33\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverSumut($event)\"></ion-icon>\n      <ion-icon id=\"pin34\" name=\"pin\" color=\"danger\" (click)=\"presentPopoverYogyakarta($event)\"></ion-icon>\n\n    </pinch-zoom>\n  </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/indonesian-map/indonesian-map.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/indonesian-map/indonesian-map.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: white;\n  --ion-color-base: transparent !important; }\n\nion-title {\n  color: black; }\n\nion-icon {\n  width: 10px; }\n\n.photo-thumbnail {\n  position: relative;\n  display: inline-block; }\n\n@-webkit-keyframes blink {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@keyframes blink {\n  0% {\n    opacity: 1; }\n  50% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n#zoom {\n  position: absolute;\n  top: 88%;\n  left: 5%;\n  width: 3%;\n  -webkit-animation: blink 1s;\n          animation: blink 1s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite; }\n\n#pin1 {\n  position: absolute;\n  top: 4%;\n  left: 4.5%; }\n\n#pin2 {\n  position: absolute;\n  top: 79%;\n  left: 43.5%; }\n\n#pin3 {\n  position: absolute;\n  top: 47.5%;\n  left: 28%; }\n\n#pin4 {\n  position: absolute;\n  top: 70%;\n  left: 23%; }\n\n#pin5 {\n  position: absolute;\n  top: 54%;\n  left: 16%; }\n\n#pin6 {\n  position: absolute;\n  top: 27.5%;\n  left: 59.5%; }\n\n#pin7 {\n  position: absolute;\n  top: 70%;\n  left: 27.5%; }\n\n#pin8 {\n  position: absolute;\n  top: 67.8%;\n  left: 25.5%; }\n\n#pin9 {\n  position: absolute;\n  top: 40%;\n  left: 19.2%; }\n\n#pin10 {\n  position: absolute;\n  top: 70.5%;\n  left: 34.5%; }\n\n#pin11 {\n  position: absolute;\n  top: 74%;\n  left: 37%; }\n\n#pin12 {\n  position: absolute;\n  top: 36%;\n  left: 34.5%; }\n\n#pin13 {\n  position: absolute;\n  top: 34%;\n  left: 46%; }\n\n#pin14 {\n  position: absolute;\n  top: 22.5%;\n  left: 44%; }\n\n#pin15 {\n  position: absolute;\n  top: 45%;\n  left: 44.2%; }\n\n#pin16 {\n  position: absolute;\n  top: 45.5%;\n  left: 40%; }\n\n#pin17 {\n  position: absolute;\n  top: 24%;\n  left: 24%; }\n\n#pin18 {\n  position: absolute;\n  top: 59.5%;\n  left: 22%; }\n\n#pin19 {\n  position: absolute;\n  top: 61%;\n  left: 72.5%; }\n\n#pin20 {\n  position: absolute;\n  top: 28.5%;\n  left: 71%; }\n\n#pin21 {\n  position: absolute;\n  top: 82%;\n  left: 48%; }\n\n#pin22 {\n  position: absolute;\n  top: 83%;\n  left: 62%; }\n\n#pin23 {\n  position: absolute;\n  top: 40%;\n  left: 83%; }\n\n#pin24 {\n  position: absolute;\n  top: 58%;\n  left: 93%; }\n\n#pin25 {\n  position: absolute;\n  top: 33%;\n  left: 15%; }\n\n#pin26 {\n  position: absolute;\n  top: 48%;\n  left: 52%; }\n\n#pin27 {\n  position: absolute;\n  top: 56%;\n  left: 54%; }\n\n#pin28 {\n  position: absolute;\n  top: 43%;\n  left: 56%; }\n\n#pin29 {\n  position: absolute;\n  top: 54%;\n  left: 58%; }\n\n#pin30 {\n  position: absolute;\n  top: 27.5%;\n  left: 63%; }\n\n#pin31 {\n  position: absolute;\n  top: 38%;\n  left: 11%; }\n\n#pin32 {\n  position: absolute;\n  top: 47%;\n  left: 20.5%; }\n\n#pin33 {\n  position: absolute;\n  top: 14%;\n  left: 9%; }\n\n#pin34 {\n  position: absolute;\n  top: 77.6%;\n  left: 33.2%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9lbGlhcGVycm9uZS9Eb2N1bWVudHMvU1VQU0kvUHJvZ2V0dG9fRGlwbG9tYS9iYXRpay1tb2JpbGUtYXBwL2lXYXJlQmF0aWsvc3JjL2FwcC9pbmRvbmVzaWFuLW1hcC9pbmRvbmVzaWFuLW1hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBYTtFQUNiLHdDQUFpQixFQUFBOztBQUduQjtFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRTtJQUNFLFVBQVUsRUFBQTtFQUVaO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUEsRUFBQTs7QUFSZDtFQUNFO0lBQ0UsVUFBVSxFQUFBO0VBRVo7SUFDRSxVQUFVLEVBQUE7RUFFWjtJQUNFLFVBQVUsRUFBQSxFQUFBOztBQUlkO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixRQUFRO0VBQ1IsU0FBUztFQUNULDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsMkNBQW1DO1VBQW5DLG1DQUFtQyxFQUFBOztBQUlyQztFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsVUFBVSxFQUFBOztBQUlaO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXLEVBQUE7O0FBSWI7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFJWDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUlYO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTLEVBQUE7O0FBSVg7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFdBQVcsRUFBQTs7QUFJYjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUdiO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixXQUFXLEVBQUE7O0FBSWI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUFJYjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVyxFQUFBOztBQUliO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTLEVBQUE7O0FBSVg7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUFJYjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUlYO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTLEVBQUE7O0FBSVg7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVcsRUFBQTs7QUFJYjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUyxFQUFBOztBQUlYO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTLEVBQUE7O0FBSVg7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFJWDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVyxFQUFBOztBQUliO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixTQUFTLEVBQUE7O0FBSVg7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFJWDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUlYO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTLEVBQUE7O0FBSVg7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFJWDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUlYO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTLEVBQUE7O0FBSVg7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVMsRUFBQTs7QUFJWDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUlYO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTLEVBQUE7O0FBSVg7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVMsRUFBQTs7QUFJWDtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUyxFQUFBOztBQUlYO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXLEVBQUE7O0FBSWI7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFFBQVEsRUFBQTs7QUFJVjtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaW5kb25lc2lhbi1tYXAvaW5kb25lc2lhbi1tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICAtLWlvbi1jb2xvci1iYXNlOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xufVxuXG5pb24tdGl0bGUge1xuICBjb2xvcjogYmxhY2s7XG59XG5cbmlvbi1pY29uIHtcbiAgd2lkdGg6IDEwcHg7XG59XG5cbi5waG90by10aHVtYm5haWwge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuQGtleWZyYW1lcyBibGluayB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG4gIDUwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG5cbiN6b29tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDg4JTtcbiAgbGVmdDogNSU7XG4gIHdpZHRoOiAzJTtcbiAgYW5pbWF0aW9uOiBibGluayAxcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbi8vYWNlaFxuI3BpbjEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNCU7XG4gIGxlZnQ6IDQuNSU7XG59XG5cbi8vYmFsaVxuI3BpbjIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzklO1xuICBsZWZ0OiA0My41JTtcbn1cblxuLy9iYW5na2EtYmVsaXR1bmdcbiNwaW4zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQ3LjUlO1xuICBsZWZ0OiAyOCU7XG59XG5cbi8vYmFudGVuXG4jcGluNCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3MCU7XG4gIGxlZnQ6IDIzJTtcbn1cblxuLy9iZW5na3VsdVxuI3BpbjUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTQlO1xuICBsZWZ0OiAxNiU7XG59XG5cbi8vZ29yb250YWxvXG4jcGluNiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyNy41JTtcbiAgbGVmdDogNTkuNSU7XG59XG5cbi8vamFiYXJcbiNwaW43IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDcwJTtcbiAgbGVmdDogMjcuNSU7XG59XG4vL2pha2FydGFcbiNwaW44IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDY3LjglO1xuICBsZWZ0OiAyNS41JTtcbn1cblxuLy9qYW1iaVxuI3Bpbjkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiAxOS4yJTtcbn1cblxuLy9qYXRlbmdcbiNwaW4xMCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3MC41JTtcbiAgbGVmdDogMzQuNSU7XG59XG5cbi8vamF0aW1cbiNwaW4xMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA3NCU7XG4gIGxlZnQ6IDM3JTtcbn1cblxuLy9rYWxiYXJcbiNwaW4xMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNiU7XG4gIGxlZnQ6IDM0LjUlO1xufVxuXG4vL2thbGltYW50YW4gdGltdXJcbiNwaW4xMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzNCU7XG4gIGxlZnQ6IDQ2JTtcbn1cblxuLy9rYWxpbWFudGFuIHV0YXJhXG4jcGluMTQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjIuNSU7XG4gIGxlZnQ6IDQ0JTtcbn1cblxuLy9rYWxpbWFudGFuIHNlYWx0YW5cbiNwaW4xNSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDQ0LjIlO1xufVxuXG4vL2thbHRlbmdcbiNwaW4xNiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NS41JTtcbiAgbGVmdDogNDAlO1xufVxuXG4vL2tlcHJpXG4jcGluMTcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjQlO1xuICBsZWZ0OiAyNCU7XG59XG5cbi8vbGFtcHVuZ1xuI3BpbjE4IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU5LjUlO1xuICBsZWZ0OiAyMiU7XG59XG5cbi8vbWFsdWt1XG4jcGluMTkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNjElO1xuICBsZWZ0OiA3Mi41JTtcbn1cblxuLy9tYWx1dFxuI3BpbjIwIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDI4LjUlO1xuICBsZWZ0OiA3MSU7XG59XG5cbi8vbnVzc2EgdGVuZ2dhcmEgYmFyYXRcbiNwaW4yMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA4MiU7XG4gIGxlZnQ6IDQ4JTtcbn1cblxuLy9udXNzYSB0ZW5nZ2FyYSB0aW11clxuI3BpbjIyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDgzJTtcbiAgbGVmdDogNjIlO1xufVxuXG4vL3BhYmFyXG4jcGluMjMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDAlO1xuICBsZWZ0OiA4MyU7XG59XG5cbi8vcGFwdWFcbiNwaW4yNCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1OCU7XG4gIGxlZnQ6IDkzJTtcbn1cblxuLy9yaWF1XG4jcGluMjUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMzMlO1xuICBsZWZ0OiAxNSU7XG59XG5cbi8vc3VsYmFyXG4jcGluMjYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNDglO1xuICBsZWZ0OiA1MiU7XG59XG5cbi8vc3Vsc2VsXG4jcGluMjcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTYlO1xuICBsZWZ0OiA1NCU7XG59XG5cbi8vc3VsdGVuZ1xuI3BpbjI4IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDQzJTtcbiAgbGVmdDogNTYlO1xufVxuXG4vL3N1bHRyYVxuI3BpbjI5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDU0JTtcbiAgbGVmdDogNTglO1xufVxuXG4vL3N1bHV0XG4jcGluMzAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjcuNSU7XG4gIGxlZnQ6IDYzJTtcbn1cblxuLy9zdW1iYXJcbiNwaW4zMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzOCU7XG4gIGxlZnQ6IDExJTtcbn1cblxuLy9zdW1zZWxcbiNwaW4zMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NyU7XG4gIGxlZnQ6IDIwLjUlO1xufVxuXG4vL3N1bXV0XG4jcGluMzMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTQlO1xuICBsZWZ0OiA5JTtcbn1cblxuLy95b2d5YWthcnRhXG4jcGluMzQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNzcuNiU7XG4gIGxlZnQ6IDMzLjIlO1xufVxuIl19 */"

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
/* harmony import */ var _popover_popover_bengka_belitung_popover_bengka_belitung_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../popover/popover-bengka-belitung/popover-bengka-belitung.component */ "./src/app/popover/popover-bengka-belitung/popover-bengka-belitung.component.ts");
/* harmony import */ var _popover_popover_jakarta_popover_jakarta_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../popover/popover-jakarta/popover-jakarta.component */ "./src/app/popover/popover-jakarta/popover-jakarta.component.ts");
/* harmony import */ var _popover_popover_banten_popover_banten_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../popover/popover-banten/popover-banten.component */ "./src/app/popover/popover-banten/popover-banten.component.ts");
/* harmony import */ var _popover_popover_gorontalo_popover_gorontalo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../popover/popover-gorontalo/popover-gorontalo.component */ "./src/app/popover/popover-gorontalo/popover-gorontalo.component.ts");
/* harmony import */ var _popover_popover_bengkulu_popover_bengkulu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../popover/popover-bengkulu/popover-bengkulu.component */ "./src/app/popover/popover-bengkulu/popover-bengkulu.component.ts");
/* harmony import */ var _popover_popover_jabar_popover_jabar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../popover/popover-jabar/popover-jabar.component */ "./src/app/popover/popover-jabar/popover-jabar.component.ts");
/* harmony import */ var _popover_popover_jambi_popover_jambi_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../popover/popover-jambi/popover-jambi.component */ "./src/app/popover/popover-jambi/popover-jambi.component.ts");
/* harmony import */ var _popover_popover_jateng_popover_jateng_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../popover/popover-jateng/popover-jateng.component */ "./src/app/popover/popover-jateng/popover-jateng.component.ts");
/* harmony import */ var _popover_popover_jatim_popover_jatim_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../popover/popover-jatim/popover-jatim.component */ "./src/app/popover/popover-jatim/popover-jatim.component.ts");
/* harmony import */ var _popover_popover_kalbar_popover_kalbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../popover/popover-kalbar/popover-kalbar.component */ "./src/app/popover/popover-kalbar/popover-kalbar.component.ts");
/* harmony import */ var _popover_popover_kalimantan_timur_popover_kalimantan_timur_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../popover/popover-kalimantan-timur/popover-kalimantan-timur.component */ "./src/app/popover/popover-kalimantan-timur/popover-kalimantan-timur.component.ts");
/* harmony import */ var _popover_popover_kalimantan_utara_popover_kalimantan_utara_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../popover/popover-kalimantan-utara/popover-kalimantan-utara.component */ "./src/app/popover/popover-kalimantan-utara/popover-kalimantan-utara.component.ts");
/* harmony import */ var _popover_popover_kalsel_popover_kalsel_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../popover/popover-kalsel/popover-kalsel.component */ "./src/app/popover/popover-kalsel/popover-kalsel.component.ts");
/* harmony import */ var _popover_popover_kalteng_popover_kalteng_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../popover/popover-kalteng/popover-kalteng.component */ "./src/app/popover/popover-kalteng/popover-kalteng.component.ts");
/* harmony import */ var _popover_popover_kepri_popover_kepri_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../popover/popover-kepri/popover-kepri.component */ "./src/app/popover/popover-kepri/popover-kepri.component.ts");
/* harmony import */ var _popover_popover_lampung_popover_lampung_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../popover/popover-lampung/popover-lampung.component */ "./src/app/popover/popover-lampung/popover-lampung.component.ts");
/* harmony import */ var _popover_popover_maluku_popover_maluku_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../popover/popover-maluku/popover-maluku.component */ "./src/app/popover/popover-maluku/popover-maluku.component.ts");
/* harmony import */ var _popover_popover_malut_popover_malut_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../popover/popover-malut/popover-malut.component */ "./src/app/popover/popover-malut/popover-malut.component.ts");
/* harmony import */ var _popover_popover_nusa_tenggara_barat_popover_nusa_tenggara_barat_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../popover/popover-nusa-tenggara-barat/popover-nusa-tenggara-barat.component */ "./src/app/popover/popover-nusa-tenggara-barat/popover-nusa-tenggara-barat.component.ts");
/* harmony import */ var _popover_popover_nusa_tenggara_timur_popover_nusa_tenggara_timur_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../popover/popover-nusa-tenggara-timur/popover-nusa-tenggara-timur.component */ "./src/app/popover/popover-nusa-tenggara-timur/popover-nusa-tenggara-timur.component.ts");
/* harmony import */ var _popover_popover_pabar_popover_pabar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../popover/popover-pabar/popover-pabar.component */ "./src/app/popover/popover-pabar/popover-pabar.component.ts");
/* harmony import */ var _popover_popover_papua_popover_papua_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../popover/popover-papua/popover-papua.component */ "./src/app/popover/popover-papua/popover-papua.component.ts");
/* harmony import */ var _popover_popover_riau_popover_riau_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../popover/popover-riau/popover-riau.component */ "./src/app/popover/popover-riau/popover-riau.component.ts");
/* harmony import */ var _popover_popover_sulbar_popover_sulbar_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../popover/popover-sulbar/popover-sulbar.component */ "./src/app/popover/popover-sulbar/popover-sulbar.component.ts");
/* harmony import */ var _popover_popover_sulsel_popover_sulsel_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../popover/popover-sulsel/popover-sulsel.component */ "./src/app/popover/popover-sulsel/popover-sulsel.component.ts");
/* harmony import */ var _popover_popover_sulteng_popover_sulteng_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../popover/popover-sulteng/popover-sulteng.component */ "./src/app/popover/popover-sulteng/popover-sulteng.component.ts");
/* harmony import */ var _popover_popover_sultra_popover_sultra_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../popover/popover-sultra/popover-sultra.component */ "./src/app/popover/popover-sultra/popover-sultra.component.ts");
/* harmony import */ var _popover_popover_sulut_popover_sulut_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../popover/popover-sulut/popover-sulut.component */ "./src/app/popover/popover-sulut/popover-sulut.component.ts");
/* harmony import */ var _popover_popover_sumbar_popover_sumbar_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../popover/popover-sumbar/popover-sumbar.component */ "./src/app/popover/popover-sumbar/popover-sumbar.component.ts");
/* harmony import */ var _popover_popover_sumsel_popover_sumsel_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../popover/popover-sumsel/popover-sumsel.component */ "./src/app/popover/popover-sumsel/popover-sumsel.component.ts");
/* harmony import */ var _popover_popover_sumut_popover_sumut_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../popover/popover-sumut/popover-sumut.component */ "./src/app/popover/popover-sumut/popover-sumut.component.ts");
/* harmony import */ var _popover_popover_yogyakarta_popover_yogyakarta_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../popover/popover-yogyakarta/popover-yogyakarta.component */ "./src/app/popover/popover-yogyakarta/popover-yogyakarta.component.ts");








































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
    // Aceh
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
    // Bali
    IndonesianMapPage.prototype.presentPopoverBali = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_bali_popover_bali_component__WEBPACK_IMPORTED_MODULE_5__["PopoverBaliComponent"],
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
    // Bengka-Belitung
    IndonesianMapPage.prototype.presentPopoverBengkaBelitung = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_bengka_belitung_popover_bengka_belitung_component__WEBPACK_IMPORTED_MODULE_7__["PopoverBengkaBelitungComponent"],
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
    // Banten
    IndonesianMapPage.prototype.presentPopoverBanten = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_banten_popover_banten_component__WEBPACK_IMPORTED_MODULE_9__["PopoverBantenComponent"],
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
    // Bengkulu
    IndonesianMapPage.prototype.presentPopoverBengkulu = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_bengkulu_popover_bengkulu_component__WEBPACK_IMPORTED_MODULE_11__["PopoverBengkuluComponent"],
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
    // Gorontalo
    IndonesianMapPage.prototype.presentPopoverGorontalo = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_gorontalo_popover_gorontalo_component__WEBPACK_IMPORTED_MODULE_10__["PopoverGorontaloComponent"],
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
    // Jabar
    IndonesianMapPage.prototype.presentPopoverJabar = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_jabar_popover_jabar_component__WEBPACK_IMPORTED_MODULE_12__["PopoverJabarComponent"],
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
    // Jakarta
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
    // Jambi
    IndonesianMapPage.prototype.presentPopoverJambi = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_jambi_popover_jambi_component__WEBPACK_IMPORTED_MODULE_13__["PopoverJambiComponent"],
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
    // Jateng
    IndonesianMapPage.prototype.presentPopoverJateng = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_jateng_popover_jateng_component__WEBPACK_IMPORTED_MODULE_14__["PopoverJatengComponent"],
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
    // Jatim
    IndonesianMapPage.prototype.presentPopoverJatim = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_jatim_popover_jatim_component__WEBPACK_IMPORTED_MODULE_15__["PopoverJatimComponent"],
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
    // Kalbar
    IndonesianMapPage.prototype.presentPopoverKalbar = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_kalbar_popover_kalbar_component__WEBPACK_IMPORTED_MODULE_16__["PopoverKalbarComponent"],
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
    // Kalimantan Timur
    IndonesianMapPage.prototype.presentPopoverKalimantanTimur = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_kalimantan_timur_popover_kalimantan_timur_component__WEBPACK_IMPORTED_MODULE_17__["PopoverKalimantanTimurComponent"],
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
    // Kalimantan Utara
    IndonesianMapPage.prototype.presentPopoverKalimantanUtara = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_kalimantan_utara_popover_kalimantan_utara_component__WEBPACK_IMPORTED_MODULE_18__["PopoverKalimantanUtaraComponent"],
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
    // Kalsel
    IndonesianMapPage.prototype.presentPopoverKalsel = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_kalsel_popover_kalsel_component__WEBPACK_IMPORTED_MODULE_19__["PopoverKalselComponent"],
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
    // Kalteng
    IndonesianMapPage.prototype.presentPopoverKalteng = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_kalteng_popover_kalteng_component__WEBPACK_IMPORTED_MODULE_20__["PopoverKaltengComponent"],
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
    // Kepri
    IndonesianMapPage.prototype.presentPopoverKepri = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_kepri_popover_kepri_component__WEBPACK_IMPORTED_MODULE_21__["PopoverKepriComponent"],
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
    // Lampung
    IndonesianMapPage.prototype.presentPopoverLampung = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_lampung_popover_lampung_component__WEBPACK_IMPORTED_MODULE_22__["PopoverLampungComponent"],
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
    // Maluku
    IndonesianMapPage.prototype.presentPopoverMaluku = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_maluku_popover_maluku_component__WEBPACK_IMPORTED_MODULE_23__["PopoverMalukuComponent"],
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
    // Malut
    IndonesianMapPage.prototype.presentPopoverMalut = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_malut_popover_malut_component__WEBPACK_IMPORTED_MODULE_24__["PopoverMalutComponent"],
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
    // Nusa Tenggara Barat
    IndonesianMapPage.prototype.presentPopoverNusaTenggaraBarat = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_nusa_tenggara_barat_popover_nusa_tenggara_barat_component__WEBPACK_IMPORTED_MODULE_25__["PopoverNusaTenggaraBaratComponent"],
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
    // Nusa Tenggara Timur
    IndonesianMapPage.prototype.presentPopoverNusaTenggaraTimur = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_nusa_tenggara_timur_popover_nusa_tenggara_timur_component__WEBPACK_IMPORTED_MODULE_26__["PopoverNusaTenggaraTimurComponent"],
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
    // Pabar
    IndonesianMapPage.prototype.presentPopoverPabar = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_pabar_popover_pabar_component__WEBPACK_IMPORTED_MODULE_27__["PopoverPabarComponent"],
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
    // Papua
    IndonesianMapPage.prototype.presentPopoverPapua = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_papua_popover_papua_component__WEBPACK_IMPORTED_MODULE_28__["PopoverPapuaComponent"],
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
    // Riau
    IndonesianMapPage.prototype.presentPopoverRiau = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_riau_popover_riau_component__WEBPACK_IMPORTED_MODULE_29__["PopoverRiauComponent"],
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
    // Sulbar
    IndonesianMapPage.prototype.presentPopoverSulbar = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_sulbar_popover_sulbar_component__WEBPACK_IMPORTED_MODULE_30__["PopoverSulbarComponent"],
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
    // Sulsel
    IndonesianMapPage.prototype.presentPopoverSulsel = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_sulsel_popover_sulsel_component__WEBPACK_IMPORTED_MODULE_31__["PopoverSulselComponent"],
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
    // Sulteng
    IndonesianMapPage.prototype.presentPopoverSulteng = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_sulteng_popover_sulteng_component__WEBPACK_IMPORTED_MODULE_32__["PopoverSultengComponent"],
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
    // Sultra
    IndonesianMapPage.prototype.presentPopoverSultra = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_sultra_popover_sultra_component__WEBPACK_IMPORTED_MODULE_33__["PopoverSultraComponent"],
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
    // Sulut
    IndonesianMapPage.prototype.presentPopoverSulut = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_sulut_popover_sulut_component__WEBPACK_IMPORTED_MODULE_34__["PopoverSulutComponent"],
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
    // Sumbar
    IndonesianMapPage.prototype.presentPopoverSumbar = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_sumbar_popover_sumbar_component__WEBPACK_IMPORTED_MODULE_35__["PopoverSumbarComponent"],
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
    // Sumsel
    IndonesianMapPage.prototype.presentPopoverSumsel = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_sumsel_popover_sumsel_component__WEBPACK_IMPORTED_MODULE_36__["PopoverSumselComponent"],
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
    // Sumut
    IndonesianMapPage.prototype.presentPopoverSumut = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_sumut_popover_sumut_component__WEBPACK_IMPORTED_MODULE_37__["PopoverSumutComponent"],
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
    // Yogyakarta
    IndonesianMapPage.prototype.presentPopoverYogyakarta = function (event) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var popover;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: _popover_popover_yogyakarta_popover_yogyakarta_component__WEBPACK_IMPORTED_MODULE_38__["PopoverYogyakartaComponent"],
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
//# sourceMappingURL=default~indonesian-map-indonesian-map-module~regions-bali-details-bali-details-module~regions-jakart~74dd5194.js.map