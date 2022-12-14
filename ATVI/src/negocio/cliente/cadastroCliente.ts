import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import CPF from "../../modelo/cpf";
import Cadastro from "../cadastrar";

export default class CadastroCliente extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada
    
    constructor(clientes: Array<Cliente>) {
        super()
        this.clientes = clientes
        this.entrada = new Entrada()
        
    }
    public cadastrar(): void {
        console.log(`\nInício do cadastro do cliente`);
        let nome = this.entrada.receberTexto(`Informe o nome do cliente: `)
        let nomeSocial = this.entrada.receberTexto(`Informe o sobrenome do cliente: `)
        let valor = this.entrada.receberTexto(`Informe o número do cpf: `);
        let cpf = new CPF(valor);
        let genero = this.entrada.receberTexto(`Informe o gênero (F/M): `)

        let cliente = new Cliente(nome, nomeSocial, cpf, genero);
        this.clientes.push(cliente)
        console.log(`\nCadastro concluído! \n`);
    }
}