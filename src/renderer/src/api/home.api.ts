import http from "@@/axios";
export type HomeType = {
    banner: {
        adDispatchJson: null
        adLocation: null
        adSource: null
        adid: null
        encodeId: string
        event: null
        exclusive: false
        extMonitor: null
        extMonitorInfo: null
        imageUrl: string
        monitorBlackList: null
        monitorClick: null
        monitorClickList: null
        monitorImpress: null
        monitorImpressList: null
        monitorType: null
        program: null
        scm: string
        song: null
        targetId: number
        targetType: number
        titleColor: string
        typeTitle: string
        url: null
        video: null
    }[]
    ball: {
        homepageMode: string
        iconUrl: string
        id: number
        name: string
        resourceState: null
        skinSupport: true
        url: string
    }[]
}
const banner = (type: number = 0): Promise<HomeType['banner']> => {
    return new Promise((resolve, reject) => {
        http.get(`/banner`, { type }).then((res: any) => {
            if (res.code === 200) return resolve(res.banners)
            return reject(res)
        }).catch(err => reject(err))
    })
}
const find = (refresh: boolean = false) => {
    return new Promise((resolve, reject) => {
        http.get(`/homepage/block/page`, { refresh }).then((res: any) => {
            console.log(res);
        })
    })
}
const findBall = (): Promise<HomeType['ball']> => {
    return new Promise((resolve, reject) => {
        http.get(`/homepage/dragon/ball`).then((res: any) => {
            if (res.code === 200) return resolve(res.data)
            return reject(res)
        }).catch(err => reject(err))
    })
}
export const homeApi = {
    banner,
    find,
    findBall
}