
# language: pt
@login
Funcionalidade: Login

  Esquema do Cenário: Login valido com usuario - Usuuário <usuario>
    Dado que estou na tela de login
    Quando insiro usuario "<usuario>" e senha "<senha>"
    Então devo acessar a tela de produtos
    Exemplos:
      | usuario         | senha         |
      | standard_user   | secret_sauce  |
      | problem_user    | secret_sauce  |
      | performance_glitch_user | secret_sauce |

  Cenário: Login com usuario bloqueado
    Dado que estou na tela de login
    Quando tento logar com usuario bloqueado
    Então deve exibir mensagem de erro de bloqueio

  Esquema do Cenário: Login com usuario invalido e senha correta  - Usuuário <usuario>
    Dado que estou na tela de login
    Quando insiro usuario "<usuario>" e senha "<senha>"
    Então deve exibir mensagem de erro de credenciais
    Exemplos:
      | usuario         | senha         |
      | usuario_invalido| secret_sauce  |

  Esquema do Cenário: Login com senha invalida  - Usuuário <usuario>
    Dado que estou na tela de login
    Quando insiro usuario "<usuario>" e senha "<senha>"
    Então deve exibir mensagem de erro de credenciais
    Exemplos:
      | usuario         | senha         |
      | standard_user   | secret_sauce* |
      | problem_user    | secret_sauce* |
      | performance_glitch_user | secret_sauce* |
