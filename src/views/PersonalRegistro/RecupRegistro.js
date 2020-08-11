import React, { Component } from 'react';

import Recuperacion from "../../components/form/Recup";

import RecuperacionService from '../../services/recup.service';

class RecuperacionRegistro extends Component{ //transforma la clase en componente

    constructor(props) {
        super(props);
        
        this.handlePersonalRecuperacionSubmit = this.handlePersonalRecuperacionSubmit.bind(this);
      }

    handlePersonalRecuperacionSubmit(data) {
    RecuperacionService.create(data)
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    }

    

    render(){//esto es para que muestre contenido HTML
        return(//codigo jsx
        <div className="container" style={{display: 'block',  justifyContent:'center', alignItems:'center', height: '100vh', marginTop: '50px'}}>
            <header className="masthead">
                <div className="container h-100">
                     <div className="row h-100 align-items-center">
                        <div id="titulo" className="col-12 text-center">
                            <h1 className="font-weight-light">Asignación Personal a Sala de Recuperacion</h1>
                            <p className="lead">Ingresa los datos del Personal Recuperacion en el siguiente formulario</p>
                        </div>
                    </div>
                 </div>
            </header>
            <Recuperacion onSubmit={this.handlePersonalRecuperacionSubmit}></Recuperacion>
        </div>
        );
    }
};

export default RecuperacionRegistro;