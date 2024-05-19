
class LoginPage {
    locators={
        path: 'a[href="/login"]',
        logOut: 'a[href="/logout"]',
        email: 'input[data-qa="login-email"]',
        password: 'input[data-qa="login-password"]',
        submitBtn: 'button[data-qa="login-button"]',
    };


    visit() {
      cy.visit('https://www.automationexercise.com/');
    }

    clickSignIn() {
      cy.get(this.locators.path).click();
    }

    fillEmail(email) {
      cy.get(this.locators.email).type(email);
    }

    fillPassword(password) {
      cy.get(this.locators.password).type(password);
    }

    submit() {
      cy.get(this.locators.submitBtn).click();
    }

    verifySuccessfulLogin() {
        cy.get(this.locators.logOut).should('contain', 'Logout');
      }
}

const loginPage = new LoginPage();
export default loginPage;
