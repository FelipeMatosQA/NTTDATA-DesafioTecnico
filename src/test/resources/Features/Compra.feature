# language: pt

Funcionalidade: Efetuar compra

  Contexto:

    Dado Que eu acessei a aplicacao

    @Compra
    Esquema do Cenario: : Efetuar compra e validar valor total

      Dado Que o usuario efetuou login incluindo "<username>" e "<password>"
      E selecionou um produto "<index>"
      Quando feito o checkout e preenchido "<nome>" "<sobrenome>" "<postalcode>"
      E as informacoes de checkou sao exibidas
      E clicado em Finish
      Entao a compra e efetuada
      E e feito logout

      Exemplos:
      |    username   |   password   |  index  |    nome    | sobrenome | postalcode   |
      | standard_user | secret_sauce |    1    |   Felipe   | Matos     |    54400220  |
      | standard_user | secret_sauce |    2    | Filomena   | Eduarda   |    44455221  |
      | standard_user | secret_sauce |    3    | Filomena   | Juquinha  |    44455222  |