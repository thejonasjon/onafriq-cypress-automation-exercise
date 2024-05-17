class HomePage {
    locators={
        featureItems: '.features_items .productinfo',

    }
    locator = this.locators

    getFeaturedItems() {
      return cy.get(locator.featureItems);
    }
}

const homePage = new HomePage();
export  default homePage;
