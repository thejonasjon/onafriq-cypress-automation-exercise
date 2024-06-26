import { getFeaturedItems } from "../../support/utils/utils";

class HomePage {
    locators={
        featureItems: '.features_items .productinfo',
        womenPath: 'a[href="#Women"]',
        womenDressPath: 'a[href="/women/dress"]',
        womenTops: 'a[href="/category_products/2"]',
        addToCart: '.add-to-cart',
        continueShop: '.modal-footer > .btn',
        featureItemH2: '.features_items > h2',
        addsBox: '#ad_position_box',
        addsDismissBtn: '#dismiss-button',
    }

    getFeaturedItems() {
        return cy.get(this.locators.featureItems)
    }

    navigateToWomenTops() {
        cy.get(this.locators.womenPath).first().click();
        cy.get(this.locators.womenTops).click();
    }

    addToCart(itemName) {
        cy.get(`.productinfo:contains("${itemName}")`).first().parent().find(this.locators.addToCart).click({multiple: true, force: true});
    }

    continueShopping(){
        cy.get(this.locators.continueShop).click()
    }
}

const homePage = new HomePage();
export  default homePage;