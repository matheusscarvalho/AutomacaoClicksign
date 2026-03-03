# ServeRest Newman Tests

Este projeto permite executar a collection de testes da API ServeRest usando o Newman via Node.js.

## Pré-requisitos
- Node.js instalado
- npm instalado

## Instalação
```bash
npm install
```

## Execução dos testes (ambiente de desenvolvimento)
```bash
npm run test:dev
```

Os relatórios serão gerados em `newman/report.json`.

## Arquivos utilizados
- `1-Usuarios.collection`: Collection Postman
- `dev_environment`: Ambiente Postman

## Observações
- Certifique-se de que os arquivos estejam na raiz do projeto ou ajuste o comando no package.json conforme necessário.
