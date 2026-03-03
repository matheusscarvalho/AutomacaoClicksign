import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import LoginPage from '../../pageObjects/LoginPage';

const loginPage = new LoginPage();

Given('que estou na tela de login', () => {
  loginPage.visit('/');
  loginPage.assertPageLoaded();
});


When('tento logar com usuario bloqueado', () => {
  loginPage.fillUsername('locked_out_user');
  loginPage.fillPassword('secret_sauce');
  loginPage.submit();
});


When('insiro usuario {string} e senha {string}', (usuario, senha) => {
  loginPage.fillUsername(usuario);
  loginPage.fillPassword(senha);
  loginPage.submit();
});

Then('devo acessar a tela de produtos', () => {
  cy.url().should('include', '/inventory');
  loginPage.confirmLoginSuccess();
});

Then('deve exibir mensagem de erro de bloqueio', () => {
  loginPage.getErrorMessage().should('be.visible').and('contain', 'locked out');
});

Then('deve exibir mensagem de erro de credenciais', () => {
  loginPage.getErrorMessage().should('be.visible').and('contain', 'Username and password do not match');
});
