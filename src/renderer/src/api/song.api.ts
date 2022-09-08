import http from "@@/axios";
export type SongType = {
    songDetail: {
        code: number
        privileges: {
            chargeInfoList: {
                chargeMessage: null
                chargeType: number
                chargeUrl: null
                rate: number
            }[]
            cp: number
            cs: boolean
            dl: number
            dlLevel: string
            downloadMaxBrLevel: string
            downloadMaxbr: number
            fee: number
            fl: number
            flLevel: string
            flag: number
            freeTrialPrivilege: {
                resConsumable: boolean
                userConsumable: boolean
                listenType: null
            }
            id: number
            maxBrLevel: string
            maxbr: number
            payed: number
            pl: number
            plLevel: string
            playMaxBrLevel: string
            playMaxbr: number
            preSell: boolean
            rscl: null
            sp: number
            st: number
            subp: number
            toast: boolean
        }[]
        songs: {
            a: null
            al: {
                id: number
                name: string
                pic: number
                picUrl: string
                pic_str: string
                tns: []
            }
            alia: []
            ar: {
                id: number
                name: string
                tns: []
                alias: []
            }[]
            awardTags: null
            cd: string
            cf: string
            copyright: number
            cp: number
            crbt: null
            djId: number
            dt: number
            entertainmentTags: null
            fee: number
            ftype: number
            h: {
                br: number
                fid: number
                size: number
                vd: number
                sr: number
            }
            hr: {
                br: number
                fid: number
                size: number
                vd: number
                sr: number
            }
            id: number
            l: {
                br: number
                fid: number
                size: number
                vd: number
                sr: number
            }
            m: {
                br: number
                fid: number
                size: number
                vd: number
                sr: number
            }
            mark: 536879104
            mst: number
            mv: number
            name: string
            no: number
            noCopyrightRcmd: null
            originCoverType: number
            originSongSimpleData: null
            pop: number
            pst: number
            publishTime: number
            resourceState: true
            rt: string
            rtUrl: null
            rtUrls: []
            rtype: number
            rurl: null
            s_id: number
            single: number
            songJumpInfo: null
            sq: {
                br: number
                fid: number
                size: number
                vd: number
                sr: number
            }
            st: number
            t: number
            tagPicList: null
            v: number
            version: number
        }[]
    }
    sontUrl: {
        code: number
        data: {
            br: number
            canExtend: boolean
            code: number
            effectTypes: null
            encodeType: string
            expi: number
            fee: number
            flag: number
            freeTimeTrialPrivilege: {
                resConsumable: boolean
                userConsumable: boolean
                type: number
                remainTime: number
            }
            freeTrialInfo: null
            freeTrialPrivilege: {
                resConsumable: boolean
                userConsumable: boolean
                listenType: null
            }
            gain: number
            id: number
            level: string
            md5: string
            payed: number
            podcastCtrp: null
            rightSource: number
            size: number
            time: number
            type: string
            uf: null
            url: string
            urlSource: number
        }
    }
    lrc: {
        lyric: string
        version: number
    }
}
const detail = (ids: string | number): Promise<SongType['songDetail']> => {
    return new Promise((resolve, reject) => {
        http.get('/song/detail', { ids }).then((res: any) => {
            if (res.code === 200) return resolve(res)
            return reject(res)
        }).catch(err => reject(err))
    })
}
const url = (id: string | number): Promise<SongType['sontUrl']['data']> => {
    return new Promise((resolve, reject) => {
        http.get('/song/url', { id }).then((res: any) => {
            if (res.code === 200) return resolve(res.data[0])
            return reject(res)
        }).catch(err => reject(err))
    })
}
const check = (id: string | number): Promise<SongType['sontUrl']['data']> => {
    return new Promise((resolve, reject) => {
        http.get('/check/music', { id }).then((res: any) => {
            if (res.success) return resolve(res)
            return reject(res)
        }).catch(err => reject(err))
    })
}

const lyric = (id: number | string): Promise<SongType['lrc']> => {
    return new Promise((resolve, reject) => {
        http.get('/lyric', { id }).then((res: any) => {
            if (res.code === 200) return resolve(res.lrc)
            return reject(res)
        }).catch(err => reject(err))
    })
}
export const songApi = {
    detail,
    url,
    lyric,
    check
}