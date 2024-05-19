class CartPage {
    locators={
        path: 'a[href="/view_cart"]',
    }

    viewCart() {
        cy.get('.modal-content').within(() => {
            cy.get(this.locators.path).should('contain', 'View Cart').click()
        })
    }
}

const cartPage = new CartPage();
export default cartPage;