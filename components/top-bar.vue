<template>
  <client-only><vs-navbar  padding-scroll center-collapsed>
    <template #left>
      <nuxt-link to="/"><img  width="45" src="/favicon.png" alt="" style="border-radius: 5px"></nuxt-link>
    </template>
    <vs-navbar-item  :active="$props.slug==='/courses'" to="/courses">
      Courses
    </vs-navbar-item>
    <template #right>
      <vs-button flat >Login</vs-button>
      <vs-button >Get Started</vs-button>
    </template>
  </vs-navbar>
    </client-only>

</template>

<script>
export default {
name: "top-bar",
  props:['slug']
}
</script>

<style scoped>

</style>
