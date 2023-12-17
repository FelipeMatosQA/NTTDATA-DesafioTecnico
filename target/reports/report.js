$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Carrinho.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Carrinho de compras",
  "description": "\r\nComo usuário,\r\nQuero adicionar, remover e editar itens no carrinho de compras,\r\nPara concluir minhas compras com facilidade.",
  "id": "carrinho-de-compras",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 70,
  "name": "Validar contagem de itens no carrinho pelo icone",
  "description": "",
  "id": "carrinho-de-compras;validar-contagem-de-itens-no-carrinho-pelo-icone",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 67,
      "name": "@Id-4"
    },
    {
      "line": 68,
      "name": "@Extra"
    },
    {
      "line": 69,
      "name": "@Carrinho1"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "multiplos itens\"\u003cindex1\u003e\" \"\u003cindex2\u003e\" sao adicionados ao carrinho",
  "keyword": "Quando "
});
formatter.step({
  "line": 74,
  "name": "o icone do carrinho deve ser alterado com a quantidade de itens",
  "keyword": "Entao "
});
formatter.step({
  "line": 75,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.examples({
  "line": 77,
  "name": "",
  "description": "",
  "id": "carrinho-de-compras;validar-contagem-de-itens-no-carrinho-pelo-icone;",
  "rows": [
    {
      "cells": [
        "index1",
        "index2"
      ],
      "line": 78,
      "id": "carrinho-de-compras;validar-contagem-de-itens-no-carrinho-pelo-icone;;1"
    },
    {
      "cells": [
        "1",
        "2"
      ],
      "line": 79,
      "id": "carrinho-de-compras;validar-contagem-de-itens-no-carrinho-pelo-icone;;2"
    },
    {
      "cells": [
        "3",
        "1"
      ],
      "line": 80,
      "id": "carrinho-de-compras;validar-contagem-de-itens-no-carrinho-pelo-icone;;3"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "Que eu acessei a aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "Que o usuario efetuou login incluindo \"standard_user\" e \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 3612660800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 39
    },
    {
      "val": "secret_sauce",
      "offset": 57
    }
  ],
  "location": "CarrinhoSteps.que_o_usuario_efetuou_login_incluindo_e(String,String)"
});
formatter.result({
  "duration": 488846200,
  "status": "passed"
});
formatter.scenario({
  "line": 79,
  "name": "Validar contagem de itens no carrinho pelo icone",
  "description": "",
  "id": "carrinho-de-compras;validar-contagem-de-itens-no-carrinho-pelo-icone;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 69,
      "name": "@Carrinho1"
    },
    {
      "line": 67,
      "name": "@Id-4"
    },
    {
      "line": 68,
      "name": "@Extra"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "multiplos itens\"1\" \"2\" sao adicionados ao carrinho",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 74,
  "name": "o icone do carrinho deve ser alterado com a quantidade de itens",
  "keyword": "Entao "
});
formatter.step({
  "line": 75,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 16
    },
    {
      "val": "2",
      "offset": 20
    }
  ],
  "location": "CarrinhoSteps.multiplosItensSaoAdicionadosAoCarrinho(String,String)"
});
formatter.result({
  "duration": 625787900,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.oIconeDoCarrinhoDeveSerAlteradoComAQuantidadeDeItens()"
});
formatter.result({
  "duration": 92693900,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 279111500,
  "status": "passed"
});
formatter.after({
  "duration": 194845900,
  "status": "passed"
});
formatter.after({
  "duration": 213695600,
  "status": "passed"
});
formatter.background({
  "line": 9,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 11,
  "name": "Que eu acessei a aplicacao",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "Que o usuario efetuou login incluindo \"standard_user\" e \"secret_sauce\"",
  "keyword": "Dado "
});
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2864997300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "standard_user",
      "offset": 39
    },
    {
      "val": "secret_sauce",
      "offset": 57
    }
  ],
  "location": "CarrinhoSteps.que_o_usuario_efetuou_login_incluindo_e(String,String)"
});
formatter.result({
  "duration": 413258300,
  "status": "passed"
});
formatter.scenario({
  "line": 80,
  "name": "Validar contagem de itens no carrinho pelo icone",
  "description": "",
  "id": "carrinho-de-compras;validar-contagem-de-itens-no-carrinho-pelo-icone;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 69,
      "name": "@Carrinho1"
    },
    {
      "line": 67,
      "name": "@Id-4"
    },
    {
      "line": 68,
      "name": "@Extra"
    }
  ]
});
formatter.step({
  "line": 73,
  "name": "multiplos itens\"3\" \"1\" sao adicionados ao carrinho",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 74,
  "name": "o icone do carrinho deve ser alterado com a quantidade de itens",
  "keyword": "Entao "
});
formatter.step({
  "line": 75,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "1",
      "offset": 20
    }
  ],
  "location": "CarrinhoSteps.multiplosItensSaoAdicionadosAoCarrinho(String,String)"
});
formatter.result({
  "duration": 370256600,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.oIconeDoCarrinhoDeveSerAlteradoComAQuantidadeDeItens()"
});
formatter.result({
  "duration": 61609800,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 703869200,
  "status": "passed"
});
formatter.after({
  "duration": 126136600,
  "status": "passed"
});
formatter.after({
  "duration": 123658000,
  "status": "passed"
});
});