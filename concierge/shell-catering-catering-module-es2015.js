(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["shell-catering-catering-module"],{

/***/ "./node_modules/blob-util/dist/blob-util.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/blob-util/dist/blob-util.es.js ***!
  \*****************************************************/
/*! exports provided: createBlob, createObjectURL, revokeObjectURL, blobToBinaryString, base64StringToBlob, binaryStringToBlob, blobToBase64String, dataURLToBlob, blobToDataURL, imgSrcToDataURL, canvasToBlob, imgSrcToBlob, arrayBufferToBlob, blobToArrayBuffer, arrayBufferToBinaryString, binaryStringToArrayBuffer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createBlob", function() { return createBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createObjectURL", function() { return createObjectURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "revokeObjectURL", function() { return revokeObjectURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blobToBinaryString", function() { return blobToBinaryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "base64StringToBlob", function() { return base64StringToBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binaryStringToBlob", function() { return binaryStringToBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blobToBase64String", function() { return blobToBase64String; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataURLToBlob", function() { return dataURLToBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blobToDataURL", function() { return blobToDataURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgSrcToDataURL", function() { return imgSrcToDataURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canvasToBlob", function() { return canvasToBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "imgSrcToBlob", function() { return imgSrcToBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToBlob", function() { return arrayBufferToBlob; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "blobToArrayBuffer", function() { return blobToArrayBuffer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arrayBufferToBinaryString", function() { return arrayBufferToBinaryString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "binaryStringToArrayBuffer", function() { return binaryStringToArrayBuffer; });
// TODO: including these in blob-util.ts causes typedoc to generate docs for them,
// even with --excludePrivate ¯\_(ツ)_/¯
/** @private */
function loadImage(src, crossOrigin) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        if (crossOrigin) {
            img.crossOrigin = crossOrigin;
        }
        img.onload = function () {
            resolve(img);
        };
        img.onerror = reject;
        img.src = src;
    });
}
/** @private */
function imgToCanvas(img) {
    var canvas = document.createElement('canvas');
    canvas.width = img.width;
    canvas.height = img.height;
    // copy the image contents to the canvas
    var context = canvas.getContext('2d');
    context.drawImage(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
    return canvas;
}

/* global Promise, Image, Blob, FileReader, atob, btoa,
   BlobBuilder, MSBlobBuilder, MozBlobBuilder, WebKitBlobBuilder, webkitURL */
/**
 * Shim for
 * [`new Blob()`](https://developer.mozilla.org/en-US/docs/Web/API/Blob.Blob)
 * to support
 * [older browsers that use the deprecated `BlobBuilder` API](http://caniuse.com/blob).
 *
 * Example:
 *
 * ```js
 * var myBlob = blobUtil.createBlob(['hello world'], {type: 'text/plain'});
 * ```
 *
 * @param parts - content of the Blob
 * @param properties - usually `{type: myContentType}`,
 *                           you can also pass a string for the content type
 * @returns Blob
 */
function createBlob(parts, properties) {
    parts = parts || [];
    properties = properties || {};
    if (typeof properties === 'string') {
        properties = { type: properties }; // infer content type
    }
    try {
        return new Blob(parts, properties);
    }
    catch (e) {
        if (e.name !== 'TypeError') {
            throw e;
        }
        var Builder = typeof BlobBuilder !== 'undefined'
            ? BlobBuilder : typeof MSBlobBuilder !== 'undefined'
            ? MSBlobBuilder : typeof MozBlobBuilder !== 'undefined'
            ? MozBlobBuilder : WebKitBlobBuilder;
        var builder = new Builder();
        for (var i = 0; i < parts.length; i += 1) {
            builder.append(parts[i]);
        }
        return builder.getBlob(properties.type);
    }
}
/**
 * Shim for
 * [`URL.createObjectURL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL.createObjectURL)
 * to support browsers that only have the prefixed
 * `webkitURL` (e.g. Android <4.4).
 *
 * Example:
 *
 * ```js
 * var myUrl = blobUtil.createObjectURL(blob);
 * ```
 *
 * @param blob
 * @returns url
 */
function createObjectURL(blob) {
    return (typeof URL !== 'undefined' ? URL : webkitURL).createObjectURL(blob);
}
/**
 * Shim for
 * [`URL.revokeObjectURL()`](https://developer.mozilla.org/en-US/docs/Web/API/URL.revokeObjectURL)
 * to support browsers that only have the prefixed
 * `webkitURL` (e.g. Android <4.4).
 *
 * Example:
 *
 * ```js
 * blobUtil.revokeObjectURL(myUrl);
 * ```
 *
 * @param url
 */
function revokeObjectURL(url) {
    return (typeof URL !== 'undefined' ? URL : webkitURL).revokeObjectURL(url);
}
/**
 * Convert a `Blob` to a binary string.
 *
 * Example:
 *
 * ```js
 * blobUtil.blobToBinaryString(blob).then(function (binaryString) {
 *   // success
 * }).catch(function (err) {
 *   // error
 * });
 * ```
 *
 * @param blob
 * @returns Promise that resolves with the binary string
 */
function blobToBinaryString(blob) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        var hasBinaryString = typeof reader.readAsBinaryString === 'function';
        reader.onloadend = function () {
            var result = reader.result || '';
            if (hasBinaryString) {
                return resolve(result);
            }
            resolve(arrayBufferToBinaryString(result));
        };
        reader.onerror = reject;
        if (hasBinaryString) {
            reader.readAsBinaryString(blob);
        }
        else {
            reader.readAsArrayBuffer(blob);
        }
    });
}
/**
 * Convert a base64-encoded string to a `Blob`.
 *
 * Example:
 *
 * ```js
 * var blob = blobUtil.base64StringToBlob(base64String);
 * ```
 * @param base64 - base64-encoded string
 * @param type - the content type (optional)
 * @returns Blob
 */
function base64StringToBlob(base64, type) {
    var parts = [binaryStringToArrayBuffer(atob(base64))];
    return type ? createBlob(parts, { type: type }) : createBlob(parts);
}
/**
 * Convert a binary string to a `Blob`.
 *
 * Example:
 *
 * ```js
 * var blob = blobUtil.binaryStringToBlob(binaryString);
 * ```
 *
 * @param binary - binary string
 * @param type - the content type (optional)
 * @returns Blob
 */
function binaryStringToBlob(binary, type) {
    return base64StringToBlob(btoa(binary), type);
}
/**
 * Convert a `Blob` to a binary string.
 *
 * Example:
 *
 * ```js
 * blobUtil.blobToBase64String(blob).then(function (base64String) {
 *   // success
 * }).catch(function (err) {
 *   // error
 * });
 * ```
 *
 * @param blob
 * @returns Promise that resolves with the binary string
 */
function blobToBase64String(blob) {
    return blobToBinaryString(blob).then(btoa);
}
/**
 * Convert a data URL string
 * (e.g. `'data:image/png;base64,iVBORw0KG...'`)
 * to a `Blob`.
 *
 * Example:
 *
 * ```js
 * var blob = blobUtil.dataURLToBlob(dataURL);
 * ```
 *
 * @param dataURL - dataURL-encoded string
 * @returns Blob
 */
function dataURLToBlob(dataURL) {
    var type = dataURL.match(/data:([^;]+)/)[1];
    var base64 = dataURL.replace(/^[^,]+,/, '');
    var buff = binaryStringToArrayBuffer(atob(base64));
    return createBlob([buff], { type: type });
}
/**
 * Convert a `Blob` to a data URL string
 * (e.g. `'data:image/png;base64,iVBORw0KG...'`).
 *
 * Example:
 *
 * ```js
 * var dataURL = blobUtil.blobToDataURL(blob);
 * ```
 *
 * @param blob
 * @returns Promise that resolves with the data URL string
 */
function blobToDataURL(blob) {
    return blobToBase64String(blob).then(function (base64String) {
        return 'data:' + blob.type + ';base64,' + base64String;
    });
}
/**
 * Convert an image's `src` URL to a data URL by loading the image and painting
 * it to a `canvas`.
 *
 * Note: this will coerce the image to the desired content type, and it
 * will only paint the first frame of an animated GIF.
 *
 * Examples:
 *
 * ```js
 * blobUtil.imgSrcToDataURL('http://mysite.com/img.png').then(function (dataURL) {
 *   // success
 * }).catch(function (err) {
 *   // error
 * });
 * ```
 *
 * ```js
 * blobUtil.imgSrcToDataURL('http://some-other-site.com/img.jpg', 'image/jpeg',
 *                          'Anonymous', 1.0).then(function (dataURL) {
 *   // success
 * }).catch(function (err) {
 *   // error
 * });
 * ```
 *
 * @param src - image src
 * @param type - the content type (optional, defaults to 'image/png')
 * @param crossOrigin - for CORS-enabled images, set this to
 *                                         'Anonymous' to avoid "tainted canvas" errors
 * @param quality - a number between 0 and 1 indicating image quality
 *                                     if the requested type is 'image/jpeg' or 'image/webp'
 * @returns Promise that resolves with the data URL string
 */
function imgSrcToDataURL(src, type, crossOrigin, quality) {
    type = type || 'image/png';
    return loadImage(src, crossOrigin).then(imgToCanvas).then(function (canvas) {
        return canvas.toDataURL(type, quality);
    });
}
/**
 * Convert a `canvas` to a `Blob`.
 *
 * Examples:
 *
 * ```js
 * blobUtil.canvasToBlob(canvas).then(function (blob) {
 *   // success
 * }).catch(function (err) {
 *   // error
 * });
 * ```
 *
 * Most browsers support converting a canvas to both `'image/png'` and `'image/jpeg'`. You may
 * also want to try `'image/webp'`, which will work in some browsers like Chrome (and in other browsers, will just fall back to `'image/png'`):
 *
 * ```js
 * blobUtil.canvasToBlob(canvas, 'image/webp').then(function (blob) {
 *   // success
 * }).catch(function (err) {
 *   // error
 * });
 * ```
 *
 * @param canvas - HTMLCanvasElement
 * @param type - the content type (optional, defaults to 'image/png')
 * @param quality - a number between 0 and 1 indicating image quality
 *                                     if the requested type is 'image/jpeg' or 'image/webp'
 * @returns Promise that resolves with the `Blob`
 */
function canvasToBlob(canvas, type, quality) {
    if (typeof canvas.toBlob === 'function') {
        return new Promise(function (resolve) {
            canvas.toBlob(resolve, type, quality);
        });
    }
    return Promise.resolve(dataURLToBlob(canvas.toDataURL(type, quality)));
}
/**
 * Convert an image's `src` URL to a `Blob` by loading the image and painting
 * it to a `canvas`.
 *
 * Note: this will coerce the image to the desired content type, and it
 * will only paint the first frame of an animated GIF.
 *
 * Examples:
 *
 * ```js
 * blobUtil.imgSrcToBlob('http://mysite.com/img.png').then(function (blob) {
 *   // success
 * }).catch(function (err) {
 *   // error
 * });
 * ```
 *
 * ```js
 * blobUtil.imgSrcToBlob('http://some-other-site.com/img.jpg', 'image/jpeg',
 *                          'Anonymous', 1.0).then(function (blob) {
 *   // success
 * }).catch(function (err) {
 *   // error
 * });
 * ```
 *
 * @param src - image src
 * @param type - the content type (optional, defaults to 'image/png')
 * @param crossOrigin - for CORS-enabled images, set this to
 *                                         'Anonymous' to avoid "tainted canvas" errors
 * @param quality - a number between 0 and 1 indicating image quality
 *                                     if the requested type is 'image/jpeg' or 'image/webp'
 * @returns Promise that resolves with the `Blob`
 */
function imgSrcToBlob(src, type, crossOrigin, quality) {
    type = type || 'image/png';
    return loadImage(src, crossOrigin).then(imgToCanvas).then(function (canvas) {
        return canvasToBlob(canvas, type, quality);
    });
}
/**
 * Convert an `ArrayBuffer` to a `Blob`.
 *
 * Example:
 *
 * ```js
 * var blob = blobUtil.arrayBufferToBlob(arrayBuff, 'audio/mpeg');
 * ```
 *
 * @param buffer
 * @param type - the content type (optional)
 * @returns Blob
 */
function arrayBufferToBlob(buffer, type) {
    return createBlob([buffer], type);
}
/**
 * Convert a `Blob` to an `ArrayBuffer`.
 *
 * Example:
 *
 * ```js
 * blobUtil.blobToArrayBuffer(blob).then(function (arrayBuff) {
 *   // success
 * }).catch(function (err) {
 *   // error
 * });
 * ```
 *
 * @param blob
 * @returns Promise that resolves with the `ArrayBuffer`
 */
function blobToArrayBuffer(blob) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () {
            var result = reader.result || new ArrayBuffer(0);
            resolve(result);
        };
        reader.onerror = reject;
        reader.readAsArrayBuffer(blob);
    });
}
/**
 * Convert an `ArrayBuffer` to a binary string.
 *
 * Example:
 *
 * ```js
 * var myString = blobUtil.arrayBufferToBinaryString(arrayBuff)
 * ```
 *
 * @param buffer - array buffer
 * @returns binary string
 */
function arrayBufferToBinaryString(buffer) {
    var binary = '';
    var bytes = new Uint8Array(buffer);
    var length = bytes.byteLength;
    var i = -1;
    while (++i < length) {
        binary += String.fromCharCode(bytes[i]);
    }
    return binary;
}
/**
 * Convert a binary string to an `ArrayBuffer`.
 *
 * ```js
 * var myBuffer = blobUtil.binaryStringToArrayBuffer(binaryString)
 * ```
 *
 * @param binary - binary string
 * @returns array buffer
 */
function binaryStringToArrayBuffer(binary) {
    var length = binary.length;
    var buf = new ArrayBuffer(length);
    var arr = new Uint8Array(buf);
    var i = -1;
    while (++i < length) {
        arr[i] = binary.charCodeAt(i);
    }
    return buf;
}




/***/ }),

/***/ "./src/app/shell/catering/catering.component.ts":
/*!******************************************************!*\
  !*** ./src/app/shell/catering/catering.component.ts ***!
  \******************************************************/
/*! exports provided: CateringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringComponent", function() { return CateringComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/components/topbar-header/topbar-header.component */ "./src/app/shared/components/topbar-header/topbar-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/shell/catering/menu/menu.component.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/shell/catering/orders/orders.component.ts");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "./node_modules/@acaprojects/ngx-pipes/__ivy_ngcc__/fesm2015/acaprojects-ngx-pipes.js");
















const _c0 = function () { return { class: "material-icons", content: "close" }; };
function CateringComponent_div_4_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function CateringComponent_div_4_button_4_Template_button_tapped_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.search_str = ""; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return { class: "material-icons", content: "search" }; };
function CateringComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "input", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CateringComponent_div_4_Template_input_ngModelChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.search_str = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CateringComponent_div_4_button_4_Template, 2, 2, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("rounded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx_r0.search_str);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.search_str);
} }
function CateringComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function CateringComponent_button_5_Template_button_tapped_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.category = ctx_r11.category + 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CateringComponent_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function CateringComponent_button_6_Template_button_tapped_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.package = ctx_r13.package + 1; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add sub-category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CateringComponent_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a-catering-menu", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("length", function CateringComponent_ng_container_9_Template_a_catering_menu_length_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.length = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("search", ctx_r3.search_str)("category", ctx_r3.category)("package", ctx_r3.package);
} }
function CateringComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-catering-orders", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx_r4.date)("search", ctx_r4.search_str);
} }
const _c2 = function () { return ["/catering", "menu"]; };
const _c3 = function () { return ["/catering", "orders"]; };
function CateringComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Menus and Pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "View and edit menus and pricing");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Catering Orders");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " View catering orders and their statuses upon arrival ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(assets/img/menus.jpg)", "style"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](13, 9, "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(assets/img/orders.jpg)", "style"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
} }
class CateringComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    constructor(_route) {
        super();
        this._route = _route;
        /** Toggle for new category modal */
        this.category = 0;
        /** Toggle for new package modal */
        this.package = 0;
    }
    ngOnInit() {
        this.category = 0;
        this.subscription('route.params', this._route.paramMap.subscribe((params) => {
            if (params.has('page')) {
                this.page = params.get('page');
            }
        }));
    }
}
CateringComponent.ɵfac = function CateringComponent_Factory(t) { return new (t || CateringComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
CateringComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringComponent, selectors: [["app-catering"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 7, consts: [[1, "catering"], [1, "group"], [3, "date", "dateChange"], ["class", "input-wrapper", 4, "ngIf"], ["mat-button", "", 3, "tapped", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "input-wrapper"], ["appearance", "outline"], ["matPrefix", "", 3, "icon"], ["matInput", "", "name", "visitor-name", "placeholder", "Search...", 3, "ngModel", "ngModelChange"], ["mat-icon-button", "", "matSuffix", "", 3, "tapped", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", 3, "tapped"], [3, "icon"], ["mat-button", "", 3, "tapped"], [3, "search", "category", "package", "length"], [3, "date", "search"], [1, "options"], ["mat-button", "", 1, "card", 3, "routerLink"], [1, "content"], [1, "img"], [1, "desc"]], template: function CateringComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a-topbar-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateChange", function CateringComponent_Template_a_topbar_header_dateChange_3_listener($event) { return ctx.date = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CateringComponent_div_4_Template, 5, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CateringComponent_button_5_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CateringComponent_button_6_Template, 2, 0, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](8, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CateringComponent_ng_container_9_Template, 2, 3, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CateringComponent_ng_container_10_Template, 2, 2, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CateringComponent_ng_container_11_Template, 18, 14, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("date", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page === "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page === "menu" && ctx.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.page);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "orders");
    } }, directives: [_shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_4__["TopbarHeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchDefault"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatPrefix"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatSuffix"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_11__["ɵb"], _menu_menu_component__WEBPACK_IMPORTED_MODULE_12__["CateringMenuComponent"], _orders_orders_component__WEBPACK_IMPORTED_MODULE_13__["CateringOrdersComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_14__["ɵa"]], styles: ["[_nghost-%COMP%], .catering[_ngcontent-%COMP%], main[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.catering[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n  background-color: #ecf1f5;\n}\nmain[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100% - 3.5em);\n}\n.group[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 12em;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\nh2[_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n.input-wrapper[_ngcontent-%COMP%] {\n  height: 3.5em;\n  padding: 0 0.5em;\n}\n.input-wrapper[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 1.25em;\n}\n.card[_ngcontent-%COMP%] {\n  padding: 0;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  margin: 1em;\n  font-weight: 300;\n  background-color: #fff;\n  height: 16em;\n  width: 24em;\n  overflow: hidden;\n}\n.card[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.card[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-position: center !important;\n  background-size: cover !important;\n  color: #fff;\n  width: 100%;\n  height: 13em;\n}\n.card[_ngcontent-%COMP%]   .desc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 3em;\n  color: rgba(0, 0, 0, 0.6);\n}\nbutton[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvY2F0ZXJpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL2NhdGVyaW5nL2NhdGVyaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQWdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQTdDQTs7MEJBQUE7QUFnQ0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMvQkE7O3NCQUFBO0FDWkE7OztFQUdJLFlBQUE7RUFDQSxXQUFBO0FDbUJKO0FEaEJBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ21CSjtBRGhCQTtFQUNJLGtCQUFBO0VBQ0EsMEJBQUE7QUNtQko7QURoQkE7RUFDSSxPQUFBO0VBQ0EsZUFBQTtBQ21CSjtBRGhCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNtQko7QURoQkE7RUFDSSxnQkFBQTtBQ21CSjtBRGhCQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQ21CSjtBRGpCSTtFQUNJLGlCQUFBO0FDbUJSO0FEZkE7RUFDSSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFRHhDQSxpSEFBQTtFQzBDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUNrQko7QURoQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FDa0JSO0FEZkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUNBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNpQlI7QURkSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FDZ0JSO0FEWEE7RUFDSSxtQkFBQTtBQ2NKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvY2F0ZXJpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICMxOTM3ZWE7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMDUxYzJjO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuQG1peGluIGhpZGUtdGV4dC1vdmVyZmxvdyB7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xufVxuXG5AbWl4aW4gYm94LXNoYWRvdygkY29sb3I6ICMwMDAsICRkZXB0aDogMSkge1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCAxcHggKiAoJGRlcHRoIC0gMSkgcmdiYSgjMDAwLCAuMiksXG4gICAgICAgICAgICAgICAgMCAxcHggMXB4IDAgcmdiYSgjMDAwLCAuMTQpLFxuICAgICAgICAgICAgICAgIDAgMnB4IDFweCAtMXB4IHJnYmEoIzAwMCwgLjEyKTtcbn1cblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbkBtaXhpbiByZXNwb25kLXRvKCRtZWRpYSkge1xuICAgIEBpZiAkbWVkaWEgPT0gbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbW9iaWxlLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBub3QtbW9iaWxlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYXB0b3AtcG9ydHJhaXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSAgQGVsc2UgaWYgJG1lZGlhID09IGxhdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gdGFibGV0LXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgKCRtZWRpYSA9PSB0YWJsZXQtbW9iaWxlIG9yICRtZWRpYSA9PSBub3QtZGVza3RvcCkge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLWxhbmRzY2FwZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBkZXNrdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBsYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5AaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCxcbi5jYXRlcmluZyxcbm1haW4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmNhdGVyaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmMWY1O1xufVxuXG5tYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAzLjVlbSk7XG59XG5cbi5ncm91cCB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDEyZW07XG59XG5cbi5vcHRpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5oMiB7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmlucHV0LXdyYXBwZXIge1xuICAgIGhlaWdodDogMy41ZW07XG4gICAgcGFkZGluZzogMCAuNWVtO1xuXG4gICAgYXBwLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuMjVlbTtcbiAgICB9XG59XG5cbi5jYXJkIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIEBpbmNsdWRlIGJveC1zaGFkb3c7XG4gICAgbWFyZ2luOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGhlaWdodDogMTZlbTtcbiAgICB3aWR0aDogMjRlbTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB9XG5cbiAgICAuaW1nIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxM2VtO1xuICAgIH1cblxuICAgIC5kZXNjIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogM2VtO1xuICAgICAgICBjb2xvcjogcmdiYSgjMDAwLCAuNik7XG4gICAgfVxuXG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuNWVtO1xufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG46aG9zdCxcbi5jYXRlcmluZyxcbm1haW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY2F0ZXJpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2YxZjU7XG59XG5cbm1haW4ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogY2FsYygxMDAlIC0gMy41ZW0pO1xufVxuXG4uZ3JvdXAge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDEyZW07XG59XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmgyIHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLmlucHV0LXdyYXBwZXIge1xuICBoZWlnaHQ6IDMuNWVtO1xuICBwYWRkaW5nOiAwIDAuNWVtO1xufVxuLmlucHV0LXdyYXBwZXIgYXBwLWljb24ge1xuICBmb250LXNpemU6IDEuMjVlbTtcbn1cblxuLmNhcmQge1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDFweCAxcHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDJweCAxcHggLTFweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBtYXJnaW46IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiAxNmVtO1xuICB3aWR0aDogMjRlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbi5jYXJkIC5jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY2FyZCAuaW1nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxM2VtO1xufVxuLmNhcmQgLmRlc2Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAzZW07XG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogMC41ZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-catering',
                templateUrl: './catering.component.html',
                styleUrls: ['./catering.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shell/catering/catering.module.ts":
/*!***************************************************!*\
  !*** ./src/app/shell/catering/catering.module.ts ***!
  \***************************************************/
/*! exports provided: CateringModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringModule", function() { return CateringModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _catering_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catering.component */ "./src/app/shell/catering/catering.component.ts");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _orders_orders_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./orders/orders.component */ "./src/app/shell/catering/orders/orders.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/shell/catering/menu/menu.component.ts");
/* harmony import */ var _menu_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/item-list/item-list.component */ "./src/app/shell/catering/menu/item-list/item-list.component.ts");
/* harmony import */ var _menu_item_item_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu/item/item.component */ "./src/app/shell/catering/menu/item/item.component.ts");
/* harmony import */ var _overlays_category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./overlays/category-modal/category-modal.component */ "./src/app/shell/catering/overlays/category-modal/category-modal.component.ts");
/* harmony import */ var _overlays_group_modal_group_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./overlays/group-modal/group-modal.component */ "./src/app/shell/catering/overlays/group-modal/group-modal.component.ts");
/* harmony import */ var _overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./overlays/item-modal/item-modal.component */ "./src/app/shell/catering/overlays/item-modal/item-modal.component.ts");
/* harmony import */ var _orders_item_item_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./orders/item/item.component */ "./src/app/shell/catering/orders/item/item.component.ts");
/* harmony import */ var _overlays_order_details_modal_order_details_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./overlays/order-details-modal/order-details-modal.component */ "./src/app/shell/catering/overlays/order-details-modal/order-details-modal.component.ts");
/* harmony import */ var _overlays_order_details_modal_items_items_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./overlays/order-details-modal/items/items.component */ "./src/app/shell/catering/overlays/order-details-modal/items/items.component.ts");
/* harmony import */ var _overlays_order_details_modal_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./overlays/order-details-modal/booking-details/booking-details.component */ "./src/app/shell/catering/overlays/order-details-modal/booking-details/booking-details.component.ts");
/* harmony import */ var _overlays_order_details_modal_messages_messages_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./overlays/order-details-modal/messages/messages.component */ "./src/app/shell/catering/overlays/order-details-modal/messages/messages.component.ts");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _acaprojects_ngx_date_picker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @acaprojects/ngx-date-picker */ "./node_modules/@acaprojects/ngx-date-picker/__ivy_ngcc__/fesm2015/acaprojects-ngx-date-picker.js");
/* harmony import */ var _shared_base_directive__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/components/login/login.component */ "./src/app/shared/components/login/login.component.ts");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _shared_components_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shared/components/action-icon/action-icon.component */ "./src/app/shared/components/action-icon/action-icon.component.ts");
/* harmony import */ var _shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../shared/components/topbar-header/topbar-header.component */ "./src/app/shared/components/topbar-header/topbar-header.component.ts");
/* harmony import */ var _shared_components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../shared/components/searchbar/searchbar.component */ "./src/app/shared/components/searchbar/searchbar.component.ts");
/* harmony import */ var _shared_components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../shared/components/user-avatar/user-avatar.component */ "./src/app/shared/components/user-avatar/user-avatar.component.ts");
/* harmony import */ var _shared_components_forms_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../shared/components/forms/user-form/user-form.component */ "./src/app/shared/components/forms/user-form/user-form.component.ts");
/* harmony import */ var _shared_components_forms_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../shared/components/forms/booking-form/booking-form.component */ "./src/app/shared/components/forms/booking-form/booking-form.component.ts");
/* harmony import */ var _shared_components_popout_menu_popout_menu_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../shared/components/popout-menu/popout-menu.component */ "./src/app/shared/components/popout-menu/popout-menu.component.ts");
/* harmony import */ var _shared_components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../shared/components/feedback/feedback.component */ "./src/app/shared/components/feedback/feedback.component.ts");
/* harmony import */ var _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../shared/components/sidebar/sidebar.component */ "./src/app/shared/components/sidebar/sidebar.component.ts");
/* harmony import */ var _shared_directives_cdk_drop_list_scroll_container_directive__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../shared/directives/cdk-drop-list-scroll-container.directive */ "./src/app/shared/directives/cdk-drop-list-scroll-container.directive.ts");
/* harmony import */ var _shared_components_custom_fields_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../shared/components/custom-fields/date-field/date-field.component */ "./src/app/shared/components/custom-fields/date-field/date-field.component.ts");
/* harmony import */ var _shared_components_custom_fields_action_field_action_field_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../shared/components/custom-fields/action-field/action-field.component */ "./src/app/shared/components/custom-fields/action-field/action-field.component.ts");
/* harmony import */ var _shared_components_custom_fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../../shared/components/custom-fields/time-field/time-field.component */ "./src/app/shared/components/custom-fields/time-field/time-field.component.ts");
/* harmony import */ var _shared_components_custom_fields_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../../shared/components/custom-fields/duration-field/duration-field.component */ "./src/app/shared/components/custom-fields/duration-field/duration-field.component.ts");
/* harmony import */ var _shared_components_custom_fields_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../../shared/components/custom-fields/user-search-field/user-search-field.component */ "./src/app/shared/components/custom-fields/user-search-field/user-search-field.component.ts");
/* harmony import */ var _shared_components_custom_fields_user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../../shared/components/custom-fields/user-list-field/user-list-field.component */ "./src/app/shared/components/custom-fields/user-list-field/user-list-field.component.ts");
/* harmony import */ var _shared_components_custom_fields_counter_counter_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../shared/components/custom-fields/counter/counter.component */ "./src/app/shared/components/custom-fields/counter/counter.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/cdk/text-field */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/chips.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/radio.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/drag-drop.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "./node_modules/@acaprojects/ngx-pipes/__ivy_ngcc__/fesm2015/acaprojects-ngx-pipes.js");



































































