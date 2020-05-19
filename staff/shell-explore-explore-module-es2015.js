(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-explore-explore-module"],{

/***/ "./src/app/shell/explore/explore.component.ts":
/*!****************************************************!*\
  !*** ./src/app/shell/explore/explore.component.ts ***!
  \****************************************************/
/*! exports provided: ExploreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreComponent", function() { return ExploreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var _shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/topbar-header/topbar-header.component */ "./src/app/shared/components/topbar-header/topbar-header.component.ts");
/* harmony import */ var _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-view/map-view.component */ "./src/app/shell/explore/map-view/map-view.component.ts");
/* harmony import */ var _shared_components_footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/footer-menu/footer-menu.component */ "./src/app/shared/components/footer-menu/footer-menu.component.ts");
/* harmony import */ var _shared_components_overlay_menu_overlay_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/overlay-menu/overlay-menu.component */ "./src/app/shared/components/overlay-menu/overlay-menu.component.ts");









class ExploreComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"] {
    constructor(_service) {
        super();
        this._service = _service;
    }
    ngOnInit() {
        this._service.title = 'Maps';
    }
}
ExploreComponent.ɵfac = function ExploreComponent_Factory(t) { return new (t || ExploreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"])); };
ExploreComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreComponent, selectors: [["app-explore"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 8, vars: 2, consts: [[1, "explore", "page"], [1, "header"], [3, "menu", "menuChange"], [1, "body"], [1, "footer"], [3, "show", "showChange"]], template: function ExploreComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a-topbar-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuChange", function ExploreComponent_Template_a_topbar_header_menuChange_2_listener($event) { return ctx.show_menu = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "explore-map-view");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "a-footer-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a-overlay-menu", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showChange", function ExploreComponent_Template_a_overlay_menu_showChange_7_listener($event) { return ctx.show_menu = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menu", ctx.show_menu);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show_menu);
    } }, directives: [_shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_3__["TopbarHeaderComponent"], _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_4__["MapViewComponent"], _shared_components_footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_5__["FooterMenuComponent"], _shared_components_overlay_menu_overlay_menu_component__WEBPACK_IMPORTED_MODULE_6__["OverlayMenuComponent"]], styles: [".page[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.page[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 50%;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoZWxsL2V4cGxvcmUvZXhwbG9yZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvZXhwbG9yZS9leHBsb3JlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQWlDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQzVDQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDT0o7QURMSTtFQUNJLFdBQUE7QUNPUjtBREhBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtBQ01KIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvZXhwbG9yZS9leHBsb3JlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjMTkzN2VhO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuJGhlYWRlci1iYWNrOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwNTFDMkMsICMwNTFDMkMgNDAlLCAjMEIyNDUzIDYwJSwgIzFGNDBFNiAxMDAlKTtcblxuJGNvbG9yLXRlcm5hcnk6ICMwNTFjMmM7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5wYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgPiAqIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi13aWR0aDogNTAlO1xuICAgIGZsZXg6IDE7XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4ucGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnBhZ2UgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDUwJTtcbiAgZmxleDogMTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-explore',
                templateUrl: './explore.component.html',
                styleUrls: ['./explore.component.scss']
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_1__["ApplicationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shell/explore/explore.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shell/explore/explore.module.ts ***!
  \*************************************************/
/*! exports provided: ExploreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreModule", function() { return ExploreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _placeos_composer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @placeos/composer */ "./node_modules/@placeos/composer/__ivy_ngcc__/fesm2015/placeos-composer.js");
/* harmony import */ var _acaprojects_ngx_interactive_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @acaprojects/ngx-interactive-map */ "./node_modules/@acaprojects/ngx-interactive-map/__ivy_ngcc__/fesm2015/acaprojects-ngx-interactive-map.js");
/* harmony import */ var _explore_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./explore.component */ "./src/app/shell/explore/explore.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map-view/map-view.component */ "./src/app/shell/explore/map-view/map-view.component.ts");
/* harmony import */ var _status_managers_space_status_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./status-managers/space-status.component */ "./src/app/shell/explore/status-managers/space-status.component.ts");
/* harmony import */ var _status_managers_desk_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./status-managers/desk-status.component */ "./src/app/shell/explore/status-managers/desk-status.component.ts");
/* harmony import */ var _zoom_controls_zoom_controls_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./zoom-controls/zoom-controls.component */ "./src/app/shell/explore/zoom-controls/zoom-controls.component.ts");
/* harmony import */ var _overlays_space_info_space_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./overlays/space-info/space-info.component */ "./src/app/shell/explore/overlays/space-info/space-info.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./search/search.component */ "./src/app/shell/explore/search/search.component.ts");
/* harmony import */ var _map_legend_map_legend_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./map-legend/map-legend.component */ "./src/app/shell/explore/map-legend/map-legend.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/shell/explore/timeline/timeline.component.ts");
/* harmony import */ var _overlays_booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./overlays/booking-modal/booking-modal.component */ "./src/app/shell/explore/overlays/booking-modal/booking-modal.component.ts");



















