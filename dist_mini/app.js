"use strict";
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-JKKUMPG4_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-TPMSBFWW_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_cube-common-lib_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_vuex_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_chunk-5X4YNDSA_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_vue-facing-decorator_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-framework-vue3_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_taro_js.js");
require("./prebundle/node_modules_taro_weapp_prebundle_tarojs_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-platform-weapp_dist_runtime_js.js");
require("./prebundle/vendors-node_modules_taro_weapp_prebundle_tarojs_plugin-html_dist_runtime_js.js");
require("./prebundle/remoteEntry.js");
require("./prebundle/node_modules_taro_weapp_prebundle_vue_js.js");

require("./lib");
require("./vendors");
require("./taro");
require("./runtime");

(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["app"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./src/app.ts":
/*!**************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./src/app.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/container/remote/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./store */ "./src/store/index.ts");
/* harmony import */ var _utils_CommonUtil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/CommonUtil */ "./src/utils/CommonUtil.ts");
/* harmony import */ var _plugins_TaroRequest__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./plugins/TaroRequest */ "./src/plugins/TaroRequest.ts");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _plugins_AllPlugins__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/AllPlugins */ "./src/plugins/AllPlugins.ts");







_utils_CommonUtil__WEBPACK_IMPORTED_MODULE_2__.CommonUtil.setTaro((_tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default()));
var App = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)({
  onShow: function onShow(_options) {} // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
});

App.use(_store__WEBPACK_IMPORTED_MODULE_1__["default"]).use(_plugins_TaroRequest__WEBPACK_IMPORTED_MODULE_3__["default"]).use(_plugins_AllPlugins__WEBPACK_IMPORTED_MODULE_5__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/plugin-platform-weapp/dist/runtime */ "webpack/container/remote/@tarojs/plugin-platform-weapp/dist/runtime");
/* harmony import */ var _tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_platform_weapp_dist_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/plugin-html/dist/runtime */ "webpack/container/remote/@tarojs/plugin-html/dist/runtime");
/* harmony import */ var _tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_html_dist_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime");
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tarojs_plugin_framework_vue3_dist_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/plugin-framework-vue3/dist/runtime */ "webpack/container/remote/@tarojs/plugin-framework-vue3/dist/runtime");
/* harmony import */ var _tarojs_plugin_framework_vue3_dist_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_plugin_framework_vue3_dist_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_app_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./app.ts */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-11.use[0]!./src/app.ts");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue */ "webpack/container/remote/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_6__);











var config = {"pages":["pages/index/index","pages/test/list","pages/test/_id"],"window":{"backgroundTextStyle":"light","navigationBarBackgroundColor":"#fff","navigationBarTitleText":"WeChat","navigationBarTextStyle":"black"},"tabBar":{"color":"#666","selectedColor":"#f38433","backgroundColor":"#fff","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"assets/images/service.png","selectedIconPath":"assets/images/service-active.png"},{"pagePath":"pages/test/list","text":"测试","iconPath":"assets/images/service.png","selectedIconPath":"assets/images/service-active.png"}]}};
_tarojs_runtime__WEBPACK_IMPORTED_MODULE_2__.window.__taroAppConfig = config
var inst = App((0,_tarojs_plugin_framework_vue3_dist_runtime__WEBPACK_IMPORTED_MODULE_3__.createVue3App)(_node_modules_babel_loader_lib_index_js_clonedRuleSet_11_use_0_app_ts__WEBPACK_IMPORTED_MODULE_5__["default"], vue__WEBPACK_IMPORTED_MODULE_6__.h, config))

;(0,_tarojs_taro__WEBPACK_IMPORTED_MODULE_4__.initPxTransform)({
  designWidth: function designWidth(input) {
                    var _input_file;
                    // 配置 NutUI 375 尺寸
                    if ((input === null || input === void 0 ? void 0 : (_input_file = input.file) === null || _input_file === void 0 ? void 0 : _input_file.replace(/\\+/g, "/").indexOf("@nutui")) > -1) {
                        return 375;
                    }
                    // 全局使用 Taro 默认的 750 尺寸
                    return 375;
                },
  deviceRatio: {"375":2,"640":1.17,"750":1,"828":0.905},
  baseFontSize: 20,
  unitPrecision: undefined,
  targetUnit: undefined
})


/***/ }),

/***/ "./src/clients/CubeAuthClient.ts":
/*!***************************************!*\
  !*** ./src/clients/CubeAuthClient.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CubeAuthClient": function() { return /* binding */ CubeAuthClient; }
/* harmony export */ });
/* unused harmony export CubeAuthConfig */
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* provided dependency */ var location = __webpack_require__(/*! @tarojs/runtime */ "webpack/container/remote/@tarojs/runtime")["location"];




