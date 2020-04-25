(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["myvue"] = factory();
	else
		root["myvue"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "25c9":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "2636":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_drawer_vue_vue_type_style_index_0_id_08ebdd7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ed4e");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_drawer_vue_vue_type_style_index_0_id_08ebdd7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_drawer_vue_vue_type_style_index_0_id_08ebdd7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_drawer_vue_vue_type_style_index_0_id_08ebdd7c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "2971":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "30b5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardFlag_vue_vue_type_style_index_0_id_521419a1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("77ae");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardFlag_vue_vue_type_style_index_0_id_521419a1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardFlag_vue_vue_type_style_index_0_id_521419a1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CardFlag_vue_vue_type_style_index_0_id_521419a1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "3f5f":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "4013":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_style_index_0_id_9519193e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("6d39");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_style_index_0_id_9519193e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_style_index_0_id_9519193e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SvgIcon_vue_vue_type_style_index_0_id_9519193e_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "5647":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollLoader_vue_vue_type_style_index_0_id_dad01152_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("2971");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollLoader_vue_vue_type_style_index_0_id_dad01152_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollLoader_vue_vue_type_style_index_0_id_dad01152_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_scrollLoader_vue_vue_type_style_index_0_id_dad01152_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "6d39":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "77ae":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    if (document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "9f44":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "aa14":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_backTop_vue_vue_type_style_index_0_id_778ddaff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("25c9");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_backTop_vue_vue_type_style_index_0_id_778ddaff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_backTop_vue_vue_type_style_index_0_id_778ddaff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_backTop_vue_vue_type_style_index_0_id_778ddaff_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "b8ac":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_e9e3b88a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9f44");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_e9e3b88a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_e9e3b88a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_search_vue_vue_type_style_index_0_id_e9e3b88a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "d9d4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_5595ffb2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("3f5f");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_5595ffb2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_5595ffb2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_8_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_8_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_8_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_style_index_0_id_5595ffb2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "ed4e":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"98d47b74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/CardFlag/CardFlag.vue?vue&type=template&id=521419a1&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('el-row',{attrs:{"span":24,"gutter":_vm.gutter}},_vm._l((_vm.cardData),function(item,index){return _c('el-col',{key:index,attrs:{"md":4,"xs":12,"sm":8}},[_c('div',{staticClass:"card",attrs:{"title":item.content}},[_c('div',{staticClass:"card-head"},[_c('div',{staticClass:"card-head-icon"},[_c('i',{class:_vm.iconLove,style:({ color: item.color || 'red' }),on:{"click":function($event){_vm.iconLoveClick ? _vm.iconLoveClick(item, index) : ''}}}),_c('span',[_vm._v(_vm._s(item.likeNum))])]),_c('div',{staticClass:"card-head-icon"},[_c('i',{class:_vm.iconView,style:({ color: item.color || 'red' })}),_c('span',[_vm._v(_vm._s(item.viewNum))])])]),_c('a',{attrs:{"href":item.href || 'javascript:void(0);',"target":item.target},on:{"click":function($event){_vm.gotoWebClick ? _vm.gotoWebClick(item, index) : ''}}},[_c('div',{staticClass:"card-body"},[_c('img',{staticClass:"card-body-img",attrs:{"src":item.logoUrl,"object-fit":"fill","alt":"图像获取失败！"}}),_c('div',{staticClass:"card-body-info"},[_c('span',{staticClass:"card-body-info-title"},[_vm._v(_vm._s(item.title))]),_vm._l((item.tag),function(tagItem,tagIndex){return _c('span',{key:tagIndex,staticClass:"card-body-info-tag"},[_vm._v(_vm._s(tagItem))])}),_c('span',{staticClass:"card-body-info-arrow"},[_c('i',{staticClass:"el-icon-right"})]),_c('div',{staticClass:"card-body-info-content"},[_vm._v(_vm._s(item.content))])],2)])])])])}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/CardFlag/CardFlag.vue?vue&type=template&id=521419a1&scoped=true&

// CONCATENATED MODULE: ./packages/core/mixins.js
const mixins = {
  data() {
    return {
      tips: "I Is Components mixin!"
    };
  },
  methods: {
    setPx(value) {
      if (!value) return "";
      value = value + "";
      if (value.indexOf("%") === -1) {
        value = value + "px";
      }
      return value;
    }
  }
};

// CONCATENATED MODULE: ./packages/core/create.js

/* harmony default export */ var create = (function(sfc) {
  sfc.mixins = sfc.mixins || [];
  sfc.mixins.push(mixins);
  return sfc;
});

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/CardFlag/CardFlag.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var CardFlagvue_type_script_lang_js_ = (create({
  name: "cardflag",
  data() {
    return {
      iconLove: this.option.iconLove || "el-icon-star-off",
      iconView: this.option.iconView || "el-icon-view",
      iconLoveClick: this.option.iconLoveClick,
      gotoWebClick: this.option.gotoWebClick
    };
  },
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  computed: {
    gutter() {
      return this.option.gutter || 20;
    },
    cardData() {
      return this.option.data || [];
    }
  }
}));

// CONCATENATED MODULE: ./packages/components/CardFlag/CardFlag.vue?vue&type=script&lang=js&
 /* harmony default export */ var CardFlag_CardFlagvue_type_script_lang_js_ = (CardFlagvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/CardFlag/CardFlag.vue?vue&type=style&index=0&id=521419a1&scoped=true&lang=scss&
var CardFlagvue_type_style_index_0_id_521419a1_scoped_true_lang_scss_ = __webpack_require__("30b5");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/components/CardFlag/CardFlag.vue






/* normalize component */

var component = normalizeComponent(
  CardFlag_CardFlagvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "521419a1",
  null
  
)

/* harmony default export */ var CardFlag = (component.exports);
// CONCATENATED MODULE: ./packages/components/CardFlag/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
CardFlag.install = function(vue) {
  vue.component(CardFlag.name, CardFlag);
};

// 默认导出组件
/* harmony default export */ var components_CardFlag = (CardFlag);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"98d47b74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/login/login.vue?vue&type=template&id=5595ffb2&scoped=true&
var loginvue_type_template_id_5595ffb2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"login",style:({ width: this.setPx(this.formWidth) })},[_c('el-form',{ref:"form",attrs:{"model":_vm.formData,"label-suffix":":","label-width":this.setPx(this.labelWidth)}},[(!this.userName.hide)?_c('el-form-item',{attrs:{"label":this.userName.label || '用户名',"rules":this.userName.rules,"label-width":this.setPx(this.userName.labelWidth),"prop":"userName"}},[_c('el-tooltip',{attrs:{"content":this.userName.tip,"disabled":this.userName.tip === undefined,"placement":"top-start"}},[_c('el-input',{attrs:{"size":"small","prefix-icon":this.userName.prefixIcon || 'el-icon-user',"placeholder":this.userName.placeholder || '请输入用户名',"autocomplete":this.userName.autocomplete},model:{value:(_vm.formData.userName),callback:function ($$v) {_vm.$set(_vm.formData, "userName", $$v)},expression:"formData.userName"}})],1)],1):_vm._e(),(!this.password.hide)?_c('el-form-item',{attrs:{"label":this.password.label || '密码',"rules":this.password.rules,"label-width":this.setPx(this.password.labelWidth),"prop":"password"}},[_c('el-tooltip',{attrs:{"content":this.password.tip,"disabled":this.password.tip === undefined,"placement":"top-start"}},[_c('el-input',{attrs:{"type":"password","size":"small","show-password":"","prefix-icon":this.password.prefixIcon || 'el-icon-unlock',"placeholder":this.password.placeholder || '请输入密码',"autocomplete":this.password.autocomplete},model:{value:(_vm.formData.password),callback:function ($$v) {_vm.$set(_vm.formData, "password", $$v)},expression:"formData.password"}})],1)],1):_vm._e(),(!this.code.hide)?_c('el-form-item',{attrs:{"label":this.code.label || '验证码',"rules":this.code.rules,"label-width":this.setPx(this.code.labelWidth),"prop":"code"}},[_c('el-tooltip',{attrs:{"content":this.code.tip,"disabled":this.code.tip === undefined,"placement":"top-start"}},[_c('el-input',{attrs:{"size":"small","prefix-icon":this.code.prefixIcon || 'el-icon-c-scale-to-original',"placeholder":this.code.placeholder || '请输入验证码',"autocomplete":this.code.autocomplete},model:{value:(_vm.formData.code),callback:function ($$v) {_vm.$set(_vm.formData, "code", $$v)},expression:"formData.code"}},[_c('template',{slot:"append"},[(this.isPhone)?_c('el-button',{attrs:{"type":"primary"},on:{"click":this.onSend}},[_vm._v(" "+_vm._s(_vm.text)+" ")]):_vm._e(),(this.isImg)?_c('span',[_c('img',{attrs:{"src":this.codeSrc,"alt":"","width":this.code.width || '80',"height":this.code.height || '25'},on:{"click":this.onRefresh}})]):_vm._e()],1)],2)],1)],1):_vm._e(),_c('el-form-item',[_c('el-button',{staticClass:"onSubmit",attrs:{"type":"primary"},on:{"click":this.onSubmit}},[_vm._v(" 登录 ")])],1)],1)],1)}
var loginvue_type_template_id_5595ffb2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/login/login.vue?vue&type=template&id=5595ffb2&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/login/login.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const INIT_TEXT = "发送验证码";
const TIP_TEXT = "{{time}}s后重新获取";


/* harmony default export */ var loginvue_type_script_lang_js_ = (create({
  name: "login",
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      text: "",
      nowTime: "",
      check: {},
      formData: {
        userName: "",
        password: "",
        code: ""
      }
    };
  },
  created() {
    this.text = INIT_TEXT;
  },
  computed: {
    labelWidth: function() {
      return this.option.labelWidth || 80;
    },
    time: function() {
      return this.option.time || 60;
    },
    codeType: function() {
      return this.option.codeType || "img";
    },
    isImg: function() {
      return this.codeType === "img";
    },
    isPhone: function() {
      return this.codeType === "phone";
    },
    formWidth: function() {
      return this.option.width || "100%";
    },
    column: function() {
      return this.option.column || {};
    },
    userName: function() {
      return this.column.userName || {};
    },
    password: function() {
      return this.column.password || {};
    },
    code: function() {
      return this.column.code || {};
    },
    codeSrc: function() {
      return this.option.codeSrc || "";
    }
  },
  methods: {
    onSend: function() {
      const callback = () => {
        this.nowTime = this.time;
        this.text = TIP_TEXT.replace("{{time}}", this.nowTime);
        this.check = setInterval(() => {
          this.nowTime--;
          if (this.nowTime === 0) {
            this.text = INIT_TEXT;
            clearInterval(this.check);
          } else {
            this.text = TIP_TEXT.replace("{{time}}", this.nowTime);
          }
        }, 1000);
      };
      this.$emit("send", callback);
    },
    onRefresh: function() {
      this.$emit("refresh");
    },
    onSubmit: function() {
      const onCover = () => {
        const form = {};
        for (let o in this.formData) {
          let key = o;
          if (this[o].prop) {
            key = this[o].prop;
          }
          form[key] = this.formData[o];
        }
        return form;
      };
      this.$refs.form.validate(valid => {
        if (valid) {
          this.$emit("submit", onCover());
        }
      });
    }
  }
}));

