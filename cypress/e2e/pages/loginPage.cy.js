
class LoginPage {
    locators={
        path: 'a[href="/login"]',
        email: 'input[data-qa="login-email"]',
        password: 'input[data-qa="login-password"]',
        submitBtn: 'button[data-qa="login-button"]',
    };

    locator = this.locators

    visit() {
      cy.visit('/');
    }

    clickSignIn() {
      cy.get(locator.path).click();
    }

    fillEmail(email) {
      cy.get(locator.email).type(email);
    }

    fillPassword(password) {
      cy.get(locator.password).type(password);
    }

    submit() {
      cy.get(locator.submitBtn).click();
    }
}

const loginPage = new LoginPage();
export default loginPage;
