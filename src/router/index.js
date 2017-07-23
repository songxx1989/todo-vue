import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import Todo from '@/components/Todo'
import QingdanDetail from '@/components/QingdanDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/user', component: User},
    {
      path: '/todo', component: Todo,
      children: [
        {
          path: 'qingdan/:id',
          component: QingdanDetail
        }
      ]
    },
  ]
})
