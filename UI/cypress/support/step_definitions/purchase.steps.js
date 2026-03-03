import { Given } from '@badeball/cypress-cucumber-preprocessor';
import PurchasePage from '../../pageObjects/PurchasePage';

const purchasePage = new PurchasePage();

Given('que estou na tela de produtos', () => {
  cy.loginNoSession('standard_user');
  purchasePage.assertPageLoaded();
});
