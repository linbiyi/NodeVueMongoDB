import Vue from 'vue'
import Router from 'vue-router'
import GoodsList from '@/views/GoodsList'
import Title from '@/views/Title'
import Image from '@/views/Image'
import Cart from '@/views/Cart'
import Axios from '@/views/Axios'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/goods',
      name: 'GoodsList',
      components: {
        default: GoodsList,
        title: Title,
        img: Image
      },
      children: [
      	{
      		path: 'title',
      		name: 'title',
      		component: Title
      	},
      	{
      		path: 'img',
      		name: 'img',
      		component: Image
      	},
        {
          path: 'axios',
          name: 'axios',
          component: Axios 
        }
      ]
    },
    {
      path: '/cart/:cartId',
      name: 'cart',
      component: Cart
    }
  ]
})
