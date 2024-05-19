Cypress.Commands.add('assertSortedByPrice', (items) => {
    const prices = items.map(item => item.price);
    const sortedPrices = [...prices].sort((a, b) => a - b);
    expect(prices).to.deep.equal(sortedPrices);
  });
