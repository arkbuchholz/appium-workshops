import { config as baseConfig } from './wdio.shared.conf'
// import type { Options } from '@wdio/types'


export const config = {
    ...baseConfig,
    user: process.env.BROWSERSTACK_USERNAME || 'arkadiuszbuchhol_kFoqdw',
    key: process.env.BROWSERSTACK_ACCESS_KEY || 'PAcyyvVWFDo9j6NDZzRU',
    services: [
        ['browserstack', {
            app: './apps/wikipedia.apk',
            buildIdentifier: '#${DATE_TIME} #${BUILD_NUMBER}'
        }]
    ],
    capabilities: [{
        "platformName": "android",
        "appium:platformVersion": "12.0",
        "appium:deviceName": "Samsung Galaxy S22 Ultra",
        "bstack:options": {
            "debug": "true",
            "networkLogs": "true",
            "projectName": "Onboarding",
            "buildName": "Test build"
        }
    }]
}