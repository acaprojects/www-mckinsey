(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-explore-explore-module"],{

/***/ "./src/app/shell/explore/components/map-overlay/map-overlay.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/shell/explore/components/map-overlay/map-overlay.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ExploreMapOverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreMapOverlayComponent", function() { return ExploreMapOverlayComponent; });
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



var ExploreMapOverlayComponent = /** @class */ (function (_super) {
    __extends(ExploreMapOverlayComponent, _super);
    function ExploreMapOverlayComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.model = {};
        _this.settings = {};
        return _this;
    }
    ExploreMapOverlayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.Buildings.listen(function (bld) {
            if (bld) {
                _this.model.bld = bld;
                _this.model.system = bld.systems.desks;
                _this.loadLevels();
            }
        });
        this.model.desks = {};
        this.model.show = {};
        this.model.template = {};
        this.model.options = [
            { id: 'level', name: 'Level Select', large: true, icon: { class: 'material-icons', value: 'layers' }, number: true, action: 'pickLevel' },
            { id: 'keys', name: 'Keys', icon: { class: 'material-icons', value: 'vpn_key' }, template: true },
            { id: 'settings', name: 'Map Settings', icon: { class: 'material-icons', value: 'settings' }, action: 'updateSettings' },
            { id: 'filters', name: 'Map Filters', icon: { class: 'material-icons', value: 'filter_list' }, action: 'showFilters' },
            { id: 'room', name: 'Room Info', icon: { class: 'material-icons', value: 'info' }, offset: 'middle', template: true }
        ];
        this.model.rooms = {};
        this.init();
        this.setTemplates();
    };
    ExploreMapOverlayComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
        if (changes.change) {
            setTimeout(function () {
                _this.model.rooms.list = _this.service.Rooms.list();
                _this.processRooms();
            }, 100);
        }
    };
    ExploreMapOverlayComponent.prototype.setTemplates = function () {
        var _this = this;
        if (!this.room_info || !this.key_list) {
            return setTimeout(function () { return _this.setTemplates(); }, 500);
        }
        this.model.template.room = this.room_info;
        this.model.template.keys = this.key_list;
        this.subs.obs.explore_lvl = this.service.listen('EXPLORE.level', function (value) { return _this.setLevelByID(value, false); });
        this.subs.obs.explore_search = this.service.listen('EXPLORE.search', function (value) { return _this.model.search = value; });
    };
    ExploreMapOverlayComponent.prototype.tapWindow = function (e) {
        this.model.keys.show = (this.model.keys ? false : this.model.keys);
    };
    ExploreMapOverlayComponent.prototype.init = function () {
        var _this = this;
        if (!this.service.Settings.setup) {
            return setTimeout(function () { return _this.init(); }, 500);
        }
        this.model.map_settings = this.service.Settings.get('app.map') || {};
        this.model.keys = {};
        this.model.keys.groups = this.model.map_settings.keys || {};
        this.model.keys.types = Object.keys(this.model.keys.groups);
        this.model.zones = {};
        this.model.zones.enabled = this.service.Settings.get('app.zones.enabled');
        this.model.zones.toggle = this.service.Settings.get('app.zones.toggle');
        this.model.settings = this.service.Settings.get('app.explore') || {};
        if (this.model.zones.enabled && this.model.zones.toggle) {
            this.model.keys.types = [this.model.zones.toggle];
        }
        if (this.model.keys) {
            this.model.keys.list = (this.model.keys.groups.room || []).concat(this.model.keys.groups.general || []);
        }
        // Remove keys option if there are no keys to display
        if ((!this.model.keys.types || this.model.keys.types.length <= 0) && (!this.model.keys.list || this.model.keys.list.length <= 0)) {
            for (var _i = 0, _a = this.model.options; _i < _a.length; _i++) {
                var opt = _a[_i];
                if (opt.id === 'keys') {
                    this.model.options.splice(this.model.options.indexOf(opt), 1);
                    break;
                }
            }
        }
        if (this.model.map_settings && this.model.map_settings.settings === false) {
            for (var _b = 0, _c = this.model.options; _b < _c.length; _b++) {
                var opt = _c[_b];
                if (opt.id === 'settings') {
                    this.model.options.splice(this.model.options.indexOf(opt), 1);
                    break;
                }
            }
        }
        if (this.model.map_settings && this.model.map_settings.info === false) {
            for (var _d = 0, _e = this.model.options; _d < _e.length; _d++) {
                var opt = _e[_d];
                if (opt.id === 'room') {
                    this.model.options.splice(this.model.options.indexOf(opt), 1);
                    break;
                }
            }
        }
        this.settings = { zoom: 0 };
        this.model.old = this.service.Settings.get('app.explore.old_overlay');
        this.service.set('EXPLORE.settings', this.settings);
        this.subs.obs.rooms = this.service.Rooms.listen('room_list', function () {
            _this.model.rooms.list = _this.service.Rooms.list();
            _this.processRooms();
        });
        this.initOld();
    };
    ExploreMapOverlayComponent.prototype.initOld = function () {
        var _this = this;
        this.subs.obs.exp_show_dsks = this.service.listen('EXPLORE.show.desks', function (state) {
            _this.model.show.desks = state;
        });
        this.subs.obs.exp_show_rms = this.service.listen('EXPLORE.show.rooms', function (state) {
            _this.model.show.rooms = state;
        });
        this.subs.obs.exp_show_tms = this.service.listen('EXPLORE.show.teams', function (state) {
            _this.model.show.teams = state;
        });
        this.subs.obs.exp_show_zns = this.service.listen('EXPLORE.show.zones', function (state) {
            _this.model.zones.show = state;
        });
    };
    ExploreMapOverlayComponent.prototype.loadLevels = function () {
        this.model.level = { list: [] };
        if (this.model.bld) {
            this.model.level.list = this.model.bld.levels;
            this.model.level.names = [];
            for (var _i = 0, _a = this.model.level.list; _i < _a.length; _i++) {
                var lvl = _a[_i];
                this.model.level.names.push(lvl.name);
            }
            this.setLevel(this.model.level.list[0]);
        }
    };
    ExploreMapOverlayComponent.prototype.setLevelByID = function (id, emit) {
        if (emit === void 0) { emit = true; }
        if (id && this.model.level && this.model.level.list) {
            for (var _i = 0, _a = this.model.level.list; _i < _a.length; _i++) {
                var lvl = _a[_i];
                if (lvl.id === id) {
                    this.setLevel(lvl, emit);
                    return lvl;
                }
            }
        }
        return null;
    };
    ExploreMapOverlayComponent.prototype.setLevel = function (lvl, emit) {
        if (emit === void 0) { emit = true; }
        if (lvl && this.model.level && this.model.level.list && this.model.level.list.indexOf(lvl) >= 0) {
            var previous_lvl = this.model.level.active;
            this.model.level.active = lvl;
            this.model.level.index = this.model.level.list.indexOf(lvl);
            if (emit && (!previous_lvl || previous_lvl.id !== lvl.id)) {
                this.service.set('EXPLORE.level', lvl.id);
            }
            this.processRooms();
        }
    };
    ExploreMapOverlayComponent.prototype.pickLevel = function () {
        var _this = this;
        if (this.model.level && this.model.level.list) {
            var lvl = this.model.level.active;
            this.service.Overlay.openModal('level-select', { data: { active: lvl ? lvl.id : '' } })
                .then(function (inst) { return inst.subscribe(function (event) {
                if (event.type === 'Select') {
                    _this.setLevelByID(event.data.active);
                }
                _this.model.show_menu = false;
                event.close();
            }); });
        }
    };
    ExploreMapOverlayComponent.prototype.processRooms = function () {
        if (this.model.rooms && this.model.rooms.list) {
            this.model.rooms.count = 0;
            this.model.rooms.free = 0;
            for (var _i = 0, _a = this.model.rooms.list; _i < _a.length; _i++) {
                var rm = _a[_i];
                if (rm.level && rm.level.id === this.model.level.active.id && rm.bookable) {
                    this.model.rooms.count++;
                    if (!rm.in_use) {
                        this.model.rooms.free++;
                    }
                }
            }
            this.model.rooms.percent = (this.model.rooms.free / (this.model.rooms.count || 1)) * 100;
        }
        if (this.model.desks) {
            this.model.desks.percent = ((this.model.desks.free || 0) / (this.model.desks.count || 1)) * 100;
        }
    };
    ExploreMapOverlayComponent.prototype.updateSettings = function () {
        var _this = this;
        this.service.Overlay.openModal('map-filter', {})
            .then(function (inst) { return inst.subscribe(function (event) {
            event.close();
            _this.model.show_menu = false;
            _this.model.show_filters = false;
        }); });
    };
    ExploreMapOverlayComponent.prototype.showFilters = function () {
        this.model.show_filters = !this.model.show_filters;
    };
    ExploreMapOverlayComponent.prototype.updateState = function () {
        this.service.set('EXPLORE.show.desks', this.model.show.desks);
        this.service.set('EXPLORE.show.rooms', this.model.show.rooms);
        this.service.set('EXPLORE.show.teams', this.model.show.teams);
        if (this.model.zones) {
            this.service.set('EXPLORE.show.zones', this.model.zones.show);
        }
        this.service.set('EXPLORE.filters', !this.service.get('EXPLORE.filters'));
    };
    ExploreMapOverlayComponent.prototype.action = function (item) {
        if (item.action && this[item.action] instanceof Function) {
            this[item.action]();
        }
    };
    ExploreMapOverlayComponent.prototype.toggle = function (name, mobile) {
        var _this = this;
        if (mobile === void 0) { mobile = false; }
        var key = "" + name + (mobile ? '_mobile' : '');
        setTimeout(function () {
            if (_this.model[name]) {
                _this.model[name].show = !_this.model[name].show;
            }
            else {
                _this.model.show[key] = !_this.model.show[key];
            }
        }, 300);
    };
    ExploreMapOverlayComponent.prototype.zoom = function (value) {
        var zoom = Math.max(100, ((this.settings.zoom || 100)) * value);
        if (!this.settings) {
            this.settings = {};
        }
        this.settings.zoom = zoom;
        this.postSettings();
    };
    ExploreMapOverlayComponent.prototype.reset = function () {
        if (!this.settings) {
            this.settings = {};
        }
        this.settings.zoom = 100;
        this.settings.center = { x: .5, y: .5 };
        this.postSettings();
    };
    ExploreMapOverlayComponent.prototype.applyFilters = function () {
        var zones = this.model.level.active.map.features;
        var hide = [];
        for (var _i = 0, zones_1 = zones; _i < zones_1.length; _i++) {
            var z = zones_1[_i];
            if (!z.active) {
                hide.push(z.id);
            }
        }
        this.service.set('EXPLORE.map.hide', hide.length === zones.length ? [] : hide);
        this.model.show_filters = false;
    };
    ExploreMapOverlayComponent.prototype.postSettings = function () {
        this.settings = JSON.parse(JSON.stringify(this.settings));
        this.service.set('EXPLORE.settings', this.settings);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ExploreMapOverlayComponent.prototype, "change", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('room_info'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ExploreMapOverlayComponent.prototype, "room_info", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('key_list'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"])
    ], ExploreMapOverlayComponent.prototype, "key_list", void 0);
    ExploreMapOverlayComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'explore-map-overlay',
            template: __webpack_require__(/*! ./map-overlay.template.html */ "./src/app/shell/explore/components/map-overlay/map-overlay.template.html"),
            styles: [__webpack_require__(/*! ./map-overlay.styles.scss */ "./src/app/shell/explore/components/map-overlay/map-overlay.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_1__["AppService"]])
    ], ExploreMapOverlayComponent);
    return ExploreMapOverlayComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/explore/components/map-overlay/map-overlay.styles.scss":
/*!******************************************************************************!*\
  !*** ./src/app/shell/explore/components/map-overlay/map-overlay.styles.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  pointer-events: none; }\n.container > * {\n    pointer-events: auto; }\n.topbar {\n  position: absolute;\n  top: 0;\n  left: 0; }\n.zoom {\n  position: absolute;\n  left: 0;\n  bottom: 1.5em;\n  background-color: #fff;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  overflow: hidden; }\n.zoom .item {\n    height: 1.75em;\n    width: 1.75em;\n    font-size: 1.25em;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-transition: background-color 300ms, color 300ms;\n    transition: background-color 300ms, color 300ms; }\n.zoom .item.disabled {\n      color: rgba(0, 0, 0, 0.2);\n      pointer-events: none; }\n.zoom .item.disabled:hover {\n        color: rgba(0, 0, 0, 0.2);\n        background: none; }\n.zoom .item:hover {\n      background-color: rgba(0, 0, 0, 0.1);\n      color: #4285F4; }\n.settings {\n  width: 15em;\n  padding: .25em .5em .25em 1em; }\n.settings .item {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n.settings .item .text {\n      -webkit-box-flex: 1;\n              flex: 1; }\n.room {\n  padding: .5em 1em;\n  width: 13em; }\n.room .item {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    margin: .5em; }\n.room .text {\n    -webkit-box-flex: 1;\n            flex: 1; }\n.room .low {\n    color: #309b40; }\n.room .medium {\n    color: #FF9800; }\n.room .high {\n    color: #db291d; }\n.keys {\n  width: 10rem;\n  min-width: 100%;\n  font-size: 1em; }\n.keys .divider {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    color: rgba(0, 0, 0, 0.2);\n    width: 100%;\n    margin-top: .5em; }\n.keys .bar {\n    height: 1px;\n    width: 1px;\n    -webkit-box-flex: 1;\n            flex: 1;\n    background-color: rgba(0, 0, 0, 0.2); }\n.keys .type {\n    padding: 0 .5em;\n    text-transform: capitalize;\n    font-size: .8em; }\n.keys .list {\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n    border-radius: 4px; }\n.keys .group {\n    width: 100%;\n    max-height: 45vh;\n    overflow: auto; }\n.keys .list.show {\n    pointer-events: auto;\n    border: 1px solid #4285F4;\n    -webkit-transition: opacity 300ms, -webkit-box-shadow 300ms;\n    transition: opacity 300ms, -webkit-box-shadow 300ms;\n    transition: opacity 300ms, box-shadow 300ms;\n    transition: opacity 300ms, box-shadow 300ms, -webkit-box-shadow 300ms;\n    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n    background-color: #fff; }\n.keys .list.show .divider {\n      display: -webkit-box;\n      display: flex; }\n.keys .list.show .item {\n      opacity: 1;\n      pointer-events: auto; }\n.keys .list.show .item .icon {\n        padding: 0; }\n.keys .list.show .item.active {\n        color: #fff;\n        background-color: #4285F4; }\n.keys .list.show .item.active .icon {\n          color: #fff; }\n.keys .list.show .group {\n      display: inherit; }\n.keys.select .list.show .item {\n    font-size: 1em; }\n.keys.select .list.show .item:hover {\n      background-color: #1266f1;\n      color: #fff; }\n.keys .icon {\n    overflow: hidden;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n.keys .item {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    pointer-events: none;\n    padding: 0.25em 0.5em;\n    font-size: .8em;\n    min-width: 10em;\n    height: 2em;\n    white-space: nowrap; }\n.keys .item.active {\n      pointer-events: auto;\n      opacity: 1;\n      font-size: 1em; }\n.keys .item.active .icon {\n        padding: 0;\n        color: #4285F4; }\n.keys .item .name {\n      white-space: nowrap;\n      -webkit-box-flex: 1;\n              flex: 1; }\n.keys .item .value {\n      -webkit-box-flex: 1;\n              flex: 1;\n      text-transform: capitalize; }\n.keys .item .image {\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat;\n      max-width: 1em;\n      max-height: 1em;\n      height: 1em;\n      width: 1em; }\n.keys .item .circle {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      height: 1em;\n      width: 1em;\n      margin: .5em;\n      min-width: 1em;\n      border-radius: 1.1em;\n      background-color: #fff;\n      margin-right: 1em;\n      border: 1px solid #f0f0f0; }\n.keys .item .circle.icon {\n        height: 1.5em;\n        width: 1.5em;\n        margin: .25em;\n        margin-right: .75em; }\n.simple {\n  position: absolute;\n  top: .5em;\n  right: .5em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  padding: .5em; }\n.simple btn {\n    font-size: 1.6em; }\n.number {\n  position: absolute;\n  top: .1em;\n  left: 50%;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  font-size: .5em;\n  height: 2em;\n  width: 2em;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center; }\nbtn i.large {\n  font-size: 1.5em; }\n/*=================*\\\n||  Mobile Styles  ||\n\\*================*/\n.option-list {\n  position: absolute;\n  right: 1em;\n  bottom: 1em;\n  width: auto !important;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 104;\n  font-size: 1.2em; }\n.option-list .group {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: translate(-50%, -50%);\n            transform: translate(-50%, -50%);\n    height: 1.5em;\n    width: 1.5em; }\n.option-list .group btn {\n      position: absolute;\n      top: -2px;\n      left: -2px;\n      -webkit-transition: opacity 400ms, -webkit-transform 300ms;\n      transition: opacity 400ms, -webkit-transform 300ms;\n      transition: transform 300ms, opacity 400ms;\n      transition: transform 300ms, opacity 400ms, -webkit-transform 300ms;\n      -webkit-transform: translateY(0em);\n              transform: translateY(0em);\n      opacity: 0; }\n.option-list btn[format=\"action\"] i {\n    -webkit-transition: -webkit-transform 300ms;\n    transition: -webkit-transform 300ms;\n    transition: transform 300ms;\n    transition: transform 300ms, -webkit-transform 300ms;\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg); }\n.option-list.show btn[format=\"action\"] i {\n    -webkit-transform: rotate(45deg);\n            transform: rotate(45deg); }\n.option-list.show .group btn {\n    opacity: 1; }\n/*=================*\\\n||   Old Styles    ||\n\\*================*/\n.options {\n  position: absolute;\n  top: .5em;\n  right: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: end;\n          align-items: flex-end;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  z-index: 101;\n  width: 3em !important; }\n.options btn {\n    font-size: 1.25em;\n    margin: .2em; }\n.options.push {\n    top: 3.5em; }\n.options .option {\n    position: relative;\n    margin: .5em;\n    overflow: hidden;\n    background-color: #fff;\n    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n    width: 2.5em;\n    height: 2.5em;\n    border-radius: 1.3em;\n    -webkit-transition: width 300ms, height 300ms, border-radius 300ms;\n    transition: width 300ms, height 300ms, border-radius 300ms; }\n.options .option.show {\n      width: 13em;\n      height: 13em;\n      border-radius: 4px; }\n.options .option.half.show {\n      height: 7.5em; }\n.options .content {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    width: 13em;\n    height: 13em; }\n.options .content > div {\n      width: 100%; }\n.options .header {\n    padding: .65em 1em;\n    border-bottom: 1px solid #f0f0f0; }\n.options .icon {\n    position: absolute;\n    top: 0;\n    right: 0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    height: 1.66666em;\n    width: 1.66666em !important;\n    font-size: 1.5em;\n    cursor: pointer; }\n.options .icon:hover {\n      opacity: .54; }\n.options .body {\n    padding: .25em .25em .25em 1em; }\n.options .item {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n.options .item .text {\n      -webkit-box-flex: 1;\n              flex: 1; }\n.options .value {\n    padding: .25em .75em; }\n.options .high {\n    color: #db291d; }\n.options .medium {\n    color: #FF9800; }\n.options .low {\n    color: #309b40; }\n.level {\n  position: absolute;\n  top: 0;\n  left: 0;\n  padding: .5em;\n  z-index: 100;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  flex-wrap: wrap;\n  max-width: calc(100% - 3.5em); }\n.level.push {\n    top: 3em; }\n.show-state {\n  width: 8em;\n  height: 2em;\n  background-color: #fff;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  margin: 0 .5em;\n  margin-top: -6px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 .5em;\n  font-size: 1.2em; }\n.show-state .text {\n    -webkit-box-flex: 1;\n            flex: 1; }\n.show-state .checkbox {\n    margin-left: .5em;\n    font-size: .8em; }\n.keys-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  width: 100%; }\n.keys-header .value {\n    -webkit-box-flex: 1;\n            flex: 1;\n    text-align: left;\n    font-weight: 300; }\n.keys-list {\n  margin-top: -6px; }\n.dropdown {\n  position: relative;\n  width: 10em;\n  height: 2em;\n  background-color: #fff;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  margin: 0 .5em;\n  font-size: 1.2em; }\n.dropdown .divider {\n    display: none;\n    -webkit-box-align: center;\n            align-items: center;\n    color: #aaa;\n    width: 100%;\n    margin-top: .5em; }\n.dropdown .bar {\n    height: 1px;\n    width: 1px;\n    -webkit-box-flex: 1;\n            flex: 1;\n    background-color: #aaa; }\n.dropdown .type {\n    padding: 0 .5em;\n    text-transform: capitalize;\n    font-size: .8em; }\n.dropdown .list {\n    pointer-events: none;\n    position: absolute;\n    top: 0;\n    left: 0;\n    -webkit-box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);\n    border-radius: 4px; }\n.dropdown .group {\n    width: 100%;\n    max-height: 45vh;\n    overflow: auto;\n    display: none; }\n.dropdown .list.show {\n    pointer-events: auto;\n    border: 1px solid #4285F4;\n    -webkit-transition: opacity 300ms, -webkit-box-shadow 300ms;\n    transition: opacity 300ms, -webkit-box-shadow 300ms;\n    transition: opacity 300ms, box-shadow 300ms;\n    transition: opacity 300ms, box-shadow 300ms, -webkit-box-shadow 300ms;\n    -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n            box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n    background-color: #fff; }\n.dropdown .list.show .divider {\n      display: -webkit-box;\n      display: flex; }\n.dropdown .list.show .item {\n      opacity: 1;\n      pointer-events: auto; }\n.dropdown .list.show .item .icon {\n        padding: 0; }\n.dropdown .list.show .item.active {\n        color: #fff;\n        background-color: #4285F4; }\n.dropdown .list.show .item.active .icon {\n          color: #fff; }\n.dropdown .list.show .group {\n      display: inherit; }\n.dropdown.select .list.show .item {\n    font-size: 1em; }\n.dropdown.select .list.show .item:hover {\n      background-color: #1266f1;\n      color: #fff; }\n.dropdown .icon {\n    overflow: hidden;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center; }\n.dropdown .item {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    opacity: 0;\n    pointer-events: none;\n    padding: 0.25em 0.5em;\n    font-size: .8em;\n    min-width: 10em;\n    height: 2em;\n    white-space: nowrap; }\n.dropdown .item.active {\n      pointer-events: auto;\n      opacity: 1;\n      font-size: 1em; }\n.dropdown .item.active .icon {\n        padding: 0;\n        color: #4285F4; }\n.dropdown .item .name {\n      white-space: nowrap;\n      -webkit-box-flex: 1;\n              flex: 1; }\n.dropdown .item .value {\n      -webkit-box-flex: 1;\n              flex: 1;\n      text-transform: capitalize; }\n.dropdown .item .image {\n      background-size: contain;\n      background-position: center;\n      background-repeat: no-repeat;\n      width: 1em;\n      height: 1em; }\n.dropdown .item .circle {\n      display: -webkit-box;\n      display: flex;\n      -webkit-box-align: center;\n              align-items: center;\n      -webkit-box-pack: center;\n              justify-content: center;\n      height: 1em;\n      width: 1em;\n      margin: .5em;\n      min-width: 1em;\n      border-radius: 1.1em;\n      background-color: #fff;\n      margin-right: 1em;\n      border: 1px solid #f0f0f0; }\n.dropdown .item .circle.icon {\n        height: 1.5em;\n        width: 1.5em;\n        margin: .25em;\n        margin-right: .75em; }\n.filters {\n  position: absolute;\n  top: 1em;\n  left: 50%;\n  min-height: 10em;\n  width: 20em;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: #fff;\n  border-radius: 6px;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  -webkit-transform: translate(-50%, -150%);\n          transform: translate(-50%, -150%);\n  opacity: 0;\n  padding: .5em;\n  -webkit-transition: opacity 200ms, -webkit-transform 200ms;\n  transition: opacity 200ms, -webkit-transform 200ms;\n  transition: transform 200ms, opacity 200ms;\n  transition: transform 200ms, opacity 200ms, -webkit-transform 200ms;\n  z-index: 200; }\n.filters.show {\n    opacity: 1;\n    -webkit-transform: translate(-50%, 0%);\n            transform: translate(-50%, 0%); }\n.filters .header {\n    position: relative;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n    width: 100%;\n    display: flex;\n    padding: .5em;\n    font-weight: 500;\n    font-size: 1.1em; }\n.filters .body {\n    -webkit-box-flex: 1;\n            flex: 1;\n    width: 100%; }\n.close {\n  position: absolute;\n  top: 50%;\n  right: .5em;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvZXhwbG9yZS9jb21wb25lbnRzL21hcC1vdmVybGF5L21hcC1vdmVybGF5LnN0eWxlcy5zY3NzIiwiL1VzZXJzL2JlbmhvYWQvUHJvamVjdHMvbWNrLW91dGxvb2stYWRkaW4vc3JjL2FwcC9zaGVsbC9leHBsb3JlL2NvbXBvbmVudHMvbWFwLW92ZXJsYXkvbWFwLW92ZXJsYXkuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2lDQ0VpQztBRCtCakM7O3VCQzVCdUI7QUR5Q3ZCOztzQkN0Q3NCO0FDTHRCO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsb0JBQW9CLEVBQUE7QUFQeEI7SUFTUSxvQkFBb0IsRUFBQTtBQUk1QjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTyxFQUFBO0FBR1g7RUFDSSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUhBQTJGO1VBQTNGLCtHQUEyRjtFQUMzRiw0QkFBNEI7RUFDNUIsK0JBQStCO0VBQy9CLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7QUFYcEI7SUFhUSxjQUFjO0lBQ2QsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsdURBQStDO0lBQS9DLCtDQUErQyxFQUFBO0FBbkJ2RDtNQXFCWSx5QkFBZ0I7TUFDaEIsb0JBQW9CLEVBQUE7QUF0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Q2xCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCLEVBQUE7QUEvQnhCO0lBbUNRLG1CQUFPO1lBQVAsT0FBTztJQUNQLFdBQVcsRUFBQTtBQUluQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsV0FBVztFQUNYLG1DQUEyQjtVQUEzQiwyQkFBMkIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2V4cGxvcmUvY29tcG9uZW50cy9tYXAtb3ZlcmxheS9tYXAtb3ZlcmxheS5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2VzczogIzMwOWI0MDtcbiRzdWNjZXNzLWFsdDogIzQyODVmNDtcbiRlcnJvcjogI2RiMjkxZDtcbiRwZW5kaW5nOiAjRkY5ODAwO1xuJG5ldXRyYWw6ICM3OTc5Nzk7XG5cbiRiYWNrZ3JvdW5kOiAjZWNmMWY1O1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuJGNvbG9yLXByaW1hcnktd2lyZWZyYW1lOnJnYmEoMCwgMCwgMCwgMC42MSk7XG4kaGVhZGVyLWJnOiAjZmZmO1xuJGhlYWRlci1jb2xvcjogcmdiYSgjMDAyOTYwLCAuODcpO1xuXG4kdGlsZS1jb2xvcjogI2ZmZjtcbiR0aWxlLWJvcmRlcjogI2ZmZjtcblxuJGhlbHAtYm9yZGVyOiByZ2JhKCMwMDAsIC4yKTtcblxuJGNvbG9yLXByaW1hcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5OiAjNDA0ODVhO1xuJGNvbG9yLXRlcm5hcnk6ICNjNzk5NjE7XG4kY29sb3ItcXVhdGVybmFyeTogIzdkZDZkNjtcbiRjb2xvci1xdWludGVybmFyeTogIzRjNWM2YztcbiRjb2xvci1zZXh0ZXJuYXJ5OiAjN2ZlNDNiO1xuXG4kdGltZWxpbmUtYmc6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNEY1RjcwIDAlLCAjMEYxMjE1IDEwMCUpO1xuJHRpbWVsaW5lLWV2ZW50OiAkZXJyb3I7XG4kdGltZWxpbmUtYm9va2luZzogJGNvbG9yLXF1YXRlcm5hcnk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNHB4O1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRtYWluLWZvbnQ6ICRmb250LXN0YWNrO1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cbiAgLmNvbnRhaW5lciA+ICoge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvOyB9XG5cbi50b3BiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDsgfVxuXG4uem9vbSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAxLjVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG4gIC56b29tIC5pdGVtIHtcbiAgICBoZWlnaHQ6IDEuNzVlbTtcbiAgICB3aWR0aDogMS43NWVtO1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zLCBjb2xvciAzMDBtczsgfVxuICAgIC56b29tIC5pdGVtLmRpc2FibGVkIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTsgfVxuICAgICAgLnpvb20gLml0ZW0uZGlzYWJsZWQ6aG92ZXIge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lOyB9XG4gICAgLnpvb20gLml0ZW06aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEpO1xuICAgICAgY29sb3I6ICM0Mjg1RjQ7IH1cblxuLnNldHRpbmdzIHtcbiAgd2lkdGg6IDE1ZW07XG4gIHBhZGRpbmc6IC4yNWVtIC41ZW0gLjI1ZW0gMWVtOyB9XG4gIC5zZXR0aW5ncyAuaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gICAgLnNldHRpbmdzIC5pdGVtIC50ZXh0IHtcbiAgICAgIGZsZXg6IDE7IH1cblxuLnJvb20ge1xuICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgd2lkdGg6IDEzZW07IH1cbiAgLnJvb20gLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IC41ZW07IH1cbiAgLnJvb20gLnRleHQge1xuICAgIGZsZXg6IDE7IH1cbiAgLnJvb20gLmxvdyB7XG4gICAgY29sb3I6ICMzMDliNDA7IH1cbiAgLnJvb20gLm1lZGl1bSB7XG4gICAgY29sb3I6ICNGRjk4MDA7IH1cbiAgLnJvb20gLmhpZ2gge1xuICAgIGNvbG9yOiAjZGIyOTFkOyB9XG5cbi5rZXlzIHtcbiAgd2lkdGg6IDEwcmVtO1xuICBtaW4td2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMWVtOyB9XG4gIC5rZXlzIC5kaXZpZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAuNWVtOyB9XG4gIC5rZXlzIC5iYXIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7IH1cbiAgLmtleXMgLnR5cGUge1xuICAgIHBhZGRpbmc6IDAgLjVlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICBmb250LXNpemU6IC44ZW07IH1cbiAgLmtleXMgLmxpc3Qge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG4gIC5rZXlzIC5ncm91cCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogNDV2aDtcbiAgICBvdmVyZmxvdzogYXV0bzsgfVxuICAua2V5cyAubGlzdC5zaG93IHtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjNDI4NUY0O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMsIGJveC1zaGFkb3cgMzAwbXM7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7IH1cbiAgICAua2V5cyAubGlzdC5zaG93IC5kaXZpZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgICAua2V5cyAubGlzdC5zaG93IC5pdGVtIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bzsgfVxuICAgICAgLmtleXMgLmxpc3Quc2hvdyAuaXRlbSAuaWNvbiB7XG4gICAgICAgIHBhZGRpbmc6IDA7IH1cbiAgICAgIC5rZXlzIC5saXN0LnNob3cgLml0ZW0uYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0Mjg1RjQ7IH1cbiAgICAgICAgLmtleXMgLmxpc3Quc2hvdyAuaXRlbS5hY3RpdmUgLmljb24ge1xuICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgLmtleXMgLmxpc3Quc2hvdyAuZ3JvdXAge1xuICAgICAgZGlzcGxheTogaW5oZXJpdDsgfVxuICAua2V5cy5zZWxlY3QgLmxpc3Quc2hvdyAuaXRlbSB7XG4gICAgZm9udC1zaXplOiAxZW07IH1cbiAgICAua2V5cy5zZWxlY3QgLmxpc3Quc2hvdyAuaXRlbTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI2NmYxO1xuICAgICAgY29sb3I6ICNmZmY7IH1cbiAgLmtleXMgLmljb24ge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5rZXlzIC5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgcGFkZGluZzogMC4yNWVtIDAuNWVtO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBtaW4td2lkdGg6IDEwZW07XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsgfVxuICAgIC5rZXlzIC5pdGVtLmFjdGl2ZSB7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBmb250LXNpemU6IDFlbTsgfVxuICAgICAgLmtleXMgLml0ZW0uYWN0aXZlIC5pY29uIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgY29sb3I6ICM0Mjg1RjQ7IH1cbiAgICAua2V5cyAuaXRlbSAubmFtZSB7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgZmxleDogMTsgfVxuICAgIC5rZXlzIC5pdGVtIC52YWx1ZSB7XG4gICAgICBmbGV4OiAxO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7IH1cbiAgICAua2V5cyAuaXRlbSAuaW1hZ2Uge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIG1heC13aWR0aDogMWVtO1xuICAgICAgbWF4LWhlaWdodDogMWVtO1xuICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICB3aWR0aDogMWVtOyB9XG4gICAgLmtleXMgLml0ZW0gLmNpcmNsZSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICB3aWR0aDogMWVtO1xuICAgICAgbWFyZ2luOiAuNWVtO1xuICAgICAgbWluLXdpZHRoOiAxZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAxLjFlbTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7IH1cbiAgICAgIC5rZXlzIC5pdGVtIC5jaXJjbGUuaWNvbiB7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgIHdpZHRoOiAxLjVlbTtcbiAgICAgICAgbWFyZ2luOiAuMjVlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNzVlbTsgfVxuXG4uc2ltcGxlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC41ZW07XG4gIHJpZ2h0OiAuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gIHBhZGRpbmc6IC41ZW07IH1cbiAgLnNpbXBsZSBidG4ge1xuICAgIGZvbnQtc2l6ZTogMS42ZW07IH1cblxuLm51bWJlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAuMWVtO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgZm9udC1zaXplOiAuNWVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbmJ0biBpLmxhcmdlIHtcbiAgZm9udC1zaXplOiAxLjVlbTsgfVxuXG4vKj09PT09PT09PT09PT09PT09KlxcXG58fCAgTW9iaWxlIFN0eWxlcyAgfHxcblxcKj09PT09PT09PT09PT09PT0qL1xuLm9wdGlvbi1saXN0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMWVtO1xuICBib3R0b206IDFlbTtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgei1pbmRleDogMTA0O1xuICBmb250LXNpemU6IDEuMmVtOyB9XG4gIC5vcHRpb24tbGlzdCAuZ3JvdXAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICB3aWR0aDogMS41ZW07IH1cbiAgICAub3B0aW9uLWxpc3QgLmdyb3VwIGJ0biB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IC0ycHg7XG4gICAgICBsZWZ0OiAtMnB4O1xuICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zLCBvcGFjaXR5IDQwMG1zO1xuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDBlbSk7XG4gICAgICBvcGFjaXR5OiAwOyB9XG4gIC5vcHRpb24tbGlzdCBidG5bZm9ybWF0PVwiYWN0aW9uXCJdIGkge1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAub3B0aW9uLWxpc3Quc2hvdyBidG5bZm9ybWF0PVwiYWN0aW9uXCJdIGkge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTsgfVxuICAub3B0aW9uLWxpc3Quc2hvdyAuZ3JvdXAgYnRuIHtcbiAgICBvcGFjaXR5OiAxOyB9XG5cbi8qPT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgT2xkIFN0eWxlcyAgICB8fFxuXFwqPT09PT09PT09PT09PT09PSovXG4ub3B0aW9ucyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAuNWVtO1xuICByaWdodDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB6LWluZGV4OiAxMDE7XG4gIHdpZHRoOiAzZW0gIWltcG9ydGFudDsgfVxuICAub3B0aW9ucyBidG4ge1xuICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgIG1hcmdpbjogLjJlbTsgfVxuICAub3B0aW9ucy5wdXNoIHtcbiAgICB0b3A6IDMuNWVtOyB9XG4gIC5vcHRpb25zIC5vcHRpb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IC41ZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB3aWR0aDogMi41ZW07XG4gICAgaGVpZ2h0OiAyLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjNlbTtcbiAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcywgaGVpZ2h0IDMwMG1zLCBib3JkZXItcmFkaXVzIDMwMG1zOyB9XG4gICAgLm9wdGlvbnMgLm9wdGlvbi5zaG93IHtcbiAgICAgIHdpZHRoOiAxM2VtO1xuICAgICAgaGVpZ2h0OiAxM2VtO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG4gICAgLm9wdGlvbnMgLm9wdGlvbi5oYWxmLnNob3cge1xuICAgICAgaGVpZ2h0OiA3LjVlbTsgfVxuICAub3B0aW9ucyAuY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICByaWdodDogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTNlbTtcbiAgICBoZWlnaHQ6IDEzZW07IH1cbiAgICAub3B0aW9ucyAuY29udGVudCA+IGRpdiB7XG4gICAgICB3aWR0aDogMTAwJTsgfVxuICAub3B0aW9ucyAuaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAuNjVlbSAxZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7IH1cbiAgLm9wdGlvbnMgLmljb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS42NjY2NmVtO1xuICAgIHdpZHRoOiAxLjY2NjY2ZW0gIWltcG9ydGFudDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIC5vcHRpb25zIC5pY29uOmhvdmVyIHtcbiAgICAgIG9wYWNpdHk6IC41NDsgfVxuICAub3B0aW9ucyAuYm9keSB7XG4gICAgcGFkZGluZzogLjI1ZW0gLjI1ZW0gLjI1ZW0gMWVtOyB9XG4gIC5vcHRpb25zIC5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgICAub3B0aW9ucyAuaXRlbSAudGV4dCB7XG4gICAgICBmbGV4OiAxOyB9XG4gIC5vcHRpb25zIC52YWx1ZSB7XG4gICAgcGFkZGluZzogLjI1ZW0gLjc1ZW07IH1cbiAgLm9wdGlvbnMgLmhpZ2gge1xuICAgIGNvbG9yOiAjZGIyOTFkOyB9XG4gIC5vcHRpb25zIC5tZWRpdW0ge1xuICAgIGNvbG9yOiAjRkY5ODAwOyB9XG4gIC5vcHRpb25zIC5sb3cge1xuICAgIGNvbG9yOiAjMzA5YjQwOyB9XG5cbi5sZXZlbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBwYWRkaW5nOiAuNWVtO1xuICB6LWluZGV4OiAxMDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzLjVlbSk7IH1cbiAgLmxldmVsLnB1c2gge1xuICAgIHRvcDogM2VtOyB9XG5cbi5zaG93LXN0YXRlIHtcbiAgd2lkdGg6IDhlbTtcbiAgaGVpZ2h0OiAyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtYXJnaW46IDAgLjVlbTtcbiAgbWFyZ2luLXRvcDogLTZweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAuNWVtO1xuICBmb250LXNpemU6IDEuMmVtOyB9XG4gIC5zaG93LXN0YXRlIC50ZXh0IHtcbiAgICBmbGV4OiAxOyB9XG4gIC5zaG93LXN0YXRlIC5jaGVja2JveCB7XG4gICAgbWFyZ2luLWxlZnQ6IC41ZW07XG4gICAgZm9udC1zaXplOiAuOGVtOyB9XG5cbi5rZXlzLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTsgfVxuICAua2V5cy1oZWFkZXIgLnZhbHVlIHtcbiAgICBmbGV4OiAxO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxuXG4ua2V5cy1saXN0IHtcbiAgbWFyZ2luLXRvcDogLTZweDsgfVxuXG4uZHJvcGRvd24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMGVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1hcmdpbjogMCAuNWVtO1xuICBmb250LXNpemU6IDEuMmVtOyB9XG4gIC5kcm9wZG93biAuZGl2aWRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGNvbG9yOiAjYWFhO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IC41ZW07IH1cbiAgLmRyb3Bkb3duIC5iYXIge1xuICAgIGhlaWdodDogMXB4O1xuICAgIHdpZHRoOiAxcHg7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhOyB9XG4gIC5kcm9wZG93biAudHlwZSB7XG4gICAgcGFkZGluZzogMCAuNWVtO1xuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgIGZvbnQtc2l6ZTogLjhlbTsgfVxuICAuZHJvcGRvd24gLmxpc3Qge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoMCwgMCwgMCwgMCk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyB9XG4gIC5kcm9wZG93biAuZ3JvdXAge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1heC1oZWlnaHQ6IDQ1dmg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAuZHJvcGRvd24gLmxpc3Quc2hvdyB7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzQyODVGNDtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zLCBib3gtc2hhZG93IDMwMG1zO1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmOyB9XG4gICAgLmRyb3Bkb3duIC5saXN0LnNob3cgLmRpdmlkZXIge1xuICAgICAgZGlzcGxheTogZmxleDsgfVxuICAgIC5kcm9wZG93biAubGlzdC5zaG93IC5pdGVtIHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgICBwb2ludGVyLWV2ZW50czogYXV0bzsgfVxuICAgICAgLmRyb3Bkb3duIC5saXN0LnNob3cgLml0ZW0gLmljb24ge1xuICAgICAgICBwYWRkaW5nOiAwOyB9XG4gICAgICAuZHJvcGRvd24gLmxpc3Quc2hvdyAuaXRlbS5hY3RpdmUge1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQyODVGNDsgfVxuICAgICAgICAuZHJvcGRvd24gLmxpc3Quc2hvdyAuaXRlbS5hY3RpdmUgLmljb24ge1xuICAgICAgICAgIGNvbG9yOiAjZmZmOyB9XG4gICAgLmRyb3Bkb3duIC5saXN0LnNob3cgLmdyb3VwIHtcbiAgICAgIGRpc3BsYXk6IGluaGVyaXQ7IH1cbiAgLmRyb3Bkb3duLnNlbGVjdCAubGlzdC5zaG93IC5pdGVtIHtcbiAgICBmb250LXNpemU6IDFlbTsgfVxuICAgIC5kcm9wZG93bi5zZWxlY3QgLmxpc3Quc2hvdyAuaXRlbTpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTI2NmYxO1xuICAgICAgY29sb3I6ICNmZmY7IH1cbiAgLmRyb3Bkb3duIC5pY29uIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxuICAuZHJvcGRvd24gLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgbWluLXdpZHRoOiAxMGVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IH1cbiAgICAuZHJvcGRvd24gLml0ZW0uYWN0aXZlIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIGZvbnQtc2l6ZTogMWVtOyB9XG4gICAgICAuZHJvcGRvd24gLml0ZW0uYWN0aXZlIC5pY29uIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgY29sb3I6ICM0Mjg1RjQ7IH1cbiAgICAuZHJvcGRvd24gLml0ZW0gLm5hbWUge1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIGZsZXg6IDE7IH1cbiAgICAuZHJvcGRvd24gLml0ZW0gLnZhbHVlIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxuICAgIC5kcm9wZG93biAuaXRlbSAuaW1hZ2Uge1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgIHdpZHRoOiAxZW07XG4gICAgICBoZWlnaHQ6IDFlbTsgfVxuICAgIC5kcm9wZG93biAuaXRlbSAuY2lyY2xlIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgIHdpZHRoOiAxZW07XG4gICAgICBtYXJnaW46IC41ZW07XG4gICAgICBtaW4td2lkdGg6IDFlbTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEuMWVtO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YwZjBmMDsgfVxuICAgICAgLmRyb3Bkb3duIC5pdGVtIC5jaXJjbGUuaWNvbiB7XG4gICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgIHdpZHRoOiAxLjVlbTtcbiAgICAgICAgbWFyZ2luOiAuMjVlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNzVlbTsgfVxuXG4uZmlsdGVycyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxZW07XG4gIGxlZnQ6IDUwJTtcbiAgbWluLWhlaWdodDogMTBlbTtcbiAgd2lkdGg6IDIwZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtMTUwJSk7XG4gIG9wYWNpdHk6IDA7XG4gIHBhZGRpbmc6IC41ZW07XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcywgb3BhY2l0eSAyMDBtcztcbiAgei1pbmRleDogMjAwOyB9XG4gIC5maWx0ZXJzLnNob3cge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCUpOyB9XG4gIC5maWx0ZXJzIC5oZWFkZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAxLjFlbTsgfVxuICAuZmlsdGVycyAuYm9keSB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogMTAwJTsgfVxuXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogLjVlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpOyB9XG4iLCJcbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgJiA+ICoge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICB9XG59XG5cbi50b3BiYXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLnpvb20ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIGJvdHRvbTogMS41ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLC4xMik7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDRweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgLml0ZW0ge1xuICAgICAgICBoZWlnaHQ6IDEuNzVlbTtcbiAgICAgICAgd2lkdGg6IDEuNzVlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1ZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zLCBjb2xvciAzMDBtcztcbiAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgjMDAwLC4yKTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoIzAwMCwuMik7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMCwuMSk7XG4gICAgICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZXR0aW5ncyB7XG4gICAgd2lkdGg6IDE1ZW07XG4gICAgcGFkZGluZzogLjI1ZW0gLjVlbSAuMjVlbSAxZW07XG4gICAgLml0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ucm9vbSB7XG4gICAgcGFkZGluZzogLjVlbSAxZW07XG4gICAgd2lkdGg6IDEzZW07XG4gICAgLml0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW46IC41ZW07XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC5sb3cgeyBjb2xvcjogJHN1Y2Nlc3M7IH1cbiAgICAubWVkaXVtIHsgY29sb3I6ICRwZW5kaW5nOyB9XG4gICAgLmhpZ2ggeyBjb2xvcjogJGVycm9yOyB9XG59XG5cbi5rZXlzIHtcbiAgICB3aWR0aDogMTByZW07XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuXG4gICAgLmRpdmlkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogcmdiYSgjMDAwLC4yKTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IC41ZW07XG4gICAgfVxuXG4gICAgLmJhciB7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsLjIpO1xuICAgIH1cblxuICAgIC50eXBlIHtcbiAgICAgICAgcGFkZGluZzogMCAuNWVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgIH1cblxuICAgIC5saXN0IHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoIzAwMCwgMCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAuZ3JvdXAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogNDV2aDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxuXG4gICAgLmxpc3Quc2hvdyB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcywgYm94LXNoYWRvdyAzMDBtcztcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwuMTIpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcblxuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5ncm91cCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zZWxlY3Qge1xuICAgICAgICAubGlzdC5zaG93IC5pdGVtIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLml0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgcGFkZGluZzogLjI1ZW0uNWVtO1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgIG1pbi13aWR0aDogMTBlbTtcbiAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxZW07XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2lyY2xlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgICAgICBtYXJnaW46IC41ZW0gO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjFlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICAgICAgICAmLmljb24ge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogLjI1ZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNzVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNpbXBsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLjVlbTtcbiAgICByaWdodDogLjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjZlbTtcbiAgICB9XG59XG5cbi5udW1iZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC4xZW07XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBmb250LXNpemU6IC41ZW07XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbmJ0biBpLmxhcmdlIHtcbiAgICBmb250LXNpemU6IDEuNWVtO1xufVxuXG4vKj09PT09PT09PT09PT09PT09KlxcXG58fCAgTW9iaWxlIFN0eWxlcyAgfHxcblxcKj09PT09PT09PT09PT09PT0qL1xuXG4ub3B0aW9uLWxpc3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMWVtO1xuICAgIGJvdHRvbTogMWVtO1xuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgei1pbmRleDogMTA0O1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgLmdyb3VwIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgd2lkdGg6IDEuNWVtO1xuICAgICAgICBidG4ge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICAgICAgbGVmdDogLTJweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcywgb3BhY2l0eSA0MDBtcztcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwZW0pO1xuICAgICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ0bltmb3JtYXQ9XCJhY3Rpb25cIl0ge1xuICAgICAgICBpIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcztcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zaG93IHtcbiAgICAgICAgYnRuW2Zvcm1hdD1cImFjdGlvblwiXSB7XG4gICAgICAgICAgICBpIHtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmdyb3VwIGJ0biB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLyo9PT09PT09PT09PT09PT09PSpcXFxufHwgICBPbGQgU3R5bGVzICAgIHx8XG5cXCo9PT09PT09PT09PT09PT09Ki9cblxuLm9wdGlvbnMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IC41ZW07XG4gICAgcmlnaHQ6IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB6LWluZGV4OiAxMDE7XG4gICAgd2lkdGg6IDNlbSAhaW1wb3J0YW50O1xuICAgIGJ0biB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNWVtO1xuICAgICAgICBtYXJnaW46IC4yZW07XG4gICAgfVxuICAgICYucHVzaCB7XG4gICAgICAgIHRvcDogMy41ZW07XG4gICAgfVxuICAgIC5vcHRpb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogLjVlbTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwuMTIpO1xuICAgICAgICB3aWR0aDogMi41ZW07XG4gICAgICAgIGhlaWdodDogMi41ZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEuM2VtO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAzMDBtcywgaGVpZ2h0IDMwMG1zLCBib3JkZXItcmFkaXVzIDMwMG1zO1xuICAgICAgICAmLnNob3cge1xuICAgICAgICAgICAgd2lkdGg6IDEzZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEzZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgJi5oYWxmIHtcbiAgICAgICAgICAgICYuc2hvdyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3LjVlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB3aWR0aDogMTNlbTtcbiAgICAgICAgaGVpZ2h0OiAxM2VtO1xuICAgICAgICAmID4gZGl2IHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IC42NWVtIDFlbTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEuNjY2NjZlbTtcbiAgICAgICAgd2lkdGg6IDEuNjY2NjZlbSAhaW1wb3J0YW50O1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogLjU0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJvZHkge1xuICAgICAgICBwYWRkaW5nOiAuMjVlbSAuMjVlbSAuMjVlbSAxZW07XG4gICAgfVxuXG4gICAgLml0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAudGV4dCB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnZhbHVlIHtcbiAgICAgICAgcGFkZGluZzogLjI1ZW0gLjc1ZW07XG4gICAgfVxuXG4gICAgLmhpZ2gge1xuICAgICAgICBjb2xvcjogJGVycm9yO1xuICAgIH1cblxuICAgIC5tZWRpdW0ge1xuICAgICAgICBjb2xvcjogJHBlbmRpbmc7XG4gICAgfVxuXG4gICAgLmxvdyB7XG4gICAgICAgIGNvbG9yOiAkc3VjY2VzcztcbiAgICB9XG59XG5cbi5sZXZlbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgei1pbmRleDogMTAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAzLjVlbSk7XG4gICAgJi5wdXNoIHtcbiAgICAgICAgdG9wOiAzZW07XG4gICAgfVxufVxuXG4uc2hvdy1zdGF0ZSB7XG4gICAgd2lkdGg6IDhlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLC4xMik7XG4gICAgbWFyZ2luOiAwIC41ZW07XG4gICAgbWFyZ2luLXRvcDogLTZweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAuNWVtO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgLnRleHQge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbiAgICAuY2hlY2tib3gge1xuICAgICAgICBtYXJnaW4tbGVmdDogLjVlbTtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgIH1cbn1cblxuLmtleXMtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLnZhbHVlIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICB9XG59XG5cbi5rZXlzLWxpc3Qge1xuICAgIG1hcmdpbi10b3A6IC02cHg7XG59XG5cbi5kcm9wZG93biB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMGVtO1xuICAgIGhlaWdodDogMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoIzAwMCwuMiksIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsLjEyKTtcbiAgICBtYXJnaW46IDAgLjVlbTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuXG4gICAgLmRpdmlkZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IC41ZW07XG4gICAgfVxuXG4gICAgLmJhciB7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICAgIH1cblxuICAgIC50eXBlIHtcbiAgICAgICAgcGFkZGluZzogMCAuNWVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgIH1cblxuICAgIC5saXN0IHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoIzAwMCwgMCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAuZ3JvdXAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWF4LWhlaWdodDogNDV2aDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgLmxpc3Quc2hvdyB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcywgYm94LXNoYWRvdyAzMDBtcztcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwuMTIpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5pdGVtIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcblxuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5ncm91cCB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmhlcml0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5zZWxlY3Qge1xuICAgICAgICAubGlzdC5zaG93IC5pdGVtIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLml0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgcGFkZGluZzogLjI1ZW0uNWVtO1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgIG1pbi13aWR0aDogMTBlbTtcbiAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICYuYWN0aXZlIHtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICAgICAgLmljb24ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNpcmNsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICAgICAgbWFyZ2luOiAuNWVtIDtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMWVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMS4xZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgICAgICAgICAgJi5pY29uIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuNWVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxLjVlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IC4yNWVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjc1ZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5maWx0ZXJzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxZW07XG4gICAgbGVmdDogNTAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwZW07XG4gICAgd2lkdGg6IDIwZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwuMTIpO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xNTAlKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDIwMG1zLCBvcGFjaXR5IDIwMG1zO1xuICAgIHotaW5kZXg6IDIwMDtcbiAgICAmLnNob3cge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwJSk7XG4gICAgfVxuXG4gICAgLmhlYWRlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBwYWRkaW5nOiAuNWVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIH1cblxuICAgIC5ib2R5IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uY2xvc2Uge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDUwJTtcbiAgICByaWdodDogLjVlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/shell/explore/components/map-overlay/map-overlay.template.html":
/*!********************************************************************************!*\
  !*** ./src/app/shell/explore/components/map-overlay/map-overlay.template.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" (window:tap)=\"tapWindow($event)\" (window:resize)=\"model.show = {}\">\n    <div class=\"bindings\" *ngIf=\"model.level && model.level.active\">\n        <i binding [(value)]=\"model.desks.free\" (valueChange)=\"processRooms()\" [sys]=\"model.system\" mod=\"DeskManagement\" [bind]=\"model.level.active.id + ':free_count'\"></i>\n        <i binding [(value)]=\"model.desks.count\" (valueChange)=\"processRooms()\" [sys]=\"model.system\" mod=\"DeskManagement\" [bind]=\"model.level.active.id + ':desk_count'\"></i>\n    </div>\n    <div class=\"zoom\">\n        <div class=\"item\" (tap)=\"zoom(1.2)\">\n            <i class=\"material-icons\">add</i>\n        </div>\n        <div class=\"item\" (tap)=\"zoom(1 / 1.2)\" [class.disabled]=\"!settings || !settings.zoom || settings.zoom <= 100\">\n            <i class=\"material-icons\">remove</i>\n        </div>\n        <div class=\"item\" (tap)=\"reset()\">\n            <i class=\"material-icons\">refresh</i>\n        </div>\n    </div>\n    <div class=\"not-mobile\">\n        <div class=\"simple\" *ngIf=\"!model.old\">\n            <ng-container *ngFor=\"let item of model.options; let i = index\">\n                <btn name=\"black inverse\" format=\"mini-action\" (tap)=\"action(item)\"\n                    tooltip [(show)]=\"model.show[item.id]\" position=\"left\" [offset]=\"item.offset || 'start'\" [template]=\"model.template[item.id]\"\n                    (tapped)=\"item.template ? (model.show[item.id] = !model.show[item.id]) : ''\">\n                    <i *ngIf=\"item.icon\" [class]=\"item.icon.class\" [class.large]=\"item.large\">{{item.icon.value}}</i>\n                    <div class=\"number\" *ngIf=\"item.number\">{{model.level?.active?.number}}</div>\n                </btn>\n            </ng-container>\n        </div>\n        <div class=\"old-overlay\" *ngIf=\"model.old\">\n            <div class=\"level\" *ngIf=\"model.level && model.level.list && model.level.list.length\" [class.push]=\"model.search === 'spaces' || model.search === 'people'\">\n                <dropdown [list]=\"model.level.names\" [(model)]=\"model.level.index\" (modelChange)=\"setLevel(model.level.list[$event])\"></dropdown>\n                <div class=\"show-state\" *ngIf=\"model.zones && model.zones.enabled && model.search !== 'people'\">\n                    <div class=\"text\">Zones</div>\n                    <div class=\"checkbox\">\n                        <toggle name=\"zones\" [(model)]=\"model.zones.show\" (modelChange)=\"updateState()\" type=\"ios\"></toggle>\n                    </div>\n                </div>\n                <custom-dropdown [content]=\"keys_content\" [template]=\"key_list\">\n                    <ng-template #keys_content>\n                        <div class=\"keys-header\">\n                            <div class=\"value\">{{model.keys.types && model.keys.types.length === 1 ? model.keys.types[0] : '' }} Keys</div>\n                            <div class=\"icon\">\n                                <i class=\"material-icons\">{{model.keys.show ? 'keyboard_arrow_up' : 'keyboard_arrow_down'}}</i>\n                            </div>\n                        </div>\n                    </ng-template>\n                </custom-dropdown>\n            </div>\n            <div class=\"options\">\n                <div class=\"btn\" *ngIf=\"!model.zones.enabled\">\n                    <btn *ngIf=\"!model.map_settings || model.map_settings.settings !== false\"\n                        [name]=\"model.show.settings ? '' : 'black inverse'\" format=\"mini-action\" (tapped)=\"model.show.settings = !model.show.settings\"\n                        tooltip [(show)]=\"model.show.settings\" position=\"left\" offset=\"start\" [template]=\"map_settings\">\n                        <i class=\"material-icons\">settings</i>\n                    </btn>\n                    <ng-template #map_settings>\n                        <div class=\"settings\">\n                            <div class=\"item\">\n                                <div class=\"text\">Desk Status</div>\n                                <div class=\"checkbox\">\n                                    <toggle name=\"zones\" [(model)]=\"model.show.desks\" (modelChange)=\"updateState()\" type=\"ios\"></toggle>\n                                </div>\n                            </div>\n                            <div class=\"item\">\n                                <div class=\"text\">Room Status</div>\n                                <div class=\"checkbox\">\n                                    <toggle name=\"zones\" [(model)]=\"model.show.rooms\" (modelChange)=\"updateState()\" type=\"ios\"></toggle>\n                                </div>\n                            </div>\n                            <div class=\"item\">\n                                <div class=\"text\">Team Tables</div>\n                                <div class=\"checkbox\">\n                                    <toggle name=\"zones\" [(model)]=\"model.show.teams\" (modelChange)=\"updateState()\" type=\"ios\"></toggle>\n                                </div>\n                            </div>\n                            <div class=\"item\">\n                                <div class=\"text\">Zones</div>\n                                <div class=\"checkbox\">\n                                    <toggle name=\"zones\" [(model)]=\"model.zones.show\" (modelChange)=\"updateState()\" type=\"ios\"></toggle>\n                                </div>\n                            </div>\n                        </div>\n                    </ng-template>\n                </div>\n                <div class=\"btn\" *ngIf=\"!model.zones.enabled\">\n                    <btn *ngIf=\"!model.map_settings || model.map_settings.info !== false\"\n                        [name]=\"model.show.info ? '' : 'black inverse'\" format=\"mini-action\" (tapped)=\"model.show.info = !model.show.info\"\n                        tooltip [(show)]=\"model.show.info\" position=\"left\" [template]=\"room_info\">\n                        <i class=\"material-icons\">info</i>\n                    </btn>\n                </div>\n                <div class=\"btn\" *ngIf=\"!model.zones.enabled\">\n                    <btn *ngIf=\"!model.map_settings || model.map_settings.filters !== false\"\n                        [name]=\"model.show_filters ? '' : 'black inverse'\" format=\"mini-action\" (tapped)=\"model.show_filters = !model.show_filters\">\n                        <i class=\"material-icons\">filter_list</i>\n                    </btn>\n                </div>\n                <btn name=\"black\" *ngIf=\"model.back\" format=\"mini-action\" (tapped)=\"back()\">\n                    <i class=\"material-icons\">arrow_back</i>\n                </btn>\n            </div>\n        </div>\n        <ng-template #room_info>\n            <div class=\"room\" *ngIf=\"model.level && model.level.active && model.desks\">\n                <div class=\"item\" *ngIf=\"model.desks && model.desks.count\">\n                    <div class=\"text\">Desks free</div>\n                    <div class=\"value\" [class.low]=\"model.desks.percent > 75\" [class.medium]=\"model.desks.percent > 25 && model.desks.percent <= 75\" [class.high]=\"model.desks.percent <= 25\">\n                        {{model.desks.free}}\n                    </div>\n                    <div class=\"value\">&nbsp;of {{model.desks.count}}</div>\n                </div>\n                <div class=\"item\" *ngIf=\"model.rooms && model.rooms.count\">\n                    <div class=\"text\">Spaces free</div>\n                    <div class=\"value\" [class.low]=\"model.rooms.percent > 75\" [class.medium]=\"model.rooms.percent > 25 && model.rooms.percent <= 75\" [class.high]=\"model.rooms.percent <= 25\">\n                        {{model.rooms.free}}\n                    </div>\n                    <div class=\"value\">&nbsp;of {{model.rooms.count}}</div>\n                </div>\n            </div>\n        </ng-template>\n        <ng-template #key_list>\n            <div class=\"keys\">\n                <ng-container *ngFor=\"let type of model.keys.types\">\n                    <div class=\"divider\" *ngIf=\"model.keys.types.length > 1\">\n                        <div class=\"bar\"></div>\n                        <div class=\"type\">{{type}}</div>\n                        <div class=\"bar\"></div>\n                    </div>\n                    <div class=\"item\" *ngFor=\"let key of model.keys.groups[type]\">\n                        <div class=\"circle\" [style.background-color]=\"key.color\" [class.icon]=\"key.icon || key.image\">\n                            <div class=\"icon\" *ngIf=\"key.icon || key.image\">\n                                <div *ngIf=\"key.image\" class=\"image\" [style.background-image]=\"'url('+key.image+')'\"></div>\n                                <i *ngIf=\"key.icon\" [class]=\"key.icon.class\">{{key.icon.value}}</i>\n                            </div>\n                        </div>\n                        <div class=\"name\">{{key.name}}</div>\n                    </div>\n                </ng-container>\n            </div>\n        </ng-template>\n        <!-- <ng-template #room_info>\n            <div class=\"room\" *ngIf=\"model.level && model.level.active && model.desks\">\n                <div class=\"item\">\n                    <div class=\"text\"># of desks</div>\n                    <div class=\"value\">{{model.desks.count || '0'}}</div>\n                </div>\n                <div class=\"item\">\n                    <div class=\"text\">Free desks</div>\n                    <div class=\"value\" [class.low]=\"model.desks.free > 50\" [class.medium]=\"model.desks.free > 25 && model.desks.free <= 25\" [class.high]=\"model.desks.free <= 25\">\n                        {{model.desks.free || '0'}}\n                    </div>\n                </div>\n            </div>\n        </ng-template> -->\n    </div>\n    <div class=\"mobile\">\n        <div class=\"option-list mobile-only\" [class.show]=\"model.show_menu\">\n            <div class=\"group\">\n                <ng-container *ngFor=\"let item of model.options; let i = index\">\n                    <btn [name]=\"'black inverse no-margin ' + item.class\" format=\"mini-action\" (tapped)=\"action(item)\"\n                        tooltip [(show)]=\"model.show[item.id + '_mobile']\" position=\"left\" [offset]=\"item.offset || 'end'\" [template]=\"model.template[item.id]\"\n                        [style.transform]=\"model.show_menu ? 'translateY(-'+ (2.5 * (model.options.length - i)) +'em)' : ''\"\n                        (tapped)=\"item.template ? (model.show[item.id + '_mobile'] = !model.show[item.id + '_mobile']) : ''\">\n                        <i *ngIf=\"item.icon\" [class]=\"item.icon.class\" [class.large]=\"item.large\">{{item.icon.value}}</i>\n                        <div class=\"number\" *ngIf=\"item.number\">{{model.level?.active?.number}}</div>\n                    </btn>\n                </ng-container>\n            </div>\n            <btn name=\"black inverse no-margin\" format=\"action\" (tap)=\"model.show_menu = !model.show_menu\">\n                <i class=\"material-icons\">{{model.show_menu ? 'add' : 'more_vert'}}</i>\n            </btn>\n        </div>\n    </div>\n\n    <div class=\"filters\" [class.show]=\"model.show_filters\">\n        <div class=\"header\">\n            <div class=\"heading\">Filter zones</div>\n            <div class=\"close\" (touchrelease)=\"model.show_filters = false\">\n                <div class=\"material-icons\">close</div>\n            </div>\n        </div>\n        <div class=\"body\">\n            <div class=\"item\" *ngFor=\"let item of model.level.active.map.features\">\n                <checkbox [(model)]=\"item.active\" [label]=\"item.name\"></checkbox>\n            </div>\n        </div>\n        <div class=\"footer\">\n            <btn name=\"inverse\" (tapped)=\"applyFilters()\">Apply filters</btn>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/shell/explore/components/search/search.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shell/explore/components/search/search.component.ts ***!
  \*********************************************************************/
/*! exports provided: ExploreSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreSearchComponent", function() { return ExploreSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_utility_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/utility.class */ "./src/app/shared/utility.class.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
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
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var ExploreSearchComponent = /** @class */ (function (_super) {
    __extends(ExploreSearchComponent, _super);
    function ExploreSearchComponent(service, route, router) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        _this.router = router;
        _this.item = null;
        _this.itemChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {};
        _this.filtered_items = [];
        _this.timers = {};
        return _this;
    }
    ExploreSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        var win = self;
        this.model.loaded = false;
        this.model.isScrolling;
        this.model.speech = !!(win.SpeechRecognition || win.webkitSpeechRecognition);
        this.model.settings = {};
        this.subs.obs.users = this.service.Users.listen('user_list', function (list) {
            _this.model.user_list = list || [];
            _this.model.user_list.sort(function (a, b) { return a.name.localeCompare(b.name); });
            _this.filter();
        });
        this.subs.obs.rooms = this.service.Rooms.listen('room_list', function () {
            _this.model.room_list = _this.service.Rooms.list();
            _this.filter();
        });
        this.subs.obs.bld = this.service.Buildings.listen(function (bld) {
            if (bld) {
                _this.model.search = '';
                _this.model.room_list = _this.service.Rooms.list();
                _this.filter();
            }
        });
        this.subs.obs.query = this.route.queryParamMap.subscribe(function (params) {
            if (params.has('role')) {
                _this.model.role_param = params.get('role');
                _this.initRole();
            }
        });
        this.subs.obs.route = this.route.paramMap.subscribe(function (params) {
            if (params.has('search')) {
                _this.model.search_type = params.get('search');
                _this.updateShow();
                _this.filter();
            }
        });
        // Clear results when route changes
        this.subs.obs.routing = this.router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                _this.filtered_items = [];
                _this.model.search = '';
                _this.service.set('BANNER.block_height', 0);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                _this.updateShow();
            }
        });
        this.init();
    };
    ExploreSearchComponent.prototype.init = function () {
        var _this = this;
        var bld = this.service.Buildings.current();
        if (!this.service.Settings.setup || !bld) {
            return setTimeout(function () { return _this.init(); }, 500);
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
    };
    ExploreSearchComponent.prototype.initRole = function () {
        var _this = this;
        if (this.model.role_param && this.model.role && this.model.role.list) {
            for (var _i = 0, _a = this.model.role.list; _i < _a.length; _i++) {
                var i = _a[_i];
                if (i.id === this.model.role_param) {
                    this.model.role.active = this.model.role.list.indexOf(i);
                    this.filter();
                    break;
                }
            }
        }
        else if (!this.model.role || !this.model.role.list) {
            setTimeout(function () { return _this.initRole(); }, 500);
        }
    };
    /**
     * Update list of filtered items
     */
    ExploreSearchComponent.prototype.filter = function (focused) {
        var _this = this;
        if (focused === void 0) { focused = false; }
        if (!this.model.settings) {
            return;
        }
        this.model.loading = true;
        this.timeout('loading', function () { return _this.model.loading = false; }, 310);
        // Prevent deselection o
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
            _this.clearTimer('loading');
            _this.model.loading = true;
            if (_this.model.search_type === 'spaces') {
                // Only return rooms/spaces
                _this.filterRooms().then(function (rooms) {
                    _this.filtered_items = rooms;
                    _this.filtered_items.sort(function (a, b) { return a.name.localeCompare(b.name); });
                    return (_this.model.loading = false);
                });
            }
            else if (_this.model.search_type === 'people') {
                // Only return people
                _this.filterUsers().then(function (users) {
                    _this.filtered_items = users;
                    return (_this.model.loading = false);
                });
            }
            else {
                // Return both spaces and people
                _this.filterUsers().then(function (users) {
                    var role = _this.model.role;
                    if (role && role.active >= 0) {
                        _this.filtered_items = users;
                        return (_this.model.loading = false);
                    }
                    else {
                        _this.filterRooms().then(function (rooms) {
                            _this.filtered_items = (users || []).concat(rooms);
                            _this.filtered_items.sort(function (a, b) { return a.name.localeCompare(b.name); });
                            return (_this.model.loading = false);
                        });
                    }
                });
            }
        });
    };
    /**
     * Promise of filtered users
     */
    ExploreSearchComponent.prototype.filterUsers = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var search = (_this.model.search || '').toLowerCase();
            var role = _this.model.role;
            if ((search && search.length >= _this.model.min_search) || (role && role.active >= 0) || !_this.model.min_search) {
                var users_1 = [];
                // Get filtered users
                if (role && role.active >= 0) {
                    users_1 = _this.service.Users.getFilteredUsers(search, role.list[role.active].users);
                    resolve(users_1);
                }
                else if (!_this.model.min_search && _this.model.user_list && _this.model.user_list.length > 0) {
                    users_1 = _this.service.Users.getFilteredUsers(search, _this.model.user_list);
                    resolve(users_1);
                }
                else {
                    var request_id_1 = Math.floor(Math.random() * 899999 + 100000);
                    _this.model.request_id = request_id_1;
                    _this.service.Users.query({ q: search, limit: 50 })
                        .then(function (list) {
                        if (request_id_1 === _this.model.request_id) {
                            users_1 = _this.service.Users.getFilteredUsers(search, list);
                            resolve(users_1);
                        }
                    }, function () { return resolve(users_1); });
                }
            }
            else {
                resolve([]);
            }
        });
    };
    /**
     * Promise of filtered spaces
     */
    ExploreSearchComponent.prototype.filterRooms = function () {
        var _this = this;
        return new Promise(function (resolve) {
            var search = (_this.model.search || '').toLowerCase();
            var list = [];
            for (var _i = 0, _a = _this.model.room_list; _i < _a.length; _i++) {
                var item = _a[_i];
                list.push({
                    id: item.id,
                    prefix: item.prefix,
                    bookable: item.bookable,
                    map_id: item.map_id,
                    name: item.name,
                    level: item.level
                });
            }
            var bld = _this.service.Buildings.current();
            if (bld && bld.map && bld.map.searchables) {
                for (var level in bld.map.searchables) {
                    if (bld.map.searchables.hasOwnProperty(level)) {
                        for (var name_1 in bld.map.searchables[level]) {
                            if (bld.map.searchables[level].hasOwnProperty(name_1)) {
                                var lvl = _this.service.Buildings.getLevel(level);
                                list.push({ map_id: bld.map.searchables[level][name_1], name: name_1, level: lvl, prefix: false });
                            }
                        }
                    }
                }
            }
            if (!search) {
                return resolve(list);
            }
            var rooms = [];
            for (var _b = 0, list_1 = list; _b < list_1.length; _b++) {
                var rm = list_1[_b];
                if (((rm.name || '').toLowerCase().indexOf(search) >= 0 ||
                    (rm.level && (rm.level.name || '').toLowerCase().indexOf(search) >= 0)) && rm.searchable !== false) {
                    rooms.push(rm);
                }
            }
            resolve(rooms);
        });
    };
    /**
     * Get phone number for users
     * @param users List of users
     */
    ExploreSearchComponent.prototype.getPhoneNumber = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var person;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!user.phone) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.service.Users.show(user.email).catch(function () { return null; })];
                    case 1:
                        person = _a.sent();
                        if (person && person.phone) {
                            user.phone = person.phone;
                        }
                        _a.label = 2;
                    case 2: return [2 /*return*/, user];
                }
            });
        });
    };
    /**
     * On scroll
     */
    ExploreSearchComponent.prototype.scrollChange = function () {
        var _this = this;
        if (this.filtered_items && this.filtered_items.length !== 0 && this.model.search_type === 'people') {
            this.model.loading_phone = true;
            var _a = this.viewport.getRenderedRange(), start = _a.start, end = _a.end;
            var visible_users = this.filtered_items.slice(start, end);
            var promises_1 = Promise.all(visible_users.map(function (user) {
                return _this.getPhoneNumber(user);
            }));
            clearTimeout(this.model.isScrolling);
            this.model.isScrolling = setTimeout(function () {
                promises_1.then(function (users) {
                    _this.filtered_items.map(function (item) {
                        var user = users.find(function (el) { return el.id === item.id; });
                        if (user)
                            return user;
                        return item;
                    });
                    _this.model.loading_phone = false;
                });
            }, 200);
        }
    };
    /**
     * Post item to find on map
     * @param item Displayed item selected by the user
     */
    ExploreSearchComponent.prototype.find = function (item) {
        this.item = item;
        this.model.search = item.name;
        this.model.focus = false;
        this.model.dictate = false;
        if (this.input && this.input.nativeElement) {
            this.input.nativeElement.blur();
        }
        this.itemChange.emit(item);
        this.updateShow();
    };
    /**
     * Open telephone URL for item
     * @param item Displayed item selected by the user
     */
    ExploreSearchComponent.prototype.call = function (item) {
        var phone = '';
        item.phone = -1;
        if (!item.phone || item.phone === -1) {
            // Load user phone number from API
            this.service.Users.show(item.email).then(function (person) {
                if (person && person.phone) {
                    phone = _shared_utility_class__WEBPACK_IMPORTED_MODULE_4__["Utils"].removeChars(person.phone, ' ()_-');
                    location.href = "tel:" + phone;
                }
                else {
                    item.phone = -1;
                }
                item.loading = false;
            }, function () { return item.phone = -1; });
        }
        else {
            phone = _shared_utility_class__WEBPACK_IMPORTED_MODULE_4__["Utils"].removeChars(item.phone, ' ()_-');
            location.href = "tel:" + phone;
            item.loading = false;
        }
    };
    /**
     * Open support URL for the selected item
     * @param item Selected item
     */
    ExploreSearchComponent.prototype.control = function (item) {
        if (item.support_url) {
            window.open(item.support_url, 'blank_');
        }
    };
    /**
     * Close the search and clear the selected item
     */
    ExploreSearchComponent.prototype.close = function () {
        this.model.search = '';
        this.item = null;
        this.model.role.active = -1;
        this.filter();
        if (this.input && this.input.nativeElement) {
            this.input.nativeElement.blur();
        }
        this.itemChange.emit(this.item);
    };
    /**
     * Activate dictation search
     */
    ExploreSearchComponent.prototype.startDictation = function () {
        var _this = this;
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
                _this.input.nativeElement.value = e.results[0][0].transcript;
                _this.model.search = e.results[0][0].transcript;
                _this.model.recognition.stop();
                _this.filter();
                _this.model.dictate = false;
            };
            this.model.recognition.onerror = function (e) {
                _this.model.recognition.stop();
                _this.model.dictate = false;
            };
        }
    };
    ExploreSearchComponent.prototype.updateShow = function () {
        var _this = this;
        this.timeout('update_show', function () {
            var people = (!_this.item && _this.model.role.active !== -1) || (_this.model.search_type === 'people' && !_this.item);
            _this.model.show = people || _this.model.focus || _this.model.dictate;
            _this.model.banner = _this.model.settings && _this.model.settings.banner && _this.model.settings.banner.search;
            var r = _this.model.role && _this.model.role.list && _this.model.role.list.length > 0;
            _this.model.banner_roles = _this.model.banner && _this.model.settings.banner.roles && _this.model.search_type !== 'spaces' && r;
            if (_this.model.show && _this.model.banner) {
                var h = _this.model.banner_roles ? 6.5 : 4;
                _this.service.set('BANNER.block_height', h);
            }
            else {
                _this.service.set('BANNER.block_height', 0);
            }
        }, 500);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ExploreSearchComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ExploreSearchComponent.prototype, "itemChange", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('input'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ExploreSearchComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"]),
        __metadata("design:type", _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_2__["CdkVirtualScrollViewport"])
    ], ExploreSearchComponent.prototype, "viewport", void 0);
    ExploreSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'explore-search',
            template: __webpack_require__(/*! ./search.template.html */ "./src/app/shell/explore/components/search/search.template.html"),
            styles: [__webpack_require__(/*! ./search.styles.scss */ "./src/app/shell/explore/components/search/search.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ExploreSearchComponent);
    return ExploreSearchComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/explore/components/search/search.styles.scss":
/*!********************************************************************!*\
  !*** ./src/app/shell/explore/components/search/search.styles.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  height: 3em;\n  width: 100%; }\n.container.route .search {\n    height: 3.5em; }\n.container.route .search.show {\n      height: 100%; }\n.container.route .search.show .field {\n        width: 1048px; }\n.container.route .field {\n    width: 100%;\n    max-width: 100vw;\n    height: 3em;\n    border: none;\n    border-radius: 1.5em;\n    margin-top: .25em; }\n.search {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #ecf1f5;\n  z-index: 105;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 4em;\n  -webkit-transition: height 300ms;\n  transition: height 300ms; }\n.search.show {\n    height: 100%; }\n.header {\n  position: relative;\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  background-color: #ecf1f5;\n  overflow: hidden;\n  height: 3.5em;\n  -webkit-transition: height 300ms, background 300ms, -webkit-transform 300ms;\n  transition: height 300ms, background 300ms, -webkit-transform 300ms;\n  transition: height 300ms, transform 300ms, background 300ms;\n  transition: height 300ms, transform 300ms, background 300ms, -webkit-transform 300ms;\n  z-index: 202;\n  -webkit-transform: translateY(0%);\n          transform: translateY(0%); }\n.header.roles {\n    height: 6.5em; }\n.header.banner {\n    position: absolute;\n    height: 4em;\n    top: 0;\n    -webkit-transform: translateY(-100%);\n            transform: translateY(-100%);\n    background: none; }\n.header.banner.roles {\n      height: 7em; }\n.header.banner .banner-roles {\n      height: 3em; }\n.header .banner-roles {\n    display: -webkit-box;\n    display: flex;\n    height: 0em;\n    overflow: hidden;\n    -webkit-transition: height 300ms;\n    transition: height 300ms; }\n.field {\n  width: 100%;\n  z-index: 101;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  min-height: 3em;\n  -webkit-transition: width 300ms;\n  transition: width 300ms; }\n.field .icon {\n    font-size: 1.5em; }\n.field input {\n    font-size: 1em;\n    background: none;\n    outline: none;\n    color: rgba(0, 0, 0, 0.87);\n    border: none;\n    width: 100%; }\n.field input::-webkit-input-placeholder {\n      color: rgba(0, 0, 0, 0.2); }\n.field input:-ms-input-placeholder {\n      color: rgba(0, 0, 0, 0.2); }\n.field input::-ms-input-placeholder {\n      color: rgba(0, 0, 0, 0.2); }\n.field input::placeholder {\n      color: rgba(0, 0, 0, 0.2); }\n.field img {\n    position: absolute;\n    top: .4em;\n    left: .4em;\n    height: 1.5em;\n    width: 1.5em; }\n.body {\n  overflow: auto;\n  width: 100%;\n  -webkit-box-flex: 1;\n          flex: 1;\n  -webkit-transition: height 300ms;\n  transition: height 300ms;\n  height: 50%; }\n.list {\n  height: 100%; }\n.user {\n  display: -webkit-box;\n  display: flex;\n  min-height: 5em;\n  padding: .25em 1em;\n  width: 1024px;\n  max-width: 95vw;\n  margin: .5em auto;\n  background-color: #fff;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  border-radius: 8px; }\n.item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  text-align: left; }\n.list {\n  min-height: 100%;\n  height: 100%; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .loc {\n    display: none; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .loc {\n    display: none; } }\n.details {\n  -webkit-box-flex: 1;\n          flex-grow: 1;\n  width: 40%;\n  min-width: 8em; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n    .details {\n      font-size: .8em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n    .details {\n      font-size: .8em; } }\n.name {\n  font-size: 1.2em;\n  width: 100%; }\n.email {\n  font-size: .8em;\n  width: 100%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis; }\n.email a {\n    color: #7dd6d6; }\n.email a:hover {\n      text-decoration: underline; }\n.info {\n  min-width: 9em;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row; }\n.info .details {\n    font-size: .8em; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n    .info {\n      font-size: .8em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n    .info {\n      font-size: .8em; } }\n.icon {\n  position: relative;\n  height: 1em;\n  width: 1em;\n  margin-right: .25em;\n  font-size: 2em; }\n.role-list {\n  font-size: .8em;\n  padding: .5em;\n  text-align: center; }\n.role-list .header {\n    margin-bottom: .5em; }\n.role {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  margin: 0 .5em; }\n.role .icon {\n    height: 1em;\n    width: 1em;\n    font-size: 1em;\n    margin: 0;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center; }\n.role .text {\n    padding: 0 0 0 .25em;\n    white-space: nowrap;\n    -webkit-box-flex: 1;\n            flex: 1;\n    text-transform: capitalize; }\n.filter {\n  left: .5em; }\n.opts btn .icon {\n  display: -webkit-box;\n  display: flex;\n  height: 4em;\n  width: 4em;\n  margin: .4em;\n  font-size: .25em; }\n.close {\n  position: relative;\n  color: rgba(0, 0, 0, 0.54);\n  height: 2em;\n  width: 2em;\n  cursor: pointer; }\n.close:hover {\n    color: rgba(0, 0, 0, 0.87); }\n.close i {\n    font-size: 1.5em; }\n.close .active {\n    color: #4285F4; }\n.close.active {\n    color: #40485a; }\n.filter {\n  position: absolute;\n  top: .5em;\n  height: 2em;\n  width: 2em;\n  border: 1px solid #000;\n  background-color: #fff;\n  border-radius: 1em; }\n.filter:hover {\n    opacity: .8; }\n.filter i {\n    font-size: 1.5em; }\n.no-item {\n  overflow: hidden;\n  max-height: 100%;\n  min-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvZXhwbG9yZS9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guc3R5bGVzLnNjc3MiLCIvVXNlcnMvYmVuaG9hZC9Qcm9qZWN0cy9tY2stb3V0bG9vay1hZGRpbi9zcmMvYXBwL3NoZWxsL2V4cGxvcmUvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLnN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztpQ0NFaUM7QUQrQmpDOzt1QkM1QnVCO0FEeUN2Qjs7c0JDdENzQjtBQ0x0QjtFQUNJLFdBQVc7RUFDWCxXQUFXLEVBQUE7QUFGZjtJQUtZLGFBQWEsRUFBQTtBQUx6QjtNQU9nQixZQUFZLEVBQUE7QUFQNUI7UUFTb0IsYUFBYSxFQUFBO0FBVGpDO0lBY1ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQixpQkFBaUIsRUFBQTtBQUs3QjtFQUNJLGtCQUFrQjtFQUNsQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCRnRCZ0I7RUV1QmhCLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsZ0NBQXdCO0VBQXhCLHdCQUF3QixFQUFBO0FBWDVCO0lBYVEsWUFBWSxFQUFBO0FBSXBCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIseUJGekNnQjtFRTBDaEIsZ0JBQWdCO0VB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Q2IseUJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGNBQWMsRUFBQTtBQUpsQjtJQU1RLFdBQVc7SUFDWCxVQUFVO0lBQ1YsY0FBYztJQUNkLFNBQVM7SUFDVCxvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHdCQUF1QjtZQUF2Qix1QkFBdUIsRUFBQTtBQVovQjtJQWdCUSxvQkFBb0I7SUFDcEIsbUJBQW1CO0lBQ25CLG1CQUFPO1lBQVAsT0FBTztJQUNQLDBCQUEwQixFQUFBO0FBSWxDO0VBQ0ksVUFBVSxFQUFBO0FBR2Q7RUFHWSxvQkFBYTtFQUFiLGFBQWE7RUFDYixXQUFXO0VBQ1gsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0IsRUFBQTtBQUs1QjtFQUNJLGtCQUFrQjtFQUNsQiwwQkFBZ0I7RUFDaEIsV0FBVztFQUNYLFVBQVU7RUFDVixlQUFlLEVBQUE7QUFMbkI7SUFRUSwwQkFBZ0IsRUFBQTtBQVJ4QjtJQVdRLGdCQUFnQixFQUFBO0FBWHhCO0lBY1EsY0Z4UGUsRUFBQTtBRTBPdkI7SUFrQlEsY0YzUGlCLEVBQUE7QUUrUHpCO0VBQ0ksa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsa0JBQWtCLEVBQUE7QUFQdEI7SUFVUSxXQUFXLEVBQUE7QUFWbkI7SUFjUSxnQkFBZ0IsRUFBQTtBQUl4QjtFQUNJLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsZ0JBQWdCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9leHBsb3JlL2NvbXBvbmVudHMvc2VhcmNoL3NlYXJjaC5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kc3VjY2VzczogIzMwOWI0MDtcbiRzdWNjZXNzLWFsdDogIzQyODVmNDtcbiRlcnJvcjogI2RiMjkxZDtcbiRwZW5kaW5nOiAjRkY5ODAwO1xuJG5ldXRyYWw6ICM3OTc5Nzk7XG5cbiRiYWNrZ3JvdW5kOiAjZWNmMWY1O1xuXG4kaGVhZGVyLWhlaWdodDogNGVtO1xuJGNvbG9yLXByaW1hcnktd2lyZWZyYW1lOnJnYmEoMCwgMCwgMCwgMC42MSk7XG4kaGVhZGVyLWJnOiAjZmZmO1xuJGhlYWRlci1jb2xvcjogcmdiYSgjMDAyOTYwLCAuODcpO1xuXG4kdGlsZS1jb2xvcjogI2ZmZjtcbiR0aWxlLWJvcmRlcjogI2ZmZjtcblxuJGhlbHAtYm9yZGVyOiByZ2JhKCMwMDAsIC4yKTtcblxuJGNvbG9yLXByaW1hcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5OiAjNDA0ODVhO1xuJGNvbG9yLXRlcm5hcnk6ICNjNzk5NjE7XG4kY29sb3ItcXVhdGVybmFyeTogIzdkZDZkNjtcbiRjb2xvci1xdWludGVybmFyeTogIzRjNWM2YztcbiRjb2xvci1zZXh0ZXJuYXJ5OiAjN2ZlNDNiO1xuXG4kdGltZWxpbmUtYmc6IGxpbmVhci1ncmFkaWVudCgtMTgwZGVnLCAjNEY1RjcwIDAlLCAjMEYxMjE1IDEwMCUpO1xuJHRpbWVsaW5lLWV2ZW50OiAkZXJyb3I7XG4kdGltZWxpbmUtYm9va2luZzogJGNvbG9yLXF1YXRlcm5hcnk7XG5cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNHB4O1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRtYWluLWZvbnQ6ICRmb250LXN0YWNrO1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBoZWlnaHQ6IDNlbTtcbiAgd2lkdGg6IDEwMCU7IH1cbiAgLmNvbnRhaW5lci5yb3V0ZSAuc2VhcmNoIHtcbiAgICBoZWlnaHQ6IDMuNWVtOyB9XG4gICAgLmNvbnRhaW5lci5yb3V0ZSAuc2VhcmNoLnNob3cge1xuICAgICAgaGVpZ2h0OiAxMDAlOyB9XG4gICAgICAuY29udGFpbmVyLnJvdXRlIC5zZWFyY2guc2hvdyAuZmllbGQge1xuICAgICAgICB3aWR0aDogMTA0OHB4OyB9XG4gIC5jb250YWluZXIucm91dGUgLmZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgIGhlaWdodDogM2VtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVlbTtcbiAgICBtYXJnaW4tdG9wOiAuMjVlbTsgfVxuXG4uc2VhcmNoIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMWY1O1xuICB6LWluZGV4OiAxMDU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogNGVtO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7IH1cbiAgLnNlYXJjaC5zaG93IHtcbiAgICBoZWlnaHQ6IDEwMCU7IH1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMWY1O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBoZWlnaHQ6IDMuNWVtO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXMsIHRyYW5zZm9ybSAzMDBtcywgYmFja2dyb3VuZCAzMDBtcztcbiAgei1pbmRleDogMjAyO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpOyB9XG4gIC5oZWFkZXIucm9sZXMge1xuICAgIGhlaWdodDogNi41ZW07IH1cbiAgLmhlYWRlci5iYW5uZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDRlbTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiBub25lOyB9XG4gICAgLmhlYWRlci5iYW5uZXIucm9sZXMge1xuICAgICAgaGVpZ2h0OiA3ZW07IH1cbiAgICAuaGVhZGVyLmJhbm5lciAuYmFubmVyLXJvbGVzIHtcbiAgICAgIGhlaWdodDogM2VtOyB9XG4gIC5oZWFkZXIgLmJhbm5lci1yb2xlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDBlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtczsgfVxuXG4uZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtaW4taGVpZ2h0OiAzZW07XG4gIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zOyB9XG4gIC5maWVsZCAuaWNvbiB7XG4gICAgZm9udC1zaXplOiAxLjVlbTsgfVxuICAuZmllbGQgaW5wdXQge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgd2lkdGg6IDEwMCU7IH1cbiAgICAuZmllbGQgaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7IH1cbiAgLmZpZWxkIGltZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLjRlbTtcbiAgICBsZWZ0OiAuNGVtO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtOyB9XG5cbi5ib2R5IHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHdpZHRoOiAxMDAlO1xuICBmbGV4OiAxO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7XG4gIGhlaWdodDogNTAlOyB9XG5cbi5saXN0IHtcbiAgaGVpZ2h0OiAxMDAlOyB9XG5cbi51c2VyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWluLWhlaWdodDogNWVtO1xuICBwYWRkaW5nOiAuMjVlbSAxZW07XG4gIHdpZHRoOiAxMDI0cHg7XG4gIG1heC13aWR0aDogOTV2dztcbiAgbWFyZ2luOiAuNWVtIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgYm9yZGVyLXJhZGl1czogOHB4OyB9XG5cbi5pdGVtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHRleHQtYWxpZ246IGxlZnQ7IH1cblxuLmxpc3Qge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7IH1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcbiAgLmxvYyB7XG4gICAgZGlzcGxheTogbm9uZTsgfSB9XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAubG9jIHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cblxuLmRldGFpbHMge1xuICBmbGV4LWdyb3c6IDE7XG4gIHdpZHRoOiA0MCU7XG4gIG1pbi13aWR0aDogOGVtOyB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgLmRldGFpbHMge1xuICAgICAgZm9udC1zaXplOiAuOGVtOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmRldGFpbHMge1xuICAgICAgZm9udC1zaXplOiAuOGVtOyB9IH1cblxuLm5hbWUge1xuICBmb250LXNpemU6IDEuMmVtO1xuICB3aWR0aDogMTAwJTsgfVxuXG4uZW1haWwge1xuICBmb250LXNpemU6IC44ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAuZW1haWwgYSB7XG4gICAgY29sb3I6ICM3ZGQ2ZDY7IH1cbiAgICAuZW1haWwgYTpob3ZlciB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuXG4uaW5mbyB7XG4gIG1pbi13aWR0aDogOWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxuICAuaW5mbyAuZGV0YWlscyB7XG4gICAgZm9udC1zaXplOiAuOGVtOyB9XG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgLmluZm8ge1xuICAgICAgZm9udC1zaXplOiAuOGVtOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLmluZm8ge1xuICAgICAgZm9udC1zaXplOiAuOGVtOyB9IH1cblxuLmljb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IC4yNWVtO1xuICBmb250LXNpemU6IDJlbTsgfVxuXG4ucm9sZS1saXN0IHtcbiAgZm9udC1zaXplOiAuOGVtO1xuICBwYWRkaW5nOiAuNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cbiAgLnJvbGUtbGlzdCAuaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtOyB9XG5cbi5yb2xlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbjogMCAuNWVtOyB9XG4gIC5yb2xlIC5pY29uIHtcbiAgICBoZWlnaHQ6IDFlbTtcbiAgICB3aWR0aDogMWVtO1xuICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIG1hcmdpbjogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cbiAgLnJvbGUgLnRleHQge1xuICAgIHBhZGRpbmc6IDAgMCAwIC4yNWVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgZmxleDogMTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTsgfVxuXG4uZmlsdGVyIHtcbiAgbGVmdDogLjVlbTsgfVxuXG4ub3B0cyBidG4gLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDRlbTtcbiAgd2lkdGg6IDRlbTtcbiAgbWFyZ2luOiAuNGVtO1xuICBmb250LXNpemU6IC4yNWVtOyB9XG5cbi5jbG9zZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7IH1cbiAgLmNsb3NlOmhvdmVyIHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuICAuY2xvc2UgaSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTsgfVxuICAuY2xvc2UgLmFjdGl2ZSB7XG4gICAgY29sb3I6ICM0Mjg1RjQ7IH1cbiAgLmNsb3NlLmFjdGl2ZSB7XG4gICAgY29sb3I6ICM0MDQ4NWE7IH1cblxuLmZpbHRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAuNWVtO1xuICBoZWlnaHQ6IDJlbTtcbiAgd2lkdGg6IDJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMWVtOyB9XG4gIC5maWx0ZXI6aG92ZXIge1xuICAgIG9wYWNpdHk6IC44OyB9XG4gIC5maWx0ZXIgaSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTsgfVxuXG4ubm8taXRlbSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7IH1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIGhlaWdodDogM2VtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgICYucm91dGUge1xuICAgICAgICAuc2VhcmNoIHtcbiAgICAgICAgICAgIGhlaWdodDogMy41ZW07XG4gICAgICAgICAgICAmLnNob3cge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICAuZmllbGQge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTA0OHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuZmllbGQge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgaGVpZ2h0OiAzZW07XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxLjVlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC4yNWVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VhcmNoIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gICAgei1pbmRleDogMTA1O1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNGVtO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcztcbiAgICAmLnNob3cge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxufVxuXG4uaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQ7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBoZWlnaHQ6IDMuNWVtO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCAzMDBtcywgdHJhbnNmb3JtIDMwMG1zLCBiYWNrZ3JvdW5kIDMwMG1zO1xuICAgIHotaW5kZXg6IDIwMjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCUpO1xuICAgICYucm9sZXMge1xuICAgICAgICBoZWlnaHQ6IDYuNWVtO1xuICAgIH1cbiAgICAmLmJhbm5lciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTtcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICAgICAgJi5yb2xlcyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDdlbTtcbiAgICAgICAgfVxuICAgICAgICAuYmFubmVyLXJvbGVzIHtcbiAgICAgICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmJhbm5lci1yb2xlcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMGVtO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7XG4gICAgfVxufVxuXG4uZmllbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDEwMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogM2VtO1xuICAgIHRyYW5zaXRpb246IHdpZHRoIDMwMG1zO1xuXG4gICAgLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIH1cblxuICAgIGlucHV0IHtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC44Nyk7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC4yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAuNGVtO1xuICAgICAgICBsZWZ0OiAuNGVtO1xuICAgICAgICBoZWlnaHQ6IDEuNWVtO1xuICAgICAgICB3aWR0aDogMS41ZW07XG4gICAgfVxufVxuXG4uYm9keSB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMTtcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMzAwbXM7XG4gICAgaGVpZ2h0OiA1MCU7XG59XG5cbi5saXN0IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi51c2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1pbi1oZWlnaHQ6IDVlbTtcbiAgICBwYWRkaW5nOiAuMjVlbSAxZW07XG4gICAgd2lkdGg6IDEwMjRweDtcbiAgICBtYXgtd2lkdGg6IDk1dnc7XG4gICAgbWFyZ2luOiAuNWVtIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsIC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG59XG5cbi5pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4ubGlzdCB7XG4gICAgbWluLWhlaWdodDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgLmxvYyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufVxuXG4uZGV0YWlscyB7XG4gICAgZmxleC1ncm93OiAxO1xuICAgIHdpZHRoOiA0MCU7XG4gICAgbWluLXdpZHRoOiA4ZW07XG4gICAgQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgIH1cbn1cblxuLm5hbWUge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5lbWFpbCB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICBhIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1xdWF0ZXJuYXJ5O1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaW5mbyB7XG4gICAgbWluLXdpZHRoOiA5ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIC5kZXRhaWxzIHtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgIH1cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgfVxufVxuXG4uaWNvbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMWVtO1xuICAgIHdpZHRoOiAxZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAuMjVlbTtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuLnJvbGUtbGlzdCB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5oZWFkZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAgIH1cbn1cblxuLnJvbGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgLjVlbTtcbiAgICAuaWNvbiB7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgICAgICB3aWR0aDogMWVtO1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwIC4yNWVtO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG59XG5cbi5maWx0ZXIge1xuICAgIGxlZnQ6IC41ZW07XG59XG5cbi5vcHRzIHtcbiAgICBidG4ge1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgaGVpZ2h0OiA0ZW07XG4gICAgICAgICAgICB3aWR0aDogNGVtO1xuICAgICAgICAgICAgbWFyZ2luOiAuNGVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAuMjVlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHJnYmEoIzAwMCwgLjU0KTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBjb2xvcjogcmdiYSgjMDAwLCAuODcpO1xuICAgIH1cbiAgICBpIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB9XG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICB9XG5cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5O1xuICAgIH1cbn1cblxuLmZpbHRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLjVlbTtcbiAgICBoZWlnaHQ6IDJlbTtcbiAgICB3aWR0aDogMmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxZW07XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgfVxuXG4gICAgaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgfVxufVxuXG4ubm8taXRlbSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shell/explore/components/search/search.template.html":
/*!**********************************************************************!*\
  !*** ./src/app/shell/explore/components/search/search.template.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [class.route]=\"model.route\">\n    <div class=\"tapzone\" (window:tap)=\"updateShow()\"></div>\n    <div class=\"search\" [class.show]=\"model.show\">\n        <div class=\"header\" [class.banner]=\"model.show && model.banner\" [class.roles]=\"model.banner_roles\">\n            <div class=\"banner-roles\" *ngIf=\"model.banner_roles\">\n                <div class=\"role\" *ngFor=\"let r of model.role.list; let i = index\">\n                    <btn [name]=\"model.role.active === i ? 'wide banner inverse' : 'wide banner'\" (tapped)=\"(model.role.active === i ? model.role.active = -1 : model.role.active = i); filter(true)\">\n                        <div class=\"icon\" *ngIf=\"r.icon || r.image\">\n                            <i *ngIf=\"r.icon\" [class]=\"r.icon.class\">{{r.icon.value}}</i>\n                            <img *ngIf=\"r.image\" [src]=\"r.image\" [alt]=\"r.name\">\n                        </div>\n                        <div class=\"text\">{{r.name}}</div>\n                    </btn>\n                </div>\n            </div>\n            <div class=\"field\">\n                <searchbar [(filter)]=\"model.search\" (filterChange)=\"filter()\" (focus)=\"item = null; model.focus = true; updateShow()\"\n                    (blur)=\"model.focus = false; updateShow()\" [placeholder]=\"model.search_type === 'people' ? 'Search for people...' : (model.search_type === 'spaces' ? 'Search for spaces...' : 'Search...')\">\n                    <div class=\"close\" *ngIf=\"model.search_type !== 'spaces' && !model.banner_roles && model.role && model.role.list && model.role.list.length > 0 && (!model.settings || !model.settings.banner || model.settings.banner.people !== 'roles')\"\n                        (tap)=\"model.show_roles = true\" tooltip [(show)]=\"model.show_roles\" [template]=\"rolelist\"\n                        offset=\"end\">\n                        <i center class=\"material-icons\" [class.active]=\"(model.role.active || model.role.active === 0) && model.role.active !== -1\">filter_list</i>\n                        <ng-template #rolelist>\n                            <div class=\"role-list\" *ngIf=\"model.role.list && model.role.list.length > 0\">\n                                <div class=\"header\">Select Role</div>\n                                <div class=\"role\">\n                                    <btn [name]=\"model.role.active === undefined || model.role.active === -1 ? 'wide' : 'wide inverse'\"\n                                        (tapped)=\"model.role.active = -1; model.show_roles = false; filter()\">\n                                        <div class=\"text\">None</div>\n                                    </btn>\n                                </div>\n                                <div class=\"role\" *ngFor=\"let r of model.role.list; let i = index\">\n                                    <btn [name]=\"model.role.active === i ? 'wide' : 'wide inverse'\" (tapped)=\"(model.role.active === i ? model.role.active = -1 : model.role.active = i); model.show_roles = false; filter()\">\n                                        <div class=\"icon\" *ngIf=\"r.icon || r.image\">\n                                            <i *ngIf=\"r.icon\" [class]=\"r.icon.class\">{{r.icon.value}}</i>\n                                            <img *ngIf=\"r.image\" [src]=\"r.image\" [alt]=\"r.name\">\n                                        </div>\n                                        <div class=\"text\">{{r.name}}</div>\n                                    </btn>\n                                </div>\n                            </div>\n                        </ng-template>\n                    </div>\n                </searchbar>\n            </div>\n        </div>\n        <div class=\"body\">\n            <div class=\"list\" *ngIf=\"!model.loading && model.inited\">\n                <ng-container *ngIf=\"filtered_items\">\n                    <cdk-virtual-scroll-viewport class=\"list\" itemSize=\"90\">\n                        <ng-container *cdkVirtualFor=\"let item of filtered_items\">\n                            <div class=\"user\">\n                                <div class=\"item details\">\n                                    <div class=\"name\">{{item.name}}</div>\n                                    <div class=\"email\" *ngIf=\"!item.level\">\n                                        <a [href]=\"'mailto:' + item.email\">{{item.email}}</a>\n                                    </div>\n                                    <div class=\"email\" *ngIf=\"item.level\">{{item.level?.name}}</div>\n                                </div>\n                                <div class=\"item info\" *ngIf=\"item.location\">\n                                    <div class=\"loc\" *ngIf=\"item.location.fixed\">\n                                        {{item.location.name}}\n                                    </div>\n                                    <div class=\"icon\">\n                                        <i center class=\"material-icons\">{{item.location ? (item.location.fixed ? 'room' :\n                                            'wifi') : ''}}</i>\n                                    </div>\n                                    <div class=\"details\" *ngIf=\"item.location.display\">\n                                        <div class=\"name\">{{item.location.display.building}}</div>\n                                        <div class=\"email\">\n                                            {{item.location.display.level}}\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"item opts\">\n                                    <btn name=\"red\" (tapped)=\"find(item)\">\n                                        <div>Find</div>\n                                    </btn>\n                                    <btn name=\"red\" *ngIf=\"item.level && model.settings.control && item.support_url\" (tapped)=\"control(item)\">\n                                        <div>Control</div>\n                                    </btn>\n                                    <btn (tapped)=\"call(item)\" [disabled]=\"item.phone === -1\" *ngIf=\"!item.level\">\n                                        <div class=\"text\" *ngIf=\"!item.loading\">Contact</div>\n                                        <div class=\"icon\" *ngIf=\"item.loading\">\n                                            <spinner type=\"circle-ring\" color=\"#fff\"></spinner>\n                                        </div>\n                                    </btn>\n                                </div>\n                            </div>\n                        </ng-container>\n                    </cdk-virtual-scroll-viewport>\n                </ng-container>\n            </div>\n            <div class=\"no-item center\" *ngIf=\"(model.loading || (!filtered_items || filtered_items.length <= 0) || !model.inited)\">\n                <div class=\"icon\">\n                    <spinner *ngIf=\"model.loading\" type=\"circle-ring\" color=\"#999\"></spinner>\n                    <i *ngIf=\"!model.loading\" class=\"material-icons\">{{model.search && model.search.length >=\n                        model.min_search ? 'close' : 'keyboard'}}</i>\n                </div>\n                <div class=\"text\">\n                    {{model.loading ? 'Searching...' : (model.search && model.search.length >= model.min_search ? 'No\n                    matches found' : 'Type\n                    above to search')}}\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/explore/explore.component.ts":
/*!****************************************************!*\
  !*** ./src/app/shell/explore/explore.component.ts ***!
  \****************************************************/
/*! exports provided: ExploreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExploreComponent", function() { return ExploreComponent; });
/* harmony import */ var _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @acaprojects/ngx-widgets */ "./node_modules/@acaprojects/ngx-widgets/esm5/acaprojects-ngx-widgets.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_room_info_room_info_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/room-info/room-info.component */ "./src/app/shared/components/room-info/room-info.component.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _shared_components_desk_info_desk_info_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/desk-info/desk-info.component */ "./src/app/shared/components/desk-info/desk-info.component.ts");
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







var ExploreComponent = /** @class */ (function (_super) {
    __extends(ExploreComponent, _super);
    function ExploreComponent(route, router, service) {
        var _this = _super.call(this) || this;
        _this.route = route;
        _this.router = router;
        _this.service = service;
        _this.model = [];
        _this.model.setting_list = [
            { id: 'desks', name: 'Desks Status' },
            { id: 'rooms', name: 'Rooms Status' },
            { id: 'teams', name: 'Team Tables' },
            { id: 'zones', name: 'Zones Status' }
        ];
        return _this;
    }
    ExploreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.obs.router = this.router.events.subscribe(function (e) {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                _this.service.set('APP.swipe_disabled', e.url.indexOf('explore') >= 0);
            }
            else if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                if (_this.model.zones) {
                    _this.model.zones.show = false;
                }
                if (_this.model.map) {
                    _this.model.map.zoom = 100;
                    _this.model.map.center = { x: .5, y: .5 };
                }
                _this.clear();
                _this.update();
            }
        });
        this.subs.obs.params = this.route.paramMap.subscribe(function (params) {
            if (params.has('search')) {
                _this.model.search = params.get('search');
            }
        });
        this.service.set('BANNER.block_height', 0);
        this.subs.obs.query = this.route.queryParamMap.subscribe(function (params) {
            if (params.has('room_id')) {
                _this.focusOnRoom(params.get('room_id'));
            }
            if (params.has('level')) {
                _this.setLevelByID(params.get('level'));
            }
            if (params.has('level_id')) {
                _this.setLevelByID(params.get('level_id'));
            }
            if (params.has('back')) {
                _this.model.back = params.get('back');
            }
        });
        this.subs.obs.user = this.service.Users.listen('user', function (item) { return _this.model.user = item; });
        this.model.map = {};
        this.model.show = { rooms: true, desks: true };
        this.model.map.poi = [];
        this.model.desks = {};
        this.model.zones = {};
        this.model.settings = {};
        this.service.set('EXPLORE.show.desks', this.model.show.desks);
        this.service.set('EXPLORE.show.rooms', this.model.show.rooms);
        this.subs.obs.exp_filter = this.service.listen('EXPLORE.filters', function () { return _this.update(); });
        this.subs.obs.exp_features = this.service.listen('EXPLORE.map.hide', function (a) {
            _this.update();
        });
        this.subs.obs.exp_settings = this.service.listen('EXPLORE.settings', function (value) { return _this.updateSettings(value); });
        this.subs.obs.exp_level = this.service.listen('EXPLORE.level', function (value) { return _this.setLevelByID(value); });
        this.model.colours = { rooms: {}, desks: {}, zones: {} };
        if (this.model.keys) {
            this.model.keys.show = false;
        }
        this.clear();
        this.service.set('APP.swipe_disabled', true);
        this.subs.obs.building = this.service.Buildings.listen(function (bld) {
            if (bld) {
                var active = _this.model.level ? _this.model.level.active : null;
                _this.model.level = {};
                _this.model.system = bld.systems.desks;
                _this.model.focus_user = null;
                _this.model.found_room = null;
                _this.model.info = null;
                _this.model.level.list = bld.levels;
                _this.model.rooms = _this.service.Rooms.list();
                _this.model.room_pin = null;
                if (_this.model.level.list) {
                    _this.model.level.names = [];
                    for (var _i = 0, _a = _this.model.level.list; _i < _a.length; _i++) {
                        var level = _a[_i];
                        _this.model.level.names.push(level.name);
                    }
                    var lvl = null;
                    if (active) {
                        lvl = _this.setLevelByID(active.id);
                    }
                    if (!lvl && _this.model.level.list.length > 0) {
                        _this.setLevel(_this.model.level.list[0]);
                    }
                }
                if (_this.model.found_user) {
                    _this.focusUser(_this.model.found_user);
                }
                _this.update();
            }
        });
        this.init();
    };
    ExploreComponent.prototype.init = function () {
        var _this = this;
        if (!this.service.ready()) {
            this.timeout('init', function () { return _this.init(); }, 500);
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
        this.subs.obs.rooms = this.service.Rooms.listen('list', function () {
            _this.model.rooms = _this.service.Rooms.list();
            _this.update();
        });
        this.model.map_bookable = this.service.Settings.get('app.map.bookings');
        this.interval('rooms', function () { return _this.updateRoomState(); }, 25 * 1000);
        this.service.Analytics.screen('Explore');
        this.service.Analytics.page("/explore" + (this.model.search ? '/' + this.model.search : ''));
    };
    ExploreComponent.prototype.focusOnRoom = function (id, tries) {
        var _this = this;
        if (tries === void 0) { tries = 0; }
        if (tries > 10) {
            return;
        }
        if (this.model.rooms && this.model.rooms.length > 0) {
            for (var _i = 0, _a = this.model.rooms; _i < _a.length; _i++) {
                var rm = _a[_i];
                if (rm.id === id) {
                    this.focusSpace(rm);
                    break;
                }
            }
        }
        else {
            this.timeout('focus_room', function () { return _this.focusOnRoom(id, tries++); }, 300 * tries++);
        }
    };
    ExploreComponent.prototype.toggle = function (name) {
        var _this = this;
        this.timeout("toggle_" + name, function () { return _this.model[name].show = !_this.model[name].show; }, 100);
    };
    ExploreComponent.prototype.setLevelByID = function (id, emit) {
        if (emit === void 0) { emit = true; }
        if (id && this.model.level && this.model.level.list) {
            for (var _i = 0, _a = this.model.level.list; _i < _a.length; _i++) {
                var lvl = _a[_i];
                if (lvl.id === id) {
                    this.setLevel(lvl, emit);
                    return lvl;
                }
            }
        }
        return null;
    };
    ExploreComponent.prototype.setLevel = function (lvl, emit, force) {
        if (emit === void 0) { emit = true; }
        if (force === void 0) { force = false; }
        if (lvl && ((this.model.level && this.model.level.list && this.model.level.list.indexOf(lvl) >= 0) || force)) {
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
    };
    ExploreComponent.prototype.updateLevel = function () {
        for (var _i = 0, _a = this.model.level.list; _i < _a.length; _i++) {
            var lvl = _a[_i];
            if (this.model.map.src === lvl.map_url) {
                this.model.level.active = lvl;
                break;
            }
        }
        this.update();
    };
    ExploreComponent.prototype.updateSettings = function (settings) {
        this.model.map.zoom = settings && settings.zoom !== undefined ? settings.zoom : this.model.map.zoom;
        this.model.map.center = settings && settings.center !== undefined ? settings.center : this.model.map.center;
        if (settings && settings.center) {
            delete settings.center;
        }
        this.update();
    };
    ExploreComponent.prototype.updateRoomState = function () {
        if (this.model.rooms) {
            for (var _i = 0, _a = this.model.rooms; _i < _a.length; _i++) {
                var rm = _a[_i];
                this.processBookings(rm, false);
            }
            this.update();
        }
    };
    ExploreComponent.prototype.processBookings = function (room, update) {
        if (update === void 0) { update = true; }
        if (room.raw_bookings && room.raw_bookings.length > 0) {
            this.service.Rooms.processRoom(room);
            if (update) {
                this.update();
            }
            this.model.change = !this.model.change;
        }
    };
    ExploreComponent.prototype.updateZoom = function () {
        var settings = this.service.get('EXPLORE.settings');
        settings.zoom = this.model.map.zoom;
        this.service.set('EXPLORE.settings', settings);
    };
    ExploreComponent.prototype.update = function () {
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
    };
    ExploreComponent.prototype.updateState = function () {
        if (this.model.show) {
            this.service.set('EXPLORE.show.desks', this.model.show.desks);
            this.service.set('EXPLORE.show.rooms', this.model.show.rooms);
            this.service.set('EXPLORE.show.teams', this.model.show.teams);
        }
        if (this.model.zones) {
            this.service.set('EXPLORE.show.zones', this.model.zones.show);
        }
        this.update();
    };
    ExploreComponent.prototype.updateListeners = function () {
        var _this = this;
        this.model.map.listeners = [];
        if (this.model.rooms && this.model.level && this.model.level.active) {
            var _loop_1 = function (room) {
                if (room.map_id && room.level && room.level.id === this_1.model.level.active.id) {
                    this_1.model.map.listeners.push({ id: "area-" + room.map_id + "-status", event: 'mouseenter', callback: function () {
                            _this.model.info = room;
                            _this.updatePointsOfInterest();
                        } });
                    this_1.model.map.listeners.push({ id: "area-" + room.map_id + "-status", event: 'mouseleave', callback: function () {
                            _this.model.info = null;
                            _this.updatePointsOfInterest();
                        } });
                    if (room.bookable) {
                        this_1.model.map.listeners.push({ id: "area-" + room.map_id + "-status", event: 'tap', callback: function () {
                                _this.model.selected = null;
                                _this.model.display = null;
                                _this.service.Bookings.bookRoom(room);
                            } });
                    }
                }
            };
            var this_1 = this;
            for (var _i = 0, _a = this.model.rooms; _i < _a.length; _i++) {
                var room = _a[_i];
                _loop_1(room);
            }
        }
        if (this.model.desks && this.model.desks.in_use) {
            var _loop_2 = function (desk) {
                this_2.model.map.listeners.push({ id: "" + desk, event: 'mouseenter', callback: function () { return _this.setDesk(desk); } });
                this_2.model.map.listeners.push({ id: "" + desk, event: 'mouseleave', callback: function () { return _this.setDesk(null); } });
            };
            var this_2 = this;
            for (var _b = 0, _c = this.model.desks.in_use; _b < _c.length; _b++) {
                var desk = _c[_b];
                _loop_2(desk);
            }
            var _loop_3 = function (desk) {
                this_3.model.map.listeners.push({ id: "" + desk, event: 'mouseenter', callback: function () { return _this.setDesk(desk); } });
                this_3.model.map.listeners.push({ id: "" + desk, event: 'mouseleave', callback: function () { return _this.setDesk(null); } });
            };
            var this_3 = this;
            for (var _d = 0, _e = (this.model.desks.reserved || []); _d < _e.length; _d++) {
                var desk = _e[_d];
                _loop_3(desk);
            }
        }
        this.model.desk = null;
        this.updateStyles();
        this.updatePointsOfInterest();
    };
    ExploreComponent.prototype.setDesk = function (desk) {
        this.model.desk = desk;
        this.updatePointsOfInterest();
    };
    ExploreComponent.prototype.updateStyles = function () {
        var _this = this;
        this.timeout('styles', function () {
            _this.model.style = {};
            _this.model.map.styles = {};
            _this.model.style.general = {};
            _this.updateRoomStyles();
            _this.updateDeskStyles();
            _this.updateZoneStyles();
            _this.updateFeatureStyles();
            for (var k in _this.model.style) {
                if (_this.model.style.hasOwnProperty(k) && _this.model.style[k]) {
                    for (var i in _this.model.style[k]) {
                        if (_this.model.style[k].hasOwnProperty(i)) {
                            _this.model.map.styles[i] = _this.model.style[k][i];
                        }
                    }
                }
            }
            _this.clearTimer('styles');
        });
    };
    ExploreComponent.prototype.updateRoomStyles = function () {
        var _this = this;
        this.model.style.rooms = {};
        if (!this.model.show.rooms) {
            this.model.style.rooms["[id$=\"-status\"]"] = { opacity: '0' };
            return;
        }
        if (this.model.rooms && this.model.rooms.length > 0) {
            for (var _i = 0, _a = this.model.rooms; _i < _a.length; _i++) {
                var room = _a[_i];
                if (this.model.level && this.model.level.active && this.model.level.active.id === room.level.id) {
                    var color = this.model.colours.rooms['not-bookable'] || '#ccc';
                    if (room.bookable && room.in_use) {
                        color = this.model.colours.rooms['unavailable'] || '#E53935';
                    }
                    else if (room.bookable) {
                        color = this.model.colours.rooms['available'] || '#4CAF50';
                    }
                    this.model.style.rooms["#area-" + room.map_id + "-status"] = {
                        fill: color,
                        opacity: '0.8',
                    };
                }
            }
        }
        else {
            this.timeout('room_styles', function () { return _this.updateRoomStyles(); });
        }
    };
    ExploreComponent.prototype.updateDeskStyles = function () {
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
            this.model.style.desks["#" + loc.map_id] = {
                fill: colours['unavailable-fill'] || '#fff',
                stroke: colours['unavailable-stroke'] || '#ccc'
            };
        }
        if (this.model.desks) {
            var u_desk = this.model.desks.user;
            var list = this.model.desks.in_use || [];
            var reserved = this.model.desks.reserved;
            if (this.model.desks.list) {
                for (var _i = 0, _a = this.model.desks.list; _i < _a.length; _i++) {
                    var label = _a[_i];
                    if (label) {
                        var desk = "" + label;
                        var desk_obj = {
                            level: this.model.active,
                            id: desk,
                            name: "Desk " + label.split('-')[1],
                        };
                        var is_reserved = reserved && reserved.indexOf(label) >= 0;
                        var in_use = list && list.indexOf(label) >= 0;
                        var users_desk = u_desk && u_desk.connected && u_desk.desk_id === label;
                        this.model.style.desks["#" + desk] = {
                            fill: colours['available-fill'] || '#4CAF50',
                            stroke: colours['available-stroke'] || '#4CAF50'
                        };
                        if (in_use || is_reserved) {
                            var type = users_desk ? 'user' : (is_reserved ? 'reserved' : 'unavailable');
                            this.model.style.desks["#" + desk].fill = colours[type + "-fill"] || colours['unavailable-fill'] || '#fff';
                            this.model.style.desks["#" + desk].stroke = colours[type + "-stroke"] || colours['unavailable-stroke'] || '#ccc';
                        }
                    }
                }
            }
        }
    };
    ExploreComponent.prototype.updateZoneStyles = function () {
        this.model.style.zones = {};
        var colors = this.model.colours.zones || {};
        var lvl = this.model.level.active;
        if (!this.model.zones || !this.model.zones.enabled || !this.model.zones.show) {
            this.model.style.zones['#Zones'] = { opacity: '0' };
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
                    var zone_usage = (this.model.zone_usage[zone].people_count / this.model.zone_usage[zone].capacity) * 100;
                    var percent = Math.max(min_percent, zone_usage);
                    var fill = percent < 40 ? colors.low || '#317c36' : (percent < 75 ? colors.medium || '#f4a81d' : colors.high || '#cd212e');
                    this.model.map.styles["#" + zone] = { fill: fill };
                    this.model.map.styles["#" + zone + "-status"] = { fill: fill };
                }
            }
        }
    };
    ExploreComponent.prototype.updateFeatureStyles = function () {
        this.model.style.features = {};
        var hidden_features = this.service.get('EXPLORE.map.hide') || [];
        for (var _i = 0, hidden_features_1 = hidden_features; _i < hidden_features_1.length; _i++) {
            var id = hidden_features_1[_i];
            this.model.style.features["#" + id] = { opacity: '0' };
        }
    };
    ExploreComponent.prototype.check = function (e) {
        if (e.type === 'warning' && this.model.found_user && this.model.found_user.location &&
            this.model.found_user.location.map_id && e.msg.indexOf(this.model.found_user.location.map_id) >= 0) {
            this.model.found_user.pin_error = true;
        }
    };
    ExploreComponent.prototype.focus = function (item) {
        this.model.map.zoom = 100;
        this.model.map.center = { x: .5, y: .5 };
        if (item.type) {
            this.focusUser(item);
        }
        else {
            this.focusSpace(item);
        }
    };
    ExploreComponent.prototype.focusUser = function (user) {
        var _this = this;
        if (user) {
            this.model.found_item = null;
            this.model.focus_room = null;
            if (user.type === 'role') {
                this.updatePointsOfInterest();
                this.service.Users.show(user.email).then(function (u) {
                    _this.locate(u);
                }, function (err) { return null; });
            }
            else {
                this.locate(user);
            }
        }
    };
    ExploreComponent.prototype.locate = function (user) {
        var _this = this;
        user.location = null;
        this.model.found_user = user;
        this.service.Users.location(user.id, user.win_id).then(function (location) {
            _this.model.found_user.location = location;
            var found = false;
            var bld = _this.service.Buildings.current();
            // Cross building location finding is enabled
            if (_this.model.settings.cblf) {
                var level = _this.service.Buildings.getLevel(location.level);
                if (level) {
                    for (var _i = 0, _a = (bld ? bld.levels : _this.model.level.list); _i < _a.length; _i++) {
                        var lvl = _a[_i];
                        if (level.id === lvl.id) {
                            _this.setLevel(lvl);
                            found = true;
                            break;
                        }
                    }
                    // Level is in another building
                    if (!found) {
                        _this.setLevel(level, false, true);
                        _this.model.found_user.location.building = _this.service.Buildings.get(level.bld_id);
                        _this.model.found_user.external = true;
                        found = true;
                    }
                }
            }
            else { // Only locate users in the current building
                for (var _b = 0, _c = (bld ? bld.levels : _this.model.level.list); _b < _c.length; _b++) {
                    var lvl = _c[_b];
                    if (location.level === lvl.id) {
                        _this.setLevel(lvl);
                        found = true;
                        break;
                    }
                }
            }
            if (found) {
                _this.model.map.focus = {
                    coordinates: !location.fixed ? { x: location.x, y: location.y } : null,
                    id: location.map_id,
                    zoom: 0,
                };
            }
            else {
                _this.model.found_user.location = null;
                _this.model.found_user.external = true;
            }
            _this.updatePointsOfInterest();
            _this.timeout('focus', function () { return _this.model.map.zoom = 100; });
        }, function (err) {
            _this.model.found_user.location = null;
            _this.updatePointsOfInterest();
        });
    };
    ExploreComponent.prototype.focusSpace = function (item) {
        var _this = this;
        if (!this.model || !this.model.level || !this.model.level.list || !item) {
            return;
        }
        var focus = "" + (item.prefix === false ? '' : 'area-') + item.map_id + (item.bookable ? '-status' : '');
        var lvl = item.level;
        if (lvl) {
            for (var _i = 0, _a = this.model.level.list; _i < _a.length; _i++) {
                var level = _a[_i];
                if (lvl.id === level.id) {
                    this.setLevel(level);
                    this.timeout('focus_space', function () { return _this.model.map.focus = { id: focus, zoom: 150 }; }, 100);
                    break;
                }
            }
            this.timeout('update_space', function () {
                _this.model.found_user = null;
                _this.model.focus_room = item;
                _this.updatePointsOfInterest();
            }, 20);
        }
    };
    ExploreComponent.prototype.clear = function () {
        this.model.found_item = null;
        this.model.focus_room = null;
        this.model.found_user = null;
        this.model.info = null;
        this.updatePointsOfInterest();
    };
    ExploreComponent.prototype.updatePointsOfInterest = function () {
        var _this = this;
        this.timeout('poi', function () {
            _this.model.map.poi = [];
            _this.model.toggle = !_this.model.toggle;
            if (_this.model.found_user && _this.model.found_user.location && _this.model.found_user.location.level) {
                if (_this.model.found_user.location.level === _this.model.level.active.id) {
                    var loc = _this.model.found_user.location;
                    _this.model.map.poi.push({
                        id: loc.map_id || "person-" + _this.model.found_user.id,
                        cmp: loc.fixed ? _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_0__["MapPinComponent"] : _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_0__["MapRangeComponent"],
                        coordinates: !loc.fixed ? { x: loc.x, y: loc.y } : null,
                        model: { text: _this.model.found_user.name + " is here", back: '#F44336', diameter: loc.confidence * 2 }
                    });
                }
            }
            if (_this.model.info) {
                var room = _this.model.info;
                if (room.current) {
                    _this.model.selected_time = "Booked until " + room.in_use;
                }
                else if (room.next) {
                    _this.model.selected_time = "Free until " + room.next.display.start;
                }
                else {
                    _this.model.selected_time = "Free today";
                }
                _this.model.display = null;
                _this.model.map.poi.push({
                    id: "area-" + room.map_id + "-status",
                    cmp: _shared_components_room_info_room_info_component__WEBPACK_IMPORTED_MODULE_4__["RoomInfoComponent"],
                    model: {
                        room: room,
                        display: { time: _this.model.selected_time },
                        available: !room.current
                    }
                });
            }
            if (_this.model.desk) {
                _this.model.map.poi.push({
                    id: _this.model.desk,
                    cmp: _shared_components_desk_info_desk_info_component__WEBPACK_IMPORTED_MODULE_6__["DeskInfoComponent"],
                    model: {
                        system: _this.model.system,
                        desk_id: _this.model.desk
                    }
                });
            }
            if (_this.model.focus_room && _this.model.focus_room.level.id === _this.model.level.active.id) {
                var rm = _this.model.focus_room;
                _this.model.map.poi.push({
                    id: "" + (rm.prefix === false ? '' : 'area-') + rm.map_id + (rm.bookable ? '-status' : ''),
                    prefix: 'pin',
                    cmp: _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_0__["MapPinComponent"],
                    model: {
                        back: _this.model.colours.rooms.pin || '#03A9F4',
                        text: _this.model.focus_room.name
                    }
                });
            }
            _this.clearTimer('poi');
        });
    };
    ExploreComponent.prototype.back = function () {
        if (this.model.back) {
            this.service.navigate(this.model.back);
        }
        else {
            this.service.back();
        }
    };
    ExploreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-explore',
            template: __webpack_require__(/*! ./explore.template.html */ "./src/app/shell/explore/explore.template.html"),
            styles: [__webpack_require__(/*! ./explore.styles.scss */ "./src/app/shell/explore/explore.styles.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]])
    ], ExploreComponent);
    return ExploreComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_5__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/explore/explore.module.ts":
