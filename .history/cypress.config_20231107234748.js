const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    projectId: "eibirx",
     experimentalStudio: true,
    defaultCommandTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