// CONCATENATED MODULE: ./packages/components/login/login.vue?vue&type=script&lang=js&
 /* harmony default export */ var login_loginvue_type_script_lang_js_ = (loginvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/login/login.vue?vue&type=style&index=0&id=5595ffb2&scoped=true&lang=scss&
var loginvue_type_style_index_0_id_5595ffb2_scoped_true_lang_scss_ = __webpack_require__("d9d4");

// CONCATENATED MODULE: ./packages/components/login/login.vue






/* normalize component */

var login_component = normalizeComponent(
  login_loginvue_type_script_lang_js_,
  loginvue_type_template_id_5595ffb2_scoped_true_render,
  loginvue_type_template_id_5595ffb2_scoped_true_staticRenderFns,
  false,
  null,
  "5595ffb2",
  null
  
)

/* harmony default export */ var login = (login_component.exports);
// CONCATENATED MODULE: ./packages/components/login/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
login.install = function(vue) {
  vue.component(login.name, login);
};

// 默认导出组件
/* harmony default export */ var components_login = (login);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"98d47b74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/record/record.vue?vue&type=template&id=186fdfd7&
var recordvue_type_template_id_186fdfd7_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"record"},[_c('h2',[_vm._v("点击开始录音:")]),_c('input',{attrs:{"type":"button","value":"录音"},on:{"click":_vm.startRecord}}),_c('input',{attrs:{"type":"button","value":"停止"},on:{"click":_vm.stopRecord}}),_c('input',{attrs:{"type":"button","value":"播放"},on:{"click":_vm.play}}),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.isFinished),expression:"isFinished"}],staticClass:"record-play"},[_c('h2',[_vm._v("voice player:")]),_c('audio',{attrs:{"controls":"","autoplay":""}})])])}
var recordvue_type_template_id_186fdfd7_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/record/record.vue?vue&type=template&id=186fdfd7&

