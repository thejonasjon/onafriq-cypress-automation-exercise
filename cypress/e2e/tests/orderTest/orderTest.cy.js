import loginPage from "../../pages/loginPage.cy";
import homePage from "../../pages/homePage.cy";
import cartPage from "../../pages/cartPage.cy";
import checkoutPage from "../../pages/checkoutPage.cy";

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

beforeEach(() => {
    cy.removePopUp(homePage.addsDismissBtn);
});

Given('I visit url and have login successfully', () => {
    loginPage.visit();
    cy.fixture('data.json').then((el) => {
        loginPage.clickSignIn();
        cy.VerifyPageSection(el.loginH1Text)
        loginPage.fillEmail(el.email);
        loginPage.fillPassword(el.password);
    })
    loginPage.submit();
    loginPage.verifySuccessfulLogin()
});

When('I fetch and sort featured items', () => {
    cy.fixture('data.json').then((el) => {
        cy.VerifyPageSection(el.featureItemH2Text)
        cy.fetchAndSortFeaturedItems();
    })
});

When('I ScrollUp - Navigate to Women >> Dress >> Tops section', () => {
    homePage.navigateToWomenTops();
});

When('I will add "Fancy Green Top" and "Summer White Top" to cart', () => {
    cy.fixture('data.json').then((el) => {
        homePage.addToCart(el.item1);
        cy.VerifyPageSection(el.addedToCartH1Text)
        homePage.continueShopping()
        homePage.addToCart(el.item2);
    })
});

When('I view cart, confirm product and I proceed to checkout', () => {
    cy.fixture('data.json').then((el) => {
        cartPage.viewCart();
        cy.VerifyPageSection(el.shoppingCartPageText)
        cy.VerifyProductAddedToCart(cartPage.locators.cartInfoTable, 2)
        checkoutPage.proceedToCheckout();
    })
});

When('I will review and add a comment to my order', () => {
    cy.fixture('data.json').then((el) => {
        cy.VerifyPageSection(el.reviewOrderSectionText)
        checkoutPage.addComment(el.comment);
    })
});

When('I will place the order with card details name, number, cvc, month, year', () => {
    cy.fixture('data.json').then((el) => {
        cy.VerifyPageSection(el.reviewOrderSectionText)
        checkoutPage.placeOrder();
        checkoutPage.fillCardDetails(el.cardName, el.cardNumber, el.cardCVC, el.cardMonth, el.cardYear);
        checkoutPage.confirmOrder();
    })
});

Then('I should see the order confirmation message', () => {
    checkoutPage.verifyOrderSuccess();
});