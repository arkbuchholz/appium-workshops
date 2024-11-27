
export const config: WebdriverIO.Config = {
    runner: 'local',
    specs: ['../src/tests/**/*.spec.ts'],
    exclude: [],
    maxInstances: 1,
    capabilities: [],
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}