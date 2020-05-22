(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-day-view-day-view-module"],{

/***/ "./src/app/shell/day-view/approvals-view/approvals-view.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/shell/day-view/approvals-view/approvals-view.component.ts ***!
  \***************************************************************************/
/*! exports provided: DayViewApprovalsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayViewApprovalsComponent", function() { return DayViewApprovalsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./event/event.component */ "./src/app/shell/day-view/approvals-view/event/event.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");








function DayViewApprovalsComponent_div_1_approvals_event_6_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "approvals-event", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("acting", function DayViewApprovalsComponent_div_1_approvals_event_6_Template_approvals_event_acting_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.waiting_on_event = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("event", item_r5);
} }
function DayViewApprovalsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DayViewApprovalsComponent_div_1_approvals_event_6_Template, 1, 1, "approvals-event", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.date_display);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.events)("ngForTrackBy", ctx_r0.trackByFn);
} }
function DayViewApprovalsComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DayViewApprovalsComponent_ng_template_3_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "No meetings pending approval");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DayViewApprovalsComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DayViewApprovalsComponent_ng_template_3_div_0_Template, 6, 0, "div", 14);
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r3.loading);
} }
class DayViewApprovalsComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    constructor(_service) {
        super();
        this._service = _service;
        /** List of bookings that are pending approval */
        this.events = [];
        /** List of spaces to check for pending approvals */
        this.space_list = [];
    }
    /** Zone to filter spaces on */
    get zone_id() {
        const level = this._service.get('APP.level');
        return typeof level === 'string' ? level : this._service.Organisation.building.id;
    }
    /** Display value for the active date */
    get date_display() {
        const now = dayjs__WEBPACK_IMPORTED_MODULE_2__().startOf('d');
        const date = dayjs__WEBPACK_IMPORTED_MODULE_2__(this.date).startOf('d');
        if (now.isSame(date, 'd')) {
            return 'Today';
        }
        else if (date.diff(now, 'd') === 1) {
            return 'Tomorrow';
        }
        else if (now.diff(date, 'd') === 1) {
            return 'Yesterday';
        }
        return date.format('DD MMM YYYY');
    }
    ngOnInit() {
        this.subscription('building', this._service.listen('APP.level').subscribe((level => {
            const building = this._service.Organisation.building;
            this.space_list = this._service.Spaces.filter((space) => space.zones.indexOf(level === -1 ? building.id : level) >= 0).map(i => i.name);
            this.processMeetings();
            this.getMonthlyPending();
        })));
        this.getMonthlyPending();
        this.interval('monthly_pending', () => this.getMonthlyPending(), 10 * 60 * 1000);
    }
    ngOnChanges(changes) {
        /* istanbul ignore else */
        if (changes.date) {
            this.events = [];
            this.updateMeetings();
            // this.interval('update_meetings', () => this.updateMeetings(), 60 * 1000);
            this.processMeetings();
            this.interval('process_meetings', () => this.processMeetings(), 1 * 1000);
            /* istanbul ignore else */
            if (!dayjs__WEBPACK_IMPORTED_MODULE_2__(changes.date.previousValue).isSame(dayjs__WEBPACK_IMPORTED_MODULE_2__(changes.date.currentValue), 'M')) {
                this.getMonthlyPending();
                this.interval('monthly_pending', () => this.getMonthlyPending(), 10 * 60 * 1000);
            }
        }
    }
    /* istanbul ignore next */
    /**
     * Track by function for ngFor optimisation
     * @param index Index of the item
     * @param item Data associated with the item at the given index
     */
    trackByFn(index, item) {
        return item.id || index;
    }
    /** Update listing of meetings pending approval */
    updateMeetings() {
        const time = dayjs__WEBPACK_IMPORTED_MODULE_2__(this.date).startOf('d');
        const end = time.endOf('d');
        this.loading = true;
        this._service.Spaces.query({
            zone_ids: this.zone_id,
            available_from: time.unix(),
            available_to: end.unix()
        }).then((room_list) => {
            this.space_list = room_list.map(i => i.id);
            this.processMeetings();
            this.loading = false;
        });
    }
    /**
     * Update pending meetings from list of rooms
     */
    processMeetings() {
        /* istanbul ignore if */
        if (this.waiting_on_event) {
            return;
        }
        this.events = this.process(this.date);
        const pending_list = this._service.get('CONCIERGE.pending_bookings') || {};
        pending_list[dayjs__WEBPACK_IMPORTED_MODULE_2__(this.date).format('YYYY-MM-DD')] = this.events.length;
        this._service.set('CONCIERGE.pending_bookings', pending_list);
    }
    process(date) {
        let events = [];
        for (const id of this.space_list) {
            const rm = this._service.Spaces.find(id);
            /* istanbul ignore else */
            if (rm) {
                events = events.concat(rm.bookingsFor(date).filter(booking => booking.tentative));
            }
        }
        return events.sort((a, b) => a.date - b.date);
    }
    getMonthlyPending() {
        const now = dayjs__WEBPACK_IMPORTED_MODULE_2__().startOf('d');
        let start = dayjs__WEBPACK_IMPORTED_MODULE_2__(this.date).startOf('M');
        const end = start.endOf('M');
        /* istanbul ignore else */
        if (now.isAfter(end, 'm')) {
            return;
        }
        else if (now.isAfter(start, 'm')) {
            start = now;
        }
        this._service.Spaces.query({
            zone_ids: this.zone_id,
            available_from: start.unix(),
            available_to: end.unix()
        }).then((_) => {
            const pending_list = this._service.get('CONCIERGE.pending_bookings') || {};
            for (let date = start; date.isBefore(end, 'm'); date = date.add(1, 'd')) {
                const events = this.process(date.valueOf());
                pending_list[date.format('YYYY-MM-DD')] = events.length;
            }
            this._service.set('CONCIERGE.pending_bookings', pending_list);
        });
    }
}
DayViewApprovalsComponent.ɵfac = function DayViewApprovalsComponent_Factory(t) { return new (t || DayViewApprovalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"])); };
DayViewApprovalsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayViewApprovalsComponent, selectors: [["day-view-approvals-view"]], inputs: { date: "date" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 3, consts: [[1, "approvals-view"], ["class", "content", 4, "ngIf", "ngIfElse"], ["class", "load-state", 4, "ngIf"], ["empty_state", ""], [1, "content"], [1, "date"], [1, "bar"], [1, "display"], [3, "event", "acting", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "event", "acting"], [1, "load-state"], [1, "no-item", "center"], [1, "icon"], ["diameter", "32"], ["class", "info-block center", 4, "ngIf"], [1, "info-block", "center"], [1, "material-icons"], [1, "text"]], template: function DayViewApprovalsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DayViewApprovalsComponent_div_1_Template, 7, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DayViewApprovalsComponent_div_2_Template, 4, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DayViewApprovalsComponent_ng_template_3_Template, 1, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.events && ctx.events.length)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _event_event_component__WEBPACK_IMPORTED_MODULE_5__["DayViewApprovalsEventComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_6__["MatSpinner"]], styles: [".approvals-view[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden auto;\n  background-color: #eee;\n}\n\n.no-item[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n}\n\n.date[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 100%;\n  margin: 0.5em 0;\n}\n\n.bar[_ngcontent-%COMP%] {\n  height: 1px;\n  min-width: 1px;\n  flex: 1;\n  background-color: #707070;\n}\n\n.display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5em 1.5em;\n  height: 1.5em;\n  border-radius: 0.8em;\n  background-color: #707070;\n  color: #fff;\n  font-size: 0.8em;\n}\n\n.load-state[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 50%;\n  bottom: 4px;\n  transform: translateX(-50%);\n  background-color: #fff;\n  z-index: 999;\n  border-radius: 4px;\n  height: 3em;\n  width: 3em;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n\n.load-state[_ngcontent-%COMP%]   spinner[_ngcontent-%COMP%] {\n  font-size: 0.4em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvZGF5LXZpZXcvYXBwcm92YWxzLXZpZXcvYXBwcm92YWxzLXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL2RheS12aWV3L2FwcHJvdmFscy12aWV3L2FwcHJvdmFscy12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQ0FKOztBREdBO0VBQ0ksZ0JBQUE7QUNBSjs7QURHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSx5QkFBQTtBQ0FKOztBREdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsK0dBQUE7QUNBSjs7QURFSTtFQUNJLGdCQUFBO0FDQVIiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9kYXktdmlldy9hcHByb3ZhbHMtdmlldy9hcHByb3ZhbHMtdmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLmFwcHJvdmFscy12aWV3ICB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbn1cblxuLm5vLWl0ZW0ge1xuICAgIGZvbnQtc2l6ZTogLjdlbTtcbn1cblxuLmRhdGUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW46IC41ZW0gMDtcbn1cblxuLmJhciB7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgbWluLXdpZHRoOiAxcHg7XG4gICAgZmxleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xufVxuXG4uZGlzcGxheSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IC41ZW0gMS41ZW07XG4gICAgaGVpZ2h0OiAxLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuOGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAuOGVtXG59XG5cbi5sb2FkLXN0YXRlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogNTAlO1xuICAgIGJvdHRvbTogNHB4O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgd2lkdGg6IDNlbTtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLC4xMik7XG5cbiAgICBzcGlubmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAuNGVtO1xuICAgIH1cbn1cbiIsIi5hcHByb3ZhbHMtdmlldyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBvdmVyZmxvdzogaGlkZGVuIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XG59XG5cbi5uby1pdGVtIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuLmRhdGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiAwLjVlbSAwO1xufVxuXG4uYmFyIHtcbiAgaGVpZ2h0OiAxcHg7XG4gIG1pbi13aWR0aDogMXB4O1xuICBmbGV4OiAxO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA3MDcwO1xufVxuXG4uZGlzcGxheSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbSAxLjVlbTtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogMC44ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDcwNzA7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDAuOGVtO1xufVxuXG4ubG9hZC1zdGF0ZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICBib3R0b206IDRweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB6LWluZGV4OiA5OTk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiAzZW07XG4gIHdpZHRoOiAzZW07XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5sb2FkLXN0YXRlIHNwaW5uZXIge1xuICBmb250LXNpemU6IDAuNGVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayViewApprovalsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'day-view-approvals-view',
                templateUrl: './approvals-view.component.html',
                styleUrls: ['./approvals-view.component.scss']
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"] }]; }, { date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/day-view/approvals-view/event/event.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shell/day-view/approvals-view/event/event.component.ts ***!
  \************************************************************************/
/*! exports provided: DayViewApprovalsEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayViewApprovalsEventComponent", function() { return DayViewApprovalsEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var src_app_overlays_meeting_details_modal_meeting_details_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/meeting-details-modal/meeting-details-modal.component */ "./src/app/overlays/meeting-details-modal/meeting-details-modal.component.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../shared/components/user-avatar/user-avatar.component */ "./src/app/shared/components/user-avatar/user-avatar.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "./node_modules/@acaprojects/ngx-pipes/__ivy_ngcc__/fesm2015/acaprojects-ngx-pipes.js");















function DayViewApprovalsEventComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div");
} }
const _c0 = function () { return { class: "material-icons", content: "email" }; };
const _c1 = function () { return { class: "material-icons", content: "phone" }; };
function DayViewApprovalsEventComponent_div_0_div_17_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Booked by:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r4.event.creator == null ? null : ctx_r4.event.creator.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:" + (ctx_r4.event.creator == null ? null : ctx_r4.event.creator.email), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("disabled", !(ctx_r4.event.creator == null ? null : ctx_r4.event.creator.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "tel:" + (ctx_r4.event.creator == null ? null : ctx_r4.event.creator.phone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("disabled", !(ctx_r4.event.creator == null ? null : ctx_r4.event.creator.phone));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1));
} }
function DayViewApprovalsEventComponent_div_0_div_17_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.name);
} }
function DayViewApprovalsEventComponent_div_0_div_17_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Notes:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx_r6.description || ""), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
} }
function DayViewApprovalsEventComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Host:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DayViewApprovalsEventComponent_div_0_div_17_div_12_Template, 11, 9, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Attendees:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DayViewApprovalsEventComponent_div_0_div_17_div_17_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Welcomed by:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Catering:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, DayViewApprovalsEventComponent_div_0_div_17_div_28_Template, 5, 3, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@show", undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.event.organiser == null ? null : ctx_r2.event.organiser.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "mailto:" + (ctx_r2.event.organiser == null ? null : ctx_r2.event.organiser.email), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("disabled", !(ctx_r2.event.organiser == null ? null : ctx_r2.event.organiser.email));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", "tel:" + (ctx_r2.event.organiser == null ? null : ctx_r2.event.organiser.phone), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("disabled", !(ctx_r2.event.organiser == null ? null : ctx_r2.event.organiser.phone));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.event.creator && ctx_r2.event.organiser && ctx_r2.event.organiser.email !== ctx_r2.event.creator.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.event.attendees);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.notifyee);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.has_catering ? "Catered" : "No Catering", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.description);
} }
function DayViewApprovalsEventComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Processing request...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c2 = function () { return { class: "material-icons", content: "search" }; };
const _c3 = function (a1) { return { class: "material-icons", content: a1 }; };
function DayViewApprovalsEventComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "a-user-avatar", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DayViewApprovalsEventComponent_div_0_div_7_Template, 1, 0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function DayViewApprovalsEventComponent_div_0_Template_button_tapped_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.view(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "app-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function DayViewApprovalsEventComponent_div_0_Template_app_icon_tapped_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.shown = !ctx_r10.shown; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DayViewApprovalsEventComponent_div_0_div_17_Template, 29, 15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function DayViewApprovalsEventComponent_div_0_Template_button_tapped_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.accept(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function DayViewApprovalsEventComponent_div_0_Template_button_tapped_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.decline(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DayViewApprovalsEventComponent_div_0_div_23_Template, 6, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("approval-event" + (ctx_r0.type ? " " + ctx_r0.type : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("event-id", ctx_r0.event.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("user", ctx_r0.event.organiser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx_r0.event.all_day ? "All Day" : ctx_r0.event.start_time + " - " + ctx_r0.event.end_time, " ", ctx_r0.event.space ? "in " + ctx_r0.event.space.name : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.was_edited);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.event.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](19, _c3, "keyboard_arrow_" + (ctx_r0.shown ? "up" : "down")));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.shown);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("accepted", ctx_r0.event.approved);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Accept", ctx_r0.event.approved ? "ed" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("declined", ctx_r0.event.declined);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Decline", ctx_r0.event.declined ? "d" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
} }
const STATES = {};
class DayViewApprovalsEventComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"] {
    constructor(_service, _dialog) {
        super();
        this._service = _service;
        this._dialog = _dialog;
        /** Event emitter for event actions */
        this.acting = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get was_edited() {
        return this.event.edits.length > 0;
    }
    /** Type of event */
    get type() {
        return this.event.type;
    }
    /** Person to notify when external attendees arrive */
    get notifyee() {
        return 'Concierge';
    }
    /** Description of the meeting */
    get description() {
        return this.event.notes.find((i) => i.type === 'description').message;
    }
    /** Whether the meeting has catering attached */
    get has_catering() {
        const catering = this.event.catering;
        return !!catering.find((order) => this.event.space.id === order.location_id);
    }
    /** View booking details */
    view() {
        this.timeout('view', () => {
            this._dialog.open(src_app_overlays_meeting_details_modal_meeting_details_modal_component__WEBPACK_IMPORTED_MODULE_4__["MeetingDetailsModalComponent"], {
                data: {
                    booking: this.event,
                },
            });
            this._service.set('CONCIERGE.day_view.viewing', this.event);
        }, 50);
    }
    /**
     * Approve the meeting for the set room
     */
    accept() {
        this.acting.emit(true);
        const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], {
            data: {
                title: 'Approve Meeting',
                content: `Approve ${this.event.organiser.name}'s meeting in "${this.event.space.name}" at ${this.event.start_time} for ${this.event.length_string} on ${this.event.date_string}`,
                icon: { type: 'icon', class: 'material-icons', content: 'event_available' },
                action: 'Ok',
            },
        });
        ref.componentInstance.event.subscribe((event) => {
            /* istanbul ignore else */
            if (event.reason === 'done') {
                this.loading = true;
                this._service.Bookings.accept(this.event.id, {
                    comment: '',
                    room_id: this.event.space.id,
                }).then(() => {
                    this._service.notifySuccess('Meeting approved.');
                    this.event.approval_status[this.event.space.id] = 'accepted';
                    STATES[this.event.id] = 'accepted';
                    this._service.set('BOOKING.states', STATES);
                    this.loading = false;
                    this.acting.emit(false);
                }, () => {
                    this.acting.emit(false);
                    this._service.notifyError('Error approving meeting.');
                    this.loading = false;
                });
            }
            ref.close();
        });
    }
    /**
     * Decline meeting for the set room
     */
    decline() {
        this.acting.emit(true);
        const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_3__["ConfirmModalComponent"], {
            data: {
                title: 'Decline Meeting',
                content: `Decline ${this.event.organiser.name || this.event.organiser}'s meeting in "${this.event.space.name}" at ${this.event.start_time} for ${this.event.length_string} on ${this.event.date_string}`,
                icon: { type: 'icon', class: 'material-icons', content: 'event_busy' },
                action: 'Ok',
            },
        });
        ref.componentInstance.event.subscribe((event) => {
            /* istanbul ignore else */
            if (event.reason === 'done') {
                this.loading = true;
                const booking = this.event;
                this.loading = true;
                this._service.Bookings.decline(booking.id, {
                    booking_id: booking.id,
                    organiser: booking.organiser.email,
                    icaluid: booking.icaluid,
                    start: Math.floor(booking.date / 1000),
                    end: Math.floor(booking.date / 1000) + booking.duration * 60,
                    room_id: booking.space.id,
                }).then(() => {
                    this._service.notifySuccess('Meeting declined.');
                    this.event.approval_status[booking.space.id] = 'declined';
                    STATES[this.event.id] = 'declined';
                    this._service.set('BOOKING.states', STATES);
                    this.loading = false;
                    this.acting.emit(false);
                }, () => {
                    this.acting.emit(false);
                    this._service.notifyError('Error declining meeting.');
                    this.loading = false;
                });
            }
            ref.close();
        });
    }
}
DayViewApprovalsEventComponent.ɵfac = function DayViewApprovalsEventComponent_Factory(t) { return new (t || DayViewApprovalsEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
DayViewApprovalsEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayViewApprovalsEventComponent, selectors: [["approvals-event"]], inputs: { event: "event" }, outputs: { acting: "acting" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 1, vars: 1, consts: [[3, "class", 4, "ngIf"], [1, "header"], [1, "avatar"], [3, "user"], [1, "details"], [1, "text", "bold"], [4, "ngIf"], [1, "text"], ["mat-icon-button", "", "name", "view", 1, "search", 3, "tapped"], [3, "icon"], [1, "body"], [1, "control"], [1, "bar"], [3, "icon", "tapped"], ["class", "contents", 4, "ngIf"], [1, "footer"], ["mat-button", "", "name", "accept", 1, "inverse", 3, "tapped"], ["mat-button", "", "name", "decline", 1, "inverse", 3, "tapped"], ["class", "load-state", 4, "ngIf"], [1, "contents"], [1, "field"], ["for", "name"], ["name", "host", 1, "value"], [1, "actions"], ["mat-icon-button", "", 3, "href", "disabled"], ["class", "field", 4, "ngIf"], [1, "field", "multiline"], ["for", "attendees"], ["name", "attendees", 1, "value"], ["class", "attendee", 4, "ngFor", "ngForOf"], ["for", "notifyee"], ["name", "notifyee", 1, "value"], ["for", "catering"], ["name", "catering", 1, "value"], ["for", "bookee"], ["name", "bookee", 1, "value"], [1, "attendee"], ["for", "notes"], ["name", "notes", 1, "value", 3, "innerHTML"], [1, "load-state"], [1, "no-item", "center"], [1, "icon"], ["diameter", "32"]], template: function DayViewApprovalsEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DayViewApprovalsEventComponent_div_0_Template, 24, 21, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _shared_components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_8__["UserAvatarComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["IconComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatAnchor"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"]], pipes: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_13__["ɵa"]], styles: [".approval-event[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  background-color: #fff;\n  font-size: 0.8em;\n  margin: 0.5em 1px;\n  border: 2px solid #1F40E6;\n  border-right: 4px solid #1F40E6;\n}\n.approval-event.internal[_ngcontent-%COMP%] {\n  border-color: #E69FC7;\n}\n.approval-event.external[_ngcontent-%COMP%] {\n  border-color: #8C5AC8;\n}\n.approval-event.training[_ngcontent-%COMP%] {\n  border-color: #F0E700;\n}\n.approval-event.interview[_ngcontent-%COMP%] {\n  border-color: #348D02;\n}\n.approval-event.setup[_ngcontent-%COMP%] {\n  border-color: #d32f2f;\n}\n.approval-event.cancelled[_ngcontent-%COMP%] {\n  border-color: #617288;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 1em;\n}\n.avatar[_ngcontent-%COMP%] {\n  font-size: 1.2em;\n}\n.details[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  max-width: calc(100% - 4em);\n}\n.footer[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n}\n.load-state[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.85);\n}\n.control[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0 1em;\n  margin-bottom: 0.5em;\n}\n.control[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%] {\n  height: 1px;\n  min-width: 1px;\n  flex: 1;\n  background-color: #ccc;\n}\n.control[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 1em;\n  width: 1em;\n  font-size: 1.5em;\n  margin: 0 0.5em;\n  cursor: pointer;\n}\n.contents[_ngcontent-%COMP%] {\n  padding: 0 1em 1em;\n  overflow: hidden;\n}\n.text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.text[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 6px;\n  width: 6px;\n  border-radius: 100%;\n  background-color: #ffb300;\n  margin: 0.25em;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.5em;\n}\n.field[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.field[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0 0.5em;\n  flex: 1;\n  min-width: 50%;\n}\n.field[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\n.field.multiline[_ngcontent-%COMP%] {\n  align-items: flex-start;\n}\n.field.multiline[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  flex-direction: column;\n  align-items: flex-start;\n}\n.no-item[_ngcontent-%COMP%] {\n  font-size: 0.6em;\n  color: #000;\n}\n.no-item[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.75em;\n}\nbutton[mat-button][_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 30%;\n  background-color: #f7f8ff;\n  transition: color 200ms, background-color 200ms;\n  border: 1px solid #ccc;\n  color: rgba(0, 0, 0, 0.85);\n  cursor: pointer;\n}\nbutton[mat-button].accepted[_ngcontent-%COMP%], button[mat-button].declined[_ngcontent-%COMP%] {\n  pointer-events: none;\n  color: #fff;\n}\nbutton[mat-button].accepted[_ngcontent-%COMP%] {\n  background-color: #43a047;\n}\nbutton[mat-button].declined[_ngcontent-%COMP%] {\n  background-color: #e53935;\n}\n.bold[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[mat-icon-button][_ngcontent-%COMP%] {\n  background-color: #1937ea;\n  color: #fff;\n  border: 1px solid #1937ea;\n  margin: 0.3em;\n}\n[mat-icon-button][disabled][_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  color: rgba(0, 0, 0, 0.35);\n  border-color: rgba(0, 0, 0, 0.35);\n}\n[mat-icon-button].search[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n  font-size: 0.8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvZGF5LXZpZXcvYXBwcm92YWxzLXZpZXcvZXZlbnQvZXZlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL2RheS12aWV3L2FwcHJvdmFscy12aWV3L2V2ZW50L2V2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQWdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQzVDQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7QUNRSjtBRE5JO0VBQ0kscUJBQUE7QUNRUjtBRExJO0VBQ0kscUJBQUE7QUNPUjtBREpJO0VBQ0kscUJBQUE7QUNNUjtBREhJO0VBQ0kscUJBQUE7QUNLUjtBREZJO0VBQ0kscUJBQUE7QUNJUjtBRERJO0VBQ0kscUJBQUE7QUNHUjtBRENBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0VKO0FEQ0E7RUFDSSxnQkFBQTtBQ0VKO0FEQ0E7RUFDSSxjQUFBO0VBQ0EsMkJBQUE7QUNFSjtBRENBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FDRUo7QURDQTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDJDQUFBO0FDRUo7QURDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDRUo7QURBSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLHNCQUFBO0FDRVI7QURDSTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0NSO0FER0E7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDQUo7QURHQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ0FKO0FEQ0k7RUFDSSxXQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJEMUZFO0VDMkZGLGNBQUE7QUNDUjtBREdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNBSjtBREVJO0VBQ0ksZ0JBQUE7QUNBUjtBREdJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtBQ0RSO0FESUk7RUFDSSxPQUFBO0VBQ0EsY0FBQTtBQ0ZSO0FES0k7RUFDSSx1QkFBQTtBQ0hSO0FES1E7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0FDSFo7QURTQTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtBQ05KO0FEUUk7RUFDSSxTQUFBO0VBQ0EsaUJBQUE7QUNOUjtBRFVBO0VBQ0ksT0FBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLCtDQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNQSjtBRFNJO0VBRUksb0JBQUE7RUFDQSxXQUFBO0FDUlI7QURXSTtFQUNJLHlCRDlKRTtBRXFKVjtBRFlJO0VBQ0kseUJEMUpBO0FFZ0pSO0FEY0E7RUFDSSxnQkFBQTtBQ1hKO0FEY0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNYSjtBRGNBO0VBQ0kseUJEcEtZO0VDcUtaLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7QUNYSjtBRGFJO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLGlDQUFBO0FDWFI7QURjSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1pSIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvZGF5LXZpZXcvYXBwcm92YWxzLXZpZXcvZXZlbnQvZXZlbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICMxOTM3ZWE7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMDUxYzJjO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5hcHByb3ZhbC1ldmVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIG1hcmdpbjogLjVlbSAxcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgIzFGNDBFNjtcbiAgICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCAjMUY0MEU2O1xuXG4gICAgJi5pbnRlcm5hbCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI0U2OUZDNztcbiAgICB9XG5cbiAgICAmLmV4dGVybmFsIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjOEM1QUM4O1xuICAgIH1cblxuICAgICYudHJhaW5pbmcge1xuICAgICAgICBib3JkZXItY29sb3I6ICNGMEU3MDA7XG4gICAgfVxuXG4gICAgJi5pbnRlcnZpZXcge1xuICAgICAgICBib3JkZXItY29sb3I6ICMzNDhEMDI7XG4gICAgfVxuXG4gICAgJi5zZXR1cCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2QzMmYyZjtcbiAgICB9XG5cbiAgICAmLmNhbmNlbGxlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzYxNzI4ODtcbiAgICB9XG59XG5cbi5oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxZW07XG59XG5cbi5hdmF0YXIge1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5kZXRhaWxzIHtcbiAgICBwYWRkaW5nOiAuNWVtO1xuICAgIG1heC13aWR0aDogY2FsYygxMDAlIC0gNGVtKTtcbn1cblxuLmZvb3RlciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmxvYWQtc3RhdGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjZmZmLCAuODUpO1xufVxuXG4uY29udHJvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG5cbiAgICAuYmFyIHtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIG1pbi13aWR0aDogMXB4O1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICAgIH1cblxuICAgIC5pY29uIHtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgICAgIG1hcmdpbjogMCAuNWVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxufVxuXG4uY29udGVudHMge1xuICAgIHBhZGRpbmc6IDAgMWVtIDFlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGV4dCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgID4gZGl2IHtcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICAgIHdpZHRoOiA2cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRwZW5kaW5nO1xuICAgICAgICBtYXJnaW46IC4yNWVtO1xuICAgIH1cbn1cblxuLmZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLnZhbHVlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMCAuNWVtO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtaW4td2lkdGg6IDUwJTtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgIH1cblxuICAgICYubXVsdGlsaW5lIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4ubm8taXRlbSB7XG4gICAgZm9udC1zaXplOiAuNmVtO1xuICAgIGNvbG9yOiAjMDAwO1xuXG4gICAgLmljb24ge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGZvbnQtc2l6ZTogLjc1ZW07XG4gICAgfVxufVxuXG5idXR0b25bbWF0LWJ1dHRvbl0ge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAzMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjhmZjtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcywgYmFja2dyb3VuZC1jb2xvciAyMDBtcztcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGNvbG9yOiByZ2JhKCMwMDAsIC44NSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgJi5hY2NlcHRlZCxcbiAgICAmLmRlY2xpbmVkIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgICYuYWNjZXB0ZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc3VjY2VzcztcbiAgICB9XG5cbiAgICAmLmRlY2xpbmVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGVycm9yO1xuICAgIH1cbn1cblxuLmJvbGQge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cblttYXQtaWNvbi1idXR0b25dIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkY29sb3ItcHJpbWFyeTtcbiAgICBtYXJnaW46IC4zZW07XG5cbiAgICAmW2Rpc2FibGVkXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgICAgIGNvbG9yOiByZ2JhKCMwMDAsIC4zNSk7XG4gICAgICAgIGJvcmRlci1jb2xvcjogcmdiYSgjMDAwLCAuMzUpO1xuICAgIH1cblxuICAgICYuc2VhcmNoIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IC41ZW07XG4gICAgICAgIHJpZ2h0OiAuNWVtO1xuICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmFwcHJvdmFsLWV2ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgbWFyZ2luOiAwLjVlbSAxcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICMxRjQwRTY7XG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkICMxRjQwRTY7XG59XG4uYXBwcm92YWwtZXZlbnQuaW50ZXJuYWwge1xuICBib3JkZXItY29sb3I6ICNFNjlGQzc7XG59XG4uYXBwcm92YWwtZXZlbnQuZXh0ZXJuYWwge1xuICBib3JkZXItY29sb3I6ICM4QzVBQzg7XG59XG4uYXBwcm92YWwtZXZlbnQudHJhaW5pbmcge1xuICBib3JkZXItY29sb3I6ICNGMEU3MDA7XG59XG4uYXBwcm92YWwtZXZlbnQuaW50ZXJ2aWV3IHtcbiAgYm9yZGVyLWNvbG9yOiAjMzQ4RDAyO1xufVxuLmFwcHJvdmFsLWV2ZW50LnNldHVwIHtcbiAgYm9yZGVyLWNvbG9yOiAjZDMyZjJmO1xufVxuLmFwcHJvdmFsLWV2ZW50LmNhbmNlbGxlZCB7XG4gIGJvcmRlci1jb2xvcjogIzYxNzI4ODtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFlbTtcbn1cblxuLmF2YXRhciB7XG4gIGZvbnQtc2l6ZTogMS4yZW07XG59XG5cbi5kZXRhaWxzIHtcbiAgcGFkZGluZzogMC41ZW07XG4gIG1heC13aWR0aDogY2FsYygxMDAlIC0gNGVtKTtcbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5sb2FkLXN0YXRlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44NSk7XG59XG5cbi5jb250cm9sIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgMWVtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cbi5jb250cm9sIC5iYXIge1xuICBoZWlnaHQ6IDFweDtcbiAgbWluLXdpZHRoOiAxcHg7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG4uY29udHJvbCAuaWNvbiB7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBtYXJnaW46IDAgMC41ZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmNvbnRlbnRzIHtcbiAgcGFkZGluZzogMCAxZW0gMWVtO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4udGV4dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGV4dCA+IGRpdiB7XG4gIGhlaWdodDogNnB4O1xuICB3aWR0aDogNnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMzAwO1xuICBtYXJnaW46IDAuMjVlbTtcbn1cblxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG4uZmllbGQ6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG4uZmllbGQgLnZhbHVlIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAwLjVlbTtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA1MCU7XG59XG4uZmllbGQgLnRleHQge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDUwJTtcbn1cbi5maWVsZC5tdWx0aWxpbmUge1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5maWVsZC5tdWx0aWxpbmUgLnZhbHVlIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi5uby1pdGVtIHtcbiAgZm9udC1zaXplOiAwLjZlbTtcbiAgY29sb3I6ICMwMDA7XG59XG4ubm8taXRlbSAuaWNvbiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiAwLjc1ZW07XG59XG5cbmJ1dHRvblttYXQtYnV0dG9uXSB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMzAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmOGZmO1xuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcywgYmFja2dyb3VuZC1jb2xvciAyMDBtcztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmJ1dHRvblttYXQtYnV0dG9uXS5hY2NlcHRlZCwgYnV0dG9uW21hdC1idXR0b25dLmRlY2xpbmVkIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xufVxuYnV0dG9uW21hdC1idXR0b25dLmFjY2VwdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQzYTA0Nztcbn1cbmJ1dHRvblttYXQtYnV0dG9uXS5kZWNsaW5lZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNTM5MzU7XG59XG5cbi5ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuLmFjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5bbWF0LWljb24tYnV0dG9uXSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTM3ZWE7XG4gIGNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMTkzN2VhO1xuICBtYXJnaW46IDAuM2VtO1xufVxuW21hdC1pY29uLWJ1dHRvbl1bZGlzYWJsZWRdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNSk7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM1KTtcbn1cblttYXQtaWNvbi1idXR0b25dLnNlYXJjaCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwLjVlbTtcbiAgcmlnaHQ6IDAuNWVtO1xuICBmb250LXNpemU6IDAuOGVtO1xufSJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('show', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, height: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, height: '*' })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, height: '*' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, height: 0 })),
                ]),
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayViewApprovalsEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'approvals-event',
                templateUrl: './event.component.html',
                styleUrls: ['./event.component.scss'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('show', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':enter', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, height: 0 }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, height: '*' })),
                        ]),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])(':leave', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 1, height: '*' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(200, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, height: 0 })),
                        ]),
                    ]),
                ],
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], acting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/day-view/day-view.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shell/day-view/day-view.component.ts ***!
  \******************************************************/
