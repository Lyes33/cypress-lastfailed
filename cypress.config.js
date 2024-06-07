const { defineConfig } = require("cypress");
const { collectFailingTests } = require('cypress-plugin-last-failed');

module.exports = defineConfig({
  screenshotOnRunFailure: false,
  env: {
    grepOmitFiltered: true,
    grepFilterSpecs: true,
  },
  chromeWebSecurity:false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      collectFailingTests(on, config);

      require('@bahmutov/cy-grep/src/plugin')(config);
      return config;
    },
  },
});
