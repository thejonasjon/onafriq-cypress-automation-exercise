// cypress/support/utils/utils.js

// Utility function to remove adds pop-ups
Cypress.Commands.add('removePopUp', (elSelector) => {
    cy.get('body').then(($body) => {
      if ($body.find(elSelector).length > 0) {
        cy.get(elSelector).then($popup => {
          cy.wrap($popup).invoke('remove');
        });
      }
    });
  });
