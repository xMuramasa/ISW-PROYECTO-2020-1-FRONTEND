import React, { Component } from 'react';

import personalService from '../services/personal.service';

class Tables extends Component{ //transforma la clase en componente

    constructor(props){
        super(props);
        this.state = {
            personal: [],
        }
    }
    
    componentDidMount(){ //es llamado la primera vez que la vista es renderizada (se llama 1 vez)
        personalService.getAll().then((response)=>{
            this.setState({
                personal: response.status === 200 ? response.data : [],
            })
        })
    }
    
    deletePersonal(id) {    
        personalService.borrarPersonal(id)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/') //me lleva a la ruta "/"
            })
            .catch(e => {
                console.log(e);
            });
        }
    
    render(){//esto es para que muestre contenido HTML
        const { personal } = this.state;
        
        return(//codigo jsx
        <div className="jumbotron">
            <table className="table text-center">
            <thead className="bg-info">
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Id</th>
                    <th scope="col">Nombres</th>
                    <th scope="col">Apellidos</th>
                    <th scope="col">Rut</th>
                    <th scope="col">Cargo</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Ocupado</th>
                </tr>
            </thead>
            <tbody>
                {personal.map((personal,index)=>{
                    return (
                    <tr key={personal.id}>
                        <React.Fragment>
                            <th scope="row">{index+1}</th>
                                <td>{personal.id}</td>
                                <td>{personal.nombres}</td>
                                <td>{personal.apellidos}</td>
                                <td>{personal.rut}</td>
                                <td>{personal.cargo}</td>
                                <td>{personal.numero}</td>
                                <td>{personal.correo}</td>
                                <td>{personal.ocupado}</td>
                            <td>
                                <a  onClick={()=>this.deletePersonal(personal.id)}
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

export default Tables;