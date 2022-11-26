"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var entrada_1 = require("../io/entrada");
var empresa_1 = require("../modelo/empresa");
var alterarCliente_1 = require("../negocio/cliente/alterarCliente");
var cadastroCliente_1 = require("../negocio/cliente/cadastroCliente");
var cadastroProduto_1 = require("../negocio/produto/cadastroProduto");
var deletarCliente_1 = require("../negocio/cliente/deletarCliente");
var listagemClientes_1 = require("../negocio/cliente/listagemClientes");
var listagemProduto_1 = require("../negocio/produto/listagemProduto");
var alterarProduto_1 = require("../negocio/produto/alterarProduto");
var deletarProduto_1 = require("../negocio/produto/deletarProduto");
var cadastroServico_1 = require("../negocio/servico/cadastroServico");
var alterarServico_1 = require("../negocio/servico/alterarServico");
var deletarServico_1 = require("../negocio/servico/deletarServico");
var listarServico_1 = require("../negocio/servico/listarServico");
var consumoCliente_1 = require("../negocio/consumo/consumoCliente");
var listarGenero_1 = require("../negocio/listarGenero");
var listar5MaisConsumido_1 = require("../negocio/consumo/listar5MaisConsumido");
var listarConsumoGen_1 = require("../negocio/consumo/listarConsumoGen");
var listarMaiorConsumo_1 = require("../negocio/consumo/listarMaiorConsumo");
var listarMenorConsumo_1 = require("../negocio/consumo/listarMenorConsumo");
var prodMaisConsumido_1 = require("../negocio/consumo/prodMaisConsumido");
var listarServMais_1 = require("../negocio/consumo/listarServMais");
var cadastroTelefone_1 = require("../negocio/telefone/cadastroTelefone");
var alterarTelefone_1 = require("../negocio/telefone/alterarTelefone");
var deletarTelefone_1 = require("../negocio/telefone/deletarTelefone");
var listagemTelefone_1 = require("../negocio/telefone/listagemTelefone");
var cadastroRg_1 = require("../negocio/rg/cadastroRg");
console.log("\n##### Bem-vindo ao cadastro de clientes do Grupo World Beauty #####");
var empresa = new empresa_1.default();
var execucao = true;
while (execucao) {
    console.log("Selecione uma Op\u00E7\u00E3o:");
    console.log("1 -  Cadastrar cliente");
    console.log("2 -  Alterar cliente");
    console.log("3 -  Excluir cliente");
    console.log("4 -  Listar todos os clientes");
    console.log("");
    console.log("5 -  Cadastrar produto");
    console.log("6 -  Editar produto");
    console.log("7 -  Excluir produto");
    console.log("8 -  Listar todos os produtos");
    console.log("");
    console.log("9  - Cadastrar servi\u00E7os");
    console.log("10 - Editar Servi\u00E7os: ");
    console.log("11 - Excluir Servi\u00E7o: ");
    console.log("12 - Listar todos os servi\u00E7os:");
    console.log("");
    console.log("13 - Cadastrar Telefone:");
    console.log("14 - Editar Telefone:");
    console.log("15 - Excluir Servi\u00E7o:");
    console.log("16 - Listar todos os Telefones:");
    console.log("");
    console.log("17 - Cadastrar RG:");
    console.log("18 - Editar RG:");
    console.log("19 - Excluir RG:");
    console.log("20 - Listar todos os RGs:");
    console.log("");
    console.log("21 - Adicionar Servi\u00E7os/Produtos: ");
    console.log("22 - Listar clientes por g\u00EAnero: ");
    console.log("23 - Listar 5 clientes que mais consumiram em valor: ");
    console.log("24 - Listar consumo por g\u00EAnero: ");
    console.log("25 - Listar 10 clientes que mais consumiram em quantidade: ");
    console.log("26 - Listar 10 clientes que menos consumiram em quantidade: ");
    console.log("27 - Listar produto mais consumido: ");
    console.log("28 - Listar servi\u00E7o mais consumido: ");
    console.log("0 - Sair");
    var entrada = new entrada_1.default();
    var opcao = entrada.receberNumero("Por favor, escolha uma op\u00E7\u00E3o: ");
    switch (opcao) {
        case 1:
            var cadastro = new cadastroCliente_1.default(empresa.getClientes);
            cadastro.cadastrar();
            break;
        case 2:
            var alterarCliente = new alterarCliente_1.default(empresa.getClientes);
            alterarCliente.alterar();
            break;
        case 3:
            var deletarCliente = new deletarCliente_1.default(empresa.getClientes);
            deletarCliente.deletar();
            break;
        case 4:
            var listagem = new listagemClientes_1.default(empresa.getClientes);
            listagem.listar();
            break;
        case 5:
            var cadastroProdutin = new cadastroProduto_1.default(empresa.getProdutos);
            cadastroProdutin.cadastrar();
            break;
        case 6:
            var alterarProdutin = new alterarProduto_1.default(empresa.getProdutos);
            alterarProdutin.alterar();
            break;
        case 7:
            var deletarProdutin = new deletarProduto_1.default(empresa.getProdutos);
            deletarProdutin.deletar();
            break;
        case 8:
            var listagemProd = new listagemProduto_1.default(empresa.getProdutos);
            listagemProd.listar();
            break;
        case 9:
            var servico = new cadastroServico_1.default(empresa.getServicos);
            servico.cadastrar();
            break;
        case 10:
            var editarServico = new alterarServico_1.default(empresa.getServicos);
            editarServico.alterar();
            break;
        case 11:
            var deletaServico = new deletarServico_1.default(empresa.getServicos);
            deletaServico.deletar();
            break;
        case 12:
            var listagemServico = new listarServico_1.default(empresa.getServicos);
            listagemServico.listar();
            break;
        case 13:
            var telefone = new cadastroTelefone_1.default(empresa.getClientes);
            telefone.cadastrar();
            break;
        case 14:
            var alterarTelefone = new alterarTelefone_1.default(empresa.getClientes);
            alterarTelefone.alterar();
            break;
        case 15:
            var deletarTelefone = new deletarTelefone_1.default(empresa.getClientes);
            deletarTelefone.deletar();
            break;
        case 16:
            var listagemTelefone = new listagemTelefone_1.default(empresa.getClientes);
            listagemTelefone.listar();
            break;
        case 17:
            var rg = new cadastroRg_1.default(empresa.getClientes);
            rg.cadastrar();
            break;
        case 18:
            var alterarRg = new alterarTelefone_1.default(empresa.getClientes);
            alterarRg.alterar();
            break;
        case 19:
            var deletarRg = new deletarTelefone_1.default(empresa.getClientes);
            deletarRg.deletar();
            break;
        case 20:
            var listagemRg = new listagemTelefone_1.default(empresa.getClientes);
            listagemRg.listar();
            break;
        case 21:
            var consumoCliente = new consumoCliente_1.default(empresa);
            consumoCliente.cadastrar();
            break;
        case 22:
            var listarGenero = new listarGenero_1.default(empresa.getClientes);
            listarGenero.listar();
            break;
        case 23:
            var listar5Mais = new listar5MaisConsumido_1.default(empresa.getClientes);
            listar5Mais.listar();
            break;
        case 24:
            var listarConsumoGen = new listarConsumoGen_1.default(empresa.getClientes);
            listarConsumoGen.listar();
            break;
        case 25:
            var listar10Mais = new listarMaiorConsumo_1.default(empresa.getClientes);
            listar10Mais.listar();
            break;
        case 26:
            var listar10Menos = new listarMenorConsumo_1.default(empresa.getClientes);
            listar10Menos.listar();
            break;
        case 27:
            var listarProdMais = new prodMaisConsumido_1.default(empresa.getClientes);
            listarProdMais.listar();
            break;
        case 28:
            var listarServMais = new listarServMais_1.default(empresa.getClientes);
            listarServMais.listar();
            break;
        case 0:
            execucao = false;
            console.log("At\u00E9 mais");
            break;
        default:
            console.log("Opera\u00E7\u00E3o n\u00E3o entendida :(");
    }
}
