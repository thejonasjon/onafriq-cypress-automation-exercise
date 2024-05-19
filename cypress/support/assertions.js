// assert items are sorted by price
Cypress.Commands.add('assertSortedByPrice', (items) => {
    const prices = items.map(item => item.price);
    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).to.deep.equal(sortedPrices);
});

// Verify page or section
Cypress.Commands.add('VerifyPageSection', (text) => {
    cy.contains(text).should('be.visible');
})

// Confirm item(s) added to cart exist
Cypress.Commands.add('VerifyProductAddedToCart', (elSelector, count = 0) => {
    cy.get(elSelector).then(($el) => {
      if (count === 0) {
        cy.wrap($el).find('.cart_quantity').should('exist').and('have.class', 'disabled');
      } else {
        cy.wrap($el).find('tbody > tr').should('have.length.at.least', count);
      }
    });
  });
