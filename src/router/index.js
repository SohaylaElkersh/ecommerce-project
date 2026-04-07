import Vue from 'vue'
import Router from 'vue-router'

import MainLayout from '@/layout/MainLayout.vue'
import HomePage from '@/views/HomePage.vue'
import NotFound from '@/views/NotFound.vue'
import ExploreProducts from '@/views/ExploreProducts.vue'
import AboutUs from '@/views/AboutUs.vue'
import ContactUs from '@/views/ContactUs.vue'
import ProductDetails from '@/views/ProductDetails.vue'

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
          component: AboutUs
        },
        {
          path: '/contact',
          component: ContactUs
        },
        {
          path: '/explore',
          component: ExploreProducts
        },
        {
          path: '/product/:id',
          component: ProductDetails
        },
        {
          path: '*',
          name: 'NotFound',
          component: NotFound
        }
      ]
    }
  ]
})