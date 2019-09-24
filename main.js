(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ngx-ratio-bar/src/lib/ngx-ratio-bar.component.css":
/*!************************************************************!*\
  !*** ../ngx-ratio-bar/src/lib/ngx-ratio-bar.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n}\n\n.base {\n  position: relative;\n  white-space: nowrap;\n  overflow: hidden;\n  transition: background-color 0.5s;\n}\n\n.ratio {\n  display: inline-block;\n  max-width: 100%;\n  text-align: right;\n  z-index: 1;\n  position: relative;\n  overflow: hidden;\n  vertical-align: top;\n  transition: width 0.5s, background-color 0.5s;\n}\n\n.text, .contrast-text {\n  margin-right: 0.25em;\n  margin-left: 0.25em;\n}\n\n.contrast-text {\n  position: absolute;\n  left: 0;\n}\n\n.footer {\n  text-align: right;\n  padding-right: 0.25em;\n  padding-left: 0.25em;\n}\n\n.end-label {\n  display: inline-block;\n  text-align: right;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1yYXRpby1iYXIvc3JjL2xpYi9uZ3gtcmF0aW8tYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0NBQ2hCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFLakIsa0NBQWtDO0NBQ25DOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBS3BCLDhDQUE4QztDQUMvQzs7QUFFRDtFQUNFLHFCQUFxQjtFQUNyQixvQkFBb0I7Q0FDckI7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsUUFBUTtDQUNUOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixxQkFBcUI7Q0FDdEI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0NBQ25CIiwiZmlsZSI6InByb2plY3RzL25neC1yYXRpby1iYXIvc3JjL2xpYi9uZ3gtcmF0aW8tYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uYmFzZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjVzO1xufVxuXG4ucmF0aW8ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcblxuICAtd2Via2l0LXRyYW5zaXRpb246IHdpZHRoIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgLW1vei10cmFuc2l0aW9uOiB3aWR0aCAwLjVzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuNXM7XG4gIC1vLXRyYW5zaXRpb246IHdpZHRoIDAuNXMsIGJhY2tncm91bmQtY29sb3IgMC41cztcbiAgdHJhbnNpdGlvbjogd2lkdGggMC41cywgYmFja2dyb3VuZC1jb2xvciAwLjVzO1xufVxuXG4udGV4dCwgLmNvbnRyYXN0LXRleHQge1xuICBtYXJnaW4tcmlnaHQ6IDAuMjVlbTtcbiAgbWFyZ2luLWxlZnQ6IDAuMjVlbTtcbn1cblxuLmNvbnRyYXN0LXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG59XG5cbi5mb290ZXIge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMC4yNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDAuMjVlbTtcbn1cblxuLmVuZC1sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "../ngx-ratio-bar/src/lib/ngx-ratio-bar.component.ts":
/*!***********************************************************!*\
  !*** ../ngx-ratio-bar/src/lib/ngx-ratio-bar.component.ts ***!
  \***********************************************************/
/*! exports provided: NgxRatioBarComponent, isEmptyString, isValidNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxRatioBarComponent", function() { return NgxRatioBarComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEmptyString", function() { return isEmptyString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidNumber", function() { return isValidNumber; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var DEFAULT_PRIMARY_COLOR = 'darkgreen';
var DEFAULT_CONTRAST_COLOR = 'lightgreen';
var DEFAULT_DECIMAL_PLACES = 0;
var NgxRatioBarComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function NgxRatioBarComponent() {
        /**
         * The color of the bar container.
         */
        this.baseBackgroundColor = DEFAULT_PRIMARY_COLOR;
        /**
         * The color of text displayed within the bar.
         */
        this.ratioTextColor = DEFAULT_PRIMARY_COLOR;
        /**
         * The color of the bar itself.
         *
         * This should contrast with {@link baseBackgroundColor} to improve
         * visual accessibility.
         */
        this.ratioBackgroundColor = DEFAULT_CONTRAST_COLOR;
        /**
         * The unit interval -- a number between 0.0 and 1.0 -- that represents the size
         * of the bar in comparison to its base.
         */
        this.value = 0;
        /**
         * The ratio label that will actually be displayed in the view.
         */
        this.ratioDisplayLabel = '0%';
    }
    /**
     * ngOnInit
     */
    NgxRatioBarComponent.prototype.ngOnInit = function () {
        if (isEmptyString(this.baseBackgroundColor)) {
            this.baseBackgroundColor = DEFAULT_PRIMARY_COLOR;
        }
        if (isEmptyString(this.ratioTextColor)) {
            this.ratioTextColor = DEFAULT_PRIMARY_COLOR;
        }
        if (isEmptyString(this.ratioBackgroundColor)) {
            this.ratioBackgroundColor = DEFAULT_CONTRAST_COLOR;
        }
    };
    /**
     * ngOnChanges
     * @param changes SimpleChanges
     */
    NgxRatioBarComponent.prototype.ngOnChanges = function (changes) {
        this.updateValues();
    };
    /**
     * Update UI state according to input values.
     */
    NgxRatioBarComponent.prototype.updateValues = function () {
        this.validateValues();
        if (typeof this.ratioLabel === 'string') {
            this.ratioDisplayLabel = this.ratioLabel;
        }
        else {
            this.ratioDisplayLabel = (this.value * 100).toFixed(DEFAULT_DECIMAL_PLACES) + '%';
        }
    };
    /**
     * Validate input properties and reset them to default values if they
     * do not comply with requirements.
     */
    NgxRatioBarComponent.prototype.validateValues = function () {
        if (!isValidNumber(this.value) || this.value < 0) {
            this.value = 0;
        }
        else if (this.value > 1) {
            this.value = 1;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxRatioBarComponent.prototype, "baseBackgroundColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxRatioBarComponent.prototype, "ratioTextColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxRatioBarComponent.prototype, "ratioBackgroundColor", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxRatioBarComponent.prototype, "ratioLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], NgxRatioBarComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], NgxRatioBarComponent.prototype, "endLabel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], NgxRatioBarComponent.prototype, "showBorder", void 0);
    NgxRatioBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngx-ratio-bar',
            template: "\n    <div class=\"base\"\n         [style.color]=\"ratioBackgroundColor\"\n         [style.backgroundColor]=\"baseBackgroundColor\"\n         [style.border]=\"showBorder === true ? '1px solid ' + ratioBackgroundColor : ''\">\n      <span class=\"ratio\"\n            [style.color]=\"ratioTextColor\"\n            [style.backgroundColor]=\"ratioBackgroundColor\"\n            [style.width]=\"(value * 100) + '%'\">\n        <span class=\"text\">{{ratioDisplayLabel}}</span>\n      </span>\n      <span class=\"contrast-text\">{{ratioDisplayLabel}}</span>\n    </div>\n    <div *ngIf=\"endLabel\"\n         class=\"footer\"\n         [style.borderRight]=\"'1px solid ' + (showBorder === true ? ratioBackgroundColor : baseBackgroundColor)\">\n      <span class=\"end-label\">{{endLabel}}</span>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./ngx-ratio-bar.component.css */ "../ngx-ratio-bar/src/lib/ngx-ratio-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NgxRatioBarComponent);
    return NgxRatioBarComponent;
}());

