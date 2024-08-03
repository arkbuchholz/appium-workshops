
import { config as baseConfig } from './wdio.appium.conf'

export const config: WebdriverIO.Config = {
    ...baseConfig,
    capabilities: [
        {
            platformName: 'iOS',
            'appium:deviceName': 'iPhone 15 Pro',
            'appium:platformVersion': '17.0',
            'appium:automationName': 'XCUITest',
            'appium:app': './apps/wdio-ios.zip'
        }
    ]
}