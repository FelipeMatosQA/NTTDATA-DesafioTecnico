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
  "line": 10,
  "name": ": Validar valor do item adicionado ao carrinho",
  "description": "",
  "id": "carrinho-de-compras;:-validar-valor-do-item-adicionado-ao-carrinho",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Que o usuario efetuou login incluindo \"\u003cusername\u003e\" e \"\u003cpassword\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "um item \"\u003cindex\u003e\"e adicionado ao carrinho",
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "o carrinho e acessado",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "o produto e adicionado ao carrinho",
  "keyword": "Entao "
});
formatter.step({
  "line": 16,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "carrinho-de-compras;:-validar-valor-do-item-adicionado-ao-carrinho;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "index"
      ],
      "line": 21,
      "id": "carrinho-de-compras;:-validar-valor-do-item-adicionado-ao-carrinho;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "1"
      ],
      "line": 22,
      "id": "carrinho-de-compras;:-validar-valor-do-item-adicionado-ao-carrinho;;2"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "2"
      ],
      "line": 23,
      "id": "carrinho-de-compras;:-validar-valor-do-item-adicionado-ao-carrinho;;3"
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
  "line": 7,
  "name": "Que eu acessei a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2801816400,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": ": Validar valor do item adicionado ao carrinho",
  "description": "",
  "id": "carrinho-de-compras;:-validar-valor-do-item-adicionado-ao-carrinho;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Que o usuario efetuou login incluindo \"standard_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "um item \"1\"e adicionado ao carrinho",
  "matchedColumns": [
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "o carrinho e acessado",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "o produto e adicionado ao carrinho",
  "keyword": "Entao "
});
formatter.step({
  "line": 16,
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
  "duration": 392870300,
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
  "duration": 193667700,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_carrinho_e_acessado()"
});
formatter.result({
  "duration": 105086000,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_produto_e_adicionado_ao_carrinho()"
});
formatter.result({
  "duration": 93657100,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 715543000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 171293700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 138249600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 113229600,
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
  "line": 7,
  "name": "Que eu acessei a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2692082200,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": ": Validar valor do item adicionado ao carrinho",
  "description": "",
  "id": "carrinho-de-compras;:-validar-valor-do-item-adicionado-ao-carrinho;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Que o usuario efetuou login incluindo \"standard_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "um item \"2\"e adicionado ao carrinho",
  "matchedColumns": [
    2
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 14,
  "name": "o carrinho e acessado",
  "keyword": "E "
});
formatter.step({
  "line": 15,
  "name": "o produto e adicionado ao carrinho",
  "keyword": "Entao "
});
formatter.step({
  "line": 16,
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
  "duration": 340799600,
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
  "duration": 184343000,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_carrinho_e_acessado()"
});
formatter.result({
  "duration": 108017500,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_produto_e_adicionado_ao_carrinho()"
});
formatter.result({
  "duration": 95458700,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 697768500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 162269800,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 150031900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 126344100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 27,
  "name": "Validar valores de multiplos itens no carrinho",
  "description": "",
  "id": "carrinho-de-compras;validar-valores-de-multiplos-itens-no-carrinho",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 26,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Que o usuario efetuou login incluindo \"\u003cusername\u003e\" e \"\u003cpassword\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 30,
  "name": "multiplos itens\"\u003cindex1\u003e\" \"\u003cindex2\u003e\" sao adicionados ao carrinho",
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "o carrinho e acessado",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "os produtos sao adicionados ao carrinho",
  "keyword": "Entao "
});
formatter.examples({
  "line": 34,
  "name": "",
  "description": "",
  "id": "carrinho-de-compras;validar-valores-de-multiplos-itens-no-carrinho;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "index1",
        "index2"
      ],
      "line": 36,
      "id": "carrinho-de-compras;validar-valores-de-multiplos-itens-no-carrinho;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "1",
        "2"
      ],
      "line": 37,
      "id": "carrinho-de-compras;validar-valores-de-multiplos-itens-no-carrinho;;2"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "3",
        "4"
      ],
      "line": 38,
      "id": "carrinho-de-compras;validar-valores-de-multiplos-itens-no-carrinho;;3"
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
  "line": 7,
  "name": "Que eu acessei a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2668932200,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Validar valores de multiplos itens no carrinho",
  "description": "",
  "id": "carrinho-de-compras;validar-valores-de-multiplos-itens-no-carrinho;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 26,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Que o usuario efetuou login incluindo \"standard_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 30,
  "name": "multiplos itens\"1\" \"2\" sao adicionados ao carrinho",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "o carrinho e acessado",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "os produtos sao adicionados ao carrinho",
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
  "duration": 367970300,
  "status": "passed"
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
  "duration": 323901600,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_carrinho_e_acessado()"
});
formatter.result({
  "duration": 100574600,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.osProdutosSaoAdicionadosAoCarrinho()"
});
formatter.result({
  "duration": 98167500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 112813100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 124478500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 106853500,
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
  "line": 7,
  "name": "Que eu acessei a aplicacao",
  "keyword": "Dado "
});
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2657079000,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Validar valores de multiplos itens no carrinho",
  "description": "",
  "id": "carrinho-de-compras;validar-valores-de-multiplos-itens-no-carrinho;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 26,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 29,
  "name": "Que o usuario efetuou login incluindo \"standard_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 30,
  "name": "multiplos itens\"3\" \"4\" sao adicionados ao carrinho",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 31,
  "name": "o carrinho e acessado",
  "keyword": "E "
});
formatter.step({
  "line": 32,
  "name": "os produtos sao adicionados ao carrinho",
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
  "duration": 345711500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "4",
      "offset": 20
    }
  ],
  "location": "CarrinhoSteps.multiplosItensSaoAdicionadosAoCarrinho(String,String)"
});
formatter.result({
  "duration": 338595300,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_carrinho_e_acessado()"
});
formatter.result({
  "duration": 106559300,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.osProdutosSaoAdicionadosAoCarrinho()"
});
formatter.result({
  "duration": 96600000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 127005400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 151066900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 113641900,
  "status": "passed"
});
});