var CubeAuthTokenObj = /*#__PURE__*/function () {
  function CubeAuthTokenObj(obj) {
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CubeAuthTokenObj);
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "accessToken", null);
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "refreshToken", null);
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "expireIn", null);
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "expireAt", null);
    if (obj) {
      this.accessToken = obj.accessToken;
      this.refreshToken = obj.refreshToken;
      if (obj.expireAt) {
        this.expireAt = obj.expireAt;
      } else if (obj.expireIn) {
        this.expireAt = Date.now() + obj.expireIn * 1000;
      }
      ;
    }
    ;
  }
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CubeAuthTokenObj, [{
    key: "get",
    value: function get() {
      var obj = JSON.parse(JSON.stringify(this));
      obj.accessToken = obj.accessToken || '';
      obj.refreshToken = obj.refreshToken || '';
      obj.expireAt = obj.expireAt || 0;
      obj.expireIn = this.expireAt ? Math.trunc((obj.expireAt - Date.now()) / 1000) : 0; // 为了expireIn单位与服务端统一, expireIn转化为秒
      return obj;
    }
  }, {
    key: "accessTokenValid",
    value: function accessTokenValid() {
      return !!this.accessToken && this.expireAt > Date.now();
    }
  }]);
  return CubeAuthTokenObj;
}();
;
var CubeAuthConfig = /*#__PURE__*/(0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(function CubeAuthConfig() {
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CubeAuthConfig);
  /** 应用名称 */
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "name", '');
  /** GlobalData实例 */
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "tokenKey", null);
  /** GlobalData实例 */
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "globalData", null);
  /** 刷新token方法 (refreshToken: string) => Promise<CubeAuthToken> */
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "refreshToken", null);
  /** 登录方法 () => Promise<string> */
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "login", null);
  /** 登出配置 (accessToken: string) => Promise<string> */
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "logout", null);
  /** 登录回调方法 (params: { code: string; state: string; type: string; }) => Promise<CubeAuthToken> */
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "signInCallback", null);
  /** 保存token回调 */
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "onSaveToken", null);
  /** 是否启用log */
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "log", true);
  /** 刷新token失败后重新尝试间隔毫秒数，默认10000，设置0或者false则不尝试重新刷新token */
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "refreshFailedRetryMillisecond", 10000);
  /** 创建实例后立即刷新token */
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "refreshAfterInit", false);
  /** 是否使用CubeAuth内置刷新token程序 */
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "refreshTokenAuto", true);
});
;

/**
 * <md>CubeAuthClient
 */

/**
 * <mds>**新qpass单点登录，app保存token，自动保存并刷新token**
 */

