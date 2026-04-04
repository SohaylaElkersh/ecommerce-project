import Vue from 'vue'
import Router from 'vue-router'

import MainLayout from '@/layout/MainLayout.vue'
import HomePage from '@/views/HomePage.vue'
import NotFound from '@/views/NotFound.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          component:HomePage
        },
        {
          path: '*',
          component: NotFound
        }
      ]
    }
  ]
})