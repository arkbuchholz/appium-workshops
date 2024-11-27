import { config as baseConfig } from './wdio.shared.conf';
import dotenv from 'dotenv';

dotenv.config();

export const config = {
  ...baseConfig,
  user: process.env.BROWSERSTACK_USERNAME,
  key: process.env.BROWSERSTACK_ACCESS_KEY,
  services: [
    [
      'browserstack',
      {
        app: '../apps/wikipedia.apk',
        buildIdentifier: '#${DATE_TIME} #${BUILD_NUMBER}',
      },
    ],
  ],
  capabilities: [
    {
      platformName: 'android',
      'appium:platformVersion': '12.0',
      'appium:deviceName': 'Samsung Galaxy S22 Ultra',
      'bstack:options': {
        debug: 'true',
        networkLogs: 'true',
        projectName: 'Onboarding',
        buildName: 'Test build',
      },
    },
  ],
};