const ROUTES = [
    { path: '', component: _explore_component__WEBPACK_IMPORTED_MODULE_6__["ExploreComponent"] },
    { path: ':search_type', component: _explore_component__WEBPACK_IMPORTED_MODULE_6__["ExploreComponent"] }
];
class ExploreModule {
}
ExploreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExploreModule });
ExploreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExploreModule_Factory(t) { return new (t || ExploreModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedContentModule"],
            _acaprojects_ngx_interactive_map__WEBPACK_IMPORTED_MODULE_5__["AInteractiveMapModule"],
            _placeos_composer__WEBPACK_IMPORTED_MODULE_4__["ComposerModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExploreModule, { declarations: [_explore_component__WEBPACK_IMPORTED_MODULE_6__["ExploreComponent"],
        _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_8__["MapViewComponent"],
        _status_managers_space_status_component__WEBPACK_IMPORTED_MODULE_9__["ExploreSpaceStatusComponent"],
        _status_managers_desk_status_component__WEBPACK_IMPORTED_MODULE_10__["ExploreDeskStatusComponent"],
        _zoom_controls_zoom_controls_component__WEBPACK_IMPORTED_MODULE_11__["ZoomControlsComponent"],
        _overlays_space_info_space_info_component__WEBPACK_IMPORTED_MODULE_12__["ExploreSpaceInfoComponent"],
        _search_search_component__WEBPACK_IMPORTED_MODULE_13__["ExploreSearchComponent"],
        _map_legend_map_legend_component__WEBPACK_IMPORTED_MODULE_14__["ExploreMapLegendComponent"],
        _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_15__["TimelineComponent"],
        _overlays_booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_16__["ExploreBookingModalComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedContentModule"],
        _acaprojects_ngx_interactive_map__WEBPACK_IMPORTED_MODULE_5__["AInteractiveMapModule"],
        _placeos_composer__WEBPACK_IMPORTED_MODULE_4__["ComposerModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _explore_component__WEBPACK_IMPORTED_MODULE_6__["ExploreComponent"],
                    _map_view_map_view_component__WEBPACK_IMPORTED_MODULE_8__["MapViewComponent"],
                    _status_managers_space_status_component__WEBPACK_IMPORTED_MODULE_9__["ExploreSpaceStatusComponent"],
                    _status_managers_desk_status_component__WEBPACK_IMPORTED_MODULE_10__["ExploreDeskStatusComponent"],
                    _zoom_controls_zoom_controls_component__WEBPACK_IMPORTED_MODULE_11__["ZoomControlsComponent"],
                    _overlays_space_info_space_info_component__WEBPACK_IMPORTED_MODULE_12__["ExploreSpaceInfoComponent"],
                    _search_search_component__WEBPACK_IMPORTED_MODULE_13__["ExploreSearchComponent"],
                    _map_legend_map_legend_component__WEBPACK_IMPORTED_MODULE_14__["ExploreMapLegendComponent"],
                    _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_15__["TimelineComponent"],
                    _overlays_booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_16__["ExploreBookingModalComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES),
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedContentModule"],
                    _acaprojects_ngx_interactive_map__WEBPACK_IMPORTED_MODULE_5__["AInteractiveMapModule"],
                    _placeos_composer__WEBPACK_IMPORTED_MODULE_4__["ComposerModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shell/explore/map-legend/map-legend.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shell/explore/map-legend/map-legend.component.ts ***!
  \******************************************************************/
/*! exports provided: ExploreMapLegendComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreMapLegendComponent", function() { return ExploreMapLegendComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var src_app_shared_globals_angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/globals/angular-animations */ "./src/app/shared/globals/angular-animations.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");










var I18N_0;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Explore legend label
     */ 
    const MSG_EXTERNAL_535043807119140772$$SRC_APP_SHELL_EXPLORE_MAP_LEGEND_MAP_LEGEND_COMPONENT_TS__1 = goog.getMsg("{$interpolation} Legend", { "interpolation": "\uFFFD0\uFFFD" });
    I18N_0 = MSG_EXTERNAL_535043807119140772$$SRC_APP_SHELL_EXPLORE_MAP_LEGEND_MAP_LEGEND_COMPONENT_TS__1;
}
else {
    I18N_0 = $localize `:Explore legend label␟fa4c201b0b6ee3362fb02284b734be9e3ec104af␟535043807119140772:${"\uFFFD0\uFFFD"}:INTERPOLATION: Legend`;
}
function ExploreMapLegendComponent_div_0_ng_container_8_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const group_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](group_r2);
} }
function ExploreMapLegendComponent_div_0_ng_container_8_li_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", item_r6.icon);
} }
function ExploreMapLegendComponent_div_0_ng_container_8_li_2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 17);
} if (rf & 2) {
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", item_r6.color || ctx_r9.colours[item_r6.key]);
} }
function ExploreMapLegendComponent_div_0_ng_container_8_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExploreMapLegendComponent_div_0_ng_container_8_li_2_ng_container_2_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExploreMapLegendComponent_div_0_ng_container_8_li_2_ng_template_3_Template, 1, 2, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r6.icon)("ngIfElse", _r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.name);
} }
function ExploreMapLegendComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExploreMapLegendComponent_div_0_ng_container_8_li_1_Template, 5, 1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExploreMapLegendComponent_div_0_ng_container_8_li_2_Template, 7, 3, "li", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const group_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.show_group_names);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.legend_items[group_r2]);
} }
const _c2 = function (a1) { return { class: "material-icons", content: a1 }; };
function ExploreMapLegendComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function ExploreMapLegendComponent_div_0_Template_div_tapped_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.show_legend = !ctx_r12.show_legend; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](4, I18N_0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExploreMapLegendComponent_div_0_ng_container_8_Template, 3, 2, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx_r0.show_legend ? "Hide" : "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c2, ctx_r0.show_legend ? "arrow_drop_up" : "arrow_drop_down"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("padding-bottom", ctx_r0.show_legend ? "1em" : "")("padding-bottom", ctx_r0.show_legend ? ".5em" : "")("overflow", ctx_r0.show_legend ? "hidden auto" : "hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@show", ctx_r0.show_legend ? "show" : "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.group_names);
} }
class ExploreMapLegendComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"] {
    constructor(_service) {
        super();
        this._service = _service;
        /** Mapping of legend item groups */
        this.legend_items = {};
        /** Mapping of map colours */
        this.colours = {};
        /** Whether the legend items should be shown */
        this.show_legend = false;
    }
    /** List of group names for legend items */
    get group_names() {
        return Object.keys(this.legend_items);
    }
    ngOnInit() {
        this._service.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(_ => _)).subscribe(() => {
            const explore_settings = this._service.setting('app.explore') || {};
            this.legend_items = explore_settings.legend || {};
            this.colours = explore_settings.colors || {};
            this.show_group_names = !!explore_settings.show_legend_group_names;
        });
    }
}
ExploreMapLegendComponent.ɵfac = function ExploreMapLegendComponent_Factory(t) { return new (t || ExploreMapLegendComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"])); };
ExploreMapLegendComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreMapLegendComponent, selectors: [["a-map-legend"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [["class", "map-legend", 4, "ngIf"], [1, "map-legend"], [1, "tag"], [1, "title", 3, "tapped"], [1, "text"], [3, "icon"], [1, "contents"], [4, "ngFor", "ngForOf"], ["class", "group", 4, "ngIf"], ["class", "item", "name", "item.key", 4, "ngFor", "ngForOf"], [1, "group"], [1, "bar"], [1, "name"], ["name", "item.key", 1, "item"], [1, "ref"], [4, "ngIf", "ngIfElse"], ["colour_display", ""], [1, "colour"]], template: function ExploreMapLegendComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExploreMapLegendComponent_div_0_Template, 9, 12, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.group_names && ctx.group_names.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_6__["ɵb"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], styles: [".map-legend[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: 4px 4px 0 0;\n  background-color: #fff;\n  margin-top: 0.4em;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n.tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  transform: translateY(-100%);\n  overflow: hidden;\n}\n.title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-radius: 4px 4px 0 0;\n  background-color: #fff;\n  min-width: 50%;\n  flex: 1;\n  margin: 0.5em 0.5em -1px;\n  padding: 0.75em 0.8em 0.75em 1.5em;\n  font-size: 0.8em;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n.contents[_ngcontent-%COMP%] {\n  overflow: hidden;\n  padding: 0 0.5em;\n  max-height: 50vh;\n  min-width: 16em;\n}\n.group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.25em 0.5em;\n  margin: 0.5em 0;\n  color: rgba(0, 0, 0, 0.65);\n}\n.group[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  margin: 0 0.5em;\n}\n.bar[_ngcontent-%COMP%] {\n  height: 1px;\n  min-width: 1px;\n  flex: 1;\n  background-color: rgba(0, 0, 0, 0.65);\n}\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\nli[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.65em;\n  border-radius: 4px;\n  padding: 0.5em 0.5em 0.5em 0;\n}\nli[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\nli.group[_ngcontent-%COMP%] {\n  background: none;\n}\n.ref[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 0.5em;\n  height: 20px;\n  width: 20px;\n  border-radius: 100%;\n  border: 1px solid rgba(0, 0, 0, 0.35);\n  overflow: hidden;\n  background-color: #fff;\n}\n.colour[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\napp-icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoZWxsL2V4cGxvcmUvbWFwLWxlZ2VuZC9tYXAtbGVnZW5kLmNvbXBvbmVudC5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvbWl4aW5zLnNjc3MiLCJzcmMvYXBwL3NoZWxsL2V4cGxvcmUvbWFwLWxlZ2VuZC9tYXAtbGVnZW5kLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQWlDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQzVDQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VDQ0EsaUhBQUE7QUNPSjtBRkpBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7QUVPSjtBRkpBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGdCQUFBO0VDcEJBLGlIQUFBO0FDNEJKO0FGSkE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FFT0o7QUZKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FFT0o7QUZMSTtFQUNJLGVBQUE7QUVPUjtBRkhBO0VBQ0ksV0FBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0EscUNBQUE7QUVNSjtBRkhBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBRU1KO0FGSEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNEJBQUE7QUVNSjtBRkpJO0VBQ0kscUNBQUE7QUVNUjtBRkhJO0VBQ0ksZ0JBQUE7QUVLUjtBRkRBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FFSUo7QUZEQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBRUlKO0FGREE7RUFDSSxnQkFBQTtBRUlKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvZXhwbG9yZS9tYXAtbGVnZW5kL21hcC1sZWdlbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICMxOTM3ZWE7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG4kaGVhZGVyLWJhY2s6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA1MUMyQywgIzA1MUMyQyA0MCUsICMwQjI0NTMgNjAlLCAjMUY0MEU2IDEwMCUpO1xuXG4kY29sb3ItdGVybmFyeTogIzA1MWMyYztcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG4ubWFwLWxlZ2VuZCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgbWFyZ2luLXRvcDogLjRlbTtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93O1xufVxuXG4udGFnIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGl0bGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG1pbi13aWR0aDogNTAlO1xuICAgIGZsZXg6IDE7XG4gICAgbWFyZ2luOiAuNWVtIC41ZW0gLTFweDtcbiAgICBwYWRkaW5nOiAwLjc1ZW0gLjhlbSAuNzVlbSAxLjVlbTtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdztcbn1cblxuLmNvbnRlbnRzIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDAgLjVlbTtcbiAgICBtYXgtaGVpZ2h0OiA1MHZoO1xuICAgIG1pbi13aWR0aDogMTZlbTtcbn1cblxuLmdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xuICAgIG1hcmdpbjogLjVlbSAwO1xuICAgIGNvbG9yOiByZ2JhKCMwMDAsIDAuNjUpO1xuXG4gICAgLm5hbWUge1xuICAgICAgICBtYXJnaW46IDAgMC41ZW07XG4gICAgfVxufVxuXG4uYmFyIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtaW4td2lkdGg6IDFweDtcbiAgICBmbGV4OiAxO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMCwgMC42NSk7XG59XG5cbnVsIHtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuXG5saSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMC42NWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBwYWRkaW5nOiAwLjVlbSAwLjVlbSAwLjVlbSAwO1xuXG4gICAgJjpudGgtY2hpbGQoMm4pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAwLjA1KTtcbiAgICB9XG5cbiAgICAmLmdyb3VwIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG59XG5cbi5yZWYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luOiAwIDAuNWVtO1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoIzAwMCwgMC4zNSk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uY29sb3VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xufVxuXG5hcHAtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbn1cbiIsIlxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkY29sb3I6ICMwMDAsICRkZXB0aDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAxcHggKiAoJGRlcHRoIC0gMSkgcmdiYSgjMDAwLCAuMiksXG4gICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLFxuICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5tYXAtbGVnZW5kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMC40ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4udGFnIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi50aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtaW4td2lkdGg6IDUwJTtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAwLjVlbSAwLjVlbSAtMXB4O1xuICBwYWRkaW5nOiAwLjc1ZW0gMC44ZW0gMC43NWVtIDEuNWVtO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmNvbnRlbnRzIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZzogMCAwLjVlbTtcbiAgbWF4LWhlaWdodDogNTB2aDtcbiAgbWluLXdpZHRoOiAxNmVtO1xufVxuXG4uZ3JvdXAge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XG4gIG1hcmdpbjogMC41ZW0gMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG59XG4uZ3JvdXAgLm5hbWUge1xuICBtYXJnaW46IDAgMC41ZW07XG59XG5cbi5iYXIge1xuICBoZWlnaHQ6IDFweDtcbiAgbWluLXdpZHRoOiAxcHg7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xufVxuXG5saSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC42NWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHBhZGRpbmc6IDAuNWVtIDAuNWVtIDAuNWVtIDA7XG59XG5saTpudGgtY2hpbGQoMm4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbmxpLmdyb3VwIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLnJlZiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCAwLjVlbTtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjM1KTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmNvbG91ciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xufVxuXG5hcHAtaWNvbiB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59Il19 */"], data: { animation: [src_app_shared_globals_angular_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_SHOW_CONTRACT_EXPAND"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreMapLegendComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-map-legend',
                templateUrl: './map-legend.component.html',
                styleUrls: ['./map-legend.component.scss'],
                animations: [src_app_shared_globals_angular_animations__WEBPACK_IMPORTED_MODULE_4__["ANIMATION_SHOW_CONTRACT_EXPAND"]]
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shell/explore/map-view/map-view.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shell/explore/map-view/map-view.component.ts ***!
  \**************************************************************/
/*! exports provided: MapViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapViewComponent", function() { return MapViewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _acaprojects_ngx_interactive_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-interactive-map */ "./node_modules/@acaprojects/ngx-interactive-map/__ivy_ngcc__/fesm2015/acaprojects-ngx-interactive-map.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_overlays_booking_rules_modal_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/overlays/booking-rules-modal/booking-rules-modal.component */ "./src/app/overlays/booking-rules-modal/booking-rules-modal.component.ts");
/* harmony import */ var src_app_services_data_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/data/organisation/organisation.service */ "./src/app/services/data/organisation/organisation.service.ts");
/* harmony import */ var src_app_services_data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/data/spaces/spaces.service */ "./src/app/services/data/spaces/spaces.service.ts");
/* harmony import */ var src_app_services_data_users_users_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/data/users/users.service */ "./src/app/services/data/users/users.service.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../search/search.component */ "./src/app/shell/explore/search/search.component.ts");
/* harmony import */ var _status_managers_space_status_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../status-managers/space-status.component */ "./src/app/shell/explore/status-managers/space-status.component.ts");
/* harmony import */ var _status_managers_desk_status_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../status-managers/desk-status.component */ "./src/app/shell/explore/status-managers/desk-status.component.ts");
/* harmony import */ var _shared_components_map_controls_map_controls_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/map-controls/map-controls.component */ "./src/app/shared/components/map-controls/map-controls.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _zoom_controls_zoom_controls_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../zoom-controls/zoom-controls.component */ "./src/app/shell/explore/zoom-controls/zoom-controls.component.ts");
/* harmony import */ var _map_legend_map_legend_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../map-legend/map-legend.component */ "./src/app/shell/explore/map-legend/map-legend.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../timeline/timeline.component */ "./src/app/shell/explore/timeline/timeline.component.ts");

































function MapViewComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tapped", function MapViewComponent_button_8_Template_button_tapped_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.openBookingRulesModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function MapViewComponent_div_13_mat_progress_bar_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-progress-bar", 19);
} }
function MapViewComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, MapViewComponent_div_13_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r1.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.loading);
} }
function MapViewComponent_a_timeline_14_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a-timeline", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("dateChange", function MapViewComponent_a_timeline_14_Template_a_timeline_dateChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.date = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("date", ctx_r2.date);
} }
class MapViewComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_6__["BaseDirective"] {
    constructor(_service, _route, _dialog, _org, _users, _spaces) {
        super();
        this._service = _service;
        this._route = _route;
        this._dialog = _dialog;
        this._org = _org;
        this._users = _users;
        this._spaces = _spaces;
        /** Center offset of the map */
        this.center = { x: 0.5, y: 0.5 };
        /** Mapping of elements to CSS styles */
        this.style_map = {};
        /** List of listeners for the map */
        this.listeners = [];
        /** List of features to render on the map */
        this.features = [];
        /** Mapping of status lists to types */
        this.status_map = {};
        /** Mapping of listener lists to types */
        this.listener_map = {};
        /** Mapping of features lists to types */
        this.feature_map = {};
    }
    /** URL of the active map */
    get map_url() {
        const level = this._org.levelWithID(this.active_level) || { map_url: '' };
        return level.map_url || '';
    }
    /** Whether current level has booking rules associated with it */
    get has_booking_rules() {
        const level = this._org.levelWithID(this.active_level) || {
            building_id: '',
        };
        return !!(this._org.buildings.find((bld) => bld.id === level.building_id) || {})
            .booking_details;
    }
    ngOnInit() {
        this._service.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])((_) => _)).subscribe(() => {
            /* istanbul ignore else */
            if (!this.active_level) {
                const bld = this._org.building;
                if (bld && bld.levels.length) {
                    this.active_level = bld.levels[0].id;
                }
            }
            this.settings = this._service.setting('app.explore') || {};
            this.subscription('route.query', this._route.queryParamMap.subscribe((params) => {
                /* istanbul ignore else */
                if (params.has('space')) {
                    this.loadSpaceLocation(params.get('space'));
                }
                /* istanbul ignore else */
                if (params.has('user')) {
                    this.loadUserLocation(params.get('user')).then((user) => {
                        this.loading = false;
                        this.message = this.focus
                            ? ''
                            : `Unable to locate ${user ? user.name : params.get('user')}`;
                    }, (err) => {
                        this.loading = false;
                        this.message = `Unable to locate user`;
                        /* istanbul ignore else */
                        if (err && err.status !== 404) {
                            this._service.notifyError(`Error loading user location. ${err.message}`);
                        }
                    });
                }
            }));
        });
    }
    openBookingRulesModal() {
        const level = this._org.levelWithID(this.active_level) || {
            building_id: '',
        };
        const building = this._org.buildings.find((bld) => bld.id === level.building_id) || {};
        this._dialog.open(src_app_overlays_booking_rules_modal_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_8__["BookingRulesModalComponent"], {
            data: {
                building,
            },
        });
    }
    /**
     * Process changes to statuses
     */
    processStatuses() {
        const styles = {};
        (this.status_map.spaces || []).forEach((space) => (styles[`#${space.id}`] = space.styles));
        (this.status_map.desks || []).forEach((desk) => (styles[`#${desk.id}`] = desk.styles));
        (this.status_map.zones || []).forEach((zone) => (styles[`#${zone.id}`] = zone.styles));
        this.style_map = styles;
    }
    /**
     * Process changes to statuses
     */
    processListeners() {
        let listeners = [];
        listeners = listeners.concat(this.listener_map.spaces || []);
        listeners = listeners.concat(this.listener_map.desks || []);
        listeners = listeners.concat(this.listener_map.zones || []);
        this.listeners = listeners;
    }
    /**
     * Process changes to statuses
     */
    processFeatures() {
        let features = [];
        /* istanbul ignore else */
        if (this.focus_feature) {
            features = features.concat([this.focus_feature]);
        }
        features = features.concat(this.feature_map.spaces || []);
        features = features.concat(this.feature_map.desks || []);
        features = features.concat(this.feature_map.zones || []);
        this.features = features;
    }
    /**
     * Load and store location details for the space
     * @param space_id Engine system ID of the space to locate
     */
    loadSpaceLocation(space_id) {
        const space = this._spaces.find(space_id);
        /* istanbul ignore else */
        if (space) {
            this.message = `Loading location of ${space.name}`;
            this.loading = true;
            this.active_level = space.level.id;
            this.focus = space.map_id;
            this.focus_feature = {
                id: space.map_id,
                coordinates: null,
                content: _acaprojects_ngx_interactive_map__WEBPACK_IMPORTED_MODULE_3__["MapPinComponent"],
                data: {
                    text: space.name,
                },
            };
            this.zoom = 1;
            this.loading = false;
            this.message = '';
            this.processFeatures();
        }
    }
    /**
     * Load and store the location for the user
     * @param user_email Email address of the selected user
     */
    loadUserLocation(user_email) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.focus = null;
            this.focus_feature = null;
            this.loading = true;
            this.message = `Loading user details...`;
            const user = yield this._users.show(user_email);
            /* istanbul ignore else */
            if (!user)
                return user;
            this.message = `Loading location for ${user.name}...`;
            const location = yield user.locate();
            /* istanbul ignore else */
            if (!location)
                return user;
            this.active_level = location.level.id;
            if (location.fixed) {
                this.focus = location.id;
                this.focus_feature = {
                    id: location.id,
                    coordinates: null,
                    content: _acaprojects_ngx_interactive_map__WEBPACK_IMPORTED_MODULE_3__["MapPinComponent"],
                    data: {
                        text: `${user.name} is here`,
                    },
                };
                this.zoom = 1;
            }
            else {
                this.focus = {
                    x: location.x,
                    y: location.y,
                };
                this.focus_feature = {
                    coordinates: {
                        x: location.x,
                        y: location.y,
                    },
                    content: _acaprojects_ngx_interactive_map__WEBPACK_IMPORTED_MODULE_3__["MapRadiusComponent"],
                    data: {
                        text: `${user.name} is here`,
                        diameter: location.confidence || 5,
                    },
                };
            }
            this.zoom = 1;
            this.loading = false;
            this.message = '';
            this.processFeatures();
            return user;
        });
    }
}
MapViewComponent.ɵfac = function MapViewComponent_Factory(t) { return new (t || MapViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_9__["OrganisationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_users_users_service__WEBPACK_IMPORTED_MODULE_11__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_10__["SpacesService"])); };
MapViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MapViewComponent, selectors: [["explore-map-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 15, vars: 16, consts: [[1, "map-view"], [1, "header"], [1, "body"], ["hidden", "", 1, "status-list"], ["space-status", "", 3, "zone", "date", "status", "listeners", "features"], ["desk-status", "", 3, "zone", "status"], ["overlay", "", 3, "level", "levelChange"], ["mat-icon-button", "", "class", "rules", "name", "booking-rules", 3, "tapped", 4, "ngIf"], [3, "zoom", "center", "src", "css", "listeners", "features", "focus", "zoomChange", "centerChange"], ["diameter", "32"], ["overlay", "", 3, "zoom", "position", "zoomChange", "positionChange"], ["overlay", ""], ["class", "message", 4, "ngIf"], [3, "date", "dateChange", 4, "ngIf"], ["mat-icon-button", "", "name", "booking-rules", 1, "rules", 3, "tapped"], [1, "message"], [1, "text"], [1, "loader"], ["mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate"], [3, "date", "dateChange"]], template: function MapViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "explore-search");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("status", function MapViewComponent_Template_i_status_5_listener($event) { ctx.status_map.spaces = $event; return ctx.processStatuses(); })("listeners", function MapViewComponent_Template_i_listeners_5_listener($event) { ctx.listener_map.spaces = $event; return ctx.processListeners(); })("features", function MapViewComponent_Template_i_features_5_listener($event) { ctx.feature_map.spaces = $event; return ctx.processFeatures(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("status", function MapViewComponent_Template_i_status_6_listener($event) { ctx.status_map.desks = $event; return ctx.processStatuses(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a-map-controls", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("levelChange", function MapViewComponent_Template_a_map_controls_levelChange_7_listener($event) { return ctx.active_level = $event; })("levelChange", function MapViewComponent_Template_a_map_controls_levelChange_7_listener() { ctx.zoom = 1; return ctx.center = { x: 0.5, y: 0.5 }; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, MapViewComponent_button_8_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a-map", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("zoomChange", function MapViewComponent_Template_a_map_zoomChange_9_listener($event) { return ctx.zoom = $event; })("centerChange", function MapViewComponent_Template_a_map_centerChange_9_listener($event) { return ctx.center = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "mat-spinner", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "a-zoom-controls", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("zoomChange", function MapViewComponent_Template_a_zoom_controls_zoomChange_11_listener($event) { return ctx.zoom = $event; })("positionChange", function MapViewComponent_Template_a_zoom_controls_positionChange_11_listener($event) { return ctx.center = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "a-map-legend", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, MapViewComponent_div_13_Template, 5, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, MapViewComponent_a_timeline_14_Template, 1, 1, "a-timeline", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("zone", ctx.active_level)("date", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("zone", ctx.active_level);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("level", ctx.active_level);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.has_booking_rules);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("zoom", ctx.zoom)("center", ctx.center)("src", ctx.map_url)("css", ctx.style_map)("listeners", ctx.listeners)("features", ctx.features)("focus", ctx.focus);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("zoom", ctx.zoom)("position", ctx.center);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.settings.show_timeline);
    } }, directives: [_search_search_component__WEBPACK_IMPORTED_MODULE_12__["ExploreSearchComponent"], _status_managers_space_status_component__WEBPACK_IMPORTED_MODULE_13__["ExploreSpaceStatusComponent"], _status_managers_desk_status_component__WEBPACK_IMPORTED_MODULE_14__["ExploreDeskStatusComponent"], _shared_components_map_controls_map_controls_component__WEBPACK_IMPORTED_MODULE_15__["MapControlsComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_16__["NgIf"], _acaprojects_ngx_interactive_map__WEBPACK_IMPORTED_MODULE_3__["MapComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_17__["MatSpinner"], _zoom_controls_zoom_controls_component__WEBPACK_IMPORTED_MODULE_18__["ZoomControlsComponent"], _map_legend_map_legend_component__WEBPACK_IMPORTED_MODULE_19__["ExploreMapLegendComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_21__["ɵb"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBar"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_23__["TimelineComponent"]], styles: [".map-view[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n}\n.header[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #f8f8f8;\n}\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 50%;\n  flex: 1;\n  width: 100%;\n  background-color: #f8f8f8;\n  z-index: 1;\n  overflow: hidden;\n}\na-map[_ngcontent-%COMP%] {\n  z-index: 1;\n}\n[overlay][_ngcontent-%COMP%] {\n  z-index: 10;\n}\na-map-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5em;\n  left: 0.5em;\n}\na-zoom-controls[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.5em;\n  right: 0.5em;\n}\na-map-legend[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0.5em;\n}\na-popout-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0.5em;\n  left: 0.5em;\n  z-index: 999;\n}\n.message[_ngcontent-%COMP%] {\n  overflow: hidden;\n  position: absolute;\n  bottom: 0.5rem;\n  left: 50%;\n  transform: translateX(-50%);\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  max-width: 20rem;\n  z-index: 999;\n  font-size: 0.9em;\n}\n.message[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  height: 4px;\n  width: 100%;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .message[_ngcontent-%COMP%] {\n    left: 0.5rem;\n    transform: none;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .message[_ngcontent-%COMP%] {\n    left: 0.5rem;\n    transform: none;\n  }\n}\n.message[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\nbutton.rules[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 7.5em;\n  left: 0.5em;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  color: #fff;\n  background-color: #ffb300;\n  z-index: 999;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  button.rules[_ngcontent-%COMP%] {\n    top: 4em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  button.rules[_ngcontent-%COMP%] {\n    top: 4em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoZWxsL2V4cGxvcmUvbWFwLXZpZXcvbWFwLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL2V4cGxvcmUvbWFwLXZpZXcvbWFwLXZpZXcuY29tcG9uZW50LnNjc3MiLCIvYnVpbGRzL2FjYS1lbmdpbmUvbWNraW5zZXkvbWNraW5zZXktc3RhZmYtYXBwL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFpQ0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMzQ0E7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDTUo7QURIQTtFQUNJLFdBQUE7RUFDQSx5QkFBQTtBQ01KO0FESEE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FDTUo7QURIQTtFQUNJLFVBQUE7QUNNSjtBREhBO0VBQ0ksV0FBQTtBQ01KO0FESEE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDTUo7QURIQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUNNSjtBREhBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ01KO0FESEE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ01KO0FESEE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUUvREEsaUhBQUE7RUZpRUEsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNNSjtBREpJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUNNUjtBRnhCUTtFQ0dSO0lBbUJRLFlBQUE7SUFDQSxlQUFBO0VDTU47QUFDRjtBRjNCUTtFQ0FSO0lBbUJRLFlBQUE7SUFDQSxlQUFBO0VDWU47QUFDRjtBRFZJO0VBQ0ksZUFBQTtBQ1lSO0FEUkE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VFdkZBLGlIQUFBO0VGeUZBLFdEM0ZTO0VDNEZULHlCRHRGTTtFQ3VGTixZQUFBO0FDV0o7QUZqRFE7RUMrQlI7SUFVUSxRQUFBO0VDWU47QUFDRjtBRm5EUTtFQzRCUjtJQVVRLFFBQUE7RUNpQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2V4cGxvcmUvbWFwLXZpZXcvbWFwLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICMxOTM3ZWE7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG4kaGVhZGVyLWJhY2s6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA1MUMyQywgIzA1MUMyQyA0MCUsICMwQjI0NTMgNjAlLCAjMUY0MEU2IDEwMCUpO1xuXG4kY29sb3ItdGVybmFyeTogIzA1MWMyYztcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ21peGlucyc7XG5cbi5tYXAtdmlldyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uaGVhZGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xufVxuXG4uYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDUwJTtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gICAgei1pbmRleDogMTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5hLW1hcCB7XG4gICAgei1pbmRleDogMTtcbn1cblxuW292ZXJsYXldIHtcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuYS1tYXAtY29udHJvbHMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC41ZW07XG4gICAgbGVmdDogLjVlbTtcbn1cblxuYS16b29tLWNvbnRyb2xzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAuNWVtO1xuICAgIHJpZ2h0OiAuNWVtO1xufVxuXG5hLW1hcC1sZWdlbmQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogLjVlbTtcbn1cblxuYS1wb3BvdXQtbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLjVlbTtcbiAgICBsZWZ0OiAuNWVtO1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuLm1lc3NhZ2Uge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLjVyZW07XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93O1xuICAgIG1heC13aWR0aDogMjByZW07XG4gICAgei1pbmRleDogOTk5O1xuICAgIGZvbnQtc2l6ZTogLjllbTtcblxuICAgIC5sb2FkaW5nIHtcbiAgICAgICAgaGVpZ2h0OiA0cHg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGxlZnQ6IC41cmVtO1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgICBwYWRkaW5nOiAuNXJlbTtcbiAgICB9XG59XG5cbmJ1dHRvbi5ydWxlcyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNy41ZW07XG4gICAgbGVmdDogLjVlbTtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93O1xuICAgIGNvbG9yOiAkZm9udC1saWdodDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGVuZGluZztcbiAgICB6LWluZGV4OiA5OTk7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICB0b3A6IDRlbTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4ubWFwLXZpZXcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xufVxuXG4uYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogNTAlO1xuICBmbGV4OiAxO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgei1pbmRleDogMTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuYS1tYXAge1xuICB6LWluZGV4OiAxO1xufVxuXG5bb3ZlcmxheV0ge1xuICB6LWluZGV4OiAxMDtcbn1cblxuYS1tYXAtY29udHJvbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC41ZW07XG4gIGxlZnQ6IDAuNWVtO1xufVxuXG5hLXpvb20tY29udHJvbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMC41ZW07XG4gIHJpZ2h0OiAwLjVlbTtcbn1cblxuYS1tYXAtbGVnZW5kIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDAuNWVtO1xufVxuXG5hLXBvcG91dC1tZW51IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDAuNWVtO1xuICBsZWZ0OiAwLjVlbTtcbiAgei1pbmRleDogOTk5O1xufVxuXG4ubWVzc2FnZSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwLjVyZW07XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtYXgtd2lkdGg6IDIwcmVtO1xuICB6LWluZGV4OiA5OTk7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG4ubWVzc2FnZSAubG9hZGluZyB7XG4gIGhlaWdodDogNHB4O1xuICB3aWR0aDogMTAwJTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5tZXNzYWdlIHtcbiAgICBsZWZ0OiAwLjVyZW07XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLm1lc3NhZ2Uge1xuICAgIGxlZnQ6IDAuNXJlbTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cbi5tZXNzYWdlIC50ZXh0IHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG5idXR0b24ucnVsZXMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNy41ZW07XG4gIGxlZnQ6IDAuNWVtO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIzMDA7XG4gIHotaW5kZXg6IDk5OTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIGJ1dHRvbi5ydWxlcyB7XG4gICAgdG9wOiA0ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICBidXR0b24ucnVsZXMge1xuICAgIHRvcDogNGVtO1xuICB9XG59IiwiXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRjb2xvcjogIzAwMCwgJGRlcHRoOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDFweCAqICgkZGVwdGggLSAxKSByZ2JhKCMwMDAsIC4yKSxcbiAgICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksXG4gICAgICAgICAgICAgICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MapViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'explore-map-view',
                templateUrl: './map-view.component.html',
                styleUrls: ['./map-view.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }, { type: src_app_services_data_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_9__["OrganisationService"] }, { type: src_app_services_data_users_users_service__WEBPACK_IMPORTED_MODULE_11__["UsersService"] }, { type: src_app_services_data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_10__["SpacesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shell/explore/overlays/booking-modal/booking-modal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/shell/explore/overlays/booking-modal/booking-modal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ExploreBookingModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreBookingModalComponent", function() { return ExploreBookingModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data/bookings/booking.class */ "./src/app/services/data/bookings/booking.class.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var src_app_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/bookings/booking.utilities */ "./src/app/services/data/bookings/booking.utilities.ts");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var src_app_services_data_users_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data/users/users.service */ "./src/app/services/data/users/users.service.ts");
/* harmony import */ var src_app_services_data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/data/spaces/spaces.service */ "./src/app/services/data/spaces/spaces.service.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _shared_components_forms_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/forms/booking-form/booking-form.component */ "./src/app/shared/components/forms/booking-form/booking-form.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");






















const _c0 = function () { return { class: "material-icons", content: "add" }; };
function ExploreBookingModalComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Book ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.space == null ? null : ctx_r3.space.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.is_now ? "from now" : "at " + ctx_r3.time, " ");
} }
function ExploreBookingModalComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Book ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.space == null ? null : ctx_r4.space.name);
} }
function ExploreBookingModalComponent_ng_container_0_main_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-booking-form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r9.form);
} }
var I18N_1;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Explore booking request details
     */ 
    const MSG_EXTERNAL_2538638724521153988$$SRC_APP_SHELL_EXPLORE_OVERLAYS_BOOKING_MODAL_BOOKING_MODAL_COMPONENT_TS_____2 = goog.getMsg(" This space requires approval to reserve ");
    I18N_1 = MSG_EXTERNAL_2538638724521153988$$SRC_APP_SHELL_EXPLORE_OVERLAYS_BOOKING_MODAL_BOOKING_MODAL_COMPONENT_TS_____2;
}
else {
    I18N_1 = $localize `:Explore booking request details␟8899d546d01d34baeb03ca6928c06f791bf439b5␟2538638724521153988: This space requires approval to reserve `;
}
function ExploreBookingModalComponent_ng_container_0_main_5_ng_container_3_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18n"](1, I18N_1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ExploreBookingModalComponent_ng_container_0_main_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ExploreBookingModalComponent_ng_container_0_main_5_ng_container_3_p_4_Template, 2, 0, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r10.available_until);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.is_requesting);
} }
function ExploreBookingModalComponent_ng_container_0_main_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExploreBookingModalComponent_ng_container_0_main_5_ng_container_2_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExploreBookingModalComponent_ng_container_0_main_5_ng_container_3_Template, 5, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r5.state);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "form");
} }
function ExploreBookingModalComponent_ng_container_0_mat_dialog_actions_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cancel");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function ExploreBookingModalComponent_ng_container_0_mat_dialog_actions_6_Template_button_tapped_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.state === "form" ? ctx_r12.book() : ctx_r12.next(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.state === "form" ? ctx_r6.is_requesting ? "Request" : "Book" : "Yes", " ");
} }
function ExploreBookingModalComponent_ng_container_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r8.loading || "Processing request...");
} }
function ExploreBookingModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExploreBookingModalComponent_ng_container_0_ng_container_2_Template, 7, 4, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExploreBookingModalComponent_ng_container_0_ng_container_3_Template, 5, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ExploreBookingModalComponent_ng_container_0_main_5_Template, 4, 2, "main", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ExploreBookingModalComponent_ng_container_0_mat_dialog_actions_6_Template, 6, 1, "mat-dialog-actions", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExploreBookingModalComponent_ng_container_0_ng_template_7_Template, 6, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("request", ctx_r0.is_requesting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.state !== "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.state === "form");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
} }
var I18N_3;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Explore booking request sent
     */ 
    const MSG_EXTERNAL_5886681948776197166$$SRC_APP_SHELL_EXPLORE_OVERLAYS_BOOKING_MODAL_BOOKING_MODAL_COMPONENT_TS___4 = goog.getMsg(" Request for {$startTagSpan}{$interpolation}{$closeTagSpan} sent ", { "startTagSpan": "\uFFFD#2\uFFFD", "interpolation": "\uFFFD0\uFFFD", "closeTagSpan": "\uFFFD/#2\uFFFD" });
    I18N_3 = MSG_EXTERNAL_5886681948776197166$$SRC_APP_SHELL_EXPLORE_OVERLAYS_BOOKING_MODAL_BOOKING_MODAL_COMPONENT_TS___4;
}
else {
    I18N_3 = $localize `:Explore booking request sent␟f08971a093a49ced0ebffb96263a7aa014b21e84␟5886681948776197166: Request for ${"\uFFFD#2\uFFFD"}:START_TAG_SPAN:${"\uFFFD0\uFFFD"}:INTERPOLATION:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_SPAN: sent `;
}
function ExploreBookingModalComponent_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx_r14.space == null ? null : ctx_r14.space.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
} }
var I18N_5;
if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode) {
    /**
     * @desc Explore booking made
     */ 
    const MSG_EXTERNAL_5013504667820723753$$SRC_APP_SHELL_EXPLORE_OVERLAYS_BOOKING_MODAL_BOOKING_MODAL_COMPONENT_TS___6 = goog.getMsg(" Booked {$startTagSpan}{$interpolation}{$closeTagSpan} {$interpolation_1} ", { "startTagSpan": "\uFFFD#2\uFFFD", "interpolation": "\uFFFD0\uFFFD", "closeTagSpan": "\uFFFD/#2\uFFFD", "interpolation_1": "\uFFFD1\uFFFD" });
    I18N_5 = MSG_EXTERNAL_5013504667820723753$$SRC_APP_SHELL_EXPLORE_OVERLAYS_BOOKING_MODAL_BOOKING_MODAL_COMPONENT_TS___6;
}
else {
    I18N_5 = $localize `:Explore booking made␟8828182039290aea45ab70d282b087e49cf9323e␟5013504667820723753: Booked ${"\uFFFD#2\uFFFD"}:START_TAG_SPAN:${"\uFFFD0\uFFFD"}:INTERPOLATION:${"\uFFFD/#2\uFFFD"}:CLOSE_TAG_SPAN: ${"\uFFFD1\uFFFD"}:INTERPOLATION_1: `;
}
function ExploreBookingModalComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nStart"](1, I18N_5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nExp"](ctx_r15.space == null ? null : ctx_r15.space.name)(ctx_r15.is_now ? "from now" : "at " + ctx_r15.time);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵi18nApply"](1);
} }
const _c7 = function (a1) { return { class: "material-icons", content: a1 }; };
function ExploreBookingModalComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ExploreBookingModalComponent_ng_template_1_ng_container_2_Template, 3, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExploreBookingModalComponent_ng_template_1_ng_container_3_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("request", ctx_r2.is_requesting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.is_requesting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.is_requesting);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c7, ctx_r2.is_requesting ? "send" : "done"));
} }
class ExploreBookingModalComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_6__["BaseDirective"] {
    constructor(_dialog_ref, _data, _router, _service, _users, _spaces) {
        super();
        this._dialog_ref = _dialog_ref;
        this._data = _data;
        this._router = _router;
        this._service = _service;
        this._users = _users;
        this._spaces = _spaces;
        /** Form contents to display */
        this.state = 'info';
        const date = dayjs__WEBPACK_IMPORTED_MODULE_9__(this._data.date);
        this.booking = new src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_3__["Booking"]({
            title: 'Ad-Hoc Booking',
            date: date.valueOf(),
            duration: 30,
            room_ids: [this._data.space.id]
        });
        const status = Object(src_app_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_5__["statusFromBookings"])(this._data.bookings, this.space.bookable, this.space.byRequest({
            date: this._data.date,
            duration: 30,
            host: this._users.current
        }), this._data.date);
        this.available_until = status.available_until;
    }
    get is_requesting() {
        const booking = this.booking.toJSON(true);
        return this.space.byRequest({
            date: this.booking.changes.date || this.booking.date || dayjs__WEBPACK_IMPORTED_MODULE_9__(this._data.date).valueOf(),
            duration: this.booking.changes.duration || this.booking.duration || 30,
            host: booking.organiser || this._users.current
        });
    }
    /** Display string for the selected date */
    get date() {
        const date = dayjs__WEBPACK_IMPORTED_MODULE_9__(this._data.date);
        return date.format('DD MMM YYYY');
    }
    /** Display string for the selected time */
    get time() {
        const date = dayjs__WEBPACK_IMPORTED_MODULE_9__(this._data.date);
        return date.format('h:mm A');
    }
    /** Selected space */
    get space() {
        return this._data.space;
    }
    /** Whether space is being booked for now */
    get is_now() {
        const now = dayjs__WEBPACK_IMPORTED_MODULE_9__();
        const date = dayjs__WEBPACK_IMPORTED_MODULE_9__(this._data.date);
        return now.isSame(date, 'm') || now.isAfter(date, 'm');
    }
    /**
     * Move onto the next step of the booking flow
     */
    next() {
        if (!this.is_now) {
            const booking = this.booking.toJSON(true);
            localStorage.setItem('ACA_STAFF.booking_form_data', JSON.stringify(Object.assign({ id: 'ad-hoc' }, booking)));
            this._router.navigate(['/book', 'space'], { queryParams: { back: '/explore' } });
            this._dialog_ref.close();
        }
        else {
            this.form = Object(src_app_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_5__["generateBookingForm"])(this.booking, this._users.current, [
                'space_list',
                'organiser',
                'title',
                'duration'
            ]);
            this.state = 'form';
        }
    }
    book() {
        /* istanbul ignore else */
        if (this.form.valid) {
            this.loading = 'Checking space availability...';
            this.checkSpaceAvailability().then(() => {
                this.booking.save().then(() => {
                    this.loading = null;
                    this.success = true;
                    this.timeout('close', () => this._dialog_ref.close(), 5000);
                }, err => {
                    this.loading = null;
                    this._service.notifyError(`Error ${this.booking.id ? 'updating' : 'creating'} booking: ${err.message || err}}`);
                });
            }, err => {
                this.loading = null;
                this._service.notifyError(`Error checking space availability: ${err.message || err}`);
            });
        }
    }
    /**
     * Check whether the selected spaces are available for the selected time period
     */
    checkSpaceAvailability() {
        const spaces = this.booking.changes.space_list || this.booking.space_list;
        return new Promise((resolve, reject) => {
            this._spaces.available({
                room_ids: spaces.map(space => space.id).join(','),
                date: this.booking.changes.date || this.booking.date,
                duration: this.booking.changes.duration || this.booking.duration
            }).then(space_list => {
                for (const space of space_list) {
                    if (!space.was_available) {
                        return reject(`${space.name} is not available at the select time period.`);
                    }
                }
                resolve();
            }, err => reject(err));
        });
    }
}
ExploreBookingModalComponent.ɵfac = function ExploreBookingModalComponent_Factory(t) { return new (t || ExploreBookingModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_users_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_8__["SpacesService"])); };
ExploreBookingModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreBookingModalComponent, selectors: [["a-explore-booking-modal"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["done_state", ""], ["mat-dialog-title", ""], [4, "ngIf"], ["load_state", ""], [3, "icon"], [1, "text"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "form"], [1, "details"], ["mat-button", "", "mat-dialog-close", "", 1, "inverse"], ["mat-button", "", 3, "tapped"], [1, "info-block"], [1, "icon"], ["diameter", "48"], [1, "success"]], template: function ExploreBookingModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExploreBookingModalComponent_ng_container_0_Template, 9, 7, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExploreBookingModalComponent_ng_template_1_Template, 5, 7, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.success)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchDefault"], _shared_components_forms_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_12__["BookingFormComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_14__["ɵb"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"]], styles: ["[_nghost-%COMP%] {\n  max-width: 24em;\n}\nheader[_ngcontent-%COMP%] {\n  color: #fff;\n}\nheader[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\nheader.success[_ngcontent-%COMP%] {\n  background-color: #43a047;\n}\nheader.request[_ngcontent-%COMP%] {\n  background-color: #ffb300;\n}\nmain[_ngcontent-%COMP%] {\n  padding: 0 1em 0.5em;\n}\nfooter[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\nbutton[_ngcontent-%COMP%] {\n  min-width: 8em;\n}\np[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n  font-size: 1.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoZWxsL2V4cGxvcmUvb3ZlcmxheXMvYm9va2luZy1tb2RhbC9ib29raW5nLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9leHBsb3JlL292ZXJsYXlzL2Jvb2tpbmctbW9kYWwvYm9va2luZy1tb2RhbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFpQ0E7O2NBQUE7QUFhQTs7c0JBQUE7QUM1Q0E7RUFDSSxlQUFBO0FDT0o7QURKQTtFQUtJLFdETlM7QUVTYjtBRFBJO0VBQ0ksaUJBQUE7QUNTUjtBREpJO0VBQ0kseUJEUEU7QUVhVjtBREhJO0VBQ0kseUJEUEU7QUVZVjtBRERBO0VBQ0ksb0JBQUE7QUNJSjtBRERBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDSUo7QUREQTtFQUNJLGNBQUE7QUNJSjtBRERBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDSUoiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9leHBsb3JlL292ZXJsYXlzL2Jvb2tpbmctbW9kYWwvYm9va2luZy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogI2YwZjBmMDtcbiRmb290ZXItYmFjazogIzI2MzIzODtcbiRoZWFkZXItYmFjazogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDUxQzJDLCAjMDUxQzJDIDQwJSwgIzBCMjQ1MyA2MCUsICMxRjQwRTYgMTAwJSk7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMDUxYzJjO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG46aG9zdCB7XG4gICAgbWF4LXdpZHRoOiAyNGVtO1xufVxuXG5oZWFkZXIge1xuICAgIHNwYW4ge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICBjb2xvcjogJGZvbnQtbGlnaHQ7XG5cbiAgICAmLnN1Y2Nlc3Mge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2VzcztcbiAgICB9XG5cbiAgICAmLnJlcXVlc3Qge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcGVuZGluZztcbiAgICB9XG59XG5cbm1haW4ge1xuICAgIHBhZGRpbmc6IDAgMWVtIC41ZW07XG59XG5cbmZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5idXR0b24ge1xuICAgIG1pbi13aWR0aDogOGVtO1xufVxuXG5wIHtcbiAgICBtYXJnaW46IC41ZW0gMDtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbjpob3N0IHtcbiAgbWF4LXdpZHRoOiAyNGVtO1xufVxuXG5oZWFkZXIge1xuICBjb2xvcjogI2ZmZjtcbn1cbmhlYWRlciBzcGFuIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5oZWFkZXIuc3VjY2VzcyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0M2EwNDc7XG59XG5oZWFkZXIucmVxdWVzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIzMDA7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiAwIDFlbSAwLjVlbTtcbn1cblxuZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuYnV0dG9uIHtcbiAgbWluLXdpZHRoOiA4ZW07XG59XG5cbnAge1xuICBtYXJnaW46IDAuNWVtIDA7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreBookingModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-explore-booking-modal',
                templateUrl: './booking-modal.component.html',
                styleUrls: ['./booking-modal.component.scss']
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] }, { type: src_app_services_data_users_users_service__WEBPACK_IMPORTED_MODULE_7__["UsersService"] }, { type: src_app_services_data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_8__["SpacesService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shell/explore/overlays/space-info/space-info.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shell/explore/overlays/space-info/space-info.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExploreSpaceInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreSpaceInfoComponent", function() { return ExploreSpaceInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _acaprojects_ngx_interactive_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @acaprojects/ngx-interactive-map */ "./node_modules/@acaprojects/ngx-interactive-map/__ivy_ngcc__/fesm2015/acaprojects-ngx-interactive-map.js");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var src_app_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data/bookings/booking.utilities */ "./src/app/services/data/bookings/booking.utilities.ts");
/* harmony import */ var src_app_services_data_users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/users/users.service */ "./src/app/services/data/users/users.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








function ExploreSpaceInfoComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.available_until);
} }
function ExploreSpaceInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ExploreSpaceInfoComponent_div_0_div_8_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("space-info " + ctx_r0.quadrant);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.space.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.space.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.status_class);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.status);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.status_class !== "not-bookable");
} }
class ExploreSpaceInfoComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"] {
    constructor(_data, _position, _users) {
        super();
        this._data = _data;
        this._position = _position;
        this._users = _users;
    }
    /** Named position of the element location on the map */
    get quadrant() {
        /* istanbul ignore if */
        if (!this._position) {
            return 'top left';
        }
        if (this._position.y < .5) {
            if (this._position.x < .5) {
                return 'top left';
            }
            else {
                return 'top right';
            }
        }
        else {
            if (this._position.x < .5) {
                return 'bottom left';
            }
            else {
                return 'bottom right';
            }
        }
    }
    /** CSS class for the current status of the space */
    get status_class() {
        return (this.status || '')
            .toLowerCase()
            .split(' ')
            .join('-');
    }
    /** Space to display on the component */
    get space() {
        /* istanbul ignore if */
        if (!this._data) {
            return null;
        }
        return this._data.space;
    }
    /** List of bookings from the space for the currently displayed time */
    get bookings() {
        /* istanbul ignore if */
        if (!this._data) {
            return [];
        }
        return this._data.bookings || [];
    }
    ngOnInit() {
        this.processBookings();
        this.interval('update_bookings', () => this.processBookings(), 60 * 1000);
    }
    /**
     * Calculate availability of space based off given bookings
     */
    processBookings() {
        /* istanbul ignore if */
        if (!this.space) {
            return;
        }
        const status = Object(src_app_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_3__["statusFromBookings"])(this.bookings, this.space.bookable, this.space.byRequest({
            date: this._data.date,
            duration: 30,
            host: this._users.current
        }), this._data.date);
        this.status = status.status;
        this.available_until = status.available_until;
    }
}
ExploreSpaceInfoComponent.ɵfac = function ExploreSpaceInfoComponent_Factory(t) { return new (t || ExploreSpaceInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_acaprojects_ngx_interactive_map__WEBPACK_IMPORTED_MODULE_1__["MAP_OVERLAY_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_acaprojects_ngx_interactive_map__WEBPACK_IMPORTED_MODULE_1__["MAP_LOCATION"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"])); };
ExploreSpaceInfoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreSpaceInfoComponent, selectors: [["a-space-info"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "id", "class", 4, "ngIf"], [3, "id"], [1, "arrow"], [1, "details"], [1, "name"], [1, "availability"], ["name", "status"], ["name", "available-until", 4, "ngIf"], ["name", "available-until"]], template: function ExploreSpaceInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExploreSpaceInfoComponent_div_0_Template, 9, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.space);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  pointer-events: none;\n}\n.space-info[_ngcontent-%COMP%] {\n  position: absolute;\n  min-width: 16em;\n  border-radius: 4px;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n.space-info.top[_ngcontent-%COMP%] {\n  top: 0;\n}\n.space-info.top.left[_ngcontent-%COMP%] {\n  left: 0;\n  border-top-left-radius: 0;\n}\n.space-info.top.right[_ngcontent-%COMP%] {\n  right: 0;\n  border-top-right-radius: 0;\n}\n.space-info.bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n.space-info.bottom.left[_ngcontent-%COMP%] {\n  left: 0;\n  border-bottom-left-radius: 0;\n}\n.space-info.bottom.right[_ngcontent-%COMP%] {\n  right: 0;\n  border-bottom-right-radius: 0;\n}\n.top[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  top: 2px;\n}\n.top.left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  left: 2px;\n  border-width: 8px 8px 0 0;\n  border-color: #1937ea transparent transparent transparent;\n}\n.top.right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  right: 2px;\n  border-width: 0 8px 8px 0;\n  border-color: transparent #1937ea transparent transparent;\n}\n.bottom[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  bottom: 2px;\n}\n.bottom.left[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  left: 2px;\n  border-width: 8px 0 0 8px;\n  border-color: transparent transparent transparent #1937ea;\n}\n.bottom.right[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  right: 2px;\n  border-width: 0 0 8px 8px;\n  border-color: transparent transparent #1937ea transparent;\n}\n.arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-style: solid;\n}\n.details[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.name[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n  padding: 0.2em 0.4em;\n}\n.availability[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.5rem;\n  display: inline-block;\n}\n[name=status][_ngcontent-%COMP%] {\n  border-radius: 4px;\n  color: #fff;\n  font-size: 0.8em;\n  margin-right: auto;\n}\n[name=status].not-bookable[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n[name=status].available[_ngcontent-%COMP%] {\n  background-color: #43a047;\n}\n[name=status].available-by-request[_ngcontent-%COMP%] {\n  background-color: #ffb300;\n}\n[name=status].meeting-in-progress[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoZWxsL2V4cGxvcmUvb3ZlcmxheXMvc3BhY2UtaW5mby9zcGFjZS1pbmZvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9leHBsb3JlL292ZXJsYXlzL3NwYWNlLWluZm8vc3BhY2UtaW5mby5jb21wb25lbnQuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQWlDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQzVDQTtFQUNJLG9CQUFBO0FDT0o7QURKQTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUVIQSxpSEFBQTtBRFdKO0FETEk7RUFDSSxNQUFBO0FDT1I7QUROUTtFQUNJLE9BQUE7RUFDQSx5QkFBQTtBQ1FaO0FETlE7RUFDSSxRQUFBO0VBQ0EsMEJBQUE7QUNRWjtBREpJO0VBQ0ksU0FBQTtBQ01SO0FETFE7RUFDSSxPQUFBO0VBQ0EsNEJBQUE7QUNPWjtBRExRO0VBQ0ksUUFBQTtFQUNBLDZCQUFBO0FDT1o7QURESTtFQUNJLFFBQUE7QUNJUjtBRERRO0VBQ0ksU0FBQTtFQUNBLHlCQUFBO0VBQ0EseURBQUE7QUNHWjtBRENRO0VBQ0ksVUFBQTtFQUNBLHlCQUFBO0VBQ0EseURBQUE7QUNDWjtBREtJO0VBQ0ksV0FBQTtBQ0ZSO0FES1E7RUFDSSxTQUFBO0VBQ0EseUJBQUE7RUFDQSx5REFBQTtBQ0haO0FET1E7RUFDSSxVQUFBO0VBQ0EseUJBQUE7RUFDQSx5REFBQTtBQ0xaO0FEVUE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUNQSjtBRFVBO0VBQ0ksWUFBQTtBQ1BKO0FEVUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FDUEo7QURXSTtFQUNJLHVCQUFBO0VBQ0EscUJBQUE7QUNSUjtBRFlBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ1RKO0FEV0k7RUFDSSxzQkFBQTtBQ1RSO0FEWUk7RUFDSSx5QkR6R0U7QUUrRlY7QURhSTtFQUNJLHlCRHpHRTtBRThGVjtBRGNJO0VBQ0kseUJEekdBO0FFNkZSIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvZXhwbG9yZS9vdmVybGF5cy9zcGFjZS1pbmZvL3NwYWNlLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICMxOTM3ZWE7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG4kaGVhZGVyLWJhY2s6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA1MUMyQywgIzA1MUMyQyA0MCUsICMwQjI0NTMgNjAlLCAjMUY0MEU2IDEwMCUpO1xuXG4kY29sb3ItdGVybmFyeTogIzA1MWMyYztcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zcGFjZS1pbmZvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWluLXdpZHRoOiAxNmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3c7XG5cbiAgICAmLnRvcCB7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgJi5sZWZ0IHtcbiAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgICAgICYucmlnaHQge1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuYm90dG9tIHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAmLmxlZnQge1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG4gICAgICAgIH1cbiAgICAgICAgJi5yaWdodCB7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udG9wIHtcbiAgICAuYXJyb3cge1xuICAgICAgICB0b3A6IDJweDtcbiAgICB9XG4gICAgJi5sZWZ0IHtcbiAgICAgICAgLmFycm93IHtcbiAgICAgICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogOHB4IDhweCAwIDA7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICRjb2xvci1wcmltYXJ5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgICYucmlnaHQge1xuICAgICAgICAuYXJyb3cge1xuICAgICAgICAgICAgcmlnaHQ6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCA4cHggOHB4IDA7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICRjb2xvci1wcmltYXJ5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYm90dG9tIHtcbiAgICAuYXJyb3cge1xuICAgICAgICBib3R0b206IDJweDtcbiAgICB9XG4gICAgJi5sZWZ0IHtcbiAgICAgICAgLmFycm93IHtcbiAgICAgICAgICAgIGxlZnQ6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogOHB4IDAgMCA4cHg7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICB9XG4gICAgfVxuICAgICYucmlnaHQge1xuICAgICAgICAuYXJyb3cge1xuICAgICAgICAgICAgcmlnaHQ6IDJweDtcbiAgICAgICAgICAgIGJvcmRlci13aWR0aDogMCAwIDhweCA4cHg7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICRjb2xvci1wcmltYXJ5IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbn1cblxuLmRldGFpbHMge1xuICAgIHBhZGRpbmc6IDFlbTtcbn1cblxuLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgIHBhZGRpbmc6IC4yZW0gLjRlbTtcbn1cblxuLmF2YWlsYWJpbGl0eSB7XG4gICAgPiAqIHtcbiAgICAgICAgcGFkZGluZzogLjI1cmVtIC41cmVtO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgfVxufVxuXG5bbmFtZT1cInN0YXR1c1wiXSB7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG5cbiAgICAmLm5vdC1ib29rYWJsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgfVxuXG4gICAgJi5hdmFpbGFibGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2VzcztcbiAgICB9XG5cbiAgICAmLmF2YWlsYWJsZS1ieS1yZXF1ZXN0IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHBlbmRpbmc7XG4gICAgfVxuXG4gICAgJi5tZWV0aW5nLWluLXByb2dyZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVycm9yO1xuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbjpob3N0IHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5zcGFjZS1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtaW4td2lkdGg6IDE2ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG59XG4uc3BhY2UtaW5mby50b3Age1xuICB0b3A6IDA7XG59XG4uc3BhY2UtaW5mby50b3AubGVmdCB7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XG59XG4uc3BhY2UtaW5mby50b3AucmlnaHQge1xuICByaWdodDogMDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG59XG4uc3BhY2UtaW5mby5ib3R0b20ge1xuICBib3R0b206IDA7XG59XG4uc3BhY2UtaW5mby5ib3R0b20ubGVmdCB7XG4gIGxlZnQ6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG4uc3BhY2UtaW5mby5ib3R0b20ucmlnaHQge1xuICByaWdodDogMDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG59XG5cbi50b3AgLmFycm93IHtcbiAgdG9wOiAycHg7XG59XG4udG9wLmxlZnQgLmFycm93IHtcbiAgbGVmdDogMnB4O1xuICBib3JkZXItd2lkdGg6IDhweCA4cHggMCAwO1xuICBib3JkZXItY29sb3I6ICMxOTM3ZWEgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG4udG9wLnJpZ2h0IC5hcnJvdyB7XG4gIHJpZ2h0OiAycHg7XG4gIGJvcmRlci13aWR0aDogMCA4cHggOHB4IDA7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgIzE5MzdlYSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbn1cblxuLmJvdHRvbSAuYXJyb3cge1xuICBib3R0b206IDJweDtcbn1cbi5ib3R0b20ubGVmdCAuYXJyb3cge1xuICBsZWZ0OiAycHg7XG4gIGJvcmRlci13aWR0aDogOHB4IDAgMCA4cHg7XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgIzE5MzdlYTtcbn1cbi5ib3R0b20ucmlnaHQgLmFycm93IHtcbiAgcmlnaHQ6IDJweDtcbiAgYm9yZGVyLXdpZHRoOiAwIDAgOHB4IDhweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMTkzN2VhIHRyYW5zcGFyZW50O1xufVxuXG4uYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5kZXRhaWxzIHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogMS4yNWVtO1xuICBwYWRkaW5nOiAwLjJlbSAwLjRlbTtcbn1cblxuLmF2YWlsYWJpbGl0eSA+ICoge1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG5bbmFtZT1zdGF0dXNdIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuW25hbWU9c3RhdHVzXS5ub3QtYm9va2FibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuW25hbWU9c3RhdHVzXS5hdmFpbGFibGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDNhMDQ3O1xufVxuW25hbWU9c3RhdHVzXS5hdmFpbGFibGUtYnktcmVxdWVzdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmIzMDA7XG59XG5bbmFtZT1zdGF0dXNdLm1lZXRpbmctaW4tcHJvZ3Jlc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTUzOTM1O1xufSIsIlxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkY29sb3I6ICMwMDAsICRkZXB0aDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAxcHggKiAoJGRlcHRoIC0gMSkgcmdiYSgjMDAwLCAuMiksXG4gICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLFxuICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreSpaceInfoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-space-info',
                templateUrl: './space-info.component.html',
                styleUrls: ['./space-info.component.scss']
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_acaprojects_ngx_interactive_map__WEBPACK_IMPORTED_MODULE_1__["MAP_OVERLAY_DATA"]]
            }] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_acaprojects_ngx_interactive_map__WEBPACK_IMPORTED_MODULE_1__["MAP_LOCATION"]]
            }] }, { type: src_app_services_data_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shell/explore/search/search.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shell/explore/search/search.component.ts ***!
  \**********************************************************/
/*! exports provided: ExploreSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreSearchComponent", function() { return ExploreSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var src_app_services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data/spaces/space.class */ "./src/app/services/data/spaces/space.class.ts");
/* harmony import */ var src_app_services_data_users_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data/users/users.service */ "./src/app/services/data/users/users.service.ts");
/* harmony import */ var src_app_services_data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data/spaces/spaces.service */ "./src/app/services/data/spaces/spaces.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");


















