exports.ids = [2];
exports.modules = {

/***/ 39:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/mutli-practice.vue?vue&type=template&id=763909d0&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('client-only',[_c('vs-row',[_c('vs-select',{attrs:{"state":_vm.v===''?'':(_vm.correct==_vm.v?'success':'danger'),"placeholder":"Select"},model:{value:(_vm.v),callback:function ($$v) {_vm.v=$$v},expression:"v"}},_vm._l((_vm.options),function(opt,ind){return _c('vs-option',{key:ind,attrs:{"label":opt,"value":ind+1}},[_vm._v("\n      "+_vm._s(opt)+"\n    ")])}),1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/global/mutli-practice.vue?vue&type=template&id=763909d0&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/mutli-practice.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var mutli_practicevue_type_script_lang_js_ = ({
  name: "mutli-practice",
  props: ['options', 'correct', 'value'],
  emits: ['input'],
  data: () => ({
    v: ''
  }),
  watch: {
    v: function (val) {
      console.log(val);

      if (val == this.correct) {
        this.$emit('input', true);
      } else {
        this.$emit('input', false);
      }
    }
  }
});
// CONCATENATED MODULE: ./components/global/mutli-practice.vue?vue&type=script&lang=js&
 /* harmony default export */ var global_mutli_practicevue_type_script_lang_js_ = (mutli_practicevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/global/mutli-practice.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  global_mutli_practicevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "763909d0",
  "6d60fb13"
  
)

/* harmony default export */ var mutli_practice = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=mutli-practice.js.map