/*! exports provided: DayViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayViewComponent", function() { return DayViewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_overlays_booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/overlays/booking-modal/booking-modal.component */ "./src/app/overlays/booking-modal/booking-modal.component.ts");
/* harmony import */ var src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/bookings/booking.class */ "./src/app/services/data/bookings/booking.class.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/components/topbar-header/topbar-header.component */ "./src/app/shared/components/topbar-header/topbar-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/shell/day-view/timeline/timeline.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");




















function DayViewComponent_mat_form_field_5_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const level_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", level_r4 == null ? null : level_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", level_r4 == null ? null : level_r4.name, " ");
} }
function DayViewComponent_mat_form_field_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DayViewComponent_mat_form_field_5_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.active_level = $event; })("ngModelChange", function DayViewComponent_mat_form_field_5_Template_mat_select_ngModelChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.updateLevel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DayViewComponent_mat_form_field_5_mat_option_2_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.active_level);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.levels);
} }
function DayViewComponent_mat_form_field_6_mat_option_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r9 == null ? null : type_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r9 == null ? null : type_r9.name, " ");
} }
function DayViewComponent_mat_form_field_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-select", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DayViewComponent_mat_form_field_6_Template_mat_select_ngModelChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.active_type = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DayViewComponent_mat_form_field_6_mat_option_2_Template, 2, 2, "mat-option", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r1.active_type);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.space_types);
} }
function DayViewComponent_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const key_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", key_r12 == null ? null : key_r12.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](key_r12 == null ? null : key_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-color", key_r12.color);
} }
class DayViewComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    constructor(_service, _dialog, _router, _route) {
        super();
        this._service = _service;
        this._dialog = _dialog;
        this._router = _router;
        this._route = _route;
        /** ID of the currently selected level */
        this.active_level = '';
        /** ID of the currently selected level */
        this.active_type = '';
        /** List of levels available for the active building */
        this.levels = [];
        /** List of space types available for the active building */
        this.space_types = [];
        /** List of legend keys to show */
        this.legend = [];
        /** List of available legend keys */
        this.legend_keys = [
            { name: 'Internal', id: 'internal', color: '#E69FC7' },
            { name: 'Client', id: 'client', color: '#1F40E6' },
            { name: 'External', id: 'external', color: '#8C5AC8' },
            { name: 'Setup', id: 'setup', color: '#d32f2f' },
            { name: 'Training', id: 'training', color: '#F0E700' },
            { name: 'Interview', id: 'interview', color: '#348D02' }
        ];
    }
    ngOnInit() {
        this._service.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])(_ => _)).subscribe(() => {
            this.legend = this.legend_keys.map(item => `${item.id}`);
            this.subscription('route.params', this._route.paramMap.subscribe((params) => {
                /* istanbul ignore else */
                if (params.has('level') && this.active_level !== params.get('level')) {
                    const level = this._service.Organisation.levelWithID(params.get('level'));
                    /* istanbul ignore else */
                    if (level) {
                        const building = this._service.Organisation.buildings.find(bld => bld.id === level.building_id);
                        /* istanbul ignore else */
                        if (building) {
                            this.active_level = level.id;
                            this._service.Organisation.building = building;
                        }
                    }
                }
            }));
            this.subscription('building', this._service.Organisation.listen('active_building').subscribe(() => {
                const building = this._service.Organisation.building;
                /* istanbul ignore else */
                if (!building.levels.find(lvl => lvl.id === this.active_level)) {
                    this.active_level = (building.levels[0]).id;
                    this.updateLevel();
                }
                this.levels = [{ id: '', name: 'All Levels' }].concat(building.levels);
                this.levels.sort((a, b) => a.name.localeCompare(b.name));
                this.space_types = [{ id: '', name: 'All Space Types' }].concat(this._service.Organisation.space_types);
            }));
        });
    }
    newMeeting() {
        this._dialog.open(src_app_overlays_booking_modal_booking_modal_component__WEBPACK_IMPORTED_MODULE_3__["BookingModalComponent"], {
            data: {
                booking: new src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_4__["Booking"]({})
            }
        });
    }
    updateLevel() {
        this._router.navigate(['/day-view', this.active_level]);
    }
}
DayViewComponent.ɵfac = function DayViewComponent_Factory(t) { return new (t || DayViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
DayViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayViewComponent, selectors: [["a-day-view"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 22, vars: 11, consts: [[1, "day-view"], [1, "group"], [3, "date", "dateChange"], [1, "topbar"], ["appearance", "outline", 4, "ngIf"], ["appearance", "outline"], ["multiple", "", "placeholder", "No items shown", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["labelPosition", "before", "title", "Only show meetings with setup and breakdown times", 3, "ngModel", "ngModelChange"], [3, "date", "level", "legend", "overflow_only", "space_type"], ["mat-button", "", "name", "new", 1, "new-item", 3, "tapped"], [1, "content"], [1, "material-icons"], [1, "text"], [3, "ngModel", "ngModelChange"], [3, "value"], [1, "key"], [1, "colour"], [1, "blob"]], template: function DayViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a-topbar-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function DayViewComponent_Template_a_topbar_header_dateChange_3_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DayViewComponent_mat_form_field_5_Template, 3, 2, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DayViewComponent_mat_form_field_6_Template, 3, 2, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-select", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DayViewComponent_Template_mat_select_ngModelChange_8_listener($event) { return ctx.legend = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-select-trigger");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Legend");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, DayViewComponent_mat_option_11_Template, 6, 4, "mat-option", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-slide-toggle", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function DayViewComponent_Template_mat_slide_toggle_ngModelChange_12_listener($event) { return ctx.only_overflow = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Only Setup/Breakdown ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "day-view-timeline", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function DayViewComponent_Template_button_tapped_16_listener() { return ctx.newMeeting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "add");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "New Meeting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.levels && ctx.levels.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.space_types && ctx.space_types.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.legend);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.legend_keys);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.only_overflow);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.date)("level", ctx.active_level)("legend", ctx.legend)("overflow_only", ctx.only_overflow)("space_type", ctx.active_type);
    } }, directives: [_shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_9__["TopbarHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_13__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_14__["MatSlideToggle"], _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_15__["DayViewTimelineComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_17__["ɵb"], _angular_material_core__WEBPACK_IMPORTED_MODULE_18__["MatOption"]], styles: ["[_nghost-%COMP%], .day-view[_ngcontent-%COMP%], main[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.day-view[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  max-height: 100vh;\n}\nmain[_ngcontent-%COMP%] {\n  height: calc(100% - 3.5em);\n}\n.group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 12em;\n}\n.topbar[_ngcontent-%COMP%] {\n  padding: 0.1em 0 0.1em 0.5em;\n  height: 3.5em;\n}\n.topbar[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n  width: 10em;\n}\n.key[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.key[_ngcontent-%COMP%]:hover   .blob[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}\n.key[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\n.key[_ngcontent-%COMP%]   .colour[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 16px;\n  width: 16px;\n}\n.key[_ngcontent-%COMP%]   .blob[_ngcontent-%COMP%] {\n  height: 8px;\n  width: 8px;\n  border-radius: 100%;\n  transition: height 200ms, width 200ms;\n}\n.new-item[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1em;\n  right: 1em;\n  z-index: 999;\n  cursor: pointer;\n  height: 1.5em;\n  min-width: 1.5em;\n  padding: 0;\n  border-radius: 0.8em;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.75em;\n  border: none;\n  transition: padding 200ms;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n}\n.new-item[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.new-item[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  width: 0;\n  overflow: hidden;\n  opacity: 0;\n  transition: width 200ms, opacity 200ms;\n  font-size: 1.2rem;\n}\n.new-item[_ngcontent-%COMP%]:hover {\n  padding: 0 0.5em;\n}\n.new-item[_ngcontent-%COMP%]:hover   .text[_ngcontent-%COMP%] {\n  width: 7em;\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvZGF5LXZpZXcvZGF5LXZpZXcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL2RheS12aWV3L2RheS12aWV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQWdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQTdDQTs7MEJBQUE7QUFnQ0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMvQkE7O3NCQUFBO0FDWkE7OztFQUdJLFlBQUE7RUFDQSxXQUFBO0FDbUJKO0FEaEJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ21CSjtBRGhCQTtFQUNJLDBCQUFBO0FDbUJKO0FEaEJBO0VBQ0ksT0FBQTtFQUNBLGVBQUE7QUNtQko7QURoQkE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7QUNtQko7QURqQkk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7QUNtQlI7QURmQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ2tCSjtBRGZRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNpQlo7QURiSTtFQUNJLE9BQUE7RUFDQSxjQUFBO0FDZVI7QURaSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNjUjtBRFhJO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0FDYVI7QURUQTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFRHZFQSxpSEFBQTtBRW9GSjtBRFZJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNZUjtBRFRJO0VBQ0ksUUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLHNDQUFBO0VBQ0EsaUJBQUE7QUNXUjtBRFJJO0VBQ0ksZ0JBQUE7QUNVUjtBRFJRO0VBQ0ksVUFBQTtFQUNBLFVBQUE7QUNVWiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2RheS12aWV3L2RheS12aWV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjMTkzN2VhO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuXG4kY29sb3ItdGVybmFyeTogIzA1MWMyYztcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG4iLCJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGNvbG9yOiAjMDAwLCAkZGVwdGg6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMXB4ICogKCRkZXB0aCAtIDEpIHJnYmEoIzAwMCwgLjIpLFxuICAgICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSxcbiAgICAgICAgICAgICAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3QsXG4uZGF5LXZpZXcsXG5tYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5kYXktdmlldyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbWF4LWhlaWdodDogMTAwdmg7XG59XG5cbm1haW4ge1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMy41ZW0pO1xufVxuXG4uZ3JvdXAge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAxMmVtO1xufVxuXG4udG9wYmFyIHtcbiAgICBwYWRkaW5nOiAuMWVtIDAgLjFlbSAuNWVtO1xuICAgIGhlaWdodDogMy41ZW07XG5cbiAgICBtYXQtZm9ybS1maWVsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjVlbTtcbiAgICAgICAgd2lkdGg6IDEwZW07XG4gICAgfVxufVxuXG4ua2V5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgLmJsb2Ige1xuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIG1pbi13aWR0aDogNTAlO1xuICAgIH1cblxuICAgIC5jb2xvdXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICB9XG5cbiAgICAuYmxvYiB7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMjAwbXMsIHdpZHRoIDIwMG1zO1xuICAgIH1cbn1cblxuLm5ldy1pdGVtIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxZW07XG4gICAgcmlnaHQ6IDFlbTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgbWluLXdpZHRoOiAxLjVlbTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuOGVtO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjc1ZW07XG4gICAgYm9yZGVyOiBub25lO1xuICAgIHRyYW5zaXRpb246IHBhZGRpbmcgMjAwbXM7XG4gICAgQGluY2x1ZGUgYm94LXNoYWRvdztcblxuICAgIC5jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnRleHQge1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogd2lkdGggMjAwbXMsIG9wYWNpdHkgMjAwbXM7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICBwYWRkaW5nOiAwIC41ZW07XG5cbiAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgd2lkdGg6IDdlbTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbjpob3N0LFxuLmRheS12aWV3LFxubWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5kYXktdmlldyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LWhlaWdodDogMTAwdmg7XG59XG5cbm1haW4ge1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDMuNWVtKTtcbn1cblxuLmdyb3VwIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAxMmVtO1xufVxuXG4udG9wYmFyIHtcbiAgcGFkZGluZzogMC4xZW0gMCAwLjFlbSAwLjVlbTtcbiAgaGVpZ2h0OiAzLjVlbTtcbn1cbi50b3BiYXIgbWF0LWZvcm0tZmllbGQge1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICB3aWR0aDogMTBlbTtcbn1cblxuLmtleSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ua2V5OmhvdmVyIC5ibG9iIHtcbiAgaGVpZ2h0OiAxNnB4O1xuICB3aWR0aDogMTZweDtcbn1cbi5rZXkgLnRleHQge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDUwJTtcbn1cbi5rZXkgLmNvbG91ciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuLmtleSAuYmxvYiB7XG4gIGhlaWdodDogOHB4O1xuICB3aWR0aDogOHB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB0cmFuc2l0aW9uOiBoZWlnaHQgMjAwbXMsIHdpZHRoIDIwMG1zO1xufVxuXG4ubmV3LWl0ZW0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMWVtO1xuICByaWdodDogMWVtO1xuICB6LWluZGV4OiA5OTk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgbWluLXdpZHRoOiAxLjVlbTtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXJhZGl1czogMC44ZW07XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IDEuNzVlbTtcbiAgYm9yZGVyOiBub25lO1xuICB0cmFuc2l0aW9uOiBwYWRkaW5nIDIwMG1zO1xuICBib3gtc2hhZG93OiAwIDFweCAzcHggMHB4IHJnYmEoMCwgMCwgMCwgMC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcbn1cbi5uZXctaXRlbSAuY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLm5ldy1pdGVtIC50ZXh0IHtcbiAgd2lkdGg6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IHdpZHRoIDIwMG1zLCBvcGFjaXR5IDIwMG1zO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbi5uZXctaXRlbTpob3ZlciB7XG4gIHBhZGRpbmc6IDAgMC41ZW07XG59XG4ubmV3LWl0ZW06aG92ZXIgLnRleHQge1xuICB3aWR0aDogN2VtO1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayViewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-day-view',
                templateUrl: './day-view.component.html',
                styleUrls: ['./day-view.component.scss']
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shell/day-view/day-view.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shell/day-view/day-view.module.ts ***!
  \***************************************************/
/*! exports provided: DayViewModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayViewModule", function() { return DayViewModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _day_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./day-view.component */ "./src/app/shell/day-view/day-view.component.ts");
/* harmony import */ var _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./timeline/timeline.component */ "./src/app/shell/day-view/timeline/timeline.component.ts");
/* harmony import */ var _approvals_view_approvals_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./approvals-view/approvals-view.component */ "./src/app/shell/day-view/approvals-view/approvals-view.component.ts");
/* harmony import */ var _approvals_view_event_event_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./approvals-view/event/event.component */ "./src/app/shell/day-view/approvals-view/event/event.component.ts");
/* harmony import */ var _space_space_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./space/space.component */ "./src/app/shell/day-view/space/space.component.ts");
/* harmony import */ var _space_event_event_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./space/event/event.component */ "./src/app/shell/day-view/space/event/event.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");













