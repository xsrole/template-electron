import { AxiosRequestConfig } from 'axios'
export const repeatRequestIntercept = function () {
    const pending = new Map()
    function addPending(config: AxiosRequestConfig) {
        const controller = new AbortController();
        config.signal = controller.signal
        if (!pending.has(config.url)) {
            pending.set(config.url, controller)
        }
    }
    function removePending(config: AxiosRequestConfig) {
        if (pending.has(config.url)) {
            const controller = pending.get(config.url)
            controller.abort()
            pending.delete(config.url)
        }
    }
    return {
        addPending, removePending
    }
}
export declare interface instanceObject {
    [key: string]: string;
}
/**
 * JSON转url参数
 * @param data Json格式数据
 * */
export const formatJsonToUrlParams = (data: instanceObject) => {
    return typeof data === 'object'
        ? Object.keys(data)
            .map((key) => {
                return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
            })
            .join('&')
        : '';
};
