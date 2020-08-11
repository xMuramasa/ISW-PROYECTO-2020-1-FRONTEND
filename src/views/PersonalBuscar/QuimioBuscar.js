import React, { Component } from 'react';

import Quimio_search from "../../components/search/Quimio_search";

import quimioService from '../../services/quimio.service';

class QuimioBuscar extends Component { //transforma la clase en componente

    constructor(props) {
        super(props);

        this.handleQuimioSubmit = this.handleQuimioSubmit.bind(this);
    }

    handleQuimioSubmit(data) {
        quimioService.create(data)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    }

    render() {//esto es para que muestre contenido HTML
        return (//codigo jsx
            <div>
                <div className="container" style={{ display: 'block', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '50px' }}>
                    <header className="masthead">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div id="titulo" className="col-12 text-center">
                                    <h1 className="font-weight-light">Buscar Personal en Quimioterapia</h1>
                                    <p className="lead">Seleccione e ingrese datos necesarios para hacer la búsqueda</p>
                                </div>
                            </div>
                        </div>
                    </header>
                    <Quimio_search onSubmit={this.handleQuimioSubmit}></Quimio_search>
                </div>
            </div>
        );
    }
};

export default QuimioBuscar;