import { config } from './wdio.shared.conf';
import {
  BrowserStackCapabilities,
  VendorExtensions,
} from '@wdio/types/build/Capabilities';

const ANDROID = 'ANDROID';
const platform = process.env.PLATFORM;

config.user = process.env.BROWSERSTACK_USERNAME || 'arkadiuszbuchhol_kFoqdw';
config.key = process.env.BROWSERSTACK_ACCESS_KEY || 'PAcyyvVWFDo9j6NDZzRU';
config.services = [
  [
    'browserstack',
    {
      app: `./apps/wikipedia.${platform === ANDROID ? 'apk' : 'ipa'}`,
      buildIdentifier: '#${DATE_TIME} #${BUILD_NUMBER}',
    },
  ],
];

const bstackCaps: BrowserStackCapabilities = {
  debug: true,
  networkLogs: true,
  projectName: 'Onboarding',
  buildName: 'Test build',
};

const sharedCaps: VendorExtensions = {
  'bstack:options': bstackCaps,
};

const iOSCaps = {
  platformName: 'iOS',
  'appium:platformVersion': '18',
  'appium:deviceName': 'iPhone 16',
};

const androidCaps = {
  platformName: 'android',
  'appium:platformVersion': '12.0',
  'appium:deviceName': 'Samsung Galaxy S22 Ultra',
};

const platformCaps = platform === ANDROID ? androidCaps : iOSCaps;

config.capabilities = [{ ...sharedCaps, ...platformCaps }];

export { config };
