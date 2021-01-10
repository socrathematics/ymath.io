<template>
<div>
  <client-only><vs-row><vs-select :state="value===''?'':(correct==value?'success':'danger')" placeholder="Select" v-model="value">
    <vs-option v-for="(opt, ind) of options" :label="opt" :key="ind" :value="ind+1">
      {{opt}}
    </vs-option>
  </vs-select></vs-row></client-only>

</div>
</template>

<script>
export default {
name: "mutli-practice",
  props:[
    'options',
    'correct'
  ],
  data:()=>({
    value:''
  })
}
</script>

<style scoped>

</style>
