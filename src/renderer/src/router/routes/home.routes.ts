import { RouteRecordRaw } from 'vue-router'
import Home from '@@/views/home/home.vue'
const homeRoutes: RouteRecordRaw = {
  path: '/home',
  name: Home.name,
  component: Home,
  meta: {
    title: '首页'
  }
}

export default homeRoutes
