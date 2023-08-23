"use strict";
(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/test/list"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./src/pages/test/list.ts?vue&type=script&lang=js&external":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./src/pages/test/list.ts?vue&type=script&lang=js&external ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits.js */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper.js */ "./node_modules/@babel/runtime/helpers/esm/createSuper.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var vue_facing_decorator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-facing-decorator */ "webpack/container/remote/vue-facing-decorator");
/* harmony import */ var vue_facing_decorator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_facing_decorator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _base_BaseVue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/base/BaseVue */ "./src/base/BaseVue.ts");






var _class;



var TestView = (0,vue_facing_decorator__WEBPACK_IMPORTED_MODULE_0__.Component)(_class = /*#__PURE__*/function (_BaseVue) {
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TestView, _BaseVue);
  var _super = (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createSuper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(TestView);
  function TestView() {
    var _this;
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__["default"])(this, TestView);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_5__["default"])((0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "profile", {});
    return _this;
  }
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__["default"])(TestView, [{
    key: "val",
    value: function val(v, k) {
      return /Time/.test(k) ? new Date(v * 1000).toLocaleString() : v;
    }
  }, {
    key: "created",
    value: function created() {
      var _this2 = this;
      this.$api.userApi.profile.request({}).then(function (res) {
        _this2.profile = res;
      }).catch(function () {});
    }
  }]);
  return TestView;
}(_base_BaseVue__WEBPACK_IMPORTED_MODULE_1__.BaseVue)) || _class;
;
/* harmony default export */ __webpack_exports__["default"] = ((0,vue_facing_decorator__WEBPACK_IMPORTED_MODULE_0__.toNative)(TestView));

/***/ }),

/***/ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/test/list.vue":
/*!*******************************************************************************!*\
  !*** ./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/test/list.vue ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _list_vue_vue_type_template_id_248ab0a7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.vue?vue&type=template&id=248ab0a7 */ "./src/pages/test/list.vue?vue&type=template&id=248ab0a7");
/* harmony import */ var _list_ts_vue_type_script_lang_js_external__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list.ts?vue&type=script&lang=js&external */ "./src/pages/test/list.ts?vue&type=script&lang=js&external");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");
/* unplugin-vue-components disabled */



;
const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_list_ts_vue_type_script_lang_js_external__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_list_vue_vue_type_template_id_248ab0a7__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/pages/test/list.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["default"] = (__exports__);

/***/ }),

/***/ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/test/list.vue?vue&type=template&id=248ab0a7":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/test/list.vue?vue&type=template&id=248ab0a7 ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; }
/* harmony export */ });
/* harmony import */ var _nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nutui/nutui-taro */ "./node_modules/@nutui/nutui-taro/dist/packages/form/index.mjs");
/* harmony import */ var _nutui_nutui_taro_dist_packages_form_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @nutui/nutui-taro/dist/packages/form/style */ "./node_modules/@nutui/nutui-taro/dist/packages/form/style.mjs");
/* harmony import */ var _nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @nutui/nutui-taro */ "./node_modules/@nutui/nutui-taro/dist/packages/formitem/index.mjs");
/* harmony import */ var _nutui_nutui_taro_dist_packages_formitem_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nutui/nutui-taro/dist/packages/formitem/style */ "./node_modules/@nutui/nutui-taro/dist/packages/formitem/style.mjs");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "webpack/container/remote/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);
/* unplugin-vue-components disabled */


var _hoisted_1 = {
  class: "pages-test-list"
};
var _hoisted_2 = ["src"];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  var _component_nut_form_item = _nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_3__.FormItem;
  var _component_nut_form = _nutui_nutui_taro__WEBPACK_IMPORTED_MODULE_4__.Form;
  return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)("div", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("img", {
    class: "avatar",
    src: _ctx.profile.profilePicturePath
  }, null, 8 /* PROPS */, _hoisted_2), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createVNode)(_component_nut_form, null, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_2__.withCtx)(function () {
      return [((0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_2__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.renderList)(_ctx.profile, function (v, k) {
        return (0,vue__WEBPACK_IMPORTED_MODULE_2__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_2__.createBlock)(_component_nut_form_item, {
          key: k,
          label: k
        }, {
          default: (0,vue__WEBPACK_IMPORTED_MODULE_2__.withCtx)(function () {
            return [(0,vue__WEBPACK_IMPORTED_MODULE_2__.createElementVNode)("span", null, (0,vue__WEBPACK_IMPORTED_MODULE_2__.toDisplayString)(v), 1 /* TEXT */)];
          }),

          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label"]);
      }), 128 /* KEYED_FRAGMENT */))];
    }),

    _: 1 /* STABLE */
  })]);
}

/***/ }),

/***/ "./src/pages/test/list.vue":
/*!*********************************!*\
  !*** ./src/pages/test/list.vue ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_tarojs_taro_loader_lib_raw_js_list_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@tarojs/taro-loader/lib/raw.js!./list.vue */ "./node_modules/@tarojs/taro-loader/lib/raw.js!./src/pages/test/list.vue");


var config = {"navigationBarTitleText":"测试"};


var inst = Page((0,_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__.createPageConfig)(_node_modules_tarojs_taro_loader_lib_raw_js_list_vue__WEBPACK_IMPORTED_MODULE_1__["default"], 'pages/test/list', {root:{cn:[]}}, config || {}))


/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_tarojs_taro_loader_lib_raw_js_list_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./src/pages/test/list.vue?vue&type=template&id=248ab0a7":
/*!***************************************************************!*\
  !*** ./src/pages/test/list.vue?vue&type=template&id=248ab0a7 ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unplugin_vue_components_node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_list_vue_vue_type_template_id_248ab0a7__WEBPACK_IMPORTED_MODULE_0__.render; }
/* harmony export */ });
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_unpluginName_unplugin_vue_components_node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_3_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_list_vue_vue_type_template_id_248ab0a7__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!../../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./list.vue?vue&type=template&id=248ab0a7 */ "./node_modules/unplugin/dist/webpack/loaders/transform.js?unpluginName=unplugin-vue-components!./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/pages/test/list.vue?vue&type=template&id=248ab0a7");
/* unplugin-vue-components disabled */

/***/ }),

/***/ "./src/pages/test/list.ts?vue&type=script&lang=js&external":
/*!*****************************************************************!*\
  !*** ./src/pages/test/list.ts?vue&type=script&lang=js&external ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_list_ts_vue_type_script_lang_js_external__WEBPACK_IMPORTED_MODULE_0__["default"]; }
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_list_ts_vue_type_script_lang_js_external__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./list.ts?vue&type=script&lang=js&external */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./src/pages/test/list.ts?vue&type=script&lang=js&external");
 

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","lib"], function() { return __webpack_exec__("./src/pages/test/list.vue"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=list.js.map