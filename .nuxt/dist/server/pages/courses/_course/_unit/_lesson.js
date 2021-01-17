exports.ids = [6,2];
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

/***/ }),

/***/ 54:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/courses/_course/_unit/_lesson.vue?vue&type=template&id=45882fa4&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<h2 data-v-45882fa4>"+_vm._ssrEscape(_vm._s(_vm.page.title))+"</h2> "),(_vm.page.sections)?_vm._ssrNode("<div data-v-45882fa4>","</div>",_vm._l((_vm.page.sections),function(ref,index){
var options = ref.options;
var text = ref.text;
return _vm._ssrNode("<div data-v-45882fa4>","</div>",[(index===0 || _vm.answers[index-1])?_vm._ssrNode("<div data-v-45882fa4>","</div>",[_c('nuxt-content',{attrs:{"document":text}}),_vm._ssrNode(" "),(options.length > 2)?_vm._ssrNode("<div data-v-45882fa4>","</div>",[_c('mutli-practice',{attrs:{"options":options.slice(1),"correct":options[0]},model:{value:(_vm.answers[index]),callback:function ($$v) {_vm.$set(_vm.answers, index, $$v)},expression:"answers[index]"}})],1):_vm._e()],2):_vm._e()])}),0):_vm._ssrNode("<div data-v-45882fa4>","</div>",[_c('nuxt-content',{attrs:{"document":_vm.page}})],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"center \" style=\"margin-top: 3em\" data-v-45882fa4>","</div>",[_c('vs-pagination',{attrs:{"length":5},model:{value:(_vm.p),callback:function ($$v) {_vm.p=$$v},expression:"p"}})],1)],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/courses/_course/_unit/_lesson.vue?vue&type=template&id=45882fa4&scoped=true&

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
//
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
    const page = await $content('courses', params.course, params.unit, params.lesson).fetch().catch(err => {
      error({
        statusCode: 404,
        message: 'Page not found'
      });
    }); //console.log(page)

    const section1 = page.body.children[0];
    let answers;

    if (page.sections) {
      answers = Array(page.sections.length - 1).fill('');
    }

    return {
      page,
      p: page.index,
      section1: {
        type: 'root',
        children: [section1]
      },
      answers
    };
  },

  scrollToTop: true,
  methods: {
    updateAnswer(index) {
      console.log('hi?');
      let v = this;
      return answer => {
        v.answers[index] = answer;
      };
    }

  },
  watch: {
    answers: function (n) {
      if (!n) return; // find the first occurrence of non truthy, and fill() the rest with false

      const i = n.indexOf(false);
      if (i === -1) return; //console.log('first occurrence ',i)

      this.answers = this.answers.fill(false, i);
    }
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
  "45882fa4",
  "7517c2e3"
  
)

/* harmony default export */ var _lesson = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {MutliPractice: __webpack_require__(39).default})


/***/ })

};;
//# sourceMappingURL=_lesson.js.map