"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../../io/entrada");
var SelecionarCliente = /** @class */ (function () {
    function SelecionarCliente(clientes) {
        var _this = this;
        this.selecionar = function () {
            while (_this.running) {
                console.log('\nLista de clientes com índice');
                _this.clientes.forEach(function (cliente, indice) {
                    console.log("".concat(indice, " - ").concat(cliente.nome));
                });
                var opcao = _this.entrada.receberNumero('Por favor, escolha o cliente através do índice: ');
                var cliente = _this.clientes[opcao];
                if (cliente) {
                    // se cliente encontrado
                    _this.running = false;
                    return cliente;
                }
                else {
                    // se cliente não for encontrado
                    console.log('Cliente não encontrado, por favor insira o índice novamente');
                }
            }
        };
        this.running = true;
        this.clientes = clientes;
        this.entrada = new entrada_1.default();
    }
    return SelecionarCliente;
}());
exports.default = SelecionarCliente;
