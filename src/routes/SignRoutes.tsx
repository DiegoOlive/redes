import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from '../pages/login';
import Erro404 from '../pages/erro404';
import CriarConta from '../pages/criarConta';

const SignRoutes: React.FC = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" component={Login} exact/>
      <Route path="/criarconta" component= {CriarConta} />
      <Route component= {Erro404} />
    </Switch>
    </BrowserRouter>
  );
};

export default SignRoutes;