
describe('Search bar', () => {
  
  before(() => {
    const env = Cypress.env('ENV') || 'production';
    const credentials = Cypress.env(env);
    cy.login(credentials.username, credentials.password);
  });

  it('Should select an address using Google Autocomplete', () => {
   
    // Select address from Google Autocomplete
    cy.get('input[id="address_input"]').type('506 6th St, New York, NY 11215, USA', { force: true });
    cy.wait(1000); // Wait for autocomplete suggestions to appear
    cy.get('.pac-item').eq(1).click({ force: true });

    // Validate the address selection
    cy.get('input[id="address_input"]').should('have.value', '506 6th St, New York, Brooklyn, NY 11215, USA');
  });
  
  describe('Property map', () => {
  
    before(() => {
      const env = Cypress.env('ENV') || 'production';
      const credentials = Cypress.env(env);
      cy.login(credentials.username, credentials.password);
    });
  it('should filter properties on the property map', () => {
    // Navigate to Property Map
    cy.visit('/properties');
    
    // Apply some filters
    cy.get('input[data-test="Units-minimum"]').type('10000');  
    cy.get('input[data-test="Units-maximum"]').type('11500'); 
    cy.get('[data-test="B+"]').click();
    cy.get('input[data-test="InnerSuburb-checkbox"]').click();
    
    
    // Validate that the filtering is successful
    cy.get('#property-table').should('contain.text', '9521 White Settlement Rd'); 
  });

  
  describe('Invalid Address Search', () => {
    before(() => {
      const env = Cypress.env('ENV') || 'production';
      const credentials = Cypress.env(env);
      cy.login(credentials.username, credentials.password);
    });
    it('should display an error message for an invalid address', () => {
      // Visit the website
      cy.visit('https://evra.geophy.com/search');
  
      // Enter an invalid address
      cy.get('input[id="address_input"]').type('Invalid address{enter}', { force: true }); 
        
    
     
    });
  });
  });
});