// CONCATENATED MODULE: ./packages/components/record/src/Recorder.js
class Recorder {
  constructor(stream, config) {
    //兼容
    window.URL = window.URL || window.webkitURL;
    navigator.getUserMedia =
      navigator.getUserMedia ||
      navigator.webkitGetUserMedia ||
      navigator.mozGetUserMedia ||
      navigator.msGetUserMedia;

    config = config || {};
    config.sampleBits = config.sampleBits || 16; //采样数位 8, 16
    config.sampleRate = config.sampleRate || 8000; //采样率(1/6 44100)

    this.context = new (window.webkitAudioContext || window.AudioContext)();
    this.audioInput = this.context.createMediaStreamSource(stream);
    this.createScript =
      this.context.createScriptProcessor || this.context.createJavaScriptNode;
    this.recorder = this.createScript.apply(this.context, [4096, 1, 1]);

    this.audioData = {
      size: 0, //录音文件长度
      buffer: [], //录音缓存
      inputSampleRate: this.context.sampleRate, //输入采样率
      inputSampleBits: 16, //输入采样数位 8, 16
      outputSampleRate: config.sampleRate, //输出采样率
      oututSampleBits: config.sampleBits, //输出采样数位 8, 16
      input: function(data) {
        this.buffer.push(new Float32Array(data));
        this.size += data.length;
      },
      compress: function() {
        //合并压缩
        //合并
        let data = new Float32Array(this.size);
        let offset = 0;
        for (let i = 0; i < this.buffer.length; i++) {
          data.set(this.buffer[i], offset);
          offset += this.buffer[i].length;
        }
        //压缩
        let compression = parseInt(
          this.inputSampleRate / this.outputSampleRate
        );
        let length = data.length / compression;
        let result = new Float32Array(length);
        let index = 0,
          j = 0;
        while (index < length) {
          result[index] = data[j];
          j += compression;
          index++;
        }
        return result;
      },
      encodeWAV: function() {
        let sampleRate = Math.min(this.inputSampleRate, this.outputSampleRate);
        let sampleBits = Math.min(this.inputSampleBits, this.oututSampleBits);
        let bytes = this.compress();
        let dataLength = bytes.length * (sampleBits / 8);
        let buffer = new ArrayBuffer(44 + dataLength);
        let data = new DataView(buffer);

        let channelCount = 1; //单声道
        let offset = 0;

        let writeString = function(str) {
          for (let i = 0; i < str.length; i++) {
            data.setUint8(offset + i, str.charCodeAt(i));
          }
        };

        // 资源交换文件标识符
        writeString("RIFF");
        offset += 4;
        // 下个地址开始到文件尾总字节数,即文件大小-8
        data.setUint32(offset, 36 + dataLength, true);
        offset += 4;
        // WAV文件标志
        writeString("WAVE");
        offset += 4;
        // 波形格式标志
        writeString("fmt ");
        offset += 4;
        // 过滤字节,一般为 0x10 = 16
        data.setUint32(offset, 16, true);
        offset += 4;
        // 格式类别 (PCM形式采样数据)
        data.setUint16(offset, 1, true);
        offset += 2;
        // 通道数
        data.setUint16(offset, channelCount, true);
        offset += 2;
        // 采样率,每秒样本数,表示每个通道的播放速度
        data.setUint32(offset, sampleRate, true);
        offset += 4;
        // 波形数据传输率 (每秒平均字节数) 单声道×每秒数据位数×每样本数据位/8
        data.setUint32(
          offset,
          channelCount * sampleRate * (sampleBits / 8),
          true
        );
        offset += 4;
        // 快数据调整数 采样一次占用字节数 单声道×每样本的数据位数/8
        data.setUint16(offset, channelCount * (sampleBits / 8), true);
        offset += 2;
        // 每样本数据位数
        data.setUint16(offset, sampleBits, true);
        offset += 2;
        // 数据标识符
        writeString("data");
        offset += 4;
        // 采样数据总数,即数据总大小-44
        data.setUint32(offset, dataLength, true);
        offset += 4;
        // 写入采样数据
        if (sampleBits === 8) {
          for (let i = 0; i < bytes.length; i++, offset++) {
            let s = Math.max(-1, Math.min(1, bytes[i]));
            let val = s < 0 ? s * 0x8000 : s * 0x7fff;
            val = parseInt(255 / (65535 / (val + 32768)));
            data.setInt8(offset, val, true);
          }
        } else {
          for (let i = 0; i < bytes.length; i++, offset += 2) {
            let s = Math.max(-1, Math.min(1, bytes[i]));
            data.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7fff, true);
          }
        }
        return new Blob([data], { type: "audio/wav" });
      }
    };
  }

  //开始录音
  start() {
    this.audioInput.connect(this.recorder);
    this.recorder.connect(this.context.destination);

    //音频采集
    let self = this;
    this.recorder.onaudioprocess = function(e) {
      self.audioData.input(e.inputBuffer.getChannelData(0));
    };
  }

  //停止
  stop() {
    this.recorder.disconnect();
    //清理缓存音频
    console.log("stoped", this.audioData.buffer.length);
    return this.audioData.buffer.length;
  }

  //获取音频文件
  getBlob() {
    this.stop();
    return this.audioData.encodeWAV();
  }

  //回放
  play(audio) {
    audio.src = window.URL.createObjectURL(this.getBlob());
  }

  //清理缓存的录音数据
  clear(audio) {
    this.audioData.buffer = [];
    this.audioData.size = 0;
    audio.src = "";
  }

  static checkError(e) {
    const { name } = e;
    let errorMsg = "";
    switch (name) {
      case "AbortError":
        errorMsg = "录音设备无法被使用";
        break;
      case "NotAllowedError":
        errorMsg = "用户已禁止网页调用录音设备";
        break;
      case "PermissionDeniedError":
        errorMsg = "用户已禁止网页调用录音设备";
        break; // 用户拒绝
      case "NotFoundError":
        errorMsg = "录音设备未找到";
        break;
      case "DevicesNotFoundError":
        errorMsg = "录音设备未找到";
        break;
      case "NotReadableError":
        errorMsg = "录音设备无法使用";
        break;
      case "NotSupportedError":
        errorMsg = "不支持录音功能";
        break;
      case "MandatoryUnsatisfiedError":
        errorMsg = "无法发现指定的硬件设备";
        break;
      default:
        errorMsg = "录音调用错误";
        break;
    }
    return { error: errorMsg };
  }

  static get(callback, config) {
    if (callback) {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices
          .getUserMedia({ audio: true, video: false })
          .then(stream => {
            let rec = new Recorder(stream, config);
            callback(rec);
          })
          .catch(e => {
            callback(Recorder.checkError(e));
          });
      } else {
        navigator
          .getUserMedia({ audio: true, video: false })
          .then(stream => {
            let rec = new Recorder(stream, config);
            callback(rec);
          })
          .catch(e => {
            // Recorder.checkError(e)
            callback(Recorder.checkError(e));
          });
      }
    }
  }
}

