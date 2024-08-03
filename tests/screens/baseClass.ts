export default class BaseClass {
    _appName: string

    constructor(appName?: string) {
        this._appName = appName ?? ''
    }
}