const ROUTES = [
    { path: '', component: _day_view_component__WEBPACK_IMPORTED_MODULE_3__["DayViewComponent"] },
    { path: ':level', component: _day_view_component__WEBPACK_IMPORTED_MODULE_3__["DayViewComponent"] },
    { path: '**', redirectTo: '' }
];
class DayViewModule {
}
DayViewModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DayViewModule });
DayViewModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DayViewModule_Factory(t) { return new (t || DayViewModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedContentModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DayViewModule, { declarations: [_day_view_component__WEBPACK_IMPORTED_MODULE_3__["DayViewComponent"],
        _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__["DayViewTimelineComponent"],
        _approvals_view_approvals_view_component__WEBPACK_IMPORTED_MODULE_5__["DayViewApprovalsComponent"],
        _approvals_view_event_event_component__WEBPACK_IMPORTED_MODULE_6__["DayViewApprovalsEventComponent"],
        _space_space_component__WEBPACK_IMPORTED_MODULE_7__["DayViewSpaceComponent"],
        _space_event_event_component__WEBPACK_IMPORTED_MODULE_8__["DayViewSpaceEventComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedContentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayViewModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _day_view_component__WEBPACK_IMPORTED_MODULE_3__["DayViewComponent"],
                    _timeline_timeline_component__WEBPACK_IMPORTED_MODULE_4__["DayViewTimelineComponent"],
                    _approvals_view_approvals_view_component__WEBPACK_IMPORTED_MODULE_5__["DayViewApprovalsComponent"],
                    _approvals_view_event_event_component__WEBPACK_IMPORTED_MODULE_6__["DayViewApprovalsEventComponent"],
                    _space_space_component__WEBPACK_IMPORTED_MODULE_7__["DayViewSpaceComponent"],
                    _space_event_event_component__WEBPACK_IMPORTED_MODULE_8__["DayViewSpaceEventComponent"]
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES), src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedContentModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shell/day-view/space/event/event.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shell/day-view/space/event/event.component.ts ***!
  \***************************************************************/
/*! exports provided: DayViewSpaceEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayViewSpaceEventComponent", function() { return DayViewSpaceEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_overlays_meeting_details_modal_meeting_details_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/overlays/meeting-details-modal/meeting-details-modal.component */ "./src/app/overlays/meeting-details-modal/meeting-details-modal.component.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");













const _c0 = function (a1) { return { class: "material-icons", content: a1 }; };
function DayViewSpaceEventComponent_div_0_app_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon", 18);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c0, ctx_r1.event.approved ? "done" : ctx_r1.event.declined ? "event_busy" : ""));
} }
function DayViewSpaceEventComponent_div_0_mat_spinner_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 19);
} }
function DayViewSpaceEventComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Booked by:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Booked By: " + ((ctx_r3.event.creator == null ? null : ctx_r3.event.creator.name) || ctx_r3.event.creator));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r3.event.creator == null ? null : ctx_r3.event.creator.name) || ctx_r3.event.creator, " ");
} }
function DayViewSpaceEventComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Welcomed by: " + ctx_r4.event.notify_users[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Welcomed by: ", ctx_r4.event.notify_users[0], "");
} }
function DayViewSpaceEventComponent_div_0_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Catered");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return { class: "material-icons", content: "restaurant" }; };
function DayViewSpaceEventComponent_div_0_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function DayViewSpaceEventComponent_div_0_button_24_Template_button_tapped_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.viewOrder(ctx_r7.order.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function DayViewSpaceEventComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function DayViewSpaceEventComponent_div_0_Template_div_tapped_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.view(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DayViewSpaceEventComponent_div_0_app_icon_7_Template, 1, 3, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DayViewSpaceEventComponent_div_0_mat_spinner_8_Template, 1, 0, "mat-spinner", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Host:\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, DayViewSpaceEventComponent_div_0_div_15_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DayViewSpaceEventComponent_div_0_div_22_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, DayViewSpaceEventComponent_div_0_div_23_Template, 3, 0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, DayViewSpaceEventComponent_div_0_button_24_Template, 2, 2, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", ctx_r0.top + "%")("left", ctx_r0.left + "%")("width", ctx_r0.fixed ? "15rem" : ctx_r0.width + "%")("height", ctx_r0.fixed ? ctx_r0.height * 3 + "rem" : ctx_r0.height + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("fixed", ctx_r0.fixed)("inactive", !ctx_r0.active);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", "event-" + ctx_r0.event.local_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("overflow" + (ctx_r0.type ? " " + ctx_r0.type : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", 0 - ctx_r0.overflow_top + "%")("bottom", 0 - ctx_r0.overflow_bottom + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("event" + (ctx_r0.type ? " " + ctx_r0.type : "") + (ctx_r0.top > 50 ? " low" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("z-index", ((ctx_r0.overlap == null ? null : ctx_r0.overlap.index) || 0) + 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.event.all_day ? "All Day" : ctx_r0.period);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.loading && (ctx_r0.event.declined || ctx_r0.event.approved));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Host: " + ((ctx_r0.event.organiser == null ? null : ctx_r0.event.organiser.name) || ctx_r0.event.organiser));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx_r0.event.organiser == null ? null : ctx_r0.event.organiser.name) || ctx_r0.event.organiser, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event.creator && ctx_r0.event.creator.email !== ctx_r0.event.organiser.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Title: " + ctx_r0.event.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.event.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate3"](" ", ctx_r0.event.attendees ? ctx_r0.event.attendees.length || "No" : "No", " Attendee", (ctx_r0.event.attendees == null ? null : ctx_r0.event.attendees.length) === 1 ? "" : "s", "", ctx_r0.expected ? "(" + ctx_r0.expected + " Expected)" : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.event.notify_users);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.has_catering);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.has_catering);
} }
class DayViewSpaceEventComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    constructor(_service, _dialog, _router) {
        super();
        this._service = _service;
        this._dialog = _dialog;
        this._router = _router;
        /** Emitter for the current position of the event within the timeline */
        this.position = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    /** Type of booking */
    get type() {
        if (this.event.declined) {
            return 'cancelled';
        }
        const booking_type = this.event.type;
        if (booking_type === 'internal' && this.event.has_visitors) {
            return 'external';
        }
        return booking_type;
    }
    /** Period that the event will occur during the day */
    get period() {
        return this.event.time_period;
    }
    /** Number attendees expected to turn up to the event */
    get expected() {
        const expected = this.event.expected_attendees;
        return this.space ? expected[this.space.id] || 0 : 0;
    }
    /** Whether the meeting has catering attached */
    get has_catering() {
        return !!this.order;
    }
    get order() {
        return this.event.catering.find((order) => order.location_id === this.space.id);
    }
    /** View booking details */
    view() {
        this._dialog.open(src_app_overlays_meeting_details_modal_meeting_details_modal_component__WEBPACK_IMPORTED_MODULE_3__["MeetingDetailsModalComponent"], {
            maxHeight: '95vh',
            maxWidth: '95vw',
            data: {
                booking: this.event,
            },
        });
    }
    /** Whether event is active */
    get active() {
        const event = this._service.get('CONCIERGE.day_view.viewing');
        return !event || event.id === this.event.id;
    }
    ngOnChanges(changes) {
        /* istanbul ignore else */
        if (changes.event || changes.overlap || changes.date) {
            this.calculatePosition();
        }
    }
    /**
     * View catering order for the event
     */
    viewOrder(id) {
        /* istanbul ignore else */
        if (this.event && this.event.catering) {
            /* istanbul ignore else */
            if (sessionStorage) {
                sessionStorage.setItem('CONCIERGE.view_order', id);
                const booking = JSON.stringify(this.event.toJSON());
                sessionStorage.setItem('CONCIERGE.order_booking', booking);
            }
            this._router.navigate(['/catering', 'orders'], {
                queryParams: { booking: this.event.id, view: id },
            });
        }
    }
    /** Calculate the position */
    calculatePosition() {
        /* istanbul ignore else */
        if (this.event) {
            const overlap = this.overlap || { index: 0, total: 1 };
            const shown_date = dayjs__WEBPACK_IMPORTED_MODULE_2__(this.date).startOf('d');
            const date = dayjs__WEBPACK_IMPORTED_MODULE_2__(this.event.date).startOf('m');
            const start = +date.diff(shown_date, 'h', true).toFixed(3);
            const duration = Math.min(this.event.duration, Math.abs(shown_date.diff(date.add(this.event.duration, 'm'), 'm')));
            this.top = Math.max(0, (start / 24) * 100);
            this.height = Math.min(100 - this.top, this.fixed ? duration / 60 : (duration / 60 / 24) * 100);
            this.position.emit({ top: this.top, height: (duration / 60 / 24) * 100 });
            this.width = Math.min(100, 100 / overlap.total + 5);
            this.left = Math.min(100 - this.width, this.width * overlap.index - 5 * overlap.index);
            this.overflow_top = (this.event.setup ? this.event.setup / duration : -0.1) * 100;
            this.overflow_bottom =
                (this.event.breakdown ? this.event.breakdown / duration : -0.1) * 100;
        }
    }
}
DayViewSpaceEventComponent.ɵfac = function DayViewSpaceEventComponent_Factory(t) { return new (t || DayViewSpaceEventComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
DayViewSpaceEventComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayViewSpaceEventComponent, selectors: [["day-view-space-event"]], inputs: { event: "event", date: "date", space: "space", fixed: "fixed", overlap: "overlap", loading: "loading" }, outputs: { position: "position" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "event-container", 3, "id", "fixed", "inactive", "top", "left", "width", "height", 4, "ngIf"], [1, "event-container", 3, "id"], [3, "tapped"], [1, "header"], [1, "text"], [1, "handle"], [3, "icon", 4, "ngIf"], ["diameter", "16", 4, "ngIf"], [1, "body"], [1, "field", "host"], [1, "label"], [1, "value", 3, "title"], ["class", "field booked-by", 4, "ngIf"], [1, "field"], [1, "value"], ["class", "field", 3, "title", 4, "ngIf"], ["class", "field", 4, "ngIf"], ["class", "catering-icon", "mat-icon-button", "", "name", "view-catering", 3, "tapped", 4, "ngIf"], [3, "icon"], ["diameter", "16"], [1, "field", "booked-by"], [1, "field", 3, "title"], ["mat-icon-button", "", "name", "view-catering", 1, "catering-icon", 3, "tapped"]], template: function DayViewSpaceEventComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DayViewSpaceEventComponent_div_0_Template, 25, 37, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.event);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_8__["ɵb"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatSpinner"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]], styles: [".event-container[_ngcontent-%COMP%] {\n  position: absolute;\n  pointer-events: auto;\n  transition: -webkit-filter 200ms;\n  transition: filter 200ms;\n  transition: filter 200ms, -webkit-filter 200ms;\n}\n.event-container[_ngcontent-%COMP%]:hover {\n  -webkit-filter: none;\n          filter: none;\n}\n.event-container[_ngcontent-%COMP%]:hover   .catering-icon[_ngcontent-%COMP%] {\n  z-index: 999;\n}\n.event-container[_ngcontent-%COMP%]:hover   .event[_ngcontent-%COMP%] {\n  z-index: 999 !important;\n  bottom: auto;\n  min-height: 100%;\n  left: 5px;\n  right: 5px;\n}\n.event-container[_ngcontent-%COMP%]:hover   .event.low[_ngcontent-%COMP%] {\n  bottom: 0;\n  top: auto;\n}\n.event-container.fixed[_ngcontent-%COMP%]:hover   .event[_ngcontent-%COMP%] {\n  z-index: 999 !important;\n  top: 0;\n  left: 1px;\n  right: 1px;\n  bottom: 0;\n}\n.overflow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2px;\n  left: 2px;\n  right: 2px;\n  bottom: 2px;\n  border-radius: 4px;\n  background-color: rgba(31, 64, 230, 0.2);\n}\n.overflow.internal[_ngcontent-%COMP%] {\n  background-color: rgba(230, 159, 199, 0.2);\n}\n.overflow.external[_ngcontent-%COMP%] {\n  background-color: rgba(140, 90, 200, 0.2);\n}\n.overflow.training[_ngcontent-%COMP%] {\n  background-color: rgba(240, 231, 0, 0.2);\n}\n.overflow.interview[_ngcontent-%COMP%] {\n  background-color: rgba(52, 141, 2, 0.2);\n}\n.overflow.setup[_ngcontent-%COMP%] {\n  background-color: rgba(211, 47, 47, 0.2);\n}\n.overflow.cancelled[_ngcontent-%COMP%] {\n  background-color: rgba(97, 114, 136, 0.2);\n}\n.event[_ngcontent-%COMP%] {\n  position: absolute;\n  overflow: hidden;\n  top: 0;\n  left: 1px;\n  right: 1px;\n  bottom: 0;\n  border-radius: 4px;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  transition: bottom 200ms, top 200ms, left 200ms, right 200ms;\n  border: 1px solid #1F40E6;\n  border-color: #1F40E6;\n}\n.event[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: #1F40E6;\n}\n.event[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: rgba(31, 64, 230, 0.2);\n}\n.event.pending[_ngcontent-%COMP%] {\n  border-color: rgba(31, 64, 230, 0.4);\n}\n.event.pending[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: rgba(31, 64, 230, 0.4);\n}\n.event.internal[_ngcontent-%COMP%] {\n  border-color: #E69FC7;\n}\n.event.internal[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: #E69FC7;\n}\n.event.internal[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: rgba(230, 159, 199, 0.2);\n}\n.event.internal.pending[_ngcontent-%COMP%] {\n  border-color: rgba(230, 159, 199, 0.4);\n}\n.event.internal.pending[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: rgba(230, 159, 199, 0.4);\n}\n.event.external[_ngcontent-%COMP%] {\n  border-color: #8C5AC8;\n}\n.event.external[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: #8C5AC8;\n}\n.event.external[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: rgba(140, 90, 200, 0.2);\n}\n.event.external.pending[_ngcontent-%COMP%] {\n  border-color: rgba(140, 90, 200, 0.4);\n}\n.event.external.pending[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: rgba(140, 90, 200, 0.4);\n}\n.event.training[_ngcontent-%COMP%] {\n  border-color: #F0E700;\n}\n.event.training[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: #F0E700;\n}\n.event.training[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: rgba(240, 231, 0, 0.2);\n}\n.event.training.pending[_ngcontent-%COMP%] {\n  border-color: rgba(240, 231, 0, 0.4);\n}\n.event.training.pending[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: rgba(240, 231, 0, 0.4);\n}\n.event.interview[_ngcontent-%COMP%] {\n  border-color: #348D02;\n}\n.event.interview[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: #348D02;\n}\n.event.interview[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: rgba(52, 141, 2, 0.2);\n}\n.event.interview.pending[_ngcontent-%COMP%] {\n  border-color: rgba(52, 141, 2, 0.4);\n}\n.event.interview.pending[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: rgba(52, 141, 2, 0.4);\n}\n.event.setup[_ngcontent-%COMP%] {\n  border-color: #d32f2f;\n}\n.event.setup[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: #d32f2f;\n}\n.event.setup[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: rgba(211, 47, 47, 0.2);\n}\n.event.setup.pending[_ngcontent-%COMP%] {\n  border-color: rgba(211, 47, 47, 0.4);\n}\n.event.setup.pending[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: rgba(211, 47, 47, 0.4);\n}\n.event.cancelled[_ngcontent-%COMP%] {\n  border-color: #617288;\n}\n.event.cancelled[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: #617288;\n}\n.event.cancelled[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  background-color: rgba(97, 114, 136, 0.2);\n}\n.event.cancelled.pending[_ngcontent-%COMP%] {\n  border-color: rgba(97, 114, 136, 0.4);\n}\n.event.cancelled.pending[_ngcontent-%COMP%]   .handle[_ngcontent-%COMP%] {\n  background-color: rgba(97, 114, 136, 0.4);\n}\n.inactive[_ngcontent-%COMP%] {\n  -webkit-filter: blur(1px) grayscale(80%);\n          filter: blur(1px) grayscale(80%);\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 1.5em;\n}\n.header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  padding: 1em;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  flex: 1;\n  min-width: 50%;\n}\n.handle[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 1.8em;\n  background-color: #1F40E6;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.body[_ngcontent-%COMP%] {\n  padding: 1em;\n  font-size: 0.8em;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.5em;\n}\n.field[_ngcontent-%COMP%]:last-child {\n  margin: none;\n}\n.host[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.catering-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  bottom: -4px;\n  right: 4px;\n  height: 2.5em;\n  width: 2.5em;\n  background-color: #fff;\n  border: 1px solid #ccc;\n  z-index: 100;\n  font-size: 0.6em;\n}\nspinner[_ngcontent-%COMP%] {\n  font-size: 0.3em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvZGF5LXZpZXcvc3BhY2UvZXZlbnQvZXZlbnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL2RheS12aWV3L3NwYWNlL2V2ZW50L2V2ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQWdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQTdDQTs7MEJBQUE7QUFnQ0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMvQkE7O3NCQUFBO0FDYUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0NBQUE7RUFBQSx3QkFBQTtFQUFBLDhDQUFBO0FDTko7QURRSTtFQUNJLG9CQUFBO1VBQUEsWUFBQTtBQ05SO0FET1E7RUFDSSxZQUFBO0FDTFo7QURRUTtFQUNJLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNOWjtBRFFZO0VBQ0ksU0FBQTtFQUNBLFNBQUE7QUNOaEI7QURjWTtFQUNJLHVCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQ1poQjtBRG1CQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBakRBLHdDQUFBO0FDa0NKO0FEbUJJO0VBckRBLDBDQUFBO0FDcUNKO0FEb0JJO0VBekRBLHlDQUFBO0FDd0NKO0FEcUJJO0VBN0RBLHdDQUFBO0FDMkNKO0FEc0JJO0VBakVBLHVDQUFBO0FDOENKO0FEdUJJO0VBckVBLHdDQUFBO0FDaURKO0FEd0JJO0VBekVBLHlDQUFBO0FDb0RKO0FEMEJBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLE1BQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0dBQUE7RUFDQSw0REFBQTtFQUNBLHlCQUFBO0VBN0dBLHFCQStHcUI7QUN4QnpCO0FEckZJO0VBQ0kseUJBNEdpQjtBQ3JCekI7QURwRkk7RUFDSSx3Q0FBQTtBQ3NGUjtBRG5GSTtFQUNJLG9DQUFBO0FDcUZSO0FEbkZRO0VBQ0ksd0NBQUE7QUNxRlo7QURjSTtFQWpIQSxxQkFrSHlCO0FDWjdCO0FEcEdJO0VBQ0kseUJBK0dxQjtBQ1Q3QjtBRG5HSTtFQUNJLDBDQUFBO0FDcUdSO0FEbEdJO0VBQ0ksc0NBQUE7QUNvR1I7QURsR1E7RUFDSSwwQ0FBQTtBQ29HWjtBREdJO0VBckhBLHFCQXNIeUI7QUNEN0I7QURuSEk7RUFDSSx5QkFtSHFCO0FDRTdCO0FEbEhJO0VBQ0kseUNBQUE7QUNvSFI7QURqSEk7RUFDSSxxQ0FBQTtBQ21IUjtBRGpIUTtFQUNJLHlDQUFBO0FDbUhaO0FEUkk7RUF6SEEscUJBMEh5QjtBQ1U3QjtBRGxJSTtFQUNJLHlCQXVIcUI7QUNhN0I7QURqSUk7RUFDSSx3Q0FBQTtBQ21JUjtBRGhJSTtFQUNJLG9DQUFBO0FDa0lSO0FEaElRO0VBQ0ksd0NBQUE7QUNrSVo7QURuQkk7RUE3SEEscUJBOEh5QjtBQ3FCN0I7QURqSkk7RUFDSSx5QkEySHFCO0FDd0I3QjtBRGhKSTtFQUNJLHVDQUFBO0FDa0pSO0FEL0lJO0VBQ0ksbUNBQUE7QUNpSlI7QUQvSVE7RUFDSSx1Q0FBQTtBQ2lKWjtBRDlCSTtFQWpJQSxxQkFrSXlCO0FDZ0M3QjtBRGhLSTtFQUNJLHlCQStIcUI7QUNtQzdCO0FEL0pJO0VBQ0ksd0NBQUE7QUNpS1I7QUQ5Skk7RUFDSSxvQ0FBQTtBQ2dLUjtBRDlKUTtFQUNJLHdDQUFBO0FDZ0taO0FEekNJO0VBcklBLHFCQXNJeUI7QUMyQzdCO0FEL0tJO0VBQ0kseUJBbUlxQjtBQzhDN0I7QUQ5S0k7RUFDSSx5Q0FBQTtBQ2dMUjtBRDdLSTtFQUNJLHFDQUFBO0FDK0tSO0FEN0tRO0VBQ0kseUNBQUE7QUMrS1o7QURuREE7RUFDSSx3Q0FBQTtVQUFBLGdDQUFBO0FDc0RKO0FEbkRBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQ3NESjtBRHBESTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLE9BQUE7RUFDQSxjQUFBO0FDc0RSO0FEbERBO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQ3FESjtBRGxEQTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtBQ3FESjtBRGxEQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FDcURKO0FEbkRJO0VBQ0ksWUFBQTtBQ3FEUjtBRGpEQTtFQUNJLGtCQUFBO0FDb0RKO0FEakRBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDb0RKO0FEakRBO0VBQ0ksZ0JBQUE7QUNvREoiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9kYXktdmlldy9zcGFjZS9ldmVudC9ldmVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogI2YwZjBmMDtcbiRmb290ZXItYmFjazogIzI2MzIzODtcblxuJGNvbG9yLXRlcm5hcnk6ICMwNTFjMmM7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRjb2xvcjogIzAwMCwgJGRlcHRoOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDFweCAqICgkZGVwdGggLSAxKSByZ2JhKCMwMDAsIC4yKSxcbiAgICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksXG4gICAgICAgICAgICAgICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuQG1peGluIGJsb2NrLWNvbG9yKCRjb2xvcikge1xuICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuXG4gICAgLmhhbmRsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3IsIC4yKTtcbiAgICB9XG5cbiAgICAmLnBlbmRpbmcge1xuICAgICAgICBib3JkZXItY29sb3I6IHJnYmEoJGNvbG9yLCAuNCk7XG5cbiAgICAgICAgLmhhbmRsZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvciwgLjQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gb3ZlcmZsb3ctY29sb3IoJGNvbG9yKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3IsIC4yKTtcbn1cblxuLmV2ZW50LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIHRyYW5zaXRpb246IGZpbHRlciAyMDBtcztcblxuICAgICY6aG92ZXIge1xuICAgICAgICBmaWx0ZXI6IG5vbmU7XG4gICAgICAgIC5jYXRlcmluZy1pY29uIHtcbiAgICAgICAgICAgIHotaW5kZXg6IDk5OTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ldmVudCB7XG4gICAgICAgICAgICB6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIGJvdHRvbTogYXV0bztcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBsZWZ0OiA1cHg7XG4gICAgICAgICAgICByaWdodDogNXB4O1xuXG4gICAgICAgICAgICAmLmxvdyB7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIHRvcDogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuZml4ZWQge1xuICAgICAgICAmOmhvdmVyIHtcblxuICAgICAgICAgICAgLmV2ZW50IHtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgICAgICAgbGVmdDogMXB4O1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAxcHg7XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5vdmVyZmxvdyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMnB4O1xuICAgIGxlZnQ6IDJweDtcbiAgICByaWdodDogMnB4O1xuICAgIGJvdHRvbTogMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcblxuICAgIEBpbmNsdWRlIG92ZXJmbG93LWNvbG9yKCMxRjQwRTYpO1xuXG4gICAgJi5pbnRlcm5hbCB7XG4gICAgICAgIEBpbmNsdWRlIG92ZXJmbG93LWNvbG9yKCNFNjlGQzcpO1xuICAgIH1cblxuICAgICYuZXh0ZXJuYWwge1xuICAgICAgICBAaW5jbHVkZSBvdmVyZmxvdy1jb2xvcigjOEM1QUM4KTtcbiAgICB9XG5cbiAgICAmLnRyYWluaW5nIHtcbiAgICAgICAgQGluY2x1ZGUgb3ZlcmZsb3ctY29sb3IoI0YwRTcwMCk7XG4gICAgfVxuXG4gICAgJi5pbnRlcnZpZXcge1xuICAgICAgICBAaW5jbHVkZSBvdmVyZmxvdy1jb2xvcigjMzQ4RDAyKTtcbiAgICB9XG5cbiAgICAmLnNldHVwIHtcbiAgICAgICAgQGluY2x1ZGUgb3ZlcmZsb3ctY29sb3IoI2QzMmYyZik7XG4gICAgfVxuXG4gICAgJi5jYW5jZWxsZWQge1xuICAgICAgICBAaW5jbHVkZSBvdmVyZmxvdy1jb2xvcigjNjE3Mjg4KTtcbiAgICB9XG59XG5cbi5ldmVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDFweDtcbiAgICByaWdodDogMXB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKDAsIDAsIDAsIC4yKSwgMCAxcHggMXB4IDAgcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIC4xMik7XG4gICAgdHJhbnNpdGlvbjogYm90dG9tIDIwMG1zLCB0b3AgMjAwbXMsIGxlZnQgMjAwbXMsIHJpZ2h0IDIwMG1zO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMxRjQwRTY7XG5cbiAgICBAaW5jbHVkZSBibG9jay1jb2xvcigjMUY0MEU2KTtcblxuICAgICYuaW50ZXJuYWwge1xuICAgICAgICBAaW5jbHVkZSBibG9jay1jb2xvcigjRTY5RkM3KTtcbiAgICB9XG5cbiAgICAmLmV4dGVybmFsIHtcbiAgICAgICAgQGluY2x1ZGUgYmxvY2stY29sb3IoIzhDNUFDOCk7XG4gICAgfVxuXG4gICAgJi50cmFpbmluZyB7XG4gICAgICAgIEBpbmNsdWRlIGJsb2NrLWNvbG9yKCNGMEU3MDApO1xuICAgIH1cblxuICAgICYuaW50ZXJ2aWV3IHtcbiAgICAgICAgQGluY2x1ZGUgYmxvY2stY29sb3IoIzM0OEQwMik7XG4gICAgfVxuXG4gICAgJi5zZXR1cCB7XG4gICAgICAgIEBpbmNsdWRlIGJsb2NrLWNvbG9yKCNkMzJmMmYpO1xuICAgIH1cblxuICAgICYuY2FuY2VsbGVkIHtcbiAgICAgICAgQGluY2x1ZGUgYmxvY2stY29sb3IoIzYxNzI4OCk7XG4gICAgfVxufVxuXG4uaW5hY3RpdmUge1xuICAgIGZpbHRlcjogYmx1cigxcHgpIGdyYXlzY2FsZSg4MCUpO1xufVxuXG4uaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxLjVlbTtcblxuICAgIC50ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgICBwYWRkaW5nOiAxZW07XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtaW4td2lkdGg6IDUwJTtcbiAgICB9XG59XG5cbi5oYW5kbGUge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMS44ZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFGNDBFNjtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ib2R5IHtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZm9udC1zaXplOiAuOGVtO1xufVxuXG4uZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luOiBub25lO1xuICAgIH1cbn1cblxuLmhvc3QgLnZhbHVlIHtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5jYXRlcmluZy1pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTRweDtcbiAgICByaWdodDogNHB4O1xuICAgIGhlaWdodDogMi41ZW07XG4gICAgd2lkdGg6IDIuNWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgICB6LWluZGV4OiAxMDA7XG4gICAgZm9udC1zaXplOiAuNmVtO1xufVxuXG5zcGlubmVyIHtcbiAgICBmb250LXNpemU6IC4zZW07XG59XG5cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmV2ZW50LWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gIHRyYW5zaXRpb246IGZpbHRlciAyMDBtcztcbn1cbi5ldmVudC1jb250YWluZXI6aG92ZXIge1xuICBmaWx0ZXI6IG5vbmU7XG59XG4uZXZlbnQtY29udGFpbmVyOmhvdmVyIC5jYXRlcmluZy1pY29uIHtcbiAgei1pbmRleDogOTk5O1xufVxuLmV2ZW50LWNvbnRhaW5lcjpob3ZlciAuZXZlbnQge1xuICB6LWluZGV4OiA5OTkgIWltcG9ydGFudDtcbiAgYm90dG9tOiBhdXRvO1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiA1cHg7XG4gIHJpZ2h0OiA1cHg7XG59XG4uZXZlbnQtY29udGFpbmVyOmhvdmVyIC5ldmVudC5sb3cge1xuICBib3R0b206IDA7XG4gIHRvcDogYXV0bztcbn1cbi5ldmVudC1jb250YWluZXIuZml4ZWQ6aG92ZXIgLmV2ZW50IHtcbiAgei1pbmRleDogOTk5ICFpbXBvcnRhbnQ7XG4gIHRvcDogMDtcbiAgbGVmdDogMXB4O1xuICByaWdodDogMXB4O1xuICBib3R0b206IDA7XG59XG5cbi5vdmVyZmxvdyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAycHg7XG4gIGxlZnQ6IDJweDtcbiAgcmlnaHQ6IDJweDtcbiAgYm90dG9tOiAycHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgNjQsIDIzMCwgMC4yKTtcbn1cbi5vdmVyZmxvdy5pbnRlcm5hbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCAxNTksIDE5OSwgMC4yKTtcbn1cbi5vdmVyZmxvdy5leHRlcm5hbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTQwLCA5MCwgMjAwLCAwLjIpO1xufVxuLm92ZXJmbG93LnRyYWluaW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDIzMSwgMCwgMC4yKTtcbn1cbi5vdmVyZmxvdy5pbnRlcnZpZXcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxNDEsIDIsIDAuMik7XG59XG4ub3ZlcmZsb3cuc2V0dXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgNDcsIDQ3LCAwLjIpO1xufVxuLm92ZXJmbG93LmNhbmNlbGxlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTcsIDExNCwgMTM2LCAwLjIpO1xufVxuXG4uZXZlbnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvcDogMDtcbiAgbGVmdDogMXB4O1xuICByaWdodDogMXB4O1xuICBib3R0b206IDA7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB0cmFuc2l0aW9uOiBib3R0b20gMjAwbXMsIHRvcCAyMDBtcywgbGVmdCAyMDBtcywgcmlnaHQgMjAwbXM7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMxRjQwRTY7XG4gIGJvcmRlci1jb2xvcjogIzFGNDBFNjtcbn1cbi5ldmVudCAuaGFuZGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGNDBFNjtcbn1cbi5ldmVudCAuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgzMSwgNjQsIDIzMCwgMC4yKTtcbn1cbi5ldmVudC5wZW5kaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDMxLCA2NCwgMjMwLCAwLjQpO1xufVxuLmV2ZW50LnBlbmRpbmcgLmhhbmRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzEsIDY0LCAyMzAsIDAuNCk7XG59XG4uZXZlbnQuaW50ZXJuYWwge1xuICBib3JkZXItY29sb3I6ICNFNjlGQzc7XG59XG4uZXZlbnQuaW50ZXJuYWwgLmhhbmRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFNjlGQzc7XG59XG4uZXZlbnQuaW50ZXJuYWwgLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjMwLCAxNTksIDE5OSwgMC4yKTtcbn1cbi5ldmVudC5pbnRlcm5hbC5wZW5kaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDIzMCwgMTU5LCAxOTksIDAuNCk7XG59XG4uZXZlbnQuaW50ZXJuYWwucGVuZGluZyAuaGFuZGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzAsIDE1OSwgMTk5LCAwLjQpO1xufVxuLmV2ZW50LmV4dGVybmFsIHtcbiAgYm9yZGVyLWNvbG9yOiAjOEM1QUM4O1xufVxuLmV2ZW50LmV4dGVybmFsIC5oYW5kbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOEM1QUM4O1xufVxuLmV2ZW50LmV4dGVybmFsIC5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MCwgOTAsIDIwMCwgMC4yKTtcbn1cbi5ldmVudC5leHRlcm5hbC5wZW5kaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDE0MCwgOTAsIDIwMCwgMC40KTtcbn1cbi5ldmVudC5leHRlcm5hbC5wZW5kaW5nIC5oYW5kbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE0MCwgOTAsIDIwMCwgMC40KTtcbn1cbi5ldmVudC50cmFpbmluZyB7XG4gIGJvcmRlci1jb2xvcjogI0YwRTcwMDtcbn1cbi5ldmVudC50cmFpbmluZyAuaGFuZGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YwRTcwMDtcbn1cbi5ldmVudC50cmFpbmluZyAuaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDAsIDIzMSwgMCwgMC4yKTtcbn1cbi5ldmVudC50cmFpbmluZy5wZW5kaW5nIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDI0MCwgMjMxLCAwLCAwLjQpO1xufVxuLmV2ZW50LnRyYWluaW5nLnBlbmRpbmcgLmhhbmRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQwLCAyMzEsIDAsIDAuNCk7XG59XG4uZXZlbnQuaW50ZXJ2aWV3IHtcbiAgYm9yZGVyLWNvbG9yOiAjMzQ4RDAyO1xufVxuLmV2ZW50LmludGVydmlldyAuaGFuZGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OEQwMjtcbn1cbi5ldmVudC5pbnRlcnZpZXcgLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNTIsIDE0MSwgMiwgMC4yKTtcbn1cbi5ldmVudC5pbnRlcnZpZXcucGVuZGluZyB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg1MiwgMTQxLCAyLCAwLjQpO1xufVxuLmV2ZW50LmludGVydmlldy5wZW5kaW5nIC5oYW5kbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDUyLCAxNDEsIDIsIDAuNCk7XG59XG4uZXZlbnQuc2V0dXAge1xuICBib3JkZXItY29sb3I6ICNkMzJmMmY7XG59XG4uZXZlbnQuc2V0dXAgLmhhbmRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkMzJmMmY7XG59XG4uZXZlbnQuc2V0dXAgLmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjExLCA0NywgNDcsIDAuMik7XG59XG4uZXZlbnQuc2V0dXAucGVuZGluZyB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSgyMTEsIDQ3LCA0NywgMC40KTtcbn1cbi5ldmVudC5zZXR1cC5wZW5kaW5nIC5oYW5kbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxMSwgNDcsIDQ3LCAwLjQpO1xufVxuLmV2ZW50LmNhbmNlbGxlZCB7XG4gIGJvcmRlci1jb2xvcjogIzYxNzI4ODtcbn1cbi5ldmVudC5jYW5jZWxsZWQgLmhhbmRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MTcyODg7XG59XG4uZXZlbnQuY2FuY2VsbGVkIC5oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDk3LCAxMTQsIDEzNiwgMC4yKTtcbn1cbi5ldmVudC5jYW5jZWxsZWQucGVuZGluZyB7XG4gIGJvcmRlci1jb2xvcjogcmdiYSg5NywgMTE0LCAxMzYsIDAuNCk7XG59XG4uZXZlbnQuY2FuY2VsbGVkLnBlbmRpbmcgLmhhbmRsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoOTcsIDExNCwgMTM2LCAwLjQpO1xufVxuXG4uaW5hY3RpdmUge1xuICBmaWx0ZXI6IGJsdXIoMXB4KSBncmF5c2NhbGUoODAlKTtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMS41ZW07XG59XG4uaGVhZGVyIC50ZXh0IHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgcGFkZGluZzogMWVtO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA1MCU7XG59XG5cbi5oYW5kbGUge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxLjhlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFGNDBFNjtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYm9keSB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLmZpZWxkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG59XG4uZmllbGQ6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbjogbm9uZTtcbn1cblxuLmhvc3QgLnZhbHVlIHtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4uY2F0ZXJpbmctaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTRweDtcbiAgcmlnaHQ6IDRweDtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgd2lkdGg6IDIuNWVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB6LWluZGV4OiAxMDA7XG4gIGZvbnQtc2l6ZTogMC42ZW07XG59XG5cbnNwaW5uZXIge1xuICBmb250LXNpemU6IDAuM2VtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayViewSpaceEventComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'day-view-space-event',
                templateUrl: './event.component.html',
                styleUrls: ['./event.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], space: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], fixed: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], overlap: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], position: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/day-view/space/space.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shell/day-view/space/space.component.ts ***!
  \*********************************************************/
/*! exports provided: DayViewSpaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayViewSpaceComponent", function() { return DayViewSpaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _shared_directives_cdk_drop_list_scroll_container_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/directives/cdk-drop-list-scroll-container.directive */ "./src/app/shared/directives/cdk-drop-list-scroll-container.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _event_event_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./event/event.component */ "./src/app/shell/day-view/space/event/event.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");













const _c0 = ["view"];
function DayViewSpaceComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "day-view-space-event", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fixed", true)("space", ctx_r4.space)("event", item_r3);
} }
function DayViewSpaceComponent_div_3_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 12);
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", (ctx_r5.top || (ctx_r5.position_list[item_r3.id] ? ctx_r5.position_list[item_r3.id].top : 0)) + "%")("height", (ctx_r5.position_list[item_r3.id] ? ctx_r5.position_list[item_r3.id].height : 100) + "%");
} }
function DayViewSpaceComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDragStarted", function DayViewSpaceComponent_div_3_Template_div_cdkDragStarted_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.initDrag(); })("cdkDragMoved", function DayViewSpaceComponent_div_3_Template_div_cdkDragMoved_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.updateDragTop($event); })("cdkDragReleased", function DayViewSpaceComponent_div_3_Template_div_cdkDragReleased_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.endDrag(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "day-view-space-event", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("position", function DayViewSpaceComponent_div_3_Template_day_view_space_event_position_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const item_r3 = ctx.$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.position_list ? (ctx_r12.position_list[item_r3.id] = $event) : ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, DayViewSpaceComponent_div_3_div_2_Template, 3, 3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DayViewSpaceComponent_div_3_div_3_Template, 1, 4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx_r1.in_view !== false ? "" : "none");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDragDisabled", item_r3.status !== "upcoming" || item_r3.declined || !ctx_r1.settings.dragdrop);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("space", ctx_r1.space)("date", ctx_r1.date)("event", item_r3)("loading", ctx_r1.loading ? ctx_r1.loading[item_r3.id] : null)("overlap", ctx_r1.overlap_details ? ctx_r1.overlap_details[item_r3.id] : null);
} }
function DayViewSpaceComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Moving meeting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-spinner", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return []; };
const _c2 = function (a0, a1) { return { top: a0, list: a1 }; };
class DayViewSpaceComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"] {
    constructor(_service, _dialog) {
        super();
        this._service = _service;
        this._dialog = _dialog;
        /** Mapping of whether to show events with a given legend id */
        this.legend = {};
        /** Emitter for whether the space column is in view */
        this.inView = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Emitter for whether an event is being dragged */
        this.dragging = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** Mapping of event IDs to overlap details */
        this.overlap_details = {};
        /** Mapping of positions of event in the day */
        this.position_list = {};
        /** Map of bookings to whether they are loading */
        this.loading = {};
        /** Settings for day view */
        this.settings = {};
    }
    /** Events to display for the active date */
    get events() {
        /* istanbul ignore else */
        if (this.space) {
            const bookings = this.space.bookingsFor(this.date);
            const list = bookings.filter((event) => {
                if (this.override_state && this.override_state === event.icaluid) {
                    this.loading[event.id] = true;
                }
                return event.declined
                    ? (!this.overflow_only || event.setup || event.breakdown) &&
                        this.legend.declined !== false
                    : (!this.overflow_only || event.setup || event.breakdown) &&
                        this.legend[event.type] !== false;
            });
            return list;
        }
        return [];
    }
    ngOnInit() {
        this._service.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])((_) => _)).subscribe(() => {
            this.settings = this._service.setting('app.day_view') || {};
            this.subscription('breakdown', this._service.listen('APP.breakdown').subscribe((state) => {
                this.overflow_only = state;
            }));
            this.subscription('legend', this._service.listen('CONCIERGE.legend').subscribe((state) => {
                this.legend = state || {};
            }));
        });
    }
    ngOnChanges(changes) {
        /* istanbul ignore else */
        if (changes.scroll) {
            this.checkInView();
        }
        /* istanbul ignore else */
        if (changes.last_update) {
            this.timeout('update_overlaps', () => this.calculateOverlaps(), 1000);
        }
    }
    /**
     * Track by function for ngFor optimisation
     * @param index Index of the item
     * @param item Data associated with the item at the given index
     */
    trackByFn(index, item) {
        return item.id || index;
    }
    /**
     * Calculate to overlap details for the booking events on the space
     */
    calculateOverlaps() {
        const events = this.events.sort((a, b) => a.date - b.date ||
            a.duration - b.duration ||
            (a.title || '').localeCompare(b.title || ''));
        events.forEach((i) => (this.overlap_details[i.id] = { index: 0, total: 1 }));
        for (const bkn of events) {
            const bkn_start = dayjs__WEBPACK_IMPORTED_MODULE_1__(bkn.date).startOf('m');
            const bkn_end = dayjs__WEBPACK_IMPORTED_MODULE_1__(bkn_start).add(bkn.duration, 'm').startOf('m');
            let count = 1;
            let index = 0;
            const collisions = [];
            for (const cmp of events) {
                /* istanbul ignore else */
                if (bkn.id !== cmp.id) {
                    const cmp_start = dayjs__WEBPACK_IMPORTED_MODULE_1__(cmp.date).startOf('m');
                    const cmp_end = dayjs__WEBPACK_IMPORTED_MODULE_1__(cmp_start).add(cmp.duration, 'm').startOf('m');
                    /* istanbul ignore else */
                    if (bkn_start.isSame(cmp_start, 'm') ||
                        (bkn_start.isAfter(cmp_start, 'm') && bkn_start.isBefore(cmp_end, 'm')) ||
                        bkn_end.isSame(cmp_end, 'm') ||
                        (bkn_end.isAfter(cmp_start, 'm') && bkn_end.isBefore(cmp_end, 'm'))) {
                        count++;
                        collisions.push(bkn);
                        /* istanbul ignore else */
                        if (events.findIndex((i) => i.id === bkn.id) >
                            events.findIndex((i) => i.id === cmp.id)) {
                            index++;
                        }
                    }
                }
            }
            this.overlap_details[bkn.id] = { index: Math.max(0, index), total: count };
        }
    }
    /**
     * Check whether the space column is with the view of the
     */
    checkInView() {
        /* istanbul ignore else */
        if (this.view && this.view.nativeElement) {
            const el = this.view.nativeElement;
            this.in_view =
                el.offsetLeft + this.scroll >= -240 &&
                    el.offsetLeft + this.scroll <= window.innerWidth;
            this.inView.emit(this.in_view);
        }
    }
    /**
     * Initialise drag events
     */
    initDrag() {
        this.box = this.view.nativeElement.getBoundingClientRect();
        this.dragging.emit(true);
    }
    /**
     * Cleanup after drag
     */
    endDrag() {
        this.timeout('end_drag', () => (this.top = 0), 10);
        this.dragging.emit(false);
    }
    /**
     * Update top position of the dragged event placeholder
     * @param booking Booking being dragged
     * @param event Drag event
     */
    updateDragTop(event) {
        /* istanbul ignore else */
        if (event.delta.y) {
            const y = event.pointerPosition.y;
            const top = (y - this.box.top - this.scroll_top) / this.box.height;
            const top_minutes = (Math.round((top * 24 * 60) / 15) * 15) / 60;
            this.top = (top_minutes / 24) * 100;
        }
    }
    /**
     * Handle drop event
     * @param event
     */
    drop(event) {
        const id = event.item.element.nativeElement.id;
        const booking = event.previousContainer.data.list.find((i) => i.id === id);
        /* istanbul ignore else */
        if (!booking) {
            return;
        }
        const top = event.previousContainer.data.top;
        const new_start = Math.round(((top || 0) / 100) * 24 * 60);
        const old_date = dayjs__WEBPACK_IMPORTED_MODULE_1__(booking.date);
        const date = old_date.startOf('d').minute(new_start);
        const now = dayjs__WEBPACK_IMPORTED_MODULE_1__().startOf('m');
        /* istanbul ignore else */
        // Prevent moving event into past
        if (now.isAfter(date, 'm')) {
            this.handleDropError(booking.id, 'Meetings cannot be moved into the past');
            return;
        }
        // Check for collisions
        this.loading[booking.id] = true;
        this.override_state = booking.icaluid;
        let room = booking.space;
        let message = `Update ${booking.organiser.name}'s meeting in "${booking.space.name}" from ${old_date.format('h:mm A')} to ${date.format('h:mm A')}`;
        let success = `Successfully updated meeting time from ${old_date.format('h:mm A')} to ${date.format('h:mm A')}`;
        booking.storePendingChange('date', date.valueOf());
        /* istanbul ignore else */
        if (event.container !== event.previousContainer) {
            // Same room
            room = this._service.Spaces.find(event.container.id.replace('space-col-', ''));
            message = `Move ${booking.organiser.name}'s meeting in "${booking.space.name}" to "${room.name}" at ${date.format('h:mm A')}`;
            success = `Successfully moved booking to "${room.name}" at ${date.format('h:mm A')}`;
        }
        /* istanbul ignore else */
        // Check if booking has a change
        if (room === booking.space && date.isSame(old_date, 'm')) {
            this.handleDropError(booking.id, 'The meeting is already in this room');
            return;
        }
        const room_list = [room, ...booking.space_list.filter((i) => i.id !== booking.space.id)];
        // Check if booking is already in the room
        const room_count = room_list.reduce((a, v) => a.add(v.id), new Set()).size;
        /* istanbul ignore else */
        if (room_count < room_list.length) {
            this.handleDropError(booking.id, 'The meeting is already in this room');
            return;
        }
        booking.storePendingChange('space_ids', room_list.map(space => space.id));
        this.checkCollisions(room_list, date.valueOf(), booking.duration, booking.icaluid).then(() => {
            this.moveBooking(message, booking).then((_) => {
                this.override_state = null;
                this._service.notifySuccess(success);
            }, (err) => this.handleDropError(booking.id, `Error: ${err}`));
        }, () => this.handleDropError(booking.id, 'Updated meeting time clashes with another'));
    }
    /**
     * Check if there are any booking collisions with the new booking time
     * @param spaces
     * @param date
     * @param duration
     */
    checkCollisions(spaces, date, duration, ignore) {
        return new Promise((resolve, reject) => {
            this._service.Spaces.available({
                room_ids: spaces.map((i) => i.id).join(','),
                date,
                duration,
                ignore,
                hide_bookings: true,
            }).then((list) => {
                list.length === spaces.length ? resolve() : reject();
            }, () => reject());
        });
    }
    /**
     * Handle errors from drop move logic
     * @param id Booking ID
     * @param message Error description
     */
    handleDropError(id, message) {
        this.loading[id] = false;
        this.override_state = null;
        this._service.notifyError(message);
    }
    /**
     * Update booking
     * @param confirm_msg
     * @param new_booking
     */
    moveBooking(confirm_msg, new_booking) {
        return new Promise((resolve, reject) => {
            const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_4__["ConfirmModalComponent"], {
                data: {
                    title: 'Update meeting',
                    content: confirm_msg,
                    icon: { type: 'icon', class: 'material-icons', content: 'event_available' },
                    action: 'Ok',
                },
            });
            this.subscription('confirm', ref.componentInstance.event.subscribe((event) => {
                /* istanbul ignore else */
                if (event.reason === 'done') {
                    new_booking.save().then((bkn) => resolve(bkn), (err) => reject(err));
                }
                ref.close();
            }));
        });
    }
}
DayViewSpaceComponent.ɵfac = function DayViewSpaceComponent_Factory(t) { return new (t || DayViewSpaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
DayViewSpaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayViewSpaceComponent, selectors: [["day-view-space"]], viewQuery: function DayViewSpaceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.view = _t.first);
    } }, inputs: { space_list: "space_list", date: "date", space: "space", scroll: "scroll", overflow_only: "overflow_only", legend: "legend", scroll_top: ["scrollTop", "scroll_top"], last_update: ["lastUpdate", "last_update"] }, outputs: { inView: "inView", dragging: "dragging" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 5, vars: 10, consts: [["cdkDropList", "", "cdkDropListSortingDisabled", "", "scrollContainer", "#day-view-scroll", 1, "space-display", 3, "cdkDropListConnectedTo", "cdkDropListData", "id", "cdkDropListDropped"], ["view", ""], ["cdkDrag", "", 1, "drop-zone"], ["cdkDrag", "", 3, "display", "cdkDragDisabled", "cdkDragStarted", "cdkDragMoved", "cdkDragReleased", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "moving", 4, "ngIf"], ["cdkDrag", "", 3, "cdkDragDisabled", "cdkDragStarted", "cdkDragMoved", "cdkDragReleased"], [3, "space", "date", "event", "loading", "overlap", "position"], ["class", "event-preview", 4, "cdkDragPreview"], ["class", "event-placeholder", 3, "top", "height", 4, "cdkDragPlaceholder"], [1, "event-preview"], [1, "content"], [3, "fixed", "space", "event"], [1, "event-placeholder"], [1, "moving"], [1, "text"], [1, "spinner"], ["diameter", "32"]], template: function DayViewSpaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkDropListDropped", function DayViewSpaceComponent_Template_div_cdkDropListDropped_0_listener($event) { return ctx.drop($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DayViewSpaceComponent_div_3_Template, 4, 8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DayViewSpaceComponent_div_4_Template, 5, 0, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("cdkDropListConnectedTo", ctx.space_list || _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c1))("cdkDropListData", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c2, ctx.top, ctx.events))("id", "space-col-" + (ctx.space == null ? null : ctx.space.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events)("ngForTrackBy", ctx.trackByFn);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.override_state);
    } }, directives: [_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["CdkDropList"], _shared_directives_cdk_drop_list_scroll_container_directive__WEBPACK_IMPORTED_MODULE_8__["CdkDropListScrollContainer"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["CdkDrag"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _event_event_component__WEBPACK_IMPORTED_MODULE_10__["DayViewSpaceEventComponent"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["CdkDragPreview"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_7__["CdkDragPlaceholder"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]], styles: [".space-display[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n  pointer-events: auto;\n}\n.space-display[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.event-preview[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.event-placeholder[_ngcontent-%COMP%] {\n  position: absolute;\n  width: calc(100% - .5em);\n  margin: 0 0.25em;\n  border: 3px dashed #969696;\n  background-color: rgba(0, 0, 0, 0.2);\n  border-radius: 4px;\n  transform: none !important;\n  z-index: 99999;\n}\n.drop-zone[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  pointer-events: none;\n  transform: none !important;\n}\n.cdk-drag[_ngcontent-%COMP%] {\n  transform: none !important;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.cdk-drag-disabled[_ngcontent-%COMP%] {\n  cursor: initial;\n}\n.moving[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 1.5em;\n  left: 50%;\n  transform: translateX(-50%);\n  padding: 0.5em 1em;\n  border-radius: 1.5em;\n  display: flex;\n  align-items: center;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  z-index: 999;\n}\n.moving[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n.moving[_ngcontent-%COMP%]   spinner[_ngcontent-%COMP%] {\n  font-size: 0.25em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvZGF5LXZpZXcvc3BhY2Uvc3BhY2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL2RheS12aWV3L3NwYWNlL3NwYWNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQWdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQTdDQTs7MEJBQUE7QUFnQ0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMvQkE7O3NCQUFBO0FDWEE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQ2tCSjtBRGpCSTtFQUNJLG9CQUFBO0FDbUJSO0FEZkE7RUFDSSxvQkFBQTtBQ2tCSjtBRGZBO0VBQ0ksa0JBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0FDa0JKO0FEZkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esb0JBQUE7RUFDQSwwQkFBQTtBQ2tCSjtBRGZBO0VBQ0ksMEJBQUE7RUFDQSxvQkFBQTtFQUFBLFlBQUE7QUNrQko7QURmQTtFQUNJLGVBQUE7QUNrQko7QURmQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VEOUNBLGlIQUFBO0VDZ0RBLFlBQUE7QUNrQko7QURoQkk7RUFDSSxrQkFBQTtBQ2tCUjtBRGZJO0VBQ0ksaUJBQUE7QUNpQlIiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9kYXktdmlldy9zcGFjZS9zcGFjZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogI2YwZjBmMDtcbiRmb290ZXItYmFjazogIzI2MzIzODtcblxuJGNvbG9yLXRlcm5hcnk6ICMwNTFjMmM7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gaGlkZS10ZXh0LW92ZXJmbG93IHtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbkBtaXhpbiBib3gtc2hhZG93KCRjb2xvcjogIzAwMCwgJGRlcHRoOiAxKSB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDFweCAqICgkZGVwdGggLSAxKSByZ2JhKCMwMDAsIC4yKSxcbiAgICAgICAgICAgICAgICAwIDFweCAxcHggMCByZ2JhKCMwMDAsIC4xNCksXG4gICAgICAgICAgICAgICAgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLCAuMTIpO1xufVxuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuQGltcG9ydCAnbWl4aW5zJztcblxuLnNwYWNlLWRpc3BsYXkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICA+ICoge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICB9XG59XG5cbi5ldmVudC1wcmV2aWV3IHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmV2ZW50LXBsYWNlaG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIC41ZW0pO1xuICAgIG1hcmdpbjogMCAuMjVlbTtcbiAgICBib3JkZXI6IDNweCBkYXNoZWQgIzk2OTY5NjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIC4yKTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgei1pbmRleDogOTk5OTk7XG59XG5cbi5kcm9wLXpvbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jZGstZHJhZyB7XG4gICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgY3Vyc29yOiBncmFiO1xufVxuXG4uY2RrLWRyYWctZGlzYWJsZWQge1xuICAgIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuLm1vdmluZyB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMS41ZW07XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcbiAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxLjVlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93O1xuICAgIHotaW5kZXg6IDk5OTtcblxuICAgIC5zcGlubmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC41ZW07XG4gICAgfVxuXG4gICAgc3Bpbm5lciB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjI1ZW07XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uc3BhY2UtZGlzcGxheSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4uc3BhY2UtZGlzcGxheSA+ICoge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmV2ZW50LXByZXZpZXcge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmV2ZW50LXBsYWNlaG9sZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogY2FsYygxMDAlIC0gLjVlbSk7XG4gIG1hcmdpbjogMCAwLjI1ZW07XG4gIGJvcmRlcjogM3B4IGRhc2hlZCAjOTY5Njk2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk5O1xufVxuXG4uZHJvcC16b25lIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi5jZGstZHJhZyB7XG4gIHRyYW5zZm9ybTogbm9uZSAhaW1wb3J0YW50O1xuICBjdXJzb3I6IGdyYWI7XG59XG5cbi5jZGstZHJhZy1kaXNhYmxlZCB7XG4gIGN1cnNvcjogaW5pdGlhbDtcbn1cblxuLm1vdmluZyB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAxLjVlbTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHBhZGRpbmc6IDAuNWVtIDFlbTtcbiAgYm9yZGVyLXJhZGl1czogMS41ZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICB6LWluZGV4OiA5OTk7XG59XG4ubW92aW5nIC5zcGlubmVyIHtcbiAgbWFyZ2luLWxlZnQ6IDAuNWVtO1xufVxuLm1vdmluZyBzcGlubmVyIHtcbiAgZm9udC1zaXplOiAwLjI1ZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayViewSpaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'day-view-space',
                templateUrl: './space.component.html',
                styleUrls: ['./space.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { space_list: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], space: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scroll: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], overflow_only: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], legend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scroll_top: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['scrollTop']
        }], last_update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['lastUpdate']
        }], inView: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], dragging: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], view: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['view', { static: true }]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/day-view/timeline/timeline.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/shell/day-view/timeline/timeline.component.ts ***!
  \***************************************************************/