// CONCATENATED MODULE: ./packages/components/record/src/Record-sdk.js

class Record_sdk_Record {
  startRecord(param) {
    let self = this;
    try {
      Recorder.get(rec => {
        if (rec.error) return param.error(rec.error);
        self.recorder = rec;
        self.recorder.start();
        param.success("开始录音");
      });
    } catch (e) {
      param.error("开始录音失败" + e);
    }
  }

  stopRecord(param) {
    let self = this;
    try {
      let blobData = self.recorder.getBlob();
      param.success(blobData);
    } catch (e) {
      param.error("结束录音失败" + e);
    }
  }

  play(audio) {
    let self = this;
    try {
      self.recorder.play(audio);
    } catch (e) {
      console.error("录音播放失败" + e);
    }
  }

  clear(audio) {
    let self = this;
    try {
      self.recorder.clear(audio);
    } catch (e) {
      console.error("清空录音失败" + e);
    }
  }
}

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/record/record.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var recordvue_type_script_lang_js_ = ({
  name: "Record",
  data() {
    return {
      isFinished: false,
      audio: "",
      recorder: new Record_sdk_Record()
    };
  },
  methods: {
    startRecord: function() {
      console.log("start to record now.");
      let self = this;
      self.isFinished = false;
      self.recorder.startRecord({});
    },
    stopRecord: function() {
      console.log("stop record now.");
      let self = this;
      self.isFinished = false;
      self.recorder.stopRecord({});
    },
    play: function() {
      console.log("play record now.");
      let self = this;
      self.isFinished = true;
      self.audio = document.querySelector("audio");
      self.recorder.play(self.audio);
    }
  }
});

