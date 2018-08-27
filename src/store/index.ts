import axios from "axios"
import { observable } from "mobx"

const appSecret = "V6ROMnzK4BYuNVK9Twsi5iVbf6Zg5diO"
axios.defaults.baseURL = "https://misskey.xyz/api/"

interface IAuthSession {
    token: string
    url: string
}

interface IMisskeyUser {
    id: string
    name: string
    username: string
    avatarUrl: string
    host?: string
}

interface ITokenInfo {
    accessToken: string
    user: IMisskeyUser
}

export class StoreClass {
    @observable
    misskeyLoggedInUser?: ITokenInfo

    @observable
    misskeyAuthSession?: IAuthSession

    async startLogin() {
        const sessionReq = await axios.post<IAuthSession>("auth/session/generate", {
            appSecret,
        })
        this.misskeyAuthSession = sessionReq.data
    }

    async userAuthorizedLogin() {
        const tokenReq = await axios.post<ITokenInfo>("auth/session/userkey", {
            appSecret,
            token: this.misskeyAuthSession!.token,
        })
        this.misskeyLoggedInUser = tokenReq.data
        this.misskeyAuthSession = undefined
    }
}

export const store = new StoreClass()
