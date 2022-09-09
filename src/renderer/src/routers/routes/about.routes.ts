import { RouteRecordRaw } from 'vue-router';
const aboutRoute = () => import('~/views/about/about.vue');
const routes: RouteRecordRaw[] = [
  {
    path: '/about',
    name: aboutRoute.name,
    component: aboutRoute,
    meta: {
      title: '',
    },
  },
];

export default routes;
