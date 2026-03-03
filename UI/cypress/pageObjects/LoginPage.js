class LoginPage {

    loginContainer = '[data-test="login-container"]';
    usernameInput = 'input[data-test="username"]';
    passwordInput = 'input[data-test="password"]';
    loginButton = 'input[data-test="login-button"]';
    errorMessage = '.error-message-container';
    headerContainer = '[data-test="header-container"]';
    primaryHeader = '[data-test="primary-header"]';
    title = '[data-test="title"]';
    inventoryContainer = '[data-test="inventory-container"]';

    visit() {
        cy.visit('/');
        this.assertPageLoaded();
    }

    assertPageLoaded() {
        cy.get(this.loginContainer).should('be.visible');
        cy.get(this.usernameInput).should('be.visible');
        cy.get(this.passwordInput).should('be.visible');
        cy.get(this.loginButton).should('be.visible');
    }

    fillUsername(username) {
        cy.get(this.usernameInput).type(username);
    }

    fillPassword(password) {
        cy.get(this.passwordInput).type(password);
    }

    submit() {
        cy.get(this.loginButton).click();
    }

    getErrorMessage() {
        return cy.get(this.errorMessage);
    }

    confirmLoginSuccess() {
        cy.get(this.headerContainer).should('be.visible');
        cy.get(this.primaryHeader).should('be.visible');
        cy.get(this.title).should('contain', 'Products');
        cy.get(this.inventoryContainer).should('be.visible');
    }
}

export default LoginPage;
