class PurchasePage {

    headerContainer = '[data-test="header-container"]';
    primaryHeader = '[data-test="primary-header"]';
    menuButton = '#react-burger-menu-btn';
    logoutSidebarLink = '[data-test="logout-sidebar-link"]';
    shoppingCartLink = '[data-test="shopping-cart-link"]';
    title = '[data-test="title"]';
    inventoryContainer = '[data-test="inventory-container"]';
    inventoryItem = '[data-test="inventory-item"]';
    addToCartButton = '[data-test^="add-to-cart-"]';
    sortSelect = '[data-test="product-sort-container"]';
    activeSortOption = '[data-test="active-option"]';

    selectSortOption(optionValue) {
        cy.get(this.sortSelect).select(optionValue);
    }

    assertActiveSortOption(text) {
        cy.get(this.activeSortOption).should('contain', text);
    }

    getProductNames() {
        return cy.get(this.inventoryItem).then(items => {
            return [...items].map(el => el.querySelector('[data-test="inventory-item-name"]').innerText);
        });
    }

    getProductPrices() {
        return cy.get(this.inventoryItem).then(items => {
            return [...items].map(el => Number(el.querySelector('[data-test="inventory-item-price"]').innerText.replace(/[^\d.,-]+/g, '').replace(',', '.')));
        });
    }

    getRemoveButton(productName) {
        return cy.get(this.inventoryItem)
            .contains('[data-test="inventory-item-name"]', productName)
            .parents(this.inventoryItem)
            .find('button[data-test^="remove-"]');
    }

    getAddToCartButton(productName) {
        return cy.get(this.inventoryItem)
            .contains('[data-test="inventory-item-name"]', productName)
            .parents(this.inventoryItem)
            .find('button[data-test^="add-to-cart-"]');
    }

    assertRemoveButtonVisible(productName) {
        this.getRemoveButton(productName).should('exist').and('be.visible');
    }

    assertAddToCartButtonVisible(productName) {
        this.getAddToCartButton(productName).should('exist').and('be.visible');
    }

    removeProductFromCart(productName) {
        this.getRemoveButton(productName).click();
    }

    assertPageLoaded() {
        cy.get(this.headerContainer).should('be.visible');
        cy.get(this.primaryHeader).should('be.visible');
        cy.get(this.title).should('contain', 'Products');
        cy.get(this.inventoryContainer).should('be.visible');
    }

    addProductToCart(productName) {
        cy.get(this.inventoryItem).contains('[data-test="inventory-item-name"]', productName)
          .parents(this.inventoryItem)
          .find(this.addToCartButton)
          .click();
    }

    openCart() {
        cy.get(this.shoppingCartLink).click();
    }

    openMenu() {
        cy.get(this.menuButton).click();
    }

    logout() {
        this.openMenu();
        cy.get(this.logoutSidebarLink).click();
    }
}

export default PurchasePage;
