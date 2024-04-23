

Funcionalidade: Carrinho de compras

  Como usuário,
  Quero adicionar, remover e editar itens no carrinho de compras,
  Para concluir minhas compras com facilidade.

  Contexto:

    Dado Que eu acessei a aplicacao
    Dado Que o usuario efetuou login incluindo "standard_user" e "secret_sauce"


  @Id-1
  //@Item-1
  //@Carrinho
  @Id-1
  Esquema do Cenario: : Validar nome e valor do item adicionado ao carrinho


    Quando um item "<index>"e adicionado ao carrinho
    E o carrinho e acessado
    Entao o produto e adicionado ao carrinho
    E e feito logout


    Exemplos:

      |   index  |
      |     1    |
      |     2    |

  @Id-2
  @Item-1
  @Carrinho
  Esquema do Cenario: Validar valores de multiplos itens no carrinho


    Quando multiplos itens"<index1>" "<index2>" sao adicionados ao carrinho
    E o carrinho e acessado
    Entao os produtos sao adicionados ao carrinho
    E e feito logout

    Exemplos:

      |   index1 | index2  |
      |     1    |    2    |
      |     3    |    4    |

  @Id-3
  @Extra
  @Carrinho
  Esquema do Cenario: Validar remocao de itens no carrinho pelo icone


    Dado que multiplos itens"<index1>" "<index2>" sao adicionados ao carrinho
    E o icone do carrinho deve ser alterado com a quantidade de itens
    Quando o botao remover e clicado
    Entao o icone do carrinho deve ser subtraido
    E e feito logout

    Exemplos:
      |  index1  | index2  |
      |     1    |    2    |
      |     3    |    1    |

  @Id-4
  @Extra
  @Carrinho
  Esquema do Cenario: Validar contagem de itens no carrinho pelo icone


    Quando multiplos itens"<index1>" "<index2>" sao adicionados ao carrinho
    Entao o icone do carrinho deve ser alterado com a quantidade de itens
    E e feito logout

    Exemplos:
      |  index1  | index2  |
      |     1    |    2    |
      |     3    |    1    |