const ROUTES = [
    { path: '', component: _catering_component__WEBPACK_IMPORTED_MODULE_4__["CateringComponent"] },
    { path: ':page', component: _catering_component__WEBPACK_IMPORTED_MODULE_4__["CateringComponent"] },
    { path: '**', redirectTo: '' },
];
class CateringModule {
}
CateringModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CateringModule });
CateringModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CateringModule_Factory(t) { return new (t || CateringModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES),
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CateringModule, { declarations: [_catering_component__WEBPACK_IMPORTED_MODULE_4__["CateringComponent"],
        _orders_orders_component__WEBPACK_IMPORTED_MODULE_6__["CateringOrdersComponent"],
        _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["CateringMenuComponent"],
        _menu_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__["CateringMenuItemListComponent"],
        _menu_item_item_component__WEBPACK_IMPORTED_MODULE_9__["CateringMenuItemComponent"],
        _overlays_category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_10__["CateringCategoryModalComponent"],
        _overlays_group_modal_group_modal_component__WEBPACK_IMPORTED_MODULE_11__["CateringGroupModalComponent"],
        _overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_12__["CateringItemModalComponent"],
        _orders_item_item_component__WEBPACK_IMPORTED_MODULE_13__["CateringOrdersItemComponent"],
        _overlays_order_details_modal_order_details_modal_component__WEBPACK_IMPORTED_MODULE_14__["OrderDetailsModalComponent"],
        _overlays_order_details_modal_items_items_component__WEBPACK_IMPORTED_MODULE_15__["OrderDetailsItemsComponent"],
        _overlays_order_details_modal_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_16__["OrderBookingDetailsComponent"],
        _overlays_order_details_modal_messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["OrderDetailsNotesComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _catering_component__WEBPACK_IMPORTED_MODULE_4__["CateringComponent"],
                    _orders_orders_component__WEBPACK_IMPORTED_MODULE_6__["CateringOrdersComponent"],
                    _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["CateringMenuComponent"],
                    _menu_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__["CateringMenuItemListComponent"],
                    _menu_item_item_component__WEBPACK_IMPORTED_MODULE_9__["CateringMenuItemComponent"],
                    _overlays_category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_10__["CateringCategoryModalComponent"],
                    _overlays_group_modal_group_modal_component__WEBPACK_IMPORTED_MODULE_11__["CateringGroupModalComponent"],
                    _overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_12__["CateringItemModalComponent"],
                    _orders_item_item_component__WEBPACK_IMPORTED_MODULE_13__["CateringOrdersItemComponent"],
                    _overlays_order_details_modal_order_details_modal_component__WEBPACK_IMPORTED_MODULE_14__["OrderDetailsModalComponent"],
                    _overlays_order_details_modal_items_items_component__WEBPACK_IMPORTED_MODULE_15__["OrderDetailsItemsComponent"],
                    _overlays_order_details_modal_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_16__["OrderBookingDetailsComponent"],
                    _overlays_order_details_modal_messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["OrderDetailsNotesComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES),
                    src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedContentModule"],
                ],
            }]
    }], null, null); })();
