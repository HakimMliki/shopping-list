const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './e2e/*_test.e2e.js',
  output: './e2e/output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost',
      show: false,
      windowSize: '1200x900',
      chrome: {
        args: ['--no-sandbox', '–disable-setuid-sandbox', '--window-size=1280,960'],
        defaultViewport: null
      }
    }
  },
  include: {
    I: './e2e/steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'shopping-list',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}