/**
 * Check whether the provided parameter is an empty string.
 * @param subject The value to test
 * @return `true` if the parameter is a non-empty string; otherwise return `false`.
 */
var isEmptyString = function (subject) {
    return !(typeof subject === 'string' && subject.length > 0);
};
/**
 * Check whether the provided parameter is a number.
 * @param subject The value to test
 * @return `true` if the parameter is a number; otherwise return `false`.
 */
var isValidNumber = function (subject) {
    return typeof subject === 'number' && !isNaN(subject) && isFinite(subject);
};


/***/ }),

/***/ "../ngx-ratio-bar/src/lib/ngx-ratio-bar.module.ts":
/*!********************************************************!*\
  !*** ../ngx-ratio-bar/src/lib/ngx-ratio-bar.module.ts ***!
  \********************************************************/
/*! exports provided: NgxRatioBarModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxRatioBarModule", function() { return NgxRatioBarModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngx_ratio_bar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ngx-ratio-bar.component */ "../ngx-ratio-bar/src/lib/ngx-ratio-bar.component.ts");




var NgxRatioBarModule = /** @class */ (function () {
    function NgxRatioBarModule() {
    }
    NgxRatioBarModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_ngx_ratio_bar_component__WEBPACK_IMPORTED_MODULE_3__["NgxRatioBarComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ],
            exports: [_ngx_ratio_bar_component__WEBPACK_IMPORTED_MODULE_3__["NgxRatioBarComponent"]]
        })
    ], NgxRatioBarModule);
    return NgxRatioBarModule;
}());



