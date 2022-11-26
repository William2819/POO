"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../../io/entrada");
var SelecionarTelefone = /** @class */ (function () {
    function SelecionarTelefone(telefones) {
        var _this = this;
        this.selecionar = function () {
            while (_this.running) {
                console.log('\nLista de telefones com índice');
                _this.telefones.forEach(function (cliente, indice) {
                    console.log("".concat(indice, " - ").concat(cliente.telefone));
                });
                var opcao = _this.entrada.receberNumero('Por favor, escolha o telefone através do índice: ');
                var telefone = _this.telefones[opcao];
                if (telefone) {
                    // se telefone encontrado
                    _this.running = false;
                    return opcao;
                }
                else {
                    // se telefone não for encontrado
                    console.log('Telefone não encontrado, por favor insira o índice novamente');
                }
            }
        };
        this.running = true;
        this.telefones = telefones;
        this.entrada = new entrada_1.default();
    }
    return SelecionarTelefone;
}());
exports.default = SelecionarTelefone;
