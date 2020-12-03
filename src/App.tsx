//semelhante ao main da aplicação
import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/home';
import Erro404 from './pages/erro404';
import Topologia from './pages/topologia';
import Historia from './pages/historia';
import CriarConta from './pages/criarConta';
import EditarConta from './pages/editarConta';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Login} exact />
        <Route path="/home" component= {Home} />
        <Route path="/topologias" component= {Topologia} />
        <Route path="/historia" component= {Historia} />
        <Route path="/criarconta" component= {CriarConta} />
        <Route path="/editarconta" component= {EditarConta} />
        <Route path="/login" component= {Login} />
        <Route component= {Erro404} />
      </Switch>
    </BrowserRouter>  
  );
}

export default App;
