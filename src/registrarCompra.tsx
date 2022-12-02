import { Component } from "react";
import 'materialize-css/dist/css/materialize.min.css'
import M from 'materialize-css'

export default class RegistrarCompra extends Component<any>{
    componentDidMount(): void {
        var elems = document.querySelectorAll('select');
        M.FormSelect.init(elems);
    }
    render() {
        return (
            <>
                <div className="row">
                    <form className="col s12">
                        <div className="col s6">
                            <h6>Selecione o cliente</h6>
                            <select>
                                <option value="" disabled selected>Clientes</option>
                                <option value="1">William</option>
                                <option value="2">Vitor</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <h6>Selecione o produto</h6>
                            <select multiple>
                                <option value="">Shampoo</option>
                                <option value="">Pente</option>
                            </select>
                        </div>
                        <div className="col s6">
                            <h6>Selecione o serviço</h6>
                            <select multiple>
                                <option value="">Corte de cabelo</option>
                                <option value="">Manicure</option>
                            </select>
                        </div>
                        
                        <div className="row">
                            <div className="col s12">
                                <button className="btn waves-effect white" type="submit" name="action">Registrar
                                    <i className="material-icons right">send</i>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </>
        )
    }
}