var CubeAuthClient = /*#__PURE__*/function () {
  function CubeAuthClient(config) {
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CubeAuthClient);
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "tokenKey", null);
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "globalData", null);
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "config", new CubeAuthConfig());
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "timer", null);
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "refreshing", false);
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "events", new Map());
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "count", 1);
    this.$log('初始化开始');
    this.$log('正在保存配置' + (config.name ? ', 应用名称: ' + config.name : ''));
    this.setConfig(config);
  }
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CubeAuthClient, [{
    key: "$log",
    value: function $log(message) {
      if (this.config.log !== false) {
        var _console;
        for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          optionalParams[_key - 1] = arguments[_key];
        }
        (_console = console).log.apply(_console, ['<--CubeAuth-->', message].concat(optionalParams));
      }
      ;
    }
  }, {
    key: "tt",
    value: function tt(ms) {
      var u = [1000, 60, 60, 24],
        unit = ['毫秒', '秒', '分钟', '小时', '天'];
      var res = [ms];
      for (var i = 0; i < u.length; i++) {
        var n = u[i],
          x = res[i];
        if (x >= n) {
          res[i] = x % n;
          res.push(Math.trunc(x / n));
        } else {
          break;
        }
        ;
      }
      ;
      return res.map(function (s, j) {
        return s > 0 ? s + unit[j] : '';
      }).reverse().join('');
    }
  }, {
    key: "action",
    value: function action(key) {
      var _this = this;
      this.events.forEach(function (callback, name) {
        if (name.startsWith(key)) {
          callback();
          if (/--ONCE$/.test(name)) {
            _this.events.delete(name);
          }
          ;
        }
        ;
      });
    }
  }, {
    key: "mergeObject",
    value: function mergeObject(obj1, obj2) {
      function merge(a, b) {
        return a && b && (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(a) == 'object' && (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(b) == 'object';
      }
      ;
      if (merge(obj1, obj2)) {
        for (var key in obj2) {
          if (merge(obj1[key], obj2[key])) {
            this.mergeObject(obj1[key], obj2[key]);
          } else {
            obj1[key] = obj2[key];
          }
          ;
        }
      }
      ;
    }
  }, {
    key: "getTokenObj",
    value: /** 获取token对象，{ accessToken?: string; expire?: number; refreshToken?: string; } */
    function getTokenObj() {
      var obj = this.globalData.get(this.tokenKey, 'localStorage');
      return new CubeAuthTokenObj(obj);
    }
  }, {
    key: "isLogin",
    value: /** 判断是否存在accessToken，并且accessToken未过期 */
    function isLogin() {
      return this.getTokenObj().accessTokenValid();
    }
  }, {
    key: "getAccessToken",
    value: /** 获取accessToken */
    function getAccessToken() {
      return this.getTokenObj().accessToken;
    }
  }, {
    key: "getRefreshToken",
    value: /** 获取refreshToken */
    function getRefreshToken() {
      return this.getTokenObj().refreshToken;
    }
  }, {
    key: "getExpireIn",
    value: /** 获取过期时间, 单位ms */
    function getExpireIn() {
      return this.getTokenObj().get().expireIn * 1000;
    }
  }, {
    key: "stopAutoRefreshToken",
    value: /** 停止自动刷新token */
    function stopAutoRefreshToken() {
      clearTimeout(this.timer);
    }
  }, {
    key: "startAutoRefreshToken",
    value: /** 启动自动刷新token程序 */
    function startAutoRefreshToken() {
      var _this2 = this;
      this.stopAutoRefreshToken(); // 清除上一个刷新token的timeout程序
      var ms = Math.trunc(this.getExpireIn() * 0.66); // 获取token过期时间剩余大约1/3的时候的剩余毫秒数
      ms = ms > 86400000 ? 86400000 : ms; // 限制ms不超过1天，避免setTimeout因毫秒数过大无法执行
      ms = ms < 60000 ? 60000 : ms; // 限制ms不小于1分钟，避免因过期时间太小导致刷新过于频繁
      ms = Math.round(ms / 60000) * 60000; // 限制ms为分钟的整数倍
      this.timer = setTimeout(function () {
        return _this2.refreshToken();
      }, ms);
      this.$log(this.tt(ms) + '后刷新token');
    }
  }, {
    key: "setToken",
    value: /** 保存token信息(accessToken，refreshToken，expireIn) */
    function setToken(token) {
      var _this3 = this;
      this.$log('正在保存token');
      return new Promise(function (resolve) {
        if (!token) {
          _this3.$log('保存token失败, tokenObj为空');
          resolve();
        } else {
          var obj = new CubeAuthTokenObj(token);
          if (obj.accessTokenValid()) {
            var info = obj.get();
            _this3.$log("accessToken: ".concat(info.accessToken.slice(0, 5), "...").concat(info.accessToken.slice(-5), ", refreshToken: ").concat(info.refreshToken.slice(0, 5), "...").concat(info.refreshToken.slice(-5), ", expireIn: ").concat(info.expireIn));
            _this3.globalData.set(_this3.tokenKey, info, 'localStorage');
            _this3.$log('保存token成功');
            if (_this3.config.refreshTokenAuto) {
              _this3.$log('启动自动刷新token程序');
              _this3.startAutoRefreshToken();
            }
            ;
            if (typeof _this3.config.onSaveToken == 'function') {
              _this3.config.onSaveToken(obj);
            }
            ;
            resolve();
          } else if (obj.refreshToken) {
            _this3.$log('token已过期, 正在自动刷新');
            _this3.refreshToken().then(function () {
              return resolve();
            });
          } else {
            _this3.$log('保存token失败, token: ' + JSON.stringify(token));
          }
          ;
        }
        ;
      });
    }
  }, {
    key: "rmToken",
    value: /** 删除token信息(accessToken，refreshToken，expireIn) */
    function rmToken() {
      this.globalData.del('token', 'localStorage');
    }
  }, {
    key: "refreshToken",
    value: function (_refreshToken) {
      function refreshToken(_x) {
        return _refreshToken.apply(this, arguments);
      }
      refreshToken.toString = function () {
        return _refreshToken.toString();
      };
      return refreshToken;
    }( /** 刷新token, 刷新成功返回Promise.resolve(true)，失败或没有refreshToken返回Promise.resolve(false) */
    function (refreshToken) {
      var _this4 = this;
      return new Promise(function (resolve) {
        refreshToken = refreshToken || _this4.getRefreshToken();
        var action = _this4.config.refreshToken;
        var handle = function handle(msg) {
          var res = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var key = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'refresh-token-end';
          _this4.refreshing = false;
          _this4.$log(msg);
          resolve(res);
          _this4.action(key);
        };
        var end = function end(msg) {
            return setTimeout(function () {
              return handle(msg);
            }, 10);
          },
          success = function success(msg) {
            return handle(msg, true, 'refresh-token-success');
          },
          fail = function fail(msg) {
            return handle(msg, false, 'refresh-token-fail');
          };
        if (_this4.refreshing) {
          end('刷新token未被执行, 已有一个刷新token程序正在执行中');
        } else if (!refreshToken) {
          end('刷新token未被执行, 缺少“refreshToken”');
        } else if (typeof action != 'function') {
          end('刷新token未被执行, 配置缺少刷新token方法');
        } else if (typeof localStorage == 'undefined') {
          end('刷新token未被执行, 当前不是客户端环境');
        } else {
          _this4.refreshing = true;
          action(refreshToken).then(function (tokenObj) {
            if (tokenObj) {
              if (new CubeAuthTokenObj(tokenObj).accessTokenValid()) {
                success('刷新token成功');
                _this4.setToken(tokenObj);
              } else {
                fail("\u5237\u65B0token\u5931\u8D25, API\u8FD4\u56DEtokenObj\u7F3A\u5C11".concat(['accessToken', 'expireIn'].filter(function (key) {
                  return !tokenObj[key];
                }).join('、')));
              }
              ;
            } else {
              fail('刷新token失败, API返回tokenObj为空');
            }
            ;
          }).catch(function (err) {
            fail("\u5237\u65B0token\u5931\u8D25".concat(err ? ', ' + err.message : ''));
            if (_this4.config.refreshFailedRetryMillisecond) {
              _this4.$log(_this4.tt(_this4.config.refreshFailedRetryMillisecond) + '后重新尝试刷新token');
              _this4.timer = setTimeout(function () {
                return _this4.refreshToken();
              }, _this4.config.refreshFailedRetryMillisecond);
            }
            ;
          }).finally(function () {
            return end("\u7B2C".concat(_this4.count++, "\u6B21\u5237\u65B0token\u7ED3\u675F"));
          });
        }
        ;
      });
    })
  }, {
    key: "login",
    value: /** oAuth登录(需配置login方法) */
    function login() {
      var _this5 = this;
      var action = this.config.login;
      if (typeof action == 'function') {
        this.$log('正在获取登录地址');
        action().then(function (url) {
          _this5.$log('获取登录地址成功, 即将跳转至: ' + url);
          location.href = url;
        }).catch(function () {});
      }
      ;
    }
  }, {
    key: "logout",
    value: /** 登出(需配置logout方法) */
    function logout() {
      var _this6 = this;
      if (typeof this.config.logout == 'function') {
        this.config.logout(this.getAccessToken()).then(function (target) {
          _this6.rmToken();
          location.href = target;
        }).catch(function () {});
      }
      ;
    }
  }, {
    key: "signInCallback",
    value: /** 登录回调，获取token */
    function signInCallback(params) {
      var _this7 = this;
      return new Promise(function (resolve, reject) {
        var action = _this7.config.signInCallback;
        if (typeof action == 'function') {
          _this7.$log('登录成功, 正在获取token信息');
          action(params).then(function (res) {
            _this7.$log('获取token成功');
            _this7.setToken(res);
            resolve(res);
          }).catch(reject);
        } else {
          reject();
        }
        ;
      });
    }
  }, {
    key: "setConfig",
    value: /** 设置配置项 */
    function setConfig(config) {
      this.mergeObject(this.config, config);
      this.tokenKey = config.tokenKey;
      this.globalData = config.globalData;
      return this;
    }
  }, {
    key: "$on",
    value: /** 监听事件, 匿名函数无法删除 */
    function $on(event, callback) {
      if (typeof callback == 'function') {
        var name = callback.name || "".concat(Math.trunc(Math.random() * 1000000));
        this.events.set("".concat(event, "-").concat(name), callback);
      }
      ;
      return this;
    }
  }, {
    key: "$once",
    value: /** 监听事件, 只执行一次 */
    function $once(event, callback) {
      if (typeof callback == 'function') {
        this.events.set("".concat(event, "-").concat(Math.trunc(Math.random() * 1000000), "--ONCE"), callback);
      }
      ;
      return this;
    }
  }, {
    key: "$rm",
    value: /** 删除监听的事件, 匿名函数无法删除 */
    function $rm(event, callback) {
      if (typeof callback == 'function' && callback.name) {
        this.events.delete("".concat(event, "-").concat(callback.name));
      }
      ;
      return this;
    }
  }, {
    key: "init",
    value: /** 初始化 */
    function init() {
      var _this8 = this;
      var tokenObj = this.getTokenObj().get();
      this.$log('正在读取已保存的token');
      if (this.config.refreshAfterInit) {
        this.$log('配置refreshAfterInit为true, 正在刷新');
        this.refreshToken(tokenObj.refreshToken).then(function () {
          _this8.$log('初始化完成');
          _this8.action('init-end');
        });
      } else {
        this.setToken(tokenObj).then(function () {
          _this8.$log('初始化完成');
          _this8.action('init-end');
        });
      }
      ;
    }
  }]);
  return CubeAuthClient;
}();
;

