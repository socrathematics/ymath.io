<template>
<div>
  <client-only><vs-row><vs-select :state="v===''?'':(correct==v?'success':'danger')" placeholder="Select" v-model="v">
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
    'correct',
    'value'
  ],
  emits: ['input'],
  data:()=>({
    v:''
  }),
  watch:{
  v: function(val){
    console.log(val);
    if (val==this.correct){
      this.$emit('input',true)
    }
    else {
      this.$emit('input',false)
    }
  }
  }

}
</script>

<style scoped>

</style>
