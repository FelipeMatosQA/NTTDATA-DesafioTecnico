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
  "duration": 2791608700,
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
  "duration": 373872600,
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
  "duration": 194847800,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_carrinho_e_acessado()"
});
formatter.result({
  "duration": 118945500,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_produto_e_adicionado_ao_carrinho()"
});
formatter.result({
  "duration": 112390100,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 712864400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png");
formatter.after({
  "duration": 134432400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded1.png");
formatter.after({
  "duration": 117728200,
  "status": "passed"
});
formatter.embedding("image/png", "embedded2.png");
formatter.after({
  "duration": 124974900,
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
  "duration": 2656473500,
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
  "duration": 350165700,
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
  "duration": 165852900,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_carrinho_e_acessado()"
});
formatter.result({
  "duration": 105525700,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_produto_e_adicionado_ao_carrinho()"
});
formatter.result({
  "duration": 94920600,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 698732700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded3.png");
formatter.after({
  "duration": 151849800,
  "status": "passed"
});
formatter.embedding("image/png", "embedded4.png");
formatter.after({
  "duration": 152147500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded5.png");
formatter.after({
  "duration": 135395200,
  "status": "passed"
});
formatter.uri("Compra.feature");
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
  "line": 10,
  "name": ": Efetuar compra e validar valor total",
  "description": "",
  "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Compra"
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
  "name": "selecionou um produto \"\u003cindex\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "feito o checkout e preenchido \"\u003cnome\u003e\" \"\u003csobrenome\u003e\" \"\u003cpostalcode\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 18,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;",
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
      "line": 21,
      "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;;1"
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
      "line": 22,
      "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;;2"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "2",
        "Filomena",
        "Eduarda",
        "44455221"
      ],
      "line": 23,
      "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;;3"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "3",
        "Filomena",
        "Juquinha",
        "44455222"
      ],
      "line": 24,
      "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;;4"
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
  "duration": 2629408100,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": ": Efetuar compra e validar valor total",
  "description": "",
  "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Compra"
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
  "name": "selecionou um produto \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "feito o checkout e preenchido \"Felipe\" \"Matos\" \"54400220\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 18,
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
  "duration": 388779800,
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
  "duration": 446824800,
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
  "duration": 380252900,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 89542400,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 73344900,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 172497400,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 700793600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded6.png");
formatter.after({
  "duration": 129850800,
  "status": "passed"
});
formatter.embedding("image/png", "embedded7.png");
formatter.after({
  "duration": 136678900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded8.png");
formatter.after({
  "duration": 122782200,
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
  "duration": 2738916400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": ": Efetuar compra e validar valor total",
  "description": "",
  "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Compra"
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
  "name": "selecionou um produto \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "feito o checkout e preenchido \"Filomena\" \"Eduarda\" \"44455221\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 18,
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
  "duration": 371829700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "CompraSteps.selecionouUmProduto(String)"
});
formatter.result({
  "duration": 475634400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Filomena",
      "offset": 31
    },
    {
      "val": "Eduarda",
      "offset": 42
    },
    {
      "val": "44455221",
      "offset": 52
    }
  ],
  "location": "CompraSteps.feito_o_checkout_e_preenchido(String,String,String)"
});
formatter.result({
  "duration": 360830300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 121579100,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 72293800,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 157125200,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 700207400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded9.png");
formatter.after({
  "duration": 137834500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded10.png");
formatter.after({
  "duration": 117418100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded11.png");
formatter.after({
  "duration": 159144100,
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
  "duration": 2821722800,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": ": Efetuar compra e validar valor total",
  "description": "",
  "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Compra"
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
  "name": "selecionou um produto \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "feito o checkout e preenchido \"Filomena\" \"Juquinha\" \"44455222\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 18,
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
  "duration": 345666200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    }
  ],
  "location": "CompraSteps.selecionouUmProduto(String)"
});
formatter.result({
  "duration": 466404700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Filomena",
      "offset": 31
    },
    {
      "val": "Juquinha",
      "offset": 42
    },
    {
      "val": "44455222",
      "offset": 53
    }
  ],
  "location": "CompraSteps.feito_o_checkout_e_preenchido(String,String,String)"
});
formatter.result({
  "duration": 356990900,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 89063700,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 73779100,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 144649000,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 697557900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded12.png");
formatter.after({
  "duration": 166761300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded13.png");
formatter.after({
  "duration": 113347500,
  "status": "passed"
});
formatter.embedding("image/png", "embedded14.png");
formatter.after({
  "duration": 111271000,
  "status": "passed"
});
formatter.uri("MultiplosUsuarios.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: pt"
    }
  ],
  "line": 3,
  "name": "Fluxo de compra com multiplos usuários",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 10,
  "name": ": Efetuar compra com multiplos usuarios com fluxo nao impeditivo e validar valor total",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Compra-multi-user"
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
  "name": "selecionou um produto \"\u003cindex\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "feito o checkout e preenchido \"\u003cnome\u003e\" \"\u003csobrenome\u003e\" \"\u003cpostalcode\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 18,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.examples({
  "line": 20,
  "name": "",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;",
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
      "line": 21,
      "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;1"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "4",
        "Felipe",
        "Matos",
        "54400220"
      ],
      "line": 22,
      "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;2"
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce",
        "3",
        "Eduardo",
        "Vicente",
        "54376450"
      ],
      "line": 23,
      "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;3"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce",
        "2",
        "Filomena",
        "Santos",
        "56675220"
      ],
      "line": 24,
      "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;4"
    },
    {
      "cells": [
        "performance_glitch_user",
        "secret_sauce",
        "4",
        "Eduardo",
        "Claudio",
        "54377750"
      ],
      "line": 25,
      "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;5"
    },
    {
      "cells": [
        "visual_user",
        "secret_sauce",
        "1",
        "Heberth",
        "Silva",
        "99864436"
      ],
      "line": 26,
      "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;6"
    },
    {
      "cells": [
        "visual_user",
        "secret_sauce",
        "2",
        "Talita",
        "Nascimento",
        "99633551"
      ],
      "line": 27,
      "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;7"
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
  "duration": 2739855200,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": ": Efetuar compra com multiplos usuarios com fluxo nao impeditivo e validar valor total",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Compra-multi-user"
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
  "name": "selecionou um produto \"4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "feito o checkout e preenchido \"Felipe\" \"Matos\" \"54400220\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 18,
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
  "duration": 351388400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    }
  ],
  "location": "CompraSteps.selecionouUmProduto(String)"
});
formatter.result({
  "duration": 446404700,
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
  "duration": 363055400,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 90028300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 74082900,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 140422500,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 702403400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded15.png");
formatter.after({
  "duration": 147771700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded16.png");
formatter.after({
  "duration": 140401200,
  "status": "passed"
});
formatter.embedding("image/png", "embedded17.png");
formatter.after({
  "duration": 142200300,
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
  "duration": 2674417600,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": ": Efetuar compra com multiplos usuarios com fluxo nao impeditivo e validar valor total",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Compra-multi-user"
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
  "name": "selecionou um produto \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "feito o checkout e preenchido \"Eduardo\" \"Vicente\" \"54376450\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 18,
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
  "duration": 349826600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    }
  ],
  "location": "CompraSteps.selecionouUmProduto(String)"
});
formatter.result({
  "duration": 443186800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Eduardo",
      "offset": 31
    },
    {
      "val": "Vicente",
      "offset": 41
    },
    {
      "val": "54376450",
      "offset": 51
    }
  ],
  "location": "CompraSteps.feito_o_checkout_e_preenchido(String,String,String)"
});
formatter.result({
  "duration": 365431700,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 105150300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 73257600,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 140794800,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 707223700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded18.png");
formatter.after({
  "duration": 139994200,
  "status": "passed"
});
formatter.embedding("image/png", "embedded19.png");
formatter.after({
  "duration": 110947900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded20.png");
formatter.after({
  "duration": 110884800,
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
  "duration": 2890154000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": ": Efetuar compra com multiplos usuarios com fluxo nao impeditivo e validar valor total",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Compra-multi-user"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Que o usuario efetuou login incluindo \"performance_glitch_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "selecionou um produto \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "feito o checkout e preenchido \"Filomena\" \"Santos\" \"56675220\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 18,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 39
    },
    {
      "val": "secret_sauce",
      "offset": 67
    }
  ],
  "location": "CarrinhoSteps.que_o_usuario_efetuou_login_incluindo_e(String,String)"
});
formatter.result({
  "duration": 5363632700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "CompraSteps.selecionouUmProduto(String)"
});
formatter.result({
  "duration": 447435700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Filomena",
      "offset": 31
    },
    {
      "val": "Santos",
      "offset": 42
    },
    {
      "val": "56675220",
      "offset": 51
    }
  ],
  "location": "CompraSteps.feito_o_checkout_e_preenchido(String,String,String)"
});
formatter.result({
  "duration": 362914700,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 102191400,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 75831300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 139819300,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 705374100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded21.png");
formatter.after({
  "duration": 149852000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded22.png");
formatter.after({
  "duration": 115568600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded23.png");
formatter.after({
  "duration": 108234500,
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
  "duration": 2757002400,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": ": Efetuar compra com multiplos usuarios com fluxo nao impeditivo e validar valor total",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Compra-multi-user"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Que o usuario efetuou login incluindo \"performance_glitch_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "selecionou um produto \"4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "feito o checkout e preenchido \"Eduardo\" \"Claudio\" \"54377750\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 18,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "performance_glitch_user",
      "offset": 39
    },
    {
      "val": "secret_sauce",
      "offset": 67
    }
  ],
  "location": "CarrinhoSteps.que_o_usuario_efetuou_login_incluindo_e(String,String)"
});
formatter.result({
  "duration": 5373330300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    }
  ],
  "location": "CompraSteps.selecionouUmProduto(String)"
});
formatter.result({
  "duration": 434607800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Eduardo",
      "offset": 31
    },
    {
      "val": "Claudio",
      "offset": 41
    },
    {
      "val": "54377750",
      "offset": 51
    }
  ],
  "location": "CompraSteps.feito_o_checkout_e_preenchido(String,String,String)"
});
formatter.result({
  "duration": 368389800,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 103057700,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 78539800,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 172437000,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 698686900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded24.png");
formatter.after({
  "duration": 162798700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded25.png");
formatter.after({
  "duration": 120304300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded26.png");
formatter.after({
  "duration": 111016300,
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
  "duration": 2659231100,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": ": Efetuar compra com multiplos usuarios com fluxo nao impeditivo e validar valor total",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Compra-multi-user"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Que o usuario efetuou login incluindo \"visual_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "selecionou um produto \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "feito o checkout e preenchido \"Heberth\" \"Silva\" \"99864436\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 18,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "visual_user",
      "offset": 39
    },
    {
      "val": "secret_sauce",
      "offset": 55
    }
  ],
  "location": "CarrinhoSteps.que_o_usuario_efetuou_login_incluindo_e(String,String)"
});
formatter.result({
  "duration": 347602000,
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
  "duration": 445019700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Heberth",
      "offset": 31
    },
    {
      "val": "Silva",
      "offset": 41
    },
    {
      "val": "99864436",
      "offset": 49
    }
  ],
  "location": "CompraSteps.feito_o_checkout_e_preenchido(String,String,String)"
});
formatter.result({
  "duration": 361341800,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 89697200,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 80866000,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 147945300,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 699663700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded27.png");
formatter.after({
  "duration": 139578400,
  "status": "passed"
});
formatter.embedding("image/png", "embedded28.png");
formatter.after({
  "duration": 113537200,
  "status": "passed"
});
formatter.embedding("image/png", "embedded29.png");
formatter.after({
  "duration": 152107200,
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
  "duration": 2636728300,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": ": Efetuar compra com multiplos usuarios com fluxo nao impeditivo e validar valor total",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;7",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 9,
      "name": "@Compra-multi-user"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "Que o usuario efetuou login incluindo \"visual_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 13,
  "name": "selecionou um produto \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 14,
  "name": "feito o checkout e preenchido \"Talita\" \"Nascimento\" \"99633551\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 15,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 16,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 17,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 18,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "visual_user",
      "offset": 39
    },
    {
      "val": "secret_sauce",
      "offset": 55
    }
  ],
  "location": "CarrinhoSteps.que_o_usuario_efetuou_login_incluindo_e(String,String)"
});
formatter.result({
  "duration": 349891100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "CompraSteps.selecionouUmProduto(String)"
});
formatter.result({
  "duration": 443825800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Talita",
      "offset": 31
    },
    {
      "val": "Nascimento",
      "offset": 40
    },
    {
      "val": "99633551",
      "offset": 53
    }
  ],
  "location": "CompraSteps.feito_o_checkout_e_preenchido(String,String,String)"
});
formatter.result({
  "duration": 362675300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 103919100,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 83392700,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 147606000,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 705407100,
  "status": "passed"
});
formatter.embedding("image/png", "embedded30.png");
formatter.after({
  "duration": 128767800,
  "status": "passed"
});
formatter.embedding("image/png", "embedded31.png");
formatter.after({
  "duration": 112614000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded32.png");
formatter.after({
  "duration": 112384400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 30,
  "name": "Efetuar login com usuario locked-out-user",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;efetuar-login-com-usuario-locked-out-user",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 29,
      "name": "@Locked-out-user"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "que foi incluido \"\u003clogin\u003e\" e \"\u003csenha\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 33,
  "name": "clicar em Login",
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "sera exibido \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;efetuar-login-com-usuario-locked-out-user;",
  "rows": [
    {
      "cells": [
        "login",
        "senha",
        "mensagem"
      ],
      "line": 39,
      "id": "fluxo-de-compra-com-multiplos-usuários;efetuar-login-com-usuario-locked-out-user;;1"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ],
      "line": 40,
      "id": "fluxo-de-compra-com-multiplos-usuários;efetuar-login-com-usuario-locked-out-user;;2"
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
  "duration": 2601873800,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Efetuar login com usuario locked-out-user",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;efetuar-login-com-usuario-locked-out-user;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 29,
      "name": "@Locked-out-user"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "que foi incluido \"locked_out_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 33,
  "name": "clicar em Login",
  "keyword": "Quando "
});
formatter.step({
  "line": 34,
  "name": "sera exibido \"Epic sadface: Sorry, this user has been locked out.\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "locked_out_user",
      "offset": 18
    },
    {
      "val": "secret_sauce",
      "offset": 38
    }
  ],
  "location": "MultiplosUsuariosSteps.que_foi_incluido_e(String,String)"
});
formatter.result({
  "duration": 206051200,
  "status": "passed"
});
formatter.match({
  "location": "MultiplosUsuariosSteps.clicar_em_Login()"
});
formatter.result({
  "duration": 94521800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Epic sadface: Sorry, this user has been locked out.",
      "offset": 14
    }
  ],
  "location": "MultiplosUsuariosSteps.sera_exibido(String)"
});
formatter.result({
  "duration": 54416000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded33.png");
formatter.after({
  "duration": 113498000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded34.png");
formatter.after({
  "duration": 118042600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded35.png");
formatter.after({
  "duration": 135140800,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 43,
  "name": "Fluxo de compra com usuario com problema",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-problema",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 42,
      "name": "@Problem-user"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "Que o usuario efetuou login incluindo \"\u003cusername\u003e\" e \"\u003cpassword\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 46,
  "name": "selecionou um produto \"\u003cindex\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "feito o checkout e preenchido \"\u003cnome\u003e\" \"\u003csobrenome\u003e\" \"\u003cpostalcode\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 48,
  "name": "e exibido \"\u003cmensagem\u003e\" de erro",
  "keyword": "Entao "
});
formatter.step({
  "line": 49,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.examples({
  "comments": [
    {
      "line": 51,
      "value": "#Ao selecionar o problem_User ao, na tela de Checkout-Information, o input de \"LastName\" sobrepõe o \"FirstName"
    }
  ],
  "line": 53,
  "name": "",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-problema;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "index",
        "nome",
        "sobrenome",
        "postalcode",
        "mensagem"
      ],
      "line": 54,
      "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-problema;;1"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce",
        "1",
        "Luana",
        "Flores",
        "86364895",
        "Error: Last Name is required"
      ],
      "line": 55,
      "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-problema;;2"
    },
    {
      "cells": [
        "problem_user",
        "secret_sauce",
        "2",
        "Viviane",
        "Macedo",
        "18264976",
        "Error: Last Name is required"
      ],
      "line": 56,
      "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-problema;;3"
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
  "duration": 2654518600,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Fluxo de compra com usuario com problema",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-problema;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 42,
      "name": "@Problem-user"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "Que o usuario efetuou login incluindo \"problem_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 46,
  "name": "selecionou um produto \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "feito o checkout e preenchido \"Luana\" \"Flores\" \"86364895\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 48,
  "name": "e exibido \"Error: Last Name is required\" de erro",
  "matchedColumns": [
    6
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 49,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 39
    },
    {
      "val": "secret_sauce",
      "offset": 56
    }
  ],
  "location": "CarrinhoSteps.que_o_usuario_efetuou_login_incluindo_e(String,String)"
});
formatter.result({
  "duration": 336960300,
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
  "duration": 440677000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luana",
      "offset": 31
    },
    {
      "val": "Flores",
      "offset": 39
    },
    {
      "val": "86364895",
      "offset": 48
    }
  ],
  "location": "CompraSteps.feito_o_checkout_e_preenchido(String,String,String)"
});
formatter.result({
  "duration": 362302700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Error: Last Name is required",
      "offset": 11
    }
  ],
  "location": "MultiplosUsuariosSteps.eExibidoDeErro(String)"
});
formatter.result({
  "duration": 40896200,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 698826300,
  "status": "passed"
});
formatter.embedding("image/png", "embedded36.png");
formatter.after({
  "duration": 158067200,
  "status": "passed"
});
formatter.embedding("image/png", "embedded37.png");
formatter.after({
  "duration": 118619200,
  "status": "passed"
});
formatter.embedding("image/png", "embedded38.png");
formatter.after({
  "duration": 134956500,
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
  "duration": 2759823800,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Fluxo de compra com usuario com problema",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-problema;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 42,
      "name": "@Problem-user"
    }
  ]
});
formatter.step({
  "line": 45,
  "name": "Que o usuario efetuou login incluindo \"problem_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 46,
  "name": "selecionou um produto \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 47,
  "name": "feito o checkout e preenchido \"Viviane\" \"Macedo\" \"18264976\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 48,
  "name": "e exibido \"Error: Last Name is required\" de erro",
  "matchedColumns": [
    6
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 49,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "problem_user",
      "offset": 39
    },
    {
      "val": "secret_sauce",
      "offset": 56
    }
  ],
  "location": "CarrinhoSteps.que_o_usuario_efetuou_login_incluindo_e(String,String)"
});
formatter.result({
  "duration": 343431700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "CompraSteps.selecionouUmProduto(String)"
});
formatter.result({
  "duration": 478193000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Viviane",
      "offset": 31
    },
    {
      "val": "Macedo",
      "offset": 41
    },
    {
      "val": "18264976",
      "offset": 50
    }
  ],
  "location": "CompraSteps.feito_o_checkout_e_preenchido(String,String,String)"
});
formatter.result({
  "duration": 398835800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Error: Last Name is required",
      "offset": 11
    }
  ],
  "location": "MultiplosUsuariosSteps.eExibidoDeErro(String)"
});
formatter.result({
  "duration": 52016400,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 705812700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded39.png");
formatter.after({
  "duration": 127943900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded40.png");
formatter.after({
  "duration": 113229200,
  "status": "passed"
});
formatter.embedding("image/png", "embedded41.png");
formatter.after({
  "duration": 155176500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 57,
      "value": "#|      problem_user       | secret_sauce |    3   |   Viviane  |   Macedo    |    18264976    |    Error: Last Name is required        |"
    }
  ],
  "line": 61,
  "name": "Fluxo de compra com usuario com erro",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-erro",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 60,
      "name": "@Error-user"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "Que o usuario efetuou login incluindo \"\u003cusername\u003e\" e \"\u003cpassword\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 63,
  "name": "selecionou um produto \"\u003cindex\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 64,
  "name": "feito o checkout e preenchido \"\u003cnome\u003e\" \"\u003csobrenome\u003e\" \"\u003cpostalcode\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 65,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 66,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "comments": [
    {
      "line": 67,
      "value": "#O step a seguir(Que está comentado) seria o correto, dentro do contexto de falha, foi criado um step que indica que a compra não foi feita."
    },
    {
      "line": 68,
      "value": "#Entao a compra e efetuada"
    }
  ],
  "line": 69,
  "name": "a compra nao foi efetuada",
  "keyword": "Entao "
});
formatter.examples({
  "line": 71,
  "name": "",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-erro;",
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
      "line": 72,
      "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-erro;;1"
    },
    {
      "cells": [
        "error_user",
        "secret_sauce",
        "1",
        "Luana",
        "Flores",
        "86364895"
      ],
      "line": 73,
      "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-erro;;2"
    },
    {
      "cells": [
        "error_user",
        "secret_sauce",
        "2",
        "Valmir",
        "Cleiton",
        "76567895"
      ],
      "line": 74,
      "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-erro;;3"
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
  "duration": 2727444600,
  "status": "passed"
});
formatter.scenario({
  "line": 73,
  "name": "Fluxo de compra com usuario com erro",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-erro;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 60,
      "name": "@Error-user"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "Que o usuario efetuou login incluindo \"error_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 63,
  "name": "selecionou um produto \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 64,
  "name": "feito o checkout e preenchido \"Luana\" \"Flores\" \"86364895\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 65,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 66,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "comments": [
    {
      "line": 67,
      "value": "#O step a seguir(Que está comentado) seria o correto, dentro do contexto de falha, foi criado um step que indica que a compra não foi feita."
    },
    {
      "line": 68,
      "value": "#Entao a compra e efetuada"
    }
  ],
  "line": 69,
  "name": "a compra nao foi efetuada",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "error_user",
      "offset": 39
    },
    {
      "val": "secret_sauce",
      "offset": 54
    }
  ],
  "location": "CarrinhoSteps.que_o_usuario_efetuou_login_incluindo_e(String,String)"
});
formatter.result({
  "duration": 349300700,
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
  "duration": 471602100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Luana",
      "offset": 31
    },
    {
      "val": "Flores",
      "offset": 39
    },
    {
      "val": "86364895",
      "offset": 48
    }
  ],
  "location": "CompraSteps.feito_o_checkout_e_preenchido(String,String,String)"
});
formatter.result({
  "duration": 363349600,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 89504700,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 72715800,
  "status": "passed"
});
formatter.match({
  "location": "MultiplosUsuariosSteps.aCompraNaoFoiEfetuada()"
});
formatter.result({
  "duration": 2805900,
  "status": "passed"
});
formatter.embedding("image/png", "embedded42.png");
formatter.after({
  "duration": 126561000,
  "status": "passed"
});
formatter.embedding("image/png", "embedded43.png");
formatter.after({
  "duration": 108083700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded44.png");
formatter.after({
  "duration": 132258800,
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
  "duration": 2770543400,
  "status": "passed"
});
formatter.scenario({
  "line": 74,
  "name": "Fluxo de compra com usuario com erro",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-erro;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 60,
      "name": "@Error-user"
    }
  ]
});
formatter.step({
  "line": 62,
  "name": "Que o usuario efetuou login incluindo \"error_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 63,
  "name": "selecionou um produto \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 64,
  "name": "feito o checkout e preenchido \"Valmir\" \"Cleiton\" \"76567895\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 65,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 66,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "comments": [
    {
      "line": 67,
      "value": "#O step a seguir(Que está comentado) seria o correto, dentro do contexto de falha, foi criado um step que indica que a compra não foi feita."
    },
    {
      "line": 68,
      "value": "#Entao a compra e efetuada"
    }
  ],
  "line": 69,
  "name": "a compra nao foi efetuada",
  "keyword": "Entao "
});
formatter.match({
  "arguments": [
    {
      "val": "error_user",
      "offset": 39
    },
    {
      "val": "secret_sauce",
      "offset": 54
    }
  ],
  "location": "CarrinhoSteps.que_o_usuario_efetuou_login_incluindo_e(String,String)"
});
formatter.result({
  "duration": 346764400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "CompraSteps.selecionouUmProduto(String)"
});
formatter.result({
  "duration": 445279700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Valmir",
      "offset": 31
    },
    {
      "val": "Cleiton",
      "offset": 40
    },
    {
      "val": "76567895",
      "offset": 50
    }
  ],
  "location": "CompraSteps.feito_o_checkout_e_preenchido(String,String,String)"
});
formatter.result({
  "duration": 362223300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 105348100,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 70091400,
  "status": "passed"
});
formatter.match({
  "location": "MultiplosUsuariosSteps.aCompraNaoFoiEfetuada()"
});
formatter.result({
  "duration": 2224800,
  "status": "passed"
});
formatter.embedding("image/png", "embedded45.png");
formatter.after({
  "duration": 134336600,
  "status": "passed"
});
formatter.embedding("image/png", "embedded46.png");
formatter.after({
  "duration": 121573700,
  "status": "passed"
});
formatter.embedding("image/png", "embedded47.png");
formatter.after({
  "duration": 125864100,
  "status": "passed"
});
});