import React, { Component } from 'react';

import RecuperacionService from '../services/recuperacion.service';

class tablesRecuperacion extends Component { //transforma la clase en componente

    constructor(props) {
        super(props);
        this.state = {
            recuperacion: [],
        }
    }

    componentDidMount() { //es llamado la primera vez que la vista es renderizada (se llama 1 vez)
        RecuperacionService.getAllRecuperacion().then((response) => {
            this.setState({
                recuperacion: response.status === 200 ? response.data : [],
            })
        })
    }

    deleteRecuperacion(id) {
        RecuperacionService.borrarPersonalRecuperacion(id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/') //me lleva a la ruta "/"
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {//esto es para que muestre contenido HTML
        const { recuperacion } = this.state;

        return (//codigo jsx
            <div className="jumbotron">
                <table className="table text-center">
                    <thead className="bg-info">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Personal ID</th>
                            <th scope="col">Recuperacion ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recuperacion.map((recuperacion, index) => {
                            return (
                                <tr key={recuperacion.id}>
                                    <React.Fragment>
                                        <th scope="row">{index + 1}</th>
                                        <td>{recuperacion.id}</td>
                                        <td>{recuperacion.personalId}</td>
                                        <td>{recuperacion.recuperacionId}</td>
                                        <td>
                                            <a onClick={() => this.deleteRecuperacion(recuperacion.personalId)}
                                                href="#" className="btn btn-danger"> Borrar </a>
                                        </td>
                                    </React.Fragment>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
};

export default tablesRecuperacion;