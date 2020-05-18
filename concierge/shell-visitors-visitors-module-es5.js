function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-visitors-visitors-module"], {
  /***/
  "./src/app/shell/visitors/overlays/visitors-form-modal/event-form/event-form.component.ts":
  /*!************************************************************************************************!*\
    !*** ./src/app/shell/visitors/overlays/visitors-form-modal/event-form/event-form.component.ts ***!
    \************************************************************************************************/

  /*! exports provided: EventFormComponent */

  /***/
  function srcAppShellVisitorsOverlaysVisitorsFormModalEventFormEventFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventFormComponent", function () {
      return EventFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_data_users_user_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/data/users/user.class */
    "./src/app/services/data/users/user.class.ts");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _visitor_form_visitor_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../visitor-form/visitor-form.component */
    "./src/app/shell/visitors/overlays/visitors-form-modal/visitor-form/visitor-form.component.ts");

    var _c0 = function _c0() {
      return {
        "class": "material-icons",
        content: "delete"
      };
    };

    function EventFormComponent_form_0_div_1_ng_container_23_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a-visitor-form", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("personChange", function EventFormComponent_form_0_div_1_ng_container_23_div_1_Template_a_visitor_form_personChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r6.replaceVisitor($event, i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function EventFormComponent_form_0_div_1_ng_container_23_div_1_Template_button_tapped_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var item_r3 = ctx_r10.$implicit;
          var i_r4 = ctx_r10.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r9.removeVisitor(item_r3, i_r4);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r5.event)("person", item_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
      }
    }

    function EventFormComponent_form_0_div_1_ng_container_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventFormComponent_form_0_div_1_ng_container_23_div_1_Template, 4, 4, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r3.external);
      }
    }

    var _c1 = function _c1() {
      return {
        "class": "material-icons",
        content: "event"
      };
    };

    var _c2 = function _c2() {
      return {
        "class": "material-icons",
        content: "add"
      };
    };

    function EventFormComponent_form_0_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "S");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Title");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Title is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, EventFormComponent_form_0_div_1_ng_container_23_Template, 2, 1, "ng-container", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function EventFormComponent_form_0_div_1_Template_button_tapped_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r12.addVisitor();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "app-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Add visitor");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r1.event.start_time, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", ctx_r1.event.duration > 0 ? ctx_r1.event.end_time : "", "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r1.event.organiser == null ? null : ctx_r1.event.organiser.name) || ctx_r1.event.organiser_email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.attendees)("ngForTrackBy", ctx_r1.trackByFn);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("add", true);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
      }
    }

    function EventFormComponent_form_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventFormComponent_form_0_div_1_Template, 31, 11, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event);
      }
    }

    var EventFormComponent =
    /*#__PURE__*/
    function () {
      function EventFormComponent(_service) {
        _classCallCheck(this, EventFormComponent);

        this._service = _service;
        /** List of attendees in the booking */

        this.attendees = [];
      }

      _createClass(EventFormComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /* istanbul ignore else */
          if (changes.event || changes.form) {
            this.attendees = this.form.controls.attendees.value;
          }
        }
      }, {
        key: "addVisitor",
        value: function addVisitor() {
          var list = this.form.controls.attendees.value;
          list.push(new src_app_services_data_users_user_class__WEBPACK_IMPORTED_MODULE_1__["User"]({
            visitor: true
          }));
          this.form.controls.attendees.setValue(list);
        }
        /** Replace visitor with updated values */

      }, {
        key: "replaceVisitor",
        value: function replaceVisitor(item, index) {
          var attendees = this.attendees;
          attendees.splice(index, 1, item);
          this.attendees = attendees;

          this._service.Users.addFrom('visitor-modal', item.toJSON(), 'other');

          this.form.controls.attendees.setValue(attendees);
        }
        /** Remove visitor from attendee list */

      }, {
        key: "removeVisitor",
        value: function removeVisitor(item, index) {
          var attendees = this.attendees;
          attendees.splice(index, 1);
          this.form.controls.attendees.setValue(attendees);
        }
      }, {
        key: "trackByFn",
        value: function trackByFn(index, item) {
          return index;
        }
      }]);

      return EventFormComponent;
    }();

    EventFormComponent.ɵfac = function EventFormComponent_Factory(t) {
      return new (t || EventFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]));
    };

    EventFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EventFormComponent,
      selectors: [["a-event-form"]],
      inputs: {
        event: "event",
        form: "form"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "formGroup", 4, "ngIf"], [3, "formGroup"], ["class", "visitor-booking", 4, "ngIf"], [1, "visitor-booking"], [1, "details"], [1, "icon"], [3, "icon"], [1, "time"], [1, "host"], [1, "staff"], [1, "name"], [1, "title"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "title", "placeholder", "Meeting Title", "formControlName", "title"], [1, "actions"], [1, "attendees"], [1, "bar"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["mat-button", "", "type", "button", "name", "add", 3, "tapped"], [1, "content"], [1, "text"], ["class", "visitor", 4, "ngIf"], [1, "visitor"], [3, "event", "person", "personChange"], ["mat-icon-button", "", "name", "remove", 3, "tapped"]],
      template: function EventFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EventFormComponent_form_0_Template, 2, 2, "form", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatError"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__["ɵb"], _visitor_form_visitor_form_component__WEBPACK_IMPORTED_MODULE_10__["VisitorFormComponent"]],
      styles: ["[_nghost-%COMP%] {\n  font-size: 0.9em;\n}\n.visitor-booking[_ngcontent-%COMP%] {\n  transition: background 200ms;\n  background-color: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.showing[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n}\n.showing[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  color: #1937ea;\n}\n.details[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  padding: 0.5em 0;\n  transition: opacity 200ms;\n}\n.details.blur[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  background-color: #fff;\n}\n.details[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.5em;\n}\n.details[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  width: 5.75rem;\n  font-size: 0.9em;\n}\n.details[_ngcontent-%COMP%]   .host[_ngcontent-%COMP%] {\n  width: 13.25em;\n}\n.details[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  width: 12em;\n}\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2em;\n  width: 2em;\n  border-radius: 100%;\n  background-color: #ccc;\n  font-size: 1.5em;\n}\n.time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.65);\n}\n.title[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 1em;\n  width: 18.25em;\n}\n.host[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n}\n.status[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 500;\n  width: 3.5em;\n}\n.staff[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.5em;\n  width: 1.5em;\n  margin-right: 0.5em;\n  border-radius: 4px;\n  border: 3px solid #1937ea;\n  font-weight: 600;\n  font-size: 0.8em;\n  color: #1937ea;\n}\n.attendees[_ngcontent-%COMP%] {\n  position: relative;\n}\n.attendees[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -0.65em;\n  left: 2.15em;\n  width: 2px;\n  background-color: #999;\n  bottom: 2em;\n}\n.toggle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\nlabel[_ngcontent-%COMP%] {\n  display: none;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 100%;\n}\nmat-form-field[_ngcontent-%COMP%]   mat-error[_ngcontent-%COMP%] {\n  margin-top: -0.5em;\n}\n.actions[_ngcontent-%COMP%] {\n  width: 4em;\n}\n.add[_ngcontent-%COMP%] {\n  position: relative;\n  background: none;\n  border: none;\n  padding-left: 4em;\n  color: rgba(0, 0, 0, 0.85);\n  height: 4em;\n  width: 100%;\n  border-radius: 0;\n}\n.add[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.add[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2em;\n  width: 2em;\n  margin-right: 0.5em;\n  border-radius: 100%;\n  border: 2px dotted rgba(0, 0, 0, 0.6);\n  background: none;\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 1.5em;\n}\n.add[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1.5em;\n  top: 50%;\n  left: 2.25em;\n  height: 2px;\n  min-height: 0;\n  background-color: #999;\n  transform: translate(0, -50%);\n}\n.visitor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.visitor[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-right: 2.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvdmlzaXRvcnMvb3ZlcmxheXMvdmlzaXRvcnMtZm9ybS1tb2RhbC9ldmVudC1mb3JtL2V2ZW50LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL3Zpc2l0b3JzL292ZXJsYXlzL3Zpc2l0b3JzLWZvcm0tbW9kYWwvZXZlbnQtZm9ybS9ldmVudC1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQWdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQzNDQTtFQUNJLGdCQUFBO0FDT0o7QURKQTtFQUNJLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSwyQ0FBQTtBQ09KO0FESkE7RUFDSSx5QkFBQTtBQ09KO0FETEk7RUFDSSxjREdRO0FFSWhCO0FESEE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0FDTUo7QURKSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ01SO0FESEk7RUFDSSxlQUFBO0FDS1I7QURGSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0lSO0FEREk7RUFDSSxjQUFBO0FDR1I7QURBSTtFQUNJLFdBQUE7QUNFUjtBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0NKO0FER0k7RUFDSSwwQkFBQTtBQ0FSO0FESUE7RUFDSSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNESjtBRElBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUNESjtBRElBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUNESjtBRElBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjRDlFWTtBRTZFaEI7QURJQTtFQUNJLGtCQUFBO0FDREo7QURFSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FDQVI7QURJQTtFQUNJLGlCQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7QUNESjtBRElBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUNESjtBREdJO0VBQ0ksa0JBQUE7QUNEUjtBREtBO0VBQ0ksVUFBQTtBQ0ZKO0FES0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDRko7QURJSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0ZSO0FES0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDSFI7QURNSTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FDSlI7QURRQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0xKO0FET0k7RUFDSSxvQkFBQTtBQ0xSIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvdmlzaXRvcnMvb3ZlcmxheXMvdmlzaXRvcnMtZm9ybS1tb2RhbC9ldmVudC1mb3JtL2V2ZW50LWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICMxOTM3ZWE7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMDUxYzJjO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuOmhvc3Qge1xuICAgIGZvbnQtc2l6ZTogLjllbTtcbn1cblxuLnZpc2l0b3ItYm9va2luZyB7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAyMDBtcztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCMwMDAsIC4xKTtcbn1cblxuLnNob3dpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG5cbiAgICAudG9nZ2xlIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIH1cbn1cblxuLmRldGFpbHMge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMC41ZW0gMDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuXG4gICAgJi5ibHVyIHtcbiAgICAgICAgb3BhY2l0eTogLjM1O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgID4gKiB7XG4gICAgICAgIG1hcmdpbjogMCAwLjVlbTtcbiAgICB9XG5cbiAgICAudGltZSB7XG4gICAgICAgIHdpZHRoOiA1Ljc1cmVtO1xuICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgfVxuXG4gICAgLmhvc3Qge1xuICAgICAgICB3aWR0aDogMTMuMjVlbTtcbiAgICB9XG5cbiAgICAubG9jYXRpb24ge1xuICAgICAgICB3aWR0aDogMTJlbTtcbiAgICB9XG59XG5cbi5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLnRpbWUge1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogcmdiYSgjMDAwLCAwLjY1KTtcbiAgICB9XG59XG5cbi50aXRsZSB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDFlbTtcbiAgICB3aWR0aDogMTguMjVlbTtcbn1cblxuLmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc3RhdHVzIHtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB3aWR0aDogMy41ZW07XG59XG5cbi5zdGFmZiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIG1hcmdpbi1yaWdodDogLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgJGNvbG9yLXByaW1hcnk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xufVxuXG4uYXR0ZW5kZWVzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLmJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtLjY1ZW07XG4gICAgICAgIGxlZnQ6IDIuMTVlbTtcbiAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICAgICAgYm90dG9tOiAyZW07XG4gICAgfVxufVxuXG4udG9nZ2xlIHtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxubGFiZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICBoZWlnaHQ6IDMuMjVlbTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIG1hdC1lcnJvciB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0uNWVtO1xuICAgIH1cbn1cblxuLmFjdGlvbnMge1xuICAgIHdpZHRoOiA0ZW07XG59XG5cbi5hZGQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBwYWRkaW5nLWxlZnQ6IDRlbTtcbiAgICBjb2xvcjogcmdiYSgjMDAwLCAuODUpO1xuICAgIGhlaWdodDogNGVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjVlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgYm9yZGVyOiAycHggZG90dGVkIHJnYmEoIzAwMCwgLjYpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBjb2xvcjogcmdiYSgjMDAwLCAuNik7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxuXG4gICAgLmJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMi4yNWVtO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgbWluLWhlaWdodDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG4gICAgfVxufVxuXG4udmlzaXRvciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyLjI1ZW07XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuOmhvc3Qge1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4udmlzaXRvci1ib29raW5nIHtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAyMDBtcztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLnNob3dpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xufVxuLnNob3dpbmcgLnRvZ2dsZSB7XG4gIGNvbG9yOiAjMTkzN2VhO1xufVxuXG4uZGV0YWlscyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNWVtIDA7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXM7XG59XG4uZGV0YWlscy5ibHVyIHtcbiAgb3BhY2l0eTogMC4zNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbi5kZXRhaWxzID4gKiB7XG4gIG1hcmdpbjogMCAwLjVlbTtcbn1cbi5kZXRhaWxzIC50aW1lIHtcbiAgd2lkdGg6IDUuNzVyZW07XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG4uZGV0YWlscyAuaG9zdCB7XG4gIHdpZHRoOiAxMy4yNWVtO1xufVxuLmRldGFpbHMgLmxvY2F0aW9uIHtcbiAgd2lkdGg6IDEyZW07XG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4udGltZSBzcGFuIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42NSk7XG59XG5cbi50aXRsZSB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMWVtO1xuICB3aWR0aDogMTguMjVlbTtcbn1cblxuLmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uc3RhdHVzIHtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgd2lkdGg6IDMuNWVtO1xufVxuXG4uc3RhZmYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgd2lkdGg6IDEuNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJvcmRlcjogM3B4IHNvbGlkICMxOTM3ZWE7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGNvbG9yOiAjMTkzN2VhO1xufVxuXG4uYXR0ZW5kZWVzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmF0dGVuZGVlcyAuYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0wLjY1ZW07XG4gIGxlZnQ6IDIuMTVlbTtcbiAgd2lkdGg6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgYm90dG9tOiAyZW07XG59XG5cbi50b2dnbGUge1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGhlaWdodDogMy4yNWVtO1xuICB3aWR0aDogMTAwJTtcbn1cbm1hdC1mb3JtLWZpZWxkIG1hdC1lcnJvciB7XG4gIG1hcmdpbi10b3A6IC0wLjVlbTtcbn1cblxuLmFjdGlvbnMge1xuICB3aWR0aDogNGVtO1xufVxuXG4uYWRkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHBhZGRpbmctbGVmdDogNGVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg1KTtcbiAgaGVpZ2h0OiA0ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAwO1xufVxuLmFkZCAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYWRkIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDJweCBkb3R0ZWQgcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBiYWNrZ3JvdW5kOiBub25lO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBmb250LXNpemU6IDEuNWVtO1xufVxuLmFkZCAuYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMS41ZW07XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAyLjI1ZW07XG4gIGhlaWdodDogMnB4O1xuICBtaW4taGVpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cblxuLnZpc2l0b3Ige1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnZpc2l0b3IgYnV0dG9uIHtcbiAgbWFyZ2luLXJpZ2h0OiAyLjI1ZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'a-event-form',
          templateUrl: './event-form.component.html',
          styleUrls: ['./event-form.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_2__["ApplicationService"]
        }];
      }, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/visitors/overlays/visitors-form-modal/visitor-form/visitor-form.component.ts":
  /*!****************************************************************************************************!*\
    !*** ./src/app/shell/visitors/overlays/visitors-form-modal/visitor-form/visitor-form.component.ts ***!
    \****************************************************************************************************/

  /*! exports provided: VisitorFormComponent */

  /***/
  function srcAppShellVisitorsOverlaysVisitorsFormModalVisitorFormVisitorFormComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitorFormComponent", function () {
      return VisitorFormComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_services_data_users_user_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data/users/user.class */
    "./src/app/services/data/users/user.class.ts");
    /* harmony import */


    var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/base.directive */
    "./src/app/shared/base.directive.ts");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    function VisitorFormComponent_form_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function VisitorFormComponent_form_2_Template_input_blur_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.updatePerson();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("blur", function VisitorFormComponent_form_2_Template_input_blur_13_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.updatePerson();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-error");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "A valid email address is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
      }
    }

    var _c0 = function _c0() {
      return {
        "class": "material-icons",
        content: "face"
      };
    };

    var VisitorFormComponent =
    /*#__PURE__*/
    function (_src_app_shared_base_) {
      _inherits(VisitorFormComponent, _src_app_shared_base_);

      var _super = _createSuper(VisitorFormComponent);

      function VisitorFormComponent(_service) {
        var _this;

        _classCallCheck(this, VisitorFormComponent);

        _this = _super.call(this);
        _this._service = _service;
        /** Emitter for changes to the person */

        _this.personChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this;
      }

      _createClass(VisitorFormComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /* istanbul ignore else */
          if (changes.person) {
            delete this.form;
            this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.person.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2)]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.person.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email])
            });
          }
        }
      }, {
        key: "updatePerson",
        value: function updatePerson() {
          this.form.markAllAsTouched();
          /* istanbul ignore else */

          if (this.form.valid) {
            this.person = new src_app_services_data_users_user_class__WEBPACK_IMPORTED_MODULE_2__["User"](Object.assign(Object.assign({}, this.form.value), {
              visitor: true
            }));
            this.personChange.emit(this.person);
          }
        }
      }]);

      return VisitorFormComponent;
    }(src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]);

    VisitorFormComponent.ɵfac = function VisitorFormComponent_Factory(t) {
      return new (t || VisitorFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]));
    };

    VisitorFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VisitorFormComponent,
      selectors: [["a-visitor-form"]],
      inputs: {
        event: "event",
        person: "person",
        field: "field"
      },
      outputs: {
        personChange: "personChange"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 3,
      consts: [[1, "icon"], [3, "icon"], [3, "formGroup", 4, "ngIf"], [1, "bar"], [3, "formGroup"], [1, "details"], [1, "name"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Name", "formControlName", "name", 3, "blur"], [1, "email"], ["for", "email"], ["matInput", "", "name", "email", "type", "email", "placeholder", "Email Address", "formControlName", "email", 3, "blur"]],
      template: function VisitorFormComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VisitorFormComponent_form_2_Template, 16, 1, "form", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
        }
      },
      directives: [_shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatError"]],
      styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding-left: 4em;\n  flex: 1;\n  transition: opacity 200ms;\n}\n.not-match[_nghost-%COMP%] {\n  opacity: 0.35;\n  background-color: #fff;\n}\n[_nghost-%COMP%]:last-child   .details[_ngcontent-%COMP%] {\n  border: none;\n}\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-width: 50%;\n  align-items: center;\n  height: 4em;\n}\nlabel[_ngcontent-%COMP%] {\n  display: none;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 100%;\n}\nmat-form-field[_ngcontent-%COMP%]   mat-error[_ngcontent-%COMP%] {\n  margin-top: -0.5em;\n}\n.actions[_ngcontent-%COMP%] {\n  width: 4em;\n}\n.name[_ngcontent-%COMP%], .email[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 25%;\n  margin-right: 0.5em;\n}\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2em;\n  width: 2em;\n  margin-right: 0.5em;\n  border-radius: 100%;\n  background-color: #ccc;\n  font-size: 1.5em;\n}\n.title[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 1em;\n}\n.user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n}\nform[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.staff[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.5em;\n  width: 1.5em;\n  margin-right: 0.5em;\n  border-radius: 4px;\n  border: 3px solid #1937ea;\n  font-weight: 600;\n  font-size: 0.8em;\n  color: #1937ea;\n}\n.bar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1.5em;\n  top: 50%;\n  left: 2.15em;\n  height: 2px;\n  min-height: 0;\n  background-color: #999;\n  transform: translate(0, -50%);\n}\n.empty[_ngcontent-%COMP%] {\n  width: 4.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvdmlzaXRvcnMvb3ZlcmxheXMvdmlzaXRvcnMtZm9ybS1tb2RhbC92aXNpdG9yLWZvcm0vdmlzaXRvci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC92aXNpdG9ycy9vdmVybGF5cy92aXNpdG9ycy1mb3JtLW1vZGFsL3Zpc2l0b3ItZm9ybS92aXNpdG9yLWZvcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBZ0NBOztjQUFBO0FBYUE7O3NCQUFBO0FDM0NBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtBQ09KO0FETEk7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7QUNPUjtBREhRO0VBQ0ksWUFBQTtBQ0taO0FEQUE7RUFDSSxhQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNHSjtBREFBO0VBQ0ksYUFBQTtBQ0dKO0FEQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtBQ0dKO0FEREk7RUFDSSxrQkFBQTtBQ0dSO0FEQ0E7RUFDSSxVQUFBO0FDRUo7QURDQTs7RUFFSSxPQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDRUo7QURDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQ0E7RUFDSSxPQUFBO0VBQ0EsY0FBQTtBQ0VKO0FEQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ0VKO0FEQ0E7RUFDSSxPQUFBO0FDRUo7QURDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0R6RVk7QUUyRWhCO0FEQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQ0VKO0FEQ0E7RUFDSSxZQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC92aXNpdG9ycy9vdmVybGF5cy92aXNpdG9ycy1mb3JtLW1vZGFsL3Zpc2l0b3ItZm9ybS92aXNpdG9yLWZvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICMxOTM3ZWE7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMDUxYzJjO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuOmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA0ZW07XG4gICAgZmxleDogMTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xuXG4gICAgJi5ub3QtbWF0Y2gge1xuICAgICAgICBvcGFjaXR5OiAuMzU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgLmRldGFpbHMge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogNTAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA0ZW07XG59XG5cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgaGVpZ2h0OiAzLjI1ZW07XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBtYXQtZXJyb3Ige1xuICAgICAgICBtYXJnaW4tdG9wOiAtLjVlbTtcbiAgICB9XG59XG5cbi5hY3Rpb25zIHtcbiAgICB3aWR0aDogNGVtO1xufVxuXG4ubmFtZSxcbi5lbWFpbCB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDI1JTtcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG59XG5cbi5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi50aXRsZSB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDFlbTtcbn1cblxuLnVzZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG5mb3JtIHtcbiAgICBmbGV4OiAxO1xufVxuXG4uc3RhZmYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbn1cblxuLmJhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiAyLjE1ZW07XG4gICAgaGVpZ2h0OiAycHg7XG4gICAgbWluLWhlaWdodDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTk5O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uZW1wdHkge1xuICAgIHdpZHRoOiA0LjVlbTtcbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbjpob3N0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDRlbTtcbiAgZmxleDogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbn1cbjpob3N0Lm5vdC1tYXRjaCB7XG4gIG9wYWNpdHk6IDAuMzU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG46aG9zdDpsYXN0LWNoaWxkIC5kZXRhaWxzIHtcbiAgYm9yZGVyOiBub25lO1xufVxuXG4uZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogNTAlO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDRlbTtcbn1cblxubGFiZWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGhlaWdodDogMy4yNWVtO1xuICB3aWR0aDogMTAwJTtcbn1cbm1hdC1mb3JtLWZpZWxkIG1hdC1lcnJvciB7XG4gIG1hcmdpbi10b3A6IC0wLjVlbTtcbn1cblxuLmFjdGlvbnMge1xuICB3aWR0aDogNGVtO1xufVxuXG4ubmFtZSxcbi5lbWFpbCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMjUlO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLnRpdGxlIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAxZW07XG59XG5cbi51c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuZm9ybSB7XG4gIGZsZXg6IDE7XG59XG5cbi5zdGFmZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEuNWVtO1xuICB3aWR0aDogMS41ZW07XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAzcHggc29saWQgIzE5MzdlYTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgY29sb3I6ICMxOTM3ZWE7XG59XG5cbi5iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxLjVlbTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDIuMTVlbTtcbiAgaGVpZ2h0OiAycHg7XG4gIG1pbi1oZWlnaHQ6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuXG4uZW1wdHkge1xuICB3aWR0aDogNC41ZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitorFormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'a-visitor-form',
          templateUrl: './visitor-form.component.html',
          styleUrls: ['./visitor-form.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]
        }];
      }, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        person: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        field: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        personChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/visitors/overlays/visitors-form-modal/visitors-form-modal.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/shell/visitors/overlays/visitors-form-modal/visitors-form-modal.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: VisitorsFormModalComponent */

  /***/
  function srcAppShellVisitorsOverlaysVisitorsFormModalVisitorsFormModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitorsFormModalComponent", function () {
      return VisitorsFormModalComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/base.directive */
    "./src/app/shared/base.directive.ts");
    /* harmony import */


    var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/overlays/confirm-modal/confirm-modal.component */
    "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");
    /* harmony import */


    var _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./event-form/event-form.component */
    "./src/app/shell/visitors/overlays/visitors-form-modal/event-form/event-form.component.ts");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");

    var _c0 = function _c0() {
      return {
        type: "icon",
        "class": "material-icons",
        content: "close"
      };
    };

    function VisitorsFormModalComponent_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function VisitorsFormModalComponent_main_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-event-form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r1.form)("event", ctx_r1.booking);
      }
    }

    function VisitorsFormModalComponent_mat_dialog_actions_6_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function VisitorsFormModalComponent_mat_dialog_actions_6_button_4_Template_button_tapped_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r6["delete"]();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Delete ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VisitorsFormModalComponent_mat_dialog_actions_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-dialog-actions");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "footer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function VisitorsFormModalComponent_mat_dialog_actions_6_Template_button_tapped_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r8.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VisitorsFormModalComponent_mat_dialog_actions_6_button_4_Template, 2, 0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.has_attendees);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.booking.id);
      }
    }

    function VisitorsFormModalComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.loading);
      }
    }

    var VisitorsFormModalComponent =
    /*#__PURE__*/
    function (_src_app_shared_base_2) {
      _inherits(VisitorsFormModalComponent, _src_app_shared_base_2);

      var _super2 = _createSuper(VisitorsFormModalComponent);

      function VisitorsFormModalComponent(_service, _dialog_ref, _dialog, _data) {
        var _this2;

        _classCallCheck(this, VisitorsFormModalComponent);

        _this2 = _super2.call(this);
        _this2._service = _service;
        _this2._dialog_ref = _dialog_ref;
        _this2._dialog = _dialog;
        _this2._data = _data;
        /** Emitter for user action on the modal */

        _this2.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this2;
      }
      /** Visitor booking data */


      _createClass(VisitorsFormModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.booking.title, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            attendees: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.booking.attendees, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(1)])
          });
          this.subscription('title', this.form.controls.title.valueChanges.subscribe(function (value) {
            return _this3.booking.storePendingChange('title', value);
          }));
          this.subscription('attendees', this.form.controls.attendees.valueChanges.subscribe(function (value) {
            _this3.booking.storePendingChange('attendee_emails', value.map(function (user) {
              return user.email;
            }));
          }));
        }
        /** Delete visitor booking */

      }, {
        key: "delete",
        value: function _delete() {
          var _this4 = this;

          var ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], Object.assign(Object.assign({}, src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["CONFIRM_METADATA"]), {
            data: {
              title: 'Delete meeting',
              content: 'Are you sure you wish to delete this meeting?',
              icon: {
                type: 'icon',
                "class": 'material-icons',
                content: 'delete'
              },
              action: 'Ok'
            }
          }));

          this.subscription('confirm', ref.componentInstance.event.subscribe(function (event) {
            /* istanbul ignore else */
            if (event.reason === 'done') {
              /* istanbul ignore else */
              if (_this4.booking.id) {
                _this4.loading = 'Deleting visitor booking...';
                _this4._dialog_ref.disableClose = true;

                _this4.booking["delete"]().then(function () {
                  _this4.event.emit({
                    reason: 'done'
                  });

                  _this4._service.notifySuccess('Successfully removed visitors.');

                  _this4._dialog_ref.close();
                }, function (err) {
                  _this4.loading = null;

                  _this4._service.notifyError("Failed to remove visitors. Error: ".concat(err.message || err));

                  _this4._dialog_ref.disableClose = false;
                });
              }
            }

            ref.close();
          }));
        }
        /** Save changes to visitor booking */

      }, {
        key: "save",
        value: function save() {
          var _this5 = this;

          this.timeout('save', function () {
            _this5.loading = 'Saving visitor booking...';

            _this5.form.markAllAsTouched();

            _this5._dialog_ref.disableClose = true;
            /* istanbul ignore else */

            if (_this5.booking.has_changes && _this5.form.valid) {
              _this5.booking.save().then(function (bkn) {
                _this5.event.emit({
                  reason: 'done',
                  metadata: bkn
                });

                _this5._service.notifySuccess(_this5.booking.id ? 'Successfully updated visitors.' : 'Successfully added visitors.');

                _this5._dialog_ref.close();
              }, function (err) {
                _this5.loading = null;

                _this5._service.notifyError("Failed to ".concat(_this5.booking.id ? 'update' : 'add', " visitors. Error: ").concat(err.message || err));

                _this5._dialog_ref.disableClose = false;
              });
            }
          });
        }
      }, {
        key: "booking",
        get: function get() {
          return this._data.booking;
        }
        /** Whether form fields contain an attendee */

      }, {
        key: "has_attendees",
        get: function get() {
          return this.form && this.form.controls.attendees.value && this.form.controls.attendees.value.length;
        }
      }]);

      return VisitorsFormModalComponent;
    }(src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]);

    VisitorsFormModalComponent.ɵfac = function VisitorsFormModalComponent_Factory(t) {
      return new (t || VisitorsFormModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
    };

    VisitorsFormModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VisitorsFormModalComponent,
      selectors: [["a-visitors-form-modal"]],
      outputs: {
        event: "event"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 5,
      consts: [[1, "heading"], ["mat-icon-button", "", "mat-dialog-close", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [4, "ngIf"], ["load_state", ""], ["mat-icon-button", "", "mat-dialog-close", ""], [3, "icon"], [3, "form", "event"], ["mat-button", "", "name", "save", 3, "disabled", "tapped"], ["mat-button", "", "name", "delete", "class", "error", 3, "tapped", 4, "ngIf"], ["mat-button", "", "name", "delete", 1, "error", 3, "tapped"], [2, "min-height", "12em"], [1, "info-block", "center"], [1, "icon"], ["diameter", "32"], [1, "text"]],
      template: function VisitorsFormModalComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, VisitorsFormModalComponent_button_3_Template, 2, 2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VisitorsFormModalComponent_main_5_Template, 2, 2, "main", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VisitorsFormModalComponent_mat_dialog_actions_6_Template, 5, 2, "mat-dialog-actions", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, VisitorsFormModalComponent_ng_template_7_Template, 6, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.booking.id ? "Edit" : "New", " Visitors");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_8__["IconComponent"], _event_form_event_form_component__WEBPACK_IMPORTED_MODULE_9__["EventFormComponent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]],
      styles: [".heading[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\n\nfooter[_ngcontent-%COMP%] {\n  width: 100%;\n  text-align: center;\n}\n\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 10em;\n}\n\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 24em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvdmlzaXRvcnMvb3ZlcmxheXMvdmlzaXRvcnMtZm9ybS1tb2RhbC92aXNpdG9ycy1mb3JtLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC92aXNpdG9ycy9vdmVybGF5cy92aXNpdG9ycy1mb3JtLW1vZGFsL3Zpc2l0b3JzLWZvcm0tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxPQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FDQUo7O0FERUk7RUFDSSxlQUFBO0FDQVI7O0FESUE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3Zpc2l0b3JzL292ZXJsYXlzL3Zpc2l0b3JzLWZvcm0tbW9kYWwvdmlzaXRvcnMtZm9ybS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmhlYWRpbmcge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiA1MCU7XG59XG5cbmZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgbWluLXdpZHRoOiAxMGVtO1xuICAgIH1cbn1cblxubWFpbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi13aWR0aDogMjRlbTtcbn1cbiIsIi5oZWFkaW5nIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA1MCU7XG59XG5cbmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5mb290ZXIgYnV0dG9uIHtcbiAgbWluLXdpZHRoOiAxMGVtO1xufVxuXG5tYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDI0ZW07XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitorsFormModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'a-visitors-form-modal',
          templateUrl: './visitors-form-modal.component.html',
          styleUrls: ['./visitors-form-modal.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/visitors/timeline/item/item.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shell/visitors/timeline/item/item.component.ts ***!
    \****************************************************************/

  /*! exports provided: VisitorBookingItemComponent */

  /***/
  function srcAppShellVisitorsTimelineItemItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitorBookingItemComponent", function () {
      return VisitorBookingItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_globals_angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/globals/angular-animations */
    "./src/app/shared/globals/angular-animations.ts");
    /* harmony import */


    var _overlays_visitors_form_modal_visitors_form_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../overlays/visitors-form-modal/visitors-form-modal.component */
    "./src/app/shell/visitors/overlays/visitors-form-modal/visitors-form-modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _shared_components_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../shared/components/action-icon/action-icon.component */
    "./src/app/shared/components/action-icon/action-icon.component.ts");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _visitor_visitor_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../visitor/visitor.component */
    "./src/app/shell/visitors/timeline/visitor/visitor.component.ts");
    /* harmony import */


    var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @acaprojects/ngx-pipes */
    "./node_modules/@acaprojects/ngx-pipes/__ivy_ngcc__/fesm2015/acaprojects-ngx-pipes.js");

    function VisitorBookingItemComponent_div_0_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.event.start_time, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", ctx_r1.event.duration > 0 ? ctx_r1.event.end_time : "", "");
      }
    }

    function VisitorBookingItemComponent_div_0_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "All Day");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    function VisitorBookingItemComponent_div_0_a_visitor_31_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a-visitor", 22);
      }

      if (rf & 2) {
        var item_r4 = ctx.$implicit;

        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r3.event)("person", item_r4)("search", ctx_r3.search);
      }
    }

    var _c0 = function _c0() {
      return {
        "class": "material-icons",
        content: "event"
      };
    };

    var _c1 = function _c1() {
      return {
        "class": "material-icons",
        content: "mail"
      };
    };

    var _c2 = function _c2() {
      return {
        "class": "material-icons",
        content: "event_available"
      };
    };

    var _c3 = function _c3() {
      return {
        "class": "material-icons",
        content: "edit"
      };
    };

    var _c4 = function _c4(a1) {
      return {
        "class": "material-icons",
        content: a1
      };
    };

    function VisitorBookingItemComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, VisitorBookingItemComponent_div_0_ng_container_5_Template, 4, 2, "ng-container", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, VisitorBookingItemComponent_div_0_ng_container_6_Template, 2, 0, "ng-container", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "S");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "safe");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "action-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "action-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function VisitorBookingItemComponent_div_0_Template_button_tapped_24_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r5.openEditModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "action-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function VisitorBookingItemComponent_div_0_Template_button_tapped_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.show_attendees = !ctx_r7.show_attendees;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "app-icon", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, VisitorBookingItemComponent_div_0_a_visitor_31_Template, 1, 3, "a-visitor", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("showing", ctx_r0.show_attendees);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("blur", ctx_r0.search);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.event.all_day);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event.all_day);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r0.event.organiser == null ? null : ctx_r0.event.organiser.name) || ctx_r0.event.organiser_email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.event.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r0.event.space == null ? null : ctx_r0.event.space.name) || ctx_r0.event.location);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](20, 18, ctx_r0.mail_url, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c2));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c3));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c4, ctx_r0.show_attendees ? "keyboard_arrow_down" : "keyboard_arrow_right"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@show", ctx_r0.show_attendees ? "show" : "hide");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.event.attendees);
      }
    }

    var VisitorBookingItemComponent =
    /*#__PURE__*/
    function () {
      function VisitorBookingItemComponent(_dialog) {
        _classCallCheck(this, VisitorBookingItemComponent);

        this._dialog = _dialog;
      }
      /** Display string for checkin statuses of all attendees */


      _createClass(VisitorBookingItemComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /* istanbul ignore else */
          if (changes.search) {
            this.show_attendees = !!this.search;
          }
        }
      }, {
        key: "openEditModal",
        value: function openEditModal() {
          this._dialog.open(_overlays_visitors_form_modal_visitors_form_modal_component__WEBPACK_IMPORTED_MODULE_2__["VisitorsFormModalComponent"], {
            data: {
              booking: this.event
            }
          });
        }
      }, {
        key: "status",
        get: function get() {
          var checked_in_users = this.event.checked_in;

          var _this$event$attendees = this.event.attendees.reduce(function (counts, user) {
            /* istanbul ignore else */
            if (user.external) {
              counts.count++;
              /* istanbul ignore else */

              if (checked_in_users.indexOf(user.email) >= 0) {
                counts.checked_in++;
              }
            }

            return counts;
          }, {
            checked_in: 0,
            count: 0
          }),
              checked_in = _this$event$attendees.checked_in,
              count = _this$event$attendees.count;

          return "".concat(checked_in, " / ").concat(count);
        }
        /** URL for mailing all attendees of the event */

      }, {
        key: "mail_url",
        get: function get() {
          return "mailto:".concat(this.event.attendee_emails.join(','), "?Subject=\"").concat(this.event.title, "\"%20at%20").concat(this.event.start_time, ",%20").concat(this.event.date_string);
        }
      }]);

      return VisitorBookingItemComponent;
    }();

    VisitorBookingItemComponent.ɵfac = function VisitorBookingItemComponent_Factory(t) {
      return new (t || VisitorBookingItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]));
    };

    VisitorBookingItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VisitorBookingItemComponent,
      selectors: [["a-visitor-booking"]],
      inputs: {
        event: "event",
        search: "search"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 1,
      vars: 1,
      consts: [["class", "visitor-booking", 3, "showing", 4, "ngIf"], [1, "visitor-booking"], [1, "details"], [1, "icon"], [3, "icon"], [1, "time"], [4, "ngIf"], [1, "host"], [1, "staff"], [1, "name"], [1, "title"], [1, "location"], [1, "status"], [1, "actions"], ["mat-icon-button", "", "matTooltip", "Email Visitors", "name", "email-all", 3, "href"], ["mat-icon-button", "", "name", "checkin-all", "matTooltip", "Checkin All Visitors"], ["mat-icon-button", "", "matTooltip", "Edit Visitors", "name", "edit", 3, "tapped"], [1, "toggle"], ["mat-icon-button", "", "name", "show-attendees", 3, "tapped"], [1, "attendees"], [1, "bar"], [3, "event", "person", "search", 4, "ngFor", "ngForOf"], [3, "event", "person", "search"]],
      template: function VisitorBookingItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, VisitorBookingItemComponent_div_0_Template, 32, 27, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatAnchor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_7__["MatTooltip"], _shared_components_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_8__["ActionIconComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _visitor_visitor_component__WEBPACK_IMPORTED_MODULE_10__["VisitorComponent"]],
      pipes: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_11__["ɵa"]],
      styles: ["[_nghost-%COMP%] {\n  font-size: 0.9em;\n}\n.visitor-booking[_ngcontent-%COMP%] {\n  transition: background 200ms;\n  background-color: #fff;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.showing[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n}\n.showing[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%] {\n  color: #1937ea;\n}\n.details[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 10;\n  display: flex;\n  align-items: center;\n  padding: 0.5em 0;\n  transition: opacity 200ms;\n}\n.details.blur[_ngcontent-%COMP%] {\n  opacity: 0.35;\n  background-color: #fff;\n}\n.details[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.5em;\n}\n.details[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  width: 7.75rem;\n  font-size: 0.9em;\n}\n.details[_ngcontent-%COMP%]   .host[_ngcontent-%COMP%] {\n  width: 13.25em;\n}\n.details[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  width: 12em;\n}\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2em;\n  width: 2em;\n  border-radius: 100%;\n  background-color: #ccc;\n  font-size: 1.5em;\n}\n.time[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: rgba(0, 0, 0, 0.65);\n}\n.title[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 1em;\n}\n.host[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n}\n.status[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  font-weight: 500;\n  width: 3.5em;\n}\n.staff[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.5em;\n  width: 1.5em;\n  margin-right: 0.5em;\n  border-radius: 4px;\n  border: 3px solid #1937ea;\n  font-weight: 600;\n  font-size: 0.8em;\n  color: #1937ea;\n}\n.attendees[_ngcontent-%COMP%] {\n  position: relative;\n}\n.attendees[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -0.65em;\n  left: 2.15em;\n  width: 2px;\n  background-color: #999;\n  bottom: 2em;\n}\n.toggle[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvdmlzaXRvcnMvdGltZWxpbmUvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC92aXNpdG9ycy90aW1lbGluZS9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBZ0NBOztjQUFBO0FBYUE7O3NCQUFBO0FDM0NBO0VBQ0ksZ0JBQUE7QUNPSjtBREpBO0VBQ0ksNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJDQUFBO0FDT0o7QURKQTtFQUNJLHlCQUFBO0FDT0o7QURMSTtFQUNJLGNER1E7QUVJaEI7QURIQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNNSjtBREpJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0FDTVI7QURISTtFQUNJLGVBQUE7QUNLUjtBREZJO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0FDSVI7QURESTtFQUNJLGNBQUE7QUNHUjtBREFJO0VBQ0ksV0FBQTtBQ0VSO0FERUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURHSTtFQUNJLDBCQUFBO0FDQVI7QURJQTtFQUNJLE9BQUE7RUFDQSxjQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDREo7QURJQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDREo7QURJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0Q3RVk7QUU0RWhCO0FESUE7RUFDSSxrQkFBQTtBQ0RKO0FERUk7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0FSO0FESUE7RUFDSSxpQkFBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvdmlzaXRvcnMvdGltZWxpbmUvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjMTkzN2VhO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuXG4kY29sb3ItdGVybmFyeTogIzA1MWMyYztcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG4iLCJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbjpob3N0IHtcbiAgICBmb250LXNpemU6IC45ZW07XG59XG5cbi52aXNpdG9yLWJvb2tpbmcge1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjAwbXM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgjMDAwLCAuMSk7XG59XG5cbi5zaG93aW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xuXG4gICAgLnRvZ2dsZSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICB9XG59XG5cbi5kZXRhaWxzIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuNWVtIDA7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcblxuICAgICYuYmx1ciB7XG4gICAgICAgIG9wYWNpdHk6IC4zNTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG5cbiAgICA+ICoge1xuICAgICAgICBtYXJnaW46IDAgMC41ZW07XG4gICAgfVxuXG4gICAgLnRpbWUge1xuICAgICAgICB3aWR0aDogNy43NXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgIH1cblxuICAgIC5ob3N0IHtcbiAgICAgICAgd2lkdGg6IDEzLjI1ZW07XG4gICAgfVxuXG4gICAgLmxvY2F0aW9uIHtcbiAgICAgICAgd2lkdGg6IDEyZW07XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi50aW1lIHtcbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6IHJnYmEoIzAwMCwgMC42NSk7XG4gICAgfVxufVxuXG4udGl0bGUge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAxZW07XG59XG5cbi5ob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnN0YXR1cyB7XG4gICAgZm9udC1zaXplOiAuOWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgd2lkdGg6IDMuNWVtO1xufVxuXG4uc3RhZmYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEuNWVtO1xuICAgIHdpZHRoOiAxLjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJvcmRlcjogM3B4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbn1cblxuLmF0dGVuZGVlcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5iYXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogLS42NWVtO1xuICAgICAgICBsZWZ0OiAyLjE1ZW07XG4gICAgICAgIHdpZHRoOiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gICAgICAgIGJvdHRvbTogMmVtO1xuICAgIH1cbn1cblxuLnRvZ2dsZSB7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG46aG9zdCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi52aXNpdG9yLWJvb2tpbmcge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDIwMG1zO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uc2hvd2luZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG4uc2hvd2luZyAudG9nZ2xlIHtcbiAgY29sb3I6ICMxOTM3ZWE7XG59XG5cbi5kZXRhaWxzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC41ZW0gMDtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcbn1cbi5kZXRhaWxzLmJsdXIge1xuICBvcGFjaXR5OiAwLjM1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLmRldGFpbHMgPiAqIHtcbiAgbWFyZ2luOiAwIDAuNWVtO1xufVxuLmRldGFpbHMgLnRpbWUge1xuICB3aWR0aDogNy43NXJlbTtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cbi5kZXRhaWxzIC5ob3N0IHtcbiAgd2lkdGg6IDEzLjI1ZW07XG59XG4uZGV0YWlscyAubG9jYXRpb24ge1xuICB3aWR0aDogMTJlbTtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyZW07XG4gIHdpZHRoOiAyZW07XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG59XG5cbi50aW1lIHNwYW4ge1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjY1KTtcbn1cblxuLnRpdGxlIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAxZW07XG59XG5cbi5ob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnN0YXR1cyB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHdpZHRoOiAzLjVlbTtcbn1cblxuLnN0YWZmIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjMTkzN2VhO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogIzE5MzdlYTtcbn1cblxuLmF0dGVuZGVlcyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5hdHRlbmRlZXMgLmJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMC42NWVtO1xuICBsZWZ0OiAyLjE1ZW07XG4gIHdpZHRoOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gIGJvdHRvbTogMmVtO1xufVxuXG4udG9nZ2xlIHtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59Il19 */"],
      data: {
        animation: [src_app_shared_globals_angular_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_SHOW_CONTRACT_EXPAND"]]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitorBookingItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'a-visitor-booking',
          templateUrl: './item.component.html',
          styleUrls: ['./item.component.scss'],
          animations: [src_app_shared_globals_angular_animations__WEBPACK_IMPORTED_MODULE_1__["ANIMATION_SHOW_CONTRACT_EXPAND"]]
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
        }];
      }, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/visitors/timeline/timeline.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/shell/visitors/timeline/timeline.component.ts ***!
    \***************************************************************/

  /*! exports provided: VisitorTimelineComponent */

  /***/
  function srcAppShellVisitorsTimelineTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitorTimelineComponent", function () {
      return VisitorTimelineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/base.directive */
    "./src/app/shared/base.directive.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _item_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./item/item.component */
    "./src/app/shell/visitors/timeline/item/item.component.ts");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");

    function VisitorTimelineComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VisitorTimelineComponent_ng_container_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VisitorTimelineComponent_ng_container_15_ng_container_2_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VisitorTimelineComponent_ng_container_15_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-visitor-booking", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VisitorTimelineComponent_ng_container_15_ng_container_2_div_2_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var booking_r6 = ctx.$implicit;
        var i_r7 = ctx.index;

        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", booking_r6)("search", ctx_r5.search);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.date_display === "Today" && ctx_r5.active_index === i_r7);
      }
    }

    function VisitorTimelineComponent_ng_container_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisitorTimelineComponent_ng_container_15_div_1_Template, 2, 0, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, VisitorTimelineComponent_ng_container_15_ng_container_2_Template, 3, 3, "ng-container", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.date_display === "Today" && ctx_r1.active_index === 0 - 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filtered_bookings);
      }
    }

    var _c0 = function _c0() {
      return {
        "class": "material-icons",
        content: "close"
      };
    };

    function VisitorTimelineComponent_ng_template_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("No visitors ", ctx_r3.search ? "matching " + "\"" + ctx_r3.search + "\"" : "", " for ", ctx_r3.date_display, "");
      }
    }

    var VisitorTimelineComponent =
    /*#__PURE__*/
    function (_src_app_shared_base_3) {
      _inherits(VisitorTimelineComponent, _src_app_shared_base_3);

      var _super3 = _createSuper(VisitorTimelineComponent);

      function VisitorTimelineComponent(_service) {
        var _this6;

        _classCallCheck(this, VisitorTimelineComponent);

        _this6 = _super3.call(this);
        _this6._service = _service;
        /** List of visitor bookings for the current date */

        _this6.visitor_bookings = [];
        /** List of filtered bookings */

        _this6.filtered_bookings = [];
        /** Subject holding the value of the search */

        _this6.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        return _this6;
      }
      /** Display string for the selected date */


      _createClass(VisitorTimelineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this._service.Organisation.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(function (_) {
            return _;
          })).subscribe(function () {
            _this7.initBookings();

            _this7.subscription('building', _this7._service.Organisation.listen('active_building').subscribe(function (_) {
              return _this7.search$.next("".concat(_this7.date, "|").concat(_.id));
            }));

            _this7.interval('update_bookings', function () {
              return _this7.search$.next("".concat(_this7.date, "|").concat(dayjs__WEBPACK_IMPORTED_MODULE_4__().unix()));
            }, 30 * 1000);
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /* istanbul ignore else */
          if (changes.date) {
            this.search$.next("".concat(this.date));
          }
          /* istanbul ignore else */


          if (changes.search) {
            this.filtered_bookings = this.filter(this.search);
          }
        }
        /** Filter the visitor bookings */

      }, {
        key: "filter",
        value: function filter() {
          var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          var search = str.toLowerCase();
          return this.visitor_bookings.filter(function (booking) {
            return booking.attendees.find(function (user) {
              return user.name.toLowerCase().indexOf(search) >= 0 || user.email.toLowerCase().indexOf(search) >= 0;
            });
          });
        }
      }, {
        key: "initBookings",
        value: function initBookings() {
          var _this8 = this;

          // Listen for input changes
          this.search_results$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_) {
            _this8.loading = true;
            var date = dayjs__WEBPACK_IMPORTED_MODULE_4__(_this8.date).startOf('d');
            var zone = _this8._service.Organisation.building.id;
            return _this8._service.Spaces.query({
              zone_ids: zone,
              available_from: date.unix(),
              available_to: date.endOf('d').unix()
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (_) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (list) {
            var bookings = list.reduce(function (items, space) {
              return items.concat(space.bookingsFor(_this8.date));
            }, []);
            bookings.sort(function (a, b) {
              return a.date - b.date;
            });
            return bookings.filter(function (bkn) {
              return bkn.has_visitors;
            });
          })); // Process API results

          this.subscription('search_results', this.search_results$.subscribe(function (list) {
            _this8.loading = false;
            _this8.visitor_bookings = list;
            _this8.filtered_bookings = _this8.filter(_this8.search);
          }));
        }
      }, {
        key: "date_display",
        get: function get() {
          var date = dayjs__WEBPACK_IMPORTED_MODULE_4__(this.date);
          return date.isSame(dayjs__WEBPACK_IMPORTED_MODULE_4__(), 'd') ? 'Today' : date.format('DD MMM YYYY');
        }
      }, {
        key: "active_index",
        get: function get() {
          /* istanbul ignore else */
          if (this.date_display === 'Today') {
            var date = dayjs__WEBPACK_IMPORTED_MODULE_4__().startOf('m').valueOf();
            return this.filtered_bookings.findIndex(function (bkn) {
              return date > bkn.date;
            });
          }

          return -1;
        }
      }]);

      return VisitorTimelineComponent;
    }(src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]);

    VisitorTimelineComponent.ɵfac = function VisitorTimelineComponent_Factory(t) {
      return new (t || VisitorTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]));
    };

    VisitorTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VisitorTimelineComponent,
      selectors: [["visitor-timeline"]],
      inputs: {
        date: "date",
        search: "search"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 18,
      vars: 3,
      consts: [[1, "visitor-timeline"], ["class", "loader", 4, "ngIf"], [1, "heading"], [1, "icon"], [1, "time"], [1, "host"], [1, "title"], [1, "location"], [1, "state"], [1, "list"], [4, "ngIf", "ngIfElse"], ["empty_state", ""], [1, "loader"], ["mode", "indeterminate"], ["class", "current-line", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "current-line"], [1, "triangle"], [3, "event", "search"], [1, "info-block"], [3, "icon"], [1, "text"]],
      template: function VisitorTimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, VisitorTimelineComponent_div_1_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Time");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Host");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Location");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, VisitorTimelineComponent_ng_container_15_Template, 3, 2, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, VisitorTimelineComponent_ng_template_16_Template, 5, 4, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filtered_bookings && ctx.filtered_bookings.length)("ngIfElse", _r2);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _item_item_component__WEBPACK_IMPORTED_MODULE_8__["VisitorBookingItemComponent"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"]],
      styles: [".visitor-timeline[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: #ecf1f5;\n}\na-visitor-booking[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.heading[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n  font-size: 0.8em;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  width: 100%;\n  z-index: 1;\n}\n.heading[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 0.25em 0;\n  text-transform: capitalize;\n}\n.heading[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 5.5em;\n}\n.heading[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  width: 10em;\n}\n.heading[_ngcontent-%COMP%]   .host[_ngcontent-%COMP%] {\n  width: 16em;\n}\n.heading[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.heading[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  width: 14.25em;\n}\n.heading[_ngcontent-%COMP%]   .state[_ngcontent-%COMP%] {\n  width: 19.25em;\n}\n.current-line[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 2px;\n  background-color: #1937ea;\n  z-index: 99;\n}\n.current-line[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0;\n  transform: translateY(-50%);\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 6px 0 6px 6px;\n  border-color: transparent transparent transparent #1937ea;\n}\n.list[_ngcontent-%COMP%] {\n  min-height: 50%;\n  flex: 1;\n  width: 100%;\n  overflow: auto;\n}\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvdmlzaXRvcnMvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL3Zpc2l0b3JzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQWdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQzNDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtBQ09KO0FESkE7RUFDSSxXQUFBO0VBQ0EsMkNBQUE7QUNPSjtBREpBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ09KO0FETEk7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0FDT1I7QURKSTtFQUNJLFlBQUE7QUNNUjtBREhJO0VBQ0ksV0FBQTtBQ0tSO0FERkk7RUFDSSxXQUFBO0FDSVI7QURESTtFQUNJLE9BQUE7QUNHUjtBREFJO0VBQ0ksY0FBQTtBQ0VSO0FEQ0k7RUFDSSxjQUFBO0FDQ1I7QURHQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5QkR6Q1k7RUMwQ1osV0FBQTtBQ0FKO0FERUk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsMkJBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSx5REFBQTtBQ0FSO0FESUE7RUFDSSxlQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDREo7QURJQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3Zpc2l0b3JzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjMTkzN2VhO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuXG4kY29sb3ItdGVybmFyeTogIzA1MWMyYztcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG4iLCJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi52aXNpdG9yLXRpbWVsaW5lIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMWY1O1xufVxuXG5hLXZpc2l0b3ItYm9va2luZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIzAwMCwgLjEpO1xufVxuXG4uaGVhZGluZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgjMDAwLCAuMSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTtcblxuICAgID4gKiB7XG4gICAgICAgIHBhZGRpbmc6IC4yNWVtIDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgICAgd2lkdGg6IDUuNWVtO1xuICAgIH1cblxuICAgIC50aW1lIHtcbiAgICAgICAgd2lkdGg6IDEwZW07XG4gICAgfVxuXG4gICAgLmhvc3Qge1xuICAgICAgICB3aWR0aDogMTZlbTtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5sb2NhdGlvbiB7XG4gICAgICAgIHdpZHRoOiAxNC4yNWVtO1xuICAgIH1cblxuICAgIC5zdGF0ZSB7XG4gICAgICAgIHdpZHRoOiAxOS4yNWVtO1xuICAgIH1cbn1cblxuLmN1cnJlbnQtbGluZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIHotaW5kZXg6IDk5O1xuXG4gICAgLnRyaWFuZ2xlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItd2lkdGg6IDZweCAwIDZweCA2cHg7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgJGNvbG9yLXByaW1hcnk7XG4gICAgfVxufVxuXG4ubGlzdCB7XG4gICAgbWluLWhlaWdodDogNTAlO1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5sb2FkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICB6LWluZGV4OiA5OTk7XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4udmlzaXRvci10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjFmNTtcbn1cblxuYS12aXNpdG9yLWJvb2tpbmcge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmhlYWRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuLmhlYWRpbmcgPiAqIHtcbiAgcGFkZGluZzogMC4yNWVtIDA7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufVxuLmhlYWRpbmcgLmljb24ge1xuICB3aWR0aDogNS41ZW07XG59XG4uaGVhZGluZyAudGltZSB7XG4gIHdpZHRoOiAxMGVtO1xufVxuLmhlYWRpbmcgLmhvc3Qge1xuICB3aWR0aDogMTZlbTtcbn1cbi5oZWFkaW5nIC50aXRsZSB7XG4gIGZsZXg6IDE7XG59XG4uaGVhZGluZyAubG9jYXRpb24ge1xuICB3aWR0aDogMTQuMjVlbTtcbn1cbi5oZWFkaW5nIC5zdGF0ZSB7XG4gIHdpZHRoOiAxOS4yNWVtO1xufVxuXG4uY3VycmVudC1saW5lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTM3ZWE7XG4gIHotaW5kZXg6IDk5O1xufVxuLmN1cnJlbnQtbGluZSAudHJpYW5nbGUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogNnB4IDAgNnB4IDZweDtcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAjMTkzN2VhO1xufVxuXG4ubGlzdCB7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbiAgZmxleDogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDRweDtcbiAgei1pbmRleDogOTk5O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitorTimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'visitor-timeline',
          templateUrl: './timeline.component.html',
          styleUrls: ['./timeline.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]
        }];
      }, {
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/visitors/timeline/visitor/visitor.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shell/visitors/timeline/visitor/visitor.component.ts ***!
    \**********************************************************************/

  /*! exports provided: VisitorComponent */

  /***/
  function srcAppShellVisitorsTimelineVisitorVisitorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitorComponent", function () {
      return VisitorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _shared_components_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../shared/components/action-icon/action-icon.component */
    "./src/app/shared/components/action-icon/action-icon.component.ts");
    /* harmony import */


    var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @acaprojects/ngx-pipes */
    "./node_modules/@acaprojects/ngx-pipes/__ivy_ngcc__/fesm2015/acaprojects-ngx-pipes.js");

    function VisitorComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "S");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function VisitorComponent_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.status);
      }
    }

    var _c0 = function _c0() {
      return {
        "class": "material-icons",
        content: "event_available"
      };
    };

    function VisitorComponent_action_icon_14_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "action-icon", 1);
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    var _c1 = function _c1() {
      return {
        "class": "material-icons",
        content: "face"
      };
    };

    var _c2 = function _c2() {
      return {
        "class": "material-icons",
        content: "mail"
      };
    };

    var VisitorComponent =
    /*#__PURE__*/
    function () {
      function VisitorComponent(_element, _renderer) {
        _classCallCheck(this, VisitorComponent);

        this._element = _element;
        this._renderer = _renderer;
      }
      /** Whether user is a match for  */


      _createClass(VisitorComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.search) {
            if (this.search && !this.is_match) {
              this._renderer.addClass(this._element.nativeElement, 'not-match');
            } else {
              this._renderer.removeClass(this._element.nativeElement, 'not-match');
            }
          }
        }
      }, {
        key: "is_match",
        get: function get() {
          var search = (this.search || '').toLowerCase();
          return this.person.name.toLowerCase().indexOf(search) >= 0 || this.person.email.toLowerCase().indexOf(search) >= 0;
        }
        /** URL for mailing all attendees of the event */

      }, {
        key: "mail_url",
        get: function get() {
          return "mailto:".concat(this.person.email, "?subject=\"").concat(this.event.title, "\"%20at%20").concat(this.event.start_time, ",%20").concat(this.event.date_string).concat(this.event.organiser_email.toLowerCase() !== this.person.email ? '&cc=' + this.event.organiser_email : '');
        }
      }]);

      return VisitorComponent;
    }();

    VisitorComponent.ɵfac = function VisitorComponent_Factory(t) {
      return new (t || VisitorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
    };

    VisitorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VisitorComponent,
      selectors: [["a-visitor"]],
      inputs: {
        event: "event",
        person: "person",
        search: "search"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 18,
      vars: 13,
      consts: [[1, "icon"], [3, "icon"], [1, "details"], [1, "user"], ["class", "staff", 4, "ngIf"], [1, "name"], [1, "title"], ["class", "status", 4, "ngIf"], [1, "actions"], ["mat-icon-button", "", "matTooltip", "Email Visitor", 3, "href"], ["mat-icon-button", "", "matTooltip", "Checkin Visitor"], [3, "icon", 4, "ngIf"], ["mat-icon-button", "", 3, "disabled"], [1, "empty"], [1, "bar"], [1, "staff"], [1, "status"]],
      template: function VisitorComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, VisitorComponent_div_4_Template, 2, 0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VisitorComponent_div_8_Template, 2, 1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "safe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "action-icon", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, VisitorComponent_action_icon_14_Template, 1, 2, "action-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "div", 14);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.person.external);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx.person == null ? null : ctx.person.name) || (ctx.person == null ? null : ctx.person.email));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person.external);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](11, 8, ctx.mail_url, "url"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.person.external);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
        }
      },
      directives: [_shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatAnchor"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_4__["MatTooltip"], _shared_components_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_5__["ActionIconComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]],
      pipes: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_6__["ɵa"]],
      styles: ["[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  padding-left: 4em;\n  transition: opacity 200ms;\n}\n.not-match[_nghost-%COMP%] {\n  opacity: 0.35;\n  background-color: #fff;\n}\n[_nghost-%COMP%]:last-child   .details[_ngcontent-%COMP%] {\n  border: none;\n}\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  min-width: 50%;\n  align-items: center;\n  height: 4em;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2em;\n  width: 2em;\n  margin-right: 0.5em;\n  border-radius: 100%;\n  border: 2px dotted rgba(0, 0, 0, 0.6);\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 1.5em;\n}\n.title[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 1em;\n}\n.user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n}\n.staff[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.5em;\n  width: 1.5em;\n  margin-right: 0.5em;\n  border-radius: 4px;\n  border: 3px solid #1937ea;\n  font-weight: 600;\n  font-size: 0.8em;\n  color: #1937ea;\n}\n.bar[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 1.5em;\n  top: 50%;\n  left: 2.15em;\n  height: 2px;\n  min-height: 0;\n  background-color: #999;\n  transform: translate(0, -50%);\n}\n.empty[_ngcontent-%COMP%] {\n  width: 4.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvdmlzaXRvcnMvdGltZWxpbmUvdmlzaXRvci92aXNpdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC92aXNpdG9ycy90aW1lbGluZS92aXNpdG9yL3Zpc2l0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBZ0NBOztjQUFBO0FBYUE7O3NCQUFBO0FDM0NBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDT0o7QURMSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQ09SO0FESFE7RUFDSSxZQUFBO0FDS1o7QURBQTtFQUNJLGFBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDJDQUFBO0FDR0o7QURBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDR0o7QURBQTtFQUNJLE9BQUE7RUFDQSxjQUFBO0FDR0o7QURBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FDR0o7QURBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0Q5Q1k7QUVpRGhCO0FEQUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQ0dKO0FEQUE7RUFDSSxZQUFBO0FDR0oiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC92aXNpdG9ycy90aW1lbGluZS92aXNpdG9yL3Zpc2l0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICMxOTM3ZWE7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMDUxYzJjO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuOmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZy1sZWZ0OiA0ZW07XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcztcblxuICAgICYubm90LW1hdGNoIHtcbiAgICAgICAgb3BhY2l0eTogLjM1O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIC5kZXRhaWxzIHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogNGVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKCMwMDAsIC4xKTtcbn1cblxuLmljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIG1hcmdpbi1yaWdodDogLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJvcmRlcjogMnB4IGRvdHRlZCByZ2JhKCMwMDAsIC42KTtcbiAgICBjb2xvcjogcmdiYSgjMDAwLCAuNik7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLnRpdGxlIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMWVtO1xufVxuXG4udXNlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG59XG5cbi5zdGFmZiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIG1hcmdpbi1yaWdodDogLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyOiAzcHggc29saWQgJGNvbG9yLXByaW1hcnk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xufVxuXG4uYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDIuMTVlbTtcbiAgICBoZWlnaHQ6IDJweDtcbiAgICBtaW4taGVpZ2h0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM5OTk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5lbXB0eSB7XG4gICAgd2lkdGg6IDQuNWVtO1xufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuOmhvc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogNGVtO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zO1xufVxuOmhvc3Qubm90LW1hdGNoIHtcbiAgb3BhY2l0eTogMC4zNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbjpob3N0Omxhc3QtY2hpbGQgLmRldGFpbHMge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNGVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYm9yZGVyOiAycHggZG90dGVkIHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLnRpdGxlIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAxZW07XG59XG5cbi51c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnN0YWZmIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMS41ZW07XG4gIHdpZHRoOiAxLjVlbTtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3JkZXI6IDNweCBzb2xpZCAjMTkzN2VhO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBjb2xvcjogIzE5MzdlYTtcbn1cblxuLmJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEuNWVtO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogMi4xNWVtO1xuICBoZWlnaHQ6IDJweDtcbiAgbWluLWhlaWdodDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCwgLTUwJSk7XG59XG5cbi5lbXB0eSB7XG4gIHdpZHRoOiA0LjVlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'a-visitor',
          templateUrl: './visitor.component.html',
          styleUrls: ['./visitor.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
        }];
      }, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        person: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        search: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/visitors/visitors.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/shell/visitors/visitors.component.ts ***!
    \******************************************************/

  /*! exports provided: VisitorsComponent */

  /***/
  function srcAppShellVisitorsVisitorsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitorsComponent", function () {
      return VisitorsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/services/data/bookings/booking.class */
    "./src/app/services/data/bookings/booking.class.ts");
    /* harmony import */


    var _overlays_visitors_form_modal_visitors_form_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./overlays/visitors-form-modal/visitors-form-modal.component */
    "./src/app/shell/visitors/overlays/visitors-form-modal/visitors-form-modal.component.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/components/sidebar/sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/components/topbar-header/topbar-header.component */
    "./src/app/shared/components/topbar-header/topbar-header.component.ts");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./timeline/timeline.component */
    "./src/app/shell/visitors/timeline/timeline.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");

    var _c0 = function _c0() {
      return {
        "class": "material-icons",
        content: "close"
      };
    };

    function VisitorsComponent_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function VisitorsComponent_button_8_Template_button_tapped_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.search_str = "";
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
      }
    }

    function VisitorsComponent_button_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function VisitorsComponent_button_11_Template_button_tapped_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.newVisitorMeeting();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "add");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Visitors");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1() {
      return {
        "class": "material-icons",
        content: "search"
      };
    };

    var VisitorsComponent =
    /*#__PURE__*/
    function () {
      function VisitorsComponent(_dialog, _service) {
        _classCallCheck(this, VisitorsComponent);

        this._dialog = _dialog;
        this._service = _service;
      }

      _createClass(VisitorsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "newVisitorMeeting",
        value: function newVisitorMeeting() {
          var date = dayjs__WEBPACK_IMPORTED_MODULE_3__();
          date = date.minute(Math.ceil(date.minute() / 5) * 5);
          var building = this._service.Organisation.building;

          var space = this._service.Spaces.find(building.visitor_space || building.holding_bay);

          var booking = new src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_1__["Booking"]({
            date: date.valueOf(),
            duration: -1,
            room_id: [space.email]
          });

          this._dialog.open(_overlays_visitors_form_modal_visitors_form_modal_component__WEBPACK_IMPORTED_MODULE_2__["VisitorsFormModalComponent"], {
            data: {
              booking: booking
            }
          });
        }
      }, {
        key: "has_visitor_space",
        get: function get() {
          var building = this._service.Organisation.building;
          return !!this._service.Spaces.find(building.visitor_space || building.holding_bay);
        }
      }]);

      return VisitorsComponent;
    }();

    VisitorsComponent.ɵfac = function VisitorsComponent_Factory(t) {
      return new (t || VisitorsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]));
    };

    VisitorsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VisitorsComponent,
      selectors: [["app-visitors"]],
      decls: 12,
      vars: 10,
      consts: [[1, "visitors"], [1, "group"], [3, "date", "dateChange"], [1, "input-wrapper"], ["appearance", "outline"], ["matPrefix", "", 3, "icon"], ["matInput", "", "name", "visitor-name", "placeholder", "Search...", 3, "ngModel", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", 3, "tapped", 4, "ngIf"], [3, "date", "search"], ["mat-button", "", "name", "new", "class", "new-item", 3, "tapped", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", 3, "tapped"], [3, "icon"], ["mat-button", "", "name", "new", 1, "new-item", 3, "tapped"], [1, "content"], [1, "material-icons"], [1, "text"]],
      template: function VisitorsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a-topbar-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function VisitorsComponent_Template_a_topbar_header_dateChange_3_listener($event) {
            return ctx.date = $event;
          })("dateChange", function VisitorsComponent_Template_a_topbar_header_dateChange_3_listener() {
            return ctx.search_str = "";
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-icon", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function VisitorsComponent_Template_input_ngModelChange_7_listener($event) {
            return ctx.search_str = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, VisitorsComponent_button_8_Template, 2, 2, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "visitor-timeline", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, VisitorsComponent_button_11_Template, 6, 0, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rounded", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.search_str);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.search_str);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.date)("search", ctx.search_str);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.has_visitor_space);
        }
      },
      directives: [_shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_6__["SidebarComponent"], _shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_7__["TopbarHeaderComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__["VisitorTimelineComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatSuffix"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_15__["ɵb"]],
      styles: ["[_nghost-%COMP%], .visitors[_ngcontent-%COMP%], main[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.visitors[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  height: 3.5em;\n  padding: 0 0.5em;\n}\n.input-wrapper[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n}\nmain[_ngcontent-%COMP%] {\n  height: calc(100% - 3.5em);\n}\n.group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 12em;\n}\n.topbar[_ngcontent-%COMP%] {\n  padding: 0.1em 0 0.1em 0.5em;\n  height: 3.5em;\n}\n.topbar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n}\n.new-item[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1em;\n  right: 1em;\n  z-index: 999;\n  cursor: pointer;\n  height: 1.5em;\n  min-width: 1.5em;\n  padding: 0;\n  border-radius: 0.8em;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.75em;\n  border: none;\n  transition: padding 200ms;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n.new-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.new-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition: width 200ms, opacity 200ms;\n  font-size: 1.2rem;\n}\n.new-item[_ngcontent-%COMP%]:hover {\n  padding: 0 0.5em;\n}\n.new-item[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n  width: 7em;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvdmlzaXRvcnMvdmlzaXRvcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL3Zpc2l0b3JzL3Zpc2l0b3JzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQWdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQTdDQTs7MEJBQUE7QUFnQ0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMvQkE7O3NCQUFBO0FDWkE7OztFQUdJLFlBQUE7RUFDQSxXQUFBO0FDbUJKO0FEaEJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNtQko7QURoQkE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNtQko7QURqQkk7RUFDSSxpQkFBQTtBQ21CUjtBRGZBO0VBQ0ksMEJBQUE7QUNrQko7QURmQTtFQUNJLE9BQUE7RUFDQSxlQUFBO0FDa0JKO0FEZkE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7QUNrQko7QURoQkk7RUFDSSxtQkFBQTtBQ2tCUjtBRGRBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VEOUNBLGlIQUFBO0FFZ0VKO0FEZkk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2lCUjtBRGRJO0VBQ0ksUUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QUNnQlI7QURiSTtFQUNJLGdCQUFBO0FDZVI7QURiUTtFQUNJLFVBQUE7RUFDQSxVQUFBO0FDZVoiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC92aXNpdG9ycy92aXNpdG9ycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogI2YwZjBmMDtcbiRmb290ZXItYmFjazogIzI2MzIzODtcblxuJGNvbG9yLXRlcm5hcnk6ICMwNTFjMmM7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRjb2xvcjogIzAwMCwgJGRlcHRoOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDFweCAqICgkZGVwdGggLSAxKSByZ2JhKCMwMDAsIC4yKSxcbiAgICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksXG4gICAgICAgICAgICAgICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ21peGlucyc7XG5cbjpob3N0LFxuLnZpc2l0b3JzLFxubWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udmlzaXRvcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaW5wdXQtd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAzLjVlbTtcbiAgICBwYWRkaW5nOiAwIC41ZW07XG5cbiAgICBhcHAtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgIH1cbn1cblxubWFpbiB7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjVlbSk7XG59XG5cbi5ncm91cCB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDEyZW07XG59XG5cbi50b3BiYXIge1xuICAgIHBhZGRpbmc6IC4xZW0gMCAuMWVtIC41ZW07XG4gICAgaGVpZ2h0OiAzLjVlbTtcblxuICAgIG1hdC1mb3JtLWZpZWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xuICAgIH1cbn1cblxuLm5ldy1pdGVtIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxZW07XG4gICAgcmlnaHQ6IDFlbTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgbWluLXdpZHRoOiAxLjVlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuOGVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMjAwbXM7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdztcblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMjAwbXMsIG9wYWNpdHkgMjAwbXM7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBwYWRkaW5nOiAwIC41ZW07XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgd2lkdGg6IDdlbTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbjpob3N0LFxuLnZpc2l0b3JzLFxubWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi52aXNpdG9ycyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmlucHV0LXdyYXBwZXIge1xuICBoZWlnaHQ6IDMuNWVtO1xuICBwYWRkaW5nOiAwIDAuNWVtO1xufVxuLmlucHV0LXdyYXBwZXIgYXBwLWljb24ge1xuICBmb250LXNpemU6IDEuMjVlbTtcbn1cblxubWFpbiB7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy41ZW0pO1xufVxuXG4uZ3JvdXAge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDEyZW07XG59XG5cbi50b3BiYXIge1xuICBwYWRkaW5nOiAwLjFlbSAwIDAuMWVtIDAuNWVtO1xuICBoZWlnaHQ6IDMuNWVtO1xufVxuLnRvcGJhciBtYXQtZm9ybS1maWVsZCB7XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG59XG5cbi5uZXctaXRlbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAxZW07XG4gIHJpZ2h0OiAxZW07XG4gIHotaW5kZXg6IDk5OTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBoZWlnaHQ6IDEuNWVtO1xuICBtaW4td2lkdGg6IDEuNWVtO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItcmFkaXVzOiAwLjhlbTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMS43NWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIHRyYW5zaXRpb246IHBhZGRpbmcgMjAwbXM7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLm5ldy1pdGVtIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmV3LWl0ZW0gLnRleHQge1xuICB3aWR0aDogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3BhY2l0eTogMDtcbiAgdHJhbnNpdGlvbjogd2lkdGggMjAwbXMsIG9wYWNpdHkgMjAwbXM7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuLm5ldy1pdGVtOmhvdmVyIHtcbiAgcGFkZGluZzogMCAwLjVlbTtcbn1cbi5uZXctaXRlbTpob3ZlciAudGV4dCB7XG4gIHdpZHRoOiA3ZW07XG4gIG9wYWNpdHk6IDE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitorsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-visitors',
          templateUrl: './visitors.component.html',
          styleUrls: ['./visitors.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
        }, {
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shell/visitors/visitors.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/shell/visitors/visitors.module.ts ***!
    \***************************************************/

  /*! exports provided: VisitorsModule */

  /***/
  function srcAppShellVisitorsVisitorsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisitorsModule", function () {
      return VisitorsModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _visitors_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./visitors.component */
    "./src/app/shell/visitors/visitors.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./timeline/timeline.component */
    "./src/app/shell/visitors/timeline/timeline.component.ts");
    /* harmony import */


    var _timeline_item_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./timeline/item/item.component */
    "./src/app/shell/visitors/timeline/item/item.component.ts");
    /* harmony import */


    var _timeline_visitor_visitor_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./timeline/visitor/visitor.component */
    "./src/app/shell/visitors/timeline/visitor/visitor.component.ts");
    /* harmony import */


    var _overlays_visitors_form_modal_visitors_form_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./overlays/visitors-form-modal/visitors-form-modal.component */
    "./src/app/shell/visitors/overlays/visitors-form-modal/visitors-form-modal.component.ts");
    /* harmony import */


    var _overlays_visitors_form_modal_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./overlays/visitors-form-modal/event-form/event-form.component */
    "./src/app/shell/visitors/overlays/visitors-form-modal/event-form/event-form.component.ts");
    /* harmony import */


    var _overlays_visitors_form_modal_visitor_form_visitor_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./overlays/visitors-form-modal/visitor-form/visitor-form.component */
    "./src/app/shell/visitors/overlays/visitors-form-modal/visitor-form/visitor-form.component.ts");

    var ROUTES = [{
      path: '',
      component: _visitors_component__WEBPACK_IMPORTED_MODULE_4__["VisitorsComponent"]
    }, {
      path: ':level',
      component: _visitors_component__WEBPACK_IMPORTED_MODULE_4__["VisitorsComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var VisitorsModule = function VisitorsModule() {
      _classCallCheck(this, VisitorsModule);
    };

    VisitorsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: VisitorsModule
    });
    VisitorsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function VisitorsModule_Factory(t) {
        return new (t || VisitorsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VisitorsModule, {
        declarations: [_visitors_component__WEBPACK_IMPORTED_MODULE_4__["VisitorsComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__["VisitorTimelineComponent"], _timeline_item_item_component__WEBPACK_IMPORTED_MODULE_7__["VisitorBookingItemComponent"], _timeline_visitor_visitor_component__WEBPACK_IMPORTED_MODULE_8__["VisitorComponent"], _overlays_visitors_form_modal_visitors_form_modal_component__WEBPACK_IMPORTED_MODULE_9__["VisitorsFormModalComponent"], _overlays_visitors_form_modal_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_10__["EventFormComponent"], _overlays_visitors_form_modal_visitor_form_visitor_form_component__WEBPACK_IMPORTED_MODULE_11__["VisitorFormComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VisitorsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_visitors_component__WEBPACK_IMPORTED_MODULE_4__["VisitorsComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_6__["VisitorTimelineComponent"], _timeline_item_item_component__WEBPACK_IMPORTED_MODULE_7__["VisitorBookingItemComponent"], _timeline_visitor_visitor_component__WEBPACK_IMPORTED_MODULE_8__["VisitorComponent"], _overlays_visitors_form_modal_visitors_form_modal_component__WEBPACK_IMPORTED_MODULE_9__["VisitorsFormModalComponent"], _overlays_visitors_form_modal_event_form_event_form_component__WEBPACK_IMPORTED_MODULE_10__["EventFormComponent"], _overlays_visitors_form_modal_visitor_form_visitor_form_component__WEBPACK_IMPORTED_MODULE_11__["VisitorFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=shell-visitors-visitors-module-es5.js.map