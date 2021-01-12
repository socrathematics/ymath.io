export { default as SocialHead } from '../../components/global/SocialHead.vue'
export { default as MutliPractice } from '../../components/global/mutli-practice.vue'
export { default as Logo } from '../../components/Logo.vue'
export { default as VuesaxLogo } from '../../components/VuesaxLogo.vue'
export { default as TopBar } from '../../components/top-bar.vue'

export const LazySocialHead = import('../../components/global/SocialHead.vue' /* webpackChunkName: "components/global/SocialHead" */).then(c => c.default || c)
export const LazyMutliPractice = import('../../components/global/mutli-practice.vue' /* webpackChunkName: "components/global/mutli-practice" */).then(c => c.default || c)
export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/Logo" */).then(c => c.default || c)
export const LazyVuesaxLogo = import('../../components/VuesaxLogo.vue' /* webpackChunkName: "components/VuesaxLogo" */).then(c => c.default || c)
export const LazyTopBar = import('../../components/top-bar.vue' /* webpackChunkName: "components/top-bar" */).then(c => c.default || c)
