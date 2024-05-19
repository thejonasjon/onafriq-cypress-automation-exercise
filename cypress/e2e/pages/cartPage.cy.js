class CartPage {
    locators={
        path: 'a[href="/view_cart"]',
        cartPageItems: '#cart_items',
        cartInfo: '#cart_info',
        cartInfoTable: '#cart_info_table',
        tableTr: 'tr > #product-2',
        cartQuantity: '.cart_quantity',
        addedToCartModal: '.cartModal',

    }

    viewCart() {
        cy.get('.modal-content').within(() => {
            cy.get(this.locators.path).should('contain', 'View Cart').click()
        })
    }
}

const cartPage = new CartPage();
export default cartPage;