# language: pt

Funcionalidade: Carrinho de compras

  Como usuário,
  Quero adicionar, remover e editar itens no carrinho de compras,
  Para concluir minhas compras com facilidade.

  Contexto:

    Dado Que eu acessei a aplicacao
    Dado Que o usuario efetuou login incluindo "standard_user" e "secret_sauce"

  @Carrinho
  Esquema do Cenario: : Validar nome e valor do item adicionado ao carrinho


    Quando um item "<index>"e adicionado ao carrinho
    E o carrinho e acessado
    Entao o produto e adicionado ao carrinho
    E e feito logout


    Exemplos:

      |   index  |
      |     1    |
      |     2    |


  @Carrinho
  Esquema do Cenario: Validar valores de multiplos itens no carrinho


    Quando multiplos itens"<index1>" "<index2>" sao adicionados ao carrinho
    E o carrinho e acessado
    Entao os produtos sao adicionados ao carrinho

    Exemplos:

      |   index1 | index2  |
      |     1    |    2    |
      |     3    |    4    |

  @Carrinho
  Esquema do Cenario: Validar contagem de itens no carrinho pelo icone


    Quando multiplos itens"<index1>" "<index2>" sao adicionados ao carrinho
    Entao o iconde do carrinho deve ser alterado com a quantidade de itens

    Exemplos:
      |  index1  | index2  |
      |     1    |    2    |
      |     2    |    3    |


