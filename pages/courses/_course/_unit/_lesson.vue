<template>
<div>
  <h2>{{page.title}}</h2>

  <div v-if="page.sections"><div :key="index" v-for="({options, text}, index) of page.sections">
    <div v-if="index===0 || answers[index-1]">
      <nuxt-content :document="text"/>

      <div v-if="options.length > 2"> <mutli-practice v-model="answers[index]" :options="options.slice(1)" :correct="options[0]"></mutli-practice></div>
    </div>
  </div></div>
  <div v-else>
    <nuxt-content :document="page"></nuxt-content>
  </div>
  <div class="center " style="margin-top: 3em">
    <vs-pagination v-model="p" :length="5" />
  </div>
</div>
</template>

<script>
export default {
  async asyncData ({ $content, params, error }) {
    const page = await $content('courses',params.course, params.unit, params.lesson).fetch().catch((err) => {
      error({ statusCode: 404, message: 'Page not found' })
    })
    //console.log(page)
    const section1 = page.body.children[0]
    let answers;
    if (page.sections){
      answers = Array(page.sections.length-1).fill('')
    }
    return {
      page, p:page.index, section1:{type:'root', children:[section1]}, answers
    }
  },
  scrollToTop: true,
  methods:{
    updateAnswer(index) {
      console.log('hi?')
      let v = this;
      return (answer)=>{
        v.answers[index] = answer
      }
    }
  },
  watch:{
    answers:function(n){
      if (!n) return;
      // find the first occurrence of non truthy, and fill() the rest with false
      const i =  n.indexOf(false);
      if (i===-1) return;
      //console.log('first occurrence ',i)
      this.answers = this.answers.fill(false,i)

    }
  }

}
</script>

<style scoped>

</style>
