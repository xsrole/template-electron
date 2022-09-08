import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, AxiosError } from 'axios';
import NProgress from 'nprogress'
import showCodeMessage from './code';
import { formatJsonToUrlParams, instanceObject } from './_methods';
import { useAppStore } from '@@/store';
const BASE_PREFIX = import.meta.env.VITE_API_BASEURL || 'http://101.200.179.232:3702/';

// 创建实例
const axiosInstance: AxiosInstance = axios.create({
  // 前缀
  baseURL: BASE_PREFIX,
  // 超时
  timeout: 1000 * 30,
  // 请求头
  headers: {
    'Content-Type': 'application/json',
  },
});
// 请求拦截器
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // TODO 在这里可以加上想要在请求发送前处理的逻辑
    // TODO 比如 loading 等
    const token = window.localStorage.getItem('token')
    config.headers!.Authorization = token as string
    NProgress.start()
    return config;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

// 响应拦截器
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    NProgress.done()
    if (response.status === 200) {
      return response.data;
    }
    window.$notification.warning({ title: response.statusText, content: response.data })
    return Promise.reject(response.data);
  },
  (error: AxiosError) => {
    if (error.code === "ERR_CANCELED") {
      return false
    }
    const { response, request } = error;
    NProgress.done()
    if (response) {
      console.log(showCodeMessage(response.status));
      window.$notification.error({ title: showCodeMessage(response.status) })
      return Promise.reject(response.data);
    }
    if (request) {
      window.$notification.error({ content: '链接超时' })
      return Promise.reject(error);
    }
  }
);
const http = {
  get: (url: string, data?: object) => {
    const { cookie } = useAppStore()
    return axiosInstance.get(url, { params: { cookie, ...data } })
  },
  post: (url: string, data?: object) => axiosInstance.post(url, data),
  put: (url: string, data?: object) => axiosInstance.put(url, data),
  delete: (url: string, data?: object) => axiosInstance.delete(url, { data: data }),
  upload: (url: string, file: File) =>
    axiosInstance.post(url, file, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),
  download: (url: string, data: instanceObject) => {
    const downloadUrl = `${BASE_PREFIX}/${url}?${formatJsonToUrlParams(data)}`;
    window.location.href = downloadUrl;
  },
};
export default http;
