import Entrada from "../../io/entrada";
import Cliente from "../../modelo/cliente";
import RG from "../../modelo/rg";
import Rg from "../../modelo/rg";
import Cadastro from "../cadastrar";

export default class CadastroRg extends Cadastro {
    private clientes: Array<Cliente>
    private entrada: Entrada;    

    constructor(clientes: Array<Cliente>) {
        super();
        this.clientes = clientes
        this.entrada = new Entrada();
    }
    public cadastrar(): void {
        //perguntar cliente
        let nome = this.entrada.receberTexto(`Informe o nome do cliente para cadastrar o RG: `)
        let cliente = this.clientes.find(cliente => cliente.nome === nome)

        console.log(`\nVamos cadastrar um RG `);
        let valor = this.entrada.receberTexto(`Informe o número: `);
        let rg = new Rg(valor);

        cliente?.addRg(rg);

        console.log(`\nCadastro concluído! \n`);


    }
} 