<template>
  <div>
    <input type="text" :placeholder="placeholder" @keyup.enter="save"
           v-model="content">
  </div>
</template>

<script>
  export default {
    name: 'todo-input',
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
  input{
    width: 200px;
    border:none;
    background: #f1f1f1;
    padding:5px 10px;
    box-sizing: border-box;
    font-size: 12px;
    outline:none;
  }
</style>
