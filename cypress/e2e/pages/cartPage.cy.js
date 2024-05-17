class CartPage {
    locators={
        path: 'a[href="/view_cart"]',
    }

    locator = this.locators

    viewCart() {
      cy.get(locator.path).click();
    }
}

const cartPage = new CartPage();
export default cartPage;