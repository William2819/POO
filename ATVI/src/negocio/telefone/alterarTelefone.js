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
var telefone_1 = require("../../modelo/telefone");
var alterar_1 = require("../alterar");
var selecionarCliente_1 = require("./selecionarCliente");
var selecionarTelefone_1 = require("./selecionarTelefone");
var AlteraTelefone = /** @class */ (function (_super) {
    __extends(AlteraTelefone, _super);
    function AlteraTelefone(clientes) {
        var _this = _super.call(this) || this;
        _this.telefone = [];
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AlteraTelefone.prototype.alterar = function () {
        //perguntar cliente
        var cliente = new selecionarCliente_1.default(this.clientes).selecionar();
        var telefone = new selecionarTelefone_1.default(this.telefone).selecionar();
        console.log("\nVamos cadastrar um NOVO telefone para contato ");
        var novoDdd = this.entrada.receberTexto("Informe o DDD: ");
        var novoNumero = this.entrada.receberTexto("N\u00FAmero do Telefone: ");
        var novoTelefone = new telefone_1.default(novoDdd, novoNumero);
        cliente.getTelefones[telefone] = novoTelefone;
        console.log("\n Telefone Alterado com Sucesso! :)");
    };
    return AlteraTelefone;
}(alterar_1.default));
exports.default = AlteraTelefone;
