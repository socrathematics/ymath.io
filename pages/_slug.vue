<template>
<div  style="margin-top:6em">
  <NuxtChild/>
</div>
</template>

<script>
export default {
  async asyncData({ params }) {
    const slug = params.slug // When calling /abc the slug will be "abc"
    return { slug }
  }
}
</script>

<style scoped>

</style>
