import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layout/MainLayout.vue'
import HomePage from '@/views/HomePage.vue'
import NotFound from '@/views/NotFound.vue'
import ExploreProducts from '@/views/ExploreProducts.vue'
import AboutUs from '@/views/AboutUs.vue'
import ContactUs from '@/views/ContactUs.vue'
import ProductDetails from '@/views/ProductDetails.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,     // Acts as the parent layout for all main pages.  Contains Navbar, Footer, and router-view.
    children: [
      {
        path: '',
        name: 'HomePage',
        component: HomePage,
      },
      {
        path: 'about',
        name: 'AboutUs',
        component: AboutUs
      },
      {
        path: 'contact',
        name: 'ContactUs',
        component: ContactUs
      },
      {
        path: 'explore/:slug?',
        name: 'ExploreProducts',
        component: ExploreProducts     // Product listing page with optional category filter (slug)
      },
      {
        path: 'product/:id',
        name: 'ProductDetails',
        component: ProductDetails
      },
      {
        path: '/:pathMatch(.*)*', // ✅ replaces '*'
        name: 'NotFound',
        component: NotFound
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


// Router Setup:
//  Uses createWebHistory for clean URLs (no hash #)
//  All routes are nested under MainLayout for consistent UI structure