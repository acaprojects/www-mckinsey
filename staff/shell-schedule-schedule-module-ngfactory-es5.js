var __extends = (this && this.__extends) || (function () {
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spread = (this && this.__spread) || function () {
    for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));
    return ar;
};
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-schedule-schedule-module-ngfactory"], {
        /***/ "./src/app/shell/schedule/event-list/event-list.component.ngfactory.js": 
        /*!*****************************************************************************!*\
          !*** ./src/app/shell/schedule/event-list/event-list.component.ngfactory.js ***!
          \*****************************************************************************/
        /*! exports provided: RenderType_ScheduleEventListComponent, View_ScheduleEventListComponent_0, View_ScheduleEventListComponent_Host_0, ScheduleEventListComponentNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ScheduleEventListComponent", function () { return RenderType_ScheduleEventListComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ScheduleEventListComponent_0", function () { return View_ScheduleEventListComponent_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ScheduleEventListComponent_Host_0", function () { return View_ScheduleEventListComponent_Host_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleEventListComponentNgFactory", function () { return ScheduleEventListComponentNgFactory; });
            /* harmony import */ var _event_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event-list.component.scss.shim.ngstyle */ "./src/app/shell/schedule/event-list/event-list.component.scss.shim.ngstyle.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-widgets */ "./node_modules/@acaprojects/ngx-widgets/esm2015/acaprojects-ngx-widgets.js");
            /* harmony import */ var _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory */ "./node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory.js");
            /* harmony import */ var _node_modules_angular_cdk_scrolling_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../node_modules/@angular/cdk/scrolling/typings/index.ngfactory */ "./node_modules/@angular/cdk/scrolling/typings/index.ngfactory.js");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
            /* harmony import */ var _event_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-list.component */ "./src/app/shell/schedule/event-list/event-list.component.ts");
            /* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_ScheduleEventListComponent = [_event_list_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
            var RenderType_ScheduleEventListComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ScheduleEventListComponent, data: { "animation": [{ type: 7, name: "show", definitions: [{ type: 1, expr: "void => event", animation: { type: 4, styles: { type: 5, steps: [{ type: 6, styles: { height: 0, opacity: 0, offset: 0 }, offset: null }, { type: 6, styles: { height: "80px", opacity: 1, offset: 1 }, offset: null }] }, timings: ".3s ease-out" }, options: null }], options: {} }] } });
            function View_ScheduleEventListComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "dot today"]], [[8, "id", 0]], null, null, null, null))], null, function (_ck, _v) { var currVal_0 = ("item-" + _v.parent.parent.context.$implicit.date); _ck(_v, 0, 0, currVal_0); }); }
            function View_ScheduleEventListComponent_2(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScheduleEventListComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", " "]))], function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.today; _ck(_v, 2, 0, currVal_0); }, function (_ck, _v) { var currVal_1 = _v.parent.context.$implicit.title; _ck(_v, 3, 0, currVal_1); }); }
            function View_ScheduleEventListComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) { var currVal_0 = _v.parent.context.$implicit.title; _ck(_v, 1, 0, currVal_0); }); }
            function View_ScheduleEventListComponent_6(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["src", "assets/icon/roombooked.svg"]], null, null, null, null, null))], null, null); }
            function View_ScheduleEventListComponent_7(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["src", "assets/icon/events.svg"]], null, null, null, null, null))], null, null); }
            function View_ScheduleEventListComponent_8(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "dot"]], null, null, null, null, null))], null, null); }
            function View_ScheduleEventListComponent_9(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "location"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "img", [["src", "assets/icon/location.svg"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = (_v.parent.parent.context.$implicit.location_name || "No location set"); _ck(_v, 4, 0, currVal_0); }); }
            function View_ScheduleEventListComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 17, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "period"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 6, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScheduleEventListComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScheduleEventListComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScheduleEventListComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 4, "div", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](15, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScheduleEventListComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var currVal_2 = ((!_v.parent.context.$implicit.visitors && _v.parent.context.$implicit.attendees) && (_v.parent.context.$implicit.attendees.length > 0)); _ck(_v, 8, 0, currVal_2); var currVal_3 = _v.parent.context.$implicit.visitors; _ck(_v, 10, 0, currVal_3); var currVal_4 = (!_v.parent.context.$implicit.attendees || (_v.parent.context.$implicit.attendees.length <= 0)); _ck(_v, 12, 0, currVal_4); var currVal_6 = (_v.parent.context.$implicit.display && _v.parent.context.$implicit.display.room); _ck(_v, 17, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = (_v.parent.context.$implicit.all_day ? "All Day" : ((_v.parent.context.$implicit.display == null) ? null : _v.parent.context.$implicit.display.start)); _ck(_v, 3, 0, currVal_0); var currVal_1 = ((_v.parent.context.$implicit.display == null) ? null : _v.parent.context.$implicit.display.short_duration); _ck(_v, 5, 0, currVal_1); var currVal_5 = _v.parent.context.$implicit.title; _ck(_v, 15, 0, currVal_5); }); }
            function View_ScheduleEventListComponent_1(_l) {
                return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, [["list_item", 1]], null, 9, "div", [], [[8, "className", 0], [8, "title", 0], [8, "id", 0]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("mousedown" === en)) {
                            var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).mousestart($event) !== false);
                            ad = (pd_0 && ad);
                        }
                        if (("touchstart" === en)) {
                            var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).touchstart($event) !== false);
                            ad = (pd_1 && ad);
                        }
                        if (("mouseup" === en)) {
                            var pd_2 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).mouse($event) !== false);
                            ad = (pd_2 && ad);
                        }
                        if (("touchend" === en)) {
                            var pd_3 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).touch($event) !== false);
                            ad = (pd_3 && ad);
                        }
                        if (("touchrelease" === en)) {
                            var pd_4 = (((_v.context.$implicit.type === "event") ? _co.view(_v.context.$implicit) : "") !== false);
                            ad = (pd_4 && ad);
                        }
                        return ad;
                    }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"], [], { ngSwitch: [0, "ngSwitch"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_3__["ɵj"], [], null, { event: "touchrelease" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScheduleEventListComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScheduleEventListComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScheduleEventListComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitchCase"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgSwitch"]], { ngSwitchCase: [0, "ngSwitchCase"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 0, "div", [["class", "line"]], null, null, null, null, null))], function (_ck, _v) { var currVal_3 = _v.context.$implicit.type; _ck(_v, 2, 0, currVal_3); var currVal_4 = "date"; _ck(_v, 5, 0, currVal_4); var currVal_5 = "no-items"; _ck(_v, 7, 0, currVal_5); var currVal_6 = "event"; _ck(_v, 9, 0, currVal_6); }, function (_ck, _v) { var currVal_0 = ("item " + _v.context.$implicit.type); var currVal_1 = (((((_v.context.$implicit == null) ? null : _v.context.$implicit.custom_name) || ((_v.context.$implicit == null) ? null : _v.context.$implicit.name)) || ((_v.context.$implicit == null) ? null : _v.context.$implicit.title)) || _v.context.$implicit); var currVal_2 = _v.context.$implicit.title; _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2); });
            }
            function View_ScheduleEventListComponent_10(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "loader"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "spinner", [["color", "#000"], ["type", "circle-ring"]], null, null, null, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_SpinnerComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 770048, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"], color: [1, "color"] }, null)], function (_ck, _v) { var currVal_0 = "circle-ring"; var currVal_1 = "#000"; _ck(_v, 2, 0, currVal_0, currVal_1); }, null); }
            function View_ScheduleEventListComponent_0(_l) {
                return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, { viewport: 0 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 11, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 8, "cdk-virtual-scroll-viewport", [["class", "cdk-virtual-scroll-viewport"], ["itemSize", "80"]], [[2, "cdk-virtual-scroll-orientation-horizontal", null], [2, "cdk-virtual-scroll-orientation-vertical", null]], [[null, "scrolledIndexChange"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("scrolledIndexChange" === en)) {
                            var pd_0 = (_co.checkScroll() !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, _node_modules_angular_cdk_scrolling_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_CdkVirtualScrollViewport_0"], _node_modules_angular_cdk_scrolling_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_CdkVirtualScrollViewport"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkScrollable"], null, [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkVirtualScrollViewport"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 540672, null, 0, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkFixedSizeVirtualScroll"], [], { itemSize: [0, "itemSize"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["VIRTUAL_SCROLL_STRATEGY"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["_fixedSizeVirtualScrollStrategyFactory"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkFixedSizeVirtualScroll"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 245760, [[1, 4]], 0, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkVirtualScrollViewport"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["VIRTUAL_SCROLL_STRATEGY"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_7__["Directionality"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollDispatcher"]], null, { scrolledIndexChange: "scrolledIndexChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 3, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_ScheduleEventListComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 409600, null, 0, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkVirtualForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [1, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["CdkVirtualScrollViewport"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], { cdkVirtualForOf: [0, "cdkVirtualForOf"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScheduleEventListComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = "80"; _ck(_v, 4, 0, currVal_2); _ck(_v, 6, 0); var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 9, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).transform(_co.items)); _ck(_v, 9, 0, currVal_3); var currVal_4 = _co.model.loading; _ck(_v, 12, 0, currVal_4); }, function (_ck, _v) { var currVal_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).orientation === "horizontal"); var currVal_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).orientation !== "horizontal"); _ck(_v, 2, 0, currVal_0, currVal_1); });
            }
            function View_ScheduleEventListComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "schedule-event-list", [], null, null, null, View_ScheduleEventListComponent_0, RenderType_ScheduleEventListComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _event_list_component__WEBPACK_IMPORTED_MODULE_8__["ScheduleEventListComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            var ScheduleEventListComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("schedule-event-list", _event_list_component__WEBPACK_IMPORTED_MODULE_8__["ScheduleEventListComponent"], View_ScheduleEventListComponent_Host_0, { user: "user", date: "date" }, {}, []);
            /***/ 
        }),
        /***/ "./src/app/shell/schedule/event-list/event-list.component.scss.shim.ngstyle.js": 
        /*!*************************************************************************************!*\
          !*** ./src/app/shell/schedule/event-list/event-list.component.scss.shim.ngstyle.js ***!
          \*************************************************************************************/
        /*! exports provided: styles */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function () { return styles; });
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles = [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ecf1f5;\n  z-index: 0; }\n.topbar[_ngcontent-%COMP%] {\n  width: 100%;\n  min-height: 3em;\n  background-color: #B8123E;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  padding: 0 .5em 0 1em; }\n.topbar[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    font-size: 1.2em; }\n.spacer[_ngcontent-%COMP%] {\n  flex: 1; }\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  max-width: 100%;\n  width: 100%;\n  margin: auto; }\ncdk-virtual-scroll-viewport[_ngcontent-%COMP%] {\n  min-height: 100%;\n  width: 100%; }\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.5em;\n  width: 1.5em; }\n.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    height: 1em; }\n.item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  height: 80px;\n  max-height: 80px;\n  padding: 1rem .5rem;\n  font-size: 1.2em;\n  max-width: 100vw;\n  font-weight: 300;\n  background-color: #EFF3F7; }\n.item.date[_ngcontent-%COMP%] {\n    font-size: 1.5em;\n    text-transform: uppercase;\n    color: #596C80;\n    padding-left: 5%;\n    padding-right: 5%;\n    background-color: #EFF3F7; }\n.item.event[_ngcontent-%COMP%], .item.no-items[_ngcontent-%COMP%] {\n    background-color: #fffFFF;\n    color: rgba(0, 0, 0, 0.87);\n    padding-left: 5%;\n    padding-right: 5%; }\n.item.event[_ngcontent-%COMP%]    ~ .item.event[_ngcontent-%COMP%] {\n    border-top: 1px solid #E4E7EB; }\n.item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    color: rgba(0, 0, 0, 0.54); }\n.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    padding: .25em;\n    min-width: 5em;\n    flex: 1; }\n.item[_ngcontent-%COMP%]   .period[_ngcontent-%COMP%] {\n    width: 4.5em;\n    min-width: 4.5em; }\n.item[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    font-size: .9em;\n    margin-top: 0.5em; }\n.item[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n      justify-content: flex-start;\n      width: 1.2em;\n      min-width: 1.2em; }\n.item[_ngcontent-%COMP%]    > .icon[_ngcontent-%COMP%] {\n    font-size: 2em;\n    min-width: 1.5em; }\n.dot[_ngcontent-%COMP%] {\n  height: 12px;\n  width: 12px;\n  min-width: 12px;\n  border-radius: 100%;\n  background-color: #1937ea; }\n.dot.today[_ngcontent-%COMP%] {\n    margin-right: .3em;\n    background-color: #307bcc; }\n.text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 100%; }\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1em;\n  left: 50%;\n  transform: translateX(-50%);\n  font-size: .75em;\n  height: 4em;\n  width: 4em; }\n.loader.local[_ngcontent-%COMP%] {\n    bottom: 50%;\n    right: 1em;\n    left: auto;\n    transform: translateY(50%);\n    font-size: .3em; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGVsbC9zY2hlZHVsZS9ldmVudC1saXN0L2V2ZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL3NjaGVkdWxlL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc2hhcmVkLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztDQ0tDO0FDTEQ7O2lDRFFpQztBQ3VDakM7O3VCRHBDdUI7QUNpRHZCOztzQkQ5Q3NCO0FETHRCO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCx5QkVEZ0I7RUZFaEIsVUFBVSxFQUFBO0FBR2Q7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixxQkFBcUIsRUFBQTtBQVB6QjtJQVNRLGdCQUFnQixFQUFBO0FBSXhCO0VBQ0ksT0FBTyxFQUFBO0FBR1g7RUFDSSxZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFHaEI7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBO0FBR2Y7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWSxFQUFBO0FBTGhCO0lBT1EsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIseUJBQXlCLEVBQUE7QUFWN0I7SUFhUSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLHlCQUF5QixFQUFBO0FBbEJqQztJQXNCUSx5QkFBeUI7SUFDekIsMEJBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixpQkFBaUIsRUFBQTtBQXpCekI7SUE0QlEsNkJBQTZCLEVBQUE7QUE1QnJDO0lBK0JRLDBCQUFnQixFQUFBO0FBL0J4QjtJQWtDUSxjQUFjO0lBQ2QsY0FBYztJQUNkLE9BQU8sRUFBQTtBQXBDZjtJQXVDUSxZQUFZO0lBQ1osZ0JBQWdCLEVBQUE7QUF4Q3hCO0lBMkNRLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0FBOUN6QjtNQWdEWSwyQkFBMkI7TUFDM0IsWUFBWTtNQUNaLGdCQUFnQixFQUFBO0FBbEQ1QjtJQXNEUSxjQUFjO0lBQ2QsZ0JBQWdCLEVBQUE7QUFJeEI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIseUJFakdtQixFQUFBO0FGNEZ2QjtJQU9RLGtCQUFrQjtJQUNsQix5QkFBbUMsRUFBQTtBQUkzQztFRTVGSSxtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFRjRGdkIsZUFBZSxFQUFBO0FBR25CO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsVUFBVSxFQUFBO0FBUGQ7SUFVUSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDViwwQkFBMEI7SUFDMUIsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvc2NoZWR1bGUvZXZlbnQtbGlzdC9ldmVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiogQEF1dGhvcjogQWxleCBTb3JhZnVtb1xuKiBARGF0ZTogICAyMDE3LTA1LTE2IDE0OjE1OjUxXG4gKiBATGFzdCBNb2RpZmllZCBieTogQWxleCBTb3JhZnVtb1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0wNi0xOCAyMToyMTowNFxuKi9cblxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG4kdG9wOiAzZW07XG4uY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi50b3BiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjgxMjNFO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIC41ZW0gMCAxZW07XG4gICAgJj4qIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG59XG5cbi5zcGFjZXIge1xuICAgIGZsZXg6IDE7XG59XG5cbi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7IC8vIG1heC13aWR0aDogNzY4cHg7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgIH1cbn1cblxuLml0ZW0ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIG1heC1oZWlnaHQ6IDgwcHg7XG4gICAgcGFkZGluZzogMXJlbSAuNXJlbTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDsgLy8gYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjNGNztcblxuICAgICYuZGF0ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiAjNTk2QzgwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRjNGNztcbiAgICB9XG4gICAgJi5ldmVudCxcbiAgICAmLm5vLWl0ZW1zIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZkZGRjtcbiAgICAgICAgY29sb3I6IHJnYmEoIzAwMCwgLjg3KTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNSU7XG4gICAgfVxuICAgICYuZXZlbnR+Ji5ldmVudCB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRTRFN0VCO1xuICAgIH1cbiAgICAuaW5mbyB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC41NCk7XG4gICAgfVxuICAgIC5kZXRhaWxzIHtcbiAgICAgICAgcGFkZGluZzogLjI1ZW07XG4gICAgICAgIG1pbi13aWR0aDogNWVtO1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbiAgICAucGVyaW9kIHtcbiAgICAgICAgd2lkdGg6IDQuNWVtO1xuICAgICAgICBtaW4td2lkdGg6IDQuNWVtO1xuICAgIH1cbiAgICAubG9jYXRpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNWVtO1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICB3aWR0aDogMS4yZW07XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEuMmVtO1xuICAgICAgICB9XG4gICAgfVxuICAgICY+Lmljb24ge1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAxLjVlbTtcbiAgICB9XG59XG5cbi5kb3Qge1xuICAgIGhlaWdodDogMTJweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBtaW4td2lkdGg6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAmLnRvZGF5IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuM2VtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNDgsIDEyMywgMjA0KTtcbiAgICB9XG59XG5cbi50ZXh0IHtcbiAgICBAaW5jbHVkZSBoaWRlLXRleHQtb3ZlcmZsb3c7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4ubG9hZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxZW07XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBmb250LXNpemU6IC43NWVtO1xuICAgIGhlaWdodDogNGVtO1xuICAgIHdpZHRoOiA0ZW07XG5cbiAgICAmLmxvY2FsIHtcbiAgICAgICAgYm90dG9tOiA1MCU7XG4gICAgICAgIHJpZ2h0OiAxZW07XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICAgICAgICBmb250LXNpemU6IC4zZW07XG4gICAgfVxufSIsIi8qXG4qIEBBdXRob3I6IEFsZXggU29yYWZ1bW9cbiogQERhdGU6ICAgMjAxNy0wNS0xNiAxNDoxNTo1MVxuICogQExhc3QgTW9kaWZpZWQgYnk6IEFsZXggU29yYWZ1bW9cbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDYtMTggMjE6MjE6MDRcbiovXG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YxZjU7XG4gIHotaW5kZXg6IDA7IH1cblxuLnRvcGJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNCODEyM0U7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwIC41ZW0gMCAxZW07IH1cbiAgLnRvcGJhciA+ICoge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07IH1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDE7IH1cblxuLmNvbnRlbnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bzsgfVxuXG5jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTsgfVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEuNWVtO1xuICB3aWR0aDogMS41ZW07IH1cbiAgLmljb24gaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTsgfVxuXG4uaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXgtaGVpZ2h0OiA4MHB4O1xuICBwYWRkaW5nOiAxcmVtIC41cmVtO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXgtd2lkdGg6IDEwMHZ3O1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZGM0Y3OyB9XG4gIC5pdGVtLmRhdGUge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjb2xvcjogIzU5NkM4MDtcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFRkYzRjc7IH1cbiAgLml0ZW0uZXZlbnQsIC5pdGVtLm5vLWl0ZW1zIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmRkZGO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xuICAgIHBhZGRpbmctbGVmdDogNSU7XG4gICAgcGFkZGluZy1yaWdodDogNSU7IH1cbiAgLml0ZW0uZXZlbnQgfiAuaXRlbS5ldmVudCB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNFNEU3RUI7IH1cbiAgLml0ZW0gLmluZm8ge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG4gIC5pdGVtIC5kZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAuMjVlbTtcbiAgICBtaW4td2lkdGg6IDVlbTtcbiAgICBmbGV4OiAxOyB9XG4gIC5pdGVtIC5wZXJpb2Qge1xuICAgIHdpZHRoOiA0LjVlbTtcbiAgICBtaW4td2lkdGg6IDQuNWVtOyB9XG4gIC5pdGVtIC5sb2NhdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTsgfVxuICAgIC5pdGVtIC5sb2NhdGlvbiAuaWNvbiB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICB3aWR0aDogMS4yZW07XG4gICAgICBtaW4td2lkdGg6IDEuMmVtOyB9XG4gIC5pdGVtID4gLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1pbi13aWR0aDogMS41ZW07IH1cblxuLmRvdCB7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDEycHg7XG4gIG1pbi13aWR0aDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MzdlYTsgfVxuICAuZG90LnRvZGF5IHtcbiAgICBtYXJnaW4tcmlnaHQ6IC4zZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMwN2JjYzsgfVxuXG4udGV4dCB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICBtYXgtd2lkdGg6IDEwMCU7IH1cblxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxZW07XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBmb250LXNpemU6IC43NWVtO1xuICBoZWlnaHQ6IDRlbTtcbiAgd2lkdGg6IDRlbTsgfVxuICAubG9hZGVyLmxvY2FsIHtcbiAgICBib3R0b206IDUwJTtcbiAgICByaWdodDogMWVtO1xuICAgIGxlZnQ6IGF1dG87XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7XG4gICAgZm9udC1zaXplOiAuM2VtOyB9XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3M6ICMzMDliNDA7XG4kc3VjY2Vzcy1hbHQ6ICM0Mjg1ZjQ7XG4kZXJyb3I6ICNkYjI5MWQ7XG4kcGVuZGluZzogI0ZGOTgwMDtcbiRuZXV0cmFsOiAjNzk3OTc5O1xuJHByaW1lLWJsdWUtbGlnaHQ6IzAwQURFRjtcbiRwcmltZS1ibHVlLWRhcms6IzAwNjRCRDtcbiRwcmltZS1ncmVlbi1saWdodDojQTJBRDAwO1xuJHByaW1lLWdyZXktZGlzYWJsZTojN0M5NEFBO1xuXG4kYmFja2dyb3VuZDogI2VjZjFmNTtcblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcbiRjb2xvci1wcmltYXJ5LXdpcmVmcmFtZTpyZ2JhKDAsIDAsIDAsIDAuNjEpO1xuJGhlYWRlci1iZzogI2ZmZjtcbiRoZWFkZXItY29sb3I6IHJnYmEoIzAwMjk2MCwgLjg3KTtcblxuJHRpbGUtY29sb3I6ICNmZmY7XG4kdGlsZS1ib3JkZXI6ICNmZmY7XG5cbiRoZWxwLWJvcmRlcjogcmdiYSgjMDAwLCAuMik7XG5cbiRjb2xvci1wcmltYXJ5OiAjMTkzN2VhO1xuJGNvbG9yLXNlY29uZGFyeTogIzQwNDg1YTtcbiRjb2xvci10ZXJuYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXF1YXRlcm5hcnk6ICM3ZGQ2ZDY7XG4kY29sb3ItcXVpbnRlcm5hcnk6ICM0YzVjNmM7XG4kY29sb3Itc2V4dGVybmFyeTogIzdmZTQzYjtcblxuJHRpbWVsaW5lLWJnOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzRGNUY3MCAwJSwgIzBGMTIxNSAxMDAlKTtcbiR0aW1lbGluZS1ldmVudDogJGVycm9yO1xuJHRpbWVsaW5lLWJvb2tpbmc6ICRjb2xvci1xdWF0ZXJuYXJ5O1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRtYWluLWZvbnQ6ICRmb250LXN0YWNrO1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"];
            /***/ 
        }),
        /***/ "./src/app/shell/schedule/event-list/event-list.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/shell/schedule/event-list/event-list.component.ts ***!
          \*******************************************************************/
        /*! exports provided: ScheduleEventListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleEventListComponent", function () { return ScheduleEventListComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _shared_globals_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/globals/base.component */ "./src/app/shared/globals/base.component.ts");
            /* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _shared_utility_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/utility.class */ "./src/app/shared/utility.class.ts");
            var ScheduleEventListComponent = /** @class */ (function (_super) {
                __extends(ScheduleEventListComponent, _super);
                function ScheduleEventListComponent(service) {
                    var _this = _super.call(this) || this;
                    _this.service = service;
                    _this.date = moment__WEBPACK_IMPORTED_MODULE_5__().valueOf();
                    _this.model = {};
                    _this.items = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
                    return _this;
                }
                ScheduleEventListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.model.days = 15;
                    this.checkScroll();
                    this.items.subscribe(function (res) { return _this.model.list = res; });
                    this.subscription('bookings', this.service.Bookings.listen('timeline', function (timeline) {
                        var date = moment__WEBPACK_IMPORTED_MODULE_5__().startOf('d');
                        var end = moment__WEBPACK_IMPORTED_MODULE_5__(date).add(_this.model.days, 'd');
                        var list = [];
                        for (; date.isBefore(end, 'm'); date.add(1, 'd')) {
                            list = __spread(list, (timeline[date.format('YYYY/MM/DD')] || []));
                        }
                        list = _shared_utility_class__WEBPACK_IMPORTED_MODULE_6__["Utils"].unique(list, 'order_id');
                        if (_this.user) {
                            list = list.filter(function (i) { return i.organiser.email === _this.user.email
                                || !!i.attendees.find(function (j) { return j.email === _this.user.email; }); });
                        }
                        _this.model.list = list;
                        _this.processBookings();
                    }));
                    this.loadBookings();
                    this.interval('update', function () { return _this.updateBookings(); }, 10 * 1000);
                };
                ScheduleEventListComponent.prototype.ngOnChanges = function (changes) {
                    var _this = this;
                    if (changes.date) {
                        this.timeout('date_change', function () { return _this.changeDate(_this.date); }, 500);
                    }
                    if (changes.user) {
                        this.updateBookings();
                        this.interval('update', function () { return _this.updateBookings(); }, 10 * 1000);
                    }
                };
                ScheduleEventListComponent.prototype.ngOnDestroy = function () {
                    _super.prototype.ngOnDestroy.call(this);
                    this.clearInterval('update');
                };
                ScheduleEventListComponent.prototype.loadBookings = function () {
                    var _this = this;
                    if (this.model.loading) {
                        return;
                    }
                    return new Promise(function (resolve, reject) {
                        _this.model.loading = true;
                        var date = moment__WEBPACK_IMPORTED_MODULE_5__().startOf('d');
                        var end = moment__WEBPACK_IMPORTED_MODULE_5__(date).add(Math.max(3, _this.model.days), 'd');
                        var user = _this.service.Users.current();
                        if (!_this.user) {
                            _this.user = _this.service.Users.current();
                        }
                        var user_list = user.delegates && user.delegates.length > 0 ? __spread([user.email], user.delegates) : [user.email];
                        _this.service.Bookings.query({
                            email: _this.user ? _this.user.email : user_list.reduce(function (a, v) { return (a ? a + ',' : a) + v; }, ''),
                            from: date.unix(), to: end.unix()
                        }).then(function (items) {
                            _this.service.Bookings.clear({ from: date.valueOf(), to: end.valueOf() });
                            _this.service.Bookings.updateList(_shared_utility_class__WEBPACK_IMPORTED_MODULE_6__["Utils"].unique(items, 'icaluid'));
                            _this.model.loading = false;
                            resolve();
                        }, function (_) {
                            _this.model.loading = false;
                            reject();
                        });
                    });
                };
                ScheduleEventListComponent.prototype.checkScroll = function () {
                    var _this = this;
                    this.timeout('check_scroll', function () {
                        if (!_this.viewport) {
                            return _this.timeout('atBottom', function () { return _this.checkScroll(); });
                        }
                        var start = _this.viewport.getRenderedRange().start;
                        var end = _this.viewport.getRenderedRange().end;
                        var total = _this.viewport.getDataLength();
                        var from_start = moment__WEBPACK_IMPORTED_MODULE_5__().add(_this.model.from_start, 'd').format('YYYY-MM-DD');
                        var items = _this.items.getValue();
                        if (end === total) {
                            _this.atBottom();
                        }
                        else if (_this.model.from_start > 0 && items.indexOf(items.find(function (i) { return i.id === from_start; })) > start) {
                            _this.atTop();
                        }
                    }, 100);
                };
                ScheduleEventListComponent.prototype.atBottom = function () {
                    var _this = this;
                    if (this.model.loading) {
                        return;
                    }
                    this.model.days += 3;
                    this.interval('update', function () { return _this.updateBookings(); }, 5 * 1000);
                    this.updateBookings();
                };
                ScheduleEventListComponent.prototype.getViewLocation = function () {
                    if (this.viewport) {
                        var start = Math.floor(this.viewport.measureScrollOffset() / 80);
                        var items = this.items.getValue();
                        if (items && items.length > 0 && start < items.length) {
                            var item = items[start];
                            return item ? item.id : null;
                        }
                    }
                    return null;
                };
                ScheduleEventListComponent.prototype.atTop = function () {
                    if (this.model.loading || this.model.from_start <= 0) {
                        return;
                    }
                    var range = this.viewport.getRenderedRange();
                    var now = moment__WEBPACK_IMPORTED_MODULE_5__().startOf('d');
                    var items = this.items.getValue();
                    var middle = Math.floor((range.start + range.end) / 2);
                    var time = moment__WEBPACK_IMPORTED_MODULE_5__(items && items[middle] ? items[middle].date : undefined);
                    this.model.from_start = Math.floor(moment__WEBPACK_IMPORTED_MODULE_5__["duration"](time.diff(now)).asDays());
                    this.updateBookings();
                };
                ScheduleEventListComponent.prototype.scrollTo = function (id, offset, smooth) {
                    var _this = this;
                    if (offset === void 0) { offset = 0; }
                    if (smooth === void 0) { smooth = true; }
                    if (!id || (this.model.ignore && id !== this.model.ignore)) {
                        return;
                    }
                    var items = this.items.getValue();
                    var index = items.findIndex(function (i) { return i.id === id; });
                    if (index >= 0) {
                        this.viewport.scrollToOffset(index * 80 + offset, smooth ? 'smooth' : 'auto');
                    }
                    this.timeout('ignore', function () { return _this.model.ignore = null; }, 1000);
                };
                ScheduleEventListComponent.prototype.changeDate = function (date) {
                    var _this = this;
                    var now = moment__WEBPACK_IMPORTED_MODULE_5__().startOf('d');
                    var day = moment__WEBPACK_IMPORTED_MODULE_5__(date);
                    var time = moment__WEBPACK_IMPORTED_MODULE_5__(day).subtract(3, 'd');
                    if (time.isBefore(now, 'd')) {
                        time = moment__WEBPACK_IMPORTED_MODULE_5__(now);
                    }
                    if (day.diff(now, 'd') < this.model.days) {
                        this.model.ignore = day.format('YYYY-MM-DD');
                        this.scrollTo(day.format('YYYY-MM-DD'));
                    }
                    else {
                        this.model.from_start = time.diff(now, 'd');
                        this.model.days = this.model.from_start + 8;
                        this.updateBookings().then(function () {
                            _this.timeout('scroll', function () { return _this.scrollTo(day.format('YYYY-MM-DD')); }, 1000);
                        });
                    }
                };
                ScheduleEventListComponent.prototype.updateBookings = function () {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        if (_this.model.loading) {
                            return reject();
                        }
                        if (!_this.viewport) {
                            return _this.timeout('update_bookings', function () { return _this.updateBookings().then(resolve, reject); });
                        }
                        if (!_this.user) {
                            _this.user = _this.service.Users.current();
                        }
                        var range = _this.viewport.getRenderedRange();
                        var now = moment__WEBPACK_IMPORTED_MODULE_5__().startOf('d');
                        var items = _this.items.getValue();
                        var middle = Math.floor((range.start + range.end) / 2);
                        var date = items && items[middle] ? items[middle].date : undefined;
                        var start = moment__WEBPACK_IMPORTED_MODULE_5__(date).subtract(3, 'd').startOf('d');
                        var end = moment__WEBPACK_IMPORTED_MODULE_5__(date).add(3, 'd').endOf('d');
                        var from = start.isBefore(now, 'd') ? now.unix() : start.unix();
                        if (moment__WEBPACK_IMPORTED_MODULE_5__(from).isSameOrAfter(end)) {
                            return;
                        }
                        _this.setLoading(start.valueOf(), end.valueOf());
                        var user = _this.service.Users.current();
                        var user_list = user.delegates && user.delegates.length > 0 ? __spread([user.email], user.delegates) : [user.email];
                        _this.model.loading = true;
                        _this.service.Bookings.query({
                            email: _this.user ? _this.user.email : user_list.reduce(function (a, v) { return (a ? a + ',' : a) + v; }, ''),
                            from: from,
                            to: end.unix()
                        }).then(function (list) {
                            _this.service.Bookings.clear({ from: start.isBefore(now, 'd') ? now.valueOf() : start.valueOf(), to: end.valueOf() });
                            _this.service.Bookings.updateList(list);
                            _this.model.loading = false;
                            resolve();
                        }, function (_) { _this.model.loading = false; reject(); });
                    });
                };
                ScheduleEventListComponent.prototype.setLoading = function (start, end) {
                    var from = moment__WEBPACK_IMPORTED_MODULE_5__(start);
                    var to = moment__WEBPACK_IMPORTED_MODULE_5__(end);
                    var items = this.items.getValue();
                    for (; from.isBefore(to, 'm'); from.add(1, 'd')) {
                        var item = items.find(function (i) { return i.id === from.format('YYYY-MM-DD'); });
                        if (item) {
                            item.loading = true;
                        }
                    }
                };
                ScheduleEventListComponent.prototype.processBookings = function () {
                    var _this = this;
                    this.timeout('process', function () {
                        var e_1, _a;
                        var offset = _this.viewport.measureScrollOffset() % 80;
                        var scroll_id = _this.getViewLocation();
                        _this.model.list.sort(function (a, b) { return a.date - b.date; });
                        var list = [];
                        var now = moment__WEBPACK_IMPORTED_MODULE_5__();
                        var date = moment__WEBPACK_IMPORTED_MODULE_5__().startOf('d');
                        var end = moment__WEBPACK_IMPORTED_MODULE_5__(date).add(_this.model.days, 'd').endOf('d');
                        for (; date.isSameOrBefore(end, 'd'); date.add(1, 'd')) {
                            list.push({
                                order_id: date.format('YYYY-MM-DD'),
                                id: date.format('YYYY-MM-DD'),
                                type: 'date',
                                today: now.isSame(date, 'd'),
                                title: date.format('dddd, DD MMM'),
                                value: date.format('YYYY-MM-DD'),
                                date: date.valueOf()
                            });
                            var length = list.length;
                            try {
                                for (var _b = (e_1 = void 0, __values(_this.model.list)), _c = _b.next(); !_c.done; _c = _b.next()) {
                                    var bkn = _c.value;
                                    if (bkn.type && bkn.type !== 'event') {
                                        continue;
                                    }
                                    var bkn_date = moment__WEBPACK_IMPORTED_MODULE_5__(bkn.for_date || bkn.date);
                                    if (bkn_date.isSame(date, 'd')) {
                                        var item = Object.assign({}, bkn, { status: bkn.status, type: 'event' });
                                        list.push(item);
                                    }
                                }
                            }
                            catch (e_1_1) { e_1 = { error: e_1_1 }; }
                            finally {
                                try {
                                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                                }
                                finally { if (e_1) throw e_1.error; }
                            }
                            if (list.length === length) {
                                list.push({ order_id: date.format('YYYY-MM-DD') + "-no-items", type: 'no-items', title: 'No events', date: date.valueOf() });
                            }
                        }
                        list.sort(function (a, b) { return (a.for_date || a.date) - (b.for_date || b.date); });
                        list = _shared_utility_class__WEBPACK_IMPORTED_MODULE_6__["Utils"].unique(list, 'order_id');
                        _this.items.next(list);
                        _this.model.bookings = list.filter(function (i) { return i.id; });
                        if (_this.model.ignore && !!list.find(function (i) { return i.id === _this.model.ignore; })) {
                            _this.scrollTo(_this.model.ignore);
                        }
                        else {
                            _this.scrollTo(scroll_id, offset, false);
                        }
                    }, 50);
                };
                ScheduleEventListComponent.prototype.view = function (item) {
                    var _this = this;
                    this.model.mainIndex = this.model.bookings.indexOf(item);
                    var idx = this.model.mainIndex;
                    item.disableSwitch = idx === 0 ? 'first' : (idx === this.model.bookings.length - 1 ? 'last' : 'undefined');
                    if (this.service) {
                        this.service.Overlay.openModal('meeting-details', { data: {
                                booking: this.service.Bookings.item(item.id),
                                as_delegate: this.user && this.user.email !== this.service.Users.current().email,
                                delegate: this.user.email
                            } }, function (event) {
                            if (event.type === 'next') { // Show next booking
                                _this.timeout('next_booking', function () { return _this.nextbooking(); });
                            }
                            else if (event.type === 'delete') { // Delete active booking
                                _this.timeout('delete_booking', function () { return _this.deletebooking(); });
                            }
                            else if (event.type === 'previous') { // Show previous booking
                                _this.timeout('previous_booking', function () { return _this.previousbooking(); });
                            }
                            else if (event.type === 'check-in') { // Checkin to active booking
                                _this.timeout('delete_booking', function () { return _this.checkin(); });
                            }
                            event.close();
                        });
                    }
                };
                ScheduleEventListComponent.prototype.checkin = function () {
                    var index = this.model.mainIndex;
                    this.model.bookings[index].checkin = true;
                };
                ScheduleEventListComponent.prototype.deletebooking = function () {
                    this.model.bookings.splice(this.model.mainIndex, 1);
                };
                ScheduleEventListComponent.prototype.nextbooking = function () {
                    var index = this.model.mainIndex;
                    if (index < this.model.bookings.length - 1) {
                        this.view(this.model.bookings[index + 1]);
                    }
                    else {
                        this.view(this.model.bookings[index]);
                    }
                };
                ScheduleEventListComponent.prototype.previousbooking = function () {
                    var index = this.model.mainIndex;
                    if (index > 0) {
                        this.view(this.model.bookings[index - 1]);
                    }
                    else {
                        this.view(this.model.bookings[index]);
                    }
                };
                return ScheduleEventListComponent;
            }(_shared_globals_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));
            /***/ 
        }),
        /***/ "./src/app/shell/schedule/locker-listings/locker-listings.component.ngfactory.js": 
        /*!***************************************************************************************!*\
          !*** ./src/app/shell/schedule/locker-listings/locker-listings.component.ngfactory.js ***!
          \***************************************************************************************/
        /*! exports provided: RenderType_LockerListingsComponent, View_LockerListingsComponent_0, View_LockerListingsComponent_Host_0, LockerListingsComponentNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_LockerListingsComponent", function () { return RenderType_LockerListingsComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LockerListingsComponent_0", function () { return View_LockerListingsComponent_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_LockerListingsComponent_Host_0", function () { return View_LockerListingsComponent_Host_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockerListingsComponentNgFactory", function () { return LockerListingsComponentNgFactory; });
            /* harmony import */ var _locker_listings_styles_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./locker-listings.styles.scss.shim.ngstyle */ "./src/app/shell/schedule/locker-listings/locker-listings.styles.scss.shim.ngstyle.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory */ "./node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory.js");
            /* harmony import */ var _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-widgets */ "./node_modules/@acaprojects/ngx-widgets/esm2015/acaprojects-ngx-widgets.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _locker_listings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./locker-listings.component */ "./src/app/shell/schedule/locker-listings/locker-listings.component.ts");
            /* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_LockerListingsComponent = [_locker_listings_styles_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
            var RenderType_LockerListingsComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_LockerListingsComponent, data: {} });
            function View_LockerListingsComponent_3(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Open"]))], null, null); }
            function View_LockerListingsComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "spinner", [["type", "cirlce-ring"]], null, null, null, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_SpinnerComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_3__["SpinnerComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { type: [0, "type"] }, null)], function (_ck, _v) { var currVal_0 = "cirlce-ring"; _ck(_v, 1, 0, currVal_0); }, null); }
            function View_LockerListingsComponent_2(_l) {
                return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "carousel-item", [], null, null, null, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ɵbm_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ɵbm"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, [[1, 4]], 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_3__["ɵbm"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, 0, 17, "div", [["class", "item"]], [[2, "past", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 16, "div", [["class", "content"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 9, "div", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "date"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["Locker ", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](8, null, [" ", " - ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 4, "div", [["class", "field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](10, 0, null, null, 1, "div", [["class", "label"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Expires on:"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 1, "div", [["class", "value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](13, null, [" ", " (", " ", ") "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 5, "btn", [["name", "full-width inverse"]], null, [[null, "tapped"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("tapped" === en)) {
                            var pd_0 = ((_v.context.$implicit.booking ? "" : _co.open(_v.context.$implicit)) !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ButtonComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 704512, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_3__["ButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { name: [0, "name"], disabled: [1, "disabled"] }, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_LockerListingsComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_LockerListingsComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { _ck(_v, 1, 0); var currVal_7 = "full-width inverse"; var currVal_8 = _v.context.$implicit.expired; _ck(_v, 15, 0, currVal_7, currVal_8); var currVal_9 = !_v.context.$implicit.booking; _ck(_v, 17, 0, currVal_9); var currVal_10 = _v.context.$implicit.booking; _ck(_v, 19, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = _v.context.$implicit.is_past; _ck(_v, 2, 0, currVal_0); var currVal_1 = _v.context.$implicit.id; _ck(_v, 6, 0, currVal_1); var currVal_2 = _v.context.$implicit.level; var currVal_3 = _v.context.$implicit.section; _ck(_v, 8, 0, currVal_2, currVal_3); var currVal_4 = (_v.context.$implicit.display.expiry || "Unknown"); var currVal_5 = (_v.context.$implicit.display.duration || "Sometime"); var currVal_6 = ((_v.context.$implicit.display.duration > 0) ? ("day" + ((_v.context.$implicit.display.duration === 1) ? "" : "s")) : ""); _ck(_v, 13, 0, currVal_4, currVal_5, currVal_6); });
            }
            function View_LockerListingsComponent_1(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "carousel", [["name", "schedule"]], null, null, null, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ɵbl_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ɵbl"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 1753088, null, 1, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_3__["ɵbl"], [], { name: [0, "name"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, { items: 1 }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_LockerListingsComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], { ngForOf: [0, "ngForOf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = "schedule"; _ck(_v, 1, 0, currVal_0); var currVal_1 = _co.model.list; _ck(_v, 4, 0, currVal_1); }, null); }
            function View_LockerListingsComponent_5(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "no-item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["No lockers"]))], null, null); }
            function View_LockerListingsComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "contents"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["Lockers", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 4, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LockerListingsComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_LockerListingsComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_1 = (_co.model.list && (_co.model.list.length > 0)); _ck(_v, 7, 0, currVal_1); var currVal_2 = (!_co.model.list || (_co.model.list.length <= 0)); _ck(_v, 9, 0, currVal_2); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = (_co.model.count ? (("(" + _co.model.count) + ")") : ""); _ck(_v, 4, 0, currVal_0); }); }
            function View_LockerListingsComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "locker-listings", [], null, null, null, View_LockerListingsComponent_0, RenderType_LockerListingsComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _locker_listings_component__WEBPACK_IMPORTED_MODULE_5__["LockerListingsComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_6__["AppService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            var LockerListingsComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("locker-listings", _locker_listings_component__WEBPACK_IMPORTED_MODULE_5__["LockerListingsComponent"], View_LockerListingsComponent_Host_0, { date: "date", count: "count" }, { countChange: "countChange" }, []);
            /***/ 
        }),
        /***/ "./src/app/shell/schedule/locker-listings/locker-listings.component.ts": 
        /*!*****************************************************************************!*\
          !*** ./src/app/shell/schedule/locker-listings/locker-listings.component.ts ***!
          \*****************************************************************************/
        /*! exports provided: LockerListingsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LockerListingsComponent", function () { return LockerListingsComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_globals_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/globals/base.component */ "./src/app/shared/globals/base.component.ts");
            /* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
            var LockerListingsComponent = /** @class */ (function (_super) {
                __extends(LockerListingsComponent, _super);
                function LockerListingsComponent(service) {
                    var _this = _super.call(this) || this;
                    _this.service = service;
                    _this.countChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this.model = {};
                    _this.model.list = [];
                    _this.postCount();
                    return _this;
                }
                LockerListingsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.subscription('lockers', this.service.Users.listen('user', function (user) {
                        if (user) {
                            _this.model.list = _this.service.Users.current().lockers;
                            _this.updateList();
                        }
                    }));
                };
                LockerListingsComponent.prototype.ngOnChanges = function (changes) {
                    if (changes.date) {
                        this.model.date_display = moment__WEBPACK_IMPORTED_MODULE_3__(this.date).format('DD MMM YYYY');
                        this.updateList();
                    }
                };
                LockerListingsComponent.prototype.view = function (item) {
                    this.service.Visitors.view(item);
                };
                LockerListingsComponent.prototype.updateList = function () {
                    var e_2, _a, e_3, _b;
                    var _this = this;
                    var bld = this.service.Buildings.current();
                    if (!bld) {
                        return this.timeout('update', function () { return _this.updateList(); });
                    }
                    var now = moment__WEBPACK_IMPORTED_MODULE_3__();
                    try {
                        for (var _c = __values((this.model.list || [])), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var item = _d.value;
                            var expiry = moment__WEBPACK_IMPORTED_MODULE_3__(item.expiry * 1000);
                            item.expired = now.isAfter(expiry);
                            var remaining = moment__WEBPACK_IMPORTED_MODULE_3__["duration"](expiry.diff(now)).asDays();
                            item.display = {
                                expiry: expiry.format('DD MMM YYYY'),
                                duration: remaining < 0 ? 'Expired' : Math.round(remaining)
                            };
                            for (var lvl in bld.lockers) {
                                if (bld.lockers.hasOwnProperty(lvl)) {
                                    for (var section in bld.lockers[lvl]) {
                                        if (bld.lockers[lvl].hasOwnProperty(section)) {
                                            var section_data = bld.lockers[lvl][section];
                                            for (var type in section_data) {
                                                if (section_data.hasOwnProperty(type)) {
                                                    try {
                                                        for (var _e = (e_3 = void 0, __values(section_data[type])), _f = _e.next(); !_f.done; _f = _e.next()) {
                                                            var row = _f.value;
                                                            if (row.indexOf(item.id) >= 0) {
                                                                item.level = this.service.Buildings.getLevel(lvl).name;
                                                                item.section = section;
                                                                break;
                                                            }
                                                        }
                                                    }
                                                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                                                    finally {
                                                        try {
                                                            if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                                                        }
                                                        finally { if (e_3) throw e_3.error; }
                                                    }
                                                    if (item.level) {
                                                        break;
                                                    }
                                                }
                                            }
                                            if (item.level) {
                                                break;
                                            }
                                        }
                                    }
                                    if (item.level) {
                                        break;
                                    }
                                }
                            }
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                    this.postCount();
                };
                LockerListingsComponent.prototype.postCount = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.count = _this.model.list ? _this.model.list.length : 0;
                        _this.countChange.emit(_this.count);
                    }, 50);
                };
                LockerListingsComponent.prototype.open = function (locker) {
                    var _this = this;
                    locker.opening = true;
                    this.service.Lockers.open(locker.id).then(function () {
                        locker.opening = false;
                        _this.service.error('Successfully opened locker');
                    }, function () {
                        locker.opening = false;
                        _this.service.error('Unable to open locker');
                    });
                };
                return LockerListingsComponent;
            }(_shared_globals_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));
            /***/ 
        }),
        /***/ "./src/app/shell/schedule/locker-listings/locker-listings.styles.scss.shim.ngstyle.js": 
        /*!********************************************************************************************!*\
          !*** ./src/app/shell/schedule/locker-listings/locker-listings.styles.scss.shim.ngstyle.js ***!
          \********************************************************************************************/
        /*! exports provided: styles */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function () { return styles; });
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles = [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  min-height: 9em; }\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 100%; }\n.container[_ngcontent-%COMP%]   carousel[_ngcontent-%COMP%] {\n    height: 9em;\n    min-height: 9em; }\n.container[_ngcontent-%COMP%]   carousel-item[_ngcontent-%COMP%] {\n    pointer-events: none; }\n.header[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  width: 100;\n  z-index: 101;\n  color: #33394b;\n  min-height: 3em; }\n.header[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n    height: 3em;\n    background-color: #f9f9f9;\n    width: 100%;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n.header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    text-align: center;\n    flex: 3;\n    white-space: nowrap;\n    text-align: center;\n    font-weight: 500; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n      .header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n        text-align: left;\n        padding-left: 1em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n      .header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n        text-align: left;\n        padding-left: 1em; } }\n.header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1; }\n.contents[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 100vw;\n  padding: 0 1em;\n  margin: auto;\n  min-height: 3em; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n    .contents[_ngcontent-%COMP%] {\n      padding: 0; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n    .contents[_ngcontent-%COMP%] {\n      padding: 0; } }\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 8em;\n  z-index: 100; }\n.item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  transition: transform 300ms; }\n.item.past[_ngcontent-%COMP%] {\n    opacity: .54; }\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    position: relative;\n    background-color: #fff;\n    border-radius: 8px;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n    font-size: .6em;\n    width: 13em;\n    min-height: 13em;\n    overflow: hidden;\n    max-width: 100%;\n    border: 1px solid rgba(0, 0, 0, 0);\n    transition: border-color 300ms, box-shadow 300ms;\n    cursor: pointer;\n    pointer-events: auto;\n    text-align: center; }\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n      text-align: left; }\n.item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]:hover {\n      border-color: #1937ea;\n      box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 4px 2px -2px rgba(0, 0, 0, 0.12); }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n      .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n        font-size: .8em;\n        min-height: 9em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n      .item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n        font-size: .8em;\n        min-height: 9em; } }\n.item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: .25em;\n    background-color: #1937ea;\n    color: #fff; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n      .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n        left: 47.5%;\n        border-radius: 0 0 0 8px; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n      .item[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n        left: 47.5%;\n        border-radius: 0 0 0 8px; } }\n.item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n    text-transform: uppercase;\n    color: #33394b;\n    margin-bottom: .5em;\n    font-weight: bold; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n      .item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n        margin-bottom: .25em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n      .item[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n        margin-bottom: .25em; } }\n.item[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n    color: #999;\n    font-size: 1em;\n    line-height: 1.4em;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    margin-bottom: .25em; }\n.item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    padding: 1.5em 1.5em 1em;\n    line-height: 2.5em; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n      .item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n        padding: 1em 1.5em;\n        line-height: 1.5em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n      .item[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n        padding: 1em 1.5em;\n        line-height: 1.5em; } }\n.item[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n    padding: .75em 1em;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    border-top: 1px solid #ccc;\n    color: #1937ea;\n    white-space: nowrap;\n    text-transform: uppercase;\n    cursor: pointer;\n    font-size: .9em; }\n.item[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%]:hover {\n      background-color: rgba(0, 0, 0, 0.2); }\n.no-item[_ngcontent-%COMP%] {\n  font-size: 1em; }\n.tooltip[_ngcontent-%COMP%] {\n  font-size: .6em;\n  padding: .5em;\n  white-space: nowrap;\n  text-align: center;\n  font-weight: 400; }\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc2hhcmVkLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC9zY2hlZHVsZS9sb2NrZXItbGlzdGluZ3MvbG9ja2VyLWxpc3RpbmdzLnN0eWxlcy5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoZWxsL3NjaGVkdWxlL2xvY2tlci1saXN0aW5ncy9sb2NrZXItbGlzdGluZ3Muc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2lDQ0VpQztBRDZDakM7O3VCQzFDdUI7QUR1RHZCOztzQkNwRHNCO0FDTnRCO0VBQ0ksYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZUFBZSxFQUFBO0FBSm5CO0lBT1EsV0FBVyxFQUFBO0FBUG5CO0lBV1EsV0FBVztJQUNYLGVBQWUsRUFBQTtBQVp2QjtJQWdCUSxvQkFBb0IsRUFBQTtBQUs1QjtFQUNJLHdCQUFnQjtFQUFoQixnQkFBZ0I7RUFDaEIsTUFBTTtFQUNOLFVBQVU7RUFDVixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWUsRUFBQTtBQU5uQjtJQVNRLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLCtHQUE2RixFQUFBO0FBWnJHO0lBZ0JRLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtBRitCaEI7TUVuRFI7UUF1QlksZ0JBQWdCO1FBQ2hCLGlCQUFpQixFQUFBLEVBRXhCO0FGNEJHO01FdERSO1FBdUJZLGdCQUFnQjtRQUNoQixpQkFBaUIsRUFBQSxFQUV4QjtBQTFCTDtJQTZCUSxPQUFPLEVBQUE7QUFJZjtFQUNJLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLGVBQWUsRUFBQTtBRldYO0lFbEJSO01BVVEsVUFBVSxFQUFBLEVBRWpCO0FGU087SUVyQlI7TUFVUSxVQUFVLEVBQUEsRUFFakI7QUFFRDtFQUNJLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsWUFBWSxFQUFBO0FBR2hCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsMkJBQTJCLEVBQUE7QUFKL0I7SUFPUSxZQUFZLEVBQUE7QUFQcEI7SUFXUSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQiwrR0FBNEc7SUFDNUcsZUFBZTtJQUNmLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZixrQ0FBMkI7SUFDM0IsZ0RBQWdEO0lBQ2hELGVBQWU7SUFDZixvQkFBb0I7SUFDcEIsa0JBQWtCLEVBQUE7QUF4QjFCO01BMkJZLGdCQUFnQixFQUFBO0FBM0I1QjtNQStCWSxxQkZqRlc7TUVrRlgsK0dBQTRHLEVBQUE7QUZsQ2hIO01FRVI7UUFvQ1ksZUFBZTtRQUNmLGVBQWUsRUFBQSxFQUV0QjtBRnRDRztNRURSO1FBb0NZLGVBQWU7UUFDZixlQUFlLEVBQUEsRUFFdEI7QUF2Q0w7SUEwQ1Esa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCx5QkZwR2U7SUVxR2YsV0FBVyxFQUFBO0FGckRYO01FRVI7UUFzRFksV0FBVztRQUNYLHdCQUF3QixFQUFBLEVBRS9CO0FGeERHO01FRFI7UUFzRFksV0FBVztRQUNYLHdCQUF3QixFQUFBLEVBRS9CO0FBekRMO0lBNERRLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixpQkFBaUIsRUFBQTtBRmxFakI7TUVFUjtRQW1FWSxvQkFBb0IsRUFBQSxFQUUzQjtBRnBFRztNRURSO1FBbUVZLG9CQUFvQixFQUFBLEVBRTNCO0FBckVMO0lBd0VRLFdBQVc7SUFDWCxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLG9CQUFvQixFQUFBO0FBOUU1QjtJQWtGUSx3QkFBd0I7SUFDeEIsa0JBQWtCLEVBQUE7QUZyRmxCO01FRVI7UUFzRlksa0JBQWtCO1FBQ2xCLGtCQUFrQixFQUFBLEVBRXpCO0FGeEZHO01FRFI7UUFzRlksa0JBQWtCO1FBQ2xCLGtCQUFrQixFQUFBLEVBRXpCO0FBekZMO0lBNEZRLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsY0ZuSmU7SUVvSmYsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsZUFBZSxFQUFBO0FBckd2QjtNQXdHWSxvQ0FBMkIsRUFBQTtBQUt2QztFQUNJLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9zY2hlZHVsZS9sb2NrZXItbGlzdGluZ3MvbG9ja2VyLWxpc3RpbmdzLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcbiRwcmltZS1ibHVlLWxpZ2h0OiMwMEFERUY7XG4kcHJpbWUtYmx1ZS1kYXJrOiMwMDY0QkQ7XG4kcHJpbWUtZ3JlZW4tbGlnaHQ6I0EyQUQwMDtcbiRwcmltZS1ncmV5LWRpc2FibGU6IzdDOTRBQTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogIzQyODVGNDtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kbWFpbi1mb250OiAkZm9udC1zdGFjaztcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDllbTsgfVxuICAuY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgLmNvbnRhaW5lciBjYXJvdXNlbCB7XG4gICAgaGVpZ2h0OiA5ZW07XG4gICAgbWluLWhlaWdodDogOWVtOyB9XG4gIC5jb250YWluZXIgY2Fyb3VzZWwtaXRlbSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMDtcbiAgei1pbmRleDogMTAxO1xuICBjb2xvcjogIzMzMzk0YjtcbiAgbWluLWhlaWdodDogM2VtOyB9XG4gIC5oZWFkZXIgLmNvbnRlbnRzIHtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAuaGVhZGVyIC50ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZmxleDogMztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNTAwOyB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAgIC5oZWFkZXIgLnRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFlbTsgfSB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAuaGVhZGVyIC50ZXh0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07IH0gfVxuICAuaGVhZGVyIC5idG4ge1xuICAgIGZsZXg6IDE7IH1cblxuLmNvbnRlbnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIHBhZGRpbmc6IDAgMWVtO1xuICBtYXJnaW46IGF1dG87XG4gIG1pbi1oZWlnaHQ6IDNlbTsgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC5jb250ZW50cyB7XG4gICAgICBwYWRkaW5nOiAwOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmNvbnRlbnRzIHtcbiAgICAgIHBhZGRpbmc6IDA7IH0gfVxuXG4uYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogOGVtO1xuICB6LWluZGV4OiAxMDA7IH1cblxuLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7IH1cbiAgLml0ZW0ucGFzdCB7XG4gICAgb3BhY2l0eTogLjU0OyB9XG4gIC5pdGVtIC5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGZvbnQtc2l6ZTogLjZlbTtcbiAgICB3aWR0aDogMTNlbTtcbiAgICBtaW4taGVpZ2h0OiAxM2VtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDMwMG1zLCBib3gtc2hhZG93IDMwMG1zO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgICAuaXRlbSAuY29udGVudCA+ICoge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDsgfVxuICAgIC5pdGVtIC5jb250ZW50OmhvdmVyIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzE5MzdlYTtcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDZweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA0cHggMnB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAuaXRlbSAuY29udGVudCB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICAgICAgbWluLWhlaWdodDogOWVtOyB9IH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIC5pdGVtIC5jb250ZW50IHtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgICBtaW4taGVpZ2h0OiA5ZW07IH0gfVxuICAuaXRlbSAuaW5mbyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAuMjVlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkzN2VhO1xuICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAgIC5pdGVtIC5pbmZvIHtcbiAgICAgICAgbGVmdDogNDcuNSU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDhweDsgfSB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAuaXRlbSAuaW5mbyB7XG4gICAgICAgIGxlZnQ6IDQ3LjUlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMCA4cHg7IH0gfVxuICAuaXRlbSAuZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjMzMzOTRiO1xuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgLml0ZW0gLmRhdGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuMjVlbTsgfSB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAuaXRlbSAuZGF0ZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC4yNWVtOyB9IH1cbiAgLml0ZW0gLmZpZWxkIHtcbiAgICBjb2xvcjogIzk5OTtcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIG1hcmdpbi1ib3R0b206IC4yNWVtOyB9XG4gIC5pdGVtIC5kZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAxLjVlbSAxLjVlbSAxZW07XG4gICAgbGluZS1oZWlnaHQ6IDIuNWVtOyB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAgIC5pdGVtIC5kZXRhaWxzIHtcbiAgICAgICAgcGFkZGluZzogMWVtIDEuNWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ZW07IH0gfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgLml0ZW0gLmRldGFpbHMge1xuICAgICAgICBwYWRkaW5nOiAxZW0gMS41ZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVlbTsgfSB9XG4gIC5pdGVtIC5tb3JlIHtcbiAgICBwYWRkaW5nOiAuNzVlbSAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgIGNvbG9yOiAjMTkzN2VhO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAuOWVtOyB9XG4gICAgLml0ZW0gLm1vcmU6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpOyB9XG5cbi5uby1pdGVtIHtcbiAgZm9udC1zaXplOiAxZW07IH1cblxuLnRvb2x0aXAge1xuICBmb250LXNpemU6IC42ZW07XG4gIHBhZGRpbmc6IC41ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDsgfVxuXG4uYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuIiwiQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiA5ZW07XG5cbiAgICAmPioge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICBjYXJvdXNlbCB7XG4gICAgICAgIGhlaWdodDogOWVtO1xuICAgICAgICBtaW4taGVpZ2h0OiA5ZW07XG4gICAgfVxuXG4gICAgY2Fyb3VzZWwtaXRlbSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cblxuXG4uaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwO1xuICAgIHotaW5kZXg6IDEwMTtcbiAgICBjb2xvcjogIzMzMzk0YjtcbiAgICBtaW4taGVpZ2h0OiAzZW07XG5cbiAgICAuY29udGVudHMge1xuICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZmxleDogMztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuIHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG59XG5cbi5jb250ZW50cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgcGFkZGluZzogMCAxZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxufVxuXG4uYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDhlbTtcbiAgICB6LWluZGV4OiAxMDA7XG59XG5cbi5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XG5cbiAgICAmLnBhc3Qge1xuICAgICAgICBvcGFjaXR5OiAuNTQ7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAuMTIpO1xuICAgICAgICBmb250LXNpemU6IC42ZW07XG4gICAgICAgIHdpZHRoOiAxM2VtO1xuICAgICAgICBtaW4taGVpZ2h0OiAxM2VtO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIzAwMCwgMCk7XG4gICAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAzMDBtcywgYm94LXNoYWRvdyAzMDBtcztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICYgPiAqIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCA2cHggMCByZ2JhKDAsIDAsIDAsIC4yKSwgMCAycHggMnB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDRweCAycHggLTJweCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgICAgICAgbWluLWhlaWdodDogOWVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmluZm8ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAuMjVlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgICAgICBsZWZ0OiA0Ny41JTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAgMCAwIDhweDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5kYXRlIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6ICMzMzM5NGI7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuMjVlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5maWVsZCB7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjI1ZW07XG4gICAgfVxuXG4gICAgLmRldGFpbHMge1xuICAgICAgICBwYWRkaW5nOiAxLjVlbSAxLjVlbSAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjVlbTtcblxuICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICAgICAgcGFkZGluZzogMWVtIDEuNWVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNWVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1vcmUge1xuICAgICAgICBwYWRkaW5nOiAuNzVlbSAxZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogLjllbTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMCwgLjIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubm8taXRlbSB7XG4gICAgZm9udC1zaXplOiAxZW07XG59XG5cbi50b29sdGlwIHtcbiAgICBmb250LXNpemU6IC42ZW07XG4gICAgcGFkZGluZzogLjVlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uYnRuIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiJdfQ== */"];
            /***/ 
        }),
        /***/ "./src/app/shell/schedule/meeting-listings/meeting-listings.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/shell/schedule/meeting-listings/meeting-listings.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: MeetingListingsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MeetingListingsComponent", function () { return MeetingListingsComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var _shared_globals_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/globals/base.component */ "./src/app/shared/globals/base.component.ts");
            var MeetingListingsComponent = /** @class */ (function (_super) {
                __extends(MeetingListingsComponent, _super);
                function MeetingListingsComponent(service) {
                    var _this = _super.call(this) || this;
                    _this.service = service;
                    _this.date = moment__WEBPACK_IMPORTED_MODULE_2__().valueOf();
                    _this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this.model = {};
                    _this.module = null;
                    return _this;
                }
                MeetingListingsComponent.prototype.ngOnInit = function () {
                    this.model.offset = 0;
                    this.model.today = moment__WEBPACK_IMPORTED_MODULE_2__().valueOf();
                    this.init();
                };
                MeetingListingsComponent.prototype.init = function () {
                    var _this = this;
                    if (!this.service.ready()) {
                        return this.timeout('init', function () { return _this.init(); });
                    }
                    this.subscription('timeline', this.service.Bookings.listen('timeline', function (list) {
                        var date = moment__WEBPACK_IMPORTED_MODULE_2__(_this.date).format('YYYY/MM/DD');
                        _this.model.bookings = list[date] || [];
                        _this.removeVisitorOnlyBookings();
                        _this.processBookings();
                    }));
                    this.model.settings = this.service.Settings.get('schedule');
                    this.processBookings();
                    this.updateCheckinState();
                };
                MeetingListingsComponent.prototype.removeVisitorOnlyBookings = function () {
                    var hide_visitors = (this.model.settings || {}).hide_visitor_bookings;
                    if (hide_visitors) {
                        this.model.bookings = this.model.bookings.reduce(function (l, bkn) {
                            var external = bkn.attendees.reduce(function (a, i) { return a += i.external ? 1 : 0; }, 0);
                            if (external < bkn.attendees.length) {
                                l.push(bkn);
                            }
                            return l;
                        }, []);
                    }
                };
                MeetingListingsComponent.prototype.updateCheckinState = function () {
                    var e_4, _a;
                    var now = moment__WEBPACK_IMPORTED_MODULE_2__();
                    try {
                        for (var _b = __values(this.model.bookings), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var bkn = _c.value;
                            if (bkn.room) {
                                var start = moment__WEBPACK_IMPORTED_MODULE_2__(bkn.date);
                                if (this.model['last_meeting_started' + bkn.room.id]) {
                                    // Meeting checked in and current time is within the duration of meeting
                                    if (now.valueOf() >= moment__WEBPACK_IMPORTED_MODULE_2__(start).subtract(15, 'm').valueOf() && now.valueOf() <= moment__WEBPACK_IMPORTED_MODULE_2__(start).add(bkn.duration, 'm').valueOf()) {
                                        bkn.checkin = 'done';
                                    }
                                }
                                else {
                                    if (now.valueOf() >= moment__WEBPACK_IMPORTED_MODULE_2__(start).subtract(15, 'm').valueOf() && now.valueOf() <= moment__WEBPACK_IMPORTED_MODULE_2__(start).add(15, 'm').valueOf()) {
                                        bkn.checkin = 'available';
                                    }
                                    else {
                                        bkn.checkin = 'notavailable';
                                    }
                                }
                            }
                        }
                    }
                    catch (e_4_1) { e_4 = { error: e_4_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_4) throw e_4.error; }
                    }
                };
                MeetingListingsComponent.prototype.ngOnChanges = function (changes) {
                    if (changes.date) {
                        var day = moment__WEBPACK_IMPORTED_MODULE_2__(this.date);
                        var date = day.format('YYYY/MM/DD');
                        this.model.date_display = day.format('DD MMM YYYY');
                        this.model.date = day.isSame(moment__WEBPACK_IMPORTED_MODULE_2__(), 'd') ? 'Today' : day.format('ddd, Do MMMM');
                        var list = this.service.Bookings.get('timeline') || {};
                        this.model.bookings = list[date] || [];
                        this.removeVisitorOnlyBookings();
                        this.processBookings();
                    }
                };
                // public view(item: any) {
                //     this.service.Bookings.view(item);
                // }
                MeetingListingsComponent.prototype.view = function (item) {
                    var _this = this;
                    this.model.mainIndex = this.model.bookings.indexOf(item);
                    // check if meeting is present or if meeting is in the past
                    var start = moment__WEBPACK_IMPORTED_MODULE_2__(item.date);
                    var duration = item.duration;
                    var now = moment__WEBPACK_IMPORTED_MODULE_2__();
                    if (now > start) {
                        item.startStatus = 'past';
                        // now need to pack this duration and update the booking
                    }
                    else {
                        item.startStatus = 'future';
                    }
                    if (this.model.mainIndex == 0) {
                        item.disableSwitch = 'first';
                    }
                    else {
                        if (this.model.mainIndex == this.model.bookings.length - 1) {
                            item.disableSwitch = 'last';
                        }
                        else {
                            item.disableSwitch = 'undefined';
                        }
                    }
                    if (this.service) {
                        this.service.Overlay.openModal('meeting-details', { data: { booking: item } })
                            .then(function (inst) { return inst.subscribe(function (event) {
                            if (event.type === 'next') {
                                setTimeout(function () {
                                    _this.nextbooking();
                                }, 300);
                            }
                            if (event.type === 'delete') {
                                setTimeout(function () {
                                    _this.deletebooking();
                                }, 300);
                                event.close();
                            }
                            if (event.type === 'previous') {
                                setTimeout(function () {
                                    _this.previousbooking();
                                }, 300);
                            }
                            if (event.type === 'duplicate') {
                                event.close();
                            }
                            event.close();
                            if (event.type === 'check-in') {
                                setTimeout(function () {
                                    _this.checkin();
                                }, 300);
                            }
                        }); });
                    }
                };
                MeetingListingsComponent.prototype.checkin = function () {
                    var index = this.model.mainIndex;
                    this.model.bookings[index].checkin = true;
                };
                MeetingListingsComponent.prototype.deletebooking = function () {
                    this.model.bookings.splice(this.model.mainIndex, 1);
                };
                MeetingListingsComponent.prototype.nextbooking = function () {
                    if (this.model.mainIndex < this.model.bookings.length - 1) {
                        var index = this.model.mainIndex + 1;
                        this.view(this.model.bookings[index]);
                    }
                    else {
                        var index = this.model.mainIndex;
                        this.view(this.model.bookings[index]);
                    }
                };
                MeetingListingsComponent.prototype.previousbooking = function () {
                    if (this.model.mainIndex > 0) {
                        var index = this.model.mainIndex - 1;
                        this.view(this.model.bookings[index]);
                    }
                    else {
                        var index = this.model.mainIndex;
                        this.view(this.model.bookings[index]);
                    }
                };
                MeetingListingsComponent.prototype.changeDate = function () {
                    this.dateChange.emit(this.date);
                    this.model.show_calendar = false;
                };
                MeetingListingsComponent.prototype.processBookings = function () {
                    var e_5, _a;
                    var _this = this;
                    this.model.list = [];
                    var now = moment__WEBPACK_IMPORTED_MODULE_2__();
                    var bld = this.service.Buildings.current();
                    var bookings = (this.model.bookings || []);
                    try {
                        for (var bookings_1 = __values(bookings), bookings_1_1 = bookings_1.next(); !bookings_1_1.done; bookings_1_1 = bookings_1.next()) {
                            var bkn = bookings_1_1.value;
                            var start = moment__WEBPACK_IMPORTED_MODULE_2__(bkn.date);
                            var end = moment__WEBPACK_IMPORTED_MODULE_2__(start).add(bkn.duration, 'm');
                            var attend_cnt = bkn.attendees ? bkn.attendees.length : 0;
                            bkn.display = {
                                date: start.format('MMM D'),
                                cal: start.format('MMMM YYYY'),
                                title: bkn.title,
                                time: start.format('h:mma') + " - " + end.format('h:mma'),
                                desc: (bkn.notes.find(function (i) { return i.type === 'description'; }) || { message: '' }).message,
                                duration: bkn.display.duration,
                                attend: attend_cnt ? attend_cnt + " Attendee" + (attend_cnt === 1 ? '' : 's') : 'No attendees'
                            };
                            if (bkn.room) {
                                // get the status of last meeting for this particular room
                                bkn.display.location = "" + bkn.room.name + (bkn.room.level ? ' - ' + bkn.room.level.name : '');
                            }
                            if (bkn.attendees && bkn.attendees.length > 0) {
                                var len = bkn.attendees.length;
                                bkn.display.attend = len + " Attendee" + (len > 1 ? 's' : '');
                            }
                        }
                    }
                    catch (e_5_1) { e_5 = { error: e_5_1 }; }
                    finally {
                        try {
                            if (bookings_1_1 && !bookings_1_1.done && (_a = bookings_1.return)) _a.call(bookings_1);
                        }
                        finally { if (e_5) throw e_5.error; }
                    }
                    if (this.model.bookings && this.model.bookings.length > 0) {
                        if (!this.model.bookings[0].display || !this.model.bookings[0].display.location) {
                            this.timeout('process', function () { return _this.processBookings(); });
                        }
                    }
                };
                MeetingListingsComponent.prototype.newBooking = function () {
                    this.service.navigate('book');
                };
                MeetingListingsComponent.prototype.confirm = function (item) {
                    this.model.room = item.room;
                    var roomid = item.room.id;
                    this.module = this.service.Bindings.module(roomid, 'Bookings_1');
                    this.startMeeting(item);
                };
                MeetingListingsComponent.prototype.startMeeting = function (item) {
                    if (!this.model && !this.model.room) {
                        return;
                    }
                    if (this.model.room) {
                        var time = item.date;
                        if (time) {
                            this.model.started = true;
                            if (this.module) {
                                this.module.exec('start_meeting', time)
                                    .then(function () { return console.log("meeting updated in the backend"); }, function () { return null; });
                            }
                        }
                    }
                };
                MeetingListingsComponent.prototype.bookingId = function (index, item) {
                    return item ? item.id : index;
                };
                return MeetingListingsComponent;
            }(_shared_globals_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));
            /***/ 
        }),
        /***/ "./src/app/shell/schedule/schedule.component.ngfactory.js": 
        /*!****************************************************************!*\
          !*** ./src/app/shell/schedule/schedule.component.ngfactory.js ***!
          \****************************************************************/
        /*! exports provided: RenderType_ScheduleComponent, View_ScheduleComponent_0, View_ScheduleComponent_Host_0, ScheduleComponentNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_ScheduleComponent", function () { return RenderType_ScheduleComponent; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ScheduleComponent_0", function () { return View_ScheduleComponent_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_ScheduleComponent_Host_0", function () { return View_ScheduleComponent_Host_0; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponentNgFactory", function () { return ScheduleComponentNgFactory; });
            /* harmony import */ var _schedule_styles_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.styles.scss.shim.ngstyle */ "./src/app/shell/schedule/schedule.styles.scss.shim.ngstyle.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory */ "./node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acaprojects/ngx-widgets */ "./node_modules/@acaprojects/ngx-widgets/esm2015/acaprojects-ngx-widgets.js");
            /* harmony import */ var _node_modules_acaprojects_ngx_date_picker_acaprojects_ngx_date_picker_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-date-picker/acaprojects-ngx-date-picker.ngfactory */ "./node_modules/@acaprojects/ngx-date-picker/acaprojects-ngx-date-picker.ngfactory.js");
            /* harmony import */ var _acaprojects_ngx_date_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acaprojects/ngx-date-picker */ "./node_modules/@acaprojects/ngx-date-picker/fesm2015/acaprojects-ngx-date-picker.js");
            /* harmony import */ var _event_list_event_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./event-list/event-list.component.ngfactory */ "./src/app/shell/schedule/event-list/event-list.component.ngfactory.js");
            /* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./event-list/event-list.component */ "./src/app/shell/schedule/event-list/event-list.component.ts");
            /* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
            /* harmony import */ var _locker_listings_locker_listings_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./locker-listings/locker-listings.component.ngfactory */ "./src/app/shell/schedule/locker-listings/locker-listings.component.ngfactory.js");
            /* harmony import */ var _locker_listings_locker_listings_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./locker-listings/locker-listings.component */ "./src/app/shell/schedule/locker-listings/locker-listings.component.ts");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./schedule.component */ "./src/app/shell/schedule/schedule.component.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             * /*
             * @Author: Alex Sorafumo
             * @Date:   2017-05-16 14:12:48
             * @Last Modified by: Alex Sorafumo
             * @Last Modified time: 2018-08-08 14:49:27
            
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles_ScheduleComponent = [_schedule_styles_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
            var RenderType_ScheduleComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_ScheduleComponent, data: {} });
            function View_ScheduleComponent_1(_l) {
                return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "dropdown", [["klass", "no-back form"]], null, [[null, "modelChange"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("modelChange" === en)) {
                            var pd_0 = ((_co.model.show_user = _co.users[$event]) !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_DropdownComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_DropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 704512, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"], [], { klass: [0, "klass"], model: [1, "model"], list: [2, "list"] }, { modelChange: "modelChange" })], function (_ck, _v) { var _co = _v.component; var currVal_0 = "no-back form"; var currVal_1 = _co.model.host; var currVal_2 = _co.users; _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2); }, null);
            }
            function View_ScheduleComponent_2(_l) {
                return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "a-date-picker", [["klass", "themed"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("ngModelChange" === en)) {
                            _co.setDate($event);
                            var pd_0 = ((_co.model.show_tooltip = false) !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, _node_modules_acaprojects_ngx_date_picker_acaprojects_ngx_date_picker_ngfactory__WEBPACK_IMPORTED_MODULE_5__["View_ADatePickerComponent_0"], _node_modules_acaprojects_ngx_date_picker_acaprojects_ngx_date_picker_ngfactory__WEBPACK_IMPORTED_MODULE_5__["RenderType_ADatePickerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 638976, null, 0, _acaprojects_ngx_date_picker__WEBPACK_IMPORTED_MODULE_6__["ADatePickerComponent"], [], { klass: [0, "klass"], counters: [1, "counters"], options: [2, "options"] }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](2, { from: 0 }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) { return [p0_0]; }, [_acaprojects_ngx_date_picker__WEBPACK_IMPORTED_MODULE_6__["ADatePickerComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]]], { model: [0, "model"] }, { update: "ngModelChange" }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null)], function (_ck, _v) { var _co = _v.component; var currVal_7 = "themed"; var currVal_8 = _co.model.events; var currVal_9 = _ck(_v, 2, 0, _co.model.today); _ck(_v, 1, 0, currVal_7, currVal_8, currVal_9); var currVal_10 = ((_co.model.date == null) ? null : _co.model.date.value); _ck(_v, 4, 0, currVal_10); }, function (_ck, _v) { var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassUntouched; var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassTouched; var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPristine; var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassDirty; var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassValid; var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassInvalid; var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).ngClassPending; _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6); });
            }
            function View_ScheduleComponent_3(_l) {
                return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "events"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "schedule-event-list", [], null, [[null, "dateChange"], [null, "loading"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("dateChange" === en)) {
                            var pd_0 = ((_co.model.date.value = $event) !== false);
                            ad = (pd_0 && ad);
                        }
                        if (("loading" === en)) {
                            var pd_1 = ((_co.model.loading = $event) !== false);
                            ad = (pd_1 && ad);
                        }
                        return ad;
                    }, _event_list_event_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["View_ScheduleEventListComponent_0"], _event_list_event_list_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["RenderType_ScheduleEventListComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 770048, null, 0, _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_8__["ScheduleEventListComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"]], { user: [0, "user"], date: [1, "date"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.model.show_user; var currVal_1 = _co.model.date.value; _ck(_v, 2, 0, currVal_0, currVal_1); }, null);
            }
            function View_ScheduleComponent_4(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "events"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "locker-listings", [], null, null, null, _locker_listings_locker_listings_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_LockerListingsComponent_0"], _locker_listings_locker_listings_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_LockerListingsComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 770048, null, 0, _locker_listings_locker_listings_component__WEBPACK_IMPORTED_MODULE_11__["LockerListingsComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"]], { date: [0, "date"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.model.date.value; _ck(_v, 2, 0, currVal_0); }, null); }
            function View_ScheduleComponent_0(_l) {
                return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "div", [["class", "container"]], [[2, "popout", null], [2, "visitor-dropdown", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "icon text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScheduleComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 5, "div", [["class", "buttons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "btn", [["format", "mini-action"], ["klass", "mck-primary"]], null, [[null, "tapped"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("tapped" === en)) {
                            var pd_0 = ((_co.model.show_tooltip = !_co.model.show_tooltip) !== false);
                            ad = (pd_0 && ad);
                        }
                        return ad;
                    }, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ButtonComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 704512, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], { klass: [0, "klass"], format: [1, "format"] }, { tapped: "tapped" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, 0, 2, "i", [["class", "material-icons"], ["offset", "end"], ["position", "bottom"], ["tooltip", ""]], null, [[null, "showChange"], [null, "mouseenter"], [null, "mouseleave"]], function (_v, en, $event) {
                        var ad = true;
                        var _co = _v.component;
                        if (("mouseenter" === en)) {
                            var pd_0 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onEnter($event.target) !== false);
                            ad = (pd_0 && ad);
                        }
                        if (("mouseleave" === en)) {
                            var pd_1 = (_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).onLeave($event.target) !== false);
                            ad = (pd_1 && ad);
                        }
                        if (("showChange" === en)) {
                            var pd_2 = ((_co.model.show_tooltip = $event) !== false);
                            ad = (pd_2 && ad);
                        }
                        return ad;
                    }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 671744, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["OverlayService"]], { position: [0, "position"], offset: [1, "offset"], template: [2, "template"], triangle: [3, "triangle"], show: [4, "show"] }, { showChange: "showChange" }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" today "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["calendar", 2]], null, 0, null, View_ScheduleComponent_2)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 4, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScheduleComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ScheduleComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], { ngIf: [0, "ngIf"] }, null)], function (_ck, _v) { var _co = _v.component; var currVal_2 = (_co.users && (_co.users.length > 1)); _ck(_v, 4, 0, currVal_2); var currVal_3 = "mck-primary"; var currVal_4 = "mini-action"; _ck(_v, 7, 0, currVal_3, currVal_4); var currVal_5 = "bottom"; var currVal_6 = "end"; var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11); var currVal_8 = true; var currVal_9 = _co.model.show_tooltip; _ck(_v, 9, 0, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9); var currVal_10 = (!_co.model.settings || (_co.model.settings.visitors !== false)); _ck(_v, 14, 0, currVal_10); var currVal_11 = (_co.model.lockers && _co.model.has_lockers); _ck(_v, 16, 0, currVal_11); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.model.popout; var currVal_1 = _co.model.visitorDropdown; _ck(_v, 0, 0, currVal_0, currVal_1); });
            }
            function View_ScheduleComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-schedule", [], null, null, null, View_ScheduleComponent_0, RenderType_ScheduleComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _schedule_component__WEBPACK_IMPORTED_MODULE_13__["ScheduleComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_9__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
            var ScheduleComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-schedule", _schedule_component__WEBPACK_IMPORTED_MODULE_13__["ScheduleComponent"], View_ScheduleComponent_Host_0, {}, {}, []);
            /***/ 
        }),
        /***/ "./src/app/shell/schedule/schedule.component.ts": 
        /*!******************************************************!*\
          !*** ./src/app/shell/schedule/schedule.component.ts ***!
          \******************************************************/
        /*! exports provided: ScheduleComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function () { return ScheduleComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
            /* harmony import */ var _shared_globals_base_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/globals/base.component */ "./src/app/shared/globals/base.component.ts");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
            /*
             * @Author: Alex Sorafumo
             * @Date:   2017-05-16 14:12:48
             * @Last Modified by: Alex Sorafumo
             * @Last Modified time: 2018-08-08 14:49:27
             */
            var ScheduleComponent = /** @class */ (function (_super) {
                __extends(ScheduleComponent, _super);
                function ScheduleComponent(service, route) {
                    var _this = _super.call(this) || this;
                    _this.service = service;
                    _this.route = route;
                    _this.model = {};
                    /** List of users that the current user can see the bookings of */
                    _this.users = [];
                    _this.process_list = function (dates) { return function (list) {
                        var e_6, _a;
                        var timeline = _this.service.Bookings.get('timeline');
                        try {
                            for (var dates_1 = __values(dates), dates_1_1 = dates_1.next(); !dates_1_1.done; dates_1_1 = dates_1.next()) {
                                var d = dates_1_1.value;
                                _this.service.Bookings.clear({ from: d });
                            }
                        }
                        catch (e_6_1) { e_6 = { error: e_6_1 }; }
                        finally {
                            try {
                                if (dates_1_1 && !dates_1_1.done && (_a = dates_1.return)) _a.call(dates_1);
                            }
                            finally { if (e_6) throw e_6.error; }
                        }
                    }; };
                    return _this;
                }
                ScheduleComponent.prototype.ngOnInit = function () {
                    this.model.dates = [];
                    this.init();
                };
                ScheduleComponent.prototype.init = function () {
                    var e_7, _a;
                    var _this = this;
                    if (!this.service.ready()) {
                        return setTimeout(function () { return _this.init(); }, 500);
                    }
                    this.model.day_count = this.service.Settings.get('app.schedule.length') || 14;
                    this.model.has_lockers = this.service.Settings.get('app.lockers.enabled');
                    this.model.popout = this.service.Settings.get('app.style.popout') || false;
                    this.model.settings = this.service.Settings.get('app.schedule');
                    if (this.model.settings.popout === false) {
                        this.model.popout = false;
                    }
                    this.service.set('BANNER.block_height', 0);
                    this.model.year = moment__WEBPACK_IMPORTED_MODULE_5__().year();
                    this.loadBookings();
                    this.model.visitorDropdown = false;
                    this.service.Analytics.screen('Schedule');
                    this.service.Analytics.page('/schedule');
                    this.model.today = moment__WEBPACK_IMPORTED_MODULE_5__().valueOf();
                    this.model.user = this.service.Users.current();
                    this.model.host = 0;
                    this.users = [this.model.user];
                    try {
                        for (var _b = __values(this.model.user.delegates), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var email = _c.value;
                            var user = this.service.Users.item(email);
                            if (user) {
                                this.users.push(user);
                            }
                            else {
                                this.service.Users.show(email).then(function (u) {
                                    if (_this.host && u.email === _this.host) {
                                        _this.model.host = _this.users.length;
                                        _this.model.show_user = u;
                                    }
                                    _this.users.push(u);
                                });
                            }
                        }
                    }
                    catch (e_7_1) { e_7 = { error: e_7_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_7) throw e_7.error; }
                    }
                    this.model.lockers = this.model.user.lockers;
                    this.model.show_tooltip = false;
                    var date = this.model.date ? this.model.date.value : undefined;
                    this.model.is_today = moment__WEBPACK_IMPORTED_MODULE_5__().isSame(moment__WEBPACK_IMPORTED_MODULE_5__(date), 'd');
                    this.subscription('route', this.route.queryParamMap.subscribe(function (params) {
                        if (params.has('host')) {
                            var email_1 = params.get('host');
                            var index = _this.users.findIndex(function (i) { return i.email === email_1; });
                            _this.model.host = index > 0 ? index : 0;
                            _this.model.show_user = _this.users[_this.model.host];
                            _this.host = email_1;
                        }
                    }));
                };
                ScheduleComponent.prototype.loadBookings = function () {
                    var _this = this;
                    var date = moment__WEBPACK_IMPORTED_MODULE_5__().startOf('d');
                    this.model.date = this.model.dates.find(function (i) { return moment__WEBPACK_IMPORTED_MODULE_5__(i.value).isSame(date, 'd'); }) || {};
                    this.service.Bookings.listen("timeline", function (list) {
                        _this.timeout('update_timeline', function () { return _this.processTimeline(list); }, 100);
                    });
                };
                ScheduleComponent.prototype.setDate = function (date) {
                    this.model.date = { value: date };
                };
                ScheduleComponent.prototype.changeDate = function (value) {
                    var date_obj = this.model.date ? this.model.date.value : undefined;
                    var date = moment__WEBPACK_IMPORTED_MODULE_5__(date_obj);
                    date.add(value, 'd');
                    this.setDate(date.valueOf());
                };
                ScheduleComponent.prototype.resetDate = function () {
                    this.setDate(moment__WEBPACK_IMPORTED_MODULE_5__().valueOf());
                };
                ScheduleComponent.prototype.toggleView = function (e) {
                    this.model.visitorDropdown = e;
                };
                ScheduleComponent.prototype.updateEvents = function (timestamp) {
                    this.model.dates = [];
                    var date = moment__WEBPACK_IMPORTED_MODULE_5__(timestamp).startOf('M');
                    var end = moment__WEBPACK_IMPORTED_MODULE_5__(date).endOf('M');
                    var now = moment__WEBPACK_IMPORTED_MODULE_5__();
                    for (; date.isSameOrBefore(end); date.add(1, 'd')) {
                        var date_obj = {
                            count: 0,
                            display: now.isSame(date, 'd') ? 'Today' : date.format('ddd, MMM Do'),
                            date: date.format('YYYY/MM/DD'),
                            value: date.valueOf()
                        };
                        this.model.dates.push(date_obj);
                    }
                    this.processTimeline(this.service.Bookings.get('timeline'));
                };
                ScheduleComponent.prototype.processTimeline = function (list) {
                    var e_8, _a;
                    this.model.events = {};
                    try {
                        for (var _b = __values(this.model.dates), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var day = _c.value;
                            day.count = (list ? list[day.date] || [] : []).length;
                            this.model.events[moment__WEBPACK_IMPORTED_MODULE_5__(day.value).format('YYYY-MM-DD')] = day.count;
                        }
                    }
                    catch (e_8_1) { e_8 = { error: e_8_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_8) throw e_8.error; }
                    }
                };
                return ScheduleComponent;
            }(_shared_globals_base_component__WEBPACK_IMPORTED_MODULE_4__["BaseComponent"]));
            /***/ 
        }),
        /***/ "./src/app/shell/schedule/schedule.module.ngfactory.js": 
        /*!*************************************************************!*\
          !*** ./src/app/shell/schedule/schedule.module.ngfactory.js ***!
          \*************************************************************/
        /*! exports provided: AppScheduleModuleNgFactory */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppScheduleModuleNgFactory", function () { return AppScheduleModuleNgFactory; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _schedule_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./schedule.module */ "./src/app/shell/schedule/schedule.module.ts");
            /* harmony import */ var _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory */ "./node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory.js");
            /* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
            /* harmony import */ var _shared_components_room_info_room_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/room-info/room-info.component.ngfactory */ "./src/app/shared/components/room-info/room-info.component.ngfactory.js");
            /* harmony import */ var _shared_components_desk_info_desk_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/desk-info/desk-info.component.ngfactory */ "./src/app/shared/components/desk-info/desk-info.component.ngfactory.js");
            /* harmony import */ var _shared_components_custom_fields_date_field_date_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/custom-fields/date-field/date-field.component.ngfactory */ "./src/app/shared/components/custom-fields/date-field/date-field.component.ngfactory.js");
            /* harmony import */ var _shared_components_custom_fields_time_field_time_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/custom-fields/time-field/time-field.component.ngfactory */ "./src/app/shared/components/custom-fields/time-field/time-field.component.ngfactory.js");
            /* harmony import */ var _shared_components_custom_fields_duration_field_duration_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/custom-fields/duration-field/duration-field.component.ngfactory */ "./src/app/shared/components/custom-fields/duration-field/duration-field.component.ngfactory.js");
            /* harmony import */ var _shared_components_custom_fields_user_list_field_user_list_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/custom-fields/user-list-field/user-list-field.component.ngfactory */ "./src/app/shared/components/custom-fields/user-list-field/user-list-field.component.ngfactory.js");
            /* harmony import */ var _shared_components_custom_fields_week_field_week_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/components/custom-fields/week-field/week-field.component.ngfactory */ "./src/app/shared/components/custom-fields/week-field/week-field.component.ngfactory.js");
            /* harmony import */ var _shared_components_custom_fields_terms_field_terms_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/custom-fields/terms-field/terms-field.component.ngfactory */ "./src/app/shared/components/custom-fields/terms-field/terms-field.component.ngfactory.js");
            /* harmony import */ var _shared_components_custom_fields_preference_field_preference_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../shared/components/custom-fields/preference-field/preference-field.component.ngfactory */ "./src/app/shared/components/custom-fields/preference-field/preference-field.component.ngfactory.js");
            /* harmony import */ var _shared_components_custom_fields_cost_field_cost_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../shared/components/custom-fields/cost-field/cost-field.component.ngfactory */ "./src/app/shared/components/custom-fields/cost-field/cost-field.component.ngfactory.js");
            /* harmony import */ var _shared_components_custom_fields_recurrence_field_recurrence_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/components/custom-fields/recurrence-field/recurrence-field.component.ngfactory */ "./src/app/shared/components/custom-fields/recurrence-field/recurrence-field.component.ngfactory.js");
            /* harmony import */ var _shared_components_custom_fields_user_search_field_user_search_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/components/custom-fields/user-search-field/user-search-field.component.ngfactory */ "./src/app/shared/components/custom-fields/user-search-field/user-search-field.component.ngfactory.js");
            /* harmony import */ var _shared_components_custom_fields_editor_field_editor_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/components/custom-fields/editor-field/editor-field.component.ngfactory */ "./src/app/shared/components/custom-fields/editor-field/editor-field.component.ngfactory.js");
            /* harmony import */ var _shared_components_custom_fields_guest_settings_field_guest_settings_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../shared/components/custom-fields/guest-settings-field/guest-settings-field.component.ngfactory */ "./src/app/shared/components/custom-fields/guest-settings-field/guest-settings-field.component.ngfactory.js");
            /* harmony import */ var _shared_components_custom_fields_dropdown_field_dropdown_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../shared/components/custom-fields/dropdown-field/dropdown-field.component.ngfactory */ "./src/app/shared/components/custom-fields/dropdown-field/dropdown-field.component.ngfactory.js");
            /* harmony import */ var _schedule_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./schedule.component.ngfactory */ "./src/app/shell/schedule/schedule.component.ngfactory.js");
            /* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @acaprojects/ngx-widgets */ "./node_modules/@acaprojects/ngx-widgets/esm2015/acaprojects-ngx-widgets.js");
            /* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/esm2015/bidi.js");
            /* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/cdk/platform */ "./node_modules/@angular/cdk/esm2015/platform.js");
            /* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm2015/scrolling.js");
            /* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/fesm2015/acaprojects-ngx-composer.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @tinymce/tinymce-angular */ "./node_modules/@tinymce/tinymce-angular/fesm2015/tinymce-tinymce-angular.js");
            /* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/esm2015/text-field.js");
            /* harmony import */ var _acaprojects_ngx_date_picker__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @acaprojects/ngx-date-picker */ "./node_modules/@acaprojects/ngx-date-picker/fesm2015/acaprojects-ngx-date-picker.js");
            /* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
            /* harmony import */ var _acaprojects_ngx_checkbox__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @acaprojects/ngx-checkbox */ "./node_modules/@acaprojects/ngx-checkbox/fesm2015/acaprojects-ngx-checkbox.js");
            /* harmony import */ var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @acaprojects/ngx-dynamic-forms */ "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
            /* harmony import */ var _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../shared/components/shared.module */ "./src/app/shared/components/shared.module.ts");
            /* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./schedule.component */ "./src/app/shell/schedule/schedule.component.ts");
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             *
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var AppScheduleModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_schedule_module__WEBPACK_IMPORTED_MODULE_1__["AppScheduleModule"], [], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["DynamicBaseComponentNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["OverlayContentComponentNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ModalComponentNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["NotificationComponentNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["OverlayContainerComponentNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["TooltipComponentNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵcNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["MapPinComponentNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["MapRangeComponentNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _shared_components_room_info_room_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RoomInfoComponentNgFactory"], _shared_components_desk_info_desk_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["DeskInfoComponentNgFactory"], _shared_components_custom_fields_date_field_date_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["CustomDateFieldComponentNgFactory"], _shared_components_custom_fields_time_field_time_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["CustomTimeFieldComponentNgFactory"], _shared_components_custom_fields_duration_field_duration_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["CustomDurationFieldComponentNgFactory"], _shared_components_custom_fields_user_list_field_user_list_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["CustomUserListFieldComponentNgFactory"], _shared_components_custom_fields_week_field_week_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["CustomWeekFieldComponentNgFactory"], _shared_components_custom_fields_terms_field_terms_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["CustomTermsFieldComponentNgFactory"], _shared_components_custom_fields_preference_field_preference_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["CustomPreferenceFieldComponentNgFactory"], _shared_components_custom_fields_cost_field_cost_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["CustomCostFieldComponentNgFactory"], _shared_components_custom_fields_recurrence_field_recurrence_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["CustomRecurrenceFieldComponentNgFactory"], _shared_components_custom_fields_user_search_field_user_search_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["CustomUserSearchFieldComponentNgFactory"], _shared_components_custom_fields_editor_field_editor_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["CustomEditorFieldComponentNgFactory"], _shared_components_custom_fields_guest_settings_field_guest_settings_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["CustomGuestSettingsFieldComponentNgFactory"], _shared_components_custom_fields_dropdown_field_dropdown_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["CustomDropdownFieldComponentNgFactory"], _schedule_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["ScheduleComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_20__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_20__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_20__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_20__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵg"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵh"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵh"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["OverlayWidgetsModule"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["OverlayWidgetsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵo"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵo"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵm"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵp"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵq"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵq"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_24__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_25__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_25__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_26__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵr"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵr"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵs"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵt"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵt"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵu"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵv"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵx"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵy"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵy"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["FormControlWidgetsModule"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["FormControlWidgetsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["FileDropModule"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["FileDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵba"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵba"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵz"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵz"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵbb"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵbb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵbc"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵbc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵbd"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵbe"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["ɵbe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["GeneralWidgetsModule"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["GeneralWidgetsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["PageControlWidgetsModule"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["PageControlWidgetsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["WidgetsModule"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["WidgetsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_27__["ComposerModule"], _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_27__["ComposerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_28__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_28__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_28__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_21__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_29__["EditorModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_29__["EditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_30__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["DynamicFormComponentModule"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_23__["DynamicFormComponentModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_date_picker__WEBPACK_IMPORTED_MODULE_31__["ADatePickerModule"], _acaprojects_ngx_date_picker__WEBPACK_IMPORTED_MODULE_31__["ADatePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_32__["ACustomEventsModule"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_32__["ACustomEventsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_checkbox__WEBPACK_IMPORTED_MODULE_33__["ACheckboxModule"], _acaprojects_ngx_checkbox__WEBPACK_IMPORTED_MODULE_33__["ACheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_34__["ADynamicFormsModule"], _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_34__["ADynamicFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_35__["SharedComponentModule"], _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_35__["SharedComponentModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _schedule_module__WEBPACK_IMPORTED_MODULE_1__["AppScheduleModule"], _schedule_module__WEBPACK_IMPORTED_MODULE_1__["AppScheduleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_28__["ROUTES"], function () { return [[{ path: "", component: _schedule_component__WEBPACK_IMPORTED_MODULE_36__["ScheduleComponent"] }, { path: ":date", component: _schedule_component__WEBPACK_IMPORTED_MODULE_36__["ScheduleComponent"] }, { path: "view/:id", component: _schedule_component__WEBPACK_IMPORTED_MODULE_36__["ScheduleComponent"] }, { path: "view", redirectTo: "schedule" }, { path: "**", redirectTo: "" }]]; }, [])]); });
            /***/ 
        }),
        /***/ "./src/app/shell/schedule/schedule.module.ts": 
        /*!***************************************************!*\
          !*** ./src/app/shell/schedule/schedule.module.ts ***!
          \***************************************************/
        /*! exports provided: AppScheduleModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppScheduleModule", function () { return AppScheduleModule; });
            /* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.component */ "./src/app/shell/schedule/schedule.component.ts");
            /* harmony import */ var _meeting_listings_meeting_listings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./meeting-listings/meeting-listings.component */ "./src/app/shell/schedule/meeting-listings/meeting-listings.component.ts");
            /* harmony import */ var _visitor_listings_visitor_listings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./visitor-listings/visitor-listings.component */ "./src/app/shell/schedule/visitor-listings/visitor-listings.component.ts");
            /* harmony import */ var _locker_listings_locker_listings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./locker-listings/locker-listings.component */ "./src/app/shell/schedule/locker-listings/locker-listings.component.ts");
            /* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event-list/event-list.component */ "./src/app/shell/schedule/event-list/event-list.component.ts");
            var COMPONENTS = [
                _schedule_component__WEBPACK_IMPORTED_MODULE_0__["ScheduleComponent"],
                _meeting_listings_meeting_listings_component__WEBPACK_IMPORTED_MODULE_1__["MeetingListingsComponent"],
                _visitor_listings_visitor_listings_component__WEBPACK_IMPORTED_MODULE_2__["VisitorListingsComponent"],
                _locker_listings_locker_listings_component__WEBPACK_IMPORTED_MODULE_3__["LockerListingsComponent"],
                _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_4__["ScheduleEventListComponent"],
            ];
            var AppScheduleModule = /** @class */ (function () {
                function AppScheduleModule() {
                }
                return AppScheduleModule;
            }());
            /***/ 
        }),
        /***/ "./src/app/shell/schedule/schedule.styles.scss.shim.ngstyle.js": 
        /*!*********************************************************************!*\
          !*** ./src/app/shell/schedule/schedule.styles.scss.shim.ngstyle.js ***!
          \*********************************************************************/
        /*! exports provided: styles */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function () { return styles; });
            /**
             * @fileoverview This file was generated by the Angular template compiler. Do not edit.
             * /*
             * @Author: Alex Sorafumo
             * @Date:   2017-05-16 14:12:48
             * @Last Modified by: Alex Sorafumo
             * @Last Modified time: 2018-08-08 14:49:27
            
             * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
             * tslint:disable
             */
            var styles = [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ecf1f5;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow: hidden; }\n.container.visitor-dropdown[_ngcontent-%COMP%] {\n    overflow-y: hidden; }\n.container.popout[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    width: 720px;\n    max-width: 85vw;\n    padding: .5em 0; }\n.container.popout[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n      border-radius: 1.55em; }\ndropdown[_ngcontent-%COMP%] {\n  width: 12em; }\n.hook[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 1em;\n  display: flex;\n  justify-content: flex-end; }\n.schedule[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  max-width: 1024px;\n  width: 100vw;\n  min-height: 10em; }\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 3em;\n  min-height: 3em;\n  color: #fff;\n  width: 100%;\n  background: linear-gradient(to right, #051C2C, #051C2C 40%, #0B2453 60%, #1F40E6 100%) !important; }\n.header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    flex: 1;\n    font-size: 2em;\n    padding: .25em; }\n.header[_ngcontent-%COMP%]   .icon.text[_ngcontent-%COMP%] {\n      font-size: 1.2em;\n      margin-left: 0.5em;\n      max-width: 16em; }\n.header[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%] {\n    flex: 1;\n    font-size: 1.2em;\n    padding: .25em;\n    display: flex;\n    justify-content: flex-end;\n    position: relative; }\n.header[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n      height: 1.25em;\n      width: 1.25em;\n      max-width: 1.25em;\n      font-size: 1.5rem; }\n.header[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]   .i[_ngcontent-%COMP%] {\n      height: 1em;\n      width: 1em;\n      max-width: 1em; }\n.body[_ngcontent-%COMP%] {\n  flex: 1;\n  height: calc(100% - 3em);\n  width: 100%;\n  overflow: auto;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-bottom: 1em;\n  position: relative; }\n.events[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 1em;\n  height: 100%; }\n.events[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    flex: 1;\n    width: 5em;\n    text-align: center;\n    font-weight: 500; }\n.events[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n    font-size: .8em;\n    width: 6em; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n      .events[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n        width: 7em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n      .events[_ngcontent-%COMP%]   .options[_ngcontent-%COMP%] {\n        width: 7em; } }\n.events[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    max-width: 100vw;\n    padding: 0 1em;\n    margin: auto;\n    min-height: 3em; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n      .events[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n        padding: 0; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n      .events[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n        padding: 0; } }\n.events[_ngcontent-%COMP%]   .grey[_ngcontent-%COMP%] {\n    background-color: #EFEFEF;\n    border-bottom: 1px solid rgba(0, 0, 0, 0.12);\n    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.35); }\n.btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end; }\n.btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    width: 1.5em; }\n.calendar-header[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: white;\n  z-index: 101;\n  color: #33394b;\n  min-height: 3em;\n  margin-bottom: 1em; }\n.calendar-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-decoration: underline; }\n.calendar-header[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover {\n      color: #1937ea; }\n.calendar-header[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%] {\n    height: 3em;\n    background-color: #f9f9f9;\n    width: 100%;\n    display: flex;\n    justify-content: left;\n    align-items: center;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n.calendar-header[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]    > .text[_ngcontent-%COMP%] {\n      flex: 3; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n        .calendar-header[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]    > .text[_ngcontent-%COMP%] {\n          text-align: left;\n          padding-left: 1em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n        .calendar-header[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]    > .text[_ngcontent-%COMP%] {\n          text-align: left;\n          padding-left: 1em; } }\n.calendar-header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    white-space: nowrap;\n    text-align: left;\n    font-weight: 500;\n    padding-left: 1.5em; }\n.calendar-header[_ngcontent-%COMP%]   .text.grey[_ngcontent-%COMP%] {\n      color: #7C94AA;\n      font-weight: 400; }\n.calendar-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    flex: 1; }\n.calendar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\nmeeting-listings[_ngcontent-%COMP%], visitor-listings[_ngcontent-%COMP%] {\n  width: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGVsbC9zY2hlZHVsZS9zY2hlZHVsZS5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvc2NoZWR1bGUvc2NoZWR1bGUuc3R5bGVzLnNjc3MiLCIvYnVpbGRzL2FjYS1lbmdpbmUvbWNraW5zZXkvbWNraW5zZXktc3RhZmYtYXBwL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7RUNLRTtBQ0xGOztpQ0RRaUM7QUN1Q2pDOzt1QkRwQ3VCO0FDaUR2Qjs7c0JEOUNzQjtBREh0QjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QseUJFSGdCO0VGSWhCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0FBVnBCO0lBYVEsa0JBQWtCLEVBQUE7QUFiMUI7SUFrQlksWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlLEVBQUE7QUFwQjNCO01BdUJnQixxQkFBcUIsRUFBQTtBQU1yQztFQUNJLFdBQVcsRUFBQTtBQUdmO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsYUFBYTtFQUNiLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUdBQWlHLEVBQUE7QUFQckc7SUFVUSxPQUFPO0lBQ1AsY0FBYztJQUNkLGNBQWMsRUFBQTtBQVp0QjtNQWVZLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsZUFBZSxFQUFBO0FBakIzQjtJQXNCUSxPQUFPO0lBQ1AsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLGtCQUFrQixFQUFBO0FBM0IxQjtNQStCWSxjQUFjO01BQ2QsYUFBYTtNQUNiLGlCQUFpQjtNQUNqQixpQkFBaUIsRUFBQTtBQWxDN0I7TUFzQ1ksV0FBVztNQUNYLFVBQVU7TUFDVixjQUFjLEVBQUE7QUFNMUI7RUFDSSxPQUFPO0VBQ1Asd0JBQXdCO0VBQ3hCLFdBQVc7RUFDWCxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZLEVBQUE7QUFIaEI7SUFNUSxPQUFPO0lBQ1AsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtBQVR4QjtJQWFRLGVBQWU7SUFDZixVQUFVLEVBQUE7QUU3RFY7TUYrQ1I7UUFpQlksVUFBVSxFQUFBLEVBRWpCO0FFL0RHO01GNENSO1FBaUJZLFVBQVUsRUFBQSxFQUVqQjtBQW5CTDtJQXNCUSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFlBQVk7SUFDWixlQUFlLEVBQUE7QUUzRWY7TUYrQ1I7UUErQlksVUFBVSxFQUFBLEVBRWpCO0FFN0VHO01GNENSO1FBK0JZLFVBQVUsRUFBQSxFQUVqQjtBQWpDTDtJQW9DUSx5QkFBeUI7SUFDekIsNENBQWtDO0lBQ2xDLHlDQUErQixFQUFBO0FBSXZDO0VBQ0ksYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix5QkFBeUIsRUFBQTtBQUg3QjtJQU1RLFlBQVksRUFBQTtBQUlwQjtFQUNJLFdBQVc7RUFDWCx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7QUFOdEI7SUFTUSwwQkFBMEIsRUFBQTtBQVRsQztNQVlZLGNFL0pXLEVBQUE7QUZtSnZCO0lBaUJRLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLCtHQUE2RixFQUFBO0FBdkJyRztNQTBCWSxPQUFPLEVBQUE7QUU3SFg7UUZtR1I7VUE2QmdCLGdCQUFnQjtVQUNoQixpQkFBaUIsRUFBQSxFQUV4QjtBRWhJRDtRRmdHUjtVQTZCZ0IsZ0JBQWdCO1VBQ2hCLGlCQUFpQixFQUFBLEVBRXhCO0FBaENUO0lBb0NRLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLG1CQUFtQixFQUFBO0FBdkMzQjtNQTBDWSxjRTNNZTtNRjRNZixnQkFBZ0IsRUFBQTtBQTNDNUI7SUFnRFEsT0FBTyxFQUFBO0FBS2Y7RUFDSSxzQkFBc0I7RUFDdEIsK0dBQTZGLEVBQUE7QUFHakc7O0VBRUksV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvc2NoZWR1bGUvc2NoZWR1bGUuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvcjogQWxleCBTb3JhZnVtb1xuICogQERhdGU6ICAgMjAxNy0wNS0xNiAxNDoxNTo1MVxuICogQExhc3QgTW9kaWZpZWQgYnk6IEFsZXggU29yYWZ1bW9cbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDYtMTggMjE6MjE6MDRcbiAqL1xuXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuJHRvcDogM2VtO1xuXG4uY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAmLnZpc2l0b3ItZHJvcGRvd24ge1xuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgfVxuXG4gICAgJi5wb3BvdXQge1xuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiA3MjBweDtcbiAgICAgICAgICAgIG1heC13aWR0aDogODV2dztcbiAgICAgICAgICAgIHBhZGRpbmc6IC41ZW0gMDtcblxuICAgICAgICAgICAgLmNvbnRlbnRzIHtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjU1ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmRyb3Bkb3duIHtcbiAgICB3aWR0aDogMTJlbTtcbn1cblxuLmhvb2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLnNjaGVkdWxlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG1pbi1oZWlnaHQ6IDEwZW07XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBtaW4taGVpZ2h0OiAzZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDUxQzJDLCAjMDUxQzJDIDQwJSwgIzBCMjQ1MyA2MCUsICMxRjQwRTYgMTAwJSkgIWltcG9ydGFudDtcblxuICAgIC5pY29uIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgZm9udC1zaXplOiAyZW07XG4gICAgICAgIHBhZGRpbmc6IC4yNWVtO1xuXG4gICAgICAgICYudGV4dCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxNmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJ1dHRvbnMge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBwYWRkaW5nOiAuMjVlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAvLyBwYWRkaW5nLXJpZ2h0OjFlbTtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEuMjVlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEuMjVlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmkge1xuICAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxZW07XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuLmJvZHkge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzZW0pO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZXZlbnRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLnRleHQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB3aWR0aDogNWVtO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuXG4gICAgLm9wdGlvbnMge1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgIHdpZHRoOiA2ZW07XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgIHdpZHRoOiA3ZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudHMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICAgICAgcGFkZGluZzogMCAxZW07XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgbWluLWhlaWdodDogM2VtO1xuXG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmdyZXkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFRkVGO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgjMDAwLCAuMTIpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgjMDAwLCAuMzUpO1xuICAgIH1cbn1cblxuLmJ0biB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICBpIHtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgIH1cbn1cblxuLmNhbGVuZGFyLWhlYWRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgei1pbmRleDogMTAxO1xuICAgIGNvbG9yOiAjMzMzOTRiO1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG5cbiAgICBzcGFuIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29udGVudHMge1xuICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xuXG4gICAgICAgICY+LnRleHQge1xuICAgICAgICAgICAgZmxleDogMztcblxuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEuNWVtO1xuXG4gICAgICAgICYuZ3JleSB7XG4gICAgICAgICAgICBjb2xvcjogJHByaW1lLWdyZXktZGlzYWJsZTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuIHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG59XG5cblxuLmNhbGVuZGFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbn1cblxubWVldGluZy1saXN0aW5ncyxcbnZpc2l0b3ItbGlzdGluZ3Mge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuIiwiLypcbiAqIEBBdXRob3I6IEFsZXggU29yYWZ1bW9cbiAqIEBEYXRlOiAgIDIwMTctMDUtMTYgMTQ6MTU6NTFcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBBbGV4IFNvcmFmdW1vXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTA2LTE4IDIxOjIxOjA0XG4gKi9cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjFmNTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAuY29udGFpbmVyLnZpc2l0b3ItZHJvcGRvd24ge1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjsgfVxuICAuY29udGFpbmVyLnBvcG91dCAuaGVhZGVyIHtcbiAgICB3aWR0aDogNzIwcHg7XG4gICAgbWF4LXdpZHRoOiA4NXZ3O1xuICAgIHBhZGRpbmc6IC41ZW0gMDsgfVxuICAgIC5jb250YWluZXIucG9wb3V0IC5oZWFkZXIgLmNvbnRlbnRzIHtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuNTVlbTsgfVxuXG5kcm9wZG93biB7XG4gIHdpZHRoOiAxMmVtOyB9XG5cbi5ob29rIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuXG4uc2NoZWR1bGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IDEwMjRweDtcbiAgd2lkdGg6IDEwMHZ3O1xuICBtaW4taGVpZ2h0OiAxMGVtOyB9XG5cbi5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDNlbTtcbiAgbWluLWhlaWdodDogM2VtO1xuICBjb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA1MUMyQywgIzA1MUMyQyA0MCUsICMwQjI0NTMgNjAlLCAjMUY0MEU2IDEwMCUpICFpbXBvcnRhbnQ7IH1cbiAgLmhlYWRlciAuaWNvbiB7XG4gICAgZmxleDogMTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBwYWRkaW5nOiAuMjVlbTsgfVxuICAgIC5oZWFkZXIgLmljb24udGV4dCB7XG4gICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xuICAgICAgbWF4LXdpZHRoOiAxNmVtOyB9XG4gIC5oZWFkZXIgLmJ1dHRvbnMge1xuICAgIGZsZXg6IDE7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBwYWRkaW5nOiAuMjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gICAgLmhlYWRlciAuYnV0dG9ucyAuaWNvbiB7XG4gICAgICBoZWlnaHQ6IDEuMjVlbTtcbiAgICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgICBtYXgtd2lkdGg6IDEuMjVlbTtcbiAgICAgIGZvbnQtc2l6ZTogMS41cmVtOyB9XG4gICAgLmhlYWRlciAuYnV0dG9ucyAuaSB7XG4gICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgIHdpZHRoOiAxZW07XG4gICAgICBtYXgtd2lkdGg6IDFlbTsgfVxuXG4uYm9keSB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gM2VtKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWJvdHRvbTogMWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuLmV2ZW50cyB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGhlaWdodDogMTAwJTsgfVxuICAuZXZlbnRzIC50ZXh0IHtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiA1ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cbiAgLmV2ZW50cyAub3B0aW9ucyB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIHdpZHRoOiA2ZW07IH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgLmV2ZW50cyAub3B0aW9ucyB7XG4gICAgICAgIHdpZHRoOiA3ZW07IH0gfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgLmV2ZW50cyAub3B0aW9ucyB7XG4gICAgICAgIHdpZHRoOiA3ZW07IH0gfVxuICAuZXZlbnRzIC5jb250ZW50cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgcGFkZGluZzogMCAxZW07XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDNlbTsgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAuZXZlbnRzIC5jb250ZW50cyB7XG4gICAgICAgIHBhZGRpbmc6IDA7IH0gfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgLmV2ZW50cyAuY29udGVudHMge1xuICAgICAgICBwYWRkaW5nOiAwOyB9IH1cbiAgLmV2ZW50cyAuZ3JleSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUZFRjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjM1KTsgfVxuXG4uYnRuIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDsgfVxuICAuYnRuIGkge1xuICAgIHdpZHRoOiAxLjVlbTsgfVxuXG4uY2FsZW5kYXItaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICB6LWluZGV4OiAxMDE7XG4gIGNvbG9yOiAjMzMzOTRiO1xuICBtaW4taGVpZ2h0OiAzZW07XG4gIG1hcmdpbi1ib3R0b206IDFlbTsgfVxuICAuY2FsZW5kYXItaGVhZGVyIHNwYW4ge1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG4gICAgLmNhbGVuZGFyLWhlYWRlciBzcGFuOmhvdmVyIHtcbiAgICAgIGNvbG9yOiAjMTkzN2VhOyB9XG4gIC5jYWxlbmRhci1oZWFkZXIgLmNvbnRlbnRzIHtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG4gICAgLmNhbGVuZGFyLWhlYWRlciAuY29udGVudHMgPiAudGV4dCB7XG4gICAgICBmbGV4OiAzOyB9XG4gICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgICAuY2FsZW5kYXItaGVhZGVyIC5jb250ZW50cyA+IC50ZXh0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtOyB9IH1cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgICAuY2FsZW5kYXItaGVhZGVyIC5jb250ZW50cyA+IC50ZXh0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMWVtOyB9IH1cbiAgLmNhbGVuZGFyLWhlYWRlciAudGV4dCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxLjVlbTsgfVxuICAgIC5jYWxlbmRhci1oZWFkZXIgLnRleHQuZ3JleSB7XG4gICAgICBjb2xvcjogIzdDOTRBQTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7IH1cbiAgLmNhbGVuZGFyLWhlYWRlciAuYnRuIHtcbiAgICBmbGV4OiAxOyB9XG5cbi5jYWxlbmRhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuXG5tZWV0aW5nLWxpc3RpbmdzLFxudmlzaXRvci1saXN0aW5ncyB7XG4gIHdpZHRoOiAxMDAlOyB9XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3M6ICMzMDliNDA7XG4kc3VjY2Vzcy1hbHQ6ICM0Mjg1ZjQ7XG4kZXJyb3I6ICNkYjI5MWQ7XG4kcGVuZGluZzogI0ZGOTgwMDtcbiRuZXV0cmFsOiAjNzk3OTc5O1xuJHByaW1lLWJsdWUtbGlnaHQ6IzAwQURFRjtcbiRwcmltZS1ibHVlLWRhcms6IzAwNjRCRDtcbiRwcmltZS1ncmVlbi1saWdodDojQTJBRDAwO1xuJHByaW1lLWdyZXktZGlzYWJsZTojN0M5NEFBO1xuXG4kYmFja2dyb3VuZDogI2VjZjFmNTtcblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcbiRjb2xvci1wcmltYXJ5LXdpcmVmcmFtZTpyZ2JhKDAsIDAsIDAsIDAuNjEpO1xuJGhlYWRlci1iZzogI2ZmZjtcbiRoZWFkZXItY29sb3I6IHJnYmEoIzAwMjk2MCwgLjg3KTtcblxuJHRpbGUtY29sb3I6ICNmZmY7XG4kdGlsZS1ib3JkZXI6ICNmZmY7XG5cbiRoZWxwLWJvcmRlcjogcmdiYSgjMDAwLCAuMik7XG5cbiRjb2xvci1wcmltYXJ5OiAjMTkzN2VhO1xuJGNvbG9yLXNlY29uZGFyeTogIzQwNDg1YTtcbiRjb2xvci10ZXJuYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXF1YXRlcm5hcnk6ICM3ZGQ2ZDY7XG4kY29sb3ItcXVpbnRlcm5hcnk6ICM0YzVjNmM7XG4kY29sb3Itc2V4dGVybmFyeTogIzdmZTQzYjtcblxuJHRpbWVsaW5lLWJnOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzRGNUY3MCAwJSwgIzBGMTIxNSAxMDAlKTtcbiR0aW1lbGluZS1ldmVudDogJGVycm9yO1xuJHRpbWVsaW5lLWJvb2tpbmc6ICRjb2xvci1xdWF0ZXJuYXJ5O1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93IHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRtYWluLWZvbnQ6ICRmb250LXN0YWNrO1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"];
            /***/ 
        }),
        /***/ "./src/app/shell/schedule/visitor-listings/visitor-listings.component.ts": 
        /*!*******************************************************************************!*\
          !*** ./src/app/shell/schedule/visitor-listings/visitor-listings.component.ts ***!
          \*******************************************************************************/
        /*! exports provided: VisitorListingsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorListingsComponent", function () { return VisitorListingsComponent; });
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _shared_globals_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/globals/base.component */ "./src/app/shared/globals/base.component.ts");
            /* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
            /* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
            /* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
            /* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
            var VisitorListingsComponent = /** @class */ (function (_super) {
                __extends(VisitorListingsComponent, _super);
                function VisitorListingsComponent(service) {
                    var _this = _super.call(this) || this;
                    _this.service = service;
                    _this.countChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
                    _this.model = {};
                    _this.model.list = [];
                    _this.model.offset = 0;
                    var cnt = Math.floor(Math.random() * 10 + 3);
                    for (var i = 0; i < cnt; i++) {
                        var time = moment__WEBPACK_IMPORTED_MODULE_4__().add(Math.floor(Math.random() * 8 - 1) * 15, 'm');
                        _this.model.list.push({
                            name: faker__WEBPACK_IMPORTED_MODULE_3__["name"].firstName() + " " + faker__WEBPACK_IMPORTED_MODULE_3__["name"].lastName(),
                            image: faker__WEBPACK_IMPORTED_MODULE_3__["image"].avatar(),
                            date: time.valueOf(),
                            arrival_time: time.format('h:mm a'),
                        });
                    }
                    _this.model.list.sort(function (a, b) { return a.time - b.time; });
                    _this.postCount();
                    return _this;
                }
                VisitorListingsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.model.today = moment__WEBPACK_IMPORTED_MODULE_4__().valueOf();
                    this.subscription('visitor_list', this.service.Visitors.listen('timeline', function (list) {
                        _this.model.visitor_list = list;
                        _this.updateList();
                    }));
                };
                VisitorListingsComponent.prototype.ngOnChanges = function (changes) {
                    if (changes.date) {
                        var day = moment__WEBPACK_IMPORTED_MODULE_4__(this.date);
                        this.model.date_display = moment__WEBPACK_IMPORTED_MODULE_4__(this.date).format('DD MMM YYYY');
                        this.model.date = day.isSame(moment__WEBPACK_IMPORTED_MODULE_4__(), 'd') ? 'Today' : day.format('ddd, Do MMMM');
                        this.updateList();
                    }
                };
                VisitorListingsComponent.prototype.view = function (item) {
                    this.service.Visitors.view(item);
                };
                VisitorListingsComponent.prototype.changeDate = function () {
                    this.dateChange.emit(this.date);
                    this.model.show_calendar = false;
                };
                VisitorListingsComponent.prototype.updateList = function () {
                    var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.date || '').format('YYYY/MM/DD');
                    var v_list = this.model.visitor_list;
                    var visitors = v_list ? v_list[date] || [] : [];
                    var last_update = this.service.Visitors.get('last_update') || 0;
                    var expiry = moment__WEBPACK_IMPORTED_MODULE_4__().add(-5, 'm');
                    this.model.list = visitors;
                    this.model.list.sort(function (a, b) { return a.date - b.date; });
                    if (!this.model.list || this.model.list.length <= 0 || last_update < expiry.valueOf()) {
                        var start = moment__WEBPACK_IMPORTED_MODULE_4__(this.date || '').hours(0).minutes(0).unix();
                        var end = moment__WEBPACK_IMPORTED_MODULE_4__(this.date || '').hours(23).minutes(59).unix();
                        // this.service.Bookings.query({ from: start, to: end });
                    }
                    this.postCount();
                };
                VisitorListingsComponent.prototype.postCount = function () {
                    var _this = this;
                    setTimeout(function () {
                        _this.count = _this.model.list ? _this.model.list.length : 0;
                        _this.countChange.emit(_this.count);
                    }, 50);
                };
                VisitorListingsComponent.prototype.newVisitor = function () {
                    this.service.Visitors.new(function (e) {
                    });
                };
                VisitorListingsComponent.prototype.groupId = function (index, item) {
                    return item ? item.id : index;
                };
                return VisitorListingsComponent;
            }(_shared_globals_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));
            /***/ 
        })
    }]);
//# sourceMappingURL=shell-schedule-schedule-module-ngfactory-es2015.js.map
//# sourceMappingURL=shell-schedule-schedule-module-ngfactory-es5.js.map
//# sourceMappingURL=shell-schedule-schedule-module-ngfactory-es5.js.map