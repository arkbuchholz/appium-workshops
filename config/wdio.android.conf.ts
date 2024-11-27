import type { Options } from '@wdio/types'
import { config as baseConfig } from './wdio.appium.conf'

export const config: Options.Testrunner = {
    ...baseConfig,
    capabilities: [
        {
            platformName: 'Android',
            'appium:deviceName': 'emulator-5554',
            'appium:platformVersion': '14.0',
            'appium:automationName': 'UiAutomator2',
            'appium:app': './apps/wikipedia.apk',
            'appium:noReset': false,
            'appium:autoGrantPermissions': true,
            'appium:appWaitActivity': '*'
        }
    ]
}