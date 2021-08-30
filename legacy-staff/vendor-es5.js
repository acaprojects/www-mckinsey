function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendor"], {
  /***/
  "../../node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js":
  /*!****************************************************************************************************************************************************************!*\
    !*** /home/runner/work/mckinsey-converge/mckinsey-converge/node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js ***!
    \****************************************************************************************************************************************************************/

  /*! exports provided: ACA_CUSTOM_EVENTS_MODULE, ACustomEventsModule, LibraryModule, ɵa, ɵb */

  /***/
  function node_modulesAcaprojectsNgxCustomEvents__ivy_ngcc__Fesm2015AcaprojectsNgxCustomEventsJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACA_CUSTOM_EVENTS_MODULE", function () {
      return LibraryModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACustomEventsModule", function () {
      return LibraryModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibraryModule", function () {
      return LibraryModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return EventFeedbackComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return TappedDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dayjs */
    "../../node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var _c0 = ["feedback", ""];
    var _c1 = ["*"];

    var EventFeedbackComponent = /*#__PURE__*/function () {
      /**
       * @param {?} element
       * @param {?} renderer
       */
      function EventFeedbackComponent(element, renderer) {
        _classCallCheck(this, EventFeedbackComponent);

        this.element = element;
        this.renderer = renderer;
        /**
         * CSS class to add to the root element of the component
         */

        this.klass = 'default';
        /**
         * Whether feedback radiates from the center of the element or the event location
         */

        this.center = false;
        /**
         * Offset position of the feedback element
         */

        this.position = {
          left: '50%',
          top: '50%'
        };
        /**
         * Size of the feedback element
         */

        this.size = 64;
      }
      /**
       * @param {?} e
       * @return {?}
       */


      _createClass2(EventFeedbackComponent, [{
        key: "handleMouse",
        value: function handleMouse(e) {
          this.handleEvent(e);
        }
        /**
         * @param {?} e
         * @return {?}
         */

      }, {
        key: "handleTouch",
        value: function handleTouch(e) {
          this.handleEvent(e);
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this2 = this;

          setTimeout(
          /**
          * @return {?}
          */
          function () {
            if (_this2.element && _this2.element.nativeElement) {
              /** @type {?} */
              var el = _this2.element.nativeElement;
              _this2.cached_box = el.getBoundingClientRect();
              _this2.size = Math.ceil(Math.max(_this2.cached_box.height, _this2.cached_box.width) * 1.5);
            }
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Clear event listeners
          if (this.mouse_release_cancel) {
            this.mouse_release_cancel();
            this.mouse_release_cancel = null;
          }

          if (this.touch_release_cancel) {
            this.touch_release_cancel();
            this.touch_release_cancel = null;
          }
        }
        /**
         * Handle touchstart/mousedown event
         * @private
         * @param {?} event Event to handle
         * @return {?}
         */

      }, {
        key: "handleEvent",
        value: function handleEvent(event) {
          var _this3 = this;

          this.cancelled = false;
          /** @type {?} */

          var center = {
            x: window.TouchEvent && event instanceof TouchEvent ? event.touches[0].clientX :
            /** @type {?} */
            event.clientX,
            y: window.TouchEvent && event instanceof TouchEvent ? event.touches[0].clientY :
            /** @type {?} */
            event.clientY
          };
          this.show = true;

          if (!this.cached_box) {
            this.cached_box = this.element.nativeElement.getBoundingClientRect();
            this.size = Math.ceil(Math.max(this.cached_box.height, this.cached_box.width) * 1.5);
          }

          this.position = !this.center ? {
            top: "".concat(center.y - this.cached_box.top, "px"),
            left: "".concat(center.x - this.cached_box.left, "px")
          } : {
            top: '50%',
            left: '50%'
          };
          this.mouse_release_cancel = this.renderer.listen('window', 'mouseup',
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return _this3.handleRelease(e);
          });
          this.touch_release_cancel = this.renderer.listen('window', 'touchend',
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return _this3.handleRelease(e);
          });
          this.transitioning = true;
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this3.transitioning = false;

            if (_this3.cancelled) {
              _this3.show = false;
            }
          }, 350);
        }
        /**
         * Handle touchend/mouseup event
         * @private
         * @param {?} event Event to handle
         * @return {?}
         */

      }, {
        key: "handleRelease",
        value: function handleRelease(event) {
          if (!this.transitioning) {
            this.show = false;
          } else {
            this.cancelled = true;
          }

          if (this.mouse_release_cancel) {
            this.mouse_release_cancel();
            this.mouse_release_cancel = null;
          }

          if (this.touch_release_cancel) {
            this.touch_release_cancel();
            this.touch_release_cancel = null;
          }
        }
      }]);

      return EventFeedbackComponent;
    }();

    EventFeedbackComponent.ɵfac = function EventFeedbackComponent_Factory(t) {
      return new (t || EventFeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    EventFeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EventFeedbackComponent,
      selectors: [["", "feedback", ""]],
      hostBindings: function EventFeedbackComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function EventFeedbackComponent_mousedown_HostBindingHandler($event) {
            return ctx.handleMouse($event);
          })("touchstart", function EventFeedbackComponent_touchstart_HostBindingHandler($event) {
            return ctx.handleTouch($event);
          });
        }
      },
      inputs: {
        klass: "klass",
        center: "center"
      },
      attrs: _c0,
      ngContentSelectors: _c1,
      decls: 2,
      vars: 14,
      template: function EventFeedbackComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("event-feedback" + (ctx.klass ? " " + ctx.klass : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx.position.top)("left", ctx.position.left)("height", ctx.size + "px")("width", ctx.size + "px");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.show)("hide", ctx.show === false);
        }
      },
      styles: ["[_nghost-%COMP%]{position:relative;overflow:hidden}.event-feedback[_ngcontent-%COMP%]{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.1);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0;pointer-events:none}.event-feedback.show[_ngcontent-%COMP%]{-webkit-animation:.5s feedback;animation:.5s feedback;opacity:1}.event-feedback.hide[_ngcontent-%COMP%]{-webkit-animation:.5s fadeout;animation:.5s fadeout}.event-feedback.light[_ngcontent-%COMP%]{background-color:rgba(255,255,255,.1)}@-webkit-keyframes feedback{0%{-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);opacity:0}100%{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:1}}@keyframes feedback{0%{-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);opacity:0}100%{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:1}}@-webkit-keyframes fadeout{0%{opacity:1}100%{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:0}}@keyframes fadeout{0%{opacity:1}100%{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:0}}"]
    });
    /** @nocollapse */

    EventFeedbackComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    EventFeedbackComponent.propDecorators = {
      klass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      center: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      handleMouse: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['mousedown', ['$event']]
      }],
      handleTouch: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
        args: ['touchstart', ['$event']]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventFeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: '[feedback]',
          template: "<ng-content></ng-content>\n<div\n    [class]=\"'event-feedback' + (klass ? ' ' + klass : '')\"\n    [style.top]=\"position.top\"\n    [style.left]=\"position.left\"\n    [style.height]=\"size + 'px'\"\n    [style.width]=\"size + 'px'\"\n    [class.show]=\"show\"\n    [class.hide]=\"show === false\"\n></div>\n",
          styles: [":host{position:relative;overflow:hidden}.event-feedback{position:absolute;border-radius:100%;background-color:rgba(0,0,0,.1);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0;pointer-events:none}.event-feedback.show{-webkit-animation:.5s feedback;animation:.5s feedback;opacity:1}.event-feedback.hide{-webkit-animation:.5s fadeout;animation:.5s fadeout}.event-feedback.light{background-color:rgba(255,255,255,.1)}@-webkit-keyframes feedback{0%{-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);opacity:0}100%{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:1}}@keyframes feedback{0%{-webkit-transform:translate(-50%,-50%) scale(0);transform:translate(-50%,-50%) scale(0);opacity:0}100%{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:1}}@-webkit-keyframes fadeout{0%{opacity:1}100%{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:0}}@keyframes fadeout{0%{opacity:1}100%{-webkit-transform:translate(-50%,-50%) scale(1);transform:translate(-50%,-50%) scale(1);opacity:0}}"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        klass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        center: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        handleMouse: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['mousedown', ['$event']]
        }],
        handleTouch: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['touchstart', ['$event']]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TappedDirective = /*#__PURE__*/function () {
      /**
       * @param {?} el
       * @param {?} renderer
       */
      function TappedDirective(el, renderer) {
        _classCallCheck(this, TappedDirective);

        this.el = el;
        this.renderer = renderer;
        /**
         * Event emitter for tapped user events
         */

        this.tapped = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Event emitter for touchrelease user events
         */

        this.touchrelease = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Pointer movement tolerance for event in pixels
         */

        this.tolerance = 40;
        /**
         * Maximum delay in millisecond that the event is cancelled
         */

        this.max_delay = 1000;
        /**
         * Pointer initiation point
         */

        this.start = {
          x: -999,
          y: -999
        };
        /**
         * Pointer initiation point
         */

        this.timer = null;
        /**
         * Store for event timer
         */

        this.event_timer = null;
      }
      /**
       * @return {?}
       */


      _createClass2(TappedDirective, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          if (this.el && this.el.nativeElement) {
            this.mouse_listener = this.renderer.listen(this.el.nativeElement, 'mousedown',
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return _this4.handleHold(e);
            });
            this.touch_listener = this.renderer.listen(this.el.nativeElement, 'touchstart',
            /**
            * @param {?} e
            * @return {?}
            */
            function (e) {
              return _this4.handleHold(e);
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.mouse_listener) {
            this.mouse_listener();
            this.mouse_listener = null;
          }

          if (this.touch_listener) {
            this.touch_listener();
            this.touch_listener = null;
          }

          this.remove();
          this.start = {
            x: -999,
            y: -999
          };
        }
        /**
         * Remove event listeners for "tapped"/"touchrelease" event handling
         * @return {?}
         */

      }, {
        key: "remove",
        value: function remove() {
          if (this.mouse_cancel) {
            this.mouse_cancel();
            this.mouse_cancel = null;
          }

          if (this.touch_cancel) {
            this.touch_cancel();
            this.touch_cancel = null;
          }
        }
        /**
         * Handle start of "tapped"/"touchrelease" event
         * @param {?} event Start event object
         * @return {?}
         */

      }, {
        key: "handleHold",
        value: function handleHold(event) {
          var _this5 = this;

          this.remove();
          /** @type {?} */

          var center = {
            x: window.TouchEvent && event instanceof TouchEvent ? event.touches[0].clientX :
            /** @type {?} */
            event.clientX,
            y: window.TouchEvent && event instanceof TouchEvent ? event.touches[0].clientY :
            /** @type {?} */
            event.clientY
          };
          this.start = center;
          this.mouse_cancel = this.renderer.listen(window, 'mouseup',
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return _this5.handleRelease(e);
          });
          this.touch_cancel = this.renderer.listen(window, 'touchend',
          /**
          * @param {?} e
          * @return {?}
          */
          function (e) {
            return _this5.handleRelease(e);
          }); // Add timeout for ending the event

          this.timer =
          /** @type {?} */
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this5.remove();
          }, this.max_delay);
        }
        /**
         * Handle end of "tapped"/"touchrelease" event
         * @param {?} event End event object
         * @return {?}
         */

      }, {
        key: "handleRelease",
        value: function handleRelease(event) {
          var _this6 = this;

          if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
          }

          this.timer =
          /** @type {?} */
          setTimeout(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            var start = _this6.start;
            /** @type {?} */

            var center = {
              x: window.TouchEvent && event instanceof TouchEvent ? event.touches[0].clientX :
              /** @type {?} */
              event.clientX,
              y: window.TouchEvent && event instanceof TouchEvent ? event.touches[0].clientY :
              /** @type {?} */
              event.clientY
            };
            /** @type {?} */

            var distance = Math.sqrt(Math.pow(center.x - start.x, 2) + (center.y - start.y, 2)); // Emit event if the distance is within the tolerence

            if (distance < _this6.tolerance) {
              if (_this6.event_timer) {
                clearTimeout(_this6.event_timer);
                _this6.event_timer = null;
              }

              _this6.event_timer =
              /** @type {?} */
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                _this6.remove();

                _this6.tapped.emit(event);

                _this6.touchrelease.emit(event);
              }, 100);
            }

            _this6.start = {
              x: -999,
              y: -999
            };
          }, 50);
        }
      }]);

      return TappedDirective;
    }();

    TappedDirective.ɵfac = function TappedDirective_Factory(t) {
      return new (t || TappedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    TappedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: TappedDirective,
      selectors: [["", "tapped", ""], ["", "touchrelease", ""]],
      outputs: {
        tapped: "tapped",
        touchrelease: "touchrelease"
      }
    });
    /** @nocollapse */

    TappedDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
      }];
    };

    TappedDirective.propDecorators = {
      tapped: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      touchrelease: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TappedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[tapped] , [touchrelease]',
          outputs: ['tapped', 'touchrelease']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        tapped: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        touchrelease: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var LIB_NAME = 'Custom Events';
    /**
     * Log formatted version information for the library
     * @param {?} version
     * @param {?} build
     * @param {?=} out
     * @return {?}
     */

    function version(version, build) {
      var out = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'debug';

      /** @type {?} */
      var COLOURS = ['color: #f44336', "color: #9c27b0", 'color:rgba(0,0,0,0.87)'];

      if (hasColours()) {
        var _console2;

        (_console2 = console)[out].apply(_console2, ["%c[ACA]%c[LIB] %c".concat(LIB_NAME, " - ").concat(version, " | ").concat(build)].concat(COLOURS));
      } else {
        console[out]("[ACA][LIB] ".concat(LIB_NAME, " - ").concat(version, " | ").concat(build));
      }
    }
    /**
     * Whether the browser console supports CSS colours
     * @return {?}
     */


    function hasColours() {
      /** @type {?} */
      var doc =
      /** @type {?} */
      document;
      return !(doc.documentMode || /Edge/.test(navigator.userAgent));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var dayjs = dayjs__WEBPACK_IMPORTED_MODULE_1__;

    var LibraryModule = function LibraryModule() {
      _classCallCheck(this, LibraryModule);

      this.build = dayjs();

      if (!LibraryModule.init) {
        /** @type {?} */
        var now = dayjs();
        LibraryModule.init = true;
        /** @type {?} */

        var build = now.isSame(this.build, 'd') ? "Today at ".concat(this.build.format('h:mmA')) : this.build.format('D MMM YYYY, h:mmA');
        version(LibraryModule.version, build);
      }
    };

    LibraryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LibraryModule
    });
    LibraryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LibraryModule_Factory(t) {
        return new (t || LibraryModule)();
      },
      imports: [[]]
    });
    LibraryModule.version = '0.0.0-development';
    LibraryModule.init = false;
    /** @nocollapse */

    LibraryModule.ctorParameters = function () {
      return [];
    };

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LibraryModule, {
        declarations: [EventFeedbackComponent, TappedDirective],
        exports: [EventFeedbackComponent, TappedDirective]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibraryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [EventFeedbackComponent, TappedDirective],
          imports: [],
          exports: [EventFeedbackComponent, TappedDirective]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=acaprojects-ngx-custom-events.js.map

    /***/

  },

  /***/
  "../../node_modules/@acaprojects/ngx-date-picker/__ivy_ngcc__/fesm2015/acaprojects-ngx-date-picker.js":
  /*!************************************************************************************************************************************************************!*\
    !*** /home/runner/work/mckinsey-converge/mckinsey-converge/node_modules/@acaprojects/ngx-date-picker/__ivy_ngcc__/fesm2015/acaprojects-ngx-date-picker.js ***!
    \************************************************************************************************************************************************************/

  /*! exports provided: ACA_DATE_PICKER_MODULE, ADatePickerComponent, ADatePickerModule, LibraryModule */

  /***/
  function node_modulesAcaprojectsNgxDatePicker__ivy_ngcc__Fesm2015AcaprojectsNgxDatePickerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACA_DATE_PICKER_MODULE", function () {
      return LibraryModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADatePickerComponent", function () {
      return ADatePickerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ADatePickerModule", function () {
      return LibraryModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibraryModule", function () {
      return LibraryModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "../../node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dayjs */
    "../../node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);

    function ADatePickerComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2);
      }
    }

    function ADatePickerComponent_div_11_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
      }
    }

    function ADatePickerComponent_div_11_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.count > 9 ? "+9" : item_r3.count);
      }
    }

    function ADatePickerComponent_div_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ADatePickerComponent_div_11_Template_div_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var item_r3 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.setDate(item_r3);
        })("touchend", function ADatePickerComponent_div_11_Template_div_touchend_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var item_r3 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.setDate(item_r3);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ADatePickerComponent_div_11_div_3_Template, 1, 0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ADatePickerComponent_div_11_div_4_Template, 2, 1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("non-month", item_r3.non_month)("disabled", item_r3.disabled && !item_r3.non_month)("active", item_r3.active);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r3.display, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.today);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.count);
      }
    }

    var LIB_NAME = 'Date Picker';
    /**
     * Formatted console messages for the library
     * @param type Identifier for the message location
     * @param msg Message to send
     * @param args Javascript variables to pass to the console
     * @param out Output stream name for messages. Defaults to `'debug'`
     * @param color Secondary colour for type
     */

    function log(type, msg, args) {
      var out = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'debug';
      var color = arguments.length > 4 ? arguments[4] : undefined;

      if (window.debug) {
        var clr = color ? color : '#009688';
        var COLOURS = ['color: #0288D1', "color:".concat(clr), 'color:rgba(0,0,0,0.87)'];

        if (args) {
          if (hasColours()) {
            var _console3;

            (_console3 = console)[out].apply(_console3, ["%c[".concat(LIB_NAME, "]%c[").concat(type, "] %c").concat(msg)].concat(COLOURS, [args]));
          } else {
            console[out]("[".concat(LIB_NAME, "][").concat(type, "] ").concat(msg), args);
          }
        } else {
          if (hasColours()) {
            var _console4;

            (_console4 = console)[out].apply(_console4, ["%c[".concat(LIB_NAME, "]%c[").concat(type, "] %c").concat(msg)].concat(COLOURS));
          } else {
            console[out]("[".concat(LIB_NAME, "][").concat(type, "] ").concat(msg));
          }
        }
      }
    }
    /**
     * Log formatted error message
     * @param type Identifier for the message location
     * @param msg Message to send
     * @param args Javascript variables to pass to the console
     */


    function error(type, msg, args) {
      log(type, msg, args, 'error');
    }
    /**
     * Log formatted version information for the library
     * @param version
     * @param build
     * @param out
     */


    function version(version, build) {
      var out = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'debug';
      var COLOURS = ['color: #f44336', "color: #9c27b0", 'color:rgba(0,0,0,0.87)'];

      if (hasColours()) {
        var _console5;

        (_console5 = console)[out].apply(_console5, ["%c[ACA]%c[LIB] %c".concat(LIB_NAME, " - ").concat(version, " | ").concat(build)].concat(COLOURS));
      } else {
        console[out]("[ACA][LIB] ".concat(LIB_NAME, " - ").concat(version, " | ").concat(build));
      }
    }
    /**
     * Whether the browser console supports CSS colours
     */


    function hasColours() {
      var doc = document;
      return !(doc.documentMode || /Edge/.test(navigator.userAgent));
    }

    var dayjs = dayjs__WEBPACK_IMPORTED_MODULE_3__;

    var ADatePickerComponent = /*#__PURE__*/function () {
      function ADatePickerComponent() {
        _classCallCheck(this, ADatePickerComponent);

        /** CSS class to add to the root element of the component */
        this.klass = 'default';
        /** Offset of the display month from the current month */

        this.month = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.date = dayjs().valueOf();
        /** Offset of the month displayed from the current month */

        this.offset = 0;
        /** Minimum offset for changing the month */

        this.min_offset = -999999;
        /** Maximum offset for changing the month */

        this.max_offset = 999999;
        /** Blocks representing the rendering details of the display days of the month */

        this.date_list = [];
        /** Name of the actively displayed month */

        this.month_name = dayjs().format('MMMM YYYY');
        /** Name of the days of the week to display */

        this.days_of_week = [];
        /** Dayjs format string for formatting days of the week. Defaults to `ddd` */

        this.day_format = 'ddd';
        /** Dayjs format string for formatting active month. Defaults to `MMMM YYYY` */

        this.month_format = 'MMMM YYYY';
      }

      _createClass2(ADatePickerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.generateMonth();
          this.generateDaysOfTheWeek();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.options) {
            this.updateOptions();
          }

          if (changes.counters) {
            this.generateMonth();
          }
        }
        /** Change date using the given block */

      }, {
        key: "setDate",
        value: function setDate(item) {
          this.date = item.value;

          if (this._onChange) {
            this._onChange(this.date);
          }

          this.generateMonth();
        }
        /**
         * Update offset to show the selected date
         */

      }, {
        key: "updateDate",
        value: function updateDate() {
          var now = dayjs().startOf('month');
          var date = dayjs(this.date).startOf('month');

          if (date.isValid()) {
            var difference = date.diff(now, 'month');

            if (this.offset !== difference) {
              this.offset = difference;
              this.month.emit(this.offset);
            }

            this.generateMonth();
          }
        }
        /**
         * Update local properties based off changes to settings
         */

      }, {
        key: "updateOptions",
        value: function updateOptions() {
          if (this.options) {
            // Setup from date
            if (this.options.from) {
              this.from = dayjs(this.options.from).startOf('d');
              ;
              var today = dayjs().startOf('month');
              var date = this.from.startOf('month');
              this.min_offset = date.diff(today, 'month');
            } else if (this.from) {
              this.from = null;
              this.min_offset = -999999;
            } // Setup to date


            if (this.options.to) {
              this.to = dayjs(this.options.to).startOf('d');

              var _today = dayjs().startOf('month');

              var _date2 = this.to.startOf('month');

              this.max_offset = _date2.diff(_today, 'month');
            } else if (this.to) {
              this.to = null;
              this.max_offset = 999999;
            }

            if (this.options.month_format) {
              this.month_format = this.options.month_format || 'MMMM YYYY';
            }

            if (this.options.day_format) {
              this.day_format = this.options.day_format || 'ddd';
              this.generateDaysOfTheWeek();
            } // Update date blocks


            this.generateMonth();
          }
        }
        /**
         * Generate the display blocks for the days of the active month
         */

      }, {
        key: "generateMonth",
        value: function generateMonth() {
          var today = dayjs();
          var date = dayjs().add(this.offset, 'month');
          var active = dayjs(this.date);
          var start = date.date(1).day(0);
          var end = dayjs(start).add(5, 'week').endOf('week');
          this.date_list = [];

          while (start.isBefore(end, 'd') || start.isSame(end, 'd')) {
            this.date_list.push({
              value: start.valueOf(),
              display: start.format('D'),
              active: active.isSame(start, 'd'),
              non_month: !date.isSame(start, 'month'),
              count: this.counters ? this.counters[start.format('YYYY-MM-DD')] || 0 : 0,
              disabled: (this.from ? start.isBefore(this.from, 'd') : false) || (this.to ? start.isAfter(this.to, 'd') : false),
              today: today.isSame(start, 'd')
            });
            start = start.add(1, 'd');
          }

          this.month_name = date.format(this.month_format);
        }
        /**
         * Generate this weekdays to display in the header of the calendar
         */

      }, {
        key: "generateDaysOfTheWeek",
        value: function generateDaysOfTheWeek() {
          var date = dayjs().startOf('week');
          this.days_of_week = [];

          for (var i = 0; i < 7; i++) {
            this.days_of_week.push(date.format(this.day_format));
            date = date.add(1, 'd');
          }
        }
        /**
         * Changes the month offset by the given value.
         * Does nothing if the new month is not available to be selected
         * @param value Number of months to change the offset by
         */

      }, {
        key: "changeMonth",
        value: function changeMonth(value) {
          var _this7 = this;

          if (this._change_timer) {
            clearTimeout(this._change_timer);
          }

          this._change_timer = setTimeout(function () {
            var new_offset = _this7.offset + value;
            var date = dayjs().add(new_offset, 'month');

            if (_this7.from && date.isBefore(_this7.from, 'M')) {
              return;
            }

            if (_this7.to && date.isAfter(_this7.to, 'M')) {
              return;
            }

            _this7.offset = new_offset;

            _this7.month.emit(_this7.offset);

            _this7.generateMonth();

            _this7._change_timer = null;
          }, 100);
        }
        /**
         * Reset the month offset to the month of the selected date
         */

      }, {
        key: "reset",
        value: function reset() {
          var today = dayjs();
          var date = dayjs(this.date);
          var offset = this.offset;
          this.offset = today.diff(date, 'month');

          if (offset !== this.offset) {
            this.generateMonth();
          }

          this.month.emit(this.offset);
        }
        /**
         * Update local value when form control value is changed
         * @param value The new value for the component
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.date = value;
          this.updateDate();
          this.generateMonth();
        }
        /**
         * Registers a callback function that is called when the control's value changes in the UI.
         * @param fn The callback function to register
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._onChange = fn;
        }
        /**
         * Registers a callback function is called by the forms API on initialization to update the form model on blur.
         * @param fn The callback function to register
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouch = fn;
        }
      }]);

      return ADatePickerComponent;
    }();

    ADatePickerComponent.ɵfac = function ADatePickerComponent_Factory(t) {
      return new (t || ADatePickerComponent)();
    };

    ADatePickerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ADatePickerComponent,
      selectors: [["a-date-picker"]],
      inputs: {
        klass: "klass",
        counters: "counters",
        options: "options"
      },
      outputs: {
        month: "month"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return ADatePickerComponent;
        }),
        multi: true
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 12,
      vars: 9,
      consts: [["widget", ""], [1, "header"], [1, "arrow", "previous", 3, "click", "touchend"], [1, "previous", "icon"], [1, "month", 3, "dblclick"], [1, "arrow", "next", 3, "click", "touchend"], [1, "next", "icon"], [1, "week"], ["class", "block", 4, "ngFor", "ngForOf"], [1, "body"], [1, "block"], [1, "date", 3, "click", "touchend"], ["class", "dot", 4, "ngIf"], ["class", "count", 4, "ngIf"], [1, "dot"], [1, "count"]],
      template: function ADatePickerComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ADatePickerComponent_Template_div_click_2_listener() {
            return ctx.changeMonth(0 - 1);
          })("touchend", function ADatePickerComponent_Template_div_touchend_2_listener() {
            return ctx.changeMonth(0 - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dblclick", function ADatePickerComponent_Template_div_dblclick_4_listener() {
            return ctx.reset();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ADatePickerComponent_Template_div_click_6_listener() {
            return ctx.changeMonth(1);
          })("touchend", function ADatePickerComponent_Template_div_touchend_6_listener() {
            return ctx.changeMonth(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ADatePickerComponent_div_9_Template, 2, 1, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ADatePickerComponent_div_11_Template, 5, 9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("date-picker" + (ctx.klass ? " " + ctx.klass : ""));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.offset <= ctx.min_offset);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.month_name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.offset >= ctx.max_offset);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.days_of_week);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.date_list);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: [".date-picker[_ngcontent-%COMP%]{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;width:24em}.header[_ngcontent-%COMP%]{font-size:1.2em}.arrow[_ngcontent-%COMP%], .header[_ngcontent-%COMP%], .week[_ngcontent-%COMP%]{align-items:center;display:flex}.arrow[_ngcontent-%COMP%]{cursor:pointer;height:1.5em;justify-content:center;margin:0 .5em;width:1.5em}.arrow.disabled[_ngcontent-%COMP%]{opacity:.2;pointer-events:none}.arrow.disabled[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover{opacity:1}.icon[_ngcontent-%COMP%]{background-size:contain;height:1.25em;width:1.25em}.icon[_ngcontent-%COMP%]:hover{opacity:.54}.previous.icon[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjwvc3ZnPg==)}.next.icon[_ngcontent-%COMP%]{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48L3N2Zz4=)}.month[_ngcontent-%COMP%]{flex:1;text-align:center}.week[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]{font-size:.9em;font-weight:500}.body[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;width:100%}.block[_ngcontent-%COMP%]{flex:1;min-height:3.25em;min-width:13.5%}.block[_ngcontent-%COMP%], .date[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:center}.date[_ngcontent-%COMP%]{border-radius:100%;cursor:pointer;height:2.5em;position:relative;transition:background-color .2s;width:2.5em}.date[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.date.active[_ngcontent-%COMP%]{background-color:#1976d2;color:#fff;cursor:default;font-weight:500}.date.active[_ngcontent-%COMP%]:hover{background:#1976d2}.date.disabled[_ngcontent-%COMP%]{color:#fff;cursor:default;pointer-events:none}.date.disabled[_ngcontent-%COMP%], .date.disabled[_ngcontent-%COMP%]:hover{background-color:#eee}.date.non-month[_ngcontent-%COMP%]{background:none;color:#eee;cursor:default;pointer-events:none}.date.non-month[_ngcontent-%COMP%]:hover{background:none}.date.non-month[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%]{display:none}.dot[_ngcontent-%COMP%]{border:2px solid #fff;border-radius:100%;bottom:-2px;box-sizing:content-box;height:4px;left:50%;transform:translateX(-50%);width:4px}.count[_ngcontent-%COMP%], .dot[_ngcontent-%COMP%]{background-color:#1976d2;position:absolute}.count[_ngcontent-%COMP%]{align-items:center;border:3px solid #fff;border-radius:100%;color:#fff;display:flex;font-size:.6em;font-weight:500;height:2em;justify-content:center;right:-.75em;top:-.75em;width:2em}"]
    });
    ADatePickerComponent.propDecorators = {
      klass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      counters: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      month: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ADatePickerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'a-date-picker',
          template: "<div [class]=\"'date-picker' + (klass ? ' ' + klass : '')\" widget>\n    <div class=\"header\">\n        <div class=\"arrow previous\" [class.disabled]=\"offset <= min_offset\" (click)=\"changeMonth(-1)\" (touchend)=\"changeMonth(-1)\">\n            <div class=\"previous icon\"></div>\n        </div>\n        <div class=\"month\" (dblclick)=\"reset()\">{{month_name}}</div>\n        <div class=\"arrow next\" [class.disabled]=\"offset >= max_offset\" (click)=\"changeMonth(1)\" (touchend)=\"changeMonth(1)\">\n            <div class=\"next icon\"></div>\n        </div>\n    </div>\n    <div class=\"week\">\n        <div class=\"block\" *ngFor=\"let item of days_of_week\">{{item}}</div>\n    </div>\n    <div class=\"body\">\n        <div class=\"block\" *ngFor=\"let item of date_list\">\n            <div class=\"date\" (click)=\"setDate(item)\" (touchend)=\"setDate(item)\" [class.non-month]=\"item.non_month\"\n                [class.disabled]=\"item.disabled && !item.non_month\" [class.active]=\"item.active\">\n                {{item.display}}\n                <div class=\"dot\" *ngIf=\"item.today\"></div>\n                <div class=\"count\" *ngIf=\"item.count\">{{item.count > 9 ? '+9' : item.count}}</div>\n            </div>\n        </div>\n    </div>\n</div>",
          providers: [{
            provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
            useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
              return ADatePickerComponent;
            }),
            multi: true
          }],
          styles: [".date-picker{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;width:24em}.header{font-size:1.2em}.arrow,.header,.week{align-items:center;display:flex}.arrow{cursor:pointer;height:1.5em;justify-content:center;margin:0 .5em;width:1.5em}.arrow.disabled{opacity:.2;pointer-events:none}.arrow.disabled .icon:hover{opacity:1}.icon{background-size:contain;height:1.25em;width:1.25em}.icon:hover{opacity:.54}.previous.icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTUuNDEgMTYuNTlMMTAuODMgMTJsNC41OC00LjU5TDE0IDZsLTYgNiA2IDYgMS40MS0xLjQxeiIvPjxwYXRoIGZpbGw9Im5vbmUiIGQ9Ik0wIDBoMjR2MjRIMFYweiIvPjwvc3ZnPg==)}.next.icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNOC41OSAxNi41OUwxMy4xNyAxMiA4LjU5IDcuNDEgMTAgNmw2IDYtNiA2LTEuNDEtMS40MXoiLz48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48L3N2Zz4=)}.month{flex:1;text-align:center}.week .block{font-size:.9em;font-weight:500}.body{display:flex;flex-wrap:wrap;justify-content:center;width:100%}.block{flex:1;min-height:3.25em;min-width:13.5%}.block,.date{align-items:center;display:flex;justify-content:center}.date{border-radius:100%;cursor:pointer;height:2.5em;position:relative;transition:background-color .2s;width:2.5em}.date:hover{background-color:#f0f0f0}.date.active{background-color:#1976d2;color:#fff;cursor:default;font-weight:500}.date.active:hover{background:#1976d2}.date.disabled{color:#fff;cursor:default;pointer-events:none}.date.disabled,.date.disabled:hover{background-color:#eee}.date.non-month{background:none;color:#eee;cursor:default;pointer-events:none}.date.non-month:hover{background:none}.date.non-month .count{display:none}.dot{border:2px solid #fff;border-radius:100%;bottom:-2px;box-sizing:content-box;height:4px;left:50%;transform:translateX(-50%);width:4px}.count,.dot{background-color:#1976d2;position:absolute}.count{align-items:center;border:3px solid #fff;border-radius:100%;color:#fff;display:flex;font-size:.6em;font-weight:500;height:2em;justify-content:center;right:-.75em;top:-.75em;width:2em}"]
        }]
      }], function () {
        return [];
      }, {
        klass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        month: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        counters: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    var dayjs$1 = dayjs__WEBPACK_IMPORTED_MODULE_3__;

    var LibraryModule = function LibraryModule() {
      _classCallCheck(this, LibraryModule);

      this.build = dayjs$1();

      if (!LibraryModule.init) {
        var now = dayjs$1();
        LibraryModule.init = true;
        var build = now.isSame(this.build, 'd') ? "Today at ".concat(this.build.format('h:mmA')) : this.build.format('D MMM YYYY, h:mmA');
        version(LibraryModule.version, build);
      }
    };

    LibraryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LibraryModule
    });
    LibraryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LibraryModule_Factory(t) {
        return new (t || LibraryModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]]]
    });
    LibraryModule.version = '1.1.1';
    LibraryModule.init = false;

    LibraryModule.ctorParameters = function () {
      return [];
    };

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LibraryModule, {
        declarations: function declarations() {
          return [ADatePickerComponent];
        },
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]];
        },
        exports: function exports() {
          return [ADatePickerComponent];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibraryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [ADatePickerComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]],
          exports: [ADatePickerComponent]
        }]
      }], function () {
        return [];
      }, null);
    })();
    /*
     * Public API Surface of library
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=acaprojects-ngx-date-picker.js.map

    /***/

  },

  /***/
  "../../node_modules/@acaprojects/ngx-heap-io/__ivy_ngcc__/fesm2015/acaprojects-ngx-heap-io.js":
  /*!****************************************************************************************************************************************************!*\
    !*** /home/runner/work/mckinsey-converge/mckinsey-converge/node_modules/@acaprojects/ngx-heap-io/__ivy_ngcc__/fesm2015/acaprojects-ngx-heap-io.js ***!
    \****************************************************************************************************************************************************/

  /*! exports provided: ACA_HEAP_IO_MODULE, AHeapIoModule, HeapIoService, LibraryModule */

  /***/
  function node_modulesAcaprojectsNgxHeapIo__ivy_ngcc__Fesm2015AcaprojectsNgxHeapIoJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACA_HEAP_IO_MODULE", function () {
      return LibraryModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AHeapIoModule", function () {
      return LibraryModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeapIoService", function () {
      return HeapIoService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibraryModule", function () {
      return LibraryModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dayjs */
    "../../node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var LIB_NAME = 'heap.io';
    /**
     * Formatted console messages for the library
     * @param {?} type Identifier for the message location
     * @param {?} msg Message to send
     * @param {?=} args Javascript variables to pass to the console
     * @param {?=} out Output stream name for messages. Defaults to `'debug'`
     * @param {?=} color Secondary colour for type
     * @return {?}
     */

    function log(type, msg, args) {
      var out = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'debug';
      var color = arguments.length > 4 ? arguments[4] : undefined;

      if (window.debug) {
        /** @type {?} */
        var clr = color ? color : '#009688';
        /** @type {?} */

        var COLOURS = ['color: #0288D1', "color:".concat(clr), 'color:rgba(0,0,0,0.87)'];

        if (args) {
          if (hasColours()) {
            var _console6;

            (_console6 = console)[out].apply(_console6, ["%c[".concat(LIB_NAME, "]%c[").concat(type, "] %c").concat(msg)].concat(COLOURS, [args]));
          } else {
            console[out]("[".concat(LIB_NAME, "][").concat(type, "] ").concat(msg), args);
          }
        } else {
          if (hasColours()) {
            var _console7;

            (_console7 = console)[out].apply(_console7, ["%c[".concat(LIB_NAME, "]%c[").concat(type, "] %c").concat(msg)].concat(COLOURS));
          } else {
            console[out]("[".concat(LIB_NAME, "][").concat(type, "] ").concat(msg));
          }
        }
      }
    }
    /**
     * Log formatted version information for the library
     * @param {?} version
     * @param {?} build
     * @param {?=} out
     * @return {?}
     */


    function version(version, build) {
      var out = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'debug';

      /** @type {?} */
      var COLOURS = ['color: #f44336', "color: #9c27b0", 'color:rgba(0,0,0,0.87)'];

      if (hasColours()) {
        var _console8;

        (_console8 = console)[out].apply(_console8, ["%c[ACA]%c[LIB] %c".concat(LIB_NAME, " - ").concat(version, " | ").concat(build)].concat(COLOURS));
      } else {
        console[out]("[ACA][LIB] ".concat(LIB_NAME, " - ").concat(version, " | ").concat(build));
      }
    }
    /**
     * Whether the browser console supports CSS colours
     * @return {?}
     */


    function hasColours() {
      /** @type {?} */
      var doc =
      /** @type {?} */
      document;
      return !(doc.documentMode || /Edge/.test(navigator.userAgent));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var dayjs = dayjs__WEBPACK_IMPORTED_MODULE_2__;

    var LibraryModule = function LibraryModule() {
      _classCallCheck(this, LibraryModule);

      this.build = dayjs();

      if (!LibraryModule.init) {
        /** @type {?} */
        var now = dayjs();
        LibraryModule.init = true;
        /** @type {?} */

        var build = now.isSame(this.build, 'd') ? "Today at ".concat(this.build.format('h:mmA')) : this.build.format('D MMM YYYY, h:mmA');
        version(LibraryModule.version, build);
      }
    };

    LibraryModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LibraryModule
    });
    LibraryModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LibraryModule_Factory(t) {
        return new (t || LibraryModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]]
    });
    LibraryModule.version = '0.0.0-development';
    LibraryModule.init = false;
    /** @nocollapse */

    LibraryModule.ctorParameters = function () {
      return [];
    };

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LibraryModule, {
        imports: function imports() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LibraryModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]],
          exports: []
        }]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var HeapIoService = /*#__PURE__*/function () {
      function HeapIoService() {
        _classCallCheck(this, HeapIoService);

        window.debug = true;
        /** @type {?} */

        var heap = window.heap || [];

        heap.load =
        /**
        * @param {?} e
        * @param {?} t
        * @return {?}
        */
        function (e, t) {
          window.heap.appid = e, window.heap.config = t = t || {};
          /** @type {?} */

          var r = t.forceSSL || 'https:' === document.location.protocol;
          /** @type {?} */

          var a = document.createElement('script');
          a.type = 'text/javascript', a.async = !0, a.src = (r ? 'https:' : 'http:') + '//cdn.heapanalytics.com/js/heap-' + e + '.js';
          /** @type {?} */

          var n = document.getElementsByTagName('script')[0];
          n.parentNode.insertBefore(a, n);

          for (var o =
          /**
          * @param {?} e
          * @return {?}
          */
          function o(e) {
            return (
              /**
              * @return {?}
              */
              function () {
                heap.push([e].concat(Array.prototype.slice.call(arguments, 0)));
              }
            );
          }, p = ['addEventProperties', 'addUserProperties', 'clearEventProperties', 'identify', 'removeEventProperty', 'setEventProperties', 'track', 'unsetEventProperty'], c = 0; c < p.length; c++) {
            heap[p[c]] = o(p[c]);
          }
        };

        window.heap = heap;
        log('Service', 'Injected heap.io into page');
        this.service = heap;
      }
      /**
       * Initialise heap io with the given parameters
       * @param {?} options
       * @return {?}
       */


      _createClass2(HeapIoService, [{
        key: "load",
        value: function load(options) {
          if (!this.service) {
            throw new Error('Heap IO is not initialised');
          }
          /** @type {?} */


          var heap_ops = {
            forceSSL: options.force_ssl,
            secureCookie: options.secure_cookie,
            disableTextCapture: options.disable_text_capture,
            cookiePath: options.cookie_path
          };
          log('Service', "Initialising heap.io for application: ".concat(options.app_id));
          this.service.load(options.app_id, heap_ops);
        }
        /**
         * Set the identity of the Heap IO session
         * @param {?} id Identity of the active session user
         * @return {?}
         */

      }, {
        key: "identify",
        value: function identify(id) {
          if (!this.service) {
            throw new Error('Heap IO is not initialised');
          }

          log('Service', "Set identity to: ".concat(id));
          this.service.identify(id);
        }
        /**
         * Add properties associated with the identity given for the session
         * @param {?} properties Map of properties. e.g. `{ prop1: prop1_value, prop2: prop2_value, ... }`
         * @return {?}
         */

      }, {
        key: "addUserProperties",
        value: function addUserProperties(properties) {
          if (!this.service) {
            throw new Error('Heap IO is not initialised');
          }

          log('Service', "Adding user properties: ".concat(properties));
          this.service.trackUserProperties(properties);
        }
        /**
         * Post new tracking event
         * @param {?} event_name Name of the event
         * @param {?} properties Map of event properties. e.g. `{ prop1: prop1_value, prop2: prop2_value, ... }`
         * @return {?}
         */

      }, {
        key: "track",
        value: function track(event_name, properties) {
          if (!this.service) {
            throw new Error('Heap IO is not initialised');
          }

          log('Service', "Adding event tracking: ".concat(event_name, ", ").concat(properties));
          this.service.track(event_name, properties);
        }
      }]);

      return HeapIoService;
    }();

    HeapIoService.ɵfac = function HeapIoService_Factory(t) {
      return new (t || HeapIoService)();
    };

    HeapIoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: HeapIoService,
      factory: HeapIoService.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    HeapIoService.ctorParameters = function () {
      return [];
    };
    /** @nocollapse */


    HeapIoService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function HeapIoService_Factory() {
        return new HeapIoService();
      },
      token: HeapIoService,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeapIoService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [];
      }, null);
    })();
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    //# sourceMappingURL=acaprojects-ngx-heap-io.js.map

    /***/

  },

  /***/
  "../../node_modules/@acaprojects/ngx-interactive-map/__ivy_ngcc__/fesm2015/acaprojects-ngx-interactive-map.js":
  /*!********************************************************************************************************************************************************************!*\
    !*** /home/runner/work/mckinsey-converge/mckinsey-converge/node_modules/@acaprojects/ngx-interactive-map/__ivy_ngcc__/fesm2015/acaprojects-ngx-interactive-map.js ***!
    \********************************************************************************************************************************************************************/

  /*! exports provided: ACA_INTERACTIVE_MAP_MODULE, AInteractiveMapModule, LibraryModule, MAP_LOCATION, MAP_OVERLAY_DATA, MAP_STATE, MapComponent, MapPinComponent, MapRadiusComponent, base64Encode, cleanCssSelector, diffPoints, eventToPoint, getFillScale, getPosition, insideRect, staggerChange, ɵa, ɵb, ɵc, ɵd, ɵe, ɵf, ɵg */

  /***/
  function node_modulesAcaprojectsNgxInteractiveMap__ivy_ngcc__Fesm2015AcaprojectsNgxInteractiveMapJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACA_INTERACTIVE_MAP_MODULE", function () {
      return LibraryModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AInteractiveMapModule", function () {
      return LibraryModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LibraryModule", function () {
      return LibraryModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAP_LOCATION", function () {
      return MAP_LOCATION;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAP_OVERLAY_DATA", function () {
      return MAP_OVERLAY_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAP_STATE", function () {
      return MAP_STATE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapComponent", function () {
      return MapComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapPinComponent", function () {
      return MapPinComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MapRadiusComponent", function () {
      return MapRadiusComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "base64Encode", function () {
      return base64Encode;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "cleanCssSelector", function () {
      return cleanCssSelector;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "diffPoints", function () {
      return diffPoints;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "eventToPoint", function () {
      return eventToPoint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFillScale", function () {
      return getFillScale;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getPosition", function () {
      return getPosition;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "insideRect", function () {
      return insideRect;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "staggerChange", function () {
      return staggerChange;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return BaseWidgetDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return MapService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return MapOutletComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵd", function () {
      return MapZoomDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵe", function () {
      return MapCenterDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵf", function () {
      return MapOverlayOutletComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵg", function () {
      return MapTextOutletComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @acaprojects/ngx-pipes */
    "../../node_modules/@acaprojects/ngx-pipes/__ivy_ngcc__/fesm2015/acaprojects-ngx-pipes.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! dayjs */
    "../../node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "../../node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/animations */
    "../../node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var _c0 = ["element"];
    var _c1 = ["container"];

    function MapOutletComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safe");
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r2.map.id)("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx_r2.map.raw_data), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function MapOverlayOutletComponent_ng_container_0_ng_container_1_div_1_ng_container_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    var _c2 = function _c2() {
      return {};
    };

    function MapOverlayOutletComponent_ng_container_0_ng_container_1_div_1_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapOverlayOutletComponent_ng_container_0_ng_container_1_div_1_ng_container_1_ng_container_1_Template, 1, 0, "ng-container", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngComponentOutlet", item_r2.content)("ngComponentOutletInjector", (ctx_r4.injectors || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2))[item_r2.id]);
      }
    }

    function MapOverlayOutletComponent_ng_container_0_ng_container_1_div_1_ng_container_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
      }
    }

    function MapOverlayOutletComponent_ng_container_0_ng_container_1_div_1_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapOverlayOutletComponent_ng_container_0_ng_container_1_div_1_ng_container_2_ng_container_1_Template, 1, 0, "ng-container", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngTemplateOutlet", item_r2.content);
      }
    }

    function MapOverlayOutletComponent_ng_container_0_ng_container_1_div_1_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 8);
      }

      if (rf & 2) {
        var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", item_r2.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function MapOverlayOutletComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapOverlayOutletComponent_ng_container_0_ng_container_1_div_1_ng_container_1_Template, 2, 3, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MapOverlayOutletComponent_ng_container_0_ng_container_1_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MapOverlayOutletComponent_ng_container_0_ng_container_1_div_1_div_3_Template, 1, 1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", item_r2.coordinates.y * 100 + "%")("left", item_r2.coordinates.x * 100 + "%")("transform", "rotate(" + ctx_r3.rotation + "deg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", item_r2.content_type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "component");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "template");
      }
    }

    function MapOverlayOutletComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapOverlayOutletComponent_ng_container_0_ng_container_1_div_1_Template, 4, 9, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.coordinates);
      }
    }

    function MapOverlayOutletComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapOverlayOutletComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items)("ngForTrackBy", ctx_r0.trackByFn);
      }
    }

    function MapTextOutletComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", item_r2.coordinates.y * 100 + "%")("left", item_r2.coordinates.x * 100 + "%")("transform", "rotate(" + ctx_r3.rotation + "deg)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", item_r2.data);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r2.content, " ");
      }
    }

    function MapTextOutletComponent_ng_container_0_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapTextOutletComponent_ng_container_0_ng_container_1_div_1_Template, 3, 8, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r2.coordinates && (!item_r2.show_after_zoom || ctx_r1.zoom >= item_r2.show_after_zoom));
      }
    }

    function MapTextOutletComponent_ng_container_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MapTextOutletComponent_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
      }
    }

    function MapPinComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@showText", undefined);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.text);
      }
    }

    function MapRadiusComponent_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.text);
      }
    }

    var LIB_NAME = 'Interactive Map';
    /**
     * Formatted console messages for the library
     * @param {?} type Identifier for the message location
     * @param {?} msg Message to send
     * @param {?=} args Javascript variables to pass to the console
     * @param {?=} out Output stream name for messages. Defaults to `'debug'`
     * @param {?=} color Secondary colour for type
     * @return {?}
     */

    function _log(type, msg, args) {
      var out = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'debug';
      var color = arguments.length > 4 ? arguments[4] : undefined;

      if (window.debug) {
        /** @type {?} */
        var clr = color ? color : '#009688';
        /** @type {?} */

        var COLOURS = ['color: #0288D1', "color:".concat(clr), 'color:default'];

        if (args) {
          if (hasColours()) {
            var _console9;

            (_console9 = console)[out].apply(_console9, ["%c[".concat(LIB_NAME, "]%c[").concat(type, "] %c").concat(msg)].concat(COLOURS, [args]));
          } else {
            console[out]("[".concat(LIB_NAME, "][").concat(type, "] ").concat(msg), args);
          }
        } else {
          if (hasColours()) {
            var _console10;

            (_console10 = console)[out].apply(_console10, ["%c[".concat(LIB_NAME, "]%c[").concat(type, "] %c").concat(msg)].concat(COLOURS));
          } else {
            console[out]("[".concat(LIB_NAME, "][").concat(type, "] ").concat(msg));
          }
        }
      }
    }
    /**
     * Log formatted error message
     * @param {?} type Identifier for the message location
     * @param {?} msg Message to send
     * @param {?=} args Javascript variables to pass to the console
     * @return {?}
     */


    function error(type, msg, args) {
      _log(type, msg, args, 'error');
    }
    /**
     * Log formatted version information for the library
     * @param {?} version
     * @param {?} build
     * @param {?=} out
     * @return {?}
     */


    function version(version, build) {
      var out = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'debug';

      /** @type {?} */
      var COLOURS = ['color: #f44336', "color: #9c27b0", 'default'];

      if (hasColours()) {
        var _console11;

        (_console11 = console)[out].apply(_console11, ["%c[ACA]%c[LIB] %c".concat(LIB_NAME, " - ").concat(version, " | ").concat(build)].concat(COLOURS));
      } else {
        console[out]("[ACA][LIB] ".concat(LIB_NAME, " - ").concat(version, " | ").concat(build));
      }
    }
    /**
     * Whether the browser console supports CSS colours
     * @return {?}
     */


    function hasColours() {
      /** @type {?} */
      var doc =
      /** @type {?} */
      document;
      return !(doc.documentMode || /Edge/.test(navigator.userAgent));
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MapRenderFeature = /*#__PURE__*/function () {
      _createClass2(MapRenderFeature, [{
        key: "content_type",

        /**
         * Type of content being rendered by this feature
         * @return {?}
         */
        get: function get() {
          return this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["Type"] ? 'component' : this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"] ? 'template' : 'html';
        }
        /**
         * @param {?} data
         * @param {?} map
         */

      }]);

      function MapRenderFeature(data, map) {
        _classCallCheck(this, MapRenderFeature);

        /** @type {?} */
        var coordinates = this.processCoordinates(data.id || data.coordinates, map);
        this.id = data.id || JSON.stringify(coordinates);
        this.coordinates = coordinates;
        this.content = data.content;
        this.data = data.data || data.styles;
        this.show_after_zoom = data.show_after_zoom;
      }
      /**
       * @private
       * @param {?} data
       * @param {?} map
       * @return {?}
       */


      _createClass2(MapRenderFeature, [{
        key: "processCoordinates",
        value: function processCoordinates(data, map) {
          if (!map) {
            return;
          }

          if (typeof data === 'string') {
            /** @type {?} */
            var element = map.element_map[data];

            if (element) {
              return element.coordinates;
            } else {
              _log('MAP', "No element for id \"".concat(data, "\""), undefined, 'warn');
            }
          } else {
            if (data.x <= 1 && data.x >= 0 && data.y <= 1 && data.y >= 0) {
              return data;
            } else {
              return {
                x: data.x / 10000,
                y: data.y / (10000 * map.dimensions.y)
              };
            }
          }
        }
      }]);

      return MapRenderFeature;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Encode string into a base 64 string
     * @param {?} str
     * @return {?}
     */


    function base64Encode(str) {
      // first we use encodeURIComponent to get percent-encoded UTF-8,
      // then we convert the percent encodings into raw bytes which
      // can be fed into btoa.

      /** @type {?} */
      var solid =
      /**
      * @param {?} match
      * @param {?} p1
      * @return {?}
      */
      function solid(match, p1) {
        return String.fromCharCode(
        /** @type {?} */
        '0x' + p1);
      };

      return btoa(
      /** @type {?} */
      encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, solid));
    }
    /**
     * @param {?} source
     * @param {?} dest
     * @return {?}
     */


    function getFillScale(source, dest) {
      /** @type {?} */
      var ratio_w = source.width / dest.width;
      /** @type {?} */

      var ratio_h = source.height / dest.height;
      return Math.min(ratio_w, ratio_h);
    }
    /**
     * @param {?} name
     * @return {?}
     */


    function cleanCssSelector(name) {
      /** @type {?} */
      var selector = name.replace(/[!"#$%&'()*+,.\/;<=>?@[\\\]^`{|}~]/g, '\\$&');
      /** @type {?} */

      var parts = selector.split(' ');

      var _iterator = _createForOfIteratorHelper(parts),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var p = _step.value;
          parts.splice(parts.indexOf(p), 1, [p.replace(/^\\/g, '')]);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      selector = parts.join(' ');
      return selector;
    }
    /**
     * @param {?} container
     * @param {?} element
     * @return {?}
     */


    function getPosition(container, element) {
      /** @type {?} */
      var position = {
        x: element.left - container.left + element.width / 2,
        y: element.top - container.top + element.height / 2
      };
      return {
        x: +(position.x / container.width).toFixed(3),
        y: +(position.y / container.height).toFixed(3)
      };
    }
    /**
     * Grab point details from mouse or touch event
     * @param {?} event Event to grab details from
     * @return {?}
     */


    function eventToPoint(event) {
      if (!event) {
        return {
          x: -1,
          y: -1
        };
      }

      if (event instanceof MouseEvent) {
        return {
          x: event.clientX,
          y: event.clientY
        };
      } else {
        return event.touches && event.touches.length > 0 ? {
          x: event.touches[0].clientX,
          y: event.touches[0].clientY
        } : {
          x: -1,
          y: -1
        };
      }
    }
    /**
     * @param {?} first
     * @param {?} second
     * @return {?}
     */


    function diffPoints(first, second) {
      return {
        x: first.x - second.x,
        y: first.y - second.y
      };
    }
    /**
     * @param {?} value
     * @param {?} callback
     * @return {?}
     */


    function staggerChange(value, callback) {
      return new Promise(
      /**
      * @param {?} resolve
      * @return {?}
      */
      function (resolve) {
        requestAnimationFrame(
        /**
        * @return {?}
        */
        function () {
          /** @type {?} */
          var progress = callback(value || 0);

          if (progress) {
            staggerChange(progress, callback).then(
            /**
            * @return {?}
            */
            function () {
              return resolve();
            });
          } else {
            resolve();
          }
        });
      });
    }
    /**
     * Whether point is inside the rectangle
     * @param {?} point
     * @param {?} rect
     * @return {?}
     */


    function insideRect(point, rect) {
      return point.x >= rect.left && point.x <= rect.right && point.y >= rect.top && point.y <= rect.bottom;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @record
     */


    function MapElement() {}

    if (false) {}
    /** @type {?} */


    var COUNTER = 0;

    var RenderableMap = /*#__PURE__*/function () {
      /**
       * @param {?} url
       * @param {?} map_data
       */
      function RenderableMap(url, map_data) {
        _classCallCheck(this, RenderableMap);

        /**
         * Mapping of element id's to their locations with the map data
         */
        this._element_map = {};
        this.id = "map-".concat(++COUNTER);
        this.url = url;
        /** @type {?} */

        var raw_data = this._cleanMapData(map_data);

        this.raw_data = raw_data;

        var _this$_processMapData = this._processMapData(),
            id_list = _this$_processMapData.id_list,
            dimensions = _this$_processMapData.dimensions;

        this.available_ids = id_list;
        this.dimensions = dimensions;
      }
      /**
       * @return {?}
       */


      _createClass2(RenderableMap, [{
        key: "_processMapData",

        /**
         * Process map data and generate lookup table
         * @private
         * @return {?}
         */
        value: function _processMapData() {
          var _this8 = this;

          /** @type {?} */
          var element = document.createElement('div');
          element.style.setProperty('position', 'absolute');
          element.style.setProperty('top', '-9999px');
          element.style.setProperty('left', '-9999px');
          element.style.setProperty('height', '1000px');
          element.style.setProperty('width', '1000px');
          element.innerHTML = this.raw_data;
          document.body.appendChild(element);
          /** @type {?} */

          var svg_el = element.querySelector('svg');
          /** @type {?} */

          var box = svg_el.getBoundingClientRect();
          /** @type {?} */

          var dimensions = {
            x: 1,
            y: box.height / box.width
          };
          /** @type {?} */

          var id_elements = element.querySelectorAll('[id]');
          /** @type {?} */

          var id_list = [];
          this._element_map = {};
          id_elements.forEach(
          /**
          * @param {?} el
          * @return {?}
          */
          function (el) {
            /** @type {?} */
            var el_box = el.getBoundingClientRect();
            _this8._element_map[el.id] = {
              id: el.id,
              coordinates: getPosition(box, el_box)
            };
            id_list.push(el.id);
          });
          return {
            id_list: id_list,
            dimensions: dimensions
          };
        }
        /**
         * Clean map styles
         * @private
         * @param {?} map_data
         * @return {?}
         */

      }, {
        key: "_cleanMapData",
        value: function _cleanMapData(map_data) {
          /** @type {?} */
          var raw_data = ''; // Prevent non SVG files from being used

          if (map_data.match(/<\/svg>/g)) {
            // Prevent Adobe generic style names from being used
            raw_data = map_data.replace(/\.st/gm, ".".concat(this.id, "-"));
            raw_data = raw_data.replace(/class="st/gm, "class=\"".concat(this.id, "-"));
            raw_data = raw_data.replace(/cls\-/gm, "".concat(this.id, "-"));
            raw_data = raw_data.replace(/\.map/gm, "svg .map"); // Remove title tags and content from the map

            raw_data = raw_data.replace(/<title>.*<\/title>/gm, '');
          }

          return raw_data;
        }
      }, {
        key: "element_map",
        get: function get() {
          return Object.assign({}, this._element_map);
        }
      }]);

      return RenderableMap;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var dayjs = dayjs__WEBPACK_IMPORTED_MODULE_4__;
    /** @type {?} */

    var MAP_EXPIRY = 7 * 24 * 60 * 60 * 1000;
    /**
     * @record
     * @template T
     */

    function IMapItem() {}

    if (false) {}
    /**
     * @record
     */


    function IMapNode() {}

    if (false) {}

    var MapService = /*#__PURE__*/function () {
      /**
       * @param {?} http
       */
      function MapService(http) {
        _classCallCheck(this, MapService);

        this.http = http;
        /**
         * Map SVGs
         */

        this.maps = {};
        /**
         * Map Nodes
         */

        this.logs = {
          warning_ids: [],
          warnings: [],
          errors: []
        };
      }
      /**
       * Loads the map with the given URL
       * @param {?} url URL of the map to load
       * @return {?} Promise of the raw map file, errors with reason
       */


      _createClass2(MapService, [{
        key: "loadMap",
        value: function loadMap(url) {
          var _this9 = this;

          return new Promise(
          /**
          * @param {?} resolve
          * @param {?} reject
          * @return {?}
          */
          function (resolve, reject) {
            if (!url) {
              return resolve(null);
            }
            /** @type {?} */


            var now = new Date().getTime();

            if (_this9.maps[url] && _this9.maps[url].expiry > now) {
              resolve(_this9.maps[url].data);
            } else {
              /** @type {?} */
              var map = null;

              _this9.http.get(url, {
                responseType: 'text'
              }).subscribe(
              /**
              * @param {?} data
              * @return {?}
              */
              function (data) {
                map = new RenderableMap(url, data);
              },
              /**
              * @param {?} err
              * @return {?}
              */
              function (err) {
                return reject(err);
              },
              /**
              * @return {?}
              */
              function () {
                if (map) {
                  _this9.maps[url] = {
                    expiry: now + MAP_EXPIRY,
                    data: map
                  };
                  resolve(map);
                } else {
                  reject('Invalid SVG map');
                }
              });
            }
          });
        }
        /**
         * Clears all the cached map data
         * @return {?}
         */

      }, {
        key: "clear",
        value: function clear() {
          this.maps = {};
        }
        /**
         * @param {?} type
         * @param {?} msg
         * @param {?=} id
         * @param {?=} data
         * @return {?}
         */

      }, {
        key: "log",
        value: function log(type, msg, id, data) {
          if ((type || '').toLowerCase() === 'error') {
            _log('MAP(S)', msg, data, 'error');

            this.logs.errors.push("[".concat(dayjs().format('YYYY-MM-DD hh:mmA'), "]").concat(msg));
          } else if ((type || '').toLowerCase() === 'warning' || (type || '').toLowerCase() === 'warn') {
            if (id && this.logs.warning_ids.indexOf(id) >= 0) {
              return;
            }

            _log('MAP(S)', msg, data, 'warn');

            this.logs.warnings.push("[".concat(dayjs().format('YYYY-MM-DD hh:mmA'), "]").concat(msg));
            this.logs.warning_ids.push(id);
          }
        }
      }]);

      return MapService;
    }();

    MapService.ɵfac = function MapService_Factory(t) {
      return new (t || MapService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    MapService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MapService,
      factory: MapService.ɵfac,
      providedIn: 'root'
    });
    /** @nocollapse */

    MapService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };
    /** @nocollapse */


    MapService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MapService_Factory() {
        return new MapService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      },
      token: MapService,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MapStyles = /*#__PURE__*/function () {
      /**
       * @param {?} styles
       * @param {?} map
       */
      function MapStyles(styles, map) {
        _classCallCheck(this, MapStyles);

        this.map = map;
        this.styles = styles;
        this._css = this._processStyles(styles);

        this._renderStyleElement(this.css);
      }
      /**
       * CSS string that can be injected into the DOM
       * @return {?}
       */


      _createClass2(MapStyles, [{
        key: "destroy",

        /**
         * Cleanup map styles
         * @return {?}
         */
        value: function destroy() {
          if (this._element) {
            this._element.parentElement.removeChild(this._element);

            delete this._element;
            this._element = null;
          }
        }
        /**
         * Convert style map into CSS string
         * @private
         * @param {?} styles Mapping of CSS selectors to override CSS properties
         * @return {?}
         */

      }, {
        key: "_processStyles",
        value: function _processStyles(styles) {
          /** @type {?} */
          var css = '';

          for (var selector in this.styles) {
            if (this.styles.hasOwnProperty(selector)) {
              /** @type {?} */
              var style = ".map[id=\"".concat(this.map ? this.map.id : 'map-0', "\"] ").concat(cleanCssSelector(selector), " { ");

              for (var property in this.styles[selector]) {
                if (this.styles[selector][property]) {
                  style += "".concat(property, ": ").concat(this.styles[selector][property], "; ");
                }
              }

              style += '} ';
              css += style;
            }
          }

          return css;
        }
        /**
         * Render Style Element on the DOM
         * @private
         * @param {?} css
         * @return {?}
         */

      }, {
        key: "_renderStyleElement",
        value: function _renderStyleElement(css) {
          if (this.map) {
            /** @type {?} */
            var element = document.createElement('style');
            element.id = "placeos-".concat(this.map.id);
            element.innerHTML = css;
            document.head.appendChild(element);
            this._element = element;
          }
        }
      }, {
        key: "css",
        get: function get() {
          return this._css;
        }
      }]);

      return MapStyles;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MapComponent = /*#__PURE__*/function () {
      /**
       * @param {?} _service
       */
      function MapComponent(_service) {
        _classCallCheck(this, MapComponent);

        this._service = _service;
        /**
         * Position of the center point of the component on the map displayed
         *
         * For example:
         *
         *     { x: 0, y: 0 }
         * Places the map top left corner in the middle of the component
         *
         *     { x: 0.5, y: 0.5 }
         * Places the center of the map in the middle of the component
         *
         *     { x: 1, y: 1 }
         * Places the bottom right corner of the map in the middle of the component
         */

        this.center = {
          x: .5,
          y: .5
        };
        /**
         * List of elements to render on top of the map
         */

        this.features = [];
        /**
         * List of elements to render on top of the map
         */

        this.text = [];
        /**
         * List of listeners for elements on the map
         */

        this.listeners = [];
        /**
         * Mapping of CSS selectors to override styles
         */

        this.css = {};
        /**
         * Emitter for changes to the zoom value
         */

        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emitter for changes to the center value
         */

        this.centerChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * Emitter for changes to the zoom value
         */

        this.events = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /**
         * List of elements to render on top of the map
         */

        this.feature_list = [];
        /**
         * List of text to render on top of the map
         */

        this.text_list = [];
      }
      /**
       * @return {?}
       */


      _createClass2(MapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this10 = this;

          if (changes.src && this.src) {
            this._service.loadMap(this.src).then(
            /**
            * @param {?} map
            * @return {?}
            */
            function (map) {
              _this10.map = map;

              _this10.updateStyles();

              _this10.feature_list = _this10.processFeatures(_this10.features || []);
              _this10.text_list = _this10.processFeatures(_this10.text || []);
            });
          }

          if (changes.css) {
            this.updateStyles();
          }

          if (changes.focus && this.focus) {
            this.onFocusChange(this.focus);
          }

          if (changes.features) {
            this.feature_list = this.processFeatures(this.features || []);
          }

          if (changes.text) {
            this.text_list = this.processFeatures(this.text || []);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.styler) {
            this.styler.destroy();
            this.styler = null;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "updateStyles",
        value: function updateStyles() {
          if (this.styler) {
            this.styler.destroy();
          }

          this.styler = new MapStyles(this.css || {}, this.map);
        }
        /**
         * Update focused point or element
         * @param {?} location ID of the element to focus or a point within the map
         * @return {?}
         */

      }, {
        key: "onFocusChange",
        value: function onFocusChange(location) {
          if (!this.map) {
            return;
          }

          if (typeof location === 'string') {
            /** @type {?} */
            var element = this.map.element_map[location];

            if (!element) {
              _log('MAP', "No element for id \"".concat(location, "\""), undefined, 'warn');

              return;
            } else {
              this.center = element.coordinates;
            }
          } else {
            this.center = {
              x: Math.max(0, Math.min(1, location.x || this.center.x)),
              y: Math.max(0, Math.min(1, location.y || this.center.y))
            };
          }
        }
        /**
         * @param {?} list
         * @return {?}
         */

      }, {
        key: "processFeatures",
        value: function processFeatures(list) {
          var _this11 = this;

          if (!this.map) {
            return [];
          }

          return list.map(
          /**
          * @param {?} i
          * @return {?}
          */
          function (i) {
            return new MapRenderFeature(i, _this11.map);
          });
        }
      }]);

      return MapComponent;
    }();

    MapComponent.ɵfac = function MapComponent_Factory(t) {
      return new (t || MapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](MapService));
    };

    MapComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MapComponent,
      selectors: [["a-map"]],
      inputs: {
        center: "center",
        features: "features",
        text: "text",
        listeners: "listeners",
        css: "css",
        src: "src",
        zoom: "zoom",
        focus: "focus",
        options: "options"
      },
      outputs: {
        zoomChange: "zoomChange",
        centerChange: "centerChange",
        events: "events"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 8,
      consts: [[3, "map", "zoom", "center", "features", "listeners", "text", "zoomChange", "centerChange", "events"]],
      template: function MapComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a-map-outlet", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("zoomChange", function MapComponent_Template_a_map_outlet_zoomChange_0_listener($event) {
            return ctx.zoom = $event;
          })("zoomChange", function MapComponent_Template_a_map_outlet_zoomChange_0_listener($event) {
            return ctx.zoomChange.emit($event);
          })("centerChange", function MapComponent_Template_a_map_outlet_centerChange_0_listener($event) {
            return ctx.center = $event;
          })("centerChange", function MapComponent_Template_a_map_outlet_centerChange_0_listener($event) {
            return ctx.centerChange.emit($event);
          })("events", function MapComponent_Template_a_map_outlet_events_0_listener($event) {
            return ctx.events.emit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("locked", ctx.options == null ? null : ctx.options.lock);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("map", ctx.map)("zoom", ctx.zoom)("center", ctx.center)("features", ctx.feature_list)("listeners", ctx.listeners)("text", ctx.text_list);
        }
      },
      directives: function directives() {
        return [MapOutletComponent];
      },
      styles: ["[_nghost-%COMP%]{position:relative;height:100%;width:100%;overflow:hidden}a-map-outlet.locked[_ngcontent-%COMP%]{pointer-events:none}"]
    });
    /** @nocollapse */

    MapComponent.ctorParameters = function () {
      return [{
        type: MapService
      }];
    };

    MapComponent.propDecorators = {
      src: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      zoom: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      center: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      features: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      text: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      listeners: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      css: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      focus: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      options: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
      }],
      zoomChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      centerChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }],
      events: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'a-map',
          template: "<a-map-outlet\n    [map]=\"map\"\n    [(zoom)]=\"zoom\"\n    (zoomChange)=\"zoomChange.emit($event)\"\n    [(center)]=\"center\"\n    (centerChange)=\"centerChange.emit($event)\"\n    (events)=\"events.emit($event)\"\n    [features]=\"feature_list\"\n    [listeners]=\"listeners\"\n    [text]=\"text_list\"\n    [class.locked]=\"options?.lock\"\n></a-map-outlet>\n",
          styles: [":host{position:relative;height:100%;width:100%;overflow:hidden}a-map-outlet.locked{pointer-events:none}"]
        }]
      }], function () {
        return [{
          type: MapService
        }];
      }, {
        center: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        features: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        text: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        listeners: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        css: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        zoomChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        centerChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        events: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        src: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        zoom: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        focus: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var BaseWidgetDirective = /*#__PURE__*/function () {
      function BaseWidgetDirective() {
        _classCallCheck(this, BaseWidgetDirective);

        this.id = '';
        this.name = '';
        this.klass = 'default';
        this.subs = {
          timers: {},
          // Store for timers
          intervals: {},
          // Store for intervals
          obs: {},
          // Store for observables
          promises: {} // Store for promises

        };
        this.id = "".concat(Math.floor(Math.random() * 89999999 + 10000000));
      }
      /**
       * @param {?} changes
       * @return {?}
       */


      _createClass2(BaseWidgetDirective, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this12 = this;

          if (changes.name) {
            this.timeout('update_class',
            /**
            * @return {?}
            */
            function () {
              _this12.klass = _this12.name;

              if (_this12._cdr) {
                _this12._cdr.markForCheck();
              }
            }, 0);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Cleanup timers
          for (var k in this.subs.timers) {
            if (this.subs.timers.hasOwnProperty(k)) {
              this.clearTimer(k);
            }
          } // Cleanup intervals


          for (var _k in this.subs.intervals) {
            if (this.subs.intervals.hasOwnProperty(_k)) {
              this.clearInterval(_k);
            }
          } // Cleanup observables


          for (var _k2 in this.subs.obs) {
            if (this.subs.obs.hasOwnProperty(_k2) && this.subs.obs[_k2]) {
              if (this.subs.obs[_k2] instanceof rxjs__WEBPACK_IMPORTED_MODULE_5__["Subscription"]) {
                /** @type {?} */
                this.subs.obs[_k2].unsubscribe();
    