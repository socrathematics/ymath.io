<template>
<div>
  <h2>{{page.title}}</h2>
  <nuxt-content :document="page" />
  <div class="center " style="margin-top: 3em">
    <vs-pagination v-model="p" :length="5" />
  </div>
</div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const page = await $content(params.course, params.unit, params.lesson).fetch().catch((err) => {
      error({ statusCode: 404, message: 'Page not found' })
    })
    //console.log(page)

    return {
      page, p:page.index
    }
  }
}
</script>

<style scoped>

</style>
