import React, { Component } from 'react';

import quimioService from '../services/quimio.service';

class tablesQuimio extends Component { //transforma la clase en componente

    constructor(props) {
        super(props);
        this.state = {
            quimio: [],
        }
    }

    componentDidMount() { //es llamado la primera vez que la vista es renderizada (se llama 1 vez)
        quimioService.getAllQuimioterapia().then((response) => {
            this.setState({
                quimio: response.status === 200 ? response.data : [],
            })
        })
    }

    deleteQuimio(id) {
        quimioService.borrarPersonalQuimioterapia(id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/') //me lleva a la ruta "/"
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {//esto es para que muestre contenido HTML
        const { quimio } = this.state;

        return (//codigo jsx
            <div className="jumbotron">
                <table className="table text-center">
                    <thead className="bg-info">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Id</th>
                            <th scope="col">Personal ID</th>
                            <th scope="col">Sala Quimioterapia ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {quimio.map((quimio, index) => {
                            return (
                                <tr key={quimio.id}>
                                    <React.Fragment>
                                        <th scope="row">{index + 1}</th>
                                        <td>{quimio.id}</td>
                                        <td>{quimio.personalId}</td>
                                        <td>{quimio.quimioterapiaId}</td>
                                        <td>
                                            <a onClick={() => this.deleteQuimio(quimio.personalId)}
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

export default tablesQuimio;