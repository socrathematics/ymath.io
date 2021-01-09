import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7ca63dd8 = () => interopDefault(import('../pages/courses/index.vue' /* webpackChunkName: "pages/courses/index" */))
const _9f774a80 = () => interopDefault(import('../pages/courses/_course.vue' /* webpackChunkName: "pages/courses/_course" */))
const _1e91d143 = () => interopDefault(import('../pages/courses/_course/index.vue' /* webpackChunkName: "pages/courses/_course/index" */))
const _42a70a54 = () => interopDefault(import('../pages/courses/_course/_unit.vue' /* webpackChunkName: "pages/courses/_course/_unit" */))
const _51e0fc52 = () => interopDefault(import('../pages/courses/_course/_unit/index.vue' /* webpackChunkName: "pages/courses/_course/_unit/index" */))
const _4024919c = () => interopDefault(import('../pages/courses/_course/_unit/_lesson.vue' /* webpackChunkName: "pages/courses/_course/_unit/_lesson" */))
const _2f4f1f22 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _32bc61b2 = () => interopDefault(import('../pages/_slug.vue' /* webpackChunkName: "pages/_slug" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/courses",
    component: _7ca63dd8,
    name: "courses"
  }, {
    path: "/courses/:course",
    component: _9f774a80,
    children: [{
      path: "",
      component: _1e91d143,
      name: "courses-course"
    }, {
      path: ":unit",
      component: _42a70a54,
      children: [{
        path: "",
        component: _51e0fc52,
        name: "courses-course-unit"
      }, {
        path: ":lesson",
        component: _4024919c,
        name: "courses-course-unit-lesson"
      }]
    }]
  }, {
    path: "/",
    component: _2f4f1f22,
    name: "index"
  }, {
    path: "/:slug",
    component: _32bc61b2,
    name: "slug"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
