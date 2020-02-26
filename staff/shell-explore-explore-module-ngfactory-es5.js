function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-explore-explore-module-ngfactory"], {
  /***/
  "./src/app/shell/explore/components/map-overlay/map-overlay.component.ngfactory.js":
  /*!*****************************************************************************************!*\
    !*** ./src/app/shell/explore/components/map-overlay/map-overlay.component.ngfactory.js ***!
    \*****************************************************************************************/

  /*! exports provided: RenderType_ExploreMapOverlayComponent, View_ExploreMapOverlayComponent_0, View_ExploreMapOverlayComponent_Host_0, ExploreMapOverlayComponentNgFactory */

  /***/
  function srcAppShellExploreComponentsMapOverlayMapOverlayComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ExploreMapOverlayComponent", function () {
      return RenderType_ExploreMapOverlayComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ExploreMapOverlayComponent_0", function () {
      return View_ExploreMapOverlayComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ExploreMapOverlayComponent_Host_0", function () {
      return View_ExploreMapOverlayComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreMapOverlayComponentNgFactory", function () {
      return ExploreMapOverlayComponentNgFactory;
    });
    /* harmony import */


    var _map_overlay_styles_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./map-overlay.styles.scss.shim.ngstyle */
    "./src/app/shell/explore/components/map-overlay/map-overlay.styles.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @acaprojects/ngx-composer */
    "./node_modules/@acaprojects/ngx-composer/fesm2015/acaprojects-ngx-composer.js");
    /* harmony import */


    var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/button/typings/index.ngfactory */
    "./node_modules/@angular/material/button/typings/index.ngfactory.js");
    /* harmony import */


    var _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @acaprojects/ngx-widgets */
    "./node_modules/@acaprojects/ngx-widgets/esm2015/acaprojects-ngx-widgets.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../../../node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory */
    "./node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_components_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../shared/components/icon/icon.component.ngfactory */
    "./src/app/shared/components/icon/icon.component.ngfactory.js");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");
    /* harmony import */


    var _map_overlay_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./map-overlay.component */
    "./src/app/shell/explore/components/map-overlay/map-overlay.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ExploreMapOverlayComponent = [_map_overlay_styles_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ExploreMapOverlayComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ExploreMapOverlayComponent,
      data: {}
    });

    function View_ExploreMapOverlayComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["binding", ""], ["mod", "DeskManagement"]], null, [[null, "modelChange"], [null, "valueChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.desks.free = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("valueChange" === en) {
          var pd_1 = _co.processRooms() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["binding", ""], ["mod", "DeskManagement"]], null, [[null, "modelChange"], [null, "valueChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.desks.count = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("valueChange" === en) {
          var pd_1 = _co.processRooms() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_2__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.system;
        var currVal_1 = "DeskManagement";
        var currVal_2 = _co.model.level.active.id + ":free_count";
        var currVal_3 = _co.model.desks.free;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);

        var currVal_4 = _co.model.system;
        var currVal_5 = "DeskManagement";
        var currVal_6 = _co.model.level.active.id + ":desk_count";
        var currVal_7 = _co.model.desks.count;

        _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7);
      }, null);
    }

    function View_ExploreMapOverlayComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "i", [], [[8, "className", 0], [2, "large", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.icon.class;
        var currVal_1 = _v.parent.context.$implicit.large;

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_2 = _v.parent.context.$implicit.icon.value;

        _ck(_v, 1, 0, currVal_2);
      });
    }

    function View_ExploreMapOverlayComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "number"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.level == null ? null : _co.model.level.active == null ? null : _co.model.level.active.number;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_ExploreMapOverlayComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 8, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 7, "button", [["format", "mini-action"], ["mat-button", ""], ["name", "black inverse"], ["position", "left"], ["tooltip", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "showChange"], [null, "mouseenter"], [null, "mouseleave"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mouseenter" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onEnter($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseleave" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onLeave($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("mousedown" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).mousestart($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchstart" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).touchstart($event) !== false;
          ad = pd_3 && ad;
        }

        if ("mouseup" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).mouse($event) !== false;
          ad = pd_4 && ad;
        }

        if ("touchend" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).touch($event) !== false;
          ad = pd_5 && ad;
        }

        if ("touchrelease" === en) {
          var pd_6 = _co.action(_v.context.$implicit) !== false;
          ad = pd_6 && ad;
        }

        if ("showChange" === en) {
          var pd_7 = (_co.model.show[_v.context.$implicit.id] = $event) !== false;
          ad = pd_7 && ad;
        }

        if ("touchrelease" === en) {
          var pd_8 = (_v.context.$implicit.template ? _co.model.show[_v.context.$implicit.id] = !_co.model.show[_v.context.$implicit.id] : "") !== false;
          ad = pd_8 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["OverlayService"]], {
        name: [0, "name"],
        position: [1, "position"],
        offset: [2, "offset"],
        template: [3, "template"],
        show: [4, "show"]
      }, {
        showChange: "showChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ExploreMapOverlayComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ExploreMapOverlayComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = "black inverse";
        var currVal_3 = "left";
        var currVal_4 = _v.context.$implicit.offset || "start";
        var currVal_5 = _co.model.template[_v.context.$implicit.id];
        var currVal_6 = _co.model.show[_v.context.$implicit.id];

        _ck(_v, 2, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);

        var currVal_7 = _v.context.$implicit.icon;

        _ck(_v, 6, 0, currVal_7);

        var currVal_8 = _v.context.$implicit.number;

        _ck(_v, 8, 0, currVal_8);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._animationMode === "NoopAnimations";

        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }

    function View_ExploreMapOverlayComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "simple"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.options;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_ExploreMapOverlayComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "show-state"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Zones"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 3, "div", [["class", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "toggle", [["name", "zones"], ["type", "ios"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.zones.show = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.updateState() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_ToggleComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_ToggleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 704512, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"], [], {
        name: [0, "name"],
        model: [1, "model"],
        type: [2, "type"]
      }, {
        modelChange: "modelChange"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "zones";
        var currVal_1 = _co.model.zones.show;
        var currVal_2 = "ios";

        _ck(_v, 6, 0, currVal_0, currVal_1, currVal_2);
      }, null);
    }

    function View_ExploreMapOverlayComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, null, null, null, null, null, null, null))], null, null);
    }

    function View_ExploreMapOverlayComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "header-icon"]], null, [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = _co.viewBookingRules() !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["info"]))], null, null);
    }

    function View_ExploreMapOverlayComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "div", [["class", "level"]], [[2, "push", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "dropdown", [["klass", "form"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.buildings.index = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.setBuilding(_co.model.buildings.list[$event]) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_DropdownComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_DropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 704512, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"], [], {
        klass: [0, "klass"],
        model: [1, "model"],
        list: [2, "list"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 2, "dropdown", [["klass", "form"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.level.index = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.setLevel(_co.model.level.list[$event]) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_DropdownComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_DropdownComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 704512, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["DropdownComponent"], [], {
        klass: [0, "klass"],
        model: [1, "model"],
        list: [2, "list"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 540672, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgTemplateOutlet"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]], {
        ngTemplateOutlet: [0, "ngTemplateOutlet"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = "form";
        var currVal_2 = _co.model.buildings.index;
        var currVal_3 = _co.model.buildings.names;

        _ck(_v, 3, 0, currVal_1, currVal_2, currVal_3);

        var currVal_4 = "form";
        var currVal_5 = _co.model.level.index;
        var currVal_6 = _co.model.level.names;

        _ck(_v, 6, 0, currVal_4, currVal_5, currVal_6);

        var currVal_7 = _co.model.zones && _co.model.zones.enabled && _co.model.search !== "people";

        _ck(_v, 8, 0, currVal_7);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent.parent, 32);

        _ck(_v, 10, 0, currVal_8);

        var currVal_9 = _co.has_details;

        _ck(_v, 12, 0, currVal_9);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.search === "spaces" || _co.model.search === "people";

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_ExploreMapOverlayComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "button", [["format", "mini-action"], ["mat-button", ""], ["offset", "start"], ["position", "left"], ["tooltip", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "showChange"], [null, "mouseenter"], [null, "mouseleave"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mouseenter" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onEnter($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseleave" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onLeave($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("mousedown" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).mousestart($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchstart" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).touchstart($event) !== false;
          ad = pd_3 && ad;
        }

        if ("mouseup" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).mouse($event) !== false;
          ad = pd_4 && ad;
        }

        if ("touchend" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).touch($event) !== false;
          ad = pd_5 && ad;
        }

        if ("touchrelease" === en) {
          var pd_6 = (_co.model.show.settings = !_co.model.show.settings) !== false;
          ad = pd_6 && ad;
        }

        if ("showChange" === en) {
          var pd_7 = (_co.model.show.settings = $event) !== false;
          ad = pd_7 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["OverlayService"]], {
        name: [0, "name"],
        position: [1, "position"],
        offset: [2, "offset"],
        template: [3, "template"],
        show: [4, "show"]
      }, {
        showChange: "showChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["settings"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.model.show.settings ? "" : "black inverse";
        var currVal_3 = "left";
        var currVal_4 = "start";

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v.parent, 3);

        var currVal_6 = _co.model.show.settings;

        _ck(_v, 1, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_ExploreMapOverlayComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 28, "div", [["class", "settings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Desk Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 3, "div", [["class", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 2, "toggle", [["name", "zones"], ["type", "ios"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.show.desks = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.updateState() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_ToggleComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_ToggleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 704512, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"], [], {
        name: [0, "name"],
        model: [1, "model"],
        type: [2, "type"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 6, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Room Status"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 3, "div", [["class", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 2, "toggle", [["name", "zones"], ["type", "ios"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.show.rooms = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.updateState() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_ToggleComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_ToggleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 704512, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"], [], {
        name: [0, "name"],
        model: [1, "model"],
        type: [2, "type"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 6, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Team Tables"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 3, "div", [["class", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 2, "toggle", [["name", "zones"], ["type", "ios"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.show.teams = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.updateState() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_ToggleComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_ToggleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 704512, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"], [], {
        name: [0, "name"],
        model: [1, "model"],
        type: [2, "type"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 6, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Zones"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 3, "div", [["class", "checkbox"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 2, "toggle", [["name", "zones"], ["type", "ios"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.zones.show = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.updateState() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_ToggleComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_ToggleComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 704512, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ToggleComponent"], [], {
        name: [0, "name"],
        model: [1, "model"],
        type: [2, "type"]
      }, {
        modelChange: "modelChange"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "zones";
        var currVal_1 = _co.model.show.desks;
        var currVal_2 = "ios";

        _ck(_v, 7, 0, currVal_0, currVal_1, currVal_2);

        var currVal_3 = "zones";
        var currVal_4 = _co.model.show.rooms;
        var currVal_5 = "ios";

        _ck(_v, 14, 0, currVal_3, currVal_4, currVal_5);

        var currVal_6 = "zones";
        var currVal_7 = _co.model.show.teams;
        var currVal_8 = "ios";

        _ck(_v, 21, 0, currVal_6, currVal_7, currVal_8);

        var currVal_9 = "zones";
        var currVal_10 = _co.model.zones.show;
        var currVal_11 = "ios";

        _ck(_v, 28, 0, currVal_9, currVal_10, currVal_11);
      }, null);
    }

    function View_ExploreMapOverlayComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["map_settings", 2]], null, 0, null, View_ExploreMapOverlayComponent_13))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.model.map_settings || _co.model.map_settings.settings !== false && _co.model.zones.status;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_ExploreMapOverlayComponent_15(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["format", "mini-action"], ["mat-button", ""]], [[8, "name", 0], [8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = (_co.model.show_filters = !_co.model.show_filters) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["filter_list"]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.show_filters ? "" : "black inverse";
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled || null;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2);
      });
    }

    function View_ExploreMapOverlayComponent_14(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "btn"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.model.map_settings || _co.model.map_settings.filters !== false;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_ExploreMapOverlayComponent_16(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["format", "mini-action"], ["mat-button", ""], ["name", "black"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = _co.back() !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["arrow_back"]))], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_ExploreMapOverlayComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "div", [["class", "old-overlay"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 6, "div", [["class", "options info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.level && _co.model.level.list && _co.model.level.list.length;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = !_co.model.zones.enabled && _co.model.zones.status;

        _ck(_v, 5, 0, currVal_1);

        var currVal_2 = !_co.model.zones.enabled && _co.model.zones.filters;

        _ck(_v, 7, 0, currVal_2);

        var currVal_3 = _co.model.back;

        _ck(_v, 9, 0, currVal_3);
      }, null);
    }

    function View_ExploreMapOverlayComponent_19(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Desks free"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "value"]], [[2, "low", null], [2, "medium", null], [2, "high", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["\xA0of ", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.desks.percent > 75;
        var currVal_1 = _co.model.desks.percent > 25 && _co.model.desks.percent <= 75;
        var currVal_2 = _co.model.desks.percent <= 25;

        _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2);

        var currVal_3 = _co.model.desks.free;

        _ck(_v, 4, 0, currVal_3);

        var currVal_4 = _co.model.desks.count;

        _ck(_v, 6, 0, currVal_4);
      });
    }

    function View_ExploreMapOverlayComponent_20(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Spaces free"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "value"]], [[2, "low", null], [2, "medium", null], [2, "high", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "div", [["class", "value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["\xA0of ", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.rooms.percent > 75;
        var currVal_1 = _co.model.rooms.percent > 25 && _co.model.rooms.percent <= 75;
        var currVal_2 = _co.model.rooms.percent <= 25;

        _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2);

        var currVal_3 = _co.model.rooms.free;

        _ck(_v, 4, 0, currVal_3);

        var currVal_4 = _co.model.rooms.count;

        _ck(_v, 6, 0, currVal_4);
      });
    }

    function View_ExploreMapOverlayComponent_18(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "room"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.desks && _co.model.desks.count;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.model.rooms && _co.model.rooms.count;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_ExploreMapOverlayComponent_17(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.level && _co.model.level.active && _co.model.desks;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_ExploreMapOverlayComponent_22(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "room"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["# of desks"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Free desks"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "value"]], [[2, "low", null], [2, "medium", null], [2, "high", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.desks.count || "0";

        _ck(_v, 5, 0, currVal_0);

        var currVal_1 = _co.model.desks.free > 50;
        var currVal_2 = _co.model.desks.free > 25 && _co.model.desks.free <= 25;
        var currVal_3 = _co.model.desks.free <= 25;

        _ck(_v, 9, 0, currVal_1, currVal_2, currVal_3);

        var currVal_4 = _co.model.desks.free || "0";

        _ck(_v, 10, 0, currVal_4);
      });
    }

    function View_ExploreMapOverlayComponent_21(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.level && _co.model.level.active && _co.model.desks;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_ExploreMapOverlayComponent_24(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "room"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["# of Rooms"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "value"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 4, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Free Rooms"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "value"]], [[2, "low", null], [2, "medium", null], [2, "high", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, [" ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.rooms.count || "0";

        _ck(_v, 5, 0, currVal_0);

        var currVal_1 = _co.model.desks.free > 50;
        var currVal_2 = _co.model.desks.free > 25 && _co.model.desks.free <= 25;
        var currVal_3 = _co.model.desks.free <= 25;

        _ck(_v, 9, 0, currVal_1, currVal_2, currVal_3);

        var currVal_4 = _co.model.rooms.free || "0";

        _ck(_v, 10, 0, currVal_4);
      });
    }

    function View_ExploreMapOverlayComponent_23(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.level && _co.model.level.active;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_ExploreMapOverlayComponent_27(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "divider"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 0, "div", [["class", "bar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "div", [["class", "type"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](3, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 0, "div", [["class", "bar"]], null, null, null, null, null))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit;

        _ck(_v, 3, 0, currVal_0);
      });
    }

    function View_ExploreMapOverlayComponent_30(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "image"]], [[4, "background-image", null]], null, null, null, null))], null, function (_ck, _v) {
        var currVal_0 = "url(" + _v.parent.parent.context.$implicit.image + ")";

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_ExploreMapOverlayComponent_31(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.parent.context.$implicit.icon.class;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _v.parent.parent.context.$implicit.icon.value;

        _ck(_v, 1, 0, currVal_1);
      });
    }

    function View_ExploreMapOverlayComponent_29(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_30)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_31)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.image;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.parent.context.$implicit.icon;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_ExploreMapOverlayComponent_28(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "div", [["class", "circle "], ["style", "width:2em"]], [[4, "background-color", null], [2, "icon", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_29)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](5, null, ["", ""]))], function (_ck, _v) {
        var currVal_2 = _v.context.$implicit.icon || _v.context.$implicit.image;

        _ck(_v, 3, 0, currVal_2);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.color;
        var currVal_1 = _v.context.$implicit.icon || _v.context.$implicit.image;

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_3 = _v.context.$implicit.name;

        _ck(_v, 5, 0, currVal_3);
      });
    }

    function View_ExploreMapOverlayComponent_26(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_28)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.keys.types.length > 1;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.model.keys.groups[_v.context.$implicit];

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_ExploreMapOverlayComponent_25(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "key-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.keys.types;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_ExploreMapOverlayComponent_33(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "i", [], [[8, "className", 0], [2, "large", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.icon.class;
        var currVal_1 = _v.parent.context.$implicit.large;

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_2 = _v.parent.context.$implicit.icon.value;

        _ck(_v, 1, 0, currVal_2);
      });
    }

    function View_ExploreMapOverlayComponent_34(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["style", "width:15%"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.imgSrc;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_ExploreMapOverlayComponent_35(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "number"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.level == null ? null : _co.model.level.active == null ? null : _co.model.level.active.number;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_ExploreMapOverlayComponent_32(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 9, "button", [["format", "mini-action"], ["mat-button", ""], ["position", "right"], ["tooltip", ""]], [[4, "transform", null], [8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "showChange"], [null, "mouseenter"], [null, "mouseleave"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mouseenter" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onEnter($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseleave" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).onLeave($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("mousedown" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).mousestart($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchstart" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).touchstart($event) !== false;
          ad = pd_3 && ad;
        }

        if ("mouseup" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).mouse($event) !== false;
          ad = pd_4 && ad;
        }

        if ("touchend" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).touch($event) !== false;
          ad = pd_5 && ad;
        }

        if ("touchrelease" === en) {
          var pd_6 = _co.action(_v.context.$implicit) !== false;
          ad = pd_6 && ad;
        }

        if ("showChange" === en) {
          var pd_7 = (_co.model.show[_v.context.$implicit.id + "_mobile"] = $event) !== false;
          ad = pd_7 && ad;
        }

        if ("touchrelease" === en) {
          var pd_8 = (_v.context.$implicit.template ? _co.model.show[_v.context.$implicit.id + "_mobile"] = !_co.model.show[_v.context.$implicit.id + "_mobile"] : "") !== false;
          ad = pd_8 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 671744, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["OverlayService"]], {
        name: [0, "name"],
        position: [1, "position"],
        offset: [2, "offset"],
        template: [3, "template"],
        show: [4, "show"]
      }, {
        showChange: "showChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ExploreMapOverlayComponent_33)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ExploreMapOverlayComponent_34)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ExploreMapOverlayComponent_35)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = "black inverse no-margin " + _v.context.$implicit.class;
        var currVal_4 = "right";
        var currVal_5 = _v.context.$implicit.offset || "start";
        var currVal_6 = _co.model.template[_v.context.$implicit.id];
        var currVal_7 = _co.model.show[_v.context.$implicit.id + "_mobile"];

        _ck(_v, 2, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_8 = _v.context.$implicit.icon && !_v.context.$implicit.imgSrc;

        _ck(_v, 6, 0, currVal_8);

        var currVal_9 = !_v.context.$implicit.icon && _v.context.$implicit.imgSrc;

        _ck(_v, 8, 0, currVal_9);

        var currVal_10 = _v.context.$implicit.number;

        _ck(_v, 10, 0, currVal_10);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.show_menu ? "translateY(" + 2.5 * (_v.context.index + 1) + "em)" : "";
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).disabled || null;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4)._animationMode === "NoopAnimations";

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
      });
    }

    function View_ExploreMapOverlayComponent_36(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "header-icon fixed mobile-only"]], null, [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = _co.viewBookingRules() !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["info"]))], null, null);
    }

    function View_ExploreMapOverlayComponent_37(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 3, "div", [["class", "item"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "checkbox", [], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;

        if ("modelChange" === en) {
          var pd_0 = (_v.context.$implicit.active = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_CheckboxComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_CheckboxComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 704512, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["CheckboxComponent"], [], {
        model: [0, "model"],
        label: [1, "label"]
      }, {
        modelChange: "modelChange"
      })], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.active;
        var currVal_1 = _v.context.$implicit.name;

        _ck(_v, 3, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_ExploreMapOverlayComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, {
        room_info: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 2, {
        key_list: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 58, "div", [["class", "container"]], null, [["window", "tap"], ["window", "resize"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("window:tap" === en) {
          var pd_0 = _co.tapWindow($event) !== false;
          ad = pd_0 && ad;
        }

        if ("window:resize" === en) {
          var pd_1 = (_co.model.show = {}) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 18, "div", [["class", "zoom"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 5, "button", [["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = _co.zoom(1.2) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, 0, 2, "app-icon", [], null, null, null, _shared_components_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_IconComponent_0"], _shared_components_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 180224, null, 0, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__["IconComponent"], [], {
        icon: [0, "icon"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](11, {
        class: 0,
        content: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 5, "button", [["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = _co.zoom(1 / 1.2) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], {
        disabled: [0, "disabled"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 2, "app-icon", [], null, null, null, _shared_components_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_IconComponent_0"], _shared_components_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 180224, null, 0, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__["IconComponent"], [], {
        icon: [0, "icon"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](17, {
        class: 0,
        content: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 5, "button", [["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = _co.reset() !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, 0, 2, "app-icon", [], null, null, null, _shared_components_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_IconComponent_0"], _shared_components_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 180224, null, 0, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__["IconComponent"], [], {
        icon: [0, "icon"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](23, {
        class: 0,
        content: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 8, "div", [["class", "not-mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [[1, 2], ["room_info", 2]], null, 0, null, View_ExploreMapOverlayComponent_17)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [[1, 2], ["room_info", 2]], null, 0, null, View_ExploreMapOverlayComponent_21)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["room_details", 2]], null, 0, null, View_ExploreMapOverlayComponent_23)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [[2, 2], ["key_list", 2]], null, 0, null, View_ExploreMapOverlayComponent_25)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, null, 11, "div", [["class", "mobile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](34, 0, null, null, 8, "div", [["class", "option-list mobile-only"]], [[2, "show", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, null, 2, "div", [["class", "group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_32)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](38, 0, null, null, 4, "button", [["format", "action"], ["mat-button", ""], ["name", "black inverse no-margin"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = (_co.model.show_menu = !_co.model.show_menu) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, 0, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](42, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_36)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](45, 0, null, null, 15, "div", [["class", "filters"]], [[2, "show", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 6, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 1, "div", [["class", "heading"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Filter zones"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, null, 3, "div", [["class", "close"]], null, [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = (_co.model.show_filters = false) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, null, 1, "div", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["close"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, null, 2, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreMapOverlayComponent_37)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](56, 0, null, null, 4, "div", [["class", "footer"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, null, 3, "button", [["mat-button", ""], ["name", "inverse"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = _co.applyFilters() !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Apply filters"]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.level && _co.model.level.active;

        _ck(_v, 4, 0, currVal_0);

        var currVal_3 = _ck(_v, 11, 0, "material-icons", "add");

        _ck(_v, 10, 0, currVal_3);

        var currVal_6 = !_co.settings || !_co.settings.zoom || _co.settings.zoom <= 100;

        _ck(_v, 14, 0, currVal_6);

        var currVal_7 = _ck(_v, 17, 0, "material-icons", "remove");

        _ck(_v, 16, 0, currVal_7);

        var currVal_10 = _ck(_v, 23, 0, "material-icons", "refresh");

        _ck(_v, 22, 0, currVal_10);

        var currVal_11 = !_co.model.old;

        _ck(_v, 26, 0, currVal_11);

        var currVal_12 = _co.model.old;

        _ck(_v, 28, 0, currVal_12);

        var currVal_14 = _co.model.options;

        _ck(_v, 37, 0, currVal_14);

        var currVal_18 = _co.has_details;

        _ck(_v, 44, 0, currVal_18);

        var currVal_20 = _co.model.level.active.map.features;

        _ck(_v, 55, 0, currVal_20);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).disabled || null;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8)._animationMode === "NoopAnimations";

        _ck(_v, 6, 0, currVal_1, currVal_2);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled || null;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._animationMode === "NoopAnimations";

        _ck(_v, 12, 0, currVal_4, currVal_5);

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).disabled || null;
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20)._animationMode === "NoopAnimations";

        _ck(_v, 18, 0, currVal_8, currVal_9);

        var currVal_13 = _co.model.show_menu;

        _ck(_v, 34, 0, currVal_13);

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).disabled || null;
        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40)._animationMode === "NoopAnimations";

        _ck(_v, 38, 0, currVal_15, currVal_16);

        var currVal_17 = _co.model.show_menu ? "add" : "more_vert";

        _ck(_v, 42, 0, currVal_17);

        var currVal_19 = _co.model.show_filters;

        _ck(_v, 45, 0, currVal_19);

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).disabled || null;
        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59)._animationMode === "NoopAnimations";

        _ck(_v, 57, 0, currVal_21, currVal_22);
      });
    }

    function View_ExploreMapOverlayComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "explore-map-overlay", [], null, null, null, View_ExploreMapOverlayComponent_0, RenderType_ExploreMapOverlayComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _map_overlay_component__WEBPACK_IMPORTED_MODULE_14__["ExploreMapOverlayComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_15__["AppService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_16__["MatDialog"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ExploreMapOverlayComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("explore-map-overlay", _map_overlay_component__WEBPACK_IMPORTED_MODULE_14__["ExploreMapOverlayComponent"], View_ExploreMapOverlayComponent_Host_0, {
      change: "change"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/shell/explore/components/map-overlay/map-overlay.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/shell/explore/components/map-overlay/map-overlay.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: ExploreMapOverlayComponent */

  /***/
  function srcAppShellExploreComponentsMapOverlayMapOverlayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreMapOverlayComponent", function () {
      return ExploreMapOverlayComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/globals/base.directive */
    "./src/app/shared/globals/base.directive.ts");
    /* harmony import */


    var _overlays_booking_rules_modal_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../overlays/booking-rules-modal/booking-rules-modal.component */
    "./src/app/overlays/booking-rules-modal/booking-rules-modal.component.ts");
    /* harmony import */


    var _overlays_map_filter_modal_map_filter_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../overlays/map-filter-modal/map-filter-modal.component */
    "./src/app/overlays/map-filter-modal/map-filter-modal.component.ts");
    /* harmony import */


    var _overlays_item_pick_modal_item_pick_model_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../overlays/item-pick-modal/item-pick-model.component */
    "./src/app/overlays/item-pick-modal/item-pick-model.component.ts");

    var ExploreMapOverlayComponent =
    /*#__PURE__*/
    function (_shared_globals_base_) {
      _inherits(ExploreMapOverlayComponent, _shared_globals_base_);

      function ExploreMapOverlayComponent(service, _dialog) {
        var _this;

        _classCallCheck(this, ExploreMapOverlayComponent);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(ExploreMapOverlayComponent).call(this));
        _this.service = service;
        _this._dialog = _dialog;
        _this.model = {};
        _this.settings = {};
        return _this;
      }

      _createClass(ExploreMapOverlayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.service.Buildings.listen(function (bld) {
            if (bld) {
              _this2.model.bld = bld;
              _this2.has_details = !!bld.booking_details;
              _this2.model.system = bld.systems.desks;

              _this2.loadLevels();
            }
          });
          this.loadbuildings();
          this.model.desks = {};
          this.model.show = {}; // this.model.buildingidList=this.model.buildings.filter((i)=> i.name);

          this.model.keys;
          this.model.template = {
            room: this.room_info,
            keys: this.key_list
          }; // this.model.options = [
          //     { id: 'level', name: 'Level Select', large: true, icon: { class: 'material-icons', value: 'layers' }, number: true, action: 'pickLevel' },
          //     { id: 'keys', name: 'Keys', icon: { class: 'material-icons', value: 'vpn_key' }, template: true },
          //     { id: 'settings', name: 'Map Settings', icon: { class: 'material-icons', value: 'settings' }, action: 'updateSettings' },
          //     { id: 'filters', name: 'Map Filters', icon: { class: 'material-icons', value: 'filter_list' }, action: 'showFilters' },
          //     { id: 'room', name: 'Room Info', icon: { class: 'material-icons', value: 'info' }, offset: 'middle', template: true }
          // ];

          this.model.options = [{
            id: 'building',
            name: 'Building Select',
            icon: {
              class: 'material-icons',
              value: 'location_city'
            },
            action: 'pickBuilding'
          }, {
            id: 'level',
            name: 'Level Select',
            large: true,
            icon: {
              class: 'material-icons',
              value: 'layers'
            },
            number: true,
            action: 'pickLevel'
          }, {
            id: 'keys',
            name: 'Keys',
            icon: {
              class: 'material-icons',
              value: 'vpn_key'
            },
            template: true
          }];
          this.model.rooms = {};
          this.init();
          this.setTemplates();
        }
      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          var _this3 = this;

          if (changes.change) {
            setTimeout(function () {
              _this3.model.rooms.list = _this3.service.Rooms.list();

              _this3.processRooms();
            }, 100);
          }
        }
      }, {
        key: "setTemplates",
        value: function setTemplates() {
          var _this4 = this;

          if (!this.room_info || !this.key_list) {
            return setTimeout(function () {
              return _this4.setTemplates();
            }, 500);
          }

          this.model.template.room = this.room_info;
          this.model.template.keys = this.key_list;
          this.subscription('explore_lvl', this.service.listen('EXPLORE.level', function (value) {
            return _this4.setLevelByID(value, false);
          }));
          this.subscription('explore_search', this.service.listen('EXPLORE.search', function (value) {
            return _this4.model.search = value;
          }));
        }
      }, {
        key: "tapWindow",
        value: function tapWindow(e) {
          this.model.keys.show = this.model.keys ? false : this.model.keys;
        }
      }, {
        key: "init",
        value: function init() {
          var _this5 = this;

          if (!this.service.Settings.setup) {
            return setTimeout(function () {
              return _this5.init();
            }, 500);
          }

          this.model.map_settings = this.service.Settings.get('app.map') || {};
          this.model.keys = {};
          this.model.keys.groups = this.model.map_settings.keys || {};
          this.model.keys.types = Object.keys(this.model.keys.groups);
          this.model.zones = {};
          this.model.zones.enabled = this.service.Settings.get('app.zones.enabled');
          this.model.zones.toggle = this.service.Settings.get('app.zones.toggle');
          this.model.settings = this.service.Settings.get('app.explore') || {};
          this.subscription('bld', this.service.Buildings.listen(function (bld) {
            return bld ? _this5.setBuilding(bld, false) : null;
          }));

          if (this.model.zones.enabled && this.model.zones.toggle) {
            this.model.keys.types = [this.model.zones.toggle];
          }

          if (this.model.keys) {
            this.model.keys.list = (this.model.keys.groups.room || []).concat(this.model.keys.groups.general || []);
          } // Remove keys option if there are no keys to display


          if ((!this.model.keys.types || this.model.keys.types.length <= 0) && (!this.model.keys.list || this.model.keys.list.length <= 0)) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.model.options[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var opt = _step.value;

                if (opt.id === 'keys') {
                  this.model.options.splice(this.model.options.indexOf(opt), 1);
                  break;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }

          if (this.model.map_settings && this.model.map_settings.settings === false) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = this.model.options[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _opt = _step2.value;

                if (_opt.id === 'settings') {
                  this.model.options.splice(this.model.options.indexOf(_opt), 1);
                  break;
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }

          if (this.model.map_settings && this.model.map_settings.info === false) {
            var _iteratorNormalCompletion3 = true;
            var _didIteratorError3 = false;
            var _iteratorError3 = undefined;

            try {
              for (var _iterator3 = this.model.options[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var _opt2 = _step3.value;

                if (_opt2.id === 'room') {
                  this.model.options.splice(this.model.options.indexOf(_opt2), 1);
                  break;
                }
              }
            } catch (err) {
              _didIteratorError3 = true;
              _iteratorError3 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                  _iterator3.return();
                }
              } finally {
                if (_didIteratorError3) {
                  throw _iteratorError3;
                }
              }
            }
          }

          this.settings = {
            zoom: 0
          };
          this.model.old = this.service.Settings.get('app.explore.old_overlay');
          this.service.set('EXPLORE.settings', this.settings);
          this.subscription('rooms', this.service.Rooms.listen('room_list', function () {
            _this5.model.rooms.list = _this5.service.Rooms.list();

            _this5.processRooms();
          }));
          this.initOld();
        }
      }, {
        key: "initOld",
        value: function initOld() {
          var _this6 = this;

          this.subscription('exp_show_dsks', this.service.listen('EXPLORE.show.desks', function (state) {
            _this6.model.show.desks = state;
          }));
          this.subscription('exp_show_rms', this.service.listen('EXPLORE.show.rooms', function (state) {
            _this6.model.show.rooms = state;
          }));
          this.subscription('exp_show_tms', this.service.listen('EXPLORE.show.teams', function (state) {
            _this6.model.show.teams = state;
          }));
          this.subscription('exp_show_zns', this.service.listen('EXPLORE.show.zones', function (state) {
            _this6.model.zones.show = state;
          }));
        }
      }, {
        key: "loadLevels",
        value: function loadLevels() {
          this.model.level = {
            list: []
          };

          if (this.model.bld) {
            this.model.level.list = this.model.bld.levels;
            this.model.level.names = [];
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = this.model.level.list[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var lvl = _step4.value;
                this.model.level.names.push(lvl.name);
              }
            } catch (err) {
              _didIteratorError4 = true;
              _iteratorError4 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                  _iterator4.return();
                }
              } finally {
                if (_didIteratorError4) {
                  throw _iteratorError4;
                }
              }
            }

            this.setLevel(this.model.level.list[0]);
          }
        }
      }, {
        key: "loadbuildings",
        value: function loadbuildings() {
          this.model.buildings = {};
          this.model.buildings.list = this.service.Buildings.list() || [];
          this.model.buildings.names = this.model.buildings.list.map(function (i) {
            return "".concat(i.code, " - ").concat(i.name).concat(i.address ? ' - ' + i.address : '');
          });
          var saved_building;

          if (localStorage) {
            var id = localStorage.getItem('STAFF.map.building') || '';

            if (id) {
              saved_building = this.model.buildings.list.find(function (i) {
                return i.id === id;
              });
            }
          }

          ;

          if (saved_building) {
            this.setBuilding(saved_building);
          } else {
            this.setBuilding(this.service.Buildings.current());
          }
        }
      }, {
        key: "setBuildingByID",
        value: function setBuildingByID(id) {
          var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (id && this.model.buildings && this.model.bld) {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = this.model.buildings.list[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var bld = _step5.value;

                if (bld.id === id) {
                  this.setBuilding(bld, emit);
                  return bld;
                }
              }
            } catch (err) {
              _didIteratorError5 = true;
              _iteratorError5 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                  _iterator5.return();
                }
              } finally {
                if (_didIteratorError5) {
                  throw _iteratorError5;
                }
              }
            }
          }

          return null;
        }
      }, {
        key: "setLevelByID",
        value: function setLevelByID(id) {
          var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (id && this.model.level && this.model.level.list) {
            var _iteratorNormalCompletion6 = true;
            var _didIteratorError6 = false;
            var _iteratorError6 = undefined;

            try {
              for (var _iterator6 = this.model.level.list[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                var lvl = _step6.value;

                if (lvl.id === id) {
                  this.setLevel(lvl, emit);
                  return lvl;
                }
              }
            } catch (err) {
              _didIteratorError6 = true;
              _iteratorError6 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                  _iterator6.return();
                }
              } finally {
                if (_didIteratorError6) {
                  throw _iteratorError6;
                }
              }
            }
          }

          return null;
        }
      }, {
        key: "setBuilding",
        value: function setBuilding(bld) {
          var post = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          this.model.buildings.active = bld; //this.model.bld would hold the value of current building in picture

          this.model.bld = bld;
          this.has_details = !!bld.booking_details;
          this.loadLevels(); // this.model.system = bld.systems.desks;

          this.model.buildings.index = this.model.buildings.list.indexOf(bld);

          if (localStorage) {
            localStorage.setItem('STAFF.map.building', bld.id);
          }

          if (post) {
            this.service.Buildings.set(bld.id, false);
          }
        }
      }, {
        key: "setLevel",
        value: function setLevel(lvl) {
          var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (lvl && this.model.level && this.model.level.list && this.model.level.list.indexOf(lvl) >= 0) {
            var previous_lvl = this.model.level.active;
            this.model.level.active = lvl;
            this.model.level.index = this.model.level.list.indexOf(lvl);

            if (emit && (!previous_lvl || previous_lvl.id !== lvl.id)) {
              this.service.set('EXPLORE.level', lvl.id);
            }

            this.processRooms();
          }
        }
      }, {
        key: "pickLevel",
        value: function pickLevel() {
          var _this7 = this;

          if (this.model.level && this.model.level.list) {
            var lvl = this.model.level.active;

            var ref = this._dialog.open(_overlays_item_pick_modal_item_pick_model_component__WEBPACK_IMPORTED_MODULE_6__["ItemPickModalComponent"], {
              data: {
                name: 'Level',
                options: this.model.level.list,
                selected: [lvl]
              }
            });

            ref.afterClosed().subscribe(function () {
              _this7.setLevelByID("".concat(ref.componentInstance.selected[0].id));

              _this7.model.show_menu = false;
            });
          }
        }
      }, {
        key: "pickBuilding",
        value: function pickBuilding() {
          var _this8 = this;

          if (this.model.buildings) {
            var bld = this.model.buildings.active;

            var ref = this._dialog.open(_overlays_item_pick_modal_item_pick_model_component__WEBPACK_IMPORTED_MODULE_6__["ItemPickModalComponent"], {
              data: {
                name: 'Building',
                options: this.model.buildings.list,
                selected: [bld]
              }
            });

            ref.afterClosed().subscribe(function () {
              _this8.setBuildingByID("".concat(ref.componentInstance.selected[0].id));

              _this8.model.show_menu = false;
            });
          }
        }
      }, {
        key: "processRooms",
        value: function processRooms() {
          if (this.model.rooms && this.model.rooms.list) {
            this.model.rooms.count = 0;
            this.model.rooms.free = 0;
            var _iteratorNormalCompletion7 = true;
            var _didIteratorError7 = false;
            var _iteratorError7 = undefined;

            try {
              for (var _iterator7 = this.model.rooms.list[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                var rm = _step7.value;

                if (rm.level && rm.level.id === this.model.level.active.id && rm.bookable) {
                  this.model.rooms.count++;

                  if (!rm.in_use) {
                    this.model.rooms.free++;
                  }
                }
              }
            } catch (err) {
              _didIteratorError7 = true;
              _iteratorError7 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                  _iterator7.return();
                }
              } finally {
                if (_didIteratorError7) {
                  throw _iteratorError7;
                }
              }
            }

            this.model.rooms.percent = this.model.rooms.free / (this.model.rooms.count || 1) * 100;
          }

          if (this.model.desks) {
            this.model.desks.percent = (this.model.desks.free || 0) / (this.model.desks.count || 1) * 100;
          }
        }
      }, {
        key: "updateSettings",
        value: function updateSettings() {
          var _this9 = this;

          var ref = this._dialog.open(_overlays_map_filter_modal_map_filter_modal_component__WEBPACK_IMPORTED_MODULE_5__["MapFilterModalComponent"], {});

          ref.afterClosed().subscribe(function () {
            _this9.model.show_menu = false;
            _this9.model.show_filters = false;
          });
        }
      }, {
        key: "showFilters",
        value: function showFilters() {
          this.model.show_filters = !this.model.show_filters;
        }
      }, {
        key: "updateState",
        value: function updateState() {
          this.service.set('EXPLORE.show.desks', this.model.show.desks);
          this.service.set('EXPLORE.show.rooms', this.model.show.rooms);
          this.service.set('EXPLORE.show.teams', this.model.show.teams);

          if (this.model.zones) {
            this.service.set('EXPLORE.show.zones', this.model.zones.show);
          }

          this.service.set('EXPLORE.filters', !this.service.get('EXPLORE.filters'));
        }
      }, {
        key: "action",
        value: function action(item) {
          if (item.action && this[item.action] instanceof Function) {
            this[item.action]();
          }
        }
      }, {
        key: "toggle",
        value: function toggle(name) {
          var _this10 = this;

          var mobile = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var key = "".concat(name).concat(mobile ? '_mobile' : '');
          setTimeout(function () {
            if (_this10.model[name]) {
              _this10.model[name].show = !_this10.model[name].show;
            } else {
              _this10.model.show[key] = !_this10.model.show[key];
            }
          }, 300);
        }
      }, {
        key: "zoom",
        value: function zoom(value) {
          var zoom = Math.max(100, (this.settings.zoom || 100) * value);

          if (!this.settings) {
            this.settings = {};
          }

          this.settings.zoom = zoom;
          this.postSettings();
        }
      }, {
        key: "reset",
        value: function reset() {
          if (!this.settings) {
            this.settings = {};
          }

          this.settings.zoom = 100;
          this.settings.center = {
            x: .5,
            y: .5
          };
          this.postSettings();
        }
      }, {
        key: "applyFilters",
        value: function applyFilters() {
          var zones = this.model.level.active.map.features;
          var hide = [];
          var _iteratorNormalCompletion8 = true;
          var _didIteratorError8 = false;
          var _iteratorError8 = undefined;

          try {
            for (var _iterator8 = zones[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
              var z = _step8.value;

              if (!z.active) {
                hide.push(z.id);
              }
            }
          } catch (err) {
            _didIteratorError8 = true;
            _iteratorError8 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                _iterator8.return();
              }
            } finally {
              if (_didIteratorError8) {
                throw _iteratorError8;
              }
            }
          }

          this.service.set('EXPLORE.map.hide', hide.length === zones.length ? [] : hide);
          this.model.show_filters = false;
        }
      }, {
        key: "postSettings",
        value: function postSettings() {
          this.settings = JSON.parse(JSON.stringify(this.settings));
          this.service.set('EXPLORE.settings', this.settings);
        }
        /**
         * Open booking rules modal
         */

      }, {
        key: "viewBookingRules",
        value: function viewBookingRules() {
          this._dialog.open(_overlays_booking_rules_modal_booking_rules_modal_component__WEBPACK_IMPORTED_MODULE_4__["BookingRulesModalComponent"], {
            data: {
              building: this.model.bld,
              from_map: true
            }
          });
        }
      }]);

      return ExploreMapOverlayComponent;
    }(_shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"]);
    /***/

  },

  /***/
  "./src/app/shell/explore/components/map-overlay/map-overlay.styles.scss.shim.ngstyle.js":
  /*!**********************************************************************************************!*\
    !*** ./src/app/shell/explore/components/map-overlay/map-overlay.styles.scss.shim.ngstyle.js ***!
    \**********************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppShellExploreComponentsMapOverlayMapOverlayStylesScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  pointer-events: none; }\n.container[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    pointer-events: auto; }\n.topbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0; }\n.zoom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  bottom: 5em;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden; }\n.zoom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    border-radius: 0; }\n.zoom[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n      font-size: 1.2em; }\n.settings[_ngcontent-%COMP%] {\n  width: 15em;\n  padding: .25em .5em .25em 1em; }\n.settings[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n.settings[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n      -webkit-box-flex: 1;\n              flex: 1; }\n.room[_ngcontent-%COMP%] {\n  padding: .5em 1em;\n  width: 13em; }\n.room[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    margin: .5em; }\n.room[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    -webkit-box-flex: 1;\n            flex: 1; }\n.room[_ngcontent-%COMP%]   .low[_ngcontent-%COMP%] {\n    color: #309b40; }\n.room[_ngcontent-%COMP%]   .medium[_ngcontent-%COMP%] {\n    color: #FF9800; }\n.room[_ngcontent-%COMP%]   .high[_ngcontent-%COMP%] {\n    color: #db291d; }\n.key-list[_ngcontent-%COMP%] {\n  margin-right: auto;\n  font-size: 1em;\n  padding: .5em 0;\n  border-radius: 4px;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n@media screen and (max-height: 640px) {\n    .key-list[_ngcontent-%COMP%] {\n      margin-left: 2em; } }\n.key-list[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    color: rgba(0, 0, 0, 0.2);\n    width: 100%;\n    margin-top: .5em; }\n.key-list[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n    height: 1px;\n    width: 1px;\n    -webkit-box-flex: 1;\n            flex: 1;\n    background-color: rgba(0, 0, 0, 0.2); }\n.key-list[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n    padding: 0 .5em;\n    text-transform: capitalize;\n    font-size: .8em; }\n.key-list[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n    border-radius: 4px; }\n.key-list[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 45vh;\n    overflow: auto; }\n.key-list[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%] {\n    pointer-events: auto;\n    border: 1px solid #1937ea;\n    -webkit-transition: opacity 300ms, box-shadow 300ms;\n    transition: opacity 300ms, box-shadow 300ms;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n    background-color: #fff; }\n.key-list[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n      display: -webkit-box;\n      display: flex; }\n.key-list[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n      opacity: 1;\n      pointer-events: auto; }\n.key-list[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n        padding: 0; }\n.key-list[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%] {\n        color: #fff;\n        background-color: #1937ea; }\n.key-list[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n          color: #fff; }\n.key-list[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n      display: inherit; }\n.key-list.select[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    font-size: 1em; }\n.key-list.select[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n      background-color: #112abf;\n      color: #fff; }\n.key-list[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    overflow: hidden;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n.key-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    pointer-events: none;\n    padding: .25em 1.5em .25em .5em;\n    font-size: .8em;\n    height: 2em;\n    white-space: nowrap; }\n.key-list[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%] {\n      pointer-events: auto;\n      opacity: 1;\n      font-size: 1em; }\n.key-list[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n        padding: 0;\n        color: #1937ea; }\n.key-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n      white-space: nowrap;\n      -webkit-box-flex: 1;\n              flex: 1; }\n.key-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n      -webkit-box-flex: 1;\n              flex: 1;\n      text-transform: capitalize; }\n.key-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat;\n      max-width: 1em;\n      max-height: 1em;\n      height: 1em;\n      width: 1em; }\n.key-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      height: 1em;\n      width: 1em;\n      margin: .5em;\n      min-width: 1em;\n      border-radius: 1.1em;\n      background-color: #fff;\n      margin-right: 1em;\n      border: 1px solid #f0f0f0; }\n.key-list[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .circle.icon[_ngcontent-%COMP%] {\n        height: 1.5em;\n        width: 1.5em;\n        margin: .25em;\n        margin-right: .75em; }\n.header-icon[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.2em;\n  width: 1.2em;\n  font-size: 2em;\n  color: #FF9800;\n  cursor: pointer;\n  margin-right: auto; }\n@media screen and (max-height: 720px) {\n    .header-icon[_ngcontent-%COMP%] {\n      margin-left: 1em; } }\n.header-icon.fixed[_ngcontent-%COMP%] {\n    position: absolute;\n    bottom: 2.5em;\n    right: .25em; }\n.simple[_ngcontent-%COMP%] {\n  position: absolute;\n  top: .5em;\n  right: .5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding: .5em; }\n.simple[_ngcontent-%COMP%]   btn[_ngcontent-%COMP%] {\n    font-size: 1.6em; }\n.number[_ngcontent-%COMP%] {\n  position: absolute;\n  top: .1em;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  font-size: .5em;\n  height: 2em;\n  width: 2em;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\nbtn[_ngcontent-%COMP%]   i.large[_ngcontent-%COMP%] {\n  font-size: 1.5em; }\n\n.option-list[_ngcontent-%COMP%] {\n  position: absolute;\n  left: .5em;\n  top: 1em;\n  width: auto !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 104;\n  font-size: 1.2em; }\n.option-list[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    height: 1.5em;\n    width: 1.5em; }\n.option-list[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   btn[_ngcontent-%COMP%] {\n      position: absolute;\n      top: -2px;\n      left: -2px;\n      -webkit-transition: opacity 400ms, -webkit-transform 300ms;\n      transition: opacity 400ms, -webkit-transform 300ms;\n      transition: transform 300ms, opacity 400ms;\n      transition: transform 300ms, opacity 400ms, -webkit-transform 300ms;\n      -webkit-transform: translateY(0em);\n              transform: translateY(0em);\n      opacity: 0; }\n.option-list[_ngcontent-%COMP%]   btn[format=\"action\"][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    -webkit-transition: -webkit-transform 300ms;\n    transition: -webkit-transform 300ms;\n    transition: transform 300ms;\n    transition: transform 300ms, -webkit-transform 300ms;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n.option-list.show[_ngcontent-%COMP%]   btn[format=\"action\"][_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n.option-list.show[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   btn[_ngcontent-%COMP%] {\n    opacity: 1; }\n.mobile-menu-info[_ngcontent-%COMP%] {\n  background: url('info.svg');\n  background-repeat: no-repeat;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 72%;\n  align-items: center;\n  text-align: center;\n  background-position: center; }\n\n.options[_ngcontent-%COMP%] {\n  position: absolute;\n  top: .5em;\n  right: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 101;\n  width: 3em !important; }\n.options.info[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-flow: row;\n    width: 4em !important;\n    height: 4em; }\n.options[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 1.25em;\n    margin: .2em; }\n.options[_ngcontent-%COMP%]   .btn.info[_ngcontent-%COMP%] {\n      background-color: white;\n      height: 70%;\n      width: 70%;\n      display: -webkit-box;\n      display: flex;\n      border-radius: 50%;\n      -webkit-box-pack: center;\n              justify-content: center;\n      -webkit-box-align: center;\n              align-items: center; }\n.options[_ngcontent-%COMP%]   .btn.info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        width: 65%;\n        height: 65%; }\n.options.push[_ngcontent-%COMP%] {\n    top: 3.5em; }\n.options[_ngcontent-%COMP%]   .option[_ngcontent-%COMP%] {\n    position: relative;\n    margin: .5em;\n    overflow: hidden;\n    background-color: #fff;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n    width: 2.5em;\n    height: 2.5em;\n    border-radius: 1.3em;\n    -webkit-transition: width 300ms, height 300ms, border-radius 300ms;\n    transition: width 300ms, height 300ms, border-radius 300ms; }\n.options[_ngcontent-%COMP%]   .option.show[_ngcontent-%COMP%] {\n      width: 13em;\n      height: 13em;\n      border-radius: 4px; }\n.options[_ngcontent-%COMP%]   .option.half.show[_ngcontent-%COMP%] {\n      height: 7.5em; }\n.options[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 13em;\n    height: 13em; }\n.options[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n      width: 100%; }\n.options[_ngcontent-%COMP%]   .content.info[_ngcontent-%COMP%] {\n      background: url('info.svg');\n      background-repeat: no-repeat;\n      background-position: center;\n      width: 100%;\n      height: 60%; }\n.options[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    padding: .65em 1em;\n    border-bottom: 1px solid #f0f0f0; }\n.options[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    height: 1.66666em;\n    width: 1.66666em !important;\n    font-size: 1.5em;\n    cursor: pointer; }\n.options[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]:hover {\n      opacity: .54; }\n.options[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    padding: .25em .25em .25em 1em; }\n.options[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n.options[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n      -webkit-box-flex: 1;\n              flex: 1; }\n.options[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n    padding: .25em .75em; }\n.options[_ngcontent-%COMP%]   .high[_ngcontent-%COMP%] {\n    color: #db291d; }\n.options[_ngcontent-%COMP%]   .medium[_ngcontent-%COMP%] {\n    color: #FF9800; }\n.options[_ngcontent-%COMP%]   .low[_ngcontent-%COMP%] {\n    color: #309b40; }\n.level[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: .5em;\n  z-index: 100;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-flow: column;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  max-width: calc(100% - 3.5em);\n  pointer-events: none; }\n.level[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    pointer-events: auto; }\n.level.push[_ngcontent-%COMP%] {\n    top: 3em; }\n.show-state[_ngcontent-%COMP%] {\n  width: 8em;\n  height: 2em;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  margin: 0 .5em;\n  margin-top: -6px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 .5em;\n  font-size: 1.2em; }\n.show-state[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    -webkit-box-flex: 1;\n            flex: 1; }\n.show-state[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%] {\n    margin-left: .5em;\n    font-size: .8em; }\n.keys-header[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%;\n  height: 100%; }\n.keys-header[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n    -webkit-box-flex: 1;\n            flex: 1;\n    text-align: left;\n    font-weight: 300;\n    padding: .5em; }\n.keys-list[_ngcontent-%COMP%] {\n  margin-top: -6px; }\n.dropdown[_ngcontent-%COMP%] {\n  position: relative;\n  width: 10em;\n  height: 2em;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  margin: 0 .5em;\n  font-size: 1.2em; }\n.dropdown[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n    display: none;\n    -webkit-box-align: center;\n            align-items: center;\n    color: #aaa;\n    width: 100%;\n    margin-top: .5em; }\n.dropdown[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n    height: 1px;\n    width: 1px;\n    -webkit-box-flex: 1;\n            flex: 1;\n    background-color: #aaa; }\n.dropdown[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n    padding: 0 .5em;\n    text-transform: capitalize;\n    font-size: .8em; }\n.dropdown[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%] {\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n    border-radius: 4px; }\n.dropdown[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n    width: 100%;\n    max-height: 45vh;\n    overflow: auto;\n    display: none; }\n.dropdown[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%] {\n    pointer-events: auto;\n    border: 1px solid #1937ea;\n    -webkit-transition: opacity 300ms, box-shadow 300ms;\n    transition: opacity 300ms, box-shadow 300ms;\n    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n    background-color: #fff; }\n.dropdown[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .divider[_ngcontent-%COMP%] {\n      display: -webkit-box;\n      display: flex; }\n.dropdown[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n      opacity: 1;\n      pointer-events: auto; }\n.dropdown[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n        padding: 0; }\n.dropdown[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%] {\n        color: #fff;\n        background-color: #1937ea; }\n.dropdown[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n          color: #fff; }\n.dropdown[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n      display: inherit; }\n.dropdown.select[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    font-size: 1em; }\n.dropdown.select[_ngcontent-%COMP%]   .list.show[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]:hover {\n      background-color: #112abf;\n      color: #fff; }\n.dropdown[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    overflow: hidden;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n.dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    opacity: 0;\n    pointer-events: none;\n    padding: 0.25em 0.5em;\n    font-size: .8em;\n    min-width: 10em;\n    height: 2em;\n    white-space: nowrap; }\n.dropdown[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%] {\n      pointer-events: auto;\n      opacity: 1;\n      font-size: 1em; }\n.dropdown[_ngcontent-%COMP%]   .item.active[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n        padding: 0;\n        color: #1937ea; }\n.dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n      white-space: nowrap;\n      -webkit-box-flex: 1;\n              flex: 1; }\n.dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n      -webkit-box-flex: 1;\n              flex: 1;\n      text-transform: capitalize; }\n.dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat;\n      width: 1em;\n      height: 1em; }\n.dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .circle[_ngcontent-%COMP%] {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      height: 1em;\n      width: 2em;\n      margin: .5em;\n      min-width: 1e m;\n      border-radius: 0.4em;\n      background-color: #fff;\n      margin-right: 1em;\n      border: 1px solid #f0f0f0; }\n.dropdown[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]   .circle.icon[_ngcontent-%COMP%] {\n        height: 1.5em;\n        width: 1.5em;\n        margin: .25em;\n        margin-right: .75em; }\n.filters[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1em;\n  left: 50%;\n  min-height: 10em;\n  width: 20em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: #fff;\n  border-radius: 6px;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  -webkit-transform: translate(-50%, -150%);\n          transform: translate(-50%, -150%);\n  opacity: 0;\n  padding: .5em;\n  -webkit-transition: opacity 200ms, -webkit-transform 200ms;\n  transition: opacity 200ms, -webkit-transform 200ms;\n  transition: transform 200ms, opacity 200ms;\n  transition: transform 200ms, opacity 200ms, -webkit-transform 200ms;\n  z-index: 200; }\n.filters.show[_ngcontent-%COMP%] {\n    opacity: 1;\n    -webkit-transform: translate(-50%, 0%);\n            transform: translate(-50%, 0%); }\n.filters[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    position: relative;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 100%;\n    display: flex;\n    padding: .5em;\n    font-weight: 500;\n    font-size: 1.1em; }\n.filters[_ngcontent-%COMP%]   .body[_ngcontent-%COMP%] {\n    -webkit-box-flex: 1;\n            flex: 1;\n    width: 100%; }\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: .5em;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n.old-overlay[_ngcontent-%COMP%]   dropdown[_ngcontent-%COMP%] {\n  width: 100%; }\n.old-overlay[_ngcontent-%COMP%]   custom-dropdown[_ngcontent-%COMP%] {\n  width: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc2hhcmVkLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC9leHBsb3JlL2NvbXBvbmVudHMvbWFwLW92ZXJsYXkvbWFwLW92ZXJsYXkuc3R5bGVzLnNjc3MiLCIvYnVpbGRzL2FjYS1lbmdpbmUvbWNraW5zZXkvbWNraW5zZXktc3RhZmYtYXBwL3NyYy9hcHAvc2hlbGwvZXhwbG9yZS9jb21wb25lbnRzL21hcC1vdmVybGF5L21hcC1vdmVybGF5LnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztpQ0NFaUM7QUQ2Q2pDOzt1QkMxQ3VCO0FEdUR2Qjs7c0JDcERzQjtBQ1B0QjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBO0FBUHhCO0lBU1Esb0JBQW9CLEVBQUE7QUFJNUI7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU8sRUFBQTtBQUdYO0VBQ0ksa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLCtHQUE2RjtFQUM3Riw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7QUFYcEI7SUFhUSxnQkFBZ0IsRUFBQTtBQWJ4QjtNQWdCWSxnQkFBZ0IsRUFBQTtBQUs1QjtFQUNJLFdBQVc7RUFDWCw2QkFBNkIsRUFBQTtBQUZqQztJQUlRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtBQUwzQjtNQU9ZLG1CQUFPO2NBQVAsT0FBTyxFQUFBO0FBS25CO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVcsRUFBQTtBQUZmO0lBSVEsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixZQUFZLEVBQUE7QUFOcEI7SUFTUSxtQkFBTztZQUFQLE9BQU8sRUFBQTtBQVRmO0lBWVEsY0Y3RFMsRUFBQTtBRWlEakI7SUFlUSxjRjdEUyxFQUFBO0FFOENqQjtJQWtCUSxjRmpFTyxFQUFBO0FFcUVmO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QiwrR0FBNkYsRUFBQTtBQUU3RjtJQVJKO01BU1EsZ0JBQWdCLEVBQUEsRUFpSXZCO0FBMUlEO0lBYVEsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix5QkFBZ0I7SUFDaEIsV0FBVztJQUNYLGdCQUFnQixFQUFBO0FBakJ4QjtJQW9CUSxXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFPO1lBQVAsT0FBTztJQUNQLG9DQUEyQixFQUFBO0FBdkJuQztJQTBCUSxlQUFlO0lBQ2YsMEJBQTBCO0lBQzFCLGVBQWUsRUFBQTtBQTVCdkI7SUErQlEsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLG9DQUE2QjtJQUM3QixrQkFBa0IsRUFBQTtBQXBDMUI7SUF1Q1EsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixjQUFjLEVBQUE7QUF6Q3RCO0lBNENRLG9CQUFvQjtJQUNwQix5QkY5RmU7SUUrRmYsbURBQTJDO0lBQTNDLDJDQUEyQztJQUMzQywrR0FBNkY7SUFDN0Ysc0JBQXNCLEVBQUE7QUFoRDlCO01Ba0RZLG9CQUFhO01BQWIsYUFBYSxFQUFBO0FBbER6QjtNQXFEWSxVQUFVO01BQ1Ysb0JBQW9CLEVBQUE7QUF0RGhDO1FBd0RnQixVQUFVLEVBQUE7QUF4RDFCO1FBMkRnQixXQUFXO1FBQ1gseUJGN0dPLEVBQUE7QUVpRHZCO1VBOERvQixXQUFXLEVBQUE7QUE5RC9CO01BbUVZLGdCQUFnQixFQUFBO0FBbkU1QjtJQXdFWSxjQUFjLEVBQUE7QUF4RTFCO01BMEVnQix5QkFBNEM7TUFDNUMsV0FBVyxFQUFBO0FBM0UzQjtJQWdGUSxnQkFBZ0I7SUFDaEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0FBbEYzQjtJQXFGUSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQiwrQkFBK0I7SUFDL0IsZUFBZTtJQUNmLFdBQVc7SUFDWCxtQkFBbUIsRUFBQTtBQTNGM0I7TUE2Rlksb0JBQW9CO01BQ3BCLFVBQVU7TUFDVixjQUFjLEVBQUE7QUEvRjFCO1FBaUdnQixVQUFVO1FBQ1YsY0ZuSk8sRUFBQTtBRWlEdkI7TUFzR1ksbUJBQW1CO01BQ25CLG1CQUFPO2NBQVAsT0FBTyxFQUFBO0FBdkduQjtNQTBHWSxtQkFBTztjQUFQLE9BQU87TUFDUCwwQkFBMEIsRUFBQTtBQTNHdEM7TUE4R1ksd0JBQXdCO01BQ3hCLDJCQUEyQjtNQUMzQiw0QkFBNEI7TUFDNUIsY0FBYztNQUNkLGVBQWU7TUFDZixXQUFXO01BQ1gsVUFBVSxFQUFBO0FBcEh0QjtNQXVIWSxvQkFBYTtNQUFiLGFBQWE7TUFDYix5QkFBbUI7Y0FBbkIsbUJBQW1CO01BQ25CLHdCQUF1QjtjQUF2Qix1QkFBdUI7TUFDdkIsV0FBVztNQUNYLFVBQVU7TUFDVixZQUFZO01BQ1osY0FBYztNQUNkLG9CQUFvQjtNQUNwQixzQkFBc0I7TUFDdEIsaUJBQWlCO01BQ2pCLHlCQUF5QixFQUFBO0FBaklyQztRQW1JZ0IsYUFBYTtRQUNiLFlBQVk7UUFDWixhQUFhO1FBQ2IsbUJBQW1CLEVBQUE7QUFNbkM7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVk7RUFDWixjQUFjO0VBQ2QsY0Z2TmE7RUV3TmIsZUFBZTtFQUNmLGtCQUFrQixFQUFBO0FBRWxCO0lBWEo7TUFZUSxnQkFBZ0IsRUFBQSxFQVF2QjtBQXBCRDtJQWdCUSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVksRUFBQTtBQUlwQjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHNCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIsYUFBYSxFQUFBO0FBUGpCO0lBU1EsZ0JBQWdCLEVBQUE7QUFJeEI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFNBQVM7RUFDVCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixXQUFXO0VBQ1gsVUFBVTtFQUNWLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUIsRUFBQTtBQUczQjtFQUNJLGdCQUFnQixFQUFBO0FBR3BCOzttQkQxQ21CO0FDOENuQjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsUUFBUTtFQUNSLHNCQUFzQjtFQUN0QixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtBQVRwQjtJQVdRLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsYUFBYTtJQUNiLFlBQVksRUFBQTtBQWhCcEI7TUFrQlksa0JBQWtCO01BQ2xCLFNBQVM7TUFDVCxVQUFVO01BQ1YsMERBQTBDO01BQTFDLGtEQUEwQztNQUExQywwQ0FBMEM7TUFBMUMsbUVBQTBDO01BQzFDLGtDQUEwQjtjQUExQiwwQkFBMEI7TUFDMUIsVUFBVSxFQUFBO0FBdkJ0QjtJQTRCWSwyQ0FBMkI7SUFBM0IsbUNBQTJCO0lBQTNCLDJCQUEyQjtJQUEzQixvREFBMkI7SUFDM0IsK0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0FBN0JuQztJQW1DZ0IsZ0NBQXdCO1lBQXhCLHdCQUF3QixFQUFBO0FBbkN4QztJQXVDWSxVQUFVLEVBQUE7QUFLdEI7RUFDSSwyQkFBcUM7RUFDckMsNEJBQTRCO0VBQzVCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsMkJBQTJCLEVBQUE7QUFHL0I7O21CRHhEbUI7QUM0RG5CO0VBQ0ksa0JBQWtCO0VBSWxCLFNBQVM7RUFDVCxRQUFRO0VBQ1Isb0JBQWE7RUFBYixhQUFhO0VBQ2Isc0JBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCLEVBQUE7QUFYekI7SUFhUSxvQkFBYTtJQUFiLGFBQWE7SUFFYiw4QkFBYztJQUFkLDZCQUFjO1lBQWQsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixXQUFXLEVBQUE7QUFqQm5CO0lBb0JRLGlCQUFpQjtJQUNqQixZQUFZLEVBQUE7QUFyQnBCO01BdUJZLHVCQUF1QjtNQUN2QixXQUFXO01BQ1gsVUFBVTtNQUNWLG9CQUFhO01BQWIsYUFBYTtNQUNiLGtCQUFrQjtNQUNsQix3QkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLHlCQUFtQjtjQUFuQixtQkFBbUIsRUFBQTtBQTdCL0I7UUErQmdCLFVBQVU7UUFDVixXQUFVLEVBQUE7QUFoQzFCO0lBcUNRLFVBQVUsRUFBQTtBQXJDbEI7SUF3Q1Esa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLCtHQUE2RjtJQUM3RixZQUFZO0lBQ1osYUFBYTtJQUNiLG9CQUFvQjtJQUNwQixrRUFBMEQ7SUFBMUQsMERBQTBELEVBQUE7QUFoRGxFO01Ba0RZLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCLEVBQUE7QUFwRDlCO01Bd0RnQixhQUFhLEVBQUE7QUF4RDdCO0lBNkRRLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVksRUFBQTtBQXBFcEI7TUFzRVksV0FBVyxFQUFBO0FBdEV2QjtNQXlFWSwyQkFBcUM7TUFDckMsNEJBQTRCO01BQzVCLDJCQUEyQjtNQUMzQixXQUFXO01BQ1gsV0FBVyxFQUFBO0FBN0V2QjtJQWlGUSxrQkFBa0I7SUFDbEIsZ0NBQWdDLEVBQUE7QUFsRnhDO0lBcUZRLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sUUFBUTtJQUNSLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsMkJBQTJCO0lBQzNCLGdCQUFnQjtJQUNoQixlQUFlLEVBQUE7QUE5RnZCO01BZ0dZLFlBQVksRUFBQTtBQWhHeEI7SUFvR1EsOEJBQThCLEVBQUE7QUFwR3RDO0lBdUdRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUIsRUFBQTtBQXhHM0I7TUEwR1ksbUJBQU87Y0FBUCxPQUFPLEVBQUE7QUExR25CO0lBOEdRLG9CQUFvQixFQUFBO0FBOUc1QjtJQWlIUSxjRnhiTyxFQUFBO0FFdVVmO0lBb0hRLGNGMWJTLEVBQUE7QUVzVWpCO0lBdUhRLGNGaGNTLEVBQUE7QUVzY2pCO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLFlBQVk7RUFDWiw0QkFBaUI7RUFBakIsNkJBQWlCO1VBQWpCLGlCQUFpQjtFQUNqQixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZiw2QkFBNkI7RUFDN0Isb0JBQW9CLEVBQUE7QUFYeEI7SUFhUSxvQkFBb0IsRUFBQTtBQWI1QjtJQWdCUSxRQUFRLEVBQUE7QUFJaEI7RUFDSSxVQUFVO0VBQ1YsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsK0dBQTZGO0VBQzdGLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFYcEI7SUFhUSxtQkFBTztZQUFQLE9BQU8sRUFBQTtBQWJmO0lBZ0JRLGlCQUFpQjtJQUNqQixlQUFlLEVBQUE7QUFJdkI7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLFlBQVksRUFBQTtBQUxoQjtJQU9RLG1CQUFPO1lBQVAsT0FBTztJQUNQLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYSxFQUFBO0FBSXJCO0VBQ0ksZ0JBQWdCLEVBQUE7QUFJcEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLCtHQUE2RjtFQUM3RixjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7QUFScEI7SUFVUSxhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQixFQUFBO0FBZHhCO0lBaUJRLFdBQVc7SUFDWCxVQUFVO0lBQ1YsbUJBQU87WUFBUCxPQUFPO0lBQ1Asc0JBQXNCLEVBQUE7QUFwQjlCO0lBdUJRLGVBQWU7SUFDZiwwQkFBMEI7SUFDMUIsZUFBZSxFQUFBO0FBekJ2QjtJQTRCUSxvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1Asb0NBQTZCO0lBQzdCLGtCQUFrQixFQUFBO0FBakMxQjtJQW9DUSxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhLEVBQUE7QUF2Q3JCO0lBMENRLG9CQUFvQjtJQUNwQix5QkZ2aEJlO0lFd2hCZixtREFBMkM7SUFBM0MsMkNBQTJDO0lBQzNDLCtHQUE2RjtJQUM3RixzQkFBc0IsRUFBQTtBQTlDOUI7TUFnRFksb0JBQWE7TUFBYixhQUFhLEVBQUE7QUFoRHpCO01BbURZLFVBQVU7TUFDVixvQkFBb0IsRUFBQTtBQXBEaEM7UUFzRGdCLFVBQVUsRUFBQTtBQXREMUI7UUF5RGdCLFdBQVc7UUFDWCx5QkZ0aUJPLEVBQUE7QUU0ZXZCO1VBNERvQixXQUFXLEVBQUE7QUE1RC9CO01BaUVZLGdCQUFnQixFQUFBO0FBakU1QjtJQXNFWSxjQUFjLEVBQUE7QUF0RTFCO01Bd0VnQix5QkFBNEM7TUFDNUMsV0FBVyxFQUFBO0FBekUzQjtJQThFUSxnQkFBZ0I7SUFDaEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQixFQUFBO0FBaEYzQjtJQW1GUSxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIscUJBQWtCO0lBQ2xCLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztJQUNYLG1CQUFtQixFQUFBO0FBM0YzQjtNQTZGWSxvQkFBb0I7TUFDcEIsVUFBVTtNQUNWLGNBQWMsRUFBQTtBQS9GMUI7UUFpR2dCLFVBQVU7UUFDVixjRjlrQk8sRUFBQTtBRTRldkI7TUFzR1ksbUJBQW1CO01BQ25CLG1CQUFPO2NBQVAsT0FBTyxFQUFBO0FBdkduQjtNQTBHWSxtQkFBTztjQUFQLE9BQU87TUFDUCwwQkFBMEIsRUFBQTtBQTNHdEM7TUE4R1ksd0JBQXdCO01BQ3hCLDJCQUEyQjtNQUMzQiw0QkFBNEI7TUFDNUIsVUFBVTtNQUNWLFdBQVcsRUFBQTtBQWxIdkI7TUFxSFksb0JBQWE7TUFBYixhQUFhO01BQ2IseUJBQW1CO2NBQW5CLG1CQUFtQjtNQUNuQix3QkFBdUI7Y0FBdkIsdUJBQXVCO01BQ3ZCLFdBQVc7TUFDWCxVQUFVO01BQ1YsWUFBWTtNQUNaLGVBQWU7TUFDZixvQkFBb0I7TUFDcEIsc0JBQXNCO01BQ3RCLGlCQUFpQjtNQUNqQix5QkFBeUIsRUFBQTtBQS9IckM7UUFpSWdCLGFBQWE7UUFDYixZQUFZO1FBQ1osYUFBYTtRQUNiLG1CQUFtQixFQUFBO0FBTW5DO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsK0dBQTZGO0VBQzdGLHlDQUFpQztVQUFqQyxpQ0FBaUM7RUFDakMsVUFBVTtFQUNWLGFBQWE7RUFDYiwwREFBMEM7RUFBMUMsa0RBQTBDO0VBQTFDLDBDQUEwQztFQUExQyxtRUFBMEM7RUFDMUMsWUFBWSxFQUFBO0FBaEJoQjtJQWtCUSxVQUFVO0lBQ1Ysc0NBQThCO1lBQTlCLDhCQUE4QixFQUFBO0FBbkJ0QztJQXNCUSxrQkFBa0I7SUFDbEIsb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixnQkFBZ0IsRUFBQTtBQTlCeEI7SUFpQ1EsbUJBQU87WUFBUCxPQUFPO0lBQ1AsV0FBVyxFQUFBO0FBSW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsbUNBQTJCO1VBQTNCLDJCQUEyQixFQUFBO0FBRy9CO0VBRVEsV0FBVyxFQUFBO0FBRm5CO0VBS1EsV0FBVyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvZXhwbG9yZS9jb21wb25lbnRzL21hcC1vdmVybGF5L21hcC1vdmVybGF5LnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcbiRwcmltZS1ibHVlLWxpZ2h0OiMwMEFERUY7XG4kcHJpbWUtYmx1ZS1kYXJrOiMwMDY0QkQ7XG4kcHJpbWUtZ3JlZW4tbGlnaHQ6I0EyQUQwMDtcbiRwcmltZS1ncmV5LWRpc2FibGU6IzdDOTRBQTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogIzQyODVGNDtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kbWFpbi1mb250OiAkZm9udC1zdGFjaztcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gIC5jb250YWluZXIgPiAqIHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bzsgfVxuXG4udG9wYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7IH1cblxuLnpvb20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cbiAgLnpvb20gYnV0dG9uIHtcbiAgICBib3JkZXItcmFkaXVzOiAwOyB9XG4gICAgLnpvb20gYnV0dG9uIGFwcC1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07IH1cblxuLnNldHRpbmdzIHtcbiAgd2lkdGg6IDE1ZW07XG4gIHBhZGRpbmc6IC4yNWVtIC41ZW0gLjI1ZW0gMWVtOyB9XG4gIC5zZXR0aW5ncyAuaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgLnNldHRpbmdzIC5pdGVtIC50ZXh0IHtcbiAgICAgIGZsZXg6IDE7IH1cblxuLnJvb20ge1xuICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgd2lkdGg6IDEzZW07IH1cbiAgLnJvb20gLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IC41ZW07IH1cbiAgLnJvb20gLnRleHQge1xuICAgIGZsZXg6IDE7IH1cbiAgLnJvb20gLmxvdyB7XG4gICAgY29sb3I6ICMzMDliNDA7IH1cbiAgLnJvb20gLm1lZGl1bSB7XG4gICAgY29sb3I6ICNGRjk4MDA7IH1cbiAgLnJvb20gLmhpZ2gge1xuICAgIGNvbG9yOiAjZGIyOTFkOyB9XG5cbi5rZXktbGlzdCB7XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZm9udC1zaXplOiAxZW07XG4gIHBhZGRpbmc6IC41ZW0gMDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY0MHB4KSB7XG4gICAgLmtleS1saXN0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiAyZW07IH0gfVxuICAua2V5LWxpc3QgLmRpdmlkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IC41ZW07IH1cbiAgLmtleS1saXN0IC5iYXIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7IH1cbiAgLmtleS1saXN0IC50eXBlIHtcbiAgICBwYWRkaW5nOiAwIC41ZW07XG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgZm9udC1zaXplOiAuOGVtOyB9XG4gIC5rZXktbGlzdCAubGlzdCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7IH1cbiAgLmtleS1saXN0IC5ncm91cCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNDV2aDtcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxuICAua2V5LWxpc3QgLmxpc3Quc2hvdyB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzE5MzdlYTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zLCBib3gtc2hhZG93IDMwMG1zO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XG4gICAgLmtleS1saXN0IC5saXN0LnNob3cgLmRpdmlkZXIge1xuICAgICAgZGlzcGxheTogZmxleDsgfVxuICAgIC5rZXktbGlzdCAubGlzdC5zaG93IC5pdGVtIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bzsgfVxuICAgICAgLmtleS1saXN0IC5saXN0LnNob3cgLml0ZW0gLmljb24ge1xuICAgICAgICBwYWRkaW5nOiAwOyB9XG4gICAgICAua2V5LWxpc3QgLmxpc3Quc2hvdyAuaXRlbS5hY3RpdmUge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MzdlYTsgfVxuICAgICAgICAua2V5LWxpc3QgLmxpc3Quc2hvdyAuaXRlbS5hY3RpdmUgLmljb24ge1xuICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgLmtleS1saXN0IC5saXN0LnNob3cgLmdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGluaGVyaXQ7IH1cbiAgLmtleS1saXN0LnNlbGVjdCAubGlzdC5zaG93IC5pdGVtIHtcbiAgICBmb250LXNpemU6IDFlbTsgfVxuICAgIC5rZXktbGlzdC5zZWxlY3QgLmxpc3Quc2hvdyAuaXRlbTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTEyYWJmO1xuICAgICAgY29sb3I6ICNmZmY7IH1cbiAgLmtleS1saXN0IC5pY29uIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAua2V5LWxpc3QgLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwYWRkaW5nOiAuMjVlbSAxLjVlbSAuMjVlbSAuNWVtO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLmtleS1saXN0IC5pdGVtLmFjdGl2ZSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBmb250LXNpemU6IDFlbTsgfVxuICAgICAgLmtleS1saXN0IC5pdGVtLmFjdGl2ZSAuaWNvbiB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGNvbG9yOiAjMTkzN2VhOyB9XG4gICAgLmtleS1saXN0IC5pdGVtIC5uYW1lIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBmbGV4OiAxOyB9XG4gICAgLmtleS1saXN0IC5pdGVtIC52YWx1ZSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cbiAgICAua2V5LWxpc3QgLml0ZW0gLmltYWdlIHtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBtYXgtd2lkdGg6IDFlbTtcbiAgICAgIG1heC1oZWlnaHQ6IDFlbTtcbiAgICAgIGhlaWdodDogMWVtO1xuICAgICAgd2lkdGg6IDFlbTsgfVxuICAgIC5rZXktbGlzdCAuaXRlbSAuY2lyY2xlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgIHdpZHRoOiAxZW07XG4gICAgICBtYXJnaW46IC41ZW07XG4gICAgICBtaW4td2lkdGg6IDFlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuMWVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDsgfVxuICAgICAgLmtleS1saXN0IC5pdGVtIC5jaXJjbGUuaWNvbiB7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgIHdpZHRoOiAxLjVlbTtcbiAgICAgICAgbWFyZ2luOiAuMjVlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNzVlbTsgfVxuXG4uaGVhZGVyLWljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxLjJlbTtcbiAgd2lkdGg6IDEuMmVtO1xuICBmb250LXNpemU6IDJlbTtcbiAgY29sb3I6ICNGRjk4MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvOyB9XG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3MjBweCkge1xuICAgIC5oZWFkZXItaWNvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogMWVtOyB9IH1cbiAgLmhlYWRlci1pY29uLmZpeGVkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAyLjVlbTtcbiAgICByaWdodDogLjI1ZW07IH1cblxuLnNpbXBsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAuNWVtO1xuICByaWdodDogLjVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBwYWRkaW5nOiAuNWVtOyB9XG4gIC5zaW1wbGUgYnRuIHtcbiAgICBmb250LXNpemU6IDEuNmVtOyB9XG5cbi5udW1iZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLjFlbTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGZvbnQtc2l6ZTogLjVlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIHdpZHRoOiAyZW07XG4gIGNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG5idG4gaS5sYXJnZSB7XG4gIGZvbnQtc2l6ZTogMS41ZW07IH1cblxuLyo9PT09PT09PT09PT09PT09PSpcXFxufHwgIE1vYmlsZSBTdHlsZXMgIHx8XG5cXCo9PT09PT09PT09PT09PT09Ki9cbi5vcHRpb24tbGlzdCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogLjVlbTtcbiAgdG9wOiAxZW07XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHotaW5kZXg6IDEwNDtcbiAgZm9udC1zaXplOiAxLjJlbTsgfVxuICAub3B0aW9uLWxpc3QgLmdyb3VwIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtOyB9XG4gICAgLm9wdGlvbi1saXN0IC5ncm91cCBidG4ge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMnB4O1xuICAgICAgbGVmdDogLTJweDtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcywgb3BhY2l0eSA0MDBtcztcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwZW0pO1xuICAgICAgb3BhY2l0eTogMDsgfVxuICAub3B0aW9uLWxpc3QgYnRuW2Zvcm1hdD1cImFjdGlvblwiXSBpIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXM7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgLm9wdGlvbi1saXN0LnNob3cgYnRuW2Zvcm1hdD1cImFjdGlvblwiXSBpIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7IH1cbiAgLm9wdGlvbi1saXN0LnNob3cgLmdyb3VwIGJ0biB7XG4gICAgb3BhY2l0eTogMTsgfVxuXG4ubW9iaWxlLW1lbnUtaW5mbyB7XG4gIGJhY2tncm91bmQ6IHVybChhc3NldHMvaWNvbi9pbmZvLnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA3MiU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyOyB9XG5cbi8qPT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgT2xkIFN0eWxlcyAgICB8fFxuXFwqPT09PT09PT09PT09PT09PSovXG4ub3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAuNWVtO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxMDE7XG4gIHdpZHRoOiAzZW0gIWltcG9ydGFudDsgfVxuICAub3B0aW9ucy5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogcm93O1xuICAgIHdpZHRoOiA0ZW0gIWltcG9ydGFudDtcbiAgICBoZWlnaHQ6IDRlbTsgfVxuICAub3B0aW9ucyAuYnRuIHtcbiAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICBtYXJnaW46IC4yZW07IH1cbiAgICAub3B0aW9ucyAuYnRuLmluZm8ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgIHdpZHRoOiA3MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgICAub3B0aW9ucyAuYnRuLmluZm8gaW1nIHtcbiAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgaGVpZ2h0OiA2NSU7IH1cbiAgLm9wdGlvbnMucHVzaCB7XG4gICAgdG9wOiAzLjVlbTsgfVxuICAub3B0aW9ucyAub3B0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAuNWVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgd2lkdGg6IDIuNWVtO1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMS4zZW07XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMzAwbXMsIGhlaWdodCAzMDBtcywgYm9yZGVyLXJhZGl1cyAzMDBtczsgfVxuICAgIC5vcHRpb25zIC5vcHRpb24uc2hvdyB7XG4gICAgICB3aWR0aDogMTNlbTtcbiAgICAgIGhlaWdodDogMTNlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDsgfVxuICAgIC5vcHRpb25zIC5vcHRpb24uaGFsZi5zaG93IHtcbiAgICAgIGhlaWdodDogNy41ZW07IH1cbiAgLm9wdGlvbnMgLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDEzZW07XG4gICAgaGVpZ2h0OiAxM2VtOyB9XG4gICAgLm9wdGlvbnMgLmNvbnRlbnQgPiBkaXYge1xuICAgICAgd2lkdGg6IDEwMCU7IH1cbiAgICAub3B0aW9ucyAuY29udGVudC5pbmZvIHtcbiAgICAgIGJhY2tncm91bmQ6IHVybChhc3NldHMvaWNvbi9pbmZvLnN2Zyk7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDYwJTsgfVxuICAub3B0aW9ucyAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAuNjVlbSAxZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7IH1cbiAgLm9wdGlvbnMgLmljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS42NjY2NmVtO1xuICAgIHdpZHRoOiAxLjY2NjY2ZW0gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIC5vcHRpb25zIC5pY29uOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IC41NDsgfVxuICAub3B0aW9ucyAuYm9keSB7XG4gICAgcGFkZGluZzogLjI1ZW0gLjI1ZW0gLjI1ZW0gMWVtOyB9XG4gIC5vcHRpb25zIC5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAub3B0aW9ucyAuaXRlbSAudGV4dCB7XG4gICAgICBmbGV4OiAxOyB9XG4gIC5vcHRpb25zIC52YWx1ZSB7XG4gICAgcGFkZGluZzogLjI1ZW0gLjc1ZW07IH1cbiAgLm9wdGlvbnMgLmhpZ2gge1xuICAgIGNvbG9yOiAjZGIyOTFkOyB9XG4gIC5vcHRpb25zIC5tZWRpdW0ge1xuICAgIGNvbG9yOiAjRkY5ODAwOyB9XG4gIC5vcHRpb25zIC5sb3cge1xuICAgIGNvbG9yOiAjMzA5YjQwOyB9XG5cbi5sZXZlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAuNWVtO1xuICB6LWluZGV4OiAxMDA7XG4gIGZsZXgtZmxvdzogY29sdW1uO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gMy41ZW0pO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAubGV2ZWwgKiB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87IH1cbiAgLmxldmVsLnB1c2gge1xuICAgIHRvcDogM2VtOyB9XG5cbi5zaG93LXN0YXRlIHtcbiAgd2lkdGg6IDhlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtYXJnaW46IDAgLjVlbTtcbiAgbWFyZ2luLXRvcDogLTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAuNWVtO1xuICBmb250LXNpemU6IDEuMmVtOyB9XG4gIC5zaG93LXN0YXRlIC50ZXh0IHtcbiAgICBmbGV4OiAxOyB9XG4gIC5zaG93LXN0YXRlIC5jaGVja2JveCB7XG4gICAgbWFyZ2luLWxlZnQ6IC41ZW07XG4gICAgZm9udC1zaXplOiAuOGVtOyB9XG5cbi5rZXlzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlOyB9XG4gIC5rZXlzLWhlYWRlciAudmFsdWUge1xuICAgIGZsZXg6IDE7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBmb250LXdlaWdodDogMzAwO1xuICAgIHBhZGRpbmc6IC41ZW07IH1cblxuLmtleXMtbGlzdCB7XG4gIG1hcmdpbi10b3A6IC02cHg7IH1cblxuLmRyb3Bkb3duIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTBlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtYXJnaW46IDAgLjVlbTtcbiAgZm9udC1zaXplOiAxLjJlbTsgfVxuICAuZHJvcGRvd24gLmRpdmlkZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogI2FhYTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAuNWVtOyB9XG4gIC5kcm9wZG93biAuYmFyIHtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMXB4O1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTsgfVxuICAuZHJvcGRvd24gLnR5cGUge1xuICAgIHBhZGRpbmc6IDAgLjVlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IC44ZW07IH1cbiAgLmRyb3Bkb3duIC5saXN0IHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgfVxuICAuZHJvcGRvd24gLmdyb3VwIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtaGVpZ2h0OiA0NXZoO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgLmRyb3Bkb3duIC5saXN0LnNob3cge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxOTM3ZWE7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcywgYm94LXNoYWRvdyAzMDBtcztcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsgfVxuICAgIC5kcm9wZG93biAubGlzdC5zaG93IC5kaXZpZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgICAuZHJvcGRvd24gLmxpc3Quc2hvdyAuaXRlbSB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87IH1cbiAgICAgIC5kcm9wZG93biAubGlzdC5zaG93IC5pdGVtIC5pY29uIHtcbiAgICAgICAgcGFkZGluZzogMDsgfVxuICAgICAgLmRyb3Bkb3duIC5saXN0LnNob3cgLml0ZW0uYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTM3ZWE7IH1cbiAgICAgICAgLmRyb3Bkb3duIC5saXN0LnNob3cgLml0ZW0uYWN0aXZlIC5pY29uIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjsgfVxuICAgIC5kcm9wZG93biAubGlzdC5zaG93IC5ncm91cCB7XG4gICAgICBkaXNwbGF5OiBpbmhlcml0OyB9XG4gIC5kcm9wZG93bi5zZWxlY3QgLmxpc3Quc2hvdyAuaXRlbSB7XG4gICAgZm9udC1zaXplOiAxZW07IH1cbiAgICAuZHJvcGRvd24uc2VsZWN0IC5saXN0LnNob3cgLml0ZW06aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzExMmFiZjtcbiAgICAgIGNvbG9yOiAjZmZmOyB9XG4gIC5kcm9wZG93biAuaWNvbiB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLmRyb3Bkb3duIC5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwYWRkaW5nOiAwLjI1ZW0gMC41ZW07XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIG1pbi13aWR0aDogMTBlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyB9XG4gICAgLmRyb3Bkb3duIC5pdGVtLmFjdGl2ZSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBmb250LXNpemU6IDFlbTsgfVxuICAgICAgLmRyb3Bkb3duIC5pdGVtLmFjdGl2ZSAuaWNvbiB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGNvbG9yOiAjMTkzN2VhOyB9XG4gICAgLmRyb3Bkb3duIC5pdGVtIC5uYW1lIHtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICBmbGV4OiAxOyB9XG4gICAgLmRyb3Bkb3duIC5pdGVtIC52YWx1ZSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cbiAgICAuZHJvcGRvd24gLml0ZW0gLmltYWdlIHtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICB3aWR0aDogMWVtO1xuICAgICAgaGVpZ2h0OiAxZW07IH1cbiAgICAuZHJvcGRvd24gLml0ZW0gLmNpcmNsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICB3aWR0aDogMmVtO1xuICAgICAgbWFyZ2luOiAuNWVtO1xuICAgICAgbWluLXdpZHRoOiAxZSBtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC40ZW07XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwOyB9XG4gICAgICAuZHJvcGRvd24gLml0ZW0gLmNpcmNsZS5pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgICBtYXJnaW46IC4yNWVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC43NWVtOyB9XG5cbi5maWx0ZXJzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFlbTtcbiAgbGVmdDogNTAlO1xuICBtaW4taGVpZ2h0OiAxMGVtO1xuICB3aWR0aDogMjBlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xNTAlKTtcbiAgb3BhY2l0eTogMDtcbiAgcGFkZGluZzogLjVlbTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zLCBvcGFjaXR5IDIwMG1zO1xuICB6LWluZGV4OiAyMDA7IH1cbiAgLmZpbHRlcnMuc2hvdyB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7IH1cbiAgLmZpbHRlcnMgLmhlYWRlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDEuMWVtOyB9XG4gIC5maWx0ZXJzIC5ib2R5IHtcbiAgICBmbGV4OiAxO1xuICAgIHdpZHRoOiAxMDAlOyB9XG5cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHJpZ2h0OiAuNWVtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7IH1cblxuLm9sZC1vdmVybGF5IGRyb3Bkb3duIHtcbiAgd2lkdGg6IDEwMCU7IH1cblxuLm9sZC1vdmVybGF5IGN1c3RvbS1kcm9wZG93biB7XG4gIHdpZHRoOiAxMDAlOyB9XG4iLCJAaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAmPioge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICB9XG59XG5cbi50b3BiYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLnpvb20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA0cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDRweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG5cbiAgICAgICAgYXBwLWljb24ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNldHRpbmdzIHtcbiAgICB3aWR0aDogMTVlbTtcbiAgICBwYWRkaW5nOiAuMjVlbSAuNWVtIC4yNWVtIDFlbTtcbiAgICAuaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC50ZXh0IHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5yb29tIHtcbiAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICB3aWR0aDogMTNlbTtcbiAgICAuaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogLjVlbTtcbiAgICB9XG4gICAgLnRleHQge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbiAgICAubG93IHtcbiAgICAgICAgY29sb3I6ICRzdWNjZXNzO1xuICAgIH1cbiAgICAubWVkaXVtIHtcbiAgICAgICAgY29sb3I6ICRwZW5kaW5nO1xuICAgIH1cbiAgICAuaGlnaCB7XG4gICAgICAgIGNvbG9yOiAkZXJyb3I7XG4gICAgfVxufVxuXG4ua2V5LWxpc3Qge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBmb250LXNpemU6IDFlbTtcbiAgICBwYWRkaW5nOiAuNWVtIDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xuXG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDY0MHB4KSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyZW07XG4gICAgfVxuXG4gICAgLmRpdmlkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogcmdiYSgjMDAwLCAuMik7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAuNWVtO1xuICAgIH1cbiAgICAuYmFyIHtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHdpZHRoOiAxcHg7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMCwgLjIpO1xuICAgIH1cbiAgICAudHlwZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgLjVlbTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICB9XG4gICAgLmxpc3Qge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgjMDAwLCAwKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIH1cbiAgICAuZ3JvdXAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogNDV2aDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuICAgIC5saXN0LnNob3cge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMsIGJveC1zaGFkb3cgMzAwbXM7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICAuaXRlbSB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZ3JvdXAge1xuICAgICAgICAgICAgZGlzcGxheTogaW5oZXJpdDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAmLnNlbGVjdCB7XG4gICAgICAgIC5saXN0LnNob3cgLml0ZW0ge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuaWNvbiB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuICAgIC5pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IC4yNWVtIDEuNWVtIC4yNWVtIC41ZW07XG4gICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIH1cbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDFlbTtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICAuY2lyY2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgICBtYXJnaW46IC41ZW07XG4gICAgICAgICAgICBtaW4td2lkdGg6IDFlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuMWVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDtcbiAgICAgICAgICAgICYuaWNvbiB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMS41ZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAuMjVlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC43NWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uaGVhZGVyLWljb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEuMmVtO1xuICAgIHdpZHRoOiAxLjJlbTtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBjb2xvcjogJHBlbmRpbmc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcblxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA3MjBweCkge1xuICAgICAgICBtYXJnaW4tbGVmdDogMWVtO1xuICAgIH1cblxuICAgICYuZml4ZWQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMi41ZW07XG4gICAgICAgIHJpZ2h0OiAuMjVlbTtcbiAgICB9XG59XG5cbi5zaW1wbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC41ZW07XG4gICAgcmlnaHQ6IC41ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIGJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS42ZW07XG4gICAgfVxufVxuXG4ubnVtYmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAuMWVtO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgZm9udC1zaXplOiAuNWVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdpZHRoOiAyZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5idG4gaS5sYXJnZSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PSpcXFxufHwgIE1vYmlsZSBTdHlsZXMgIHx8XG5cXCo9PT09PT09PT09PT09PT09Ki9cblxuLm9wdGlvbi1saXN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLjVlbTtcbiAgICB0b3A6IDFlbTtcbiAgICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHotaW5kZXg6IDEwNDtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIC5ncm91cCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgIHdpZHRoOiAxLjVlbTtcbiAgICAgICAgYnRuIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogLTJweDtcbiAgICAgICAgICAgIGxlZnQ6IC0ycHg7XG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMsIG9wYWNpdHkgNDAwbXM7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMGVtKTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYnRuW2Zvcm1hdD1cImFjdGlvblwiXSB7XG4gICAgICAgIGkge1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5zaG93IHtcbiAgICAgICAgYnRuW2Zvcm1hdD1cImFjdGlvblwiXSB7XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmdyb3VwIGJ0biB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubW9iaWxlLW1lbnUtaW5mbyB7XG4gICAgYmFja2dyb3VuZDogdXJsKGFzc2V0cy9pY29uL2luZm8uc3ZnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDcyJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG5cbi8qPT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgT2xkIFN0eWxlcyAgICB8fFxuXFwqPT09PT09PT09PT09PT09PSovXG5cbi5vcHRpb25zIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAvLyA8ZHJvcGRvd24gW2xpc3RdPVwibW9kZWwuYnVpbGRpbmdzXCIgWyhtb2RlbCldPVwibW9kZWwuYnVpbGRpbmdzLmlkXCIgKG1vZGVsQ2hhbmdlKT1cInNldEJ1aWxkaW5nKG1vZGVsLmJ1aWxkaW5nc1skZXZlbnRdKVwiPjwvZHJvcGRvd24+XG5cbiAgICB0b3A6IC41ZW07XG4gICAgcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB6LWluZGV4OiAxMDE7XG4gICAgd2lkdGg6IDNlbSAhaW1wb3J0YW50OyAvLyBtYXJnaW4tcmlnaHQ6MWVtO1xuICAgICYuaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgZmxleC1mbG93OiByb3c7XG4gICAgICAgIHdpZHRoOiA0ZW0gIWltcG9ydGFudDtcbiAgICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgfVxuICAgIC5idG4ge1xuICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICAgICAgbWFyZ2luOiAuMmVtO1xuICAgICAgICAmLmluZm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBoZWlnaHQ6IDcwJTtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogNjUlO1xuICAgICAgICAgICAgICAgIGhlaWdodDo2NSU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5wdXNoIHtcbiAgICAgICAgdG9wOiAzLjVlbTtcbiAgICB9XG4gICAgLm9wdGlvbiB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWFyZ2luOiAuNWVtO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG4gICAgICAgIHdpZHRoOiAyLjVlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjVlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMS4zZW07XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zLCBoZWlnaHQgMzAwbXMsIGJvcmRlci1yYWRpdXMgMzAwbXM7XG4gICAgICAgICYuc2hvdyB7XG4gICAgICAgICAgICB3aWR0aDogMTNlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTNlbTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgfVxuICAgICAgICAmLmhhbGYge1xuICAgICAgICAgICAgJi5zaG93IHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDcuNWVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTNlbTtcbiAgICAgICAgaGVpZ2h0OiAxM2VtO1xuICAgICAgICAmPmRpdiB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAmLmluZm8ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKGFzc2V0cy9pY29uL2luZm8uc3ZnKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogNjAlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAuNjVlbSAxZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgIH1cbiAgICAuaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMS42NjY2NmVtO1xuICAgICAgICB3aWR0aDogMS42NjY2NmVtICFpbXBvcnRhbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBvcGFjaXR5OiAuNTQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJvZHkge1xuICAgICAgICBwYWRkaW5nOiAuMjVlbSAuMjVlbSAuMjVlbSAxZW07XG4gICAgfVxuICAgIC5pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAudmFsdWUge1xuICAgICAgICBwYWRkaW5nOiAuMjVlbSAuNzVlbTtcbiAgICB9XG4gICAgLmhpZ2gge1xuICAgICAgICBjb2xvcjogJGVycm9yO1xuICAgIH1cbiAgICAubWVkaXVtIHtcbiAgICAgICAgY29sb3I6ICRwZW5kaW5nO1xuICAgIH1cbiAgICAubG93IHtcbiAgICAgICAgY29sb3I6ICRzdWNjZXNzO1xuICAgIH1cbn1cblxuXG5cbi5sZXZlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgei1pbmRleDogMTAwO1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzLjVlbSk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgKiB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIH1cbiAgICAmLnB1c2gge1xuICAgICAgICB0b3A6IDNlbTtcbiAgICB9XG59XG5cbi5zaG93LXN0YXRlIHtcbiAgICB3aWR0aDogOGVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwgLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbiAgICBtYXJnaW46IDAgLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIC41ZW07XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAudGV4dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxuICAgIC5jaGVja2JveCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuNWVtO1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgfVxufVxuXG4ua2V5cy1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLnZhbHVlIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgcGFkZGluZzogLjVlbTtcbiAgICB9XG59XG5cbi5rZXlzLWxpc3Qge1xuICAgIG1hcmdpbi10b3A6IC02cHg7XG59XG5cblxuLmRyb3Bkb3duIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwZW07XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xuICAgIG1hcmdpbjogMCAuNWVtO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgLmRpdmlkZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IC41ZW07XG4gICAgfVxuICAgIC5iYXIge1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgICB9XG4gICAgLnR5cGUge1xuICAgICAgICBwYWRkaW5nOiAwIC41ZW07XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgfVxuICAgIC5saXN0IHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoIzAwMCwgMCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG4gICAgLmdyb3VwIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQ1dmg7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubGlzdC5zaG93IHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRjb2xvci1wcmltYXJ5O1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zLCBib3gtc2hhZG93IDMwMG1zO1xuICAgICAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICAgICAgLml0ZW0ge1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmFjdGl2ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmdyb3VwIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgJi5zZWxlY3Qge1xuICAgICAgICAubGlzdC5zaG93IC5pdGVtIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmljb24ge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAuaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAuMjVlbS41ZW07XG4gICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICAgICAgbWluLXdpZHRoOiAxMGVtO1xuICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgJi5hY3RpdmUge1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cbiAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgfVxuICAgICAgICAuY2lyY2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgIHdpZHRoOiAyZW07XG4gICAgICAgICAgICBtYXJnaW46IC41ZW07XG4gICAgICAgICAgICBtaW4td2lkdGg6IDFlIG07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjRlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICAgICAgICAmLmljb24ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogLjI1ZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNzVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmZpbHRlcnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFlbTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgbWluLWhlaWdodDogMTBlbTtcbiAgICB3aWR0aDogMjBlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTE1MCUpO1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcGFkZGluZzogLjVlbTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMsIG9wYWNpdHkgMjAwbXM7XG4gICAgei1pbmRleDogMjAwO1xuICAgICYuc2hvdyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDAlKTtcbiAgICB9XG4gICAgLmhlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAuNWVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIH1cbiAgICAuYm9keSB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgcmlnaHQ6IC41ZW07XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xufVxuXG4ub2xkLW92ZXJsYXkge1xuICAgIGRyb3Bkb3duIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIGN1c3RvbS1kcm9wZG93biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cbiJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/shell/explore/components/search/search.component.ngfactory.js":
  /*!*******************************************************************************!*\
    !*** ./src/app/shell/explore/components/search/search.component.ngfactory.js ***!
    \*******************************************************************************/

  /*! exports provided: RenderType_ExploreSearchComponent, View_ExploreSearchComponent_0, View_ExploreSearchComponent_Host_0, ExploreSearchComponentNgFactory */

  /***/
  function srcAppShellExploreComponentsSearchSearchComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ExploreSearchComponent", function () {
      return RenderType_ExploreSearchComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ExploreSearchComponent_0", function () {
      return View_ExploreSearchComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ExploreSearchComponent_Host_0", function () {
      return View_ExploreSearchComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreSearchComponentNgFactory", function () {
      return ExploreSearchComponentNgFactory;
    });
    /* harmony import */


    var _search_styles_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./search.styles.scss.shim.ngstyle */
    "./src/app/shell/explore/components/search/search.styles.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/button/typings/index.ngfactory */
    "./node_modules/@angular/material/button/typings/index.ngfactory.js");
    /* harmony import */


    var _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @acaprojects/ngx-widgets */
    "./node_modules/@acaprojects/ngx-widgets/esm2015/acaprojects-ngx-widgets.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _shared_components_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/components/icon/icon.component.ngfactory */
    "./src/app/shared/components/icon/icon.component.ngfactory.js");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");
    /* harmony import */


    var _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../../../../node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory */
    "./node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_cdk_scrolling_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/cdk/scrolling/typings/index.ngfactory */
    "./node_modules/@angular/cdk/scrolling/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _shared_components_searchbar_searchbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../../../shared/components/searchbar/searchbar.component.ngfactory */
    "./src/app/shared/components/searchbar/searchbar.component.ngfactory.js");
    /* harmony import */


    var _shared_components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../../../shared/components/searchbar/searchbar.component */
    "./src/app/shared/components/searchbar/searchbar.component.ts");
    /* harmony import */


    var _search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./search.component */
    "./src/app/shell/explore/components/search/search.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ExploreSearchComponent = [_search_styles_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ExploreSearchComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ExploreSearchComponent,
      data: {}
    });

    function View_ExploreSearchComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.parent.context.$implicit.icon.class;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _v.parent.parent.context.$implicit.icon.value;

        _ck(_v, 1, 0, currVal_1);
      });
    }

    function View_ExploreSearchComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.parent.context.$implicit.image;
        var currVal_1 = _v.parent.parent.context.$implicit.name;

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_ExploreSearchComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.icon;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.parent.context.$implicit.image;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_ExploreSearchComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "role"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "button", [["mat-button", ""]], [[8, "name", 0], [8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          _co.model.role.active === _v.context.index ? _co.model.role.active = 0 - 1 : _co.model.role.active = _v.context.index;
          var pd_4 = _co.filter(true) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ExploreSearchComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], function (_ck, _v) {
        var currVal_3 = _v.context.$implicit.icon || _v.context.$implicit.image;

        _ck(_v, 5, 0, currVal_3);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.role.active === _v.context.index ? "wide banner inverse" : "wide banner";
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled || null;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._animationMode === "NoopAnimations";

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);

        var currVal_4 = _v.context.$implicit.name;

        _ck(_v, 7, 0, currVal_4);
      });
    }

    function View_ExploreSearchComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "banner-roles"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.role.list;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_ExploreSearchComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "i", [], [[8, "className", 0]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.parent.context.$implicit.icon.class;

        _ck(_v, 0, 0, currVal_0);

        var currVal_1 = _v.parent.parent.context.$implicit.icon.value;

        _ck(_v, 1, 0, currVal_1);
      });
    }

    function View_ExploreSearchComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [], [[8, "src", 4], [8, "alt", 0]], null, null, null, null))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.parent.context.$implicit.image;
        var currVal_1 = _v.parent.parent.context.$implicit.name;

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_ExploreSearchComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.icon;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.parent.context.$implicit.image;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_ExploreSearchComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "role"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "button", [["mat-button", ""]], [[8, "name", 0], [8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          _co.model.role.active === _v.context.index ? _co.model.role.active = 0 - 1 : _co.model.role.active = _v.context.index;
          _co.model.show_roles = false;
          var pd_4 = _co.filter() !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ExploreSearchComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, 0, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, ["", ""]))], function (_ck, _v) {
        var currVal_3 = _v.context.$implicit.icon || _v.context.$implicit.image;

        _ck(_v, 5, 0, currVal_3);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.role.active === _v.context.index ? "wide" : "wide inverse";
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).disabled || null;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3)._animationMode === "NoopAnimations";

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);

        var currVal_4 = _v.context.$implicit.name;

        _ck(_v, 7, 0, currVal_4);
      });
    }

    function View_ExploreSearchComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 10, "div", [["class", "role-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Select Role"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 5, "div", [["class", "role"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 4, "button", [["mat-button", ""]], [[8, "name", 0], [8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          _co.model.role.active = 0 - 1;
          _co.model.show_roles = false;
          var pd_4 = _co.filter() !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["None"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = _co.model.role.list;

        _ck(_v, 10, 0, currVal_3);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.role.active === undefined || _co.model.role.active === 0 - 1 ? "wide" : "wide inverse";
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).disabled || null;
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6)._animationMode === "NoopAnimations";

        _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2);
      });
    }

    function View_ExploreSearchComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.role.list && _co.model.role.list.length > 0;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_ExploreSearchComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [["class", "close"], ["offset", "end"], ["tooltip", ""]], null, [[null, "touchrelease"], [null, "showChange"], [null, "mouseenter"], [null, "mouseleave"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mouseenter" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onEnter($event.target) !== false;
          ad = pd_0 && ad;
        }

        if ("mouseleave" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).onLeave($event.target) !== false;
          ad = pd_1 && ad;
        }

        if ("mousedown" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).mousestart($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchstart" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).touchstart($event) !== false;
          ad = pd_3 && ad;
        }

        if ("mouseup" === en) {
          var pd_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).mouse($event) !== false;
          ad = pd_4 && ad;
        }

        if ("touchend" === en) {
          var pd_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).touch($event) !== false;
          ad = pd_5 && ad;
        }

        if ("touchrelease" === en) {
          var pd_6 = (_co.model.show_roles = true) !== false;
          ad = pd_6 && ad;
        }

        if ("showChange" === en) {
          var pd_7 = (_co.model.show_roles = $event) !== false;
          ad = pd_7 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 671744, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["TooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["OverlayService"]], {
        offset: [0, "offset"],
        template: [1, "template"],
        show: [2, "show"]
      }, {
        showChange: "showChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["center", ""], ["class", "material-icons"]], [[2, "active", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["filter_list"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, [["rolelist", 2]], null, 0, null, View_ExploreSearchComponent_7))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "end";

        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5);

        var currVal_2 = _co.model.show_roles;

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_3 = (_co.model.role.active || _co.model.role.active === 0) && _co.model.role.active !== 0 - 1;

        _ck(_v, 3, 0, currVal_3);
      });
    }

    function View_ExploreSearchComponent_16(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "a", [], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = "mailto:" + _v.parent.context.$implicit.email;

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _v.parent.context.$implicit.email;

        _ck(_v, 2, 0, currVal_1);
      });
    }

    function View_ExploreSearchComponent_17(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.level == null ? null : _v.parent.context.$implicit.level.name;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_ExploreSearchComponent_19(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "loc"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.parent.context.$implicit.location.name;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_ExploreSearchComponent_20(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [["class", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "email"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, [" ", " "]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.parent.context.$implicit.location.display.building;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _v.parent.parent.context.$implicit.location.display.level;

        _ck(_v, 4, 0, currVal_1);
      });
    }

    function View_ExploreSearchComponent_18(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "item info"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_19)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 2, "app-icon", [], null, null, null, _shared_components_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_IconComponent_0"], _shared_components_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 180224, null, 0, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"], [], {
        icon: [0, "icon"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](5, {
        class: 0,
        content: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_20)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.location.fixed;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _ck(_v, 5, 0, "material-icons", _v.parent.context.$implicit.location ? _v.parent.context.$implicit.location.fixed ? "room" : "wifi" : "");

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _v.parent.context.$implicit.location.display;

        _ck(_v, 7, 0, currVal_2);
      }, null);
    }

    function View_ExploreSearchComponent_21(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "button", [["mat-button", ""], ["name", "red"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = _co.control(_v.parent.context.$implicit) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Control"]))], null, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_ExploreSearchComponent_23(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Contact"]))], null, null);
    }

    function View_ExploreSearchComponent_24(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "spinner", [["color", "#fff"], ["type", "circle-ring"]], null, null, null, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_SpinnerComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 770048, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        type: [0, "type"],
        color: [1, "color"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "circle-ring";
        var currVal_1 = "#fff";

        _ck(_v, 2, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_ExploreSearchComponent_22(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "button", [["mat-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = _co.call(_v.parent.context.$implicit) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], {
        disabled: [0, "disabled"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ExploreSearchComponent_23)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ExploreSearchComponent_24)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var currVal_2 = _v.parent.context.$implicit.phone === 0 - 1;

        _ck(_v, 2, 0, currVal_2);

        var currVal_3 = !_v.parent.context.$implicit.loading;

        _ck(_v, 4, 0, currVal_3);

        var currVal_4 = _v.parent.context.$implicit.loading;

        _ck(_v, 6, 0, currVal_4);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).disabled || null;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2)._animationMode === "NoopAnimations";

        _ck(_v, 0, 0, currVal_0, currVal_1);
      });
    }

    function View_ExploreSearchComponent_15(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 20, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 19, "div", [["class", "user"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 6, "div", [["class", "item details"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "div", [["class", "name"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](4, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_16)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_17)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_18)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 9, "div", [["class", "item opts"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 4, "button", [["mat-button", ""], ["name", "red"]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = _co.find(_v.context.$implicit) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_3__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Find"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_21)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_22)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = !_v.context.$implicit.level;

        _ck(_v, 6, 0, currVal_1);

        var currVal_2 = _v.context.$implicit.level;

        _ck(_v, 8, 0, currVal_2);

        var currVal_3 = _v.context.$implicit.location;

        _ck(_v, 10, 0, currVal_3);

        var currVal_6 = _v.context.$implicit.level && _co.model.settings.control && _v.context.$implicit.support_url;

        _ck(_v, 18, 0, currVal_6);

        var currVal_7 = !_v.context.$implicit.level;

        _ck(_v, 20, 0, currVal_7);
      }, function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.name;

        _ck(_v, 4, 0, currVal_0);

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled || null;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._animationMode === "NoopAnimations";

        _ck(_v, 12, 0, currVal_4, currVal_5);
      });
    }

    function View_ExploreSearchComponent_14(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 6, "cdk-virtual-scroll-viewport", [["class", "list cdk-virtual-scroll-viewport"], ["itemSize", "90"]], [[2, "cdk-virtual-scroll-orientation-horizontal", null], [2, "cdk-virtual-scroll-orientation-vertical", null]], null, null, _node_modules_angular_cdk_scrolling_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_CdkVirtualScrollViewport_0"], _node_modules_angular_cdk_scrolling_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_CdkVirtualScrollViewport"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](6144, null, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkScrollable"], null, [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkVirtualScrollViewport"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 540672, null, 0, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkFixedSizeVirtualScroll"], [], {
        itemSize: [0, "itemSize"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["VIRTUAL_SCROLL_STRATEGY"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["_fixedSizeVirtualScrollStrategyFactory"], [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkFixedSizeVirtualScroll"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 245760, null, 0, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkVirtualScrollViewport"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], [2, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["VIRTUAL_SCROLL_STRATEGY"]], [2, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_14__["Directionality"]], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["ScrollDispatcher"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ExploreSearchComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 409600, null, 0, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkVirtualForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"], [1, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_13__["CdkVirtualScrollViewport"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        cdkVirtualForOf: [0, "cdkVirtualForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = "90";

        _ck(_v, 3, 0, currVal_2);

        _ck(_v, 5, 0);

        var currVal_3 = _co.filtered_items;

        _ck(_v, 7, 0, currVal_3);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).orientation === "horizontal";
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).orientation !== "horizontal";

        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }

    function View_ExploreSearchComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.filtered_items;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_ExploreSearchComponent_26(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "spinner", [["color", "#999"], ["type", "circle-ring"]], null, null, null, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_11__["View_SpinnerComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_11__["RenderType_SpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 770048, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["SpinnerComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        type: [0, "type"],
        color: [1, "color"]
      }, null)], function (_ck, _v) {
        var currVal_0 = "circle-ring";
        var currVal_1 = "#999";

        _ck(_v, 1, 0, currVal_0, currVal_1);
      }, null);
    }

    function View_ExploreSearchComponent_27(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "i", [["class", "material-icons"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.search && _co.model.search.length >= _co.model.min_search ? "close" : "keyboard";

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_ExploreSearchComponent_25(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "div", [["class", "no-item center"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 4, "div", [["class", "icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_26)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_27)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, null, [" ", " "]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.loading;

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = !_co.model.loading;

        _ck(_v, 5, 0, currVal_1);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = _co.model.loading ? "Searching..." : _co.model.search && _co.model.search.length >= _co.model.min_search ? "No matches found" : "Type above to search";

        _ck(_v, 7, 0, currVal_2);
      });
    }

    function View_ExploreSearchComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        input: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 15, "div", [["class", "container"]], [[2, "route", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 0, "div", [["class", "tapzone"]], null, [["window", "tap"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("window:tap" === en) {
          var pd_0 = _co.updateShow() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 13, "div", [["class", "search"]], [[2, "show", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 7, "div", [["class", "header"]], [[2, "banner", null], [2, "roles", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 4, "div", [["class", "field"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 3, "searchbar", [], null, [[null, "filterChange"], [null, "focus"], [null, "blur"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("filterChange" === en) {
          var pd_0 = (_co.model.search = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("filterChange" === en) {
          var pd_1 = _co.filter() !== false;
          ad = pd_1 && ad;
        }

        if ("focus" === en) {
          _co.item = null;
          _co.model.focus = true;
          var pd_2 = _co.updateShow() !== false;
          ad = pd_2 && ad;
        }

        if ("blur" === en) {
          _co.model.focus = false;
          var pd_3 = _co.updateShow() !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, _shared_components_searchbar_searchbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["View_SearchbarComponent_0"], _shared_components_searchbar_searchbar_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["RenderType_SearchbarComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 180224, null, 0, _shared_components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_16__["SearchbarComponent"], [], {
        filter: [0, "filter"],
        dictation: [1, "dictation"],
        placeholder: [2, "placeholder"]
      }, {
        filterChange: "filterChange",
        focus: "focus",
        blur: "blur"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_ExploreSearchComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 4, "div", [["class", "body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreSearchComponent_25)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_4 = _co.model.banner_roles;

        _ck(_v, 6, 0, currVal_4);

        var currVal_5 = _co.model.search;
        var currVal_6 = false;
        var currVal_7 = _co.model.search_type === "people" ? "Search for people..." : _co.model.search_type === "spaces" ? "Search for spaces..." : "Search...";

        _ck(_v, 9, 0, currVal_5, currVal_6, currVal_7);

        var currVal_8 = _co.model.search_type !== "spaces" && !_co.model.banner_roles && _co.model.role && _co.model.role.list && _co.model.role.list.length > 0 && (!_co.model.settings || !_co.model.settings.banner || _co.model.settings.banner.people !== "roles");

        _ck(_v, 11, 0, currVal_8);

        var currVal_9 = !_co.model.loading && _co.model.inited;

        _ck(_v, 14, 0, currVal_9);

        var currVal_10 = _co.model.loading || !_co.filtered_items || _co.filtered_items.length <= 0 || !_co.model.inited;

        _ck(_v, 16, 0, currVal_10);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.route;

        _ck(_v, 1, 0, currVal_0);

        var currVal_1 = _co.model.show;

        _ck(_v, 3, 0, currVal_1);

        var currVal_2 = _co.model.show && _co.model.banner;
        var currVal_3 = _co.model.banner_roles;

        _ck(_v, 4, 0, currVal_2, currVal_3);
      });
    }

    function View_ExploreSearchComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "explore-search", [], null, null, null, View_ExploreSearchComponent_0, RenderType_ExploreSearchComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _search_component__WEBPACK_IMPORTED_MODULE_17__["ExploreSearchComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_18__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_19__["Router"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ExploreSearchComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("explore-search", _search_component__WEBPACK_IMPORTED_MODULE_17__["ExploreSearchComponent"], View_ExploreSearchComponent_Host_0, {
      item: "item"
    }, {
      itemChange: "itemChange"
    }, []);
    /***/

  },

  /***/
  "./src/app/shell/explore/components/search/search.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/shell/explore/components/search/search.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ExploreSearchComponent */

  /***/
  function srcAppShellExploreComponentsSearchSearchComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreSearchComponent", function () {
      return ExploreSearchComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../shared/utility.class */
    "./src/app/shared/utility.class.ts");
    /* harmony import */


    var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../shared/globals/base.directive */
    "./src/app/shared/globals/base.directive.ts");

    var ExploreSearchComponent =
    /*#__PURE__*/
    function (_shared_globals_base_2) {
      _inherits(ExploreSearchComponent, _shared_globals_base_2);

      function ExploreSearchComponent(service, route, router) {
        var _this11;

        _classCallCheck(this, ExploreSearchComponent);

        _this11 = _possibleConstructorReturn(this, _getPrototypeOf(ExploreSearchComponent).call(this));
        _this11.service = service;
        _this11.route = route;
        _this11.router = router;
        _this11.item = null;
        _this11.itemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this11.model = {};
        _this11.filtered_items = [];
        _this11.timers = {};
        return _this11;
      }

      _createClass(ExploreSearchComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          var win = self;
          this.model.loaded = false;
          this.model.speech = !!(win.SpeechRecognition || win.webkitSpeechRecognition);
          this.model.settings = {};
          this.subscription('users', this.service.Users.listen('user_list', function (list) {
            _this12.model.user_list = list || [];

            _this12.model.user_list.sort(function (a, b) {
              return a.name.localeCompare(b.name);
            });

            _this12.filter();
          }));
          this.subscription('rooms', this.service.Rooms.listen('room_list', function () {
            _this12.model.room_list = _this12.service.Rooms.list();
          }));
          this.subscription('bld', this.service.Buildings.listen(function (bld) {
            if (bld) {
              _this12.model.search = '';
              _this12.model.room_list = _this12.service.Rooms.list();

              _this12.filter();
            }
          }));
          this.subscription('query', this.route.queryParamMap.subscribe(function (params) {
            if (params.has('role')) {
              _this12.model.role_param = params.get('role');

              _this12.initRole();
            }
          }));
          this.subscription('route', this.route.paramMap.subscribe(function (params) {
            if (params.has('search')) {
              _this12.model.search_type = params.get('search');

              _this12.updateShow();

              _this12.filter();
            }
          })); // Clear results when route changes

          this.subscription('routing', this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
              _this12.filtered_items = [];
              _this12.model.search = '';

              _this12.service.set('BANNER.block_height', 0);
            } else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
              _this12.updateShow();
            }
          }));
          this.init();
        }
      }, {
        key: "init",
        value: function init() {
          var _this13 = this;

          var bld = this.service.Buildings.current();

          if (!this.service.Settings.setup || !bld) {
            return setTimeout(function () {
              return _this13.init();
            }, 500);
          }

          this.model.route = this.service.Settings.get('app.style.popout');
          this.model.min_search = this.service.Settings.get('app.people_min_char') || 0;
          this.model.settings = this.service.Settings.get('app.explore') || {};
          this.model.role = {
            details: this.service.Settings.get('app.roles'),
            list: [],
            active: -1
          };

          if (bld.roles) {
            for (var role in bld.roles) {
              if (bld.roles.hasOwnProperty(role)) {
                this.model.role.list.push({
                  id: role,
                  name: role.split('-').join(' '),
                  icon: this.model.role.details ? this.model.role.details[role] : null,
                  users: bld.roles[role]
                });
              }
            }
          }

          this.filter();
          this.updateShow();
          this.model.inited = true;
        }
      }, {
        key: "initRole",
        value: function initRole() {
          var _this14 = this;

          if (this.model.role_param && this.model.role && this.model.role.list) {
            var _iteratorNormalCompletion9 = true;
            var _didIteratorError9 = false;
            var _iteratorError9 = undefined;

            try {
              for (var _iterator9 = this.model.role.list[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                var i = _step9.value;

                if (i.id === this.model.role_param) {
                  this.model.role.active = this.model.role.list.indexOf(i);
                  this.filter();
                  break;
                }
              }
            } catch (err) {
              _didIteratorError9 = true;
              _iteratorError9 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                  _iterator9.return();
                }
              } finally {
                if (_didIteratorError9) {
                  throw _iteratorError9;
                }
              }
            }
          } else if (!this.model.role || !this.model.role.list) {
            setTimeout(function () {
              return _this14.initRole();
            }, 500);
          }
        }
        /**
         * Update list of filtered items
         */

      }, {
        key: "filter",
        value: function filter() {
          var _this15 = this;

          var focused = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          if (!this.model.settings) {
            return;
          }

          this.model.loading = true;
          this.timeout('loading', function () {
            return _this15.model.loading = false;
          }, 310); // Prevent deselection o

          if (focused && this.input && this.input.nativeElement) {
            this.input.nativeElement.focus();
            this.model.focus = true;
            this.updateShow();
          }

          if (this.timers.search) {
            clearTimeout(this.timers.search);
            this.timers.search = null;
          }

          this.timeout('filter', function () {
            _this15.clearTimeout('loading');

            _this15.model.loading = true;

            if (_this15.model.search_type === 'spaces') {
              // Only return rooms/spaces
              _this15.filterRooms().then(function (rooms) {
                _this15.filtered_items = rooms;

                _this15.filtered_items.sort(function (a, b) {
                  return a.name.localeCompare(b.name);
                });

                return _this15.model.loading = false;
              });
            } else if (_this15.model.search_type === 'people') {
              // Only return people
              _this15.filterUsers().then(function (users) {
                _this15.filtered_items = users;
                return _this15.model.loading = false;
              });
            } else {
              // Return both spaces and people
              _this15.filterUsers().then(function (users) {
                var role = _this15.model.role;

                if (role && role.active >= 0) {
                  _this15.filtered_items = users;
                  return _this15.model.loading = false;
                } else {
                  _this15.filterRooms().then(function (rooms) {
                    _this15.filtered_items = (users || []).concat(rooms);

                    _this15.filtered_items.sort(function (a, b) {
                      return a.name.localeCompare(b.name);
                    });

                    return _this15.model.loading = false;
                  });
                }
              });
            }
          });
        }
        /**
         * Promise of filtered users
         */

      }, {
        key: "filterUsers",
        value: function filterUsers() {
          var _this16 = this;

          return new Promise(function (resolve) {
            var search = (_this16.model.search || '').toLowerCase();
            var role = _this16.model.role;

            if (search && search.length >= _this16.model.min_search || role && role.active >= 0 || !_this16.model.min_search) {
              var users = []; // Get filtered users

              if (role && role.active >= 0) {
                users = _this16.service.Users.getFilteredUsers(search, role.list[role.active].users);
                resolve(users);
              } else if (!_this16.model.min_search && _this16.model.user_list && _this16.model.user_list.length > 0) {
                users = _this16.service.Users.getFilteredUsers(search, _this16.model.user_list);
                resolve(users);
              } else {
                var request_id = Math.floor(Math.random() * 899999 + 100000);
                _this16.model.request_id = request_id;

                _this16.service.Users.query({
                  q: search,
                  limit: 50
                }).then(function (list) {
                  if (request_id === _this16.model.request_id) {
                    users = _this16.service.Users.getFilteredUsers(search, list);
                    resolve(users);
                  }
                }, function () {
                  return resolve(users);
                });
              }
            } else {
              resolve([]);
            }
          });
        }
        /**
         * Promise of filtered spaces
         */

      }, {
        key: "filterRooms",
        value: function filterRooms() {
          var _this17 = this;

          return new Promise(function (resolve) {
            var search = (_this17.model.search || '').toLowerCase();
            var list = [];
            var _iteratorNormalCompletion10 = true;
            var _didIteratorError10 = false;
            var _iteratorError10 = undefined;

            try {
              for (var _iterator10 = _this17.model.room_list[Symbol.iterator](), _step10; !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                var item = _step10.value;
                list.push({
                  id: item.id,
                  prefix: item.prefix,
                  bookable: item.bookable,
                  map_id: item.map_id,
                  name: item.name,
                  level: item.level
                });
              }
            } catch (err) {
              _didIteratorError10 = true;
              _iteratorError10 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                  _iterator10.return();
                }
              } finally {
                if (_didIteratorError10) {
                  throw _iteratorError10;
                }
              }
            }

            var bld = _this17.service.Buildings.current();

            if (bld && bld.map && bld.map.searchables) {
              for (var level in bld.map.searchables) {
                if (bld.map.searchables.hasOwnProperty(level)) {
                  for (var name in bld.map.searchables[level]) {
                    if (bld.map.searchables[level].hasOwnProperty(name)) {
                      var lvl = _this17.service.Buildings.getLevel(level);

                      list.push({
                        map_id: bld.map.searchables[level][name],
                        name: name,
                        level: lvl,
                        prefix: false
                      });
                    }
                  }
                }
              }
            }

            if (!search) {
              return resolve(list);
            }

            var rooms = [];

            for (var _i = 0, _list = list; _i < _list.length; _i++) {
              var rm = _list[_i];

              if (((rm.name || '').toLowerCase().indexOf(search) >= 0 || rm.level && (rm.level.name || '').toLowerCase().indexOf(search) >= 0) && rm.searchable !== false) {
                rooms.push(rm);
              }
            }

            resolve(rooms);
          });
        }
        /**
         * Post item to find on map
         * @param item Displayed item selected by the user
         */

      }, {
        key: "find",
        value: function find(item) {
          this.item = item;
          this.model.search = item.name;
          this.model.focus = false;
          this.model.dictate = false;

          if (this.input && this.input.nativeElement) {
            this.input.nativeElement.blur();
          }

          this.itemChange.emit(item);
          this.updateShow();
        }
        /**
         * Open telephone URL for item
         * @param item Displayed item selected by the user
         */

      }, {
        key: "call",
        value: function call(item) {
          item.loading = true;
          var phone = '';
          item.phone = -1;

          if (!item.phone || item.phone === -1) {
            // Load user phone number from API
            this.service.Users.show(item.email).then(function (person) {
              if (person && person.phone) {
                phone = _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__["Utils"].removeChars(person.phone, ' ()_-');
                location.href = "tel:".concat(phone);
              } else {
                item.phone = -1;
              }

              item.loading = false;
            }, function () {
              return item.phone = -1;
            });
          } else {
            phone = _shared_utility_class__WEBPACK_IMPORTED_MODULE_3__["Utils"].removeChars(item.phone, ' ()_-');
            location.href = "tel:".concat(phone);
            item.loading = false;
          }
        }
        /**
         * Open support URL for the selected item
         * @param item Selected item
         */

      }, {
        key: "control",
        value: function control(item) {
          if (item.support_url) {
            window.open(item.support_url, 'blank_');
          }
        }
        /**
         * Close the search and clear the selected item
         */

      }, {
        key: "close",
        value: function close() {
          this.model.search = '';
          this.item = null;
          this.model.role.active = -1;
          this.filter();

          if (this.input && this.input.nativeElement) {
            this.input.nativeElement.blur();
          }

          this.itemChange.emit(this.item);
        }
        /**
         * Activate dictation search
         */

      }, {
        key: "startDictation",
        value: function startDictation() {
          var _this18 = this;

          if (!this.input) {
            return;
          }

          if (this.model.recognition) {
            this.model.recognition.stop();
            this.model.dictate = false;
            this.model.recognition = null;
            return;
          }

          var win = self;
          var Speech = win.SpeechRecognition || win.webkitSpeechRecognition;

          if (Speech) {
            this.model.recognition = new Speech();
            this.model.recognition.continuous = false;
            this.model.recognition.interimResults = false;
            this.model.recognition.lang = 'en-US';
            this.model.recognition.start();
            this.model.dictate = true;

            this.model.recognition.onresult = function (e) {
              // Update search field with dictation result
              _this18.input.nativeElement.value = e.results[0][0].transcript;
              _this18.model.search = e.results[0][0].transcript;

              _this18.model.recognition.stop();

              _this18.filter();

              _this18.model.dictate = false;
            };

            this.model.recognition.onerror = function (e) {
              _this18.model.recognition.stop();

              _this18.model.dictate = false;
            };
          }
        }
      }, {
        key: "updateShow",
        value: function updateShow() {
          var _this19 = this;

          this.timeout('update_show', function () {
            var people = !_this19.item && _this19.model.role.active !== -1 || _this19.model.search_type === 'people' && !_this19.item;
            _this19.model.show = people || _this19.model.focus || _this19.model.dictate;
            _this19.model.banner = _this19.model.settings && _this19.model.settings.banner && _this19.model.settings.banner.search;
            var r = _this19.model.role && _this19.model.role.list && _this19.model.role.list.length > 0;
            _this19.model.banner_roles = _this19.model.banner && _this19.model.settings.banner.roles && _this19.model.search_type !== 'spaces' && r;

            if (_this19.model.show && _this19.model.banner) {
              var h = _this19.model.banner_roles ? 6.5 : 4;

              _this19.service.set('BANNER.block_height', h);
            } else {
              _this19.service.set('BANNER.block_height', 0);
            }
          }, 500);
        }
      }]);

      return ExploreSearchComponent;
    }(_shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_4__["BaseDirective"]);
    /***/

  },

  /***/
  "./src/app/shell/explore/components/search/search.styles.scss.shim.ngstyle.js":
  /*!************************************************************************************!*\
    !*** ./src/app/shell/explore/components/search/search.styles.scss.shim.ngstyle.js ***!
    \************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppShellExploreComponentsSearchSearchStylesScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".container[_ngcontent-%COMP%] {\n  height: 3em;\n  width: 100%;\n  z-index: 900; }\n.container.route[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%] {\n    height: 6em; }\n.container.route[_ngcontent-%COMP%]   .search.show[_ngcontent-%COMP%] {\n      height: 100%; }\n.container.route[_ngcontent-%COMP%]   .search.show[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n        width: 1048px; }\n.container.route[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100vw;\n    height: 3em;\n    border: none;\n    border-radius: 1.5em;\n    margin-top: .25em; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n      .container.route[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n        margin: 0; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n      .container.route[_ngcontent-%COMP%]   .field[_ngcontent-%COMP%] {\n        margin: 0; } }\n.search[_ngcontent-%COMP%] {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #ecf1f5;\n  z-index: 105;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 6em;\n  -webkit-transition: height 300ms;\n  transition: height 300ms; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n    .search[_ngcontent-%COMP%] {\n      max-height: 3em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n    .search[_ngcontent-%COMP%] {\n      max-height: 3em; } }\n.search.position-normal[_ngcontent-%COMP%] {\n    position: unset; }\n.search[_ngcontent-%COMP%]   .banner-roles[_ngcontent-%COMP%] {\n    margin-bottom: 0; }\n.search.show[_ngcontent-%COMP%] {\n    height: calc(100% - 3.5em); }\n.search.show[_ngcontent-%COMP%]   .banner-roles[_ngcontent-%COMP%] {\n      margin-bottom: .5em; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n      .search.show[_ngcontent-%COMP%] {\n        max-height: none; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n      .search.show[_ngcontent-%COMP%] {\n        max-height: none; } }\n.header[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: #ecf1f5;\n  background-color: #a3a2a2;\n  overflow: hidden;\n  height: 6em;\n  -webkit-transition: height 300ms, background 300ms, -webkit-transform 300ms;\n  transition: height 300ms, background 300ms, -webkit-transform 300ms;\n  transition: height 300ms, transform 300ms, background 300ms;\n  transition: height 300ms, transform 300ms, background 300ms, -webkit-transform 300ms;\n  z-index: 202;\n  -webkit-transform: translateY(0%);\n          transform: translateY(0%);\n  padding: 0 .5em; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n    .header[_ngcontent-%COMP%] {\n      padding: 0;\n      height: 3em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n    .header[_ngcontent-%COMP%] {\n      padding: 0;\n      height: 3em; } }\n.header.roles[_ngcontent-%COMP%] {\n    height: 6.5em; }\n.header.banner[_ngcontent-%COMP%] {\n    position: absolute;\n    height: 4em;\n    top: 0;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    background: none; }\n.header.banner.roles[_ngcontent-%COMP%] {\n      height: 7.5em; }\n.header.banner[_ngcontent-%COMP%]   .banner-roles[_ngcontent-%COMP%] {\n      height: 2.3em; }\n.header[_ngcontent-%COMP%]   .banner-roles[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    height: 0em;\n    width: 100%;\n    overflow: hidden;\n    -webkit-transition: height 300ms;\n    transition: height 300ms;\n    -webkit-box-pack: center;\n            justify-content: center;\n    border-bottom: 1px solid rgba(255, 255, 255, 0.54); }\n.header[_ngcontent-%COMP%]   .banner-roles[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n      text-transform: uppercase; }\n.field[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 101;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  min-height: 3em;\n  -webkit-transition: width 300ms;\n  transition: width 300ms; }\n.field[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    font-size: 1.5em; }\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 1em;\n    background: none;\n    outline: none;\n    color: rgba(0, 0, 0, 0.87);\n    border: none;\n    width: 100%; }\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder {\n      color: rgba(0, 0, 0, 0.2); }\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder {\n      color: rgba(0, 0, 0, 0.2); }\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-ms-input-placeholder {\n      color: rgba(0, 0, 0, 0.2); }\n.field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n      color: rgba(0, 0, 0, 0.2); }\n.field[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    position: absolute;\n    top: .4em;\n    left: .4em;\n    height: 1.5em;\n    width: 1.5em; }\n.body[_ngcontent-%COMP%] {\n  overflow: auto;\n  width: 100%;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-transition: height 300ms;\n  transition: height 300ms;\n  height: 50%; }\n.user[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  min-height: 5em;\n  padding: .25em 1em;\n  width: 1024px;\n  max-width: 95vw;\n  margin: .5em auto;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border-radius: 8px; }\n.item[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: left; }\n.list[_ngcontent-%COMP%] {\n  min-height: 70vh;\n  height: 100%; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .loc[_ngcontent-%COMP%] {\n    display: none; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .loc[_ngcontent-%COMP%] {\n    display: none; } }\n.details[_ngcontent-%COMP%] {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  width: 40%;\n  min-width: 8em; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n    .details[_ngcontent-%COMP%] {\n      font-size: .8em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n    .details[_ngcontent-%COMP%] {\n      font-size: .8em; } }\n.name[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n  width: 100%; }\n.email[_ngcontent-%COMP%] {\n  font-size: .8em;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n.email[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #7dd6d6; }\n.email[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n      text-decoration: underline; }\n.info[_ngcontent-%COMP%] {\n  min-width: 9em;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n.info[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n    font-size: .8em; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n    .info[_ngcontent-%COMP%] {\n      font-size: .8em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n    .info[_ngcontent-%COMP%] {\n      font-size: .8em; } }\n.icon[_ngcontent-%COMP%] {\n  position: relative;\n  height: 1em;\n  width: 1em;\n  margin-right: .25em;\n  font-size: 2em; }\n.role-list[_ngcontent-%COMP%] {\n  font-size: .8em;\n  padding: .5em;\n  text-align: center; }\n.role-list[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n    margin-bottom: .5em; }\n.role[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 0 .5em; }\n.role[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n    height: 1em;\n    width: 1em;\n    font-size: 1em;\n    margin: 0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n.role[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    padding: 0 0 0 .25em;\n    white-space: nowrap;\n    -webkit-box-flex: 1;\n            flex: 1;\n    text-transform: capitalize; }\n.filter[_ngcontent-%COMP%] {\n  left: .5em; }\n.opts[_ngcontent-%COMP%]   btn[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  display: flex;\n  height: 4em;\n  width: 4em;\n  margin: .4em;\n  font-size: .25em; }\n.close[_ngcontent-%COMP%] {\n  position: relative;\n  color: rgba(0, 0, 0, 0.54);\n  height: 2em;\n  width: 2em;\n  cursor: pointer; }\n.close[_ngcontent-%COMP%]:hover {\n    color: rgba(0, 0, 0, 0.87); }\n.close[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.5em; }\n.close[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n    color: #1937ea; }\n.close.active[_ngcontent-%COMP%] {\n    color: #40485a; }\n.filter[_ngcontent-%COMP%] {\n  position: absolute;\n  top: .5em;\n  height: 2em;\n  width: 2em;\n  border: 1px solid #000;\n  background-color: #fff;\n  border-radius: 1em; }\n.filter[_ngcontent-%COMP%]:hover {\n    opacity: .8; }\n.filter[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n    font-size: 1.5em; }\n.no-item[_ngcontent-%COMP%] {\n  overflow: hidden;\n  max-height: 100%;\n  min-height: 100%; }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc2hhcmVkLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC9leHBsb3JlL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5zdHlsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGVsbC9leHBsb3JlL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7aUNDRWlDO0FENkNqQzs7dUJDMUN1QjtBRHVEdkI7O3NCQ3BEc0I7QUNMdEI7RUFDSSxXQUFXO0VBQ1gsV0FBVztFQUNYLFlBQVksRUFBQTtBQUhoQjtJQU1ZLFdBQVcsRUFBQTtBQU52QjtNQVFnQixZQUFZLEVBQUE7QUFSNUI7UUFVb0IsYUFBYSxFQUFBO0FBVmpDO0lBZVksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUIsRUFBQTtBRm1EckI7TUV2RVI7UUF1QmdCLFNBQVMsRUFBQSxFQUVoQjtBRmlERDtNRTFFUjtRQXVCZ0IsU0FBUyxFQUFBLEVBRWhCO0FBSVQ7RUFDSSxrQkFBa0I7RUFDbEIsb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkZ2QmdCO0VFd0JoQixZQUFZO0VBQ1osTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsV0FBVztFQUNYLGdDQUF3QjtFQUF4Qix3QkFBd0IsRUFBQTtBRitCcEI7SUUxQ1I7TUFjUSxlQUFlLEVBQUEsRUFvQnRCO0FGV087SUU3Q1I7TUFjUSxlQUFlLEVBQUEsRUFvQnRCO0FBbENEO0lBa0JRLGVBQWMsRUFBQTtBQWxCdEI7SUFzQlEsZ0JBQWdCLEVBQUE7QUF0QnhCO0lBeUJRLDBCQUEwQixFQUFBO0FBekJsQztNQTJCWSxtQkFBbUIsRUFBQTtBRmV2QjtNRTFDUjtRQStCWSxnQkFBZ0IsRUFBQSxFQUV2QjtBRllHO01FN0NSO1FBK0JZLGdCQUFnQixFQUFBLEVBRXZCO0FBR0w7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkY3RGdCO0VFOERoQix5QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCwyRUFBMkQ7RUFBM0QsbUVBQTJEO0VBQTNELDJEQUEyRDtFQUEzRCxvRkFBMkQ7RUFDM0QsWUFBWTtFQUNaLGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsZUFBZSxFQUFBO0FGUlg7SUVOUjtNQWlCUSxVQUFVO01BQ1YsV0FBVyxFQUFBLEVBZ0NsQjtBRnpDTztJRVRSO01BaUJRLFVBQVU7TUFDVixXQUFXLEVBQUEsRUFnQ2xCO0FBbEREO0lBc0JRLGFBQWEsRUFBQTtBQXRCckI7SUF5QlEsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxNQUFNO0lBQ04sb0NBQTRCO1lBQTVCLDRCQUE0QjtJQUM1QixnQkFBZ0IsRUFBQTtBQTdCeEI7TUErQlksYUFBYSxFQUFBO0FBL0J6QjtNQWtDWSxhQUFhLEVBQUE7QUFsQ3pCO0lBdUNRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFdBQVc7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGdDQUF3QjtJQUF4Qix3QkFBd0I7SUFDeEIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixrREFBa0MsRUFBQTtBQTdDMUM7TUErQ1kseUJBQXlCLEVBQUE7QUFLckM7RUFDSSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLCtCQUF1QjtFQUF2Qix1QkFBdUIsRUFBQTtBQU4zQjtJQVNRLGdCQUFnQixFQUFBO0FBVHhCO0lBYVEsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMEJBQWdCO0lBQ2hCLFlBQVk7SUFDWixXQUFXLEVBQUE7QUFsQm5CO01Bb0JZLHlCQUFnQixFQUFBO0FBcEI1QjtNQW9CWSx5QkFBZ0IsRUFBQTtBQXBCNUI7TUFvQlkseUJBQWdCLEVBQUE7QUFwQjVCO01Bb0JZLHlCQUFnQixFQUFBO0FBcEI1QjtJQXlCUSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7SUFDVixhQUFhO0lBQ2IsWUFBWSxFQUFBO0FBSXBCO0VBQ0ksY0FBYztFQUNkLFdBQVc7RUFDWCxtQkFBTztVQUFQLE9BQU87RUFDUCxnQ0FBd0I7RUFBeEIsd0JBQXdCO0VBQ3hCLFdBQVcsRUFBQTtBQUdmO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsK0dBQTZGO0VBQzdGLGtCQUFrQixFQUFBO0FBSXRCO0VBQ0ksb0JBQWE7RUFBYixhQUFhO0VBQ2IsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFlBQVksRUFBQTtBRjlHUjtFRWtISjtJQUNJLGFBQWEsRUFBQSxFQUNoQjtBRmpIRztFRStHSjtJQUNJLGFBQWEsRUFBQSxFQUNoQjtBQUdMO0VBQ0ksbUJBQVk7VUFBWixZQUFZO0VBQ1osVUFBVTtFQUNWLGNBQWMsRUFBQTtBRjFIVjtJRXVIUjtNQUtRLGVBQWUsRUFBQSxFQUV0QjtBRjNITztJRW9IUjtNQUtRLGVBQWUsRUFBQSxFQUV0QjtBQUVEO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVcsRUFBQTtBQUdmO0VBQ0ksZUFBZTtFQUNmLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QixFQUFBO0FBTDNCO0lBT1EsY0Z6TGtCLEVBQUE7QUVrTDFCO01BU1ksMEJBQTBCLEVBQUE7QUFLdEM7RUFDSSxjQUFjO0VBQ2Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CLEVBQUE7QUFKdkI7SUFNUSxlQUFlLEVBQUE7QUZ6SmY7SUVtSlI7TUFTUSxlQUFlLEVBQUEsRUFFdEI7QUYzSk87SUVnSlI7TUFTUSxlQUFlLEVBQUEsRUFFdEI7QUFFRDtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7QUFHbEI7RUFDSSxlQUFlO0VBQ2YsYUFBYTtFQUNiLGtCQUFrQixFQUFBO0FBSHRCO0lBS1EsbUJBQW1CLEVBQUE7QUFJM0I7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsY0FBYyxFQUFBO0FBSmxCO0lBTVEsV0FBVztJQUNYLFVBQVU7SUFDVixjQUFjO0lBQ2QsU0FBUztJQUNULG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QixFQUFBO0FBWi9CO0lBZ0JRLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsbUJBQU87WUFBUCxPQUFPO0lBQ1AsMEJBQTBCLEVBQUE7QUFJbEM7RUFDSSxVQUFVLEVBQUE7QUFHZDtFQUdZLG9CQUFhO0VBQWIsYUFBYTtFQUNiLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtFQUNaLGdCQUFnQixFQUFBO0FBSzVCO0VBQ0ksa0JBQWtCO0VBQ2xCLDBCQUFnQjtFQUNoQixXQUFXO0VBQ1gsVUFBVTtFQUNWLGVBQWUsRUFBQTtBQUxuQjtJQVFRLDBCQUFnQixFQUFBO0FBUnhCO0lBV1EsZ0JBQWdCLEVBQUE7QUFYeEI7SUFjUSxjRnRSZSxFQUFBO0FFd1F2QjtJQWtCUSxjRnpSaUIsRUFBQTtBRTZSekI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFdBQVc7RUFDWCxVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixrQkFBa0IsRUFBQTtBQVB0QjtJQVVRLFdBQVcsRUFBQTtBQVZuQjtJQWNRLGdCQUFnQixFQUFBO0FBSXhCO0VBQ0ksZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2V4cGxvcmUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcbiRwcmltZS1ibHVlLWxpZ2h0OiMwMEFERUY7XG4kcHJpbWUtYmx1ZS1kYXJrOiMwMDY0QkQ7XG4kcHJpbWUtZ3JlZW4tbGlnaHQ6I0EyQUQwMDtcbiRwcmltZS1ncmV5LWRpc2FibGU6IzdDOTRBQTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogIzQyODVGNDtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kbWFpbi1mb250OiAkZm9udC1zdGFjaztcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY29udGFpbmVyIHtcbiAgaGVpZ2h0OiAzZW07XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA5MDA7IH1cbiAgLmNvbnRhaW5lci5yb3V0ZSAuc2VhcmNoIHtcbiAgICBoZWlnaHQ6IDZlbTsgfVxuICAgIC5jb250YWluZXIucm91dGUgLnNlYXJjaC5zaG93IHtcbiAgICAgIGhlaWdodDogMTAwJTsgfVxuICAgICAgLmNvbnRhaW5lci5yb3V0ZSAuc2VhcmNoLnNob3cgLmZpZWxkIHtcbiAgICAgICAgd2lkdGg6IDEwNDhweDsgfVxuICAuY29udGFpbmVyLnJvdXRlIC5maWVsZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IDNlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMS41ZW07XG4gICAgbWFyZ2luLXRvcDogLjI1ZW07IH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgLmNvbnRhaW5lci5yb3V0ZSAuZmllbGQge1xuICAgICAgICBtYXJnaW46IDA7IH0gfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgICAgLmNvbnRhaW5lci5yb3V0ZSAuZmllbGQge1xuICAgICAgICBtYXJnaW46IDA7IH0gfVxuXG4uc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMWY1O1xuICB6LWluZGV4OiAxMDU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNmVtO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAuc2VhcmNoIHtcbiAgICAgIG1heC1oZWlnaHQ6IDNlbTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5zZWFyY2gge1xuICAgICAgbWF4LWhlaWdodDogM2VtOyB9IH1cbiAgLnNlYXJjaC5wb3NpdGlvbi1ub3JtYWwge1xuICAgIHBvc2l0aW9uOiB1bnNldDsgfVxuICAuc2VhcmNoIC5iYW5uZXItcm9sZXMge1xuICAgIG1hcmdpbi1ib3R0b206IDA7IH1cbiAgLnNlYXJjaC5zaG93IHtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNWVtKTsgfVxuICAgIC5zZWFyY2guc2hvdyAuYmFubmVyLXJvbGVzIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IC41ZW07IH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgLnNlYXJjaC5zaG93IHtcbiAgICAgICAgbWF4LWhlaWdodDogbm9uZTsgfSB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAuc2VhcmNoLnNob3cge1xuICAgICAgICBtYXgtaGVpZ2h0OiBub25lOyB9IH1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMWY1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNhMmEyO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDZlbTtcbiAgdHJhbnNpdGlvbjogaGVpZ2h0IDMwMG1zLCB0cmFuc2Zvcm0gMzAwbXMsIGJhY2tncm91bmQgMzAwbXM7XG4gIHotaW5kZXg6IDIwMjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgcGFkZGluZzogMCAuNWVtOyB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgLmhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAwO1xuICAgICAgaGVpZ2h0OiAzZW07IH0gfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAuaGVhZGVyIHtcbiAgICAgIHBhZGRpbmc6IDA7XG4gICAgICBoZWlnaHQ6IDNlbTsgfSB9XG4gIC5oZWFkZXIucm9sZXMge1xuICAgIGhlaWdodDogNi41ZW07IH1cbiAgLmhlYWRlci5iYW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBub25lOyB9XG4gICAgLmhlYWRlci5iYW5uZXIucm9sZXMge1xuICAgICAgaGVpZ2h0OiA3LjVlbTsgfVxuICAgIC5oZWFkZXIuYmFubmVyIC5iYW5uZXItcm9sZXMge1xuICAgICAgaGVpZ2h0OiAyLjNlbTsgfVxuICAuaGVhZGVyIC5iYW5uZXItcm9sZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAwZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NCk7IH1cbiAgICAuaGVhZGVyIC5iYW5uZXItcm9sZXMgLnRleHQge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG4uZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzZW07XG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zOyB9XG4gIC5maWVsZCAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTsgfVxuICAuZmllbGQgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgICAuZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7IH1cbiAgLmZpZWxkIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLjRlbTtcbiAgICBsZWZ0OiAuNGVtO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtOyB9XG5cbi5ib2R5IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4OiAxO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7XG4gIGhlaWdodDogNTAlOyB9XG5cbi51c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogNWVtO1xuICBwYWRkaW5nOiAuMjVlbSAxZW07XG4gIHdpZHRoOiAxMDI0cHg7XG4gIG1heC13aWR0aDogOTV2dztcbiAgbWFyZ2luOiAuNWVtIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4OyB9XG5cbi5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLmxpc3Qge1xuICBtaW4taGVpZ2h0OiA3MHZoO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmxvYyB7XG4gICAgZGlzcGxheTogbm9uZTsgfSB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAubG9jIHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cblxuLmRldGFpbHMge1xuICBmbGV4LWdyb3c6IDE7XG4gIHdpZHRoOiA0MCU7XG4gIG1pbi13aWR0aDogOGVtOyB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgLmRldGFpbHMge1xuICAgICAgZm9udC1zaXplOiAuOGVtOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmRldGFpbHMge1xuICAgICAgZm9udC1zaXplOiAuOGVtOyB9IH1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDEuMmVtO1xuICB3aWR0aDogMTAwJTsgfVxuXG4uZW1haWwge1xuICBmb250LXNpemU6IC44ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAuZW1haWwgYSB7XG4gICAgY29sb3I6ICM3ZGQ2ZDY7IH1cbiAgICAuZW1haWwgYTpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuXG4uaW5mbyB7XG4gIG1pbi13aWR0aDogOWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxuICAuaW5mbyAuZGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAuOGVtOyB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgLmluZm8ge1xuICAgICAgZm9udC1zaXplOiAuOGVtOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmluZm8ge1xuICAgICAgZm9udC1zaXplOiAuOGVtOyB9IH1cblxuLmljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IC4yNWVtO1xuICBmb250LXNpemU6IDJlbTsgfVxuXG4ucm9sZS1saXN0IHtcbiAgZm9udC1zaXplOiAuOGVtO1xuICBwYWRkaW5nOiAuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLnJvbGUtbGlzdCAuaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtOyB9XG5cbi5yb2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCAuNWVtOyB9XG4gIC5yb2xlIC5pY29uIHtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICB3aWR0aDogMWVtO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgLnJvbGUgLnRleHQge1xuICAgIHBhZGRpbmc6IDAgMCAwIC4yNWVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZmxleDogMTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxuXG4uZmlsdGVyIHtcbiAgbGVmdDogLjVlbTsgfVxuXG4ub3B0cyBidG4gLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDRlbTtcbiAgd2lkdGg6IDRlbTtcbiAgbWFyZ2luOiAuNGVtO1xuICBmb250LXNpemU6IC4yNWVtOyB9XG5cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmNsb3NlOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuICAuY2xvc2UgaSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTsgfVxuICAuY2xvc2UgLmFjdGl2ZSB7XG4gICAgY29sb3I6ICMxOTM3ZWE7IH1cbiAgLmNsb3NlLmFjdGl2ZSB7XG4gICAgY29sb3I6ICM0MDQ4NWE7IH1cblxuLmZpbHRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAuNWVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMWVtOyB9XG4gIC5maWx0ZXI6aG92ZXIge1xuICAgIG9wYWNpdHk6IC44OyB9XG4gIC5maWx0ZXIgaSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTsgfVxuXG4ubm8taXRlbSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7IH1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIGhlaWdodDogM2VtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDkwMDtcbiAgICAmLnJvdXRlIHtcbiAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDZlbTtcbiAgICAgICAgICAgICYuc2hvdyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgICAgIC5maWVsZCB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDQ4cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5maWVsZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuNWVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogLjI1ZW07XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gICAgei1pbmRleDogMTA1O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNmVtO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIG1heC1oZWlnaHQ6IDNlbTtcbiAgICB9XG5cbiAgICAmLnBvc2l0aW9uLW5vcm1hbCB7XG4gICAgICAgIHBvc2l0aW9uOnVuc2V0O1xuICAgIH1cblxuICAgIC5iYW5uZXItcm9sZXMge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgICAmLnNob3cge1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNWVtKTtcbiAgICAgICAgLmJhbm5lci1yb2xlcyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFja2dyb3VuZDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNhM2EyYTI7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDZlbTtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMsIHRyYW5zZm9ybSAzMDBtcywgYmFja2dyb3VuZCAzMDBtcztcbiAgICB6LWluZGV4OiAyMDI7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDAlKTtcbiAgICBwYWRkaW5nOiAwIC41ZW07XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBoZWlnaHQ6IDNlbTtcbiAgICB9XG5cbiAgICAmLnJvbGVzIHtcbiAgICAgICAgaGVpZ2h0OiA2LjVlbTtcbiAgICB9XG4gICAgJi5iYW5uZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGhlaWdodDogNGVtO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICYucm9sZXMge1xuICAgICAgICAgICAgaGVpZ2h0OiA3LjVlbTtcbiAgICAgICAgfVxuICAgICAgICAuYmFubmVyLXJvbGVzIHtcbiAgICAgICAgICAgIGhlaWdodDogMi4zZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYmFubmVyLXJvbGVzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAwZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgjZmZmLCAuNTQpO1xuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogM2VtO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zO1xuXG4gICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC44Nyk7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC4yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAuNGVtO1xuICAgICAgICBsZWZ0OiAuNGVtO1xuICAgICAgICBoZWlnaHQ6IDEuNWVtO1xuICAgICAgICB3aWR0aDogMS41ZW07XG4gICAgfVxufVxuXG4uYm9keSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMTtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5cbi51c2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi1oZWlnaHQ6IDVlbTtcbiAgICBwYWRkaW5nOiAuMjVlbSAxZW07XG4gICAgd2lkdGg6IDEwMjRweDtcbiAgICBtYXgtd2lkdGg6IDk1dnc7XG4gICAgbWFyZ2luOiAuNWVtIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG59XG5cbi5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubGlzdCB7XG4gICAgbWluLWhlaWdodDogNzB2aDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgLmxvYyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4uZGV0YWlscyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWluLXdpZHRoOiA4ZW07XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgIH1cbn1cblxuLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5lbWFpbCB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBhIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1xdWF0ZXJuYXJ5O1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW5mbyB7XG4gICAgbWluLXdpZHRoOiA5ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC5kZXRhaWxzIHtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgIH1cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVlbTtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuLnJvbGUtbGlzdCB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5oZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAgIH1cbn1cblxuLnJvbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgLjVlbTtcbiAgICAuaWNvbiB7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIC4yNWVtO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59XG5cbi5maWx0ZXIge1xuICAgIGxlZnQ6IC41ZW07XG59XG5cbi5vcHRzIHtcbiAgICBidG4ge1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgICAgICAgICB3aWR0aDogNGVtO1xuICAgICAgICAgICAgbWFyZ2luOiAuNGVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuMjVlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHJnYmEoIzAwMCwgLjU0KTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogcmdiYSgjMDAwLCAuODcpO1xuICAgIH1cbiAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuICAgIH1cbn1cblxuLmZpbHRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLjVlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgfVxuXG4gICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxufVxuXG4ubm8taXRlbSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbiJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/shell/explore/components/timeline/timeline.component.ngfactory.js":
  /*!***********************************************************************************!*\
    !*** ./src/app/shell/explore/components/timeline/timeline.component.ngfactory.js ***!
    \***********************************************************************************/

  /*! exports provided: RenderType_ExploreTimelineComponent, View_ExploreTimelineComponent_0, View_ExploreTimelineComponent_Host_0, ExploreTimelineComponentNgFactory */

  /***/
  function srcAppShellExploreComponentsTimelineTimelineComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ExploreTimelineComponent", function () {
      return RenderType_ExploreTimelineComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ExploreTimelineComponent_0", function () {
      return View_ExploreTimelineComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ExploreTimelineComponent_Host_0", function () {
      return View_ExploreTimelineComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreTimelineComponentNgFactory", function () {
      return ExploreTimelineComponentNgFactory;
    });
    /* harmony import */


    var _timeline_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./timeline.component.scss.shim.ngstyle */
    "./src/app/shell/explore/components/timeline/timeline.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @acaprojects/ngx-widgets */
    "./node_modules/@acaprojects/ngx-widgets/esm2015/acaprojects-ngx-widgets.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../../../node_modules/@angular/material/button/typings/index.ngfactory */
    "./node_modules/@angular/material/button/typings/index.ngfactory.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/esm2015/a11y.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _shared_components_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../shared/components/icon/icon.component.ngfactory */
    "./src/app/shared/components/icon/icon.component.ngfactory.js");
    /* harmony import */


    var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../../shared/components/icon/icon.component */
    "./src/app/shared/components/icon/icon.component.ts");
    /* harmony import */


    var _timeline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./timeline.component */
    "./src/app/shell/explore/components/timeline/timeline.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ExploreTimelineComponent = [_timeline_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ExploreTimelineComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ExploreTimelineComponent,
      data: {}
    });

    function View_ExploreTimelineComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [["class", "hour"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, ["", ""]))], null, function (_ck, _v) {
        var currVal_0 = _v.parent.context.$implicit.hour;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_ExploreTimelineComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "block"]], [[2, "show", null], [2, "in-use", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = _co.set(_v.context.$implicit.offset) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_2__["ɵj"], [], null, {
        event: "touchrelease"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreTimelineComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
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

    function View_ExploreTimelineComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "block-list"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreTimelineComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.blocks;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_ExploreTimelineComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "div", [["class", "expired"]], [[4, "width", null]], null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.expired_length / _co.duration * 100 + "%";

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_ExploreTimelineComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, {
        container: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, [[1, 0], ["container", 1]], null, 25, "div", [["class", "explore-timeline"]], null, [["window", "resize"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("window:resize" === en) {
          var pd_0 = _co.resize() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreTimelineComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreTimelineComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 20, "div", [["class", "active"]], [[4, "left", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 19, "div", [["class", "line"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "div", [["class", "arrow"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "div", [["class", "time-details"]], null, [[null, "touchstart"], [null, "mousedown"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("touchstart" === en) {
          var pd_0 = _co.grab($event) !== false;
          ad = pd_0 && ad;
        }

        if ("mousedown" === en) {
          var pd_1 = _co.grab($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](10, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 14, "div", [["class", "date-details"]], null, [[null, "touchstart"], [null, "mousedown"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("touchstart" === en) {
          var pd_0 = _co.grab($event) !== false;
          ad = pd_0 && ad;
        }

        if ("mousedown" === en) {
          var pd_1 = _co.grab($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 5, "button", [["mat-icon-button", ""]], [[2, "disabled", null], [8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = _co.changeDate(0 - 1) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_2__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 2, "app-icon", [], null, null, null, _shared_components_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_IconComponent_0"], _shared_components_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 180224, null, 0, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"], [], {
        icon: [0, "icon"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](17, {
        class: 0,
        content: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "div", [["class", "text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](19, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 5, "button", [["mat-icon-button", ""]], [[8, "disabled", 0], [2, "_mat-animation-noopable", null]], [[null, "touchrelease"], [null, "mousedown"], [null, "touchstart"], [null, "mouseup"], [null, "touchend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("mousedown" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).mousestart($event) !== false;
          ad = pd_0 && ad;
        }

        if ("touchstart" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).touchstart($event) !== false;
          ad = pd_1 && ad;
        }

        if ("mouseup" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).mouse($event) !== false;
          ad = pd_2 && ad;
        }

        if ("touchend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).touch($event) !== false;
          ad = pd_3 && ad;
        }

        if ("touchrelease" === en) {
          var pd_4 = _co.changeDate() !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["View_MatButton_0"], _node_modules_angular_material_button_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["RenderType_MatButton"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_2__["ɵj"], [], null, {
        event: "touchrelease"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 180224, null, 0, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_6__["Platform"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__["FocusMonitor"], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["ANIMATION_MODULE_TYPE"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, 0, 2, "app-icon", [], null, null, null, _shared_components_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_IconComponent_0"], _shared_components_icon_icon_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_IconComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 180224, null, 0, _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"], [], {
        icon: [0, "icon"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpod"](25, {
        class: 0,
        content: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, null, null, 0, "div", [["class", "top-arrow"]], null, null, null, null, null))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.blocks && _co.blocks.length > 0;

        _ck(_v, 3, 0, currVal_0);

        var currVal_1 = _co.date_offset <= 0;

        _ck(_v, 5, 0, currVal_1);

        var currVal_7 = _ck(_v, 17, 0, "material-icons", "keyboard_arrow_left");

        _ck(_v, 16, 0, currVal_7);

        var currVal_11 = _ck(_v, 25, 0, "material-icons", "keyboard_arrow_right");

        _ck(_v, 24, 0, currVal_11);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_2 = ((_co.date_offset > 0 ? 0 : _co.expired_length) + (_co.selected_offset || 0)) / _co.duration * 100 + "%";

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _co.display_time;

        _ck(_v, 10, 0, currVal_3);

        var currVal_4 = _co.date_offset <= 0;
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).disabled || null;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14)._animationMode === "NoopAnimations";

        _ck(_v, 12, 0, currVal_4, currVal_5, currVal_6);

        var currVal_8 = _co.display_date || "Today";

        _ck(_v, 19, 0, currVal_8);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22).disabled || null;
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 22)._animationMode === "NoopAnimations";

        _ck(_v, 20, 0, currVal_9, currVal_10);
      });
    }

    function View_ExploreTimelineComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "explore-timeline", [], null, null, null, View_ExploreTimelineComponent_0, RenderType_ExploreTimelineComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _timeline_component__WEBPACK_IMPORTED_MODULE_11__["ExploreTimelineComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ExploreTimelineComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("explore-timeline", _timeline_component__WEBPACK_IMPORTED_MODULE_11__["ExploreTimelineComponent"], View_ExploreTimelineComponent_Host_0, {
      duration: "duration",
      block_size: "block_size",
      expired_length: "expired_length",
      events: "events"
    }, {
      time: "time"
    }, []);
    /***/

  },

  /***/
  "./src/app/shell/explore/components/timeline/timeline.component.scss.shim.ngstyle.js":
  /*!*******************************************************************************************!*\
    !*** ./src/app/shell/explore/components/timeline/timeline.component.scss.shim.ngstyle.js ***!
    \*******************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppShellExploreComponentsTimelineTimelineComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".explore-timeline[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 3.5em;\n  color: #fff;\n  z-index: 800;\n  background: -webkit-gradient(linear, left top, right top, from(#051C2C), color-stop(40%, #051C2C), color-stop(60%, #0B2453), to(#1F40E6));\n  background: linear-gradient(to right, #051C2C, #051C2C 40%, #0B2453 60%, #1F40E6 100%); }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n    .explore-timeline[_ngcontent-%COMP%] {\n      height: 2.5em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n    .explore-timeline[_ngcontent-%COMP%] {\n      height: 2.5em; } }\n.block-list[_ngcontent-%COMP%], .overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n.overlay[_ngcontent-%COMP%] {\n  pointer-events: none; }\n.block[_ngcontent-%COMP%] {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 100%; }\n.block.show[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n    display: initial; }\n.block.in-use[_ngcontent-%COMP%] {\n    background-color: rgba(219, 41, 29, 0.54); }\n.hour[_ngcontent-%COMP%] {\n  position: absolute;\n  top: .75em;\n  left: 0;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%); }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n    .hour[_ngcontent-%COMP%] {\n      top: .3em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n    .hour[_ngcontent-%COMP%] {\n      top: .3em; } }\n.bar[_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  width: 1px;\n  top: 80%;\n  left: 0;\n  bottom: 0;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  background-color: rgba(255, 255, 255, 0.87); }\n.bar.hour[_ngcontent-%COMP%] {\n    top: 60%;\n    background-color: rgba(255, 255, 255, 0.87); }\n.expired[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.54);\n  pointer-events: none; }\n.line[_ngcontent-%COMP%] {\n  position: absolute;\n  height: 100%;\n  left: -1px;\n  width: 2px;\n  bottom: 0;\n  background-color: #fff; }\n.active[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  pointer-events: none; }\n.arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 1px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  border-style: solid;\n  border-width: 0 .6em 1.5em .6em;\n  border-color: transparent transparent #FF9800 transparent; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n    .arrow[_ngcontent-%COMP%] {\n      border-width: 0 .5em .75em .5em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n    .arrow[_ngcontent-%COMP%] {\n      border-width: 0 .5em .75em .5em; } }\n.top-arrow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -.25em;\n  left: 1px;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  border-style: solid;\n  border-width: .5em .5em 0 .5em;\n  border-color: #fff transparent transparent transparent; }\n.time-details[_ngcontent-%COMP%], .date-details[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -.25em;\n  left: 1px;\n  -webkit-transform: translate(-50%, -100%);\n          transform: translate(-50%, -100%);\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  padding: .5em .75em;\n  white-space: nowrap;\n  color: rgba(0, 0, 0, 0.87);\n  font-weight: 500;\n  background-color: #fff;\n  border-radius: 4px;\n  cursor: -webkit-grab;\n  cursor: grab;\n  pointer-events: auto; }\n.time-details[_ngcontent-%COMP%]:active, .date-details[_ngcontent-%COMP%]:active {\n    cursor: -webkit-grabbing;\n    cursor: grabbing; }\n.date-details[_ngcontent-%COMP%] {\n  top: -2.75em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0; }\n.date-details[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    margin: 0 .25em; }\n.icon[_ngcontent-%COMP%] {\n  height: 1.2em;\n  width: 1.2em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  font-size: 1.4em;\n  cursor: pointer; }\n.icon[_ngcontent-%COMP%]:hover {\n    color: rgba(0, 0, 0, 0.54); }\n.icon.disabled[_ngcontent-%COMP%] {\n    pointer-events: none;\n    color: rgba(0, 0, 0, 0.2); }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc2hhcmVkLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC9leHBsb3JlL2NvbXBvbmVudHMvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCIvYnVpbGRzL2FjYS1lbmdpbmUvbWNraW5zZXkvbWNraW5zZXktc3RhZmYtYXBwL3NyYy9hcHAvc2hlbGwvZXhwbG9yZS9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztpQ0NFaUM7QUQ2Q2pDOzt1QkMxQ3VCO0FEdUR2Qjs7c0JDcERzQjtBQ0x0QjtFQUNJLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0VBQ1oseUlBQXNGO0VBQXRGLHNGQUFzRixFQUFBO0FGaUVsRjtJRXZFUjtNQVNRLGFBQWEsRUFBQSxFQUVwQjtBRitETztJRTFFUjtNQVNRLGFBQWEsRUFBQSxFQUVwQjtBQUVEOztFQUVJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksb0JBQW9CLEVBQUE7QUFHeEI7RUFDSSxrQkFBa0I7RUFDbEIsbUJBQU87VUFBUCxPQUFPO0VBQ1AsWUFBWSxFQUFBO0FBSGhCO0lBT1ksZ0JBQWdCLEVBQUE7QUFQNUI7SUFZUSx5Q0ZyQ08sRUFBQTtBRXlDZjtFQUNJLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsT0FBTztFQUNQLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQTtBRnVCdkI7SUUzQlI7TUFPUSxTQUFTLEVBQUEsRUFFaEI7QUZxQk87SUU5QlI7TUFPUSxTQUFTLEVBQUEsRUFFaEI7QUFFRDtFQUNJLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsVUFBVTtFQUNWLFFBQVE7RUFDUixPQUFPO0VBQ1AsU0FBUztFQUNULG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsMkNBQTJCLEVBQUE7QUFSL0I7SUFXUSxRQUFRO0lBQ1IsMkNBQTJCLEVBQUE7QUFJbkM7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QscUNBQTJCO0VBQzNCLG9CQUFvQixFQUFBO0FBR3hCO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixVQUFVO0VBQ1YsVUFBVTtFQUNWLFNBQVM7RUFDVCxzQkFBc0IsRUFBQTtBQUcxQjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFNBQVM7RUFDVCxvQkFBb0IsRUFBQTtBQUl4QjtFQUNJLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULG1DQUEyQjtVQUEzQiwyQkFBMkI7RUFDM0IsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQix5REFBMEQsRUFBQTtBRmxDdEQ7SUUyQlI7TUFVUSwrQkFBK0IsRUFBQSxFQUV0QztBRnBDTztJRXdCUjtNQVVRLCtCQUErQixFQUFBLEVBRXRDO0FBRUQ7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsc0RBQXNELEVBQUE7QUFHMUQ7O0VBRUksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxTQUFTO0VBQ1QseUNBQWlDO1VBQWpDLGlDQUFpQztFQUNqQywrR0FBNkY7RUFDN0YsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQiwwQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsb0JBQVk7RUFBWixZQUFZO0VBQ1osb0JBQW9CLEVBQUE7QUFkeEI7O0lBZ0JRLHdCQUFnQjtJQUFoQixnQkFBZ0IsRUFBQTtBQUl4QjtFQUNJLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFVBQVUsRUFBQTtBQUpkO0lBTVEsZUFBZSxFQUFBO0FBSXZCO0VBQ0ksYUFBYTtFQUNiLFlBQVk7RUFDWixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsZ0JBQWdCO0VBQ2hCLGVBQWUsRUFBQTtBQVBuQjtJQVNRLDBCQUFnQixFQUFBO0FBVHhCO0lBYVEsb0JBQW9CO0lBQ3BCLHlCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvZXhwbG9yZS9jb21wb25lbnRzL3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcbiRwcmltZS1ibHVlLWxpZ2h0OiMwMEFERUY7XG4kcHJpbWUtYmx1ZS1kYXJrOiMwMDY0QkQ7XG4kcHJpbWUtZ3JlZW4tbGlnaHQ6I0EyQUQwMDtcbiRwcmltZS1ncmV5LWRpc2FibGU6IzdDOTRBQTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogIzQyODVGNDtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kbWFpbi1mb250OiAkZm9udC1zdGFjaztcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uZXhwbG9yZS10aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMy41ZW07XG4gIGNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiA4MDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA1MUMyQywgIzA1MUMyQyA0MCUsICMwQjI0NTMgNjAlLCAjMUY0MEU2IDEwMCUpOyB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgLmV4cGxvcmUtdGltZWxpbmUge1xuICAgICAgaGVpZ2h0OiAyLjVlbTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5leHBsb3JlLXRpbWVsaW5lIHtcbiAgICAgIGhlaWdodDogMi41ZW07IH0gfVxuXG4uYmxvY2stbGlzdCxcbi5vdmVybGF5IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cblxuLm92ZXJsYXkge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuXG4uYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDE7XG4gIGhlaWdodDogMTAwJTsgfVxuICAuYmxvY2suc2hvdyAuYmFyIHtcbiAgICBkaXNwbGF5OiBpbml0aWFsOyB9XG4gIC5ibG9jay5pbi11c2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjE5LCA0MSwgMjksIDAuNTQpOyB9XG5cbi5ob3VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC43NWVtO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAuaG91ciB7XG4gICAgICB0b3A6IC4zZW07IH0gfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAuaG91ciB7XG4gICAgICB0b3A6IC4zZW07IH0gfVxuXG4uYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBub25lO1xuICB3aWR0aDogMXB4O1xuICB0b3A6IDgwJTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44Nyk7IH1cbiAgLmJhci5ob3VyIHtcbiAgICB0b3A6IDYwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuODcpOyB9XG5cbi5leHBpcmVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLmxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogLTFweDtcbiAgd2lkdGg6IDJweDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XG5cbi5hY3RpdmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuXG4uYXJyb3cge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogMCAuNmVtIDEuNWVtIC42ZW07XG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI0ZGOTgwMCB0cmFuc3BhcmVudDsgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC5hcnJvdyB7XG4gICAgICBib3JkZXItd2lkdGg6IDAgLjVlbSAuNzVlbSAuNWVtOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmFycm93IHtcbiAgICAgIGJvcmRlci13aWR0aDogMCAuNWVtIC43NWVtIC41ZW07IH0gfVxuXG4udG9wLWFycm93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0uMjVlbTtcbiAgbGVmdDogMXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci13aWR0aDogLjVlbSAuNWVtIDAgLjVlbTtcbiAgYm9yZGVyLWNvbG9yOiAjZmZmIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50OyB9XG5cbi50aW1lLWRldGFpbHMsXG4uZGF0ZS1kZXRhaWxzIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0uMjVlbTtcbiAgbGVmdDogMXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTAwJSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgcGFkZGluZzogLjVlbSAuNzVlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44Nyk7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY3Vyc29yOiBncmFiO1xuICBwb2ludGVyLWV2ZW50czogYXV0bzsgfVxuICAudGltZS1kZXRhaWxzOmFjdGl2ZSxcbiAgLmRhdGUtZGV0YWlsczphY3RpdmUge1xuICAgIGN1cnNvcjogZ3JhYmJpbmc7IH1cblxuLmRhdGUtZGV0YWlscyB7XG4gIHRvcDogLTIuNzVlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMDsgfVxuICAuZGF0ZS1kZXRhaWxzIC50ZXh0IHtcbiAgICBtYXJnaW46IDAgLjI1ZW07IH1cblxuLmljb24ge1xuICBoZWlnaHQ6IDEuMmVtO1xuICB3aWR0aDogMS4yZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuNGVtO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmljb246aG92ZXIge1xuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG4gIC5pY29uLmRpc2FibGVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpOyB9XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uZXhwbG9yZS10aW1lbGluZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMy41ZW07XG4gICAgY29sb3I6ICNmZmY7XG4gICAgei1pbmRleDogODAwO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzA1MUMyQywgIzA1MUMyQyA0MCUsICMwQjI0NTMgNjAlLCAjMUY0MEU2IDEwMCUpO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgaGVpZ2h0OiAyLjVlbTtcbiAgICB9XG59XG5cbi5ibG9jay1saXN0LFxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ub3ZlcmxheSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ibG9jayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgJi5zaG93IHtcbiAgICAgICAgLmJhciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5pbi11c2Uge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRlcnJvciwgLjU0KTtcbiAgICB9XG59XG5cbi5ob3VyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAuNzVlbTtcbiAgICBsZWZ0OiAwO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIHRvcDogLjNlbTtcbiAgICB9XG59XG5cbi5iYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAxcHg7XG4gICAgdG9wOiA4MCU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjg3KTtcblxuICAgICYuaG91ciB7XG4gICAgICAgIHRvcDogNjAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNmZmYsIC44Nyk7XG4gICAgfVxufVxuXG4uZXhwaXJlZCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIC41NCk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5saW5lIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGxlZnQ6IC0xcHg7XG4gICAgd2lkdGg6IDJweDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmFjdGl2ZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxufVxuXG4uYXJyb3cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMCAuNmVtIDEuNWVtIC42ZW07XG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCAkcGVuZGluZyB0cmFuc3BhcmVudDtcblxuICAgIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIGJvcmRlci13aWR0aDogMCAuNWVtIC43NWVtIC41ZW07XG4gICAgfVxufVxuXG4udG9wLWFycm93IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtLjI1ZW07XG4gICAgbGVmdDogMXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogLjVlbSAuNWVtIDAgLjVlbTtcbiAgICBib3JkZXItY29sb3I6ICNmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG59XG5cbi50aW1lLWRldGFpbHMsXG4uZGF0ZS1kZXRhaWxzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAtLjI1ZW07XG4gICAgbGVmdDogMXB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG4gICAgcGFkZGluZzogLjVlbSAuNzVlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGNvbG9yOiByZ2JhKCMwMDAsIC44Nyk7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjdXJzb3I6IGdyYWI7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgJjphY3RpdmUge1xuICAgICAgICBjdXJzb3I6IGdyYWJiaW5nO1xuICAgIH1cbn1cblxuLmRhdGUtZGV0YWlscyB7XG4gICAgdG9wOiAtMi43NWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIC50ZXh0IHtcbiAgICAgICAgbWFyZ2luOiAwIC4yNWVtO1xuICAgIH1cbn1cblxuLmljb24ge1xuICAgIGhlaWdodDogMS4yZW07XG4gICAgd2lkdGg6IDEuMmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNGVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IHJnYmEoIzAwMCwgLjU0KTtcbiAgICB9XG5cbiAgICAmLmRpc2FibGVkIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC4yKTtcbiAgICB9XG59XG5cbiJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/shell/explore/components/timeline/timeline.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/shell/explore/components/timeline/timeline.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ExploreTimelineComponent */

  /***/
  function srcAppShellExploreComponentsTimelineTimelineComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreTimelineComponent", function () {
      return ExploreTimelineComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../../../shared/globals/base.directive */
    "./src/app/shared/globals/base.directive.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);

    var ExploreTimelineComponent =
    /*#__PURE__*/
    function (_shared_globals_base_3) {
      _inherits(ExploreTimelineComponent, _shared_globals_base_3);

      function ExploreTimelineComponent(renderer) {
        var _this20;

        _classCallCheck(this, ExploreTimelineComponent);

        _this20 = _possibleConstructorReturn(this, _getPrototypeOf(ExploreTimelineComponent).call(this));
        _this20.renderer = renderer;
        /** Amount of time to display on the timeline */

        _this20.duration = 12 * 60;
        /** Size of each time block */

        _this20.block_size = 30;
        /** Time offset in minutes which is displayed before the current time marker */

        _this20.expired_length = 2 * 60;
        /** Events occuring on the timeline */

        _this20.events = [];
        /** Emitter for changes to the selected time */

        _this20.time = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** List of time blocks to display on the DOM */

        _this20.blocks = [];
        /** Offset of the selected time from the current time in minutes */

        _this20.selected_offset = 0;
        /** Offset of the selected time from the current time in days */

        _this20.date_offset = 0;
        return _this20;
      }

      _createClass(ExploreTimelineComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.generateTimelineBlocks();
          this.selected_offset = 0;
          this.date_offset = 0;
          var start = dayjs__WEBPACK_IMPORTED_MODULE_2__().add(this.selected_offset, 'm').add(this.date_offset, 'd').startOf('m');
          start.minute(Math.ceil(start.minute() / 5) * 5);
          this.display_time = start.format('h:mm a');
          this.display_date = start.isSame(dayjs__WEBPACK_IMPORTED_MODULE_2__(), 'd') ? 'Today' : start.format('DD MMM YYYY');
          this.display_value = start.valueOf();
          this.interval('expired', function () {
            return _this21.generateTimelineBlocks();
          }, 60 * 1000);
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.resize();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.handleRelease();
        }
        /** Length of the shown timeline in minutes */

      }, {
        key: "generateTimelineBlocks",

        /**
         * Generate time blocks to display
         */
        value: function generateTimelineBlocks() {
          var now = dayjs__WEBPACK_IMPORTED_MODULE_2__().add(this.date_offset, 'd').startOf('m');

          if (this.date_offset) {
            now.hour(7).minute(0);
          }

          now = now.minute(Math.round(now.minute() / 5) * 5);
          var start = dayjs__WEBPACK_IMPORTED_MODULE_2__(now).subtract(this.date_offset ? 30 : this.expired_length || 120, 'm');
          var end = start.add(this.duration || 720, 'm');
          var date = dayjs__WEBPACK_IMPORTED_MODULE_2__(start);
          delete this.blocks;
          this.blocks = [];

          while (date.isBefore(end, 'm')) {
            this.blocks.push({
              value: date.valueOf(),
              show: date.minute() % ((this ? this.block_size : null) || 30) === 0,
              hour: date.minute() === 0 ? date.hour() % 12 === 0 ? 12 : date.hour() % 12 : null,
              offset: date.diff(now, 'm'),
              in_use: false
            });
            date = date.add(5, 'm');
          }

          this.updateSelected();
        }
        /**
         * Handle click and touch events on timeline
         * @param event Touch or Click event on timeline
         */

      }, {
        key: "selectTime",
        value: function selectTime(event) {
          var center = {
            x: event instanceof MouseEvent ? event.clientX : event.touches[0].clientX,
            y: event instanceof MouseEvent ? event.clientY : event.touches[0].clientY
          };

          if (!this.cntr_box) {
            this.cntr_box = this.container.nativeElement.getBoundingClientRect();
          }

          var offset = this.date_offset ? 0 : this.expired_length / this.duration;
          var percent = (center.x - this.cntr_box.left) / this.cntr_box.width - offset;
          var length = Math.ceil((this.duration - (this.date_offset ? 0 : this.expired_length) - 30) / 5) * 5;
          this.selected_offset = Math.min(length, Math.max(this.date_offset ? 30 : 0, this.duration * percent));
          var now = dayjs__WEBPACK_IMPORTED_MODULE_2__().startOf('m');

          if (this.date_offset) {
            now.hour(7).minute(0).subtract(30, 'm');
          }

          var start = dayjs__WEBPACK_IMPORTED_MODULE_2__(now).add(this.selected_offset, 'm').add(this.date_offset, 'd');
          start.minute(Math.ceil(start.minute() / 5) * 5);
          this.selected_time = start.valueOf();
          this.display_time = start.format('h:mm a');
          this.display_date = start.isSame(dayjs__WEBPACK_IMPORTED_MODULE_2__(), 'd') ? 'Today' : start.format('DD MMM YYYY');
          this.time.emit(start.startOf('m').valueOf());
        }
        /**
         * Updates the selected offset
         * @param offset New offset value
         */

      }, {
        key: "set",
        value: function set(offset) {
          this.selected_offset = Math.min(this.duration - (this.date_offset ? 0 : this.expired_length) - 30, Math.max(this.date_offset ? 30 : 0, offset));
          var now = dayjs__WEBPACK_IMPORTED_MODULE_2__().startOf('m');

          if (this.date_offset) {
            now.hour(7).minute(0);
          }

          var start = dayjs__WEBPACK_IMPORTED_MODULE_2__(now).add(this.selected_offset, 'm').add(this.date_offset, 'd');
          start.minute(Math.ceil(start.minute() / 5) * 5);
          this.selected_time = start.valueOf();
          this.display_time = start.format('h:mm a');
          this.display_date = start.isSame(dayjs__WEBPACK_IMPORTED_MODULE_2__(), 'd') ? 'Today' : start.format('DD MMM YYYY');
          this.time.emit(start.startOf('m').valueOf());
        }
        /**
         * Change the selected date of the timeline
         * @param offset Offset to change the select date by in number of days
         */

      }, {
        key: "changeDate",
        value: function changeDate() {
          var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
          this.clearTimeout('grab');
          this.date_offset += offset;
          var new_offset = this.selected_offset;

          if (this.date_offset === 1 && offset > 0) {
            new_offset = this.expired_length + this.selected_offset;
          } else if (this.date_offset === 0 && offset < 0) {
            new_offset = this.selected_offset - this.expired_length;
          }

          this.set(new_offset);
          this.generateTimelineBlocks();
        }
        /**
         * Update bounding boxes after viewport change
         */

      }, {
        key: "resize",
        value: function resize() {
          if (this.container) {
            this.cntr_box = this.container.nativeElement.getBoundingClientRect();
          }
        }
        /**
         * Event callback for mousedown/touchstart events of the selected time elements
         * @param event Thrown event
         */

      }, {
        key: "grab",
        value: function grab(event) {
          var _this22 = this;

          this.timeout('grab', function () {
            _this22.handleRelease();

            if (!_this22.cntr_box) {
              _this22.cntr_box = _this22.container.nativeElement.getBoundingClientRect();
            }

            if (event instanceof MouseEvent) {
              _this22._move_listener = _this22.renderer.listen('window', 'mousemove', function (e) {
                return _this22.handleMove(e);
              });
              _this22._release_listener = _this22.renderer.listen('window', 'mouseup', function (_) {
                return _this22.handleRelease();
              });
            } else {
              _this22._move_listener = _this22.renderer.listen('window', 'touchmove', function (e) {
                return _this22.handleMove(e);
              });
              _this22._release_listener = _this22.renderer.listen('window', 'touchend', function (_) {
                return _this22.handleRelease();
              });
            }
          }, 10);
        }
        /**
         * Handle moving after grab event
         * @param event
         */

      }, {
        key: "handleMove",
        value: function handleMove(event) {
          this.selectTime(event);
        }
        /**
         * Handle end of grab event
         */

      }, {
        key: "handleRelease",
        value: function handleRelease() {
          if (this._move_listener) {
            this._move_listener();

            this._move_listener = null;
          }

          if (this._release_listener) {
            this._release_listener();

            this._release_listener = null;
          }
        }
        /**
         * Update the percentage of the day that has expired
         */

      }, {
        key: "updateSelected",
        value: function updateSelected() {
          var now = dayjs__WEBPACK_IMPORTED_MODULE_2__().add(this.date_offset, 'd');

          if (this.date_offset) {
            now.hour(7).minute(0);
          }

          var diff = dayjs__WEBPACK_IMPORTED_MODULE_2__(this.selected_time).diff(now, 'm');

          if (diff < 0) {
            var start = dayjs__WEBPACK_IMPORTED_MODULE_2__(now).startOf('m');
            start.minute(Math.ceil(start.minute() / 5) * 5);
            this.selected_time = start.valueOf();
            this.display_time = start.format('h:mm a');
            this.display_date = start.isSame(dayjs__WEBPACK_IMPORTED_MODULE_2__(), 'd') ? 'Today' : start.format('DD MMM YYYY');
            this.display_value = start.valueOf();
            start.minute(Math.ceil(start.minute() / 5) * 5);
            this.time.emit(start.valueOf());
          }

          this.selected_offset = Math.min(this.duration - (this.date_offset ? 0 : this.expired_length) - 30, Math.max(this.date_offset ? 30 : 0, diff));
        }
      }, {
        key: "length",
        get: function get() {
          return this.duration + this.block_size;
        }
      }]);

      return ExploreTimelineComponent;
    }(_shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"]);
    /***/

  },

  /***/
  "./src/app/shell/explore/explore.component.ngfactory.js":
  /*!**************************************************************!*\
    !*** ./src/app/shell/explore/explore.component.ngfactory.js ***!
    \**************************************************************/

  /*! exports provided: RenderType_ExploreComponent, View_ExploreComponent_0, View_ExploreComponent_Host_0, ExploreComponentNgFactory */

  /***/
  function srcAppShellExploreExploreComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ExploreComponent", function () {
      return RenderType_ExploreComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ExploreComponent_0", function () {
      return View_ExploreComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ExploreComponent_Host_0", function () {
      return View_ExploreComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreComponentNgFactory", function () {
      return ExploreComponentNgFactory;
    });
    /* harmony import */


    var _explore_styles_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./explore.styles.scss.shim.ngstyle */
    "./src/app/shell/explore/explore.styles.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _components_search_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/search/search.component.ngfactory */
    "./src/app/shell/explore/components/search/search.component.ngfactory.js");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/shell/explore/components/search/search.component.ts");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @acaprojects/ngx-composer */
    "./node_modules/@acaprojects/ngx-composer/fesm2015/acaprojects-ngx-composer.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../../../node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory */
    "./node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory.js");
    /* harmony import */


    var _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @acaprojects/ngx-widgets */
    "./node_modules/@acaprojects/ngx-widgets/esm2015/acaprojects-ngx-widgets.js");
    /* harmony import */


    var _components_map_overlay_map_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/map-overlay/map-overlay.component.ngfactory */
    "./src/app/shell/explore/components/map-overlay/map-overlay.component.ngfactory.js");
    /* harmony import */


    var _components_map_overlay_map_overlay_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/map-overlay/map-overlay.component */
    "./src/app/shell/explore/components/map-overlay/map-overlay.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _components_timeline_timeline_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/timeline/timeline.component.ngfactory */
    "./src/app/shell/explore/components/timeline/timeline.component.ngfactory.js");
    /* harmony import */


    var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/timeline/timeline.component */
    "./src/app/shell/explore/components/timeline/timeline.component.ts");
    /* harmony import */


    var _explore_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./explore.component */
    "./src/app/shell/explore/explore.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ExploreComponent = [_explore_styles_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ExploreComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_ExploreComponent,
      data: {}
    });

    function View_ExploreComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "explore-search", [], null, [[null, "itemChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("itemChange" === en) {
          var pd_0 = (_co.model.found_item = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("itemChange" === en) {
          var pd_1 = _co.focus($event) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _components_search_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_ExploreSearchComponent_0"], _components_search_search_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_ExploreSearchComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _components_search_search_component__WEBPACK_IMPORTED_MODULE_3__["ExploreSearchComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]], {
        item: [0, "item"]
      }, {
        itemChange: "itemChange"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.found_item;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_ExploreComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "i", [["binding", ""], ["mod", "DeskManagement"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.desks.user = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.updateStyles() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.system;
        var currVal_1 = "DeskManagement";
        var currVal_2 = _co.model.user.win_id;
        var currVal_3 = _co.model.desks.user;

        _ck(_v, 1, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      }, null);
    }

    function View_ExploreComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "div", [["class", "desks"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["binding", ""], ["mod", "DeskManagement"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.desks.in_use = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.updateListeners() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 1, "i", [["binding", ""], ["mod", "DeskManagement"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.desks.reserved = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.updateStyles() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "i", [["binding", ""], ["mod", "DeskManagement"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.desks.list = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.updateStyles() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "i", [["binding", ""], ["mod", "DeskManagement"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.desks.usage = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "i", [["binding", ""], ["mod", "DeskManagement"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.desks.free = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 1, "i", [["binding", ""], ["mod", "DeskManagement"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.desks.count = $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 2, "i", [["binding", ""], ["exec", "manual_checkin"], ["mod", "DeskManagement"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        exec: [2, "exec"],
        params: [3, "params"],
        model: [4, "model"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpad"](17, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 1, "i", [["binding", ""], ["exec", "cancel_reservation"], ["mod", "DeskManagement"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        exec: [2, "exec"],
        params: [3, "params"],
        model: [4, "model"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.system;
        var currVal_1 = "DeskManagement";
        var currVal_2 = _co.model.level.active.id;
        var currVal_3 = _co.model.desks.in_use;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);

        var currVal_4 = _co.model.system;
        var currVal_5 = "DeskManagement";
        var currVal_6 = _co.model.level.active.id + ":reserved";
        var currVal_7 = _co.model.desks.reserved;

        _ck(_v, 4, 0, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_8 = _co.model.user;

        _ck(_v, 6, 0, currVal_8);

        var currVal_9 = _co.model.system;
        var currVal_10 = "DeskManagement";
        var currVal_11 = _co.model.level.active.id + ":desk_ids";
        var currVal_12 = _co.model.desks.list;

        _ck(_v, 8, 0, currVal_9, currVal_10, currVal_11, currVal_12);

        var currVal_13 = _co.model.system;
        var currVal_14 = "DeskManagement";
        var currVal_15 = _co.model.level.active.id + ":occupied_count";
        var currVal_16 = _co.model.desks.usage;

        _ck(_v, 10, 0, currVal_13, currVal_14, currVal_15, currVal_16);

        var currVal_17 = _co.model.system;
        var currVal_18 = "DeskManagement";
        var currVal_19 = _co.model.level.active.id + ":free_count";
        var currVal_20 = _co.model.desks.free;

        _ck(_v, 12, 0, currVal_17, currVal_18, currVal_19, currVal_20);

        var currVal_21 = _co.model.system;
        var currVal_22 = "DeskManagement";
        var currVal_23 = _co.model.level.active.id + ":desk_count";
        var currVal_24 = _co.model.desks.count;

        _ck(_v, 14, 0, currVal_21, currVal_22, currVal_23, currVal_24);

        var currVal_25 = _co.model.system;
        var currVal_26 = "DeskManagement";
        var currVal_27 = "manual_checkin";

        var currVal_28 = _ck(_v, 17, 0, _co.model.desks.id);

        var currVal_29 = _co.model.desks.checkin;

        _ck(_v, 16, 0, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29);

        var currVal_30 = _co.model.system;
        var currVal_31 = "DeskManagement";
        var currVal_32 = "cancel_reservation";
        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵEMPTY_ARRAY"];
        var currVal_34 = _co.model.desks.cancel;

        _ck(_v, 19, 0, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34);
      }, null);
    }

    function View_ExploreComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["bind", "today"], ["binding", ""], ["mod", "Bookings"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_v.context.$implicit.raw_bookings = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.processBookings(_v.context.$implicit) !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      })], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit.id;
        var currVal_1 = "Bookings";
        var currVal_2 = "today";
        var currVal_3 = _v.context.$implicit.raw_bookings;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      }, null);
    }

    function View_ExploreComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "bookings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.rooms;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_ExploreComponent_6(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "zones"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "i", [["binding", ""], ["mod", "FloorManagement"]], null, [[null, "modelChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("modelChange" === en) {
          var pd_0 = (_co.model.zone_usage = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("modelChange" === en) {
          var pd_1 = _co.updateStyles() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 737280, null, 0, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingDirective"], [_acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_6__["BindingService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        sys: [0, "sys"],
        mod: [1, "mod"],
        bind: [2, "bind"],
        model: [3, "model"]
      }, {
        modelChange: "modelChange"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.system;
        var currVal_1 = "FloorManagement";
        var currVal_2 = _co.model.level.active.id;
        var currVal_3 = _co.model.zone_usage;

        _ck(_v, 2, 0, currVal_0, currVal_1, currVal_2, currVal_3);
      }, null);
    }

    function View_ExploreComponent_8(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", "", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.found_user && _co.model.found_user.external && _co.model.found_user.location && _co.model.found_user.location.building ? _co.model.found_user.location.building.name + " - " : "";
        var currVal_1 = _co.model.level.active == null ? null : _co.model.level.active.name;

        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }

    function View_ExploreComponent_7(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "level mobile-only"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreComponent_8)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.level && _co.model.level.active;

        _ck(_v, 2, 0, currVal_0);
      }, null);
    }

    function View_ExploreComponent_10(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " - ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.found_user.location == null ? null : _co.model.found_user.location.building == null ? null : _co.model.found_user.location.building.name;
        var currVal_1 = _co.model.level.active == null ? null : _co.model.level.active.name;

        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }

    function View_ExploreComponent_9(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "level not-mobile"]], [[2, "old", null]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreComponent_10)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_1 = _co.model.level && _co.model.level.active;

        _ck(_v, 2, 0, currVal_1);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.model.old;

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_ExploreComponent_13(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\xA0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["is currently not locatable"]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.found_user.name;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_ExploreComponent_14(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 5, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\xA0"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["is located in another building"]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.found_user.name;

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_ExploreComponent_12(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreComponent_13)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreComponent_14)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](0, null, null, 0))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.model.found_user.external;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.model.found_user.external;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_ExploreComponent_15(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](2, null, ["", " is located on ", ""]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.found_user.name;
        var currVal_1 = _co.model.level.active == null ? null : _co.model.level.active.name;

        _ck(_v, 2, 0, currVal_0, currVal_1);
      });
    }

    function View_ExploreComponent_11(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "div", [["class", "not-located"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreComponent_12)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreComponent_15)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = !_co.model.found_user.location || !_co.model.found_user.location.map_id && !_co.model.found_user.location.x && !_co.model.found_user.location.y;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = !(!_co.model.found_user.location || !_co.model.found_user.location.map_id && !_co.model.found_user.location.x && !_co.model.found_user.location.y) && _co.model.found_user.pin_error;

        _ck(_v, 4, 0, currVal_1);
      }, null);
    }

    function View_ExploreComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 26, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 3, "div", [["class", "topbar"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 2, "div", [["class", "search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 18, "div", [["class", "map-space"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 6, "div", [["class", "bindings"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreComponent_6)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "div", [["class", "map"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 1, "map", [], null, [[null, "zoomChange"], [null, "centerChange"], [null, "event"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("zoomChange" === en) {
          var pd_0 = (_co.model.map.zoom = $event) !== false;
          ad = pd_0 && ad;
        }

        if ("zoomChange" === en) {
          var pd_1 = _co.updateZoom() !== false;
          ad = pd_1 && ad;
        }

        if ("centerChange" === en) {
          var pd_2 = (_co.model.map.center = $event) !== false;
          ad = pd_2 && ad;
        }

        if ("event" === en) {
          var pd_3 = _co.check($event) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_MapComponent_0"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_MapComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 704512, null, 0, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_9__["MapComponent"], [], {
        src: [0, "src"],
        css: [1, "css"],
        zoom: [2, "zoom"],
        poi: [3, "poi"],
        focus: [4, "focus"],
        listeners: [5, "listeners"],
        center: [6, "center"]
      }, {
        zoomChange: "zoomChange",
        centerChange: "centerChange",
        event: "event"
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreComponent_7)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreComponent_9)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_ExploreComponent_11)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, null, 1, "explore-map-overlay", [], null, null, null, _components_map_overlay_map_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["View_ExploreMapOverlayComponent_0"], _components_map_overlay_map_overlay_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["RenderType_ExploreMapOverlayComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 770048, null, 0, _components_map_overlay_map_overlay_component__WEBPACK_IMPORTED_MODULE_11__["ExploreMapOverlayComponent"], [_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]], {
        change: [0, "change"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, null, 2, "div", [["class", "timeline"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 1, "explore-timeline", [], null, [[null, "time"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("time" === en) {
          var pd_0 = _co.timeChange($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _components_timeline_timeline_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_ExploreTimelineComponent_0"], _components_timeline_timeline_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_ExploreTimelineComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 4440064, null, 0, _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_14__["ExploreTimelineComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, {
        time: "time"
      })], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.model.search;

        _ck(_v, 4, 0, currVal_0);

        var currVal_1 = _co.model.desks && _co.model.level && _co.model.level.active;

        _ck(_v, 8, 0, currVal_1);

        var currVal_2 = _co.model.rooms;

        _ck(_v, 10, 0, currVal_2);

        var currVal_3 = _co.model.zones && _co.model.level && _co.model.level.active;

        _ck(_v, 12, 0, currVal_3);

        var currVal_4 = _co.model.map.src;
        var currVal_5 = _co.model.map.styles;
        var currVal_6 = _co.model.map.zoom;
        var currVal_7 = _co.model.map.poi;
        var currVal_8 = _co.model.map.focus;
        var currVal_9 = _co.model.map.listeners;
        var currVal_10 = _co.model.map.center;

        _ck(_v, 15, 0, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10);

        var currVal_11 = !(_co.model.found_user && (!_co.model.found_user.location || !_co.model.found_user.location.map_id && !_co.model.found_user.location.x && !_co.model.found_user.location.y));

        _ck(_v, 17, 0, currVal_11);

        var currVal_12 = _co.model.found_user && _co.model.found_user.location && _co.model.found_user.external;

        _ck(_v, 19, 0, currVal_12);

        var currVal_13 = _co.model.found_user;

        _ck(_v, 21, 0, currVal_13);

        var currVal_14 = _co.model.change;

        _ck(_v, 23, 0, currVal_14);

        _ck(_v, 26, 0);
      }, null);
    }

    function View_ExploreComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-explore", [], null, null, null, View_ExploreComponent_0, RenderType_ExploreComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 245760, null, 0, _explore_component__WEBPACK_IMPORTED_MODULE_15__["ExploreComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__["MatDialog"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ExploreComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-explore", _explore_component__WEBPACK_IMPORTED_MODULE_15__["ExploreComponent"], View_ExploreComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/shell/explore/explore.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/shell/explore/explore.component.ts ***!
    \****************************************************/

  /*! exports provided: ExploreComponent */

  /***/
  function srcAppShellExploreExploreComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExploreComponent", function () {
      return ExploreComponent;
    });
    /* harmony import */


    var _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @acaprojects/ngx-widgets */
    "./node_modules/@acaprojects/ngx-widgets/esm2015/acaprojects-ngx-widgets.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/app.service */
    "./src/app/services/app.service.ts");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! dayjs */
    "./node_modules/dayjs/dayjs.min.js");
    /* harmony import */


    var dayjs__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _shared_components_room_info_room_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/components/room-info/room-info.component */
    "./src/app/shared/components/room-info/room-info.component.ts");
    /* harmony import */


    var _shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/globals/base.directive */
    "./src/app/shared/globals/base.directive.ts");
    /* harmony import */


    var _shared_components_desk_info_desk_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/components/desk-info/desk-info.component */
    "./src/app/shared/components/desk-info/desk-info.component.ts");
    /* harmony import */


    var _shared_utilities_booking_utilities__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/utilities/booking.utilities */
    "./src/app/shared/utilities/booking.utilities.ts");
    /* harmony import */


    var _shared_utility_class__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/utility.class */
    "./src/app/shared/utility.class.ts");
    /* harmony import */


    var _overlays_explore_booking_modal_explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../overlays/explore-booking-modal/explore-booking-modal.component */
    "./src/app/overlays/explore-booking-modal/explore-booking-modal.component.ts");

    var ExploreComponent =
    /*#__PURE__*/
    function (_shared_globals_base_4) {
      _inherits(ExploreComponent, _shared_globals_base_4);

      function ExploreComponent(route, router, service, _dialog) {
        var _this23;

        _classCallCheck(this, ExploreComponent);

        _this23 = _possibleConstructorReturn(this, _getPrototypeOf(ExploreComponent).call(this));
        _this23.route = route;
        _this23.router = router;
        _this23.service = service;
        _this23._dialog = _dialog;
        _this23.model = [];
        _this23.model.setting_list = [{
          id: 'desks',
          name: 'Desks Status'
        }, {
          id: 'rooms',
          name: 'Rooms Status'
        }, {
          id: 'teams',
          name: 'Team Tables'
        }, {
          id: 'zones',
          name: 'Zones Status'
        }];
        return _this23;
      }

      _createClass(ExploreComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this24 = this;

          this.show_time = undefined;
          this.subscription('router', this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
              _this24.service.set('APP.swipe_disabled', e.url.indexOf('explore') >= 0);
            } else if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
              if (_this24.model.zones) {
                _this24.model.zones.show = false;
              }

              if (_this24.model.map) {
                _this24.model.map.zoom = 100;
                _this24.model.map.center = {
                  x: .5,
                  y: .5
                };
              }

              _this24.clear();

              _this24.update();
            }
          }));
          this.subscription('params', this.route.paramMap.subscribe(function (params) {
            if (params.has('search')) {
              _this24.model.search = params.get('search');
            }
          }));
          this.service.set('BANNER.block_height', 0);
          this.subscription('query', this.route.queryParamMap.subscribe(function (params) {
            if (params.has('room_id')) {
              _this24.focusOnRoom(params.get('room_id'));
            }

            if (params.has('level')) {
              _this24.setLevelByID(params.get('level'));
            }

            if (params.has('level_id')) {
              _this24.setLevelByID(params.get('level_id'));
            }

            if (params.has('back')) {
              _this24.model.back = params.get('back');
            }
          }));
          this.subscription('user', this.service.Users.listen('user', function (item) {
            return _this24.model.user = item;
          }));
          this.model.map = {};
          this.model.show = {
            rooms: true,
            desks: true
          };
          this.model.map.poi = [];
          this.model.desks = {};
          this.model.zones = {};
          this.model.settings = {};
          this.service.set('EXPLORE.show.desks', this.model.show.desks);
          this.service.set('EXPLORE.show.rooms', this.model.show.rooms);
          this.subscription('exp_filter', this.service.listen('EXPLORE.filters', function () {
            return _this24.update();
          }));
          this.subscription('exp_features', this.service.listen('EXPLORE.map.hide', function (a) {
            _this24.update();
          }));
          this.subscription('exp_settings', this.service.listen('EXPLORE.settings', function (value) {
            return _this24.updateSettings(value);
          }));
          this.subscription('exp_level', this.service.listen('EXPLORE.level', function (value) {
            return _this24.setLevelByID(value);
          }));
          this.model.colours = {
            rooms: {},
            desks: {},
            zones: {}
          };

          if (this.model.keys) {
            this.model.keys.show = false;
          }

          this.clear();
          this.interval('time-update', function () {
            _this24.timeChange(_this24.show_time);
          }, 60 * 1000);
          this.service.set('APP.swipe_disabled', true);
          this.subscription('building', this.service.Buildings.listen(function (bld) {
            if (bld) {
              _this24.timeout('set_building', function () {
                bld = _this24.service.Buildings.current();
                var active = _this24.model.level ? _this24.model.level.active : null;
                _this24.model.level = {};
                _this24.model.system = bld.systems.desks;
                _this24.model.focus_user = null;
                _this24.model.found_room = null;
                _this24.model.info = null;
                _this24.model.level.list = bld.levels;
                _this24.model.rooms = _this24.service.Rooms.list();
                _this24.model.room_pin = null;

                if (_this24.model.level.list) {
                  _this24.model.level.names = [];
                  var _iteratorNormalCompletion11 = true;
                  var _didIteratorError11 = false;
                  var _iteratorError11 = undefined;

                  try {
                    for (var _iterator11 = _this24.model.level.list[Symbol.iterator](), _step11; !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                      var level = _step11.value;

                      _this24.model.level.names.push(level.name);
                    }
                  } catch (err) {
                    _didIteratorError11 = true;
                    _iteratorError11 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                        _iterator11.return();
                      }
                    } finally {
                      if (_didIteratorError11) {
                        throw _iteratorError11;
                      }
                    }
                  }

                  var lvl = null;

                  if (active) {
                    lvl = _this24.setLevelByID(active.id);
                  }

                  if (!lvl && _this24.model.level.list.length > 0) {
                    _this24.setLevel(_this24.model.level.list[0]);
                  }
                }

                if (_this24.model.found_user) {
                  _this24.focusUser(_this24.model.found_user);
                }

                _this24.update();
              });
            }
          }));
          this.init();
        }
      }, {
        key: "init",
        value: function init() {
          var _this25 = this;

          if (!this.service.ready()) {
            this.timeout('init', function () {
              return _this25.init();
            }, 500);
          }

          this.model.colours = {};
          this.model.colours.rooms = this.service.Settings.get('app.colors.rooms') || {};
          this.model.colours.desks = this.service.Settings.get('app.colors.desks') || {};
          this.model.colours.zones = this.service.Settings.get('app.colors.zones') || {};
          this.model.keys = this.service.Settings.get('app.map_keys') || {};
          this.model.keys.types = Object.keys(this.model.keys);
          this.model.zones.enabled = this.service.Settings.get('app.zones.enabled');
          this.model.zones.toggle = this.service.Settings.get('app.zones.toggle');
          this.model.settings = this.service.Settings.get('app.explore') || {};
          this.model.old = this.service.Settings.get('app.explore.old_overlay');

          if (this.model.zones.enabled && this.model.zones.toggle) {
            this.model.keys.types = [this.model.zones.toggle];
          }

          if (this.model.keys) {
            this.model.keys.list = (this.model.keys.room || []).concat(this.model.keys.general || []);
          }

          this.subscription('rooms', this.service.Rooms.listen('list', function () {
            _this25.model.rooms = _this25.service.Rooms.list();

            _this25.update();
          }));
          this.model.map_bookable = this.service.Settings.get('app.map.bookings');
          this.interval('rooms', function () {
            return _this25.updateRoomState();
          }, 25 * 1000);
          this.service.Analytics.screen('Explore');
          this.service.Analytics.page("/explore".concat(this.model.search ? '/' + this.model.search : ''));
          this.timeout('zoom', function () {
            return _this25.model.zoom += 1;
          }, 300);
        }
      }, {
        key: "focusOnRoom",
        value: function focusOnRoom(id) {
          var _this26 = this;

          var tries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

          if (tries > 10) {
            return;
          }

          if (this.model.rooms && this.model.rooms.length > 0) {
            var _iteratorNormalCompletion12 = true;
            var _didIteratorError12 = false;
            var _iteratorError12 = undefined;

            try {
              for (var _iterator12 = this.model.rooms[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                var rm = _step12.value;

                if (rm.id === id) {
                  this.focusSpace(rm);
                  break;
                }
              }
            } catch (err) {
              _didIteratorError12 = true;
              _iteratorError12 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                  _iterator12.return();
                }
              } finally {
                if (_didIteratorError12) {
                  throw _iteratorError12;
                }
              }
            }
          } else {
            this.timeout('focus_room', function () {
              return _this26.focusOnRoom(id, tries++);
            }, 300 * tries++);
          }
        }
      }, {
        key: "toggle",
        value: function toggle(name) {
          var _this27 = this;

          this.timeout("toggle_".concat(name), function () {
            return _this27.model[name].show = !_this27.model[name].show;
          }, 100);
        }
      }, {
        key: "setLevelByID",
        value: function setLevelByID(id) {
          var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (id && this.model.level && this.model.level.list) {
            var _iteratorNormalCompletion13 = true;
            var _didIteratorError13 = false;
            var _iteratorError13 = undefined;

            try {
              for (var _iterator13 = this.model.level.list[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                var lvl = _step13.value;

                if (lvl.id === id) {
                  this.setLevel(lvl, emit);
                  return lvl;
                }
              }
            } catch (err) {
              _didIteratorError13 = true;
              _iteratorError13 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                  _iterator13.return();
                }
              } finally {
                if (_didIteratorError13) {
                  throw _iteratorError13;
                }
              }
            }
          }

          return null;
        }
      }, {
        key: "setLevel",
        value: function setLevel(lvl) {
          var emit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          if (lvl && (this.model.level && this.model.level.list && this.model.level.list.indexOf(lvl) >= 0 || force)) {
            var previous_lvl = this.model.level.active;
            this.model.level.active = lvl;
            this.model.level.index = this.model.level.list.indexOf(lvl);
            this.model.map.src = lvl.map_url;
            this.model.room_pin = null;
            this.model.map.focus = null;
            this.update();

            if (emit && (!previous_lvl || previous_lvl.id !== lvl.id)) {
              this.service.set('EXPLORE.level', lvl.id);
            }
          }
        }
      }, {
        key: "updateLevel",
        value: function updateLevel() {
          var _iteratorNormalCompletion14 = true;
          var _didIteratorError14 = false;
          var _iteratorError14 = undefined;

          try {
            for (var _iterator14 = this.model.level.list[Symbol.iterator](), _step14; !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
              var lvl = _step14.value;

              if (this.model.map.src === lvl.map_url) {
                this.model.level.active = lvl;
                break;
              }
            }
          } catch (err) {
            _didIteratorError14 = true;
            _iteratorError14 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
                _iterator14.return();
              }
            } finally {
              if (_didIteratorError14) {
                throw _iteratorError14;
              }
            }
          }

          this.update();
        }
      }, {
        key: "updateSettings",
        value: function updateSettings(settings) {
          this.model.map.zoom = settings && settings.zoom !== undefined ? settings.zoom : this.model.map.zoom;
          this.model.map.center = settings && settings.center !== undefined ? settings.center : this.model.map.center;

          if (settings && settings.center) {
            delete settings.center;
          }

          this.update();
        }
      }, {
        key: "updateRoomState",
        value: function updateRoomState() {
          if (this.model.rooms) {
            var _iteratorNormalCompletion15 = true;
            var _didIteratorError15 = false;
            var _iteratorError15 = undefined;

            try {
              for (var _iterator15 = this.model.rooms[Symbol.iterator](), _step15; !(_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done); _iteratorNormalCompletion15 = true) {
                var rm = _step15.value;
                this.processBookings(rm, false);
              }
            } catch (err) {
              _didIteratorError15 = true;
              _iteratorError15 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
                  _iterator15.return();
                }
              } finally {
                if (_didIteratorError15) {
                  throw _iteratorError15;
                }
              }
            }

            this.update();
          }
        }
      }, {
        key: "processBookings",
        value: function processBookings(room) {
          var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

          if (room.raw_bookings) {
            delete room.bookings;
            this.service.Rooms.processRoom(room);

            if (update) {
              this.update();
            }

            this.model.change = !this.model.change;
          }
        }
      }, {
        key: "updateZoom",
        value: function updateZoom() {
          var settings = this.service.get('EXPLORE.settings');
          settings.zoom = this.model.map.zoom;
          this.service.set('EXPLORE.settings', settings);
        }
      }, {
        key: "update",
        value: function update() {
          if (this.model.zones && this.model.show) {
            this.model.zones.show = this.model.show.zones;
          }

          if (!this.model.show) {
            this.model.show = {};
          }

          this.model.show.desks = this.service.get('EXPLORE.show.desks');
          this.model.show.rooms = this.service.get('EXPLORE.show.rooms');
          this.model.show.teams = this.service.get('EXPLORE.show.teams');

          if (this.model.zones && this.model.zones.enabled) {
            this.model.zones.show = this.service.get('EXPLORE.show.zones');

            if (this.model.zones.toggle) {
              this.model.keys.types = [this.model.zones.show ? 'zone' : this.model.zones.toggle];
            }
          }

          this.updateListeners();
        }
      }, {
        key: "updateState",
        value: function updateState() {
          if (this.model.show) {
            this.service.set('EXPLORE.show.desks', this.model.show.desks);
            this.service.set('EXPLORE.show.rooms', this.model.show.rooms);
            this.service.set('EXPLORE.show.teams', this.model.show.teams);
          }

          if (this.model.zones) {
            this.service.set('EXPLORE.show.zones', this.model.zones.show);
          }

          this.update();
        }
      }, {
        key: "updateListeners",
        value: function updateListeners() {
          var _this28 = this;

          this.timeout('update_listeners', function () {
            _this28.model.map.listeners = [];

            if (_this28.model.rooms && _this28.model.level && _this28.model.level.active && _this28.model.level.active.id) {
              var active_rooms = _this28.model.rooms.filter(function (i) {
                return i.zones.indexOf(_this28.model.level.active.id) >= 0;
              });

              var _iteratorNormalCompletion16 = true;
              var _didIteratorError16 = false;
              var _iteratorError16 = undefined;

              try {
                var _loop = function _loop() {
                  var room = _step16.value;

                  _this28.model.map.listeners.push({
                    id: "area-".concat(room.map_id, "-status"),
                    event: 'mouseenter',
                    callback: function callback() {
                      _this28.timeout('mouseenter', function () {
                        _this28.model.info = room;

                        _this28.updatePointsOfInterest();
                      }, 50);
                    }
                  });

                  _this28.model.map.listeners.push({
                    id: "area-".concat(room.map_id, "-status"),
                    event: 'mouseleave',
                    callback: function callback() {
                      _this28.timeout('mouseleave', function () {
                        _this28.model.info = null;

                        _this28.updatePointsOfInterest();
                      }, 50);
                    }
                  });

                  if (room.bookable) {
                    var callback = function callback() {
                      _this28.model.selected = null;
                      _this28.model.display = null;

                      _this28.book(room);
                    };

                    _this28.model.map.listeners.push({
                      id: "area-".concat(room.map_id, "-status"),
                      event: 'mouseup',
                      callback: callback
                    });

                    _this28.model.map.listeners.push({
                      id: "area-".concat(room.map_id, "-status"),
                      event: 'touchend',
                      callback: callback
                    });
                  }
                };

                for (var _iterator16 = active_rooms[Symbol.iterator](), _step16; !(_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done); _iteratorNormalCompletion16 = true) {
                  _loop();
                }
              } catch (err) {
                _didIteratorError16 = true;
                _iteratorError16 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
                    _iterator16.return();
                  }
                } finally {
                  if (_didIteratorError16) {
                    throw _iteratorError16;
                  }
                }
              }
            }

            if (_this28.model.desks && _this28.model.desks.in_use) {
              var _iteratorNormalCompletion17 = true;
              var _didIteratorError17 = false;
              var _iteratorError17 = undefined;

              try {
                var _loop2 = function _loop2() {
                  var desk = _step17.value;

                  _this28.model.map.listeners.push({
                    id: "".concat(desk),
                    event: 'mouseenter',
                    callback: function callback() {
                      return _this28.setDesk(desk);
                    }
                  });

                  _this28.model.map.listeners.push({
                    id: "".concat(desk),
                    event: 'mouseleave',
                    callback: function callback() {
                      return _this28.setDesk(null);
                    }
                  });
                };

                for (var _iterator17 = _this28.model.desks.in_use[Symbol.iterator](), _step17; !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                  _loop2();
                }
              } catch (err) {
                _didIteratorError17 = true;
                _iteratorError17 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
                    _iterator17.return();
                  }
                } finally {
                  if (_didIteratorError17) {
                    throw _iteratorError17;
                  }
                }
              }

              var _iteratorNormalCompletion18 = true;
              var _didIteratorError18 = false;
              var _iteratorError18 = undefined;

              try {
                var _loop3 = function _loop3() {
                  var desk = _step18.value;

                  _this28.model.map.listeners.push({
                    id: "".concat(desk),
                    event: 'mouseenter',
                    callback: function callback() {
                      return _this28.setDesk(desk);
                    }
                  });

                  _this28.model.map.listeners.push({
                    id: "".concat(desk),
                    event: 'mouseleave',
                    callback: function callback() {
                      return _this28.setDesk(null);
                    }
                  });
                };

                for (var _iterator18 = (_this28.model.desks.reserved || [])[Symbol.iterator](), _step18; !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                  _loop3();
                }
              } catch (err) {
                _didIteratorError18 = true;
                _iteratorError18 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
                    _iterator18.return();
                  }
                } finally {
                  if (_didIteratorError18) {
                    throw _iteratorError18;
                  }
                }
              }
            }

            _this28.model.desk = null;

            _this28.updateStyles();

            _this28.updatePointsOfInterest();
          });
        }
      }, {
        key: "setDesk",
        value: function setDesk(desk) {
          this.model.desk = desk;
          this.updatePointsOfInterest();
        }
      }, {
        key: "updateStyles",
        value: function updateStyles() {
          var _this29 = this;

          this.timeout('styles', function () {
            _this29.model.style = {};
            _this29.model.map.styles = {};
            _this29.model.style.general = {};

            _this29.updateRoomStyles();

            _this29.updateDeskStyles();

            _this29.updateZoneStyles();

            _this29.updateFeatureStyles();

            for (var k in _this29.model.style) {
              if (_this29.model.style.hasOwnProperty(k) && _this29.model.style[k]) {
                for (var i in _this29.model.style[k]) {
                  if (_this29.model.style[k].hasOwnProperty(i)) {
                    _this29.model.map.styles[i] = _this29.model.style[k][i];
                  }
                }
              }
            }

            _this29.clearTimeout('styles');
          });
        }
      }, {
        key: "updateRoomStyles",
        value: function updateRoomStyles() {
          var _this30 = this;

          this.model.style.rooms = {};

          if (!this.model.show.rooms) {
            this.model.style.rooms["[id$=\"-status\"]"] = {
              opacity: '0'
            };
            return;
          }

          var now = dayjs__WEBPACK_IMPORTED_MODULE_5__(this.show_time);
          var bld = this.service.Buildings.current();
          var colours = this.model.colours.rooms || {};

          if (this.model.rooms && this.model.rooms.length > 0) {
            var active_rooms = this.model.rooms.filter(function (i) {
              return i.zones.indexOf(_this30.model.level.active.id) >= 0;
            });
            var _iteratorNormalCompletion19 = true;
            var _didIteratorError19 = false;
            var _iteratorError19 = undefined;

            try {
              for (var _iterator19 = active_rooms[Symbol.iterator](), _step19; !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                var room = _step19.value;
                var color = this.model.colours.rooms['not-bookable'] || '#ccc';
                var block = this.service.Bookings.getNextFreeBlock(room.bookings, now.valueOf(), 2);
                var rules = Object(_shared_utilities_booking_utilities__WEBPACK_IMPORTED_MODULE_9__["rulesForSpace"])({
                  user: this.service.Users.current(),
                  space: room,
                  time: now.valueOf(),
                  duration: 60,
                  rules: bld.booking_rules
                }); // Check booking rules

                if (rules) {
                  room.book_type = rules.auto_approve ? 'Book' : 'Request';
                }

                var in_use = block && dayjs__WEBPACK_IMPORTED_MODULE_5__(block.start).isAfter(now);

                if (room.bookable && !rules.hide) {
                  color = in_use ? colours['unavailable'] || '#E53935' : room.book_type === 'Request' ? colours['pending'] || '#fbc02d' : colours['available'] || '#4CAF50';
                }

                this.model.style.rooms["#area-".concat(room.map_id, "-status")] = {
                  fill: color,
                  opacity: '0.8'
                };
              }
            } catch (err) {
              _didIteratorError19 = true;
              _iteratorError19 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion19 && _iterator19.return != null) {
                  _iterator19.return();
                }
              } finally {
                if (_didIteratorError19) {
                  throw _iteratorError19;
                }
              }
            }
          } else {
            this.timeout('room_styles', function () {
              return _this30.updateRoomStyles();
            });
          }
        }
      }, {
        key: "updateDeskStyles",
        value: function updateDeskStyles() {
          this.model.style.desks = {};
          var colours = this.model.colours.desks || {};

          if (!this.model.show.desks) {
            this.model.style.desks["[id^=\"table-\"]"] = {
              fill: colours['not-bookable-fill'] || '#fff',
              stroke: colours['not-bookable-stroke'] || '#ccc'
            };
            return;
          }

          if (this.model.found_user && this.model.found_user.location && this.model.found_user.location.fixed) {
            var loc = this.model.found_user.location;
            this.model.style.desks["#".concat(loc.map_id)] = {
              fill: colours['unavailable-fill'] || '#fff',
              stroke: colours['unavailable-stroke'] || '#ccc'
            };
          }

          if (this.model.desks) {
            var u_desk = this.model.desks.user;
            var list = this.model.desks.in_use || [];
            var reserved = this.model.desks.reserved;

            if (this.model.desks.list) {
              var _iteratorNormalCompletion20 = true;
              var _didIteratorError20 = false;
              var _iteratorError20 = undefined;

              try {
                for (var _iterator20 = this.model.desks.list[Symbol.iterator](), _step20; !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                  var label = _step20.value;

                  if (label) {
                    var desk = "".concat(label);
                    var desk_obj = {
                      level: this.model.active,
                      id: desk,
                      name: "Desk ".concat(label.split('-')[1])
                    };
                    var is_reserved = reserved && reserved.indexOf(label) >= 0;
                    var in_use = list && list.indexOf(label) >= 0;
                    var users_desk = u_desk && u_desk.connected && u_desk.desk_id === label;
                    this.model.style.desks["#".concat(desk)] = {
                      fill: colours['available-fill'] || '#4CAF50',
                      stroke: colours['available-stroke'] || '#4CAF50'
                    };

                    if (in_use || is_reserved) {
                      var type = users_desk ? 'user' : is_reserved ? 'reserved' : 'unavailable';
                      this.model.style.desks["#".concat(desk)].fill = colours["".concat(type, "-fill")] || colours['unavailable-fill'] || '#fff';
                      this.model.style.desks["#".concat(desk)].stroke = colours["".concat(type, "-stroke")] || colours['unavailable-stroke'] || '#ccc';
                    }
                  }
                }
              } catch (err) {
                _didIteratorError20 = true;
                _iteratorError20 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion20 && _iterator20.return != null) {
                    _iterator20.return();
                  }
                } finally {
                  if (_didIteratorError20) {
                    throw _iteratorError20;
                  }
                }
              }
            }
          }
        }
      }, {
        key: "updateZoneStyles",
        value: function updateZoneStyles() {
          this.model.style.zones = {};
          var colors = this.model.colours.zones || {};
          var lvl = this.model.level.active;

          if (!this.model.zones || !this.model.zones.enabled || !this.model.zones.show) {
            this.model.style.zones['#Zones'] = {
              opacity: '0'
            };
          }

          if (this.model.colours && this.model.level && lvl) {
            this.model.style.zones['[id^="zone"]'] = {
              fill: colors[lvl.defaults.zone] || colors.default || '#317c36'
            };
          }

          if (this.model.zone_usage) {
            for (var zone in this.model.zone_usage) {
              if (this.model.zone_usage.hasOwnProperty(zone)) {
                var min_percent = lvl.defaults.zone_min || 0;
                var zone_usage = this.model.zone_usage[zone].people_count / this.model.zone_usage[zone].capacity * 100;
                var percent = Math.max(min_percent, zone_usage);
                var fill = percent < 40 ? colors.low || '#317c36' : percent < 75 ? colors.medium || '#f4a81d' : colors.high || '#cd212e';
                this.model.map.styles["#".concat(zone)] = {
                  fill: fill
                };
                this.model.map.styles["#".concat(zone, "-status")] = {
                  fill: fill
                };
              }
            }
          }
        }
      }, {
        key: "updateFeatureStyles",
        value: function updateFeatureStyles() {
          this.model.style.features = {};
          var hidden_features = this.service.get('EXPLORE.map.hide') || [];
          var _iteratorNormalCompletion21 = true;
          var _didIteratorError21 = false;
          var _iteratorError21 = undefined;

          try {
            for (var _iterator21 = hidden_features[Symbol.iterator](), _step21; !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
              var id = _step21.value;
              this.model.style.features["#".concat(id)] = {
                opacity: '0'
              };
            }
          } catch (err) {
            _didIteratorError21 = true;
            _iteratorError21 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion21 && _iterator21.return != null) {
                _iterator21.return();
              }
            } finally {
              if (_didIteratorError21) {
                throw _iteratorError21;
              }
            }
          }
        }
      }, {
        key: "book",
        value: function book(room) {
          var _this31 = this;

          var opened = false;
          this.timeout('opened', function () {
            return opened = true;
          });
          var date = dayjs__WEBPACK_IMPORTED_MODULE_5__(this.show_time);
          var bld = this.service.Buildings.list().find(function (i) {
            return i.id === room.level.bld_id;
          }) || {};
          var rules = Object(_shared_utilities_booking_utilities__WEBPACK_IMPORTED_MODULE_9__["rulesForSpace"])({
            user: this.service.Users.current(),
            space: room,
            time: date.valueOf(),
            duration: 60,
            rules: bld.booking_rules
          }); // Check booking rules

          if (rules) {
            if (rules.hide) {
              this.service.notifyInfo("You do not have permission to book room \"".concat(room.name, "\""));
              return;
            }

            room.book_type = rules.auto_approve ? 'Book' : 'Request';
          }

          var current = room.bookings.find(function (booking) {
            var day = dayjs__WEBPACK_IMPORTED_MODULE_5__(booking.date);
            return date.isAfter(day, 's') && date.isBefore(day.add(booking.duration, 'm'), 'm');
          });

          if (current && current.all_day) {
            return this.service.notifyInfo('The selected room is booked all day. Please select another date from the timeline and try again.');
          }

          var ref = this._dialog.open(_overlays_explore_booking_modal_explore_booking_modal_component__WEBPACK_IMPORTED_MODULE_11__["ExploreBookingModalComponent"], {
            data: {
              space: room,
              date: this.show_time
            }
          });

          ref.componentInstance.event.subscribe(function (event) {
            if (event.reason === 'done' && event.metadata === 'new') {
              localStorage.setItem('STAFF.booking_form', JSON.stringify({
                id: 'ad-hoc',
                room: [Object.assign({}, room, {
                  bookings: []
                })],
                date: _this31.show_time
              }));

              _this31.service.navigate(['/book']);

              ref.close();
            }
          });
        }
      }, {
        key: "check",
        value: function check(e) {
          if (e.type === 'warning' && this.model.found_user && this.model.found_user.location && this.model.found_user.location.map_id && e.msg.indexOf(this.model.found_user.location.map_id) >= 0) {
            this.model.found_user.pin_error = true;
          }
        }
      }, {
        key: "focus",
        value: function focus(item) {
          this.model.map.zoom = 100;
          this.model.map.center = {
            x: .5,
            y: .5
          };

          if (item.type) {
            this.focusUser(item);
          } else {
            this.focusSpace(item);
          }
        }
      }, {
        key: "focusUser",
        value: function focusUser(user) {
          var _this32 = this;

          if (user) {
            this.model.found_item = null;
            this.model.focus_room = null;

            if (user.type === 'role') {
              this.updatePointsOfInterest();
              this.service.Users.show(user.email).then(function (u) {
                _this32.locate(u);
              }, function (err) {
                return null;
              });
            } else {
              this.locate(user);
            }
          }
        }
      }, {
        key: "locate",
        value: function locate(user) {
          var _this33 = this;

          user.location = null;
          this.model.found_user = user;
          this.service.Users.location(user.id, user.win_id).then(function (location) {
            _this33.model.found_user.location = location;
            var found = false;

            var bld = _this33.service.Buildings.current(); // Cross building location finding is enabled


            if (_this33.model.settings.cblf) {
              var level = _this33.service.Buildings.getLevel(location.level);

              if (level) {
                var _iteratorNormalCompletion22 = true;
                var _didIteratorError22 = false;
                var _iteratorError22 = undefined;

                try {
                  for (var _iterator22 = (bld ? bld.levels : _this33.model.level.list)[Symbol.iterator](), _step22; !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                    var lvl = _step22.value;

                    if (level.id === lvl.id) {
                      _this33.setLevel(lvl);

                      found = true;
                      break;
                    }
                  } // Level is in another building

                } catch (err) {
                  _didIteratorError22 = true;
                  _iteratorError22 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion22 && _iterator22.return != null) {
                      _iterator22.return();
                    }
                  } finally {
                    if (_didIteratorError22) {
                      throw _iteratorError22;
                    }
                  }
                }

                if (!found) {
                  _this33.setLevel(level, false, true);

                  _this33.model.found_user.location.building = _this33.service.Buildings.get(level.bld_id);
                  _this33.model.found_user.external = true;
                  found = true;
                }
              }
            } else {
              // Only locate users in the current building
              var _iteratorNormalCompletion23 = true;
              var _didIteratorError23 = false;
              var _iteratorError23 = undefined;

              try {
                for (var _iterator23 = (bld ? bld.levels : _this33.model.level.list)[Symbol.iterator](), _step23; !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                  var _lvl = _step23.value;

                  if (location.level === _lvl.id) {
                    _this33.setLevel(_lvl);

                    found = true;
                    break;
                  }
                }
              } catch (err) {
                _didIteratorError23 = true;
                _iteratorError23 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion23 && _iterator23.return != null) {
                    _iterator23.return();
                  }
                } finally {
                  if (_didIteratorError23) {
                    throw _iteratorError23;
                  }
                }
              }
            }

            if (found) {
              _this33.model.map.focus = {
                coordinates: !location.fixed ? {
                  x: location.x,
                  y: location.y
                } : null,
                id: location.map_id,
                zoom: 0
              };
            } else {
              _this33.model.found_user.location = null;
              _this33.model.found_user.external = true;
            }

            _this33.updatePointsOfInterest();

            _this33.timeout('focus', function () {
              return _this33.model.map.zoom = 100;
            });
          }, function (err) {
            _this33.model.found_user.location = null;

            _this33.updatePointsOfInterest();
          });
        }
      }, {
        key: "focusSpace",
        value: function focusSpace(item) {
          var _this34 = this;

          if (!this.model || !this.model.level || !this.model.level.list || !item) {
            return;
          }

          var focus = "".concat(item.prefix === false ? '' : 'area-').concat(item.map_id).concat(item.bookable ? '-status' : '-status');
          var lvl = item.level;

          if (lvl) {
            var _iteratorNormalCompletion24 = true;
            var _didIteratorError24 = false;
            var _iteratorError24 = undefined;

            try {
              for (var _iterator24 = this.model.level.list[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                var level = _step24.value;

                if (lvl.id === level.id) {
                  this.setLevel(level);
                  this.timeout('focus_space', function () {
                    return _this34.model.map.focus = {
                      id: focus,
                      zoom: 150
                    };
                  }, 100);
                  break;
                }
              }
            } catch (err) {
              _didIteratorError24 = true;
              _iteratorError24 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion24 && _iterator24.return != null) {
                  _iterator24.return();
                }
              } finally {
                if (_didIteratorError24) {
                  throw _iteratorError24;
                }
              }
            }

            this.timeout('update_space', function () {
              _this34.model.found_user = null;
              _this34.model.focus_room = item;

              _this34.updatePointsOfInterest();
            }, 20);
          }
        }
      }, {
        key: "clear",
        value: function clear() {
          this.model.found_item = null;
          this.model.focus_room = null;
          this.model.found_user = null;
          this.model.info = null;
          this.updatePointsOfInterest();
        }
      }, {
        key: "updatePointsOfInterest",
        value: function updatePointsOfInterest() {
          var _this35 = this;

          this.timeout('poi', function () {
            _this35.model.map.poi = [];
            _this35.model.toggle = !_this35.model.toggle;

            if (_this35.model.found_user && _this35.model.found_user.location && _this35.model.found_user.location.level) {
              if (_this35.model.found_user.location.level === _this35.model.level.active.id) {
                var loc = _this35.model.found_user.location;

                _this35.model.map.poi.push({
                  id: loc.map_id || "person-".concat(_this35.model.found_user.id),
                  content: loc.fixed ? _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_0__["MapPinComponent"] : _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_0__["MapRangeComponent"],
                  coordinates: !loc.fixed ? {
                    x: loc.x,
                    y: loc.y
                  } : null,
                  data: {
                    text: "".concat(_this35.model.found_user.name, " is here"),
                    back: '#F44336',
                    diameter: loc.confidence * 2
                  }
                });
              }
            }

            if (_this35.model.info) {
              var room = _this35.model.info;
              var today = dayjs__WEBPACK_IMPORTED_MODULE_5__(_this35.show_time).endOf('m');
              var bookings = room.bookings.filter(function (b) {
                return dayjs__WEBPACK_IMPORTED_MODULE_5__(b.date).isSame(today, 'd') || b.all_day;
              });

              var block = _this35.service.Bookings.getNextFreeBlock(bookings, today.valueOf(), 2);

              var current = bookings.find(function (b) {
                var start = dayjs__WEBPACK_IMPORTED_MODULE_5__(b.date).subtract(b.setup, 's');
                var end = dayjs__WEBPACK_IMPORTED_MODULE_5__(b.date).add(b.duration, 'm').add(b.breakdown, 's');
                return today.isAfter(start, 's') && today.isBefore(end, 's');
              });
              var next = bookings.find(function (b) {
                return today.isBefore(dayjs__WEBPACK_IMPORTED_MODULE_5__(b.date), 'm');
              });
              var endOfDay = dayjs__WEBPACK_IMPORTED_MODULE_5__(_this35.show_time).endOf('d');

              var bld = _this35.service.Buildings.current();

              if (current && block && block.start !== -1) {
                _this35.model.selected_time = "Booked until ".concat(dayjs__WEBPACK_IMPORTED_MODULE_5__(block.start).format('h:mmA'));

                if (current.all_day || current.duration > 23 * 60) {
                  _this35.model.selected_time = 'Booked all day';
                }
              } else if (current) {
                _this35.model.selected_time = "Booked until ".concat(current.display.end);

                if (current.all_day || current.duration > 23 * 60) {
                  _this35.model.selected_time = 'Booked all day';
                }
              } else if (block && block.end >= 0 && dayjs__WEBPACK_IMPORTED_MODULE_5__(block.end).isSame(endOfDay, 'm')) {
                var end = dayjs__WEBPACK_IMPORTED_MODULE_5__(block.end);
                var dur = Math.floor(end.diff(today, 'm'));
                _this35.model.selected_time = "Free until ".concat(end.format('h:mmA'));

                if (dur < 30) {
                  if (block.end < 0 || !dayjs__WEBPACK_IMPORTED_MODULE_5__(block.end).isSame(endOfDay, 'm')) {
                    _this35.model.selected_time += "<br>Next available at tomorrow";
                  } else {
                    var next_blk = _this35.service.Bookings.getNextFreeBlock(bookings, block.end);

                    _this35.model.selected_time += "<br>Next available at ".concat(dayjs__WEBPACK_IMPORTED_MODULE_5__(next_blk.start).format('h:mmA'));
                  }
                }
              } else if (!current && next && block) {
                _this35.model.selected_time = "Free until ".concat(dayjs__WEBPACK_IMPORTED_MODULE_5__(block.end).format('h:mmA'));

                var _next_blk = _this35.service.Bookings.getNextFreeBlock(bookings, next.date);

                if (block.start > 0) {
                  _this35.model.selected_time += "<br>Next available at ".concat(dayjs__WEBPACK_IMPORTED_MODULE_5__(_next_blk.start).format('h:mmA'));
                }
              } else {
                _this35.model.selected_time = "Free today";
              }

              var rules = Object(_shared_utilities_booking_utilities__WEBPACK_IMPORTED_MODULE_9__["rulesForSpace"])({
                user: _this35.service.Users.current(),
                space: room,
                time: today.valueOf(),
                duration: 60,
                rules: bld.booking_rules
              });

              if (!rules.auto_approve) {
                _this35.model.selected_time += "<br>Available by request";
              }

              _this35.model.display = null;

              _this35.model.map.poi.push({
                id: "area-".concat(room.map_id, "-status"),
                content: _shared_components_room_info_room_info_component__WEBPACK_IMPORTED_MODULE_6__["RoomInfoComponent"],
                data: {
                  room: Object.assign({}, room, {
                    bookable: room.bookable && !rules.hide
                  }),
                  display: {
                    time: _this35.model.selected_time
                  },
                  available: !current
                }
              });
            }

            if (_this35.model.desk) {
              _this35.model.map.poi.push({
                id: _this35.model.desk,
                content: _shared_components_desk_info_desk_info_component__WEBPACK_IMPORTED_MODULE_8__["DeskInfoComponent"],
                data: {
                  system: _this35.model.system,
                  desk_id: _this35.model.desk
                }
              });
            }

            if (_this35.model.focus_room && _this35.model.focus_room.level.id === _this35.model.level.active.id) {
              var rm = _this35.model.focus_room;

              _this35.model.map.poi.push({
                id: "".concat(rm.prefix === false ? '' : 'area-').concat(rm.map_id).concat(rm.bookable ? '-status' : '-status'),
                prefix: 'pin',
                content: _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_0__["MapPinComponent"],
                data: {
                  back: _this35.model.colours.rooms.pin || '#03A9F4',
                  text: _this35.model.focus_room.name
                }
              });
            }

            _this35.clearTimeout('poi');
          });
        }
      }, {
        key: "back",
        value: function back() {
          if (this.model.back) {
            this.service.navigate(this.model.back);
          } else {
            this.service.back();
          }
        }
        /**
         * Callback for changes to the selected time on the timeline
         * @param time New time value
         */

      }, {
        key: "timeChange",
        value: function timeChange(time) {
          var _this36 = this;

          this.timeout('time_change', function () {
            _this36.show_time = time;
            var now = dayjs__WEBPACK_IMPORTED_MODULE_5__();

            if (!dayjs__WEBPACK_IMPORTED_MODULE_5__(_this36.show_time).isSame(now, 'd')) {
              var date = dayjs__WEBPACK_IMPORTED_MODULE_5__(_this36.show_time).startOf('d');
              var end = dayjs__WEBPACK_IMPORTED_MODULE_5__(date).endOf('d');

              _this36.service.Rooms.query({
                from: date.unix(),
                to: end.unix(),
                zone_ids: _this36.model.level.active.id,
                show_declined: false
              }).then(function (rooms) {
                var _iteratorNormalCompletion25 = true;
                var _didIteratorError25 = false;
                var _iteratorError25 = undefined;

                try {
                  var _loop4 = function _loop4() {
                    var space = _step25.value;

                    var match = _this36.model.rooms.find(function (i) {
                      return i.id === space.id;
                    });

                    if (match) {
                      var old_bookings = (match.raw_bookings || []).filter(function (i) {
                        var start = dayjs__WEBPACK_IMPORTED_MODULE_5__(i.date);
                        return !start.isAfter(date, 's') && start.isBefore(end, 's');
                      });

                      var bookings = _shared_utility_class__WEBPACK_IMPORTED_MODULE_10__["Utils"].unique([].concat(_toConsumableArray(space.bookings || []), _toConsumableArray(old_bookings)), 'id');

                      match.raw_bookings = bookings;

                      _this36.processBookings(match);
                    }
                  };

                  for (var _iterator25 = rooms[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
                    _loop4();
                  }
                } catch (err) {
                  _didIteratorError25 = true;
                  _iteratorError25 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion25 && _iterator25.return != null) {
                      _iterator25.return();
                    }
                  } finally {
                    if (_didIteratorError25) {
                      throw _iteratorError25;
                    }
                  }
                }

                _this36.updateStyles();
              });
            }

            _this36.updateStyles();
          }, 100);
        }
      }]);

      return ExploreComponent;
    }(_shared_globals_base_directive__WEBPACK_IMPORTED_MODULE_7__["BaseDirective"]);
    /***/

  },

  /***/
  "./src/app/shell/explore/explore.module.ngfactory.js":
  /*!***********************************************************!*\
    !*** ./src/app/shell/explore/explore.module.ngfactory.js ***!
    \***********************************************************/

  /*! exports provided: AppExploreModuleNgFactory */

  /***/
  function srcAppShellExploreExploreModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppExploreModuleNgFactory", function () {
      return AppExploreModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _explore_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./explore.module */
    "./src/app/shell/explore/explore.module.ts");
    /* harmony import */


    var _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory */
    "./node_modules/@acaprojects/ngx-widgets/acaprojects-ngx-widgets.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/snack-bar/typings/index.ngfactory */
    "./node_modules/@angular/material/snack-bar/typings/index.ngfactory.js");
    /* harmony import */


    var _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/material/dialog/typings/index.ngfactory */
    "./node_modules/@angular/material/dialog/typings/index.ngfactory.js");
    /* harmony import */


    var _shared_components_room_info_room_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../shared/components/room-info/room-info.component.ngfactory */
    "./src/app/shared/components/room-info/room-info.component.ngfactory.js");
    /* harmony import */


    var _shared_components_desk_info_desk_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../shared/components/desk-info/desk-info.component.ngfactory */
    "./src/app/shared/components/desk-info/desk-info.component.ngfactory.js");
    /* harmony import */


    var _shared_components_custom_fields_date_field_date_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/date-field/date-field.component.ngfactory */
    "./src/app/shared/components/custom-fields/date-field/date-field.component.ngfactory.js");
    /* harmony import */


    var _shared_components_custom_fields_time_field_time_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/time-field/time-field.component.ngfactory */
    "./src/app/shared/components/custom-fields/time-field/time-field.component.ngfactory.js");
    /* harmony import */


    var _shared_components_custom_fields_duration_field_duration_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/duration-field/duration-field.component.ngfactory */
    "./src/app/shared/components/custom-fields/duration-field/duration-field.component.ngfactory.js");
    /* harmony import */


    var _shared_components_custom_fields_user_list_field_user_list_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/user-list-field/user-list-field.component.ngfactory */
    "./src/app/shared/components/custom-fields/user-list-field/user-list-field.component.ngfactory.js");
    /* harmony import */


    var _shared_components_custom_fields_week_field_week_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/week-field/week-field.component.ngfactory */
    "./src/app/shared/components/custom-fields/week-field/week-field.component.ngfactory.js");
    /* harmony import */


    var _shared_components_custom_fields_terms_field_terms_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/terms-field/terms-field.component.ngfactory */
    "./src/app/shared/components/custom-fields/terms-field/terms-field.component.ngfactory.js");
    /* harmony import */


    var _shared_components_custom_fields_preference_field_preference_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/preference-field/preference-field.component.ngfactory */
    "./src/app/shared/components/custom-fields/preference-field/preference-field.component.ngfactory.js");
    /* harmony import */


    var _shared_components_custom_fields_cost_field_cost_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/cost-field/cost-field.component.ngfactory */
    "./src/app/shared/components/custom-fields/cost-field/cost-field.component.ngfactory.js");
    /* harmony import */


    var _shared_components_custom_fields_recurrence_field_recurrence_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/recurrence-field/recurrence-field.component.ngfactory */
    "./src/app/shared/components/custom-fields/recurrence-field/recurrence-field.component.ngfactory.js");
    /* harmony import */


    var _shared_components_custom_fields_user_search_field_user_search_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/user-search-field/user-search-field.component.ngfactory */
    "./src/app/shared/components/custom-fields/user-search-field/user-search-field.component.ngfactory.js");
    /* harmony import */


    var _shared_components_custom_fields_editor_field_editor_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/editor-field/editor-field.component.ngfactory */
    "./src/app/shared/components/custom-fields/editor-field/editor-field.component.ngfactory.js");
    /* harmony import */


    var _shared_components_custom_fields_guest_settings_field_guest_settings_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/guest-settings-field/guest-settings-field.component.ngfactory */
    "./src/app/shared/components/custom-fields/guest-settings-field/guest-settings-field.component.ngfactory.js");
    /* harmony import */


    var _shared_components_custom_fields_dropdown_field_dropdown_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../../shared/components/custom-fields/dropdown-field/dropdown-field.component.ngfactory */
    "./src/app/shared/components/custom-fields/dropdown-field/dropdown-field.component.ngfactory.js");
    /* harmony import */


    var _explore_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./explore.component.ngfactory */
    "./src/app/shell/explore/explore.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/esm2015/bidi.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @acaprojects/ngx-widgets */
    "./node_modules/@acaprojects/ngx-widgets/esm2015/acaprojects-ngx-widgets.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/esm2015/platform.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! @acaprojects/ngx-composer */
    "./node_modules/@acaprojects/ngx-composer/fesm2015/acaprojects-ngx-composer.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @tinymce/tinymce-angular */
    "./node_modules/@tinymce/tinymce-angular/fesm2015/tinymce-tinymce-angular.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/esm2015/text-field.js");
    /* harmony import */


    var _acaprojects_ngx_date_picker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! @acaprojects/ngx-date-picker */
    "./node_modules/@acaprojects/ngx-date-picker/fesm2015/acaprojects-ngx-date-picker.js");
    /* harmony import */


    var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! @acaprojects/ngx-custom-events */
    "./node_modules/@acaprojects/ngx-custom-events/fesm2015/acaprojects-ngx-custom-events.js");
    /* harmony import */


    var _acaprojects_ngx_checkbox__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @acaprojects/ngx-checkbox */
    "./node_modules/@acaprojects/ngx-checkbox/fesm2015/acaprojects-ngx-checkbox.js");
    /* harmony import */


    var _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! @acaprojects/ngx-dynamic-forms */
    "./node_modules/@acaprojects/ngx-dynamic-forms/fesm2015/acaprojects-ngx-dynamic-forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/esm2015/portal.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ../../shared/components/shared.module */
    "./src/app/shared/components/shared.module.ts");
    /* harmony import */


    var _explore_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./explore.component */
    "./src/app/shell/explore/explore.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var AppExploreModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_explore_module__WEBPACK_IMPORTED_MODULE_1__["AppExploreModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["DynamicBaseComponentNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["OverlayContentComponentNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ModalComponentNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["NotificationComponentNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["OverlayContainerComponentNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["TooltipComponentNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵcNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["ɵdNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["MapPinComponentNgFactory"], _node_modules_acaprojects_ngx_widgets_acaprojects_ngx_widgets_ngfactory__WEBPACK_IMPORTED_MODULE_2__["MapRangeComponentNgFactory"], _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarContainerNgFactory"], _node_modules_angular_material_snack_bar_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_4__["SimpleSnackBarNgFactory"], _node_modules_angular_material_dialog_typings_index_ngfactory__WEBPACK_IMPORTED_MODULE_5__["MatDialogContainerNgFactory"], _shared_components_room_info_room_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RoomInfoComponentNgFactory"], _shared_components_desk_info_desk_info_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["DeskInfoComponentNgFactory"], _shared_components_custom_fields_date_field_date_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["CustomDateFieldComponentNgFactory"], _shared_components_custom_fields_time_field_time_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["CustomTimeFieldComponentNgFactory"], _shared_components_custom_fields_duration_field_duration_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_10__["CustomDurationFieldComponentNgFactory"], _shared_components_custom_fields_user_list_field_user_list_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_11__["CustomUserListFieldComponentNgFactory"], _shared_components_custom_fields_week_field_week_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_12__["CustomWeekFieldComponentNgFactory"], _shared_components_custom_fields_terms_field_terms_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_13__["CustomTermsFieldComponentNgFactory"], _shared_components_custom_fields_preference_field_preference_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_14__["CustomPreferenceFieldComponentNgFactory"], _shared_components_custom_fields_cost_field_cost_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_15__["CustomCostFieldComponentNgFactory"], _shared_components_custom_fields_recurrence_field_recurrence_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_16__["CustomRecurrenceFieldComponentNgFactory"], _shared_components_custom_fields_user_search_field_user_search_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_17__["CustomUserSearchFieldComponentNgFactory"], _shared_components_custom_fields_editor_field_editor_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_18__["CustomEditorFieldComponentNgFactory"], _shared_components_custom_fields_guest_settings_field_guest_settings_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["CustomGuestSettingsFieldComponentNgFactory"], _shared_components_custom_fields_dropdown_field_dropdown_field_component_ngfactory__WEBPACK_IMPORTED_MODULE_20__["CustomDropdownFieldComponentNgFactory"], _explore_component_ngfactory__WEBPACK_IMPORTED_MODULE_21__["ExploreComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_22__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_22__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["ɵc"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["ɵd"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MAT_DIALOG_SCROLL_STRATEGY"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MAT_DIALOG_SCROLL_STRATEGY_PROVIDER_FACTORY"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialog"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialog"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["Overlay"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_22__["Location"]], [2, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MAT_DIALOG_DEFAULT_OPTIONS"]], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MAT_DIALOG_SCROLL_STRATEGY"], [3, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialog"]], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayContainer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_22__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵg"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵg"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵh"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵh"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["OverlayWidgetsModule"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["OverlayWidgetsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵo"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵo"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵm"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵm"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵp"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵp"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵq"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵq"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_26__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_29__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_30__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵr"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵr"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵs"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵs"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵt"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵt"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵu"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵu"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵv"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵv"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵx"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵx"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵy"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵy"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["FormControlWidgetsModule"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["FormControlWidgetsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["FileDropModule"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["FileDropModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵba"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵba"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵz"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵz"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵbb"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵbb"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵbc"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵbc"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵbd"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵbd"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵbe"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["ɵbe"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["GeneralWidgetsModule"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["GeneralWidgetsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["PageControlWidgetsModule"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["PageControlWidgetsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["WidgetsModule"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["WidgetsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_31__["ComposerModule"], _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_31__["ComposerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_32__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_32__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_32__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_32__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_33__["EditorModule"], _tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_33__["EditorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_34__["TextFieldModule"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_34__["TextFieldModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["DynamicFormComponentModule"], _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_28__["DynamicFormComponentModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_date_picker__WEBPACK_IMPORTED_MODULE_35__["ADatePickerModule"], _acaprojects_ngx_date_picker__WEBPACK_IMPORTED_MODULE_35__["ADatePickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_36__["ACustomEventsModule"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_36__["ACustomEventsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_checkbox__WEBPACK_IMPORTED_MODULE_37__["ACheckboxModule"], _acaprojects_ngx_checkbox__WEBPACK_IMPORTED_MODULE_37__["ACheckboxModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_38__["ADynamicFormsModule"], _acaprojects_ngx_dynamic_forms__WEBPACK_IMPORTED_MODULE_38__["ADynamicFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatCommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatCommonModule"], [[2, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MATERIAL_SANITY_CHECKS"]], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_40__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatRippleModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_39__["MatRippleModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_button__WEBPACK_IMPORTED_MODULE_41__["MatButtonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_41__["MatButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_42__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_25__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_43__["MatSnackBarModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_43__["MatSnackBarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_27__["MatDialogModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_44__["SharedComponentModule"], _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_44__["SharedComponentModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _explore_module__WEBPACK_IMPORTED_MODULE_1__["AppExploreModule"], _explore_module__WEBPACK_IMPORTED_MODULE_1__["AppExploreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_24__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_32__["ROUTES"], function () {
        return [[{
          path: "",
          component: _explore_component__WEBPACK_IMPORTED_MODULE_45__["ExploreComponent"]
        }, {
          path: ":search",
          component: _explore_component__WEBPACK_IMPORTED_MODULE_45__["ExploreComponent"]
        }, {
          path: "**",
          redirectTo: ""
        }]];
      }, [])]);
    });
    /***/

  },

  /***/
  "./src/app/shell/explore/explore.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/shell/explore/explore.module.ts ***!
    \*************************************************/

  /*! exports provided: AppExploreModule */

  /***/
  function srcAppShellExploreExploreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppExploreModule", function () {
      return AppExploreModule;
    });
    /* harmony import */


    var _explore_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./explore.component */
    "./src/app/shell/explore/explore.component.ts");
    /* harmony import */


    var _components_map_overlay_map_overlay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/map-overlay/map-overlay.component */
    "./src/app/shell/explore/components/map-overlay/map-overlay.component.ts");
    /* harmony import */


    var _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/search/search.component */
    "./src/app/shell/explore/components/search/search.component.ts");
    /* harmony import */


    var _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/timeline/timeline.component */
    "./src/app/shell/explore/components/timeline/timeline.component.ts");

    var COMPONENTS = [_explore_component__WEBPACK_IMPORTED_MODULE_0__["ExploreComponent"], _components_map_overlay_map_overlay_component__WEBPACK_IMPORTED_MODULE_1__["ExploreMapOverlayComponent"], _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__["ExploreSearchComponent"], _components_timeline_timeline_component__WEBPACK_IMPORTED_MODULE_3__["ExploreTimelineComponent"]];

    var AppExploreModule = function AppExploreModule() {
      _classCallCheck(this, AppExploreModule);
    };
    /***/

  },

  /***/
  "./src/app/shell/explore/explore.styles.scss.shim.ngstyle.js":
  /*!*******************************************************************!*\
    !*** ./src/app/shell/explore/explore.styles.scss.shim.ngstyle.js ***!
    \*******************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppShellExploreExploreStylesScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".container[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  pointer-events: none; }\n.container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    pointer-events: auto;\n    width: 100%; }\n.topbar[_ngcontent-%COMP%] {\n  max-height: 6em;\n  max-width: 100vw;\n  max-width: 100vw;\n  -webkit-box-flex: 1;\n          flex: 1;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #a3a2a2;\n  z-index: 101; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n    .topbar[_ngcontent-%COMP%] {\n      max-height: 3em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n    .topbar[_ngcontent-%COMP%] {\n      max-height: 3em; } }\n.map-space[_ngcontent-%COMP%] {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 5em;\n  z-index: 99;\n  max-height: 100%; }\n.map[_ngcontent-%COMP%] {\n  height: 100%; }\n.level[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1em;\n  right: .5em;\n  padding: .5em 1em;\n  height: 2.2em;\n  border-radius: 1.2em;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n.level.old[_ngcontent-%COMP%] {\n    right: 5em; }\n.keys[_ngcontent-%COMP%] {\n  margin-top: -6px; }\n.not-located[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  bottom: .5em;\n  right: .5em;\n  padding: .5em 1em;\n  border-radius: 4px;\n  background-color: #fff;\n  max-width: 50vw;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n    .not-located[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n      max-width: 70vw;\n      right: 4.5em;\n      bottom: 1.5em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n    .not-located[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n      max-width: 70vw;\n      right: 4.5em;\n      bottom: 1.5em; } }\n.not-located[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n    font-size: .9em; }\n.not-located[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n      .not-located[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n        max-width: calc(70vw - 14.5em); } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n      .not-located[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n        max-width: calc(70vw - 14.5em); } }\n.back[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: .5em;\n  right: .5em; }\n.timeline[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3.5em;\n  z-index: 100; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n    .timeline[_ngcontent-%COMP%] {\n      height: 2.5em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n    .timeline[_ngcontent-%COMP%] {\n      height: 2.5em; } }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1zdGFmZi1hcHAvc3JjL2FwcC9zaGFyZWQvc2hhcmVkLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC9leHBsb3JlL2V4cGxvcmUuc3R5bGVzLnNjc3MiLCIvYnVpbGRzL2FjYS1lbmdpbmUvbWNraW5zZXkvbWNraW5zZXktc3RhZmYtYXBwL3NyYy9hcHAvc2hlbGwvZXhwbG9yZS9leHBsb3JlLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztpQ0NFaUM7QUQ2Q2pDOzt1QkMxQ3VCO0FEdUR2Qjs7c0JDcERzQjtBQ0x0QjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0JBQWE7RUFBYixhQUFhO0VBQ2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QixvQkFBb0IsRUFBQTtBQVR4QjtJQVdRLG9CQUFvQjtJQUNwQixXQUFXLEVBQUE7QUFJbkI7RUFDSSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBTztVQUFQLE9BQU87RUFFUCxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIseUJBQXdCO0VBQ3hCLFlBQVksRUFBQTtBRjZDUjtJRXZEUjtNQWFRLGVBQWUsRUFBQSxFQUV0QjtBRjJDTztJRTFEUjtNQWFRLGVBQWUsRUFBQSxFQUV0QjtBQUdEO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFPO1VBQVAsT0FBTztFQUNQLFdBQVc7RUFDWCxXQUFXO0VBQ1gsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxZQUFZLEVBQUE7QUFHaEI7RUFDSSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLG9CQUFvQjtFQUNwQixzQkFBc0I7RUFDdEIsK0dBQTJGLEVBQUE7QUFSL0Y7SUFVUSxVQUFVLEVBQUE7QUFJbEI7RUFDSSxnQkFBZ0IsRUFBQTtBQUdwQjtFQUVRLGtCQUFrQjtFQUNsQixvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLCtHQUEyRixFQUFBO0FGSjNGO0lFUFI7TUFhWSxlQUFlO01BQ2YsWUFBWTtNQUNaLGFBQWEsRUFBQSxFQWVwQjtBRnBCRztJRVZSO01BYVksZUFBZTtNQUNmLFlBQVk7TUFDWixhQUFhLEVBQUEsRUFlcEI7QUE5Qkw7SUFtQlksZUFBZSxFQUFBO0FBbkIzQjtJQXVCWSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBO0FGbEIzQjtNRVBSO1FBMkJnQiw4QkFBOEIsRUFBQSxFQUVyQztBRm5CRDtNRVZSO1FBMkJnQiw4QkFBOEIsRUFBQSxFQUVyQztBQUlUO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXLEVBQUE7QUFHZjtFQUNJLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWSxFQUFBO0FGbkNSO0lFZ0NSO01BTVEsYUFBYSxFQUFBLEVBRXBCO0FGckNPO0lFNkJSO01BTVEsYUFBYSxFQUFBLEVBRXBCIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvZXhwbG9yZS9leHBsb3JlLnN0eWxlcy5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcbiRwcmltZS1ibHVlLWxpZ2h0OiMwMEFERUY7XG4kcHJpbWUtYmx1ZS1kYXJrOiMwMDY0QkQ7XG4kcHJpbWUtZ3JlZW4tbGlnaHQ6I0EyQUQwMDtcbiRwcmltZS1ncmV5LWRpc2FibGU6IzdDOTRBQTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogIzQyODVGNDtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdyB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLCAuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kbWFpbi1mb250OiAkZm9udC1zdGFjaztcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gIC5jb250YWluZXIgPiBkaXYge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlOyB9XG5cbi50b3BiYXIge1xuICBtYXgtaGVpZ2h0OiA2ZW07XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIG1heC13aWR0aDogMTAwdnc7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTNhMmEyO1xuICB6LWluZGV4OiAxMDE7IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAudG9wYmFyIHtcbiAgICAgIG1heC1oZWlnaHQ6IDNlbTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC50b3BiYXIge1xuICAgICAgbWF4LWhlaWdodDogM2VtOyB9IH1cblxuLm1hcC1zcGFjZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgaGVpZ2h0OiA1ZW07XG4gIHotaW5kZXg6IDk5O1xuICBtYXgtaGVpZ2h0OiAxMDAlOyB9XG5cbi5tYXAge1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuLmxldmVsIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDFlbTtcbiAgcmlnaHQ6IC41ZW07XG4gIHBhZGRpbmc6IC41ZW0gMWVtO1xuICBoZWlnaHQ6IDIuMmVtO1xuICBib3JkZXItcmFkaXVzOiAxLjJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG4gIC5sZXZlbC5vbGQge1xuICAgIHJpZ2h0OiA1ZW07IH1cblxuLmtleXMge1xuICBtYXJnaW4tdG9wOiAtNnB4OyB9XG5cbi5ub3QtbG9jYXRlZCA+IGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm90dG9tOiAuNWVtO1xuICByaWdodDogLjVlbTtcbiAgcGFkZGluZzogLjVlbSAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgbWF4LXdpZHRoOiA1MHZ3O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgICAubm90LWxvY2F0ZWQgPiBkaXYge1xuICAgICAgbWF4LXdpZHRoOiA3MHZ3O1xuICAgICAgcmlnaHQ6IDQuNWVtO1xuICAgICAgYm90dG9tOiAxLjVlbTsgfSB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAgIC5ub3QtbG9jYXRlZCA+IGRpdiB7XG4gICAgICBtYXgtd2lkdGg6IDcwdnc7XG4gICAgICByaWdodDogNC41ZW07XG4gICAgICBib3R0b206IDEuNWVtOyB9IH1cbiAgLm5vdC1sb2NhdGVkID4gZGl2ICoge1xuICAgIGZvbnQtc2l6ZTogLjllbTsgfVxuICAubm90LWxvY2F0ZWQgPiBkaXYgZGl2OmZpcnN0LWNoaWxkIHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgICAgLm5vdC1sb2NhdGVkID4gZGl2IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG1heC13aWR0aDogY2FsYyg3MHZ3IC0gMTQuNWVtKTsgfSB9XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgICAubm90LWxvY2F0ZWQgPiBkaXYgZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDcwdncgLSAxNC41ZW0pOyB9IH1cblxuLmJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLjVlbTtcbiAgcmlnaHQ6IC41ZW07IH1cblxuLnRpbWVsaW5lIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMy41ZW07XG4gIHotaW5kZXg6IDEwMDsgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC50aW1lbGluZSB7XG4gICAgICBoZWlnaHQ6IDIuNWVtOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLnRpbWVsaW5lIHtcbiAgICAgIGhlaWdodDogMi41ZW07IH0gfVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAmID4gZGl2IHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnRvcGJhciB7XG4gICAgbWF4LWhlaWdodDogNmVtO1xuICAgIG1heC13aWR0aDogMTAwdnc7XG4gICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICBmbGV4OiAxO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6I2EzYTJhMjtcbiAgICB6LWluZGV4OiAxMDE7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBtYXgtaGVpZ2h0OiAzZW07XG4gICAgfVxufVxuXG5cbi5tYXAtc3BhY2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogNWVtO1xuICAgIHotaW5kZXg6IDk5O1xuICAgIG1heC1oZWlnaHQ6IDEwMCU7XG59XG5cbi5tYXAge1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmxldmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxZW07XG4gICAgcmlnaHQ6IC41ZW07XG4gICAgcGFkZGluZzogLjVlbSAxZW07XG4gICAgaGVpZ2h0OiAyLjJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsLjEyKTtcbiAgICAmLm9sZCB7XG4gICAgICAgIHJpZ2h0OiA1ZW07XG4gICAgfVxufVxuXG4ua2V5cyB7XG4gICAgbWFyZ2luLXRvcDogLTZweDtcbn1cblxuLm5vdC1sb2NhdGVkIHtcbiAgICAmID4gZGl2IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBib3R0b206IC41ZW07XG4gICAgICAgIHJpZ2h0OiAuNWVtO1xuICAgICAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBtYXgtd2lkdGg6IDUwdnc7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsLjEyKTtcbiAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNzB2dztcbiAgICAgICAgICAgIHJpZ2h0OiA0LjVlbTtcbiAgICAgICAgICAgIGJvdHRvbTogMS41ZW07XG4gICAgICAgIH1cblxuICAgICAgICAqIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNzB2dyAtIDE0LjVlbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5iYWNrIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAuNWVtO1xuICAgIHJpZ2h0OiAuNWVtO1xufVxuXG4udGltZWxpbmUge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMy41ZW07XG4gICAgei1pbmRleDogMTAwO1xuXG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgaGVpZ2h0OiAyLjVlbTtcbiAgICB9XG59XG4iXX0= */"];
    /***/
  }
}]);
//# sourceMappingURL=shell-explore-explore-module-ngfactory-es5.js.map