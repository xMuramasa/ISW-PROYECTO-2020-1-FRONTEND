import React, { Component } from 'react';

import Personal from "../../components/form/Personal";

import PersonalService from '../../services/personal.service';




class PersonalRegistro extends Component{ //transforma la clase en componente

    constructor(props) {
        super(props);
        
        this.handlePersonalSubmit = this.handlePersonalSubmit.bind(this);
      }

    handlePersonalSubmit(data) {
    PersonalService.create(data)
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
                            <h1 className="font-weight-light">Registro Personal</h1>
                            <p className="lead">Ingresa los datos del Personal en el siguiente formulario</p>
                        </div>
                    </div>
                 </div>
            </header>
            <Personal onSubmit={this.handlePersonalSubmit}></Personal>
        </div>
        );
    }
};

export default PersonalRegistro;