import Vue from 'vue'
import Resource from 'vue-resource'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import StartPage from '@/templates/StartPage'
import Shop from '@/templates/Shop'
import Product from '@/templates/Product'
import Music from '@/templates/Music'
import Admin from '@/templates/admin/Admin'
import AdminShop from '@/templates/admin/AdminShop'

Vue.use(Router)
Vue.use(Resource)

export default new Router({
  mode: 'history',
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'StartPage',
      component: StartPage
    },
    {
      path: '/homepage',
      component: StartPage
    },
    {
      path: '/shop',
      component: Shop
    },
    {
      path: '/shop/:id',
      component: Product
    },
    {
      path: '/music',
      component: Music
    },
    {
      path: '/admin',
      component: Admin,
      children: [
        {
          path: '/admin/shop',
          component: AdminShop
        }
      ]
    }
  ]
})
