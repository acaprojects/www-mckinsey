(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-new-schedule-schedule-module"],{

/***/ "./src/app/shell/new-schedule/event-list/event-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shell/new-schedule/event-list/event-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <cdk-virtual-scroll-viewport itemSize=\"64\" (scrolledIndexChange)=\"atBottom()\">\n        <div class=\"content\">\n            <ng-container *cdkVirtualFor=\"let item of items | async\">\n                <div #list_item [class]=\"'item ' + item.type\" [title]=\"item?.custom_name || item?.name || item\"\n                    [ngSwitch]=\"item.type\" (touchrelease)=\"view(item)\">\n                    <ng-container *ngSwitchCase=\"'date'\">\n                        <div class=\"dot today\" *ngIf=\"item.today\"></div>{{item.title}}\n                    </ng-container>\n                    <ng-container *ngSwitchCase=\"'no-items'\">\n                        {{item.title}}\n                    </ng-container>\n                    <ng-container *ngSwitchCase=\"'event'\">\n                        <div class=\"period\">\n                            <div class=\"text\">{{item.display?.start}}</div>\n                            <div class=\"info\">{{item.display?.short_duration}}</div>\n                        </div>\n                        <div class=\"icon\">\n                            <img *ngIf=\"item.attendees && item.attendees.length > 0\" src=\"assets/img/book_room.svg\">\n                            <div class=\"dot\" *ngIf=\"!item.attendees || item.attendees.length <= 0\"></div>\n                        </div>\n                        <div class=\"details\">\n                            <div class=\"text\">{{item.title}}</div>\n                            <div class=\"location\" *ngIf=\"item.room\">\n                                <div class=\"icon\"><img src=\"assets/img/date_pin.svg\"></div>\n                                <div class=\"text\">{{item.room?.name}}</div>\n                            </div>\n                        </div>\n                    </ng-container>\n                </div>\n            </ng-container>\n        </div>\n    </cdk-virtual-scroll-viewport>\n    <div class=\"loader\" *ngIf=\"model.loading\">\n        <spinner type=\"circle-ring\" color=\"#d31145\"></spinner>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/new-schedule/event-list/event-list.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shell/new-schedule/event-list/event-list.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n* @Author: Alex Sorafumo\n* @Date:   2017-05-16 14:15:51\n * @Last Modified by: Alex Sorafumo\n * @Last Modified time: 2018-06-18 21:21:04\n*/\n/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ecf1f5;\n  z-index: 0; }\n.topbar {\n  width: 100%;\n  min-height: 3em;\n  background-color: #B8123E;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 .5em 0 1em; }\n.topbar > * {\n    font-size: 1.2em; }\n.spacer {\n  -webkit-box-flex: 1;\n          flex: 1; }\n.content {\n  height: 100%;\n  max-width: 768px;\n  width: 100%;\n  margin: auto; }\ncdk-virtual-scroll-viewport {\n  min-height: 100%;\n  width: 100%; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.5em;\n  width: 1.5em; }\n.icon img {\n    height: 1em; }\n.item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  height: 64px;\n  padding: .5rem 1rem;\n  font-size: 1.2em;\n  font-weight: 300;\n  border-bottom: 1px solid #ccc; }\n.item.date {\n    font-size: 1.5em;\n    text-transform: uppercase;\n    color: #596C80; }\n.item.event, .item.no-items {\n    background-color: #fff;\n    color: rgba(0, 0, 0, 0.87); }\n.item .info {\n    color: rgba(0, 0, 0, 0.54); }\n.item .details {\n    padding: .25em; }\n.item .period {\n    width: 3em; }\n.item .location {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    font-size: .9em; }\n.item .location .icon {\n      -webkit-box-pack: start;\n              justify-content: flex-start;\n      width: 1.2em; }\n.item > .icon {\n    font-size: 2em; }\n.dot {\n  height: 12px;\n  width: 12px;\n  min-width: 12px;\n  border-radius: 100%;\n  background-color: #4285F4; }\n.dot.today {\n    margin-right: .3em;\n    background-color: #596C80; }\n.loader {\n  position: absolute;\n  bottom: 1em;\n  right: 1em;\n  font-size: .75em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hlbGwvbmV3LXNjaGVkdWxlL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvbmV3LXNjaGVkdWxlL2V2ZW50LWxpc3QvZXZlbnQtbGlzdC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Q0NLQztBQ0xEOztpQ0RRaUM7QUN5QmpDOzt1QkR0QnVCO0FDbUN2Qjs7c0JEaENzQjtBREh0QjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QseUJFUGdCO0VGUWhCLFVBQVUsRUFBQTtBQUdkO0VBQ0ksV0FBVztFQUNYLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsV0FBVztFQUNYLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIscUJBQXFCLEVBQUE7QUFQekI7SUFTUSxnQkFBZ0IsRUFBQTtBQUl4QjtFQUNJLG1CQUFPO1VBQVAsT0FBTyxFQUFBO0FBR1g7RUFDSSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZLEVBQUE7QUFHaEI7RUFDSSxnQkFBZ0I7RUFDaEIsV0FBVyxFQUFBO0FBR2Y7RUFDSSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHdCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLFlBQVksRUFBQTtBQUxoQjtJQU9RLFdBQVcsRUFBQTtBQUluQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLDZCQUE2QixFQUFBO0FBUGpDO0lBVVEsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixjQUFjLEVBQUE7QUFadEI7SUFpQlEsc0JBQXNCO0lBQ3RCLDBCQUFnQixFQUFBO0FBbEJ4QjtJQXNCUSwwQkFBZ0IsRUFBQTtBQXRCeEI7SUEwQlEsY0FBYyxFQUFBO0FBMUJ0QjtJQThCUSxVQUFVLEVBQUE7QUE5QmxCO0lBa0NRLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsZUFBZSxFQUFBO0FBcEN2QjtNQXVDWSx1QkFBMkI7Y0FBM0IsMkJBQTJCO01BQzNCLFlBQVksRUFBQTtBQXhDeEI7SUE2Q1EsY0FBYyxFQUFBO0FBSXRCO0VBQ0ksWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLHlCRTdGbUIsRUFBQTtBRndGdkI7SUFPUSxrQkFBa0I7SUFDbEIseUJBQXlCLEVBQUE7QUFLakM7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL25ldy1zY2hlZHVsZS9ldmVudC1saXN0L2V2ZW50LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuKiBAQXV0aG9yOiBBbGV4IFNvcmFmdW1vXG4qIEBEYXRlOiAgIDIwMTctMDUtMTYgMTQ6MTU6NTFcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBBbGV4IFNvcmFmdW1vXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTA2LTE4IDIxOjIxOjA0XG4qL1xuXG5AaW1wb3J0ICdzaGFyZWQuc3R5bGVzJztcblxuJHRvcDogM2VtO1xuXG4uY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi50b3BiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjgxMjNFO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIC41ZW0gMCAxZW07XG4gICAgJiA+ICoge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMTtcbn1cblxuLmNvbnRlbnQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuY2RrLXZpcnR1YWwtc2Nyb2xsLXZpZXdwb3J0IHtcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uaWNvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgd2lkdGg6IDEuNWVtO1xuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgIH1cbn1cblxuLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7XG5cbiAgICAmLmRhdGUge1xuICAgICAgICBmb250LXNpemU6IDEuNWVtO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogIzU5NkM4MDtcbiAgICB9XG5cbiAgICAmLmV2ZW50LFxuICAgICYubm8taXRlbXMge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBjb2xvcjogcmdiYSgjMDAwLCAuODcpO1xuICAgIH1cblxuICAgIC5pbmZvIHtcbiAgICAgICAgY29sb3I6IHJnYmEoIzAwMCwgLjU0KTtcbiAgICB9XG5cbiAgICAuZGV0YWlscyB7XG4gICAgICAgIHBhZGRpbmc6IC4yNWVtO1xuICAgIH1cblxuICAgIC5wZXJpb2Qge1xuICAgICAgICB3aWR0aDogM2VtO1xuICAgIH1cblxuICAgIC5sb2NhdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogLjllbTtcblxuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICB3aWR0aDogMS4yZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmID4gLmljb24ge1xuICAgICAgICBmb250LXNpemU6IDJlbTtcbiAgICB9XG59XG5cbi5kb3Qge1xuICAgIGhlaWdodDogMTJweDtcbiAgICB3aWR0aDogMTJweDtcbiAgICBtaW4td2lkdGg6IDEycHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAmLnRvZGF5IHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuM2VtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk2QzgwO1xuICAgIH1cbn1cblxuXG4ubG9hZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxZW07XG4gICAgcmlnaHQ6IDFlbTtcbiAgICBmb250LXNpemU6IC43NWVtO1xufVxuIiwiLypcbiogQEF1dGhvcjogQWxleCBTb3JhZnVtb1xuKiBARGF0ZTogICAyMDE3LTA1LTE2IDE0OjE1OjUxXG4gKiBATGFzdCBNb2RpZmllZCBieTogQWxleCBTb3JhZnVtb1xuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOC0wNi0xOCAyMToyMTowNFxuKi9cbi8qPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCBTaGFyZWQgR2xvYmFsIFNBU1MgVmFyaWFibGVzIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjFmNTtcbiAgei1pbmRleDogMDsgfVxuXG4udG9wYmFyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDNlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0I4MTIzRTtcbiAgY29sb3I6ICNmZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAgLjVlbSAwIDFlbTsgfVxuICAudG9wYmFyID4gKiB7XG4gICAgZm9udC1zaXplOiAxLjJlbTsgfVxuXG4uc3BhY2VyIHtcbiAgZmxleDogMTsgfVxuXG4uY29udGVudCB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWF4LXdpZHRoOiA3NjhweDtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogYXV0bzsgfVxuXG5jZGstdmlydHVhbC1zY3JvbGwtdmlld3BvcnQge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTsgfVxuXG4uaWNvbiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEuNWVtO1xuICB3aWR0aDogMS41ZW07IH1cbiAgLmljb24gaW1nIHtcbiAgICBoZWlnaHQ6IDFlbTsgfVxuXG4uaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNjRweDtcbiAgcGFkZGluZzogLjVyZW0gMXJlbTtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNjY2M7IH1cbiAgLml0ZW0uZGF0ZSB7XG4gICAgZm9udC1zaXplOiAxLjVlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGNvbG9yOiAjNTk2QzgwOyB9XG4gIC5pdGVtLmV2ZW50LCAuaXRlbS5uby1pdGVtcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuICAuaXRlbSAuaW5mbyB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7IH1cbiAgLml0ZW0gLmRldGFpbHMge1xuICAgIHBhZGRpbmc6IC4yNWVtOyB9XG4gIC5pdGVtIC5wZXJpb2Qge1xuICAgIHdpZHRoOiAzZW07IH1cbiAgLml0ZW0gLmxvY2F0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAuOWVtOyB9XG4gICAgLml0ZW0gLmxvY2F0aW9uIC5pY29uIHtcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgIHdpZHRoOiAxLjJlbTsgfVxuICAuaXRlbSA+IC5pY29uIHtcbiAgICBmb250LXNpemU6IDJlbTsgfVxuXG4uZG90IHtcbiAgaGVpZ2h0OiAxMnB4O1xuICB3aWR0aDogMTJweDtcbiAgbWluLXdpZHRoOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI4NUY0OyB9XG4gIC5kb3QudG9kYXkge1xuICAgIG1hcmdpbi1yaWdodDogLjNlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTk2QzgwOyB9XG5cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMWVtO1xuICByaWdodDogMWVtO1xuICBmb250LXNpemU6IC43NWVtOyB9XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgU2hhcmVkIEdsb2JhbCBTQVNTIFZhcmlhYmxlcyB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJHN1Y2Nlc3M6ICMzMDliNDA7XG4kc3VjY2Vzcy1hbHQ6ICM0Mjg1ZjQ7XG4kZXJyb3I6ICNkYjI5MWQ7XG4kcGVuZGluZzogI0ZGOTgwMDtcbiRuZXV0cmFsOiAjNzk3OTc5O1xuXG4kYmFja2dyb3VuZDogI2VjZjFmNTtcblxuJGhlYWRlci1oZWlnaHQ6IDRlbTtcbiRjb2xvci1wcmltYXJ5LXdpcmVmcmFtZTpyZ2JhKDAsIDAsIDAsIDAuNjEpO1xuJGhlYWRlci1iZzogI2ZmZjtcbiRoZWFkZXItY29sb3I6IHJnYmEoIzAwMjk2MCwgLjg3KTtcblxuJHRpbGUtY29sb3I6ICNmZmY7XG4kdGlsZS1ib3JkZXI6ICNmZmY7XG5cbiRoZWxwLWJvcmRlcjogcmdiYSgjMDAwLCAuMik7XG5cbiRjb2xvci1wcmltYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeTogIzQwNDg1YTtcbiRjb2xvci10ZXJuYXJ5OiAjYzc5OTYxO1xuJGNvbG9yLXF1YXRlcm5hcnk6ICM3ZGQ2ZDY7XG4kY29sb3ItcXVpbnRlcm5hcnk6ICM0YzVjNmM7XG4kY29sb3Itc2V4dGVybmFyeTogIzdmZTQzYjtcblxuJHRpbWVsaW5lLWJnOiBsaW5lYXItZ3JhZGllbnQoLTE4MGRlZywgIzRGNUY3MCAwJSwgIzBGMTIxNSAxMDAlKTtcbiR0aW1lbGluZS1ldmVudDogJGVycm9yO1xuJHRpbWVsaW5lLWJvb2tpbmc6ICRjb2xvci1xdWF0ZXJuYXJ5O1xuXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTRweDtcblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kbWFpbi1mb250OiAkZm9udC1zdGFjaztcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/shell/new-schedule/event-list/event-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shell/new-schedule/event-list/event-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: ScheduleEventListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleEventListComponent", function() { return ScheduleEventListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
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






var ScheduleEventListComponent = /** @class */ (function (_super) {
    __extends(ScheduleEventListComponent, _super);
    function ScheduleEventListComponent(service) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.model = {};
        _this.items = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        return _this;
    }
    ScheduleEventListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.days = 3;
        this.service.Bookings.listen('list', function (bkns) {
            _this.model.list = bkns;
            _this.processBookings();
        });
        this.atBottom();
    };
    ScheduleEventListComponent.prototype.processBookings = function () {
        this.model.list.sort(function (a, b) { return a.date - b.date; });
        var list = [];
        var now = moment__WEBPACK_IMPORTED_MODULE_5__();
        var date = moment__WEBPACK_IMPORTED_MODULE_5__();
        var end = moment__WEBPACK_IMPORTED_MODULE_5__().add(this.model.days, 'd');
        for (; date.isSameOrBefore(end, 'd'); date.add(1, 'd')) {
            list.push({ type: 'date', today: now.isSame(date, 'd'), title: date.format('dddd, DD MMM') });
            var length_1 = list.length;
            for (var _i = 0, _a = this.model.list; _i < _a.length; _i++) {
                var bkn = _a[_i];
                var bkn_date = moment__WEBPACK_IMPORTED_MODULE_5__(bkn.date);
                if (bkn_date.isSame(date, 'd')) {
                    list.push(__assign({}, bkn, { type: 'event' }));
                }
            }
            if (list.length === length_1) {
                list.push({ type: 'no-items', title: 'No events' });
            }
        }
        console.log('List:', list);
        this.items.next(list);
    };
    ScheduleEventListComponent.prototype.atBottom = function () {
        var _this = this;
        this.timeout('at_bottom', function () {
            if (!_this.viewport) {
                return _this.timeout('atBottom', function () { return _this.atBottom(); });
            }
            var end = _this.viewport.getRenderedRange().end;
            var total = _this.viewport.getDataLength();
            if (end === total) {
                var date = moment__WEBPACK_IMPORTED_MODULE_5__().hours(0).minutes(0).add(_this.model.days + 1, 'd');
                _this.model.days += 3;
                _this.model.loading = true;
                _this.service.Bookings.query({ from: date.unix(), to: date.add(3, 'd').unix() })
                    .then(function () {
                    _this.processBookings();
                    _this.model.loading = false;
                }, function () { return _this.model.loading = false; });
            }
        }, 100);
    };
    ScheduleEventListComponent.prototype.view = function (item) {
        if (item.id) {
            this.service.navigate(['schedule', 'event'], {
                id: item.id,
                date: item.date,
                duration: item.duration
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])(_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"]),
        __metadata("design:type", _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_1__["CdkVirtualScrollViewport"])
    ], ScheduleEventListComponent.prototype, "viewport", void 0);
    ScheduleEventListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'schedule-event-list',
            template: __webpack_require__(/*! ./event-list.component.html */ "./src/app/shell/new-schedule/event-list/event-list.component.html"),
            styles: [__webpack_require__(/*! ./event-list.component.scss */ "./src/app/shell/new-schedule/event-list/event-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_4__["AppService"]])
    ], ScheduleEventListComponent);
    return ScheduleEventListComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/new-schedule/schedule.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/shell/new-schedule/schedule.component.ts ***!
  \**********************************************************/
/*! exports provided: ScheduleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleComponent", function() { return ScheduleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/*
 * @Author: Alex Sorafumo
 * @Date:   2017-05-16 14:12:48
 * @Last Modified by: Alex Sorafumo
 * @Last Modified time: 2018-08-08 14:49:27
 */
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




var ScheduleComponent = /** @class */ (function (_super) {
    __extends(ScheduleComponent, _super);
    function ScheduleComponent(service, route) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        _this.model = {};
        return _this;
    }
    ScheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.model.dates = [];
        this.model.days = 3;
        this.init();
        this.subs.obs.params = this.route.paramMap.subscribe(function (params) {
            _this.model.page = '';
            if (params.has('page')) {
                _this.model.page = params.get('page');
            }
        });
    };
    ScheduleComponent.prototype.init = function () {
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
        this.service.Analytics.screen('Schedule');
        this.service.Analytics.page('/schedule');
    };
    ScheduleComponent.prototype.newBooking = function () {
        this.service.navigate(['book', 'space', 'main']);
    };
    ScheduleComponent.prototype.close = function () {
        this.service.navigate(['schedule']);
    };
    ScheduleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule',
            template: __webpack_require__(/*! ./schedule.template.html */ "./src/app/shell/new-schedule/schedule.template.html"),
            styles: [__webpack_require__(/*! ./schedule.styles.scss */ "./src/app/shell/new-schedule/schedule.styles.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ScheduleComponent);
    return ScheduleComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_3__["BaseComponent"]));



/***/ }),

/***/ "./src/app/shell/new-schedule/schedule.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shell/new-schedule/schedule.module.ts ***!
  \*******************************************************/
/*! exports provided: AppScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppScheduleModule", function() { return AppScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @acaprojects/ngx-widgets */ "./node_modules/@acaprojects/ngx-widgets/esm5/acaprojects-ngx-widgets.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _schedule_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./schedule.routes */ "./src/app/shell/new-schedule/schedule.routes.ts");
/* harmony import */ var _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/shared.module */ "./src/app/shared/components/shared.module.ts");
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./schedule.component */ "./src/app/shell/new-schedule/schedule.component.ts");
/* harmony import */ var _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./event-list/event-list.component */ "./src/app/shell/new-schedule/event-list/event-list.component.ts");
/* harmony import */ var _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-event/view-event.component */ "./src/app/shell/new-schedule/view-event/view-event.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var COMPONENTS = [
    _schedule_component__WEBPACK_IMPORTED_MODULE_8__["ScheduleComponent"],
    _event_list_event_list_component__WEBPACK_IMPORTED_MODULE_9__["ScheduleEventListComponent"],
    _view_event_view_event_component__WEBPACK_IMPORTED_MODULE_10__["ScheduleViewEventComponent"]
];
var AppScheduleModule = /** @class */ (function () {
    function AppScheduleModule() {
    }
    AppScheduleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: COMPONENTS.slice(),
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _acaprojects_ngx_widgets__WEBPACK_IMPORTED_MODULE_4__["WidgetsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_schedule_routes__WEBPACK_IMPORTED_MODULE_6__["ROUTES"]),
                _shared_components_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedComponentModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_3__["ScrollingModule"]
            ],
            exports: COMPONENTS.slice()
        })
    ], AppScheduleModule);
    return AppScheduleModule;
}());



