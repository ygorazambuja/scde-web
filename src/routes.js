import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Busca from './pages/Busca';
import Home from './pages/Home';
import Recados from './pages/Recados';
import Documentacao from './pages/Documentacao';
import CadastrarDocumentacao from './pages/CadastrarDocumentacao';
import ListarDocumentacao from './pages/ListarDocumentacao';
import Login from './pages/Login';
import GerarDocumentos from './pages/GerarDocumentos';
import CancelamentoMatricula from './relatorios/CancelamentoMatricula';

const routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/busca" component={Busca} />
      {/* <Route path="/recados" component={Recados} /> */}
      <Route path="/documentacao" component={Documentacao} />
      <Route path="/cadastrarDocumentacao" component={CadastrarDocumentacao} />
      <Route path="/listarDocumentacao" component={ListarDocumentacao} />
      <Route path="/gerarDocumentos" component={GerarDocumentos} />
      <Route path="/cancelamentoDeMatricula" component={CancelamentoMatricula} />
    </Switch>
  </BrowserRouter>
);
export default routes;