// CONCATENATED MODULE: ./packages/components/record/record.vue?vue&type=script&lang=js&
 /* harmony default export */ var record_recordvue_type_script_lang_js_ = (recordvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./packages/components/record/record.vue





/* normalize component */

var record_component = normalizeComponent(
  record_recordvue_type_script_lang_js_,
  recordvue_type_template_id_186fdfd7_render,
  recordvue_type_template_id_186fdfd7_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var record = (record_component.exports);
// CONCATENATED MODULE: ./packages/components/record/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
record.install = function(vue) {
  vue.component(record.name, record);
};

// 默认导出组件
/* harmony default export */ var components_record = (record);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"98d47b74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/search/search.vue?vue&type=template&id=e9e3b88a&scoped=true&
var searchvue_type_template_id_e9e3b88a_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"search"},[_c('div',{staticClass:"search-input"},[_c('el-input',{attrs:{"placeholder":_vm.placeholdersearch},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('div',[_c('i',{staticClass:"el-icon-camera-solid"})])]},proxy:true}]),model:{value:(_vm.searchValue),callback:function ($$v) {_vm.searchValue=$$v},expression:"searchValue"}})],1),_c('el-select',{staticClass:"select",model:{value:(_vm.type),callback:function ($$v) {_vm.type=$$v},expression:"type"}},_vm._l((_vm.selectItems),function(item){return _c('el-option',{key:item.value,attrs:{"label":item.label,"value":item.value}})}),1),_c('el-button',{attrs:{"icon":"el-icon-search"},on:{"click":_vm.searchClick}})],1)}
var searchvue_type_template_id_e9e3b88a_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/search/search.vue?vue&type=template&id=e9e3b88a&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/search/search.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var searchvue_type_script_lang_js_ = (create({
  name: "search",
  props: {
    option: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {
      searchValue: "",
      type: this.option.type || "",
      searchClick: this.option.searchClick
    };
  },
  methods: {},
  computed: {
    selectItems: function() {
      return this.option.selectItems || [];
    }
  }
}));

