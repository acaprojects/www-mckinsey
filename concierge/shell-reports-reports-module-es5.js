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

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-reports-reports-module"], {
  /***/
  "./src/app/shell/reports/report-display/report-display.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/shell/reports/report-display/report-display.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ReportDisplayComponent */

  /***/
  function srcAppShellReportsReportDisplayReportDisplayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportDisplayComponent", function () {
      return ReportDisplayComponent;
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


    var src_app_services_data_reports_report_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/data/reports/report.class */
    "./src/app/services/data/reports/report.class.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _shared_components_custom_fields_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../shared/components/custom-fields/date-field/date-field.component */
    "./src/app/shared/components/custom-fields/date-field/date-field.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _report_table_report_table_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../report-table/report-table.component */
    "./src/app/shell/reports/report-table/report-table.component.ts");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");

    function ReportDisplayComponent_mat_form_field_13_span_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" (+", ctx_r9.locations.length - 1, " ", (ctx_r9.locations == null ? null : ctx_r9.locations.length) === 2 ? "other" : "others", ") ");
      }
    }

    function ReportDisplayComponent_mat_form_field_13_mat_option_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var building_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", building_r11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](building_r11.code);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](building_r11.name);
      }
    }

    function ReportDisplayComponent_mat_form_field_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportDisplayComponent_mat_form_field_13_Template_mat_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.locations = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-select-trigger");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReportDisplayComponent_mat_form_field_13_span_4_Template, 2, 2, "span", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ReportDisplayComponent_mat_form_field_13_mat_option_5_Template, 6, 3, "mat-option", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.locations);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.locations ? ctx_r0.locations[0] == null ? null : ctx_r0.locations[0].name : "", " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx_r0.locations == null ? null : ctx_r0.locations.length) > 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.buildings);
      }
    }

    function ReportDisplayComponent_span_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Generate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ReportDisplayComponent_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 27);
      }
    }

    var _c0 = function _c0() {
      return [];
    };

    function ReportDisplayComponent_ng_container_22_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-report-table", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("list", ctx_r14.report_data.data || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0))("details", ctx_r14.report);
      }
    }

    function ReportDisplayComponent_ng_container_22_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportDisplayComponent_ng_container_22_ng_container_1_Template, 2, 3, "ng-container", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.report_data && ctx_r4.report_data.data.length)("ngIfElse", _r5);
      }
    }

    var _c1 = function _c1() {
      return {
        "class": "material-icons",
        content: "arrow_upward"
      };
    };

    function ReportDisplayComponent_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r6.report_data ? "No entries for selected date" : "Press generate above to view report", " ");
      }
    }

    function ReportDisplayComponent_ng_template_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Loading report...");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var ReportDisplayComponent =
    /*#__PURE__*/
    function () {
      function ReportDisplayComponent(_service) {
        _classCallCheck(this, ReportDisplayComponent);

        this._service = _service;
        /** Start date for the generated report */

        this.start_date = dayjs__WEBPACK_IMPORTED_MODULE_3__().startOf('d').valueOf();
        /** End date for the generated report */

        this.end_date = dayjs__WEBPACK_IMPORTED_MODULE_3__().endOf('d').valueOf();
      }
      /** List of available buildings */


      _createClass(ReportDisplayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this._service.Organisation.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])(function (_) {
            return _;
          })).subscribe(function () {
            _this.locations = [_this._service.Organisation.building];
          });
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /* istanbul ignore else */
          if (changes.report) {
            this.report_data = null;
          }
        }
        /**
         * Generate report
         */

      }, {
        key: "generateReport",
        value: function generateReport() {
          var _this2 = this;

          /* istanbul ignore else */
          if (this.report) {
            this.loading = true;
            this.report_data = null;

            this._service.Reports.show(this.report.id, {
              date: dayjs__WEBPACK_IMPORTED_MODULE_3__(this.start_date).format('YYYY-MM-DD'),
              start_date: Math.floor(this.start_date / 1000),
              end_date: Math.floor(this.end_date / 1000),
              zone_ids: this.locations.map(function (i) {
                return i.id;
              }).join(',')
            }).then(function (report) {
              _this2.loading = false;
              _this2.report_data = new src_app_services_data_reports_report_class__WEBPACK_IMPORTED_MODULE_2__["Report"](Object.assign(Object.assign({}, report), {
                type: _this2.report.id
              }));
            }, function (err) {
              _this2.loading = false;

              _this2._service.notifyError("Error generating report. Error: ".concat(err.message || err));
            });
          }
        }
      }, {
        key: "downloadReport",
        value: function downloadReport() {
          /* istanbul ignore else */
          if (this.report_data) {
            var date = dayjs__WEBPACK_IMPORTED_MODULE_3__(this.start_date).format('YYYY-MM-DD');
            this.report_data.downloadCSV("".concat(this.report.name.split(' ').join('_').toLowerCase(), "+").concat(date, ".csv"));
          }
        }
      }, {
        key: "buildings",
        get: function get() {
          return this._service.Organisation.buildings;
        }
      }]);

      return ReportDisplayComponent;
    }();

    ReportDisplayComponent.ɵfac = function ReportDisplayComponent_Factory(t) {
      return new (t || ReportDisplayComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]));
    };

    ReportDisplayComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReportDisplayComponent,
      selectors: [["a-report-display"]],
      inputs: {
        report: "report"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 27,
      vars: 13,
      consts: [[1, "header"], [1, "period"], [1, "field"], ["for", "start-date"], ["name", "start-date", 3, "ngModel", "from", "to", "ngModelChange"], [1, "gap"], ["for", "end-date"], ["name", "end-date", 3, "ngModel", "from", "to", "ngModelChange"], [1, "location", "dark-mode"], ["appearance", "outline", 4, "ngIf"], [1, "actions"], ["mat-button", "", "name", "generate", 3, "disabled", "tapped"], [4, "ngIf", "ngIfElse"], ["gen_loader", ""], ["mat-button", "", "name", "download", 3, "disabled", "tapped"], [1, "display"], ["empty_state", ""], ["load_state", ""], ["appearance", "outline"], ["name", "locations", "multiple", "", 3, "ngModel", "ngModelChange"], ["class", "selection", 4, "ngIf"], [3, "value", 4, "ngFor", "ngForOf"], [1, "selection"], [3, "value"], [1, "option"], [1, "code"], [1, "name"], ["diameter", "32"], [3, "list", "details"], [1, "info-block", "center"], [1, "icon"], [3, "icon"], [1, "text"]],
      template: function ReportDisplayComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Start Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a-date-field", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportDisplayComponent_Template_a_date_field_ngModelChange_5_listener($event) {
            return ctx.start_date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "to");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "End Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a-date-field", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportDisplayComponent_Template_a_date_field_ngModelChange_11_listener($event) {
            return ctx.end_date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ReportDisplayComponent_mat_form_field_13_Template, 6, 4, "mat-form-field", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function ReportDisplayComponent_Template_button_tapped_15_listener() {
            return ctx.generateReport();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ReportDisplayComponent_span_16_Template, 2, 0, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ReportDisplayComponent_ng_template_17_Template, 1, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function ReportDisplayComponent_Template_button_tapped_19_listener() {
            return ctx.downloadReport();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Download");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ReportDisplayComponent_ng_container_22_Template, 2, 2, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ReportDisplayComponent_ng_template_23_Template, 5, 3, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ReportDisplayComponent_ng_template_25_Template, 5, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.start_date)("from", ctx.end_date / 10)("to", ctx.end_date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.end_date)("from", ctx.start_date)("to", ctx.start_date * 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.buildings && ctx.buildings.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.report_data);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r7);
        }
      },
      directives: [_shared_components_custom_fields_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_5__["DateFieldComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__["ɵb"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_12__["MatOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _report_table_report_table_component__WEBPACK_IMPORTED_MODULE_14__["ReportTableComponent"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"]],
      styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  background-color: #051c2c;\n  color: #fff;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  padding: 0.5em;\n}\nlabel[_ngcontent-%COMP%] {\n  margin-bottom: 0.5em;\n  font-size: 0.8em;\n  font-weight: 500;\n}\n.location[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 25%;\n  text-align: center;\n}\n.period[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.gap[_ngcontent-%COMP%] {\n  padding: 1em;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.display[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-height: 50%;\n  width: 100%;\n  overflow: auto;\n}\nbutton[_ngcontent-%COMP%] {\n  margin: 0.25em;\n  width: 8em;\n  height: 2.75em;\n}\nmat-option[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\nmat-option[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%]   .code[_ngcontent-%COMP%] {\n  width: 4em;\n}\nmat-spinner[_ngcontent-%COMP%] {\n  margin: auto;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3em;\n}\n.selection[_ngcontent-%COMP%] {\n  opacity: 0.75;\n  font-size: 0.75em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvcmVwb3J0cy9yZXBvcnQtZGlzcGxheS9yZXBvcnQtZGlzcGxheS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvcmVwb3J0cy9yZXBvcnQtZGlzcGxheS9yZXBvcnQtZGlzcGxheS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFnQ0E7O2NBQUE7QUFhQTs7c0JBQUE7QUE3Q0E7OzBCQUFBO0FBZ0NBOztjQUFBO0FBYUE7O3NCQUFBO0FDL0JBOztzQkFBQTtBQ1pBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDbUJKO0FEaEJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLHlCRmlCWTtFRWhCWixXRlRTO0VDSVQsaUhBQUE7RUNPQSxjQUFBO0FDbUJKO0FEaEJBO0VBQ0ksb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDbUJKO0FEaEJBO0VBQ0ksT0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ21CSjtBRGhCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ21CSjtBRGhCQTtFQUNJLFlBQUE7QUNtQko7QURoQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNtQko7QURoQkE7RUFDSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNtQko7QURoQkE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUNtQko7QURmSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ2tCUjtBRGpCUTtFQUNJLFVBQUE7QUNtQlo7QURkQTtFQUNJLFlBQUE7QUNpQko7QURkQTtFQUNJLFdBQUE7QUNpQko7QURkQTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtBQ2lCSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3JlcG9ydHMvcmVwb3J0LWRpc3BsYXkvcmVwb3J0LWRpc3BsYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICMxOTM3ZWE7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMDUxYzJjO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkY29sb3I6ICMwMDAsICRkZXB0aDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAxcHggKiAoJGRlcHRoIC0gMSkgcmdiYSgjMDAwLCAuMiksXG4gICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLFxuICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRlcm5hcnk7XG4gICAgY29sb3I6ICRmb250LWxpZ2h0O1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3c7XG4gICAgcGFkZGluZzogMC41ZW07XG59XG5cbmxhYmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sb2NhdGlvbiB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDI1JTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wZXJpb2Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmdhcCB7XG4gICAgcGFkZGluZzogMWVtO1xufVxuXG4uYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGlzcGxheSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLWhlaWdodDogNTAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xufVxuXG5idXR0b24ge1xuICAgIG1hcmdpbjogMC4yNWVtO1xuICAgIHdpZHRoOiA4ZW07XG4gICAgaGVpZ2h0OiAyLjc1ZW07XG59XG5cbm1hdC1vcHRpb24ge1xuICAgIC5vcHRpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuY29kZSB7XG4gICAgICAgICAgICB3aWR0aDogNGVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5tYXQtc3Bpbm5lciB7XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gICAgaGVpZ2h0OiAzZW07XG59XG5cbi5zZWxlY3Rpb24ge1xuICAgIG9wYWNpdHk6IDAuNzU7XG4gICAgZm9udC1zaXplOiAwLjc1ZW07XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTFjMmM7XG4gIGNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5sb2NhdGlvbiB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMjUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5wZXJpb2Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZ2FwIHtcbiAgcGFkZGluZzogMWVtO1xufVxuXG4uYWN0aW9ucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaXNwbGF5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiA1MCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luOiAwLjI1ZW07XG4gIHdpZHRoOiA4ZW07XG4gIGhlaWdodDogMi43NWVtO1xufVxuXG5tYXQtb3B0aW9uIC5vcHRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxubWF0LW9wdGlvbiAub3B0aW9uIC5jb2RlIHtcbiAgd2lkdGg6IDRlbTtcbn1cblxubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgaGVpZ2h0OiAzZW07XG59XG5cbi5zZWxlY3Rpb24ge1xuICBvcGFjaXR5OiAwLjc1O1xuICBmb250LXNpemU6IDAuNzVlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportDisplayComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'a-report-display',
          templateUrl: './report-display.component.html',
          styleUrls: ['./report-display.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]
        }];
      }, {
        report: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/reports/report-table/report-table.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/shell/reports/report-table/report-table.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ReportTableComponent */

  /***/
  function srcAppShellReportsReportTableReportTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportTableComponent", function () {
      return ReportTableComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ReportTableComponent_ng_container_1_th_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", key_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r3);
      }
    }

    function ReportTableComponent_ng_container_1_td_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var element_r7 = ctx.$implicit;

        var key_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", key_r3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](element_r7[key_r3]);
      }
    }

    function ReportTableComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportTableComponent_ng_container_1_th_1_Template, 2, 2, "th", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReportTableComponent_ng_container_1_td_2_Template, 2, 2, "td", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var key_r3 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkColumnDef", key_r3);
      }
    }

    function ReportTableComponent_tr_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 9);
      }
    }

    function ReportTableComponent_tr_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 10);
      }
    }

    var ReportTableComponent =
    /*#__PURE__*/
    function () {
      function ReportTableComponent() {
        _classCallCheck(this, ReportTableComponent);

        /** List of report table data */
        this.list = [];
        this.fields = [];
      }

      _createClass(ReportTableComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this3 = this;

          /* istanbul ignore else */
          if (changes.list && this.list && this.list.length) {
            this.fields = Object.keys(this.list[0]).filter(function (i) {
              return _this3.details.hide_fields.indexOf(i) < 0;
            });
          }
        }
      }]);

      return ReportTableComponent;
    }();

    ReportTableComponent.ɵfac = function ReportTableComponent_Factory(t) {
      return new (t || ReportTableComponent)();
    };

    ReportTableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReportTableComponent,
      selectors: [["a-report-table"]],
      inputs: {
        list: "list",
        details: "details"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 4,
      vars: 4,
      consts: [["cdk-table", "", 3, "dataSource"], [3, "cdkColumnDef", 4, "ngFor", "ngForOf"], ["cdk-header-row", "", 4, "cdkHeaderRowDef"], ["cdk-row", "", 4, "cdkRowDef", "cdkRowDefColumns"], [3, "cdkColumnDef"], ["cdk-header-cell", "", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""], ["cdk-header-row", ""], ["cdk-row", ""]],
      template: function ReportTableComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportTableComponent_ng_container_1_Template, 3, 1, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReportTableComponent_tr_2_Template, 1, 0, "tr", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ReportTableComponent_tr_3_Template, 1, 0, "tr", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.list);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.fields);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkHeaderRowDef", ctx.fields);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkRowDefColumns", ctx.fields);
        }
      },
      directives: [_angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkTable"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkColumnDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkHeaderRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_1__["CdkRow"]],
      styles: ["[_nghost-%COMP%] {\n  font-size: 0.9em;\n}\ntable[_ngcontent-%COMP%] {\n  border-collapse: collapse;\n  background-color: #fff;\n  width: 100%;\n}\nth[_ngcontent-%COMP%] {\n  padding: 0.25em 0.5em;\n}\ntd[_ngcontent-%COMP%] {\n  border-right: 1px solid #ccc;\n  padding: 0.25em 0.5em;\n}\ntd[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n[cdk-header-row][_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n  background-color: #051c2c;\n  color: #fff;\n}\ntr[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvcmVwb3J0cy9yZXBvcnQtdGFibGUvcmVwb3J0LXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9yZXBvcnRzL3JlcG9ydC10YWJsZS9yZXBvcnQtdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBZ0NBOztjQUFBO0FBYUE7O3NCQUFBO0FDNUNBO0VBQ0ksZ0JBQUE7QUNRSjtBRExBO0VBQ0kseUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7QUNRSjtBRExBO0VBQ0kscUJBQUE7QUNRSjtBRExBO0VBQ0ksNEJBQUE7RUFDQSxxQkFBQTtBQ1FKO0FETkk7RUFDSSxZQUFBO0FDUVI7QURKQTtFQUNJLDZCQUFBO0VBQ0EseUJESVk7RUNIWixXRHRCUztBRTZCYjtBREhJO0VBQ0kscUNBQUE7QUNNUiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3JlcG9ydHMvcmVwb3J0LXRhYmxlL3JlcG9ydC10YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogI2YwZjBmMDtcbiRmb290ZXItYmFjazogIzI2MzIzODtcblxuJGNvbG9yLXRlcm5hcnk6ICMwNTFjMmM7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuOmhvc3Qge1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbnRoIHtcbiAgICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xufVxuXG50ZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbiAgICBwYWRkaW5nOiAuMjVlbSAuNWVtO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cbn1cblxuW2Nkay1oZWFkZXItcm93XSB7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXRlcm5hcnk7XG4gICAgY29sb3I6ICRmb250LWxpZ2h0O1xufVxuXG50ciB7XG4gICAgJjpudGgtY2hpbGQoMm4pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAwLjA1KTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG46aG9zdCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbnRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbnRoIHtcbiAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xufVxuXG50ZCB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcbn1cbnRkOmxhc3QtY2hpbGQge1xuICBib3JkZXI6IG5vbmU7XG59XG5cbltjZGstaGVhZGVyLXJvd10ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2YwZjBmMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA1MWMyYztcbiAgY29sb3I6ICNmZmY7XG59XG5cbnRyOm50aC1jaGlsZCgybikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportTableComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'a-report-table',
          templateUrl: './report-table.component.html',
          styleUrls: ['./report-table.component.scss']
        }]
      }], null, {
        list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        details: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/reports/reports.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/shell/reports/reports.component.ts ***!
    \****************************************************/

  /*! exports provided: ReportsComponent */

  /***/
  function srcAppShellReportsReportsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsComponent", function () {
      return ReportsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/shared/base.directive */
    "./src/app/shared/base.directive.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    function ReportsComponent_div_4_mat_form_field_1_mat_option_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var report_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", report_r6.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", report_r6.name, " ");
      }
    }

    function ReportsComponent_div_4_mat_form_field_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ReportsComponent_div_4_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r7.active_report = $event;
        })("ngModelChange", function ReportsComponent_div_4_mat_form_field_1_Template_mat_select_ngModelChange_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r9.updateReport();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ReportsComponent_div_4_mat_form_field_1_mat_option_2_Template, 2, 2, "mat-option", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r4.active_report);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.reports);
      }
    }

    function ReportsComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportsComponent_div_4_mat_form_field_1_Template, 3, 2, "mat-form-field", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.reports && ctx_r0.reports.length > 1);
      }
    }

    var _c0 = function _c0(a1) {
      return ["/reports", a1];
    };

    var _c1 = function _c1() {
      return {
        "class": "material-icons",
        content: "keyboard_arrow_right"
      };
    };

    function ReportsComponent_div_6_a_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-icon", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var report_r11 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, report_r11.id));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", report_r11.icon);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r11.short_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](report_r11.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
      }
    }

    function ReportsComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ReportsComponent_div_6_a_1_Template, 10, 8, "a", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.reports);
      }
    }

    function ReportsComponent_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a-report-display", 20);
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("report", ctx_r3.the_report);
      }
    }

    var ReportsComponent =
    /*#__PURE__*/
    function (_src_app_shared_base_) {
      _inherits(ReportsComponent, _src_app_shared_base_);

      var _super = _createSuper(ReportsComponent);

      function ReportsComponent(_route, _router) {
        var _this4;

        _classCallCheck(this, ReportsComponent);

        _this4 = _super.call(this);
        _this4._route = _route;
        _this4._router = _router;
        /** List of available reports to display */

        _this4.reports = [{
          id: 'bookings',
          name: 'Aggregate Bookings Report',
          short_name: 'Bookings',
          description: 'Generate comprehensive report on various aspects of bookings',
          hide_fields: ['room_email'],
          icon: {
            type: 'img',
            src: 'assets/img/report-booking.svg'
          }
        }, {
          id: 'catering',
          name: 'Aggregate Charge Back Report',
          short_name: 'Catering',
          description: 'View confirmed catering report or mark up unconfirmed catering',
          hide_fields: ['room_email'],
          icon: {
            type: 'icon',
            "class": 'material-icons',
            content: 'room_service'
          }
        }];
        return _this4;
      }

      _createClass(ReportsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.subscription('route.params', this._route.paramMap.subscribe(function (params) {
            if (params.has('report')) {
              _this5.active_report = params.get('report');
            }
          }));
        }
      }, {
        key: "updateReport",
        value: function updateReport() {
          this._router.navigate(['/reports', this.active_report]);
        }
      }, {
        key: "the_report",
        get: function get() {
          var _this6 = this;

          return this.reports.find(function (report) {
            return report.id === _this6.active_report;
          });
        }
      }]);

      return ReportsComponent;
    }(src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"]);

    ReportsComponent.ɵfac = function ReportsComponent_Factory(t) {
      return new (t || ReportsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    ReportsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ReportsComponent,
      selectors: [["a-reports"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 9,
      vars: 4,
      consts: [[1, "reports"], [1, "group"], [3, "date", "dateChange"], ["class", "topbar", 4, "ngIf"], ["class", "options", 4, "ngIf", "ngIfElse"], ["report_display", ""], [1, "topbar"], ["appearance", "outline", 4, "ngIf"], ["appearance", "outline"], [3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "options"], ["class", "card", "mat-button", "", 3, "routerLink", 4, "ngFor", "ngForOf"], ["mat-button", "", 1, "card", 3, "routerLink"], [1, "content"], [1, "icon"], [3, "icon"], [1, "details"], [1, "desc"], [3, "report"]],
      template: function ReportsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a-topbar-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function ReportsComponent_Template_a_topbar_header_dateChange_3_listener($event) {
            return ctx.date = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ReportsComponent_div_4_Template, 2, 1, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "main");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ReportsComponent_div_6_Template, 2, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ReportsComponent_ng_template_7_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.date);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.active_report);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.active_report)("ngIfElse", _r2);
        }
      },
      styles: ["[_nghost-%COMP%], .reports[_ngcontent-%COMP%], main[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.reports[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  background-color: #ecf1f5;\n}\nmain[_ngcontent-%COMP%] {\n  height: calc(100% - 3.5em);\n}\n.group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 12em;\n}\n.topbar[_ngcontent-%COMP%] {\n  padding: 0.1em 0 0.1em 0.5em;\n  height: 3.5em;\n}\n.topbar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n  width: 18em;\n}\nh3[_ngcontent-%COMP%] {\n  font-weight: 300;\n  margin-top: 0;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  margin: 1em;\n  padding: 1em;\n  font-weight: 300;\n  background-color: #fff;\n  height: 20em;\n}\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.card[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]    > app-icon[_ngcontent-%COMP%] {\n  font-size: 6em;\n  color: #1937ea;\n}\n.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.card[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%]    > app-icon[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n.card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  width: 12em;\n  margin-left: 2.5em;\n  white-space: pre-wrap;\n  line-height: 1.3em;\n  color: rgba(0, 0, 0, 0.6);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvcmVwb3J0cy9yZXBvcnRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9yZXBvcnRzL3JlcG9ydHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBZ0NBOztjQUFBO0FBYUE7O3NCQUFBO0FBN0NBOzswQkFBQTtBQWdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQy9CQTs7c0JBQUE7QUNaQTs7O0VBR0ksWUFBQTtFQUNBLFdBQUE7QUNtQko7QURoQkE7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0FDbUJKO0FEaEJBO0VBQ0ksMEJBQUE7QUNtQko7QURoQkE7RUFDSSxPQUFBO0VBQ0EsZUFBQTtBQ21CSjtBRGhCQTtFQUNJLDRCQUFBO0VBQ0EsYUFBQTtBQ21CSjtBRGpCSTtFQUNJLG1CQUFBO0VBQ0EsV0FBQTtBQ21CUjtBRGZBO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0FDa0JKO0FEZkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDa0JKO0FEZkE7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFRHpDQSxpSEFBQTtFQzJDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDa0JKO0FEaEJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQ2tCUjtBRGZJO0VBQ0ksY0FBQTtFQUNBLGNGaERRO0FHaUVoQjtBRGRJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FDZ0JSO0FEZFE7RUFDSSxjQUFBO0FDZ0JaO0FEWkk7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUNjUiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3JlcG9ydHMvcmVwb3J0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogI2YwZjBmMDtcbiRmb290ZXItYmFjazogIzI2MzIzODtcblxuJGNvbG9yLXRlcm5hcnk6ICMwNTFjMmM7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRjb2xvcjogIzAwMCwgJGRlcHRoOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDFweCAqICgkZGVwdGggLSAxKSByZ2JhKCMwMDAsIC4yKSxcbiAgICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksXG4gICAgICAgICAgICAgICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiQGltcG9ydCAndmFyaWFibGVzJztcbkBpbXBvcnQgJ21peGlucyc7XG5cbjpob3N0LFxuLnJlcG9ydHMsXG5tYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZXBvcnRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMWY1O1xufVxuXG5tYWluIHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNWVtKTtcbn1cblxuLmdyb3VwIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogMTJlbTtcbn1cblxuLnRvcGJhciB7XG4gICAgcGFkZGluZzogLjFlbSAwIC4xZW0gLjVlbTtcbiAgICBoZWlnaHQ6IDMuNWVtO1xuXG4gICAgbWF0LWZvcm0tZmllbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG4gICAgICAgIHdpZHRoOiAxOGVtO1xuICAgIH1cbn1cblxuaDMge1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJkIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3c7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDIwZW07XG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC5pY29uID4gYXBwLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDZlbTtcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIH1cblxuICAgIC5kZXRhaWxzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICA+IGFwcC1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRlc2Mge1xuICAgICAgICB3aWR0aDogMTJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNWVtO1xuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgICAgICAgY29sb3I6IHJnYmEoIzAwMCwgLjYpO1xuICAgIH1cblxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG46aG9zdCxcbi5yZXBvcnRzLFxubWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5yZXBvcnRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMWY1O1xufVxuXG5tYWluIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjVlbSk7XG59XG5cbi5ncm91cCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMTJlbTtcbn1cblxuLnRvcGJhciB7XG4gIHBhZGRpbmc6IDAuMWVtIDAgMC4xZW0gMC41ZW07XG4gIGhlaWdodDogMy41ZW07XG59XG4udG9wYmFyIG1hdC1mb3JtLWZpZWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjVlbTtcbiAgd2lkdGg6IDE4ZW07XG59XG5cbmgzIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLm9wdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtYXJnaW46IDFlbTtcbiAgcGFkZGluZzogMWVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDIwZW07XG59XG4uY2FyZCAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmNhcmQgLmljb24gPiBhcHAtaWNvbiB7XG4gIGZvbnQtc2l6ZTogNmVtO1xuICBjb2xvcjogIzE5MzdlYTtcbn1cbi5jYXJkIC5kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5jYXJkIC5kZXRhaWxzID4gYXBwLWljb24ge1xuICBmb250LXNpemU6IDJlbTtcbn1cbi5jYXJkIC5kZXNjIHtcbiAgd2lkdGg6IDEyZW07XG4gIG1hcmdpbi1sZWZ0OiAyLjVlbTtcbiAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICBsaW5lLWhlaWdodDogMS4zZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'a-reports',
          templateUrl: './reports.component.html',
          styleUrls: ['./reports.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shell/reports/reports.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/shell/reports/reports.module.ts ***!
    \*************************************************/

  /*! exports provided: ReportsModule */

  /***/
  function srcAppShellReportsReportsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ReportsModule", function () {
      return ReportsModule;
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


    var _reports_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./reports.component */
    "./src/app/shell/reports/reports.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _report_display_report_display_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./report-display/report-display.component */
    "./src/app/shell/reports/report-display/report-display.component.ts");
    /* harmony import */


    var _report_table_report_table_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./report-table/report-table.component */
    "./src/app/shell/reports/report-table/report-table.component.ts");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _acaprojects_ngx_date_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @acaprojects/ngx-date-picker */
    "./node_modules/@acaprojects/ngx-date-picker/__ivy_ngcc__/fesm2015/acaprojects-ngx-date-picker.js");
    /* harmony import */


    var _shared_base_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/base.directive */
    "./src/app/shared/base.directive.ts");
    /* harmony import */


    var _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/components/login/login.component */
    "./src/app/shared/components/login/login.component.ts");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");
    /* harmony import */


    var _shared_components_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/components/action-icon/action-icon.component */
    "./src/app/shared/components/action-icon/action-icon.component.ts");
    /* harmony import */


    var _shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../shared/components/topbar-header/topbar-header.component */
    "./src/app/shared/components/topbar-header/topbar-header.component.ts");
    /* harmony import */


    var _shared_components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared/components/searchbar/searchbar.component */
    "./src/app/shared/components/searchbar/searchbar.component.ts");
    /* harmony import */


    var _shared_components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../shared/components/user-avatar/user-avatar.component */
    "./src/app/shared/components/user-avatar/user-avatar.component.ts");
    /* harmony import */


    var _shared_components_forms_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../shared/components/forms/user-form/user-form.component */
    "./src/app/shared/components/forms/user-form/user-form.component.ts");
    /* harmony import */


    var _shared_components_forms_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../shared/components/forms/booking-form/booking-form.component */
    "./src/app/shared/components/forms/booking-form/booking-form.component.ts");
    /* harmony import */


    var _shared_components_popout_menu_popout_menu_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../shared/components/popout-menu/popout-menu.component */
    "./src/app/shared/components/popout-menu/popout-menu.component.ts");
    /* harmony import */


    var _shared_components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../shared/components/feedback/feedback.component */
    "./src/app/shared/components/feedback/feedback.component.ts");
    /* harmony import */


    var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../shared/components/sidebar/sidebar.component */
    "./src/app/shared/components/sidebar/sidebar.component.ts");
    /* harmony import */


    var _shared_directives_cdk_drop_list_scroll_container_directive__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ../../shared/directives/cdk-drop-list-scroll-container.directive */
    "./src/app/shared/directives/cdk-drop-list-scroll-container.directive.ts");
    /* harmony import */


    var _shared_components_custom_fields_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/date-field/date-field.component */
    "./src/app/shared/components/custom-fields/date-field/date-field.component.ts");
    /* harmony import */


    var _shared_components_custom_fields_action_field_action_field_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/action-field/action-field.component */
    "./src/app/shared/components/custom-fields/action-field/action-field.component.ts");
    /* harmony import */


    var _shared_components_custom_fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/time-field/time-field.component */
    "./src/app/shared/components/custom-fields/time-field/time-field.component.ts");
    /* harmony import */


    var _shared_components_custom_fields_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/duration-field/duration-field.component */
    "./src/app/shared/components/custom-fields/duration-field/duration-field.component.ts");
    /* harmony import */


    var _shared_components_custom_fields_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/user-search-field/user-search-field.component */
    "./src/app/shared/components/custom-fields/user-search-field/user-search-field.component.ts");
    /* harmony import */


    var _shared_components_custom_fields_user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/user-list-field/user-list-field.component */
    "./src/app/shared/components/custom-fields/user-list-field/user-list-field.component.ts");
    /* harmony import */


    var _shared_components_custom_fields_counter_counter_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/counter/counter.component */
    "./src/app/shared/components/custom-fields/counter/counter.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
    /* harmony import */


    var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! @angular/cdk/table */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
    /* harmony import */


    var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! @acaprojects/ngx-pipes */
    "./node_modules/@acaprojects/ngx-pipes/__ivy_ngcc__/fesm2015/acaprojects-ngx-pipes.js");

    var ROUTES = [{
      path: '',
      component: _reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"]
    }, {
      path: ':report',
      component: _reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];

    var ReportsModule = function ReportsModule() {
      _classCallCheck(this, ReportsModule);
    };

    ReportsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ReportsModule
    });
    ReportsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ReportsModule_Factory(t) {
        return new (t || ReportsModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReportsModule, {
        declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"], _report_display_report_display_component__WEBPACK_IMPORTED_MODULE_6__["ReportDisplayComponent"], _report_table_report_table_component__WEBPACK_IMPORTED_MODULE_7__["ReportTableComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReportsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"], _report_display_report_display_component__WEBPACK_IMPORTED_MODULE_6__["ReportDisplayComponent"], _report_table_report_table_component__WEBPACK_IMPORTED_MODULE_7__["ReportTableComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(ROUTES), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"]]
        }]
      }], null, null);
    })();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_l"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_8__["ɵa"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_8__["ɵb"], _acaprojects_ngx_date_picker__WEBPACK_IMPORTED_MODULE_9__["ADatePickerComponent"], _shared_base_directive__WEBPACK_IMPORTED_MODULE_10__["BaseDirective"], _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_11__["LoginComponent"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__["IconComponent"], _shared_components_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_13__["ActionIconComponent"], _shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_14__["TopbarHeaderComponent"], _shared_components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_15__["SearchbarComponent"], _shared_components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_16__["UserAvatarComponent"], _shared_components_forms_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_17__["UserFormComponent"], _shared_components_forms_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_18__["BookingFormComponent"], _shared_components_popout_menu_popout_menu_component__WEBPACK_IMPORTED_MODULE_19__["PopoutMenuComponent"], _shared_components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_20__["FeedbackComponent"], _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__["SidebarComponent"], _shared_directives_cdk_drop_list_scroll_container_directive__WEBPACK_IMPORTED_MODULE_22__["CdkDropListScrollContainer"], _shared_components_custom_fields_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_23__["DateFieldComponent"], _shared_components_custom_fields_action_field_action_field_component__WEBPACK_IMPORTED_MODULE_24__["ActionFieldComponent"], _shared_components_custom_fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_25__["TimeFieldComponent"], _shared_components_custom_fields_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_26__["DurationFieldComponent"], _shared_components_custom_fields_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_27__["UserSearchFieldComponent"], _shared_components_custom_fields_user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_28__["UserListFieldComponent"], _shared_components_custom_fields_counter_counter_component__WEBPACK_IMPORTED_MODULE_29__["CounterComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_30__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_31__["Dir"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_32__["MatSnackBarContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_33__["MatDialogActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_34__["MatSuffix"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_35__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_35__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_36__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_36__["MatTextareaAutosize"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__["MatProgressSpinner"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_37__["MatSpinner"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_38__["MatProgressBar"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_39__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_40__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_40__["MatOptgroup"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_39__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_39__["MatAutocompleteOrigin"], _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_41__["MatSelectTrigger"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_42__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_42__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_42__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_42__["MatChipRemove"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_42__["MatChipAvatar"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_42__["MatChipTrailingIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_40__["MatRipple"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_43__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_43__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_43__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_43__["MatMenuContent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_44__["MatCheckboxRequiredValidator"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__["MatTooltip"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_45__["TooltipComponent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_46__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_46__["MatRadioButton"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_47__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_47__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_47__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_47__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_47__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_47__["MatTabContent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_48__["MatSlideToggleRequiredValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_48__["MatSlideToggle"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_49__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_49__["CdkScrollable"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_49__["CdkVirtualForOf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_49__["CdkVirtualScrollViewport"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_50__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_50__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_50__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_50__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_50__["CdkDragPreview"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_50__["CdkDragPlaceholder"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkTable"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkCellOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkHeaderCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkFooterCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkColumnDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkHeaderCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkFooterCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkHeaderRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkHeaderRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkFooterRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkFooterRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["FooterRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_51__["CdkTextColumn"], _reports_component__WEBPACK_IMPORTED_MODULE_4__["ReportsComponent"], _report_display_report_display_component__WEBPACK_IMPORTED_MODULE_6__["ReportDisplayComponent"], _report_table_report_table_component__WEBPACK_IMPORTED_MODULE_7__["ReportTableComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"], _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_52__["ɵa"], _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_52__["ɵb"]]);
    /***/

  }
}]);
//# sourceMappingURL=shell-reports-reports-module-es5.js.map