const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.defaultCommandTimeout= 100000
    },
  },
  setupNodeEvents(on, config) {
    if (config.browser.name === 'firefox') {
        config.preferences = {
            'browser.cache.disk.enable': false,
            'browser.cache.memory.enable': false,
            'network.http.use-cache': false,
            'devtools.jsonview.enabled': false, // Disables JSON view for better response display
        };
    }
}});
