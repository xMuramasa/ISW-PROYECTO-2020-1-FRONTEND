import React, { Component } from 'react';

import Quimio from "../../components/form/Quimio";

import QuimioService from '../../services/quimio.service';

class QuimioRegistro extends Component { //transforma la clase en componente

    constructor(props) {
        super(props);

        this.handleQuimioSubmit = this.handleQuimioSubmit.bind(this);
    }

    handleQuimioSubmit(data) {
        QuimioService.createPersonalQuimioterapia(data)
            .then((response) => console.log(response))
            .catch((error) => alert(error));
    }



    render() {//esto es para que muestre contenido HTML
        return (//codigo jsx
            <div className="container" style={{ display: 'block', justifyContent: 'center', alignItems: 'center', height: '100vh', marginTop: '50px' }}>
                <header className="masthead">
                    <div className="container h-100">
                        <div className="row h-100 align-items-center">
                            <div id="titulo" className="col-12 text-center">
                                <h1 className="font-weight-light">Asignación Personal a Sala de Quimioterapia</h1>
                                <p className="lead">Ingresa los datos del Personal y Sala de Quimioterapia en el siguiente formulario</p>
                            </div>
                        </div>
                    </div>
                </header>
                <Quimio onSubmit={ this.handleQuimioSubmit}></Quimio>
            </div>
        );
    }
};

export default QuimioRegistro;