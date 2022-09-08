import http from "@@/axios";
import { useAppStore } from "@@/store";
export type StatusResult = {
    code: number
    account: {
        anonimousUser: boolean
        ban: number
        baoyueVersion: number
        createTime: number
        donateVersion: number
        id: number
        paidFee: boolean
        status: number
        tokenVersion: number
        type: number
        userName: string
        vipType: number
        whitelistAuthority: number
    }
    profile: {
        accountStatus: number
        accountType: number
        anchor: boolean
        authStatus: number
        authenticated: boolean
        authenticationTypes: number
        authority: number
        avatarDetail: null
        avatarImgId: number
        avatarUrl: string
        backgroundImgId: number
        backgroundUrl: string
        birthday: number
        city: number
        createTime: number
        defaultAvatar: boolean
        description: null
        detailDescription: null
        djStatus: number
        expertTags: null
        experts: null
        followed: boolean
        gender: number
        lastLoginIP: string
        lastLoginTime: number
        locationStatus: number
        mutual: boolean
        nickname: string
        province: number
        remarkName: null
        shortUserName: string
        signature: string
        userId: number
        userName: string
        userType: number
        vipType: number
        viptypeVersion: number
    }
}
const getPhoneCode = (phone: string) => {
    return new Promise((resolve, reject) => {
        http.get('/captcha/sent', { phone: phone }).then((res: any) => {
            if (res.code === 200) return resolve(res.data)
            return reject(false)
        }).catch(err => reject(err))
    })
}
const verifyPhoneCode = (phone: string, captcha: string) => {
    return new Promise((resolve, reject) => {
        http.get('/captcha/verify', { phone, captcha }).then((res: any) => {
            console.log(res);

            if (res.code === 200) return resolve(res.data)
            return reject(false)
        }).catch(err => reject(err))
    })
}
const getQrKey = (): Promise<string> => {
    return new Promise((resolve, reject) => {
        http.get('/login/qr/key', { timestamp: Date.now() }).then((res: any) => {
            if (res.code === 200) return resolve(res.data.unikey)
            return reject(res)
        }).catch(err => reject(err))
    })
}
const getQr = (key: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        http.get('/login/qr/create', { key, qrimg: 'qrimg ', timestamp: Date.now() }).then((res: any) => {
            if (res.code === 200) return resolve(res.data.qrimg)
            return reject(res)
        }).catch(err => reject(err))
    })
}
const checkQr = (key: string): Promise<{ code: number, message: string, cookie: string }> => {
    return new Promise((resolve, reject) => {
        http.get('/login/qr/check', { key, timestamp: Date.now() }).then((res: any) => {
            return resolve(res)
        }).catch(err => reject(err))
    })
}
const status = (): Promise<StatusResult> => {
    return new Promise((resolve, reject) => {
        http.get('/login/status').then((res: any) => {
            if (res.data.profile) {
                const { account, profile } = storeToRefs(useAppStore())
                account.value = res.data.account
                profile.value = res.data.profile
                return resolve(res.data)
            }
            return reject(res)
        }).catch(err => reject(err))
    })
}
const logOut = () => {
    return new Promise((resolve, reject) => {
        http.get('/logout').then((res: any) => {
            if (res.code === 200) {
                useAppStore().$patch({
                    cookie: '',
                    profile: undefined,
                    account: undefined
                })
                return resolve(true)
            }
            return reject(res)
        }).catch(err => reject(err))
    })
}
export const loginApi = {
    getPhoneCode,
    verifyPhoneCode,
    getQrKey,
    getQr,
    checkQr,
    status,
    logOut
}