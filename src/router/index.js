import Vue from 'vue'
import Router from 'vue-router'

import MainLayout from '@/layout/MainLayout.vue'
import HomePage from '@/views/HomePage.vue'
import NotFound from '@/views/NotFound.vue'
import AboutPage from '@/views/AboutPage.vue'
import ContactPage from '@/views/ContactPage.vue'
import ExploreProducts from '@/views/ExploreProducts.vue'

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
          path: '/about',
          component: AboutPage
        },
        {
          path: '/contact',
          component: ContactPage
        },
        {
          path: '/explore',
          component: ExploreProducts
        },
        {
          path: '*',
          component: NotFound
        }
      ]
    }
  ]
})