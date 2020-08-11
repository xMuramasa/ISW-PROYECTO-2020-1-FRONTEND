import React, { Component } from 'react';

import Pabellon from "../../components/form/Pab";

import PabellonService from '../../services/pab.service';




class PabellonRegistro extends Component{ //transforma la clase en componente

    constructor(props) {
        super(props);
        
        this.handlePersonalPabellonSubmit = this.handlePersonalPabellonSubmit.bind(this);
      }

    handlePersonalPabellonSubmit(data) {
    PabellonService.create(data)
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
                            <h1 className="font-weight-light">Registro Personal Pabellon</h1>
                            <p className="lead">Ingresa los datos del Personal Pabellon en el siguiente formulario</p>
                        </div>
                    </div>
                 </div>
            </header>
            <Pabellon onSubmit={this.handlePersonalPabellonSubmit}></Pabellon>
        </div>
        );
    }
};

export default PabellonRegistro;