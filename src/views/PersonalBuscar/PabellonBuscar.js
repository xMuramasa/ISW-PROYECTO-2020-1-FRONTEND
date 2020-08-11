import React, { Component } from 'react';

import Pabellon_search from "../../components/search/Pabellon_search";

import PabellonService from '../../services/pabellon.service';

class PabellonBuscar extends Component{ //transforma la clase en componente

    constructor(props) {
        super(props);
        
        this.handlePabellonSubmit = this.handlePabellonSubmit.bind(this);
    }

    handlePabellonSubmit(data) {
        PabellonService.create(data)
            .then((response) => console.log(response))
            .catch((error) => console.log(error));
    }

    render(){//esto es para que muestre contenido HTML
        return(//codigo jsx
            <div>
                <div className="container" style={{ display: 'block', justifyContent:'center', alignItems:'center', height: '100vh', marginTop: '50px'}}>
                    <header className="masthead">
                        <div className="container h-100">
                            <div className="row h-100 align-items-center">
                                <div id="titulo" className="col-12 text-center">
                                    <h1 className="font-weight-light">Buscar Personal en Pabellones</h1>
                                    <p className="lead">Seleccione e ingrese datos necesarios para hacer la búsqueda</p>
                                </div>
                            </div>
                        </div>
                    </header>
                    <Pabellon_search onSubmit={this.handlePabellonSubmit}></Pabellon_search>
                </div>
            </div>
        );
    }
};

export default PabellonBuscar;