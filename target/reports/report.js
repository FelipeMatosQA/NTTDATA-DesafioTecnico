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
  "line": 18,
  "name": ": Validar nome e valor do item adicionado ao carrinho",
  "description": "",
  "id": "carrinho-de-compras;:-validar-nome-e-valor-do-item-adicionado-ao-carrinho",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@Id-1"
    },
    {
      "line": 16,
      "name": "@Item-1"
    },
    {
      "line": 17,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "um item \"\u003cindex\u003e\"e adicionado ao carrinho",
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "o carrinho e acessado",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "o produto e adicionado ao carrinho",
  "keyword": "Entao "
});
formatter.step({
  "line": 24,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.examples({
  "line": 27,
  "name": "",
  "description": "",
  "id": "carrinho-de-compras;:-validar-nome-e-valor-do-item-adicionado-ao-carrinho;",
  "rows": [
    {
      "cells": [
        "index"
      ],
      "line": 29,
      "id": "carrinho-de-compras;:-validar-nome-e-valor-do-item-adicionado-ao-carrinho;;1"
    },
    {
      "cells": [
        "1"
      ],
      "line": 30,
      "id": "carrinho-de-compras;:-validar-nome-e-valor-do-item-adicionado-ao-carrinho;;2"
    },
    {
      "cells": [
        "2"
      ],
      "line": 31,
      "id": "carrinho-de-compras;:-validar-nome-e-valor-do-item-adicionado-ao-carrinho;;3"
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
  "duration": 3225702400,
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
  "duration": 379433000,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": ": Validar nome e valor do item adicionado ao carrinho",
  "description": "",
  "id": "carrinho-de-compras;:-validar-nome-e-valor-do-item-adicionado-ao-carrinho;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 16,
      "name": "@Item-1"
    },
    {
      "line": 15,
      "name": "@Id-1"
    },
    {
      "line": 17,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "um item \"1\"e adicionado ao carrinho",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "o carrinho e acessado",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "o produto e adicionado ao carrinho",
  "keyword": "Entao "
});
formatter.step({
  "line": 24,
  "name": "e feito logout",
  "keyword": "E "
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
  "duration": 195517300,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_carrinho_e_acessado()"
});
formatter.result({
  "duration": 107840600,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_produto_e_adicionado_ao_carrinho()"
});
formatter.result({
  "duration": 110515900,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 701826500,
  "status": "passed"
});
formatter.after({
  "duration": 169880000,
  "status": "passed"
});
formatter.after({
  "duration": 120344100,
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
  "duration": 2676823700,
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
  "duration": 342976200,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": ": Validar nome e valor do item adicionado ao carrinho",
  "description": "",
  "id": "carrinho-de-compras;:-validar-nome-e-valor-do-item-adicionado-ao-carrinho;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 16,
      "name": "@Item-1"
    },
    {
      "line": 15,
      "name": "@Id-1"
    },
    {
      "line": 17,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "um item \"2\"e adicionado ao carrinho",
  "matchedColumns": [
    0
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 22,
  "name": "o carrinho e acessado",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "o produto e adicionado ao carrinho",
  "keyword": "Entao "
});
formatter.step({
  "line": 24,
  "name": "e feito logout",
  "keyword": "E "
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
  "duration": 166691500,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_carrinho_e_acessado()"
});
formatter.result({
  "duration": 109736300,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_produto_e_adicionado_ao_carrinho()"
});
formatter.result({
  "duration": 92317500,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 704686700,
  "status": "passed"
});
formatter.after({
  "duration": 149325800,
  "status": "passed"
});
formatter.after({
  "duration": 114726100,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 36,
  "name": "Validar valores de multiplos itens no carrinho",
  "description": "",
  "id": "carrinho-de-compras;validar-valores-de-multiplos-itens-no-carrinho",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 33,
      "name": "@Id-2"
    },
    {
      "line": 34,
      "name": "@Item-1"
    },
    {
      "line": 35,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "multiplos itens\"\u003cindex1\u003e\" \"\u003cindex2\u003e\" sao adicionados ao carrinho",
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "o carrinho e acessado",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "os produtos sao adicionados ao carrinho",
  "keyword": "Entao "
});
formatter.step({
  "line": 42,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.examples({
  "line": 44,
  "name": "",
  "description": "",
  "id": "carrinho-de-compras;validar-valores-de-multiplos-itens-no-carrinho;",
  "rows": [
    {
      "cells": [
        "index1",
        "index2"
      ],
      "line": 46,
      "id": "carrinho-de-compras;validar-valores-de-multiplos-itens-no-carrinho;;1"
    },
    {
      "cells": [
        "1",
        "2"
      ],
      "line": 47,
      "id": "carrinho-de-compras;validar-valores-de-multiplos-itens-no-carrinho;;2"
    },
    {
      "cells": [
        "3",
        "4"
      ],
      "line": 48,
      "id": "carrinho-de-compras;validar-valores-de-multiplos-itens-no-carrinho;;3"
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
  "duration": 2652813700,
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
  "duration": 346092700,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Validar valores de multiplos itens no carrinho",
  "description": "",
  "id": "carrinho-de-compras;validar-valores-de-multiplos-itens-no-carrinho;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 34,
      "name": "@Item-1"
    },
    {
      "line": 33,
      "name": "@Id-2"
    },
    {
      "line": 35,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "multiplos itens\"1\" \"2\" sao adicionados ao carrinho",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "o carrinho e acessado",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "os produtos sao adicionados ao carrinho",
  "keyword": "Entao "
});
formatter.step({
  "line": 42,
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
  "duration": 316008400,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_carrinho_e_acessado()"
});
formatter.result({
  "duration": 106594400,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.osProdutosSaoAdicionadosAoCarrinho()"
});
formatter.result({
  "duration": 96808000,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 702572000,
  "status": "passed"
});
formatter.after({
  "duration": 143896400,
  "status": "passed"
});
formatter.after({
  "duration": 117617700,
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
  "duration": 2774425800,
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
  "duration": 350004600,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Validar valores de multiplos itens no carrinho",
  "description": "",
  "id": "carrinho-de-compras;validar-valores-de-multiplos-itens-no-carrinho;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 34,
      "name": "@Item-1"
    },
    {
      "line": 33,
      "name": "@Id-2"
    },
    {
      "line": 35,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "multiplos itens\"3\" \"4\" sao adicionados ao carrinho",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 40,
  "name": "o carrinho e acessado",
  "keyword": "E "
});
formatter.step({
  "line": 41,
  "name": "os produtos sao adicionados ao carrinho",
  "keyword": "Entao "
});
formatter.step({
  "line": 42,
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
      "val": "4",
      "offset": 20
    }
  ],
  "location": "CarrinhoSteps.multiplosItensSaoAdicionadosAoCarrinho(String,String)"
});
formatter.result({
  "duration": 323240200,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.o_carrinho_e_acessado()"
});
formatter.result({
  "duration": 101976400,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.osProdutosSaoAdicionadosAoCarrinho()"
});
formatter.result({
  "duration": 97487900,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 703641300,
  "status": "passed"
});
formatter.after({
  "duration": 140353700,
  "status": "passed"
});
formatter.after({
  "duration": 107290400,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 53,
  "name": "Validar remocao de itens no carrinho pelo icone",
  "description": "",
  "id": "carrinho-de-compras;validar-remocao-de-itens-no-carrinho-pelo-icone",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 50,
      "name": "@Id-3"
    },
    {
      "line": 51,
      "name": "@Extra"
    },
    {
      "line": 52,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "que multiplos itens\"\u003cindex1\u003e\" \"\u003cindex2\u003e\" sao adicionados ao carrinho",
  "keyword": "Dado "
});
formatter.step({
  "line": 57,
  "name": "o icone do carrinho deve ser alterado com a quantidade de itens",
  "keyword": "E "
});
formatter.step({
  "line": 58,
  "name": "o botao remover e clicado",
  "keyword": "Quando "
});
formatter.step({
  "line": 59,
  "name": "o icone do carrinho deve ser subtraido",
  "keyword": "Entao "
});
formatter.step({
  "line": 60,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.examples({
  "line": 62,
  "name": "",
  "description": "",
  "id": "carrinho-de-compras;validar-remocao-de-itens-no-carrinho-pelo-icone;",
  "rows": [
    {
      "cells": [
        "index1",
        "index2"
      ],
      "line": 63,
      "id": "carrinho-de-compras;validar-remocao-de-itens-no-carrinho-pelo-icone;;1"
    },
    {
      "cells": [
        "1",
        "2"
      ],
      "line": 64,
      "id": "carrinho-de-compras;validar-remocao-de-itens-no-carrinho-pelo-icone;;2"
    },
    {
      "cells": [
        "3",
        "1"
      ],
      "line": 65,
      "id": "carrinho-de-compras;validar-remocao-de-itens-no-carrinho-pelo-icone;;3"
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
  "duration": 2644248400,
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
  "duration": 334463100,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Validar remocao de itens no carrinho pelo icone",
  "description": "",
  "id": "carrinho-de-compras;validar-remocao-de-itens-no-carrinho-pelo-icone;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 50,
      "name": "@Id-3"
    },
    {
      "line": 51,
      "name": "@Extra"
    },
    {
      "line": 52,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "que multiplos itens\"1\" \"2\" sao adicionados ao carrinho",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 57,
  "name": "o icone do carrinho deve ser alterado com a quantidade de itens",
  "keyword": "E "
});
formatter.step({
  "line": 58,
  "name": "o botao remover e clicado",
  "keyword": "Quando "
});
formatter.step({
  "line": 59,
  "name": "o icone do carrinho deve ser subtraido",
  "keyword": "Entao "
});
formatter.step({
  "line": 60,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 20
    },
    {
      "val": "2",
      "offset": 24
    }
  ],
  "location": "CarrinhoSteps.queMultiplosItensSaoAdicionadosAoCarrinho(String,String)"
});
formatter.result({
  "duration": 324738300,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.oIconeDoCarrinhoDeveSerAlteradoComAQuantidadeDeItens()"
});
formatter.result({
  "duration": 45956600,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.oBotaoRemoverEClicado()"
});
formatter.result({
  "duration": 68060900,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.oIconeDoCarrinhoDeveSerSubtraido()"
});
formatter.result({
  "duration": 56309000,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 702225500,
  "status": "passed"
});
formatter.after({
  "duration": 127230600,
  "status": "passed"
});
formatter.after({
  "duration": 139249700,
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
  "duration": 2675512800,
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
  "duration": 355078700,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Validar remocao de itens no carrinho pelo icone",
  "description": "",
  "id": "carrinho-de-compras;validar-remocao-de-itens-no-carrinho-pelo-icone;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 50,
      "name": "@Id-3"
    },
    {
      "line": 51,
      "name": "@Extra"
    },
    {
      "line": 52,
      "name": "@Carrinho"
    }
  ]
});
formatter.step({
  "line": 56,
  "name": "que multiplos itens\"3\" \"1\" sao adicionados ao carrinho",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 57,
  "name": "o icone do carrinho deve ser alterado com a quantidade de itens",
  "keyword": "E "
});
formatter.step({
  "line": 58,
  "name": "o botao remover e clicado",
  "keyword": "Quando "
});
formatter.step({
  "line": 59,
  "name": "o icone do carrinho deve ser subtraido",
  "keyword": "Entao "
});
formatter.step({
  "line": 60,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 20
    },
    {
      "val": "1",
      "offset": 24
    }
  ],
  "location": "CarrinhoSteps.queMultiplosItensSaoAdicionadosAoCarrinho(String,String)"
});
formatter.result({
  "duration": 342015600,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.oIconeDoCarrinhoDeveSerAlteradoComAQuantidadeDeItens()"
});
formatter.result({
  "duration": 47057200,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.oBotaoRemoverEClicado()"
});
formatter.result({
  "duration": 67489400,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.oIconeDoCarrinhoDeveSerSubtraido()"
});
formatter.result({
  "duration": 55547700,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 704425800,
  "status": "passed"
});
formatter.after({
  "duration": 121660500,
  "status": "passed"
});
formatter.after({
  "duration": 122223800,
  "status": "passed"
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
      "name": "@Carrinho"
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
  "duration": 2626789000,
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
  "duration": 342081600,
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
      "line": 67,
      "name": "@Id-4"
    },
    {
      "line": 68,
      "name": "@Extra"
    },
    {
      "line": 69,
      "name": "@Carrinho"
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
  "duration": 326589900,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.oIconeDoCarrinhoDeveSerAlteradoComAQuantidadeDeItens()"
});
formatter.result({
  "duration": 45112400,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 702839000,
  "status": "passed"
});
formatter.after({
  "duration": 133530800,
  "status": "passed"
});
formatter.after({
  "duration": 114028700,
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
  "duration": 2558633800,
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
  "duration": 348996000,
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
      "line": 67,
      "name": "@Id-4"
    },
    {
      "line": 68,
      "name": "@Extra"
    },
    {
      "line": 69,
      "name": "@Carrinho"
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
  "duration": 324212500,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.oIconeDoCarrinhoDeveSerAlteradoComAQuantidadeDeItens()"
});
formatter.result({
  "duration": 46255100,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 704611200,
  "status": "passed"
});
formatter.after({
  "duration": 135750700,
  "status": "passed"
});
formatter.after({
  "duration": 123248700,
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
  "description": "\r\nComo usuário,\r\nQuero concluir minhas compras online com facilidade,\r\nPara ter uma experiência de compra positiva.",
  "id": "efetuar-compra",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 18,
  "name": ": Efetuar compra e validar valor total",
  "description": "",
  "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@Id-5"
    },
    {
      "line": 16,
      "name": "@Item-2"
    },
    {
      "line": 17,
      "name": "@Compra"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "selecionou um produto \"\u003cindex\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "feito o checkout e preenchido \"\u003cnome\u003e\" \"\u003csobrenome\u003e\" \"\u003cpostalcode\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 26,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;",
  "rows": [
    {
      "cells": [
        "index",
        "nome",
        "sobrenome",
        "postalcode"
      ],
      "line": 29,
      "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;;1"
    },
    {
      "cells": [
        "1",
        "Felipe",
        "Matos",
        "54400220"
      ],
      "line": 30,
      "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;;2"
    },
    {
      "cells": [
        "2",
        "Filomena",
        "Eduarda",
        "44455221"
      ],
      "line": 31,
      "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;;3"
    },
    {
      "cells": [
        "3",
        "Filomena",
        "Juquinha",
        "44455222"
      ],
      "line": 32,
      "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;;4"
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
  "duration": 2705683200,
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
  "duration": 325866600,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": ": Efetuar compra e validar valor total",
  "description": "",
  "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 16,
      "name": "@Item-2"
    },
    {
      "line": 15,
      "name": "@Id-5"
    },
    {
      "line": 17,
      "name": "@Compra"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "selecionou um produto \"1\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "feito o checkout e preenchido \"Felipe\" \"Matos\" \"54400220\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 26,
  "name": "e feito logout",
  "keyword": "E "
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
  "duration": 465675900,
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
  "duration": 367057600,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 102435200,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 74433400,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 143593800,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 699267100,
  "status": "passed"
});
formatter.after({
  "duration": 144584700,
  "status": "passed"
});
formatter.after({
  "duration": 120438900,
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
  "duration": 2634632700,
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
  "duration": 338428100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": ": Efetuar compra e validar valor total",
  "description": "",
  "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 16,
      "name": "@Item-2"
    },
    {
      "line": 15,
      "name": "@Id-5"
    },
    {
      "line": 17,
      "name": "@Compra"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "selecionou um produto \"2\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "feito o checkout e preenchido \"Filomena\" \"Eduarda\" \"44455221\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 26,
  "name": "e feito logout",
  "keyword": "E "
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
  "duration": 444514500,
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
  "duration": 364388100,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 103857900,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 76221200,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 140710800,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 702065700,
  "status": "passed"
});
formatter.after({
  "duration": 131238300,
  "status": "passed"
});
formatter.after({
  "duration": 104084300,
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
  "duration": 2695181000,
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
  "duration": 335775400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": ": Efetuar compra e validar valor total",
  "description": "",
  "id": "efetuar-compra;:-efetuar-compra-e-validar-valor-total;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 16,
      "name": "@Item-2"
    },
    {
      "line": 15,
      "name": "@Id-5"
    },
    {
      "line": 17,
      "name": "@Compra"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "selecionou um produto \"3\"",
  "matchedColumns": [
    0
  ],
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "feito o checkout e preenchido \"Filomena\" \"Juquinha\" \"44455222\"",
  "matchedColumns": [
    1,
    2,
    3
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 23,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 24,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 25,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 26,
  "name": "e feito logout",
  "keyword": "E "
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
  "duration": 460613700,
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
  "duration": 364539100,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 90407000,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 74026100,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 143869300,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 702381100,
  "status": "passed"
});
formatter.after({
  "duration": 169033900,
  "status": "passed"
});
formatter.after({
  "duration": 108921100,
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
  "description": "\r\nComo usuário,\r\nQuero concluir minhas compras online com facilidade,\r\nPara ter uma experiência de compra positiva.",
  "id": "fluxo-de-compra-com-multiplos-usuários",
  "keyword": "Funcionalidade"
});
formatter.scenarioOutline({
  "line": 16,
  "name": ": Efetuar compra com multiplos usuarios com fluxo nao impeditivo e validar valor total",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 13,
      "name": "@Id-6"
    },
    {
      "line": 14,
      "name": "@Item-4"
    },
    {
      "line": 15,
      "name": "@Compra-multi-user"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Que o usuario efetuou login incluindo \"\u003cusername\u003e\" e \"\u003cpassword\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "selecionou um produto \"\u003cindex\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "feito o checkout e preenchido \"\u003cnome\u003e\" \"\u003csobrenome\u003e\" \"\u003cpostalcode\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 24,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.examples({
  "line": 26,
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
      "line": 27,
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
      "line": 28,
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
      "line": 29,
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
      "line": 30,
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
      "line": 31,
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
      "line": 32,
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
      "line": 33,
      "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;7"
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
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2713888900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": ": Efetuar compra com multiplos usuarios com fluxo nao impeditivo e validar valor total",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@Compra-multi-user"
    },
    {
      "line": 14,
      "name": "@Item-4"
    },
    {
      "line": 13,
      "name": "@Id-6"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Que o usuario efetuou login incluindo \"standard_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "selecionou um produto \"4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "feito o checkout e preenchido \"Felipe\" \"Matos\" \"54400220\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 24,
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
  "duration": 349724000,
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
  "duration": 444243300,
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
  "duration": 366834600,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 106041200,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 76861100,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 143234100,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 706041500,
  "status": "passed"
});
formatter.after({
  "duration": 154063900,
  "status": "passed"
});
formatter.after({
  "duration": 110532100,
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
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2670425800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": ": Efetuar compra com multiplos usuarios com fluxo nao impeditivo e validar valor total",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@Compra-multi-user"
    },
    {
      "line": 14,
      "name": "@Item-4"
    },
    {
      "line": 13,
      "name": "@Id-6"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Que o usuario efetuou login incluindo \"standard_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "selecionou um produto \"3\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "feito o checkout e preenchido \"Eduardo\" \"Vicente\" \"54376450\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 24,
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
  "duration": 345561800,
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
  "duration": 447456600,
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
  "duration": 365510300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 91028000,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 76401300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 141240900,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 699200400,
  "status": "passed"
});
formatter.after({
  "duration": 128644400,
  "status": "passed"
});
formatter.after({
  "duration": 108723100,
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
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2645031200,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": ": Efetuar compra com multiplos usuarios com fluxo nao impeditivo e validar valor total",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;4",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@Compra-multi-user"
    },
    {
      "line": 14,
      "name": "@Item-4"
    },
    {
      "line": 13,
      "name": "@Id-6"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Que o usuario efetuou login incluindo \"performance_glitch_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "selecionou um produto \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "feito o checkout e preenchido \"Filomena\" \"Santos\" \"56675220\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 24,
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
  "duration": 5362965400,
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
  "duration": 448181800,
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
  "duration": 363244400,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 123787000,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 86191100,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 143551100,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 699932400,
  "status": "passed"
});
formatter.after({
  "duration": 127998900,
  "status": "passed"
});
formatter.after({
  "duration": 116489100,
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
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2582965900,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": ": Efetuar compra com multiplos usuarios com fluxo nao impeditivo e validar valor total",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;5",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@Compra-multi-user"
    },
    {
      "line": 14,
      "name": "@Item-4"
    },
    {
      "line": 13,
      "name": "@Id-6"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Que o usuario efetuou login incluindo \"performance_glitch_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "selecionou um produto \"4\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "feito o checkout e preenchido \"Eduardo\" \"Claudio\" \"54377750\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 24,
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
  "duration": 5374396700,
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
  "duration": 437744800,
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
  "duration": 362588800,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 103365600,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 77116600,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 142656600,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 699809900,
  "status": "passed"
});
formatter.after({
  "duration": 164174100,
  "status": "passed"
});
formatter.after({
  "duration": 124786900,
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
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2650005900,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": ": Efetuar compra com multiplos usuarios com fluxo nao impeditivo e validar valor total",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;6",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@Compra-multi-user"
    },
    {
      "line": 14,
      "name": "@Item-4"
    },
    {
      "line": 13,
      "name": "@Id-6"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Que o usuario efetuou login incluindo \"visual_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "selecionou um produto \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "feito o checkout e preenchido \"Heberth\" \"Silva\" \"99864436\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 24,
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
  "duration": 340212500,
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
  "duration": 448807000,
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
  "duration": 364041600,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 89899900,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 80619900,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 137086000,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 702629100,
  "status": "passed"
});
formatter.after({
  "duration": 157451500,
  "status": "passed"
});
formatter.after({
  "duration": 136504900,
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
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2694563100,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": ": Efetuar compra com multiplos usuarios com fluxo nao impeditivo e validar valor total",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;:-efetuar-compra-com-multiplos-usuarios-com-fluxo-nao-impeditivo-e-validar-valor-total;;7",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 15,
      "name": "@Compra-multi-user"
    },
    {
      "line": 14,
      "name": "@Item-4"
    },
    {
      "line": 13,
      "name": "@Id-6"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "Que o usuario efetuou login incluindo \"visual_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 19,
  "name": "selecionou um produto \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 20,
  "name": "feito o checkout e preenchido \"Talita\" \"Nascimento\" \"99633551\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 21,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 22,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "line": 23,
  "name": "a compra e efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 24,
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
  "duration": 352283000,
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
  "duration": 448035500,
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
  "duration": 357693900,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 89991800,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 75933300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.a_compra_e_efetuada()"
});
formatter.result({
  "duration": 141717500,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 700050400,
  "status": "passed"
});
formatter.after({
  "duration": 165311200,
  "status": "passed"
});
formatter.after({
  "duration": 117969700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Efetuar login com usuario locked-out-user",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;efetuar-login-com-usuario-locked-out-user",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 36,
      "name": "@Id-7"
    },
    {
      "line": 37,
      "name": "@Item-4"
    },
    {
      "line": 38,
      "name": "@Locked-out-user"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "que foi incluido \"\u003clogin\u003e\" e \"\u003csenha\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 42,
  "name": "clicar em Login",
  "keyword": "Quando "
});
formatter.step({
  "line": 43,
  "name": "sera exibido \"\u003cmensagem\u003e\"",
  "keyword": "Entao "
});
formatter.examples({
  "line": 46,
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
      "line": 48,
      "id": "fluxo-de-compra-com-multiplos-usuários;efetuar-login-com-usuario-locked-out-user;;1"
    },
    {
      "cells": [
        "locked_out_user",
        "secret_sauce",
        "Epic sadface: Sorry, this user has been locked out."
      ],
      "line": 49,
      "id": "fluxo-de-compra-com-multiplos-usuários;efetuar-login-com-usuario-locked-out-user;;2"
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
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2663930000,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Efetuar login com usuario locked-out-user",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;efetuar-login-com-usuario-locked-out-user;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 37,
      "name": "@Item-4"
    },
    {
      "line": 36,
      "name": "@Id-7"
    },
    {
      "line": 38,
      "name": "@Locked-out-user"
    }
  ]
});
formatter.step({
  "line": 41,
  "name": "que foi incluido \"locked_out_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 42,
  "name": "clicar em Login",
  "keyword": "Quando "
});
formatter.step({
  "line": 43,
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
  "duration": 206211700,
  "status": "passed"
});
formatter.match({
  "location": "MultiplosUsuariosSteps.clicar_em_Login()"
});
formatter.result({
  "duration": 96122800,
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
  "duration": 58664800,
  "status": "passed"
});
formatter.after({
  "duration": 116069600,
  "status": "passed"
});
formatter.after({
  "duration": 147544200,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 55,
  "name": "Fluxo de compra com usuario com problema",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-problema",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 52,
      "name": "@Id-8"
    },
    {
      "line": 53,
      "name": "@Item-4"
    },
    {
      "line": 54,
      "name": "@Problem-user"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "Que o usuario efetuou login incluindo \"\u003cusername\u003e\" e \"\u003cpassword\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 58,
  "name": "selecionou um produto \"\u003cindex\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 59,
  "name": "feito o checkout e preenchido \"\u003cnome\u003e\" \"\u003csobrenome\u003e\" \"\u003cpostalcode\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 60,
  "name": "e exibido \"\u003cmensagem\u003e\" de erro",
  "keyword": "Entao "
});
formatter.step({
  "line": 61,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.examples({
  "comments": [
    {
      "line": 63,
      "value": "#Ao selecionar o problem_User ao, na tela de Checkout-Information, o input de \"LastName\" sobrepõe o \"FirstName"
    }
  ],
  "line": 65,
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
      "line": 66,
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
      "line": 67,
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
      "line": 68,
      "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-problema;;3"
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
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2646298800,
  "status": "passed"
});
formatter.scenario({
  "line": 67,
  "name": "Fluxo de compra com usuario com problema",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-problema;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 54,
      "name": "@Problem-user"
    },
    {
      "line": 53,
      "name": "@Item-4"
    },
    {
      "line": 52,
      "name": "@Id-8"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "Que o usuario efetuou login incluindo \"problem_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 58,
  "name": "selecionou um produto \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 59,
  "name": "feito o checkout e preenchido \"Luana\" \"Flores\" \"86364895\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 60,
  "name": "e exibido \"Error: Last Name is required\" de erro",
  "matchedColumns": [
    6
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 61,
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
  "duration": 329632200,
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
  "duration": 451978200,
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
  "duration": 363148100,
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
  "duration": 43311400,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 701696600,
  "status": "passed"
});
formatter.after({
  "duration": 161791700,
  "status": "passed"
});
formatter.after({
  "duration": 137196600,
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
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2701854700,
  "status": "passed"
});
formatter.scenario({
  "line": 68,
  "name": "Fluxo de compra com usuario com problema",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-problema;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 54,
      "name": "@Problem-user"
    },
    {
      "line": 53,
      "name": "@Item-4"
    },
    {
      "line": 52,
      "name": "@Id-8"
    }
  ]
});
formatter.step({
  "line": 57,
  "name": "Que o usuario efetuou login incluindo \"problem_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 58,
  "name": "selecionou um produto \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 59,
  "name": "feito o checkout e preenchido \"Viviane\" \"Macedo\" \"18264976\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 60,
  "name": "e exibido \"Error: Last Name is required\" de erro",
  "matchedColumns": [
    6
  ],
  "keyword": "Entao "
});
formatter.step({
  "line": 61,
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
  "duration": 340496700,
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
  "duration": 450367500,
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
  "duration": 365526300,
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
  "duration": 44380400,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 706789000,
  "status": "passed"
});
formatter.after({
  "duration": 122922400,
  "status": "passed"
});
formatter.after({
  "duration": 119448900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 74,
  "name": "Fluxo de compra com usuario com erro",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-erro",
  "type": "scenario_outline",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 71,
      "name": "@Id-9"
    },
    {
      "line": 72,
      "name": "@Item-4"
    },
    {
      "line": 73,
      "name": "@Error-user"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "Que o usuario efetuou login incluindo \"\u003cusername\u003e\" e \"\u003cpassword\u003e\"",
  "keyword": "Dado "
});
formatter.step({
  "line": 76,
  "name": "selecionou um produto \"\u003cindex\u003e\"",
  "keyword": "E "
});
formatter.step({
  "line": 77,
  "name": "feito o checkout e preenchido \"\u003cnome\u003e\" \"\u003csobrenome\u003e\" \"\u003cpostalcode\u003e\"",
  "keyword": "Quando "
});
formatter.step({
  "line": 78,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 79,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "comments": [
    {
      "line": 80,
      "value": "#O step a seguir(Que está comentado) seria o correto, dentro do contexto de falha, foi criado um step que indica que a compra não foi feita."
    },
    {
      "line": 81,
      "value": "#Entao a compra e efetuada"
    }
  ],
  "line": 82,
  "name": "a compra nao foi efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 83,
  "name": "e feito logout",
  "keyword": "E "
});
formatter.examples({
  "line": 85,
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
      "line": 86,
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
      "line": 87,
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
      "line": 88,
      "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-erro;;3"
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
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2676235500,
  "status": "passed"
});
formatter.scenario({
  "line": 87,
  "name": "Fluxo de compra com usuario com erro",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-erro;;2",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 73,
      "name": "@Error-user"
    },
    {
      "line": 72,
      "name": "@Item-4"
    },
    {
      "line": 71,
      "name": "@Id-9"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "Que o usuario efetuou login incluindo \"error_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 76,
  "name": "selecionou um produto \"1\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 77,
  "name": "feito o checkout e preenchido \"Luana\" \"Flores\" \"86364895\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 78,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 79,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "comments": [
    {
      "line": 80,
      "value": "#O step a seguir(Que está comentado) seria o correto, dentro do contexto de falha, foi criado um step que indica que a compra não foi feita."
    },
    {
      "line": 81,
      "value": "#Entao a compra e efetuada"
    }
  ],
  "line": 82,
  "name": "a compra nao foi efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 83,
  "name": "e feito logout",
  "keyword": "E "
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
  "duration": 331423400,
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
  "duration": 446789300,
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
  "duration": 360502400,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 91457400,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 70314400,
  "status": "passed"
});
formatter.match({
  "location": "MultiplosUsuariosSteps.aCompraNaoFoiEfetuada()"
});
formatter.result({
  "duration": 2034800,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 704535000,
  "status": "passed"
});
formatter.after({
  "duration": 124562100,
  "status": "passed"
});
formatter.after({
  "duration": 123226100,
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
formatter.match({
  "location": "CarrinhoSteps.que_eu_acessei_a_aplicacao()"
});
formatter.result({
  "duration": 2734464200,
  "status": "passed"
});
formatter.scenario({
  "line": 88,
  "name": "Fluxo de compra com usuario com erro",
  "description": "",
  "id": "fluxo-de-compra-com-multiplos-usuários;fluxo-de-compra-com-usuario-com-erro;;3",
  "type": "scenario",
  "keyword": "Esquema do Cenario",
  "tags": [
    {
      "line": 73,
      "name": "@Error-user"
    },
    {
      "line": 72,
      "name": "@Item-4"
    },
    {
      "line": 71,
      "name": "@Id-9"
    }
  ]
});
formatter.step({
  "line": 75,
  "name": "Que o usuario efetuou login incluindo \"error_user\" e \"secret_sauce\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Dado "
});
formatter.step({
  "line": 76,
  "name": "selecionou um produto \"2\"",
  "matchedColumns": [
    2
  ],
  "keyword": "E "
});
formatter.step({
  "line": 77,
  "name": "feito o checkout e preenchido \"Valmir\" \"Cleiton\" \"76567895\"",
  "matchedColumns": [
    3,
    4,
    5
  ],
  "keyword": "Quando "
});
formatter.step({
  "line": 78,
  "name": "as informacoes de checkou sao exibidas",
  "keyword": "E "
});
formatter.step({
  "line": 79,
  "name": "clicado em Finish",
  "keyword": "E "
});
formatter.step({
  "comments": [
    {
      "line": 80,
      "value": "#O step a seguir(Que está comentado) seria o correto, dentro do contexto de falha, foi criado um step que indica que a compra não foi feita."
    },
    {
      "line": 81,
      "value": "#Entao a compra e efetuada"
    }
  ],
  "line": 82,
  "name": "a compra nao foi efetuada",
  "keyword": "Entao "
});
formatter.step({
  "line": 83,
  "name": "e feito logout",
  "keyword": "E "
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
  "duration": 344707000,
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
  "duration": 448323100,
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
  "duration": 364875300,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.as_informacoes_de_checkou_sao_exibidas()"
});
formatter.result({
  "duration": 90542800,
  "status": "passed"
});
formatter.match({
  "location": "CompraSteps.clicado_em_Finish()"
});
formatter.result({
  "duration": 68466300,
  "status": "passed"
});
formatter.match({
  "location": "MultiplosUsuariosSteps.aCompraNaoFoiEfetuada()"
});
formatter.result({
  "duration": 1978600,
  "status": "passed"
});
formatter.match({
  "location": "CarrinhoSteps.eFeitoLogout()"
});
formatter.result({
  "duration": 711966700,
  "status": "passed"
});
formatter.after({
  "duration": 145738500,
  "status": "passed"
});
formatter.after({
  "duration": 119566400,
  "status": "passed"
});
});