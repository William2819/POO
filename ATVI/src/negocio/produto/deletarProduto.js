"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../../io/entrada");
var deletar_1 = require("../deletar");
var DeletarProduto = /** @class */ (function (_super) {
    __extends(DeletarProduto, _super);
    function DeletarProduto(produto) {
        var _this = _super.call(this) || this;
        _this.produtos = produto;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    DeletarProduto.prototype.deletar = function () {
        console.log("\nIn\u00EDcio da exclus\u00E3o do produto");
        if (this.produtos.length == 0)
            return console.log("\nN\u00E3o h\u00E1 produtos cadastrados");
        var nome = this.entrada.receberTexto("Insira o nome do produto:");
        var indice = this.produtos.findIndex(function (n) { return n.nome === nome; });
        while (indice == -1) {
            nome = this.entrada.receberTexto("Produto não encontrado, por favor insira o nome do produto novamente:");
            indice = this.produtos.findIndex(function (n) { return n.nome === nome; });
        }
        var produto = this.produtos[indice];
        var resposta = this.entrada.receberTexto("Confirma a exclus\u00E3o do produto: ".concat(produto.nome, ", com o valor de ").concat(produto.preco, "?(s/n)"));
        var respostaCorreta = false;
        if (resposta == "s" || resposta == "n") {
            respostaCorreta = true;
        }
        while (!respostaCorreta) {
            resposta = this.entrada.receberTexto("Confirma a exclus\u00E3o do produto: ".concat(produto.nome, ", com o valor de ").concat(produto.preco, "?(s/n)"));
            if (resposta == "s" || resposta == "n") {
                respostaCorreta = true;
            }
        }
        if (resposta == "s") {
            this.produtos.splice(indice, 1);
            console.log("Exclusão realizada com sucesso!");
        }
        else {
            console.log("Ok, exclusão não realizada.");
        }
    };
    return DeletarProduto;
}(deletar_1.default));
exports.default = DeletarProduto;
