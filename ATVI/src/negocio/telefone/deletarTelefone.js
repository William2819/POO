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
var listagemTelefone_1 = require("./listagemTelefone");
var DeletarTelefone = /** @class */ (function (_super) {
    __extends(DeletarTelefone, _super);
    function DeletarTelefone(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    DeletarTelefone.prototype.listarTelefone = function () {
        var entrada = new entrada_1.default();
        var listarTelefone = new listagemTelefone_1.default(this.clientes);
        listarTelefone.listar();
        var telefone = entrada.receberTexto("Informe o nome do cliente para excluir o telefone:");
        this.telefone.splice(1);
        return;
    };
    DeletarTelefone.prototype.deletar = function () {
        console.log("Inicio da exclus\u00E3o do telefone");
        this.listarTelefone();
        console.log("Telefone exclu\u00EDdo! ");
    };
    return DeletarTelefone;
}(deletar_1.default));
exports.default = DeletarTelefone;
