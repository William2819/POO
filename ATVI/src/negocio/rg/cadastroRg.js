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
var rg_1 = require("../../modelo/rg");
var cadastrar_1 = require("../cadastrar");
var CadastroRg = /** @class */ (function (_super) {
    __extends(CadastroRg, _super);
    function CadastroRg(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroRg.prototype.cadastrar = function () {
        //perguntar cliente
        var nome = this.entrada.receberTexto("Informe o nome do cliente para cadastrar o RG: ");
        var cliente = this.clientes.find(function (cliente) { return cliente.nome === nome; });
        console.log("\nVamos cadastrar um RG ");
        var valor = this.entrada.receberTexto("Informe o n\u00FAmero: ");
        var data = this.entrada.receberTexto("Informe a data de emiss\u00E3o do RG, no padr\u00E3o dd/mm/yyyy: ");
        var partesData = data.split('/');
        var ano = new Number(partesData[2].valueOf()).valueOf();
        var mes = new Number(partesData[1].valueOf()).valueOf();
        var dia = new Number(partesData[0].valueOf()).valueOf();
        var dataEmissao = new Date(ano, mes, dia);
        var rg = new rg_1.default(valor, dataEmissao);
        cliente === null || cliente === void 0 ? void 0 : cliente.addRg(rg);
        console.log("\nCadastro conclu\u00EDdo! \n");
    };
    return CadastroRg;
}(cadastrar_1.default));
exports.default = CadastroRg;
