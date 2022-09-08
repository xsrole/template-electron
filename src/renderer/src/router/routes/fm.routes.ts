import { RouteRecordRaw } from 'vue-router'
const Fm = () => import('@@/views/fm/fm.vue')
const routes: RouteRecordRaw[] = [
  {
    path: '/fm',
    name: Fm.name,
    component: Fm,
    meta: {
      title: '私人FM'
    }
  }
]

export default routes
