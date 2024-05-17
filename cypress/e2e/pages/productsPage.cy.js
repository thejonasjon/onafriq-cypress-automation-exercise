class ProductsPage {
    locators={
        // path: 'a[href="/products"]',
        womenPath: 'a[href="#women',
        womenDressPath: 'a[href*="women/dress',
        womenTops: 'a[href="category_products/2"]',
        addToCart: '.add-to-cart',

    }

    locator = this.locators

    navigateToWomenTops() {
      cy.get(locator.womenPath).first().click();
      cy.get(locator.womenTops).click();
    }

    addToCart(itemName) {
      cy.get(`.productinfo:contains("${itemName}")`).first().parent().find(locator.addToCart).click();
    }
}

const productsPage = new ProductsPage();
export default productsPage;