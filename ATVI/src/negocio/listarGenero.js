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
var listagem_1 = require("./listagem");
var ListagemGenero = /** @class */ (function (_super) {
    __extends(ListagemGenero, _super);
    function ListagemGenero(cliente) {
        var _this = _super.call(this) || this;
        _this.clientes = cliente;
        return _this;
    }
    ListagemGenero.prototype.listar = function () {
        var feminino = [];
        var masculino = [];
        this.clientes.forEach(function (clientes) {
            if (clientes.genero === "M") {
                masculino.push(clientes);
            }
            if (clientes.genero === "F") {
                feminino.push(clientes);
            }
        });
        console.log("Listagem de Clientes por Gênero");
        console.log('      ');
        console.log('Clientes do Gênero Feminino:');
        console.log('      ');
        feminino.forEach(function (fem) {
            console.log("Nome: " + fem.nome);
            console.log("Nome social: " + fem.nomeSocial);
            console.log("CPF: " + fem.getCpf.getValor);
            console.log("=========================");
            console.log('      ');
        });
        console.log('Clientes do Gênero Masculino:');
        console.log('      ');
        masculino.forEach(function (masc) {
            console.log("Nome: " + masc.nome);
            console.log("Nome social: " + masc.nomeSocial);
            console.log("CPF: " + masc.getCpf.getValor);
            console.log("=========================");
            console.log('      ');
        });
    };
    return ListagemGenero;
}(listagem_1.default));
exports.default = ListagemGenero;