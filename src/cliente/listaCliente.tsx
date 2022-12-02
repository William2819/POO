import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

function componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
        var elems = document.querySelectorAll('.collapsible');
        M.Collapsible.init(elems);
    });
}

const ListaCliente = () => {
    componentDidMount()
    return (
        <>
            <ul className="collapsible">
                <li>
                    <div className="collapsible-header"><i className="material-icons">person</i>William</div>
                    <div className="collapsible-body row">
                        <div className="col s4">
                            <h6 id="nome_cliente">William</h6>
                            <label htmlFor="nome_cliente">Nome</label>
                        </div>
                        <div className="col s4">
                            <h6 id="social">Will</h6>
                            <label htmlFor="social">Nome social</label>
                        </div>
                        <div className="col s4">
                            <h6 id="genero">M</h6>
                            <label htmlFor="genero">Gênero</label>
                        </div>
                        <div className="col s4">
                            <h6 id="cpf">123456789-00</h6>
                            <label htmlFor="cpf">CPF</label>
                        </div>
                        <div className="col s4">
                            <h6 id="rg">12345678-9</h6>
                            <label htmlFor="rg">RG</label>
                        </div>
                        <div className="col s4">
                            <h6 id="nome_cliente">12987456321</h6>
                            <label htmlFor="nome_cliente">Telefone</label>
                        </div>
                    </div>
                    <div className="collapsible-body row">
                        <div className="col">
                            <a className="btn waves-effect #f06292 pink lighten-2" href='/edicaoCliente'>Atualizar
                                <i className="small material-icons right">border_color</i>
                            </a>
                        </div>
                        <div className="col">
                            <button className="btn waves-effect #f06292 pink lighten-2" type="submit" name="action">Excluir
                                <i className="small material-icons right">delete</i>
                            </button>
                        </div>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header"><i className="material-icons">person</i>Vitor</div>
                    <div className="collapsible-body row">
                        <div className="col s4">
                            <h6 id="nome_cliente">Vitor</h6>
                            <label htmlFor="nome_cliente">Nome</label>
                        </div>
                        <div className="col s4">
                            <h6 id="social">Landim</h6>
                            <label htmlFor="social">Nome social</label>
                        </div>
                        <div className="col s4">
                            <h6 id="genero">M</h6>
                            <label htmlFor="genero">Gênero</label>
                        </div>
                        <div className="col s4">
                            <h6 id="cpf">789554778-44</h6>
                            <label htmlFor="cpf">CPF</label>
                        </div>
                        <div className="col s4">
                            <h6 id="rg">11919082-7</h6>
                            <label htmlFor="rg">RG</label>
                        </div>
                        <div className="col s4">
                            <h6 id="nome_cliente">11931504758</h6>
                            <label htmlFor="nome_cliente">Telefone</label>
                        </div>
                    </div>
                    <div className="collapsible-body row">
                        <div className="col">
                            <a className="btn waves-effect #f06292 pink lighten-2" href='/edicaoCliente'>Atualizar
                                <i className="small material-icons right">border_color</i>
                            </a>
                        </div>
                        <div className="col">
                            <button className="btn waves-effect #f06292 pink lighten-2" type="submit" name="action">Excluir
                                <i className="small material-icons right">delete</i>
                            </button>
                        </div>
                    </div>
                </li>
            </ul>
        </>
    )
}
export default ListaCliente