/*!*************************************************!*\
  !*** ./src/app/shell/explore/explore.module.ts ***!
  \*************************************************/
/*! exports provided: AppExploreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppExploreModule", function() { return AppExploreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @acaprojects/ngx-widgets */ "./node_modules/@acaprojects/ngx-widgets/esm5/acaprojects-ngx-widgets.js");
/* harmony import */ var _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acaprojects/ngx-composer */ "./node_modules/@acaprojects/ngx-composer/esm5/acaprojects-ngx-composer.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _explore_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./explore.routes */ "./src/app/shell/explore/explore.routes.ts");
/* harmony import */ var _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/shared.module */ "./src/app/shared/components/shared.module.ts");
/* harmony import */ var _explore_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./explore.component */ "./src/app/shell/explore/explore.component.ts");
/* harmony import */ var _components_map_overlay_map_overlay_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/map-overlay/map-overlay.component */ "./src/app/shell/explore/components/map-overlay/map-overlay.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/shell/explore/components/search/search.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var COMPONENTS = [
    _explore_component__WEBPACK_IMPORTED_MODULE_9__["ExploreComponent"],
    _components_map_overlay_map_overlay_component__WEBPACK_IMPORTED_MODULE_10__["ExploreMapOverlayComponent"],
    _components_search_search_component__WEBPACK_IMPORTED_MODULE_11__["ExploreSearchComponent"]
];
var AppExploreModule = /** @class */ (function () {
    function AppExploreModule() {
    }
    AppExploreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: COMPONENTS.slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_3__["WidgetsModule"],
                _acaprojects_ngx_composer__WEBPACK_IMPORTED_MODULE_4__["ComposerModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_explore_routes__WEBPACK_IMPORTED_MODULE_7__["ROUTES"]),
                _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedComponentModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"]
            ],
            exports: COMPONENTS.slice()
        })
    ], AppExploreModule);
    return AppExploreModule;
}());



