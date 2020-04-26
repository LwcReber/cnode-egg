import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Topics',
    meta: {
      keepAlive: true // 需要被缓存
    },
    component: () => import(/* webpackChunkName: "Topics" */ '../views/Topics')
  },
  {
    path: '/detail',
    name: 'Detail',
    component: () => import(/* webpackChunkName: "Detail" */ '../views/Detail')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
