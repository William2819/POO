"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Telefone = /** @class */ (function () {
    function Telefone(ddd, numero) {
        this.ddd = ddd;
        this.numero = numero;
    }
    Telefone.prototype.splice = function () {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(Telefone.prototype, "getDdd", {
        get: function () {
            return this.ddd;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Telefone.prototype, "getNumero", {
        get: function () {
            return this.numero;
        },
        enumerable: false,
        configurable: true
    });
    return Telefone;
}());
exports.default = Telefone;
