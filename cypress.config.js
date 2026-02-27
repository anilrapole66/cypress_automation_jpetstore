const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'j2fovz',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: false,
    json: true
  },

  e2e: {
    baseUrl: "https://petstore.octoperf.com/actions",
    chromeWebSecurity: false,
    watchForFileChanges: true,

    video: true,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: false,

    setupNodeEvents(on, config) {},
  },
});