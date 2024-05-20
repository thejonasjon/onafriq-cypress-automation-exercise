const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    specPattern: "cypress/e2e/tests/*.feature",
    setupNodeEvents(on, config) {
      on("file:preprocessor", cucumber());
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://www.automationexercise.com/',

    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
    requestTimeout: 5000,
    pageLoadTimeout: 30000,

    retries: {
      runMode: 0,
      openMode: 1,
    },
  },
});