// CONCATENATED MODULE: ./packages/components/search/search.vue?vue&type=script&lang=js&
 /* harmony default export */ var search_searchvue_type_script_lang_js_ = (searchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/search/search.vue?vue&type=style&index=0&id=e9e3b88a&lang=scss&scoped=true&
var searchvue_type_style_index_0_id_e9e3b88a_lang_scss_scoped_true_ = __webpack_require__("b8ac");

// CONCATENATED MODULE: ./packages/components/search/search.vue






/* normalize component */

var search_component = normalizeComponent(
  search_searchvue_type_script_lang_js_,
  searchvue_type_template_id_e9e3b88a_scoped_true_render,
  searchvue_type_template_id_e9e3b88a_scoped_true_staticRenderFns,
  false,
  null,
  "e9e3b88a",
  null
  
)

/* harmony default export */ var search = (search_component.exports);
// CONCATENATED MODULE: ./packages/components/search/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
search.install = function(vue) {
  vue.component(search.name, search);
};

// 默认导出组件
/* harmony default export */ var components_search = (search);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"98d47b74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/scrollLoader/scrollLoader.vue?vue&type=template&id=dad01152&scoped=true&
var scrollLoadervue_type_template_id_dad01152_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"container-main",attrs:{"id":"scrollLoader-container"}},[(_vm.topLoading)?_c('div',{staticClass:"loading"},[_c('div',{staticClass:"loader"},[_vm._v("加载中...")])]):_vm._e(),_c('div',{style:('min-height:' + _vm.realMinHeight + 'px; overflow-x:hidden')},[_vm._t("default")],2),(_vm.bottonLoading)?_c('div',{staticClass:"loading"},[_c('div',{staticClass:"loader"},[_vm._v("加载中...")])]):_vm._e()])}
var scrollLoadervue_type_template_id_dad01152_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/scrollLoader/scrollLoader.vue?vue&type=template&id=dad01152&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/scrollLoader/scrollLoader.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var scrollLoadervue_type_script_lang_js_ = ({
  name: "scrollLoader",

  props: {
    //给slot传一个最小值，保证一开始能出现滚动条
    minHeight: {
      type: Number,
      default: 800
    }
  },

  created() {},
  computed: {
    realMinHeight() {
      return this.minHeight + 30;
    }
  },
  data() {
    return {
      topLoading: false,
      bottonLoading: false,

      stopTopLoading: false, //是否停止传播滚动到顶部事件
      stopBottonLoading: false //是否停止传播滚动到底部事件
    };
  },
  mounted() {
    this.listenScroll();
  },

  methods: {
    listenScroll() {
      var me = this;
      var topDone = stopTopLoading => {
        me.topLoading = false;
        if (stopTopLoading) me.stopTopLoading = true;
      };

      var bottonDone = stopBottonLoading => {
        me.bottonLoading = false;
        if (stopBottonLoading) me.stopBottonLoading = true;
      };
      setTimeout(function() {
        var scrollContainer = document.getElementById("scrollLoader-container");

        scrollContainer.onscroll = function() {
          if (scrollContainer.scrollTop <= 0 && !me.stopTopLoading) {
            if (me.topLoading) return;

            me.topLoading = true;
            me.$emit("scroll-to-top", topDone);
          }
          if (
            scrollContainer.offsetHeight + scrollContainer.scrollTop + 1 >=
              scrollContainer.scrollHeight &&
            !me.stopBottonLoading
          ) {
            if (me.bottonLoading) return;

            me.bottonLoading = true;
            scrollContainer.scrollTop += 40;
            me.$emit("scroll-to-botton", bottonDone);
          }
        };
      }, 50);
    }
  }
});

// CONCATENATED MODULE: ./packages/components/scrollLoader/scrollLoader.vue?vue&type=script&lang=js&
 /* harmony default export */ var scrollLoader_scrollLoadervue_type_script_lang_js_ = (scrollLoadervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/scrollLoader/scrollLoader.vue?vue&type=style&index=0&id=dad01152&scoped=true&lang=css&
var scrollLoadervue_type_style_index_0_id_dad01152_scoped_true_lang_css_ = __webpack_require__("5647");

// CONCATENATED MODULE: ./packages/components/scrollLoader/scrollLoader.vue






/* normalize component */

var scrollLoader_component = normalizeComponent(
  scrollLoader_scrollLoadervue_type_script_lang_js_,
  scrollLoadervue_type_template_id_dad01152_scoped_true_render,
  scrollLoadervue_type_template_id_dad01152_scoped_true_staticRenderFns,
  false,
  null,
  "dad01152",
  null
  
)

/* harmony default export */ var scrollLoader = (scrollLoader_component.exports);
// CONCATENATED MODULE: ./packages/components/scrollLoader/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
scrollLoader.install = function(vue) {
  vue.component(scrollLoader.name, scrollLoader);
};

// 默认导出组件
/* harmony default export */ var components_scrollLoader = (scrollLoader);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"98d47b74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/backTop/backTop.vue?vue&type=template&id=778ddaff&scoped=true&
var backTopvue_type_template_id_778ddaff_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{directives:[{name:"show",rawName:"v-show",value:(_vm.backToTop),expression:"backToTop"}],staticClass:"toTop",attrs:{"href":"javascript:;"},on:{"click":_vm.backTop}},[_c('i',{staticClass:"el-icon-caret-top"})])}
var backTopvue_type_template_id_778ddaff_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/backTop/backTop.vue?vue&type=template&id=778ddaff&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/backTop/backTop.vue?vue&type=script&lang=js&
//
//
//
//
//

/* harmony default export */ var backTopvue_type_script_lang_js_ = ({
	name: "backTop",
	data() {
		return {
      backToTop:""
    }
	},
	mounted() {
    window.addEventListener("scroll", this.scrollToTop);
  },
	components: {},
	methods: {
		scrollToTop() {
      //滚动的距离如果大于浏览器高度时，设置 toTop 为true
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||  //是网页被卷去的高度
        document.body.scrollTop;
      let browserHeight = window.outerHeight;
      if (scrollTop > browserHeight) {
        this.backToTop = true
      } else {
        this.backToTop = false
      }
  },
  //回到顶部
	 backTop() {
      let back = setInterval(() => {
        if (document.body.scrollTop || document.documentElement.scrollTop) {
          document.body.scrollTop -= 100;
          document.documentElement.scrollTop -= 100;
        } else {
          clearInterval(back);
        }
      });
	},
	destroyed() {
    window.removeEventListener("scroll", this.scrollToTop);
  }
  }
});

