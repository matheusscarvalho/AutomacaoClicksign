class CartPage {
    cartItem = '[data-test="inventory-item"]';
    cartBadge = '[data-test="shopping-cart-badge"]';
    cartList = '[data-test="cart-list"]';
    cartItemName = '[data-test="inventory-item-name"]';
    cartItemPrice = '[data-test="inventory-item-price"]';
    cartItemDesc = '[data-test="inventory-item-desc"]';
    cartItemQuantity = '[data-test="item-quantity"]';
    continueShoppingBtn = '[data-test="continue-shopping"]';
    checkoutBtn = '[data-test="checkout"]';
    cartContentsContainer = '[data-test="cart-contents-container"]';
    removeButton = 'button[data-test^="remove-"]';

    assertProductInCart(product) {
        cy.get(this.cartItem)
            .contains(this.cartItemName, product.name)
            .parents(this.cartItem)
            .within(() => {
                cy.get(this.cartItemName).should('contain', product.name);
                cy.get(this.cartItemPrice).should('contain', product.price);
                cy.get(this.cartItemDesc).should('contain', product.description);
                cy.get(this.cartItemQuantity).should('contain', '1');
                cy.get(this.removeButton).should('exist').and('be.visible');
            });
    }

    assertCartBadge(count) {
        cy.get(this.cartBadge).should('contain', count);
    }

    assertAllProductsInCart(products) {
        products.forEach(product => {
            this.assertProductInCart(product);
        });
    }

    assertFooterButtons() {
        cy.get(this.continueShoppingBtn).should('exist').and('be.visible');
        cy.get(this.checkoutBtn).should('exist').and('be.visible');
    }

    openCart() {
        cy.get('[data-test="shopping-cart-link"]').click();
    }

    continueShopping() {
        cy.get(this.continueShoppingBtn).click();       
    }

    getCartItems() {
        return cy.get(this.cartItem);
    }
}

export default CartPage;
