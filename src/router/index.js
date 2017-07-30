import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import Todo from '@/components/Todo'
import InventoryDetail from '@/components/InventoryDetail'
import TodoDetail from '@/components/TodoDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/user', component: User},
    {
      path: '/todo', component: Todo,
      children: [
        {
          path: 'inventory/:iid',
          component: InventoryDetail,
          children: [
            {
              path: 'todo/:tid',
              component: TodoDetail
            }
          ]
        }
      ]
    },
  ]
})
