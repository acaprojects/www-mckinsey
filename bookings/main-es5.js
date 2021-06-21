(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shell/shell.component */ "./src/app/shell/shell.component.ts");
/* harmony import */ var _shell_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shell/bootstrap/bootstrap.component */ "./src/app/shell/bootstrap/bootstrap.component.ts");
/* harmony import */ var _shell_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shell/panel/panel.component */ "./src/app/shell/panel/panel.component.ts");
/* harmony import */ var _shell_panel_array_panel_array_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shell/panel-array/panel-array.component */ "./src/app/shell/panel-array/panel-array.component.ts");
/* harmony import */ var _shell_panel_select_panel_select_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shell/panel-select/panel-select.component */ "./src/app/shell/panel-select/panel-select.component.ts");






var routes = [
    {
        path: '',
        component: _shell_shell_component__WEBPACK_IMPORTED_MODULE_1__["ShellWrapperComponent"],
        children: [
            { path: 'bootstrap', component: _shell_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_2__["BootstrapComponent"] },
            { path: 'panel/:system_id', component: _shell_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["BookingPanelComponent"] },
            { path: 'panel-array', component: _shell_panel_array_panel_array_component__WEBPACK_IMPORTED_MODULE_4__["BookingPanelArrayComponent"] },
            { path: 'panel-select', component: _shell_panel_select_panel_select_component__WEBPACK_IMPORTED_MODULE_5__["BookingPanelSelectComponent"] },
            { path: '**', redirectTo: 'bootstrap' }
        ]
    },
    { path: '**', redirectTo: 'bootstrap' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _styles_app_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.component.scss.ngstyle */ "./src/app/styles/app.component.scss.ngstyle.js");
/* harmony import */ var _styles_custom_element_styles_scss_ngstyle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/custom-element.styles.scss.ngstyle */ "./src/app/styles/custom-element.styles.scss.ngstyle.js");
/* harmony import */ var _styles_native_element_styles_scss_ngstyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/native-element.styles.scss.ngstyle */ "./src/app/styles/native-element.styles.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_AppComponent = [_styles_app_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _styles_custom_element_styles_scss_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"], _styles_native_element_styles_scss_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({ encapsulation: 2, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 2, "div", [["class", "app"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](1, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        window.app_loaded = true;
    }
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _shell_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shell/shell.component.ngfactory */ "./src/app/shell/shell.component.ngfactory.js");
/* harmony import */ var _shell_bootstrap_bootstrap_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shell/bootstrap/bootstrap.component.ngfactory */ "./src/app/shell/bootstrap/bootstrap.component.ngfactory.js");
/* harmony import */ var _shell_panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shell/panel/panel.component.ngfactory */ "./src/app/shell/panel/panel.component.ngfactory.js");
/* harmony import */ var _shell_panel_array_panel_array_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shell/panel-array/panel-array.component.ngfactory */ "./src/app/shell/panel-array/panel-array.component.ngfactory.js");
/* harmony import */ var _shell_panel_select_panel_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shell/panel-select/panel-select.component.ngfactory */ "./src/app/shell/panel-select/panel-select.component.ngfactory.js");
/* harmony import */ var _node_modules_acaprojects_ngx_overlays_acaprojects_ngx_overlays_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/@acaprojects/ngx-overlays/acaprojects-ngx-overlays.ngfactory */ "./node_modules/@acaprojects/ngx-overlays/acaprojects-ngx-overlays.ngfactory.js");
/* harmony import */ var _shared_base_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/base.component.ngfactory */ "./src/app/shared/base.component.ngfactory.js");
/* harmony import */ var _shared_components_user_search_field_user_search_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/user-search-field/user-search-field.component.ngfactory */ "./src/app/shared/components/user-search-field/user-search-field.component.ngfactory.js");
/* harmony import */ var _shared_components_time_field_time_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/time-field/time-field.component.ngfactory */ "./src/app/shared/components/time-field/time-field.component.ngfactory.js");
/* harmony import */ var _shared_components_duration_field_duration_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/duration-field/duration-field.component.ngfactory */ "./src/app/shared/components/duration-field/duration-field.component.ngfactory.js");
/* harmony import */ var _overlays_confirm_modal_confirm_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./overlays/confirm-modal/confirm-modal.component.ngfactory */ "./src/app/overlays/confirm-modal/confirm-modal.component.ngfactory.js");
/* harmony import */ var _overlays_embedded_control_modal_embedded_control_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./overlays/embedded-control-modal/embedded-control-modal.component.ngfactory */ "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ngfactory.js");
/* harmony import */ var _overlays_booking_modal_booking_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./overlays/booking-modal/booking-modal.component.ngfactory */ "./src/app/overlays/booking-modal/booking-modal.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm5/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shell/shell.component */ "./src/app/shell/shell.component.ts");
/* harmony import */ var _shell_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shell/bootstrap/bootstrap.component */ "./src/app/shell/bootstrap/bootstrap.component.ts");
/* harmony import */ var _shell_panel_panel_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shell/panel/panel.component */ "./src/app/shell/panel/panel.component.ts");
/* harmony import */ var _shell_panel_array_panel_array_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shell/panel-array/panel-array.component */ "./src/app/shell/panel-array/panel-array.component.ts");
/* harmony import */ var _shell_panel_select_panel_select_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./shell/panel-select/panel-select.component */ "./src/app/shell/panel-select/panel-select.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm5/acaprojects-ngx-composer.js");
/* harmony import */ var _acaprojects_ngx_google_analytics__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @acaprojects/ngx-google-analytics */ "./node_modules/@acaprojects/ngx-google-analytics/fesm5/acaprojects-ngx-google-analytics.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm5/acaprojects-ngx-overlays.js");
/* harmony import */ var _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @acaprojects/ngx-dropdown */ "./node_modules/@acaprojects/ngx-dropdown/fesm5/acaprojects-ngx-dropdown.js");
/* harmony import */ var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @acaprojects/ngx-spinners */ "./node_modules/@acaprojects/ngx-spinners/fesm5/acaprojects-ngx-spinners.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm5/acaprojects-ngx-custom-events.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm5/acaprojects-ngx-buttons.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _acaprojects_ngx_checkbox__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @acaprojects/ngx-checkbox */ "./node_modules/@acaprojects/ngx-checkbox/fesm5/acaprojects-ngx-checkbox.js");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm5/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "./node_modules/@acaprojects/ngx-pipes/fesm5/acaprojects-ngx-pipes.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _overlays_overlays_module__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./overlays/overlays.module */ "./src/app/overlays/overlays.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



















































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _shell_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ShellWrapperComponentNgFactory"], _shell_bootstrap_bootstrap_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["BootstrapComponentNgFactory"], _shell_panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["BookingPanelComponentNgFactory"], _shell_panel_array_panel_array_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["BookingPanelArrayComponentNgFactory"], _shell_panel_select_panel_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["BookingPanelSelectComponentNgFactory"], _node_modules_acaprojects_ngx_overlays_acaprojects_ngx_overlays_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ɵaNgFactory"], _node_modules_acaprojects_ngx_overlays_acaprojects_ngx_overlays_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ɵbNgFactory"], _node_modules_acaprojects_ngx_overlays_acaprojects_ngx_overlays_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ɵcNgFactory"], _shared_base_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["BaseComponentNgFactory"], _shared_components_user_search_field_user_search_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["CustomUserSearchFieldComponentNgFactory"], _shared_components_time_field_time_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["CustomTimeFieldComponentNgFactory"], _shared_components_duration_field_duration_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["CustomDurationFieldComponentNgFactory"], _overlays_confirm_modal_confirm_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["ConfirmModalComponentNgFactory"], _overlays_embedded_control_modal_embedded_control_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["EmbeddedControlModalComponentNgFactory"], _overlays_booking_modal_booking_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["BookingModalComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_20__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_22__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_23__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_23__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_23__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_23__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_23__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_service_worker_service_worker_a"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_service_worker_service_worker_d"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["SwPush"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["SwPush"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["SwUpdate"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["SwUpdate"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_service_worker_service_worker_b"], "ngsw-worker.js", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["SwRegistrationOptions"], { enabled: true }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2, p2_3) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_i"](p1_0), _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_service_worker_service_worker_c"](p2_0, p2_1, p2_2, p2_3)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_h"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_service_worker_service_worker_b"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_19__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_23__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ROUTER_CONFIGURATION"], { useHash: true }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_18__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_18__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ROUTES"], function () { return [[{ path: "", component: _shell_shell_component__WEBPACK_IMPORTED_MODULE_29__["ShellWrapperComponent"], children: [{ path: "bootstrap", component: _shell_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_30__["BootstrapComponent"] }, { path: "panel/:system_id", component: _shell_panel_panel_component__WEBPACK_IMPORTED_MODULE_31__["BookingPanelComponent"] }, { path: "panel-array", component: _shell_panel_array_panel_array_component__WEBPACK_IMPORTED_MODULE_32__["BookingPanelArrayComponent"] }, { path: "panel-select", component: _shell_panel_select_panel_select_component__WEBPACK_IMPORTED_MODULE_33__["BookingPanelSelectComponent"] }, { path: "**", redirectTo: "bootstrap" }] }, { path: "**", redirectTo: "bootstrap" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_23__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_23__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_34__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_34__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_35__["ComposerModule"], _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_35__["ComposerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_google_analytics__WEBPACK_IMPORTED_MODULE_36__["AGoogleAnalyticsModule"], _acaprojects_ngx_google_analytics__WEBPACK_IMPORTED_MODULE_36__["AGoogleAnalyticsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_27__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_37__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_37__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_38__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_39__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_26__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_40__["AOverlayModule"], _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_40__["AOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_41__["ADropdownsModule"], _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_41__["ADropdownsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_42__["ASpinnerModule"], _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_42__["ASpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_43__["ACustomEventsModule"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_43__["ACustomEventsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_44__["AButtonsModule"], _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_44__["AButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_45__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_45__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_checkbox__WEBPACK_IMPORTED_MODULE_46__["ACheckboxModule"], _acaprojects_ngx_checkbox__WEBPACK_IMPORTED_MODULE_46__["ACheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_47__["ADynamicFormsModule"], _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_47__["ADynamicFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_48__["APipesModule"], _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_48__["APipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_49__["SharedContentModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_49__["SharedContentModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _overlays_overlays_module__WEBPACK_IMPORTED_MODULE_50__["SharedOverlaysModule"], _overlays_overlays_module__WEBPACK_IMPORTED_MODULE_50__["SharedOverlaysModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["ServiceWorkerModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_28__["ServiceWorkerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _shared_mocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shared/mocks */ "./src/app/shared/mocks/index.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");


var AppModule = /** @class */ (function () {
    function AppModule() {
        console.log('Production:', !!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production);
    }
    return AppModule;
}());



/***/ }),

/***/ "./src/app/overlays/booking-modal/booking-modal.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/overlays/booking-modal/booking-modal.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_BookingModalComponent, View_BookingModalComponent_0, View_BookingModalComponent_Host_0, BookingModalComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BookingModalComponent", function() { return RenderType_BookingModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BookingModalComponent_0", function() { return View_BookingModalComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BookingModalComponent_Host_0", function() { return View_BookingModalComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingModalComponentNgFactory", function() { return BookingModalComponentNgFactory; });
/* harmony import */ var _booking_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-modal.component.scss.shim.ngstyle */ "./src/app/overlays/booking-modal/booking-modal.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_acaprojects_ngx_dynamic_forms_acaprojects_ngx_dynamic_forms_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-dynamic-forms/acaprojects-ngx-dynamic-forms.ngfactory */ "./node_modules/@acaprojects/ngx-dynamic-forms/acaprojects-ngx-dynamic-forms.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm5/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory */ "./node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acaprojects/ngx-spinners */ "./node_modules/@acaprojects/ngx-spinners/fesm5/acaprojects-ngx-spinners.js");
/* harmony import */ var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */ "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm5/acaprojects-ngx-buttons.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm5/acaprojects-ngx-custom-events.js");
/* harmony import */ var _booking_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./booking-modal.component */ "./src/app/overlays/booking-modal/booking-modal.component.ts");
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm5/acaprojects-ngx-overlays.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 














var styles_BookingModalComponent = [_booking_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BookingModalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BookingModalComponent, data: { "animation": [{ type: 7, name: "show", definitions: [{ type: 1, expr: ":enter", animation: [{ type: 6, styles: { opacity: 0, transform: "translateX(100%) scale(0)" }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 1, transform: "translateX(0%) scale(1)" }, offset: null }, timings: 200 }], options: null }, { type: 1, expr: ":leave", animation: [{ type: 6, styles: { opacity: 1, transform: "translateX(0%) scale(1)" }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 0, transform: "translateX(-100%) scale(0)" }, offset: null }, timings: 200 }], options: null }], options: {} }] } });

function View_BookingModalComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "form"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a-dynamic-form", [], null, null, null, _node_modules_acaprojects_ngx_dynamic_forms_acaprojects_ngx_dynamic_forms_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ADynamicFormComponent_0"], _node_modules_acaprojects_ngx_dynamic_forms_acaprojects_ngx_dynamic_forms_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ADynamicFormComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 573440, null, 0, _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__["ADynamicFormComponent"], [], { fields: [0, "fields"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.booking.form_fields; _ck(_v, 2, 0, currVal_0); }, null); }
function View_BookingModalComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingModalComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.booking; _ck(_v, 2, 0, currVal_0); }, null); }
function View_BookingModalComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["class", "info-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "a-spinner", [["circle-ring", ""], ["color", "#000"]], null, null, null, _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ɵc_0"], _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ɵc"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_6__["ɵc"], [], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Processing request..."]))], function (_ck, _v) { var currVal_0 = "#000"; _ck(_v, 4, 0, currVal_0); }, null); }
function View_BookingModalComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "button", [["name", "close"], ["widget", ""]], null, [[null, "tapped"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_9__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_9__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "button", [["name", "save"], ["widget", ""]], null, [[null, "tapped"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.save() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_9__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_9__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Save"]))], null, null); }
function View_BookingModalComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "modal booking"], ["widget", ""]], [[2, "is-loading", null], [24, "@show", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["New Booking"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingModalComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingModalComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingModalComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = !_co.loading; _ck(_v, 5, 0, currVal_2); var currVal_3 = _co.loading; _ck(_v, 7, 0, currVal_3); var currVal_4 = !_co.loading; _ck(_v, 9, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.loading; var currVal_1 = undefined; _ck(_v, 0, 0, currVal_0, currVal_1); }); }
function View_BookingModalComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingModalComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.closing; _ck(_v, 1, 0, currVal_0); }, null); }
function View_BookingModalComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "booking-modal", [], null, null, null, View_BookingModalComponent_0, RenderType_BookingModalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _booking_modal_component__WEBPACK_IMPORTED_MODULE_11__["BookingModalComponent"], [_acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_12__["OverlayItem"], _services_app_service__WEBPACK_IMPORTED_MODULE_13__["ApplicationService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BookingModalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("booking-modal", _booking_modal_component__WEBPACK_IMPORTED_MODULE_11__["BookingModalComponent"], View_BookingModalComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/overlays/booking-modal/booking-modal.component.scss.shim.ngstyle.js":
/*!*************************************************************************************!*\
  !*** ./src/app/overlays/booking-modal/booking-modal.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".booking[_ngcontent-%COMP%] {\n  width: 24em;\n  transition: width 200ms, height 200ms;\n}\n.booking.is-loading[_ngcontent-%COMP%] {\n  width: 16em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvb3ZlcmxheXMvYm9va2luZy1tb2RhbC9ib29raW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvbWNraW5zZXktYm9va2luZ3MtdWkvbWNraW5zZXktYm9va2luZ3MtdWkvc3RkaW4iLCJzcmMvYXBwL292ZXJsYXlzL2Jvb2tpbmctbW9kYWwvYm9va2luZy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUE2QkE7O2NBQUE7QUFXQTs7c0JBQUE7QUN0Q0E7RUFDSSxXQUFBO0VBQ0EscUNBQUE7QUNPSjtBRExJO0VBQ0ksV0FBQTtBQ09SIiwiZmlsZSI6InNyYy9hcHAvb3ZlcmxheXMvYm9va2luZy1tb2RhbC9ib29raW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uYm9va2luZyB7XG4gICAgd2lkdGg6IDI0ZW07XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMjAwbXMsIGhlaWdodCAyMDBtcztcblxuICAgICYuaXMtbG9hZGluZyB7XG4gICAgICAgIHdpZHRoOiAxNmVtO1xuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5ib29raW5nIHtcbiAgd2lkdGg6IDI0ZW07XG4gIHRyYW5zaXRpb246IHdpZHRoIDIwMG1zLCBoZWlnaHQgMjAwbXM7XG59XG4uYm9va2luZy5pcy1sb2FkaW5nIHtcbiAgd2lkdGg6IDE2ZW07XG59Il19 */"];



/***/ }),

/***/ "./src/app/overlays/booking-modal/booking-modal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/overlays/booking-modal/booking-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: BookingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingModalComponent", function() { return BookingModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm5/acaprojects-ngx-overlays.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data/bookings/booking.class */ "./src/app/services/data/bookings/booking.class.ts");
/* harmony import */ var _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/globals/overlay-register */ "./src/app/shared/globals/overlay-register.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);








var BookingModalComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BookingModalComponent, _super);
    function BookingModalComponent(item, service) {
        var _this = _super.call(this) || this;
        _this.item = item;
        _this.service = service;
        return _this;
    }
    BookingModalComponent.prototype.ngOnInit = function () {
        this.booking = new _services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_5__["Booking"](this.service.Bookings, {
            date: this.item.data.date,
            form_metadata: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.item.data)
        });
        var space_field = this.booking.form_fields.find(function (field) { return field.key === 'space'; });
        if (this.item.data.space && space_field) {
            space_field.setValue(this.item.data.space);
        }
        var date_field = this.booking.form_fields.find(function (field) { return field.key === 'date'; });
        if (date_field) {
            date_field.setValue(this.item.data.date || dayjs__WEBPACK_IMPORTED_MODULE_7__().valueOf());
        }
        var title_field = this.booking.form_fields.find(function (field) { return field.key === 'title'; });
        if (title_field) {
            title_field.setValue(this.item.data.title || '');
        }
    };
    /**
     * Closes the modal
     */
    BookingModalComponent.prototype.close = function () {
        var _this = this;
        this.closing = true;
        this.timeout('close', function () { return _this.item.close(); });
    };
    /**
     * Post form data
     */
    BookingModalComponent.prototype.save = function () {
        var _this = this;
        var fields = this.booking.form_fields;
        fields.forEach(function (i) { return i.control.markAsDirty(); });
        var valid = fields.reduce(function (fields_valid, field) {
            return fields_valid &&
                (field.control.valid ||
                    (field.children &&
                        field.children.length &&
                        field.children.reduce(function (sub_fields_valid, sub_field) { return sub_fields_valid && sub_field.control.valid; }, true)));
        }, true);
        if (this.booking && valid) {
            this.loading = true;
            this.item.post('finish', {
                booking: this.booking,
                on_error: function () { return (_this.loading = false); },
                close: function () { return _this.close(); }
            });
        }
        else {
            console.log('Invalid form fields. Valid states:', fields.map(function (field) { return field.key + ":" + field.control.valid; }));
        }
    };
    return BookingModalComponent;
}(_shared_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));

_shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_6__["OVERLAY_REGISTER"].push({
    id: 'booking',
    config: { content: BookingModalComponent, config: 'modal' }
});


/***/ }),

/***/ "./src/app/overlays/confirm-modal/confirm-modal.component.ngfactory.js":
/*!*****************************************************************************!*\
  !*** ./src/app/overlays/confirm-modal/confirm-modal.component.ngfactory.js ***!
  \*****************************************************************************/
/*! exports provided: RenderType_ConfirmModalComponent, View_ConfirmModalComponent_0, View_ConfirmModalComponent_Host_0, ConfirmModalComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ConfirmModalComponent", function() { return RenderType_ConfirmModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ConfirmModalComponent_0", function() { return View_ConfirmModalComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ConfirmModalComponent_Host_0", function() { return View_ConfirmModalComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponentNgFactory", function() { return ConfirmModalComponentNgFactory; });
/* harmony import */ var _confirm_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirm-modal.component.scss.shim.ngstyle */ "./src/app/overlays/confirm-modal/confirm-modal.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */ "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm5/acaprojects-ngx-buttons.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm5/acaprojects-ngx-custom-events.js");
/* harmony import */ var _confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm5/acaprojects-ngx-overlays.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_ConfirmModalComponent = [_confirm_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ConfirmModalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ConfirmModalComponent, data: { "animation": [{ type: 7, name: "show", definitions: [{ type: 1, expr: ":enter", animation: [{ type: 6, styles: { opacity: 0, transform: "translateX(100%) scale(0)" }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 1, transform: "translateX(0%) scale(1)" }, offset: null }, timings: 200 }], options: null }, { type: 1, expr: ":leave", animation: [{ type: 6, styles: { opacity: 1, transform: "translateX(0%) scale(1)" }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 0, transform: "translateX(-100%) scale(0)" }, offset: null }, timings: 200 }], options: null }], options: {} }] } });

function View_ConfirmModalComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.icon.class; _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.icon.value; _ck(_v, 1, 0, currVal_1); }); }
function View_ConfirmModalComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.icon.src; _ck(_v, 0, 0, currVal_0); }); }
function View_ConfirmModalComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ConfirmModalComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ConfirmModalComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.icon.class; _ck(_v, 2, 0, currVal_0); var currVal_1 = (!_co.icon.class && _co.icon.src); _ck(_v, 4, 0, currVal_1); }, null); }
function View_ConfirmModalComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, "div", [["class", "confirm modal"], ["widget", ""]], [[24, "@show", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ConfirmModalComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 10, "div", [["class", "footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 4, "button", [["name", "cancel"], ["widget", ""]], null, [[null, "tapped"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_5__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_5__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_6__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Cancel"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 4, "button", [["name", "accept"], ["widget", ""]], null, [[null, "tapped"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.accept() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_5__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_5__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_6__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](20, 0, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.icon; _ck(_v, 6, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = undefined; _ck(_v, 0, 0, currVal_0); var currVal_1 = (_co.title || "Confirm"); _ck(_v, 3, 0, currVal_1); var currVal_3 = (_co.content || "Are you sure?"); _ck(_v, 9, 0, currVal_3); var currVal_4 = (_co.action || "Ok"); _ck(_v, 20, 0, currVal_4); }); }
function View_ConfirmModalComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ConfirmModalComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.closing; _ck(_v, 1, 0, currVal_0); }, null); }
function View_ConfirmModalComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "confirm-modal", [], null, null, null, View_ConfirmModalComponent_0, RenderType_ConfirmModalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalComponent"], [_acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_8__["OverlayItem"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ConfirmModalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("confirm-modal", _confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmModalComponent"], View_ConfirmModalComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/overlays/confirm-modal/confirm-modal.component.scss.shim.ngstyle.js":
/*!*************************************************************************************!*\
  !*** ./src/app/overlays/confirm-modal/confirm-modal.component.scss.shim.ngstyle.js ***!
  \*************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".confirm[_ngcontent-%COMP%] {\n  min-width: 18em;\n}\n.body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em;\n}\n.icon[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n}\n.content[_ngcontent-%COMP%] {\n  width: 16rem;\n  text-align: center;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvb3ZlcmxheXMvY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvbWNraW5zZXktYm9va2luZ3MtdWkvbWNraW5zZXktYm9va2luZ3MtdWkvc3RkaW4iLCJzcmMvYXBwL292ZXJsYXlzL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUE2QkE7O2NBQUE7QUFXQTs7c0JBQUE7QUN0Q0E7RUFDSSxlQUFBO0FDT0o7QURKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ09KO0FESkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ09KO0FESkE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvb3ZlcmxheXMvY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uY29uZmlybSB7XG4gICAgbWluLXdpZHRoOiAxOGVtO1xufVxuXG4uYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMWVtO1xufVxuXG4uaWNvbiB7XG4gICAgaGVpZ2h0OiAxLjJlbTtcbiAgICB3aWR0aDogMS4yZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uY29udGVudCB7XG4gICAgd2lkdGg6IDE2cmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IC44ZW07XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY29uZmlybSB7XG4gIG1pbi13aWR0aDogMThlbTtcbn1cblxuLmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5pY29uIHtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDE2cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59Il19 */"];



/***/ }),

/***/ "./src/app/overlays/confirm-modal/confirm-modal.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/overlays/confirm-modal/confirm-modal.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmModalComponent", function() { return ConfirmModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm5/acaprojects-ngx-overlays.js");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/globals/overlay-register */ "./src/app/shared/globals/overlay-register.ts");





var ConfirmModalComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ConfirmModalComponent, _super);
    function ConfirmModalComponent(item) {
        var _this = _super.call(this) || this;
        _this.item = item;
        return _this;
    }
    ConfirmModalComponent.prototype.ngOnInit = function () {
        var data = this.item.data;
        if (data) {
            this.title = data.title || 'Confirm';
            this.content = data.content || data.body || data.description || 'Confirm';
            this.action = data.action || 'Ok';
            this.icon = data.icon;
        }
    };
    /**
     * Close the modal
     */
    ConfirmModalComponent.prototype.close = function () {
        var _this = this;
        this.closing = true;
        this.timeout('close', function () { return _this.item.close(); });
    };
    /**
     * User confirmation of the content of the modal
     */
    ConfirmModalComponent.prototype.accept = function () {
        this.item.post('finish');
        this.close();
    };
    return ConfirmModalComponent;
}(_shared_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

_shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_4__["OVERLAY_REGISTER"].push({ id: 'confirm', config: { content: ConfirmModalComponent, config: 'modal' } });


/***/ }),

/***/ "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ngfactory.js":
/*!***********************************************************************************************!*\
  !*** ./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ngfactory.js ***!
  \***********************************************************************************************/
/*! exports provided: RenderType_EmbeddedControlModalComponent, View_EmbeddedControlModalComponent_0, View_EmbeddedControlModalComponent_Host_0, EmbeddedControlModalComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_EmbeddedControlModalComponent", function() { return RenderType_EmbeddedControlModalComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmbeddedControlModalComponent_0", function() { return View_EmbeddedControlModalComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_EmbeddedControlModalComponent_Host_0", function() { return View_EmbeddedControlModalComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddedControlModalComponentNgFactory", function() { return EmbeddedControlModalComponentNgFactory; });
/* harmony import */ var _embedded_control_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./embedded-control-modal.component.scss.shim.ngstyle */ "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "./node_modules/@acaprojects/ngx-pipes/fesm5/acaprojects-ngx-pipes.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */ "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm5/acaprojects-ngx-buttons.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm5/acaprojects-ngx-custom-events.js");
/* harmony import */ var _embedded_control_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./embedded-control-modal.component */ "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ts");
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm5/acaprojects-ngx-overlays.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_EmbeddedControlModalComponent = [_embedded_control_modal_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_EmbeddedControlModalComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_EmbeddedControlModalComponent, data: { "animation": [{ type: 7, name: "show", definitions: [{ type: 1, expr: ":enter", animation: [{ type: 6, styles: { opacity: 0 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 1 }, offset: null }, timings: 500 }], options: null }, { type: 1, expr: ":leave", animation: [{ type: 6, styles: { opacity: 1 }, offset: null }, { type: 4, styles: { type: 6, styles: { opacity: 0 }, offset: null }, timings: 1000 }], options: null }], options: {} }] } });

function View_EmbeddedControlModalComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_2__["ɵa"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "div", [["class", "background"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 3, "div", [["class", "modal control"]], [[24, "@show", 0]], [["window", "touchend"], ["window", "mouseup"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("window:touchend" === en)) {
        var pd_0 = (_co.reset() !== false);
        ad = (pd_0 && ad);
    } if (("window:mouseup" === en)) {
        var pd_1 = (_co.reset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "div", [["class", "control-frame"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "iframe", [], [[8, "src", 5]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵppd"](5, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 12, "div", [["class", "overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "button", [["class", "action countdown"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.reset() !== false);
        ad = (pd_0 && ad);
    } if (("contextmenu" === en)) {
        var pd_1 = ($event.preventDefault() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_6__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_6__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_7__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 6, "button", [["class", "action close"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } if (("contextmenu" === en)) {
        var pd_1 = ($event.preventDefault() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_6__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_6__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_7__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, 0, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["close"]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = undefined; _ck(_v, 2, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 4, 0, _ck(_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 0), _co.control_url, "resource")); _ck(_v, 4, 0, currVal_1); var currVal_2 = _co.countdown; _ck(_v, 11, 0, currVal_2); }); }
function View_EmbeddedControlModalComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "embedded-control-modal", [], null, null, null, View_EmbeddedControlModalComponent_0, RenderType_EmbeddedControlModalComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _embedded_control_modal_component__WEBPACK_IMPORTED_MODULE_8__["EmbeddedControlModalComponent"], [_acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_9__["OverlayItem"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var EmbeddedControlModalComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("embedded-control-modal", _embedded_control_modal_component__WEBPACK_IMPORTED_MODULE_8__["EmbeddedControlModalComponent"], View_EmbeddedControlModalComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.scss.shim.ngstyle.js":
/*!*******************************************************************************************************!*\
  !*** ./src/app/overlays/embedded-control-modal/embedded-control-modal.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".background[_ngcontent-%COMP%] {\n  position: absolute;\n  height: calc(101vh);\n  width: calc(101vw);\n  background-color: #fff;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n.control[_ngcontent-%COMP%] {\n  position: absolute;\n  height: calc(100vh - 4.5em);\n  width: calc(100vw - 1em);\n  box-sizing: content-box;\n  border: 2px solid #fff;\n  border-radius: 2em;\n  overflow: hidden;\n  background-color: #fff;\n  -webkit-transform: translate(-50%, calc(-50% + 1.75em));\n          transform: translate(-50%, calc(-50% + 1.75em));\n}\n.control-frame[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border: none;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvb3ZlcmxheXMvZW1iZWRkZWQtY29udHJvbC1tb2RhbC9lbWJlZGRlZC1jb250cm9sLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvbWNraW5zZXktYm9va2luZ3MtdWkvbWNraW5zZXktYm9va2luZ3MtdWkvc3RkaW4iLCJzcmMvYXBwL292ZXJsYXlzL2VtYmVkZGVkLWNvbnRyb2wtbW9kYWwvZW1iZWRkZWQtY29udHJvbC1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUE2QkE7O2NBQUE7QUFXQTs7c0JBQUE7QUN0Q0E7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO1VBQUEsZ0NBQUE7QUNPSjtBREpBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkRDWTtFQ0FaLHVEQUFBO1VBQUEsK0NBQUE7QUNPSjtBREpBOztFQUVJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ09KO0FESkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDT0o7QURKQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ09KO0FETkk7RUFDSSxjQUFBO0FDUVIiLCJmaWxlIjoic3JjL2FwcC9vdmVybGF5cy9lbWJlZGRlZC1jb250cm9sLW1vZGFsL2VtYmVkZGVkLWNvbnRyb2wtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5iYWNrZ3JvdW5kIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMXZoKTtcbiAgICB3aWR0aDogY2FsYygxMDF2dyk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjs7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5jb250cm9sIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNC41ZW0pO1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMWVtKTtcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiAgICBib3JkZXItcmFkaXVzOiAyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCBjYWxjKC01MCUgKyAxLjc1ZW0pKTtcbn1cblxuLmNvbnRyb2wtZnJhbWUsXG5pZnJhbWUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXI6IG5vbmU7XG59XG5cbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgaGVpZ2h0OiAxLjJlbTtcbiAgICB3aWR0aDogMS4yZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGkgIHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmJhY2tncm91bmQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogY2FsYygxMDF2aCk7XG4gIHdpZHRoOiBjYWxjKDEwMXZ3KTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5jb250cm9sIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0LjVlbSk7XG4gIHdpZHRoOiBjYWxjKDEwMHZ3IC0gMWVtKTtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgY2FsYygtNTAlICsgMS43NWVtKSk7XG59XG5cbi5jb250cm9sLWZyYW1lLFxuaWZyYW1lIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBoZWlnaHQ6IDEuMmVtO1xuICB3aWR0aDogMS4yZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmljb24gaSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ts ***!
  \*************************************************************************************/
/*! exports provided: EmbeddedControlModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmbeddedControlModalComponent", function() { return EmbeddedControlModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm5/acaprojects-ngx-overlays.js");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/globals/overlay-register */ "./src/app/shared/globals/overlay-register.ts");





var EmbeddedControlModalComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](EmbeddedControlModalComponent, _super);
    function EmbeddedControlModalComponent(item) {
        var _this = _super.call(this) || this;
        _this.item = item;
        _this.countdown = 30;
        return _this;
    }
    EmbeddedControlModalComponent.prototype.ngOnInit = function () {
        var _this = this;
        var data = this.item.data;
        if (data) {
            this.control_url = data.control_url;
        }
        if (!this.control_url) {
            this.close();
        }
        this.countdown = 30;
        this.interval('countdown', function () { return _this.tick(); }, 1000);
    };
    /**
     * Close the modal
     */
    EmbeddedControlModalComponent.prototype.close = function () {
        this.item.close();
        this.countdown = 30;
    };
    /**
     * User confirmation of the content of the modal
     */
    EmbeddedControlModalComponent.prototype.reset = function () {
        var _this = this;
        this.countdown = 30;
        this.interval('countdown', function () { return _this.tick(); }, 1000);
    };
    /**
     * Decrement countdown and close if 0
     */
    EmbeddedControlModalComponent.prototype.tick = function () {
        if (this.countdown <= 0) {
            this.close();
        }
        this.countdown--;
    };
    return EmbeddedControlModalComponent;
}(_shared_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

_shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_4__["OVERLAY_REGISTER"].push({ id: 'embeded-control', config: { content: EmbeddedControlModalComponent, config: 'modal' } });


/***/ }),

/***/ "./src/app/overlays/overlays.module.ts":
/*!*********************************************!*\
  !*** ./src/app/overlays/overlays.module.ts ***!
  \*********************************************/
/*! exports provided: SharedOverlaysModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedOverlaysModule", function() { return SharedOverlaysModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _embedded_control_modal_embedded_control_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./embedded-control-modal/embedded-control-modal.component */ "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ts");
/* harmony import */ var _booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-modal/booking-modal.component */ "./src/app/overlays/booking-modal/booking-modal.component.ts");




var OVERLAYS = [
    _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmModalComponent"],
    _embedded_control_modal_embedded_control_modal_component__WEBPACK_IMPORTED_MODULE_2__["EmbeddedControlModalComponent"],
    _booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_3__["BookingModalComponent"]
];
var SharedOverlaysModule = /** @class */ (function () {
    function SharedOverlaysModule() {
    }
    return SharedOverlaysModule;
}());



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: ApplicationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicationService", function() { return ApplicationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm5/acaprojects-ngx-composer.js");
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm5/acaprojects-ngx-overlays.js");
/* harmony import */ var _acaprojects_ngx_google_analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acaprojects/ngx-google-analytics */ "./node_modules/@acaprojects/ngx-google-analytics/fesm5/acaprojects-ngx-google-analytics.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_base_class__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/base.class */ "./src/app/shared/base.class.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../shared/globals/overlay-register */ "./src/app/shared/globals/overlay-register.ts");
/* harmony import */ var _hotkeys_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./hotkeys.service */ "./src/app/services/hotkeys.service.ts");
/* harmony import */ var _data_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./data/organisation/organisation.service */ "./src/app/services/data/organisation/organisation.service.ts");
/* harmony import */ var _data_users_users_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./data/users/users.service */ "./src/app/services/data/users/users.service.ts");
/* harmony import */ var _data_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./data/bookings/bookings.service */ "./src/app/services/data/bookings/bookings.service.ts");
/* harmony import */ var _data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./data/spaces/spaces.service */ "./src/app/services/data/spaces/spaces.service.ts");
/* harmony import */ var _data_systems_manager_systems_manager_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./data/systems-manager/systems-manager.service */ "./src/app/services/data/systems-manager/systems-manager.service.ts");
/* harmony import */ var _data_polling_polling_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./data/polling/polling.service */ "./src/app/services/data/polling/polling.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");



































var ApplicationService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ApplicationService, _super);
    function ApplicationService(_app_ref, _zone, _title, _router, _cache, _settings, _overlay, _composer, _analytics, _hotkeys, _systems, _organisation, _users, _bookings, _spaces, _polling) {
        var _this = _super.call(this) || this;
        _this._app_ref = _app_ref;
        _this._zone = _zone;
        _this._title = _title;
        _this._router = _router;
        _this._cache = _cache;
        _this._settings = _settings;
        _this._overlay = _overlay;
        _this._composer = _composer;
        _this._analytics = _analytics;
        _this._hotkeys = _hotkeys;
        _this._systems = _systems;
        _this._organisation = _organisation;
        _this._users = _users;
        _this._bookings = _bookings;
        _this._spaces = _spaces;
        _this._polling = _polling;
        /** List of previous routes for return navigation */
        _this._route_trail = [];
        /** Map of state variables for Service */
        _this._subjects = {};
        /** Map of observables for state variables */
        _this._observers = {};
        _this._organisation.parent = _this._users.parent = _this._bookings.parent
            = _this._spaces.parent = _this._systems.parent = _this._polling.parent = _this;
        _this.set('system', null);
        _this.log('APP', "Waiting for Application to stablised...", undefined, undefined, true);
        _this._app_ref.isStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["first"])(function (_) { return _; })).subscribe(function () {
            _this.log('APP', "Application has stablised.", undefined, undefined, true);
            _this._zone.run(function () {
                _this._stable = true;
                _this.setupCache();
                _this.waitForSettings();
                _this.registerOverlays();
            });
        });
        return _this;
    }
    Object.defineProperty(ApplicationService.prototype, "is_stable", {
        /** Whether the application has stablised */
        get: function () {
            return this._stable || false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "Overlay", {
        /** Overlay service */
        get: function () {
            return this._overlay;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "Analytics", {
        /** Analytics service */
        get: function () {
            return this._analytics;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "Hotkeys", {
        /** Hotkeys service */
        get: function () {
            return this._hotkeys;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "Systems", {
        /** Systems Manager service */
        get: function () {
            return this._systems;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "Organisation", {
        /** Organisation service */
        get: function () {
            return this._organisation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "Users", {
        /** Users service */
        get: function () {
            return this._users;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "Bookings", {
        /** Bookings service */
        get: function () {
            return this._bookings;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "Spaces", {
        /** Spaces service */
        get: function () {
            return this._spaces;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get a setting from the settings service
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    ApplicationService.prototype.setting = function (key) {
        return this._settings.get(key);
    };
    Object.defineProperty(ApplicationService.prototype, "name", {
        /** Name of the application */
        get: function () {
            return this._settings.app_name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "title", {
        /**
         * Title of the page
         */
        get: function () {
            return this._title.getTitle();
        },
        /**
         * Title of the page
         */
        set: function (value) {
            var title_suffix = this.setting('app.title');
            this._title.setTitle("" + (value ? value + ' | ' : '') + title_suffix);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "endpoint", {
        /** Root API Endpoint */
        get: function () {
            return "/api/staff/";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "engine_endpoint", {
        /** Root API Endpoint for engine */
        get: function () {
            return this._composer.auth.api_endpoint + "/";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ApplicationService.prototype, "websocket", {
        /** Get websocket */
        get: function () {
            return this._composer.realtime;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Create notification popup
     * @param type CSS Class to add to the notification
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    ApplicationService.prototype.notify = function (type, msg, action, on_action) {
        var content = "<div class=\"icon\"><i class=\"material-icons\"></i></div><div class=\"text\">" + msg + "</div>";
        this._overlay.notify(content, action, on_action, type);
    };
    /**
     * Create success notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    ApplicationService.prototype.notifySuccess = function (msg, action, on_action) {
        this.notify('success', msg, action, on_action);
    };
    /**
     * Create success notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    ApplicationService.prototype.notifyError = function (msg, action, on_action) {
        this.notify('error', msg, action, on_action);
    };
    /**
     * Create info notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    ApplicationService.prototype.notifyInfo = function (msg, action, on_action) {
        this.notify('info', msg, action, on_action);
    };
    /**
     * Log data to the browser console
     * @param type Type of message
     * @param msg Message body
     * @param args array of argments to log to the console
     * @param stream Stream to emit the console on. 'debug', 'log', 'warn' or 'error'
     * @param force Whether to force message to be emitted when debug is disabled
     */
    ApplicationService.prototype.log = function (type, msg, args, stream, force) {
        if (stream === void 0) { stream = 'debug'; }
        if (force === void 0) { force = false; }
        this._settings.log(type, msg, args, stream, force);
    };
    /**
     * Navigate to the given path
     * @param path Path or array of path parts
     * @param query Key value pairs to add to the URL as query parameters
     */
    ApplicationService.prototype.navigate = function (path, query) {
        var route = path instanceof Array ? path.slice() : [path];
        this._route_trail.push(this._router.url);
        this._router.navigate(route, query ? { queryParams: query } : { preserveFragment: true });
    };
    /**
     * Navigate to the previous location in the route trail
     */
    ApplicationService.prototype.navigateBack = function () {
        if (this._route_trail && this._route_trail.length > 0) {
            var path = this._route_trail.pop();
            this._router.navigate([path]);
        }
        else {
            this._router.navigate(['']);
        }
    };
    /**
     * Get the current value of the named property
     * @param name Property name
     */
    ApplicationService.prototype.get = function (name) {
        return this._subjects[name] && this._subjects[name] instanceof rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]
            ? this._subjects[name].getValue()
            : null;
    };
    /**
     * Listen to value change of the named property
     * @param name Property name
     * @param next Callback for value changes
     */
    ApplicationService.prototype.listen = function (name, next) {
        return this._observers[name] ? this._observers[name].subscribe(next) : null;
    };
    /**
     * Update the value of the named property
     * @param name Property name
     * @param value New value
     */
    ApplicationService.prototype.set = function (name, value) {
        if (!this._subjects[name]) {
            this._subjects[name] = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](value);
            this._observers[name] = this._subjects[name].asObservable();
        }
        else {
            this._subjects[name].next(value);
        }
    };
    /** Wait for settings to be initialised before setting up the application */
    ApplicationService.prototype.waitForSettings = function () {
        var _this = this;
        // Wait until the settings have loaded before initialising
        this.subscription('setting_setup', this._settings.initialised.subscribe(function (setup) {
            if (setup) {
                _this.init();
                _this.unsub('setting_setup');
            }
        }));
    };
    /**
     * Initialise application services
     */
    ApplicationService.prototype.init = function () {
        var _this = this;
        this.setupComposer();
        // Setup analytics
        this._analytics.enabled = !!this.setting('app.analytics.enabled');
        if (this._analytics.enabled) {
            this._analytics.load(this.setting('app.analytics.tracking_id'));
        }
        this._composer.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["first"])(function (_) { return _; })).subscribe(function () {
            _this._users.init();
            _this._organisation.init();
            _this._bookings.init();
            _this._spaces.init();
            _this._polling.init();
            _this._initialised.next(true);
        });
        // Add service to window if in debug mode
        if (window.debug) {
            window.application = this;
        }
        this._hotkeys.listen(['Shift', 'Backslash'], function () {
            _this.navigate('bootstrap', { clear: true });
        });
    };
    /**
     * Initialise the composer library comms
     */
    ApplicationService.prototype.setupComposer = function () {
        this.log('SYSTEM', 'Setting up composer...');
        // Get application settings
        var settings = this.setting('composer') || {};
        var protocol = settings.protocol || location.protocol;
        var host = settings.domain || location.hostname;
        var port = settings.port || location.port;
        var url = settings.use_domain ? protocol + "//" + host + ":" + port : location.origin;
        var route = settings.route || '';
        var mock = this.setting('mock');
        // Generate configuration object
        var config = {
            scope: 'public',
            host: host + ":" + port,
            auth_uri: url + "/auth/oauth/authorize",
            token_uri: url + "/auth/token",
            redirect_uri: "" + location.origin + route + "/oauth-resp.html",
            handle_login: !settings.local_login,
            mock: mock
        };
        if (localStorage) {
            localStorage.setItem('oauth_redirect', location.href);
        }
        this._composer.setup(config);
        this.log('SYSTEM', 'Finsihed setting up composer.');
    };
    /**
     * Setup handler for cache change events
     */
    ApplicationService.prototype.setupCache = function () {
        var _this = this;
        this.unsub('app_stable');
        this.log('CACHE', "Initialising cache...");
        if (this._cache.isEnabled) {
            this.log('CACHE', "Listening to cache events...");
            this._cache.activateUpdate();
            this.subscription('cache_update', this._cache.available.subscribe(function (event) {
                var current = "current version is " + event.current.hash;
                var available = "available version is " + event.available.hash;
                _this.log('CACHE', "Update available: " + current + " " + available);
                _this.activateUpdate();
            }));
            setInterval(function () {
                _this.log('CACHE', "Checking for updates...");
                _this._cache.checkForUpdate();
            }, 5 * 60 * 1000);
        }
        this._users.init();
        this._organisation.init();
        this._bookings.init();
        this._spaces.init();
        // Add service to window if in debug mode
        if (window.debug) {
            window.application = this;
        }
        this._hotkeys.listen(['Shift', 'Backslash'], function () {
            _this.navigate('bootstrap', { clear: true });
        });
    };
    /**
     * Update the cache and reload the page
     */
    ApplicationService.prototype.activateUpdate = function () {
        if (this._cache.isEnabled) {
            this.log('CACHE', "Activating changes to the cache...");
            this._cache.activateUpdate().then(function () { return location.reload(true); });
        }
    };
    /**
     * Pre-register available overlays
     */
    ApplicationService.prototype.registerOverlays = function () {
        if (_shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_11__["OVERLAY_REGISTER"]) {
            for (var _i = 0, OVERLAY_REGISTER_1 = _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_11__["OVERLAY_REGISTER"]; _i < OVERLAY_REGISTER_1.length; _i++) {
                var overlay = OVERLAY_REGISTER_1[_i];
                this._overlay.register(overlay.id, overlay.config);
            }
        }
    };
    ApplicationService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function ApplicationService_Factory() { return new ApplicationService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["SwUpdate"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_settings_service__WEBPACK_IMPORTED_MODULE_10__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_6__["AOverlayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_5__["ComposerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_acaprojects_ngx_google_analytics__WEBPACK_IMPORTED_MODULE_7__["GoogleAnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_hotkeys_service__WEBPACK_IMPORTED_MODULE_12__["HotkeysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_systems_manager_systems_manager_service__WEBPACK_IMPORTED_MODULE_17__["SystemsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_13__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_users_users_service__WEBPACK_IMPORTED_MODULE_14__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_15__["BookingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_16__["SpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_polling_polling_service__WEBPACK_IMPORTED_MODULE_18__["PollingService"])); }, token: ApplicationService, providedIn: "root" });
    return ApplicationService;
}(_shared_base_class__WEBPACK_IMPORTED_MODULE_9__["BaseClass"]));



/***/ }),

/***/ "./src/app/services/data/base-api.class.ts":
/*!*************************************************!*\
  !*** ./src/app/services/data/base-api.class.ts ***!
  \*************************************************/
/*! exports provided: BaseDataClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseDataClass", function() { return BaseDataClass; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm5/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/base.class */ "./src/app/shared/base.class.ts");




var BaseDataClass = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseDataClass, _super);
    function BaseDataClass(service, raw_data) {
        var _this = _super.call(this) || this;
        _this.service = service;
        /** Subject for change events to the class object */
        _this.changeEvents = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        _this.id = raw_data.id || raw_data.zone_id || raw_data.email || "" + Math.floor(Math.random() * 9999999999);
        _this.name = raw_data.name;
        _this.email = (raw_data.email || '').toLowerCase();
        _this._form_metadata = raw_data.form_metadata || {};
        return _this;
    }
    Object.defineProperty(BaseDataClass.prototype, "form_fields", {
        /** Get form field metadata for the object */
        get: function () {
            if (!this._form_fields) {
                this._form_fields = this.initialiseFormFields();
            }
            return this._form_fields;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataClass.prototype, "valid", {
        /** Whether form fields are valid */
        get: function () {
            return this._form_fields ? this._form_fields.reduce(function (a, i) { return a && i.isValid(); }, true) : false;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseDataClass.prototype, "changes", {
        /** Whether the form has changes */
        get: function () {
            return this.formChanges().length > 0;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Reset the values on the form to their initial state
     */
    BaseDataClass.prototype.resetForm = function () {
        if (this._form_fields) {
            for (var _i = 0, _a = this._form_fields; _i < _a.length; _i++) {
                var field = _a[_i];
                field.setValue(this[field.key]);
            }
        }
    };
    /**
     * Get a list of the field names that have changed values
     */
    BaseDataClass.prototype.formChanges = function () {
        var changed = [];
        if (this._form_fields) {
            for (var _i = 0, _a = this._form_fields; _i < _a.length; _i++) {
                var field = _a[_i];
                if (field.getValue() !== this[field.key]) {
                    changed.push(field.key);
                }
            }
        }
        return changed;
    };
    /**
     * Save form changes to server
     */
    BaseDataClass.prototype.save = function () {
        if (this.changes && this.service) {
            this._form_fields.forEach(function (i) { return i.showErrors(true); });
            if (this.valid) {
                var form = this.formValues();
                return this.id
                    ? this.service.update(this.id, form)
                    : this.service.add(form);
            }
        }
    };
    /**
     * Delete this item from the server
     */
    BaseDataClass.prototype.delete = function () {
        if (this.id) {
            return this.service.delete(this.id);
        }
    };
    /**
     * Run task for this item on the service
     * @param task_name Name of the task
     * @param parameters Parameters to pass to the task request
     */
    BaseDataClass.prototype.runTask = function (task_name, parameters) {
        if (this.id) {
            return this.service.task(this.id, task_name, parameters);
        }
    };
    /**
     * Get a map of the field values
     */
    BaseDataClass.prototype.toJSON = function () {
        if (!this._form_fields) {
            this._form_fields = this.initialiseFormFields();
        }
        var json = this.formValues();
        json.id = this.id;
        delete json.changed_fields;
        return json;
    };
    /**
     * Emits change event
     * @param type Type of change that has occurred
     * @param metadata Supporting metadata for the event
     */
    BaseDataClass.prototype.emit = function (type, metadata) {
        this.changeEvents.next({ type: type, metadata: metadata });
    };
    /**
     * Make a copy of this object
     */
    BaseDataClass.prototype.clone = function () {
        return new BaseDataClass(this.service, this);
    };
    /**
     * Make a copy of this object without identification data
     */
    BaseDataClass.prototype.duplicate = function () {
        return new BaseDataClass(this.service, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this, { id: null, email: null }));
    };
    /**
     * Get the mapped values of the form fields
     */
    BaseDataClass.prototype.formValues = function (field_list, changes) {
        if (field_list === void 0) { field_list = this._form_fields; }
        if (changes === void 0) { changes = true; }
        var values = {};
        for (var _i = 0, field_list_1 = field_list; _i < field_list_1.length; _i++) {
            var field = field_list_1[_i];
            if (field.children && field.children.length > 0) {
                values[field.key] = this.formValues(field.children, false);
            }
            else {
                values[field.key] = field.getValue();
            }
        }
        if (changes) {
            values.changed_fields = this.formChanges();
        }
        return values;
    };
    /**
     * Initialise the form field metadata for the field
     */
    BaseDataClass.prototype.initialiseFormFields = function () {
        var edit = !!this.id;
        var fields = [
            new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["ADynamicFormField"]({
                key: 'name',
                type: 'input',
                value: this.name
            }),
            new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["ADynamicFormField"]({
                key: 'email',
                type: 'input',
                value: this.email,
                required: true,
                attributes: { type: 'email' }
            })
        ];
        return fields;
    };
    return BaseDataClass;
}(_shared_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"]));



/***/ }),

/***/ "./src/app/services/data/base.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/data/base.service.ts ***!
  \***********************************************/
/*! exports provided: BaseAPIService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAPIService", function() { return BaseAPIService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _base_api_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-api.class */ "./src/app/services/data/base-api.class.ts");
/* harmony import */ var _shared_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/base.class */ "./src/app/shared/base.class.ts");
/* harmony import */ var _shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utilities/api.utilities */ "./src/app/shared/utilities/api.utilities.ts");





var BaseAPIService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseAPIService, _super);
    function BaseAPIService(_composer) {
        var _this = _super.call(this) || this;
        _this._composer = _composer;
        /** Map of state variables for Service */
        _this._subjects = {};
        /** Map of observables for state variables */
        _this._observers = {};
        /** Map of poll subscribers for API endpoints */
        _this._subscribers = {};
        /** Map of promises for Service */
        _this._promises = {};
        /** Comparison function for service items */
        _this._compare = function (a, b) { return a === b || a.id === b.id; };
        /** Default filter function for list method */
        _this._list_filter = function (a) { return !!a; };
        _this._name = 'Base';
        _this._api_route = 'base';
        _this.set('list', []);
        return _this;
    }
    Object.defineProperty(BaseAPIService.prototype, "http", {
        get: function () {
            return this._composer.http;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initailise service
     */
    BaseAPIService.prototype.init = function () {
        var _this = this;
        if (!this.parent || !this.parent.is_initialised) {
            return this.timeout('init', function () { return _this.init(); });
        }
        this.load().then(function (_) { return _this._initialised.next(true); });
    };
    /**
     * Get API route for the service
     * @param engine Whether endpoint is using the application API or engine API
     */
    BaseAPIService.prototype.route = function (engine) {
        if (engine === void 0) { engine = false; }
        var endpoint = this.parent ? (engine ? this.parent.engine_endpoint : this.parent.endpoint) : '/api/';
        return "" + endpoint + this._api_route;
    };
    Object.defineProperty(BaseAPIService.prototype, "api_route", {
        /** API Route of the service */
        get: function () {
            return this._api_route;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get a service related setting from the settings service
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    BaseAPIService.prototype.setting = function (key) {
        return this.parent ? this.parent.setting("app." + this._name.toLowerCase() + "." + key) : null;
    };
    /**
     * Get the current value of the named property
     * @param name Property name
     */
    BaseAPIService.prototype.get = function (name) {
        return this._subjects[name] && this._subjects[name] instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]
            ? this._subjects[name].getValue()
            : null;
    };
    /**
     * Listen to value change of the named property
     * @param name Property name
     * @param next Callback for value changes
     */
    BaseAPIService.prototype.listen = function (name, next) {
        return this._observers[name] ? this._observers[name].subscribe(next) : null;
    };
    /**
     * Update the value of the named property
     * @param name Property name
     * @param value New value
     */
    BaseAPIService.prototype.set = function (name, value) {
        if (!this._subjects[name]) {
            this._subjects[name] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](value);
            this._observers[name] = this._subjects[name].asObservable();
        }
        else {
            this._subjects[name].next(value);
        }
    };
    /**
     * Get list of loaded items
     * @param filterFn Function for filtering the list
     */
    BaseAPIService.prototype.list = function (filterFn) {
        if (filterFn === void 0) { filterFn = this._list_filter; }
        var list = this.get('list') || [];
        return list.reduce(function (a, i) { if (filterFn(i)) {
            a.push(i);
        } return a; }, []);
    };
    /**
     * Get item with the given id from the loaded items
     * @param id ID of the item
     */
    BaseAPIService.prototype.item = function (id) {
        var list = this.get('list') || [];
        return list.find(function (i) { return i.id === id || i.email === id; });
    };
    /**
     * Query the index of the API route associated with this service
     * @param query_params Map of query paramaters to add to the request URL
     */
    BaseAPIService.prototype.query = function (query_params) {
        var _this = this;
        if (query_params === void 0) { query_params = { update_list: true }; }
        var engine = false;
        var cache = 1000;
        if (query_params) {
            engine = !!query_params.engine;
            delete query_params.engine;
            cache = query_params.cache || 1000;
            delete query_params.cache;
        }
        var query = Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params);
        var key = "query|" + query;
        if (!this._promises[key]) {
            this._promises[key] = new Promise(function (resolve, reject) {
                var url = "" + _this.route(engine) + (query ? '?' + query : '');
                var result = [];
                _this.http.get(url).subscribe(function (d) {
                    result = d && d instanceof Array
                        ? d.map(function (i) { return _this.process(i); })
                        : (d && !(d instanceof Array) && d.results
                            ? d.results
                            : []);
                }, function (e) {
                    reject(e);
                    _this._promises[key] = null;
                }, function () {
                    if ((!query || (query_params && query_params.update_list)) && result.length > 0 && result[0] instanceof _base_api_class__WEBPACK_IMPORTED_MODULE_2__["BaseDataClass"]) {
                        _this.set('list', _this.updateList(_this.get('list'), result));
                    }
                    resolve(result);
                    _this.timeout(key, function () { return (_this._promises[key] = null); }, cache);
                });
            });
        }
        return this._promises[key];
    };
    /**
     * Query the API route for a sepecific item
     * @param id ID of the item
     * @param query_params Map of query paramaters to add to the request URL
     */
    BaseAPIService.prototype.show = function (id, query_params) {
        var _this = this;
        if (query_params === void 0) { query_params = {}; }
        var engine = false;
        if (query_params) {
            engine = !!query_params.engine;
            delete query_params.engine;
        }
        var query = Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params);
        var key = "show|" + id + "|" + query;
        if (!this._promises[key]) {
            this._promises[key] = new Promise(function (resolve, reject) {
                var url = _this.route(engine) + "/" + id + (query ? '?' + query : '');
                var result = null;
                _this.http.get(url).subscribe(function (d) { return result = _this.process(d); }, function (e) {
                    reject(e);
                    _this._promises[key] = null;
                }, function () {
                    resolve(result);
                    _this.timeout(key, function () { return (_this._promises[key] = null); }, 1000);
                });
            });
        }
        return this._promises[key];
    };
    /**
     * Make post request for a new item to the service
     * @param form_data Data to post to the server
     * @param query_params Map of query paramaters to add to the request URL
     */
    BaseAPIService.prototype.add = function (form_data, query_params) {
        var _this = this;
        if (query_params === void 0) { query_params = {}; }
        if (!this._promises.new_item) {
            this._promises.new_item = new Promise(function (resolve, reject) {
                var query = Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params);
                var url = "" + _this.route(query_params.engine) + (query ? '?' + query : '');
                var result = null;
                _this.http.post(url, form_data).subscribe(function (d) { return (result = _this.process(d)); }, function (e) {
                    reject(e);
                    _this.analyticsEvent("create-" + _this._name.toLowerCase() + "-failed");
                    _this._promises.new_item = null;
                }, function () {
                    resolve(result);
                    _this.set('list', _this.updateList(_this.get('list'), [result]));
                    _this.analyticsEvent("create-" + _this._name.toLowerCase() + "-success");
                    _this._promises.new_item = null;
                });
            });
        }
        return this._promises.new_item;
    };
    /**
     * Perform API task for the given item ID
     * @param id ID of the item
     * @param task_name Name of the task
     * @param form_data Map of data to pass to the API
     */
    BaseAPIService.prototype.task = function (id, task_name, form_data) {
        var _this = this;
        if (form_data === void 0) { form_data = {}; }
        var query = Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(form_data);
        var key = "task|" + id + "|" + task_name + "|" + query;
        if (!this._promises[key]) {
            this._promises[key] = new Promise(function (resolve, reject) {
                var post_data = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, form_data, { id: id, _task: task_name });
                var url = _this.route(form_data.engine) + "/" + id + "/" + task_name;
                var result = null;
                _this.http.post(url, post_data).subscribe(function (d) { return result = d; }, function (e) {
                    reject(e);
                    _this.analyticsEvent(_this._name.toLowerCase() + "-task-" + task_name + "-failed", id);
                    _this._promises[key] = null;
                }, function () {
                    resolve(result);
                    _this.analyticsEvent(_this._name.toLowerCase() + "-task-" + task_name + "-success", id);
                    _this.timeout(key, function () { return _this._promises[key] = null; }, 1000);
                });
            });
        }
        return this._promises[key];
    };
    /**
     * Setup a poller for an API endpoint
     * @param id Show request ID. Leave blank to poll on the query endpoint
     * @param query_params Map of query paramaters to add to the polled URL
     * @param delay Delay between each poll event
     */
    BaseAPIService.prototype.poll = function (id, query_params, delay) {
        var _this = this;
        if (query_params === void 0) { query_params = {}; }
        if (delay === void 0) { delay = 5000; }
        var key = "poll|" + (id || '') + "|" + (Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params) || '');
        this.stopPoll(id, query_params);
        this._subjects[key] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._observers[key] = this._subjects[key].asObservable();
        var sub = this._subjects[key];
        var query = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (query_params || {}), { _poll: true });
        if (id) {
            this.show(id, query).then(function (d) { return sub.next(d); }, function (e) { return sub.error(e); });
            this.interval(key, function () {
                _this.show(id, query).then(function (d) { return sub.next(d); }, function (e) { return sub.error(e); });
            }, delay);
        }
        else {
            this.query(query).then(function (d) { return sub.next(d); }, function (e) { return sub.error(e); });
            this.interval(key, function () {
                _this.query(query).then(function (d) { return sub.next(d); }, function (e) { return sub.error(e); });
            }, delay);
        }
        return this._observers[key];
    };
    /**
     * Destroy poller
     * @param id
     * @param query_params
     */
    BaseAPIService.prototype.stopPoll = function (id, query_params) {
        if (query_params === void 0) { query_params = {}; }
        var key = "poll|" + (id || '') + "|" + (Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params) || '');
        if (this._subjects[key]) {
            this._subjects[key].complete();
            this._subjects[key] = null;
            this._observers[key] = null;
        }
    };
    /**
     * Make put request for changes to the item with the given id
     * @param id ID of the item being updated
     * @param form_data New values for the item
     * @param query_params Map of query paramaters to add to the request URL
     */
    BaseAPIService.prototype.update = function (id, form_data, query_params) {
        var _this = this;
        if (query_params === void 0) { query_params = {}; }
        var key = "update|" + id;
        if (!this._promises[key]) {
            this._promises[key] = new Promise(function (resolve, reject) {
                var query = Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params);
                var url = _this.route(query_params.engine) + "/" + id + (query ? '?' + query : '');
                var result = null;
                _this.http.put(url, form_data).subscribe(function (d) { return (result = _this.process(d)); }, function (e) {
                    reject(e);
                    _this.analyticsEvent("update-" + _this._name.toLowerCase() + "-failed", id);
                    _this._promises[key] = null;
                }, function () {
                    resolve(result);
                    _this.set('list', _this.updateList(_this.removeItem(_this.get('list'), { id: id }), [result]));
                    _this.analyticsEvent("update-" + _this._name.toLowerCase() + "-success", id);
                    _this._promises[key] = null;
                });
            });
        }
        return this._promises[key];
    };
    /**
     * Make delete request for the given item
     * @param id ID of item
     */
    BaseAPIService.prototype.delete = function (id) {
        var _this = this;
        var key = "delete|" + id;
        if (!this._promises[key]) {
            this._promises[key] = new Promise(function (resolve, reject) {
                var url = _this.route() + "/" + id;
                _this.http.delete(url).subscribe(function (_) { return null; }, function (e) { return reject(e); }, function () {
                    _this.set('list', _this.removeItem(_this.get('list'), { id: id }));
                    resolve();
                });
            });
        }
        return this._promises[key];
    };
    /**
     * Add new API item from another service or API class
     * @param id ID of the item/or service adding the new item
     * @param data Raw API data for the new item
     * @param type Adder type
     */
    BaseAPIService.prototype.addFrom = function (id, data, type) {
        if (type === void 0) { type = 'other'; }
        var new_item = this.process(data);
        this.set('list', this.updateList(this.get('list'), [new_item]));
        return new_item.id;
    };
    /**
     * Remove items with the given IDs from the list
     * @param id ID of the item/or service remove the list of items
     * @param remove_ids List of item IDs to remove
     * @param type Remover type
     */
    BaseAPIService.prototype.removeFrom = function (id, remove_ids, type) {
        if (type === void 0) { type = 'other'; }
        var list = this.get('list');
        var _loop_1 = function (item_id) {
            var index = list.findIndex(function (item) { return item.id === item_id; });
            if (index >= 0) {
                list.splice(index, 1);
            }
        };
        for (var _i = 0, remove_ids_1 = remove_ids; _i < remove_ids_1.length; _i++) {
            var item_id = remove_ids_1[_i];
            _loop_1(item_id);
        }
        this.set('list', list);
    };
    /**
     * Load initial data for the service
     */
    BaseAPIService.prototype.load = function () {
        return new Promise(function (resolve) {
            resolve();
        });
    };
    /**
     * Post analytics event for this service
     * @param action Name of the action to post
     */
    BaseAPIService.prototype.analyticsEvent = function (action, label) {
        if (this.parent && this.parent.Analytics) {
            this.parent.Analytics.event(this._name, this.parent.name.toLowerCase() + "-" + action, label);
        }
    };
    /**
     * Convert raw API data into a valid API Object
     * @param raw_item Raw API data
     */
    BaseAPIService.prototype.process = function (raw_item) {
        return raw_item;
    };
    /**
     * Update recorded list of items
     * @param old_list Old list of items
     * @param list List of updated items
     * @param compareFn Function to compare items to remove duplicates
     */
    BaseAPIService.prototype.updateList = function (old_list, list, compareFn) {
        if (compareFn === void 0) { compareFn = this._compare; }
        if (!list || list.length === 0) {
            return old_list;
        }
        var new_list = [];
        var mixed_list = list.concat(old_list);
        if (!compareFn) {
            compareFn = this._compare;
        }
        var _loop_2 = function (item) {
            var found = new_list.find(function (i) { return compareFn(i, item); });
            if (!found) {
                new_list.push(item);
            }
        };
        for (var _i = 0, mixed_list_1 = mixed_list; _i < mixed_list_1.length; _i++) {
            var item = mixed_list_1[_i];
            _loop_2(item);
        }
        return new_list;
    };
    /**
     * Remove the given item from the given list
     * @param list List of items
     * @param item Item to remove
     * @param compareFn Function to compare items
     */
    BaseAPIService.prototype.removeItem = function (list, item, compareFn) {
        var new_list = [];
        if (!compareFn) {
            compareFn = this._compare;
        }
        list.forEach(function (i) { return compareFn(item, i) ? null : new_list.push(i); });
        return new_list;
    };
    return BaseAPIService;
}(_shared_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"]));



/***/ }),

/***/ "./src/app/services/data/bookings/booking.class.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/data/bookings/booking.class.ts ***!
  \*********************************************************/
/*! exports provided: Booking */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Booking", function() { return Booking; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm5/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _base_api_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base-api.class */ "./src/app/services/data/base-api.class.ts");
/* harmony import */ var _users_user_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../users/user.class */ "./src/app/services/data/users/user.class.ts");
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var _shared_globals_form_fields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/globals/form-fields */ "./src/app/shared/globals/form-fields.ts");
/* harmony import */ var _shared_utilities_formatting_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/utilities/formatting.utilities */ "./src/app/shared/utilities/formatting.utilities.ts");
/* harmony import */ var _shared_utilities_validation_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/utilities/validation.utilities */ "./src/app/shared/utilities/validation.utilities.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_10__);











var Booking = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Booking, _super);
    function Booking(service, raw_data) {
        var _this = _super.call(this, service, raw_data) || this;
        _this.service = service;
        /** Cached display strings */
        _this._display = {};
        var u_service = service.parent.Users;
        _this.icaluid = raw_data.icaluid || _this.id;
        _this.title = raw_data.title || raw_data.subject || raw_data.Subject;
        var start = dayjs__WEBPACK_IMPORTED_MODULE_10__(raw_data.date || raw_data.start || raw_data.start_epoch * 1000 || raw_data.Start);
        _this.date = start.valueOf();
        _this.duration = raw_data.duration || dayjs__WEBPACK_IMPORTED_MODULE_10__(raw_data.end || raw_data.end_epoch * 1000 || raw_data.End).diff(start, 'm');
        _this.body = raw_data.body || raw_data.description;
        _this.notes = raw_data.notes;
        _this.type = raw_data.type || (raw_data.visitors ? 'external' : null) || 'internal';
        _this.catering = raw_data.catering;
        _this._attendees = (raw_data.attendees || raw_data._attendees || []).map(function (i) { return u_service.item(i.email) || new _users_user_class__WEBPACK_IMPORTED_MODULE_5__["User"](u_service, i); });
        var organiser = raw_data.organiser || raw_data.organizer || { email: raw_data.owner + "@fake.org" };
        if (raw_data.owner) {
            _this.service.parent.Users.addFrom('booking', { name: raw_data.owner, email: raw_data.owner + "@fake.org" });
        }
        _this._organiser = organiser.email || raw_data._organiser;
        _this._location = raw_data.location || raw_data._location;
        _this._display = {
            date: start.format('DD MMM YYYY'),
            time: start.format('h:mma') + " - " + dayjs__WEBPACK_IMPORTED_MODULE_10__(start)
                .add(_this.duration, 'm')
                .format('h:mma'),
            start: start.format('h:mma'),
            end: dayjs__WEBPACK_IMPORTED_MODULE_10__(start)
                .add(_this.duration, 'm')
                .format('h:mma'),
            duration: Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_6__["humaniseDuration"])(_this.duration)
        };
        _this._space_list = raw_data.room_ids || raw_data._space_list;
        // Add attendees and organiser to service data
        if (_this.service.parent && _this.service.parent.Users) {
            if (raw_data.attendees) {
                raw_data.attendees.forEach(function (u) {
                    if (!_this.service.parent.Users.item(u.email)) {
                        _this.service.parent.Users.addFrom(_this.id, u, 'class');
                    }
                });
            }
            if (organiser) {
                if (!_this.service.parent.Users.item(organiser.email)) {
                    _this.service.parent.Users.addFrom(_this.id, organiser, 'class');
                }
            }
        }
        return _this;
    }
    Object.defineProperty(Booking.prototype, "attendees", {
        /** List of attendees to the meeting */
        get: function () {
            var _this = this;
            return this.service && this.service.parent && this.service.parent.Users
                ? this.service.parent.Users.list(function (user) { return _this._attendees.indexOf(user.id) >= 0; })
                : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Booking.prototype, "organiser", {
        /** Host or organiser of the meeting */
        get: function () {
            return this.service && this.service.parent && this.service.parent.Users && this._organiser
                ? this.service.parent.Users.item(this._organiser) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Booking.prototype, "status", {
        /** Status of the booking */
        get: function () {
            var now = dayjs__WEBPACK_IMPORTED_MODULE_10__();
            var date = dayjs__WEBPACK_IMPORTED_MODULE_10__(this.date);
            if (now.isBefore(date.subtract(15, 'm'), 'm')) {
                return 'future';
            }
            else if (now.isBefore(date, 'm')) {
                return 'upcoming';
            }
            else if (now.isBefore(date.add(15, 'm'), 'm')) {
                return 'started';
            }
            else if (now.isBefore(date.add(this.duration, 'm'), 'm')) {
                return 'in_progress';
            }
            return 'done';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Booking.prototype, "space", {
        /** Get the first space from the space list */
        get: function () {
            return this.service && this.service.parent && this.service.parent.Spaces && this._space_list && this._space_list.length > 0
                ? this.service.parent.Spaces.item(this._space_list[0]) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Booking.prototype, "space_list", {
        /** Spaces associated with the booking */
        get: function () {
            var _this = this;
            return this.service && this.service.parent && this.service.parent.Spaces
                ? this.service.parent.Spaces.list(function (space) { return _this._space_list.indexOf(space.id) >= 0; })
                : [];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Booking.prototype, "date_string", {
        /** Display value for the date */
        get: function () {
            return this._display.date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Booking.prototype, "time_period", {
        /** Display valuie for the start and end times of the booking */
        get: function () {
            return this._display.time;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Booking.prototype, "start_time", {
        /** Display value for the start time of the booking */
        get: function () {
            return this._display.start;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Booking.prototype, "end_time", {
        /** Display value for the end time of the booking */
        get: function () {
            return this._display.end;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Booking.prototype, "length_string", {
        /** Display value for the duration of the booking */
        get: function () {
            return this._display.duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Booking.prototype, "location", {
        /** Display value for the location of the booking */
        get: function () {
            return this._display.space_names || this._location || 'No location set';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Booking.prototype, "level", {
        /** Display value for the level of the first space in the booking */
        get: function () {
            return this._display.level;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Create form fields for the object
     */
    Booking.prototype.initialiseFormFields = function () {
        var _this = this;
        var form_fields = [];
        var form_settings = this.service.setting('fields') || [];
        var user = this.service.parent.Users.current;
        var actions = {
        // space: () => this.setSpace(),
        // recurrence: () => this.setRecurrence(),
        // conferencing: (v?) => this.setConferencing(v)
        };
        var validators = {
            date: [_shared_utilities_validation_utilities__WEBPACK_IMPORTED_MODULE_9__["validateDate"]],
            duration: [Object(_shared_utilities_validation_utilities__WEBPACK_IMPORTED_MODULE_9__["buildValidateDuration"])()],
            attendees: [Object(_shared_utilities_validation_utilities__WEBPACK_IMPORTED_MODULE_9__["buildValidateAttendees"])(user, this.service.setting('min_attendees'))],
            terms: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].requiredTrue]
        };
        var formatters = {
            attendees: Object(_shared_utilities_formatting_utilities__WEBPACK_IMPORTED_MODULE_8__["formatAttendeesWithHost"])(user),
            date: _angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"],
            space: _shared_utilities_formatting_utilities__WEBPACK_IMPORTED_MODULE_8__["formatSpaces"],
            recurrence: _shared_utilities_formatting_utilities__WEBPACK_IMPORTED_MODULE_8__["formatRecurrence"]
        };
        var custom_elements = _shared_globals_form_fields__WEBPACK_IMPORTED_MODULE_7__["FORM_FIELDS"];
        var defaults = {};
        var process_field = function (field) {
            var f = {
                key: field.key,
                label: field.label,
                icon: field.icon,
                type: field.control_type || field.type,
                value: _this[field.key] || defaults[field.key] || '',
                action: field.action || actions[field.key],
                format: field.format || formatters[field.key],
                content: field.content || custom_elements[field.key],
                required: field.required,
                validators: validators[field.key],
                references: field.references || field.refs,
                hide: field.hide,
                metadata: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, field.metadata, _this._form_metadata, { service: _this.service }),
                attributes: { flex: field.flex },
                children: field.children ? field.children.map(function (i) { return process_field(i); }) : null
            };
            return new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__["ADynamicFormField"](f);
        };
        for (var _i = 0, form_settings_1 = form_settings; _i < form_settings_1.length; _i++) {
            var field = form_settings_1[_i];
            if (field.key) {
                form_fields.push(process_field(field));
            }
        }
        return form_fields;
    };
    /**
     * Make a copy of this object
     */
    Booking.prototype.clone = function () {
        return new Booking(this.service, this);
    };
    /**
     * Make a copy of this object without identification data
     */
    Booking.prototype.duplicate = function () {
        return new Booking(this.service, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this, { id: null, email: null, icaluid: null }));
    };
    return Booking;
}(_base_api_class__WEBPACK_IMPORTED_MODULE_4__["BaseDataClass"]));



/***/ }),

/***/ "./src/app/services/data/bookings/booking.utilities.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/data/bookings/booking.utilities.ts ***!
  \*************************************************************/
/*! exports provided: setMockBookingStartDatetime, generateMockBooking, getFreeBookingSlots, getNextFreeBookingSlot */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMockBookingStartDatetime", function() { return setMockBookingStartDatetime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMockBooking", function() { return generateMockBooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFreeBookingSlots", function() { return getFreeBookingSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextFreeBookingSlot", function() { return getNextFreeBookingSlot; });
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var _users_user_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users/user.utilities */ "./src/app/services/data/users/user.utilities.ts");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);




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
        id = "booking-" + BOOKING_COUNT++;
    }
    BOOKING_DATE = BOOKING_DATE.add(Math.floor(Math.random() * 4) + 15, 'm');
    var start = BOOKING_DATE.valueOf();
    var duration = Math.floor(Math.random() * 4) + 30;
    BOOKING_DATE = BOOKING_DATE.add(Math.floor(Math.random() * 4) + 15, 'm');
    return {
        id: id,
        icaluid: Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_0__["padZero"])(Math.floor(Math.random() * 99999999), 8),
        title: faker__WEBPACK_IMPORTED_MODULE_2__["commerce"].productName() + " Meeting",
        attendees: Array(Math.floor(Math.random() * 5 + 2))
            .fill(0)
            .map(function (i) { return Object(_users_user_utilities__WEBPACK_IMPORTED_MODULE_1__["generateMockUser"])(); }),
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
function getFreeBookingSlots(list, min_size) {
    if (min_size === void 0) { min_size = 30; }
    if (!list) {
        return [{ start: 0, end: dayjs__WEBPACK_IMPORTED_MODULE_3__().startOf('m').valueOf() * 10 }];
    }
    var slots = [];
    var start = dayjs__WEBPACK_IMPORTED_MODULE_3__(0);
    list.sort(function (a, b) { return a.date - b.date; });
    for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
        var booking = list_1[_i];
        var bkn_start = dayjs__WEBPACK_IMPORTED_MODULE_3__(booking.date);
        var bkn_end = bkn_start.add(booking.duration, 'm');
        if (bkn_start.isAfter(start)) {
            var diff = bkn_start.diff(start, 'm');
            if (diff >= min_size) {
                slots.push({ start: start.valueOf(), end: bkn_start.valueOf() });
            }
            start = bkn_end;
        }
    }
    slots.push({ start: start.valueOf(), end: dayjs__WEBPACK_IMPORTED_MODULE_3__().startOf('m').valueOf() * 10 });
    return slots;
}
/**
 * Get the next free time slot from the given bookings
 * @param list List of bookings to find the next slot
 * @param date Date to find next slot after in ms since UTC epoch
 * @param min_size Minimum length of the free slot in minutes
 */
function getNextFreeBookingSlot(list, date, min_size) {
    if (date === void 0) { date = dayjs__WEBPACK_IMPORTED_MODULE_3__().valueOf(); }
    if (min_size === void 0) { min_size = 30; }
    var slots = getFreeBookingSlots(list, min_size);
    var time = dayjs__WEBPACK_IMPORTED_MODULE_3__(date).startOf('m').second(1);
    for (var _i = 0, slots_1 = slots; _i < slots_1.length; _i++) {
        var block = slots_1[_i];
        var start = dayjs__WEBPACK_IMPORTED_MODULE_3__(block.start).startOf('m');
        var end = dayjs__WEBPACK_IMPORTED_MODULE_3__(block.end).startOf('m');
        if (start.isAfter(time, 's')) {
            return block;
        }
        else if (time.isBefore(end, 's')) {
            var duration = end.diff(time, 'm');
            if (duration >= min_size) {
                return block;
            }
        }
    }
    return slots[slots.length - 1];
}


/***/ }),

/***/ "./src/app/services/data/bookings/bookings.service.ts":
/*!************************************************************!*\
  !*** ./src/app/services/data/bookings/bookings.service.ts ***!
  \************************************************************/
/*! exports provided: BookingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingsService", function() { return BookingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm5/acaprojects-ngx-composer.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.service */ "./src/app/services/data/base.service.ts");
/* harmony import */ var _booking_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking.class */ "./src/app/services/data/bookings/booking.class.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var BookingsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BookingsService, _super);
    function BookingsService(_composer) {
        var _this = _super.call(this, _composer) || this;
        _this._composer = _composer;
        _this._name = 'Bookings';
        _this._api_route = 'bookings';
        _this._compare = function (a, b) { return !a.id.localeCompare(b.id) || !a.icaluid.localeCompare(b.icaluid); };
        return _this;
    }
    /**
     * Open form modal for creating new bookings
     * @param space Space to make booking in
     * @param date Default date on the form
     */
    BookingsService.prototype.new = function (options) {
        var _this = this;
        if (options.space) {
            this.parent.Overlay.open('booking', {
                config: 'modal',
                data: options
            }, function (event) {
                var booking = event.data.booking.toJSON();
                _this.timeout('book', function () {
                    _this.create(options.space, booking)
                        .then(function () {
                        _this.parent.notifySuccess('Booking successfully created');
                        event.data.close ? event.data.close() : '';
                    }).catch(function (_) {
                        _this.parent.notifyError("Error creating meeting. " + _);
                        event.data.on_error ? event.data.on_error() : '';
                    });
                }, 1000);
            });
        }
    };
    /**
     * Create new booking with the given properties
     * @param booking New booking data
     */
    BookingsService.prototype.create = function (space, booking) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (space) {
                var request = {
                    title: booking.title,
                    count: {
                        staff: booking.num_staff ? +booking.num_staff : 0,
                        partners: booking.num_partners ? +booking.num_partners : 0,
                    },
                    staff_id: '',
                    start: booking.date.valueOf(),
                    end: dayjs__WEBPACK_IMPORTED_MODULE_4__(booking.date).add(booking.period.duration, 'm').valueOf(),
                    host: booking.host || booking.user || { name: 'Panel User' }
                };
                var module = _this.parent.Systems.get(space.id, 'Bookings');
                if (request && module) {
                    module.exec('create_meeting', [request]).then(function () {
                        _this.analyticsEvent('create-success');
                        resolve();
                    }, function (err) {
                        _this.analyticsEvent('create-failed');
                        reject("Error making booking: " + err);
                    });
                }
                else {
                    reject("No Bookings module found for space " + space.id);
                }
            }
            else {
                reject('No space set for booking');
            }
        });
    };
    BookingsService.prototype.process = function (raw_data) {
        return new _booking_class__WEBPACK_IMPORTED_MODULE_3__["Booking"](this, raw_data);
    };
    BookingsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ factory: function BookingsService_Factory() { return new BookingsService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_1__["ComposerService"])); }, token: BookingsService, providedIn: "root" });
    return BookingsService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseAPIService"]));



/***/ }),

/***/ "./src/app/services/data/organisation/building.class.ts":
/*!**************************************************************!*\
  !*** ./src/app/services/data/organisation/building.class.ts ***!
  \**************************************************************/
/*! exports provided: Building */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Building", function() { return Building; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_api_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-api.class */ "./src/app/services/data/base-api.class.ts");
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");



var Building = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Building, _super);
    function Building(service, raw_data) {
        var _this = _super.call(this, service, raw_data) || this;
        _this.service = service;
        _this.zone_id = raw_data.zone_id || raw_data.zone;
        _this._extras = (raw_data.extras || []).map(function (i) { return ({ id: i.extra_id || i.id, name: i.extra_name || i.name }); });
        _this._loan_items = (raw_data.loan_items || []).map(function (i) { return ({ id: i.extra_id || i.id, name: i.extra_name || i.name }); });
        _this._levels = (raw_data.levels || []).map(function (i) { return ({ id: i.level_id || i.id, name: i.level_name || i.name }); });
        _this._roles = raw_data.roles || {};
        _this._lockers = raw_data.lockers || raw_data.locker_structure || {};
        _this._systems = raw_data.systems || {};
        _this._settings = raw_data.settings || {};
        _this._phone_numbers = raw_data.phone_numbers || {};
        _this._location = raw_data.location || { longitude: null, latitude: null };
        _this._searchables = [];
        if (raw_data.neighbourhoods) {
            for (var lvl in raw_data.neighbourhoods) {
                if (raw_data.neighbourhoods.hasOwnProperty(lvl)) {
                    var lvl_features = raw_data.neighbourhoods[lvl] || {};
                    for (var feature in lvl_features) {
                        if (lvl_features.hasOwnProperty(feature)) {
                            _this._searchables.push({
                                id: lvl_features[feature],
                                name: feature,
                                level_id: lvl
                            });
                        }
                    }
                }
            }
        }
        return _this;
    }
    Object.defineProperty(Building.prototype, "extras", {
        /** List of available extras for the building */
        get: function () {
            return (this._extras || []).slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Building.prototype, "loan_items", {
        /** List of available extras for the building */
        get: function () {
            return (this._loan_items || []).slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Building.prototype, "levels", {
        /** List of available levels for the building */
        get: function () {
            return (this._levels || []).slice();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get a custom building setting
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    Building.prototype.setting = function (key) {
        var keys = key.split('.');
        var value = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__["getItemWithKeys"])(keys, this._settings);
        return value;
    };
    /**
     * Get list of users with the associated role
     * @param name Role to find users for
     */
    Building.prototype.role = function (name) {
        return (this._roles[name] || []).slice();
    };
    Object.defineProperty(Building.prototype, "role_names", {
        /**
         * Get list of the names of available user role lists
         */
        get: function () {
            var _this = this;
            return Object.keys(this._roles).filter(function (i) { return _this._roles.hasOwnProperty(i); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Building.prototype, "lockers", {
        /** Map of the locker ID arrays */
        get: function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (this._lockers || {}));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Building.prototype, "systems", {
        /** Map of important system ids for the building */
        get: function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (this._systems || {}));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Building.prototype, "phone_numbers", {
        /** Map of important phone numbers for the building */
        get: function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (this._phone_numbers || {}));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Building.prototype, "location", {
        /** Real coordinates */
        get: function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this._location);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Building.prototype, "zones", {
        /** List of zones associated with the building */
        get: function () {
            return (this._zones || []).slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Building.prototype, "searchables", {
        /** Searchable map features */
        get: function () {
            return (this._searchables || []).slice();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get search map feature for the given level ID
     * @param level_id ID of level to grab features for
     */
    Building.prototype.featuresForLevel = function (level_id) {
        return (this._searchables || []).filter(function (i) { return i.level_id === level_id; });
    };
    /**
     * Building objects are readonly and cannot be changed
     */
    Building.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                throw new Error('Building objects are readonly and cannot be changed');
            });
        });
    };
    /**
     * Building objects are readonly and cannot be deleted
     */
    Building.prototype.delete = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                throw new Error('Building objects are readonly and cannot be deleted');
            });
        });
    };
    return Building;
}(_base_api_class__WEBPACK_IMPORTED_MODULE_1__["BaseDataClass"]));



/***/ }),

/***/ "./src/app/services/data/organisation/organisation.class.ts":
/*!******************************************************************!*\
  !*** ./src/app/services/data/organisation/organisation.class.ts ***!
  \******************************************************************/
/*! exports provided: Organisation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Organisation", function() { return Organisation; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_api_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-api.class */ "./src/app/services/data/base-api.class.ts");
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");



var Organisation = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Organisation, _super);
    function Organisation(service, raw_data) {
        var _this = _super.call(this, service, raw_data) || this;
        _this.service = service;
        _this._settings = raw_data.settings || {};
        return _this;
    }
    /**
     * Get a custom building setting
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    Organisation.prototype.setting = function (key) {
        var keys = key.split('.');
        var value = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__["getItemWithKeys"])(keys, this._settings);
        return value;
    };
    /**
     * Building objects are readonly and cannot be changed
     */
    Organisation.prototype.save = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                throw new Error('Organisation objects are readonly and cannot be changed');
            });
        });
    };
    /**
     * Building objects are readonly and cannot be deleted
     */
    Organisation.prototype.delete = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                throw new Error('Organisation objects are readonly and cannot be deleted');
            });
        });
    };
    return Organisation;
}(_base_api_class__WEBPACK_IMPORTED_MODULE_1__["BaseDataClass"]));



/***/ }),

/***/ "./src/app/services/data/organisation/organisation.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/services/data/organisation/organisation.service.ts ***!
  \********************************************************************/
/*! exports provided: OrganisationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganisationService", function() { return OrganisationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm5/acaprojects-ngx-composer.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.service */ "./src/app/services/data/base.service.ts");
/* harmony import */ var _organisation_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./organisation.class */ "./src/app/services/data/organisation/organisation.class.ts");
/* harmony import */ var _building_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./building.class */ "./src/app/services/data/organisation/building.class.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var OrganisationService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](OrganisationService, _super);
    function OrganisationService(_composer) {
        var _this = _super.call(this, _composer) || this;
        _this._composer = _composer;
        _this._name = 'Organisation';
        _this._api_route = 'zones';
        _this.set('buildings', []);
        return _this;
    }
    /**
     * Add is not available on organisation service
     */
    OrganisationService.prototype.add = function (form_data, query_params) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                throw new Error('Add is not available on the organisation service');
            });
        });
    };
    /**
     * Update is not available on organisation service
     */
    OrganisationService.prototype.update = function (id, form_data, query_params) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                throw new Error('Update is not available on the organisation service');
            });
        });
    };
    /**
     * Delete is not available on organisation service
     */
    OrganisationService.prototype.delete = function (id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                throw new Error('Delete is not available on the organisation service');
            });
        });
    };
    /**
     * Get list of levels for the given building ID
     * @param bld_id Building ID
     */
    OrganisationService.prototype.levels = function (bld_id) {
        return (this.buildings.find(function (i) { return i.id === bld_id; }) || {}).levels;
    };
    /**
     * Get a setting from the organisation or active building
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    OrganisationService.prototype.setting = function (key) {
        return this.building.setting(key) || this._organisation.setting(key);
    };
    Object.defineProperty(OrganisationService.prototype, "building", {
        /** Active building */
        get: function () {
            var _this = this;
            return (this.buildings.find(function (i) { return i.id === _this._active_building; }));
        },
        set: function (bld) {
            if (bld instanceof _building_class__WEBPACK_IMPORTED_MODULE_4__["Building"]) {
                this._active_building = bld.id;
            }
            else {
                this._active_building = bld;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrganisationService.prototype, "buildings", {
        /** List of buildings for the organisation */
        get: function () {
            return this.get('buildings') || [];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get list of available equipment
     * @param id ID of the building to get the list from. i.e. Defaults to the active building
     */
    OrganisationService.prototype.getExtras = function (id, bld_id) {
        var bld = (bld_id ? this.buildings.find(function (i) { return i.id === bld_id; }) : null) || this.building;
        if (bld && id) {
            return bld.extras.filter(function (i) { return i.id.indexOf(id) >= 0; }) || [];
        }
        return [];
    };
    /**
     * Get the first level matching the list of given IDs
     * @param ids List of ID to search with
     */
    OrganisationService.prototype.levelWithID = function (ids) {
        var list = ids instanceof Array ? ids : [ids];
        var bld_list = this.buildings;
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var id = list_1[_i];
            for (var _a = 0, bld_list_1 = bld_list; _a < bld_list_1.length; _a++) {
                var bld = bld_list_1[_a];
                for (var _b = 0, _c = bld.levels; _b < _c.length; _b++) {
                    var lvl = _c[_b];
                    if (lvl.id === id) {
                        return lvl;
                    }
                }
            }
        }
        return null;
    };
    /**
     * Initialise service data
     */
    OrganisationService.prototype.load = function () {
        var _this = this;
        if (localStorage) {
            this._active_building = localStorage.getItem(this.parent.name + ".building");
        }
        return new Promise(function (resolve) {
            _this.loadOrganisation().then(function () {
                _this.loadBuildings().then(function () {
                    _this.loadLevels().then(function () { return resolve(); });
                });
            });
        });
    };
    /**
     * Load organisation data for application
     */
    OrganisationService.prototype.loadOrganisation = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.query({ tags: 'org', engine: true }).then(function (org_data) {
                _this._organisation = new _organisation_class__WEBPACK_IMPORTED_MODULE_3__["Organisation"](_this, org_data[0]);
                _this.set('organisation', _this._organisation);
                _this.shown_error = false;
                resolve();
            }, function (_) {
                if (!_this.shown_error) {
                    _this.shown_error = true;
                    _this.parent.notifyError('Error loading organisation data. Retrying...');
                }
                _this.timeout('load_org', function () { return _this.loadOrganisation().then(function () { return resolve(); }); }, 1000);
            });
        });
    };
    /**
     * Load buildings data for the organisation
     */
    OrganisationService.prototype.loadBuildings = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.query({ tags: 'building', engine: true }).then(function (bld_data) {
                var buildings = bld_data.map(function (i) { return new _building_class__WEBPACK_IMPORTED_MODULE_4__["Building"](_this, i); });
                _this.set('buildings', buildings || []);
                if (!_this._active_building && buildings && buildings.length > 0) {
                    _this._active_building = buildings[0].id;
                }
                resolve();
            }, function (_) {
                _this.parent.notifyError('Error loading building data. Retrying...');
                _this.timeout('load_bld', function () { return _this.loadBuildings().then(function () { return resolve(); }); }, 1000);
            });
        });
    };
    /**
     * Load levels data for the buildings
     */
    OrganisationService.prototype.loadLevels = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.query({ tags: 'level', engine: true }).then(function (lvl_data) {
                resolve();
            }, function (_) {
                _this.parent.notifyError('Error loading level data. Retrying...');
                _this.timeout('load_lvl', function () { return _this.loadLevels().then(function () { return resolve(); }); }, 1000);
            });
        });
    };
    OrganisationService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ factory: function OrganisationService_Factory() { return new OrganisationService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_1__["ComposerService"])); }, token: OrganisationService, providedIn: "root" });
    return OrganisationService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseAPIService"]));



/***/ }),

/***/ "./src/app/services/data/polling/polling.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/services/data/polling/polling.service.ts ***!
  \**********************************************************/
/*! exports provided: PingHistory, PollingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PingHistory", function() { return PingHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PollingService", function() { return PollingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm5/acaprojects-ngx-composer.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.service */ "./src/app/services/data/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");





var PingHistory = /** @class */ (function () {
    function PingHistory(data) {
        this.history = data.history;
        this.last_ping = data.last_ping;
        this.room_email = data.room_email;
        this.room_id = data.room_id;
    }
    return PingHistory;
}());

var SECONDS = 1000;
var MINUTES = 60 * SECONDS;
var PollingService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PollingService, _super);
    function PollingService(_composer) {
        var _this = _super.call(this, _composer) || this;
        _this._composer = _composer;
        _this._name = 'Users';
        _this._api_route = 'pings';
        return _this;
    }
    PollingService.prototype.load = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.interval('poll_endpoint', function () {
                    _this.add({
                        room_id: _this.parent.get('system')
                    });
                }, 10 * MINUTES);
                return [2 /*return*/];
            });
        });
    };
    PollingService.prototype.query = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        throw new Error('Query method not available for polling endpoint');
    };
    PollingService.prototype.show = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        throw new Error('Show method not available for polling endpoint');
    };
    PollingService.prototype.update = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        throw new Error('Put method not available for polling endpoint');
    };
    PollingService.prototype.delete = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        throw new Error('delete method not available for polling endpoint');
    };
    PollingService.prototype.process = function (data) {
        return new PingHistory(data);
    };
    PollingService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ factory: function PollingService_Factory() { return new PollingService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_1__["ComposerService"])); }, token: PollingService, providedIn: "root" });
    return PollingService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseAPIService"]));



/***/ }),

/***/ "./src/app/services/data/spaces/space.class.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/data/spaces/space.class.ts ***!
  \*****************************************************/
/*! exports provided: Space */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Space", function() { return Space; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _base_api_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-api.class */ "./src/app/services/data/base-api.class.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);



var OPTION_DEFAULTS = {
    duration: 60
};
var Space = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Space, _super);
    function Space(service, raw_data) {
        if (raw_data === void 0) { raw_data = {}; }
        var _this = _super.call(this, service, raw_data) || this;
        _this.service = service;
        var settings = raw_data.settings || {};
        _this._level = _this.service.parent.Organisation.levelWithID(raw_data.zones) || { settings: {} };
        _this.long_name = settings.long_name || raw_data.long_name;
        _this.map_id = settings.map_id || raw_data.map_id;
        _this.type = settings.book_type || _this._level.book_type || _this._level.settings.book_type || raw_data.book_type || raw_data.type || 'book';
        _this.can_search = settings.searchable || raw_data.searchable || raw_data.can_search || false;
        _this.can_control = settings.controlable || raw_data.controlable || raw_data.can_control || false;
        _this.hourly_rate = settings.cost_hour || raw_data.cost_hour || raw_data.hourly_rate || 0;
        _this.bookable = settings.bookable || raw_data.bookable || false;
        _this.setup = ((settings.setup || 0) / 60) || raw_data.setup || 0;
        _this.breakdown = ((settings.breakdown || 0) / 60) || raw_data.breakdown || 0;
        _this.capacity = raw_data.capacity || 0;
        _this.was_available = settings.available || raw_data.available || raw_data.was_available || false;
        _this._zones = raw_data.zones || [];
        var raw_bookings = settings.bookings || raw_data.bookings || [];
        _this._bookings = raw_bookings.map(function (i) { return i.id; });
        if (_this.service.parent && _this.service.parent.Bookings) {
            if (raw_bookings) {
                var id_list_1 = [];
                raw_bookings.forEach(function (booking) {
                    var id = booking.id;
                    _this.service.parent.Bookings.removeFrom(_this.id, [id], 'class');
                    id = _this.service.parent.Bookings.addFrom(_this.id, booking, 'class');
                    id_list_1.push(id);
                });
                _this._bookings = id_list_1;
            }
        }
        _this._extras = [];
        _this._linked_spaces = settings.linked_rooms || raw_data.linked_rooms || raw_data.linked_spaces || [];
        return _this;
    }
    Object.defineProperty(Space.prototype, "in_use", {
        /** Whether the space has a booking in progress */
        get: function () {
            return !!this.current;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Space.prototype, "current", {
        /** Get any current in progress meeting */
        get: function () {
            var bookings = this.bookings;
            for (var _i = 0, bookings_1 = bookings; _i < bookings_1.length; _i++) {
                var bkn = bookings_1[_i];
                var status_1 = bkn.status;
                if (status_1 === 'in_progress' || status_1 === 'started') {
                    return bkn;
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Space.prototype, "next", {
        /** Get the next upcoming meeting */
        get: function () {
            var now = dayjs__WEBPACK_IMPORTED_MODULE_2__().valueOf();
            var bookings = this.bookings;
            for (var _i = 0, bookings_2 = bookings; _i < bookings_2.length; _i++) {
                var bkn = bookings_2[_i];
                if (bkn.date > now) {
                    return bkn;
                }
            }
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Space.prototype, "bookings", {
        /** List of stored bookings for the space */
        get: function () {
            var _this = this;
            var booking_list = this.service && this.service.parent && this.service.parent.Bookings
                ? this.service.parent.Bookings.list(function (booking) { return _this._bookings.indexOf(booking.id) >= 0; }) || []
                : [];
            return booking_list.sort(function (a, b) { return a.date - b.date; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Space.prototype, "todays_bookings", {
        /** List of bookings for today */
        get: function () {
            return this.bookingsFor(dayjs__WEBPACK_IMPORTED_MODULE_2__().valueOf());
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Space.prototype, "linked_spaces", {
        /** List of ids for linked spaces */
        get: function () {
            return this._linked_spaces.slice();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Space.prototype, "level", {
        /** Level in which the space is associated */
        get: function () {
            return this._level;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Space.prototype, "zones", {
        /** Engine zones associated with the space */
        get: function () {
            return this._zones.slice();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Get bookings for space
     * @param date Date to filter bookings on
     */
    Space.prototype.bookingsFor = function (date) {
        if (date) {
            var day_1 = dayjs__WEBPACK_IMPORTED_MODULE_2__(date);
            return this.bookings.filter(function (i) { return dayjs__WEBPACK_IMPORTED_MODULE_2__(i.date).isSame(day_1, 'd'); });
        }
        else {
            return this.bookings;
        }
    };
    /**
     * Whether the space is available.
     */
    Space.prototype.isAvailable = function (options) {
        var _this = this;
        options = options
            ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, OPTION_DEFAULTS, options, { room_ids: this.id }) : tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, OPTION_DEFAULTS, { room_ids: this.id });
        return new Promise(function (resolve) {
            _this.service.available(options).then(function (list) {
                for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                    var rm = list_1[_i];
                    if (rm.id === _this.id) {
                        return resolve(true);
                    }
                }
                resolve(false);
            }, function () { return resolve(false); });
        });
    };
    /**
     * Make a copy of this object
     */
    Space.prototype.clone = function () {
        return new Space(this.service, this);
    };
    /**
     * Make a copy of this object without identification data
     */
    Space.prototype.duplicate = function () {
        return new Space(this.service, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this, { id: null, email: null, _bookings: [] }));
    };
    return Space;
}(_base_api_class__WEBPACK_IMPORTED_MODULE_1__["BaseDataClass"]));



/***/ }),

/***/ "./src/app/services/data/spaces/space.utilities.ts":
/*!*********************************************************!*\
  !*** ./src/app/services/data/spaces/space.utilities.ts ***!
  \*********************************************************/
/*! exports provided: generateMockSpace */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMockSpace", function() { return generateMockSpace; });
/* harmony import */ var _bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../bookings/booking.utilities */ "./src/app/services/data/bookings/booking.utilities.ts");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _users_user_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users/user.utilities */ "./src/app/services/data/users/user.utilities.ts");



var SPACE_COUNT = 0;
function generateMockSpace(id, zones) {
    if (!id) {
        id = "space-" + SPACE_COUNT++;
    }
    var name = faker__WEBPACK_IMPORTED_MODULE_1__["name"].firstName() + " " + faker__WEBPACK_IMPORTED_MODULE_1__["name"].lastName() + " Space";
    var linked = Math.floor(Math.random() * 99999) % 2 === 0 && SPACE_COUNT > 1;
    return {
        id: id,
        name: name,
        long_name: name + " with an long name",
        map_id: "" + SPACE_COUNT,
        capacity: Math.floor(Math.random() * 20 + 1) * 2,
        email: name.toLowerCase().split(' ').join('.') + "@" + _users_user_utilities__WEBPACK_IMPORTED_MODULE_2__["USER_DOMAIN"],
        type: faker__WEBPACK_IMPORTED_MODULE_1__["commerce"].productName(),
        searchable: Math.floor(Math.random() * 99999) % 2 === 0,
        controlable: Math.floor(Math.random() * 99999) % 2 === 0,
        bookable: Math.floor(Math.random() * 99999) % 2 === 0,
        cost_hour: Math.floor(Math.random() * 300) * 100,
        setup: Math.floor(Math.random() * 6) * 5,
        breakdown: Math.floor(Math.random() * 6) * 5,
        zones: zones || ['zone_lvl-0'],
        bookings: Array(10).fill(0).map(function (i) { return Object(_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_0__["generateMockBooking"])(); }),
        linked_rooms: linked ? ["space-" + Math.floor(Math.random() * (SPACE_COUNT - 1))] : []
    };
}


/***/ }),

/***/ "./src/app/services/data/spaces/spaces.service.ts":
/*!********************************************************!*\
  !*** ./src/app/services/data/spaces/spaces.service.ts ***!
  \********************************************************/
/*! exports provided: SpacesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpacesService", function() { return SpacesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm5/acaprojects-ngx-composer.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.service */ "./src/app/services/data/base.service.ts");
/* harmony import */ var _space_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space.class */ "./src/app/services/data/spaces/space.class.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");







var SpacesService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SpacesService, _super);
    function SpacesService(_composer) {
        var _this = _super.call(this, _composer) || this;
        _this._composer = _composer;
        _this._name = 'Space';
        _this._api_route = 'rooms';
        _this._compare = function (a, b) { return !a.id.localeCompare(b.id) || !a.email.localeCompare(b.email); };
        _this._list_filter = function (a) {
            var bld = _this.parent.Organisation.building;
            return a.level.bld_id === bld.id;
        };
        return _this;
    }
    /**
     * Get available spaces
     * @param options
     */
    SpacesService.prototype.available = function (options) {
        var _this = this;
        if (!options) {
            throw new Error('Space avilability requires request options');
        }
        if (!options.date) {
            options.date = dayjs__WEBPACK_IMPORTED_MODULE_4__().startOf('m').valueOf();
        }
        var key = "available|" + (options.id ? options.id : '');
        if (!this._promises[key]) {
            this._promises[key] = new Promise(function (resolve, reject) {
                var respond = function (list) {
                    var available_spaces = list.filter(function (i) {
                        var linked = list.filter(function (j) { return i.linked_spaces.indexOf(j.id) >= 0; });
                        return i.was_available && linked.reduce(function (a, v) { return a && v.was_available; }, true);
                    });
                    resolve(available_spaces);
                };
                var error = function (e) { return reject(e); };
                if (options.id) {
                    _this.show(options.id, options).then(function (i) { return respond([i]); }, error);
                }
                else {
                    _this.query(options).then(respond, error);
                }
            });
        }
        return this._promises[key];
    };
    /**
     * Convert raw data into API object
     * @param raw_data Raw API data
     */
    SpacesService.prototype.process = function (raw_data) {
        return new _space_class__WEBPACK_IMPORTED_MODULE_3__["Space"](this, raw_data);
    };
    SpacesService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ factory: function SpacesService_Factory() { return new SpacesService(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_1__["ComposerService"])); }, token: SpacesService, providedIn: "root" });
    return SpacesService;
}(_base_service__WEBPACK_IMPORTED_MODULE_2__["BaseAPIService"]));



/***/ }),

/***/ "./src/app/services/data/systems-manager/systems-manager.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/services/data/systems-manager/systems-manager.service.ts ***!
  \**************************************************************************/
/*! exports provided: SystemsManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SystemsManagerService", function() { return SystemsManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm5/acaprojects-ngx-composer.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/base.class */ "./src/app/shared/base.class.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");






var SystemsManagerService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SystemsManagerService, _super);
    function SystemsManagerService(_composer) {
        var _this = _super.call(this) || this;
        _this._composer = _composer;
        /** Subject for System list */
        _this._list = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        _this._composer.initialised.subscribe(function (state) {
            if (state) {
                _this._resources = _this._composer.systems;
                _this.load();
            }
        });
        return _this;
    }
    Object.defineProperty(SystemsManagerService.prototype, "list", {
        /** List of available systems */
        get: function () {
            return this._list.getValue() || [];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * List to changes on observable
     * @param name Name of the observable
     * @param next Callback for changes to the observable
     */
    SystemsManagerService.prototype.listen = function (name, next) {
        return this._list.subscribe(next);
    };
    /**
     * Get engine module for the given system
     * @param sys_id ID of the system to get the module from
     * @param mod_id ID of the module with the given system
     * @param index Index of the module
     */
    SystemsManagerService.prototype.get = function (sys_id, mod_id, index) {
        return this._composer.bindings.module(sys_id, mod_id, index);
    };
    /**
     * Load Systems
     */
    SystemsManagerService.prototype.load = function () {
        var _this = this;
        if (!this.parent || !this.parent.is_initialised || !this.parent.Users || !this.parent.Users.initialised) {
            return this.timeout('load', function () { return _this.load(); });
        }
        this.loadSystems();
    };
    /**
     * Load one page of systems
     * @param offset Item offset for the page to load
     */
    SystemsManagerService.prototype.loadSystems = function (offset, limit) {
        var _this = this;
        if (offset === void 0) { offset = 0; }
        if (limit === void 0) { limit = 250; }
        this._resources.query({ offset: offset, limit: limit }).then(function (list) {
            var total = _this._resources.last_total;
            var systems = _this.list.concat(list);
            _this._list.next(systems.sort(function (a, b) { return (a.name || '').localeCompare(b.name); }));
            if (systems.length < total) {
                _this.loadSystems(systems.length);
            }
        });
    };
    SystemsManagerService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function SystemsManagerService_Factory() { return new SystemsManagerService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_1__["ComposerService"])); }, token: SystemsManagerService, providedIn: "root" });
    return SystemsManagerService;
}(_shared_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"]));



/***/ }),

/***/ "./src/app/services/data/users/user.class.ts":
/*!***************************************************!*\
  !*** ./src/app/services/data/users/user.class.ts ***!
  \***************************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm5/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _base_api_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base-api.class */ "./src/app/services/data/base-api.class.ts");



var User = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](User, _super);
    function User(service, raw_data) {
        if (raw_data === void 0) { raw_data = {}; }
        var _this = _super.call(this, service, raw_data) || this;
        _this.service = service;
        _this.first_name = raw_data.first_name;
        _this.last_name = raw_data.last_name;
        _this.windows_id = raw_data.email;
        _this.type = raw_data.visitor ? 'external' : raw_data.type || 'internal';
        _this.phone = raw_data.phone || raw_data.mobile;
        _this.business_unit = raw_data.business_unit || raw_data.department;
        _this._organisation = raw_data.organisation || { id: raw_data.organisation_id, name: raw_data.organisation_name };
        _this.external = _this.type === 'external';
        _this._location = null;
        _this.staff_code = raw_data.staff_code || raw_data.fmno;
        _this._delegates = raw_data.delegates;
        return _this;
    }
    Object.defineProperty(User.prototype, "organisation", {
        /** Organisation the user is associated with */
        get: function () {
            return this._organisation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "last_location", {
        /** Map location of the user */
        get: function () {
            return this._location ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (this._location)) : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(User.prototype, "delegates", {
        /** List of users that this user can act on behalf */
        get: function () {
            return (this._delegates || []).slice();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Ask the server for the users current location
     */
    User.prototype.locate = function () {
        var _this = this;
        var service = this.service.parent || {};
        return new Promise(function (resolve, reject) {
            if (service.Location) {
                service.Location.show(_this.id, { desk: _this.email }).then(function (l) {
                    _this._location = l;
                    resolve(l);
                }, function (e) { return reject(e); });
            }
            else {
                resolve(null);
            }
        });
    };
    /**
     * Whether user is available during the given period
     * @param start Start time as a unix timestamp with milliseconds
     * @param end End time as a unix timestamp with milliseconds
     */
    User.prototype.available = function (start, end) {
        var _this = this;
        return new Promise(function (resolve) {
            _this.service.query({ email: _this.email, start: start, end: end })
                .then(function (l) { return resolve(l && l.length > 0); }, function (_) { return resolve(false); });
        });
    };
    /**
     * Make a copy of this object
     */
    User.prototype.clone = function () {
        return new User(this.service, this);
    };
    /**
     * Make a copy of this object without identification data
     */
    User.prototype.duplicate = function () {
        return new User(this.service, tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this, { id: null, email: null }));
    };
    /**
     * Initialise the form field metadata for the field
     */
    User.prototype.initialiseFormFields = function () {
        var edit = !!this.id;
        var fields = [
            new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["ADynamicFormField"]({
                key: 'name',
                type: 'input',
                value: this.name,
                hide: true
            }),
            new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["ADynamicFormField"]({
                key: 'first_name',
                label: 'First Name',
                type: 'input',
                value: this.first_name,
                required: true
            }),
            new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["ADynamicFormField"]({
                key: 'last_name',
                label: 'Last Name',
                type: 'input',
                value: this.last_name,
                required: true
            }),
            new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__["ADynamicFormField"]({
                key: 'email',
                label: 'Email',
                type: 'input',
                value: this.email,
                required: true,
                attributes: { type: 'email' }
            })
        ];
        return fields;
    };
    return User;
}(_base_api_class__WEBPACK_IMPORTED_MODULE_2__["BaseDataClass"]));



/***/ }),

/***/ "./src/app/services/data/users/user.utilities.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/data/users/user.utilities.ts ***!
  \*******************************************************/
/*! exports provided: USER_DOMAIN, generateMockUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_DOMAIN", function() { return USER_DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMockUser", function() { return generateMockUser; });
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");


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
        id = "user-" + USER_COUNT++;
    }
    if (!name) {
        name = faker__WEBPACK_IMPORTED_MODULE_0__["name"].firstName() + " " + faker__WEBPACK_IMPORTED_MODULE_0__["name"].lastName();
    }
    if (external === undefined) {
        external = !((Math.random() * 99999) % 2);
    }
    var organisation = external ? faker__WEBPACK_IMPORTED_MODULE_0__["company"].companyName() : USER_DOMAIN.split('.')[0];
    var delegates = [];
    var delegate_count = Math.min(Math.random() * 4 + 1, USER_EMAILS.length);
    for (var i = 0; i < delegate_count; i++) {
        delegates.push(USER_EMAILS[Math.floor(Math.random() * USER_EMAILS.length)]);
    }
    delegates = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_1__["unique"])(delegates);
    var email = name.split(' ').join('.').toLowerCase() + "@" + (external ? 'not-' : '') + USER_DOMAIN;
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


/***/ }),

/***/ "./src/app/services/data/users/users.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/data/users/users.service.ts ***!
  \******************************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm5/acaprojects-ngx-composer.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base.service */ "./src/app/services/data/base.service.ts");
/* harmony import */ var _user_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.class */ "./src/app/services/data/users/user.class.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");












var UsersService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsersService, _super);
    function UsersService(_composer, uhttp, location) {
        var _this = _super.call(this, _composer) || this;
        _this._composer = _composer;
        _this.uhttp = uhttp;
        _this.location = location;
        _this._name = 'Users';
        _this._api_route = 'users';
        _this._compare = function (a, b) { return !a.id.localeCompare(b.id) || !a.email.localeCompare(b.email); };
        _this.set('current_user', new _user_class__WEBPACK_IMPORTED_MODULE_6__["User"](_this, { id: 'local_user', name: 'Local User' }));
        return _this;
    }
    Object.defineProperty(UsersService.prototype, "current", {
        /** Currently logged in user */
        get: function () {
            return this.get('current_user');
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the access token and expiry for the user
     * @param token OAuth bearer token
     * @param expiry Expiry epoch timestamp in ms
     * @param reload Whether to reload the page after setting tokens
     */
    UsersService.prototype.setToken = function (token, expiry, reload) {
        if (reload === void 0) { reload = true; }
        if (!expiry) {
            expiry = dayjs__WEBPACK_IMPORTED_MODULE_7__()
                .add(7, 'd').endOf('d')
                .valueOf();
        }
        var path = "" + location.origin + (this.parent.setting('composer.route') || '') + "/oauth-resp.html";
        var client_id = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_4__["Md5"].hashStr(path);
        if (sessionStorage) {
            sessionStorage.setItem(client_id + "_access_token", token);
            sessionStorage.setItem(client_id + "_expires_at", "" + expiry);
        }
        if (localStorage) {
            localStorage.setItem(client_id + "_access_token", token);
            localStorage.setItem(client_id + "_expires_at", "" + expiry);
        }
        if (reload) {
            this.location.go(this.location.path());
        }
        return path;
    };
    /**
     * Post login request to the API
     * @param query_params Key value pairs to pass into
     * @param options Options for the login request
     */
    UsersService.prototype.login = function (query_params, options) {
        var _this = this;
        if (options === void 0) { options = {}; }
        if (!this._promises['login']) {
            this._promises['login'] = new Promise(function (resolve, reject) {
                _this.set('status', 'loading');
                var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]();
                if (!options || options.form !== false) {
                    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
                }
                var url = (options ? options.url : '') || '/auth/signin';
                _this.uhttp.post(url, query_params, { headers: headers }).subscribe(function (_) { return null; }, function (e) { return reject(e); }, function () {
                    _this._composer.auth.authorise();
                    resolve();
                });
            });
        }
        return this._promises['login'];
    };
    /**
     * Logout of user and redirect to logout URL
     */
    UsersService.prototype.logout = function () {
        this._composer.auth.logout();
    };
    /**
     * Load initial data for the service
     */
    UsersService.prototype.load = function (tries) {
        var _this = this;
        if (tries === void 0) { tries = 0; }
        this.set('status', 'loading');
        return new Promise(function (resolve) {
            if (tries > 4) {
                _this.set('status', 'invalid');
                return resolve();
            }
            _this.show('current', { engine: true }).then(function (current_user) {
                _this.set('status', 'available');
                _this.set('current_user', current_user);
                if (_this.parent && _this.parent.setting('app.user.grab_api_details')) {
                    _this.show(current_user.email).then(function (user) {
                        _this.set('current_user', user);
                        resolve();
                    }, function () { return _this.timeout('load', function () { return _this.load(++tries).then(function () { return resolve(); }); }); });
                }
                else {
                    resolve();
                }
            }, function () { return _this.timeout('load', function () { return _this.load(++tries).then(function () { return resolve(); }); }); });
        });
    };
    /**
     * Convert raw API data into a valid User Object
     * @param raw_item Raw API data
     */
    UsersService.prototype.process = function (raw_data) {
        return new _user_class__WEBPACK_IMPORTED_MODULE_6__["User"](this, raw_data);
    };
    UsersService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ factory: function UsersService_Factory() { return new UsersService(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__["ComposerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); }, token: UsersService, providedIn: "root" });
    return UsersService;
}(_base_service__WEBPACK_IMPORTED_MODULE_5__["BaseAPIService"]));



/***/ }),

/***/ "./src/app/services/hotkeys.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/hotkeys.service.ts ***!
  \*********************************************/
/*! exports provided: HotkeysService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HotkeysService", function() { return HotkeysService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



/** List of keys that cannot be in a combination by themselves or with each other */
var INVALID_STANDALONE_KEYS = ['control', 'shift', 'alt', 'meta', 'os'];
var HotkeysService = /** @class */ (function () {
    function HotkeysService() {
        var _this = this;
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
            var code = _this.mapKey((event.code || '').toLowerCase());
            if (_this.last_down !== code) {
                if (!_this.keydown_states[code]) {
                    _this.keydown_states[code] = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
                    _this.keydown_observers[code] = _this.keydown_states[code].asObservable();
                }
                _this.keydown_states[code].next(_this.counter++);
                if (_this.combo_end.indexOf(code) >= 0) {
                    event.preventDefault();
                }
                _this.last_down = code;
            }
        });
        window.addEventListener('keyup', function (event) {
            var code = _this.mapKey((event.code || '').toLowerCase());
            _this.keydown_states[code].next(null);
            if (_this.last_down === code) {
                _this.last_down = null;
            }
        });
    }
    /**
     * Listen to the given key combination
     * @param combo Array of key codes to listen to or a hotkey string e.g. `Alt+Shift+KeyK`
     * @param next Callback for combination presses
     */
    HotkeysService.prototype.listen = function (combo, next) {
        var _this = this;
        combo = (combo instanceof Array ? combo : combo.split('+'));
        var combination = combo.map(function (i) { return _this.mapKey(i.toLowerCase()); });
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
                        for (var _i = 0, combination_1 = combination; _i < combination_1.length; _i++) {
                            var key = combination_1[_i];
                            var state = _this.keydown_states[key];
                            presses.push(state ? state.getValue() || -1 : -1);
                        }
                        // Check that keys are pressed in the correct order
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
    };
    /**
     * Map key codes with multiple versions to simple form
     * @param code Code to transform
     */
    HotkeysService.prototype.mapKey = function (code) {
        if (code.indexOf('alt') || code.indexOf('shift') || code.indexOf('control')) {
            return code.replace('left', '').replace('right', '');
        }
        return code;
    };
    /**
     * Update the list of the last keys in combinations to allow for prevent default actions on pre-existing hotkeys
     */
    HotkeysService.prototype.updateCombinationEndList = function () {
        var key_list = [];
        for (var _i = 0, _a = this.registered_combos; _i < _a.length; _i++) {
            var combo = _a[_i];
            this.combo_end.push(combo[combo.length - 1]);
        }
        this.combo_end = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_1__["unique"])(key_list);
    };
    /**
     * Checks if the given hotkey combination is allowed and valid
     * @param combo Array of key codes
     */
    HotkeysService.prototype.validCombination = function (combo) {
        var non_meta = 0;
        for (var _i = 0, combo_1 = combo; _i < combo_1.length; _i++) {
            var key = combo_1[_i];
            if (INVALID_STANDALONE_KEYS.indexOf(key) < 0) {
                non_meta++;
            }
        }
        return non_meta > 0;
    };
    HotkeysService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function HotkeysService_Factory() { return new HotkeysService(); }, token: HotkeysService, providedIn: "root" });
    return HotkeysService;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var _shared_globals_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/globals/application */ "./src/app/shared/globals/application.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_base_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/base.class */ "./src/app/shared/base.class.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");








var SettingsService = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](SettingsService, _super);
    function SettingsService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        /** Map of settings */
        _this._settings = { api: {}, local: {}, session: {} };
        /** Store for promises */
        _this._promises = {};
        /** Name of the application */
        _this._app_name = 'ACA';
        var now = dayjs__WEBPACK_IMPORTED_MODULE_4__();
        var built = now.isSame(_shared_globals_application__WEBPACK_IMPORTED_MODULE_3__["build"], 'd') ? "Today at " + _shared_globals_application__WEBPACK_IMPORTED_MODULE_3__["build"].format('h:mmA') : _shared_globals_application__WEBPACK_IMPORTED_MODULE_3__["build"].format('D MMM YYYY, h:mmA');
        _this.log('CORE', "" + _shared_globals_application__WEBPACK_IMPORTED_MODULE_3__["core_version"], null, 'debug', true);
        _this.log('APP', _shared_globals_application__WEBPACK_IMPORTED_MODULE_3__["version"] + " | Built: " + built, null, 'debug', true);
        _this.init();
        return _this;
    }
    /**
     * Initialise the settings
     */
    SettingsService.prototype.init = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.loadFromFile('api')];
                    case 1:
                        _a.sent();
                        this.loadStore('local', localStorage);
                        this.loadStore('session', sessionStorage);
                        if (this._settings.api.debug) {
                            window.debug = true;
                        }
                        if (this._settings.api.app && this._settings.api.app.name) {
                            this._app_name = this._settings.api.app.name;
                        }
                        this.log('Settings', 'Successfully loaded settings');
                        this._initialised.next(true);
                        return [2 /*return*/];
                }
            });
        });
    };
    Object.defineProperty(SettingsService.prototype, "app_name", {
        /** Whether settings service has initialised */
        get: function () { return this._app_name; },
        enumerable: true,
        configurable: true
    });
    /**
     * Log data to the browser console
     * @param type Type of message
     * @param msg Message body
     * @param args array of argments to log to the console
     * @param stream Stream to emit the console on. 'debug', 'log', 'warn' or 'error'
     * @param force Whether to force message to be emitted when debug is disabled
     */
    SettingsService.prototype.log = function (type, msg, args, stream, force) {
        if (stream === void 0) { stream = 'debug'; }
        if (force === void 0) { force = false; }
        if (window.debug || force) {
            var colors = ['color: #E91E63', 'color: #3F51B5', 'color: default'];
            if (args) {
                console[stream].apply(console, ["%c[" + this.app_name + "]%c[" + type + "] %c" + msg].concat(colors, [args]));
            }
            else {
                console[stream].apply(console, ["%c[" + this.app_name + "]%c[" + type + "] %c" + msg].concat(colors));
            }
        }
    };
    /**
     * Get a setting
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    SettingsService.prototype.get = function (key) {
        var keys = key.split('.');
        var value = null;
        if (keys[0] === 'session') {
            keys.shift();
            value = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__["getItemWithKeys"])(keys, this._settings.session);
        }
        else if (keys[0] === 'local') {
            keys.shift();
            value = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__["getItemWithKeys"])(keys, this._settings.local);
        }
        else {
            value = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__["getItemWithKeys"])(keys, this._settings.api) ||
                Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__["getItemWithKeys"])(keys, this._settings.session) ||
                Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__["getItemWithKeys"])(keys, this._settings.local);
        }
        return value;
    };
    /**
     * Load settings from the given Storage object
     * @param name Root key for the settings
     * @param store Storage item to add to the load into the settings
     */
    SettingsService.prototype.loadStore = function (name, store) {
        if (store) {
            for (var i = 0; i < store.length; i++) {
                var key = store.key(i);
                var item = store.getItem(key);
                if (item) {
                    this._settings[name][key] = item;
                }
            }
        }
    };
    /**
     * Load setting data from a file
     * @param name Namespace to add file data to
     * @param file URL to file to load setting data from
     */
    SettingsService.prototype.loadFromFile = function (name, file, tries) {
        if (file === void 0) { file = 'assets/settings.json'; }
        if (tries === void 0) { tries = 0; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var key;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                if (file !== 'assets/settings.json' && tries > 5) {
                    return [2 /*return*/, Promise.resolve()];
                }
                key = "load|" + name + "|" + file;
                if (!this._promises[key]) {
                    this._promises[key] = new Promise(function (resolve, reject) {
                        _this.http.get(file).subscribe(function (data) {
                            _this._settings[name] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, (_this._settings[name] || {}), (data || {}));
                        }, function (e) {
                            _this.log('Settings', "Failed to load settings from \"" + file + "\"");
                            _this._promises[key] = null;
                            _this.loadFromFile(name, file, ++tries).then(function () { return resolve(); });
                        }, function () { return resolve(); });
                    });
                }
                return [2 /*return*/, this._promises[key]];
            });
        });
    };
    SettingsService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ factory: function SettingsService_Factory() { return new SettingsService(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: SettingsService, providedIn: "root" });
    return SettingsService;
}(_shared_base_class__WEBPACK_IMPORTED_MODULE_5__["BaseClass"]));



/***/ }),

/***/ "./src/app/shared/base.class.ts":
/*!**************************************!*\
  !*** ./src/app/shared/base.class.ts ***!
  \**************************************/
/*! exports provided: BaseClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseClass", function() { return BaseClass; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var BaseClass = /** @class */ (function () {
    function BaseClass() {
        /** Store for named timers */
        this._timers = {};
        /** Store for named intervals */
        this._intervals = {};
        /** Store for named subscription unsub callbacks */
        this._subscriptions = {};
        /** Subject which stores the initialised state of the object */
        this._initialised = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
    }
    Object.defineProperty(BaseClass.prototype, "initialised", {
        /** Observable of the initialised state of the object */
        get: function () {
            return this._initialised;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseClass.prototype, "is_initialised", {
        /** Whether the object has been initialised */
        get: function () {
            return this._initialised.getValue();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Creates a named timer
     * @param name Name of the timer
     * @param fn Callback function for the timer
     * @param delay Callback delay
     */
    BaseClass.prototype.timeout = function (name, fn, delay) {
        var _this = this;
        if (delay === void 0) { delay = 300; }
        if (name && fn && fn instanceof Function) {
            this.clearTimeout(name);
            this._timers[name] = setTimeout(function () {
                fn();
                _this._timers[name] = null;
            }, delay);
        }
        else {
            throw new Error(name ? 'Cannot create named timeout without a name' : 'Cannot create a timeout without a callback');
        }
    };
    /**
     * Clears the named timer
     * @param name Timer name
     */
    BaseClass.prototype.clearTimeout = function (name) {
        if (this._timers[name]) {
            clearTimeout(this._timers[name]);
            this._timers[name] = null;
        }
    };
    /**
     * Creates a named interval
     * @param name Name of the interval
     * @param fn Callback function for the interval
     * @param delay Callback delay
     */
    BaseClass.prototype.interval = function (name, fn, delay) {
        if (delay === void 0) { delay = 300; }
        if (name && fn && fn instanceof Function) {
            this.clearInterval(name);
            this._intervals[name] = setInterval(function () { return fn(); }, delay);
        }
        else {
            throw new Error(name ? 'Cannot create named interval without a name' : 'Cannot create a interval without a callback');
        }
    };
    /**
     * Clears the named interval
     * @param name Timer name
     */
    BaseClass.prototype.clearInterval = function (name) {
        if (this._intervals[name]) {
            clearInterval(this._intervals[name]);
            this._intervals[name] = null;
        }
    };
    /**
     * Store named subscription
     * @param name Name of the subscription
     * @param unsub Unsubscribe callback or Subscription object
     */
    BaseClass.prototype.subscription = function (name, unsub) {
        this.unsub(name);
        this._subscriptions[name] = unsub;
    };
    /**
     * Call unsubscribe callback with the given name
     * @param name
     */
    BaseClass.prototype.unsub = function (name) {
        if (this._subscriptions && this._subscriptions[name]) {
            if (this._subscriptions[name] instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]) {
                this._subscriptions[name].unsubscribe();
            }
            else if (this._subscriptions[name] instanceof Function) {
                this._subscriptions[name]();
            }
            this._subscriptions[name] = null;
        }
    };
    return BaseClass;
}());



/***/ }),

/***/ "./src/app/shared/base.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/shared/base.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_BaseComponent, View_BaseComponent_0, View_BaseComponent_Host_0, BaseComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BaseComponent", function() { return RenderType_BaseComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BaseComponent_0", function() { return View_BaseComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BaseComponent_Host_0", function() { return View_BaseComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponentNgFactory", function() { return BaseComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.component */ "./src/app/shared/base.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 


var styles_BaseComponent = [""];
var RenderType_BaseComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_BaseComponent, data: {} });

function View_BaseComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [], null, null); }
function View_BaseComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "a-very-basic-component-base-that-should-not-be-used", [], null, null, null, View_BaseComponent_0, RenderType_BaseComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 180224, null, 0, _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"], [], null, null)], null, null); }
var BaseComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("a-very-basic-component-base-that-should-not-be-used", _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"], View_BaseComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/base.component.ts":
/*!******************************************!*\
  !*** ./src/app/shared/base.component.ts ***!
  \******************************************/
/*! exports provided: BaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseComponent", function() { return BaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.class */ "./src/app/shared/base.class.ts");



var BaseComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BaseComponent, _super);
    function BaseComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseComponent.prototype.ngOnDestroy = function () {
        // Clear local timers
        for (var key in this._timers) {
            if (this._timers.hasOwnProperty(key)) {
                this.clearTimeout(key);
            }
        }
        // Clear local intervals
        for (var key in this._intervals) {
            if (this._intervals.hasOwnProperty(key)) {
                this.clearInterval(key);
            }
        }
        // Clear local subscriptions
        for (var key in this._subscriptions) {
            if (this._subscriptions.hasOwnProperty(key)) {
                this.unsub(key);
            }
        }
    };
    return BaseComponent;
}(_base_class__WEBPACK_IMPORTED_MODULE_2__["BaseClass"]));



/***/ }),

/***/ "./src/app/shared/components/duration-field/duration-field.component.ngfactory.js":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/duration-field/duration-field.component.ngfactory.js ***!
  \****************************************************************************************/
/*! exports provided: RenderType_CustomDurationFieldComponent, View_CustomDurationFieldComponent_0, View_CustomDurationFieldComponent_Host_0, CustomDurationFieldComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CustomDurationFieldComponent", function() { return RenderType_CustomDurationFieldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomDurationFieldComponent_0", function() { return View_CustomDurationFieldComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomDurationFieldComponent_Host_0", function() { return View_CustomDurationFieldComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDurationFieldComponentNgFactory", function() { return CustomDurationFieldComponentNgFactory; });
/* harmony import */ var _duration_field_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./duration-field.component.scss.shim.ngstyle */ "./src/app/shared/components/duration-field/duration-field.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory */ "./node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-dropdown */ "./node_modules/@acaprojects/ngx-dropdown/fesm5/acaprojects-ngx-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _duration_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duration-field.component */ "./src/app/shared/components/duration-field/duration-field.component.ts");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm5/acaprojects-ngx-dynamic-forms.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_CustomDurationFieldComponent = [_duration_field_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CustomDurationFieldComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CustomDurationFieldComponent, data: {} });

function View_CustomDurationFieldComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "a-dropdown", [["placeholder", "Select duration..."]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.active_duration = $event) !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = (_co.setValue($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ADropdownComponent_0"], _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ADropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4767744, null, 0, _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__["ADropdownComponent"], [], { items: [0, "items"], placeholder: [1, "placeholder"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__["ADropdownComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.options; var currVal_8 = "Select duration..."; _ck(_v, 2, 0, currVal_7, currVal_8); var currVal_9 = _co.active_duration; _ck(_v, 4, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_CustomDurationFieldComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CustomDurationFieldComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.group; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CustomDurationFieldComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "custom-duration-field", [], null, null, null, View_CustomDurationFieldComponent_0, RenderType_CustomDurationFieldComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _duration_field_component__WEBPACK_IMPORTED_MODULE_6__["CustomDurationFieldComponent"], [_acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_7__["ADynamicFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CustomDurationFieldComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("custom-duration-field", _duration_field_component__WEBPACK_IMPORTED_MODULE_6__["CustomDurationFieldComponent"], View_CustomDurationFieldComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/components/duration-field/duration-field.component.scss.shim.ngstyle.js":
/*!************************************************************************************************!*\
  !*** ./src/app/shared/components/duration-field/duration-field.component.scss.shim.ngstyle.js ***!
  \************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHVyYXRpb24tZmllbGQvZHVyYXRpb24tZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBNkJBOztjQUFBO0FBV0E7O3NCQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvZHVyYXRpb24tZmllbGQvZHVyYXRpb24tZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"];



/***/ }),

/***/ "./src/app/shared/components/duration-field/duration-field.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/duration-field/duration-field.component.ts ***!
  \******************************************************************************/
/*! exports provided: CustomDurationFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDurationFieldComponent", function() { return CustomDurationFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm5/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/data/bookings/booking.utilities */ "./src/app/services/data/bookings/booking.utilities.ts");
/* harmony import */ var _utilities_general_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var _globals_form_fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globals/form-fields */ "./src/app/shared/globals/form-fields.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);








var CustomDurationFieldComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomDurationFieldComponent, _super);
    function CustomDurationFieldComponent(field, group) {
        var _this = _super.call(this) || this;
        _this.field = field;
        _this.group = group;
        /** Step size for available times */
        _this.block_size = 15;
        /** List of available durations */
        _this.options = [];
        return _this;
    }
    CustomDurationFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.group) {
            if (this.group.controls.date) {
                this.date_control = this.group.controls.date;
                this.subscription('date', this.date_control.valueChanges.subscribe(function () { return _this.calculateAvailableDurations(); }));
            }
            if (this.group.controls.room || this.group.controls.space) {
                this.space_control = this.group.controls.room || this.group.controls.space;
                this.subscription('space', this.space_control.valueChanges.subscribe(function () { return _this.calculateAvailableDurations(); }));
            }
            this.subscription('control', this.field.control.valueChanges.subscribe(function () { return _this.updateDisplay(); }));
        }
        this.calculateAvailableDurations();
    };
    /**
     * Update the active value displayed on the dropdown
     */
    CustomDurationFieldComponent.prototype.updateDisplay = function () {
        var _this = this;
        if (this.options && this.options.length > 0) {
            if (!this.active_duration) {
                if (this.field.getValue()) {
                    this.active_duration = this.options.find(function (i) { return i.id === _this.field.getValue(); });
                }
                if (!this.active_duration) {
                    this.active_duration = this.options[0];
                    this.setValue(this.options[0]);
                }
            }
            else if (!this.options.find(function (i) { return i.id === _this.active_duration.id; })) {
                var diff = 9999;
                var new_opt = null;
                for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
                    var option = _a[_i];
                    if (Math.abs(option.id - this.active_duration.id) < diff) {
                        diff = Math.abs(option.id - this.active_duration.id);
                        new_opt = option;
                    }
                }
                if (new_opt) {
                    this.active_duration = new_opt;
                    this.setValue(new_opt);
                }
            }
        }
    };
    /**
     * Generate a list of times selectable by the user
     */
    CustomDurationFieldComponent.prototype.calculateAvailableDurations = function () {
        this.options = [];
        var date = dayjs__WEBPACK_IMPORTED_MODULE_7__().startOf('m');
        var max_duration = this.field.metadata ? this.field.metadata.max_duration || 600 : 600;
        var min_duration = this.field.metadata ? this.field.metadata.min_duration || 30 : 30;
        var end = date.add(max_duration, 'm');
        if (this.space_control) {
            // Get times based off available times in space
            if (this.date_control && this.date_control.value) {
                date = dayjs__WEBPACK_IMPORTED_MODULE_7__(this.date_control.value).startOf('m');
            }
            var slot = Object(_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_4__["getNextFreeBookingSlot"])(this.space_control.value.bookings, date.valueOf(), min_duration);
            if (slot) {
                // Check if slot is after the active date
                date = slot.start > date.valueOf() ? dayjs__WEBPACK_IMPORTED_MODULE_7__(slot.start).startOf('m') : date;
            }
            end = slot ? dayjs__WEBPACK_IMPORTED_MODULE_7__(slot.end).startOf('m') : dayjs__WEBPACK_IMPORTED_MODULE_7__(date).add(max_duration, 'm');
        }
        end = end.endOf('m');
        // Get available durations between the date and end times
        date = date.add(min_duration, 'm').startOf('m');
        var duration = min_duration;
        for (; date.isBefore(end, 's'); date = date.add(this.block_size, 'm')) {
            this.options.push({ id: duration, name: Object(_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_5__["humaniseDuration"])(duration) });
            duration += 15;
            if (this.options.length > Math.floor((max_duration - min_duration) / this.block_size)) {
                break;
            }
        }
        this.updateDisplay();
    };
    /**
     * Update the value of the form field
     * @param value New value
     */
    CustomDurationFieldComponent.prototype.setValue = function (block) {
        this.field.setValue(block.id);
    };
    return CustomDurationFieldComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));

_globals_form_fields__WEBPACK_IMPORTED_MODULE_6__["FORM_FIELDS"].duration = CustomDurationFieldComponent;


/***/ }),

/***/ "./src/app/shared/components/time-field/time-field.component.ngfactory.js":
/*!********************************************************************************!*\
  !*** ./src/app/shared/components/time-field/time-field.component.ngfactory.js ***!
  \********************************************************************************/
/*! exports provided: RenderType_CustomTimeFieldComponent, View_CustomTimeFieldComponent_0, View_CustomTimeFieldComponent_Host_0, CustomTimeFieldComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CustomTimeFieldComponent", function() { return RenderType_CustomTimeFieldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomTimeFieldComponent_0", function() { return View_CustomTimeFieldComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomTimeFieldComponent_Host_0", function() { return View_CustomTimeFieldComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTimeFieldComponentNgFactory", function() { return CustomTimeFieldComponentNgFactory; });
/* harmony import */ var _time_field_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./time-field.component.scss.shim.ngstyle */ "./src/app/shared/components/time-field/time-field.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory */ "./node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-dropdown */ "./node_modules/@acaprojects/ngx-dropdown/fesm5/acaprojects-ngx-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _time_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time-field.component */ "./src/app/shared/components/time-field/time-field.component.ts");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm5/acaprojects-ngx-dynamic-forms.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_CustomTimeFieldComponent = [_time_field_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CustomTimeFieldComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CustomTimeFieldComponent, data: {} });

function View_CustomTimeFieldComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "a-dropdown", [["placeholder", "Select time..."]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.active_time = $event) !== false);
        ad = (pd_0 && ad);
    } if (("ngModelChange" === en)) {
        var pd_1 = (_co.setValue($event) !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ADropdownComponent_0"], _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ADropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4767744, null, 0, _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__["ADropdownComponent"], [], { items: [0, "items"], placeholder: [1, "placeholder"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__["ADropdownComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = _co.times; var currVal_8 = "Select time..."; _ck(_v, 2, 0, currVal_7, currVal_8); var currVal_9 = _co.active_time; _ck(_v, 4, 0, currVal_9); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_CustomTimeFieldComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CustomTimeFieldComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.group; _ck(_v, 1, 0, currVal_0); }, null); }
function View_CustomTimeFieldComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "custom-time-field", [], null, null, null, View_CustomTimeFieldComponent_0, RenderType_CustomTimeFieldComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _time_field_component__WEBPACK_IMPORTED_MODULE_6__["CustomTimeFieldComponent"], [_acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_7__["ADynamicFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CustomTimeFieldComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("custom-time-field", _time_field_component__WEBPACK_IMPORTED_MODULE_6__["CustomTimeFieldComponent"], View_CustomTimeFieldComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/components/time-field/time-field.component.scss.shim.ngstyle.js":
/*!****************************************************************************************!*\
  !*** ./src/app/shared/components/time-field/time-field.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdGltZS1maWVsZC90aW1lLWZpZWxkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQTZCQTs7Y0FBQTtBQVdBOztzQkFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RpbWUtZmllbGQvdGltZS1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogI2ZmZjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzFmNDBlNjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG5cbiRiYXNlLXNpemU6IDIwcHg7XG4kdGFibGV0LXNpemU6IDIwcHg7XG4kbW9iaWxlLXNpemU6IDIwcHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"];



/***/ }),

/***/ "./src/app/shared/components/time-field/time-field.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/time-field/time-field.component.ts ***!
  \**********************************************************************/
/*! exports provided: CustomTimeFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomTimeFieldComponent", function() { return CustomTimeFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm5/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/data/bookings/booking.utilities */ "./src/app/services/data/bookings/booking.utilities.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _globals_form_fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globals/form-fields */ "./src/app/shared/globals/form-fields.ts");







var CustomTimeFieldComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomTimeFieldComponent, _super);
    function CustomTimeFieldComponent(field, group) {
        var _this = _super.call(this) || this;
        _this.field = field;
        _this.group = group;
        /** Step size for available times */
        _this.block_size = 5;
        /** Step size for available times */
        _this.min_size = _this.block_size * 6;
        return _this;
    }
    CustomTimeFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.group) {
            if (this.group.controls.date) {
                this.date_control = this.group.controls.date;
                this.subscription('date', this.date_control.valueChanges.subscribe(function () { return _this.updateDisplay(true); }));
            }
            if (this.group.controls.room || this.group.controls.space) {
                this.space_control = this.group.controls.room || this.group.controls.space;
                this.subscription('space', this.space_control.valueChanges.subscribe(function () { return _this.updateDisplay(); }));
            }
            this.subscription('control', this.field.control.valueChanges.subscribe(function () { return _this.updateDisplay(); }));
        }
        this.calculateAvailableTimes();
        if (this.date_control) {
            var value_1 = this.date_control.value;
            if (!this.times.find(function (block) { return block.value === value_1; })) {
                this.setValue(this.times[0]);
            }
        }
    };
    /**
     * Update the active value displayed on the dropdown
     * @param from_ref Whether new value was generated from a reference field
     */
    CustomTimeFieldComponent.prototype.updateDisplay = function (from_ref) {
        if (from_ref === void 0) { from_ref = false; }
        if (this.times) {
            for (var _i = 0, _a = this.times; _i < _a.length; _i++) {
                var time = _a[_i];
                if (this.field.getValue() === time.id) {
                    this.active_time = time;
                    break;
                }
            }
            if (!this.field.getValue()) {
                // Initialise with date time set on date control
                if (this.date_control) {
                    var date = dayjs__WEBPACK_IMPORTED_MODULE_5__(this.date_control.value);
                    date = date.minute(Math.ceil(date.minute() / 5) * 5);
                    var date_str = date.format('HH:mm');
                    for (var _b = 0, _c = this.times; _b < _c.length; _b++) {
                        var time = _c[_b];
                        if (date.valueOf() - time.value <= 0) {
                            this.active_time = time;
                            this.setValue(time, true);
                            break;
                        }
                    }
                }
                // Set to default value
                if (!this.field.getValue()) {
                    this.active_time = this.times[0];
                    this.setValue(this.times[0], from_ref);
                }
            }
        }
    };
    /**
     * Generate a list of times selectable by the user
     */
    CustomTimeFieldComponent.prototype.calculateAvailableTimes = function () {
        this.times = [];
        var date = dayjs__WEBPACK_IMPORTED_MODULE_5__().startOf('m');
        var book_ahead = this.field.metadata ? this.field.metadata.book_ahead || 660 : 660; // 11 hours default
        var min_duration = this.field.metadata ? this.field.metadata.min_duration || 30 : 30;
        if (this.space_control) {
            // Get times based off available times in space
            var slots = Object(_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_4__["getFreeBookingSlots"])(this.space_control.value.bookings, min_duration);
            date = date.minute(Math.ceil(date.minute() / this.block_size) * this.block_size);
            var end = dayjs__WEBPACK_IMPORTED_MODULE_5__(date)
                .add(book_ahead, 'm')
                .endOf('m');
            var _loop_1 = function () {
                var value = date.valueOf();
                if (slots.find(function (i) { return i.start <= value && value < i.end && dayjs__WEBPACK_IMPORTED_MODULE_5__(i.end).diff(date, 'm') >= min_duration; })) {
                    this_1.times.push({ id: date.format('HH:mm'), name: date.format('h:mm A'), value: date.valueOf() });
                }
            };
            var this_1 = this;
            for (; date.isBefore(end, 's'); date = date.add(this.block_size, 'm')) {
                _loop_1();
            }
        }
        else {
            // Get times from now
            if (date.minute() % this.block_size !== 0) {
                this.times.push({ id: date.format('HH:mm'), name: date.format('h:mm A') });
            }
            date = date.minute(Math.ceil(date.minute() / this.block_size) * this.block_size);
            var end = dayjs__WEBPACK_IMPORTED_MODULE_5__(date).add(book_ahead, 'm');
            for (; date.isBefore(end); date = date.add(this.block_size, 'm')) {
                this.times.push({ id: date.format('HH:mm'), name: date.format('h:mm A'), value: date.valueOf() });
            }
        }
        this.updateDisplay();
    };
    /**
     * Update the value of the form field
     * @param value New value
     * @param from_ref Whether new value was generated from a reference field
     */
    CustomTimeFieldComponent.prototype.setValue = function (slot, from_ref) {
        if (from_ref === void 0) { from_ref = false; }
        this.field.setValue(slot.id);
        if (this.date_control && !from_ref) {
            var time = dayjs__WEBPACK_IMPORTED_MODULE_5__(slot.value);
            var date = dayjs__WEBPACK_IMPORTED_MODULE_5__(this.date_control.value)
                .hour(time.hour())
                .minute(time.minute())
                .startOf('m');
            this.date_control.setValue(date.valueOf());
        }
    };
    return CustomTimeFieldComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));

_globals_form_fields__WEBPACK_IMPORTED_MODULE_6__["FORM_FIELDS"].time = CustomTimeFieldComponent;


/***/ }),

/***/ "./src/app/shared/components/user-search-field/user-search-field.component.ngfactory.js":
/*!**********************************************************************************************!*\
  !*** ./src/app/shared/components/user-search-field/user-search-field.component.ngfactory.js ***!
  \**********************************************************************************************/
/*! exports provided: RenderType_CustomUserSearchFieldComponent, View_CustomUserSearchFieldComponent_0, View_CustomUserSearchFieldComponent_Host_0, CustomUserSearchFieldComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_CustomUserSearchFieldComponent", function() { return RenderType_CustomUserSearchFieldComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomUserSearchFieldComponent_0", function() { return View_CustomUserSearchFieldComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_CustomUserSearchFieldComponent_Host_0", function() { return View_CustomUserSearchFieldComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomUserSearchFieldComponentNgFactory", function() { return CustomUserSearchFieldComponentNgFactory; });
/* harmony import */ var _user_search_field_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-search-field.component.scss.shim.ngstyle */ "./src/app/shared/components/user-search-field/user-search-field.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory */ "./node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-spinners */ "./node_modules/@acaprojects/ngx-spinners/fesm5/acaprojects-ngx-spinners.js");
/* harmony import */ var _node_modules_acaprojects_ngx_custom_events_acaprojects_ngx_custom_events_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@acaprojects/ngx-custom-events/acaprojects-ngx-custom-events.ngfactory */ "./node_modules/@acaprojects/ngx-custom-events/acaprojects-ngx-custom-events.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm5/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm5/acaprojects-ngx-overlays.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_search_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-search-field.component */ "./src/app/shared/components/user-search-field/user-search-field.component.ts");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm5/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 













var styles_CustomUserSearchFieldComponent = [_user_search_field_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_CustomUserSearchFieldComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_CustomUserSearchFieldComponent, data: {} });

function View_CustomUserSearchFieldComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "spinner"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a-spinner", [["circle-ring", ""], ["color", "#000"]], null, null, null, _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ɵc_0"], _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ɵc"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_3__["ɵc"], [], { color: [0, "color"] }, null)], function (_ck, _v) { var currVal_0 = "#000"; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CustomUserSearchFieldComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "item"], ["feedback", ""]], null, [[null, "mouseup"], [null, "touchend"], [null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).handleMouse($event) !== false);
        ad = (pd_0 && ad);
    } if (("touchstart" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).handleTouch($event) !== false);
        ad = (pd_1 && ad);
    } if (("mouseup" === en)) {
        var pd_2 = (_co.select(_v.context.$implicit) !== false);
        ad = (pd_2 && ad);
    } if (("touchend" === en)) {
        var pd_3 = (_co.select(_v.context.$implicit) !== false);
        ad = (pd_3 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_custom_events_acaprojects_ngx_custom_events_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_ɵa_0"], _node_modules_acaprojects_ngx_custom_events_acaprojects_ngx_custom_events_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_ɵa"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 0, "div", [["class", "name"]], [[8, "innerHTML", 1]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 0, "div", [["class", "email"]], [[8, "innerHTML", 1]], null, null, null, null))], function (_ck, _v) { _ck(_v, 1, 0); }, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.match_name || _v.context.$implicit.name); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_v.context.$implicit.match_email || _v.context.$implicit.email); _ck(_v, 3, 0, currVal_1); }); }
function View_CustomUserSearchFieldComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "user-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CustomUserSearchFieldComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.filtered_list; _ck(_v, 2, 0, currVal_0); }, null); }
function View_CustomUserSearchFieldComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "user-search"], ["widget", ""]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [["a-tooltip", ""], ["class", "search"]], null, [[null, "showChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("showChange" === en)) {
        var pd_0 = ((_co.show = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_7__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_7__["AOverlayService"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { show: [0, "show"], content: [1, "content"] }, { showChange: "showChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 8, "div", [["class", "searchbar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 5, "input", [["placeholder", "Search for host..."], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "blur"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.search_str = $event) !== false);
        ad = (pd_4 && ad);
    } if (("ngModelChange" === en)) {
        var pd_5 = (_co.search($event) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = (_co.reset() !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_CustomUserSearchFieldComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["list", 2]], null, 0, null, View_CustomUserSearchFieldComponent_2))], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.show && _co.search_str) && (_co.filtered_list.length > 0)); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12); _ck(_v, 2, 0, currVal_0, currVal_1); var currVal_9 = _co.search_str; _ck(_v, 7, 0, currVal_9); var currVal_10 = _co.searching; _ck(_v, 11, 0, currVal_10); }, function (_ck, _v) { var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid; var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8); }); }
function View_CustomUserSearchFieldComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "custom-user-search-field", [], null, null, null, View_CustomUserSearchFieldComponent_0, RenderType_CustomUserSearchFieldComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _user_search_field_component__WEBPACK_IMPORTED_MODULE_10__["CustomUserSearchFieldComponent"], [_acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_11__["ADynamicFormField"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormGroup"], _services_app_service__WEBPACK_IMPORTED_MODULE_12__["ApplicationService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var CustomUserSearchFieldComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("custom-user-search-field", _user_search_field_component__WEBPACK_IMPORTED_MODULE_10__["CustomUserSearchFieldComponent"], View_CustomUserSearchFieldComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shared/components/user-search-field/user-search-field.component.scss.shim.ngstyle.js":
/*!******************************************************************************************************!*\
  !*** ./src/app/shared/components/user-search-field/user-search-field.component.scss.shim.ngstyle.js ***!
  \******************************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["custom-user-search-field[_nghost-%COMP%] {\n  width: 100%;\n}\n.user-search[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.searchbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  border: 1px solid #ccc;\n  overflow: hidden;\n  border-radius: 4px;\n}\n.user-list[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  z-index: 99999;\n  max-height: 15.5em;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\ninput[_ngcontent-%COMP%] {\n  font-size: 1em;\n  padding: 0.5em;\n  border: none;\n  outline: none;\n  min-width: 50%;\n  flex: 1;\n  border-radius: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0);\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-bottom: 1px solid #fff;\n}\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.2em;\n  width: 1.2em;\n}\n.spinner[_ngcontent-%COMP%] {\n  margin: 0 0.5em;\n}\na-spinner[_ngcontent-%COMP%] {\n  font-size: 0.25em;\n  width: 4em;\n}\n.item[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  pointer-events: auto;\n  cursor: pointer;\n}\n.item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.email[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  color: rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlci1zZWFyY2gtZmllbGQvdXNlci1zZWFyY2gtZmllbGQuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zdGRpbiIsInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlci1zZWFyY2gtZmllbGQvdXNlci1zZWFyY2gtZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBNkJBOztjQUFBO0FBV0E7O3NCQUFBO0FDdENBO0VBQ0ksV0FBQTtBQ09KO0FESkE7RUFDSSxXQUFBO0FDT0o7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNNSjtBREhBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtHQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FDTUo7QURIQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUNNSjtBRExJO0VBQ0ksNkJBQUE7QUNPUjtBREhBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ01KO0FESEE7RUFDSSxlQUFBO0FDTUo7QURIQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ01KO0FESEE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDTUo7QURKSTtFQUNJLG9DQUFBO0FDTVI7QURISTs7RUFFSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNLUjtBRERBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlci1zZWFyY2gtZmllbGQvdXNlci1zZWFyY2gtZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG5cbmN1c3RvbS11c2VyLXNlYXJjaC1maWVsZDpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXItc2VhcmNoIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4uc2VhcmNoYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnVzZXItbGlzdCB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xuICAgIHotaW5kZXg6IDk5OTk5O1xuICAgIG1heC1oZWlnaHQ6IDE1LjVlbTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbmlucHV0IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIG1pbi13aWR0aDogNTAlO1xuICAgIGZsZXg6IDE7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgjMDAwLCAwKTtcbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xuICAgIH1cbn1cblxuLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEuMmVtO1xuICAgIHdpZHRoOiAxLjJlbTtcbn1cblxuLnNwaW5uZXIge1xuICAgIG1hcmdpbjogMCAuNWVtO1xufVxuXG5hLXNwaW5uZXIge1xuICAgIGZvbnQtc2l6ZTogLjI1ZW07XG4gICAgd2lkdGg6IDRlbTtcbn1cblxuLml0ZW0ge1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMCwgLjEpO1xuICAgIH1cblxuICAgIC5uYW1lLFxuICAgIC5lbWFpbCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cbn1cblxuLmVtYWlsIHtcbiAgICBmb250LXNpemU6IC42ZW07XG4gICAgY29sb3I6IHJnYmEoIzAwMCwgLjYpO1xufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuY3VzdG9tLXVzZXItc2VhcmNoLWZpZWxkOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXItc2VhcmNoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWFyY2hiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4udXNlci1saXN0IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBtYXgtaGVpZ2h0OiAxNS41ZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbmlucHV0IHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1pbi13aWR0aDogNTAlO1xuICBmbGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbn1cbmlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMS4yZW07XG4gIHdpZHRoOiAxLjJlbTtcbn1cblxuLnNwaW5uZXIge1xuICBtYXJnaW46IDAgMC41ZW07XG59XG5cbmEtc3Bpbm5lciB7XG4gIGZvbnQtc2l6ZTogMC4yNWVtO1xuICB3aWR0aDogNGVtO1xufVxuXG4uaXRlbSB7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uaXRlbSAubmFtZSxcbi5pdGVtIC5lbWFpbCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZW1haWwge1xuICBmb250LXNpemU6IDAuNmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/shared/components/user-search-field/user-search-field.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/user-search-field/user-search-field.component.ts ***!
  \************************************************************************************/
/*! exports provided: CustomUserSearchFieldComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomUserSearchFieldComponent", function() { return CustomUserSearchFieldComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm5/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _utilities_general_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var _globals_form_fields__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../globals/form-fields */ "./src/app/shared/globals/form-fields.ts");










var CustomUserSearchFieldComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](CustomUserSearchFieldComponent, _super);
    function CustomUserSearchFieldComponent(field, group, service) {
        var _this = _super.call(this) || this;
        _this.field = field;
        _this.group = group;
        _this.service = service;
        /** List of users from an API search */
        _this.filtered_list = [];
        /** Subject holding the value of the search */
        _this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        return _this;
    }
    CustomUserSearchFieldComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.group) {
            if (this.field.references && this.field.references.length > 0) {
                var control = this.group.controls[this.field.references[0]];
                if (control) {
                    this.subscription('reference', control.valueChanges.subscribe(function () { return _this.updateDisplay(); }));
                }
            }
            this.subscription('control', this.field.control.valueChanges.subscribe(function () { return _this.updateDisplay(); }));
        }
        // Listen for input changes
        this.search_results$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (query) {
            _this.searching = true;
            _this.show = true;
            return query.length >= 3 ? _this.service.Users.query({ q: query.slice(0, 3), cache: 60 * 1000 }) : Promise.resolve([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (list) {
            _this.searching = false;
            return Object(_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_8__["filterList"])(_this.search_str, list, ['name', 'email']);
        }));
        // Process API results
        this.search_results$.subscribe(function (list) {
            _this.filtered_list = list;
            _this.filtered_list.forEach(function (i) {
                i.match_name = Object(_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_8__["matchToHighlight"])(i.match_name);
                i.match_email = Object(_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_8__["matchToHighlight"])(i.match_email);
                return i;
            });
        });
    };
    /**
     * Search for a user that matches the filter string
     * @param filter String to filter users on
     */
    CustomUserSearchFieldComponent.prototype.search = function (filter) {
        this.search_str = filter;
        this.search$.next(filter);
    };
    /**
     * Update input display string
     */
    CustomUserSearchFieldComponent.prototype.updateDisplay = function () {
        var value = this.field.control.value;
        this.search_str = value ? value.name : '';
    };
    /**
     * Reset the display value for the search input
     */
    CustomUserSearchFieldComponent.prototype.reset = function () {
        var _this = this;
        this.timeout('reset', function () {
            var value = _this.field.control.value;
            _this.search_str = value ? value.name : '';
            _this.show = false;
        });
    };
    /**
     * Set the active user
     * @param user New active user
     */
    CustomUserSearchFieldComponent.prototype.select = function (user) {
        var _this = this;
        if (user) {
            this.field.setValue(user);
        }
        this.timeout('hide', function () {
            _this.show = false;
        }, 100);
    };
    return CustomUserSearchFieldComponent;
}(_base_component__WEBPACK_IMPORTED_MODULE_6__["BaseComponent"]));

_globals_form_fields__WEBPACK_IMPORTED_MODULE_9__["FORM_FIELDS"].host = CustomUserSearchFieldComponent;


/***/ }),

/***/ "./src/app/shared/globals/application.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/globals/application.ts ***!
  \***********************************************/
/*! exports provided: version, core_version, build */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "core_version", function() { return core_version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "build", function() { return build; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

/** Version number of the application */
var version = 'local-dev';
/** Version number of the base application */
var core_version = '1.0.0';
/** Build time of the application */
var build = dayjs__WEBPACK_IMPORTED_MODULE_0__();


/***/ }),

/***/ "./src/app/shared/globals/form-fields.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/globals/form-fields.ts ***!
  \***********************************************/
/*! exports provided: FORM_FIELDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORM_FIELDS", function() { return FORM_FIELDS; });
/** List of form field contents mapped to corresponding keys */
var FORM_FIELDS = {};


/***/ }),

/***/ "./src/app/shared/globals/overlay-register.ts":
/*!****************************************************!*\
  !*** ./src/app/shared/globals/overlay-register.ts ***!
  \****************************************************/
/*! exports provided: OVERLAY_REGISTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OVERLAY_REGISTER", function() { return OVERLAY_REGISTER; });
/** List of Overlays to register on application initialisation */
var OVERLAY_REGISTER = [];


/***/ }),

/***/ "./src/app/shared/mocks/index.ts":
/*!***************************************!*\
  !*** ./src/app/shared/mocks/index.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _systems_mock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./systems.mock */ "./src/app/shared/mocks/systems.mock.ts");



/***/ }),

/***/ "./src/app/shared/mocks/systems.mock.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/mocks/systems.mock.ts ***!
  \**********************************************/
/*! exports provided: MOCK_SYSTEMS, ɵ0, ɵ1, ɵ2, ɵ3, ɵ4, ɵ5, ɵ6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOCK_SYSTEMS", function() { return MOCK_SYSTEMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ0", function() { return ɵ0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ1", function() { return ɵ1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ2", function() { return ɵ2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ3", function() { return ɵ3; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ4", function() { return ɵ4; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ5", function() { return ɵ5; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵ6", function() { return ɵ6; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_spaces_space_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data/spaces/space.utilities */ "./src/app/services/data/spaces/space.utilities.ts");
/* harmony import */ var _services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data/bookings/booking.utilities */ "./src/app/services/data/bookings/booking.utilities.ts");
/* harmony import */ var _services_data_users_user_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data/users/user.utilities */ "./src/app/services/data/users/user.utilities.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);





var LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
var NUMBERS = '0123456789'.split('');
var index = 0;
var SPACE_LIST = [];
var IMAGES = ['large_down', 'large_up', 'small_down', 'small_up'];
/**
 * Create mock engine booking module with appropriate bookings and space data
 */
function createSystem() {
    var id = "sys-" + LETTERS[Math.floor(index / NUMBERS.length)] + NUMBERS[(index++) % NUMBERS.length];
    Object(_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_2__["setMockBookingStartDatetime"])(dayjs__WEBPACK_IMPORTED_MODULE_4__().minute(-50).valueOf());
    var space = Object(_services_data_spaces_space_utilities__WEBPACK_IMPORTED_MODULE_1__["generateMockSpace"])(id);
    SPACE_LIST.push(space);
    var bindings = {
        touch_enabled: true,
        timeout: 300,
        cancel_timeout: 600,
        has_catering: true,
        control_url: 'https://aca.im/demo/aca/control/',
        icon: "/assets/img/" + IMAGES[Math.floor(Math.random() * IMAGES.length)] + ".png"
    };
    var system = {
        id: id, name: space.name,
        Bookings: []
    };
    system.Bookings.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, bindings, { room_name: space.name, today: space.bookings, reload: dayjs__WEBPACK_IMPORTED_MODULE_4__().add(1, 'h').unix(), $start_meeting: function (time) {
            system.Bookings[0].last_meeting_started = time;
        }, $cancel_meeting: function (time, reason) {
            var list = system.Bookings[0].today;
            system.Bookings[0].today = list.filter(function (i) { return i.date !== time; });
        }, $waiter_call: function () {
            console.log("[MOCK][" + id + "] Waiter called...");
        } }));
    return system;
}
var ɵ0 = function (i) { return createSystem(); };
var MOCK_SYSTEMS = Array(10).fill(0).map(ɵ0);
// Add mock systems to the global space so that the mock websocket can hook into them
if (!window.control) {
    window.control = { systems: {} };
}
window.control.systems = MOCK_SYSTEMS.reduce(function (a, v) {
    a[v.id] = v;
    return a;
}, {});
var ɵ1 = function (i) { return Object(_services_data_users_user_utilities__WEBPACK_IMPORTED_MODULE_3__["generateMockUser"])(); };
// Add mock data for API endpoints
var USER_LIST = Array(1000).fill(0).map(ɵ1);
var ɵ2 = function (_) { return ({ total: 10, results: MOCK_SYSTEMS }); }, ɵ3 = function (_) { return SPACE_LIST; }, ɵ4 = function (_) { return USER_LIST; }, ɵ5 = function (_) { return USER_LIST[0]; }, ɵ6 = function (_) { return ({ total: 1, results: [{ id: 'zone_org-1' }] }); };
var handlers = [
    {
        path: '/api/engine/v2/systems',
        metadata: null,
        method: 'GET',
        callback: ɵ2
    },
    {
        path: '/api/staff/rooms',
        metadata: null,
        method: 'GET',
        callback: ɵ3
    },
    {
        path: '/api/staff/users',
        metadata: null,
        method: 'GET',
        callback: ɵ4
    },
    {
        path: '/api/engine/v2/users/current',
        metadata: null,
        method: 'GET',
        callback: ɵ5
    },
    {
        path: '/api/engine/v2/zones',
        metadata: null,
        method: 'GET',
        callback: ɵ6
    }
];
window.control.handlers = handlers;



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedContentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedContentModule", function() { return SharedContentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _components_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user-search-field/user-search-field.component */ "./src/app/shared/components/user-search-field/user-search-field.component.ts");
/* harmony import */ var _components_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/time-field/time-field.component */ "./src/app/shared/components/time-field/time-field.component.ts");
/* harmony import */ var _components_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/duration-field/duration-field.component */ "./src/app/shared/components/duration-field/duration-field.component.ts");





var COMPONENTS = [
    _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]
];
var ENTRY_COMPONENT = [
    _components_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_2__["CustomUserSearchFieldComponent"],
    _components_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_3__["CustomTimeFieldComponent"],
    _components_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_4__["CustomDurationFieldComponent"]
];
var SharedContentModule = /** @class */ (function () {
    function SharedContentModule() {
    }
    return SharedContentModule;
}());



/***/ }),

/***/ "./src/app/shared/utilities/api.utilities.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/utilities/api.utilities.ts ***!
  \***************************************************/
/*! exports provided: toQueryString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toQueryString", function() { return toQueryString; });
/**
 * Convert map into a query string
 * @param map Key value pairs to convert
 */
function toQueryString(map) {
    var str = '';
    if (map) {
        for (var key in map) {
            if (map.hasOwnProperty(key) && map[key] !== undefined && map[key] !== null) {
                str += "" + (str ? '&' : '') + key + "=" + map[key];
            }
        }
    }
    return str;
}


/***/ }),

/***/ "./src/app/shared/utilities/formatting.utilities.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/utilities/formatting.utilities.ts ***!
  \**********************************************************/
/*! exports provided: formatAttendeesWithHost, formatAttendees, formatDate, formatTime, formatPeriodWithDuration, formatPeriod, formatDuration, RECURRENCE_PERIODS, formatRecurrence, formatSpaces */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAttendeesWithHost", function() { return formatAttendeesWithHost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatAttendees", function() { return formatAttendees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatTime", function() { return formatTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPeriodWithDuration", function() { return formatPeriodWithDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatPeriod", function() { return formatPeriod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDuration", function() { return formatDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RECURRENCE_PERIODS", function() { return RECURRENCE_PERIODS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatRecurrence", function() { return formatRecurrence; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatSpaces", function() { return formatSpaces; });
/* harmony import */ var _general_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);


// attendees: FormFormatters.attendees(user),
// date: FormFormatters.date,
// room: FormFormatters.space,
// recurrence: FormFormatters.recurrence
/**
 * Get function to create formatted string for a list of users with a host
 * @param host Host user
 */
function formatAttendeesWithHost(host) {
    return function (l) { return formatAttendees(l, host); };
}
/**
 * Create formatted string from a list of users
 * @param list List of users
 * @param host Owner of the list of users
 */
function formatAttendees(list, host) {
    var attendee_str = '';
    if (list && list.length > 0) {
        var users = list.slice();
        if (host) {
            var result = users.find(function (a) { return a.email === host.email; });
            if (result) {
                users.splice(users.indexOf(result), 1);
            }
        }
        var length_1 = users.length + (host ? 1 : 0);
        attendee_str = length_1 + " Attendee" + (length_1 === 1 ? '' : 's') + "; " + (host ? host.name : '');
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var item = users_1[_i];
            if (attendee_str) {
                attendee_str += ', ';
            }
            attendee_str += item.name;
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
    return function (t) { return formatPeriod(t, duration); };
}
/**
 * Create formatted string for a period of given duration
 * @param timestamp Start hours and minutes of the period in the format `HH:mm`
 * @param duration Period duration in minutes
 */
function formatPeriod(timestamp, duration) {
    if (duration === void 0) { duration = 60; }
    var parts = timestamp.split(':');
    var date = dayjs__WEBPACK_IMPORTED_MODULE_1__().hour(+parts[0]).minute(+parts[1]);
    return date.format('h:mm A') + " - " + date.add(duration, 'm').format('h:mm A') + " (" + Object(_general_utilities__WEBPACK_IMPORTED_MODULE_0__["humaniseDuration"])(duration) + ")";
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
    var end = value.end ? "until " + dayjs__WEBPACK_IMPORTED_MODULE_1__(value.end).format('DD MMM YYYY') : 'forever';
    return period + " " + end;
}
/**
 * Create human readable string for a room or list of rooms
 * @param list List of spaces/rooms
 */
function formatSpaces(list) {
    if (!list || (list instanceof Array && list.length <= 0)) {
        return 'No selected space';
    }
    if (list instanceof Array) {
        return list.length === 1 ? list[0].name : list.length + " Space" + (list.length !== 1 ? 's' : '');
    }
    else {
        var capacity = list.capacity ? '(' + list.capacity + ' ' + (list.capacity === 1 ? 'person' : 'people') + ')' : '';
        return list.name + " " + capacity;
    }
}


/***/ }),

/***/ "./src/app/shared/utilities/general.utilities.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/utilities/general.utilities.ts ***!
  \*******************************************************/
/*! exports provided: getItemWithKeys, isMobileDevice, isMobileSafari, isAndroidChrome, padZero, unique, humaniseDuration, filterList, matchToHighlight, timeToDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemWithKeys", function() { return getItemWithKeys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileDevice", function() { return isMobileDevice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isMobileSafari", function() { return isMobileSafari; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAndroidChrome", function() { return isAndroidChrome; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "padZero", function() { return padZero; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unique", function() { return unique; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "humaniseDuration", function() { return humaniseDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterList", function() { return filterList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchToHighlight", function() { return matchToHighlight; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeToDate", function() { return timeToDate; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

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
function unique(array, key) {
    if (key === void 0) { key = ''; }
    return array.filter(function (el, pos, arr) {
        return arr.indexOf(key ? arr.find(function (i) { return i[key] === el[key]; }) : arr.find(function (i) { return i === el; })) === pos;
    });
}
/**
 * Convert duration to human readable string
 * @param duration Duration in minutes
 * @param short Whether to use short form of duration words e.g. hours as h
 */
function humaniseDuration(duration, short) {
    if (short === void 0) { short = false; }
    if (!duration || duration < 0) {
        return '';
    }
    var h = Math.floor(duration / 60);
    var d = "" + (h >= 1 ? (h + (short ? 'h' : (' hour' + (h === 1 ? '' : 's')))) : '');
    if (duration % 60 !== 0) {
        if (d) {
            d += short ? ' ' : ', ';
        }
        var m = duration % 60;
        d += "" + (m >= 1 ? (m + (short ? 'm' : (' minute' + (m === 1 ? '' : 's')))) : '');
    }
    return d;
}
/**
 * Get a filtered list of items
 * @param filter Value to filter on
 * @param items List of results to filter
 * @param fields Fields to check for matches on each item
 */
function filterList(filter, items, fields) {
    if (fields === void 0) { fields = ['id']; }
    var results;
    // Tokenise filter string
    var filters = (filter || '').toLowerCase().split(' ');
    var list = {};
    for (var _i = 0, filters_1 = filters; _i < filters_1.length; _i++) {
        var f = filters_1[_i];
        if (f) {
            if (!list[f]) {
                list[f] = 0;
            }
            list[f]++;
        }
    }
    // Group similar tokens
    var parts = [];
    for (var f in list) {
        if (list.hasOwnProperty(f)) {
            parts.push({ word: f, count: list[f], regex: new RegExp(f, 'gi') });
        }
    }
    parts.sort(function (a, b) { return b.word.length - a.word.length || a.word.localeCompare(b.word); });
    var item_list = JSON.parse(JSON.stringify(items || []));
    if (filter) {
        results = item_list.filter(function (item) {
            var match_count = 0;
            item.match_index = 65535;
            item.match = '';
            var field_list = {};
            // Initialise field match variables
            for (var _i = 0, fields_1 = fields; _i < fields_1.length; _i++) {
                var f = fields_1[_i];
                field_list[f] = {
                    value: (item[f] || '').toLowerCase(),
                    index: 65536,
                    matched: 0
                };
            }
            // Search for matches with the tokenised filter string
            for (var _a = 0, parts_1 = parts; _a < parts_1.length; _a++) {
                var i = parts_1[_a];
                if (i.word) {
                    // Check fields for matches
                    for (var _b = 0, fields_2 = fields; _b < fields_2.length; _b++) {
                        var f = fields_2[_b];
                        var field = field_list[f];
                        var index = field.value.indexOf(i.word);
                        field.index = index < field.index ? index : field.index;
                        field.matches = (field.value.match(i.regex) || []).length;
                        field.value = field.value.replace(i.regex, ' ');
                    }
                    // Update token match count
                    for (var _c = 0, fields_3 = fields; _c < fields_3.length; _c++) {
                        var f = fields_3[_c];
                        var field = field_list[f];
                        if (field.matches >= i.count) {
                            match_count++;
                            // Update field matches
                            var changed = 0;
                            var tokens = (item["match_" + f] || item[f] || '').split(' ');
                            for (var _d = 0, tokens_1 = tokens; _d < tokens_1.length; _d++) {
                                var k = tokens_1[_d];
                                if (changed >= i.count) {
                                    break;
                                }
                                if (k.toLowerCase().indexOf(i.word) >= 0 && k.indexOf('`') < 0) {
                                    tokens[tokens.indexOf(k)] = k.replace(i.regex, '`$&`');
                                    changed++;
                                }
                            }
                            item["match_" + f] = tokens.join(' ');
                            break;
                        }
                    }
                }
            }
            // Get field with the most relevent match
            for (var _e = 0, fields_4 = fields; _e < fields_4.length; _e++) {
                var f = fields_4[_e];
                var field = field_list[f];
                if (field.index < item.match_index && field.index >= 0) {
                    item.match_index = field.index;
                    item.match = f;
                }
            }
            return item.match_index >= 0 && item.match && (match_count >= parts.length);
        });
    }
    else {
        results = item_list;
    }
    // Sort by order of relevence then name
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


/***/ }),

/***/ "./src/app/shared/utilities/validation.utilities.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/utilities/validation.utilities.ts ***!
  \**********************************************************/
/*! exports provided: validateDate, buildValidateStartTime, validateStartTime, buildValidateDuration, validateDuration, buildValidateAttendees, validateAttendees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateDate", function() { return validateDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildValidateStartTime", function() { return buildValidateStartTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateStartTime", function() { return validateStartTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildValidateDuration", function() { return buildValidateDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateDuration", function() { return validateDuration; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildValidateAttendees", function() { return buildValidateAttendees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validateAttendees", function() { return validateAttendees; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

var HAS_ERROR = true;
/**
 * Check that control value is a date that is the same or after from date
 * @param control Angular form control
 * @param is_from Comparison date(ms from UTC epoch). Defaults to the current time
 */
function validateDate(control, is_from) {
    if (is_from === void 0) { is_from = dayjs__WEBPACK_IMPORTED_MODULE_0__().valueOf(); }
    var from = dayjs__WEBPACK_IMPORTED_MODULE_0__(is_from);
    var date = dayjs__WEBPACK_IMPORTED_MODULE_0__(control.value || undefined);
    return date.isBefore(from, 'd') ? { date: HAS_ERROR, message: 'Booking needs to be made in the future' } : null;
}
/**
 * Build start time validation function
 * @param date Date of the time to check
 * @param is_from Comparison date(ms from UTC epoch). Defaults to the current time
 */
function buildValidateStartTime(date, is_from) {
    if (is_from === void 0) { is_from = dayjs__WEBPACK_IMPORTED_MODULE_0__().valueOf(); }
    return function (c) { return validateStartTime(c, date, is_from); };
}
/**
 * Check that control value time is after the comparison date time
 * @param control Angular form control
 * @param date Date of the time to check
 * @param is_from Comparison date(ms from UTC epoch). Defaults to the current time
 */
function validateStartTime(control, date, is_from) {
    if (is_from === void 0) { is_from = dayjs__WEBPACK_IMPORTED_MODULE_0__().valueOf(); }
    var now = dayjs__WEBPACK_IMPORTED_MODULE_0__(is_from);
    var parts = control.value.split(':');
    var date_obj = dayjs__WEBPACK_IMPORTED_MODULE_0__(date).hour(+parts[0]).minute(+parts[1]);
    return date_obj.isBefore(now, 'm') ? { start: HAS_ERROR, message: 'Booking time needs to be made in the future' } : null;
}
function buildValidateDuration(min, max) {
    if (min === void 0) { min = 30; }
    if (max === void 0) { max = 240; }
    return function (c) { return validateDuration(c, min, max); };
}
function validateDuration(control, min, max) {
    if (min === void 0) { min = 30; }
    if (max === void 0) { max = 240; }
    if (control.value < (min || 30)) {
        return { duration: HAS_ERROR, message: "Minimum booking duration is " + min + " minute" + (min === 1 ? 's' : '') };
    }
    else if (control.value > (max || 480)) {
        return { length: HAS_ERROR, message: "Maximum booking duration is " + max + " minute" + (max === 1 ? 's' : '') };
    }
    return null;
}
function buildValidateAttendees(host, min) {
    if (min === void 0) { min = 0; }
    return function (c) { return validateAttendees(c, host, min); };
}
function validateAttendees(control, host, min) {
    if (min === void 0) { min = 0; }
    if (!control || !(control.value instanceof Array)) {
        return min > 0
            ? { invalid: true, message: "Minimum of " + min + " attendee" + (min === 1 ? ' is' : 's are') + " required other than you" }
            : null;
    }
    var list = control.value;
    if (host) {
        var result = list.find(function (a) { return a.email === host.email; });
        if (result) {
            list.splice(list.indexOf(result), 1);
        }
    }
    return list.length >= min ? null : {
        count: true,
        message: "Minimum of " + min + " attendee" + (min === 1 ? ' is' : 's are') + " required other than you"
    };
}


/***/ }),

/***/ "./src/app/shell/bootstrap/bootstrap.component.ngfactory.js":
/*!******************************************************************!*\
  !*** ./src/app/shell/bootstrap/bootstrap.component.ngfactory.js ***!
  \******************************************************************/
/*! exports provided: RenderType_BootstrapComponent, View_BootstrapComponent_0, View_BootstrapComponent_Host_0, BootstrapComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BootstrapComponent", function() { return RenderType_BootstrapComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BootstrapComponent_0", function() { return View_BootstrapComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BootstrapComponent_Host_0", function() { return View_BootstrapComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponentNgFactory", function() { return BootstrapComponentNgFactory; });
/* harmony import */ var _bootstrap_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bootstrap.component.scss.shim.ngstyle */ "./src/app/shell/bootstrap/bootstrap.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_acaprojects_ngx_custom_events_acaprojects_ngx_custom_events_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-custom-events/acaprojects-ngx-custom-events.ngfactory */ "./node_modules/@acaprojects/ngx-custom-events/acaprojects-ngx-custom-events.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm5/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory */ "./node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acaprojects/ngx-dropdown */ "./node_modules/@acaprojects/ngx-dropdown/fesm5/acaprojects-ngx-dropdown.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory */ "./node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acaprojects/ngx-spinners */ "./node_modules/@acaprojects/ngx-spinners/fesm5/acaprojects-ngx-spinners.js");
/* harmony import */ var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */ "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm5/acaprojects-ngx-buttons.js");
/* harmony import */ var _bootstrap_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bootstrap.component */ "./src/app/shell/bootstrap/bootstrap.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_BootstrapComponent = [_bootstrap_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BootstrapComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BootstrapComponent, data: {} });

function View_BootstrapComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["center", "true"], ["class", "toggle"], ["feedback", ""]], null, [[null, "tapped"], [null, "mousedown"], [null, "touchstart"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mousedown" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).handleMouse($event) !== false);
        ad = (pd_0 && ad);
    } if (("touchstart" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).handleTouch($event) !== false);
        ad = (pd_1 && ad);
    } if (("tapped" === en)) {
        var pd_2 = ((_co.manual_input = !_co.manual_input) !== false);
        ad = (pd_2 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_custom_events_acaprojects_ngx_custom_events_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ɵa_0"], _node_modules_acaprojects_ngx_custom_events_acaprojects_ngx_custom_events_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ɵa"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_3__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { center: [0, "center"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_3__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], function (_ck, _v) { var currVal_0 = "true"; _ck(_v, 1, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.manual_input ? "list" : "code"); _ck(_v, 4, 0, currVal_1); }); }
function View_BootstrapComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Input the Engine System ID to bootstrap "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 9, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 8, "div", [["class", "input"]], [[2, "focus", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "input", [], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "focus"], [null, "blur"], [null, "input"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("input" === en)) {
        var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._handleInput($event.target.value) !== false);
        ad = (pd_0 && ad);
    } if (("blur" === en)) {
        var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).onTouched() !== false);
        ad = (pd_1 && ad);
    } if (("compositionstart" === en)) {
        var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionStart() !== false);
        ad = (pd_2 && ad);
    } if (("compositionend" === en)) {
        var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._compositionEnd($event.target.value) !== false);
        ad = (pd_3 && ad);
    } if (("ngModelChange" === en)) {
        var pd_4 = ((_co.system_id = $event) !== false);
        ad = (pd_4 && ad);
    } if (("focus" === en)) {
        var pd_5 = ((_co.input_focus = true) !== false);
        ad = (pd_5 && ad);
    } if (("blur" === en)) {
        var pd_6 = ((_co.input_focus = false) !== false);
        ad = (pd_6 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "div", [["class", "placeholder"]], [[2, "focus", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Engine System ID"]))], function (_ck, _v) { var _co = _v.component; var currVal_8 = _co.system_id; _ck(_v, 8, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.input_focus || _co.system_id); _ck(_v, 4, 0, currVal_0); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassUntouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassTouched; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPristine; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassDirty; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassValid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassInvalid; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).ngClassPending; _ck(_v, 5, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_9 = _co.input_focus; _ck(_v, 11, 0, currVal_9); }); }
function View_BootstrapComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [["class", "description"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Select the relevent system from the available dropdown "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 7, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "a-dropdown", [["klass", "fill"], ["placeholder", "Select system"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("ngModelChange" === en)) {
        var pd_0 = ((_co.selected_system = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ADropdownComponent_0"], _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ADropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4767744, null, 0, _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_6__["ADropdownComponent"], [], { klass: [0, "klass"], items: [1, "items"], placeholder: [2, "placeholder"], options: [3, "options"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](5, { can_filter: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_6__["ADropdownComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = "fill"; var currVal_8 = _co.system_list; var currVal_9 = "Select system"; var currVal_10 = _ck(_v, 5, 0, true); _ck(_v, 4, 0, currVal_7, currVal_8, currVal_9, currVal_10); var currVal_11 = _co.selected_system; _ck(_v, 7, 0, currVal_11); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).ngClassPending; _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }); }
function View_BootstrapComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BootstrapComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["list_desc", 2]], null, 0, null, View_BootstrapComponent_4))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.manual_input; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_BootstrapComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 5, "div", [["class", "info-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "a-spinner", [["circle-ring", ""], ["color", "#000"]], null, null, null, _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_ɵc_0"], _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_ɵc"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_9__["ɵc"], [], { color: [0, "color"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Loading system data... "]))], function (_ck, _v) { var currVal_0 = "#000"; _ck(_v, 4, 0, currVal_0); }, null); }
function View_BootstrapComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "button", [["widget", ""]], [[8, "disabled", 0]], [[null, "tapped"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.bootstrap() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_11__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_11__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_3__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" Submit "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.manual_input && !_co.system_id) || (!_co.manual_input && (!_co.selected_system || !_co.selected_system.id))); _ck(_v, 1, 0, currVal_0); }); }
function View_BootstrapComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "bootstrap"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [["class", "options"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 4, "div", [["class", "header fs-big"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "h1", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Booking Panel Setup"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BootstrapComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BootstrapComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BootstrapComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BootstrapComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.system_list && (_co.system_list.length > 0)); _ck(_v, 6, 0, currVal_0); var currVal_1 = !_co.loading; _ck(_v, 8, 0, currVal_1); var currVal_2 = _co.loading; _ck(_v, 10, 0, currVal_2); var currVal_3 = !_co.loading; _ck(_v, 12, 0, currVal_3); }, null); }
function View_BootstrapComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-bootstrap", [], null, null, null, View_BootstrapComponent_0, RenderType_BootstrapComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _bootstrap_component__WEBPACK_IMPORTED_MODULE_12__["BootstrapComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_13__["ApplicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BootstrapComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-bootstrap", _bootstrap_component__WEBPACK_IMPORTED_MODULE_12__["BootstrapComponent"], View_BootstrapComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shell/bootstrap/bootstrap.component.scss.shim.ngstyle.js":
/*!**************************************************************************!*\
  !*** ./src/app/shell/bootstrap/bootstrap.component.scss.shim.ngstyle.js ***!
  \**************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".bootstrap[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #f0f0f0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ddd' fill-opacity='1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n.options[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  width: 26em;\n  max-width: 95vw;\n  margin: 1em 1em auto 1em;\n}\n.header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #b71c1c;\n  color: #fff;\n  padding: 0.5em;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin: 0;\n  padding: 0;\n  font-weight: 300;\n}\n.toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 50%;\n  right: 0.5em;\n  width: 1.2em;\n  height: 1.2em;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  font-size: 1.2em;\n  border-radius: 100%;\n  margin: 0;\n}\n.description[_ngcontent-%COMP%] {\n  text-align: center;\n}\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 0.8em;\n}\na-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5em;\n}\n.input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input.focus[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  top: 0;\n  font-size: 0.6em;\n}\n.placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0.5rem;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 1em;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%);\n  transition: top 200ms, font-size 200ms, color 200ms;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 4px;\n  pointer-events: none;\n}\n.placeholder.focus[_ngcontent-%COMP%] {\n  color: #1f40e6;\n}\n.info-block[_ngcontent-%COMP%] {\n  min-height: 7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hlbGwvYm9vdHN0cmFwL2Jvb3RzdHJhcC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3N0ZGluIiwic3JjL2FwcC9zaGVsbC9ib290c3RyYXAvYm9vdHN0cmFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQTZCQTs7Y0FBQTtBQVdBOztzQkFBQTtBQ3RDQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EscWlCQUFBO0FDT0o7QURKQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ09KO0FESkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ09KO0FESkE7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ09KO0FESkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsU0FBQTtBQ09KO0FESkE7RUFDSSxrQkFBQTtBQ09KO0FESkE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNPSjtBREpBO0VBQ0ksV0FBQTtBQ09KO0FESkE7RUFDSSxZQUFBO0FDT0o7QURKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ09KO0FESkE7RUFDSSxrQkFBQTtBQ09KO0FETFE7RUFDSSxNQUFBO0VBQ0EsZ0JBQUE7QUNPWjtBREZBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxtREFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUNLSjtBREpJO0VBQ0ksY0RqRlU7QUV1RmxCO0FERkE7RUFDSSxlQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9ib290c3RyYXAvYm9vdHN0cmFwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uYm9vdHN0cmFwIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA5OTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI4JyBoZWlnaHQ9JzQ5JyB2aWV3Qm94PScwIDAgMjggNDknJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBpZD0naGV4YWdvbnMnIGZpbGw9JyUyM2RkZCcgZmlsbC1vcGFjaXR5PScxJyBmaWxsLXJ1bGU9J25vbnplcm8nJTNFJTNDcGF0aCBkPSdNMTMuOTkgOS4yNWwxMyA3LjV2MTVsLTEzIDcuNUwxIDMxLjc1di0xNWwxMi45OS03LjV6TTMgMTcuOXYxMi43bDEwLjk5IDYuMzQgMTEtNi4zNVYxNy45bC0xMS02LjM0TDMgMTcuOXpNMCAxNWwxMi45OC03LjVWMGgtMnY2LjM1TDAgMTIuNjl2Mi4zem0wIDE4LjVMMTIuOTggNDF2OGgtMnYtNi44NUwwIDM1Ljgxdi0yLjN6TTE1IDB2Ny41TDI3Ljk5IDE1SDI4di0yLjMxaC0uMDFMMTcgNi4zNVYwaC0yem0wIDQ5di04bDEyLjk5LTcuNUgyOHYyLjMxaC0uMDFMMTcgNDIuMTVWNDloLTJ6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLm9wdGlvbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAyNmVtO1xuICAgIG1heC13aWR0aDogOTV2dztcbiAgICBtYXJnaW46IDFlbSAxZW0gYXV0byAxZW07XG59XG5cbi5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I3MWMxYztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAuNWVtO1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogLjVlbTtcbiAgICB3aWR0aDogMS4yZW07XG4gICAgaGVpZ2h0OiAxLjJlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZm9udC1zaXplOiAuOGVtO1xufVxuXG5hLWRyb3Bkb3duIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJvZHkge1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IC41ZW07XG59XG5cbi5pbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICYuZm9jdXMge1xuICAgICAgICAucGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuNmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucGxhY2Vob2xkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAuNXJlbTtcbiAgICBjb2xvcjogcmdiYSgkZm9udC1kYXJrLCAuNik7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zaXRpb246IHRvcCAyMDBtcywgZm9udC1zaXplIDIwMG1zLCBjb2xvciAyMDBtcztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgJi5mb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuICAgIH1cbn1cblxuLmluZm8tYmxvY2sge1xuICAgIG1pbi1oZWlnaHQ6IDdlbTtcbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5ib290c3RyYXAge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiA5OTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI4JyBoZWlnaHQ9JzQ5JyB2aWV3Qm94PScwIDAgMjggNDknJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBpZD0naGV4YWdvbnMnIGZpbGw9JyUyM2RkZCcgZmlsbC1vcGFjaXR5PScxJyBmaWxsLXJ1bGU9J25vbnplcm8nJTNFJTNDcGF0aCBkPSdNMTMuOTkgOS4yNWwxMyA3LjV2MTVsLTEzIDcuNUwxIDMxLjc1di0xNWwxMi45OS03LjV6TTMgMTcuOXYxMi43bDEwLjk5IDYuMzQgMTEtNi4zNVYxNy45bC0xMS02LjM0TDMgMTcuOXpNMCAxNWwxMi45OC03LjVWMGgtMnY2LjM1TDAgMTIuNjl2Mi4zem0wIDE4LjVMMTIuOTggNDF2OGgtMnYtNi44NUwwIDM1Ljgxdi0yLjN6TTE1IDB2Ny41TDI3Ljk5IDE1SDI4di0yLjMxaC0uMDFMMTcgNi4zNVYwaC0yem0wIDQ5di04bDEyLjk5LTcuNUgyOHYyLjMxaC0uMDFMMTcgNDIuMTVWNDloLTJ6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLm9wdGlvbnMge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDI2ZW07XG4gIG1heC13aWR0aDogOTV2dztcbiAgbWFyZ2luOiAxZW0gMWVtIGF1dG8gMWVtO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2I3MWMxYztcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi50b2dnbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDAuNWVtO1xuICB3aWR0aDogMS4yZW07XG4gIGhlaWdodDogMS4yZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAge1xuICBtYXJnaW4tdG9wOiAwO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG5hLWRyb3Bkb3duIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib2R5IHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4uZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4uaW5wdXQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uaW5wdXQuZm9jdXMgLnBsYWNlaG9sZGVyIHtcbiAgdG9wOiAwO1xuICBmb250LXNpemU6IDAuNmVtO1xufVxuXG4ucGxhY2Vob2xkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwLjVyZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIGZvbnQtc2l6ZTogMWVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHRyYW5zaXRpb246IHRvcCAyMDBtcywgZm9udC1zaXplIDIwMG1zLCBjb2xvciAyMDBtcztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiA0cHg7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnBsYWNlaG9sZGVyLmZvY3VzIHtcbiAgY29sb3I6ICMxZjQwZTY7XG59XG5cbi5pbmZvLWJsb2NrIHtcbiAgbWluLWhlaWdodDogN2VtO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/shell/bootstrap/bootstrap.component.ts":
/*!********************************************************!*\
  !*** ./src/app/shell/bootstrap/bootstrap.component.ts ***!
  \********************************************************/
/*! exports provided: BootstrapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BootstrapComponent", function() { return BootstrapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/base.component */ "./src/app/shared/base.component.ts");





var BootstrapComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BootstrapComponent, _super);
    function BootstrapComponent(service, route) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        /** List of available systems */
        _this.system_list = [];
        /** Selected system to bootstrap */
        _this.selected_system = null;
        return _this;
    }
    BootstrapComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.subscription('app_ready', this.service.initialised.subscribe(function (is_ready) {
            if (is_ready) {
                _this.subscription('route.query', _this.route.queryParamMap.subscribe(function (params) {
                    if (params.has('clear') && params.get('clear')) {
                        _this.clearBootstrap();
                    }
                    if (params.has('system_id') || params.has('sys_id')) {
                        _this.system_id = params.get('system_id') || params.get('sys_id');
                        _this.manual_input = true;
                        _this.bootstrap();
                    }
                }));
                _this.subscription('system_list', _this.service.Systems.listen('list', function (systems) {
                    _this.system_list = systems || [];
                    _this.manual_input = !_this.system_list || _this.system_list.length <= 0;
                }));
                _this.loadList();
                _this.checkBootstrapped();
                _this.unsub('app_ready');
            }
        }));
    };
    /**
     * Setup the default system for the application to bind to
     */
    BootstrapComponent.prototype.bootstrap = function () {
        if (this.manual_input && this.system_id) {
            this.configure(this.system_id);
        }
        else if (this.selected_system) {
            this.configure(this.selected_system.id);
        }
    };
    /**
     * Grab the list of systems from the Systems Manager
     * @param tries Number of previous attempts
     */
    BootstrapComponent.prototype.loadList = function (tries) {
        var _this = this;
        if (tries === void 0) { tries = 0; }
        this.system_list = this.service.Systems.list || [];
        if ((!this.system_list || this.system_list.length <= 0) && tries < 10) {
            this.timeout('load', function () { return _this.loadList(++tries); });
            return;
        }
        if (!this.system_list || this.system_list.length <= 0) {
            this.manual_input = true;
        }
        this.loading = false;
    };
    /**
     * Check if the application has previously been bootstrapped
     */
    BootstrapComponent.prototype.checkBootstrapped = function () {
        this.loading = true;
        if (localStorage) {
            var system_id = localStorage.getItem('ACA.PANEL.system') || localStorage.getItem('ACA.CONTROL.system');
            if (system_id) {
                this.service.navigate(['panel', system_id]);
                return;
            }
        }
        this.loading = false;
    };
    /**
     * Save the bootstrapped ID and redirect to the panel for that ID
     * @param system_id System to bootstrap
     */
    BootstrapComponent.prototype.configure = function (system_id) {
        if (localStorage) {
            localStorage.setItem('ACA.PANEL.system', system_id);
        }
        this.service.navigate(['panel', system_id]);
    };
    /**
     * Remove any previously set bootstrapping details
     */
    BootstrapComponent.prototype.clearBootstrap = function () {
        if (localStorage) {
            localStorage.removeItem('ACA.PANEL.system');
        }
    };
    return BootstrapComponent;
}(_shared_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/panel-array/panel-array.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/shell/panel-array/panel-array.component.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: RenderType_BookingPanelArrayComponent, View_BookingPanelArrayComponent_0, View_BookingPanelArrayComponent_Host_0, BookingPanelArrayComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BookingPanelArrayComponent", function() { return RenderType_BookingPanelArrayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BookingPanelArrayComponent_0", function() { return View_BookingPanelArrayComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BookingPanelArrayComponent_Host_0", function() { return View_BookingPanelArrayComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPanelArrayComponentNgFactory", function() { return BookingPanelArrayComponentNgFactory; });
/* harmony import */ var _panel_array_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-array.component.scss.shim.ngstyle */ "./src/app/shell/panel-array/panel-array.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../panel/panel.component.ngfactory */ "./src/app/shell/panel/panel.component.ngfactory.js");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../panel/panel.component */ "./src/app/shell/panel/panel.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _panel_array_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel-array.component */ "./src/app/shell/panel-array/panel-array.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 








var styles_BookingPanelArrayComponent = [_panel_array_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BookingPanelArrayComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BookingPanelArrayComponent, data: {} });

function View_BookingPanelArrayComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-booking-panel", [], null, null, null, _panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_BookingPanelComponent_0"], _panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_BookingPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["BookingPanelComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]], { system_id: [0, "system_id"], reverse: [1, "reverse"], show_time: [2, "show_time"] }, null)], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit; var currVal_1 = ((_v.parent.context.index % 2) !== 0); var currVal_2 = false; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); }, null); }
function View_BookingPanelArrayComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "panel-outlet"]], [[4, "height", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelArrayComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null)], function (_ck, _v) { var currVal_1 = _v.context.$implicit; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 4); _ck(_v, 2, 0, currVal_1, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.systems.length >= 2) ? "50%" : "100%"); _ck(_v, 0, 0, currVal_0); }); }
function View_BookingPanelArrayComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_BookingPanelArrayComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform(_co.systems, 0, 4)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_BookingPanelArrayComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "info-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No systems are set for displaying on the panel array"]))], null, null); }
function View_BookingPanelArrayComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "logo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.logo; _ck(_v, 1, 0, currVal_0); }); }
function View_BookingPanelArrayComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "content center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelArrayComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.logo; _ck(_v, 3, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.time; _ck(_v, 5, 0, currVal_1); }); }
function View_BookingPanelArrayComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "panel-array"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelArrayComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["none", 2]], null, 0, null, View_BookingPanelArrayComponent_4)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["empty_state", 2]], null, 0, null, View_BookingPanelArrayComponent_5))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.systems && (_co.systems.length > 0)); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3); _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
function View_BookingPanelArrayComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-booking-panel-array", [], null, null, null, View_BookingPanelArrayComponent_0, RenderType_BookingPanelArrayComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _panel_array_component__WEBPACK_IMPORTED_MODULE_7__["BookingPanelArrayComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BookingPanelArrayComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-booking-panel-array", _panel_array_component__WEBPACK_IMPORTED_MODULE_7__["BookingPanelArrayComponent"], View_BookingPanelArrayComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shell/panel-array/panel-array.component.scss.shim.ngstyle.js":
/*!******************************************************************************!*\
  !*** ./src/app/shell/panel-array/panel-array.component.scss.shim.ngstyle.js ***!
  \******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".panel-array[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.panel-outlet[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  border: 1px solid #fff;\n  min-width: 40%;\n}\n.container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: linear-gradient(135deg, #051c2c, #0a2247, #0a2247, #1e3cd8);\n  background-image: url(\"data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 18c0-1.105.887-2 1.998-2 1.104 0 2-.895 2.002-1.994V14v6h-4v-2zM0 13.998C0 12.895.888 12 2 12c1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2 .888 2 2v2H0v-6.002zm16 4.004A1.994 1.994 0 0 1 14 20c-1.105 0-2-.887-2-1.998v-4.004A1.994 1.994 0 0 0 10 12c-1.105 0-2-.888-2-2 0-1.105-.888-2-2-2-1.105 0-2-.887-2-1.998V1.998A1.994 1.994 0 0 0 2 0a2 2 0 0 0-2 2V0h8v2c0 1.105.888 2 2 2 1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2-.888 2-2 0-1.105.888-2 2-2 1.105 0 2-.888 2-2V0h4v6.002A1.994 1.994 0 0 1 22 8c-1.105 0-2 .888-2 2 0 1.105-.888 2-2 2-1.105 0-2 .887-2 1.998v4.004z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  color: #fff;\n}\n.logo[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 12em;\n}\n.time[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hlbGwvcGFuZWwtYXJyYXkvcGFuZWwtYXJyYXkuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zdGRpbiIsInNyYy9hcHAvc2hlbGwvcGFuZWwtYXJyYXkvcGFuZWwtYXJyYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBNkJBOztjQUFBO0FBV0E7O3NCQUFBO0FDdENBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDT0o7QURKQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ09KO0FESkE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZFREhTO0VDSVQsc3hCQUFBO0VBQ0EsV0QzQlM7QUVrQ2I7QURKQTtFQUNJLGtCQUFBO0FDT0o7QURKQTtFQUNJLGVBQUE7QUNPSjtBREpBO0VBQ0ksZ0JBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3BhbmVsLWFycmF5L3BhbmVsLWFycmF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4ucGFuZWwtYXJyYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBhbmVsLW91dGxldCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IDE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgICBtaW4td2lkdGg6IDQwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPScyNCcgaGVpZ2h0PScyMCcgdmlld0JveD0nMCAwIDI0IDIwJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNMjAgMThjMC0xLjEwNS44ODctMiAxLjk5OC0yIDEuMTA0IDAgMi0uODk1IDIuMDAyLTEuOTk0VjE0djZoLTR2LTJ6TTAgMTMuOTk4QzAgMTIuODk1Ljg4OCAxMiAyIDEyYzEuMTA1IDAgMiAuODg4IDIgMiAwIDEuMTA1Ljg4OCAyIDIgMiAxLjEwNSAwIDIgLjg4OCAyIDJ2Mkgwdi02LjAwMnptMTYgNC4wMDRBMS45OTQgMS45OTQgMCAwIDEgMTQgMjBjLTEuMTA1IDAtMi0uODg3LTItMS45OTh2LTQuMDA0QTEuOTk0IDEuOTk0IDAgMCAwIDEwIDEyYy0xLjEwNSAwLTItLjg4OC0yLTIgMC0xLjEwNS0uODg4LTItMi0yLTEuMTA1IDAtMi0uODg3LTItMS45OThWMS45OThBMS45OTQgMS45OTQgMCAwIDAgMiAwYTIgMiAwIDAgMC0yIDJWMGg4djJjMCAxLjEwNS44ODggMiAyIDIgMS4xMDUgMCAyIC44ODggMiAyIDAgMS4xMDUuODg4IDIgMiAyIDEuMTA1IDAgMi0uODg4IDItMiAwLTEuMTA1Ljg4OC0yIDItMiAxLjEwNSAwIDItLjg4OCAyLTJWMGg0djYuMDAyQTEuOTk0IDEuOTk0IDAgMCAxIDIyIDhjLTEuMTA1IDAtMiAuODg4LTIgMiAwIDEuMTA1LS44ODggMi0yIDItMS4xMDUgMC0yIC44ODctMiAxLjk5OHY0LjAwNHonIGZpbGw9JyUyM2ZmZmZmZicgZmlsbC1vcGFjaXR5PScwLjA1JyBmaWxsLXJ1bGU9J2V2ZW5vZGQnLyUzRSUzQy9zdmclM0VcIik7XG4gICAgY29sb3I6ICRmb250LWxpZ2h0O1xufVxuXG4ubG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG5pbWcge1xuICAgIG1heC13aWR0aDogMTJlbTtcbn1cblxuLnRpbWUge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4ucGFuZWwtYXJyYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBhbmVsLW91dGxldCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgbWluLXdpZHRoOiA0MCU7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzI0JyBoZWlnaHQ9JzIwJyB2aWV3Qm94PScwIDAgMjQgMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00yMCAxOGMwLTEuMTA1Ljg4Ny0yIDEuOTk4LTIgMS4xMDQgMCAyLS44OTUgMi4wMDItMS45OTRWMTR2NmgtNHYtMnpNMCAxMy45OThDMCAxMi44OTUuODg4IDEyIDIgMTJjMS4xMDUgMCAyIC44ODggMiAyIDAgMS4xMDUuODg4IDIgMiAyIDEuMTA1IDAgMiAuODg4IDIgMnYySDB2LTYuMDAyem0xNiA0LjAwNEExLjk5NCAxLjk5NCAwIDAgMSAxNCAyMGMtMS4xMDUgMC0yLS44ODctMi0xLjk5OHYtNC4wMDRBMS45OTQgMS45OTQgMCAwIDAgMTAgMTJjLTEuMTA1IDAtMi0uODg4LTItMiAwLTEuMTA1LS44ODgtMi0yLTItMS4xMDUgMC0yLS44ODctMi0xLjk5OFYxLjk5OEExLjk5NCAxLjk5NCAwIDAgMCAyIDBhMiAyIDAgMCAwLTIgMlYwaDh2MmMwIDEuMTA1Ljg4OCAyIDIgMiAxLjEwNSAwIDIgLjg4OCAyIDIgMCAxLjEwNS44ODggMiAyIDIgMS4xMDUgMCAyLS44ODggMi0yIDAtMS4xMDUuODg4LTIgMi0yIDEuMTA1IDAgMi0uODg4IDItMlYwaDR2Ni4wMDJBMS45OTQgMS45OTQgMCAwIDEgMjIgOGMtMS4xMDUgMC0yIC44ODgtMiAyIDAgMS4xMDUtLjg4OCAyLTIgMi0xLjEwNSAwLTIgLjg4Ny0yIDEuOTk4djQuMDA0eicgZmlsbD0nJTIzZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMDUnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEyZW07XG59XG5cbi50aW1lIHtcbiAgZm9udC1zaXplOiAxLjhlbTtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/shell/panel-array/panel-array.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shell/panel-array/panel-array.component.ts ***!
  \************************************************************/
/*! exports provided: BookingPanelArrayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPanelArrayComponent", function() { return BookingPanelArrayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);






var BookingPanelArrayComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BookingPanelArrayComponent, _super);
    function BookingPanelArrayComponent(route, _service) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this._service = _service;
        return _this;
    }
    Object.defineProperty(BookingPanelArrayComponent.prototype, "time", {
        /** Display value for the current time */
        get: function () {
            return dayjs__WEBPACK_IMPORTED_MODULE_5__().format('h:mm:ss A');
        },
        enumerable: true,
        configurable: true
    });
    BookingPanelArrayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription('app_ready', this._service.initialised.subscribe(function (is_ready) {
            if (is_ready) {
                _this.subscription('route.query', _this.route.queryParamMap.subscribe(function (params) {
                    if (params.has('system_ids')) {
                        _this.systems = (params.get('system_ids') || '').split(',');
                    }
                }));
                var logo = _this._service.setting('app.logo');
                _this.logo = (logo ? logo.inverse : null) || '';
                _this.unsub('app_ready');
            }
        }));
    };
    return BookingPanelArrayComponent;
}(_shared_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/panel-select/panel-select.component.ngfactory.js":
/*!************************************************************************!*\
  !*** ./src/app/shell/panel-select/panel-select.component.ngfactory.js ***!
  \************************************************************************/
/*! exports provided: RenderType_BookingPanelSelectComponent, View_BookingPanelSelectComponent_0, View_BookingPanelSelectComponent_Host_0, BookingPanelSelectComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BookingPanelSelectComponent", function() { return RenderType_BookingPanelSelectComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BookingPanelSelectComponent_0", function() { return View_BookingPanelSelectComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BookingPanelSelectComponent_Host_0", function() { return View_BookingPanelSelectComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPanelSelectComponentNgFactory", function() { return BookingPanelSelectComponentNgFactory; });
/* harmony import */ var _panel_select_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-select.component.scss.shim.ngstyle */ "./src/app/shell/panel-select/panel-select.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm5/acaprojects-ngx-composer.js");
/* harmony import */ var _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory */ "./node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acaprojects/ngx-spinners */ "./node_modules/@acaprojects/ngx-spinners/fesm5/acaprojects-ngx-spinners.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm5/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../panel/panel.component.ngfactory */ "./src/app/shell/panel/panel.component.ngfactory.js");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../panel/panel.component */ "./src/app/shell/panel/panel.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */ "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm5/acaprojects-ngx-buttons.js");
/* harmony import */ var _panel_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./panel-select.component */ "./src/app/shell/panel-select/panel-select.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 















var styles_BookingPanelSelectComponent = [_panel_select_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BookingPanelSelectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BookingPanelSelectComponent, data: {} });

function View_BookingPanelSelectComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "room_name"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.system_name[_v.parent.context.$implicit] = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "icon"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.system_icon[_v.parent.context.$implicit] = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "today"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = (_co.updateStatus(_v.parent.context.$implicit, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.context.$implicit; var currVal_1 = "Bookings"; var currVal_2 = "room_name"; var currVal_3 = _co.system_name[_v.parent.context.$implicit]; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _v.parent.context.$implicit; var currVal_5 = "Bookings"; var currVal_6 = "icon"; var currVal_7 = _co.system_icon[_v.parent.context.$implicit]; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _v.parent.context.$implicit; var currVal_9 = "Bookings"; var currVal_10 = "today"; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10); }, null); }
function View_BookingPanelSelectComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.system_icon[_v.parent.context.$implicit]; _ck(_v, 0, 0, currVal_0); }); }
function View_BookingPanelSelectComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "a-spinner", [["circle-ring", ""], ["color", "#fff"]], null, null, null, _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ɵc_0"], _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ɵc"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_4__["ɵc"], [], { color: [0, "color"] }, null)], function (_ck, _v) { var currVal_0 = "#fff"; _ck(_v, 1, 0, currVal_0); }, null); }
function View_BookingPanelSelectComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "item"]], null, [[null, "tapped"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = ((_co.system_name[_v.context.$implicit] ? _co.showPanel(_v.context.$implicit) : "") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelSelectComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelSelectComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelSelectComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.context.$implicit; _ck(_v, 3, 0, currVal_0); var currVal_2 = _co.system_name[_v.context.$implicit]; _ck(_v, 6, 0, currVal_2); var currVal_3 = !_co.system_name[_v.context.$implicit]; _ck(_v, 8, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = ("icon" + (_co.system_status[_v.context.$implicit] ? (" " + _co.system_status[_v.context.$implicit]) : "")); _ck(_v, 4, 0, currVal_1); var currVal_4 = (_co.system_name[_v.context.$implicit] || (_v.context.$implicit + " connecting...")); _ck(_v, 10, 0, currVal_4); }); }
function View_BookingPanelSelectComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_BookingPanelSelectComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["SlicePipe"], []), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform(_co.systems, 0, 8)); _ck(_v, 2, 0, currVal_0); }, null); }
function View_BookingPanelSelectComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "panel-outlet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-booking-panel", [], null, null, null, _panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_BookingPanelComponent_0"], _panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_BookingPanelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 245760, null, 0, _panel_panel_component__WEBPACK_IMPORTED_MODULE_8__["BookingPanelComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]], { system_id: [0, "system_id"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 11, "div", [["class", "overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 6, "button", [["class", "action close"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.close() !== false);
        ad = (pd_0 && ad);
    } if (("contextmenu" === en)) {
        var pd_1 = ($event.preventDefault() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_13__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_13__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "button", [["class", "action countdown"], ["widget", ""]], null, [[null, "contextmenu"]], function (_v, en, $event) { var ad = true; if (("contextmenu" === en)) {
        var pd_0 = ($event.preventDefault() !== false);
        ad = (pd_0 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_13__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_13__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](14, 0, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.active_system; _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.countdown; _ck(_v, 14, 0, currVal_1); }); }
function View_BookingPanelSelectComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "info-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No systems are set for displaying on the panel select list"]))], null, null); }
function View_BookingPanelSelectComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "panel-select"]], null, [["window", "mousedown"], ["window", "touchstart"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("window:mousedown" === en)) {
        var pd_0 = (_co.reset() !== false);
        ad = (pd_0 && ad);
    } if (("window:touchstart" === en)) {
        var pd_1 = (_co.reset() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "panel-options"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelSelectComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"], ngIfElse: [1, "ngIfElse"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelSelectComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["none", 2]], null, 0, null, View_BookingPanelSelectComponent_7))], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.systems && (_co.systems.length > 0)); var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6); _ck(_v, 3, 0, currVal_0, currVal_1); var currVal_2 = _co.active_system; _ck(_v, 5, 0, currVal_2); }, null); }
function View_BookingPanelSelectComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-booking-panel-select", [], null, null, null, View_BookingPanelSelectComponent_0, RenderType_BookingPanelSelectComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _panel_select_component__WEBPACK_IMPORTED_MODULE_14__["BookingPanelSelectComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"], _services_app_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BookingPanelSelectComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-booking-panel-select", _panel_select_component__WEBPACK_IMPORTED_MODULE_14__["BookingPanelSelectComponent"], View_BookingPanelSelectComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shell/panel-select/panel-select.component.scss.shim.ngstyle.js":
/*!********************************************************************************!*\
  !*** ./src/app/shell/panel-select/panel-select.component.scss.shim.ngstyle.js ***!
  \********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".panel-select[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  background-color: #121212;\n}\n.panel-outlet[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border: 1px solid #fff;\n}\n.panel-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n  padding: 2em;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin: 0.5em;\n  height: 11.5em;\n  width: 10em;\n  background: linear-gradient(135deg, #051c2c, #0a2247, #0a2247, #1e3cd8);\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  padding: 0.5em;\n  border-radius: 4px;\n}\n.item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 7.5em;\n  background-color: rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n}\n.item[_ngcontent-%COMP%]   .icon.available[_ngcontent-%COMP%] {\n  background-color: rgba(67, 160, 71, 0.6);\n}\n.item[_ngcontent-%COMP%]   .icon.unavailable[_ngcontent-%COMP%] {\n  background-color: rgba(229, 57, 53, 0.6);\n}\n.item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   a-spinner[_ngcontent-%COMP%] {\n  font-size: 0.1em;\n}\n.icon[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 1em;\n  max-height: 1em;\n}\n.text[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #fff;\n  padding: 0.75em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5em;\n  left: 1.25em;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hlbGwvcGFuZWwtc2VsZWN0L3BhbmVsLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3N0ZGluIiwic3JjL2FwcC9zaGVsbC9wYW5lbC1zZWxlY3QvcGFuZWwtc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQTZCQTs7Y0FBQTtBQVdBOztzQkFBQTtBQ3RDQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDT0o7QURKQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FDT0o7QURKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ09KO0FESkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHVFRGRTO0VDZVQsK0dBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNPSjtBRExJO0VBQ0ksZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FDT1I7QURMUTtFQUNJLHdDQUFBO0FDT1o7QURKUTtFQUNJLHdDQUFBO0FDTVo7QURIUTtFQUNJLGdCQUFBO0FDS1o7QURBQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNHSjtBRERJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNHUjtBRENBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNFSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvcGFuZWwtc2VsZWN0L3BhbmVsLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogI2ZmZjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzFmNDBlNjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG5cbiRiYXNlLXNpemU6IDIwcHg7XG4kdGFibGV0LXNpemU6IDIwcHg7XG4kbW9iaWxlLXNpemU6IDIwcHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLnBhbmVsLXNlbGVjdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG59XG5cbi5wYW5lbC1vdXRsZXQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLnBhbmVsLW9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cblxuLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogLjVlbTtcbiAgICBoZWlnaHQ6IDExLjVlbTtcbiAgICB3aWR0aDogMTBlbTtcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG4gICAgcGFkZGluZzogLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogNy41ZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjA1KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gICAgICAgICYuYXZhaWxhYmxlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJHN1Y2Nlc3MsIC42KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYudW5hdmFpbGFibGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZXJyb3IsIC42KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGEtc3Bpbm5lciB7XG4gICAgICAgICAgICBmb250LXNpemU6IC4xZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5pY29uIHtcbiAgICBoZWlnaHQ6IDEuMmVtO1xuICAgIHdpZHRoOiAxLjJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDFlbTtcbiAgICAgICAgbWF4LWhlaWdodDogMWVtO1xuICAgIH1cbn1cblxuLnRleHQge1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAuNzVlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAuNWVtO1xuICAgIGxlZnQ6IDEuMjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4ucGFuZWwtc2VsZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG59XG5cbi5wYW5lbC1vdXRsZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLnBhbmVsLW9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAyZW07XG59XG5cbi5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgaGVpZ2h0OiAxMS41ZW07XG4gIHdpZHRoOiAxMGVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLml0ZW0gLmljb24ge1xuICBmb250LXNpemU6IDcuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uaXRlbSAuaWNvbi5hdmFpbGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDY3LCAxNjAsIDcxLCAwLjYpO1xufVxuLml0ZW0gLmljb24udW5hdmFpbGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIyOSwgNTcsIDUzLCAwLjYpO1xufVxuLml0ZW0gLmljb24gYS1zcGlubmVyIHtcbiAgZm9udC1zaXplOiAwLjFlbTtcbn1cblxuLmljb24ge1xuICBoZWlnaHQ6IDEuMmVtO1xuICB3aWR0aDogMS4yZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmljb24gaW1nIHtcbiAgbWF4LXdpZHRoOiAxZW07XG4gIG1heC1oZWlnaHQ6IDFlbTtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMC43NWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNWVtO1xuICBsZWZ0OiAxLjI1ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"];



/***/ }),

/***/ "./src/app/shell/panel-select/panel-select.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shell/panel-select/panel-select.component.ts ***!
  \**************************************************************/
/*! exports provided: BookingPanelSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPanelSelectComponent", function() { return BookingPanelSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/data/spaces/space.class */ "./src/app/services/data/spaces/space.class.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");






var BookingPanelSelectComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BookingPanelSelectComponent, _super);
    function BookingPanelSelectComponent(route, service) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.service = service;
        /** Names for the list of systems */
        _this.system_name = {};
        /** Icons for the list of systems */
        _this.system_icon = {};
        /** Status for the list of systems */
        _this.system_status = {};
        return _this;
    }
    BookingPanelSelectComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription('route.query', this.route.queryParamMap.subscribe(function (params) {
            if (params.has('system_ids')) {
                _this.systems = (params.get('system_ids') || '').split(',');
            }
        }));
    };
    /**
     * Show booking panel for the given system ID
     * @param id ID of the system to show
     */
    BookingPanelSelectComponent.prototype.showPanel = function (id) {
        this.active_system = id;
        this.reset();
    };
    /**
     * Update the status value for the given system ID
     * @param id ID of the system to update
     * @param bookings List of current bookings for the system
     */
    BookingPanelSelectComponent.prototype.updateStatus = function (id, bookings) {
        var space = new _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_4__["Space"](this.service.Spaces, { id: id, bookings: bookings });
        this.system_status[id] = space.current ? 'available' : 'unavailable';
    };
    /**
     * Close the modal
     */
    BookingPanelSelectComponent.prototype.close = function () {
        this.active_system = null;
        this.clearInterval('countdown');
    };
    /**
     * User confirmation of the content of the modal
     */
    BookingPanelSelectComponent.prototype.reset = function () {
        var _this = this;
        if (this.active_system) {
            this.countdown = 30;
            this.interval('countdown', function () { return _this.tick(); }, 1000);
        }
    };
    /**
     * Decrement countdown and close if 0
     */
    BookingPanelSelectComponent.prototype.tick = function () {
        if (this.countdown <= 0) {
            this.close();
        }
        this.countdown--;
    };
    return BookingPanelSelectComponent;
}(_shared_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/panel/booking-actions/booking-actions.component.ngfactory.js":
/*!************************************************************************************!*\
  !*** ./src/app/shell/panel/booking-actions/booking-actions.component.ngfactory.js ***!
  \************************************************************************************/
/*! exports provided: RenderType_PanelBookingActionsComponent, View_PanelBookingActionsComponent_0, View_PanelBookingActionsComponent_Host_0, PanelBookingActionsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PanelBookingActionsComponent", function() { return RenderType_PanelBookingActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PanelBookingActionsComponent_0", function() { return View_PanelBookingActionsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PanelBookingActionsComponent_Host_0", function() { return View_PanelBookingActionsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelBookingActionsComponentNgFactory", function() { return PanelBookingActionsComponentNgFactory; });
/* harmony import */ var _booking_actions_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-actions.component.scss.shim.ngstyle */ "./src/app/shell/panel/booking-actions/booking-actions.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */ "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm5/acaprojects-ngx-buttons.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm5/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm5/acaprojects-ngx-composer.js");
/* harmony import */ var _booking_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./booking-actions.component */ "./src/app/shell/panel/booking-actions/booking-actions.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_PanelBookingActionsComponent = [_booking_actions_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PanelBookingActionsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PanelBookingActionsComponent, data: {} });

function View_PanelBookingActionsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "button", [["class", "end large action"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.confirmEnd() !== false);
        ad = (pd_0 && ad);
    } if (("contextmenu" === en)) {
        var pd_1 = ($event.preventDefault() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["event_busy"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["End"]))], null, null); }
function View_PanelBookingActionsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "button", [["class", "start large action"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.startMeeting() !== false);
        ad = (pd_0 && ad);
    } if (("contextmenu" === en)) {
        var pd_1 = ($event.preventDefault() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["event_available"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Start"]))], null, null); }
function View_PanelBookingActionsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, "button", [["class", "book large action"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.book() !== false);
        ad = (pd_0 && ad);
    } if (("contextmenu" === en)) {
        var pd_1 = ($event.preventDefault() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["add"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Book"]))], null, null); }
function View_PanelBookingActionsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelBookingActionsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelBookingActionsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelBookingActionsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.status === "endable"); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.status === "pending"); _ck(_v, 4, 0, currVal_1); var currVal_2 = !_co.no_booking; _ck(_v, 6, 0, currVal_2); }, null); }
function View_PanelBookingActionsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "booking_disabled"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.no_booking = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "last_meeting_started"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.last_started = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "is_endable"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.is_endable = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "i", [["bind", "timeout"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.pending_timeout = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["bind", "cancel_timeout"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.cancel_timeout = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [["bind", "ask_start"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.ask_start = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "i", [["bind", "ask_end"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.ask_end = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "i", [["bind", "default_title"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.default_title = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "i", [["bind", "min_duration"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.min_duration = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "i", [["bind", "max_duration"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.max_duration = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "i", [["bind", "business_start"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.business_start = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "i", [["bind", "business_end"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.business_end = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space.id; var currVal_1 = "Bookings"; var currVal_2 = "booking_disabled"; var currVal_3 = _co.no_booking; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.space.id; var currVal_5 = "Bookings"; var currVal_6 = "last_meeting_started"; var currVal_7 = _co.last_started; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _co.space.id; var currVal_9 = "Bookings"; var currVal_10 = "is_endable"; var currVal_11 = _co.is_endable; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = _co.space.id; var currVal_13 = "Bookings"; var currVal_14 = "timeout"; var currVal_15 = _co.pending_timeout; _ck(_v, 8, 0, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_16 = _co.space.id; var currVal_17 = "Bookings"; var currVal_18 = "cancel_timeout"; var currVal_19 = _co.cancel_timeout; _ck(_v, 10, 0, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_20 = _co.space.id; var currVal_21 = "Bookings"; var currVal_22 = "ask_start"; var currVal_23 = _co.ask_start; _ck(_v, 12, 0, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_24 = _co.space.id; var currVal_25 = "Bookings"; var currVal_26 = "ask_end"; var currVal_27 = _co.ask_end; _ck(_v, 14, 0, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_28 = _co.space.id; var currVal_29 = "Bookings"; var currVal_30 = "default_title"; var currVal_31 = _co.default_title; _ck(_v, 16, 0, currVal_28, currVal_29, currVal_30, currVal_31); var currVal_32 = _co.space.id; var currVal_33 = "Bookings"; var currVal_34 = "min_duration"; var currVal_35 = _co.min_duration; _ck(_v, 18, 0, currVal_32, currVal_33, currVal_34, currVal_35); var currVal_36 = _co.space.id; var currVal_37 = "Bookings"; var currVal_38 = "max_duration"; var currVal_39 = _co.max_duration; _ck(_v, 20, 0, currVal_36, currVal_37, currVal_38, currVal_39); var currVal_40 = _co.space.id; var currVal_41 = "Bookings"; var currVal_42 = "business_start"; var currVal_43 = _co.business_start; _ck(_v, 22, 0, currVal_40, currVal_41, currVal_42, currVal_43); var currVal_44 = _co.space.id; var currVal_45 = "Bookings"; var currVal_46 = "business_end"; var currVal_47 = _co.business_end; _ck(_v, 24, 0, currVal_44, currVal_45, currVal_46, currVal_47); }, null); }
function View_PanelBookingActionsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "booking-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelBookingActionsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelBookingActionsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.space; _ck(_v, 4, 0, currVal_1); }, null); }
function View_PanelBookingActionsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "panel-booking-actions", [], null, null, null, View_PanelBookingActionsComponent_0, RenderType_PanelBookingActionsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 180224, null, 0, _booking_actions_component__WEBPACK_IMPORTED_MODULE_8__["PanelBookingActionsComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"]], null, null)], null, null); }
var PanelBookingActionsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("panel-booking-actions", _booking_actions_component__WEBPACK_IMPORTED_MODULE_8__["PanelBookingActionsComponent"], View_PanelBookingActionsComponent_Host_0, { space: "space" }, {}, []);



/***/ }),

/***/ "./src/app/shell/panel/booking-actions/booking-actions.component.scss.shim.ngstyle.js":
/*!********************************************************************************************!*\
  !*** ./src/app/shell/panel/booking-actions/booking-actions.component.scss.shim.ngstyle.js ***!
  \********************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".booking-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em;\n  max-width: 8.5em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .booking-actions[_ngcontent-%COMP%] {\n    padding: 0.5em 0.25em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .booking-actions[_ngcontent-%COMP%] {\n    padding: 0.5em 0.25em;\n  }\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  height: 1em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\nbutton.large[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\nbutton.large[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hlbGwvcGFuZWwvYm9va2luZy1hY3Rpb25zL2Jvb2tpbmctYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3N0ZGluIiwic3JjL2FwcC9zaGVsbC9wYW5lbC9ib29raW5nLWFjdGlvbnMvYm9va2luZy1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQTZCQTs7Y0FBQTtBQVdBOztzQkFBQTtBQ3RDQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ09KO0FGcUNRO0VDcERSO0lBV1EscUJBQUE7RUNRTjtBQUNGO0FGbUNRO0VDdkRSO0lBV1EscUJBQUE7RUNhTjtBQUNGO0FEVkE7RUFDSSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNhSjtBRFpJO0VBQ0ksY0FBQTtBQ2NSO0FEVkE7RUFDSSxjQUFBO0FDYUo7QURaSTtFQUNJLGdCQUFBO0FDY1IiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9wYW5lbC9ib29raW5nLWFjdGlvbnMvYm9va2luZy1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uYm9va2luZy1hY3Rpb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBtYXgtd2lkdGg6IDguNWVtO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgcGFkZGluZzogLjVlbSAuMjVlbTtcbiAgICB9XG59XG5cbi5pY29uIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDEuMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBpICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn1cblxuYnV0dG9uLmxhcmdlIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjRlbTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uYm9va2luZy1hY3Rpb25zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxZW07XG4gIG1heC13aWR0aDogOC41ZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuYm9va2luZy1hY3Rpb25zIHtcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjI1ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYm9va2luZy1hY3Rpb25zIHtcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjI1ZW07XG4gIH1cbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBoZWlnaHQ6IDFlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5pY29uIGkge1xuICBmb250LXNpemU6IDFlbTtcbn1cblxuYnV0dG9uLmxhcmdlIHtcbiAgZm9udC1zaXplOiAzZW07XG59XG5idXR0b24ubGFyZ2UgLnRleHQge1xuICBmb250LXNpemU6IDAuNGVtO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/shell/panel/booking-actions/booking-actions.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/shell/panel/booking-actions/booking-actions.component.ts ***!
  \**************************************************************************/
/*! exports provided: PanelBookingActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelBookingActionsComponent", function() { return PanelBookingActionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/data/spaces/space.class */ "./src/app/services/data/spaces/space.class.ts");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);






var PanelBookingActionsComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PanelBookingActionsComponent, _super);
    function PanelBookingActionsComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        /** Whether booking is allowed */
        _this.no_booking = false;
        /** Time of the last automatic confirmation of start or end */
        _this.last_confirm = 0;
        return _this;
    }
    Object.defineProperty(PanelBookingActionsComponent.prototype, "status", {
        /** Current status of the active system */
        get: function () {
            var status = 'available';
            if (this.space && (this.space.current || this.space.next)) {
                var booking = this.space.current || this.space.next;
                status = this.space.current ? 'unavailable' : 'available';
                if (this.pending_timeout) {
                    var now = dayjs__WEBPACK_IMPORTED_MODULE_5__().startOf('m').second(1);
                    var business_start = dayjs__WEBPACK_IMPORTED_MODULE_5__(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_4__["timeToDate"])(this.business_start || '08:00'));
                    var business_end = dayjs__WEBPACK_IMPORTED_MODULE_5__(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_4__["timeToDate"])(this.business_end || '17:30'));
                    // Check if within business hours before looking at pending logic
                    if (now.isBefore(business_start, 'm') || now.isAfter(business_end, 'm')) {
                        return status;
                    }
                    var date = dayjs__WEBPACK_IMPORTED_MODULE_5__(booking.date);
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
                            }
                            else {
                                status = 'unavailable';
                            }
                        }
                        else {
                            status = 'unavailable';
                        }
                    }
                    else {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Open modal to make a new booking
     */
    PanelBookingActionsComponent.prototype.book = function () {
        this.service.Bookings.new({
            space: this.space,
            title: this.default_title,
            max_duration: this.max_duration,
            min_duration: this.min_duration
        });
    };
    /**
     * Open confirmation modal for starting the meeting
     */
    PanelBookingActionsComponent.prototype.confirmStart = function () {
        var _this = this;
        this.service.Overlay.open('confirm', {
            config: 'modal',
            data: {
                title: 'Do you wish to start your meeting?',
                body: "If you don't start your meeting it will be cancelled " + this.cancel_timeout / 60 + " minutes after the start time.",
                icon: { class: 'material-icons', value: 'play_arrow' }
            }
        }, function (_) { return _this.startMeeting(); });
    };
    /**
     * Execute the logic on the engine driver to start the current or upcoming meeting
     */
    PanelBookingActionsComponent.prototype.startMeeting = function () {
        var _this = this;
        if (this.space) {
            var meeting = this.space.current || this.space.next;
            var module = this.service.Systems.get(this.space.id, 'Bookings');
            if (meeting && module) {
                var date_1 = dayjs__WEBPACK_IMPORTED_MODULE_5__(meeting.date);
                module.exec('start_meeting', [meeting.date]).then(function (_) {
                    _this.service.Analytics.event('Checkin', 'checked-in', _this.space.id + " at " + date_1.format('DD MMM YYYY, h:mm A Z'));
                }, function (e) {
                    _this.service.notifyError("Error starting meeting. " + e);
                    _this.service.Analytics.event('Checkin', 'checked-in-failed', _this.space.id + " at " + date_1.format('DD MMM YYYY, h:mm A Z'));
                });
            }
        }
    };
    /**
     * Open confirmation modal for ending the meeting
     */
    PanelBookingActionsComponent.prototype.confirmEnd = function () {
        var _this = this;
        this.service.Overlay.open('confirm', {
            config: 'modal',
            data: {
                title: 'Are you sure want to end your meeting?',
                body: 'Ending your meeting early will free up this room for others to use',
                icon: { class: 'material-icons', value: 'stop' }
            }
        }, function (_) { return _this.endMeeting(); });
    };
    /**
     * Execute end meeting logic on engine driver
     * @param reason Reason for ending the meeting early
     */
    PanelBookingActionsComponent.prototype.endMeeting = function (reason) {
        var _this = this;
        if (reason === void 0) { reason = 'user_input'; }
        if (this.space) {
            var meeting = this.space.current || this.space.next;
            var module = this.service.Systems.get(this.space.id, 'Bookings');
            if (meeting && module) {
                var date_2 = dayjs__WEBPACK_IMPORTED_MODULE_5__(meeting.date);
                module.exec('cancel_meeting', [meeting.date, reason]).then(function (_) {
                    _this.service.Analytics.event('Checkin', 'cancelled', _this.space.id + " at " + date_2.format('DD MMM YYYY, h:mm A Z') + " | " + reason);
                }, function (e) {
                    _this.service.notifyError("Error starting meeting. " + e);
                    _this.service.Analytics.event('Checkin', 'cancel-failed', _this.space.id + " at " + date_2.format('DD MMM YYYY, h:mm A Z') + " | " + reason);
                });
            }
        }
    };
    return PanelBookingActionsComponent;
}(_shared_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/panel/custom-actions/custom-actions.component.ngfactory.js":
/*!**********************************************************************************!*\
  !*** ./src/app/shell/panel/custom-actions/custom-actions.component.ngfactory.js ***!
  \**********************************************************************************/
/*! exports provided: RenderType_PanelCustomActionsComponent, View_PanelCustomActionsComponent_0, View_PanelCustomActionsComponent_Host_0, PanelCustomActionsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PanelCustomActionsComponent", function() { return RenderType_PanelCustomActionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PanelCustomActionsComponent_0", function() { return View_PanelCustomActionsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PanelCustomActionsComponent_Host_0", function() { return View_PanelCustomActionsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelCustomActionsComponentNgFactory", function() { return PanelCustomActionsComponentNgFactory; });
/* harmony import */ var _custom_actions_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-actions.component.scss.shim.ngstyle */ "./src/app/shell/panel/custom-actions/custom-actions.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */ "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm5/acaprojects-ngx-buttons.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm5/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm5/acaprojects-ngx-composer.js");
/* harmony import */ var _custom_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-actions.component */ "./src/app/shell/panel/custom-actions/custom-actions.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 










var styles_PanelCustomActionsComponent = [_custom_actions_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PanelCustomActionsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PanelCustomActionsComponent, data: {} });

function View_PanelCustomActionsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "button", [["class", "action control"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.openControl() !== false);
        ad = (pd_0 && ad);
    } if (("contextmenu" === en)) {
        var pd_1 = ($event.preventDefault() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["dvr"]))], null, null); }
function View_PanelCustomActionsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "button", [["class", "action service"], ["widget", ""]], null, [[null, "tapped"], [null, "contextmenu"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.confirmWaiterCall() !== false);
        ad = (pd_0 && ad);
    } if (("contextmenu" === en)) {
        var pd_1 = ($event.preventDefault() !== false);
        ad = (pd_1 && ad);
    } return ad; }, _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AButtonComponent_0"], _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4767744, null, 0, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__["AButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["room_service"]))], null, null); }
function View_PanelCustomActionsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelCustomActionsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelCustomActionsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.can_control !== false) && _co.control_url); _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.catering; _ck(_v, 4, 0, currVal_1); }, null); }
function View_PanelCustomActionsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "control_url"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.control_url = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "can_control"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.can_control = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "has_catering"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.catering = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_7__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space.id; var currVal_1 = "Bookings"; var currVal_2 = "control_url"; var currVal_3 = _co.control_url; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.space.id; var currVal_5 = "Bookings"; var currVal_6 = "can_control"; var currVal_7 = _co.can_control; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _co.space.id; var currVal_9 = "Bookings"; var currVal_10 = "has_catering"; var currVal_11 = _co.catering; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11); }, null); }
function View_PanelCustomActionsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "custom-actions"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelCustomActionsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelCustomActionsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.space; _ck(_v, 4, 0, currVal_1); }, null); }
function View_PanelCustomActionsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "panel-custom-actions", [], null, null, null, View_PanelCustomActionsComponent_0, RenderType_PanelCustomActionsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _custom_actions_component__WEBPACK_IMPORTED_MODULE_8__["PanelCustomActionsComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"]], null, null)], null, null); }
var PanelCustomActionsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("panel-custom-actions", _custom_actions_component__WEBPACK_IMPORTED_MODULE_8__["PanelCustomActionsComponent"], View_PanelCustomActionsComponent_Host_0, { space: "space" }, {}, []);



/***/ }),

/***/ "./src/app/shell/panel/custom-actions/custom-actions.component.scss.shim.ngstyle.js":
/*!******************************************************************************************!*\
  !*** ./src/app/shell/panel/custom-actions/custom-actions.component.scss.shim.ngstyle.js ***!
  \******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".custom-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  padding: 2em 1em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .custom-actions[_ngcontent-%COMP%] {\n    padding: 2em 0.25em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .custom-actions[_ngcontent-%COMP%] {\n    padding: 2em 0.25em;\n  }\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hlbGwvcGFuZWwvY3VzdG9tLWFjdGlvbnMvY3VzdG9tLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zdGRpbiIsInNyYy9hcHAvc2hlbGwvcGFuZWwvY3VzdG9tLWFjdGlvbnMvY3VzdG9tLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBNkJBOztjQUFBO0FBV0E7O3NCQUFBO0FDdENBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDT0o7QUZ1Q1E7RUNwRFI7SUFTUSxtQkFBQTtFQ1FOO0FBQ0Y7QUZxQ1E7RUN2RFI7SUFTUSxtQkFBQTtFQ2FOO0FBQ0Y7QURWQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ2FKO0FEWkk7RUFDSSxjQUFBO0FDY1IiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9wYW5lbC9jdXN0b20tYWN0aW9ucy9jdXN0b20tYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogI2ZmZjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzFmNDBlNjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG5cbiRiYXNlLXNpemU6IDIwcHg7XG4kdGFibGV0LXNpemU6IDIwcHg7XG4kbW9iaWxlLXNpemU6IDIwcHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmN1c3RvbS1hY3Rpb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJlbSAxZW07XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBwYWRkaW5nOiAyZW0gLjI1ZW07XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBoZWlnaHQ6IDEuMmVtO1xuICAgIHdpZHRoOiAxLjJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaSAge1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY3VzdG9tLWFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMmVtIDFlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jdXN0b20tYWN0aW9ucyB7XG4gICAgcGFkZGluZzogMmVtIDAuMjVlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jdXN0b20tYWN0aW9ucyB7XG4gICAgcGFkZGluZzogMmVtIDAuMjVlbTtcbiAgfVxufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGhlaWdodDogMS4yZW07XG4gIHdpZHRoOiAxLjJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaWNvbiBpIHtcbiAgZm9udC1zaXplOiAxZW07XG59Il19 */"];



/***/ }),

/***/ "./src/app/shell/panel/custom-actions/custom-actions.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shell/panel/custom-actions/custom-actions.component.ts ***!
  \************************************************************************/
/*! exports provided: PanelCustomActionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelCustomActionsComponent", function() { return PanelCustomActionsComponent; });
/* harmony import */ var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/data/spaces/space.class */ "./src/app/services/data/spaces/space.class.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");


var PanelCustomActionsComponent = /** @class */ (function () {
    function PanelCustomActionsComponent(service) {
        this.service = service;
    }
    /**
     * Open confirmation modal for ending the meeting
     */
    PanelCustomActionsComponent.prototype.confirmWaiterCall = function () {
        var _this = this;
        this.service.Overlay.open('confirm', {
            config: 'modal',
            data: {
                title: 'Call a waiter to your room?',
                body: 'Call a waiter to your room to order catering',
                icon: { class: 'material-icons', value: 'call' }
            }
        }, function (_) { return _this.callWaiter(); });
    };
    /**
     * Execute call waiter logic on engine driver
     */
    PanelCustomActionsComponent.prototype.callWaiter = function () {
        var _this = this;
        if (this.space) {
            var module = this.service.Systems.get(this.space.id, 'Bookings');
            if (module) {
                module.exec('waiter_call', []).then(function (_) {
                    _this.service.Analytics.event('Catering', 'waiter-call', (new Date).toISOString());
                }, function (e) {
                    _this.service.Analytics.event('Catering', 'waiter-call-failed', (new Date).toISOString());
                    _this.service.notifyError("Error calling waiter. " + e);
                });
            }
        }
    };
    /**
     * Open modal to show embeded control URL
     */
    PanelCustomActionsComponent.prototype.openControl = function () {
        this.service.Analytics.event('Control', 'open-view', (new Date).toISOString());
        this.service.Overlay.open('embeded-control', {
            config: 'modal',
            data: {
                control_url: this.control_url
            }
        });
    };
    return PanelCustomActionsComponent;
}());



/***/ }),

/***/ "./src/app/shell/panel/panel.component.ngfactory.js":
/*!**********************************************************!*\
  !*** ./src/app/shell/panel/panel.component.ngfactory.js ***!
  \**********************************************************/
/*! exports provided: RenderType_BookingPanelComponent, View_BookingPanelComponent_0, View_BookingPanelComponent_Host_0, BookingPanelComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_BookingPanelComponent", function() { return RenderType_BookingPanelComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BookingPanelComponent_0", function() { return View_BookingPanelComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_BookingPanelComponent_Host_0", function() { return View_BookingPanelComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPanelComponentNgFactory", function() { return BookingPanelComponentNgFactory; });
/* harmony import */ var _panel_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.component.scss.shim.ngstyle */ "./src/app/shell/panel/panel.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _space_details_space_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./space-details/space-details.component.ngfactory */ "./src/app/shell/panel/space-details/space-details.component.ngfactory.js");
/* harmony import */ var _space_details_space_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space-details/space-details.component */ "./src/app/shell/panel/space-details/space-details.component.ts");
/* harmony import */ var _booking_actions_booking_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking-actions/booking-actions.component.ngfactory */ "./src/app/shell/panel/booking-actions/booking-actions.component.ngfactory.js");
/* harmony import */ var _booking_actions_booking_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking-actions/booking-actions.component */ "./src/app/shell/panel/booking-actions/booking-actions.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _custom_actions_custom_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-actions/custom-actions.component.ngfactory */ "./src/app/shell/panel/custom-actions/custom-actions.component.ngfactory.js");
/* harmony import */ var _custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-actions/custom-actions.component */ "./src/app/shell/panel/custom-actions/custom-actions.component.ts");
/* harmony import */ var _timeline_timeline_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./timeline/timeline.component.ngfactory */ "./src/app/shell/panel/timeline/timeline.component.ngfactory.js");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/shell/panel/timeline/timeline.component.ts");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm5/acaprojects-ngx-composer.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm5/acaprojects-ngx-custom-events.js");
/* harmony import */ var _panel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./panel.component */ "./src/app/shell/panel/panel.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
















var styles_BookingPanelComponent = [_panel_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BookingPanelComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BookingPanelComponent, data: {} });

function View_BookingPanelComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "time-display"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.display_time; _ck(_v, 1, 0, currVal_0); }); }
function View_BookingPanelComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "panel-space-details", [], null, null, null, _space_details_space_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_PanelSpaceDetailsComponent_0"], _space_details_space_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_PanelSpaceDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _space_details_space_details_component__WEBPACK_IMPORTED_MODULE_3__["PanelSpaceDetailsComponent"], [], { space: [0, "space"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space; _ck(_v, 2, 0, currVal_0); }, null); }
function View_BookingPanelComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "panel-booking-actions", [], null, null, null, _booking_actions_booking_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_PanelBookingActionsComponent_0"], _booking_actions_booking_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_PanelBookingActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _booking_actions_booking_actions_component__WEBPACK_IMPORTED_MODULE_5__["PanelBookingActionsComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]], { space: [0, "space"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "panel-custom-actions", [], null, null, null, _custom_actions_custom_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_PanelCustomActionsComponent_0"], _custom_actions_custom_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_PanelCustomActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_8__["PanelCustomActionsComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]], { space: [0, "space"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.space; _ck(_v, 4, 0, currVal_1); }, null); }
function View_BookingPanelComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "timeline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "panel-timeline", [], null, null, null, _timeline_timeline_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_PanelTimelineComponent_0"], _timeline_timeline_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_PanelTimelineComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 770048, null, 0, _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_10__["PanelTimelineComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]], { space: [0, "space"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space; _ck(_v, 2, 0, currVal_0); }, null); }
function View_BookingPanelComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "room_name"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.space_name = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "touch_enabled"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.interactive = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "today"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = (_co.updateBookings($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "i", [["bind", "timeout"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.pending_timeout = $event) !== false);
        ad = (pd_0 && ad);
    } if (("modelChange" === en)) {
        var pd_1 = (_co.updateStatus() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["bind", "cancel_timeout"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.cancel_timeout = $event) !== false);
        ad = (pd_0 && ad);
    } if (("modelChange" === en)) {
        var pd_1 = (_co.updateStatus() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [["bind", "last_meeting_started"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.last_started = $event) !== false);
        ad = (pd_0 && ad);
    } if (("modelChange" === en)) {
        var pd_1 = (_co.updateStatus() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "i", [["bind", "hide_all"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_all = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "i", [["bind", "flip_status"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.flip_status = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "i", [["bind", "can_cancel"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.can_cancel = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "i", [["bind", "business_start"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.business_start = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "i", [["bind", "business_end"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.business_end = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "i", [["bind", "status_override"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.status_overrides = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_11__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.system_id; var currVal_1 = "Bookings"; var currVal_2 = "room_name"; var currVal_3 = _co.space_name; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.system_id; var currVal_5 = "Bookings"; var currVal_6 = "touch_enabled"; var currVal_7 = _co.interactive; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _co.system_id; var currVal_9 = "Bookings"; var currVal_10 = "today"; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = _co.system_id; var currVal_12 = "Bookings"; var currVal_13 = "timeout"; var currVal_14 = _co.pending_timeout; _ck(_v, 8, 0, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = _co.system_id; var currVal_16 = "Bookings"; var currVal_17 = "cancel_timeout"; var currVal_18 = _co.cancel_timeout; _ck(_v, 10, 0, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_19 = _co.system_id; var currVal_20 = "Bookings"; var currVal_21 = "last_meeting_started"; var currVal_22 = _co.last_started; _ck(_v, 12, 0, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_23 = _co.system_id; var currVal_24 = "Bookings"; var currVal_25 = "hide_all"; var currVal_26 = _co.hide_all; _ck(_v, 14, 0, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_27 = _co.system_id; var currVal_28 = "Bookings"; var currVal_29 = "flip_status"; var currVal_30 = _co.flip_status; _ck(_v, 16, 0, currVal_27, currVal_28, currVal_29, currVal_30); var currVal_31 = _co.system_id; var currVal_32 = "Bookings"; var currVal_33 = "can_cancel"; var currVal_34 = _co.can_cancel; _ck(_v, 18, 0, currVal_31, currVal_32, currVal_33, currVal_34); var currVal_35 = _co.system_id; var currVal_36 = "Bookings"; var currVal_37 = "business_start"; var currVal_38 = _co.business_start; _ck(_v, 20, 0, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_39 = _co.system_id; var currVal_40 = "Bookings"; var currVal_41 = "business_end"; var currVal_42 = _co.business_end; _ck(_v, 22, 0, currVal_39, currVal_40, currVal_41, currVal_42); var currVal_43 = _co.system_id; var currVal_44 = "Bookings"; var currVal_45 = "status_override"; var currVal_46 = _co.status_overrides; _ck(_v, 24, 0, currVal_43, currVal_44, currVal_45, currVal_46); }, null); }
function View_BookingPanelComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "div", [["class", "booking-panel"]], [[2, "disabled", null], [2, "reverse", null], [2, "no-time", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 13, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 10, "div", [["class", "details-display"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 7, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 2, "div", [["class", "title"]], [[2, "show", null]], [[null, "tapped"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.showTitle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_13__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](9, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](11, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = _co.show_time; _ck(_v, 3, 0, currVal_4); var currVal_9 = (!_co.hide_all && _co.show_details); _ck(_v, 13, 0, currVal_9); var currVal_10 = (!_co.hide_all && _co.show_details); _ck(_v, 15, 0, currVal_10); var currVal_11 = _co.show_details; _ck(_v, 17, 0, currVal_11); var currVal_12 = _co.system_id; _ck(_v, 19, 0, currVal_12); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.interactive === false); var currVal_1 = (_co.reverse || _co.flip_status); var currVal_2 = !_co.show_time; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); var currVal_3 = ("status" + ((_co.status && !_co.hide_all) ? (" " + _co.status) : "")); _ck(_v, 1, 0, currVal_3); var currVal_5 = _co.show_title; _ck(_v, 7, 0, currVal_5); var currVal_6 = _co.space_name; _ck(_v, 9, 0, currVal_6); var currVal_7 = ("status-text" + ((_co.status && !_co.hide_all) ? (" " + _co.status) : "")); _ck(_v, 10, 0, currVal_7); var currVal_8 = ((!_co.hide_all ? _co.status_display : null) || "Not Bookable"); _ck(_v, 11, 0, currVal_8); }); }
function View_BookingPanelComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-booking-panel", [], null, null, null, View_BookingPanelComponent_0, RenderType_BookingPanelComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _panel_component__WEBPACK_IMPORTED_MODULE_14__["BookingPanelComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_15__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BookingPanelComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-booking-panel", _panel_component__WEBPACK_IMPORTED_MODULE_14__["BookingPanelComponent"], View_BookingPanelComponent_Host_0, { system_id: "system_id", reverse: "reverse", show_time: "show_time" }, {}, []);



/***/ }),

/***/ "./src/app/shell/panel/panel.component.scss.shim.ngstyle.js":
/*!******************************************************************!*\
  !*** ./src/app/shell/panel/panel.component.scss.shim.ngstyle.js ***!
  \******************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".booking-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n}\n@media only screen and (orientation: portrait) {\n  .booking-panel[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.booking-panel.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.booking-panel.disabled[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n.booking-panel.disabled[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n.booking-panel.reverse[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.status[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 10em;\n  background-color: #aaa;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  color: #fff;\n  transition: background-color 200ms;\n}\n@media only screen and (orientation: portrait) {\n  .status[_ngcontent-%COMP%] {\n    height: 8em;\n    width: 100%;\n    align-items: center;\n  }\n}\n@media only screen and (orientation: landscape) and (min-width: 801px) and (max-width: 1048px) {\n  .status[_ngcontent-%COMP%] {\n    width: 8em;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .status[_ngcontent-%COMP%] {\n    height: 4em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .status[_ngcontent-%COMP%] {\n    width: 6em;\n  }\n}\n.status.available[_ngcontent-%COMP%] {\n  background-color: #43a047;\n}\n.status.pending[_ngcontent-%COMP%] {\n  background-color: #ffb300;\n}\n.status.unavailable[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n.time-display[_ngcontent-%COMP%] {\n  margin: 1.5em 0.5em;\n  font-size: 1.25em;\n}\n@media only screen and (orientation: portrait) {\n  .time-display[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 10em;\n  flex: 1;\n  height: 100%;\n  background: linear-gradient(135deg, #051c2c, #0a2247, #0a2247, #1e3cd8);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n@media only screen and (orientation: portrait) {\n  .body[_ngcontent-%COMP%] {\n    min-height: 8em;\n    height: auto;\n    width: 100%;\n  }\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 3em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 400;\n  font-family: \"LarishMcKinsey\", \"Georgia\", serif;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .title[_ngcontent-%COMP%] {\n    font-size: 2em;\n  }\n}\n.title.show[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n.status-text[_ngcontent-%COMP%] {\n  font-size: 2em;\n  text-transform: capitalize;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #ccc;\n  transition: color 200ms;\n  margin-bottom: 0.25em;\n  font-family: \"LarishMcKinsey\", \"Georgia\", serif;\n  transition: color 200ms;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .status-text[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .status-text[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n.status-text.available[_ngcontent-%COMP%] {\n  color: #43a047;\n}\n.status-text.pending[_ngcontent-%COMP%] {\n  color: #ffb300;\n}\n.status-text.unavailable[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.details-display[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 12em;\n  flex: 1;\n  padding: 1em 2em;\n  overflow: hidden;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .details-display[_ngcontent-%COMP%] {\n    padding: 1em 1.5em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .details-display[_ngcontent-%COMP%] {\n    padding: 1em 1.5em;\n  }\n}\n.timeline[_ngcontent-%COMP%] {\n  height: 4em;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.no-time[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  width: 6em;\n}\n@media only screen and (orientation: portrait) {\n  .no-time[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    height: 6em;\n    width: 100%;\n    align-items: center;\n  }\n}\n.no-time[_ngcontent-%COMP%]   .details-display[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  padding: 1em;\n}\n.dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  height: 1.5em;\n  width: 1.5em;\n  border-radius: 50%;\n  background-color: #e53935;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hlbGwvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zdGRpbiIsInNyYy9hcHAvc2hlbGwvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBNkJBOztjQUFBO0FBV0E7O3NCQUFBO0FDdkNBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDUUo7QUZvSFE7RUNuSVI7SUFTUSxzQkFBQTtFQ1VOO0FBQ0Y7QURSSTtFQUNJLG9CQUFBO0FDVVI7QURUUTtFQUNJLCtCQUFBO0FDV1o7QURSUTtFQUNJLGFBQUE7QUNVWjtBRE5JO0VBQ0ksMkJBQUE7QUNRUjtBREpBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGtDQUFBO0FDT0o7QUZ3RlE7RUN2R1I7SUFXUSxXQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDUU47QUFDRjtBRitDUTtFQ3JFUjtJQWlCUSxVQUFBO0VDU047QUFDRjtBRlNRO0VDcENSO0lBcUJRLFdBQUE7RUNVTjtBQUNGO0FGQVE7RUNoQ1I7SUEwQlEsVUFBQTtFQ1VOO0FBQ0Y7QURSSTtFQUNJLHlCRHBERTtBRThEVjtBRFBJO0VBQ0kseUJEcERFO0FFNkRWO0FETkk7RUFDSSx5QkRwREE7QUU0RFI7QURKQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7QUNPSjtBRm9EUTtFQzdEUjtJQUtRLGdCQUFBO0VDUU47QUFDRjtBRExBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSx1RUQxRFM7RUMyRFQsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDUUo7QUZtQ1E7RUNwRFI7SUFZUSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7RUNTTjtBQUNGO0FETkE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0R0RVc7QUUrRWY7QUYzRFE7RUM0Q1I7SUFTUSxjQUFBO0VDVU47QUFDRjtBRjdEUTtFQ3lDUjtJQVNRLGNBQUE7RUNlTjtBQUNGO0FEYkk7RUFDSSxtQkFBQTtBQ2VSO0FEWEE7RUFDSSxjQUFBO0VBQ0EsMEJBQUE7RUFFQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQ0QxRlc7RUMyRlgsdUJBQUE7QUNhSjtBRnBGUTtFQzZEUjtJQWFRLGdCQUFBO0VDY047QUFDRjtBRnRGUTtFQzBEUjtJQWFRLGdCQUFBO0VDbUJOO0FBQ0Y7QURqQkk7RUFDSSxjRDdIRTtBRWdKVjtBRGhCSTtFQUNJLGNEN0hFO0FFK0lWO0FEZkk7RUFDSSxjRDdIQTtBRThJUjtBRGJBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQ2dCSjtBRmhIUTtFQzBGUjtJQVNRLGtCQUFBO0VDaUJOO0FBQ0Y7QUZsSFE7RUN1RlI7SUFTUSxrQkFBQTtFQ3NCTjtBQUNGO0FEbkJBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSwyQ0FBQTtBQ3NCSjtBRGxCSTtFQUNJLFVBQUE7QUNxQlI7QUZ0RFE7RUNnQ0o7SUFJUSxXQUFBO0lBQ0EsV0FBQTtJQUNBLG1CQUFBO0VDc0JWO0FBQ0Y7QURuQkk7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNxQlI7QURqQkE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRDVLSTtBRWdNUiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmJvb2tpbmctcGFuZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8ocG9ydHJhaXQpIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICoge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnJldmVyc2Uge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgfVxufVxuXG4uc3RhdHVzIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhwb3J0cmFpdCkge1xuICAgICAgICBoZWlnaHQ6IDhlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byh0YWJsZXQtbGFuZHNjYXBlKSB7XG4gICAgICAgIHdpZHRoOiA4ZW07XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUtcG9ydHJhaXQpIHtcbiAgICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgfVxuXG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZS1sYW5kc2NhcGUpIHtcbiAgICAgICAgd2lkdGg6IDZlbTtcbiAgICB9XG5cbiAgICAmLmF2YWlsYWJsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzO1xuICAgIH1cblxuICAgICYucGVuZGluZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwZW5kaW5nO1xuICAgIH1cblxuICAgICYudW5hdmFpbGFibGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZXJyb3I7XG4gICAgfVxufVxuXG4udGltZS1kaXNwbGF5IHtcbiAgICBtYXJnaW46IDEuNWVtIC41ZW07XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHBvcnRyYWl0KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxufVxuXG4uYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi13aWR0aDogMTBlbTtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiAkYmFja2dyb3VuZDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8ocG9ydHJhaXQpIHtcbiAgICAgICAgbWluLWhlaWdodDogOGVtO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LWZhbWlseTogJGhlYWRpbmctZm9udDtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIH1cblxuICAgICYuc2hvdyB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgfVxufVxuXG4uc3RhdHVzLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIC8vIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBjb2xvcjogI2NjYztcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcbiAgICBtYXJnaW4tYm90dG9tOiAuMjVlbTtcbiAgICBmb250LWZhbWlseTogJGhlYWRpbmctZm9udDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxuXG4gICAgJi5hdmFpbGFibGUge1xuICAgICAgICBjb2xvcjogJHN1Y2Nlc3M7XG4gICAgfVxuXG4gICAgJi5wZW5kaW5nIHtcbiAgICAgICAgY29sb3I6ICRwZW5kaW5nO1xuICAgIH1cblxuICAgICYudW5hdmFpbGFibGUge1xuICAgICAgICBjb2xvcjogJGVycm9yO1xuICAgIH1cbn1cblxuLmRldGFpbHMtZGlzcGxheSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEyZW07XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gICAgfVxufVxuXG4udGltZWxpbmUge1xuICAgIGhlaWdodDogNGVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjA1KTtcbn1cblxuLm5vLXRpbWUge1xuICAgIC5zdGF0dXMge1xuICAgICAgICB3aWR0aDogNmVtO1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8ocG9ydHJhaXQpIHtcbiAgICAgICAgICAgIGhlaWdodDogNmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRldGFpbHMtZGlzcGxheSB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgIH1cbn1cblxuLmRvdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMWVtO1xuICAgIHJpZ2h0OiAxZW07XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRlcnJvcjtcbn0iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uYm9va2luZy1wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5ib29raW5nLXBhbmVsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uYm9va2luZy1wYW5lbC5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmJvb2tpbmctcGFuZWwuZGlzYWJsZWQgKiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZy1wYW5lbC5kaXNhYmxlZCAub3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYm9va2luZy1wYW5lbC5yZXZlcnNlIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4uc3RhdHVzIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTBlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLnN0YXR1cyB7XG4gICAgaGVpZ2h0OiA4ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6IDgwMXB4KSBhbmQgKG1heC13aWR0aDogMTA0OHB4KSB7XG4gIC5zdGF0dXMge1xuICAgIHdpZHRoOiA4ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5zdGF0dXMge1xuICAgIGhlaWdodDogNGVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnN0YXR1cyB7XG4gICAgd2lkdGg6IDZlbTtcbiAgfVxufVxuLnN0YXR1cy5hdmFpbGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDNhMDQ3O1xufVxuLnN0YXR1cy5wZW5kaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjMwMDtcbn1cbi5zdGF0dXMudW5hdmFpbGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUzOTM1O1xufVxuXG4udGltZS1kaXNwbGF5IHtcbiAgbWFyZ2luOiAxLjVlbSAwLjVlbTtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLnRpbWUtZGlzcGxheSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxufVxuXG4uYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLXdpZHRoOiAxMGVtO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAuYm9keSB7XG4gICAgbWluLWhlaWdodDogOGVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDNlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtZmFtaWx5OiBcIkxhcmlzaE1jS2luc2V5XCIsIFwiR2VvcmdpYVwiLCBzZXJpZjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG59XG4udGl0bGUuc2hvdyB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5cbi5zdGF0dXMtdGV4dCB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGNvbG9yOiAjY2NjO1xuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcbiAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xuICBmb250LWZhbWlseTogXCJMYXJpc2hNY0tpbnNleVwiLCBcIkdlb3JnaWFcIiwgc2VyaWY7XG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnN0YXR1cy10ZXh0IHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnN0YXR1cy10ZXh0IHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICB9XG59XG4uc3RhdHVzLXRleHQuYXZhaWxhYmxlIHtcbiAgY29sb3I6ICM0M2EwNDc7XG59XG4uc3RhdHVzLXRleHQucGVuZGluZyB7XG4gIGNvbG9yOiAjZmZiMzAwO1xufVxuLnN0YXR1cy10ZXh0LnVuYXZhaWxhYmxlIHtcbiAgY29sb3I6ICNlNTM5MzU7XG59XG5cbi5kZXRhaWxzLWRpc3BsYXkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMmVtO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxZW0gMmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmRldGFpbHMtZGlzcGxheSB7XG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmRldGFpbHMtZGlzcGxheSB7XG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xuICB9XG59XG5cbi50aW1lbGluZSB7XG4gIGhlaWdodDogNGVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbn1cblxuLm5vLXRpbWUgLnN0YXR1cyB7XG4gIHdpZHRoOiA2ZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLm5vLXRpbWUgLnN0YXR1cyB7XG4gICAgaGVpZ2h0OiA2ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLm5vLXRpbWUgLmRldGFpbHMtZGlzcGxheSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLmRvdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxZW07XG4gIHJpZ2h0OiAxZW07XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUzOTM1O1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/shell/panel/panel.component.ts":
/*!************************************************!*\
  !*** ./src/app/shell/panel/panel.component.ts ***!
  \************************************************/
/*! exports provided: BookingPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPanelComponent", function() { return BookingPanelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/data/spaces/space.class */ "./src/app/services/data/spaces/space.class.ts");
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);








var BookingPanelComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](BookingPanelComponent, _super);
    function BookingPanelComponent(_service, _route) {
        var _this = _super.call(this) || this;
        _this._service = _service;
        _this._route = _route;
        /** Whether to show the time at the bottom of the status */
        _this.show_time = true;
        /** Whether user interaction is enabled for the panel */
        _this.interactive = true;
        return _this;
    }
    Object.defineProperty(BookingPanelComponent.prototype, "status_display", {
        /** Get the display value for the status */
        get: function () {
            if (!this.websocket_connected && !this._service.setting('show_status_when_disconnected')) {
                return ' ';
            }
            if (this.status_overrides && Object.keys(this.status_overrides).length === 1) {
                this._status = this.space.current ? 'unavailable' : Object.keys(this.status_overrides)[0];
            }
            var status = (!this.hide_all ? this._status : null) || 'not-bookable';
            return (this.status_overrides || [])[status] || this._status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookingPanelComponent.prototype, "status", {
        /** Current status of the active system */
        get: function () {
            if (!this.websocket_connected && !this._service.setting('show_status_when_disconnected')) {
                return 'not-bookable';
            }
            // Perform any status overrides
            this.updateStatus();
            if (this.status_overrides &&
                Object.keys(this.status_overrides).length === 1 &&
                (!this.space.current || this._status !== 'unavailable')) {
                this._status = Object.keys(this.status_overrides)[0];
            }
            return this._status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookingPanelComponent.prototype, "show_details", {
        /** Whether booking details should be shown */
        get: function () {
            return this.websocket_connected || !!this._service.setting('show_status_when_disconnected');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BookingPanelComponent.prototype, "display_time", {
        /** Display string for the current time */
        get: function () {
            return dayjs__WEBPACK_IMPORTED_MODULE_7__().format('h:mm A');
        },
        enumerable: true,
        configurable: true
    });
    BookingPanelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription('app_ready', this._service.initialised.subscribe(function (is_ready) {
            if (is_ready) {
                _this.subscription('route.params', _this._route.paramMap.subscribe(function (params) {
                    if (params.has('system_id')) {
                        _this.system_id = params.get('system_id');
                        _this._service.set('system', _this.system_id);
                    }
                }));
                _this.timeout('websocket', function () {
                    _this._service.websocket.status(function (status) {
                        _this.websocket_connected = status;
                    });
                });
                _this.unsub('app_ready');
            }
        }));
    };
    /**
     * Update the bookings for the active space
     * @param bookings Array of raw booking data
     */
    BookingPanelComponent.prototype.updateBookings = function (bookings) {
        this.space = new _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_5__["Space"](this._service.Spaces, {
            id: this.system_id,
            name: this.space_name,
            bookings: bookings
        });
    };
    /**
     * Update the current status of the active space
     */
    BookingPanelComponent.prototype.updateStatus = function () {
        if (this.hide_all) {
            this._status = null;
        }
        else {
            if (this.space && (this.space.current || this.space.next)) {
                var booking = this.space.current || this.space.next;
                this._status = this.space.current ? 'unavailable' : 'available';
                if (this.pending_timeout) {
                    var now = dayjs__WEBPACK_IMPORTED_MODULE_7__();
                    var date = dayjs__WEBPACK_IMPORTED_MODULE_7__(booking.date).startOf('m');
                    if (this.last_started >= now.valueOf() || this.last_started >= date.valueOf()) {
                        this._status = 'unavailable';
                    }
                    else {
                        // Only meetings with durations less than 8 hours can be pending or cancelled
                        var pending_start = date.subtract(this.pending_timeout, 's');
                        var pending_end = date.add(this.cancel_timeout || this.pending_timeout, 's');
                        var end = date.add(booking.duration, 'm');
                        if (now.isAfter(pending_start, 's') && now.isBefore(pending_end, 's')) {
                            this._status = 'pending';
                        }
                        else if (now.isAfter(pending_end, 's') && now.isBefore(end, 'm')) {
                            this._status = 'pending';
                            var business_start = dayjs__WEBPACK_IMPORTED_MODULE_7__(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_6__["timeToDate"])(this.business_start || '08:00'));
                            var business_end = dayjs__WEBPACK_IMPORTED_MODULE_7__(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_6__["timeToDate"])(this.business_end || '17:30'));
                            // Check if within business hours before cancelling the meeting
                            if (now.isBefore(business_start, 'm') || now.isAfter(business_end, 'm')) {
                                return;
                            }
                            this.endMeeting('timeout');
                        }
                    }
                }
            }
            else {
                this._status = 'available';
            }
        }
    };
    /**
     * Show full room name if overflowing
     */
    BookingPanelComponent.prototype.showTitle = function () {
        var _this = this;
        this.show_title = true;
        this.timeout('hide_title', function () { return (_this.show_title = false); }, 3000);
    };
    /**
     * Execute end meeting logic on engine driver
     * @param reason Reason for ending the meeting early
     */
    BookingPanelComponent.prototype.endMeeting = function (reason) {
        var _this = this;
        if (reason === void 0) { reason = 'user_input'; }
        if (this.space && this.can_cancel !== false) {
            var meeting_1 = this.space.current || this.space.next;
            var module = this._service.Systems.get(this.space.id, 'Bookings');
            if (meeting_1.duration >= 8 * 60 && reason === 'timeout') {
                reason = 'hide multi-day';
            }
            if (meeting_1 && module && meeting_1.date !== this.last_cancel) {
                var date_1 = dayjs__WEBPACK_IMPORTED_MODULE_7__(meeting_1.date);
                module.exec('cancel_meeting', [meeting_1.date, reason]).then(function (_) {
                    _this._service.Analytics.event('Checkin', 'cancelled', _this.space.id + " at " + date_1.format('DD MMM YYYY, h:mm A Z') + " | " + reason);
                    _this.last_cancel = meeting_1.date;
                }, function (e) {
                    _this._service.notifyError("Error cancelling meeting. " + e);
                    _this._service.Analytics.event('Checkin', 'cancel-failed', _this.space.id + " at " + date_1.format('DD MMM YYYY, h:mm A Z') + " | " + reason);
                });
            }
        }
    };
    return BookingPanelComponent;
}(_shared_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/panel/space-details/space-details.component.ngfactory.js":
/*!********************************************************************************!*\
  !*** ./src/app/shell/panel/space-details/space-details.component.ngfactory.js ***!
  \********************************************************************************/
/*! exports provided: RenderType_PanelSpaceDetailsComponent, View_PanelSpaceDetailsComponent_0, View_PanelSpaceDetailsComponent_Host_0, PanelSpaceDetailsComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PanelSpaceDetailsComponent", function() { return RenderType_PanelSpaceDetailsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PanelSpaceDetailsComponent_0", function() { return View_PanelSpaceDetailsComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PanelSpaceDetailsComponent_Host_0", function() { return View_PanelSpaceDetailsComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelSpaceDetailsComponentNgFactory", function() { return PanelSpaceDetailsComponentNgFactory; });
/* harmony import */ var _space_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space-details.component.scss.shim.ngstyle */ "./src/app/shell/panel/space-details/space-details.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm5/acaprojects-ngx-composer.js");
/* harmony import */ var _space_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./space-details.component */ "./src/app/shell/panel/space-details/space-details.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





var styles_PanelSpaceDetailsComponent = [_space_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PanelSpaceDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PanelSpaceDetailsComponent, data: {} });

function View_PanelSpaceDetailsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Booked until ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.current == null) ? null : _co.space.current.end_time); _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.current == null) ? null : _co.space.current.title); _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "host"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.current == null) ? null : ((_co.space.current.organiser == null) ? null : _co.space.current.organiser.name)); _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "details current"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.hide_availability; _ck(_v, 2, 0, currVal_0); var currVal_1 = (!_co.hide_title && !_co.hide_details); _ck(_v, 4, 0, currVal_1); var currVal_2 = (!_co.hide_user && !_co.hide_details); _ck(_v, 6, 0, currVal_2); }, null); }
function View_PanelSpaceDetailsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Next meeting at ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.next == null) ? null : _co.space.next.start_time); _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.next == null) ? null : _co.space.next.title); _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "host"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.next == null) ? null : ((_co.space.next.organiser == null) ? null : _co.space.next.organiser.name)); _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "details next"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.hide_availability; _ck(_v, 2, 0, currVal_0); var currVal_1 = (!_co.hide_title && !_co.hide_details); _ck(_v, 4, 0, currVal_1); var currVal_2 = (!_co.hide_user && !_co.hide_details); _ck(_v, 6, 0, currVal_2); }, null); }
function View_PanelSpaceDetailsComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" Free ", " ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.space.current ? ("at " + _co.space.current.end_time) : ""); var currVal_1 = (_co.space.next ? ("until " + _co.space.next.start_time) : ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_PanelSpaceDetailsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "details other"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.hide_availability; _ck(_v, 2, 0, currVal_0); }, null); }
function View_PanelSpaceDetailsComponent_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.icon; _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "information"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.icon; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 2, 0, currVal_0); var currVal_2 = _co.description; _ck(_v, 7, 0, currVal_2); }); }
function View_PanelSpaceDetailsComponent_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "hide_details"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_details = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "hide_title"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_title = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "hide_availability"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_availability = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "i", [["bind", "hide_user"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_user = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["bind", "title"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.title = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [["bind", "description"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.description = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "i", [["bind", "icon"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.icon = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_3__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space.id; var currVal_1 = "Bookings"; var currVal_2 = "hide_details"; var currVal_3 = _co.hide_details; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.space.id; var currVal_5 = "Bookings"; var currVal_6 = "hide_title"; var currVal_7 = _co.hide_title; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _co.space.id; var currVal_9 = "Bookings"; var currVal_10 = "hide_availability"; var currVal_11 = _co.hide_availability; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = _co.space.id; var currVal_13 = "Bookings"; var currVal_14 = "hide_user"; var currVal_15 = _co.hide_user; _ck(_v, 8, 0, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_16 = _co.space.id; var currVal_17 = "Bookings"; var currVal_18 = "title"; var currVal_19 = _co.title; _ck(_v, 10, 0, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_20 = _co.space.id; var currVal_21 = "Bookings"; var currVal_22 = "description"; var currVal_23 = _co.description; _ck(_v, 12, 0, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_24 = _co.space.id; var currVal_25 = "Bookings"; var currVal_26 = "icon"; var currVal_27 = _co.icon; _ck(_v, 14, 0, currVal_24, currVal_25, currVal_26, currVal_27); }, null); }
function View_PanelSpaceDetailsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "space-booking-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.space && _co.space.current); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.space && _co.space.next); _ck(_v, 4, 0, currVal_1); var currVal_2 = ((_co.space && _co.space.current) && _co.space.next); _ck(_v, 6, 0, currVal_2); var currVal_3 = (_co.title || _co.description); _ck(_v, 8, 0, currVal_3); var currVal_4 = _co.space; _ck(_v, 10, 0, currVal_4); }, null); }
function View_PanelSpaceDetailsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "panel-space-details", [], null, null, null, View_PanelSpaceDetailsComponent_0, RenderType_PanelSpaceDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _space_details_component__WEBPACK_IMPORTED_MODULE_4__["PanelSpaceDetailsComponent"], [], null, null)], null, null); }
var PanelSpaceDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("panel-space-details", _space_details_component__WEBPACK_IMPORTED_MODULE_4__["PanelSpaceDetailsComponent"], View_PanelSpaceDetailsComponent_Host_0, { space: "space" }, {}, []);



/***/ }),

/***/ "./src/app/shell/panel/space-details/space-details.component.scss.shim.ngstyle.js":
/*!****************************************************************************************!*\
  !*** ./src/app/shell/panel/space-details/space-details.component.scss.shim.ngstyle.js ***!
  \****************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".details[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-bottom: 0.5em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .details[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .details[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n.current[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.next[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: #ffb300;\n}\n.other[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: #43a047;\n}\n.host[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: rgba(255, 255, 255, 0.6);\n}\n.time[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n.information[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 0.6em;\n}\n.block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 6em;\n  max-height: 6em;\n  margin-right: 1em;\n}\n.text[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hlbGwvcGFuZWwvc3BhY2UtZGV0YWlscy9zcGFjZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvbWNraW5zZXktYm9va2luZ3MtdWkvbWNraW5zZXktYm9va2luZ3MtdWkvc3RkaW4iLCJzcmMvYXBwL3NoZWxsL3BhbmVsL3NwYWNlLWRldGFpbHMvc3BhY2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUE2QkE7O2NBQUE7QUFXQTs7c0JBQUE7QUN0Q0E7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FDT0o7QUYyQ1E7RUNwRFI7SUFLUSxnQkFBQTtFQ1FOO0FBQ0Y7QUZ5Q1E7RUN2RFI7SUFLUSxnQkFBQTtFQ2FOO0FBQ0Y7QURUSTtFQUNJLGNERUE7QUVVUjtBRFBJO0VBQ0ksY0RSRTtBRWtCVjtBRExJO0VBQ0ksY0RsQkU7QUUwQlY7QURKQTtFQUNJLGdCQUFBO0VBQ0EsK0JBQUE7QUNPSjtBREpBO0VBQ0ksb0JBQUE7QUNPSjtBREhJO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtBQ01SO0FERkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNLSjtBREhJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0tSO0FEREE7RUFDSSxnQkFBQTtBQ0lKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvcGFuZWwvc3BhY2UtZGV0YWlscy9zcGFjZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uZGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG59XG5cbi5jdXJyZW50IHtcbiAgICAudGltZSB7XG4gICAgICAgIGNvbG9yOiAkZXJyb3I7XG4gICAgfVxufVxuXG4ubmV4dCB7XG4gICAgLnRpbWUge1xuICAgICAgICBjb2xvcjogJHBlbmRpbmc7XG4gICAgfVxufVxuXG4ub3RoZXIge1xuICAgIC50aW1lIHtcbiAgICAgICAgY29sb3I6ICRzdWNjZXNzO1xuICAgIH1cbn1cblxuLmhvc3Qge1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBjb2xvcjogcmdiYSgkZm9udC1saWdodCwgLjYpO1xufVxuXG4udGltZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbn1cblxuLmluZm9ybWF0aW9uIHtcbiAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNmVtO1xuICAgIH1cbn1cblxuLmJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDZlbTtcbiAgICAgICAgbWF4LWhlaWdodDogNmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICB9XG59XG5cbi50ZXh0IHtcbiAgICBmb250LXNpemU6IC45ZW07XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4uY3VycmVudCAudGltZSB7XG4gIGNvbG9yOiAjZTUzOTM1O1xufVxuXG4ubmV4dCAudGltZSB7XG4gIGNvbG9yOiAjZmZiMzAwO1xufVxuXG4ub3RoZXIgLnRpbWUge1xuICBjb2xvcjogIzQzYTA0Nztcbn1cblxuLmhvc3Qge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4udGltZSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG4uaW5mb3JtYXRpb24gLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYmxvY2sgaW1nIHtcbiAgbWF4LXdpZHRoOiA2ZW07XG4gIG1heC1oZWlnaHQ6IDZlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAwLjllbTtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/shell/panel/space-details/space-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shell/panel/space-details/space-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: PanelSpaceDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelSpaceDetailsComponent", function() { return PanelSpaceDetailsComponent; });
/* harmony import */ var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/data/spaces/space.class */ "./src/app/services/data/spaces/space.class.ts");

var PanelSpaceDetailsComponent = /** @class */ (function () {
    function PanelSpaceDetailsComponent() {
    }
    return PanelSpaceDetailsComponent;
}());



/***/ }),

/***/ "./src/app/shell/panel/timeline/timeline.component.ngfactory.js":
/*!**********************************************************************!*\
  !*** ./src/app/shell/panel/timeline/timeline.component.ngfactory.js ***!
  \**********************************************************************/
/*! exports provided: RenderType_PanelTimelineComponent, View_PanelTimelineComponent_0, View_PanelTimelineComponent_Host_0, PanelTimelineComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PanelTimelineComponent", function() { return RenderType_PanelTimelineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PanelTimelineComponent_0", function() { return View_PanelTimelineComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PanelTimelineComponent_Host_0", function() { return View_PanelTimelineComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelTimelineComponentNgFactory", function() { return PanelTimelineComponentNgFactory; });
/* harmony import */ var _timeline_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeline.component.scss.shim.ngstyle */ "./src/app/shell/panel/timeline/timeline.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm5/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm5/acaprojects-ngx-composer.js");
/* harmony import */ var _timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline.component */ "./src/app/shell/panel/timeline/timeline.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 







var styles_PanelTimelineComponent = [_timeline_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PanelTimelineComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PanelTimelineComponent, data: {} });

function View_PanelTimelineComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "hour"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.hour; _ck(_v, 1, 0, currVal_0); }); }
function View_PanelTimelineComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "block"]], [[2, "show", null], [2, "in-use", null]], [[null, "tapped"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = ((((!_v.context.$implicit.in_use && !_co.no_bookings) && !_co.no_timeline_bookings) ? _co.book(_v.context.$implicit) : "") !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_2__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelTimelineComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "div", [["class", "bar"]], [[2, "hour", null]], null, null, null, null))], function (_ck, _v) { var currVal_2 = _v.context.$implicit.hour; _ck(_v, 3, 0, currVal_2); }, function (_ck, _v) { var currVal_0 = (_v.context.$implicit.show || _v.context.$implicit.hour); var currVal_1 = _v.context.$implicit.in_use; _ck(_v, 0, 0, currVal_0, currVal_1); var currVal_3 = _v.context.$implicit.hour; _ck(_v, 4, 0, currVal_3); }); }
function View_PanelTimelineComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "block-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelTimelineComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.time_blocks; _ck(_v, 2, 0, currVal_0); }, null); }
function View_PanelTimelineComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "time-display"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Time Now"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.display_time; _ck(_v, 3, 0, currVal_0); }); }
function View_PanelTimelineComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "hide_availability"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_status = $event) !== false);
        ad = (pd_0 && ad);
    } if (("modelChange" === en)) {
        var pd_1 = (_co.checkBookings() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "hide_all"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_all = $event) !== false);
        ad = (pd_0 && ad);
    } if (("modelChange" === en)) {
        var pd_1 = (_co.checkBookings() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "booking_disabled"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.no_bookings = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "i", [["bind", "no_timeline_bookings"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.no_timeline_bookings = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["bind", "default_title"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.default_title = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [["bind", "min_duration"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.min_duration = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "i", [["bind", "max_duration"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.max_duration = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space.id; var currVal_1 = "Bookings"; var currVal_2 = "hide_availability"; var currVal_3 = _co.hide_status; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.space.id; var currVal_5 = "Bookings"; var currVal_6 = "hide_all"; var currVal_7 = _co.hide_all; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _co.space.id; var currVal_9 = "Bookings"; var currVal_10 = "booking_disabled"; var currVal_11 = _co.no_bookings; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = _co.space.id; var currVal_13 = "Bookings"; var currVal_14 = "no_timeline_bookings"; var currVal_15 = _co.no_timeline_bookings; _ck(_v, 8, 0, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_16 = _co.space.id; var currVal_17 = "Bookings"; var currVal_18 = "default_title"; var currVal_19 = _co.default_title; _ck(_v, 10, 0, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_20 = _co.space.id; var currVal_21 = "Bookings"; var currVal_22 = "min_duration"; var currVal_23 = _co.min_duration; _ck(_v, 12, 0, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_24 = _co.space.id; var currVal_25 = "Bookings"; var currVal_26 = "max_duration"; var currVal_27 = _co.max_duration; _ck(_v, 14, 0, currVal_24, currVal_25, currVal_26, currVal_27); }, null); }
function View_PanelTimelineComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["class", "timeline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelTimelineComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "div", [["class", "expired"]], [[4, "width", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "current-block"]], [[4, "left", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 0, "div", [["class", "bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [["class", "triangle"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelTimelineComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelTimelineComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.time_blocks && (_co.time_blocks.length > 0)); _ck(_v, 2, 0, currVal_0); var currVal_3 = _co.display_time; _ck(_v, 9, 0, currVal_3); var currVal_4 = _co.space; _ck(_v, 11, 0, currVal_4); }, function (_ck, _v) { var _co = _v.component; var currVal_1 = ((((((_co.options == null) ? null : _co.options.start_offset) || 120) / (((_co.options == null) ? null : _co.options.duration) || 720)) * 100) + "%"); _ck(_v, 4, 0, currVal_1); var currVal_2 = ((((((_co.options == null) ? null : _co.options.start_offset) || 120) / (((_co.options == null) ? null : _co.options.duration) || 720)) * 100) + "%"); _ck(_v, 5, 0, currVal_2); }); }
function View_PanelTimelineComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "panel-timeline", [], null, null, null, View_PanelTimelineComponent_0, RenderType_PanelTimelineComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _timeline_component__WEBPACK_IMPORTED_MODULE_5__["PanelTimelineComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var PanelTimelineComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("panel-timeline", _timeline_component__WEBPACK_IMPORTED_MODULE_5__["PanelTimelineComponent"], View_PanelTimelineComponent_Host_0, { space: "space", options: "options" }, { event: "event" }, []);



/***/ }),

/***/ "./src/app/shell/panel/timeline/timeline.component.scss.shim.ngstyle.js":
/*!******************************************************************************!*\
  !*** ./src/app/shell/panel/timeline/timeline.component.scss.shim.ngstyle.js ***!
  \******************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".timeline[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 4em;\n  z-index: 1;\n}\n.block-list[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n}\n.block-list[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.overlay[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.block[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  height: 100%;\n}\n.block.show[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  display: initial;\n}\n.block.in-use[_ngcontent-%COMP%] {\n  background-color: rgba(229, 57, 53, 0.6);\n}\n.hour[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75em;\n  left: 0;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  z-index: 2;\n}\n.bar[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  width: 1px;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  border-right: 1px dashed rgba(255, 255, 255, 0.2);\n}\n.bar.hour[_ngcontent-%COMP%] {\n  top: 60%;\n  width: 1px;\n  border: none;\n  background-color: #fff;\n}\n.expired[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 3;\n}\n.current-block[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 0;\n  z-index: 4;\n}\n.current-block[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  width: 2px;\n  border: none;\n  display: initial;\n  background-color: #fff;\n}\n.triangle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -0.25em;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0.8em 0.8em 0 0.8em;\n  border-color: #fff transparent transparent transparent;\n}\n.time-display[_ngcontent-%COMP%] {\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  bottom: calc(100% + .5em);\n  white-space: nowrap;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hlbGwvcGFuZWwvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zdGRpbiIsInNyYy9hcHAvc2hlbGwvcGFuZWwvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBNkJBOztjQUFBO0FBV0E7O3NCQUFBO0FDdENBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNPSjtBREpBOztFQUVJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ09KO0FESkE7RUFDSSxnQkFBQTtBQ09KO0FESkE7RUFDSSxvQkFBQTtBQ09KO0FESkE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDT0o7QURKUTtFQUNJLGdCQUFBO0FDTVo7QURGSTtFQUNJLHdDQUFBO0FDSVI7QURBQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxtQ0FBQTtVQUFBLDJCQUFBO0VBQ0EsVUFBQTtBQ0dKO0FEQUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLGlEQUFBO0FDR0o7QURESTtFQUNJLFFBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FDR1I7QURDQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFDQSxVQUFBO0FDRUo7QURDQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBT0EsVUFBQTtBQ0pKO0FERkk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JEckVRO0FFeUVoQjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHNEQUFBO0FDRUo7QURDQTtFQUNJLGtCQUFBO0VBQ0EsbUNBQUE7VUFBQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0VKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvcGFuZWwvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi50aW1lbGluZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNGVtO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5ibG9jay1saXN0LFxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmxvY2stbGlzdCB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLm92ZXJsYXkge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmxvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTAwJTtcblxuICAgICYuc2hvdyB7XG4gICAgICAgIC5iYXIge1xuICAgICAgICAgICAgZGlzcGxheTogaW5pdGlhbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuaW4tdXNlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkZXJyb3IsIC42KTtcbiAgICB9XG59XG5cbi5ob3VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAuNzVlbTtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICB3aWR0aDogMXB4O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggZGFzaGVkIHJnYmEoI2ZmZiwgLjIpO1xuXG4gICAgJi5ob3VyIHtcbiAgICAgICAgdG9wOiA2MCU7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG59XG5cbi5leHBpcmVkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMCwgLjYpO1xuICAgIHotaW5kZXg6IDM7XG59XG5cbi5jdXJyZW50LWJsb2NrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICB3aWR0aDogMDtcbiAgICAuYmFyIHtcbiAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICB9XG4gICAgei1pbmRleDogNDtcbn1cblxuLnRyaWFuZ2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtLjI1ZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiAwO1xuICAgIGhlaWdodDogMDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogLjhlbSAuOGVtIDAgLjhlbTtcbiAgICBib3JkZXItY29sb3I6ICRjb2xvci1wcmltYXJ5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4udGltZS1kaXNwbGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGJvdHRvbTogY2FsYygxMDAlICsgLjVlbSk7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4udGltZWxpbmUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDRlbTtcbiAgei1pbmRleDogMTtcbn1cblxuLmJsb2NrLWxpc3QsXG4ub3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYmxvY2stbGlzdCB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5vdmVybGF5IHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ibG9jayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmJsb2NrLnNob3cgLmJhciB7XG4gIGRpc3BsYXk6IGluaXRpYWw7XG59XG4uYmxvY2suaW4tdXNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMjksIDU3LCA1MywgMC42KTtcbn1cblxuLmhvdXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC43NWVtO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHdpZHRoOiAxcHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvcmRlci1yaWdodDogMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG59XG4uYmFyLmhvdXIge1xuICB0b3A6IDYwJTtcbiAgd2lkdGg6IDFweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZXhwaXJlZCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgei1pbmRleDogMztcbn1cblxuLmN1cnJlbnQtYmxvY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMDtcbiAgei1pbmRleDogNDtcbn1cbi5jdXJyZW50LWJsb2NrIC5iYXIge1xuICB3aWR0aDogMnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGRpc3BsYXk6IGluaXRpYWw7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi50cmlhbmdsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC4yNWVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMC44ZW0gMC44ZW0gMCAwLjhlbTtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufVxuXG4udGltZS1kaXNwbGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvdHRvbTogY2FsYygxMDAlICsgLjVlbSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/shell/panel/timeline/timeline.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shell/panel/timeline/timeline.component.ts ***!
  \************************************************************/
/*! exports provided: PanelTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelTimelineComponent", function() { return PanelTimelineComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data/spaces/space.class */ "./src/app/services/data/spaces/space.class.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");






var PanelTimelineComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PanelTimelineComponent, _super);
    function PanelTimelineComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        /** Emitter for user events on the timeline */
        _this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** List of display time block  */
        _this.time_blocks = [];
        return _this;
    }
    Object.defineProperty(PanelTimelineComponent.prototype, "display_time", {
        /** Display string for the current time */
        get: function () {
            return dayjs__WEBPACK_IMPORTED_MODULE_4__().format('h:mm A');
        },
        enumerable: true,
        configurable: true
    });
    PanelTimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.generateTimelineBlocks();
        this.interval('update_blocks', function () { return _this.generateTimelineBlocks(); }, 60 * 1000);
    };
    PanelTimelineComponent.prototype.ngOnChanges = function (changes) {
        this.generateTimelineBlocks();
    };
    /**
     * Generate time blocks to display
     */
    PanelTimelineComponent.prototype.generateTimelineBlocks = function () {
        var now = dayjs__WEBPACK_IMPORTED_MODULE_4__().startOf('m');
        now = now.minute(Math.round(now.minute() / 5) * 5);
        var start = now.subtract((this.options ? this.options.start_offset : null) || 120, 'm');
        var end = start.add((this.options ? this.options.duration : null) || 720, 'm');
        var date = dayjs__WEBPACK_IMPORTED_MODULE_4__(start);
        delete this.time_blocks;
        this.time_blocks = [];
        while (date.isBefore(end, 'm')) {
            this.time_blocks.push({
                value: date.valueOf(),
                show: (date.minute() % ((this.options ? this.options.block_size : null) || 30)) === 0,
                hour: date.minute() === 0 ? (date.hour() % 12 === 0 ? 12 : date.hour() % 12) : null,
                in_use: false
            });
            date = date.add(5, 'm');
        }
        this.checkBookings();
    };
    /**
     * Update the statuses of time blocks based off space bookings
     */
    PanelTimelineComponent.prototype.checkBookings = function () {
        if (this.space && this.space.todays_bookings) {
            var block_start_1 = dayjs__WEBPACK_IMPORTED_MODULE_4__().subtract((this.options ? this.options.start_offset : null) || 120, 'm');
            var block_end_1 = dayjs__WEBPACK_IMPORTED_MODULE_4__().add((this.options ? this.options.duration : null) || 720, 'm');
            // Filter bookings for the shown times
            var bookings = this.space.bookings.filter(function (i) {
                var start = dayjs__WEBPACK_IMPORTED_MODULE_4__(i.date);
                var end = start.add(i.duration, 'm');
                return end.isAfter(block_start_1, 'm') && start.isBefore(block_end_1, 'm');
            });
            this.time_blocks.forEach(function (i) { return i.in_use = false; });
            if (!this.hide_status && !this.hide_all) {
                for (var _i = 0, bookings_1 = bookings; _i < bookings_1.length; _i++) {
                    var booking = bookings_1[_i];
                    var start = dayjs__WEBPACK_IMPORTED_MODULE_4__(booking.date);
                    var end = start.add(booking.duration, 'm');
                    for (var _a = 0, _b = this.time_blocks; _a < _b.length; _a++) {
                        var block = _b[_a];
                        var block_time = dayjs__WEBPACK_IMPORTED_MODULE_4__(block.value);
                        if (block_time.isSame(start, 'm') || (block_time.isAfter(start, 'm') && block_time.isBefore(end, 'm'))) {
                            block.in_use = true;
                        }
                    }
                }
            }
        }
    };
    /**
     * Open modal to make a new booking
     */
    PanelTimelineComponent.prototype.book = function (block) {
        this.service.Bookings.new({
            space: this.space,
            date: block.value,
            title: this.default_title,
            max_duration: this.max_duration,
            min_duration: this.min_duration
        });
    };
    return PanelTimelineComponent;
}(_shared_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/shell.component.ngfactory.js":
/*!****************************************************!*\
  !*** ./src/app/shell/shell.component.ngfactory.js ***!
  \****************************************************/
/*! exports provided: RenderType_ShellWrapperComponent, View_ShellWrapperComponent_0, View_ShellWrapperComponent_Host_0, ShellWrapperComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ShellWrapperComponent", function() { return RenderType_ShellWrapperComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShellWrapperComponent_0", function() { return View_ShellWrapperComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ShellWrapperComponent_Host_0", function() { return View_ShellWrapperComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellWrapperComponentNgFactory", function() { return ShellWrapperComponentNgFactory; });
/* harmony import */ var _shell_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shell.component.scss.shim.ngstyle */ "./src/app/shell/shell.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm5/acaprojects-ngx-composer.js");
/* harmony import */ var _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory */ "./node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acaprojects/ngx-spinners */ "./node_modules/@acaprojects/ngx-spinners/fesm5/acaprojects-ngx-spinners.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shell.component */ "./src/app/shell/shell.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 









var styles_ShellWrapperComponent = [_shell_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_ShellWrapperComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ShellWrapperComponent, data: {} });

function View_ShellWrapperComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "room_name"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.system_name = $event) !== false);
        ad = (pd_0 && ad);
    } if (("modelChange" === en)) {
        var pd_1 = (_co.checkLoading() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "reload"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = (_co.reloadAt($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.system_id; var currVal_1 = "Bookings"; var currVal_2 = "room_name"; var currVal_3 = _co.system_name; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.system_id; var currVal_5 = "Bookings"; var currVal_6 = "reload"; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6); }, null); }
function View_ShellWrapperComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "loading-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "info-block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["Connecting to system(", ")..."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Attempting to connect to engine server..."])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "text message"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "a-spinner", [["color", "#000"], ["ring-rotate", ""]], null, null, null, _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_ɵp_0"], _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_ɵp"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 49152, null, 0, _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_4__["ɵp"], [], { color: [0, "color"] }, null)], function (_ck, _v) { var currVal_2 = "#000"; _ck(_v, 10, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.system_id; _ck(_v, 3, 0, currVal_0); var currVal_1 = _co.info_messages[_co.message_index]; _ck(_v, 7, 0, currVal_1); }); }
function View_ShellWrapperComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "version"]], [[2, "loading", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" Version: ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "br", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" Built: ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.system_id && !_co.system_name); _ck(_v, 0, 0, currVal_0); var currVal_1 = _co.version; _ck(_v, 1, 0, currVal_1); var currVal_2 = _co.build; _ck(_v, 3, 0, currVal_2); }); }
function View_ShellWrapperComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "shell"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "view"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShellWrapperComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShellWrapperComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ShellWrapperComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; _ck(_v, 3, 0); var currVal_0 = _co.system_id; _ck(_v, 5, 0, currVal_0); var currVal_1 = (_co.system_id && !_co.system_name); _ck(_v, 7, 0, currVal_1); var currVal_2 = _co.show_version; _ck(_v, 9, 0, currVal_2); }, null); }
function View_ShellWrapperComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-shell-wrapper", [], null, null, null, View_ShellWrapperComponent_0, RenderType_ShellWrapperComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _shell_component__WEBPACK_IMPORTED_MODULE_7__["ShellWrapperComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_8__["ApplicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var ShellWrapperComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-shell-wrapper", _shell_component__WEBPACK_IMPORTED_MODULE_7__["ShellWrapperComponent"], View_ShellWrapperComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/shell/shell.component.scss.shim.ngstyle.js":
/*!************************************************************!*\
  !*** ./src/app/shell/shell.component.scss.shim.ngstyle.js ***!
  \************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".view[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.loading-block[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1em;\n  background-color: #fff;\n  z-index: 2;\n}\n.loading-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n}\n.loading-block[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n  font-size: 4em;\n}\n.version[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 4px;\n  left: 8px;\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.35);\n  z-index: 9999;\n}\n.version.loading[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hlbGwvc2hlbGwuY29tcG9uZW50LnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zdGRpbiIsInNyYy9hcHAvc2hlbGwvc2hlbGwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBNkJBOztjQUFBO0FBV0E7O3NCQUFBO0FDdENBO0VBQ0ksVUFBQTtBQ09KO0FESkE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNPSjtBRExJO0VBQ0ksZ0JBQUE7QUNPUjtBREpJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDTVI7QURGQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUNLSjtBREhJO0VBQ0ksMEJBQUE7QUNLUiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3NoZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4udmlldyB7XG4gICAgei1pbmRleDogMTtcbn1cblxuLmxvYWRpbmctYmxvY2sge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB6LWluZGV4OiAyO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IC41ZW07XG4gICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIH1cbn1cblxuLnZlcnNpb24ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDRweDtcbiAgICBsZWZ0OiA4cHg7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIGNvbG9yOiByZ2JhKCRmb250LWxpZ2h0LCAuMzUpO1xuICAgIHotaW5kZXg6IDk5OTk7XG5cbiAgICAmLmxvYWRpbmcge1xuICAgICAgICBjb2xvcjogcmdiYSgkZm9udC1kYXJrLCAuMzUpO1xuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi52aWV3IHtcbiAgei1pbmRleDogMTtcbn1cblxuLmxvYWRpbmctYmxvY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDI7XG59XG4ubG9hZGluZy1ibG9jayAudGl0bGUge1xuICBmb250LXNpemU6IDEuOGVtO1xufVxuLmxvYWRpbmctYmxvY2sgLmljb24ge1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgZm9udC1zaXplOiA0ZW07XG59XG5cbi52ZXJzaW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDRweDtcbiAgbGVmdDogOHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICB6LWluZGV4OiA5OTk5O1xufVxuLnZlcnNpb24ubG9hZGluZyB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/shell/shell.component.ts":
/*!******************************************!*\
  !*** ./src/app/shell/shell.component.ts ***!
  \******************************************/
/*! exports provided: ShellWrapperComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShellWrapperComponent", function() { return ShellWrapperComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_globals_application__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/globals/application */ "./src/app/shared/globals/application.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);







var ShellWrapperComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ShellWrapperComponent, _super);
    function ShellWrapperComponent(_service, _router) {
        var _this = _super.call(this) || this;
        _this._service = _service;
        _this._router = _router;
        /** List of informational messages to display while connecting to the active system */
        _this.info_messages = [
            'If this message persists, check you network connection and then try reloading this page.',
            'It seems to be taking a while. Make sure the selected system is valid.',
            'Still nothing, huh. Are you authenticated? Do you have have a network connection?',
            'Try reloading the page. If this persists contact your administrator.'
        ];
        /** Index of the info message being displayed */
        _this.message_index = 0;
        return _this;
    }
    Object.defineProperty(ShellWrapperComponent.prototype, "version", {
        /** Current version of the application */
        get: function () {
            return _shared_globals_application__WEBPACK_IMPORTED_MODULE_5__["version"];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShellWrapperComponent.prototype, "build", {
        /** Current version of the application */
        get: function () {
            var now = dayjs__WEBPACK_IMPORTED_MODULE_6__();
            var built = _shared_globals_application__WEBPACK_IMPORTED_MODULE_5__["build"].format('DD/MM/YY HH:mm');
            return built;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ShellWrapperComponent.prototype, "show_version", {
        get: function () {
            return this._service.setting('app.show_version');
        },
        enumerable: true,
        configurable: true
    });
    ShellWrapperComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription('app_ready', this._service.initialised.subscribe(function (is_ready) {
            if (is_ready) {
                // Listen for system changes
                _this.subscription('system', _this._service.listen('system', function (value) { return _this.system_id = value; }));
                // Listen for routing events
                _this.page = _this._router.url.split('/')[1] || '';
                _this.subscription('router.change', _this._router.events.subscribe(function (event) {
                    if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                        _this.page = _this._router.url.split('/')[1] || '';
                    }
                }));
                _this.unsub('app_ready');
            }
        }));
    };
    /**
     * Check if the system data has loaded
     * @param delay Delay before first loading message update
     */
    ShellWrapperComponent.prototype.checkLoading = function (delay) {
        var _this = this;
        if (delay === void 0) { delay = 3000; }
        if (!this.system_name) {
            this.message_index = 0;
            this.timeout('update_msg', function () { return _this.updateMessage(); }, delay);
        }
    };
    /**
     * Update the index of the info message displayed
     */
    ShellWrapperComponent.prototype.updateMessage = function () {
        var _this = this;
        if (!this.system_id) {
            return;
        }
        this.message_index++;
        if (this.message_index === this.info_messages.length) {
            this.message_index--;
            return;
        }
        this.timeout('update_msg', function () { return _this.updateMessage(); }, 3000);
    };
    /**
     * Schedule a reload the UI for a future time
     * @param time Time to reload the UI
     */
    ShellWrapperComponent.prototype.reloadAt = function (time) {
        var _this = this;
        if (time && typeof time === 'number') {
            this.clearTimeout('reload_ui');
            var now = dayjs__WEBPACK_IMPORTED_MODULE_6__().startOf('s');
            var reload_at_time = dayjs__WEBPACK_IMPORTED_MODULE_6__((time || 0) * 1000).startOf('s');
            var diff = reload_at_time.diff(now, 'ms');
            if (diff > 100) {
                this.timeout('reload_ui', function () { return location.reload(true); }, diff);
            }
        }
        this.timeout('update_msg', function () { return _this.updateMessage(); }, 3000);
    };
    return ShellWrapperComponent;
}(_shared_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/styles/app.component.scss.ngstyle.js":
/*!******************************************************!*\
  !*** ./src/app/styles/app.component.scss.ngstyle.js ***!
  \******************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n\n\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(MaterialIcons-Regular.eot); \n  src: local('Material Icons'),\n       local('MaterialIcons-Regular'),\n       url(MaterialIcons-Regular.woff2) format('woff2'),\n       url(MaterialIcons-Regular.woff) format('woff'),\n       url(MaterialIcons-Regular.ttf) format('truetype');\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  \n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  \n  -webkit-font-smoothing: antialiased;\n  \n  text-rendering: optimizeLegibility;\n\n  \n  -moz-osx-font-smoothing: grayscale;\n\n  \n  -webkit-font-feature-settings: 'liga';\n          font-feature-settings: 'liga';\n}\n\n@font-face {\n    font-family: 'LarishMcKinsey';\n    font-style: normal;\n    font-weight: 400;\n    src: url('Larish_McKinsey_Regular.eot'); \n    src: local('LarishMcKinsey'), local('LarishMcKinseyRegular'),\n          url('Larish_McKinsey_Regular.eot?#iefix') format('embedded-opentype'), \n          url('Larish_McKinsey_Regular.woff2') format('woff2'), \n          url('Larish_McKinsey_Regular.woff') format('woff'), \n          url('Larish_McKinsey_Regular.ttf') format('truetype'), \n          url('Larish_McKinsey_Regular.svg#LarishMcKinseyRegular') format('svg'); \n}\n\n@font-face {\n    font-family: 'LarishMcKinsey';\n    font-style: normal;\n    font-weight: 500;\n    src: url('Larish_McKinsey_Semibold.eot'); \n    src: local('LarishMcKinsey'), local('LarishMcKinseySemibold'),\n          url('Larish_McKinsey_Semibold.eot?#iefix') format('embedded-opentype'), \n          url('Larish_McKinsey_Semibold.woff2') format('woff2'), \n          url('Larish_McKinsey_Semibold.woff') format('woff'), \n          url('Larish_McKinsey_Semibold.ttf') format('truetype'), \n          url('Larish_McKinsey_Semibold.svg#LarishMcKinseySemibold') format('svg'); \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-Light.ttf') format('truetype'), \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-LightItalic.ttf') format('truetype'), \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-Regular.ttf') format('truetype'), \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-Italic.ttf') format('truetype'), \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: normal;\n    font-weight: 500;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-Medium.ttf') format('truetype'), \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: italic;\n    font-weight: 500;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-MediumItalic.ttf') format('truetype'), \n}\n@media only screen and (orientation: portrait) and (min-width: 800px) {\n  html,\nbody {\n    font-size: 20px;\n  }\n}\n@media only screen and (orientation: landscape) and (min-width: 1048px) {\n  html,\nbody {\n    font-size: 20px;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  html,\nbody {\n    font-size: 20px;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  html,\nbody {\n    font-size: 20px;\n  }\n}\n* {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-family: \"Theinhardt\", \"Helvetica Neue\", Arial, sans-serif;\n  box-sizing: border-box;\n}\n.material-icons {\n  font-size: 1em;\n}\nspan.highlight {\n  color: #fff;\n}\n\n.fs-small {\n  font-size: 0.8rem;\n}\n.fs-normal {\n  font-size: 1rem;\n}\n.fs-big {\n  font-size: 1.2rem;\n}\n.fs-large {\n  font-size: 1.5rem;\n}\n\n.info-block {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 0.5em;\n}\n.info-block .icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.2em;\n  width: 1.2em;\n  font-size: 2em;\n}\n.info-block .icon a-spinner {\n  font-size: 0.25em;\n}\n.info-block .text {\n  margin: 0.5em 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc3R5bGVzL2FwcC5jb21wb25lbnQuc2NzcyIsIm5vZGVfbW9kdWxlcy9tYXRlcmlhbC1kZXNpZ24taWNvbnMvaWNvbmZvbnQvbWF0ZXJpYWwtaWNvbnMuY3NzIiwic3JjL2ZvbnRzL2ZvbnRzLmNzcyIsIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3N0ZGluIiwic3JjL2FwcC9zdHlsZXMvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQTZCQTs7Y0FBQTtBQVdBOztzQkFBQTtBQ3pDQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1DQUFtQyxFQUFFLGNBQWM7RUFDbkQ7Ozs7d0RBSXNEO0FBQ3hEO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlLEdBQUcsd0JBQXdCO0VBQzFDLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7O0VBRWQscUNBQXFDO0VBQ3JDLG1DQUFtQztFQUNuQyxtQ0FBbUM7RUFDbkMsa0NBQWtDOztFQUVsQyx5QkFBeUI7RUFDekIsa0NBQWtDOztFQUVsQyxvQkFBb0I7RUFDcEIscUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjtBQ25DQSxzQ0FBc0M7QUFDdEM7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix1Q0FBeUQsRUFBRSxxQkFBcUI7SUFDaEY7Ozs7O2dGQUs4RixFQUFFLGVBQWU7QUFDbkg7QUFFQSx3Q0FBd0M7QUFDeEM7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQix3Q0FBMEQsRUFBRSxxQkFBcUI7SUFDakY7Ozs7O2tGQUtnRyxFQUFFLGVBQWU7QUFDckg7QUFFQSwrQkFBK0I7QUFDL0I7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjswREFDbUUsRUFBRSx5QkFBeUI7QUFDbEc7QUFFQSxzQ0FBc0M7QUFDdEM7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjtnRUFDeUUsRUFBRSx5QkFBeUI7QUFDeEc7QUFFQSxpQ0FBaUM7QUFDakM7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjs0REFDcUUsRUFBRSx5QkFBeUI7QUFDcEc7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjsyREFDb0UsRUFBRSx5QkFBeUI7QUFDbkc7QUFFQSxnQ0FBZ0M7QUFDaEM7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjsyREFDb0UsRUFBRSx5QkFBeUI7QUFDbkc7QUFFQSx1Q0FBdUM7QUFDdkM7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjtpRUFDMEUsRUFBRSx5QkFBeUI7QUFDekc7QUZrQ1E7RUc5R1I7O0lBR1EsZUg4Qkk7RUl0QlY7QUFDRjtBSnFHUTtFR2pIUjs7SUFHUSxlSDhCSTtFSWhCVjtBQUNGO0FKaUNRO0VHbkRSOztJQVNRLGVIMEJNO0VJWlo7QUFDRjtBSjhCUTtFR3REUjs7SUFTUSxlSDBCTTtFSU5aO0FBQ0Y7QURqQkE7RUFDSSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLDhESGVHO0VHZEgsc0JBQUE7QUNvQko7QURqQkE7RUFDSSxjQUFBO0FDb0JKO0FEakJBO0VBQ0ksV0hSWTtBSTRCaEI7QURqQkE7OzBCQUFBO0FBS0k7RUFDSSxpQkFBQTtBQ2tCUjtBRGhCSTtFQUNJLGVBQUE7QUNrQlI7QURoQkk7RUFDSSxpQkFBQTtBQ2tCUjtBRGhCSTtFQUNJLGlCQUFBO0FDa0JSO0FEZEE7OzBCQUFBO0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ2dCSjtBRGRJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUNnQlI7QURkUTtFQUNJLGlCQUFBO0FDZ0JaO0FEWkk7RUFDSSxpQkFBQTtBQ2NSIiwiZmlsZSI6InNyYy9hcHAvc3R5bGVzL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogI2ZmZjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzFmNDBlNjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG5cbiRiYXNlLXNpemU6IDIwcHg7XG4kdGFibGV0LXNpemU6IDIwcHg7XG4kbW9iaWxlLXNpemU6IDIwcHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKE1hdGVyaWFsSWNvbnMtUmVndWxhci5lb3QpOyAvKiBGb3IgSUU2LTggKi9cbiAgc3JjOiBsb2NhbCgnTWF0ZXJpYWwgSWNvbnMnKSxcbiAgICAgICBsb2NhbCgnTWF0ZXJpYWxJY29ucy1SZWd1bGFyJyksXG4gICAgICAgdXJsKE1hdGVyaWFsSWNvbnMtUmVndWxhci53b2ZmMikgZm9ybWF0KCd3b2ZmMicpLFxuICAgICAgIHVybChNYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZikgZm9ybWF0KCd3b2ZmJyksXG4gICAgICAgdXJsKE1hdGVyaWFsSWNvbnMtUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1mYW1pbHk6ICdNYXRlcmlhbCBJY29ucyc7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAyNHB4OyAgLyogUHJlZmVycmVkIGljb24gc2l6ZSAqL1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbDtcbiAgd29yZC13cmFwOiBub3JtYWw7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGRpcmVjdGlvbjogbHRyO1xuXG4gIC8qIFN1cHBvcnQgZm9yIGFsbCBXZWJLaXQgYnJvd3NlcnMuICovXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAvKiBTdXBwb3J0IGZvciBTYWZhcmkgYW5kIENocm9tZS4gKi9cbiAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcblxuICAvKiBTdXBwb3J0IGZvciBGaXJlZm94LiAqL1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuXG4gIC8qIFN1cHBvcnQgZm9yIElFLiAqL1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdsaWdhJztcbn1cbiIsIi8qIE1jS2luc2V5IExhcmlzaCAtIFJlZ3VsYXIgLSBMYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXJpc2hNY0tpbnNleSc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9SZWd1bGFyLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXG4gICAgc3JjOiBsb2NhbCgnTGFyaXNoTWNLaW5zZXknKSwgbG9jYWwoJ0xhcmlzaE1jS2luc2V5UmVndWxhcicpLFxuICAgICAgICAgIHVybCgnLi9tY2tpbnNleV9sYXJpc2gvTGFyaXNoX01jS2luc2V5X1JlZ3VsYXIuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgLyogSUU2LUlFOCAqL1xuICAgICAgICAgIHVybCgnLi9tY2tpbnNleV9sYXJpc2gvTGFyaXNoX01jS2luc2V5X1JlZ3VsYXIud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xuICAgICAgICAgIHVybCgnLi9tY2tpbnNleV9sYXJpc2gvTGFyaXNoX01jS2luc2V5X1JlZ3VsYXIud29mZicpIGZvcm1hdCgnd29mZicpLCAvKiBNb2Rlcm4gQnJvd3NlcnMgKi9cbiAgICAgICAgICB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cbiAgICAgICAgICB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9SZWd1bGFyLnN2ZyNMYXJpc2hNY0tpbnNleVJlZ3VsYXInKSBmb3JtYXQoJ3N2ZycpOyAvKiBMZWdhY3kgaU9TICovXG59XG5cbi8qIE1jS2luc2V5IExhcmlzaCAtIFNlbWktYm9sZCAtIExhdGluICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ0xhcmlzaE1jS2luc2V5JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBzcmM6IHVybCgnLi9tY2tpbnNleV9sYXJpc2gvTGFyaXNoX01jS2luc2V5X1NlbWlib2xkLmVvdCcpOyAvKiBJRTkgQ29tcGF0IE1vZGVzICovXG4gICAgc3JjOiBsb2NhbCgnTGFyaXNoTWNLaW5zZXknKSwgbG9jYWwoJ0xhcmlzaE1jS2luc2V5U2VtaWJvbGQnKSxcbiAgICAgICAgICB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9TZW1pYm9sZC5lb3Q/I2llZml4JykgZm9ybWF0KCdlbWJlZGRlZC1vcGVudHlwZScpLCAvKiBJRTYtSUU4ICovXG4gICAgICAgICAgdXJsKCcuL21ja2luc2V5X2xhcmlzaC9MYXJpc2hfTWNLaW5zZXlfU2VtaWJvbGQud29mZjInKSBmb3JtYXQoJ3dvZmYyJyksIC8qIFN1cGVyIE1vZGVybiBCcm93c2VycyAqL1xuICAgICAgICAgIHVybCgnLi9tY2tpbnNleV9sYXJpc2gvTGFyaXNoX01jS2luc2V5X1NlbWlib2xkLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgLyogTW9kZXJuIEJyb3dzZXJzICovXG4gICAgICAgICAgdXJsKCcuL21ja2luc2V5X2xhcmlzaC9MYXJpc2hfTWNLaW5zZXlfU2VtaWJvbGQudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xuICAgICAgICAgIHVybCgnLi9tY2tpbnNleV9sYXJpc2gvTGFyaXNoX01jS2luc2V5X1NlbWlib2xkLnN2ZyNMYXJpc2hNY0tpbnNleVNlbWlib2xkJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xufVxuXG4vKiBUaGVpbmhhcmR0IC0gTGlnaHQgLSBMYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdUaGVpbmhhcmR0JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdUaGVpbmhhcmR0JyksXG4gICAgICAgICAgdXJsKCcuL3RoZWluaGFyZHQvVGhlaW5oYXJkdFRULUxpZ2h0LnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cbn1cblxuLyogVGhlaW5oYXJkdCAtIExpZ2h0IEl0YWxpYyAtIExhdGluICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1RoZWluaGFyZHQnO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHNyYzogbG9jYWwoJ1RoZWluaGFyZHQnKSxcbiAgICAgICAgICB1cmwoJy4vdGhlaW5oYXJkdC9UaGVpbmhhcmR0VFQtTGlnaHRJdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xufVxuXG4vKiBUaGVpbmhhcmR0IC0gUmVndWxhciAtIExhdGluICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1RoZWluaGFyZHQnO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogbG9jYWwoJ1RoZWluaGFyZHQnKSxcbiAgICAgICAgICB1cmwoJy4vdGhlaW5oYXJkdC9UaGVpbmhhcmR0VFQtUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXG59XG5cbi8qIFRoZWluaGFyZHQgLSBJdGFsaWMgLSBMYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdUaGVpbmhhcmR0JztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdUaGVpbmhhcmR0JyksXG4gICAgICAgICAgdXJsKCcuL3RoZWluaGFyZHQvVGhlaW5oYXJkdFRULUl0YWxpYy50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXG59XG5cbi8qIFRoZWluaGFyZHQgLSBNZWRpdW0gLSBMYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdUaGVpbmhhcmR0JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBzcmM6IGxvY2FsKCdUaGVpbmhhcmR0JyksXG4gICAgICAgICAgdXJsKCcuL3RoZWluaGFyZHQvVGhlaW5oYXJkdFRULU1lZGl1bS50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXG59XG5cbi8qIFRoZWluaGFyZHQgLSBNZWRpdW0gSXRhbGljIC0gTGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnVGhlaW5oYXJkdCc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgc3JjOiBsb2NhbCgnVGhlaW5oYXJkdCcpLFxuICAgICAgICAgIHVybCgnLi90aGVpbmhhcmR0L1RoZWluaGFyZHRUVC1NZWRpdW1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xufVxuIiwiQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5AaW1wb3J0IFwifm1hdGVyaWFsLWRlc2lnbi1pY29ucy9pY29uZm9udC9tYXRlcmlhbC1pY29ucy5jc3NcIjtcbkBpbXBvcnQgJy4uLy4uL2ZvbnRzL2ZvbnRzLmNzcyc7XG5cbmh0bWwsXG5ib2R5IHtcbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKGRlc2t0b3ApIHtcbiAgICAgICAgZm9udC1zaXplOiAkYmFzZS1zaXplO1xuICAgIH1cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHRhYmxldCkge1xuICAgICAgICBmb250LXNpemU6ICR0YWJsZXQtc2l6ZTtcbiAgICB9XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAkbW9iaWxlLXNpemU7XG4gICAgfVxufVxuXG4qIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDFlbTtcbn1cblxuc3Bhbi5oaWdobGlnaHQge1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICAgRm9udCBzaXplIHN0eWxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi5mcyB7XG4gICAgJi1zbWFsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cbiAgICAmLW5vcm1hbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgJi1iaWcge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gICAgJi1sYXJnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICAgRm9udCBzaXplIHN0eWxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi5pbmZvLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IC41ZW07XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEuMmVtO1xuICAgICAgICB3aWR0aDogMS4yZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuXG4gICAgICAgIGEtc3Bpbm5lciB7XG4gICAgICAgICAgICBmb250LXNpemU6IC4yNWVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgICBtYXJnaW46IC41ZW0gMCAwO1xuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbkBpbXBvcnQgXCJ+bWF0ZXJpYWwtZGVzaWduLWljb25zL2ljb25mb250L21hdGVyaWFsLWljb25zLmNzc1wiO1xuQGltcG9ydCAnLi4vLi4vZm9udHMvZm9udHMuY3NzJztcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6IDgwMHB4KSB7XG4gIGh0bWwsXG5ib2R5IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAxMDQ4cHgpIHtcbiAgaHRtbCxcbmJvZHkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgaHRtbCxcbmJvZHkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIGh0bWwsXG5ib2R5IHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gIH1cbn1cblxuKiB7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmb250LWZhbWlseTogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5zcGFuLmhpZ2hsaWdodCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgICBGb250IHNpemUgc3R5bGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi5mcy1zbWFsbCB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuLmZzLW5vcm1hbCB7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cbi5mcy1iaWcge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5mcy1sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgICBGb250IHNpemUgc3R5bGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi5pbmZvLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogMC41ZW07XG59XG4uaW5mby1ibG9jayAuaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEuMmVtO1xuICB3aWR0aDogMS4yZW07XG4gIGZvbnQtc2l6ZTogMmVtO1xufVxuLmluZm8tYmxvY2sgLmljb24gYS1zcGlubmVyIHtcbiAgZm9udC1zaXplOiAwLjI1ZW07XG59XG4uaW5mby1ibG9jayAudGV4dCB7XG4gIG1hcmdpbjogMC41ZW0gMCAwO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/styles/custom-element.styles.scss.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/styles/custom-element.styles.scss.ngstyle.js ***!
  \**************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n\n\n.dropdown[widget] {\n  border-radius: 4px;\n}\n.dropdown[widget].fill {\n  width: 100%;\n}\n.dropdown-list[widget] {\n  border-radius: 4px;\n}\n.spinner svg {\n  width: 100%;\n}\nbutton[widget] {\n  outline: none;\n}\nbutton[widget].default {\n  background-color: #1f40e6;\n}\nbutton[widget].action {\n  height: 2em;\n  width: 2em;\n  border-radius: 100%;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  border: 2px solid rgba(0, 0, 0, 0.87);\n  box-shadow: 0 0 0 2px #fff;\n  font-size: 1.5em;\n}\nbutton[widget].action:hover {\n  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.6);\n}\nbutton[widget].action .wrapper {\n  height: 100%;\n  padding: 0;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\nbutton[widget][disabled] {\n  background-color: #ccc;\n  pointer-events: none;\n}\n.dropdown[widget].default {\n  width: 9.5em;\n}\n.dynamic-form[widget] .error input {\n  border-color: #e53935;\n}\n.dynamic-form[widget] .dynamic-field .info.status {\n  margin: 0;\n  padding: 0;\n}\n.dynamic-field[widget] .details {\n  min-width: 100%;\n}\n.dynamic-field[widget] label {\n  margin-left: 0;\n}\n.dynamic-field[widget] .control {\n  min-width: 10em;\n}\n.overlay-backdrop {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.modal[widget] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  max-width: 95vw;\n  max-height: 90vh;\n}\n.modal[widget] > .header {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  height: 2.5em;\n  background-color: #f0f0f0;\n}\n.modal[widget] > .header .text {\n  padding: 0.75em;\n  min-width: 10em;\n  flex: 1;\n  font-weight: 500;\n}\n.modal[widget] > .header .close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 1.8em;\n  font-size: 1.25em;\n}\n.modal[widget] > .body {\n  width: 100%;\n  min-height: 4em;\n  flex: 1;\n  overflow: auto;\n  padding: 0.5em;\n}\n.modal[widget] > .footer {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px solid #ccc;\n}\n.modal[widget] > .footer button {\n  min-width: 6em;\n}\n.notification[widget] .content > .text {\n  display: flex;\n  align-items: center;\n}\n.notification[widget] .icon {\n  height: 1.25em;\n  width: 1.25em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n  margin-right: 0.3em;\n}\n.notification[widget] .action {\n  margin: 0 0.5em;\n}\n.notification[widget] .action .icon {\n  background: none;\n  margin: 0;\n}\n.notification[widget] .action .icon:after {\n  font-family: \"Material Icons\";\n  content: \"close\";\n}\n.notification[widget].error .item {\n  background-color: #e53935 !important;\n  color: #fff;\n}\n.notification[widget].error .item i:after {\n  content: \"error\";\n}\n.notification[widget].warn .item {\n  background-color: #ffb300 !important;\n  color: #fff;\n}\n.notification[widget].warn .item i:after {\n  content: \"warning\";\n}\n.notification[widget].info .item {\n  background-color: #fff !important;\n  color: #fff;\n}\n.notification[widget].info .item i:after {\n  content: \"info\";\n}\n.notification[widget].success .item {\n  background-color: #43a047 !important;\n  color: #fff;\n}\n.notification[widget].success .item i:after {\n  content: \"done\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc3R5bGVzL2N1c3RvbS1lbGVtZW50LnN0eWxlcy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvbWNraW5zZXktYm9va2luZ3MtdWkvbWNraW5zZXktYm9va2luZ3MtdWkvc3RkaW4iLCJzcmMvYXBwL3N0eWxlcy9jdXN0b20tZWxlbWVudC5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUE2QkE7O2NBQUE7QUFXQTs7c0JBQUE7QUN2Q0E7RUFDSSxrQkFBQTtBQ1FKO0FETkk7RUFDSSxXQUFBO0FDUVI7QURKQTtFQUNJLGtCQUFBO0FDT0o7QURISTtFQUNJLFdBQUE7QUNNUjtBREZBO0VBQ0ksYUFBQTtBQ0tKO0FESkk7RUFDSSx5QkRDVTtBRUtsQjtBREhJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7QUNLUjtBREhRO0VBQ0ksOENBQUE7QUNLWjtBREZRO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDSVo7QURBSTtFQUNJLHNCQUFBO0VBQ0Esb0JBQUE7QUNFUjtBREdJO0VBQ0ksWUFBQTtBQ0FSO0FETVE7RUFDSSxxQkRqREo7QUU4Q1I7QURPSTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FDTFI7QURVSTtFQUNJLGVBQUE7QUNQUjtBRFVJO0VBQ0ksY0FBQTtBQ1JSO0FEV0k7RUFDSSxlQUFBO0FDVFI7QURhQTtFQUNJLG9DQUFBO0FDVko7QURhQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0dBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNWSjtBRFlJO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtBQ1ZSO0FEWVE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtBQ1ZaO0FEYVE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNYWjtBRGVJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNiUjtBRGdCSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FDZFI7QURnQlE7RUFDSSxjQUFBO0FDZFo7QURvQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNqQlI7QURvQkk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDbEJSO0FEZ0NJO0VBQ0ksZUFBQTtBQzlCUjtBRCtCUTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtBQzdCWjtBRDhCWTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7QUM1QmhCO0FEV1E7RUFDSSxvQ0FBQTtFQUNBLFdBcUIwQjtBQzlCdEM7QURXWTtFQUNJLGdCQWtCNEI7QUMzQjVDO0FESVE7RUFDSSxvQ0FBQTtFQUNBLFdBeUI0QjtBQzNCeEM7QURJWTtFQUNJLGtCQXNCOEI7QUN4QjlDO0FESFE7RUFDSSxpQ0FBQTtFQUNBLFdBNkJrQztBQ3hCOUM7QURIWTtFQUNJLGVBMEJvQztBQ3JCcEQ7QURWUTtFQUNJLG9DQUFBO0VBQ0EsV0FpQzRCO0FDckJ4QztBRFZZO0VBQ0ksZUE4QjhCO0FDbEI5QyIsImZpbGUiOiJzcmMvYXBwL3N0eWxlcy9jdXN0b20tZWxlbWVudC5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogI2ZmZjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzFmNDBlNjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG5cbiRiYXNlLXNpemU6IDIwcHg7XG4kdGFibGV0LXNpemU6IDIwcHg7XG4kbW9iaWxlLXNpemU6IDIwcHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5kcm9wZG93blt3aWRnZXRdIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAmLmZpbGwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5kcm9wZG93bi1saXN0W3dpZGdldF0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnNwaW5uZXIge1xuICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuYnV0dG9uW3dpZGdldF0ge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgJi5kZWZhdWx0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcbiAgICB9XG5cbiAgICAmLmFjdGlvbiB7XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICB3aWR0aDogMmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2xvcjogcmdiYSgjMDAwLCAwLjg3KTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgjMDAwLCAwLjg3KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgjZmZmLCAwLjYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuXG4uZHJvcGRvd25bd2lkZ2V0XSB7XG4gICAgJi5kZWZhdWx0IHtcbiAgICAgICAgd2lkdGg6IDkuNWVtO1xuICAgIH1cbn1cblxuLmR5bmFtaWMtZm9ybVt3aWRnZXRdIHtcbiAgICAuZXJyb3Ige1xuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5keW5hbWljLWZpZWxkIC5pbmZvLnN0YXR1cyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59XG5cbi5keW5hbWljLWZpZWxkW3dpZGdldF0ge1xuICAgIC5kZXRhaWxzIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmNvbnRyb2wge1xuICAgICAgICBtaW4td2lkdGg6IDEwZW07XG4gICAgfVxufVxuXG4ub3ZlcmxheS1iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAwLjYpO1xufVxuXG4ubW9kYWxbd2lkZ2V0XSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgMC4xMik7XG4gICAgbWF4LXdpZHRoOiA5NXZ3O1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG5cbiAgICAmID4gLmhlYWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDIuNWVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVlbTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTBlbTtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMS44ZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgPiAuYm9keSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiA0ZW07XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICB9XG5cbiAgICAmID4gLmZvb3RlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubm90aWZpY2F0aW9uW3dpZGdldF0ge1xuICAgIC5jb250ZW50ID4gLnRleHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuM2VtO1xuICAgIH1cblxuICAgIEBtaXhpbiBub3RpZnktc3R5bGUoJGJhY2ssICRmb3JlLCAkaWNvbikge1xuICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6ICRmb3JlO1xuXG4gICAgICAgICAgICBpOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAkaWNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpb24ge1xuICAgICAgICBtYXJnaW46IDAgLjVlbTtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ2Nsb3NlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuZXJyb3Ige1xuICAgICAgICBAaW5jbHVkZSBub3RpZnktc3R5bGUoJGVycm9yLCAjZmZmLCAnZXJyb3InKTtcbiAgICB9XG5cbiAgICAmLndhcm4ge1xuICAgICAgICBAaW5jbHVkZSBub3RpZnktc3R5bGUoJHBlbmRpbmcsICNmZmYsICd3YXJuaW5nJyk7XG4gICAgfVxuXG4gICAgJi5pbmZvIHtcbiAgICAgICAgQGluY2x1ZGUgbm90aWZ5LXN0eWxlKCRjb2xvci1wcmltYXJ5LCAjZmZmLCAnaW5mbycpO1xuICAgIH1cblxuICAgICYuc3VjY2VzcyB7XG4gICAgICAgIEBpbmNsdWRlIG5vdGlmeS1zdHlsZSgkc3VjY2VzcywgI2ZmZiwgJ2RvbmUnKTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uZHJvcGRvd25bd2lkZ2V0XSB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbi5kcm9wZG93blt3aWRnZXRdLmZpbGwge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmRyb3Bkb3duLWxpc3Rbd2lkZ2V0XSB7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnNwaW5uZXIgc3ZnIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmJ1dHRvblt3aWRnZXRdIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cbmJ1dHRvblt3aWRnZXRdLmRlZmF1bHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWY0MGU2O1xufVxuYnV0dG9uW3dpZGdldF0uYWN0aW9uIHtcbiAgaGVpZ2h0OiAyZW07XG4gIHdpZHRoOiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICBib3gtc2hhZG93OiAwIDAgMCAycHggI2ZmZjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cbmJ1dHRvblt3aWRnZXRdLmFjdGlvbjpob3ZlciB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNik7XG59XG5idXR0b25bd2lkZ2V0XS5hY3Rpb24gLndyYXBwZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbn1cbmJ1dHRvblt3aWRnZXRdW2Rpc2FibGVkXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uZHJvcGRvd25bd2lkZ2V0XS5kZWZhdWx0IHtcbiAgd2lkdGg6IDkuNWVtO1xufVxuXG4uZHluYW1pYy1mb3JtW3dpZGdldF0gLmVycm9yIGlucHV0IHtcbiAgYm9yZGVyLWNvbG9yOiAjZTUzOTM1O1xufVxuLmR5bmFtaWMtZm9ybVt3aWRnZXRdIC5keW5hbWljLWZpZWxkIC5pbmZvLnN0YXR1cyB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLmR5bmFtaWMtZmllbGRbd2lkZ2V0XSAuZGV0YWlscyB7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi5keW5hbWljLWZpZWxkW3dpZGdldF0gbGFiZWwge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5keW5hbWljLWZpZWxkW3dpZGdldF0gLmNvbnRyb2wge1xuICBtaW4td2lkdGg6IDEwZW07XG59XG5cbi5vdmVybGF5LWJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4ubW9kYWxbd2lkZ2V0XSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtYXgtd2lkdGg6IDk1dnc7XG4gIG1heC1oZWlnaHQ6IDkwdmg7XG59XG4ubW9kYWxbd2lkZ2V0XSA+IC5oZWFkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cbi5tb2RhbFt3aWRnZXRdID4gLmhlYWRlciAudGV4dCB7XG4gIHBhZGRpbmc6IDAuNzVlbTtcbiAgbWluLXdpZHRoOiAxMGVtO1xuICBmbGV4OiAxO1xuICBmb250LXdlaWdodDogNTAwO1xufVxuLm1vZGFsW3dpZGdldF0gPiAuaGVhZGVyIC5jbG9zZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxLjhlbTtcbiAgZm9udC1zaXplOiAxLjI1ZW07XG59XG4ubW9kYWxbd2lkZ2V0XSA+IC5ib2R5IHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDRlbTtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuLm1vZGFsW3dpZGdldF0gPiAuZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbn1cbi5tb2RhbFt3aWRnZXRdID4gLmZvb3RlciBidXR0b24ge1xuICBtaW4td2lkdGg6IDZlbTtcbn1cblxuLm5vdGlmaWNhdGlvblt3aWRnZXRdIC5jb250ZW50ID4gLnRleHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdIC5pY29uIHtcbiAgaGVpZ2h0OiAxLjI1ZW07XG4gIHdpZHRoOiAxLjI1ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjNlbTtcbn1cbi5ub3RpZmljYXRpb25bd2lkZ2V0XSAuYWN0aW9uIHtcbiAgbWFyZ2luOiAwIDAuNWVtO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdIC5hY3Rpb24gLmljb24ge1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBtYXJnaW46IDA7XG59XG4ubm90aWZpY2F0aW9uW3dpZGdldF0gLmFjdGlvbiAuaWNvbjphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gIGNvbnRlbnQ6IFwiY2xvc2VcIjtcbn1cbi5ub3RpZmljYXRpb25bd2lkZ2V0XS5lcnJvciAuaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTM5MzUgIWltcG9ydGFudDtcbiAgY29sb3I6ICNmZmY7XG59XG4ubm90aWZpY2F0aW9uW3dpZGdldF0uZXJyb3IgLml0ZW0gaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiZXJyb3JcIjtcbn1cbi5ub3RpZmljYXRpb25bd2lkZ2V0XS53YXJuIC5pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjMwMCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ub3RpZmljYXRpb25bd2lkZ2V0XS53YXJuIC5pdGVtIGk6YWZ0ZXIge1xuICBjb250ZW50OiBcIndhcm5pbmdcIjtcbn1cbi5ub3RpZmljYXRpb25bd2lkZ2V0XS5pbmZvIC5pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ub3RpZmljYXRpb25bd2lkZ2V0XS5pbmZvIC5pdGVtIGk6YWZ0ZXIge1xuICBjb250ZW50OiBcImluZm9cIjtcbn1cbi5ub3RpZmljYXRpb25bd2lkZ2V0XS5zdWNjZXNzIC5pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzYTA0NyAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ub3RpZmljYXRpb25bd2lkZ2V0XS5zdWNjZXNzIC5pdGVtIGk6YWZ0ZXIge1xuICBjb250ZW50OiBcImRvbmVcIjtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/styles/native-element.styles.scss.ngstyle.js":
/*!**************************************************************!*\
  !*** ./src/app/styles/native-element.styles.scss.ngstyle.js ***!
  \**************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n\n\ninput {\n  font-size: 1em;\n  min-width: 100%;\n  padding: 0.5em;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-appearance: none;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\ninput:focus {\n  border-bottom-color: #1f40e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc3R5bGVzL25hdGl2ZS1lbGVtZW50LnN0eWxlcy5zY3NzIiwiL2hvbWUvcnVubmVyL3dvcmsvbWNraW5zZXktYm9va2luZ3MtdWkvbWNraW5zZXktYm9va2luZ3MtdWkvc3RkaW4iLCJzcmMvYXBwL3N0eWxlcy9uYXRpdmUtZWxlbWVudC5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUE2QkE7O2NBQUE7QUFXQTs7c0JBQUE7QUN0Q0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDT0o7QURMSTtFQUNJLDRCRFFVO0FFRGxCIiwiZmlsZSI6InNyYy9hcHAvc3R5bGVzL25hdGl2ZS1lbGVtZW50LnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG5pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGNvbG9yOiByZ2JhKCRmb250LWRhcmssIC44Nyk7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgIHVzZXItc2VsZWN0OiB0ZXh0O1xuXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuaW5wdXQge1xuICBmb250LXNpemU6IDFlbTtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICB1c2VyLXNlbGVjdDogdGV4dDtcbn1cbmlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFmNDBlNjtcbn0iXX0= */"];



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/mckinsey-bookings-ui/mckinsey-bookings-ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map