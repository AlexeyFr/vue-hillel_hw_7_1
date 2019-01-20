import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Faq from './views/Faq.vue'
import Positions from './views/Positions.vue'
import Position from './views/Position.vue'
import Faforites from './views/Faforites.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/faq',
      name: 'faq',
      component: Faq
    },
    {
      path: '/positions',
      name: 'positions',
      component: Positions
    },
    {
      path: '/position/:id',
      name: 'position',
      component: Position
    },
    {
      path: '/faforites',
      name: 'faforites',
      component: Faforites
    }
  ]
})