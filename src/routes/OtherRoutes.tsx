import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../pages/home';
import Historia from '../pages/historia';
import Topologia from '../pages/topologia';
import EditarConta from '../pages/editarConta';

const OtherRoutes: React.FC = () => {
 return (
   <BrowserRouter>
   <Switch>
     <Route path="/" component={Home} exact/>
     <Route path="/topologias" component= {Topologia}/>
     <Route path="/historia" component= {Historia}/>
     <Route path="/editarconta" component= {EditarConta}/>
  </Switch>
   </BrowserRouter>
 );
};

export default OtherRoutes;