"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Servico = /** @class */ (function () {
    function Servico(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    Object.defineProperty(Servico.prototype, "getNomeServi\u00E7o", {
        get: function () {
            return this.nome;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Servico.prototype, "getPrecoServi\u00E7o", {
        get: function () {
            return this.preco;
        },
        enumerable: false,
        configurable: true
    });
    return Servico;
}());
exports.default = Servico;
