import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Ued from '@/components/ued'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/ued',
      name: 'Ued',
      component: Ued
    }
  ]
})
