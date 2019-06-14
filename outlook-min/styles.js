(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "/* You can add global styles to this file, and also import other style files */\n\n\nhtml,\nbody {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n}\n\n\n.app,\nbody{\n    font-family: \"Helvetica\", Arial, sans-serif;\n    font-weight: 300;\n}\n\n\n.app {\n    position: absolute;\n}\n\n\nhtml,\nbody {\n    margin:0;\n    padding:0;\n    font-size:2vmin;\n}\n\n\n.app {\n    top:0;\n    left:0;\n    bottom:0;\n    right:0}\n\n\n* {\n    font-family: \"Helvetica\", Arial, sans-serif;\n    -webkit-box-sizing:border-box;\n            box-sizing:border-box;\n}\n\n\n.center,\n[center] {\n    position: absolute;\n    top:50%;\n    left:50%;\n    -webkit-transform:translate(-50%,-50%);\n    transform:translate(-50%,-50%);\n    margin:auto;\n}\n\n\n.loading {\n    display:inline-block;\n    padding:1.5em;\n    border-radius:1em;\n    color:#000;\n    font-size:10mm;\n    text-align:center;\n}\n\n\n.bounce,\n.bounce .circle,\n.bounce .circle .inner {\n    height:4em;\n    width:4em;\n    border-radius:100%;\n}\n\n\n.bounce .circle {\n    -webkit-animation:sk-scaleout .8s infinite ease-in-out;\n    animation:sk-scaleout .8s infinite ease-in-out;\n}\n\n\n.bounce .circle .inner {\n    background-color:#000;\n}\n\n\n@-webkit-keyframes sk-scaleout {\n    0% {-webkit-transform:scale(0)}\n    20% {opacity:1}\n    100% {-webkit-transform:scale(1);opacity:0}\n}\n\n\n@keyframes sk-scaleout {\n    0% {-webkit-transform:scale(0);transform:scale(0)}\n    20% {opacity:1}\n    100% {-webkit-transform:scale(1);transform:scale(1);opacity:0}\n}\n\n\n.no-script {\n    height: 10em;\n    width: 15em;\n    padding: .5em 1em;\n    background-color: #FFF;\n    border-radius: .1em;\n    -webkit-box-shadow: 0 .1em .2em .1em rgba(0, 0, 0, .2);\n            box-shadow: 0 .1em .2em .1em rgba(0, 0, 0, .2);\n    text-align: center;\n    position: absolute;\n    top: 1em;\n    left: 50%;\n    -webkit-transform: translateX(-50%);\n            transform: translateX(-50%)\n}\n\n\n.no-script img {\n    border-radius: .2em;\n    height: 6em;\n    width: 6em\n}\n\n\n.no-script .title {\n    padding: 0 1em;\n    font-style: italic;\n    font-size: 1.2em\n}\n\n\n.no-script .content {\n    display: -webkit-box;\n    display: flex\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhFQUE4RTs7O0FBRzlFOztJQUVJLFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0FBQ3BCOzs7QUFHQTs7SUFFSSwyQ0FBMkM7SUFDM0MsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7O0lBRUksUUFBUTtJQUNSLFNBQVM7SUFDVCxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLEtBQUs7SUFDTCxNQUFNO0lBQ04sUUFBUTtJQUNSLE9BQU87OztBQUVYO0lBQ0ksMkNBQTJDO0lBQzNDLDZCQUFxQjtZQUFyQixxQkFBcUI7QUFDekI7OztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsUUFBUTtJQUNSLHNDQUFzQztJQUV0Qyw4QkFBOEI7SUFDOUIsV0FBVztBQUNmOzs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0FBQ3JCOzs7QUFFQTs7O0lBR0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7OztBQUVBO0lBQ0ksc0RBQXNEO0lBQ3RELDhDQUE4QztBQUNsRDs7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7OztBQUVBO0lBQ0ksSUFBSSwwQkFBMEI7SUFDOUIsS0FBSyxTQUFTO0lBQ2QsTUFBTSwwQkFBMEIsQ0FBQyxTQUFTO0FBQzlDOzs7QUFFQTtJQUNJLElBQUksMEJBQTBCLENBQUMsa0JBQWtCO0lBQ2pELEtBQUssU0FBUztJQUNkLE1BQU0sMEJBQTBCLENBQUMsa0JBQWtCLENBQUMsU0FBUztBQUNqRTs7O0FBRUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHNEQUE4QztZQUE5Qyw4Q0FBOEM7SUFDOUMsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULG1DQUEwQjtZQUExQjtBQUNKOzs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1g7QUFDSjs7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCO0FBQ0o7OztBQUVBO0lBQ0ksb0JBQVk7SUFBWjtBQUNKIiwiZmlsZSI6InNyYy9zdHlsZXMuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogWW91IGNhbiBhZGQgZ2xvYmFsIHN0eWxlcyB0byB0aGlzIGZpbGUsIGFuZCBhbHNvIGltcG9ydCBvdGhlciBzdHlsZSBmaWxlcyAqL1xuXG5cbmh0bWwsXG5ib2R5IHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG4uYXBwLFxuYm9keXtcbiAgICBmb250LWZhbWlseTogXCJIZWx2ZXRpY2FcIiwgQXJpYWwsIHNhbnMtc2VyaWY7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLmFwcCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG5odG1sLFxuYm9keSB7XG4gICAgbWFyZ2luOjA7XG4gICAgcGFkZGluZzowO1xuICAgIGZvbnQtc2l6ZToydm1pbjtcbn1cblxuLmFwcCB7XG4gICAgdG9wOjA7XG4gICAgbGVmdDowO1xuICAgIGJvdHRvbTowO1xuICAgIHJpZ2h0OjB9XG5cbioge1xuICAgIGZvbnQtZmFtaWx5OiBcIkhlbHZldGljYVwiLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICBib3gtc2l6aW5nOmJvcmRlci1ib3g7XG59XG5cbi5jZW50ZXIsXG5bY2VudGVyXSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDo1MCU7XG4gICAgbGVmdDo1MCU7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgLW1zLXRyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwtNTAlKTtcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsLTUwJSk7XG4gICAgbWFyZ2luOmF1dG87XG59XG5cbi5sb2FkaW5nIHtcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbiAgICBwYWRkaW5nOjEuNWVtO1xuICAgIGJvcmRlci1yYWRpdXM6MWVtO1xuICAgIGNvbG9yOiMwMDA7XG4gICAgZm9udC1zaXplOjEwbW07XG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XG59XG5cbi5ib3VuY2UsXG4uYm91bmNlIC5jaXJjbGUsXG4uYm91bmNlIC5jaXJjbGUgLmlubmVyIHtcbiAgICBoZWlnaHQ6NGVtO1xuICAgIHdpZHRoOjRlbTtcbiAgICBib3JkZXItcmFkaXVzOjEwMCU7XG59XG5cbi5ib3VuY2UgLmNpcmNsZSB7XG4gICAgLXdlYmtpdC1hbmltYXRpb246c2stc2NhbGVvdXQgLjhzIGluZmluaXRlIGVhc2UtaW4tb3V0O1xuICAgIGFuaW1hdGlvbjpzay1zY2FsZW91dCAuOHMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG59XG5cbi5ib3VuY2UgLmNpcmNsZSAuaW5uZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IzAwMDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLXNjYWxlb3V0IHtcbiAgICAwJSB7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCl9XG4gICAgMjAlIHtvcGFjaXR5OjF9XG4gICAgMTAwJSB7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMSk7b3BhY2l0eTowfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLXNjYWxlb3V0IHtcbiAgICAwJSB7LXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMCk7dHJhbnNmb3JtOnNjYWxlKDApfVxuICAgIDIwJSB7b3BhY2l0eToxfVxuICAgIDEwMCUgey13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEpO3RyYW5zZm9ybTpzY2FsZSgxKTtvcGFjaXR5OjB9XG59XG5cbi5uby1zY3JpcHQge1xuICAgIGhlaWdodDogMTBlbTtcbiAgICB3aWR0aDogMTVlbTtcbiAgICBwYWRkaW5nOiAuNWVtIDFlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xuICAgIGJvcmRlci1yYWRpdXM6IC4xZW07XG4gICAgYm94LXNoYWRvdzogMCAuMWVtIC4yZW0gLjFlbSByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMWVtO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSlcbn1cblxuLm5vLXNjcmlwdCBpbWcge1xuICAgIGJvcmRlci1yYWRpdXM6IC4yZW07XG4gICAgaGVpZ2h0OiA2ZW07XG4gICAgd2lkdGg6IDZlbVxufVxuXG4ubm8tc2NyaXB0IC50aXRsZSB7XG4gICAgcGFkZGluZzogMCAxZW07XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtc2l6ZTogMS4yZW1cbn1cblxuLm5vLXNjcmlwdCAuY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleFxufVxuIl19 */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/benhoad/Projects/mck-outlook-addin/src/styles.css */"./src/styles.css");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map