// cypress/support/commands.js

import checkoutPage from "../e2e/pages/checkoutPage.cy";

// Fetches the featured items and sorts them by price.
Cypress.Commands.add('fetchAndSortFeaturedItems', () => {
    const items = [];

    cy.get('.features_items .col-sm-4').each(($el) => {
      const label = $el.find('.productinfo h2').text();
      const price = parseFloat($el.find('.productinfo .price').text().replace('$', ''));
      items.push({ label, price });
    }).then(() => {
      items.sort((a, b) => a.price - b.price);
      console.log(items);
    });

    return cy.wrap(items);
});

// Command to dump long text instaed of type
Cypress.Commands.add('setTextArea', (elSelector, text) => {
    cy.get(elSelector).then($textarea => {
      $textarea.val(text);
      cy.wrap($textarea).trigger('input');
    });
  });