class CheckoutPage {
    locators={
        path: 'a[href="/checkout"]',
        checkoutBtn: '.check_out',
        comment: 'textarea[name="message"]',
        orderBtn: 'a[href="/payment"]',
        name: 'input[data-qa="name-on-card"]',
        number: 'input[data-qa="card-number"]',
        cvc: 'input[data-qa="cvc"]',
        month: 'input[data-qa="expiry-month"]',
        year: 'input[data-qa="expiry-year"]',
        confirmOrderBtn: 'button:contains("Pay and Confirm Order")',
        successOrder: 'h2[data-qa="order-placed"]',
        successOrder2: '.order-confirmation'
    }

    proceedToCheckout() {
        cy.get(this.locators.checkoutBtn).click();
    }

    addComment(comment) {
        cy.get(this.locators.comment).type(comment);
    }

    placeOrder() {
        cy.get(this.locators.orderBtn).click();
    }

    fillCardDetails(name, number, cvc, month, year) {
        cy.get(this.locators.name).type(name);
        cy.get(this.locators.number).type(number);
        cy.get(this.locators.cvc).type(cvc);
        cy.get(this.locators.month).type(month);
        cy.get(this.locators.year).type(year);
    }

    confirmOrder() {
        cy.get(this.locators.confirmOrderBtn).click();
    }

    verifyOrderSuccess() {
        cy.get(this.locators.successOrder).should('contain', 'Order Placed!');
        cy.contains('Congratulations! Your order has been confirmed!');
    }
}

const checkoutPage = new CheckoutPage();
export default checkoutPage;
