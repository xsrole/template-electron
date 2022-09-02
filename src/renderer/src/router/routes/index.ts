import { RouteRecordRaw } from 'vue-router'
import homeRoutes from './home.routes'
const _routes = [homeRoutes]
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  ..._routes,
  {
    path: '/:pathMatch(.*)*',
    redirect: '/not-found'
  }
]
export default routes
