import React from 'react';
import './App.css';
import { Router, Switch, Route } from "react-router-dom";
import history from './helpers/history'

//my imports
import Navbar from './components/navbar'; //si es javascript no es necesario que sea .js
import Tables from './components/tables';
import NavBarPersonal from './components/NavBarPersonal/NavBarPersonal'
import PersonalRegistro from './views/PersonalRegistro/PersonalRegistro'
import PersonalBuscar from './views/PersonalBuscar/PersonalBuscar'

//bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <Router 
    history={history}>
    <div>
      <Navbar></Navbar>
      <NavBarPersonal></NavBarPersonal>
      <Switch>
        <Route
          exact
          path='/'
          component={Tables}
        />
        <Route
          path='/registro'
          component={PersonalRegistro}
        />
        <Route
          path='/buscar'
          component={PersonalBuscar}
        />
      </Switch>
    </div>
  </Router>
  );
}

export default App;