// CONCATENATED MODULE: ./packages/components/backTop/backTop.vue?vue&type=script&lang=js&
 /* harmony default export */ var backTop_backTopvue_type_script_lang_js_ = (backTopvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/backTop/backTop.vue?vue&type=style&index=0&id=778ddaff&lang=scss&scoped=true&
var backTopvue_type_style_index_0_id_778ddaff_lang_scss_scoped_true_ = __webpack_require__("aa14");

// CONCATENATED MODULE: ./packages/components/backTop/backTop.vue






/* normalize component */

var backTop_component = normalizeComponent(
  backTop_backTopvue_type_script_lang_js_,
  backTopvue_type_template_id_778ddaff_scoped_true_render,
  backTopvue_type_template_id_778ddaff_scoped_true_staticRenderFns,
  false,
  null,
  "778ddaff",
  null
  
)

/* harmony default export */ var backTop = (backTop_component.exports);
// CONCATENATED MODULE: ./packages/components/backTop/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
backTop.install = function(vue) {
  vue.component(backTop.name, backTop);
};

// 默认导出组件
/* harmony default export */ var components_backTop = (backTop);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"98d47b74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/drawer/drawer.vue?vue&type=template&id=08ebdd7c&scoped=true&
var drawervue_type_template_id_08ebdd7c_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"drawer"},[_c('div',{class:_vm.maskClass,on:{"click":_vm.closeByMask}}),_c('div',{staticClass:"main",class:_vm.mainClass,style:(_vm.mainStyle)},[_c('div',{staticClass:"drawer-head"},[_c('span',[_vm._v(_vm._s(_vm.title))]),_c('span',{directives:[{name:"show",rawName:"v-show",value:(_vm.closable),expression:"closable"}],staticClass:"close-btn",on:{"click":_vm.closeByButton}},[_vm._v("x")])]),_c('div',{staticClass:"drawer-body",style:(_vm.bodyStyle)},[_vm._t("default")],2)])])}
var drawervue_type_template_id_08ebdd7c_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/drawer/drawer.vue?vue&type=template&id=08ebdd7c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/drawer/drawer.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var drawervue_type_script_lang_js_ = ({
  name: "drawer",
  props: {
    // 是否打开
    display: {
      type: Boolean
    },
    // 标题
    title: {
      type: String,
      default: "标题"
    },
    // 是否显示关闭按钮
    closable: {
      type: Boolean,
      default: true
    },
    // 是否显示遮罩
    mask: {
      type: Boolean,
      default: true
    },
    // 是否点击遮罩关闭
    maskClosable: {
      type: Boolean,
      default: true
    },
    // 宽度
    width: {
      type: String,
      default: "400px"
    },
    // 高度
    height: {
      type: String,
      default: "75%"
    },
    // 是否在父级元素中打开
    inner: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    maskClass: function() {
      return {
        "mask-show": this.mask && this.display,
        "mask-hide": !(this.mask && this.display),
        inner: this.inner
      };
    },
    mainClass: function() {
      return {
        "main-show": this.display,
        "main-hide": !this.display,
        inner: this.inner
      };
    },
    mainStyle: function() {
      return {
        width: this.width,
        height: this.height,
        bottom: this.display ? "0" : `-${this.height}`,
        borderTop: this.mask ? "none" : "1px solid #eee"
      };
    },
    bodyStyle: function() {
      return {
        height: this.height
      };
    }
  },
  mounted() {
    if (this.inner) {
      let box = this.$el.parentNode;
      box.style.position = "relative";
    }
  },
  methods: {
    closeByMask() {
      this.maskClosable && this.$emit("update:display", false);
    },
    closeByButton() {
      this.$emit("update:display", false);
    }
  }
});

// CONCATENATED MODULE: ./packages/components/drawer/drawer.vue?vue&type=script&lang=js&
 /* harmony default export */ var drawer_drawervue_type_script_lang_js_ = (drawervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/drawer/drawer.vue?vue&type=style&index=0&id=08ebdd7c&lang=scss&scoped=true&
var drawervue_type_style_index_0_id_08ebdd7c_lang_scss_scoped_true_ = __webpack_require__("2636");

// CONCATENATED MODULE: ./packages/components/drawer/drawer.vue






/* normalize component */

var drawer_component = normalizeComponent(
  drawer_drawervue_type_script_lang_js_,
  drawervue_type_template_id_08ebdd7c_scoped_true_render,
  drawervue_type_template_id_08ebdd7c_scoped_true_staticRenderFns,
  false,
  null,
  "08ebdd7c",
  null
  
)

/* harmony default export */ var drawer = (drawer_component.exports);
// CONCATENATED MODULE: ./packages/components/drawer/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
drawer.install = function(vue) {
  vue.component(drawer.name, drawer);
};

// 默认导出组件
/* harmony default export */ var components_drawer = (drawer);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"98d47b74-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/SvgIcon/SvgIcon.vue?vue&type=template&id=9519193e&scoped=true&
var SvgIconvue_type_template_id_9519193e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',_vm._g({class:_vm.svgClass,attrs:{"aria-hidden":"true"}},_vm.$listeners),[_c('use',{attrs:{"xlink:href":_vm.iconName}})])}
var SvgIconvue_type_template_id_9519193e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./packages/components/SvgIcon/SvgIcon.vue?vue&type=template&id=9519193e&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/components/SvgIcon/SvgIcon.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var SvgIconvue_type_script_lang_js_ = ({
  name: "SvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ""
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return "svg-icon " + this.className;
      } else {
        return "svg-icon";
      }
    }
  }
});

