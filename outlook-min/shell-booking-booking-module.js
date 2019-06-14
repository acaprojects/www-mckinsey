(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-booking-booking-module"],{

/***/ "./src/app/shell/booking/booking.component.ts":
/*!****************************************************!*\
  !*** ./src/app/shell/booking/booking.component.ts ***!
  \****************************************************/
/*! exports provided: BookingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingComponent", function() { return BookingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookingComponent = /** @class */ (function (_super) {
    __extends(BookingComponent, _super);
    function BookingComponent(service, route, router) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        _this.router = router;
        _this.model = {};
        return _this;
    }
    BookingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.obs.route = this.route.paramMap.subscribe(function (params) {
            _this.model.flow = '';
            if (params.has('flow')) {
                _this.model.flow = params.get('flow');
            }
        });
        this.subs.obs.route = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && e.url.indexOf('book') < 0) {
                _this.clearForm();
            }
        });
        this.service.set('BANNER.block_height', 0);
    };
    BookingComponent.prototype.clearForm = function () {
        var _this = this;
        ['visitor', 'space', 'phone-booth', 'desks'].forEach(function (n) {
            return ['filters', 'space', 'attendees', 'breadcrumbs'].forEach(function (i) { return _this.clear(n, i); });
        });
    };
    BookingComponent.prototype.clear = function (flow, name) {
        if (localStorage) {
            localStorage.removeItem("STAFF." + flow + "." + name);
        }
    };
    BookingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-booking',
            template: __webpack_require__(/*! ./booking.template.html */ "./src/app/shell/booking/booking.template.html"),
            styles: [__webpack_require__(/*! ./booking.styles.scss */ "./src/app/shell/booking/booking.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BookingComponent);
    return BookingComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/booking.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shell/booking/booking.module.ts ***!
  \*************************************************/
/*! exports provided: AppBookingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBookingModule", function() { return AppBookingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acaprojects/ngx-widgets */ "./node_modules/@acaprojects/ngx-widgets/esm5/acaprojects-ngx-widgets.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _booking_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking.routes */ "./src/app/shell/booking/booking.routes.ts");
/* harmony import */ var _booking_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./booking.component */ "./src/app/shell/booking/booking.component.ts");
/* harmony import */ var _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/shared.module */ "./src/app/shared/components/shared.module.ts");
/* harmony import */ var _select_flow_select_flow_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./select-flow/select-flow.component */ "./src/app/shell/booking/select-flow/select-flow.component.ts");
/* harmony import */ var _space_flow__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./space-flow */ "./src/app/shell/booking/space-flow/index.ts");
/* harmony import */ var _phone_booth_flow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./phone-booth-flow */ "./src/app/shell/booking/phone-booth-flow/index.ts");
/* harmony import */ var _visitor_flow__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./visitor-flow */ "./src/app/shell/booking/visitor-flow/index.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/shell/booking/feedback/feedback.component.ts");
/* harmony import */ var _desk_flow__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./desk-flow */ "./src/app/shell/booking/desk-flow/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var COMPONENTS = [
    _booking_component__WEBPACK_IMPORTED_MODULE_7__["BookingComponent"],
    _select_flow_select_flow_component__WEBPACK_IMPORTED_MODULE_9__["SelectBookingFlowComponent"],
    _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_13__["BookingFlowFeedbackComponent"]
].concat(_space_flow__WEBPACK_IMPORTED_MODULE_10__["SPACE_FLOW_COMPONENTS"], _phone_booth_flow__WEBPACK_IMPORTED_MODULE_11__["PHONE_BOOTH_FLOW_COMPONENTS"], _visitor_flow__WEBPACK_IMPORTED_MODULE_12__["VISITOR_FLOW_COMPONENTS"], _desk_flow__WEBPACK_IMPORTED_MODULE_14__["DESK_FLOW_COMPONENT"]);
var AppBookingModule = /** @class */ (function () {
    function AppBookingModule() {
    }
    AppBookingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: COMPONENTS.slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["WidgetsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_booking_routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]),
                _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]
            ],
            exports: COMPONENTS.slice()
        })
    ], AppBookingModule);
    return AppBookingModule;
}());



/***/ }),

/***/ "./src/app/shell/booking/booking.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/shell/booking/booking.routes.ts ***!
  \*************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _booking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking.component */ "./src/app/shell/booking/booking.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/shell/booking/feedback/feedback.component.ts");


var ROUTES = [
    { path: '', component: _booking_component__WEBPACK_IMPORTED_MODULE_0__["BookingComponent"] },
    { path: 'feedback', component: _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_1__["BookingFlowFeedbackComponent"] },
    { path: ':page', component: _booking_component__WEBPACK_IMPORTED_MODULE_0__["BookingComponent"] },
    { path: ':flow/:page', component: _booking_component__WEBPACK_IMPORTED_MODULE_0__["BookingComponent"] },
    { path: '**', redirectTo: '' }
];


/***/ }),

/***/ "./src/app/shell/booking/booking.styles.scss":
/*!***************************************************!*\
  !*** ./src/app/shell/booking/booking.styles.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2Jvb2tpbmcvYm9va2luZy5zdHlsZXMuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/shell/booking/booking.template.html":
/*!*****************************************************!*\
  !*** ./src/app/shell/booking/booking.template.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <select-booking-flow *ngIf=\"!model.flow\"></select-booking-flow>\n    <space-booking-flow *ngIf=\"model.flow === 'space' || model.flow === 'main'\"></space-booking-flow>\n    <phone-booth-booking-flow *ngIf=\"model.flow === 'phone-booth'\"></phone-booth-booking-flow>\n    <visitor-booking-flow *ngIf=\"model.flow === 'visitor'\"></visitor-booking-flow>\n    <desk-booking-flow *ngIf=\"model.flow === 'desk'\"></desk-booking-flow>\n</div>"

/***/ }),

/***/ "./src/app/shell/booking/desk-flow/desk-flow.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shell/booking/desk-flow/desk-flow.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"topbar\">\n        <div class=\"icon back\" (touchrelease)=\"back()\">\n            <i class=\"material-icons\">arrow_back</i>\n        </div>\n        <div class=\"text to-upper\" [ngSwitch]=\"model.page\">\n            <ng-container *ngSwitchCase=\"'search'\">Desk search</ng-container>\n            <ng-container *ngSwitchDefault>Desks</ng-container>\n        </div>\n    </div>\n    <div class=\"flow-step\" [ngSwitch]=\"model.page\">\n        <ng-container *ngSwitchCase=\"'search'\">\n            <desk-flow-search [(filters)]=\"model.filters\" (filtersChange)=\"store('filters')\"></desk-flow-search>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'results'\">\n            <desk-flow-result></desk-flow-result>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'result'\">\n            <desk-flow-result></desk-flow-result>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'map'\">\n            <space-flow-view-space (level)=\"model.level = $event\" (back)=\"back()\"></space-flow-view-space>\n        </ng-container>\n        <ng-container *ngSwitchDefault>\n            <desk-flow-options [(filters)]=\"model.filters\" (filtersChange)=\"store('filters')\"></desk-flow-options>\n        </ng-container>\n    </div>\n    <div class=\"loader\" *ngIf=\"model.loading\">\n        <div class=\"no-item\">\n            <div class=\"icon\">\n                <spinner type=\"circle-ring\" color=\"#000\"></spinner>\n            </div>\n            <div class=\"text\">{{model.loading === true ? 'Waiting...' : model.loading}}</div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/desk-flow/desk-flow.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shell/booking/desk-flow/desk-flow.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.container > * {\n    width: 100%; }\n.topbar {\n  width: 100%;\n  min-height: 3em;\n  background-color: #B8123E;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n.topbar > * {\n    font-size: 1.2em; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .25em; }\n.icon img {\n    height: 1em; }\n.flow-step {\n  -webkit-box-flex: 1;\n          flex: 1;\n  overflow: auto; }\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.87);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 999; }\n.loader .text {\n    color: rgba(0, 0, 0, 0.87); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9kZXNrLWZsb3cvZGVzay1mbG93LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2JlbmhvYWQvUHJvamVjdHMvbWNrLW91dGxvb2stYWRkaW4vc3JjL2FwcC9zaGVsbC9ib29raW5nL2Rlc2stZmxvdy9kZXNrLWZsb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2lDQ0VpQztBRCtCakM7O3VCQzVCdUI7QUR5Q3ZCOztzQkN0Q3NCO0FDTnRCO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBO0FBUDFCO0lBU1EsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTtBQU52QjtJQVFRLGdCQUFnQixFQUFBO0FBSXhCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYSxFQUFBO0FBTmpCO0lBUVEsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksbUJBQU87VUFBUCxPQUFPO0VBQ1AsY0FBYyxFQUFBO0FBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCwyQ0FBMkI7RUFDM0Isb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTtBQVZoQjtJQWFRLDBCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvYm9va2luZy9kZXNrLWZsb3cvZGVzay1mbG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogI2M3OTk2MTtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE0cHg7XG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJG1haW4tZm9udDogJGZvbnQtc3RhY2s7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIC5jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTsgfVxuXG4udG9wYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I4MTIzRTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLnRvcGJhciA+ICoge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07IH1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjI1ZW07XG4gIHdpZHRoOiAxLjI1ZW07XG4gIG1hcmdpbjogLjI1ZW07IH1cbiAgLmljb24gaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTsgfVxuXG4uZmxvdy1zdGVwIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5OyB9XG4gIC5sb2FkZXIgLnRleHQge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4iLCJAaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgJiA+ICoge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi50b3BiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjgxMjNFO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAmID4gKiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS4yNWVtO1xuICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgbWFyZ2luOiAuMjVlbTtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICB9XG59XG5cbi5mbG93LXN0ZXAge1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5sb2FkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZmZmLCAuODcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA5OTk7XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC44Nyk7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shell/booking/desk-flow/desk-flow.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shell/booking/desk-flow/desk-flow.component.ts ***!
  \****************************************************************/
/*! exports provided: DeskFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskFlowComponent", function() { return DeskFlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeskFlowComponent = /** @class */ (function (_super) {
    __extends(DeskFlowComponent, _super);
    function DeskFlowComponent(service, route, router) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        _this.router = router;
        _this.model = {};
        _this.model.breadcrumbs = [];
        return _this;
    }
    DeskFlowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.flow = 'desks';
        this.load('breadcrumbs');
        this.subs.obs.params = this.route.paramMap.subscribe(function (params) {
            if (_this.model.page && !_this.model.ignore) {
                _this.model.breadcrumbs.push(_this.model.page);
                _this.store('breadcrumbs');
            }
            _this.model.ignore = false;
            _this.model.page = '';
            if (params.has('page')) {
                _this.model.page = params.get('page');
            }
            if (!_this.model.page) {
                _this.clearForm();
            }
        });
        this.subs.obs.route = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && e.url.indexOf('book/desk') < 0) {
                _this.clearForm();
            }
        });
        this.load('attendees');
    };
    DeskFlowComponent.prototype.store = function (name) {
        if (localStorage) {
            var d = this.model[name];
            var value = typeof d === 'object' ? JSON.stringify(d) : d;
            localStorage.setItem("STAFF." + this.model.flow + "." + name, value);
        }
    };
    DeskFlowComponent.prototype.load = function (name) {
        if (localStorage) {
            var item = localStorage.getItem("STAFF." + this.model.flow + "." + name);
            if (item) {
                try {
                    this.model[name] = JSON.parse(item);
                }
                catch (e) {
                    this.model[name] = item;
                }
            }
        }
    };
    DeskFlowComponent.prototype.clear = function (name) {
        if (localStorage) {
            localStorage.removeItem("STAFF." + this.model.flow + "." + name);
        }
    };
    DeskFlowComponent.prototype.storeFilters = function () { this.store('filters'); };
    DeskFlowComponent.prototype.loadFilters = function () { this.load('filters'); };
    DeskFlowComponent.prototype.storeSpace = function () { this.store('space'); };
    DeskFlowComponent.prototype.loadSpace = function () { this.load('space'); };
    DeskFlowComponent.prototype.clearForm = function () {
        var _this = this;
        ['filters', 'space', 'breadcrumbs'].forEach(function (i) { return _this.clear(i); });
    };
    Object.defineProperty(DeskFlowComponent.prototype, "loading", {
        set: function (value) {
            var _this = this;
            this.timeout('loading', function () { return _this.model.loading = value; }, 10);
        },
        enumerable: true,
        configurable: true
    });
    DeskFlowComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'desk', name], query);
    };
    DeskFlowComponent.prototype.back = function () {
        var previous = this.model.breadcrumbs.pop();
        if (previous) {
            this.to(previous);
            this.model.ignore = true;
            this.store('breadcrumbs');
        }
        else {
            this.service.navigate(['book']);
        }
    };
    DeskFlowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'desk-booking-flow',
            template: __webpack_require__(/*! ./desk-flow.component.html */ "./src/app/shell/booking/desk-flow/desk-flow.component.html"),
            styles: [__webpack_require__(/*! ./desk-flow.component.scss */ "./src/app/shell/booking/desk-flow/desk-flow.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], DeskFlowComponent);
    return DeskFlowComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/desk-flow/index.ts":
/*!**************************************************!*\
  !*** ./src/app/shell/booking/desk-flow/index.ts ***!
  \**************************************************/
/*! exports provided: DESK_FLOW_COMPONENT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DESK_FLOW_COMPONENT", function() { return DESK_FLOW_COMPONENT; });
/* harmony import */ var _desk_flow_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./desk-flow.component */ "./src/app/shell/booking/desk-flow/desk-flow.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./result/result.component */ "./src/app/shell/booking/desk-flow/result/result.component.ts");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./options/options.component */ "./src/app/shell/booking/desk-flow/options/options.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/shell/booking/desk-flow/search/search.component.ts");




var DESK_FLOW_COMPONENT = [
    _desk_flow_component__WEBPACK_IMPORTED_MODULE_0__["DeskFlowComponent"],
    _result_result_component__WEBPACK_IMPORTED_MODULE_1__["DeskFlowResultComponent"],
    _options_options_component__WEBPACK_IMPORTED_MODULE_2__["DeskFlowOptionsComponent"],
    _search_search_component__WEBPACK_IMPORTED_MODULE_3__["DeskFlowSearchComponent"]
];


/***/ }),

/***/ "./src/app/shell/booking/desk-flow/options/options.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shell/booking/desk-flow/options/options.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block search\">\n    <div class=\"content\">\n        <div class=\"header to-upper\">Search desks</div>\n        <div class=\"form\">\n            <div class=\"field\">\n                <label for=\"level\">Level</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"level\" [list]=\"model.levels\" [(model)]=\"model.level_index\" (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"date\">Start Date</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"date\" [list]=\"model.dates\" [(model)]=\"model.date_index\" (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"date\">End Date</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"date\" [list]=\"model.end_dates\" [(model)]=\"model.duration_index\" (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <hr />\n            <div class=\"options\">\n                <btn (tapped)=\"to('search')\">Search</btn>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/desk-flow/options/options.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shell/booking/desk-flow/options/options.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .25em; }\n.icon img {\n    height: 1em; }\n.header {\n  font-size: 1.2em;\n  margin-bottom: .5em; }\n.block {\n  width: 100%;\n  padding: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.content {\n  max-width: 768px;\n  width: 100%; }\n.item {\n  margin: .5em; }\n.item > * {\n    font-size: 1.2em; }\n.value {\n  margin: .5em 0; }\n.form {\n  padding: 0 1em;\n  font-size: 1.1em; }\n.form .options {\n    display: -webkit-box;\n    display: flex; }\n.form btn {\n    -webkit-box-flex: 1;\n            flex: 1;\n    margin: .25em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9kZXNrLWZsb3cvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2JlbmhvYWQvUHJvamVjdHMvbWNrLW91dGxvb2stYWRkaW4vc3JjL2FwcC9zaGVsbC9ib29raW5nL2Rlc2stZmxvdy9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2lDQ0VpQztBRCtCakM7O3VCQzVCdUI7QUR5Q3ZCOztzQkN0Q3NCO0FDTHRCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYSxFQUFBO0FBTmpCO0lBUVEsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtBQUczQjtFQUNJLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7QUFHZjtFQUNJLFlBQVksRUFBQTtBQURoQjtJQUdRLGdCQUFnQixFQUFBO0FBSXhCO0VBQ0ksY0FBYyxFQUFBO0FBR2xCO0VBQ0ksY0FBYztFQUNkLGdCQUFnQixFQUFBO0FBRnBCO0lBS1Esb0JBQWE7SUFBYixhQUFhLEVBQUE7QUFMckI7SUFTUSxtQkFBTztZQUFQLE9BQU87SUFDUCxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9ib29raW5nL2Rlc2stZmxvdy9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3M6ICMzMDliNDA7XG4kc3VjY2Vzcy1hbHQ6ICM0Mjg1ZjQ7XG4kZXJyb3I6ICNkYjI5MWQ7XG4kcGVuZGluZzogI0ZGOTgwMDtcbiRuZXV0cmFsOiAjNzk3OTc5O1xuXG4kYmFja2dyb3VuZDogI2VjZjFmNTtcblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcbiRjb2xvci1wcmltYXJ5LXdpcmVmcmFtZTpyZ2JhKDAsIDAsIDAsIDAuNjEpO1xuJGhlYWRlci1iZzogI2ZmZjtcbiRoZWFkZXItY29sb3I6IHJnYmEoIzAwMjk2MCwgLjg3KTtcblxuJHRpbGUtY29sb3I6ICNmZmY7XG4kdGlsZS1ib3JkZXI6ICNmZmY7XG5cbiRoZWxwLWJvcmRlcjogcmdiYSgjMDAwLCAuMik7XG5cbiRjb2xvci1wcmltYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeTogIzQwNDg1YTtcbiRjb2xvci10ZXJuYXJ5OiAjYzc5OTYxO1xuJGNvbG9yLXF1YXRlcm5hcnk6ICM3ZGQ2ZDY7XG4kY29sb3ItcXVpbnRlcm5hcnk6ICM0YzVjNmM7XG4kY29sb3Itc2V4dGVybmFyeTogIzdmZTQzYjtcblxuJHRpbWVsaW5lLWJnOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzRGNUY3MCAwJSwgIzBGMTIxNSAxMDAlKTtcbiR0aW1lbGluZS1ldmVudDogJGVycm9yO1xuJHRpbWVsaW5lLWJvb2tpbmc6ICRjb2xvci1xdWF0ZXJuYXJ5O1xuXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTRweDtcblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kbWFpbi1mb250OiAkZm9udC1zdGFjaztcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEuMjVlbTtcbiAgd2lkdGg6IDEuMjVlbTtcbiAgbWFyZ2luOiAuMjVlbTsgfVxuICAuaWNvbiBpbWcge1xuICAgIGhlaWdodDogMWVtOyB9XG5cbi5oZWFkZXIge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAuNWVtOyB9XG5cbi5ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA3NjhweDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLml0ZW0ge1xuICBtYXJnaW46IC41ZW07IH1cbiAgLml0ZW0gPiAqIHtcbiAgICBmb250LXNpemU6IDEuMmVtOyB9XG5cbi52YWx1ZSB7XG4gIG1hcmdpbjogLjVlbSAwOyB9XG5cbi5mb3JtIHtcbiAgcGFkZGluZzogMCAxZW07XG4gIGZvbnQtc2l6ZTogMS4xZW07IH1cbiAgLmZvcm0gLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgLmZvcm0gYnRuIHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbjogLjI1ZW07IH1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgd2lkdGg6IDEuMjVlbTtcbiAgICBtYXJnaW46IC4yNWVtO1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgIH1cbn1cblxuLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xufVxuXG4uYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaXRlbSB7XG4gICAgbWFyZ2luOiAuNWVtO1xuICAgICYgPiAqIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG59XG5cbi52YWx1ZSB7XG4gICAgbWFyZ2luOiAuNWVtIDA7XG59XG5cbi5mb3JtIHtcbiAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuXG4gICAgLm9wdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIGJ0biB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1hcmdpbjogLjI1ZW07XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shell/booking/desk-flow/options/options.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shell/booking/desk-flow/options/options.component.ts ***!
  \**********************************************************************/
/*! exports provided: DeskFlowOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskFlowOptionsComponent", function() { return DeskFlowOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DeskFlowOptionsComponent = /** @class */ (function (_super) {
    __extends(DeskFlowOptionsComponent, _super);
    function DeskFlowOptionsComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.filtersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {
            date_index: 0,
            duration_index: 0,
            level_index: 0
        };
        return _this;
    }
    DeskFlowOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.filters) {
            this.filters = {
                date: moment__WEBPACK_IMPORTED_MODULE_3__().valueOf(),
                duration: 30
            };
        }
        this.subs.obs.building = this.service.Buildings.listen(function (bld) {
            if (bld) {
                _this.model.levels = [{ id: null, name: 'Any' }].concat(bld.levels);
                var exists = _this.model.levels.find(function (i) { return _this.filters.level && i.id === _this.filters.level; });
                if (exists) {
                    _this.model.level_index = _this.model.levels.indexOf(exists);
                    if (_this.model.level_index < 0) {
                        _this.model.level_index = 0;
                    }
                }
                _this.updateForm();
            }
        });
        this.loadDates();
        this.loadEndDates();
        this.updateForm();
    };
    DeskFlowOptionsComponent.prototype.updateForm = function () {
        var _this = this;
        this.timeout('update', function () {
            // Prevent pre-initialisation errors
            if (!_this.model.dates) {
                _this.model.dates = [{ id: moment__WEBPACK_IMPORTED_MODULE_3__().seconds(0).milliseconds(0).valueOf() }];
            }
            if (!_this.model.end_dates) {
                _this.model.end_dates = [{ id: moment__WEBPACK_IMPORTED_MODULE_3__().format('HH:mm') }];
            }
            // Update filter fields
            var date = moment__WEBPACK_IMPORTED_MODULE_3__(_this.model.dates[_this.model.date_index].id);
            _this.filters = {
                date: date.valueOf(),
                duration: _this.model.end_dates[_this.model.duration_index].id
            };
            _this.filtersChange.emit(_this.filters);
            _this.loadEndDates();
        }, 100);
    };
    DeskFlowOptionsComponent.prototype.loadDates = function () {
        this.model.dates = [];
        var date = moment__WEBPACK_IMPORTED_MODULE_3__().startOf('day');
        var end = moment__WEBPACK_IMPORTED_MODULE_3__(date).add(2, 'M');
        var offset = 0;
        for (; date.isBefore(end); date.add(1, 'd')) {
            this.model.dates.push({
                id: date.valueOf(),
                name: date.format('ddd MMMM DD, YYYY'),
                offset: offset
            });
            offset++;
        }
    };
    DeskFlowOptionsComponent.prototype.loadEndDates = function () {
        this.model.end_dates = [];
        var date = moment__WEBPACK_IMPORTED_MODULE_3__(this.filters.date).endOf('day');
        var end = moment__WEBPACK_IMPORTED_MODULE_3__(date).add(14, 'd');
        var offset = 0;
        for (; date.isBefore(end); date.add(1, 'd')) {
            var id = Math.round(moment__WEBPACK_IMPORTED_MODULE_3__["duration"](date.diff(this.filters.date)).asMinutes());
            if (id === this.filters.duration) {
                this.model.duration_index = this.model.end_dates.length;
            }
            this.model.end_dates.push({
                id: id,
                name: date.format('ddd MMMM DD, YYYY'),
                offset: offset
            });
            offset++;
        }
    };
    DeskFlowOptionsComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'desk', name], query);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeskFlowOptionsComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DeskFlowOptionsComponent.prototype, "filtersChange", void 0);
    DeskFlowOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'desk-flow-options',
            template: __webpack_require__(/*! ./options.component.html */ "./src/app/shell/booking/desk-flow/options/options.component.html"),
            styles: [__webpack_require__(/*! ./options.component.scss */ "./src/app/shell/booking/desk-flow/options/options.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], DeskFlowOptionsComponent);
    return DeskFlowOptionsComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/desk-flow/result/result.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shell/booking/desk-flow/result/result.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"circle\"></div>\n    <div class=\"content\">\n        <div class=\"icon top\">\n            <img src=\"assets/img/book_desk.svg\">\n        </div>\n        <div class=\"title\">Booking created</div>\n        <div class=\"info\">Are you happy with your experience?</div>\n        <div class=\"options\">\n            <div class=\"option icon\" (touchrelease)=\"toHome()\">\n                <i class=\"material-icons\">done</i>\n            </div>\n            <div class=\"option icon\" (touchrelease)=\"toFeedback()\">\n                <i class=\"material-icons\">close</i>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/desk-flow/result/result.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shell/booking/desk-flow/result/result.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #D4EDF1;\n  overflow: auto;\n  padding: 2em; }\n.circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 120vmin;\n  width: 120vmin;\n  border-radius: 100%;\n  background-color: rgba(255, 255, 255, 0.54);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  pointer-events: none; }\n.content {\n  position: relative;\n  max-width: 768px;\n  width: 100%;\n  background-color: #fff;\n  padding: 1em;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  font-size: 1.2em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 1; }\n.info {\n  margin-bottom: .5em;\n  font-size: 1.2em; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .05em; }\n.icon img {\n    height: 1em;\n    width: 1em;\n    border-radius: 100%;\n    border: 4px solid #309b40; }\n.top {\n  font-size: 6em; }\n.title {\n  font-size: 2em;\n  margin: .25em 0;\n  text-transform: uppercase; }\n.options {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: .5em 0; }\n.option {\n  height: 1.5em;\n  width: 1.5em;\n  font-size: 2em;\n  background-color: #F1F9FF;\n  border-radius: 100%;\n  margin: .2em .25em;\n  color: #6a4b25; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9kZXNrLWZsb3cvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hlbGwvYm9va2luZy9kZXNrLWZsb3cvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7aUNDRWlDO0FEK0JqQzs7dUJDNUJ1QjtBRHlDdkI7O3NCQ3RDc0I7QUNMdEI7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVksRUFBQTtBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDJDQUEyQjtFQUMzQix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLG9CQUFvQixFQUFBO0FBR3hCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUhBQTJGO1VBQTNGLCtHQUEyRjtFQUMzRixnQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFVBQVUsRUFBQTtBQUdkO0VBQ0ksbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYSxFQUFBO0FBTmpCO0lBUVEsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIseUJGekRTLEVBQUE7QUU2RGpCO0VBQ0ksY0FBYyxFQUFBO0FBR2xCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixjQUFjLEVBQUE7QUFHbEI7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFpQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvYm9va2luZy9kZXNrLWZsb3cvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2VzczogIzMwOWI0MDtcbiRzdWNjZXNzLWFsdDogIzQyODVmNDtcbiRlcnJvcjogI2RiMjkxZDtcbiRwZW5kaW5nOiAjRkY5ODAwO1xuJG5ldXRyYWw6ICM3OTc5Nzk7XG5cbiRiYWNrZ3JvdW5kOiAjZWNmMWY1O1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuJGNvbG9yLXByaW1hcnktd2lyZWZyYW1lOnJnYmEoMCwgMCwgMCwgMC42MSk7XG4kaGVhZGVyLWJnOiAjZmZmO1xuJGhlYWRlci1jb2xvcjogcmdiYSgjMDAyOTYwLCAuODcpO1xuXG4kdGlsZS1jb2xvcjogI2ZmZjtcbiR0aWxlLWJvcmRlcjogI2ZmZjtcblxuJGhlbHAtYm9yZGVyOiByZ2JhKCMwMDAsIC4yKTtcblxuJGNvbG9yLXByaW1hcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5OiAjNDA0ODVhO1xuJGNvbG9yLXRlcm5hcnk6ICNjNzk5NjE7XG4kY29sb3ItcXVhdGVybmFyeTogIzdkZDZkNjtcbiRjb2xvci1xdWludGVybmFyeTogIzRjNWM2YztcbiRjb2xvci1zZXh0ZXJuYXJ5OiAjN2ZlNDNiO1xuXG4kdGltZWxpbmUtYmc6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNEY1RjcwIDAlLCAjMEYxMjE1IDEwMCUpO1xuJHRpbWVsaW5lLWV2ZW50OiAkZXJyb3I7XG4kdGltZWxpbmUtYm9va2luZzogJGNvbG9yLXF1YXRlcm5hcnk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNHB4O1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRtYWluLWZvbnQ6ICRmb250LXN0YWNrO1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENEVERjE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAyZW07IH1cblxuLmNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgaGVpZ2h0OiAxMjB2bWluO1xuICB3aWR0aDogMTIwdm1pbjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDc2OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDE7IH1cblxuLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICBmb250LXNpemU6IDEuMmVtOyB9XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMS4yNWVtO1xuICB3aWR0aDogMS4yNWVtO1xuICBtYXJnaW46IC4wNWVtOyB9XG4gIC5pY29uIGltZyB7XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICMzMDliNDA7IH1cblxuLnRvcCB7XG4gIGZvbnQtc2l6ZTogNmVtOyB9XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IC4yNWVtIDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAuNWVtIDA7IH1cblxuLm9wdGlvbiB7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUY5RkY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbjogLjJlbSAuMjVlbTtcbiAgY29sb3I6ICM2YTRiMjU7IH1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNENEVERjE7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogMmVtO1xufVxuXG4uY2lyY2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGhlaWdodDogMTIwdm1pbjtcbiAgICB3aWR0aDogMTIwdm1pbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjU0KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLC4xMik7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uaW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS4yNWVtO1xuICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgbWFyZ2luOiAuMDVlbTtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgJHN1Y2Nlc3M7XG4gICAgfVxufVxuXG4udG9wIHtcbiAgICBmb250LXNpemU6IDZlbTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW46IC4yNWVtIDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IC41ZW0gMDtcbn1cblxuLm9wdGlvbiB7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjlGRjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbjogLjJlbSAuMjVlbTtcbiAgICBjb2xvcjogZGFya2VuKCRjb2xvci10ZXJuYXJ5LCAzMCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shell/booking/desk-flow/result/result.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shell/booking/desk-flow/result/result.component.ts ***!
  \********************************************************************/
/*! exports provided: DeskFlowResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskFlowResultComponent", function() { return DeskFlowResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DeskFlowResultComponent = /** @class */ (function (_super) {
    __extends(DeskFlowResultComponent, _super);
    function DeskFlowResultComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    DeskFlowResultComponent.prototype.ngOnInit = function () {
        this.clearForm();
    };
    DeskFlowResultComponent.prototype.clear = function (name) {
        if (localStorage) {
            localStorage.removeItem("STAFF.desk." + name);
        }
    };
    DeskFlowResultComponent.prototype.clearForm = function () {
        this.clear('filters');
        this.clear('space');
        this.clear('attendees');
    };
    DeskFlowResultComponent.prototype.toHome = function () { this.service.navigate('home'); };
    DeskFlowResultComponent.prototype.toFeedback = function () { this.service.navigate(['book', 'feedback']); };
    DeskFlowResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'desk-flow-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/shell/booking/desk-flow/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/shell/booking/desk-flow/result/result.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], DeskFlowResultComponent);
    return DeskFlowResultComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/desk-flow/search/search.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shell/booking/desk-flow/search/search.component.ts ***!
  \********************************************************************/
/*! exports provided: DeskFlowSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeskFlowSearchComponent", function() { return DeskFlowSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utility.class */ "./src/app/shared/utility.class.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DeskFlowSearchComponent = /** @class */ (function (_super) {
    __extends(DeskFlowSearchComponent, _super);
    function DeskFlowSearchComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.desk = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.filtersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {};
        return _this;
    }
    DeskFlowSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.obs.rooms = this.service.Rooms.listen('list', function (rooms) { return _this.search(); });
        if (!this.filters) {
            this.filters = {};
        }
    };
    DeskFlowSearchComponent.prototype.ngOnChanges = function (changes) {
        if (changes.filters) {
            if (!this.filters) {
                this.filters = {};
            }
            var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
            this.model.start_date = date.format('DD/MM/YYYY');
            this.model.end_date = date.add(this.filters.duration - 1, 'm').format('DD/MM/YYYY');
            this.search();
            this.updateFilterList();
        }
    };
    DeskFlowSearchComponent.prototype.search = function () {
        var _this = this;
        if (!this.service.Buildings.current()) {
            setTimeout(function () { return _this.search(); }, 300);
        }
        this.updateDate();
        this.loading.emit('Searching...');
        if (!this.filters) {
            this.filters = {};
        }
        this.service.Rooms.available({
            date: this.filters.date,
            duration: this.filters.duration
        }).then(function (list) {
            _this.loading.emit(false);
            _this.model.rooms = _this.service.Rooms.list();
            _this.model.items = list;
            _this.model.search_results = list;
            for (var _i = 0, _a = _this.model.items; _i < _a.length; _i++) {
                var rm = _a[_i];
                rm.in_use_at_time = true;
                for (var _b = 0, _c = _this.model.search_results; _b < _c.length; _b++) {
                    var i = _c[_b];
                    if (rm.id === i.id) {
                        rm.in_use_at_time = false;
                        break;
                    }
                }
            }
            _this.filter();
        }, function (err) { return _this.loading.emit(false); });
    };
    DeskFlowSearchComponent.prototype.filter = function () {
        this.loading.emit('Filtering...');
        this.model.filtered_items = [];
        if (this.filters) {
            // Set level
            var level = this.service.Buildings.getLevel(this.filters.level);
            // Set Capacity
            var capacity = this.filters.capacity || -1;
            if (this.model.items) {
                var item_list = this.model.search_results;
                for (var _i = 0, item_list_1 = item_list; _i < item_list_1.length; _i++) {
                    var rm = item_list_1[_i];
                    rm.in_use_at_time = true;
                    for (var _a = 0, _b = this.model.search_results; _a < _b.length; _a++) {
                        var i = _b[_a];
                        if (rm.id === i.id) {
                            rm.in_use_at_time = false;
                            break;
                        }
                    }
                }
                for (var _c = 0, item_list_2 = item_list; _c < item_list_2.length; _c++) {
                    var item = item_list_2[_c];
                    var match = true;
                    // Check levels
                    match = match && (!level || (level.id === -1 || item.level.id === level.id));
                    // Check client floor when external users present
                    match = match && (!this.model.has_external || !this.model.external_floors || this.model.external_floors.length <= 0 || (this.model.external_floors.indexOf(item.level.type.toLowerCase()) >= 0));
                    // Check level type
                    match = match && (!this.model.floor || (item.level.type.toLowerCase() === this.model.floor.toLowerCase()));
                    // Check capacity
                    match = match && (capacity <= 0 || item.capacity >= capacity);
                    var count = 0;
                    var found = 0;
                    for (var _d = 0, _e = (this.filters.extras || []); _d < _e.length; _d++) {
                        var e = _e[_d];
                        if (e.filter) {
                            count++;
                        }
                        for (var _f = 0, _g = item.extras; _f < _g.length; _f++) {
                            var r_e = _g[_f];
                            if (r_e.id === e.id && e.filter) {
                                found++;
                            }
                        }
                    }
                    match = match && (found >= count);
                    if (match) {
                        this.model.filtered_items.push(item);
                    }
                }
            }
        }
        else {
            this.model.filtered_items = this.model.filtered_items.concat(this.model.items || []);
        }
        this.model.filtered_items.sort(function (a, b) {
            var da = {
                lvl: (a.level ? a.level.name : '') || '',
                name: a.name
            };
            var db = {
                lvl: (a.level ? b.level.name : b.name) || '',
                name: b.name
            };
            return a.order - b.order || da.lvl.localeCompare(db.lvl) || da.name.localeCompare(db.name);
        });
        if (!this.model.searching) {
            this.loading.emit(false);
        }
    };
    DeskFlowSearchComponent.prototype.updateDate = function () {
        this.model.date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date).format('dddd D/MM/YYYY');
    };
    DeskFlowSearchComponent.prototype.changeDate = function (offset) {
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
        date.add(offset, 'd');
        var now = moment__WEBPACK_IMPORTED_MODULE_4__();
        while (date.isBefore(now, 'm')) {
            date.add(1, 'd');
        }
        this.filters.date = date.valueOf();
        this.post();
        this.search();
    };
    DeskFlowSearchComponent.prototype.post = function () {
        var _this = this;
        this.timeout('post', function () {
            _this.updateFilterList();
            _this.filtersChange.emit(_this.filters);
        });
    };
    DeskFlowSearchComponent.prototype.updateFilterList = function () {
        this.model.filter_list = [];
        var level = this.service.Buildings.getLevel(this.filters.level);
        this.model.filter_list.push({
            id: 'level',
            type: level && level.name ? level.id : -1,
            value: level ? level.name || 'Any Level' : 'Any Level'
        });
        var cap = this.filters.capacity;
        this.model.filter_list.push({
            id: 'capacity',
            type: cap && cap > 0 ? 1 : -1,
            value: cap && cap > 0 ? cap + " " + (cap === 1 ? 'person' : 'people') : 'Any capacity'
        });
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
        this.model.filter_list.push({
            id: 'date',
            type: date.isValid() && date.isSameOrAfter(moment__WEBPACK_IMPORTED_MODULE_4__(), 'm') ? 1 : -1,
            value: date.format('hh:mm A')
        });
        this.model.filter_list.push({
            id: 'duration',
            type: this.filters.duration && this.filters.duration > 30 ? 1 : -1,
            value: _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__["Utils"].humaniseDuration(this.filters.duration || 30, true)
        });
        for (var _i = 0, _a = (this.filters.extras || []); _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.filter) {
                this.model.filter_list.push({
                    id: 'extras',
                    type: item.id,
                    value: item.name
                });
            }
        }
    };
    DeskFlowSearchComponent.prototype.clearFilter = function (filter) {
        var change = false;
        if (filter.type !== -1) {
            if (filter.id === 'extras') {
                for (var _i = 0, _a = (this.filters.extras || []); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.filter && item.id === filter.type) {
                        item.filter = false;
                        change = true;
                    }
                }
            }
            else {
                switch (filter.id) {
                    case 'level':
                        this.filters.level = null;
                        change = true;
                        break;
                    case 'capacity':
                        this.filters.capacity = -1;
                        change = true;
                        break;
                    case 'duration':
                        this.filters.duration = 30;
                        change = true;
                        break;
                    case 'date':
                        var now = moment__WEBPACK_IMPORTED_MODULE_4__();
                        var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
                        date.hours(now.hours()).minutes(Math.ceil(now.minutes() / 5) * 5);
                        this.filters.date = date.valueOf();
                        change = true;
                        break;
                }
            }
        }
        if (change) {
            this.post();
            this.search();
        }
    };
    DeskFlowSearchComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'desk', name], query);
    };
    DeskFlowSearchComponent.prototype.toBook = function (rm) {
        var _this = this;
        this.loading.emit('Checking room is still available...');
        var user = this.service.Users.current();
        this.service.Bookings.add({
            attendees: [user],
            title: "Desks booking from App",
            date: this.filters.date,
            duration: this.filters.duration,
            room: rm
        }).then(function () {
            _this.loading.emit(false);
            _this.to('results');
        }, function () {
            _this.loading.emit(false);
            _this.service.error("Error creating booking for desk " + rm.name);
        });
    };
    DeskFlowSearchComponent.prototype.toMap = function (rm) { this.to('map', { room_id: rm.id }); };
    DeskFlowSearchComponent.prototype.toFilters = function () { this.to('filters'); };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeskFlowSearchComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DeskFlowSearchComponent.prototype, "desk", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], DeskFlowSearchComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], DeskFlowSearchComponent.prototype, "filtersChange", void 0);
    DeskFlowSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'desk-flow-search',
            template: __webpack_require__(/*! ./search.template.html */ "./src/app/shell/booking/desk-flow/search/search.template.html"),
            styles: [__webpack_require__(/*! ./search.styles.scss */ "./src/app/shell/booking/desk-flow/search/search.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], DeskFlowSearchComponent);
    return DeskFlowSearchComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/desk-flow/search/search.styles.scss":
/*!*******************************************************************!*\
  !*** ./src/app/shell/booking/desk-flow/search/search.styles.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.container > * {\n    width: 100%; }\n.block {\n  position: relative;\n  width: 100%;\n  padding: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.block.date {\n    background-color: #fff;\n    border-top: 1px solid #f0f0f0; }\nspan {\n  color: #7dd6d6; }\n.date .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.filter-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap; }\n.filter {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: .25em;\n  white-space: nowrap;\n  background-color: #c79961;\n  border: 1px solid #8f6633;\n  color: rgba(0, 0, 0, 0.54); }\n.filter .text {\n    -webkit-box-flex: 1;\n            flex: 1;\n    margin: .5em; }\n.filter .icon {\n    margin-left: 0; }\n.date-toggle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #4285F4;\n  font-size: 1.2em; }\n.date-toggle .arrow {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    height: 1.5em;\n    width: 1.5em;\n    border: 1px solid #4285F4;\n    font-size: 1.2em;\n    cursor: pointer; }\n.date-toggle .day {\n    border-top: 1px solid #4285F4;\n    border-bottom: 1px solid #4285F4;\n    padding: .25em .5em; }\n.header {\n  font-size: 1.2em; }\n.header .filters {\n    margin: .5em 0; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  min-width: 1.25em;\n  margin: .25em; }\n.icon img {\n    height: 1em; }\n.item {\n  background-color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 1em;\n  padding: .5em;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n.item:last-child {\n    margin: 0; }\n.item .icon {\n    font-size: 1.5em; }\n.details {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 50%; }\n.detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 1.2em; }\n.detail .text {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n.options {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\nbtn {\n  font-size: 1.2em; }\nbtn .icon {\n    margin-left: -.125em; }\n.list {\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 50%;\n  overflow: auto;\n  background-color: #D4EDF1;\n  -webkit-box-align: start;\n          align-items: flex-start; }\n.content {\n  max-width: 768px;\n  width: 100%; }\nbtn {\n  font-size: 1.2em; }\nbtn .icon {\n    margin-left: -.125em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9kZXNrLWZsb3cvc2VhcmNoL3NlYXJjaC5zdHlsZXMuc2NzcyIsIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hlbGwvYm9va2luZy9kZXNrLWZsb3cvc2VhcmNoL3NlYXJjaC5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7aUNDRWlDO0FEK0JqQzs7dUJDNUJ1QjtBRHlDdkI7O3NCQ3RDc0I7QUNOdEI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBO0FBTjFCO0lBUVEsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7QUFOM0I7SUFRUSxzQkFBc0I7SUFDdEIsNkJBQTZCLEVBQUE7QUFJckM7RUFDSSxjRkhzQixFQUFBO0FFTTFCO0VBRVEsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7QUFJL0I7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYixlQUFlLEVBQUE7QUFHbkI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJGekJtQjtFRTBCbkIseUJBQTRDO0VBQzVDLDBCQUFnQixFQUFBO0FBUHBCO0lBU1EsbUJBQU87WUFBUCxPQUFPO0lBQ1AsWUFBWSxFQUFBO0FBVnBCO0lBY1EsY0FBYyxFQUFBO0FBSXRCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixjRjNDbUI7RUU0Q25CLGdCQUFnQixFQUFBO0FBSnBCO0lBTVEsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJGbkRlO0lFb0RmLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7QUFidkI7SUFnQlEsNkJGeERlO0lFeURmLGdDRnpEZTtJRTBEZixtQkFBbUIsRUFBQTtBQUkzQjtFQUNJLGdCQUFnQixFQUFBO0FBRHBCO0lBR1EsY0FBYyxFQUFBO0FBSXRCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYSxFQUFBO0FBTmpCO0lBUVEsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksc0JBQXNCO0VBQ3RCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYix1SEFBMkY7VUFBM0YsK0dBQTJGLEVBQUE7QUFOL0Y7SUFRUSxTQUFTLEVBQUE7QUFSakI7SUFXUSxnQkFBZ0IsRUFBQTtBQUl4QjtFQUNJLG1CQUFPO1VBQVAsT0FBTztFQUNQLFVBQVUsRUFBQTtBQUdkO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTtBQUhwQjtJQUtRLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUE7QUFJL0I7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7QUFHMUI7RUFDSSxnQkFBZ0IsRUFBQTtBQURwQjtJQUdRLG9CQUFvQixFQUFBO0FBSTVCO0VBQ0ksbUJBQU87VUFBUCxPQUFPO0VBQ1AsV0FBVztFQUNYLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0FBRzNCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUdmO0VBQ0ksZ0JBQWdCLEVBQUE7QUFEcEI7SUFHUSxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2Jvb2tpbmcvZGVzay1mbG93L3NlYXJjaC9zZWFyY2guc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3M6ICMzMDliNDA7XG4kc3VjY2Vzcy1hbHQ6ICM0Mjg1ZjQ7XG4kZXJyb3I6ICNkYjI5MWQ7XG4kcGVuZGluZzogI0ZGOTgwMDtcbiRuZXV0cmFsOiAjNzk3OTc5O1xuXG4kYmFja2dyb3VuZDogI2VjZjFmNTtcblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcbiRjb2xvci1wcmltYXJ5LXdpcmVmcmFtZTpyZ2JhKDAsIDAsIDAsIDAuNjEpO1xuJGhlYWRlci1iZzogI2ZmZjtcbiRoZWFkZXItY29sb3I6IHJnYmEoIzAwMjk2MCwgLjg3KTtcblxuJHRpbGUtY29sb3I6ICNmZmY7XG4kdGlsZS1ib3JkZXI6ICNmZmY7XG5cbiRoZWxwLWJvcmRlcjogcmdiYSgjMDAwLCAuMik7XG5cbiRjb2xvci1wcmltYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeTogIzQwNDg1YTtcbiRjb2xvci10ZXJuYXJ5OiAjYzc5OTYxO1xuJGNvbG9yLXF1YXRlcm5hcnk6ICM3ZGQ2ZDY7XG4kY29sb3ItcXVpbnRlcm5hcnk6ICM0YzVjNmM7XG4kY29sb3Itc2V4dGVybmFyeTogIzdmZTQzYjtcblxuJHRpbWVsaW5lLWJnOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzRGNUY3MCAwJSwgIzBGMTIxNSAxMDAlKTtcbiR0aW1lbGluZS1ldmVudDogJGVycm9yO1xuJHRpbWVsaW5lLWJvb2tpbmc6ICRjb2xvci1xdWF0ZXJuYXJ5O1xuXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTRweDtcblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kbWFpbi1mb250OiAkZm9udC1zdGFjaztcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgLmNvbnRhaW5lciA+ICoge1xuICAgIHdpZHRoOiAxMDAlOyB9XG5cbi5ibG9jayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgLmJsb2NrLmRhdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7IH1cblxuc3BhbiB7XG4gIGNvbG9yOiAjN2RkNmQ2OyB9XG5cbi5kYXRlIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cblxuLmZpbHRlci1saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwOyB9XG5cbi5maWx0ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IC4yNWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzc5OTYxO1xuICBib3JkZXI6IDFweCBzb2xpZCAjOGY2NjMzO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuICAuZmlsdGVyIC50ZXh0IHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbjogLjVlbTsgfVxuICAuZmlsdGVyIC5pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuXG4uZGF0ZS10b2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzQyODVGNDtcbiAgZm9udC1zaXplOiAxLjJlbTsgfVxuICAuZGF0ZS10b2dnbGUgLmFycm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQyODVGNDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAuZGF0ZS10b2dnbGUgLmRheSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM0Mjg1RjQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0Mjg1RjQ7XG4gICAgcGFkZGluZzogLjI1ZW0gLjVlbTsgfVxuXG4uaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjJlbTsgfVxuICAuaGVhZGVyIC5maWx0ZXJzIHtcbiAgICBtYXJnaW46IC41ZW0gMDsgfVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEuMjVlbTtcbiAgbWluLXdpZHRoOiAxLjI1ZW07XG4gIG1hcmdpbjogLjI1ZW07IH1cbiAgLmljb24gaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTsgfVxuXG4uaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgcGFkZGluZzogLjVlbTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG4gIC5pdGVtOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbjogMDsgfVxuICAuaXRlbSAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTsgfVxuXG4uZGV0YWlscyB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiA1MCU7IH1cblxuLmRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yZW07IH1cbiAgLmRldGFpbCAudGV4dCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG5idG4ge1xuICBmb250LXNpemU6IDEuMmVtOyB9XG4gIGJ0biAuaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IC0uMTI1ZW07IH1cblxuLmxpc3Qge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDUwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNENEVERjE7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0OyB9XG5cbi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA3NjhweDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuYnRuIHtcbiAgZm9udC1zaXplOiAxLjJlbTsgfVxuICBidG4gLmljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAtLjEyNWVtOyB9XG4iLCJAaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICYgPiAqIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uYmxvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICYuZGF0ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgIH1cbn1cblxuc3BhbiB7XG4gICAgY29sb3I6ICRjb2xvci1xdWF0ZXJuYXJ5O1xufVxuXG4uZGF0ZSB7XG4gICAgLmNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG59XG5cbi5maWx0ZXItbGlzdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5maWx0ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IC4yNWVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRlcm5hcnk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgZGFya2VuKCRjb2xvci10ZXJuYXJ5LCAyMCk7XG4gICAgY29sb3I6IHJnYmEoIzAwMCwgLjU0KTtcbiAgICAudGV4dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1hcmdpbjogLjVlbTtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbn1cblxuLmRhdGUtdG9nZ2xlIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgLmFycm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgIHdpZHRoOiAxLjVlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG4gICAgLmRheSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xuICAgIH1cbn1cblxuLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAuZmlsdGVycyB7XG4gICAgICAgIG1hcmdpbjogLjVlbSAwO1xuICAgIH1cbn1cblxuLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEuMjVlbTtcbiAgICBtaW4td2lkdGg6IDEuMjVlbTtcbiAgICBtYXJnaW46IC4yNWVtO1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgIH1cbn1cblxuLml0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsLjEyKTtcbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgIC5pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB9XG59XG5cbi5kZXRhaWxzIHtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiA1MCU7XG59XG5cbi5kZXRhaWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIC50ZXh0IHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxufVxuXG4ub3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbmJ0biB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtLjEyNWVtO1xuICAgIH1cbn1cblxuLmxpc3Qge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q0RURGMTtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLmNvbnRlbnQge1xuICAgIG1heC13aWR0aDogNzY4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmJ0biB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtLjEyNWVtO1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/shell/booking/desk-flow/search/search.template.html":
/*!*********************************************************************!*\
  !*** ./src/app/shell/booking/desk-flow/search/search.template.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"block header\">\n        <div class=\"content\">\n            <div class=\"header to-upper\">Available Desks: <span>{{model.filtered_items ? model.filtered_items.length || '0' : '0'}}</span></div>\n            <div class=\"filters\">\n                {{ model.start_date }} &ndash; {{ model.end_date }}\n            </div>\n        </div>\n    </div>\n    <div class=\"block list\">\n        <div class=\"content\">\n            <div class=\"item\" *ngFor=\"let item of (model.filtered_items || [])\">\n                <div class=\"details\">\n                    <div class=\"detail\">\n                        <div class=\"icon\">\n                            <img src=\"assets/img/location.svg\">\n                        </div>\n                        <div class=\"text\">{{item.level?.name}}, {{item.name}}</div>\n                    </div>\n                </div>\n                <div class=\"options\">\n                    <btn (tapped)=\"toBook(item)\">Book</btn>\n                    <btn (tapped)=\"toMap(item)\">Map</btn>\n                </div>\n            </div>\n        </div>\n        <div class=\"no-item\" center *ngIf=\"!model.filtered_items || model.filtered_items.length <= 0\">\n            <div class=\"icon\">\n                <i class=\"material-icons\">close</i>\n            </div>\n            <div class=\"text\">No desks found</div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shell/booking/feedback/feedback.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shell/booking/feedback/feedback.component.ts ***!
  \**************************************************************/
/*! exports provided: BookingFlowFeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingFlowFeedbackComponent", function() { return BookingFlowFeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookingFlowFeedbackComponent = /** @class */ (function (_super) {
    __extends(BookingFlowFeedbackComponent, _super);
    function BookingFlowFeedbackComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {};
        return _this;
    }
    BookingFlowFeedbackComponent.prototype.change = function ($event) {
        this.model.description = $event.target.textContent;
    };
    BookingFlowFeedbackComponent.prototype.toHome = function () { this.service.navigate('home'); };
    BookingFlowFeedbackComponent.prototype.submit = function () {
        var _this = this;
        this.loading.emit('Sending feedback...');
        this.timeout('feedback', function () {
            _this.loading.emit(false);
            _this.service.success('Thank you for your feedback');
            _this.toHome();
        }, 2 * 1000);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], BookingFlowFeedbackComponent.prototype, "loading", void 0);
    BookingFlowFeedbackComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'booking-flow-feedback',
            template: __webpack_require__(/*! ./feedback.template.html */ "./src/app/shell/booking/feedback/feedback.template.html"),
            styles: [__webpack_require__(/*! ./feedback.styles.scss */ "./src/app/shell/booking/feedback/feedback.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], BookingFlowFeedbackComponent);
    return BookingFlowFeedbackComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/feedback/feedback.styles.scss":
/*!*************************************************************!*\
  !*** ./src/app/shell/booking/feedback/feedback.styles.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  overflow: auto;\n  padding: 2em;\n  background-color: #E4E4E4; }\n.circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 120vmin;\n  width: 120vmin;\n  border-radius: 100%;\n  background-color: rgba(255, 255, 255, 0.54);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  pointer-events: none; }\n.content {\n  position: relative;\n  max-width: 768px;\n  width: 100%;\n  background-color: #fff;\n  padding: 1em;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  font-size: 1.2em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 1; }\n.info {\n  margin-bottom: .5em;\n  font-size: 1.2em; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .05em; }\n.icon img {\n    height: 1em; }\n.top {\n  font-size: 6em; }\n.title {\n  font-size: 2em;\n  margin: .25em 0;\n  text-transform: uppercase; }\n.description {\n  position: relative;\n  margin: 1em 0;\n  width: 100%; }\n.placeholder {\n  position: absolute;\n  top: .5em;\n  left: .5em;\n  color: rgba(0, 0, 0, 0.54); }\n.textarea {\n  border: 1px solid #ccc;\n  padding: .5em;\n  min-height: 6.4em;\n  width: 100%;\n  background-color: #f8f8f8; }\n.options {\n  display: -webkit-box;\n  display: flex; }\nbtn {\n  font-size: 1.2em;\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin: .25em; }\nbtn .icon {\n    margin-left: -.125em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9mZWVkYmFjay9mZWVkYmFjay5zdHlsZXMuc2NzcyIsIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hlbGwvYm9va2luZy9mZWVkYmFjay9mZWVkYmFjay5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7aUNDRWlDO0FEK0JqQzs7dUJDNUJ1QjtBRHlDdkI7O3NCQ3RDc0I7QUNMdEI7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsWUFBWTtFQUNaLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMkNBQTJCO0VBQzNCLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsb0JBQW9CLEVBQUE7QUFHeEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1SEFBMkY7VUFBM0YsK0dBQTJGO0VBQzNGLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsVUFBVSxFQUFBO0FBR2Q7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhLEVBQUE7QUFOakI7SUFRUSxXQUFXLEVBQUE7QUFJbkI7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0ksa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixXQUFXLEVBQUE7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsVUFBVTtFQUNWLDBCQUFnQixFQUFBO0FBR3BCO0VBQ0ksc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsV0FBVztFQUNYLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0ksb0JBQWE7RUFBYixhQUFhLEVBQUE7QUFHakI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQU87VUFBUCxPQUFPO0VBQ1AsYUFBYSxFQUFBO0FBSGpCO0lBS1Esb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9ib29raW5nL2ZlZWRiYWNrL2ZlZWRiYWNrLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogI2M3OTk2MTtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE0cHg7XG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJG1haW4tZm9udDogJGZvbnQtc3RhY2s7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U0RTRFNDsgfVxuXG4uY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBoZWlnaHQ6IDEyMHZtaW47XG4gIHdpZHRoOiAxMjB2bWluO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNzY4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTsgfVxuXG4uaW5mbyB7XG4gIG1hcmdpbi1ib3R0b206IC41ZW07XG4gIGZvbnQtc2l6ZTogMS4yZW07IH1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjI1ZW07XG4gIHdpZHRoOiAxLjI1ZW07XG4gIG1hcmdpbjogLjA1ZW07IH1cbiAgLmljb24gaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTsgfVxuXG4udG9wIHtcbiAgZm9udC1zaXplOiA2ZW07IH1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogLjI1ZW0gMDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4uZGVzY3JpcHRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMWVtIDA7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5wbGFjZWhvbGRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAuNWVtO1xuICBsZWZ0OiAuNWVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4udGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAuNWVtO1xuICBtaW4taGVpZ2h0OiA2LjRlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7IH1cblxuLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbmJ0biB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogLjI1ZW07IH1cbiAgYnRuIC5pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogLS4xMjVlbTsgfVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFNEU0RTQ7XG59XG5cbi5jaXJjbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgaGVpZ2h0OiAxMjB2bWluO1xuICAgIHdpZHRoOiAxMjB2bWluO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZmZmLCAuNTQpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogNzY4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsLjEyKTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5pbmZvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgd2lkdGg6IDEuMjVlbTtcbiAgICBtYXJnaW46IC4wNWVtO1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgIH1cbn1cblxuLnRvcCB7XG4gICAgZm9udC1zaXplOiA2ZW07XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luOiAuMjVlbSAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogMWVtIDA7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5wbGFjZWhvbGRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLjVlbTtcbiAgICBsZWZ0OiAuNWVtO1xuICAgIGNvbG9yOiByZ2JhKCMwMDAsIC41NCk7XG59XG5cbi50ZXh0YXJlYSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIG1pbi1oZWlnaHQ6IDYuNGVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG59XG5cbi5vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG5idG4ge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW46IC4yNWVtO1xuICAgIC5pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0uMTI1ZW07XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shell/booking/feedback/feedback.template.html":
/*!***************************************************************!*\
  !*** ./src/app/shell/booking/feedback/feedback.template.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"circle\"></div>\n    <div class=\"content\">\n        <div class=\"icon top\">\n            <img src=\"assets/img/book_confirmed.svg\">\n        </div>\n        <div class=\"title\">We value your feedback!</div>\n        <div class=\"info\">Help us make this app event better</div>\n        <div class=\"description\">\n            <div contenteditable=\"true\" class=\"textarea\" (input)=\"change($event)\">\n\n            </div>\n            <div class=\"placeholder\" *ngIf=\"!model.description\">Enter description</div>\n        </div>\n        <div class=\"options\">\n            <btn klass=\"full-width\" (tapped)=\"toHome()\">\n                <div class=\"text\">Cancel</div>\n            </btn>\n            <btn klass=\"full-width\" [disabled]=\"!model.description\" (tapped)=\"submit()\">\n                <div class=\"text\">Submit!</div>\n            </btn>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/confirm-details/confirm-details.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/confirm-details/confirm-details.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"circle\"></div>\n    <div class=\"content\">\n        <div class=\"title\">\n            <input [(ngModel)]=\"model.title\" placeholder=\"Enter title\">\n        </div>\n        <div class=\"item space\">\n            <div class=\"icon\"><img src=\"assets/img/location.svg\"></div>\n            <div class=\"text ul\" (touchrelease)=\"toSpaces()\">{{space ? space.name : 'Any free room'}}</div>\n        </div>\n        <div class=\"details\">\n            at {{model.period}}<br>\n            on {{model.date}}\n        </div>\n        <div class=\"description\">\n            <div contenteditable=\"true\" class=\"textarea\" (input)=\"change($event)\">\n\n            </div>\n            <div class=\"placeholder\" *ngIf=\"!model.description\">Enter description</div>\n        </div>\n        <div class=\"options\">\n            <btn klass=\"full-width\" (tapped)=\"cancel()\">\n                <div class=\"text\">Back</div>\n            </btn>\n            <btn klass=\"full-width\" [disabled]=\"!model.title\" (tapped)=\"book()\">\n                <div class=\"text\">Create!</div>\n            </btn>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/confirm-details/confirm-details.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/confirm-details/confirm-details.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #D4EDF1;\n  overflow: auto;\n  padding: 2em; }\n.circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 120vmin;\n  width: 120vmin;\n  border-radius: 100%;\n  background-color: rgba(255, 255, 255, 0.54);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  pointer-events: none; }\n.content {\n  position: relative;\n  max-width: 768px;\n  width: 100%;\n  background-color: #fff;\n  padding: 1em;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  font-size: 1.2em;\n  z-index: 1; }\ninput {\n  font-size: 1.75em;\n  border: none;\n  color: #443018;\n  width: 100%;\n  margin-bottom: .1em; }\ninput::-webkit-input-placeholder {\n    color: rgba(143, 102, 51, 0.54); }\ninput:-ms-input-placeholder {\n    color: rgba(143, 102, 51, 0.54); }\ninput::-ms-input-placeholder {\n    color: rgba(143, 102, 51, 0.54); }\ninput::placeholder {\n    color: rgba(143, 102, 51, 0.54); }\n.item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n.item.add {\n    color: #22A8DA; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  min-width: 1.25em;\n  margin: .25em;\n  font-size: 1.5em;\n  margin-left: 0; }\n.icon.external {\n    -webkit-filter: hue-rotate(140deg);\n            filter: hue-rotate(140deg); }\n.icon img {\n    height: 1em; }\n.space .icon {\n  margin-left: 0; }\n.header {\n  font-size: 1.25em; }\n.options {\n  display: -webkit-box;\n  display: flex; }\n.description {\n  position: relative;\n  margin: 1em 0; }\n.placeholder {\n  position: absolute;\n  top: .5em;\n  left: .5em;\n  color: rgba(0, 0, 0, 0.54); }\n.textarea {\n  border: 1px solid #ccc;\n  padding: .5em;\n  min-height: 6.4em;\n  width: 100%;\n  background-color: #f8f8f8; }\nbtn {\n  font-size: 1.2em;\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin: .25em; }\nbtn .icon {\n    margin-left: -.125em; }\n.ul {\n  text-decoration: underline; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9waG9uZS1ib290aC1mbG93L2NvbmZpcm0tZGV0YWlscy9jb25maXJtLWRldGFpbHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYmVuaG9hZC9Qcm9qZWN0cy9tY2stb3V0bG9vay1hZGRpbi9zcmMvYXBwL3NoZWxsL2Jvb2tpbmcvcGhvbmUtYm9vdGgtZmxvdy9jb25maXJtLWRldGFpbHMvY29uZmlybS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztpQ0NFaUM7QUQrQmpDOzt1QkM1QnVCO0FEeUN2Qjs7c0JDdENzQjtBQ0x0QjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWSxFQUFBO0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMkNBQTJCO0VBQzNCLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsb0JBQW9CLEVBQUE7QUFHeEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1SEFBMkY7VUFBM0YsK0dBQTJGO0VBQzNGLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7QUFHZDtFQUNJLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBaUM7RUFDakMsV0FBVztFQUNYLG1CQUFtQixFQUFBO0FBTHZCO0lBUVEsK0JBQXNDLEVBQUE7QUFSOUM7SUFRUSwrQkFBc0MsRUFBQTtBQVI5QztJQVFRLCtCQUFzQyxFQUFBO0FBUjlDO0lBUVEsK0JBQXNDLEVBQUE7QUFJOUM7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7QUFGdkI7SUFJUSxjQUFjLEVBQUE7QUFJdEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtBQVJsQjtJQVdRLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtBQVhsQztJQWVRLFdBQVcsRUFBQTtBQUluQjtFQUVRLGNBQWMsRUFBQTtBQUl0QjtFQUNJLGlCQUFpQixFQUFBO0FBR3JCO0VBQ0ksb0JBQWE7RUFBYixhQUFhLEVBQUE7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBO0FBR2pCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQWdCLEVBQUE7QUFHcEI7RUFDSSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQU87VUFBUCxPQUFPO0VBQ1AsYUFBYSxFQUFBO0FBSGpCO0lBS1Esb0JBQW9CLEVBQUE7QUFJNUI7RUFDSSwwQkFBMEIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2Jvb2tpbmcvcGhvbmUtYm9vdGgtZmxvdy9jb25maXJtLWRldGFpbHMvY29uZmlybS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogI2M3OTk2MTtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE0cHg7XG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJG1haW4tZm9udDogJGZvbnQtc3RhY2s7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q0RURGMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDJlbTsgfVxuXG4uY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBoZWlnaHQ6IDEyMHZtaW47XG4gIHdpZHRoOiAxMjB2bWluO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNzY4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBmb250LXNpemU6IDEuMmVtO1xuICB6LWluZGV4OiAxOyB9XG5cbmlucHV0IHtcbiAgZm9udC1zaXplOiAxLjc1ZW07XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6ICM0NDMwMTg7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAuMWVtOyB9XG4gIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMTQzLCAxMDIsIDUxLCAwLjU0KTsgfVxuXG4uaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLml0ZW0uYWRkIHtcbiAgICBjb2xvcjogIzIyQThEQTsgfVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEuMjVlbTtcbiAgbWluLXdpZHRoOiAxLjI1ZW07XG4gIG1hcmdpbjogLjI1ZW07XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbi1sZWZ0OiAwOyB9XG4gIC5pY29uLmV4dGVybmFsIHtcbiAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMTQwZGVnKTsgfVxuICAuaWNvbiBpbWcge1xuICAgIGhlaWdodDogMWVtOyB9XG5cbi5zcGFjZSAuaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwOyB9XG5cbi5oZWFkZXIge1xuICBmb250LXNpemU6IDEuMjVlbTsgfVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7IH1cblxuLmRlc2NyaXB0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDFlbSAwOyB9XG5cbi5wbGFjZWhvbGRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAuNWVtO1xuICBsZWZ0OiAuNWVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4udGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAuNWVtO1xuICBtaW4taGVpZ2h0OiA2LjRlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7IH1cblxuYnRuIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAuMjVlbTsgfVxuICBidG4gLmljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAtLjEyNWVtOyB9XG5cbi51bCB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyB9XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRFREYxO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cblxuLmNpcmNsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBoZWlnaHQ6IDEyMHZtaW47XG4gICAgd2lkdGg6IDEyMHZtaW47XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNmZmYsIC41NCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwuMTIpO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgei1pbmRleDogMTtcbn1cblxuaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogZGFya2VuKCRjb2xvci10ZXJuYXJ5LCA0MCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogLjFlbTtcblxuICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHJnYmEoZGFya2VuKCRjb2xvci10ZXJuYXJ5LCAyMCksIC41NCk7XG4gICAgfVxufVxuXG4uaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICYuYWRkIHtcbiAgICAgICAgY29sb3I6ICMyMkE4REE7XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS4yNWVtO1xuICAgIG1pbi13aWR0aDogMS4yNWVtO1xuICAgIG1hcmdpbjogLjI1ZW07XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW4tbGVmdDogMDtcblxuICAgICYuZXh0ZXJuYWwge1xuICAgICAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMTQwZGVnKTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICB9XG59XG5cbi5zcGFjZSB7XG4gICAgLmljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG59XG5cbi5oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuXG4ub3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxZW0gMDtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAuNWVtO1xuICAgIGxlZnQ6IC41ZW07XG4gICAgY29sb3I6IHJnYmEoIzAwMCwgLjU0KTtcbn1cblxuLnRleHRhcmVhIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgbWluLWhlaWdodDogNi40ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbn1cblxuYnRuIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luOiAuMjVlbTtcbiAgICAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtLjEyNWVtO1xuICAgIH1cbn1cblxuLnVsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/confirm-details/confirm-details.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/confirm-details/confirm-details.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PhoneBoothFlowConfirmDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneBoothFlowConfirmDetailsComponent", function() { return PhoneBoothFlowConfirmDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhoneBoothFlowConfirmDetailsComponent = /** @class */ (function (_super) {
    __extends(PhoneBoothFlowConfirmDetailsComponent, _super);
    function PhoneBoothFlowConfirmDetailsComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {};
        return _this;
    }
    PhoneBoothFlowConfirmDetailsComponent.prototype.ngOnInit = function () {
        this.updateDisplay();
        this.init();
    };
    PhoneBoothFlowConfirmDetailsComponent.prototype.ngOnChanges = function (changes) {
        this.updateDisplay();
        console.log('Space:', this.model.space);
    };
    PhoneBoothFlowConfirmDetailsComponent.prototype.init = function () {
        var _this = this;
        if (!this.service.ready()) {
            return this.timeout('init', function () { return _this.init(); });
        }
        this.model.settings = this.service.Settings.get('app.booking') || {};
    };
    PhoneBoothFlowConfirmDetailsComponent.prototype.change = function ($event) {
        this.model.description = $event.target.textContent;
    };
    PhoneBoothFlowConfirmDetailsComponent.prototype.updateDisplay = function () {
        if (!this.form) {
            this.form = {};
        }
        var date = moment__WEBPACK_IMPORTED_MODULE_3__(this.form.date);
        this.model.date = date.format('dddd D MMM YYYY');
        var start = date.format('hh:mm A');
        var end = date.add(this.form.duration || 30, 'm').format('hh:mm A');
        this.model.period = start + " - " + end;
    };
    PhoneBoothFlowConfirmDetailsComponent.prototype.book = function () {
        var _this = this;
        if (this.space) {
            this.loading.emit('Checking room status...');
            this.service.Rooms.isAvailable(this.space.id, this.form.date, this.form.duration)
                .then(function () {
                _this.createBooking();
            }, function (e) {
                _this.loading.emit(false);
                var start = moment__WEBPACK_IMPORTED_MODULE_3__(_this.form.date);
                var date = start.format('MMM Do, YYYY');
                var end = moment__WEBPACK_IMPORTED_MODULE_3__(start).add(_this.form.duration, 'm');
                _this.service.error('Room is not available at the selected time anymore');
                _this.model.error = JSON.parse(JSON.stringify(_this.model.error));
            });
        }
        else {
            this.loading.emit('Finding available room...');
            this.service.Rooms.available({
                date: this.form.date,
                duration: this.form.duration
            }).then(function (list) {
                var rm_list = list.filter(function (item) { return item.capacity >= (_this.attendees || []).length || 1; });
                if (rm_list && rm_list.length > 0) {
                    _this.space = rm_list[Math.floor(Math.random() * rm_list.length)];
                    _this.createBooking();
                }
                else {
                    _this.service.error('No rooms found at the specified time with the required capacity');
                    _this.loading.emit(false);
                }
            });
        }
    };
    PhoneBoothFlowConfirmDetailsComponent.prototype.createBooking = function () {
        var _this = this;
        var title = this.model.title;
        if (!this.model.title) {
            this.model.title = "From Staff App by " + this.model.user.name;
        }
        if (this.model.settings.title_prefix) {
            this.model.title = this.model.settings.title_prefix + this.model.form.title;
        }
        this.loading.emit('Requesting meeting...');
        var form = __assign({}, this.form, { title: this.model.title, description: this.model.description, attendees: this.attendees, room: this.space });
        this.service.Bookings.add(form).then(function () {
            _this.loading.emit(false);
            _this.to('result');
        }, function (err) {
            _this.loading.emit(false);
            if (_this.model.settings && _this.model.settings.title_prefix) {
                _this.model.title = _this.model.title.replace(_this.model.settings.title_prefix, '');
            }
            _this.model.title = title;
            if (!err || (typeof err === 'string' && err.indexOf('user') < 0)) {
                _this.service.error('An error occurred while making your booking');
            }
        });
    };
    PhoneBoothFlowConfirmDetailsComponent.prototype.cancel = function () {
        this.back.emit();
    };
    PhoneBoothFlowConfirmDetailsComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'phone-booth', name], query);
    };
    PhoneBoothFlowConfirmDetailsComponent.prototype.toSpaces = function () { this.to('select-booth'); };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PhoneBoothFlowConfirmDetailsComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], PhoneBoothFlowConfirmDetailsComponent.prototype, "attendees", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PhoneBoothFlowConfirmDetailsComponent.prototype, "space", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PhoneBoothFlowConfirmDetailsComponent.prototype, "from", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Array)
    ], PhoneBoothFlowConfirmDetailsComponent.prototype, "attendeesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PhoneBoothFlowConfirmDetailsComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PhoneBoothFlowConfirmDetailsComponent.prototype, "back", void 0);
    PhoneBoothFlowConfirmDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'phone-booth-flow-confirm-details',
            template: __webpack_require__(/*! ./confirm-details.component.html */ "./src/app/shell/booking/phone-booth-flow/confirm-details/confirm-details.component.html"),
            styles: [__webpack_require__(/*! ./confirm-details.component.scss */ "./src/app/shell/booking/phone-booth-flow/confirm-details/confirm-details.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], PhoneBoothFlowConfirmDetailsComponent);
    return PhoneBoothFlowConfirmDetailsComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/filters/filters.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/filters/filters.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block search\">\n    <div class=\"content\">\n        <div class=\"header to-upper\">Search phone booths</div>\n        <div class=\"form\">\n            <div class=\"field\">\n                <label for=\"level\">Level</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"level\" [list]=\"model.levels\" [(model)]=\"model.level_index\"\n                        (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"date\">Date</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"date\" [list]=\"model.dates\" [(model)]=\"model.date_index\" (modelChange)=\"updateForm(); loadTimes()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"time\">Time</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"time\" [list]=\"model.times\" [(model)]=\"model.time_index\" (modelChange)=\"updateForm(); loadDurations()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"duration\">Duration</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"duration\" [list]=\"model.durations\" [(model)]=\"model.duration_index\"\n                        (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <hr />\n            <div class=\"options\">\n                <btn klass=\"wide\" (tapped)=\"toSpaces()\">\n                    <div class=\"icon\"><i class=\"material-icons\">search</i></div>\n                    <div class=\"text\">Search</div>\n                </btn>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/filters/filters.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/filters/filters.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .25em;\n  margin-left: 0; }\n.icon img {\n    height: 1em; }\n.header {\n  font-size: 1.2em;\n  margin-bottom: .5em; }\n.block {\n  width: 100%;\n  padding: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.content {\n  max-width: 768px;\n  width: 100%; }\n.item {\n  margin: .5em; }\n.item > * {\n    font-size: 1.2em; }\n.value {\n  margin: .5em 0; }\n.form {\n  padding: 0 1em;\n  font-size: 1.1em; }\n.form .options {\n    display: -webkit-box;\n    display: flex; }\n.form btn {\n    -webkit-box-flex: 1;\n            flex: 1;\n    margin: .25em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9waG9uZS1ib290aC1mbG93L2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hlbGwvYm9va2luZy9waG9uZS1ib290aC1mbG93L2ZpbHRlcnMvZmlsdGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7aUNDRWlDO0FEK0JqQzs7dUJDNUJ1QjtBRHlDdkI7O3NCQ3RDc0I7QUNMdEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhO0VBQ2IsY0FBYyxFQUFBO0FBUGxCO0lBU1EsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtBQUczQjtFQUNJLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7QUFHZjtFQUNJLFlBQVksRUFBQTtBQURoQjtJQUdRLGdCQUFnQixFQUFBO0FBSXhCO0VBQ0ksY0FBYyxFQUFBO0FBR2xCO0VBQ0ksY0FBYztFQUNkLGdCQUFnQixFQUFBO0FBRnBCO0lBS1Esb0JBQWE7SUFBYixhQUFhLEVBQUE7QUFMckI7SUFTUSxtQkFBTztZQUFQLE9BQU87SUFDUCxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9ib29raW5nL3Bob25lLWJvb3RoLWZsb3cvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogI2M3OTk2MTtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE0cHg7XG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJG1haW4tZm9udDogJGZvbnQtc3RhY2s7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjI1ZW07XG4gIHdpZHRoOiAxLjI1ZW07XG4gIG1hcmdpbjogLjI1ZW07XG4gIG1hcmdpbi1sZWZ0OiAwOyB9XG4gIC5pY29uIGltZyB7XG4gICAgaGVpZ2h0OiAxZW07IH1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IC41ZW07IH1cblxuLmJsb2NrIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cblxuLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDc2OHB4O1xuICB3aWR0aDogMTAwJTsgfVxuXG4uaXRlbSB7XG4gIG1hcmdpbjogLjVlbTsgfVxuICAuaXRlbSA+ICoge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07IH1cblxuLnZhbHVlIHtcbiAgbWFyZ2luOiAuNWVtIDA7IH1cblxuLmZvcm0ge1xuICBwYWRkaW5nOiAwIDFlbTtcbiAgZm9udC1zaXplOiAxLjFlbTsgfVxuICAuZm9ybSAub3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDsgfVxuICAuZm9ybSBidG4ge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luOiAuMjVlbTsgfVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEuMjVlbTtcbiAgICB3aWR0aDogMS4yNWVtO1xuICAgIG1hcmdpbjogLjI1ZW07XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgfVxufVxuXG4uaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG59XG5cbi5ibG9jayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICAgIG1heC13aWR0aDogNzY4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtIHtcbiAgICBtYXJnaW46IC41ZW07XG4gICAgJiA+ICoge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbn1cblxuLnZhbHVlIHtcbiAgICBtYXJnaW46IC41ZW0gMDtcbn1cblxuLmZvcm0ge1xuICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG5cbiAgICAub3B0aW9ucyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgYnRuIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWFyZ2luOiAuMjVlbTtcbiAgICB9XG59Il19 */"

/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/filters/filters.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/filters/filters.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PhoneBoothFlowFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneBoothFlowFiltersComponent", function() { return PhoneBoothFlowFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utility.class */ "./src/app/shared/utility.class.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhoneBoothFlowFiltersComponent = /** @class */ (function (_super) {
    __extends(PhoneBoothFlowFiltersComponent, _super);
    function PhoneBoothFlowFiltersComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.filtersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {
            date_index: 0,
            time_index: 0,
            duration_index: 0,
            level_index: 0,
            capacity_index: 0
        };
        return _this;
    }
    PhoneBoothFlowFiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.model.form) {
            this.model.form = {};
        }
        if (!this.filters) {
            this.filters = {};
        }
        this.subs.obs.capacity = this.service.Rooms.listen('capacities', function (list) {
            _this.model.capacity = list || [];
            var exists = _this.model.capacity.find(function (i) { return i.id === _this.filters.capacity; });
            if (exists) {
                _this.model.capacity_index = _this.model.capacity.indexOf(exists);
                if (_this.model.capacity_index < 0) {
                    _this.model.capacity_index = 0;
                }
            }
            _this.updateForm();
        });
        this.subs.obs.building = this.service.Buildings.listen(function (bld) {
            if (bld) {
                _this.model.levels = [{ id: null, name: 'Any' }].concat(bld.levels);
                var exists = _this.model.levels.find(function (i) { return _this.filters.level && i.id === _this.filters.level; });
                if (exists) {
                    _this.model.level_index = _this.model.levels.indexOf(exists);
                    if (_this.model.level_index < 0) {
                        _this.model.level_index = 0;
                    }
                }
                _this.model.extras = bld.extras.slice();
                _this.model.extras.forEach(function (item) { return (_this.filters.extras || []).forEach(function (old) {
                    if (old.id === item.id) {
                        item.filter = old.filter;
                    }
                }); });
                _this.updateForm();
            }
        });
        this.loadDates();
        this.updateForm();
    };
    PhoneBoothFlowFiltersComponent.prototype.updateForm = function () {
        var _this = this;
        this.timeout('update', function () {
            // Prevent pre-initialisation errors
            if (!_this.model.dates) {
                _this.model.dates = [{ id: moment__WEBPACK_IMPORTED_MODULE_4__().seconds(0).milliseconds(0).valueOf() }];
            }
            if (!_this.model.times) {
                _this.model.times = [{ id: moment__WEBPACK_IMPORTED_MODULE_4__().format('HH:mm') }];
            }
            if (!_this.model.durations) {
                _this.model.durations = [{ id: 30 }];
            }
            if (!_this.model.capacity) {
                _this.model.capacity = [{ id: -1 }];
            }
            if (!_this.model.levels) {
                _this.model.levels = [{ id: null }];
            }
            // Update filter fields
            var date = moment__WEBPACK_IMPORTED_MODULE_4__(_this.model.dates[_this.model.date_index].id);
            var time = _this.model.times[_this.model.time_index].id.split(':');
            _this.filters = {
                date: date.hours(+time[0]).minutes(+time[1]).valueOf(),
                duration: _this.model.durations[Math.min(_this.model.durations.length - 1, _this.model.duration_index)].id,
                capacity: 1,
                level: _this.model.levels[Math.min(_this.model.levels.length - 1, _this.model.level_index)].id,
                extras: _this.model.extras && _this.model.extras.length > 0 ? _this.model.extras.slice() : []
            };
            _this.loadDurations();
            _this.filtersChange.emit(_this.filters);
        }, 100);
    };
    PhoneBoothFlowFiltersComponent.prototype.loadDates = function () {
        this.model.dates = [];
        if (!this.model.form.date) {
            this.model.form.date = moment__WEBPACK_IMPORTED_MODULE_4__().valueOf();
        }
        var date = moment__WEBPACK_IMPORTED_MODULE_4__().hour(0).minutes(0).seconds(0).milliseconds(0);
        var end = moment__WEBPACK_IMPORTED_MODULE_4__(date).add(2, 'M');
        var offset = 0;
        for (; date.isBefore(end); date.add(1, 'd')) {
            this.model.dates.push({
                id: date.valueOf(),
                name: date.format('ddd MMMM DD, YYYY'),
                offset: offset
            });
            offset++;
        }
        this.loadTimes();
    };
    PhoneBoothFlowFiltersComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'phone-booth', name], query);
    };
    PhoneBoothFlowFiltersComponent.prototype.toSpaces = function () { this.to('select-booth'); };
    PhoneBoothFlowFiltersComponent.prototype.cancel = function () { this.back.emit(); };
    PhoneBoothFlowFiltersComponent.prototype.loadTimes = function () {
        // Clean up time
        this.filters.date = this.cleanTime(this.filters.date);
        this.model.times = [];
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
        var now = moment__WEBPACK_IMPORTED_MODULE_4__();
        now.minutes(Math.ceil(now.minutes() / 5) * 5);
        if (now.minutes() % 15 !== 0) {
            this.model.times.push({
                id: now.format('HH:mm'),
                name: now.format('hh:mm A')
            });
            now.minutes(Math.ceil(now.minutes() / 15) * 15);
        }
        if (date.isAfter(now, 'd')) {
            now.hours(0).minutes(0);
        }
        var end = moment__WEBPACK_IMPORTED_MODULE_4__(now).hours(23).minutes(59);
        for (; now.isBefore(end, 'm'); now.add(15, 'm')) {
            this.model.times.push({
                id: now.format('HH:mm'),
                name: now.format('hh:mm A')
            });
        }
        var time = date.format('HH:mm');
        var exists = this.model.times.find(function (a) { return a.id === time; });
        if (exists) {
            this.model.times.sort(function (a, b) { return a.id.localeCompare(b.id); });
            this.model.time_index = this.model.times.indexOf(exists);
        }
        else {
            this.model.times.push({
                id: date.format('HH:mm'),
                name: date.format('hh:mm A')
            });
            this.model.times.sort(function (a, b) { return a.id.localeCompare(b.id); });
            exists = this.model.times.find(function (a) { return a.id === time; });
            this.model.time_index = this.model.times.indexOf(exists);
        }
        this.loadDurations(true);
    };
    PhoneBoothFlowFiltersComponent.prototype.cleanTime = function (datestamp, block_size) {
        if (block_size === void 0) { block_size = 5; }
        if (!datestamp) {
            datestamp = moment__WEBPACK_IMPORTED_MODULE_4__().valueOf();
        }
        var now = moment__WEBPACK_IMPORTED_MODULE_4__().seconds(0).milliseconds(0);
        now.minutes(Math.ceil(now.minutes() / block_size) * block_size);
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(datestamp).seconds(0).milliseconds(0);
        if (date.isBefore(now, 'm')) {
            date = moment__WEBPACK_IMPORTED_MODULE_4__(now);
        }
        else {
            date.minutes(Math.ceil(date.minutes() / block_size) * block_size);
        }
        return date.valueOf();
    };
    PhoneBoothFlowFiltersComponent.prototype.loadDurations = function (init) {
        if (init === void 0) { init = false; }
        this.filters.date = this.cleanTime(this.filters.date);
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
        var end = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date).add(240, 'm');
        date.add(30, 'm');
        var duration = 30;
        this.model.durations = [];
        for (; date.isBefore(end, 'm'); date.add(15, 'm')) {
            if (init && this.filters.duration && duration === this.filters.duration) {
                this.model.duration_index = this.model.durations.length;
            }
            this.model.durations.push({
                id: duration,
                name: date.format('hh:mm A') + " (" + _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__["Utils"].humaniseDuration(duration) + ")"
            });
            duration += 15;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PhoneBoothFlowFiltersComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PhoneBoothFlowFiltersComponent.prototype, "filtersChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PhoneBoothFlowFiltersComponent.prototype, "back", void 0);
    PhoneBoothFlowFiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'phone-booth-flow-filters',
            template: __webpack_require__(/*! ./filters.component.html */ "./src/app/shell/booking/phone-booth-flow/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/shell/booking/phone-booth-flow/filters/filters.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], PhoneBoothFlowFiltersComponent);
    return PhoneBoothFlowFiltersComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/index.ts":
/*!*********************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/index.ts ***!
  \*********************************************************/
/*! exports provided: PHONE_BOOTH_FLOW_COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHONE_BOOTH_FLOW_COMPONENTS", function() { return PHONE_BOOTH_FLOW_COMPONENTS; });
/* harmony import */ var _phone_booth_flow_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./phone-booth-flow.component */ "./src/app/shell/booking/phone-booth-flow/phone-booth-flow.component.ts");
/* harmony import */ var _confirm_details_confirm_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirm-details/confirm-details.component */ "./src/app/shell/booking/phone-booth-flow/confirm-details/confirm-details.component.ts");
/* harmony import */ var _select_booth_select_booth_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./select-booth/select-booth.component */ "./src/app/shell/booking/phone-booth-flow/select-booth/select-booth.component.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/shell/booking/phone-booth-flow/filters/filters.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./result/result.component */ "./src/app/shell/booking/phone-booth-flow/result/result.component.ts");





var PHONE_BOOTH_FLOW_COMPONENTS = [
    _phone_booth_flow_component__WEBPACK_IMPORTED_MODULE_0__["PhoneBoothBookingFlowComponent"],
    _confirm_details_confirm_details_component__WEBPACK_IMPORTED_MODULE_1__["PhoneBoothFlowConfirmDetailsComponent"],
    _select_booth_select_booth_component__WEBPACK_IMPORTED_MODULE_2__["PhoneBoothFlowSelectBoothComponent"],
    _filters_filters_component__WEBPACK_IMPORTED_MODULE_3__["PhoneBoothFlowFiltersComponent"],
    _result_result_component__WEBPACK_IMPORTED_MODULE_4__["PhoneBoothFlowResultComponent"]
];


/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/phone-booth-flow.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/phone-booth-flow.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"topbar\">\n        <div class=\"icon back\" (touchrelease)=\"back()\">\n            <i class=\"material-icons\">arrow_back</i>\n        </div>\n        <div class=\"text to-upper\" [ngSwitch]=\"model.page\">\n            <ng-container *ngSwitchCase=\"'select-booth'\">Phone booth results</ng-container>\n            <ng-container *ngSwitchCase=\"'confirm-details'\">Let's make your booking</ng-container>\n            <ng-container *ngSwitchDefault>Phone Booths</ng-container>\n        </div>\n    </div>\n    <div class=\"flow-step\" [ngSwitch]=\"model.page\">\n        <ng-container *ngSwitchCase=\"'select-booth'\">\n            <phone-booth-flow-select-booth (space)=\"model.space = $event; storeSpace()\" [(filters)]=\"model.filters\"\n                (filtersChange)=\"storeFilters()\" (loading)=\"loading = $event\"></phone-booth-flow-select-booth>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'confirm-details'\">\n            <phone-booth-flow-confirm-details [from]=\"model.from\" [form]=\"model.filters\" [attendees]=\"model.attendees\"\n                [space]=\"model.room\" (back)=\"back()\" (loading)=\"loading = $event\"></phone-booth-flow-confirm-details>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'results'\">\n            <phone-booth-flow-result></phone-booth-flow-result>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'result'\">\n            <phone-booth-flow-result></phone-booth-flow-result>\n        </ng-container>\n        <ng-container *ngSwitchDefault>\n            <phone-booth-flow-filters [(filters)]=\"model.filters\" (filtersChange)=\"storeFilters()\"></phone-booth-flow-filters>\n        </ng-container>\n    </div>\n    <div class=\"loader\" *ngIf=\"model.loading\">\n        <div class=\"no-item\">\n            <div class=\"icon\">\n                <spinner type=\"circle-ring\" color=\"#000\"></spinner>\n            </div>\n            <div class=\"text\">{{model.loading === true ? 'Waiting...' : model.loading}}</div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/phone-booth-flow.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/phone-booth-flow.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.container > * {\n    width: 100%; }\n.topbar {\n  width: 100%;\n  min-height: 3em;\n  background-color: #B8123E;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n.topbar > * {\n    font-size: 1.2em; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .25em; }\n.icon img {\n    height: 1em; }\n.flow-step {\n  -webkit-box-flex: 1;\n          flex: 1;\n  overflow: auto; }\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.87);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 999; }\n.loader .text {\n    color: rgba(0, 0, 0, 0.87); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9waG9uZS1ib290aC1mbG93L3Bob25lLWJvb3RoLWZsb3cuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYmVuaG9hZC9Qcm9qZWN0cy9tY2stb3V0bG9vay1hZGRpbi9zcmMvYXBwL3NoZWxsL2Jvb2tpbmcvcGhvbmUtYm9vdGgtZmxvdy9waG9uZS1ib290aC1mbG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztpQ0NFaUM7QUQrQmpDOzt1QkM1QnVCO0FEeUN2Qjs7c0JDdENzQjtBQ050QjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtBQVAxQjtJQVNRLFdBQVcsRUFBQTtBQUluQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7QUFOdkI7SUFRUSxnQkFBZ0IsRUFBQTtBQUl4QjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsYUFBYTtFQUNiLGFBQWEsRUFBQTtBQU5qQjtJQVFRLFdBQVcsRUFBQTtBQUluQjtFQUNJLG1CQUFPO1VBQVAsT0FBTztFQUNQLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsMkNBQTJCO0VBQzNCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixZQUFZLEVBQUE7QUFWaEI7SUFhUSwwQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2Jvb2tpbmcvcGhvbmUtYm9vdGgtZmxvdy9waG9uZS1ib290aC1mbG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogI2M3OTk2MTtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE0cHg7XG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJG1haW4tZm9udDogJGZvbnQtc3RhY2s7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIC5jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTsgfVxuXG4udG9wYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I4MTIzRTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLnRvcGJhciA+ICoge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07IH1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjI1ZW07XG4gIHdpZHRoOiAxLjI1ZW07XG4gIG1hcmdpbjogLjI1ZW07IH1cbiAgLmljb24gaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTsgfVxuXG4uZmxvdy1zdGVwIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5OyB9XG4gIC5sb2FkZXIgLnRleHQge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4iLCJAaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgJiA+ICoge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi50b3BiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjgxMjNFO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAmID4gKiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS4yNWVtO1xuICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgbWFyZ2luOiAuMjVlbTtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICB9XG59XG5cbi5mbG93LXN0ZXAge1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5sb2FkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZmZmLCAuODcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA5OTk7XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC44Nyk7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/phone-booth-flow.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/phone-booth-flow.component.ts ***!
  \******************************************************************************/
/*! exports provided: PhoneBoothBookingFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneBoothBookingFlowComponent", function() { return PhoneBoothBookingFlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PhoneBoothBookingFlowComponent = /** @class */ (function (_super) {
    __extends(PhoneBoothBookingFlowComponent, _super);
    function PhoneBoothBookingFlowComponent(service, route, router) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        _this.router = router;
        _this.model = {};
        _this.model.breadcrumbs = [];
        return _this;
    }
    PhoneBoothBookingFlowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.flow = 'phone-booth';
        this.load('breadcrumbs');
        this.subs.obs.params = this.route.paramMap.subscribe(function (params) {
            if (_this.model.page && !_this.model.ignore) {
                _this.model.breadcrumbs.push(_this.model.page);
                _this.store('breadcrumbs');
            }
            _this.model.ignore = false;
            _this.model.page = '';
            if (params.has('page')) {
                _this.model.page = params.get('page');
            }
            if (!_this.model.page) {
                _this.clearForm();
            }
        });
        this.subs.obs.route = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && e.url.indexOf('book/phone-booth') < 0) {
                _this.clearForm();
            }
        });
        this.loadFilters();
        this.loadSpace();
        this.loadAttendees();
        if (this.model.space) {
            this.model.room = this.service.Rooms.item(this.model.space);
        }
    };
    PhoneBoothBookingFlowComponent.prototype.store = function (name) {
        if (localStorage) {
            var d = this.model[name];
            var value = typeof d === 'object' ? JSON.stringify(d) : d;
            localStorage.setItem("STAFF." + this.model.flow + "." + name, value);
        }
    };
    PhoneBoothBookingFlowComponent.prototype.load = function (name) {
        if (localStorage) {
            var item = localStorage.getItem("STAFF." + this.model.flow + "." + name);
            if (item) {
                try {
                    this.model[name] = JSON.parse(item);
                }
                catch (e) {
                    this.model[name] = item;
                }
            }
        }
    };
    PhoneBoothBookingFlowComponent.prototype.clear = function (name) {
        if (localStorage) {
            localStorage.removeItem("STAFF." + this.model.flow + "." + name);
        }
    };
    PhoneBoothBookingFlowComponent.prototype.storeFilters = function () { this.store('filters'); };
    PhoneBoothBookingFlowComponent.prototype.loadFilters = function () { this.load('filters'); };
    PhoneBoothBookingFlowComponent.prototype.storeSpace = function () {
        this.store('space');
        if (this.model.space) {
            this.model.room = this.service.Rooms.item(this.model.space);
        }
    };
    PhoneBoothBookingFlowComponent.prototype.loadSpace = function () { this.load('space'); };
    PhoneBoothBookingFlowComponent.prototype.storeAttendees = function () { this.store('attendees'); };
    PhoneBoothBookingFlowComponent.prototype.loadAttendees = function () { this.load('attendees'); };
    PhoneBoothBookingFlowComponent.prototype.clearForm = function () {
        var _this = this;
        ['filters', 'space', 'attendees', 'breadcrumbs'].forEach(function (i) { return _this.clear(i); });
    };
    Object.defineProperty(PhoneBoothBookingFlowComponent.prototype, "loading", {
        set: function (value) {
            var _this = this;
            this.timeout('loading', function () { return _this.model.loading = value; }, 10);
        },
        enumerable: true,
        configurable: true
    });
    PhoneBoothBookingFlowComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'phone-booth', name], query);
    };
    PhoneBoothBookingFlowComponent.prototype.back = function () {
        var previous = this.model.breadcrumbs.pop();
        if (previous) {
            this.to(previous);
            this.model.ignore = true;
            this.store('breadcrumbs');
        }
        else {
            this.service.navigate(['book']);
        }
    };
    PhoneBoothBookingFlowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'phone-booth-booking-flow',
            template: __webpack_require__(/*! ./phone-booth-flow.component.html */ "./src/app/shell/booking/phone-booth-flow/phone-booth-flow.component.html"),
            styles: [__webpack_require__(/*! ./phone-booth-flow.component.scss */ "./src/app/shell/booking/phone-booth-flow/phone-booth-flow.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PhoneBoothBookingFlowComponent);
    return PhoneBoothBookingFlowComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/result/result.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/result/result.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"circle\"></div>\n    <div class=\"content\">\n        <div class=\"icon top\">\n            <img src=\"assets/img/book_booth.svg\">\n        </div>\n        <div class=\"title\">Booking created</div>\n        <div class=\"info\">Are you happy with your experience?</div>\n        <div class=\"options\">\n            <div class=\"option icon\" (touchrelease)=\"toHome()\">\n                <i class=\"material-icons\">done</i>\n            </div>\n            <div class=\"option icon\" (touchrelease)=\"toFeedback()\">\n                <i class=\"material-icons\">close</i>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/result/result.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/result/result.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #D4EDF1;\n  overflow: auto;\n  padding: 2em; }\n.circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 120vmin;\n  width: 120vmin;\n  border-radius: 100%;\n  background-color: rgba(255, 255, 255, 0.54);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  pointer-events: none; }\n.content {\n  position: relative;\n  max-width: 768px;\n  width: 100%;\n  background-color: #fff;\n  padding: 1em;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  font-size: 1.2em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 1; }\n.info {\n  margin-bottom: .5em;\n  font-size: 1.2em; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .05em; }\n.icon img {\n    height: 1em;\n    width: 1em;\n    border-radius: 100%;\n    border: 4px solid #309b40; }\n.top {\n  font-size: 6em; }\n.title {\n  font-size: 2em;\n  margin: .25em 0;\n  text-transform: uppercase; }\n.options {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: .5em 0; }\n.option {\n  height: 1.5em;\n  width: 1.5em;\n  font-size: 2em;\n  background-color: #F1F9FF;\n  border-radius: 100%;\n  margin: .2em .25em;\n  color: #6a4b25; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9waG9uZS1ib290aC1mbG93L3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYmVuaG9hZC9Qcm9qZWN0cy9tY2stb3V0bG9vay1hZGRpbi9zcmMvYXBwL3NoZWxsL2Jvb2tpbmcvcGhvbmUtYm9vdGgtZmxvdy9yZXN1bHQvcmVzdWx0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztpQ0NFaUM7QUQrQmpDOzt1QkM1QnVCO0FEeUN2Qjs7c0JDdENzQjtBQ0x0QjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWSxFQUFBO0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMkNBQTJCO0VBQzNCLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsb0JBQW9CLEVBQUE7QUFHeEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1SEFBMkY7VUFBM0YsK0dBQTJGO0VBQzNGLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsVUFBVSxFQUFBO0FBR2Q7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhLEVBQUE7QUFOakI7SUFRUSxXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQix5QkZ6RFMsRUFBQTtBRTZEakI7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9ib29raW5nL3Bob25lLWJvb3RoLWZsb3cvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2VzczogIzMwOWI0MDtcbiRzdWNjZXNzLWFsdDogIzQyODVmNDtcbiRlcnJvcjogI2RiMjkxZDtcbiRwZW5kaW5nOiAjRkY5ODAwO1xuJG5ldXRyYWw6ICM3OTc5Nzk7XG5cbiRiYWNrZ3JvdW5kOiAjZWNmMWY1O1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuJGNvbG9yLXByaW1hcnktd2lyZWZyYW1lOnJnYmEoMCwgMCwgMCwgMC42MSk7XG4kaGVhZGVyLWJnOiAjZmZmO1xuJGhlYWRlci1jb2xvcjogcmdiYSgjMDAyOTYwLCAuODcpO1xuXG4kdGlsZS1jb2xvcjogI2ZmZjtcbiR0aWxlLWJvcmRlcjogI2ZmZjtcblxuJGhlbHAtYm9yZGVyOiByZ2JhKCMwMDAsIC4yKTtcblxuJGNvbG9yLXByaW1hcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5OiAjNDA0ODVhO1xuJGNvbG9yLXRlcm5hcnk6ICNjNzk5NjE7XG4kY29sb3ItcXVhdGVybmFyeTogIzdkZDZkNjtcbiRjb2xvci1xdWludGVybmFyeTogIzRjNWM2YztcbiRjb2xvci1zZXh0ZXJuYXJ5OiAjN2ZlNDNiO1xuXG4kdGltZWxpbmUtYmc6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNEY1RjcwIDAlLCAjMEYxMjE1IDEwMCUpO1xuJHRpbWVsaW5lLWV2ZW50OiAkZXJyb3I7XG4kdGltZWxpbmUtYm9va2luZzogJGNvbG9yLXF1YXRlcm5hcnk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNHB4O1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRtYWluLWZvbnQ6ICRmb250LXN0YWNrO1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENEVERjE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAyZW07IH1cblxuLmNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgaGVpZ2h0OiAxMjB2bWluO1xuICB3aWR0aDogMTIwdm1pbjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDc2OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDE7IH1cblxuLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICBmb250LXNpemU6IDEuMmVtOyB9XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMS4yNWVtO1xuICB3aWR0aDogMS4yNWVtO1xuICBtYXJnaW46IC4wNWVtOyB9XG4gIC5pY29uIGltZyB7XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICMzMDliNDA7IH1cblxuLnRvcCB7XG4gIGZvbnQtc2l6ZTogNmVtOyB9XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IC4yNWVtIDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAuNWVtIDA7IH1cblxuLm9wdGlvbiB7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUY5RkY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbjogLjJlbSAuMjVlbTtcbiAgY29sb3I6ICM2YTRiMjU7IH1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNENEVERjE7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogMmVtO1xufVxuXG4uY2lyY2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGhlaWdodDogMTIwdm1pbjtcbiAgICB3aWR0aDogMTIwdm1pbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjU0KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLC4xMik7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uaW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS4yNWVtO1xuICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgbWFyZ2luOiAuMDVlbTtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgJHN1Y2Nlc3M7XG4gICAgfVxufVxuXG4udG9wIHtcbiAgICBmb250LXNpemU6IDZlbTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW46IC4yNWVtIDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IC41ZW0gMDtcbn1cblxuLm9wdGlvbiB7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjlGRjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbjogLjJlbSAuMjVlbTtcbiAgICBjb2xvcjogZGFya2VuKCRjb2xvci10ZXJuYXJ5LCAzMCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/result/result.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/result/result.component.ts ***!
  \***************************************************************************/
/*! exports provided: PhoneBoothFlowResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneBoothFlowResultComponent", function() { return PhoneBoothFlowResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PhoneBoothFlowResultComponent = /** @class */ (function (_super) {
    __extends(PhoneBoothFlowResultComponent, _super);
    function PhoneBoothFlowResultComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    PhoneBoothFlowResultComponent.prototype.ngOnInit = function () {
        this.clearForm();
    };
    PhoneBoothFlowResultComponent.prototype.clear = function (name) {
        if (localStorage) {
            localStorage.removeItem("STAFF.phone-booth." + name);
        }
    };
    PhoneBoothFlowResultComponent.prototype.clearForm = function () {
        this.clear('filters');
        this.clear('space');
        this.clear('attendees');
    };
    PhoneBoothFlowResultComponent.prototype.toHome = function () { this.service.navigate('home'); };
    PhoneBoothFlowResultComponent.prototype.toFeedback = function () { this.service.navigate(['book', 'feedback']); };
    PhoneBoothFlowResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'phone-booth-flow-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/shell/booking/phone-booth-flow/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/shell/booking/phone-booth-flow/result/result.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], PhoneBoothFlowResultComponent);
    return PhoneBoothFlowResultComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/select-booth/select-booth.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/select-booth/select-booth.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"block header\">\n        <div class=\"content\">\n            <div class=\"header to-upper\">Available phone booths</div>\n            <div class=\"filters\">\n                <btn klass=\"no-margin secondary\" (tapped)=\"toFilters()\">\n                    <div class=\"icon\"><i class=\"material-icons\">filter_list</i></div>\n                    <div class=\"text\">Add filters</div>\n                </btn>\n            </div>\n            <div class=\"filter-list\" *ngIf=\"model.filter_list\">\n                <div class=\"filter\" *ngFor=\"let item of model.filter_list\">\n                    <div class=\"text\">{{item.value}}</div>\n                    <div class=\"icon\" *ngIf=\"item.type !== -1\" (touchrelease)=\"clearFilter(item)\">\n                        <i class=\"material-icons\">close</i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"block list\">\n        <div class=\"content\">\n            <div class=\"item\" *ngFor=\"let item of (model.filtered_items || [])\">\n                <div class=\"details\">\n                    <div class=\"detail\">\n                        <div class=\"icon\">\n                            <img src=\"assets/img/location.svg\">\n                        </div>\n                        <div class=\"text\">{{item.level?.name}}, {{item.name}}</div>\n                    </div>\n                    <div class=\"detail\">\n                        <div class=\"icon\">\n                            <img src=\"assets/img/persona.svg\">\n                        </div>\n                        <div class=\"text\">{{item.capacity}} {{item.capacity === 1 ? 'person' : 'people'}}</div>\n                    </div>\n                </div>\n                <div class=\"options\">\n                    <btn (tapped)=\"toBook(item)\">Book</btn>\n                    <btn (tapped)=\"toMap(item)\">Map</btn>\n                </div>\n            </div>\n        </div>\n        <div class=\"no-item\" center *ngIf=\"!model.filtered_items || model.filtered_items.length <= 0\">\n            <div class=\"icon\">\n                <i class=\"material-icons\">close</i>\n            </div>\n            <div class=\"text\">No spaces found</div>\n        </div>\n    </div>\n    <div class=\"block date\">\n        <div class=\"content\">\n            <div class=\"date-toggle\">\n                <div class=\"arrow prev\" (touchrelease)=\"changeDate(-1)\">\n                    <i class=\"material-icons\">keyboard_arrow_left</i>\n                </div>\n                <div class=\"day\">{{model.date}}</div>\n                <div class=\"arrow next\" (touchrelease)=\"changeDate(1)\">\n                    <i class=\"material-icons\">keyboard_arrow_right</i>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/select-booth/select-booth.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/select-booth/select-booth.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.container > * {\n    width: 100%; }\n.block {\n  position: relative;\n  width: 100%;\n  padding: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.block.date {\n    background-color: #fff;\n    border-top: 1px solid #f0f0f0; }\n.date .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.filter-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap; }\n.filter {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: .25em;\n  white-space: nowrap;\n  background-color: #c79961;\n  border: 1px solid #8f6633;\n  color: rgba(0, 0, 0, 0.54); }\n.filter .text {\n    -webkit-box-flex: 1;\n            flex: 1;\n    margin: .5em; }\n.filter .icon {\n    margin-left: 0; }\n.date-toggle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #4285F4;\n  font-size: 1.2em; }\n.date-toggle .arrow {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    height: 1.5em;\n    width: 1.5em;\n    border: 1px solid #4285F4;\n    font-size: 1.2em;\n    cursor: pointer; }\n.date-toggle .day {\n    border-top: 1px solid #4285F4;\n    border-bottom: 1px solid #4285F4;\n    padding: .25em .5em; }\n.header {\n  font-size: 1.2em; }\n.header .filters {\n    margin: .5em 0; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  min-width: 1.25em;\n  margin: .25em; }\n.icon img {\n    height: 1em; }\n.item {\n  background-color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 1em;\n  padding: .5em;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n.item:last-child {\n    margin: 0; }\n.item .icon {\n    font-size: 1.5em; }\n.details {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 50%; }\n.detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 1.2em; }\n.detail .text {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n.options {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\nbtn {\n  font-size: 1.2em; }\nbtn .icon {\n    margin-left: -.125em; }\n.list {\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 50%;\n  overflow: auto;\n  background-color: #D4EDF1;\n  -webkit-box-align: start;\n          align-items: flex-start; }\n.content {\n  max-width: 768px;\n  width: 100%; }\nbtn {\n  font-size: 1.2em; }\nbtn .icon {\n    margin-left: -.125em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9waG9uZS1ib290aC1mbG93L3NlbGVjdC1ib290aC9zZWxlY3QtYm9vdGguY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYmVuaG9hZC9Qcm9qZWN0cy9tY2stb3V0bG9vay1hZGRpbi9zcmMvYXBwL3NoZWxsL2Jvb2tpbmcvcGhvbmUtYm9vdGgtZmxvdy9zZWxlY3QtYm9vdGgvc2VsZWN0LWJvb3RoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztpQ0NFaUM7QUQrQmpDOzt1QkM1QnVCO0FEeUN2Qjs7c0JDdENzQjtBQ050QjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7QUFOMUI7SUFRUSxXQUFXLEVBQUE7QUFJbkI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtBQU4zQjtJQVFRLHNCQUFzQjtJQUN0Qiw2QkFBNkIsRUFBQTtBQUlyQztFQUVRLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0FBSS9CO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZSxFQUFBO0FBR25CO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCRnJCbUI7RUVzQm5CLHlCQUE0QztFQUM1QywwQkFBZ0IsRUFBQTtBQVBwQjtJQVNRLG1CQUFPO1lBQVAsT0FBTztJQUNQLFlBQVksRUFBQTtBQVZwQjtJQWNRLGNBQWMsRUFBQTtBQUl0QjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsY0Z2Q21CO0VFd0NuQixnQkFBZ0IsRUFBQTtBQUpwQjtJQU1RLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCRi9DZTtJRWdEZixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0FBYnZCO0lBZ0JRLDZCRnBEZTtJRXFEZixnQ0ZyRGU7SUVzRGYsbUJBQW1CLEVBQUE7QUFJM0I7RUFDSSxnQkFBZ0IsRUFBQTtBQURwQjtJQUdRLGNBQWMsRUFBQTtBQUl0QjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTtBQU5qQjtJQVFRLFdBQVcsRUFBQTtBQUluQjtFQUNJLHNCQUFzQjtFQUN0QixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUhBQTJGO1VBQTNGLCtHQUEyRixFQUFBO0FBTi9GO0lBUVEsU0FBUyxFQUFBO0FBUmpCO0lBV1EsZ0JBQWdCLEVBQUE7QUFJeEI7RUFDSSxtQkFBTztVQUFQLE9BQU87RUFDUCxVQUFVLEVBQUE7QUFHZDtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFIcEI7SUFLUSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBO0FBSS9CO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBO0FBRzFCO0VBQ0ksZ0JBQWdCLEVBQUE7QUFEcEI7SUFHUSxvQkFBb0IsRUFBQTtBQUk1QjtFQUNJLG1CQUFPO1VBQVAsT0FBTztFQUNQLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtBQUczQjtFQUNJLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7QUFHZjtFQUNJLGdCQUFnQixFQUFBO0FBRHBCO0lBR1Esb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9ib29raW5nL3Bob25lLWJvb3RoLWZsb3cvc2VsZWN0LWJvb3RoL3NlbGVjdC1ib290aC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2VzczogIzMwOWI0MDtcbiRzdWNjZXNzLWFsdDogIzQyODVmNDtcbiRlcnJvcjogI2RiMjkxZDtcbiRwZW5kaW5nOiAjRkY5ODAwO1xuJG5ldXRyYWw6ICM3OTc5Nzk7XG5cbiRiYWNrZ3JvdW5kOiAjZWNmMWY1O1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuJGNvbG9yLXByaW1hcnktd2lyZWZyYW1lOnJnYmEoMCwgMCwgMCwgMC42MSk7XG4kaGVhZGVyLWJnOiAjZmZmO1xuJGhlYWRlci1jb2xvcjogcmdiYSgjMDAyOTYwLCAuODcpO1xuXG4kdGlsZS1jb2xvcjogI2ZmZjtcbiR0aWxlLWJvcmRlcjogI2ZmZjtcblxuJGhlbHAtYm9yZGVyOiByZ2JhKCMwMDAsIC4yKTtcblxuJGNvbG9yLXByaW1hcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5OiAjNDA0ODVhO1xuJGNvbG9yLXRlcm5hcnk6ICNjNzk5NjE7XG4kY29sb3ItcXVhdGVybmFyeTogIzdkZDZkNjtcbiRjb2xvci1xdWludGVybmFyeTogIzRjNWM2YztcbiRjb2xvci1zZXh0ZXJuYXJ5OiAjN2ZlNDNiO1xuXG4kdGltZWxpbmUtYmc6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNEY1RjcwIDAlLCAjMEYxMjE1IDEwMCUpO1xuJHRpbWVsaW5lLWV2ZW50OiAkZXJyb3I7XG4kdGltZWxpbmUtYm9va2luZzogJGNvbG9yLXF1YXRlcm5hcnk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNHB4O1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRtYWluLWZvbnQ6ICRmb250LXN0YWNrO1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAuY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7IH1cblxuLmJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAuYmxvY2suZGF0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDsgfVxuXG4uZGF0ZSAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi5maWx0ZXItbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDsgfVxuXG4uZmlsdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAuMjVlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3OTk2MTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhmNjYzMztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cbiAgLmZpbHRlciAudGV4dCB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW46IC41ZW07IH1cbiAgLmZpbHRlciAuaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cblxuLmRhdGUtdG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM0Mjg1RjQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07IH1cbiAgLmRhdGUtdG9nZ2xlIC5hcnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0Mjg1RjQ7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmRhdGUtdG9nZ2xlIC5kYXkge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDI4NUY0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDI4NUY0O1xuICAgIHBhZGRpbmc6IC4yNWVtIC41ZW07IH1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07IH1cbiAgLmhlYWRlciAuZmlsdGVycyB7XG4gICAgbWFyZ2luOiAuNWVtIDA7IH1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjI1ZW07XG4gIG1pbi13aWR0aDogMS4yNWVtO1xuICBtYXJnaW46IC4yNWVtOyB9XG4gIC5pY29uIGltZyB7XG4gICAgaGVpZ2h0OiAxZW07IH1cblxuLml0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIHBhZGRpbmc6IC41ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAuaXRlbTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDA7IH1cbiAgLml0ZW0gLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07IH1cblxuLmRldGFpbHMge1xuICBmbGV4OiAxO1xuICB3aWR0aDogNTAlOyB9XG5cbi5kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtOyB9XG4gIC5kZXRhaWwgLnRleHQge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuYnRuIHtcbiAgZm9udC1zaXplOiAxLjJlbTsgfVxuICBidG4gLmljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAtLjEyNWVtOyB9XG5cbi5saXN0IHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA1MCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRFREYxO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxuXG4uY29udGVudCB7XG4gIG1heC13aWR0aDogNzY4cHg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbmJ0biB7XG4gIGZvbnQtc2l6ZTogMS4yZW07IH1cbiAgYnRuIC5pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogLS4xMjVlbTsgfVxuIiwiQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAmID4gKiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmJsb2NrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAmLmRhdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICB9XG59XG5cbi5kYXRlIHtcbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbn1cblxuLmZpbHRlci1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZpbHRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogLjI1ZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGVybmFyeTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJGNvbG9yLXRlcm5hcnksIDIwKTtcbiAgICBjb2xvcjogcmdiYSgjMDAwLCAuNTQpO1xuICAgIC50ZXh0IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWFyZ2luOiAuNWVtO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxufVxuXG4uZGF0ZS10b2dnbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAuYXJyb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuZGF5IHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIHBhZGRpbmc6IC4yNWVtIC41ZW07XG4gICAgfVxufVxuXG4uaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIC5maWx0ZXJzIHtcbiAgICAgICAgbWFyZ2luOiAuNWVtIDA7XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS4yNWVtO1xuICAgIG1pbi13aWR0aDogMS4yNWVtO1xuICAgIG1hcmdpbjogLjI1ZW07XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgfVxufVxuXG4uaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwuMTIpO1xuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cbn1cblxuLmRldGFpbHMge1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmRldGFpbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgLnRleHQge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG59XG5cbi5vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuYnRuIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIC5pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0uMTI1ZW07XG4gICAgfVxufVxuXG4ubGlzdCB7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRFREYxO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuYnRuIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIC5pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0uMTI1ZW07XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shell/booking/phone-booth-flow/select-booth/select-booth.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shell/booking/phone-booth-flow/select-booth/select-booth.component.ts ***!
  \***************************************************************************************/
/*! exports provided: PhoneBoothFlowSelectBoothComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhoneBoothFlowSelectBoothComponent", function() { return PhoneBoothFlowSelectBoothComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utility.class */ "./src/app/shared/utility.class.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PhoneBoothFlowSelectBoothComponent = /** @class */ (function (_super) {
    __extends(PhoneBoothFlowSelectBoothComponent, _super);
    function PhoneBoothFlowSelectBoothComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.space = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.filtersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {};
        return _this;
    }
    PhoneBoothFlowSelectBoothComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.obs.rooms = this.service.Rooms.listen('list', function (rooms) { return _this.search(); });
        if (!this.filters) {
            this.filters = {};
        }
    };
    PhoneBoothFlowSelectBoothComponent.prototype.ngOnChanges = function (changes) {
        if (changes.filters) {
            this.search();
            this.updateFilterList();
        }
    };
    PhoneBoothFlowSelectBoothComponent.prototype.search = function () {
        var _this = this;
        if (!this.service.Buildings.current()) {
            setTimeout(function () { return _this.search(); }, 300);
        }
        this.updateDate();
        this.loading.emit('Searching...');
        if (!this.filters) {
            this.filters = {};
        }
        this.service.Rooms.available({
            date: this.filters.date,
            duration: this.filters.duration
        }).then(function (list) {
            _this.loading.emit(false);
            _this.model.rooms = _this.service.Rooms.list();
            _this.model.items = list;
            _this.model.search_results = list;
            for (var _i = 0, _a = _this.model.items; _i < _a.length; _i++) {
                var rm = _a[_i];
                rm.in_use_at_time = true;
                for (var _b = 0, _c = _this.model.search_results; _b < _c.length; _b++) {
                    var i = _c[_b];
                    if (rm.id === i.id) {
                        rm.in_use_at_time = false;
                        break;
                    }
                }
            }
            _this.filter();
        }, function (err) { return _this.loading.emit(false); });
    };
    PhoneBoothFlowSelectBoothComponent.prototype.filter = function () {
        this.loading.emit('Filtering...');
        this.model.filtered_items = [];
        if (this.filters) {
            // Set level
            var level = this.service.Buildings.getLevel(this.filters.level);
            // Set Capacity
            var capacity = 1;
            if (this.model.items) {
                var item_list = this.model.search_results;
                for (var _i = 0, item_list_1 = item_list; _i < item_list_1.length; _i++) {
                    var rm = item_list_1[_i];
                    rm.in_use_at_time = true;
                    for (var _a = 0, _b = this.model.search_results; _a < _b.length; _a++) {
                        var i = _b[_a];
                        if (rm.id === i.id) {
                            rm.in_use_at_time = false;
                            break;
                        }
                    }
                }
                for (var _c = 0, item_list_2 = item_list; _c < item_list_2.length; _c++) {
                    var item = item_list_2[_c];
                    var match = true;
                    // Check levels
                    match = match && (!level || (level.id === -1 || item.level.id === level.id));
                    // Check client floor when external users present
                    match = match && (!this.model.has_external || !this.model.external_floors || this.model.external_floors.length <= 0 || (this.model.external_floors.indexOf(item.level.type.toLowerCase()) >= 0));
                    // Check level type
                    match = match && (!this.model.floor || (item.level.type.toLowerCase() === this.model.floor.toLowerCase()));
                    // Check capacity
                    match = match && (capacity <= 0 || item.capacity === capacity);
                    var count = 0;
                    var found = 0;
                    for (var _d = 0, _e = (this.filters.extras || []); _d < _e.length; _d++) {
                        var e = _e[_d];
                        if (e.filter) {
                            count++;
                        }
                        for (var _f = 0, _g = item.extras; _f < _g.length; _f++) {
                            var r_e = _g[_f];
                            if (r_e.id === e.id && e.filter) {
                                found++;
                            }
                        }
                    }
                    match = match && (found >= count);
                    if (match) {
                        this.model.filtered_items.push(item);
                    }
                }
            }
        }
        else {
            this.model.filtered_items = this.model.filtered_items.concat(this.model.items || []);
        }
        this.model.filtered_items.sort(function (a, b) {
            var da = {
                lvl: (a.level ? a.level.name : '') || '',
                name: a.name
            };
            var db = {
                lvl: (a.level ? b.level.name : b.name) || '',
                name: b.name
            };
            return a.order - b.order || da.lvl.localeCompare(db.lvl) || da.name.localeCompare(db.name);
        });
        if (!this.model.searching) {
            this.loading.emit(false);
        }
    };
    PhoneBoothFlowSelectBoothComponent.prototype.updateDate = function () {
        this.model.date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date).format('dddd D/MM/YYYY');
    };
    PhoneBoothFlowSelectBoothComponent.prototype.changeDate = function (offset) {
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
        date.add(offset, 'd');
        var now = moment__WEBPACK_IMPORTED_MODULE_4__();
        while (date.isBefore(now, 'm')) {
            date.add(1, 'd');
        }
        this.filters.date = date.valueOf();
        this.post();
        this.search();
    };
    PhoneBoothFlowSelectBoothComponent.prototype.post = function () {
        var _this = this;
        this.timeout('post', function () {
            _this.updateFilterList();
            _this.filtersChange.emit(_this.filters);
        });
    };
    PhoneBoothFlowSelectBoothComponent.prototype.updateFilterList = function () {
        this.model.filter_list = [];
        var level = this.service.Buildings.getLevel(this.filters.level);
        this.model.filter_list.push({
            id: 'level',
            type: level && level.name ? level.id : -1,
            value: level ? level.name || 'Any Level' : 'Any Level'
        });
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
        this.model.filter_list.push({
            id: 'date',
            type: date.isValid() && date.isSameOrAfter(moment__WEBPACK_IMPORTED_MODULE_4__(), 'm') ? 1 : -1,
            value: date.format('hh:mm A')
        });
        this.model.filter_list.push({
            id: 'duration',
            type: this.filters.duration && this.filters.duration > 30 ? 1 : -1,
            value: _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__["Utils"].humaniseDuration(this.filters.duration || 30, true)
        });
        for (var _i = 0, _a = (this.filters.extras || []); _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.filter) {
                this.model.filter_list.push({
                    id: 'extras',
                    type: item.id,
                    value: item.name
                });
            }
        }
    };
    PhoneBoothFlowSelectBoothComponent.prototype.clearFilter = function (filter) {
        var change = false;
        if (filter.type !== -1) {
            if (filter.id === 'extras') {
                for (var _i = 0, _a = (this.filters.extras || []); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.filter && item.id === filter.type) {
                        item.filter = false;
                        change = true;
                    }
                }
            }
            else {
                switch (filter.id) {
                    case 'level':
                        this.filters.level = null;
                        change = true;
                        break;
                    case 'capacity':
                        this.filters.capacity = -1;
                        change = true;
                        break;
                    case 'duration':
                        this.filters.duration = 30;
                        change = true;
                        break;
                    case 'date':
                        var now = moment__WEBPACK_IMPORTED_MODULE_4__();
                        var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
                        date.hours(now.hours()).minutes(Math.ceil(now.minutes() / 5) * 5);
                        this.filters.date = date.valueOf();
                        change = true;
                        break;
                }
            }
        }
        if (change) {
            this.post();
            this.search();
        }
    };
    PhoneBoothFlowSelectBoothComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'phone-booth', name], query);
    };
    PhoneBoothFlowSelectBoothComponent.prototype.toBook = function (rm) {
        var _this = this;
        this.loading.emit('Checking room is still available...');
        this.service.Rooms.isAvailable(rm.id, this.filters.date, this.filters.duration)
            .then(function () {
            _this.loading.emit(false);
            _this.space.emit(rm.id);
            _this.to('confirm-details');
        }, function () {
            _this.service.error("Room \"" + rm.name + "\" is now unavailable");
            _this.search();
        });
    };
    PhoneBoothFlowSelectBoothComponent.prototype.toMap = function (rm) {
        this.to('confirm-details', { room_id: rm.id });
    };
    PhoneBoothFlowSelectBoothComponent.prototype.toFilters = function () { this.to('main'); };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PhoneBoothFlowSelectBoothComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PhoneBoothFlowSelectBoothComponent.prototype, "space", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], PhoneBoothFlowSelectBoothComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PhoneBoothFlowSelectBoothComponent.prototype, "filtersChange", void 0);
    PhoneBoothFlowSelectBoothComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'phone-booth-flow-select-booth',
            template: __webpack_require__(/*! ./select-booth.component.html */ "./src/app/shell/booking/phone-booth-flow/select-booth/select-booth.component.html"),
            styles: [__webpack_require__(/*! ./select-booth.component.scss */ "./src/app/shell/booking/phone-booth-flow/select-booth/select-booth.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], PhoneBoothFlowSelectBoothComponent);
    return PhoneBoothFlowSelectBoothComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/select-flow/select-flow.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/shell/booking/select-flow/select-flow.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"topbar\">\n        <div class=\"text to-upper\">\n            Booking Types\n        </div>\n    </div>\n    <div class=\"flow-step\">\n        <div class=\"content\">\n            <div class=\"item\" (touchrelease)=\"to('space')\">\n                <div class=\"icon\">\n                    <img src=\"assets/img/book_room.svg\">\n                </div>\n                <div class=\"text\">Book a meeting room</div>\n            </div>\n            <div class=\"item\" (touchrelease)=\"to('phone-booth')\">\n                <div class=\"icon\">\n                    <img src=\"assets/img/book_booth.svg\">\n                </div>\n                <div class=\"text\">Book a phone booth</div>\n            </div>\n            <div class=\"item\" (touchrelease)=\"to('visitor')\">\n                <div class=\"icon\">\n                    <img src=\"assets/img/external.svg\">\n                </div>\n                <div class=\"text\">Invite external visitor</div>\n            </div>\n            <div class=\"item\" (touchrelease)=\"to('desk')\">\n                <div class=\"icon\">\n                    <img src=\"assets/img/book_desk.svg\">\n                </div>\n                <div class=\"text\">Book a desk</div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shell/booking/select-flow/select-flow.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shell/booking/select-flow/select-flow.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.container > * {\n    width: 100%; }\n.topbar {\n  width: 100%;\n  min-height: 3em;\n  background-color: #B8123E;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding-left: 1em; }\n.topbar > * {\n    font-size: 1.2em; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .25em; }\n.icon img {\n    height: 1em; }\n.content {\n  max-width: 768px;\n  width: 100%;\n  margin: auto; }\n.item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 1.5em;\n  border-bottom: 1px solid #e0e0e0;\n  margin: 0 1.5em; }\n.item .icon {\n    font-size: 2.5em;\n    margin-left: 0; }\n.item .text {\n    text-transform: uppercase; }\n.flow-step {\n  -webkit-box-flex: 1;\n          flex: 1;\n  overflow: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9zZWxlY3QtZmxvdy9zZWxlY3QtZmxvdy5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hlbGwvYm9va2luZy9zZWxlY3QtZmxvdy9zZWxlY3QtZmxvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7aUNDRWlDO0FEK0JqQzs7dUJDNUJ1QjtBRHlDdkI7O3NCQ3RDc0I7QUNOdEI7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7QUFQMUI7SUFTUSxXQUFXLEVBQUE7QUFJbkI7RUFDSSxXQUFXO0VBQ1gsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixpQkFBaUIsRUFBQTtBQVByQjtJQVNRLGdCQUFnQixFQUFBO0FBSXhCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYSxFQUFBO0FBTmpCO0lBUVEsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFHaEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixnQ0FBZ0M7RUFDaEMsZUFBZSxFQUFBO0FBTG5CO0lBUVEsZ0JBQWdCO0lBQ2hCLGNBQWMsRUFBQTtBQVR0QjtJQWFRLHlCQUF5QixFQUFBO0FBSWpDO0VBQ0ksbUJBQU87VUFBUCxPQUFPO0VBQ1AsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvYm9va2luZy9zZWxlY3QtZmxvdy9zZWxlY3QtZmxvdy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2VzczogIzMwOWI0MDtcbiRzdWNjZXNzLWFsdDogIzQyODVmNDtcbiRlcnJvcjogI2RiMjkxZDtcbiRwZW5kaW5nOiAjRkY5ODAwO1xuJG5ldXRyYWw6ICM3OTc5Nzk7XG5cbiRiYWNrZ3JvdW5kOiAjZWNmMWY1O1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuJGNvbG9yLXByaW1hcnktd2lyZWZyYW1lOnJnYmEoMCwgMCwgMCwgMC42MSk7XG4kaGVhZGVyLWJnOiAjZmZmO1xuJGhlYWRlci1jb2xvcjogcmdiYSgjMDAyOTYwLCAuODcpO1xuXG4kdGlsZS1jb2xvcjogI2ZmZjtcbiR0aWxlLWJvcmRlcjogI2ZmZjtcblxuJGhlbHAtYm9yZGVyOiByZ2JhKCMwMDAsIC4yKTtcblxuJGNvbG9yLXByaW1hcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5OiAjNDA0ODVhO1xuJGNvbG9yLXRlcm5hcnk6ICNjNzk5NjE7XG4kY29sb3ItcXVhdGVybmFyeTogIzdkZDZkNjtcbiRjb2xvci1xdWludGVybmFyeTogIzRjNWM2YztcbiRjb2xvci1zZXh0ZXJuYXJ5OiAjN2ZlNDNiO1xuXG4kdGltZWxpbmUtYmc6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNEY1RjcwIDAlLCAjMEYxMjE1IDEwMCUpO1xuJHRpbWVsaW5lLWV2ZW50OiAkZXJyb3I7XG4kdGltZWxpbmUtYm9va2luZzogJGNvbG9yLXF1YXRlcm5hcnk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNHB4O1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRtYWluLWZvbnQ6ICRmb250LXN0YWNrO1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAuY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7IH1cblxuLnRvcGJhciB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAzZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNCODEyM0U7XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDFlbTsgfVxuICAudG9wYmFyID4gKiB7XG4gICAgZm9udC1zaXplOiAxLjJlbTsgfVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEuMjVlbTtcbiAgd2lkdGg6IDEuMjVlbTtcbiAgbWFyZ2luOiAuMjVlbTsgfVxuICAuaWNvbiBpbWcge1xuICAgIGhlaWdodDogMWVtOyB9XG5cbi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA3NjhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bzsgfVxuXG4uaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuICBtYXJnaW46IDAgMS41ZW07IH1cbiAgLml0ZW0gLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMi41ZW07XG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cbiAgLml0ZW0gLnRleHQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLmZsb3ctc3RlcCB7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBhdXRvOyB9XG4iLCJAaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgJiA+ICoge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi50b3BiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjgxMjNFO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDFlbTtcbiAgICAmID4gKiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS4yNWVtO1xuICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgbWFyZ2luOiAuMjVlbTtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICB9XG59XG5cbi5jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTBlMGUwO1xuICAgIG1hcmdpbjogMCAxLjVlbTtcblxuICAgIC5pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbn1cblxuLmZsb3ctc3RlcCB7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shell/booking/select-flow/select-flow.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/shell/booking/select-flow/select-flow.component.ts ***!
  \********************************************************************/
/*! exports provided: SelectBookingFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectBookingFlowComponent", function() { return SelectBookingFlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SelectBookingFlowComponent = /** @class */ (function (_super) {
    __extends(SelectBookingFlowComponent, _super);
    function SelectBookingFlowComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    SelectBookingFlowComponent.prototype.ngOnInit = function () {
    };
    SelectBookingFlowComponent.prototype.to = function (name) {
        this.service.navigate(['book', name, 'main']);
    };
    SelectBookingFlowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'select-booking-flow',
            template: __webpack_require__(/*! ./select-flow.component.html */ "./src/app/shell/booking/select-flow/select-flow.component.html"),
            styles: [__webpack_require__(/*! ./select-flow.component.scss */ "./src/app/shell/booking/select-flow/select-flow.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], SelectBookingFlowComponent);
    return SelectBookingFlowComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/space-flow/attendees/attendees.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/attendees/attendees.component.ts ***!
  \***************************************************************************/
/*! exports provided: SpaceFlowAttendeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceFlowAttendeesComponent", function() { return SpaceFlowAttendeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utility.class */ "./src/app/shared/utility.class.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpaceFlowAttendeesComponent = /** @class */ (function (_super) {
    __extends(SpaceFlowAttendeesComponent, _super);
    function SpaceFlowAttendeesComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.attendeesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {};
        return _this;
    }
    SpaceFlowAttendeesComponent.prototype.ngOnInit = function () {
        if (!this.attendees) {
            this.attendees = [];
        }
    };
    SpaceFlowAttendeesComponent.prototype.ngOnChanges = function (changes) {
        if (changes.filters) {
            this.search();
        }
    };
    SpaceFlowAttendeesComponent.prototype.search = function () {
        var _this = this;
        this.loading.emit('Searching...');
        if (!this.attendees) {
            this.attendees = [];
        }
        if (!this.model.external) {
            this.service.Users.query({ q: this.model.search }).then(function (list) {
                _this.loading.emit(false);
                _this.model.users = list;
                _this.filter();
            }, function (err) { return _this.loading.emit(false); });
        }
        else {
            this.loading.emit(false);
            this.model.users = _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__["Utils"].filter((this.model.search || ''), this.service.Contacts.list(), ['name', 'email']);
            this.filter();
        }
    };
    SpaceFlowAttendeesComponent.prototype.filter = function () {
        var _this = this;
        (this.model.users || []).forEach(function (item) {
            var exists = _this.attendees.find(function (a) { return a.email === item.email; });
            if (exists) {
                item = exists;
            }
        });
        this.loading.emit('Filtering...');
        this.model.filtered_items = this.model.users;
        this.loading.emit(false);
    };
    SpaceFlowAttendeesComponent.prototype.add = function (user) {
        if (!this.model.attendees) {
            this.model.attendees = [];
        }
        var exists = this.model.attendees.find(function (a) { return a.email === user.email; });
        if (exists) {
            user.added = false;
            this.model.attendees.splice(this.model.attendees.indexOf(exists), 1);
        }
        else {
            user.added = true;
            this.model.attendees.push(user);
        }
    };
    SpaceFlowAttendeesComponent.prototype.new = function () {
        this.to('new-contact');
    };
    SpaceFlowAttendeesComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'space', name], query);
    };
    SpaceFlowAttendeesComponent.prototype.cancel = function () { this.back.emit(); };
    SpaceFlowAttendeesComponent.prototype.toConfirm = function () {
        var _this = this;
        if (!this.attendees) {
            this.attendees = [];
        }
        if (this.model.attendees) {
            this.model.attendees.forEach(function (item) {
                var exists = _this.attendees.find(function (a) { return a.email === item.email; });
                if (!exists) {
                    _this.attendees.push(item);
                }
            });
            this.attendeesChange.emit(this.attendees);
        }
        this.to('confirm-attendees');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SpaceFlowAttendeesComponent.prototype, "attendees", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowAttendeesComponent.prototype, "attendeesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowAttendeesComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowAttendeesComponent.prototype, "back", void 0);
    SpaceFlowAttendeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'space-flow-attendees',
            template: __webpack_require__(/*! ./attendees.template.html */ "./src/app/shell/booking/space-flow/attendees/attendees.template.html"),
            styles: [__webpack_require__(/*! ./attendees.styles.scss */ "./src/app/shell/booking/space-flow/attendees/attendees.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], SpaceFlowAttendeesComponent);
    return SpaceFlowAttendeesComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/space-flow/attendees/attendees.styles.scss":
/*!**************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/attendees/attendees.styles.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.container > * {\n    width: 100%; }\n.block {\n  position: relative;\n  width: 100%;\n  padding: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.block.date {\n    background-color: #fff;\n    border-top: 1px solid #f0f0f0; }\n.block.footer {\n    background-color: #D4EDF1; }\n.date .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.search-field {\n  color: #4285F4; }\n.toggle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-right: .5em;\n  padding: .25em 1em .25em .5em;\n  background-color: #fff;\n  border: 1px solid #ccc; }\n.toggle .icon {\n    height: 1em;\n    width: 1em;\n    font-size: 1.5em;\n    margin: .25em 0; }\n.toggle.active {\n    background-color: #596C80;\n    border-color: #596C80;\n    color: #fff; }\n.toggle .text {\n    padding-left: .5em; }\n.toggle.action {\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin-left: -.2em;\n    min-width: 3em;\n    padding: .25em; }\n.date-toggle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #4285F4;\n  font-size: 1.2em; }\n.date-toggle .arrow {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    height: 1.5em;\n    width: 1.5em;\n    border: 1px solid #4285F4;\n    font-size: 1.2em;\n    cursor: pointer; }\n.date-toggle .day {\n    border-top: 1px solid #4285F4;\n    border-bottom: 1px solid #4285F4;\n    padding: .25em .5em; }\n.header {\n  font-size: 1.2em; }\n.header .filters {\n    margin: .5em 0;\n    display: -webkit-box;\n    display: flex; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  min-width: 1.25em;\n  margin: .25em; }\n.icon img {\n    height: 1em; }\n.item {\n  background-color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 1em;\n  padding: .5em;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n.item:last-child {\n    margin: 0; }\n.item .icon {\n    font-size: 1.5em; }\n.details {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 50%; }\n.detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 1.2em; }\n.detail .text {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n.options {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 3em; }\n.options .button {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    height: 1.5em;\n    width: 1.5em;\n    margin: .25em;\n    font-size: 1.2em;\n    border-radius: 100%;\n    background-color: #f8f8f8;\n    border: 2px solid #ccc;\n    color: #ccc; }\n.options .button.active {\n      background-color: rgba(48, 155, 64, 0.2);\n      border-color: #309b40;\n      color: #309b40; }\n.options .text {\n    color: rgba(0, 0, 0, 0.54); }\n.detail {\n  margin: .25em 0; }\nbtn {\n  font-size: 1.2em; }\nbtn .icon {\n    margin-left: -.125em; }\n.list {\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 50%;\n  overflow: auto;\n  background-color: #D4EDF1;\n  -webkit-box-align: start;\n          align-items: flex-start; }\n.content {\n  max-width: 768px;\n  width: 100%; }\n.footer .content {\n  display: -webkit-box;\n  display: flex;\n  font-size: 1.2em; }\n.footer btn {\n  margin: .25em; }\nbtn {\n  font-size: 1.2em; }\nbtn .icon {\n    margin-left: -.125em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9zcGFjZS1mbG93L2F0dGVuZGVlcy9hdHRlbmRlZXMuc3R5bGVzLnNjc3MiLCIvVXNlcnMvYmVuaG9hZC9Qcm9qZWN0cy9tY2stb3V0bG9vay1hZGRpbi9zcmMvYXBwL3NoZWxsL2Jvb2tpbmcvc3BhY2UtZmxvdy9hdHRlbmRlZXMvYXR0ZW5kZWVzLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztpQ0NFaUM7QUQrQmpDOzt1QkM1QnVCO0FEeUN2Qjs7c0JDdENzQjtBQ050QjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7QUFOMUI7SUFTUSxXQUFXLEVBQUE7QUFJbkI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtBQU4zQjtJQVNRLHNCQUFzQjtJQUN0Qiw2QkFBNkIsRUFBQTtBQVZyQztJQWNRLHlCQUF5QixFQUFBO0FBSWpDO0VBRVEsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7QUFJL0I7RUFDSSxjRnBCbUIsRUFBQTtBRXVCdkI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0Isc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFBO0FBTjFCO0lBU1EsV0FBVztJQUNYLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0FBWnZCO0lBZ0JRLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsV0FBVyxFQUFBO0FBbEJuQjtJQXNCUSxrQkFBa0IsRUFBQTtBQXRCMUI7SUEwQlEsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLGNBQWMsRUFBQTtBQUl0QjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsY0YzRG1CO0VFNERuQixnQkFBZ0IsRUFBQTtBQUpwQjtJQU9RLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCRnBFZTtJRXFFZixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0FBZHZCO0lBa0JRLDZCRjFFZTtJRTJFZixnQ0YzRWU7SUU0RWYsbUJBQW1CLEVBQUE7QUFJM0I7RUFDSSxnQkFBZ0IsRUFBQTtBQURwQjtJQUlRLGNBQWM7SUFDZCxvQkFBYTtJQUFiLGFBQWEsRUFBQTtBQUlyQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTtBQU5qQjtJQVNRLFdBQVcsRUFBQTtBQUluQjtFQUNJLHNCQUFzQjtFQUN0QixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUhBQTZGO1VBQTdGLCtHQUE2RixFQUFBO0FBTmpHO0lBU1EsU0FBUyxFQUFBO0FBVGpCO0lBYVEsZ0JBQWdCLEVBQUE7QUFJeEI7RUFDSSxtQkFBTztVQUFQLE9BQU87RUFDUCxVQUFVLEVBQUE7QUFHZDtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFIcEI7SUFNUSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBO0FBSS9CO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixVQUFVLEVBQUE7QUFKZDtJQU9RLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsV0FBVyxFQUFBO0FBakJuQjtNQW1CWSx3Q0Y3S0s7TUU4S0wscUJGOUtLO01FK0tMLGNGL0tLLEVBQUE7QUUwSmpCO0lBMEJRLDBCQUFnQixFQUFBO0FBSXhCO0VBQ0ksZUFBZSxFQUFBO0FBR25CO0VBQ0ksZ0JBQWdCLEVBQUE7QUFEcEI7SUFJUSxvQkFBb0IsRUFBQTtBQUk1QjtFQUNJLG1CQUFPO1VBQVAsT0FBTztFQUNQLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtBQUczQjtFQUNJLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7QUFHZjtFQUVRLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGdCQUFnQixFQUFBO0FBSHhCO0VBT1EsYUFBYSxFQUFBO0FBSXJCO0VBQ0ksZ0JBQWdCLEVBQUE7QUFEcEI7SUFJUSxvQkFBb0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2Jvb2tpbmcvc3BhY2UtZmxvdy9hdHRlbmRlZXMvYXR0ZW5kZWVzLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogI2M3OTk2MTtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE0cHg7XG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJG1haW4tZm9udDogJGZvbnQtc3RhY2s7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIC5jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTsgfVxuXG4uYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gIC5ibG9jay5kYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwOyB9XG4gIC5ibG9jay5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNENEVERjE7IH1cblxuLmRhdGUgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4uc2VhcmNoLWZpZWxkIHtcbiAgY29sb3I6ICM0Mjg1RjQ7IH1cblxuLnRvZ2dsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1yaWdodDogLjVlbTtcbiAgcGFkZGluZzogLjI1ZW0gMWVtIC4yNWVtIC41ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7IH1cbiAgLnRvZ2dsZSAuaWNvbiB7XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDFlbTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbjogLjI1ZW0gMDsgfVxuICAudG9nZ2xlLmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU5NkM4MDtcbiAgICBib3JkZXItY29sb3I6ICM1OTZDODA7XG4gICAgY29sb3I6ICNmZmY7IH1cbiAgLnRvZ2dsZSAudGV4dCB7XG4gICAgcGFkZGluZy1sZWZ0OiAuNWVtOyB9XG4gIC50b2dnbGUuYWN0aW9uIHtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tbGVmdDogLS4yZW07XG4gICAgbWluLXdpZHRoOiAzZW07XG4gICAgcGFkZGluZzogLjI1ZW07IH1cblxuLmRhdGUtdG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM0Mjg1RjQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07IH1cbiAgLmRhdGUtdG9nZ2xlIC5hcnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0Mjg1RjQ7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmRhdGUtdG9nZ2xlIC5kYXkge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDI4NUY0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDI4NUY0O1xuICAgIHBhZGRpbmc6IC4yNWVtIC41ZW07IH1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07IH1cbiAgLmhlYWRlciAuZmlsdGVycyB7XG4gICAgbWFyZ2luOiAuNWVtIDA7XG4gICAgZGlzcGxheTogZmxleDsgfVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEuMjVlbTtcbiAgbWluLXdpZHRoOiAxLjI1ZW07XG4gIG1hcmdpbjogLjI1ZW07IH1cbiAgLmljb24gaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTsgfVxuXG4uaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgcGFkZGluZzogLjVlbTtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG4gIC5pdGVtOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbjogMDsgfVxuICAuaXRlbSAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTsgfVxuXG4uZGV0YWlscyB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiA1MCU7IH1cblxuLmRldGFpbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS4yZW07IH1cbiAgLmRldGFpbCAudGV4dCB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyB9XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDNlbTsgfVxuICAub3B0aW9ucyAuYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgbWFyZ2luOiAuMjVlbTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICAgIGNvbG9yOiAjY2NjOyB9XG4gICAgLm9wdGlvbnMgLmJ1dHRvbi5hY3RpdmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0OCwgMTU1LCA2NCwgMC4yKTtcbiAgICAgIGJvcmRlci1jb2xvcjogIzMwOWI0MDtcbiAgICAgIGNvbG9yOiAjMzA5YjQwOyB9XG4gIC5vcHRpb25zIC50ZXh0IHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTsgfVxuXG4uZGV0YWlsIHtcbiAgbWFyZ2luOiAuMjVlbSAwOyB9XG5cbmJ0biB7XG4gIGZvbnQtc2l6ZTogMS4yZW07IH1cbiAgYnRuIC5pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogLS4xMjVlbTsgfVxuXG4ubGlzdCB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNTAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q0RURGMTtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7IH1cblxuLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDc2OHB4O1xuICB3aWR0aDogMTAwJTsgfVxuXG4uZm9vdGVyIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZm9udC1zaXplOiAxLjJlbTsgfVxuXG4uZm9vdGVyIGJ0biB7XG4gIG1hcmdpbjogLjI1ZW07IH1cblxuYnRuIHtcbiAgZm9udC1zaXplOiAxLjJlbTsgfVxuICBidG4gLmljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAtLjEyNWVtOyB9XG4iLCJAaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgJj4qIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uYmxvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgJi5kYXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgfVxuXG4gICAgJi5mb290ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRFREYxO1xuICAgIH1cbn1cblxuLmRhdGUge1xuICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxufVxuXG4uc2VhcmNoLWZpZWxkIHtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG59XG5cbi50b2dnbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG4gICAgcGFkZGluZzogLjI1ZW0gMWVtIC4yNWVtIC41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXG4gICAgLmljb24ge1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgbWFyZ2luOiAuMjVlbSAwO1xuICAgIH1cblxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU5NkM4MDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjNTk2QzgwO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIHBhZGRpbmctbGVmdDogLjVlbTtcbiAgICB9XG5cbiAgICAmLmFjdGlvbiB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBtYXJnaW4tbGVmdDogLS4yZW07XG4gICAgICAgIG1pbi13aWR0aDogM2VtO1xuICAgICAgICBwYWRkaW5nOiAuMjVlbTtcbiAgICB9XG59XG5cbi5kYXRlLXRvZ2dsZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuXG4gICAgLmFycm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgIHdpZHRoOiAxLjVlbTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAuZGF5IHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIHBhZGRpbmc6IC4yNWVtIC41ZW07XG4gICAgfVxufVxuXG4uaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuXG4gICAgLmZpbHRlcnMge1xuICAgICAgICBtYXJnaW46IC41ZW0gMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG59XG5cbi5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgbWluLXdpZHRoOiAxLjI1ZW07XG4gICAgbWFyZ2luOiAuMjVlbTtcblxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgIH1cbn1cblxuLml0ZW0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxufVxuXG4uZGV0YWlscyB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogNTAlO1xufVxuXG4uZGV0YWlsIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcblxuICAgIC50ZXh0IHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxufVxuXG4ub3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDNlbTtcblxuICAgIC5idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgICBtYXJnaW46IC4yNWVtO1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xuICAgICAgICBjb2xvcjogI2NjYztcbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkc3VjY2VzcywgLjIpO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkc3VjY2VzcztcbiAgICAgICAgICAgIGNvbG9yOiAkc3VjY2VzcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZXh0IHtcbiAgICAgICAgY29sb3I6IHJnYmEoIzAwMCwgLjU0KTtcbiAgICB9XG59XG5cbi5kZXRhaWwge1xuICAgIG1hcmdpbjogLjI1ZW0gMDtcbn1cblxuYnRuIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuXG4gICAgLmljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogLS4xMjVlbTtcbiAgICB9XG59XG5cbi5saXN0IHtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogNTAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNENEVERjE7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZm9vdGVyIHtcbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxuXG4gICAgYnRuIHtcbiAgICAgICAgbWFyZ2luOiAuMjVlbTtcbiAgICB9XG59XG5cbmJ0biB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcblxuICAgIC5pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0uMTI1ZW07XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/attendees/attendees.template.html":
/*!****************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/attendees/attendees.template.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"block header\">\n        <div class=\"content\">\n            <div class=\"header to-upper\">Add person</div>\n            <div class=\"filters\">\n                <div class=\"toggle\" [class.active]=\"!model.external\" (touchrelease)=\"model.external = false; search()\">\n                    <div class=\"icon\" *ngIf=\"!model.external\">\n                        <i class=\"material-icons\">done</i>\n                    </div>\n                    <div class=\"text\">AIA Staff</div>\n                </div>\n                <div class=\"toggle\" [class.active]=\"model.external\" (touchrelease)=\"model.external = true; search()\">\n                    <div class=\"icon\" *ngIf=\"model.external\">\n                        <i class=\"material-icons\">done</i>\n                    </div>\n                    <div class=\"text\">My Contacts</div>\n                </div>\n                <div class=\"toggle active action\" *ngIf=\"model.external\" (touchrelease)=\"new()\">\n                    <div class=\"icon\">\n                        <i class=\"material-icons\">add</i>\n                    </div>\n                </div>\n            </div>\n            <div class=\"filter-list\">\n                <label >Search by name:</label>\n                <div class=\"search-field\">\n                    <searchbar [(filter)]=\"model.search\" (filterChange)=\"search()\"></searchbar>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"block list\">\n        <div class=\"content\">\n            <div class=\"item\" *ngFor=\"let item of (model.filtered_items || [])\">\n                <div class=\"details\">\n                    <div class=\"detail\">\n                        <div class=\"text\"><span *ngIf=\"item.title\">{{item.title}} </span>{{item.name}} - {{item.organisation?.name || item.organisation}}</div>\n                    </div>\n                    <div class=\"detail\">\n                        <div class=\"text\">{{item.email}}</div>\n                    </div>\n                </div>\n                <div class=\"options\">\n                    <div class=\"button\" [class.active]=\"item.optional\" (touchrelease)=\"item.optional = !item.optional\">\n                        <i class=\"material-icons\">{{item.optional ? 'done' : '' }}</i>\n                    </div>\n                    <div class=\"text\">Optional</div>\n                </div>\n                <div class=\"options\">\n                    <div class=\"button\" [class.active]=\"item.added\" (touchrelease)=\"add(item)\">\n                        <i class=\"material-icons\">{{item.added ? 'done' : 'add'}}</i>\n                    </div>\n                    <div class=\"text\">Add</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"no-item\" center *ngIf=\"!model.filtered_items || model.filtered_items.length <= 0\">\n            <div class=\"icon\">\n                <i class=\"material-icons\">close</i>\n            </div>\n            <div class=\"text\">No users found</div>\n        </div>\n    </div>\n    <div class=\"block footer\">\n        <div class=\"content\">\n            <btn klass=\"full-width\" (tapped)=\"cancel()\">\n                <div class=\"text\">Cancel</div>\n            </btn>\n            <btn klass=\"full-width\" (tapped)=\"toConfirm()\">\n                <div class=\"text\">Add{{model.attendees && model.attendees.length > 0 ? '(' + model.attendees.length + ')' : '' }}</div>\n            </btn>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/confirm-attendees/confirm-attendees.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/confirm-attendees/confirm-attendees.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SpaceFlowConfirmAttendeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceFlowConfirmAttendeesComponent", function() { return SpaceFlowConfirmAttendeesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpaceFlowConfirmAttendeesComponent = /** @class */ (function (_super) {
    __extends(SpaceFlowConfirmAttendeesComponent, _super);
    function SpaceFlowConfirmAttendeesComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.attendeesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {};
        return _this;
    }
    SpaceFlowConfirmAttendeesComponent.prototype.ngOnInit = function () {
        this.model.flow = this.service.get('SPACE.flow');
    };
    SpaceFlowConfirmAttendeesComponent.prototype.remove = function (item) {
        var exists = this.attendees.find(function (u) { return u.email === item.email; });
        if (exists) {
            this.attendees.splice(this.attendees.indexOf(exists), 1);
            this.attendeesChange.emit(this.attendees);
        }
    };
    SpaceFlowConfirmAttendeesComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'space', name], query);
    };
    SpaceFlowConfirmAttendeesComponent.prototype.cancel = function () { this.back.emit(); };
    SpaceFlowConfirmAttendeesComponent.prototype.findTime = function () { this.to('find-time'); };
    SpaceFlowConfirmAttendeesComponent.prototype.toConfirm = function () { this.to('confirm-details'); };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SpaceFlowConfirmAttendeesComponent.prototype, "attendees", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowConfirmAttendeesComponent.prototype, "attendeesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowConfirmAttendeesComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowConfirmAttendeesComponent.prototype, "back", void 0);
    SpaceFlowConfirmAttendeesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'space-flow-confirm-attendees',
            template: __webpack_require__(/*! ./confirm-attendees.template.html */ "./src/app/shell/booking/space-flow/confirm-attendees/confirm-attendees.template.html"),
            styles: [__webpack_require__(/*! ./confirm-attendees.styles.scss */ "./src/app/shell/booking/space-flow/confirm-attendees/confirm-attendees.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], SpaceFlowConfirmAttendeesComponent);
    return SpaceFlowConfirmAttendeesComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/space-flow/confirm-attendees/confirm-attendees.styles.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/confirm-attendees/confirm-attendees.styles.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: #fff;\n  font-size: 1.2em; }\n.container > * {\n    width: 100%; }\n.block {\n  position: relative;\n  width: 100%;\n  padding: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.header {\n  width: 100%; }\n.content {\n  max-width: 768px;\n  width: 100%; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  min-width: 1.25em;\n  margin: .25em; }\n.icon.external {\n    -webkit-filter: hue-rotate(140deg);\n            filter: hue-rotate(140deg); }\n.icon img {\n    height: 1em; }\n.list {\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 50%;\n  overflow: auto;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  padding-top: 0; }\n.item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: .5em 0;\n  border-bottom: 1px solid #ccc; }\n.item .details {\n    -webkit-box-flex: 1;\n            flex: 1;\n    width: 50%;\n    font-size: 1em; }\n.item .detail {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n.item .remove {\n    color: #2699FB; }\n.item:last-child {\n    margin: 0; }\n.item .avatar {\n    font-size: 1.5em; }\n.item .avatar .optional {\n      position: relative;\n      height: 0;\n      top: -.75em;\n      font-size: .5em;\n      color: rgba(0, 0, 0, 0.54);\n      text-align: center; }\n.item .icon {\n    font-size: 1.5em; }\n.options {\n  display: -webkit-box;\n  display: flex;\n  margin-top: .5em; }\nbtn {\n  margin: .25em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9zcGFjZS1mbG93L2NvbmZpcm0tYXR0ZW5kZWVzL2NvbmZpcm0tYXR0ZW5kZWVzLnN0eWxlcy5zY3NzIiwiL1VzZXJzL2JlbmhvYWQvUHJvamVjdHMvbWNrLW91dGxvb2stYWRkaW4vc3JjL2FwcC9zaGVsbC9ib29raW5nL3NwYWNlLWZsb3cvY29uZmlybS1hdHRlbmRlZXMvY29uZmlybS1hdHRlbmRlZXMuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2lDQ0VpQztBRCtCakM7O3VCQzVCdUI7QUR5Q3ZCOztzQkN0Q3NCO0FDTHRCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBRXRCLGdCQUFnQixFQUFBO0FBVHBCO0lBWVEsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7QUFHM0I7RUFDSSxXQUFXLEVBQUE7QUFHZjtFQUNJLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7QUFHZjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTtBQU5qQjtJQVNRLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtBQVRsQztJQWFRLFdBQVcsRUFBQTtBQUluQjtFQUNJLG1CQUFPO1VBQVAsT0FBTztFQUNQLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix1QkFBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGNBQWMsRUFBQTtBQUdsQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLDZCQUE2QixFQUFBO0FBSmpDO0lBT1EsbUJBQU87WUFBUCxPQUFPO0lBQ1AsVUFBVTtJQUNWLGNBQWMsRUFBQTtBQVR0QjtJQWFRLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCLEVBQUE7QUFmL0I7SUFtQlEsY0FBYyxFQUFBO0FBbkJ0QjtJQXVCUSxTQUFTLEVBQUE7QUF2QmpCO0lBMkJRLGdCQUFnQixFQUFBO0FBM0J4QjtNQThCWSxrQkFBa0I7TUFDbEIsU0FBUztNQUNULFdBQVc7TUFDWCxlQUFlO01BQ2YsMEJBQWdCO01BQ2hCLGtCQUFrQixFQUFBO0FBbkM5QjtJQXdDUSxnQkFBZ0IsRUFBQTtBQUl4QjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvYm9va2luZy9zcGFjZS1mbG93L2NvbmZpcm0tYXR0ZW5kZWVzL2NvbmZpcm0tYXR0ZW5kZWVzLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogI2M3OTk2MTtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE0cHg7XG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJG1haW4tZm9udDogJGZvbnQtc3RhY2s7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEuMmVtOyB9XG4gIC5jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTsgfVxuXG4uYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi5oZWFkZXIge1xuICB3aWR0aDogMTAwJTsgfVxuXG4uY29udGVudCB7XG4gIG1heC13aWR0aDogNzY4cHg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMS4yNWVtO1xuICBtaW4td2lkdGg6IDEuMjVlbTtcbiAgbWFyZ2luOiAuMjVlbTsgfVxuICAuaWNvbi5leHRlcm5hbCB7XG4gICAgZmlsdGVyOiBodWUtcm90YXRlKDE0MGRlZyk7IH1cbiAgLmljb24gaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTsgfVxuXG4ubGlzdCB7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogNTAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBwYWRkaW5nLXRvcDogMDsgfVxuXG4uaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IC41ZW0gMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7IH1cbiAgLml0ZW0gLmRldGFpbHMge1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBmb250LXNpemU6IDFlbTsgfVxuICAuaXRlbSAuZGV0YWlsIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgLml0ZW0gLnJlbW92ZSB7XG4gICAgY29sb3I6ICMyNjk5RkI7IH1cbiAgLml0ZW06bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luOiAwOyB9XG4gIC5pdGVtIC5hdmF0YXIge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07IH1cbiAgICAuaXRlbSAuYXZhdGFyIC5vcHRpb25hbCB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICB0b3A6IC0uNzVlbTtcbiAgICAgIGZvbnQtc2l6ZTogLjVlbTtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XG4gIC5pdGVtIC5pY29uIHtcbiAgICBmb250LXNpemU6IDEuNWVtOyB9XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLXRvcDogLjVlbTsgfVxuXG5idG4ge1xuICBtYXJnaW46IC4yNWVtOyB9XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAgIGZvbnQtc2l6ZTogMS4yZW07XG5cbiAgICAmPioge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5ibG9jayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5oZWFkZXIge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEuMjVlbTtcbiAgICBtaW4td2lkdGg6IDEuMjVlbTtcbiAgICBtYXJnaW46IC4yNWVtO1xuXG4gICAgJi5leHRlcm5hbCB7XG4gICAgICAgIGZpbHRlcjogaHVlLXJvdGF0ZSgxNDBkZWcpO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgIH1cbn1cblxuLmxpc3Qge1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiA1MCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IC41ZW0gMDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcblxuICAgIC5kZXRhaWxzIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgfVxuXG4gICAgLmRldGFpbCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIC5yZW1vdmUge1xuICAgICAgICBjb2xvcjogIzI2OTlGQjtcbiAgICB9XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLmF2YXRhciB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG5cbiAgICAgICAgLm9wdGlvbmFsIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogLS43NWVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuNWVtO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoIzAwMCwgLjU0KTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB9XG59XG5cbi5vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IC41ZW07XG59XG5cbmJ0biB7XG4gICAgbWFyZ2luOiAuMjVlbTtcbn1cblxuIl19 */"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/confirm-attendees/confirm-attendees.template.html":
/*!********************************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/confirm-attendees/confirm-attendees.template.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"block header\">\n        <div class=\"content\">\n            <div class=\"header to-upper\">Confirm {{(attendees || []).length}} attendee{{(attendees || []).length === 1\n                ? '' : 's'}}</div>\n        </div>\n    </div>\n    <div class=\"block list\">\n        <div class=\"content\">\n            <div class=\"item\" *ngFor=\"let item of (attendees || [])\">\n                <div class=\"avatar\">\n                    <div class=\"icon\" [class.external]=\"item.external\"><img src=\"assets/img/persona.svg\"></div>\n                    <div class=\"optional\" *ngIf=\"item.optional\">Optional</div>\n                </div>\n                <div class=\"details\">\n                    <div class=\"detail\">\n                        <div class=\"text\"><span *ngIf=\"item.title\">{{item.title}} </span>{{item.name}} - {{item.organisation?.name || item.organisation}}</div>\n                    </div>\n                    <div class=\"detail\">\n                        <div class=\"text\">{{item.email}}</div>\n                    </div>\n                </div>\n                <div class=\"icon remove\" (touchrelease)=\"remove(item)\">\n                    <i class=\"material-icons\">close</i>\n                </div>\n            </div>\n            <div class=\"options\">\n                <btn klass=\"full-width\" (tapped)=\"cancel()\">\n                    <div class=\"text\">Back</div>\n                </btn>\n                <btn klass=\"full-width\" *ngIf=\"model.flow === 'space'\" (tapped)=\"toConfirm()\">\n                    <div class=\"text\">Confirm</div>\n                </btn>\n                <btn klass=\"full-width\" (tapped)=\"findTime()\">\n                    <div class=\"text\">Find time</div>\n                </btn>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/confirm-details/confirm-details.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/confirm-details/confirm-details.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SpaceFlowConfirmDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceFlowConfirmDetailsComponent", function() { return SpaceFlowConfirmDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpaceFlowConfirmDetailsComponent = /** @class */ (function (_super) {
    __extends(SpaceFlowConfirmDetailsComponent, _super);
    function SpaceFlowConfirmDetailsComponent(service, renderer) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.renderer = renderer;
        _this.formChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.attendeesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {};
        return _this;
    }
    SpaceFlowConfirmDetailsComponent.prototype.ngOnInit = function () {
        this.updateDisplay();
        this.init();
    };
    SpaceFlowConfirmDetailsComponent.prototype.ngOnChanges = function (changes) {
        if (changes.form) {
            this.model.title = this.form.title || this.model.title;
            this.model.description = this.form.description || this.model.description;
            console.log('Description:', this.model.description);
            this.updateDescription();
        }
        this.updateDisplay();
    };
    SpaceFlowConfirmDetailsComponent.prototype.init = function () {
        var _this = this;
        if (!this.service.ready()) {
            return this.timeout('init', function () { return _this.init(); });
        }
        this.model.settings = this.service.Settings.get('app.booking') || {};
    };
    SpaceFlowConfirmDetailsComponent.prototype.change = function ($event) {
        this.model.description = $event.target.textContent;
        this.store();
    };
    SpaceFlowConfirmDetailsComponent.prototype.updateDescription = function () {
        var _this = this;
        if (!this.description) {
            return this.timeout('desc', function () { return _this.updateDescription(); });
        }
        var div = this.description.nativeElement;
        this.renderer.setProperty(div, 'textContent', this.model.description);
    };
    SpaceFlowConfirmDetailsComponent.prototype.store = function () {
        this.form.title = this.model.title;
        this.form.description = this.model.description;
        this.formChange.emit(this.form);
    };
    SpaceFlowConfirmDetailsComponent.prototype.removeAttendee = function (item) {
        var exists = (this.attendees || []).find(function (i) { return i.email === item.email; });
        if (exists) {
            this.attendees.splice(this.attendees.indexOf(exists), 1);
            this.attendeesChange.emit(this.attendees);
        }
    };
    SpaceFlowConfirmDetailsComponent.prototype.updateDisplay = function () {
        if (!this.form) {
            this.form = {};
        }
        var date = moment__WEBPACK_IMPORTED_MODULE_3__(this.form.date);
        this.model.date = date.format('dddd D MMM YYYY');
        var start = date.format('hh:mm A');
        var end = date.add(this.form.duration || 30, 'm').format('hh:mm A');
        this.model.period = start + " - " + end;
    };
    SpaceFlowConfirmDetailsComponent.prototype.book = function () {
        var _this = this;
        if (this.space) {
            this.loading.emit('Checking room status...');
            this.service.Rooms.isAvailable(this.space.id, this.form.date, this.form.duration)
                .then(function () {
                _this.createBooking();
            }, function (e) {
                _this.loading.emit(false);
                var start = moment__WEBPACK_IMPORTED_MODULE_3__(_this.form.date);
                var date = start.format('MMM Do, YYYY');
                var end = moment__WEBPACK_IMPORTED_MODULE_3__(start).add(_this.form.duration, 'm');
                _this.service.error('Room is not available at the selected time anymore');
                _this.model.error = JSON.parse(JSON.stringify(_this.model.error));
            });
        }
        else {
            this.loading.emit('Finding available room...');
            this.service.Rooms.available({
                date: this.form.date,
                duration: this.form.duration
            }).then(function (list) {
                var rm_list = list.filter(function (item) { return item.capacity >= (_this.attendees || []).length || 1; });
                if (rm_list && rm_list.length > 0) {
                    _this.space = rm_list[Math.floor(Math.random() * rm_list.length)];
                    _this.createBooking();
                }
                else {
                    _this.service.error('No rooms found at the specified time with the required capacity');
                    _this.loading.emit(false);
                }
            });
        }
    };
    SpaceFlowConfirmDetailsComponent.prototype.createBooking = function () {
        var _this = this;
        var title = this.model.title;
        if (!this.model.title) {
            this.model.title = "From Staff App by " + this.model.user.name;
        }
        if (this.model.settings.title_prefix) {
            this.model.title = this.model.settings.title_prefix + this.model.form.title;
        }
        this.loading.emit('Requesting meeting...');
        var form = __assign({}, this.form, { title: this.model.title, description: this.model.description, attendees: this.attendees, room: this.space });
        this.service.Bookings.add(form).then(function () {
            _this.loading.emit(false);
            _this.to('result');
        }, function (err) {
            _this.loading.emit(false);
            if (_this.model.settings && _this.model.settings.title_prefix) {
                _this.model.title = _this.model.title.replace(_this.model.settings.title_prefix, '');
            }
            _this.model.title = title;
            if (!err || err.indexOf('user') < 0) {
                _this.service.error('An error occurred while making your booking');
            }
        });
    };
    SpaceFlowConfirmDetailsComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'space', name], query);
    };
    SpaceFlowConfirmDetailsComponent.prototype.cancel = function () { this.back.emit(); };
    SpaceFlowConfirmDetailsComponent.prototype.toAttendees = function () { this.to('attendees'); };
    SpaceFlowConfirmDetailsComponent.prototype.toSpaces = function () { this.to('spaces'); };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpaceFlowConfirmDetailsComponent.prototype, "form", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SpaceFlowConfirmDetailsComponent.prototype, "attendees", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpaceFlowConfirmDetailsComponent.prototype, "space", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], SpaceFlowConfirmDetailsComponent.prototype, "from", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowConfirmDetailsComponent.prototype, "formChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowConfirmDetailsComponent.prototype, "attendeesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowConfirmDetailsComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowConfirmDetailsComponent.prototype, "back", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('desc'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SpaceFlowConfirmDetailsComponent.prototype, "description", void 0);
    SpaceFlowConfirmDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'space-flow-confirm-details',
            template: __webpack_require__(/*! ./confirm-details.template.html */ "./src/app/shell/booking/space-flow/confirm-details/confirm-details.template.html"),
            styles: [__webpack_require__(/*! ./confirm-details.styles.scss */ "./src/app/shell/booking/space-flow/confirm-details/confirm-details.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], SpaceFlowConfirmDetailsComponent);
    return SpaceFlowConfirmDetailsComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/space-flow/confirm-details/confirm-details.styles.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/confirm-details/confirm-details.styles.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #D4EDF1;\n  overflow: auto;\n  padding: 2em; }\n.circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 120vmin;\n  width: 120vmin;\n  border-radius: 100%;\n  background-color: rgba(255, 255, 255, 0.54);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  pointer-events: none; }\n.content {\n  position: relative;\n  max-width: 768px;\n  width: 100%;\n  background-color: #fff;\n  padding: 1em;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  font-size: 1.2em;\n  z-index: 1; }\ninput {\n  font-size: 1.75em;\n  border: none;\n  color: #443018;\n  width: 100%;\n  margin-bottom: .1em; }\ninput::-webkit-input-placeholder {\n    color: rgba(143, 102, 51, 0.54); }\ninput:-ms-input-placeholder {\n    color: rgba(143, 102, 51, 0.54); }\ninput::-ms-input-placeholder {\n    color: rgba(143, 102, 51, 0.54); }\ninput::placeholder {\n    color: rgba(143, 102, 51, 0.54); }\n.item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n.item.add {\n    color: #22A8DA; }\n.item .text {\n    -webkit-box-flex: 1;\n            flex: 1;\n    width: 50%; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  min-width: 1.25em;\n  margin: .25em;\n  font-size: 1.5em;\n  margin-left: 0; }\n.icon.external {\n    -webkit-filter: hue-rotate(140deg);\n            filter: hue-rotate(140deg); }\n.icon img {\n    height: 1em; }\n.space .icon {\n  margin-left: 0; }\n.header {\n  font-size: 1.25em; }\n.options {\n  display: -webkit-box;\n  display: flex; }\n.description {\n  position: relative;\n  margin: 1em 0; }\n.placeholder {\n  position: absolute;\n  top: .5em;\n  left: .5em;\n  color: rgba(0, 0, 0, 0.54); }\n.textarea {\n  border: 1px solid #ccc;\n  padding: .5em;\n  min-height: 6.4em;\n  width: 100%;\n  background-color: #f8f8f8; }\nbtn {\n  font-size: 1.2em;\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin: .25em; }\nbtn .icon {\n    margin-left: -.125em; }\n.ul {\n  text-decoration: underline; }\n.close {\n  color: #4285F4;\n  font-size: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9zcGFjZS1mbG93L2NvbmZpcm0tZGV0YWlscy9jb25maXJtLWRldGFpbHMuc3R5bGVzLnNjc3MiLCIvVXNlcnMvYmVuaG9hZC9Qcm9qZWN0cy9tY2stb3V0bG9vay1hZGRpbi9zcmMvYXBwL3NoZWxsL2Jvb2tpbmcvc3BhY2UtZmxvdy9jb25maXJtLWRldGFpbHMvY29uZmlybS1kZXRhaWxzLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztpQ0NFaUM7QUQrQmpDOzt1QkM1QnVCO0FEeUN2Qjs7c0JDdENzQjtBQ0x0QjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWSxFQUFBO0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMkNBQTJCO0VBQzNCLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsb0JBQW9CLEVBQUE7QUFHeEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1SEFBMkY7VUFBM0YsK0dBQTJGO0VBQzNGLGdCQUFnQjtFQUNoQixVQUFVLEVBQUE7QUFHZDtFQUNJLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osY0FBaUM7RUFDakMsV0FBVztFQUNYLG1CQUFtQixFQUFBO0FBTHZCO0lBUVEsK0JBQXNDLEVBQUE7QUFSOUM7SUFRUSwrQkFBc0MsRUFBQTtBQVI5QztJQVFRLCtCQUFzQyxFQUFBO0FBUjlDO0lBUVEsK0JBQXNDLEVBQUE7QUFJOUM7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7QUFGdkI7SUFJUSxjQUFjLEVBQUE7QUFKdEI7SUFRUSxtQkFBTztZQUFQLE9BQU87SUFDUCxVQUFVLEVBQUE7QUFJbEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtBQVJsQjtJQVdRLGtDQUEwQjtZQUExQiwwQkFBMEIsRUFBQTtBQVhsQztJQWVRLFdBQVcsRUFBQTtBQUluQjtFQUVRLGNBQWMsRUFBQTtBQUl0QjtFQUNJLGlCQUFpQixFQUFBO0FBR3JCO0VBQ0ksb0JBQWE7RUFBYixhQUFhLEVBQUE7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYSxFQUFBO0FBR2pCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsMEJBQWdCLEVBQUE7QUFHcEI7RUFDSSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQU87VUFBUCxPQUFPO0VBQ1AsYUFBYSxFQUFBO0FBSGpCO0lBS1Esb0JBQW9CLEVBQUE7QUFJNUI7RUFDSSwwQkFBMEIsRUFBQTtBQUc5QjtFQUNJLGNGL0dtQjtFRWdIbkIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvYm9va2luZy9zcGFjZS1mbG93L2NvbmZpcm0tZGV0YWlscy9jb25maXJtLWRldGFpbHMuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3M6ICMzMDliNDA7XG4kc3VjY2Vzcy1hbHQ6ICM0Mjg1ZjQ7XG4kZXJyb3I6ICNkYjI5MWQ7XG4kcGVuZGluZzogI0ZGOTgwMDtcbiRuZXV0cmFsOiAjNzk3OTc5O1xuXG4kYmFja2dyb3VuZDogI2VjZjFmNTtcblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcbiRjb2xvci1wcmltYXJ5LXdpcmVmcmFtZTpyZ2JhKDAsIDAsIDAsIDAuNjEpO1xuJGhlYWRlci1iZzogI2ZmZjtcbiRoZWFkZXItY29sb3I6IHJnYmEoIzAwMjk2MCwgLjg3KTtcblxuJHRpbGUtY29sb3I6ICNmZmY7XG4kdGlsZS1ib3JkZXI6ICNmZmY7XG5cbiRoZWxwLWJvcmRlcjogcmdiYSgjMDAwLCAuMik7XG5cbiRjb2xvci1wcmltYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeTogIzQwNDg1YTtcbiRjb2xvci10ZXJuYXJ5OiAjYzc5OTYxO1xuJGNvbG9yLXF1YXRlcm5hcnk6ICM3ZGQ2ZDY7XG4kY29sb3ItcXVpbnRlcm5hcnk6ICM0YzVjNmM7XG4kY29sb3Itc2V4dGVybmFyeTogIzdmZTQzYjtcblxuJHRpbWVsaW5lLWJnOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzRGNUY3MCAwJSwgIzBGMTIxNSAxMDAlKTtcbiR0aW1lbGluZS1ldmVudDogJGVycm9yO1xuJHRpbWVsaW5lLWJvb2tpbmc6ICRjb2xvci1xdWF0ZXJuYXJ5O1xuXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTRweDtcblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kbWFpbi1mb250OiAkZm9udC1zdGFjaztcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRFREYxO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMmVtOyB9XG5cbi5jaXJjbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIGhlaWdodDogMTIwdm1pbjtcbiAgd2lkdGg6IDEyMHZtaW47XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA3NjhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIHotaW5kZXg6IDE7IH1cblxuaW5wdXQge1xuICBmb250LXNpemU6IDEuNzVlbTtcbiAgYm9yZGVyOiBub25lO1xuICBjb2xvcjogIzQ0MzAxODtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IC4xZW07IH1cbiAgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogcmdiYSgxNDMsIDEwMiwgNTEsIDAuNTQpOyB9XG5cbi5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuaXRlbS5hZGQge1xuICAgIGNvbG9yOiAjMjJBOERBOyB9XG4gIC5pdGVtIC50ZXh0IHtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiA1MCU7IH1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjI1ZW07XG4gIG1pbi13aWR0aDogMS4yNWVtO1xuICBtYXJnaW46IC4yNWVtO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW4tbGVmdDogMDsgfVxuICAuaWNvbi5leHRlcm5hbCB7XG4gICAgZmlsdGVyOiBodWUtcm90YXRlKDE0MGRlZyk7IH1cbiAgLmljb24gaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTsgfVxuXG4uc3BhY2UgLmljb24ge1xuICBtYXJnaW4tbGVmdDogMDsgfVxuXG4uaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjI1ZW07IH1cblxuLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4OyB9XG5cbi5kZXNjcmlwdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAxZW0gMDsgfVxuXG4ucGxhY2Vob2xkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLjVlbTtcbiAgbGVmdDogLjVlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cblxuLnRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogLjVlbTtcbiAgbWluLWhlaWdodDogNi40ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4OyB9XG5cbmJ0biB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGZsZXg6IDE7XG4gIG1hcmdpbjogLjI1ZW07IH1cbiAgYnRuIC5pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogLS4xMjVlbTsgfVxuXG4udWwge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuXG4uY2xvc2Uge1xuICBjb2xvcjogIzQyODVGNDtcbiAgZm9udC1zaXplOiAxZW07IH1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNENEVERjE7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogMmVtO1xufVxuXG4uY2lyY2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGhlaWdodDogMTIwdm1pbjtcbiAgICB3aWR0aDogMTIwdm1pbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjU0KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLC4xMik7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG5pbnB1dCB7XG4gICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yLXRlcm5hcnksIDQwKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAuMWVtO1xuXG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogcmdiYShkYXJrZW4oJGNvbG9yLXRlcm5hcnksIDIwKSwgLjU0KTtcbiAgICB9XG59XG5cbi5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgJi5hZGQge1xuICAgICAgICBjb2xvcjogIzIyQThEQTtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS4yNWVtO1xuICAgIG1pbi13aWR0aDogMS4yNWVtO1xuICAgIG1hcmdpbjogLjI1ZW07XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW4tbGVmdDogMDtcblxuICAgICYuZXh0ZXJuYWwge1xuICAgICAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoMTQwZGVnKTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICB9XG59XG5cbi5zcGFjZSB7XG4gICAgLmljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICB9XG59XG5cbi5oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xufVxuXG4ub3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxZW0gMDtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAuNWVtO1xuICAgIGxlZnQ6IC41ZW07XG4gICAgY29sb3I6IHJnYmEoIzAwMCwgLjU0KTtcbn1cblxuLnRleHRhcmVhIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgbWluLWhlaWdodDogNi40ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbn1cblxuYnRuIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luOiAuMjVlbTtcbiAgICAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtLjEyNWVtO1xuICAgIH1cbn1cblxuLnVsIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLmNsb3NlIHtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgZm9udC1zaXplOiAxZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/confirm-details/confirm-details.template.html":
/*!****************************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/confirm-details/confirm-details.template.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"circle\"></div>\n    <div class=\"content\">\n        <div class=\"title\">\n            <input [(ngModel)]=\"model.title\" (ngModelChange)=\"store()\" placeholder=\"Enter title\">\n        </div>\n        <div class=\"item space\">\n            <div class=\"icon\"><img src=\"assets/img/location.svg\"></div>\n            <div class=\"text ul\" (touchrelease)=\"toSpaces()\">{{space ? space.name : 'Any free room'}}</div>\n        </div>\n        <div class=\"details\">\n            at {{model.period}}<br>\n            on {{model.date}}\n        </div>\n        <div class=\"description\">\n            <div #desc contenteditable=\"true\" class=\"textarea\" (input)=\"change($event)\">\n\n            </div>\n            <div class=\"placeholder\" *ngIf=\"!model.description\">Enter description</div>\n        </div>\n        <div class=\"attendees\">\n            <div class=\"header\">Attendees ({{attendees?.length || 0}}):</div>\n            <div class=\"list\">\n                <div class=\"item\" *ngFor=\"let item of (attendees || [])\">\n                    <div class=\"icon\" [class.external]=\"item.external\"><img src=\"assets/img/persona.svg\"></div>\n                    <div class=\"text\">{{item.name}} - {{item.organisation?.name || item.organisation}}</div>\n                    <div class=\"icon close\" (touchrelease)=\"removeAttendee(item)\"><i class=\"material-icons\">close</i></div>\n                </div>\n                <div class=\"item add\" *ngIf=\"from !== 'find-time'\" (touchrelease)=\"toAttendees()\">\n                    <div class=\"icon\"><img src=\"assets/img/add.svg\"></div>\n                    <div class=\"text\">Add</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"options\">\n            <btn klass=\"full-width\" (tapped)=\"cancel()\">\n                <div class=\"text\">Back</div>\n            </btn>\n            <btn klass=\"full-width\" [disabled]=\"!model.title\" (tapped)=\"book()\">\n                <div class=\"text\">Create!</div>\n            </btn>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/filters/filters.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/filters/filters.component.ts ***!
  \***********************************************************************/
/*! exports provided: SpaceFlowFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceFlowFiltersComponent", function() { return SpaceFlowFiltersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utility.class */ "./src/app/shared/utility.class.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpaceFlowFiltersComponent = /** @class */ (function (_super) {
    __extends(SpaceFlowFiltersComponent, _super);
    function SpaceFlowFiltersComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.filtersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {
            date_index: 0,
            time_index: 0,
            duration_index: 0,
            level_index: 0,
            capacity_index: 0
        };
        return _this;
    }
    SpaceFlowFiltersComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.model.form) {
            this.model.form = {};
        }
        this.subs.obs.capacity = this.service.Rooms.listen('capacities', function (list) {
            _this.model.capacity = list || [];
            var exists = _this.model.capacity.find(function (i) { return i.id === _this.filters.capacity; });
            if (exists) {
                _this.model.capacity_index = _this.model.capacity.indexOf(exists);
                if (_this.model.capacity_index < 0) {
                    _this.model.capacity_index = 0;
                }
            }
            _this.updateForm();
        });
        this.subs.obs.building = this.service.Buildings.listen(function (bld) {
            if (bld) {
                _this.model.levels = [{ id: null, name: 'Any' }].concat(bld.levels);
                var exists = _this.model.levels.find(function (i) { return _this.filters.level && i.id === _this.filters.level; });
                if (exists) {
                    _this.model.level_index = _this.model.levels.indexOf(exists);
                    if (_this.model.level_index < 0) {
                        _this.model.level_index = 0;
                    }
                }
                _this.model.extras = bld.extras.slice();
                _this.model.extras.forEach(function (item) { return _this.filters.extras.forEach(function (old) {
                    if (old.id === item.id) {
                        item.filter = old.filter;
                    }
                }); });
                _this.updateForm();
            }
        });
        this.loadDates();
        this.updateForm();
    };
    SpaceFlowFiltersComponent.prototype.updateForm = function () {
        var _this = this;
        this.timeout('update', function () {
            // Prevent pre-initialisation errors
            if (!_this.model.dates) {
                _this.model.dates = [{ id: moment__WEBPACK_IMPORTED_MODULE_4__().seconds(0).milliseconds(0).valueOf() }];
            }
            if (!_this.model.times) {
                _this.model.times = [{ id: moment__WEBPACK_IMPORTED_MODULE_4__().format('HH:mm') }];
            }
            if (!_this.model.durations) {
                _this.model.durations = [{ id: 30 }];
            }
            if (!_this.model.capacity) {
                _this.model.capacity = [{ id: -1 }];
            }
            if (!_this.model.levels) {
                _this.model.levels = [{ id: null }];
            }
            // Update filter fields
            var date = moment__WEBPACK_IMPORTED_MODULE_4__(_this.model.dates[_this.model.date_index].id);
            var time = _this.model.times[_this.model.time_index].id.split(':');
            _this.filters = {
                date: date.hours(+time[0]).minutes(+time[1]).valueOf(),
                duration: _this.model.durations[Math.min(_this.model.durations.length - 1, _this.model.duration_index)].id,
                capacity: _this.model.capacity[Math.min(_this.model.capacity.length - 1, _this.model.capacity_index)].id,
                level: _this.model.levels[Math.min(_this.model.levels.length - 1, _this.model.level_index)].id,
                extras: _this.model.extras && _this.model.extras.length > 0 ? _this.model.extras.slice() : []
            };
            _this.loadTimes();
            _this.loadDurations();
            _this.filtersChange.emit(_this.filters);
        }, 100);
    };
    SpaceFlowFiltersComponent.prototype.loadDates = function () {
        this.model.dates = [];
        if (!this.model.form.date) {
            this.model.form.date = moment__WEBPACK_IMPORTED_MODULE_4__().valueOf();
        }
        var date = moment__WEBPACK_IMPORTED_MODULE_4__().hour(0).minutes(0).seconds(0).milliseconds(0);
        var end = moment__WEBPACK_IMPORTED_MODULE_4__(date).add(2, 'M');
        var offset = 0;
        for (; date.isBefore(end); date.add(1, 'd')) {
            this.model.dates.push({
                id: date.valueOf(),
                name: date.format('ddd MMMM DD, YYYY'),
                offset: offset
            });
            offset++;
        }
        this.loadTimes();
    };
    SpaceFlowFiltersComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'space', name], query);
    };
    SpaceFlowFiltersComponent.prototype.toSpaces = function () { this.to('spaces'); };
    SpaceFlowFiltersComponent.prototype.cancel = function () { this.back.emit(); };
    SpaceFlowFiltersComponent.prototype.loadTimes = function () {
        // Clean up time
        this.filters.date = this.cleanTime(this.filters.date);
        this.model.times = [];
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
        var now = moment__WEBPACK_IMPORTED_MODULE_4__();
        now.minutes(Math.ceil(now.minutes() / 5) * 5);
        if (now.minutes() % 15 !== 0) {
            this.model.times.push({
                id: now.format('HH:mm'),
                name: now.format('hh:mm A')
            });
            now.minutes(Math.ceil(now.minutes() / 15) * 15);
        }
        if (date.isAfter(now, 'd')) {
            now.hours(0).minutes(0);
        }
        var end = moment__WEBPACK_IMPORTED_MODULE_4__(now).hours(23).minutes(59);
        for (; now.isBefore(end, 'm'); now.add(15, 'm')) {
            this.model.times.push({
                id: now.format('HH:mm'),
                name: now.format('hh:mm A')
            });
        }
        var time = date.format('HH:mm');
        var exists = this.model.times.find(function (a) { return a.id === time; });
        if (exists) {
            this.model.times.sort(function (a, b) { return a.id.localeCompare(b.id); });
            this.model.time_index = this.model.times.indexOf(exists);
        }
        else {
            this.model.times.push({
                id: date.format('HH:mm'),
                name: date.format('hh:mm A')
            });
            this.model.times.sort(function (a, b) { return a.id.localeCompare(b.id); });
            exists = this.model.times.find(function (a) { return a.id === time; });
            this.model.time_index = this.model.times.indexOf(exists);
        }
        this.loadDurations(true);
    };
    SpaceFlowFiltersComponent.prototype.cleanTime = function (datestamp, block_size) {
        if (block_size === void 0) { block_size = 5; }
        if (!datestamp) {
            datestamp = moment__WEBPACK_IMPORTED_MODULE_4__().valueOf();
        }
        var now = moment__WEBPACK_IMPORTED_MODULE_4__().seconds(0).milliseconds(0);
        now.minutes(Math.ceil(now.minutes() / block_size) * block_size);
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(datestamp).seconds(0).milliseconds(0);
        if (date.isBefore(now, 'm')) {
            date = moment__WEBPACK_IMPORTED_MODULE_4__(now);
        }
        else {
            date.minutes(Math.ceil(date.minutes() / block_size) * block_size);
        }
        return date.valueOf();
    };
    SpaceFlowFiltersComponent.prototype.loadDurations = function (init) {
        if (init === void 0) { init = false; }
        this.filters.date = this.cleanTime(this.filters.date);
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
        var end = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date).add(240, 'm');
        date.add(30, 'm');
        var duration = 30;
        this.model.durations = [];
        for (; date.isBefore(end, 'm'); date.add(15, 'm')) {
            if (init && this.filters.duration && duration === this.filters.duration) {
                this.model.duration_index = this.model.durations.length;
            }
            this.model.durations.push({
                id: duration,
                name: date.format('hh:mm A') + " (" + _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__["Utils"].humaniseDuration(duration) + ")"
            });
            duration += 15;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpaceFlowFiltersComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowFiltersComponent.prototype, "filtersChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowFiltersComponent.prototype, "back", void 0);
    SpaceFlowFiltersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'space-flow-filters',
            template: __webpack_require__(/*! ./filters.template.html */ "./src/app/shell/booking/space-flow/filters/filters.template.html"),
            styles: [__webpack_require__(/*! ./filters.styles.scss */ "./src/app/shell/booking/space-flow/filters/filters.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], SpaceFlowFiltersComponent);
    return SpaceFlowFiltersComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/space-flow/filters/filters.styles.scss":
/*!**********************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/filters/filters.styles.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .25em; }\n.icon img {\n    height: 1em; }\n.header {\n  font-size: 1.2em;\n  margin-bottom: .5em; }\n.block {\n  width: 100%;\n  padding: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.content {\n  max-width: 768px;\n  width: 100%; }\n.item {\n  margin: .5em; }\n.item > * {\n    font-size: 1.2em; }\n.value {\n  margin: .5em 0; }\n.form {\n  padding: 0 1em;\n  font-size: 1.1em; }\n.form .options {\n    display: -webkit-box;\n    display: flex; }\n.form btn {\n    -webkit-box-flex: 1;\n            flex: 1;\n    margin: .25em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9zcGFjZS1mbG93L2ZpbHRlcnMvZmlsdGVycy5zdHlsZXMuc2NzcyIsIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hlbGwvYm9va2luZy9zcGFjZS1mbG93L2ZpbHRlcnMvZmlsdGVycy5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7aUNDRWlDO0FEK0JqQzs7dUJDNUJ1QjtBRHlDdkI7O3NCQ3RDc0I7QUNMdEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhLEVBQUE7QUFOakI7SUFRUSxXQUFXLEVBQUE7QUFJbkI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0FBRzNCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUdmO0VBQ0ksWUFBWSxFQUFBO0FBRGhCO0lBR1EsZ0JBQWdCLEVBQUE7QUFJeEI7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7QUFGcEI7SUFLUSxvQkFBYTtJQUFiLGFBQWEsRUFBQTtBQUxyQjtJQVNRLG1CQUFPO1lBQVAsT0FBTztJQUNQLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2Jvb2tpbmcvc3BhY2UtZmxvdy9maWx0ZXJzL2ZpbHRlcnMuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3M6ICMzMDliNDA7XG4kc3VjY2Vzcy1hbHQ6ICM0Mjg1ZjQ7XG4kZXJyb3I6ICNkYjI5MWQ7XG4kcGVuZGluZzogI0ZGOTgwMDtcbiRuZXV0cmFsOiAjNzk3OTc5O1xuXG4kYmFja2dyb3VuZDogI2VjZjFmNTtcblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcbiRjb2xvci1wcmltYXJ5LXdpcmVmcmFtZTpyZ2JhKDAsIDAsIDAsIDAuNjEpO1xuJGhlYWRlci1iZzogI2ZmZjtcbiRoZWFkZXItY29sb3I6IHJnYmEoIzAwMjk2MCwgLjg3KTtcblxuJHRpbGUtY29sb3I6ICNmZmY7XG4kdGlsZS1ib3JkZXI6ICNmZmY7XG5cbiRoZWxwLWJvcmRlcjogcmdiYSgjMDAwLCAuMik7XG5cbiRjb2xvci1wcmltYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeTogIzQwNDg1YTtcbiRjb2xvci10ZXJuYXJ5OiAjYzc5OTYxO1xuJGNvbG9yLXF1YXRlcm5hcnk6ICM3ZGQ2ZDY7XG4kY29sb3ItcXVpbnRlcm5hcnk6ICM0YzVjNmM7XG4kY29sb3Itc2V4dGVybmFyeTogIzdmZTQzYjtcblxuJHRpbWVsaW5lLWJnOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzRGNUY3MCAwJSwgIzBGMTIxNSAxMDAlKTtcbiR0aW1lbGluZS1ldmVudDogJGVycm9yO1xuJHRpbWVsaW5lLWJvb2tpbmc6ICRjb2xvci1xdWF0ZXJuYXJ5O1xuXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTRweDtcblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kbWFpbi1mb250OiAkZm9udC1zdGFjaztcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEuMjVlbTtcbiAgd2lkdGg6IDEuMjVlbTtcbiAgbWFyZ2luOiAuMjVlbTsgfVxuICAuaWNvbiBpbWcge1xuICAgIGhlaWdodDogMWVtOyB9XG5cbi5oZWFkZXIge1xuICBmb250LXNpemU6IDEuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAuNWVtOyB9XG5cbi5ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA3NjhweDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLml0ZW0ge1xuICBtYXJnaW46IC41ZW07IH1cbiAgLml0ZW0gPiAqIHtcbiAgICBmb250LXNpemU6IDEuMmVtOyB9XG5cbi52YWx1ZSB7XG4gIG1hcmdpbjogLjVlbSAwOyB9XG5cbi5mb3JtIHtcbiAgcGFkZGluZzogMCAxZW07XG4gIGZvbnQtc2l6ZTogMS4xZW07IH1cbiAgLmZvcm0gLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgLmZvcm0gYnRuIHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbjogLjI1ZW07IH1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgd2lkdGg6IDEuMjVlbTtcbiAgICBtYXJnaW46IC4yNWVtO1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgIH1cbn1cblxuLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xufVxuXG4uYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaXRlbSB7XG4gICAgbWFyZ2luOiAuNWVtO1xuICAgICYgPiAqIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG59XG5cbi52YWx1ZSB7XG4gICAgbWFyZ2luOiAuNWVtIDA7XG59XG5cbi5mb3JtIHtcbiAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuXG4gICAgLm9wdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIGJ0biB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1hcmdpbjogLjI1ZW07XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/filters/filters.template.html":
/*!************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/filters/filters.template.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block search\">\n    <div class=\"content\">\n        <div class=\"header to-upper\">Add filters</div>\n        <div class=\"form\">\n            <div class=\"field\">\n                <label for=\"date\">Date</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"date\" [list]=\"model.dates\" [(model)]=\"model.date_index\" (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"time\">Time</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"time\" [list]=\"model.times\" [(model)]=\"model.time_index\" (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"duration\">Duration</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"duration\" [list]=\"model.durations\" [(model)]=\"model.duration_index\"\n                        (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"level\">Level</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"level\" [list]=\"model.levels\" [(model)]=\"model.level_index\"\n                        (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"count\">Paticipants</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"count\" [list]=\"model.capacity\" [(model)]=\"model.capacity_index\"\n                        (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"extras\">Options</label>\n                <div class=\"value\">\n                    <div class=\"item\" *ngFor=\"let item of (model.extras || [])\">\n                        <checkbox id=\"extras\" [(model)]=\"item.filter\" [label]=\"item.name\"></checkbox>\n                    </div>\n                </div>\n            </div>\n            <hr />\n            <div class=\"options\">\n                <btn klass=\"full-width\" (tapped)=\"cancel()\">\n                    <div class=\"text\">Cancel</div>\n                </btn>\n                <btn klass=\"full-width\" (tapped)=\"toSpaces()\">\n                    <div class=\"text\">Apply</div>\n                </btn>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/index.ts":
/*!***************************************************!*\
  !*** ./src/app/shell/booking/space-flow/index.ts ***!
  \***************************************************/
/*! exports provided: SPACE_FLOW_COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPACE_FLOW_COMPONENTS", function() { return SPACE_FLOW_COMPONENTS; });
/* harmony import */ var _space_flow_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./space-flow.component */ "./src/app/shell/booking/space-flow/space-flow.component.ts");
/* harmony import */ var _attendees_attendees_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attendees/attendees.component */ "./src/app/shell/booking/space-flow/attendees/attendees.component.ts");
/* harmony import */ var _confirm_attendees_confirm_attendees_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./confirm-attendees/confirm-attendees.component */ "./src/app/shell/booking/space-flow/confirm-attendees/confirm-attendees.component.ts");
/* harmony import */ var _confirm_details_confirm_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./confirm-details/confirm-details.component */ "./src/app/shell/booking/space-flow/confirm-details/confirm-details.component.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/shell/booking/space-flow/filters/filters.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result/result.component */ "./src/app/shell/booking/space-flow/result/result.component.ts");
/* harmony import */ var _search_options_search_options_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-options/search-options.component */ "./src/app/shell/booking/space-flow/search-options/search-options.component.ts");
/* harmony import */ var _select_space_select_space_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./select-space/select-space.component */ "./src/app/shell/booking/space-flow/select-space/select-space.component.ts");
/* harmony import */ var _select_time_select_time_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select-time/select-time.component */ "./src/app/shell/booking/space-flow/select-time/select-time.component.ts");
/* harmony import */ var _view_space_view_space_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./view-space/view-space.component */ "./src/app/shell/booking/space-flow/view-space/view-space.component.ts");










var SPACE_FLOW_COMPONENTS = [
    _space_flow_component__WEBPACK_IMPORTED_MODULE_0__["SpaceBookingFlowComponent"],
    _attendees_attendees_component__WEBPACK_IMPORTED_MODULE_1__["SpaceFlowAttendeesComponent"],
    _confirm_attendees_confirm_attendees_component__WEBPACK_IMPORTED_MODULE_2__["SpaceFlowConfirmAttendeesComponent"],
    _confirm_details_confirm_details_component__WEBPACK_IMPORTED_MODULE_3__["SpaceFlowConfirmDetailsComponent"],
    _filters_filters_component__WEBPACK_IMPORTED_MODULE_4__["SpaceFlowFiltersComponent"],
    _result_result_component__WEBPACK_IMPORTED_MODULE_5__["SpaceFlowResultComponent"],
    _search_options_search_options_component__WEBPACK_IMPORTED_MODULE_6__["SpaceFlowSearchOptionsComponent"],
    _select_space_select_space_component__WEBPACK_IMPORTED_MODULE_7__["SpaceFlowSelectSpaceComponent"],
    _select_time_select_time_component__WEBPACK_IMPORTED_MODULE_8__["SpaceFlowSelectTimeComponent"],
    _view_space_view_space_component__WEBPACK_IMPORTED_MODULE_9__["SpaceFlowViewSpaceComponent"]
];


/***/ }),

/***/ "./src/app/shell/booking/space-flow/result/result.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/result/result.component.ts ***!
  \*********************************************************************/
/*! exports provided: SpaceFlowResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceFlowResultComponent", function() { return SpaceFlowResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpaceFlowResultComponent = /** @class */ (function (_super) {
    __extends(SpaceFlowResultComponent, _super);
    function SpaceFlowResultComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    SpaceFlowResultComponent.prototype.ngOnInit = function () {
        this.clearForm();
    };
    SpaceFlowResultComponent.prototype.clear = function (name) {
        if (localStorage) {
            localStorage.removeItem("STAFF.space." + name);
        }
    };
    SpaceFlowResultComponent.prototype.clearForm = function () {
        this.clear('filters');
        this.clear('space');
        this.clear('attendees');
    };
    SpaceFlowResultComponent.prototype.toHome = function () { this.service.navigate('home'); };
    SpaceFlowResultComponent.prototype.toFeedback = function () { this.service.navigate(['book', 'feedback']); };
    SpaceFlowResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'space-flow-result',
            template: __webpack_require__(/*! ./result.template.html */ "./src/app/shell/booking/space-flow/result/result.template.html"),
            styles: [__webpack_require__(/*! ./result.styles.scss */ "./src/app/shell/booking/space-flow/result/result.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], SpaceFlowResultComponent);
    return SpaceFlowResultComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/space-flow/result/result.styles.scss":
/*!********************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/result/result.styles.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #D4EDF1;\n  overflow: auto;\n  padding: 2em; }\n.circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 120vmin;\n  width: 120vmin;\n  border-radius: 100%;\n  background-color: rgba(255, 255, 255, 0.54);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  pointer-events: none; }\n.content {\n  position: relative;\n  max-width: 768px;\n  width: 100%;\n  background-color: #fff;\n  padding: 1em;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  font-size: 1.2em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 1; }\n.info {\n  margin-bottom: .5em;\n  font-size: 1.2em; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .05em; }\n.icon img {\n    height: 1em; }\n.top {\n  font-size: 6em; }\n.title {\n  font-size: 2em;\n  margin: .25em 0;\n  text-transform: uppercase; }\n.options {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: .5em 0; }\n.option {\n  height: 1.5em;\n  width: 1.5em;\n  font-size: 2em;\n  background-color: #F1F9FF;\n  border-radius: 100%;\n  margin: .2em .25em;\n  color: #6a4b25; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9zcGFjZS1mbG93L3Jlc3VsdC9yZXN1bHQuc3R5bGVzLnNjc3MiLCIvVXNlcnMvYmVuaG9hZC9Qcm9qZWN0cy9tY2stb3V0bG9vay1hZGRpbi9zcmMvYXBwL3NoZWxsL2Jvb2tpbmcvc3BhY2UtZmxvdy9yZXN1bHQvcmVzdWx0LnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztpQ0NFaUM7QUQrQmpDOzt1QkM1QnVCO0FEeUN2Qjs7c0JDdENzQjtBQ0x0QjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsWUFBWSxFQUFBO0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZUFBZTtFQUNmLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsMkNBQTJCO0VBQzNCLHdDQUFnQztVQUFoQyxnQ0FBZ0M7RUFDaEMsb0JBQW9CLEVBQUE7QUFHeEI7RUFDSSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQix1SEFBMkY7VUFBM0YsK0dBQTJGO0VBQzNGLGdCQUFnQjtFQUNoQixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsVUFBVSxFQUFBO0FBR2Q7RUFDSSxtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhLEVBQUE7QUFOakI7SUFRUSxXQUFXLEVBQUE7QUFJbkI7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsZUFBZTtFQUNmLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9ib29raW5nL3NwYWNlLWZsb3cvcmVzdWx0L3Jlc3VsdC5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2VzczogIzMwOWI0MDtcbiRzdWNjZXNzLWFsdDogIzQyODVmNDtcbiRlcnJvcjogI2RiMjkxZDtcbiRwZW5kaW5nOiAjRkY5ODAwO1xuJG5ldXRyYWw6ICM3OTc5Nzk7XG5cbiRiYWNrZ3JvdW5kOiAjZWNmMWY1O1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuJGNvbG9yLXByaW1hcnktd2lyZWZyYW1lOnJnYmEoMCwgMCwgMCwgMC42MSk7XG4kaGVhZGVyLWJnOiAjZmZmO1xuJGhlYWRlci1jb2xvcjogcmdiYSgjMDAyOTYwLCAuODcpO1xuXG4kdGlsZS1jb2xvcjogI2ZmZjtcbiR0aWxlLWJvcmRlcjogI2ZmZjtcblxuJGhlbHAtYm9yZGVyOiByZ2JhKCMwMDAsIC4yKTtcblxuJGNvbG9yLXByaW1hcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5OiAjNDA0ODVhO1xuJGNvbG9yLXRlcm5hcnk6ICNjNzk5NjE7XG4kY29sb3ItcXVhdGVybmFyeTogIzdkZDZkNjtcbiRjb2xvci1xdWludGVybmFyeTogIzRjNWM2YztcbiRjb2xvci1zZXh0ZXJuYXJ5OiAjN2ZlNDNiO1xuXG4kdGltZWxpbmUtYmc6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNEY1RjcwIDAlLCAjMEYxMjE1IDEwMCUpO1xuJHRpbWVsaW5lLWV2ZW50OiAkZXJyb3I7XG4kdGltZWxpbmUtYm9va2luZzogJGNvbG9yLXF1YXRlcm5hcnk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNHB4O1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRtYWluLWZvbnQ6ICRmb250LXN0YWNrO1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENEVERjE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAyZW07IH1cblxuLmNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgaGVpZ2h0OiAxMjB2bWluO1xuICB3aWR0aDogMTIwdm1pbjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDc2OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDE7IH1cblxuLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICBmb250LXNpemU6IDEuMmVtOyB9XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMS4yNWVtO1xuICB3aWR0aDogMS4yNWVtO1xuICBtYXJnaW46IC4wNWVtOyB9XG4gIC5pY29uIGltZyB7XG4gICAgaGVpZ2h0OiAxZW07IH1cblxuLnRvcCB7XG4gIGZvbnQtc2l6ZTogNmVtOyB9XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IC4yNWVtIDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAuNWVtIDA7IH1cblxuLm9wdGlvbiB7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUY5RkY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbjogLjJlbSAuMjVlbTtcbiAgY29sb3I6ICM2YTRiMjU7IH1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNENEVERjE7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogMmVtO1xufVxuXG4uY2lyY2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGhlaWdodDogMTIwdm1pbjtcbiAgICB3aWR0aDogMTIwdm1pbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjU0KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLC4xMik7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uaW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS4yNWVtO1xuICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgbWFyZ2luOiAuMDVlbTtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICB9XG59XG5cbi50b3Age1xuICAgIGZvbnQtc2l6ZTogNmVtO1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIG1hcmdpbjogLjI1ZW0gMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4ub3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbjogLjVlbSAwO1xufVxuXG4ub3B0aW9uIHtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGOUZGO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgbWFyZ2luOiAuMmVtIC4yNWVtO1xuICAgIGNvbG9yOiBkYXJrZW4oJGNvbG9yLXRlcm5hcnksIDMwKTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/result/result.template.html":
/*!**********************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/result/result.template.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"circle\"></div>\n    <div class=\"content\">\n        <div class=\"icon top\">\n            <img src=\"assets/img/book_confirmed.svg\">\n        </div>\n        <div class=\"title\">Booking created</div>\n        <div class=\"info\">Are you happy with your experience?</div>\n        <div class=\"options\">\n            <div class=\"option icon\" (touchrelease)=\"toHome()\">\n                <i class=\"material-icons\">done</i>\n            </div>\n            <div class=\"option icon\" (touchrelease)=\"toFeedback()\">\n                <i class=\"material-icons\">close</i>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/search-options/search-options.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/search-options/search-options.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SpaceFlowSearchOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceFlowSearchOptionsComponent", function() { return SpaceFlowSearchOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utility.class */ "./src/app/shared/utility.class.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpaceFlowSearchOptionsComponent = /** @class */ (function (_super) {
    __extends(SpaceFlowSearchOptionsComponent, _super);
    function SpaceFlowSearchOptionsComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.filtersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {
            date_index: 0,
            time_index: 0,
            duration_index: 0,
            level_index: 0,
            capacity_index: 0
        };
        return _this;
    }
    SpaceFlowSearchOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.filters) {
            this.filters = {};
        }
        this.subs.obs.capacity = this.service.Rooms.listen('capacities', function (list) {
            _this.model.capacity = list || [];
            var exists = _this.model.capacity.find(function (i) { return i.id === _this.filters.capacity; });
            if (exists) {
                _this.model.capacity_index = _this.model.capacity.indexOf(exists);
            }
            _this.updateForm();
        });
        this.subs.obs.building = this.service.Buildings.listen(function (bld) {
            if (bld) {
                _this.model.levels = [{ id: null, name: 'Any' }].concat(bld.levels);
                var exists = _this.model.levels.find(function (i) { return _this.filters.level && i.id === _this.filters.level; });
                if (exists) {
                    _this.model.level_index = _this.model.levels.indexOf(exists);
                }
                _this.model.extras = bld.extras.slice();
                _this.model.extras.forEach(function (item) { return _this.filters.extras.forEach(function (old) {
                    if (old.id === item.id) {
                        item.filter = old.filter;
                    }
                }); });
                _this.updateForm();
            }
        });
        this.loadDates();
        this.updateForm();
    };
    SpaceFlowSearchOptionsComponent.prototype.updateForm = function () {
        var _this = this;
        this.timeout('update', function () {
            // Prevent pre-initialisation errors
            if (!_this.model.dates) {
                _this.model.dates = [{ id: moment__WEBPACK_IMPORTED_MODULE_4__().seconds(0).milliseconds(0).valueOf() }];
            }
            if (!_this.model.times) {
                _this.model.times = [{ id: moment__WEBPACK_IMPORTED_MODULE_4__().format('HH:mm') }];
            }
            if (!_this.model.durations) {
                _this.model.durations = [{ id: 30 }];
            }
            if (!_this.model.capacity) {
                _this.model.capacity = [{ id: -1 }];
            }
            if (!_this.model.levels) {
                _this.model.levels = [{ id: null }];
            }
            if (_this.model.level_index < 0) {
                _this.model.level_index = 0;
            }
            if (_this.model.capacity_index < 0) {
                _this.model.capacity_index = 0;
            }
            // Update filter fields
            console.log('Model:', _this.model);
            var date = moment__WEBPACK_IMPORTED_MODULE_4__(_this.model.dates[_this.model.date_index].id);
            var time = _this.model.times[_this.model.time_index].id.split(':');
            _this.filters = {
                date: date.hours(+time[0]).minutes(+time[1]).valueOf(),
                duration: _this.model.durations[Math.min(_this.model.durations.length - 1, _this.model.duration_index)].id,
                capacity: _this.model.capacity[Math.min(_this.model.capacity.length - 1, _this.model.capacity_index)].id,
                level: _this.model.levels[Math.min(_this.model.levels.length - 1, _this.model.level_index)].id,
                extras: _this.model.extras && _this.model.extras.length > 0 ? _this.model.extras.slice() : []
            };
            _this.loadTimes();
            _this.loadDurations();
            _this.filtersChange.emit(_this.filters);
        }, 100);
    };
    SpaceFlowSearchOptionsComponent.prototype.loadDates = function () {
        this.model.dates = [];
        var date = moment__WEBPACK_IMPORTED_MODULE_4__().hour(0).minutes(0).seconds(0).milliseconds(0);
        var end = moment__WEBPACK_IMPORTED_MODULE_4__(date).add(2, 'M');
        var offset = 0;
        for (; date.isBefore(end); date.add(1, 'd')) {
            this.model.dates.push({
                id: date.valueOf(),
                name: date.format('ddd MMMM DD, YYYY'),
                offset: offset
            });
            offset++;
        }
        this.loadTimes();
    };
    SpaceFlowSearchOptionsComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'space', name], query);
    };
    SpaceFlowSearchOptionsComponent.prototype.toSpaces = function () {
        this.service.set('SPACE.flow', 'space');
        this.to('spaces');
    };
    SpaceFlowSearchOptionsComponent.prototype.toAttendees = function () {
        this.service.set('SPACE.flow', 'attendees');
        this.to('attendees');
    };
    SpaceFlowSearchOptionsComponent.prototype.toFilters = function () {
        this.service.set('SPACE.flow', 'space');
        this.to('filters');
    };
    SpaceFlowSearchOptionsComponent.prototype.loadTimes = function () {
        // Clean up time
        this.filters.date = this.cleanTime(this.filters.date);
        this.model.times = [];
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
        var now = moment__WEBPACK_IMPORTED_MODULE_4__();
        now.minutes(Math.ceil(now.minutes() / 5) * 5);
        if (now.minutes() % 15 !== 0) {
            this.model.times.push({
                id: now.format('HH:mm'),
                name: now.format('hh:mm A')
            });
            now.minutes(Math.ceil(now.minutes() / 15) * 15);
        }
        if (date.isAfter(now, 'd')) {
            now.hours(0).minutes(0);
        }
        var end = moment__WEBPACK_IMPORTED_MODULE_4__(now).hours(23).minutes(59);
        for (; now.isBefore(end, 'm'); now.add(15, 'm')) {
            this.model.times.push({
                id: now.format('HH:mm'),
                name: now.format('hh:mm A')
            });
        }
        var time = date.format('HH:mm');
        var exists = this.model.times.find(function (a) { return a.id === time; });
        if (exists) {
            this.model.times.sort(function (a, b) { return a.id.localeCompare(b.id); });
            this.model.time_index = this.model.times.indexOf(exists);
        }
        else {
            this.model.times.push({
                id: date.format('HH:mm'),
                name: date.format('hh:mm A')
            });
            this.model.times.sort(function (a, b) { return a.id.localeCompare(b.id); });
            exists = this.model.times.find(function (a) { return a.id === time; });
            this.model.time_index = this.model.times.indexOf(exists);
        }
        this.loadDurations(true);
    };
    SpaceFlowSearchOptionsComponent.prototype.cleanTime = function (datestamp, block_size) {
        if (block_size === void 0) { block_size = 5; }
        if (!datestamp) {
            datestamp = moment__WEBPACK_IMPORTED_MODULE_4__().valueOf();
        }
        var now = moment__WEBPACK_IMPORTED_MODULE_4__().seconds(0).milliseconds(0);
        now.minutes(Math.ceil(now.minutes() / block_size) * block_size);
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(datestamp).seconds(0).milliseconds(0);
        if (date.isBefore(now, 'm')) {
            date = moment__WEBPACK_IMPORTED_MODULE_4__(now);
        }
        else {
            date.minutes(Math.ceil(date.minutes() / block_size) * block_size);
        }
        return date.valueOf();
    };
    SpaceFlowSearchOptionsComponent.prototype.loadDurations = function (init) {
        if (init === void 0) { init = false; }
        this.filters.date = this.cleanTime(this.filters.date);
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
        var end = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date).add(240, 'm');
        date.add(30, 'm');
        var duration = 30;
        this.model.durations = [];
        for (; date.isBefore(end, 'm'); date.add(15, 'm')) {
            if (init && this.filters.duration && duration === this.filters.duration) {
                this.model.duration_index = this.model.durations.length;
            }
            this.model.durations.push({
                id: duration,
                name: date.format('hh:mm A') + " (" + _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__["Utils"].humaniseDuration(duration) + ")"
            });
            duration += 15;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpaceFlowSearchOptionsComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowSearchOptionsComponent.prototype, "filtersChange", void 0);
    SpaceFlowSearchOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'space-flow-search-options',
            template: __webpack_require__(/*! ./search-options.template.html */ "./src/app/shell/booking/space-flow/search-options/search-options.template.html"),
            styles: [__webpack_require__(/*! ./search-options.styles.scss */ "./src/app/shell/booking/space-flow/search-options/search-options.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], SpaceFlowSearchOptionsComponent);
    return SpaceFlowSearchOptionsComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/space-flow/search-options/search-options.styles.scss":
/*!************************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/search-options/search-options.styles.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .25em; }\n.icon img {\n    height: 1em; }\n.block {\n  width: 100%;\n  padding: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.block.search {\n    background-color: #fff; }\n.block.break {\n    background-color: #e4e4e4; }\n.content {\n  max-width: 768px;\n  width: 100%; }\n.option {\n  background-position: center;\n  background-size: cover;\n  padding: 2em 1em; }\nbtn {\n  font-size: 1.2em; }\nbtn .icon {\n    margin-left: -.125em; }\n.value {\n  margin: .5em 0; }\n.form {\n  padding: 0 1em;\n  font-size: 1.1em; }\n.form .options {\n    display: -webkit-box;\n    display: flex; }\n.form btn {\n    -webkit-box-flex: 1;\n            flex: 1;\n    margin: .25em; }\n.to-upper {\n  font-size: 1.5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9zcGFjZS1mbG93L3NlYXJjaC1vcHRpb25zL3NlYXJjaC1vcHRpb25zLnN0eWxlcy5zY3NzIiwiL1VzZXJzL2JlbmhvYWQvUHJvamVjdHMvbWNrLW91dGxvb2stYWRkaW4vc3JjL2FwcC9zaGVsbC9ib29raW5nL3NwYWNlLWZsb3cvc2VhcmNoLW9wdGlvbnMvc2VhcmNoLW9wdGlvbnMuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2lDQ0VpQztBRCtCakM7O3VCQzVCdUI7QUR5Q3ZCOztzQkN0Q3NCO0FDTnRCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYSxFQUFBO0FBTmpCO0lBUVEsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtBQUwzQjtJQU9RLHNCQUFzQixFQUFBO0FBUDlCO0lBVVEseUJBQXlCLEVBQUE7QUFJakM7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBO0FBR2Y7RUFDSSwyQkFBMkI7RUFDM0Isc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUE7QUFEcEI7SUFHUSxvQkFBb0IsRUFBQTtBQUk1QjtFQUNJLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTtBQUZwQjtJQUtRLG9CQUFhO0lBQWIsYUFBYSxFQUFBO0FBTHJCO0lBU1EsbUJBQU87WUFBUCxPQUFPO0lBQ1AsYUFBYSxFQUFBO0FBSXJCO0VBQ0ksZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9ib29raW5nL3NwYWNlLWZsb3cvc2VhcmNoLW9wdGlvbnMvc2VhcmNoLW9wdGlvbnMuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3M6ICMzMDliNDA7XG4kc3VjY2Vzcy1hbHQ6ICM0Mjg1ZjQ7XG4kZXJyb3I6ICNkYjI5MWQ7XG4kcGVuZGluZzogI0ZGOTgwMDtcbiRuZXV0cmFsOiAjNzk3OTc5O1xuXG4kYmFja2dyb3VuZDogI2VjZjFmNTtcblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcbiRjb2xvci1wcmltYXJ5LXdpcmVmcmFtZTpyZ2JhKDAsIDAsIDAsIDAuNjEpO1xuJGhlYWRlci1iZzogI2ZmZjtcbiRoZWFkZXItY29sb3I6IHJnYmEoIzAwMjk2MCwgLjg3KTtcblxuJHRpbGUtY29sb3I6ICNmZmY7XG4kdGlsZS1ib3JkZXI6ICNmZmY7XG5cbiRoZWxwLWJvcmRlcjogcmdiYSgjMDAwLCAuMik7XG5cbiRjb2xvci1wcmltYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeTogIzQwNDg1YTtcbiRjb2xvci10ZXJuYXJ5OiAjYzc5OTYxO1xuJGNvbG9yLXF1YXRlcm5hcnk6ICM3ZGQ2ZDY7XG4kY29sb3ItcXVpbnRlcm5hcnk6ICM0YzVjNmM7XG4kY29sb3Itc2V4dGVybmFyeTogIzdmZTQzYjtcblxuJHRpbWVsaW5lLWJnOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzRGNUY3MCAwJSwgIzBGMTIxNSAxMDAlKTtcbiR0aW1lbGluZS1ldmVudDogJGVycm9yO1xuJHRpbWVsaW5lLWJvb2tpbmc6ICRjb2xvci1xdWF0ZXJuYXJ5O1xuXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTRweDtcblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kbWFpbi1mb250OiAkZm9udC1zdGFjaztcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEuMjVlbTtcbiAgd2lkdGg6IDEuMjVlbTtcbiAgbWFyZ2luOiAuMjVlbTsgfVxuICAuaWNvbiBpbWcge1xuICAgIGhlaWdodDogMWVtOyB9XG5cbi5ibG9jayB7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gIC5ibG9jay5zZWFyY2gge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cbiAgLmJsb2NrLmJyZWFrIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTRlNGU0OyB9XG5cbi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA3NjhweDtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLm9wdGlvbiB7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgcGFkZGluZzogMmVtIDFlbTsgfVxuXG5idG4ge1xuICBmb250LXNpemU6IDEuMmVtOyB9XG4gIGJ0biAuaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IC0uMTI1ZW07IH1cblxuLnZhbHVlIHtcbiAgbWFyZ2luOiAuNWVtIDA7IH1cblxuLmZvcm0ge1xuICBwYWRkaW5nOiAwIDFlbTtcbiAgZm9udC1zaXplOiAxLjFlbTsgfVxuICAuZm9ybSAub3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDsgfVxuICAuZm9ybSBidG4ge1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luOiAuMjVlbTsgfVxuXG4udG8tdXBwZXIge1xuICBmb250LXNpemU6IDEuNWVtOyB9XG4iLCJAaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEuMjVlbTtcbiAgICB3aWR0aDogMS4yNWVtO1xuICAgIG1hcmdpbjogLjI1ZW07XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgfVxufVxuXG4uYmxvY2sge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgJi5zZWFyY2gge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbiAgICAmLmJyZWFrIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U0ZTRlNDtcbiAgICB9XG59XG5cbi5jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ub3B0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBwYWRkaW5nOiAyZW0gMWVtO1xufVxuXG5idG4ge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgLmljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogLS4xMjVlbTtcbiAgICB9XG59XG5cbi52YWx1ZSB7XG4gICAgbWFyZ2luOiAuNWVtIDA7XG59XG5cbi5mb3JtIHtcbiAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuXG4gICAgLm9wdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIGJ0biB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1hcmdpbjogLjI1ZW07XG4gICAgfVxufVxuXG4udG8tdXBwZXIge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG59Il19 */"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/search-options/search-options.template.html":
/*!**************************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/search-options/search-options.template.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block header\">\n    <div class=\"content to-upper\">\n        How would you like<br>\n        to search?\n    </div>\n</div>\n<div class=\"block option\" [style.background-image]=\"'url(assets/img/attendee.png)'\">\n    <div class=\"content\">\n        <btn klass=\"full-width banner\" (tapped)=\"toAttendees()\">\n            <div class=\"icon\"><img src=\"assets/img/time.svg\"></div>\n            <div class=\"text\">Find time suitable for all attendees</div>\n        </btn>\n    </div>\n</div>\n<div class=\"block break\">\n    <div class=\"content to-upper\">Or</div>\n</div>\n<div class=\"block search\">\n    <div class=\"content\">\n        <div class=\"header to-upper\">Search rooms</div>\n        <div class=\"form\">\n            <div class=\"field\">\n                <label for=\"date\">Date</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"date\" [list]=\"model.dates\" [(model)]=\"model.date_index\" (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"time\">Time</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"time\" [list]=\"model.times\" [(model)]=\"model.time_index\" (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"duration\">Duration</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"duration\" [list]=\"model.durations\" [(model)]=\"model.duration_index\"\n                        (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"level\">Level</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"level\" [list]=\"model.levels\" [(model)]=\"model.level_index\"\n                        (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"count\">Paticipants</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"count\" [list]=\"model.capacity\" [(model)]=\"model.capacity_index\"\n                        (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <hr />\n            <div class=\"options\">\n                <btn klass=\"full-width secondary\" (tapped)=\"toFilters()\">\n                    <div class=\"icon\"><i class=\"material-icons\">filter_list</i></div>\n                    <div class=\"text\">Add filters</div>\n                </btn>\n                <btn klass=\"full-width\" (tapped)=\"toSpaces()\">\n                    <div class=\"icon\"><i class=\"material-icons\">search</i></div>\n                    <div class=\"text\">Search</div>\n                </btn>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/select-space/select-space.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/select-space/select-space.component.ts ***!
  \*********************************************************************************/
/*! exports provided: SpaceFlowSelectSpaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceFlowSelectSpaceComponent", function() { return SpaceFlowSelectSpaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utility.class */ "./src/app/shared/utility.class.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpaceFlowSelectSpaceComponent = /** @class */ (function (_super) {
    __extends(SpaceFlowSelectSpaceComponent, _super);
    function SpaceFlowSelectSpaceComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.space = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.filtersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {};
        return _this;
    }
    SpaceFlowSelectSpaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.obs.rooms = this.service.Rooms.listen('list', function (rooms) { return _this.search(); });
        if (!this.filters) {
            this.filters = {};
        }
    };
    SpaceFlowSelectSpaceComponent.prototype.ngOnChanges = function (changes) {
        if (changes.filters) {
            this.search();
            this.updateFilterList();
        }
    };
    SpaceFlowSelectSpaceComponent.prototype.search = function () {
        var _this = this;
        if (!this.service.Buildings.current()) {
            setTimeout(function () { return _this.search(); }, 300);
        }
        this.updateDate();
        this.loading.emit('Searching...');
        if (!this.filters) {
            this.filters = {};
        }
        this.service.Rooms.available({
            date: this.filters.date,
            duration: this.filters.duration
        }).then(function (list) {
            _this.loading.emit(false);
            _this.model.rooms = _this.service.Rooms.list();
            _this.model.items = list;
            _this.model.search_results = list;
            for (var _i = 0, _a = _this.model.items; _i < _a.length; _i++) {
                var rm = _a[_i];
                rm.in_use_at_time = true;
                for (var _b = 0, _c = _this.model.search_results; _b < _c.length; _b++) {
                    var i = _c[_b];
                    if (rm.id === i.id) {
                        rm.in_use_at_time = false;
                        break;
                    }
                }
            }
            _this.filter();
        }, function (err) { return _this.loading.emit(false); });
    };
    SpaceFlowSelectSpaceComponent.prototype.filter = function () {
        this.loading.emit('Filtering...');
        this.model.filtered_items = [];
        if (this.filters) {
            // Set level
            var level = this.service.Buildings.getLevel(this.filters.level);
            // Set Capacity
            var capacity = this.filters.capacity || -1;
            if (this.model.items) {
                var item_list = this.model.search_results;
                for (var _i = 0, item_list_1 = item_list; _i < item_list_1.length; _i++) {
                    var rm = item_list_1[_i];
                    rm.in_use_at_time = true;
                    for (var _a = 0, _b = this.model.search_results; _a < _b.length; _a++) {
                        var i = _b[_a];
                        if (rm.id === i.id) {
                            rm.in_use_at_time = false;
                            break;
                        }
                    }
                }
                for (var _c = 0, item_list_2 = item_list; _c < item_list_2.length; _c++) {
                    var item = item_list_2[_c];
                    var match = true;
                    // Check levels
                    match = match && (!level || (level.id === -1 || item.level.id === level.id));
                    // Check client floor when external users present
                    match = match && (!this.model.has_external || !this.model.external_floors || this.model.external_floors.length <= 0 || (this.model.external_floors.indexOf(item.level.type.toLowerCase()) >= 0));
                    // Check level type
                    match = match && (!this.model.floor || (item.level.type.toLowerCase() === this.model.floor.toLowerCase()));
                    // Check capacity
                    match = match && (capacity <= 0 || item.capacity >= capacity);
                    var count = 0;
                    var found = 0;
                    for (var _d = 0, _e = (this.filters.extras || []); _d < _e.length; _d++) {
                        var e = _e[_d];
                        if (e.filter) {
                            count++;
                        }
                        for (var _f = 0, _g = item.extras; _f < _g.length; _f++) {
                            var r_e = _g[_f];
                            if (r_e.id === e.id && e.filter) {
                                found++;
                            }
                        }
                    }
                    match = match && (found >= count);
                    if (match) {
                        this.model.filtered_items.push(item);
                    }
                }
            }
        }
        else {
            this.model.filtered_items = this.model.filtered_items.concat(this.model.items || []);
        }
        this.model.filtered_items.sort(function (a, b) {
            var da = {
                lvl: (a.level ? a.level.name : '') || '',
                name: a.name
            };
            var db = {
                lvl: (a.level ? b.level.name : b.name) || '',
                name: b.name
            };
            return a.order - b.order || da.lvl.localeCompare(db.lvl) || da.name.localeCompare(db.name);
        });
        if (!this.model.searching) {
            this.loading.emit(false);
        }
    };
    SpaceFlowSelectSpaceComponent.prototype.updateDate = function () {
        this.model.date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date).format('dddd D/MM/YYYY');
    };
    SpaceFlowSelectSpaceComponent.prototype.changeDate = function (offset) {
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
        date.add(offset, 'd');
        var now = moment__WEBPACK_IMPORTED_MODULE_4__();
        while (date.isBefore(now, 'm')) {
            date.add(1, 'd');
        }
        this.filters.date = date.valueOf();
        this.post();
        this.search();
    };
    SpaceFlowSelectSpaceComponent.prototype.post = function () {
        var _this = this;
        this.timeout('post', function () {
            _this.updateFilterList();
            _this.filtersChange.emit(_this.filters);
        });
    };
    SpaceFlowSelectSpaceComponent.prototype.updateFilterList = function () {
        this.model.filter_list = [];
        var level = this.service.Buildings.getLevel(this.filters.level);
        this.model.filter_list.push({
            id: 'level',
            type: level && level.name ? level.id : -1,
            value: level ? level.name || 'Any Level' : 'Any Level'
        });
        var cap = this.filters.capacity;
        this.model.filter_list.push({
            id: 'capacity',
            type: cap && cap > 0 ? 1 : -1,
            value: cap && cap > 0 ? cap + " " + (cap === 1 ? 'person' : 'people') : 'Any capacity'
        });
        var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
        this.model.filter_list.push({
            id: 'date',
            type: date.isValid() && date.isSameOrAfter(moment__WEBPACK_IMPORTED_MODULE_4__(), 'm') ? 1 : -1,
            value: date.format('hh:mm A')
        });
        this.model.filter_list.push({
            id: 'duration',
            type: this.filters.duration && this.filters.duration > 30 ? 1 : -1,
            value: _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__["Utils"].humaniseDuration(this.filters.duration || 30, true)
        });
        for (var _i = 0, _a = (this.filters.extras || []); _i < _a.length; _i++) {
            var item = _a[_i];
            if (item.filter) {
                this.model.filter_list.push({
                    id: 'extras',
                    type: item.id,
                    value: item.name
                });
            }
        }
    };
    SpaceFlowSelectSpaceComponent.prototype.clearFilter = function (filter) {
        var change = false;
        if (filter.type !== -1) {
            if (filter.id === 'extras') {
                for (var _i = 0, _a = (this.filters.extras || []); _i < _a.length; _i++) {
                    var item = _a[_i];
                    if (item.filter && item.id === filter.type) {
                        item.filter = false;
                        change = true;
                    }
                }
            }
            else {
                switch (filter.id) {
                    case 'level':
                        this.filters.level = null;
                        change = true;
                        break;
                    case 'capacity':
                        this.filters.capacity = -1;
                        change = true;
                        break;
                    case 'duration':
                        this.filters.duration = 30;
                        change = true;
                        break;
                    case 'date':
                        var now = moment__WEBPACK_IMPORTED_MODULE_4__();
                        var date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filters.date);
                        date.hours(now.hours()).minutes(Math.ceil(now.minutes() / 5) * 5);
                        this.filters.date = date.valueOf();
                        change = true;
                        break;
                }
            }
        }
        if (change) {
            this.post();
            this.search();
        }
    };
    SpaceFlowSelectSpaceComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'space', name], query);
    };
    SpaceFlowSelectSpaceComponent.prototype.toBook = function (rm) {
        var _this = this;
        this.loading.emit('Checking room is still available...');
        this.service.Rooms.isAvailable(rm.id, this.filters.date, this.filters.duration)
            .then(function () {
            _this.loading.emit(false);
            _this.space.emit(rm.id);
            _this.to('confirm-details', { room_id: rm.id });
        }, function () {
            _this.service.error("Room \"" + rm.name + "\" is now unavailable");
            _this.search();
        });
    };
    SpaceFlowSelectSpaceComponent.prototype.toMap = function (rm) { this.to('map', { room_id: rm.id }); };
    SpaceFlowSelectSpaceComponent.prototype.toFilters = function () { this.to('filters'); };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpaceFlowSelectSpaceComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowSelectSpaceComponent.prototype, "space", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowSelectSpaceComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpaceFlowSelectSpaceComponent.prototype, "filtersChange", void 0);
    SpaceFlowSelectSpaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'space-flow-select-space',
            template: __webpack_require__(/*! ./select-space.template.html */ "./src/app/shell/booking/space-flow/select-space/select-space.template.html"),
            styles: [__webpack_require__(/*! ./select-space.styles.scss */ "./src/app/shell/booking/space-flow/select-space/select-space.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], SpaceFlowSelectSpaceComponent);
    return SpaceFlowSelectSpaceComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/space-flow/select-space/select-space.styles.scss":
/*!********************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/select-space/select-space.styles.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.container > * {\n    width: 100%; }\n.block {\n  position: relative;\n  width: 100%;\n  padding: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.block.date {\n    background-color: #fff;\n    border-top: 1px solid #f0f0f0; }\n.date .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.filter-list {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap; }\n.filter {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: .25em;\n  white-space: nowrap;\n  background-color: #c79961;\n  border: 1px solid #8f6633;\n  color: rgba(0, 0, 0, 0.54); }\n.filter .text {\n    -webkit-box-flex: 1;\n            flex: 1;\n    margin: .5em; }\n.filter .icon {\n    margin-left: 0; }\n.date-toggle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #4285F4;\n  font-size: 1.2em; }\n.date-toggle .arrow {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    height: 1.5em;\n    width: 1.5em;\n    border: 1px solid #4285F4;\n    font-size: 1.2em;\n    cursor: pointer; }\n.date-toggle .day {\n    border-top: 1px solid #4285F4;\n    border-bottom: 1px solid #4285F4;\n    padding: .25em .5em; }\n.header {\n  font-size: 1.2em; }\n.header .filters {\n    margin: .5em 0; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  min-width: 1.25em;\n  margin: .25em; }\n.icon img {\n    height: 1em; }\n.item {\n  background-color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin-bottom: 1em;\n  padding: .5em;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n.item:last-child {\n    margin: 0; }\n.item .icon {\n    font-size: 1.5em; }\n.details {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 50%; }\n.detail {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  font-size: 1.2em; }\n.detail .text {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n.options {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\nbtn {\n  font-size: 1.2em; }\nbtn .icon {\n    margin-left: -.125em; }\n.list {\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 50%;\n  overflow: auto;\n  background-color: #D4EDF1;\n  -webkit-box-align: start;\n          align-items: flex-start; }\n.content {\n  max-width: 768px;\n  width: 100%; }\nbtn {\n  font-size: 1.2em; }\nbtn .icon {\n    margin-left: -.125em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9zcGFjZS1mbG93L3NlbGVjdC1zcGFjZS9zZWxlY3Qtc3BhY2Uuc3R5bGVzLnNjc3MiLCIvVXNlcnMvYmVuaG9hZC9Qcm9qZWN0cy9tY2stb3V0bG9vay1hZGRpbi9zcmMvYXBwL3NoZWxsL2Jvb2tpbmcvc3BhY2UtZmxvdy9zZWxlY3Qtc3BhY2Uvc2VsZWN0LXNwYWNlLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztpQ0NFaUM7QUQrQmpDOzt1QkM1QnVCO0FEeUN2Qjs7c0JDdENzQjtBQ050QjtFQUNJLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCLEVBQUE7QUFOMUI7SUFRUSxXQUFXLEVBQUE7QUFJbkI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtBQU4zQjtJQVFRLHNCQUFzQjtJQUN0Qiw2QkFBNkIsRUFBQTtBQUlyQztFQUVRLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0FBSS9CO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZSxFQUFBO0FBR25CO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCRnJCbUI7RUVzQm5CLHlCQUE0QztFQUM1QywwQkFBZ0IsRUFBQTtBQVBwQjtJQVNRLG1CQUFPO1lBQVAsT0FBTztJQUNQLFlBQVksRUFBQTtBQVZwQjtJQWNRLGNBQWMsRUFBQTtBQUl0QjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsY0Z2Q21CO0VFd0NuQixnQkFBZ0IsRUFBQTtBQUpwQjtJQU1RLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCRi9DZTtJRWdEZixnQkFBZ0I7SUFDaEIsZUFBZSxFQUFBO0FBYnZCO0lBZ0JRLDZCRnBEZTtJRXFEZixnQ0ZyRGU7SUVzRGYsbUJBQW1CLEVBQUE7QUFJM0I7RUFDSSxnQkFBZ0IsRUFBQTtBQURwQjtJQUdRLGNBQWMsRUFBQTtBQUl0QjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWEsRUFBQTtBQU5qQjtJQVFRLFdBQVcsRUFBQTtBQUluQjtFQUNJLHNCQUFzQjtFQUN0QixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsdUhBQTJGO1VBQTNGLCtHQUEyRixFQUFBO0FBTi9GO0lBUVEsU0FBUyxFQUFBO0FBUmpCO0lBV1EsZ0JBQWdCLEVBQUE7QUFJeEI7RUFDSSxtQkFBTztVQUFQLE9BQU87RUFDUCxVQUFVLEVBQUE7QUFHZDtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZ0JBQWdCLEVBQUE7QUFIcEI7SUFLUSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBO0FBSS9CO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBO0FBRzFCO0VBQ0ksZ0JBQWdCLEVBQUE7QUFEcEI7SUFHUSxvQkFBb0IsRUFBQTtBQUk1QjtFQUNJLG1CQUFPO1VBQVAsT0FBTztFQUNQLFdBQVc7RUFDWCxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtBQUczQjtFQUNJLGdCQUFnQjtFQUNoQixXQUFXLEVBQUE7QUFHZjtFQUNJLGdCQUFnQixFQUFBO0FBRHBCO0lBR1Esb0JBQW9CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9ib29raW5nL3NwYWNlLWZsb3cvc2VsZWN0LXNwYWNlL3NlbGVjdC1zcGFjZS5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2VzczogIzMwOWI0MDtcbiRzdWNjZXNzLWFsdDogIzQyODVmNDtcbiRlcnJvcjogI2RiMjkxZDtcbiRwZW5kaW5nOiAjRkY5ODAwO1xuJG5ldXRyYWw6ICM3OTc5Nzk7XG5cbiRiYWNrZ3JvdW5kOiAjZWNmMWY1O1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuJGNvbG9yLXByaW1hcnktd2lyZWZyYW1lOnJnYmEoMCwgMCwgMCwgMC42MSk7XG4kaGVhZGVyLWJnOiAjZmZmO1xuJGhlYWRlci1jb2xvcjogcmdiYSgjMDAyOTYwLCAuODcpO1xuXG4kdGlsZS1jb2xvcjogI2ZmZjtcbiR0aWxlLWJvcmRlcjogI2ZmZjtcblxuJGhlbHAtYm9yZGVyOiByZ2JhKCMwMDAsIC4yKTtcblxuJGNvbG9yLXByaW1hcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5OiAjNDA0ODVhO1xuJGNvbG9yLXRlcm5hcnk6ICNjNzk5NjE7XG4kY29sb3ItcXVhdGVybmFyeTogIzdkZDZkNjtcbiRjb2xvci1xdWludGVybmFyeTogIzRjNWM2YztcbiRjb2xvci1zZXh0ZXJuYXJ5OiAjN2ZlNDNiO1xuXG4kdGltZWxpbmUtYmc6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNEY1RjcwIDAlLCAjMEYxMjE1IDEwMCUpO1xuJHRpbWVsaW5lLWV2ZW50OiAkZXJyb3I7XG4kdGltZWxpbmUtYm9va2luZzogJGNvbG9yLXF1YXRlcm5hcnk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNHB4O1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRtYWluLWZvbnQ6ICRmb250LXN0YWNrO1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAuY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7IH1cblxuLmJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAuYmxvY2suZGF0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDsgfVxuXG4uZGF0ZSAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi5maWx0ZXItbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDsgfVxuXG4uZmlsdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiAuMjVlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M3OTk2MTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzhmNjYzMztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cbiAgLmZpbHRlciAudGV4dCB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW46IC41ZW07IH1cbiAgLmZpbHRlciAuaWNvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7IH1cblxuLmRhdGUtdG9nZ2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6ICM0Mjg1RjQ7XG4gIGZvbnQtc2l6ZTogMS4yZW07IH1cbiAgLmRhdGUtdG9nZ2xlIC5hcnJvdyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM0Mjg1RjQ7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmRhdGUtdG9nZ2xlIC5kYXkge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNDI4NUY0O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjNDI4NUY0O1xuICAgIHBhZGRpbmc6IC4yNWVtIC41ZW07IH1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07IH1cbiAgLmhlYWRlciAuZmlsdGVycyB7XG4gICAgbWFyZ2luOiAuNWVtIDA7IH1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjI1ZW07XG4gIG1pbi13aWR0aDogMS4yNWVtO1xuICBtYXJnaW46IC4yNWVtOyB9XG4gIC5pY29uIGltZyB7XG4gICAgaGVpZ2h0OiAxZW07IH1cblxuLml0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIHBhZGRpbmc6IC41ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICAuaXRlbTpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDA7IH1cbiAgLml0ZW0gLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07IH1cblxuLmRldGFpbHMge1xuICBmbGV4OiAxO1xuICB3aWR0aDogNTAlOyB9XG5cbi5kZXRhaWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXNpemU6IDEuMmVtOyB9XG4gIC5kZXRhaWwgLnRleHQge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuXG4ub3B0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuYnRuIHtcbiAgZm9udC1zaXplOiAxLjJlbTsgfVxuICBidG4gLmljb24ge1xuICAgIG1hcmdpbi1sZWZ0OiAtLjEyNWVtOyB9XG5cbi5saXN0IHtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA1MCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRFREYxO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDsgfVxuXG4uY29udGVudCB7XG4gIG1heC13aWR0aDogNzY4cHg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbmJ0biB7XG4gIGZvbnQtc2l6ZTogMS4yZW07IH1cbiAgYnRuIC5pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogLS4xMjVlbTsgfVxuIiwiQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAmID4gKiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmJsb2NrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAmLmRhdGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICB9XG59XG5cbi5kYXRlIHtcbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbn1cblxuLmZpbHRlci1saXN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZpbHRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogLjI1ZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGVybmFyeTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBkYXJrZW4oJGNvbG9yLXRlcm5hcnksIDIwKTtcbiAgICBjb2xvcjogcmdiYSgjMDAwLCAuNTQpO1xuICAgIC50ZXh0IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWFyZ2luOiAuNWVtO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxufVxuXG4uZGF0ZS10b2dnbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAuYXJyb3cge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgICAuZGF5IHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIHBhZGRpbmc6IC4yNWVtIC41ZW07XG4gICAgfVxufVxuXG4uaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIC5maWx0ZXJzIHtcbiAgICAgICAgbWFyZ2luOiAuNWVtIDA7XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS4yNWVtO1xuICAgIG1pbi13aWR0aDogMS4yNWVtO1xuICAgIG1hcmdpbjogLjI1ZW07XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgfVxufVxuXG4uaXRlbSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwuMTIpO1xuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG4gICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cbn1cblxuLmRldGFpbHMge1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDUwJTtcbn1cblxuLmRldGFpbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgLnRleHQge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG59XG5cbi5vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuYnRuIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIC5pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0uMTI1ZW07XG4gICAgfVxufVxuXG4ubGlzdCB7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRFREYxO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuXG4uY29udGVudCB7XG4gICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuYnRuIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIC5pY29uIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0uMTI1ZW07XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/select-space/select-space.template.html":
/*!**********************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/select-space/select-space.template.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"block header\">\n        <div class=\"content\">\n            <div class=\"header to-upper\">Available rooms</div>\n            <div class=\"filters\">\n                <btn klass=\"no-margin secondary\" (tapped)=\"toFilters()\">\n                    <div class=\"icon\"><i class=\"material-icons\">filter_list</i></div>\n                    <div class=\"text\">Add filters</div>\n                </btn>\n            </div>\n            <div class=\"filter-list\" *ngIf=\"model.filter_list\">\n                <div class=\"filter\" *ngFor=\"let item of model.filter_list\">\n                    <div class=\"text\">{{item.value}}</div>\n                    <div class=\"icon\" *ngIf=\"item.type !== -1\" (touchrelease)=\"clearFilter(item)\">\n                        <i class=\"material-icons\">close</i>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"block list\">\n        <div class=\"content\">\n            <div class=\"item\" *ngFor=\"let item of (model.filtered_items || [])\">\n                <div class=\"details\">\n                    <div class=\"detail\">\n                        <div class=\"icon\">\n                            <img src=\"assets/img/location.svg\">\n                        </div>\n                        <div class=\"text\">{{item.level?.name}}, {{item.name}}</div>\n                    </div>\n                    <div class=\"detail\">\n                        <div class=\"icon\">\n                            <img src=\"assets/img/persona.svg\">\n                        </div>\n                        <div class=\"text\">{{item.capacity}} {{item.capacity === 1 ? 'person' : 'people'}}</div>\n                    </div>\n                </div>\n                <div class=\"options\">\n                    <btn (tapped)=\"toBook(item)\">Book</btn>\n                    <btn (tapped)=\"toMap(item)\">Map</btn>\n                </div>\n            </div>\n        </div>\n        <div class=\"no-item\" center *ngIf=\"!model.filtered_items || model.filtered_items.length <= 0\">\n            <div class=\"icon\">\n                <i class=\"material-icons\">close</i>\n            </div>\n            <div class=\"text\">No spaces found</div>\n        </div>\n    </div>\n    <div class=\"block date\">\n        <div class=\"content\">\n            <div class=\"date-toggle\">\n                <div class=\"arrow prev\" (touchrelease)=\"changeDate(-1)\">\n                    <i class=\"material-icons\">keyboard_arrow_left</i>\n                </div>\n                <div class=\"day\">{{model.date}}</div>\n                <div class=\"arrow next\" (touchrelease)=\"changeDate(1)\">\n                    <i class=\"material-icons\">keyboard_arrow_right</i>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/select-time/select-time.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/select-time/select-time.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SpaceFlowSelectTimeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceFlowSelectTimeComponent", function() { return SpaceFlowSelectTimeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _shared_utility_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/utility.class */ "./src/app/shared/utility.class.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpaceFlowSelectTimeComponent = /** @class */ (function (_super) {
    __extends(SpaceFlowSelectTimeComponent, _super);
    function SpaceFlowSelectTimeComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.filtersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {};
        return _this;
    }
    SpaceFlowSelectTimeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.settings = this.service.Settings.get('app.booking') || {};
        this.generateDay();
        this.updateDisplay();
        this.interval('update', function () { return _this.generateDay(); }, 2 * 60 * 1000);
    };
    SpaceFlowSelectTimeComponent.prototype.ngOnChanges = function (changes) {
        if (changes.attendees) {
            this.disableInUseBlocks();
        }
    };
    SpaceFlowSelectTimeComponent.prototype.generateDay = function () {
        this.model.blocks = [];
        var date = moment__WEBPACK_IMPORTED_MODULE_3__(this.filters.date);
        date.minutes(Math.ceil(date.minutes() / 5) * 5);
        var now = moment__WEBPACK_IMPORTED_MODULE_3__();
        now.minutes(Math.floor(now.minutes() / 5) * 5);
        var time = moment__WEBPACK_IMPORTED_MODULE_3__(date).hours(6).minutes(0);
        var end = moment__WEBPACK_IMPORTED_MODULE_3__(time).hours(20).minutes(0);
        for (; time.isBefore(end); time.add(5, 'm')) {
            this.model.blocks.push({
                id: time.format('HH:mm'),
                display: time.format('HH:mm'),
                hour: time.minutes() === 0,
                show: time.minutes() % 30 === 0,
                disabled: time.isBefore(now, 'm')
            });
        }
        this.disableInUseBlocks();
    };
    SpaceFlowSelectTimeComponent.prototype.move = function (e) {
        var _this = this;
        this.timeout('move', function () {
            if (!_this.filters) {
                _this.filters = {};
            }
            if (!_this.model.offset) {
                _this.model.offset = { x: 0, y: 0 };
            }
            if (_this.model.move && _this.block) {
                var center = {
                    x: e.touches && e.touches.length > 0 ? e.touches[0].clientX || e.clientX : e.clientX,
                    y: e.touches && e.touches.length > 0 ? e.touches[0].clientY || e.clientY : e.clientY
                };
                var off = _this.model.move === 'bottom' ? { x: 0, y: 0 } : _this.model.offset;
                var content_box = _this.block.nativeElement.getBoundingClientRect();
                var percent_w = ((center.x - off.x) - content_box.left) / content_box.width;
                var percent_h = ((center.y - off.y) - content_box.top) / content_box.height;
                var percent = _this.model.vertical ? percent_w : percent_h;
                var start_time = _this.model.settings.start_hour || 6;
                var end_time = (_this.model.settings.end_hour || 20);
                var diff_time = end_time - start_time;
                var block_size = _this.model.settings.block_size || 15;
                var hour = Math.ceil((diff_time * percent + start_time) * (60 / block_size)) / (60 / block_size);
                if (_this.model.move === 'bottom') {
                    var date = moment__WEBPACK_IMPORTED_MODULE_3__(_this.filters.date);
                    var end = moment__WEBPACK_IMPORTED_MODULE_3__(_this.filters.date).hours(Math.floor(hour)).minutes(Math.floor((hour * 60) % 60));
                    if (end.isSameOrBefore(date, 'm')) {
                        date = moment__WEBPACK_IMPORTED_MODULE_3__(end).add(-_this.filters.duration, 'm');
                        _this.filters.date = date.valueOf();
                    }
                    else {
                        var duration = Math.floor(moment__WEBPACK_IMPORTED_MODULE_3__["duration"](end.diff(date)).asMinutes());
                        _this.filters.duration = Math.max(30, (duration || block_size));
                    }
                }
                else if (_this.model.move === 'top') {
                    var date = moment__WEBPACK_IMPORTED_MODULE_3__(_this.filters.date).hours(Math.floor(hour)).minutes(Math.floor((hour * 60) % 60));
                    _this.filters.date = date.valueOf();
                }
                _this.post();
            }
        }, 10);
    };
    SpaceFlowSelectTimeComponent.prototype.setOffset = function (e) {
        if (this.time) {
            var box = this.time.nativeElement.getBoundingClientRect();
            this.model.offset = { x: e.center.x - box.left, y: e.center.y - box.top };
        }
    };
    SpaceFlowSelectTimeComponent.prototype.post = function () {
        var _this = this;
        this.timeout('post', function () {
            _this.filtersChange.emit(_this.filters);
        }, 100);
        this.updateDisplay();
    };
    SpaceFlowSelectTimeComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'space', name], query);
    };
    SpaceFlowSelectTimeComponent.prototype.toSpaces = function () { this.to('spaces'); };
    SpaceFlowSelectTimeComponent.prototype.cancel = function () { this.back.emit(); };
    SpaceFlowSelectTimeComponent.prototype.changeDate = function (offset) {
        var date = moment__WEBPACK_IMPORTED_MODULE_3__(this.filters.date);
        date.add(offset, 'd');
        var now = moment__WEBPACK_IMPORTED_MODULE_3__().hours(0).minutes(0);
        while (date.isBefore(now, 'm')) {
            date.add(1, 'd');
        }
        this.filters.date = date.valueOf();
        this.generateDay();
        this.post();
    };
    SpaceFlowSelectTimeComponent.prototype.disableInUseBlocks = function () {
        var _this = this;
        if (!this.model.blocks) {
            return this.timeout('disable_blocks', function () { return _this.disableInUseBlocks(); });
        }
        this.model.blocks.forEach(function (item) { return item.in_use = false; });
        var _loop_1 = function (user) {
            if (user && !user.optional && !user.external) {
                var date_1 = moment__WEBPACK_IMPORTED_MODULE_3__(this_1.filters.date);
                this_1.service.Bookings.show(user.email, {
                    from: date_1.hours(0).minutes(0).seconds(0).unix(),
                    to: date_1.hours(23).minutes(59).seconds(59).unix()
                }).then(function (list) {
                    (list || []).forEach(function (bkn) {
                        var bkn_start = moment__WEBPACK_IMPORTED_MODULE_3__(bkn.date);
                        if (bkn_start.isSame(date_1, 'd')) {
                            bkn_start.minutes(Math.floor(bkn_start.minutes() / 5) * 5);
                            var bkn_end = moment__WEBPACK_IMPORTED_MODULE_3__(bkn_start).add(bkn.duration, 'm');
                            var _loop_2 = function () {
                                var format = bkn_start.format('HH:mm');
                                var blk = _this.model.blocks.find(function (item) { return item.id === format; });
                                if (blk) {
                                    blk.in_use = true;
                                }
                            };
                            for (; bkn_start.isBefore(bkn_end, 'm'); bkn_start.add(5, 'm')) {
                                _loop_2();
                            }
                        }
                    });
                });
            }
        };
        var this_1 = this;
        for (var _i = 0, _a = (this.attendees || []); _i < _a.length; _i++) {
            var user = _a[_i];
            _loop_1(user);
        }
    };
    SpaceFlowSelectTimeComponent.prototype.updateDisplay = function () {
        if (!this.filters) {
            this.filters = {};
        }
        if (!this.filters.date) {
            var date = moment__WEBPACK_IMPORTED_MODULE_3__().seconds(0).milliseconds(0);
            date.minutes(Math.ceil(date.minutes() / 5) * 5);
            this.filters.date = date.valueOf();
        }
        if (!this.filters.duration) {
            this.filters.duration = 30;
        }
        var start_time = this.model.settings.start_hour || 6;
        var end_time = (this.model.settings.end_hour || 20);
        var start = moment__WEBPACK_IMPORTED_MODULE_3__(this.filters.date);
        start.minutes(Math.ceil(start.minutes() / 5) * 5);
        var end = moment__WEBPACK_IMPORTED_MODULE_3__(start).add(this.filters.duration, 'm');
        var dur = _shared_utility_class__WEBPACK_IMPORTED_MODULE_4__["Utils"].humaniseDuration(this.filters.duration, true);
        this.model.display = start.format('hh:mm A') + " - " + end.format('hh:mm A') + " (" + dur + ")";
        this.model.date = "" + start.format('dddd D/MM/YYYY');
        this.model.active_start = ((start.hours() + start.minutes() / 60) - start_time) / (end_time - start_time);
        this.model.active_length = (this.filters.duration / 60) / (end_time - start_time);
        this.model.past = start.isBefore(moment__WEBPACK_IMPORTED_MODULE_3__());
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SpaceFlowSelectTimeComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], SpaceFlowSelectTimeComponent.prototype, "attendees", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowSelectTimeComponent.prototype, "filtersChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowSelectTimeComponent.prototype, "back", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('block'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SpaceFlowSelectTimeComponent.prototype, "block", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('time'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], SpaceFlowSelectTimeComponent.prototype, "time", void 0);
    SpaceFlowSelectTimeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'space-flow-select-time',
            template: __webpack_require__(/*! ./select-time.template.html */ "./src/app/shell/booking/space-flow/select-time/select-time.template.html"),
            styles: [__webpack_require__(/*! ./select-time.styles.scss */ "./src/app/shell/booking/space-flow/select-time/select-time.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"]])
    ], SpaceFlowSelectTimeComponent);
    return SpaceFlowSelectTimeComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/space-flow/select-time/select-time.styles.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/select-time/select-time.styles.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: #fff; }\n.container > * {\n    width: 100%; }\n.block {\n  position: relative;\n  width: 100%;\n  padding: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.block.header {\n    padding-bottom: 0; }\n.block.timeline {\n    display: block;\n    height: 50%;\n    -webkit-box-flex: 1;\n            flex: 1;\n    overflow: auto;\n    padding-bottom: 6em; }\n.content {\n  max-width: 768px;\n  width: 100%; }\n.timeline .content {\n  display: -webkit-box;\n  display: flex;\n  margin: auto; }\n.header {\n  font-size: 1.2em; }\n.date .content {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.date-toggle {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  color: #7dd6d6;\n  font-size: 1.2em; }\n.date-toggle .arrow {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    height: 1.5em;\n    width: 1.5em;\n    background-color: #c79961;\n    font-size: 1.2em;\n    border-radius: 100%;\n    cursor: pointer; }\n.date-toggle .day {\n    padding: .25em .5em; }\n.timeblocks,\n.eventblocks {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.timeblocks {\n  width: 3em; }\n.eventblocks {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1;\n  border: 1px solid #ccc;\n  width: 50%;\n  overflow: hidden; }\n.eventblocks .blk {\n    position: relative; }\n.blk {\n  position: relative;\n  min-height: .3em;\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 100%; }\n.blk.shown-block {\n    border-top: 1px dashed #ccc; }\n.blk.shown-block.hour {\n      border-top: 1px solid #ccc; }\n.blk.shown-block:first-child {\n      border: none; }\n.blk .text {\n    position: absolute;\n    top: 0;\n    right: .5em;\n    -webkit-transform: translateY(-50%);\n            transform: translateY(-50%); }\n.blk.in-use {\n    background-color: rgba(219, 41, 29, 0.1);\n    pointer-events: none; }\n.blk.disabled {\n    background-color: rgba(0, 0, 0, 0.05);\n    pointer-events: none; }\n.selected-time {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  border: 2px solid #c79961;\n  background-color: #7dd6d6;\n  color: #fff;\n  z-index: 100;\n  touch-action: none;\n  -webkit-transition: top 100ms, height 100ms;\n  transition: top 100ms, height 100ms; }\n.selected-time .inner {\n    height: 100%;\n    width: 100%;\n    padding: .25em 1em; }\n.selected-time .handle {\n    position: absolute;\n    height: 1em;\n    width: 1em;\n    border-radius: 100%;\n    background-color: #c79961;\n    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n.selected-time .handle.top {\n      top: 0;\n      right: 1em;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%); }\n.selected-time .handle.bottom {\n      bottom: 0;\n      left: 1em;\n      -webkit-transform: translateY(50%);\n              transform: translateY(50%); }\n.footer {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.54);\n  z-index: 200; }\n.footer .content {\n    display: -webkit-box;\n    display: flex;\n    font-size: 1.2em;\n    -webkit-box-pack: center;\n            justify-content: center; }\n.footer btn {\n    margin: .25em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9zcGFjZS1mbG93L3NlbGVjdC10aW1lL3NlbGVjdC10aW1lLnN0eWxlcy5zY3NzIiwiL1VzZXJzL2JlbmhvYWQvUHJvamVjdHMvbWNrLW91dGxvb2stYWRkaW4vc3JjL2FwcC9zaGVsbC9ib29raW5nL3NwYWNlLWZsb3cvc2VsZWN0LXRpbWUvc2VsZWN0LXRpbWUuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2lDQ0VpQztBRCtCakM7O3VCQzVCdUI7QUR5Q3ZCOztzQkN0Q3NCO0FDTHRCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQixFQUFBO0FBUjFCO0lBVVEsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7QUFOM0I7SUFTUSxpQkFBaUIsRUFBQTtBQVR6QjtJQWFRLGNBQWM7SUFDZCxXQUFXO0lBQ1gsbUJBQU87WUFBUCxPQUFPO0lBQ1AsY0FBYztJQUNkLG1CQUFtQixFQUFBO0FBSTNCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUdmO0VBRVEsb0JBQWE7RUFBYixhQUFhO0VBQ2IsWUFBWSxFQUFBO0FBSXBCO0VBQ0ksZ0JBQWdCLEVBQUE7QUFHcEI7RUFFUSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtBQUkvQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsY0Z4Q3NCO0VFeUN0QixnQkFBZ0IsRUFBQTtBQUpwQjtJQU9RLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsWUFBWTtJQUNaLHlCRmxEZTtJRW1EZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWUsRUFBQTtBQWZ2QjtJQW9CUSxtQkFBbUIsRUFBQTtBQUkzQjs7RUFFSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtBQUcxQjtFQUNJLFVBQVUsRUFBQTtBQUdkO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFPO1VBQVAsT0FBTztFQUNQLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsZ0JBQWdCLEVBQUE7QUFMcEI7SUFPUSxrQkFBa0IsRUFBQTtBQUkxQjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsbUJBQU87VUFBUCxPQUFPO0VBQ1AsV0FBVyxFQUFBO0FBSmY7SUFNUSwyQkFBMkIsRUFBQTtBQU5uQztNQVFZLDBCQUEwQixFQUFBO0FBUnRDO01BV1ksWUFBWSxFQUFBO0FBWHhCO0lBZ0JRLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sV0FBVztJQUNYLG1DQUEyQjtZQUEzQiwyQkFBMkIsRUFBQTtBQW5CbkM7SUF1QlEsd0NGOUhPO0lFK0hQLG9CQUFvQixFQUFBO0FBeEI1QjtJQTRCUSxxQ0FBMkI7SUFDM0Isb0JBQW9CLEVBQUE7QUFJNUI7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IseUJGM0htQjtFRTRIbkIseUJGM0hzQjtFRTRIdEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsMkNBQW1DO0VBQW5DLG1DQUFtQyxFQUFBO0FBVnZDO0lBYVEsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0IsRUFBQTtBQWYxQjtJQW1CUSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIseUJGN0llO0lFOElmLHVIQUEyRjtZQUEzRiwrR0FBMkYsRUFBQTtBQXhCbkc7TUEwQlksTUFBTTtNQUNOLFVBQVU7TUFDVixtQ0FBMkI7Y0FBM0IsMkJBQTJCLEVBQUE7QUE1QnZDO01BK0JZLFNBQVM7TUFDVCxTQUFTO01BQ1Qsa0NBQTBCO2NBQTFCLDBCQUEwQixFQUFBO0FBS3RDO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLHFDQUEyQjtFQUMzQixZQUFZLEVBQUE7QUFOaEI7SUFRUSxvQkFBYTtJQUFiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsd0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0FBVi9CO0lBY1EsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvYm9va2luZy9zcGFjZS1mbG93L3NlbGVjdC10aW1lL3NlbGVjdC10aW1lLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogI2M3OTk2MTtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE0cHg7XG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJG1haW4tZm9udDogJGZvbnQtc3RhY2s7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cbiAgLmNvbnRhaW5lciA+ICoge1xuICAgIHdpZHRoOiAxMDAlOyB9XG5cbi5ibG9jayB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgLmJsb2NrLmhlYWRlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7IH1cbiAgLmJsb2NrLnRpbWVsaW5lIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBmbGV4OiAxO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmctYm90dG9tOiA2ZW07IH1cblxuLmNvbnRlbnQge1xuICBtYXgtd2lkdGg6IDc2OHB4O1xuICB3aWR0aDogMTAwJTsgfVxuXG4udGltZWxpbmUgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IGF1dG87IH1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07IH1cblxuLmRhdGUgLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4uZGF0ZS10b2dnbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogIzdkZDZkNjtcbiAgZm9udC1zaXplOiAxLjJlbTsgfVxuICAuZGF0ZS10b2dnbGUgLmFycm93IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3OTk2MTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gIC5kYXRlLXRvZ2dsZSAuZGF5IHtcbiAgICBwYWRkaW5nOiAuMjVlbSAuNWVtOyB9XG5cbi50aW1lYmxvY2tzLFxuLmV2ZW50YmxvY2tzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cblxuLnRpbWVibG9ja3Mge1xuICB3aWR0aDogM2VtOyB9XG5cbi5ldmVudGJsb2NrcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgd2lkdGg6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuICAuZXZlbnRibG9ja3MgLmJsayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG5cbi5ibGsge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1pbi1oZWlnaHQ6IC4zZW07XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxMDAlOyB9XG4gIC5ibGsuc2hvd24tYmxvY2sge1xuICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2NjYzsgfVxuICAgIC5ibGsuc2hvd24tYmxvY2suaG91ciB7XG4gICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYzsgfVxuICAgIC5ibGsuc2hvd24tYmxvY2s6Zmlyc3QtY2hpbGQge1xuICAgICAgYm9yZGVyOiBub25lOyB9XG4gIC5ibGsgLnRleHQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IC41ZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XG4gIC5ibGsuaW4tdXNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxOSwgNDEsIDI5LCAwLjEpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gIC5ibGsuZGlzYWJsZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLnNlbGVjdGVkLXRpbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjNzk5NjE7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3ZGQ2ZDY7XG4gIGNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiAxMDA7XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgdHJhbnNpdGlvbjogdG9wIDEwMG1zLCBoZWlnaHQgMTAwbXM7IH1cbiAgLnNlbGVjdGVkLXRpbWUgLmlubmVyIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogLjI1ZW0gMWVtOyB9XG4gIC5zZWxlY3RlZC10aW1lIC5oYW5kbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICB3aWR0aDogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M3OTk2MTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgICAuc2VsZWN0ZWQtdGltZSAuaGFuZGxlLnRvcCB7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMWVtO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XG4gICAgLnNlbGVjdGVkLXRpbWUgLmhhbmRsZS5ib3R0b20ge1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMWVtO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwJSk7IH1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgei1pbmRleDogMjAwOyB9XG4gIC5mb290ZXIgLmNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuICAuZm9vdGVyIGJ0biB7XG4gICAgbWFyZ2luOiAuMjVlbTsgfVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICYgPiAqIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uYmxvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgJi5oZWFkZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAmLnRpbWVsaW5lIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDZlbTtcbiAgICB9XG59XG5cbi5jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udGltZWxpbmUge1xuICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbn1cblxuLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cblxuLmRhdGUge1xuICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxufVxuXG4uZGF0ZS10b2dnbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogJGNvbG9yLXF1YXRlcm5hcnk7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcblxuICAgIC5hcnJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEuNWVtO1xuICAgICAgICB3aWR0aDogMS41ZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10ZXJuYXJ5O1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLmRheSB7XG5cbiAgICAgICAgcGFkZGluZzogLjI1ZW0gLjVlbTtcbiAgICB9XG59XG5cbi50aW1lYmxvY2tzLFxuLmV2ZW50YmxvY2tzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRpbWVibG9ja3Mge1xuICAgIHdpZHRoOiAzZW07XG59XG5cbi5ldmVudGJsb2NrcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IDE7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICB3aWR0aDogNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLmJsayB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB9XG59XG5cbi5ibGsge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtaW4taGVpZ2h0OiAuM2VtO1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgJi5zaG93bi1ibG9jayB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBkYXNoZWQgI2NjYztcbiAgICAgICAgJi5ob3VyIHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgICAgICB9XG4gICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IC41ZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICB9XG5cbiAgICAmLmluLXVzZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGVycm9yLCAuMSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgICYuZGlzYWJsZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIC4wNSk7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbn1cblxuLnNlbGVjdGVkLXRpbWUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAkY29sb3ItdGVybmFyeTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcXVhdGVybmFyeTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgdG91Y2gtYWN0aW9uOiBub25lO1xuICAgIHRyYW5zaXRpb246IHRvcCAxMDBtcywgaGVpZ2h0IDEwMG1zO1xuXG4gICAgLmlubmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogLjI1ZW0gMWVtO1xuICAgIH1cblxuICAgIC5oYW5kbGUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGVybmFyeTtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwuMTIpO1xuICAgICAgICAmLnRvcCB7XG4gICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICByaWdodDogMWVtO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB9XG4gICAgICAgICYuYm90dG9tIHtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIGxlZnQ6IDFlbTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MCUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAuNTQpO1xuICAgIHotaW5kZXg6IDIwMDtcbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIGJ0biB7XG4gICAgICAgIG1hcmdpbjogLjI1ZW07XG4gICAgfVxufVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/select-time/select-time.template.html":
/*!********************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/select-time/select-time.template.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" (window:mouseup)=\"model.move = ''\" (window:touchend)=\"model.move = ''\">\n    <div class=\"block header\">\n        <div class=\"content\">\n            <div class=\"header to-upper\">Select time</div>\n        </div>\n    </div>\n    <div class=\"block date\">\n        <div class=\"content\">\n            <div class=\"date-toggle\">\n                <div class=\"arrow prev\" (touchrelease)=\"changeDate(-1)\">\n                    <i class=\"material-icons\">keyboard_arrow_left</i>\n                </div>\n                <div class=\"day\">{{model.date}}</div>\n                <div class=\"arrow next\" (touchrelease)=\"changeDate(1)\">\n                    <i class=\"material-icons\">keyboard_arrow_right</i>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"block timeline\">\n        <div class=\"content\" (mousemove)=\"move($event)\" (touchmove)=\"move($event)\">\n            <div class=\"timeblocks\">\n                <div class=\"blk\" *ngFor=\"let item of model.blocks\">\n                    <div class=\"text\" *ngIf=\"item.hour\">{{item.display}}</div>\n                </div>\n            </div>\n            <div class=\"eventblocks\" #block>\n                <div class=\"blk\" *ngFor=\"let item of model.blocks\" [class.shown-block]=\"item.show\" [class.hour]=\"item.hour\" [class.disabled]=\"item.disabled\" [class.in-use]=\"item.in_use\">\n                </div>\n                <div class=\"selected-time\" #time\n                    [style.top]=\"((model.active_start || (2 / 14)) * 100) + '%'\"\n                    [style.height]=\"((model.active_length || (.5 / 14)) * 100) + '%'\">\n                    <div class=\"inner\" (touchpress)=\"model.move = 'top'; setOffset($event)\">{{model.display}}</div>\n                    <div class=\"handle top\" (touchpress)=\"model.move = 'top'; setOffset($event)\"></div>\n                    <div class=\"handle bottom\" (touchpress)=\"model.move = 'bottom'; setOffset($event)\"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"block footer\">\n        <div class=\"content\">\n            <btn klass=\"full-width\" (tapped)=\"cancel()\">\n                <div class=\"text\">Back</div>\n            </btn>\n            <btn klass=\"full-width\" [disabled]=\"model.past\" (tapped)=\"toSpaces()\">\n                <div class=\"text\">Select</div>\n            </btn>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/space-flow.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/space-flow.component.ts ***!
  \******************************************************************/
/*! exports provided: SpaceBookingFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceBookingFlowComponent", function() { return SpaceBookingFlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SpaceBookingFlowComponent = /** @class */ (function (_super) {
    __extends(SpaceBookingFlowComponent, _super);
    function SpaceBookingFlowComponent(service, route, router) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        _this.router = router;
        _this.model = {};
        _this.model.breadcrumbs = [];
        return _this;
    }
    SpaceBookingFlowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.flow = 'space';
        this.load('breadcrumbs');
        this.subs.obs.params = this.route.paramMap.subscribe(function (params) {
            if (_this.model.page && !_this.model.ignore) {
                _this.model.breadcrumbs.push(_this.model.page);
                _this.store('breadcrumbs');
            }
            _this.model.ignore = false;
            _this.model.page = '';
            if (params.has('page')) {
                _this.model.page = params.get('page');
            }
            if (!_this.model.page) {
                _this.clearForm();
            }
        });
        this.subs.obs.route = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && e.url.indexOf('book/space') < 0) {
                _this.clearForm();
            }
        });
        this.loadFilters();
        this.loadSpace();
        this.loadAttendees();
        if (this.model.space) {
            this.model.room = this.service.Rooms.item(this.model.space);
        }
    };
    SpaceBookingFlowComponent.prototype.store = function (name) {
        if (localStorage) {
            var d = this.model[name];
            var value = typeof d === 'object' ? JSON.stringify(d) : d;
            localStorage.setItem("STAFF." + this.model.flow + "." + name, value);
        }
    };
    SpaceBookingFlowComponent.prototype.load = function (name) {
        if (localStorage) {
            var item = localStorage.getItem("STAFF." + this.model.flow + "." + name);
            if (item) {
                try {
                    this.model[name] = JSON.parse(item);
                }
                catch (e) {
                    this.model[name] = item;
                }
            }
        }
    };
    SpaceBookingFlowComponent.prototype.clear = function (name) {
        if (localStorage) {
            localStorage.removeItem("STAFF." + this.model.flow + "." + name);
        }
    };
    SpaceBookingFlowComponent.prototype.storeFilters = function () { this.store('filters'); };
    SpaceBookingFlowComponent.prototype.loadFilters = function () { this.load('filters'); };
    SpaceBookingFlowComponent.prototype.storeSpace = function () {
        this.store('space');
        if (this.model.space) {
            this.model.room = this.service.Rooms.item(this.model.space);
        }
    };
    SpaceBookingFlowComponent.prototype.loadSpace = function () { this.load('space'); };
    SpaceBookingFlowComponent.prototype.storeAttendees = function () { this.store('attendees'); };
    SpaceBookingFlowComponent.prototype.loadAttendees = function () { this.load('attendees'); };
    SpaceBookingFlowComponent.prototype.clearForm = function () {
        var _this = this;
        ['filters', 'space', 'attendees', 'breadcrumbs'].forEach(function (i) { return _this.clear(i); });
    };
    Object.defineProperty(SpaceBookingFlowComponent.prototype, "loading", {
        set: function (value) {
            var _this = this;
            this.timeout('loading', function () { return _this.model.loading = value; }, 10);
        },
        enumerable: true,
        configurable: true
    });
    SpaceBookingFlowComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'space', name], query);
    };
    SpaceBookingFlowComponent.prototype.back = function () {
        var previous = this.model.breadcrumbs.pop();
        if (previous) {
            this.to(previous);
            this.model.ignore = true;
            this.store('breadcrumbs');
        }
        else {
            this.service.navigate(['book']);
        }
    };
    SpaceBookingFlowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'space-booking-flow',
            template: __webpack_require__(/*! ./space-flow.template.html */ "./src/app/shell/booking/space-flow/space-flow.template.html"),
            styles: [__webpack_require__(/*! ./space-flow.styles.scss */ "./src/app/shell/booking/space-flow/space-flow.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SpaceBookingFlowComponent);
    return SpaceBookingFlowComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/space-flow/space-flow.styles.scss":
/*!*****************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/space-flow.styles.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.container > * {\n    width: 100%; }\n.topbar {\n  width: 100%;\n  min-height: 3em;\n  background-color: #B8123E;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n.topbar > * {\n    font-size: 1.2em; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .25em; }\n.icon img {\n    height: 1em; }\n.flow-step {\n  -webkit-box-flex: 1;\n          flex: 1;\n  overflow: auto; }\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.87);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 999; }\n.loader .text {\n    color: rgba(0, 0, 0, 0.87); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9zcGFjZS1mbG93L3NwYWNlLWZsb3cuc3R5bGVzLnNjc3MiLCIvVXNlcnMvYmVuaG9hZC9Qcm9qZWN0cy9tY2stb3V0bG9vay1hZGRpbi9zcmMvYXBwL3NoZWxsL2Jvb2tpbmcvc3BhY2UtZmxvdy9zcGFjZS1mbG93LnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztpQ0NFaUM7QUQrQmpDOzt1QkM1QnVCO0FEeUN2Qjs7c0JDdENzQjtBQ050QjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0IsRUFBQTtBQVAxQjtJQVNRLFdBQVcsRUFBQTtBQUluQjtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7QUFOdkI7SUFRUSxnQkFBZ0IsRUFBQTtBQUl4QjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsYUFBYTtFQUNiLGFBQWEsRUFBQTtBQU5qQjtJQVFRLFdBQVcsRUFBQTtBQUluQjtFQUNJLG1CQUFPO1VBQVAsT0FBTztFQUNQLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsMkNBQTJCO0VBQzNCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixZQUFZLEVBQUE7QUFWaEI7SUFhUSwwQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2Jvb2tpbmcvc3BhY2UtZmxvdy9zcGFjZS1mbG93LnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogI2M3OTk2MTtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE0cHg7XG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJG1haW4tZm9udDogJGZvbnQtc3RhY2s7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIC5jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTsgfVxuXG4udG9wYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I4MTIzRTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLnRvcGJhciA+ICoge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07IH1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjI1ZW07XG4gIHdpZHRoOiAxLjI1ZW07XG4gIG1hcmdpbjogLjI1ZW07IH1cbiAgLmljb24gaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTsgfVxuXG4uZmxvdy1zdGVwIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5OyB9XG4gIC5sb2FkZXIgLnRleHQge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4iLCJAaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgJiA+ICoge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi50b3BiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjgxMjNFO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAmID4gKiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS4yNWVtO1xuICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgbWFyZ2luOiAuMjVlbTtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICB9XG59XG5cbi5mbG93LXN0ZXAge1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5sb2FkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZmZmLCAuODcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA5OTk7XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC44Nyk7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/space-flow.template.html":
/*!*******************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/space-flow.template.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"topbar\">\n        <div class=\"icon back\" (touchrelease)=\"back()\">\n            <i class=\"material-icons\">arrow_back</i>\n        </div>\n        <div class=\"text to-upper\" [ngSwitch]=\"model.page\">\n            <ng-container *ngSwitchCase=\"'spaces'\">Room results</ng-container>\n            <ng-container *ngSwitchCase=\"'attendees'\">Suitable time for Attendees</ng-container>\n            <ng-container *ngSwitchCase=\"'confirm-attendees'\">Attendee Confirmation</ng-container>\n            <ng-container *ngSwitchCase=\"'find-time'\">Suitable time for Attendees</ng-container>\n            <ng-container *ngSwitchCase=\"'confirm-details'\">Let's create your meeting</ng-container>\n            <ng-container *ngSwitchCase=\"'filters'\">Space Filters</ng-container>\n            <ng-container *ngSwitchCase=\"'map'\">Room Location {{model.level}}</ng-container>\n            <ng-container *ngSwitchDefault>Book a meeting room</ng-container>\n        </div>\n    </div>\n    <div class=\"flow-step\" [ngSwitch]=\"model.page\">\n        <ng-container *ngSwitchCase=\"'spaces'\">\n            <space-flow-select-space (space)=\"model.space = $event; storeSpace()\" [(filters)]=\"model.filters\"\n                (filtersChange)=\"storeFilters()\" (loading)=\"loading = $event\"></space-flow-select-space>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'attendees'\">\n            <space-flow-attendees [(attendees)]=\"model.attendees\" (attendeesChange)=\"storeAttendees()\" (loading)=\"loading = $event\"\n                (back)=\"back()\"></space-flow-attendees>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'confirm-attendees'\">\n            <space-flow-confirm-attendees [(attendees)]=\"model.attendees\" (attendeesChange)=\"storeAttendees()\"\n                (loading)=\"loading = $event\" (back)=\"back()\"></space-flow-confirm-attendees>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'find-time'\">\n            <space-flow-select-time [(filters)]=\"model.filters\" (filtersChange)=\"storeFilters()\" [attendees]=\"model.attendees\"\n                (back)=\"back()\"></space-flow-select-time>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'confirm-details'\">\n            <space-flow-confirm-details [from]=\"model.from\" [(form)]=\"model.filters\" (formChange)=\"storeFilters()\"\n                [(attendees)]=\"model.attendees\" (attendeesChange)=\"storeAttendees()\" [space]=\"model.room\" (back)=\"back()\"\n                (loading)=\"loading = $event\"></space-flow-confirm-details>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'result'\">\n            <space-flow-result></space-flow-result>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'map'\">\n            <space-flow-view-space (level)=\"model.level = $event\" (back)=\"back()\"></space-flow-view-space>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'new-contact'\">\n            <visitor-flow-new-contact [(attendees)]=\"model.attendees\" (attendeesChange)=\"store('attendees')\" (back)=\"back()\"></visitor-flow-new-contact>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'filters'\">\n            <space-flow-filters [(filters)]=\"model.filters\" (filtersChange)=\"storeFilters()\" (back)=\"back()\"></space-flow-filters>\n        </ng-container>\n        <ng-container *ngSwitchDefault>\n            <space-flow-search-options [(filters)]=\"model.filters\" (filtersChange)=\"storeFilters()\"></space-flow-search-options>\n        </ng-container>\n    </div>\n    <div class=\"loader\" *ngIf=\"model.loading\">\n        <div class=\"no-item\">\n            <div class=\"icon\">\n                <spinner type=\"circle-ring\" color=\"#000\"></spinner>\n            </div>\n            <div class=\"text\">{{model.loading === true ? 'Waiting...' : model.loading}}</div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/view-space/view-space.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/view-space/view-space.component.ts ***!
  \*****************************************************************************/
/*! exports provided: SpaceFlowViewSpaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpaceFlowViewSpaceComponent", function() { return SpaceFlowViewSpaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acaprojects/ngx-widgets */ "./node_modules/@acaprojects/ngx-widgets/esm5/acaprojects-ngx-widgets.js");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SpaceFlowViewSpaceComponent = /** @class */ (function (_super) {
    __extends(SpaceFlowViewSpaceComponent, _super);
    function SpaceFlowViewSpaceComponent(service, route) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        _this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.level = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {};
        return _this;
    }
    SpaceFlowViewSpaceComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.obs.params = this.route.queryParamMap.subscribe(function (params) {
            if (params.has('room_id')) {
                _this.model.room_id = params.get('room_id');
                _this.focus();
            }
        });
    };
    SpaceFlowViewSpaceComponent.prototype.focus = function () {
        if (this.model.room_id) {
            var room = this.service.Rooms.item(this.model.room_id);
            if (room) {
                this.model.room = room;
                this.level.emit(room.level.name);
                this.model.focus = {
                    id: "area-" + room.map_id + "-status",
                    zoom: 150
                };
                this.model.poi = [{
                        id: "area-" + room.map_id + "-status",
                        cmp: _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_2__["MapPinComponent"]
                    }];
            }
            else {
                this.back.emit();
            }
        }
        else {
            this.back.emit();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowViewSpaceComponent.prototype, "back", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], SpaceFlowViewSpaceComponent.prototype, "level", void 0);
    SpaceFlowViewSpaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'space-flow-view-space',
            template: __webpack_require__(/*! ./view-space.template.html */ "./src/app/shell/booking/space-flow/view-space/view-space.template.html"),
            styles: [__webpack_require__(/*! ./view-space.styles.scss */ "./src/app/shell/booking/space-flow/view-space/view-space.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], SpaceFlowViewSpaceComponent);
    return SpaceFlowViewSpaceComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/space-flow/view-space/view-space.styles.scss":
/*!****************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/view-space/view-space.styles.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.container > * {\n    width: 100%; }\n.content {\n  max-width: 768px;\n  width: 100%; }\nmap {\n  height: 100%;\n  width: 100%; }\n.block {\n  position: relative;\n  width: 100%;\n  padding: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.block.map {\n    background-color: #c79961;\n    -webkit-box-flex: 1;\n            flex: 1;\n    height: 50%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy9zcGFjZS1mbG93L3ZpZXctc3BhY2Uvdmlldy1zcGFjZS5zdHlsZXMuc2NzcyIsIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hlbGwvYm9va2luZy9zcGFjZS1mbG93L3ZpZXctc3BhY2Uvdmlldy1zcGFjZS5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7aUNDRWlDO0FEK0JqQzs7dUJDNUJ1QjtBRHlDdkI7O3NCQ3RDc0I7QUNOdEI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBO0FBTjFCO0lBUVEsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUdmO0VBQ0ksWUFBWTtFQUNaLFdBQVcsRUFBQTtBQUdmO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCLEVBQUE7QUFOM0I7SUFRUSx5QkZSZTtJRVNmLG1CQUFPO1lBQVAsT0FBTztJQUNQLFdBQVcsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2Jvb2tpbmcvc3BhY2UtZmxvdy92aWV3LXNwYWNlL3ZpZXctc3BhY2Uuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3M6ICMzMDliNDA7XG4kc3VjY2Vzcy1hbHQ6ICM0Mjg1ZjQ7XG4kZXJyb3I6ICNkYjI5MWQ7XG4kcGVuZGluZzogI0ZGOTgwMDtcbiRuZXV0cmFsOiAjNzk3OTc5O1xuXG4kYmFja2dyb3VuZDogI2VjZjFmNTtcblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcbiRjb2xvci1wcmltYXJ5LXdpcmVmcmFtZTpyZ2JhKDAsIDAsIDAsIDAuNjEpO1xuJGhlYWRlci1iZzogI2ZmZjtcbiRoZWFkZXItY29sb3I6IHJnYmEoIzAwMjk2MCwgLjg3KTtcblxuJHRpbGUtY29sb3I6ICNmZmY7XG4kdGlsZS1ib3JkZXI6ICNmZmY7XG5cbiRoZWxwLWJvcmRlcjogcmdiYSgjMDAwLCAuMik7XG5cbiRjb2xvci1wcmltYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeTogIzQwNDg1YTtcbiRjb2xvci10ZXJuYXJ5OiAjYzc5OTYxO1xuJGNvbG9yLXF1YXRlcm5hcnk6ICM3ZGQ2ZDY7XG4kY29sb3ItcXVpbnRlcm5hcnk6ICM0YzVjNmM7XG4kY29sb3Itc2V4dGVybmFyeTogIzdmZTQzYjtcblxuJHRpbWVsaW5lLWJnOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzRGNUY3MCAwJSwgIzBGMTIxNSAxMDAlKTtcbiR0aW1lbGluZS1ldmVudDogJGVycm9yO1xuJHRpbWVsaW5lLWJvb2tpbmc6ICRjb2xvci1xdWF0ZXJuYXJ5O1xuXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTRweDtcblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kbWFpbi1mb250OiAkZm9udC1zdGFjaztcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cbiAgLmNvbnRhaW5lciA+ICoge1xuICAgIHdpZHRoOiAxMDAlOyB9XG5cbi5jb250ZW50IHtcbiAgbWF4LXdpZHRoOiA3NjhweDtcbiAgd2lkdGg6IDEwMCU7IH1cblxubWFwIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTsgfVxuXG4uYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiAxZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG4gIC5ibG9jay5tYXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNzk5NjE7XG4gICAgZmxleDogMTtcbiAgICBoZWlnaHQ6IDUwJTsgfVxuIiwiQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAmID4gKiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmNvbnRlbnQge1xuICAgIG1heC13aWR0aDogNzY4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbm1hcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uYmxvY2sge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICYubWFwIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRlcm5hcnk7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGhlaWdodDogNTAlO1xuICAgIH1cbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shell/booking/space-flow/view-space/view-space.template.html":
/*!******************************************************************************!*\
  !*** ./src/app/shell/booking/space-flow/view-space/view-space.template.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"block header\">\n        <div class=\"content\">\n            <div class=\"header to-upper\">{{model.room?.name}}</div>\n        </div>\n    </div>\n    <div class=\"block map\">\n        <map [src]=\"model.room.level.map_url\" [focus]=\"model.focus\" [poi]=\"model.poi || []\"></map>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/index.ts":
/*!*****************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/index.ts ***!
  \*****************************************************/
/*! exports provided: VISITOR_FLOW_COMPONENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VISITOR_FLOW_COMPONENTS", function() { return VISITOR_FLOW_COMPONENTS; });
/* harmony import */ var _visitor_flow_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visitor-flow.component */ "./src/app/shell/booking/visitor-flow/visitor-flow.component.ts");
/* harmony import */ var _visitor_list_visitor_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./visitor-list/visitor-list.component */ "./src/app/shell/booking/visitor-flow/visitor-list/visitor-list.component.ts");
/* harmony import */ var _new_contact_new_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-contact/new-contact.component */ "./src/app/shell/booking/visitor-flow/new-contact/new-contact.component.ts");
/* harmony import */ var _options_options_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./options/options.component */ "./src/app/shell/booking/visitor-flow/options/options.component.ts");
/* harmony import */ var _invite_invite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./invite/invite.component */ "./src/app/shell/booking/visitor-flow/invite/invite.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./result/result.component */ "./src/app/shell/booking/visitor-flow/result/result.component.ts");






var VISITOR_FLOW_COMPONENTS = [
    _visitor_flow_component__WEBPACK_IMPORTED_MODULE_0__["VisitorFlowComponent"],
    _visitor_list_visitor_list_component__WEBPACK_IMPORTED_MODULE_1__["VisitorFlowVisitorListComponent"],
    _new_contact_new_contact_component__WEBPACK_IMPORTED_MODULE_2__["VisitorFlowNewContactComponent"],
    _options_options_component__WEBPACK_IMPORTED_MODULE_3__["VisitorFlowOptionsComponent"],
    _invite_invite_component__WEBPACK_IMPORTED_MODULE_4__["VisitorFlowInviteComponent"],
    _result_result_component__WEBPACK_IMPORTED_MODULE_5__["VisitorFlowResultComponent"]
];


/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/invite/invite.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/invite/invite.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"circle\"></div>\n    <div class=\"content\">\n        <div class=\"icon top\">\n            <img src=\"assets/img/sent_invite.svg\">\n        </div>\n        <div class=\"title\">Invite sent to visitor</div>\n        <div class=\"info\">Your guests will receive an email on the day of the meeting with a QR code that they will\n            need to scan at the Visitor Registration Kiosk in order to enter.</div>\n        <hr>\n        <div class=\"details\">\n            <div class=\"group\">\n                <div class=\"pair\">\n                    <div class=\"icon\"><img src=\"assets/img/calendar.svg\"></div>\n                    <div class=\"text\">{{model.display?.date}}</div>\n                </div>\n                <div class=\"pair\">\n                    <div class=\"icon\"><img src=\"assets/img/time.svg\"></div>\n                    <div class=\"text\">{{model.display?.time}}</div>\n                </div>\n                <div class=\"pair\">\n                    <div class=\"icon\"><img src=\"assets/img/date_pin.svg\"></div>\n                    <div class=\"text\">{{model.display?.location}}</div>\n                </div>\n            </div>\n            <div class=\"group\">\n                <img class=\"qrcode\" [src]=\"model.qrcode\">\n            </div>\n        </div>\n        <div class=\"options\">\n            <btn (tapped)=\"to('results')\">Done</btn>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/invite/invite.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/invite/invite.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #D4EDF1;\n  overflow: auto;\n  padding: 2em; }\n.circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 120vmin;\n  width: 120vmin;\n  border-radius: 100%;\n  background-color: rgba(255, 255, 255, 0.54);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  pointer-events: none; }\n.content {\n  position: relative;\n  max-width: 768px;\n  width: 100%;\n  background-color: #fff;\n  padding: 1em 2em;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  font-size: 1.2em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 1; }\n.info {\n  margin-bottom: .5em;\n  font-size: 1em;\n  color: rgba(0, 0, 0, 0.54);\n  font-weight: 300; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .05em; }\n.icon img {\n    height: 1em;\n    width: 1em;\n    border-radius: 100%; }\n.top {\n  font-size: 6em; }\n.details {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  font-weight: 300; }\n.group {\n  -webkit-box-flex: 1;\n          flex: 1; }\n.group:last-child {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: end;\n            justify-content: flex-end; }\n.pair {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: .5em 0; }\n.pair .icon {\n    margin-right: .5em;\n    border-radius: 0; }\n.pair .icon img {\n      border-radius: 0; }\n.title {\n  font-size: 2em;\n  margin: .25em 0;\n  text-transform: uppercase; }\n.qrcode {\n  width: 5em;\n  height: 5em;\n  max-width: 100%;\n  max-height: 100%; }\n.options {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: .5em 0; }\n.option {\n  height: 1.5em;\n  width: 1.5em;\n  font-size: 2em;\n  background-color: #F1F9FF;\n  border-radius: 100%;\n  margin: .2em .25em;\n  color: #6a4b25; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy92aXNpdG9yLWZsb3cvaW52aXRlL2ludml0ZS5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hlbGwvYm9va2luZy92aXNpdG9yLWZsb3cvaW52aXRlL2ludml0ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7aUNDRWlDO0FEK0JqQzs7dUJDNUJ1QjtBRHlDdkI7O3NCQ3RDc0I7QUNMdEI7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVksRUFBQTtBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDJDQUEyQjtFQUMzQix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLG9CQUFvQixFQUFBO0FBR3hCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsdUhBQTJGO1VBQTNGLCtHQUEyRjtFQUMzRixnQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFVBQVUsRUFBQTtBQUdkO0VBQ0ksbUJBQW1CO0VBQ25CLGNBQWM7RUFDZCwwQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGFBQWE7RUFDYixhQUFhLEVBQUE7QUFOakI7SUFRUSxXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQixFQUFBO0FBSTNCO0VBQ0ksY0FBYyxFQUFBO0FBR2xCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxtQkFBTztVQUFQLE9BQU8sRUFBQTtBQURYO0lBR1Esb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixxQkFBeUI7WUFBekIseUJBQXlCLEVBQUE7QUFJakM7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTtBQUhsQjtJQU1RLGtCQUFrQjtJQUNsQixnQkFBZ0IsRUFBQTtBQVB4QjtNQVNZLGdCQUFnQixFQUFBO0FBSzVCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLFVBQVU7RUFDVixXQUFXO0VBQ1gsZUFBZTtFQUNmLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGNBQWMsRUFBQTtBQUdsQjtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osY0FBYztFQUNkLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGNBQWlDLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9ib29raW5nL3Zpc2l0b3ItZmxvdy9pbnZpdGUvaW52aXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogI2M3OTk2MTtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE0cHg7XG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJG1haW4tZm9udDogJGZvbnQtc3RhY2s7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q0RURGMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDJlbTsgfVxuXG4uY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBoZWlnaHQ6IDEyMHZtaW47XG4gIHdpZHRoOiAxMjB2bWluO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNzY4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxZW0gMmVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDE7IH1cblxuLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICBmb250LXNpemU6IDFlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjI1ZW07XG4gIHdpZHRoOiAxLjI1ZW07XG4gIG1hcmdpbjogLjA1ZW07IH1cbiAgLmljb24gaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICB3aWR0aDogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7IH1cblxuLnRvcCB7XG4gIGZvbnQtc2l6ZTogNmVtOyB9XG5cbi5kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7IH1cblxuLmdyb3VwIHtcbiAgZmxleDogMTsgfVxuICAuZ3JvdXA6bGFzdC1jaGlsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7IH1cblxuLnBhaXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IC41ZW0gMDsgfVxuICAucGFpciAuaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7IH1cbiAgICAucGFpciAuaWNvbiBpbWcge1xuICAgICAgYm9yZGVyLXJhZGl1czogMDsgfVxuXG4udGl0bGUge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAuMjVlbSAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XG5cbi5xcmNvZGUge1xuICB3aWR0aDogNWVtO1xuICBoZWlnaHQ6IDVlbTtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBtYXgtaGVpZ2h0OiAxMDAlOyB9XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogLjVlbSAwOyB9XG5cbi5vcHRpb24ge1xuICBoZWlnaHQ6IDEuNWVtO1xuICB3aWR0aDogMS41ZW07XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGOUZGO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBtYXJnaW46IC4yZW0gLjI1ZW07XG4gIGNvbG9yOiAjNmE0YjI1OyB9XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDRFREYxO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IDJlbTtcbn1cblxuLmNpcmNsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBoZWlnaHQ6IDEyMHZtaW47XG4gICAgd2lkdGg6IDEyMHZtaW47XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNmZmYsIC41NCk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsLjEyKTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5pbmZvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGNvbG9yOiByZ2JhKCMwMDAsIC41NCk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEuMjVlbTtcbiAgICB3aWR0aDogMS4yNWVtO1xuICAgIG1hcmdpbjogLjA1ZW07XG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgfVxufVxuXG4udG9wIHtcbiAgICBmb250LXNpemU6IDZlbTtcbn1cblxuLmRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uZ3JvdXAge1xuICAgIGZsZXg6IDE7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG59XG5cbi5wYWlyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAuNWVtIDA7XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjVlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgaW1nIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luOiAuMjVlbSAwO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5xcmNvZGUge1xuICAgIHdpZHRoOiA1ZW07XG4gICAgaGVpZ2h0OiA1ZW07XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAuNWVtIDA7XG59XG5cbi5vcHRpb24ge1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGMUY5RkY7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBtYXJnaW46IC4yZW0gLjI1ZW07XG4gICAgY29sb3I6IGRhcmtlbigkY29sb3ItdGVybmFyeSwgMzApO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/invite/invite.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/invite/invite.component.ts ***!
  \***********************************************************************/
/*! exports provided: VisitorFlowInviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorFlowInviteComponent", function() { return VisitorFlowInviteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisitorFlowInviteComponent = /** @class */ (function (_super) {
    __extends(VisitorFlowInviteComponent, _super);
    function VisitorFlowInviteComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.model = {};
        return _this;
    }
    VisitorFlowInviteComponent.prototype.ngOnInit = function () {
        if (!this.filters) {
            this.filters = {};
        }
        this.updateDisplay();
    };
    VisitorFlowInviteComponent.prototype.ngOnChanges = function (changes) {
        if (changes.filters) {
            this.updateDisplay();
        }
    };
    VisitorFlowInviteComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'visitor', name], query);
    };
    VisitorFlowInviteComponent.prototype.updateDisplay = function () {
        if (!this.filters) {
            this.filters = {};
        }
        var date = moment__WEBPACK_IMPORTED_MODULE_3__(this.filters.date || null);
        if (!this.model.display) {
            this.model.display = {};
        }
        this.model.display.date = date.format('dddd DD/MM/YYYY');
        this.model.display.time = date.format('hh:mmA');
        if (this.filters.level) {
            var level = this.service.Buildings.getLevel(this.filters.level);
            if (level) {
                this.model.display.level = level.name + " Lobby";
            }
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VisitorFlowInviteComponent.prototype, "filters", void 0);
    VisitorFlowInviteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'visitor-flow-invite',
            template: __webpack_require__(/*! ./invite.component.html */ "./src/app/shell/booking/visitor-flow/invite/invite.component.html"),
            styles: [__webpack_require__(/*! ./invite.component.scss */ "./src/app/shell/booking/visitor-flow/invite/invite.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], VisitorFlowInviteComponent);
    return VisitorFlowInviteComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/new-contact/new-contact.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/new-contact/new-contact.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"block search\">\n    <div #ref class=\"reference\"></div>\n    <div class=\"content\">\n        <div class=\"header to-upper\">Create a new contact</div>\n        <div class=\"form\">\n            <div class=\"field\">\n                <label for=\"title\">Title</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"title\" [list]=\"model.titles\" [(model)]=\"model.title_index\" (modelChange)=\"model.title = model.titles[$event]\" placeholder=\"Select title\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\" [class.error]=\"model.error_first_name\">\n                <label for=\"name\">First &amp; Middle names</label>\n                <div class=\"value\">\n                    <input id=\"name\" type=\"text\" [(ngModel)]=\"model.first_name\" (ngModelChange)=\"model.error_first_name = null\" placeholder=\"Lucas\">\n                </div>\n                <div class=\"info\" *ngIf=\"model.error_first_name\">{{model.error_first_name}}</div>\n            </div>\n            <div class=\"field\" [class.error]=\"model.error_last_name\">\n                <label for=\"name\">Last Name</label>\n                <div class=\"value\">\n                    <input id=\"name\" type=\"text\" [(ngModel)]=\"model.last_name\" (ngModelChange)=\"model.error_last_name = null\" placeholder=\"Zhang\">\n                </div>\n                <div class=\"info\" *ngIf=\"model.error_last_name\">{{model.error_last_name}}</div>\n            </div>\n            <div class=\"field\">\n                <label for=\"company\">Company</label>\n                <div class=\"value\">\n                    <custom-dropdown klass=\"form\" [(show)]=\"model.show\" (showChange)=\"updateView()\" [content]=\"content\" [template]=\"template\">\n                        <ng-template #content>\n                            <div class=\"dropdown-header\">\n                                <div class=\"input\">\n                                    <input #input id=\"company\" class=\"company-new-contact\" type=\"text\" [(ngModel)]=\"model.org_name\" (ngModelChange)=\"checkOrg()\" placeholder=\"Company\">\n                                </div>\n                                <div class=\"icon\">\n                                    <i class=\"material-icons\">{{model.show ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</i>\n                                </div>\n                            </div>\n                        </ng-template>\n                        <ng-template #template>\n                            <div class=\"list show\" [style.height]=\"(list_height * 2 * font_size) + 'px'\">\n                                <ng-container *ngIf=\"model.orgs\">\n                                    <cdk-virtual-scroll-viewport [itemSize]=\"2 * font_size\">\n                                        <ng-container *cdkVirtualFor=\"let item of model.orgs; let i = index\">\n                                            <div class=\"item\" [class.hide]=\"hideActive && (item.i || i) === model\" (touchrelease)=\"setOrg(item)\">\n                                                <div class=\"text\">{{ item.name || item }}</div>\n                                                <div class=\"icon\">\n                                                    <div class=\"done\" *ngIf=\"model.org_index === (item.i || i) ? 1 : 0\"></div>\n                                                </div>\n                                            </div>\n                                        </ng-container>\n                                    </cdk-virtual-scroll-viewport>\n                                </ng-container>\n                            </div>\n                        </ng-template>\n                    </custom-dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"phone\">Contact</label>\n                <div class=\"value\">\n                    <input id=\"phone\" type=\"tel\" [(ngModel)]=\"model.phone\" placeholder=\"85230778870\">\n                </div>\n            </div>\n            <div class=\"field\" [class.error]=\"model.error_email\">\n                <label for=\"email\">Email <span>*</span></label>\n                <div class=\"value\">\n                    <input id=\"email\" type=\"email\" [(ngModel)]=\"model.email\" (ngModelChange)=\"model.error_email = null\" placeholder=\"visitor@not-aia.com\">\n                </div>\n                <div class=\"info\" *ngIf=\"model.error_email\">{{model.error_email}}</div>\n            </div>\n            <div class=\"field\">\n                <label for=\"purpose\">Purpose of Visit</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"purpose\" [list]=\"model.purposes\" [(model)]=\"model.purpose_index\" (modelChange)=\"model.purpose = model.purposes[$event]\" placeholder=\"Select purpose of visit\"></dropdown>\n                </div>\n            </div>\n            <hr />\n            <div class=\"options\">\n                <btn (tapped)=\"cancel()\">Cancel</btn>\n                <btn (tapped)=\"add(!model.space)\">Add</btn>\n                <btn *ngIf=\"model.space\" (tapped)=\"add(true)\">Add &amp; Continue</btn>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/new-contact/new-contact.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/new-contact/new-contact.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.header {\n  font-size: 1.2em;\n  margin-bottom: .5em; }\n.block {\n  width: 100%;\n  padding: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\n.content {\n  max-width: 768px;\n  width: 100%; }\n.item {\n  margin: .5em; }\n.item > * {\n    font-size: 1.2em; }\n.error input {\n  border-color: #db291d; }\n.error input::-webkit-input-placeholder {\n    color: rgba(219, 41, 29, 0.2); }\n.error input:-ms-input-placeholder {\n    color: rgba(219, 41, 29, 0.2); }\n.error input::-ms-input-placeholder {\n    color: rgba(219, 41, 29, 0.2); }\n.error input::placeholder {\n    color: rgba(219, 41, 29, 0.2); }\n.info {\n  font-size: .8em;\n  color: #db291d;\n  margin: -.5em 0 .5em; }\ninput {\n  width: 100%;\n  font-size: 1.2em;\n  border: 1px solid #ccc;\n  padding: .5em; }\ninput::-webkit-input-placeholder {\n    color: rgba(0, 0, 0, 0.2); }\ninput:-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.2); }\ninput::-ms-input-placeholder {\n    color: rgba(0, 0, 0, 0.2); }\ninput::placeholder {\n    color: rgba(0, 0, 0, 0.2); }\n.dropdown-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%; }\n.dropdown-header .input {\n    -webkit-box-flex: 1;\n            flex: 1;\n    padding: 0 .5em; }\n.dropdown-header input {\n    padding: 0;\n    border: none;\n    font-size: 1em;\n    outline: none; }\n.reference {\n  position: absolute;\n  height: 1em;\n  pointer-events: none;\n  opacity: 0; }\n.item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 2em;\n  border: none;\n  margin: 0;\n  font-size: 1.2rem; }\n.item:hover {\n    background-color: rgba(0, 0, 0, 0.1); }\n.item.active {\n    text-align: center; }\n.time-field {\n  position: relative;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  min-width: 12em;\n  max-width: 16em;\n  border: 1px solid #ccc; }\n.icon {\n  width: 1.5em;\n  height: 1.5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 1.5em; }\n.icon .down:before {\n    content: '▾'; }\n.icon .up:before {\n    content: '▾'; }\n.icon .done:before {\n    content: '✓'; }\n.text {\n  padding: .5em .75em;\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 50%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\nspan {\n  color: #FF9800; }\n.value {\n  margin: .5em 0; }\n.form {\n  padding: 0 1em;\n  font-size: 1.1em; }\n.form .options {\n    display: -webkit-box;\n    display: flex; }\ncdk-virtual-scroll-viewport {\n  min-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hlbGwvYm9va2luZy92aXNpdG9yLWZsb3cvbmV3LWNvbnRhY3QvbmV3LWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYmVuaG9hZC9Qcm9qZWN0cy9tY2stb3V0bG9vay1hZGRpbi9zcmMvYXBwL3NoYXJlZC9zaGFyZWQuc3R5bGVzLnNjc3MiLCIvVXNlcnMvYmVuaG9hZC9Qcm9qZWN0cy9tY2stb3V0bG9vay1hZGRpbi9zcmMvYXBwL3NoZWxsL2Jvb2tpbmcvdmlzaXRvci1mbG93L25ldy1jb250YWN0L25ldy1jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7aUNER2lDO0FDOEJqQzs7dUJEM0J1QjtBQ3dDdkI7O3NCRHJDc0I7QUVOdEI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QixFQUFBO0FBRzNCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUdmO0VBQ0ksWUFBWSxFQUFBO0FBRGhCO0lBR1EsZ0JBQWdCLEVBQUE7QUFJeEI7RUFFUSxxQkR4Qk8sRUFBQTtBQ3NCZjtJQUlZLDZCRDFCRyxFQUFBO0FDc0JmO0lBSVksNkJEMUJHLEVBQUE7QUNzQmY7SUFJWSw2QkQxQkcsRUFBQTtBQ3NCZjtJQUlZLDZCRDFCRyxFQUFBO0FDK0JmO0VBQ0ksZUFBZTtFQUNmLGNEakNXO0VDa0NYLG9CQUFvQixFQUFBO0FBR3hCO0VBQ0ksV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsYUFBYSxFQUFBO0FBSmpCO0lBTVEseUJBQWdCLEVBQUE7QUFOeEI7SUFNUSx5QkFBZ0IsRUFBQTtBQU54QjtJQU1RLHlCQUFnQixFQUFBO0FBTnhCO0lBTVEseUJBQWdCLEVBQUE7QUFJeEI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFKaEI7SUFNUSxtQkFBTztZQUFQLE9BQU87SUFDUCxlQUFlLEVBQUE7QUFQdkI7SUFVUSxVQUFVO0lBQ1YsWUFBWTtJQUNaLGNBQWM7SUFDZCxhQUFhLEVBQUE7QUFJckI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixVQUFVLEVBQUE7QUFHZDtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixTQUFTO0VBQ1QsaUJBQWlCLEVBQUE7QUFOckI7SUFTUSxvQ0FBMkIsRUFBQTtBQVRuQztJQWFRLGtCQUFrQixFQUFBO0FBSTFCO0VBQ0ksa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGVBQWU7RUFDZixzQkFBc0IsRUFBQTtBQUcxQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2Isb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBO0FBTnBCO0lBUW1CLFlBQVMsRUFBSTtBQVJoQztJQVNtQixZQUFTLEVBQUk7QUFUaEM7SUFVbUIsWUFBUyxFQUFJO0FBR2hDO0VBQ0ksbUJBQW1CO0VBQ25CLG1CQUFPO1VBQVAsT0FBTztFQUNQLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBO0FBRzNCO0VBQ0ksY0R2SGEsRUFBQTtBQzBIakI7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7QUFGcEI7SUFLUSxvQkFBYTtJQUFiLGFBQWEsRUFBQTtBQUlyQjtFQUNJLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvYm9va2luZy92aXNpdG9yLWZsb3cvbmV3LWNvbnRhY3QvbmV3LWNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogLjVlbTsgfVxuXG4uYmxvY2sge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG4uY29udGVudCB7XG4gIG1heC13aWR0aDogNzY4cHg7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5pdGVtIHtcbiAgbWFyZ2luOiAuNWVtOyB9XG4gIC5pdGVtID4gKiB7XG4gICAgZm9udC1zaXplOiAxLjJlbTsgfVxuXG4uZXJyb3IgaW5wdXQge1xuICBib3JkZXItY29sb3I6ICNkYjI5MWQ7IH1cbiAgLmVycm9yIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMjE5LCA0MSwgMjksIDAuMik7IH1cblxuLmluZm8ge1xuICBmb250LXNpemU6IC44ZW07XG4gIGNvbG9yOiAjZGIyOTFkO1xuICBtYXJnaW46IC0uNWVtIDAgLjVlbTsgfVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEuMmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAuNWVtOyB9XG4gIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTsgfVxuXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTsgfVxuICAuZHJvcGRvd24taGVhZGVyIC5pbnB1dCB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nOiAwIC41ZW07IH1cbiAgLmRyb3Bkb3duLWhlYWRlciBpbnB1dCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxZW07XG4gICAgb3V0bGluZTogbm9uZTsgfVxuXG4ucmVmZXJlbmNlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBoZWlnaHQ6IDFlbTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIG9wYWNpdHk6IDA7IH1cblxuLml0ZW0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDJlbTtcbiAgYm9yZGVyOiBub25lO1xuICBtYXJnaW46IDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtOyB9XG4gIC5pdGVtOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMSk7IH1cbiAgLml0ZW0uYWN0aXZlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cblxuLnRpbWUtZmllbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1pbi13aWR0aDogMTJlbTtcbiAgbWF4LXdpZHRoOiAxNmVtO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjOyB9XG5cbi5pY29uIHtcbiAgd2lkdGg6IDEuNWVtO1xuICBoZWlnaHQ6IDEuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVlbTsgfVxuICAuaWNvbiAuZG93bjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICfilr4nOyB9XG4gIC5pY29uIC51cDpiZWZvcmUge1xuICAgIGNvbnRlbnQ6ICfilr4nOyB9XG4gIC5pY29uIC5kb25lOmJlZm9yZSB7XG4gICAgY29udGVudDogJ+Kckyc7IH1cblxuLnRleHQge1xuICBwYWRkaW5nOiAuNWVtIC43NWVtO1xuICBmbGV4OiAxO1xuICB3aWR0aDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuXG5zcGFuIHtcbiAgY29sb3I6ICNGRjk4MDA7IH1cblxuLnZhbHVlIHtcbiAgbWFyZ2luOiAuNWVtIDA7IH1cblxuLmZvcm0ge1xuICBwYWRkaW5nOiAwIDFlbTtcbiAgZm9udC1zaXplOiAxLjFlbTsgfVxuICAuZm9ybSAub3B0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDsgfVxuXG5jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQge1xuICBtaW4taGVpZ2h0OiAxMDAlOyB9XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3M6ICMzMDliNDA7XG4kc3VjY2Vzcy1hbHQ6ICM0Mjg1ZjQ7XG4kZXJyb3I6ICNkYjI5MWQ7XG4kcGVuZGluZzogI0ZGOTgwMDtcbiRuZXV0cmFsOiAjNzk3OTc5O1xuXG4kYmFja2dyb3VuZDogI2VjZjFmNTtcblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcbiRjb2xvci1wcmltYXJ5LXdpcmVmcmFtZTpyZ2JhKDAsIDAsIDAsIDAuNjEpO1xuJGhlYWRlci1iZzogI2ZmZjtcbiRoZWFkZXItY29sb3I6IHJnYmEoIzAwMjk2MCwgLjg3KTtcblxuJHRpbGUtY29sb3I6ICNmZmY7XG4kdGlsZS1ib3JkZXI6ICNmZmY7XG5cbiRoZWxwLWJvcmRlcjogcmdiYSgjMDAwLCAuMik7XG5cbiRjb2xvci1wcmltYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeTogIzQwNDg1YTtcbiRjb2xvci10ZXJuYXJ5OiAjYzc5OTYxO1xuJGNvbG9yLXF1YXRlcm5hcnk6ICM3ZGQ2ZDY7XG4kY29sb3ItcXVpbnRlcm5hcnk6ICM0YzVjNmM7XG4kY29sb3Itc2V4dGVybmFyeTogIzdmZTQzYjtcblxuJHRpbWVsaW5lLWJnOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzRGNUY3MCAwJSwgIzBGMTIxNSAxMDAlKTtcbiR0aW1lbGluZS1ldmVudDogJGVycm9yO1xuJHRpbWVsaW5lLWJvb2tpbmc6ICRjb2xvci1xdWF0ZXJuYXJ5O1xuXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTRweDtcblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kbWFpbi1mb250OiAkZm9udC1zdGFjaztcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uaGVhZGVyIHtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG59XG5cbi5ibG9jayB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNvbnRlbnQge1xuICAgIG1heC13aWR0aDogNzY4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5pdGVtIHtcbiAgICBtYXJnaW46IC41ZW07XG4gICAgJiA+ICoge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbn1cblxuLmVycm9yIHtcbiAgICBpbnB1dCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJGVycm9yO1xuICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgkZXJyb3IsIC4yKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmluZm8ge1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBjb2xvcjogJGVycm9yO1xuICAgIG1hcmdpbjogLS41ZW0gMCAuNWVtO1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogcmdiYSgjMDAwLCAuMik7XG4gICAgfVxufVxuXG4uZHJvcGRvd24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlOztcbiAgICAuaW5wdXQge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBwYWRkaW5nOiAwIC41ZW07XG4gICAgfVxuICAgIGlucHV0IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG59XG5cbi5yZWZlcmVuY2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4uaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogMmVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAuMSk7XG4gICAgfVxuXG4gICAgJi5hY3RpdmUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuXG4udGltZS1maWVsZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4td2lkdGg6IDEyZW07XG4gICAgbWF4LXdpZHRoOiAxNmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG5cbi5pY29uIHtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcblxuICAgIC5kb3duOmJlZm9yZSB7IGNvbnRlbnQ6ICfilr4nOyB9XG4gICAgLnVwOmJlZm9yZSAgIHsgY29udGVudDogJ+KWvic7IH1cbiAgICAuZG9uZTpiZWZvcmUgeyBjb250ZW50OiAn4pyTJzsgfVxufVxuXG4udGV4dCB7XG4gICAgcGFkZGluZzogLjVlbSAuNzVlbTtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5zcGFuIHtcbiAgICBjb2xvcjogJHBlbmRpbmc7XG59XG5cbi52YWx1ZSB7XG4gICAgbWFyZ2luOiAuNWVtIDA7XG59XG5cbi5mb3JtIHtcbiAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuXG4gICAgLm9wdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cbn1cblxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/new-contact/new-contact.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/new-contact/new-contact.component.ts ***!
  \*********************************************************************************/
/*! exports provided: VisitorFlowNewContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorFlowNewContactComponent", function() { return VisitorFlowNewContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _shared_utility_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/utility.class */ "./src/app/shared/utility.class.ts");
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
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var VisitorFlowNewContactComponent = /** @class */ (function (_super) {
    __extends(VisitorFlowNewContactComponent, _super);
    function VisitorFlowNewContactComponent(service, router) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.router = router;
        _this.attendeesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {};
        _this.font_size = 16;
        _this.list_height = 0;
        _this.model.titles = ['Mr', 'Ms', 'Mrs'];
        _this.model.purposes = ['Business', 'Project', 'Delivery', 'Interview', 'Maintenance ', 'Social', 'Training', 'Other'];
        return _this;
    }
    VisitorFlowNewContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.org_index = 0;
        this.subs.obs.building = this.service.Buildings.listen(function (bld) {
            if (bld) {
                _this.model.orgs = bld.orgs || [];
                if (_this.model.orgs.length <= 0) {
                    _this.model.orgs.push({ id: -1, name: 'No companies' });
                }
                _this.list_height = Math.min(8, _this.model.orgs.length);
            }
        });
        this.model.space = this.router.url.indexOf('space') >= 0;
    };
    VisitorFlowNewContactComponent.prototype.cancel = function () { this.back.emit(); };
    VisitorFlowNewContactComponent.prototype.add = function (next) {
        if (next === void 0) { next = false; }
        var error = false;
        // if (!this.model.first_name) { this.model.error_first_name = 'First & Middle names are required'; error = true; }
        // if (!this.model.last_name) { this.model.error_last_name = 'Last name is required'; error = true; }
        if (!this.model.email) {
            this.model.error_email = 'Email is required';
            error = true;
        }
        if (!_shared_utility_class__WEBPACK_IMPORTED_MODULE_4__["Utils"].validateEmail(this.model.email)) {
            this.model.error_email = 'A valid email is required';
            error = true;
        }
        if (error) {
            return error;
        }
        var user = {
            id: Math.random().toString(),
            last_name: this.model.last_name,
            first_name: this.model.first_name,
            name: this.model.first_name + " " + this.model.last_name,
            email: this.model.email,
            organisation_name: this.model.org_name,
            phone: this.model.phone,
            title: this.model.title,
            purpose: this.model.purpose,
            external: true,
            type: 'external',
            image: ''
        };
        if (!this.attendees) {
            this.attendees = [];
        }
        var exists = this.attendees.find(function (i) { return i.email === user.email; });
        if (!exists) {
            this.attendees.push(user);
        }
        this.attendeesChange.emit(this.attendees);
        if (next) {
            this.model.space ? this.to('confirm-attendees') : this.back.emit();
        }
        else {
            this.service.info("Added contact \"" + (this.model.name || this.model.email.split('@')[0]) + "\"");
            this.model = __assign({}, this.model, { name: '', email: '', phone: '', title: '', purpose: '', org_name: '' });
            this.checkOrg();
            this.model.title_index = -1;
            this.model.purpose_index = -1;
        }
    };
    VisitorFlowNewContactComponent.prototype.to = function (name, query) {
        var loc = this.model.space ? 'space' : 'visitor';
        this.service.navigate(['book', loc, name], query);
    };
    VisitorFlowNewContactComponent.prototype.checkOrg = function () {
        var _this = this;
        if (!this.model.org_name) {
            this.model.org_name = '';
        }
        var exists = this.model.orgs.find(function (i) { return i.name.toLowerCase() === _this.model.org_name.toLowerCase(); });
        this.model.org_index = this.model.orgs.indexOf(exists);
    };
    VisitorFlowNewContactComponent.prototype.setOrg = function (item) {
        if (item && item.name !== 'No companies') {
            this.model.org_name = item.name;
            this.model.org_index = this.model.orgs.indexOf(item);
            this.model.show = false;
        }
    };
    VisitorFlowNewContactComponent.prototype.updateView = function () {
        var _this = this;
        if (!this.input) {
            return this.timeout('update_view', function () { return _this.updateView(); });
        }
        this.timeout('update_view', function () {
            var el = document.getElementsByClassName('company-new-contact');
            if (el && el.length >= 2) {
                el[0].blur();
                el[1].focus();
            }
        }, 200);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VisitorFlowNewContactComponent.prototype, "attendees", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VisitorFlowNewContactComponent.prototype, "attendeesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VisitorFlowNewContactComponent.prototype, "back", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('ref'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], VisitorFlowNewContactComponent.prototype, "reference", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], VisitorFlowNewContactComponent.prototype, "input", void 0);
    VisitorFlowNewContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'visitor-flow-new-contact',
            template: __webpack_require__(/*! ./new-contact.component.html */ "./src/app/shell/booking/visitor-flow/new-contact/new-contact.component.html"),
            styles: [__webpack_require__(/*! ./new-contact.component.scss */ "./src/app/shell/booking/visitor-flow/new-contact/new-contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], VisitorFlowNewContactComponent);
    return VisitorFlowNewContactComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/options/options.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/options/options.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"circle\"></div>\n    <div class=\"content\">\n        <div class=\"header to-upper\">Select Meeting point</div>\n        <div class=\"form\">\n            <div class=\"field\">\n                <label for=\"date\">Date</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"date\" [list]=\"model.dates\" [(model)]=\"model.date_index\" (modelChange)=\"updateForm(); loadTimes()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"time\">Time</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"time\" [list]=\"model.times\" [(model)]=\"model.time_index\" (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <div class=\"field\">\n                <label for=\"level\">Level</label>\n                <div class=\"value\">\n                    <dropdown klass=\"form\" id=\"level\" [list]=\"model.levels\" [(model)]=\"model.level_index\" (modelChange)=\"updateForm()\"></dropdown>\n                </div>\n            </div>\n            <hr />\n            <div class=\"options\">\n                <btn klass=\"full-width\" (tapped)=\"cancel()\">\n                    <div class=\"text\">Cancel</div>\n                </btn>\n                <btn klass=\"full-width\" (tapped)=\"book()\">\n                    <div class=\"text\">Book</div>\n                </btn>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/options/options.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/options/options.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 3em;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #D4EDF1;\n  overflow: auto;\n  padding: 2em; }\n.circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 120vmin;\n  width: 120vmin;\n  border-radius: 100%;\n  background-color: rgba(255, 255, 255, 0.54);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  pointer-events: none; }\n.content {\n  position: relative;\n  max-width: 768px;\n  width: 100%;\n  background-color: #fff;\n  padding: 1em;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  font-size: 1.2em;\n  z-index: 1; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .25em; }\n.icon img {\n    height: 1em; }\n.header {\n  font-size: 1.2em;\n  margin-bottom: .5em; }\n.item {\n  margin: .5em; }\n.item > * {\n    font-size: 1.2em; }\n.value {\n  margin: .5em 0; }\n.form {\n  padding: 0 1em;\n  font-size: 1.1em; }\n.form .options {\n    display: -webkit-box;\n    display: flex; }\n.form btn {\n    -webkit-box-flex: 1;\n            flex: 1;\n    margin: .25em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy92aXNpdG9yLWZsb3cvb3B0aW9ucy9vcHRpb25zLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2JlbmhvYWQvUHJvamVjdHMvbWNrLW91dGxvb2stYWRkaW4vc3JjL2FwcC9zaGVsbC9ib29raW5nL3Zpc2l0b3ItZmxvdy9vcHRpb25zL29wdGlvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2lDQ0VpQztBRCtCakM7O3VCQzVCdUI7QUR5Q3ZCOztzQkN0Q3NCO0FDTHRCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZLEVBQUE7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxlQUFlO0VBQ2YsY0FBYztFQUNkLG1CQUFtQjtFQUNuQiwyQ0FBMkI7RUFDM0Isd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxvQkFBb0IsRUFBQTtBQUd4QjtFQUNJLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHVIQUEyRjtVQUEzRiwrR0FBMkY7RUFDM0YsZ0JBQWdCO0VBQ2hCLFVBQVUsRUFBQTtBQUdkO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYSxFQUFBO0FBTmpCO0lBUVEsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksWUFBWSxFQUFBO0FBRGhCO0lBR1EsZ0JBQWdCLEVBQUE7QUFJeEI7RUFDSSxjQUFjLEVBQUE7QUFHbEI7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7QUFGcEI7SUFLUSxvQkFBYTtJQUFiLGFBQWEsRUFBQTtBQUxyQjtJQVNRLG1CQUFPO1lBQVAsT0FBTztJQUNQLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2Jvb2tpbmcvdmlzaXRvci1mbG93L29wdGlvbnMvb3B0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2VzczogIzMwOWI0MDtcbiRzdWNjZXNzLWFsdDogIzQyODVmNDtcbiRlcnJvcjogI2RiMjkxZDtcbiRwZW5kaW5nOiAjRkY5ODAwO1xuJG5ldXRyYWw6ICM3OTc5Nzk7XG5cbiRiYWNrZ3JvdW5kOiAjZWNmMWY1O1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuJGNvbG9yLXByaW1hcnktd2lyZWZyYW1lOnJnYmEoMCwgMCwgMCwgMC42MSk7XG4kaGVhZGVyLWJnOiAjZmZmO1xuJGhlYWRlci1jb2xvcjogcmdiYSgjMDAyOTYwLCAuODcpO1xuXG4kdGlsZS1jb2xvcjogI2ZmZjtcbiR0aWxlLWJvcmRlcjogI2ZmZjtcblxuJGhlbHAtYm9yZGVyOiByZ2JhKCMwMDAsIC4yKTtcblxuJGNvbG9yLXByaW1hcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5OiAjNDA0ODVhO1xuJGNvbG9yLXRlcm5hcnk6ICNjNzk5NjE7XG4kY29sb3ItcXVhdGVybmFyeTogIzdkZDZkNjtcbiRjb2xvci1xdWludGVybmFyeTogIzRjNWM2YztcbiRjb2xvci1zZXh0ZXJuYXJ5OiAjN2ZlNDNiO1xuXG4kdGltZWxpbmUtYmc6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNEY1RjcwIDAlLCAjMEYxMjE1IDEwMCUpO1xuJHRpbWVsaW5lLWV2ZW50OiAkZXJyb3I7XG4kdGltZWxpbmUtYm9va2luZzogJGNvbG9yLXF1YXRlcm5hcnk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNHB4O1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRtYWluLWZvbnQ6ICRmb250LXN0YWNrO1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogM2VtO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q0RURGMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDJlbTsgfVxuXG4uY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBoZWlnaHQ6IDEyMHZtaW47XG4gIHdpZHRoOiAxMjB2bWluO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNzY4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBmb250LXNpemU6IDEuMmVtO1xuICB6LWluZGV4OiAxOyB9XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMS4yNWVtO1xuICB3aWR0aDogMS4yNWVtO1xuICBtYXJnaW46IC4yNWVtOyB9XG4gIC5pY29uIGltZyB7XG4gICAgaGVpZ2h0OiAxZW07IH1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIG1hcmdpbi1ib3R0b206IC41ZW07IH1cblxuLml0ZW0ge1xuICBtYXJnaW46IC41ZW07IH1cbiAgLml0ZW0gPiAqIHtcbiAgICBmb250LXNpemU6IDEuMmVtOyB9XG5cbi52YWx1ZSB7XG4gIG1hcmdpbjogLjVlbSAwOyB9XG5cbi5mb3JtIHtcbiAgcGFkZGluZzogMCAxZW07XG4gIGZvbnQtc2l6ZTogMS4xZW07IH1cbiAgLmZvcm0gLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgLmZvcm0gYnRuIHtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbjogLjI1ZW07IH1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDNlbTtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0Q0RURGMTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBwYWRkaW5nOiAyZW07XG59XG5cbi5jaXJjbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgaGVpZ2h0OiAxMjB2bWluO1xuICAgIHdpZHRoOiAxMjB2bWluO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZmZmLCAuNTQpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4uY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1heC13aWR0aDogNzY4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsLjEyKTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgd2lkdGg6IDEuMjVlbTtcbiAgICBtYXJnaW46IC4yNWVtO1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgIH1cbn1cblxuLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xufVxuXG4uaXRlbSB7XG4gICAgbWFyZ2luOiAuNWVtO1xuICAgICYgPiAqIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB9XG59XG5cbi52YWx1ZSB7XG4gICAgbWFyZ2luOiAuNWVtIDA7XG59XG5cbi5mb3JtIHtcbiAgICBwYWRkaW5nOiAwIDFlbTtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuXG4gICAgLm9wdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIGJ0biB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1hcmdpbjogLjI1ZW07XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/options/options.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/options/options.component.ts ***!
  \*************************************************************************/
/*! exports provided: VisitorFlowOptionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorFlowOptionsComponent", function() { return VisitorFlowOptionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisitorFlowOptionsComponent = /** @class */ (function (_super) {
    __extends(VisitorFlowOptionsComponent, _super);
    function VisitorFlowOptionsComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.filtersChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {
            date_index: 0,
            time_index: 0,
            duration_index: 0,
            level_index: 0
        };
        return _this;
    }
    VisitorFlowOptionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.filters) {
            this.filters = {
                date: moment__WEBPACK_IMPORTED_MODULE_3__().valueOf(),
                duration: 30,
            };
        }
        this.subs.obs.building = this.service.Buildings.listen(function (bld) {
            if (bld) {
                _this.model.levels = bld.levels.slice();
                var exists = _this.model.levels.find(function (i) { return _this.filters.level && i.id === _this.filters.level; });
                if (exists) {
                    _this.model.level_index = _this.model.levels.indexOf(exists);
                    if (_this.model.level_index < 0) {
                        _this.model.level_index = 0;
                    }
                }
                _this.updateForm();
            }
        });
        this.loadDates();
        this.updateForm();
    };
    VisitorFlowOptionsComponent.prototype.updateForm = function () {
        var _this = this;
        this.timeout('update', function () {
            // Prevent pre-initialisation errors
            if (!_this.model.dates) {
                _this.model.dates = [{ id: moment__WEBPACK_IMPORTED_MODULE_3__().seconds(0).milliseconds(0).valueOf() }];
            }
            if (!_this.model.times) {
                _this.model.times = [{ id: moment__WEBPACK_IMPORTED_MODULE_3__().format('HH:mm') }];
            }
            // Update filter fields
            var date = moment__WEBPACK_IMPORTED_MODULE_3__(_this.model.dates[_this.model.date_index].id);
            var time = _this.model.times[_this.model.time_index].id.split(':');
            _this.filters = {
                date: date.hours(+time[0]).minutes(+time[1]).valueOf(),
                duration: 30,
                level: _this.model.levels[_this.model.level_index].id
            };
            _this.filtersChange.emit(_this.filters);
        }, 100);
    };
    VisitorFlowOptionsComponent.prototype.loadDates = function () {
        this.model.dates = [];
        var date = moment__WEBPACK_IMPORTED_MODULE_3__().hour(0).minutes(0).seconds(0).milliseconds(0);
        var end = moment__WEBPACK_IMPORTED_MODULE_3__(date).add(2, 'M');
        var offset = 0;
        for (; date.isBefore(end); date.add(1, 'd')) {
            this.model.dates.push({
                id: date.valueOf(),
                name: date.format('ddd MMMM DD, YYYY'),
                offset: offset
            });
            offset++;
        }
        this.loadTimes();
    };
    VisitorFlowOptionsComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'visitor', name], query);
    };
    VisitorFlowOptionsComponent.prototype.toSpaces = function () { this.to('spaces'); };
    VisitorFlowOptionsComponent.prototype.cancel = function () { this.back.emit(); };
    VisitorFlowOptionsComponent.prototype.loadTimes = function () {
        // Clean up time
        this.filters.date = this.cleanTime(this.filters.date);
        this.model.times = [];
        var date = moment__WEBPACK_IMPORTED_MODULE_3__(this.filters.date);
        var now = moment__WEBPACK_IMPORTED_MODULE_3__();
        if (date.isAfter(now, 'd')) {
            now.hours(0).minutes(0);
        }
        else {
            now.minutes(Math.ceil(now.minutes() / 5) * 5);
        }
        if (now.minutes() % 15 !== 0) {
            this.model.times.push({
                id: now.format('HH:mm'),
                name: now.format('hh:mm A')
            });
            now.minutes(Math.ceil(now.minutes() / 15) * 15);
        }
        var end = moment__WEBPACK_IMPORTED_MODULE_3__(now).hours(23).minutes(59);
        for (; now.isBefore(end, 'm'); now.add(15, 'm')) {
            this.model.times.push({
                id: now.format('HH:mm'),
                name: now.format('hh:mm A')
            });
        }
        var time = date.format('HH:mm');
        var exists = this.model.times.find(function (a) { return a.id === time; });
        if (exists) {
            this.model.time_index = this.model.times.indexOf(exists);
        }
        else {
            this.model.times.push({
                id: date.format('HH:mm'),
                name: date.format('hh:mm A')
            });
            this.model.times.sort(function (a, b) { return a.id.localeCompare(b.id); });
            exists = this.model.times.find(function (a) { return a.id === time; });
            this.model.time_index = this.model.times.indexOf(exists);
        }
    };
    VisitorFlowOptionsComponent.prototype.cleanTime = function (datestamp, block_size) {
        if (block_size === void 0) { block_size = 5; }
        if (!datestamp) {
            datestamp = moment__WEBPACK_IMPORTED_MODULE_3__().valueOf();
        }
        var now = moment__WEBPACK_IMPORTED_MODULE_3__().seconds(0).milliseconds(0);
        now.minutes(Math.ceil(now.minutes() / block_size) * block_size);
        var date = moment__WEBPACK_IMPORTED_MODULE_3__(datestamp).seconds(0).milliseconds(0);
        if (date.isBefore(now, 'm')) {
            date = moment__WEBPACK_IMPORTED_MODULE_3__(now);
        }
        else {
            date.minutes(Math.ceil(date.minutes() / block_size) * block_size);
        }
        return date.valueOf();
    };
    VisitorFlowOptionsComponent.prototype.book = function () {
        var _this = this;
        if (!this.attendees || this.attendees.length <= 0) {
            return this.back.emit();
        }
        this.loading.emit('Processing...');
        var user = this.service.Users.current();
        var a = this.attendees;
        this.service.Visitors.add({
            title: "Visitors for " + user.name + ": " + a[0].name + (a.length > 1 ? ', +' + (a.length - 1) : ''),
            visitors: a,
            date: this.filters.date,
            duration: this.filters.duration
        }).then(function () {
            _this.loading.emit(false);
            _this.to('invite');
        }, function () {
            _this.loading.emit(false);
            _this.service.error("Error creating new visitor " + (a.length > 1 ? 'group' : ''));
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], VisitorFlowOptionsComponent.prototype, "filters", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VisitorFlowOptionsComponent.prototype, "attendees", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VisitorFlowOptionsComponent.prototype, "filtersChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VisitorFlowOptionsComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VisitorFlowOptionsComponent.prototype, "back", void 0);
    VisitorFlowOptionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'visitor-flow-options',
            template: __webpack_require__(/*! ./options.component.html */ "./src/app/shell/booking/visitor-flow/options/options.component.html"),
            styles: [__webpack_require__(/*! ./options.component.scss */ "./src/app/shell/booking/visitor-flow/options/options.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], VisitorFlowOptionsComponent);
    return VisitorFlowOptionsComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/result/result.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/result/result.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"circle\"></div>\n    <div class=\"content\">\n        <div class=\"icon top\">\n            <img src=\"assets/img/external.svg\">\n        </div>\n        <div class=\"title\">Booking created</div>\n        <div class=\"info\">Are you happy with your experience?</div>\n        <div class=\"options\">\n            <div class=\"option icon\" (touchrelease)=\"toHome()\">\n                <i class=\"material-icons\">done</i>\n            </div>\n            <div class=\"option icon\" (touchrelease)=\"toFeedback()\">\n                <i class=\"material-icons\">close</i>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/result/result.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/result/result.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #D4EDF1;\n  overflow: auto;\n  padding: 2em; }\n.circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 120vmin;\n  width: 120vmin;\n  border-radius: 100%;\n  background-color: rgba(255, 255, 255, 0.54);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  pointer-events: none; }\n.content {\n  position: relative;\n  max-width: 768px;\n  width: 100%;\n  background-color: #fff;\n  padding: 1em;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  font-size: 1.2em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 1; }\n.info {\n  margin-bottom: .5em;\n  font-size: 1.2em; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .05em; }\n.icon img {\n    height: 1em;\n    width: 1em;\n    border-radius: 100%;\n    border: 4px solid #309b40; }\n.top {\n  font-size: 6em; }\n.title {\n  font-size: 2em;\n  margin: .25em 0;\n  text-transform: uppercase; }\n.options {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: .5em 0; }\n.option {\n  height: 1.5em;\n  width: 1.5em;\n  font-size: 2em;\n  background-color: #F1F9FF;\n  border-radius: 100%;\n  margin: .2em .25em;\n  color: #6a4b25; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy92aXNpdG9yLWZsb3cvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hlbGwvYm9va2luZy92aXNpdG9yLWZsb3cvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7aUNDRWlDO0FEK0JqQzs7dUJDNUJ1QjtBRHlDdkI7O3NCQ3RDc0I7QUNMdEI7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVksRUFBQTtBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDJDQUEyQjtFQUMzQix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLG9CQUFvQixFQUFBO0FBR3hCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUhBQTJGO1VBQTNGLCtHQUEyRjtFQUMzRixnQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFVBQVUsRUFBQTtBQUdkO0VBQ0ksbUJBQW1CO0VBQ25CLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYSxFQUFBO0FBTmpCO0lBUVEsV0FBVztJQUNYLFVBQVU7SUFDVixtQkFBbUI7SUFDbkIseUJGekRTLEVBQUE7QUU2RGpCO0VBQ0ksY0FBYyxFQUFBO0FBR2xCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZix5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixjQUFjLEVBQUE7QUFHbEI7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixjQUFpQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvYm9va2luZy92aXNpdG9yLWZsb3cvcmVzdWx0L3Jlc3VsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2VzczogIzMwOWI0MDtcbiRzdWNjZXNzLWFsdDogIzQyODVmNDtcbiRlcnJvcjogI2RiMjkxZDtcbiRwZW5kaW5nOiAjRkY5ODAwO1xuJG5ldXRyYWw6ICM3OTc5Nzk7XG5cbiRiYWNrZ3JvdW5kOiAjZWNmMWY1O1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuJGNvbG9yLXByaW1hcnktd2lyZWZyYW1lOnJnYmEoMCwgMCwgMCwgMC42MSk7XG4kaGVhZGVyLWJnOiAjZmZmO1xuJGhlYWRlci1jb2xvcjogcmdiYSgjMDAyOTYwLCAuODcpO1xuXG4kdGlsZS1jb2xvcjogI2ZmZjtcbiR0aWxlLWJvcmRlcjogI2ZmZjtcblxuJGhlbHAtYm9yZGVyOiByZ2JhKCMwMDAsIC4yKTtcblxuJGNvbG9yLXByaW1hcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5OiAjNDA0ODVhO1xuJGNvbG9yLXRlcm5hcnk6ICNjNzk5NjE7XG4kY29sb3ItcXVhdGVybmFyeTogIzdkZDZkNjtcbiRjb2xvci1xdWludGVybmFyeTogIzRjNWM2YztcbiRjb2xvci1zZXh0ZXJuYXJ5OiAjN2ZlNDNiO1xuXG4kdGltZWxpbmUtYmc6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNEY1RjcwIDAlLCAjMEYxMjE1IDEwMCUpO1xuJHRpbWVsaW5lLWV2ZW50OiAkZXJyb3I7XG4kdGltZWxpbmUtYm9va2luZzogJGNvbG9yLXF1YXRlcm5hcnk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNHB4O1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRtYWluLWZvbnQ6ICRmb250LXN0YWNrO1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNENEVERjE7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAyZW07IH1cblxuLmNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgaGVpZ2h0OiAxMjB2bWluO1xuICB3aWR0aDogMTIwdm1pbjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG5cbi5jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXgtd2lkdGg6IDc2OHB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDE7IH1cblxuLmluZm8ge1xuICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICBmb250LXNpemU6IDEuMmVtOyB9XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMS4yNWVtO1xuICB3aWR0aDogMS4yNWVtO1xuICBtYXJnaW46IC4wNWVtOyB9XG4gIC5pY29uIGltZyB7XG4gICAgaGVpZ2h0OiAxZW07XG4gICAgd2lkdGg6IDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICMzMDliNDA7IH1cblxuLnRvcCB7XG4gIGZvbnQtc2l6ZTogNmVtOyB9XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IC4yNWVtIDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgbWFyZ2luOiAuNWVtIDA7IH1cblxuLm9wdGlvbiB7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbiAgZm9udC1zaXplOiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMUY5RkY7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIG1hcmdpbjogLjJlbSAuMjVlbTtcbiAgY29sb3I6ICM2YTRiMjU7IH1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNENEVERjE7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogMmVtO1xufVxuXG4uY2lyY2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGhlaWdodDogMTIwdm1pbjtcbiAgICB3aWR0aDogMTIwdm1pbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjU0KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLC4xMik7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4uaW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS4yNWVtO1xuICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgbWFyZ2luOiAuMDVlbTtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgJHN1Y2Nlc3M7XG4gICAgfVxufVxuXG4udG9wIHtcbiAgICBmb250LXNpemU6IDZlbTtcbn1cblxuLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW46IC4yNWVtIDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IC41ZW0gMDtcbn1cblxuLm9wdGlvbiB7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB3aWR0aDogMS41ZW07XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjlGRjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIG1hcmdpbjogLjJlbSAuMjVlbTtcbiAgICBjb2xvcjogZGFya2VuKCRjb2xvci10ZXJuYXJ5LCAzMCk7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/result/result.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/result/result.component.ts ***!
  \***********************************************************************/
/*! exports provided: VisitorFlowResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorFlowResultComponent", function() { return VisitorFlowResultComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VisitorFlowResultComponent = /** @class */ (function (_super) {
    __extends(VisitorFlowResultComponent, _super);
    function VisitorFlowResultComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        return _this;
    }
    VisitorFlowResultComponent.prototype.ngOnInit = function () {
        this.clearForm();
    };
    VisitorFlowResultComponent.prototype.clear = function (name) {
        if (localStorage) {
            localStorage.removeItem("STAFF.visitor." + name);
        }
    };
    VisitorFlowResultComponent.prototype.clearForm = function () {
        this.clear('filters');
        this.clear('space');
        this.clear('attendees');
    };
    VisitorFlowResultComponent.prototype.toHome = function () { this.service.navigate('home'); };
    VisitorFlowResultComponent.prototype.toFeedback = function () { this.service.navigate(['book', 'feedback']); };
    VisitorFlowResultComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'visitor-flow-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/shell/booking/visitor-flow/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/shell/booking/visitor-flow/result/result.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], VisitorFlowResultComponent);
    return VisitorFlowResultComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/visitor-flow.component.html":
/*!************************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/visitor-flow.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"topbar\">\n        <div class=\"icon back\" (touchrelease)=\"back()\">\n            <i class=\"material-icons\">arrow_back</i>\n        </div>\n        <div class=\"text to-upper\" [ngSwitch]=\"model.page\">\n            <ng-container *ngSwitchCase=\"'new-contact'\">Add new contact</ng-container>\n            <ng-container *ngSwitchCase=\"'options'\">Meeting selections</ng-container>\n            <ng-container *ngSwitchDefault>Invite external visitors</ng-container>\n        </div>\n    </div>\n    <div class=\"flow-step\" [ngSwitch]=\"model.page\">\n        <ng-container *ngSwitchCase=\"'new-contact'\">\n            <visitor-flow-new-contact [(attendees)]=\"model.attendees\" (attendeesChange)=\"store('attendees')\" (back)=\"back()\"></visitor-flow-new-contact>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'options'\">\n            <visitor-flow-options [attendees]=\"model.attendees\" [(filters)]=\"model.filters\" (filtersChange)=\"store('filters')\"\n                (loading)=\"model.loading = $event\" (back)=\"back()\">\n            </visitor-flow-options>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'invite'\">\n            <visitor-flow-invite [filters]=\"model.filters\"></visitor-flow-invite>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'results'\">\n            <visitor-flow-result></visitor-flow-result>\n        </ng-container>\n        <ng-container *ngSwitchCase=\"'result'\">\n            <visitor-flow-result></visitor-flow-result>\n        </ng-container>\n        <ng-container *ngSwitchDefault>\n            <visitor-flow-visitor-list [(attendees)]=\"model.attendees\" (attendeesChange)=\"store('attendees')\"\n                (loading)=\"model.loading = $event\" (back)=\"back()\">\n            </visitor-flow-visitor-list>\n        </ng-container>\n    </div>\n    <div class=\"loader\" *ngIf=\"model.loading\">\n        <div class=\"no-item\">\n            <div class=\"icon\">\n                <spinner type=\"circle-ring\" color=\"#000\"></spinner>\n            </div>\n            <div class=\"text\">{{model.loading === true ? 'Waiting...' : model.loading}}</div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/visitor-flow.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/visitor-flow.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.container > * {\n    width: 100%; }\n.topbar {\n  width: 100%;\n  min-height: 3em;\n  background-color: #B8123E;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n.topbar > * {\n    font-size: 1.2em; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  margin: .25em; }\n.icon img {\n    height: 1em; }\n.flow-step {\n  -webkit-box-flex: 1;\n          flex: 1;\n  overflow: auto; }\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.87);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 999; }\n.loader .text {\n    color: rgba(0, 0, 0, 0.87); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy92aXNpdG9yLWZsb3cvdmlzaXRvci1mbG93LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2JlbmhvYWQvUHJvamVjdHMvbWNrLW91dGxvb2stYWRkaW4vc3JjL2FwcC9zaGVsbC9ib29raW5nL3Zpc2l0b3ItZmxvdy92aXNpdG9yLWZsb3cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2lDQ0VpQztBRCtCakM7O3VCQzVCdUI7QUR5Q3ZCOztzQkN0Q3NCO0FDTnRCO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBO0FBUDFCO0lBU1EsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTtBQU52QjtJQVFRLGdCQUFnQixFQUFBO0FBSXhCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxhQUFhO0VBQ2IsYUFBYSxFQUFBO0FBTmpCO0lBUVEsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksbUJBQU87VUFBUCxPQUFPO0VBQ1AsY0FBYyxFQUFBO0FBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCwyQ0FBMkI7RUFDM0Isb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFlBQVksRUFBQTtBQVZoQjtJQWFRLDBCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvYm9va2luZy92aXNpdG9yLWZsb3cvdmlzaXRvci1mbG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogI2M3OTk2MTtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE0cHg7XG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJG1haW4tZm9udDogJGZvbnQtc3RhY2s7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG4gIC5jb250YWluZXIgPiAqIHtcbiAgICB3aWR0aDogMTAwJTsgfVxuXG4udG9wYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I4MTIzRTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLnRvcGJhciA+ICoge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07IH1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjI1ZW07XG4gIHdpZHRoOiAxLjI1ZW07XG4gIG1hcmdpbjogLjI1ZW07IH1cbiAgLmljb24gaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTsgfVxuXG4uZmxvdy1zdGVwIHtcbiAgZmxleDogMTtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cblxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgei1pbmRleDogOTk5OyB9XG4gIC5sb2FkZXIgLnRleHQge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpOyB9XG4iLCJAaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgJiA+ICoge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi50b3BiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjgxMjNFO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAmID4gKiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS4yNWVtO1xuICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgbWFyZ2luOiAuMjVlbTtcbiAgICBpbWcge1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICB9XG59XG5cbi5mbG93LXN0ZXAge1xuICAgIGZsZXg6IDE7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5sb2FkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZmZmLCAuODcpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB6LWluZGV4OiA5OTk7XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC44Nyk7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/visitor-flow.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/visitor-flow.component.ts ***!
  \**********************************************************************/
/*! exports provided: VisitorFlowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorFlowComponent", function() { return VisitorFlowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisitorFlowComponent = /** @class */ (function (_super) {
    __extends(VisitorFlowComponent, _super);
    function VisitorFlowComponent(service, route, router) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        _this.router = router;
        _this.model = {};
        _this.model.breadcrumbs = [];
        return _this;
    }
    VisitorFlowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.flow = 'visitor';
        this.load('breadcrumbs');
        this.subs.obs.params = this.route.paramMap.subscribe(function (params) {
            if (_this.model.page && !_this.model.ignore) {
                _this.model.breadcrumbs.push(_this.model.page);
                _this.store('breadcrumbs');
            }
            _this.model.ignore = false;
            _this.model.page = '';
            if (params.has('page')) {
                _this.model.page = params.get('page');
            }
            if (!_this.model.page) {
                _this.clearForm();
            }
        });
        this.subs.obs.route = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"] && e.url.indexOf('book/visitor') < 0) {
                _this.clearForm();
            }
        });
        this.load('attendees');
    };
    VisitorFlowComponent.prototype.store = function (name) {
        if (localStorage) {
            var d = this.model[name];
            var value = typeof d === 'object' ? JSON.stringify(d) : d;
            localStorage.setItem("STAFF." + this.model.flow + "." + name, value);
        }
    };
    VisitorFlowComponent.prototype.load = function (name) {
        if (localStorage) {
            var item = localStorage.getItem("STAFF." + this.model.flow + "." + name);
            if (item) {
                try {
                    this.model[name] = JSON.parse(item);
                }
                catch (e) {
                    this.model[name] = item;
                }
            }
        }
    };
    VisitorFlowComponent.prototype.clear = function (name) {
        if (localStorage) {
            localStorage.removeItem("STAFF." + this.model.flow + "." + name);
        }
    };
    VisitorFlowComponent.prototype.storeFilters = function () { this.store('filters'); };
    VisitorFlowComponent.prototype.loadFilters = function () { this.load('filters'); };
    VisitorFlowComponent.prototype.storeSpace = function () { this.store('space'); };
    VisitorFlowComponent.prototype.loadSpace = function () { this.load('space'); };
    VisitorFlowComponent.prototype.storeAttendees = function () { this.store('attendees'); };
    VisitorFlowComponent.prototype.loadAttendees = function () { this.load('attendees'); };
    VisitorFlowComponent.prototype.clearForm = function () {
        var _this = this;
        ['filters', 'space', 'attendees', 'breadcrumbs'].forEach(function (i) { return _this.clear(i); });
    };
    Object.defineProperty(VisitorFlowComponent.prototype, "loading", {
        set: function (value) {
            var _this = this;
            this.timeout('loading', function () { return _this.model.loading = value; }, 10);
        },
        enumerable: true,
        configurable: true
    });
    VisitorFlowComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'visitor', name], query);
    };
    VisitorFlowComponent.prototype.back = function () {
        var previous = this.model.breadcrumbs.pop();
        if (previous) {
            this.to(previous);
            this.model.ignore = true;
            this.store('breadcrumbs');
        }
        else {
            this.service.navigate(['']);
        }
    };
    VisitorFlowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'visitor-booking-flow',
            template: __webpack_require__(/*! ./visitor-flow.component.html */ "./src/app/shell/booking/visitor-flow/visitor-flow.component.html"),
            styles: [__webpack_require__(/*! ./visitor-flow.component.scss */ "./src/app/shell/booking/visitor-flow/visitor-flow.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], VisitorFlowComponent);
    return VisitorFlowComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/visitor-list/visitor-list.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/visitor-list/visitor-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"block header\">\n        <div class=\"content\">\n            <div class=\"header to-upper\">Add a visitor</div>\n            <div class=\"action\" (touchrelease)=\"to('new-contact')\">\n                <div class=\"icon\">\n                    <i class=\"material-icons\">add</i>\n                </div>\n                <div class=\"text\">Create a new contact</div>\n            </div>\n            <div class=\"divider\">\n                <div class=\"bar\"></div>\n                <div class=\"text to-upper\">Or</div>\n                <div class=\"bar\"></div>\n            </div>\n            <div class=\"search\">\n                <div class=\"text\">Search my Outlook contacts</div>\n                <searchbar [(filter)]=\"model.search\" (filterChange)=\"search()\"></searchbar>\n            </div>\n        </div>\n    </div>\n    <div class=\"block list\">\n        <div class=\"content\">\n            <div class=\"header to-upper\">Guests Added({{attendees?.length || '0'}}):</div>\n            <div class=\"item-list\">\n                <div class=\"user\" *ngFor=\"let item of (attendees || [])\">\n                    <div class=\"icon\">\n                        <img src=\"assets/img/persona.svg\">\n                    </div>\n                    <div class=\"details\">\n                        <div class=\"name\">{{item.name}} - {{item.organisation?.name || item.organisation}}</div>\n                    </div>\n                    <div class=\"option\">\n                        <div class=\"icon\" (touchrelease)=\"remove(item)\"><i class=\"material-icons\">close</i></div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"options\" *ngIf=\"attendees && attendees.length > 0\">\n                <btn (touchrelease)=\"cancel()\">Cancel</btn>\n                <btn (touchrelease)=\"to('options')\">Next</btn>\n            </div>\n        </div>\n        <div class=\"block search\" [class.hide]=\"!model.search\">\n            <div class=\"content\">\n                <div class=\"header to-upper\">Results</div>\n                <div class=\"item-list\">\n                    <div class=\"item\" *ngFor=\"let item of (model.results || [])\">\n                        <div class=\"details\">\n                            <div class=\"name\">{{item.name}}</div>\n                            <div class=\"email\">{{item.email}}</div>\n                        </div>\n                        <div class=\"option\">\n                            <div class=\"icon\" (touchrelease)=\"add(item)\"><i class=\"material-icons\">add</i></div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/visitor-list/visitor-list.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/visitor-list/visitor-list.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  height: 100%;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column; }\n.container > * {\n    width: 100%; }\n.block {\n  position: relative;\n  width: 100%;\n  padding: 1em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  opacity: 1;\n  -webkit-transition: opacity 200ms;\n  transition: opacity 200ms;\n  font-size: 1.2em;\n  overflow: auto; }\n.block.hide {\n    opacity: 0;\n    pointer-events: none; }\n.block.list {\n    background-color: #fff;\n    -webkit-box-flex: 1;\n            flex: 1;\n    min-height: 50%; }\n.block.search {\n    position: absolute;\n    background-color: #c79961;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0; }\n.block.list .content, .block.search .content {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column; }\n.content {\n  max-width: 768px;\n  width: 100%;\n  min-height: 100%; }\n.header {\n  font-size: 1.2em;\n  width: 100%; }\n.header .filters {\n    margin: .5em 0; }\n.header .text {\n    font-size: .9em; }\n.bar {\n  -webkit-box-flex: 1;\n          flex: 1;\n  width: 1px;\n  height: 1px;\n  background-color: rgba(0, 0, 0, 0.54); }\n.divider {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%; }\n.divider .text {\n    padding: 1em;\n    font-weight: 300;\n    color: rgba(0, 0, 0, 0.54); }\n.item-list {\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 10em;\n  width: 100%; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  min-width: 1.25em;\n  margin: .25em; }\n.icon img {\n    height: 1em; }\n.action {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n.action .icon {\n    font-size: 1.5em;\n    background-color: #4285F4;\n    border-radius: 100%;\n    color: #fff; }\n.item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #fff;\n  margin: .25em 0;\n  padding: .5em;\n  font-size: 1.1em;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n.item .details {\n    -webkit-box-flex: 1;\n            flex: 1;\n    width: 8em; }\n.item .email {\n    color: rgba(0, 0, 0, 0.54);\n    font-size: .9em; }\n.item .icon {\n    color: #7dd6d6; }\n.user {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  margin: .25em 0; }\n.user .details {\n    -webkit-box-flex: 1;\n            flex: 1; }\n.user .option {\n    color: #4285F4; }\n.user > .icon {\n    font-size: 1.5em;\n    margin-left: 0; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvYm9va2luZy92aXNpdG9yLWZsb3cvdmlzaXRvci1saXN0L3Zpc2l0b3ItbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hlbGwvYm9va2luZy92aXNpdG9yLWZsb3cvdmlzaXRvci1saXN0L3Zpc2l0b3ItbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7aUNDRWlDO0FEK0JqQzs7dUJDNUJ1QjtBRHlDdkI7O3NCQ3RDc0I7QUNOdEI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQixFQUFBO0FBTjFCO0lBUVEsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLFVBQVU7RUFDVixpQ0FBeUI7RUFBekIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFWbEI7SUFhUSxVQUFVO0lBQ1Ysb0JBQW9CLEVBQUE7QUFkNUI7SUFpQlEsc0JBQXNCO0lBQ3RCLG1CQUFPO1lBQVAsT0FBTztJQUNQLGVBQWUsRUFBQTtBQW5CdkI7SUFzQlEsa0JBQWtCO0lBQ2xCLHlCRmJlO0lFY2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1IsU0FBUyxFQUFBO0FBM0JqQjtJQWlDWSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCLEVBQUE7QUFLbEM7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUZmO0lBS1EsY0FBYyxFQUFBO0FBTHRCO0lBU1EsZUFBZSxFQUFBO0FBSXZCO0VBQ0ksbUJBQU87VUFBUCxPQUFPO0VBQ1AsVUFBVTtFQUNWLFdBQVc7RUFDWCxxQ0FBMkIsRUFBQTtBQUcvQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0FBSGY7SUFNUSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLDBCQUFnQixFQUFBO0FBSXhCO0VBQ0ksbUJBQU87VUFBUCxPQUFPO0VBQ1AsWUFBWTtFQUNaLFdBQVcsRUFBQTtBQUdmO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsYUFBYSxFQUFBO0FBTmpCO0lBUVEsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBO0FBRnZCO0lBSVEsZ0JBQWdCO0lBQ2hCLHlCRjdGZTtJRThGZixtQkFBbUI7SUFDbkIsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsdUhBQTJGO1VBQTNGLCtHQUEyRixFQUFBO0FBUC9GO0lBVVEsbUJBQU87WUFBUCxPQUFPO0lBQ1AsVUFBVSxFQUFBO0FBWGxCO0lBZVEsMEJBQWdCO0lBQ2hCLGVBQWUsRUFBQTtBQWhCdkI7SUFvQlEsY0ZwSGtCLEVBQUE7QUV3SDFCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlLEVBQUE7QUFIbkI7SUFNUSxtQkFBTztZQUFQLE9BQU8sRUFBQTtBQU5mO0lBVVEsY0ZySWUsRUFBQTtBRTJIdkI7SUFjUSxnQkFBZ0I7SUFDaEIsY0FBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvYm9va2luZy92aXNpdG9yLWZsb3cvdmlzaXRvci1saXN0L3Zpc2l0b3ItbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2VzczogIzMwOWI0MDtcbiRzdWNjZXNzLWFsdDogIzQyODVmNDtcbiRlcnJvcjogI2RiMjkxZDtcbiRwZW5kaW5nOiAjRkY5ODAwO1xuJG5ldXRyYWw6ICM3OTc5Nzk7XG5cbiRiYWNrZ3JvdW5kOiAjZWNmMWY1O1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuJGNvbG9yLXByaW1hcnktd2lyZWZyYW1lOnJnYmEoMCwgMCwgMCwgMC42MSk7XG4kaGVhZGVyLWJnOiAjZmZmO1xuJGhlYWRlci1jb2xvcjogcmdiYSgjMDAyOTYwLCAuODcpO1xuXG4kdGlsZS1jb2xvcjogI2ZmZjtcbiR0aWxlLWJvcmRlcjogI2ZmZjtcblxuJGhlbHAtYm9yZGVyOiByZ2JhKCMwMDAsIC4yKTtcblxuJGNvbG9yLXByaW1hcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5OiAjNDA0ODVhO1xuJGNvbG9yLXRlcm5hcnk6ICNjNzk5NjE7XG4kY29sb3ItcXVhdGVybmFyeTogIzdkZDZkNjtcbiRjb2xvci1xdWludGVybmFyeTogIzRjNWM2YztcbiRjb2xvci1zZXh0ZXJuYXJ5OiAjN2ZlNDNiO1xuXG4kdGltZWxpbmUtYmc6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNEY1RjcwIDAlLCAjMEYxMjE1IDEwMCUpO1xuJHRpbWVsaW5lLWV2ZW50OiAkZXJyb3I7XG4kdGltZWxpbmUtYm9va2luZzogJGNvbG9yLXF1YXRlcm5hcnk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNHB4O1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRtYWluLWZvbnQ6ICRmb250LXN0YWNrO1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuICAuY29udGFpbmVyID4gKiB7XG4gICAgd2lkdGg6IDEwMCU7IH1cblxuLmJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgb3ZlcmZsb3c6IGF1dG87IH1cbiAgLmJsb2NrLmhpZGUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgLmJsb2NrLmxpc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZmxleDogMTtcbiAgICBtaW4taGVpZ2h0OiA1MCU7IH1cbiAgLmJsb2NrLnNlYXJjaCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNzk5NjE7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwOyB9XG4gIC5ibG9jay5saXN0IC5jb250ZW50LCAuYmxvY2suc2VhcmNoIC5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxuXG4uY29udGVudCB7XG4gIG1heC13aWR0aDogNzY4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiAxMDAlOyB9XG5cbi5oZWFkZXIge1xuICBmb250LXNpemU6IDEuMmVtO1xuICB3aWR0aDogMTAwJTsgfVxuICAuaGVhZGVyIC5maWx0ZXJzIHtcbiAgICBtYXJnaW46IC41ZW0gMDsgfVxuICAuaGVhZGVyIC50ZXh0IHtcbiAgICBmb250LXNpemU6IC45ZW07IH1cblxuLmJhciB7XG4gIGZsZXg6IDE7XG4gIHdpZHRoOiAxcHg7XG4gIGhlaWdodDogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5kaXZpZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7IH1cbiAgLmRpdmlkZXIgLnRleHQge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi5pdGVtLWxpc3Qge1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDEwZW07XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMS4yNWVtO1xuICBtaW4td2lkdGg6IDEuMjVlbTtcbiAgbWFyZ2luOiAuMjVlbTsgfVxuICAuaWNvbiBpbWcge1xuICAgIGhlaWdodDogMWVtOyB9XG5cbi5hY3Rpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5hY3Rpb24gLmljb24ge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVGNDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGNvbG9yOiAjZmZmOyB9XG5cbi5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luOiAuMjVlbSAwO1xuICBwYWRkaW5nOiAuNWVtO1xuICBmb250LXNpemU6IDEuMWVtO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgLml0ZW0gLmRldGFpbHMge1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDhlbTsgfVxuICAuaXRlbSAuZW1haWwge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgIGZvbnQtc2l6ZTogLjllbTsgfVxuICAuaXRlbSAuaWNvbiB7XG4gICAgY29sb3I6ICM3ZGQ2ZDY7IH1cblxuLnVzZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW46IC4yNWVtIDA7IH1cbiAgLnVzZXIgLmRldGFpbHMge1xuICAgIGZsZXg6IDE7IH1cbiAgLnVzZXIgLm9wdGlvbiB7XG4gICAgY29sb3I6ICM0Mjg1RjQ7IH1cbiAgLnVzZXIgPiAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICBtYXJnaW4tbGVmdDogMDsgfVxuIiwiQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAmID4gKiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmJsb2NrIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICYuaGlkZSB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cbiAgICAmLmxpc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtaW4taGVpZ2h0OiA1MCU7XG4gICAgfVxuICAgICYuc2VhcmNoIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItdGVybmFyeTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgIH1cblxuICAgICYubGlzdCxcbiAgICAmLnNlYXJjaCB7XG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNvbnRlbnQge1xuICAgIG1heC13aWR0aDogNzY4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIC5maWx0ZXJzIHtcbiAgICAgICAgbWFyZ2luOiAuNWVtIDA7XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgfVxufVxuXG4uYmFyIHtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAuNTQpO1xufVxuXG4uZGl2aWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLnRleHQge1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC41NCk7XG4gICAgfVxufVxuXG4uaXRlbS1saXN0IHtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogMTBlbTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEuMjVlbTtcbiAgICBtaW4td2lkdGg6IDEuMjVlbTtcbiAgICBtYXJnaW46IC4yNWVtO1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgIH1cbn1cblxuLmFjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC5pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cbn1cblxuLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogLjI1ZW0gMDtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIGZvbnQtc2l6ZTogMS4xZW07XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwuMTIpO1xuXG4gICAgLmRldGFpbHMge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB3aWR0aDogOGVtO1xuICAgIH1cblxuICAgIC5lbWFpbCB7XG4gICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC41NCk7XG4gICAgICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcXVhdGVybmFyeTtcbiAgICB9XG59XG5cbi51c2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luOiAuMjVlbSAwO1xuXG4gICAgLmRldGFpbHMge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5vcHRpb24ge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgfVxuXG4gICAgJiA+IC5pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shell/booking/visitor-flow/visitor-list/visitor-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/shell/booking/visitor-flow/visitor-list/visitor-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: VisitorFlowVisitorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorFlowVisitorListComponent", function() { return VisitorFlowVisitorListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/utility.class */ "./src/app/shared/utility.class.ts");
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
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var VisitorFlowVisitorListComponent = /** @class */ (function (_super) {
    __extends(VisitorFlowVisitorListComponent, _super);
    function VisitorFlowVisitorListComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.attendeesChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.back = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {};
        return _this;
    }
    VisitorFlowVisitorListComponent.prototype.ngOnInit = function () {
    };
    VisitorFlowVisitorListComponent.prototype.search = function () {
        this.loading.emit('Searching...');
        var contacts = this.service.Contacts.list();
        var filtered_items = _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__["Utils"].filter(this.model.search, contacts, ['name', 'email']);
        this.model.results = filtered_items;
        this.loading.emit(false);
    };
    VisitorFlowVisitorListComponent.prototype.add = function (item) {
        if (!this.attendees) {
            this.attendees = [];
        }
        var exists = this.attendees.find(function (i) { return item.email === i.email; });
        if (!exists) {
            this.attendees.push(item);
        }
        this.model.search = '';
        this.attendeesChange.emit(this.attendees);
    };
    VisitorFlowVisitorListComponent.prototype.remove = function (item) {
        if (!this.attendees) {
            this.attendees = [];
        }
        var exists = this.attendees.find(function (i) { return item.email === i.email; });
        if (exists) {
            this.attendees.splice(this.attendees.indexOf(exists), 1);
        }
        this.attendeesChange.emit(this.attendees);
    };
    VisitorFlowVisitorListComponent.prototype.to = function (name, query) {
        this.service.navigate(['book', 'visitor', name], query);
    };
    VisitorFlowVisitorListComponent.prototype.cancel = function () { this.back.emit(); };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], VisitorFlowVisitorListComponent.prototype, "attendees", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VisitorFlowVisitorListComponent.prototype, "attendeesChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VisitorFlowVisitorListComponent.prototype, "loading", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], VisitorFlowVisitorListComponent.prototype, "back", void 0);
    VisitorFlowVisitorListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'visitor-flow-visitor-list',
            template: __webpack_require__(/*! ./visitor-list.component.html */ "./src/app/shell/booking/visitor-flow/visitor-list/visitor-list.component.html"),
            styles: [__webpack_require__(/*! ./visitor-list.component.scss */ "./src/app/shell/booking/visitor-flow/visitor-list/visitor-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], VisitorFlowVisitorListComponent);
    return VisitorFlowVisitorListComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=shell-booking-booking-module.js.map