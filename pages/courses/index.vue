<template>
<div style="margin-top:5em;padding:2em 1em">
  <top-bar :slug="slug"></top-bar>
  <h1>Course Catalog</h1>
  <client-only>

    <vs-card type="1" :key="ind"  v-for="({title, description, path, thumbnail}, ind) of courses">
      <template #title>
        <h3>{{ title}}</h3>
      </template>
      <template #img>
        <nuxt-link style="text-decoration: none"  :to="'/courses/'+path.split('/')[2]"><img :src="thumbnail" alt="">
        </nuxt-link></template>
      <template #text>
        <p>
          {{description}}
        </p>
      </template>
      <template #interactions>
        <vs-button danger icon>
          <i class='bx bx-heart'></i>
        </vs-button>
        <vs-button class="btn-chat" shadow primary>

          <i class='bx bx-chat' ></i>
          <span class="span">
          54
        </span>
        </vs-button>
      </template>
    </vs-card>
  </client-only>

</div>
</template>

<script>
export default {
name: "index",
  async asyncData({ params, $content, error, route }) {
  // fetch all of the something.* ig...

    // gonna have to move the courses into their own folder ;)
    const courses = await $content('courses',{deep: true}).where({ index: 0 }).only(['title','description','thumbnail']).fetch();
  return {courses, slug:route.path}
  }
}
</script>

<style scoped>

</style>
