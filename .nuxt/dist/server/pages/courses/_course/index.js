exports.ids = [8];
exports.modules = {

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courses/_course/index.vue?vue&type=template&id=1e39c8ec&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h2 data-v-1e39c8ec>"+_vm._ssrEscape(_vm._s(_vm.page.title))+"</h2> "),_c('nuxt-content',{attrs:{"document":_vm.page}})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/courses/_course/index.vue?vue&type=template&id=1e39c8ec&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courses/_course/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
/* harmony default export */ var _coursevue_type_script_lang_js_ = ({
  name: "index",

  async asyncData({
    $content,
    params,
    error
  }) {
    const page = await $content('courses/' + params.course + '/index').fetch().catch(err => {
      error({
        statusCode: 404,
        message: 'Page not found'
      });
    });
    return {
      page
    };
  }

});
// CONCATENATED MODULE: ./pages/courses/_course/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var courses_coursevue_type_script_lang_js_ = (_coursevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/courses/_course/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  courses_coursevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1e39c8ec",
  "4772398a"
  
)

/* harmony default export */ var _course = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map