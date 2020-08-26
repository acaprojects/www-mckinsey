function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shell_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./shell/shell.component */
    "./src/app/shell/shell.component.ts");
    /* harmony import */


    var _shell_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shell/bootstrap/bootstrap.component */
    "./src/app/shell/bootstrap/bootstrap.component.ts");
    /* harmony import */


    var _shell_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./shell/panel/panel.component */
    "./src/app/shell/panel/panel.component.ts");
    /* harmony import */


    var _shell_panel_array_panel_array_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shell/panel-array/panel-array.component */
    "./src/app/shell/panel-array/panel-array.component.ts");
    /* harmony import */


    var _shell_panel_select_panel_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shell/panel-select/panel-select.component */
    "./src/app/shell/panel-select/panel-select.component.ts");

    var routes = [{
      path: '',
      component: _shell_shell_component__WEBPACK_IMPORTED_MODULE_1__["ShellWrapperComponent"],
      children: [{
        path: 'bootstrap',
        component: _shell_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_2__["BootstrapComponent"]
      }, {
        path: 'panel/:system_id',
        component: _shell_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["BookingPanelComponent"]
      }, {
        path: 'panel-array',
        component: _shell_panel_array_panel_array_component__WEBPACK_IMPORTED_MODULE_4__["BookingPanelArrayComponent"]
      }, {
        path: 'panel-select',
        component: _shell_panel_select_panel_select_component__WEBPACK_IMPORTED_MODULE_5__["BookingPanelSelectComponent"]
      }, {
        path: '**',
        redirectTo: 'bootstrap'
      }]
    }, {
      path: '**',
      redirectTo: 'bootstrap'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _styles_app_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./styles/app.component.scss.ngstyle */
    "./src/app/styles/app.component.scss.ngstyle.js");
    /* harmony import */


    var _styles_custom_element_styles_scss_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./styles/custom-element.styles.scss.ngstyle */
    "./src/app/styles/custom-element.styles.scss.ngstyle.js");
    /* harmony import */


    var _styles_native_element_styles_scss_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./styles/native-element.styles.scss.ngstyle */
    "./src/app/styles/native-element.styles.scss.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_AppComponent = [_styles_app_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _styles_custom_element_styles_scss_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"], _styles_native_element_styles_scss_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 2, "div", [["class", "app"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](1, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 2, 0);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], [], null, null)], null, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      window.app_loaded = true;
    };
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _shell_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./shell/shell.component.ngfactory */
    "./src/app/shell/shell.component.ngfactory.js");
    /* harmony import */


    var _shell_bootstrap_bootstrap_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./shell/bootstrap/bootstrap.component.ngfactory */
    "./src/app/shell/bootstrap/bootstrap.component.ngfactory.js");
    /* harmony import */


    var _shell_panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./shell/panel/panel.component.ngfactory */
    "./src/app/shell/panel/panel.component.ngfactory.js");
    /* harmony import */


    var _shell_panel_array_panel_array_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shell/panel-array/panel-array.component.ngfactory */
    "./src/app/shell/panel-array/panel-array.component.ngfactory.js");
    /* harmony import */


    var _shell_panel_select_panel_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./shell/panel-select/panel-select.component.ngfactory */
    "./src/app/shell/panel-select/panel-select.component.ngfactory.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_overlays_acaprojects_ngx_overlays_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../node_modules/@acaprojects/ngx-overlays/acaprojects-ngx-overlays.ngfactory */
    "./node_modules/@acaprojects/ngx-overlays/acaprojects-ngx-overlays.ngfactory.js");
    /* harmony import */


    var _shared_components_user_search_field_user_search_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./shared/components/user-search-field/user-search-field.component.ngfactory */
    "./src/app/shared/components/user-search-field/user-search-field.component.ngfactory.js");
    /* harmony import */


    var _shared_components_time_field_time_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./shared/components/time-field/time-field.component.ngfactory */
    "./src/app/shared/components/time-field/time-field.component.ngfactory.js");
    /* harmony import */


    var _shared_components_duration_field_duration_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./shared/components/duration-field/duration-field.component.ngfactory */
    "./src/app/shared/components/duration-field/duration-field.component.ngfactory.js");
    /* harmony import */


    var _overlays_confirm_modal_confirm_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./overlays/confirm-modal/confirm-modal.component.ngfactory */
    "./src/app/overlays/confirm-modal/confirm-modal.component.ngfactory.js");
    /* harmony import */


    var _overlays_embedded_control_modal_embedded_control_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./overlays/embedded-control-modal/embedded-control-modal.component.ngfactory */
    "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ngfactory.js");
    /* harmony import */


    var _overlays_booking_modal_booking_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./overlays/booking-modal/booking-modal.component.ngfactory */
    "./src/app/overlays/booking-modal/booking-modal.component.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/animations/browser */
    "./node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _shell_shell_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./shell/shell.component */
    "./src/app/shell/shell.component.ts");
    /* harmony import */


    var _shell_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./shell/bootstrap/bootstrap.component */
    "./src/app/shell/bootstrap/bootstrap.component.ts");
    /* harmony import */


    var _shell_panel_panel_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./shell/panel/panel.component */
    "./src/app/shell/panel/panel.component.ts");
    /* harmony import */


    var _shell_panel_array_panel_array_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./shell/panel-array/panel-array.component */
    "./src/app/shell/panel-array/panel-array.component.ts");
    /* harmony import */


    var _shell_panel_select_panel_select_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./shell/panel-select/panel-select.component */
    "./src/app/shell/panel-select/panel-select.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _acaprojects_ngx_google_analytics__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @acaprojects/ngx-google-analytics */
    "./node_modules/@acaprojects/ngx-google-analytics/fesm2015/acaprojects-ngx-google-analytics.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @acaprojects/ngx-overlays */
    "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
    /* harmony import */


    var _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @acaprojects/ngx-dropdown */
    "./node_modules/@acaprojects/ngx-dropdown/fesm2015/acaprojects-ngx-dropdown.js");
    /* harmony import */


    var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @acaprojects/ngx-spinners */
    "./node_modules/@acaprojects/ngx-spinners/fesm2015/acaprojects-ngx-spinners.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @acaprojects/ngx-buttons */
    "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/esm2015/text-field.js");
    /* harmony import */


    var _acaprojects_ngx_checkbox__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @acaprojects/ngx-checkbox */
    "./node_modules/@acaprojects/ngx-checkbox/fesm2015/acaprojects-ngx-checkbox.js");
    /* harmony import */


    var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @acaprojects/ngx-dynamic-forms */
    "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
    /* harmony import */


    var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @acaprojects/ngx-pipes */
    "./node_modules/@acaprojects/ngx-pipes/fesm2015/acaprojects-ngx-pipes.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _overlays_overlays_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./overlays/overlays.module */
    "./src/app/overlays/overlays.module.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _shell_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ShellWrapperComponentNgFactory"], _shell_bootstrap_bootstrap_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["BootstrapComponentNgFactory"], _shell_panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["BookingPanelComponentNgFactory"], _shell_panel_array_panel_array_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["BookingPanelArrayComponentNgFactory"], _shell_panel_select_panel_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["BookingPanelSelectComponentNgFactory"], _node_modules_acaprojects_ngx_overlays_acaprojects_ngx_overlays_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ɵaNgFactory"], _node_modules_acaprojects_ngx_overlays_acaprojects_ngx_overlays_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ɵbNgFactory"], _node_modules_acaprojects_ngx_overlays_acaprojects_ngx_overlays_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ɵcNgFactory"], _shared_components_user_search_field_user_search_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["CustomUserSearchFieldComponentNgFactory"], _shared_components_time_field_time_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["CustomTimeFieldComponentNgFactory"], _shared_components_duration_field_duration_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["CustomDurationFieldComponentNgFactory"], _overlays_confirm_modal_confirm_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalComponentNgFactory"], _overlays_embedded_control_modal_embedded_control_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["EmbeddedControlModalComponentNgFactory"], _overlays_booking_modal_booking_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["BookingModalComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_21__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_22__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_22__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) {
        return [p0_0];
      }, [_angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_17__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_service_worker_service_worker_a"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_service_worker_service_worker_d"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["SwPush"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["SwPush"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["SwUpdate"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["SwUpdate"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_service_worker_service_worker_b"], "ngsw-worker.js", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["SwRegistrationOptions"], {
        enabled: true
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_i"](p1_0), _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_service_worker_service_worker_c"](p2_0, p2_1, p2_2, p2_3)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_h"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_service_worker_service_worker_b"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_22__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_CONFIGURATION"], {
        useHash: true
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_17__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_17__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_17__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTES"], function () {
        return [[{
          path: "",
          component: _shell_shell_component__WEBPACK_IMPORTED_MODULE_28__["ShellWrapperComponent"],
          children: [{
            path: "bootstrap",
            component: _shell_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_29__["BootstrapComponent"]
          }, {
            path: "panel/:system_id",
            component: _shell_panel_panel_component__WEBPACK_IMPORTED_MODULE_30__["BookingPanelComponent"]
          }, {
            path: "panel-array",
            component: _shell_panel_array_panel_array_component__WEBPACK_IMPORTED_MODULE_31__["BookingPanelArrayComponent"]
          }, {
            path: "panel-select",
            component: _shell_panel_select_panel_select_component__WEBPACK_IMPORTED_MODULE_32__["BookingPanelSelectComponent"]
          }, {
            path: "**",
            redirectTo: "bootstrap"
          }]
        }, {
          path: "**",
          redirectTo: "bootstrap"
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_google_analytics__WEBPACK_IMPORTED_MODULE_34__["AGoogleAnalyticsModule"], _acaprojects_ngx_google_analytics__WEBPACK_IMPORTED_MODULE_34__["AGoogleAnalyticsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_35__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_35__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_36__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_36__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_37__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_37__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_38__["AOverlayModule"], _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_38__["AOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_39__["ADropdownsModule"], _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_39__["ADropdownsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_40__["ASpinnerModule"], _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_40__["ASpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_41__["ACustomEventsModule"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_41__["ACustomEventsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_42__["AButtonsModule"], _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_42__["AButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_43__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_43__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_checkbox__WEBPACK_IMPORTED_MODULE_44__["ACheckboxModule"], _acaprojects_ngx_checkbox__WEBPACK_IMPORTED_MODULE_44__["ACheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_45__["ADynamicFormsModule"], _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_45__["ADynamicFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_46__["APipesModule"], _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_46__["APipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_47__["SharedContentModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_47__["SharedContentModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _overlays_overlays_module__WEBPACK_IMPORTED_MODULE_48__["SharedOverlaysModule"], _overlays_overlays_module__WEBPACK_IMPORTED_MODULE_48__["SharedOverlaysModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ServiceWorkerModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ServiceWorkerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _shared_mocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./shared/mocks */
    "./src/app/shared/mocks/index.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../environments/environment */
    "./src/environments/environment.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);

      console.log('Production:', !!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production);
    };
    /***/

  },

  /***/
  "./src/app/overlays/booking-modal/booking-modal.component.ngfactory.js":
  /*!*****************************************************************************!*\
    !*** ./src/app/overlays/booking-modal/booking-modal.component.ngfactory.js ***!
    \*****************************************************************************/

  /*! exports provided: RenderType_BookingModalComponent, View_BookingModalComponent_0, View_BookingModalComponent_Host_0, BookingModalComponentNgFactory */

  /***/
  function srcAppOverlaysBookingModalBookingModalComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_BookingModalComponent", function () {
      return RenderType_BookingModalComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BookingModalComponent_0", function () {
      return View_BookingModalComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BookingModalComponent_Host_0", function () {
      return View_BookingModalComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingModalComponentNgFactory", function () {
      return BookingModalComponentNgFactory;
    });
    /* harmony import */


    var _booking_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./booking-modal.component.scss.shim.ngstyle */
    "./src/app/overlays/booking-modal/booking-modal.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_dynamic_forms_acaprojects_ngx_dynamic_forms_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@acaprojects/ngx-dynamic-forms/acaprojects-ngx-dynamic-forms.ngfactory */
    "./node_modules/@acaprojects/ngx-dynamic-forms/acaprojects-ngx-dynamic-forms.ngfactory.js");
    /* harmony import */


    var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @acaprojects/ngx-dynamic-forms */
    "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory */
    "./node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory.js");
    /* harmony import */


    var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @acaprojects/ngx-spinners */
    "./node_modules/@acaprojects/ngx-spinners/fesm2015/acaprojects-ngx-spinners.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */
    "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @acaprojects/ngx-buttons */
    "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _booking_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./booking-modal.component */
    "./src/app/overlays/booking-modal/booking-modal.component.ts");
    /* harmony import */


    var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @acaprojects/ngx-overlays */
    "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../services/app.service */
    "./src/app/services/app.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_BookingModalComponent = [_booking_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_BookingModalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_BookingModalComponent,
      data: {
        "animation": [{
          type: 7,
          name: "show",
          definitions: [{
            type: 1,
            expr: ":enter",
            animation: [{
              type: 6,
              styles: {
                opacity: 0,
                transform: "translateX(100%) scale(0)"
              },
              offset: null
            }, {
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 1,
                  transform: "translateX(0%) scale(1)"
                },
                offset: null
              },
              timings: 200
            }],
            options: null
          }, {
            type: 1,
            expr: ":leave",
            animation: [{
              type: 6,
              styles: {
                opacity: 1,
                transform: "translateX(0%) scale(1)"
              },
              offset: null
            }, {
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 0,
                  transform: "translateX(-100%) scale(0)"
                },
                offset: null
              },
              timings: 200
            }],
            options: null
          }],
          options: {}
        }]
      }
    });

    function View_BookingModalComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "form"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a-dynamic-form", [], null, null, null, _node_modules_acaprojects_ngx_dynamic_forms_acaprojects_ngx_dynamic_forms_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ADynamicFormComponent_0"], _node_modules_acaprojects_ngx_dynamic_forms_acaprojects_ngx_dynamic_forms_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ADynamicFormComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 573440, null, 0, _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__["ADynamicFormComponent"], [], {
        fields: [0, "fields"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.booking.form_fields;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_BookingModalComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingModalComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.booking;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_BookingModalComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["class", "info-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "a-spinner", [["circle-ring", ""], ["color", "#000"]], null, null, null, _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ɵc_0"], _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ɵc"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_6__["ɵc"], [], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Processing request..."]))], function (_ck, _v) {
        var currVal_0 = "#000";

        _ck(_v, 4, 0, currVal_0);
      }, null);
    }

    function View_BookingModalComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "button", [["name", "close"], ["widget", ""]], null, [[null, "tapped"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = _co.close() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_9__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_9__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "button", [["name", "save"], ["widget", ""]], null, [[null, "tapped"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = _co.save() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_9__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_9__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Save"]))], null, null);
    }

    function View_BookingModalComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "modal booking"], ["widget", ""]], [[2, "is-loading", null], [24, "@show", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["New Booking"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingModalComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingModalComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingModalComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = !_co.loading;

        _ck(_v, 5, 0, currVal_2);

        var currVal_3 = _co.loading;

        _ck(_v, 7, 0, currVal_3);

        var currVal_4 = !_co.loading;

        _ck(_v, 9, 0, currVal_4);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.loading;
        var currVal_1 = undefined;

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_BookingModalComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingModalComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.closing;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_BookingModalComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "booking-modal", [], null, null, null, View_BookingModalComponent_0, RenderType_BookingModalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _booking_modal_component__WEBPACK_IMPORTED_MODULE_11__["BookingModalComponent"], [_acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_12__["OverlayItem"], _services_app_service__WEBPACK_IMPORTED_MODULE_13__["ApplicationService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var BookingModalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("booking-modal", _booking_modal_component__WEBPACK_IMPORTED_MODULE_11__["BookingModalComponent"], View_BookingModalComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/overlays/booking-modal/booking-modal.component.scss.shim.ngstyle.js":
  /*!*************************************************************************************!*\
    !*** ./src/app/overlays/booking-modal/booking-modal.component.scss.shim.ngstyle.js ***!
    \*************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppOverlaysBookingModalBookingModalComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".booking[_ngcontent-%COMP%] {\n  width: 24em;\n  transition: width 200ms, height 200ms;\n}\n.booking.is-loading[_ngcontent-%COMP%] {\n  width: 16em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL292ZXJsYXlzL2Jvb2tpbmctbW9kYWwvYm9va2luZy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3ZlcmxheXMvYm9va2luZy1tb2RhbC9ib29raW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQTZCQTs7Y0FBQTtBQVdBOztzQkFBQTtBQ3RDQTtFQUNJLFdBQUE7RUFDQSxxQ0FBQTtBQ09KO0FETEk7RUFDSSxXQUFBO0FDT1IiLCJmaWxlIjoic3JjL2FwcC9vdmVybGF5cy9ib29raW5nLW1vZGFsL2Jvb2tpbmctbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5ib29raW5nIHtcbiAgICB3aWR0aDogMjRlbTtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAyMDBtcywgaGVpZ2h0IDIwMG1zO1xuXG4gICAgJi5pcy1sb2FkaW5nIHtcbiAgICAgICAgd2lkdGg6IDE2ZW07XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmJvb2tpbmcge1xuICB3aWR0aDogMjRlbTtcbiAgdHJhbnNpdGlvbjogd2lkdGggMjAwbXMsIGhlaWdodCAyMDBtcztcbn1cbi5ib29raW5nLmlzLWxvYWRpbmcge1xuICB3aWR0aDogMTZlbTtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/overlays/booking-modal/booking-modal.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/overlays/booking-modal/booking-modal.component.ts ***!
    \*******************************************************************/

  /*! exports provided: BookingModalComponent */

  /***/
  function srcAppOverlaysBookingModalBookingModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingModalComponent", function () {
      return BookingModalComponent;
    });
    /* harmony import */


    var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @acaprojects/ngx-overlays */
    "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _shared_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/base.component */
    "./src/app/shared/base.component.ts");
    /* harmony import */


    var _services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/data/bookings/booking.class */
    "./src/app/services/data/bookings/booking.class.ts");
    /* harmony import */


    var _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/globals/overlay-register */
    "./src/app/shared/globals/overlay-register.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);

    var BookingModalComponent = /*#__PURE__*/function (_shared_base_componen) {
      _inherits(BookingModalComponent, _shared_base_componen);

      var _super = _createSuper(BookingModalComponent);

      function BookingModalComponent(item, service) {
        var _this;

        _classCallCheck(this, BookingModalComponent);

        _this = _super.call(this);
        _this.item = item;
        _this.service = service;
        return _this;
      }

      _createClass(BookingModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.booking = new _services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_3__["Booking"](this.service.Bookings, {
            date: this.item.data.date,
            form_metadata: Object.assign({}, this.item.data)
          });
          var space_field = this.booking.form_fields.find(function (field) {
            return field.key === 'space';
          });

          if (this.item.data.space && space_field) {
            space_field.setValue(this.item.data.space);
          }

          var date_field = this.booking.form_fields.find(function (field) {
            return field.key === 'date';
          });

          if (date_field) {
            date_field.setValue(this.item.data.date || dayjs__WEBPACK_IMPORTED_MODULE_5__().valueOf());
          }

          var title_field = this.booking.form_fields.find(function (field) {
            return field.key === 'title';
          });

          if (title_field) {
            title_field.setValue(this.item.data.title || '');
          }
        }
        /**
         * Closes the modal
         */

      }, {
        key: "close",
        value: function close() {
          var _this2 = this;

          this.closing = true;
          this.timeout('close', function () {
            return _this2.item.close();
          });
        }
        /**
         * Post form data
         */

      }, {
        key: "save",
        value: function save() {
          var _this3 = this;

          var fields = this.booking.form_fields;
          fields.forEach(function (i) {
            return i.control.markAsDirty();
          });
          var valid = fields.reduce(function (fields_valid, field) {
            return fields_valid && (field.control.valid || field.children && field.children.length && field.children.reduce(function (sub_fields_valid, sub_field) {
              return sub_fields_valid && sub_field.control.valid;
            }, true));
          }, true);

          if (this.booking && valid) {
            this.loading = true;
            this.item.post('finish', {
              booking: this.booking,
              on_error: function on_error() {
                return _this3.loading = false;
              },
              close: function close() {
                return _this3.close();
              }
            });
          } else {
            console.log('Invalid form fields. Valid states:', fields.map(function (field) {
              return "".concat(field.key, ":").concat(field.control.valid);
            }));
          }
        }
      }]);

      return BookingModalComponent;
    }(_shared_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

    _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_4__["OVERLAY_REGISTER"].push({
      id: 'booking',
      config: {
        content: BookingModalComponent,
        config: 'modal'
      }
    });
    /***/

  },

  /***/
  "./src/app/overlays/confirm-modal/confirm-modal.component.ngfactory.js":
  /*!*****************************************************************************!*\
    !*** ./src/app/overlays/confirm-modal/confirm-modal.component.ngfactory.js ***!
    \*****************************************************************************/

  /*! exports provided: RenderType_ConfirmModalComponent, View_ConfirmModalComponent_0, View_ConfirmModalComponent_Host_0, ConfirmModalComponentNgFactory */

  /***/
  function srcAppOverlaysConfirmModalConfirmModalComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ConfirmModalComponent", function () {
      return RenderType_ConfirmModalComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ConfirmModalComponent_0", function () {
      return View_ConfirmModalComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ConfirmModalComponent_Host_0", function () {
      return View_ConfirmModalComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmModalComponentNgFactory", function () {
      return ConfirmModalComponentNgFactory;
    });
    /* harmony import */


    var _confirm_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./confirm-modal.component.scss.shim.ngstyle */
    "./src/app/overlays/confirm-modal/confirm-modal.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */
    "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @acaprojects/ngx-buttons */
    "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./confirm-modal.component */
    "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
    /* harmony import */


    var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @acaprojects/ngx-overlays */
    "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_ConfirmModalComponent = [_confirm_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ConfirmModalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ConfirmModalComponent,
      data: {
        "animation": [{
          type: 7,
          name: "show",
          definitions: [{
            type: 1,
            expr: ":enter",
            animation: [{
              type: 6,
              styles: {
                opacity: 0,
                transform: "translateX(100%) scale(0)"
              },
              offset: null
            }, {
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 1,
                  transform: "translateX(0%) scale(1)"
                },
                offset: null
              },
              timings: 200
            }],
            options: null
          }, {
            type: 1,
            expr: ":leave",
            animation: [{
              type: 6,
              styles: {
                opacity: 1,
                transform: "translateX(0%) scale(1)"
              },
              offset: null
            }, {
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 0,
                  transform: "translateX(-100%) scale(0)"
                },
                offset: null
              },
              timings: 200
            }],
            options: null
          }],
          options: {}
        }]
      }
    });

    function View_ConfirmModalComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.icon["class"];

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _co.icon.value;

        _ck(_v, 1, 0, currVal_1);
      });
    }

    function View_ConfirmModalComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.icon.src;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_ConfirmModalComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ConfirmModalComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ConfirmModalComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.icon["class"];

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = !_co.icon["class"] && _co.icon.src;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_ConfirmModalComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "div", [["class", "confirm modal"], ["widget", ""]], [[24, "@show", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ConfirmModalComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 10, "div", [["class", "footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "button", [["name", "cancel"], ["widget", ""]], null, [[null, "tapped"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = _co.close() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_5__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_5__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_6__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "button", [["name", "accept"], ["widget", ""]], null, [[null, "tapped"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = _co.accept() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_5__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_5__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_6__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, 0, ["", ""]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.icon;

        _ck(_v, 6, 0, currVal_2);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = undefined;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _co.title || "Confirm";

        _ck(_v, 3, 0, currVal_1);

        var currVal_3 = _co.content || "Are you sure?";

        _ck(_v, 9, 0, currVal_3);

        var currVal_4 = _co.action || "Ok";

        _ck(_v, 20, 0, currVal_4);
      });
    }

    function View_ConfirmModalComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ConfirmModalComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.closing;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_ConfirmModalComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "confirm-modal", [], null, null, null, View_ConfirmModalComponent_0, RenderType_ConfirmModalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalComponent"], [_acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_8__["OverlayItem"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ConfirmModalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("confirm-modal", _confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalComponent"], View_ConfirmModalComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/overlays/confirm-modal/confirm-modal.component.scss.shim.ngstyle.js":
  /*!*************************************************************************************!*\
    !*** ./src/app/overlays/confirm-modal/confirm-modal.component.scss.shim.ngstyle.js ***!
    \*************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppOverlaysConfirmModalConfirmModalComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".confirm[_ngcontent-%COMP%] {\n  min-width: 18em;\n}\n.body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em;\n}\n.icon[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n}\n.content[_ngcontent-%COMP%] {\n  width: 16rem;\n  text-align: center;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL292ZXJsYXlzL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3ZlcmxheXMvY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQTZCQTs7Y0FBQTtBQVdBOztzQkFBQTtBQ3RDQTtFQUNJLGVBQUE7QUNPSjtBREpBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDT0o7QURKQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0FDT0o7QURKQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9vdmVybGF5cy9jb25maXJtLW1vZGFsL2NvbmZpcm0tbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb25maXJtIHtcbiAgICBtaW4td2lkdGg6IDE4ZW07XG59XG5cbi5ib2R5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbi5pY29uIHtcbiAgICBoZWlnaHQ6IDEuMmVtO1xuICAgIHdpZHRoOiAxLjJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyZW07XG59XG5cbi5jb250ZW50IHtcbiAgICB3aWR0aDogMTZyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb25maXJtIHtcbiAgbWluLXdpZHRoOiAxOGVtO1xufVxuXG4uYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLmljb24ge1xuICBoZWlnaHQ6IDEuMmVtO1xuICB3aWR0aDogMS4yZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDJlbTtcbn1cblxuLmNvbnRlbnQge1xuICB3aWR0aDogMTZyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/overlays/confirm-modal/confirm-modal.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/overlays/confirm-modal/confirm-modal.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ConfirmModalComponent */

  /***/
  function srcAppOverlaysConfirmModalConfirmModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function () {
      return ConfirmModalComponent;
    });
    /* harmony import */


    var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @acaprojects/ngx-overlays */
    "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
    /* harmony import */


    var _shared_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/base.component */
    "./src/app/shared/base.component.ts");
    /* harmony import */


    var _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/globals/overlay-register */
    "./src/app/shared/globals/overlay-register.ts");

    var ConfirmModalComponent = /*#__PURE__*/function (_shared_base_componen2) {
      _inherits(ConfirmModalComponent, _shared_base_componen2);

      var _super2 = _createSuper(ConfirmModalComponent);

      function ConfirmModalComponent(item) {
        var _this4;

        _classCallCheck(this, ConfirmModalComponent);

        _this4 = _super2.call(this);
        _this4.item = item;
        return _this4;
      }

      _createClass(ConfirmModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var data = this.item.data;

          if (data) {
            this.title = data.title || 'Confirm';
            this.content = data.content || data.body || data.description || 'Confirm';
            this.action = data.action || 'Ok';
            this.icon = data.icon;
          }
        }
        /**
         * Close the modal
         */

      }, {
        key: "close",
        value: function close() {
          var _this5 = this;

          this.closing = true;
          this.timeout('close', function () {
            return _this5.item.close();
          });
        }
        /**
         * User confirmation of the content of the modal
         */

      }, {
        key: "accept",
        value: function accept() {
          this.item.post('finish');
          this.close();
        }
      }]);

      return ConfirmModalComponent;
    }(_shared_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

    _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_2__["OVERLAY_REGISTER"].push({
      id: 'confirm',
      config: {
        content: ConfirmModalComponent,
        config: 'modal'
      }
    });
    /***/

  },

  /***/
  "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ngfactory.js":
  /*!***********************************************************************************************!*\
    !*** ./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ngfactory.js ***!
    \***********************************************************************************************/

  /*! exports provided: RenderType_EmbeddedControlModalComponent, View_EmbeddedControlModalComponent_0, View_EmbeddedControlModalComponent_Host_0, EmbeddedControlModalComponentNgFactory */

  /***/
  function srcAppOverlaysEmbeddedControlModalEmbeddedControlModalComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_EmbeddedControlModalComponent", function () {
      return RenderType_EmbeddedControlModalComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_EmbeddedControlModalComponent_0", function () {
      return View_EmbeddedControlModalComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_EmbeddedControlModalComponent_Host_0", function () {
      return View_EmbeddedControlModalComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmbeddedControlModalComponentNgFactory", function () {
      return EmbeddedControlModalComponentNgFactory;
    });
    /* harmony import */


    var _embedded_control_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./embedded-control-modal.component.scss.shim.ngstyle */
    "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @acaprojects/ngx-pipes */
    "./node_modules/@acaprojects/ngx-pipes/fesm2015/acaprojects-ngx-pipes.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */
    "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @acaprojects/ngx-buttons */
    "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _embedded_control_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./embedded-control-modal.component */
    "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ts");
    /* harmony import */


    var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @acaprojects/ngx-overlays */
    "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_EmbeddedControlModalComponent = [_embedded_control_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_EmbeddedControlModalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_EmbeddedControlModalComponent,
      data: {
        "animation": [{
          type: 7,
          name: "show",
          definitions: [{
            type: 1,
            expr: ":enter",
            animation: [{
              type: 6,
              styles: {
                opacity: 0
              },
              offset: null
            }, {
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 1
                },
                offset: null
              },
              timings: 500
            }],
            options: null
          }, {
            type: 1,
            expr: ":leave",
            animation: [{
              type: 6,
              styles: {
                opacity: 1
              },
              offset: null
            }, {
              type: 4,
              styles: {
                type: 6,
                styles: {
                  opacity: 0
                },
                offset: null
              },
              timings: 1000
            }],
            options: null
          }],
          options: {}
        }]
      }
    });

    function View_EmbeddedControlModalComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_2__["ɵa"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "div", [["class", "background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "modal control"]], [[24, "@show", 0]], [["window", "touchend"], ["window", "mouseup"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("window:touchend" === en) {
          var pd_0 = _co.reset() !== false;
          ad = pd_0 && ad;
        }

        if ("window:mouseup" === en) {
          var pd_1 = _co.reset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "control-frame"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "iframe", [], [[8, "src", 5]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 12, "div", [["class", "overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "button", [["class", "action countdown"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = _co.reset() !== false;
          ad = pd_0 && ad;
        }

        if ("contextmenu" === en) {
          var pd_1 = $event.preventDefault() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_6__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_6__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_7__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 6, "button", [["class", "action close"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = _co.close() !== false;
          ad = pd_0 && ad;
        }

        if ("contextmenu" === en) {
          var pd_1 = $event.preventDefault() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_6__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_6__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_7__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["close"]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = undefined;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.control_url, "resource"));

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _co.countdown;

        _ck(_v, 11, 0, currVal_2);
      });
    }

    function View_EmbeddedControlModalComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "embedded-control-modal", [], null, null, null, View_EmbeddedControlModalComponent_0, RenderType_EmbeddedControlModalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _embedded_control_modal_component__WEBPACK_IMPORTED_MODULE_8__["EmbeddedControlModalComponent"], [_acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_9__["OverlayItem"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var EmbeddedControlModalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("embedded-control-modal", _embedded_control_modal_component__WEBPACK_IMPORTED_MODULE_8__["EmbeddedControlModalComponent"], View_EmbeddedControlModalComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.scss.shim.ngstyle.js":
  /*!*******************************************************************************************************!*\
    !*** ./src/app/overlays/embedded-control-modal/embedded-control-modal.component.scss.shim.ngstyle.js ***!
    \*******************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppOverlaysEmbeddedControlModalEmbeddedControlModalComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".background[_ngcontent-%COMP%] {\n  position: absolute;\n  height: calc(101vh);\n  width: calc(101vw);\n  background-color: #fff;\n  transform: translate(-50%, -50%);\n}\n.control[_ngcontent-%COMP%] {\n  position: absolute;\n  height: calc(100vh - 4.5em);\n  width: calc(100vw - 1em);\n  box-sizing: content-box;\n  border: 2px solid #fff;\n  border-radius: 2em;\n  overflow: hidden;\n  background-color: #fff;\n  transform: translate(-50%, calc(-50% + 1.75em));\n}\n.control-frame[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border: none;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL292ZXJsYXlzL2VtYmVkZGVkLWNvbnRyb2wtbW9kYWwvZW1iZWRkZWQtY29udHJvbC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3ZlcmxheXMvZW1iZWRkZWQtY29udHJvbC1tb2RhbC9lbWJlZGRlZC1jb250cm9sLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQTZCQTs7Y0FBQTtBQVdBOztzQkFBQTtBQ3RDQTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0NBQUE7QUNPSjtBREpBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkRDWTtFQ0FaLCtDQUFBO0FDT0o7QURKQTs7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNPSjtBREpBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ09KO0FESkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNPSjtBRE5JO0VBQ0ksY0FBQTtBQ1FSIiwiZmlsZSI6InNyYy9hcHAvb3ZlcmxheXMvZW1iZWRkZWQtY29udHJvbC1tb2RhbC9lbWJlZGRlZC1jb250cm9sLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uYmFja2dyb3VuZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogY2FsYygxMDF2aCk7XG4gICAgd2lkdGg6IGNhbGMoMTAxdncpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uY29udHJvbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDQuNWVtKTtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDFlbSk7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gICAgYm9yZGVyOiAycHggc29saWQgJGNvbG9yLXByaW1hcnk7XG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgY2FsYygtNTAlICsgMS43NWVtKSk7XG59XG5cbi5jb250cm9sLWZyYW1lLFxuaWZyYW1lIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGhlaWdodDogMS4yZW07XG4gICAgd2lkdGg6IDEuMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBpICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IGNhbGMoMTAxdmgpO1xuICB3aWR0aDogY2FsYygxMDF2dyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uY29udHJvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNC41ZW0pO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDFlbSk7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIGNhbGMoLTUwJSArIDEuNzVlbSkpO1xufVxuXG4uY29udHJvbC1mcmFtZSxcbmlmcmFtZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5pY29uIGkge1xuICBmb250LXNpemU6IDFlbTtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: EmbeddedControlModalComponent */

  /***/
  function srcAppOverlaysEmbeddedControlModalEmbeddedControlModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmbeddedControlModalComponent", function () {
      return EmbeddedControlModalComponent;
    });
    /* harmony import */


    var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @acaprojects/ngx-overlays */
    "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
    /* harmony import */


    var _shared_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/base.component */
    "./src/app/shared/base.component.ts");
    /* harmony import */


    var _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/globals/overlay-register */
    "./src/app/shared/globals/overlay-register.ts");

    var EmbeddedControlModalComponent = /*#__PURE__*/function (_shared_base_componen3) {
      _inherits(EmbeddedControlModalComponent, _shared_base_componen3);

      var _super3 = _createSuper(EmbeddedControlModalComponent);

      function EmbeddedControlModalComponent(item) {
        var _this6;

        _classCallCheck(this, EmbeddedControlModalComponent);

        _this6 = _super3.call(this);
        _this6.item = item;
        _this6.countdown = 30;
        return _this6;
      }

      _createClass(EmbeddedControlModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          var data = this.item.data;

          if (data) {
            this.control_url = data.control_url;
          }

          if (!this.control_url) {
            this.close();
          }

          this.countdown = 30;
          this.interval('countdown', function () {
            return _this7.tick();
          }, 1000);
        }
        /**
         * Close the modal
         */

      }, {
        key: "close",
        value: function close() {
          this.item.close();
          this.countdown = 30;
        }
        /**
         * User confirmation of the content of the modal
         */

      }, {
        key: "reset",
        value: function reset() {
          var _this8 = this;

          this.countdown = 30;
          this.interval('countdown', function () {
            return _this8.tick();
          }, 1000);
        }
        /**
         * Decrement countdown and close if 0
         */

      }, {
        key: "tick",
        value: function tick() {
          if (this.countdown <= 0) {
            this.close();
          }

          this.countdown--;
        }
      }]);

      return EmbeddedControlModalComponent;
    }(_shared_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

    _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_2__["OVERLAY_REGISTER"].push({
      id: 'embeded-control',
      config: {
        content: EmbeddedControlModalComponent,
        config: 'modal'
      }
    });
    /***/

  },

  /***/
  "./src/app/overlays/overlays.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/overlays/overlays.module.ts ***!
    \*********************************************/

  /*! exports provided: SharedOverlaysModule */

  /***/
  function srcAppOverlaysOverlaysModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedOverlaysModule", function () {
      return SharedOverlaysModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./confirm-modal/confirm-modal.component */
    "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
    /* harmony import */


    var _embedded_control_modal_embedded_control_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./embedded-control-modal/embedded-control-modal.component */
    "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ts");
    /* harmony import */


    var _booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./booking-modal/booking-modal.component */
    "./src/app/overlays/booking-modal/booking-modal.component.ts");

    var OVERLAYS = [_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmModalComponent"], _embedded_control_modal_embedded_control_modal_component__WEBPACK_IMPORTED_MODULE_2__["EmbeddedControlModalComponent"], _booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_3__["BookingModalComponent"]];

    var SharedOverlaysModule = function SharedOverlaysModule() {
      _classCallCheck(this, SharedOverlaysModule);
    };
    /***/

  },

  /***/
  "./src/app/services/app.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/app.service.ts ***!
    \*****************************************/

  /*! exports provided: ApplicationService */

  /***/
  function srcAppServicesAppServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApplicationService", function () {
      return ApplicationService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_service_worker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/service-worker */
    "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
    /* harmony import */


    var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @placeos/ts-client */
    "./node_modules/@placeos/ts-client/dist/esm/index.js");
    /* harmony import */


    var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @acaprojects/ngx-overlays */
    "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
    /* harmony import */


    var _acaprojects_ngx_google_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @acaprojects/ngx-google-analytics */
    "./node_modules/@acaprojects/ngx-google-analytics/fesm2015/acaprojects-ngx-google-analytics.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_base_class__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../shared/base.class */
    "./src/app/shared/base.class.ts");
    /* harmony import */


    var _settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./settings.service */
    "./src/app/services/settings.service.ts");
    /* harmony import */


    var _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../shared/globals/overlay-register */
    "./src/app/shared/globals/overlay-register.ts");
    /* harmony import */


    var _hotkeys_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./hotkeys.service */
    "./src/app/services/hotkeys.service.ts");
    /* harmony import */


    var _data_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./data/organisation/organisation.service */
    "./src/app/services/data/organisation/organisation.service.ts");
    /* harmony import */


    var _data_users_users_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./data/users/users.service */
    "./src/app/services/data/users/users.service.ts");
    /* harmony import */


    var _data_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./data/bookings/bookings.service */
    "./src/app/services/data/bookings/bookings.service.ts");
    /* harmony import */


    var _data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./data/spaces/spaces.service */
    "./src/app/services/data/spaces/spaces.service.ts");
    /* harmony import */


    var _data_systems_manager_systems_manager_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./data/systems-manager/systems-manager.service */
    "./src/app/services/data/systems-manager/systems-manager.service.ts");
    /* harmony import */


    var _data_polling_polling_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./data/polling/polling.service */
    "./src/app/services/data/polling/polling.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ApplicationService = /*#__PURE__*/function (_shared_base_class__W) {
      _inherits(ApplicationService, _shared_base_class__W);

      var _super4 = _createSuper(ApplicationService);

      function ApplicationService(_app_ref, _zone, _title, _router, _cache, _settings, _overlay, _analytics, _hotkeys, _systems, _organisation, _users, _bookings, _spaces, _polling) {
        var _this9;

        _classCallCheck(this, ApplicationService);

        _this9 = _super4.call(this);
        _this9._app_ref = _app_ref;
        _this9._zone = _zone;
        _this9._title = _title;
        _this9._router = _router;
        _this9._cache = _cache;
        _this9._settings = _settings;
        _this9._overlay = _overlay;
        _this9._analytics = _analytics;
        _this9._hotkeys = _hotkeys;
        _this9._systems = _systems;
        _this9._organisation = _organisation;
        _this9._users = _users;
        _this9._bookings = _bookings;
        _this9._spaces = _spaces;
        _this9._polling = _polling;
        /** List of previous routes for return navigation */

        _this9._route_trail = [];
        /** Map of state variables for Service */

        _this9._subjects = {};
        /** Map of observables for state variables */

        _this9._observers = {};
        _this9._organisation.parent = _this9._users.parent = _this9._bookings.parent = _this9._spaces.parent = _this9._polling.parent = _assertThisInitialized(_this9);

        _this9.set('system', null);

        _this9.log('APP', "Waiting for Application to stablised...", undefined, undefined, true);

        _this9._app_ref.isStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["first"])(function (_) {
          return _;
        })).subscribe(function () {
          _this9.log('APP', "Application has stablised.", undefined, undefined, true);

          _this9._zone.run(function () {
            _this9._stable = true;

            _this9.setupCache();

            _this9.waitForSettings();

            _this9.registerOverlays();
          });
        });

        return _this9;
      }
      /** Whether the application has stablised */


      _createClass(ApplicationService, [{
        key: "setting",

        /**
         * Get a setting from the settings service
         * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
         */
        value: function setting(key) {
          return this._settings.get(key);
        }
        /** Name of the application */

      }, {
        key: "notify",

        /**
         * Create notification popup
         * @param type CSS Class to add to the notification
         * @param msg Message to display on the notificaiton
         * @param action Display text for the callback action
         * @param on_action Callback of action on the notification
         */
        value: function notify(type, msg, action, on_action) {
          var content = "<div class=\"icon\"><i class=\"material-icons\"></i></div><div class=\"text\">".concat(msg, "</div>");

          this._overlay.notify(content, action, on_action, type);
        }
        /**
         * Create success notification popup
         * @param msg Message to display on the notificaiton
         * @param action Display text for the callback action
         * @param on_action Callback of action on the notification
         */

      }, {
        key: "notifySuccess",
        value: function notifySuccess(msg, action, on_action) {
          this.notify('success', msg, action, on_action);
        }
        /**
         * Create success notification popup
         * @param msg Message to display on the notificaiton
         * @param action Display text for the callback action
         * @param on_action Callback of action on the notification
         */

      }, {
        key: "notifyError",
        value: function notifyError(msg, action, on_action) {
          this.notify('error', msg, action, on_action);
        }
        /**
         * Create info notification popup
         * @param msg Message to display on the notificaiton
         * @param action Display text for the callback action
         * @param on_action Callback of action on the notification
         */

      }, {
        key: "notifyInfo",
        value: function notifyInfo(msg, action, on_action) {
          this.notify('info', msg, action, on_action);
        }
        /**
         * Log data to the browser console
         * @param type Type of message
         * @param msg Message body
         * @param args array of argments to log to the console
         * @param stream Stream to emit the console on. 'debug', 'log', 'warn' or 'error'
         * @param force Whether to force message to be emitted when debug is disabled
         */

      }, {
        key: "log",
        value: function log(type, msg, args) {
          var stream = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'debug';
          var force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

          this._settings.log(type, msg, args, stream, force);
        }
        /**
         * Navigate to the given path
         * @param path Path or array of path parts
         * @param query Key value pairs to add to the URL as query parameters
         */

      }, {
        key: "navigate",
        value: function navigate(path, query) {
          var route = path instanceof Array ? _toConsumableArray(path) : [path];

          this._route_trail.push(this._router.url);

          this._router.navigate(route, query ? {
            queryParams: query
          } : {
            preserveFragment: true
          });
        }
        /**
         * Navigate to the previous location in the route trail
         */

      }, {
        key: "navigateBack",
        value: function navigateBack() {
          if (this._route_trail && this._route_trail.length > 0) {
            var path = this._route_trail.pop();

            this._router.navigate([path]);
          } else {
            this._router.navigate(['']);
          }
        }
        /**
         * Get the current value of the named property
         * @param name Property name
         */

      }, {
        key: "get",
        value: function get(name) {
          return this._subjects[name] && this._subjects[name] instanceof rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"] ? this._subjects[name].getValue() : null;
        }
        /**
         * Listen to value change of the named property
         * @param name Property name
         * @param next Callback for value changes
         */

      }, {
        key: "listen",
        value: function listen(name, next) {
          return this._observers[name] ? this._observers[name].subscribe(next) : null;
        }
        /**
         * Update the value of the named property
         * @param name Property name
         * @param value New value
         */

      }, {
        key: "set",
        value: function set(name, value) {
          if (!this._subjects[name]) {
            this._subjects[name] = new rxjs__WEBPACK_IMPORTED_MODULE_7__["BehaviorSubject"](value);
            this._observers[name] = this._subjects[name].asObservable();
          } else {
            this._subjects[name].next(value);
          }
        }
        /** Wait for settings to be initialised before setting up the application */

      }, {
        key: "waitForSettings",
        value: function waitForSettings() {
          var _this10 = this;

          this.log('SYSTEM', 'Waiting for settings...'); // Wait until the settings have loaded before initialising

          this._settings.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_18__["first"])(function (_) {
            return _;
          })).subscribe(function () {
            return _this10.init();
          });
        }
        /**
         * Initialise application services
         */

      }, {
        key: "init",
        value: function init() {
          var _this11 = this;

          this.setupComposer()["catch"](function (_) {
            return _;
          });
          this.timeout('inited', function () {
            _this11._users.init(); // Setup analytics


            _this11._analytics.enabled = !!_this11.setting('app.analytics.enabled');

            if (_this11._analytics.enabled) {
              _this11._analytics.load(_this11.setting('app.analytics.tracking_id'));
            } // Add service to window if in debug mode


            if (window.debug) {
              window.application = _this11;
            }

            _this11._hotkeys.listen(['Shift', 'Backslash'], function () {
              _this11.navigate('bootstrap', {
                clear: true
              });
            });

            _this11._organisation.init();

            _this11._bookings.init();

            _this11._spaces.init();

            _this11._polling.init();

            _this11.timeout('inited', function () {
              return _this11._initialised.next(true);
            }, 500);
          }, 500);
        }
        /**
         * Initialise the composer library comms
         */

      }, {
        key: "setupComposer",
        value: function setupComposer() {
          this.log('SYSTEM', 'Setting up composer...'); // Get application settings

          var settings = this.setting('composer') || {};
          var protocol = settings.protocol || location.protocol;
          var host = settings.domain || location.hostname;
          var port = settings.port || location.port;
          var url = settings.use_domain ? "".concat(protocol, "//").concat(host, ":").concat(port) : location.origin;
          var route = settings.route || '';
          var mock = this.setting('mock'); // Generate configuration object

          var config = {
            auth_type: 'auth_code',
            scope: 'public',
            host: "".concat(host, ":").concat(port),
            auth_uri: "".concat(url, "/auth/oauth/authorize"),
            token_uri: "".concat(url, "/auth/token"),
            redirect_uri: "".concat(location.origin).concat(route, "/oauth-resp.html"),
            handle_login: !settings.local_login,
            use_iframe: true,
            token_header: true,
            mock: mock
          };

          if (localStorage) {
            localStorage.setItem('oauth_redirect', location.href);
          }

          this.log('SYSTEM', 'Finsihed setting up composer.');
          return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_4__["setup"])(config);
        }
        /**
         * Setup handler for cache change events
         */

      }, {
        key: "setupCache",
        value: function setupCache() {
          var _this12 = this;

          this.unsub('app_stable');
          this.log('CACHE', "Initialising cache...");

          if (this._cache.isEnabled) {
            this.log('CACHE', "Listening to cache events...");

            this._cache.activateUpdate();

            this.subscription('cache_update', this._cache.available.subscribe(function (event) {
              var current = "current version is ".concat(event.current.hash);
              var available = "available version is ".concat(event.available.hash);

              _this12.log('CACHE', "Update available: ".concat(current, " ").concat(available));

              _this12.activateUpdate();
            }));
            setInterval(function () {
              _this12.log('CACHE', "Checking for updates...");

              _this12._cache.checkForUpdate();
            }, 5 * 60 * 1000);
          }
        }
        /**
         * Update the cache and reload the page
         */

      }, {
        key: "activateUpdate",
        value: function activateUpdate() {
          if (this._cache.isEnabled) {
            this.log('CACHE', "Activating changes to the cache...");

            this._cache.activateUpdate().then(function () {
              return location.reload(true);
            });
          }
        }
        /**
         * Pre-register available overlays
         */

      }, {
        key: "registerOverlays",
        value: function registerOverlays() {
          if (_shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_10__["OVERLAY_REGISTER"]) {
            var _iterator = _createForOfIteratorHelper(_shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_10__["OVERLAY_REGISTER"]),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var overlay = _step.value;

                this._overlay.register(overlay.id, overlay.config);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          }
        }
      }, {
        key: "is_stable",
        get: function get() {
          return this._stable || false;
        }
        /** Overlay service */

      }, {
        key: "Overlay",
        get: function get() {
          return this._overlay;
        }
        /** Analytics service */

      }, {
        key: "Analytics",
        get: function get() {
          return this._analytics;
        }
        /** Hotkeys service */

      }, {
        key: "Hotkeys",
        get: function get() {
          return this._hotkeys;
        }
        /** Systems Manager service */

      }, {
        key: "Systems",
        get: function get() {
          return this._systems;
        }
        /** Organisation service */

      }, {
        key: "Organisation",
        get: function get() {
          return this._organisation;
        }
        /** Users service */

      }, {
        key: "Users",
        get: function get() {
          return this._users;
        }
        /** Bookings service */

      }, {
        key: "Bookings",
        get: function get() {
          return this._bookings;
        }
        /** Spaces service */

      }, {
        key: "Spaces",
        get: function get() {
          return this._spaces;
        }
      }, {
        key: "name",
        get: function get() {
          return this._settings.app_name;
        }
        /**
         * Title of the page
         */

      }, {
        key: "title",
        set: function set(value) {
          var title_suffix = this.setting('app.title');

          this._title.setTitle("".concat(value ? value + ' | ' : '').concat(title_suffix));
        }
        /**
         * Title of the page
         */
        ,
        get: function get() {
          return this._title.getTitle();
        }
        /** Root API Endpoint */

      }, {
        key: "endpoint",
        get: function get() {
          return "/api/staff/";
        }
        /** Root API Endpoint for engine */

      }, {
        key: "engine_endpoint",
        get: function get() {
          return "/control/api/";
        }
      }]);

      return ApplicationService;
    }(_shared_base_class__WEBPACK_IMPORTED_MODULE_8__["BaseClass"]);

    ApplicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function ApplicationService_Factory() {
        return new ApplicationService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_3__["SwUpdate"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_settings_service__WEBPACK_IMPORTED_MODULE_9__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_5__["AOverlayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_acaprojects_ngx_google_analytics__WEBPACK_IMPORTED_MODULE_6__["GoogleAnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_hotkeys_service__WEBPACK_IMPORTED_MODULE_11__["HotkeysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_systems_manager_systems_manager_service__WEBPACK_IMPORTED_MODULE_16__["SystemsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_12__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_users_users_service__WEBPACK_IMPORTED_MODULE_13__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_14__["BookingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_15__["SpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_data_polling_polling_service__WEBPACK_IMPORTED_MODULE_17__["PollingService"]));
      },
      token: ApplicationService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/data/base-api.class.ts":
  /*!*************************************************!*\
    !*** ./src/app/services/data/base-api.class.ts ***!
    \*************************************************/

  /*! exports provided: BaseDataClass */

  /***/
  function srcAppServicesDataBaseApiClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseDataClass", function () {
      return BaseDataClass;
    });
    /* harmony import */


    var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @acaprojects/ngx-dynamic-forms */
    "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_base_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/base.class */
    "./src/app/shared/base.class.ts");

    var BaseDataClass = /*#__PURE__*/function (_shared_base_class__W2) {
      _inherits(BaseDataClass, _shared_base_class__W2);

      var _super5 = _createSuper(BaseDataClass);

      function BaseDataClass(service, raw_data) {
        var _this13;

        _classCallCheck(this, BaseDataClass);

        _this13 = _super5.call(this);
        _this13.service = service;
        /** Subject for change events to the class object */

        _this13.changeEvents = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        _this13.id = raw_data.id || raw_data.zone_id || raw_data.email || "".concat(Math.floor(Math.random() * 9999999999));
        _this13.name = raw_data.name;
        _this13.email = (raw_data.email || '').toLowerCase();
        _this13._form_metadata = raw_data.form_metadata || {};
        return _this13;
      }
      /** Get form field metadata for the object */


      _createClass(BaseDataClass, [{
        key: "resetForm",

        /**
         * Reset the values on the form to their initial state
         */
        value: function resetForm() {
          if (this._form_fields) {
            var _iterator2 = _createForOfIteratorHelper(this._form_fields),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var field = _step2.value;
                field.setValue(this[field.key]);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        }
        /**
         * Get a list of the field names that have changed values
         */

      }, {
        key: "formChanges",
        value: function formChanges() {
          var changed = [];

          if (this._form_fields) {
            var _iterator3 = _createForOfIteratorHelper(this._form_fields),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var field = _step3.value;

                if (field.getValue() !== this[field.key]) {
                  changed.push(field.key);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }

          return changed;
        }
        /**
         * Save form changes to server
         */

      }, {
        key: "save",
        value: function save() {
          if (this.changes && this.service) {
            this._form_fields.forEach(function (i) {
              return i.showErrors(true);
            });

            if (this.valid) {
              var form = this.formValues();
              return this.id ? this.service.update(this.id, form) : this.service.add(form);
            }
          }
        }
        /**
         * Delete this item from the server
         */

      }, {
        key: "delete",
        value: function _delete() {
          if (this.id) {
            return this.service["delete"](this.id);
          }
        }
        /**
         * Run task for this item on the service
         * @param task_name Name of the task
         * @param parameters Parameters to pass to the task request
         */

      }, {
        key: "runTask",
        value: function runTask(task_name, parameters) {
          if (this.id) {
            return this.service.task(this.id, task_name, parameters);
          }
        }
        /**
         * Get a map of the field values
         */

      }, {
        key: "toJSON",
        value: function toJSON() {
          if (!this._form_fields) {
            this._form_fields = this.initialiseFormFields();
          }

          var json = this.formValues();
          json.id = this.id;
          delete json.changed_fields;
          return json;
        }
        /**
         * Emits change event
         * @param type Type of change that has occurred
         * @param metadata Supporting metadata for the event
         */

      }, {
        key: "emit",
        value: function emit(type, metadata) {
          this.changeEvents.next({
            type: type,
            metadata: metadata
          });
        }
        /**
         * Make a copy of this object
         */

      }, {
        key: "clone",
        value: function clone() {
          return new BaseDataClass(this.service, this);
        }
        /**
         * Make a copy of this object without identification data
         */

      }, {
        key: "duplicate",
        value: function duplicate() {
          return new BaseDataClass(this.service, Object.assign(Object.assign({}, this), {
            id: null,
            email: null
          }));
        }
        /**
         * Get the mapped values of the form fields
         */

      }, {
        key: "formValues",
        value: function formValues() {
          var field_list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._form_fields;
          var changes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var values = {};

          var _iterator4 = _createForOfIteratorHelper(field_list),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var field = _step4.value;

              if (field.children && field.children.length > 0) {
                values[field.key] = this.formValues(field.children, false);
              } else {
                values[field.key] = field.getValue();
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }

          if (changes) {
            values.changed_fields = this.formChanges();
          }

          return values;
        }
        /**
         * Initialise the form field metadata for the field
         */

      }, {
        key: "initialiseFormFields",
        value: function initialiseFormFields() {
          var edit = !!this.id;
          var fields = [new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["ADynamicFormField"]({
            key: 'name',
            type: 'input',
            value: this.name
          }), new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["ADynamicFormField"]({
            key: 'email',
            type: 'input',
            value: this.email,
            required: true,
            attributes: {
              type: 'email'
            }
          })];
          return fields;
        }
      }, {
        key: "form_fields",
        get: function get() {
          if (!this._form_fields) {
            this._form_fields = this.initialiseFormFields();
          }

          return this._form_fields;
        }
        /** Whether form fields are valid */

      }, {
        key: "valid",
        get: function get() {
          return this._form_fields ? this._form_fields.reduce(function (a, i) {
            return a && i.isValid();
          }, true) : false;
        }
        /** Whether the form has changes */

      }, {
        key: "changes",
        get: function get() {
          return this.formChanges().length > 0;
        }
      }]);

      return BaseDataClass;
    }(_shared_base_class__WEBPACK_IMPORTED_MODULE_2__["BaseClass"]);
    /***/

  },

  /***/
  "./src/app/services/data/base.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/data/base.service.ts ***!
    \***********************************************/

  /*! exports provided: BaseAPIService */

  /***/
  function srcAppServicesDataBaseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseAPIService", function () {
      return BaseAPIService;
    });
    /* harmony import */


    var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @placeos/ts-client */
    "./node_modules/@placeos/ts-client/dist/esm/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _base_api_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./base-api.class */
    "./src/app/services/data/base-api.class.ts");
    /* harmony import */


    var _shared_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/base.class */
    "./src/app/shared/base.class.ts");
    /* harmony import */


    var _shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/utilities/api.utilities */
    "./src/app/shared/utilities/api.utilities.ts");

    var BaseAPIService = /*#__PURE__*/function (_shared_base_class__W3) {
      _inherits(BaseAPIService, _shared_base_class__W3);

      var _super6 = _createSuper(BaseAPIService);

      function BaseAPIService() {
        var _this14;

        _classCallCheck(this, BaseAPIService);

        _this14 = _super6.call(this);
        /** Map of state variables for Service */

        _this14._subjects = {};
        /** Map of observables for state variables */

        _this14._observers = {};
        /** Map of poll subscribers for API endpoints */

        _this14._subscribers = {};
        /** Map of promises for Service */

        _this14._promises = {};
        /** Comparison function for service items */

        _this14._compare = function (a, b) {
          return a === b || a.id === b.id;
        };
        /** Default filter function for list method */


        _this14._list_filter = function (a) {
          return !!a;
        };

        _this14._name = 'Base';
        _this14._api_route = 'base';

        _this14.set('list', []);

        return _this14;
      }
      /**
       * Initailise service
       */


      _createClass(BaseAPIService, [{
        key: "init",
        value: function init() {
          var _this15 = this;

          this.load().then(function (_) {
            return _this15._initialised.next(true);
          });
        }
        /**
         * Get API route for the service
         * @param engine Whether endpoint is using the application API or engine API
         */

      }, {
        key: "route",
        value: function route() {
          var engine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          var endpoint = this.parent ? engine ? this.parent.engine_endpoint : this.parent.endpoint : '/api/';
          return "".concat(endpoint).concat(this._api_route);
        }
        /** API Route of the service */

      }, {
        key: "setting",

        /**
         * Get a service related setting from the settings service
         * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
         */
        value: function setting(key) {
          return this.parent ? this.parent.setting("app.".concat(this._name.toLowerCase(), ".").concat(key)) : null;
        }
        /**
         * Get the current value of the named property
         * @param name Property name
         */

      }, {
        key: "get",
        value: function get(name) {
          return this._subjects[name] && this._subjects[name] instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"] ? this._subjects[name].getValue() : null;
        }
        /**
         * Listen to value change of the named property
         * @param name Property name
         * @param next Callback for value changes
         */

      }, {
        key: "listen",
        value: function listen(name) {
          return this._observers[name] ? this._observers[name] : null;
        }
        /**
         * Update the value of the named property
         * @param name Property name
         * @param value New value
         */

      }, {
        key: "set",
        value: function set(name, value) {
          if (!this._subjects[name]) {
            this._subjects[name] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](value);
            this._observers[name] = this._subjects[name].asObservable();
          } else {
            this._subjects[name].next(value);
          }
        }
        /**
         * Get list of loaded items
         * @param filterFn Function for filtering the list
         */

      }, {
        key: "list",
        value: function list() {
          var filterFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._list_filter;
          var list = this.get('list') || [];
          return list.reduce(function (a, i) {
            if (filterFn(i)) {
              a.push(i);
            }

            return a;
          }, []);
        }
        /**
         * Get item with the given id from the loaded items
         * @param id ID of the item
         */

      }, {
        key: "item",
        value: function item(id) {
          var list = this.get('list') || [];
          return list.find(function (i) {
            return i.id === id || i.email === id;
          });
        }
        /**
         * Query the index of the API route associated with this service
         * @param query_params Map of query paramaters to add to the request URL
         */

      }, {
        key: "query",
        value: function query() {
          var _this16 = this;

          var query_params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
            update_list: true
          };
          var engine = false;
          var cache = 1000;

          if (query_params) {
            engine = !!query_params.engine;
            delete query_params.engine;
            cache = query_params.cache || 1000;
            delete query_params.cache;
          }

          var query = Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params);
          var key = "query|".concat(query);

          if (!this._promises[key]) {
            this._promises[key] = new Promise(function (resolve, reject) {
              var url = "".concat(_this16.route(engine)).concat(query ? '?' + query : '');
              var result = [];
              Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["get"])(url).subscribe(function (d) {
                result = d && d instanceof Array ? d.map(function (i) {
                  return _this16.process(i);
                }) : d && !(d instanceof Array) && d.results ? d.results : [];
              }, function (e) {
                reject(e);
                _this16._promises[key] = null;
              }, function () {
                if ((!query || query_params && query_params.update_list) && result.length > 0 && result[0] instanceof _base_api_class__WEBPACK_IMPORTED_MODULE_2__["BaseDataClass"]) {
                  _this16.set('list', _this16.updateList(_this16.get('list'), result));
                }

                resolve(result);

                _this16.timeout(key, function () {
                  return _this16._promises[key] = null;
                }, cache);
              });
            });
          }

          return this._promises[key];
        }
        /**
         * Query the API route for a sepecific item
         * @param id ID of the item
         * @param query_params Map of query paramaters to add to the request URL
         */

      }, {
        key: "show",
        value: function show(id) {
          var _this17 = this;

          var query_params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var engine = false;

          if (query_params) {
            engine = !!query_params.engine;
            delete query_params.engine;
          }

          var query = Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params);
          var key = "show|".concat(id, "|").concat(query);

          if (!this._promises[key]) {
            this._promises[key] = new Promise(function (resolve, reject) {
              var url = "".concat(_this17.route(engine), "/").concat(id).concat(query ? '?' + query : '');
              var result = null;
              Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["get"])(url).subscribe(function (d) {
                return result = _this17.process(d);
              }, function (e) {
                reject(e);
                _this17._promises[key] = null;
              }, function () {
                resolve(result);

                _this17.timeout(key, function () {
                  return _this17._promises[key] = null;
                }, 1000);
              });
            });
          }

          return this._promises[key];
        }
        /**
         * Make post request for a new item to the service
         * @param form_data Data to post to the server
         * @param query_params Map of query paramaters to add to the request URL
         */

      }, {
        key: "add",
        value: function add(form_data) {
          var _this18 = this;

          var query_params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          if (!this._promises.new_item) {
            this._promises.new_item = new Promise(function (resolve, reject) {
              var query = Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params);
              var url = "".concat(_this18.route(query_params.engine)).concat(query ? '?' + query : '');
              var result = null;
              Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["post"])(url, form_data).subscribe(function (d) {
                return result = _this18.process(d);
              }, function (e) {
                reject(e);

                _this18.analyticsEvent("create-".concat(_this18._name.toLowerCase(), "-failed"));

                _this18._promises.new_item = null;
              }, function () {
                resolve(result);

                _this18.set('list', _this18.updateList(_this18.get('list'), [result]));

                _this18.analyticsEvent("create-".concat(_this18._name.toLowerCase(), "-success"));

                _this18._promises.new_item = null;
              });
            });
          }

          return this._promises.new_item;
        }
        /**
         * Perform API task for the given item ID
         * @param id ID of the item
         * @param task_name Name of the task
         * @param form_data Map of data to pass to the API
         */

      }, {
        key: "task",
        value: function task(id, task_name) {
          var _this19 = this;

          var form_data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var query = Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(form_data);
          var key = "task|".concat(id, "|").concat(task_name, "|").concat(query);

          if (!this._promises[key]) {
            this._promises[key] = new Promise(function (resolve, reject) {
              var post_data = Object.assign(Object.assign({}, form_data), {
                id: id,
                _task: task_name
              });
              var url = "".concat(_this19.route(form_data.engine), "/").concat(id, "/").concat(task_name);
              var result = null;
              Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["post"])(url, post_data).subscribe(function (d) {
                return result = d;
              }, function (e) {
                reject(e);

                _this19.analyticsEvent("".concat(_this19._name.toLowerCase(), "-task-").concat(task_name, "-failed"), id);

                _this19._promises[key] = null;
              }, function () {
                resolve(result);

                _this19.analyticsEvent("".concat(_this19._name.toLowerCase(), "-task-").concat(task_name, "-success"), id);

                _this19.timeout(key, function () {
                  return _this19._promises[key] = null;
                }, 1000);
              });
            });
          }

          return this._promises[key];
        }
        /**
         * Setup a poller for an API endpoint
         * @param id Show request ID. Leave blank to poll on the query endpoint
         * @param query_params Map of query paramaters to add to the polled URL
         * @param delay Delay between each poll event
         */

      }, {
        key: "poll",
        value: function poll(id) {
          var _this20 = this;

          var query_params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5000;
          var key = "poll|".concat(id || '', "|").concat(Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params) || '');
          this.stopPoll(id, query_params);
          this._subjects[key] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
          this._observers[key] = this._subjects[key].asObservable();
          var sub = this._subjects[key];
          var query = Object.assign(Object.assign({}, query_params || {}), {
            _poll: true
          });

          if (id) {
            this.show(id, query).then(function (d) {
              return sub.next(d);
            }, function (e) {
              return sub.error(e);
            });
            this.interval(key, function () {
              _this20.show(id, query).then(function (d) {
                return sub.next(d);
              }, function (e) {
                return sub.error(e);
              });
            }, delay);
          } else {
            this.query(query).then(function (d) {
              return sub.next(d);
            }, function (e) {
              return sub.error(e);
            });
            this.interval(key, function () {
              _this20.query(query).then(function (d) {
                return sub.next(d);
              }, function (e) {
                return sub.error(e);
              });
            }, delay);
          }

          return this._observers[key];
        }
        /**
         * Destroy poller
         * @param id
         * @param query_params
         */

      }, {
        key: "stopPoll",
        value: function stopPoll(id) {
          var query_params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var key = "poll|".concat(id || '', "|").concat(Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params) || '');

          if (this._subjects[key]) {
            this._subjects[key].complete();

            this._subjects[key] = null;
            this._observers[key] = null;
          }
        }
        /**
         * Make put request for changes to the item with the given id
         * @param id ID of the item being updated
         * @param form_data New values for the item
         * @param query_params Map of query paramaters to add to the request URL
         */

      }, {
        key: "update",
        value: function update(id, form_data) {
          var _this21 = this;

          var query_params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
          var key = "update|".concat(id);

          if (!this._promises[key]) {
            this._promises[key] = new Promise(function (resolve, reject) {
              var query = Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params);
              var url = "".concat(_this21.route(query_params.engine), "/").concat(id).concat(query ? '?' + query : '');
              var result = null;
              Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["put"])(url, form_data).subscribe(function (d) {
                return result = _this21.process(d);
              }, function (e) {
                reject(e);

                _this21.analyticsEvent("update-".concat(_this21._name.toLowerCase(), "-failed"), id);

                _this21._promises[key] = null;
              }, function () {
                resolve(result);

                _this21.set('list', _this21.updateList(_this21.removeItem(_this21.get('list'), {
                  id: id
                }), [result]));

                _this21.analyticsEvent("update-".concat(_this21._name.toLowerCase(), "-success"), id);

                _this21._promises[key] = null;
              });
            });
          }

          return this._promises[key];
        }
        /**
         * Make delete request for the given item
         * @param id ID of item
         */

      }, {
        key: "delete",
        value: function _delete(id) {
          var _this22 = this;

          var key = "delete|".concat(id);

          if (!this._promises[key]) {
            this._promises[key] = new Promise(function (resolve, reject) {
              var url = "".concat(_this22.route(), "/").concat(id);
              Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["del"])(url).subscribe(function (_) {
                return null;
              }, function (e) {
                return reject(e);
              }, function () {
                _this22.set('list', _this22.removeItem(_this22.get('list'), {
                  id: id
                }));

                resolve();
              });
            });
          }

          return this._promises[key];
        }
        /**
         * Add new API item from another service or API class
         * @param id ID of the item/or service adding the new item
         * @param data Raw API data for the new item
         * @param type Adder type
         */

      }, {
        key: "addFrom",
        value: function addFrom(id, data) {
          var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'other';
          var new_item = this.process(data);
          this.set('list', this.updateList(this.get('list'), [new_item]));
          return new_item.id;
        }
        /**
         * Remove items with the given IDs from the list
         * @param id ID of the item/or service remove the list of items
         * @param remove_ids List of item IDs to remove
         * @param type Remover type
         */

      }, {
        key: "removeFrom",
        value: function removeFrom(id, remove_ids) {
          var type = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'other';
          var list = this.get('list');

          var _iterator5 = _createForOfIteratorHelper(remove_ids),
              _step5;

          try {
            var _loop = function _loop() {
              var item_id = _step5.value;
              var index = list.findIndex(function (item) {
                return item.id === item_id;
              });

              if (index >= 0) {
                list.splice(index, 1);
              }
            };

            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          this.set('list', list);
        }
        /**
         * Load initial data for the service
         */

      }, {
        key: "load",
        value: function load() {
          return new Promise(function (resolve) {
            resolve();
          });
        }
        /**
         * Post analytics event for this service
         * @param action Name of the action to post
         */

      }, {
        key: "analyticsEvent",
        value: function analyticsEvent(action, label) {
          if (this.parent && this.parent.Analytics) {
            this.parent.Analytics.event(this._name, "".concat(this.parent.name.toLowerCase(), "-").concat(action), label);
          }
        }
        /**
         * Convert raw API data into a valid API Object
         * @param raw_item Raw API data
         */

      }, {
        key: "process",
        value: function process(raw_item) {
          return raw_item;
        }
        /**
         * Update recorded list of items
         * @param old_list Old list of items
         * @param list List of updated items
         * @param compareFn Function to compare items to remove duplicates
         */

      }, {
        key: "updateList",
        value: function updateList(old_list, list) {
          var compareFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this._compare;

          if (!list || list.length === 0) {
            return old_list;
          }

          var new_list = [];
          var mixed_list = [].concat(_toConsumableArray(list), _toConsumableArray(old_list));

          if (!compareFn) {
            compareFn = this._compare;
          }

          var _iterator6 = _createForOfIteratorHelper(mixed_list),
              _step6;

          try {
            var _loop2 = function _loop2() {
              var item = _step6.value;
              var found = new_list.find(function (i) {
                return compareFn(i, item);
              });

              if (!found) {
                new_list.push(item);
              }
            };

            for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
              _loop2();
            }
          } catch (err) {
            _iterator6.e(err);
          } finally {
            _iterator6.f();
          }

          return new_list;
        }
        /**
         * Remove the given item from the given list
         * @param list List of items
         * @param item Item to remove
         * @param compareFn Function to compare items
         */

      }, {
        key: "removeItem",
        value: function removeItem(list, item, compareFn) {
          var new_list = [];

          if (!compareFn) {
            compareFn = this._compare;
          }

          list.forEach(function (i) {
            return compareFn(item, i) ? null : new_list.push(i);
          });
          return new_list;
        }
      }, {
        key: "api_route",
        get: function get() {
          return this._api_route;
        }
      }]);

      return BaseAPIService;
    }(_shared_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"]);
    /***/

  },

  /***/
  "./src/app/services/data/bookings/booking.class.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/data/bookings/booking.class.ts ***!
    \*********************************************************/

  /*! exports provided: Booking */

  /***/
  function srcAppServicesDataBookingsBookingClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Booking", function () {
      return Booking;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @acaprojects/ngx-dynamic-forms */
    "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
    /* harmony import */


    var _base_api_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../base-api.class */
    "./src/app/services/data/base-api.class.ts");
    /* harmony import */


    var _users_user_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../users/user.class */
    "./src/app/services/data/users/user.class.ts");
    /* harmony import */


    var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/utilities/general.utilities */
    "./src/app/shared/utilities/general.utilities.ts");
    /* harmony import */


    var _shared_globals_form_fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../shared/globals/form-fields */
    "./src/app/shared/globals/form-fields.ts");
    /* harmony import */


    var _shared_utilities_formatting_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/utilities/formatting.utilities */
    "./src/app/shared/utilities/formatting.utilities.ts");
    /* harmony import */


    var _shared_utilities_validation_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../shared/utilities/validation.utilities */
    "./src/app/shared/utilities/validation.utilities.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);

    var Booking = /*#__PURE__*/function (_base_api_class__WEBP) {
      _inherits(Booking, _base_api_class__WEBP);

      var _super7 = _createSuper(Booking);

      function Booking(service, raw_data) {
        var _this23;

        _classCallCheck(this, Booking);

        _this23 = _super7.call(this, service, raw_data);
        _this23.service = service;
        /** Cached display strings */

        _this23._display = {};
        var u_service = service.parent.Users;
        _this23.icaluid = raw_data.icaluid || _this23.id;
        _this23.title = raw_data.title || raw_data.subject || raw_data.Subject;
        var start = dayjs__WEBPACK_IMPORTED_MODULE_9__(raw_data.date || raw_data.start || raw_data.start_epoch * 1000 || raw_data.Start);
        _this23.date = start.valueOf();
        _this23.duration = raw_data.duration || dayjs__WEBPACK_IMPORTED_MODULE_9__(raw_data.end || raw_data.end_epoch * 1000 || raw_data.End).diff(start, 'm');
        _this23.body = raw_data.body || raw_data.description;
        _this23.notes = raw_data.notes;
        _this23.type = raw_data.type || (raw_data.visitors ? 'external' : null) || 'internal';
        _this23.catering = raw_data.catering;
        _this23._attendees = (raw_data.attendees || raw_data._attendees || []).map(function (i) {
          return u_service.item(i.email) || new _users_user_class__WEBPACK_IMPORTED_MODULE_4__["User"](u_service, i);
        });
        var organiser = raw_data.organiser || raw_data.organizer || {
          email: "".concat(raw_data.owner, "@fake.org")
        };

        if (raw_data.owner) {
          _this23.service.parent.Users.addFrom('booking', {
            name: raw_data.owner,
            email: "".concat(raw_data.owner, "@fake.org")
          });
        }

        _this23._organiser = organiser.email || raw_data._organiser;
        _this23._location = raw_data.location || raw_data._location;
        _this23._display = {
          date: start.format('DD MMM YYYY'),
          time: "".concat(start.format('h:mma'), " - ").concat(dayjs__WEBPACK_IMPORTED_MODULE_9__(start).add(_this23.duration, 'm').format('h:mma')),
          start: start.format('h:mma'),
          end: dayjs__WEBPACK_IMPORTED_MODULE_9__(start).add(_this23.duration, 'm').format('h:mma'),
          duration: Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_5__["humaniseDuration"])(_this23.duration)
        };
        _this23._space_list = raw_data.room_ids || raw_data._space_list; // Add attendees and organiser to service data

        if (_this23.service.parent && _this23.service.parent.Users) {
          if (raw_data.attendees) {
            raw_data.attendees.forEach(function (u) {
              if (!_this23.service.parent.Users.item(u.email)) {
                _this23.service.parent.Users.addFrom(_this23.id, u, 'class');
              }
            });
          }

          if (organiser) {
            if (!_this23.service.parent.Users.item(organiser.email)) {
              _this23.service.parent.Users.addFrom(_this23.id, organiser, 'class');
            }
          }
        }

        return _this23;
      }
      /** List of attendees to the meeting */


      _createClass(Booking, [{
        key: "initialiseFormFields",

        /**
         * Create form fields for the object
         */
        value: function initialiseFormFields() {
          var _this24 = this;

          var form_fields = [];
          var form_settings = this.service.setting('fields') || [];
          var user = this.service.parent.Users.current;
          var actions = {// space: () => this.setSpace(),
            // recurrence: () => this.setRecurrence(),
            // conferencing: (v?) => this.setConferencing(v)
          };
          var validators = {
            date: [_shared_utilities_validation_utilities__WEBPACK_IMPORTED_MODULE_8__["validateDate"]],
            duration: [Object(_shared_utilities_validation_utilities__WEBPACK_IMPORTED_MODULE_8__["buildValidateDuration"])()],
            attendees: [Object(_shared_utilities_validation_utilities__WEBPACK_IMPORTED_MODULE_8__["buildValidateAttendees"])(user, this.service.setting('min_attendees'))],
            terms: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]
          };
          var formatters = {
            attendees: Object(_shared_utilities_formatting_utilities__WEBPACK_IMPORTED_MODULE_7__["formatAttendeesWithHost"])(user),
            date: _angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"],
            space: _shared_utilities_formatting_utilities__WEBPACK_IMPORTED_MODULE_7__["formatSpaces"],
            recurrence: _shared_utilities_formatting_utilities__WEBPACK_IMPORTED_MODULE_7__["formatRecurrence"]
          };
          var custom_elements = _shared_globals_form_fields__WEBPACK_IMPORTED_MODULE_6__["FORM_FIELDS"];
          var defaults = {};

          var process_field = function process_field(field) {
            var f = {
              key: field.key,
              label: field.label,
              icon: field.icon,
              type: field.control_type || field.type,
              value: _this24[field.key] || defaults[field.key] || '',
              action: field.action || actions[field.key],
              format: field.format || formatters[field.key],
              content: field.content || custom_elements[field.key],
              required: field.required,
              validators: validators[field.key],
              references: field.references || field.refs,
              hide: field.hide,
              metadata: Object.assign(Object.assign(Object.assign({}, field.metadata), _this24._form_metadata), {
                service: _this24.service
              }),
              attributes: {
                flex: field.flex
              },
              children: field.children ? field.children.map(function (i) {
                return process_field(i);
              }) : null
            };
            return new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["ADynamicFormField"](f);
          };

          var _iterator7 = _createForOfIteratorHelper(form_settings),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var field = _step7.value;

              if (field.key) {
                form_fields.push(process_field(field));
              }
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }

          return form_fields;
        }
        /**
         * Make a copy of this object
         */

      }, {
        key: "clone",
        value: function clone() {
          return new Booking(this.service, this);
        }
        /**
         * Make a copy of this object without identification data
         */

      }, {
        key: "duplicate",
        value: function duplicate() {
          return new Booking(this.service, Object.assign(Object.assign({}, this), {
            id: null,
            email: null,
            icaluid: null
          }));
        }
      }, {
        key: "attendees",
        get: function get() {
          var _this25 = this;

          return this.service && this.service.parent && this.service.parent.Users ? this.service.parent.Users.list(function (user) {
            return _this25._attendees.indexOf(user.id) >= 0;
          }) : [];
        }
        /** Host or organiser of the meeting */

      }, {
        key: "organiser",
        get: function get() {
          return this.service && this.service.parent && this.service.parent.Users && this._organiser ? this.service.parent.Users.item(this._organiser) : null;
        }
        /** Status of the booking */

      }, {
        key: "status",
        get: function get() {
          var now = dayjs__WEBPACK_IMPORTED_MODULE_9__();
          var date = dayjs__WEBPACK_IMPORTED_MODULE_9__(this.date);

          if (now.isBefore(date.subtract(15, 'm'), 'm')) {
            return 'future';
          } else if (now.isBefore(date, 'm')) {
            return 'upcoming';
          } else if (now.isBefore(date.add(15, 'm'), 'm')) {
            return 'started';
          } else if (now.isBefore(date.add(this.duration, 'm'), 'm')) {
            return 'in_progress';
          }

          return 'done';
        }
        /** Get the first space from the space list */

      }, {
        key: "space",
        get: function get() {
          return this.service && this.service.parent && this.service.parent.Spaces && this._space_list && this._space_list.length > 0 ? this.service.parent.Spaces.item(this._space_list[0]) : null;
        }
        /** Spaces associated with the booking */

      }, {
        key: "space_list",
        get: function get() {
          var _this26 = this;

          return this.service && this.service.parent && this.service.parent.Spaces ? this.service.parent.Spaces.list(function (space) {
            return _this26._space_list.indexOf(space.id) >= 0;
          }) : [];
        }
        /** Display value for the date */

      }, {
        key: "date_string",
        get: function get() {
          return this._display.date;
        }
        /** Display valuie for the start and end times of the booking */

      }, {
        key: "time_period",
        get: function get() {
          return this._display.time;
        }
        /** Display value for the start time of the booking */

      }, {
        key: "start_time",
        get: function get() {
          return this._display.start;
        }
        /** Display value for the end time of the booking */

      }, {
        key: "end_time",
        get: function get() {
          return this._display.end;
        }
        /** Display value for the duration of the booking */

      }, {
        key: "length_string",
        get: function get() {
          return this._display.duration;
        }
        /** Display value for the location of the booking */

      }, {
        key: "location",
        get: function get() {
          return this._display.space_names || this._location || 'No location set';
        }
        /** Display value for the level of the first space in the booking */

      }, {
        key: "level",
        get: function get() {
          return this._display.level;
        }
      }]);

      return Booking;
    }(_base_api_class__WEBPACK_IMPORTED_MODULE_3__["BaseDataClass"]);
    /***/

  },

  /***/
  "./src/app/services/data/bookings/booking.utilities.ts":
  /*!*************************************************************!*\
    !*** ./src/app/services/data/bookings/booking.utilities.ts ***!
    \*************************************************************/

  /*! exports provided: setMockBookingStartDatetime, generateMockBooking, getFreeBookingSlots, getNextFreeBookingSlot */

  /***/
  function srcAppServicesDataBookingsBookingUtilitiesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "setMockBookingStartDatetime", function () {
      return setMockBookingStartDatetime;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generateMockBooking", function () {
      return generateMockBooking;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getFreeBookingSlots", function () {
      return getFreeBookingSlots;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getNextFreeBookingSlot", function () {
      return getNextFreeBookingSlot;
    });
    /* harmony import */


    var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../shared/utilities/general.utilities */
    "./src/app/shared/utilities/general.utilities.ts");
    /* harmony import */


    var _users_user_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../users/user.utilities */
    "./src/app/services/data/users/user.utilities.ts");
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! faker */
    "./node_modules/faker/index.js");
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);

    var BOOKING_COUNT = 0;
    var BOOKING_DATE = dayjs__WEBPACK_IMPORTED_MODULE_3__().minute(0).startOf('m');
    /**
     * Set the initial time used for generating mock bookings
     * @param time New initial time as ms from UTC epoch
     */

    function setMockBookingStartDatetime(time) {
      BOOKING_DATE = dayjs__WEBPACK_IMPORTED_MODULE_3__(time).startOf('m');
    }
    /**
     * Create mock raw API data for a booking
     * @param id
     */


    function generateMockBooking(id) {
      if (!id) {
        id = "booking-".concat(BOOKING_COUNT++);
      }

      BOOKING_DATE = BOOKING_DATE.add(Math.floor(Math.random() * 4) + 15, 'm');
      var start = BOOKING_DATE.valueOf();
      var duration = Math.floor(Math.random() * 4) + 30;
      BOOKING_DATE = BOOKING_DATE.add(Math.floor(Math.random() * 4) + 15, 'm');
      return {
        id: id,
        icaluid: Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_0__["padZero"])(Math.floor(Math.random() * 99999999), 8),
        title: "".concat(faker__WEBPACK_IMPORTED_MODULE_2__["commerce"].productName(), " Meeting"),
        attendees: Array(Math.floor(Math.random() * 5 + 2)).fill(0).map(function (i) {
          return Object(_users_user_utilities__WEBPACK_IMPORTED_MODULE_1__["generateMockUser"])();
        }),
        organiser: Object(_users_user_utilities__WEBPACK_IMPORTED_MODULE_1__["generateMockUser"])(),
        date: start,
        duration: duration,
        description: faker__WEBPACK_IMPORTED_MODULE_2__["lorem"].paragraph(),
        notes: faker__WEBPACK_IMPORTED_MODULE_2__["lorem"].paragraph(),
        location: faker__WEBPACK_IMPORTED_MODULE_2__["address"].city(),
        catering: Math.floor(Math.random() * 34567) % 3 === 0
      };
    }
    /**
     * Generate a list of free time slots between the given bookings
     * @param list List of bookings to find slots between
     * @param min_size Minimum length of a free slot in minutes
     */


    function getFreeBookingSlots(list) {
      var min_size = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;

      if (!list) {
        return [{
          start: 0,
          end: dayjs__WEBPACK_IMPORTED_MODULE_3__().startOf('m').valueOf() * 10
        }];
      }

      var slots = [];
      var start = dayjs__WEBPACK_IMPORTED_MODULE_3__(0);
      list.sort(function (a, b) {
        return a.date - b.date;
      });

      var _iterator8 = _createForOfIteratorHelper(list),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var booking = _step8.value;
          var bkn_start = dayjs__WEBPACK_IMPORTED_MODULE_3__(booking.date);
          var bkn_end = bkn_start.add(booking.duration, 'm');

          if (bkn_start.isAfter(start)) {
            var diff = bkn_start.diff(start, 'm');

            if (diff >= min_size) {
              slots.push({
                start: start.valueOf(),
                end: bkn_start.valueOf()
              });
            }

            start = bkn_end;
          }
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      slots.push({
        start: start.valueOf(),
        end: dayjs__WEBPACK_IMPORTED_MODULE_3__().startOf('m').valueOf() * 10
      });
      return slots;
    }
    /**
     * Get the next free time slot from the given bookings
     * @param list List of bookings to find the next slot
     * @param date Date to find next slot after in ms since UTC epoch
     * @param min_size Minimum length of the free slot in minutes
     */


    function getNextFreeBookingSlot(list) {
      var date = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dayjs__WEBPACK_IMPORTED_MODULE_3__().valueOf();
      var min_size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 30;
      var slots = getFreeBookingSlots(list, min_size);
      var time = dayjs__WEBPACK_IMPORTED_MODULE_3__(date).startOf('m').second(1);

      var _iterator9 = _createForOfIteratorHelper(slots),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var block = _step9.value;
          var start = dayjs__WEBPACK_IMPORTED_MODULE_3__(block.start).startOf('m');
          var end = dayjs__WEBPACK_IMPORTED_MODULE_3__(block.end).startOf('m');

          if (start.isAfter(time, 's')) {
            return block;
          } else if (time.isBefore(end, 's')) {
            var duration = end.diff(time, 'm');

            if (duration >= min_size) {
              return block;
            }
          }
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      return slots[slots.length - 1];
    }
    /***/

  },

  /***/
  "./src/app/services/data/bookings/bookings.service.ts":
  /*!************************************************************!*\
    !*** ./src/app/services/data/bookings/bookings.service.ts ***!
    \************************************************************/

  /*! exports provided: BookingsService */

  /***/
  function srcAppServicesDataBookingsBookingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsService", function () {
      return BookingsService;
    });
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../base.service */
    "./src/app/services/data/base.service.ts");
    /* harmony import */


    var _booking_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./booking.class */
    "./src/app/services/data/bookings/booking.class.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var BookingsService = /*#__PURE__*/function (_base_service__WEBPAC) {
      _inherits(BookingsService, _base_service__WEBPAC);

      var _super8 = _createSuper(BookingsService);

      function BookingsService() {
        var _this27;

        _classCallCheck(this, BookingsService);

        _this27 = _super8.call(this);
        _this27._name = 'Bookings';
        _this27._api_route = 'bookings';

        _this27._compare = function (a, b) {
          return !a.id.localeCompare(b.id) || !a.icaluid.localeCompare(b.icaluid);
        };

        return _this27;
      }
      /**
       * Open form modal for creating new bookings
       * @param space Space to make booking in
       * @param date Default date on the form
       */


      _createClass(BookingsService, [{
        key: "new",
        value: function _new(options) {
          var _this28 = this;

          if (options.space) {
            this.parent.Overlay.open('booking', {
              config: 'modal',
              data: options
            }, function (event) {
              var booking = event.data.booking.toJSON();

              _this28.timeout('book', function () {
                _this28.create(options.space, booking).then(function () {
                  _this28.parent.notifySuccess('Booking successfully created');

                  event.data.close ? event.data.close() : '';
                })["catch"](function (_) {
                  _this28.parent.notifyError("Error creating meeting. ".concat(_));

                  event.data.on_error ? event.data.on_error() : '';
                });
              }, 1000);
            });
          }
        }
        /**
         * Create new booking with the given properties
         * @param booking New booking data
         */

      }, {
        key: "create",
        value: function create(space, booking) {
          var _this29 = this;

          return new Promise(function (resolve, reject) {
            if (space) {
              var request = {
                title: booking.title,
                count: {
                  staff: booking.num_staff ? +booking.num_staff : 0,
                  partners: booking.num_partners ? +booking.num_partners : 0
                },
                staff_id: '',
                start: booking.date.valueOf(),
                end: dayjs__WEBPACK_IMPORTED_MODULE_2__(booking.date).add(booking.period.duration, 'm').valueOf(),
                host: booking.host || booking.user || {
                  name: 'Panel User'
                }
              };

              var _module = _this29.parent.Systems.get(space.id, 'Bookings');

              if (request && _module) {
                _module.execute('create_meeting', [request]).then(function () {
                  _this29.analyticsEvent('create-success');

                  resolve();
                }, function (err) {
                  _this29.analyticsEvent('create-failed');

                  reject("Error making booking: ".concat(err));
                });
              } else {
                reject("No Bookings module found for space ".concat(space.id));
              }
            } else {
              reject('No space set for booking');
            }
          });
        }
      }, {
        key: "process",
        value: function process(raw_data) {
          return new _booking_class__WEBPACK_IMPORTED_MODULE_1__["Booking"](this, raw_data);
        }
      }]);

      return BookingsService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_0__["BaseAPIService"]);

    BookingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      factory: function BookingsService_Factory() {
        return new BookingsService();
      },
      token: BookingsService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/data/organisation/building.class.ts":
  /*!**************************************************************!*\
    !*** ./src/app/services/data/organisation/building.class.ts ***!
    \**************************************************************/

  /*! exports provided: Building */

  /***/
  function srcAppServicesDataOrganisationBuildingClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Building", function () {
      return Building;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _base_api_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../base-api.class */
    "./src/app/services/data/base-api.class.ts");
    /* harmony import */


    var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/utilities/general.utilities */
    "./src/app/shared/utilities/general.utilities.ts");

    var Building = /*#__PURE__*/function (_base_api_class__WEBP2) {
      _inherits(Building, _base_api_class__WEBP2);

      var _super9 = _createSuper(Building);

      function Building(service, raw_data) {
        var _this30;

        _classCallCheck(this, Building);

        _this30 = _super9.call(this, service, raw_data);
        _this30.service = service;
        _this30.zone_id = raw_data.zone_id || raw_data.zone;
        _this30._extras = (raw_data.extras || []).map(function (i) {
          return {
            id: i.extra_id || i.id,
            name: i.extra_name || i.name
          };
        });
        _this30._loan_items = (raw_data.loan_items || []).map(function (i) {
          return {
            id: i.extra_id || i.id,
            name: i.extra_name || i.name
          };
        });
        _this30._levels = (raw_data.levels || []).map(function (i) {
          return {
            id: i.level_id || i.id,
            name: i.level_name || i.name
          };
        });
        _this30._roles = raw_data.roles || {};
        _this30._lockers = raw_data.lockers || raw_data.locker_structure || {};
        _this30._systems = raw_data.systems || {};
        _this30._settings = raw_data.settings || {};
        _this30._phone_numbers = raw_data.phone_numbers || {};
        _this30._location = raw_data.location || {
          longitude: null,
          latitude: null
        };
        _this30._searchables = [];

        if (raw_data.neighbourhoods) {
          for (var lvl in raw_data.neighbourhoods) {
            if (raw_data.neighbourhoods.hasOwnProperty(lvl)) {
              var lvl_features = raw_data.neighbourhoods[lvl] || {};

              for (var feature in lvl_features) {
                if (lvl_features.hasOwnProperty(feature)) {
                  _this30._searchables.push({
                    id: lvl_features[feature],
                    name: feature,
                    level_id: lvl
                  });
                }
              }
            }
          }
        }

        return _this30;
      }
      /** List of available extras for the building */


      _createClass(Building, [{
        key: "setting",

        /**
         * Get a custom building setting
         * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
         */
        value: function setting(key) {
          var keys = key.split('.');
          var value = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__["getItemWithKeys"])(keys, this._settings);
          return value;
        }
        /**
         * Get list of users with the associated role
         * @param name Role to find users for
         */

      }, {
        key: "role",
        value: function role(name) {
          return _toConsumableArray(this._roles[name] || []);
        }
        /**
         * Get list of the names of available user role lists
         */

      }, {
        key: "featuresForLevel",

        /**
         * Get search map feature for the given level ID
         * @param level_id ID of level to grab features for
         */
        value: function featuresForLevel(level_id) {
          return (this._searchables || []).filter(function (i) {
            return i.level_id === level_id;
          });
        }
        /**
         * Building objects are readonly and cannot be changed
         */

      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    throw new Error('Building objects are readonly and cannot be changed');

                  case 1:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
        }
        /**
         * Building objects are readonly and cannot be deleted
         */

      }, {
        key: "delete",
        value: function _delete() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    throw new Error('Building objects are readonly and cannot be deleted');

                  case 1:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2);
          }));
        }
      }, {
        key: "extras",
        get: function get() {
          return _toConsumableArray(this._extras || []);
        }
        /** List of available extras for the building */

      }, {
        key: "loan_items",
        get: function get() {
          return _toConsumableArray(this._loan_items || []);
        }
        /** List of available levels for the building */

      }, {
        key: "levels",
        get: function get() {
          return _toConsumableArray(this._levels || []);
        }
      }, {
        key: "role_names",
        get: function get() {
          var _this31 = this;

          return Object.keys(this._roles).filter(function (i) {
            return _this31._roles.hasOwnProperty(i);
          });
        }
        /** Map of the locker ID arrays */

      }, {
        key: "lockers",
        get: function get() {
          return Object.assign({}, this._lockers || {});
        }
        /** Map of important system ids for the building */

      }, {
        key: "systems",
        get: function get() {
          return Object.assign({}, this._systems || {});
        }
        /** Map of important phone numbers for the building */

      }, {
        key: "phone_numbers",
        get: function get() {
          return Object.assign({}, this._phone_numbers || {});
        }
        /** Real coordinates */

      }, {
        key: "location",
        get: function get() {
          return Object.assign({}, this._location);
        }
        /** List of zones associated with the building */

      }, {
        key: "zones",
        get: function get() {
          return _toConsumableArray(this._zones || []);
        }
        /** Searchable map features */

      }, {
        key: "searchables",
        get: function get() {
          return _toConsumableArray(this._searchables || []);
        }
      }]);

      return Building;
    }(_base_api_class__WEBPACK_IMPORTED_MODULE_1__["BaseDataClass"]);
    /***/

  },

  /***/
  "./src/app/services/data/organisation/organisation.class.ts":
  /*!******************************************************************!*\
    !*** ./src/app/services/data/organisation/organisation.class.ts ***!
    \******************************************************************/

  /*! exports provided: Organisation */

  /***/
  function srcAppServicesDataOrganisationOrganisationClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Organisation", function () {
      return Organisation;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _base_api_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../base-api.class */
    "./src/app/services/data/base-api.class.ts");
    /* harmony import */


    var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../shared/utilities/general.utilities */
    "./src/app/shared/utilities/general.utilities.ts");

    var Organisation = /*#__PURE__*/function (_base_api_class__WEBP3) {
      _inherits(Organisation, _base_api_class__WEBP3);

      var _super10 = _createSuper(Organisation);

      function Organisation(service, raw_data) {
        var _this32;

        _classCallCheck(this, Organisation);

        _this32 = _super10.call(this, service, raw_data);
        _this32.service = service;
        _this32._settings = raw_data.settings || {};
        return _this32;
      }
      /**
       * Get a custom building setting
       * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
       */


      _createClass(Organisation, [{
        key: "setting",
        value: function setting(key) {
          var keys = key.split('.');
          var value = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__["getItemWithKeys"])(keys, this._settings);
          return value;
        }
        /**
         * Building objects are readonly and cannot be changed
         */

      }, {
        key: "save",
        value: function save() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    throw new Error('Organisation objects are readonly and cannot be changed');

                  case 1:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));
        }
        /**
         * Building objects are readonly and cannot be deleted
         */

      }, {
        key: "delete",
        value: function _delete() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    throw new Error('Organisation objects are readonly and cannot be deleted');

                  case 1:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4);
          }));
        }
      }]);

      return Organisation;
    }(_base_api_class__WEBPACK_IMPORTED_MODULE_1__["BaseDataClass"]);
    /***/

  },

  /***/
  "./src/app/services/data/organisation/organisation.service.ts":
  /*!********************************************************************!*\
    !*** ./src/app/services/data/organisation/organisation.service.ts ***!
    \********************************************************************/

  /*! exports provided: OrganisationService */

  /***/
  function srcAppServicesDataOrganisationOrganisationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganisationService", function () {
      return OrganisationService;
    });
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../base.service */
    "./src/app/services/data/base.service.ts");
    /* harmony import */


    var _organisation_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./organisation.class */
    "./src/app/services/data/organisation/organisation.class.ts");
    /* harmony import */


    var _building_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./building.class */
    "./src/app/services/data/organisation/building.class.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var OrganisationService = /*#__PURE__*/function (_base_service__WEBPAC2) {
      _inherits(OrganisationService, _base_service__WEBPAC2);

      var _super11 = _createSuper(OrganisationService);

      function OrganisationService() {
        var _this33;

        _classCallCheck(this, OrganisationService);

        _this33 = _super11.call(this);
        _this33._name = 'Organisation';
        _this33._api_route = 'zones';

        _this33.set('buildings', []);

        return _this33;
      }
      /**
       * Get list of levels for the given building ID
       * @param bld_id Building ID
       */


      _createClass(OrganisationService, [{
        key: "levels",
        value: function levels(bld_id) {
          return (this.buildings.find(function (i) {
            return i.id === bld_id;
          }) || {}).levels;
        }
        /**
         * Get a setting from the organisation or active building
         * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
         */

      }, {
        key: "setting",
        value: function setting(key) {
          return this.building.setting(key) || this._organisation.setting(key);
        }
        /** Active building */

      }, {
        key: "getExtras",

        /**
         * Get list of available equipment
         * @param id ID of the building to get the list from. i.e. Defaults to the active building
         */
        value: function getExtras(id, bld_id) {
          var bld = (bld_id ? this.buildings.find(function (i) {
            return i.id === bld_id;
          }) : null) || this.building;

          if (bld && id) {
            return bld.extras.filter(function (i) {
              return i.id.indexOf(id) >= 0;
            }) || [];
          }

          return [];
        }
        /**
         * Get the first level matching the list of given IDs
         * @param ids List of ID to search with
         */

      }, {
        key: "levelWithID",
        value: function levelWithID(ids) {
          var list = ids instanceof Array ? ids : [ids];
          var bld_list = this.buildings;

          var _iterator10 = _createForOfIteratorHelper(list),
              _step10;

          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var id = _step10.value;

              var _iterator11 = _createForOfIteratorHelper(bld_list),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var bld = _step11.value;

                  var _iterator12 = _createForOfIteratorHelper(bld.levels),
                      _step12;

                  try {
                    for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                      var lvl = _step12.value;

                      if (lvl.id === id) {
                        return lvl;
                      }
                    }
                  } catch (err) {
                    _iterator12.e(err);
                  } finally {
                    _iterator12.f();
                  }
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }

          return null;
        }
        /**
         * Initialise service data
         */

      }, {
        key: "load",
        value: function load() {
          var _this34 = this;

          if (localStorage) {
            this._active_building = localStorage.getItem("".concat(this.parent.name, ".building"));
          }

          return new Promise(function (resolve) {
            _this34.loadOrganisation().then(function () {
              _this34.loadBuildings().then(function () {
                _this34.loadLevels().then(function () {
                  return resolve();
                });
              });
            });
          });
        }
        /**
         * Load organisation data for application
         */

      }, {
        key: "loadOrganisation",
        value: function loadOrganisation() {
          var _this35 = this;

          return new Promise(function (resolve) {
            _this35.query({
              tags: 'org',
              engine: true
            }).then(function (org_data) {
              _this35._organisation = new _organisation_class__WEBPACK_IMPORTED_MODULE_1__["Organisation"](_this35, org_data[0]);

              _this35.set('organisation', _this35._organisation);

              _this35.shown_error = false;
              resolve();
            }, function (_) {
              if (!_this35.shown_error) {
                _this35.shown_error = true;

                _this35.parent.notifyError('Error loading organisation data. Retrying...');
              }

              _this35.timeout('load_org', function () {
                return _this35.loadOrganisation().then(function () {
                  return resolve();
                });
              }, 1000);
            });
          });
        }
        /**
         * Load buildings data for the organisation
         */

      }, {
        key: "loadBuildings",
        value: function loadBuildings() {
          var _this36 = this;

          return new Promise(function (resolve) {
            _this36.query({
              tags: 'building',
              engine: true
            }).then(function (bld_data) {
              var buildings = bld_data.map(function (i) {
                return new _building_class__WEBPACK_IMPORTED_MODULE_2__["Building"](_this36, i);
              });

              _this36.set('buildings', buildings || []);

              if (!_this36._active_building && buildings && buildings.length > 0) {
                _this36._active_building = buildings[0].id;
              }

              resolve();
            }, function (_) {
              _this36.parent.notifyError('Error loading building data. Retrying...');

              _this36.timeout('load_bld', function () {
                return _this36.loadBuildings().then(function () {
                  return resolve();
                });
              }, 1000);
            });
          });
        }
        /**
         * Load levels data for the buildings
         */

      }, {
        key: "loadLevels",
        value: function loadLevels() {
          var _this37 = this;

          return new Promise(function (resolve) {
            _this37.query({
              tags: 'level',
              engine: true
            }).then(function (lvl_data) {
              resolve();
            }, function (_) {
              _this37.parent.notifyError('Error loading level data. Retrying...');

              _this37.timeout('load_lvl', function () {
                return _this37.loadLevels().then(function () {
                  return resolve();
                });
              }, 1000);
            });
          });
        }
      }, {
        key: "building",
        get: function get() {
          var _this38 = this;

          return this.buildings.find(function (i) {
            return i.id === _this38._active_building;
          });
        },
        set: function set(bld) {
          if (bld instanceof _building_class__WEBPACK_IMPORTED_MODULE_2__["Building"]) {
            this._active_building = bld.id;
          } else {
            this._active_building = bld;
          }
        }
        /** List of buildings for the organisation */

      }, {
        key: "buildings",
        get: function get() {
          return this.get('buildings') || [];
        }
      }]);

      return OrganisationService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_0__["BaseAPIService"]);

    OrganisationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      factory: function OrganisationService_Factory() {
        return new OrganisationService();
      },
      token: OrganisationService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/data/polling/polling.service.ts":
  /*!**********************************************************!*\
    !*** ./src/app/services/data/polling/polling.service.ts ***!
    \**********************************************************/

  /*! exports provided: PingHistory, PollingService */

  /***/
  function srcAppServicesDataPollingPollingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PingHistory", function () {
      return PingHistory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PollingService", function () {
      return PollingService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../base.service */
    "./src/app/services/data/base.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PingHistory = function PingHistory(data) {
      _classCallCheck(this, PingHistory);

      this.history = data.history;
      this.last_ping = data.last_ping;
      this.room_email = data.room_email;
      this.room_id = data.room_id;
    };

    var SECONDS = 1000;
    var MINUTES = 60 * SECONDS;

    var PollingService = /*#__PURE__*/function (_base_service__WEBPAC3) {
      _inherits(PollingService, _base_service__WEBPAC3);

      var _super12 = _createSuper(PollingService);

      function PollingService() {
        var _this39;

        _classCallCheck(this, PollingService);

        _this39 = _super12.call(this);
        _this39._name = 'Users';
        _this39._api_route = 'pings';
        return _this39;
      }

      _createClass(PollingService, [{
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var _this40 = this;

            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    this.interval('poll_endpoint', function () {
                      _this40.add({
                        room_id: _this40.parent.get('system')
                      });
                    }, 10 * MINUTES);

                  case 1:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "query",
        value: function query() {
          throw new Error('Query method not available for polling endpoint');
        }
      }, {
        key: "show",
        value: function show() {
          throw new Error('Show method not available for polling endpoint');
        }
      }, {
        key: "update",
        value: function update() {
          throw new Error('Put method not available for polling endpoint');
        }
      }, {
        key: "delete",
        value: function _delete() {
          throw new Error('delete method not available for polling endpoint');
        }
      }, {
        key: "process",
        value: function process(data) {
          return new PingHistory(data);
        }
      }]);

      return PollingService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseAPIService"]);

    PollingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      factory: function PollingService_Factory() {
        return new PollingService();
      },
      token: PollingService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/data/spaces/space.class.ts":
  /*!*****************************************************!*\
    !*** ./src/app/services/data/spaces/space.class.ts ***!
    \*****************************************************/

  /*! exports provided: Space */

  /***/
  function srcAppServicesDataSpacesSpaceClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Space", function () {
      return Space;
    });
    /* harmony import */


    var _base_api_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../base-api.class */
    "./src/app/services/data/base-api.class.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);

    var OPTION_DEFAULTS = {
      duration: 60
    };

    var Space = /*#__PURE__*/function (_base_api_class__WEBP4) {
      _inherits(Space, _base_api_class__WEBP4);

      var _super13 = _createSuper(Space);

      function Space(service) {
        var _this41;

        var raw_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, Space);

        _this41 = _super13.call(this, service, raw_data);
        _this41.service = service;
        var settings = raw_data.settings || {};
        _this41._level = _this41.service.parent.Organisation.levelWithID(raw_data.zones) || {
          settings: {}
        };
        _this41.long_name = settings.long_name || raw_data.long_name;
        _this41.map_id = settings.map_id || raw_data.map_id;
        _this41.type = settings.book_type || _this41._level.book_type || _this41._level.settings.book_type || raw_data.book_type || raw_data.type || 'book';
        _this41.can_search = settings.searchable || raw_data.searchable || raw_data.can_search || false;
        _this41.can_control = settings.controlable || raw_data.controlable || raw_data.can_control || false;
        _this41.hourly_rate = settings.cost_hour || raw_data.cost_hour || raw_data.hourly_rate || 0;
        _this41.bookable = settings.bookable || raw_data.bookable || false;
        _this41.setup = (settings.setup || 0) / 60 || raw_data.setup || 0;
        _this41.breakdown = (settings.breakdown || 0) / 60 || raw_data.breakdown || 0;
        _this41.capacity = raw_data.capacity || 0;
        _this41.was_available = settings.available || raw_data.available || raw_data.was_available || false;
        _this41._zones = raw_data.zones || [];
        var raw_bookings = settings.bookings || raw_data.bookings || [];
        _this41._bookings = raw_bookings.map(function (i) {
          return i.id;
        });

        if (_this41.service.parent && _this41.service.parent.Bookings) {
          if (raw_bookings) {
            var id_list = [];
            raw_bookings.forEach(function (booking) {
              var id = booking.id;

              _this41.service.parent.Bookings.removeFrom(_this41.id, [id], 'class');

              id = _this41.service.parent.Bookings.addFrom(_this41.id, booking, 'class');
              id_list.push(id);
            });
            _this41._bookings = id_list;
          }
        }

        _this41._extras = [];
        _this41._linked_spaces = settings.linked_rooms || raw_data.linked_rooms || raw_data.linked_spaces || [];
        return _this41;
      }
      /** Whether the space has a booking in progress */


      _createClass(Space, [{
        key: "bookingsFor",

        /**
         * Get bookings for space
         * @param date Date to filter bookings on
         */
        value: function bookingsFor(date) {
          if (date) {
            var day = dayjs__WEBPACK_IMPORTED_MODULE_1__(date);
            return this.bookings.filter(function (i) {
              return dayjs__WEBPACK_IMPORTED_MODULE_1__(i.date).isSame(day, 'd');
            });
          } else {
            return this.bookings;
          }
        }
        /**
         * Whether the space is available.
         */

      }, {
        key: "isAvailable",
        value: function isAvailable(options) {
          var _this42 = this;

          options = options ? Object.assign(Object.assign(Object.assign({}, OPTION_DEFAULTS), options), {
            room_ids: this.id
          }) : Object.assign(Object.assign({}, OPTION_DEFAULTS), {
            room_ids: this.id
          });
          return new Promise(function (resolve) {
            _this42.service.available(options).then(function (list) {
              var _iterator13 = _createForOfIteratorHelper(list),
                  _step13;

              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var rm = _step13.value;

                  if (rm.id === _this42.id) {
                    return resolve(true);
                  }
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }

              resolve(false);
            }, function () {
              return resolve(false);
            });
          });
        }
        /**
         * Make a copy of this object
         */

      }, {
        key: "clone",
        value: function clone() {
          return new Space(this.service, this);
        }
        /**
         * Make a copy of this object without identification data
         */

      }, {
        key: "duplicate",
        value: function duplicate() {
          return new Space(this.service, Object.assign(Object.assign({}, this), {
            id: null,
            email: null,
            _bookings: []
          }));
        }
      }, {
        key: "in_use",
        get: function get() {
          return !!this.current;
        }
        /** Get any current in progress meeting */

      }, {
        key: "current",
        get: function get() {
          var bookings = this.bookings;

          var _iterator14 = _createForOfIteratorHelper(bookings),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var bkn = _step14.value;
              var status = bkn.status;

              if (status === 'in_progress' || status === 'started') {
                return bkn;
              }
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }

          return null;
        }
        /** Get the next upcoming meeting */

      }, {
        key: "next",
        get: function get() {
          var now = dayjs__WEBPACK_IMPORTED_MODULE_1__().valueOf();
          var bookings = this.bookings;

          var _iterator15 = _createForOfIteratorHelper(bookings),
              _step15;

          try {
            for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
              var bkn = _step15.value;

              if (bkn.date > now) {
                return bkn;
              }
            }
          } catch (err) {
            _iterator15.e(err);
          } finally {
            _iterator15.f();
          }

          return null;
        }
        /** List of stored bookings for the space */

      }, {
        key: "bookings",
        get: function get() {
          var _this43 = this;

          var booking_list = this.service && this.service.parent && this.service.parent.Bookings ? this.service.parent.Bookings.list(function (booking) {
            return _this43._bookings.indexOf(booking.id) >= 0;
          }) || [] : [];
          return booking_list.sort(function (a, b) {
            return a.date - b.date;
          });
        }
        /** List of bookings for today */

      }, {
        key: "todays_bookings",
        get: function get() {
          return this.bookingsFor(dayjs__WEBPACK_IMPORTED_MODULE_1__().valueOf());
        }
        /** List of ids for linked spaces */

      }, {
        key: "linked_spaces",
        get: function get() {
          return _toConsumableArray(this._linked_spaces);
        }
        /** Level in which the space is associated */

      }, {
        key: "level",
        get: function get() {
          return this._level;
        }
        /** Engine zones associated with the space */

      }, {
        key: "zones",
        get: function get() {
          return _toConsumableArray(this._zones);
        }
      }]);

      return Space;
    }(_base_api_class__WEBPACK_IMPORTED_MODULE_0__["BaseDataClass"]);
    /***/

  },

  /***/
  "./src/app/services/data/spaces/space.utilities.ts":
  /*!*********************************************************!*\
    !*** ./src/app/services/data/spaces/space.utilities.ts ***!
    \*********************************************************/

  /*! exports provided: generateMockSpace */

  /***/
  function srcAppServicesDataSpacesSpaceUtilitiesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generateMockSpace", function () {
      return generateMockSpace;
    });
    /* harmony import */


    var _bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../bookings/booking.utilities */
    "./src/app/services/data/bookings/booking.utilities.ts");
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! faker */
    "./node_modules/faker/index.js");
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _users_user_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../users/user.utilities */
    "./src/app/services/data/users/user.utilities.ts");

    var SPACE_COUNT = 0;

    function generateMockSpace(id, zones) {
      if (!id) {
        id = "space-".concat(SPACE_COUNT++);
      }

      var name = "".concat(faker__WEBPACK_IMPORTED_MODULE_1__["name"].firstName(), " ").concat(faker__WEBPACK_IMPORTED_MODULE_1__["name"].lastName(), " Space");
      var linked = Math.floor(Math.random() * 99999) % 2 === 0 && SPACE_COUNT > 1;
      return {
        id: id,
        name: name,
        long_name: "".concat(name, " with an long name"),
        map_id: "".concat(SPACE_COUNT),
        capacity: Math.floor(Math.random() * 20 + 1) * 2,
        email: "".concat(name.toLowerCase().split(' ').join('.'), "@").concat(_users_user_utilities__WEBPACK_IMPORTED_MODULE_2__["USER_DOMAIN"]),
        type: faker__WEBPACK_IMPORTED_MODULE_1__["commerce"].productName(),
        searchable: Math.floor(Math.random() * 99999) % 2 === 0,
        controlable: Math.floor(Math.random() * 99999) % 2 === 0,
        bookable: Math.floor(Math.random() * 99999) % 2 === 0,
        cost_hour: Math.floor(Math.random() * 300) * 100,
        setup: Math.floor(Math.random() * 6) * 5,
        breakdown: Math.floor(Math.random() * 6) * 5,
        zones: zones || ['zone_lvl-0'],
        bookings: Array(10).fill(0).map(function (i) {
          return Object(_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_0__["generateMockBooking"])();
        }),
        linked_rooms: linked ? ["space-".concat(Math.floor(Math.random() * (SPACE_COUNT - 1)))] : []
      };
    }
    /***/

  },

  /***/
  "./src/app/services/data/spaces/spaces.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/services/data/spaces/spaces.service.ts ***!
    \********************************************************/

  /*! exports provided: SpacesService */

  /***/
  function srcAppServicesDataSpacesSpacesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpacesService", function () {
      return SpacesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../base.service */
    "./src/app/services/data/base.service.ts");
    /* harmony import */


    var _space_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./space.class */
    "./src/app/services/data/spaces/space.class.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SpacesService = /*#__PURE__*/function (_base_service__WEBPAC4) {
      _inherits(SpacesService, _base_service__WEBPAC4);

      var _super14 = _createSuper(SpacesService);

      function SpacesService() {
        var _this44;

        _classCallCheck(this, SpacesService);

        _this44 = _super14.call(this);
        _this44._name = 'Space';
        _this44._api_route = 'rooms';

        _this44._compare = function (a, b) {
          return !a.id.localeCompare(b.id) || !a.email.localeCompare(b.email);
        };

        _this44._list_filter = function (a) {
          var bld = _this44.parent.Organisation.building;
          return a.level.bld_id === bld.id;
        };

        return _this44;
      }
      /**
       * Get available spaces
       * @param options
       */


      _createClass(SpacesService, [{
        key: "available",
        value: function available(options) {
          var _this45 = this;

          if (!options) {
            throw new Error('Space avilability requires request options');
          }

          if (!options.date) {
            options.date = dayjs__WEBPACK_IMPORTED_MODULE_3__().startOf('m').valueOf();
          }

          var key = "available|".concat(options.id ? options.id : '');

          if (!this._promises[key]) {
            this._promises[key] = new Promise(function (resolve, reject) {
              var respond = function respond(list) {
                var available_spaces = list.filter(function (i) {
                  var linked = list.filter(function (j) {
                    return i.linked_spaces.indexOf(j.id) >= 0;
                  });
                  return i.was_available && linked.reduce(function (a, v) {
                    return a && v.was_available;
                  }, true);
                });
                resolve(available_spaces);
              };

              var error = function error(e) {
                return reject(e);
              };

              if (options.id) {
                _this45.show(options.id, options).then(function (i) {
                  return respond([i]);
                }, error);
              } else {
                _this45.query(options).then(respond, error);
              }
            });
          }

          return this._promises[key];
        }
        /**
         * Load initial data for the service
         */

      }, {
        key: "load",
        value: function load() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.query();

                  case 2:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
        /**
         * Convert raw data into API object
         * @param raw_data Raw API data
         */

      }, {
        key: "process",
        value: function process(raw_data) {
          return new _space_class__WEBPACK_IMPORTED_MODULE_2__["Space"](this, raw_data);
        }
      }]);

      return SpacesService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_1__["BaseAPIService"]);

    SpacesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      factory: function SpacesService_Factory() {
        return new SpacesService();
      },
      token: SpacesService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/data/systems-manager/systems-manager.service.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/services/data/systems-manager/systems-manager.service.ts ***!
    \**************************************************************************/

  /*! exports provided: SystemsManagerService */

  /***/
  function srcAppServicesDataSystemsManagerSystemsManagerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SystemsManagerService", function () {
      return SystemsManagerService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @placeos/ts-client */
    "./node_modules/@placeos/ts-client/dist/esm/index.js");
    /* harmony import */


    var _shared_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/base.class */
    "./src/app/shared/base.class.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SystemsManagerService = /*#__PURE__*/function (_shared_base_class__W4) {
      _inherits(SystemsManagerService, _shared_base_class__W4);

      var _super15 = _createSuper(SystemsManagerService);

      function SystemsManagerService() {
        var _this46;

        _classCallCheck(this, SystemsManagerService);

        _this46 = _super15.call(this);
        /** Subject for System list */

        _this46._list = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        /** Observable for system list */

        _this46.systems = _this46._list.asObservable();
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["onlineState"])().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(function (_) {
          return _;
        })).subscribe(function () {
          return _this46.load();
        });
        return _this46;
      }
      /** List of available systems */


      _createClass(SystemsManagerService, [{
        key: "get",

        /**
         * Get engine module for the given system
         * @param sys_id ID of the system to get the module from
         * @param mod_id ID of the module with the given system
         * @param index Index of the module
         */
        value: function get(sys_id, mod_id, index) {
          return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["getModule"])(sys_id, mod_id, index);
        }
        /**
         * Load Systems
         */

      }, {
        key: "load",
        value: function load() {
          this.loadSystems();
        }
        /**
         * Load one page of systems
         * @param offset Item offset for the page to load
         */

      }, {
        key: "loadSystems",
        value: function loadSystems() {
          var _this47 = this;

          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2000;
          Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["querySystems"])({
            offset: offset,
            limit: limit
          }).toPromise().then(function (details) {
            var systems = [].concat(_toConsumableArray(_this47.list), _toConsumableArray(details.data));
            systems.sort(function (a, b) {
              return (a.name || '').localeCompare(b.name);
            });

            _this47._list.next(systems);

            if (systems.length < details.total) {
              _this47.loadSystems(systems.length);
            }
          })["catch"](function (e) {
            return _this47.timeout('retry', function () {
              return _this47.loadSystems(offset);
            }, 2000);
          });
        }
      }, {
        key: "list",
        get: function get() {
          return this._list.getValue() || [];
        }
      }]);

      return SystemsManagerService;
    }(_shared_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"]);

    SystemsManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      factory: function SystemsManagerService_Factory() {
        return new SystemsManagerService();
      },
      token: SystemsManagerService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/data/users/user.class.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/data/users/user.class.ts ***!
    \***************************************************/

  /*! exports provided: User */

  /***/
  function srcAppServicesDataUsersUserClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "User", function () {
      return User;
    });
    /* harmony import */


    var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @acaprojects/ngx-dynamic-forms */
    "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
    /* harmony import */


    var _base_api_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../base-api.class */
    "./src/app/services/data/base-api.class.ts");

    var User = /*#__PURE__*/function (_base_api_class__WEBP5) {
      _inherits(User, _base_api_class__WEBP5);

      var _super16 = _createSuper(User);

      function User(service) {
        var _this48;

        var raw_data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        _classCallCheck(this, User);

        _this48 = _super16.call(this, service, raw_data);
        _this48.service = service;
        _this48.first_name = raw_data.first_name;
        _this48.last_name = raw_data.last_name;
        _this48.windows_id = raw_data.email;
        _this48.type = raw_data.visitor ? 'external' : raw_data.type || 'internal';
        _this48.phone = raw_data.phone || raw_data.mobile;
        _this48.business_unit = raw_data.business_unit || raw_data.department;
        _this48._organisation = raw_data.organisation || {
          id: raw_data.organisation_id,
          name: raw_data.organisation_name
        };
        _this48.external = _this48.type === 'external';
        _this48._location = null;
        _this48.staff_code = raw_data.staff_code || raw_data.fmno;
        _this48._delegates = raw_data.delegates;
        return _this48;
      }
      /** Organisation the user is associated with */


      _createClass(User, [{
        key: "locate",

        /**
         * Ask the server for the users current location
         */
        value: function locate() {
          var _this49 = this;

          var service = this.service.parent || {};
          return new Promise(function (resolve, reject) {
            if (service.Location) {
              service.Location.show(_this49.id, {
                desk: _this49.email
              }).then(function (l) {
                _this49._location = l;
                resolve(l);
              }, function (e) {
                return reject(e);
              });
            } else {
              resolve(null);
            }
          });
        }
        /**
         * Whether user is available during the given period
         * @param start Start time as a unix timestamp with milliseconds
         * @param end End time as a unix timestamp with milliseconds
         */

      }, {
        key: "available",
        value: function available(start, end) {
          var _this50 = this;

          return new Promise(function (resolve) {
            _this50.service.query({
              email: _this50.email,
              start: start,
              end: end
            }).then(function (l) {
              return resolve(l && l.length > 0);
            }, function (_) {
              return resolve(false);
            });
          });
        }
        /**
         * Make a copy of this object
         */

      }, {
        key: "clone",
        value: function clone() {
          return new User(this.service, this);
        }
        /**
         * Make a copy of this object without identification data
         */

      }, {
        key: "duplicate",
        value: function duplicate() {
          return new User(this.service, Object.assign(Object.assign({}, this), {
            id: null,
            email: null
          }));
        }
        /**
         * Initialise the form field metadata for the field
         */

      }, {
        key: "initialiseFormFields",
        value: function initialiseFormFields() {
          var edit = !!this.id;
          var fields = [new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["ADynamicFormField"]({
            key: 'name',
            type: 'input',
            value: this.name,
            hide: true
          }), new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["ADynamicFormField"]({
            key: 'first_name',
            label: 'First Name',
            type: 'input',
            value: this.first_name,
            required: true
          }), new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["ADynamicFormField"]({
            key: 'last_name',
            label: 'Last Name',
            type: 'input',
            value: this.last_name,
            required: true
          }), new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["ADynamicFormField"]({
            key: 'email',
            label: 'Email',
            type: 'input',
            value: this.email,
            required: true,
            attributes: {
              type: 'email'
            }
          })];
          return fields;
        }
      }, {
        key: "organisation",
        get: function get() {
          return this._organisation;
        }
        /** Map location of the user */

      }, {
        key: "last_location",
        get: function get() {
          return this._location ? Object.assign({}, this._location) : null;
        }
        /** List of users that this user can act on behalf */

      }, {
        key: "delegates",
        get: function get() {
          return _toConsumableArray(this._delegates || []);
        }
      }]);

      return User;
    }(_base_api_class__WEBPACK_IMPORTED_MODULE_1__["BaseDataClass"]);
    /***/

  },

  /***/
  "./src/app/services/data/users/user.utilities.ts":
  /*!*******************************************************!*\
    !*** ./src/app/services/data/users/user.utilities.ts ***!
    \*******************************************************/

  /*! exports provided: USER_DOMAIN, generateMockUser */

  /***/
  function srcAppServicesDataUsersUserUtilitiesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "USER_DOMAIN", function () {
      return USER_DOMAIN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "generateMockUser", function () {
      return generateMockUser;
    });
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! faker */
    "./node_modules/faker/index.js");
    /* harmony import */


    var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */


    var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/utilities/general.utilities */
    "./src/app/shared/utilities/general.utilities.ts");

    var USER_COUNT = 0;
    var USER_DOMAIN = 'acaprojects.com';
    var USER_EMAILS = [];
    /**
     * Generate raw mock data for a user
     * @param id Forced ID for the mock
     * @param name Forced name for the user
     * @param external Whether user is external of the organisation
     */

    function generateMockUser(id, name, external) {
      if (!id) {
        id = "user-".concat(USER_COUNT++);
      }

      if (!name) {
        name = "".concat(faker__WEBPACK_IMPORTED_MODULE_0__["name"].firstName(), " ").concat(faker__WEBPACK_IMPORTED_MODULE_0__["name"].lastName());
      }

      if (external === undefined) {
        external = !(Math.random() * 99999 % 2);
      }

      var organisation = external ? faker__WEBPACK_IMPORTED_MODULE_0__["company"].companyName() : USER_DOMAIN.split('.')[0];
      var delegates = [];
      var delegate_count = Math.min(Math.random() * 4 + 1, USER_EMAILS.length);

      for (var i = 0; i < delegate_count; i++) {
        delegates.push(USER_EMAILS[Math.floor(Math.random() * USER_EMAILS.length)]);
      }

      delegates = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_1__["unique"])(delegates);
      var email = "".concat(name.split(' ').join('.').toLowerCase(), "@").concat(external ? 'not-' : '').concat(USER_DOMAIN);
      USER_EMAILS.push(email);
      return {
        id: id,
        name: name,
        email: email,
        phone: faker__WEBPACK_IMPORTED_MODULE_0__["phone"].phoneNumber(),
        visitor: external,
        organisation: {
          id: organisation.split(' ').join('.').toLowerCase(),
          name: organisation
        },
        department: faker__WEBPACK_IMPORTED_MODULE_0__["commerce"].department(),
        staff_code: Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_1__["padZero"])(Math.floor(Math.random() * 99999), 5),
        delegates: delegates
      };
    }
    /***/

  },

  /***/
  "./src/app/services/data/users/users.service.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/data/users/users.service.ts ***!
    \******************************************************/

  /*! exports provided: UsersService */

  /***/
  function srcAppServicesDataUsersUsersServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersService", function () {
      return UsersService;
    });
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ts-md5/dist/md5 */
    "./node_modules/ts-md5/dist/md5.js");
    /* harmony import */


    var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @placeos/ts-client */
    "./node_modules/@placeos/ts-client/dist/esm/index.js");
    /* harmony import */


    var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../base.service */
    "./src/app/services/data/base.service.ts");
    /* harmony import */


    var _user_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./user.class */
    "./src/app/services/data/users/user.class.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UsersService = /*#__PURE__*/function (_base_service__WEBPAC5) {
      _inherits(UsersService, _base_service__WEBPAC5);

      var _super17 = _createSuper(UsersService);

      function UsersService(uhttp, location) {
        var _this51;

        _classCallCheck(this, UsersService);

        _this51 = _super17.call(this);
        _this51.uhttp = uhttp;
        _this51.location = location;
        _this51._name = 'Users';
        _this51._api_route = 'users';

        _this51._compare = function (a, b) {
          return !a.id.localeCompare(b.id) || !a.email.localeCompare(b.email);
        };

        _this51.set('current_user', new _user_class__WEBPACK_IMPORTED_MODULE_5__["User"](_assertThisInitialized(_this51), {
          id: 'local_user',
          name: 'Local User'
        }));

        return _this51;
      }
      /** Currently logged in user */


      _createClass(UsersService, [{
        key: "setToken",

        /**
         * Sets the access token and expiry for the user
         * @param token OAuth bearer token
         * @param expiry Expiry epoch timestamp in ms
         * @param reload Whether to reload the page after setting tokens
         */
        value: function setToken(token, expiry) {
          var reload = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

          if (!expiry) {
            expiry = dayjs__WEBPACK_IMPORTED_MODULE_6__().add(7, 'd').endOf('d').valueOf();
          }

          var path = "".concat(location.origin).concat(this.parent.setting('composer.route') || '', "/oauth-resp.html");
          var client_id = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashStr(path);

          if (sessionStorage) {
            sessionStorage.setItem("".concat(client_id, "_access_token"), token);
            sessionStorage.setItem("".concat(client_id, "_expires_at"), "".concat(expiry));
          }

          if (localStorage) {
            localStorage.setItem("".concat(client_id, "_access_token"), token);
            localStorage.setItem("".concat(client_id, "_expires_at"), "".concat(expiry));
          }

          if (reload) {
            this.location.go(this.location.path());
          }

          return path;
        }
        /**
         * Post login request to the API
         * @param query_params Key value pairs to pass into
         * @param options Options for the login request
         */

      }, {
        key: "login",
        value: function login(query_params) {
          var _this52 = this;

          var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          if (!this._promises['login']) {
            this._promises['login'] = new Promise(function (resolve, reject) {
              _this52.set('status', 'loading');

              var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();

              if (!options || options.form !== false) {
                headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
              }

              var url = (options ? options.url : '') || '/auth/signin';

              _this52.uhttp.post(url, query_params, {
                headers: headers
              }).subscribe(function (_) {
                return null;
              }, function (e) {
                return reject(e);
              }, function () {
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["authorise"])();
                resolve();
              });
            });
          }

          return this._promises['login'];
        }
        /**
         * Logout of user and redirect to logout URL
         */

      }, {
        key: "logout",
        value: function logout() {
          Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["logout"])();
        }
        /**
         * Load initial data for the service
         */

      }, {
        key: "load",
        value: function load() {
          var _this53 = this;

          var tries = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          this.set('status', 'loading');
          return new Promise(function (resolve) {
            if (tries > 4) {
              _this53.set('status', 'invalid');

              return resolve();
            }

            _this53.show('current', {
              engine: true
            }).then(function (current_user) {
              _this53.set('status', 'available');

              _this53.set('check_initialised', current_user);

              _this53.clearTimeout('load');

              if (_this53.parent && _this53.parent.setting('app.user.grab_api_details')) {
                _this53.show(current_user.email).then(function (user) {
                  _this53.set('current_user', user);

                  resolve();
                }, function () {
                  return _this53.timeout('load', function () {
                    return _this53.load(++tries).then(function () {
                      return resolve();
                    });
                  });
                });
              } else {
                resolve();
              }
            }, function () {
              return _this53.timeout('load', function () {
                return _this53.load(++tries).then(function () {
                  return resolve();
                });
              });
            });
          });
        }
        /**
         * Convert raw API data into a valid User Object
         * @param raw_item Raw API data
         */

      }, {
        key: "process",
        value: function process(raw_data) {
          return new _user_class__WEBPACK_IMPORTED_MODULE_5__["User"](this, raw_data);
        }
      }, {
        key: "current",
        get: function get() {
          return this.get('current_user');
        }
      }]);

      return UsersService;
    }(_base_service__WEBPACK_IMPORTED_MODULE_4__["BaseAPIService"]);

    UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
      factory: function UsersService_Factory() {
        return new UsersService(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"]));
      },
      token: UsersService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/hotkeys.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/hotkeys.service.ts ***!
    \*********************************************/

  /*! exports provided: HotkeysService */

  /***/
  function srcAppServicesHotkeysServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HotkeysService", function () {
      return HotkeysService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/utilities/general.utilities */
    "./src/app/shared/utilities/general.utilities.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /** List of keys that cannot be in a combination by themselves or with each other */


    var INVALID_STANDALONE_KEYS = ['control', 'shift', 'alt', 'meta', 'os'];

    var HotkeysService = /*#__PURE__*/function () {
      function HotkeysService() {
        var _this54 = this;

        _classCallCheck(this, HotkeysService);

        /** Map of subjects which store press states of keys */
        this.keydown_states = {};
        /** Map of obserers for key state subjects */

        this.keydown_observers = {};
        /** List of keys at the end of a combination */

        this.combo_end = [];
        /** List of registered hotkey combinations */

        this.registered_combos = [];
        /** Counter for the number of keydown events. Used for checking order of key presses */

        this.counter = 0;
        window.addEventListener('keydown', function (event) {
          var code = _this54.mapKey((event.code || '').toLowerCase());

          if (_this54.last_down !== code) {
            if (!_this54.keydown_states[code]) {
              _this54.keydown_states[code] = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
              _this54.keydown_observers[code] = _this54.keydown_states[code].asObservable();
            }

            _this54.keydown_states[code].next(_this54.counter++);

            if (_this54.combo_end.indexOf(code) >= 0) {
              event.preventDefault();
            }

            _this54.last_down = code;
          }
        });
        window.addEventListener('keyup', function (event) {
          var code = _this54.mapKey((event.code || '').toLowerCase());

          _this54.keydown_states[code].next(null);

          if (_this54.last_down === code) {
            _this54.last_down = null;
          }
        });
      }
      /**
       * Listen to the given key combination
       * @param combo Array of key codes to listen to or a hotkey string e.g. `Alt+Shift+KeyK`
       * @param next Callback for combination presses
       */


      _createClass(HotkeysService, [{
        key: "listen",
        value: function listen(combo, next) {
          var _this55 = this;

          combo = combo instanceof Array ? combo : combo.split('+');
          var combination = combo.map(function (i) {
            return _this55.mapKey(i.toLowerCase());
          });

          if (combination.length > 0 && this.validCombination(combination)) {
            this.registered_combos.push(combination);
            var last_key = combination[combination.length - 1];

            if (!this.keydown_states[last_key]) {
              this.keydown_states[last_key] = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
              this.keydown_observers[last_key] = this.keydown_states[last_key].asObservable();
            }

            this.updateCombinationEndList();
            return this.keydown_observers[last_key].subscribe(function (count) {
              if (count) {
                var presses = [];

                if (combination.length > 1) {
                  // Check that keys are pressed
                  var _iterator16 = _createForOfIteratorHelper(combination),
                      _step16;

                  try {
                    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                      var key = _step16.value;
                      var state = _this55.keydown_states[key];
                      presses.push(state ? state.getValue() || -1 : -1);
                    } // Check that keys are pressed in the correct order

                  } catch (err) {
                    _iterator16.e(err);
                  } finally {
                    _iterator16.f();
                  }

                  for (var i = 0; i < combination.length - 1; i++) {
                    if (presses[i] > presses[i + 1]) {
                      return;
                    }
                  }
                }

                next();
              }
            });
          }

          return null;
        }
        /**
         * Map key codes with multiple versions to simple form
         * @param code Code to transform
         */

      }, {
        key: "mapKey",
        value: function mapKey(code) {
          if (code.indexOf('alt') || code.indexOf('shift') || code.indexOf('control')) {
            return code.replace('left', '').replace('right', '');
          }

          return code;
        }
        /**
         * Update the list of the last keys in combinations to allow for prevent default actions on pre-existing hotkeys
         */

      }, {
        key: "updateCombinationEndList",
        value: function updateCombinationEndList() {
          var key_list = [];

          var _iterator17 = _createForOfIteratorHelper(this.registered_combos),
              _step17;

          try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
              var combo = _step17.value;
              this.combo_end.push(combo[combo.length - 1]);
            }
          } catch (err) {
            _iterator17.e(err);
          } finally {
            _iterator17.f();
          }

          this.combo_end = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_1__["unique"])(key_list);
        }
        /**
         * Checks if the given hotkey combination is allowed and valid
         * @param combo Array of key codes
         */

      }, {
        key: "validCombination",
        value: function validCombination(combo) {
          var non_meta = 0;

          var _iterator18 = _createForOfIteratorHelper(combo),
              _step18;

          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var key = _step18.value;

              if (INVALID_STANDALONE_KEYS.indexOf(key) < 0) {
                non_meta++;
              }
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }

          return non_meta > 0;
        }
      }]);

      return HotkeysService;
    }();

    HotkeysService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      factory: function HotkeysService_Factory() {
        return new HotkeysService();
      },
      token: HotkeysService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/services/settings.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/settings.service.ts ***!
    \**********************************************/

  /*! exports provided: SettingsService */

  /***/
  function srcAppServicesSettingsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SettingsService", function () {
      return SettingsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/utilities/general.utilities */
    "./src/app/shared/utilities/general.utilities.ts");
    /* harmony import */


    var _shared_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/base.class */
    "./src/app/shared/base.class.ts");
    /* harmony import */


    var src_environments_version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/environments/version */
    "./src/environments/version.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SettingsService = /*#__PURE__*/function (_shared_base_class__W5) {
      _inherits(SettingsService, _shared_base_class__W5);

      var _super18 = _createSuper(SettingsService);

      function SettingsService(http) {
        var _this56;

        _classCallCheck(this, SettingsService);

        _this56 = _super18.call(this);
        _this56.http = http;
        /** Map of settings */

        _this56._settings = {
          api: {},
          local: {},
          session: {}
        };
        /** Store for promises */

        _this56._promises = {};
        /** Name of the application */

        _this56._app_name = 'PlaceOS';
        var now = dayjs__WEBPACK_IMPORTED_MODULE_5__();
        var build = dayjs__WEBPACK_IMPORTED_MODULE_5__(src_environments_version__WEBPACK_IMPORTED_MODULE_4__["VERSION"].time);
        var built = now.isSame(build, 'd') ? "Today at ".concat(build.format('h:mmA')) : build.format('D MMM YYYY, h:mmA');

        _this56.log('CORE', "".concat(src_environments_version__WEBPACK_IMPORTED_MODULE_4__["VERSION"].core_version), null, 'debug', true);

        _this56.log('APP', "".concat(src_environments_version__WEBPACK_IMPORTED_MODULE_4__["VERSION"].version, " - ").concat(src_environments_version__WEBPACK_IMPORTED_MODULE_4__["VERSION"].hash, " | Built: ").concat(built), null, 'debug', true);

        _this56.init();

        return _this56;
      }
      /**
       * Initialise the settings
       */


      _createClass(SettingsService, [{
        key: "init",
        value: function init() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.loadFromFile('api');

                  case 2:
                    /* istanbul ignore next */
                    if (this._settings.api.debug) {
                      window.debug = true;
                    }
                    /* istanbul ignore next */


                    if (this._settings.api.app && this._settings.api.app.name) {
                      this._app_name = this._settings.api.app.name;
                    }

                    this.log('Settings', 'Successfully loaded settings');

                    this._initialised.next(true);

                  case 6:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
        /** Whether settings service has initialised */

      }, {
        key: "log",

        /* istanbul ignore next */

        /**
         * Log data to the browser console
         * @param type Type of message
         * @param msg Message body
         * @param args array of argments to log to the console
         * @param stream Stream to emit the console on. 'debug', 'log', 'warn' or 'error'
         * @param force Whether to force message to be emitted when debug is disabled
         */
        value: function log(type, msg, args) {
          var stream = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'debug';
          var force = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

          if (window.debug || force) {
            var colors = ['color: #E91E63', 'color: #3F51B5', 'color: default'];

            if (args) {
              var _console;

              (_console = console)[stream].apply(_console, ["%c[".concat(this.app_name, "]%c[").concat(type, "] %c").concat(msg)].concat(colors, [args]));
            } else {
              var _console2;

              (_console2 = console)[stream].apply(_console2, ["%c[".concat(this.app_name, "]%c[").concat(type, "] %c").concat(msg)].concat(colors));
            }
          }
        }
        /**
         * Get a setting
         * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
         */

      }, {
        key: "get",
        value: function get(key) {
          var keys = key.split('.');
          var value = null;
          value = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__["getItemWithKeys"])(keys, this._settings.api) || Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__["getItemWithKeys"])(keys, this._settings.session) || Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__["getItemWithKeys"])(keys, this._settings.local);
          return value;
        }
        /**
         * Load setting data from a file
         * @param name Namespace to add file data to
         * @param file URL to file to load setting data from
         */

      }, {
        key: "loadFromFile",
        value: function loadFromFile(name) {
          var file = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'assets/settings.json';
          var tries = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            var _this57 = this;

            var file_name, key;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    if (!(file !== 'assets/settings.json' && tries > 5)) {
                      _context8.next = 2;
                      break;
                    }

                    return _context8.abrupt("return", Promise.resolve());

                  case 2:
                    file_name = file.split('/')[file.split('/').length - 1]; // Check if data has been loaded into the global space

                    if (!(window[file_name] instanceof Object)) {
                      _context8.next = 6;
                      break;
                    }

                    this._settings[name] = Object.assign(Object.assign({}, this._settings[name] || {}), window[file_name]);
                    return _context8.abrupt("return", Promise.resolve());

                  case 6:
                    key = "load|".concat(name, "|").concat(file);

                    if (!this._promises[key]) {
                      this._promises[key] = new Promise(function (resolve, reject) {
                        _this57.http.get(file).subscribe(function (data) {
                          _this57._settings[name] = Object.assign(Object.assign({}, _this57._settings[name] || {}), data || {});
                        }, function (e) {
                          _this57.log('Settings', "Failed to load settings from \"".concat(file, "\""));

                          _this57._promises[key] = null;

                          _this57.timeout("load_".concat(file_name), function () {
                            _this57.loadFromFile(name, file, ++tries).then(function () {
                              return resolve();
                            });
                          });
                        }, function () {
                          return resolve();
                        });
                      });
                    }

                    return _context8.abrupt("return", this._promises[key]);

                  case 9:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "app_name",
        get: function get() {
          return this._app_name;
        }
      }]);

      return SettingsService;
    }(_shared_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"]);

    SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
      factory: function SettingsService_Factory() {
        return new SettingsService(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      },
      token: SettingsService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/shared/base.class.ts":
  /*!**************************************!*\
    !*** ./src/app/shared/base.class.ts ***!
    \**************************************/

  /*! exports provided: BaseClass */

  /***/
  function srcAppSharedBaseClassTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseClass", function () {
      return BaseClass;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var BaseClass = /*#__PURE__*/function () {
      function BaseClass() {
        _classCallCheck(this, BaseClass);

        /** Store for named timers */
        this._timers = {};
        /** Store for named intervals */

        this._intervals = {};
        /** Store for named subscription unsub callbacks */

        this._subscriptions = {};
        /** Subject which stores the initialised state of the object */

        this._initialised = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        /** Observable of the initialised state of the object */

        this.initialised = this._initialised.asObservable();
      }
      /** Whether the object has been initialised */


      _createClass(BaseClass, [{
        key: "timeout",

        /**
         * Creates a named timer
         * @param name Name of the timer
         * @param fn Callback function for the timer
         * @param delay Callback delay
         */
        value: function timeout(name, fn) {
          var _this58 = this;

          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;

          if (name && fn && fn instanceof Function) {
            this.clearTimeout(name);
            this._timers[name] = setTimeout(function () {
              fn();
              _this58._timers[name] = null;
            }, delay);
          } else {
            throw new Error(name ? 'Cannot create named timeout without a name' : 'Cannot create a timeout without a callback');
          }
        }
        /**
         * Clears the named timer
         * @param name Timer name
         */

      }, {
        key: "clearTimeout",
        value: function (_clearTimeout) {
          function clearTimeout(_x) {
            return _clearTimeout.apply(this, arguments);
          }

          clearTimeout.toString = function () {
            return _clearTimeout.toString();
          };

          return clearTimeout;
        }(function (name) {
          if (this._timers[name]) {
            clearTimeout(this._timers[name]);
            this._timers[name] = null;
          }
        })
        /**
         * Creates a named interval
         * @param name Name of the interval
         * @param fn Callback function for the interval
         * @param delay Callback delay
         */

      }, {
        key: "interval",
        value: function interval(name, fn) {
          var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 300;

          if (name && fn && fn instanceof Function) {
            this.clearInterval(name);
            this._intervals[name] = setInterval(function () {
              return fn();
            }, delay);
          } else {
            throw new Error(name ? 'Cannot create named interval without a name' : 'Cannot create a interval without a callback');
          }
        }
        /**
         * Clears the named interval
         * @param name Timer name
         */

      }, {
        key: "clearInterval",
        value: function (_clearInterval) {
          function clearInterval(_x2) {
            return _clearInterval.apply(this, arguments);
          }

          clearInterval.toString = function () {
            return _clearInterval.toString();
          };

          return clearInterval;
        }(function (name) {
          if (this._intervals[name]) {
            clearInterval(this._intervals[name]);
            this._intervals[name] = null;
          }
        })
        /**
         * Store named subscription
         * @param name Name of the subscription
         * @param unsub Unsubscribe callback or Subscription object
         */

      }, {
        key: "subscription",
        value: function subscription(name, unsub) {
          this.unsub(name);
          this._subscriptions[name] = unsub;
        }
        /**
         * Call unsubscribe callback with the given name
         * @param name
         */

      }, {
        key: "unsub",
        value: function unsub(name) {
          if (this._subscriptions && this._subscriptions[name]) {
            if (this._subscriptions[name] instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]) {
              this._subscriptions[name].unsubscribe();
            } else if (this._subscriptions[name] instanceof Function) {
              this._subscriptions[name]();
            }

            this._subscriptions[name] = null;
          }
        }
      }, {
        key: "is_initialised",
        get: function get() {
          return this._initialised.getValue();
        }
      }]);

      return BaseClass;
    }();
    /***/

  },

  /***/
  "./src/app/shared/base.component.ts":
  /*!******************************************!*\
    !*** ./src/app/shared/base.component.ts ***!
    \******************************************/

  /*! exports provided: BaseComponent */

  /***/
  function srcAppSharedBaseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseComponent", function () {
      return BaseComponent;
    });
    /* harmony import */


    var _base_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./base.class */
    "./src/app/shared/base.class.ts");

    var BaseComponent = /*#__PURE__*/function (_base_class__WEBPACK_) {
      _inherits(BaseComponent, _base_class__WEBPACK_);

      var _super19 = _createSuper(BaseComponent);

      function BaseComponent() {
        _classCallCheck(this, BaseComponent);

        return _super19.apply(this, arguments);
      }

      _createClass(BaseComponent, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Clear local timers
          for (var key in this._timers) {
            if (this._timers.hasOwnProperty(key)) {
              this.clearTimeout(key);
            }
          } // Clear local intervals


          for (var _key in this._intervals) {
            if (this._intervals.hasOwnProperty(_key)) {
              this.clearInterval(_key);
            }
          } // Clear local subscriptions


          for (var _key2 in this._subscriptions) {
            if (this._subscriptions.hasOwnProperty(_key2)) {
              this.unsub(_key2);
            }
          }
        }
      }]);

      return BaseComponent;
    }(_base_class__WEBPACK_IMPORTED_MODULE_0__["BaseClass"]);
    /***/

  },

  /***/
  "./src/app/shared/components/duration-field/duration-field.component.ngfactory.js":
  /*!****************************************************************************************!*\
    !*** ./src/app/shared/components/duration-field/duration-field.component.ngfactory.js ***!
    \****************************************************************************************/

  /*! exports provided: RenderType_CustomDurationFieldComponent, View_CustomDurationFieldComponent_0, View_CustomDurationFieldComponent_Host_0, CustomDurationFieldComponentNgFactory */

  /***/
  function srcAppSharedComponentsDurationFieldDurationFieldComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_CustomDurationFieldComponent", function () {
      return RenderType_CustomDurationFieldComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CustomDurationFieldComponent_0", function () {
      return View_CustomDurationFieldComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CustomDurationFieldComponent_Host_0", function () {
      return View_CustomDurationFieldComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomDurationFieldComponentNgFactory", function () {
      return CustomDurationFieldComponentNgFactory;
    });
    /* harmony import */


    var _duration_field_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./duration-field.component.scss.shim.ngstyle */
    "./src/app/shared/components/duration-field/duration-field.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory */
    "./node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory.js");
    /* harmony import */


    var _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @acaprojects/ngx-dropdown */
    "./node_modules/@acaprojects/ngx-dropdown/fesm2015/acaprojects-ngx-dropdown.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _duration_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./duration-field.component */
    "./src/app/shared/components/duration-field/duration-field.component.ts");
    /* harmony import */


    var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @acaprojects/ngx-dynamic-forms */
    "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_CustomDurationFieldComponent = [_duration_field_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_CustomDurationFieldComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_CustomDurationFieldComponent,
      data: {}
    });

    function View_CustomDurationFieldComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "a-dropdown", [["placeholder", "Select duration..."]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ngModelChange" === en) {
          var pd_0 = (_co.active_duration = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_1 = _co.setValue($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ADropdownComponent_0"], _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ADropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4767744, null, 0, _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__["ADropdownComponent"], [], {
        items: [0, "items"],
        placeholder: [1, "placeholder"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__["ADropdownComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.options;
        var currVal_8 = "Select duration...";

        _ck(_v, 2, 0, currVal_7, currVal_8);

        var currVal_9 = _co.active_duration;

        _ck(_v, 4, 0, currVal_9);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending;

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      });
    }

    function View_CustomDurationFieldComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CustomDurationFieldComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.group;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_CustomDurationFieldComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "custom-duration-field", [], null, null, null, View_CustomDurationFieldComponent_0, RenderType_CustomDurationFieldComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _duration_field_component__WEBPACK_IMPORTED_MODULE_6__["CustomDurationFieldComponent"], [_acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_7__["ADynamicFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var CustomDurationFieldComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("custom-duration-field", _duration_field_component__WEBPACK_IMPORTED_MODULE_6__["CustomDurationFieldComponent"], View_CustomDurationFieldComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/shared/components/duration-field/duration-field.component.scss.shim.ngstyle.js":
  /*!************************************************************************************************!*\
    !*** ./src/app/shared/components/duration-field/duration-field.component.scss.shim.ngstyle.js ***!
    \************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppSharedComponentsDurationFieldDurationFieldComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBNkJBOztjQUFBO0FBV0E7O3NCQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHVyYXRpb24tZmllbGQvZHVyYXRpb24tZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/shared/components/duration-field/duration-field.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shared/components/duration-field/duration-field.component.ts ***!
    \******************************************************************************/

  /*! exports provided: CustomDurationFieldComponent */

  /***/
  function srcAppSharedComponentsDurationFieldDurationFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomDurationFieldComponent", function () {
      return CustomDurationFieldComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @acaprojects/ngx-dynamic-forms */
    "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base.component */
    "./src/app/shared/base.component.ts");
    /* harmony import */


    var _services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/data/bookings/booking.utilities */
    "./src/app/services/data/bookings/booking.utilities.ts");
    /* harmony import */


    var _utilities_general_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../utilities/general.utilities */
    "./src/app/shared/utilities/general.utilities.ts");
    /* harmony import */


    var _globals_form_fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../globals/form-fields */
    "./src/app/shared/globals/form-fields.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);

    var CustomDurationFieldComponent = /*#__PURE__*/function (_base_component__WEBP) {
      _inherits(CustomDurationFieldComponent, _base_component__WEBP);

      var _super20 = _createSuper(CustomDurationFieldComponent);

      function CustomDurationFieldComponent(field, group) {
        var _this59;

        _classCallCheck(this, CustomDurationFieldComponent);

        _this59 = _super20.call(this);
        _this59.field = field;
        _this59.group = group;
        /** Step size for available times */

        _this59.block_size = 15;
        /** List of available durations */

        _this59.options = [];
        return _this59;
      }

      _createClass(CustomDurationFieldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this60 = this;

          if (this.group) {
            if (this.group.controls.date) {
              this.date_control = this.group.controls.date;
              this.subscription('date', this.date_control.valueChanges.subscribe(function () {
                return _this60.calculateAvailableDurations();
              }));
            }

            if (this.group.controls.room || this.group.controls.space) {
              this.space_control = this.group.controls.room || this.group.controls.space;
              this.subscription('space', this.space_control.valueChanges.subscribe(function () {
                return _this60.calculateAvailableDurations();
              }));
            }

            this.subscription('control', this.field.control.valueChanges.subscribe(function () {
              return _this60.updateDisplay();
            }));
          }

          this.calculateAvailableDurations();
        }
        /**
         * Update the active value displayed on the dropdown
         */

      }, {
        key: "updateDisplay",
        value: function updateDisplay() {
          var _this61 = this;

          if (this.options && this.options.length > 0) {
            if (!this.active_duration) {
              if (this.field.getValue()) {
                this.active_duration = this.options.find(function (i) {
                  return i.id === _this61.field.getValue();
                });
              }

              if (!this.active_duration) {
                this.active_duration = this.options[0];
                this.setValue(this.options[0]);
              }
            } else if (!this.options.find(function (i) {
              return i.id === _this61.active_duration.id;
            })) {
              var diff = 9999;
              var new_opt = null;

              var _iterator19 = _createForOfIteratorHelper(this.options),
                  _step19;

              try {
                for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                  var option = _step19.value;

                  if (Math.abs(option.id - this.active_duration.id) < diff) {
                    diff = Math.abs(option.id - this.active_duration.id);
                    new_opt = option;
                  }
                }
              } catch (err) {
                _iterator19.e(err);
              } finally {
                _iterator19.f();
              }

              if (new_opt) {
                this.active_duration = new_opt;
                this.setValue(new_opt);
              }
            }
          }
        }
        /**
         * Generate a list of times selectable by the user
         */

      }, {
        key: "calculateAvailableDurations",
        value: function calculateAvailableDurations() {
          this.options = [];
          var date = dayjs__WEBPACK_IMPORTED_MODULE_6__().startOf('m');
          var max_duration = this.field.metadata ? this.field.metadata.max_duration || 600 : 600;
          var min_duration = this.field.metadata ? this.field.metadata.min_duration || 30 : 30;
          var end = date.add(max_duration, 'm');

          if (this.space_control) {
            // Get times based off available times in space
            if (this.date_control && this.date_control.value) {
              date = dayjs__WEBPACK_IMPORTED_MODULE_6__(this.date_control.value).startOf('m');
            }

            var slot = Object(_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_3__["getNextFreeBookingSlot"])(this.space_control.value.bookings, date.valueOf(), min_duration);

            if (slot) {
              // Check if slot is after the active date
              date = slot.start > date.valueOf() ? dayjs__WEBPACK_IMPORTED_MODULE_6__(slot.start).startOf('m') : date;
            }

            end = slot ? dayjs__WEBPACK_IMPORTED_MODULE_6__(slot.end).startOf('m') : dayjs__WEBPACK_IMPORTED_MODULE_6__(date).add(max_duration, 'm');
          }

          end = end.endOf('m'); // Get available durations between the date and end times

          date = date.add(min_duration, 'm').startOf('m');
          var duration = min_duration;

          for (; date.isBefore(end, 's'); date = date.add(this.block_size, 'm')) {
            this.options.push({
              id: duration,
              name: Object(_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_4__["humaniseDuration"])(duration)
            });
            duration += 15;

            if (this.options.length > Math.floor((max_duration - min_duration) / this.block_size)) {
              break;
            }
          }

          this.updateDisplay();
        }
        /**
         * Update the value of the form field
         * @param value New value
         */

      }, {
        key: "setValue",
        value: function setValue(block) {
          this.field.setValue(block.id);
        }
      }]);

      return CustomDurationFieldComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);

    _globals_form_fields__WEBPACK_IMPORTED_MODULE_5__["FORM_FIELDS"].duration = CustomDurationFieldComponent;
    /***/
  },

  /***/
  "./src/app/shared/components/time-field/time-field.component.ngfactory.js":
  /*!********************************************************************************!*\
    !*** ./src/app/shared/components/time-field/time-field.component.ngfactory.js ***!
    \********************************************************************************/

  /*! exports provided: RenderType_CustomTimeFieldComponent, View_CustomTimeFieldComponent_0, View_CustomTimeFieldComponent_Host_0, CustomTimeFieldComponentNgFactory */

  /***/
  function srcAppSharedComponentsTimeFieldTimeFieldComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_CustomTimeFieldComponent", function () {
      return RenderType_CustomTimeFieldComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CustomTimeFieldComponent_0", function () {
      return View_CustomTimeFieldComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CustomTimeFieldComponent_Host_0", function () {
      return View_CustomTimeFieldComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomTimeFieldComponentNgFactory", function () {
      return CustomTimeFieldComponentNgFactory;
    });
    /* harmony import */


    var _time_field_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./time-field.component.scss.shim.ngstyle */
    "./src/app/shared/components/time-field/time-field.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory */
    "./node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory.js");
    /* harmony import */


    var _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @acaprojects/ngx-dropdown */
    "./node_modules/@acaprojects/ngx-dropdown/fesm2015/acaprojects-ngx-dropdown.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _time_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./time-field.component */
    "./src/app/shared/components/time-field/time-field.component.ts");
    /* harmony import */


    var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @acaprojects/ngx-dynamic-forms */
    "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_CustomTimeFieldComponent = [_time_field_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_CustomTimeFieldComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_CustomTimeFieldComponent,
      data: {}
    });

    function View_CustomTimeFieldComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "a-dropdown", [["placeholder", "Select time..."]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ngModelChange" === en) {
          var pd_0 = (_co.active_time = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_1 = _co.setValue($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ADropdownComponent_0"], _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ADropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4767744, null, 0, _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__["ADropdownComponent"], [], {
        items: [0, "items"],
        placeholder: [1, "placeholder"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__["ADropdownComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.times;
        var currVal_8 = "Select time...";

        _ck(_v, 2, 0, currVal_7, currVal_8);

        var currVal_9 = _co.active_time;

        _ck(_v, 4, 0, currVal_9);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending;

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      });
    }

    function View_CustomTimeFieldComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CustomTimeFieldComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.group;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_CustomTimeFieldComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "custom-time-field", [], null, null, null, View_CustomTimeFieldComponent_0, RenderType_CustomTimeFieldComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _time_field_component__WEBPACK_IMPORTED_MODULE_6__["CustomTimeFieldComponent"], [_acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_7__["ADynamicFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var CustomTimeFieldComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("custom-time-field", _time_field_component__WEBPACK_IMPORTED_MODULE_6__["CustomTimeFieldComponent"], View_CustomTimeFieldComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/shared/components/time-field/time-field.component.scss.shim.ngstyle.js":
  /*!****************************************************************************************!*\
    !*** ./src/app/shared/components/time-field/time-field.component.scss.shim.ngstyle.js ***!
    \****************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppSharedComponentsTimeFieldTimeFieldComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBNkJBOztjQUFBO0FBV0E7O3NCQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGltZS1maWVsZC90aW1lLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"];
    /***/
  },

  /***/
  "./src/app/shared/components/time-field/time-field.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shared/components/time-field/time-field.component.ts ***!
    \**********************************************************************/

  /*! exports provided: CustomTimeFieldComponent */

  /***/
  function srcAppSharedComponentsTimeFieldTimeFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomTimeFieldComponent", function () {
      return CustomTimeFieldComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../base.component */
    "./src/app/shared/base.component.ts");
    /* harmony import */


    var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @acaprojects/ngx-dynamic-forms */
    "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
    /* harmony import */


    var _services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/data/bookings/booking.utilities */
    "./src/app/services/data/bookings/booking.utilities.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _globals_form_fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../globals/form-fields */
    "./src/app/shared/globals/form-fields.ts");

    var CustomTimeFieldComponent = /*#__PURE__*/function (_base_component__WEBP2) {
      _inherits(CustomTimeFieldComponent, _base_component__WEBP2);

      var _super21 = _createSuper(CustomTimeFieldComponent);

      function CustomTimeFieldComponent(field, group) {
        var _this62;

        _classCallCheck(this, CustomTimeFieldComponent);

        _this62 = _super21.call(this);
        _this62.field = field;
        _this62.group = group;
        /** Step size for available times */

        _this62.block_size = 5;
        /** Step size for available times */

        _this62.min_size = _this62.block_size * 6;
        return _this62;
      }

      _createClass(CustomTimeFieldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this63 = this;

          if (this.group) {
            if (this.group.controls.date) {
              this.date_control = this.group.controls.date;
              this.subscription('date', this.date_control.valueChanges.subscribe(function () {
                return _this63.updateDisplay(true);
              }));
            }

            if (this.group.controls.room || this.group.controls.space) {
              this.space_control = this.group.controls.room || this.group.controls.space;
              this.subscription('space', this.space_control.valueChanges.subscribe(function () {
                return _this63.updateDisplay();
              }));
            }

            this.subscription('control', this.field.control.valueChanges.subscribe(function () {
              return _this63.updateDisplay();
            }));
          }

          this.calculateAvailableTimes();

          if (this.date_control) {
            var value = this.date_control.value;

            if (!this.times.find(function (block) {
              return block.value === value;
            })) {
              this.setValue(this.times[0]);
            }
          }
        }
        /**
         * Update the active value displayed on the dropdown
         * @param from_ref Whether new value was generated from a reference field
         */

      }, {
        key: "updateDisplay",
        value: function updateDisplay() {
          var from_ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (this.times) {
            var _iterator20 = _createForOfIteratorHelper(this.times),
                _step20;

            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                var _time = _step20.value;

                if (this.field.getValue() === _time.id) {
                  this.active_time = _time;
                  break;
                }
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }

            if (!this.field.getValue()) {
              // Initialise with date time set on date control
              if (this.date_control) {
                var date = dayjs__WEBPACK_IMPORTED_MODULE_4__(this.date_control.value);
                date = date.minute(Math.ceil(date.minute() / 5) * 5);
                var date_str = date.format('HH:mm');

                var _iterator21 = _createForOfIteratorHelper(this.times),
                    _step21;

                try {
                  for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
                    var time = _step21.value;

                    if (date.valueOf() - time.value <= 0) {
                      this.active_time = time;
                      this.setValue(time, true);
                      break;
                    }
                  }
                } catch (err) {
                  _iterator21.e(err);
                } finally {
                  _iterator21.f();
                }
              } // Set to default value


              if (!this.field.getValue()) {
                this.active_time = this.times[0];
                this.setValue(this.times[0], from_ref);
              }
            }
          }
        }
        /**
         * Generate a list of times selectable by the user
         */

      }, {
        key: "calculateAvailableTimes",
        value: function calculateAvailableTimes() {
          var _this64 = this;

          this.times = [];
          var date = dayjs__WEBPACK_IMPORTED_MODULE_4__().startOf('m');
          var book_ahead = this.field.metadata ? this.field.metadata.book_ahead || 660 : 660; // 11 hours default

          var min_duration = this.field.metadata ? this.field.metadata.min_duration || 30 : 30;

          if (this.space_control) {
            // Get times based off available times in space
            var slots = Object(_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_3__["getFreeBookingSlots"])(this.space_control.value.bookings, min_duration);
            date = date.minute(Math.ceil(date.minute() / this.block_size) * this.block_size);
            var end = dayjs__WEBPACK_IMPORTED_MODULE_4__(date).add(book_ahead, 'm').endOf('m');

            var _loop3 = function _loop3() {
              var value = date.valueOf();

              if (slots.find(function (i) {
                return i.start <= value && value < i.end && dayjs__WEBPACK_IMPORTED_MODULE_4__(i.end).diff(date, 'm') >= min_duration;
              })) {
                _this64.times.push({
                  id: date.format('HH:mm'),
                  name: date.format('h:mm A'),
                  value: date.valueOf()
                });
              }
            };

            for (; date.isBefore(end, 's'); date = date.add(this.block_size, 'm')) {
              _loop3();
            }
          } else {
            // Get times from now
            if (date.minute() % this.block_size !== 0) {
              this.times.push({
                id: date.format('HH:mm'),
                name: date.format('h:mm A')
              });
            }

            date = date.minute(Math.ceil(date.minute() / this.block_size) * this.block_size);

            var _end = dayjs__WEBPACK_IMPORTED_MODULE_4__(date).add(book_ahead, 'm');

            for (; date.isBefore(_end); date = date.add(this.block_size, 'm')) {
              this.times.push({
                id: date.format('HH:mm'),
                name: date.format('h:mm A'),
                value: date.valueOf()
              });
            }
          }

          this.updateDisplay();
        }
        /**
         * Update the value of the form field
         * @param value New value
         * @param from_ref Whether new value was generated from a reference field
         */

      }, {
        key: "setValue",
        value: function setValue(slot) {
          var from_ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.field.setValue(slot.id);

          if (this.date_control && !from_ref) {
            var time = dayjs__WEBPACK_IMPORTED_MODULE_4__(slot.value);
            var date = dayjs__WEBPACK_IMPORTED_MODULE_4__(this.date_control.value).hour(time.hour()).minute(time.minute()).startOf('m');
            this.date_control.setValue(date.valueOf());
          }
        }
      }]);

      return CustomTimeFieldComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);

    _globals_form_fields__WEBPACK_IMPORTED_MODULE_5__["FORM_FIELDS"].time = CustomTimeFieldComponent;
    /***/
  },

  /***/
  "./src/app/shared/components/user-search-field/user-search-field.component.ngfactory.js":
  /*!**********************************************************************************************!*\
    !*** ./src/app/shared/components/user-search-field/user-search-field.component.ngfactory.js ***!
    \**********************************************************************************************/

  /*! exports provided: RenderType_CustomUserSearchFieldComponent, View_CustomUserSearchFieldComponent_0, View_CustomUserSearchFieldComponent_Host_0, CustomUserSearchFieldComponentNgFactory */

  /***/
  function srcAppSharedComponentsUserSearchFieldUserSearchFieldComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_CustomUserSearchFieldComponent", function () {
      return RenderType_CustomUserSearchFieldComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CustomUserSearchFieldComponent_0", function () {
      return View_CustomUserSearchFieldComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CustomUserSearchFieldComponent_Host_0", function () {
      return View_CustomUserSearchFieldComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomUserSearchFieldComponentNgFactory", function () {
      return CustomUserSearchFieldComponentNgFactory;
    });
    /* harmony import */


    var _user_search_field_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./user-search-field.component.scss.shim.ngstyle */
    "./src/app/shared/components/user-search-field/user-search-field.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory */
    "./node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory.js");
    /* harmony import */


    var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @acaprojects/ngx-spinners */
    "./node_modules/@acaprojects/ngx-spinners/fesm2015/acaprojects-ngx-spinners.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_custom_events_acaprojects_ngx_custom_events_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../node_modules/@acaprojects/ngx-custom-events/acaprojects-ngx-custom-events.ngfactory */
    "./node_modules/@acaprojects/ngx-custom-events/acaprojects-ngx-custom-events.ngfactory.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @acaprojects/ngx-overlays */
    "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _user_search_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./user-search-field.component */
    "./src/app/shared/components/user-search-field/user-search-field.component.ts");
    /* harmony import */


    var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @acaprojects/ngx-dynamic-forms */
    "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../services/app.service */
    "./src/app/services/app.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_CustomUserSearchFieldComponent = [_user_search_field_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_CustomUserSearchFieldComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_CustomUserSearchFieldComponent,
      data: {}
    });

    function View_CustomUserSearchFieldComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a-spinner", [["circle-ring", ""], ["color", "#000"]], null, null, null, _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ɵc_0"], _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ɵc"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_3__["ɵc"], [], {
        color: [0, "color"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "#000";

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_CustomUserSearchFieldComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "item"], ["feedback", ""]], null, [[null, "mouseup"], [null, "touchend"], [null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).handleMouse($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).handleTouch($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _co.select(_v.context.$implicit) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _co.select(_v.context.$implicit) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_custom_events_acaprojects_ngx_custom_events_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ɵa_0"], _node_modules_acaprojects_ngx_custom_events_acaprojects_ngx_custom_events_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ɵa"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 0, "div", [["class", "name"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 0, "div", [["class", "email"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.match_name || _v.context.$implicit.name;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.context.$implicit.match_email || _v.context.$implicit.email;

        _ck(_v, 3, 0, currVal_1);
      });
    }

    function View_CustomUserSearchFieldComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "user-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CustomUserSearchFieldComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.filtered_list;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_CustomUserSearchFieldComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "user-search"], ["widget", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [["a-tooltip", ""], ["class", "search"]], null, [[null, "showChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("showChange" === en) {
          var pd_0 = (_co.show = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_7__["AOverlayService"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        show: [0, "show"],
        content: [1, "content"]
      }, {
        showChange: "showChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "div", [["class", "searchbar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "input", [["placeholder", "Search for host..."], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "blur"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.search_str = $event) !== false;
          ad = pd_4 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_5 = _co.search($event) !== false;
          ad = pd_5 && ad;
        }

        if ("blur" === en) {
          var pd_6 = _co.reset() !== false;
          ad = pd_6 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CustomUserSearchFieldComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["list", 2]], null, 0, null, View_CustomUserSearchFieldComponent_2))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.show && _co.search_str && _co.filtered_list.length > 0;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12);

        _ck(_v, 2, 0, currVal_0, currVal_1);

        var currVal_9 = _co.search_str;

        _ck(_v, 7, 0, currVal_9);

        var currVal_10 = _co.searching;

        _ck(_v, 11, 0, currVal_10);
      }, function (_ck, _v) {
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending;

        _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);
      });
    }

    function View_CustomUserSearchFieldComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "custom-user-search-field", [], null, null, null, View_CustomUserSearchFieldComponent_0, RenderType_CustomUserSearchFieldComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _user_search_field_component__WEBPACK_IMPORTED_MODULE_10__["CustomUserSearchFieldComponent"], [_acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_11__["ADynamicFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], _services_app_service__WEBPACK_IMPORTED_MODULE_12__["ApplicationService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var CustomUserSearchFieldComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("custom-user-search-field", _user_search_field_component__WEBPACK_IMPORTED_MODULE_10__["CustomUserSearchFieldComponent"], View_CustomUserSearchFieldComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/shared/components/user-search-field/user-search-field.component.scss.shim.ngstyle.js":
  /*!******************************************************************************************************!*\
    !*** ./src/app/shared/components/user-search-field/user-search-field.component.scss.shim.ngstyle.js ***!
    \******************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppSharedComponentsUserSearchFieldUserSearchFieldComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["custom-user-search-field[_nghost-%COMP%] {\n  width: 100%;\n}\n.user-search[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.searchbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  border: 1px solid #ccc;\n  overflow: hidden;\n  border-radius: 4px;\n}\n.user-list[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  z-index: 99999;\n  max-height: 15.5em;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\ninput[_ngcontent-%COMP%] {\n  font-size: 1em;\n  padding: 0.5em;\n  border: none;\n  outline: none;\n  min-width: 50%;\n  flex: 1;\n  border-radius: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0);\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-bottom: 1px solid #fff;\n}\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.2em;\n  width: 1.2em;\n}\n.spinner[_ngcontent-%COMP%] {\n  margin: 0 0.5em;\n}\na-spinner[_ngcontent-%COMP%] {\n  font-size: 0.25em;\n  width: 4em;\n}\n.item[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  pointer-events: auto;\n  cursor: pointer;\n}\n.item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.email[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  color: rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3VzZXItc2VhcmNoLWZpZWxkL3VzZXItc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy91c2VyLXNlYXJjaC1maWVsZC91c2VyLXNlYXJjaC1maWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUE2QkE7O2NBQUE7QUFXQTs7c0JBQUE7QUN0Q0E7RUFDSSxXQUFBO0FDT0o7QURKQTtFQUNJLFdBQUE7QUNPSjtBREhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ01KO0FESEE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0dBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7QUNNSjtBREhBO0VBQ0ksY0FBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5Q0FBQTtBQ01KO0FETEk7RUFDSSw2QkFBQTtBQ09SO0FESEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDTUo7QURIQTtFQUNJLGVBQUE7QUNNSjtBREhBO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FDTUo7QURIQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUNNSjtBREpJO0VBQ0ksb0NBQUE7QUNNUjtBREhJOztFQUVJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ0tSO0FEREE7RUFDSSxnQkFBQTtFQUNBLHlCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy91c2VyLXNlYXJjaC1maWVsZC91c2VyLXNlYXJjaC1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogI2ZmZjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzFmNDBlNjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG5cbiRiYXNlLXNpemU6IDIwcHg7XG4kdGFibGV0LXNpemU6IDIwcHg7XG4kbW9iaWxlLXNpemU6IDIwcHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cblxuY3VzdG9tLXVzZXItc2VhcmNoLWZpZWxkOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udXNlci1zZWFyY2gge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbi5zZWFyY2hiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4udXNlci1saXN0IHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG4gICAgei1pbmRleDogOTk5OTk7XG4gICAgbWF4LWhlaWdodDogMTUuNWVtO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxuaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAgZmxleDogMTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCMwMDAsIDApO1xuICAgICY6Zm9jdXMge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS4yZW07XG4gICAgd2lkdGg6IDEuMmVtO1xufVxuXG4uc3Bpbm5lciB7XG4gICAgbWFyZ2luOiAwIC41ZW07XG59XG5cbmEtc3Bpbm5lciB7XG4gICAgZm9udC1zaXplOiAuMjVlbTtcbiAgICB3aWR0aDogNGVtO1xufVxuXG4uaXRlbSB7XG4gICAgcGFkZGluZzogLjVlbTtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAuMSk7XG4gICAgfVxuXG4gICAgLm5hbWUsXG4gICAgLmVtYWlsIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxufVxuXG4uZW1haWwge1xuICAgIGZvbnQtc2l6ZTogLjZlbTtcbiAgICBjb2xvcjogcmdiYSgjMDAwLCAuNik7XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5jdXN0b20tdXNlci1zZWFyY2gtZmllbGQ6aG9zdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udXNlci1zZWFyY2gge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlYXJjaGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi51c2VyLWxpc3Qge1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgei1pbmRleDogOTk5OTk7XG4gIG1heC1oZWlnaHQ6IDE1LjVlbTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbn1cblxuaW5wdXQge1xuICBmb250LXNpemU6IDFlbTtcbiAgcGFkZGluZzogMC41ZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIGZsZXg6IDE7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xufVxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xufVxuXG4uc3Bpbm5lciB7XG4gIG1hcmdpbjogMCAwLjVlbTtcbn1cblxuYS1zcGlubmVyIHtcbiAgZm9udC1zaXplOiAwLjI1ZW07XG4gIHdpZHRoOiA0ZW07XG59XG5cbi5pdGVtIHtcbiAgcGFkZGluZzogMC41ZW07XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi5pdGVtIC5uYW1lLFxuLml0ZW0gLmVtYWlsIHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5lbWFpbCB7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/shared/components/user-search-field/user-search-field.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/shared/components/user-search-field/user-search-field.component.ts ***!
    \************************************************************************************/

  /*! exports provided: CustomUserSearchFieldComponent */

  /***/
  function srcAppSharedComponentsUserSearchFieldUserSearchFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomUserSearchFieldComponent", function () {
      return CustomUserSearchFieldComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @acaprojects/ngx-dynamic-forms */
    "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../base.component */
    "./src/app/shared/base.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _utilities_general_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../utilities/general.utilities */
    "./src/app/shared/utilities/general.utilities.ts");
    /* harmony import */


    var _globals_form_fields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../globals/form-fields */
    "./src/app/shared/globals/form-fields.ts");

    var CustomUserSearchFieldComponent = /*#__PURE__*/function (_base_component__WEBP3) {
      _inherits(CustomUserSearchFieldComponent, _base_component__WEBP3);

      var _super22 = _createSuper(CustomUserSearchFieldComponent);

      function CustomUserSearchFieldComponent(field, group, service) {
        var _this65;

        _classCallCheck(this, CustomUserSearchFieldComponent);

        _this65 = _super22.call(this);
        _this65.field = field;
        _this65.group = group;
        _this65.service = service;
        /** List of users from an API search */

        _this65.filtered_list = [];
        /** Subject holding the value of the search */

        _this65.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        return _this65;
      }

      _createClass(CustomUserSearchFieldComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this66 = this;

          if (this.group) {
            if (this.field.references && this.field.references.length > 0) {
              var control = this.group.controls[this.field.references[0]];

              if (control) {
                this.subscription('reference', control.valueChanges.subscribe(function () {
                  return _this66.updateDisplay();
                }));
              }
            }

            this.subscription('control', this.field.control.valueChanges.subscribe(function () {
              return _this66.updateDisplay();
            }));
          } // Listen for input changes


          this.search_results$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (query) {
            _this66.searching = true;
            _this66.show = true;
            return query.length >= 3 ? _this66.service.Users.query({
              q: query.slice(0, 3),
              cache: 60 * 1000
            }) : Promise.resolve([]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (err) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (list) {
            _this66.searching = false;
            return Object(_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_6__["filterList"])(_this66.search_str, list, ['name', 'email']);
          })); // Process API results

          this.search_results$.subscribe(function (list) {
            _this66.filtered_list = list;

            _this66.filtered_list.forEach(function (i) {
              i.match_name = Object(_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_6__["matchToHighlight"])(i.match_name);
              i.match_email = Object(_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_6__["matchToHighlight"])(i.match_email);
              return i;
            });
          });
        }
        /**
         * Search for a user that matches the filter string
         * @param filter String to filter users on
         */

      }, {
        key: "search",
        value: function search(filter) {
          this.search_str = filter;
          this.search$.next(filter);
        }
        /**
         * Update input display string
         */

      }, {
        key: "updateDisplay",
        value: function updateDisplay() {
          var value = this.field.control.value;
          this.search_str = value ? value.name : '';
        }
        /**
         * Reset the display value for the search input
         */

      }, {
        key: "reset",
        value: function reset() {
          var _this67 = this;

          this.timeout('reset', function () {
            var value = _this67.field.control.value;
            _this67.search_str = value ? value.name : '';
            _this67.show = false;
          });
        }
        /**
         * Set the active user
         * @param user New active user
         */

      }, {
        key: "select",
        value: function select(user) {
          var _this68 = this;

          if (user) {
            this.field.setValue(user);
          }

          this.timeout('hide', function () {
            _this68.show = false;
          }, 100);
        }
      }]);

      return CustomUserSearchFieldComponent;
    }(_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]);

    _globals_form_fields__WEBPACK_IMPORTED_MODULE_7__["FORM_FIELDS"].host = CustomUserSearchFieldComponent;
    /***/
  },

  /***/
  "./src/app/shared/directives/binding/binding.directive.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shared/directives/binding/binding.directive.ts ***!
    \****************************************************************/

  /*! exports provided: BindingDirective */

  /***/
  function srcAppSharedDirectivesBindingBindingDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BindingDirective", function () {
      return BindingDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @placeos/ts-client */
    "./node_modules/@placeos/ts-client/dist/esm/index.js");

    var BindingDirective = /*#__PURE__*/function () {
      function BindingDirective(_element, _renderer) {
        _classCallCheck(this, BindingDirective);

        this._element = _element;
        this._renderer = _renderer;
        /** Index of the system to bind */

        this.index = 1;
        /** ID of the system to bind to */

        this.params = [];
        /** Emitter for changes to the value of the binding */

        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(BindingDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this69 = this;

          this.init_listener = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["onlineState"])().subscribe(function (init) {
            if (init) {
              _this69.bindVariable();

              if (_this69.init_listener) {
                _this69.init_listener.unsubscribe();

                _this69.init_listener = null;
              }
            }
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.listener) {
            this.listener.unsubscribe();
            this.listener = null;
          }

          if (this.unbind) {
            this.unbind();
            this.unbind = null;
          }

          if (this.event_listener) {
            this.event_listener();
            this.event_listener = null;
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this70 = this;

          if (changes.sys || changes.mod || changes.bind) {
            this.ngOnDestroy();
            this.bindVariable();
          }

          if (changes.on_event && this.on_event) {
            if (this.event_listener) {
              this.event_listener();
              this.event_listener = null;
            }

            this.event_listener = this._renderer.listen(this._element.nativeElement, this.on_event, function () {
              return _this70.execute();
            });
          }
        }
        /** Bind to set status variable */

      }, {
        key: "bindVariable",
        value: function bindVariable() {
          var _this71 = this;

          if (Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["authority"])() && this.bind && this.sys && this.mod) {
            var _module2 = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["getModule"])(this.sys, this.mod, this.index);

            var binding = _module2.binding(this.bind);

            this.unbind = binding.bind();
            this.listener = binding.listen().subscribe(function (value) {
              return setTimeout(function () {
                _this71.model = value;

                _this71.modelChange.emit(_this71.model);
              }, 10);
            });
          }
        }
        /** Excute the set method on the module */

      }, {
        key: "execute",
        value: function execute() {
          var _this72 = this;

          if (Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["authority"])() && this.exec && this.sys && this.mod) {
            var _module3 = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["getModule"])(this.sys, this.mod, this.index);

            _module3.execute(this.exec, this.params).then(function (result) {
              // Emit exec result if not bound to status variable
              if (!_this72.bind) {
                _this72.model = result;

                _this72.modelChange.emit(_this72.model);
              }
            });
          }
        }
        /**
         * Update local value when form control value is changed
         * @param value The new value for the component
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.model = value;
          this.modelChange.emit(this.model);

          if (this.exec) {
            this.execute();
          }
        }
      }]);

      return BindingDirective;
    }();
    /***/

  },

  /***/
  "./src/app/shared/globals/application.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/globals/application.ts ***!
    \***********************************************/

  /*! exports provided: version, core_version, build */

  /***/
  function srcAppSharedGlobalsApplicationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "version", function () {
      return version;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "core_version", function () {
      return core_version;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "build", function () {
      return build;
    });
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
    /** Version number of the application */


    var version = 'local-dev';
    /** Version number of the base application */

    var core_version = '1.0.0';
    /** Build time of the application */

    var build = dayjs__WEBPACK_IMPORTED_MODULE_0__();
    /***/
  },

  /***/
  "./src/app/shared/globals/form-fields.ts":
  /*!***********************************************!*\
    !*** ./src/app/shared/globals/form-fields.ts ***!
    \***********************************************/

  /*! exports provided: FORM_FIELDS */

  /***/
  function srcAppSharedGlobalsFormFieldsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FORM_FIELDS", function () {
      return FORM_FIELDS;
    });
    /** List of form field contents mapped to corresponding keys */


    var FORM_FIELDS = {};
    /***/
  },

  /***/
  "./src/app/shared/globals/overlay-register.ts":
  /*!****************************************************!*\
    !*** ./src/app/shared/globals/overlay-register.ts ***!
    \****************************************************/

  /*! exports provided: OVERLAY_REGISTER */

  /***/
  function srcAppSharedGlobalsOverlayRegisterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OVERLAY_REGISTER", function () {
      return OVERLAY_REGISTER;
    });
    /** List of Overlays to register on application initialisation */


    var OVERLAY_REGISTER = [];
    /***/
  },

  /***/
  "./src/app/shared/mocks/index.ts":
  /*!***************************************!*\
    !*** ./src/app/shared/mocks/index.ts ***!
    \***************************************/

  /*! no exports provided */

  /***/
  function srcAppSharedMocksIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _systems_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./systems.mock */
    "./src/app/shared/mocks/systems.mock.ts");
    /***/

  },

  /***/
  "./src/app/shared/mocks/systems.mock.ts":
  /*!**********************************************!*\
    !*** ./src/app/shared/mocks/systems.mock.ts ***!
    \**********************************************/

  /*! exports provided: MOCK_SYSTEMS, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6 */

  /***/
  function srcAppSharedMocksSystemsMockTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MOCK_SYSTEMS", function () {
      return MOCK_SYSTEMS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
      return ɵ1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
      return ɵ2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ3", function () {
      return ɵ3;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ4", function () {
      return ɵ4;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ5", function () {
      return ɵ5;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ6", function () {
      return ɵ6;
    });
    /* harmony import */


    var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @placeos/ts-client */
    "./node_modules/@placeos/ts-client/dist/esm/index.js");
    /* harmony import */


    var _services_data_spaces_space_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/data/spaces/space.utilities */
    "./src/app/services/data/spaces/space.utilities.ts");
    /* harmony import */


    var _services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/data/bookings/booking.utilities */
    "./src/app/services/data/bookings/booking.utilities.ts");
    /* harmony import */


    var _services_data_users_user_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/data/users/user.utilities */
    "./src/app/services/data/users/user.utilities.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);

    var LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var NUMBERS = '0123456789'.split('');
    var index = 0;
    var SPACE_LIST = [];
    var IMAGES = ['large_down', 'large_up', 'small_down', 'small_up'];
    /**
     * Create mock engine booking module with appropriate bookings and space data
     */

    function createSystem() {
      var id = "sys-".concat(LETTERS[Math.floor(index / NUMBERS.length)]).concat(NUMBERS[index++ % NUMBERS.length]);
      Object(_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_2__["setMockBookingStartDatetime"])(dayjs__WEBPACK_IMPORTED_MODULE_4__().minute(-50).valueOf());
      var space = Object(_services_data_spaces_space_utilities__WEBPACK_IMPORTED_MODULE_1__["generateMockSpace"])(id);
      SPACE_LIST.push(space);
      var bindings = {
        touch_enabled: true,
        timeout: 300,
        cancel_timeout: 600,
        has_catering: true,
        control_url: 'https://aca.im/demo/aca/control/',
        icon: "/assets/img/".concat(IMAGES[Math.floor(Math.random() * IMAGES.length)], ".png")
      };
      var system = {
        id: id,
        name: space.name,
        Bookings: []
      };
      system.Bookings.push(Object.assign(Object.assign({}, bindings), {
        room_name: space.name,
        today: space.bookings,
        reload: dayjs__WEBPACK_IMPORTED_MODULE_4__().add(1, 'h').unix(),
        $start_meeting: function $start_meeting(time) {
          system.Bookings[0].last_meeting_started = time;
        },
        $cancel_meeting: function $cancel_meeting(time, reason) {
          var list = system.Bookings[0].today;
          system.Bookings[0].today = list.filter(function (i) {
            return i.date !== time;
          });
        },
        $waiter_call: function $waiter_call() {
          console.log("[MOCK][".concat(id, "] Waiter called..."));
        }
      }));
      return system;
    }

    var ɵ0 = function ɵ0(i) {
      return createSystem();
    };

    var MOCK_SYSTEMS = Array(10).fill(0).map(ɵ0);

    var _iterator22 = _createForOfIteratorHelper(MOCK_SYSTEMS),
        _step22;

    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
        var system = _step22.value;
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerSystem"])(system.id, system);
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }

    var ɵ1 = function ɵ1(i) {
      return Object(_services_data_users_user_utilities__WEBPACK_IMPORTED_MODULE_3__["generateMockUser"])();
    }; // Add mock data for API endpoints


    var USER_LIST = Array(1000).fill(0).map(ɵ1);

    var ɵ2 = function ɵ2(_) {
      return {
        total: 10,
        results: MOCK_SYSTEMS
      };
    },
        ɵ3 = function ɵ3(_) {
      return SPACE_LIST;
    },
        ɵ4 = function ɵ4(_) {
      return USER_LIST;
    },
        ɵ5 = function ɵ5(_) {
      return USER_LIST[0];
    },
        ɵ6 = function ɵ6(_) {
      return {
        total: 1,
        results: [{
          id: 'zone_org-1'
        }]
      };
    };

    var handlers = [{
      path: '/api/engine/v2/systems',
      metadata: null,
      method: 'GET',
      callback: ɵ2
    }, {
      path: '/api/staff/rooms',
      metadata: null,
      method: 'GET',
      callback: ɵ3
    }, {
      path: '/api/staff/users',
      metadata: null,
      method: 'GET',
      callback: ɵ4
    }, {
      path: '/api/engine/v2/users/current',
      metadata: null,
      method: 'GET',
      callback: ɵ5
    }, {
      path: '/api/engine/v2/zones',
      metadata: null,
      method: 'GET',
      callback: ɵ6
    }];

    for (var _i = 0, _handlers = handlers; _i < _handlers.length; _i++) {
      var handler = _handlers[_i];
      Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])(handler);
    }
    /***/

  },

  /***/
  "./src/app/shared/shared.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/shared/shared.module.ts ***!
    \*****************************************/

  /*! exports provided: SharedContentModule */

  /***/
  function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedContentModule", function () {
      return SharedContentModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./base.component */
    "./src/app/shared/base.component.ts");
    /* harmony import */


    var _components_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/user-search-field/user-search-field.component */
    "./src/app/shared/components/user-search-field/user-search-field.component.ts");
    /* harmony import */


    var _components_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/time-field/time-field.component */
    "./src/app/shared/components/time-field/time-field.component.ts");
    /* harmony import */


    var _components_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/duration-field/duration-field.component */
    "./src/app/shared/components/duration-field/duration-field.component.ts");
    /* harmony import */


    var _directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./directives/binding/binding.directive */
    "./src/app/shared/directives/binding/binding.directive.ts");

    var COMPONENTS = [_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"], _directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_5__["BindingDirective"]];
    var ENTRY_COMPONENT = [_components_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_2__["CustomUserSearchFieldComponent"], _components_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_3__["CustomTimeFieldComponent"], _components_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_4__["CustomDurationFieldComponent"]];

    var SharedContentModule = function SharedContentModule() {
      _classCallCheck(this, SharedContentModule);
    };
    /***/

  },

  /***/
  "./src/app/shared/utilities/api.utilities.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/utilities/api.utilities.ts ***!
    \***************************************************/

  /*! exports provided: toQueryString */

  /***/
  function srcAppSharedUtilitiesApiUtilitiesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "toQueryString", function () {
      return toQueryString;
    });
    /**
     * Convert map into a query string
     * @param map Key value pairs to convert
     */


    function toQueryString(map) {
      var str = '';

      if (map) {
        for (var key in map) {
          if (map.hasOwnProperty(key) && map[key] !== undefined && map[key] !== null) {
            str += "".concat(str ? '&' : '').concat(key, "=").concat(map[key]);
          }
        }
      }

      return str;
    }
    /***/

  },

  /***/
  "./src/app/shared/utilities/formatting.utilities.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/utilities/formatting.utilities.ts ***!
    \**********************************************************/

  /*! exports provided: formatAttendeesWithHost, formatAttendees, formatDate, formatTime, formatPeriodWithDuration, formatPeriod, formatDuration, RECURRENCE_PERIODS, formatRecurrence, formatSpaces */

  /***/
  function srcAppSharedUtilitiesFormattingUtilitiesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatAttendeesWithHost", function () {
      return formatAttendeesWithHost;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatAttendees", function () {
      return formatAttendees;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatDate", function () {
      return formatDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatTime", function () {
      return formatTime;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatPeriodWithDuration", function () {
      return formatPeriodWithDuration;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatPeriod", function () {
      return formatPeriod;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatDuration", function () {
      return formatDuration;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RECURRENCE_PERIODS", function () {
      return RECURRENCE_PERIODS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatRecurrence", function () {
      return formatRecurrence;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "formatSpaces", function () {
      return formatSpaces;
    });
    /* harmony import */


    var _general_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./general.utilities */
    "./src/app/shared/utilities/general.utilities.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__); // attendees: FormFormatters.attendees(user),
    // date: FormFormatters.date,
    // room: FormFormatters.space,
    // recurrence: FormFormatters.recurrence

    /**
     * Get function to create formatted string for a list of users with a host
     * @param host Host user
     */


    function formatAttendeesWithHost(host) {
      return function (l) {
        return formatAttendees(l, host);
      };
    }
    /**
     * Create formatted string from a list of users
     * @param list List of users
     * @param host Owner of the list of users
     */


    function formatAttendees(list, host) {
      var attendee_str = '';

      if (list && list.length > 0) {
        var users = _toConsumableArray(list);

        if (host) {
          var result = users.find(function (a) {
            return a.email === host.email;
          });

          if (result) {
            users.splice(users.indexOf(result), 1);
          }
        }

        var length = users.length + (host ? 1 : 0);
        attendee_str = "".concat(length, " Attendee").concat(length === 1 ? '' : 's', "; ").concat(host ? host.name : '');

        var _iterator23 = _createForOfIteratorHelper(users),
            _step23;

        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var item = _step23.value;

            if (attendee_str) {
              attendee_str += ', ';
            }

            attendee_str += item.name;
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }

        attendee_str = attendee_str.replace('; ,', ';');
      }

      return attendee_str;
    }
    /**
     * Create date formatted string for given date
     * @param date Date to format
     */


    function formatDate(date) {
      return dayjs__WEBPACK_IMPORTED_MODULE_1__(date).format('DD MMMM YYYY');
    }
    /**
     * Create time formatted string for given date
     * @param date Date to format
     */


    function formatTime(date) {
      return dayjs__WEBPACK_IMPORTED_MODULE_1__(date).format('h:mm A');
    }
    /**
     * Create formatted string for a period of given duration
     * @param duration Period duration in minutes
     */


    function formatPeriodWithDuration(duration) {
      return function (t) {
        return formatPeriod(t, duration);
      };
    }
    /**
     * Create formatted string for a period of given duration
     * @param timestamp Start hours and minutes of the period in the format `HH:mm`
     * @param duration Period duration in minutes
     */


    function formatPeriod(timestamp) {
      var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 60;
      var parts = timestamp.split(':');
      var date = dayjs__WEBPACK_IMPORTED_MODULE_1__().hour(+parts[0]).minute(+parts[1]);
      return "".concat(date.format('h:mm A'), " - ").concat(date.add(duration, 'm').format('h:mm A'), " (").concat(Object(_general_utilities__WEBPACK_IMPORTED_MODULE_0__["humaniseDuration"])(duration), ")");
    }
    /**
     * Create formatted human readable string for a given duration
     * @param duration Duration in minutes
     */


    function formatDuration(duration) {
      return Object(_general_utilities__WEBPACK_IMPORTED_MODULE_0__["humaniseDuration"])(duration);
    }
    /** Human readable names of applicable recurrence periods */


    var RECURRENCE_PERIODS = ['None', 'Daily', 'Weekly', 'Monthly', 'Yearly'];
    /**
     * Create human readable string for recurrence metadata
     * @param value
     */

    function formatRecurrence(value) {
      if (!value || !value.period || value.period >= RECURRENCE_PERIODS.length) {
        return 'No recurrence';
      }

      var period = typeof value.period === 'string' ? value.period : RECURRENCE_PERIODS[value.period];
      var end = value.end ? "until ".concat(dayjs__WEBPACK_IMPORTED_MODULE_1__(value.end).format('DD MMM YYYY')) : 'forever';
      return "".concat(period, " ").concat(end);
    }
    /**
     * Create human readable string for a room or list of rooms
     * @param list List of spaces/rooms
     */


    function formatSpaces(list) {
      if (!list || list instanceof Array && list.length <= 0) {
        return 'No selected space';
      }

      if (list instanceof Array) {
        return list.length === 1 ? list[0].name : "".concat(list.length, " Space").concat(list.length !== 1 ? 's' : '');
      } else {
        var capacity = list.capacity ? '(' + list.capacity + ' ' + (list.capacity === 1 ? 'person' : 'people') + ')' : '';
        return "".concat(list.name, " ").concat(capacity);
      }
    }
    /***/

  },

  /***/
  "./src/app/shared/utilities/general.utilities.ts":
  /*!*******************************************************!*\
    !*** ./src/app/shared/utilities/general.utilities.ts ***!
    \*******************************************************/

  /*! exports provided: getItemWithKeys, isMobileDevice, isMobileSafari, isAndroidChrome, padZero, unique, humaniseDuration, filterList, matchToHighlight, timeToDate, flatten */

  /***/
  function srcAppSharedUtilitiesGeneralUtilitiesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getItemWithKeys", function () {
      return getItemWithKeys;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isMobileDevice", function () {
      return isMobileDevice;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isMobileSafari", function () {
      return isMobileSafari;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "isAndroidChrome", function () {
      return isAndroidChrome;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "padZero", function () {
      return padZero;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "unique", function () {
      return unique;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "humaniseDuration", function () {
      return humaniseDuration;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "filterList", function () {
      return filterList;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matchToHighlight", function () {
      return matchToHighlight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "timeToDate", function () {
      return timeToDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "flatten", function () {
      return flatten;
    });
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

    function getItemWithKeys(keys, map) {
      var key = keys.shift();

      if (map[key]) {
        return keys.length > 0 ? getItemWithKeys(keys, map[key]) : map[key];
      }

      return null;
    }
    /**
     * Checks whether the platform is a mobile device.
     */


    function isMobileDevice() {
      var r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
      return !!navigator.userAgent.match(r);
    }
    /**
     * Checks whether the browser is Mobile Safari.
     */


    function isMobileSafari() {
      var agent = navigator.userAgent;
      return !!(agent.match(/iPhone|iPad|iPod/) && agent.match(/AppleWebKit/) && !agent.match('CriOS'));
    }
    /**
     * Checks whether the browser is Android Chrome.
     */


    function isAndroidChrome() {
      var agent = navigator.userAgent;
      return !!(agent.match(/Android/) && agent.match(/Chrome/));
    }
    /**
     * Generate string representation of a number with zeros padding the length
     * @param value Number to pad with zeros
     * @param length Length of the resulting string
     */


    function padZero(value, length) {
      var str = value.toString();

      while (str.length < length) {
        str = '0' + str;
      }

      return str;
    }
    /**
     * Remove duplicates from the given array
     * @param array List of items to remove duplicates from
     * @param key Key on array objects to compare for uniqueness
     */


    function unique(array) {
      var key = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return array.filter(function (el, pos, arr) {
        return arr.indexOf(key ? arr.find(function (i) {
          return i[key] === el[key];
        }) : arr.find(function (i) {
          return i === el;
        })) === pos;
      });
    }
    /**
     * Convert duration to human readable string
     * @param duration Duration in minutes
     * @param short Whether to use short form of duration words e.g. hours as h
     */


    function humaniseDuration(duration) {
      var _short = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

      if (!duration || duration < 0) {
        return '';
      }

      var h = Math.floor(duration / 60);
      var d = "".concat(h >= 1 ? h + (_short ? 'h' : ' hour' + (h === 1 ? '' : 's')) : '');

      if (duration % 60 !== 0) {
        if (d) {
          d += _short ? ' ' : ', ';
        }

        var m = duration % 60;
        d += "".concat(m >= 1 ? m + (_short ? 'm' : ' minute' + (m === 1 ? '' : 's')) : '');
      }

      return d;
    }
    /**
     * Get a filtered list of items
     * @param filter Value to filter on
     * @param items List of results to filter
     * @param fields Fields to check for matches on each item
     */


    function filterList(filter, items) {
      var fields = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ['id'];
      var results; // Tokenise filter string

      var filters = (filter || '').toLowerCase().split(' ');
      var list = {};

      var _iterator24 = _createForOfIteratorHelper(filters),
          _step24;

      try {
        for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
          var _f5 = _step24.value;

          if (_f5) {
            if (!list[_f5]) {
              list[_f5] = 0;
            }

            list[_f5]++;
          }
        } // Group similar tokens

      } catch (err) {
        _iterator24.e(err);
      } finally {
        _iterator24.f();
      }

      var parts = [];

      for (var f in list) {
        if (list.hasOwnProperty(f)) {
          parts.push({
            word: f,
            count: list[f],
            regex: new RegExp(f, 'gi')
          });
        }
      }

      parts.sort(function (a, b) {
        return b.word.length - a.word.length || a.word.localeCompare(b.word);
      });
      var item_list = JSON.parse(JSON.stringify(items || []));

      if (filter) {
        results = item_list.filter(function (item) {
          var match_count = 0;
          item.match_index = 65535;
          item.match = '';
          var field_list = {}; // Initialise field match variables

          var _iterator25 = _createForOfIteratorHelper(fields),
              _step25;

          try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
              var _f = _step25.value;
              field_list[_f] = {
                value: (item[_f] || '').toLowerCase(),
                index: 65536,
                matched: 0
              };
            } // Search for matches with the tokenised filter string

          } catch (err) {
            _iterator25.e(err);
          } finally {
            _iterator25.f();
          }

          var _iterator26 = _createForOfIteratorHelper(parts),
              _step26;

          try {
            for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
              var i = _step26.value;

              if (i.word) {
                // Check fields for matches
                var _iterator28 = _createForOfIteratorHelper(fields),
                    _step28;

                try {
                  for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                    var _f2 = _step28.value;
                    var field = field_list[_f2];
                    var index = field.value.indexOf(i.word);
                    field.index = index < field.index ? index : field.index;
                    field.matches = (field.value.match(i.regex) || []).length;
                    field.value = field.value.replace(i.regex, ' ');
                  } // Update token match count

                } catch (err) {
                  _iterator28.e(err);
                } finally {
                  _iterator28.f();
                }

                var _iterator29 = _createForOfIteratorHelper(fields),
                    _step29;

                try {
                  for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                    var _f3 = _step29.value;
                    var _field = field_list[_f3];

                    if (_field.matches >= i.count) {
                      match_count++; // Update field matches

                      var changed = 0;
                      var tokens = (item["match_".concat(_f3)] || item[_f3] || '').split(' ');

                      var _iterator30 = _createForOfIteratorHelper(tokens),
                          _step30;

                      try {
                        for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                          var k = _step30.value;

                          if (changed >= i.count) {
                            break;
                          }

                          if (k.toLowerCase().indexOf(i.word) >= 0 && k.indexOf('`') < 0) {
                            tokens[tokens.indexOf(k)] = k.replace(i.regex, '`$&`');
                            changed++;
                          }
                        }
                      } catch (err) {
                        _iterator30.e(err);
                      } finally {
                        _iterator30.f();
                      }

                      item["match_".concat(_f3)] = tokens.join(' ');
                      break;
                    }
                  }
                } catch (err) {
                  _iterator29.e(err);
                } finally {
                  _iterator29.f();
                }
              }
            } // Get field with the most relevent match

          } catch (err) {
            _iterator26.e(err);
          } finally {
            _iterator26.f();
          }

          var _iterator27 = _createForOfIteratorHelper(fields),
              _step27;

          try {
            for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
              var _f4 = _step27.value;
              var _field2 = field_list[_f4];

              if (_field2.index < item.match_index && _field2.index >= 0) {
                item.match_index = _field2.index;
                item.match = _f4;
              }
            }
          } catch (err) {
            _iterator27.e(err);
          } finally {
            _iterator27.f();
          }

          return item.match_index >= 0 && item.match && match_count >= parts.length;
        });
      } else {
        results = item_list;
      } // Sort by order of relevence then name


      results.sort(function (a, b) {
        var diff = a.match_index - b.match_index;
        return diff === 0 ? a.name.localeCompare(b.name) : diff;
      });
      return results;
    }
    /**
     * Convert a match string from `filterList` to renderable HTML
     * @param str Match string to change
     */


    function matchToHighlight(str) {
      if (str) {
        str = str.replace(/\`[a-zA-Z0-9\@\.\_]*\`/g, '<span class="highlight">$&</span>');
        str = str.replace(/\`/g, '');
      }

      return str;
    }
    /**
     * Convert time string to ms from UTC epoch for today
     * @param time Time string in the format `HH:mm`
     */


    function timeToDate(time) {
      var parts = (time || '').split(':');
      var date = dayjs__WEBPACK_IMPORTED_MODULE_0__().hour(+parts[0]).minute(+parts[1]).startOf('m');
      return date.valueOf();
    }
    /* istanbul ignore next */

    /**
     * Flatten nested array
     * @param an_array Array to flatten
     */


    function flatten(an_array) {
      var stack = _toConsumableArray(an_array);

      var res = [];

      while (stack.length) {
        // pop value from stack
        var next = stack.pop();

        if (next instanceof Array) {
          // push back array items, won't modify the original input
          stack.push.apply(stack, _toConsumableArray(next));
        } else {
          res.push(next);
        }
      } // reverse to restore input order


      return res.reverse();
    }
    /***/

  },

  /***/
  "./src/app/shared/utilities/validation.utilities.ts":
  /*!**********************************************************!*\
    !*** ./src/app/shared/utilities/validation.utilities.ts ***!
    \**********************************************************/

  /*! exports provided: validateDate, buildValidateStartTime, validateStartTime, buildValidateDuration, validateDuration, buildValidateAttendees, validateAttendees */

  /***/
  function srcAppSharedUtilitiesValidationUtilitiesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateDate", function () {
      return validateDate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "buildValidateStartTime", function () {
      return buildValidateStartTime;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateStartTime", function () {
      return validateStartTime;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "buildValidateDuration", function () {
      return buildValidateDuration;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateDuration", function () {
      return validateDuration;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "buildValidateAttendees", function () {
      return buildValidateAttendees;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "validateAttendees", function () {
      return validateAttendees;
    });
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

    var HAS_ERROR = true;
    /**
     * Check that control value is a date that is the same or after from date
     * @param control Angular form control
     * @param is_from Comparison date(ms from UTC epoch). Defaults to the current time
     */

    function validateDate(control) {
      var is_from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dayjs__WEBPACK_IMPORTED_MODULE_0__().valueOf();
      var from = dayjs__WEBPACK_IMPORTED_MODULE_0__(is_from);
      var date = dayjs__WEBPACK_IMPORTED_MODULE_0__(control.value || undefined);
      return date.isBefore(from, 'd') ? {
        date: HAS_ERROR,
        message: 'Booking needs to be made in the future'
      } : null;
    }
    /**
     * Build start time validation function
     * @param date Date of the time to check
     * @param is_from Comparison date(ms from UTC epoch). Defaults to the current time
     */


    function buildValidateStartTime(date) {
      var is_from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : dayjs__WEBPACK_IMPORTED_MODULE_0__().valueOf();
      return function (c) {
        return validateStartTime(c, date, is_from);
      };
    }
    /**
     * Check that control value time is after the comparison date time
     * @param control Angular form control
     * @param date Date of the time to check
     * @param is_from Comparison date(ms from UTC epoch). Defaults to the current time
     */


    function validateStartTime(control, date) {
      var is_from = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : dayjs__WEBPACK_IMPORTED_MODULE_0__().valueOf();
      var now = dayjs__WEBPACK_IMPORTED_MODULE_0__(is_from);
      var parts = control.value.split(':');
      var date_obj = dayjs__WEBPACK_IMPORTED_MODULE_0__(date).hour(+parts[0]).minute(+parts[1]);
      return date_obj.isBefore(now, 'm') ? {
        start: HAS_ERROR,
        message: 'Booking time needs to be made in the future'
      } : null;
    }

    function buildValidateDuration() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 240;
      return function (c) {
        return validateDuration(c, min, max);
      };
    }

    function validateDuration(control) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30;
      var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 240;

      if (control.value < (min || 30)) {
        return {
          duration: HAS_ERROR,
          message: "Minimum booking duration is ".concat(min, " minute").concat(min === 1 ? 's' : '')
        };
      } else if (control.value > (max || 480)) {
        return {
          length: HAS_ERROR,
          message: "Maximum booking duration is ".concat(max, " minute").concat(max === 1 ? 's' : '')
        };
      }

      return null;
    }

    function buildValidateAttendees(host) {
      var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      return function (c) {
        return validateAttendees(c, host, min);
      };
    }

    function validateAttendees(control, host) {
      var min = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (!control || !(control.value instanceof Array)) {
        return min > 0 ? {
          invalid: true,
          message: "Minimum of ".concat(min, " attendee").concat(min === 1 ? ' is' : 's are', " required other than you")
        } : null;
      }

      var list = control.value;

      if (host) {
        var result = list.find(function (a) {
          return a.email === host.email;
        });

        if (result) {
          list.splice(list.indexOf(result), 1);
        }
      }

      return list.length >= min ? null : {
        count: true,
        message: "Minimum of ".concat(min, " attendee").concat(min === 1 ? ' is' : 's are', " required other than you")
      };
    }
    /***/

  },

  /***/
  "./src/app/shell/bootstrap/bootstrap.component.ngfactory.js":
  /*!******************************************************************!*\
    !*** ./src/app/shell/bootstrap/bootstrap.component.ngfactory.js ***!
    \******************************************************************/

  /*! exports provided: RenderType_BootstrapComponent, View_BootstrapComponent_0, View_BootstrapComponent_Host_0, BootstrapComponentNgFactory */

  /***/
  function srcAppShellBootstrapBootstrapComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_BootstrapComponent", function () {
      return RenderType_BootstrapComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BootstrapComponent_0", function () {
      return View_BootstrapComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BootstrapComponent_Host_0", function () {
      return View_BootstrapComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BootstrapComponentNgFactory", function () {
      return BootstrapComponentNgFactory;
    });
    /* harmony import */


    var _bootstrap_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./bootstrap.component.scss.shim.ngstyle */
    "./src/app/shell/bootstrap/bootstrap.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_custom_events_acaprojects_ngx_custom_events_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@acaprojects/ngx-custom-events/acaprojects-ngx-custom-events.ngfactory */
    "./node_modules/@acaprojects/ngx-custom-events/acaprojects-ngx-custom-events.ngfactory.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory */
    "./node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory.js");
    /* harmony import */


    var _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @acaprojects/ngx-dropdown */
    "./node_modules/@acaprojects/ngx-dropdown/fesm2015/acaprojects-ngx-dropdown.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory */
    "./node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory.js");
    /* harmony import */


    var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @acaprojects/ngx-spinners */
    "./node_modules/@acaprojects/ngx-spinners/fesm2015/acaprojects-ngx-spinners.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */
    "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
    /* harmony import */


    var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @acaprojects/ngx-buttons */
    "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
    /* harmony import */


    var _bootstrap_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./bootstrap.component */
    "./src/app/shell/bootstrap/bootstrap.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_BootstrapComponent = [_bootstrap_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_BootstrapComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_BootstrapComponent,
      data: {}
    });

    function View_BootstrapComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["center", "true"], ["class", "toggle"], ["feedback", ""]], null, [[null, "tapped"], [null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).handleMouse($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).handleTouch($event) !== false;
          ad = pd_1 && ad;
        }

        if ("tapped" === en) {
          var pd_2 = (_co.manual_input = !_co.manual_input) !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_custom_events_acaprojects_ngx_custom_events_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ɵa_0"], _node_modules_acaprojects_ngx_custom_events_acaprojects_ngx_custom_events_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ɵa"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_3__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        center: [0, "center"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_3__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], function (_ck, _v) {
        var currVal_0 = "true";

        _ck(_v, 1, 0, currVal_0);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.manual_input ? "list" : "code";

        _ck(_v, 4, 0, currVal_1);
      });
    }

    function View_BootstrapComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Input the Engine System ID to bootstrap "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 9, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 8, "div", [["class", "input"]], [[2, "focus", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "input", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"], [null, "blur"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.system_id = $event) !== false;
          ad = pd_4 && ad;
        }

        if ("focus" === en) {
          var pd_5 = (_co.input_focus = true) !== false;
          ad = pd_5 && ad;
        }

        if ("blur" === en) {
          var pd_6 = (_co.input_focus = false) !== false;
          ad = pd_6 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "div", [["class", "placeholder"]], [[2, "focus", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Engine System ID"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_8 = _co.system_id;

        _ck(_v, 8, 0, currVal_8);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.input_focus || _co.system_id;

        _ck(_v, 4, 0, currVal_0);

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending;

        _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_9 = _co.input_focus;

        _ck(_v, 11, 0, currVal_9);
      });
    }

    function View_BootstrapComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Select the relevent system from the available dropdown "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "a-dropdown", [["klass", "fill"], ["placeholder", "Select system"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("ngModelChange" === en) {
          var pd_0 = (_co.selected_system = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ADropdownComponent_0"], _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ADropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4767744, null, 0, _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_6__["ADropdownComponent"], [], {
        klass: [0, "klass"],
        items: [1, "items"],
        placeholder: [2, "placeholder"],
        options: [3, "options"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](5, {
        can_filter: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_6__["ADropdownComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = "fill";
        var currVal_8 = _co.system_list;
        var currVal_9 = "Select system";

        var currVal_10 = _ck(_v, 5, 0, true);

        _ck(_v, 4, 0, currVal_7, currVal_8, currVal_9, currVal_10);

        var currVal_11 = _co.selected_system;

        _ck(_v, 7, 0, currVal_11);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending;

        _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      });
    }

    function View_BootstrapComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BootstrapComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["list_desc", 2]], null, 0, null, View_BootstrapComponent_4))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.manual_input;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3);

        _ck(_v, 2, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_BootstrapComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["class", "info-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "a-spinner", [["circle-ring", ""], ["color", "#000"]], null, null, null, _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_ɵc_0"], _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_ɵc"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_9__["ɵc"], [], {
        color: [0, "color"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Loading system data... "]))], function (_ck, _v) {
        var currVal_0 = "#000";

        _ck(_v, 4, 0, currVal_0);
      }, null);
    }

    function View_BootstrapComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "button", [["widget", ""]], [[8, "disabled", 0]], [[null, "tapped"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = _co.bootstrap() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_11__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_11__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_3__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Submit "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.manual_input && !_co.system_id || !_co.manual_input && (!_co.selected_system || !_co.selected_system.id);

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_BootstrapComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "bootstrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [["class", "options"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "header fs-big"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Booking Panel Setup"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BootstrapComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BootstrapComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BootstrapComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BootstrapComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.system_list && _co.system_list.length > 0;

        _ck(_v, 6, 0, currVal_0);

        var currVal_1 = !_co.loading;

        _ck(_v, 8, 0, currVal_1);

        var currVal_2 = _co.loading;

        _ck(_v, 10, 0, currVal_2);

        var currVal_3 = !_co.loading;

        _ck(_v, 12, 0, currVal_3);
      }, null);
    }

    function View_BootstrapComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-bootstrap", [], null, null, null, View_BootstrapComponent_0, RenderType_BootstrapComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _bootstrap_component__WEBPACK_IMPORTED_MODULE_12__["BootstrapComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_13__["ApplicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var BootstrapComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-bootstrap", _bootstrap_component__WEBPACK_IMPORTED_MODULE_12__["BootstrapComponent"], View_BootstrapComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/shell/bootstrap/bootstrap.component.scss.shim.ngstyle.js":
  /*!**************************************************************************!*\
    !*** ./src/app/shell/bootstrap/bootstrap.component.scss.shim.ngstyle.js ***!
    \**************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppShellBootstrapBootstrapComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".bootstrap[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #f0f0f0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ddd' fill-opacity='1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n.options[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  width: 26em;\n  max-width: 95vw;\n  margin: 1em 1em auto 1em;\n}\n.header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #b71c1c;\n  color: #fff;\n  padding: 0.5em;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin: 0;\n  padding: 0;\n  font-weight: 300;\n}\n.toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 50%;\n  right: 0.5em;\n  width: 1.2em;\n  height: 1.2em;\n  transform: translateY(-50%);\n  font-size: 1.2em;\n  border-radius: 100%;\n  margin: 0;\n}\n.description[_ngcontent-%COMP%] {\n  text-align: center;\n}\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 0.8em;\n}\na-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5em;\n}\n.input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input.focus[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  top: 0;\n  font-size: 0.6em;\n}\n.placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0.5rem;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 1em;\n  transform: translateY(-50%);\n  transition: top 200ms, font-size 200ms, color 200ms;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 4px;\n  pointer-events: none;\n}\n.placeholder.focus[_ngcontent-%COMP%] {\n  color: #1f40e6;\n}\n.info-block[_ngcontent-%COMP%] {\n  min-height: 7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL2Jvb3RzdHJhcC9ib290c3RyYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL2Jvb3RzdHJhcC9ib290c3RyYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBNkJBOztjQUFBO0FBV0E7O3NCQUFBO0FDdENBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxxaUJBQUE7QUNPSjtBREpBO0VBQ0ksc0JBQUE7RUFDQSxrQkFBQTtFQUNBLCtHQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDT0o7QURKQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDT0o7QURKQTtFQUNJLGNBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDT0o7QURKQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ09KO0FESkE7RUFDSSxrQkFBQTtBQ09KO0FESkE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNPSjtBREpBO0VBQ0ksV0FBQTtBQ09KO0FESkE7RUFDSSxZQUFBO0FDT0o7QURKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ09KO0FESkE7RUFDSSxrQkFBQTtBQ09KO0FETFE7RUFDSSxNQUFBO0VBQ0EsZ0JBQUE7QUNPWjtBREZBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLDJCQUFBO0VBQ0EsbURBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9CQUFBO0FDS0o7QURKSTtFQUNJLGNEakZVO0FFdUZsQjtBREZBO0VBQ0ksZUFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvYm9vdHN0cmFwL2Jvb3RzdHJhcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogI2ZmZjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzFmNDBlNjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG5cbiRiYXNlLXNpemU6IDIwcHg7XG4kdGFibGV0LXNpemU6IDIwcHg7XG4kbW9iaWxlLXNpemU6IDIwcHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmJvb3RzdHJhcCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgei1pbmRleDogOTk7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyOCcgaGVpZ2h0PSc0OScgdmlld0JveD0nMCAwIDI4IDQ5JyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgaWQ9J2hleGFnb25zJyBmaWxsPSclMjNkZGQnIGZpbGwtb3BhY2l0eT0nMScgZmlsbC1ydWxlPSdub256ZXJvJyUzRSUzQ3BhdGggZD0nTTEzLjk5IDkuMjVsMTMgNy41djE1bC0xMyA3LjVMMSAzMS43NXYtMTVsMTIuOTktNy41ek0zIDE3Ljl2MTIuN2wxMC45OSA2LjM0IDExLTYuMzVWMTcuOWwtMTEtNi4zNEwzIDE3Ljl6TTAgMTVsMTIuOTgtNy41VjBoLTJ2Ni4zNUwwIDEyLjY5djIuM3ptMCAxOC41TDEyLjk4IDQxdjhoLTJ2LTYuODVMMCAzNS44MXYtMi4zek0xNSAwdjcuNUwyNy45OSAxNUgyOHYtMi4zMWgtLjAxTDE3IDYuMzVWMGgtMnptMCA0OXYtOGwxMi45OS03LjVIMjh2Mi4zMWgtLjAxTDE3IDQyLjE1VjQ5aC0yeicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG59XG5cbi5vcHRpb25zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aWR0aDogMjZlbTtcbiAgICBtYXgtd2lkdGg6IDk1dnc7XG4gICAgbWFyZ2luOiAxZW0gMWVtIGF1dG8gMWVtO1xufVxuXG4uaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiNzFjMWM7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogLjVlbTtcbn1cblxuaDEge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi50b2dnbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IC41ZW07XG4gICAgd2lkdGg6IDEuMmVtO1xuICAgIGhlaWdodDogMS4yZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbn1cblxuYS1kcm9wZG93biB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib2R5IHtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuNWVtO1xufVxuXG4uaW5wdXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAmLmZvY3VzIHtcbiAgICAgICAgLnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjZlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogLjVyZW07XG4gICAgY29sb3I6IHJnYmEoJGZvbnQtZGFyaywgLjYpO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB0cmFuc2l0aW9uOiB0b3AgMjAwbXMsIGZvbnQtc2l6ZSAyMDBtcywgY29sb3IgMjAwbXM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogNHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICYuZm9jdXMge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcbiAgICB9XG59XG5cbi5pbmZvLWJsb2NrIHtcbiAgICBtaW4taGVpZ2h0OiA3ZW07XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uYm9vdHN0cmFwIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTk7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHdpZHRoPScyOCcgaGVpZ2h0PSc0OScgdmlld0JveD0nMCAwIDI4IDQ5JyUzRSUzQ2cgZmlsbC1ydWxlPSdldmVub2RkJyUzRSUzQ2cgaWQ9J2hleGFnb25zJyBmaWxsPSclMjNkZGQnIGZpbGwtb3BhY2l0eT0nMScgZmlsbC1ydWxlPSdub256ZXJvJyUzRSUzQ3BhdGggZD0nTTEzLjk5IDkuMjVsMTMgNy41djE1bC0xMyA3LjVMMSAzMS43NXYtMTVsMTIuOTktNy41ek0zIDE3Ljl2MTIuN2wxMC45OSA2LjM0IDExLTYuMzVWMTcuOWwtMTEtNi4zNEwzIDE3Ljl6TTAgMTVsMTIuOTgtNy41VjBoLTJ2Ni4zNUwwIDEyLjY5djIuM3ptMCAxOC41TDEyLjk4IDQxdjhoLTJ2LTYuODVMMCAzNS44MXYtMi4zek0xNSAwdjcuNUwyNy45OSAxNUgyOHYtMi4zMWgtLjAxTDE3IDYuMzVWMGgtMnptMCA0OXYtOGwxMi45OS03LjVIMjh2Mi4zMWgtLjAxTDE3IDQyLjE1VjQ5aC0yeicvJTNFJTNDL2clM0UlM0MvZyUzRSUzQy9zdmclM0VcIik7XG59XG5cbi5vcHRpb25zIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiAyNmVtO1xuICBtYXgtd2lkdGg6IDk1dnc7XG4gIG1hcmdpbjogMWVtIDFlbSBhdXRvIDFlbTtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiNzFjMWM7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuaDEge1xuICBmb250LXNpemU6IDFlbTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG4udG9nZ2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAwLjVlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBoZWlnaHQ6IDEuMmVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbjogMDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5wIHtcbiAgbWFyZ2luLXRvcDogMDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuYS1kcm9wZG93biB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYm9keSB7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cblxuLmlucHV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmlucHV0LmZvY3VzIC5wbGFjZWhvbGRlciB7XG4gIHRvcDogMDtcbiAgZm9udC1zaXplOiAwLjZlbTtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMC41cmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBmb250LXNpemU6IDFlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB0cmFuc2l0aW9uOiB0b3AgMjAwbXMsIGZvbnQtc2l6ZSAyMDBtcywgY29sb3IgMjAwbXM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgcGFkZGluZzogNHB4O1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5wbGFjZWhvbGRlci5mb2N1cyB7XG4gIGNvbG9yOiAjMWY0MGU2O1xufVxuXG4uaW5mby1ibG9jayB7XG4gIG1pbi1oZWlnaHQ6IDdlbTtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/shell/bootstrap/bootstrap.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/shell/bootstrap/bootstrap.component.ts ***!
    \********************************************************/

  /*! exports provided: BootstrapComponent */

  /***/
  function srcAppShellBootstrapBootstrapComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BootstrapComponent", function () {
      return BootstrapComponent;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _shared_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/base.component */
    "./src/app/shared/base.component.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var BootstrapComponent = /*#__PURE__*/function (_shared_base_componen4) {
      _inherits(BootstrapComponent, _shared_base_componen4);

      var _super23 = _createSuper(BootstrapComponent);

      function BootstrapComponent(service, route) {
        var _this73;

        _classCallCheck(this, BootstrapComponent);

        _this73 = _super23.call(this);
        _this73.service = service;
        _this73.route = route;
        /** List of available systems */

        _this73.system_list = [];
        /** Selected system to bootstrap */

        _this73.selected_system = null;
        return _this73;
      }

      _createClass(BootstrapComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this74 = this;

          this.loading = true;
          this.service.Spaces.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(function (_) {
            return _;
          })).subscribe(function () {
            _this74.subscription('route.query', _this74.route.queryParamMap.subscribe(function (params) {
              if (params.has('clear') && params.get('clear')) {
                _this74.clearBootstrap();
              }

              if (params.has('system_id') || params.has('sys_id')) {
                _this74.system_id = params.get('system_id') || params.get('sys_id');
                _this74.manual_input = true;

                _this74.bootstrap();
              }
            }));

            _this74.subscription('system_list', _this74.service.Systems.systems.subscribe(function (systems) {
              _this74.system_list = systems || [];
              _this74.manual_input = !_this74.system_list || _this74.system_list.length <= 0;
              _this74.loading = false;
            }));

            _this74.checkBootstrapped();
          });
        }
        /**
         * Setup the default system for the application to bind to
         */

      }, {
        key: "bootstrap",
        value: function bootstrap() {
          if (this.manual_input && this.system_id) {
            this.configure(this.system_id);
          } else if (this.selected_system) {
            this.configure(this.selected_system.id);
          }
        }
        /**
         * Check if the application has previously been bootstrapped
         */

      }, {
        key: "checkBootstrapped",
        value: function checkBootstrapped() {
          this.loading = true;

          if (localStorage) {
            var system_id = localStorage.getItem('ACA.PANEL.system') || localStorage.getItem('ACA.CONTROL.system');

            if (system_id) {
              this.service.navigate(['panel', system_id]);
              return;
            }
          }

          var user = this.service.Users.current;

          if (user) {
            var space = this.service.Spaces.item(user.email);

            if (space) {
              this.service.navigate(['panel', space.id]);
              return;
            }
          }

          this.loading = false;
        }
        /**
         * Save the bootstrapped ID and redirect to the panel for that ID
         * @param system_id System to bootstrap
         */

      }, {
        key: "configure",
        value: function configure(system_id) {
          if (localStorage) {
            localStorage.setItem('ACA.PANEL.system', system_id);
          }

          this.service.navigate(['panel', system_id]);
        }
        /**
         * Remove any previously set bootstrapping details
         */

      }, {
        key: "clearBootstrap",
        value: function clearBootstrap() {
          if (localStorage) {
            localStorage.removeItem('ACA.PANEL.system');
          }
        }
      }]);

      return BootstrapComponent;
    }(_shared_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);
    /***/

  },

  /***/
  "./src/app/shell/panel-array/panel-array.component.ngfactory.js":
  /*!**********************************************************************!*\
    !*** ./src/app/shell/panel-array/panel-array.component.ngfactory.js ***!
    \**********************************************************************/

  /*! exports provided: RenderType_BookingPanelArrayComponent, View_BookingPanelArrayComponent_0, View_BookingPanelArrayComponent_Host_0, BookingPanelArrayComponentNgFactory */

  /***/
  function srcAppShellPanelArrayPanelArrayComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_BookingPanelArrayComponent", function () {
      return RenderType_BookingPanelArrayComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BookingPanelArrayComponent_0", function () {
      return View_BookingPanelArrayComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BookingPanelArrayComponent_Host_0", function () {
      return View_BookingPanelArrayComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPanelArrayComponentNgFactory", function () {
      return BookingPanelArrayComponentNgFactory;
    });
    /* harmony import */


    var _panel_array_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./panel-array.component.scss.shim.ngstyle */
    "./src/app/shell/panel-array/panel-array.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../panel/panel.component.ngfactory */
    "./src/app/shell/panel/panel.component.ngfactory.js");
    /* harmony import */


    var _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../panel/panel.component */
    "./src/app/shell/panel/panel.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _panel_array_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./panel-array.component */
    "./src/app/shell/panel-array/panel-array.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_BookingPanelArrayComponent = [_panel_array_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_BookingPanelArrayComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_BookingPanelArrayComponent,
      data: {}
    });

    function View_BookingPanelArrayComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-booking-panel", [], null, null, null, _panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_BookingPanelComponent_0"], _panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_BookingPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["BookingPanelComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]], {
        system_id: [0, "system_id"],
        reverse: [1, "reverse"],
        show_time: [2, "show_time"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit;
        var currVal_1 = _v.parent.context.index % 2 !== 0;
        var currVal_2 = false;

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
      }, null);
    }

    function View_BookingPanelArrayComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "panel-outlet"]], [[4, "height", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelArrayComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null)], function (_ck, _v) {
        var currVal_1 = _v.context.$implicit;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 4);

        _ck(_v, 2, 0, currVal_1, currVal_2);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.systems.length >= 2 ? "50%" : "100%";

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_BookingPanelArrayComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_BookingPanelArrayComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform(_co.systems, 0, 4));

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_BookingPanelArrayComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "info-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No systems are set for displaying on the panel array"]))], null, null);
    }

    function View_BookingPanelArrayComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "logo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.logo;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_BookingPanelArrayComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "content center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelArrayComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.logo;

        _ck(_v, 3, 0, currVal_0);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.time;

        _ck(_v, 5, 0, currVal_1);
      });
    }

    function View_BookingPanelArrayComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "panel-array"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelArrayComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["none", 2]], null, 0, null, View_BookingPanelArrayComponent_4)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["empty_state", 2]], null, 0, null, View_BookingPanelArrayComponent_5))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.systems && _co.systems.length > 0;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3);

        _ck(_v, 2, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_BookingPanelArrayComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-booking-panel-array", [], null, null, null, View_BookingPanelArrayComponent_0, RenderType_BookingPanelArrayComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _panel_array_component__WEBPACK_IMPORTED_MODULE_7__["BookingPanelArrayComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var BookingPanelArrayComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-booking-panel-array", _panel_array_component__WEBPACK_IMPORTED_MODULE_7__["BookingPanelArrayComponent"], View_BookingPanelArrayComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/shell/panel-array/panel-array.component.scss.shim.ngstyle.js":
  /*!******************************************************************************!*\
    !*** ./src/app/shell/panel-array/panel-array.component.scss.shim.ngstyle.js ***!
    \******************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppShellPanelArrayPanelArrayComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".panel-array[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.panel-outlet[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  border: 1px solid #fff;\n  min-width: 40%;\n}\n.container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: linear-gradient(135deg, #051c2c, #0a2247, #0a2247, #1e3cd8);\n  background-image: url(\"data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 18c0-1.105.887-2 1.998-2 1.104 0 2-.895 2.002-1.994V14v6h-4v-2zM0 13.998C0 12.895.888 12 2 12c1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2 .888 2 2v2H0v-6.002zm16 4.004A1.994 1.994 0 0 1 14 20c-1.105 0-2-.887-2-1.998v-4.004A1.994 1.994 0 0 0 10 12c-1.105 0-2-.888-2-2 0-1.105-.888-2-2-2-1.105 0-2-.887-2-1.998V1.998A1.994 1.994 0 0 0 2 0a2 2 0 0 0-2 2V0h8v2c0 1.105.888 2 2 2 1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2-.888 2-2 0-1.105.888-2 2-2 1.105 0 2-.888 2-2V0h4v6.002A1.994 1.994 0 0 1 22 8c-1.105 0-2 .888-2 2 0 1.105-.888 2-2 2-1.105 0-2 .887-2 1.998v4.004z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  color: #fff;\n}\n.logo[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 12em;\n}\n.time[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsLWFycmF5L3BhbmVsLWFycmF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9wYW5lbC1hcnJheS9wYW5lbC1hcnJheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUE2QkE7O2NBQUE7QUFXQTs7c0JBQUE7QUN0Q0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUNPSjtBREpBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FDT0o7QURKQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkVESFM7RUNJVCxzeEJBQUE7RUFDQSxXRDNCUztBRWtDYjtBREpBO0VBQ0ksa0JBQUE7QUNPSjtBREpBO0VBQ0ksZUFBQTtBQ09KO0FESkE7RUFDSSxnQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvcGFuZWwtYXJyYXkvcGFuZWwtYXJyYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5wYW5lbC1hcnJheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucGFuZWwtb3V0bGV0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleDogMTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICAgIG1pbi13aWR0aDogNDAlO1xufVxuXG4uY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzI0JyBoZWlnaHQ9JzIwJyB2aWV3Qm94PScwIDAgMjQgMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00yMCAxOGMwLTEuMTA1Ljg4Ny0yIDEuOTk4LTIgMS4xMDQgMCAyLS44OTUgMi4wMDItMS45OTRWMTR2NmgtNHYtMnpNMCAxMy45OThDMCAxMi44OTUuODg4IDEyIDIgMTJjMS4xMDUgMCAyIC44ODggMiAyIDAgMS4xMDUuODg4IDIgMiAyIDEuMTA1IDAgMiAuODg4IDIgMnYySDB2LTYuMDAyem0xNiA0LjAwNEExLjk5NCAxLjk5NCAwIDAgMSAxNCAyMGMtMS4xMDUgMC0yLS44ODctMi0xLjk5OHYtNC4wMDRBMS45OTQgMS45OTQgMCAwIDAgMTAgMTJjLTEuMTA1IDAtMi0uODg4LTItMiAwLTEuMTA1LS44ODgtMi0yLTItMS4xMDUgMC0yLS44ODctMi0xLjk5OFYxLjk5OEExLjk5NCAxLjk5NCAwIDAgMCAyIDBhMiAyIDAgMCAwLTIgMlYwaDh2MmMwIDEuMTA1Ljg4OCAyIDIgMiAxLjEwNSAwIDIgLjg4OCAyIDIgMCAxLjEwNS44ODggMiAyIDIgMS4xMDUgMCAyLS44ODggMi0yIDAtMS4xMDUuODg4LTIgMi0yIDEuMTA1IDAgMi0uODg4IDItMlYwaDR2Ni4wMDJBMS45OTQgMS45OTQgMCAwIDEgMjIgOGMtMS4xMDUgMC0yIC44ODgtMiAyIDAgMS4xMDUtLjg4OCAyLTIgMi0xLjEwNSAwLTIgLjg4Ny0yIDEuOTk4djQuMDA0eicgZmlsbD0nJTIzZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMDUnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgICBjb2xvcjogJGZvbnQtbGlnaHQ7XG59XG5cbi5sb2dvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbmltZyB7XG4gICAgbWF4LXdpZHRoOiAxMmVtO1xufVxuXG4udGltZSB7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5wYW5lbC1hcnJheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuXG4ucGFuZWwtb3V0bGV0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBtaW4td2lkdGg6IDQwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCAyNCAyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTIwIDE4YzAtMS4xMDUuODg3LTIgMS45OTgtMiAxLjEwNCAwIDItLjg5NSAyLjAwMi0xLjk5NFYxNHY2aC00di0yek0wIDEzLjk5OEMwIDEyLjg5NS44ODggMTIgMiAxMmMxLjEwNSAwIDIgLjg4OCAyIDIgMCAxLjEwNS44ODggMiAyIDIgMS4xMDUgMCAyIC44ODggMiAydjJIMHYtNi4wMDJ6bTE2IDQuMDA0QTEuOTk0IDEuOTk0IDAgMCAxIDE0IDIwYy0xLjEwNSAwLTItLjg4Ny0yLTEuOTk4di00LjAwNEExLjk5NCAxLjk5NCAwIDAgMCAxMCAxMmMtMS4xMDUgMC0yLS44ODgtMi0yIDAtMS4xMDUtLjg4OC0yLTItMi0xLjEwNSAwLTItLjg4Ny0yLTEuOTk4VjEuOTk4QTEuOTk0IDEuOTk0IDAgMCAwIDIgMGEyIDIgMCAwIDAtMiAyVjBoOHYyYzAgMS4xMDUuODg4IDIgMiAyIDEuMTA1IDAgMiAuODg4IDIgMiAwIDEuMTA1Ljg4OCAyIDIgMiAxLjEwNSAwIDItLjg4OCAyLTIgMC0xLjEwNS44ODgtMiAyLTIgMS4xMDUgMCAyLS44ODggMi0yVjBoNHY2LjAwMkExLjk5NCAxLjk5NCAwIDAgMSAyMiA4Yy0xLjEwNSAwLTIgLjg4OC0yIDIgMCAxLjEwNS0uODg4IDItMiAyLTEuMTA1IDAtMiAuODg3LTIgMS45OTh2NC4wMDR6JyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4wNScgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmxvZ28ge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbmltZyB7XG4gIG1heC13aWR0aDogMTJlbTtcbn1cblxuLnRpbWUge1xuICBmb250LXNpemU6IDEuOGVtO1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/shell/panel-array/panel-array.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shell/panel-array/panel-array.component.ts ***!
    \************************************************************/

  /*! exports provided: BookingPanelArrayComponent */

  /***/
  function srcAppShellPanelArrayPanelArrayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPanelArrayComponent", function () {
      return BookingPanelArrayComponent;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../shared/base.component */
    "./src/app/shared/base.component.ts");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);

    var BookingPanelArrayComponent = /*#__PURE__*/function (_shared_base_componen5) {
      _inherits(BookingPanelArrayComponent, _shared_base_componen5);

      var _super24 = _createSuper(BookingPanelArrayComponent);

      function BookingPanelArrayComponent(route, _service) {
        var _this75;

        _classCallCheck(this, BookingPanelArrayComponent);

        _this75 = _super24.call(this);
        _this75.route = route;
        _this75._service = _service;
        return _this75;
      }
      /** Display value for the current time */


      _createClass(BookingPanelArrayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this76 = this;

          this.subscription('app_ready', this._service.initialised.subscribe(function (is_ready) {
            if (is_ready) {
              _this76.subscription('route.query', _this76.route.queryParamMap.subscribe(function (params) {
                if (params.has('system_ids')) {
                  _this76.systems = (params.get('system_ids') || '').split(',');
                }
              }));

              var logo = _this76._service.setting('app.logo');

              _this76.logo = (logo ? logo.inverse : null) || '';

              _this76.unsub('app_ready');
            }
          }));
        }
      }, {
        key: "time",
        get: function get() {
          return dayjs__WEBPACK_IMPORTED_MODULE_3__().format('h:mm:ss A');
        }
      }]);

      return BookingPanelArrayComponent;
    }(_shared_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);
    /***/

  },

  /***/
  "./src/app/shell/panel-select/panel-select.component.ngfactory.js":
  /*!************************************************************************!*\
    !*** ./src/app/shell/panel-select/panel-select.component.ngfactory.js ***!
    \************************************************************************/

  /*! exports provided: RenderType_BookingPanelSelectComponent, View_BookingPanelSelectComponent_0, View_BookingPanelSelectComponent_Host_0, BookingPanelSelectComponentNgFactory */

  /***/
  function srcAppShellPanelSelectPanelSelectComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_BookingPanelSelectComponent", function () {
      return RenderType_BookingPanelSelectComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BookingPanelSelectComponent_0", function () {
      return View_BookingPanelSelectComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BookingPanelSelectComponent_Host_0", function () {
      return View_BookingPanelSelectComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPanelSelectComponentNgFactory", function () {
      return BookingPanelSelectComponentNgFactory;
    });
    /* harmony import */


    var _panel_select_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./panel-select.component.scss.shim.ngstyle */
    "./src/app/shell/panel-select/panel-select.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/directives/binding/binding.directive */
    "./src/app/shared/directives/binding/binding.directive.ts");
    /* harmony import */


    var _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory */
    "./node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory.js");
    /* harmony import */


    var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @acaprojects/ngx-spinners */
    "./node_modules/@acaprojects/ngx-spinners/fesm2015/acaprojects-ngx-spinners.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../panel/panel.component.ngfactory */
    "./src/app/shell/panel/panel.component.ngfactory.js");
    /* harmony import */


    var _panel_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../panel/panel.component */
    "./src/app/shell/panel/panel.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */
    "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @acaprojects/ngx-buttons */
    "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
    /* harmony import */


    var _panel_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./panel-select.component */
    "./src/app/shell/panel-select/panel-select.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_BookingPanelSelectComponent = [_panel_select_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_BookingPanelSelectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_BookingPanelSelectComponent,
      data: {}
    });

    function View_BookingPanelSelectComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "room_name"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.system_name[_v.parent.context.$implicit] = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "icon"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.system_icon[_v.parent.context.$implicit] = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "today"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = _co.updateStatus(_v.parent.context.$implicit, $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"]
      }, {
        modelChange: "modelChange"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.parent.context.$implicit;
        var currVal_1 = "Bookings";
        var currVal_2 = "room_name";
        var currVal_3 = _co.system_name[_v.parent.context.$implicit];

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);

        var currVal_4 = _v.parent.context.$implicit;
        var currVal_5 = "Bookings";
        var currVal_6 = "icon";
        var currVal_7 = _co.system_icon[_v.parent.context.$implicit];

        _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_8 = _v.parent.context.$implicit;
        var currVal_9 = "Bookings";
        var currVal_10 = "today";

        _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10);
      }, null);
    }

    function View_BookingPanelSelectComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.system_icon[_v.parent.context.$implicit];

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_BookingPanelSelectComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a-spinner", [["circle-ring", ""], ["color", "#fff"]], null, null, null, _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ɵc_0"], _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ɵc"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_4__["ɵc"], [], {
        color: [0, "color"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "#fff";

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_BookingPanelSelectComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "item"]], null, [[null, "tapped"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = (_co.system_name[_v.context.$implicit] ? _co.showPanel(_v.context.$implicit) : "") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelSelectComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelSelectComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelSelectComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _v.context.$implicit;

        _ck(_v, 3, 0, currVal_0);

        var currVal_2 = _co.system_name[_v.context.$implicit];

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = !_co.system_name[_v.context.$implicit];

        _ck(_v, 8, 0, currVal_3);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = "icon" + (_co.system_status[_v.context.$implicit] ? " " + _co.system_status[_v.context.$implicit] : "");

        _ck(_v, 4, 0, currVal_1);

        var currVal_4 = _co.system_name[_v.context.$implicit] || _v.context.$implicit + " connecting...";

        _ck(_v, 10, 0, currVal_4);
      });
    }

    function View_BookingPanelSelectComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_BookingPanelSelectComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform(_co.systems, 0, 8));

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_BookingPanelSelectComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "panel-outlet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-booking-panel", [], null, null, null, _panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_BookingPanelComponent_0"], _panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_BookingPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _panel_panel_component__WEBPACK_IMPORTED_MODULE_8__["BookingPanelComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]], {
        system_id: [0, "system_id"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 11, "div", [["class", "overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "button", [["class", "action close"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = _co.close() !== false;
          ad = pd_0 && ad;
        }

        if ("contextmenu" === en) {
          var pd_1 = $event.preventDefault() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_13__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_13__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "button", [["class", "action countdown"], ["widget", ""]], null, [[null, "contextmenu"]], function (_v, en, $event) {
        var ad = true;

        if ("contextmenu" === en) {
          var pd_0 = $event.preventDefault() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_13__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_13__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, 0, ["", ""]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.active_system;

        _ck(_v, 2, 0, currVal_0);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.countdown;

        _ck(_v, 14, 0, currVal_1);
      });
    }

    function View_BookingPanelSelectComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "info-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No systems are set for displaying on the panel select list"]))], null, null);
    }

    function View_BookingPanelSelectComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "panel-select"]], null, [["window", "mousedown"], ["window", "touchstart"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("window:mousedown" === en) {
          var pd_0 = _co.reset() !== false;
          ad = pd_0 && ad;
        }

        if ("window:touchstart" === en) {
          var pd_1 = _co.reset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "panel-options"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelSelectComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"],
        ngIfElse: [1, "ngIfElse"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelSelectComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["none", 2]], null, 0, null, View_BookingPanelSelectComponent_7))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.systems && _co.systems.length > 0;

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6);

        _ck(_v, 3, 0, currVal_0, currVal_1);

        var currVal_2 = _co.active_system;

        _ck(_v, 5, 0, currVal_2);
      }, null);
    }

    function View_BookingPanelSelectComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-booking-panel-select", [], null, null, null, View_BookingPanelSelectComponent_0, RenderType_BookingPanelSelectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _panel_select_component__WEBPACK_IMPORTED_MODULE_14__["BookingPanelSelectComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _services_app_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var BookingPanelSelectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-booking-panel-select", _panel_select_component__WEBPACK_IMPORTED_MODULE_14__["BookingPanelSelectComponent"], View_BookingPanelSelectComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/shell/panel-select/panel-select.component.scss.shim.ngstyle.js":
  /*!********************************************************************************!*\
    !*** ./src/app/shell/panel-select/panel-select.component.scss.shim.ngstyle.js ***!
    \********************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppShellPanelSelectPanelSelectComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".panel-select[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  background-color: #121212;\n}\n.panel-outlet[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border: 1px solid #fff;\n}\n.panel-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n  padding: 2em;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin: 0.5em;\n  height: 11.5em;\n  width: 10em;\n  background: linear-gradient(135deg, #051c2c, #0a2247, #0a2247, #1e3cd8);\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  padding: 0.5em;\n  border-radius: 4px;\n}\n.item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 7.5em;\n  background-color: rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n}\n.item[_ngcontent-%COMP%]   .icon.available[_ngcontent-%COMP%] {\n  background-color: rgba(67, 160, 71, 0.6);\n}\n.item[_ngcontent-%COMP%]   .icon.unavailable[_ngcontent-%COMP%] {\n  background-color: rgba(229, 57, 53, 0.6);\n}\n.item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   a-spinner[_ngcontent-%COMP%] {\n  font-size: 0.1em;\n}\n.icon[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 1em;\n  max-height: 1em;\n}\n.text[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #fff;\n  padding: 0.75em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5em;\n  left: 1.25em;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsLXNlbGVjdC9wYW5lbC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL3BhbmVsLXNlbGVjdC9wYW5lbC1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBNkJBOztjQUFBO0FBV0E7O3NCQUFBO0FDdENBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNPSjtBREpBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7QUNPSjtBREpBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDT0o7QURKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsdUVEZFM7RUNlVCwrR0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ09KO0FETEk7RUFDSSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0Esa0JBQUE7QUNPUjtBRExRO0VBQ0ksd0NBQUE7QUNPWjtBREpRO0VBQ0ksd0NBQUE7QUNNWjtBREhRO0VBQ0ksZ0JBQUE7QUNLWjtBREFBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0dKO0FEREk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQ0dSO0FEQ0E7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQ0VKO0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9wYW5lbC1zZWxlY3QvcGFuZWwtc2VsZWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4ucGFuZWwtc2VsZWN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbn1cblxuLnBhbmVsLW91dGxldCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4ucGFuZWwtb3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMmVtO1xufVxuXG4uaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAuNWVtO1xuICAgIGhlaWdodDogMTEuNWVtO1xuICAgIHdpZHRoOiAxMGVtO1xuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgIC5pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiA3LjVlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZmZmLCAuMDUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG5cbiAgICAgICAgJi5hdmFpbGFibGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3VjY2VzcywgLjYpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi51bmF2YWlsYWJsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRlcnJvciwgLjYpO1xuICAgICAgICB9XG5cbiAgICAgICAgYS1zcGlubmVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjFlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmljb24ge1xuICAgIGhlaWdodDogMS4yZW07XG4gICAgd2lkdGg6IDEuMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogMWVtO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxZW07XG4gICAgfVxufVxuXG4udGV4dCB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IC43NWVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC41ZW07XG4gICAgbGVmdDogMS4yNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5wYW5lbC1zZWxlY3Qge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEyMTIxMjtcbn1cblxuLnBhbmVsLW91dGxldCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xufVxuXG4ucGFuZWwtb3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDJlbTtcbn1cblxuLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDAuNWVtO1xuICBoZWlnaHQ6IDExLjVlbTtcbiAgd2lkdGg6IDEwZW07XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG4uaXRlbSAuaWNvbiB7XG4gIGZvbnQtc2l6ZTogNy41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wNSk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbn1cbi5pdGVtIC5pY29uLmF2YWlsYWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNjcsIDE2MCwgNzEsIDAuNik7XG59XG4uaXRlbSAuaWNvbi51bmF2YWlsYWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjI5LCA1NywgNTMsIDAuNik7XG59XG4uaXRlbSAuaWNvbiBhLXNwaW5uZXIge1xuICBmb250LXNpemU6IDAuMWVtO1xufVxuXG4uaWNvbiB7XG4gIGhlaWdodDogMS4yZW07XG4gIHdpZHRoOiAxLjJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaWNvbiBpbWcge1xuICBtYXgtd2lkdGg6IDFlbTtcbiAgbWF4LWhlaWdodDogMWVtO1xufVxuXG4udGV4dCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAwLjc1ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC41ZW07XG4gIGxlZnQ6IDEuMjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/shell/panel-select/panel-select.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/shell/panel-select/panel-select.component.ts ***!
    \**************************************************************/

  /*! exports provided: BookingPanelSelectComponent */

  /***/
  function srcAppShellPanelSelectPanelSelectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPanelSelectComponent", function () {
      return BookingPanelSelectComponent;
    });
    /* harmony import */


    var _shared_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../shared/base.component */
    "./src/app/shared/base.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/data/spaces/space.class */
    "./src/app/services/data/spaces/space.class.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/app.service */
    "./src/app/services/app.service.ts");

    var BookingPanelSelectComponent = /*#__PURE__*/function (_shared_base_componen6) {
      _inherits(BookingPanelSelectComponent, _shared_base_componen6);

      var _super25 = _createSuper(BookingPanelSelectComponent);

      function BookingPanelSelectComponent(route, service) {
        var _this77;

        _classCallCheck(this, BookingPanelSelectComponent);

        _this77 = _super25.call(this);
        _this77.route = route;
        _this77.service = service;
        /** Names for the list of systems */

        _this77.system_name = {};
        /** Icons for the list of systems */

        _this77.system_icon = {};
        /** Status for the list of systems */

        _this77.system_status = {};
        return _this77;
      }

      _createClass(BookingPanelSelectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this78 = this;

          this.subscription('route.query', this.route.queryParamMap.subscribe(function (params) {
            if (params.has('system_ids')) {
              _this78.systems = (params.get('system_ids') || '').split(',');
            }
          }));
        }
        /**
         * Show booking panel for the given system ID
         * @param id ID of the system to show
         */

      }, {
        key: "showPanel",
        value: function showPanel(id) {
          this.active_system = id;
          this.reset();
        }
        /**
         * Update the status value for the given system ID
         * @param id ID of the system to update
         * @param bookings List of current bookings for the system
         */

      }, {
        key: "updateStatus",
        value: function updateStatus(id, bookings) {
          var space = new _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_2__["Space"](this.service.Spaces, {
            id: id,
            bookings: bookings
          });
          this.system_status[id] = space.current ? 'available' : 'unavailable';
        }
        /**
         * Close the modal
         */

      }, {
        key: "close",
        value: function close() {
          this.active_system = null;
          this.clearInterval('countdown');
        }
        /**
         * User confirmation of the content of the modal
         */

      }, {
        key: "reset",
        value: function reset() {
          var _this79 = this;

          if (this.active_system) {
            this.countdown = 30;
            this.interval('countdown', function () {
              return _this79.tick();
            }, 1000);
          }
        }
        /**
         * Decrement countdown and close if 0
         */

      }, {
        key: "tick",
        value: function tick() {
          if (this.countdown <= 0) {
            this.close();
          }

          this.countdown--;
        }
      }]);

      return BookingPanelSelectComponent;
    }(_shared_base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"]);
    /***/

  },

  /***/
  "./src/app/shell/panel/booking-actions/booking-actions.component.ngfactory.js":
  /*!************************************************************************************!*\
    !*** ./src/app/shell/panel/booking-actions/booking-actions.component.ngfactory.js ***!
    \************************************************************************************/

  /*! exports provided: RenderType_PanelBookingActionsComponent, View_PanelBookingActionsComponent_0, View_PanelBookingActionsComponent_Host_0, PanelBookingActionsComponentNgFactory */

  /***/
  function srcAppShellPanelBookingActionsBookingActionsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_PanelBookingActionsComponent", function () {
      return RenderType_PanelBookingActionsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PanelBookingActionsComponent_0", function () {
      return View_PanelBookingActionsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PanelBookingActionsComponent_Host_0", function () {
      return View_PanelBookingActionsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelBookingActionsComponentNgFactory", function () {
      return PanelBookingActionsComponentNgFactory;
    });
    /* harmony import */


    var _booking_actions_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./booking-actions.component.scss.shim.ngstyle */
    "./src/app/shell/panel/booking-actions/booking-actions.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */
    "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @acaprojects/ngx-buttons */
    "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/directives/binding/binding.directive */
    "./src/app/shared/directives/binding/binding.directive.ts");
    /* harmony import */


    var _booking_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./booking-actions.component */
    "./src/app/shell/panel/booking-actions/booking-actions.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/app.service */
    "./src/app/services/app.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_PanelBookingActionsComponent = [_booking_actions_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_PanelBookingActionsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_PanelBookingActionsComponent,
      data: {}
    });

    function View_PanelBookingActionsComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "button", [["class", "end large action"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = _co.confirmEnd() !== false;
          ad = pd_0 && ad;
        }

        if ("contextmenu" === en) {
          var pd_1 = $event.preventDefault() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["event_busy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["End"]))], null, null);
    }

    function View_PanelBookingActionsComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "button", [["class", "start large action"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = _co.startMeeting() !== false;
          ad = pd_0 && ad;
        }

        if ("contextmenu" === en) {
          var pd_1 = $event.preventDefault() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["event_available"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Start"]))], null, null);
    }

    function View_PanelBookingActionsComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "button", [["class", "book large action"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = _co.book() !== false;
          ad = pd_0 && ad;
        }

        if ("contextmenu" === en) {
          var pd_1 = $event.preventDefault() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["add"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Book"]))], null, null);
    }

    function View_PanelBookingActionsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelBookingActionsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelBookingActionsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelBookingActionsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.status === "endable";

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.status === "pending";

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = !_co.no_booking;

        _ck(_v, 6, 0, currVal_2);
      }, null);
    }

    function View_PanelBookingActionsComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "booking_disabled"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.no_booking = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "last_meeting_started"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.last_started = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "is_endable"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.is_endable = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "i", [["bind", "timeout"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.pending_timeout = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["bind", "cancel_timeout"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.cancel_timeout = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [["bind", "ask_start"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.ask_start = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "i", [["bind", "ask_end"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.ask_end = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "i", [["bind", "default_title"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.default_title = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "i", [["bind", "min_duration"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.min_duration = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "i", [["bind", "max_duration"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.max_duration = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "i", [["bind", "business_start"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.business_start = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "i", [["bind", "business_end"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.business_end = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space.id;
        var currVal_1 = "Bookings";
        var currVal_2 = "booking_disabled";
        var currVal_3 = _co.no_booking;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);

        var currVal_4 = _co.space.id;
        var currVal_5 = "Bookings";
        var currVal_6 = "last_meeting_started";
        var currVal_7 = _co.last_started;

        _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_8 = _co.space.id;
        var currVal_9 = "Bookings";
        var currVal_10 = "is_endable";
        var currVal_11 = _co.is_endable;

        _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11);

        var currVal_12 = _co.space.id;
        var currVal_13 = "Bookings";
        var currVal_14 = "timeout";
        var currVal_15 = _co.pending_timeout;

        _ck(_v, 8, 0, currVal_12, currVal_13, currVal_14, currVal_15);

        var currVal_16 = _co.space.id;
        var currVal_17 = "Bookings";
        var currVal_18 = "cancel_timeout";
        var currVal_19 = _co.cancel_timeout;

        _ck(_v, 10, 0, currVal_16, currVal_17, currVal_18, currVal_19);

        var currVal_20 = _co.space.id;
        var currVal_21 = "Bookings";
        var currVal_22 = "ask_start";
        var currVal_23 = _co.ask_start;

        _ck(_v, 12, 0, currVal_20, currVal_21, currVal_22, currVal_23);

        var currVal_24 = _co.space.id;
        var currVal_25 = "Bookings";
        var currVal_26 = "ask_end";
        var currVal_27 = _co.ask_end;

        _ck(_v, 14, 0, currVal_24, currVal_25, currVal_26, currVal_27);

        var currVal_28 = _co.space.id;
        var currVal_29 = "Bookings";
        var currVal_30 = "default_title";
        var currVal_31 = _co.default_title;

        _ck(_v, 16, 0, currVal_28, currVal_29, currVal_30, currVal_31);

        var currVal_32 = _co.space.id;
        var currVal_33 = "Bookings";
        var currVal_34 = "min_duration";
        var currVal_35 = _co.min_duration;

        _ck(_v, 18, 0, currVal_32, currVal_33, currVal_34, currVal_35);

        var currVal_36 = _co.space.id;
        var currVal_37 = "Bookings";
        var currVal_38 = "max_duration";
        var currVal_39 = _co.max_duration;

        _ck(_v, 20, 0, currVal_36, currVal_37, currVal_38, currVal_39);

        var currVal_40 = _co.space.id;
        var currVal_41 = "Bookings";
        var currVal_42 = "business_start";
        var currVal_43 = _co.business_start;

        _ck(_v, 22, 0, currVal_40, currVal_41, currVal_42, currVal_43);

        var currVal_44 = _co.space.id;
        var currVal_45 = "Bookings";
        var currVal_46 = "business_end";
        var currVal_47 = _co.business_end;

        _ck(_v, 24, 0, currVal_44, currVal_45, currVal_46, currVal_47);
      }, null);
    }

    function View_PanelBookingActionsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "booking-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelBookingActionsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelBookingActionsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.space;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_PanelBookingActionsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "panel-booking-actions", [], null, null, null, View_PanelBookingActionsComponent_0, RenderType_PanelBookingActionsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _booking_actions_component__WEBPACK_IMPORTED_MODULE_8__["PanelBookingActionsComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"]], null, null)], null, null);
    }

    var PanelBookingActionsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("panel-booking-actions", _booking_actions_component__WEBPACK_IMPORTED_MODULE_8__["PanelBookingActionsComponent"], View_PanelBookingActionsComponent_Host_0, {
      space: "space"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/shell/panel/booking-actions/booking-actions.component.scss.shim.ngstyle.js":
  /*!********************************************************************************************!*\
    !*** ./src/app/shell/panel/booking-actions/booking-actions.component.scss.shim.ngstyle.js ***!
    \********************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppShellPanelBookingActionsBookingActionsComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".booking-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em;\n  max-width: 8.5em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .booking-actions[_ngcontent-%COMP%] {\n    padding: 0.5em 0.25em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .booking-actions[_ngcontent-%COMP%] {\n    padding: 0.5em 0.25em;\n  }\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  height: 1em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\nbutton.large[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\nbutton.large[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsL2Jvb2tpbmctYWN0aW9ucy9ib29raW5nLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL3BhbmVsL2Jvb2tpbmctYWN0aW9ucy9ib29raW5nLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBNkJBOztjQUFBO0FBV0E7O3NCQUFBO0FDdENBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDT0o7QUZxQ1E7RUNwRFI7SUFXUSxxQkFBQTtFQ1FOO0FBQ0Y7QUZtQ1E7RUN2RFI7SUFXUSxxQkFBQTtFQ2FOO0FBQ0Y7QURWQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2FKO0FEWkk7RUFDSSxjQUFBO0FDY1I7QURWQTtFQUNJLGNBQUE7QUNhSjtBRFpJO0VBQ0ksZ0JBQUE7QUNjUiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3BhbmVsL2Jvb2tpbmctYWN0aW9ucy9ib29raW5nLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5ib29raW5nLWFjdGlvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMWVtO1xuICAgIG1heC13aWR0aDogOC41ZW07XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBwYWRkaW5nOiAuNWVtIC4yNWVtO1xuICAgIH1cbn1cblxuLmljb24ge1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICB3aWR0aDogMS4yZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGkgIHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxufVxuXG5idXR0b24ubGFyZ2Uge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIC50ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAuNGVtO1xuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5ib29raW5nLWFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWF4LXdpZHRoOiA4LjVlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5ib29raW5nLWFjdGlvbnMge1xuICAgIHBhZGRpbmc6IDAuNWVtIDAuMjVlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5ib29raW5nLWFjdGlvbnMge1xuICAgIHBhZGRpbmc6IDAuNWVtIDAuMjVlbTtcbiAgfVxufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMS4yZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmljb24gaSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5idXR0b24ubGFyZ2Uge1xuICBmb250LXNpemU6IDNlbTtcbn1cbmJ1dHRvbi5sYXJnZSAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMC40ZW07XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/shell/panel/booking-actions/booking-actions.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shell/panel/booking-actions/booking-actions.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PanelBookingActionsComponent */

  /***/
  function srcAppShellPanelBookingActionsBookingActionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelBookingActionsComponent", function () {
      return PanelBookingActionsComponent;
    });
    /* harmony import */


    var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../services/data/spaces/space.class */
    "./src/app/services/data/spaces/space.class.ts");
    /* harmony import */


    var _shared_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/base.component */
    "./src/app/shared/base.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/utilities/general.utilities */
    "./src/app/shared/utilities/general.utilities.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);

    var PanelBookingActionsComponent = /*#__PURE__*/function (_shared_base_componen7) {
      _inherits(PanelBookingActionsComponent, _shared_base_componen7);

      var _super26 = _createSuper(PanelBookingActionsComponent);

      function PanelBookingActionsComponent(service) {
        var _this80;

        _classCallCheck(this, PanelBookingActionsComponent);

        _this80 = _super26.call(this);
        _this80.service = service;
        /** Whether booking is allowed */

        _this80.no_booking = false;
        /** Time of the last automatic confirmation of start or end */

        _this80.last_confirm = 0;
        return _this80;
      }
      /** Current status of the active system */


      _createClass(PanelBookingActionsComponent, [{
        key: "book",

        /**
         * Open modal to make a new booking
         */
        value: function book() {
          this.service.Bookings["new"]({
            space: this.space,
            title: this.default_title,
            max_duration: this.max_duration,
            min_duration: this.min_duration
          });
        }
        /**
         * Open confirmation modal for starting the meeting
         */

      }, {
        key: "confirmStart",
        value: function confirmStart() {
          var _this81 = this;

          this.service.Overlay.open('confirm', {
            config: 'modal',
            data: {
              title: 'Do you wish to start your meeting?',
              body: "If you don't start your meeting it will be cancelled ".concat(this.cancel_timeout / 60, " minutes after the start time."),
              icon: {
                "class": 'material-icons',
                value: 'play_arrow'
              }
            }
          }, function (_) {
            return _this81.startMeeting();
          });
        }
        /**
         * Execute the logic on the engine driver to start the current or upcoming meeting
         */

      }, {
        key: "startMeeting",
        value: function startMeeting() {
          var _this82 = this;

          if (this.space) {
            var meeting = this.space.current || this.space.next;

            var _module4 = this.service.Systems.get(this.space.id, 'Bookings');

            if (meeting && _module4) {
              var date = dayjs__WEBPACK_IMPORTED_MODULE_4__(meeting.date);

              _module4.execute('start_meeting', [meeting.date]).then(function (_) {
                _this82.service.Analytics.event('Checkin', 'checked-in', "".concat(_this82.space.id, " at ").concat(date.format('DD MMM YYYY, h:mm A Z')));
              }, function (e) {
                _this82.service.notifyError("Error starting meeting. ".concat(e));

                _this82.service.Analytics.event('Checkin', 'checked-in-failed', "".concat(_this82.space.id, " at ").concat(date.format('DD MMM YYYY, h:mm A Z')));
              });
            }
          }
        }
        /**
         * Open confirmation modal for ending the meeting
         */

      }, {
        key: "confirmEnd",
        value: function confirmEnd() {
          var _this83 = this;

          this.service.Overlay.open('confirm', {
            config: 'modal',
            data: {
              title: 'Are you sure want to end your meeting?',
              body: 'Ending your meeting early will free up this room for others to use',
              icon: {
                "class": 'material-icons',
                value: 'stop'
              }
            }
          }, function (_) {
            return _this83.endMeeting();
          });
        }
        /**
         * Execute end meeting logic on engine driver
         * @param reason Reason for ending the meeting early
         */

      }, {
        key: "endMeeting",
        value: function endMeeting() {
          var _this84 = this;

          var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'user_input';

          if (this.space) {
            var meeting = this.space.current || this.space.next;

            var _module5 = this.service.Systems.get(this.space.id, 'Bookings');

            if (meeting && _module5) {
              var date = dayjs__WEBPACK_IMPORTED_MODULE_4__(meeting.date);

              _module5.execute('cancel_meeting', [meeting.date, reason]).then(function (_) {
                _this84.service.Analytics.event('Checkin', 'cancelled', "".concat(_this84.space.id, " at ").concat(date.format('DD MMM YYYY, h:mm A Z'), " | ").concat(reason));
              }, function (e) {
                _this84.service.notifyError("Error starting meeting. ".concat(e));

                _this84.service.Analytics.event('Checkin', 'cancel-failed', "".concat(_this84.space.id, " at ").concat(date.format('DD MMM YYYY, h:mm A Z'), " | ").concat(reason));
              });
            }
          }
        }
      }, {
        key: "status",
        get: function get() {
          var status = 'available';

          if (this.space && (this.space.current || this.space.next)) {
            var booking = this.space.current || this.space.next;
            status = this.space.current ? 'unavailable' : 'available';

            if (this.pending_timeout) {
              var now = dayjs__WEBPACK_IMPORTED_MODULE_4__().startOf('m').second(1);
              var business_start = dayjs__WEBPACK_IMPORTED_MODULE_4__(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__["timeToDate"])(this.business_start || '08:00'));
              var business_end = dayjs__WEBPACK_IMPORTED_MODULE_4__(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__["timeToDate"])(this.business_end || '17:30')); // Check if within business hours before looking at pending logic

              if (now.isBefore(business_start, 'm') || now.isAfter(business_end, 'm')) {
                return status;
              }

              var date = dayjs__WEBPACK_IMPORTED_MODULE_4__(booking.date);

              if (this.last_started >= now.valueOf() || this.last_started >= date.valueOf()) {
                if (this.is_endable && this.space.current) {
                  var end = date.add(booking.duration, 'm').startOf('m');
                  var block_end = end.subtract(Math.max(this.is_endable, 300), 's');

                  if (now.isAfter(block_end, 's') && now.isBefore(end, 'm')) {
                    status = 'endable';

                    if (this.ask_end && this.last_confirm < end.valueOf()) {
                      this.confirmEnd();
                      this.last_confirm = end.valueOf();
                    }
                  } else {
                    status = 'unavailable';
                  }
                } else {
                  status = 'unavailable';
                }
              } else {
                var pending_start = date.startOf('m').subtract(this.pending_timeout, 's');
                var pending_end = date.startOf('m').add(this.cancel_timeout || this.pending_timeout, 's');

                if (now.isAfter(pending_start, 's') && now.isBefore(pending_end, 's')) {
                  status = 'pending';

                  if (this.ask_start && this.last_confirm < date.valueOf()) {
                    this.confirmStart();
                    this.last_confirm = date.valueOf();
                  }
                }
              }
            }
          }

          return status;
        }
      }]);

      return PanelBookingActionsComponent;
    }(_shared_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);
    /***/

  },

  /***/
  "./src/app/shell/panel/custom-actions/custom-actions.component.ngfactory.js":
  /*!**********************************************************************************!*\
    !*** ./src/app/shell/panel/custom-actions/custom-actions.component.ngfactory.js ***!
    \**********************************************************************************/

  /*! exports provided: RenderType_PanelCustomActionsComponent, View_PanelCustomActionsComponent_0, View_PanelCustomActionsComponent_Host_0, PanelCustomActionsComponentNgFactory */

  /***/
  function srcAppShellPanelCustomActionsCustomActionsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_PanelCustomActionsComponent", function () {
      return RenderType_PanelCustomActionsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PanelCustomActionsComponent_0", function () {
      return View_PanelCustomActionsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PanelCustomActionsComponent_Host_0", function () {
      return View_PanelCustomActionsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelCustomActionsComponentNgFactory", function () {
      return PanelCustomActionsComponentNgFactory;
    });
    /* harmony import */


    var _custom_actions_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./custom-actions.component.scss.shim.ngstyle */
    "./src/app/shell/panel/custom-actions/custom-actions.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */
    "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @acaprojects/ngx-buttons */
    "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../../shared/directives/binding/binding.directive */
    "./src/app/shared/directives/binding/binding.directive.ts");
    /* harmony import */


    var _custom_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./custom-actions.component */
    "./src/app/shell/panel/custom-actions/custom-actions.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../services/app.service */
    "./src/app/services/app.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_PanelCustomActionsComponent = [_custom_actions_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_PanelCustomActionsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_PanelCustomActionsComponent,
      data: {}
    });

    function View_PanelCustomActionsComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "button", [["class", "action control"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = _co.openControl() !== false;
          ad = pd_0 && ad;
        }

        if ("contextmenu" === en) {
          var pd_1 = $event.preventDefault() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["dvr"]))], null, null);
    }

    function View_PanelCustomActionsComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "button", [["class", "action service"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = _co.confirmWaiterCall() !== false;
          ad = pd_0 && ad;
        }

        if ("contextmenu" === en) {
          var pd_1 = $event.preventDefault() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["room_service"]))], null, null);
    }

    function View_PanelCustomActionsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelCustomActionsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelCustomActionsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.can_control !== false && _co.control_url;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.catering;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_PanelCustomActionsComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "control_url"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.control_url = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "can_control"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.can_control = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "has_catering"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.catering = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space.id;
        var currVal_1 = "Bookings";
        var currVal_2 = "control_url";
        var currVal_3 = _co.control_url;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);

        var currVal_4 = _co.space.id;
        var currVal_5 = "Bookings";
        var currVal_6 = "can_control";
        var currVal_7 = _co.can_control;

        _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_8 = _co.space.id;
        var currVal_9 = "Bookings";
        var currVal_10 = "has_catering";
        var currVal_11 = _co.catering;

        _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11);
      }, null);
    }

    function View_PanelCustomActionsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "custom-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelCustomActionsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelCustomActionsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.space;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_PanelCustomActionsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "panel-custom-actions", [], null, null, null, View_PanelCustomActionsComponent_0, RenderType_PanelCustomActionsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _custom_actions_component__WEBPACK_IMPORTED_MODULE_8__["PanelCustomActionsComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"]], null, null)], null, null);
    }

    var PanelCustomActionsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("panel-custom-actions", _custom_actions_component__WEBPACK_IMPORTED_MODULE_8__["PanelCustomActionsComponent"], View_PanelCustomActionsComponent_Host_0, {
      space: "space"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/shell/panel/custom-actions/custom-actions.component.scss.shim.ngstyle.js":
  /*!******************************************************************************************!*\
    !*** ./src/app/shell/panel/custom-actions/custom-actions.component.scss.shim.ngstyle.js ***!
    \******************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppShellPanelCustomActionsCustomActionsComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".custom-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  padding: 2em 1em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .custom-actions[_ngcontent-%COMP%] {\n    padding: 2em 0.25em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .custom-actions[_ngcontent-%COMP%] {\n    padding: 2em 0.25em;\n  }\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsL2N1c3RvbS1hY3Rpb25zL2N1c3RvbS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9wYW5lbC9jdXN0b20tYWN0aW9ucy9jdXN0b20tYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUE2QkE7O2NBQUE7QUFXQTs7c0JBQUE7QUN0Q0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNPSjtBRnVDUTtFQ3BEUjtJQVNRLG1CQUFBO0VDUU47QUFDRjtBRnFDUTtFQ3ZEUjtJQVNRLG1CQUFBO0VDYU47QUFDRjtBRFZBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDYUo7QURaSTtFQUNJLGNBQUE7QUNjUiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3BhbmVsL2N1c3RvbS1hY3Rpb25zL2N1c3RvbS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uY3VzdG9tLWFjdGlvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMmVtIDFlbTtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIHBhZGRpbmc6IDJlbSAuMjVlbTtcbiAgICB9XG59XG5cbi5pY29uIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGhlaWdodDogMS4yZW07XG4gICAgd2lkdGg6IDEuMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBpICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jdXN0b20tYWN0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAyZW0gMWVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmN1c3RvbS1hY3Rpb25zIHtcbiAgICBwYWRkaW5nOiAyZW0gMC4yNWVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmN1c3RvbS1hY3Rpb25zIHtcbiAgICBwYWRkaW5nOiAyZW0gMC4yNWVtO1xuICB9XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5pY29uIGkge1xuICBmb250LXNpemU6IDFlbTtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/shell/panel/custom-actions/custom-actions.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/shell/panel/custom-actions/custom-actions.component.ts ***!
    \************************************************************************/

  /*! exports provided: PanelCustomActionsComponent */

  /***/
  function srcAppShellPanelCustomActionsCustomActionsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelCustomActionsComponent", function () {
      return PanelCustomActionsComponent;
    });
    /* harmony import */


    var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../services/data/spaces/space.class */
    "./src/app/services/data/spaces/space.class.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../services/app.service */
    "./src/app/services/app.service.ts");

    var PanelCustomActionsComponent = /*#__PURE__*/function () {
      function PanelCustomActionsComponent(service) {
        _classCallCheck(this, PanelCustomActionsComponent);

        this.service = service;
      }
      /**
       * Open confirmation modal for ending the meeting
       */


      _createClass(PanelCustomActionsComponent, [{
        key: "confirmWaiterCall",
        value: function confirmWaiterCall() {
          var _this85 = this;

          this.service.Overlay.open('confirm', {
            config: 'modal',
            data: {
              title: 'Call a waiter to your room?',
              body: 'Call a waiter to your room to order catering',
              icon: {
                "class": 'material-icons',
                value: 'call'
              }
            }
          }, function (_) {
            return _this85.callWaiter();
          });
        }
        /**
         * Execute call waiter logic on engine driver
         */

      }, {
        key: "callWaiter",
        value: function callWaiter() {
          var _this86 = this;

          if (this.space) {
            var _module6 = this.service.Systems.get(this.space.id, 'Bookings');

            if (_module6) {
              _module6.execute('waiter_call', []).then(function (_) {
                _this86.service.Analytics.event('Catering', 'waiter-call', new Date().toISOString());
              }, function (e) {
                _this86.service.Analytics.event('Catering', 'waiter-call-failed', new Date().toISOString());

                _this86.service.notifyError("Error calling waiter. ".concat(e));
              });
            }
          }
        }
        /**
         * Open modal to show embeded control URL
         */

      }, {
        key: "openControl",
        value: function openControl() {
          this.service.Analytics.event('Control', 'open-view', new Date().toISOString());
          this.service.Overlay.open('embeded-control', {
            config: 'modal',
            data: {
              control_url: this.control_url
            }
          });
        }
      }]);

      return PanelCustomActionsComponent;
    }();
    /***/

  },

  /***/
  "./src/app/shell/panel/panel.component.ngfactory.js":
  /*!**********************************************************!*\
    !*** ./src/app/shell/panel/panel.component.ngfactory.js ***!
    \**********************************************************/

  /*! exports provided: RenderType_BookingPanelComponent, View_BookingPanelComponent_0, View_BookingPanelComponent_Host_0, BookingPanelComponentNgFactory */

  /***/
  function srcAppShellPanelPanelComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_BookingPanelComponent", function () {
      return RenderType_BookingPanelComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BookingPanelComponent_0", function () {
      return View_BookingPanelComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_BookingPanelComponent_Host_0", function () {
      return View_BookingPanelComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPanelComponentNgFactory", function () {
      return BookingPanelComponentNgFactory;
    });
    /* harmony import */


    var _panel_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./panel.component.scss.shim.ngstyle */
    "./src/app/shell/panel/panel.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _space_details_space_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./space-details/space-details.component.ngfactory */
    "./src/app/shell/panel/space-details/space-details.component.ngfactory.js");
    /* harmony import */


    var _space_details_space_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./space-details/space-details.component */
    "./src/app/shell/panel/space-details/space-details.component.ts");
    /* harmony import */


    var _booking_actions_booking_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./booking-actions/booking-actions.component.ngfactory */
    "./src/app/shell/panel/booking-actions/booking-actions.component.ngfactory.js");
    /* harmony import */


    var _booking_actions_booking_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./booking-actions/booking-actions.component */
    "./src/app/shell/panel/booking-actions/booking-actions.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _custom_actions_custom_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./custom-actions/custom-actions.component.ngfactory */
    "./src/app/shell/panel/custom-actions/custom-actions.component.ngfactory.js");
    /* harmony import */


    var _custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./custom-actions/custom-actions.component */
    "./src/app/shell/panel/custom-actions/custom-actions.component.ts");
    /* harmony import */


    var _timeline_timeline_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./timeline/timeline.component.ngfactory */
    "./src/app/shell/panel/timeline/timeline.component.ngfactory.js");
    /* harmony import */


    var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./timeline/timeline.component */
    "./src/app/shell/panel/timeline/timeline.component.ts");
    /* harmony import */


    var _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/directives/binding/binding.directive */
    "./src/app/shared/directives/binding/binding.directive.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./panel.component */
    "./src/app/shell/panel/panel.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_BookingPanelComponent = [_panel_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_BookingPanelComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_BookingPanelComponent,
      data: {}
    });

    function View_BookingPanelComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "time-display"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.display_time;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_BookingPanelComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "panel-space-details", [], null, null, null, _space_details_space_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_PanelSpaceDetailsComponent_0"], _space_details_space_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_PanelSpaceDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _space_details_space_details_component__WEBPACK_IMPORTED_MODULE_3__["PanelSpaceDetailsComponent"], [], {
        space: [0, "space"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_BookingPanelComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "panel-booking-actions", [], null, null, null, _booking_actions_booking_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_PanelBookingActionsComponent_0"], _booking_actions_booking_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_PanelBookingActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _booking_actions_booking_actions_component__WEBPACK_IMPORTED_MODULE_5__["PanelBookingActionsComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]], {
        space: [0, "space"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "panel-custom-actions", [], null, null, null, _custom_actions_custom_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_PanelCustomActionsComponent_0"], _custom_actions_custom_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_PanelCustomActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_8__["PanelCustomActionsComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]], {
        space: [0, "space"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.space;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_BookingPanelComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "timeline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "panel-timeline", [], null, null, null, _timeline_timeline_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_PanelTimelineComponent_0"], _timeline_timeline_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_PanelTimelineComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 770048, null, 0, _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["PanelTimelineComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]], {
        space: [0, "space"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_BookingPanelComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "room_name"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.space_name = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "touch_enabled"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.interactive = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "today"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = _co.updateBookings($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "i", [["bind", "timeout"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.pending_timeout = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.updateStatus() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["bind", "cancel_timeout"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.cancel_timeout = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.updateStatus() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [["bind", "last_meeting_started"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.last_started = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.updateStatus() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "i", [["bind", "hide_all"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.hide_all = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "i", [["bind", "flip_status"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.flip_status = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "i", [["bind", "can_cancel"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.can_cancel = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "i", [["bind", "business_start"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.business_start = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "i", [["bind", "business_end"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.business_end = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "i", [["bind", "status_override"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.status_overrides = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.system_id;
        var currVal_1 = "Bookings";
        var currVal_2 = "room_name";
        var currVal_3 = _co.space_name;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);

        var currVal_4 = _co.system_id;
        var currVal_5 = "Bookings";
        var currVal_6 = "touch_enabled";
        var currVal_7 = _co.interactive;

        _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_8 = _co.system_id;
        var currVal_9 = "Bookings";
        var currVal_10 = "today";

        _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10);

        var currVal_11 = _co.system_id;
        var currVal_12 = "Bookings";
        var currVal_13 = "timeout";
        var currVal_14 = _co.pending_timeout;

        _ck(_v, 8, 0, currVal_11, currVal_12, currVal_13, currVal_14);

        var currVal_15 = _co.system_id;
        var currVal_16 = "Bookings";
        var currVal_17 = "cancel_timeout";
        var currVal_18 = _co.cancel_timeout;

        _ck(_v, 10, 0, currVal_15, currVal_16, currVal_17, currVal_18);

        var currVal_19 = _co.system_id;
        var currVal_20 = "Bookings";
        var currVal_21 = "last_meeting_started";
        var currVal_22 = _co.last_started;

        _ck(_v, 12, 0, currVal_19, currVal_20, currVal_21, currVal_22);

        var currVal_23 = _co.system_id;
        var currVal_24 = "Bookings";
        var currVal_25 = "hide_all";
        var currVal_26 = _co.hide_all;

        _ck(_v, 14, 0, currVal_23, currVal_24, currVal_25, currVal_26);

        var currVal_27 = _co.system_id;
        var currVal_28 = "Bookings";
        var currVal_29 = "flip_status";
        var currVal_30 = _co.flip_status;

        _ck(_v, 16, 0, currVal_27, currVal_28, currVal_29, currVal_30);

        var currVal_31 = _co.system_id;
        var currVal_32 = "Bookings";
        var currVal_33 = "can_cancel";
        var currVal_34 = _co.can_cancel;

        _ck(_v, 18, 0, currVal_31, currVal_32, currVal_33, currVal_34);

        var currVal_35 = _co.system_id;
        var currVal_36 = "Bookings";
        var currVal_37 = "business_start";
        var currVal_38 = _co.business_start;

        _ck(_v, 20, 0, currVal_35, currVal_36, currVal_37, currVal_38);

        var currVal_39 = _co.system_id;
        var currVal_40 = "Bookings";
        var currVal_41 = "business_end";
        var currVal_42 = _co.business_end;

        _ck(_v, 22, 0, currVal_39, currVal_40, currVal_41, currVal_42);

        var currVal_43 = _co.system_id;
        var currVal_44 = "Bookings";
        var currVal_45 = "status_override";
        var currVal_46 = _co.status_overrides;

        _ck(_v, 24, 0, currVal_43, currVal_44, currVal_45, currVal_46);
      }, null);
    }

    function View_BookingPanelComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "div", [["class", "booking-panel"]], [[2, "disabled", null], [2, "reverse", null], [2, "no-time", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 13, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "div", [["class", "details-display"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 7, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", "title"]], [[2, "show", null]], [[null, "tapped"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = _co.showTitle() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_13__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_4 = _co.show_time;

        _ck(_v, 3, 0, currVal_4);

        var currVal_9 = !_co.hide_all && _co.show_details;

        _ck(_v, 13, 0, currVal_9);

        var currVal_10 = !_co.hide_all && _co.show_details;

        _ck(_v, 15, 0, currVal_10);

        var currVal_11 = _co.show_details;

        _ck(_v, 17, 0, currVal_11);

        var currVal_12 = _co.system_id;

        _ck(_v, 19, 0, currVal_12);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.interactive === false;
        var currVal_1 = _co.reverse || _co.flip_status;
        var currVal_2 = !_co.show_time;

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);

        var currVal_3 = "status" + (_co.status && !_co.hide_all ? " " + _co.status : "");

        _ck(_v, 1, 0, currVal_3);

        var currVal_5 = _co.show_title;

        _ck(_v, 7, 0, currVal_5);

        var currVal_6 = _co.space_name;

        _ck(_v, 9, 0, currVal_6);

        var currVal_7 = "status-text" + (_co.status && !_co.hide_all ? " " + _co.status : "");

        _ck(_v, 10, 0, currVal_7);

        var currVal_8 = (!_co.hide_all ? _co.status_display : null) || "Not Bookable";

        _ck(_v, 11, 0, currVal_8);
      });
    }

    function View_BookingPanelComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-booking-panel", [], null, null, null, View_BookingPanelComponent_0, RenderType_BookingPanelComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _panel_component__WEBPACK_IMPORTED_MODULE_14__["BookingPanelComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var BookingPanelComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-booking-panel", _panel_component__WEBPACK_IMPORTED_MODULE_14__["BookingPanelComponent"], View_BookingPanelComponent_Host_0, {
      system_id: "system_id",
      reverse: "reverse",
      show_time: "show_time"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/shell/panel/panel.component.scss.shim.ngstyle.js":
  /*!******************************************************************!*\
    !*** ./src/app/shell/panel/panel.component.scss.shim.ngstyle.js ***!
    \******************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppShellPanelPanelComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".booking-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n}\n@media only screen and (orientation: portrait) {\n  .booking-panel[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.booking-panel.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.booking-panel.disabled[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n.booking-panel.disabled[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n.booking-panel.reverse[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.status[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 10em;\n  background-color: #aaa;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  color: #fff;\n  transition: background-color 200ms;\n}\n@media only screen and (orientation: portrait) {\n  .status[_ngcontent-%COMP%] {\n    height: 8em;\n    width: 100%;\n    align-items: center;\n  }\n}\n@media only screen and (orientation: landscape) and (min-width: 801px) and (max-width: 1048px) {\n  .status[_ngcontent-%COMP%] {\n    width: 8em;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .status[_ngcontent-%COMP%] {\n    height: 4em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .status[_ngcontent-%COMP%] {\n    width: 6em;\n  }\n}\n.status.available[_ngcontent-%COMP%] {\n  background-color: #43a047;\n}\n.status.pending[_ngcontent-%COMP%] {\n  background-color: #ffb300;\n}\n.status.unavailable[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n.time-display[_ngcontent-%COMP%] {\n  margin: 1.5em 0.5em;\n  font-size: 1.25em;\n}\n@media only screen and (orientation: portrait) {\n  .time-display[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 10em;\n  flex: 1;\n  height: 100%;\n  background: linear-gradient(135deg, #051c2c, #0a2247, #0a2247, #1e3cd8);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n@media only screen and (orientation: portrait) {\n  .body[_ngcontent-%COMP%] {\n    min-height: 8em;\n    height: auto;\n    width: 100%;\n  }\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 3em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 400;\n  font-family: \"LarishMcKinsey\", \"Georgia\", serif;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n}\n.title.show[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-size: 2em;\n  text-transform: capitalize;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #ccc;\n  transition: color 200ms;\n  margin-bottom: 0.25em;\n  font-family: \"LarishMcKinsey\", \"Georgia\", serif;\n  transition: color 200ms;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .status-text[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .status-text[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n.status-text.available[_ngcontent-%COMP%] {\n  color: #43a047;\n}\n.status-text.pending[_ngcontent-%COMP%] {\n  color: #ffb300;\n}\n.status-text.unavailable[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.details-display[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 12em;\n  flex: 1;\n  padding: 1em 2em;\n  overflow: hidden;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .details-display[_ngcontent-%COMP%] {\n    padding: 1em 1.5em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .details-display[_ngcontent-%COMP%] {\n    padding: 1em 1.5em;\n  }\n}\n.timeline[_ngcontent-%COMP%] {\n  height: 4em;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.no-time[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  width: 6em;\n}\n@media only screen and (orientation: portrait) {\n  .no-time[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    height: 6em;\n    width: 100%;\n    align-items: center;\n  }\n}\n.no-time[_ngcontent-%COMP%]   .details-display[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  padding: 1em;\n}\n.dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  height: 1.5em;\n  width: 1.5em;\n  border-radius: 50%;\n  background-color: #e53935;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9wYW5lbC9wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUE2QkE7O2NBQUE7QUFXQTs7c0JBQUE7QUN2Q0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUNRSjtBRm9IUTtFQ25JUjtJQVNRLHNCQUFBO0VDVU47QUFDRjtBRFJJO0VBQ0ksb0JBQUE7QUNVUjtBRFRRO0VBQ0ksK0JBQUE7QUNXWjtBRFJRO0VBQ0ksYUFBQTtBQ1VaO0FETkk7RUFDSSwyQkFBQTtBQ1FSO0FESkE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7QUNPSjtBRndGUTtFQ3ZHUjtJQVdRLFdBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUNRTjtBQUNGO0FGK0NRO0VDckVSO0lBaUJRLFVBQUE7RUNTTjtBQUNGO0FGU1E7RUNwQ1I7SUFxQlEsV0FBQTtFQ1VOO0FBQ0Y7QUZBUTtFQ2hDUjtJQTBCUSxVQUFBO0VDVU47QUFDRjtBRFJJO0VBQ0kseUJEcERFO0FFOERWO0FEUEk7RUFDSSx5QkRwREU7QUU2RFY7QUROSTtFQUNJLHlCRHBEQTtBRTREUjtBREpBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ09KO0FGb0RRO0VDN0RSO0lBS1EsZ0JBQUE7RUNRTjtBQUNGO0FETEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLHVFRDFEUztFQzJEVCxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNRSjtBRm1DUTtFQ3BEUjtJQVlRLGVBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQ1NOO0FBQ0Y7QUROQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtDRHRFVztBRStFZjtBRjNEUTtFQzRDUjtJQVNRLGNBQUE7RUNVTjtBQUNGO0FGN0RRO0VDeUNSO0lBU1EsY0FBQTtFQ2VOO0FBQ0Y7QURiSTtFQUNJLG1CQUFBO0FDZVI7QURYQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUVBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtDRDFGVztFQzJGWCx1QkFBQTtBQ2FKO0FGcEZRO0VDNkRSO0lBYVEsZ0JBQUE7RUNjTjtBQUNGO0FGdEZRO0VDMERSO0lBYVEsZ0JBQUE7RUNtQk47QUFDRjtBRGpCSTtFQUNJLGNEN0hFO0FFZ0pWO0FEaEJJO0VBQ0ksY0Q3SEU7QUUrSVY7QURmSTtFQUNJLGNEN0hBO0FFOElSO0FEYkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDZ0JKO0FGaEhRO0VDMEZSO0lBU1Esa0JBQUE7RUNpQk47QUFDRjtBRmxIUTtFQ3VGUjtJQVNRLGtCQUFBO0VDc0JOO0FBQ0Y7QURuQkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0FDc0JKO0FEbEJJO0VBQ0ksVUFBQTtBQ3FCUjtBRnREUTtFQ2dDSjtJQUlRLFdBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUNzQlY7QUFDRjtBRG5CSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ3FCUjtBRGpCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJENUtJO0FFZ01SIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uYm9va2luZy1wYW5lbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhwb3J0cmFpdCkge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgICYuZGlzYWJsZWQge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgKiB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLm92ZXJsYXkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYucmV2ZXJzZSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICB9XG59XG5cbi5zdGF0dXMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTBlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHBvcnRyYWl0KSB7XG4gICAgICAgIGhlaWdodDogOGVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHRhYmxldC1sYW5kc2NhcGUpIHtcbiAgICAgICAgd2lkdGg6IDhlbTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZS1wb3J0cmFpdCkge1xuICAgICAgICBoZWlnaHQ6IDRlbTtcbiAgICB9XG5cblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlLWxhbmRzY2FwZSkge1xuICAgICAgICB3aWR0aDogNmVtO1xuICAgIH1cblxuICAgICYuYXZhaWxhYmxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHN1Y2Nlc3M7XG4gICAgfVxuXG4gICAgJi5wZW5kaW5nIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBlbmRpbmc7XG4gICAgfVxuXG4gICAgJi51bmF2YWlsYWJsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRlcnJvcjtcbiAgICB9XG59XG5cbi50aW1lLWRpc3BsYXkge1xuICAgIG1hcmdpbjogMS41ZW0gLjVlbTtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8ocG9ydHJhaXQpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB9XG59XG5cbi5ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLXdpZHRoOiAxMGVtO1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhwb3J0cmFpdCkge1xuICAgICAgICBtaW4taGVpZ2h0OiA4ZW07XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtZmFtaWx5OiAkaGVhZGluZy1mb250O1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgfVxuXG4gICAgJi5zaG93IHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB9XG59XG5cbi5zdGF0dXMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgLy8gd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGNvbG9yOiAjY2NjO1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xuICAgIG1hcmdpbi1ib3R0b206IC4yNWVtO1xuICAgIGZvbnQtZmFtaWx5OiAkaGVhZGluZy1mb250O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB9XG5cbiAgICAmLmF2YWlsYWJsZSB7XG4gICAgICAgIGNvbG9yOiAkc3VjY2VzcztcbiAgICB9XG5cbiAgICAmLnBlbmRpbmcge1xuICAgICAgICBjb2xvcjogJHBlbmRpbmc7XG4gICAgfVxuXG4gICAgJi51bmF2YWlsYWJsZSB7XG4gICAgICAgIGNvbG9yOiAkZXJyb3I7XG4gICAgfVxufVxuXG4uZGV0YWlscy1kaXNwbGF5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTJlbTtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIHBhZGRpbmc6IDFlbSAxLjVlbTtcbiAgICB9XG59XG5cbi50aW1lbGluZSB7XG4gICAgaGVpZ2h0OiA0ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZmZmLCAuMDUpO1xufVxuXG4ubm8tdGltZSB7XG4gICAgLnN0YXR1cyB7XG4gICAgICAgIHdpZHRoOiA2ZW07XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhwb3J0cmFpdCkge1xuICAgICAgICAgICAgaGVpZ2h0OiA2ZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlscy1kaXNwbGF5IHtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgfVxufVxuXG4uZG90IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxZW07XG4gICAgcmlnaHQ6IDFlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGVycm9yO1xufSIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5ib29raW5nLXBhbmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmJvb2tpbmctcGFuZWwge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5ib29raW5nLXBhbmVsLmRpc2FibGVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uYm9va2luZy1wYW5lbC5kaXNhYmxlZCAqIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbn1cbi5ib29raW5nLXBhbmVsLmRpc2FibGVkIC5vdmVybGF5IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5ib29raW5nLXBhbmVsLnJldmVyc2Uge1xuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG59XG5cbi5zdGF0dXMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMGVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogI2ZmZjtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuc3RhdHVzIHtcbiAgICBoZWlnaHQ6IDhlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogODAxcHgpIGFuZCAobWF4LXdpZHRoOiAxMDQ4cHgpIHtcbiAgLnN0YXR1cyB7XG4gICAgd2lkdGg6IDhlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnN0YXR1cyB7XG4gICAgaGVpZ2h0OiA0ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuc3RhdHVzIHtcbiAgICB3aWR0aDogNmVtO1xuICB9XG59XG4uc3RhdHVzLmF2YWlsYWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0M2EwNDc7XG59XG4uc3RhdHVzLnBlbmRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMzAwO1xufVxuLnN0YXR1cy51bmF2YWlsYWJsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTM5MzU7XG59XG5cbi50aW1lLWRpc3BsYXkge1xuICBtYXJnaW46IDEuNWVtIDAuNWVtO1xuICBmb250LXNpemU6IDEuMjVlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAudGltZS1kaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICB9XG59XG5cbi5ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDEwZW07XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5ib2R5IHtcbiAgICBtaW4taGVpZ2h0OiA4ZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1mYW1pbHk6IFwiTGFyaXNoTWNLaW5zZXlcIiwgXCJHZW9yZ2lhXCIsIHNlcmlmO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cbn1cbi50aXRsZS5zaG93IHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLnN0YXR1cy10ZXh0IHtcbiAgZm9udC1zaXplOiAyZW07XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgY29sb3I6ICNjY2M7XG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xuICBtYXJnaW4tYm90dG9tOiAwLjI1ZW07XG4gIGZvbnQtZmFtaWx5OiBcIkxhcmlzaE1jS2luc2V5XCIsIFwiR2VvcmdpYVwiLCBzZXJpZjtcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuc3RhdHVzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuc3RhdHVzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbn1cbi5zdGF0dXMtdGV4dC5hdmFpbGFibGUge1xuICBjb2xvcjogIzQzYTA0Nztcbn1cbi5zdGF0dXMtdGV4dC5wZW5kaW5nIHtcbiAgY29sb3I6ICNmZmIzMDA7XG59XG4uc3RhdHVzLXRleHQudW5hdmFpbGFibGUge1xuICBjb2xvcjogI2U1MzkzNTtcbn1cblxuLmRldGFpbHMtZGlzcGxheSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEyZW07XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDFlbSAyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuZGV0YWlscy1kaXNwbGF5IHtcbiAgICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZGV0YWlscy1kaXNwbGF5IHtcbiAgICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gIH1cbn1cblxuLnRpbWVsaW5lIHtcbiAgaGVpZ2h0OiA0ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xufVxuXG4ubm8tdGltZSAuc3RhdHVzIHtcbiAgd2lkdGg6IDZlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAubm8tdGltZSAuc3RhdHVzIHtcbiAgICBoZWlnaHQ6IDZlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB9XG59XG4ubm8tdGltZSAuZGV0YWlscy1kaXNwbGF5IHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4uZG90IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFlbTtcbiAgcmlnaHQ6IDFlbTtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgd2lkdGg6IDEuNWVtO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTM5MzU7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/shell/panel/panel.component.ts":
  /*!************************************************!*\
    !*** ./src/app/shell/panel/panel.component.ts ***!
    \************************************************/

  /*! exports provided: BookingPanelComponent */

  /***/
  function srcAppShellPanelPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingPanelComponent", function () {
      return BookingPanelComponent;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _shared_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/base.component */
    "./src/app/shared/base.component.ts");
    /* harmony import */


    var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../services/data/spaces/space.class */
    "./src/app/services/data/spaces/space.class.ts");
    /* harmony import */


    var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/utilities/general.utilities */
    "./src/app/shared/utilities/general.utilities.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);

    var BookingPanelComponent = /*#__PURE__*/function (_shared_base_componen8) {
      _inherits(BookingPanelComponent, _shared_base_componen8);

      var _super27 = _createSuper(BookingPanelComponent);

      function BookingPanelComponent(_service, _route) {
        var _this87;

        _classCallCheck(this, BookingPanelComponent);

        _this87 = _super27.call(this);
        _this87._service = _service;
        _this87._route = _route;
        /** Whether to show the time at the bottom of the status */

        _this87.show_time = true;
        /** Whether user interaction is enabled for the panel */

        _this87.interactive = true;
        return _this87;
      }
      /** Get the display value for the status */


      _createClass(BookingPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this88 = this;

          this.subscription('app_ready', this._service.initialised.subscribe(function (is_ready) {
            if (is_ready) {
              _this88.subscription('route.params', _this88._route.paramMap.subscribe(function (params) {
                if (params.has('system_id')) {
                  _this88.system_id = params.get('system_id');

                  _this88._service.set('system', _this88.system_id);
                }
              }));

              _this88.timeout('websocket', function () {
                _this88.websocket_connected = true; // status().subscribe(status => this.websocket_connected = status);
              });

              _this88.unsub('app_ready');
            }
          }));
        }
        /**
         * Update the bookings for the active space
         * @param bookings Array of raw booking data
         */

      }, {
        key: "updateBookings",
        value: function updateBookings(bookings) {
          this.space = new _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_3__["Space"](this._service.Spaces, {
            id: this.system_id,
            name: this.space_name,
            bookings: bookings
          });
        }
        /**
         * Update the current status of the active space
         */

      }, {
        key: "updateStatus",
        value: function updateStatus() {
          if (this.hide_all) {
            this._status = null;
          } else {
            if (this.space && (this.space.current || this.space.next)) {
              var booking = this.space.current || this.space.next;
              this._status = this.space.current ? 'unavailable' : 'available';

              if (this.pending_timeout) {
                var now = dayjs__WEBPACK_IMPORTED_MODULE_5__();
                var date = dayjs__WEBPACK_IMPORTED_MODULE_5__(booking.date).startOf('m');

                if (this.last_started >= now.valueOf() || this.last_started >= date.valueOf()) {
                  this._status = 'unavailable';
                } else {
                  // Only meetings with durations less than 8 hours can be pending or cancelled
                  var pending_start = date.subtract(this.pending_timeout, 's');
                  var pending_end = date.add(this.cancel_timeout || this.pending_timeout, 's');
                  var end = date.add(booking.duration, 'm');

                  if (now.isAfter(pending_start, 's') && now.isBefore(pending_end, 's')) {
                    this._status = 'pending';
                  } else if (now.isAfter(pending_end, 's') && now.isBefore(end, 'm')) {
                    this._status = 'pending';
                    var business_start = dayjs__WEBPACK_IMPORTED_MODULE_5__(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_4__["timeToDate"])(this.business_start || '08:00'));
                    var business_end = dayjs__WEBPACK_IMPORTED_MODULE_5__(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_4__["timeToDate"])(this.business_end || '17:30')); // Check if within business hours before cancelling the meeting

                    if (now.isBefore(business_start, 'm') || now.isAfter(business_end, 'm')) {
                      return;
                    }

                    this.endMeeting('timeout');
                  }
                }
              }
            } else {
              this._status = 'available';
            }
          }
        }
        /**
         * Show full room name if overflowing
         */

      }, {
        key: "showTitle",
        value: function showTitle() {
          var _this89 = this;

          this.show_title = true;
          this.timeout('hide_title', function () {
            return _this89.show_title = false;
          }, 3000);
        }
        /**
         * Execute end meeting logic on engine driver
         * @param reason Reason for ending the meeting early
         */

      }, {
        key: "endMeeting",
        value: function endMeeting() {
          var _this90 = this;

          var reason = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'user_input';

          if (this.space && this.can_cancel !== false) {
            var meeting = this.space.current || this.space.next;

            var _module7 = this._service.Systems.get(this.space.id, 'Bookings');

            if (meeting.duration >= 8 * 60 && reason === 'timeout') {
              reason = 'hide multi-day';
            }

            if (meeting && _module7 && meeting.date !== this.last_cancel) {
              var date = dayjs__WEBPACK_IMPORTED_MODULE_5__(meeting.date);

              _module7.execute('cancel_meeting', [meeting.date, reason]).then(function (_) {
                _this90._service.Analytics.event('Checkin', 'cancelled', "".concat(_this90.space.id, " at ").concat(date.format('DD MMM YYYY, h:mm A Z'), " | ").concat(reason));

                _this90.last_cancel = meeting.date;
              }, function (e) {
                _this90._service.notifyError("Error cancelling meeting. ".concat(e));

                _this90._service.Analytics.event('Checkin', 'cancel-failed', "".concat(_this90.space.id, " at ").concat(date.format('DD MMM YYYY, h:mm A Z'), " | ").concat(reason));
              });
            }
          }
        }
      }, {
        key: "status_display",
        get: function get() {
          if (!this.websocket_connected && !this._service.setting('show_status_when_disconnected')) {
            return ' ';
          }

          if (this.status_overrides && Object.keys(this.status_overrides).length === 1) {
            this._status = this.space.current ? 'unavailable' : Object.keys(this.status_overrides)[0];
          }

          var status = (!this.hide_all ? this._status : null) || 'not-bookable';
          return (this.status_overrides || [])[status] || this._status;
        }
        /** Current status of the active system */

      }, {
        key: "status",
        get: function get() {
          if (!this.websocket_connected && !this._service.setting('show_status_when_disconnected')) {
            return 'not-bookable';
          } // Perform any status overrides


          this.updateStatus();

          if (this.status_overrides && Object.keys(this.status_overrides).length === 1 && (!this.space.current || this._status !== 'unavailable')) {
            this._status = Object.keys(this.status_overrides)[0];
          }

          return this._status;
        }
        /** Whether booking details should be shown */

      }, {
        key: "show_details",
        get: function get() {
          return this.websocket_connected || !!this._service.setting('show_status_when_disconnected');
        }
        /** Display string for the current time */

      }, {
        key: "display_time",
        get: function get() {
          return dayjs__WEBPACK_IMPORTED_MODULE_5__().format('h:mm A');
        }
      }]);

      return BookingPanelComponent;
    }(_shared_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]);
    /***/

  },

  /***/
  "./src/app/shell/panel/space-details/space-details.component.ngfactory.js":
  /*!********************************************************************************!*\
    !*** ./src/app/shell/panel/space-details/space-details.component.ngfactory.js ***!
    \********************************************************************************/

  /*! exports provided: RenderType_PanelSpaceDetailsComponent, View_PanelSpaceDetailsComponent_0, View_PanelSpaceDetailsComponent_Host_0, PanelSpaceDetailsComponentNgFactory */

  /***/
  function srcAppShellPanelSpaceDetailsSpaceDetailsComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_PanelSpaceDetailsComponent", function () {
      return RenderType_PanelSpaceDetailsComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PanelSpaceDetailsComponent_0", function () {
      return View_PanelSpaceDetailsComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PanelSpaceDetailsComponent_Host_0", function () {
      return View_PanelSpaceDetailsComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelSpaceDetailsComponentNgFactory", function () {
      return PanelSpaceDetailsComponentNgFactory;
    });
    /* harmony import */


    var _space_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./space-details.component.scss.shim.ngstyle */
    "./src/app/shell/panel/space-details/space-details.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../shared/directives/binding/binding.directive */
    "./src/app/shared/directives/binding/binding.directive.ts");
    /* harmony import */


    var _space_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./space-details.component */
    "./src/app/shell/panel/space-details/space-details.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_PanelSpaceDetailsComponent = [_space_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_PanelSpaceDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_PanelSpaceDetailsComponent,
      data: {}
    });

    function View_PanelSpaceDetailsComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Booked until ", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space.current == null ? null : _co.space.current.end_time;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_PanelSpaceDetailsComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space.current == null ? null : _co.space.current.title;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_PanelSpaceDetailsComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "host"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space.current == null ? null : _co.space.current.organiser == null ? null : _co.space.current.organiser.name;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_PanelSpaceDetailsComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "details current"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.hide_availability;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = !_co.hide_title && !_co.hide_details;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = !_co.hide_user && !_co.hide_details;

        _ck(_v, 6, 0, currVal_2);
      }, null);
    }

    function View_PanelSpaceDetailsComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Next meeting at ", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space.next == null ? null : _co.space.next.start_time;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_PanelSpaceDetailsComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space.next == null ? null : _co.space.next.title;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_PanelSpaceDetailsComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "host"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space.next == null ? null : _co.space.next.organiser == null ? null : _co.space.next.organiser.name;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_PanelSpaceDetailsComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "details next"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.hide_availability;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = !_co.hide_title && !_co.hide_details;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = !_co.hide_user && !_co.hide_details;

        _ck(_v, 6, 0, currVal_2);
      }, null);
    }

    function View_PanelSpaceDetailsComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" Free ", " ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space.current ? "at " + _co.space.current.end_time : "";
        var currVal_1 = _co.space.next ? "until " + _co.space.next.start_time : "";

        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }

    function View_PanelSpaceDetailsComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "details other"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.hide_availability;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_PanelSpaceDetailsComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.icon;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_PanelSpaceDetailsComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "information"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.icon;

        _ck(_v, 5, 0, currVal_1);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.title;

        _ck(_v, 2, 0, currVal_0);

        var currVal_2 = _co.description;

        _ck(_v, 7, 0, currVal_2);
      });
    }

    function View_PanelSpaceDetailsComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "hide_details"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.hide_details = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "hide_title"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.hide_title = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "hide_availability"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.hide_availability = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "i", [["bind", "hide_user"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.hide_user = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["bind", "title"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.title = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [["bind", "description"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.description = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "i", [["bind", "icon"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.icon = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space.id;
        var currVal_1 = "Bookings";
        var currVal_2 = "hide_details";
        var currVal_3 = _co.hide_details;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);

        var currVal_4 = _co.space.id;
        var currVal_5 = "Bookings";
        var currVal_6 = "hide_title";
        var currVal_7 = _co.hide_title;

        _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_8 = _co.space.id;
        var currVal_9 = "Bookings";
        var currVal_10 = "hide_availability";
        var currVal_11 = _co.hide_availability;

        _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11);

        var currVal_12 = _co.space.id;
        var currVal_13 = "Bookings";
        var currVal_14 = "hide_user";
        var currVal_15 = _co.hide_user;

        _ck(_v, 8, 0, currVal_12, currVal_13, currVal_14, currVal_15);

        var currVal_16 = _co.space.id;
        var currVal_17 = "Bookings";
        var currVal_18 = "title";
        var currVal_19 = _co.title;

        _ck(_v, 10, 0, currVal_16, currVal_17, currVal_18, currVal_19);

        var currVal_20 = _co.space.id;
        var currVal_21 = "Bookings";
        var currVal_22 = "description";
        var currVal_23 = _co.description;

        _ck(_v, 12, 0, currVal_20, currVal_21, currVal_22, currVal_23);

        var currVal_24 = _co.space.id;
        var currVal_25 = "Bookings";
        var currVal_26 = "icon";
        var currVal_27 = _co.icon;

        _ck(_v, 14, 0, currVal_24, currVal_25, currVal_26, currVal_27);
      }, null);
    }

    function View_PanelSpaceDetailsComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "space-booking-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space && _co.space.current;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.space && _co.space.next;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _co.space && _co.space.current && _co.space.next;

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _co.title || _co.description;

        _ck(_v, 8, 0, currVal_3);

        var currVal_4 = _co.space;

        _ck(_v, 10, 0, currVal_4);
      }, null);
    }

    function View_PanelSpaceDetailsComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "panel-space-details", [], null, null, null, View_PanelSpaceDetailsComponent_0, RenderType_PanelSpaceDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _space_details_component__WEBPACK_IMPORTED_MODULE_4__["PanelSpaceDetailsComponent"], [], null, null)], null, null);
    }

    var PanelSpaceDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("panel-space-details", _space_details_component__WEBPACK_IMPORTED_MODULE_4__["PanelSpaceDetailsComponent"], View_PanelSpaceDetailsComponent_Host_0, {
      space: "space"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/shell/panel/space-details/space-details.component.scss.shim.ngstyle.js":
  /*!****************************************************************************************!*\
    !*** ./src/app/shell/panel/space-details/space-details.component.scss.shim.ngstyle.js ***!
    \****************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppShellPanelSpaceDetailsSpaceDetailsComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".details[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-bottom: 0.5em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .details[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .details[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n.current[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.next[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: #ffb300;\n}\n.other[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: #43a047;\n}\n.host[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: rgba(255, 255, 255, 0.6);\n}\n.time[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n.information[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 0.6em;\n}\n.block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 6em;\n  max-height: 6em;\n  margin-right: 1em;\n}\n.text[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsL3NwYWNlLWRldGFpbHMvc3BhY2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvcGFuZWwvc3BhY2UtZGV0YWlscy9zcGFjZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQTZCQTs7Y0FBQTtBQVdBOztzQkFBQTtBQ3RDQTtFQUNJLGdCQUFBO0VBQ0Esb0JBQUE7QUNPSjtBRjJDUTtFQ3BEUjtJQUtRLGdCQUFBO0VDUU47QUFDRjtBRnlDUTtFQ3ZEUjtJQUtRLGdCQUFBO0VDYU47QUFDRjtBRFRJO0VBQ0ksY0RFQTtBRVVSO0FEUEk7RUFDSSxjRFJFO0FFa0JWO0FETEk7RUFDSSxjRGxCRTtBRTBCVjtBREpBO0VBQ0ksZ0JBQUE7RUFDQSwrQkFBQTtBQ09KO0FESkE7RUFDSSxvQkFBQTtBQ09KO0FESEk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FDTVI7QURGQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0tKO0FESEk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDS1I7QUREQTtFQUNJLGdCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9wYW5lbC9zcGFjZS1kZXRhaWxzL3NwYWNlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5kZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbn1cblxuLmN1cnJlbnQge1xuICAgIC50aW1lIHtcbiAgICAgICAgY29sb3I6ICRlcnJvcjtcbiAgICB9XG59XG5cbi5uZXh0IHtcbiAgICAudGltZSB7XG4gICAgICAgIGNvbG9yOiAkcGVuZGluZztcbiAgICB9XG59XG5cbi5vdGhlciB7XG4gICAgLnRpbWUge1xuICAgICAgICBjb2xvcjogJHN1Y2Nlc3M7XG4gICAgfVxufVxuXG4uaG9zdCB7XG4gICAgZm9udC1zaXplOiAuOWVtO1xuICAgIGNvbG9yOiByZ2JhKCRmb250LWxpZ2h0LCAuNik7XG59XG5cbi50aW1lIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xufVxuXG4uaW5mb3JtYXRpb24ge1xuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC42ZW07XG4gICAgfVxufVxuXG4uYmxvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGltZyB7XG4gICAgICAgIG1heC13aWR0aDogNmVtO1xuICAgICAgICBtYXgtaGVpZ2h0OiA2ZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIH1cbn1cblxuLnRleHQge1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5kZXRhaWxzIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuZGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5kZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG59XG5cbi5jdXJyZW50IC50aW1lIHtcbiAgY29sb3I6ICNlNTM5MzU7XG59XG5cbi5uZXh0IC50aW1lIHtcbiAgY29sb3I6ICNmZmIzMDA7XG59XG5cbi5vdGhlciAudGltZSB7XG4gIGNvbG9yOiAjNDNhMDQ3O1xufVxuXG4uaG9zdCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5cbi50aW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5cbi5pbmZvcm1hdGlvbiAudGl0bGUge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjZlbTtcbn1cblxuLmJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ibG9jayBpbWcge1xuICBtYXgtd2lkdGg6IDZlbTtcbiAgbWF4LWhlaWdodDogNmVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDAuOWVtO1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/shell/panel/space-details/space-details.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shell/panel/space-details/space-details.component.ts ***!
    \**********************************************************************/

  /*! exports provided: PanelSpaceDetailsComponent */

  /***/
  function srcAppShellPanelSpaceDetailsSpaceDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelSpaceDetailsComponent", function () {
      return PanelSpaceDetailsComponent;
    });
    /* harmony import */


    var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../services/data/spaces/space.class */
    "./src/app/services/data/spaces/space.class.ts");

    var PanelSpaceDetailsComponent = function PanelSpaceDetailsComponent() {
      _classCallCheck(this, PanelSpaceDetailsComponent);
    };
    /***/

  },

  /***/
  "./src/app/shell/panel/timeline/timeline.component.ngfactory.js":
  /*!**********************************************************************!*\
    !*** ./src/app/shell/panel/timeline/timeline.component.ngfactory.js ***!
    \**********************************************************************/

  /*! exports provided: RenderType_PanelTimelineComponent, View_PanelTimelineComponent_0, View_PanelTimelineComponent_Host_0, PanelTimelineComponentNgFactory */

  /***/
  function srcAppShellPanelTimelineTimelineComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_PanelTimelineComponent", function () {
      return RenderType_PanelTimelineComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PanelTimelineComponent_0", function () {
      return View_PanelTimelineComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PanelTimelineComponent_Host_0", function () {
      return View_PanelTimelineComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelTimelineComponentNgFactory", function () {
      return PanelTimelineComponentNgFactory;
    });
    /* harmony import */


    var _timeline_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./timeline.component.scss.shim.ngstyle */
    "./src/app/shell/panel/timeline/timeline.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/directives/binding/binding.directive */
    "./src/app/shared/directives/binding/binding.directive.ts");
    /* harmony import */


    var _timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./timeline.component */
    "./src/app/shell/panel/timeline/timeline.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../services/app.service */
    "./src/app/services/app.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_PanelTimelineComponent = [_timeline_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_PanelTimelineComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_PanelTimelineComponent,
      data: {}
    });

    function View_PanelTimelineComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "hour"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.hour;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_PanelTimelineComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "block"]], [[2, "show", null], [2, "in-use", null]], [[null, "tapped"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("tapped" === en) {
          var pd_0 = (!_v.context.$implicit.in_use && !_co.no_bookings && !_co.no_timeline_bookings ? _co.book(_v.context.$implicit) : "") !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_2__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        tapped: "tapped"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelTimelineComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "div", [["class", "bar"]], [[2, "hour", null]], null, null, null, null))], function (_ck, _v) {
        var currVal_2 = _v.context.$implicit.hour;

        _ck(_v, 3, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.show || _v.context.$implicit.hour;
        var currVal_1 = _v.context.$implicit.in_use;

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_3 = _v.context.$implicit.hour;

        _ck(_v, 4, 0, currVal_3);
      });
    }

    function View_PanelTimelineComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "block-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelTimelineComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.time_blocks;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_PanelTimelineComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "time-display"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Time Now"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.display_time;

        _ck(_v, 3, 0, currVal_0);
      });
    }

    function View_PanelTimelineComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "hide_availability"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.hide_status = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.checkBookings() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "hide_all"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.hide_all = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.checkBookings() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "booking_disabled"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.no_bookings = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "i", [["bind", "no_timeline_bookings"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.no_timeline_bookings = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["bind", "default_title"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.default_title = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [["bind", "min_duration"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.min_duration = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "i", [["bind", "max_duration"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.max_duration = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.space.id;
        var currVal_1 = "Bookings";
        var currVal_2 = "hide_availability";
        var currVal_3 = _co.hide_status;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);

        var currVal_4 = _co.space.id;
        var currVal_5 = "Bookings";
        var currVal_6 = "hide_all";
        var currVal_7 = _co.hide_all;

        _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_8 = _co.space.id;
        var currVal_9 = "Bookings";
        var currVal_10 = "booking_disabled";
        var currVal_11 = _co.no_bookings;

        _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11);

        var currVal_12 = _co.space.id;
        var currVal_13 = "Bookings";
        var currVal_14 = "no_timeline_bookings";
        var currVal_15 = _co.no_timeline_bookings;

        _ck(_v, 8, 0, currVal_12, currVal_13, currVal_14, currVal_15);

        var currVal_16 = _co.space.id;
        var currVal_17 = "Bookings";
        var currVal_18 = "default_title";
        var currVal_19 = _co.default_title;

        _ck(_v, 10, 0, currVal_16, currVal_17, currVal_18, currVal_19);

        var currVal_20 = _co.space.id;
        var currVal_21 = "Bookings";
        var currVal_22 = "min_duration";
        var currVal_23 = _co.min_duration;

        _ck(_v, 12, 0, currVal_20, currVal_21, currVal_22, currVal_23);

        var currVal_24 = _co.space.id;
        var currVal_25 = "Bookings";
        var currVal_26 = "max_duration";
        var currVal_27 = _co.max_duration;

        _ck(_v, 14, 0, currVal_24, currVal_25, currVal_26, currVal_27);
      }, null);
    }

    function View_PanelTimelineComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["class", "timeline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelTimelineComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "div", [["class", "expired"]], [[4, "width", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "current-block"]], [[4, "left", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "div", [["class", "bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [["class", "triangle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelTimelineComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelTimelineComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.time_blocks && _co.time_blocks.length > 0;

        _ck(_v, 2, 0, currVal_0);

        var currVal_3 = _co.display_time;

        _ck(_v, 9, 0, currVal_3);

        var currVal_4 = _co.space;

        _ck(_v, 11, 0, currVal_4);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = ((_co.options == null ? null : _co.options.start_offset) || 120) / ((_co.options == null ? null : _co.options.duration) || 720) * 100 + "%";

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = ((_co.options == null ? null : _co.options.start_offset) || 120) / ((_co.options == null ? null : _co.options.duration) || 720) * 100 + "%";

        _ck(_v, 5, 0, currVal_2);
      });
    }

    function View_PanelTimelineComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "panel-timeline", [], null, null, null, View_PanelTimelineComponent_0, RenderType_PanelTimelineComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _timeline_component__WEBPACK_IMPORTED_MODULE_5__["PanelTimelineComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var PanelTimelineComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("panel-timeline", _timeline_component__WEBPACK_IMPORTED_MODULE_5__["PanelTimelineComponent"], View_PanelTimelineComponent_Host_0, {
      space: "space",
      options: "options"
    }, {
      event: "event"
    }, []);
    /***/

  },

  /***/
  "./src/app/shell/panel/timeline/timeline.component.scss.shim.ngstyle.js":
  /*!******************************************************************************!*\
    !*** ./src/app/shell/panel/timeline/timeline.component.scss.shim.ngstyle.js ***!
    \******************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppShellPanelTimelineTimelineComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".timeline[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 4em;\n  z-index: 1;\n}\n.block-list[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n}\n.block-list[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.overlay[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.block[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  height: 100%;\n}\n.block.show[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  display: initial;\n}\n.block.in-use[_ngcontent-%COMP%] {\n  background-color: rgba(229, 57, 53, 0.6);\n}\n.hour[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75em;\n  left: 0;\n  transform: translateX(-50%);\n  z-index: 2;\n}\n.bar[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  width: 1px;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  transform: translateX(-50%);\n  border-right: 1px dashed rgba(255, 255, 255, 0.2);\n}\n.bar.hour[_ngcontent-%COMP%] {\n  top: 60%;\n  width: 1px;\n  border: none;\n  background-color: #fff;\n}\n.expired[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 3;\n}\n.current-block[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 0;\n  z-index: 4;\n}\n.current-block[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  width: 2px;\n  border: none;\n  display: initial;\n  background-color: #fff;\n}\n.triangle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -0.25em;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0.8em 0.8em 0 0.8em;\n  border-color: #fff transparent transparent transparent;\n}\n.time-display[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateX(-50%);\n  bottom: calc(100% + .5em);\n  white-space: nowrap;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9wYW5lbC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUE2QkE7O2NBQUE7QUFXQTs7c0JBQUE7QUN0Q0E7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ09KO0FESkE7O0VBRUksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDT0o7QURKQTtFQUNJLGdCQUFBO0FDT0o7QURKQTtFQUNJLG9CQUFBO0FDT0o7QURKQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7QUNPSjtBREpRO0VBQ0ksZ0JBQUE7QUNNWjtBREZJO0VBQ0ksd0NBQUE7QUNJUjtBREFBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLDJCQUFBO0VBQ0EsVUFBQTtBQ0dKO0FEQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxpREFBQTtBQ0dKO0FEREk7RUFDSSxRQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0dSO0FEQ0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLG9DQUFBO0VBQ0EsVUFBQTtBQ0VKO0FEQ0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQU9BLFVBQUE7QUNKSjtBREZJO0VBQ0ksVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCRHJFUTtBRXlFaEI7QURDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLGlDQUFBO0VBQ0Esc0RBQUE7QUNFSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvcGFuZWwvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi50aW1lbGluZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNGVtO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5ibG9jay1saXN0LFxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmxvY2stbGlzdCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm92ZXJsYXkge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmxvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgICYuc2hvdyB7XG4gICAgICAgIC5iYXIge1xuICAgICAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuaW4tdXNlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZXJyb3IsIC42KTtcbiAgICB9XG59XG5cbi5ob3VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAuNzVlbTtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMXB4O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkIHJnYmEoI2ZmZiwgLjIpO1xuXG4gICAgJi5ob3VyIHtcbiAgICAgICAgdG9wOiA2MCU7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG59XG5cbi5leHBpcmVkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMCwgLjYpO1xuICAgIHotaW5kZXg6IDM7XG59XG5cbi5jdXJyZW50LWJsb2NrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMDtcbiAgICAuYmFyIHtcbiAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICB9XG4gICAgei1pbmRleDogNDtcbn1cblxuLnRyaWFuZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtLjI1ZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogLjhlbSAuOGVtIDAgLjhlbTtcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1wcmltYXJ5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4udGltZS1kaXNwbGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGJvdHRvbTogY2FsYygxMDAlICsgLjVlbSk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4udGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRlbTtcbiAgei1pbmRleDogMTtcbn1cblxuLmJsb2NrLWxpc3QsXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmxvY2stbGlzdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5vdmVybGF5IHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ibG9jayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJsb2NrLnNob3cgLmJhciB7XG4gIGRpc3BsYXk6IGluaXRpYWw7XG59XG4uYmxvY2suaW4tdXNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDU3LCA1MywgMC42KTtcbn1cblxuLmhvdXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC43NWVtO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxcHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG4uYmFyLmhvdXIge1xuICB0b3A6IDYwJTtcbiAgd2lkdGg6IDFweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZXhwaXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgei1pbmRleDogMztcbn1cblxuLmN1cnJlbnQtYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMDtcbiAgei1pbmRleDogNDtcbn1cbi5jdXJyZW50LWJsb2NrIC5iYXIge1xuICB3aWR0aDogMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi50cmlhbmdsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC4yNWVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMC44ZW0gMC44ZW0gMCAwLjhlbTtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4udGltZS1kaXNwbGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvdHRvbTogY2FsYygxMDAlICsgLjVlbSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/shell/panel/timeline/timeline.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/shell/panel/timeline/timeline.component.ts ***!
    \************************************************************/

  /*! exports provided: PanelTimelineComponent */

  /***/
  function srcAppShellPanelTimelineTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PanelTimelineComponent", function () {
      return PanelTimelineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../shared/base.component */
    "./src/app/shared/base.component.ts");
    /* harmony import */


    var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../services/data/spaces/space.class */
    "./src/app/services/data/spaces/space.class.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../services/app.service */
    "./src/app/services/app.service.ts");

    var PanelTimelineComponent = /*#__PURE__*/function (_shared_base_componen9) {
      _inherits(PanelTimelineComponent, _shared_base_componen9);

      var _super28 = _createSuper(PanelTimelineComponent);

      function PanelTimelineComponent(service) {
        var _this91;

        _classCallCheck(this, PanelTimelineComponent);

        _this91 = _super28.call(this);
        _this91.service = service;
        /** Emitter for user events on the timeline */

        _this91.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** List of display time block  */

        _this91.time_blocks = [];
        return _this91;
      }
      /** Display string for the current time */


      _createClass(PanelTimelineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this92 = this;

          this.generateTimelineBlocks();
          this.interval('update_blocks', function () {
            return _this92.generateTimelineBlocks();
          }, 60 * 1000);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          this.generateTimelineBlocks();
        }
        /**
         * Generate time blocks to display
         */

      }, {
        key: "generateTimelineBlocks",
        value: function generateTimelineBlocks() {
          var now = dayjs__WEBPACK_IMPORTED_MODULE_3__().startOf('m');
          now = now.minute(Math.round(now.minute() / 5) * 5);
          var start = now.subtract((this.options ? this.options.start_offset : null) || 120, 'm');
          var end = start.add((this.options ? this.options.duration : null) || 720, 'm');
          var date = dayjs__WEBPACK_IMPORTED_MODULE_3__(start);
          delete this.time_blocks;
          this.time_blocks = [];

          while (date.isBefore(end, 'm')) {
            this.time_blocks.push({
              value: date.valueOf(),
              show: date.minute() % ((this.options ? this.options.block_size : null) || 30) === 0,
              hour: date.minute() === 0 ? date.hour() % 12 === 0 ? 12 : date.hour() % 12 : null,
              in_use: false
            });
            date = date.add(5, 'm');
          }

          this.checkBookings();
        }
        /**
         * Update the statuses of time blocks based off space bookings
         */

      }, {
        key: "checkBookings",
        value: function checkBookings() {
          if (this.space && this.space.todays_bookings) {
            var block_start = dayjs__WEBPACK_IMPORTED_MODULE_3__().subtract((this.options ? this.options.start_offset : null) || 120, 'm');
            var block_end = dayjs__WEBPACK_IMPORTED_MODULE_3__().add((this.options ? this.options.duration : null) || 720, 'm'); // Filter bookings for the shown times

            var bookings = this.space.bookings.filter(function (i) {
              var start = dayjs__WEBPACK_IMPORTED_MODULE_3__(i.date);
              var end = start.add(i.duration, 'm');
              return end.isAfter(block_start, 'm') && start.isBefore(block_end, 'm');
            });
            this.time_blocks.forEach(function (i) {
              return i.in_use = false;
            });

            if (!this.hide_status && !this.hide_all) {
              var _iterator31 = _createForOfIteratorHelper(bookings),
                  _step31;

              try {
                for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                  var booking = _step31.value;
                  var start = dayjs__WEBPACK_IMPORTED_MODULE_3__(booking.date);
                  var end = start.add(booking.duration, 'm');

                  var _iterator32 = _createForOfIteratorHelper(this.time_blocks),
                      _step32;

                  try {
                    for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                      var block = _step32.value;
                      var block_time = dayjs__WEBPACK_IMPORTED_MODULE_3__(block.value);

                      if (block_time.isSame(start, 'm') || block_time.isAfter(start, 'm') && block_time.isBefore(end, 'm')) {
                        block.in_use = true;
                      }
                    }
                  } catch (err) {
                    _iterator32.e(err);
                  } finally {
                    _iterator32.f();
                  }
                }
              } catch (err) {
                _iterator31.e(err);
              } finally {
                _iterator31.f();
              }
            }
          }
        }
        /**
         * Open modal to make a new booking
         */

      }, {
        key: "book",
        value: function book(block) {
          this.service.Bookings["new"]({
            space: this.space,
            date: block.value,
            title: this.default_title,
            max_duration: this.max_duration,
            min_duration: this.min_duration
          });
        }
      }, {
        key: "display_time",
        get: function get() {
          return dayjs__WEBPACK_IMPORTED_MODULE_3__().format('h:mm A');
        }
      }]);

      return PanelTimelineComponent;
    }(_shared_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);
    /***/

  },

  /***/
  "./src/app/shell/shell.component.ngfactory.js":
  /*!****************************************************!*\
    !*** ./src/app/shell/shell.component.ngfactory.js ***!
    \****************************************************/

  /*! exports provided: RenderType_ShellWrapperComponent, View_ShellWrapperComponent_0, View_ShellWrapperComponent_Host_0, ShellWrapperComponentNgFactory */

  /***/
  function srcAppShellShellComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ShellWrapperComponent", function () {
      return RenderType_ShellWrapperComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ShellWrapperComponent_0", function () {
      return View_ShellWrapperComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ShellWrapperComponent_Host_0", function () {
      return View_ShellWrapperComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShellWrapperComponentNgFactory", function () {
      return ShellWrapperComponentNgFactory;
    });
    /* harmony import */


    var _shell_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./shell.component.scss.shim.ngstyle */
    "./src/app/shell/shell.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/directives/binding/binding.directive */
    "./src/app/shared/directives/binding/binding.directive.ts");
    /* harmony import */


    var _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory */
    "./node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory.js");
    /* harmony import */


    var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @acaprojects/ngx-spinners */
    "./node_modules/@acaprojects/ngx-spinners/fesm2015/acaprojects-ngx-spinners.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./shell.component */
    "./src/app/shell/shell.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/app.service */
    "./src/app/services/app.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles_ShellWrapperComponent = [_shell_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ShellWrapperComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ShellWrapperComponent,
      data: {}
    });

    function View_ShellWrapperComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "room_name"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.system_name = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.checkLoading() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "reload"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = _co.reloadAt($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"]
      }, {
        modelChange: "modelChange"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.system_id;
        var currVal_1 = "Bookings";
        var currVal_2 = "room_name";
        var currVal_3 = _co.system_name;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);

        var currVal_4 = _co.system_id;
        var currVal_5 = "Bookings";
        var currVal_6 = "reload";

        _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6);
      }, null);
    }

    function View_ShellWrapperComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "loading-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "info-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["Connecting to system(", ")..."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Attempting to connect to engine server..."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "text message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "a-spinner", [["color", "#000"], ["ring-rotate", ""]], null, null, null, _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ɵp_0"], _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ɵp"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_4__["ɵp"], [], {
        color: [0, "color"]
      }, null)], function (_ck, _v) {
        var currVal_2 = "#000";

        _ck(_v, 10, 0, currVal_2);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.system_id;

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = _co.info_messages[_co.message_index];

        _ck(_v, 7, 0, currVal_1);
      });
    }

    function View_ShellWrapperComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "version"]], [[2, "loading", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" Version: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" Built: ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.system_id && !_co.system_name;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _co.version;

        _ck(_v, 1, 0, currVal_1);

        var currVal_2 = _co.build;

        _ck(_v, 3, 0, currVal_2);
      });
    }

    function View_ShellWrapperComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "shell"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "view"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShellWrapperComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShellWrapperComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShellWrapperComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;

        _ck(_v, 3, 0);

        var currVal_0 = _co.system_id;

        _ck(_v, 5, 0, currVal_0);

        var currVal_1 = _co.system_id && !_co.system_name;

        _ck(_v, 7, 0, currVal_1);

        var currVal_2 = _co.show_version;

        _ck(_v, 9, 0, currVal_2);
      }, null);
    }

    function View_ShellWrapperComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-shell-wrapper", [], null, null, null, View_ShellWrapperComponent_0, RenderType_ShellWrapperComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _shell_component__WEBPACK_IMPORTED_MODULE_7__["ShellWrapperComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ShellWrapperComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-shell-wrapper", _shell_component__WEBPACK_IMPORTED_MODULE_7__["ShellWrapperComponent"], View_ShellWrapperComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/shell/shell.component.scss.shim.ngstyle.js":
  /*!************************************************************!*\
    !*** ./src/app/shell/shell.component.scss.shim.ngstyle.js ***!
    \************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppShellShellComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = [".view[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.loading-block[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1em;\n  background-color: #fff;\n  z-index: 2;\n}\n.loading-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n}\n.loading-block[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n  font-size: 4em;\n}\n.version[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 4px;\n  left: 8px;\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.35);\n  z-index: 9999;\n}\n.version.loading[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3NoZWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9zaGVsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUE2QkE7O2NBQUE7QUFXQTs7c0JBQUE7QUN0Q0E7RUFDSSxVQUFBO0FDT0o7QURKQTtFQUNJLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQ09KO0FETEk7RUFDSSxnQkFBQTtBQ09SO0FESkk7RUFDSSxpQkFBQTtFQUNBLGNBQUE7QUNNUjtBREZBO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0EsYUFBQTtBQ0tKO0FESEk7RUFDSSwwQkFBQTtBQ0tSIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvc2hlbGwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi52aWV3IHtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4ubG9hZGluZy1ibG9jayB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHotaW5kZXg6IDI7XG5cbiAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgICAgbWFyZ2luLXRvcDogLjVlbTtcbiAgICAgICAgZm9udC1zaXplOiA0ZW07XG4gICAgfVxufVxuXG4udmVyc2lvbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogNHB4O1xuICAgIGxlZnQ6IDhweDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgY29sb3I6IHJnYmEoJGZvbnQtbGlnaHQsIC4zNSk7XG4gICAgei1pbmRleDogOTk5OTtcblxuICAgICYubG9hZGluZyB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCRmb250LWRhcmssIC4zNSk7XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLnZpZXcge1xuICB6LWluZGV4OiAxO1xufVxuXG4ubG9hZGluZy1ibG9jayB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgei1pbmRleDogMjtcbn1cbi5sb2FkaW5nLWJsb2NrIC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS44ZW07XG59XG4ubG9hZGluZy1ibG9jayAuaWNvbiB7XG4gIG1hcmdpbi10b3A6IDAuNWVtO1xuICBmb250LXNpemU6IDRlbTtcbn1cblxuLnZlcnNpb24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogNHB4O1xuICBsZWZ0OiA4cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSk7XG4gIHotaW5kZXg6IDk5OTk7XG59XG4udmVyc2lvbi5sb2FkaW5nIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/shell/shell.component.ts":
  /*!******************************************!*\
    !*** ./src/app/shell/shell.component.ts ***!
    \******************************************/

  /*! exports provided: ShellWrapperComponent */

  /***/
  function srcAppShellShellComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShellWrapperComponent", function () {
      return ShellWrapperComponent;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../shared/base.component */
    "./src/app/shared/base.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _shared_globals_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/globals/application */
    "./src/app/shared/globals/application.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);

    var ShellWrapperComponent = /*#__PURE__*/function (_shared_base_componen10) {
      _inherits(ShellWrapperComponent, _shared_base_componen10);

      var _super29 = _createSuper(ShellWrapperComponent);

      function ShellWrapperComponent(_service, _router) {
        var _this93;

        _classCallCheck(this, ShellWrapperComponent);

        _this93 = _super29.call(this);
        _this93._service = _service;
        _this93._router = _router;
        /** List of informational messages to display while connecting to the active system */

        _this93.info_messages = ['If this message persists, check you network connection and then try reloading this page.', 'It seems to be taking a while. Make sure the selected system is valid.', 'Still nothing, huh. Are you authenticated? Do you have have a network connection?', 'Try reloading the page. If this persists contact your administrator.'];
        /** Index of the info message being displayed */

        _this93.message_index = 0;
        return _this93;
      }
      /** Current version of the application */


      _createClass(ShellWrapperComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this94 = this;

          this.subscription('app_ready', this._service.initialised.subscribe(function (is_ready) {
            var _a;

            if (is_ready) {
              // Listen for system changes
              _this94.subscription('system', _this94._service.listen('system', function (value) {
                return _this94.system_id = value;
              })); // Listen for routing events


              _this94.page = ((_a = _this94._router.url) === null || _a === void 0 ? void 0 : _a.split('/')[1]) || '';

              _this94.subscription('router.change', _this94._router.events.subscribe(function (event) {
                if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                  _this94.page = _this94._router.url.split('/')[1] || '';
                }
              }));

              _this94.unsub('app_ready');
            }
          }));
        }
        /**
         * Check if the system data has loaded
         * @param delay Delay before first loading message update
         */

      }, {
        key: "checkLoading",
        value: function checkLoading() {
          var _this95 = this;

          var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;
          console.log('Check Loading:', this.system_name);

          if (!this.system_name) {
            this.message_index = 0;
            this.timeout('update_msg', function () {
              return _this95.updateMessage();
            }, delay);
          }
        }
        /**
         * Update the index of the info message displayed
         */

      }, {
        key: "updateMessage",
        value: function updateMessage() {
          var _this96 = this;

          if (!this.system_id) {
            return;
          }

          this.message_index++;

          if (this.message_index === this.info_messages.length) {
            this.message_index--;
            return;
          }

          this.timeout('update_msg', function () {
            return _this96.updateMessage();
          }, 3000);
        }
        /**
         * Schedule a reload the UI for a future time
         * @param time Time to reload the UI
         */

      }, {
        key: "reloadAt",
        value: function reloadAt(time) {
          var _this97 = this;

          if (time && typeof time === 'number') {
            this.clearTimeout('reload_ui');
            var now = dayjs__WEBPACK_IMPORTED_MODULE_4__().startOf('s');
            var reload_at_time = dayjs__WEBPACK_IMPORTED_MODULE_4__((time || 0) * 1000).startOf('s');
            var diff = reload_at_time.diff(now, 'ms');

            if (diff > 100) {
              this.timeout('reload_ui', function () {
                return location.reload(true);
              }, diff);
            }
          }

          this.timeout('update_msg', function () {
            return _this97.updateMessage();
          }, 3000);
        }
      }, {
        key: "version",
        get: function get() {
          return _shared_globals_application__WEBPACK_IMPORTED_MODULE_3__["version"];
        }
        /** Current version of the application */

      }, {
        key: "build",
        get: function get() {
          var now = dayjs__WEBPACK_IMPORTED_MODULE_4__();

          var built = _shared_globals_application__WEBPACK_IMPORTED_MODULE_3__["build"].format('DD/MM/YY HH:mm');

          return built;
        }
      }, {
        key: "show_version",
        get: function get() {
          return this._service.setting('app.show_version');
        }
      }]);

      return ShellWrapperComponent;
    }(_shared_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]);
    /***/

  },

  /***/
  "./src/app/styles/app.component.scss.ngstyle.js":
  /*!******************************************************!*\
    !*** ./src/app/styles/app.component.scss.ngstyle.js ***!
    \******************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStylesAppComponentScssNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n\n\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(MaterialIcons-Regular.eot); \n  src: local('Material Icons'),\n       local('MaterialIcons-Regular'),\n       url(MaterialIcons-Regular.woff2) format('woff2'),\n       url(MaterialIcons-Regular.woff) format('woff'),\n       url(MaterialIcons-Regular.ttf) format('truetype');\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  \n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  \n  -webkit-font-smoothing: antialiased;\n  \n  text-rendering: optimizeLegibility;\n\n  \n  -moz-osx-font-smoothing: grayscale;\n\n  \n  font-feature-settings: 'liga';\n}\n\n@font-face {\n    font-family: 'LarishMcKinsey';\n    font-style: normal;\n    font-weight: 400;\n    src: url('Larish_McKinsey_Regular.eot'); \n    src: local('LarishMcKinsey'), local('LarishMcKinseyRegular'),\n          url('Larish_McKinsey_Regular.eot?#iefix') format('embedded-opentype'), \n          url('Larish_McKinsey_Regular.woff2') format('woff2'), \n          url('Larish_McKinsey_Regular.woff') format('woff'), \n          url('Larish_McKinsey_Regular.ttf') format('truetype'), \n          url('Larish_McKinsey_Regular.svg#LarishMcKinseyRegular') format('svg'); \n}\n\n@font-face {\n    font-family: 'LarishMcKinsey';\n    font-style: normal;\n    font-weight: 500;\n    src: url('Larish_McKinsey_Semibold.eot'); \n    src: local('LarishMcKinsey'), local('LarishMcKinseySemibold'),\n          url('Larish_McKinsey_Semibold.eot?#iefix') format('embedded-opentype'), \n          url('Larish_McKinsey_Semibold.woff2') format('woff2'), \n          url('Larish_McKinsey_Semibold.woff') format('woff'), \n          url('Larish_McKinsey_Semibold.ttf') format('truetype'), \n          url('Larish_McKinsey_Semibold.svg#LarishMcKinseySemibold') format('svg'); \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-Light.ttf') format('truetype'), \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-LightItalic.ttf') format('truetype'), \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-Regular.ttf') format('truetype'), \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-Italic.ttf') format('truetype'), \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: normal;\n    font-weight: 500;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-Medium.ttf') format('truetype'), \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: italic;\n    font-weight: 500;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-MediumItalic.ttf') format('truetype'), \n}\n@media only screen and (orientation: portrait) and (min-width: 800px) {\n  html,\nbody {\n    font-size: 20px;\n  }\n}\n@media only screen and (orientation: landscape) and (min-width: 1048px) {\n  html,\nbody {\n    font-size: 20px;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  html,\nbody {\n    font-size: 20px;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  html,\nbody {\n    font-size: 20px;\n  }\n}\n* {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-family: \"Theinhardt\", \"Helvetica Neue\", Arial, sans-serif;\n  box-sizing: border-box;\n}\n.material-icons {\n  font-size: 1em;\n}\nspan.highlight {\n  color: #fff;\n}\n\n.fs-small {\n  font-size: 0.8rem;\n}\n.fs-normal {\n  font-size: 1rem;\n}\n.fs-big {\n  font-size: 1.2rem;\n}\n.fs-large {\n  font-size: 1.5rem;\n}\n\n.info-block {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 0.5em;\n}\n.info-block .icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.2em;\n  width: 1.2em;\n  font-size: 2em;\n}\n.info-block .icon a-spinner {\n  font-size: 0.25em;\n}\n.info-block .text {\n  margin: 0.5em 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCJub2RlX21vZHVsZXMvbWF0ZXJpYWwtZGVzaWduLWljb25zL2ljb25mb250L21hdGVyaWFsLWljb25zLmNzcyIsInNyYy9mb250cy9mb250cy5jc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3N0eWxlcy9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0eWxlcy9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBNkJBOztjQUFBO0FBV0E7O3NCQUFBO0FDekNBO0VBQ0UsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUNBQW1DLEVBQUUsY0FBYztFQUNuRDs7Ozt3REFJc0Q7QUFDeEQ7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWUsR0FBRyx3QkFBd0I7RUFDMUMscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsY0FBYzs7RUFFZCxxQ0FBcUM7RUFDckMsbUNBQW1DO0VBQ25DLG1DQUFtQztFQUNuQyxrQ0FBa0M7O0VBRWxDLHlCQUF5QjtFQUN6QixrQ0FBa0M7O0VBRWxDLG9CQUFvQjtFQUNwQiw2QkFBNkI7QUFDL0I7QUNuQ0Esc0NBQXNDO0FBQ3RDO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsdUNBQXlELEVBQUUscUJBQXFCO0lBQ2hGOzs7OztnRkFLOEYsRUFBRSxlQUFlO0FBQ25IO0FBRUEsd0NBQXdDO0FBQ3hDO0lBQ0ksNkJBQTZCO0lBQzdCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsd0NBQTBELEVBQUUscUJBQXFCO0lBQ2pGOzs7OztrRkFLZ0csRUFBRSxlQUFlO0FBQ3JIO0FBRUEsK0JBQStCO0FBQy9CO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEI7MERBQ21FLEVBQUUseUJBQXlCO0FBQ2xHO0FBRUEsc0NBQXNDO0FBQ3RDO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEI7Z0VBQ3lFLEVBQUUseUJBQXlCO0FBQ3hHO0FBRUEsaUNBQWlDO0FBQ2pDO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEI7NERBQ3FFLEVBQUUseUJBQXlCO0FBQ3BHO0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEI7MkRBQ29FLEVBQUUseUJBQXlCO0FBQ25HO0FBRUEsZ0NBQWdDO0FBQ2hDO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEI7MkRBQ29FLEVBQUUseUJBQXlCO0FBQ25HO0FBRUEsdUNBQXVDO0FBQ3ZDO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEI7aUVBQzBFLEVBQUUseUJBQXlCO0FBQ3pHO0FGa0NRO0VHOUdSOztJQUdRLGVIOEJJO0VJdEJWO0FBQ0Y7QUpxR1E7RUdqSFI7O0lBR1EsZUg4Qkk7RUloQlY7QUFDRjtBSmlDUTtFR25EUjs7SUFTUSxlSDBCTTtFSVpaO0FBQ0Y7QUo4QlE7RUd0RFI7O0lBU1EsZUgwQk07RUlOWjtBQUNGO0FEakJBO0VBQ0kseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSw4REhlRztFR2RILHNCQUFBO0FDb0JKO0FEakJBO0VBQ0ksY0FBQTtBQ29CSjtBRGpCQTtFQUNJLFdIUlk7QUk0QmhCO0FEakJBOzswQkFBQTtBQUtJO0VBQ0ksaUJBQUE7QUNrQlI7QURoQkk7RUFDSSxlQUFBO0FDa0JSO0FEaEJJO0VBQ0ksaUJBQUE7QUNrQlI7QURoQkk7RUFDSSxpQkFBQTtBQ2tCUjtBRGRBOzswQkFBQTtBQUlBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNnQko7QURkSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDZ0JSO0FEZFE7RUFDSSxpQkFBQTtBQ2dCWjtBRFpJO0VBQ0ksaUJBQUE7QUNjUiIsImZpbGUiOiJzcmMvYXBwL3N0eWxlcy9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChNYXRlcmlhbEljb25zLVJlZ3VsYXIuZW90KTsgLyogRm9yIElFNi04ICovXG4gIHNyYzogbG9jYWwoJ01hdGVyaWFsIEljb25zJyksXG4gICAgICAgbG9jYWwoJ01hdGVyaWFsSWNvbnMtUmVndWxhcicpLFxuICAgICAgIHVybChNYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZjIpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICB1cmwoTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYpIGZvcm1hdCgnd29mZicpLFxuICAgICAgIHVybChNYXRlcmlhbEljb25zLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDsgIC8qIFByZWZlcnJlZCBpY29uIHNpemUgKi9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBkaXJlY3Rpb246IGx0cjtcblxuICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG5cbiAgLyogU3VwcG9ydCBmb3IgRmlyZWZveC4gKi9cbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcblxuICAvKiBTdXBwb3J0IGZvciBJRS4gKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XG59XG4iLCIvKiBNY0tpbnNleSBMYXJpc2ggLSBSZWd1bGFyIC0gTGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGFyaXNoTWNLaW5zZXknO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogdXJsKCcuL21ja2luc2V5X2xhcmlzaC9MYXJpc2hfTWNLaW5zZXlfUmVndWxhci5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xuICAgIHNyYzogbG9jYWwoJ0xhcmlzaE1jS2luc2V5JyksIGxvY2FsKCdMYXJpc2hNY0tpbnNleVJlZ3VsYXInKSxcbiAgICAgICAgICB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9SZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIC8qIElFNi1JRTggKi9cbiAgICAgICAgICB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cbiAgICAgICAgICB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgLyogTW9kZXJuIEJyb3dzZXJzICovXG4gICAgICAgICAgdXJsKCcuL21ja2luc2V5X2xhcmlzaC9MYXJpc2hfTWNLaW5zZXlfUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXG4gICAgICAgICAgdXJsKCcuL21ja2luc2V5X2xhcmlzaC9MYXJpc2hfTWNLaW5zZXlfUmVndWxhci5zdmcjTGFyaXNoTWNLaW5zZXlSZWd1bGFyJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xufVxuXG4vKiBNY0tpbnNleSBMYXJpc2ggLSBTZW1pLWJvbGQgLSBMYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXJpc2hNY0tpbnNleSc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgc3JjOiB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9TZW1pYm9sZC5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xuICAgIHNyYzogbG9jYWwoJ0xhcmlzaE1jS2luc2V5JyksIGxvY2FsKCdMYXJpc2hNY0tpbnNleVNlbWlib2xkJyksXG4gICAgICAgICAgdXJsKCcuL21ja2luc2V5X2xhcmlzaC9MYXJpc2hfTWNLaW5zZXlfU2VtaWJvbGQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgLyogSUU2LUlFOCAqL1xuICAgICAgICAgIHVybCgnLi9tY2tpbnNleV9sYXJpc2gvTGFyaXNoX01jS2luc2V5X1NlbWlib2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cbiAgICAgICAgICB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9TZW1pYm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIC8qIE1vZGVybiBCcm93c2VycyAqL1xuICAgICAgICAgIHVybCgnLi9tY2tpbnNleV9sYXJpc2gvTGFyaXNoX01jS2luc2V5X1NlbWlib2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cbiAgICAgICAgICB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9TZW1pYm9sZC5zdmcjTGFyaXNoTWNLaW5zZXlTZW1pYm9sZCcpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cbn1cblxuLyogVGhlaW5oYXJkdCAtIExpZ2h0IC0gTGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnVGhlaW5oYXJkdCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnVGhlaW5oYXJkdCcpLFxuICAgICAgICAgIHVybCgnLi90aGVpbmhhcmR0L1RoZWluaGFyZHRUVC1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXG59XG5cbi8qIFRoZWluaGFyZHQgLSBMaWdodCBJdGFsaWMgLSBMYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdUaGVpbmhhcmR0JztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdUaGVpbmhhcmR0JyksXG4gICAgICAgICAgdXJsKCcuL3RoZWluaGFyZHQvVGhlaW5oYXJkdFRULUxpZ2h0SXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cbn1cblxuLyogVGhlaW5oYXJkdCAtIFJlZ3VsYXIgLSBMYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdUaGVpbmhhcmR0JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdUaGVpbmhhcmR0JyksXG4gICAgICAgICAgdXJsKCcuL3RoZWluaGFyZHQvVGhlaW5oYXJkdFRULVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xufVxuXG4vKiBUaGVpbmhhcmR0IC0gSXRhbGljIC0gTGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnVGhlaW5oYXJkdCc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnVGhlaW5oYXJkdCcpLFxuICAgICAgICAgIHVybCgnLi90aGVpbmhhcmR0L1RoZWluaGFyZHRUVC1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xufVxuXG4vKiBUaGVpbmhhcmR0IC0gTWVkaXVtIC0gTGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnVGhlaW5oYXJkdCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgc3JjOiBsb2NhbCgnVGhlaW5oYXJkdCcpLFxuICAgICAgICAgIHVybCgnLi90aGVpbmhhcmR0L1RoZWluaGFyZHRUVC1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xufVxuXG4vKiBUaGVpbmhhcmR0IC0gTWVkaXVtIEl0YWxpYyAtIExhdGluICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1RoZWluaGFyZHQnO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHNyYzogbG9jYWwoJ1RoZWluaGFyZHQnKSxcbiAgICAgICAgICB1cmwoJy4vdGhlaW5oYXJkdC9UaGVpbmhhcmR0VFQtTWVkaXVtSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cbn1cbiIsIkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuQGltcG9ydCBcIn5tYXRlcmlhbC1kZXNpZ24taWNvbnMvaWNvbmZvbnQvbWF0ZXJpYWwtaWNvbnMuY3NzXCI7XG5AaW1wb3J0ICcuLi8uLi9mb250cy9mb250cy5jc3MnO1xuXG5odG1sLFxuYm9keSB7XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhkZXNrdG9wKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJGJhc2Utc2l6ZTtcbiAgICB9XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byh0YWJsZXQpIHtcbiAgICAgICAgZm9udC1zaXplOiAkdGFibGV0LXNpemU7XG4gICAgfVxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogJG1vYmlsZS1zaXplO1xuICAgIH1cbn1cblxuKiB7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgZm9udC1mYW1pbHk6ICRmb250O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gICAgZm9udC1zaXplOiAxZW07XG59XG5cbnNwYW4uaGlnaGxpZ2h0IHtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgIEZvbnQgc2l6ZSBzdHlsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4uZnMge1xuICAgICYtc21hbGwge1xuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICB9XG4gICAgJi1ub3JtYWwge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgICYtYmlnIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuICAgICYtbGFyZ2Uge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgIEZvbnQgc2l6ZSBzdHlsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4uaW5mby1ibG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAuNWVtO1xuXG4gICAgLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxLjJlbTtcbiAgICAgICAgd2lkdGg6IDEuMmVtO1xuICAgICAgICBmb250LXNpemU6IDJlbTtcblxuICAgICAgICBhLXNwaW5uZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuMjVlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZXh0IHtcbiAgICAgICAgbWFyZ2luOiAuNWVtIDAgMDtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5AaW1wb3J0IFwifm1hdGVyaWFsLWRlc2lnbi1pY29ucy9pY29uZm9udC9tYXRlcmlhbC1pY29ucy5jc3NcIjtcbkBpbXBvcnQgJy4uLy4uL2ZvbnRzL2ZvbnRzLmNzcyc7XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiA4MDBweCkge1xuICBodG1sLFxuYm9keSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogMTA0OHB4KSB7XG4gIGh0bWwsXG5ib2R5IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIGh0bWwsXG5ib2R5IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICBodG1sLFxuYm9keSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5cbioge1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgZm9udC1mYW1pbHk6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG4ubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuc3Bhbi5oaWdobGlnaHQge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICAgRm9udCBzaXplIHN0eWxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4uZnMtc21hbGwge1xuICBmb250LXNpemU6IDAuOHJlbTtcbn1cbi5mcy1ub3JtYWwge1xuICBmb250LXNpemU6IDFyZW07XG59XG4uZnMtYmlnIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4uZnMtbGFyZ2Uge1xuICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICAgRm9udCBzaXplIHN0eWxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4uaW5mby1ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IDAuNWVtO1xufVxuLmluZm8tYmxvY2sgLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBmb250LXNpemU6IDJlbTtcbn1cbi5pbmZvLWJsb2NrIC5pY29uIGEtc3Bpbm5lciB7XG4gIGZvbnQtc2l6ZTogMC4yNWVtO1xufVxuLmluZm8tYmxvY2sgLnRleHQge1xuICBtYXJnaW46IDAuNWVtIDAgMDtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/styles/custom-element.styles.scss.ngstyle.js":
  /*!**************************************************************!*\
    !*** ./src/app/styles/custom-element.styles.scss.ngstyle.js ***!
    \**************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStylesCustomElementStylesScssNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n\n\n.dropdown[widget] {\n  border-radius: 4px;\n}\n.dropdown[widget].fill {\n  width: 100%;\n}\n.dropdown-list[widget] {\n  border-radius: 4px;\n}\n.spinner svg {\n  width: 100%;\n}\nbutton[widget] {\n  outline: none;\n}\nbutton[widget].default {\n  background-color: #1f40e6;\n}\nbutton[widget].action {\n  height: 2em;\n  width: 2em;\n  border-radius: 100%;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  border: 2px solid rgba(0, 0, 0, 0.87);\n  box-shadow: 0 0 0 2px #fff;\n  font-size: 1.5em;\n}\nbutton[widget].action:hover {\n  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.6);\n}\nbutton[widget].action .wrapper {\n  height: 100%;\n  padding: 0;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\nbutton[widget][disabled] {\n  background-color: #ccc;\n  pointer-events: none;\n}\n.dropdown[widget].default {\n  width: 9.5em;\n}\n.dynamic-form[widget] .error input {\n  border-color: #e53935;\n}\n.dynamic-form[widget] .dynamic-field .info.status {\n  margin: 0;\n  padding: 0;\n}\n.dynamic-field[widget] .details {\n  min-width: 100%;\n}\n.dynamic-field[widget] label {\n  margin-left: 0;\n}\n.dynamic-field[widget] .control {\n  min-width: 10em;\n}\n.overlay-backdrop {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.modal[widget] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  max-width: 95vw;\n  max-height: 90vh;\n}\n.modal[widget] > .header {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  height: 2.5em;\n  background-color: #f0f0f0;\n}\n.modal[widget] > .header .text {\n  padding: 0.75em;\n  min-width: 10em;\n  flex: 1;\n  font-weight: 500;\n}\n.modal[widget] > .header .close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 1.8em;\n  font-size: 1.25em;\n}\n.modal[widget] > .body {\n  width: 100%;\n  min-height: 4em;\n  flex: 1;\n  overflow: auto;\n  padding: 0.5em;\n}\n.modal[widget] > .footer {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px solid #ccc;\n}\n.modal[widget] > .footer button {\n  min-width: 6em;\n}\n.notification[widget] .content > .text {\n  display: flex;\n  align-items: center;\n}\n.notification[widget] .icon {\n  height: 1.25em;\n  width: 1.25em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n  margin-right: 0.3em;\n}\n.notification[widget] .action {\n  margin: 0 0.5em;\n}\n.notification[widget] .action .icon {\n  background: none;\n  margin: 0;\n}\n.notification[widget] .action .icon:after {\n  font-family: \"Material Icons\";\n  content: \"close\";\n}\n.notification[widget].error .item {\n  background-color: #e53935 !important;\n  color: #fff;\n}\n.notification[widget].error .item i:after {\n  content: \"error\";\n}\n.notification[widget].warn .item {\n  background-color: #ffb300 !important;\n  color: #fff;\n}\n.notification[widget].warn .item i:after {\n  content: \"warning\";\n}\n.notification[widget].info .item {\n  background-color: #fff !important;\n  color: #fff;\n}\n.notification[widget].info .item i:after {\n  content: \"info\";\n}\n.notification[widget].success .item {\n  background-color: #43a047 !important;\n  color: #fff;\n}\n.notification[widget].success .item i:after {\n  content: \"done\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3N0eWxlcy9jdXN0b20tZWxlbWVudC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc3R5bGVzL2N1c3RvbS1lbGVtZW50LnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQTZCQTs7Y0FBQTtBQVdBOztzQkFBQTtBQ3ZDQTtFQUNJLGtCQUFBO0FDUUo7QUROSTtFQUNJLFdBQUE7QUNRUjtBREpBO0VBQ0ksa0JBQUE7QUNPSjtBREhJO0VBQ0ksV0FBQTtBQ01SO0FERkE7RUFDSSxhQUFBO0FDS0o7QURKSTtFQUNJLHlCRENVO0FFS2xCO0FESEk7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHFDQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtBQ0tSO0FESFE7RUFDSSw4Q0FBQTtBQ0taO0FERlE7RUFDSSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNJWjtBREFJO0VBQ0ksc0JBQUE7RUFDQSxvQkFBQTtBQ0VSO0FER0k7RUFDSSxZQUFBO0FDQVI7QURNUTtFQUNJLHFCRGpESjtBRThDUjtBRE9JO0VBQ0ksU0FBQTtFQUNBLFVBQUE7QUNMUjtBRFVJO0VBQ0ksZUFBQTtBQ1BSO0FEVUk7RUFDSSxjQUFBO0FDUlI7QURXSTtFQUNJLGVBQUE7QUNUUjtBRGFBO0VBQ0ksb0NBQUE7QUNWSjtBRGFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrR0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ1ZKO0FEWUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDVlI7QURZUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0FDVlo7QURhUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ1haO0FEZUk7RUFDSSxXQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ2JSO0FEZ0JJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsMEJBQUE7QUNkUjtBRGdCUTtFQUNJLGNBQUE7QUNkWjtBRG9CSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ2pCUjtBRG9CSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNsQlI7QURnQ0k7RUFDSSxlQUFBO0FDOUJSO0FEK0JRO0VBQ0ksZ0JBQUE7RUFDQSxTQUFBO0FDN0JaO0FEOEJZO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtBQzVCaEI7QURXUTtFQUNJLG9DQUFBO0VBQ0EsV0FxQjBCO0FDOUJ0QztBRFdZO0VBQ0ksZ0JBa0I0QjtBQzNCNUM7QURJUTtFQUNJLG9DQUFBO0VBQ0EsV0F5QjRCO0FDM0J4QztBRElZO0VBQ0ksa0JBc0I4QjtBQ3hCOUM7QURIUTtFQUNJLGlDQUFBO0VBQ0EsV0E2QmtDO0FDeEI5QztBREhZO0VBQ0ksZUEwQm9DO0FDckJwRDtBRFZRO0VBQ0ksb0NBQUE7RUFDQSxXQWlDNEI7QUNyQnhDO0FEVlk7RUFDSSxlQThCOEI7QUNsQjlDIiwiZmlsZSI6InNyYy9hcHAvc3R5bGVzL2N1c3RvbS1lbGVtZW50LnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmRyb3Bkb3duW3dpZGdldF0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgICYuZmlsbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmRyb3Bkb3duLWxpc3Rbd2lkZ2V0XSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uc3Bpbm5lciB7XG4gICAgc3ZnIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG5idXR0b25bd2lkZ2V0XSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICAmLmRlZmF1bHQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuICAgIH1cblxuICAgICYuYWN0aW9uIHtcbiAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIDAuODcpO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKCMwMDAsIDAuODcpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggI2ZmZjtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKCNmZmYsIDAuNik7XG4gICAgICAgIH1cblxuICAgICAgICAud3JhcHBlciB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJltkaXNhYmxlZF0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG5cbi5kcm9wZG93blt3aWRnZXRdIHtcbiAgICAmLmRlZmF1bHQge1xuICAgICAgICB3aWR0aDogOS41ZW07XG4gICAgfVxufVxuXG4uZHluYW1pYy1mb3JtW3dpZGdldF0ge1xuICAgIC5lcnJvciB7XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGVycm9yO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmR5bmFtaWMtZmllbGQgLmluZm8uc3RhdHVzIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cbn1cblxuLmR5bmFtaWMtZmllbGRbd2lkZ2V0XSB7XG4gICAgLmRldGFpbHMge1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgbGFiZWwge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG5cbiAgICAuY29udHJvbCB7XG4gICAgICAgIG1pbi13aWR0aDogMTBlbTtcbiAgICB9XG59XG5cbi5vdmVybGF5LWJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIDAuNik7XG59XG5cbi5tb2RhbFt3aWRnZXRdIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAwLjEyKTtcbiAgICBtYXgtd2lkdGg6IDk1dnc7XG4gICAgbWF4LWhlaWdodDogOTB2aDtcblxuICAgICYgPiAuaGVhZGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgcGFkZGluZzogMC43NWVtO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMGVtO1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIH1cblxuICAgICAgICAuY2xvc2Uge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxLjhlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJiA+IC5ib2R5IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDRlbTtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgIH1cblxuICAgICYgPiAuZm9vdGVyIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgbWluLXdpZHRoOiA2ZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5ub3RpZmljYXRpb25bd2lkZ2V0XSB7XG4gICAgLmNvbnRlbnQgPiAudGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVlbTtcbiAgICAgICAgd2lkdGg6IDEuMjVlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC4zZW07XG4gICAgfVxuXG4gICAgQG1peGluIG5vdGlmeS1zdHlsZSgkYmFjaywgJGZvcmUsICRpY29uKSB7XG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogJGZvcmU7XG5cbiAgICAgICAgICAgIGk6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICRpY29uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFjdGlvbiB7XG4gICAgICAgIG1hcmdpbjogMCAuNWVtO1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnY2xvc2UnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5lcnJvciB7XG4gICAgICAgIEBpbmNsdWRlIG5vdGlmeS1zdHlsZSgkZXJyb3IsICNmZmYsICdlcnJvcicpO1xuICAgIH1cblxuICAgICYud2FybiB7XG4gICAgICAgIEBpbmNsdWRlIG5vdGlmeS1zdHlsZSgkcGVuZGluZywgI2ZmZiwgJ3dhcm5pbmcnKTtcbiAgICB9XG5cbiAgICAmLmluZm8ge1xuICAgICAgICBAaW5jbHVkZSBub3RpZnktc3R5bGUoJGNvbG9yLXByaW1hcnksICNmZmYsICdpbmZvJyk7XG4gICAgfVxuXG4gICAgJi5zdWNjZXNzIHtcbiAgICAgICAgQGluY2x1ZGUgbm90aWZ5LXN0eWxlKCRzdWNjZXNzLCAjZmZmLCAnZG9uZScpO1xuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5kcm9wZG93blt3aWRnZXRdIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmRyb3Bkb3duW3dpZGdldF0uZmlsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZHJvcGRvd24tbGlzdFt3aWRnZXRdIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uc3Bpbm5lciBzdmcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uW3dpZGdldF0ge1xuICBvdXRsaW5lOiBub25lO1xufVxuYnV0dG9uW3dpZGdldF0uZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjQwZTY7XG59XG5idXR0b25bd2lkZ2V0XS5hY3Rpb24ge1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZmO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuYnV0dG9uW3dpZGdldF0uYWN0aW9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbmJ1dHRvblt3aWRnZXRdLmFjdGlvbiAud3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuYnV0dG9uW3dpZGdldF1bZGlzYWJsZWRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5kcm9wZG93blt3aWRnZXRdLmRlZmF1bHQge1xuICB3aWR0aDogOS41ZW07XG59XG5cbi5keW5hbWljLWZvcm1bd2lkZ2V0XSAuZXJyb3IgaW5wdXQge1xuICBib3JkZXItY29sb3I6ICNlNTM5MzU7XG59XG4uZHluYW1pYy1mb3JtW3dpZGdldF0gLmR5bmFtaWMtZmllbGQgLmluZm8uc3RhdHVzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZHluYW1pYy1maWVsZFt3aWRnZXRdIC5kZXRhaWxzIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuLmR5bmFtaWMtZmllbGRbd2lkZ2V0XSBsYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmR5bmFtaWMtZmllbGRbd2lkZ2V0XSAuY29udHJvbCB7XG4gIG1pbi13aWR0aDogMTBlbTtcbn1cblxuLm92ZXJsYXktYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5tb2RhbFt3aWRnZXRdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1heC13aWR0aDogOTV2dztcbiAgbWF4LWhlaWdodDogOTB2aDtcbn1cbi5tb2RhbFt3aWRnZXRdID4gLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuLm1vZGFsW3dpZGdldF0gPiAuaGVhZGVyIC50ZXh0IHtcbiAgcGFkZGluZzogMC43NWVtO1xuICBtaW4td2lkdGg6IDEwZW07XG4gIGZsZXg6IDE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubW9kYWxbd2lkZ2V0XSA+IC5oZWFkZXIgLmNsb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEuOGVtO1xuICBmb250LXNpemU6IDEuMjVlbTtcbn1cbi5tb2RhbFt3aWRnZXRdID4gLmJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNGVtO1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMC41ZW07XG59XG4ubW9kYWxbd2lkZ2V0XSA+IC5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xufVxuLm1vZGFsW3dpZGdldF0gPiAuZm9vdGVyIGJ1dHRvbiB7XG4gIG1pbi13aWR0aDogNmVtO1xufVxuXG4ubm90aWZpY2F0aW9uW3dpZGdldF0gLmNvbnRlbnQgPiAudGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubm90aWZpY2F0aW9uW3dpZGdldF0gLmljb24ge1xuICBoZWlnaHQ6IDEuMjVlbTtcbiAgd2lkdGg6IDEuMjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdIC5hY3Rpb24ge1xuICBtYXJnaW46IDAgMC41ZW07XG59XG4ubm90aWZpY2F0aW9uW3dpZGdldF0gLmFjdGlvbiAuaWNvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5ub3RpZmljYXRpb25bd2lkZ2V0XSAuYWN0aW9uIC5pY29uOmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgY29udGVudDogXCJjbG9zZVwiO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdLmVycm9yIC5pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MzkzNSAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ub3RpZmljYXRpb25bd2lkZ2V0XS5lcnJvciAuaXRlbSBpOmFmdGVyIHtcbiAgY29udGVudDogXCJlcnJvclwiO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdLndhcm4gLml0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMzAwICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdLndhcm4gLml0ZW0gaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwid2FybmluZ1wiO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdLmluZm8gLml0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdLmluZm8gLml0ZW0gaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiaW5mb1wiO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdLnN1Y2Nlc3MgLml0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDNhMDQ3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdLnN1Y2Nlc3MgLml0ZW0gaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiZG9uZVwiO1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/styles/native-element.styles.scss.ngstyle.js":
  /*!**************************************************************!*\
    !*** ./src/app/styles/native-element.styles.scss.ngstyle.js ***!
    \**************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppStylesNativeElementStylesScssNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
     * tslint:disable
     */


    var styles = ["\n\n\ninput {\n  font-size: 1em;\n  min-width: 100%;\n  padding: 0.5em;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-appearance: none;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\ninput:focus {\n  border-bottom-color: #1f40e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3N0eWxlcy9uYXRpdmUtZWxlbWVudC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc3R5bGVzL25hdGl2ZS1lbGVtZW50LnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQTZCQTs7Y0FBQTtBQVdBOztzQkFBQTtBQ3RDQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7QUNPSjtBRExJO0VBQ0ksNEJEUVU7QUVEbEIiLCJmaWxlIjoic3JjL2FwcC9zdHlsZXMvbmF0aXZlLWVsZW1lbnQuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbmlucHV0IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogLjVlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6IHJnYmEoJGZvbnQtZGFyaywgLjg3KTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5pbnB1dCB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHVzZXItc2VsZWN0OiB0ZXh0O1xufVxuaW5wdXQ6Zm9jdXMge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMWY0MGU2O1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });

    var environment = {
      production: true
    };
    /***/
  },

  /***/
  "./src/environments/version.ts":
  /*!*************************************!*\
    !*** ./src/environments/version.ts ***!
    \*************************************/

  /*! exports provided: VERSION */

  /***/
  function srcEnvironmentsVersionTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VERSION", function () {
      return VERSION;
    }); // IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!

    /* tslint:disable */


    var VERSION = {
      "dirty": false,
      "raw": "195502a",
      "hash": "195502a",
      "distance": null,
      "tag": null,
      "semver": null,
      "suffix": "195502a",
      "semverString": null,
      "version": "0.0.0",
      "core_version": "1.0.0",
      "time": 1598436547851
    };
    /* tslint:enable */

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/runner/work/mckinsey-bookings-ui/mckinsey-bookings-ui/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map