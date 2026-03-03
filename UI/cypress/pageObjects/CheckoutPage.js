class CheckoutPage {
    constructor() {
        this.checkoutButton = '[data-test="checkout"]';
        this.firstNameInput = '[data-test="firstName"]';
        this.lastNameInput = '[data-test="lastName"]';
        this.postalCodeInput = '[data-test="postalCode"]';
        this.continueButton = '[data-test="continue"]';
        this.finishButton = '[data-test="finish"]';
        this.summarySection = '[data-test="checkout-summary-container"]';
        this.completeHeader = '[data-test="complete-header"]';
        this.completeText = '[data-test="complete-text"]';
        this.backToProductsBtn = '[data-test="back-to-products"]';
        this.ponyExpressImg = '[data-test="pony-express"]';
        this.errorMessage = '[data-test="error"]';
        this.cancelButton = '[data-test="cancel"]';
        this.subtotalLabel = '[data-test="subtotal-label"]';
    }
    assertSubtotalValue(expectedValue) {
        cy.get(this.subtotalLabel).should('contain', expectedValue);
    }

    startCheckout() {
        cy.get(this.checkoutButton).click();
    }

    fillCheckoutInfo(firstName, lastName, postalCode) {
        if (firstName) 
            cy.get(this.firstNameInput).type(firstName);
        if (lastName) 
            cy.get(this.lastNameInput).type(lastName);
        if (postalCode) 
            cy.get(this.postalCodeInput).type(postalCode);
    }

    continueCheckout() {
        cy.get(this.continueButton).click();
    }

    finishCheckout() {
        cy.get(this.finishButton).click();
    }

    clickCancel() {
        cy.get(this.cancelButton).should('exist').and('be.visible').click();
    }

    getErrorMessage() {
        return cy.get(this.errorMessage);
    }

    assertSummaryVisible() {
        cy.get(this.summarySection).should('be.visible');
    }

    assertCheckoutComplete() {
        cy.get('[data-test="secondary-header"]').should('contain', 'Checkout: Complete!');
        cy.get('[data-test="checkout-complete-container"]').should('be.visible');
        cy.get(this.completeHeader).should('contain', 'Thank you for your order!');
        cy.get(this.completeText).should('contain', 'Your order has been dispatched');
        cy.get(this.backToProductsBtn).should('exist').and('be.visible');
        cy.get(this.ponyExpressImg).should('exist').and('be.visible');
    }

    assertErrorMessage(text) {
        cy.get(this.errorMessage).should('exist').and('be.visible').and('contain', text);
    }

    assertFieldHasError(field) {
        cy.get(field).should('have.class', 'error');
    }
}

export default CheckoutPage;
