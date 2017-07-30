<template>
  <li class="inventory-item" :class="{active:isActive}">
    <router-link :to="'/todo/inventory/'+inventory.id">{{inventory.name}}</router-link>
  </li>
</template>

<script>
  import {mapGetters, mapMutations} from 'vuex'

  export default {
    name: 'inventory-item',
    props: ['inventory'],
    computed: {
      ...mapGetters(['activeInventory']),
      isActive(){ return this.inventory && this.activeInventory && this.inventory == this.activeInventory}
    },

  }
</script>

<style scoped>

</style>
