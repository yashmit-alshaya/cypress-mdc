const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    // testIsolation: true,
    testIsolation: false,
    hideXHRInCommandLog: true,
  },
});
