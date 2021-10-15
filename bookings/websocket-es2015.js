(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["websocket"],{

/***/ "./node_modules/es5-ext/global.js":
/*!****************************************!*\
  !*** ./node_modules/es5-ext/global.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var naiveFallback = function () {
	if (typeof self === "object" && self) return self;
	if (typeof window === "object" && window) return window;
	throw new Error("Unable to resolve global `this`");
};

module.exports = (function () {
	if (this) return this;

	// Unexpected strict mode (may happen if e.g. bundled into ESM module)

	// Fallback to standard globalThis if available
	if (typeof globalThis === "object" && globalThis) return globalThis;

	// Thanks @mathiasbynens -> https://mathiasbynens.be/notes/globalthis
	// In all ES5+ engines global object inherits from Object.prototype
	// (if you approached one that doesn't please report)
	try {
		Object.defineProperty(Object.prototype, "__global__", {
			get: function () { return this; },
			configurable: true
		});
	} catch (error) {
		// Unfortunate case of updates to Object.prototype being restricted
		// via preventExtensions, seal or freeze
		return naiveFallback();
	}
	try {
		// Safari case (window.__global__ works, but __global__ does not)
		if (!__global__) return naiveFallback();
		return __global__;
	} finally {
		delete Object.prototype.__global__;
	}
})();


/***/ }),

/***/ "./node_modules/websocket/lib/browser.js":
/*!***********************************************!*\
  !*** ./node_modules/websocket/lib/browser.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _globalThis;
if (typeof globalThis === 'object') {
	_globalThis = globalThis;
} else {
	try {
		_globalThis = __webpack_require__(/*! es5-ext/global */ "./node_modules/es5-ext/global.js");
	} catch (error) {
	} finally {
		if (!_globalThis && typeof window !== 'undefined') { _globalThis = window; }
		if (!_globalThis) { throw new Error('Could not determine global this'); }
	}
}

var NativeWebSocket = _globalThis.WebSocket || _globalThis.MozWebSocket;
var websocket_version = __webpack_require__(/*! ./version */ "./node_modules/websocket/lib/version.js");


/**
 * Expose a W3C WebSocket class with just one or two arguments.
 */
function W3CWebSocket(uri, protocols) {
	var native_instance;

	if (protocols) {
		native_instance = new NativeWebSocket(uri, protocols);
	}
	else {
		native_instance = new NativeWebSocket(uri);
	}

	/**
	 * 'native_instance' is an instance of nativeWebSocket (the browser's WebSocket
	 * class). Since it is an Object it will be returned as it is when creating an
	 * instance of W3CWebSocket via 'new W3CWebSocket()'.
	 *
	 * ECMAScript 5: http://bclary.com/2004/11/07/#a-13.2.2
	 */
	return native_instance;
}
if (NativeWebSocket) {
	['CONNECTING', 'OPEN', 'CLOSING', 'CLOSED'].forEach(function(prop) {
		Object.defineProperty(W3CWebSocket, prop, {
			get: function() { return NativeWebSocket[prop]; }
		});
	});
}

/**
 * Module exports.
 */
module.exports = {
    'w3cwebsocket' : NativeWebSocket ? W3CWebSocket : null,
    'version'      : websocket_version
};


/***/ }),

/***/ "./node_modules/websocket/lib/version.js":
/*!***********************************************!*\
  !*** ./node_modules/websocket/lib/version.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ../package.json */ "./node_modules/websocket/package.json").version;


/***/ }),

/***/ "./node_modules/websocket/package.json":
/*!*********************************************!*\
  !*** ./node_modules/websocket/package.json ***!
  \*********************************************/
/*! exports provided: _from, _id, _inBundle, _integrity, _location, _phantomChildren, _requested, _requiredBy, _resolved, _shasum, _spec, _where, author, browser, bugs, bundleDependencies, config, contributors, dependencies, deprecated, description, devDependencies, directories, engines, homepage, keywords, license, main, name, repository, scripts, version, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"_from\":\"websocket@^1.0.34\",\"_id\":\"websocket@1.0.34\",\"_inBundle\":false,\"_integrity\":\"sha512-PRDso2sGwF6kM75QykIesBijKSVceR6jL2G8NGYyq2XrItNC2P5/qL5XeR056GhA+Ly7JMFvJb9I312mJfmqnQ==\",\"_location\":\"/websocket\",\"_phantomChildren\":{},\"_requested\":{\"type\":\"range\",\"registry\":true,\"raw\":\"websocket@^1.0.34\",\"name\":\"websocket\",\"escapedName\":\"websocket\",\"rawSpec\":\"^1.0.34\",\"saveSpec\":null,\"fetchSpec\":\"^1.0.34\"},\"_requiredBy\":[\"/@placeos/ts-client\"],\"_resolved\":\"https://registry.npmjs.org/websocket/-/websocket-1.0.34.tgz\",\"_shasum\":\"2bdc2602c08bf2c82253b730655c0ef7dcab3111\",\"_spec\":\"websocket@^1.0.34\",\"_where\":\"/home/runner/work/mckinsey-bookings-ui/mckinsey-bookings-ui/node_modules/@placeos/ts-client\",\"author\":{\"name\":\"Brian McKelvey\",\"email\":\"theturtle32@gmail.com\",\"url\":\"https://github.com/theturtle32\"},\"browser\":\"lib/browser.js\",\"bugs\":{\"url\":\"https://github.com/theturtle32/WebSocket-Node/issues\"},\"bundleDependencies\":false,\"config\":{\"verbose\":false},\"contributors\":[{\"name\":\"Iñaki Baz Castillo\",\"email\":\"ibc@aliax.net\",\"url\":\"http://dev.sipdoc.net\"}],\"dependencies\":{\"bufferutil\":\"^4.0.1\",\"debug\":\"^2.2.0\",\"es5-ext\":\"^0.10.50\",\"typedarray-to-buffer\":\"^3.1.5\",\"utf-8-validate\":\"^5.0.2\",\"yaeti\":\"^0.0.6\"},\"deprecated\":false,\"description\":\"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.\",\"devDependencies\":{\"buffer-equal\":\"^1.0.0\",\"gulp\":\"^4.0.2\",\"gulp-jshint\":\"^2.0.4\",\"jshint\":\"^2.0.0\",\"jshint-stylish\":\"^2.2.1\",\"tape\":\"^4.9.1\"},\"directories\":{\"lib\":\"./lib\"},\"engines\":{\"node\":\">=4.0.0\"},\"homepage\":\"https://github.com/theturtle32/WebSocket-Node\",\"keywords\":[\"websocket\",\"websockets\",\"socket\",\"networking\",\"comet\",\"push\",\"RFC-6455\",\"realtime\",\"server\",\"client\"],\"license\":\"Apache-2.0\",\"main\":\"index\",\"name\":\"websocket\",\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/theturtle32/WebSocket-Node.git\"},\"scripts\":{\"gulp\":\"gulp\",\"test\":\"tape test/unit/*.js\"},\"version\":\"1.0.34\"}");

/***/ })

}]);
//# sourceMappingURL=websocket-es2015.js.map