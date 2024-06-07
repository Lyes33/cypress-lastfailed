const { defineConfig } = require("cypress");
const { collectFailingTests } = require('cypress-plugin-last-failed');

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  screenshotOnRunFailure: false,
  env: {
    grepOmitFiltered: true,
    grepFilterSpecs: true,
  },
  chromeWebSecurity:false,
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      collectFailingTests(on, config);

      require('@bahmutov/cy-grep/src/plugin')(config);
      return config;
    },
  },
});