_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetComponentScope"](_menu_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__["CateringMenuItemListComponent"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgComponentOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgTemplateOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPlural"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgPluralCase"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RangeValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["SelectMultipleControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MinLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["PatternValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["CheckboxRequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["EmailValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModelGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_router_router_l"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_18__["ɵa"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_18__["ɵb"], _acaprojects_ngx_date_picker__WEBPACK_IMPORTED_MODULE_19__["ADatePickerComponent"], _shared_base_directive__WEBPACK_IMPORTED_MODULE_20__["BaseDirective"], _shared_components_login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_22__["IconComponent"], _shared_components_action_icon_action_icon_component__WEBPACK_IMPORTED_MODULE_23__["ActionIconComponent"], _shared_components_topbar_header_topbar_header_component__WEBPACK_IMPORTED_MODULE_24__["TopbarHeaderComponent"], _shared_components_searchbar_searchbar_component__WEBPACK_IMPORTED_MODULE_25__["SearchbarComponent"], _shared_components_user_avatar_user_avatar_component__WEBPACK_IMPORTED_MODULE_26__["UserAvatarComponent"], _shared_components_forms_user_form_user_form_component__WEBPACK_IMPORTED_MODULE_27__["UserFormComponent"], _shared_components_forms_booking_form_booking_form_component__WEBPACK_IMPORTED_MODULE_28__["BookingFormComponent"], _shared_components_popout_menu_popout_menu_component__WEBPACK_IMPORTED_MODULE_29__["PopoutMenuComponent"], _shared_components_feedback_feedback_component__WEBPACK_IMPORTED_MODULE_30__["FeedbackComponent"], _shared_components_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_31__["SidebarComponent"], _shared_directives_cdk_drop_list_scroll_container_directive__WEBPACK_IMPORTED_MODULE_32__["CdkDropListScrollContainer"], _shared_components_custom_fields_date_field_date_field_component__WEBPACK_IMPORTED_MODULE_33__["DateFieldComponent"], _shared_components_custom_fields_action_field_action_field_component__WEBPACK_IMPORTED_MODULE_34__["ActionFieldComponent"], _shared_components_custom_fields_time_field_time_field_component__WEBPACK_IMPORTED_MODULE_35__["TimeFieldComponent"], _shared_components_custom_fields_duration_field_duration_field_component__WEBPACK_IMPORTED_MODULE_36__["DurationFieldComponent"], _shared_components_custom_fields_user_search_field_user_search_field_component__WEBPACK_IMPORTED_MODULE_37__["UserSearchFieldComponent"], _shared_components_custom_fields_user_list_field_user_list_field_component__WEBPACK_IMPORTED_MODULE_38__["UserListFieldComponent"], _shared_components_custom_fields_counter_counter_component__WEBPACK_IMPORTED_MODULE_39__["CounterComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_40__["MatButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_40__["MatAnchor"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_41__["Dir"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_42__["MatSnackBarContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_43__["MatDialogContainer"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_43__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_43__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_43__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_43__["MatDialogActions"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__["MatHint"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__["MatPlaceholder"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__["MatPrefix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_44__["MatSuffix"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_45__["CdkAutofill"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_45__["CdkTextareaAutosize"], _angular_material_input__WEBPACK_IMPORTED_MODULE_46__["MatInput"], _angular_material_input__WEBPACK_IMPORTED_MODULE_46__["MatTextareaAutosize"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_47__["MatProgressSpinner"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_47__["MatSpinner"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_48__["MatProgressBar"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_49__["MatAutocomplete"], _angular_material_core__WEBPACK_IMPORTED_MODULE_50__["MatOption"], _angular_material_core__WEBPACK_IMPORTED_MODULE_50__["MatOptgroup"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_49__["MatAutocompleteTrigger"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_49__["MatAutocompleteOrigin"], _angular_material_select__WEBPACK_IMPORTED_MODULE_51__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_51__["MatSelectTrigger"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_52__["MatChipList"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_52__["MatChip"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_52__["MatChipInput"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_52__["MatChipRemove"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_52__["MatChipAvatar"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_52__["MatChipTrailingIcon"], _angular_material_core__WEBPACK_IMPORTED_MODULE_50__["MatRipple"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_53__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_53__["MatMenuItem"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_53__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_53__["MatMenuContent"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_54__["MatCheckbox"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_54__["MatCheckboxRequiredValidator"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_55__["MatTooltip"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_55__["TooltipComponent"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_56__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_56__["MatRadioButton"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_57__["MatTabGroup"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_57__["MatTabLabel"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_57__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_57__["MatTabNav"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_57__["MatTabLink"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_57__["MatTabContent"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_58__["MatSlideToggleRequiredValidator"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_58__["MatSlideToggle"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_59__["CdkFixedSizeVirtualScroll"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_59__["CdkScrollable"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_59__["CdkVirtualForOf"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_59__["CdkVirtualScrollViewport"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_60__["CdkDropList"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_60__["CdkDropListGroup"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_60__["CdkDrag"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_60__["CdkDragHandle"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_60__["CdkDragPreview"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_60__["CdkDragPlaceholder"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkTable"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkCellOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkHeaderCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkFooterCellDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkColumnDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkHeaderCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkFooterCell"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkHeaderRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkHeaderRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkFooterRow"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkFooterRowDef"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["DataRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["HeaderRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["FooterRowOutlet"], _angular_cdk_table__WEBPACK_IMPORTED_MODULE_61__["CdkTextColumn"], _catering_component__WEBPACK_IMPORTED_MODULE_4__["CateringComponent"],
    _orders_orders_component__WEBPACK_IMPORTED_MODULE_6__["CateringOrdersComponent"],
    _menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["CateringMenuComponent"],
    _menu_item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__["CateringMenuItemListComponent"],
    _menu_item_item_component__WEBPACK_IMPORTED_MODULE_9__["CateringMenuItemComponent"],
    _overlays_category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_10__["CateringCategoryModalComponent"],
    _overlays_group_modal_group_modal_component__WEBPACK_IMPORTED_MODULE_11__["CateringGroupModalComponent"],
    _overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_12__["CateringItemModalComponent"],
    _orders_item_item_component__WEBPACK_IMPORTED_MODULE_13__["CateringOrdersItemComponent"],
    _overlays_order_details_modal_order_details_modal_component__WEBPACK_IMPORTED_MODULE_14__["OrderDetailsModalComponent"],
    _overlays_order_details_modal_items_items_component__WEBPACK_IMPORTED_MODULE_15__["OrderDetailsItemsComponent"],
    _overlays_order_details_modal_booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_16__["OrderBookingDetailsComponent"],
    _overlays_order_details_modal_messages_messages_component__WEBPACK_IMPORTED_MODULE_17__["OrderDetailsNotesComponent"]], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["LowerCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["JsonPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["SlicePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["PercentPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["TitleCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CurrencyPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nPluralPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["I18nSelectPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["KeyValuePipe"], _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_62__["ɵa"], _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_62__["ɵb"]]);


/***/ }),

/***/ "./src/app/shell/catering/menu/item-list/item-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/shell/catering/menu/item-list/item-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: CateringMenuItemListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringMenuItemListComponent", function() { return CateringMenuItemListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_catering_catering_category_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data/catering/catering-category.class */ "./src/app/services/data/catering/catering-category.class.ts");
/* harmony import */ var _overlays_group_modal_group_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../overlays/group-modal/group-modal.component */ "./src/app/shell/catering/overlays/group-modal/group-modal.component.ts");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");







function CateringMenuItemListComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "a-catering-menu-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("parent", ctx_r3.category)("item", item_r4);
} }
function CateringMenuItemListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CateringMenuItemListComponent_ng_container_1_div_1_Template, 2, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.category.items);
} }
const _c0 = function () { return { class: "material-icons", content: "close" }; };
function CateringMenuItemListComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No packages or sub-categories for ", ctx_r2.category.name, "");
} }
class CateringMenuItemListComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"] {
    constructor(_dialog, _service) {
        super();
        this._dialog = _dialog;
        this._service = _service;
    }
    /** Currently active building */
    get building() {
        return this._service.Organisation.building;
    }
    ngOnChanges(changes) {
        /* istanbul ignore else */
        if (changes.package && this.package) {
            this.openGroupModal();
        }
    }
    openGroupModal(group) {
        /* istanbul ignore else */
        if (!group) {
            group = new src_app_services_data_catering_catering_category_class__WEBPACK_IMPORTED_MODULE_1__["CateringCategory"]({
                parent_id: this.category.id,
                zones: [this.building.id],
            });
        }
        const ref = this._dialog.open(_overlays_group_modal_group_modal_component__WEBPACK_IMPORTED_MODULE_2__["CateringGroupModalComponent"], {
            data: { group, parent: this.category },
        });
        this.subscription('category_modal', ref.componentInstance.event.subscribe((event) => {
            /* istanbul ignore else */
            if (event.reason === 'done') {
                const index = this.category.items.findIndex((item) => event.metadata.id === item.id);
                if (index >= 0) {
                    this.category.items.splice(index, 1, event.metadata);
                }
                else {
                    this.category.items.push(event.metadata);
                }
            }
        }));
    }
}
CateringMenuItemListComponent.ɵfac = function CateringMenuItemListComponent_Factory(t) { return new (t || CateringMenuItemListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"])); };
CateringMenuItemListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringMenuItemListComponent, selectors: [["a-catering-menu-item-list"]], inputs: { category: "category", package: "package" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [[1, "list"], [4, "ngIf", "ngIfElse"], ["empty_state", ""], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [3, "parent", "item"], [1, "info-block", "center"], [1, "icon"], [3, "icon"], [1, "text"]], template: function CateringMenuItemListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CateringMenuItemListComponent_ng_container_1_Template, 2, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CateringMenuItemListComponent_ng_template_2_Template, 5, 3, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.category && ctx.category.items && ctx.category.items.length)("ngIfElse", _r1);
    } }, styles: [".list[_ngcontent-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: auto;\n  padding-top: 1em;\n  background-color: #ecf1f5;\n  color: #000;\n}\n.item[_ngcontent-%COMP%] {\n  width: 768px;\n  min-height: 4em;\n  overflow: hidden;\n  border-radius: 8px;\n  background-color: #fff;\n  box-shadow: 0 1px 3px 0px rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 2px 1px -1px rgba(0, 0, 0, 0.12);\n  margin: auto auto 1em;\n  max-width: calc(100% - 1em);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy9taXhpbnMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvbWVudS9pdGVtLWxpc3QvaXRlbS1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9jYXRlcmluZy9tZW51L2l0ZW0tbGlzdC9pdGVtLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBZ0NBOztjQUFBO0FBYUE7O3NCQUFBO0FDL0JBOztzQkFBQTtBQ1pBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0ZMUTtBR2VaO0FEUEE7RUFDSSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFRFJBLGlIQUFBO0VDVUEscUJBQUE7RUFDQSwyQkFBQTtBQ1VKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvbWVudS9pdGVtLWxpc3QvaXRlbS1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjMTkzN2VhO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuXG4kY29sb3ItdGVybmFyeTogIzA1MWMyYztcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG4iLCJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBoaWRlLXRleHQtb3ZlcmZsb3cge1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuQG1peGluIGJveC1zaGFkb3coJGNvbG9yOiAjMDAwLCAkZGVwdGg6IDEpIHtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggMXB4ICogKCRkZXB0aCAtIDEpIHJnYmEoIzAwMCwgLjIpLFxuICAgICAgICAgICAgICAgIDAgMXB4IDFweCAwIHJnYmEoIzAwMCwgLjE0KSxcbiAgICAgICAgICAgICAgICAwIDJweCAxcHggLTFweCByZ2JhKCMwMDAsIC4xMik7XG59XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgICBAaWYgJG1lZGlhID09IG1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBtb2JpbGUtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IG1vYmlsZS1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1tb2JpbGUpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbm90LW1vYmlsZSB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGUgKyAxKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcHRvcCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0ICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGxhcHRvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3ApIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFwdG9wLXBvcnRyYWl0IHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLXRhYmxldCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFwdG9wKSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gIEBlbHNlIGlmICRtZWRpYSA9PSBsYXQge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBsYW5kc2NhcGUpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLW1vYmlsZSArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFuZHNjYXBlLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSB0YWJsZXQtbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtaW4td2lkdGg6ICRicmVhay1sYW5kc2NhcGUtbW9iaWxlICsgMSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IHRhYmxldC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay1tb2JpbGUgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICgkbWVkaWEgPT0gdGFibGV0LW1vYmlsZSBvciAkbWVkaWEgPT0gbm90LWRlc2t0b3ApIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IHBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogJGJyZWFrLXRhYmxldCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkgYW5kIChtYXgtd2lkdGg6ICRicmVhay1sYW5kc2NhcGUtdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH0gQGVsc2UgaWYgJG1lZGlhID09IGRlc2t0b3Age1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogcG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiAkYnJlYWstdGFibGV0KSB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1sYW5kc2NhcGUge1xuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChvcmllbnRhdGlvbjogbGFuZHNjYXBlKSBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gZGVza3RvcC1wb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6ICRicmVhay10YWJsZXQpIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfSBAZWxzZSBpZiAkbWVkaWEgPT0gbGFuZHNjYXBlIHtcbiAgICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAob3JpZW50YXRpb246IGxhbmRzY2FwZSkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9IEBlbHNlIGlmICRtZWRpYSA9PSBwb3J0cmFpdCB7XG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG9yaWVudGF0aW9uOiBwb3J0cmFpdCkge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJcbkBpbXBvcnQgJ21peGlucyc7XG5cbi5saXN0IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjFmNTtcbiAgICBjb2xvcjogJGZvbnQtZGFyaztcbn1cblxuLml0ZW0ge1xuICAgIHdpZHRoOiA3NjhweDtcbiAgICBtaW4taGVpZ2h0OiA0ZW07XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICBAaW5jbHVkZSBib3gtc2hhZG93O1xuICAgIG1hcmdpbjogYXV0byBhdXRvIDFlbTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwJSAtIDFlbSk7XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZy10b3A6IDFlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjFmNTtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5pdGVtIHtcbiAgd2lkdGg6IDc2OHB4O1xuICBtaW4taGVpZ2h0OiA0ZW07XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDBweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDFweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMnB4IDFweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIG1hcmdpbjogYXV0byBhdXRvIDFlbTtcbiAgbWF4LXdpZHRoOiBjYWxjKDEwMCUgLSAxZW0pO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringMenuItemListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-catering-menu-item-list',
                templateUrl: './item-list.component.html',
                styleUrls: ['./item-list.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] }, { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"] }]; }, { category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], package: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/catering/menu/item/item.component.ts":
/*!************************************************************!*\
  !*** ./src/app/shell/catering/menu/item/item.component.ts ***!
  \************************************************************/
/*! exports provided: CateringMenuItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringMenuItemComponent", function() { return CateringMenuItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_catering_catering_category_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data/catering/catering-category.class */ "./src/app/services/data/catering/catering-category.class.ts");
/* harmony import */ var src_app_shared_globals_angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/globals/angular-animations */ "./src/app/shared/globals/angular-animations.ts");
/* harmony import */ var _overlays_group_modal_group_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../overlays/group-modal/group-modal.component */ "./src/app/shell/catering/overlays/group-modal/group-modal.component.ts");
/* harmony import */ var src_app_services_data_catering_catering_item_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/catering/catering-item.class */ "./src/app/services/data/catering/catering-item.class.ts");
/* harmony import */ var src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/overlays/confirm-modal/confirm-modal.component */ "./src/app/overlays/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var _catering_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../catering.component */ "./src/app/shell/catering/catering.component.ts");
/* harmony import */ var _overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../overlays/item-modal/item-modal.component */ "./src/app/shell/catering/overlays/item-modal/item-modal.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
















function CateringMenuItemComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 21);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx_r4.item.image_path + ")", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
} }
function CateringMenuItemComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r5.item.unit_price / 100, ctx_r5.symbol), " ");
} }
function CateringMenuItemComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" Contains ", ctx_r6.item.items.length, " item", ctx_r6.item.items.length === 1 ? "" : "s", " ");
} }
function CateringMenuItemComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Selected ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "ion");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r7.item.must_select, " opt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r7.item.items.length === 1 ? "" : "s", " ");
} }
function CateringMenuItemComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, ctx_r8.item.unit_price / 100, ctx_r8.symbol), " ");
} }
const _c0 = function () { return { class: "material-icons", content: "more_vert" }; };
const _c1 = function (a1) { return { class: "material-icons", content: a1 }; };
function CateringMenuItemComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CateringMenuItemComponent_div_0_div_1_Template, 1, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, CateringMenuItemComponent_div_0_div_8_Template, 3, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CateringMenuItemComponent_div_0_div_9_Template, 2, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CateringMenuItemComponent_div_0_div_10_Template, 7, 2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CateringMenuItemComponent_div_0_div_11_Template, 3, 4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function CateringMenuItemComponent_div_0_Template_button_tapped_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.show_children = !ctx_r9.show_children; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("subitem", ctx_r0.subitem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.subitem);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.item.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx_r0.item.package ? "[Package] " : "", "", ctx_r0.item.description, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.package && ctx_r0.item.items.length && !ctx_r0.item.must_select);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.package && ctx_r0.item.must_select && ctx_r0.item.amount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.item.unit_price);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("hide", !(ctx_r0.item.items && ctx_r0.item.items.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](16, _c1, ctx_r0.show_children ? "keyboard_arrow_up" : "keyboard_arrow_down"));
} }
function CateringMenuItemComponent_a_catering_menu_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a-catering-menu-item", 26);
} if (rf & 2) {
    const sub_item_r11 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("subitem", true)("symbol", ctx_r1.symbol)("parent", ctx_r1.item)("item", sub_item_r11);
} }
const _c2 = function () { return { class: "material-icons", content: "add" }; };
function CateringMenuItemComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function CateringMenuItemComponent_ng_container_5_Template_button_tapped_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.openGroupModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function CateringMenuItemComponent_ng_container_5_Template_button_tapped_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.openItemModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Add Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2));
} }
const _c3 = function () { return { class: "material-icons", content: "edit" }; };
const _c4 = function () { return { class: "material-icons", content: "delete" }; };
class CateringMenuItemComponent {
    constructor(_dialog, _service) {
        this._dialog = _dialog;
        this._service = _service;
    }
    /** Currently active building */
    get building() {
        return this._service.Organisation.building;
    }
    openGroupModal(group) {
        /* istanbul ignore else */
        if (!group) {
            group = new src_app_services_data_catering_catering_category_class__WEBPACK_IMPORTED_MODULE_1__["CateringCategory"]({ parent_id: this.item.id, zones: [this.building.id] });
        }
        this._dialog.open(_overlays_group_modal_group_modal_component__WEBPACK_IMPORTED_MODULE_3__["CateringGroupModalComponent"], {
            data: { group, parent: group.id ? this.parent : this.item },
        });
    }
    openItemModal(item) {
        /* istanbul ignore else */
        if (!item) {
            item = new src_app_services_data_catering_catering_item_class__WEBPACK_IMPORTED_MODULE_4__["CateringItem"]({ parent_id: this.item.id });
        }
        this._dialog.open(_overlays_item_modal_item_modal_component__WEBPACK_IMPORTED_MODULE_7__["CateringItemModalComponent"], {
            data: { item, parent: item.id ? this.parent : this.item },
        });
    }
    deleteItem() {
        const type = this.item instanceof _catering_component__WEBPACK_IMPORTED_MODULE_6__["CateringComponent"]
            ? this.item.package
                ? 'Package'
                : 'Sub-category'
            : 'Item';
        const ref = this._dialog.open(src_app_overlays_confirm_modal_confirm_modal_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmModalComponent"], {
            data: {
                title: `Delete catering ${type}`,
                content: `Are you sure you want to delete the catering ${type} "${this.item.name}"?<br />${this.item instanceof src_app_services_data_catering_catering_category_class__WEBPACK_IMPORTED_MODULE_1__["CateringCategory"]
                    ? 'Any children items or groups will be <strong>immediately</strong> deleted'
                    : ''}`,
                icon: { type: 'icon', class: 'material-icons', content: 'delete' },
                action: 'Ok',
            },
        });
        ref.componentInstance.event.subscribe((event) => {
            /* istanbul ignore else */
            if (event.reason === 'done') {
                ref.componentInstance.loading = `Deleting ${type}...`;
            }
        });
    }
}
CateringMenuItemComponent.ɵfac = function CateringMenuItemComponent_Factory(t) { return new (t || CateringMenuItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"])); };
CateringMenuItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringMenuItemComponent, selectors: [["a-catering-menu-item"]], inputs: { subitem: "subitem", item: "item", parent: "parent", symbol: "symbol", disabled: "disabled" }, decls: 16, vars: 10, consts: [["class", "catering-item", 3, "subitem", 4, "ngIf"], [1, "children"], [3, "subitem", "symbol", "parent", "item", 4, "ngFor", "ngForOf"], ["appMenu", "matMenu"], [4, "ngIf"], ["mat-menu-item", "", "name", "edit", 3, "tapped"], [1, "group"], [3, "icon"], [1, "text"], ["mat-menu-item", "", "name", "delete", 1, "delete", 3, "tapped"], [1, "catering-item"], ["class", "image", 3, "background-image", 4, "ngIf"], [1, "details"], [1, "name"], [1, "description"], [1, "options"], ["class", "option price mobile-only", 4, "ngIf"], ["class", "option", 4, "ngIf"], ["class", "option price not-mobile", 4, "ngIf"], ["mat-icon-button", "", "name", "more", 3, "matMenuTriggerFor"], ["mat-icon-button", "", "name", "show-children", 3, "tapped"], [1, "image"], [1, "option", "price", "mobile-only"], [1, "option"], [1, "not-mobile"], [1, "option", "price", "not-mobile"], [3, "subitem", "symbol", "parent", "item"], ["mat-menu-item", "", "name", "add-group", 3, "tapped"], ["mat-menu-item", "", "name", "add-item", 3, "tapped"]], template: function CateringMenuItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CateringMenuItemComponent_div_0_Template, 16, 18, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CateringMenuItemComponent_a_catering_menu_item_2_Template, 1, 4, "a-catering-menu-item", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-menu", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CateringMenuItemComponent_ng_container_5_Template, 11, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function CateringMenuItemComponent_Template_button_tapped_6_listener() { return ctx.item.items ? ctx.openGroupModal(ctx.item) : ctx.openItemModal(ctx.item); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function CateringMenuItemComponent_Template_button_tapped_11_listener() { return ctx.deleteItem(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@show", ctx.show_children ? "show" : "hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.item.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.item.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edit ", ctx.item.items ? ctx.item.package ? "Package" : "Sub-category" : "item", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Delete ", ctx.item.items ? ctx.item.package ? "Package" : "Sub-category" : "item", "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuItem"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_12__["ɵb"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_13__["IconComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_14__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuTrigger"], CateringMenuItemComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["CurrencyPipe"]], styles: [".catering-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem;\n}\n.subitem[_ngcontent-%COMP%] {\n  border-top: 1px solid #ccc;\n}\n.name[_ngcontent-%COMP%] {\n  max-width: 480px;\n}\n.image[_ngcontent-%COMP%] {\n  height: 3em;\n  width: 3em;\n  min-width: 3em;\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, 0.05);\n  background-position: center;\n  background-size: cover;\n  border: 1px solid rgba(0, 0, 0, 0.05);\n}\n.details[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 25%;\n  padding: 0 0.5em;\n  display: flex;\n  flex-direction: column;\n}\n.details[_ngcontent-%COMP%]   *[_ngcontent-%COMP%]    >  {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.options[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 0.8em;\n  height: 1.5em;\n  color: rgba(0, 0, 0, 0.85);\n  line-height: 1em;\n  padding: 0 0.25em;\n  text-decoration: underline;\n}\n.option[_ngcontent-%COMP%] {\n  padding: 0.25em 0.5em;\n  border-radius: 4px;\n  color: #fff;\n  font-size: 0.8rem;\n  background-color: #1937ea;\n  margin: 0.25em;\n  margin-right: 0.4rem;\n  margin-left: 0;\n  white-space: nowrap;\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 0.75em;\n  margin-top: 0.25em;\n}\n.children[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n  background-color: rgba(0, 0, 0, 0.05);\n}\n.group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.hide[_ngcontent-%COMP%] {\n  opacity: 0;\n  pointer-events: none;\n}\n.delete[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvbWVudS9pdGVtL2l0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL2NhdGVyaW5nL21lbnUvaXRlbS9pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQWdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQzVDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUNRSjtBRExBO0VBQ0ksMEJBQUE7QUNRSjtBRExBO0VBQ0ksZ0JBQUE7QUNRSjtBRExBO0VBQ0ksV0FBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQ0FBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtBQ1FKO0FETEE7RUFDSSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FDUUo7QUROSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQ1FSO0FESkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNPSjtBRExJO0VBQ0ksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUNPUjtBREhBO0VBQ0kscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHlCRDFDWTtFQzJDWixjQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNNSjtBREhBO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtBQ01KO0FESEE7RUFDSSxnQkFBQTtFQUNBLHFDQUFBO0FDTUo7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ01KO0FESEE7RUFDSSxVQUFBO0VBQ0Esb0JBQUE7QUNNSjtBREZJO0VBQ0ksY0QzRUE7QUVnRlIiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9jYXRlcmluZy9tZW51L2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogI2YwZjBmMDtcbiRmb290ZXItYmFjazogIzI2MzIzODtcblxuJGNvbG9yLXRlcm5hcnk6ICMwNTFjMmM7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuLmNhdGVyaW5nLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG59XG5cbi5zdWJpdGVtIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbn1cblxuLm5hbWUge1xuICAgIG1heC13aWR0aDogNDgwcHg7XG59XG5cbi5pbWFnZSB7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgd2lkdGg6IDNlbTtcbiAgICBtaW4td2lkdGg6IDNlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLCAwLjA1KTtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKCMwMDAsIDAuMDUpO1xufVxuXG4uZGV0YWlscyB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDI1JTtcbiAgICBwYWRkaW5nOiAwIDAuNWVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICogPiB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cbn1cblxuLm9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgY29sb3I6IHJnYmEoIzAwMCwgMC44NSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XG4gICAgICAgIHBhZGRpbmc6IDAgMC4yNWVtO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB9XG59XG5cbi5vcHRpb24ge1xuICAgIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgbWFyZ2luOiAwLjI1ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjRyZW07XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLmRlc2NyaXB0aW9uIHtcbiAgICBmb250LXNpemU6IDAuNzVlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjI1ZW07XG59XG5cbi5jaGlsZHJlbiB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsIDAuMDUpO1xufVxuXG4uZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmhpZGUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5kZWxldGUge1xuICAgIGFwcC1pY29uIHtcbiAgICAgICAgY29sb3I6ICRlcnJvcjtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uY2F0ZXJpbmctaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbn1cblxuLnN1Yml0ZW0ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2NjYztcbn1cblxuLm5hbWUge1xuICBtYXgtd2lkdGg6IDQ4MHB4O1xufVxuXG4uaW1hZ2Uge1xuICBoZWlnaHQ6IDNlbTtcbiAgd2lkdGg6IDNlbTtcbiAgbWluLXdpZHRoOiAzZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuXG4uZGV0YWlscyB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMjUlO1xuICBwYWRkaW5nOiAwIDAuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLmRldGFpbHMgKiA+IHtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbi5vcHRpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5vcHRpb25zIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgaGVpZ2h0OiAxLjVlbTtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NSk7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBhZGRpbmc6IDAgMC4yNWVtO1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuLm9wdGlvbiB7XG4gIHBhZGRpbmc6IDAuMjVlbSAwLjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAwLjhyZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTM3ZWE7XG4gIG1hcmdpbjogMC4yNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNHJlbTtcbiAgbWFyZ2luLWxlZnQ6IDA7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMC43NWVtO1xuICBtYXJnaW4tdG9wOiAwLjI1ZW07XG59XG5cbi5jaGlsZHJlbiB7XG4gIGZvbnQtc2l6ZTogMC45ZW07XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG59XG5cbi5ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5oaWRlIHtcbiAgb3BhY2l0eTogMDtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5kZWxldGUgYXBwLWljb24ge1xuICBjb2xvcjogI2U1MzkzNTtcbn0iXX0= */"], data: { animation: [src_app_shared_globals_angular_animations__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_SHOW_CONTRACT_EXPAND"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringMenuItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-catering-menu-item',
                templateUrl: './item.component.html',
                styleUrls: ['./item.component.scss'],
                animations: [src_app_shared_globals_angular_animations__WEBPACK_IMPORTED_MODULE_2__["ANIMATION_SHOW_CONTRACT_EXPAND"]],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] }, { type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"] }]; }, { subitem: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], item: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], parent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], symbol: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], disabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/catering/menu/menu.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/shell/catering/menu/menu.component.ts ***!
  \*******************************************************/
/*! exports provided: CateringMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringMenuComponent", function() { return CateringMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var src_app_services_data_catering_catering_category_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data/catering/catering-category.class */ "./src/app/services/data/catering/catering-category.class.ts");
/* harmony import */ var _overlays_category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../overlays/category-modal/category-modal.component */ "./src/app/shell/catering/overlays/category-modal/category-modal.component.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js");
/* harmony import */ var _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./item-list/item-list.component */ "./src/app/shell/catering/menu/item-list/item-list.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");














const _c0 = function () { return { class: "material-icons", content: "edit" }; };
function CateringMenuComponent_ng_container_1_mat_tab_group_1_mat_tab_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CateringMenuComponent_ng_container_1_mat_tab_group_1_mat_tab_1_ng_template_1_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); return $event.stopPropagation(); })("tapped", function CateringMenuComponent_ng_container_1_mat_tab_group_1_mat_tab_1_ng_template_1_Template_button_tapped_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const category_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r12.openCategoryModal(category_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](category_r7 == null ? null : category_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
} }
function CateringMenuComponent_ng_container_1_mat_tab_group_1_mat_tab_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CateringMenuComponent_ng_container_1_mat_tab_group_1_mat_tab_1_ng_template_1_Template, 5, 3, "ng-template", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "a-catering-menu-item-list", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const category_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("package", ctx_r6.state[i_r8])("category", category_r7);
} }
function CateringMenuComponent_ng_container_1_mat_tab_group_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-tab-group", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectedIndexChange", function CateringMenuComponent_ng_container_1_mat_tab_group_1_Template_mat_tab_group_selectedIndexChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r15.index = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CateringMenuComponent_ng_container_1_mat_tab_group_1_mat_tab_1_Template, 3, 2, "mat-tab", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("selectedIndex", ctx_r5.index);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.filtered_menu);
} }
function CateringMenuComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CateringMenuComponent_ng_container_1_mat_tab_group_1_Template, 2, 2, "mat-tab-group", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.filtered_menu && ctx_r0.filtered_menu.length)("ngIfElse", _r3);
} }
function CateringMenuComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mat-spinner", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Loading menu for ", ctx_r2.building.name, "");
} }
const _c1 = function () { return { class: "material-icons", content: "close" }; };
function CateringMenuComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No menu categories for ", ctx_r4.building.name, "");
} }
class CateringMenuComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_1__["BaseDirective"] {
    constructor(_service, _dialog) {
        super();
        this._service = _service;
        this._dialog = _dialog;
        /** Emitter for changes to the length of catering categories */
        this.length = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** List of top level catering categories */
        this.catering_menu = [];
        /** Filtered list of top level catering categories */
        this.filtered_menu = [];
        /** Index of the active tab */
        this.index = 0;
        /** Map of indexes to package open state */
        this.state = {};
    }
    /** Currently active building */
    get building() {
        return this._service.Organisation.building;
    }
    ngOnInit() {
        this.subscription('building', this._service.Organisation.listen('active_building').subscribe((_) => {
            this.index = 0;
            this.catering_menu = [];
            this.filtered_menu = [];
            this.loadCateringMenu();
        }));
    }
    ngOnChanges(changes) {
        if (changes.search) {
            this.filtered_menu = this.filter(this.catering_menu);
        }
        if (changes.category && this.category) {
            this.openCategoryModal();
        }
        if (changes.package) {
            this.state[this.index] = this.package;
        }
    }
    openCategoryModal(category) {
        /* istanbul ignore else */
        if (!category) {
            category = new src_app_services_data_catering_catering_category_class__WEBPACK_IMPORTED_MODULE_2__["CateringCategory"]({ zones: [this.building.id] });
        }
        const ref = this._dialog.open(_overlays_category_modal_category_modal_component__WEBPACK_IMPORTED_MODULE_3__["CateringCategoryModalComponent"], { data: { category } });
        this.subscription('category_modal', ref.componentInstance.event.subscribe((event) => {
            /* istanbul ignore else */
            if (event.reason === 'done') {
                const index = this.catering_menu.findIndex(item => event.metadata.id === item.id);
                if (index >= 0) {
                    this.catering_menu.splice(index, 1, event.metadata);
                    this.index = index;
                }
                else {
                    this.index = this.catering_menu.length;
                    this.catering_menu.push(event.metadata);
                }
            }
        }));
    }
    loadCateringMenu() {
        /* istanbul ignore else */
        if (this.building) {
            this.loading = true;
            this._service.Menu.query({ zone_id: this.building.id }).then((menu) => {
                this.catering_menu = (menu || []).map((item) => new src_app_services_data_catering_catering_category_class__WEBPACK_IMPORTED_MODULE_2__["CateringCategory"](item));
                this.length.emit(this.catering_menu.length);
                this.filtered_menu = this.filter(this.catering_menu);
                this.loading = false;
            }, (err) => {
                this._service.notifyError(`Error loading menu for ${this.building.name}. Error: ${err.message | err}`, 'Retry', () => this.loadCateringMenu());
                this.loading = false;
            });
        }
    }
    /** Filter the list of catering items */
    filter(list) {
        return list;
    }
}
CateringMenuComponent.ɵfac = function CateringMenuComponent_Factory(t) { return new (t || CateringMenuComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"])); };
CateringMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringMenuComponent, selectors: [["a-catering-menu"]], inputs: { search: "search", category: "category", package: "package" }, outputs: { length: "length" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 2, consts: [[1, "menu", "page", "dark-mode"], [4, "ngIf", "ngIfElse"], ["load_state", ""], ["empty_state", ""], [3, "selectedIndex", "selectedIndexChange", 4, "ngIf", "ngIfElse"], [3, "selectedIndex", "selectedIndexChange"], [4, "ngFor", "ngForOf"], ["mat-tab-label", ""], [3, "package", "category"], [1, "tab-label"], [1, "label"], ["mat-icon-button", "", "name", "edit", 3, "click", "tapped"], [3, "icon"], [1, "info-block", "center"], [1, "icon"], ["diameter", "32"], [1, "text"]], template: function CateringMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CateringMenuComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CateringMenuComponent_ng_template_2_Template, 5, 1, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CateringMenuComponent_ng_template_4_Template, 5, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabGroup"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTab"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabLabel"], _item_list_item_list_component__WEBPACK_IMPORTED_MODULE_8__["CateringMenuItemListComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_11__["IconComponent"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_12__["MatSpinner"]], styles: ["[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n.page[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\nmat-tab-group[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #051c2c;\n}\n.info-block[_ngcontent-%COMP%] {\n  color: #000;\n}\n.tab-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding-left: 2.75em;\n}\n.tab-label[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0.5em;\n}\n.tab-label[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.tab-label[_ngcontent-%COMP%]:hover   button[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvbWVudS9tZW51LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9jYXRlcmluZy9tZW51L21lbnUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBZ0NBOztjQUFBO0FBYUE7O3NCQUFBO0FDNUNBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNRSjtBRExBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNRSjtBRExBO0VBQ0ksWUFBQTtFQUNBLHlCRGlCWTtBRVRoQjtBRExBO0VBQ0ksV0RiUTtBRXFCWjtBRExBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUNRSjtBRE5JO0VBQ0ksYUFBQTtBQ1FSO0FETEk7RUFDSSxVQUFBO0FDT1I7QURIUTtFQUNJLFVBQUE7QUNLWiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2NhdGVyaW5nL21lbnUvbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogI2YwZjBmMDtcbiRmb290ZXItYmFjazogIzI2MzIzODtcblxuJGNvbG9yLXRlcm5hcnk6ICMwNTFjMmM7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiQGltcG9ydCAndmFyaWFibGVzJztcblxuOmhvc3Qge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnBhZ2Uge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxubWF0LXRhYi1ncm91cCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvci10ZXJuYXJ5O1xufVxuXG4uaW5mby1ibG9jayB7XG4gICAgY29sb3I6ICRmb250LWRhcms7XG59XG5cbi50YWItbGFiZWwge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNzVlbTtcblxuICAgIGxhYmVsIHtcbiAgICAgICAgbWFyZ2luOiAuNWVtO1xuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuOmhvc3Qge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGFnZSB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC10YWItZ3JvdXAge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwNTFjMmM7XG59XG5cbi5pbmZvLWJsb2NrIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi50YWItbGFiZWwge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDIuNzVlbTtcbn1cbi50YWItbGFiZWwgbGFiZWwge1xuICBtYXJnaW46IDAuNWVtO1xufVxuLnRhYi1sYWJlbCBidXR0b24ge1xuICBvcGFjaXR5OiAwO1xufVxuLnRhYi1sYWJlbDpob3ZlciBidXR0b24ge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-catering-menu',
                templateUrl: './menu.component.html',
                styleUrls: ['./menu.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_4__["ApplicationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }]; }, { search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], category: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], package: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], length: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/catering/orders/item/item.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/shell/catering/orders/item/item.component.ts ***!
  \**************************************************************/
/*! exports provided: CateringOrdersItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringOrdersItemComponent", function() { return CateringOrdersItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_data_catering_catering_order_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data/catering/catering-order.class */ "./src/app/services/data/catering/catering-order.class.ts");
/* harmony import */ var src_app_shared_globals_angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/globals/angular-animations */ "./src/app/shared/globals/angular-animations.ts");
/* harmony import */ var _overlays_order_details_modal_order_details_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../overlays/order-details-modal/order-details-modal.component */ "./src/app/shell/catering/overlays/order-details-modal/order-details-modal.component.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
















function CateringOrdersItemComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "(K)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Kitchen");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CateringOrdersItemComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "(P)");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Pantry");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} }
function CateringOrdersItemComponent_mat_form_field_14_app_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-icon", 3);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r5.status_details == null ? null : ctx_r5.status_details.icon);
} }
function CateringOrdersItemComponent_mat_form_field_14_mat_spinner_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 26);
} }
function CateringOrdersItemComponent_mat_form_field_14_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", status_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](status_r8.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", status_r8.colour);
} }
function CateringOrdersItemComponent_mat_form_field_14_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function CateringOrdersItemComponent_mat_form_field_14_Template_mat_select_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r9.active_status = $event; })("valueChange", function CateringOrdersItemComponent_mat_form_field_14_Template_mat_select_valueChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r11.updateStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, CateringOrdersItemComponent_mat_form_field_14_app_icon_7_Template, 1, 1, "app-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, CateringOrdersItemComponent_mat_form_field_14_mat_spinner_8_Template, 1, 0, "mat-spinner", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CateringOrdersItemComponent_mat_form_field_14_mat_option_11_Template, 5, 4, "mat-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r2.active_status)("disabled", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r2.loading ? "#eee" : ctx_r2.status_details == null ? null : ctx_r2.status_details.colour);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r2.status_details == null ? null : ctx_r2.status_details.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r2.statuses);
} }
const _c0 = function () { return { class: "material-icons", content: "local_pizza" }; };
function CateringOrdersItemComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("not-match", ctx_r3.search && !ctx_r3.search_matches[item_r12.id]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("x ", item_r12.amount, "");
} }
const _c1 = function () { return { class: "material-icons", content: "room_service" }; };
const _c2 = function () { return { class: "material-icons", content: "visibility" }; };
const _c3 = function (a1) { return { class: "material-icons", content: a1 }; };
class CateringOrdersItemComponent {
    constructor(_service, _dialog) {
        this._service = _service;
        this._dialog = _dialog;
        this.statuses = [
            { id: 'accepted', name: 'Accepted', icon: { class: 'custom-accepted' }, colour: '#3996B6' },
            {
                id: 'preparing',
                name: 'Preparing',
                icon: { class: 'custom-preparing' },
                colour: '#E7536B',
            },
            { id: 'ready', name: 'Ready', icon: { class: 'custom-ready' }, colour: '#FFD028' },
            {
                id: 'delivered',
                name: 'Delivered',
                icon: { class: 'custom-delivered' },
                colour: '#75BB43',
            },
            {
                id: 'cancelled',
                name: 'Cancelled',
                icon: { class: 'custom-cancelled' },
                colour: '#747474',
            },
        ];
    }
    get search_matches() {
        const map = {};
        const filter = this.search.toLowerCase();
        this.order.items.forEach(item => {
            map[item.id] = item.name.toLowerCase().indexOf(filter) >= 0;
        });
        return map;
    }
    /** Details for the active status */
    get status_details() {
        return this.statuses.find((status) => status.id === this.active_status) || {};
    }
    get space() {
        return this._service.Spaces.find(this.order.location_id);
    }
    ngOnChanges(changes) {
        /* istanbul ignore else */
        if (changes.order && this.order) {
            this.active_status = this.order.status;
        }
    }
    /** Update the status of the order in the booking */
    updateStatus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const booking = this.order.booking;
            /* istanbul ignore else */
            if (booking) {
                this.loading = true;
                const catering = [...booking.catering];
                catering.splice(catering.findIndex((order) => order.id === this.order.id), 1, new src_app_services_data_catering_catering_order_class__WEBPACK_IMPORTED_MODULE_2__["CateringOrder"](Object.assign(Object.assign({}, this.order), { status: this.active_status })));
                booking.storePendingChange('catering', catering);
                yield booking.save().catch((err) => {
                    this._service.notifyError(`Error updating order status. Error: ${err.message || err}`);
                    this.active_status = this.order.status;
                    this.loading = false;
                });
                this.loading = false;
            }
        });
    }
    /** Open modal to view catering order details */
    viewOrderDetails() {
        this._dialog.open(_overlays_order_details_modal_order_details_modal_component__WEBPACK_IMPORTED_MODULE_4__["OrderDetailsModalComponent"], {
            maxHeight: '95vh',
            maxWidth: '95vw',
            data: {
                order: this.order,
                booking: this.order.booking
            }
        });
    }
}
CateringOrdersItemComponent.ɵfac = function CateringOrdersItemComponent_Factory(t) { return new (t || CateringOrdersItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"])); };
CateringOrdersItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CateringOrdersItemComponent, selectors: [["a-catering-orders-item"]], inputs: { order: "order", search: "search" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 23, vars: 21, consts: [[1, "order"], [1, "details"], [1, "icon"], [3, "icon"], [1, "time"], [1, "location"], [1, "host"], [1, "package-type"], [4, "ngIf"], [1, "status"], ["class", "rounded visible", "appearance", "outline", 4, "ngIf"], ["mat-icon-button", "", "name", "view", 3, "tapped"], [1, "more"], ["mat-icon-button", "", "name", "more", 3, "tapped"], [1, "list"], [1, "bar"], ["class", "item", 3, "not-match", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "rounded", "visible"], ["placeholder", "New Order", 3, "value", "disabled", "valueChange"], ["select", ""], [1, "group"], [1, "wrapper"], [3, "icon", 4, "ngIf"], ["diameter", "16", 4, "ngIf"], [1, "text"], [3, "value", 4, "ngFor", "ngForOf"], ["diameter", "16"], [3, "value"], [1, "colour"], [1, "item"], [1, "item-details"], [1, "name"], [1, "quanity"]], template: function CateringOrdersItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, CateringOrdersItemComponent_ng_container_11_Template, 5, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, CateringOrdersItemComponent_ng_container_12_Template, 4, 0, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, CateringOrdersItemComponent_mat_form_field_14_Template, 12, 8, "mat-form-field", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tapped", function CateringOrdersItemComponent_Template_button_tapped_15_listener() { return ctx.viewOrderDetails(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tapped", function CateringOrdersItemComponent_Template_button_tapped_18_listener() { return ctx.show_items = !ctx.show_items; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "app-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, CateringOrdersItemComponent_div_22_Template, 9, 6, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("showing", ctx.show_items || ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("showing", ctx.show_items)("not-match", ctx.search);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.order.deliver_at_time);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.order.location || (ctx.space == null ? null : ctx.space.name));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.order.booking == null ? null : ctx.order.booking.organiser.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.order.kitchen);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.order.pantry);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.statuses && ctx.statuses.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c3, ctx.show_items ? "keyboard_arrow_down" : "keyboard_arrow_right"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@show", ctx.show_items || ctx.search ? "show" : "hide");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.order.items);
    } }, directives: [_shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_7__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_10__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelectTrigger"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"]], styles: ["[_nghost-%COMP%], .order[_ngcontent-%COMP%] {\n  width: 100%;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  background-color: #fff;\n  transition: background-color 200ms;\n}\n.showing[_nghost-%COMP%], .order.showing[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n}\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5em 0.25em;\n}\n.details.showing[_ngcontent-%COMP%]   .more[_ngcontent-%COMP%] {\n  color: #1937ea;\n}\n.details[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 0.5em;\n}\n.details[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #ccc;\n  border: none;\n  z-index: 2;\n}\n.details[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n.details[_ngcontent-%COMP%]   .host[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n.details[_ngcontent-%COMP%]   .package-type[_ngcontent-%COMP%] {\n  width: 6.5rem;\n}\n.details[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  width: 11rem;\n}\n.not-match[_ngcontent-%COMP%] {\n  opacity: 0.35;\n}\n.status[_ngcontent-%COMP%] {\n  height: 3.5em;\n  padding: 0 !important;\n  margin-right: 0.5em;\n}\n.status[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  border-radius: 100%;\n}\n.status[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  height: 0.5em;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.mat-active[_ngcontent-%COMP%] {\n  color: #1937ea;\n}\n.group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.group[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.group[_ngcontent-%COMP%]   .colour[_ngcontent-%COMP%] {\n  position: relative;\n  left: -8px;\n  height: 8px;\n  width: 8px;\n  border-radius: 100%;\n  transition: height 200ms, width 200ms;\n  transform: translateX(50%);\n}\n.group[_ngcontent-%COMP%]:hover   .colour[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}\n.group[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1em;\n  width: 1em;\n  margin-right: 0.75em;\n  background-color: none;\n  color: #fff;\n}\n.group[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  height: 1.5em;\n  min-width: 1.5em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  margin-top: 4px;\n}\n.group[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n.list[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n}\n.list[_ngcontent-%COMP%]    > .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #aaa;\n  width: 2px;\n  top: -1em;\n  bottom: 1.3em;\n  left: 1.7em;\n}\n.location[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 1em;\n  font-weight: 400;\n}\n.item[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-size: 0.9em;\n  padding-left: 3em;\n  margin-bottom: 0.5em;\n}\n.item[_ngcontent-%COMP%]:last-child   .item-details[_ngcontent-%COMP%] {\n  border: none;\n}\n.item[_ngcontent-%COMP%]    > .bar[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: #aaa;\n  height: 2px;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 1.9em;\n  width: 0.75em;\n  padding: 0;\n}\n.package-type[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #1937ea;\n}\n.item-details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex: 1;\n  min-width: 50%;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  height: 3em;\n  padding-right: 4.25em;\n}\n.item-details[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 0.5em;\n  padding-left: 0;\n}\n.name[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 1em;\n}\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2em;\n  width: 2em;\n  margin-right: 0.5em;\n  border-radius: 100%;\n  border: 2px dotted rgba(0, 0, 0, 0.6);\n  color: rgba(0, 0, 0, 0.6);\n  font-size: 1.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3JkZXJzL2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3JkZXJzL2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7MEJBQUE7QUFnQ0E7O2NBQUE7QUFhQTs7c0JBQUE7QUMzQ0E7O0VBRUksV0FBQTtFQUNBLDJDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQ0FBQTtBQ09KO0FETEk7O0VBQ0kseUJBQUE7QUNRUjtBREpBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7QUNPSjtBREhRO0VBQ0ksY0RISTtBRVFoQjtBRERJO0VBQ0ksY0FBQTtBQ0dSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNFUjtBRENJO0VBQ0ksV0FBQTtBQ0NSO0FERUk7RUFDSSxZQUFBO0FDQVI7QURHSTtFQUNJLGFBQUE7QUNEUjtBRElJO0VBQ0ksWUFBQTtBQ0ZSO0FETUE7RUFDSSxhQUFBO0FDSEo7QURNQTtFQUNJLGFBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDSEo7QURLSTtFQUNJLG1CQUFBO0FDSFI7QURNSTtFQUNJLGFBQUE7QUNKUjtBRFFBO0VBQ0ksV0FBQTtBQ0xKO0FEU0E7RUFDSSxjRDNEWTtBRXFEaEI7QURTQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ05KO0FEUUk7RUFDSSxPQUFBO0FDTlI7QURTSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0FDUFI7QURXUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDVFo7QURhSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ1hSO0FEYVE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ1haO0FEY1E7RUFDSSxnQkFBQTtBQ1paO0FEaUJBO0VBQ0ksa0JBQUE7RUFDQSxVQUFBO0FDZEo7QURlSTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FDYlI7QURpQkE7RUFDSSxPQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FDZEo7QURpQkE7RUFDSSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ2RKO0FEaUJRO0VBQ0ksWUFBQTtBQ2ZaO0FEbUJJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUNqQlI7QURzQkk7RUFDSSxjRGhLUTtBRTZJaEI7QUR1QkE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsY0FBQTtFQUNBLDJDQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FDcEJKO0FEc0JJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNwQlI7QUR3QkE7RUFDSSxPQUFBO0VBQ0EsY0FBQTtBQ3JCSjtBRHdCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDckJKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3JkZXJzL2l0ZW0vaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogI2YwZjBmMDtcbiRmb290ZXItYmFjazogIzI2MzIzODtcblxuJGNvbG9yLXRlcm5hcnk6ICMwNTFjMmM7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG46aG9zdCxcbi5vcmRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIzAwMCwgLjEpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcblxuICAgICYuc2hvd2luZyB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgfVxufVxuXG4uZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IC41ZW0gLjI1ZW07XG5cbiAgICAmLnNob3dpbmcge1xuXG4gICAgICAgIC5tb3JlIHtcbiAgICAgICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgID4gKiB7XG4gICAgICAgIHBhZGRpbmc6IC41ZW07XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICB9XG5cbiAgICAudGltZSB7XG4gICAgICAgIHdpZHRoOiA2cmVtO1xuICAgIH1cblxuICAgIC5ob3N0IHtcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgIH1cblxuICAgIC5wYWNrYWdlLXR5cGUge1xuICAgICAgICB3aWR0aDogNi41cmVtO1xuICAgIH1cblxuICAgIC5zdGF0dXMge1xuICAgICAgICB3aWR0aDogMTFyZW07XG4gICAgfVxufVxuXG4ubm90LW1hdGNoIHtcbiAgICBvcGFjaXR5OiAuMzU7XG59XG5cbi5zdGF0dXMge1xuICAgIGhlaWdodDogMy41ZW07XG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1yaWdodDogLjVlbTtcblxuICAgIGFwcC1pY29uIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIGhlaWdodDogLjVlbTtcbiAgICB9XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuXG4ubWF0LWFjdGl2ZSB7XG4gICAgY29sb3I6ICRjb2xvci1wcmltYXJ5O1xufVxuXG4uZ3JvdXAge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgIC50ZXh0IHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAuY29sb3VyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBsZWZ0OiAtOHB4O1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDIwMG1zLCB3aWR0aCAyMDBtcztcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgfVxuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIC5jb2xvdXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBoZWlnaHQ6IDFlbTtcbiAgICAgICAgd2lkdGg6IDFlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAuNzVlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgICAgICAgY29sb3I6ICNmZmY7XG5cbiAgICAgICAgLndyYXBwZXIge1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjVlbTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMS41ZW07XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcC1pY29uIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgID4gLmJhciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2FhYTtcbiAgICAgICAgd2lkdGg6IDJweDtcbiAgICAgICAgdG9wOiAtMWVtO1xuICAgICAgICBib3R0b206IDEuM2VtO1xuICAgICAgICBsZWZ0OiAxLjdlbTtcbiAgICB9XG59XG5cbi5sb2NhdGlvbiB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDFlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaXRlbSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IC45ZW07XG4gICAgcGFkZGluZy1sZWZ0OiAzZW07XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIC5pdGVtLWRldGFpbHMge1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgPiAuYmFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgbGVmdDogMS45ZW07XG4gICAgICAgIHdpZHRoOiAuNzVlbTtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59XG5cbi5wYWNrYWdlLXR5cGUge1xuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogJGNvbG9yLXByaW1hcnk7XG4gICAgfVxufVxuXG4uaXRlbS1kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgjMDAwLCAuMSk7XG4gICAgaGVpZ2h0OiAzZW07XG4gICAgcGFkZGluZy1yaWdodDogNC4yNWVtO1xuXG4gICAgPiAqIHtcbiAgICAgICAgcGFkZGluZzogLjVlbTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIH1cbn1cblxuLm5hbWUge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiAxZW07XG59XG5cbi5pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IC41ZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICBib3JkZXI6IDJweCBkb3R0ZWQgcmdiYSgjMDAwLCAuNik7XG4gICAgY29sb3I6IHJnYmEoIzAwMCwgLjYpO1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG46aG9zdCxcbi5vcmRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xufVxuOmhvc3Quc2hvd2luZyxcbi5vcmRlci5zaG93aW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cblxuLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiAwLjVlbSAwLjI1ZW07XG59XG4uZGV0YWlscy5zaG93aW5nIC5tb3JlIHtcbiAgY29sb3I6ICMxOTM3ZWE7XG59XG4uZGV0YWlscyA+ICoge1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cbi5kZXRhaWxzIC5pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xuICBib3JkZXI6IG5vbmU7XG4gIHotaW5kZXg6IDI7XG59XG4uZGV0YWlscyAudGltZSB7XG4gIHdpZHRoOiA2cmVtO1xufVxuLmRldGFpbHMgLmhvc3Qge1xuICB3aWR0aDogMTByZW07XG59XG4uZGV0YWlscyAucGFja2FnZS10eXBlIHtcbiAgd2lkdGg6IDYuNXJlbTtcbn1cbi5kZXRhaWxzIC5zdGF0dXMge1xuICB3aWR0aDogMTFyZW07XG59XG5cbi5ub3QtbWF0Y2gge1xuICBvcGFjaXR5OiAwLjM1O1xufVxuXG4uc3RhdHVzIHtcbiAgaGVpZ2h0OiAzLjVlbTtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xufVxuLnN0YXR1cyBhcHAtaWNvbiB7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG59XG4uc3RhdHVzIC5pY29uIHtcbiAgaGVpZ2h0OiAwLjVlbTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdC1hY3RpdmUge1xuICBjb2xvcjogIzE5MzdlYTtcbn1cblxuLmdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ncm91cCAudGV4dCB7XG4gIGZsZXg6IDE7XG59XG4uZ3JvdXAgLmNvbG91ciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLThweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHRyYW5zaXRpb246IGhlaWdodCAyMDBtcywgd2lkdGggMjAwbXM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xufVxuLmdyb3VwOmhvdmVyIC5jb2xvdXIge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuLmdyb3VwIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNzVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uZ3JvdXAgLmljb24gLndyYXBwZXIge1xuICBoZWlnaHQ6IDEuNWVtO1xuICBtaW4td2lkdGg6IDEuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLmdyb3VwIC5pY29uIGFwcC1pY29uIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLmxpc3Qge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4ubGlzdCA+IC5iYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhYWE7XG4gIHdpZHRoOiAycHg7XG4gIHRvcDogLTFlbTtcbiAgYm90dG9tOiAxLjNlbTtcbiAgbGVmdDogMS43ZW07XG59XG5cbi5sb2NhdGlvbiB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMWVtO1xuICBmb250LXdlaWdodDogNDAwO1xufVxuXG4uaXRlbSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZm9udC1zaXplOiAwLjllbTtcbiAgcGFkZGluZy1sZWZ0OiAzZW07XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxuLml0ZW06bGFzdC1jaGlsZCAuaXRlbS1kZXRhaWxzIHtcbiAgYm9yZGVyOiBub25lO1xufVxuLml0ZW0gPiAuYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYWFhO1xuICBoZWlnaHQ6IDJweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgbGVmdDogMS45ZW07XG4gIHdpZHRoOiAwLjc1ZW07XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wYWNrYWdlLXR5cGUgc3BhbiB7XG4gIGNvbG9yOiAjMTkzN2VhO1xufVxuXG4uaXRlbS1kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA1MCU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIGhlaWdodDogM2VtO1xuICBwYWRkaW5nLXJpZ2h0OiA0LjI1ZW07XG59XG4uaXRlbS1kZXRhaWxzID4gKiB7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5uYW1lIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAxZW07XG59XG5cbi5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMmVtO1xuICB3aWR0aDogMmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3JkZXI6IDJweCBkb3R0ZWQgcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xuICBmb250LXNpemU6IDEuNWVtO1xufSJdfQ== */"], data: { animation: [src_app_shared_globals_angular_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_SHOW_CONTRACT_EXPAND"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CateringOrdersItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'a-catering-orders-item',
                templateUrl: './item.component.html',
                styleUrls: ['./item.component.scss'],
                animations: [src_app_shared_globals_angular_animations__WEBPACK_IMPORTED_MODULE_3__["ANIMATION_SHOW_CONTRACT_EXPAND"]],
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] }]; }, { order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/catering/orders/orders.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shell/catering/orders/orders.component.ts ***!
  \***********************************************************/
/*! exports provided: CateringOrdersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringOrdersComponent", function() { return CateringOrdersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_data_catering_catering_order_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data/catering/catering-order.class */ "./src/app/services/data/catering/catering-order.class.ts");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var src_app_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/utilities/general.utilities */ "./src/app/shared/utilities/general.utilities.ts");
/* harmony import */ var src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/data/bookings/booking.class */ "./src/app/services/data/bookings/booking.class.ts");
/* harmony import */ var _overlays_order_details_modal_order_details_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../overlays/order-details-modal/order-details-modal.component */ "./src/app/shell/catering/overlays/order-details-modal/order-details-modal.component.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
/* harmony import */ var _item_item_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./item/item.component */ "./src/app/shell/catering/orders/item/item.component.ts");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");

















function CateringOrdersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-progress-bar", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CateringOrdersComponent_ng_container_14_a_catering_orders_item_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "a-catering-orders-item", 15);
} if (rf & 2) {
    const order_r5 = ctx.$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("order", order_r5)("search", ctx_r4.search);
} }
function CateringOrdersComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CateringOrdersComponent_ng_container_14_a_catering_orders_item_2_Template, 1, 2, "a-catering-orders-item", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.filtered_orders)("ngForTrackBy", ctx_r1.trackByFn);
} }
const _c0 = function () { return { class: "material-icons", content: "close" }; };
function CateringOrdersComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("No catering orders for ", ctx_r3.date_display, "");
} }
class CateringOrdersComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_4__["BaseDirective"] {
    constructor(_service, _route, _dialog) {
        super();
        this._service = _service;
        this._route = _route;
        this._dialog = _dialog;
        /** Search filter string */
        this.search = '';
        /** List of catering orders for the selected date */
        this.orders = [];
        /** List of catering orders for the selected date */
        this.filtered_orders = [];
        /** List of space IDs for active building */
        this.available_spaces = [];
        /** Subject holding the value of the search */
        this.search$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
    /** Display string for the currenly selected date */
    get date_display() {
        const date = dayjs__WEBPACK_IMPORTED_MODULE_8__(this.date);
        return dayjs__WEBPACK_IMPORTED_MODULE_8__().isSame(date, 'd') ? 'Today' : date.format('DD MMM YYYY');
    }
    /** Active building */
    get building() {
        return this._service.Organisation.building;
    }
    ngOnInit() {
        this._service.Spaces.initialised.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["first"])((_) => _)).subscribe(() => {
            this.subscription('building', this._service.Organisation.listen('active_building').subscribe(() => {
                this.search$.next(`${this.date}|${this.building.id}`);
                this.available_spaces = this._service.Spaces.filter((space) => space.zones.indexOf(this.building.id) >= 0).map((i) => i.id);
            }));
            this.available_spaces = this._service.Spaces.filter((space) => space.zones.indexOf(this.building.id) >= 0).map((i) => i.id);
            this.initBookings();
            this.interval('update_bookings', () => this.search$.next(`${this.date}|${this.building.id}|${dayjs__WEBPACK_IMPORTED_MODULE_8__().unix()}`), 30 * 1000);
            this.search$.next(`${this.date}|${this.building.id}|${dayjs__WEBPACK_IMPORTED_MODULE_8__().unix()}`);
            this.subscription('route.query', this._route.queryParamMap.subscribe((params) => {
                /* istanbul ignore else */
                if (params.has('view')) {
                    const view_id = params.get('view');
                    const details = localStorage.getItem('CONCIERGE.view_order');
                    const booking_details = localStorage.getItem('CONCIERGE.view_booking');
                    /* istanbul ignore else */
                    if (details) {
                        const booking = new src_app_services_data_bookings_booking_class__WEBPACK_IMPORTED_MODULE_6__["Booking"](JSON.parse(booking_details));
                        const order = new src_app_services_data_catering_catering_order_class__WEBPACK_IMPORTED_MODULE_3__["CateringOrder"](JSON.parse(details));
                        order.booking = booking;
                        this.viewOrderDetails(order);
                        localStorage.removeItem('CONCIERGE.view_order');
                        localStorage.removeItem('CONCIERGE.view_booking');
                    }
                }
            }));
        });
    }
    ngOnChanges(changes) {
        /* istanbul ignore else */
        if (changes.date && this.building) {
            this.search$.next(`${this.date}|${this.building.id}`);
        }
        /* istanbul ignore else */
        if (changes.search) {
            this.filtered_orders = this.filter(this.orders, this.search);
        }
    }
    /* istanbul ignore next */
    trackByFn(index, order) {
        return order ? order.id : undefined;
    }
    /** Open modal to view catering order details */
    viewOrderDetails(order) {
        this._dialog.open(_overlays_order_details_modal_order_details_modal_component__WEBPACK_IMPORTED_MODULE_7__["OrderDetailsModalComponent"], {
            maxHeight: '95vh',
            maxWidth: '95vw',
            data: {
                order: order,
                booking: order.booking,
            },
        });
    }
    /**
     * Filter list to find matching items
     * @param list List of orders to filter
     * @param search Filter string
     */
    filter(list, search = '') {
        const filter = search.toLowerCase();
        return list.filter((order) => {
            return order.items.find((item) => item.name.toLowerCase().indexOf(filter) >= 0 ||
                (item.items &&
                    item.items.find((sub_item) => {
                        return (sub_item.name.toLowerCase().indexOf(filter) >= 0 ||
                            (sub_item.items &&
                                sub_item.items.find((sub_sub_item) => {
                                    return sub_sub_item.name.toLowerCase().indexOf(filter) >= 0;
                                })));
                    })));
        });
    }
    initBookings() {
        // Listen for input changes
        this.search_results$ = this.search$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(100), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((_) => {
            this.loading = true;
            const date = dayjs__WEBPACK_IMPORTED_MODULE_8__(this.date).startOf('d');
            return this._service.Spaces.query({
                zone_ids: this.building.id,
                available_from: date.unix(),
                available_to: date.endOf('d').unix(),
            });
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((_) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])([])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((space_list) => {
            let orders = [];
            space_list.forEach((space) => {
                space.bookings.forEach((booking) => {
                    const catering = booking.catering;
                    catering.forEach((order) => {
                        order.booking_date = booking.date;
                        order.booking = booking;
                    });
                    orders = orders.concat(booking.catering);
                });
            });
            orders = Object(src_app_shared_utilities_general_utilities__WEBPACK_IMPORTED_MODULE_5__["unique"])(orders, 'id');
            orders = orders.filter((order) => this.available_spaces.indexOf(order.location_id) >= 0);
            orders.sort((a, b) => a.booking_date +
                a.delivery_time * 60 * 1000 -
                (b.booking_date + b.delivery_time * 60 * 1000));
            return orders;
        }));
        // Process API results
        this.subscription('search_results', this.search_results$.subscribe((list) => {
            this.loading = false;
            this.orders = list;
            this.filtered_orders = this.filter(list, this.search);
        }));
    }
}
CateringOrdersComponent.ɵfac = function CateringOrdersComponent_Factory(t) { return new (t || CateringOrdersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"])); };
CateringOrdersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringOrdersComponent, selectors: [["a-catering-orders"]], inputs: { search: "search", date: "date" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 17, vars: 3, consts: [["class", "loader", 4, "ngIf"], [1, "heading"], [1, "icon"], [1, "time"], [1, "location"], [1, "host"], [1, "types"], [1, "state"], [1, "list"], [4, "ngIf", "ngIfElse"], ["empty_state", ""], [1, "loader"], ["mode", "indeterminate"], [1, "top-row"], [3, "order", "search", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "order", "search"], [1, "info-block", "center"], [3, "icon"], [1, "text"]], template: function CateringOrdersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CateringOrdersComponent_div_0_Template, 2, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Host");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Package Types");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, CateringOrdersComponent_ng_container_14_Template, 3, 2, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CateringOrdersComponent_ng_template_15_Template, 5, 3, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.filtered_orders && ctx.filtered_orders.length)("ngIfElse", _r2);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_13__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _item_item_component__WEBPACK_IMPORTED_MODULE_14__["CateringOrdersItemComponent"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_15__["IconComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  font-size: 0.9em;\n}\n\n.heading[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n  font-size: 0.8rem;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  width: 100%;\n  z-index: 1;\n}\n\n.heading[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  padding: 0.25em 0;\n  text-transform: capitalize;\n}\n\n.heading[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  width: 5em;\n}\n\n.heading[_ngcontent-%COMP%]   .time[_ngcontent-%COMP%] {\n  width: 6rem;\n}\n\n.heading[_ngcontent-%COMP%]   .host[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n\n.heading[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.heading[_ngcontent-%COMP%]   .types[_ngcontent-%COMP%] {\n  width: 6.25rem;\n}\n\n.heading[_ngcontent-%COMP%]   .state[_ngcontent-%COMP%] {\n  width: 17.5rem;\n}\n\n.list[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-height: 50%;\n  width: 100%;\n  overflow: auto;\n}\n\n.top-row[_ngcontent-%COMP%] {\n  display: flex;\n  position: -webkit-sticky;\n  position: sticky;\n  align-items: center;\n  top: 0;\n  width: 100%;\n}\n\n.loader[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 4px;\n  z-index: 999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3JkZXJzL29yZGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREVJO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtBQ0FSOztBREdJO0VBQ0ksVUFBQTtBQ0RSOztBRElJO0VBQ0ksV0FBQTtBQ0ZSOztBREtJO0VBQ0ksWUFBQTtBQ0hSOztBRE1JO0VBQ0ksT0FBQTtBQ0pSOztBRE9JO0VBQ0ksY0FBQTtBQ0xSOztBRFFJO0VBQ0ksY0FBQTtBQ05SOztBRFVBO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDUEo7O0FEVUE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFBQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUNQSjs7QURVQTtFQUNJLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNQSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2NhdGVyaW5nL29yZGVycy9vcmRlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAuOWVtO1xufVxuXG4uaGVhZGluZyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoIzAwMCwgLjEpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICA+ICoge1xuICAgICAgICBwYWRkaW5nOiAuMjVlbSAwO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICB9XG5cbiAgICAuaWNvbiB7XG4gICAgICAgIHdpZHRoOiA1ZW07XG4gICAgfVxuXG4gICAgLnRpbWUge1xuICAgICAgICB3aWR0aDogNnJlbTtcbiAgICB9XG5cbiAgICAuaG9zdCB7XG4gICAgICAgIHdpZHRoOiAxMHJlbTtcbiAgICB9XG5cbiAgICAubG9jYXRpb24ge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cblxuICAgIC50eXBlcyB7XG4gICAgICAgIHdpZHRoOiA2LjI1cmVtO1xuICAgIH1cblxuICAgIC5zdGF0ZSB7XG4gICAgICAgIHdpZHRoOiAxNy41cmVtO1xuICAgIH1cbn1cblxuLmxpc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi1oZWlnaHQ6IDUwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLnRvcC1yb3cge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHN0aWNreTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmxvYWRlciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLmhlYWRpbmcge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMTtcbn1cbi5oZWFkaW5nID4gKiB7XG4gIHBhZGRpbmc6IDAuMjVlbSAwO1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cbi5oZWFkaW5nIC5pY29uIHtcbiAgd2lkdGg6IDVlbTtcbn1cbi5oZWFkaW5nIC50aW1lIHtcbiAgd2lkdGg6IDZyZW07XG59XG4uaGVhZGluZyAuaG9zdCB7XG4gIHdpZHRoOiAxMHJlbTtcbn1cbi5oZWFkaW5nIC5sb2NhdGlvbiB7XG4gIGZsZXg6IDE7XG59XG4uaGVhZGluZyAudHlwZXMge1xuICB3aWR0aDogNi4yNXJlbTtcbn1cbi5oZWFkaW5nIC5zdGF0ZSB7XG4gIHdpZHRoOiAxNy41cmVtO1xufVxuXG4ubGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogNTAlO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi50b3Atcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHN0aWNreTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmxvYWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA0cHg7XG4gIHotaW5kZXg6IDk5OTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringOrdersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-catering-orders',
                templateUrl: './orders.component.html',
                styleUrls: ['./orders.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_9__["ApplicationService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialog"] }]; }, { search: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], date: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/catering/overlays/category-modal/category-modal.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shell/catering/overlays/category-modal/category-modal.component.ts ***!
  \************************************************************************************/
/*! exports provided: CateringCategoryModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringCategoryModalComponent", function() { return CateringCategoryModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! blob-util */ "./node_modules/blob-util/dist/blob-util.es.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _acaprojects_ngx_uploads__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acaprojects/ngx-uploads */ "./node_modules/@acaprojects/ngx-uploads/__ivy_ngcc__/fesm2015/acaprojects-ngx-uploads.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "./node_modules/@acaprojects/ngx-pipes/__ivy_ngcc__/fesm2015/acaprojects-ngx-pipes.js");


















const _c0 = function () { return { type: "icon", class: "material-icons", content: "close" }; };
function CateringCategoryModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return { class: "material-icons", content: "cloud_upload" }; };
function CateringCategoryModalComponent_main_5_form_1_app_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon", 6);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function CateringCategoryModalComponent_main_5_form_1_mat_spinner_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 19);
} }
function CateringCategoryModalComponent_main_5_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CateringCategoryModalComponent_main_5_form_1_app_icon_4_Template, 1, 2, "app-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CateringCategoryModalComponent_main_5_form_1_mat_spinner_5_Template, 1, 0, "mat-spinner", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CateringCategoryModalComponent_main_5_form_1_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.uploadImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "A valid name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-form-field", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 7, "linear-gradient(rgba(0,0,0,.35),rgba(0,0,0,.35)), url(" + ctx_r4.image + ")", "style"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.uploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.uploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r4.form.controls.name.errors && ctx_r4.form.controls.name.touched);
} }
function CateringCategoryModalComponent_main_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CateringCategoryModalComponent_main_5_form_1_Template, 21, 10, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.form);
} }
function CateringCategoryModalComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.loading);
} }
class CateringCategoryModalComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"] {
    constructor(_service, _upload_manager, _dialog_ref, _data) {
        super();
        this._service = _service;
        this._upload_manager = _upload_manager;
        this._dialog_ref = _dialog_ref;
        this._data = _data;
        /** Emitter for user action on the modal */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    get category() {
        return this._data.category;
    }
    get image() {
        return this.form.controls.image_path.value;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.description),
            image_path: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.image_path),
        });
    }
    submit() {
        this.form.markAllAsTouched();
        /* istanbul ignore else */
        if (this.form.valid) {
            const data = Object.assign(Object.assign({}, this.category.toJSON()), this.form.value);
            const request = this.category.id
                ? this._service.CateringCategories.update(this.category.id, data)
                : this._service.CateringCategories.add(data);
            request.then((item) => {
                this.event.emit({ reason: 'done', metadata: item });
                this._dialog_ref.close();
            }, (err) => this._service.notifyError(`Error ${this.category.id ? 'updating' : 'creating'} category. Error: ${err.message || err}`));
        }
    }
    /** Upload the image to the cloud */
    uploadImage(event) {
        /* istanbul ignore else */
        if (event && event.target && event.target.files) {
            const files = event.target.files;
            /* istanbul ignore else */
            if (files.length) {
                const fileReader = new FileReader();
                fileReader.addEventListener('loadend', (e) => {
                    this.uploading = true;
                    const arrayBuffer = e.target.result;
                    const blob = blob_util__WEBPACK_IMPORTED_MODULE_4__["arrayBufferToBlob"](arrayBuffer, 'image/png');
                    this._upload_manager.upload([blob], { file_name: files[0].name });
                    const upload = this._upload_manager.uploads[this._upload_manager.uploads.length - 1];
                    this.interval('upload', () => {
                        /* istanbul ignore else */
                        if (upload.complete || upload.error) {
                            /* istanbul ignore else */
                            if (upload.access_url && upload.complete) {
                                this.form.controls.image_path.setValue(upload.access_url);
                            }
                            this.uploading = false;
                            this.clearInterval('upload');
                        }
                    });
                });
                fileReader.readAsArrayBuffer(files[0]);
            }
        }
    }
}
CateringCategoryModalComponent.ɵfac = function CateringCategoryModalComponent_Factory(t) { return new (t || CateringCategoryModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_acaprojects_ngx_uploads__WEBPACK_IMPORTED_MODULE_6__["UploadManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
CateringCategoryModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringCategoryModalComponent, selectors: [["a-catering-category-modal"]], outputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 5, consts: [[1, "heading"], ["mat-icon-button", "", "mat-dialog-close", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["mat-button", "", 3, "disabled", "tapped"], ["load_state", ""], ["mat-icon-button", "", "mat-dialog-close", ""], [3, "icon"], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "field"], [1, "image"], [3, "icon", 4, "ngIf"], ["diameter", "48", 4, "ngIf"], ["type", "file", 3, "change"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Category Name", "formControlName", "name"], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Category Description", "formControlName", "description"], ["diameter", "48"], [1, "info-block"], [1, "icon"], ["diameter", "32"], [1, "text"]], template: function CateringCategoryModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CateringCategoryModalComponent_button_3_Template, 2, 2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CateringCategoryModalComponent_main_5_Template, 2, 1, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function CateringCategoryModalComponent_Template_button_tapped_8_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CateringCategoryModalComponent_ng_template_10_Template, 6, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.category.id ? "Edit" : "Add", " category");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.uploading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__["ɵb"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatError"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatSpinner"]], pipes: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_14__["ɵa"]], styles: [".field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.field[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.heading[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\nmain[_ngcontent-%COMP%] {\n  padding: 1em;\n  width: 24em;\n}\nlabel[_ngcontent-%COMP%] {\n  min-width: 100%;\n  margin-top: 1.25em;\n  margin-right: 1em;\n  font-weight: bold;\n  font-size: 0.8em;\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0.5em;\n}\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffb300;\n}\nlabel.error[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.image[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 10em;\n  width: 10em !important;\n  border-radius: 4px;\n  color: #fff;\n  margin: auto;\n  background-position: center !important;\n  background-size: cover !important;\n  margin-bottom: 1em;\n}\n.image[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n}\n.image[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\nfooter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3ZlcmxheXMvY2F0ZWdvcnktbW9kYWwvY2F0ZWdvcnktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL2NhdGVyaW5nL292ZXJsYXlzL2NhdGVnb3J5LW1vZGFsL2NhdGVnb3J5LW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQWdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQzNDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDT0o7QURMSTtFQUNJLFdBQUE7QUNPUjtBREhBO0VBQ0ksT0FBQTtFQUNBLGNBQUE7QUNNSjtBREhBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNNSjtBREhBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ0tSO0FERkk7RUFDSSxjRHZCRTtBRTJCVjtBRERJO0VBQ0ksY0R2QkE7QUUwQlI7QURDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQ0FBQTtFQUNBLGtCQUFBO0FDRUo7QURBSTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNFUjtBRENJO0VBQ0ksY0FBQTtBQ0NSO0FER0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUNBSjtBREVJO0VBQ0ksVUFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3ZlcmxheXMvY2F0ZWdvcnktbW9kYWwvY2F0ZWdvcnktbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuXG4kZm9udC1kYXJrOiAjMDAwO1xuJGZvbnQtbGlnaHQ6ICNmZmY7XG5cbiRzdWNjZXNzOiAjNDNhMDQ3O1xuJHN1Y2Nlc3MtbGlnaHQ6IGxpZ2h0ZW4oJHN1Y2Nlc3MsIDEwKTtcbiRzdWNjZXNzLWRhcms6IGRhcmtlbigkc3VjY2VzcywgMTApO1xuXG4kcGVuZGluZzogI2ZmYjMwMDtcbiRwZW5kaW5nLWxpZ2h0OiBsaWdodGVuKCRwZW5kaW5nLCAxMCk7XG4kcGVuZGluZy1kYXJrOiBkYXJrZW4oJHBlbmRpbmcsIDEwKTtcblxuJGVycm9yOiAjZTUzOTM1O1xuJGVycm9yLWxpZ2h0OiBsaWdodGVuKCRlcnJvciwgMTApO1xuJGVycm9yLWRhcms6IGRhcmtlbigkZXJyb3IsIDEwKTtcblxuJGNvbG9yLXByaW1hcnk6ICMxOTM3ZWE7XG4kY29sb3ItcHJpbWFyeS1saWdodDogbGlnaHRlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuJGNvbG9yLXByaW1hcnktZGFyazogZGFya2VuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG5cbiRjb2xvci1zZWNvbmRhcnk6ICM0Mjg1RjQ7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDEwKTtcblxuJGJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZm9vdGVyLWJhY2s6ICMyNjMyMzg7XG5cbiRjb2xvci10ZXJuYXJ5OiAjMDUxYzJjO1xuXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cblxuJGZvbnQtc3RhY2s6IFwiVGhlaW5oYXJkdFwiLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xuXG4kaGVhZGluZy1mb250OiBcIkxhcmlzaE1jS2luc2V5XCIsICdHZW9yZ2lhJywgc2VyaWY7XG4kZm9udDogJGZvbnQtc3RhY2s7XG5cbiRiYXNlLXNpemU6IDE2cHg7XG4kdGFibGV0LXNpemU6IDE2cHg7XG4kbW9iaWxlLXNpemU6IDE2cHg7XG5cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xuXG4kYnJlYWstbW9iaWxlOiA0NTBweDtcbiRicmVhay10YWJsZXQ6IDgwMHB4O1xuJGJyZWFrLWxhcHRvcDogMTAyNHB4O1xuXG4kYnJlYWstbGFuZHNjYXBlLW1vYmlsZTogODAwcHg7XG4kYnJlYWstbGFuZHNjYXBlLXRhYmxldDogMTA0OHB4O1xuJGJyZWFrLWxhbmRzY2FwZS1sYXB0b3A6IDEyODBweDtcbiIsIlxuQGltcG9ydCAndmFyaWFibGVzJztcblxuLmZpZWxkIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgID4gKiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmhlYWRpbmcge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLXdpZHRoOiA1MCU7XG59XG5cbm1haW4ge1xuICAgIHBhZGRpbmc6IDFlbTtcbiAgICB3aWR0aDogMjRlbTtcbn1cblxubGFiZWwge1xuICAgIG1pbi13aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAxLjI1ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIC8vIEBpbmNsdWRlIHJlc3BvbmQtdG8obW9iaWxlKSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xuICAgIC8vIH1cblxuICAgIHNwYW4ge1xuICAgICAgICBjb2xvcjogJHBlbmRpbmc7XG4gICAgfVxuXG4gICAgJi5lcnJvciB7XG4gICAgICAgIGNvbG9yOiAkZXJyb3I7XG4gICAgfVxufVxuXG4uaW1hZ2Uge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMGVtO1xuICAgIHdpZHRoOiAxMGVtICFpbXBvcnRhbnQ7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xuXG4gICAgaW5wdXQge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICB9XG5cbiAgICBhcHAtaWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgIH1cbn1cblxuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICBidXR0b24ge1xuICAgICAgICB3aWR0aDogOGVtO1xuICAgIH1cbn1cbiIsIi8qPT09PT09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICBBcHBsaWNhdGlvbiBDb2xvdXJzICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cbi5maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5maWVsZCA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRpbmcge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDUwJTtcbn1cblxubWFpbiB7XG4gIHBhZGRpbmc6IDFlbTtcbiAgd2lkdGg6IDI0ZW07XG59XG5cbmxhYmVsIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAxLjI1ZW07XG4gIG1hcmdpbi1yaWdodDogMWVtO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDAuNWVtO1xufVxubGFiZWwgc3BhbiB7XG4gIGNvbG9yOiAjZmZiMzAwO1xufVxubGFiZWwuZXJyb3Ige1xuICBjb2xvcjogI2U1MzkzNTtcbn1cblxuLmltYWdlIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgaGVpZ2h0OiAxMGVtO1xuICB3aWR0aDogMTBlbSAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IGF1dG87XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDFlbTtcbn1cbi5pbWFnZSBpbnB1dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBvcGFjaXR5OiAwO1xufVxuLmltYWdlIGFwcC1pY29uIHtcbiAgZm9udC1zaXplOiAzZW07XG59XG5cbmZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cbmZvb3RlciBidXR0b24ge1xuICB3aWR0aDogOGVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringCategoryModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-catering-category-modal',
                templateUrl: './category-modal.component.html',
                styleUrls: ['./category-modal.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"] }, { type: _acaprojects_ngx_uploads__WEBPACK_IMPORTED_MODULE_6__["UploadManager"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/catering/overlays/group-modal/group-modal.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shell/catering/overlays/group-modal/group-modal.component.ts ***!
  \******************************************************************************/
/*! exports provided: CateringGroupModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringGroupModalComponent", function() { return CateringGroupModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var blob_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! blob-util */ "./node_modules/blob-util/dist/blob-util.es.js");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _acaprojects_ngx_uploads__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @acaprojects/ngx-uploads */ "./node_modules/@acaprojects/ngx-uploads/__ivy_ngcc__/fesm2015/acaprojects-ngx-uploads.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @acaprojects/ngx-pipes */ "./node_modules/@acaprojects/ngx-pipes/__ivy_ngcc__/fesm2015/acaprojects-ngx-pipes.js");





















const _c0 = function () { return { type: "icon", class: "material-icons", content: "close" }; };
function CateringGroupModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return { class: "material-icons", content: "cloud_upload" }; };
function CateringGroupModalComponent_main_5_app_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-icon", 6);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function CateringGroupModalComponent_main_5_mat_spinner_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-spinner", 31);
} }
function CateringGroupModalComponent_main_5_mat_option_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r8.name, " ");
} }
function CateringGroupModalComponent_main_5_ng_container_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-checkbox", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Out of Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-checkbox", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Can order anytime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Unit Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function CateringGroupModalComponent_main_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CateringGroupModalComponent_main_5_app_icon_5_Template, 1, 2, "app-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CateringGroupModalComponent_main_5_mat_spinner_6_Template, 1, 0, "mat-spinner", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CateringGroupModalComponent_main_5_Template_input_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.uploadImage($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Parent Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-checkbox", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Package");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "A valid name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-select", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, CateringGroupModalComponent_main_5_mat_option_32_Template, 2, 2, "mat-option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "textarea", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, CateringGroupModalComponent_main_5_ng_container_40_Template, 12, 0, "ng-container", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Minimum Quanity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Maximum Quanity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-form-field", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 13, "linear-gradient(rgba(0,0,0,.35),rgba(0,0,0,.35)), url(" + ctx_r1.image + ")", "style"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefaultStyleSanitizer"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.uploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.uploading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.parent.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r1.form.controls.name.errors && ctx_r1.form.controls.name.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r1.form.controls.catering_type.errors && ctx_r1.form.controls.catering_type.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.types);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.package);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Items to select from ", ctx_r1.package ? "package" : "sub-category", "");
} }
function CateringGroupModalComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.loading);
} }
class CateringGroupModalComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"] {
    constructor(_service, _upload_manager, _dialog_ref, _data) {
        super();
        this._service = _service;
        this._upload_manager = _upload_manager;
        this._dialog_ref = _dialog_ref;
        this._data = _data;
        /** Emitter for user action on the modal */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** List of available catering types */
        this.types = [
            { id: 'kitchen', name: 'Kitchen' },
            { id: 'pantry', name: 'Pantry' },
        ];
    }
    /** Category being edit/created */
    get category() {
        return this._data.group;
    }
    /** Parent category of the catergory being created/edited */
    get parent() {
        return this._data.parent;
    }
    /** Image URL for the category */
    get image() {
        return this.form.controls.image_path.value;
    }
    /** Whether category is a package */
    get package() {
        return this.form.controls.package.value;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.description),
            image_path: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.image_path),
            catering_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.catering_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            package: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.package || false),
            must_select: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.must_select),
            unit_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.unit_price),
            minimum_quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.minimum_quantity),
            maximum_quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.maximum_quantity),
            order_anytime: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.order_anytime),
            out_of_stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.category.out_of_stock),
        });
    }
    submit() {
        this.form.markAllAsTouched();
        /* istanbul ignore else */
        if (this.form.valid) {
            const data = Object.assign(Object.assign({}, this.category.toJSON()), this.form.value);
            const request = this.category.id
                ? this._service.CateringCategories.update(this.category.id, data)
                : this._service.CateringCategories.add(data);
            request.then((item) => {
                this.event.emit({ reason: 'done', metadata: item });
                this._dialog_ref.close();
            }, (err) => this._service.notifyError(`Error ${this.category.id ? 'updating' : 'creating'} category. Error: ${err.message || err}`));
        }
    }
    /** Upload the image to the cloud */
    uploadImage(event) {
        /* istanbul ignore else */
        if (event && event.target && event.target.files) {
            const files = event.target.files;
            /* istanbul ignore else */
            if (files.length) {
                const fileReader = new FileReader();
                fileReader.addEventListener('loadend', (e) => {
                    this.uploading = true;
                    const arrayBuffer = e.target.result;
                    const blob = blob_util__WEBPACK_IMPORTED_MODULE_4__["arrayBufferToBlob"](arrayBuffer, 'image/png');
                    this._upload_manager.upload([blob], { file_name: files[0].name });
                    const upload = this._upload_manager.uploads[this._upload_manager.uploads.length - 1];
                    this.interval('upload', () => {
                        /* istanbul ignore else */
                        if (upload.complete || upload.error) {
                            /* istanbul ignore else */
                            if (upload.access_url && upload.complete) {
                                this.form.controls.image_path.setValue(upload.access_url);
                            }
                            this.uploading = false;
                            this.clearInterval('upload');
                        }
                    });
                });
                fileReader.readAsArrayBuffer(files[0]);
            }
        }
    }
}
CateringGroupModalComponent.ɵfac = function CateringGroupModalComponent_Factory(t) { return new (t || CateringGroupModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_acaprojects_ngx_uploads__WEBPACK_IMPORTED_MODULE_6__["UploadManager"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
CateringGroupModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringGroupModalComponent, selectors: [["a-catering-group-modal"]], outputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 6, consts: [[1, "heading"], ["mat-icon-button", "", "mat-dialog-close", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["mat-button", "", 3, "disabled", "tapped"], ["load_state", ""], ["mat-icon-button", "", "mat-dialog-close", ""], [3, "icon"], [3, "formGroup"], [1, "field"], [1, "image"], [3, "icon", 4, "ngIf"], ["diameter", "48", 4, "ngIf"], ["type", "file", 3, "change"], [1, "field", "padded"], ["for", "name"], [1, "value"], ["formControlName", "package"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Category Name", "formControlName", "name"], ["for", "type"], ["name", "type", "formControlName", "catering_type", "placeholder", "Select type"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Category Description", "formControlName", "description"], [4, "ngIf"], ["for", "must-select"], ["matInput", "", "name", "must-select", "type", "number", "placeholder", "Must select X items from grouping", "formControlName", "must_select"], ["for", "min-quanity"], ["matInput", "", "name", "min-quanity", "type", "number", "placeholder", "Minimum Quantity", "formControlName", "minimum_quantity"], ["for", "max-quanity"], ["matInput", "", "name", "max-quanity", "type", "number", "placeholder", "Maximum Quantity", "formControlName", "maximum_quantity"], ["diameter", "48"], [3, "value"], ["formControlName", "out_of_stock"], ["formControlName", "order_anytime"], ["for", "unit-price"], ["matInput", "", "name", "unit-price", "type", "number", "placeholder", "Price for one unit of the item without decimal places", "formControlName", "unit_price"], [1, "info-block"], [1, "icon"], ["diameter", "32"], [1, "text"]], template: function CateringGroupModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CateringGroupModalComponent_button_3_Template, 2, 2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CateringGroupModalComponent_main_5_Template, 56, 16, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function CateringGroupModalComponent_Template_button_tapped_8_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CateringGroupModalComponent_ng_template_10_Template, 6, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.category.id ? "Edit" : "Add", " ", ctx.package ? "package" : "sub-category", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.uploading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__["ɵb"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_13__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], pipes: [_acaprojects_ngx_pipes__WEBPACK_IMPORTED_MODULE_17__["ɵa"]], styles: [".field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.field[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.heading[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\nmain[_ngcontent-%COMP%] {\n  padding: 1em;\n  width: 24em;\n}\nlabel[_ngcontent-%COMP%] {\n  min-width: 100%;\n  margin-top: 1.25em;\n  margin-right: 1em;\n  font-weight: bold;\n  font-size: 0.8em;\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0.5em;\n}\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffb300;\n}\nlabel.error[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.padded[_ngcontent-%COMP%] {\n  padding: 0 0 1em;\n}\n.image[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 10em;\n  width: 10em !important;\n  border-radius: 4px;\n  color: #fff;\n  margin: auto auto 1em;\n  background-position: center !important;\n  background-size: cover !important;\n  margin-bottom: 1em;\n}\n.image[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  opacity: 0;\n}\n.image[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 3em;\n}\nfooter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3ZlcmxheXMvZ3JvdXAtbW9kYWwvZ3JvdXAtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoZWxsL2NhdGVyaW5nL292ZXJsYXlzL2dyb3VwLW1vZGFsL2dyb3VwLW1vZGFsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBOzswQkFBQTtBQWdDQTs7Y0FBQTtBQWFBOztzQkFBQTtBQzNDQTtFQUNJLGFBQUE7RUFDQSxlQUFBO0FDT0o7QURMSTtFQUNJLFdBQUE7QUNPUjtBREhBO0VBQ0ksT0FBQTtFQUNBLGNBQUE7QUNNSjtBREhBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNNSjtBREhBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUksV0FBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtBQ0tSO0FERkk7RUFDSSxjRHZCRTtBRTJCVjtBRERJO0VBQ0ksY0R2QkE7QUUwQlI7QURDQTtFQUNJLGdCQUFBO0FDRUo7QURDQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHNDQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtBQ0VKO0FEQUk7RUFDSSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDRVI7QURDSTtFQUNJLGNBQUE7QUNDUjtBREdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDQUo7QURFSTtFQUNJLFVBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2NhdGVyaW5nL292ZXJsYXlzL2dyb3VwLW1vZGFsL2dyb3VwLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cblxuJGZvbnQtZGFyazogIzAwMDtcbiRmb250LWxpZ2h0OiAjZmZmO1xuXG4kc3VjY2VzczogIzQzYTA0NztcbiRzdWNjZXNzLWxpZ2h0OiBsaWdodGVuKCRzdWNjZXNzLCAxMCk7XG4kc3VjY2Vzcy1kYXJrOiBkYXJrZW4oJHN1Y2Nlc3MsIDEwKTtcblxuJHBlbmRpbmc6ICNmZmIzMDA7XG4kcGVuZGluZy1saWdodDogbGlnaHRlbigkcGVuZGluZywgMTApO1xuJHBlbmRpbmctZGFyazogZGFya2VuKCRwZW5kaW5nLCAxMCk7XG5cbiRlcnJvcjogI2U1MzkzNTtcbiRlcnJvci1saWdodDogbGlnaHRlbigkZXJyb3IsIDEwKTtcbiRlcnJvci1kYXJrOiBkYXJrZW4oJGVycm9yLCAxMCk7XG5cbiRjb2xvci1wcmltYXJ5OiAjMTkzN2VhO1xuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcbiRjb2xvci1wcmltYXJ5LWRhcms6IGRhcmtlbigkY29sb3ItcHJpbWFyeSwgMTApO1xuXG4kY29sb3Itc2Vjb25kYXJ5OiAjNDI4NUY0O1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogbGlnaHRlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxMCk7XG5cbiRiYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGZvb3Rlci1iYWNrOiAjMjYzMjM4O1xuXG4kY29sb3ItdGVybmFyeTogIzA1MWMyYztcblxuLyo9PT09PT09PT09PSpcXFxufHwgICBGb250cyAgIHx8XG5cXCo9PT09PT09PT09PSovXG5cbiRmb250LXN0YWNrOiBcIlRoZWluaGFyZHRcIiwgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcblxuJGhlYWRpbmctZm9udDogXCJMYXJpc2hNY0tpbnNleVwiLCAnR2VvcmdpYScsIHNlcmlmO1xuJGZvbnQ6ICRmb250LXN0YWNrO1xuXG4kYmFzZS1zaXplOiAxNnB4O1xuJHRhYmxldC1zaXplOiAxNnB4O1xuJG1vYmlsZS1zaXplOiAxNnB4O1xuXG4vKj09PT09PT09PT09PT09PT09PT0qXFxcbnx8ICAgTWVkaWEgUXVlcmllcyAgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09Ki9cblxuJGJyZWFrLW1vYmlsZTogNDUwcHg7XG4kYnJlYWstdGFibGV0OiA4MDBweDtcbiRicmVhay1sYXB0b3A6IDEwMjRweDtcblxuJGJyZWFrLWxhbmRzY2FwZS1tb2JpbGU6IDgwMHB4O1xuJGJyZWFrLWxhbmRzY2FwZS10YWJsZXQ6IDEwNDhweDtcbiRicmVhay1sYW5kc2NhcGUtbGFwdG9wOiAxMjgwcHg7XG4iLCJcbkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbi5maWVsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICA+ICoge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5oZWFkaW5nIHtcbiAgICBmbGV4OiAxO1xuICAgIG1pbi13aWR0aDogNTAlO1xufVxuXG5tYWluIHtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgd2lkdGg6IDI0ZW07XG59XG5cbmxhYmVsIHtcbiAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luLXRvcDogMS4yNWVtO1xuICAgIG1hcmdpbi1yaWdodDogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICAvLyBAaW5jbHVkZSByZXNwb25kLXRvKG1vYmlsZSkge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbiAgICAvLyB9XG5cbiAgICBzcGFuIHtcbiAgICAgICAgY29sb3I6ICRwZW5kaW5nO1xuICAgIH1cblxuICAgICYuZXJyb3Ige1xuICAgICAgICBjb2xvcjogJGVycm9yO1xuICAgIH1cbn1cblxuLnBhZGRlZCB7XG4gICAgcGFkZGluZzogMCAwIDFlbTtcbn1cblxuLmltYWdlIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTBlbTtcbiAgICB3aWR0aDogMTBlbSAhaW1wb3J0YW50O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBtYXJnaW46IGF1dG8gYXV0byAxZW07XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlciAhaW1wb3J0YW50O1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcblxuICAgIGlucHV0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgYXBwLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICB9XG59XG5cbmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDhlbTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmllbGQgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkaW5nIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA1MCU7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiAxZW07XG4gIHdpZHRoOiAyNGVtO1xufVxuXG5sYWJlbCB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMS4yNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cbmxhYmVsIHNwYW4ge1xuICBjb2xvcjogI2ZmYjMwMDtcbn1cbmxhYmVsLmVycm9yIHtcbiAgY29sb3I6ICNlNTM5MzU7XG59XG5cbi5wYWRkZWQge1xuICBwYWRkaW5nOiAwIDAgMWVtO1xufVxuXG4uaW1hZ2Uge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwZW07XG4gIHdpZHRoOiAxMGVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbjogYXV0byBhdXRvIDFlbTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXIgIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xufVxuLmltYWdlIGlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIG9wYWNpdHk6IDA7XG59XG4uaW1hZ2UgYXBwLWljb24ge1xuICBmb250LXNpemU6IDNlbTtcbn1cblxuZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuZm9vdGVyIGJ1dHRvbiB7XG4gIHdpZHRoOiA4ZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringGroupModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-catering-group-modal',
                templateUrl: './group-modal.component.html',
                styleUrls: ['./group-modal.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"] }, { type: _acaprojects_ngx_uploads__WEBPACK_IMPORTED_MODULE_6__["UploadManager"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/catering/overlays/item-modal/item-modal.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/shell/catering/overlays/item-modal/item-modal.component.ts ***!
  \****************************************************************************/
/*! exports provided: CateringItemModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CateringItemModalComponent", function() { return CateringItemModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var src_app_services_data_catering_catering_item_class__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data/catering/catering-item.class */ "./src/app/services/data/catering/catering-item.class.ts");
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");



















const _c0 = function () { return { type: "icon", class: "material-icons", content: "close" }; };
function CateringItemModalComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function CateringItemModalComponent_main_5_mat_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", type_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", type_r5.name, " ");
} }
function CateringItemModalComponent_main_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Parent Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "A valid name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-select", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CateringItemModalComponent_main_5_mat_option_23_Template, 2, 2, "mat-option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Type is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "textarea", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Allegen Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-checkbox", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Out of Stock");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-checkbox", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Can order anytime");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Supplier Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Unit Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Minimum Quanity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Maximum Quanity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-form-field", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.parent.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r1.form.controls.name.errors && ctx_r1.form.controls.name.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("error", ctx_r1.form.controls.catering_type.errors && ctx_r1.form.controls.catering_type.touched);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.types);
} }
function CateringItemModalComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mat-spinner", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.loading);
} }
class CateringItemModalComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_3__["BaseDirective"] {
    constructor(_service, _dialog_ref, _data) {
        super();
        this._service = _service;
        this._dialog_ref = _dialog_ref;
        this._data = _data;
        /** Emitter for user action on the modal */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        /** List of available catering types */
        this.types = [
            { id: 'kitchen', name: 'Kitchen' },
            { id: 'pantry', name: 'Pantry' },
        ];
    }
    /** Category being edit/created */
    get item() {
        return this._data.item;
    }
    /** Parent category of the catergory being created/edited */
    get parent() {
        return this._data.parent;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.item.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.item.description),
            catering_type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.item.catering_type, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            supplier_cost: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.item.supplier_cost),
            unit_price: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.item.unit_price),
            minimum_quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.item.minimum_quantity),
            maximum_quantity: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.item.maximum_quantity),
            order_anytime: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.item.order_anytime),
            out_of_stock: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.item.out_of_stock),
            allergy: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.item.allergy),
        });
    }
    submit() {
        this.form.markAllAsTouched();
        /* istanbul ignore else */
        if (this.form.valid) {
            const data = new src_app_services_data_catering_catering_item_class__WEBPACK_IMPORTED_MODULE_4__["CateringItem"](Object.assign(Object.assign({}, this.item.toJSON()), this.form.value)).toJSON();
            const request = this.item.id
                ? this._service.CateringItems.update(this.item.id, data)
                : this._service.CateringItems.add(data);
            request.then((item) => {
                this.event.emit({ reason: 'done', metadata: item });
                this._dialog_ref.close();
            }, (err) => this._service.notifyError(`Error ${this.item.id ? 'updating' : 'creating'} item. Error: ${err.message || err}`));
        }
    }
}
CateringItemModalComponent.ɵfac = function CateringItemModalComponent_Factory(t) { return new (t || CateringItemModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
CateringItemModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CateringItemModalComponent, selectors: [["a-catering-item-modal"]], outputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]], decls: 12, vars: 5, consts: [[1, "heading"], ["mat-icon-button", "", "mat-dialog-close", "", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["mat-button", "", 3, "disabled", "tapped"], ["load_state", ""], ["mat-icon-button", "", "mat-dialog-close", ""], [3, "icon"], [3, "formGroup"], [1, "field", "padded"], ["for", "name"], [1, "value"], [1, "field"], ["appearance", "outline"], ["matInput", "", "name", "name", "placeholder", "Category Name", "formControlName", "name"], ["for", "type"], ["name", "type", "formControlName", "catering_type", "placeholder", "Select type"], [3, "value", 4, "ngFor", "ngForOf"], ["for", "description"], ["matInput", "", "name", "description", "placeholder", "Category Description", "formControlName", "description"], ["for", "allergy"], ["matInput", "", "name", "allergy", "placeholder", "Allergy details about the item", "formControlName", "allergy"], ["formControlName", "out_of_stock"], ["formControlName", "order_anytime"], ["for", "supplier-price"], ["matInput", "", "name", "supplier-price", "type", "number", "placeholder", "Price for one unit of the item from the supplier", "formControlName", "supplier_cost"], ["for", "unit-price"], ["matInput", "", "name", "unit-price", "type", "number", "placeholder", "Price for one unit of the item without decimal places", "formControlName", "unit_price"], ["for", "min-quanity"], ["matInput", "", "name", "min-quanity", "type", "number", "placeholder", "Minimum Quantity", "formControlName", "minimum_quantity"], ["for", "max-quanity"], ["matInput", "", "name", "max-quanity", "type", "number", "placeholder", "Maximum Quantity", "formControlName", "maximum_quantity"], [3, "value"], [1, "info-block"], [1, "icon"], ["diameter", "32"], [1, "text"]], template: function CateringItemModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CateringItemModalComponent_button_3_Template, 2, 2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CateringItemModalComponent_main_5_Template, 62, 7, "main", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-dialog-actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tapped", function CateringItemModalComponent_Template_button_tapped_8_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, CateringItemModalComponent_ng_template_10_Template, 6, 1, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.item.id ? "Edit" : "Add", " catering item");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx.uploading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_8__["ɵb"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_9__["IconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatError"], _angular_material_select__WEBPACK_IMPORTED_MODULE_12__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_13__["MatCheckbox"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"]], styles: [".field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.field[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.heading[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n}\nmain[_ngcontent-%COMP%] {\n  padding: 1em;\n  width: 24em;\n}\nlabel[_ngcontent-%COMP%] {\n  min-width: 100%;\n  margin-top: 1.25em;\n  margin-right: 1em;\n  font-weight: bold;\n  font-size: 0.8em;\n  width: 100%;\n  margin-top: 0;\n  margin-bottom: 0.5em;\n}\nlabel[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ffb300;\n}\nlabel.error[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.padded[_ngcontent-%COMP%] {\n  padding: 0 0 1em;\n}\nfooter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n}\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 8em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3ZlcmxheXMvaXRlbS1tb2RhbC9pdGVtLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9jYXRlcmluZy9vdmVybGF5cy9pdGVtLW1vZGFsL2l0ZW0tbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBZ0NBOztjQUFBO0FBYUE7O3NCQUFBO0FDM0NBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUNPSjtBRExJO0VBQ0ksV0FBQTtBQ09SO0FESEE7RUFDSSxPQUFBO0VBQ0EsY0FBQTtBQ01KO0FESEE7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQ01KO0FESEE7RUFDSSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFFSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0FDS1I7QURGSTtFQUNJLGNEdkJFO0FFMkJWO0FEREk7RUFDSSxjRHZCQTtBRTBCUjtBRENBO0VBQ0ksZ0JBQUE7QUNFSjtBRENBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDRUo7QURBSTtFQUNJLFVBQUE7QUNFUiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2NhdGVyaW5nL292ZXJsYXlzL2l0ZW0tbW9kYWwvaXRlbS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogI2YwZjBmMDtcbiRmb290ZXItYmFjazogIzI2MzIzODtcblxuJGNvbG9yLXRlcm5hcnk6ICMwNTFjMmM7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG4uZmllbGQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgPiAqIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxufVxuXG4uaGVhZGluZyB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDUwJTtcbn1cblxubWFpbiB7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIHdpZHRoOiAyNGVtO1xufVxuXG5sYWJlbCB7XG4gICAgbWluLXdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbi10b3A6IDEuMjVlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgLy8gQGluY2x1ZGUgcmVzcG9uZC10byhtb2JpbGUpIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41ZW07XG4gICAgLy8gfVxuXG4gICAgc3BhbiB7XG4gICAgICAgIGNvbG9yOiAkcGVuZGluZztcbiAgICB9XG5cbiAgICAmLmVycm9yIHtcbiAgICAgICAgY29sb3I6ICRlcnJvcjtcbiAgICB9XG59XG5cbi5wYWRkZWQge1xuICAgIHBhZGRpbmc6IDAgMCAxZW07XG59XG5cbmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDhlbTtcbiAgICB9XG59XG4iLCIvKj09PT09PT09PT09PT09PT09PT09PT09KlxcXG58fCAgQXBwbGljYXRpb24gQ29sb3VycyAgfHxcblxcKj09PT09PT09PT09PT09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG4uZmllbGQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uZmllbGQgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkaW5nIHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiA1MCU7XG59XG5cbm1haW4ge1xuICBwYWRkaW5nOiAxZW07XG4gIHdpZHRoOiAyNGVtO1xufVxuXG5sYWJlbCB7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMS4yNWVtO1xuICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cbmxhYmVsIHNwYW4ge1xuICBjb2xvcjogI2ZmYjMwMDtcbn1cbmxhYmVsLmVycm9yIHtcbiAgY29sb3I6ICNlNTM5MzU7XG59XG5cbi5wYWRkZWQge1xuICBwYWRkaW5nOiAwIDAgMWVtO1xufVxuXG5mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG59XG5mb290ZXIgYnV0dG9uIHtcbiAgd2lkdGg6IDhlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CateringItemModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'a-catering-item-modal',
                templateUrl: './item-modal.component.html',
                styleUrls: ['./item-modal.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_5__["ApplicationService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/catering/overlays/order-details-modal/booking-details/booking-details.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/shell/catering/overlays/order-details-modal/booking-details/booking-details.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: OrderBookingDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderBookingDetailsComponent", function() { return OrderBookingDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");





const _c0 = function (a1) { return ["/day-view", a1]; };
const _c1 = function (a0) { return { view: a0 }; };
class OrderBookingDetailsComponent {
    /** Store booking details to be used in another component */
    storeBooking() {
        localStorage.setItem('CONCIERGE.view_booking', JSON.stringify(this.booking.toJSON()));
        localStorage.setItem('CONCIERGE.date', `${this.booking.date}`);
    }
}
OrderBookingDetailsComponent.ɵfac = function OrderBookingDetailsComponent_Factory(t) { return new (t || OrderBookingDetailsComponent)(); };
OrderBookingDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderBookingDetailsComponent, selectors: [["order-booking-details"]], inputs: { booking: "booking" }, decls: 25, vars: 11, consts: [[1, "heading"], [1, "content"], [1, "field"], ["for", "host"], ["name", "host", 1, "value"], ["for", "space"], ["name", "space", 1, "value"], ["for", "period"], ["name", "period", 1, "value"], ["for", "attendees"], ["name", "attendees", 1, "value"], ["button", "", "mat-button", "", "mat-dialog-close", "", 1, "footer", 3, "routerLink", "queryParams", "click"]], template: function OrderBookingDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Meeting Details\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Host:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Room:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Period:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Attendees:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrderBookingDetailsComponent_Template_a_click_23_listener() { return ctx.storeBooking(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " View on Day View\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", (ctx.booking.organiser == null ? null : ctx.booking.organiser.name) || ctx.booking.organiser_email, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.booking.space == null ? null : ctx.booking.space.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.booking.time_period, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", (ctx.booking.attendees == null ? null : ctx.booking.attendees.length) || "0", "(", ctx.booking.expected_attendees[ctx.booking.space == null ? null : ctx.booking.space.id] || 0, " expected) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.booking.space == null ? null : ctx.booking.space.level.id))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c1, ctx.booking.id.slice(0, 10)));
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatAnchor"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogClose"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1em;\n  font-weight: 500;\n  background-color: #ccc;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 50%;\n  overflow: auto;\n  padding: 0.5em 1em;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.8em;\n  margin: 0.5em 0 1em;\n}\nlabel[_ngcontent-%COMP%] {\n  margin-right: 1em;\n  font-weight: 500;\n}\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0;\n  padding: 0.35em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3ZlcmxheXMvb3JkZXItZGV0YWlscy1tb2RhbC9ib29raW5nLWRldGFpbHMvYm9va2luZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9jYXRlcmluZy9vdmVybGF5cy9vcmRlci1kZXRhaWxzLW1vZGFsL2Jvb2tpbmctZGV0YWlscy9ib29raW5nLWRldGFpbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDQUo7QURDSTtFQUNJLFdBQUE7QUNDUjtBREdBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ0FKO0FER0E7RUFDSSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FKO0FER0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDQUo7QURHQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUNBSjtBREdBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3ZlcmxheXMvb3JkZXItZGV0YWlscy1tb2RhbC9ib29raW5nLWRldGFpbHMvYm9va2luZy1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgID4gKiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmhlYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICBtaW4taGVpZ2h0OiA1MCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgcGFkZGluZzogLjVlbSAxZW07XG59XG5cbi5maWVsZCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBtYXJnaW46IC41ZW0gMCAxZW07XG59XG5cbmxhYmVsIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4uZm9vdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHBhZGRpbmc6IC4zNWVtO1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuOmhvc3QgPiAqIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkaW5nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDFlbTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmNvbnRlbnQge1xuICBmbGV4OiAxO1xuICBtaW4taGVpZ2h0OiA1MCU7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwYWRkaW5nOiAwLjVlbSAxZW07XG59XG5cbi5maWVsZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIG1hcmdpbjogMC41ZW0gMCAxZW07XG59XG5cbmxhYmVsIHtcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi5mb290ZXIge1xuICB3aWR0aDogMTAwJTtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgcGFkZGluZzogMC4zNWVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderBookingDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'order-booking-details',
                templateUrl: './booking-details.component.html',
                styleUrls: ['./booking-details.component.scss'],
            }]
    }], null, { booking: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/catering/overlays/order-details-modal/items/items.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shell/catering/overlays/order-details-modal/items/items.component.ts ***!
  \**************************************************************************************/
/*! exports provided: OrderDetailsItemsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsItemsComponent", function() { return OrderDetailsItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");





function OrderDetailsItemsComponent_ng_container_3_div_1_ng_container_6_div_1_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_sub_item_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_sub_item_r10.name);
} }
function OrderDetailsItemsComponent_ng_container_3_div_1_ng_container_6_div_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderDetailsItemsComponent_ng_container_3_div_1_ng_container_6_div_1_ng_container_3_div_1_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const sub_item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", sub_item_r7.items);
} }
function OrderDetailsItemsComponent_ng_container_3_div_1_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderDetailsItemsComponent_ng_container_3_div_1_ng_container_6_div_1_ng_container_3_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const sub_item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](sub_item_r7.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", sub_item_r7.items);
} }
function OrderDetailsItemsComponent_ng_container_3_div_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderDetailsItemsComponent_ng_container_3_div_1_ng_container_6_div_1_Template, 4, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r4.items);
} }
function OrderDetailsItemsComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrderDetailsItemsComponent_ng_container_3_div_1_ng_container_6_Template, 2, 1, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r4.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("x", item_r4.amount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r4.items);
} }
function OrderDetailsItemsComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OrderDetailsItemsComponent_ng_container_3_div_1_Template, 7, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.items);
} }
const _c0 = function () { return { class: "material-icons", content: "close" }; };
function OrderDetailsItemsComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " No items in order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
class OrderDetailsItemsComponent {
    /** List of items in the order */
    get items() {
        return this.order.items || [];
    }
}
OrderDetailsItemsComponent.ɵfac = function OrderDetailsItemsComponent_Factory(t) { return new (t || OrderDetailsItemsComponent)(); };
OrderDetailsItemsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrderDetailsItemsComponent, selectors: [["order-details-items"]], inputs: { booking: "booking", order: "order" }, decls: 8, vars: 2, consts: [[1, "heading"], [1, "content"], [4, "ngIf", "ngIfElse"], ["mat-button", "", 1, "footer"], ["empty_state", ""], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"], [1, "details"], [1, "name"], [1, "amount"], [4, "ngIf"], ["class", "sub-item", 4, "ngFor", "ngForOf"], [1, "sub-item"], [1, "info-block", "center"], [1, "icon"], [3, "icon"], [1, "text"]], template: function OrderDetailsItemsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Order Details\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, OrderDetailsItemsComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Edit Order\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, OrderDetailsItemsComponent_ng_template_6_Template, 5, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.items && ctx.items.length)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_3__["IconComponent"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1em;\n  font-weight: 500;\n  background-color: #ccc;\n}\n.content[_ngcontent-%COMP%] {\n  flex: 1;\n  min-height: 50%;\n  overflow: auto;\n  padding: 0.5em 0.5em;\n}\n.item[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  border-radius: 4px;\n  transition: background-color 200ms;\n  padding: 0.5em;\n}\n.item[_ngcontent-%COMP%]:hover {\n  background-color: #f0f0f0;\n}\n.sub-item[_ngcontent-%COMP%] {\n  padding: 0.5em 1em 0;\n  font-size: 0.75rem;\n}\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.name[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 50%;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.name[_ngcontent-%COMP%]:hover {\n  white-space: initial;\n}\n.amount[_ngcontent-%COMP%] {\n  margin-left: 1em;\n}\n.footer[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0;\n  padding: 0.35em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3ZlcmxheXMvb3JkZXItZGV0YWlscy1tb2RhbC9pdGVtcy9pdGVtcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3ZlcmxheXMvb3JkZXItZGV0YWlscy1tb2RhbC9pdGVtcy9pdGVtcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjtBRENJO0VBQ0ksV0FBQTtBQ0NSO0FER0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQUo7QURHQTtFQUNJLE9BQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FDQUo7QURHQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLGNBQUE7QUNBSjtBREVJO0VBQ0kseUJBQUE7QUNBUjtBRElBO0VBQ0ksb0JBQUE7RUFDQSxrQkFBQTtBQ0RKO0FETUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUNISjtBRE1BO0VBQ0ksT0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNISjtBRElJO0VBQ0ksb0JBQUE7QUNGUjtBRE1BO0VBQ0ksZ0JBQUE7QUNISjtBRE1BO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3ZlcmxheXMvb3JkZXItZGV0YWlscy1tb2RhbC9pdGVtcy9pdGVtcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICA+ICoge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG59XG5cbi5oZWFkaW5nIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbn1cblxuLmNvbnRlbnQge1xuICAgIGZsZXg6IDE7XG4gICAgbWluLWhlaWdodDogNTAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IC41ZW0gLjVlbTtcbn1cblxuLml0ZW0ge1xuICAgIGZvbnQtc2l6ZTogLjhlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAyMDBtcztcbiAgICBwYWRkaW5nOiAuNWVtO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgfVxufVxuXG4uc3ViLWl0ZW0ge1xuICAgIHBhZGRpbmc6IC41ZW0gMWVtIDA7XG4gICAgZm9udC1zaXplOiAuNzVyZW07XG5cblxufVxuXG4uZGV0YWlscyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmFtZSB7XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDUwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgJjpob3ZlciB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBpbml0aWFsO1xuICAgIH1cbn1cblxuLmFtb3VudCB7XG4gICAgbWFyZ2luLWxlZnQ6IDFlbTtcbn1cblxuLmZvb3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBwYWRkaW5nOiAuMzVlbTtcbn1cbiIsIjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbjpob3N0ID4gKiB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uaGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBwYWRkaW5nOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG59XG5cbi5jb250ZW50IHtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogNTAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMC41ZW0gMC41ZW07XG59XG5cbi5pdGVtIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDIwMG1zO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cbi5pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbn1cblxuLnN1Yi1pdGVtIHtcbiAgcGFkZGluZzogMC41ZW0gMWVtIDA7XG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcbn1cblxuLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubmFtZSB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cbi5uYW1lOmhvdmVyIHtcbiAgd2hpdGUtc3BhY2U6IGluaXRpYWw7XG59XG5cbi5hbW91bnQge1xuICBtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4uZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDAuMzVlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrderDetailsItemsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'order-details-items',
                templateUrl: './items.component.html',
                styleUrls: ['./items.component.scss'],
            }]
    }], null, { booking: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/catering/overlays/order-details-modal/messages/messages.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/shell/catering/overlays/order-details-modal/messages/messages.component.ts ***!
  \********************************************************************************************/
/*! exports provided: OrderDetailsNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsNotesComponent", function() { return OrderDetailsNotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @acaprojects/ngx-custom-events */ "./node_modules/@acaprojects/ngx-custom-events/__ivy_ngcc__/fesm2015/acaprojects-ngx-custom-events.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");













function OrderDetailsNotesComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r5.time);
} }
function OrderDetailsNotesComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, OrderDetailsNotesComponent_ng_container_3_div_1_Template, 9, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.notes);
} }
function OrderDetailsNotesComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "mat-spinner", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { class: "material-icons", content: "close" }; };
function OrderDetailsNotesComponent_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " No private notes for order ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return { class: "material-icons", content: "send" }; };
class OrderDetailsNotesComponent {
    constructor(_service) {
        this._service = _service;
        /** Emitter for changes to the active booking */
        this.bookingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    /** List of notes for catering order space */
    get notes() {
        const notes = this.booking.notes.filter((note) => {
            return (note.type === 'catering' &&
                note.space === this.order.location_id &&
                (!note.order_id || note.order_id === this.order.id));
        });
        notes.forEach((note) => {
            note.time = dayjs__WEBPACK_IMPORTED_MODULE_2__(note.date).format('DD MMM, h:mm A');
        });
        return notes;
    }
    ngOnInit() { }
    /**
     * Add note for catering order
     */
    addNote() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            /* istanbul ignore else */
            if (this.booking && this.new_note) {
                const user = this._service.Users.current;
                const booking = this.booking;
                const notes = booking.notes;
                const date = dayjs__WEBPACK_IMPORTED_MODULE_2__().startOf('m');
                booking.storePendingChange('notes', [
                    ...notes,
                    {
                        type: 'catering',
                        date: date.valueOf(),
                        author: user.name,
                        order_id: this.order.id,
                        space: booking.space.id,
                        message: this.new_note,
                        time: date.format('h:mm A'),
                    },
                ]);
                this.loading = true;
                const new_booking = (yield booking.save().catch((err) => {
                    this._service.notifyError(`Failed to add note to order meeting. Error: ${err.message || err}`);
                    this.loading = false;
                    throw err;
                }));
                this.booking = new_booking;
                this.order.booking = new_booking;
                this.bookingChange.emit(new_booking);
                this.loading = false;
                this.new_note = '';
            }
        });
    }
}
OrderDetailsNotesComponent.ɵfac = function OrderDetailsNotesComponent_Factory(t) { return new (t || OrderDetailsNotesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"])); };
OrderDetailsNotesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrderDetailsNotesComponent, selectors: [["order-details-notes"]], inputs: { booking: "booking", order: "order" }, outputs: { bookingChange: "bookingChange" }, decls: 12, vars: 8, consts: [[1, "heading"], [1, "content"], [4, "ngIf", "ngIfElse"], [1, "footer"], ["appearance", "none"], ["matInput", "", "placeholder", "Type to add notes", 3, "ngModel", "disabled", "ngModelChange", "keyup.enter"], ["mat-icon-button", "", "matSuffix", "", "name", "add-note", 3, "disabled", "tapped"], [3, "icon"], ["class", "loader center", 4, "ngIf"], ["empty_state", ""], ["class", "note", 4, "ngFor", "ngForOf"], [1, "note"], [1, "text"], [1, "details"], [1, "author"], [1, "fill"], [1, "time"], [1, "loader", "center"], ["diameter", "32"], [1, "info-block", "center"], [1, "icon"]], template: function OrderDetailsNotesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Private Notes\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, OrderDetailsNotesComponent_ng_container_3_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-form-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function OrderDetailsNotesComponent_Template_input_ngModelChange_6_listener($event) { return ctx.new_note = $event; })("keyup.enter", function OrderDetailsNotesComponent_Template_input_keyup_enter_6_listener() { return ctx.addNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("tapped", function OrderDetailsNotesComponent_Template_button_tapped_7_listener() { return ctx.addNote(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "app-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OrderDetailsNotesComponent_div_9_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, OrderDetailsNotesComponent_ng_template_10_Template, 5, 2, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.notes && ctx.notes.length)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.new_note)("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx.new_note || ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](7, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatSuffix"], _acaprojects_ngx_custom_events__WEBPACK_IMPORTED_MODULE_9__["ɵb"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_10__["IconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_11__["MatSpinner"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n[_nghost-%COMP%]    > *[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.heading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1em;\n  font-weight: 500;\n  background-color: #ccc;\n}\n.content[_ngcontent-%COMP%] {\n  position: relative;\n  flex: 1;\n  min-height: 50%;\n  overflow: auto;\n  padding: 0.5em 1em;\n}\n.note[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  margin: 0.5em 0;\n}\n.note[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  padding-bottom: 0.25em;\n  border-bottom: 1px solid #f0f0f0;\n}\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: rgba(0, 0, 0, 0.6);\n  margin-top: 0.25em;\n  font-size: 0.9em;\n}\n.details[_ngcontent-%COMP%]   .fill[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 1px;\n}\n.footer[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  border-radius: 0;\n  border-top: 1px solid #ccc;\n}\n.footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  transform: translateY(0.25em);\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 100%;\n  padding: 0 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3ZlcmxheXMvb3JkZXItZGV0YWlscy1tb2RhbC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3ZlcmxheXMvb3JkZXItZGV0YWlscy1tb2RhbC9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNBSjtBRENJO0VBQ0ksV0FBQTtBQ0NSO0FER0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FDQUo7QURHQTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNBSjtBREdBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDQUo7QURFSTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQ0FBQTtBQ0FSO0FESUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNESjtBREdJO0VBQ0ksT0FBQTtFQUNBLGNBQUE7QUNEUjtBREtBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQkFBQTtBQ0ZKO0FESUk7RUFDSSw2QkFBQTtBQ0ZSO0FETUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDSEoiLCJmaWxlIjoic3JjL2FwcC9zaGVsbC9jYXRlcmluZy9vdmVybGF5cy9vcmRlci1kZXRhaWxzLW1vZGFsL21lc3NhZ2VzL21lc3NhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgID4gKiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLmhlYWRpbmcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGZsZXg6IDE7XG4gICAgbWluLWhlaWdodDogNTAlO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xufVxuXG4ubm90ZSB7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIG1hcmdpbjogLjVlbSAwO1xuXG4gICAgLnRleHQge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjI1ZW07XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjBmMGYwO1xuICAgIH1cbn1cblxuLmRldGFpbHMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiYSgjMDAwLCAuNik7XG4gICAgbWFyZ2luLXRvcDogLjI1ZW07XG4gICAgZm9udC1zaXplOiAuOWVtO1xuXG4gICAgLmZpbGwge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtaW4td2lkdGg6IDFweDtcbiAgICB9XG59XG5cbi5mb290ZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xuXG4gICAgYnV0dG9uIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC4yNWVtKTtcbiAgICB9XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgICBoZWlnaHQ6IDMuMjVlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAwIC41ZW07XG59XG4iLCI6aG9zdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCA+ICoge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMWVtO1xuICBmb250LXdlaWdodDogNTAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xufVxuXG4uY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMTtcbiAgbWluLWhlaWdodDogNTAlO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZzogMC41ZW0gMWVtO1xufVxuXG4ubm90ZSB7XG4gIGZvbnQtc2l6ZTogMC44ZW07XG4gIG1hcmdpbjogMC41ZW0gMDtcbn1cbi5ub3RlIC50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgcGFkZGluZy1ib3R0b206IDAuMjVlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XG59XG5cbi5kZXRhaWxzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgbWFyZ2luLXRvcDogMC4yNWVtO1xuICBmb250LXNpemU6IDAuOWVtO1xufVxuLmRldGFpbHMgLmZpbGwge1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDFweDtcbn1cblxuLmZvb3RlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjY2NjO1xufVxuLmZvb3RlciBidXR0b24ge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMC4yNWVtKTtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICBoZWlnaHQ6IDMuMjVlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDAgMC41ZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderDetailsNotesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'order-details-notes',
                templateUrl: './messages.component.html',
                styleUrls: ['./messages.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_3__["ApplicationService"] }]; }, { booking: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], order: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], bookingChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shell/catering/overlays/order-details-modal/order-details-modal.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/shell/catering/overlays/order-details-modal/order-details-modal.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: OrderDetailsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsModalComponent", function() { return OrderDetailsModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var src_app_services_data_catering_catering_order_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data/catering/catering-order.class */ "./src/app/services/data/catering/catering-order.class.ts");
/* harmony import */ var src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/base.directive */ "./src/app/shared/base.directive.ts");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./booking-details/booking-details.component */ "./src/app/shell/catering/overlays/order-details-modal/booking-details/booking-details.component.ts");
/* harmony import */ var _items_items_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./items/items.component */ "./src/app/shell/catering/overlays/order-details-modal/items/items.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/shell/catering/overlays/order-details-modal/messages/messages.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../shared/components/icon/icon.component */ "./src/app/shared/components/icon/icon.component.ts");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-spinner.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");



















function OrderDetailsModalComponent_mat_form_field_9_app_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-icon", 12);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", ctx_r2.status_details == null ? null : ctx_r2.status_details.icon);
} }
function OrderDetailsModalComponent_mat_form_field_9_mat_spinner_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 23);
} }
function OrderDetailsModalComponent_mat_form_field_9_mat_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const status_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", status_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](status_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", status_r5.colour);
} }
function OrderDetailsModalComponent_mat_form_field_9_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-form-field", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-select", 14, 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function OrderDetailsModalComponent_mat_form_field_9_Template_mat_select_valueChange_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.active_status = $event; })("valueChange", function OrderDetailsModalComponent_mat_form_field_9_Template_mat_select_valueChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.updateStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-select-trigger");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, OrderDetailsModalComponent_mat_form_field_9_app_icon_7_Template, 1, 1, "app-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, OrderDetailsModalComponent_mat_form_field_9_mat_spinner_8_Template, 1, 0, "mat-spinner", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, OrderDetailsModalComponent_mat_form_field_9_mat_option_11_Template, 5, 4, "mat-option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.active_status)("disabled", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", ctx_r0.loading ? "#eee" : ctx_r0.status_details == null ? null : ctx_r0.status_details.colour);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.loading);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.status_details == null ? null : ctx_r0.status_details.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.statuses);
} }
const _c0 = function () { return { type: "icon", class: "material-icons", content: "close" }; };
class OrderDetailsModalComponent extends src_app_shared_base_directive__WEBPACK_IMPORTED_MODULE_4__["BaseDirective"] {
    constructor(_service, _data) {
        super();
        this._service = _service;
        this._data = _data;
        /** Emitter for user action on the modal */
        this.event = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        /** List of available order statuses */
        this.statuses = [
            { id: 'accepted', name: 'Accepted', icon: { class: 'custom-accepted' }, colour: '#3996B6' },
            {
                id: 'preparing',
                name: 'Preparing',
                icon: { class: 'custom-preparing' },
                colour: '#E7536B',
            },
            { id: 'ready', name: 'Ready', icon: { class: 'custom-ready' }, colour: '#FFD028' },
            {
                id: 'delivered',
                name: 'Delivered',
                icon: { class: 'custom-delivered' },
                colour: '#75BB43',
            },
            {
                id: 'cancelled',
                name: 'Cancelled',
                icon: { class: 'custom-cancelled' },
                colour: '#747474',
            },
        ];
    }
    /** Active booking to display */
    get booking() {
        return this._data.booking;
    }
    set booking(bkn) {
        this._data.booking = bkn;
    }
    /** Order to display */
    get order() {
        return this._data.order;
    }
    /** Details for the active status */
    get status_details() {
        return this.statuses.find((status) => status.id === this.active_status);
    }
    /** Space associated with the order */
    get space() {
        return this._service.Spaces.find(this._data.order.location_id);
    }
    /** Details about the delivery time */
    get time() {
        const date = dayjs__WEBPACK_IMPORTED_MODULE_5__(this._data.booking.date).add(this._data.order.delivery_time, 'm');
        return `(${date.format('DD MMM YYYY')}) To be delivered at ${this._data.order.deliver_at_time}`;
    }
    ngOnInit() {
        this.active_status = this._data.order.status;
        const handleChange = (event) => {
            if (event.type === 'item_saved') {
                this.booking = event.metadata;
                this.subscription('booking_changes', this.booking.changeEvents.subscribe(handleChange));
            }
        };
        this.subscription('booking_changes', this.booking.changeEvents.subscribe(handleChange));
    }
    /** Update the status of the order in the booking */
    updateStatus() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const booking = this._data.booking;
            /* istanbul ignore else */
            if (booking) {
                this.loading = true;
                const catering = [...booking.catering];
                catering.splice(catering.findIndex((order) => order.id === this._data.order.id), 1, new src_app_services_data_catering_catering_order_class__WEBPACK_IMPORTED_MODULE_3__["CateringOrder"](Object.assign(Object.assign({}, this._data.order), { status: this.active_status })));
                booking.storePendingChange('catering', catering);
                yield booking.save().catch((err) => {
                    this._service.notifyError(`Error updating order status. Error: ${err.message || err}`);
                    this.active_status = this._data.order.status;
                    this.loading = false;
                });
                this.loading = false;
            }
        });
    }
}
OrderDetailsModalComponent.ɵfac = function OrderDetailsModalComponent_Factory(t) { return new (t || OrderDetailsModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])); };
OrderDetailsModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OrderDetailsModalComponent, selectors: [["a-order-details-modal"]], outputs: { event: "event" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]], decls: 19, vars: 10, consts: [[1, "details"], [1, "burger-icon"], [1, "location"], [1, "time"], [1, "status"], ["class", "rounded visible", "appearance", "outline", 4, "ngIf"], [1, "content"], [1, "block"], [3, "booking"], [3, "booking", "order"], [3, "booking", "order", "bookingChange"], ["mat-icon-button", "", "mat-dialog-close", "", 1, "close"], [3, "icon"], ["appearance", "outline", 1, "rounded", "visible"], ["placeholder", "New Order", 3, "value", "disabled", "valueChange"], ["select", ""], [1, "group"], [1, "icon"], [1, "wrapper"], [3, "icon", 4, "ngIf"], ["diameter", "16", 4, "ngIf"], [1, "text"], [3, "value", 4, "ngFor", "ngForOf"], ["diameter", "16"], [3, "value"], [1, "colour"]], template: function OrderDetailsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-dialog-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, OrderDetailsModalComponent_mat_form_field_9_Template, 12, 8, "mat-form-field", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "order-booking-details", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "order-details-items", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "order-details-notes", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("bookingChange", function OrderDetailsModalComponent_Template_order_details_notes_bookingChange_16_listener($event) { return ctx.booking = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "app-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.space == null ? null : ctx.space.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.time);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.statuses && ctx.statuses.length > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("booking", ctx.booking);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("booking", ctx.booking)("order", ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("booking", ctx.booking)("order", ctx.order);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("icon", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogContent"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _booking_details_booking_details_component__WEBPACK_IMPORTED_MODULE_8__["OrderBookingDetailsComponent"], _items_items_component__WEBPACK_IMPORTED_MODULE_9__["OrderDetailsItemsComponent"], _messages_messages_component__WEBPACK_IMPORTED_MODULE_10__["OrderDetailsNotesComponent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogClose"], _shared_components_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__["IconComponent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelect"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectTrigger"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_15__["MatSpinner"], _angular_material_core__WEBPACK_IMPORTED_MODULE_16__["MatOption"]], styles: ["main[_ngcontent-%COMP%] {\n  position: relative;\n  width: 64em;\n  max-width: 95vw;\n  overflow: hidden auto;\n}\n.burger-icon[_ngcontent-%COMP%] {\n  height: 8em;\n  width: 8em;\n  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMTY2LjkwNCIgaGVpZ2h0PSIxNjAuODIxIiB2aWV3Qm94PSIwIDAgMTY2LjkwNCAxNjAuODIxIj4gIDxkZWZzPiAgICA8cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbC1ncmFkaWVudCIgY3g9IjAuNSIgY3k9IjAuNSIgcj0iMC41IiBncmFkaWVudFVuaXRzPSJvYmplY3RCb3VuZGluZ0JveCI+ICAgICAgPHN0b3Agb2Zmc2V0PSIwIiBzdG9wLW9wYWNpdHk9IjAuMzAyIi8+ICAgICAgPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjZmZmIiBzdG9wLW9wYWNpdHk9IjAuMzAyIi8+ICAgIDwvcmFkaWFsR3JhZGllbnQ+ICAgIDxjbGlwUGF0aCBpZD0iY2xpcC1wYXRoIj4gICAgICA8cGF0aCBpZD0iQmFja2dyb3VuZDA4TWFzayIgZD0iTTY3LjgyMywxNDcuMTA2QzMwLjM2NiwxNDcuMTA2LDAsMTQwLjM4NCwwLDEwMi44NjEsMCw5NC4zODUsMi40MTEsMCwyLjQxMSwwSDEzNS42NDZWMTAyLjg2MUMxMzUuNjQ2LDE0MC4zODQsMTA1LjI4MSwxNDcuMTA2LDY3LjgyMywxNDcuMTA2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSIgZmlsbD0ibm9uZSIvPiAgICA8L2NsaXBQYXRoPiAgPC9kZWZzPiAgPGcgaWQ9Ikdyb3VwXzQ4ODQiIGRhdGEtbmFtZT0iR3JvdXAgNDg4NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+ICAgIDxlbGxpcHNlIGlkPSJTaGFkb3ciIGN4PSI3Ny4wNjkiIGN5PSIxNy41MjkiIHJ4PSI3Ny4wNjkiIHJ5PSIxNy41MjkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjc2NyAxMjUuNzY0KSIgZmlsbD0idXJsKCNyYWRpYWwtZ3JhZGllbnQpIi8+ICAgIDxnIGlkPSJHcm91cF80ODgyIiBkYXRhLW5hbWU9Ikdyb3VwIDQ4ODIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDApIj4gICAgICA8ZyBpZD0iQmFja2dyb3VuZDA4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+ICAgICAgICA8cGF0aCBpZD0iQmFja2dyb3VuZDA4LTIiIGRhdGEtbmFtZT0iQmFja2dyb3VuZDA4IiBkPSJNMTE2LjU4Niw0My4yNDhjMCwzMi4yNTEtMjYuMSwzOC4wMjktNTguMjkzLDM4LjAyOVMwLDc1LjUsMCw0My4yNDgsMjYuMSwwLDU4LjI5MywwczU4LjI5MywxMSw1OC4yOTMsNDMuMjQ4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMS42MSA0OC4xNTEpIiBmaWxsPSIjMDUxYzJjIi8+ICAgICAgPC9nPiAgICAgIDxnIGlkPSJHcm91cF80ODgzIiBkYXRhLW5hbWU9Ikdyb3VwIDQ4ODMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyLjcxMiA2NC44MzUpIj4gICAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGUiIHdpZHRoPSIzNi4yOTEiIGhlaWdodD0iNDcuODQyIiByeD0iMTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMTAuNjEpIHJvdGF0ZSgtMTcpIiBmaWxsPSIjZmZmIi8+ICAgICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlLTIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIiB3aWR0aD0iMjYuMzkzIiBoZWlnaHQ9IjMuOTg3IiByeD0iMS45OTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuNTc4IDE1LjIpIHJvdGF0ZSgtMTcpIiBmaWxsPSIjMWY0MGU2Ii8+ICAgICAgICA8cGF0aCBpZD0iQ29tYmluZWRfU2hhcGUiIGRhdGEtbmFtZT0iQ29tYmluZWQgU2hhcGUiIGQ9Ik0uNjY0LDIyLjU5MmEuNjY0LjY2NCwwLDEsMSwwLTEuMzI4SDI1LjcyOGEuNjY0LjY2NCwwLDEsMSwwLDEuMzI4Wm0wLTIuNjU4YS42NjUuNjY1LDAsMCwxLDAtMS4zMjlIMjUuNzI4YS42NjUuNjY1LDAsMSwxLDAsMS4zMjlabTAtMi42NThhLjY2NS42NjUsMCwwLDEsMC0xLjMyOUgyNS43MjhhLjY2NS42NjUsMCwxLDEsMCwxLjMyOVptMC0yLjY1OGEuNjY1LjY2NSwwLDAsMSwwLTEuMzI5SDI1LjcyOGEuNjY1LjY2NSwwLDEsMSwwLDEuMzI5Wm0wLTIuNjU5YS42NjQuNjY0LDAsMSwxLDAtMS4zMjhIMjUuNzI4YS42NjQuNjY0LDAsMSwxLDAsMS4zMjhabTAtMi42NThhLjY2NC42NjQsMCwwLDEsMC0xLjMyOEgyNS43MjhhLjY2NC42NjQsMCwxLDEsMCwxLjMyOFptMC0yLjY1OGEuNjY1LjY2NSwwLDAsMSwwLTEuMzI5SDI1LjcyOGEuNjY1LjY2NSwwLDEsMSwwLDEuMzI5Wm0wLTIuNjU4YS42NjUuNjY1LDAsMCwxLDAtMS4zMjlIMjUuNzI4YS42NjUuNjY1LDAsMSwxLDAsMS4zMjlabTAtMi42NThBLjY2NS42NjUsMCwwLDEsLjY2NCwwSDI1LjcyOGEuNjY1LjY2NSwwLDEsMSwwLDEuMzI5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4zOTUgMjQuNDE0KSByb3RhdGUoLTE3KSIgZmlsbD0iI2U2ZTZlNiIvPiAgICAgIDwvZz4gICAgICA8ZyBpZD0iR3JvdXBfNDg4Mi0yIiBkYXRhLW5hbWU9Ikdyb3VwIDQ4ODIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ2LjA4MyA4NS44NTEpIj4gICAgICAgIDxwYXRoIGlkPSJQYXRoXzE5Nzk2IiBkYXRhLW5hbWU9IlBhdGggMTk3OTYiIGQ9Ik01MDU2LjEzNCwxMjYuNTA4djE5LjI0Nmg2OC4yMzdWMTI1LjcyMWwtMTYuNzg2LTE5Ljk2NS0zNC42NzQtLjk4NS0xNC44LDE1LjcwNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MDU0LjU1IC0xMDEuNzUzKSIgZmlsbD0iI2ZmZiIvPiAgICAgICAgPGcgaWQ9IkZpbGxlZF9JY29ucyIgZGF0YS1uYW1lPSJGaWxsZWQgSWNvbnMiPiAgICAgICAgICA8cGF0aCBpZD0iUGF0aF8xOTczNCIgZGF0YS1uYW1lPSJQYXRoIDE5NzM0IiBkPSJNNjcuMzEyLDEzSDUuMTY0QTQuNjcxLDQuNjcxLDAsMCwwLC41LDE3LjY2MXYzLjEwN0E0LjY2Myw0LjY2MywwLDAsMCw1LjE2NCwyNS40M0g2Ny4zMTJhNC42NjUsNC42NjUsMCwwLDAsNC42NjEtNC42NjFWMTcuNjYxQTQuNjczLDQuNjczLDAsMCwwLDY3LjMxMiwxM1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUwMyAxNC45NDgpIiBmaWxsPSIjMWY0MGU2Ii8+ICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzE5NzM1IiBkYXRhLW5hbWU9IlBhdGggMTk3MzUiIGQ9Ik02OS4zNjYsMjguODQ3VjI1Ljc1OEEyMS43OCwyMS43OCwwLDAsMCw0Ny42MTQsNC4wMDZIMjIuNzU1QTIxLjc3OCwyMS43NzgsMCwwLDAsMSwyNS43NTh2My4wODlaTTUwLjcyMSwxMy4zMjhhMS41NTQsMS41NTQsMCwxLDEtMS41NTQsMS41NTRBMS41NTgsMS41NTgsMCwwLDEsNTAuNzIxLDEzLjMyOFptLTcuNzY4LTMuMTA3QTEuNTU0LDEuNTU0LDAsMSwxLDQxLjQsMTEuNzc0LDEuNTU4LDEuNTU4LDAsMCwxLDQyLjk1MywxMC4yMjFabS03Ljc2OCwzLjEwN2ExLjU1NCwxLjU1NCwwLDEsMS0xLjU1NCwxLjU1NEExLjU1OCwxLjU1OCwwLDAsMSwzNS4xODQsMTMuMzI4Wm0tNy43NjgtMy4xMDdhMS41NTQsMS41NTQsMCwxLDEtMS41NTQsMS41NTRBMS41NTgsMS41NTgsMCwwLDEsMjcuNDE2LDEwLjIyMVptLTcuNzY4LDMuMTA3YTEuNTU0LDEuNTU0LDAsMSwxLTEuNTU0LDEuNTU0QTEuNTU4LDEuNTU4LDAsMCwxLDE5LjY0NywxMy4zMjhaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjU1MSAtNC4wMDYpIiBmaWxsPSIjMDBhOWY0Ii8+ICAgICAgICAgIDxwYXRoIGlkPSJQYXRoXzE5NzM2IiBkYXRhLW5hbWU9IlBhdGggMTk3MzYiIGQ9Ik0xLDE4djEuNTcyYTcuNzU5LDcuNzU5LDAsMCwwLDcuNzY4LDcuNzVINjEuNmE3Ljc2MSw3Ljc2MSwwLDAsMCw3Ljc2OC03Ljc1VjE4WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41NTEgMjUuNDg1KSIgZmlsbD0iIzAwYTlmNCIvPiAgICAgICAgPC9nPiAgICAgIDwvZz4gICAgPC9nPiAgPC9nPjwvc3ZnPg==);\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: 50% 50%;\n}\n.details[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  padding: 0.5em;\n}\n.details[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin-bottom: 0.25em;\n}\n.location[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\nmat-dialog-content[_ngcontent-%COMP%] {\n  max-height: 95vh;\n}\n.mat-active[_ngcontent-%COMP%] {\n  color: #1937ea;\n}\n.group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.group[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.group[_ngcontent-%COMP%]   .colour[_ngcontent-%COMP%] {\n  position: relative;\n  left: -8px;\n  height: 8px;\n  width: 8px;\n  border-radius: 100%;\n  transition: height 200ms, width 200ms;\n  transform: translateX(50%);\n}\n.group[_ngcontent-%COMP%]:hover   .colour[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}\n.group[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1em;\n  width: 1em;\n  margin-right: 0.75em;\n  background-color: none;\n  color: #fff;\n}\n.group[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%] {\n  height: 1.5em;\n  min-width: 1.5em;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 100%;\n  margin-top: 4px;\n}\n.group[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n}\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  overflow: auto hidden;\n  padding: 0 2em 2em;\n}\n.block[_ngcontent-%COMP%] {\n  height: 24em;\n  flex: 1;\n  min-width: 18em;\n  margin: 0 0.75em;\n  border: 1px solid #ccc;\n}\n.block[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n.block[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5em;\n  right: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hhcmVkL3N0eWxlcy92YXJpYWJsZXMuc2NzcyIsIi9idWlsZHMvYWNhLWVuZ2luZS9tY2tpbnNleS9tY2tpbnNleS1jb25jaWVyZ2UtZGFzaGJvYXJkL3NyYy9hcHAvc2hlbGwvY2F0ZXJpbmcvb3ZlcmxheXMvb3JkZXItZGV0YWlscy1tb2RhbC9vcmRlci1kZXRhaWxzLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9zaGVsbC9jYXRlcmluZy9vdmVybGF5cy9vcmRlci1kZXRhaWxzLW1vZGFsL29yZGVyLWRldGFpbHMtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7OzBCQUFBO0FBZ0NBOztjQUFBO0FBYUE7O3NCQUFBO0FDM0NBO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDT0o7QURKQTtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0EseTZKQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0FDT0o7QURKQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQ09KO0FETEk7RUFDSSxxQkFBQTtBQ09SO0FESEE7RUFDSSxnQkFBQTtBQ01KO0FESEE7RUFDSSxnQkFBQTtBQ01KO0FESEE7RUFDSSxjRG5CWTtBRXlCaEI7QURIQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQ01KO0FESkk7RUFDSSxPQUFBO0FDTVI7QURISTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQ0FBQTtFQUNBLDBCQUFBO0FDS1I7QUREUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDR1o7QURDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtBQ0NSO0FEQ1E7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0NaO0FERVE7RUFDSSxnQkFBQTtBQ0FaO0FES0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FDRko7QURLQTtFQUNJLFlBQUE7RUFDQSxPQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNGSjtBRElJO0VBQ0ksY0FBQTtBQ0ZSO0FES0k7RUFDSSxlQUFBO0FDSFI7QURPQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNKSiIsImZpbGUiOiJzcmMvYXBwL3NoZWxsL2NhdGVyaW5nL292ZXJsYXlzL29yZGVyLWRldGFpbHMtbW9kYWwvb3JkZXItZGV0YWlscy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG5cbiRmb250LWRhcms6ICMwMDA7XG4kZm9udC1saWdodDogI2ZmZjtcblxuJHN1Y2Nlc3M6ICM0M2EwNDc7XG4kc3VjY2Vzcy1saWdodDogbGlnaHRlbigkc3VjY2VzcywgMTApO1xuJHN1Y2Nlc3MtZGFyazogZGFya2VuKCRzdWNjZXNzLCAxMCk7XG5cbiRwZW5kaW5nOiAjZmZiMzAwO1xuJHBlbmRpbmctbGlnaHQ6IGxpZ2h0ZW4oJHBlbmRpbmcsIDEwKTtcbiRwZW5kaW5nLWRhcms6IGRhcmtlbigkcGVuZGluZywgMTApO1xuXG4kZXJyb3I6ICNlNTM5MzU7XG4kZXJyb3ItbGlnaHQ6IGxpZ2h0ZW4oJGVycm9yLCAxMCk7XG4kZXJyb3ItZGFyazogZGFya2VuKCRlcnJvciwgMTApO1xuXG4kY29sb3ItcHJpbWFyeTogIzE5MzdlYTtcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxMCk7XG4kY29sb3ItcHJpbWFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXByaW1hcnksIDEwKTtcblxuJGNvbG9yLXNlY29uZGFyeTogIzQyODVGNDtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTApO1xuXG4kYmFja2dyb3VuZDogI2YwZjBmMDtcbiRmb290ZXItYmFjazogIzI2MzIzODtcblxuJGNvbG9yLXRlcm5hcnk6ICMwNTFjMmM7XG5cbi8qPT09PT09PT09PT0qXFxcbnx8ICAgRm9udHMgICB8fFxuXFwqPT09PT09PT09PT0qL1xuXG4kZm9udC1zdGFjazogXCJUaGVpbmhhcmR0XCIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG5cbiRoZWFkaW5nLWZvbnQ6IFwiTGFyaXNoTWNLaW5zZXlcIiwgJ0dlb3JnaWEnLCBzZXJpZjtcbiRmb250OiAkZm9udC1zdGFjaztcblxuJGJhc2Utc2l6ZTogMTZweDtcbiR0YWJsZXQtc2l6ZTogMTZweDtcbiRtb2JpbGUtc2l6ZTogMTZweDtcblxuLyo9PT09PT09PT09PT09PT09PT09KlxcXG58fCAgIE1lZGlhIFF1ZXJpZXMgICB8fFxuXFwqPT09PT09PT09PT09PT09PT09PSovXG5cbiRicmVhay1tb2JpbGU6IDQ1MHB4O1xuJGJyZWFrLXRhYmxldDogODAwcHg7XG4kYnJlYWstbGFwdG9wOiAxMDI0cHg7XG5cbiRicmVhay1sYW5kc2NhcGUtbW9iaWxlOiA4MDBweDtcbiRicmVhay1sYW5kc2NhcGUtdGFibGV0OiAxMDQ4cHg7XG4kYnJlYWstbGFuZHNjYXBlLWxhcHRvcDogMTI4MHB4O1xuIiwiXG5AaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5tYWluIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDY0ZW07XG4gICAgbWF4LXdpZHRoOiA5NXZ3O1xuICAgIG92ZXJmbG93OiBoaWRkZW4gYXV0bztcbn1cblxuLmJ1cmdlci1pY29ue1xuICAgIGhlaWdodDo4ZW07XG4gICAgd2lkdGg6OGVtO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjNhV1IwYUQwaU1UWTJMamt3TkNJZ2FHVnBaMmgwUFNJeE5qQXVPREl4SWlCMmFXVjNRbTk0UFNJd0lEQWdNVFkyTGprd05DQXhOakF1T0RJeElqNGdJRHhrWldaelBpQWdJQ0E4Y21Ga2FXRnNSM0poWkdsbGJuUWdhV1E5SW5KaFpHbGhiQzFuY21Ga2FXVnVkQ0lnWTNnOUlqQXVOU0lnWTNrOUlqQXVOU0lnY2owaU1DNDFJaUJuY21Ga2FXVnVkRlZ1YVhSelBTSnZZbXBsWTNSQ2IzVnVaR2x1WjBKdmVDSStJQ0FnSUNBZ1BITjBiM0FnYjJabWMyVjBQU0l3SWlCemRHOXdMVzl3WVdOcGRIazlJakF1TXpBeUlpOCtJQ0FnSUNBZ1BITjBiM0FnYjJabWMyVjBQU0l4SWlCemRHOXdMV052Ykc5eVBTSWpabVptSWlCemRHOXdMVzl3WVdOcGRIazlJakF1TXpBeUlpOCtJQ0FnSUR3dmNtRmthV0ZzUjNKaFpHbGxiblErSUNBZ0lEeGpiR2x3VUdGMGFDQnBaRDBpWTJ4cGNDMXdZWFJvSWo0Z0lDQWdJQ0E4Y0dGMGFDQnBaRDBpUW1GamEyZHliM1Z1WkRBNFRXRnpheUlnWkQwaVRUWTNMamd5TXl3eE5EY3VNVEEyUXpNd0xqTTJOaXd4TkRjdU1UQTJMREFzTVRRd0xqTTROQ3d3TERFd01pNDROakVzTUN3NU5DNHpPRFVzTWk0ME1URXNNQ3d5TGpReE1Td3dTREV6TlM0Mk5EWldNVEF5TGpnMk1VTXhNelV1TmpRMkxERTBNQzR6T0RRc01UQTFMakk0TVN3eE5EY3VNVEEyTERZM0xqZ3lNeXd4TkRjdU1UQTJXaUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01DQXdLU0lnWm1sc2JEMGlibTl1WlNJdlBpQWdJQ0E4TDJOc2FYQlFZWFJvUGlBZ1BDOWtaV1p6UGlBZ1BHY2dhV1E5SWtkeWIzVndYelE0T0RRaUlHUmhkR0V0Ym1GdFpUMGlSM0p2ZFhBZ05EZzROQ0lnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01DQXdLU0krSUNBZ0lEeGxiR3hwY0hObElHbGtQU0pUYUdGa2IzY2lJR040UFNJM055NHdOamtpSUdONVBTSXhOeTQxTWpraUlISjRQU0kzTnk0d05qa2lJSEo1UFNJeE55NDFNamtpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtERXlMamMyTnlBeE1qVXVOelkwS1NJZ1ptbHNiRDBpZFhKc0tDTnlZV1JwWVd3dFozSmhaR2xsYm5RcElpOCtJQ0FnSUR4bklHbGtQU0pIY205MWNGODBPRGd5SWlCa1lYUmhMVzVoYldVOUlrZHliM1Z3SURRNE9ESWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RBcElqNGdJQ0FnSUNBOFp5QnBaRDBpUW1GamEyZHliM1Z1WkRBNElpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d3SURBcElpQmpiR2x3TFhCaGRHZzlJblZ5YkNnalkyeHBjQzF3WVhSb0tTSStJQ0FnSUNBZ0lDQThjR0YwYUNCcFpEMGlRbUZqYTJkeWIzVnVaREE0TFRJaUlHUmhkR0V0Ym1GdFpUMGlRbUZqYTJkeWIzVnVaREE0SWlCa1BTSk5NVEUyTGpVNE5pdzBNeTR5TkRoak1Dd3pNaTR5TlRFdE1qWXVNU3d6T0M0d01qa3ROVGd1TWprekxETTRMakF5T1ZNd0xEYzFMalVzTUN3ME15NHlORGdzTWpZdU1Td3dMRFU0TGpJNU15d3djelU0TGpJNU15d3hNU3cxT0M0eU9UTXNORE11TWpRNElpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d4TVM0Mk1TQTBPQzR4TlRFcElpQm1hV3hzUFNJak1EVXhZekpqSWk4K0lDQWdJQ0FnUEM5blBpQWdJQ0FnSUR4bklHbGtQU0pIY205MWNGODBPRGd6SWlCa1lYUmhMVzVoYldVOUlrZHliM1Z3SURRNE9ETWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RJeUxqY3hNaUEyTkM0NE16VXBJajRnSUNBZ0lDQWdJRHh5WldOMElHbGtQU0pTWldOMFlXNW5iR1VpSUhkcFpIUm9QU0l6Tmk0eU9URWlJR2hsYVdkb2REMGlORGN1T0RReUlpQnllRDBpTVRFaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLREFnTVRBdU5qRXBJSEp2ZEdGMFpTZ3RNVGNwSWlCbWFXeHNQU0lqWm1abUlpOCtJQ0FnSUNBZ0lDQThjbVZqZENCcFpEMGlVbVZqZEdGdVoyeGxMVElpSUdSaGRHRXRibUZ0WlQwaVVtVmpkR0Z1WjJ4bElpQjNhV1IwYUQwaU1qWXVNemt6SWlCb1pXbG5hSFE5SWpNdU9UZzNJaUJ5ZUQwaU1TNDVPVE1pSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtEWXVOVGM0SURFMUxqSXBJSEp2ZEdGMFpTZ3RNVGNwSWlCbWFXeHNQU0lqTVdZME1HVTJJaTgrSUNBZ0lDQWdJQ0E4Y0dGMGFDQnBaRDBpUTI5dFltbHVaV1JmVTJoaGNHVWlJR1JoZEdFdGJtRnRaVDBpUTI5dFltbHVaV1FnVTJoaGNHVWlJR1E5SWswdU5qWTBMREl5TGpVNU1tRXVOalkwTGpZMk5Dd3dMREVzTVN3d0xURXVNekk0U0RJMUxqY3lPR0V1TmpZMExqWTJOQ3d3TERFc01Td3dMREV1TXpJNFdtMHdMVEl1TmpVNFlTNDJOalV1TmpZMUxEQXNNQ3d4TERBdE1TNHpNamxJTWpVdU56STRZUzQyTmpVdU5qWTFMREFzTVN3eExEQXNNUzR6TWpsYWJUQXRNaTQyTlRoaExqWTJOUzQyTmpVc01Dd3dMREVzTUMweExqTXlPVWd5TlM0M01qaGhMalkyTlM0Mk5qVXNNQ3d4TERFc01Dd3hMak15T1ZwdE1DMHlMalkxT0dFdU5qWTFMalkyTlN3d0xEQXNNU3d3TFRFdU16STVTREkxTGpjeU9HRXVOalkxTGpZMk5Td3dMREVzTVN3d0xERXVNekk1V20wd0xUSXVOalU1WVM0Mk5qUXVOalkwTERBc01Td3hMREF0TVM0ek1qaElNalV1TnpJNFlTNDJOalF1TmpZMExEQXNNU3d4TERBc01TNHpNamhhYlRBdE1pNDJOVGhoTGpZMk5DNDJOalFzTUN3d0xERXNNQzB4TGpNeU9FZ3lOUzQzTWpoaExqWTJOQzQyTmpRc01Dd3hMREVzTUN3eExqTXlPRnB0TUMweUxqWTFPR0V1TmpZMUxqWTJOU3d3TERBc01Td3dMVEV1TXpJNVNESTFMamN5T0dFdU5qWTFMalkyTlN3d0xERXNNU3d3TERFdU16STVXbTB3TFRJdU5qVTRZUzQyTmpVdU5qWTFMREFzTUN3eExEQXRNUzR6TWpsSU1qVXVOekk0WVM0Mk5qVXVOalkxTERBc01Td3hMREFzTVM0ek1qbGFiVEF0TWk0Mk5UaEJMalkyTlM0Mk5qVXNNQ3d3TERFc0xqWTJOQ3d3U0RJMUxqY3lPR0V1TmpZMUxqWTJOU3d3TERFc01Td3dMREV1TXpJNVdpSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvT1M0ek9UVWdNalF1TkRFMEtTQnliM1JoZEdVb0xURTNLU0lnWm1sc2JEMGlJMlUyWlRabE5pSXZQaUFnSUNBZ0lEd3ZaejRnSUNBZ0lDQThaeUJwWkQwaVIzSnZkWEJmTkRnNE1pMHlJaUJrWVhSaExXNWhiV1U5SWtkeWIzVndJRFE0T0RJaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLRFEyTGpBNE15QTROUzQ0TlRFcElqNGdJQ0FnSUNBZ0lEeHdZWFJvSUdsa1BTSlFZWFJvWHpFNU56azJJaUJrWVhSaExXNWhiV1U5SWxCaGRHZ2dNVGszT1RZaUlHUTlJazAxTURVMkxqRXpOQ3d4TWpZdU5UQTRkakU1TGpJME5tZzJPQzR5TXpkV01USTFMamN5TVd3dE1UWXVOemcyTFRFNUxqazJOUzB6TkM0Mk56UXRMams0TlMweE5DNDRMREUxTGpjd05sb2lJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0MwMU1EVTBMalUxSUMweE1ERXVOelV6S1NJZ1ptbHNiRDBpSTJabVppSXZQaUFnSUNBZ0lDQWdQR2NnYVdROUlrWnBiR3hsWkY5SlkyOXVjeUlnWkdGMFlTMXVZVzFsUFNKR2FXeHNaV1FnU1dOdmJuTWlQaUFnSUNBZ0lDQWdJQ0E4Y0dGMGFDQnBaRDBpVUdGMGFGOHhPVGN6TkNJZ1pHRjBZUzF1WVcxbFBTSlFZWFJvSURFNU56TTBJaUJrUFNKTk5qY3VNekV5TERFelNEVXVNVFkwUVRRdU5qY3hMRFF1TmpjeExEQXNNQ3d3TEM0MUxERTNMalkyTVhZekxqRXdOMEUwTGpZMk15dzBMalkyTXl3d0xEQXNNQ3cxTGpFMk5Dd3lOUzQwTTBnMk55NHpNVEpoTkM0Mk5qVXNOQzQyTmpVc01Dd3dMREFzTkM0Mk5qRXROQzQyTmpGV01UY3VOall4UVRRdU5qY3pMRFF1TmpjekxEQXNNQ3d3TERZM0xqTXhNaXd4TTFvaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLQzB3TGpVd015QXhOQzQ1TkRncElpQm1hV3hzUFNJak1XWTBNR1UySWk4K0lDQWdJQ0FnSUNBZ0lEeHdZWFJvSUdsa1BTSlFZWFJvWHpFNU56TTFJaUJrWVhSaExXNWhiV1U5SWxCaGRHZ2dNVGszTXpVaUlHUTlJazAyT1M0ek5qWXNNamd1T0RRM1ZqSTFMamMxT0VFeU1TNDNPQ3d5TVM0M09Dd3dMREFzTUN3ME55NDJNVFFzTkM0d01EWklNakl1TnpVMVFUSXhMamMzT0N3eU1TNDNOemdzTUN3d0xEQXNNU3d5TlM0M05UaDJNeTR3T0RsYVRUVXdMamN5TVN3eE15NHpNamhoTVM0MU5UUXNNUzQxTlRRc01Dd3hMREV0TVM0MU5UUXNNUzQxTlRSQk1TNDFOVGdzTVM0MU5UZ3NNQ3d3TERFc05UQXVOekl4TERFekxqTXlPRnB0TFRjdU56WTRMVE11TVRBM1FURXVOVFUwTERFdU5UVTBMREFzTVN3eExEUXhMalFzTVRFdU56YzBMREV1TlRVNExERXVOVFU0TERBc01Dd3hMRFF5TGprMU15d3hNQzR5TWpGYWJTMDNMamMyT0N3ekxqRXdOMkV4TGpVMU5Dd3hMalUxTkN3d0xERXNNUzB4TGpVMU5Dd3hMalUxTkVFeExqVTFPQ3d4TGpVMU9Dd3dMREFzTVN3ek5TNHhPRFFzTVRNdU16STRXbTB0Tnk0M05qZ3RNeTR4TURkaE1TNDFOVFFzTVM0MU5UUXNNQ3d4TERFdE1TNDFOVFFzTVM0MU5UUkJNUzQxTlRnc01TNDFOVGdzTUN3d0xERXNNamN1TkRFMkxERXdMakl5TVZwdExUY3VOelk0TERNdU1UQTNZVEV1TlRVMExERXVOVFUwTERBc01Td3hMVEV1TlRVMExERXVOVFUwUVRFdU5UVTRMREV1TlRVNExEQXNNQ3d4TERFNUxqWTBOeXd4TXk0ek1qaGFJaUIwY21GdWMyWnZjbTA5SW5SeVlXNXpiR0YwWlNnd0xqVTFNU0F0TkM0d01EWXBJaUJtYVd4c1BTSWpNREJoT1dZMElpOCtJQ0FnSUNBZ0lDQWdJRHh3WVhSb0lHbGtQU0pRWVhSb1h6RTVOek0ySWlCa1lYUmhMVzVoYldVOUlsQmhkR2dnTVRrM016WWlJR1E5SWsweExERTRkakV1TlRjeVlUY3VOelU1TERjdU56VTVMREFzTUN3d0xEY3VOelk0TERjdU56VklOakV1Tm1FM0xqYzJNU3czTGpjMk1Td3dMREFzTUN3M0xqYzJPQzAzTGpjMVZqRTRXaUlnZEhKaGJuTm1iM0p0UFNKMGNtRnVjMnhoZEdVb01DNDFOVEVnTWpVdU5EZzFLU0lnWm1sc2JEMGlJekF3WVRsbU5DSXZQaUFnSUNBZ0lDQWdQQzluUGlBZ0lDQWdJRHd2Wno0Z0lDQWdQQzluUGlBZ1BDOW5Qand2YzNablBnPT0pO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XG59XG5cbi5kZXRhaWxzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAuNWVtO1xuXG4gICAgPiAqIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjI1ZW07XG4gICAgfVxufVxuXG4ubG9jYXRpb24ge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbm1hdC1kaWFsb2ctY29udGVudCB7XG4gICAgbWF4LWhlaWdodDogOTV2aDtcbn1cblxuLm1hdC1hY3RpdmUge1xuICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeTtcbn1cblxuLmdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAudGV4dCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgfVxuXG4gICAgLmNvbG91ciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbGVmdDogLThweDtcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAyMDBtcywgd2lkdGggMjAwbXM7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xuICAgIH1cblxuICAgICY6aG92ZXIge1xuICAgICAgICAuY29sb3VyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmljb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgIHdpZHRoOiAxZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjc1ZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuXG4gICAgICAgIC53cmFwcGVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMS41ZW07XG4gICAgICAgICAgICBtaW4td2lkdGg6IDEuNWVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBhcHAtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IC44ZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgb3ZlcmZsb3c6IGF1dG8gaGlkZGVuO1xuICAgIHBhZGRpbmc6IDAgMmVtIDJlbTtcbn1cblxuLmJsb2NrIHtcbiAgICBoZWlnaHQ6IDI0ZW07XG4gICAgZmxleDogMTtcbiAgICBtaW4td2lkdGg6IDE4ZW07XG4gICAgbWFyZ2luOiAwIC43NWVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cbiAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgfVxuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbn1cblxuLmNsb3NlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAuNWVtO1xuICAgIHJpZ2h0OiAuNWVtO1xufVxuIiwiLyo9PT09PT09PT09PT09PT09PT09PT09PSpcXFxufHwgIEFwcGxpY2F0aW9uIENvbG91cnMgIHx8XG5cXCo9PT09PT09PT09PT09PT09PT09PT09PSovXG4vKj09PT09PT09PT09KlxcXG58fCAgIEZvbnRzICAgfHxcblxcKj09PT09PT09PT09Ki9cbi8qPT09PT09PT09PT09PT09PT09PSpcXFxufHwgICBNZWRpYSBRdWVyaWVzICAgfHxcblxcKj09PT09PT09PT09PT09PT09PT0qL1xubWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDY0ZW07XG4gIG1heC13aWR0aDogOTV2dztcbiAgb3ZlcmZsb3c6IGhpZGRlbiBhdXRvO1xufVxuXG4uYnVyZ2VyLWljb24ge1xuICBoZWlnaHQ6IDhlbTtcbiAgd2lkdGg6IDhlbTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCM2FXUjBhRDBpTVRZMkxqa3dOQ0lnYUdWcFoyaDBQU0l4TmpBdU9ESXhJaUIyYVdWM1FtOTRQU0l3SURBZ01UWTJMamt3TkNBeE5qQXVPREl4SWo0Z0lEeGtaV1p6UGlBZ0lDQThjbUZrYVdGc1IzSmhaR2xsYm5RZ2FXUTlJbkpoWkdsaGJDMW5jbUZrYVdWdWRDSWdZM2c5SWpBdU5TSWdZM2s5SWpBdU5TSWdjajBpTUM0MUlpQm5jbUZrYVdWdWRGVnVhWFJ6UFNKdlltcGxZM1JDYjNWdVpHbHVaMEp2ZUNJK0lDQWdJQ0FnUEhOMGIzQWdiMlptYzJWMFBTSXdJaUJ6ZEc5d0xXOXdZV05wZEhrOUlqQXVNekF5SWk4K0lDQWdJQ0FnUEhOMGIzQWdiMlptYzJWMFBTSXhJaUJ6ZEc5d0xXTnZiRzl5UFNJalptWm1JaUJ6ZEc5d0xXOXdZV05wZEhrOUlqQXVNekF5SWk4K0lDQWdJRHd2Y21Ga2FXRnNSM0poWkdsbGJuUStJQ0FnSUR4amJHbHdVR0YwYUNCcFpEMGlZMnhwY0Mxd1lYUm9JajRnSUNBZ0lDQThjR0YwYUNCcFpEMGlRbUZqYTJkeWIzVnVaREE0VFdGemF5SWdaRDBpVFRZM0xqZ3lNeXd4TkRjdU1UQTJRek13TGpNMk5pd3hORGN1TVRBMkxEQXNNVFF3TGpNNE5Dd3dMREV3TWk0NE5qRXNNQ3c1TkM0ek9EVXNNaTQwTVRFc01Dd3lMalF4TVN3d1NERXpOUzQyTkRaV01UQXlMamcyTVVNeE16VXVOalEyTERFME1DNHpPRFFzTVRBMUxqSTRNU3d4TkRjdU1UQTJMRFkzTGpneU15d3hORGN1TVRBMldpSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTUNBd0tTSWdabWxzYkQwaWJtOXVaU0l2UGlBZ0lDQThMMk5zYVhCUVlYUm9QaUFnUEM5a1pXWnpQaUFnUEdjZ2FXUTlJa2R5YjNWd1h6UTRPRFFpSUdSaGRHRXRibUZ0WlQwaVIzSnZkWEFnTkRnNE5DSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTUNBd0tTSStJQ0FnSUR4bGJHeHBjSE5sSUdsa1BTSlRhR0ZrYjNjaUlHTjRQU0kzTnk0d05qa2lJR041UFNJeE55NDFNamtpSUhKNFBTSTNOeTR3TmpraUlISjVQU0l4Tnk0MU1qa2lJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RFeUxqYzJOeUF4TWpVdU56WTBLU0lnWm1sc2JEMGlkWEpzS0NOeVlXUnBZV3d0WjNKaFpHbGxiblFwSWk4K0lDQWdJRHhuSUdsa1BTSkhjbTkxY0Y4ME9EZ3lJaUJrWVhSaExXNWhiV1U5SWtkeWIzVndJRFE0T0RJaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLREFwSWo0Z0lDQWdJQ0E4WnlCcFpEMGlRbUZqYTJkeWIzVnVaREE0SWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3dJREFwSWlCamJHbHdMWEJoZEdnOUluVnliQ2dqWTJ4cGNDMXdZWFJvS1NJK0lDQWdJQ0FnSUNBOGNHRjBhQ0JwWkQwaVFtRmphMmR5YjNWdVpEQTRMVElpSUdSaGRHRXRibUZ0WlQwaVFtRmphMmR5YjNWdVpEQTRJaUJrUFNKTk1URTJMalU0Tml3ME15NHlORGhqTUN3ek1pNHlOVEV0TWpZdU1Td3pPQzR3TWprdE5UZ3VNamt6TERNNExqQXlPVk13TERjMUxqVXNNQ3cwTXk0eU5EZ3NNall1TVN3d0xEVTRMakk1TXl3d2N6VTRMakk1TXl3eE1TdzFPQzR5T1RNc05ETXVNalE0SWlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZ3hNUzQyTVNBME9DNHhOVEVwSWlCbWFXeHNQU0lqTURVeFl6SmpJaTgrSUNBZ0lDQWdQQzluUGlBZ0lDQWdJRHhuSUdsa1BTSkhjbTkxY0Y4ME9EZ3pJaUJrWVhSaExXNWhiV1U5SWtkeWIzVndJRFE0T0RNaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLREl5TGpjeE1pQTJOQzQ0TXpVcElqNGdJQ0FnSUNBZ0lEeHlaV04wSUdsa1BTSlNaV04wWVc1bmJHVWlJSGRwWkhSb1BTSXpOaTR5T1RFaUlHaGxhV2RvZEQwaU5EY3VPRFF5SWlCeWVEMGlNVEVpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtEQWdNVEF1TmpFcElISnZkR0YwWlNndE1UY3BJaUJtYVd4c1BTSWpabVptSWk4K0lDQWdJQ0FnSUNBOGNtVmpkQ0JwWkQwaVVtVmpkR0Z1WjJ4bExUSWlJR1JoZEdFdGJtRnRaVDBpVW1WamRHRnVaMnhsSWlCM2FXUjBhRDBpTWpZdU16a3pJaUJvWldsbmFIUTlJak11T1RnM0lpQnllRDBpTVM0NU9UTWlJSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RZdU5UYzRJREUxTGpJcElISnZkR0YwWlNndE1UY3BJaUJtYVd4c1BTSWpNV1kwTUdVMklpOCtJQ0FnSUNBZ0lDQThjR0YwYUNCcFpEMGlRMjl0WW1sdVpXUmZVMmhoY0dVaUlHUmhkR0V0Ym1GdFpUMGlRMjl0WW1sdVpXUWdVMmhoY0dVaUlHUTlJazB1TmpZMExESXlMalU1TW1FdU5qWTBMalkyTkN3d0xERXNNU3d3TFRFdU16STRTREkxTGpjeU9HRXVOalkwTGpZMk5Dd3dMREVzTVN3d0xERXVNekk0V20wd0xUSXVOalU0WVM0Mk5qVXVOalkxTERBc01Dd3hMREF0TVM0ek1qbElNalV1TnpJNFlTNDJOalV1TmpZMUxEQXNNU3d4TERBc01TNHpNamxhYlRBdE1pNDJOVGhoTGpZMk5TNDJOalVzTUN3d0xERXNNQzB4TGpNeU9VZ3lOUzQzTWpoaExqWTJOUzQyTmpVc01Dd3hMREVzTUN3eExqTXlPVnB0TUMweUxqWTFPR0V1TmpZMUxqWTJOU3d3TERBc01Td3dMVEV1TXpJNVNESTFMamN5T0dFdU5qWTFMalkyTlN3d0xERXNNU3d3TERFdU16STVXbTB3TFRJdU5qVTVZUzQyTmpRdU5qWTBMREFzTVN3eExEQXRNUzR6TWpoSU1qVXVOekk0WVM0Mk5qUXVOalkwTERBc01Td3hMREFzTVM0ek1qaGFiVEF0TWk0Mk5UaGhMalkyTkM0Mk5qUXNNQ3d3TERFc01DMHhMak15T0VneU5TNDNNamhoTGpZMk5DNDJOalFzTUN3eExERXNNQ3d4TGpNeU9GcHRNQzB5TGpZMU9HRXVOalkxTGpZMk5Td3dMREFzTVN3d0xURXVNekk1U0RJMUxqY3lPR0V1TmpZMUxqWTJOU3d3TERFc01Td3dMREV1TXpJNVdtMHdMVEl1TmpVNFlTNDJOalV1TmpZMUxEQXNNQ3d4TERBdE1TNHpNamxJTWpVdU56STRZUzQyTmpVdU5qWTFMREFzTVN3eExEQXNNUzR6TWpsYWJUQXRNaTQyTlRoQkxqWTJOUzQyTmpVc01Dd3dMREVzTGpZMk5Dd3dTREkxTGpjeU9HRXVOalkxTGpZMk5Td3dMREVzTVN3d0xERXVNekk1V2lJZ2RISmhibk5tYjNKdFBTSjBjbUZ1YzJ4aGRHVW9PUzR6T1RVZ01qUXVOREUwS1NCeWIzUmhkR1VvTFRFM0tTSWdabWxzYkQwaUkyVTJaVFpsTmlJdlBpQWdJQ0FnSUR3dlp6NGdJQ0FnSUNBOFp5QnBaRDBpUjNKdmRYQmZORGc0TWkweUlpQmtZWFJoTFc1aGJXVTlJa2R5YjNWd0lEUTRPRElpSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtEUTJMakE0TXlBNE5TNDROVEVwSWo0Z0lDQWdJQ0FnSUR4d1lYUm9JR2xrUFNKUVlYUm9YekU1TnprMklpQmtZWFJoTFc1aGJXVTlJbEJoZEdnZ01UazNPVFlpSUdROUlrMDFNRFUyTGpFek5Dd3hNall1TlRBNGRqRTVMakkwTm1nMk9DNHlNemRXTVRJMUxqY3lNV3d0TVRZdU56ZzJMVEU1TGprMk5TMHpOQzQyTnpRdExqazROUzB4TkM0NExERTFMamN3TmxvaUlIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLQzAxTURVMExqVTFJQzB4TURFdU56VXpLU0lnWm1sc2JEMGlJMlptWmlJdlBpQWdJQ0FnSUNBZ1BHY2dhV1E5SWtacGJHeGxaRjlKWTI5dWN5SWdaR0YwWVMxdVlXMWxQU0pHYVd4c1pXUWdTV052Ym5NaVBpQWdJQ0FnSUNBZ0lDQThjR0YwYUNCcFpEMGlVR0YwYUY4eE9UY3pOQ0lnWkdGMFlTMXVZVzFsUFNKUVlYUm9JREU1TnpNMElpQmtQU0pOTmpjdU16RXlMREV6U0RVdU1UWTBRVFF1TmpjeExEUXVOamN4TERBc01Dd3dMQzQxTERFM0xqWTJNWFl6TGpFd04wRTBMalkyTXl3MExqWTJNeXd3TERBc01DdzFMakUyTkN3eU5TNDBNMGcyTnk0ek1USmhOQzQyTmpVc05DNDJOalVzTUN3d0xEQXNOQzQyTmpFdE5DNDJOakZXTVRjdU5qWXhRVFF1TmpjekxEUXVOamN6TERBc01Dd3dMRFkzTGpNeE1pd3hNMW9pSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtDMHdMalV3TXlBeE5DNDVORGdwSWlCbWFXeHNQU0lqTVdZME1HVTJJaTgrSUNBZ0lDQWdJQ0FnSUR4d1lYUm9JR2xrUFNKUVlYUm9YekU1TnpNMUlpQmtZWFJoTFc1aGJXVTlJbEJoZEdnZ01UazNNelVpSUdROUlrMDJPUzR6TmpZc01qZ3VPRFEzVmpJMUxqYzFPRUV5TVM0M09Dd3lNUzQzT0N3d0xEQXNNQ3cwTnk0Mk1UUXNOQzR3TURaSU1qSXVOelUxUVRJeExqYzNPQ3d5TVM0M056Z3NNQ3d3TERBc01Td3lOUzQzTlRoMk15NHdPRGxhVFRVd0xqY3lNU3d4TXk0ek1qaGhNUzQxTlRRc01TNDFOVFFzTUN3eExERXRNUzQxTlRRc01TNDFOVFJCTVM0MU5UZ3NNUzQxTlRnc01Dd3dMREVzTlRBdU56SXhMREV6TGpNeU9GcHRMVGN1TnpZNExUTXVNVEEzUVRFdU5UVTBMREV1TlRVMExEQXNNU3d4TERReExqUXNNVEV1TnpjMExERXVOVFU0TERFdU5UVTRMREFzTUN3eExEUXlMamsxTXl3eE1DNHlNakZhYlMwM0xqYzJPQ3d6TGpFd04yRXhMalUxTkN3eExqVTFOQ3d3TERFc01TMHhMalUxTkN3eExqVTFORUV4TGpVMU9Dd3hMalUxT0N3d0xEQXNNU3d6TlM0eE9EUXNNVE11TXpJNFdtMHROeTQzTmpndE15NHhNRGRoTVM0MU5UUXNNUzQxTlRRc01Dd3hMREV0TVM0MU5UUXNNUzQxTlRSQk1TNDFOVGdzTVM0MU5UZ3NNQ3d3TERFc01qY3VOREUyTERFd0xqSXlNVnB0TFRjdU56WTRMRE11TVRBM1lURXVOVFUwTERFdU5UVTBMREFzTVN3eExURXVOVFUwTERFdU5UVTBRVEV1TlRVNExERXVOVFU0TERBc01Dd3hMREU1TGpZME55d3hNeTR6TWpoYUlpQjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2d3TGpVMU1TQXROQzR3TURZcElpQm1hV3hzUFNJak1EQmhPV1kwSWk4K0lDQWdJQ0FnSUNBZ0lEeHdZWFJvSUdsa1BTSlFZWFJvWHpFNU56TTJJaUJrWVhSaExXNWhiV1U5SWxCaGRHZ2dNVGszTXpZaUlHUTlJazB4TERFNGRqRXVOVGN5WVRjdU56VTVMRGN1TnpVNUxEQXNNQ3d3TERjdU56WTRMRGN1TnpWSU5qRXVObUUzTGpjMk1TdzNMamMyTVN3d0xEQXNNQ3czTGpjMk9DMDNMamMxVmpFNFdpSWdkSEpoYm5ObWIzSnRQU0owY21GdWMyeGhkR1VvTUM0MU5URWdNalV1TkRnMUtTSWdabWxzYkQwaUl6QXdZVGxtTkNJdlBpQWdJQ0FnSUNBZ1BDOW5QaUFnSUNBZ0lEd3ZaejRnSUNBZ1BDOW5QaUFnUEM5blBqd3ZjM1puUGc9PSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDUwJTtcbn1cblxuLmRldGFpbHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwLjVlbTtcbn1cbi5kZXRhaWxzID4gKiB7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcbn1cblxuLmxvY2F0aW9uIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogOTV2aDtcbn1cblxuLm1hdC1hY3RpdmUge1xuICBjb2xvcjogIzE5MzdlYTtcbn1cblxuLmdyb3VwIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ncm91cCAudGV4dCB7XG4gIGZsZXg6IDE7XG59XG4uZ3JvdXAgLmNvbG91ciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLThweDtcbiAgaGVpZ2h0OiA4cHg7XG4gIHdpZHRoOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHRyYW5zaXRpb246IGhlaWdodCAyMDBtcywgd2lkdGggMjAwbXM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpO1xufVxuLmdyb3VwOmhvdmVyIC5jb2xvdXIge1xuICBoZWlnaHQ6IDE2cHg7XG4gIHdpZHRoOiAxNnB4O1xufVxuLmdyb3VwIC5pY29uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNzVlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG4uZ3JvdXAgLmljb24gLndyYXBwZXIge1xuICBoZWlnaHQ6IDEuNWVtO1xuICBtaW4td2lkdGg6IDEuNWVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuLmdyb3VwIC5pY29uIGFwcC1pY29uIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBvdmVyZmxvdzogYXV0byBoaWRkZW47XG4gIHBhZGRpbmc6IDAgMmVtIDJlbTtcbn1cblxuLmJsb2NrIHtcbiAgaGVpZ2h0OiAyNGVtO1xuICBmbGV4OiAxO1xuICBtaW4td2lkdGg6IDE4ZW07XG4gIG1hcmdpbjogMCAwLjc1ZW07XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG59XG4uYmxvY2s6Zmlyc3QtY2hpbGQge1xuICBtYXJnaW4tbGVmdDogMDtcbn1cbi5ibG9jazpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuXG4uY2xvc2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMC41ZW07XG4gIHJpZ2h0OiAwLjVlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OrderDetailsModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'a-order-details-modal',
                templateUrl: './order-details-modal.component.html',
                styleUrls: ['./order-details-modal.component.scss'],
            }]
    }], function () { return [{ type: src_app_services_app_service__WEBPACK_IMPORTED_MODULE_6__["ApplicationService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }] }]; }, { event: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=shell-catering-catering-module-es2015.js.map