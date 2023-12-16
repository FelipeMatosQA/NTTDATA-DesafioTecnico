# language: pt

Funcionalidade: Fluxo de compra com multiplos usuários

  Contexto:

    Dado Que eu acessei a aplicacao

  @Compra-multi-user
  Esquema do Cenario: : Efetuar compra com multiplos usuarios com fluxo nao impeditivo e validar valor total

    Dado Que o usuario efetuou login incluindo "<username>" e "<password>"
    E selecionou um produto "<index>"
    Quando feito o checkout e preenchido "<nome>" "<sobrenome>" "<postalcode>"
    E as informacoes de checkou sao exibidas
    E clicado em Finish
    Entao a compra e efetuada
    E e feito logout

    Exemplos:
      |       username          |   password   |  index  |    nome    | sobrenome   |  postalcode |
      |      standard_user      | secret_sauce |    4    |   Felipe   |    Matos    |   54400220  |
      |      standard_user      | secret_sauce |    3    |   Eduardo  |   Vicente   |   54376450  |
      | performance_glitch_user | secret_sauce |    2    |  Filomena  |   Santos    |   56675220  |
      | performance_glitch_user | secret_sauce |    4    |   Eduardo  |   Claudio   |   54377750  |
      |       visual_user       | secret_sauce |    1    |   Heberth  |   Silva     |   99864436  |
      |       visual_user       | secret_sauce |    2    |   Talita   | Nascimento  |   99633551  |

  @Locked-out-user
  Esquema do Cenario: Efetuar login com usuario locked-out-user

    Dado que foi incluido "<login>" e "<senha>"
    Quando clicar em Login
    Entao sera exibido "<mensagem>"


    Exemplos:

      |       login        |     senha        |                       mensagem                            |
      |  locked_out_user   |  secret_sauce    | Epic sadface: Sorry, this user has been locked out.       |

  @Problem-user
  Esquema do Cenario: Fluxo de compra com usuario com problema

    Dado Que o usuario efetuou login incluindo "<username>" e "<password>"
    E selecionou um produto "<index>"
    Quando feito o checkout e preenchido "<nome>" "<sobrenome>" "<postalcode>"
    Entao e exibido "<mensagem>" de erro
    E e feito logout

    #Ao selecionar o problem_User ao, na tela de Checkout-Information, o input de "LastName" sobrepõe o "FirstName

    Exemplos:
      |        username         |   password   |  index  |    nome    |  sobrenome  |  postalcode   |               mensagem                 |
      |      problem_user       | secret_sauce |    1    |   Luana    |   Flores    |    86364895   |    Error: Last Name is required        |
      |      problem_user       | secret_sauce |    2   |   Viviane  |   Macedo     |    18264976   |    Error: Last Name is required        |
      #|      problem_user       | secret_sauce |    3   |   Viviane  |   Macedo    |    18264976    |    Error: Last Name is required        |


  @Error-user
  Esquema do Cenario: Fluxo de compra com usuario com erro
    Dado Que o usuario efetuou login incluindo "<username>" e "<password>"
    E selecionou um produto "<index>"
    Quando feito o checkout e preenchido "<nome>" "<sobrenome>" "<postalcode>"
    E as informacoes de checkou sao exibidas
    E clicado em Finish
    #O step a seguir(Que está comentado) seria o correto, dentro do contexto de falha, foi criado um step que indica que a compra não foi feita.
    #Entao a compra e efetuada
    Entao a compra nao foi efetuada

    Exemplos:
      |        username       |   password   |  index  |    nome    |  sobrenome  |  postalcode   |
      |      error_user       | secret_sauce |    1    |   Luana    |   Flores    |    86364895   |
      |      error_user       | secret_sauce |    2    |   Valmir   |   Cleiton   |    76567895   |








