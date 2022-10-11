const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      
    },
   specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}"
  },
 })
