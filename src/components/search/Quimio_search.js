import React, { useState } from 'react';
import PropTypes from "prop-types";

//react-dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import QuimioService from '../../services/quimio.service';

import { useList } from 'react-hooks-lib'

const Quimio_search = ({
    onSubmit
}) => {
    // const {quimios,push,set} = useList([]);
    const [state, setState] = useState([]);
    const [param, setParam] = useState('Escoge uno');
    const [valor, setValor] = useState('');
    // const [quimios = [], setQuimios] = useState('');

    const options = [
        'Id Sala Quimioterapia'
    ];

    const onSelect = (event) => {
        // console.log(event);
        setParam(
            event.value
        );
    }

    const showQuimio = (event) => {
        event.preventDefault();
        switch (param) {
            case 'Id Sala Quimioterapia':
                QuimioService.show_id(valor).then((response) => {
                    setState(
                        response.status === 200 ? [response.data] : [],
                    );
                });
                break;
        }
    }

    return (
        <div>
            <form className="needs-validation" noValidate>
                <div className="form-row " style={{ display: 'block', justifyContent: 'center', alignItems: 'center' }} ></div>
                <div className="col-md-12 mb-3">
                    <label htmlFor="validationTooltip04">Seleccione filtro de búsqueda</label>
                    <Dropdown options={options} onChange={onSelect} value={param} placeholder="Select an option" />

                </div>
                <div className="col-md-12 mb-3">
                    <label htmlFor="validationTooltip01">Ingrese información</label>
                    <input value={valor} onChange={(event) => setValor(event.target.value)} type="text" className="form-control" id="validationTooltip01" />
                </div>

                {console.log("param: ", param)}
                <button onClick={showQuimio} className="btn btn-primary" type="submit">Buscar</button>
            </form>
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
                        {state.map((quimio, index) => {
                            return (
                                <tr key={quimio.id}>
                                    <React.Fragment>
                                        <th scope="row">{index + 1}</th>
                                        <td>{quimio.id}</td>
                                        <td>{quimio.quimioterapiaId}</td>
                                        <td>{quimio.personalId}</td>
                                        {/* <td>
                                    <a  href="#" className="btn btn-warning" onClick={()=>console.log(quimio)}> Editar </a>
                                    
                                    <a  onClick={()=>this.deleteQuimio(quimio.id)}
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

Quimio_search.propTypes = {
    onSubmit: PropTypes.func,
}

Quimio_search.defaultProps = {
    onSubmit: () => { },
}

export default Quimio_search;