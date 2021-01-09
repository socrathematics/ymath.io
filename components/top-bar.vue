<template>
  <client-only><vs-navbar padding-scroll center-collapsed>
    <template #left>
      <img  width="35" src="/favicon.png" alt="" style="border-radius: 5px">
    </template>
    <vs-navbar-item  id="guide">
      Guide
    </vs-navbar-item>
    <vs-navbar-item id="docs">
      Documents
    </vs-navbar-item>
    <vs-navbar-item  id="components">
      Components
    </vs-navbar-item>
    <vs-navbar-item id="license">
      license
    </vs-navbar-item>
    <template #right>
      <vs-button flat >Login</vs-button>
      <vs-button>Get Started</vs-button>
    </template>
  </vs-navbar></client-only>

</template>

<script>
export default {
name: "top-bar"
}
</script>

<style scoped>

</style>
