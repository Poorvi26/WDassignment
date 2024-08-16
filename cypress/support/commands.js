// Custom commands or before/after hooks can go here
// cypress/support/commands.js
Cypress.Commands.add('login', (username, password) => {
    cy.visit('https://evra.geophy.com/');
    cy.get('[data-test="login-button"]').click({ force: true });
    cy.get('input[id="input27"]').type('evraqamanual@test.wd.com');
    cy.get('input[value="Next"]').click();
    cy.get('input[id="input63"]').type('Asdfgh@123');
    cy.get('input[value="Verify"]').click();
    cy.url().should('include', '/search');
  });
  

  


