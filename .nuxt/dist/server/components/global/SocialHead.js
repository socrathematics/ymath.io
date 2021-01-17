exports.ids = [1];
exports.modules = {

/***/ 38:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/SocialHead.vue?vue&type=template&id=fa320ce0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (false)?undefined:_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/global/SocialHead.vue?vue&type=template&id=fa320ce0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/global/SocialHead.vue?vue&type=script&lang=js&
//
//
//
//
// Test on: https://cards-dev.twitter.com/validator
// Test on: https://developers.facebook.com/tools/debug/
/* harmony default export */ var SocialHeadvue_type_script_lang_js_ = ({
  name: 'SocialHead',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    image: {
      type: String,
      default: '/favicon.png'
    }
  },

  head() {
    return {
      meta: [{
        hid: 'twitter:title',
        name: 'twitter:title',
        content: this.title
      }, {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: this.description
      }, {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: this.image
      }, {
        hid: 'twitter:image:alt',
        name: 'twitter:image:alt',
        content: this.title
      }, {
        hid: 'og:title',
        property: 'og:title',
        content: this.title
      }, {
        hid: 'og:description',
        property: 'og:description',
        content: this.description
      }, {
        hid: 'og:image',
        property: 'og:image',
        content: this.image
      }, {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: this.image
      }, {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: this.title
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/global/SocialHead.vue?vue&type=script&lang=js&
 /* harmony default export */ var global_SocialHeadvue_type_script_lang_js_ = (SocialHeadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/global/SocialHead.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  global_SocialHeadvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "062744e1"
  
)

/* harmony default export */ var SocialHead = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=SocialHead.js.map