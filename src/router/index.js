import Vue from 'vue'
import Router from 'vue-router'
import Join from '@/components/Join'
import QingdanList from '@/components/QingdanList'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/join',component: Join},
  ]
})
