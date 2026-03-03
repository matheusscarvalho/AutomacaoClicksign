# AutomacaoAvivatec Cypress

Estrutura de testes frontend usando Cypress e PageObjects.

## Instalação

```bash
npm install
```

## Rodando os testes

Para rodar os testes em cada ambiente:

```bash
npm run cypress:open:dev
npm run cypress:open:qa
```

ou headless:

```bash
npm run cypress:run:dev
npm run cypress:run:qa
```


## Estrutura de Pastas

- `cypress/pageObjects/`: PageObjects para organização dos elementos e ações
	- LoginPage.js
	- PurchasePage.js
	- CartPage.js
	- CheckoutPage.js
- `cypress/e2e/1-login/`: Testes de login
	- 1.1-login.spec.cy.js
	- 1.2-login.alternative.spec.cy.js
- `cypress/e2e/2-purchase/`: Testes de compra
	- 2.1-purchase.spec.cy.js
- `cypress/e2e/3-checkout/`: Testes de checkout
	- 3.1-checkout.spec.cy.js (cenários principais)
	- 3.2-checkout-alternative.spec.cy.js (cenários alternativos)
- `cypress/support/`: Comandos customizados e hooks
	- commands.js
	- hooks.js
	- e2e.js
- `config/`: Arquivos de configuração para cada ambiente
	- dev.config.js
	- qa.config.js

## Como executar os testes

1. Instale as dependências:
	 ```bash
	 npm install
	 ```
2. Execute os testes:
	 - Para abrir o Cypress:
		 ```bash
		 npm run cypress:open:dev
		 npm run cypress:open:qa
		 npm run cypress:open:prod
		 ```
	 - Para rodar em modo headless:
		 ```bash
		 npm run cypress:run:dev
		 npm run cypress:run:qa
		 npm run cypress:run:prod
		 ```

## Rodando os testes por tag

Para executar apenas cenários com uma tag específica, utilize os comandos abaixo:

- Para rodar apenas cenários de login:
  ```bash
  npm run cypress:run:dev:login
  npm run cypress:run:qa:login
  npm run cypress:open:dev:login
  npm run cypress:open:qa:login
  ```
- Para rodar apenas cenários de checkout:
  ```bash
  npm run cypress:run:dev:checkout
  npm run cypress:run:qa:checkout
  npm run cypress:open:dev:checkout
  npm run cypress:open:qa:checkout
  ```

Esses comandos executam apenas os testes marcados com as tags `@login` ou `@checkout`.