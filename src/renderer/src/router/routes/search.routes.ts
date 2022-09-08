import { RouteRecordRaw } from 'vue-router'
const Search = () => import('@@/views/search/search.vue')
const routes: RouteRecordRaw[] = [
  {
    path: '/search',
    name: Search.name,
    component: Search,
    meta: {
      title: '搜索'
    }
  },
  {
    path: '/search/:value',
    name: Search.name,
    component: Search,
    meta: {
      title: '搜索'
    }
  }
]

export default routes
