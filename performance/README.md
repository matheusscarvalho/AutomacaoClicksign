# Teste de Carga com K6 - ServeRest

Este projeto realiza testes de carga nos endpoints de usuário da API pública [ServeRest](https://serverest.dev) utilizando a ferramenta K6.

## Estrutura
- `k6_serverest_usuarios.js`: Script principal de teste de carga.
- `config/env.js`: Configuração das URLs dos ambientes (dev, prod, local).
- `summary.json`: Relatório gerado após execução do teste.

## Como executar
1. Instale o K6 ([instruções](https://k6.io/docs/getting-started/installation/)).
2. Execute o teste no terminal:
   ```powershell
   k6 run k6_serverest_usuarios.js --summary-export=summary.json -e ENV=dev
   ```
   Troque `dev` por `local` ou `prod` conforme o ambiente desejado.

## Métricas analisadas
- Tempo de resposta
- Taxa de erro
- Throughput

## Observações
- O script cria e consulta usuários, simulando operações reais.
- O arquivo `summary.json` pode ser analisado para identificar gargalos e desempenho.