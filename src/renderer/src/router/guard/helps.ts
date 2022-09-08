import { loginApi } from "@@/api"
import { storeToRefs } from "pinia"
import { useAppStore } from "@@/store"
import NProgress from 'nprogress';
import { RouteLocation } from 'vue-router'
import { useTitle } from '@vueuse/core'
export const checkLogin = async () => {
    const { account, profile } = storeToRefs(useAppStore())
    if (account.value || profile.value) return
    try {
        await loginApi.status()
    } catch (error) {

    }
}
/**使用进度条 */
export function useNProgress() {
    /**进度条开始 */
    function start() {
        if (!NProgress.isStarted()) {
            NProgress.start();
        }
    }
    /**进度条结束 */
    function done() {
        NProgress.done();
    }
    return { start, done }
}
export function useChangeTitle(to: RouteLocation) {
    const title = useTitle()
    const envTitle = import.meta.env.VITE_APP_TITLE || ''
    title.value = (to.meta.title ?? envTitle) as string
}