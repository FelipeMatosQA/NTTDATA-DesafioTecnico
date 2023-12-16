# language: pt

Funcionalidade: Carrinho de compras

  Contexto:
    Dado Que eu acessei a aplicacao

  Esquema do Cenario: : Validar valores dos itens no carrinho
    Dado Que o usuario efetuou login incluindo "<username>" e "<password>"
    Quando um item "<index>"e adicionado ao carrinho
    E o carrinho e acessado
    Entao o produto e adicionado ao carrinho
    E e feito logout


    Exemplos:

    |    username   |   password   |   index  |
    | standard_user | secret_sauce |     1    |
    | standard_user | secret_sauce |     2    |

  #Esquema do Cenario: Validar valores de multiplos itens no carrinho

    #Dado Que o usuario efetuou login incluindo "<username>" e "<password>"
    #Quando multiplos itens"<index1>" "<index2>" sao adicionados ao carrinho
    #E o carrinho e acessado
    #Entao os produtos sao adicionados ao carrinho

    #Exemplos:

      #|    username   |   password   |   index1 | index2  |
      #| standard_user | secret_sauce |     1    |    2    |
      #| standard_user | secret_sauce |     3    |    4    |