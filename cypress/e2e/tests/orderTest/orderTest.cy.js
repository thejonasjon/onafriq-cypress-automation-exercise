import loginPage from "../../pages/loginPage.cy";
import homePage from "../../pages/homePage.cy";
import cartPage from "../../pages/cartPage.cy";
import checkoutPage from "../../pages/checkoutPage.cy";

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I visit url and have login successfully', () => {
    loginPage.visit();
    cy.fixture('data.json').then((user) => {
        loginPage.clickSignIn();
        loginPage.fillEmail(user.email);
        loginPage.fillPassword(user.password);
    })
    loginPage.submit();
    loginPage.verifySuccessfulLogin()
});

// When('I log in with valid email and password', () => {
//     cy.fixture('data.json').then((user) => {
//         loginPage.clickSignIn();
//         loginPage.fillEmail(user.email);
//         loginPage.fillPassword(user.password);
//     })
// });

// When('User click on sign in button and login successfully', () => {
//     loginPage.submit();
//     loginPage.verifySuccessfulLogin()
// });

When('I fetch and sort featured items', () => {
    cy.fetchAndSortFeaturedItems();
});

When('I ScrollUp - Navigate to Women >> Dress >> Tops section', () => {
    homePage.navigateToWomenTops();
});

When('I will add "Fancy Green Top" and "Summer White Top" to cart', () => {
    cy.fixture('data.json').then((item) => {
        homePage.addToCart(item.item1);
        homePage.continueShopping()
        homePage.addToCart(item.item2);
    })
});

When('I view cart, confirm product and I proceed to checkout', () => {
    cartPage.viewCart();
    checkoutPage.proceedToCheckout();
});

When('I will review and add a comment to my order', () => {
    cy.fixture('data.json').then((comment) => {
        checkoutPage.addComment(comment.comment);
    })
});

When('I will place the order with card details name, number, cvc, month, year', () => {
    cy.fixture('data.json').then((cardDetails) => {
        checkoutPage.placeOrder();
        checkoutPage.fillCardDetails(cardDetails.cardName, cardDetails.cardNumber, cardDetails.cardCVC, cardDetails.cardMonth, cardDetails.cardYear);
        checkoutPage.confirmOrder();
    })
});

Then('I should see the order confirmation message', () => {
    checkoutPage.verifyOrderSuccess();
});