/***/ }),

/***/ "./src/app/shell/explore/explore.routes.ts":
/*!*************************************************!*\
  !*** ./src/app/shell/explore/explore.routes.ts ***!
  \*************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _explore_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./explore.component */ "./src/app/shell/explore/explore.component.ts");

var ROUTES = [
    { path: '', component: _explore_component__WEBPACK_IMPORTED_MODULE_0__["ExploreComponent"] },
    { path: ':search', component: _explore_component__WEBPACK_IMPORTED_MODULE_0__["ExploreComponent"] },
    { path: '**', redirectTo: '' }
];


/***/ }),

/***/ "./src/app/shell/explore/explore.styles.scss":
/*!***************************************************!*\
  !*** ./src/app/shell/explore/explore.styles.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  pointer-events: none; }\n.container > div {\n    pointer-events: auto;\n    width: 100%; }\n.topbar {\n  max-height: 3em;\n  max-width: 100vw; }\n.search {\n  z-index: 300; }\n.map-space {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: 5em;\n  z-index: 99;\n  max-height: 100%; }\n.map {\n  height: 100%; }\n.level {\n  position: absolute;\n  top: 1em;\n  right: .5em;\n  padding: .5em 1em;\n  height: 2.2em;\n  border-radius: 1.2em;\n  background-color: #fff;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n.level.old {\n    right: 5em; }\n.keys {\n  margin-top: -6px; }\n.not-located > div {\n  position: absolute;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  bottom: .5em;\n  right: .5em;\n  padding: .5em 1em;\n  border-radius: 4px;\n  background-color: #fff;\n  max-width: 50vw;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12); }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n    .not-located > div {\n      max-width: 70vw;\n      right: 4.5em;\n      bottom: 1.5em; } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n    .not-located > div {\n      max-width: 70vw;\n      right: 4.5em;\n      bottom: 1.5em; } }\n.not-located > div * {\n    font-size: .9em; }\n.not-located > div div:first-child {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis; }\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n      .not-located > div div:first-child {\n        max-width: calc(70vw - 14.5em); } }\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n      .not-located > div div:first-child {\n        max-width: calc(70vw - 14.5em); } }\n.back {\n  position: absolute;\n  bottom: .5em;\n  right: .5em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvZXhwbG9yZS9leHBsb3JlLnN0eWxlcy5zY3NzIiwiL1VzZXJzL2JlbmhvYWQvUHJvamVjdHMvbWNrLW91dGxvb2stYWRkaW4vc3JjL2FwcC9zaGVsbC9leHBsb3JlL2V4cGxvcmUuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O2lDQ0VpQztBRCtCakM7O3VCQzVCdUI7QUR5Q3ZCOztzQkN0Q3NCO0FDTHRCO0VBQ0ksa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLG9CQUFvQixFQUFBO0FBVHhCO0lBV1Esb0JBQW9CO0lBQ3BCLFdBQVcsRUFBQTtBQUluQjtFQUNJLGVBQWU7RUFDZixnQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLFlBQVksRUFBQTtBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixtQkFBTztVQUFQLE9BQU87RUFDUCxXQUFXO0VBQ1gsV0FBVztFQUNYLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksWUFBWSxFQUFBO0FBR2hCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixvQkFBb0I7RUFDcEIsc0JBQXNCO0VBQ3RCLHVIQUEyRjtVQUEzRiwrR0FBMkYsRUFBQTtBQVIvRjtJQVVRLFVBQVUsRUFBQTtBQUlsQjtFQUNJLGdCQUFnQixFQUFBO0FBR3BCO0VBRVEsa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsdUhBQTJGO1VBQTNGLCtHQUEyRixFQUFBO0FGVDNGO0lFRlI7TUFhWSxlQUFlO01BQ2YsWUFBWTtNQUNaLGFBQWEsRUFBQSxFQWVwQjtBRnpCRztJRUxSO01BYVksZUFBZTtNQUNmLFlBQVk7TUFDWixhQUFhLEVBQUEsRUFlcEI7QUE5Qkw7SUFtQlksZUFBZSxFQUFBO0FBbkIzQjtJQXVCWSxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QixFQUFBO0FGdkIzQjtNRUZSO1FBMkJnQiw4QkFBOEIsRUFBQSxFQUVyQztBRnhCRDtNRUxSO1FBMkJnQiw4QkFBOEIsRUFBQSxFQUVyQztBQUlUO0VBQ0ksa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9leHBsb3JlL2V4cGxvcmUuc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3M6ICMzMDliNDA7XG4kc3VjY2Vzcy1hbHQ6ICM0Mjg1ZjQ7XG4kZXJyb3I6ICNkYjI5MWQ7XG4kcGVuZGluZzogI0ZGOTgwMDtcbiRuZXV0cmFsOiAjNzk3OTc5O1xuXG4kYmFja2dyb3VuZDogI2VjZjFmNTtcblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcbiRjb2xvci1wcmltYXJ5LXdpcmVmcmFtZTpyZ2JhKDAsIDAsIDAsIDAuNjEpO1xuJGhlYWRlci1iZzogI2ZmZjtcbiRoZWFkZXItY29sb3I6IHJnYmEoIzAwMjk2MCwgLjg3KTtcblxuJHRpbGUtY29sb3I6ICNmZmY7XG4kdGlsZS1ib3JkZXI6ICNmZmY7XG5cbiRoZWxwLWJvcmRlcjogcmdiYSgjMDAwLCAuMik7XG5cbiRjb2xvci1wcmltYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeTogIzQwNDg1YTtcbiRjb2xvci10ZXJuYXJ5OiAjYzc5OTYxO1xuJGNvbG9yLXF1YXRlcm5hcnk6ICM3ZGQ2ZDY7XG4kY29sb3ItcXVpbnRlcm5hcnk6ICM0YzVjNmM7XG4kY29sb3Itc2V4dGVybmFyeTogIzdmZTQzYjtcblxuJHRpbWVsaW5lLWJnOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzRGNUY3MCAwJSwgIzBGMTIxNSAxMDAlKTtcbiR0aW1lbGluZS1ldmVudDogJGVycm9yO1xuJHRpbWVsaW5lLWJvb2tpbmc6ICRjb2xvci1xdWF0ZXJuYXJ5O1xuXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTRweDtcblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kbWFpbi1mb250OiAkZm9udC1zdGFjaztcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgRm9udCBWYXJpYWJsZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY29udGFpbmVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvaW50ZXItZXZlbnRzOiBub25lOyB9XG4gIC5jb250YWluZXIgPiBkaXYge1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlOyB9XG5cbi50b3BiYXIge1xuICBtYXgtaGVpZ2h0OiAzZW07XG4gIG1heC13aWR0aDogMTAwdnc7IH1cblxuLnNlYXJjaCB7XG4gIHotaW5kZXg6IDMwMDsgfVxuXG4ubWFwLXNwYWNlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IDVlbTtcbiAgei1pbmRleDogOTk7XG4gIG1heC1oZWlnaHQ6IDEwMCU7IH1cblxuLm1hcCB7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4ubGV2ZWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMWVtO1xuICByaWdodDogLjVlbTtcbiAgcGFkZGluZzogLjVlbSAxZW07XG4gIGhlaWdodDogMi4yZW07XG4gIGJvcmRlci1yYWRpdXM6IDEuMmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7IH1cbiAgLmxldmVsLm9sZCB7XG4gICAgcmlnaHQ6IDVlbTsgfVxuXG4ua2V5cyB7XG4gIG1hcmdpbi10b3A6IC02cHg7IH1cblxuLm5vdC1sb2NhdGVkID4gZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3R0b206IC41ZW07XG4gIHJpZ2h0OiAuNWVtO1xuICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXgtd2lkdGg6IDUwdnc7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTsgfVxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAgIC5ub3QtbG9jYXRlZCA+IGRpdiB7XG4gICAgICBtYXgtd2lkdGg6IDcwdnc7XG4gICAgICByaWdodDogNC41ZW07XG4gICAgICBib3R0b206IDEuNWVtOyB9IH1cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XG4gICAgLm5vdC1sb2NhdGVkID4gZGl2IHtcbiAgICAgIG1heC13aWR0aDogNzB2dztcbiAgICAgIHJpZ2h0OiA0LjVlbTtcbiAgICAgIGJvdHRvbTogMS41ZW07IH0gfVxuICAubm90LWxvY2F0ZWQgPiBkaXYgKiB7XG4gICAgZm9udC1zaXplOiAuOWVtOyB9XG4gIC5ub3QtbG9jYXRlZCA+IGRpdiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgfVxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XG4gICAgICAubm90LWxvY2F0ZWQgPiBkaXYgZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWF4LXdpZHRoOiBjYWxjKDcwdncgLSAxNC41ZW0pOyB9IH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcbiAgICAgIC5ub3QtbG9jYXRlZCA+IGRpdiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgICAgICBtYXgtd2lkdGg6IGNhbGMoNzB2dyAtIDE0LjVlbSk7IH0gfVxuXG4uYmFjayB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAuNWVtO1xuICByaWdodDogLjVlbTsgfVxuIiwiXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuLmNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAmID4gZGl2IHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnRvcGJhciB7XG4gICAgbWF4LWhlaWdodDogM2VtO1xuICAgIG1heC13aWR0aDogMTAwdnc7XG59XG5cbi5zZWFyY2gge1xuICAgIHotaW5kZXg6IDMwMDtcbn1cblxuLm1hcC1zcGFjZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IDE7XG4gICAgaGVpZ2h0OiA1ZW07XG4gICAgei1pbmRleDogOTk7XG4gICAgbWF4LWhlaWdodDogMTAwJTtcbn1cblxuLm1hcCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubGV2ZWwge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDFlbTtcbiAgICByaWdodDogLjVlbTtcbiAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICBoZWlnaHQ6IDIuMmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEuMmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwuMTIpO1xuICAgICYub2xkIHtcbiAgICAgICAgcmlnaHQ6IDVlbTtcbiAgICB9XG59XG5cbi5rZXlzIHtcbiAgICBtYXJnaW4tdG9wOiAtNnB4O1xufVxuXG4ubm90LWxvY2F0ZWQge1xuICAgICYgPiBkaXYge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvdHRvbTogLjVlbTtcbiAgICAgICAgcmlnaHQ6IC41ZW07XG4gICAgICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIG1heC13aWR0aDogNTB2dztcbiAgICAgICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgjMDAwLC4yKSwgMCAxcHggMXB4IDAgcmdiYSgjMDAwLC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwuMTIpO1xuICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA3MHZ3O1xuICAgICAgICAgICAgcmlnaHQ6IDQuNWVtO1xuICAgICAgICAgICAgYm90dG9tOiAxLjVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2OmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogY2FsYyg3MHZ3IC0gMTQuNWVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmJhY2sge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC41ZW07XG4gICAgcmlnaHQ6IC41ZW07XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shell/explore/explore.template.html":
/*!*****************************************************!*\
  !*** ./src/app/shell/explore/explore.template.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"topbar\">\n        <div class=\"search\">\n            <!-- <space-search *ngIf=\"model.search === 'spaces'\" [(model)]=\"model.found_item\" (modelChange)=\"focusSpace($event)\"></space-search>\n            <people-search *ngIf=\"model.search === 'people'\" [(model)]=\"model.found_user\" (modelChange)=\"focusUser($event)\"></people-search> -->\n            <explore-search *ngIf=\"model.search\" [(item)]=\"model.found_item\" (itemChange)=\"focus($event)\"></explore-search>\n        </div>\n    </div>\n    <div class=\"map-space\">\n        <div class=\"bindings\">\n            <div class=\"desks\" *ngIf=\"model.desks && model.level && model.level.active\">\n                <!-- DESK BINDINGS -->\n                <i binding [(value)]=\"model.desks.in_use\" [sys]=\"model.system\" mod=\"DeskManagement\" (valueChange)=\"updateListeners()\" [bind]=\"model.level.active.id\"></i>\n                <i binding [(value)]=\"model.desks.reserved\" [sys]=\"model.system\" mod=\"DeskManagement\" (valueChange)=\"updateStyles()\" [bind]=\"model.level.active.id + ':reserved'\"></i>\n                <i binding *ngIf=\"model.user\" [(value)]=\"model.desks.user\" [sys]=\"model.system\" mod=\"DeskManagement\" (valueChange)=\"updateStyles()\"\n                    [bind]=\"model.user.win_id\"></i>\n                <i binding [(value)]=\"model.desks.list\" [sys]=\"model.system\" mod=\"DeskManagement\" (valueChange)=\"updateStyles()\" [bind]=\"model.level.active.id + ':desk_ids'\"></i>\n                <i binding [(value)]=\"model.desks.usage\" [sys]=\"model.system\" mod=\"DeskManagement\" [bind]=\"model.level.active.id + ':occupied_count'\"></i>\n                <i binding [(value)]=\"model.desks.free\" [sys]=\"model.system\" mod=\"DeskManagement\" [bind]=\"model.level.active.id + ':free_count'\"></i>\n                <i binding [(value)]=\"model.desks.count\" [sys]=\"model.system\" mod=\"DeskManagement\" [bind]=\"model.level.active.id + ':desk_count'\"></i>\n                <!-- DESK EXECUTES -->\n                <i binding [value]=\"model.desks.checkin\" [sys]=\"model.system\" mod=\"DeskManagement\" exec=\"manual_checkin\" [params]=\"[model.desks.id]\"></i>\n                <i binding [value]=\"model.desks.cancel\" [sys]=\"model.system\" mod=\"DeskManagement\" exec=\"cancel_reservation\" [params]=\"[]\"></i>\n            </div>\n            <div class=\"bookings\" *ngIf=\"model.rooms\">\n                <!-- ROOM BOOKINGS BINDINGS -->\n                <ng-container *ngFor=\"let room of model.rooms\">\n                    <i binding [(value)]=\"room.raw_bookings\" (valueChange)=\"processBookings(room)\" [sys]=\"room.id\" mod=\"Bookings\" bind=\"today\"></i>\n                </ng-container>\n            </div>\n            <div class=\"zones\" *ngIf=\"model.zones && model.level && model.level.active\">\n                <i binding [(value)]=\"model.zone_usage\" (valueChange)=\"updateStyles()\" [sys]=\"model.system\" mod=\"FloorManagement\" [bind]=\"model.level.active.id\"></i>\n            </div>\n        </div>\n        <div class=\"map\">\n            <map [(zoom)]=\"model.map.zoom\" (zoomChange)=\"updateZoom()\" [(center)]=\"model.map.center\" [src]=\"model.map.src\" [poi]=\"model.map.poi\" [styles]=\"model.map.styles\" [listeners]=\"model.map.listeners\"\n                 [focus]=\"model.map.focus\" (event)=\"check($event)\">\n            </map>\n        </div>\n        <div class=\"level mobile-only\" *ngIf=\"!(model.found_user && (!model.found_user.location || (!model.found_user.location.map_id && !model.found_user.location.x && !model.found_user.location.y)))\">\n            <div *ngIf=\"model.level && model.level.active\">\n                {{model.found_user && model.found_user.external && model.found_user.location && model.found_user.location.building ? model.found_user.location.building.name + ' - ' : ''}}{{model.level.active?.name}}\n            </div>\n        </div>\n        <div class=\"level not-mobile\" [class.old]=\"!model.old\" *ngIf=\"model.found_user && model.found_user.location && model.found_user.external\">\n            <div *ngIf=\"model.level && model.level.active\">\n                {{model.found_user.location?.building?.name}} - {{model.level.active?.name}}\n            </div>\n        </div>\n        <div class=\"not-located\" *ngIf=\"model.found_user\">\n            <ng-container *ngIf=\"!model.found_user.location || (!model.found_user.location.map_id && !model.found_user.location.x && !model.found_user.location.y)\">\n                <div *ngIf=\"!model.found_user.external\"><div>{{model.found_user.name}}</div>&nbsp;<div>is currently not locatable</div></div>\n                <div *ngIf=\"model.found_user.external\"><div>{{model.found_user.name}}</div>&nbsp;<div>is located in another building</div></div>\n            </ng-container>\n            <ng-container *ngIf=\"!(!model.found_user.location || (!model.found_user.location.map_id && !model.found_user.location.x && !model.found_user.location.y)) && model.found_user.pin_error\">\n                <div>{{model.found_user.name}} is located on {{model.level.active?.name}}</div>\n            </ng-container>\n        </div>\n        <explore-map-overlay [change]=\"model.change\"></explore-map-overlay>\n    </div>\n</div>"

/***/ })

}]);
//# sourceMappingURL=shell-explore-explore-module.js.map