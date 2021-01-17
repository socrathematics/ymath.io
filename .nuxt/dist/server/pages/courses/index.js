exports.ids = [9];
exports.modules = {

/***/ 33:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/top-bar.vue?vue&type=template&id=c6b79246&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('vs-navbar',{attrs:{"padding-scroll":"","center-collapsed":""},scopedSlots:_vm._u([{key:"left",fn:function(){return [_c('nuxt-link',{attrs:{"to":"/"}},[_c('img',{staticStyle:{"border-radius":"5px"},attrs:{"width":"45","src":"/favicon.png","alt":""}})])]},proxy:true},{key:"right",fn:function(){return [_c('vs-button',{attrs:{"flat":""}},[_vm._v("Login")]),_vm._v(" "),_c('vs-button',[_vm._v("Get Started")])]},proxy:true}])},[_vm._v(" "),_c('vs-navbar-item',{attrs:{"active":_vm.$props.slug==='/courses',"to":"/courses"}},[_vm._v("\n    Courses\n  ")])],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/top-bar.vue?vue&type=template&id=c6b79246&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/top-bar.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var top_barvue_type_script_lang_js_ = ({
  name: "top-bar",
  props: ['slug']
});
// CONCATENATED MODULE: ./components/top-bar.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_top_barvue_type_script_lang_js_ = (top_barvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/top-bar.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_top_barvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c6b79246",
  "01153683"
  
)

/* harmony default export */ var top_bar = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courses/index.vue?vue&type=template&id=039bbb45&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticStyle:{"margin-top":"5em","padding":"2em 1em"}},[_c('top-bar',{attrs:{"slug":_vm.slug}}),_vm._ssrNode(" <h1 data-v-039bbb45>Course Catalog</h1> "),_c('client-only',_vm._l((_vm.courses),function(ref,ind){
var title = ref.title;
var description = ref.description;
var path = ref.path;
var thumbnail = ref.thumbnail;
return _c('vs-card',{key:ind,attrs:{"type":"1"},scopedSlots:_vm._u([{key:"title",fn:function(){return [_c('h3',[_vm._v(_vm._s(title))])]},proxy:true},{key:"img",fn:function(){return [_c('nuxt-link',{staticStyle:{"text-decoration":"none"},attrs:{"to":'/courses/'+path.split('/')[2]}},[_c('img',{attrs:{"src":thumbnail,"alt":""}})])]},proxy:true},{key:"text",fn:function(){return [_c('p',[_vm._v("\n          "+_vm._s(description)+"\n        ")])]},proxy:true},{key:"interactions",fn:function(){return [_c('vs-button',{attrs:{"danger":"","icon":""}},[_c('i',{staticClass:"bx bx-heart"})]),_vm._v(" "),_c('vs-button',{staticClass:"btn-chat",attrs:{"shadow":"","primary":""}},[_c('i',{staticClass:"bx bx-chat"}),_vm._v(" "),_c('span',{staticClass:"span"},[_vm._v("\n          54\n        ")])])]},proxy:true}],null,true)})}),1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/courses/index.vue?vue&type=template&id=039bbb45&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courses/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var coursesvue_type_script_lang_js_ = ({
  name: "index",

  async asyncData({
    params,
    $content,
    error,
    route
  }) {
    // fetch all of the something.* ig...
    // gonna have to move the courses into their own folder ;) -- done
    const courses = await $content('courses', {
      deep: true
    }).where({
      index: 0
    }).only(['title', 'description', 'thumbnail', 'path']).fetch();
    return {
      courses,
      slug: route.path
    };
  }

});
// CONCATENATED MODULE: ./pages/courses/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_coursesvue_type_script_lang_js_ = (coursesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/courses/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_coursesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "039bbb45",
  "399add1f"
  
)

/* harmony default export */ var courses = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TopBar: __webpack_require__(33).default})


/***/ })

};;
//# sourceMappingURL=index.js.map