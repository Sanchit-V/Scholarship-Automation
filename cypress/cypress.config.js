const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotsFolder: 'C:\Users\Sanchit\Desktop\Scholarship Interface\cypress\screenshots';
      videosFolder : 'C:\Users\Sanchit\Desktop\Scholarship Interface\cypress\screenshots'
    },
  },
});
