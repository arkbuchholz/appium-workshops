export class BaseClass {
    constructor() { }
    getPlatformSelector(selectorIOS: ChainablePromiseElement, selectorAndroid: ChainablePromiseElement) {
        return driver.isAndroid ? selectorAndroid : selectorIOS
    }

    getSelector(iOSpredicate: string,  androidPredicate: string, method = 'resourceId') {
        const selectorIOS = $(`~${iOSpredicate}`)
        const selectorAndroid = $(`android=new UiSelector().${method}("${androidPredicate}")`)
        return this.getPlatformSelector(selectorIOS, selectorAndroid)
    }
}