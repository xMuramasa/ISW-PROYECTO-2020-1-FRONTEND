import React, { useState } from 'react';
import PropTypes from "prop-types"; 

//react-dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import personalService from '../../services/personal.service';

import { useList } from 'react-hooks-lib'

const Personal_search = ({
    onSubmit
    }) => {
        // const {personals,push,set} = useList([]);
        const [state, setState] = useState([]);
        const [param, setParam] = useState('Escoge uno');
        const [valor, setValor] = useState('');
        // const [personals = [], setPersonals] = useState('');

        const options = [
            'Id'
          ];
    
        const onSelect = (event) => {
        // console.log(event);
        setParam(
            event.value
        );
        }

        const showPersonal = (event) => {
            event.preventDefault();
            switch(param){
                case 'Id': 
                personalService.show_id(valor).then((response)=>{
                    setState(
                        response.status === 200 ? [response.data] : [],
                    );
                });
                break;
            }
        }

        return(
            <div>
            <form className="needs-validation" noValidate>
                <div className="form-row " style={{display: 'block',  justifyContent:'center', alignItems:'center'}} ></div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="validationTooltip04">Seleccione filtro de búsqueda</label>
                            <Dropdown options={options} onChange={onSelect} value= {param} placeholder="Select an option" />
                        
                    </div>
                    <div className="col-md-12 mb-3">
                        <label htmlFor="validationTooltip01">Ingrese información</label>
                        <input value={valor} onChange={(event) => setValor(event.target.value)} type="text" className="form-control" id="validationTooltip01" />
                    </div>
                    
                    {console.log("param: ",param)}
                <button onClick={showPersonal} className="btn btn-primary" type="submit">Buscar</button>
                </form>
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
                    {state.map((personal,index)=>{
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
                                {/* <td>
                                    <a  href="#" className="btn btn-warning" onClick={()=>console.log(personal)}> Editar </a>
                                    
                                    <a  onClick={()=>this.deletePersonal(personal.id)}
                                        href="#" className="btn btn-danger"> Borrar </a>

                                </td> */}
                            </React.Fragment>
                        </tr>
                        )
                    })}
                </tbody>
                </table>
            </div>
            </div>
        )

    }

Personal_search.propTypes = {
    onSubmit: PropTypes.func,
}
    
Personal_search.defaultProps = {
onSubmit: () => {},
}

export default Personal_search;