webpackJsonp([25],{

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(639),
  /* template */
  __webpack_require__(724),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/Users/wangxiaohui/Documents/cj/code/pos-admin/view/views/restoBrand/shop/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(3), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-74e2f358", Component.options)
  } else {
    hotAPI.reload("data-v-74e2f358", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 639:
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ShopList',
  computed: {
    cachedViews: function cachedViews() {
      return this.$store.state.tagsView.cachedViews;
    }
  }
});

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('transition', {
    attrs: {
      "name": "fade",
      "mode": "out-in"
    }
  }, [_c('keep-alive', {
    attrs: {
      "include": _vm.cachedViews
    }
  }, [_c('router-view')], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-74e2f358", module.exports)
  }
}

/***/ })

});