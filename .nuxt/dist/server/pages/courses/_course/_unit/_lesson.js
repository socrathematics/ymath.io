exports.ids = [5];
exports.modules = {

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courses/_course/_unit/_lesson.vue?vue&type=template&id=1e6c567c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h2 data-v-1e6c567c>"+_vm._ssrEscape(_vm._s(_vm.page.title))+"</h2> "),_c('nuxt-content',{attrs:{"document":_vm.page}}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"center \" style=\"margin-top: 3em\" data-v-1e6c567c>","</div>",[_c('vs-pagination',{attrs:{"length":5},model:{value:(_vm.p),callback:function ($$v) {_vm.p=$$v},expression:"p"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/courses/_course/_unit/_lesson.vue?vue&type=template&id=1e6c567c&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courses/_course/_unit/_lesson.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var _lessonvue_type_script_lang_js_ = ({
  async asyncData({
    $content,
    params,
    error
  }) {
    const page = await $content(params.course, params.unit, params.lesson).fetch().catch(err => {
      error({
        statusCode: 404,
        message: 'Page not found'
      });
    }); //console.log(page)

    return {
      page,
      p: page.index
    };
  }

});
// CONCATENATED MODULE: ./pages/courses/_course/_unit/_lesson.vue?vue&type=script&lang=js&
 /* harmony default export */ var _unit_lessonvue_type_script_lang_js_ = (_lessonvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/courses/_course/_unit/_lesson.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _unit_lessonvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "1e6c567c",
  "7517c2e3"
  
)

/* harmony default export */ var _lesson = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_lesson.js.map