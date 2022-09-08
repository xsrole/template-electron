import http from "@@/axios";
export type SearchType = {
    vagueSearch: {
        albums: {
            name: string,
            artist: {
                albumSize: number
                alias: any[]
                fansGroup: null
                id: number
                img1v1: number
                img1v1Url: string
                name: string
                picId: number
                picUrl: string
                trans: null
            }
            copyrightId: number
            id: number
            mark: number
            picId: number
            publishTime: number
            size: number
            status: number
        }[]
        artists: {
            accountId: number
            albumSize: number
            alias: []
            fansGroup: number
            id: number
            img1v1: number
            img1v1Url: string
            name: string
            picId: number
            picUrl: string
            trans: null
        }[]
        order: string[]
        playlists: {
            action: null
            actionType: null
            bookCount: number
            coverImgUrl: string
            creator: null
            description: string
            highQuality: false
            id: number
            name: string
            officialTags: null
            playCount: number
            recommendText: null
            score: null
            specialType: number
            subscribed: false
            trackCount: number
            userId: number
        }[]
        songs: {
            album: {
                artist: {
                    albumSize: number
                    alias: any[]
                    fansGroup: null
                    id: number
                    img1v1: number
                    img1v1Url: string
                    name: string
                    picId: number
                    picUrl: null
                    trans: null
                }
                copyrightId: number
                id: number
                mark: number
                name: string
                picId: number
                publishTime: number
                size: number
                status: number
            }
            alias: string[]
            artists: {
                albumSize: number
                alias: []
                fansGroup: null
                id: number
                img1v1: number
                img1v1Url: string
                name: string
                picId: number
                picUrl: null
                trans: null
            }[]
            copyrightId: number
            duration: number
            fee: number
            ftype: number
            id: number
            mark: number
            mvid: number
            name: string
            rUrl: null
            rtype: number
            status: number
        }[]
    }
    hotSearch: {
        alg: string
        content: string
        iconType: number
        iconUrl: string
        score: number
        searchWord: string
        source: number
        url: string
    }[]
    searchResult: {
        searchQcReminder: null
        songCount: number
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
                alia: string[]
                alias: string[]
                id: number
                name: string
                tns: []
            }[]
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
            h: { br: number, fid: number, size: number, vd: number, sr: number }
            hr: { br: number, fid: number, size: number, vd: number, sr: number }
            id: number
            l: { br: number, fid: number, size: number, vd: number, sr: number }
            m: { br: number, fid: number, size: number, vd: number, sr: number }
            mark: number
            mst: number
            mv: number
            name: string
            no: number
            noCopyrightRcmd: null
            originCoverType: number
            originSongSimpleData: null
            pop: number
            privilege: {
                chargeInfoList: {
                    chargeMessage: null
                    chargeType: number
                    chargeUrl: null
                    rate: number
                }[]
                cp: number
                cs: Boolean
                dl: number
                dlLevel: string
                downloadMaxBrLevel: string
                downloadMaxbr: number
                fee: number
                fl: number
                flLevel: string
                flag: number
                freeTrialPrivilege: {
                    resConsumable: Boolean
                    userConsumable: Boolean
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
                preSell: Boolean
                rscl: null
                sp: number
                st: number
                subp: number
                toast: Boolean
            }
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
}

const vagueSearch = (val: string): Promise<SearchType['vagueSearch']> => {
    return new Promise((resolve, reject) => {
        http.get('/search/suggest', { keywords: val }).then((res: any) => {
            if (res.code === 200 && Object.keys(res.result).length !== 0) return resolve(res.result)
            return reject(res)
        }).catch(err => reject(err))
    })
}
const hotSearch = (): Promise<SearchType['hotSearch']> => {
    return new Promise((resolve, reject) => {
        http.get('/search/hot/detail').then((res: any) => {
            if (res.code === 200) return resolve(res.data as any)
            return reject(res)
        }).catch(err => reject(err))
    })
}
const search = (keywords: string, limit?: number, offset?: number, type?: number): Promise<SearchType['searchResult']> => {
    return new Promise((resolve, reject) => {
        http.get('/cloudsearch', { keywords, limit, offset, type }).then((res: any) => {
            if (res.code === 200 && res.result) return resolve(res.result as any)
            return reject(res)
        }).catch(err => reject(err))
    })
}
export const searchApi = {
    vagueSearch,
    hotSearch,
    search
}