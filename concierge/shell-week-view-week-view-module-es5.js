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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-week-view-week-view-module"], {
  /***/
  "./src/app/shell/week-view/day-display/day-display.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shell/week-view/day-display/day-display.component.ts ***!
    \**********************************************************************/

  /*! exports provided: WeekViewDayDisplayComponent */

  /***/
  function srcAppShellWeekViewDayDisplayDayDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeekViewDayDisplayComponent", function () {
      return WeekViewDayDisplayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _item_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./item/item.component */
    "./src/app/shell/week-view/day-display/item/item.component.ts");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");

    function WeekViewDayDisplayComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Today");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WeekViewDayDisplayComponent_ng_container_5_week_view_item_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "week-view-item", 8);
      }

      if (rf & 2) {
        var event_r5 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", event_r5);
      }
    }

    function WeekViewDayDisplayComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeekViewDayDisplayComponent_ng_container_5_week_view_item_1_Template, 1, 1, "week-view-item", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.booking_list);
      }
    }

    var _c0 = function _c0() {
      return {
        "class": "material-icons",
        content: "close"
      };
    };

    function WeekViewDayDisplayComponent_ng_template_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No events for ", ctx_r3.date_display, "");
      }
    }

    var WeekViewDayDisplayComponent =
    /*#__PURE__*/
    function () {
      function WeekViewDayDisplayComponent() {
        _classCallCheck(this, WeekViewDayDisplayComponent);

        /** List of bookings for this date */
        this.booking_list = [];
      }
      /** Display string for the set date */


      _createClass(WeekViewDayDisplayComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /* istanbul ignore else */
          if (changes.date || changes.spaces) {
            this.updateBookings();
          }
        }
      }, {
        key: "updateBookings",
        value: function updateBookings() {
          var _this = this;

          var bookings = [];
          this.spaces.forEach(function (space) {
            bookings = bookings.concat(space.bookingsFor(_this.date));
          });
          bookings.sort(function (a, b) {
            return a.date - b.date;
          });
          this.booking_list = bookings;
        }
      }, {
        key: "date_display",
        get: function get() {
          var date = dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date);
          return date.format('ddd, DD MMM YYYY');
        }
        /** Whether the date set is today */

      }, {
        key: "is_today",
        get: function get() {
          return dayjs__WEBPACK_IMPORTED_MODULE_1__(this.date).isSame(dayjs__WEBPACK_IMPORTED_MODULE_1__(), 'd');
        }
      }]);

      return WeekViewDayDisplayComponent;
    }();

    WeekViewDayDisplayComponent.ɵfac = function WeekViewDayDisplayComponent_Factory(t) {
      return new (t || WeekViewDayDisplayComponent)();
    };

    WeekViewDayDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WeekViewDayDisplayComponent,
      selectors: [["week-view-day-display"]],
      inputs: {
        date: "date",
        spaces: "spaces"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 8,
      vars: 4,
      consts: [[1, "heading"], [1, "text"], ["class", "info", 4, "ngIf"], [1, "list"], [4, "ngIf", "ngIfElse"], ["empty_state", ""], [1, "info"], [3, "event", 4, "ngFor", "ngForOf"], [3, "event"], [1, "info-block"], [1, "icon"], [3, "icon"]],
      template: function WeekViewDayDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WeekViewDayDisplayComponent_div_3_Template, 2, 0, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WeekViewDayDisplayComponent_ng_container_5_Template, 2, 1, "ng-container", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WeekViewDayDisplayComponent_ng_template_6_Template, 5, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.date_display);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.is_today);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.booking_list && ctx.booking_list.length)("ngIfElse", _r2);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _item_item_component__WEBPACK_IMPORTED_MODULE_3__["WeekViewItemComponent"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_4__["IconComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n  border-left: 1px solid #ccc;\n}\n[_nghost-%COMP%]:first-child {\n  border: none;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 0.25em 1em;\n  height: 3em;\n  border-bottom: 1px solid #ccc;\n  text-align: center;\n}\n.info[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n.list[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 50%;\n  background-color: #fff;\n  overflow: auto;\n}\n.info-block[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  opacity: 0.6;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvd2Vlay12aWV3L2RheS1kaXNwbGF5L2RheS1kaXNwbGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC93ZWVrLXZpZXcvZGF5LWRpc3BsYXkvZGF5LWRpc3BsYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQ0FKO0FERUk7RUFDSSxZQUFBO0FDQVI7QURHSTtFQUNJLFdBQUE7QUNEUjtBREtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUNGSjtBREtBO0VBQ0ksaUJBQUE7QUNGSjtBREtBO0VBQ0ksT0FBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUNGSjtBREtBO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC93ZWVrLXZpZXcvZGF5LWRpc3BsYXkvZGF5LWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xuXG4gICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cbiAgICA+ICoge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xuICAgIGhlaWdodDogM2VtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmluZm8ge1xuICAgIGZvbnQtc2l6ZTogLjc1ZW07XG59XG5cbi5saXN0IHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi1oZWlnaHQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uaW5mby1ibG9jayB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIG9wYWNpdHk6IC42O1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbn1cbjpob3N0OmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyOiBub25lO1xufVxuOmhvc3QgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBhZGRpbmc6IDAuMjVlbSAxZW07XG4gIGhlaWdodDogM2VtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NjYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5mbyB7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuXG4ubGlzdCB7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5pbmZvLWJsb2NrIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgb3BhY2l0eTogMC42O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeekViewDayDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'week-view-day-display',
          templateUrl: './day-display.component.html',
          styleUrls: ['./day-display.component.scss']
        }]
      }], null, {
        date: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        spaces: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/week-view/day-display/item/item.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/shell/week-view/day-display/item/item.component.ts ***!
    \********************************************************************/

  /*! exports provided: WeekViewItemComponent */

  /***/
  function srcAppShellWeekViewDayDisplayItemItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeekViewItemComponent", function () {
      return WeekViewItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_overlays_meeting_details_modal_meeting_details_modal_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/overlays/meeting-details-modal/meeting-details-modal.component */
    "./src/app/overlays/meeting-details-modal/meeting-details-modal.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");

    var _c0 = function _c0(a1) {
      return {
        "class": "material-icons",
        content: a1
      };
    };

    function WeekViewItemComponent_div_0_app_icon_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon", 15);
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r1.event.approved ? "done" : "event_busy"));
      }
    }

    function WeekViewItemComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function WeekViewItemComponent_div_0_Template_div_tapped_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.viewMeetingDetails();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WeekViewItemComponent_div_0_app_icon_5_Template, 1, 3, "app-icon", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Host:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Location:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Attendees:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("event" + (ctx_r0.type ? " " + ctx_r0.type : "") + (ctx_r0.event.status === "done" ? " ended" : "") + (ctx_r0.event.status === "in_progress" ? "in-progress" : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r0.event == null ? null : ctx_r0.event.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.event.all_day ? "All Day" : ctx_r0.event.time_period);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event.declined || ctx_r0.event.approved);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", (ctx_r0.event.organiser == null ? null : ctx_r0.event.organiser.name) || ctx_r0.event.organiser_email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r0.event.organiser == null ? null : ctx_r0.event.organiser.name) || ctx_r0.event.organiser_email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", (ctx_r0.event.space == null ? null : ctx_r0.event.space.name) || ctx_r0.event.location);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matTooltip", (ctx_r0.event.space == null ? null : ctx_r0.event.space.name) || ctx_r0.event.location);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r0.event.space == null ? null : ctx_r0.event.space.name) || ctx_r0.event.location, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"]((ctx_r0.event.attendees == null ? null : ctx_r0.event.attendees.length) || "0");
      }
    }

    var WeekViewItemComponent =
    /*#__PURE__*/
    function () {
      function WeekViewItemComponent(_dialog) {
        _classCallCheck(this, WeekViewItemComponent);

        this._dialog = _dialog;
      }
      /** Type of booking */


      _createClass(WeekViewItemComponent, [{
        key: "viewMeetingDetails",

        /**
         * Open modal to view bookings details
         */
        value: function viewMeetingDetails() {
          this._dialog.open(src_app_overlays_meeting_details_modal_meeting_details_modal_component__WEBPACK_IMPORTED_MODULE_1__["MeetingDetailsModalComponent"], {
            maxWidth: 'calc(100vw - 2em)',
            data: {
              booking: this.event
            }
          });
        }
      }, {
        key: "type",
        get: function get() {
          if (this.event.declined) {
            return 'cancelled';
          }

          var booking_type = this.event.type;

          if (booking_type === 'internal' && this.event.has_visitors) {
            return 'external';
          }

          return booking_type;
        }
      }]);

      return WeekViewItemComponent;
    }();

    WeekViewItemComponent.ɵfac = function WeekViewItemComponent_Factory(t) {
      return new (t || WeekViewItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
    };

    WeekViewItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WeekViewItemComponent,
      selectors: [["week-view-item"]],
      inputs: {
        event: "event"
      },
      decls: 1,
      vars: 1,
      consts: [[3, "class", "tapped", 4, "ngIf"], [3, "tapped"], [1, "heading"], [1, "text"], [1, "handle"], [3, "icon", 4, "ngIf"], [1, "details"], [1, "field", 3, "title"], ["for", "host"], ["name", "host", 1, "value"], ["for", "location"], ["name", "location", 1, "value", 3, "matTooltip"], [1, "field"], ["for", "attendees"], ["name", "attendees", 1, "value"], [3, "icon"]],
      template: function WeekViewItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, WeekViewItemComponent_div_0_Template, 22, 11, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_4__["ɵb"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltip"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"]],
      styles: [".event[_ngcontent-%COMP%] {\n  margin: 0.25em;\n  border-radius: 4px;\n  border: 1px solid #ccc;\n  overflow: hidden;\n  max-width: calc(100% - .5em);\n  transition: opacity 200ms, background-color 200ms;\n  cursor: pointer;\n  border-color: #1F40E6;\n}\n.event[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.event.in-progress[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n.event.ended[_ngcontent-%COMP%] {\n  opacity: 0.35;\n}\n.event[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background-color: #f8f8f8;\n}\n.event[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: #1F40E6;\n}\n.event[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  background-color: rgba(31, 64, 230, 0.2);\n}\n.event.pending[_ngcontent-%COMP%] {\n  border-color: rgba(31, 64, 230, 0.4);\n}\n.event.pending[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: rgba(31, 64, 230, 0.4);\n}\n.event.internal[_ngcontent-%COMP%] {\n  border-color: #E69FC7;\n}\n.event.internal[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: #E69FC7;\n}\n.event.internal[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  background-color: rgba(230, 159, 199, 0.2);\n}\n.event.internal.pending[_ngcontent-%COMP%] {\n  border-color: rgba(230, 159, 199, 0.4);\n}\n.event.internal.pending[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: rgba(230, 159, 199, 0.4);\n}\n.event.external[_ngcontent-%COMP%] {\n  border-color: #8C5AC8;\n}\n.event.external[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: #8C5AC8;\n}\n.event.external[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  background-color: rgba(140, 90, 200, 0.2);\n}\n.event.external.pending[_ngcontent-%COMP%] {\n  border-color: rgba(140, 90, 200, 0.4);\n}\n.event.external.pending[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: rgba(140, 90, 200, 0.4);\n}\n.event.training[_ngcontent-%COMP%] {\n  border-color: #F0E700;\n}\n.event.training[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: #F0E700;\n}\n.event.training[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  background-color: rgba(240, 231, 0, 0.2);\n}\n.event.training.pending[_ngcontent-%COMP%] {\n  border-color: rgba(240, 231, 0, 0.4);\n}\n.event.training.pending[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: rgba(240, 231, 0, 0.4);\n}\n.event.interview[_ngcontent-%COMP%] {\n  border-color: #348D02;\n}\n.event.interview[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: #348D02;\n}\n.event.interview[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  background-color: rgba(52, 141, 2, 0.2);\n}\n.event.interview.pending[_ngcontent-%COMP%] {\n  border-color: rgba(52, 141, 2, 0.4);\n}\n.event.interview.pending[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: rgba(52, 141, 2, 0.4);\n}\n.event.setup[_ngcontent-%COMP%] {\n  border-color: #d32f2f;\n}\n.event.setup[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: #d32f2f;\n}\n.event.setup[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  background-color: rgba(211, 47, 47, 0.2);\n}\n.event.setup.pending[_ngcontent-%COMP%] {\n  border-color: rgba(211, 47, 47, 0.4);\n}\n.event.setup.pending[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: rgba(211, 47, 47, 0.4);\n}\n.event.cancelled[_ngcontent-%COMP%] {\n  border-color: #617288;\n}\n.event.cancelled[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: #617288;\n}\n.event.cancelled[_ngcontent-%COMP%]   .heading[_ngcontent-%COMP%] {\n  background-color: rgba(97, 114, 136, 0.2);\n}\n.event.cancelled.pending[_ngcontent-%COMP%] {\n  border-color: rgba(97, 114, 136, 0.4);\n}\n.event.cancelled.pending[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: rgba(97, 114, 136, 0.4);\n}\n.heading[_ngcontent-%COMP%] {\n  background-color: #999;\n  display: flex;\n  align-items: center;\n}\n.heading[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.25em 0.5em;\n  min-width: 50%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.handle[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.6em;\n  width: 1.6em;\n  color: #fff;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  font-weight: 500;\n  margin-right: 0.5em;\n}\n.details[_ngcontent-%COMP%] {\n  padding: 0.5em;\n}\n.value[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvd2Vlay12aWV3L2RheS1kaXNwbGF5L2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvd2Vlay12aWV3L2RheS1kaXNwbGF5L2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFnQ0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMvQkE7O3NCQUFBO0FDUUE7RUFDSSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7RUFDQSxpREFBQTtFQUNBLGVBQUE7RUExQkEscUJBNkNxQjtBQzVCekI7QURXSTtFQUNJLGVBQUE7QUNUUjtBRFlJO0VEMUJBLGlIQUFBO0FFaUJKO0FEYUk7RUFDSSxhQUFBO0FDWFI7QURjSTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtBQ1pSO0FENUJJO0VBQ0kseUJBMENpQjtBQ1p6QjtBRDNCSTtFQUNJLHdDQUFBO0FDNkJSO0FEMUJJO0VBQ0ksb0NBQUE7QUM0QlI7QUQxQlE7RUFDSSx3Q0FBQTtBQzRCWjtBREtJO0VBL0NBLHFCQWdEeUI7QUNIN0I7QUQzQ0k7RUFDSSx5QkE2Q3FCO0FDQTdCO0FEMUNJO0VBQ0ksMENBQUE7QUM0Q1I7QUR6Q0k7RUFDSSxzQ0FBQTtBQzJDUjtBRHpDUTtFQUNJLDBDQUFBO0FDMkNaO0FETkk7RUFuREEscUJBb0R5QjtBQ1E3QjtBRDFESTtFQUNJLHlCQWlEcUI7QUNXN0I7QUR6REk7RUFDSSx5Q0FBQTtBQzJEUjtBRHhESTtFQUNJLHFDQUFBO0FDMERSO0FEeERRO0VBQ0kseUNBQUE7QUMwRFo7QURqQkk7RUF2REEscUJBd0R5QjtBQ21CN0I7QUR6RUk7RUFDSSx5QkFxRHFCO0FDc0I3QjtBRHhFSTtFQUNJLHdDQUFBO0FDMEVSO0FEdkVJO0VBQ0ksb0NBQUE7QUN5RVI7QUR2RVE7RUFDSSx3Q0FBQTtBQ3lFWjtBRDVCSTtFQTNEQSxxQkE0RHlCO0FDOEI3QjtBRHhGSTtFQUNJLHlCQXlEcUI7QUNpQzdCO0FEdkZJO0VBQ0ksdUNBQUE7QUN5RlI7QUR0Rkk7RUFDSSxtQ0FBQTtBQ3dGUjtBRHRGUTtFQUNJLHVDQUFBO0FDd0ZaO0FEdkNJO0VBL0RBLHFCQWdFeUI7QUN5QzdCO0FEdkdJO0VBQ0kseUJBNkRxQjtBQzRDN0I7QUR0R0k7RUFDSSx3Q0FBQTtBQ3dHUjtBRHJHSTtFQUNJLG9DQUFBO0FDdUdSO0FEckdRO0VBQ0ksd0NBQUE7QUN1R1o7QURsREk7RUFuRUEscUJBb0V5QjtBQ29EN0I7QUR0SEk7RUFDSSx5QkFpRXFCO0FDdUQ3QjtBRHJISTtFQUNJLHlDQUFBO0FDdUhSO0FEcEhJO0VBQ0kscUNBQUE7QUNzSFI7QURwSFE7RUFDSSx5Q0FBQTtBQ3NIWjtBRDVEQTtFQUNJLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDK0RKO0FEN0RJO0VBQ0ksT0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQytEUjtBRDNEQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDOERKO0FEM0RBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDOERKO0FEN0RJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDK0RSO0FEM0RBO0VBQ0ksY0FBQTtBQzhESjtBRDNEQTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQzhESiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3dlZWstdmlldy9kYXktZGlzcGxheS9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICMxOTM3ZWE7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMDUxYzJjO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkY29sb3I6ICMwMDAsICRkZXB0aDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAxcHggKiAoJGRlcHRoIC0gMSkgcmdiYSgjMDAwLCAuMiksXG4gICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLFxuICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIlxuQGltcG9ydCAnbWl4aW5zJztcblxuQG1peGluIGJsb2NrLWNvbG9yKCRjb2xvcikge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuXG4gICAgLmhhbmRsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICB9XG5cbiAgICAuaGVhZGluZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yLCAuMik7XG4gICAgfVxuXG4gICAgJi5wZW5kaW5nIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZ2JhKCRjb2xvciwgLjQpO1xuXG4gICAgICAgIC5oYW5kbGUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3IsIC40KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmV2ZW50IHtcbiAgICBtYXJnaW46IC4yNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAuNWVtKTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDIwMG1zLCBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICoge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgJi5pbi1wcm9ncmVzcyB7XG4gICAgICAgIEBpbmNsdWRlIGJveC1zaGFkb3c7XG4gICAgfVxuXG4gICAgJi5lbmRlZCB7XG4gICAgICAgIG9wYWNpdHk6IC4zNTtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBibG9jay1jb2xvcigjMUY0MEU2KTtcblxuICAgICYuaW50ZXJuYWwge1xuICAgICAgICBAaW5jbHVkZSBibG9jay1jb2xvcigjRTY5RkM3KTtcbiAgICB9XG5cbiAgICAmLmV4dGVybmFsIHtcbiAgICAgICAgQGluY2x1ZGUgYmxvY2stY29sb3IoIzhDNUFDOCk7XG4gICAgfVxuXG4gICAgJi50cmFpbmluZyB7XG4gICAgICAgIEBpbmNsdWRlIGJsb2NrLWNvbG9yKCNGMEU3MDApO1xuICAgIH1cblxuICAgICYuaW50ZXJ2aWV3IHtcbiAgICAgICAgQGluY2x1ZGUgYmxvY2stY29sb3IoIzM0OEQwMik7XG4gICAgfVxuXG4gICAgJi5zZXR1cCB7XG4gICAgICAgIEBpbmNsdWRlIGJsb2NrLWNvbG9yKCNkMzJmMmYpO1xuICAgIH1cblxuICAgICYuY2FuY2VsbGVkIHtcbiAgICAgICAgQGluY2x1ZGUgYmxvY2stY29sb3IoIzYxNzI4OCk7XG4gICAgfVxufVxuXG4uaGVhZGluZyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHBhZGRpbmc6IC4yNWVtIC41ZW07XG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG59XG5cbi5oYW5kbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEuNmVtO1xuICAgIHdpZHRoOiAxLjZlbTtcbiAgICBjb2xvcjogI2ZmZjtcbn1cblxuLmZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjVlbTtcbiAgICB9XG59XG5cbi5kZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAuNWVtO1xufVxuXG4udmFsdWUge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmV2ZW50IHtcbiAgbWFyZ2luOiAwLjI1ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAuNWVtKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyMDBtcywgYmFja2dyb3VuZC1jb2xvciAyMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBib3JkZXItY29sb3I6ICMxRjQwRTY7XG59XG4uZXZlbnQgKiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5ldmVudC5pbi1wcm9ncmVzcyB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmV2ZW50LmVuZGVkIHtcbiAgb3BhY2l0eTogMC4zNTtcbn1cbi5ldmVudDpob3ZlciB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG59XG4uZXZlbnQgLmhhbmRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjQwRTY7XG59XG4uZXZlbnQgLmhlYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDMxLCA2NCwgMjMwLCAwLjIpO1xufVxuLmV2ZW50LnBlbmRpbmcge1xuICBib3JkZXItY29sb3I6IHJnYmEoMzEsIDY0LCAyMzAsIDAuNCk7XG59XG4uZXZlbnQucGVuZGluZyAuaGFuZGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgNjQsIDIzMCwgMC40KTtcbn1cbi5ldmVudC5pbnRlcm5hbCB7XG4gIGJvcmRlci1jb2xvcjogI0U2OUZDNztcbn1cbi5ldmVudC5pbnRlcm5hbCAuaGFuZGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U2OUZDNztcbn1cbi5ldmVudC5pbnRlcm5hbCAuaGVhZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCAxNTksIDE5OSwgMC4yKTtcbn1cbi5ldmVudC5pbnRlcm5hbC5wZW5kaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzMCwgMTU5LCAxOTksIDAuNCk7XG59XG4uZXZlbnQuaW50ZXJuYWwucGVuZGluZyAuaGFuZGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDE1OSwgMTk5LCAwLjQpO1xufVxuLmV2ZW50LmV4dGVybmFsIHtcbiAgYm9yZGVyLWNvbG9yOiAjOEM1QUM4O1xufVxuLmV2ZW50LmV4dGVybmFsIC5oYW5kbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEM1QUM4O1xufVxuLmV2ZW50LmV4dGVybmFsIC5oZWFkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDAsIDkwLCAyMDAsIDAuMik7XG59XG4uZXZlbnQuZXh0ZXJuYWwucGVuZGluZyB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgxNDAsIDkwLCAyMDAsIDAuNCk7XG59XG4uZXZlbnQuZXh0ZXJuYWwucGVuZGluZyAuaGFuZGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNDAsIDkwLCAyMDAsIDAuNCk7XG59XG4uZXZlbnQudHJhaW5pbmcge1xuICBib3JkZXItY29sb3I6ICNGMEU3MDA7XG59XG4uZXZlbnQudHJhaW5pbmcgLmhhbmRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMEU3MDA7XG59XG4uZXZlbnQudHJhaW5pbmcgLmhlYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0MCwgMjMxLCAwLCAwLjIpO1xufVxuLmV2ZW50LnRyYWluaW5nLnBlbmRpbmcge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjQwLCAyMzEsIDAsIDAuNCk7XG59XG4uZXZlbnQudHJhaW5pbmcucGVuZGluZyAuaGFuZGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDIzMSwgMCwgMC40KTtcbn1cbi5ldmVudC5pbnRlcnZpZXcge1xuICBib3JkZXItY29sb3I6ICMzNDhEMDI7XG59XG4uZXZlbnQuaW50ZXJ2aWV3IC5oYW5kbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ4RDAyO1xufVxuLmV2ZW50LmludGVydmlldyAuaGVhZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTIsIDE0MSwgMiwgMC4yKTtcbn1cbi5ldmVudC5pbnRlcnZpZXcucGVuZGluZyB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MiwgMTQxLCAyLCAwLjQpO1xufVxuLmV2ZW50LmludGVydmlldy5wZW5kaW5nIC5oYW5kbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxNDEsIDIsIDAuNCk7XG59XG4uZXZlbnQuc2V0dXAge1xuICBib3JkZXItY29sb3I6ICNkMzJmMmY7XG59XG4uZXZlbnQuc2V0dXAgLmhhbmRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XG59XG4uZXZlbnQuc2V0dXAgLmhlYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgNDcsIDQ3LCAwLjIpO1xufVxuLmV2ZW50LnNldHVwLnBlbmRpbmcge1xuICBib3JkZXItY29sb3I6IHJnYmEoMjExLCA0NywgNDcsIDAuNCk7XG59XG4uZXZlbnQuc2V0dXAucGVuZGluZyAuaGFuZGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMTEsIDQ3LCA0NywgMC40KTtcbn1cbi5ldmVudC5jYW5jZWxsZWQge1xuICBib3JkZXItY29sb3I6ICM2MTcyODg7XG59XG4uZXZlbnQuY2FuY2VsbGVkIC5oYW5kbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjE3Mjg4O1xufVxuLmV2ZW50LmNhbmNlbGxlZCAuaGVhZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTcsIDExNCwgMTM2LCAwLjIpO1xufVxuLmV2ZW50LmNhbmNlbGxlZC5wZW5kaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDk3LCAxMTQsIDEzNiwgMC40KTtcbn1cbi5ldmVudC5jYW5jZWxsZWQucGVuZGluZyAuaGFuZGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg5NywgMTE0LCAxMzYsIDAuNCk7XG59XG5cbi5oZWFkaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5oZWFkaW5nIC50ZXh0IHtcbiAgZmxleDogMTtcbiAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xuICBtaW4td2lkdGg6IDUwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5oYW5kbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjZlbTtcbiAgd2lkdGg6IDEuNmVtO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5maWVsZCBsYWJlbCB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG59XG5cbi5kZXRhaWxzIHtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi52YWx1ZSB7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeekViewItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'week-view-item',
          templateUrl: './item.component.html',
          styleUrls: ['./item.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
        }];
      }, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/week-view/timeline/timeline.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/shell/week-view/timeline/timeline.component.ts ***!
    \****************************************************************/

  /*! exports provided: WeekViewTimelineComponent */

  /***/
  function srcAppShellWeekViewTimelineTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeekViewTimelineComponent", function () {
      return WeekViewTimelineComponent;
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


    var _day_display_day_display_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../day-display/day-display.component */
    "./src/app/shell/week-view/day-display/day-display.component.ts");

    function WeekViewTimelineComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function WeekViewTimelineComponent_week_view_day_display_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "week-view-day-display", 5);
      }

      if (rf & 2) {
        var date_r2 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", date_r2)("spaces", ctx_r1.space_list);
      }
    }

    var WeekViewTimelineComponent =
    /*#__PURE__*/
    function (_src_app_shared_base_) {
      _inherits(WeekViewTimelineComponent, _src_app_shared_base_);

      var _super = _createSuper(WeekViewTimelineComponent);

      function WeekViewTimelineComponent(_service) {
        var _this2;

        _classCallCheck(this, WeekViewTimelineComponent);

        _this2 = _super.call(this);
        _this2._service = _service;
        /** List of dates to display */

        _this2.date_list = [];
        /** List of spaces to display bookings for */

        _this2.space_list = [];
        /** Subject holding the value of the search */

        _this2.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        return _this2;
      }

      _createClass(WeekViewTimelineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.date_list = this.generateDates(this.date, this.weekends);
          this.initBookings();
          this.search$.next("".concat(this.date, "|").concat(this.weekends, "|").concat(this.level));
          this.interval('update_booking', function () {
            return _this3.search$.next("".concat(_this3.date, "|").concat(_this3.weekends, "|").concat(_this3.level, "|").concat(dayjs__WEBPACK_IMPORTED_MODULE_4__().unix()));
          }, 30 * 1000);
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /* istanbul ignore else */
          if (changes.date || changes.weekends || changes.level) {
            this.date_list = this.generateDates(this.date, this.weekends);
            this.search$.next("".concat(this.date, "|").concat(this.weekends, "|").concat(this.level));
          }
        }
        /**
         * Generate list of dates to display
         * @param date Currently selected date
         * @param weekends Whether weekends should be included
         */

      }, {
        key: "generateDates",
        value: function generateDates(date) {
          var weekends = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var list = [];
          var day = dayjs__WEBPACK_IMPORTED_MODULE_4__(date).startOf('d');
          var start = day.startOf('w');
          var end = start.endOf('w');

          while (start.isBefore(end, 'm')) {
            if (start.day() !== 0 && start.day() !== 6 || weekends) {
              list.push(start.valueOf());
            }

            start = start.add(1, 'd');
          }

          return list;
        }
      }, {
        key: "initBookings",
        value: function initBookings() {
          var _this4 = this;

          // Listen for input changes
          this.search_results$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (_) {
            _this4.loading = true;
            var date = dayjs__WEBPACK_IMPORTED_MODULE_4__(_this4.date).startOf('w');
            return _this4._service.Spaces.query({
              zone_ids: "".concat(_this4.level).concat(_this4.space_type ? ',' + _this4.space_type : ''),
              available_from: Math.floor(_this4.date_list[0] / 1000) || date.unix(),
              available_to: Math.floor(_this4.date_list[_this4.date_list.length - 1] / 1000) || date.endOf('w').unix()
            });
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (_) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([]);
          })); // Process API results

          this.subscription('search_results', this.search_results$.subscribe(function (list) {
            _this4.loading = false;
            _this4.space_list = list;
          }));
        }
      }]);

      return WeekViewTimelineComponent;
    }(src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]);

    WeekViewTimelineComponent.ɵfac = function WeekViewTimelineComponent_Factory(t) {
      return new (t || WeekViewTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]));
    };

    WeekViewTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WeekViewTimelineComponent,
      selectors: [["week-view-timeline"]],
      inputs: {
        date: "date",
        level: "level",
        space_type: "space_type",
        weekends: "weekends",
        loading: "loading"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 3,
      vars: 2,
      consts: [[1, "week-timeline"], ["class", "loader", 4, "ngIf"], [3, "date", "spaces", 4, "ngFor", "ngForOf"], [1, "loader"], ["mode", "indeterminate"], [3, "date", "spaces"]],
      template: function WeekViewTimelineComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, WeekViewTimelineComponent_div_1_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeekViewTimelineComponent_week_view_day_display_2_Template, 1, 2, "week-view-day-display", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.date_list);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_7__["MatProgressBar"], _day_display_day_display_component__WEBPACK_IMPORTED_MODULE_8__["WeekViewDayDisplayComponent"]],
      styles: [".week-timeline[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  height: 100%;\n  width: 100%;\n  background-color: #ecf1f5;\n}\n.week-timeline[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 12.5%;\n}\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvd2Vlay12aWV3L3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC93ZWVrLXZpZXcvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDREo7QURHSTtFQUNJLE9BQUE7RUFDQSxnQkFBQTtBQ0RSO0FES0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC93ZWVrLXZpZXcvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuLndlZWstdGltZWxpbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMWY1O1xuXG4gICAgPiAqIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWluLXdpZHRoOiAxMi41JTtcbiAgICB9XG59XG5cbi5sb2FkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICB6LWluZGV4OiA5OTk7XG59XG4iLCIud2Vlay10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjFmNTtcbn1cbi53ZWVrLXRpbWVsaW5lID4gKiB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMTIuNSU7XG59XG5cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNHB4O1xuICB6LWluZGV4OiA5OTk7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeekViewTimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'week-view-timeline',
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
        level: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        space_type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        weekends: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/week-view/week-view.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/shell/week-view/week-view.component.ts ***!
    \********************************************************/

  /*! exports provided: WeekViewComponent */

  /***/
  function srcAppShellWeekViewWeekViewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeekViewComponent", function () {
      return WeekViewComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/base.directive */
    "./src/app/shared/base.directive.ts");
    /* harmony import */


    var src_app_overlays_booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/overlays/booking-modal/booking-modal.component */
    "./src/app/overlays/booking-modal/booking-modal.component.ts");
    /* harmony import */


    var src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/data/bookings/booking.class */
    "./src/app/services/data/bookings/booking.class.ts");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/components/sidebar/sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/components/topbar-header/topbar-header.component */
    "./src/app/shared/components/topbar-header/topbar-header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./timeline/timeline.component */
    "./src/app/shell/week-view/timeline/timeline.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");

    function WeekViewComponent_mat_form_field_5_mat_option_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var level_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", level_r3 == null ? null : level_r3.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", level_r3 == null ? null : level_r3.name, " ");
      }
    }

    function WeekViewComponent_mat_form_field_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeekViewComponent_mat_form_field_5_Template_mat_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.active_level = $event;
        })("ngModelChange", function WeekViewComponent_mat_form_field_5_Template_mat_select_ngModelChange_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.updateLevel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeekViewComponent_mat_form_field_5_mat_option_2_Template, 2, 2, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.active_level);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.levels);
      }
    }

    function WeekViewComponent_mat_form_field_6_mat_option_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var type_r8 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r8 == null ? null : type_r8.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r8 == null ? null : type_r8.name, " ");
      }
    }

    function WeekViewComponent_mat_form_field_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeekViewComponent_mat_form_field_6_Template_mat_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.active_type = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, WeekViewComponent_mat_form_field_6_mat_option_2_Template, 2, 2, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.active_type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.space_types);
      }
    }

    var WeekViewComponent =
    /*#__PURE__*/
    function (_src_app_shared_base_2) {
      _inherits(WeekViewComponent, _src_app_shared_base_2);

      var _super2 = _createSuper(WeekViewComponent);

      function WeekViewComponent(_service, _dialog, _router, _route) {
        var _this5;

        _classCallCheck(this, WeekViewComponent);

        _this5 = _super2.call(this);
        _this5._service = _service;
        _this5._dialog = _dialog;
        _this5._router = _router;
        _this5._route = _route;
        /** ID of the currently selected level */

        _this5.active_level = '';
        /** ID of the currently selected level */

        _this5.active_type = '';
        /** List of levels available for the active building */

        _this5.levels = [];
        /** List of space types available for the active building */

        _this5.space_types = [];
        return _this5;
      }

      _createClass(WeekViewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this._service.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(function (_) {
            return _;
          })).subscribe(function () {
            _this6.subscription('route.params', _this6._route.paramMap.subscribe(function (params) {
              /* istanbul ignore else */
              if (params.has('level') && _this6.active_level !== params.get('level')) {
                var level = _this6._service.Organisation.levelWithID(params.get('level'));
                /* istanbul ignore else */


                if (level) {
                  var building = _this6._service.Organisation.buildings.find(function (bld) {
                    return bld.id === level.building_id;
                  });
                  /* istanbul ignore else */


                  if (building) {
                    _this6.active_level = level.id;
                    _this6._service.Organisation.building = building;
                  }
                }
              }
            }));

            _this6.subscription('building', _this6._service.Organisation.listen('active_building').subscribe(function () {
              var building = _this6._service.Organisation.building;
              /* istanbul ignore else */

              if (!building.levels.find(function (lvl) {
                return lvl.id === _this6.active_level;
              })) {
                _this6.active_level = (building.levels[0] || {
                  id: ''
                }).id;

                _this6.updateLevel();
              }

              _this6.levels = [{
                id: '',
                name: 'All Levels'
              }].concat(building.levels);

              _this6.levels.sort(function (a, b) {
                return a.name.localeCompare(b.name);
              });

              _this6.space_types = [{
                id: '',
                name: 'All Space Types'
              }].concat(_this6._service.Organisation.space_types);
            }));
          });
        }
      }, {
        key: "newMeeting",
        value: function newMeeting() {
          this._dialog.open(src_app_overlays_booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_3__["BookingModalComponent"], {
            data: {
              booking: new src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_4__["Booking"]({})
            }
          });
        }
      }, {
        key: "updateLevel",
        value: function updateLevel() {
          this._router.navigate(['/week-view', this.active_level]);
        }
      }]);

      return WeekViewComponent;
    }(src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]);

    WeekViewComponent.ɵfac = function WeekViewComponent_Factory(t) {
      return new (t || WeekViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]));
    };

    WeekViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WeekViewComponent,
      selectors: [["a-week-view"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 17,
      vars: 8,
      consts: [[1, "week-view"], [1, "group"], [3, "date", "dateChange"], [1, "topbar"], ["appearance", "outline", 4, "ngIf"], ["labelPosition", "before", "title", "Only show meetings with setup and breakdown times", 3, "ngModel", "ngModelChange"], [3, "date", "level", "space_type", "weekends"], ["mat-button", "", "name", "new", 1, "new-item", 3, "tapped"], [1, "content"], [1, "material-icons"], [1, "text"], ["appearance", "outline"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]],
      template: function WeekViewComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a-topbar-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function WeekViewComponent_Template_a_topbar_header_dateChange_3_listener($event) {
            return ctx.date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, WeekViewComponent_mat_form_field_5_Template, 3, 2, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WeekViewComponent_mat_form_field_6_Template, 3, 2, "mat-form-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-slide-toggle", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function WeekViewComponent_Template_mat_slide_toggle_ngModelChange_7_listener($event) {
            return ctx.weekend = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Show Weekends ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "week-view-timeline", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function WeekViewComponent_Template_button_tapped_11_listener() {
            return ctx.newMeeting();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "New Meeting");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.levels && ctx.levels.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.space_types && ctx.space_types.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.weekend);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.date)("level", ctx.active_level)("space_type", ctx.active_type)("weekends", ctx.weekend);
        }
      },
      directives: [_shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_9__["TopbarHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_11__["MatSlideToggle"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["NgModel"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_13__["WeekViewTimelineComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_15__["ɵb"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_17__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"]],
      styles: ["[_nghost-%COMP%], .week-view[_ngcontent-%COMP%], main[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.week-view[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  height: calc(100% - 3.5em);\n}\n.group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 12em;\n}\n.topbar[_ngcontent-%COMP%] {\n  padding: 0.1em 0 0.1em 0.5em;\n  height: 3.5em;\n}\n.topbar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n}\n.new-item[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1em;\n  right: 1em;\n  z-index: 999;\n  cursor: pointer;\n  height: 1.5em;\n  min-width: 1.5em;\n  padding: 0;\n  border-radius: 0.8em;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.75em;\n  border: none;\n  transition: padding 200ms;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n.new-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.new-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition: width 200ms, opacity 200ms;\n  font-size: 1.2rem;\n}\n.new-item[_ngcontent-%COMP%]:hover {\n  padding: 0 0.5em;\n}\n.new-item[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n  width: 7em;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvd2Vlay12aWV3L3dlZWstdmlldy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvd2Vlay12aWV3L3dlZWstdmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFnQ0E7O2NBQUE7QUFhQTs7c0JBQUE7QUE3Q0E7OzBCQUFBO0FBZ0NBOztjQUFBO0FBYUE7O3NCQUFBO0FDL0JBOztzQkFBQTtBQ1pBOzs7RUFHSSxZQUFBO0VBQ0EsV0FBQTtBQ21CSjtBRGhCQTtFQUNJLGFBQUE7RUFDQSxZQUFBO0FDbUJKO0FEaEJBO0VBQ0ksMEJBQUE7QUNtQko7QURoQkE7RUFDSSxPQUFBO0VBQ0EsZUFBQTtBQ21CSjtBRGhCQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtBQ21CSjtBRGpCSTtFQUNJLG1CQUFBO0FDbUJSO0FEZkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RURyQ0EsaUhBQUE7QUV3REo7QURoQkk7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ2tCUjtBRGZJO0VBQ0ksUUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QUNpQlI7QURkSTtFQUNJLGdCQUFBO0FDZ0JSO0FEZFE7RUFDSSxVQUFBO0VBQ0EsVUFBQTtBQ2dCWiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3dlZWstdmlldy93ZWVrLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICMxOTM3ZWE7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMDUxYzJjO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkY29sb3I6ICMwMDAsICRkZXB0aDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAxcHggKiAoJGRlcHRoIC0gMSkgcmdiYSgjMDAwLCAuMiksXG4gICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLFxuICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCxcbi53ZWVrLXZpZXcsXG5tYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi53ZWVrLXZpZXcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5tYWluIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNWVtKTtcbn1cblxuLmdyb3VwIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMTJlbTtcbn1cblxuLnRvcGJhciB7XG4gICAgcGFkZGluZzogLjFlbSAwIC4xZW0gLjVlbTtcbiAgICBoZWlnaHQ6IDMuNWVtO1xuXG4gICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG4gICAgfVxufVxuXG4ubmV3LWl0ZW0ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDFlbTtcbiAgICByaWdodDogMWVtO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICBtaW4td2lkdGg6IDEuNWVtO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogMC44ZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNzVlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogcGFkZGluZyAyMDBtcztcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93O1xuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAyMDBtcywgb3BhY2l0eSAyMDBtcztcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIHBhZGRpbmc6IDAgLjVlbTtcblxuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICB3aWR0aDogN2VtO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuOmhvc3QsXG4ud2Vlay12aWV3LFxubWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi53ZWVrLXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbm1haW4ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNWVtKTtcbn1cblxuLmdyb3VwIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAxMmVtO1xufVxuXG4udG9wYmFyIHtcbiAgcGFkZGluZzogMC4xZW0gMCAwLjFlbSAwLjVlbTtcbiAgaGVpZ2h0OiAzLjVlbTtcbn1cbi50b3BiYXIgbWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuXG4ubmV3LWl0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMWVtO1xuICByaWdodDogMWVtO1xuICB6LWluZGV4OiA5OTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgbWluLXdpZHRoOiAxLjVlbTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogMC44ZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuNzVlbTtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDIwMG1zO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5uZXctaXRlbSAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5ldy1pdGVtIC50ZXh0IHtcbiAgd2lkdGg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHdpZHRoIDIwMG1zLCBvcGFjaXR5IDIwMG1zO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5uZXctaXRlbTpob3ZlciB7XG4gIHBhZGRpbmc6IDAgMC41ZW07XG59XG4ubmV3LWl0ZW06aG92ZXIgLnRleHQge1xuICB3aWR0aDogN2VtO1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeekViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'a-week-view',
          templateUrl: './week-view.component.html',
          styleUrls: ['./week-view.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shell/week-view/week-view.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shell/week-view/week-view.module.ts ***!
    \*****************************************************/

  /*! exports provided: WeekViewModule */

  /***/
  function srcAppShellWeekViewWeekViewModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WeekViewModule", function () {
      return WeekViewModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _week_view_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./week-view.component */
    "./src/app/shell/week-view/week-view.component.ts");
    /* harmony import */


    var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./timeline/timeline.component */
    "./src/app/shell/week-view/timeline/timeline.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _day_display_day_display_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./day-display/day-display.component */
    "./src/app/shell/week-view/day-display/day-display.component.ts");
    /* harmony import */


    var _day_display_item_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./day-display/item/item.component */
    "./src/app/shell/week-view/day-display/item/item.component.ts");

    var ROUTES = [{
      path: '',
      component: _week_view_component__WEBPACK_IMPORTED_MODULE_4__["WeekViewComponent"]
    }, {
      path: ':level',
      component: _week_view_component__WEBPACK_IMPORTED_MODULE_4__["WeekViewComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var WeekViewModule = function WeekViewModule() {
      _classCallCheck(this, WeekViewModule);
    };

    WeekViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: WeekViewModule
    });
    WeekViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function WeekViewModule_Factory(t) {
        return new (t || WeekViewModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedContentModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](WeekViewModule, {
        declarations: [_week_view_component__WEBPACK_IMPORTED_MODULE_4__["WeekViewComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__["WeekViewTimelineComponent"], _day_display_day_display_component__WEBPACK_IMPORTED_MODULE_7__["WeekViewDayDisplayComponent"], _day_display_item_item_component__WEBPACK_IMPORTED_MODULE_8__["WeekViewItemComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedContentModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WeekViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_week_view_component__WEBPACK_IMPORTED_MODULE_4__["WeekViewComponent"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_5__["WeekViewTimelineComponent"], _day_display_day_display_component__WEBPACK_IMPORTED_MODULE_7__["WeekViewDayDisplayComponent"], _day_display_item_item_component__WEBPACK_IMPORTED_MODULE_8__["WeekViewItemComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedContentModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=shell-week-view-week-view-module-es5.js.map