const _c0 = ["input"];
function ExploreSearchComponent_div_0_mat_spinner_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 12);
} }
const _c1 = function () { return { type: "icon", class: "material-icons", content: "search" }; };
function ExploreSearchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("focus", function ExploreSearchComponent_div_0_Template_div_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.focusField(); })("click", function ExploreSearchComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.focusField(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ExploreSearchComponent_div_0_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.search_str = $event; })("ngModelChange", function ExploreSearchComponent_div_0_Template_input_ngModelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.search$.next($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ExploreSearchComponent_div_0_mat_spinner_7_Template, 1, 0, "mat-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.search_str)("matAutocomplete", _r1)("placeholder", ctx_r0.placeholder || "Search...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
} }
function ExploreSearchComponent_mat_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r10.level ? option_r10.level.name : option_r10.email);
} }
// TODO: Add handling for role users. e.g. Fire Wardens, First Aiders
// TODO: Add handling for searching for features
// TODO: Add handling for searching for desks
class ExploreSearchComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_4__["BaseDirective"] {
    constructor(_users, _spaces, _route, _router) {
        super();
        this._users = _users;
        this._spaces = _spaces;
        this._route = _route;
        this._router = _router;
        /** Post search and filtering list of items */
        this.results = [];
        /** Subject holding the value of the search */
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.subscription('route.params', this._route.paramMap.subscribe(params => {
            if (params.has('search_type')) {
                this.type = params.get('search_type');
            }
        }));
        // Listen for input changes
        this.search_results$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(query => {
            this.loading = true;
            return query.length >= 3
                ? this._users.query({
                    q: query.slice(0, 3),
                    cache: 60 * 1000
                })
                : Promise.resolve([]);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(err => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((users) => {
            const spaces = this._spaces.filter(_ => true);
            const search = (this.search_str || '').toLowerCase();
            const filter = item => (item.name || '').toLowerCase().indexOf(search) >= 0 ||
                (item.email || '').toLowerCase().indexOf(search) >= 0;
            let result_list = [];
            if (this.type === 'space') {
                result_list = spaces;
            }
            else if (this.type === 'user') {
                result_list = users;
            }
            else {
                result_list = spaces.concat(users);
            }
            this.loading = false;
            return result_list.filter(filter);
        }));
        // Process API results
        this.subscription('search_results', this.search_results$.subscribe(list => {
            this.results = list;
        }));
    }
    ngOnChanges(changes) {
        /* istanbul ignore else */
        if (changes.autofocus && this.autofocus) {
            this.focusField();
        }
    }
    focusField() {
        /* istanbul ignore else */
        if (this.input_field && this.input_field.nativeElement) {
            this.input_field.nativeElement.focus();
        }
    }
    /**
     * Update the selected item to display the location for on the map
     * @param item Space or User to display location for
     */
    selectOption(item) {
        if (item instanceof src_app_services_data_spaces_space_class__WEBPACK_IMPORTED_MODULE_5__["Space"]) {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { space: item.id },
                queryParamsHandling: 'merge'
            });
        }
        else {
            this._router.navigate([], {
                relativeTo: this._route,
                queryParams: { user: item.email },
                queryParamsHandling: 'merge'
            });
        }
        this.search_str = item.name;
    }
}
ExploreSearchComponent.ɵfac = function ExploreSearchComponent_Factory(t) { return new (t || ExploreSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_users_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_7__["SpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
ExploreSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreSearchComponent, selectors: [["explore-search"]], viewQuery: function ExploreSearchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.input_field = _t.first);
    } }, inputs: { type: "type", autofocus: "autofocus", placeholder: "placeholder" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [["class", "searchbar", "tabindex", "0", 3, "focus", "click", 4, "ngIf"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["tabindex", "0", 1, "searchbar", 3, "focus", "click"], [1, "prefix"], [3, "icon"], [1, "input"], ["type", "text", 3, "ngModel", "matAutocomplete", "placeholder", "ngModelChange"], ["input", ""], [1, "suffix"], ["diameter", "32", 4, "ngIf"], ["diameter", "32"], [3, "value"], [1, "name"], [1, "email"]], template: function ExploreSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExploreSearchComponent_div_0_Template, 8, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-autocomplete", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function ExploreSearchComponent_Template_mat_autocomplete_optionSelected_1_listener($event) { return ctx.selectOption($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ExploreSearchComponent_mat_option_3_Template, 5, 3, "mat-option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.results);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"], _angular_material_core__WEBPACK_IMPORTED_MODULE_13__["MatOption"]], styles: [".searchbar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  max-width: calc(100% - 1em);\n  width: calc(100% - 1em);\n  margin: 0.5em auto;\n  background-color: #fff;\n  border-radius: 2em;\n  padding: 0 0.75em;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .searchbar[_ngcontent-%COMP%] {\n    border-radius: 0;\n    box-shadow: none;\n    margin: 0;\n    width: 100%;\n    max-width: 100%;\n    padding: 0 0.5em;\n    border-bottom: 1px solid #ccc;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .searchbar[_ngcontent-%COMP%] {\n    border-radius: 0;\n    box-shadow: none;\n    margin: 0;\n    width: 100%;\n    max-width: 100%;\n    padding: 0 0.5em;\n    border-bottom: 1px solid #ccc;\n  }\n}\n.prefix[_ngcontent-%COMP%], .suffix[_ngcontent-%COMP%] {\n  font-size: 1.5em;\n  min-width: 32px;\n  min-height: 100%;\n}\n.input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  font-size: 1em;\n  border: none;\n  outline: none;\n  padding: 1em 0.5em;\n  background: none;\n}\n.name[_ngcontent-%COMP%] {\n  height: 1em;\n}\n.email[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  color: rgba(0, 0, 0, 0.65);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoZWxsL2V4cGxvcmUvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL21peGlucy5zY3NzIiwic3JjL2FwcC9zaGVsbC9leHBsb3JlL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBaUNBOztjQUFBO0FBYUE7O3NCQUFBO0FDM0NBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VDSkEsaUhBQUE7QUNXSjtBSDBDUTtFQ3pEUjtJQVlRLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLDZCQUFBO0VFT047QUFDRjtBSGtDUTtFQzVEUjtJQVlRLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtJQUNBLDZCQUFBO0VFa0JOO0FBQ0Y7QUZmQTs7RUFFSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBRWtCSjtBRmRBO0VBQ0ksT0FBQTtFQUNBLGNBQUE7QUVpQko7QUZkQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FFaUJKO0FGZEE7RUFDSSxXQUFBO0FFaUJKO0FGZEE7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0FFaUJKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvZXhwbG9yZS9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjMTkzN2VhO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuJGhlYWRlci1iYWNrOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwNTFDMkMsICMwNTFDMkMgNDAlLCAjMEIyNDUzIDYwJSwgIzFGNDBFNiAxMDAlKTtcblxuJGNvbG9yLXRlcm5hcnk6ICMwNTFjMmM7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG4uc2VhcmNoYmFyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxZW0pO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxZW0pO1xuICAgIG1hcmdpbjogLjVlbSBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogMmVtO1xuICAgIHBhZGRpbmc6IDAgLjc1ZW07XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdztcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogMCAuNWVtO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgICB9XG59XG5cbi5wcmVmaXgsXG4uc3VmZml4IHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1pbi13aWR0aDogMzJweDtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xufVxuXG5cbi5pbnB1dCB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDUwJTtcbn1cblxuaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDFlbSAuNWVtO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5uYW1lIHtcbiAgICBoZWlnaHQ6IDFlbTtcbn1cblxuLmVtYWlsIHtcbiAgICBmb250LXNpemU6IC42ZW07XG4gICAgY29sb3I6IHJnYmEoIzAwMCwgLjY1KTtcbn1cbiIsIlxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkY29sb3I6ICMwMDAsICRkZXB0aDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAxcHggKiAoJGRlcHRoIC0gMSkgcmdiYSgjMDAwLCAuMiksXG4gICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLFxuICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5zZWFyY2hiYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDFlbSk7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxZW0pO1xuICBtYXJnaW46IDAuNWVtIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDJlbTtcbiAgcGFkZGluZzogMCAwLjc1ZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLnNlYXJjaGJhciB7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIG1hcmdpbjogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAwLjVlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5zZWFyY2hiYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMC41ZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gIH1cbn1cblxuLnByZWZpeCxcbi5zdWZmaXgge1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtaW4td2lkdGg6IDMycHg7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbi5pbnB1dCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogNTAlO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDFlbTtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxZW0gMC41ZW07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5uYW1lIHtcbiAgaGVpZ2h0OiAxZW07XG59XG5cbi5lbWFpbCB7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'explore-search',
                templateUrl: './search.component.html',
                styleUrls: ['./search.component.scss']
            }]
    }], function () { return [{ type: src_app_services_data_users_users_service__WEBPACK_IMPORTED_MODULE_6__["UsersService"] }, { type: src_app_services_data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_7__["SpacesService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autofocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], placeholder: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], input_field: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['input', { static: false }]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/explore/status-managers/desk-status.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shell/explore/status-managers/desk-status.component.ts ***!
  \************************************************************************/
/*! exports provided: ExploreDeskStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreDeskStatusComponent", function() { return ExploreDeskStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var src_app_services_data_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/organisation/organisation.service */ "./src/app/services/data/organisation/organisation.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _placeos_composer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @placeos/composer */ "./node_modules/@placeos/composer/__ivy_ngcc__/fesm2015/placeos-composer.js");










const _c0 = ["desk-status", ""];
const _c1 = function (a0) { return [a0]; };
const _c2 = function () { return []; };
function ExploreDeskStatusComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExploreDeskStatusComponent_div_1_Template_i_modelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.in_use = $event; })("modelChange", function ExploreDeskStatusComponent_div_1_Template_i_modelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.calculateStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExploreDeskStatusComponent_div_1_Template_i_modelChange_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.id_list = $event; })("modelChange", function ExploreDeskStatusComponent_div_1_Template_i_modelChange_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.calculateStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExploreDeskStatusComponent_div_1_Template_i_modelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.reserved = $event; })("modelChange", function ExploreDeskStatusComponent_div_1_Template_i_modelChange_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.calculateStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExploreDeskStatusComponent_div_1_Template_i_modelChange_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.occupied = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExploreDeskStatusComponent_div_1_Template_i_modelChange_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.free = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExploreDeskStatusComponent_div_1_Template_i_modelChange_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.checkin = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExploreDeskStatusComponent_div_1_Template_i_modelChange_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.cancel = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r0.in_use)("sys", ctx_r0.system_id)("bind", ctx_r0.zone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r0.id_list)("sys", ctx_r0.system_id)("bind", ctx_r0.zone + ":desk_ids");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r0.reserved)("sys", ctx_r0.system_id)("bind", ctx_r0.zone + ":reserved");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r0.occupied)("sys", ctx_r0.system_id)("bind", ctx_r0.zone + ":occupied_count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r0.free)("sys", ctx_r0.system_id)("bind", ctx_r0.zone + ":free_count");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r0.checkin)("sys", ctx_r0.system_id)("params", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx_r0.checkin));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r0.cancel)("sys", ctx_r0.system_id)("params", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c2));
} }
const _c3 = ["*"];
class ExploreDeskStatusComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"] {
    constructor(_service, _org) {
        super();
        this._service = _service;
        this._org = _org;
        /** Emitter for changes to the desk status */
        this.status = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Number of occupied desks on the active level */
        this.occupied = 0;
        /** Number of free desks on the active level */
        this.free = 0;
        /** Mapping of colours to statuses */
        this.colour_map = {};
    }
    ngOnInit() {
        this._service.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(_ => _)).subscribe(() => {
            this.colour_map = this._service.setting('app.explore.colors') || {};
        });
    }
    ngOnChanges(changes) {
        if (changes.zone) {
            this.loadDesks();
        }
    }
    calculateStatus() {
        const desk_list = this.id_list || [];
        const status_list = [];
        for (const desk_id of desk_list) {
            const in_use = (this.in_use || []).find(id => id === desk_id);
            const reserved = (this.reserved || []).find(id => id === desk_id);
            const status = in_use ? 'unavailable' : reserved ? 'reserved' : 'available';
            status_list.push({
                id: desk_id,
                styles: {
                    fill: this.colour_map[`desk-${status}`],
                    stroke: this.colour_map[`desk-${status}-stroke`],
                },
                status_id: status
            });
        }
        this.status.emit(status_list);
    }
    loadDesks() {
        const level = this._org.levelWithID(this.zone);
        if (!level) {
            return;
        }
        const building = this._org.buildings.find(bld => bld.id === level.building_id);
        if (!building) {
            return;
        }
        const desk_management = building.systems.desk_management;
        if (!desk_management) {
            return;
        }
        this.system_id = desk_management;
    }
}
ExploreDeskStatusComponent.ɵfac = function ExploreDeskStatusComponent_Factory(t) { return new (t || ExploreDeskStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"])); };
ExploreDeskStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreDeskStatusComponent, selectors: [["", "desk-status", ""]], inputs: { zone: "zone", checkin: "checkin" }, outputs: { status: "status" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c0, ngContentSelectors: _c3, decls: 2, vars: 1, consts: [["class", "bindings", 4, "ngIf"], [1, "bindings"], ["binding", "", "mod", "DeskManagement", 3, "model", "sys", "bind", "modelChange"], ["binding", "", "mod", "DeskManagement", "exec", "manual_checkin", 3, "model", "sys", "params", "modelChange"], ["binding", "", "mod", "DeskManagement", "exec", "cancel_reservation", 3, "model", "sys", "params", "modelChange"]], template: function ExploreDeskStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExploreDeskStatusComponent_div_1_Template, 8, 24, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.system_id);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _placeos_composer__WEBPACK_IMPORTED_MODULE_6__["BindingDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreDeskStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[desk-status]',
                template: `
        <ng-content></ng-content>
        <div class="bindings" *ngIf="system_id">
            <!-- BINDINGS -->
            <i binding [(model)]="in_use" [sys]="system_id" mod="DeskManagement" [bind]="zone" (modelChange)="calculateStatus()"></i>
            <i binding [(model)]="id_list" [sys]="system_id" mod="DeskManagement" [bind]="zone + ':desk_ids'" (modelChange)="calculateStatus()"></i>
            <i binding [(model)]="reserved" [sys]="system_id" mod="DeskManagement" [bind]="zone + ':reserved'" (modelChange)="calculateStatus()"></i>
            <i binding [(model)]="occupied" [sys]="system_id" mod="DeskManagement" [bind]="zone + ':occupied_count'"></i>
            <i binding [(model)]="free" [sys]="system_id" mod="DeskManagement" [bind]="zone + ':free_count'"></i>
            <!-- REMOTE EXECUTIONS -->
            <i binding [(model)]="checkin" [sys]="system_id" mod="DeskManagement" exec="manual_checkin" [params]="[checkin]"></i>
            <i binding [(model)]="cancel" [sys]="system_id" mod="DeskManagement" exec="cancel_reservation" [params]="[]"></i>
        </div>
    `
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"] }, { type: src_app_services_data_organisation_organisation_service__WEBPACK_IMPORTED_MODULE_4__["OrganisationService"] }]; }, { zone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], checkin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/explore/status-managers/space-status.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shell/explore/status-managers/space-status.component.ts ***!
  \*************************************************************************/
/*! exports provided: ExploreSpaceStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreSpaceStatusComponent", function() { return ExploreSpaceStatusComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/bookings/booking.class */ "./src/app/services/data/bookings/booking.class.ts");
/* harmony import */ var _overlays_space_info_space_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../overlays/space-info/space-info.component */ "./src/app/shell/explore/overlays/space-info/space-info.component.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _overlays_booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../overlays/booking-modal/booking-modal.component */ "./src/app/shell/explore/overlays/booking-modal/booking-modal.component.ts");
/* harmony import */ var src_app_services_data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/data/spaces/spaces.service */ "./src/app/services/data/spaces/spaces.service.ts");
/* harmony import */ var src_app_services_data_users_users_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/data/users/users.service */ "./src/app/services/data/users/users.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _placeos_composer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @placeos/composer */ "./node_modules/@placeos/composer/__ivy_ngcc__/fesm2015/placeos-composer.js");


















const _c0 = ["space-status", ""];
function ExploreSpaceStatusComponent_div_0_i_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function ExploreSpaceStatusComponent_div_0_i_1_Template_i_modelChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const space_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.processSpaceBookings(space_r2, $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const space_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("sys", space_r2.id);
} }
function ExploreSpaceStatusComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ExploreSpaceStatusComponent_div_0_i_1_Template, 1, 1, "i", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.space_list);
} }
const _c1 = ["*"];
class ExploreSpaceStatusComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"] {
    constructor(_service, _users, _spaces, _dialog) {
        super();
        this._service = _service;
        this._users = _users;
        this._spaces = _spaces;
        this._dialog = _dialog;
        /** Emitter for changes to the space status */
        this.status = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emitter for changes to the space status */
        this.listeners = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emitter for changes to the space status */
        this.features = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** List of spaces to grab the statuses for */
        this.space_list = [];
        /** Mapping of spaces to active bookings */
        this.active_bookings = {};
        /** Mapping of colours to statuses */
        this.colour_map = {};
    }
    /** Whether selected date time is the current day */
    get is_today() {
        return dayjs__WEBPACK_IMPORTED_MODULE_6__().isSame(dayjs__WEBPACK_IMPORTED_MODULE_6__(this.date), 'd');
    }
    ngOnInit() {
        this._service.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])((_) => _)).subscribe(() => {
            this.colour_map = this._service.setting('app.explore.colors') || {};
            this.subscription('spaces', this._spaces.listen('list').subscribe(() => this.loadSpaces()));
            this.interval('update_status', () => {
                this.updateSpaceBookings();
                this.calculateStatus();
            }, 60 * 1000);
        });
    }
    ngOnChanges(changes) {
        if (changes.zone || changes.date) {
            this.loadSpaces();
        }
        if (changes.zone) {
            this.clearSpaces();
        }
    }
    ngOnDestroy() {
        this.clearSpaces();
    }
    /**
     * Determine the availability statuses for all the spaces in the set zone
     */
    calculateStatus() {
        this.timeout('process_statuses', () => {
            const statuses = [];
            for (const space of this.space_list) {
                const status = this.getStatus(space, this.date);
                const id = space.map_id.indexOf('area') < 0 ? `area-${space.map_id}-status` : space.map_id;
                statuses.push({
                    id,
                    styles: {
                        fill: this.colour_map[`space-${status}`] || '#000',
                        opacity: 0.6,
                    },
                    status_id: status,
                });
            }
            this.status.emit(statuses);
        });
    }
    /**
     * Get the status of the space at the set time
     * @param space Space to get the status for
     */
    getStatus(space, datetime) {
        if (!space.bookable) {
            return 'not-bookable';
        }
        const bookings = this.active_bookings[space.id] || [];
        const date = dayjs__WEBPACK_IMPORTED_MODULE_6__(datetime).startOf('m').second(1);
        const current_booking = bookings.find((booking) => {
            const start = dayjs__WEBPACK_IMPORTED_MODULE_6__(booking.date).startOf('m');
            const end = start.add(booking.duration, 'm');
            return date.isAfter(start, 's') && date.isBefore(end, 'm');
        });
        if (current_booking) {
            return 'unavailable';
        }
        const options = {
            date: dayjs__WEBPACK_IMPORTED_MODULE_6__(this.date).valueOf(),
            duration: 30,
            host: this._users.current,
        };
        const rules = space.rulesFor(options);
        if (rules.hide) {
            return 'not-bookable';
        }
        else if (!rules.auto_approve) {
            return 'requestable';
        }
        return 'available';
    }
    /**
     * Process raw booking data for the given space
     * @param space Space associated with the bookings
     * @param data List of booking data
     */
    processSpaceBookings(space, data) {
        this.timeout(`space-${space.id}`, () => {
            const bookings = (data || []).map((bkn_data) => new src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_4__["Booking"](Object.assign(Object.assign({}, bkn_data), { room_ids: [space.id] })));
            this.active_bookings[space.id] = bookings;
            this.calculateStatus();
        }, 10);
    }
    /**
     * Update the booking data for space on future dates
     */
    updateSpaceBookings() {
        /* istanbul ignore else */
        if (this.is_today) {
            return;
        }
        this.timeout('update_spaces', () => {
            const date = dayjs__WEBPACK_IMPORTED_MODULE_6__(this.date).startOf('d');
            this._spaces
                .query({
                from: date.unix(),
                to: date.endOf('d').unix(),
                show_declined: false,
                zone_ids: this.zone,
                cache: 10 * 1000,
            })
                .then((spaces) => {
                spaces.forEach((space) => this.processSpaceBookings(space, [...space.bookings]));
            });
        }, 50);
    }
    /**
     * Load listeners for space data
     */
    loadSpaces() {
        this.space_list = this._spaces.filter((space) => space.zones.indexOf(this.zone) >= 0);
        const listeners = [];
        for (const space of this.space_list) {
            const id = space.map_id.indexOf('area') < 0 ? `area-${space.map_id}-status` : space.map_id;
            listeners.push({
                id,
                event: 'mouseenter',
                callback: () => this.showSpaceInfo(space),
            });
            listeners.push({
                id,
                event: 'mouseleave',
                callback: () => this.features.emit([]),
            });
            if (space.bookable) {
                listeners.push({
                    id,
                    event: 'click',
                    callback: () => this.openBookingModal(space),
                });
            }
        }
        this.listeners.emit(listeners);
        this.updateSpaceBookings();
        this.calculateStatus();
    }
    /**
     * Clear current space and booking data
     */
    clearSpaces() {
        delete this.active_bookings;
        this.active_bookings = {};
    }
    /**
     * Update features to include space info for a space
     * @param space Space to show details for
     */
    showSpaceInfo(space) {
        const id = space.map_id.indexOf('area') < 0 ? `area-${space.map_id}-status` : space.map_id;
        this.features.emit([
            {
                id,
                coordinates: null,
                content: _overlays_space_info_space_info_component__WEBPACK_IMPORTED_MODULE_5__["ExploreSpaceInfoComponent"],
                data: {
                    space,
                    bookings: this.active_bookings[space.id],
                    date: this.date,
                },
            },
        ]);
    }
    /**
     * Open explore booking modal for the given space
     * @param space Space to make booking for
     */
    openBookingModal(space) {
        const status = this.getStatus(space, this.date);
        if (status !== 'unavailable' && status !== 'not-bookable') {
            this._dialog.open(_overlays_booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_8__["ExploreBookingModalComponent"], {
                width: 'auto',
                height: 'auto',
                data: {
                    date: this.date,
                    space,
                    bookings: this.active_bookings[space.id],
                },
            });
        }
        else {
            this._service.notifyInfo(`${space.name} is unavailable at the selected time. Please select another space or time and try again.`);
        }
    }
}
ExploreSpaceStatusComponent.ɵfac = function ExploreSpaceStatusComponent_Factory(t) { return new (t || ExploreSpaceStatusComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_users_users_service__WEBPACK_IMPORTED_MODULE_10__["UsersService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_9__["SpacesService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"])); };
ExploreSpaceStatusComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExploreSpaceStatusComponent, selectors: [["", "space-status", ""]], inputs: { zone: "zone", date: "date" }, outputs: { status: "status", listeners: "listeners", features: "features" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], attrs: _c0, ngContentSelectors: _c1, decls: 2, vars: 1, consts: [["class", "bindings", 4, "ngIf"], [1, "bindings"], ["binding", "", "mod", "Bookings", "bind", "today", 3, "sys", "modelChange", 4, "ngFor", "ngForOf"], ["binding", "", "mod", "Bookings", "bind", "today", 3, "sys", "modelChange"]], template: function ExploreSpaceStatusComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ExploreSpaceStatusComponent_div_0_Template, 2, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.space_list && ctx.is_today);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _placeos_composer__WEBPACK_IMPORTED_MODULE_12__["BindingDirective"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExploreSpaceStatusComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: '[space-status]',
                template: `
        <div class="bindings" *ngIf="space_list && is_today">
            <i
                *ngFor="let space of space_list"
                binding
                [sys]="space.id"
                mod="Bookings"
                bind="today"
                (modelChange)="processSpaceBookings(space, $event)"
            ></i>
        </div>
        <ng-content></ng-content>
    `,
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"] }, { type: src_app_services_data_users_users_service__WEBPACK_IMPORTED_MODULE_10__["UsersService"] }, { type: src_app_services_data_spaces_spaces_service__WEBPACK_IMPORTED_MODULE_9__["SpacesService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialog"] }]; }, { zone: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], status: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], listeners: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], features: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/explore/timeline/timeline.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shell/explore/timeline/timeline.component.ts ***!
  \**************************************************************/
/*! exports provided: TimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimelineComponent", function() { return TimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _shared_components_custom_fields_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/components/custom-fields/date-field/date-field.component */ "./src/app/shared/components/custom-fields/date-field/date-field.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_components_custom_fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/components/custom-fields/time-field/time-field.component */ "./src/app/shared/components/custom-fields/time-field/time-field.component.ts");












const _c0 = ["container"];
function TimelineComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", item_r3.left + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hour", item_r3.is_hour);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.name);
} }
function TimelineComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r2.offset + "%");
} }
const _c1 = function () { return { class: "material-icons", content: "keyboard_arrow_left" }; };
const _c2 = function () { return { class: "material-icons", content: "keyboard_arrow_right" }; };
const BLOCK_SIZE = 30;
const MINUTES_IN_DAY = 24 * 60;
class TimelineComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    constructor(_renderer) {
        super();
        this._renderer = _renderer;
        /** Emitter for changes to the selected datetime */
        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** List of time blocks to select */
        this.blocks = [];
    }
    /** Whether selected date time is the current day */
    get is_today() {
        return dayjs__WEBPACK_IMPORTED_MODULE_2__().isSame(dayjs__WEBPACK_IMPORTED_MODULE_2__(this.date), 'd');
    }
    /** Offset of the current time from the start of the day */
    get offset() {
        const date = dayjs__WEBPACK_IMPORTED_MODULE_2__();
        const diff = date.diff(date.startOf('d'), 'm');
        return (diff / MINUTES_IN_DAY) * 100;
    }
    /** Details of the currently selected datetime */
    get active_time() {
        const date = dayjs__WEBPACK_IMPORTED_MODULE_2__(this.date);
        const diff = date.diff(date.startOf('d'), 'm');
        return {
            id: date.isSame(dayjs__WEBPACK_IMPORTED_MODULE_2__(), 'd') ? 'Today' : date.format('DD MMM YYYY'),
            name: date.format('h:mm A'),
            left: (diff / MINUTES_IN_DAY) * 100,
        };
    }
    ngOnInit() {
        this.blocks = this.generateBlocks();
        this.interval('check_date', () => this.checkDate(), 15 * 1000);
    }
    /**
     * Generate the display blocks for the timeline
     */
    generateBlocks() {
        const start = dayjs__WEBPACK_IMPORTED_MODULE_2__().startOf('d');
        const end = start.endOf('d');
        const blocks = [];
        let current_time = start;
        while (current_time.isBefore(end)) {
            const is_hour = current_time.minute() === 0;
            blocks.push({
                id: current_time.format('HH:mm'),
                name: is_hour ? current_time.format('h') : '',
                is_hour,
                left: (current_time.diff(start, 'm') / MINUTES_IN_DAY) * 100,
            });
            current_time = current_time.add(BLOCK_SIZE, 'm');
        }
        return blocks;
    }
    /**
     * Change the date of the active date time
     * @param amount Number of days to change by
     */
    changeDate(amount = 1) {
        let date = dayjs__WEBPACK_IMPORTED_MODULE_2__(this.date);
        date = date.add(amount, 'd');
        const now = dayjs__WEBPACK_IMPORTED_MODULE_2__();
        this.date = date.isBefore(now, 'm') ? now.valueOf() : date.valueOf();
        this.dateChange.emit(this.date);
    }
    startMove(event) {
        const position = Object(src_app_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__["eventToPoint"])(event);
        this._start_position = position;
        this._box = this._container.nativeElement.getBoundingClientRect();
        const type = event instanceof MouseEvent ? 'mouse' : 'touch';
        this.subscription('move', this._renderer.listen('window', `${type}move`, (e) => this.onMove(e)));
        this.subscription('end', this._renderer.listen('window', `${type === 'mouse' ? 'mouseup' : 'touchend'}`, (e) => {
            this.unsub('move');
            this.unsub('end');
        }));
    }
    onMove(event) {
        const position = Object(src_app_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_3__["eventToPoint"])(event);
        const y_change = (this._start_position.x - position.x) / this._box.width;
        const time_change = -Math.round(y_change * MINUTES_IN_DAY);
        /* istanbul ignore else */
        if (time_change !== 0) {
            let old_date = dayjs__WEBPACK_IMPORTED_MODULE_2__(this.date);
            let date = old_date;
            date = date.add(time_change, 'm');
            date = date.minute(Math.floor(Math.round(date.minute() / 5)) * 5);
            this.date = date.valueOf();
            this.dateChange.emit(this.date);
            /* istanbul ignore else */
            if (Math.abs(old_date.diff(date, 'm')) > 0) {
                this._start_position = position;
            }
            this.checkDate();
        }
    }
    /** Check that active datetime is not in the past */
    checkDate() {
        const date = dayjs__WEBPACK_IMPORTED_MODULE_2__(this.date);
        let now = dayjs__WEBPACK_IMPORTED_MODULE_2__();
        now = now.minute(Math.floor(Math.ceil(now.minute() / 5)) * 5);
        /* istanbul ignore else */
        if (date.isBefore(now, 'm')) {
            this.date = now.valueOf();
            this.dateChange.emit(this.date);
        }
    }
}
TimelineComponent.ɵfac = function TimelineComponent_Factory(t) { return new (t || TimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
TimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimelineComponent, selectors: [["a-timeline"]], viewQuery: function TimelineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._container = _t.first);
    } }, inputs: { date: "date" }, outputs: { dateChange: "dateChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 20, vars: 13, consts: [[1, "not-mobile"], ["explore", "", 1, "timeline"], ["container", ""], ["class", "block", 3, "hour", "left", 4, "ngFor", "ngForOf"], ["class", "offset", 3, "width", 4, "ngIf"], [1, "active-time"], [1, "bar"], [1, "date"], ["mat-icon-button", "", 3, "disabled", "tapped"], [3, "icon"], [1, "text", 3, "mousedown", "touchstart"], ["mat-icon-button", "", 3, "tapped"], [1, "time", 3, "mousedown", "touchstart"], [1, "triangle"], [1, "pickers", "mobile-only"], ["offset", "top", 3, "ngModel", "ngModelChange"], [3, "ngModel", "ngModelChange"], [1, "block"], [1, "text"], [1, "offset"]], template: function TimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TimelineComponent_div_3_Template, 4, 5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TimelineComponent_div_4_Template, 1, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function TimelineComponent_Template_button_tapped_8_listener() { return ctx.changeDate(0 - 1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function TimelineComponent_Template_div_mousedown_10_listener($event) { return ctx.startMove($event); })("touchstart", function TimelineComponent_Template_div_touchstart_10_listener($event) { return ctx.startMove($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function TimelineComponent_Template_button_tapped_12_listener() { return ctx.changeDate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function TimelineComponent_Template_div_mousedown_14_listener($event) { return ctx.startMove($event); })("touchstart", function TimelineComponent_Template_div_touchstart_14_listener($event) { return ctx.startMove($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a-date-field", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimelineComponent_Template_a_date_field_ngModelChange_18_listener($event) { return ctx.date = $event; })("ngModelChange", function TimelineComponent_Template_a_date_field_ngModelChange_18_listener($event) { return ctx.dateChange.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a-time-field", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function TimelineComponent_Template_a_time_field_ngModelChange_19_listener($event) { return ctx.date = $event; })("ngModelChange", function TimelineComponent_Template_a_time_field_ngModelChange_19_listener($event) { return ctx.dateChange.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.blocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.is_today);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", ctx.active_time.left + "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.is_today);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.active_time.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.active_time.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_6__["ɵb"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _shared_components_custom_fields_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_8__["DateFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _shared_components_custom_fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_10__["TimeFieldComponent"]], styles: ["[_nghost-%COMP%] {\n  z-index: 10;\n  border-top: 1px solid #ccc;\n  background-color: #fff;\n}\n[_nghost-%COMP%], .timeline[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 3em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  [_nghost-%COMP%], .timeline[_ngcontent-%COMP%] {\n    height: 3.75em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  [_nghost-%COMP%], .timeline[_ngcontent-%COMP%] {\n    height: 3.75em;\n  }\n}\n.timeline[_ngcontent-%COMP%] {\n  background: linear-gradient(to right, #051C2C, #051C2C 40%, #0B2453 60%, #1F40E6 100%);\n}\n.block[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n.block.hour[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  height: 40%;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .block.hour[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n    display: initial;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .block.hour[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n    display: initial;\n  }\n}\n.block[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 2px;\n  height: 20%;\n  bottom: 0;\n  left: -1px;\n  background-color: #fff;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .block[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .block[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.block[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 45%;\n  left: 0;\n  transform: translateX(-50%);\n  color: #fff;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .block[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .block[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n  }\n}\n.block[_ngcontent-%COMP%]:first-child {\n  display: none;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .block[_ngcontent-%COMP%]:nth-child(4n-1) {\n    display: none;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .block[_ngcontent-%COMP%]:nth-child(4n-1) {\n    display: none;\n  }\n}\n.offset[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.65);\n}\n.active-time[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  top: 0;\n}\n.active-time[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 2px;\n  height: 200%;\n  bottom: 0;\n  left: -1px;\n  background-color: #fff;\n}\n.date[_ngcontent-%COMP%], .time[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 100%;\n  left: 0;\n  transform: translate(-50%, -0.25em);\n  display: flex;\n  align-items: center;\n  overflow: hidden;\n  border-radius: 4px;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n.date[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%], .time[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  padding: 0 0.5em;\n  white-space: nowrap;\n}\n.date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .time[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n.date[_ngcontent-%COMP%] {\n  transform: translate(-50%, -2.5em);\n}\n.time[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  white-space: nowrap;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.time[_ngcontent-%COMP%]:active {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\n.pickers[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.25em;\n}\n.pickers[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  margin: 0.25em 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoZWxsL2V4cGxvcmUvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL2V4cGxvcmUvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCIvYnVpbGRzL2FjYS1lbmdpbmUvbWNraW5zZXkvbWNraW5zZXktc3RhZmYtYXBwL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFpQ0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMzQ0E7RUFDSSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxzQkFBQTtBQ01KO0FERkE7O0VBRUksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0tKO0FGeUNRO0VDbERSOztJQU1RLGNBQUE7RUNRTjtBQUNGO0FGc0NRO0VDckRSOztJQU1RLGNBQUE7RUNjTjtBQUNGO0FEWEE7RUFDSSxzRkFBQTtBQ2NKO0FEWEE7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0FDY0o7QURYUTtFQUNJLFdBQUE7QUNhWjtBRmNRO0VDNUJBO0lBR1EsZ0JBQUE7RUNlZDtBQUNGO0FGWVE7RUMvQkE7SUFHUSxnQkFBQTtFQ29CZDtBQUNGO0FEaEJJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNrQlI7QUZKUTtFQ3BCSjtJQVFRLGFBQUE7RUNvQlY7QUFDRjtBRk5RO0VDdkJKO0lBUVEsYUFBQTtFQ3lCVjtBQUNGO0FEdEJJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ3dCUjtBRnJCUTtFQ1JKO0lBT1EsZ0JBQUE7RUMwQlY7QUFDRjtBRnZCUTtFQ1hKO0lBT1EsZ0JBQUE7RUMrQlY7QUFDRjtBRDVCSTtFQUNJLGFBQUE7QUM4QlI7QUZsQ1E7RUNPSjtJQUVRLGFBQUE7RUM2QlY7QUFDRjtBRnBDUTtFQ0lKO0lBRVEsYUFBQTtFQ2tDVjtBQUNGO0FEOUJBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxxQ0FBQTtBQ2lDSjtBRDlCQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FDaUNKO0FEL0JJO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUNpQ1I7QUQ3QkE7O0VBRUksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLG1DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VFckdBLGlIQUFBO0FEc0lKO0FEOUJJOztFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNpQ1I7QUQ5Qkk7O0VBQ0ksZ0JBQUE7QUNpQ1I7QUQ3QkE7RUFDSSxrQ0FBQTtBQ2dDSjtBRDdCQTtFQUNJLGNBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQUEsWUFBQTtBQ2dDSjtBRDlCSTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7QUNnQ1I7QUQ1QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDK0JKO0FEN0JJO0VBQ0ksT0FBQTtFQUNBLHFCQUFBO0FDK0JSIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvZXhwbG9yZS90aW1lbGluZS90aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogI2YwZjBmMDtcbiRmb290ZXItYmFjazogIzI2MzIzODtcbiRoZWFkZXItYmFjazogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDUxQzJDLCAjMDUxQzJDIDQwJSwgIzBCMjQ1MyA2MCUsICMxRjQwRTYgMTAwJSk7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMDUxYzJjO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3Qge1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbn1cblxuOmhvc3QsXG4udGltZWxpbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBoZWlnaHQ6IDMuNzVlbTtcbiAgICB9XG59XG5cbi50aW1lbGluZSB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDUxQzJDLCAjMDUxQzJDIDQwJSwgIzBCMjQ1MyA2MCUsICMxRjQwRTYgMTAwJSk7XG59XG5cbi5ibG9jayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICYuaG91ciB7XG4gICAgICAgIC5iYXIge1xuICAgICAgICAgICAgaGVpZ2h0OiA0MCU7XG4gICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMnB4O1xuICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAtMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ZXh0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDQ1JTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6bnRoLWNoaWxkKDRuIC0gMSkge1xuICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm9mZnNldCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIC42NSk7XG59XG5cbi5hY3RpdmUtdGltZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcblxuICAgIC5iYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgIGhlaWdodDogMjAwJTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAtMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cbn1cblxuLmRhdGUsXG4udGltZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTAwJTtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0uMjVlbSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdztcblxuICAgIC50ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMCAuNWVtO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgfVxufVxuXG4uZGF0ZSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTIuNWVtKTtcbn1cblxuLnRpbWUge1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBjdXJzb3I6IGdyYWI7XG5cbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIGN1cnNvcjogZ3JhYmJpbmc7XG4gICAgfVxufVxuXG4ucGlja2VycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IC4yNWVtO1xuXG4gICAgPiAqIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWFyZ2luOiAwLjI1ZW0gLjI1ZW07XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuOmhvc3Qge1xuICB6LWluZGV4OiAxMDtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbjpob3N0LFxuLnRpbWVsaW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzZW07XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICA6aG9zdCxcbi50aW1lbGluZSB7XG4gICAgaGVpZ2h0OiAzLjc1ZW07XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICA6aG9zdCxcbi50aW1lbGluZSB7XG4gICAgaGVpZ2h0OiAzLjc1ZW07XG4gIH1cbn1cblxuLnRpbWVsaW5lIHtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDUxQzJDLCAjMDUxQzJDIDQwJSwgIzBCMjQ1MyA2MCUsICMxRjQwRTYgMTAwJSk7XG59XG5cbi5ibG9jayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmJsb2NrLmhvdXIgLmJhciB7XG4gIGhlaWdodDogNDAlO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmJsb2NrLmhvdXIgLmJhciB7XG4gICAgZGlzcGxheTogaW5pdGlhbDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5ibG9jay5ob3VyIC5iYXIge1xuICAgIGRpc3BsYXk6IGluaXRpYWw7XG4gIH1cbn1cbi5ibG9jayAuYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMnB4O1xuICBoZWlnaHQ6IDIwJTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAtMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmJsb2NrIC5iYXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYmxvY2sgLmJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLmJsb2NrIC50ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDQ1JTtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBjb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5ibG9jayAudGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5ibG9jayAudGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbiAgfVxufVxuLmJsb2NrOmZpcnN0LWNoaWxkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5ibG9jazpudGgtY2hpbGQoNG4tMSkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYmxvY2s6bnRoLWNoaWxkKDRuLTEpIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5cbi5vZmZzZXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNjUpO1xufVxuXG4uYWN0aXZlLXRpbWUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuLmFjdGl2ZS10aW1lIC5iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAycHg7XG4gIGhlaWdodDogMjAwJTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAtMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uZGF0ZSxcbi50aW1lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDEwMCU7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0wLjI1ZW0pO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmRhdGUgLnRleHQsXG4udGltZSAudGV4dCB7XG4gIHBhZGRpbmc6IDAgMC41ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uZGF0ZSBidXR0b24sXG4udGltZSBidXR0b24ge1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuXG4uZGF0ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0yLjVlbSk7XG59XG5cbi50aW1lIHtcbiAgcGFkZGluZzogMC41ZW07XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIGN1cnNvcjogZ3JhYjtcbn1cbi50aW1lOmFjdGl2ZSB7XG4gIGN1cnNvcjogZ3JhYmJpbmc7XG59XG5cbi5waWNrZXJzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC4yNWVtO1xufVxuLnBpY2tlcnMgPiAqIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAwLjI1ZW0gMC4yNWVtO1xufSIsIlxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkY29sb3I6ICMwMDAsICRkZXB0aDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAxcHggKiAoJGRlcHRoIC0gMSkgcmdiYSgjMDAwLCAuMiksXG4gICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLFxuICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], dateChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], _container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/explore/zoom-controls/zoom-controls.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shell/explore/zoom-controls/zoom-controls.component.ts ***!
  \************************************************************************/
/*! exports provided: ZoomControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZoomControlsComponent", function() { return ZoomControlsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");





const _c0 = function () { return { type: "icon", class: "material-icons", content: "add" }; };
const _c1 = function () { return { type: "icon", class: "material-icons", content: "remove" }; };
const _c2 = function () { return { type: "icon", class: "material-icons", content: "replay" }; };
class ZoomControlsComponent {
    constructor() {
        /** Emitter for changes to the zoom value */
        this.zoomChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emitter for changes to the position */
        this.positionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.min_zoom = 1;
        this.max_zoom = 10;
    }
    ngOnInit() {
    }
    zoomIn() {
        this.zoom = (this.zoom || this.min_zoom) * 1.2;
        if (this.zoom > this.max_zoom) {
            this.zoom = this.max_zoom;
        }
        this.zoomChange.emit(this.zoom);
    }
    zoomOut() {
        this.zoom = (this.zoom || this.min_zoom) * (1 / 1.2);
        if (this.zoom < this.min_zoom) {
            this.zoom = this.min_zoom;
        }
        this.zoomChange.emit(this.zoom);
    }
    reset() {
        this.zoom = this.min_zoom;
        this.position = { x: 0.5, y: 0.5 };
        this.zoomChange.emit(this.zoom);
        this.positionChange.emit(this.position);
    }
}
ZoomControlsComponent.ɵfac = function ZoomControlsComponent_Factory(t) { return new (t || ZoomControlsComponent)(); };
ZoomControlsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ZoomControlsComponent, selectors: [["a-zoom-controls"]], inputs: { zoom: "zoom", position: "position" }, outputs: { zoomChange: "zoomChange", positionChange: "positionChange" }, decls: 7, vars: 6, consts: [[1, "zoom-control"], ["mat-icon-button", "", "name", "zoom-in", 3, "tapped"], [3, "icon"], ["mat-icon-button", "", "name", "zoom-out", 3, "tapped"], ["mat-icon-button", "", "name", "reset", 3, "tapped"]], template: function ZoomControlsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function ZoomControlsComponent_Template_button_tapped_1_listener() { return ctx.zoomIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function ZoomControlsComponent_Template_button_tapped_3_listener() { return ctx.zoomOut(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function ZoomControlsComponent_Template_button_tapped_5_listener() { return ctx.reset(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_2__["ɵb"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]], styles: [".zoom-control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: #fff;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n\nbutton[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 0;\n  border-bottom: 1px solid #ccc;\n}\n\nbutton[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n\napp-icon[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGVsbC9leHBsb3JlL3pvb20tY29udHJvbHMvem9vbS1jb250cm9scy5jb21wb25lbnQuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL21peGlucy5zY3NzIiwic3JjL2FwcC9zaGVsbC9leHBsb3JlL3pvb20tY29udHJvbHMvem9vbS1jb250cm9scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VDREEsaUhBQUE7QUNBSjs7QUZLQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBRUZKOztBRkdJO0VBQ0ksWUFBQTtBRURSOztBRktBO0VBQ0ksZ0JBQUE7QUVGSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2V4cGxvcmUvem9vbS1jb250cm9scy96b29tLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5AaW1wb3J0ICdtaXhpbnMnO1xuXG4uem9vbS1jb250cm9sIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3c7XG59XG5cbmJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbn1cblxuYXBwLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG4iLCJcbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGNvbG9yOiAjMDAwLCAkZGVwdGg6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMXB4ICogKCRkZXB0aCAtIDEpIHJnYmEoIzAwMCwgLjIpLFxuICAgICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSxcbiAgICAgICAgICAgICAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG59XG4iLCIuem9vbS1jb250cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuYnV0dG9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xufVxuYnV0dG9uOmxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbmFwcC1pY29uIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ZoomControlsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-zoom-controls',
                templateUrl: './zoom-controls.component.html',
                styleUrls: ['./zoom-controls.component.scss']
            }]
    }], function () { return []; }, { zoom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], zoomChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], positionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=shell-explore-explore-module-es2015.js.map