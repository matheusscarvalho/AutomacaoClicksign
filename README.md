# AutomacaoClicksign

Este repositório contém automações para testes em três diferentes áreas:

## 1. Testes de API
- Localizados na pasta `API/`
- Utilizam ferramentas como Newman para execução de coleções e geração de relatórios
- Exemplos de coleções: `testes/1-Usuarios.collection.json`

## 2. Testes de Performance
- Localizados na pasta `performance/`
- Utilizam scripts como o `k6_serverest_usuarios.js` para simular carga e medir desempenho
- Relatórios e configurações disponíveis na pasta

## 3. Testes de Interface (UI)
- Localizados na pasta `UI/`
- Utilizam Cypress para automação de testes end-to-end
- Estrutura organizada em features, fixtures, page objects, plugins e suporte

Cada tipo de teste possui sua própria estrutura, dependências e instruções específicas, detalhadas nos respectivos arquivos `README.md` de cada pasta.

---

## Como executar a pipeline de testes no GitHub

1. Certifique-se de que o arquivo `.github/workflows/e2e-tests.yml` está presente no repositório.
2. Faça um push ou crie um pull request para a branch `main` no GitHub.
3. O GitHub Actions irá executar automaticamente os testes E2E definidos no workflow.
4. Para acompanhar a execução, acesse a aba **Actions** no seu repositório no GitHub.
5. Os resultados dos jobs (login, checkout, checkout_alternative) estarão disponíveis na interface do GitHub Actions.

Se desejar executar manualmente, adicione o gatilho `workflow_dispatch` ao workflow para permitir disparo manual pela interface do GitHub.