// Include all modules that we need to execute the test cases

Error.stackTraceLimit = 5;

require('es6-shim');
require('reflect-metadata');

require('zone.js/dist/zone');
require('zone.js/dist/long-stack-trace-zone');
require('zone.js/dist/async-test');
require('zone.js/dist/fake-async-test');
require('zone.js/dist/sync-test');

const testing = require('@angular/core/testing');
const browser = require('@angular/platform-browser-dynamic/testing');

testing.resetBaseTestProviders();

testing.setBaseTestProviders(
  browser.TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS,
  browser.TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS
);

Object.assign(
    global,
    testing,
    {
        ENV: 'development',
        HMR: false
    }
);

// Require all modules ending in ".spec" from the
// current directory and all subdirectories
const testContext = require.context('./src', true, /\.test\.ts/);

// For each module, call the context function
// that will require the file and load it up here.
testContext.keys().forEach(testContext);
