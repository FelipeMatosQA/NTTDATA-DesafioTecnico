# language: pt

Funcionalidade: Efetuar compra

  Contexto:
    Dado Que eu acessei a aplicacao

    @Compra
    Esquema do Cenario: : Validar valor total da compra

      Dado Que o usuario efetuou login incluindo "<username>" e "<password>"
      E selecionou um produto "<index>"
      Quando feito o checkout e preenchido "<nome>" "<sobrenome>" "<postalcode>"
      E as informacoes de checkou sao exibidas
      E clicado em Finish
      Entao a compra e efetuada

      Exemplos:
      |    username   |   password   |  index  |    nome    | sobrenome | postalcode   |
      | standard_user | secret_sauce |    1    |   Felipe   | Matos     |    54400220  |