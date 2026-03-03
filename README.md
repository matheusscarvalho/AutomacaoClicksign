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