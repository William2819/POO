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
var listagemClientes_1 = require("./listagemClientes");
var DeletarCliente = /** @class */ (function (_super) {
    __extends(DeletarCliente, _super);
    function DeletarCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    DeletarCliente.prototype.listaClientes = function () {
        var listaClientes = new listagemClientes_1.default(this.clientes);
        listaClientes.listar();
        var entrada = new entrada_1.default();
        var cpf = entrada.receberTexto("Informar o CPF do cliente que deseja excluir: ");
        var indice = this.clientes.findIndex(function (i) { return i.getCpf.getValor === cpf; });
        this.clientes.splice(indice);
        return;
    };
    DeletarCliente.prototype.deletar = function () {
        console.log("\nIn\u00EDcio da exclus\u00E3o do cliente");
        this.listaClientes();
        console.log("Cliente excluído!");
    };
    return DeletarCliente;
}(deletar_1.default));
exports.default = DeletarCliente;
