
# language: pt

@checkout
Funcionalidade: Cenários alternativos de Checkout

  Cenário: Validar campos obrigatórios no checkout
    Dado que estou na tela de checkout
    Quando deixo todos os campos obrigatorios vazios e tento continuar
    Entao deve exibir uma mensagem de erro e impedir o avanco

  Cenário: Cancelar checkout e retornar ao carrinho
    Dado que estou na tela de checkout
    Quando clico em Cancel
    Então devo retornar para a tela do carrinho

  Cenário: Campo First Name vazio
    Dado que estou na tela de checkout
    Quando deixo o campo First Name vazio e tento continuar
    Então deve exibir mensagem de erro "First Name is required" e destacar o campo

  Cenário: Campo Last Name vazio
    Dado que estou na tela de checkout
    Quando deixo o campo Last Name vazio e tento continuar
    Então deve exibir mensagem de erro "Last Name is required" e destacar o campo

  Cenário: Campo Postal Code vazio
    Dado que estou na tela de checkout
    Quando deixo o campo Postal Code vazio e tento continuar
    Então deve exibir mensagem de erro "Postal Code is required" e destacar o campo

  Cenário: Não permitir caracteres especiais no campo Postal Code
    Dado que estou na tela de checkout
    Quando insiro caracteres especiais no campo Postal Code e tento continuar
    Então deve exibir mensagem de erro e destacar o campo
