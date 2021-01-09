<template>
<div>
  <h2>{{page.title}}</h2>
  <nuxt-content :document="page" />
</div>
</template>

<script>
export default {
name: "index",
  async asyncData ({ $content, params, error }) {
    const page = await $content(params.course+'*').fetch().catch((err) => {
      error({ statusCode: 404, message: 'Page not found' })
    })

    return {
      page
    }
  }
}
</script>

<style scoped>

</style>
