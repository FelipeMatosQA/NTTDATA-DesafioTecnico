$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Compra.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Efetuar compra",
  "description": "",
  "id": "efetuar-compra",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 9,
  "name": ": Validar valor total da compra",
  "description": "",
  "id": "efetuar-compra;:-validar-valor-total-da-compra",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@Compra"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Que o usuario efetuou login incluindo \"\u003cusername\u003e\" e \"\u003cpassword\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "selecionou um produto \"\u003cindex\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "feito o checkout e preenchido \"\u003cnome\u003e\" \"\u003csobrenome\u003e\" \"\u003cpostalcode\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "efetuar-compra;:-validar-valor-total-da-compra;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "index",
        "nome",
        "sobrenome",
        "postalcode"
      ],
      "line": 19,
      "id": "efetuar-compra;:-validar-valor-total-da-compra;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "1",
        "Felipe",
        "Matos",
        "54400220"
      ],
      "line": 20,
      "id": "efetuar-compra;:-validar-valor-total-da-compra;;2"
    }
  ],
  "keyword": "Exemplos"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Contexto"
});
formatter.step({
  "line": 6,
  "name": "Que eu acessei a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2894536600,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": ": Validar valor total da compra",
  "description": "",
  "id": "efetuar-compra;:-validar-valor-total-da-compra;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 8,
      "name": "@Compra"
    }
  ]
});
formatter.step({
  "line": 11,
  "name": "Que o usuario efetuou login incluindo \"standard_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 12,
  "name": "selecionou um produto \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 13,
  "name": "feito o checkout e preenchido \"Felipe\" \"Matos\" \"54400220\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "a compra e efetuada",
  "keyword": "Entao "
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
  "duration": 389465300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    }
  ],
  "location": "CompraSteps.selecionouUmProduto(String)"
});
formatter.result({
  "duration": 477177700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Felipe",
      "offset": 31
    },
    {
      "val": "Matos",
      "offset": 40
    },
    {
      "val": "54400220",
      "offset": 48
    }
  ],
  "location": "CompraSteps.feito_o_checkout_e_preenchido(String,String,String)"
});
formatter.result({
  "duration": 360219800,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 106920300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 73605600,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 138199500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 146604700,
  "status": "passed"
});
});