// CONCATENATED MODULE: ./packages/components/SvgIcon/SvgIcon.vue?vue&type=script&lang=js&
 /* harmony default export */ var SvgIcon_SvgIconvue_type_script_lang_js_ = (SvgIconvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/components/SvgIcon/SvgIcon.vue?vue&type=style&index=0&id=9519193e&scoped=true&lang=css&
var SvgIconvue_type_style_index_0_id_9519193e_scoped_true_lang_css_ = __webpack_require__("4013");

// CONCATENATED MODULE: ./packages/components/SvgIcon/SvgIcon.vue






/* normalize component */

var SvgIcon_component = normalizeComponent(
  SvgIcon_SvgIconvue_type_script_lang_js_,
  SvgIconvue_type_template_id_9519193e_scoped_true_render,
  SvgIconvue_type_template_id_9519193e_scoped_true_staticRenderFns,
  false,
  null,
  "9519193e",
  null
  
)

/* harmony default export */ var SvgIcon = (SvgIcon_component.exports);
// CONCATENATED MODULE: ./packages/components/SvgIcon/index.js
// 导入组件，组件必须声明 name


// 为组件提供 install 安装方法，供按需引入
SvgIcon.install = function(vue) {
  vue.component(SvgIcon.name, SvgIcon);
};

// 默认导出组件
/* harmony default export */ var components_SvgIcon = (SvgIcon);

// CONCATENATED MODULE: ./packages/plugin/logs/index.js
const log = {};
const levelInfo = {
  ALL: 0,
  DEBUG: 1,
  NOTE: 2,
  WARN: 3,
  ERROR: 4,
  NO_INFO: 5
};
let currentLevel = levelInfo["ERROR"];
/**
 * @description 返回这个样式的颜色值
 * @param {String} type 样式名称 [ primary | success | warning | danger | text ]
 */
function typeColor(type = "default") {
  let color = "";
  switch (type) {
    case "default":
      color = "#35495E";
      break;
    case "primary":
      color = "#3488ff";
      break;
    case "success":
      color = "#43B883";
      break;
    case "warning":
      color = "#e6a23c";
      break;
    case "danger":
      color = "#f56c6c";
      break;
    default:
      break;
  }
  return color;
}

log.setLevel = function(text = "DEBUG") {
  currentLevel = levelInfo[text];
  console.log("curLogLevel = " + text);
};
/**
 * @description 打印一个 [ title | text ] 样式的信息
 * @param {String} title title text
 * @param {String} info info text
 * @param {String} level
 * @param {String} type style
 */
log.capsule = function(level, title, info, type = "primary") {
  if (levelInfo[level] >= currentLevel) {
    console.log(
      `%c[${level}] %c ${title} %c ${info} %c`,
      "background:#f56c6c; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;",
      "background:#35495E; padding: 1px; border-radius: 3px 0 0 3px; color: #fff;",
      `background:${typeColor(
        type
      )}; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff;`,
      "background:transparent"
    );
  }
};

/**
 * @description 打印彩色文字
 */
log.colorful = function(level, textArr) {
  if (levelInfo[level] >= currentLevel) {
    console.log(
      `%c[${level}] ${textArr.map(t => t.text || "").join("%c")}`,
      ...textArr.map(t => `color: ${typeColor(t.type)};`)
    );
  }
};

/**
 * @description 打印 default 样式的文字
 */
log.all = function(text) {
  log.colorful("ALL", [{ text }]);
};

/**
 * @description 打印 primary 样式的文字
 */
log.debug = function(text) {
  log.colorful("DEBUG", [{ text, type: "primary" }]);
};

/**
 * @description 打印 success 样式的文字
 */
log.note = function(text) {
  log.colorful("NOTE", [{ text, type: "success" }]);
};

/**
 * @description 打印 warning 样式的文字
 */
log.warn = function(text) {
  log.colorful("WARN", [{ text, type: "warning" }]);
};

/**
 * @description 打印 danger 样式的文字
 */
log.error = function(text) {
  log.colorful("ERROR", [{ text, type: "danger" }]);
};

/* harmony default export */ var logs = (log);

// CONCATENATED MODULE: ./packages/index.js









// 存储组件列表
const components = [
  components_CardFlag,
  components_login,
  components_record,
  components_search,
  components_scrollLoader,
  components_backTop,
  components_drawer,
  components_SvgIcon
];
let prototypes = {
  $myVueLog: logs
};

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = vue => {
  components.map(component => {
    vue.component(component.name, component);
  });
  Object.keys(prototypes).forEach(key => {
    vue.prototype[key] = prototypes[key];
  });
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  login: components_login,
  CardFlag: components_CardFlag,
  record: components_record,
  search: components_search,
  scrollLoader: components_scrollLoader,
  backTop: components_backTop,
  drawer: components_drawer,
  SvgIcon: components_SvgIcon
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=myvue.umd.js.map