/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "button {\n  margin: 10px;\n  border: none;\n  color: white;\n  padding: 15px 32px;\n  text-align: center;\n  text-decoration: none;\n  display: inline-block;\n  font-size: 16px;\n}\n\nbutton.success {\n  background: green;\n}\n\nbutton.danger {\n  background: red;\n}\n\nbutton.info {\n  background: dodgerblue;\n}\n\nbutton.warning {\n  background: darkorange;\n}\n\n.header-bg {\n  width: 100%;\n  background: url('stairs-bg.jpg');\n  background-size: cover;\n  background-position: center;\n  color: #fefefe;\n}\n\n.darken {\n  background-color: #00000066;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL25neC1yYXRpby1iYXItc2hvd2Nhc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtFQUN0QixnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSxrQkFBa0I7Q0FDbkI7O0FBRUQ7RUFDRSxnQkFBZ0I7Q0FDakI7O0FBRUQ7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSx1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxZQUFZO0VBQ1osaUNBQTJDO0VBQzNDLHVCQUF1QjtFQUN2Qiw0QkFBNEI7RUFDNUIsZUFBZTtDQUNoQjs7QUFFRDtFQUNFLDRCQUE0QjtDQUM3QiIsImZpbGUiOiJwcm9qZWN0cy9uZ3gtcmF0aW8tYmFyLXNob3djYXNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24ge1xuICBtYXJnaW46IDEwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuYnV0dG9uLnN1Y2Nlc3Mge1xuICBiYWNrZ3JvdW5kOiBncmVlbjtcbn1cblxuYnV0dG9uLmRhbmdlciB7XG4gIGJhY2tncm91bmQ6IHJlZDtcbn1cblxuYnV0dG9uLmluZm8ge1xuICBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xufVxuXG5idXR0b24ud2FybmluZyB7XG4gIGJhY2tncm91bmQ6IGRhcmtvcmFuZ2U7XG59XG5cbi5oZWFkZXItYmcge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZDogdXJsKCcuLi9hc3NldHMvc3RhaXJzLWJnLmpwZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmVmZWZlO1xufVxuXG4uZGFya2VuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDY2O1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card header-bg d-flex justify-content-center mt-3 mb-3\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"p-4 darken\">\n          <h2 class=\"mb-4\">NGX Ratio Bar</h2>\n          <p class=\"\">An Angular component that displays a unit interval value as a percentage.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-6\">\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n          <span class=\"text-muted\">Installation</span>\n        </h4>\n        <div class=\"list-group mb-3\">\n          <pre><code [highlight]=\"'$ npm install ngx-ratio-bar'\"></code></pre>\n        </div>\n\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n          <span class=\"text-muted\">Features</span>\n        </h4>\n\n        <ul>\n          <li>Show a custom label on the bar instead of the percentage value.</li>\n          <li>Choose to display a label at the end of the bar's footer.</li>\n          <li>An optional border can be added around the bar.</li>\n          <li>Bar foreground and background colors are customizable using property binding.</li>\n        </ul>\n\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n          <span class=\"text-muted\">Usage</span>\n        </h4>\n\n        <p>Import NgxRatioBarModule in the root module.</p>\n        <pre><code [highlight]=\"cbUsageDeclaration\"></code></pre>\n\n        <p>Then use it in your templates as follows:</p>\n        <pre><code [highlight]=\"cbUsageInTemplates1\"></code></pre>\n\n        <h5>Labels</h5>\n        <p>To override the displayed percentage value with a custom label, simply set the <code>ratio</code> to any string value.</p>\n        <pre><code [highlight]=\"cbUsageInTemplates2\"></code></pre>\n\n        <p>In addition, you can set the <code>endLabel</code> property, if you wish to display a label at the bottom-end of the bar.</p>\n        <pre><code [highlight]=\"cbUsageInTemplates3\"></code></pre>\n\n        <h5>Look & Feel</h5>\n        <p>You can customize the look and feel of the bar by setting the following properties:</p>\n        <pre><code [highlight]=\"cbUsageInTemplates4\"></code></pre>\n      </div>\n\n      <div class=\"col-md-6 pt-3 well\">\n        <div class=\"card mb-3\" style=\"background-color: #fdf8f0\">\n          <div class=\"card-header\">\n            <span>Demo</span>\n          </div>\n          <div class=\"card-body\">\n            <div class=\"row mb-4\">\n              <div class=\"col\">\n                <ngx-ratio-bar [value]=\"ratioValue\"\n                               [ratioLabel]=\"ratioLabel || null\"\n                               [endLabel]=\"endLabel\"\n                               [baseBackgroundColor]=\"baseBackgroundColor\"\n                               [ratioBackgroundColor]=\"ratioBackgroundColor\"\n                               [ratioTextColor]=\"ratioTextColor\"\n                               [showBorder]=\"showBorder\">\n                </ngx-ratio-bar>\n              </div>\n            </div>\n\n            <form novalidate=\"novalidate\">\n              <div class=\"row\">\n                <div class=\"col-md-10\">\n                  <label for=\"ratio\">Value</label>\n                  <input id=\"ratio\" type=\"range\" min=\"0.0\" max=\"1.0\" [value]=\"ratioValue\" step=\"0.01\" class=\"custom-range\" (change)=\"ratioValue = $event.target.valueAsNumber\">\n                </div>\n                <div class=\"col-md-2 d-flex flex-column align-items-end mt-auto pl-0\">\n                  <h6>\n                    <span class=\"badge badge-secondary badge-pill\">{{ ratioValue }}</span>\n                  </h6>\n                </div>\n              </div>\n\n              <hr>\n\n              <div class=\"row\">\n                <div class=\"col-md-6 mb-3\">\n                  <label for=\"ratio-label\">Ratio Label</label>\n                  <input id=\"ratio-label\" type=\"text\" [value]=\"ratioLabel\" class=\"form-control\" (keyup)=\"ratioLabel = $event.target.value\">\n                </div>\n                <div class=\"col-md-6 mb-3\">\n                  <label for=\"footer-end-label\">Footer Label</label>\n                  <input id=\"footer-end-label\" type=\"text\" [value]=\"endLabel\" class=\"form-control\" (keyup)=\"endLabel = $event.target.value\">\n                </div>\n              </div>\n\n              <hr>\n\n              <div class=\"row\">\n                <div class=\"col-md-6 mb-3\">\n                  <label for=\"bar-background-color\">Bar Background Color</label>\n                  <input id=\"bar-background-color\" type=\"text\" [value]=\"ratioBackgroundColor\" class=\"form-control\" [(colorPicker)]=\"ratioBackgroundColor\">\n                </div>\n                <div class=\"col-md-6 mb-3\">\n                  <label for=\"ratio-base-background-color\">Base Background Color</label>\n                  <input id=\"ratio-base-background-color\" type=\"text\" [value]=\"baseBackgroundColor\" class=\"form-control\" [(colorPicker)]=\"baseBackgroundColor\">\n                </div>\n              </div>\n\n              <div class=\"row\">\n                <div class=\"col-md-6 mb-3\">\n                  <label for=\"ratio-text-color\">Bar Text Color</label>\n                  <input id=\"ratio-text-color\" type=\"text\" [value]=\"ratioTextColor\" class=\"form-control\" [(colorPicker)]=\"ratioTextColor\">\n                </div>\n                <div class=\"col-md-6 mt-auto mb-auto\">\n                  <div class=\"form-check form-check-inline\">\n                    <input id=\"show-border\" type=\"checkbox\" [checked]=\"showBorder\" class=\"form-check-input\" (change)=\"showBorder = $event.target.checked\">\n                    <label for=\"show-border\" class=\"form-check-label\">Show Border</label>\n                  </div>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n\n        <h4 class=\"d-flex justify-content-between align-items-center mb-3\">\n          <span class=\"text-muted\">Source and Contribution</span>\n        </h4>\n\n        <p>The source code of <code>ngx-ratio-bar</code> is available on <a href=\"https://www.github.com/baddlan/ngx-ratio-bar\">GitHub</a>.\n        Please report bugs and feature requests on the <a href=\"https://www.github.com/baddlan/ngx-ratio-bar/issues\">GitHub issue tracker</a>.</p>\n\n        <h5>Authors or Acknowledgments</h5>\n        <ul>\n          <li>Bushra Addlan (<a href=\"https://www.github.com/baddlan\">@baddlan</a>)</li>\n          <li>Photo by Cristina Gottardi (<a href=\"https://unsplash.com/@cristina_gottardi\">@cristina_gottardi</a>)</li>\n        </ul>\n\n        <h5>License</h5>\n        <p>This is an open-source project that is licensed under the <a href=\"https://raw.githubusercontent.com/baddlan/ngx-ratio-bar/master/projects/ngx-ratio-bar/LICENSE\">MIT License</a>.</p>\n      </div>\n    </div>\n\n  <footer class=\"small my-3 text-muted text-center text-small\">\n    <p class=\"mb-1\">AppsOven © 2019</p>\n  </footer>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    /**
     * Constructor
     */
    function AppComponent() {
        this.ratioValue = 0.17;
        this.ratioLabel = '';
        this.endLabel = 'Quota (1.0 GB)';
        this.baseBackgroundColor = '#fbe6be';
        this.ratioBackgroundColor = '#d08906';
        this.ratioTextColor = 'white';
        this.showBorder = true;
        // // // Code blocks
        this.cbUsageDeclaration = unindent("\n  import { NgxRatioBarModule } from 'ngx-ratio-bar';\n  ...\n  @NgModule({\n    declarations: [AppComponent],\n    imports: [\n      ...\n      NgxRatioBarModule,\n      ...\n    ],\n    providers: [],\n    bootstrap: [AppComponent]\n  })\n  export class AppModule {}\n  ");
        this.cbUsageInTemplates1 = unindent("\n  <ngx-ratio-bar [value]=\"0.67\"></ngx-ratio-bar>\n  ");
        this.cbUsageInTemplates2 = unindent("\n  <ngx-ratio-bar [ratioLabel]=\"'My Custom Label'\"></ngx-ratio-bar>\n  ");
        this.cbUsageInTemplates3 = unindent("\n  <ngx-ratio-bar [endLabel]=\"'\u00C0 la fin'\"></ngx-ratio-bar>\n  ");
        this.cbUsageInTemplates4 = unindent("\n  <ngx-ratio-bar [baseBackgroundColor]=\"'blue'\"\n                 [ratioBackgroundColor]=\"'#ddccff'\"\n                 [ratioTextColor]=\"'white'\"\n                 [showBorder]=\"false\">\n  </ngx-ratio-bar>\n  ");
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());

