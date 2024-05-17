class CheckoutPage {
    locators={
        path: 'a[href="/checkout"]',
        comment: 'textarea[name="message"]',
        orderBtn: 'input[href="/payment"]',
        name: 'input[data-qa="name_on_card"]',
        number: 'input[data-qa="card-number"]',
        cvc: 'input[data-qa="cvc"]',
        month: 'input[data-qa="expiry_month"]',
        year: 'input[data-qa="expiry_year"]',
        confirOrderBtn: 'button:contains("Pay and Confirm Order")',
        successOrder: '.order-confirmation',
        message: 'Your order has been placed successfully',
        OrderPlaced: 'Order Placed!',
    }

    locator = this.locators

    proceedToCheckout() {
      cy.get(locator.path).click();
    }

    addComment(comment) {
      cy.get(locator.comment).type(comment);
    }

    placeOrder() {
      cy.get(locator.orderBtn).click();
    }

    fillCardDetails(name, number, cvc, month, year) {
      cy.get(locator.name).type(name);
      cy.get(locator.number).type(number);
      cy.get(locator.cvc).type(cvc);
      cy.get(locator.month).type(month);
      cy.get(locator.year).type(year);
    }

    confirmOrder() {
      cy.get(locator.confirOrderBtn).click();
    }

    verifyOrderSuccess() {
      cy.get(locator.successOrder).should('contain', locator.message);
    }
}

const checkoutPage = new CheckoutPage();
export default checkoutPage;
