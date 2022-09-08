import { RouteRecordRaw } from 'vue-router'
const Find = () => import('@@/views/find/find.vue')
const routes: RouteRecordRaw[] = [
  {
    path: '/find',
    name: Find.name,
    component: Find,
    meta: {
      title: '发现'
    }
  }
]

export default routes
