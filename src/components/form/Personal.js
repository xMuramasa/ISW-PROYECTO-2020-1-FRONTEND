import React, { useState } from 'react';
import PropTypes from "prop-types"; 

//react-dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Personal = ({ //funcion
  onSubmit
    }) => {
    const [nombre, setNombre] = useState('');
    const [apellidos, setApellidos] = useState('');
    const [rut, setRut] = useState('');
    const [cargo, setCargo] = useState('');
    const [numero, setNumero] = useState('');
    const [correo, setCorreo] = useState('');
  
    return(
        <form className="needs-validation" noValidate>
        <div className="form-row">
            <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip01">Nombres</label>
            <input value={nombre} type="text" onChange={(event) => setNombre(event.target.value)} className="form-control" id="validation01" placeholder="Ej: Francisco Juan"/>
            </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip02">Apellidos</label>
            <input value={apellidos} type="text" onChange={(event) => setApellidos(event.target.value)} className="form-control" id="validation02" placeholder="Ej: Herrera Perez" />
          </div>

            <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip03">Rut</label>
            <input value={rut} type="text" onChange={(event) => setRut(event.target.value)} className="form-control" id="validation03" placeholder="xx.xxx.xxx-x"/>
            </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip04">Cargo</label>
            <input value={cargo} type="text" onChange={(event) => setCargo(event.target.value)} className="form-control" id="validation04" placeholder="Astrofisico" />
          </div>
            
          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip05">Numero</label>
            <input value={numero} type="text" onChange={(event) => setNumero(event.target.value)} className="form-control" id="validation05" placeholder="+569******" />
          </div>

            <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip06">Correo</label>
            <input value={correo} type="text" onChange={(event) => setCorreo(event.target.value)} className="form-control" id="validation06" placeholder="lmao@yahoo.no"/>
            </div>
        </div>

        {/* {console.log(programa_de_salud)} */}
        <button
        onClick={(event) => onSubmit({'nombres': nombre,'apellidos': apellidos,'rut': rut,'cargo': cargo,'ocupado':0,'numero': numero,'correo': correo})} 
        className="btn btn-primary">Registrar</button>
        </form>
    );
  }


  
Personal.propTypes = {
  onSubmit: PropTypes.func,
}

Personal.defaultProps = {
  onSubmit: () => {},
}

export default Personal;