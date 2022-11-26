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
var listagem_1 = require("../listagem");
var listarTelefone = /** @class */ (function (_super) {
    __extends(listarTelefone, _super);
    function listarTelefone(clientes) {
        var _this = _super.call(this) || this;
        _this.clientes = clientes;
        return _this;
    }
    listarTelefone.prototype.listar = function () {
        console.log("\nLista de todos os telefones:");
        this.clientes.forEach(function (cliente) {
            console.log("Nome: " + cliente.nome);
            cliente.getTelefones.forEach(function (telefone, indice) {
                console.log("Telefone: (".concat(telefone.getDdd, ") ").concat(telefone.getNumero));
                console.log("====================================");
            });
        });
        console.log("\n");
    };
    return listarTelefone;
}(listagem_1.default));
exports.default = listarTelefone;
