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
var cadastrar_1 = require("../cadastrar");
var CadastroTelefone = /** @class */ (function (_super) {
    __extends(CadastroTelefone, _super);
    function CadastroTelefone(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroTelefone.prototype.cadastrar = function () {
        //perguntar cliente
        var nome = this.entrada.receberTexto("Informe o nome do cliente para cadastrar o telefone: ");
        var cliente = this.clientes.find(function (cliente) { return cliente.nome === nome; });
        console.log("\nVamos cadastrar um telefone para contato: ");
        var ddd = this.entrada.receberTexto("Informe o DDD: ");
        var numero = this.entrada.receberTexto("N\u00FAmero do Telefone: ");
        var telefone = new telefone_1.default(ddd, numero);
        cliente === null || cliente === void 0 ? void 0 : cliente.addTelefone(telefone);
        console.log("\n Cadastro finalizado :)");
    };
    return CadastroTelefone;
}(cadastrar_1.default));
exports.default = CadastroTelefone;
