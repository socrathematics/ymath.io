import Vue from 'vue'

const globalComponents = {
  MutliPractice: () => import('../../components/global/mutli-practice.vue' /* webpackChunkName: "components/global/mutli-practice" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
