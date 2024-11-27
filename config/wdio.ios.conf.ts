import type { Options } from '@wdio/types'
import { config as baseConfig } from './wdio.appium.conf'

export const config: Options.Testrunner = {
    ...baseConfig,
    capabilities: [
        {
            platformName: 'iOS',
            'appium:deviceName': 'iPhone 15 Pro',
            'appium:platformVersion': '17.0',
            'appium:automationName': 'XCUITest',
            'appium:app': './apps/wikipedia.zip',
            'appium:noReset': true
        },
    ]
}