/***/ }),

/***/ "./src/clients/CubeLangClient.ts":
/*!***************************************!*\
  !*** ./src/clients/CubeLangClient.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CubeLangClient": function() { return /* binding */ CubeLangClient; }
/* harmony export */ });
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");




/**
 * <md>CubeLang
 */

/**
 * <mds>**需要new CubeLang实例，在实例中设置i18n map，id并调用实例中的$t、$tr、$tk方法进行翻译**
 */

;
var CubeLangClient = /*#__PURE__*/function () {
  function CubeLangClient(i18nMap, getLangId) {
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CubeLangClient);
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "_getLangId", function () {
      return null;
    });
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, "_i18nMap", {});
    this._i18nMap = i18nMap;
    this._getLangId = getLangId;
  }
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(CubeLangClient, [{
    key: "langId",
    value: function langId() {
      return this._getLangId() || 'zh_TW';
    }
  }, {
    key: "i18nMap",
    value: function i18nMap() {
      var maps = this._i18nMap || {};
      return maps[this.langId()] || {};
    }
  }, {
    key: "$t",
    value: function $t(key) {
      var res = this.i18nMap()[key];
      if (res) {
        for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          values[_key - 1] = arguments[_key];
        }
        for (var i = 0; i < values.length; i++) {
          res = res.replace(new RegExp("\\{".concat(i, "\\}")), !values[i] && values[i] !== 0 ? '' : values[i]);
        }
        ;
      } else {
        console.log("<!== CubeLang ==>\u591A\u8BED\u8A00\u9519\u8BEF: \u627E\u4E0D\u5230key:\"".concat(String(key), "\"\u5BF9\u5E94\u7684\u503C"));
        res = key || '';
      }
      ;
      res = res.replace(/\{\d+\}/g, '');
      return res;
    }
  }, {
    key: "$tr",
    value: function $tr(key) {
      var _this = this;
      var res = '';
      for (var _len2 = arguments.length, valueKeys = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        valueKeys[_key2 - 1] = arguments[_key2];
      }
      var vals = valueKeys.map(function (key) {
        return _this.$t(key);
      });
      res = this.$t.apply(this, [key].concat((0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_3__["default"])(vals)));
      return res;
    }
  }, {
    key: "$tk",
    value: function $tk(key) {
      var _this2 = this;
      var res = '';
      for (var _len3 = arguments.length, keys = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        keys[_key3 - 1] = arguments[_key3];
      }
      keys.reverse().forEach(function (k) {
        return res = _this2.$t(k, res);
      });
      res = this.$t(key, res);
      return res;
    }
  }, {
    key: "set",
    value: /** 设置翻译、获取langId的方法 */
    function set(config) {
      if (config.i18nMap) {
        this._i18nMap = config.i18nMap;
      }
      ;
      if (config.getLangId) {
        this._getLangId = config.getLangId;
      }
      ;
      return this;
    }
  }, {
    key: "get",
    value:
    /**
     * 获取当前lang map或者lang id
     */
    function get(key) {
      if (key == 'LANGID') {
        return this.langId();
      } else if (key == 'I18NMAP') {
        return this.i18nMap();
      } else {
        return null;
      }
      ;
    }
  }]);
  return CubeLangClient;
}();

