const { defineConfig } = require("cypress");
const browserify = require('@cypress/browserify-preprocessor');

module.exports = defineConfig({
  viewportWidt: 1078,
  viewportHeight: 660,
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  env: {
    baseUrl: 'https://www.globalsqa.com/angularJs-protractor/BankingProject/#'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      let options = browserify.defaultOptions;
      options.browserifyOptions.transform[1][1].plugins.push([
        'module-resolver',
        {
          alias: {
            '@root' : './tests',
            '@helpers' : './tests/helpers',
            '@pages' : './tests/pages',
            '@scenarios' : './tests/scenarios'
          },
        },
      ]);
      on('file:preprocessor', browserify(options));
    },
    specPattern: 'tests/scenarios/**/*.test.js'
  },
});
