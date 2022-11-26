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
var servico_1 = require("../../modelo/servico");
var cadastrar_1 = require("../cadastrar");
var CadastroServico = /** @class */ (function (_super) {
    __extends(CadastroServico, _super);
    function CadastroServico(nomeServico) {
        var _this = _super.call(this) || this;
        _this.nomeServico = nomeServico;
        _this.entrada = new entrada_1.default();
        return _this;
    }
    CadastroServico.prototype.cadastrar = function () {
        console.log("\nVamos cadastrar os servi\u00E7os: ");
        var nome = this.entrada.receberTexto("Nome do servi\u00E7o: ");
        var preco = this.entrada.receberNumero("Pre\u00E7o do servi\u00E7o: ");
        var servicos = new servico_1.default(nome, preco);
        this.nomeServico.push(servicos);
        console.log("\n Cadastro finalizado :).");
    };
    return CadastroServico;
}(cadastrar_1.default));
exports.default = CadastroServico;