/***/ }),

/***/ "./src/clients/GlobalDataClient.ts":
/*!*****************************************!*\
  !*** ./src/clients/GlobalDataClient.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalDataClient": function() { return /* binding */ GlobalDataClient; }
/* harmony export */ });
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _utils_CommonUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/CommonUtil */ "./src/utils/CommonUtil.ts");




var GlobalDataClient = /*#__PURE__*/function () {
  function GlobalDataClient() {
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, GlobalDataClient);
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "keyPrefix", 'global_data_');
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, "store", null);
  }
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(GlobalDataClient, [{
    key: "vuexKey",
    value: function vuexKey(name) {
      return "set".concat(name.charAt(0).toUpperCase() + name.slice(1));
    }
  }, {
    key: "vuexCommit",
    value: function vuexCommit(name, value) {
      if (this.store) {
        this.store.commit(this.vuexKey(name), value);
      }
      ;
    }
  }, {
    key: "storageKey",
    value: function storageKey(key) {
      return this.keyPrefix + key;
    }
  }, {
    key: "storage",
    value: function storage(type) {
      return type == 'sessionStorage' ? sessionStorage : localStorage;
    }
  }, {
    key: "storageGet",
    value: function storageGet(storageType, name) {
      var item = null;
      if (storageType) {
        var str = this.storage(storageType).getItem(this.storageKey(name));
        try {
          item = JSON.parse(str);
        } catch (error) {
          console.log('<!-- GlobalData从Storage获取数据失败, ' + error.message + ' -->');
        }
        ;
      }
      ;
      return item;
    }
  }, {
    key: "storageSet",
    value: function storageSet(storageType, name, data) {
      if (storageType) {
        try {
          this.storage(storageType).setItem(this.storageKey(name), JSON.stringify(data));
        } catch (error) {
          console.log('<!-- GlobalData保存数据到Storage失败, ' + error.message + ' -->');
        }
        ;
      }
      ;
    }
  }, {
    key: "storageDel",
    value: function storageDel(storageType, name) {
      if (storageType) {
        try {
          this.storage(storageType).removeItem(this.storageKey(name));
        } catch (error) {
          console.log('<!-- GlobalData从Storage删除数据失败, ' + error.message + ' -->');
        }
        ;
      }
      ;
    }
  }, {
    key: "setStore",
    value: function setStore(value) {
      var _this = this;
      if (value && !this.store) {
        this.store = value;
        var reg = new RegExp('^' + this.keyPrefix);
        if (_utils_CommonUtil__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.isVue) {
          var storages = ['localStorage', 'sessionStorage'];
          storages.forEach(function (type) {
            for (var i = 0; i < _this.storage(type).length; i++) {
              var k = _this.storage(type).key(i);
              if (reg.test(k)) {
                var key = k.replace(reg, '');
                var val = _this.storageGet(type, key);
                _this.vuexCommit(key, val);
              }
              ;
            }
            ;
          });
        } else {
          _utils_CommonUtil__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.taro.getStorageInfoSync().keys.forEach(function (k) {
            if (reg.test(k)) {
              var key = k.replace(reg, '');
              var val = _utils_CommonUtil__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.taro.getStorageSync(k);
              _this.vuexCommit(key, val);
            }
            ;
          });
        }
        ;
      }
      ;
    }
  }, {
    key: "get",
    value: function get(key, storageType) {
      var res = null;
      if (this.store) {
        res = this.store.state[key];
      }
      ;
      if (res === null && storageType) {
        if (_utils_CommonUtil__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.isVue) {
          res = this.storageGet(storageType, key);
        } else {
          res = _utils_CommonUtil__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.taro.getStorageSync(this.storageKey(key));
        }
        ;
      }
      ;
      return res;
    }
  }, {
    key: "set",
    value: function set(key, data, storageType) {
      this.vuexCommit(key, data);
      if (storageType) {
        if (_utils_CommonUtil__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.isVue) {
          this.storageSet(storageType, key, data);
        } else {
          _utils_CommonUtil__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.taro.setStorageSync(this.storageKey(key), data);
        }
        ;
      }
      ;
    }
  }, {
    key: "del",
    value: function del(key, storageType) {
      this.vuexCommit(key, null);
      if (storageType) {
        if (_utils_CommonUtil__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.isVue) {
          this.storageDel(storageType, key);
        } else {
          _utils_CommonUtil__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.taro.removeStorageSync(this.storageKey(key));
        }
        ;
      }
      ;
    }
  }]);
  return GlobalDataClient;
}();

