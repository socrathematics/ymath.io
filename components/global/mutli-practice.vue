<template>
<div>
  <client-only><vs-row><vs-select :state="value===''?'':(correct==value?'success':'danger')" placeholder="Select" v-model="value">
    <vs-option v-for="(opt, index) of options" :label="opt" :key="index" :value="index">
      {{opt}}
    </vs-option>
  </vs-select></vs-row></client-only>

</div>
</template>

<script>
export default {
name: "mutli-practice",
  data:()=>({
    value:'',
    options:[
      '0','1','indeterminate','infinity'
    ],
    correct:'2'
  })
}
</script>

<style scoped>

</style>
