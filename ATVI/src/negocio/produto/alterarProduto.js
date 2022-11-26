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
var produto_1 = require("../../modelo/produto");
var alterar_1 = require("../alterar");
var alterarProduto = /** @class */ (function (_super) {
    __extends(alterarProduto, _super);
    function alterarProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    alterarProduto.prototype.alterar = function () {
        if (this.produtos.length == 0)
            return console.log("\nN\u00E3o h\u00E1 produtos cadastrados");
        console.log("\nIn\u00EDcio da altera\u00E7\u00E3o do  produto");
        var nome = this.entrada.receberTexto("Informe o nome do produto: ");
        var indice = this.produtos.findIndex(function (i) { return i.nome === nome; });
        while (indice == -1) {
            nome = this.entrada.receberTexto("Informe novamente o nome do produto: ");
            indice = this.produtos.findIndex(function (i) { return i.nome === nome; });
        }
        var novoNome = this.entrada.receberTexto("Informe o NOVO nome do produto: ");
        var preco = this.entrada.receberNumero("Informe o NOVO pre\u00E7o do produto: ");
        var produto = new produto_1.default(novoNome, preco);
        this.produtos[indice] = produto;
        console.log("\nProduto alterado com sucesso! \n");
    };
    return alterarProduto;
}(alterar_1.default));
exports.default = alterarProduto;
