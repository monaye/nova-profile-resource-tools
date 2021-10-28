/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(12);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

Nova.booting(function (Vue, router, store) {
  Vue.component('nova-profile-information-tools', __webpack_require__(3));
  Vue.component('nova-password-tools', __webpack_require__(6));
  Vue.component('nova-delete-account-tools', __webpack_require__(9));
});

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(4)
/* template */
var __vue_template__ = __webpack_require__(5)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/UpdateProfileInformationForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f17af58a", Component.options)
  } else {
    hotAPI.reload("data-v-f17af58a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["panel"],
  data: function data() {
    return {
      errors: {
        name: [],
        email: []
      },
      loading: false,
      name: this.panel.fields[0].name,
      email: this.panel.fields[0].email
    };
  },

  computed: {},
  mounted: function mounted() {
    console.log("mounting update profile info", this.panel);
  },


  methods: {
    formHasError: function formHasError() {
      return !this.hasCorrentEmailFormat() || !this.email || !this.name;
    },
    hasCorrentEmailFormat: function hasCorrentEmailFormat() {
      return (/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email)
      );
    },

    hasError: function hasError(name) {
      if (name) {
        return this.errors[name] && this.errors[name].length;
      }

      return this.errors.name && this.errors.name.length && this.errors.email && this.errors.email.length;
    },
    onSubmitForm: function onSubmitForm() {
      this.updateProfileInformation();
    },
    resetErrorMessage: function resetErrorMessage(key) {
      this.errors[key] = [];
    },
    resetNameErrorMessage: function resetNameErrorMessage() {
      console.log("resetting name");
      this.resetErrorMessage("name");
    },
    resetEmailErrorMessage: function resetEmailErrorMessage() {
      this.resetErrorMessage("email");
    },
    updateProfileInformation: function updateProfileInformation() {
      var _this = this;

      if (!this.name) {
        this.errors.name = [Nova.app.__("Name is required.")];
      }
      if (!this.email) {
        this.errors.email = [Nova.app.__("Email is required.")];
      } else if (!this.hasCorrentEmailFormat()) {
        console.log("has corrent email", this.hasCorrentEmailFormat());
        this.errors.email = [Nova.app.__("Please enter corrent email format.")];
      }

      if (this.formHasError()) {
        return;
      }

      this.loading = true;
      Nova.request().post("/nova-vendor/nova-profile-resource-tools/information", {
        name: this.name,
        email: this.email
      }).then(function (response) {
        console.log("success");
        console.log(response);
        _this.loading = false;
        _this.$toasted.success(response.data.message);
      }).catch(function (error) {
        console.log("error on update card", error);
        _this.loading = false;

        if (error.response.data.errors) {
          _this.errors = error.response.data.errors;
          return;
        }
        _this.$toasted.error(Nova.app.__("保存中にエラーが発生いたしました。ページを一度閉じてやり直してください。"));
      });
    }
  }
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "md:grid md:grid-cols-3 md:gap-6" },
      [
        _c("div", { staticClass: "md:col-span-1 flex justify-between" }, [
          _c("div", { staticClass: "px-4 sm:px-0" }, [
            _c("h3", { staticClass: "text-lg font-medium text-gray-900" }, [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.__("Profile Information")) +
                  "\n        "
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mt-1 text-sm text-gray-600" }, [
              _vm._v(
                "\n          " +
                  _vm._s(
                    _vm.__(
                      "Update your account's profile information and email address."
                    )
                  ) +
                  "\n        "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "px-4 sm:px-0" })
        ]),
        _vm._v(" "),
        _c(
          "loading-card",
          { staticClass: "md:col-span-2", attrs: { loading: _vm.loading } },
          [
            _c("div", { staticClass: "mt-5 md:mt-0 md:col-span-2" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.onSubmitForm.apply(null, arguments)
                    }
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "\n              px-4\n              py-5\n              bg-white\n              sm:p-6\n              shadow\n              sm:rounded-tl-md sm:rounded-tr-md\n            "
                    },
                    [
                      _c("div", { staticClass: "grid grid-cols-6 gap-6" }, [
                        _c("div", { staticClass: "col-span-6 sm:col-span-4" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "block font-medium text-sm text-gray-700",
                              attrs: { for: "name" }
                            },
                            [_c("span", [_vm._v(_vm._s(_vm.__("Name")))])]
                          ),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.name,
                                expression: "name"
                              }
                            ],
                            staticClass:
                              "\n                    border-gray-300\n                    focus:border-indigo-300\n                    focus:ring focus:ring-indigo-200 focus:ring-opacity-50\n                    rounded-md\n                    shadow-sm\n                    mt-1\n                    block\n                    w-full\n                  ",
                            attrs: { id: "name", type: "text" },
                            domProps: { value: _vm.name },
                            on: {
                              keyup: _vm.resetNameErrorMessage,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.name = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.hasError("name")
                            ? _c("div", { staticClass: "mt-2" }, [
                                _c(
                                  "p",
                                  { staticClass: "text-sm text-red-600" },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(_vm.errors.name[0]) +
                                        "\n                  "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-span-6 sm:col-span-4" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "block font-medium text-sm text-gray-700",
                              attrs: { for: "email" }
                            },
                            [_c("span", [_vm._v(_vm._s(_vm.__("Email")))])]
                          ),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.email,
                                expression: "email"
                              }
                            ],
                            staticClass:
                              "\n                    border-gray-300\n                    focus:border-indigo-300\n                    focus:ring focus:ring-indigo-200 focus:ring-opacity-50\n                    rounded-md\n                    shadow-sm\n                    mt-1\n                    block\n                    w-full\n                  ",
                            attrs: { id: "email", type: "email" },
                            domProps: { value: _vm.email },
                            on: {
                              keyup: _vm.resetEmailErrorMessage,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.email = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.hasError("email")
                            ? _c("div", { staticClass: "mt-2" }, [
                                _c(
                                  "p",
                                  { staticClass: "text-sm text-red-600" },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(_vm.errors.email[0]) +
                                        "\n                  "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e()
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "\n              flex\n              items-center\n              justify-end\n              px-4\n              py-3\n              bg-gray-50\n              text-right\n              sm:px-6\n              shadow\n              sm:rounded-bl-md sm:rounded-br-md\n            "
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "\n                inline-flex\n                items-center\n                px-4\n                py-2\n                bg-gray-800\n                border border-transparent\n                rounded-md\n                font-semibold\n                text-xs text-white\n                uppercase\n                tracking-widest\n                hover:bg-gray-700\n                active:bg-gray-900\n                focus:outline-none\n                focus:border-gray-900\n                focus:ring focus:ring-gray-300\n                disabled:opacity-25\n                transition\n              ",
                          attrs: { type: "submit" }
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.__("Save")) +
                              "\n            "
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hidden sm:block" }, [
      _c("div", { staticClass: "py-8" }, [
        _c("div", { staticClass: "border-t border-gray-200" })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f17af58a", module.exports)
  }
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(7)
/* template */
var __vue_template__ = __webpack_require__(8)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/UpdatePasswordForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-12f5d9da", Component.options)
  } else {
    hotAPI.reload("data-v-12f5d9da", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["panel"],
  data: function data() {
    return {
      loading: false,
      errors: {
        password: [],
        current_password: [],
        password_confirmation: []
      },
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    };
  },

  computed: {},
  mounted: function mounted() {
    console.log("mounting update profile info", this.panel);
  },


  methods: {
    hasError: function hasError(name) {
      if (name) {
        console.log("has error", name, this.errors[name]);
        return this.errors[name] && this.errors[name].length;
      }

      return this.errors.password && this.errors.password.length && this.errors.current_password && this.errors.current_password.length && this.errors.password_confirmation && this.errors.password_confirmation.length;
    },

    onSubmitForm: function onSubmitForm() {
      this.updatePassword();
    },
    resetNewPasswordErrorMessage: function resetNewPasswordErrorMessage() {
      this.resetErrorMessage("password");
    },
    resetCurrentPasswordErrorMessage: function resetCurrentPasswordErrorMessage() {
      this.resetErrorMessage("current_password");
    },
    resetConfirmPasswordErrorMessage: function resetConfirmPasswordErrorMessage() {
      this.resetErrorMessage("password_confirmation");
    },
    resetErrorMessage: function resetErrorMessage(key) {
      this.errors[key] = [];
    },
    updatePassword: function updatePassword() {
      var _this = this;

      // since we are disabling the button this shouldn't happen

      if (!this.newPassword) {
        this.errors.password = [Nova.app.__("The password field is required.")];
      }
      if (!this.currentPassword) {
        this.errors.current_password = [Nova.app.__("The current password field is required.")];
      }

      if (!this.confirmPassword) {
        this.errors.password_confirmation = [Nova.app.__("Please confirm your password.")];
      }

      console.log("has error", this.hasError());
      if (this.hasError()) {
        // this.$forceUpdate();
        return;
      }

      if (this.newPassword !== this.confirmPassword) {
        this.confirmPasswordErrorMessage = __(Nova.app.__("New password and confirm password doesn't match. Please check your new password again."));
        return;
      }

      this.loading = true;

      Nova.request().post("/nova-vendor/nova-profile-resource-tools/password", {
        current_password: this.currentPassword,
        password: this.newPassword,
        password_confirmation: this.confirmPassword
      }).then(function (response) {
        console.log("success");
        console.log(response);
        _this.loading = false;

        _this.$toasted.success(response.data.message);
      }).catch(function (error) {
        console.log("error on update card", error.response.data.errors);
        _this.loading = false;

        if (error.response.data.errors) {
          _this.errors = error.response.data.errors;
          return;
        }

        _this.$toasted.error(Nova.app.__("保存中にエラーが発生いたしました。ページを一度閉じてやり直してください。"));
      });
    }
  }
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { staticClass: "md:grid md:grid-cols-3 md:gap-6" },
      [
        _c("div", { staticClass: "md:col-span-1 flex justify-between" }, [
          _c("div", { staticClass: "px-4 sm:px-0" }, [
            _c("h3", { staticClass: "text-lg font-medium text-gray-900" }, [
              _vm._v(
                "\n          " +
                  _vm._s(_vm.__("Update Password")) +
                  "\n        "
              )
            ]),
            _vm._v(" "),
            _c("p", { staticClass: "mt-1 text-sm text-gray-600" }, [
              _vm._v(
                "\n          " +
                  _vm._s(
                    _vm.__(
                      "Ensure your account is using a long, random password to stay secure."
                    )
                  ) +
                  "\n        "
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "px-4 sm:px-0" })
        ]),
        _vm._v(" "),
        _c(
          "loading-card",
          { staticClass: "md:col-span-2", attrs: { loading: _vm.loading } },
          [
            _c("div", { staticClass: "mt-5 md:mt-0 md:col-span-2" }, [
              _c(
                "form",
                {
                  on: {
                    submit: function($event) {
                      $event.preventDefault()
                      return _vm.onSubmitForm.apply(null, arguments)
                    }
                  }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass:
                        "\n              px-4\n              py-5\n              bg-white\n              sm:p-6\n              shadow\n              sm:rounded-tl-md sm:rounded-tr-md\n            "
                    },
                    [
                      _c("div", { staticClass: "grid grid-cols-6 gap-6" }, [
                        _c("div", { staticClass: "col-span-6 sm:col-span-4" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "block font-medium text-sm text-gray-700",
                              attrs: { for: "current_password" }
                            },
                            [
                              _c("span", [
                                _vm._v(_vm._s(_vm.__("Current Password")))
                              ])
                            ]
                          ),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.currentPassword,
                                expression: "currentPassword"
                              }
                            ],
                            staticClass:
                              "\n                    border-gray-300\n                    focus:border-indigo-300\n                    focus:ring focus:ring-indigo-200 focus:ring-opacity-50\n                    rounded-md\n                    shadow-sm\n                    mt-1\n                    block\n                    w-full\n                  ",
                            attrs: { id: "current_password", type: "password" },
                            domProps: { value: _vm.currentPassword },
                            on: {
                              keyup: _vm.resetCurrentPasswordErrorMessage,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.currentPassword = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.hasError("current_password")
                            ? _c("div", { staticClass: "mt-2" }, [
                                _c(
                                  "p",
                                  { staticClass: "text-sm text-red-600" },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(_vm.errors.current_password[0]) +
                                        "\n                  "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-span-6 sm:col-span-4" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "block font-medium text-sm text-gray-700",
                              attrs: { for: "password" }
                            },
                            [
                              _c("span", [
                                _vm._v(_vm._s(_vm.__("New Password")))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newPassword,
                                expression: "newPassword"
                              }
                            ],
                            staticClass:
                              "\n                    border-gray-300\n                    focus:border-indigo-300\n                    focus:ring focus:ring-indigo-200 focus:ring-opacity-50\n                    rounded-md\n                    shadow-sm\n                    mt-1\n                    block\n                    w-full\n                  ",
                            attrs: { id: "password", type: "password" },
                            domProps: { value: _vm.newPassword },
                            on: {
                              keyup: _vm.resetNewPasswordErrorMessage,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.newPassword = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.hasError("password")
                            ? _c("div", { staticClass: "mt-2" }, [
                                _c(
                                  "p",
                                  { staticClass: "text-sm text-red-600" },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(_vm.errors.password[0]) +
                                        "\n                  "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-span-6 sm:col-span-4" }, [
                          _c(
                            "label",
                            {
                              staticClass:
                                "block font-medium text-sm text-gray-700",
                              attrs: { for: "confirm_password" }
                            },
                            [
                              _c("span", [
                                _vm._v(_vm._s(_vm.__("Confirm Password")))
                              ])
                            ]
                          ),
                          _vm._v(" "),
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.confirmPassword,
                                expression: "confirmPassword"
                              }
                            ],
                            staticClass:
                              "\n                    border-gray-300\n                    focus:border-indigo-300\n                    focus:ring focus:ring-indigo-200 focus:ring-opacity-50\n                    rounded-md\n                    shadow-sm\n                    mt-1\n                    block\n                    w-full\n                  ",
                            attrs: { id: "confirm_password", type: "password" },
                            domProps: { value: _vm.confirmPassword },
                            on: {
                              keyup: _vm.resetConfirmPasswordErrorMessage,
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.confirmPassword = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _vm.hasError("password_confirmation")
                            ? _c("div", { staticClass: "mt-2" }, [
                                _c(
                                  "p",
                                  { staticClass: "text-sm text-red-600" },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(
                                          _vm.errors.password_confirmation[0]
                                        ) +
                                        "\n                  "
                                    )
                                  ]
                                )
                              ])
                            : _vm._e()
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass:
                        "\n              flex\n              items-center\n              justify-end\n              px-4\n              py-3\n              bg-gray-50\n              text-right\n              sm:px-6\n              shadow\n              sm:rounded-bl-md sm:rounded-br-md\n            "
                    },
                    [
                      _c(
                        "button",
                        {
                          staticClass:
                            "\n                inline-flex\n                items-center\n                px-4\n                py-2\n                bg-gray-800\n                border border-transparent\n                rounded-md\n                font-semibold\n                text-xs text-white\n                uppercase\n                tracking-widest\n                hover:bg-gray-700\n                active:bg-gray-900\n                focus:outline-none\n                focus:border-gray-900\n                focus:ring focus:ring-gray-300\n                disabled:opacity-25\n                transition\n              ",
                          attrs: { type: "submit" }
                        },
                        [
                          _vm._v(
                            "\n              " +
                              _vm._s(_vm.__("Save")) +
                              "\n            "
                          )
                        ]
                      )
                    ]
                  )
                ]
              )
            ])
          ]
        )
      ],
      1
    ),
    _vm._v(" "),
    _vm._m(0)
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "hidden sm:block" }, [
      _c("div", { staticClass: "py-8" }, [
        _c("div", { staticClass: "border-t border-gray-200" })
      ])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-12f5d9da", module.exports)
  }
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(10)
/* template */
var __vue_template__ = __webpack_require__(11)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/DeleteAccount.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2a2240a7", Component.options)
  } else {
    hotAPI.reload("data-v-2a2240a7", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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

/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["resourceName", "resourceId", "panel"],
  data: function data() {
    return {
      confirmingUserDeletion: false,
      password: null,
      errors: {
        password: []
      }
    };
  },
  mounted: function mounted() {
    console.log("delete account mounted");
  },

  methods: {
    showConfirmUserDeletion: function showConfirmUserDeletion() {
      var _this = this;

      console.log("show confirm user deletion");
      this.confirmingUserDeletion = true;
      setTimeout(function () {
        return _this.$refs.password.focus();
      }, 250);
    },
    closeModal: function closeModal() {
      this.confirmingUserDeletion = false;
    },
    performDeleteAccount: function performDeleteAccount() {
      var _this2 = this;

      Nova.request().post("/nova-vendor/nova-profile-resource-tools/delete-account", {
        password: this.password
      }).then(function (response) {
        console.log("performing delete account", response);
        _this2.confirmingUserDeletion = false;
        // Simulate an HTTP redirect:
        window.location.replace(_this2.panel.fields[0].app_url);
      }).catch(function (error) {
        //   this.confirmingUserDeletion = false;
        if (error.response.data.errors) {
          _this2.errors = error.response.data.errors;
          return;
        }
        _this2.$toasted.error(Nova.app.__("保存中にエラーが発生いたしました。ページを一度閉じてやり直してください。"));
      });
    }
  }
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "md:grid md:grid-cols-3 md:gap-6 mt-10 sm:mt-0" },
    [
      _c("div", { staticClass: "md:col-span-1 flex justify-between" }, [
        _c("div", { staticClass: "px-4 sm:px-0" }, [
          _c("h3", { staticClass: "text-lg font-medium text-gray-900" }, [
            _vm._v("\n        " + _vm._s(_vm.__("Delete Account")) + "\n      ")
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "mt-1 text-sm text-gray-600" }, [
            _vm._v(
              "\n        " +
                _vm._s(_vm.__("Permanently delete your account.")) +
                "\n      "
            )
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "px-4 sm:px-0" })
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mt-5 md:mt-0 md:col-span-2" }, [
        _c(
          "div",
          { staticClass: "px-4 py-5 sm:p-6 bg-white shadow sm:rounded-lg" },
          [
            _c("div", { staticClass: "max-w-xl text-sm text-gray-600" }, [
              _vm._v(
                "\n        " +
                  _vm._s(
                    _vm.__(
                      "Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain."
                    )
                  ) +
                  "\n      "
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "mt-5" }, [
              _c(
                "button",
                {
                  staticClass:
                    "\n            inline-flex\n            items-center\n            justify-center\n            px-4\n            py-2\n            bg-red-600\n            border border-transparent\n            rounded-md\n            font-semibold\n            text-xs text-white\n            uppercase\n            tracking-widest\n            hover:bg-red-500\n            focus:outline-none\n            focus:border-red-700\n            focus:ring focus:ring-red-200\n            active:bg-red-600\n            disabled:opacity-25\n            transition\n          ",
                  attrs: { type: "button" },
                  on: { click: _vm.showConfirmUserDeletion }
                },
                [
                  _vm._v(
                    "\n          " +
                      _vm._s(_vm.__("Delete Account")) +
                      "\n        "
                  )
                ]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.confirmingUserDeletion,
                    expression: "confirmingUserDeletion"
                  }
                ],
                staticClass:
                  "fixed inset-0 overflow-y-auto px-4 py-6 sm:px-0 z-50",
                attrs: { "scroll-region": "" }
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "\n            mb-6\n            bg-white\n            rounded-lg\n            overflow-hidden\n            shadow-xl\n            transform\n            transition-all\n            sm:w-full\n            sm:mx-auto\n            sm:max-w-2xl\n          "
                  },
                  [
                    _c("div", { staticClass: "px-6 py-4" }, [
                      _c("div", { staticClass: "text-lg" }, [
                        _vm._v(_vm._s(_vm.__("Delete Account")))
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-4" }, [
                        _vm._v(
                          "\n              " +
                            _vm._s(
                              _vm.__(
                                "Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account."
                              )
                            ) +
                            "\n              "
                        ),
                        _c("div", { staticClass: "mt-4" }, [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.password,
                                expression: "password"
                              }
                            ],
                            ref: "password",
                            staticClass:
                              "\n                    border-gray-300\n                    focus:border-indigo-300\n                    focus:ring focus:ring-indigo-200 focus:ring-opacity-50\n                    rounded-md\n                    shadow-sm\n                    mt-1\n                    block\n                    w-3/4\n                  ",
                            staticStyle: {
                              "background-image":
                                "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAACIUlEQVQ4EX2TOYhTURSG87IMihDsjGghBhFBmHFDHLWwSqcikk4RRKJgk0KL7C8bMpWpZtIqNkEUl1ZCgs0wOo0SxiLMDApWlgOPrH7/5b2QkYwX7jvn/uc//zl3edZ4PPbNGvF4fC4ajR5VrNvt/mo0Gr1ZPOtfgWw2e9Lv9+chX7cs64CS4Oxg3o9GI7tUKv0Q5o1dAiTfCgQCLwnOkfQOu+oSLyJ2A783HA7vIPLGxX0TgVwud4HKn0nc7Pf7N6vV6oZHkkX8FPG3uMfgXC0Wi2vCg/poUKGGcagQI3k7k8mcp5slcGswGDwpl8tfwGJg3xB6Dvey8vz6oH4C3iXcFYjbwiDeo1KafafkC3NjK7iL5ESFGQEUF7Sg+ifZdDp9GnMF/KGmfBdT2HCwZ7TwtrBPC7rQaav6Iv48rqZwg+F+p8hOMBj0IbxfMdMBrW5pAVGV/ztINByENkU0t5BIJEKRSOQ3Aj+Z57iFs1R5NK3EQS6HQqF1zmQdzpFWq3W42WwOTAf1er1PF2USFlC+qxMvFAr3HcexWX+QX6lUvsKpkTyPSEXJkw6MQ4S38Ljdbi8rmM/nY+CvgNcQqdH6U/xrYK9t244jZv6ByUOSiDdIfgBZ12U6dHEHu9TpdIr8F0OP692CtzaW/a6y3y0Wx5kbFHvGuXzkgf0xhKnPzA4UTyaTB8Ph8AvcHi3fnsrZ7Wore02YViqVOrRXXPhfqP8j6MYlawoAAAAASUVORK5CYII=')",
                              "background-repeat": "no-repeat",
                              "background-attachment": "scroll",
                              "background-size": "16px 18px",
                              "background-position": "98% 50%"
                            },
                            attrs: {
                              type: "password",
                              placeholder: "パスワード"
                            },
                            domProps: { value: _vm.password },
                            on: {
                              input: function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.password = $event.target.value
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.password,
                                  expression: "errors.password"
                                }
                              ],
                              staticClass: "mt-2"
                            },
                            [
                              _c("p", { staticClass: "text-sm text-red-600" }, [
                                _vm._v(
                                  "\n                    " +
                                    _vm._s(_vm.errors.password[0]) +
                                    "\n                  "
                                )
                              ])
                            ]
                          )
                        ])
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "px-6 py-4 bg-gray-100 text-right" },
                      [
                        _c(
                          "button",
                          {
                            staticClass:
                              "\n                inline-flex\n                items-center\n                px-4\n                py-2\n                bg-white\n                border border-gray-300\n                rounded-md\n                font-semibold\n                text-xs text-gray-700\n                uppercase\n                tracking-widest\n                shadow-sm\n                hover:text-gray-500\n                focus:outline-none\n                focus:border-blue-300\n                focus:ring focus:ring-blue-200\n                active:text-gray-800\n                active:bg-gray-50\n                disabled:opacity-25\n                transition\n              ",
                            attrs: { type: "button" },
                            on: { click: _vm.closeModal }
                          },
                          [
                            _vm._v(
                              "\n              " + _vm._s(_vm.__("Cancel"))
                            )
                          ]
                        ),
                        _c(
                          "button",
                          {
                            staticClass:
                              "\n                inline-flex\n                items-center\n                justify-center\n                px-4\n                py-2\n                bg-red-600\n                border border-transparent\n                rounded-md\n                font-semibold\n                text-xs text-white\n                uppercase\n                tracking-widest\n                hover:bg-red-500\n                focus:outline-none\n                focus:border-red-700\n                focus:ring focus:ring-red-200\n                active:bg-red-600\n                disabled:opacity-25\n                transition\n                ml-2\n              ",
                            attrs: { type: "button" },
                            on: { click: _vm.performDeleteAccount }
                          },
                          [
                            _vm._v(
                              "\n              " +
                                _vm._s(_vm.__("Delete Account")) +
                                "\n            "
                            )
                          ]
                        )
                      ]
                    )
                  ]
                )
              ]
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "fixed inset-0 transform transition-all" },
      [_c("div", { staticClass: "absolute inset-0 bg-gray-500 opacity-75" })]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2a2240a7", module.exports)
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);