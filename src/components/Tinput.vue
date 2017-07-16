<template>
  <div>
    <input type="text" :placeholder="placeholder" @keyup.enter="save"
           v-model="content">
  </div>
</template>

<script>
  export default {
    name: 'tinput',
    props: ['placeholder'],
    data () {
      return {
        content: ''
      }
    },
    methods: {
      save (){
        if (!this.content) return;
        this.$emit('save', this.content);
        this.content = '';
      }
    }
  }
</script>

<style scoped>

</style>
