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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shell/shell.component */ "./src/app/shell/shell.component.ts");
/* harmony import */ var _shell_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shell/bootstrap/bootstrap.component */ "./src/app/shell/bootstrap/bootstrap.component.ts");
/* harmony import */ var _shell_panel_array_panel_array_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shell/panel-array/panel-array.component */ "./src/app/shell/panel-array/panel-array.component.ts");
/* harmony import */ var _shell_panel_select_panel_select_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shell/panel-select/panel-select.component */ "./src/app/shell/panel-select/panel-select.component.ts");
/* harmony import */ var _shell_panel_panel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shell/panel/panel.component */ "./src/app/shell/panel/panel.component.ts");






const routes = [
    {
        path: '',
        component: _shell_shell_component__WEBPACK_IMPORTED_MODULE_1__["ShellWrapperComponent"],
        children: [
            { path: 'bootstrap', component: _shell_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_2__["BootstrapComponent"] },
            { path: 'panel/:system_id', component: _shell_panel_panel_component__WEBPACK_IMPORTED_MODULE_5__["BookingPanelComponent"] },
            { path: 'panel-array', component: _shell_panel_array_panel_array_component__WEBPACK_IMPORTED_MODULE_3__["BookingPanelArrayComponent"] },
            { path: 'panel-select', component: _shell_panel_select_panel_select_component__WEBPACK_IMPORTED_MODULE_4__["BookingPanelSelectComponent"] },
            { path: '**', redirectTo: 'bootstrap' }
        ]
    },
    { path: '**', redirectTo: 'bootstrap' }
];
class AppRoutingModule {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _debug_outlet_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./debug-outlet.component.ngfactory */ "./src/app/debug-outlet.component.ngfactory.js");
/* harmony import */ var _debug_outlet_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./debug-outlet.component */ "./src/app/debug-outlet.component.ts");
/* harmony import */ var _services_debug_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/debug.service */ "./src/app/services/debug.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 









var styles_AppComponent = [_styles_app_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"], _styles_custom_element_styles_scss_ngstyle__WEBPACK_IMPORTED_MODULE_1__["styles"], _styles_native_element_styles_scss_ngstyle__WEBPACK_IMPORTED_MODULE_2__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵcrt"]({ encapsulation: 2, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 4, "div", [["class", "app"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](1, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](2, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_4__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](3, 0, null, null, 1, "debug-outlet", [], null, null, null, _debug_outlet_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_DebugOutletComponent_0"], _debug_outlet_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_DebugOutletComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](4, 49152, null, 0, _debug_outlet_component__WEBPACK_IMPORTED_MODULE_6__["DebugOutletComponent"], [_services_debug_service__WEBPACK_IMPORTED_MODULE_7__["DebugService"]], null, null)], function (_ck, _v) { _ck(_v, 2, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



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
class AppComponent {
    constructor() {
        window.app_loaded = true;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _shell_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shell/shell.component.ngfactory */ "./src/app/shell/shell.component.ngfactory.js");
/* harmony import */ var _shell_bootstrap_bootstrap_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shell/bootstrap/bootstrap.component.ngfactory */ "./src/app/shell/bootstrap/bootstrap.component.ngfactory.js");
/* harmony import */ var _shell_panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shell/panel/panel.component.ngfactory */ "./src/app/shell/panel/panel.component.ngfactory.js");
/* harmony import */ var _shell_panel_array_panel_array_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shell/panel-array/panel-array.component.ngfactory */ "./src/app/shell/panel-array/panel-array.component.ngfactory.js");
/* harmony import */ var _shell_panel_select_panel_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shell/panel-select/panel-select.component.ngfactory */ "./src/app/shell/panel-select/panel-select.component.ngfactory.js");
/* harmony import */ var _node_modules_acaprojects_ngx_overlays_acaprojects_ngx_overlays_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../node_modules/@acaprojects/ngx-overlays/acaprojects-ngx-overlays.ngfactory */ "./node_modules/@acaprojects/ngx-overlays/acaprojects-ngx-overlays.ngfactory.js");
/* harmony import */ var _shared_components_user_search_field_user_search_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/components/user-search-field/user-search-field.component.ngfactory */ "./src/app/shared/components/user-search-field/user-search-field.component.ngfactory.js");
/* harmony import */ var _shared_components_time_field_time_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./shared/components/time-field/time-field.component.ngfactory */ "./src/app/shared/components/time-field/time-field.component.ngfactory.js");
/* harmony import */ var _shared_components_duration_field_duration_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/components/duration-field/duration-field.component.ngfactory */ "./src/app/shared/components/duration-field/duration-field.component.ngfactory.js");
/* harmony import */ var _overlays_confirm_modal_confirm_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./overlays/confirm-modal/confirm-modal.component.ngfactory */ "./src/app/overlays/confirm-modal/confirm-modal.component.ngfactory.js");
/* harmony import */ var _overlays_embedded_control_modal_embedded_control_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./overlays/embedded-control-modal/embedded-control-modal.component.ngfactory */ "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ngfactory.js");
/* harmony import */ var _overlays_booking_modal_booking_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./overlays/booking-modal/booking-modal.component.ngfactory */ "./src/app/overlays/booking-modal/booking-modal.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/animations/browser */ "./node_modules/@angular/animations/fesm2015/browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _shell_shell_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./shell/shell.component */ "./src/app/shell/shell.component.ts");
/* harmony import */ var _shell_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shell/bootstrap/bootstrap.component */ "./src/app/shell/bootstrap/bootstrap.component.ts");
/* harmony import */ var _shell_panel_panel_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./shell/panel/panel.component */ "./src/app/shell/panel/panel.component.ts");
/* harmony import */ var _shell_panel_array_panel_array_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./shell/panel-array/panel-array.component */ "./src/app/shell/panel-array/panel-array.component.ts");
/* harmony import */ var _shell_panel_select_panel_select_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./shell/panel-select/panel-select.component */ "./src/app/shell/panel-select/panel-select.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _acaprojects_ngx_google_analytics__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @acaprojects/ngx-google-analytics */ "./node_modules/@acaprojects/ngx-google-analytics/fesm2015/acaprojects-ngx-google-analytics.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/esm2015/portal.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
/* harmony import */ var _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @acaprojects/ngx-dropdown */ "./node_modules/@acaprojects/ngx-dropdown/fesm2015/acaprojects-ngx-dropdown.js");
/* harmony import */ var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @acaprojects/ngx-spinners */ "./node_modules/@acaprojects/ngx-spinners/fesm2015/acaprojects-ngx-spinners.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
/* harmony import */ var _acaprojects_ngx_checkbox__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @acaprojects/ngx-checkbox */ "./node_modules/@acaprojects/ngx-checkbox/fesm2015/acaprojects-ngx-checkbox.js");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "./node_modules/@acaprojects/ngx-pipes/fesm2015/acaprojects-ngx-pipes.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _overlays_overlays_module__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./overlays/overlays.module */ "./src/app/overlays/overlays.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 

















































var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _shell_shell_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["ShellWrapperComponentNgFactory"], _shell_bootstrap_bootstrap_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["BootstrapComponentNgFactory"], _shell_panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["BookingPanelComponentNgFactory"], _shell_panel_array_panel_array_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["BookingPanelArrayComponentNgFactory"], _shell_panel_select_panel_select_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["BookingPanelSelectComponentNgFactory"], _node_modules_acaprojects_ngx_overlays_acaprojects_ngx_overlays_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ɵaNgFactory"], _node_modules_acaprojects_ngx_overlays_acaprojects_ngx_overlays_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ɵbNgFactory"], _node_modules_acaprojects_ngx_overlays_acaprojects_ngx_overlays_ngfactory__WEBPACK_IMPORTED_MODULE_9__["ɵcNgFactory"], _shared_components_user_search_field_user_search_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["CustomUserSearchFieldComponentNgFactory"], _shared_components_time_field_time_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["CustomTimeFieldComponentNgFactory"], _shared_components_duration_field_duration_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["CustomDurationFieldComponentNgFactory"], _overlays_confirm_modal_confirm_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["ConfirmModalComponentNgFactory"], _overlays_embedded_control_modal_embedded_control_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["EmbeddedControlModalComponentNgFactory"], _overlays_booking_modal_booking_modal_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["BookingModalComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_19__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_21__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_22__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_22__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_17__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_service_worker_service_worker_a"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_service_worker_service_worker_d"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["SwPush"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["SwPush"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["SwUpdate"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["SwUpdate"], [_angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_service_worker_service_worker_a"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_service_worker_service_worker_b"], "ngsw-worker.js", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["SwRegistrationOptions"], { enabled: true }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0, p2_0, p2_1, p2_2, p2_3) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_i"](p1_0), _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_service_worker_service_worker_c"](p2_0, p2_1, p2_2, p2_3)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_h"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ɵangular_packages_service_worker_service_worker_b"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["SwRegistrationOptions"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_18__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_22__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_CONFIGURATION"], { useHash: true }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_17__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_17__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_17__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_17__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTES"], function () { return [[{ path: "", component: _shell_shell_component__WEBPACK_IMPORTED_MODULE_28__["ShellWrapperComponent"], children: [{ path: "bootstrap", component: _shell_bootstrap_bootstrap_component__WEBPACK_IMPORTED_MODULE_29__["BootstrapComponent"] }, { path: "panel/:system_id", component: _shell_panel_panel_component__WEBPACK_IMPORTED_MODULE_30__["BookingPanelComponent"] }, { path: "panel-array", component: _shell_panel_array_panel_array_component__WEBPACK_IMPORTED_MODULE_31__["BookingPanelArrayComponent"] }, { path: "panel-select", component: _shell_panel_select_panel_select_component__WEBPACK_IMPORTED_MODULE_32__["BookingPanelSelectComponent"] }, { path: "**", redirectTo: "bootstrap" }] }, { path: "**", redirectTo: "bootstrap" }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_22__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_22__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_22__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_33__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_google_analytics__WEBPACK_IMPORTED_MODULE_34__["AGoogleAnalyticsModule"], _acaprojects_ngx_google_analytics__WEBPACK_IMPORTED_MODULE_34__["AGoogleAnalyticsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_35__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_35__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_36__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_36__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_37__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_37__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_38__["AOverlayModule"], _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_38__["AOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_39__["ADropdownsModule"], _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_39__["ADropdownsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_40__["ASpinnerModule"], _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_40__["ASpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_41__["ACustomEventsModule"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_41__["ACustomEventsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_42__["AButtonsModule"], _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_42__["AButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_43__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_43__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_checkbox__WEBPACK_IMPORTED_MODULE_44__["ACheckboxModule"], _acaprojects_ngx_checkbox__WEBPACK_IMPORTED_MODULE_44__["ACheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_45__["ADynamicFormsModule"], _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_45__["ADynamicFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_46__["APipesModule"], _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_46__["APipesModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_47__["SharedContentModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_47__["SharedContentModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _overlays_overlays_module__WEBPACK_IMPORTED_MODULE_48__["SharedOverlaysModule"], _overlays_overlays_module__WEBPACK_IMPORTED_MODULE_48__["SharedOverlaysModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ServiceWorkerModule"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_27__["ServiceWorkerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]); });



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


class AppModule {
    constructor() {
        console.log('Production:', !!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production);
    }
}


/***/ }),

/***/ "./src/app/debug-outlet.component.ngfactory.js":
/*!*****************************************************!*\
  !*** ./src/app/debug-outlet.component.ngfactory.js ***!
  \*****************************************************/
/*! exports provided: RenderType_DebugOutletComponent, View_DebugOutletComponent_0, View_DebugOutletComponent_Host_0, DebugOutletComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_DebugOutletComponent", function() { return RenderType_DebugOutletComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DebugOutletComponent_0", function() { return View_DebugOutletComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_DebugOutletComponent_Host_0", function() { return View_DebugOutletComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugOutletComponentNgFactory", function() { return DebugOutletComponentNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _debug_outlet_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./debug-outlet.component */ "./src/app/debug-outlet.component.ts");
/* harmony import */ var _services_debug_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/debug.service */ "./src/app/services/debug.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 




var styles_DebugOutletComponent = [".toggle-space[_ngcontent-%COMP%] {\n            position: absolute;\n            top: 0;\n            left: 0;\n            height: 2em;\n            width: 2em;\n            z-index: 9999;\n        }\n\n        .debug-outlet[_ngcontent-%COMP%] {\n            position: absolute;\n            bottom: .5em;\n            left: .5em;\n            background-color: #fff;\n            border-radius: 4px;\n            z-index: 999;\n            box-shadow: 0 1px 3px 1px rgba(0,0,0, .2),\n                        0 1px 1px 0 rgba(0,0,0, .14),\n                        0 2px 1px -1px rgba(0,0,0, .12);\n        }\n\n        h4[_ngcontent-%COMP%] { width: 100%; border-bottom: 1px solid #ccc; margin: 0; padding: .5rem }\n\n        .log[_ngcontent-%COMP%] {\n            font-size: .7em;\n            font-family: monospace;\n            padding: .5em;\n            white-space: nowrap;\n        }\n\n        .log[_ngcontent-%COMP%]:nth-child(2n) {\n            background-color: rgba(0,0,0,0.05);\n        }\n\n        span[_ngcontent-%COMP%] {\n            font-family: monospace;\n            opacity: .8;\n        }\n\n        .list[_ngcontent-%COMP%] {\n            max-height: 20em;\n            max-width: 40em;\n            overflow: auto;\n        }"];
var RenderType_DebugOutletComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({ encapsulation: 0, styles: styles_DebugOutletComponent, data: {} });

function View_DebugOutletComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "log"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](1, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](2, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 1, "span", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](4, null, ["[", "]"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](5, null, [" ", " "])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], [])], null, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 1, 0, _ck(_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 0), _v.context.$implicit.time, "HH:mm:ss")); _ck(_v, 1, 0, currVal_0); var currVal_1 = _v.context.$implicit.level; _ck(_v, 4, 0, currVal_1); var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).transform(_v.context.$implicit.content)); _ck(_v, 5, 0, currVal_2); }); }
function View_DebugOutletComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "debug-outlet"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 1, "h4", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵted"](-1, null, ["Debug logs"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](3, 0, null, null, 3, "div", [["class", "list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 2, null, View_DebugOutletComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])], function (_ck, _v) { var _co = _v.component; var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 5, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v, 6).transform(_co.log_list)); _ck(_v, 5, 0, currVal_0); }, null); }
function View_DebugOutletComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 0, "div", [["class", "toggle-space"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = ((_co.show = !_co.show) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_DebugOutletComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.show; _ck(_v, 3, 0, currVal_0); }, null); }
function View_DebugOutletComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "debug-outlet", [], null, null, null, View_DebugOutletComponent_0, RenderType_DebugOutletComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _debug_outlet_component__WEBPACK_IMPORTED_MODULE_2__["DebugOutletComponent"], [_services_debug_service__WEBPACK_IMPORTED_MODULE_3__["DebugService"]], null, null)], null, null); }
var DebugOutletComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("debug-outlet", _debug_outlet_component__WEBPACK_IMPORTED_MODULE_2__["DebugOutletComponent"], View_DebugOutletComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/debug-outlet.component.ts":
/*!*******************************************!*\
  !*** ./src/app/debug-outlet.component.ts ***!
  \*******************************************/
/*! exports provided: DebugOutletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugOutletComponent", function() { return DebugOutletComponent; });
/* harmony import */ var _services_debug_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/debug.service */ "./src/app/services/debug.service.ts");

class DebugOutletComponent {
    constructor(_debug) {
        this._debug = _debug;
        this.show = false;
    }
    get log_list() {
        return this._debug.logs;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_acaprojects_ngx_dynamic_forms_acaprojects_ngx_dynamic_forms_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-dynamic-forms/acaprojects-ngx-dynamic-forms.ngfactory */ "./node_modules/@acaprojects/ngx-dynamic-forms/acaprojects-ngx-dynamic-forms.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory */ "./node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acaprojects/ngx-spinners */ "./node_modules/@acaprojects/ngx-spinners/fesm2015/acaprojects-ngx-spinners.js");
/* harmony import */ var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */ "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _booking_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./booking-modal.component */ "./src/app/overlays/booking-modal/booking-modal.component.ts");
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".booking[_ngcontent-%COMP%] {\n  width: 24em;\n  transition: width 200ms, height 200ms;\n}\n.booking.is-loading[_ngcontent-%COMP%] {\n  width: 16em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL292ZXJsYXlzL2Jvb2tpbmctbW9kYWwvYm9va2luZy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3ZlcmxheXMvYm9va2luZy1tb2RhbC9ib29raW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQW1CQTs7d0NBQUE7QUEyQkE7O2NBQUE7QUFjQTs7c0JBQUE7QUMxREE7RUFDSSxXQUFBO0VBQ0EscUNBQUE7QUNVSjtBRFJJO0VBQ0ksV0FBQTtBQ1VSIiwiZmlsZSI6InNyYy9hcHAvb3ZlcmxheXMvYm9va2luZy1tb2RhbC9ib29raW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzNhYTUzNztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHdhcm5pbmc6ICNmZkQwNDg7XG4kd2FybmluZy1saWdodDogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHdhcm5pbmctZGFyazogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvcjogI2FlMTkyODtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFYxIEFwcGxpY2F0aW9uIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2Vzcy12MTogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0LXYxOiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrLXYxOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmctdjE6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodC12MTogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHBlbmRpbmctZGFyay12MTogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvci12MTogI2U1MzkzNTtcbiRlcnJvci1saWdodC12MTogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrLXYxOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kZm9udC1mYW1pbHktcHJpbWFyeTogXCJNY0tpbnNleSBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQ2FsaWJyaSwgQ29yYmVsLCBIZWx2ZXRpY2EsIFJvYm90bywgRHJvaWQsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBcIkJvd2VyXCIsIEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIgc2VyaWY7XG5cbiRiYXNlLXNpemU6IDIwcHg7XG4kdGFibGV0LXNpemU6IDIwcHg7XG4kbW9iaWxlLXNpemU6IDIwcHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmJvb2tpbmcge1xuICAgIHdpZHRoOiAyNGVtO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDIwMG1zLCBoZWlnaHQgMjAwbXM7XG5cbiAgICAmLmlzLWxvYWRpbmcge1xuICAgICAgICB3aWR0aDogMTZlbTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFYxIEFwcGxpY2F0aW9uIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5ib29raW5nIHtcbiAgd2lkdGg6IDI0ZW07XG4gIHRyYW5zaXRpb246IHdpZHRoIDIwMG1zLCBoZWlnaHQgMjAwbXM7XG59XG4uYm9va2luZy5pcy1sb2FkaW5nIHtcbiAgd2lkdGg6IDE2ZW07XG59Il19 */"];



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
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data/bookings/booking.class */ "./src/app/services/data/bookings/booking.class.ts");
/* harmony import */ var _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/globals/overlay-register */ "./src/app/shared/globals/overlay-register.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);






class BookingModalComponent extends _shared_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(item, service) {
        super();
        this.item = item;
        this.service = service;
    }
    ngOnInit() {
        this.booking = new _services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_3__["Booking"](this.service.Bookings, {
            date: this.item.data.date,
            form_metadata: Object.assign({}, this.item.data)
        });
        const space_field = this.booking.form_fields.find(field => field.key === 'space');
        if (this.item.data.space && space_field) {
            space_field.setValue(this.item.data.space);
        }
        const date_field = this.booking.form_fields.find(field => field.key === 'date');
        if (date_field) {
            date_field.setValue(this.item.data.date || dayjs__WEBPACK_IMPORTED_MODULE_5__().valueOf());
        }
        const title_field = this.booking.form_fields.find(field => field.key === 'title');
        if (title_field) {
            title_field.setValue(this.item.data.title || '');
        }
    }
    /**
     * Closes the modal
     */
    close() {
        this.closing = true;
        this.timeout('close', () => this.item.close());
    }
    /**
     * Post form data
     */
    save() {
        const fields = this.booking.form_fields;
        fields.forEach(i => i.control.markAsDirty());
        const valid = fields.reduce((fields_valid, field) => fields_valid &&
            (field.control.valid ||
                (field.children &&
                    field.children.length &&
                    field.children.reduce((sub_fields_valid, sub_field) => sub_fields_valid && sub_field.control.valid, true))), true);
        if (this.booking && valid) {
            this.loading = true;
            this.item.post('finish', {
                booking: this.booking,
                on_error: () => (this.loading = false),
                close: () => this.close()
            });
        }
        else {
            console.log('Invalid form fields. Valid states:', fields.map(field => `${field.key}:${field.control.valid}`));
        }
    }
}
_shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_4__["OVERLAY_REGISTER"].push({
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */ "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _confirm_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".confirm[_ngcontent-%COMP%] {\n  min-width: 18em;\n}\n.body[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em;\n}\n.icon[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n}\n.content[_ngcontent-%COMP%] {\n  width: 16rem;\n  text-align: center;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL292ZXJsYXlzL2NvbmZpcm0tbW9kYWwvY29uZmlybS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3ZlcmxheXMvY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQW1CQTs7d0NBQUE7QUEyQkE7O2NBQUE7QUFjQTs7c0JBQUE7QUMxREE7RUFDSSxlQUFBO0FDVUo7QURQQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ1VKO0FEUEE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtBQ1VKO0FEUEE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1VKIiwiZmlsZSI6InNyYy9hcHAvb3ZlcmxheXMvY29uZmlybS1tb2RhbC9jb25maXJtLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzNhYTUzNztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHdhcm5pbmc6ICNmZkQwNDg7XG4kd2FybmluZy1saWdodDogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHdhcm5pbmctZGFyazogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvcjogI2FlMTkyODtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFYxIEFwcGxpY2F0aW9uIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2Vzcy12MTogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0LXYxOiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrLXYxOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmctdjE6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodC12MTogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHBlbmRpbmctZGFyay12MTogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvci12MTogI2U1MzkzNTtcbiRlcnJvci1saWdodC12MTogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrLXYxOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kZm9udC1mYW1pbHktcHJpbWFyeTogXCJNY0tpbnNleSBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQ2FsaWJyaSwgQ29yYmVsLCBIZWx2ZXRpY2EsIFJvYm90bywgRHJvaWQsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBcIkJvd2VyXCIsIEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIgc2VyaWY7XG5cbiRiYXNlLXNpemU6IDIwcHg7XG4kdGFibGV0LXNpemU6IDIwcHg7XG4kbW9iaWxlLXNpemU6IDIwcHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmNvbmZpcm0ge1xuICAgIG1pbi13aWR0aDogMThlbTtcbn1cblxuLmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuLmljb24ge1xuICAgIGhlaWdodDogMS4yZW07XG4gICAgd2lkdGg6IDEuMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuLmNvbnRlbnQge1xuICAgIHdpZHRoOiAxNnJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAuOGVtO1xufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBWMSBBcHBsaWNhdGlvbiBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY29uZmlybSB7XG4gIG1pbi13aWR0aDogMThlbTtcbn1cblxuLmJvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5pY29uIHtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAyZW07XG59XG5cbi5jb250ZW50IHtcbiAgd2lkdGg6IDE2cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59Il19 */"];



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
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globals/overlay-register */ "./src/app/shared/globals/overlay-register.ts");



class ConfirmModalComponent extends _shared_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(item) {
        super();
        this.item = item;
    }
    ngOnInit() {
        const data = this.item.data;
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
    close() {
        this.closing = true;
        this.timeout('close', () => this.item.close());
    }
    /**
     * User confirmation of the content of the modal
     */
    accept() {
        this.item.post('finish');
        this.close();
    }
}
_shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_2__["OVERLAY_REGISTER"].push({ id: 'confirm', config: { content: ConfirmModalComponent, config: 'modal' } });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "./node_modules/@acaprojects/ngx-pipes/fesm2015/acaprojects-ngx-pipes.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */ "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _embedded_control_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./embedded-control-modal.component */ "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ts");
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".background[_ngcontent-%COMP%] {\n  position: absolute;\n  height: calc(101vh);\n  width: calc(101vw);\n  background-color: #fff;\n  transform: translate(-50%, -50%);\n}\n.control[_ngcontent-%COMP%] {\n  position: absolute;\n  height: calc(100vh - 4.5em);\n  width: calc(100vw - 1em);\n  box-sizing: content-box;\n  border: 2px solid #fff;\n  border-radius: 2em;\n  overflow: hidden;\n  background-color: #fff;\n  transform: translate(-50%, calc(-50% + 1.75em));\n}\n.control-frame[_ngcontent-%COMP%], iframe[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border: none;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL292ZXJsYXlzL2VtYmVkZGVkLWNvbnRyb2wtbW9kYWwvZW1iZWRkZWQtY29udHJvbC1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvb3ZlcmxheXMvZW1iZWRkZWQtY29udHJvbC1tb2RhbC9lbWJlZGRlZC1jb250cm9sLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQW1CQTs7d0NBQUE7QUEyQkE7O2NBQUE7QUFjQTs7c0JBQUE7QUMxREE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdDQUFBO0FDVUo7QURQQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JEa0JZO0VDakJaLCtDQUFBO0FDVUo7QURQQTs7RUFFSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNVSjtBRFBBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1VKO0FEUEE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNVSjtBRFRJO0VBQ0ksY0FBQTtBQ1dSIiwiZmlsZSI6InNyYy9hcHAvb3ZlcmxheXMvZW1iZWRkZWQtY29udHJvbC1tb2RhbC9lbWJlZGRlZC1jb250cm9sLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzNhYTUzNztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHdhcm5pbmc6ICNmZkQwNDg7XG4kd2FybmluZy1saWdodDogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHdhcm5pbmctZGFyazogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvcjogI2FlMTkyODtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFYxIEFwcGxpY2F0aW9uIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2Vzcy12MTogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0LXYxOiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrLXYxOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmctdjE6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodC12MTogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHBlbmRpbmctZGFyay12MTogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvci12MTogI2U1MzkzNTtcbiRlcnJvci1saWdodC12MTogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrLXYxOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kZm9udC1mYW1pbHktcHJpbWFyeTogXCJNY0tpbnNleSBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQ2FsaWJyaSwgQ29yYmVsLCBIZWx2ZXRpY2EsIFJvYm90bywgRHJvaWQsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBcIkJvd2VyXCIsIEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIgc2VyaWY7XG5cbiRiYXNlLXNpemU6IDIwcHg7XG4kdGFibGV0LXNpemU6IDIwcHg7XG4kbW9iaWxlLXNpemU6IDIwcHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmJhY2tncm91bmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAxdmgpO1xuICAgIHdpZHRoOiBjYWxjKDEwMXZ3KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOztcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmNvbnRyb2wge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA0LjVlbSk7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAxZW0pO1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xuICAgIGJvcmRlci1yYWRpdXM6IDJlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIGNhbGMoLTUwJSArIDEuNzVlbSkpO1xufVxuXG4uY29udHJvbC1mcmFtZSxcbmlmcmFtZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogbm9uZTtcbn1cblxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBoZWlnaHQ6IDEuMmVtO1xuICAgIHdpZHRoOiAxLjJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaSAge1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFYxIEFwcGxpY2F0aW9uIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5iYWNrZ3JvdW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IGNhbGMoMTAxdmgpO1xuICB3aWR0aDogY2FsYygxMDF2dyk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xufVxuXG4uY29udHJvbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNC41ZW0pO1xuICB3aWR0aDogY2FsYygxMDB2dyAtIDFlbSk7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xuICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAyZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIGNhbGMoLTUwJSArIDEuNzVlbSkpO1xufVxuXG4uY29udHJvbC1mcmFtZSxcbmlmcmFtZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5pY29uIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cbi5pY29uIGkge1xuICBmb250LXNpemU6IDFlbTtcbn0iXX0= */"];



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
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/globals/overlay-register */ "./src/app/shared/globals/overlay-register.ts");



class EmbeddedControlModalComponent extends _shared_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(item) {
        super();
        this.item = item;
        this.countdown = 30;
    }
    ngOnInit() {
        const data = this.item.data;
        if (data) {
            this.control_url = data.control_url;
        }
        if (!this.control_url) {
            this.close();
        }
        this.countdown = 30;
        this.interval('countdown', () => this.tick(), 1000);
    }
    /**
     * Close the modal
     */
    close() {
        this.item.close();
        this.countdown = 30;
    }
    /**
     * User confirmation of the content of the modal
     */
    reset() {
        this.countdown = 30;
        this.interval('countdown', () => this.tick(), 1000);
    }
    /**
     * Decrement countdown and close if 0
     */
    tick() {
        if (this.countdown <= 0) {
            this.close();
        }
        this.countdown--;
    }
}
_shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_2__["OVERLAY_REGISTER"].push({ id: 'embeded-control', config: { content: EmbeddedControlModalComponent, config: 'modal' } });


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _embedded_control_modal_embedded_control_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./embedded-control-modal/embedded-control-modal.component */ "./src/app/overlays/embedded-control-modal/embedded-control-modal.component.ts");
/* harmony import */ var _booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-modal/booking-modal.component */ "./src/app/overlays/booking-modal/booking-modal.component.ts");




const OVERLAYS = [
    _confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmModalComponent"],
    _embedded_control_modal_embedded_control_modal_component__WEBPACK_IMPORTED_MODULE_2__["EmbeddedControlModalComponent"],
    _booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_3__["BookingModalComponent"]
];
class SharedOverlaysModule {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
/* harmony import */ var _acaprojects_ngx_google_analytics__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acaprojects/ngx-google-analytics */ "./node_modules/@acaprojects/ngx-google-analytics/fesm2015/acaprojects-ngx-google-analytics.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");



































class ApplicationService extends _shared_base_class__WEBPACK_IMPORTED_MODULE_9__["BaseClass"] {
    constructor(_app_ref, _zone, _title, _router, _cache, _settings, _overlay, _analytics, _hotkeys, _systems, _organisation, _users, _bookings, _spaces, _polling) {
        super();
        this._app_ref = _app_ref;
        this._zone = _zone;
        this._title = _title;
        this._router = _router;
        this._cache = _cache;
        this._settings = _settings;
        this._overlay = _overlay;
        this._analytics = _analytics;
        this._hotkeys = _hotkeys;
        this._systems = _systems;
        this._organisation = _organisation;
        this._users = _users;
        this._bookings = _bookings;
        this._spaces = _spaces;
        this._polling = _polling;
        /** List of previous routes for return navigation */
        this._route_trail = [];
        /** Map of state variables for Service */
        this._subjects = {};
        /** Map of observables for state variables */
        this._observers = {};
        this._organisation.parent = this._users.parent = this._bookings.parent = this._spaces.parent = this._polling.parent = this;
        this.set('system', null);
        this.log('APP', `Waiting for Application to stablised...`, undefined, undefined, true);
        this._app_ref.isStable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["first"])((_) => _)).subscribe(() => {
            this.log('APP', `Application has stablised.`, undefined, undefined, true);
            this._zone.run(() => {
                this._stable = true;
                this.setupCache();
                this.waitForSettings();
                this.registerOverlays();
            });
        });
    }
    /** Whether the application has stablised */
    get is_stable() {
        return this._stable || false;
    }
    /** Overlay service */
    get Overlay() {
        return this._overlay;
    }
    /** Analytics service */
    get Analytics() {
        return this._analytics;
    }
    /** Hotkeys service */
    get Hotkeys() {
        return this._hotkeys;
    }
    /** Systems Manager service */
    get Systems() {
        return this._systems;
    }
    /** Organisation service */
    get Organisation() {
        return this._organisation;
    }
    /** Users service */
    get Users() {
        return this._users;
    }
    /** Bookings service */
    get Bookings() {
        return this._bookings;
    }
    /** Spaces service */
    get Spaces() {
        return this._spaces;
    }
    /**
     * Get a setting from the settings service
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    setting(key) {
        return this._settings.get(key);
    }
    /** Name of the application */
    get name() {
        return this._settings.app_name;
    }
    /**
     * Title of the page
     */
    set title(value) {
        const title_suffix = this.setting('app.title');
        this._title.setTitle(`${value ? value + ' | ' : ''}${title_suffix}`);
    }
    /**
     * Title of the page
     */
    get title() {
        return this._title.getTitle();
    }
    /** Root API Endpoint */
    get endpoint() {
        return `/api/staff/`;
    }
    /** Root API Endpoint for engine */
    get engine_endpoint() {
        return `/control/api/`;
    }
    /**
     * Create notification popup
     * @param type CSS Class to add to the notification
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    notify(type, msg, action, on_action) {
        const content = `<div class="icon"><i class="material-icons"></i></div><div class="text">${msg}</div>`;
        this._overlay.notify(content, action, on_action, type);
    }
    /**
     * Create success notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    notifySuccess(msg, action, on_action) {
        this.notify('success', msg, action, on_action);
    }
    /**
     * Create success notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    notifyError(msg, action, on_action) {
        this.notify('error', msg, action, on_action);
    }
    /**
     * Create info notification popup
     * @param msg Message to display on the notificaiton
     * @param action Display text for the callback action
     * @param on_action Callback of action on the notification
     */
    notifyInfo(msg, action, on_action) {
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
    log(type, msg, args, stream = 'debug', force = false) {
        Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_20__["log"])(type, msg, args, stream, force);
    }
    /**
     * Navigate to the given path
     * @param path Path or array of path parts
     * @param query Key value pairs to add to the URL as query parameters
     */
    navigate(path, query) {
        const route = path instanceof Array ? [...path] : [path];
        this._route_trail.push(this._router.url);
        this._router.navigate(route, query ? { queryParams: query } : { preserveFragment: true });
    }
    /**
     * Navigate to the previous location in the route trail
     */
    navigateBack() {
        if (this._route_trail && this._route_trail.length > 0) {
            const path = this._route_trail.pop();
            this._router.navigate([path]);
        }
        else {
            this._router.navigate(['']);
        }
    }
    /**
     * Get the current value of the named property
     * @param name Property name
     */
    get(name) {
        return this._subjects[name] && this._subjects[name] instanceof rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"]
            ? this._subjects[name].getValue()
            : null;
    }
    /**
     * Listen to value change of the named property
     * @param name Property name
     * @param next Callback for value changes
     */
    listen(name, next) {
        return this._observers[name] ? this._observers[name].subscribe(next) : null;
    }
    /**
     * Update the value of the named property
     * @param name Property name
     * @param value New value
     */
    set(name, value) {
        if (!this._subjects[name]) {
            this._subjects[name] = new rxjs__WEBPACK_IMPORTED_MODULE_8__["BehaviorSubject"](value);
            this._observers[name] = this._subjects[name].asObservable();
        }
        else {
            this._subjects[name].next(value);
        }
    }
    /** Wait for settings to be initialised before setting up the application */
    waitForSettings() {
        this.log('SYSTEM', 'Waiting for settings...');
        // Wait until the settings have loaded before initialising
        this._settings.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["first"])(_ => _)).subscribe(() => this.init());
    }
    /**
     * Initialise application services
     */
    init() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.setupComposer().catch(_ => _);
            Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_5__["listenForToken"])().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_19__["first"])(_ => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_5__["hasToken"])())).subscribe(_ => {
                this._users.init();
                // Setup analytics
                this._analytics.enabled = !!this.setting('app.analytics.enabled');
                if (this._analytics.enabled) {
                    this._analytics.load(this.setting('app.analytics.tracking_id'));
                }
                // Add service to window if in debug mode
                if (window.debug) {
                    window.application = this;
                }
                this._hotkeys.listen(['Shift', 'Backslash'], () => {
                    this.navigate('bootstrap', { clear: true });
                });
                this._organisation.init();
                this._bookings.init();
                this._spaces.init();
                this._polling.init();
                this._initialised.next(true);
            });
        });
    }
    /**
     * Initialise the composer library comms
     */
    setupComposer() {
        this.log('SYSTEM', 'Setting up composer...');
        // Get application settings
        const settings = this._settings.get('composer') || {};
        const protocol = settings.protocol || location.protocol;
        const host = settings.domain || location.hostname;
        const port = settings.port || location.port;
        const url = settings.use_domain ? `${protocol}//${host}:${port}` : location.origin;
        const route = host.includes('localhost') && port === '4200' ? '' : settings.route || '';
        const mock = this._settings.get('mock') ||
            location.href.includes('mock=true') ||
            localStorage.getItem('mock') === 'true';
        // Generate configuration object
        const config = {
            auth_type: 'auth_code',
            scope: 'public',
            host: `${host}:${port}`,
            auth_uri: `${url}/auth/oauth/authorize`,
            token_uri: `${url}/auth/token`,
            redirect_uri: `${location.origin}${route}/oauth-resp.html`,
            handle_login: !settings.local_login,
            use_iframe: true,
            token_header: true,
            mock
        };
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_5__["setup"])(config);
        this.log('SYSTEM', 'Finsihed setting up composer.');
        return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_5__["setup"])(config);
    }
    /**
     * Setup handler for cache change events
     */
    setupCache() {
        this.unsub('app_stable');
        this.log('CACHE', `Initialising cache...`);
        if (this._cache.isEnabled) {
            this.log('CACHE', `Listening to cache events...`);
            this._cache.activateUpdate();
            this.subscription('cache_update', this._cache.available.subscribe((event) => {
                const current = `current version is ${event.current.hash}`;
                const available = `available version is ${event.available.hash}`;
                this.log('CACHE', `Update available: ${current} ${available}`);
                this.activateUpdate();
            }));
            setInterval(() => {
                this.log('CACHE', `Checking for updates...`);
                this._cache.checkForUpdate();
            }, 5 * 60 * 1000);
        }
    }
    /**
     * Update the cache and reload the page
     */
    activateUpdate() {
        if (this._cache.isEnabled) {
            this.log('CACHE', `Activating changes to the cache...`);
            this._cache.activateUpdate().then(() => location.reload(true));
        }
    }
    /**
     * Pre-register available overlays
     */
    registerOverlays() {
        if (_shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_11__["OVERLAY_REGISTER"]) {
            for (const overlay of _shared_globals_overlay_register__WEBPACK_IMPORTED_MODULE_11__["OVERLAY_REGISTER"]) {
                this._overlay.register(overlay.id, overlay.config);
            }
        }
    }
}
ApplicationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ factory: function ApplicationService_Factory() { return new ApplicationService(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ApplicationRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_service_worker__WEBPACK_IMPORTED_MODULE_4__["SwUpdate"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_settings_service__WEBPACK_IMPORTED_MODULE_10__["SettingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_6__["AOverlayService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_acaprojects_ngx_google_analytics__WEBPACK_IMPORTED_MODULE_7__["GoogleAnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_hotkeys_service__WEBPACK_IMPORTED_MODULE_12__["HotkeysService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_systems_manager_systems_manager_service__WEBPACK_IMPORTED_MODULE_17__["SystemsManagerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_13__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_users_users_service__WEBPACK_IMPORTED_MODULE_14__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_bookings_bookings_service__WEBPACK_IMPORTED_MODULE_15__["BookingsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_16__["SpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_data_polling_polling_service__WEBPACK_IMPORTED_MODULE_18__["PollingService"])); }, token: ApplicationService, providedIn: "root" });


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
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_base_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/base.class */ "./src/app/shared/base.class.ts");



class BaseDataClass extends _shared_base_class__WEBPACK_IMPORTED_MODULE_2__["BaseClass"] {
    constructor(service, raw_data) {
        super();
        this.service = service;
        /** Subject for change events to the class object */
        this.changeEvents = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.id = raw_data.id || raw_data.zone_id || raw_data.email || `${Math.floor(Math.random() * 9999999999)}`;
        this.name = raw_data.name;
        this.email = (raw_data.email || '').toLowerCase();
        this._form_metadata = raw_data.form_metadata || {};
    }
    /** Get form field metadata for the object */
    get form_fields() {
        if (!this._form_fields) {
            this._form_fields = this.initialiseFormFields();
        }
        return this._form_fields;
    }
    /** Whether form fields are valid */
    get valid() {
        return this._form_fields ? this._form_fields.reduce((a, i) => a && i.isValid(), true) : false;
    }
    /** Whether the form has changes */
    get changes() {
        return this.formChanges().length > 0;
    }
    /**
     * Reset the values on the form to their initial state
     */
    resetForm() {
        if (this._form_fields) {
            for (const field of this._form_fields) {
                field.setValue(this[field.key]);
            }
        }
    }
    /**
     * Get a list of the field names that have changed values
     */
    formChanges() {
        const changed = [];
        if (this._form_fields) {
            for (const field of this._form_fields) {
                if (field.getValue() !== this[field.key]) {
                    changed.push(field.key);
                }
            }
        }
        return changed;
    }
    /**
     * Save form changes to server
     */
    save() {
        if (this.changes && this.service) {
            this._form_fields.forEach(i => i.showErrors(true));
            if (this.valid) {
                const form = this.formValues();
                return this.id
                    ? this.service.update(this.id, form)
                    : this.service.add(form);
            }
        }
    }
    /**
     * Delete this item from the server
     */
    delete() {
        if (this.id) {
            return this.service.delete(this.id);
        }
    }
    /**
     * Run task for this item on the service
     * @param task_name Name of the task
     * @param parameters Parameters to pass to the task request
     */
    runTask(task_name, parameters) {
        if (this.id) {
            return this.service.task(this.id, task_name, parameters);
        }
    }
    /**
     * Get a map of the field values
     */
    toJSON() {
        if (!this._form_fields) {
            this._form_fields = this.initialiseFormFields();
        }
        const json = this.formValues();
        json.id = this.id;
        delete json.changed_fields;
        return json;
    }
    /**
     * Emits change event
     * @param type Type of change that has occurred
     * @param metadata Supporting metadata for the event
     */
    emit(type, metadata) {
        this.changeEvents.next({ type, metadata });
    }
    /**
     * Make a copy of this object
     */
    clone() {
        return new BaseDataClass(this.service, this);
    }
    /**
     * Make a copy of this object without identification data
     */
    duplicate() {
        return new BaseDataClass(this.service, Object.assign(Object.assign({}, this), { id: null, email: null }));
    }
    /**
     * Get the mapped values of the form fields
     */
    formValues(field_list = this._form_fields, changes = true) {
        const values = {};
        for (const field of field_list) {
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
    }
    /**
     * Initialise the form field metadata for the field
     */
    initialiseFormFields() {
        const edit = !!this.id;
        const fields = [
            new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["ADynamicFormField"]({
                key: 'name',
                type: 'input',
                value: this.name
            }),
            new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["ADynamicFormField"]({
                key: 'email',
                type: 'input',
                value: this.email,
                required: true,
                attributes: { type: 'email' }
            })
        ];
        return fields;
    }
}


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
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _base_api_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-api.class */ "./src/app/services/data/base-api.class.ts");
/* harmony import */ var _shared_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/base.class */ "./src/app/shared/base.class.ts");
/* harmony import */ var _shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/utilities/api.utilities */ "./src/app/shared/utilities/api.utilities.ts");





class BaseAPIService extends _shared_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor() {
        super();
        /** Map of state variables for Service */
        this._subjects = {};
        /** Map of observables for state variables */
        this._observers = {};
        /** Map of poll subscribers for API endpoints */
        this._subscribers = {};
        /** Map of promises for Service */
        this._promises = {};
        /** Comparison function for service items */
        this._compare = (a, b) => a === b || a.id === b.id;
        /** Default filter function for list method */
        this._list_filter = (a) => !!a;
        this._name = 'Base';
        this._api_route = 'base';
        this.set('list', []);
    }
    /**
     * Initailise service
     */
    init() {
        this.load().then(_ => this._initialised.next(true));
    }
    /**
     * Get API route for the service
     * @param engine Whether endpoint is using the application API or engine API
     */
    route(engine = false) {
        const endpoint = this.parent ? (engine ? this.parent.engine_endpoint : this.parent.endpoint) : '/api/';
        return `${endpoint}${this._api_route}`;
    }
    /** API Route of the service */
    get api_route() {
        return this._api_route;
    }
    /**
     * Get a service related setting from the settings service
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    setting(key) {
        return this.parent ? this.parent.setting(`app.${this._name.toLowerCase()}.${key}`) : null;
    }
    /**
     * Get the current value of the named property
     * @param name Property name
     */
    get(name) {
        return this._subjects[name] && this._subjects[name] instanceof rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]
            ? this._subjects[name].getValue()
            : null;
    }
    /**
     * Listen to value change of the named property
     * @param name Property name
     * @param next Callback for value changes
     */
    listen(name) {
        return this._observers[name] ? this._observers[name] : null;
    }
    /**
     * Update the value of the named property
     * @param name Property name
     * @param value New value
     */
    set(name, value) {
        if (!this._subjects[name]) {
            this._subjects[name] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](value);
            this._observers[name] = this._subjects[name].asObservable();
        }
        else {
            this._subjects[name].next(value);
        }
    }
    /**
     * Get list of loaded items
     * @param filterFn Function for filtering the list
     */
    list(filterFn = this._list_filter) {
        const list = this.get('list') || [];
        return list.reduce((a, i) => { if (filterFn(i)) {
            a.push(i);
        } return a; }, []);
    }
    /**
     * Get item with the given id from the loaded items
     * @param id ID of the item
     */
    item(id) {
        const list = this.get('list') || [];
        return list.find(i => i.id === id || i.email === id);
    }
    /**
     * Query the index of the API route associated with this service
     * @param query_params Map of query paramaters to add to the request URL
     */
    query(query_params = { update_list: true }) {
        let engine = false;
        let cache = 1000;
        if (query_params) {
            engine = !!query_params.engine;
            delete query_params.engine;
            cache = query_params.cache || 1000;
            delete query_params.cache;
        }
        const query = Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params);
        const key = `query|${query}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const url = `${this.route(engine)}${query ? '?' + query : ''}`;
                let result = [];
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["get"])(url).subscribe((d) => {
                    result = d && d instanceof Array
                        ? d.map(i => this.process(i))
                        : (d && !(d instanceof Array) && d.results
                            ? d.results
                            : []);
                }, e => {
                    reject(e);
                    this._promises[key] = null;
                }, () => {
                    if ((!query || (query_params && query_params.update_list)) && result.length > 0 && result[0] instanceof _base_api_class__WEBPACK_IMPORTED_MODULE_2__["BaseDataClass"]) {
                        this.set('list', this.updateList(this.get('list'), result));
                    }
                    resolve(result);
                    this.timeout(key, () => (this._promises[key] = null), cache);
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
    show(id, query_params = {}) {
        let engine = false;
        if (query_params) {
            engine = !!query_params.engine;
            delete query_params.engine;
        }
        const query = Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params);
        const key = `show|${id}|${query}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const url = `${this.route(engine)}/${id}${query ? '?' + query : ''}`;
                let result = null;
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["get"])(url).subscribe(d => result = this.process(d), e => {
                    reject(e);
                    this._promises[key] = null;
                }, () => {
                    resolve(result);
                    this.timeout(key, () => (this._promises[key] = null), 1000);
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
    add(form_data, query_params = {}) {
        if (!this._promises.new_item) {
            this._promises.new_item = new Promise((resolve, reject) => {
                const query = Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params);
                const url = `${this.route(query_params.engine)}${query ? '?' + query : ''}`;
                let result = null;
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["post"])(url, form_data).subscribe(d => (result = this.process(d)), e => {
                    reject(e);
                    this.analyticsEvent(`create-${this._name.toLowerCase()}-failed`);
                    this._promises.new_item = null;
                }, () => {
                    resolve(result);
                    this.set('list', this.updateList(this.get('list'), [result]));
                    this.analyticsEvent(`create-${this._name.toLowerCase()}-success`);
                    this._promises.new_item = null;
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
    task(id, task_name, form_data = {}) {
        const query = Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(form_data);
        const key = `task|${id}|${task_name}|${query}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const post_data = Object.assign(Object.assign({}, form_data), { id, _task: task_name });
                const url = `${this.route(form_data.engine)}/${id}/${task_name}`;
                let result = null;
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["post"])(url, post_data).subscribe(d => result = d, e => {
                    reject(e);
                    this.analyticsEvent(`${this._name.toLowerCase()}-task-${task_name}-failed`, id);
                    this._promises[key] = null;
                }, () => {
                    resolve(result);
                    this.analyticsEvent(`${this._name.toLowerCase()}-task-${task_name}-success`, id);
                    this.timeout(key, () => this._promises[key] = null, 1000);
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
    poll(id, query_params = {}, delay = 5000) {
        const key = `poll|${id || ''}|${Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params) || ''}`;
        this.stopPoll(id, query_params);
        this._subjects[key] = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this._observers[key] = this._subjects[key].asObservable();
        const sub = this._subjects[key];
        const query = Object.assign(Object.assign({}, (query_params || {})), { _poll: true });
        if (id) {
            this.show(id, query).then((d) => sub.next(d), e => sub.error(e));
            this.interval(key, () => {
                this.show(id, query).then((d) => sub.next(d), e => sub.error(e));
            }, delay);
        }
        else {
            this.query(query).then((d) => sub.next(d), e => sub.error(e));
            this.interval(key, () => {
                this.query(query).then((d) => sub.next(d), e => sub.error(e));
            }, delay);
        }
        return this._observers[key];
    }
    /**
     * Destroy poller
     * @param id
     * @param query_params
     */
    stopPoll(id, query_params = {}) {
        const key = `poll|${id || ''}|${Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params) || ''}`;
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
    update(id, form_data, query_params = {}) {
        const key = `update|${id}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const query = Object(_shared_utilities_api_utilities__WEBPACK_IMPORTED_MODULE_4__["toQueryString"])(query_params);
                const url = `${this.route(query_params.engine)}/${id}${query ? '?' + query : ''}`;
                let result = null;
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["put"])(url, form_data).subscribe(d => (result = this.process(d)), e => {
                    reject(e);
                    this.analyticsEvent(`update-${this._name.toLowerCase()}-failed`, id);
                    this._promises[key] = null;
                }, () => {
                    resolve(result);
                    this.set('list', this.updateList(this.removeItem(this.get('list'), { id }), [result]));
                    this.analyticsEvent(`update-${this._name.toLowerCase()}-success`, id);
                    this._promises[key] = null;
                });
            });
        }
        return this._promises[key];
    }
    /**
     * Make delete request for the given item
     * @param id ID of item
     */
    delete(id) {
        const key = `delete|${id}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const url = `${this.route()}/${id}`;
                Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["del"])(url).subscribe(_ => null, e => reject(e), () => {
                    this.set('list', this.removeItem(this.get('list'), { id }));
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
    addFrom(id, data, type = 'other') {
        const new_item = this.process(data);
        this.set('list', this.updateList(this.get('list'), [new_item]));
        return new_item.id;
    }
    /**
     * Remove items with the given IDs from the list
     * @param id ID of the item/or service remove the list of items
     * @param remove_ids List of item IDs to remove
     * @param type Remover type
     */
    removeFrom(id, remove_ids, type = 'other') {
        const list = this.get('list');
        for (const item_id of remove_ids) {
            const index = list.findIndex(item => item.id === item_id);
            if (index >= 0) {
                list.splice(index, 1);
            }
        }
        this.set('list', list);
    }
    /**
     * Load initial data for the service
     */
    load() {
        return new Promise((resolve) => {
            resolve();
        });
    }
    /**
     * Post analytics event for this service
     * @param action Name of the action to post
     */
    analyticsEvent(action, label) {
        if (this.parent && this.parent.Analytics) {
            this.parent.Analytics.event(this._name, `${this.parent.name.toLowerCase()}-${action}`, label);
        }
    }
    /**
     * Convert raw API data into a valid API Object
     * @param raw_item Raw API data
     */
    process(raw_item) {
        return raw_item;
    }
    /**
     * Update recorded list of items
     * @param old_list Old list of items
     * @param list List of updated items
     * @param compareFn Function to compare items to remove duplicates
     */
    updateList(old_list, list, compareFn = this._compare) {
        if (!list || list.length === 0) {
            return old_list;
        }
        const new_list = [];
        const mixed_list = [...list, ...old_list];
        if (!compareFn) {
            compareFn = this._compare;
        }
        for (const item of mixed_list) {
            const found = new_list.find(i => compareFn(i, item));
            if (!found) {
                new_list.push(item);
            }
        }
        return new_list;
    }
    /**
     * Remove the given item from the given list
     * @param list List of items
     * @param item Item to remove
     * @param compareFn Function to compare items
     */
    removeItem(list, item, compareFn) {
        const new_list = [];
        if (!compareFn) {
            compareFn = this._compare;
        }
        list.forEach(i => compareFn(item, i) ? null : new_list.push(i));
        return new_list;
    }
}


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _base_api_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base-api.class */ "./src/app/services/data/base-api.class.ts");
/* harmony import */ var _users_user_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users/user.class */ "./src/app/services/data/users/user.class.ts");
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var _shared_globals_form_fields__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/globals/form-fields */ "./src/app/shared/globals/form-fields.ts");
/* harmony import */ var _shared_utilities_formatting_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/utilities/formatting.utilities */ "./src/app/shared/utilities/formatting.utilities.ts");
/* harmony import */ var _shared_utilities_validation_utilities__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/utilities/validation.utilities */ "./src/app/shared/utilities/validation.utilities.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);










class Booking extends _base_api_class__WEBPACK_IMPORTED_MODULE_3__["BaseDataClass"] {
    constructor(service, raw_data = {}) {
        var _a, _b;
        super(service, raw_data);
        this.service = service;
        /** Cached display strings */
        this._display = {};
        const u_service = service && service.parent && service.parent.Users;
        this.icaluid = raw_data.icaluid || this.id;
        this.title = raw_data.title || raw_data.subject || raw_data.Subject;
        const start = dayjs__WEBPACK_IMPORTED_MODULE_9__(raw_data.date || raw_data.start || raw_data.start_epoch * 1000 || raw_data.Start);
        this.date = start.valueOf();
        this.duration = raw_data.duration || dayjs__WEBPACK_IMPORTED_MODULE_9__(raw_data.end || raw_data.end_epoch * 1000 || raw_data.End).diff(start, 'm');
        this.body = raw_data.body || raw_data.description;
        this.notes = raw_data.notes;
        this.type = raw_data.type || (raw_data.visitors ? 'external' : null) || 'internal';
        this.catering = raw_data.catering;
        this._attendees = (raw_data.attendees || raw_data._attendees || []).map(i => (u_service === null || u_service === void 0 ? void 0 : u_service.item(i.email)) || new _users_user_class__WEBPACK_IMPORTED_MODULE_4__["User"](u_service, i));
        const organiser = raw_data.organiser || raw_data.organizer || { email: `${raw_data.owner}@fake.org` };
        if (raw_data.owner) {
            (_a = this.service) === null || _a === void 0 ? void 0 : _a.parent.Users.addFrom('booking', { name: raw_data.owner, email: `${raw_data.owner}@fake.org` });
        }
        this._organiser = organiser.email || raw_data._organiser;
        this._location = raw_data.location || raw_data._location;
        this._display = {
            date: start.format('DD MMM YYYY'),
            time: `${start.format('h:mma')} - ${dayjs__WEBPACK_IMPORTED_MODULE_9__(start)
                .add(this.duration, 'm')
                .format('h:mma')}`,
            start: start.format('h:mma'),
            startDate: dayjs__WEBPACK_IMPORTED_MODULE_9__(start)
                .format('MMMM Do'),
            end: dayjs__WEBPACK_IMPORTED_MODULE_9__(start)
                .add(this.duration, 'm')
                .format('h:mma'),
            endDate: dayjs__WEBPACK_IMPORTED_MODULE_9__(start)
                .add(this.duration, 'm')
                .format('MMMM Do'),
            duration: Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_5__["humaniseDuration"])(this.duration)
        };
        this._space_list = raw_data.room_ids || raw_data._space_list;
        // Add attendees and organiser to service data
        if (((_b = this.service) === null || _b === void 0 ? void 0 : _b.parent) && this.service.parent.Users) {
            if (raw_data.attendees) {
                raw_data.attendees.forEach(u => {
                    if (!this.service.parent.Users.item(u.email)) {
                        this.service.parent.Users.addFrom(this.id, u, 'class');
                    }
                });
            }
            if (organiser) {
                if (!this.service.parent.Users.item(organiser.email)) {
                    this.service.parent.Users.addFrom(this.id, organiser, 'class');
                }
            }
        }
    }
    /** List of attendees to the meeting */
    get attendees() {
        return this.service && this.service.parent && this.service.parent.Users
            ? this.service.parent.Users.list((user) => this._attendees.indexOf(user.id) >= 0)
            : [];
    }
    /** Host or organiser of the meeting */
    get organiser() {
        return this.service && this.service.parent && this.service.parent.Users && this._organiser
            ? this.service.parent.Users.item(this._organiser) : null;
    }
    /** Status of the booking */
    get status() {
        const now = dayjs__WEBPACK_IMPORTED_MODULE_9__();
        const date = dayjs__WEBPACK_IMPORTED_MODULE_9__(this.date);
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
    }
    /** Get the first space from the space list */
    get space() {
        return this.service && this.service.parent && this.service.parent.Spaces && this._space_list && this._space_list.length > 0
            ? this.service.parent.Spaces.item(this._space_list[0]) : null;
    }
    /** Spaces associated with the booking */
    get space_list() {
        return this.service && this.service.parent && this.service.parent.Spaces
            ? this.service.parent.Spaces.list((space) => this._space_list.indexOf(space.id) >= 0)
            : [];
    }
    /** Display value for the date */
    get date_string() {
        return this._display.date;
    }
    /** Display valuie for the start and end times of the booking */
    get time_period() {
        return this._display.time;
    }
    /** Display value for the start time of the booking */
    get start_time() {
        return this._display.start;
    }
    get start_date() {
        return this._display.startDate;
    }
    /** Display value for the end time of the booking */
    get end_time() {
        return this._display.end;
    }
    get end_date() {
        return this._display.endDate;
    }
    /** Display value for the duration of the booking */
    get length_string() {
        return this._display.duration;
    }
    /** Display value for the location of the booking */
    get location() {
        return this._display.space_names || this._location || 'No location set';
    }
    /** Display value for the level of the first space in the booking */
    get level() {
        return this._display.level;
    }
    /**
     * Create form fields for the object
     */
    initialiseFormFields() {
        const form_fields = [];
        const form_settings = this.service.setting('fields') || [];
        const user = this.service.parent.Users.current;
        const actions = {
        // space: () => this.setSpace(),
        // recurrence: () => this.setRecurrence(),
        // conferencing: (v?) => this.setConferencing(v)
        };
        const validators = {
            date: [_shared_utilities_validation_utilities__WEBPACK_IMPORTED_MODULE_8__["validateDate"]],
            duration: [Object(_shared_utilities_validation_utilities__WEBPACK_IMPORTED_MODULE_8__["buildValidateDuration"])()],
            attendees: [Object(_shared_utilities_validation_utilities__WEBPACK_IMPORTED_MODULE_8__["buildValidateAttendees"])(user, this.service.setting('min_attendees'))],
            terms: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].requiredTrue]
        };
        const formatters = {
            attendees: Object(_shared_utilities_formatting_utilities__WEBPACK_IMPORTED_MODULE_7__["formatAttendeesWithHost"])(user),
            date: _angular_common__WEBPACK_IMPORTED_MODULE_0__["formatDate"],
            space: _shared_utilities_formatting_utilities__WEBPACK_IMPORTED_MODULE_7__["formatSpaces"],
            recurrence: _shared_utilities_formatting_utilities__WEBPACK_IMPORTED_MODULE_7__["formatRecurrence"]
        };
        const custom_elements = _shared_globals_form_fields__WEBPACK_IMPORTED_MODULE_6__["FORM_FIELDS"];
        const defaults = {};
        const process_field = field => {
            const f = {
                key: field.key,
                label: field.label,
                icon: field.icon,
                type: field.control_type || field.type,
                value: this[field.key] || defaults[field.key] || '',
                action: field.action || actions[field.key],
                format: field.format || formatters[field.key],
                content: field.content || custom_elements[field.key],
                required: field.required,
                validators: validators[field.key],
                references: field.references || field.refs,
                hide: field.hide,
                metadata: Object.assign(Object.assign(Object.assign({}, field.metadata), this._form_metadata), { service: this.service }),
                attributes: { flex: field.flex },
                children: field.children ? field.children.map(i => process_field(i)) : null
            };
            return new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__["ADynamicFormField"](f);
        };
        for (const field of form_settings) {
            if (field.key) {
                form_fields.push(process_field(field));
            }
        }
        return form_fields;
    }
    /**
     * Make a copy of this object
     */
    clone() {
        return new Booking(this.service, this);
    }
    /**
     * Make a copy of this object without identification data
     */
    duplicate() {
        return new Booking(this.service, Object.assign(Object.assign({}, this), { id: null, email: null, icaluid: null }));
    }
}


/***/ }),

/***/ "./src/app/services/data/bookings/booking.utilities.ts":
/*!*************************************************************!*\
  !*** ./src/app/services/data/bookings/booking.utilities.ts ***!
  \*************************************************************/
/*! exports provided: mockDate, setMockBookingStartDatetime, generateMockBooking, getFreeBookingSlots, getNextFreeBookingSlot, rulesForSpace, durationGreaterThanOrEqual, stringToMinutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockDate", function() { return mockDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setMockBookingStartDatetime", function() { return setMockBookingStartDatetime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateMockBooking", function() { return generateMockBooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFreeBookingSlots", function() { return getFreeBookingSlots; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getNextFreeBookingSlot", function() { return getNextFreeBookingSlot; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rulesForSpace", function() { return rulesForSpace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "durationGreaterThanOrEqual", function() { return durationGreaterThanOrEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stringToMinutes", function() { return stringToMinutes; });
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var _users_user_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users/user.utilities */ "./src/app/services/data/users/user.utilities.ts");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mockdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! mockdate */ "./node_modules/mockdate/lib/mockdate.js");
/* harmony import */ var mockdate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mockdate__WEBPACK_IMPORTED_MODULE_4__);





const MINUTE = 1;
const HOUR = 60;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const DURATION_MAP = {
    month: MONTH,
    months: MONTH,
    week: WEEK,
    weeks: WEEK,
    day: DAY,
    days: DAY,
    hour: HOUR,
    hours: HOUR,
    minute: MINUTE,
    minutes: MINUTE,
};
/**
 * August 13, 2020 at 7:22:12 UTC
 */
const initialTime = 1597346532 * 1000;
const mockDate = () => mockdate__WEBPACK_IMPORTED_MODULE_4___default.a.set(initialTime);
let BOOKING_COUNT = 0;
let BOOKING_DATE = dayjs__WEBPACK_IMPORTED_MODULE_3__().minute(0).startOf('m');
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
 * @param seed - faker seed to remain stable.
 */
function generateMockBooking(id, seed) {
    if (seed) {
        faker__WEBPACK_IMPORTED_MODULE_2__["seed"](seed);
    }
    if (!id) {
        id = `booking-${BOOKING_COUNT++}`;
    }
    const offset = seed ? 0 : Math.floor(Math.random() * 4);
    const localDate = BOOKING_DATE.add(offset + 15, 'm');
    const start = localDate.valueOf();
    const duration = offset + 30;
    return {
        id,
        icaluid: seed ? 0 : Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_0__["padZero"])(Math.floor(Math.random() * 99999999), 8),
        title: `${faker__WEBPACK_IMPORTED_MODULE_2__["commerce"].productName()} Meeting`,
        attendees: Array(seed ? 1 : Math.floor(Math.random() * 5 + 2))
            .fill(0)
            .map(i => Object(_users_user_utilities__WEBPACK_IMPORTED_MODULE_1__["generateMockUser"])(undefined, undefined, undefined, seed)),
        organiser: Object(_users_user_utilities__WEBPACK_IMPORTED_MODULE_1__["generateMockUser"])(undefined, undefined, undefined, seed),
        date: start,
        duration,
        description: faker__WEBPACK_IMPORTED_MODULE_2__["lorem"].paragraph(),
        notes: faker__WEBPACK_IMPORTED_MODULE_2__["lorem"].paragraph(),
        location: faker__WEBPACK_IMPORTED_MODULE_2__["address"].city(),
        catering: seed ? false : Math.floor(Math.random() * 34567) % 3 === 0
    };
}
/**
 * Generate a list of free time slots between the given bookings
 * @param list List of bookings to find slots between
 * @param min_size Minimum length of a free slot in minutes
 */
function getFreeBookingSlots(list, min_size = 30) {
    if (!list) {
        return [{ start: 0, end: dayjs__WEBPACK_IMPORTED_MODULE_3__().startOf('m').valueOf() * 10 }];
    }
    const slots = [];
    let start = dayjs__WEBPACK_IMPORTED_MODULE_3__(0);
    list.sort((a, b) => a.date - b.date);
    for (const booking of list) {
        const bkn_start = dayjs__WEBPACK_IMPORTED_MODULE_3__(booking.date);
        const bkn_end = bkn_start.add(booking.duration, 'm');
        if (bkn_start.isAfter(start)) {
            const diff = bkn_start.diff(start, 'm');
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
function getNextFreeBookingSlot(list, date = dayjs__WEBPACK_IMPORTED_MODULE_3__().valueOf(), min_size = 30) {
    const slots = getFreeBookingSlots(list, min_size);
    const time = dayjs__WEBPACK_IMPORTED_MODULE_3__(date).startOf('m').second(1);
    for (const block of slots) {
        const start = dayjs__WEBPACK_IMPORTED_MODULE_3__(block.start).startOf('m');
        const end = dayjs__WEBPACK_IMPORTED_MODULE_3__(block.end).startOf('m');
        if (start.isAfter(time, 's')) {
            return block;
        }
        else if (time.isBefore(end, 's')) {
            const duration = end.diff(time, 'm');
            if (duration >= min_size) {
                return block;
            }
        }
    }
    return slots[slots.length - 1];
}
/**
 * Get booking rules for the given user and space
 * @param user User to determine applicable rules
 * @param space Space to get rules for
 * @param time Booking start time in ms since UTC epoch
 * @param rules List of booking rules for the building
 */
function rulesForSpace(options) {
    if (!options) {
        throw Error('Options are needed to check for rule matches');
    }
    const space_rules_for_user = {
        auto_approve: true,
        hide: true,
    };
    let match = false;
    /* istanbul ignore else */
    if (options.space) {
        for (const type in options.rules) {
            if (options.rules.hasOwnProperty(type) &&
                options.rules[type] instanceof Array &&
                options.space.zones.find((zone) => zone === type)) {
                for (const rule_block of options.rules[type]) {
                    /* istanbul ignore else */
                    if (checkRules({
                        user: options.user,
                        space: options.space,
                        time: options.time,
                        recurr_end: options.recurr_end,
                        duration: options.duration,
                        rules: rule_block.conditions,
                    })) {
                        const ruleset = rule_block.rules;
                        const conditions = rule_block.conditions;
                        space_rules_for_user.hide = false;
                        /* istanbul ignore else */
                        if (conditions.max_length) {
                            space_rules_for_user.max_length = stringToMinutes(conditions.max_length);
                        }
                        /* istanbul ignore else */
                        if (conditions.min_length) {
                            space_rules_for_user.min_length = stringToMinutes(conditions.min_length);
                        }
                        // NOTE: use max_length in conditions instead of book_length in rules
                        // if (ruleset.book_length) {
                        //     space_rules_for_user.max_length = stringToMinutes(ruleset.book_length as string);
                        // }
                        /* istanbul ignore else */
                        if (ruleset.auto_approve !== undefined) {
                            space_rules_for_user.auto_approve = ruleset.auto_approve;
                        }
                        match = true;
                        break;
                    }
                }
            }
            /* istanbul ignore else */
            if (!space_rules_for_user.hide) {
                break;
            }
        }
    }
    if (!match) {
        space_rules_for_user.hide = true;
    }
    return space_rules_for_user;
}
/**
 * Check if user matches the given ruleset
 * @param options
 */
function checkRules(options) {
    /* istanbul ignore else */
    if (options.rules) {
        const time = dayjs__WEBPACK_IMPORTED_MODULE_3__(options.time);
        const recurr = options.recurr_end ? dayjs__WEBPACK_IMPORTED_MODULE_3__(options.recurr_end) : dayjs__WEBPACK_IMPORTED_MODULE_3__();
        const count = Object.keys(options.rules).length;
        let matches = 0;
        Object.keys(options.rules).forEach((key) => {
            let counter = 0;
            const condition = options.rules[key] instanceof Array
                ? options.rules[key]
                : [options.rules[key]];
            switch (key) {
                case 'groups':
                    /* istanbul ignore else */
                    if (options.user && options.user.groups) {
                        counter = 0;
                        condition.forEach((i) => options.user.groups.find((j) => j === i) ? counter++ : null);
                        /* istanbul ignore else */
                        if (counter > 0) {
                            matches++;
                        }
                    }
                    break;
                case 'locations':
                    /* istanbul ignore else */
                    if (options.user && options.user.location) {
                        counter = 0;
                        condition.forEach((i) => (options.user.last_location.name || '').indexOf(i) >= 0
                            ? counter++
                            : null);
                        /* istanbul ignore else */
                        if (counter >= options.rules[key].length) {
                            matches++;
                        }
                    }
                    break;
                case 'is_before':
                    /* istanbul ignore else */
                    if (options.time) {
                        const duration = stringToMinutes(condition[0]);
                        const check = dayjs__WEBPACK_IMPORTED_MODULE_3__().add(duration, 'm');
                        let match = time.isBefore(check, 'm');
                        /* istanbul ignore else */
                        if (recurr) {
                            match = match && recurr.isBefore(check, 'm');
                        }
                        matches += match ? 1 : 0;
                    }
                    break;
                case 'is_after':
                    /* istanbul ignore else */
                    if (options.time) {
                        const duration = stringToMinutes(condition[0]);
                        const check = dayjs__WEBPACK_IMPORTED_MODULE_3__().add(duration, 'm');
                        time.isAfter(check, 'm') ? matches++ : '';
                    }
                    break;
                case 'min_length':
                    /* istanbul ignore else */
                    if (options.duration) {
                        matches += durationGreaterThanOrEqual(options.duration, condition[0]) ? 1 : 0;
                    }
                    break;
                case 'max_length':
                    /* istanbul ignore else */
                    if (options.duration) {
                        durationGreaterThanOrEqual(condition[0], options.duration) ? matches++ : '';
                    }
                    break;
            }
        });
        return matches >= count;
    }
    return false;
}
/**
 * Whether the first input is greater than the last. Converts duration strings into minutes
 * @param duration_1 First input can be a number in minutes or a duration string e.g. `1 hour`
 * @param duration_2 Second input can be a number in minutes or a duration string e.g. `30 minutes`
 */
function durationGreaterThanOrEqual(duration_1, duration_2) {
    const first = typeof duration_1 === 'string' ? stringToMinutes(duration_1) : duration_1;
    const second = typeof duration_2 === 'string' ? stringToMinutes(duration_2) : duration_2;
    return first >= second;
}
/**
 * Conver time string into minutes
 * @param str timestring e.g. `'1 day'`, `'15 minutes'`, `'2 weeks'`
 */
function stringToMinutes(str) {
    const parts = str.split(' ');
    return +parts[0] * DURATION_MAP[parts[1]];
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
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.service */ "./src/app/services/data/base.service.ts");
/* harmony import */ var _booking_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.class */ "./src/app/services/data/bookings/booking.class.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _service_manager_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-manager.class */ "./src/app/services/data/service-manager.class.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





class BookingsService extends _base_service__WEBPACK_IMPORTED_MODULE_0__["BaseAPIService"] {
    constructor() {
        super();
        _service_manager_class__WEBPACK_IMPORTED_MODULE_3__["ServiceManager"].setService(_booking_class__WEBPACK_IMPORTED_MODULE_1__["Booking"], this);
        this._name = 'Bookings';
        this._api_route = 'bookings';
        this._compare = (a, b) => !a.id.localeCompare(b.id) || !a.icaluid.localeCompare(b.icaluid);
    }
    /**
     * Open form modal for creating new bookings
     * @param space Space to make booking in
     * @param date Default date on the form
     */
    new(options) {
        if (options.space) {
            this.parent.Overlay.open('booking', {
                config: 'modal',
                data: options
            }, (event) => {
                const booking = event.data.booking.toJSON();
                this.timeout('book', () => {
                    this.create(options.space, booking)
                        .then(() => {
                        this.parent.notifySuccess('Booking successfully created');
                        event.data.close ? event.data.close() : '';
                    }).catch(_ => {
                        this.parent.notifyError(`Error creating meeting. ${_}`);
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
    create(space, booking) {
        return new Promise((resolve, reject) => {
            if (space) {
                const request = {
                    title: booking.title,
                    count: {
                        staff: booking.num_staff ? +booking.num_staff : 0,
                        partners: booking.num_partners ? +booking.num_partners : 0,
                    },
                    staff_id: '',
                    start: booking.date.valueOf(),
                    end: dayjs__WEBPACK_IMPORTED_MODULE_2__(booking.date).add(booking.period.duration, 'm').valueOf(),
                    host: booking.host || booking.user || { name: 'Panel User' }
                };
                const module = this.parent.Systems.get(space.id, 'Bookings');
                if (request && module) {
                    module.execute('create_meeting', [request]).then(() => {
                        this.analyticsEvent('create-success');
                        resolve();
                    }, (err) => {
                        this.analyticsEvent('create-failed');
                        reject(`Error making booking: ${err}`);
                    });
                }
                else {
                    reject(`No Bookings module found for space ${space.id}`);
                }
            }
            else {
                reject('No space set for booking');
            }
        });
    }
    process(raw_data) {
        return new _booking_class__WEBPACK_IMPORTED_MODULE_1__["Booking"](this, raw_data);
    }
}
BookingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function BookingsService_Factory() { return new BookingsService(); }, token: BookingsService, providedIn: "root" });


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
/* harmony import */ var _level_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./level.class */ "./src/app/services/data/organisation/level.class.ts");




class Building extends _base_api_class__WEBPACK_IMPORTED_MODULE_1__["BaseDataClass"] {
    constructor(service, raw_data) {
        super(service, raw_data);
        this.service = service;
        const settings = raw_data.settings || {};
        const disc_info = settings.discovery_info || settings;
        this.zone_id = raw_data.zone_id || raw_data.zone;
        this._extras = (raw_data.extras || []).map(i => ({ id: i.extra_id || i.id, name: i.extra_name || i.name }));
        this._loan_items = (raw_data.loan_items || []).map(i => ({ id: i.extra_id || i.id, name: i.extra_name || i.name }));
        this.levels = (raw_data.levels || disc_info.levels || []).map(i => new _level_class__WEBPACK_IMPORTED_MODULE_3__["BuildingLevel"](Object.assign(Object.assign({}, i), { building_id: this.id })));
        this._roles = raw_data.roles || {};
        this._lockers = raw_data.lockers || raw_data.locker_structure || {};
        this._systems = raw_data.systems || {};
        this._settings = raw_data.settings || {};
        this._phone_numbers = raw_data.phone_numbers || {};
        this._location = raw_data.location || { longitude: null, latitude: null };
        this._searchables = [];
        if (raw_data.neighbourhoods) {
            for (const lvl in raw_data.neighbourhoods) {
                if (raw_data.neighbourhoods.hasOwnProperty(lvl)) {
                    const lvl_features = raw_data.neighbourhoods[lvl] || {};
                    for (const feature in lvl_features) {
                        if (lvl_features.hasOwnProperty(feature)) {
                            this._searchables.push({
                                id: lvl_features[feature],
                                name: feature,
                                level_id: lvl
                            });
                        }
                    }
                }
            }
        }
        this.booking_rules = raw_data.booking_rules || disc_info.booking_rules || settings.booking_rules || {};
    }
    /** List of available extras for the building */
    get extras() {
        return [...(this._extras || [])];
    }
    /** List of available extras for the building */
    get loan_items() {
        return [...(this._loan_items || [])];
    }
    /**
     * Get a custom building setting
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    setting(key) {
        const keys = key.split('.');
        const value = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__["getItemWithKeys"])(keys, this._settings);
        return value;
    }
    /**
     * Get list of users with the associated role
     * @param name Role to find users for
     */
    role(name) {
        return [...(this._roles[name] || [])];
    }
    /**
     * Get list of the names of available user role lists
     */
    get role_names() {
        return Object.keys(this._roles).filter(i => this._roles.hasOwnProperty(i));
    }
    /** Map of the locker ID arrays */
    get lockers() {
        return Object.assign({}, (this._lockers || {}));
    }
    /** Map of important system ids for the building */
    get systems() {
        return Object.assign({}, (this._systems || {}));
    }
    /** Map of important phone numbers for the building */
    get phone_numbers() {
        return Object.assign({}, (this._phone_numbers || {}));
    }
    /** Real coordinates */
    get location() {
        return Object.assign({}, this._location);
    }
    /** List of zones associated with the building */
    get zones() {
        return [...(this._zones || [])];
    }
    /** Searchable map features */
    get searchables() {
        return [...(this._searchables || [])];
    }
    /**
     * Get search map feature for the given level ID
     * @param level_id ID of level to grab features for
     */
    featuresForLevel(level_id) {
        return (this._searchables || []).filter(i => i.level_id === level_id);
    }
    /**
     * Building objects are readonly and cannot be changed
     */
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            throw new Error('Building objects are readonly and cannot be changed');
        });
    }
    /**
     * Building objects are readonly and cannot be deleted
     */
    delete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            throw new Error('Building objects are readonly and cannot be deleted');
        });
    }
}


/***/ }),

/***/ "./src/app/services/data/organisation/level.class.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/data/organisation/level.class.ts ***!
  \***********************************************************/
/*! exports provided: BuildingLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BuildingLevel", function() { return BuildingLevel; });
/** Building Level data */
class BuildingLevel {
    constructor(_data = {}) {
        this.id = _data.id || _data.level_id || '';
        this.building_id = _data.bld_id || _data.building_id || '';
        this.name = _data.name || _data.level_name || '';
        const lower_name = this.name.toLowerCase();
        const num = lower_name.indexOf('level') >= 0 ? lower_name.replace(/ ?level ?/gi, '') : lower_name.substr(0, 1).toUpperCase();
        this.short_name = _data.short_name || num || '';
        this.map_url = _data.map_url || '';
        this.type = _data.type || _data.floor_type || 'any';
        this.settings = _data.settings;
    }
}


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



class Organisation extends _base_api_class__WEBPACK_IMPORTED_MODULE_1__["BaseDataClass"] {
    constructor(service, raw_data) {
        super(service, raw_data);
        this.service = service;
        this._settings = raw_data.settings || {};
    }
    /**
     * Get a custom building setting
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    setting(key) {
        const keys = key.split('.');
        const value = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_2__["getItemWithKeys"])(keys, this._settings);
        return value;
    }
    /**
     * Building objects are readonly and cannot be changed
     */
    save() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            throw new Error('Organisation objects are readonly and cannot be changed');
        });
    }
    /**
     * Building objects are readonly and cannot be deleted
     */
    delete() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            throw new Error('Organisation objects are readonly and cannot be deleted');
        });
    }
}


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
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base.service */ "./src/app/services/data/base.service.ts");
/* harmony import */ var _organisation_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./organisation.class */ "./src/app/services/data/organisation/organisation.class.ts");
/* harmony import */ var _building_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./building.class */ "./src/app/services/data/organisation/building.class.ts");
/* harmony import */ var _service_manager_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service-manager.class */ "./src/app/services/data/service-manager.class.ts");
/* harmony import */ var _level_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./level.class */ "./src/app/services/data/organisation/level.class.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






class OrganisationService extends _base_service__WEBPACK_IMPORTED_MODULE_0__["BaseAPIService"] {
    constructor() {
        super();
        _service_manager_class__WEBPACK_IMPORTED_MODULE_3__["ServiceManager"].setService(_building_class__WEBPACK_IMPORTED_MODULE_2__["Building"], this);
        _service_manager_class__WEBPACK_IMPORTED_MODULE_3__["ServiceManager"].setService(_organisation_class__WEBPACK_IMPORTED_MODULE_1__["Organisation"], this);
        this._name = 'Organisation';
        this._api_route = 'zones';
        this.set('buildings', []);
        this.set('levels', []);
    }
    /**
     * Get list of levels for the given building ID
     * @param bld_id Building ID
     */
    levels(bld_id) {
        return (this.buildings.find((i) => i.id === bld_id) || {}).levels;
    }
    /**
     * Get a setting from the organisation or active building
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    setting(key) {
        return this.building.setting(key) || this._organisation.setting(key);
    }
    /** Active building */
    get building() {
        return (this.buildings.find(i => i.id === this._active_building));
    }
    set building(bld) {
        if (bld instanceof _building_class__WEBPACK_IMPORTED_MODULE_2__["Building"]) {
            this._active_building = bld.id;
        }
        else {
            this._active_building = bld;
        }
    }
    /** List of buildings for the organisation */
    get buildings() {
        return this.get('buildings') || [];
    }
    /**
     * Get list of available equipment
     * @param id ID of the building to get the list from. i.e. Defaults to the active building
     */
    getExtras(id, bld_id) {
        const bld = (bld_id ? this.buildings.find(i => i.id === bld_id) : null) || this.building;
        if (bld && id) {
            return bld.extras.filter(i => i.id.indexOf(id) >= 0) || [];
        }
        return [];
    }
    /**
     * Get the first level matching the list of given IDs
     * @param ids List of ID to search with
     */
    levelWithID(ids) {
        const list = ids instanceof Array ? ids : [ids];
        const bld_list = this.buildings;
        for (const id of list) {
            for (const bld of bld_list) {
                for (const lvl of bld.levels) {
                    if (lvl.id === id) {
                        return lvl;
                    }
                }
            }
        }
        return null;
    }
    /**
     * Initialise service data
     */
    load() {
        if (localStorage) {
            this._active_building = localStorage.getItem(`${this.parent.name}.building`);
        }
        return new Promise((resolve) => {
            this.loadOrganisation().then(() => {
                this.loadBuildings().then(() => {
                    this.loadLevels().then(() => resolve());
                });
            });
        });
    }
    /**
     * Load organisation data for application
     */
    loadOrganisation() {
        return new Promise((resolve) => {
            this.query({ tags: 'org', engine: true }).then((org_data) => {
                this._organisation = new _organisation_class__WEBPACK_IMPORTED_MODULE_1__["Organisation"](this, org_data[0]);
                this.set('organisation', this._organisation);
                this.shown_error = false;
                resolve();
            }, _ => {
                if (!this.shown_error) {
                    this.shown_error = true;
                    this.parent.notifyError('Error loading organisation data. Retrying...');
                }
                this.timeout('load_org', () => this.loadOrganisation().then(() => resolve()), 1000);
            });
        });
    }
    /**
     * Load buildings data for the organisation
     */
    loadBuildings() {
        return new Promise((resolve) => {
            this.query({ tags: 'building', engine: true, limit: 1000 }).then((bld_data) => {
                const buildings = bld_data.map(i => new _building_class__WEBPACK_IMPORTED_MODULE_2__["Building"](this, i));
                this.set('buildings', buildings || []);
                if (!this._active_building && buildings && buildings.length > 0) {
                    this._active_building = buildings[0].id;
                }
                resolve();
            }, _ => {
                this.parent.notifyError('Error loading building data. Retrying...');
                this.timeout('load_bld', () => this.loadBuildings().then(() => resolve()), 1000);
            });
        });
    }
    /**
     * Load levels data for the buildings
     */
    loadLevels() {
        return new Promise((resolve) => {
            this.query({ tags: 'level', engine: true, limit: 1000 }).then((lvl_data) => {
                const levels = lvl_data.map((i) => new _level_class__WEBPACK_IMPORTED_MODULE_4__["BuildingLevel"](i));
                this.set('levels', levels);
            }, _ => {
                this.parent.notifyError('Error loading level data. Retrying...');
                this.timeout('load_lvl', () => this.loadLevels().then(() => resolve()), 1000);
            });
        });
    }
}
OrganisationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ factory: function OrganisationService_Factory() { return new OrganisationService(); }, token: OrganisationService, providedIn: "root" });


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
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.service */ "./src/app/services/data/base.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



class PingHistory {
    constructor(data) {
        this.history = data.history;
        this.last_ping = data.last_ping;
        this.room_email = data.room_email;
        this.room_id = data.room_id;
    }
}
const SECONDS = 1000;
const MINUTES = 60 * SECONDS;
class PollingService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseAPIService"] {
    constructor() {
        super();
        this._name = 'Users';
        this._api_route = 'pings';
    }
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.interval('poll_endpoint', () => {
                this.add({
                    room_id: this.parent.get('system')
                });
            }, 10 * MINUTES);
        });
    }
    query(...args) {
        throw new Error('Query method not available for polling endpoint');
    }
    show(...args) {
        throw new Error('Show method not available for polling endpoint');
    }
    update(...args) {
        throw new Error('Put method not available for polling endpoint');
    }
    delete(...args) {
        throw new Error('delete method not available for polling endpoint');
    }
    process(data) {
        return new PingHistory(data);
    }
}
PollingService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function PollingService_Factory() { return new PollingService(); }, token: PollingService, providedIn: "root" });


/***/ }),

/***/ "./src/app/services/data/service-manager.class.ts":
/*!********************************************************!*\
  !*** ./src/app/services/data/service-manager.class.ts ***!
  \********************************************************/
/*! exports provided: ServiceManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceManager", function() { return ServiceManager; });
class ServiceManager {
    constructor() {
        throw new Error('ServiceMananger is static class');
    }
    /** Set the services used to handle data model requests */
    static setService(type, service) {
        if (window.debug) {
            window.ServiceManager = this._service_list;
        }
        const index = ServiceManager._service_list.findIndex(provider => provider.provideFor === type);
        if (index >= 0) {
            ServiceManager._service_list.splice(index, 1, { provideFor: type, useValue: service });
        }
        else {
            ServiceManager._service_list.push({ provideFor: type, useValue: service });
        }
    }
    /** Get the services used to handle data model requests */
    static serviceFor(type) {
        const provider = ServiceManager._service_list.find(provider => provider.provideFor === type) || { useValue: null };
        return provider.useValue;
    }
}
/** Map of available services for child classes */
ServiceManager._service_list = [];


/***/ }),

/***/ "./src/app/services/data/spaces/space.class.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/data/spaces/space.class.ts ***!
  \*****************************************************/
/*! exports provided: SpaceTheme, Space */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceTheme", function() { return SpaceTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Space", function() { return Space; });
/* harmony import */ var _base_api_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base-api.class */ "./src/app/services/data/base-api.class.ts");
/* harmony import */ var _bookings_booking_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bookings/booking.class */ "./src/app/services/data/bookings/booking.class.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../bookings/booking.utilities */ "./src/app/services/data/bookings/booking.utilities.ts");
/* harmony import */ var _service_manager_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service-manager.class */ "./src/app/services/data/service-manager.class.ts");
/* harmony import */ var _organisation_building_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../organisation/building.class */ "./src/app/services/data/organisation/building.class.ts");
/* harmony import */ var _organisation_organisation_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../organisation/organisation.class */ "./src/app/services/data/organisation/organisation.class.ts");
/* harmony import */ var _organisation_level_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../organisation/level.class */ "./src/app/services/data/organisation/level.class.ts");








const OPTION_DEFAULTS = {
    duration: 60
};
var SpaceTheme;
(function (SpaceTheme) {
    SpaceTheme["v1"] = "v1";
    SpaceTheme["v2"] = "v2";
})(SpaceTheme || (SpaceTheme = {}));
class Space extends _base_api_class__WEBPACK_IMPORTED_MODULE_0__["BaseDataClass"] {
    constructor(service, raw_data = {}) {
        super(service, raw_data);
        this.service = service;
        const settings = raw_data.settings || {};
        this.theme_rbp = settings.theme_rbp || raw_data.theme_rbp;
        this.long_name = settings.long_name || raw_data.long_name;
        this.map_id = settings.map_id || raw_data.map_id;
        this.type =
            settings.book_type ||
                (this.level.settings || {}).book_type ||
                raw_data.book_type ||
                raw_data.type ||
                'book';
        this.can_search = settings.searchable || raw_data.searchable || raw_data.can_search || false;
        this.can_control = settings.controlable || raw_data.controlable || raw_data.can_control || false;
        this.hourly_rate = settings.cost_hour || raw_data.cost_hour || raw_data.hourly_rate || 0;
        this.bookable = settings.bookable || raw_data.bookable || false;
        this.setup = ((settings.setup || 0) / 60) || raw_data.setup || 0;
        this.breakdown = ((settings.breakdown || 0) / 60) || raw_data.breakdown || 0;
        this.capacity = raw_data.capacity || 0;
        this.was_available = settings.available || raw_data.available || raw_data.was_available || false;
        this.zones = raw_data.zones instanceof Array ? raw_data.zones : [];
        const raw_bookings = settings.bookings || raw_data.bookings || [];
        this._bookings = raw_bookings.map(i => i.id);
        if (this.service.parent && this.service.parent.Bookings) {
            if (raw_bookings) {
                const id_list = [];
                raw_bookings.forEach(booking => {
                    let id = booking.id;
                    this.service.parent.Bookings.removeFrom(this.id, [id], 'class');
                    id = this.service.parent.Bookings.addFrom(this.id, booking, 'class');
                    id_list.push(id);
                });
                this._bookings = id_list;
            }
        }
        this._extras = [];
        this._linked_spaces = settings.linked_rooms || raw_data.linked_rooms || raw_data.linked_spaces || [];
    }
    /** Whether the space has a booking in progress */
    get in_use() {
        return !!this.current;
    }
    /** Get any current in progress meeting */
    get current() {
        const bookings = this.bookings;
        for (const bkn of bookings) {
            const status = bkn.status;
            if (status === 'in_progress' || status === 'started') {
                return bkn;
            }
        }
        return null;
    }
    /** Get the next upcoming meeting */
    get next() {
        const now = dayjs__WEBPACK_IMPORTED_MODULE_2__().valueOf();
        const bookings = this.bookings;
        for (const bkn of bookings) {
            if (bkn.date > now) {
                return bkn;
            }
        }
        return null;
    }
    /** List of stored bookings for the space */
    get bookings() {
        const bookingService = _service_manager_class__WEBPACK_IMPORTED_MODULE_4__["ServiceManager"].serviceFor(_bookings_booking_class__WEBPACK_IMPORTED_MODULE_1__["Booking"]);
        const booking_list = (bookingService
            && bookingService.list((booking) => this._bookings.indexOf(booking.id) >= 0) || []);
        return booking_list.sort((a, b) => a.date - b.date);
    }
    /** List of bookings for today */
    get todays_bookings() {
        return this.bookingsFor(dayjs__WEBPACK_IMPORTED_MODULE_2__().valueOf());
    }
    /** List of ids for linked spaces */
    get linked_spaces() {
        return [...this._linked_spaces];
    }
    /** Level in which the space is associated */
    get level() {
        const service = _service_manager_class__WEBPACK_IMPORTED_MODULE_4__["ServiceManager"].serviceFor(_organisation_organisation_class__WEBPACK_IMPORTED_MODULE_6__["Organisation"]);
        const newVar = service ? service.levelWithID(this.zones) : null;
        return newVar || new _organisation_level_class__WEBPACK_IMPORTED_MODULE_7__["BuildingLevel"]({});
    }
    /**
     * Get bookings for space
     * @param date Date to filter bookings on
     */
    bookingsFor(date) {
        if (date) {
            const day = dayjs__WEBPACK_IMPORTED_MODULE_2__(date);
            return this.bookings.filter(i => dayjs__WEBPACK_IMPORTED_MODULE_2__(i.date).isSame(day, 'd'));
        }
        else {
            return this.bookings;
        }
    }
    /**
     * Whether the space is available.
     */
    isAvailable(options) {
        options = options
            ? Object.assign(Object.assign(Object.assign({}, OPTION_DEFAULTS), options), { room_ids: this.id }) : Object.assign(Object.assign({}, OPTION_DEFAULTS), { room_ids: this.id });
        return new Promise((resolve) => {
            this.service.available(options).then((list) => {
                for (const rm of list) {
                    if (rm.id === this.id) {
                        return resolve(true);
                    }
                }
                resolve(false);
            }, () => resolve(false));
        });
    }
    /**
     * Make a copy of this object
     */
    clone() {
        return new Space(this.service, this);
    }
    /**
     * Make a copy of this object without identification data
     */
    duplicate() {
        return new Space(this.service, Object.assign(Object.assign({}, this), { id: null, email: null, _bookings: [] }));
    }
    /**
     * Generate the booking rules for space with given options
     * @param options Conditions for generating the space rules
     */
    rulesFor(options) {
        const service = _service_manager_class__WEBPACK_IMPORTED_MODULE_4__["ServiceManager"].serviceFor(_organisation_building_class__WEBPACK_IMPORTED_MODULE_5__["Building"]);
        if (!service || !this.level) {
            return { auto_approve: true, hide: false };
        }
        const building = service.buildings.find((bld) => bld.id === this.level.building_id);
        if (!building) {
            return { auto_approve: true, hide: false };
        }
        const { date, duration, host } = options;
        const rules = Object(_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_3__["rulesForSpace"])({
            time: date,
            duration,
            space: this,
            user: host,
            rules: building.booking_rules
        });
        return rules;
    }
    /**
     * Whether space can only be booked by request
     * @param options Conditions for checking the space rules
     */
    byRequest(options) {
        const rules = this.rulesFor(options);
        return !rules.auto_approve;
    }
}


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
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");




let SPACE_COUNT = 0;
function generateMockSpace(overrides = {}) {
    const id = `space-${SPACE_COUNT++}`;
    const name = `${faker__WEBPACK_IMPORTED_MODULE_1__["name"].firstName()} ${faker__WEBPACK_IMPORTED_MODULE_1__["name"].lastName()} Space`;
    const linked = Math.floor(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__["predictableRandomInt"])(99999)) % 2 === 0 && SPACE_COUNT > 1;
    return Object.assign({ id,
        name, long_name: `${name} with an long name`, map_id: `${SPACE_COUNT}`, capacity: Math.floor(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__["predictableRandomInt"])(20) + 1) * 2, email: `${name.toLowerCase().split(' ').join('.')}@${_users_user_utilities__WEBPACK_IMPORTED_MODULE_2__["USER_DOMAIN"]}`, type: faker__WEBPACK_IMPORTED_MODULE_1__["commerce"].productName(), searchable: Math.floor(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__["predictableRandomInt"])(99999)) % 2 === 0, controlable: Math.floor(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__["predictableRandomInt"])(99999)) % 2 === 0, bookable: Math.floor(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__["predictableRandomInt"])(99999)) % 2 === 0, cost_hour: Math.floor(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__["predictableRandomInt"])(300)) * 100, setup: Math.floor(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__["predictableRandomInt"])(6)) * 5, breakdown: Math.floor(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__["predictableRandomInt"])(6)) * 5, zones: ['zone_lvl-0'], support_url: `/control/#/${id}`, bookings: Array(10).fill(0).map(i => Object(_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_0__["generateMockBooking"])()), linked_rooms: linked ? [`space-${Math.floor(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__["predictableRandomInt"])(SPACE_COUNT - 1))}`] : [], image: faker__WEBPACK_IMPORTED_MODULE_1__["image"].business() }, overrides);
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
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base.service */ "./src/app/services/data/base.service.ts");
/* harmony import */ var _space_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./space.class */ "./src/app/services/data/spaces/space.class.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





class SpacesService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseAPIService"] {
    constructor() {
        super();
        this._name = 'Space';
        this._api_route = 'rooms';
        this._compare = (a, b) => !a.id.localeCompare(b.id) || !a.email.localeCompare(b.email);
        this._list_filter = (a) => {
            const bld = this.parent.Organisation.building;
            return a.level.building_id === bld.id;
        };
    }
    /**
     * Get available spaces
     * @param options
     */
    available(options) {
        if (!options) {
            throw new Error('Space avilability requires request options');
        }
        if (!options.date) {
            options.date = dayjs__WEBPACK_IMPORTED_MODULE_3__().startOf('m').valueOf();
        }
        const key = `available|${options.id ? options.id : ''}`;
        if (!this._promises[key]) {
            this._promises[key] = new Promise((resolve, reject) => {
                const respond = (list) => {
                    const available_spaces = list.filter(i => {
                        const linked = list.filter(j => i.linked_spaces.indexOf(j.id) >= 0);
                        return i.was_available && linked.reduce((a, v) => a && v.was_available, true);
                    });
                    resolve(available_spaces);
                };
                const error = (e) => reject(e);
                if (options.id) {
                    this.show(options.id, options).then((i) => respond([i]), error);
                }
                else {
                    this.query(options).then(respond, error);
                }
            });
        }
        return this._promises[key];
    }
    /**
     * Load initial data for the service
     */
    load() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.query();
        });
    }
    /**
     * Convert raw data into API object
     * @param raw_data Raw API data
     */
    process(raw_data) {
        return new _space_class__WEBPACK_IMPORTED_MODULE_2__["Space"](this, raw_data);
    }
}
SpacesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function SpacesService_Factory() { return new SpacesService(); }, token: SpacesService, providedIn: "root" });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var _shared_base_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/base.class */ "./src/app/shared/base.class.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");





class SystemsManagerService extends _shared_base_class__WEBPACK_IMPORTED_MODULE_3__["BaseClass"] {
    constructor() {
        super();
        /** Subject for System list */
        this._list = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        /** Observable for system list */
        this.systems = this._list.asObservable();
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["listenForToken"])().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(_ => Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["hasToken"])())).subscribe(() => this.load());
    }
    /** List of available systems */
    get list() {
        return this._list.getValue() || [];
    }
    /**
     * Get engine module for the given system
     * @param sys_id ID of the system to get the module from
     * @param mod_id ID of the module with the given system
     * @param index Index of the module
     */
    get(sys_id, mod_id, index) {
        return Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["getModule"])(sys_id, mod_id, index);
    }
    /**
     * Load Systems
     */
    load() {
        this.loadSystems();
    }
    /**
     * Load one page of systems
     * @param offset Item offset for the page to load
     */
    loadSystems(offset = 0, limit = 2000) {
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_2__["querySystems"])({ offset, limit })
            .toPromise()
            .then((details) => {
            const systems = [...this.list, ...details.data];
            systems.sort((a, b) => (a.name || '').localeCompare(b.name));
            this._list.next(systems);
            if (systems.length < details.total) {
                this.loadSystems(systems.length);
            }
        })
            .catch((e) => this.timeout('retry', () => this.loadSystems(offset), 2000));
    }
}
SystemsManagerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function SystemsManagerService_Factory() { return new SystemsManagerService(); }, token: SystemsManagerService, providedIn: "root" });


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
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _base_api_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../base-api.class */ "./src/app/services/data/base-api.class.ts");


class User extends _base_api_class__WEBPACK_IMPORTED_MODULE_1__["BaseDataClass"] {
    constructor(service, raw_data = {}) {
        super(service, raw_data);
        this.service = service;
        this.first_name = raw_data.first_name;
        this.last_name = raw_data.last_name;
        this.windows_id = raw_data.email;
        this.type = raw_data.visitor ? 'external' : raw_data.type || 'internal';
        this.phone = raw_data.phone || raw_data.mobile;
        this.business_unit = raw_data.business_unit || raw_data.department;
        this._organisation = raw_data.organisation || { id: raw_data.organisation_id, name: raw_data.organisation_name };
        this.external = this.type === 'external';
        this._location = null;
        this.staff_code = raw_data.staff_code || raw_data.fmno;
        this._delegates = raw_data.delegates;
        this.groups = raw_data.groups || [];
        this.location = raw_data.location || raw_data.officeLocation || '';
    }
    /** Organisation the user is associated with */
    get organisation() {
        return this._organisation;
    }
    /** Map location of the user */
    get last_location() {
        return this._location ? Object.assign({}, (this._location)) : null;
    }
    /** List of users that this user can act on behalf */
    get delegates() {
        return [...(this._delegates || [])];
    }
    /**
     * Ask the server for the users current location
     */
    locate() {
        const service = this.service.parent || {};
        return new Promise((resolve, reject) => {
            if (service.Location) {
                service.Location.show(this.id, { desk: this.email }).then(l => {
                    this._location = l;
                    resolve(l);
                }, e => reject(e));
            }
            else {
                resolve(null);
            }
        });
    }
    /**
     * Whether user is available during the given period
     * @param start Start time as a unix timestamp with milliseconds
     * @param end End time as a unix timestamp with milliseconds
     */
    available(start, end) {
        return new Promise(resolve => {
            this.service.query({ email: this.email, start, end })
                .then(l => resolve(l && l.length > 0), _ => resolve(false));
        });
    }
    /**
     * Make a copy of this object
     */
    clone() {
        return new User(this.service, this);
    }
    /**
     * Make a copy of this object without identification data
     */
    duplicate() {
        return new User(this.service, Object.assign(Object.assign({}, this), { id: null, email: null }));
    }
    /**
     * Initialise the form field metadata for the field
     */
    initialiseFormFields() {
        const edit = !!this.id;
        const fields = [
            new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["ADynamicFormField"]({
                key: 'name',
                type: 'input',
                value: this.name,
                hide: true
            }),
            new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["ADynamicFormField"]({
                key: 'first_name',
                label: 'First Name',
                type: 'input',
                value: this.first_name,
                required: true
            }),
            new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["ADynamicFormField"]({
                key: 'last_name',
                label: 'Last Name',
                type: 'input',
                value: this.last_name,
                required: true
            }),
            new _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_0__["ADynamicFormField"]({
                key: 'email',
                label: 'Email',
                type: 'input',
                value: this.email,
                required: true,
                attributes: { type: 'email' }
            })
        ];
        return fields;
    }
}


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


let USER_COUNT = 0;
let USER_DOMAIN = 'acaprojects.com';
const USER_EMAILS = [];
/**
 * Generate raw mock data for a user
 * @param id Forced ID for the mock
 * @param name Forced name for the user
 * @param external Whether user is external of the organisation
 * @param seed - faker seed
 */
function generateMockUser(id, name, external, seed) {
    if (seed) {
        faker__WEBPACK_IMPORTED_MODULE_0__["seed"](seed);
    }
    if (!id) {
        id = `user-${USER_COUNT++}`;
    }
    if (!name) {
        name = `${faker__WEBPACK_IMPORTED_MODULE_0__["name"].firstName()} ${faker__WEBPACK_IMPORTED_MODULE_0__["name"].lastName()}`;
    }
    if (external === undefined) {
        external = !((Math.random() * 99999) % 2);
    }
    const organisation = external ? faker__WEBPACK_IMPORTED_MODULE_0__["company"].companyName() : USER_DOMAIN.split('.')[0];
    let delegates = [];
    const delegate_count = Math.min(Math.random() * 4 + 1, USER_EMAILS.length);
    for (let i = 0; i < delegate_count; i++) {
        delegates.push(USER_EMAILS[Math.floor(Math.random() * USER_EMAILS.length)]);
    }
    delegates = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_1__["unique"])(delegates);
    const email = `${name.split(' ').join('.').toLowerCase()}@${external ? 'not-' : ''}${USER_DOMAIN}`;
    USER_EMAILS.push(email);
    return {
        id,
        name,
        email,
        phone: faker__WEBPACK_IMPORTED_MODULE_0__["phone"].phoneNumber(),
        visitor: external,
        organisation: {
            id: organisation.split(' ').join('.').toLowerCase(),
            name: organisation
        },
        department: faker__WEBPACK_IMPORTED_MODULE_0__["commerce"].department(),
        staff_code: Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_1__["padZero"])(Math.floor(Math.random() * 99999), 5),
        delegates
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../base.service */ "./src/app/services/data/base.service.ts");
/* harmony import */ var _user_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user.class */ "./src/app/services/data/users/user.class.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");










class UsersService extends _base_service__WEBPACK_IMPORTED_MODULE_4__["BaseAPIService"] {
    constructor(uhttp, location) {
        super();
        this.uhttp = uhttp;
        this.location = location;
        this._name = 'Users';
        this._api_route = 'users';
        this._compare = (a, b) => !a.id.localeCompare(b.id) || !a.email.localeCompare(b.email);
        this.set('current_user', new _user_class__WEBPACK_IMPORTED_MODULE_5__["User"](this, { id: 'local_user', name: 'Local User' }));
    }
    /** Currently logged in user */
    get current() {
        return this.get('current_user');
    }
    /**
     * Sets the access token and expiry for the user
     * @param token OAuth bearer token
     * @param expiry Expiry epoch timestamp in ms
     * @param reload Whether to reload the page after setting tokens
     */
    setToken(token, expiry, reload = true) {
        if (!expiry) {
            expiry = dayjs__WEBPACK_IMPORTED_MODULE_6__()
                .add(7, 'd').endOf('d')
                .valueOf();
        }
        const path = `${location.origin}${this.parent.setting('composer.route') || ''}/oauth-resp.html`;
        const client_id = ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_2__["Md5"].hashStr(path);
        if (sessionStorage) {
            sessionStorage.setItem(`${client_id}_access_token`, token);
            sessionStorage.setItem(`${client_id}_expires_at`, `${expiry}`);
        }
        if (localStorage) {
            localStorage.setItem(`${client_id}_access_token`, token);
            localStorage.setItem(`${client_id}_expires_at`, `${expiry}`);
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
    login(query_params, options = {}) {
        if (!this._promises['login']) {
            this._promises['login'] = new Promise((resolve, reject) => {
                this.set('status', 'loading');
                let headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
                if (!options || options.form !== false) {
                    headers = headers.append('Content-Type', 'application/x-www-form-urlencoded');
                }
                const url = (options ? options.url : '') || '/auth/signin';
                this.uhttp.post(url, query_params, { headers }).subscribe(_ => null, e => reject(e), () => {
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
    logout() {
        Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_3__["logout"])();
    }
    /**
     * Load initial data for the service
     */
    load(tries = 0) {
        this.set('status', 'loading');
        return new Promise(resolve => {
            if (tries > 4) {
                this.set('status', 'invalid');
                return resolve();
            }
            this.show('current', { engine: true }).then(current_user => {
                this.set('status', 'available');
                this.set('check_initialised', current_user);
                this.clearTimeout('load');
                if (this.parent && this.parent.setting('app.user.grab_api_details')) {
                    this.show(current_user.email).then(user => {
                        this.set('current_user', user);
                        resolve();
                    }, () => this.timeout('load', () => this.load(++tries).then(() => resolve())));
                }
                else {
                    resolve();
                }
            }, () => this.timeout('load', () => this.load(++tries).then(() => resolve())));
        });
    }
    /**
     * Convert raw API data into a valid User Object
     * @param raw_item Raw API data
     */
    process(raw_data) {
        return new _user_class__WEBPACK_IMPORTED_MODULE_5__["User"](this, raw_data);
    }
}
UsersService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({ factory: function UsersService_Factory() { return new UsersService(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["Location"])); }, token: UsersService, providedIn: "root" });


/***/ }),

/***/ "./src/app/services/debug.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/debug.service.ts ***!
  \*******************************************/
/*! exports provided: DebugService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebugService", function() { return DebugService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



class DebugService {
    constructor() {
        this._old_log = console.log;
        this._old_info = console.info;
        this._old_warn = console.warn;
        this._old_debug = console.debug;
        this._old_error = console.error;
        /** Store for list of logs */
        this._logs = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        /** Observable for list of logs */
        this.logs = this._logs.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(list => list.reverse()));
        console.log = (...args) => {
            this.newLogMessage('log', args);
            this._old_log.call(this, ...args);
        };
        console.info = (...args) => {
            this.newLogMessage('info', args);
            this._old_info.call(this, ...args);
        };
        console.warn = (...args) => {
            this.newLogMessage('warn', args);
            this._old_warn.call(this, ...args);
        };
        console.debug = (...args) => {
            this.newLogMessage('debug', args);
            this._old_debug.call(this, ...args);
        };
        console.error = (...args) => {
            this.newLogMessage('error', args);
            this._old_error.call(this, ...args);
        };
    }
    newLogMessage(level, content) {
        const logs = [...this._logs.getValue()];
        logs.push({ level, content, time: new Date().valueOf() });
        logs.sort((a, b) => a.time - b.time);
        this._logs.next(logs);
    }
}
DebugService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function DebugService_Factory() { return new DebugService(); }, token: DebugService, providedIn: "root" });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



/** List of keys that cannot be in a combination by themselves or with each other */
const INVALID_STANDALONE_KEYS = ['control', 'shift', 'alt', 'meta', 'os'];
class HotkeysService {
    constructor() {
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
        window.addEventListener('keydown', (event) => {
            const code = this.mapKey((event.code || '').toLowerCase());
            if (this.last_down !== code) {
                if (!this.keydown_states[code]) {
                    this.keydown_states[code] = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
                    this.keydown_observers[code] = this.keydown_states[code].asObservable();
                }
                this.keydown_states[code].next(this.counter++);
                if (this.combo_end.indexOf(code) >= 0) {
                    event.preventDefault();
                }
                this.last_down = code;
            }
        });
        window.addEventListener('keyup', (event) => {
            const code = this.mapKey((event.code || '').toLowerCase());
            this.keydown_states[code].next(null);
            if (this.last_down === code) {
                this.last_down = null;
            }
        });
    }
    /**
     * Listen to the given key combination
     * @param combo Array of key codes to listen to or a hotkey string e.g. `Alt+Shift+KeyK`
     * @param next Callback for combination presses
     */
    listen(combo, next) {
        combo = (combo instanceof Array ? combo : combo.split('+'));
        const combination = combo.map(i => this.mapKey(i.toLowerCase()));
        if (combination.length > 0 && this.validCombination(combination)) {
            this.registered_combos.push(combination);
            const last_key = combination[combination.length - 1];
            if (!this.keydown_states[last_key]) {
                this.keydown_states[last_key] = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
                this.keydown_observers[last_key] = this.keydown_states[last_key].asObservable();
            }
            this.updateCombinationEndList();
            return this.keydown_observers[last_key].subscribe((count) => {
                if (count) {
                    const presses = [];
                    if (combination.length > 1) {
                        // Check that keys are pressed
                        for (const key of combination) {
                            const state = this.keydown_states[key];
                            presses.push(state ? state.getValue() || -1 : -1);
                        }
                        // Check that keys are pressed in the correct order
                        for (let i = 0; i < combination.length - 1; i++) {
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
    mapKey(code) {
        if (code.indexOf('alt') || code.indexOf('shift') || code.indexOf('control')) {
            return code.replace('left', '').replace('right', '');
        }
        return code;
    }
    /**
     * Update the list of the last keys in combinations to allow for prevent default actions on pre-existing hotkeys
     */
    updateCombinationEndList() {
        const key_list = [];
        for (const combo of this.registered_combos) {
            this.combo_end.push(combo[combo.length - 1]);
        }
        this.combo_end = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_1__["unique"])(key_list);
    }
    /**
     * Checks if the given hotkey combination is allowed and valid
     * @param combo Array of key codes
     */
    validCombination(combo) {
        let non_meta = 0;
        for (const key of combo) {
            if (INVALID_STANDALONE_KEYS.indexOf(key) < 0) {
                non_meta++;
            }
        }
        return non_meta > 0;
    }
}
HotkeysService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function HotkeysService_Factory() { return new HotkeysService(); }, token: HotkeysService, providedIn: "root" });


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/index.js");
/* harmony import */ var src_environments_version__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/version */ "./src/environments/version.ts");
/* harmony import */ var src_environments_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/environments/settings */ "./src/environments/settings.ts");
/* harmony import */ var _shared_base_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/base.class */ "./src/app/shared/base.class.ts");
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");










class SettingsService extends _shared_base_class__WEBPACK_IMPORTED_MODULE_6__["BaseClass"] {
    constructor(_title) {
        super();
        this._title = _title;
        /** Name of the application */
        this._app_name = 'PlaceOS';
        /** List of override settings in order of priority */
        this._overrides = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        /** Mapping of behaviour subjects */
        this._subjects = {};
        /** Mapping of observables */
        this._observables = {};
        const now = new Date();
        const time = new Date(src_environments_version__WEBPACK_IMPORTED_MODULE_4__["VERSION"].time);
        const built = Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["isSameDay"])(now, time)
            ? `Today at ${Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(time, 'h:mma')}`
            : Object(date_fns__WEBPACK_IMPORTED_MODULE_3__["format"])(time, 'do MMM yyyy, h:mma');
        Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_7__["log"])('CORE', `${src_environments_version__WEBPACK_IMPORTED_MODULE_4__["VERSION"].semver}`, null, 'debug', true);
        Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_7__["log"])('APP', `${src_environments_version__WEBPACK_IMPORTED_MODULE_4__["VERSION"].hash} | Built: ${built}`, null, 'debug', true);
        this.init();
    }
    /**
     * @hidden
     */
    set overrides(value) {
        this._overrides.next(value);
    }
    /** Get observable for key */
    listen(name) {
        if (!this._observables[name]) {
            this._subjects[name] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this._observables[name] = this._subjects[name].asObservable();
        }
        return this._observables[name];
    }
    /** Update observable value for key */
    post(name, value) {
        if (!this._observables[name]) {
            this._subjects[name] = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
            this._observables[name] = this._subjects[name].asObservable();
        }
        this._subjects[name].next(value);
    }
    value(name) {
        return !this._observables[name] ? null : this._subjects[name].getValue();
    }
    /** Page title */
    get title() {
        return this._title.getTitle();
    }
    set title(value) {
        this._title.setTitle(`${value} | ${this._app_name}`);
    }
    /**
     * Initialise the settings
     */
    init() {
        var _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.get('debug')) {
                window.debug = true;
            }
            if ((_a = this.get('app')) === null || _a === void 0 ? void 0 : _a.name) {
                this._app_name = this.get('app').name;
            }
            Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_7__["log"])('Settings', 'Successfully loaded settings');
            this._initialised.next(true);
        });
    }
    /** Whether settings service has initialised */
    get app_name() {
        return this._app_name;
    }
    /**
     * Get a setting
     * @param key Name of the setting. i.e. nested items can be grabbed using `.` to seperate key names
     */
    get(key) {
        const keys = key.split('.');
        if (keys[0] !== 'app') {
            return Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_7__["getItemWithKeys"])(keys, src_environments_settings__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_SETTINGS"]);
        }
        const override_settings = this._overrides.getValue();
        for (const override of override_settings) {
            const value = Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_7__["getItemWithKeys"])(keys.slice(1), override);
            if (value != null) {
                return value;
            }
        }
        return Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_7__["getItemWithKeys"])(keys, src_environments_settings__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_SETTINGS"]);
    }
}
SettingsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ factory: function SettingsService_Factory() { return new SettingsService(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); }, token: SettingsService, providedIn: "root" });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");

class BaseClass {
    constructor() {
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
    get is_initialised() {
        return this._initialised.getValue();
    }
    /**
     * Creates a named timer
     * @param name Name of the timer
     * @param fn Callback function for the timer
     * @param delay Callback delay
     */
    timeout(name, fn, delay = 300) {
        if (name && fn && fn instanceof Function) {
            this.clearTimeout(name);
            this._timers[name] = setTimeout(() => {
                fn();
                this._timers[name] = null;
            }, delay);
        }
        else {
            throw new Error(name ? 'Cannot create named timeout without a name' : 'Cannot create a timeout without a callback');
        }
    }
    /**
     * Clears the named timer
     * @param name Timer name
     */
    clearTimeout(name) {
        if (this._timers[name]) {
            clearTimeout(this._timers[name]);
            this._timers[name] = null;
        }
    }
    /**
     * Creates a named interval
     * @param name Name of the interval
     * @param fn Callback function for the interval
     * @param delay Callback delay
     */
    interval(name, fn, delay = 300) {
        if (name && fn && fn instanceof Function) {
            this.clearInterval(name);
            this._intervals[name] = setInterval(() => fn(), delay);
        }
        else {
            throw new Error(name ? 'Cannot create named interval without a name' : 'Cannot create a interval without a callback');
        }
    }
    /**
     * Clears the named interval
     * @param name Timer name
     */
    clearInterval(name) {
        if (this._intervals[name]) {
            clearInterval(this._intervals[name]);
            this._intervals[name] = null;
        }
    }
    /**
     * Store named subscription
     * @param name Name of the subscription
     * @param unsub Unsubscribe callback or Subscription object
     */
    subscription(name, unsub) {
        this.unsub(name);
        this._subscriptions[name] = unsub;
    }
    /**
     * Call unsubscribe callback with the given name
     * @param name
     */
    unsub(name) {
        if (this._subscriptions && this._subscriptions[name]) {
            if (this._subscriptions[name] instanceof rxjs__WEBPACK_IMPORTED_MODULE_0__["Subscription"]) {
                this._subscriptions[name].unsubscribe();
            }
            else if (this._subscriptions[name] instanceof Function) {
                this._subscriptions[name]();
            }
            this._subscriptions[name] = null;
        }
    }
}


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
/* harmony import */ var _base_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.class */ "./src/app/shared/base.class.ts");

class BaseComponent extends _base_class__WEBPACK_IMPORTED_MODULE_0__["BaseClass"] {
    ngOnDestroy() {
        // Clear local timers
        for (const key in this._timers) {
            if (this._timers.hasOwnProperty(key)) {
                this.clearTimeout(key);
            }
        }
        // Clear local intervals
        for (const key in this._intervals) {
            if (this._intervals.hasOwnProperty(key)) {
                this.clearInterval(key);
            }
        }
        // Clear local subscriptions
        for (const key in this._subscriptions) {
            if (this._subscriptions.hasOwnProperty(key)) {
                this.unsub(key);
            }
        }
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory */ "./node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-dropdown */ "./node_modules/@acaprojects/ngx-dropdown/fesm2015/acaprojects-ngx-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _duration_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./duration-field.component */ "./src/app/shared/components/duration-field/duration-field.component.ts");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBbUJBOzt3Q0FBQTtBQTJCQTs7Y0FBQTtBQWNBOztzQkFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL2R1cmF0aW9uLWZpZWxkL2R1cmF0aW9uLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzNhYTUzNztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHdhcm5pbmc6ICNmZkQwNDg7XG4kd2FybmluZy1saWdodDogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHdhcm5pbmctZGFyazogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvcjogI2FlMTkyODtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFYxIEFwcGxpY2F0aW9uIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2Vzcy12MTogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0LXYxOiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrLXYxOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmctdjE6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodC12MTogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHBlbmRpbmctZGFyay12MTogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvci12MTogI2U1MzkzNTtcbiRlcnJvci1saWdodC12MTogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrLXYxOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kZm9udC1mYW1pbHktcHJpbWFyeTogXCJNY0tpbnNleSBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQ2FsaWJyaSwgQ29yYmVsLCBIZWx2ZXRpY2EsIFJvYm90bywgRHJvaWQsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBcIkJvd2VyXCIsIEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIgc2VyaWY7XG5cbiRiYXNlLXNpemU6IDIwcHg7XG4kdGFibGV0LXNpemU6IDIwcHg7XG4kbW9iaWxlLXNpemU6IDIwcHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"];



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data/bookings/booking.utilities */ "./src/app/services/data/bookings/booking.utilities.ts");
/* harmony import */ var _utilities_general_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var _globals_form_fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globals/form-fields */ "./src/app/shared/globals/form-fields.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);







class CustomDurationFieldComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(field, group) {
        super();
        this.field = field;
        this.group = group;
        /** Step size for available times */
        this.block_size = 15;
        /** List of available durations */
        this.options = [];
    }
    ngOnInit() {
        if (this.group) {
            if (this.group.controls.date) {
                this.date_control = this.group.controls.date;
                this.subscription('date', this.date_control.valueChanges.subscribe(() => this.calculateAvailableDurations()));
            }
            if (this.group.controls.room || this.group.controls.space) {
                this.space_control = this.group.controls.room || this.group.controls.space;
                this.subscription('space', this.space_control.valueChanges.subscribe(() => this.calculateAvailableDurations()));
            }
            this.subscription('control', this.field.control.valueChanges.subscribe(() => this.updateDisplay()));
        }
        this.calculateAvailableDurations();
    }
    /**
     * Update the active value displayed on the dropdown
     */
    updateDisplay() {
        if (this.options && this.options.length > 0) {
            if (!this.active_duration) {
                if (this.field.getValue()) {
                    this.active_duration = this.options.find(i => i.id === this.field.getValue());
                }
                if (!this.active_duration) {
                    this.active_duration = this.options[0];
                    this.setValue(this.options[0]);
                }
            }
            else if (!this.options.find(i => i.id === this.active_duration.id)) {
                let diff = 9999;
                let new_opt = null;
                for (const option of this.options) {
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
    }
    /**
     * Generate a list of times selectable by the user
     */
    calculateAvailableDurations() {
        this.options = [];
        let date = dayjs__WEBPACK_IMPORTED_MODULE_6__().startOf('m');
        const max_duration = this.field.metadata ? this.field.metadata.max_duration || 600 : 600;
        const min_duration = this.field.metadata ? this.field.metadata.min_duration || 30 : 30;
        let end = date.add(max_duration, 'm');
        if (this.space_control) {
            // Get times based off available times in space
            if (this.date_control && this.date_control.value) {
                date = dayjs__WEBPACK_IMPORTED_MODULE_6__(this.date_control.value).startOf('m');
            }
            const slot = Object(_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_3__["getNextFreeBookingSlot"])(this.space_control.value.bookings, date.valueOf(), min_duration);
            if (slot) {
                // Check if slot is after the active date
                date = slot.start > date.valueOf() ? dayjs__WEBPACK_IMPORTED_MODULE_6__(slot.start).startOf('m') : date;
            }
            end = slot ? dayjs__WEBPACK_IMPORTED_MODULE_6__(slot.end).startOf('m') : dayjs__WEBPACK_IMPORTED_MODULE_6__(date).add(max_duration, 'm');
        }
        end = end.endOf('m');
        // Get available durations between the date and end times
        date = date.add(min_duration, 'm').startOf('m');
        let duration = min_duration;
        for (; date.isBefore(end, 's'); date = date.add(this.block_size, 'm')) {
            this.options.push({ id: duration, name: Object(_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_4__["humaniseDuration"])(duration) });
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
    setValue(block) {
        this.field.setValue(block.id);
    }
}
_globals_form_fields__WEBPACK_IMPORTED_MODULE_5__["FORM_FIELDS"].duration = CustomDurationFieldComponent;


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory */ "./node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-dropdown */ "./node_modules/@acaprojects/ngx-dropdown/fesm2015/acaprojects-ngx-dropdown.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _time_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./time-field.component */ "./src/app/shared/components/time-field/time-field.component.ts");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBbUJBOzt3Q0FBQTtBQTJCQTs7Y0FBQTtBQWNBOztzQkFBQSIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3RpbWUtZmllbGQvdGltZS1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICMzYWE1Mzc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiR3YXJuaW5nOiAjZmZEMDQ4O1xuJHdhcm5pbmctbGlnaHQ6IGxpZ2h0ZW4oJHdhcm5pbmcsIDEwKTtcbiR3YXJuaW5nLWRhcms6IGRhcmtlbigkd2FybmluZywgMTApO1xuXG4kZXJyb3I6ICNhZTE5Mjg7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBWMSBBcHBsaWNhdGlvbiBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3MtdjE6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodC12MTogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyay12MTogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nLXYxOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQtdjE6IGxpZ2h0ZW4oJHdhcm5pbmcsIDEwKTtcbiRwZW5kaW5nLWRhcmstdjE6IGRhcmtlbigkd2FybmluZywgMTApO1xuXG4kZXJyb3ItdjE6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQtdjE6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyay12MTogZGFya2VuKCRlcnJvciwgMTApO1xuXG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGZvbnQtZmFtaWx5LXByaW1hcnk6IFwiTWNLaW5zZXkgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIENhbGlicmksIENvcmJlbCwgSGVsdmV0aWNhLCBSb2JvdG8sIERyb2lkLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LXNlY29uZGFyeTogXCJCb3dlclwiLCBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"];



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/data/bookings/booking.utilities */ "./src/app/services/data/bookings/booking.utilities.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _globals_form_fields__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globals/form-fields */ "./src/app/shared/globals/form-fields.ts");






class CustomTimeFieldComponent extends _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(field, group) {
        super();
        this.field = field;
        this.group = group;
        /** Step size for available times */
        this.block_size = 5;
        /** Step size for available times */
        this.min_size = this.block_size * 6;
    }
    ngOnInit() {
        if (this.group) {
            if (this.group.controls.date) {
                this.date_control = this.group.controls.date;
                this.subscription('date', this.date_control.valueChanges.subscribe(() => this.updateDisplay(true)));
            }
            if (this.group.controls.room || this.group.controls.space) {
                this.space_control = this.group.controls.room || this.group.controls.space;
                this.subscription('space', this.space_control.valueChanges.subscribe(() => this.updateDisplay()));
            }
            this.subscription('control', this.field.control.valueChanges.subscribe(() => this.updateDisplay()));
        }
        this.calculateAvailableTimes();
        if (this.date_control) {
            const value = this.date_control.value;
            if (!this.times.find(block => block.value === value)) {
                this.setValue(this.times[0]);
            }
        }
    }
    /**
     * Update the active value displayed on the dropdown
     * @param from_ref Whether new value was generated from a reference field
     */
    updateDisplay(from_ref = false) {
        if (this.times) {
            for (const time of this.times) {
                if (this.field.getValue() === time.id) {
                    this.active_time = time;
                    break;
                }
            }
            if (!this.field.getValue()) {
                // Initialise with date time set on date control
                if (this.date_control) {
                    let date = dayjs__WEBPACK_IMPORTED_MODULE_4__(this.date_control.value);
                    date = date.minute(Math.ceil(date.minute() / 5) * 5);
                    const date_str = date.format('HH:mm');
                    for (const time of this.times) {
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
    }
    /**
     * Generate a list of times selectable by the user
     */
    calculateAvailableTimes() {
        this.times = [];
        let date = dayjs__WEBPACK_IMPORTED_MODULE_4__().startOf('m');
        const book_ahead = this.field.metadata ? this.field.metadata.book_ahead || 660 : 660; // 11 hours default
        const min_duration = this.field.metadata ? this.field.metadata.min_duration || 30 : 30;
        if (this.space_control) {
            // Get times based off available times in space
            const slots = Object(_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_3__["getFreeBookingSlots"])(this.space_control.value.bookings, min_duration);
            date = date.minute(Math.ceil(date.minute() / this.block_size) * this.block_size);
            const end = dayjs__WEBPACK_IMPORTED_MODULE_4__(date)
                .add(book_ahead, 'm')
                .endOf('m');
            for (; date.isBefore(end, 's'); date = date.add(this.block_size, 'm')) {
                const value = date.valueOf();
                if (slots.find(i => i.start <= value && value < i.end && dayjs__WEBPACK_IMPORTED_MODULE_4__(i.end).diff(date, 'm') >= min_duration)) {
                    this.times.push({ id: date.format('HH:mm'), name: date.format('h:mm A'), value: date.valueOf() });
                }
            }
        }
        else {
            // Get times from now
            if (date.minute() % this.block_size !== 0) {
                this.times.push({ id: date.format('HH:mm'), name: date.format('h:mm A') });
            }
            date = date.minute(Math.ceil(date.minute() / this.block_size) * this.block_size);
            const end = dayjs__WEBPACK_IMPORTED_MODULE_4__(date).add(book_ahead, 'm');
            for (; date.isBefore(end); date = date.add(this.block_size, 'm')) {
                this.times.push({ id: date.format('HH:mm'), name: date.format('h:mm A'), value: date.valueOf() });
            }
        }
        this.updateDisplay();
    }
    /**
     * Update the value of the form field
     * @param value New value
     * @param from_ref Whether new value was generated from a reference field
     */
    setValue(slot, from_ref = false) {
        this.field.setValue(slot.id);
        if (this.date_control && !from_ref) {
            const time = dayjs__WEBPACK_IMPORTED_MODULE_4__(slot.value);
            const date = dayjs__WEBPACK_IMPORTED_MODULE_4__(this.date_control.value)
                .hour(time.hour())
                .minute(time.minute())
                .startOf('m');
            this.date_control.setValue(date.valueOf());
        }
    }
}
_globals_form_fields__WEBPACK_IMPORTED_MODULE_5__["FORM_FIELDS"].time = CustomTimeFieldComponent;


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory */ "./node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-spinners */ "./node_modules/@acaprojects/ngx-spinners/fesm2015/acaprojects-ngx-spinners.js");
/* harmony import */ var _node_modules_acaprojects_ngx_custom_events_acaprojects_ngx_custom_events_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@acaprojects/ngx-custom-events/acaprojects-ngx-custom-events.ngfactory */ "./node_modules/@acaprojects/ngx-custom-events/acaprojects-ngx-custom-events.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _acaprojects_ngx_overlays__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @acaprojects/ngx-overlays */ "./node_modules/@acaprojects/ngx-overlays/fesm2015/acaprojects-ngx-overlays.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm2015/overlay.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _user_search_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user-search-field.component */ "./src/app/shared/components/user-search-field/user-search-field.component.ts");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["custom-user-search-field[_nghost-%COMP%] {\n  width: 100%;\n}\n.user-search[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.searchbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  border: 1px solid #ccc;\n  overflow: hidden;\n  border-radius: 4px;\n}\n.user-list[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  z-index: 99999;\n  max-height: 15.5em;\n  overflow: auto;\n  -webkit-overflow-scrolling: touch;\n}\ninput[_ngcontent-%COMP%] {\n  font-size: 1em;\n  padding: 0.5em;\n  border: none;\n  outline: none;\n  min-width: 50%;\n  flex: 1;\n  border-radius: 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0);\n}\ninput[_ngcontent-%COMP%]:focus {\n  border-bottom: 1px solid #fff;\n}\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.2em;\n  width: 1.2em;\n}\n.spinner[_ngcontent-%COMP%] {\n  margin: 0 0.5em;\n}\na-spinner[_ngcontent-%COMP%] {\n  font-size: 0.25em;\n  width: 4em;\n}\n.item[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  pointer-events: auto;\n  cursor: pointer;\n}\n.item[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.1);\n}\n.item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .item[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.email[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  color: rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3VzZXItc2VhcmNoLWZpZWxkL3VzZXItc2VhcmNoLWZpZWxkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy91c2VyLXNlYXJjaC1maWVsZC91c2VyLXNlYXJjaC1maWVsZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFtQkE7O3dDQUFBO0FBMkJBOztjQUFBO0FBY0E7O3NCQUFBO0FDMURBO0VBQ0ksV0FBQTtBQ1VKO0FEUEE7RUFDSSxXQUFBO0FDVUo7QUROQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNTSjtBRE5BO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtHQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0FDU0o7QUROQTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGdCQUFBO0VBQ0EseUNBQUE7QUNTSjtBRFJJO0VBQ0ksNkJBQUE7QUNVUjtBRE5BO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ1NKO0FETkE7RUFDSSxlQUFBO0FDU0o7QUROQTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQ1NKO0FETkE7RUFDSSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0FDU0o7QURQSTtFQUNJLG9DQUFBO0FDU1I7QUROSTs7RUFFSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUNRUjtBREpBO0VBQ0ksZ0JBQUE7RUFDQSx5QkFBQTtBQ09KIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvdXNlci1zZWFyY2gtZmllbGQvdXNlci1zZWFyY2gtZmllbGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjM2FhNTM3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kd2FybmluZzogI2ZmRDA0ODtcbiR3YXJuaW5nLWxpZ2h0OiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kd2FybmluZy1kYXJrOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yOiAjYWUxOTI4O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgVjEgQXBwbGljYXRpb24gQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzLXYxOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQtdjE6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcmstdjE6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZy12MTogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0LXYxOiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrLXYxOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yLXYxOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0LXYxOiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcmstdjE6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuXG4kY29sb3ItcHJpbWFyeTogI2ZmZjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzFmNDBlNjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG5cbiRmb250LWZhbWlseS1wcmltYXJ5OiBcIk1jS2luc2V5IFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBDYWxpYnJpLCBDb3JiZWwsIEhlbHZldGljYSwgUm9ib3RvLCBEcm9pZCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zZWNvbmRhcnk6IFwiQm93ZXJcIiwgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuXG5jdXN0b20tdXNlci1zZWFyY2gtZmllbGQ6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi51c2VyLXNlYXJjaCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cblxuLnNlYXJjaGJhciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi51c2VyLWxpc3Qge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbiAgICB6LWluZGV4OiA5OTk5OTtcbiAgICBtYXgtaGVpZ2h0OiAxNS41ZW07XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xufVxuXG5pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgcGFkZGluZzogLjVlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgICBmbGV4OiAxO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIzAwMCwgMCk7XG4gICAgJjpmb2N1cyB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiAgICB9XG59XG5cbi5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxLjJlbTtcbiAgICB3aWR0aDogMS4yZW07XG59XG5cbi5zcGlubmVyIHtcbiAgICBtYXJnaW46IDAgLjVlbTtcbn1cblxuYS1zcGlubmVyIHtcbiAgICBmb250LXNpemU6IC4yNWVtO1xuICAgIHdpZHRoOiA0ZW07XG59XG5cbi5pdGVtIHtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIC4xKTtcbiAgICB9XG5cbiAgICAubmFtZSxcbiAgICAuZW1haWwge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG59XG5cbi5lbWFpbCB7XG4gICAgZm9udC1zaXplOiAuNmVtO1xuICAgIGNvbG9yOiByZ2JhKCMwMDAsIC42KTtcbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgVjEgQXBwbGljYXRpb24gQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuY3VzdG9tLXVzZXItc2VhcmNoLWZpZWxkOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnVzZXItc2VhcmNoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zZWFyY2hiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4udXNlci1saXN0IHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBtYXgtaGVpZ2h0OiAxNS41ZW07XG4gIG92ZXJmbG93OiBhdXRvO1xuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG59XG5cbmlucHV0IHtcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIG91dGxpbmU6IG5vbmU7XG4gIG1pbi13aWR0aDogNTAlO1xuICBmbGV4OiAxO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcbn1cbmlucHV0OmZvY3VzIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMS4yZW07XG4gIHdpZHRoOiAxLjJlbTtcbn1cblxuLnNwaW5uZXIge1xuICBtYXJnaW46IDAgMC41ZW07XG59XG5cbmEtc3Bpbm5lciB7XG4gIGZvbnQtc2l6ZTogMC4yNWVtO1xuICB3aWR0aDogNGVtO1xufVxuXG4uaXRlbSB7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLml0ZW06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uaXRlbSAubmFtZSxcbi5pdGVtIC5lbWFpbCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG4uZW1haWwge1xuICBmb250LXNpemU6IDAuNmVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufSJdfQ== */"];



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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _utilities_general_utilities__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var _globals_form_fields__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../globals/form-fields */ "./src/app/shared/globals/form-fields.ts");








class CustomUserSearchFieldComponent extends _base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"] {
    constructor(field, group, service) {
        super();
        this.field = field;
        this.group = group;
        this.service = service;
        /** List of users from an API search */
        this.filtered_list = [];
        /** Subject holding the value of the search */
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    ngOnInit() {
        if (this.group) {
            if (this.field.references && this.field.references.length > 0) {
                const control = this.group.controls[this.field.references[0]];
                if (control) {
                    this.subscription('reference', control.valueChanges.subscribe(() => this.updateDisplay()));
                }
            }
            this.subscription('control', this.field.control.valueChanges.subscribe(() => this.updateDisplay()));
        }
        // Listen for input changes
        this.search_results$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(query => {
            this.searching = true;
            this.show = true;
            return query.length >= 3 ? this.service.Users.query({ q: query.slice(0, 3), cache: 60 * 1000 }) : Promise.resolve([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((err) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(list => {
            this.searching = false;
            return Object(_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_6__["filterList"])(this.search_str, list, ['name', 'email']);
        }));
        // Process API results
        this.search_results$.subscribe(list => {
            this.filtered_list = list;
            this.filtered_list.forEach((i) => {
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
    search(filter) {
        this.search_str = filter;
        this.search$.next(filter);
    }
    /**
     * Update input display string
     */
    updateDisplay() {
        const value = this.field.control.value;
        this.search_str = value ? value.name : '';
    }
    /**
     * Reset the display value for the search input
     */
    reset() {
        this.timeout('reset', () => {
            const value = this.field.control.value;
            this.search_str = value ? value.name : '';
            this.show = false;
        });
    }
    /**
     * Set the active user
     * @param user New active user
     */
    select(user) {
        if (user) {
            this.field.setValue(user);
        }
        this.timeout('hide', () => {
            this.show = false;
        }, 100);
    }
}
_globals_form_fields__WEBPACK_IMPORTED_MODULE_7__["FORM_FIELDS"].host = CustomUserSearchFieldComponent;


/***/ }),

/***/ "./src/app/shared/directives/binding/binding.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/binding/binding.directive.ts ***!
  \****************************************************************/
/*! exports provided: BindingDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BindingDirective", function() { return BindingDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");


class BindingDirective {
    constructor(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        /** Index of the system to bind */
        this.index = 1;
        /** ID of the system to bind to */
        this.params = [];
        /** Emitter for changes to the value of the binding */
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.init_listener = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["onlineState"])().subscribe(init => {
            if (init) {
                this.bindVariable();
                if (this.init_listener) {
                    this.init_listener.unsubscribe();
                    this.init_listener = null;
                }
            }
        });
    }
    ngOnDestroy() {
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
    ngOnChanges(changes) {
        if (changes.sys || changes.mod || changes.bind) {
            this.ngOnDestroy();
            this.bindVariable();
        }
        if (changes.on_event && this.on_event) {
            if (this.event_listener) {
                this.event_listener();
                this.event_listener = null;
            }
            this.event_listener = this._renderer.listen(this._element.nativeElement, this.on_event, () => this.execute());
        }
    }
    /** Bind to set status variable */
    bindVariable() {
        if (Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["authority"])() && this.bind && this.sys && this.mod) {
            const module = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["getModule"])(this.sys, this.mod, this.index);
            const binding = module.binding(this.bind);
            this.unbind = binding.bind();
            this.listener = binding.listen().subscribe(value => setTimeout(() => {
                this.model = value;
                this.modelChange.emit(this.model);
            }, 10));
        }
    }
    /** Excute the set method on the module */
    execute() {
        if (Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["authority"])() && this.exec && this.sys && this.mod) {
            const module = Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_1__["getModule"])(this.sys, this.mod, this.index);
            module.execute(this.exec, this.params).then(result => {
                // Emit exec result if not bound to status variable
                if (!this.bind) {
                    this.model = result;
                    this.modelChange.emit(this.model);
                }
            });
        }
    }
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    writeValue(value) {
        this.model = value;
        this.modelChange.emit(this.model);
        if (this.exec) {
            this.execute();
        }
    }
}


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
const version = 'local-dev';
/** Version number of the base application */
const core_version = '1.0.0';
/** Build time of the application */
const build = dayjs__WEBPACK_IMPORTED_MODULE_0__();


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
const FORM_FIELDS = {};


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
const OVERLAY_REGISTER = [];


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
/* harmony import */ var _placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @placeos/ts-client */ "./node_modules/@placeos/ts-client/dist/esm/index.js");
/* harmony import */ var _services_data_spaces_space_utilities__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data/spaces/space.utilities */ "./src/app/services/data/spaces/space.utilities.ts");
/* harmony import */ var _services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data/bookings/booking.utilities */ "./src/app/services/data/bookings/booking.utilities.ts");
/* harmony import */ var _services_data_users_user_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/data/users/user.utilities */ "./src/app/services/data/users/user.utilities.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);





const LETTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
const NUMBERS = '0123456789'.split('');
let index = 0;
const SPACE_LIST = [];
const IMAGES = ['large_down', 'large_up', 'small_down', 'small_up'];
/**
 * Create mock engine booking module with appropriate bookings and space data
 */
function createSystem() {
    const id = `sys-${LETTERS[Math.floor(index / NUMBERS.length)]}${NUMBERS[(index++) % NUMBERS.length]}`;
    Object(_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_2__["setMockBookingStartDatetime"])(dayjs__WEBPACK_IMPORTED_MODULE_4__().minute(-50).valueOf());
    const space = Object(_services_data_spaces_space_utilities__WEBPACK_IMPORTED_MODULE_1__["generateMockSpace"])({ id });
    SPACE_LIST.push(space);
    const bindings = {
        touch_enabled: true,
        timeout: 300,
        cancel_timeout: 600,
        has_catering: true,
        control_url: 'https://aca.im/demo/aca/control/',
        icon: `/assets/img/${IMAGES[Math.floor(Math.random() * IMAGES.length)]}.png`
    };
    const system = {
        id, name: space.name,
        Bookings: []
    };
    system.Bookings.push(Object.assign(Object.assign({}, bindings), { room_name: space.name, today: space.bookings, reload: dayjs__WEBPACK_IMPORTED_MODULE_4__().add(1, 'h').unix(), $start_meeting: (time) => {
            system.Bookings[0].last_meeting_started = time;
        }, $cancel_meeting: (time, reason) => {
            const list = system.Bookings[0].today;
            system.Bookings[0].today = list.filter(i => i.date !== time);
        }, $waiter_call: () => {
            console.log(`[MOCK][${id}] Waiter called...`);
        } }));
    return system;
}
const ɵ0 = i => createSystem();
const MOCK_SYSTEMS = Array(10).fill(0).map(ɵ0);
for (const system of MOCK_SYSTEMS) {
    Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerSystem"])(system.id, system);
}
const ɵ1 = i => Object(_services_data_users_user_utilities__WEBPACK_IMPORTED_MODULE_3__["generateMockUser"])();
// Add mock data for API endpoints
const USER_LIST = Array(1000).fill(0).map(ɵ1);
const ɵ2 = _ => ({ total: 10, results: MOCK_SYSTEMS }), ɵ3 = _ => SPACE_LIST, ɵ4 = _ => USER_LIST, ɵ5 = _ => USER_LIST[0], ɵ6 = _ => ({ total: 1, results: [{ id: 'zone_org-1' }] });
const handlers = [
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
for (const handler of handlers) {
    Object(_placeos_ts_client__WEBPACK_IMPORTED_MODULE_0__["registerMockEndpoint"])(handler);
}



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _components_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/user-search-field/user-search-field.component */ "./src/app/shared/components/user-search-field/user-search-field.component.ts");
/* harmony import */ var _components_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/time-field/time-field.component */ "./src/app/shared/components/time-field/time-field.component.ts");
/* harmony import */ var _components_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/duration-field/duration-field.component */ "./src/app/shared/components/duration-field/duration-field.component.ts");
/* harmony import */ var _directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/binding/binding.directive */ "./src/app/shared/directives/binding/binding.directive.ts");






const COMPONENTS = [
    _base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"],
    _directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_5__["BindingDirective"]
];
const ENTRY_COMPONENT = [
    _components_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_2__["CustomUserSearchFieldComponent"],
    _components_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_3__["CustomTimeFieldComponent"],
    _components_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_4__["CustomDurationFieldComponent"]
];
class SharedContentModule {
}


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
    let str = '';
    if (map) {
        for (const key in map) {
            if (map.hasOwnProperty(key) && map[key] !== undefined && map[key] !== null) {
                str += `${(str ? '&' : '')}${key}=${map[key]}`;
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
    return (l) => formatAttendees(l, host);
}
/**
 * Create formatted string from a list of users
 * @param list List of users
 * @param host Owner of the list of users
 */
function formatAttendees(list, host) {
    let attendee_str = '';
    if (list && list.length > 0) {
        const users = [...list];
        if (host) {
            const result = users.find(a => a.email === host.email);
            if (result) {
                users.splice(users.indexOf(result), 1);
            }
        }
        const length = users.length + (host ? 1 : 0);
        attendee_str = `${length} Attendee${length === 1 ? '' : 's'}; ${host ? host.name : ''}`;
        for (const item of users) {
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
    return (t) => formatPeriod(t, duration);
}
/**
 * Create formatted string for a period of given duration
 * @param timestamp Start hours and minutes of the period in the format `HH:mm`
 * @param duration Period duration in minutes
 */
function formatPeriod(timestamp, duration = 60) {
    const parts = timestamp.split(':');
    const date = dayjs__WEBPACK_IMPORTED_MODULE_1__().hour(+parts[0]).minute(+parts[1]);
    return `${date.format('h:mm A')} - ${date.add(duration, 'm').format('h:mm A')} (${Object(_general_utilities__WEBPACK_IMPORTED_MODULE_0__["humaniseDuration"])(duration)})`;
}
/**
 * Create formatted human readable string for a given duration
 * @param duration Duration in minutes
 */
function formatDuration(duration) {
    return Object(_general_utilities__WEBPACK_IMPORTED_MODULE_0__["humaniseDuration"])(duration);
}
/** Human readable names of applicable recurrence periods */
const RECURRENCE_PERIODS = ['None', 'Daily', 'Weekly', 'Monthly', 'Yearly'];
/**
 * Create human readable string for recurrence metadata
 * @param value
 */
function formatRecurrence(value) {
    if (!value || !value.period || value.period >= RECURRENCE_PERIODS.length) {
        return 'No recurrence';
    }
    const period = typeof value.period === 'string' ? value.period : RECURRENCE_PERIODS[value.period];
    const end = value.end ? `until ${dayjs__WEBPACK_IMPORTED_MODULE_1__(value.end).format('DD MMM YYYY')}` : 'forever';
    return `${period} ${end}`;
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
        return list.length === 1 ? list[0].name : `${list.length} Space${list.length !== 1 ? 's' : ''}`;
    }
    else {
        const capacity = list.capacity ? '(' + list.capacity + ' ' + (list.capacity === 1 ? 'person' : 'people') + ')' : '';
        return `${list.name} ${capacity}`;
    }
}


/***/ }),

/***/ "./src/app/shared/utilities/general.utilities.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/utilities/general.utilities.ts ***!
  \*******************************************************/
/*! exports provided: log, predictableRandomInt, getItemWithKeys, isMobileDevice, isMobileSafari, isAndroidChrome, padZero, unique, humaniseDuration, filterList, matchToHighlight, timeToDate, flatten */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "predictableRandomInt", function() { return predictableRandomInt; });
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flatten", function() { return flatten; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Log data to the browser console
 * @param type Type of message
 * @param msg Message body
 * @param args array of argments to log to the console
 * @param stream Stream to emit the console on. 'debug', 'log', 'warn' or 'error'
 * @param force Whether to force message to be emitted when debug is disabled
 */
function log(type, msg, args, stream = 'debug', force = false, app_name = 'STAFF') {
    if (window.debug || force) {
        const colors = ['color: #E91E63', 'color: #3F51B5', 'color: default'];
        if (args) {
            console[stream](`%c[${app_name}]%c[${type}] %c${msg}`, ...colors, args);
        }
        else {
            console[stream](`%c[${app_name}]%c[${type}] %c${msg}`, ...colors);
        }
    }
}
const seed = xmur3('PlaceOS');
const rand = sfc32(0x9e3779b9, 0x243f6a88, 0xb7e15162, seed());
function predictableRandomInt(ceil = 100, floor = 0) {
    return Math.floor(rand() * (ceil - floor)) + floor;
}
function getItemWithKeys(keys, map) {
    const key = keys.shift();
    if (map[key]) {
        return keys.length > 0 ? getItemWithKeys(keys, map[key]) : map[key];
    }
    return null;
}
/**
 * Checks whether the platform is a mobile device.
 */
function isMobileDevice() {
    const r = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return !!navigator.userAgent.match(r);
}
/**
 * Checks whether the browser is Mobile Safari.
 */
function isMobileSafari() {
    const agent = navigator.userAgent;
    return !!(agent.match(/iPhone|iPad|iPod/) && agent.match(/AppleWebKit/) && !agent.match('CriOS'));
}
/**
 * Checks whether the browser is Android Chrome.
 */
function isAndroidChrome() {
    const agent = navigator.userAgent;
    return !!(agent.match(/Android/) && agent.match(/Chrome/));
}
/**
 * Generate string representation of a number with zeros padding the length
 * @param value Number to pad with zeros
 * @param length Length of the resulting string
 */
function padZero(value, length) {
    let str = value.toString();
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
function unique(array, key = '') {
    return array.filter((el, pos, arr) => arr.indexOf(key ? arr.find(i => i[key] === el[key]) : arr.find(i => i === el)) === pos);
}
/**
 * Convert duration to human readable string
 * @param duration Duration in minutes
 * @param short Whether to use short form of duration words e.g. hours as h
 */
function humaniseDuration(duration, short = false) {
    if (!duration || duration < 0) {
        return '';
    }
    const h = Math.floor(duration / 60);
    let d = `${h >= 1 ? (h + (short ? 'h' : (' hour' + (h === 1 ? '' : 's')))) : ''}`;
    if (duration % 60 !== 0) {
        if (d) {
            d += short ? ' ' : ', ';
        }
        const m = duration % 60;
        d += `${m >= 1 ? (m + (short ? 'm' : (' minute' + (m === 1 ? '' : 's')))) : ''}`;
    }
    return d;
}
/**
 * Get a filtered list of items
 * @param filter Value to filter on
 * @param items List of results to filter
 * @param fields Fields to check for matches on each item
 */
function filterList(filter, items, fields = ['id']) {
    let results;
    // Tokenise filter string
    const filters = (filter || '').toLowerCase().split(' ');
    const list = {};
    for (const f of filters) {
        if (f) {
            if (!list[f]) {
                list[f] = 0;
            }
            list[f]++;
        }
    }
    // Group similar tokens
    const parts = [];
    for (const f in list) {
        if (list.hasOwnProperty(f)) {
            parts.push({ word: f, count: list[f], regex: new RegExp(f, 'gi') });
        }
    }
    parts.sort((a, b) => b.word.length - a.word.length || a.word.localeCompare(b.word));
    const item_list = JSON.parse(JSON.stringify(items || []));
    if (filter) {
        results = item_list.filter((item) => {
            let match_count = 0;
            item.match_index = 65535;
            item.match = '';
            const field_list = {};
            // Initialise field match variables
            for (const f of fields) {
                field_list[f] = {
                    value: (item[f] || '').toLowerCase(),
                    index: 65536,
                    matched: 0
                };
            }
            // Search for matches with the tokenised filter string
            for (const i of parts) {
                if (i.word) {
                    // Check fields for matches
                    for (const f of fields) {
                        const field = field_list[f];
                        const index = field.value.indexOf(i.word);
                        field.index = index < field.index ? index : field.index;
                        field.matches = (field.value.match(i.regex) || []).length;
                        field.value = field.value.replace(i.regex, ' ');
                    }
                    // Update token match count
                    for (const f of fields) {
                        const field = field_list[f];
                        if (field.matches >= i.count) {
                            match_count++;
                            // Update field matches
                            let changed = 0;
                            const tokens = (item[`match_${f}`] || item[f] || '').split(' ');
                            for (const k of tokens) {
                                if (changed >= i.count) {
                                    break;
                                }
                                if (k.toLowerCase().indexOf(i.word) >= 0 && k.indexOf('`') < 0) {
                                    tokens[tokens.indexOf(k)] = k.replace(i.regex, '`$&`');
                                    changed++;
                                }
                            }
                            item[`match_${f}`] = tokens.join(' ');
                            break;
                        }
                    }
                }
            }
            // Get field with the most relevent match
            for (const f of fields) {
                const field = field_list[f];
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
    results.sort((a, b) => {
        const diff = a.match_index - b.match_index;
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
    const parts = (time || '').split(':');
    const date = dayjs__WEBPACK_IMPORTED_MODULE_0__().hour(+parts[0]).minute(+parts[1]).startOf('m');
    return date.valueOf();
}
/* istanbul ignore next */
/**
 * Flatten nested array
 * @param an_array Array to flatten
 */
function flatten(an_array) {
    const stack = [...an_array];
    const res = [];
    while (stack.length) {
        // pop value from stack
        const next = stack.pop();
        if (next instanceof Array) {
            // push back array items, won't modify the original input
            stack.push(...next);
        }
        else {
            res.push(next);
        }
    }
    // reverse to restore input order
    return res.reverse();
}
// https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
function xmur3(str) {
    for (var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
        (h = Math.imul(h ^ str.charCodeAt(i), 3432918353)), (h = (h << 13) | (h >>> 19));
    return function () {
        h = Math.imul(h ^ (h >>> 16), 2246822507);
        h = Math.imul(h ^ (h >>> 13), 3266489909);
        return (h ^= h >>> 16) >>> 0;
    };
}
function sfc32(a, b, c, d) {
    return function () {
        a >>>= 0;
        b >>>= 0;
        c >>>= 0;
        d >>>= 0;
        var t = (a + b) | 0;
        a = b ^ (b >>> 9);
        b = (c + (c << 3)) | 0;
        c = (c << 21) | (c >>> 11);
        d = (d + 1) | 0;
        t = (t + d) | 0;
        c = (c + t) | 0;
        return (t >>> 0) / 4294967296;
    };
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

const HAS_ERROR = true;
/**
 * Check that control value is a date that is the same or after from date
 * @param control Angular form control
 * @param is_from Comparison date(ms from UTC epoch). Defaults to the current time
 */
function validateDate(control, is_from = dayjs__WEBPACK_IMPORTED_MODULE_0__().valueOf()) {
    const from = dayjs__WEBPACK_IMPORTED_MODULE_0__(is_from);
    const date = dayjs__WEBPACK_IMPORTED_MODULE_0__(control.value || undefined);
    return date.isBefore(from, 'd') ? { date: HAS_ERROR, message: 'Booking needs to be made in the future' } : null;
}
/**
 * Build start time validation function
 * @param date Date of the time to check
 * @param is_from Comparison date(ms from UTC epoch). Defaults to the current time
 */
function buildValidateStartTime(date, is_from = dayjs__WEBPACK_IMPORTED_MODULE_0__().valueOf()) {
    return (c) => validateStartTime(c, date, is_from);
}
/**
 * Check that control value time is after the comparison date time
 * @param control Angular form control
 * @param date Date of the time to check
 * @param is_from Comparison date(ms from UTC epoch). Defaults to the current time
 */
function validateStartTime(control, date, is_from = dayjs__WEBPACK_IMPORTED_MODULE_0__().valueOf()) {
    const now = dayjs__WEBPACK_IMPORTED_MODULE_0__(is_from);
    const parts = control.value.split(':');
    const date_obj = dayjs__WEBPACK_IMPORTED_MODULE_0__(date).hour(+parts[0]).minute(+parts[1]);
    return date_obj.isBefore(now, 'm') ? { start: HAS_ERROR, message: 'Booking time needs to be made in the future' } : null;
}
function buildValidateDuration(min = 30, max = 240) {
    return (c) => validateDuration(c, min, max);
}
function validateDuration(control, min = 30, max = 240) {
    if (control.value < (min || 30)) {
        return { duration: HAS_ERROR, message: `Minimum booking duration is ${min} minute${min === 1 ? 's' : ''}` };
    }
    else if (control.value > (max || 480)) {
        return { length: HAS_ERROR, message: `Maximum booking duration is ${max} minute${max === 1 ? 's' : ''}` };
    }
    return null;
}
function buildValidateAttendees(host, min = 0) {
    return (c) => validateAttendees(c, host, min);
}
function validateAttendees(control, host, min = 0) {
    if (!control || !(control.value instanceof Array)) {
        return min > 0
            ? { invalid: true, message: `Minimum of ${min} attendee${min === 1 ? ' is' : 's are'} required other than you` }
            : null;
    }
    const list = control.value;
    if (host) {
        const result = list.find(a => a.email === host.email);
        if (result) {
            list.splice(list.indexOf(result), 1);
        }
    }
    return list.length >= min ? null : {
        count: true,
        message: `Minimum of ${min} attendee${min === 1 ? ' is' : 's are'} required other than you`
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_acaprojects_ngx_custom_events_acaprojects_ngx_custom_events_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-custom-events/acaprojects-ngx-custom-events.ngfactory */ "./node_modules/@acaprojects/ngx-custom-events/acaprojects-ngx-custom-events.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _node_modules_acaprojects_ngx_dropdown_acaprojects_ngx_dropdown_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory */ "./node_modules/@acaprojects/ngx-dropdown/acaprojects-ngx-dropdown.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acaprojects/ngx-dropdown */ "./node_modules/@acaprojects/ngx-dropdown/fesm2015/acaprojects-ngx-dropdown.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory */ "./node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acaprojects/ngx-spinners */ "./node_modules/@acaprojects/ngx-spinners/fesm2015/acaprojects-ngx-spinners.js");
/* harmony import */ var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */ "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
/* harmony import */ var _bootstrap_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./bootstrap.component */ "./src/app/shell/bootstrap/bootstrap.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".bootstrap[_ngcontent-%COMP%] {\n  position: fixed;\n  display: flex;\n  justify-content: center;\n  z-index: 99;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #f0f0f0;\n  background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%23ddd' fill-opacity='1' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\");\n}\n.options[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  overflow: hidden;\n  width: 26em;\n  max-width: 95vw;\n  margin: 1em 1em auto 1em;\n}\n.header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: #b71c1c;\n  color: #fff;\n  padding: 0.5em;\n}\nh1[_ngcontent-%COMP%] {\n  font-size: 1em;\n  margin: 0;\n  padding: 0;\n  font-weight: 300;\n}\n.toggle[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 50%;\n  right: 0.5em;\n  width: 1.2em;\n  height: 1.2em;\n  transform: translateY(-50%);\n  font-size: 1.2em;\n  border-radius: 100%;\n  margin: 0;\n}\n.description[_ngcontent-%COMP%] {\n  text-align: center;\n}\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n  font-size: 0.8em;\n}\na-dropdown[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5em;\n}\n.input[_ngcontent-%COMP%] {\n  position: relative;\n}\n.input.focus[_ngcontent-%COMP%]   .placeholder[_ngcontent-%COMP%] {\n  top: 0;\n  font-size: 0.6em;\n}\n.placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0.5rem;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 1em;\n  transform: translateY(-50%);\n  transition: top 200ms, font-size 200ms, color 200ms;\n  background-color: #fff;\n  border-radius: 4px;\n  padding: 4px;\n  pointer-events: none;\n}\n.placeholder.focus[_ngcontent-%COMP%] {\n  color: #1f40e6;\n}\n.info-block[_ngcontent-%COMP%] {\n  min-height: 7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL2Jvb3RzdHJhcC9ib290c3RyYXAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL2Jvb3RzdHJhcC9ib290c3RyYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBbUJBOzt3Q0FBQTtBQTJCQTs7Y0FBQTtBQWNBOztzQkFBQTtBQzFEQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EscWlCQUFBO0FDVUo7QURQQTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrR0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ1VKO0FEUEE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ1VKO0FEUEE7RUFDSSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtBQ1VKO0FEUEE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNVSjtBRFBBO0VBQ0ksa0JBQUE7QUNVSjtBRFBBO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FDVUo7QURQQTtFQUNJLFdBQUE7QUNVSjtBRFBBO0VBQ0ksWUFBQTtBQ1VKO0FEUEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUNVSjtBRFBBO0VBQ0ksa0JBQUE7QUNVSjtBRFJRO0VBQ0ksTUFBQTtFQUNBLGdCQUFBO0FDVVo7QURMQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLG1EQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtBQ1FKO0FEUEk7RUFDSSxjRGhFVTtBRXlFbEI7QURMQTtFQUNJLGVBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2Jvb3RzdHJhcC9ib290c3RyYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjM2FhNTM3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kd2FybmluZzogI2ZmRDA0ODtcbiR3YXJuaW5nLWxpZ2h0OiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kd2FybmluZy1kYXJrOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yOiAjYWUxOTI4O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgVjEgQXBwbGljYXRpb24gQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzLXYxOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQtdjE6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcmstdjE6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZy12MTogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0LXYxOiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrLXYxOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yLXYxOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0LXYxOiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcmstdjE6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuXG4kY29sb3ItcHJpbWFyeTogI2ZmZjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzFmNDBlNjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG5cbiRmb250LWZhbWlseS1wcmltYXJ5OiBcIk1jS2luc2V5IFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBDYWxpYnJpLCBDb3JiZWwsIEhlbHZldGljYSwgUm9ib3RvLCBEcm9pZCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zZWNvbmRhcnk6IFwiQm93ZXJcIiwgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uYm9vdHN0cmFwIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA5OTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zycgd2lkdGg9JzI4JyBoZWlnaHQ9JzQ5JyB2aWV3Qm94PScwIDAgMjggNDknJTNFJTNDZyBmaWxsLXJ1bGU9J2V2ZW5vZGQnJTNFJTNDZyBpZD0naGV4YWdvbnMnIGZpbGw9JyUyM2RkZCcgZmlsbC1vcGFjaXR5PScxJyBmaWxsLXJ1bGU9J25vbnplcm8nJTNFJTNDcGF0aCBkPSdNMTMuOTkgOS4yNWwxMyA3LjV2MTVsLTEzIDcuNUwxIDMxLjc1di0xNWwxMi45OS03LjV6TTMgMTcuOXYxMi43bDEwLjk5IDYuMzQgMTEtNi4zNVYxNy45bC0xMS02LjM0TDMgMTcuOXpNMCAxNWwxMi45OC03LjVWMGgtMnY2LjM1TDAgMTIuNjl2Mi4zem0wIDE4LjVMMTIuOTggNDF2OGgtMnYtNi44NUwwIDM1Ljgxdi0yLjN6TTE1IDB2Ny41TDI3Ljk5IDE1SDI4di0yLjMxaC0uMDFMMTcgNi4zNVYwaC0yem0wIDQ5di04bDEyLjk5LTcuNUgyOHYyLjMxaC0uMDFMMTcgNDIuMTVWNDloLTJ6Jy8lM0UlM0MvZyUzRSUzQy9nJTNFJTNDL3N2ZyUzRVwiKTtcbn1cblxuLm9wdGlvbnMge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdpZHRoOiAyNmVtO1xuICAgIG1heC13aWR0aDogOTV2dztcbiAgICBtYXJnaW46IDFlbSAxZW0gYXV0byAxZW07XG59XG5cbi5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I3MWMxYztcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAuNWVtO1xufVxuXG5oMSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnRvZ2dsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogLjVlbTtcbiAgICB3aWR0aDogMS4yZW07XG4gICAgaGVpZ2h0OiAxLjJlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbnAge1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgZm9udC1zaXplOiAuOGVtO1xufVxuXG5hLWRyb3Bkb3duIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmJvZHkge1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IC41ZW07XG59XG5cbi5pbnB1dCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICYuZm9jdXMge1xuICAgICAgICAucGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuNmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucGxhY2Vob2xkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAuNXJlbTtcbiAgICBjb2xvcjogcmdiYSgkZm9udC1kYXJrLCAuNik7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRyYW5zaXRpb246IHRvcCAyMDBtcywgZm9udC1zaXplIDIwMG1zLCBjb2xvciAyMDBtcztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiA0cHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgJi5mb2N1cyB7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuICAgIH1cbn1cblxuLmluZm8tYmxvY2sge1xuICAgIG1pbi1oZWlnaHQ6IDdlbTtcbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgVjEgQXBwbGljYXRpb24gQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmJvb3RzdHJhcCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0NzdmcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB3aWR0aD0nMjgnIGhlaWdodD0nNDknIHZpZXdCb3g9JzAgMCAyOCA0OSclM0UlM0NnIGZpbGwtcnVsZT0nZXZlbm9kZCclM0UlM0NnIGlkPSdoZXhhZ29ucycgZmlsbD0nJTIzZGRkJyBmaWxsLW9wYWNpdHk9JzEnIGZpbGwtcnVsZT0nbm9uemVybyclM0UlM0NwYXRoIGQ9J00xMy45OSA5LjI1bDEzIDcuNXYxNWwtMTMgNy41TDEgMzEuNzV2LTE1bDEyLjk5LTcuNXpNMyAxNy45djEyLjdsMTAuOTkgNi4zNCAxMS02LjM1VjE3LjlsLTExLTYuMzRMMyAxNy45ek0wIDE1bDEyLjk4LTcuNVYwaC0ydjYuMzVMMCAxMi42OXYyLjN6bTAgMTguNUwxMi45OCA0MXY4aC0ydi02Ljg1TDAgMzUuODF2LTIuM3pNMTUgMHY3LjVMMjcuOTkgMTVIMjh2LTIuMzFoLS4wMUwxNyA2LjM1VjBoLTJ6bTAgNDl2LThsMTIuOTktNy41SDI4djIuMzFoLS4wMUwxNyA0Mi4xNVY0OWgtMnonLyUzRSUzQy9nJTNFJTNDL2clM0UlM0Mvc3ZnJTNFXCIpO1xufVxuXG4ub3B0aW9ucyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogMjZlbTtcbiAgbWF4LXdpZHRoOiA5NXZ3O1xuICBtYXJnaW46IDFlbSAxZW0gYXV0byAxZW07XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjcxYzFjO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbmgxIHtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnRvZ2dsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRvcDogNTAlO1xuICByaWdodDogMC41ZW07XG4gIHdpZHRoOiAxLjJlbTtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxucCB7XG4gIG1hcmdpbi10b3A6IDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbmEtZHJvcGRvd24ge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmJvZHkge1xuICBwYWRkaW5nOiAxZW07XG59XG5cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi5pbnB1dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5pbnB1dC5mb2N1cyAucGxhY2Vob2xkZXIge1xuICB0b3A6IDA7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDAuNXJlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgZm9udC1zaXplOiAxZW07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdHJhbnNpdGlvbjogdG9wIDIwMG1zLCBmb250LXNpemUgMjAwbXMsIGNvbG9yIDIwMG1zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4ucGxhY2Vob2xkZXIuZm9jdXMge1xuICBjb2xvcjogIzFmNDBlNjtcbn1cblxuLmluZm8tYmxvY2sge1xuICBtaW4taGVpZ2h0OiA3ZW07XG59Il19 */"];



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





class BootstrapComponent extends _shared_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"] {
    constructor(service, route) {
        super();
        this.service = service;
        this.route = route;
        /** List of available systems */
        this.system_list = [];
        /** Selected system to bootstrap */
        this.selected_system = null;
        // ensure app is trusted in dev mode so we can preserve login.
        if (!_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
            localStorage.setItem('trusted', 'true');
        }
    }
    ngOnInit() {
        this.loading = true;
        this.service.Spaces.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(_ => _)).subscribe(() => {
            this.subscription('route.query', this.route.queryParamMap.subscribe((params) => {
                if (params.has('clear') && params.get('clear')) {
                    this.clearBootstrap();
                }
                if (params.has('system_id') || params.has('sys_id')) {
                    this.system_id = params.get('system_id') || params.get('sys_id');
                    this.manual_input = true;
                    this.bootstrap();
                }
            }));
            this.subscription('system_list', this.service.Systems.systems.subscribe((systems) => {
                this.system_list = systems || [];
                this.manual_input = !this.system_list || this.system_list.length <= 0;
                this.loading = false;
            }));
            this.checkBootstrapped();
        });
    }
    /**
     * Setup the default system for the application to bind to
     */
    bootstrap() {
        if (this.manual_input && this.system_id) {
            this.configure(this.system_id);
        }
        else if (this.selected_system) {
            this.configure(this.selected_system.id);
        }
    }
    /**
     * Check if the application has previously been bootstrapped
     */
    checkBootstrapped() {
        if (localStorage) {
            const system_id = localStorage.getItem('ACA.PANEL.system') || localStorage.getItem('ACA.CONTROL.system');
            if (system_id) {
                this.service.log('BOOT', `Already bootstrapped, redirecting to ${system_id}...`);
                this.service.navigate(['panel', system_id]);
                return;
            }
        }
        const user = this.service.Users.current;
        if (user && user.email) {
            const space = this.service.Spaces.item(user.email);
            if (space) {
                this.service.log('BOOT', `Bootstrapped as user, redirecting to ${space.id}...`);
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
    configure(system_id) {
        this.service.log('BOOT', `Bootstrapping system ${system_id}...`);
        if (localStorage) {
            localStorage.setItem('ACA.PANEL.system', system_id);
        }
        this.service.navigate(['panel', system_id]);
    }
    /**
     * Remove any previously set bootstrapping details
     */
    clearBootstrap() {
        if (localStorage) {
            localStorage.removeItem('ACA.PANEL.system');
        }
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../panel/panel.component.ngfactory */ "./src/app/shell/panel/panel.component.ngfactory.js");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../panel/panel.component */ "./src/app/shell/panel/panel.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _panel_array_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./panel-array.component */ "./src/app/shell/panel-array/panel-array.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".panel-array[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.panel-outlet[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  border: 1px solid #fff;\n  min-width: 40%;\n}\n.container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: linear-gradient(135deg, #051c2c, #0a2247, #0a2247, #1e3cd8);\n  background-image: url(\"data:image/svg+xml,%3Csvg width='24' height='20' viewBox='0 0 24 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 18c0-1.105.887-2 1.998-2 1.104 0 2-.895 2.002-1.994V14v6h-4v-2zM0 13.998C0 12.895.888 12 2 12c1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2 .888 2 2v2H0v-6.002zm16 4.004A1.994 1.994 0 0 1 14 20c-1.105 0-2-.887-2-1.998v-4.004A1.994 1.994 0 0 0 10 12c-1.105 0-2-.888-2-2 0-1.105-.888-2-2-2-1.105 0-2-.887-2-1.998V1.998A1.994 1.994 0 0 0 2 0a2 2 0 0 0-2 2V0h8v2c0 1.105.888 2 2 2 1.105 0 2 .888 2 2 0 1.105.888 2 2 2 1.105 0 2-.888 2-2 0-1.105.888-2 2-2 1.105 0 2-.888 2-2V0h4v6.002A1.994 1.994 0 0 1 22 8c-1.105 0-2 .888-2 2 0 1.105-.888 2-2 2-1.105 0-2 .887-2 1.998v4.004z' fill='%23ffffff' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E\");\n  color: #fff;\n}\n.logo[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\nimg[_ngcontent-%COMP%] {\n  max-width: 12em;\n}\n.time[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsLWFycmF5L3BhbmVsLWFycmF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9wYW5lbC1hcnJheS9wYW5lbC1hcnJheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFtQkE7O3dDQUFBO0FBMkJBOztjQUFBO0FBY0E7O3NCQUFBO0FDMURBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDVUo7QURQQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ1VKO0FEUEE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZFRGNTO0VDYlQsc3hCQUFBO0VBQ0EsV0QzQlM7QUVxQ2I7QURQQTtFQUNJLGtCQUFBO0FDVUo7QURQQTtFQUNJLGVBQUE7QUNVSjtBRFBBO0VBQ0ksZ0JBQUE7QUNVSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3BhbmVsLWFycmF5L3BhbmVsLWFycmF5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzNhYTUzNztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHdhcm5pbmc6ICNmZkQwNDg7XG4kd2FybmluZy1saWdodDogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHdhcm5pbmctZGFyazogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvcjogI2FlMTkyODtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFYxIEFwcGxpY2F0aW9uIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2Vzcy12MTogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0LXYxOiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrLXYxOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmctdjE6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodC12MTogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHBlbmRpbmctZGFyay12MTogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvci12MTogI2U1MzkzNTtcbiRlcnJvci1saWdodC12MTogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrLXYxOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kZm9udC1mYW1pbHktcHJpbWFyeTogXCJNY0tpbnNleSBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQ2FsaWJyaSwgQ29yYmVsLCBIZWx2ZXRpY2EsIFJvYm90bywgRHJvaWQsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBcIkJvd2VyXCIsIEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIgc2VyaWY7XG5cbiRiYXNlLXNpemU6IDIwcHg7XG4kdGFibGV0LXNpemU6IDIwcHg7XG4kbW9iaWxlLXNpemU6IDIwcHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLnBhbmVsLWFycmF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5wYW5lbC1vdXRsZXQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiAxO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG4gICAgbWluLXdpZHRoOiA0MCU7XG59XG5cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLCUzQ3N2ZyB3aWR0aD0nMjQnIGhlaWdodD0nMjAnIHZpZXdCb3g9JzAgMCAyNCAyMCcgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyUzRSUzQ3BhdGggZD0nTTIwIDE4YzAtMS4xMDUuODg3LTIgMS45OTgtMiAxLjEwNCAwIDItLjg5NSAyLjAwMi0xLjk5NFYxNHY2aC00di0yek0wIDEzLjk5OEMwIDEyLjg5NS44ODggMTIgMiAxMmMxLjEwNSAwIDIgLjg4OCAyIDIgMCAxLjEwNS44ODggMiAyIDIgMS4xMDUgMCAyIC44ODggMiAydjJIMHYtNi4wMDJ6bTE2IDQuMDA0QTEuOTk0IDEuOTk0IDAgMCAxIDE0IDIwYy0xLjEwNSAwLTItLjg4Ny0yLTEuOTk4di00LjAwNEExLjk5NCAxLjk5NCAwIDAgMCAxMCAxMmMtMS4xMDUgMC0yLS44ODgtMi0yIDAtMS4xMDUtLjg4OC0yLTItMi0xLjEwNSAwLTItLjg4Ny0yLTEuOTk4VjEuOTk4QTEuOTk0IDEuOTk0IDAgMCAwIDIgMGEyIDIgMCAwIDAtMiAyVjBoOHYyYzAgMS4xMDUuODg4IDIgMiAyIDEuMTA1IDAgMiAuODg4IDIgMiAwIDEuMTA1Ljg4OCAyIDIgMiAxLjEwNSAwIDItLjg4OCAyLTIgMC0xLjEwNS44ODgtMiAyLTIgMS4xMDUgMCAyLS44ODggMi0yVjBoNHY2LjAwMkExLjk5NCAxLjk5NCAwIDAgMSAyMiA4Yy0xLjEwNSAwLTIgLjg4OC0yIDIgMCAxLjEwNS0uODg4IDItMiAyLTEuMTA1IDAtMiAuODg3LTIgMS45OTh2NC4wMDR6JyBmaWxsPSclMjNmZmZmZmYnIGZpbGwtb3BhY2l0eT0nMC4wNScgZmlsbC1ydWxlPSdldmVub2RkJy8lM0UlM0Mvc3ZnJTNFXCIpO1xuICAgIGNvbG9yOiAkZm9udC1saWdodDtcbn1cblxuLmxvZ28ge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cblxuaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEyZW07XG59XG5cbi50aW1lIHtcbiAgICBmb250LXNpemU6IDEuOGVtO1xufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBWMSBBcHBsaWNhdGlvbiBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4ucGFuZWwtYXJyYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLnBhbmVsLW91dGxldCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbiAgbWluLXdpZHRoOiA0MCU7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImRhdGE6aW1hZ2Uvc3ZnK3htbCwlM0Nzdmcgd2lkdGg9JzI0JyBoZWlnaHQ9JzIwJyB2aWV3Qm94PScwIDAgMjQgMjAnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyclM0UlM0NwYXRoIGQ9J00yMCAxOGMwLTEuMTA1Ljg4Ny0yIDEuOTk4LTIgMS4xMDQgMCAyLS44OTUgMi4wMDItMS45OTRWMTR2NmgtNHYtMnpNMCAxMy45OThDMCAxMi44OTUuODg4IDEyIDIgMTJjMS4xMDUgMCAyIC44ODggMiAyIDAgMS4xMDUuODg4IDIgMiAyIDEuMTA1IDAgMiAuODg4IDIgMnYySDB2LTYuMDAyem0xNiA0LjAwNEExLjk5NCAxLjk5NCAwIDAgMSAxNCAyMGMtMS4xMDUgMC0yLS44ODctMi0xLjk5OHYtNC4wMDRBMS45OTQgMS45OTQgMCAwIDAgMTAgMTJjLTEuMTA1IDAtMi0uODg4LTItMiAwLTEuMTA1LS44ODgtMi0yLTItMS4xMDUgMC0yLS44ODctMi0xLjk5OFYxLjk5OEExLjk5NCAxLjk5NCAwIDAgMCAyIDBhMiAyIDAgMCAwLTIgMlYwaDh2MmMwIDEuMTA1Ljg4OCAyIDIgMiAxLjEwNSAwIDIgLjg4OCAyIDIgMCAxLjEwNS44ODggMiAyIDIgMS4xMDUgMCAyLS44ODggMi0yIDAtMS4xMDUuODg4LTIgMi0yIDEuMTA1IDAgMi0uODg4IDItMlYwaDR2Ni4wMDJBMS45OTQgMS45OTQgMCAwIDEgMjIgOGMtMS4xMDUgMC0yIC44ODgtMiAyIDAgMS4xMDUtLjg4OCAyLTIgMi0xLjEwNSAwLTIgLjg4Ny0yIDEuOTk4djQuMDA0eicgZmlsbD0nJTIzZmZmZmZmJyBmaWxsLW9wYWNpdHk9JzAuMDUnIGZpbGwtcnVsZT0nZXZlbm9kZCcvJTNFJTNDL3N2ZyUzRVwiKTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDEyZW07XG59XG5cbi50aW1lIHtcbiAgZm9udC1zaXplOiAxLjhlbTtcbn0iXX0= */"];



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);




class BookingPanelArrayComponent extends _shared_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(route, _service) {
        super();
        this.route = route;
        this._service = _service;
    }
    /** Display value for the current time */
    get time() {
        return dayjs__WEBPACK_IMPORTED_MODULE_3__().format('h:mm:ss A');
    }
    ngOnInit() {
        this.subscription('app_ready', this._service.initialised.subscribe((is_ready) => {
            if (is_ready) {
                this.subscription('route.query', this.route.queryParamMap.subscribe((params) => {
                    if (params.has('system_ids')) {
                        this.systems = (params.get('system_ids') || '').split(',');
                    }
                }));
                const logo = this._service.setting('app.logo');
                this.logo = (logo ? logo.inverse : null) || '';
                this.unsub('app_ready');
            }
        }));
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/directives/binding/binding.directive */ "./src/app/shared/directives/binding/binding.directive.ts");
/* harmony import */ var _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory */ "./node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acaprojects/ngx-spinners */ "./node_modules/@acaprojects/ngx-spinners/fesm2015/acaprojects-ngx-spinners.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _panel_panel_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../panel/panel.component.ngfactory */ "./src/app/shell/panel/panel.component.ngfactory.js");
/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../panel/panel.component */ "./src/app/shell/panel/panel.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */ "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
/* harmony import */ var _panel_select_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./panel-select.component */ "./src/app/shell/panel-select/panel-select.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 















var styles_BookingPanelSelectComponent = [_panel_select_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BookingPanelSelectComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BookingPanelSelectComponent, data: {} });

function View_BookingPanelSelectComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "room_name"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.system_name[_v.parent.context.$implicit] = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "icon"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.system_icon[_v.parent.context.$implicit] = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "today"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = (_co.updateStatus(_v.parent.context.$implicit, $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _v.parent.context.$implicit; var currVal_1 = "Bookings"; var currVal_2 = "room_name"; var currVal_3 = _co.system_name[_v.parent.context.$implicit]; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _v.parent.context.$implicit; var currVal_5 = "Bookings"; var currVal_6 = "icon"; var currVal_7 = _co.system_icon[_v.parent.context.$implicit]; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _v.parent.context.$implicit; var currVal_9 = "Bookings"; var currVal_10 = "today"; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10); }, null); }
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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".panel-select[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  background-color: #121212;\n}\n.panel-outlet[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  border: 1px solid #fff;\n}\n.panel-options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-wrap: wrap;\n  width: 100%;\n  height: 100%;\n  padding: 2em;\n}\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin: 0.5em;\n  height: 11.5em;\n  width: 10em;\n  background: linear-gradient(135deg, #051c2c, #0a2247, #0a2247, #1e3cd8);\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  padding: 0.5em;\n  border-radius: 4px;\n}\n.item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  font-size: 7.5em;\n  background-color: rgba(255, 255, 255, 0.05);\n  border-radius: 8px;\n}\n.item[_ngcontent-%COMP%]   .icon.available[_ngcontent-%COMP%] {\n  background-color: rgba(58, 165, 55, 0.6);\n}\n.item[_ngcontent-%COMP%]   .icon.unavailable[_ngcontent-%COMP%] {\n  background-color: rgba(174, 25, 40, 0.6);\n}\n.item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   a-spinner[_ngcontent-%COMP%] {\n  font-size: 0.1em;\n}\n.icon[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 1em;\n  max-height: 1em;\n}\n.text[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  color: #fff;\n  padding: 0.75em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5em;\n  left: 1.25em;\n  display: flex;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsLXNlbGVjdC9wYW5lbC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL3BhbmVsLXNlbGVjdC9wYW5lbC1zZWxlY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBbUJBOzt3Q0FBQTtBQTJCQTs7Y0FBQTtBQWNBOztzQkFBQTtBQzFEQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDVUo7QURQQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FDVUo7QURQQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ1VKO0FEUEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHVFREdTO0VDRlQsK0dBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNVSjtBRFJJO0VBQ0ksZ0JBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FDVVI7QURSUTtFQUNJLHdDQUFBO0FDVVo7QURQUTtFQUNJLHdDQUFBO0FDU1o7QUROUTtFQUNJLGdCQUFBO0FDUVo7QURIQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNNSjtBREpJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNNUjtBREZBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNLSjtBREZBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvcGFuZWwtc2VsZWN0L3BhbmVsLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICMzYWE1Mzc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiR3YXJuaW5nOiAjZmZEMDQ4O1xuJHdhcm5pbmctbGlnaHQ6IGxpZ2h0ZW4oJHdhcm5pbmcsIDEwKTtcbiR3YXJuaW5nLWRhcms6IGRhcmtlbigkd2FybmluZywgMTApO1xuXG4kZXJyb3I6ICNhZTE5Mjg7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBWMSBBcHBsaWNhdGlvbiBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3MtdjE6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodC12MTogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyay12MTogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nLXYxOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQtdjE6IGxpZ2h0ZW4oJHdhcm5pbmcsIDEwKTtcbiRwZW5kaW5nLWRhcmstdjE6IGRhcmtlbigkd2FybmluZywgMTApO1xuXG4kZXJyb3ItdjE6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQtdjE6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyay12MTogZGFya2VuKCRlcnJvciwgMTApO1xuXG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGZvbnQtZmFtaWx5LXByaW1hcnk6IFwiTWNLaW5zZXkgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIENhbGlicmksIENvcmJlbCwgSGVsdmV0aWNhLCBSb2JvdG8sIERyb2lkLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LXNlY29uZGFyeTogXCJCb3dlclwiLCBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5wYW5lbC1zZWxlY3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTIxMjEyO1xufVxuXG4ucGFuZWwtb3V0bGV0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XG59XG5cbi5wYW5lbC1vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiAyZW07XG59XG5cbi5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IC41ZW07XG4gICAgaGVpZ2h0OiAxMS41ZW07XG4gICAgd2lkdGg6IDEwZW07XG4gICAgYmFja2dyb3VuZDogJGJhY2tncm91bmQ7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDcuNWVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNmZmYsIC4wNSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcblxuICAgICAgICAmLmF2YWlsYWJsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRzdWNjZXNzLCAuNik7XG4gICAgICAgIH1cblxuICAgICAgICAmLnVuYXZhaWxhYmxlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGVycm9yLCAuNik7XG4gICAgICAgIH1cblxuICAgICAgICBhLXNwaW5uZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuMWVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgaGVpZ2h0OiAxLjJlbTtcbiAgICB3aWR0aDogMS4yZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxZW07XG4gICAgICAgIG1heC1oZWlnaHQ6IDFlbTtcbiAgICB9XG59XG5cbi50ZXh0IHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogLjc1ZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLjVlbTtcbiAgICBsZWZ0OiAxLjI1ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBWMSBBcHBsaWNhdGlvbiBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4ucGFuZWwtc2VsZWN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxMjEyMTI7XG59XG5cbi5wYW5lbC1vdXRsZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZjtcbn1cblxuLnBhbmVsLW9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwYWRkaW5nOiAyZW07XG59XG5cbi5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwLjVlbTtcbiAgaGVpZ2h0OiAxMS41ZW07XG4gIHdpZHRoOiAxMGVtO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBwYWRkaW5nOiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLml0ZW0gLmljb24ge1xuICBmb250LXNpemU6IDcuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDUpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG59XG4uaXRlbSAuaWNvbi5hdmFpbGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU4LCAxNjUsIDU1LCAwLjYpO1xufVxuLml0ZW0gLmljb24udW5hdmFpbGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3NCwgMjUsIDQwLCAwLjYpO1xufVxuLml0ZW0gLmljb24gYS1zcGlubmVyIHtcbiAgZm9udC1zaXplOiAwLjFlbTtcbn1cblxuLmljb24ge1xuICBoZWlnaHQ6IDEuMmVtO1xuICB3aWR0aDogMS4yZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmljb24gaW1nIHtcbiAgbWF4LXdpZHRoOiAxZW07XG4gIG1heC1oZWlnaHQ6IDFlbTtcbn1cblxuLnRleHQge1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMC43NWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNWVtO1xuICBsZWZ0OiAxLjI1ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"];



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
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/data/spaces/space.class */ "./src/app/services/data/spaces/space.class.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");




class BookingPanelSelectComponent extends _shared_base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"] {
    constructor(route, service) {
        super();
        this.route = route;
        this.service = service;
        /** Names for the list of systems */
        this.system_name = {};
        /** Icons for the list of systems */
        this.system_icon = {};
        /** Status for the list of systems */
        this.system_status = {};
    }
    ngOnInit() {
        this.subscription('route.query', this.route.queryParamMap.subscribe((params) => {
            if (params.has('system_ids')) {
                this.systems = (params.get('system_ids') || '').split(',');
            }
        }));
    }
    /**
     * Show booking panel for the given system ID
     * @param id ID of the system to show
     */
    showPanel(id) {
        this.active_system = id;
        this.reset();
    }
    /**
     * Update the status value for the given system ID
     * @param id ID of the system to update
     * @param bookings List of current bookings for the system
     */
    updateStatus(id, bookings) {
        const space = new _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_2__["Space"](this.service.Spaces, { id, bookings });
        this.system_status[id] = space.current ? 'available' : 'unavailable';
    }
    /**
     * Close the modal
     */
    close() {
        this.active_system = null;
        this.clearInterval('countdown');
    }
    /**
     * User confirmation of the content of the modal
     */
    reset() {
        if (this.active_system) {
            this.countdown = 30;
            this.interval('countdown', () => this.tick(), 1000);
        }
    }
    /**
     * Decrement countdown and close if 0
     */
    tick() {
        if (this.countdown <= 0) {
            this.close();
        }
        this.countdown--;
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */ "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/binding/binding.directive */ "./src/app/shared/directives/binding/binding.directive.ts");
/* harmony import */ var _booking_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./booking-actions.component */ "./src/app/shell/panel/booking-actions/booking-actions.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
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
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "last_meeting_started"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.last_started = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "is_endable"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.is_endable = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "i", [["bind", "timeout"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.pending_timeout = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["bind", "cancel_timeout"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.cancel_timeout = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [["bind", "ask_start"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.ask_start = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "i", [["bind", "ask_end"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.ask_end = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "i", [["bind", "default_title"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.default_title = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "i", [["bind", "min_duration"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.min_duration = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "i", [["bind", "max_duration"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.max_duration = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "i", [["bind", "business_start"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.business_start = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "i", [["bind", "business_end"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.business_end = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space.id; var currVal_1 = "Bookings"; var currVal_2 = "booking_disabled"; var currVal_3 = _co.no_booking; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.space.id; var currVal_5 = "Bookings"; var currVal_6 = "last_meeting_started"; var currVal_7 = _co.last_started; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _co.space.id; var currVal_9 = "Bookings"; var currVal_10 = "is_endable"; var currVal_11 = _co.is_endable; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = _co.space.id; var currVal_13 = "Bookings"; var currVal_14 = "timeout"; var currVal_15 = _co.pending_timeout; _ck(_v, 8, 0, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_16 = _co.space.id; var currVal_17 = "Bookings"; var currVal_18 = "cancel_timeout"; var currVal_19 = _co.cancel_timeout; _ck(_v, 10, 0, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_20 = _co.space.id; var currVal_21 = "Bookings"; var currVal_22 = "ask_start"; var currVal_23 = _co.ask_start; _ck(_v, 12, 0, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_24 = _co.space.id; var currVal_25 = "Bookings"; var currVal_26 = "ask_end"; var currVal_27 = _co.ask_end; _ck(_v, 14, 0, currVal_24, currVal_25, currVal_26, currVal_27); var currVal_28 = _co.space.id; var currVal_29 = "Bookings"; var currVal_30 = "default_title"; var currVal_31 = _co.default_title; _ck(_v, 16, 0, currVal_28, currVal_29, currVal_30, currVal_31); var currVal_32 = _co.space.id; var currVal_33 = "Bookings"; var currVal_34 = "min_duration"; var currVal_35 = _co.min_duration; _ck(_v, 18, 0, currVal_32, currVal_33, currVal_34, currVal_35); var currVal_36 = _co.space.id; var currVal_37 = "Bookings"; var currVal_38 = "max_duration"; var currVal_39 = _co.max_duration; _ck(_v, 20, 0, currVal_36, currVal_37, currVal_38, currVal_39); var currVal_40 = _co.space.id; var currVal_41 = "Bookings"; var currVal_42 = "business_start"; var currVal_43 = _co.business_start; _ck(_v, 22, 0, currVal_40, currVal_41, currVal_42, currVal_43); var currVal_44 = _co.space.id; var currVal_45 = "Bookings"; var currVal_46 = "business_end"; var currVal_47 = _co.business_end; _ck(_v, 24, 0, currVal_44, currVal_45, currVal_46, currVal_47); }, null); }
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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".booking-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 1em;\n  max-width: 8.5em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .booking-actions[_ngcontent-%COMP%] {\n    padding: 0.5em 0.25em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .booking-actions[_ngcontent-%COMP%] {\n    padding: 0.5em 0.25em;\n  }\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  height: 1em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\nbutton.large[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\nbutton.large[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsL2Jvb2tpbmctYWN0aW9ucy9ib29raW5nLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL3BhbmVsL2Jvb2tpbmctYWN0aW9ucy9ib29raW5nLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBbUJBOzt3Q0FBQTtBQTJCQTs7Y0FBQTtBQWNBOztzQkFBQTtBQzFEQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1VKO0FGc0RRO0VDeEVSO0lBV1EscUJBQUE7RUNXTjtBQUNGO0FGb0RRO0VDM0VSO0lBV1EscUJBQUE7RUNnQk47QUFDRjtBRGJBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FDZ0JKO0FEZkk7RUFDSSxjQUFBO0FDaUJSO0FEYkE7RUFDSSxjQUFBO0FDZ0JKO0FEZkk7RUFDSSxnQkFBQTtBQ2lCUiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3BhbmVsL2Jvb2tpbmctYWN0aW9ucy9ib29raW5nLWFjdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjM2FhNTM3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kd2FybmluZzogI2ZmRDA0ODtcbiR3YXJuaW5nLWxpZ2h0OiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kd2FybmluZy1kYXJrOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yOiAjYWUxOTI4O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgVjEgQXBwbGljYXRpb24gQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzLXYxOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQtdjE6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcmstdjE6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZy12MTogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0LXYxOiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrLXYxOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yLXYxOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0LXYxOiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcmstdjE6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuXG4kY29sb3ItcHJpbWFyeTogI2ZmZjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzFmNDBlNjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG5cbiRmb250LWZhbWlseS1wcmltYXJ5OiBcIk1jS2luc2V5IFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBDYWxpYnJpLCBDb3JiZWwsIEhlbHZldGljYSwgUm9ib3RvLCBEcm9pZCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zZWNvbmRhcnk6IFwiQm93ZXJcIiwgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uYm9va2luZy1hY3Rpb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBtYXgtd2lkdGg6IDguNWVtO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgcGFkZGluZzogLjVlbSAuMjVlbTtcbiAgICB9XG59XG5cbi5pY29uIHtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDEuMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBpICB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cbn1cblxuYnV0dG9uLmxhcmdlIHtcbiAgICBmb250LXNpemU6IDNlbTtcbiAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjRlbTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFYxIEFwcGxpY2F0aW9uIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5ib29raW5nLWFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDFlbTtcbiAgbWF4LXdpZHRoOiA4LjVlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5ib29raW5nLWFjdGlvbnMge1xuICAgIHBhZGRpbmc6IDAuNWVtIDAuMjVlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5ib29raW5nLWFjdGlvbnMge1xuICAgIHBhZGRpbmc6IDAuNWVtIDAuMjVlbTtcbiAgfVxufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMS4yZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLmljb24gaSB7XG4gIGZvbnQtc2l6ZTogMWVtO1xufVxuXG5idXR0b24ubGFyZ2Uge1xuICBmb250LXNpemU6IDNlbTtcbn1cbmJ1dHRvbi5sYXJnZSAudGV4dCB7XG4gIGZvbnQtc2l6ZTogMC40ZW07XG59Il19 */"];



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
/* harmony import */ var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/data/spaces/space.class */ "./src/app/services/data/spaces/space.class.ts");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);





class PanelBookingActionsComponent extends _shared_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(service) {
        super();
        this.service = service;
        /** Whether booking is allowed */
        this.no_booking = false;
        /** Time of the last automatic confirmation of start or end */
        this.last_confirm = 0;
    }
    /** Current status of the active system */
    get status() {
        let status = 'available';
        if (this.space && (this.space.current || this.space.next)) {
            const booking = this.space.current || this.space.next;
            status = this.space.current ? 'unavailable' : 'available';
            if (this.pending_timeout) {
                const now = dayjs__WEBPACK_IMPORTED_MODULE_4__().startOf('m').second(1);
                const business_start = dayjs__WEBPACK_IMPORTED_MODULE_4__(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__["timeToDate"])(this.business_start || '08:00'));
                const business_end = dayjs__WEBPACK_IMPORTED_MODULE_4__(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__["timeToDate"])(this.business_end || '17:30'));
                // Check if within business hours before looking at pending logic
                if (now.isBefore(business_start, 'm') || now.isAfter(business_end, 'm')) {
                    return status;
                }
                const date = dayjs__WEBPACK_IMPORTED_MODULE_4__(booking.date);
                if (this.last_started >= now.valueOf() || this.last_started >= date.valueOf()) {
                    if (this.is_endable && this.space.current) {
                        const end = date.add(booking.duration, 'm').startOf('m');
                        const block_end = end.subtract(Math.max(this.is_endable, 300), 's');
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
                    const pending_start = date.startOf('m').subtract(this.pending_timeout, 's');
                    const pending_end = date.startOf('m').add(this.cancel_timeout || this.pending_timeout, 's');
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
    /**
     * Open modal to make a new booking
     */
    book() {
        this.service.Bookings.new({
            space: this.space,
            title: this.default_title,
            max_duration: this.max_duration,
            min_duration: this.min_duration
        });
    }
    /**
     * Open confirmation modal for starting the meeting
     */
    confirmStart() {
        this.service.Overlay.open('confirm', {
            config: 'modal',
            data: {
                title: 'Do you wish to start your meeting?',
                body: `If you don't start your meeting it will be cancelled ${this.cancel_timeout / 60} minutes after the start time.`,
                icon: { class: 'material-icons', value: 'play_arrow' }
            }
        }, _ => this.startMeeting());
    }
    /**
     * Execute the logic on the engine driver to start the current or upcoming meeting
     */
    startMeeting() {
        if (this.space) {
            const meeting = this.space.current || this.space.next;
            const module = this.service.Systems.get(this.space.id, 'Bookings');
            if (meeting && module) {
                const date = dayjs__WEBPACK_IMPORTED_MODULE_4__(meeting.date);
                module.execute('start_meeting', [meeting.date]).then(_ => {
                    this.service.Analytics.event('Checkin', 'checked-in', `${this.space.id} at ${date.format('DD MMM YYYY, h:mm A Z')}`);
                }, (e) => {
                    this.service.notifyError(`Error starting meeting. ${e}`);
                    this.service.Analytics.event('Checkin', 'checked-in-failed', `${this.space.id} at ${date.format('DD MMM YYYY, h:mm A Z')}`);
                });
            }
        }
    }
    /**
     * Open confirmation modal for ending the meeting
     */
    confirmEnd() {
        this.service.Overlay.open('confirm', {
            config: 'modal',
            data: {
                title: 'Are you sure want to end your meeting?',
                body: 'Ending your meeting early will free up this room for others to use',
                icon: { class: 'material-icons', value: 'stop' }
            }
        }, _ => this.endMeeting());
    }
    /**
     * Execute end meeting logic on engine driver
     * @param reason Reason for ending the meeting early
     */
    endMeeting(reason = 'user_input') {
        if (this.space) {
            const meeting = this.space.current || this.space.next;
            const module = this.service.Systems.get(this.space.id, 'Bookings');
            if (meeting && module) {
                const date = dayjs__WEBPACK_IMPORTED_MODULE_4__(meeting.date);
                module.execute('cancel_meeting', [meeting.date, reason]).then(_ => {
                    this.service.Analytics.event('Checkin', 'cancelled', `${this.space.id} at ${date.format('DD MMM YYYY, h:mm A Z')} | ${reason}`);
                }, (e) => {
                    this.service.notifyError(`Error starting meeting. ${e}`);
                    this.service.Analytics.event('Checkin', 'cancel-failed', `${this.space.id} at ${date.format('DD MMM YYYY, h:mm A Z')} | ${reason}`);
                });
            }
        }
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _node_modules_acaprojects_ngx_buttons_acaprojects_ngx_buttons_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory */ "./node_modules/@acaprojects/ngx-buttons/acaprojects-ngx-buttons.ngfactory.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _acaprojects_ngx_buttons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acaprojects/ngx-buttons */ "./node_modules/@acaprojects/ngx-buttons/fesm2015/acaprojects-ngx-buttons.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/directives/binding/binding.directive */ "./src/app/shared/directives/binding/binding.directive.ts");
/* harmony import */ var _custom_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-actions.component */ "./src/app/shell/panel/custom-actions/custom-actions.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
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
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "can_control"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.can_control = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "has_catering"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.catering = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_7__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space.id; var currVal_1 = "Bookings"; var currVal_2 = "control_url"; var currVal_3 = _co.control_url; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.space.id; var currVal_5 = "Bookings"; var currVal_6 = "can_control"; var currVal_7 = _co.can_control; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _co.space.id; var currVal_9 = "Bookings"; var currVal_10 = "has_catering"; var currVal_11 = _co.catering; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11); }, null); }
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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".custom-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  padding: 2em 1em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .custom-actions[_ngcontent-%COMP%] {\n    padding: 2em 0.25em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .custom-actions[_ngcontent-%COMP%] {\n    padding: 2em 0.25em;\n  }\n}\n.icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  height: 1.2em;\n  width: 1.2em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsL2N1c3RvbS1hY3Rpb25zL2N1c3RvbS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9wYW5lbC9jdXN0b20tYWN0aW9ucy9jdXN0b20tYWN0aW9ucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFtQkE7O3dDQUFBO0FBMkJBOztjQUFBO0FBY0E7O3NCQUFBO0FDMURBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDVUo7QUZ3RFE7RUN4RVI7SUFTUSxtQkFBQTtFQ1dOO0FBQ0Y7QUZzRFE7RUMzRVI7SUFTUSxtQkFBQTtFQ2dCTjtBQUNGO0FEYkE7RUFDSSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNnQko7QURmSTtFQUNJLGNBQUE7QUNpQlIiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9wYW5lbC9jdXN0b20tYWN0aW9ucy9jdXN0b20tYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICMzYWE1Mzc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiR3YXJuaW5nOiAjZmZEMDQ4O1xuJHdhcm5pbmctbGlnaHQ6IGxpZ2h0ZW4oJHdhcm5pbmcsIDEwKTtcbiR3YXJuaW5nLWRhcms6IGRhcmtlbigkd2FybmluZywgMTApO1xuXG4kZXJyb3I6ICNhZTE5Mjg7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBWMSBBcHBsaWNhdGlvbiBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3MtdjE6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodC12MTogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyay12MTogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nLXYxOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQtdjE6IGxpZ2h0ZW4oJHdhcm5pbmcsIDEwKTtcbiRwZW5kaW5nLWRhcmstdjE6IGRhcmtlbigkd2FybmluZywgMTApO1xuXG4kZXJyb3ItdjE6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQtdjE6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyay12MTogZGFya2VuKCRlcnJvciwgMTApO1xuXG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGZvbnQtZmFtaWx5LXByaW1hcnk6IFwiTWNLaW5zZXkgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIENhbGlicmksIENvcmJlbCwgSGVsdmV0aWNhLCBSb2JvdG8sIERyb2lkLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LXNlY29uZGFyeTogXCJCb3dlclwiLCBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jdXN0b20tYWN0aW9ucyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyZW0gMWVtO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgcGFkZGluZzogMmVtIC4yNWVtO1xuICAgIH1cbn1cblxuLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgaGVpZ2h0OiAxLjJlbTtcbiAgICB3aWR0aDogMS4yZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGkgIHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBWMSBBcHBsaWNhdGlvbiBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY3VzdG9tLWFjdGlvbnMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMmVtIDFlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5jdXN0b20tYWN0aW9ucyB7XG4gICAgcGFkZGluZzogMmVtIDAuMjVlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5jdXN0b20tYWN0aW9ucyB7XG4gICAgcGFkZGluZzogMmVtIDAuMjVlbTtcbiAgfVxufVxuXG4uaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGhlaWdodDogMS4yZW07XG4gIHdpZHRoOiAxLjJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4uaWNvbiBpIHtcbiAgZm9udC1zaXplOiAxZW07XG59Il19 */"];



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


class PanelCustomActionsComponent {
    constructor(service) {
        this.service = service;
    }
    /**
     * Open confirmation modal for ending the meeting
     */
    confirmWaiterCall() {
        this.service.Overlay.open('confirm', {
            config: 'modal',
            data: {
                title: 'Call a waiter to your room?',
                body: 'Call a waiter to your room to order catering',
                icon: { class: 'material-icons', value: 'call' }
            }
        }, _ => this.callWaiter());
    }
    /**
     * Execute call waiter logic on engine driver
     */
    callWaiter() {
        if (this.space) {
            const module = this.service.Systems.get(this.space.id, 'Bookings');
            if (module) {
                module.execute('waiter_call', []).then(_ => {
                    this.service.Analytics.event('Catering', 'waiter-call', (new Date).toISOString());
                }, (e) => {
                    this.service.Analytics.event('Catering', 'waiter-call-failed', (new Date).toISOString());
                    this.service.notifyError(`Error calling waiter. ${e}`);
                });
            }
        }
    }
    /**
     * Open modal to show embeded control URL
     */
    openControl() {
        this.service.Analytics.event('Control', 'open-view', (new Date).toISOString());
        this.service.Overlay.open('embeded-control', {
            config: 'modal',
            data: {
                control_url: this.control_url
            }
        });
    }
}


/***/ }),

/***/ "./src/app/shell/panel/panel-details-display.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/shell/panel/panel-details-display.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_PanelDetailsDisplayComponent, View_PanelDetailsDisplayComponent_0, View_PanelDetailsDisplayComponent_Host_0, PanelDetailsDisplayComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PanelDetailsDisplayComponent", function() { return RenderType_PanelDetailsDisplayComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PanelDetailsDisplayComponent_0", function() { return View_PanelDetailsDisplayComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PanelDetailsDisplayComponent_Host_0", function() { return View_PanelDetailsDisplayComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelDetailsDisplayComponentNgFactory", function() { return PanelDetailsDisplayComponentNgFactory; });
/* harmony import */ var _panel_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel.component.scss.ngstyle */ "./src/app/shell/panel/panel.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _space_details_space_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./space-details/space-details.component.ngfactory */ "./src/app/shell/panel/space-details/space-details.component.ngfactory.js");
/* harmony import */ var _space_details_space_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space-details/space-details.component */ "./src/app/shell/panel/space-details/space-details.component.ts");
/* harmony import */ var _booking_actions_booking_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking-actions/booking-actions.component.ngfactory */ "./src/app/shell/panel/booking-actions/booking-actions.component.ngfactory.js");
/* harmony import */ var _booking_actions_booking_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking-actions/booking-actions.component */ "./src/app/shell/panel/booking-actions/booking-actions.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _custom_actions_custom_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./custom-actions/custom-actions.component.ngfactory */ "./src/app/shell/panel/custom-actions/custom-actions.component.ngfactory.js");
/* harmony import */ var _custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./custom-actions/custom-actions.component */ "./src/app/shell/panel/custom-actions/custom-actions.component.ts");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _panel_details_display_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panel-details-display.component */ "./src/app/shell/panel/panel-details-display.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 












var styles_PanelDetailsDisplayComponent = [_panel_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PanelDetailsDisplayComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_PanelDetailsDisplayComponent, data: {} });

function View_PanelDetailsDisplayComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-panel-space-details", [], null, null, null, _space_details_space_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_PanelSpaceDetailsComponent_0"], _space_details_space_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_PanelSpaceDetailsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _space_details_space_details_component__WEBPACK_IMPORTED_MODULE_3__["PanelSpaceDetailsComponent"], [], { space: [0, "space"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space; _ck(_v, 2, 0, currVal_0); }, null); }
function View_PanelDetailsDisplayComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "panel-booking-actions", [], null, null, null, _booking_actions_booking_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_PanelBookingActionsComponent_0"], _booking_actions_booking_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_PanelBookingActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _booking_actions_booking_actions_component__WEBPACK_IMPORTED_MODULE_5__["PanelBookingActionsComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]], { space: [0, "space"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "panel-custom-actions", [], null, null, null, _custom_actions_custom_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_PanelCustomActionsComponent_0"], _custom_actions_custom_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_PanelCustomActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_8__["PanelCustomActionsComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]], { space: [0, "space"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.space; _ck(_v, 4, 0, currVal_1); }, null); }
function View_PanelDetailsDisplayComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "span", [["class", "panel-title"]], [[2, "show", null]], [[null, "tapped"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.showTitle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelDetailsDisplayComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelDetailsDisplayComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = (!_co.hide_all && _co.show_details); _ck(_v, 5, 0, currVal_2); var currVal_3 = (!_co.hide_all && _co.show_details); _ck(_v, 7, 0, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.show_title; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.space_name; _ck(_v, 3, 0, currVal_1); }); }
function View_PanelDetailsDisplayComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-panel-details-display", [], null, null, null, View_PanelDetailsDisplayComponent_0, RenderType_PanelDetailsDisplayComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _panel_details_display_component__WEBPACK_IMPORTED_MODULE_11__["PanelDetailsDisplayComponent"], [], null, null)], null, null); }
var PanelDetailsDisplayComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-panel-details-display", _panel_details_display_component__WEBPACK_IMPORTED_MODULE_11__["PanelDetailsDisplayComponent"], View_PanelDetailsDisplayComponent_Host_0, { show_title: "show_title", space_name: "space_name", space: "space", show_details: "show_details", hide_all: "hide_all" }, {}, []);



/***/ }),

/***/ "./src/app/shell/panel/panel-details-display.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shell/panel/panel-details-display.component.ts ***!
  \****************************************************************/
/*! exports provided: PanelDetailsDisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelDetailsDisplayComponent", function() { return PanelDetailsDisplayComponent; });
/* harmony import */ var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/data/spaces/space.class */ "./src/app/services/data/spaces/space.class.ts");
/* harmony import */ var _shared_base_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/base.class */ "./src/app/shared/base.class.ts");


class PanelDetailsDisplayComponent extends _shared_base_class__WEBPACK_IMPORTED_MODULE_1__["BaseClass"] {
    /**
     * Show full room name if overflowing
     */
    showTitle() {
        this.show_title = true;
        this.timeout('hide_title', () => (this.show_title = false), 3000);
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _panel_details_display_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./panel-details-display.component.ngfactory */ "./src/app/shell/panel/panel-details-display.component.ngfactory.js");
/* harmony import */ var _panel_details_display_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./panel-details-display.component */ "./src/app/shell/panel/panel-details-display.component.ts");
/* harmony import */ var _v1_panel_details_display_v1_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./v1/panel-details-display-v1.component.ngfactory */ "./src/app/shell/panel/v1/panel-details-display-v1.component.ngfactory.js");
/* harmony import */ var _v1_panel_details_display_v1_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./v1/panel-details-display-v1.component */ "./src/app/shell/panel/v1/panel-details-display-v1.component.ts");
/* harmony import */ var _timeline_timeline_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timeline/timeline.component.ngfactory */ "./src/app/shell/panel/timeline/timeline.component.ngfactory.js");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/shell/panel/timeline/timeline.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/directives/binding/binding.directive */ "./src/app/shared/directives/binding/binding.directive.ts");
/* harmony import */ var _panel_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panel.component */ "./src/app/shell/panel/panel.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 













var styles_BookingPanelComponent = [_panel_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_BookingPanelComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_BookingPanelComponent, data: {} });

function View_BookingPanelComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "time-display-v1"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.display_time; _ck(_v, 1, 0, currVal_0); }); }
function View_BookingPanelComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.show_time; _ck(_v, 2, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ("status-v1" + ((_co.status && !_co.hide_all) ? (" " + _co.status) : "")); _ck(_v, 0, 0, currVal_0); }); }
function View_BookingPanelComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "time-display"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.statusText; _ck(_v, 1, 0, currVal_0); }); }
function View_BookingPanelComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "time-display time-display-bottom"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.display_time; _ck(_v, 1, 0, currVal_0); }); }
function View_BookingPanelComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.show_time; _ck(_v, 2, 0, currVal_1); var currVal_2 = _co.show_time; _ck(_v, 4, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ("status" + ((_co.displayStatus && !_co.hide_all) ? (" " + _co.displayStatus) : "")); _ck(_v, 0, 0, currVal_0); }); }
function View_BookingPanelComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-panel-details-display", [["class", "details-display"]], null, null, null, _panel_details_display_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_PanelDetailsDisplayComponent_0"], _panel_details_display_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_PanelDetailsDisplayComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _panel_details_display_component__WEBPACK_IMPORTED_MODULE_4__["PanelDetailsDisplayComponent"], [], { show_title: [0, "show_title"], space_name: [1, "space_name"], space: [2, "space"], show_details: [3, "show_details"], hide_all: [4, "hide_all"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.show_title; var currVal_1 = _co.space_name; var currVal_2 = _co.space; var currVal_3 = _co.show_details; var currVal_4 = _co.hide_all; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4); }, null); }
function View_BookingPanelComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-details-display-1", [["class", "details-display-v1"]], null, null, null, _v1_panel_details_display_v1_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_PanelDetailsDisplayV1Component_0"], _v1_panel_details_display_v1_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_PanelDetailsDisplayV1Component"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _v1_panel_details_display_v1_component__WEBPACK_IMPORTED_MODULE_6__["PanelDetailsDisplayV1Component"], [], { show_title: [0, "show_title"], space_name: [1, "space_name"], status: [2, "status"], space: [3, "space"], show_details: [4, "show_details"], hide_all: [5, "hide_all"], status_display: [6, "status_display"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.show_title; var currVal_1 = _co.space_name; var currVal_2 = _co.status; var currVal_3 = _co.space; var currVal_4 = _co.show_details; var currVal_5 = _co.hide_all; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.status_display, ""); _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); }, null); }
function View_BookingPanelComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "timeline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "panel-timeline", [], null, null, null, _timeline_timeline_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_PanelTimelineComponent_0"], _timeline_timeline_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_PanelTimelineComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 770048, null, 0, _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_8__["PanelTimelineComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"]], { space: [0, "space"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space; _ck(_v, 2, 0, currVal_0); }, null); }
function View_BookingPanelComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 24, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "room_name"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.space_name = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_10__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "touch_enabled"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.interactive = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_10__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "today"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = (_co.updateBookings($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_10__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "i", [["bind", "timeout"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.pending_timeout = $event) !== false);
        ad = (pd_0 && ad);
    } if (("modelChange" === en)) {
        var pd_1 = (_co.updateStatus() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_10__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["bind", "cancel_timeout"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.cancel_timeout = $event) !== false);
        ad = (pd_0 && ad);
    } if (("modelChange" === en)) {
        var pd_1 = (_co.updateStatus() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_10__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [["bind", "last_meeting_started"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.last_started = $event) !== false);
        ad = (pd_0 && ad);
    } if (("modelChange" === en)) {
        var pd_1 = (_co.updateStatus() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_10__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "i", [["bind", "hide_all"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_all = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_10__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 1, "i", [["bind", "flip_status"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.flip_status = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_10__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 1, "i", [["bind", "can_cancel"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.can_cancel = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_10__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 1, "i", [["bind", "business_start"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.business_start = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_10__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 1, "i", [["bind", "business_end"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.business_end = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_10__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "i", [["bind", "status_override"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.status_overrides = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_10__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.system_id; var currVal_1 = "Bookings"; var currVal_2 = "room_name"; var currVal_3 = _co.space_name; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.system_id; var currVal_5 = "Bookings"; var currVal_6 = "touch_enabled"; var currVal_7 = _co.interactive; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _co.system_id; var currVal_9 = "Bookings"; var currVal_10 = "today"; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10); var currVal_11 = _co.system_id; var currVal_12 = "Bookings"; var currVal_13 = "timeout"; var currVal_14 = _co.pending_timeout; _ck(_v, 8, 0, currVal_11, currVal_12, currVal_13, currVal_14); var currVal_15 = _co.system_id; var currVal_16 = "Bookings"; var currVal_17 = "cancel_timeout"; var currVal_18 = _co.cancel_timeout; _ck(_v, 10, 0, currVal_15, currVal_16, currVal_17, currVal_18); var currVal_19 = _co.system_id; var currVal_20 = "Bookings"; var currVal_21 = "last_meeting_started"; var currVal_22 = _co.last_started; _ck(_v, 12, 0, currVal_19, currVal_20, currVal_21, currVal_22); var currVal_23 = _co.system_id; var currVal_24 = "Bookings"; var currVal_25 = "hide_all"; var currVal_26 = _co.hide_all; _ck(_v, 14, 0, currVal_23, currVal_24, currVal_25, currVal_26); var currVal_27 = _co.system_id; var currVal_28 = "Bookings"; var currVal_29 = "flip_status"; var currVal_30 = _co.flip_status; _ck(_v, 16, 0, currVal_27, currVal_28, currVal_29, currVal_30); var currVal_31 = _co.system_id; var currVal_32 = "Bookings"; var currVal_33 = "can_cancel"; var currVal_34 = _co.can_cancel; _ck(_v, 18, 0, currVal_31, currVal_32, currVal_33, currVal_34); var currVal_35 = _co.system_id; var currVal_36 = "Bookings"; var currVal_37 = "business_start"; var currVal_38 = _co.business_start; _ck(_v, 20, 0, currVal_35, currVal_36, currVal_37, currVal_38); var currVal_39 = _co.system_id; var currVal_40 = "Bookings"; var currVal_41 = "business_end"; var currVal_42 = _co.business_end; _ck(_v, 22, 0, currVal_39, currVal_40, currVal_41, currVal_42); var currVal_43 = _co.system_id; var currVal_44 = "Bookings"; var currVal_45 = "status_override"; var currVal_46 = _co.status_overrides; _ck(_v, 24, 0, currVal_43, currVal_44, currVal_45, currVal_46); }, null); }
function View_BookingPanelComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 13, "div", [["class", "booking-panel"]], [[2, "disabled", null], [2, "reverse", null], [2, "no-time", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 6, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_BookingPanelComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_3 = _co.isV1(); _ck(_v, 2, 0, currVal_3); var currVal_4 = !_co.isV1(); _ck(_v, 4, 0, currVal_4); var currVal_5 = !_co.isV1(); _ck(_v, 7, 0, currVal_5); var currVal_6 = _co.isV1(); _ck(_v, 9, 0, currVal_6); var currVal_7 = _co.show_details; _ck(_v, 11, 0, currVal_7); var currVal_8 = _co.system_id; _ck(_v, 13, 0, currVal_8); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.interactive === false); var currVal_1 = (_co.reverse || _co.flip_status); var currVal_2 = !_co.show_time; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2); }); }
function View_BookingPanelComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-booking-panel", [], null, null, null, View_BookingPanelComponent_0, RenderType_BookingPanelComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _panel_component__WEBPACK_IMPORTED_MODULE_11__["BookingPanelComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var BookingPanelComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-booking-panel", _panel_component__WEBPACK_IMPORTED_MODULE_11__["BookingPanelComponent"], View_BookingPanelComponent_Host_0, { system_id: "system_id", reverse: "reverse", show_time: "show_time" }, {}, []);



/***/ }),

/***/ "./src/app/shell/panel/panel.component.scss.ngstyle.js":
/*!*************************************************************!*\
  !*** ./src/app/shell/panel/panel.component.scss.ngstyle.js ***!
  \*************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n\n\n\n.booking-panel {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n}\n@media only screen and (orientation: portrait) {\n  .booking-panel {\n    flex-direction: column;\n  }\n}\n.booking-panel.disabled {\n  pointer-events: none;\n}\n.booking-panel.disabled * {\n  pointer-events: none !important;\n}\n.booking-panel.disabled .overlay {\n  display: none;\n}\n.booking-panel.reverse {\n  flex-direction: row-reverse;\n}\n.content {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.content .details {\n  height: 100%;\n  flex: 1;\n}\n.status-v1 {\n  height: 100%;\n  width: 10em;\n  background-color: #aaa;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  color: #fff;\n  transition: background-color 200ms;\n}\n@media only screen and (orientation: portrait) {\n  .status-v1 {\n    height: 8em;\n    width: 100%;\n    align-items: center;\n  }\n}\n@media only screen and (orientation: landscape) and (min-width: 801px) and (max-width: 1048px) {\n  .status-v1 {\n    width: 8em;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .status-v1 {\n    height: 4em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .status-v1 {\n    width: 6em;\n  }\n}\n.status-v1.available {\n  background-color: #43a047;\n}\n.status-v1.pending {\n  background-color: #ffb300;\n}\n.status-v1.unavailable {\n  background-color: #e53935;\n}\n.status {\n  height: 100%;\n  width: 10em;\n  background-color: #aaa;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  color: #fff;\n  transition: background-color 200ms;\n  align-items: center;\n}\n@media only screen and (orientation: portrait) {\n  .status {\n    height: 8em;\n    width: 100%;\n    align-items: center;\n  }\n}\n@media only screen and (orientation: landscape) and (min-width: 801px) and (max-width: 1048px) {\n  .status {\n    width: 10em;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .status {\n    height: 4em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .status {\n    width: 6em;\n  }\n}\n.status.available {\n  background-color: #3aa537;\n  color: black;\n}\n.status.available-by-request {\n  background-color: #ffD048;\n  color: black;\n}\n.status.in-use {\n  background-color: #ae1928;\n}\n.time-display-v1 {\n  margin: 1.5em 0.5em;\n  font-size: 1.25em;\n}\n@media only screen and (orientation: portrait) {\n  .time-display-v1 {\n    font-size: 1.5em;\n  }\n}\n.time-display {\n  margin: 1.25em 0.5em;\n  font-size: 1.6em;\n  font-weight: 500;\n  text-align: center;\n  font-family: \"McKinsey Sans\", \"Helvetica Neue\", Calibri, Corbel, Helvetica, Roboto, Droid, sans-serif;\n}\n@media only screen and (orientation: portrait) {\n  .time-display {\n    font-size: 2.5em;\n  }\n}\n.time-display-bottom {\n  margin-bottom: 2em;\n}\n.body {\n  position: relative;\n  min-width: 10em;\n  flex: 1;\n  height: 100%;\n  background: linear-gradient(135deg, #051c2c, #0a2247, #0a2247, #1e3cd8);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n@media only screen and (orientation: portrait) {\n  .body {\n    min-height: 8em;\n    height: auto;\n    width: 100%;\n  }\n}\n.panel-title {\n  font-size: 1.6em;\n  line-height: 1.2;\n  word-break: break-word;\n  font-family: \"Bower\", Georgia, \"Times New Roman\" serif;\n  font-weight: bold;\n  margin-bottom: 1em;\n  min-height: 2.5em;\n  max-height: 2.5em;\n  max-lines: 2;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  \n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .panel-title {\n    font-size: 1em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .panel-title {\n    font-size: 1em;\n  }\n}\n.panel-title.show {\n  white-space: normal;\n}\n.details-display {\n  position: relative;\n  width: 100%;\n  min-height: 12em;\n  flex: 1;\n  padding: 2.5em 3.5em;\n  overflow: hidden;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .details-display {\n    padding: 1em 1.5em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .details-display {\n    padding: 1em 1.5em;\n  }\n}\n.details-display-v1 {\n  position: relative;\n  width: 100%;\n  min-height: 12em;\n  flex: 1;\n  padding: 1em 2em;\n  overflow: hidden;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .details-display-v1 {\n    padding: 1em 1.5em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .details-display-v1 {\n    padding: 1em 1.5em;\n  }\n}\n.timeline {\n  height: 4em;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.no-time .status {\n  width: 6em;\n}\n@media only screen and (orientation: portrait) {\n  .no-time .status {\n    height: 6em;\n    width: 100%;\n    align-items: center;\n  }\n}\n.no-time .details-display {\n  font-size: 0.8em;\n  padding: 1em;\n}\n.dot {\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  height: 1.5em;\n  width: 1.5em;\n  border-radius: 50%;\n  background-color: #ae1928;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9wYW5lbC9wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFtQkE7O3dDQUFBO0FBMkJBOztjQUFBO0FBY0E7O3NCQUFBO0FDM0RBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDV0o7QUZxSVE7RUN2SlI7SUFTUSxzQkFBQTtFQ2FOO0FBQ0Y7QURYSTtFQUNJLG9CQUFBO0FDYVI7QURYUTtFQUNJLCtCQUFBO0FDYVo7QURWUTtFQUNJLGFBQUE7QUNZWjtBRFJJO0VBQ0ksMkJBQUE7QUNVUjtBRE5BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDU0o7QURQSTtFQUNJLFlBQUE7RUFDQSxPQUFBO0FDU1I7QURMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQ1FKO0FGOEZRO0VDOUdSO0lBV1EsV0FBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQ1NOO0FBQ0Y7QUZxRFE7RUM1RVI7SUFpQlEsVUFBQTtFQ1VOO0FBQ0Y7QUZlUTtFQzNDUjtJQXFCUSxXQUFBO0VDV047QUFDRjtBRk1RO0VDdkNSO0lBMEJRLFVBQUE7RUNXTjtBQUNGO0FEVEk7RUFDSSx5QkRqREs7QUU0RGI7QURSSTtFQUNJLHlCRGpESztBRTJEYjtBRFBJO0VBQ0kseUJEakRHO0FFMERYO0FETEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ1FKO0FGbURRO0VDcEVSO0lBWVEsV0FBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQ1NOO0FBQ0Y7QUZVUTtFQ2xDUjtJQWtCUSxXQUFBO0VDVU47QUFDRjtBRjVCUTtFQ0RSO0lBc0JRLFdBQUE7RUNXTjtBQUNGO0FGckNRO0VDR1I7SUEyQlEsVUFBQTtFQ1dOO0FBQ0Y7QURUSTtFQUNJLHlCRDVHRTtFQzZHRixZQUFBO0FDV1I7QURSSTtFQUNJLHlCRDdHRTtFQzhHRixZQUFBO0FDVVI7QURQSTtFQUNJLHlCRDlHQTtBRXVIUjtBRExBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ1FKO0FGYVE7RUN2QlI7SUFLUSxnQkFBQTtFQ1NOO0FBQ0Y7QUROQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUdEMUZrQjtBRW1HdEI7QUZBUTtFQ2RSO0lBUVEsZ0JBQUE7RUNVTjtBQUNGO0FEUkk7RUFDSSxrQkFBQTtBQ1VSO0FETkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLHVFRG5IUztFQ29IVCxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNTSjtBRnBCUTtFQ0VSO0lBWVEsZUFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VDVU47QUFDRjtBRFBBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0REMUhvQjtFQzJIcEIsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQXVCLDRCQUFBO0VBQ3ZCLDRCQUFBO0VBQ0EsZ0JBQUE7QUNXSjtBRjNIUTtFQ2tHUjtJQWlCUSxjQUFBO0VDWU47QUFDRjtBRjdIUTtFQytGUjtJQWlCUSxjQUFBO0VDaUJOO0FBQ0Y7QURmSTtFQUNJLG1CQUFBO0FDaUJSO0FEYkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDZ0JKO0FGakpRO0VDMkhSO0lBU1Esa0JBQUE7RUNpQk47QUFDRjtBRm5KUTtFQ3dIUjtJQVNRLGtCQUFBO0VDc0JOO0FBQ0Y7QURuQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDc0JKO0FGcEtRO0VDd0lSO0lBU1Esa0JBQUE7RUN1Qk47QUFDRjtBRnRLUTtFQ3FJUjtJQVNRLGtCQUFBO0VDNEJOO0FBQ0Y7QUR6QkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0FDNEJKO0FEeEJJO0VBQ0ksVUFBQTtBQzJCUjtBRjFHUTtFQzhFSjtJQUlRLFdBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUM0QlY7QUFDRjtBRHpCSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQzJCUjtBRHZCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJEOU9JO0FFd1FSIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjM2FhNTM3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kd2FybmluZzogI2ZmRDA0ODtcbiR3YXJuaW5nLWxpZ2h0OiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kd2FybmluZy1kYXJrOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yOiAjYWUxOTI4O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgVjEgQXBwbGljYXRpb24gQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzLXYxOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQtdjE6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcmstdjE6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZy12MTogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0LXYxOiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrLXYxOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yLXYxOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0LXYxOiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcmstdjE6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuXG4kY29sb3ItcHJpbWFyeTogI2ZmZjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzFmNDBlNjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG5cbiRmb250LWZhbWlseS1wcmltYXJ5OiBcIk1jS2luc2V5IFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBDYWxpYnJpLCBDb3JiZWwsIEhlbHZldGljYSwgUm9ib3RvLCBEcm9pZCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zZWNvbmRhcnk6IFwiQm93ZXJcIiwgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICdzcmMvYXBwL3NoYXJlZC9zdHlsZXMvc2hhcmVkLnN0eWxlcyc7XG5cbi5ib29raW5nLXBhbmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHBvcnRyYWl0KSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgICoge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnJldmVyc2Uge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgfVxufVxuXG4uY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgIC5kZXRhaWxzIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbn1cblxuLnN0YXR1cy12MSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8ocG9ydHJhaXQpIHtcbiAgICAgICAgaGVpZ2h0OiA4ZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8odGFibGV0LWxhbmRzY2FwZSkge1xuICAgICAgICB3aWR0aDogOGVtO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlLXBvcnRyYWl0KSB7XG4gICAgICAgIGhlaWdodDogNGVtO1xuICAgIH1cblxuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUtbGFuZHNjYXBlKSB7XG4gICAgICAgIHdpZHRoOiA2ZW07XG4gICAgfVxuXG4gICAgJi5hdmFpbGFibGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2Vzcy12MTtcbiAgICB9XG5cbiAgICAmLnBlbmRpbmcge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGVuZGluZy12MTtcbiAgICB9XG5cbiAgICAmLnVuYXZhaWxhYmxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVycm9yLXYxO1xuICAgIH1cbn1cblxuLnN0YXR1cyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHBvcnRyYWl0KSB7XG4gICAgICAgIGhlaWdodDogOGVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHRhYmxldC1sYW5kc2NhcGUpIHtcbiAgICAgICAgd2lkdGg6IDEwZW07XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUtcG9ydHJhaXQpIHtcbiAgICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgfVxuXG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZS1sYW5kc2NhcGUpIHtcbiAgICAgICAgd2lkdGg6IDZlbTtcbiAgICB9XG5cbiAgICAmLmF2YWlsYWJsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgJi5hdmFpbGFibGUtYnktcmVxdWVzdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3YXJuaW5nO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgJi5pbi11c2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZXJyb3I7XG4gICAgfVxufVxuXG4udGltZS1kaXNwbGF5LXYxIHtcbiAgICBtYXJnaW46IDEuNWVtIC41ZW07XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHBvcnRyYWl0KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxufVxuXG4udGltZS1kaXNwbGF5IHtcbiAgICBtYXJnaW46IDEuMjVlbSAwLjVlbTtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktcHJpbWFyeTtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8ocG9ydHJhaXQpIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICB9XG5cbiAgICAmLWJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICB9XG59XG5cbi5ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLXdpZHRoOiAxMGVtO1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhwb3J0cmFpdCkge1xuICAgICAgICBtaW4taGVpZ2h0OiA4ZW07XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4ucGFuZWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktc2Vjb25kYXJ5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBtaW4taGVpZ2h0OiAyLjVlbTtcbiAgICBtYXgtaGVpZ2h0OiAyLjVlbTtcbiAgICBtYXgtbGluZXM6IDI7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyOyAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cblxuICAgICYuc2hvdyB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgfVxufVxuXG4uZGV0YWlscy1kaXNwbGF5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTJlbTtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDIuNWVtIDMuNWVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gICAgfVxufVxuXG4uZGV0YWlscy1kaXNwbGF5LXYxIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTJlbTtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIHBhZGRpbmc6IDFlbSAxLjVlbTtcbiAgICB9XG59XG5cbi50aW1lbGluZSB7XG4gICAgaGVpZ2h0OiA0ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZmZmLCAuMDUpO1xufVxuXG4ubm8tdGltZSB7XG4gICAgLnN0YXR1cyB7XG4gICAgICAgIHdpZHRoOiA2ZW07XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhwb3J0cmFpdCkge1xuICAgICAgICAgICAgaGVpZ2h0OiA2ZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlscy1kaXNwbGF5IHtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgfVxufVxuXG4uZG90IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxZW07XG4gICAgcmlnaHQ6IDFlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGVycm9yO1xufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBWMSBBcHBsaWNhdGlvbiBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uYm9va2luZy1wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5ib29raW5nLXBhbmVsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uYm9va2luZy1wYW5lbC5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmJvb2tpbmctcGFuZWwuZGlzYWJsZWQgKiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZy1wYW5lbC5kaXNhYmxlZCAub3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYm9va2luZy1wYW5lbC5yZXZlcnNlIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4uY29udGVudCAuZGV0YWlscyB7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleDogMTtcbn1cblxuLnN0YXR1cy12MSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5zdGF0dXMtdjEge1xuICAgIGhlaWdodDogOGVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiA4MDFweCkgYW5kIChtYXgtd2lkdGg6IDEwNDhweCkge1xuICAuc3RhdHVzLXYxIHtcbiAgICB3aWR0aDogOGVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuc3RhdHVzLXYxIHtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zdGF0dXMtdjEge1xuICAgIHdpZHRoOiA2ZW07XG4gIH1cbn1cbi5zdGF0dXMtdjEuYXZhaWxhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzYTA0Nztcbn1cbi5zdGF0dXMtdjEucGVuZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIzMDA7XG59XG4uc3RhdHVzLXYxLnVuYXZhaWxhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MzkzNTtcbn1cblxuLnN0YXR1cyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLnN0YXR1cyB7XG4gICAgaGVpZ2h0OiA4ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6IDgwMXB4KSBhbmQgKG1heC13aWR0aDogMTA0OHB4KSB7XG4gIC5zdGF0dXMge1xuICAgIHdpZHRoOiAxMGVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuc3RhdHVzIHtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zdGF0dXMge1xuICAgIHdpZHRoOiA2ZW07XG4gIH1cbn1cbi5zdGF0dXMuYXZhaWxhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhYTUzNztcbiAgY29sb3I6IGJsYWNrO1xufVxuLnN0YXR1cy5hdmFpbGFibGUtYnktcmVxdWVzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZkQwNDg7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5zdGF0dXMuaW4tdXNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlMTkyODtcbn1cblxuLnRpbWUtZGlzcGxheS12MSB7XG4gIG1hcmdpbjogMS41ZW0gMC41ZW07XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC50aW1lLWRpc3BsYXktdjEge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbn1cblxuLnRpbWUtZGlzcGxheSB7XG4gIG1hcmdpbjogMS4yNWVtIDAuNWVtO1xuICBmb250LXNpemU6IDEuNmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk1jS2luc2V5IFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBDYWxpYnJpLCBDb3JiZWwsIEhlbHZldGljYSwgUm9ib3RvLCBEcm9pZCwgc2Fucy1zZXJpZjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAudGltZS1kaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICB9XG59XG4udGltZS1kaXNwbGF5LWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuLmJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMTBlbTtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmJvZHkge1xuICAgIG1pbi1oZWlnaHQ6IDhlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnBhbmVsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjZlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgZm9udC1mYW1pbHk6IFwiQm93ZXJcIiwgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgbWluLWhlaWdodDogMi41ZW07XG4gIG1heC1oZWlnaHQ6IDIuNWVtO1xuICBtYXgtbGluZXM6IDI7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnBhbmVsLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5wYW5lbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cbi5wYW5lbC10aXRsZS5zaG93IHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmRldGFpbHMtZGlzcGxheSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEyZW07XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDIuNWVtIDMuNWVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmRldGFpbHMtZGlzcGxheSB7XG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmRldGFpbHMtZGlzcGxheSB7XG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xuICB9XG59XG5cbi5kZXRhaWxzLWRpc3BsYXktdjEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMmVtO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxZW0gMmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmRldGFpbHMtZGlzcGxheS12MSB7XG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmRldGFpbHMtZGlzcGxheS12MSB7XG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xuICB9XG59XG5cbi50aW1lbGluZSB7XG4gIGhlaWdodDogNGVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbn1cblxuLm5vLXRpbWUgLnN0YXR1cyB7XG4gIHdpZHRoOiA2ZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLm5vLXRpbWUgLnN0YXR1cyB7XG4gICAgaGVpZ2h0OiA2ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLm5vLXRpbWUgLmRldGFpbHMtZGlzcGxheSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLmRvdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxZW07XG4gIHJpZ2h0OiAxZW07XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWUxOTI4O1xufSJdfQ== */"];



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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".booking-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n}\n@media only screen and (orientation: portrait) {\n  .booking-panel[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.booking-panel.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.booking-panel.disabled[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n.booking-panel.disabled[_ngcontent-%COMP%]   .overlay[_ngcontent-%COMP%] {\n  display: none;\n}\n.booking-panel.reverse[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n}\n.content[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  height: 100%;\n  flex: 1;\n}\n.status-v1[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 10em;\n  background-color: #aaa;\n  display: flex;\n  align-items: flex-end;\n  justify-content: center;\n  color: #fff;\n  transition: background-color 200ms;\n}\n@media only screen and (orientation: portrait) {\n  .status-v1[_ngcontent-%COMP%] {\n    height: 8em;\n    width: 100%;\n    align-items: center;\n  }\n}\n@media only screen and (orientation: landscape) and (min-width: 801px) and (max-width: 1048px) {\n  .status-v1[_ngcontent-%COMP%] {\n    width: 8em;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .status-v1[_ngcontent-%COMP%] {\n    height: 4em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .status-v1[_ngcontent-%COMP%] {\n    width: 6em;\n  }\n}\n.status-v1.available[_ngcontent-%COMP%] {\n  background-color: #43a047;\n}\n.status-v1.pending[_ngcontent-%COMP%] {\n  background-color: #ffb300;\n}\n.status-v1.unavailable[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n.status[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 10em;\n  background-color: #aaa;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  color: #fff;\n  transition: background-color 200ms;\n  align-items: center;\n}\n@media only screen and (orientation: portrait) {\n  .status[_ngcontent-%COMP%] {\n    height: 8em;\n    width: 100%;\n    align-items: center;\n  }\n}\n@media only screen and (orientation: landscape) and (min-width: 801px) and (max-width: 1048px) {\n  .status[_ngcontent-%COMP%] {\n    width: 10em;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .status[_ngcontent-%COMP%] {\n    height: 4em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .status[_ngcontent-%COMP%] {\n    width: 6em;\n  }\n}\n.status.available[_ngcontent-%COMP%] {\n  background-color: #3aa537;\n  color: black;\n}\n.status.available-by-request[_ngcontent-%COMP%] {\n  background-color: #ffD048;\n  color: black;\n}\n.status.in-use[_ngcontent-%COMP%] {\n  background-color: #ae1928;\n}\n.time-display-v1[_ngcontent-%COMP%] {\n  margin: 1.5em 0.5em;\n  font-size: 1.25em;\n}\n@media only screen and (orientation: portrait) {\n  .time-display-v1[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n  }\n}\n.time-display[_ngcontent-%COMP%] {\n  margin: 1.25em 0.5em;\n  font-size: 1.6em;\n  font-weight: 500;\n  text-align: center;\n  font-family: \"McKinsey Sans\", \"Helvetica Neue\", Calibri, Corbel, Helvetica, Roboto, Droid, sans-serif;\n}\n@media only screen and (orientation: portrait) {\n  .time-display[_ngcontent-%COMP%] {\n    font-size: 2.5em;\n  }\n}\n.time-display-bottom[_ngcontent-%COMP%] {\n  margin-bottom: 2em;\n}\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 10em;\n  flex: 1;\n  height: 100%;\n  background: linear-gradient(135deg, #051c2c, #0a2247, #0a2247, #1e3cd8);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n@media only screen and (orientation: portrait) {\n  .body[_ngcontent-%COMP%] {\n    min-height: 8em;\n    height: auto;\n    width: 100%;\n  }\n}\n.panel-title[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n  line-height: 1.2;\n  word-break: break-word;\n  font-family: \"Bower\", Georgia, \"Times New Roman\" serif;\n  font-weight: bold;\n  margin-bottom: 1em;\n  min-height: 2.5em;\n  max-height: 2.5em;\n  max-lines: 2;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  \n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .panel-title[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .panel-title[_ngcontent-%COMP%] {\n    font-size: 1em;\n  }\n}\n.panel-title.show[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n.details-display[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 12em;\n  flex: 1;\n  padding: 2.5em 3.5em;\n  overflow: hidden;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .details-display[_ngcontent-%COMP%] {\n    padding: 1em 1.5em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .details-display[_ngcontent-%COMP%] {\n    padding: 1em 1.5em;\n  }\n}\n.details-display-v1[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  min-height: 12em;\n  flex: 1;\n  padding: 1em 2em;\n  overflow: hidden;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .details-display-v1[_ngcontent-%COMP%] {\n    padding: 1em 1.5em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .details-display-v1[_ngcontent-%COMP%] {\n    padding: 1em 1.5em;\n  }\n}\n.timeline[_ngcontent-%COMP%] {\n  height: 4em;\n  width: 100%;\n  background-color: rgba(255, 255, 255, 0.05);\n}\n.no-time[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  width: 6em;\n}\n@media only screen and (orientation: portrait) {\n  .no-time[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    height: 6em;\n    width: 100%;\n    align-items: center;\n  }\n}\n.no-time[_ngcontent-%COMP%]   .details-display[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  padding: 1em;\n}\n.dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1em;\n  right: 1em;\n  height: 1.5em;\n  width: 1.5em;\n  border-radius: 50%;\n  background-color: #ae1928;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsL3BhbmVsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9wYW5lbC9wYW5lbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFtQkE7O3dDQUFBO0FBMkJBOztjQUFBO0FBY0E7O3NCQUFBO0FDM0RBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDV0o7QUZxSVE7RUN2SlI7SUFTUSxzQkFBQTtFQ2FOO0FBQ0Y7QURYSTtFQUNJLG9CQUFBO0FDYVI7QURYUTtFQUNJLCtCQUFBO0FDYVo7QURWUTtFQUNJLGFBQUE7QUNZWjtBRFJJO0VBQ0ksMkJBQUE7QUNVUjtBRE5BO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9CQUFBO0FDU0o7QURQSTtFQUNJLFlBQUE7RUFDQSxPQUFBO0FDU1I7QURMQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQ0FBQTtBQ1FKO0FGOEZRO0VDOUdSO0lBV1EsV0FBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQ1NOO0FBQ0Y7QUZxRFE7RUM1RVI7SUFpQlEsVUFBQTtFQ1VOO0FBQ0Y7QUZlUTtFQzNDUjtJQXFCUSxXQUFBO0VDV047QUFDRjtBRk1RO0VDdkNSO0lBMEJRLFVBQUE7RUNXTjtBQUNGO0FEVEk7RUFDSSx5QkRqREs7QUU0RGI7QURSSTtFQUNJLHlCRGpESztBRTJEYjtBRFBJO0VBQ0kseUJEakRHO0FFMERYO0FETEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQ1FKO0FGbURRO0VDcEVSO0lBWVEsV0FBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtFQ1NOO0FBQ0Y7QUZVUTtFQ2xDUjtJQWtCUSxXQUFBO0VDVU47QUFDRjtBRjVCUTtFQ0RSO0lBc0JRLFdBQUE7RUNXTjtBQUNGO0FGckNRO0VDR1I7SUEyQlEsVUFBQTtFQ1dOO0FBQ0Y7QURUSTtFQUNJLHlCRDVHRTtFQzZHRixZQUFBO0FDV1I7QURSSTtFQUNJLHlCRDdHRTtFQzhHRixZQUFBO0FDVVI7QURQSTtFQUNJLHlCRDlHQTtBRXVIUjtBRExBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQ1FKO0FGYVE7RUN2QlI7SUFLUSxnQkFBQTtFQ1NOO0FBQ0Y7QUROQTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUdEMUZrQjtBRW1HdEI7QUZBUTtFQ2RSO0lBUVEsZ0JBQUE7RUNVTjtBQUNGO0FEUkk7RUFDSSxrQkFBQTtBQ1VSO0FETkE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLHVFRG5IUztFQ29IVCxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUNTSjtBRnBCUTtFQ0VSO0lBWVEsZUFBQTtJQUNBLFlBQUE7SUFDQSxXQUFBO0VDVU47QUFDRjtBRFBBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0REMUhvQjtFQzJIcEIsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQXVCLDRCQUFBO0VBQ3ZCLDRCQUFBO0VBQ0EsZ0JBQUE7QUNXSjtBRjNIUTtFQ2tHUjtJQWlCUSxjQUFBO0VDWU47QUFDRjtBRjdIUTtFQytGUjtJQWlCUSxjQUFBO0VDaUJOO0FBQ0Y7QURmSTtFQUNJLG1CQUFBO0FDaUJSO0FEYkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDZ0JKO0FGakpRO0VDMkhSO0lBU1Esa0JBQUE7RUNpQk47QUFDRjtBRm5KUTtFQ3dIUjtJQVNRLGtCQUFBO0VDc0JOO0FBQ0Y7QURuQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDc0JKO0FGcEtRO0VDd0lSO0lBU1Esa0JBQUE7RUN1Qk47QUFDRjtBRnRLUTtFQ3FJUjtJQVNRLGtCQUFBO0VDNEJOO0FBQ0Y7QUR6QkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0FDNEJKO0FEeEJJO0VBQ0ksVUFBQTtBQzJCUjtBRjFHUTtFQzhFSjtJQUlRLFdBQUE7SUFDQSxXQUFBO0lBQ0EsbUJBQUE7RUM0QlY7QUFDRjtBRHpCSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQzJCUjtBRHZCQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJEOU9JO0FFd1FSIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjM2FhNTM3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kd2FybmluZzogI2ZmRDA0ODtcbiR3YXJuaW5nLWxpZ2h0OiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kd2FybmluZy1kYXJrOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yOiAjYWUxOTI4O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgVjEgQXBwbGljYXRpb24gQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzLXYxOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQtdjE6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcmstdjE6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZy12MTogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0LXYxOiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrLXYxOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yLXYxOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0LXYxOiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcmstdjE6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuXG4kY29sb3ItcHJpbWFyeTogI2ZmZjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzFmNDBlNjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG5cbiRmb250LWZhbWlseS1wcmltYXJ5OiBcIk1jS2luc2V5IFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBDYWxpYnJpLCBDb3JiZWwsIEhlbHZldGljYSwgUm9ib3RvLCBEcm9pZCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zZWNvbmRhcnk6IFwiQm93ZXJcIiwgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICdzcmMvYXBwL3NoYXJlZC9zdHlsZXMvc2hhcmVkLnN0eWxlcyc7XG5cbi5ib29raW5nLXBhbmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHBvcnRyYWl0KSB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgJi5kaXNhYmxlZCB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgICoge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5vdmVybGF5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLnJldmVyc2Uge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XG4gICAgfVxufVxuXG4uY29udGVudCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgIC5kZXRhaWxzIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbn1cblxuLnN0YXR1cy12MSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8ocG9ydHJhaXQpIHtcbiAgICAgICAgaGVpZ2h0OiA4ZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8odGFibGV0LWxhbmRzY2FwZSkge1xuICAgICAgICB3aWR0aDogOGVtO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlLXBvcnRyYWl0KSB7XG4gICAgICAgIGhlaWdodDogNGVtO1xuICAgIH1cblxuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUtbGFuZHNjYXBlKSB7XG4gICAgICAgIHdpZHRoOiA2ZW07XG4gICAgfVxuXG4gICAgJi5hdmFpbGFibGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2Vzcy12MTtcbiAgICB9XG5cbiAgICAmLnBlbmRpbmcge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGVuZGluZy12MTtcbiAgICB9XG5cbiAgICAmLnVuYXZhaWxhYmxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVycm9yLXYxO1xuICAgIH1cbn1cblxuLnN0YXR1cyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHBvcnRyYWl0KSB7XG4gICAgICAgIGhlaWdodDogOGVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHRhYmxldC1sYW5kc2NhcGUpIHtcbiAgICAgICAgd2lkdGg6IDEwZW07XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUtcG9ydHJhaXQpIHtcbiAgICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgfVxuXG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZS1sYW5kc2NhcGUpIHtcbiAgICAgICAgd2lkdGg6IDZlbTtcbiAgICB9XG5cbiAgICAmLmF2YWlsYWJsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRzdWNjZXNzO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgJi5hdmFpbGFibGUtYnktcmVxdWVzdCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR3YXJuaW5nO1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgfVxuXG4gICAgJi5pbi11c2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZXJyb3I7XG4gICAgfVxufVxuXG4udGltZS1kaXNwbGF5LXYxIHtcbiAgICBtYXJnaW46IDEuNWVtIC41ZW07XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHBvcnRyYWl0KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxufVxuXG4udGltZS1kaXNwbGF5IHtcbiAgICBtYXJnaW46IDEuMjVlbSAwLjVlbTtcbiAgICBmb250LXNpemU6IDEuNmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktcHJpbWFyeTtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8ocG9ydHJhaXQpIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICB9XG5cbiAgICAmLWJvdHRvbSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJlbTtcbiAgICB9XG59XG5cbi5ib2R5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLXdpZHRoOiAxMGVtO1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6ICRiYWNrZ3JvdW5kO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhwb3J0cmFpdCkge1xuICAgICAgICBtaW4taGVpZ2h0OiA4ZW07XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4ucGFuZWwtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xuICAgIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHktc2Vjb25kYXJ5O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBtaW4taGVpZ2h0OiAyLjVlbTtcbiAgICBtYXgtaGVpZ2h0OiAyLjVlbTtcbiAgICBtYXgtbGluZXM6IDI7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgLXdlYmtpdC1saW5lLWNsYW1wOiAyOyAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xuICAgIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cblxuICAgICYuc2hvdyB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgfVxufVxuXG4uZGV0YWlscy1kaXNwbGF5IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTJlbTtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDIuNWVtIDMuNWVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gICAgfVxufVxuXG4uZGV0YWlscy1kaXNwbGF5LXYxIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTJlbTtcbiAgICBmbGV4OiAxO1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIHBhZGRpbmc6IDFlbSAxLjVlbTtcbiAgICB9XG59XG5cbi50aW1lbGluZSB7XG4gICAgaGVpZ2h0OiA0ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZmZmLCAuMDUpO1xufVxuXG4ubm8tdGltZSB7XG4gICAgLnN0YXR1cyB7XG4gICAgICAgIHdpZHRoOiA2ZW07XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhwb3J0cmFpdCkge1xuICAgICAgICAgICAgaGVpZ2h0OiA2ZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZGV0YWlscy1kaXNwbGF5IHtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgfVxufVxuXG4uZG90IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxZW07XG4gICAgcmlnaHQ6IDFlbTtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGVycm9yO1xufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBWMSBBcHBsaWNhdGlvbiBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uYm9va2luZy1wYW5lbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5ib29raW5nLXBhbmVsIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uYm9va2luZy1wYW5lbC5kaXNhYmxlZCB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmJvb2tpbmctcGFuZWwuZGlzYWJsZWQgKiB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XG59XG4uYm9va2luZy1wYW5lbC5kaXNhYmxlZCAub3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4uYm9va2luZy1wYW5lbC5yZXZlcnNlIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG59XG4uY29udGVudCAuZGV0YWlscyB7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleDogMTtcbn1cblxuLnN0YXR1cy12MSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC5zdGF0dXMtdjEge1xuICAgIGhlaWdodDogOGVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiA4MDFweCkgYW5kIChtYXgtd2lkdGg6IDEwNDhweCkge1xuICAuc3RhdHVzLXYxIHtcbiAgICB3aWR0aDogOGVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuc3RhdHVzLXYxIHtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zdGF0dXMtdjEge1xuICAgIHdpZHRoOiA2ZW07XG4gIH1cbn1cbi5zdGF0dXMtdjEuYXZhaWxhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzYTA0Nztcbn1cbi5zdGF0dXMtdjEucGVuZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIzMDA7XG59XG4uc3RhdHVzLXYxLnVuYXZhaWxhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U1MzkzNTtcbn1cblxuLnN0YXR1cyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgY29sb3I6ICNmZmY7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMjAwbXM7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLnN0YXR1cyB7XG4gICAgaGVpZ2h0OiA4ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6IDgwMXB4KSBhbmQgKG1heC13aWR0aDogMTA0OHB4KSB7XG4gIC5zdGF0dXMge1xuICAgIHdpZHRoOiAxMGVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuc3RhdHVzIHtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zdGF0dXMge1xuICAgIHdpZHRoOiA2ZW07XG4gIH1cbn1cbi5zdGF0dXMuYXZhaWxhYmxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNhYTUzNztcbiAgY29sb3I6IGJsYWNrO1xufVxuLnN0YXR1cy5hdmFpbGFibGUtYnktcmVxdWVzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZkQwNDg7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5zdGF0dXMuaW4tdXNlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlMTkyODtcbn1cblxuLnRpbWUtZGlzcGxheS12MSB7XG4gIG1hcmdpbjogMS41ZW0gMC41ZW07XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gIC50aW1lLWRpc3BsYXktdjEge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gIH1cbn1cblxuLnRpbWUtZGlzcGxheSB7XG4gIG1hcmdpbjogMS4yNWVtIDAuNWVtO1xuICBmb250LXNpemU6IDEuNmVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk1jS2luc2V5IFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBDYWxpYnJpLCBDb3JiZWwsIEhlbHZldGljYSwgUm9ib3RvLCBEcm9pZCwgc2Fucy1zZXJpZjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAudGltZS1kaXNwbGF5IHtcbiAgICBmb250LXNpemU6IDIuNWVtO1xuICB9XG59XG4udGltZS1kaXNwbGF5LWJvdHRvbSB7XG4gIG1hcmdpbi1ib3R0b206IDJlbTtcbn1cblxuLmJvZHkge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi13aWR0aDogMTBlbTtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLmJvZHkge1xuICAgIG1pbi1oZWlnaHQ6IDhlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnBhbmVsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjZlbTtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcbiAgZm9udC1mYW1pbHk6IFwiQm93ZXJcIiwgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiBzZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgbWluLWhlaWdodDogMi41ZW07XG4gIG1heC1oZWlnaHQ6IDIuNWVtO1xuICBtYXgtbGluZXM6IDI7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcbiAgLXdlYmtpdC1saW5lLWNsYW1wOiAyO1xuICAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnBhbmVsLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5wYW5lbC10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxZW07XG4gIH1cbn1cbi5wYW5lbC10aXRsZS5zaG93IHtcbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbn1cblxuLmRldGFpbHMtZGlzcGxheSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEyZW07XG4gIGZsZXg6IDE7XG4gIHBhZGRpbmc6IDIuNWVtIDMuNWVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmRldGFpbHMtZGlzcGxheSB7XG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmRldGFpbHMtZGlzcGxheSB7XG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xuICB9XG59XG5cbi5kZXRhaWxzLWRpc3BsYXktdjEge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMmVtO1xuICBmbGV4OiAxO1xuICBwYWRkaW5nOiAxZW0gMmVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmRldGFpbHMtZGlzcGxheS12MSB7XG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmRldGFpbHMtZGlzcGxheS12MSB7XG4gICAgcGFkZGluZzogMWVtIDEuNWVtO1xuICB9XG59XG5cbi50aW1lbGluZSB7XG4gIGhlaWdodDogNGVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KTtcbn1cblxuLm5vLXRpbWUgLnN0YXR1cyB7XG4gIHdpZHRoOiA2ZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgLm5vLXRpbWUgLnN0YXR1cyB7XG4gICAgaGVpZ2h0OiA2ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgfVxufVxuLm5vLXRpbWUgLmRldGFpbHMtZGlzcGxheSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLmRvdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxZW07XG4gIHJpZ2h0OiAxZW07XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWUxOTI4O1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/shell/panel/panel.component.ts":
/*!************************************************!*\
  !*** ./src/app/shell/panel/panel.component.ts ***!
  \************************************************/
/*! exports provided: RoomDisplayStatus, BookingPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomDisplayStatus", function() { return RoomDisplayStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingPanelComponent", function() { return BookingPanelComponent; });
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/data/spaces/space.class */ "./src/app/services/data/spaces/space.class.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







var RoomDisplayStatus;
(function (RoomDisplayStatus) {
    RoomDisplayStatus["Available"] = "available";
    RoomDisplayStatus["NotBookable"] = "not-bookable";
    RoomDisplayStatus["AvailableByRequest"] = "available-by-request";
    RoomDisplayStatus["InUse"] = "in-use";
    RoomDisplayStatus["Pending"] = "none";
})(RoomDisplayStatus || (RoomDisplayStatus = {}));
class BookingPanelComponent extends _shared_base_component__WEBPACK_IMPORTED_MODULE_0__["BaseComponent"] {
    constructor(_service, _route) {
        super();
        this._service = _service;
        this._route = _route;
        /** Whether to show the time at the bottom of the status */
        this.show_time = true;
        /** Whether user interaction is enabled for the panel */
        this.interactive = true;
    }
    setSpace(space) {
        this.space = space;
    }
    /** Get the display value for the status */
    get status_display() {
        if (!this.websocket_connected && !this._service.setting('show_status_when_disconnected')) {
            return ' ';
        }
        if (this.status_overrides && Object.keys(this.status_overrides).length === 1) {
            this._status = this.space.current ? 'unavailable' : Object.keys(this.status_overrides)[0];
        }
        const status = (!this.hide_all ? this._status : null) || 'not-bookable';
        return (this.status_overrides || [])[status] || this._status;
    }
    /** Current status of the active system */
    get status() {
        if (!this.websocket_connected && !this._service.setting('show_status_when_disconnected')) {
            return 'not-bookable';
        }
        // Perform any status overrides
        this.updateStatus();
        if (this.status_overrides &&
            Object.keys(this.status_overrides).length === 1 &&
            (this.space && !this.space.current || this._status !== 'unavailable')) {
            this._status = Object.keys(this.status_overrides)[0];
        }
        return this._status;
    }
    get displayStatus() {
        // if we have not loaded rules, keep pending state.
        if (!this.rules) {
            return RoomDisplayStatus.Pending;
        }
        switch (this.status) {
            case 'available':
                if (!this.rules.auto_approve) {
                    return RoomDisplayStatus.AvailableByRequest;
                }
                return RoomDisplayStatus.Available;
            case 'not-bookable':
                return RoomDisplayStatus.NotBookable;
            case 'pending':
                return RoomDisplayStatus.Pending;
            case 'unavailable':
                return RoomDisplayStatus.InUse;
        }
    }
    get statusText() {
        const localStatus = this.status;
        const overrideDisplay = this.status_overrides && this.status_overrides[localStatus];
        if (overrideDisplay) {
            return overrideDisplay;
        }
        switch (this.displayStatus) {
            case RoomDisplayStatus.Available:
                return 'Available';
            case RoomDisplayStatus.NotBookable:
                return 'Unbookable';
            case RoomDisplayStatus.AvailableByRequest:
                return 'Available By Request';
            case RoomDisplayStatus.InUse:
                return 'In Use';
            case RoomDisplayStatus.Pending:
                return '';
        }
    }
    /** Whether booking details should be shown */
    get show_details() {
        return this.websocket_connected || !!this._service.setting('show_status_when_disconnected');
    }
    /** Display string for the current time */
    get display_time() {
        if (this.isV1()) {
            return dayjs__WEBPACK_IMPORTED_MODULE_2__().format('h:mm A');
        }
        else {
            return dayjs__WEBPACK_IMPORTED_MODULE_2__().format('h:mma');
        }
    }
    ngOnInit() {
        this.subscription('app_ready', this._service.initialised.subscribe((is_ready) => {
            if (is_ready) {
                this.subscription('route.params', this._route.paramMap.subscribe(params => {
                    if (params.has('system_id')) {
                        this.system_id = params.get('system_id');
                        this._service.set('system', this.system_id);
                    }
                }));
                this.subscription('get_current_space', this._service.Spaces
                    .listen('list')
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(spaces => spaces.filter(space => space.id === this.system_id)))
                    .subscribe(value => {
                    if (value.length >= 1) {
                        console.log('SPACE LOADED');
                        this.space = value[0];
                    }
                }));
                this.subscription('levels', this._service.Organisation.listen('levels')
                    .subscribe(() => {
                    console.log('RULES');
                    // this requires a refactor, but essentially the rules will check for building
                    // levels. We need to listen for level loading to then load the rules.
                    this.rules = this.space && this.space.rulesFor({});
                }));
                this.timeout('websocket', () => {
                    this.websocket_connected = true;
                    // status().subscribe(status => this.websocket_connected = status);
                });
                this.unsub('app_ready');
            }
        }));
    }
    isV1() {
        var _a;
        return ((_a = this.space) === null || _a === void 0 ? void 0 : _a.theme_rbp) === _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_1__["SpaceTheme"].v1;
    }
    /**
     * Update the bookings for the active space
     * @param bookings Array of raw booking data
     */
    updateBookings(bookings) {
        if (!this.space) {
            this.setSpace(new _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_1__["Space"](this._service.Spaces, {
                id: this.system_id,
                name: this.space_name,
                bookings
            }));
        }
        else {
            this.setSpace(new _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_1__["Space"](this._service.Spaces, Object.assign(Object.assign({}, this.space), { bookings })));
        }
    }
    /**
     * Update the current status of the active space
     */
    updateStatus() {
        if (this.hide_all) {
            this._status = null;
        }
        else {
            if (this.space && (this.space.current || this.space.next)) {
                const booking = this.space.current || this.space.next;
                this._status = this.space.current ? 'unavailable' : 'available';
                if (this.pending_timeout) {
                    const now = dayjs__WEBPACK_IMPORTED_MODULE_2__();
                    const date = dayjs__WEBPACK_IMPORTED_MODULE_2__(booking.date).startOf('m');
                    if (this.last_started >= now.valueOf() || this.last_started >= date.valueOf()) {
                        this._status = 'unavailable';
                    }
                    else {
                        // Only meetings with durations less than 8 hours can be pending or cancelled
                        const pending_start = date.subtract(this.pending_timeout, 's');
                        const pending_end = date.add(this.cancel_timeout || this.pending_timeout, 's');
                        const end = date.add(booking.duration, 'm');
                        if (now.isAfter(pending_start, 's') && now.isBefore(pending_end, 's')) {
                            this._status = 'pending';
                        }
                        else if (now.isAfter(pending_end, 's') && now.isBefore(end, 'm')) {
                            this._status = 'pending';
                            const business_start = dayjs__WEBPACK_IMPORTED_MODULE_2__(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_5__["timeToDate"])(this.business_start || '08:00'));
                            const business_end = dayjs__WEBPACK_IMPORTED_MODULE_2__(Object(_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_5__["timeToDate"])(this.business_end || '17:30'));
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
    }
    /**
     * Execute end meeting logic on engine driver
     * @param reason Reason for ending the meeting early
     */
    endMeeting(reason = 'user_input') {
        if (this.space && this.can_cancel !== false) {
            const meeting = this.space.current || this.space.next;
            const module = this._service.Systems.get(this.space.id, 'Bookings');
            if (meeting.duration >= 8 * 60 && reason === 'timeout') {
                reason = 'hide multi-day';
            }
            if (meeting && module && meeting.date !== this.last_cancel) {
                const date = dayjs__WEBPACK_IMPORTED_MODULE_2__(meeting.date);
                module.execute('cancel_meeting', [meeting.date, reason]).then(_ => {
                    this._service.Analytics.event('Checkin', 'cancelled', `${this.space.id} at ${date.format('DD MMM YYYY, h:mm A Z')} | ${reason}`);
                    this.last_cancel = meeting.date;
                }, e => {
                    this._service.notifyError(`Error cancelling meeting. ${e}`);
                    this._service.Analytics.event('Checkin', 'cancel-failed', `${this.space.id} at ${date.format('DD MMM YYYY, h:mm A Z')} | ${reason}`);
                });
            }
        }
    }
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/directives/binding/binding.directive */ "./src/app/shared/directives/binding/binding.directive.ts");
/* harmony import */ var _space_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./space-details.component */ "./src/app/shell/panel/space-details/space-details.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 





var styles_PanelSpaceDetailsComponent = [_space_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PanelSpaceDetailsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PanelSpaceDetailsComponent, data: {} });

function View_PanelSpaceDetailsComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "host"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.current == null) ? null : ((_co.space.current.organiser == null) ? null : _co.space.current.organiser.name)); _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Booked until ", " on ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.current == null) ? null : _co.space.current.end_time); var currVal_1 = ((_co.space.current == null) ? null : _co.space.current.end_date); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_PanelSpaceDetailsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "details current"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Current Booking:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.hide_user && !_co.hide_details); _ck(_v, 4, 0, currVal_0); var currVal_1 = !_co.hide_availability; _ck(_v, 6, 0, currVal_1); }, null); }
function View_PanelSpaceDetailsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "host"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.next == null) ? null : ((_co.space.next.organiser == null) ? null : _co.space.next.organiser.name)); _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Booked at ", " on ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.next == null) ? null : _co.space.next.start_time); var currVal_1 = ((_co.space.next == null) ? null : _co.space.next.start_date); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_PanelSpaceDetailsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "details next"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Next Booking:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (!_co.hide_user && !_co.hide_details); _ck(_v, 4, 0, currVal_0); var currVal_1 = !_co.hide_availability; _ck(_v, 6, 0, currVal_1); }, null); }
function View_PanelSpaceDetailsComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Room Availability:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, [" Free at ", " on ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space.current.end_time; var currVal_1 = _co.space.current.end_date; _ck(_v, 3, 0, currVal_0, currVal_1); }); }
function View_PanelSpaceDetailsComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "details other"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "b", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Make a reservation at:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" roombooking.intranet.mckinsey.com "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.hide_availability; _ck(_v, 2, 0, currVal_0); }, null); }
function View_PanelSpaceDetailsComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.icon; _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "information"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.icon; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 2, 0, currVal_0); var currVal_2 = _co.description; _ck(_v, 7, 0, currVal_2); }); }
function View_PanelSpaceDetailsComponent_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "hide_details"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_details = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "hide_title"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_title = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "hide_availability"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_availability = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "i", [["bind", "hide_user"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_user = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["bind", "title"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.title = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [["bind", "description"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.description = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "i", [["bind", "icon"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.icon = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space.id; var currVal_1 = "Bookings"; var currVal_2 = "hide_details"; var currVal_3 = _co.hide_details; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.space.id; var currVal_5 = "Bookings"; var currVal_6 = "hide_title"; var currVal_7 = _co.hide_title; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _co.space.id; var currVal_9 = "Bookings"; var currVal_10 = "hide_availability"; var currVal_11 = _co.hide_availability; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = _co.space.id; var currVal_13 = "Bookings"; var currVal_14 = "hide_user"; var currVal_15 = _co.hide_user; _ck(_v, 8, 0, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_16 = _co.space.id; var currVal_17 = "Bookings"; var currVal_18 = "title"; var currVal_19 = _co.title; _ck(_v, 10, 0, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_20 = _co.space.id; var currVal_21 = "Bookings"; var currVal_22 = "description"; var currVal_23 = _co.description; _ck(_v, 12, 0, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_24 = _co.space.id; var currVal_25 = "Bookings"; var currVal_26 = "icon"; var currVal_27 = _co.icon; _ck(_v, 14, 0, currVal_24, currVal_25, currVal_26, currVal_27); }, null); }
function View_PanelSpaceDetailsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 11, "div", [["class", "space-booking-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "booking-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.space && _co.space.current); _ck(_v, 3, 0, currVal_0); var currVal_1 = (_co.space && _co.space.next); _ck(_v, 5, 0, currVal_1); var currVal_2 = (_co.space && _co.space.current); _ck(_v, 7, 0, currVal_2); var currVal_3 = (_co.title || _co.description); _ck(_v, 9, 0, currVal_3); var currVal_4 = _co.space; _ck(_v, 11, 0, currVal_4); }, null); }
function View_PanelSpaceDetailsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-panel-space-details", [], null, null, null, View_PanelSpaceDetailsComponent_0, RenderType_PanelSpaceDetailsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _space_details_component__WEBPACK_IMPORTED_MODULE_4__["PanelSpaceDetailsComponent"], [], null, null)], null, null); }
var PanelSpaceDetailsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-panel-space-details", _space_details_component__WEBPACK_IMPORTED_MODULE_4__["PanelSpaceDetailsComponent"], View_PanelSpaceDetailsComponent_Host_0, { space: "space" }, {}, []);



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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".space-booking-details[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.booking-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  justify-content: start;\n  margin-bottom: 32px;\n}\n.booking-container[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.details[_ngcontent-%COMP%] {\n  font: \"McKinsey Sans\", \"Helvetica Neue\", Calibri, Corbel, Helvetica, Roboto, Droid, sans-serif;\n  font-size: 1.5em;\n  margin-bottom: 0.5em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .details[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .details[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n.current[_ngcontent-%COMP%] {\n  font-weight: 500;\n  margin-right: 2.5em;\n}\n.heading[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.other[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  margin-top: 1em;\n}\n.time[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n.time[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 6em;\n  max-height: 6em;\n  margin-right: 1em;\n}\n.text[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsL3NwYWNlLWRldGFpbHMvc3BhY2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvcGFuZWwvc3BhY2UtZGV0YWlscy9zcGFjZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQW1CQTs7d0NBQUE7QUEyQkE7O2NBQUE7QUFjQTs7c0JBQUE7QUMzREE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDV0o7QURSQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDV0o7QURUSTtFQUNJLE9BQUE7QUNXUjtBRFBBO0VBQ0ksOEZEaUNrQjtFQ2hDbEIsZ0JBQUE7RUFDQSxvQkFBQTtBQ1VKO0FGMENRO0VDdkRSO0lBTVEsZ0JBQUE7RUNXTjtBQUNGO0FGd0NRO0VDMURSO0lBTVEsZ0JBQUE7RUNnQk47QUFDRjtBRGJBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQ2dCSjtBRE5BO0VBQ0ksbUJBQUE7QUNTSjtBRE5BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FDU0o7QURIQTtFQUNJLGtCQUFBO0FDTUo7QURKSTtFQUNJLGdCQUFBO0FDTVI7QURGQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0tKO0FESEk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDS1I7QUREQTtFQUNJLGdCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9wYW5lbC9zcGFjZS1kZXRhaWxzL3NwYWNlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjM2FhNTM3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kd2FybmluZzogI2ZmRDA0ODtcbiR3YXJuaW5nLWxpZ2h0OiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kd2FybmluZy1kYXJrOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yOiAjYWUxOTI4O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgVjEgQXBwbGljYXRpb24gQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzLXYxOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQtdjE6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcmstdjE6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZy12MTogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0LXYxOiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrLXYxOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yLXYxOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0LXYxOiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcmstdjE6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuXG4kY29sb3ItcHJpbWFyeTogI2ZmZjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzFmNDBlNjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG5cbiRmb250LWZhbWlseS1wcmltYXJ5OiBcIk1jS2luc2V5IFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBDYWxpYnJpLCBDb3JiZWwsIEhlbHZldGljYSwgUm9ib3RvLCBEcm9pZCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zZWNvbmRhcnk6IFwiQm93ZXJcIiwgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICdzcmMvYXBwL3NoYXJlZC9zdHlsZXMvc2hhcmVkLnN0eWxlcyc7XG5cbi5zcGFjZS1ib29raW5nLWRldGFpbHMge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ib29raW5nLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMzJweDtcblxuICAgIC5kZXRhaWxzIHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG59XG5cbi5kZXRhaWxzIHtcbiAgICBmb250OiAkZm9udC1mYW1pbHktcHJpbWFyeTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbn1cblxuLmN1cnJlbnQge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAyLjVlbTtcbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHRhYmxldCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVlbTtcbiAgICB9XG59XG5cbi5uZXh0IHtcblxufVxuXG4uaGVhZGluZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLm90aGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi5ob3N0IHtcbn1cblxuLnRpbWUge1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcblxuICAgIGIge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbn1cblxuLmJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDZlbTtcbiAgICAgICAgbWF4LWhlaWdodDogNmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICB9XG59XG5cbi50ZXh0IHtcbiAgICBmb250LXNpemU6IC45ZW07XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFYxIEFwcGxpY2F0aW9uIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5zcGFjZS1ib29raW5nLWRldGFpbHMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5ib29raW5nLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiAzMnB4O1xufVxuLmJvb2tpbmctY29udGFpbmVyIC5kZXRhaWxzIHtcbiAgZmxleDogMTtcbn1cblxuLmRldGFpbHMge1xuICBmb250OiBcIk1jS2luc2V5IFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBDYWxpYnJpLCBDb3JiZWwsIEhlbHZldGljYSwgUm9ib3RvLCBEcm9pZCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuZGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5kZXRhaWxzIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICB9XG59XG5cbi5jdXJyZW50IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLXJpZ2h0OiAyLjVlbTtcbn1cblxuLmhlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ub3RoZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICBtYXJnaW4tdG9wOiAxZW07XG59XG5cbi50aW1lIHtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuLnRpbWUgYiB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYmxvY2sgaW1nIHtcbiAgbWF4LXdpZHRoOiA2ZW07XG4gIG1heC1oZWlnaHQ6IDZlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAwLjllbTtcbn0iXX0= */"];



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

class PanelSpaceDetailsComponent {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/directives/binding/binding.directive */ "./src/app/shared/directives/binding/binding.directive.ts");
/* harmony import */ var _timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline.component */ "./src/app/shell/panel/timeline/timeline.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
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
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "hide_all"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_all = $event) !== false);
        ad = (pd_0 && ad);
    } if (("modelChange" === en)) {
        var pd_1 = (_co.checkBookings() !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "booking_disabled"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.no_bookings = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "i", [["bind", "no_timeline_bookings"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.no_timeline_bookings = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["bind", "default_title"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.default_title = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [["bind", "min_duration"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.min_duration = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "i", [["bind", "max_duration"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.max_duration = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_4__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space.id; var currVal_1 = "Bookings"; var currVal_2 = "hide_availability"; var currVal_3 = _co.hide_status; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.space.id; var currVal_5 = "Bookings"; var currVal_6 = "hide_all"; var currVal_7 = _co.hide_all; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _co.space.id; var currVal_9 = "Bookings"; var currVal_10 = "booking_disabled"; var currVal_11 = _co.no_bookings; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = _co.space.id; var currVal_13 = "Bookings"; var currVal_14 = "no_timeline_bookings"; var currVal_15 = _co.no_timeline_bookings; _ck(_v, 8, 0, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_16 = _co.space.id; var currVal_17 = "Bookings"; var currVal_18 = "default_title"; var currVal_19 = _co.default_title; _ck(_v, 10, 0, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_20 = _co.space.id; var currVal_21 = "Bookings"; var currVal_22 = "min_duration"; var currVal_23 = _co.min_duration; _ck(_v, 12, 0, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_24 = _co.space.id; var currVal_25 = "Bookings"; var currVal_26 = "max_duration"; var currVal_27 = _co.max_duration; _ck(_v, 14, 0, currVal_24, currVal_25, currVal_26, currVal_27); }, null); }
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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".timeline[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 4em;\n  z-index: 1;\n}\n.block-list[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n}\n.block-list[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.overlay[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.block[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  height: 100%;\n}\n.block.show[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  display: initial;\n}\n.block.in-use[_ngcontent-%COMP%] {\n  background-color: rgba(174, 25, 40, 0.6);\n}\n.hour[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75em;\n  left: 0;\n  transform: translateX(-50%);\n  z-index: 2;\n}\n.bar[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  width: 1px;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  transform: translateX(-50%);\n  border-right: 1px dashed rgba(255, 255, 255, 0.2);\n}\n.bar.hour[_ngcontent-%COMP%] {\n  top: 60%;\n  width: 1px;\n  border: none;\n  background-color: #fff;\n}\n.expired[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 3;\n}\n.current-block[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 0;\n  z-index: 4;\n}\n.current-block[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  width: 2px;\n  border: none;\n  display: initial;\n  background-color: #fff;\n}\n.triangle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -0.25em;\n  transform: translateX(-50%);\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0.8em 0.8em 0 0.8em;\n  border-color: #fff transparent transparent transparent;\n}\n.time-display[_ngcontent-%COMP%] {\n  position: absolute;\n  transform: translateX(-50%);\n  bottom: calc(100% + .5em);\n  white-space: nowrap;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9wYW5lbC90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFtQkE7O3dDQUFBO0FBMkJBOztjQUFBO0FBY0E7O3NCQUFBO0FDMURBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7QUNVSjtBRFBBOztFQUVJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1VKO0FEUEE7RUFDSSxnQkFBQTtBQ1VKO0FEUEE7RUFDSSxvQkFBQTtBQ1VKO0FEUEE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0FDVUo7QURQUTtFQUNJLGdCQUFBO0FDU1o7QURMSTtFQUNJLHdDQUFBO0FDT1I7QURIQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUNNSjtBREhBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsVUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0EsaURBQUE7QUNNSjtBREpJO0VBQ0ksUUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7QUNNUjtBREZBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7QUNLSjtBREZBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFPQSxVQUFBO0FDREo7QURMSTtFQUNJLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkRwRFE7QUUyRGhCO0FERkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQ0FBQTtFQUNBLHNEQUFBO0FDS0o7QURGQTtFQUNJLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNLSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3BhbmVsL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzNhYTUzNztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHdhcm5pbmc6ICNmZkQwNDg7XG4kd2FybmluZy1saWdodDogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHdhcm5pbmctZGFyazogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvcjogI2FlMTkyODtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFYxIEFwcGxpY2F0aW9uIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2Vzcy12MTogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0LXYxOiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrLXYxOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmctdjE6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodC12MTogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHBlbmRpbmctZGFyay12MTogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvci12MTogI2U1MzkzNTtcbiRlcnJvci1saWdodC12MTogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrLXYxOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kZm9udC1mYW1pbHktcHJpbWFyeTogXCJNY0tpbnNleSBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQ2FsaWJyaSwgQ29yYmVsLCBIZWx2ZXRpY2EsIFJvYm90bywgRHJvaWQsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBcIkJvd2VyXCIsIEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIgc2VyaWY7XG5cbiRiYXNlLXNpemU6IDIwcHg7XG4kdGFibGV0LXNpemU6IDIwcHg7XG4kbW9iaWxlLXNpemU6IDIwcHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLnRpbWVsaW5lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0ZW07XG4gICAgei1pbmRleDogMTtcbn1cblxuLmJsb2NrLWxpc3QsXG4ub3ZlcmxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ibG9jay1saXN0IHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ibG9jayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgJi5zaG93IHtcbiAgICAgICAgLmJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5pbi11c2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRlcnJvciwgLjYpO1xuICAgIH1cbn1cblxuLmhvdXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC43NWVtO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHotaW5kZXg6IDI7XG59XG5cbi5iYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAxcHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBkYXNoZWQgcmdiYSgjZmZmLCAuMik7XG5cbiAgICAmLmhvdXIge1xuICAgICAgICB0b3A6IDYwJTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbn1cblxuLmV4cGlyZWQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAuNik7XG4gICAgei1pbmRleDogMztcbn1cblxuLmN1cnJlbnQtYmxvY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAwO1xuICAgIC5iYXIge1xuICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIH1cbiAgICB6LWluZGV4OiA0O1xufVxuXG4udHJpYW5nbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC0uMjVlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAuOGVtIC44ZW0gMCAuOGVtO1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXByaW1hcnkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi50aW1lLWRpc3BsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgYm90dG9tOiBjYWxjKDEwMCUgKyAuNWVtKTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgVjEgQXBwbGljYXRpb24gQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLnRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0ZW07XG4gIHotaW5kZXg6IDE7XG59XG5cbi5ibG9jay1saXN0LFxuLm92ZXJsYXkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJsb2NrLWxpc3Qge1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ub3ZlcmxheSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5ibG9jay5zaG93IC5iYXIge1xuICBkaXNwbGF5OiBpbml0aWFsO1xufVxuLmJsb2NrLmluLXVzZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTc0LCAyNSwgNDAsIDAuNik7XG59XG5cbi5ob3VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDAuNzVlbTtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB6LWluZGV4OiAyO1xufVxuXG4uYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMXB4O1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3JkZXItcmlnaHQ6IDFweCBkYXNoZWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xufVxuLmJhci5ob3VyIHtcbiAgdG9wOiA2MCU7XG4gIHdpZHRoOiAxcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmV4cGlyZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIHotaW5kZXg6IDM7XG59XG5cbi5jdXJyZW50LWJsb2NrIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDA7XG4gIHotaW5kZXg6IDQ7XG59XG4uY3VycmVudC1ibG9jayAuYmFyIHtcbiAgd2lkdGg6IDJweDtcbiAgYm9yZGVyOiBub25lO1xuICBkaXNwbGF5OiBpbml0aWFsO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4udHJpYW5nbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTAuMjVlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAuOGVtIDAuOGVtIDAgMC44ZW07XG4gIGJvcmRlci1jb2xvcjogI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLnRpbWUtZGlzcGxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBib3R0b206IGNhbGMoMTAwJSArIC41ZW0pO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"];



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/data/spaces/space.class */ "./src/app/services/data/spaces/space.class.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _timeline_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timeline.utils */ "./src/app/shell/panel/timeline/timeline.utils.ts");






class PanelTimelineComponent extends _shared_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(service) {
        super();
        this.service = service;
        /** Emitter for user events on the timeline */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** List of display time block  */
        this.time_blocks = [];
    }
    /** Display string for the current time */
    get display_time() {
        return dayjs__WEBPACK_IMPORTED_MODULE_3__().format('h:mm A');
    }
    ngOnInit() {
        this.generateTimelineBlocks();
        this.interval('update_blocks', () => this.generateTimelineBlocks(), 60 * 1000);
    }
    ngOnChanges(changes) {
        this.generateTimelineBlocks();
    }
    /**
     * Generate time blocks to display
     */
    generateTimelineBlocks() {
        this.time_blocks = Object(_timeline_utils__WEBPACK_IMPORTED_MODULE_5__["calculateTimelineBlocks"])(this.options);
        this.checkBookings();
    }
    /**
     * Update the statuses of time blocks based off space bookings
     */
    checkBookings() {
        if (this.space && this.space.todays_bookings) {
            this.time_blocks = Object(_timeline_utils__WEBPACK_IMPORTED_MODULE_5__["evaluateBookingsInUse"])(this.time_blocks, this.space.bookings, !this.hide_status && !this.hide_all, this.options);
        }
    }
    /**
     * Open modal to make a new booking
     */
    book(block) {
        this.service.Bookings.new({
            space: this.space,
            date: block.value,
            title: this.default_title,
            max_duration: this.max_duration,
            min_duration: this.min_duration
        });
    }
}


/***/ }),

/***/ "./src/app/shell/panel/timeline/timeline.utils.ts":
/*!********************************************************!*\
  !*** ./src/app/shell/panel/timeline/timeline.utils.ts ***!
  \********************************************************/
/*! exports provided: DEFAULT_START_OFFSET, DEFAULT_DURATION, DEFAULT_BLOCK_SIZE, TIME_BLOCK_SEPARATOR_MINUTES, calculateTimelineBlocks, evaluateBookingsInUse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_START_OFFSET", function() { return DEFAULT_START_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DURATION", function() { return DEFAULT_DURATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_BLOCK_SIZE", function() { return DEFAULT_BLOCK_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TIME_BLOCK_SEPARATOR_MINUTES", function() { return TIME_BLOCK_SEPARATOR_MINUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateTimelineBlocks", function() { return calculateTimelineBlocks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "evaluateBookingsInUse", function() { return evaluateBookingsInUse; });
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);

const DEFAULT_START_OFFSET = 120;
const DEFAULT_DURATION = 720;
const DEFAULT_BLOCK_SIZE = 30;
const TIME_BLOCK_SEPARATOR_MINUTES = 5;
/**
 * Calculate time blocks to display
 */
const calculateTimelineBlocks = (options) => {
    const nowInMinutes = dayjs__WEBPACK_IMPORTED_MODULE_0__().startOf('m');
    const now = nowInMinutes.minute(Math.round(nowInMinutes.minute() / 5) * 5);
    const start = now.subtract((options ? options.start_offset : null) || DEFAULT_START_OFFSET, 'm');
    const end = start.add((options ? options.duration : null) || DEFAULT_DURATION, 'm');
    let date = dayjs__WEBPACK_IMPORTED_MODULE_0__(start);
    const timeBlocks = [];
    while (date.isBefore(end, 'm')) {
        // clamp by 12 for 12 hour system.
        const clampedHour = date.hour() % 12;
        timeBlocks.push({
            value: date.valueOf(),
            show: (date.minute() % ((options ? options.block_size : null) || DEFAULT_BLOCK_SIZE)) === 0,
            hour: date.minute() === 0 ? (clampedHour === 0 ? 12 : clampedHour) : null,
            in_use: false
        });
        date = date.add(TIME_BLOCK_SEPARATOR_MINUTES, 'm');
    }
    return timeBlocks;
};
/**
 * Will find and adjust each block to show if they're in use or not depending on the start and end of the bookings passed in.
 * @param timeBlocks The existing set of time blocks.
 * @param bookings The bookings to compare and find which are in use.
 * @param showInUse If false, we do not set timeBlocks status to "in_use".
 * @param options
 */
const evaluateBookingsInUse = (timeBlocks, bookings, showInUse, options) => {
    const blockStart = dayjs__WEBPACK_IMPORTED_MODULE_0__().subtract((options ? options.start_offset : null) || DEFAULT_START_OFFSET, 'm');
    const blockEnd = dayjs__WEBPACK_IMPORTED_MODULE_0__().add((options ? options.duration : null) || DEFAULT_DURATION, 'm');
    // Filter bookings for the shown times
    const shownBookings = bookings.filter(i => {
        const start = dayjs__WEBPACK_IMPORTED_MODULE_0__(i.date);
        const end = start.add(i.duration, 'm');
        return end.isAfter(blockStart, 'm') && start.isBefore(blockEnd, 'm');
    });
    const newBlocks = [...timeBlocks];
    newBlocks.forEach(i => i.in_use = false);
    if (showInUse) {
        for (const booking of shownBookings) {
            const start = dayjs__WEBPACK_IMPORTED_MODULE_0__(booking.date);
            const end = start.add(booking.duration, 'm');
            for (const block of timeBlocks) {
                const blockTime = dayjs__WEBPACK_IMPORTED_MODULE_0__(block.value);
                if (blockTime.isSame(start, 'm') || (blockTime.isAfter(start, 'm') && blockTime.isBefore(end, 'm'))) {
                    block.in_use = true;
                }
            }
        }
    }
    return newBlocks;
};


/***/ }),

/***/ "./src/app/shell/panel/v1/panel-details-display-v1.component.ngfactory.js":
/*!********************************************************************************!*\
  !*** ./src/app/shell/panel/v1/panel-details-display-v1.component.ngfactory.js ***!
  \********************************************************************************/
/*! exports provided: RenderType_PanelDetailsDisplayV1Component, View_PanelDetailsDisplayV1Component_0, View_PanelDetailsDisplayV1Component_Host_0, PanelDetailsDisplayV1ComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PanelDetailsDisplayV1Component", function() { return RenderType_PanelDetailsDisplayV1Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PanelDetailsDisplayV1Component_0", function() { return View_PanelDetailsDisplayV1Component_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PanelDetailsDisplayV1Component_Host_0", function() { return View_PanelDetailsDisplayV1Component_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelDetailsDisplayV1ComponentNgFactory", function() { return PanelDetailsDisplayV1ComponentNgFactory; });
/* harmony import */ var _panel_details_display_v1_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./panel-details-display-v1.component.scss.ngstyle */ "./src/app/shell/panel/v1/panel-details-display-v1.component.scss.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _space_details_space_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./space-details/space-details.component.ngfactory */ "./src/app/shell/panel/v1/space-details/space-details.component.ngfactory.js");
/* harmony import */ var _space_details_space_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./space-details/space-details.component */ "./src/app/shell/panel/v1/space-details/space-details.component.ts");
/* harmony import */ var _booking_actions_booking_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../booking-actions/booking-actions.component.ngfactory */ "./src/app/shell/panel/booking-actions/booking-actions.component.ngfactory.js");
/* harmony import */ var _booking_actions_booking_actions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../booking-actions/booking-actions.component */ "./src/app/shell/panel/booking-actions/booking-actions.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _custom_actions_custom_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../custom-actions/custom-actions.component.ngfactory */ "./src/app/shell/panel/custom-actions/custom-actions.component.ngfactory.js");
/* harmony import */ var _custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../custom-actions/custom-actions.component */ "./src/app/shell/panel/custom-actions/custom-actions.component.ts");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _panel_details_display_v1_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./panel-details-display-v1.component */ "./src/app/shell/panel/v1/panel-details-display-v1.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 












var styles_PanelDetailsDisplayV1Component = [_panel_details_display_v1_component_scss_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PanelDetailsDisplayV1Component = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 2, styles: styles_PanelDetailsDisplayV1Component, data: {} });

function View_PanelDetailsDisplayV1Component_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "panel-space-details", [], null, null, null, _space_details_space_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_PanelSpaceDetailsComponentV1_0"], _space_details_space_details_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_PanelSpaceDetailsComponentV1"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _space_details_space_details_component__WEBPACK_IMPORTED_MODULE_3__["PanelSpaceDetailsComponentV1"], [], { space: [0, "space"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space; _ck(_v, 2, 0, currVal_0); }, null); }
function View_PanelDetailsDisplayV1Component_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "panel-booking-actions", [], null, null, null, _booking_actions_booking_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_PanelBookingActionsComponent_0"], _booking_actions_booking_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_PanelBookingActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _booking_actions_booking_actions_component__WEBPACK_IMPORTED_MODULE_5__["PanelBookingActionsComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]], { space: [0, "space"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "panel-custom-actions", [], null, null, null, _custom_actions_custom_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_PanelCustomActionsComponent_0"], _custom_actions_custom_actions_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_PanelCustomActionsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, _custom_actions_custom_actions_component__WEBPACK_IMPORTED_MODULE_8__["PanelCustomActionsComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]], { space: [0, "space"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space; _ck(_v, 2, 0, currVal_0); var currVal_1 = _co.space; _ck(_v, 4, 0, currVal_1); }, null); }
function View_PanelDetailsDisplayV1Component_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "title"]], [[2, "show", null]], [[null, "tapped"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("tapped" === en)) {
        var pd_0 = (_co.showTitle() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 4341760, null, 0, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__["ɵb"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelDetailsDisplayV1Component_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelDetailsDisplayV1Component_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_4 = (!_co.hide_all && _co.show_details); _ck(_v, 7, 0, currVal_4); var currVal_5 = (!_co.hide_all && _co.show_details); _ck(_v, 9, 0, currVal_5); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.show_title; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.space_name; _ck(_v, 3, 0, currVal_1); var currVal_2 = ("status-text" + ((_co.status && !_co.hide_all) ? (" " + _co.status) : "")); _ck(_v, 4, 0, currVal_2); var currVal_3 = ((!_co.hide_all ? _co.status_display : null) || "Not Bookable"); _ck(_v, 5, 0, currVal_3); }); }
function View_PanelDetailsDisplayV1Component_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-details-display-1", [], null, null, null, View_PanelDetailsDisplayV1Component_0, RenderType_PanelDetailsDisplayV1Component)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _panel_details_display_v1_component__WEBPACK_IMPORTED_MODULE_11__["PanelDetailsDisplayV1Component"], [], null, null)], null, null); }
var PanelDetailsDisplayV1ComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-details-display-1", _panel_details_display_v1_component__WEBPACK_IMPORTED_MODULE_11__["PanelDetailsDisplayV1Component"], View_PanelDetailsDisplayV1Component_Host_0, { show_title: "show_title", space_name: "space_name", status: "status", space: "space", show_details: "show_details", hide_all: "hide_all", status_display: "status_display" }, {}, []);



/***/ }),

/***/ "./src/app/shell/panel/v1/panel-details-display-v1.component.scss.ngstyle.js":
/*!***********************************************************************************!*\
  !*** ./src/app/shell/panel/v1/panel-details-display-v1.component.scss.ngstyle.js ***!
  \***********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n\n\n\n.title {\n  font-size: 3em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-weight: 400;\n  font-family: \"LarishMcKinsey\", \"Georgia\", serif;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .title {\n    font-size: 2em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .title {\n    font-size: 2em;\n  }\n}\n.title.show {\n  white-space: normal;\n}\n.status-text {\n  font-size: 2em;\n  text-transform: capitalize;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: #ccc;\n  transition: color 200ms;\n  margin-bottom: 0.25em;\n  font-family: \"LarishMcKinsey\", \"Georgia\", serif;\n  transition: color 200ms;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .status-text {\n    font-size: 1.5em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .status-text {\n    font-size: 1.5em;\n  }\n}\n.status-text.available {\n  color: #43a047;\n}\n.status-text.pending {\n  color: #ffb300;\n}\n.status-text.unavailable {\n  color: #e53935;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsL3YxL3BhbmVsLWRldGFpbHMtZGlzcGxheS12MS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvcGFuZWwvdjEvcGFuZWwtZGV0YWlscy1kaXNwbGF5LXYxLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQW1CQTs7d0NBQUE7QUEyQkE7O2NBQUE7QUFjQTs7c0JBQUE7QUMzREE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQ0Q0Q1c7QUVqQ2Y7QUZ3RFE7RUN6RVI7SUFTUSxjQUFBO0VDWU47QUFDRjtBRnNEUTtFQzVFUjtJQVNRLGNBQUE7RUNpQk47QUFDRjtBRGZJO0VBQ0ksbUJBQUE7QUNpQlI7QURiQTtFQUNJLGNBQUE7RUFDQSwwQkFBQTtFQUVBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLCtDRHdCVztFQ3ZCWCx1QkFBQTtBQ2VKO0FGK0JRO0VDeERSO0lBYVEsZ0JBQUE7RUNnQk47QUFDRjtBRjZCUTtFQzNEUjtJQWFRLGdCQUFBO0VDcUJOO0FBQ0Y7QURuQkk7RUFDSSxjRFpLO0FFaUNiO0FEbEJJO0VBQ0ksY0RaSztBRWdDYjtBRGpCSTtFQUNJLGNEWkc7QUUrQlgiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9wYW5lbC92MS9wYW5lbC1kZXRhaWxzLWRpc3BsYXktdjEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjM2FhNTM3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kd2FybmluZzogI2ZmRDA0ODtcbiR3YXJuaW5nLWxpZ2h0OiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kd2FybmluZy1kYXJrOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yOiAjYWUxOTI4O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgVjEgQXBwbGljYXRpb24gQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzLXYxOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQtdjE6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcmstdjE6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZy12MTogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0LXYxOiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrLXYxOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yLXYxOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0LXYxOiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcmstdjE6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuXG4kY29sb3ItcHJpbWFyeTogI2ZmZjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzFmNDBlNjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG5cbiRmb250LWZhbWlseS1wcmltYXJ5OiBcIk1jS2luc2V5IFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBDYWxpYnJpLCBDb3JiZWwsIEhlbHZldGljYSwgUm9ib3RvLCBEcm9pZCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zZWNvbmRhcnk6IFwiQm93ZXJcIiwgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICdzcmMvYXBwL3NoYXJlZC9zdHlsZXMvc2hhcmVkLnN0eWxlcyc7XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAzZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1mYW1pbHk6ICRoZWFkaW5nLWZvbnQ7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICB9XG5cbiAgICAmLnNob3cge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xuICAgIH1cbn1cblxuLnN0YXR1cy10ZXh0IHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAvLyB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgY29sb3I6ICNjY2M7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XG4gICAgbWFyZ2luLWJvdHRvbTogLjI1ZW07XG4gICAgZm9udC1mYW1pbHk6ICRoZWFkaW5nLWZvbnQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cblxuICAgICYuYXZhaWxhYmxlIHtcbiAgICAgICAgY29sb3I6ICRzdWNjZXNzLXYxO1xuICAgIH1cblxuICAgICYucGVuZGluZyB7XG4gICAgICAgIGNvbG9yOiAkcGVuZGluZy12MTtcbiAgICB9XG5cbiAgICAmLnVuYXZhaWxhYmxlIHtcbiAgICAgICAgY29sb3I6ICRlcnJvci12MTtcbiAgICB9XG59XG5cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgVjEgQXBwbGljYXRpb24gQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAzZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LWZhbWlseTogXCJMYXJpc2hNY0tpbnNleVwiLCBcIkdlb3JnaWFcIiwgc2VyaWY7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAudGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgfVxufVxuLnRpdGxlLnNob3cge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuXG4uc3RhdHVzLXRleHQge1xuICBmb250LXNpemU6IDJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBjb2xvcjogI2NjYztcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcbiAgZm9udC1mYW1pbHk6IFwiTGFyaXNoTWNLaW5zZXlcIiwgXCJHZW9yZ2lhXCIsIHNlcmlmO1xuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5zdGF0dXMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zdGF0dXMtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgfVxufVxuLnN0YXR1cy10ZXh0LmF2YWlsYWJsZSB7XG4gIGNvbG9yOiAjNDNhMDQ3O1xufVxuLnN0YXR1cy10ZXh0LnBlbmRpbmcge1xuICBjb2xvcjogI2ZmYjMwMDtcbn1cbi5zdGF0dXMtdGV4dC51bmF2YWlsYWJsZSB7XG4gIGNvbG9yOiAjZTUzOTM1O1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/shell/panel/v1/panel-details-display-v1.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shell/panel/v1/panel-details-display-v1.component.ts ***!
  \**********************************************************************/
/*! exports provided: PanelDetailsDisplayV1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelDetailsDisplayV1Component", function() { return PanelDetailsDisplayV1Component; });
/* harmony import */ var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../services/data/spaces/space.class */ "./src/app/services/data/spaces/space.class.ts");
/* harmony import */ var _shared_base_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/base.class */ "./src/app/shared/base.class.ts");


class PanelDetailsDisplayV1Component extends _shared_base_class__WEBPACK_IMPORTED_MODULE_1__["BaseClass"] {
    /**
     * Show full room name if overflowing
     */
    showTitle() {
        this.show_title = true;
        this.timeout('hide_title', () => (this.show_title = false), 3000);
    }
}


/***/ }),

/***/ "./src/app/shell/panel/v1/space-details/space-details.component.ngfactory.js":
/*!***********************************************************************************!*\
  !*** ./src/app/shell/panel/v1/space-details/space-details.component.ngfactory.js ***!
  \***********************************************************************************/
/*! exports provided: RenderType_PanelSpaceDetailsComponentV1, View_PanelSpaceDetailsComponentV1_0, View_PanelSpaceDetailsComponentV1_Host_0, PanelSpaceDetailsComponentV1NgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_PanelSpaceDetailsComponentV1", function() { return RenderType_PanelSpaceDetailsComponentV1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PanelSpaceDetailsComponentV1_0", function() { return View_PanelSpaceDetailsComponentV1_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_PanelSpaceDetailsComponentV1_Host_0", function() { return View_PanelSpaceDetailsComponentV1_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelSpaceDetailsComponentV1NgFactory", function() { return PanelSpaceDetailsComponentV1NgFactory; });
/* harmony import */ var _space_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space-details.component.scss.shim.ngstyle */ "./src/app/shell/panel/v1/space-details/space-details.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/binding/binding.directive */ "./src/app/shared/directives/binding/binding.directive.ts");
/* harmony import */ var _space_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./space-details.component */ "./src/app/shell/panel/v1/space-details/space-details.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 





var styles_PanelSpaceDetailsComponentV1 = [_space_details_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_PanelSpaceDetailsComponentV1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_PanelSpaceDetailsComponentV1, data: {} });

function View_PanelSpaceDetailsComponentV1_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Booked until ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.current == null) ? null : _co.space.current.end_time); _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponentV1_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.current == null) ? null : _co.space.current.title); _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponentV1_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "host"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.current == null) ? null : ((_co.space.current.organiser == null) ? null : _co.space.current.organiser.name)); _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponentV1_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "details current"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponentV1_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponentV1_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponentV1_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.hide_availability; _ck(_v, 2, 0, currVal_0); var currVal_1 = (!_co.hide_title && !_co.hide_details); _ck(_v, 4, 0, currVal_1); var currVal_2 = (!_co.hide_user && !_co.hide_details); _ck(_v, 6, 0, currVal_2); }, null); }
function View_PanelSpaceDetailsComponentV1_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["Next meeting at ", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.next == null) ? null : _co.space.next.start_time); _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponentV1_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.next == null) ? null : _co.space.next.title); _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponentV1_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "host"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_co.space.next == null) ? null : ((_co.space.next.organiser == null) ? null : _co.space.next.organiser.name)); _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponentV1_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "details next"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponentV1_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponentV1_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponentV1_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.hide_availability; _ck(_v, 2, 0, currVal_0); var currVal_1 = (!_co.hide_title && !_co.hide_details); _ck(_v, 4, 0, currVal_1); var currVal_2 = (!_co.hide_user && !_co.hide_details); _ck(_v, 6, 0, currVal_2); }, null); }
function View_PanelSpaceDetailsComponentV1_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "time"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" Free ", " ", " "]))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.space.current ? ("at " + _co.space.current.end_time) : ""); var currVal_1 = (_co.space.next ? ("until " + _co.space.next.start_time) : ""); _ck(_v, 1, 0, currVal_0, currVal_1); }); }
function View_PanelSpaceDetailsComponentV1_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "details other"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponentV1_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = !_co.hide_availability; _ck(_v, 2, 0, currVal_0); }, null); }
function View_PanelSpaceDetailsComponentV1_12(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "img", [], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.icon; _ck(_v, 1, 0, currVal_0); }); }
function View_PanelSpaceDetailsComponentV1_11(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "information"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "title"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 4, "div", [["class", "block"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponentV1_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], function (_ck, _v) { var _co = _v.component; var currVal_1 = _co.icon; _ck(_v, 5, 0, currVal_1); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.title; _ck(_v, 2, 0, currVal_0); var currVal_2 = _co.description; _ck(_v, 7, 0, currVal_2); }); }
function View_PanelSpaceDetailsComponentV1_13(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 14, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "hide_details"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_details = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "hide_title"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_title = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "i", [["bind", "hide_availability"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_availability = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "i", [["bind", "hide_user"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.hide_user = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["bind", "title"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.title = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [["bind", "description"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.description = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "i", [["bind", "icon"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = ((_co.icon = $event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_3__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.space.id; var currVal_1 = "Bookings"; var currVal_2 = "hide_details"; var currVal_3 = _co.hide_details; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.space.id; var currVal_5 = "Bookings"; var currVal_6 = "hide_title"; var currVal_7 = _co.hide_title; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7); var currVal_8 = _co.space.id; var currVal_9 = "Bookings"; var currVal_10 = "hide_availability"; var currVal_11 = _co.hide_availability; _ck(_v, 6, 0, currVal_8, currVal_9, currVal_10, currVal_11); var currVal_12 = _co.space.id; var currVal_13 = "Bookings"; var currVal_14 = "hide_user"; var currVal_15 = _co.hide_user; _ck(_v, 8, 0, currVal_12, currVal_13, currVal_14, currVal_15); var currVal_16 = _co.space.id; var currVal_17 = "Bookings"; var currVal_18 = "title"; var currVal_19 = _co.title; _ck(_v, 10, 0, currVal_16, currVal_17, currVal_18, currVal_19); var currVal_20 = _co.space.id; var currVal_21 = "Bookings"; var currVal_22 = "description"; var currVal_23 = _co.description; _ck(_v, 12, 0, currVal_20, currVal_21, currVal_22, currVal_23); var currVal_24 = _co.space.id; var currVal_25 = "Bookings"; var currVal_26 = "icon"; var currVal_27 = _co.icon; _ck(_v, 14, 0, currVal_24, currVal_25, currVal_26, currVal_27); }, null); }
function View_PanelSpaceDetailsComponentV1_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "space-booking-details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponentV1_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponentV1_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponentV1_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponentV1_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_PanelSpaceDetailsComponentV1_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.space && _co.space.current); _ck(_v, 2, 0, currVal_0); var currVal_1 = (_co.space && _co.space.next); _ck(_v, 4, 0, currVal_1); var currVal_2 = ((_co.space && _co.space.current) && _co.space.next); _ck(_v, 6, 0, currVal_2); var currVal_3 = (_co.title || _co.description); _ck(_v, 8, 0, currVal_3); var currVal_4 = _co.space; _ck(_v, 10, 0, currVal_4); }, null); }
function View_PanelSpaceDetailsComponentV1_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "panel-space-details", [], null, null, null, View_PanelSpaceDetailsComponentV1_0, RenderType_PanelSpaceDetailsComponentV1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _space_details_component__WEBPACK_IMPORTED_MODULE_4__["PanelSpaceDetailsComponentV1"], [], null, null)], null, null); }
var PanelSpaceDetailsComponentV1NgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("panel-space-details", _space_details_component__WEBPACK_IMPORTED_MODULE_4__["PanelSpaceDetailsComponentV1"], View_PanelSpaceDetailsComponentV1_Host_0, { space: "space" }, {}, []);



/***/ }),

/***/ "./src/app/shell/panel/v1/space-details/space-details.component.scss.shim.ngstyle.js":
/*!*******************************************************************************************!*\
  !*** ./src/app/shell/panel/v1/space-details/space-details.component.scss.shim.ngstyle.js ***!
  \*******************************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".details[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  margin-bottom: 0.5em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .details[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .details[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n}\n.current[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.next[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: #ffb300;\n}\n.other[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  color: #43a047;\n}\n.host[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  color: rgba(255, 255, 255, 0.6);\n}\n.time[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n}\n.information[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  margin-bottom: 0.6em;\n}\n.block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.block[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 6em;\n  max-height: 6em;\n  margin-right: 1em;\n}\n.text[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3BhbmVsL3YxL3NwYWNlLWRldGFpbHMvc3BhY2UtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvcGFuZWwvdjEvc3BhY2UtZGV0YWlscy9zcGFjZS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQW1CQTs7d0NBQUE7QUEyQkE7O2NBQUE7QUFjQTs7c0JBQUE7QUMxREE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FDVUo7QUY0RFE7RUN4RVI7SUFLUSxnQkFBQTtFQ1dOO0FBQ0Y7QUYwRFE7RUMzRVI7SUFLUSxnQkFBQTtFQ2dCTjtBQUNGO0FEWkk7RUFDSSxjRGtCRztBRUhYO0FEVkk7RUFDSSxjRFFLO0FFS2I7QURSSTtFQUNJLGNERks7QUVhYjtBRFBBO0VBQ0ksZ0JBQUE7RUFDQSwrQkFBQTtBQ1VKO0FEUEE7RUFDSSxvQkFBQTtBQ1VKO0FETkk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0FDU1I7QURMQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ1FKO0FETkk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUVI7QURKQTtFQUNJLGdCQUFBO0FDT0oiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9wYW5lbC92MS9zcGFjZS1kZXRhaWxzL3NwYWNlLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjM2FhNTM3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kd2FybmluZzogI2ZmRDA0ODtcbiR3YXJuaW5nLWxpZ2h0OiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kd2FybmluZy1kYXJrOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yOiAjYWUxOTI4O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgVjEgQXBwbGljYXRpb24gQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzLXYxOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQtdjE6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcmstdjE6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZy12MTogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0LXYxOiBsaWdodGVuKCR3YXJuaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrLXYxOiBkYXJrZW4oJHdhcm5pbmcsIDEwKTtcblxuJGVycm9yLXYxOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0LXYxOiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcmstdjE6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuXG4kY29sb3ItcHJpbWFyeTogI2ZmZjtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzFmNDBlNjtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA1MWMyYywgIzBhMjI0NywgIzBhMjI0NywgIzFlM2NkOCk7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udDogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG5cbiRmb250LWZhbWlseS1wcmltYXJ5OiBcIk1jS2luc2V5IFNhbnNcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBDYWxpYnJpLCBDb3JiZWwsIEhlbHZldGljYSwgUm9ib3RvLCBEcm9pZCwgc2Fucy1zZXJpZjtcbiRmb250LWZhbWlseS1zZWNvbmRhcnk6IFwiQm93ZXJcIiwgR2VvcmdpYSwgXCJUaW1lcyBOZXcgUm9tYW5cIiBzZXJpZjtcblxuJGJhc2Utc2l6ZTogMjBweDtcbiR0YWJsZXQtc2l6ZTogMjBweDtcbiRtb2JpbGUtc2l6ZTogMjBweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzJztcblxuLmRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxufVxuXG4uY3VycmVudCB7XG4gICAgLnRpbWUge1xuICAgICAgICBjb2xvcjogJGVycm9yLXYxO1xuICAgIH1cbn1cblxuLm5leHQge1xuICAgIC50aW1lIHtcbiAgICAgICAgY29sb3I6ICRwZW5kaW5nLXYxO1xuICAgIH1cbn1cblxuLm90aGVyIHtcbiAgICAudGltZSB7XG4gICAgICAgIGNvbG9yOiAkc3VjY2Vzcy12MTtcbiAgICB9XG59XG5cbi5ob3N0IHtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgY29sb3I6IHJnYmEoJGZvbnQtbGlnaHQsIC42KTtcbn1cblxuLnRpbWUge1xuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG59XG5cbi5pbmZvcm1hdGlvbiB7XG4gICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjZlbTtcbiAgICB9XG59XG5cbi5ibG9jayB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiA2ZW07XG4gICAgICAgIG1heC1oZWlnaHQ6IDZlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgfVxufVxuXG4udGV4dCB7XG4gICAgZm9udC1zaXplOiAuOWVtO1xufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBWMSBBcHBsaWNhdGlvbiBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uZGV0YWlscyB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmRldGFpbHMge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgfVxufVxuXG4uY3VycmVudCAudGltZSB7XG4gIGNvbG9yOiAjZTUzOTM1O1xufVxuXG4ubmV4dCAudGltZSB7XG4gIGNvbG9yOiAjZmZiMzAwO1xufVxuXG4ub3RoZXIgLnRpbWUge1xuICBjb2xvcjogIzQzYTA0Nztcbn1cblxuLmhvc3Qge1xuICBmb250LXNpemU6IDAuOWVtO1xuICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpO1xufVxuXG4udGltZSB7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuXG4uaW5mb3JtYXRpb24gLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMC42ZW07XG59XG5cbi5ibG9jayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYmxvY2sgaW1nIHtcbiAgbWF4LXdpZHRoOiA2ZW07XG4gIG1heC1oZWlnaHQ6IDZlbTtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi50ZXh0IHtcbiAgZm9udC1zaXplOiAwLjllbTtcbn0iXX0= */"];



/***/ }),

/***/ "./src/app/shell/panel/v1/space-details/space-details.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shell/panel/v1/space-details/space-details.component.ts ***!
  \*************************************************************************/
/*! exports provided: PanelSpaceDetailsComponentV1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelSpaceDetailsComponentV1", function() { return PanelSpaceDetailsComponentV1; });
/* harmony import */ var _services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../services/data/spaces/space.class */ "./src/app/services/data/spaces/space.class.ts");

class PanelSpaceDetailsComponentV1 {
}


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/directives/binding/binding.directive */ "./src/app/shared/directives/binding/binding.directive.ts");
/* harmony import */ var _node_modules_acaprojects_ngx_spinners_acaprojects_ngx_spinners_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory */ "./node_modules/@acaprojects/ngx-spinners/acaprojects-ngx-spinners.ngfactory.js");
/* harmony import */ var _acaprojects_ngx_spinners__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acaprojects/ngx-spinners */ "./node_modules/@acaprojects/ngx-spinners/fesm2015/acaprojects-ngx-spinners.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shell_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shell.component */ "./src/app/shell/shell.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
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
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"], model: [3, "model"] }, { modelChange: "modelChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["bind", "reload"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("modelChange" === en)) {
        var pd_0 = (_co.reloadAt($event) !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _shared_directives_binding_binding_directive__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], { sys: [0, "sys"], mod: [1, "mod"], bind: [2, "bind"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.system_id; var currVal_1 = "Bookings"; var currVal_2 = "room_name"; var currVal_3 = _co.system_name; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3); var currVal_4 = _co.system_id; var currVal_5 = "Bookings"; var currVal_6 = "reload"; _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6); }, null); }
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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = [".view[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n.loading-block[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.1em;\n  background-color: #fff;\n  z-index: 2;\n}\n.loading-block[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.8em;\n}\n.loading-block[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-top: 0.5em;\n  font-size: 4em;\n}\n.version[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 4px;\n  left: 8px;\n  font-size: 10px;\n  color: rgba(255, 255, 255, 0.35);\n  z-index: 9999;\n}\n.version.loading[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.35);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3NoZWxsL3NoZWxsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9zaGVsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFtQkE7O3dDQUFBO0FBMkJBOztjQUFBO0FBY0E7O3NCQUFBO0FDMURBO0VBQ0ksVUFBQTtBQ1VKO0FEUEE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUNVSjtBRFJJO0VBQ0ksZ0JBQUE7QUNVUjtBRFBJO0VBQ0ksaUJBQUE7RUFDQSxjQUFBO0FDU1I7QURMQTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGFBQUE7QUNRSjtBRE5JO0VBQ0ksMEJBQUE7QUNRUiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3NoZWxsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzNhYTUzNztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHdhcm5pbmc6ICNmZkQwNDg7XG4kd2FybmluZy1saWdodDogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHdhcm5pbmctZGFyazogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvcjogI2FlMTkyODtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFYxIEFwcGxpY2F0aW9uIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2Vzcy12MTogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0LXYxOiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrLXYxOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmctdjE6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodC12MTogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHBlbmRpbmctZGFyay12MTogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvci12MTogI2U1MzkzNTtcbiRlcnJvci1saWdodC12MTogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrLXYxOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kZm9udC1mYW1pbHktcHJpbWFyeTogXCJNY0tpbnNleSBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQ2FsaWJyaSwgQ29yYmVsLCBIZWx2ZXRpY2EsIFJvYm90bywgRHJvaWQsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBcIkJvd2VyXCIsIEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIgc2VyaWY7XG5cbiRiYXNlLXNpemU6IDIwcHg7XG4kdGFibGV0LXNpemU6IDIwcHg7XG4kbW9iaWxlLXNpemU6IDIwcHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLnZpZXcge1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5sb2FkaW5nLWJsb2NrIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgei1pbmRleDogMjtcblxuICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xuICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICB9XG59XG5cbi52ZXJzaW9uIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiA0cHg7XG4gICAgbGVmdDogOHB4O1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICBjb2xvcjogcmdiYSgkZm9udC1saWdodCwgLjM1KTtcbiAgICB6LWluZGV4OiA5OTk5O1xuXG4gICAgJi5sb2FkaW5nIHtcbiAgICAgICAgY29sb3I6IHJnYmEoJGZvbnQtZGFyaywgLjM1KTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFYxIEFwcGxpY2F0aW9uIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi52aWV3IHtcbiAgei1pbmRleDogMTtcbn1cblxuLmxvYWRpbmctYmxvY2sge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4xZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHotaW5kZXg6IDI7XG59XG4ubG9hZGluZy1ibG9jayAudGl0bGUge1xuICBmb250LXNpemU6IDEuOGVtO1xufVxuLmxvYWRpbmctYmxvY2sgLmljb24ge1xuICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgZm9udC1zaXplOiA0ZW07XG59XG5cbi52ZXJzaW9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDRweDtcbiAgbGVmdDogOHB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMzUpO1xuICB6LWluZGV4OiA5OTk5O1xufVxuLnZlcnNpb24ubG9hZGluZyB7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufSJdfQ== */"];



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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/base.component */ "./src/app/shared/base.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_globals_application__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/globals/application */ "./src/app/shared/globals/application.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);





class ShellWrapperComponent extends _shared_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"] {
    constructor(_service, _router) {
        super();
        this._service = _service;
        this._router = _router;
        /** List of informational messages to display while connecting to the active system */
        this.info_messages = [
            'If this message persists, check you network connection and then try reloading this page.',
            'It seems to be taking a while. Make sure the selected system is valid.',
            'Still nothing, huh. Are you authenticated? Do you have have a network connection?',
            'Try reloading the page. If this persists contact your administrator.'
        ];
        /** Index of the info message being displayed */
        this.message_index = 0;
    }
    /** Current version of the application */
    get version() {
        return _shared_globals_application__WEBPACK_IMPORTED_MODULE_3__["version"];
    }
    /** Current version of the application */
    get build() {
        const now = dayjs__WEBPACK_IMPORTED_MODULE_4__();
        const built = _shared_globals_application__WEBPACK_IMPORTED_MODULE_3__["build"].format('DD/MM/YY HH:mm');
        return built;
    }
    get show_version() {
        return this._service.setting('app.show_version');
    }
    ngOnInit() {
        this.subscription('app_ready', this._service.initialised.subscribe((is_ready) => {
            var _a;
            if (is_ready) {
                // Listen for system changes
                this.subscription('system', this._service.listen('system', (value) => this.system_id = value));
                // Listen for routing events
                this.page = ((_a = this._router.url) === null || _a === void 0 ? void 0 : _a.split('/')[1]) || '';
                this.subscription('router.change', this._router.events.subscribe(event => {
                    if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_0__["NavigationEnd"]) {
                        this.page = this._router.url.split('/')[1] || '';
                    }
                }));
                this.unsub('app_ready');
            }
        }));
    }
    /**
     * Check if the system data has loaded
     * @param delay Delay before first loading message update
     */
    checkLoading(delay = 3000) {
        console.log('Check Loading:', this.system_name);
        if (!this.system_name) {
            this.message_index = 0;
            this.timeout('update_msg', () => this.updateMessage(), delay);
        }
    }
    /**
     * Update the index of the info message displayed
     */
    updateMessage() {
        if (!this.system_id) {
            return;
        }
        this.message_index++;
        if (this.message_index === this.info_messages.length) {
            this.message_index--;
            return;
        }
        this.timeout('update_msg', () => this.updateMessage(), 3000);
    }
    /**
     * Schedule a reload the UI for a future time
     * @param time Time to reload the UI
     */
    reloadAt(time) {
        if (time && typeof time === 'number') {
            this.clearTimeout('reload_ui');
            const now = dayjs__WEBPACK_IMPORTED_MODULE_4__().startOf('s');
            const reload_at_time = dayjs__WEBPACK_IMPORTED_MODULE_4__((time || 0) * 1000).startOf('s');
            const diff = reload_at_time.diff(now, 'ms');
            if (diff > 100) {
                this.timeout('reload_ui', () => location.reload(true), diff);
            }
        }
        this.timeout('update_msg', () => this.updateMessage(), 3000);
    }
}


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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n\n\n\n@font-face {\n  font-family: 'Material Icons';\n  font-style: normal;\n  font-weight: 400;\n  src: url(MaterialIcons-Regular.eot); \n  src: local('Material Icons'),\n       local('MaterialIcons-Regular'),\n       url(MaterialIcons-Regular.woff2) format('woff2'),\n       url(MaterialIcons-Regular.woff) format('woff'),\n       url(MaterialIcons-Regular.ttf) format('truetype');\n}\n.material-icons {\n  font-family: 'Material Icons';\n  font-weight: normal;\n  font-style: normal;\n  font-size: 24px;  \n  display: inline-block;\n  line-height: 1;\n  text-transform: none;\n  letter-spacing: normal;\n  word-wrap: normal;\n  white-space: nowrap;\n  direction: ltr;\n\n  \n  -webkit-font-smoothing: antialiased;\n  \n  text-rendering: optimizeLegibility;\n\n  \n  -moz-osx-font-smoothing: grayscale;\n\n  \n  font-feature-settings: 'liga';\n}\n\n@font-face {\n    font-family: 'LarishMcKinsey';\n    font-style: normal;\n    font-weight: 400;\n    src: url('Larish_McKinsey_Regular.eot'); \n    src: local('LarishMcKinsey'), local('LarishMcKinseyRegular'),\n          url('Larish_McKinsey_Regular.eot?#iefix') format('embedded-opentype'), \n          url('Larish_McKinsey_Regular.woff2') format('woff2'), \n          url('Larish_McKinsey_Regular.woff') format('woff'), \n          url('Larish_McKinsey_Regular.ttf') format('truetype'), \n          url('Larish_McKinsey_Regular.svg#LarishMcKinseyRegular') format('svg'); \n}\n\n@font-face {\n    font-family: 'LarishMcKinsey';\n    font-style: normal;\n    font-weight: 500;\n    src: url('Larish_McKinsey_Semibold.eot'); \n    src: local('LarishMcKinsey'), local('LarishMcKinseySemibold'),\n          url('Larish_McKinsey_Semibold.eot?#iefix') format('embedded-opentype'), \n          url('Larish_McKinsey_Semibold.woff2') format('woff2'), \n          url('Larish_McKinsey_Semibold.woff') format('woff'), \n          url('Larish_McKinsey_Semibold.ttf') format('truetype'), \n          url('Larish_McKinsey_Semibold.svg#LarishMcKinseySemibold') format('svg'); \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: normal;\n    font-weight: 300;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-Light.ttf') format('truetype'), \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: italic;\n    font-weight: 300;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-LightItalic.ttf') format('truetype'), \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: normal;\n    font-weight: 400;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-Regular.ttf') format('truetype'), \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: italic;\n    font-weight: 400;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-Italic.ttf') format('truetype'), \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: normal;\n    font-weight: 500;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-Medium.ttf') format('truetype'), \n}\n\n@font-face {\n    font-family: 'Theinhardt';\n    font-style: italic;\n    font-weight: 500;\n    src: local('Theinhardt'),\n          url('TheinhardtTT-MediumItalic.ttf') format('truetype'), \n}\n@font-face {\n    font-display: swap;\n    font-family: \"McKinsey Sans\";\n    font-style: normal;\n    font-weight: normal;\n    src: url(https://cdn.mckinsey.com/assets/fonts/web/McKinseySans-Regular.woff)\n}\n@font-face {\n    font-display: swap;\n    font-family: \"McKinsey Sans\";\n    font-style: italic;\n    font-weight: normal;\n    src: url(https://cdn.mckinsey.com/assets/fonts/web/McKinseySans-Italic.woff)\n}\n@font-face {\n    font-display: swap;\n    font-family: \"McKinsey Sans\";\n    font-style: normal;\n    font-weight: 500;\n    src: url(https://cdn.mckinsey.com/assets/fonts/web/McKinseySans-Medium.woff)\n}\n@font-face {\n    font-display: swap;\n    font-family: \"McKinsey Sans\";\n    font-style: italic;\n    font-weight: 500;\n    src: url(https://cdn.mckinsey.com/assets/fonts/web/McKinseySans-MediumItalic.woff)\n}\n@font-face {\n    font-display: swap;\n    font-family: \"McKinsey Sans\";\n    font-style: normal;\n    font-weight: 100;\n    src: url(https://cdn.mckinsey.com/assets/fonts/web/McKinseySans-Light.woff)\n}\n@font-face {\n    font-display: swap;\n    font-family: \"McKinsey Sans\";\n    font-style: italic;\n    font-weight: 100;\n    src: url(https://cdn.mckinsey.com/assets/fonts/web/McKinseySans-LightItalic.woff)\n}\n@font-face {\n    font-display: swap;\n    font-family: \"Bower\";\n    font-style: normal;\n    font-weight: bold;\n    src: url(https://cdn.mckinsey.com/assets/fonts/web/Bower-Bold.woff)\n}\n@media only screen and (orientation: portrait) and (min-width: 800px) {\n  html,\nbody {\n    font-size: 20px;\n  }\n}\n@media only screen and (orientation: landscape) and (min-width: 1048px) {\n  html,\nbody {\n    font-size: 20px;\n  }\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  html,\nbody {\n    font-size: 20px;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  html,\nbody {\n    font-size: 20px;\n  }\n}\n* {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  font-family: \"Theinhardt\", \"Helvetica Neue\", Arial, sans-serif;\n  box-sizing: border-box;\n}\n.material-icons {\n  font-size: 1em;\n}\nspan.highlight {\n  color: #fff;\n}\n\n.fs-small {\n  font-size: 0.8rem;\n}\n.fs-normal {\n  font-size: 1rem;\n}\n.fs-big {\n  font-size: 1.2rem;\n}\n.fs-large {\n  font-size: 1.5rem;\n}\n\n.info-block {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  margin: 0.5em;\n}\n.info-block .icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.2em;\n  width: 1.2em;\n  font-size: 2em;\n}\n.info-block .icon a-spinner {\n  font-size: 0.25em;\n}\n.info-block .text {\n  margin: 0.5em 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCJub2RlX21vZHVsZXMvbWF0ZXJpYWwtZGVzaWduLWljb25zL2ljb25mb250L21hdGVyaWFsLWljb25zLmNzcyIsInNyYy9mb250cy9mb250cy5jc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3N0eWxlcy9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3N0eWxlcy9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBbUJBOzt3Q0FBQTtBQTJCQTs7Y0FBQTtBQWNBOztzQkFBQTtBQzdEQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG1DQUFtQyxFQUFFLGNBQWM7RUFDbkQ7Ozs7d0RBSXNEO0FBQ3hEO0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlLEdBQUcsd0JBQXdCO0VBQzFDLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGNBQWM7O0VBRWQscUNBQXFDO0VBQ3JDLG1DQUFtQztFQUNuQyxtQ0FBbUM7RUFDbkMsa0NBQWtDOztFQUVsQyx5QkFBeUI7RUFDekIsa0NBQWtDOztFQUVsQyxvQkFBb0I7RUFDcEIsNkJBQTZCO0FBQy9CO0FDbkNBLHNDQUFzQztBQUN0QztJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVDQUF5RCxFQUFFLHFCQUFxQjtJQUNoRjs7Ozs7Z0ZBSzhGLEVBQUUsZUFBZTtBQUNuSDtBQUVBLHdDQUF3QztBQUN4QztJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHdDQUEwRCxFQUFFLHFCQUFxQjtJQUNqRjs7Ozs7a0ZBS2dHLEVBQUUsZUFBZTtBQUNySDtBQUVBLCtCQUErQjtBQUMvQjtJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCOzBEQUNtRSxFQUFFLHlCQUF5QjtBQUNsRztBQUVBLHNDQUFzQztBQUN0QztJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCO2dFQUN5RSxFQUFFLHlCQUF5QjtBQUN4RztBQUVBLGlDQUFpQztBQUNqQztJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCOzREQUNxRSxFQUFFLHlCQUF5QjtBQUNwRztBQUVBLGdDQUFnQztBQUNoQztJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCOzJEQUNvRSxFQUFFLHlCQUF5QjtBQUNuRztBQUVBLGdDQUFnQztBQUNoQztJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCOzJEQUNvRSxFQUFFLHlCQUF5QjtBQUNuRztBQUVBLHVDQUF1QztBQUN2QztJQUNJLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCO2lFQUMwRSxFQUFFLHlCQUF5QjtBQUN6RztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CO0FBQ0o7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQjtBQUNKO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEI7QUFDSjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCO0FBQ0o7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQjtBQUNKO0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEI7QUFDSjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCO0FBQ0o7QUZGUTtFR2xJUjs7SUFHUSxlSGtESTtFSXZDVjtBQUNGO0FKc0hRO0VHcklSOztJQUdRLGVIa0RJO0VJakNWO0FBQ0Y7QUprRFE7RUd2RVI7O0lBU1EsZUg4Q007RUk3Qlo7QUFDRjtBSitDUTtFRzFFUjs7SUFTUSxlSDhDTTtFSXZCWjtBQUNGO0FEcEJBO0VBQ0kseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSw4REhnQ0c7RUcvQkgsc0JBQUE7QUN1Qko7QURwQkE7RUFDSSxjQUFBO0FDdUJKO0FEcEJBO0VBQ0ksV0hTWTtBSWNoQjtBRHBCQTs7MEJBQUE7QUFLSTtFQUNJLGlCQUFBO0FDcUJSO0FEbkJJO0VBQ0ksZUFBQTtBQ3FCUjtBRG5CSTtFQUNJLGlCQUFBO0FDcUJSO0FEbkJJO0VBQ0ksaUJBQUE7QUNxQlI7QURqQkE7OzBCQUFBO0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ21CSjtBRGpCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDbUJSO0FEakJRO0VBQ0ksaUJBQUE7QUNtQlo7QURmSTtFQUNJLGlCQUFBO0FDaUJSIiwiZmlsZSI6InNyYy9hcHAvc3R5bGVzL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICMzYWE1Mzc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiR3YXJuaW5nOiAjZmZEMDQ4O1xuJHdhcm5pbmctbGlnaHQ6IGxpZ2h0ZW4oJHdhcm5pbmcsIDEwKTtcbiR3YXJuaW5nLWRhcms6IGRhcmtlbigkd2FybmluZywgMTApO1xuXG4kZXJyb3I6ICNhZTE5Mjg7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBWMSBBcHBsaWNhdGlvbiBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3MtdjE6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodC12MTogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyay12MTogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nLXYxOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQtdjE6IGxpZ2h0ZW4oJHdhcm5pbmcsIDEwKTtcbiRwZW5kaW5nLWRhcmstdjE6IGRhcmtlbigkd2FybmluZywgMTApO1xuXG4kZXJyb3ItdjE6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQtdjE6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyay12MTogZGFya2VuKCRlcnJvciwgMTApO1xuXG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGZvbnQtZmFtaWx5LXByaW1hcnk6IFwiTWNLaW5zZXkgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIENhbGlicmksIENvcmJlbCwgSGVsdmV0aWNhLCBSb2JvdG8sIERyb2lkLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LXNlY29uZGFyeTogXCJCb3dlclwiLCBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ01hdGVyaWFsIEljb25zJztcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBzcmM6IHVybChNYXRlcmlhbEljb25zLVJlZ3VsYXIuZW90KTsgLyogRm9yIElFNi04ICovXG4gIHNyYzogbG9jYWwoJ01hdGVyaWFsIEljb25zJyksXG4gICAgICAgbG9jYWwoJ01hdGVyaWFsSWNvbnMtUmVndWxhcicpLFxuICAgICAgIHVybChNYXRlcmlhbEljb25zLVJlZ3VsYXIud29mZjIpIGZvcm1hdCgnd29mZjInKSxcbiAgICAgICB1cmwoTWF0ZXJpYWxJY29ucy1SZWd1bGFyLndvZmYpIGZvcm1hdCgnd29mZicpLFxuICAgICAgIHVybChNYXRlcmlhbEljb25zLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XG59XG5cbi5tYXRlcmlhbC1pY29ucyB7XG4gIGZvbnQtZmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMjRweDsgIC8qIFByZWZlcnJlZCBpY29uIHNpemUgKi9cbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxldHRlci1zcGFjaW5nOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBkaXJlY3Rpb246IGx0cjtcblxuICAvKiBTdXBwb3J0IGZvciBhbGwgV2ViS2l0IGJyb3dzZXJzLiAqL1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLyogU3VwcG9ydCBmb3IgU2FmYXJpIGFuZCBDaHJvbWUuICovXG4gIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG5cbiAgLyogU3VwcG9ydCBmb3IgRmlyZWZveC4gKi9cbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcblxuICAvKiBTdXBwb3J0IGZvciBJRS4gKi9cbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAnbGlnYSc7XG59XG4iLCIvKiBNY0tpbnNleSBMYXJpc2ggLSBSZWd1bGFyIC0gTGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnTGFyaXNoTWNLaW5zZXknO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIHNyYzogdXJsKCcuL21ja2luc2V5X2xhcmlzaC9MYXJpc2hfTWNLaW5zZXlfUmVndWxhci5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xuICAgIHNyYzogbG9jYWwoJ0xhcmlzaE1jS2luc2V5JyksIGxvY2FsKCdMYXJpc2hNY0tpbnNleVJlZ3VsYXInKSxcbiAgICAgICAgICB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9SZWd1bGFyLmVvdD8jaWVmaXgnKSBmb3JtYXQoJ2VtYmVkZGVkLW9wZW50eXBlJyksIC8qIElFNi1JRTggKi9cbiAgICAgICAgICB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9SZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cbiAgICAgICAgICB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9SZWd1bGFyLndvZmYnKSBmb3JtYXQoJ3dvZmYnKSwgLyogTW9kZXJuIEJyb3dzZXJzICovXG4gICAgICAgICAgdXJsKCcuL21ja2luc2V5X2xhcmlzaC9MYXJpc2hfTWNLaW5zZXlfUmVndWxhci50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXG4gICAgICAgICAgdXJsKCcuL21ja2luc2V5X2xhcmlzaC9MYXJpc2hfTWNLaW5zZXlfUmVndWxhci5zdmcjTGFyaXNoTWNLaW5zZXlSZWd1bGFyJykgZm9ybWF0KCdzdmcnKTsgLyogTGVnYWN5IGlPUyAqL1xufVxuXG4vKiBNY0tpbnNleSBMYXJpc2ggLSBTZW1pLWJvbGQgLSBMYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdMYXJpc2hNY0tpbnNleSc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgc3JjOiB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9TZW1pYm9sZC5lb3QnKTsgLyogSUU5IENvbXBhdCBNb2RlcyAqL1xuICAgIHNyYzogbG9jYWwoJ0xhcmlzaE1jS2luc2V5JyksIGxvY2FsKCdMYXJpc2hNY0tpbnNleVNlbWlib2xkJyksXG4gICAgICAgICAgdXJsKCcuL21ja2luc2V5X2xhcmlzaC9MYXJpc2hfTWNLaW5zZXlfU2VtaWJvbGQuZW90PyNpZWZpeCcpIGZvcm1hdCgnZW1iZWRkZWQtb3BlbnR5cGUnKSwgLyogSUU2LUlFOCAqL1xuICAgICAgICAgIHVybCgnLi9tY2tpbnNleV9sYXJpc2gvTGFyaXNoX01jS2luc2V5X1NlbWlib2xkLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpLCAvKiBTdXBlciBNb2Rlcm4gQnJvd3NlcnMgKi9cbiAgICAgICAgICB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9TZW1pYm9sZC53b2ZmJykgZm9ybWF0KCd3b2ZmJyksIC8qIE1vZGVybiBCcm93c2VycyAqL1xuICAgICAgICAgIHVybCgnLi9tY2tpbnNleV9sYXJpc2gvTGFyaXNoX01jS2luc2V5X1NlbWlib2xkLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cbiAgICAgICAgICB1cmwoJy4vbWNraW5zZXlfbGFyaXNoL0xhcmlzaF9NY0tpbnNleV9TZW1pYm9sZC5zdmcjTGFyaXNoTWNLaW5zZXlTZW1pYm9sZCcpIGZvcm1hdCgnc3ZnJyk7IC8qIExlZ2FjeSBpT1MgKi9cbn1cblxuLyogVGhlaW5oYXJkdCAtIExpZ2h0IC0gTGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnVGhlaW5oYXJkdCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiBsb2NhbCgnVGhlaW5oYXJkdCcpLFxuICAgICAgICAgIHVybCgnLi90aGVpbmhhcmR0L1RoZWluaGFyZHRUVC1MaWdodC50dGYnKSBmb3JtYXQoJ3RydWV0eXBlJyksIC8qIFNhZmFyaSwgQW5kcm9pZCwgaU9TICovXG59XG5cbi8qIFRoZWluaGFyZHQgLSBMaWdodCBJdGFsaWMgLSBMYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdUaGVpbmhhcmR0JztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IGxvY2FsKCdUaGVpbmhhcmR0JyksXG4gICAgICAgICAgdXJsKCcuL3RoZWluaGFyZHQvVGhlaW5oYXJkdFRULUxpZ2h0SXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cbn1cblxuLyogVGhlaW5oYXJkdCAtIFJlZ3VsYXIgLSBMYXRpbiAqL1xuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdUaGVpbmhhcmR0JztcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IGxvY2FsKCdUaGVpbmhhcmR0JyksXG4gICAgICAgICAgdXJsKCcuL3RoZWluaGFyZHQvVGhlaW5oYXJkdFRULVJlZ3VsYXIudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xufVxuXG4vKiBUaGVpbmhhcmR0IC0gSXRhbGljIC0gTGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnVGhlaW5oYXJkdCc7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiBsb2NhbCgnVGhlaW5oYXJkdCcpLFxuICAgICAgICAgIHVybCgnLi90aGVpbmhhcmR0L1RoZWluaGFyZHRUVC1JdGFsaWMudHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xufVxuXG4vKiBUaGVpbmhhcmR0IC0gTWVkaXVtIC0gTGF0aW4gKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnVGhlaW5oYXJkdCc7XG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgc3JjOiBsb2NhbCgnVGhlaW5oYXJkdCcpLFxuICAgICAgICAgIHVybCgnLi90aGVpbmhhcmR0L1RoZWluaGFyZHRUVC1NZWRpdW0udHRmJykgZm9ybWF0KCd0cnVldHlwZScpLCAvKiBTYWZhcmksIEFuZHJvaWQsIGlPUyAqL1xufVxuXG4vKiBUaGVpbmhhcmR0IC0gTWVkaXVtIEl0YWxpYyAtIExhdGluICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ1RoZWluaGFyZHQnO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHNyYzogbG9jYWwoJ1RoZWluaGFyZHQnKSxcbiAgICAgICAgICB1cmwoJy4vdGhlaW5oYXJkdC9UaGVpbmhhcmR0VFQtTWVkaXVtSXRhbGljLnR0ZicpIGZvcm1hdCgndHJ1ZXR5cGUnKSwgLyogU2FmYXJpLCBBbmRyb2lkLCBpT1MgKi9cbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1jS2luc2V5IFNhbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBzcmM6IHVybChodHRwczovL2Nkbi5tY2tpbnNleS5jb20vYXNzZXRzL2ZvbnRzL3dlYi9NY0tpbnNleVNhbnMtUmVndWxhci53b2ZmKVxufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgZm9udC1mYW1pbHk6IFwiTWNLaW5zZXkgU2Fuc1wiO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIHNyYzogdXJsKGh0dHBzOi8vY2RuLm1ja2luc2V5LmNvbS9hc3NldHMvZm9udHMvd2ViL01jS2luc2V5U2Fucy1JdGFsaWMud29mZilcbn1cblxuQGZvbnQtZmFjZSB7XG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgIGZvbnQtZmFtaWx5OiBcIk1jS2luc2V5IFNhbnNcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBzcmM6IHVybChodHRwczovL2Nkbi5tY2tpbnNleS5jb20vYXNzZXRzL2ZvbnRzL3dlYi9NY0tpbnNleVNhbnMtTWVkaXVtLndvZmYpXG59XG5cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICBmb250LWZhbWlseTogXCJNY0tpbnNleSBTYW5zXCI7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgc3JjOiB1cmwoaHR0cHM6Ly9jZG4ubWNraW5zZXkuY29tL2Fzc2V0cy9mb250cy93ZWIvTWNLaW5zZXlTYW5zLU1lZGl1bUl0YWxpYy53b2ZmKVxufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgZm9udC1mYW1pbHk6IFwiTWNLaW5zZXkgU2Fuc1wiO1xuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHNyYzogdXJsKGh0dHBzOi8vY2RuLm1ja2luc2V5LmNvbS9hc3NldHMvZm9udHMvd2ViL01jS2luc2V5U2Fucy1MaWdodC53b2ZmKVxufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgZm9udC1mYW1pbHk6IFwiTWNLaW5zZXkgU2Fuc1wiO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHNyYzogdXJsKGh0dHBzOi8vY2RuLm1ja2luc2V5LmNvbS9hc3NldHMvZm9udHMvd2ViL01jS2luc2V5U2Fucy1MaWdodEl0YWxpYy53b2ZmKVxufVxuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgZm9udC1mYW1pbHk6IFwiQm93ZXJcIjtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgc3JjOiB1cmwoaHR0cHM6Ly9jZG4ubWNraW5zZXkuY29tL2Fzc2V0cy9mb250cy93ZWIvQm93ZXItQm9sZC53b2ZmKVxufVxuIiwiQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5AaW1wb3J0IFwifm1hdGVyaWFsLWRlc2lnbi1pY29ucy9pY29uZm9udC9tYXRlcmlhbC1pY29ucy5jc3NcIjtcbkBpbXBvcnQgJy4uLy4uL2ZvbnRzL2ZvbnRzLmNzcyc7XG5cbmh0bWwsXG5ib2R5IHtcbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKGRlc2t0b3ApIHtcbiAgICAgICAgZm9udC1zaXplOiAkYmFzZS1zaXplO1xuICAgIH1cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKHRhYmxldCkge1xuICAgICAgICBmb250LXNpemU6ICR0YWJsZXQtc2l6ZTtcbiAgICB9XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAkbW9iaWxlLXNpemU7XG4gICAgfVxufVxuXG4qIHtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBmb250LWZhbWlseTogJGZvbnQ7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgICBmb250LXNpemU6IDFlbTtcbn1cblxuc3Bhbi5oaWdobGlnaHQge1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICAgRm9udCBzaXplIHN0eWxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi5mcyB7XG4gICAgJi1zbWFsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuICAgIH1cbiAgICAmLW5vcm1hbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgJi1iaWcge1xuICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICB9XG4gICAgJi1sYXJnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cbn1cblxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICAgRm9udCBzaXplIHN0eWxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbi5pbmZvLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IC41ZW07XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEuMmVtO1xuICAgICAgICB3aWR0aDogMS4yZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuXG4gICAgICAgIGEtc3Bpbm5lciB7XG4gICAgICAgICAgICBmb250LXNpemU6IC4yNWVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgICBtYXJnaW46IC41ZW0gMCAwO1xuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgVjEgQXBwbGljYXRpb24gQ29sb3VycyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuQGltcG9ydCBcIn5tYXRlcmlhbC1kZXNpZ24taWNvbnMvaWNvbmZvbnQvbWF0ZXJpYWwtaWNvbnMuY3NzXCI7XG5AaW1wb3J0ICcuLi8uLi9mb250cy9mb250cy5jc3MnO1xuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogODAwcHgpIHtcbiAgaHRtbCxcbmJvZHkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6IDEwNDhweCkge1xuICBodG1sLFxuYm9keSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICBodG1sLFxuYm9keSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgaHRtbCxcbmJvZHkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxufVxuXG4qIHtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZvbnQtZmFtaWx5OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1hdGVyaWFsLWljb25zIHtcbiAgZm9udC1zaXplOiAxZW07XG59XG5cbnNwYW4uaGlnaGxpZ2h0IHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgIEZvbnQgc2l6ZSBzdHlsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLmZzLXNtYWxsIHtcbiAgZm9udC1zaXplOiAwLjhyZW07XG59XG4uZnMtbm9ybWFsIHtcbiAgZm9udC1zaXplOiAxcmVtO1xufVxuLmZzLWJpZyB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLmZzLWxhcmdlIHtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgIEZvbnQgc2l6ZSBzdHlsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLmluZm8tYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWFyZ2luOiAwLjVlbTtcbn1cbi5pbmZvLWJsb2NrIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMS4yZW07XG4gIHdpZHRoOiAxLjJlbTtcbiAgZm9udC1zaXplOiAyZW07XG59XG4uaW5mby1ibG9jayAuaWNvbiBhLXNwaW5uZXIge1xuICBmb250LXNpemU6IDAuMjVlbTtcbn1cbi5pbmZvLWJsb2NrIC50ZXh0IHtcbiAgbWFyZ2luOiAwLjVlbSAwIDA7XG59Il19 */"];



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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n\n\n\n.dropdown[widget] {\n  border-radius: 4px;\n}\n.dropdown[widget].fill {\n  width: 100%;\n}\n.dropdown-list[widget] {\n  border-radius: 4px;\n}\n.spinner svg {\n  width: 100%;\n}\nbutton[widget] {\n  outline: none;\n}\nbutton[widget].default {\n  background-color: #1f40e6;\n}\nbutton[widget].action {\n  height: 2em;\n  width: 2em;\n  border-radius: 100%;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  border: 2px solid rgba(0, 0, 0, 0.87);\n  box-shadow: 0 0 0 2px #fff;\n  font-size: 1.5em;\n}\nbutton[widget].action:hover {\n  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.6);\n}\nbutton[widget].action .wrapper {\n  height: 100%;\n  padding: 0;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n}\nbutton[widget][disabled] {\n  background-color: #ccc;\n  pointer-events: none;\n}\n.dropdown[widget].default {\n  width: 9.5em;\n}\n.dynamic-form[widget] .error input {\n  border-color: #ae1928;\n}\n.dynamic-form[widget] .dynamic-field .info.status {\n  margin: 0;\n  padding: 0;\n}\n.dynamic-field[widget] .details {\n  min-width: 100%;\n}\n.dynamic-field[widget] label {\n  margin-left: 0;\n}\n.dynamic-field[widget] .control {\n  min-width: 10em;\n}\n.overlay-backdrop {\n  background-color: rgba(0, 0, 0, 0.6);\n}\n.modal[widget] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: #fff;\n  border-radius: 4px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  max-width: 95vw;\n  max-height: 90vh;\n}\n.modal[widget] > .header {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  height: 2.5em;\n  background-color: #f0f0f0;\n}\n.modal[widget] > .header .text {\n  padding: 0.75em;\n  min-width: 10em;\n  flex: 1;\n  font-weight: 500;\n}\n.modal[widget] > .header .close {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 1.8em;\n  font-size: 1.25em;\n}\n.modal[widget] > .body {\n  width: 100%;\n  min-height: 4em;\n  flex: 1;\n  overflow: auto;\n  padding: 0.5em;\n}\n.modal[widget] > .footer {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-top: 1px solid #ccc;\n}\n.modal[widget] > .footer button {\n  min-width: 6em;\n}\n.notification[widget] .content > .text {\n  display: flex;\n  align-items: center;\n}\n.notification[widget] .icon {\n  height: 1.25em;\n  width: 1.25em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 2em;\n  margin-right: 0.3em;\n}\n.notification[widget] .action {\n  margin: 0 0.5em;\n}\n.notification[widget] .action .icon {\n  background: none;\n  margin: 0;\n}\n.notification[widget] .action .icon:after {\n  font-family: \"Material Icons\";\n  content: \"close\";\n}\n.notification[widget].error .item {\n  background-color: #ae1928 !important;\n  color: #fff;\n}\n.notification[widget].error .item i:after {\n  content: \"error\";\n}\n.notification[widget].warn .item {\n  background-color: #ffD048 !important;\n  color: #fff;\n}\n.notification[widget].warn .item i:after {\n  content: \"warning\";\n}\n.notification[widget].info .item {\n  background-color: #fff !important;\n  color: #fff;\n}\n.notification[widget].info .item i:after {\n  content: \"info\";\n}\n.notification[widget].success .item {\n  background-color: #3aa537 !important;\n  color: #fff;\n}\n.notification[widget].success .item i:after {\n  content: \"done\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3N0eWxlcy9jdXN0b20tZWxlbWVudC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc3R5bGVzL2N1c3RvbS1lbGVtZW50LnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQW1CQTs7d0NBQUE7QUEyQkE7O2NBQUE7QUFjQTs7c0JBQUE7QUMzREE7RUFDSSxrQkFBQTtBQ1dKO0FEVEk7RUFDSSxXQUFBO0FDV1I7QURQQTtFQUNJLGtCQUFBO0FDVUo7QUROSTtFQUNJLFdBQUE7QUNTUjtBRExBO0VBQ0ksYUFBQTtBQ1FKO0FEUEk7RUFDSSx5QkRrQlU7QUVUbEI7QUROSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUNBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0FDUVI7QUROUTtFQUNJLDhDQUFBO0FDUVo7QURMUTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ09aO0FESEk7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FDS1I7QURBSTtFQUNJLFlBQUE7QUNHUjtBREdRO0VBQ0kscUJEakRKO0FFaURSO0FESUk7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQ0ZSO0FET0k7RUFDSSxlQUFBO0FDSlI7QURPSTtFQUNJLGNBQUE7QUNMUjtBRFFJO0VBQ0ksZUFBQTtBQ05SO0FEVUE7RUFDSSxvQ0FBQTtBQ1BKO0FEVUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLCtHQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDUEo7QURTSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7QUNQUjtBRFNRO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsZ0JBQUE7QUNQWjtBRFVRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDUlo7QURZSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0FDVlI7QURhSTtFQUNJLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDBCQUFBO0FDWFI7QURhUTtFQUNJLGNBQUE7QUNYWjtBRGlCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ2RSO0FEaUJJO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQ2ZSO0FENkJJO0VBQ0ksZUFBQTtBQzNCUjtBRDRCUTtFQUNJLGdCQUFBO0VBQ0EsU0FBQTtBQzFCWjtBRDJCWTtFQUNJLDZCQUFBO0VBQ0EsZ0JBQUE7QUN6QmhCO0FEUVE7RUFDSSxvQ0FBQTtFQUNBLFdBcUIwQjtBQzNCdEM7QURRWTtFQUNJLGdCQWtCNEI7QUN4QjVDO0FEQ1E7RUFDSSxvQ0FBQTtFQUNBLFdBeUI0QjtBQ3hCeEM7QURDWTtFQUNJLGtCQXNCOEI7QUNyQjlDO0FETlE7RUFDSSxpQ0FBQTtFQUNBLFdBNkJrQztBQ3JCOUM7QUROWTtFQUNJLGVBMEJvQztBQ2xCcEQ7QURiUTtFQUNJLG9DQUFBO0VBQ0EsV0FpQzRCO0FDbEJ4QztBRGJZO0VBQ0ksZUE4QjhCO0FDZjlDIiwiZmlsZSI6InNyYy9hcHAvc3R5bGVzL2N1c3RvbS1lbGVtZW50LnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzNhYTUzNztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHdhcm5pbmc6ICNmZkQwNDg7XG4kd2FybmluZy1saWdodDogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHdhcm5pbmctZGFyazogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvcjogI2FlMTkyODtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFYxIEFwcGxpY2F0aW9uIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2Vzcy12MTogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0LXYxOiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrLXYxOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmctdjE6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodC12MTogbGlnaHRlbigkd2FybmluZywgMTApO1xuJHBlbmRpbmctZGFyay12MTogZGFya2VuKCR3YXJuaW5nLCAxMCk7XG5cbiRlcnJvci12MTogI2U1MzkzNTtcbiRlcnJvci1saWdodC12MTogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrLXYxOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cblxuJGNvbG9yLXByaW1hcnk6ICNmZmY7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICMxZjQwZTY7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICMwNTFjMmMsICMwYTIyNDcsICMwYTIyNDcsICMxZTNjZDgpO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQ6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuXG4kZm9udC1mYW1pbHktcHJpbWFyeTogXCJNY0tpbnNleSBTYW5zXCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQ2FsaWJyaSwgQ29yYmVsLCBIZWx2ZXRpY2EsIFJvYm90bywgRHJvaWQsIHNhbnMtc2VyaWY7XG4kZm9udC1mYW1pbHktc2Vjb25kYXJ5OiBcIkJvd2VyXCIsIEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIgc2VyaWY7XG5cbiRiYXNlLXNpemU6IDIwcHg7XG4kdGFibGV0LXNpemU6IDIwcHg7XG4kbW9iaWxlLXNpemU6IDIwcHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5kcm9wZG93blt3aWRnZXRdIHtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG5cbiAgICAmLmZpbGwge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5kcm9wZG93bi1saXN0W3dpZGdldF0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLnNwaW5uZXIge1xuICAgIHN2ZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuYnV0dG9uW3dpZGdldF0ge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgJi5kZWZhdWx0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcbiAgICB9XG5cbiAgICAmLmFjdGlvbiB7XG4gICAgICAgIGhlaWdodDogMmVtO1xuICAgICAgICB3aWR0aDogMmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2xvcjogcmdiYSgjMDAwLCAwLjg3KTtcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgcmdiYSgjMDAwLCAwLjg3KTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4ICNmZmY7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgjZmZmLCAwLjYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZbZGlzYWJsZWRdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuXG4uZHJvcGRvd25bd2lkZ2V0XSB7XG4gICAgJi5kZWZhdWx0IHtcbiAgICAgICAgd2lkdGg6IDkuNWVtO1xuICAgIH1cbn1cblxuLmR5bmFtaWMtZm9ybVt3aWRnZXRdIHtcbiAgICAuZXJyb3Ige1xuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRlcnJvcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5keW5hbWljLWZpZWxkIC5pbmZvLnN0YXR1cyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59XG5cbi5keW5hbWljLWZpZWxkW3dpZGdldF0ge1xuICAgIC5kZXRhaWxzIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLmNvbnRyb2wge1xuICAgICAgICBtaW4td2lkdGg6IDEwZW07XG4gICAgfVxufVxuXG4ub3ZlcmxheS1iYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAwLjYpO1xufVxuXG4ubW9kYWxbd2lkZ2V0XSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgMC4xMik7XG4gICAgbWF4LXdpZHRoOiA5NXZ3O1xuICAgIG1heC1oZWlnaHQ6IDkwdmg7XG5cbiAgICAmID4gLmhlYWRlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDIuNWVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuXG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNzVlbTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMTBlbTtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNsb3NlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB3aWR0aDogMS44ZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgPiAuYm9keSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiA0ZW07XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICB9XG5cbiAgICAmID4gLmZvb3RlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubm90aWZpY2F0aW9uW3dpZGdldF0ge1xuICAgIC5jb250ZW50ID4gLnRleHQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuM2VtO1xuICAgIH1cblxuICAgIEBtaXhpbiBub3RpZnktc3R5bGUoJGJhY2ssICRmb3JlLCAkaWNvbikge1xuICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFjayAhaW1wb3J0YW50O1xuICAgICAgICAgICAgY29sb3I6ICRmb3JlO1xuXG4gICAgICAgICAgICBpOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAkaWNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hY3Rpb24ge1xuICAgICAgICBtYXJnaW46IDAgLjVlbTtcbiAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIk1hdGVyaWFsIEljb25zXCI7XG4gICAgICAgICAgICAgICAgY29udGVudDogJ2Nsb3NlJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuZXJyb3Ige1xuICAgICAgICBAaW5jbHVkZSBub3RpZnktc3R5bGUoJGVycm9yLCAjZmZmLCAnZXJyb3InKTtcbiAgICB9XG5cbiAgICAmLndhcm4ge1xuICAgICAgICBAaW5jbHVkZSBub3RpZnktc3R5bGUoJHdhcm5pbmcsICNmZmYsICd3YXJuaW5nJyk7XG4gICAgfVxuXG4gICAgJi5pbmZvIHtcbiAgICAgICAgQGluY2x1ZGUgbm90aWZ5LXN0eWxlKCRjb2xvci1wcmltYXJ5LCAjZmZmLCAnaW5mbycpO1xuICAgIH1cblxuICAgICYuc3VjY2VzcyB7XG4gICAgICAgIEBpbmNsdWRlIG5vdGlmeS1zdHlsZSgkc3VjY2VzcywgI2ZmZiwgJ2RvbmUnKTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFYxIEFwcGxpY2F0aW9uIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5kcm9wZG93blt3aWRnZXRdIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuLmRyb3Bkb3duW3dpZGdldF0uZmlsbCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZHJvcGRvd24tbGlzdFt3aWRnZXRdIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uc3Bpbm5lciBzdmcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuYnV0dG9uW3dpZGdldF0ge1xuICBvdXRsaW5lOiBub25lO1xufVxuYnV0dG9uW3dpZGdldF0uZGVmYXVsdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxZjQwZTY7XG59XG5idXR0b25bd2lkZ2V0XS5hY3Rpb24ge1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDJweCAjZmZmO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuYnV0dG9uW3dpZGdldF0uYWN0aW9uOmhvdmVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbmJ1dHRvblt3aWRnZXRdLmFjdGlvbiAud3JhcHBlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xufVxuYnV0dG9uW3dpZGdldF1bZGlzYWJsZWRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5kcm9wZG93blt3aWRnZXRdLmRlZmF1bHQge1xuICB3aWR0aDogOS41ZW07XG59XG5cbi5keW5hbWljLWZvcm1bd2lkZ2V0XSAuZXJyb3IgaW5wdXQge1xuICBib3JkZXItY29sb3I6ICNhZTE5Mjg7XG59XG4uZHluYW1pYy1mb3JtW3dpZGdldF0gLmR5bmFtaWMtZmllbGQgLmluZm8uc3RhdHVzIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uZHluYW1pYy1maWVsZFt3aWRnZXRdIC5kZXRhaWxzIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuLmR5bmFtaWMtZmllbGRbd2lkZ2V0XSBsYWJlbCB7XG4gIG1hcmdpbi1sZWZ0OiAwO1xufVxuLmR5bmFtaWMtZmllbGRbd2lkZ2V0XSAuY29udHJvbCB7XG4gIG1pbi13aWR0aDogMTBlbTtcbn1cblxuLm92ZXJsYXktYmFja2Ryb3Age1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbi5tb2RhbFt3aWRnZXRdIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1heC13aWR0aDogOTV2dztcbiAgbWF4LWhlaWdodDogOTB2aDtcbn1cbi5tb2RhbFt3aWRnZXRdID4gLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDIuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuLm1vZGFsW3dpZGdldF0gPiAuaGVhZGVyIC50ZXh0IHtcbiAgcGFkZGluZzogMC43NWVtO1xuICBtaW4td2lkdGg6IDEwZW07XG4gIGZsZXg6IDE7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG4ubW9kYWxbd2lkZ2V0XSA+IC5oZWFkZXIgLmNsb3NlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEuOGVtO1xuICBmb250LXNpemU6IDEuMjVlbTtcbn1cbi5tb2RhbFt3aWRnZXRdID4gLmJvZHkge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogNGVtO1xuICBmbGV4OiAxO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMC41ZW07XG59XG4ubW9kYWxbd2lkZ2V0XSA+IC5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xufVxuLm1vZGFsW3dpZGdldF0gPiAuZm9vdGVyIGJ1dHRvbiB7XG4gIG1pbi13aWR0aDogNmVtO1xufVxuXG4ubm90aWZpY2F0aW9uW3dpZGdldF0gLmNvbnRlbnQgPiAudGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubm90aWZpY2F0aW9uW3dpZGdldF0gLmljb24ge1xuICBoZWlnaHQ6IDEuMjVlbTtcbiAgd2lkdGg6IDEuMjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuM2VtO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdIC5hY3Rpb24ge1xuICBtYXJnaW46IDAgMC41ZW07XG59XG4ubm90aWZpY2F0aW9uW3dpZGdldF0gLmFjdGlvbiAuaWNvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5ub3RpZmljYXRpb25bd2lkZ2V0XSAuYWN0aW9uIC5pY29uOmFmdGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiTWF0ZXJpYWwgSWNvbnNcIjtcbiAgY29udGVudDogXCJjbG9zZVwiO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdLmVycm9yIC5pdGVtIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2FlMTkyOCAhaW1wb3J0YW50O1xuICBjb2xvcjogI2ZmZjtcbn1cbi5ub3RpZmljYXRpb25bd2lkZ2V0XS5lcnJvciAuaXRlbSBpOmFmdGVyIHtcbiAgY29udGVudDogXCJlcnJvclwiO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdLndhcm4gLml0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZEMDQ4ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdLndhcm4gLml0ZW0gaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwid2FybmluZ1wiO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdLmluZm8gLml0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdLmluZm8gLml0ZW0gaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiaW5mb1wiO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdLnN1Y2Nlc3MgLml0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2FhNTM3ICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xufVxuLm5vdGlmaWNhdGlvblt3aWRnZXRdLnN1Y2Nlc3MgLml0ZW0gaTphZnRlciB7XG4gIGNvbnRlbnQ6IFwiZG9uZVwiO1xufSJdfQ== */"];



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
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes,extraRequire}
 * tslint:disable
 */ 
var styles = ["\n\n\n\ninput {\n  font-size: 1em;\n  min-width: 100%;\n  padding: 0.5em;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  outline: none;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  -webkit-appearance: none;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n}\ninput:focus {\n  border-bottom-color: #1f40e6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3J1bm5lci93b3JrL21ja2luc2V5LWJvb2tpbmdzLXVpL21ja2luc2V5LWJvb2tpbmdzLXVpL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvaG9tZS9ydW5uZXIvd29yay9tY2tpbnNleS1ib29raW5ncy11aS9tY2tpbnNleS1ib29raW5ncy11aS9zcmMvYXBwL3N0eWxlcy9uYXRpdmUtZWxlbWVudC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc3R5bGVzL25hdGl2ZS1lbGVtZW50LnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQW1CQTs7d0NBQUE7QUEyQkE7O2NBQUE7QUFjQTs7c0JBQUE7QUMxREE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FDVUo7QURSSTtFQUNJLDRCRHlCVTtBRWZsQiIsImZpbGUiOiJzcmMvYXBwL3N0eWxlcy9uYXRpdmUtZWxlbWVudC5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICMzYWE1Mzc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiR3YXJuaW5nOiAjZmZEMDQ4O1xuJHdhcm5pbmctbGlnaHQ6IGxpZ2h0ZW4oJHdhcm5pbmcsIDEwKTtcbiR3YXJuaW5nLWRhcms6IGRhcmtlbigkd2FybmluZywgMTApO1xuXG4kZXJyb3I6ICNhZTE5Mjg7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBWMSBBcHBsaWNhdGlvbiBDb2xvdXJzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3MtdjE6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodC12MTogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyay12MTogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nLXYxOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQtdjE6IGxpZ2h0ZW4oJHdhcm5pbmcsIDEwKTtcbiRwZW5kaW5nLWRhcmstdjE6IGRhcmtlbigkd2FybmluZywgMTApO1xuXG4kZXJyb3ItdjE6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQtdjE6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyay12MTogZGFya2VuKCRlcnJvciwgMTApO1xuXG5cbiRjb2xvci1wcmltYXJ5OiAjZmZmO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjMWY0MGU2O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDUxYzJjLCAjMGEyMjQ3LCAjMGEyMjQ3LCAjMWUzY2Q4KTtcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250OiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcblxuJGZvbnQtZmFtaWx5LXByaW1hcnk6IFwiTWNLaW5zZXkgU2Fuc1wiLCBcIkhlbHZldGljYSBOZXVlXCIsIENhbGlicmksIENvcmJlbCwgSGVsdmV0aWNhLCBSb2JvdG8sIERyb2lkLCBzYW5zLXNlcmlmO1xuJGZvbnQtZmFtaWx5LXNlY29uZGFyeTogXCJCb3dlclwiLCBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiIHNlcmlmO1xuXG4kYmFzZS1zaXplOiAyMHB4O1xuJHRhYmxldC1zaXplOiAyMHB4O1xuJG1vYmlsZS1zaXplOiAyMHB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbmlucHV0IHtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogLjVlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgY29sb3I6IHJnYmEoJGZvbnQtZGFyaywgLjg3KTtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgdXNlci1zZWxlY3Q6IHRleHQ7XG5cbiAgICAmOmZvY3VzIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGNvbG9yLXNlY29uZGFyeTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFYxIEFwcGxpY2F0aW9uIENvbG91cnMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbmlucHV0IHtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC41ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgdXNlci1zZWxlY3Q6IHRleHQ7XG59XG5pbnB1dDpmb2N1cyB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMxZjQwZTY7XG59Il19 */"];



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
const environment = {
    production: true
};


/***/ }),

/***/ "./src/environments/settings.ts":
/*!**************************************!*\
  !*** ./src/environments/settings.ts ***!
  \**************************************/
/*! exports provided: DEFAULT_SETTINGS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_SETTINGS", function() { return DEFAULT_SETTINGS; });
/**
 * GENERAL APPLICATION SETTINGS
 */
const general = {
    menu: {
        items: [],
        copyright: 'McKinsey & Company',
        position: 'left'
    }
};
/**
 * HOME PAGE SETTINGS
 */
const home = {
    background: 'assets/img/skyline.jpg',
    tiles: [
        {
            name: 'Book',
            route: '/book/spaces',
            icon: {
                type: 'icon',
                class: 'custom-book'
            }
        },
        {
            name: 'Maps',
            route: '/explore/space',
            icon: {
                type: 'icon',
                class: 'custom-spaces'
            }
        },
        {
            name: 'My Day',
            route: '/schedule',
            icon: {
                type: 'icon',
                class: 'custom-schedule'
            }
        }
    ]
};
/**
 * HELP/SUPPORT SETTINGS
 */
const help = {
    tiles: [],
    columns: 2
};
/**
 * BOOKING FLOW SETTINGS
 */
const booking = {
    booking_types: [
        { name: 'Internal', id: 'internal' },
        { name: 'Client', id: 'client' },
        { name: 'External', id: 'external' },
        { name: 'Setup', id: 'setup' },
        { name: 'Training', id: 'training' },
        { name: 'Interview', id: 'interview' }
    ],
    show_fields: [
        'attendees',
        'body',
        'catering',
        'date',
        'duration',
        'organiser',
        'recurrence',
        'title',
        'type',
        'all_day',
        'needs_space',
        'has_catering'
    ],
    html_body: true,
    multiple_spaces: true,
    desk_start: 9
};
/*===========================*\
||  SPACE LISTING SETTINGS   ||
\*===========================*/
const space_display = {
    show_images: false
};
/*===========================*\
||  USER DIRECTORY SETTINGS  ||
\*===========================*/
const directory = {
    show_avatars: true,
    min_search_length: 3
};
/*===========================*\
||    EXPLORE MAP SETTINGS   ||
\*===========================*/
const explore = {
    colors: {
        'space-available': '#43a047',
        'space-requestable': '#ffb300',
        'space-unavailable': '#e53935',
        'space-not-bookable': '#ccc',
        'desk-available': '#43a047',
        'desk-available-stroke': '#1b5e20',
        'desk-unavailable': '#e53935',
        'desk-unavailable-stroke': '#b71c1c',
        'desk-reserved': '#ffb300',
        'desk-reserved-stroke': '#ff6f00',
        'desk-not-bookable': '#fff',
        'desk-not-bookable-stroke': '#ccc',
        'zone-low': '#43a047',
        'zone-medium': '#ffb300',
        'zone-high': '#e53935'
    },
    can_select_building: true,
    show_legend_group_names: false,
    show_timeline: true,
    legend: {
        General: [
            { key: 'space-available', name: 'Available' },
            { key: 'space-requestable', name: 'Available by request' },
            { key: 'space-unavailable', name: 'In use' },
            { key: 'space-not-bookable', name: 'Not Bookable' }
        ]
    }
};
/**
 * ROOT APPLICATION SETTINGS
 */
const app = {
    title: 'McKinsey & Company',
    description: 'McKinsey & Company Booking Panel UI written with Angular Framework',
    short_name: 'PANEL',
    logo_light: {
        type: 'img',
        src: 'assets/img/logo.svg',
        background: ''
    },
    logo_dark: {
        type: 'img',
        src: 'assets/img/logo-inverse.svg',
        background: ''
    },
    heap_io: {
        app_id: 3540602199,
        force_ssl: true,
        secure_cookie: true,
        disable_text_capture: true,
        cookie_path: '/bookings/'
    },
    general,
    home,
    help,
    booking,
    space_display,
    directory,
    explore
};
/**
 * ROOT SETTIGNS
 */
const DEFAULT_SETTINGS = {
    debug: true,
    composer: {
        domain: '',
        route: '/bookings',
        protocol: '',
        port: '',
        use_domain: false,
        local_login: false
    },
    app,
    mock: false
};


/***/ }),

/***/ "./src/environments/version.ts":
/*!*************************************!*\
  !*** ./src/environments/version.ts ***!
  \*************************************/
/*! exports provided: VERSION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VERSION", function() { return VERSION; });
// IMPORTANT: THIS FILE IS AUTO GENERATED! DO NOT MANUALLY EDIT OR CHECKIN!
/* tslint:disable */
const VERSION = {
    "dirty": false,
    "raw": "d329dd6",
    "hash": "d329dd6",
    "distance": null,
    "tag": null,
    "semver": null,
    "suffix": "d329dd6",
    "semverString": null,
    "version": "0.0.0",
    "core_version": "1.0.0",
    "time": 1601666336440
};
/* tslint:enable */


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs/plugin/advancedFormat */ "./node_modules/dayjs/plugin/advancedFormat.js");
/* harmony import */ var dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
dayjs__WEBPACK_IMPORTED_MODULE_2__["extend"](dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_3__);
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_4__["AppModuleNgFactory"])
    .catch(err => console.error(err));


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
//# sourceMappingURL=main-es2015.js.map