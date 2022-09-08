import { RouteRecordRaw } from 'vue-router'
const indexRoute = () => import('@/views/index/index.vue')
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: indexRoute.name,
        component: indexRoute,
        meta: {
            title: ''
        }
    }
]

export default routes
