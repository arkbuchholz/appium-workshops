import { config as baseConfig } from './wdio.appium.conf'

export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': 'emulator-5554',
            'appium:platformVersion': '14.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': './apps/wdio-android.apk'
        }
    ]
}