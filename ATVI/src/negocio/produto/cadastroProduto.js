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
var cadastrar_1 = require("../cadastrar");
var cadastroProduto = /** @class */ (function (_super) {
    __extends(cadastroProduto, _super);
    function cadastroProduto(produtos) {
        var _this = _super.call(this) || this;
        _this.produtos = produtos;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    cadastroProduto.prototype.cadastrar = function () {
        console.log("\nIn\u00EDcio do cadastro do produto");
        var nome = this.entrada.receberTexto("Informe o nome do produto: ");
        var preco = this.entrada.receberNumero("Informe o pre\u00E7o do produto: ");
        var produto = new produto_1.default(nome, preco);
        this.produtos.push(produto);
        console.log("\nCadastro conclu\u00EDdo! \n");
    };
    return cadastroProduto;
}(cadastrar_1.default));
exports.default = cadastroProduto;
