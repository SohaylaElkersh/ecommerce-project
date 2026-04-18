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
          name: 'HomePage',
          component:HomePage,
        },
        {
          path: '/about',
          name: 'AboutUs',
          component: AboutUs
        },
        {
          path: '/contact',
          name: 'ContactUs',
          component: ContactUs
        },
        {
          path: '/explore/:slug?',
          name: 'ExploreProducts',
          component: ExploreProducts
        },
        {
          path: '/product/:id',
          name: 'ProductDetails',
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