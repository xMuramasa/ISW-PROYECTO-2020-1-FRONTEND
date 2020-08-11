import React, { useState } from 'react';
import PropTypes from "prop-types"; 

//react-dropdown
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

const Pabellon = ({ //funcion
  onSubmit
    }) => {
    const [personalId, setPersonalId] = useState('');
    const [pabellonId, setPabellonId] = useState('');

    return (
        <form className="needs-validation" noValidate>
        <div className="form-row">
            <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip01">Personal ID</label>
            <input value={personalId} type="text" onChange={(event) => setPersonalId(event.target.value)} className="form-control" id="validation01" placeholder="Ej: Número"/>
            </div>

          <div className="col-md-6 mb-3">
            <label htmlFor="validationTooltip02">Pabellon ID</label>
            <input value={pabellonId} type="text" onChange={(event) => setPabellonId(event.target.value)} className="form-control" id="validation02" placeholder="Ej: Número" />
          </div>
        </div>

        {/* {console.log(programa_de_salud)} */}
        <button
        onClick={(event) => onSubmit({'personalId': personalId,'pabellonId': pabellonId})} 
        className="btn btn-primary">Registrar</button>
        </form>
    );
  }

  
Pabellon.propTypes = {
  onSubmit: PropTypes.func,
}

Pabellon.defaultProps = {
  onSubmit: () => {},
}

export default Pabellon;