/***/ }),

/***/ "./src/clients/TaroHttpClient.ts":
/*!***************************************!*\
  !*** ./src/clients/TaroHttpClient.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TaroHttpClient": function() { return /* binding */ TaroHttpClient; }
/* harmony export */ });
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/taro */ "webpack/container/remote/@tarojs/taro");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_0__);




var TaroHttpClient = /*#__PURE__*/function () {
  function TaroHttpClient() {
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TaroHttpClient);
  }
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__["default"])(TaroHttpClient, [{
    key: "getRequest",
    value: function getRequest(url, data, header) {
      return new Promise(function (resolve, fail) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
          method: 'GET',
          url: url,
          data: data,
          header: header,
          success: function success(res) {
            return resolve(res.data);
          },
          fail: fail
        });
      });
    }
  }, {
    key: "postRequest",
    value: function postRequest(url, data, header, _onUploadProgress, responseType) {
      return new Promise(function (resolve, fail) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
          method: 'POST',
          url: url,
          data: data,
          header: header,
          success: function success(res) {
            return resolve(res.data);
          },
          fail: fail,
          responseType: responseType
        });
      });
    }
  }, {
    key: "putRequest",
    value: function putRequest(url, data, header) {
      return new Promise(function (resolve, fail) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
          method: 'PUT',
          url: url,
          data: data,
          header: header,
          success: function success(res) {
            return resolve(res.data);
          },
          fail: fail
        });
      });
    }
  }, {
    key: "deleteRequest",
    value: function deleteRequest(url, data, header) {
      return new Promise(function (resolve, fail) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
          method: 'DELETE',
          url: url,
          data: data,
          header: header,
          success: function success(res) {
            return resolve(res.data);
          },
          fail: fail
        });
      });
    }
  }, {
    key: "uploadFileRequest",
    value: function uploadFileRequest(url, params, headers) {
      return new Promise(function (success) {
        success({
          url: url,
          params: params,
          headers: headers
        });
      });
    }
  }, {
    key: "upload",
    value: function upload(url, params, header, filePath, name) {
      return new Promise(function (resolve, fail) {
        var formData = new FormData();
        if (params && (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_typeof_js__WEBPACK_IMPORTED_MODULE_3__["default"])(params) == 'object') {
          for (var key in params) {
            formData.append(key, params[key]);
          }
        }
        ;
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().uploadFile({
          url: url,
          formData: formData,
          header: header,
          filePath: filePath,
          name: name,
          success: function success(res) {
            return resolve(res.data);
          },
          fail: fail
        });
      });
    }
  }, {
    key: "request",
    value: function request(method, url, data, header) {
      return new Promise(function (resolve, fail) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_0___default().request({
          method: method,
          url: url,
          data: data,
          header: header,
          success: function success(res) {
            return resolve(res.data);
          },
          fail: fail
        });
      });
    }
  }]);
  return TaroHttpClient;
}();