/***/ }),

/***/ "./src/app/shell/new-schedule/schedule.routes.ts":
/*!*******************************************************!*\
  !*** ./src/app/shell/new-schedule/schedule.routes.ts ***!
  \*******************************************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _schedule_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./schedule.component */ "./src/app/shell/new-schedule/schedule.component.ts");

var ROUTES = [
    { path: '', component: _schedule_component__WEBPACK_IMPORTED_MODULE_0__["ScheduleComponent"] },
    { path: ':page', component: _schedule_component__WEBPACK_IMPORTED_MODULE_0__["ScheduleComponent"] },
    { path: '**', redirectTo: '' }
];


/***/ }),

/***/ "./src/app/shell/new-schedule/schedule.styles.scss":
/*!*********************************************************!*\
  !*** ./src/app/shell/new-schedule/schedule.styles.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*\n* @Author: Alex Sorafumo\n* @Date:   2017-05-16 14:15:51\n * @Last Modified by: Alex Sorafumo\n * @Last Modified time: 2018-06-18 21:21:04\n*/\n/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ecf1f5;\n  z-index: 0; }\n.topbar {\n  width: 100%;\n  min-height: 3em;\n  background-color: #B8123E;\n  color: #fff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  padding: 0 .5em 0 1em; }\n.topbar > * {\n    font-size: 1.2em; }\n.spacer {\n  -webkit-box-flex: 1;\n          flex: 1; }\n.schedule-view {\n  position: relative;\n  -webkit-box-flex: 1;\n          flex: 1;\n  height: calc(100% - 3em);\n  width: 100%; }\n.loader {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.87);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  z-index: 999; }\n.loader .text {\n    color: rgba(0, 0, 0, 0.87); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hlbGwvbmV3LXNjaGVkdWxlL3NjaGVkdWxlLnN0eWxlcy5zY3NzIiwic3JjL2FwcC9zaGVsbC9uZXctc2NoZWR1bGUvc2NoZWR1bGUuc3R5bGVzLnNjc3MiLCIvVXNlcnMvYmVuaG9hZC9Qcm9qZWN0cy9tY2stb3V0bG9vay1hZGRpbi9zcmMvYXBwL3NoYXJlZC9zaGFyZWQuc3R5bGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0NDS0M7QUNMRDs7aUNEUWlDO0FDeUJqQzs7dUJEdEJ1QjtBQ21DdkI7O3NCRGhDc0I7QURMdEI7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULHlCRUxnQjtFRk1oQixVQUFVLEVBQUE7QUFHZDtFQUNJLFdBQVc7RUFDWCxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHFCQUFxQixFQUFBO0FBUHpCO0lBU1EsZ0JBQWdCLEVBQUE7QUFJeEI7RUFDSSxtQkFBTztVQUFQLE9BQU8sRUFBQTtBQUdYO0VBQ0ksa0JBQWtCO0VBQ2xCLG1CQUFPO1VBQVAsT0FBTztFQUNQLHdCQUF3QjtFQUN4QixXQUFXLEVBQUE7QUFHZjtFQUNJLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QsMkNBQTJCO0VBQzNCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixZQUFZLEVBQUE7QUFWaEI7SUFhUSwwQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL25ldy1zY2hlZHVsZS9zY2hlZHVsZS5zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4qIEBBdXRob3I6IEFsZXggU29yYWZ1bW9cbiogQERhdGU6ICAgMjAxNy0wNS0xNiAxNDoxNTo1MVxuICogQExhc3QgTW9kaWZpZWQgYnk6IEFsZXggU29yYWZ1bW9cbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDYtMTggMjE6MjE6MDRcbiovXG5cbkBpbXBvcnQgJ3NoYXJlZC5zdHlsZXMnO1xuXG4uY29udGFpbmVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRiYWNrZ3JvdW5kO1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi50b3BiYXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1pbi1oZWlnaHQ6IDNlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjgxMjNFO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwIC41ZW0gMCAxZW07XG4gICAgJiA+ICoge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIH1cbn1cblxuLnNwYWNlciB7XG4gICAgZmxleDogMTtcbn1cblxuLnNjaGVkdWxlLXZpZXcge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiAxO1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gM2VtKTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNmZmYsIC44Nyk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHotaW5kZXg6IDk5OTtcblxuICAgIC50ZXh0IHtcbiAgICAgICAgY29sb3I6IHJnYmEoIzAwMCwgLjg3KTtcbiAgICB9XG59XG4iLCIvKlxuKiBAQXV0aG9yOiBBbGV4IFNvcmFmdW1vXG4qIEBEYXRlOiAgIDIwMTctMDUtMTYgMTQ6MTU6NTFcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBBbGV4IFNvcmFmdW1vXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTA2LTE4IDIxOjIxOjA0XG4qL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMWY1O1xuICB6LWluZGV4OiAwOyB9XG5cbi50b3BiYXIge1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogM2VtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQjgxMjNFO1xuICBjb2xvcjogI2ZmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAuNWVtIDAgMWVtOyB9XG4gIC50b3BiYXIgPiAqIHtcbiAgICBmb250LXNpemU6IDEuMmVtOyB9XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxOyB9XG5cbi5zY2hlZHVsZS12aWV3IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBmbGV4OiAxO1xuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDNlbSk7XG4gIHdpZHRoOiAxMDAlOyB9XG5cbi5sb2FkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjg3KTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5OTsgfVxuICAubG9hZGVyIC50ZXh0IHtcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTsgfVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogI2M3OTk2MTtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE0cHg7XG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJG1haW4tZm9udDogJGZvbnQtc3RhY2s7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/shell/new-schedule/schedule.template.html":
/*!***********************************************************!*\
  !*** ./src/app/shell/new-schedule/schedule.template.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [class.popout]=\"model.popout\">\n    <div class=\"topbar\">\n        <div class=\"text to-upper\" [ngSwitch]=\"model.page\">\n            <ng-container *ngSwitchCase=\"'event'\">View Event</ng-container>\n            <ng-container *ngSwitchDefault>My Day</ng-container>\n        </div>\n        <div class=\"spacer\"></div>\n        <btn format=\"mini-action\" *ngIf=\"!model.page\" (tapped)=\"newBooking()\">\n            <i class=\"material-icons\">add</i>\n        </btn>\n    </div>\n    <div class=\"schedule-view\" [ngSwitch]=\"model.page\">\n        <ng-container *ngSwitchCase=\"'event'\">\n            <schedule-view-event (loading)=\"model.loading = $event\"></schedule-view-event>\n        </ng-container>\n        <ng-container *ngSwitchDefault>\n            <schedule-event-list (loading)=\"model.loading = $event\"></schedule-event-list>\n        </ng-container>\n    </div>\n    <div class=\"loader\" *ngIf=\"model.loading\">\n        <div class=\"no-item\">\n            <div class=\"icon\">\n                <spinner type=\"circle-ring\" color=\"#000\"></spinner>\n            </div>\n            <div class=\"text\">{{model.loading === true ? 'Waiting...' : model.loading}}</div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/new-schedule/view-event/view-event.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/shell/new-schedule/view-event/view-event.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"circle\"></div>\n    <div class=\"content\" *ngIf=\"model.event\">\n        <div class=\"title\">{{model.event.title || 'No title'}}</div>\n        <div class=\"item space\">\n            <div class=\"icon\"><img src=\"assets/img/location.svg\"></div>\n            <div class=\"text\">{{model.event.room ? model.event.room.name : 'No space'}}</div>\n        </div>\n        <div class=\"details\">\n            at {{model.event.display?.start || 'Now'}} &ndash; {{model.event.display?.end || 'Future'}}<br>\n            on {{model.event.display?.date || 'Today'}}\n        </div>\n        <div class=\"description\">{{model.event.description || 'No description'}}</div>\n        <div class=\"attendees\">\n            <div class=\"header\">Attendees ({{model.event.attendees?.length || 0}}):</div>\n            <div class=\"list\">\n                <div class=\"item\" *ngFor=\"let item of (model.event.attendees || [])\">\n                    <div class=\"icon\" [class.external]=\"item.external\"><img src=\"assets/img/persona.svg\"></div>\n                    <div class=\"text\">{{item.name}} - {{item.organisation?.name || item.organisation}}</div>\n                </div>\n            </div>\n        </div>\n        <div class=\"options\">\n            <btn klass=\"full-width\" (tapped)=\"cancel()\">\n                <div class=\"text\">Back</div>\n            </btn>\n            <a [href]=\"model.link | safeurl\">\n                <btn klass=\"full-width\">\n                    <div class=\"text\">Email all</div>\n                </btn>\n            </a>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/shell/new-schedule/view-event/view-event.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/shell/new-schedule/view-event/view-event.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*==============================*\\\n|| Shared Global SASS Variables ||\n\\*==============================*/\n/*====================*\\\n||   Font Variables   ||\n\\*====================*/\n/*===================*\\\n||   Media Queries   ||\n\\*===================*/\n.container {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background-color: #D4EDF1;\n  overflow: auto;\n  padding: 2em; }\n.circle {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: 120vmin;\n  width: 120vmin;\n  border-radius: 100%;\n  background-color: rgba(255, 255, 255, 0.54);\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  pointer-events: none; }\n.content {\n  position: relative;\n  max-width: 768px;\n  width: 100%;\n  background-color: #fff;\n  padding: 1em;\n  border-radius: 4px;\n  -webkit-box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  font-size: 1.2em;\n  z-index: 1; }\n.title {\n  font-size: 1.75em;\n  border: none;\n  color: #443018;\n  width: 100%;\n  margin-bottom: .1em; }\n.item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center; }\n.item.add {\n    color: #22A8DA; }\n.item .text {\n    -webkit-box-flex: 1;\n            flex: 1;\n    width: 50%; }\n.icon {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  height: 1.25em;\n  min-width: 1.25em;\n  margin: .25em;\n  font-size: 1.5em;\n  margin-left: 0; }\n.icon.external {\n    -webkit-filter: hue-rotate(140deg);\n            filter: hue-rotate(140deg); }\n.icon img {\n    height: 1em; }\n.space .icon {\n  margin-left: 0; }\n.header {\n  font-size: 1.25em; }\n.options {\n  display: -webkit-box;\n  display: flex; }\n.options > btn {\n    font-size: 1.2em;\n    -webkit-box-flex: 1;\n            flex: 1;\n    margin: .25em; }\n.options > btn .icon {\n      margin-left: -.125em; }\n.description {\n  position: relative;\n  margin: 1em 0; }\n.placeholder {\n  position: absolute;\n  top: .5em;\n  left: .5em;\n  color: rgba(0, 0, 0, 0.54); }\n.textarea {\n  border: 1px solid #ccc;\n  padding: .5em;\n  min-height: 6.4em;\n  width: 100%;\n  background-color: #f8f8f8; }\na {\n  font-size: 1.2em;\n  -webkit-box-flex: 1;\n          flex: 1;\n  margin: .25em; }\na .icon {\n    margin-left: -.125em; }\n.ul {\n  text-decoration: underline; }\n.close {\n  color: #4285F4;\n  font-size: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hhcmVkL3NoYXJlZC5zdHlsZXMuc2NzcyIsInNyYy9hcHAvc2hlbGwvbmV3LXNjaGVkdWxlL3ZpZXctZXZlbnQvdmlldy1ldmVudC5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9iZW5ob2FkL1Byb2plY3RzL21jay1vdXRsb29rLWFkZGluL3NyYy9hcHAvc2hlbGwvbmV3LXNjaGVkdWxlL3ZpZXctZXZlbnQvdmlldy1ldmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7aUNDRWlDO0FEK0JqQzs7dUJDNUJ1QjtBRHlDdkI7O3NCQ3RDc0I7QUNMdEI7RUFDSSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsY0FBYztFQUNkLFlBQVksRUFBQTtBQUdoQjtFQUNJLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULGVBQWU7RUFDZixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDJDQUEyQjtFQUMzQix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLG9CQUFvQixFQUFBO0FBR3hCO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsdUhBQTJGO1VBQTNGLCtHQUEyRjtFQUMzRixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBO0FBR2Q7RUFDSSxpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGNBQWlDO0VBQ2pDLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTtBQUd2QjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUIsRUFBQTtBQUZ2QjtJQUlRLGNBQWMsRUFBQTtBQUp0QjtJQVFRLG1CQUFPO1lBQVAsT0FBTztJQUNQLFVBQVUsRUFBQTtBQUlsQjtFQUNJLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHlCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2QixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBO0FBUmxCO0lBV1Esa0NBQTBCO1lBQTFCLDBCQUEwQixFQUFBO0FBWGxDO0lBZVEsV0FBVyxFQUFBO0FBSW5CO0VBRVEsY0FBYyxFQUFBO0FBSXRCO0VBQ0ksaUJBQWlCLEVBQUE7QUFHckI7RUFDSSxvQkFBYTtFQUFiLGFBQWEsRUFBQTtBQURqQjtJQUdRLGdCQUFnQjtJQUNoQixtQkFBTztZQUFQLE9BQU87SUFDUCxhQUFhLEVBQUE7QUFMckI7TUFPWSxvQkFBb0IsRUFBQTtBQUtoQztFQUNJLGtCQUFrQjtFQUNsQixhQUFhLEVBQUE7QUFHakI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFVBQVU7RUFDViwwQkFBZ0IsRUFBQTtBQUdwQjtFQUNJLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCx5QkFBeUIsRUFBQTtBQUc3QjtFQUNJLGdCQUFnQjtFQUNoQixtQkFBTztVQUFQLE9BQU87RUFDUCxhQUFhLEVBQUE7QUFIakI7SUFLUSxvQkFBb0IsRUFBQTtBQUk1QjtFQUNJLDBCQUEwQixFQUFBO0FBRzlCO0VBQ0ksY0ZuSG1CO0VFb0huQixjQUFjLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9uZXctc2NoZWR1bGUvdmlldy1ldmVudC92aWV3LWV2ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRzdWNjZXNzOiAjMzA5YjQwO1xuJHN1Y2Nlc3MtYWx0OiAjNDI4NWY0O1xuJGVycm9yOiAjZGIyOTFkO1xuJHBlbmRpbmc6ICNGRjk4MDA7XG4kbmV1dHJhbDogIzc5Nzk3OTtcblxuJGJhY2tncm91bmQ6ICNlY2YxZjU7XG5cbiRoZWFkZXItaGVpZ2h0OiA0ZW07XG4kY29sb3ItcHJpbWFyeS13aXJlZnJhbWU6cmdiYSgwLCAwLCAwLCAwLjYxKTtcbiRoZWFkZXItYmc6ICNmZmY7XG4kaGVhZGVyLWNvbG9yOiByZ2JhKCMwMDI5NjAsIC44Nyk7XG5cbiR0aWxlLWNvbG9yOiAjZmZmO1xuJHRpbGUtYm9yZGVyOiAjZmZmO1xuXG4kaGVscC1ib3JkZXI6IHJnYmEoIzAwMCwgLjIpO1xuXG4kY29sb3ItcHJpbWFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnk6ICM0MDQ4NWE7XG4kY29sb3ItdGVybmFyeTogI2M3OTk2MTtcbiRjb2xvci1xdWF0ZXJuYXJ5OiAjN2RkNmQ2O1xuJGNvbG9yLXF1aW50ZXJuYXJ5OiAjNGM1YzZjO1xuJGNvbG9yLXNleHRlcm5hcnk6ICM3ZmU0M2I7XG5cbiR0aW1lbGluZS1iZzogbGluZWFyLWdyYWRpZW50KC0xODBkZWcsICM0RjVGNzAgMCUsICMwRjEyMTUgMTAwJSk7XG4kdGltZWxpbmUtZXZlbnQ6ICRlcnJvcjtcbiR0aW1lbGluZS1ib29raW5nOiAkY29sb3ItcXVhdGVybmFyeTtcblxuLyo9PT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBGb250IFZhcmlhYmxlcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PSovXG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE0cHg7XG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJG1haW4tZm9udDogJGZvbnQtc3RhY2s7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gICAgQGlmICRtZWRpYSA9PSBtb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG5vdC1tb2JpbGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9ICBAZWxzZSBpZiAkbWVkaWEgPT0gbGF0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAoJG1lZGlhID09IHRhYmxldC1tb2JpbGUgb3IgJG1lZGlhID09IG5vdC1kZXNrdG9wKSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8IFNoYXJlZCBHbG9iYWwgU0FTUyBWYXJpYWJsZXMgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIEZvbnQgVmFyaWFibGVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLmNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Q0RURGMTtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDJlbTsgfVxuXG4uY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBoZWlnaHQ6IDEyMHZtaW47XG4gIHdpZHRoOiAxMjB2bWluO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTQpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7IH1cblxuLmNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1heC13aWR0aDogNzY4cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiAxZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBmb250LXNpemU6IDEuMmVtO1xuICB6LWluZGV4OiAxOyB9XG5cbi50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMS43NWVtO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiAjNDQzMDE4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogLjFlbTsgfVxuXG4uaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cbiAgLml0ZW0uYWRkIHtcbiAgICBjb2xvcjogIzIyQThEQTsgfVxuICAuaXRlbSAudGV4dCB7XG4gICAgZmxleDogMTtcbiAgICB3aWR0aDogNTAlOyB9XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMS4yNWVtO1xuICBtaW4td2lkdGg6IDEuMjVlbTtcbiAgbWFyZ2luOiAuMjVlbTtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cbiAgLmljb24uZXh0ZXJuYWwge1xuICAgIGZpbHRlcjogaHVlLXJvdGF0ZSgxNDBkZWcpOyB9XG4gIC5pY29uIGltZyB7XG4gICAgaGVpZ2h0OiAxZW07IH1cblxuLnNwYWNlIC5pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDA7IH1cblxuLmhlYWRlciB7XG4gIGZvbnQtc2l6ZTogMS4yNWVtOyB9XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDsgfVxuICAub3B0aW9ucyA+IGJ0biB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbjogLjI1ZW07IH1cbiAgICAub3B0aW9ucyA+IGJ0biAuaWNvbiB7XG4gICAgICBtYXJnaW4tbGVmdDogLS4xMjVlbTsgfVxuXG4uZGVzY3JpcHRpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMWVtIDA7IH1cblxuLnBsYWNlaG9sZGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC41ZW07XG4gIGxlZnQ6IC41ZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpOyB9XG5cbi50ZXh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIHBhZGRpbmc6IC41ZW07XG4gIG1pbi1oZWlnaHQ6IDYuNGVtO1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODsgfVxuXG5hIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgZmxleDogMTtcbiAgbWFyZ2luOiAuMjVlbTsgfVxuICBhIC5pY29uIHtcbiAgICBtYXJnaW4tbGVmdDogLS4xMjVlbTsgfVxuXG4udWwge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgfVxuXG4uY2xvc2Uge1xuICBjb2xvcjogIzQyODVGNDtcbiAgZm9udC1zaXplOiAxZW07IH1cbiIsIlxuQGltcG9ydCAnc2hhcmVkLnN0eWxlcyc7XG5cbi5jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICBib3R0b206IDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNENEVERjE7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogMmVtO1xufVxuXG4uY2lyY2xlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIGhlaWdodDogMTIwdm1pbjtcbiAgICB3aWR0aDogMTIwdm1pbjtcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoI2ZmZiwgLjU0KTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDc2OHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMCByZ2JhKCMwMDAsLjIpLCAwIDFweCAxcHggMCByZ2JhKCMwMDAsLjE0KSwgMCAycHggMXB4IC0xcHggcmdiYSgjMDAwLC4xMik7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICB6LWluZGV4OiAxO1xufVxuXG4udGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS43NWVtO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjb2xvcjogZGFya2VuKCRjb2xvci10ZXJuYXJ5LCA0MCk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLWJvdHRvbTogLjFlbTtcbn1cblxuLml0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAmLmFkZCB7XG4gICAgICAgIGNvbG9yOiAjMjJBOERBO1xuICAgIH1cblxuICAgIC50ZXh0IHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICB9XG59XG5cbi5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxLjI1ZW07XG4gICAgbWluLXdpZHRoOiAxLjI1ZW07XG4gICAgbWFyZ2luOiAuMjVlbTtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuXG4gICAgJi5leHRlcm5hbCB7XG4gICAgICAgIGZpbHRlcjogaHVlLXJvdGF0ZSgxNDBkZWcpO1xuICAgIH1cblxuICAgIGltZyB7XG4gICAgICAgIGhlaWdodDogMWVtO1xuICAgIH1cbn1cblxuLnNwYWNlIHtcbiAgICAuaWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIH1cbn1cblxuLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAxLjI1ZW07XG59XG5cbi5vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgICYgPiBidG4ge1xuICAgICAgICBmb250LXNpemU6IDEuMmVtO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXJnaW46IC4yNWVtO1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogLS4xMjVlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiAxZW0gMDtcbn1cblxuLnBsYWNlaG9sZGVyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAuNWVtO1xuICAgIGxlZnQ6IC41ZW07XG4gICAgY29sb3I6IHJnYmEoIzAwMCwgLjU0KTtcbn1cblxuLnRleHRhcmVhIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIHBhZGRpbmc6IC41ZW07XG4gICAgbWluLWhlaWdodDogNi40ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjhmODtcbn1cblxuYSB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBmbGV4OiAxO1xuICAgIG1hcmdpbjogLjI1ZW07XG4gICAgLmljb24ge1xuICAgICAgICBtYXJnaW4tbGVmdDogLS4xMjVlbTtcbiAgICB9XG59XG5cbi51bCB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5cbi5jbG9zZSB7XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shell/new-schedule/view-event/view-event.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/shell/new-schedule/view-event/view-event.component.ts ***!
  \***********************************************************************/
/*! exports provided: ScheduleViewEventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleViewEventComponent", function() { return ScheduleViewEventComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/base.component */ "./src/app/shared/components/base.component.ts");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
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





var ScheduleViewEventComponent = /** @class */ (function (_super) {
    __extends(ScheduleViewEventComponent, _super);
    function ScheduleViewEventComponent(service, route) {
        var _this = _super.call(this) || this;
        _this.service = service;
        _this.route = route;
        _this.loading = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        _this.model = {};
        return _this;
    }
    ScheduleViewEventComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subs.obs.query = this.route.queryParamMap.subscribe(function (params) {
            if (params.has('id')) {
                if (params.has('date')) {
                    _this.model.date = params.get('date');
                }
                if (params.has('duration')) {
                    _this.model.duration = params.get('duration');
                }
                _this.model.event_id = params.get('id');
                _this.loadEvent();
            }
        });
    };
    ScheduleViewEventComponent.prototype.loadEvent = function () {
        var _this = this;
        if (!this.model.event_id) {
            return this.service.navigate('schedule');
        }
        this.loading.emit('Loading event data...');
        var start = moment__WEBPACK_IMPORTED_MODULE_4__(this.model.date || '').add(-5, 'm');
        var end = moment__WEBPACK_IMPORTED_MODULE_4__(start).add((this.model.duration || 120) + 10, 'm');
        this.service.Bookings.query({ from: start.unix(), to: end.unix() }).then(function (list) {
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var bkn = list_1[_i];
                if (bkn.id === _this.model.event_id) {
                    _this.model.event = bkn;
                    break;
                }
            }
            _this.loading.emit(false);
            if (!_this.model.event) {
                _this.service.error("Failed to load booking with ID \"" + _this.model.event_id + "\"");
                return _this.service.navigate('schedule');
            }
            _this.generateLink();
        }, function () {
            _this.loading.emit(false);
            _this.service.error("Failed to load booking with ID \"" + _this.model.event_id + "\"");
            _this.service.navigate('schedule');
        });
    };
    ScheduleViewEventComponent.prototype.cancel = function () {
        this.service.navigate(['schedule'], {});
    };
    ScheduleViewEventComponent.prototype.generateLink = function () {
        var emails = "";
        for (var _i = 0, _a = this.model.event.attendees; _i < _a.length; _i++) {
            var user = _a[_i];
            if (emails) {
                emails += ', ';
            }
            emails += user.email;
        }
        var title = encodeURIComponent(this.model.event.title);
        var body = encodeURIComponent(this.model.event.title);
        var org_email = this.model.event.organiser.email;
        this.model.link = "mailto:" + org_email + "?cc=" + emails + "&subject=Re:" + title;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ScheduleViewEventComponent.prototype, "loading", void 0);
    ScheduleViewEventComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'schedule-view-event',
            template: __webpack_require__(/*! ./view-event.component.html */ "./src/app/shell/new-schedule/view-event/view-event.component.html"),
            styles: [__webpack_require__(/*! ./view-event.component.scss */ "./src/app/shell/new-schedule/view-event/view-event.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], ScheduleViewEventComponent);
    return ScheduleViewEventComponent;
}(_shared_components_base_component__WEBPACK_IMPORTED_MODULE_1__["BaseComponent"]));



/***/ })

}]);
//# sourceMappingURL=shell-new-schedule-schedule-module.js.map