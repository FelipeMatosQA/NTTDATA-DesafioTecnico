# language: pt

Funcionalidade: Carrinho de compras

  Como usuário,
  Quero adicionar, remover e editar itens no carrinho de compras,
  Para concluir minhas compras com facilidade.

  Contexto:

    Dado Que eu acessei a aplicacao


  @Carrinho
  Esquema do Cenario: : Validar nome e valor do item adicionado ao carrinho

    Dado Que o usuario efetuou login incluindo "<username>" e "<password>"
    Quando um item "<index>"e adicionado ao carrinho
    E o carrinho e acessado
    Entao o produto e adicionado ao carrinho
    E e feito logout


    Exemplos:

    |    username   |   password   |   index  |
    | standard_user | secret_sauce |     1    |
    | standard_user | secret_sauce |     2    |


  @Carrinho
  Esquema do Cenario: Validar valores de multiplos itens no carrinho

    Dado Que o usuario efetuou login incluindo "<username>" e "<password>"
    Quando multiplos itens"<index1>" "<index2>" sao adicionados ao carrinho
    E o carrinho e acessado
    Entao os produtos sao adicionados ao carrinho

    Exemplos:

      |    username   |   password   |   index1 | index2  |
      | standard_user | secret_sauce |     1    |    2    |
      | standard_user | secret_sauce |     3    |    4    |

  @Carrinho
  Esquema do Cenario: Validar contagem de itens no carrinho pelo icone

    Dado Que o usuario efetuou login incluindo "<username>" e "<password>"
    Quando multiplos itens"<index1>" "<index2>" sao adicionados ao carrinho
    Entao o iconde do carrinho deve ser alterado com a quantidade de itens

    Exemplos:
      |    username   |   password   |   index1 | index2  |
      | standard_user | secret_sauce |     1    |    2    |
      | standard_user | secret_sauce |     2    |    3    |