/*! exports provided: DayViewTimelineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DayViewTimelineComponent", function() { return DayViewTimelineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data/bookings/booking.class */ "./src/app/services/data/bookings/booking.class.ts");
/* harmony import */ var src_app_overlays_meeting_details_modal_meeting_details_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/overlays/meeting-details-modal/meeting-details-modal.component */ "./src/app/overlays/meeting-details-modal/meeting-details-modal.component.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _space_space_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../space/space.component */ "./src/app/shell/day-view/space/space.component.ts");
/* harmony import */ var _approvals_view_approvals_view_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../approvals-view/approvals-view.component */ "./src/app/shell/day-view/approvals-view/approvals-view.component.ts");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "./node_modules/@acaprojects/ngx-pipes/__ivy_ngcc__/fesm2015/acaprojects-ngx-pipes.js");

















const _c0 = ["scroll_area"];
function DayViewTimelineComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DayViewTimelineComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", item_r9.long_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r9.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Capacity - ", item_r9.capacity || "0", " ", item_r9.capacity === 1 ? "person" : "people", " ");
} }
function DayViewTimelineComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Holding Bay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchrelease", function DayViewTimelineComponent_div_9_Template_div_touchrelease_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.show_holding_bay = !ctx_r10.show_holding_bay; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "i", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx_r2.show_holding_bay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx_r2.holding_bay.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.show_holding_bay ? "keyboard_arrow_right" : "event_available");
} }
function DayViewTimelineComponent_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx_r3.is_today && item_r12.id === ctx_r3.active_hour);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.name, " ");
} }
function DayViewTimelineComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DayViewTimelineComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "day-view-space", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragging", function DayViewTimelineComponent_div_19_Template_day_view_space_dragging_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.dragChange($event); })("inView", function DayViewTimelineComponent_div_19_Template_day_view_space_inView_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const item_r14 = ctx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return (ctx_r17.in_view[item_r14.id] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-height", ctx_r6.time_blocks.length * 3 + "rem");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("space_list", ctx_r6.space_zones)("date", ctx_r6.date)("space", item_r14)("legend", ctx_r6.legend_map)("overflow_only", ctx_r6.overflow_only)("scroll", 0 - ctx_r6.scroll_left)("scrollTop", ctx_r6.scroll_offset - ctx_r6.scroll_top)("lastUpdate", ctx_r6.last_update);
} }
function DayViewTimelineComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](1, 2, "calc(" + ctx_r7.now * ctx_r7.time_blocks.length * 3 + "rem - " + ctx_r7.scroll_top + "px)", "style"));
} }
function DayViewTimelineComponent_div_21_day_view_space_1_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "day-view-space", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dragging", function DayViewTimelineComponent_div_21_day_view_space_1_Template_day_view_space_dragging_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r19.dragChange($event); })("inView", function DayViewTimelineComponent_div_21_day_view_space_1_Template_day_view_space_inView_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return (ctx_r21.in_view[ctx_r21.holding_bay.id] = $event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx_r18.date)("space", ctx_r18.holding_bay)("lastUpdate", ctx_r18.last_update);
} }
function DayViewTimelineComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DayViewTimelineComponent_div_21_day_view_space_1_Template, 1, 3, "day-view-space", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "day-view-approvals-view", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx_r8.show_holding_bay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.holding_bay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx_r8.date);
} }
const UPDATE_INTERVAL = 30;
class DayViewTimelineComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_2__["BaseDirective"] {
    constructor(_service, _route, _renderer, _dialog) {
        super();
        this._service = _service;
        this._route = _route;
        this._renderer = _renderer;
        this._dialog = _dialog;
        /** List of shown legend items */
        this.legend = [];
        /** List of timeblocks to display */
        this.time_blocks = this.generateTimeBlocks();
        /** Top value of the content scroll */
        this.scroll_top = 0;
        /** Left value of the content scroll */
        this.scroll_left = 0;
        /** Offset of the scroll value when starting a drag */
        this.scroll_offset = 0;
        /** List of spaces to display for  */
        this.spaces = [];
        /** List of spaces to display for  */
        this.filtered_spaces = [];
        /** Mapping of space ids to whether they are in view */
        this.in_view = {};
        /** Mapping of spaces loading booking date */
        this.loading_space = {};
        /** Last update time for the space bookings */
        this.last_update = 0;
        /** Whether to show the holding bay */
        this.show_holding_bay = true;
    }
    /** Update scroll box when the window is resized */
    onResize() {
        if (this.scroll_area.nativeElement) {
            this.box = this.scroll_area.nativeElement.getBoundingClientRect();
        }
    }
    get legend_map() {
        const map = {};
        this.legend.forEach(item => map[item] = true);
        return map;
    }
    get is_loading() {
        return (this.loading ||
            Object.keys(this.loading_space).reduce((loading, key) => loading || this.loading_space[key], false));
    }
    get holding_bay() {
        const bld = this._service.Organisation.building;
        /* istanbul ignore else */
        if (bld && bld.holding_bay) {
            return this._service.Spaces.find(bld.holding_bay);
        }
        return null;
    }
    ngOnInit() {
        this._service.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])((_) => _)).subscribe(() => {
            this.init();
            // Update time
            this.updateTime();
            this.interval('time', () => this.updateTime(), 15 * 1000);
        });
    }
    ngOnChanges(changes) {
        /* istanbul ignore else */
        if (!this._service.Spaces.is_initialised) {
            this._service.Spaces.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])((_) => _)).subscribe(() => {
                this.ngOnChanges(changes);
            });
            return;
        }
        /* istanbul ignore else */
        if (changes.date) {
            this.is_today = dayjs__WEBPACK_IMPORTED_MODULE_5__().isSame(dayjs__WEBPACK_IMPORTED_MODULE_5__(this.date), 'd');
            this.updateBookings();
            this.interval('bookings', () => this.updateBookings(), UPDATE_INTERVAL * 1000);
        }
        /* istanbul ignore else */
        if (changes.level) {
            const zone_id = !this.level
                ? this._service.Organisation.building.id
                : this.level;
            this.spaces = this._service.Spaces.filter((_) => _.zones.indexOf(zone_id) >= 0);
            this.initSpaces();
            this.updateBookings();
            this.interval('bookings', () => this.updateBookings(), UPDATE_INTERVAL * 1000);
        }
        /* istanbul ignore else */
        if (changes.room_type) {
            this.initSpaces();
        }
    }
    init() {
        this._service.Spaces.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])((_) => _)).subscribe(() => {
            this._service.title = 'Day View';
            this.subscription('viewing', this._service.listen('CONCIERGE.day_view.viewing').subscribe((event) => this.scrollIntoView(event)));
            // Subscribe to route query changes
            this.subscription('route.query', this._route.queryParamMap.subscribe((params) => {
                /* istanbul ignore else */
                if (params.has('view')) {
                    this.view_id = params.get('view');
                    const details = localStorage.getItem('CONCIERGE.view_booking');
                    /* istanbul ignore else */
                    if (details) {
                        const booking = new src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_3__["Booking"](JSON.parse(details));
                        this.view(booking);
                        localStorage.removeItem('CONCIERGE.view_booking');
                    }
                }
            }));
            // Update bookings for visible rooms
            this.updateBookings();
            this.interval('bookings', () => this.updateBookings(), UPDATE_INTERVAL * 1000);
            this.interval('scroll', () => {
                /* istanbul ignore else */
                if (this.scroll_area && this.scroll_area.nativeElement) {
                    this.updateScroll({ target: this.scroll_area.nativeElement });
                }
            }, 1000);
            /* istanbul ignore else */
            if (this.scroll_area.nativeElement) {
                this.box = this.scroll_area.nativeElement.getBoundingClientRect();
            }
        });
    }
    /** List of space */
    get space_zones() {
        return this.spaces.map((i) => `space-col-${i.id}`);
    }
    /**
     * Update scroll parameters to match the change in the scroll position
     * @param event
     */
    updateScroll(event) {
        this.scroll_top = event.target.scrollTop;
        this.scroll_left = event.target.scrollLeft;
    }
    /** Generate time blocks to display on the day view */
    generateTimeBlocks() {
        const blocks = [];
        const date = dayjs__WEBPACK_IMPORTED_MODULE_5__().startOf('h');
        for (let i = 0; i < 24; i++) {
            blocks.push({
                id: date.hour(i).format('HH:mm'),
                name: date.hour(i).format('h:mm A'),
            });
        }
        return blocks;
    }
    /** Update the now line position */
    updateTime() {
        const time = dayjs__WEBPACK_IMPORTED_MODULE_5__();
        this.now = (time.hour() + time.minute() / 60) / 24;
        this.active_hour = time.startOf('h').format('HH:mm');
    }
    /** Update bookings for rooms in view */
    updateBookings() {
        const visible_rooms = this.spaces.filter((i) => this.in_view[i.id] !== false);
        if (visible_rooms.length) {
            visible_rooms.forEach((rm) => (this.loading_space[rm.id] = true));
            const time = dayjs__WEBPACK_IMPORTED_MODULE_5__(this.date).startOf('d');
            const end = time.endOf('d');
            const room_ids = visible_rooms.reduce((v, i) => v + (v ? ',' : '') + i.id, '');
            const level = this._service.get('APP.level');
            const zone_ids = [level === -1 ? this._service.Organisation.building.id : level];
            /* istanbul ignore else */
            if (this.space_type) {
                zone_ids.push(this.space_type);
            }
            this.loading = true;
            this._service.Spaces.query({
                room_ids,
                zone_ids: zone_ids.join(','),
                available_from: time.unix(),
                available_to: end.unix(),
            }).then((room_list) => {
                room_list.forEach((rm) => {
                    /* istanbul ignore else */
                    if (this.view_id) {
                        const booking = rm.bookings.find((i) => i.id === this.view_id);
                        /* istanbul ignore else */
                        if (booking) {
                            this.view(booking);
                        }
                    }
                    const space = this.filtered_spaces.find((space) => space.id === rm.id);
                    /* istanbul ignore else */
                    if (space) {
                        space._bookings = rm._bookings;
                    }
                });
                delete this.loading_space;
                this.last_update = dayjs__WEBPACK_IMPORTED_MODULE_5__().valueOf();
                this.loading_space = {};
                this.loading = false;
            }, () => (this.loading = false));
        }
    }
    /**
     * View booking details
     * @param booking Booking to view the details of
     */
    view(booking) {
        this._dialog.open(src_app_overlays_meeting_details_modal_meeting_details_modal_component__WEBPACK_IMPORTED_MODULE_4__["MeetingDetailsModalComponent"], {
            data: {
                booking,
            },
        });
        this.view_id = null;
    }
    /**
     * Scroll booking to the event on the day view
     * @param booking Booking to scroll into view
     */
    scrollIntoView(booking) {
        if (booking && this.scroll_area && this.scroll_area.nativeElement) {
            const element = this.scroll_area.nativeElement.querySelector(`#event-${booking.id}`);
            /* istanbul ignore else */
            if (element) {
                const scroll_box = this.scroll_area.nativeElement.getBoundingClientRect();
                const box = element.getBoundingClientRect();
                this.scroll_area.nativeElement.scrollTo({
                    left: box.left - scroll_box.left + this.scroll_area.nativeElement.scrollLeft,
                    top: box.top - scroll_box.top + this.scroll_area.nativeElement.scrollTop,
                    behavior: 'smooth',
                });
            }
        }
    }
    /**
     * Setup an auto-scroll for the display view
     * @param x
     * @param y
     */
    scrollView(x, y) {
        /* istanbul ignore else */
        if (x || y) {
            this.scroll_area.nativeElement.scrollTop += y || 0;
            this.scroll_area.nativeElement.scrollLeft += x || 0;
            /* istanbul ignore else */
            if ((y &&
                this.scroll_area.nativeElement.scrollTop >=
                    this.scroll_area.nativeElement.scrollHeight) ||
                (x &&
                    this.scroll_area.nativeElement.scrollLeft >=
                        this.scroll_area.nativeElement.scrollWidth) ||
                (y && this.scroll_area.nativeElement.scrollTop <= 0) ||
                (x && this.scroll_area.nativeElement.scrollLeft <= 0)) {
                this.clearInterval('auto_scroll');
            }
            this.updateScroll({ target: this.scroll_area.nativeElement });
        }
    }
    clearSelected() {
        this._service.set('CONCIERGE.day_view.viewing', null);
    }
    cancelScroll() {
        this.clearInterval('auto_scroll');
    }
    dragChange(is_dragging) {
        if (is_dragging) {
            this.scroll_offset = this.scroll_area.nativeElement.scrollTop;
            this.subscription('listen_move', this._renderer.listen('window', 'mousemove', (event) => {
                const position = { x: event.clientX, y: event.clientY };
                const y = position.y > this.box.bottom - this.box.height * 0.05
                    ? 1
                    : position.y < this.box.top + this.box.height * 0.05
                        ? -1
                        : 0;
                const x = position.x > this.box.right - this.box.width * 0.05
                    ? 1
                    : position.x < this.box.left + this.box.height * 0.05
                        ? -1
                        : 0;
                this.scrollView(x * 5, y * 5);
                this.interval('auto_scroll', () => this.scrollView(x * 10, y * 10), 10);
            }));
            this.clearInterval('bookings');
        }
        else {
            this.interval('bookings', () => this.updateBookings(), UPDATE_INTERVAL * 1000);
            this.cancelScroll();
            this.unsub('listen_move');
        }
    }
    initSpaces() {
        const holding_bay = this.holding_bay;
        this.filtered_spaces = this.spaces.filter((i) => (!this.space_type || i.zones.indexOf(this.space_type) >= 0) &&
            (!holding_bay || i.id !== holding_bay.id) &&
            i.bookable);
        this.filtered_spaces.sort((a, b) => a.name.localeCompare(b.name));
    }
}
DayViewTimelineComponent.ɵfac = function DayViewTimelineComponent_Factory(t) { return new (t || DayViewTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"])); };
DayViewTimelineComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DayViewTimelineComponent, selectors: [["day-view-timeline"]], viewQuery: function DayViewTimelineComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scroll_area = _t.first);
    } }, hostBindings: function DayViewTimelineComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function DayViewTimelineComponent_resize_HostBindingHandler() { return ctx.onResize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { date: "date", level: "level", space_type: "space_type", legend: "legend", overflow_only: "overflow_only", loading: "loading" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 22, vars: 14, consts: [[1, "timeline"], ["class", "loader", 4, "ngIf"], [1, "header"], [1, "time-blocks"], [1, "text"], [1, "flex"], [1, "group"], ["class", "space-header", 3, "title", 4, "ngFor", "ngForOf"], ["class", "sidebar", 3, "show", 4, "ngIf"], [1, "body", 3, "touchrelease"], ["class", "block", 4, "ngFor", "ngForOf"], ["id", "day-view-scroll", 1, "flex", "content", 3, "scroll"], ["scroll_area", ""], [1, "time-lines"], [1, "space-day"], ["class", "space", "cdkDropListGroup", "", 3, "min-height", 4, "ngFor", "ngForOf"], ["class", "now-line", 3, "top", 4, "ngIf"], [1, "loader"], ["mode", "indeterminate"], [1, "space-header", 3, "title"], [1, "details"], [1, "icon"], [1, "capacity"], [1, "sidebar"], [1, "tag", 3, "touchrelease"], [1, "material-icons"], [1, "block"], ["div", "", 1, "hour"], [1, "line"], ["cdkDropListGroup", "", 1, "space"], [3, "space_list", "date", "space", "legend", "overflow_only", "scroll", "scrollTop", "lastUpdate", "dragging", "inView"], [1, "now-line"], [1, "knob"], [3, "date", "space", "lastUpdate", "dragging", "inView", 4, "ngIf"], [3, "date"], [3, "date", "space", "lastUpdate", "dragging", "inView"]], template: function DayViewTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DayViewTimelineComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DayViewTimelineComponent_div_8_Template, 7, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DayViewTimelineComponent_div_9_Template, 9, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("touchrelease", function DayViewTimelineComponent_Template_div_touchrelease_10_listener() { return ctx.clearSelected(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DayViewTimelineComponent_div_13_Template, 3, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11, 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function DayViewTimelineComponent_Template_div_scroll_14_listener($event) { return ctx.updateScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DayViewTimelineComponent_div_17_Template, 2, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DayViewTimelineComponent_div_19_Template, 2, 10, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DayViewTimelineComponent_div_20_Template, 3, 5, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DayViewTimelineComponent_div_21_Template, 3, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.is_loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("left", 0 - ctx.scroll_left + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filtered_spaces);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.holding_bay);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("top", 0 - ctx.scroll_top + "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.time_blocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("min-width", ctx.filtered_spaces.length * 15 + "rem");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.time_blocks);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.filtered_spaces);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.is_today);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.holding_bay);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_11__["MatProgressBar"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["CdkDropListGroup"], _space_space_component__WEBPACK_IMPORTED_MODULE_13__["DayViewSpaceComponent"], _approvals_view_approvals_view_component__WEBPACK_IMPORTED_MODULE_14__["DayViewApprovalsComponent"]], pipes: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_15__["ɵa"]], styles: [".timeline[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  background-color: #ecf1f5;\n}\n.header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #ccc;\n  width: 100%;\n  height: 3em;\n}\n.header[_ngcontent-%COMP%]   .flex[_ngcontent-%COMP%] {\n  overflow: hidden;\n  height: 100%;\n}\n.header[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  top: 0;\n  left: 0;\n  bottom: 0;\n}\n.header[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-left: 0.5em;\n}\n.header[_ngcontent-%COMP%]   spinner[_ngcontent-%COMP%] {\n  font-size: 0.25em;\n}\n.body[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  width: 100%;\n  flex: 1;\n  min-height: 50%;\n  overflow: hidden;\n}\n.body[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  right: 0;\n}\n.time-blocks[_ngcontent-%COMP%] {\n  position: relative;\n  width: 6em;\n  border-right: 1px solid #ccc;\n  height: 100%;\n  overflow: hidden;\n}\n.time-blocks[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%]:first-child {\n  opacity: 0;\n}\n.time-blocks[_ngcontent-%COMP%]    > .text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n.flex[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-width: 5em;\n}\n.content[_ngcontent-%COMP%] {\n  overflow: auto;\n  background-color: #fff;\n  height: 100%;\n}\n.time-lines[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  pointer-events: none;\n}\n.time-lines[_ngcontent-%COMP%]   .block[_ngcontent-%COMP%] {\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n}\n.time-lines[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  border-bottom: 1px dashed rgba(0, 0, 0, 0.1);\n  width: 100%;\n}\n.block[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 3rem;\n  box-sizing: border-box;\n  font-size: 0.8em;\n}\n.hour[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  transform: translateY(-50%);\n  text-align: center;\n  width: 100%;\n  transition: color 200ms;\n}\n.hour.active[_ngcontent-%COMP%] {\n  color: #1937ea;\n}\n.space-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n  height: 100%;\n  width: 15rem;\n  padding: 0.25em 1em;\n}\n.space-header[_ngcontent-%COMP%]   .details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.space-header[_ngcontent-%COMP%]   .capacity[_ngcontent-%COMP%] {\n  font-size: 0.7em;\n  text-align: center;\n}\n.space-header[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  font-size: 0.9em;\n}\n.space-day[_ngcontent-%COMP%] {\n  display: flex;\n}\n.space[_ngcontent-%COMP%] {\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n  min-height: 50vh;\n  min-width: 15rem;\n  max-width: 15rem;\n  pointer-events: none;\n}\n.now-line[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 6em;\n  right: 0;\n  top: 0;\n  border: 1px solid #1937ea;\n  pointer-events: none;\n  z-index: 101;\n}\n.now-line[_ngcontent-%COMP%]   .knob[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: -1px;\n  transform: translate(-50%, -50%);\n  height: 12px;\n  width: 12px;\n  border-radius: 100%;\n  background-color: #1937ea;\n}\n.sidebar[_ngcontent-%COMP%] {\n  position: relative;\n  border-left: 1px solid #ccc;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.05);\n  z-index: 102;\n  width: 0;\n  transition: width 200ms;\n}\n.sidebar.show[_ngcontent-%COMP%] {\n  width: 24em;\n}\n.sidebar[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  border: none;\n}\n.sidebar[_ngcontent-%COMP%]   .space-header[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.auto-scroll[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3em;\n  left: 6em;\n  right: 0;\n  bottom: 0;\n  pointer-events: none;\n}\n@media only screen and (orientation: portrait) and (max-width: 450px) {\n  .auto-scroll[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media only screen and (orientation: landscape) and (max-width: 800px) {\n  .auto-scroll[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.auto-scroll[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  pointer-events: auto;\n}\n.auto-scroll[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%], .auto-scroll[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  right: 0;\n  height: 32px;\n}\n.auto-scroll[_ngcontent-%COMP%]   .top[_ngcontent-%COMP%] {\n  top: 0;\n}\n.auto-scroll[_ngcontent-%COMP%]   .bottom[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n.auto-scroll[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%], .auto-scroll[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 32px;\n}\n.auto-scroll[_ngcontent-%COMP%]   .left[_ngcontent-%COMP%] {\n  top: 0;\n}\n.auto-scroll[_ngcontent-%COMP%]   .right[_ngcontent-%COMP%] {\n  bottom: 0;\n}\n.tag[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 1px;\n  top: 50%;\n  display: flex;\n  align-items: center;\n  height: 2.5em;\n  transform: translate(-100%, -50%);\n  border-radius: 1.3em 0 0 1.3em;\n  background-color: #fff;\n  border: 1px solid #ccc !important;\n  border-right: none !important;\n}\n.tag[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.25em;\n  width: 1.25em;\n  font-size: 2em;\n  margin: 0 0.1em;\n}\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvZGF5LXZpZXcvdGltZWxpbmUvdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL2RheS12aWV3L3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQWdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQTdDQTs7MEJBQUE7QUFnQ0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMvQkE7O3NCQUFBO0FDWEE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ2tCSjtBRGZBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ2tCSjtBRGhCSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQ2tCUjtBRGZJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7QUNpQlI7QURkSTtFQUNJLGtCQUFBO0FDZ0JSO0FEYkk7RUFDSSxpQkFBQTtBQ2VSO0FEWEE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDY0o7QURaSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7QUNjUjtBRFZBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNhSjtBRFhJO0VBQ0ksVUFBQTtBQ2FSO0FEVkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDWVI7QURSQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGNBQUE7QUNXSjtBRFJBO0VBQ0ksY0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ1dKO0FEUkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtBQ1dKO0FEVEk7RUFDSSwyQ0FBQTtBQ1dSO0FEUkk7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSw0Q0FBQTtFQUNBLFdBQUE7QUNVUjtBRE5BO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNTSjtBRE5BO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtBQ1NKO0FEUEk7RUFDSSxjRjlHUTtBR3VIaEI7QURMQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNRSjtBRE5JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNRUjtBRExJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQ09SO0FESkk7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ01SO0FERkE7RUFDSSxhQUFBO0FDS0o7QURGQTtFQUNJLDBDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7QUNLSjtBREZBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0tKO0FESEk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VBQ0EsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJGNUtRO0FHaUxoQjtBRERBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxxQ0FBQTtFQUNBLFlBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7QUNJSjtBREZJO0VBQ0ksV0FBQTtBQ0lSO0FEREk7RUFDSSxZQUFBO0FDR1I7QURBSTtFQUNJLFdBQUE7QUNFUjtBREVBO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0JBQUE7QUNDSjtBRjVNUTtFQ3FNUjtJQVNRLGFBQUE7RUNFTjtBQUNGO0FGOU1RO0VDa01SO0lBU1EsYUFBQTtFQ09OO0FBQ0Y7QURMSTtFQUNJLG9CQUFBO0FDT1I7QURKSTs7RUFFSSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtBQ01SO0FESEk7RUFDSSxNQUFBO0FDS1I7QURGSTtFQUNJLFNBQUE7QUNJUjtBRERJOztFQUVJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDR1I7QURBSTtFQUNJLE1BQUE7QUNFUjtBRENJO0VBQ0ksU0FBQTtBQ0NSO0FER0E7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGlDQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGlDQUFBO0VBQ0EsNkJBQUE7QUNBSjtBREVJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FDQVI7QURJQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2RheS12aWV3L3RpbWVsaW5lL3RpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjMTkzN2VhO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuXG4kY29sb3ItdGVybmFyeTogIzA1MWMyYztcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG4iLCJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGNvbG9yOiAjMDAwLCAkZGVwdGg6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMXB4ICogKCRkZXB0aCAtIDEpIHJnYmEoIzAwMCwgLjIpLFxuICAgICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSxcbiAgICAgICAgICAgICAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG4udGltZWxpbmUge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjFmNTtcbn1cblxuLmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM2VtO1xuXG4gICAgLmZsZXgge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLmdyb3VwIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuNWVtO1xuICAgIH1cblxuICAgIHNwaW5uZXIge1xuICAgICAgICBmb250LXNpemU6IC4yNWVtO1xuICAgIH1cbn1cblxuLmJvZHkge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleDogMTtcbiAgICBtaW4taGVpZ2h0OiA1MCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5ncm91cCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICB9XG59XG5cbi50aW1lLWJsb2NrcyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA2ZW07XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgIC5ibG9jazpmaXJzdC1jaGlsZCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgPiAudGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmZsZXgge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogNWVtO1xufVxuXG4uY29udGVudCB7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aW1lLWxpbmVzIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAuYmxvY2sge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgjMDAwLCAuMSk7XG4gICAgfVxuXG4gICAgLmxpbmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIHJnYmEoIzAwMCwgLjEpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5ibG9jayB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogM3JlbTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbn1cblxuLmhvdXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcblxuICAgICYuYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIH1cbn1cblxuLnNwYWNlLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgjMDAwLCAuMSk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxNXJlbTtcbiAgICBwYWRkaW5nOiAuMjVlbSAxZW07XG5cbiAgICAuZGV0YWlscyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIC5jYXBhY2l0eSB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjdlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC50ZXh0IHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGZvbnQtc2l6ZTogLjllbTtcbiAgICB9XG59XG5cbi5zcGFjZS1kYXkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zcGFjZSB7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgjMDAwLCAuMSk7XG4gICAgbWluLWhlaWdodDogNTB2aDtcbiAgICBtaW4td2lkdGg6IDE1cmVtO1xuICAgIG1heC13aWR0aDogMTVyZW07XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5ub3ctbGluZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDZlbTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDA7XG4gICAgYm9yZGVyOiAxcHggc29saWQgJGNvbG9yLXByaW1hcnk7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgei1pbmRleDogMTAxO1xuXG4gICAgLmtub2Ige1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogLTFweDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIGhlaWdodDogMTJweDtcbiAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIH1cbn1cblxuLnNpZGViYXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoIzAwMCwgLjA1KTtcbiAgICB6LWluZGV4OiAxMDI7XG4gICAgd2lkdGg6IDA7XG4gICAgdHJhbnNpdGlvbjogd2lkdGggMjAwbXM7XG5cbiAgICAmLnNob3cge1xuICAgICAgICB3aWR0aDogMjRlbTtcbiAgICB9XG5cbiAgICAqIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgIH1cblxuICAgIC5zcGFjZS1oZWFkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5hdXRvLXNjcm9sbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogM2VtO1xuICAgIGxlZnQ6IDZlbTtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgID4gKiB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIH1cblxuICAgIC50b3AsXG4gICAgLmJvdHRvbSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICB9XG5cbiAgICAudG9wIHtcbiAgICAgICAgdG9wOiAwO1xuICAgIH1cblxuICAgIC5ib3R0b20ge1xuICAgICAgICBib3R0b206IDA7XG4gICAgfVxuXG4gICAgLmxlZnQsXG4gICAgLnJpZ2h0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDMycHg7XG4gICAgfVxuXG4gICAgLmxlZnQge1xuICAgICAgICB0b3A6IDA7XG4gICAgfVxuXG4gICAgLnJpZ2h0IHtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgIH1cbn1cblxuLnRhZyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDFweDtcbiAgICB0b3A6IDUwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyLjVlbTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTAwJSwgLTUwJSk7XG4gICAgYm9yZGVyLXJhZGl1czogMS4zZW0gMCAwIDEuM2VtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYyAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xuXG4gICAgLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgICAgIHdpZHRoOiAxLjI1ZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBtYXJnaW46IDAgLjFlbTtcbiAgICB9XG59XG5cbi5sb2FkZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDRweDtcbiAgICB6LWluZGV4OiA5OTk7XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi50aW1lbGluZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjFmNTtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAzZW07XG59XG4uaGVhZGVyIC5mbGV4IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuLmhlYWRlciAuZ3JvdXAge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xufVxuLmhlYWRlciAuaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAwLjVlbTtcbn1cbi5oZWFkZXIgc3Bpbm5lciB7XG4gIGZvbnQtc2l6ZTogMC4yNWVtO1xufVxuXG4uYm9keSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXg6IDE7XG4gIG1pbi1oZWlnaHQ6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5ib2R5IC5ncm91cCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbn1cblxuLnRpbWUtYmxvY2tzIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNmVtO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjY2NjO1xuICBoZWlnaHQ6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4udGltZS1ibG9ja3MgLmJsb2NrOmZpcnN0LWNoaWxkIHtcbiAgb3BhY2l0eTogMDtcbn1cbi50aW1lLWJsb2NrcyA+IC50ZXh0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5mbGV4IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDVlbTtcbn1cblxuLmNvbnRlbnQge1xuICBvdmVyZmxvdzogYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGltZS1saW5lcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLnRpbWUtbGluZXMgLmJsb2NrIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cbi50aW1lLWxpbmVzIC5saW5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uYmxvY2sge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDNyZW07XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG59XG5cbi5ob3VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XG59XG4uaG91ci5hY3RpdmUge1xuICBjb2xvcjogIzE5MzdlYTtcbn1cblxuLnNwYWNlLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDE1cmVtO1xuICBwYWRkaW5nOiAwLjI1ZW0gMWVtO1xufVxuLnNwYWNlLWhlYWRlciAuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLnNwYWNlLWhlYWRlciAuY2FwYWNpdHkge1xuICBmb250LXNpemU6IDAuN2VtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3BhY2UtaGVhZGVyIC50ZXh0IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5zcGFjZS1kYXkge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3BhY2Uge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1pbi1oZWlnaHQ6IDUwdmg7XG4gIG1pbi13aWR0aDogMTVyZW07XG4gIG1heC13aWR0aDogMTVyZW07XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuXG4ubm93LWxpbmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDZlbTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogMDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzE5MzdlYTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIHotaW5kZXg6IDEwMTtcbn1cbi5ub3ctbGluZSAua25vYiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAtMXB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE5MzdlYTtcbn1cblxuLnNpZGViYXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICB6LWluZGV4OiAxMDI7XG4gIHdpZHRoOiAwO1xuICB0cmFuc2l0aW9uOiB3aWR0aCAyMDBtcztcbn1cbi5zaWRlYmFyLnNob3cge1xuICB3aWR0aDogMjRlbTtcbn1cbi5zaWRlYmFyICoge1xuICBib3JkZXI6IG5vbmU7XG59XG4uc2lkZWJhciAuc3BhY2UtaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5hdXRvLXNjcm9sbCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAzZW07XG4gIGxlZnQ6IDZlbTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xuICAuYXV0by1zY3JvbGwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuYXV0by1zY3JvbGwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi5hdXRvLXNjcm9sbCA+ICoge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbn1cbi5hdXRvLXNjcm9sbCAudG9wLFxuLmF1dG8tc2Nyb2xsIC5ib3R0b20ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDMycHg7XG59XG4uYXV0by1zY3JvbGwgLnRvcCB7XG4gIHRvcDogMDtcbn1cbi5hdXRvLXNjcm9sbCAuYm90dG9tIHtcbiAgYm90dG9tOiAwO1xufVxuLmF1dG8tc2Nyb2xsIC5sZWZ0LFxuLmF1dG8tc2Nyb2xsIC5yaWdodCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAzMnB4O1xufVxuLmF1dG8tc2Nyb2xsIC5sZWZ0IHtcbiAgdG9wOiAwO1xufVxuLmF1dG8tc2Nyb2xsIC5yaWdodCB7XG4gIGJvdHRvbTogMDtcbn1cblxuLnRhZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMXB4O1xuICB0b3A6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiAyLjVlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMCUsIC01MCUpO1xuICBib3JkZXItcmFkaXVzOiAxLjNlbSAwIDAgMS4zZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2MgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lICFpbXBvcnRhbnQ7XG59XG4udGFnIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMS4yNWVtO1xuICB3aWR0aDogMS4yNWVtO1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwIDAuMWVtO1xufVxuXG4ubG9hZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDRweDtcbiAgei1pbmRleDogOTk5O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DayViewTimelineComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'day-view-timeline',
                templateUrl: './timeline.component.html',
                styleUrls: ['./timeline.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }]; }, { date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], level: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], space_type: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], legend: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], overflow_only: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], loading: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], scroll_area: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scroll_area', { static: true }]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=shell-day-view-day-view-module-es2015.js.map