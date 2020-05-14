function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-schedule-schedule-module"], {
  /***/
  "./src/app/shell/schedule/event-list/event-list.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shell/schedule/event-list/event-list.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ScheduleEventListComponent */

  /***/
  function srcAppShellScheduleEventListEventListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleEventListComponent", function () {
      return ScheduleEventListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var src_app_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/utilities/general.utilities */
    "./src/app/shared/utilities/general.utilities.ts");
    /* harmony import */


    var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/base.directive */
    "./src/app/shared/base.directive.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_services_data_users_user_class__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/data/users/user.class */
    "./src/app/services/data/users/user.class.ts");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");
    /* harmony import */


    var _acaprojects_ngx_date_picker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @acaprojects/ngx-date-picker */
    "./node_modules/@acaprojects/ngx-date-picker/__ivy_ngcc__/fesm2015/acaprojects-ngx-date-picker.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./list-item/list-item.component */
    "./src/app/shell/schedule/event-list/list-item/list-item.component.ts");

    function ScheduleEventListComponent_mat_form_field_3_mat_option_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var user_r6 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", user_r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", user_r6 == null ? null : user_r6.name, " ");
      }
    }

    function ScheduleEventListComponent_mat_form_field_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 18, 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function ScheduleEventListComponent_mat_form_field_3_Template_mat_select_valueChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.active_user = $event;
        })("valueChange", function ScheduleEventListComponent_mat_form_field_3_Template_mat_select_valueChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.updateEvents($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScheduleEventListComponent_mat_form_field_3_mat_option_3_Template, 2, 2, "mat-option", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx_r0.active_user);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.user_list);
      }
    }

    function ScheduleEventListComponent_mat_progress_bar_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 22);
      }
    }

    function ScheduleEventListComponent_ng_container_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "schedule-event-item", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "slice");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var item_r10 = ctx.$implicit;

        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r2.active_user)("event", item_r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](2, 3, item_r10.id, 0, 10));
      }
    }

    var _c0 = function _c0() {
      return {
        "class": "material-icons",
        content: "event"
      };
    };

    var ScheduleEventListComponent =
    /*#__PURE__*/
    function (_src_app_shared_base_) {
      _inherits(ScheduleEventListComponent, _src_app_shared_base_);

      var _super = _createSuper(ScheduleEventListComponent);

      function ScheduleEventListComponent(_service, _route) {
        var _this;

        _classCallCheck(this, ScheduleEventListComponent);

        _this = _super.call(this);
        _this._service = _service;
        _this._route = _route;
        /** Emitter  */

        _this.event_list = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** List of items to display on the event list */

        _this.events = [];
        /** Number of days to render in the list from the current date */

        _this.shown_offset = 7;
        /** Offset of the date to show events for */

        _this.date_offset = 0;
        /** Current UTC epoch */

        _this.now = dayjs__WEBPACK_IMPORTED_MODULE_6__().valueOf();
        /** Whether list is displaying the top of the first item */

        _this.at_top = true;
        /** List of users available to view schedules for */

        _this.user_list = [];
        return _this;
      }

      _createClass(ScheduleEventListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.subscription('route.query', this._route.queryParamMap.subscribe(function (params) {
            /* istanbul ignore else */
            if (params.has('email')) {
              _this2.active_user = _this2._service.Users.find(params.get('email')) || new src_app_services_data_users_user_class__WEBPACK_IMPORTED_MODULE_7__["User"](_this2._service.Users, {
                email: params.get('email')
              });
            }
          }));
          this.updateEvents();
          this.interval('update_events', function () {
            return _this2.updateEvents();
          }, 10 * 1000);
          this.subscription('scroll', this.scroll_viewport.elementScrolled().subscribe(function () {
            return _this2.onScroll();
          }));
          this.subscription('delegate_list', this._service.Users.listen('delegates').subscribe(function (list) {
            /* istanbul ignore else */
            if (list && list[0]) {
              _this2.user_list = [_this2._service.Users.current].concat(list);
              /* istanbul ignore else */

              if (!_this2.active_user) {
                _this2.active_user = _this2.user_list[0];
              }
            }
          }));
        }
        /**
         * Update the list of events for the currently visible period
         */

      }, {
        key: "updateEvents",
        value: function updateEvents() {
          var _this3 = this;

          /* istanbul ignore else */
          if (!this.event_promise) {
            this.event_promise = new Promise(function (resolve) {
              var start = dayjs__WEBPACK_IMPORTED_MODULE_6__().add(_this3.date_offset, 'd').startOf('d');
              var end = start.add(7, 'd').endOf('d');
              _this3.loading = true;

              _this3._service.Bookings.query({
                email: (_this3.active_user ? _this3.active_user.email : '') || _this3._service.Users.current.email,
                from: start.unix(),
                to: end.unix()
              }).then(function (list) {
                _this3._service.Bookings.updateList(_this3._service.Bookings.filter(), list);

                var old_events = _this3.events.filter(function (i) {
                  var date = dayjs__WEBPACK_IMPORTED_MODULE_6__(i.date);
                  return i.type !== 'date' && i.type !== 'empty' && (date.isBefore(start, 's') || date.isAfter(end, 's'));
                });

                _this3.events = _this3.processEvents(list, old_events); // Update event list for view listing

                var event_list = _this3.events.filter(function (i) {
                  return i.type !== 'date' && i.type !== 'empty';
                });

                _this3.event_list.emit(event_list.map(function (i) {
                  return {
                    id: i.id,
                    date: i.date
                  };
                })); // Scroll to date if needed


                _this3.timeout('scroll_to', function () {
                  return _this3.scrollTo();
                });

                _this3.loading = false;
                delete _this3.event_promise;
              }, function () {
                _this3.loading = false;
                delete _this3.event_promise;
              });
            });
          }

          return this.event_promise;
        }
        /**
         * Process list of new items and merge with the old
         * @param list List of new bookings to generate event blocks for
         * @param old_events List of relevant old event blocks
         */

      }, {
        key: "processEvents",
        value: function processEvents(list, old_events) {
          var events = [];
          var now = dayjs__WEBPACK_IMPORTED_MODULE_6__();
          var date = dayjs__WEBPACK_IMPORTED_MODULE_6__().startOf('d');
          var end = date.add(this.shown_offset, 'd').endOf('d');

          for (; date.isBefore(end); date = date.add(1, 'd')) {
            var date_str = date.format('YYYY-MM-DD'); // Add date block

            events.push({
              id: date_str,
              type: 'date',
              order_id: date_str,
              title: date.format('dddd, DD MMM'),
              is_today: date.isSame(now, 'd'),
              date: date.valueOf()
            });

            var filter_fn = function filter_fn(i) {
              var day = dayjs__WEBPACK_IMPORTED_MODULE_6__(i.date);
              return day.isAfter(date, 's') && day.isBefore(date.endOf('d'), 's');
            }; // Add events for today to list


            var new_items = list.filter(filter_fn);
            var old_items = old_events.filter(filter_fn);

            if (new_items.length || old_items.length) {
              events = events.concat(new_items).concat(old_items);
            } else {
              // Add block for no events if so
              events.push({
                id: "".concat(date_str, "-empty"),
                type: 'empty',
                order_id: date_str,
                title: "No items for ".concat(date.format('dddd, DD MMM')),
                is_today: date.isSame(now, 'd'),
                date: date.valueOf() + 1
              });
            }
          }

          events.sort(function (a, b) {
            return a.date - b.date;
          });
          events = Object(src_app_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_4__["unique"])(events, 'id');
          return events;
        }
        /**
         * Handle scrolling on the event list
         */

      }, {
        key: "onScroll",
        value: function onScroll() {
          /* istanbul ignore else */
          if (!this.event_promise) {
            this.show_calendar = false;
            var range = this.scroll_viewport.getRenderedRange();
            var dist = range.end - range.start;
            var nearest = this.events[range.start];
            this.at_top = range.start === 0 && this.scroll_viewport.measureScrollOffset() < 5;
            this.date_offset = dayjs__WEBPACK_IMPORTED_MODULE_6__(nearest.date).diff(dayjs__WEBPACK_IMPORTED_MODULE_6__(), 'd') - 1;
            this.date = dayjs__WEBPACK_IMPORTED_MODULE_6__((this.events[dist + range.start] || {}).date).subtract(1, 'd').valueOf();
            /* istanbul ignore else */

            if (range.end > this.events.length - 7) {
              this.shown_offset += 3;
              this.updateEvents();
            }
          }
        }
        /**
         * Update the date offset
         * @param date UTC milliseconds epoch of new date offset
         */

      }, {
        key: "updateDate",
        value: function updateDate(date) {
          var day = dayjs__WEBPACK_IMPORTED_MODULE_6__(date);
          this.date_offset = day.diff(dayjs__WEBPACK_IMPORTED_MODULE_6__(), 'd') - 1;
          this.shown_offset = Math.max(this.shown_offset, this.date_offset + 3);
          this.scroll_to = day.format('YYYY-MM-DD');
          delete this.event_promise;
          this.show_calendar = false;
          this.date = dayjs__WEBPACK_IMPORTED_MODULE_6__().add(this.date_offset, 'd').valueOf();
          this.updateEvents();
        }
        /** Close the menu popup with the date picker */

      }, {
        key: "closeDatePicker",
        value: function closeDatePicker() {
          this.trigger.closeMenu();
        }
        /* istanbul ignore next */

      }, {
        key: "trackByFn",
        value: function trackByFn(item, index) {
          return item ? item.id : null;
        }
        /**
         * Scroll to a previously defined date on the event list
         */

      }, {
        key: "scrollTo",
        value: function scrollTo() {
          var _this4 = this;

          /* istanbul ignore else */
          if (this.scroll_to) {
            var index = this.events.findIndex(function (i) {
              return i.id === _this4.scroll_to;
            });
            /* istanbul ignore else */

            if (index > -1) {
              this.scroll_viewport.scrollToIndex(index, 'smooth');
              this.scroll_to = null;
            }
          }
        }
      }]);

      return ScheduleEventListComponent;
    }(src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_5__["BaseDirective"]);

    ScheduleEventListComponent.ɵfac = function ScheduleEventListComponent_Factory(t) {
      return new (t || ScheduleEventListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_app_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    ScheduleEventListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScheduleEventListComponent,
      selectors: [["schedule-event-list"]],
      viewQuery: function ScheduleEventListComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroll_viewport = _t.first);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.trigger = _t.first);
        }
      },
      outputs: {
        event_list: "eventList"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 18,
      vars: 10,
      consts: [[1, "event-list"], [1, "header", "dark-mode"], [1, "user"], ["appearance", "outline", 4, "ngIf"], [1, "flex"], [1, "date"], ["mat-icon-button", "", 3, "matMenuTriggerFor"], [3, "icon"], [1, "progress"], ["mode", "indeterminate", 4, "ngIf"], [1, "body"], ["itemSize", "80", 1, "viewport", 3, "scroll"], [4, "cdkVirtualFor", "cdkVirtualForOf", "cdkVirtualForTrackBy"], [1, "footer"], ["appMenu", "matMenu"], ["mat-menu-item", "", 1, "date-picker", 3, "click"], [3, "ngModel", "ngModelChange"], ["appearance", "outline"], [3, "value", "valueChange"], ["select", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["mode", "indeterminate"], [3, "user", "event"]],
      template: function ScheduleEventListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScheduleEventListComponent_mat_form_field_3_Template, 4, 2, "mat-form-field", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-icon", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ScheduleEventListComponent_mat_progress_bar_9_Template, 1, 0, "mat-progress-bar", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "cdk-virtual-scroll-viewport", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScheduleEventListComponent_Template_cdk_virtual_scroll_viewport_scroll_11_listener() {
            return ctx.onScroll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, ScheduleEventListComponent_ng_container_12_Template, 3, 7, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-menu", null, 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ScheduleEventListComponent_Template_div_click_16_listener($event) {
            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a-date-picker", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function ScheduleEventListComponent_Template_a_date_picker_ngModelChange_17_listener($event) {
            return ctx.date = $event;
          })("ngModelChange", function ScheduleEventListComponent_Template_a_date_picker_ngModelChange_17_listener($event) {
            ctx.updateDate($event);
            return ctx.closeDatePicker();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("scrolled", !ctx.at_top);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user_list && ctx.user_list.length > 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkVirtualForOf", ctx.events)("cdkVirtualForTrackBy", ctx.trackByFn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.date);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["IconComponent"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuItem"], _acaprojects_ngx_date_picker__WEBPACK_IMPORTED_MODULE_12__["ADatePickerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_15__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBar"], _list_item_list_item_component__WEBPACK_IMPORTED_MODULE_18__["ScheduleEventListItemComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["SlicePipe"]],
      styles: [".event-list[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.progress[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  z-index: 999;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: linear-gradient(to right, #051C2C, #051C2C 40%, #0B2453 60%, #1F40E6 100%);\n  color: #fff;\n  height: 3.5em;\n  width: 100%;\n  z-index: 10;\n  transition: box-shadow 200ms;\n}\n.header.scrolled[_ngcontent-%COMP%] {\n  box-shadow: 0 1px 3px 2px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n.header[_ngcontent-%COMP%]   .user[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 0 0.5em;\n}\n.date[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0.5em;\n}\n.date[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  height: 2em;\n  width: 2em;\n}\n.flex[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 1px;\n}\n.body[_ngcontent-%COMP%] {\n  min-height: 50%;\n  max-height: 100%;\n  width: 100%;\n  flex: 1;\n  background-color: #e6e6e6;\n  overflow: auto;\n}\n.viewport[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  overflow: hidden auto;\n}\n.load-state[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  bottom: 1em;\n  transform: translateX(-50%);\n  font-size: 0.75em;\n}\n.date-picker[_ngcontent-%COMP%] {\n  height: 26.5em;\n}\n.date-picker[_ngcontent-%COMP%]:hover {\n  background: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoZWxsL3NjaGVkdWxlL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvc2NoZWR1bGUvZXZlbnQtbGlzdC9ldmVudC1saXN0LmNvbXBvbmVudC5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBaUNBOztjQUFBO0FBYUE7O3NCQUFBO0FDM0NBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ01KO0FESEE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ01KO0FESEE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzRkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSw0QkFBQTtBQ01KO0FESkk7RUV6QkEsaUhBQUE7QURnQ0o7QURISTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ0tSO0FEREE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7QUNJSjtBREZJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0lSO0FEQUE7RUFDSSxPQUFBO0VBQ0EsY0FBQTtBQ0dKO0FEQUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0dKO0FEQUE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDR0o7QURBQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSwyQkFBQTtFQUNBLGlCQUFBO0FDR0o7QURBQTtFQUNJLGNBQUE7QUNHSjtBREZJO0VBQ0ksZ0JBQUE7QUNJUiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3NjaGVkdWxlL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogI2YwZjBmMDtcbiRmb290ZXItYmFjazogIzI2MzIzODtcbiRoZWFkZXItYmFjazogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDUxQzJDLCAjMDUxQzJDIDQwJSwgIzBCMjQ1MyA2MCUsICMxRjQwRTYgMTAwJSk7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMDUxYzJjO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuLmV2ZW50LWxpc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnByb2dyZXNzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDk5OTtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA1MUMyQywgIzA1MUMyQyA0MCUsICMwQjI0NTMgNjAlLCAjMUY0MEU2IDEwMCUpO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMy41ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogMTA7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAyMDBtcztcblxuICAgICYuc2Nyb2xsZWQge1xuICAgICAgICBAaW5jbHVkZSBib3gtc2hhZG93KCMwMDAsIDMpO1xuICAgIH1cblxuICAgIC51c2VyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwIC41ZW07XG4gICAgfVxufVxuXG4uZGF0ZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbjogLjVlbTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgIHdpZHRoOiAyZW07XG4gICAgfVxufVxuXG4uZmxleCB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDFweDtcbn1cblxuLmJvZHkge1xuICAgIG1pbi1oZWlnaHQ6IDUwJTtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnZpZXdwb3J0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xufVxuXG4ubG9hZC1zdGF0ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3R0b206IDFlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZm9udC1zaXplOiAuNzVlbTtcbn1cblxuLmRhdGUtcGlja2VyIHtcbiAgICBoZWlnaHQ6IDI2LjVlbTtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uZXZlbnQtbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ucHJvZ3Jlc3Mge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA1MUMyQywgIzA1MUMyQyA0MCUsICMwQjI0NTMgNjAlLCAjMUY0MEU2IDEwMCUpO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAzLjVlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDEwO1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDIwMG1zO1xufVxuLmhlYWRlci5zY3JvbGxlZCB7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuLmhlYWRlciAudXNlciB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMCAwLjVlbTtcbn1cblxuLmRhdGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMC41ZW07XG59XG4uZGF0ZSBidXR0b24ge1xuICBmb250LXNpemU6IDEuMjVyZW07XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xufVxuXG4uZmxleCB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMXB4O1xufVxuXG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4udmlld3BvcnQge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG59XG5cbi5sb2FkLXN0YXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIGJvdHRvbTogMWVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xufVxuXG4uZGF0ZS1waWNrZXIge1xuICBoZWlnaHQ6IDI2LjVlbTtcbn1cbi5kYXRlLXBpY2tlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG59IiwiXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRjb2xvcjogIzAwMCwgJGRlcHRoOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDFweCAqICgkZGVwdGggLSAxKSByZ2JhKCMwMDAsIC4yKSxcbiAgICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksXG4gICAgICAgICAgICAgICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuIl19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleEventListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'schedule-event-list',
          templateUrl: './event-list.component.html',
          styleUrls: ['./event-list.component.scss']
        }]
      }], function () {
        return [{
          type: _services_app_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, {
        event_list: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"],
          args: ['eventList']
        }],
        scroll_viewport: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"], {
            "static": true
          }]
        }],
        trigger: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [_angular_material_menu__WEBPACK_IMPORTED_MODULE_8__["MatMenuTrigger"], {
            "static": true
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/schedule/event-list/list-item/list-item.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/shell/schedule/event-list/list-item/list-item.component.ts ***!
    \****************************************************************************/

  /*! exports provided: ScheduleEventListItemComponent */

  /***/
  function srcAppShellScheduleEventListListItemListItemComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleEventListItemComponent", function () {
      return ScheduleEventListItemComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/base.directive */
    "./src/app/shared/base.directive.ts");
    /* harmony import */


    var src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data/bookings/booking.class */
    "./src/app/services/data/bookings/booking.class.ts");
    /* harmony import */


    var src_app_overlays_meeting_details_overlay_meeting_details_overlay_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/overlays/meeting-details-overlay/meeting-details-overlay.component */
    "./src/app/overlays/meeting-details-overlay/meeting-details-overlay.component.ts");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var src_app_services_data_users_user_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/data/users/user.class */
    "./src/app/services/data/users/user.class.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");

    function ScheduleEventListItemComponent_div_0_div_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.event.title);
      }
    }

    function ScheduleEventListItemComponent_div_0_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" No events for ", ctx_r2.date_display, " ");
      }
    }

    function ScheduleEventListItemComponent_div_0_div_4_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In Progress");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ScheduleEventListItemComponent_div_0_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function ScheduleEventListItemComponent_div_0_div_4_Template_a_tapped_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r5.openDetailsModal();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ScheduleEventListItemComponent_div_0_div_4_div_6_Template, 2, 0, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.time);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.in_progress);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/img/" + ctx_r3.type_image + ".svg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.event.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.location || ctx_r3.event.location_name || "No location");
      }
    }

    function ScheduleEventListItemComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ScheduleEventListItemComponent_div_0_div_2_Template, 2, 1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ScheduleEventListItemComponent_div_0_div_3_Template, 2, 1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ScheduleEventListItemComponent_div_0_div_4_Template, 16, 5, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("event-item " + ctx_r0.event.type + " " + ctx_r0.status);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx_r0.event.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r0.event.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "empty");
      }
    }

    var ScheduleEventListItemComponent =
    /*#__PURE__*/
    function (_src_app_shared_base_2) {
      _inherits(ScheduleEventListItemComponent, _src_app_shared_base_2);

      var _super2 = _createSuper(ScheduleEventListItemComponent);

      function ScheduleEventListItemComponent(_dialog, _service) {
        var _this5;

        _classCallCheck(this, ScheduleEventListItemComponent);

        _this5 = _super2.call(this);
        _this5._dialog = _dialog;
        _this5._service = _service;
        return _this5;
      }

      _createClass(ScheduleEventListItemComponent, [{
        key: "openDetailsModal",
        value: function openDetailsModal() {
          /* istanbul ignore else */
          if (this.event instanceof src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_3__["Booking"]) {
            this._dialog.open(src_app_overlays_meeting_details_overlay_meeting_details_overlay_component__WEBPACK_IMPORTED_MODULE_4__["MeetingDetailsOverlayComponent"], {
              maxHeight: 'auto',
              maxWidth: 'auto',
              width: 'auto',
              height: 'auto',
              hasBackdrop: false,
              closeOnNavigation: true,
              data: {
                booking: this.event,
                as_delegate: this._service.Users.current.email === (this.user || {}).email,
                delegate: this.user.email,
                is_first: false,
                is_last: false
              }
            });
          }
        }
      }, {
        key: "in_progress",
        get: function get() {
          return this.event.status === 'in_progress';
        }
      }, {
        key: "date_display",
        get: function get() {
          var date = dayjs__WEBPACK_IMPORTED_MODULE_7__(this.event.date);
          var now = dayjs__WEBPACK_IMPORTED_MODULE_7__();
          return now.isSame(date, 'd') ? 'Today' : date.format('DD MMM YYYY');
        }
        /** Display location of the booking event */

      }, {
        key: "location",
        get: function get() {
          var booking = this.event;
          return (booking.space_list || [booking.space]).map(function (i) {
            return i.name;
          }).join(', ');
        }
        /** Image name to display for the event */

      }, {
        key: "type_image",
        get: function get() {
          var booking = this.event;
          return booking.has_visitors ? 'external' : 'book_room';
        }
      }, {
        key: "time",
        get: function get() {
          var booking = this.event;
          return booking.all_day || booking.duration > 23 * 60 ? 'All Day' : dayjs__WEBPACK_IMPORTED_MODULE_7__(booking.date).format('h:mm A');
        }
        /** Status of the current booking */

      }, {
        key: "status",
        get: function get() {
          var statuses = this.event.approval_status || {};
          var spaces = this.event.space_list || [];

          var _iterator = _createForOfIteratorHelper(spaces),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var space = _step.value;
              var status = statuses[space.id] || '';

              if (status.indexOf('tentative') >= 0 || status.indexOf('not') === 0) {
                return 'tentative';
              } else if (status.indexOf('declined') >= 0) {
                return 'declined';
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var location = this.event.location || '';
          var location_lower = (typeof location === 'string' ? location : '').toLowerCase();

          if (location_lower.indexOf('tentative') >= 0) {
            return 'tentative';
          } else if (location_lower.indexOf('declined') >= 0) {
            return 'declined';
          }

          return spaces.length ? 'approved' : '';
        }
      }]);

      return ScheduleEventListItemComponent;
    }(src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]);

    ScheduleEventListItemComponent.ɵfac = function ScheduleEventListItemComponent_Factory(t) {
      return new (t || ScheduleEventListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]));
    };

    ScheduleEventListItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScheduleEventListItemComponent,
      selectors: [["schedule-event-item"]],
      inputs: {
        event: "event",
        user: "user"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 1,
      vars: 1,
      consts: [[3, "class", 4, "ngIf"], [3, "ngSwitch"], ["class", "day display", 4, "ngSwitchCase"], ["class", "emptied display", 4, "ngSwitchCase"], ["class", "event display", 4, "ngSwitchDefault"], [1, "day", "display"], [1, "emptied", "display"], [1, "event", "display"], [3, "tapped"], [1, "content"], [1, "time"], ["class", "info", 4, "ngIf"], [1, "icon"], [3, "src"], [1, "details"], [1, "title", "text"], [1, "location", "text"], ["src", "assets/img/location.svg"], [1, "text"], [1, "info"]],
      template: function ScheduleEventListItemComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ScheduleEventListItemComponent_div_0_Template, 5, 6, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__["ɵb"]],
      styles: [".event-item[_ngcontent-%COMP%] {\n  height: 5em;\n  width: 100%;\n  max-width: 100vw;\n  background-color: #f8f8f8;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.event-item.date[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n.event-item.empty[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n}\n.event-item.approved[_ngcontent-%COMP%] {\n  background-color: #cff7df;\n}\n.event-item.tentative[_ngcontent-%COMP%] {\n  background-color: #fff5d0;\n}\n.event-item.declined[_ngcontent-%COMP%] {\n  background-color: #ffb0b0;\n}\n.display[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.emptied[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  color: rgba(0, 0, 0, 0.35);\n}\n.day[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n}\na[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  color: rgba(0, 0, 0, 0.85);\n  text-decoration: none;\n}\na[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 1.4em;\n}\n.icon[_ngcontent-%COMP%] {\n  height: 3em;\n  margin: 0 0.75em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .icon[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .icon[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 3em;\n}\n.details[_ngcontent-%COMP%] {\n  min-width: 50%;\n  flex: 1;\n}\n.content[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  max-width: 768px;\n  display: flex;\n  align-items: center;\n  padding: 0.35em 0.75em;\n  margin: auto;\n}\n.location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.6);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  width: 100%;\n}\n.location[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 1em;\n  margin: 0 0.25em;\n}\n.location[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\n.time[_ngcontent-%COMP%] {\n  width: 4.5em;\n  text-align: center;\n  white-space: nowrap;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .time[_ngcontent-%COMP%] {\n    transform: rotate(45deg);\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .time[_ngcontent-%COMP%] {\n    transform: rotate(45deg);\n  }\n}\n.text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.info[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoZWxsL3NjaGVkdWxlL2V2ZW50LWxpc3QvbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvc2NoZWR1bGUvZXZlbnQtbGlzdC9saXN0LWl0ZW0vbGlzdC1pdGVtLmNvbXBvbmVudC5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBaUNBOztjQUFBO0FBYUE7O3NCQUFBO0FDM0NBO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7QUNNSjtBREpJO0VBQ0ksc0JBQUE7QUNNUjtBREhJO0VBQ0kseUJBQUE7QUNLUjtBREZJO0VBQ0kseUJBQUE7QUNJUjtBRERJO0VBQ0kseUJBQUE7QUNHUjtBREFJO0VBQ0kseUJBQUE7QUNFUjtBREVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ0NKO0FERUE7RUFDSSxnQkFBQTtFQUNBLDBCQUFBO0FDQ0o7QURFQTtFQUNJLGdCQUFBO0FDQ0o7QURFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxxQkFBQTtBQ0NKO0FEQUk7RUFDSSxxQ0FBQTtBQ0VSO0FERUE7RUFDSSxnQkFBQTtBQ0NKO0FERUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRkxRO0VDRVI7SUFJUSxjQUFBO0VDR047QUFDRjtBRlBRO0VDRFI7SUFJUSxjQUFBO0VDUU47QUFDRjtBRFBJO0VBQ0ksV0FBQTtBQ1NSO0FETEE7RUFDSSxjQUFBO0VBQ0EsT0FBQTtBQ1FKO0FETEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDUUo7QURMQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VFMUZBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFRjBGQSxXQUFBO0FDVUo7QURSSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQ1VSO0FEUEk7RUFDSSxPQUFBO0VBQ0EsY0FBQTtBQ1NSO0FETEE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1FKO0FGekRRO0VDOENSO0lBS1Esd0JBQUE7RUNVTjtBQUNGO0FGM0RRO0VDMkNSO0lBS1Esd0JBQUE7RUNlTjtBQUNGO0FEWkE7RUVsSEksbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FEa0lKO0FEZEE7RUFDSSxnQkFBQTtBQ2lCSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3NjaGVkdWxlL2V2ZW50LWxpc3QvbGlzdC1pdGVtL2xpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogI2YwZjBmMDtcbiRmb290ZXItYmFjazogIzI2MzIzODtcbiRoZWFkZXItYmFjazogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDUxQzJDLCAjMDUxQzJDIDQwJSwgIzBCMjQ1MyA2MCUsICMxRjQwRTYgMTAwJSk7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMDUxYzJjO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuLmV2ZW50LWl0ZW0ge1xuICAgIGhlaWdodDogNWVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgjMDAwLCAuMDUpO1xuXG4gICAgJi5kYXRlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICB9XG5cbiAgICAmLmVtcHR5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICB9XG5cbiAgICAmLmFwcHJvdmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NmZjdkZjtcbiAgICB9XG5cbiAgICAmLnRlbnRhdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY1ZDA7XG4gICAgfVxuXG4gICAgJi5kZWNsaW5lZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmIwYjA7XG4gICAgfVxufVxuXG4uZGlzcGxheSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmVtcHRpZWQge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgY29sb3I6IHJnYmEoIzAwMCwgLjM1KTtcbn1cblxuLmRheSB7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbn1cblxuYSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiByZ2JhKCMwMDAsIC44NSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIC4wNSk7XG4gICAgfVxufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS40ZW07XG59XG5cbi5pY29uIHtcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBtYXJnaW46IDAgLjc1ZW07XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogM2VtO1xuICAgIH1cbn1cblxuLmRldGFpbHMge1xuICAgIG1pbi13aWR0aDogNTAlO1xuICAgIGZsZXg6IDE7XG59XG5cbi5jb250ZW50IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA3NjhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogLjM1ZW0gLjc1ZW07XG4gICAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9jYXRpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgjMDAwLCAuNik7XG4gICAgQGluY2x1ZGUgaGlkZS10ZXh0LW92ZXJmbG93O1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgaW1nIHtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgIG1hcmdpbjogMCAuMjVlbTtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgIH1cbn1cblxuLnRpbWUge1xuICAgIHdpZHRoOiA0LjVlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxufVxuXG4udGV4dCB7XG4gICAgQGluY2x1ZGUgaGlkZS10ZXh0LW92ZXJmbG93O1xufVxuXG4uaW5mbyB7XG4gICAgZm9udC1zaXplOiAuN2VtO1xufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmV2ZW50LWl0ZW0ge1xuICBoZWlnaHQ6IDVlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuLmV2ZW50LWl0ZW0uZGF0ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG4uZXZlbnQtaXRlbS5lbXB0eSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG59XG4uZXZlbnQtaXRlbS5hcHByb3ZlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjZmY3ZGY7XG59XG4uZXZlbnQtaXRlbS50ZW50YXRpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmNWQwO1xufVxuLmV2ZW50LWl0ZW0uZGVjbGluZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMGIwO1xufVxuXG4uZGlzcGxheSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZW1wdGllZCB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzUpO1xufVxuXG4uZGF5IHtcbiAgZm9udC1zaXplOiAxLjZlbTtcbn1cblxuYSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODUpO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5hOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cblxuLnRpdGxlIHtcbiAgZm9udC1zaXplOiAxLjRlbTtcbn1cblxuLmljb24ge1xuICBoZWlnaHQ6IDNlbTtcbiAgbWFyZ2luOiAwIDAuNzVlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIC5pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuLmljb24gaW1nIHtcbiAgaGVpZ2h0OiAzZW07XG59XG5cbi5kZXRhaWxzIHtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIGZsZXg6IDE7XG59XG5cbi5jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3NjhweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubG9jYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2lkdGg6IDEwMCU7XG59XG4ubG9jYXRpb24gaW1nIHtcbiAgaGVpZ2h0OiAxZW07XG4gIG1hcmdpbjogMCAwLjI1ZW07XG59XG4ubG9jYXRpb24gLnRleHQge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDUwJTtcbn1cblxuLnRpbWUge1xuICB3aWR0aDogNC41ZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC50aW1lIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAudGltZSB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICB9XG59XG5cbi50ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5pbmZvIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn0iLCJcbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGNvbG9yOiAjMDAwLCAkZGVwdGg6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMXB4ICogKCRkZXB0aCAtIDEpIHJnYmEoIzAwMCwgLjIpLFxuICAgICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSxcbiAgICAgICAgICAgICAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleEventListItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'schedule-event-item',
          templateUrl: './list-item.component.html',
          styleUrls: ['./list-item.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }, {
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]
        }];
      }, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        user: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/schedule/schedule.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/shell/schedule/schedule.component.ts ***!
    \******************************************************/

  /*! exports provided: ScheduleComponent */

  /***/
  function srcAppShellScheduleScheduleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function () {
      return ScheduleComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/base.directive */
    "./src/app/shared/base.directive.ts");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/components/topbar-header/topbar-header.component */
    "./src/app/shared/components/topbar-header/topbar-header.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _shared_components_footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/components/footer-menu/footer-menu.component */
    "./src/app/shared/components/footer-menu/footer-menu.component.ts");
    /* harmony import */


    var _shared_components_overlay_menu_overlay_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/components/overlay-menu/overlay-menu.component */
    "./src/app/shared/components/overlay-menu/overlay-menu.component.ts");
    /* harmony import */


    var _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./view-event/view-event.component */
    "./src/app/shell/schedule/view-event/view-event.component.ts");
    /* harmony import */


    var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./event-list/event-list.component */
    "./src/app/shell/schedule/event-list/event-list.component.ts");

    function ScheduleComponent_ng_container_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "schedule-view-event", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx_r0.id)("next", ctx_r0.next)("previous", ctx_r0.previous);
      }
    }

    function ScheduleComponent_ng_container_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "schedule-event-list", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("eventList", function ScheduleComponent_ng_container_6_Template_schedule_event_list_eventList_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r2.updateEvents($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
    }

    var ScheduleComponent =
    /*#__PURE__*/
    function (_src_app_shared_base_3) {
      _inherits(ScheduleComponent, _src_app_shared_base_3);

      var _super3 = _createSuper(ScheduleComponent);

      function ScheduleComponent(_route, _service) {
        var _this6;

        _classCallCheck(this, ScheduleComponent);

        _this6 = _super3.call(this);
        _this6._route = _route;
        _this6._service = _service;
        /** Whether to show menu */

        _this6.show_menu = false;
        return _this6;
      }
      /** ID of the event after the active event */


      _createClass(ScheduleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.subscription('route.route', this._route.paramMap.subscribe(function (params) {
            if (params.has('page')) {
              _this7.page = params.get('page');
            }

            if (params.has('id')) {
              _this7.id = params.get('id');
            }
          }));
          this.loadEvents();
          this._service.title = 'My Day';
        }
        /**
         * Update local event listing
         * @param event_list New list of events
         */

      }, {
        key: "updateEvents",
        value: function updateEvents(event_list) {
          this.events = event_list;
          this.saveEvents();
        }
        /**
         * Save the current event listing
         */

      }, {
        key: "saveEvents",
        value: function saveEvents() {
          if (localStorage) {
            localStorage.setItem('STAFF.events', JSON.stringify(this.events || []));
          }
        }
        /**
         * Load the last saved event listing
         */

      }, {
        key: "loadEvents",
        value: function loadEvents() {
          if (localStorage) {
            var data = localStorage.getItem('STAFF.events');
            this.events = JSON.parse(data || '[]');
          }
        }
      }, {
        key: "next",
        get: function get() {
          var _this8 = this;

          if (this.events) {
            var index = this.events.findIndex(function (i) {
              return _this8.id === i.id;
            }) + 1;

            if (index > -1 && this.events[index]) {
              return this.events[index].id;
            }
          }

          return '';
        }
        /** ID of the event before the active event */

      }, {
        key: "previous",
        get: function get() {
          var _this9 = this;

          if (this.events) {
            var index = this.events.findIndex(function (i) {
              return _this9.id === i.id;
            }) - 1;

            if (index > -1 && this.events[index]) {
              return this.events[index].id;
            }
          }

          return '';
        }
      }]);

      return ScheduleComponent;
    }(src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]);

    ScheduleComponent.ɵfac = function ScheduleComponent_Factory(t) {
      return new (t || ScheduleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"]));
    };

    ScheduleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScheduleComponent,
      selectors: [["app-schedule"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 10,
      vars: 4,
      consts: [[1, "schedule", "page"], [1, "header"], [3, "menu", "menuChange"], [1, "body"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "footer"], [3, "show", "showChange"], [3, "id", "next", "previous"], [3, "eventList"]],
      template: function ScheduleComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a-topbar-header", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("menuChange", function ScheduleComponent_Template_a_topbar_header_menuChange_2_listener($event) {
            return ctx.show_menu = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ScheduleComponent_ng_container_5_Template, 2, 3, "ng-container", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ScheduleComponent_ng_container_6_Template, 2, 0, "ng-container", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "footer", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "a-footer-menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a-overlay-menu", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("showChange", function ScheduleComponent_Template_a_overlay_menu_showChange_9_listener($event) {
            return ctx.show_menu = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menu", ctx.show_menu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.page);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "view");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.show_menu);
        }
      },
      directives: [_shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_4__["TopbarHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], _shared_components_footer_menu_footer_menu_component__WEBPACK_IMPORTED_MODULE_6__["FooterMenuComponent"], _shared_components_overlay_menu_overlay_menu_component__WEBPACK_IMPORTED_MODULE_7__["OverlayMenuComponent"], _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_8__["ScheduleViewEventComponent"], _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_9__["ScheduleEventListComponent"]],
      styles: [".page[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n}\n.page[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  min-width: 50%;\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoZWxsL3NjaGVkdWxlL3NjaGVkdWxlLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC9zY2hlZHVsZS9zY2hlZHVsZS5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFpQ0E7O2NBQUE7QUFhQTs7c0JBQUE7QUM1Q0E7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQ09KO0FETEk7RUFDSSxXQUFBO0FDT1I7QURIQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7QUNNSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL3NjaGVkdWxlL3NjaGVkdWxlLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjMTkzN2VhO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuJGhlYWRlci1iYWNrOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwNTFDMkMsICMwNTFDMkMgNDAlLCAjMEIyNDUzIDYwJSwgIzFGNDBFNiAxMDAlKTtcblxuJGNvbG9yLXRlcm5hcnk6ICMwNTFjMmM7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5wYWdlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgPiAqIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uYm9keSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi13aWR0aDogNTAlO1xuICAgIGZsZXg6IDE7XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4ucGFnZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnBhZ2UgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4td2lkdGg6IDUwJTtcbiAgZmxleDogMTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-schedule',
          templateUrl: './schedule.template.html',
          styleUrls: ['./schedule.styles.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }, {
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/shell/schedule/schedule.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/shell/schedule/schedule.module.ts ***!
    \***************************************************/

  /*! exports provided: ScheduleModule */

  /***/
  function srcAppShellScheduleScheduleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleModule", function () {
      return ScheduleModule;
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


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _placeos_composer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @placeos/composer */
    "./node_modules/@placeos/composer/__ivy_ngcc__/fesm2015/placeos-composer.js");
    /* harmony import */


    var _schedule_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./schedule.routes */
    "./src/app/shell/schedule/schedule.routes.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _schedule_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./schedule.component */
    "./src/app/shell/schedule/schedule.component.ts");
    /* harmony import */


    var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./event-list/event-list.component */
    "./src/app/shell/schedule/event-list/event-list.component.ts");
    /* harmony import */


    var _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./view-event/view-event.component */
    "./src/app/shell/schedule/view-event/view-event.component.ts");
    /* harmony import */


    var _event_list_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./event-list/list-item/list-item.component */
    "./src/app/shell/schedule/event-list/list-item/list-item.component.ts");
    /* harmony import */


    var _view_event_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./view-event/event-details/event-details.component */
    "./src/app/shell/schedule/view-event/event-details/event-details.component.ts");
    /* harmony import */


    var _view_event_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./view-event/event-edit/event-edit.component */
    "./src/app/shell/schedule/view-event/event-edit/event-edit.component.ts");

    var ScheduleModule = function ScheduleModule() {
      _classCallCheck(this, ScheduleModule);
    };

    ScheduleModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: ScheduleModule
    });
    ScheduleModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function ScheduleModule_Factory(t) {
        return new (t || ScheduleModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _placeos_composer__WEBPACK_IMPORTED_MODULE_5__["ComposerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_schedule_routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedContentModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ScheduleModule, {
        declarations: [_schedule_component__WEBPACK_IMPORTED_MODULE_8__["ScheduleComponent"], _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleViewEventComponent"], _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_9__["ScheduleEventListComponent"], _event_list_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_11__["ScheduleEventListItemComponent"], _view_event_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_12__["EventDetailsComponent"], _view_event_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_13__["EventEditComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _placeos_composer__WEBPACK_IMPORTED_MODULE_5__["ComposerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedContentModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_schedule_component__WEBPACK_IMPORTED_MODULE_8__["ScheduleComponent"], _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleViewEventComponent"], _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_9__["ScheduleEventListComponent"], _event_list_list_item_list_item_component__WEBPACK_IMPORTED_MODULE_11__["ScheduleEventListItemComponent"], _view_event_event_details_event_details_component__WEBPACK_IMPORTED_MODULE_12__["EventDetailsComponent"], _view_event_event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_13__["EventEditComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _placeos_composer__WEBPACK_IMPORTED_MODULE_5__["ComposerModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_schedule_routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedContentModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/shell/schedule/schedule.routes.ts":
  /*!***************************************************!*\
    !*** ./src/app/shell/schedule/schedule.routes.ts ***!
    \***************************************************/

  /*! exports provided: ROUTES */

  /***/
  function srcAppShellScheduleScheduleRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ROUTES", function () {
      return ROUTES;
    });
    /* harmony import */


    var _schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./schedule.component */
    "./src/app/shell/schedule/schedule.component.ts");

    var ROUTES = [{
      path: '',
      component: _schedule_component__WEBPACK_IMPORTED_MODULE_0__["ScheduleComponent"]
    }, {
      path: ':page',
      component: _schedule_component__WEBPACK_IMPORTED_MODULE_0__["ScheduleComponent"]
    }, {
      path: ':page/:id',
      component: _schedule_component__WEBPACK_IMPORTED_MODULE_0__["ScheduleComponent"]
    }, {
      path: '**',
      redirectTo: ''
    }];
    /***/
  },

  /***/
  "./src/app/shell/schedule/view-event/event-details/event-details.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/shell/schedule/view-event/event-details/event-details.component.ts ***!
    \************************************************************************************/

  /*! exports provided: EventDetailsComponent */

  /***/
  function srcAppShellScheduleViewEventEventDetailsEventDetailsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventDetailsComponent", function () {
      return EventDetailsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/base.directive */
    "./src/app/shared/base.directive.ts");
    /* harmony import */


    var src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/data/bookings/booking.class */
    "./src/app/services/data/bookings/booking.class.ts");
    /* harmony import */


    var src_app_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/utilities/general.utilities */
    "./src/app/shared/utilities/general.utilities.ts");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var src_app_overlays_view_room_modal_view_room_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/overlays/view-room-modal/view-room-modal.component */
    "./src/app/overlays/view-room-modal/view-room-modal.component.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _placeos_composer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @placeos/composer */
    "./node_modules/@placeos/composer/__ivy_ngcc__/fesm2015/placeos-composer.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");

    var _c0 = function _c0(a0) {
      return [a0];
    };

    function EventDetailsComponent_ng_container_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function EventDetailsComponent_ng_container_2_ng_container_1_Template_i_modelChange_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var space_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.last_start[space_r10.id] = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("modelChange", function EventDetailsComponent_ng_container_2_ng_container_1_Template_i_modelChange_2_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r15.checkin = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var space_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r11.last_start[space_r10.id])("sys", space_r10.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("model", ctx_r11.checkin)("sys", space_r10.id)("params", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r11.event.date));
      }
    }

    function EventDetailsComponent_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventDetailsComponent_ng_container_2_ng_container_1_Template, 3, 7, "ng-container", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var space_r10 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", space_r10 == null ? null : space_r10.level == null ? null : space_r10.level.id);
      }
    }

    function EventDetailsComponent_div_24_button_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function EventDetailsComponent_div_24_button_4_Template_button_tapped_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r22);

          var item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r20.locate(item_r17);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Map ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EventDetailsComponent_div_24_a_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Control");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", item_r17.support_url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function EventDetailsComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, EventDetailsComponent_div_24_button_4_Template, 2, 0, "button", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EventDetailsComponent_div_24_a_5_Template, 2, 1, "a", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r17 = ctx.$implicit;

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", (item_r17 == null ? null : item_r17.name) + " - " + ((item_r17 == null ? null : item_r17.status) || "Approved"));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r17 == null ? null : item_r17.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r17 == null ? null : item_r17.map_id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (item_r17 == null ? null : item_r17.support_url) && ctx_r1.can_control);
      }
    }

    function EventDetailsComponent_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No Location");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EventDetailsComponent_button_26_Template(rf, ctx) {
      if (rf & 1) {
        var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchrelease", function EventDetailsComponent_button_26_Template_button_touchrelease_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25);

          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r24.show_locations = !ctx_r24.show_locations;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.show_locations ? "Hide" : "Show", " Locations ");
      }
    }

    function EventDetailsComponent_div_37_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:" + item_r26.email + "?subject=" + ctx_r27.event.title, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r26.email);
      }
    }

    function EventDetailsComponent_div_37_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EventDetailsComponent_div_37_div_5_Template, 3, 2, "div", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r26 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", (item_r26 == null ? null : item_r26.name) + " - " + ((item_r26 == null ? null : item_r26.status) || "Accepted") + ((item_r26 == null ? null : item_r26.email) ? "\n" + item_r26.email : ""));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r26.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r26.email);
      }
    }

    function EventDetailsComponent_button_38_Template(rf, ctx) {
      if (rf & 1) {
        var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchrelease", function EventDetailsComponent_button_38_Template_button_touchrelease_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30);

          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r29.show_attendees = !ctx_r29.show_attendees;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.show_attendees ? "Hide" : "Show", " Attendees ");
      }
    }

    function EventDetailsComponent_div_43_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Catered:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Yes");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EventDetailsComponent_button_45_Template(rf, ctx) {
      if (rf & 1) {
        var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function EventDetailsComponent_button_45_Template_button_tapped_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32);

          var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r31.checkin();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r7.status === "done" && !ctx_r7.is_checked_in ? "error no-events" : ctx_r7.is_checked_in ? "success no-events" : "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.status === "done" && !ctx_r7.is_checked_in ? "Cancelled" : ctx_r7.is_checked_in ? "Checked in" : "Checkin", " ");
      }
    }

    function EventDetailsComponent_button_46_Template(rf, ctx) {
      if (rf & 1) {
        var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function EventDetailsComponent_button_46_Template_button_tapped_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34);

          var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r33.edit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EventDetailsComponent_button_47_Template(rf, ctx) {
      if (rf & 1) {
        var _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function EventDetailsComponent_button_47_Template_button_tapped_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r36);

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r35.duplicate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Duplicate");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var EventDetailsComponent =
    /*#__PURE__*/
    function (_src_app_shared_base_4) {
      _inherits(EventDetailsComponent, _src_app_shared_base_4);

      var _super4 = _createSuper(EventDetailsComponent);

      function EventDetailsComponent(_service, _dialog, _router) {
        var _this10;

        _classCallCheck(this, EventDetailsComponent);

        _this10 = _super4.call(this);
        _this10._service = _service;
        _this10._dialog = _dialog;
        _this10._router = _router;
        /** Emitter for action on the display view */

        _this10.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emitter for changes to the loading state */

        _this10.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Mapping of spaces to last checkin time */

        _this10.last_start = {};
        return _this10;
      }
      /** Title of the displayed event */


      _createClass(EventDetailsComponent, [{
        key: "locate",

        /**
         * Open the modal to show the location of a space
         * @param space Space to show the location
         */
        value: function locate(space) {
          /* istanbul ignore else */
          if (space) {
            this._dialog.open(src_app_overlays_view_room_modal_view_room_modal_component__WEBPACK_IMPORTED_MODULE_7__["ViewRoomModalComponent"], {
              width: 'auto',
              height: 'auto',
              maxWidth: '95vw',
              maxHeight: '95vh',
              data: {
                space: space
              }
            });
          }
        }
        /**
         * Enter edit mode for the booking
         */

      }, {
        key: "edit",
        value: function edit() {
          this.change.emit({
            type: 'edit'
          });
        }
        /**
         * Checkin the current booking
         */

      }, {
        key: "checkin",
        value: function checkin() {
          this.checked_in = !this.checked_in;
        }
        /**
         * Store the booking data and navigate to the booking form
         */

      }, {
        key: "duplicate",
        value: function duplicate() {
          /* istanbul ignore else */
          if (localStorage) {
            var booking = this.event.duplicate();
            localStorage.setItem('STAFF.booking_form', JSON.stringify(booking));
          }

          this.change.emit({
            type: 'duplicate'
          });

          this._router.navigate(['/book']);
        }
      }, {
        key: "title",
        get: function get() {
          if (!this.event) {
            return '';
          }

          return this.event.title;
        }
        /** Display string of when the event will occur */

      }, {
        key: "when",
        get: function get() {
          if (!this.event) {
            return 'Unable to determine.';
          }

          var date = dayjs__WEBPACK_IMPORTED_MODULE_8__(this.event.date);
          var end = date.add(this.event.duration || 60, 'm');

          if (this.event.all_day || this.event.duration > 23 * 60) {
            return "".concat(date.format('DD MMM YYYY'), " - All Day");
          } else {
            if (date.isSame(end, 'd')) {
              return "".concat(date.format('DD MMM YYYY, h:mm A'), " - ").concat(end.format('h:mm A'));
            } else {
              return "".concat(date.format('DD MMM YYYY, h:mm A'), " - ").concat(end.format('DD MMM YYYY, h:mm A'));
            }
          }
        }
        /** Display string for the event's duration */

      }, {
        key: "duration",
        get: function get() {
          if (!this.event) {
            return 'Unable to determine';
          }

          return Object(src_app_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_5__["humaniseDuration"])(this.event.duration || 60);
        }
        /** List of spaces associated with the event */

      }, {
        key: "spaces",
        get: function get() {
          if (!this.event) {
            return [];
          }

          return this.event.space_list;
        }
        /** List of attendees associated with the event not including the host */

      }, {
        key: "attendees",
        get: function get() {
          var _this11 = this;

          if (!this.event) {
            return [];
          }

          return this.event.attendees.filter(function (i) {
            return i.email !== _this11.organiser.email;
          });
        }
        /** Host of the event */

      }, {
        key: "organiser",
        get: function get() {
          if (!this.event) {
            return this._service.Users.current;
          }

          return this.event.organiser || this._service.Users.current;
        }
        /** Whether the user is allowed to edit the event */

      }, {
        key: "can_edit",
        get: function get() {
          var organiser = this.organiser;
          var user = this._service.Users.current;
          return organiser.email === user.email && this.status !== 'done';
        }
        /** Details about the event */

      }, {
        key: "notes",
        get: function get() {
          if (!this.event) {
            return '';
          }

          return this.event.description || '';
        }
        /** Status of the event */

      }, {
        key: "status",
        get: function get() {
          if (this.event) {
            var now = dayjs__WEBPACK_IMPORTED_MODULE_8__();
            var date = dayjs__WEBPACK_IMPORTED_MODULE_8__(this.event.date);
            /* istanbul ignore else */

            if (now.isBefore(date.subtract(15, 'm'), 'm')) {
              return 'future';
            } else if (now.isBefore(date, 'm')) {
              return 'upcoming';
            } else if (now.isBefore(date.add(15, 'm'), 'm')) {
              return 'started';
            } else if (now.isBefore(date.add(this.event.duration, 'm'), 'm')) {
              return 'in_progress';
            }
          }

          return 'done';
        }
        /** Whether the user has checkin to all the spaces in the event */

      }, {
        key: "is_checked_in",
        get: function get() {
          var _this12 = this;

          return this.spaces.reduce(function (a, v) {
            return a && _this12.event.date <= (_this12.last_start[v.id] || 0);
          }, true);
        }
        /** Whether the spaces can be controlled */

      }, {
        key: "can_control",
        get: function get() {
          return this.spaces.length > 0 && this.status !== 'future' && this.status !== 'done';
        }
        /** Whether the user is able to checkin to the event */

      }, {
        key: "can_checkin",
        get: function get() {
          return this.spaces.length > 0 && (this.status === 'upcoming' || this.status === 'started');
        }
      }]);

      return EventDetailsComponent;
    }(src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]);

    EventDetailsComponent.ɵfac = function EventDetailsComponent_Factory(t) {
      return new (t || EventDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]));
    };

    EventDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EventDetailsComponent,
      selectors: [["schedule-event-details"]],
      inputs: {
        event: "event"
      },
      outputs: {
        change: "change",
        loading: "loading"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
      decls: 48,
      vars: 21,
      consts: [[1, "event-details"], [1, "bindings"], [4, "ngFor", "ngForOf"], [1, "body"], ["name", "title", 1, "field"], [1, "value"], ["name", "when", 1, "field"], ["name", "duration", 1, "field"], ["name", "location", 1, "field", "multi"], [1, "list"], ["class", "list-item", 3, "title", 4, "ngFor", "ngForOf"], ["class", "list-item", 4, "ngIf"], ["class", "show", 3, "touchrelease", 4, "ngIf"], ["name", "host", 1, "field"], ["name", "attendees", 1, "field", "multi"], ["name", "notes", 1, "field"], [1, "value", 3, "innerHTML"], ["class", "field", "name", "catering", 4, "ngIf"], [1, "footer"], ["mat-button", "", "name", "checkin", 3, "class", "tapped", 4, "ngIf"], ["mat-button", "", "name", "edit", 3, "tapped", 4, "ngIf"], ["mat-button", "", "name", "duplicate", 3, "tapped", 4, "ngIf"], [4, "ngIf"], ["binding", "", "mod", "Booking", "bind", "last_meeting_started", 3, "model", "sys", "modelChange"], ["binding", "", "mod", "Booking", "exec", "start_meeting", 3, "model", "sys", "params", "modelChange"], [1, "list-item", 3, "title"], [1, "status"], [1, "text"], ["class", "show", "name", "map", 3, "tapped", 4, "ngIf"], ["class", "show", "name", "control", "target", "_blank", 3, "href", 4, "ngIf"], ["name", "map", 1, "show", 3, "tapped"], ["name", "control", "target", "_blank", 1, "show", 3, "href"], [1, "list-item"], [1, "show", 3, "touchrelease"], [1, "name"], ["class", "email", 4, "ngIf"], [1, "email"], [3, "href"], ["name", "catering", 1, "field"], ["mat-button", "", "name", "checkin", 3, "tapped"], ["mat-button", "", "name", "edit", 3, "tapped"], ["mat-button", "", "name", "duplicate", 3, "tapped"]],
      template: function EventDetailsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, EventDetailsComponent_ng_container_2_Template, 2, 1, "ng-container", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Title:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "When:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Duration:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, EventDetailsComponent_div_24_Template, 6, 4, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, EventDetailsComponent_div_25_Template, 2, 0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EventDetailsComponent_button_26_Template, 2, 1, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Host:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, EventDetailsComponent_div_37_Template, 6, 3, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, EventDetailsComponent_button_38_Template, 2, 1, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Notes:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, EventDetailsComponent_div_43_Template, 5, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, EventDetailsComponent_button_45_Template, 3, 3, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, EventDetailsComponent_button_46_Template, 2, 0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, EventDetailsComponent_button_47_Template, 2, 0, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spaces);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.when);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.duration);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Locations(", ctx.spaces.length || "0", "):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("shown", ctx.show_locations);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.spaces);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.spaces.length);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.spaces.length > 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.organiser.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Attendees(", ctx.attendees.length || "0", "):");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("shown", ctx.show_attendees);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.attendees);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.attendees.length > 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.notes, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event && ctx.event.has_catering);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.can_checkin);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.can_edit);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.can_edit);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _placeos_composer__WEBPACK_IMPORTED_MODULE_10__["BindingDirective"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_11__["ɵb"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]],
      styles: [".event-details[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1em 2em;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1em 0;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .field[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .field[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.field[name=title][_ngcontent-%COMP%] {\n  display: none;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .field[name=title][_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .field[name=title][_ngcontent-%COMP%] {\n    display: flex;\n  }\n}\nlabel[_ngcontent-%COMP%] {\n  width: 8em;\n  margin-top: 0.25em;\n  margin-right: 1em;\n  font-weight: bold;\n  font-size: 0.8em;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  label[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 0.5em;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  label[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-bottom: 0.5em;\n  }\n}\n.value[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n  padding: 0 0.5em;\n}\n.value[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  background: none;\n  border: none;\n  outline: none;\n  text-decoration: underline;\n  cursor: pointer;\n}\n.value[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]:hover {\n  color: #1937ea;\n}\n.multi[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  margin-top: -0.25em;\n}\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 0.5em;\n}\n.list[_ngcontent-%COMP%] {\n  max-height: 15em;\n  overflow: hidden;\n  margin-left: -0.5em;\n}\n.list.shown[_ngcontent-%COMP%] {\n  max-height: 100em;\n}\n.email[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n  color: rgba(0, 0, 0, 0.6);\n}\n.list-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.25em 0.5em;\n  border-radius: 8px;\n  width: 100%;\n}\n.list-item[_ngcontent-%COMP%]:nth-child(2n) {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.list-item[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  height: 8px;\n  width: 8px;\n  border-radius: 100%;\n  background-color: #43a047;\n  margin: 0.5em 0.5em 0.5em 0;\n}\n.list-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  flex: 1;\n  min-width: 50%;\n}\na[_ngcontent-%COMP%] {\n  color: inherit;\n}\n[name=attendees][_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  margin-bottom: 1.5em;\n}\nbutton[_ngcontent-%COMP%] {\n  width: 8em;\n  margin: 0.25em;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoZWxsL3NjaGVkdWxlL3ZpZXctZXZlbnQvZXZlbnQtZGV0YWlscy9ldmVudC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9zY2hlZHVsZS92aWV3LWV2ZW50L2V2ZW50LWRldGFpbHMvZXZlbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFpQ0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMzQ0E7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNNSjtBREhBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7QUNNSjtBRjRDUTtFQ3BEUjtJQUlRLGVBQUE7RUNRTjtBQUNGO0FGMENRO0VDdkRSO0lBSVEsZUFBQTtFQ2FOO0FBQ0Y7QURYSTtFQUNJLGFBQUE7QUNhUjtBRitCUTtFQzdDSjtJQUdRLGFBQUE7RUNlVjtBQUNGO0FGNkJRO0VDaERKO0lBR1EsYUFBQTtFQ29CVjtBQUNGO0FEaEJBO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDbUJKO0FGYVE7RUNyQ1I7SUFPUSxXQUFBO0lBQ0Esb0JBQUE7RUNxQk47QUFDRjtBRlVRO0VDeENSO0lBT1EsV0FBQTtJQUNBLG9CQUFBO0VDMkJOO0FBQ0Y7QUR4QkE7RUFDSSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDMkJKO0FEekJJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0FDMkJSO0FEekJRO0VBQ0ksY0Q5Qkk7QUV5RGhCO0FEckJJO0VBQ0ksbUJBQUE7QUN3QlI7QURwQkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDdUJKO0FEcEJBO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDdUJKO0FEckJJO0VBQ0ksaUJBQUE7QUN1QlI7QURuQkE7RUFDSSxpQkFBQTtFQUNBLHlCQUFBO0FDc0JKO0FEbkJBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNzQko7QURwQkk7RUFDSSxxQ0FBQTtBQ3NCUjtBRG5CSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkQzRkU7RUM0RkYsMkJBQUE7QUNxQlI7QURsQkk7RUFDSSxpQkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0FDb0JSO0FEaEJBO0VBQ0ksY0FBQTtBQ21CSjtBRGZJO0VBQ0ksb0JBQUE7QUNrQlI7QURkQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNpQkoiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9zY2hlZHVsZS92aWV3LWV2ZW50L2V2ZW50LWRldGFpbHMvZXZlbnQtZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogI2YwZjBmMDtcbiRmb290ZXItYmFjazogIzI2MzIzODtcbiRoZWFkZXItYmFjazogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMDUxQzJDLCAjMDUxQzJDIDQwJSwgIzBCMjQ1MyA2MCUsICMxRjQwRTYgMTAwJSk7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMDUxYzJjO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuLmV2ZW50LWRldGFpbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG59XG5cbi5maWVsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW46IDFlbSAwO1xuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICB9XG5cbiAgICAmW25hbWU9XCJ0aXRsZVwiXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5sYWJlbCB7XG4gICAgd2lkdGg6IDhlbTtcbiAgICBtYXJnaW4tdG9wOiAuMjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG4gICAgfVxufVxuXG4udmFsdWUge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMCAuNWVtO1xuXG4gICAgLnNob3cge1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLm11bHRpIHtcbiAgICAudmFsdWUge1xuICAgICAgICBtYXJnaW4tdG9wOiAtLjI1ZW07XG4gICAgfVxufVxuXG4uZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogLjVlbTtcbn1cblxuLmxpc3Qge1xuICAgIG1heC1oZWlnaHQ6IDE1ZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tbGVmdDogLS41ZW07XG5cbiAgICAmLnNob3duIHtcbiAgICAgICAgbWF4LWhlaWdodDogMTAwZW07XG4gICAgfVxufVxuXG4uZW1haWwge1xuICAgIGZvbnQtc2l6ZTogLjc1ZW07XG4gICAgY29sb3I6IHJnYmEoIzAwMCwgLjYpO1xufVxuXG4ubGlzdC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogLjI1ZW0gLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAmOm50aC1jaGlsZCgybikge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIC4wNSk7XG4gICAgfVxuXG4gICAgLnN0YXR1cyB7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2VzcztcbiAgICAgICAgbWFyZ2luOiAuNWVtIC41ZW0gLjVlbSAwO1xuICAgIH1cblxuICAgIC50ZXh0IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgIH1cbn1cblxuYSB7XG4gICAgY29sb3I6IGluaGVyaXQ7XG59XG5cbltuYW1lPVwiYXR0ZW5kZWVzXCJdIHtcbiAgICAuc3RhdHVzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41ZW07XG4gICAgfVxufVxuXG5idXR0b24ge1xuICAgIHdpZHRoOiA4ZW07XG4gICAgbWFyZ2luOiAuMjVlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmV2ZW50LWRldGFpbHMge1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMWVtIDJlbTtcbn1cblxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxZW0gMDtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIC5maWVsZCB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgLmZpZWxkIHtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gIH1cbn1cbi5maWVsZFtuYW1lPXRpdGxlXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuZmllbGRbbmFtZT10aXRsZV0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuZmllbGRbbmFtZT10aXRsZV0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gIH1cbn1cblxubGFiZWwge1xuICB3aWR0aDogOGVtO1xuICBtYXJnaW4tdG9wOiAwLjI1ZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gIGxhYmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgfVxufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gIGxhYmVsIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgfVxufVxuXG4udmFsdWUge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMCAwLjVlbTtcbn1cbi52YWx1ZSAuc2hvdyB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi52YWx1ZSAuc2hvdzpob3ZlciB7XG4gIGNvbG9yOiAjMTkzN2VhO1xufVxuXG4ubXVsdGkgLnZhbHVlIHtcbiAgbWFyZ2luLXRvcDogLTAuMjVlbTtcbn1cblxuLmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMC41ZW07XG59XG5cbi5saXN0IHtcbiAgbWF4LWhlaWdodDogMTVlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luLWxlZnQ6IC0wLjVlbTtcbn1cbi5saXN0LnNob3duIHtcbiAgbWF4LWhlaWdodDogMTAwZW07XG59XG5cbi5lbWFpbCB7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xufVxuXG4ubGlzdC1pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmxpc3QtaXRlbTpudGgtY2hpbGQoMm4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbn1cbi5saXN0LWl0ZW0gLnN0YXR1cyB7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDNhMDQ3O1xuICBtYXJnaW46IDAuNWVtIDAuNWVtIDAuNWVtIDA7XG59XG4ubGlzdC1pdGVtIC50ZXh0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogNTAlO1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG59XG5cbltuYW1lPWF0dGVuZGVlc10gLnN0YXR1cyB7XG4gIG1hcmdpbi1ib3R0b206IDEuNWVtO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogOGVtO1xuICBtYXJnaW46IDAuMjVlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'schedule-event-details',
          templateUrl: './event-details.component.html',
          styleUrls: ['./event-details.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }];
      }, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/schedule/view-event/event-edit/event-edit.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/shell/schedule/view-event/event-edit/event-edit.component.ts ***!
    \******************************************************************************/

  /*! exports provided: EventEditComponent */

  /***/
  function srcAppShellScheduleViewEventEventEditEventEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventEditComponent", function () {
      return EventEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/base.directive */
    "./src/app/shared/base.directive.ts");
    /* harmony import */


    var src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/data/bookings/booking.class */
    "./src/app/services/data/bookings/booking.class.ts");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var src_app_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/data/bookings/booking.utilities */
    "./src/app/services/data/bookings/booking.utilities.ts");
    /* harmony import */


    var src_app_shell_bookings_overlays_booking_confirm_booking_confirm_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shell/bookings/overlays/booking-confirm/booking-confirm.component */
    "./src/app/shell/bookings/overlays/booking-confirm/booking-confirm.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_forms_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/components/forms/booking-form/booking-form.component */
    "./src/app/shared/components/forms/booking-form/booking-form.component.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");

    function EventEditComponent_form_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function EventEditComponent_form_1_Template_form_ngSubmit_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r1.save();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a-booking-form", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function EventEditComponent_form_1_Template_button_tapped_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2);

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r3.cancel();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Cancel ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Save");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("form", ctx_r0.form);
      }
    }

    var EventEditComponent =
    /*#__PURE__*/
    function (_src_app_shared_base_5) {
      _inherits(EventEditComponent, _src_app_shared_base_5);

      var _super5 = _createSuper(EventEditComponent);

      function EventEditComponent(_service, _dialog) {
        var _this13;

        _classCallCheck(this, EventEditComponent);

        _this13 = _super5.call(this);
        _this13._service = _service;
        _this13._dialog = _dialog;
        /** Emitter for action on the display view */

        _this13.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emitter for changes to the loading state */

        _this13.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        return _this13;
      }

      _createClass(EventEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          /* istanbul ignore else */
          if (this.event) {
            this.form = Object(src_app_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_5__["generateBookingForm"])(this.event, this._service.Users.current, this._service.setting('app.booking.show_fields') || []);
          }
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /* istanbul ignore else */
          if (changes.event && this.event) {
            /* istanbul ignore else */
            if (this.form && changes.event.previousValue) {
              changes.event.previousValue.emit('item_saved');
            }

            this.form = Object(src_app_services_data_bookings_booking_utilities__WEBPACK_IMPORTED_MODULE_5__["generateBookingForm"])(this.event, this._service.Users.current, this._service.setting('app.booking.show_fields') || []);
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          _get(_getPrototypeOf(EventEditComponent.prototype), "ngOnDestroy", this).call(this);
          /* istanbul ignore else */


          if (this.form && this.event) {
            this.event.emit('item_saved');
          }
        }
        /**
         * Exit the edit form
         */

      }, {
        key: "cancel",
        value: function cancel() {
          this.change.emit({
            type: 'cancel'
          });
        }
        /**
         * Save changes to the booking
         */

      }, {
        key: "save",
        value: function save() {
          var _this14 = this;

          /* istanbul ignore else */
          if (!this.event.has_changes) {
            this._service.notifyInfo('No changes have been made to booking');

            return;
          }
          /* istanbul ignore else */


          if (this.form.valid) {
            var dialog_ref = this._dialog.open(src_app_shell_bookings_overlays_booking_confirm_booking_confirm_component__WEBPACK_IMPORTED_MODULE_6__["BookingConfirmComponent"], {
              width: '32em',
              maxWidth: '95vw',
              maxHeight: '95vh',
              data: {
                booking: this.event
              }
            });

            dialog_ref.componentInstance.event.subscribe(function (event) {
              /* istanbul ignore else */
              if (event.reason === 'success') {
                _this14.change.emit({
                  type: 'view'
                });
              }
            });
          }
        }
      }]);

      return EventEditComponent;
    }(src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]);

    EventEditComponent.ɵfac = function EventEditComponent_Factory(t) {
      return new (t || EventEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]));
    };

    EventEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EventEditComponent,
      selectors: [["schedule-event-edit"]],
      inputs: {
        event: "event"
      },
      outputs: {
        change: "change",
        loading: "loading"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 2,
      vars: 1,
      consts: [[1, "event-edit"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "body"], [3, "form"], [1, "footer"], ["mat-button", "", "type", "button", "name", "cancel", 1, "inverse", 3, "tapped"], ["mat-button", "", "type", "submit"]],
      template: function EventEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EventEditComponent_form_1_Template, 8, 2, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormGroupDirective"], _shared_components_forms_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_9__["BookingFormComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_11__["ɵb"]],
      styles: [".event-edit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 1em 2em;\n}\n\n.footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  padding: 0.5em;\n}\n\nbutton[_ngcontent-%COMP%] {\n  width: 8em;\n  margin: 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGVsbC9zY2hlZHVsZS92aWV3LWV2ZW50L2V2ZW50LWVkaXQvZXZlbnQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvc2NoZWR1bGUvdmlldy1ldmVudC9ldmVudC1lZGl0L2V2ZW50LWVkaXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUNESjs7QURJQTtFQUNJLFVBQUE7RUFDQSxjQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9zY2hlZHVsZS92aWV3LWV2ZW50L2V2ZW50LWVkaXQvZXZlbnQtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uZXZlbnQtZWRpdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMWVtIDJlbTtcbn1cblxuLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IC41ZW07XG59XG5cbmJ1dHRvbiB7XG4gICAgd2lkdGg6IDhlbTtcbiAgICBtYXJnaW46IC4yNWVtO1xufSIsIi5ldmVudC1lZGl0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDFlbSAyZW07XG59XG5cbi5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG5idXR0b24ge1xuICB3aWR0aDogOGVtO1xuICBtYXJnaW46IDAuMjVlbTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EventEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'schedule-event-edit',
          templateUrl: './event-edit.component.html',
          styleUrls: ['./event-edit.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]
        }, {
          type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"]
        }];
      }, {
        event: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        loading: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/shell/schedule/view-event/view-event.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/shell/schedule/view-event/view-event.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ScheduleViewEventComponent */

  /***/
  function srcAppShellScheduleViewEventViewEventComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScheduleViewEventComponent", function () {
      return ScheduleViewEventComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/base.directive */
    "./src/app/shared/base.directive.ts");
    /* harmony import */


    var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
    /* harmony import */


    var _event_details_event_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./event-details/event-details.component */
    "./src/app/shell/schedule/view-event/event-details/event-details.component.ts");
    /* harmony import */


    var _event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./event-edit/event-edit.component */
    "./src/app/shell/schedule/view-event/event-edit/event-edit.component.ts");

    function ScheduleViewEventComponent_ng_container_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.loading, " ");
      }
    }

    function ScheduleViewEventComponent_ng_container_22_Template(rf, ctx) {
      if (rf & 1) {
        var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "schedule-event-details", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ScheduleViewEventComponent_ng_container_22_Template_schedule_event_details_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r4.onChange($event);
        })("loading", function ScheduleViewEventComponent_ng_container_22_Template_schedule_event_details_loading_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r6.loading = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r1.event);
      }
    }

    function ScheduleViewEventComponent_ng_template_23_Template(rf, ctx) {
      if (rf & 1) {
        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "schedule-event-edit", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ScheduleViewEventComponent_ng_template_23_Template_schedule_event_edit_change_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r7.onChange($event);
        })("loading", function ScheduleViewEventComponent_ng_template_23_Template_schedule_event_edit_loading_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r9.loading = $event;
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", ctx_r3.event);
      }
    }

    var _c0 = function _c0(a2) {
      return ["/schedule", "view", a2];
    };

    var _c1 = function _c1() {
      return ["/schedule"];
    };

    var ScheduleViewEventComponent =
    /*#__PURE__*/
    function (_src_app_shared_base_6) {
      _inherits(ScheduleViewEventComponent, _src_app_shared_base_6);

      var _super6 = _createSuper(ScheduleViewEventComponent);

      function ScheduleViewEventComponent(_service, _router) {
        var _this15;

        _classCallCheck(this, ScheduleViewEventComponent);

        _this15 = _super6.call(this);
        _this15._service = _service;
        _this15._router = _router;
        return _this15;
      }

      _createClass(ScheduleViewEventComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this16 = this;

          this.subscription('arrow_right', this._service.Hotkeys.listen(['ArrowRight'], function () {
            return _this16.nextBooking();
          }));
          this.subscription('arrow_left', this._service.Hotkeys.listen(['ArrowLeft'], function () {
            return _this16.previousBooking();
          }));
          this.subscription('changes', this._service.Bookings.listen('list').subscribe(function () {
            return _this16.loadEvent();
          }));
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /* istanbul ignore else */
          if (changes.id && this.id) {
            this.event = null;
            this.editing = false;
            this.loading = '';
            this.loadEvent();
          }
        }
        /**
         * Load the details of the active event
         */

      }, {
        key: "loadEvent",
        value: function loadEvent() {
          var _this17 = this;

          this.loading = 'Loading booking data...';

          var booking = this._service.Bookings.find(this.id);

          if (booking) {
            this.event = booking;
            this.loading = '';
          } else {
            this._service.Bookings.show(this.id, {}).then(function (bkn) {
              _this17.loading = '';
              _this17.event = bkn;
            }, function () {
              _this17.loading = '';

              _this17._service.notifyError("Failed to loaded booking data<br>ID: ".concat(_this17.id));

              _this17._router.navigate(['/schedule']);
            });
          }
        }
        /**
         * View the next booking in the list
         */

      }, {
        key: "nextBooking",
        value: function nextBooking() {
          /* istanbul ignore else */
          if (this.next && !this.editing) {
            this._router.navigate(['/schedule', 'view', this.next]);
          }
        }
        /**
         * View the previous booking in the list
         */

      }, {
        key: "previousBooking",
        value: function previousBooking() {
          /* istanbul ignore else */
          if (this.previous && !this.editing) {
            this._router.navigate(['/schedule', 'view', this.previous]);
          }
        }
        /**
         * Handle changes to sub-components
         */

      }, {
        key: "onChange",
        value: function onChange(event) {
          /* istanbul ignore else */
          if (event.type === 'edit') {
            this.editing = true;
          } else if (event.type === 'view' || event.type === 'cancel') {
            this.editing = false;
          }
        }
      }]);

      return ScheduleViewEventComponent;
    }(src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"]);

    ScheduleViewEventComponent.ɵfac = function ScheduleViewEventComponent_Factory(t) {
      return new (t || ScheduleViewEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    ScheduleViewEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ScheduleViewEventComponent,
      selectors: [["schedule-view-event"]],
      inputs: {
        id: "id",
        next: "next",
        previous: "previous"
      },
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]],
      decls: 25,
      vars: 18,
      consts: [[1, "event-display"], [1, "header"], [1, "icon"], [1, "details"], ["mat-icon-button", "", "name", "previous", 3, "routerLink"], [1, "left", "icon"], [1, "material-icons"], [1, "title"], ["mat-icon-button", "", "name", "next", 3, "routerLink"], [1, "right", "icon"], ["mat-icon-button", "", 3, "routerLink"], [1, "body"], [1, "content"], [4, "ngIf"], [4, "ngIf", "ngIfElse"], ["edit_form", ""], [1, "no-item", "center"], ["diameter", "48"], [1, "text"], [3, "event", "change", "loading"]],
      template: function ScheduleViewEventComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "keyboard_arrow_left");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "keyboard_arrow_right");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ScheduleViewEventComponent_ng_container_20_Template, 6, 1, "ng-container", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, ScheduleViewEventComponent_ng_container_22_Template, 2, 1, "ng-container", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ScheduleViewEventComponent_ng_template_23_Template, 1, 1, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.previous);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.previous));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.event ? ctx.event.title || "No title" : "????");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", !ctx.next);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.next));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", ctx.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.editing)("ngIfElse", _r2);
        }
      },
      directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"], _event_details_event_details_component__WEBPACK_IMPORTED_MODULE_7__["EventDetailsComponent"], _event_edit_event_edit_component__WEBPACK_IMPORTED_MODULE_8__["EventEditComponent"]],
      styles: [".event-display[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: #ccc;\n}\n.header[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  background-color: #1937ea;\n  color: #fff;\n  height: 3em;\n  width: 100%;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  z-index: 10;\n}\n.details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  font-size: 2em;\n  margin: 0 0.5em;\n  border-radius: 100%;\n  cursor: pointer;\n}\n.icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  transition: font-size 200ms;\n}\n.icon[_ngcontent-%COMP%]:hover {\n  color: rgba(255, 255, 255, 0.6);\n}\n.icon[_ngcontent-%COMP%]:active   i[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 1.6em;\n  min-width: 50%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  text-align: center;\n}\n.body[_ngcontent-%COMP%] {\n  min-height: 50%;\n  max-height: 100%;\n  width: 100%;\n  flex: 1;\n  overflow: auto;\n}\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 768px;\n  min-height: 100%;\n  margin: auto;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n.disabled[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.35) !important;\n  pointer-events: none;\n}\n.disabled[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]:active   i[_ngcontent-%COMP%] {\n  font-size: 1em !important;\n}\n.hide[_ngcontent-%COMP%] {\n  display: none;\n  pointer-events: none;\n}\n[mat-icon-button][_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1rem;\n  height: 2em;\n  width: 2em;\n  margin: 0 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoZWxsL3NjaGVkdWxlL3ZpZXctZXZlbnQvdmlldy1ldmVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvc2NoZWR1bGUvdmlldy1ldmVudC92aWV3LWV2ZW50LmNvbXBvbmVudC5zY3NzIiwiL2J1aWxkcy9hY2EtZW5naW5lL21ja2luc2V5L21ja2luc2V5LXN0YWZmLWFwcC9zcmMvYXBwL3NoYXJlZC9zdHlsZXMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBaUNBOztjQUFBO0FBYUE7O3NCQUFBO0FDNUNBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0FDT0o7QURKQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUVmQSxpSEFBQTtFRmlCQSxXQUFBO0FDT0o7QURKQTtFQUNJLE9BQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNPSjtBREpBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FDT0o7QURMSTtFQUNJLDJCQUFBO0FDT1I7QURKSTtFQUNJLCtCQUFBO0FDTVI7QURGUTtFQUNJLGlCQUFBO0FDSVo7QURDQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFRTlEQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUY4REEsa0JBQUE7QUNJSjtBRERBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0FDSUo7QUREQTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFRTFFQSxpSEFBQTtBRCtFSjtBRERBO0VBQ0ksMkNBQUE7RUFDQSxvQkFBQTtBQ0lKO0FERFE7RUFDSSx5QkFBQTtBQ0daO0FERUE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7QUNDSjtBREVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9zY2hlZHVsZS92aWV3LWV2ZW50L3ZpZXctZXZlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICMxOTM3ZWE7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG4kaGVhZGVyLWJhY2s6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA1MUMyQywgIzA1MUMyQyA0MCUsICMwQjI0NTMgNjAlLCAjMUY0MEU2IDEwMCUpO1xuXG4kY29sb3ItdGVybmFyeTogIzA1MWMyYztcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG4uZXZlbnQtZGlzcGxheSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdztcbiAgICB6LWluZGV4OiAxMDtcbn1cblxuLmRldGFpbHMge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiA1MCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS4yNWVtO1xuICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgbWFyZ2luOiAwIC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICBpIHtcbiAgICAgICAgdHJhbnNpdGlvbjogZm9udC1zaXplIDIwMG1zO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogcmdiYSgjZmZmLCAuNik7XG4gICAgfVxuXG4gICAgJjphY3RpdmUge1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1ZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi50aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgICBAaW5jbHVkZSBoaWRlLXRleHQtb3ZlcmZsb3c7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9keSB7XG4gICAgbWluLWhlaWdodDogNTAlO1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdztcbn1cblxuLmRpc2FibGVkIHtcbiAgICBjb2xvcjogcmdiYSgjZmZmLCAuMzUpICFpbXBvcnRhbnQ7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAqOmFjdGl2ZSB7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW0gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmhpZGUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cblttYXQtaWNvbi1idXR0b25dIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgbWFyZ2luOiAwIC41ZW07XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uZXZlbnQtZGlzcGxheSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTkzN2VhO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAzZW07XG4gIHdpZHRoOiAxMDAlO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgei1pbmRleDogMTA7XG59XG5cbi5kZXRhaWxzIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEuMjVlbTtcbiAgd2lkdGg6IDEuMjVlbTtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMCAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmljb24gaSB7XG4gIHRyYW5zaXRpb246IGZvbnQtc2l6ZSAyMDBtcztcbn1cbi5pY29uOmhvdmVyIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42KTtcbn1cbi5pY29uOmFjdGl2ZSBpIHtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG59XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS42ZW07XG4gIG1pbi13aWR0aDogNTAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uYm9keSB7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDE7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWF4LXdpZHRoOiA3NjhweDtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cblxuLmRpc2FibGVkIHtcbiAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zNSkgIWltcG9ydGFudDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uZGlzYWJsZWQgKjphY3RpdmUgaSB7XG4gIGZvbnQtc2l6ZTogMWVtICFpbXBvcnRhbnQ7XG59XG5cbi5oaWRlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cblttYXQtaWNvbi1idXR0b25dIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIHdpZHRoOiAyZW07XG4gIG1hcmdpbjogMCAwLjVlbTtcbn0iLCJcbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGNvbG9yOiAjMDAwLCAkZGVwdGg6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMXB4ICogKCRkZXB0aCAtIDEpIHJnYmEoIzAwMCwgLjIpLFxuICAgICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSxcbiAgICAgICAgICAgICAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScheduleViewEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'schedule-view-event',
          templateUrl: './view-event.component.html',
          styleUrls: ['./view-event.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        next: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        previous: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  }
}]);
//# sourceMappingURL=shell-schedule-schedule-module-es5.js.map