<template>
<div style="margin-top:5em;padding:2em 1em">
  <top-bar></top-bar>
  <h1>Course Catalog</h1>
  <client-only>
    <vs-card :key="ind" v-for="({title, description, path}, ind) of courses">
      <template #title>
        <h3>{{ title}}</h3>
      </template>
      <template #img>
        <img src="/foto5.png" alt="">
      </template>
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
  async asyncData({ params, $content, error }) {
  // fetch all of the something.* ig...
    // gonna have to move the courses into their own folder ;)
    const courses = await $content('courses',{deep: true}).where({ index: 0 }).only(['title','description']).fetch();
  return {courses}
  }
}
</script>

<style scoped>

</style>
