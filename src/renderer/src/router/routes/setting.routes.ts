import { RouteRecordRaw } from 'vue-router'
const Setting = () => import('@@/views/setting/setting.vue')
const routes: RouteRecordRaw[] = [
  {
    path: '/setting',
    name: Setting.name,
    component: Setting,
    meta: {
      title: '设置'
    }
  }
]

export default routes
