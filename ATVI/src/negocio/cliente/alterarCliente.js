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
var cliente_1 = require("../../modelo/cliente");
var cpf_1 = require("../../modelo/cpf");
var alterar_1 = require("../alterar");
var AlterarCliente = /** @class */ (function (_super) {
    __extends(AlterarCliente, _super);
    function AlterarCliente(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    AlterarCliente.prototype.alterar = function () {
        var nome = this.entrada.receberTexto("Informe o nome do cliente para alterar: ");
        var nomeSocial = this.entrada.receberTexto("Informe o NOVO nome social do cliente: ");
        var indice = this.clientes.findIndex(function (i) { return i.nome === nome; });
        var valor = this.entrada.receberTexto("Informe o NOVO n\u00FAmero do cpf: ");
        var data = this.entrada.receberTexto("Informe a data de emiss\u00E3o do cpf, no padr\u00E3o dd/mm/yyyy: ");
        var partesData = data.split('/');
        var ano = new Number(partesData[2].valueOf()).valueOf();
        var mes = new Number(partesData[1].valueOf()).valueOf();
        var dia = new Number(partesData[0].valueOf()).valueOf();
        var dataEmissao = new Date(ano, mes, dia);
        var cpf = new cpf_1.default(valor, dataEmissao);
        var genero = this.entrada.receberTexto("Qual o g\u00EAnero (F-Feminino) (M-Masculino): ");
        if (indice != -1) {
            var novoNome = this.entrada.receberTexto("Informe o NOVO nome: ");
            var cliente = new cliente_1.default(novoNome, nomeSocial, cpf, genero);
            this.clientes[indice] = cliente;
        }
        console.log("\nAlterado com sucesso!\n");
    };
    return AlterarCliente;
}(alterar_1.default));
exports.default = AlterarCliente;
