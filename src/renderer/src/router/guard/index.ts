import { Router } from 'vue-router'
export function useGuard(router: Router) {
  router.beforeEach((to, from, next) => {
    next()
  })
  router.afterEach((to, from) => {})
}
