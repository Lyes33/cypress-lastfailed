How use the plugin cypress run test last faild

- Install the grep plugin 
    npm install --save-dev @bahmutov/cy-grep

- Install the last test fail plugin
    npm install --save-dev cypress-plugin-last-failed

- Add this line in e2e.js
    import { failedTestToggle } from 'cypress-plugin-last-failed';

    const registerCypressGrep = require('@bahmutov/cy-grep');
    registerCypressGrep();

    failedTestToggle();

- Add this line in cypress confing js
    const { defineConfig } = require('cypress');
const { collectFailingTests } = require('cypress-plugin-last-failed');

module.exports = defineConfig({
  screenshotOnRunFailure: false,
  env: {
    grepOmitFiltered: true,
    grepFilterSpecs: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      collectFailingTests(on, config);

      require('@bahmutov/cy-grep/src/plugin')(config);
      return config;
    },
  },
})

- Run the command to execute test
    npx cypress run

- Run the command to execute test fail
    npx cypress-plugin-last-failed run
or
    npx cypress-plugin-last-failed run --e2e --browser chrome