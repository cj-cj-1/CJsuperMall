import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () => import('views/home/home')
const cart = () => import('views/cart/cart')
const profile = () => import('views/profile/profile')
const category = () => import('views/category/category')
const detail = () => import('views/detail/detail')

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/cart',
      component: cart
    },
    {
      path: '/profile',
      component: profile
    },
    {
      path: '/category',
      component: category
    },
    {
      path: '/detail/:iid',
      component: detail
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
