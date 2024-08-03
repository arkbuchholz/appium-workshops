import BaseClass from "../baseClass";

export class LoginSelectors extends BaseClass {
    get LoginBtn() {
        const selectorIOS = '-ios class chain:**/XCUIElementTypeOther[`name == "button-LOGIN"`]'
        const selectorAndroid = 'android=new UiSelector().description("button-LOGIN")'
        return $(driver.isAndroid ? selectorAndroid : selectorIOS)
    }
}