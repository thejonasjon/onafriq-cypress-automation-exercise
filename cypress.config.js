const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.automationexercise.com/',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 10000,
      requestTimeout: 5000,
      pageLoadTimeout: 30000,
    retries: {
      runMode: 2,
      openMode: 1,
    },
  },
});