/**
 * Un-indent a string {@param str} by a given number of leading {@param spaces}.
 * @param str String to be un-indented.
 * @param spaces Number of leading spaces to omit.
 * @return The un-indented string.
 */
var unindent = function (str, spaces) {
    if (spaces === void 0) { spaces = 2; }
    var regex = new RegExp('\\n\\s{' + spaces + '}', 'g');
    return str.replace(regex, '\n').trim();
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: hljsLanguages, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hljsLanguages", function() { return hljsLanguages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ngx_ratio_bar_src_lib_ngx_ratio_bar_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ngx-ratio-bar/src/lib/ngx-ratio-bar.module */ "../ngx-ratio-bar/src/lib/ngx-ratio-bar.module.ts");
/* harmony import */ var ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-color-picker */ "../../node_modules/ngx-color-picker/dist/ngx-color-picker.es5.js");
/* harmony import */ var ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-highlightjs */ "../../node_modules/ngx-highlightjs/fesm5/ngx-highlightjs.js");
/* harmony import */ var highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! highlight.js/lib/languages/bash */ "../../node_modules/highlight.js/lib/languages/bash.js");
/* harmony import */ var highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! highlight.js/lib/languages/xml */ "../../node_modules/highlight.js/lib/languages/xml.js");
/* harmony import */ var highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! highlight.js/lib/languages/scss */ "../../node_modules/highlight.js/lib/languages/scss.js");
/* harmony import */ var highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "../../node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_10__);











/**
 * Import every language you wish to highlight here
 * NOTE: The name of each language must match the file name its imported from
 */
function hljsLanguages() {
    return [
        { name: 'bash', func: highlight_js_lib_languages_bash__WEBPACK_IMPORTED_MODULE_7___default.a },
        { name: 'xml', func: highlight_js_lib_languages_xml__WEBPACK_IMPORTED_MODULE_8___default.a },
        { name: 'scss', func: highlight_js_lib_languages_scss__WEBPACK_IMPORTED_MODULE_9___default.a },
        { name: 'typescript', func: highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_10___default.a },
    ];
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _ngx_ratio_bar_src_lib_ngx_ratio_bar_module__WEBPACK_IMPORTED_MODULE_4__["NgxRatioBarModule"],
                ngx_color_picker__WEBPACK_IMPORTED_MODULE_5__["ColorPickerModule"],
                ngx_highlightjs__WEBPACK_IMPORTED_MODULE_6__["HighlightModule"].forRoot({
                    languages: hljsLanguages
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/baddlan/Projects/appsoven/lab/npm/ngx-ratio-bar/projects/ngx-ratio-bar-showcase/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map