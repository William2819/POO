"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cliente = /** @class */ (function () {
    function Cliente(nome, nomeSocial, cpf, genero) {
        this.nome = nome;
        this.nomeSocial = nomeSocial;
        this.cpf = cpf;
        this.genero = genero;
        this.rgs = [];
        this.dataCadastro = new Date();
        this.telefones = [];
        this.produtosConsumidos = [];
        this.servicosConsumidos = [];
    }
    Cliente.prototype.deletarRg = function (indice) {
        throw new Error("Method not implemented.");
    };
    Object.defineProperty(Cliente.prototype, "getCpf", {
        get: function () {
            return this.cpf;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getRgs", {
        get: function () {
            return this.rgs;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getDataCadastro", {
        get: function () {
            return this.dataCadastro;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getTelefones", {
        get: function () {
            return this.telefones;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getProdutosConsumidos", {
        get: function () {
            return this.produtosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Cliente.prototype, "getServicosConsumidos", {
        get: function () {
            return this.servicosConsumidos;
        },
        enumerable: false,
        configurable: true
    });
    Cliente.prototype.addTelefone = function (telefone) {
        this.telefones.push(telefone);
    };
    Cliente.prototype.addRg = function (rg) {
        this.rgs.push(rg);
    };
    Cliente.prototype.addServicos = function (servico) {
        if (!servico) {
            console.log("Serviço não Encontrado!");
        }
        else {
            this.servicosConsumidos.push(servico);
            console.log('Serviço adicionado!');
        }
    };
    Cliente.prototype.addProduto = function (produto) {
        if (!produto) {
            console.log("Produto não encontrado!");
        }
        else {
            this.produtosConsumidos.push(produto);
            console.log("Produto adicionado!");
        }
    };
    return Cliente;
}());
exports.default = Cliente;
