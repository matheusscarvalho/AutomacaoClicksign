
# language: pt
@checkout
Funcionalidade: Checkout

  Cenário: Checkout com dados validos
    Dado que estou na tela de produtos
    Quando adiciono um produto ao carrinho e realizo o checkout com dados validos
    Então o checkout deve ser concluido com sucesso

  Cenário: Checkout com todos os produtos e validação do total
    Dado que estou na tela de produtos
    Quando adiciono todos os produtos ao carrinho e realizo o checkout
    Então o resumo deve mostrar o total correto e o checkout deve ser concluido
