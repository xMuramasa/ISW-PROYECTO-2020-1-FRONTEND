import React, { Component } from 'react';

class NavBar extends Component{ //transforma la clase en componente

    render(){//esto es para que muestre contenido HTML
        return(//codigo jsx
        <div>
            <nav className="navbar navbar-dark bg-dark"> {/*hola*/}
            <a className="navbar-brand" href="https://frontpaciente.herokuapp.com/">Paciente</a>
            <a className="navbar-brand" href="https://isw-frontend-personal.herokuapp.com/">Personal</a>
            <a className="navbar-brand" href="https://frontpabellon.herokuapp.com/">Pabellón</a>
            <a className="navbar-brand" href="https://ursidae-rec.herokuapp.com/">Recuperación</a>
            <a className="navbar-brand" href="#">Quimioterapia</a>
            </nav>
        </div>
        );
    }
};

export default NavBar;