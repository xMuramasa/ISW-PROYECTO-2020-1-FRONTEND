import React from 'react';
import './App.css';
import { Router, Switch, Route } from "react-router-dom";
import history from './helpers/history'

//my imports
import Navbar from './components/navbar'; //si es javascript no es necesario que sea .js
import Tables from './components/tables';
import NavBarPersonal from './components/NavBarPersonal/NavBarPersonal'

import PersonalRegistro from './views/PersonalRegistro/PersonalRegistro'
import PabellonRegistro from './views/PersonalRegistro/PabellonRegistro'
import QuimioRegistro from './views/PersonalRegistro/QuimioRegistro'
import RecuperacionRegistro from './views/PersonalRegistro/RecuperacionRegistro'

import PersonalBuscar from './views/PersonalBuscar/PersonalBuscar'
import QuimioBuscar from './views/PersonalBuscar/QuimioBuscar'
import PabellonBuscar from './views/PersonalBuscar/PabellonBuscar'
import RecuperacionBuscar from './views/PersonalBuscar/RecuperacionBuscar'

//bootstrappp
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import tablesQuimio from './components/tablesQuimio';
import tablesRecuperacion from './components/tablesRecuperacion';
import tablesPabellon from './components/tablesPabellon';

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
          
          
          <Route
            path='/AsignarQuimioterapia'
            component={QuimioRegistro}
          />
          <Route
            path='/buscarQuimio'
            component={QuimioBuscar}
          />
          <Route
            exact
            path='/PPQuimioterapia'
            component={tablesQuimio}
          />


          <Route
            path='/AsignarRecuperacion'
            component={RecuperacionRegistro}
            />
          <Route
            path='/buscarRecuperacion'
            component={RecuperacionBuscar}
          />
          <Route
          exact
          path='/PPRecuperacion'
          component={tablesRecuperacion}
          />
          <Route
            path='/AsignarPabellones'
            component={PabellonRegistro}
            />
          <Route
            path='/buscarPabellon'
            component={PabellonBuscar}
          />
          <Route
            exact
            path='/PPPabelones'
            component={tablesPabellon}
          />
      </Switch>
    </div>
  </Router>
  );
}

export default App;