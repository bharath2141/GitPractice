const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qtt8tb',
  chromeWebSecurity: false,
  defaultCommandTimeout:8000,
  env:
  {
    
    url: "https://rahulshettyacademy.com/angularpractice/"
  },
 
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/examples/*.js'
  },
  
});
