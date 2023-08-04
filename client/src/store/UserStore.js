import {makeAutoObservable} from "mobx";

export default class UserStore {
    constructor() {
        //This variable with underscore because it's agreement and this variable do not change
        this._auth = false
        this._user = {}
        //Overview for this variables
        makeAutoObservable(this)
    }

    setIsAuth(bool) {
        this._auth = bool
    }

    setUser(user) {
        this._user = user
    }

    get isAuth() {
        return this._auth
    }

    get user() {
        return this._user
    }
}
