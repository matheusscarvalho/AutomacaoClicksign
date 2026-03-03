import LoginPage from '../pageObjects/LoginPage';
import './hooks';

const { validUsers } = Cypress.env('login');

Cypress.Commands.add('login', (username, password) => {
    if (!password) {
        const userData = validUsers && validUsers[username] ? validUsers[username] : { username, password: 'secret_sauce' };
        cy.session([userData.username, userData.password], () => {
            loginViaUI(userData.username, userData.password);
        });
    } else {
        cy.session([username, password], () => {
            loginViaUI(username, password);
        });
    }
});

Cypress.Commands.add('loginNoSession', (username, password) => {
    cy.clearCookies();
    cy.clearLocalStorage();
    
    if (!password) {
        const userData = validUsers && validUsers[username] ? validUsers[username] : { username, password: 'secret_sauce' };
        loginViaUI(userData.username, userData.password);
    } else {
        loginViaUI(username, password);
    }
});

function loginViaUI(username, password) {
    const loginPage = new LoginPage();
    loginPage.visit('/');
    loginPage.assertPageLoaded();
    loginPage.fillUsername(username);
    loginPage.fillPassword(password);
    loginPage.submit();
}