/***/ }),

/***/ "./src/i18n/I18nMap.ts":
/*!*****************************!*\
  !*** ./src/i18n/I18nMap.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I18nMap": function() { return /* binding */ I18nMap; }
/* harmony export */ });
var map_zh_TW = {
  "test": "測試",
  "login": "登錄",
  "back": "返回",
  "username": "用戶名",
  "password": "密碼",
  "toggle": "切換{0}",
  "language": "語言"
};
var map_zh_CN = {
  "test": "测试",
  "login": "登录",
  "back": "返回",
  "username": "用户名",
  "password": "密码",
  "toggle": "切换{0}",
  "language": "语言"
};
var map_en_US = {
  "test": "測試",
  "login": "登錄",
  "back": "返回",
  "username": "用戶名",
  "password": "密碼",
  "toggle": "切換{0}",
  "language": "語言"
};
var I18nMap = {
  zh_TW: map_zh_TW,
  zh_CN: map_zh_CN,
  en_US: map_en_US
};

/***/ }),

/***/ "./src/plugins/AllPlugins.ts":
/*!***********************************!*\
  !*** ./src/plugins/AllPlugins.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _GlobalData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GlobalData */ "./src/plugins/GlobalData.ts");
/* harmony import */ var _CubeAuth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CubeAuth */ "./src/plugins/CubeAuth.ts");
/* harmony import */ var _CubeLang__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CubeLang */ "./src/plugins/CubeLang.ts");



/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(app) {
    app.use(_GlobalData__WEBPACK_IMPORTED_MODULE_0__["default"]).use(_CubeAuth__WEBPACK_IMPORTED_MODULE_1__["default"]).use(_CubeLang__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }
});

/***/ }),

/***/ "./src/plugins/CubeAuth.ts":
/*!*********************************!*\
  !*** ./src/plugins/CubeAuth.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* unused harmony export CubeAuthInstance */
/* harmony import */ var _clients_CubeAuthClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/clients/CubeAuthClient */ "./src/clients/CubeAuthClient.ts");
/* harmony import */ var cube_common_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cube-common-lib */ "webpack/container/remote/cube-common-lib");
/* harmony import */ var cube_common_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cube_common_lib__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _GlobalData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GlobalData */ "./src/plugins/GlobalData.ts");



;
var CubeAuthInstance = new _clients_CubeAuthClient__WEBPACK_IMPORTED_MODULE_0__.CubeAuthClient({
  name: 'test',
  tokenKey: 'token',
  globalData: _GlobalData__WEBPACK_IMPORTED_MODULE_2__.GlobalDataInstance,
  onSaveToken: function onSaveToken(token) {
    cube_common_lib__WEBPACK_IMPORTED_MODULE_1__.NetworkUtil.setAccessToken(token.accessToken);
  }
});
/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(app) {
    app.config.globalProperties.$auth = CubeAuthInstance;
    CubeAuthInstance.init();
  }
});

