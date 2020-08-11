import React, { Component } from 'react';

import PabellonService from '../services/pab.service';

class PabellonTables extends Component{ //transforma la clase en componente

    constructor(props){
        super(props);
        this.state = {
            personal: [],
        }
    }
    
    componentDidMount(){ //es llamado la primera vez que la vista es renderizada (se llama 1 vez)
        PabellonService.getAll().then((response)=>{
            this.setState({
                personal: response.status === 200 ? response.data : [],
            })
        })
    }
    
    deletePabellon(id) {    
        PabellonService.borrarPersonalPabellon(id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/') //me lleva a la ruta "/"
            })
            .catch(e => {
                console.log(e);
            });
        }
    
    render(){//esto es para que muestre contenido HTML
        const { pabellon } = this.state;
        
        return(//codigo jsx
        <div className="jumbotron">
            <table className="table text-center">
            <thead className="bg-info">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id</th>
                    <th scope="col">Personal ID</th>
                    <th scope="col">Sala Pabellon ID</th>
                </tr>
            </thead>
            <tbody>
                {pabellon.map((pabellon,index)=>{
                    return (
                    <tr key={pabellon.id}>
                        <React.Fragment>
                            <th scope="row">{index+1}</th>
                                <th scope="row">{index + 1}</th>
                                <td>{pabellon.id}</td>
                                <td>{pabellon.persobnalId}</td>
                                <td>{pabellon.pabellonId}</td>
                            <td>
                                    <a onClick={() => this.deletePabellon(pabellon.personalId)}
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

export default PabellonTables;