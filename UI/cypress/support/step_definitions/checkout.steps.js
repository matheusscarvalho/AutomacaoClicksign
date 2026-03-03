

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import CheckoutPage from '../../pageObjects/CheckoutPage';
import CartPage from '../../pageObjects/CartPage';
import PurchasePage from '../../pageObjects/PurchasePage';
import products from '../../fixtures/products.json';

const checkoutPage = new CheckoutPage();
const cartPage = new CartPage();
const purchasePage = new PurchasePage();


When('adiciono um produto ao carrinho e realizo o checkout com dados validos', () => {
  purchasePage.addProductToCart(products[0].name);
  cartPage.assertCartBadge(1);
  cartPage.openCart();
  checkoutPage.startCheckout();
  checkoutPage.fillCheckoutInfo('João', 'Silva', '12345');
  checkoutPage.continueCheckout();
});

Then('o checkout deve ser concluido com sucesso', () => {
  checkoutPage.assertSummaryVisible();
  checkoutPage.finishCheckout();
  checkoutPage.assertCheckoutComplete();
});

When('adiciono todos os produtos ao carrinho e realizo o checkout', () => {
  products.forEach(product => {
    purchasePage.addProductToCart(product.name);
  });
  cartPage.assertCartBadge(products.length);
  cartPage.openCart();
  checkoutPage.startCheckout();
  checkoutPage.fillCheckoutInfo('Maria', 'Oliveira', '54321');
  checkoutPage.continueCheckout();
});

Then('o resumo deve mostrar o total correto e o checkout deve ser concluido', () => {
  checkoutPage.assertSummaryVisible();
  const itemTotal = products.reduce((sum, p) => sum + p.price, 0);
  checkoutPage.assertSubtotalValue(itemTotal.toFixed(2));
  checkoutPage.finishCheckout();
  checkoutPage.assertCheckoutComplete();
});

Given('que estou na tela de checkout', () => {
  cy.loginNoSession('standard_user');
  purchasePage.assertPageLoaded();
  purchasePage.addProductToCart(products[0].name);
  cartPage.assertCartBadge(1);
  cartPage.openCart();
  checkoutPage.startCheckout();
});

When('deixo todos os campos obrigatorios vazios e tento continuar', () => {
  checkoutPage.fillCheckoutInfo('', '', '');
  checkoutPage.continueCheckout();
});

Then('deve exibir uma mensagem de erro e impedir o avanco', () => {
  checkoutPage.getErrorMessage().should('exist').and('be.visible');
});

When('clico em Cancel', () => {
  checkoutPage.clickCancel();
});

Then('devo retornar para a tela do carrinho', () => {
  cy.url().should('include', '/cart');
});

When('deixo o campo First Name vazio e tento continuar', () => {
  checkoutPage.fillCheckoutInfo('', 'Silva', '12345');
  checkoutPage.continueCheckout();
});

Then('deve exibir mensagem de erro "First Name is required" e destacar o campo', () => {
  checkoutPage.assertErrorMessage('First Name is required');
  checkoutPage.assertFieldHasError(checkoutPage.firstNameInput);
});

When('deixo o campo Last Name vazio e tento continuar', () => {
  checkoutPage.fillCheckoutInfo('João', '', '12345');
  checkoutPage.continueCheckout();
});

Then('deve exibir mensagem de erro "Last Name is required" e destacar o campo', () => {
  checkoutPage.assertErrorMessage('Last Name is required');
  checkoutPage.assertFieldHasError(checkoutPage.lastNameInput);
});

When('deixo o campo Postal Code vazio e tento continuar', () => {
  checkoutPage.fillCheckoutInfo('João', 'Silva', '');
  checkoutPage.continueCheckout();
});

Then('deve exibir mensagem de erro "Postal Code is required" e destacar o campo', () => {
  checkoutPage.assertErrorMessage('Postal Code is required');
  checkoutPage.assertFieldHasError(checkoutPage.postalCodeInput);
});

When('insiro caracteres especiais no campo Postal Code e tento continuar', () => {
  checkoutPage.fillCheckoutInfo('João', 'Silva', '@!#$$%');
  checkoutPage.continueCheckout();
});

Then('deve exibir mensagem de erro e destacar o campo', () => {
  checkoutPage.assertErrorMessage('Postal Code is required');
  checkoutPage.assertFieldHasError(checkoutPage.postalCodeInput);
});
