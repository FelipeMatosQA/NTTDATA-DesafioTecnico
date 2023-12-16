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
  "description": "",
  "id": "carrinho-de-compras",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 8,
  "name": ": Validar valores dos itens no carrinho",
  "description": "",
  "id": "carrinho-de-compras;:-validar-valores-dos-itens-no-carrinho",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 9,
  "name": "Que o usuario efetuou login incluindo \"\u003cusername\u003e\" e \"\u003cpassword\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "um item \"\u003cindex\u003e\"e adicionado ao carrinho",
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "o carrinho e acessado",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "o produto e adicionado ao carrinho",
  "keyword": "Entao "
});
formatter.step({
  "line": 13,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "carrinho-de-compras;:-validar-valores-dos-itens-no-carrinho;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "index"
      ],
      "line": 18,
      "id": "carrinho-de-compras;:-validar-valores-dos-itens-no-carrinho;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "1"
      ],
      "line": 19,
      "id": "carrinho-de-compras;:-validar-valores-dos-itens-no-carrinho;;2"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "2"
      ],
      "line": 20,
      "id": "carrinho-de-compras;:-validar-valores-dos-itens-no-carrinho;;3"
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
  "duration": 2948046400,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": ": Validar valores dos itens no carrinho",
  "description": "",
  "id": "carrinho-de-compras;:-validar-valores-dos-itens-no-carrinho;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 9,
  "name": "Que o usuario efetuou login incluindo \"standard_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "um item \"1\"e adicionado ao carrinho",
  "matchedColumns": [
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "o carrinho e acessado",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "o produto e adicionado ao carrinho",
  "keyword": "Entao "
});
formatter.step({
  "line": 13,
  "name": "e feito logout",
  "keyword": "E "
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
  "duration": 422440100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 9
    }
  ],
  "location": "CarrinhoSteps.umItemEAdicionadoAoCarrinho(String)"
});
formatter.result({
  "duration": 185070400,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_carrinho_e_acessado()"
});
formatter.result({
  "duration": 105141300,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_produto_e_adicionado_ao_carrinho()"
});
formatter.result({
  "duration": 109948800,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 733493100,
  "status": "passed"
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
  "duration": 2604720800,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": ": Validar valores dos itens no carrinho",
  "description": "",
  "id": "carrinho-de-compras;:-validar-valores-dos-itens-no-carrinho;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario"
});
formatter.step({
  "line": 9,
  "name": "Que o usuario efetuou login incluindo \"standard_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 10,
  "name": "um item \"2\"e adicionado ao carrinho",
  "matchedColumns": [
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 11,
  "name": "o carrinho e acessado",
  "keyword": "E "
});
formatter.step({
  "line": 12,
  "name": "o produto e adicionado ao carrinho",
  "keyword": "Entao "
});
formatter.step({
  "line": 13,
  "name": "e feito logout",
  "keyword": "E "
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
  "duration": 347232700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "CarrinhoSteps.umItemEAdicionadoAoCarrinho(String)"
});
formatter.result({
  "duration": 196716900,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_carrinho_e_acessado()"
});
formatter.result({
  "duration": 122127400,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_produto_e_adicionado_ao_carrinho()"
});
formatter.result({
  "duration": 100571100,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 696574700,
  "status": "passed"
});
});