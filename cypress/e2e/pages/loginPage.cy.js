
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

// class LoginPage {
//     enterURL() {
//      cy.visit(
//        "https://ecommerce-playground.lambdatest.io/index.php?route=account/login"
//      );
//    }
//     enterUserNamePassword(username, password) {
//      cy.get('[id="input-email"]').type(username);
//      cy.get('[id="input-password"]').type(password);
//      return this;
//    }
//     clickSubmitButton() {
//      cy.get('[type="submit"]').eq(0).click();
//      return this;
//    }
//     verifyPageTitle() {
//      return cy.title().should("eq", "Search -");
//    }
//  }

const loginPage = new LoginPage();
export default loginPage;
