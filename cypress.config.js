const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://evra.geophy.com",
    env: {
      production: {
        baseUrl: "https://evra.geophy.com",
        username: 'evraqamanual@test.wd.com',
        password: 'Asdfgh@123'
      },
      staging: {
        baseUrl: "https://staging.evra.geophy.com",
        username: "staging-username",
        password: "staging-password"
      },
      development: {
        baseUrl: "https://dev.evra.geophy.com",
        username: "dev-username",
        password: "dev-password"
      }
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    }
  }
});