/***/ }),

/***/ "./src/plugins/CubeLang.ts":
/*!*********************************!*\
  !*** ./src/plugins/CubeLang.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _clients_CubeLangClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/clients/CubeLangClient */ "./src/clients/CubeLangClient.ts");
/* harmony import */ var _i18n_I18nMap__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/i18n/I18nMap */ "./src/i18n/I18nMap.ts");
/* harmony import */ var _GlobalData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GlobalData */ "./src/plugins/GlobalData.ts");



;
/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(app) {
    var lang = new _clients_CubeLangClient__WEBPACK_IMPORTED_MODULE_2__.CubeLangClient(_i18n_I18nMap__WEBPACK_IMPORTED_MODULE_0__.I18nMap, function () {
      return _GlobalData__WEBPACK_IMPORTED_MODULE_1__.GlobalDataInstance.get('langId', 'localStorage');
    });
    app.config.globalProperties.$t = lang.$t.bind(lang);
    app.config.globalProperties.$tr = lang.$tr.bind(lang);
    app.config.globalProperties.$tk = lang.$tk.bind(lang);
  }
});

/***/ }),

/***/ "./src/plugins/GlobalData.ts":
/*!***********************************!*\
  !*** ./src/plugins/GlobalData.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GlobalDataInstance": function() { return /* binding */ GlobalDataInstance; }
/* harmony export */ });
/* harmony import */ var _clients_GlobalDataClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/clients/GlobalDataClient */ "./src/clients/GlobalDataClient.ts");

;
var GlobalDataInstance = new _clients_GlobalDataClient__WEBPACK_IMPORTED_MODULE_0__.GlobalDataClient();
/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install(app) {
    app.config.globalProperties.$globalData = GlobalDataInstance;
  }
});

/***/ }),

/***/ "./src/plugins/RequestConfig.ts":
/*!**************************************!*\
  !*** ./src/plugins/RequestConfig.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RequestConfig": function() { return /* binding */ RequestConfig; }
/* harmony export */ });
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass.js */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _utils_CommonUtil__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/CommonUtil */ "./src/utils/CommonUtil.ts");
/* harmony import */ var cube_common_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! cube-common-lib */ "webpack/container/remote/cube-common-lib");
/* harmony import */ var cube_common_lib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(cube_common_lib__WEBPACK_IMPORTED_MODULE_1__);




var RequestConfig = /*#__PURE__*/function () {
  function RequestConfig() {
    (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this, RequestConfig);
  }
  (0,E_taro_test_3_16_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_3__["default"])(RequestConfig, null, [{
    key: "set",
    value: function set(client) {
      cube_common_lib__WEBPACK_IMPORTED_MODULE_1__.NetworkUtil.setConfig({
        httpRequestService: client,
        basicUrl: 'http://192.168.1.214:9080'
      });
      cube_common_lib__WEBPACK_IMPORTED_MODULE_1__.CubePontBasicRequest.setConfig({
        log: false,
        isSuccess: function isSuccess(res) {
          return res.__abp && res.success;
        },
        processResponseCallback: function processResponseCallback(res) {
          return res.result;
        },
        errCallback: function errCallback(message) {
          _utils_CommonUtil__WEBPACK_IMPORTED_MODULE_0__.CommonUtil.showToast(message);
        }
      });
    }
  }]);
  return RequestConfig;
}();

/***/ }),

/***/ "./src/plugins/TaroRequest.ts":
/*!************************************!*\
  !*** ./src/plugins/TaroRequest.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var _clients_TaroHttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/clients/TaroHttpClient */ "./src/clients/TaroHttpClient.ts");
/* harmony import */ var _RequestConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RequestConfig */ "./src/plugins/RequestConfig.ts");


/* harmony default export */ __webpack_exports__["default"] = ({
  install: function install() {
    _RequestConfig__WEBPACK_IMPORTED_MODULE_1__.RequestConfig.set(new _clients_TaroHttpClient__WEBPACK_IMPORTED_MODULE_0__.TaroHttpClient());
  }
});

/***/ }),

/***/ "./src/store/index.ts":
/*!****************************!*\
  !*** ./src/store/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "webpack/container/remote/vuex");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = ((0,vuex__WEBPACK_IMPORTED_MODULE_0__.createStore)({
  state: {
    langId: null,
    token: null
  },
  mutations: {
    setLangId: function setLangId(state, langId) {
      state.langId = langId;
    },
    setToken: function setToken(state, token) {
      state.token = token;
    }
  },
  actions: {},
  modules: {}
}));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors","lib"], function() { return __webpack_exec__("./src/app.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);;;
//# sourceMappingURL=app.js.map