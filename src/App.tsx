//semelhante ao main da aplicação
import React, { Component } from 'react';
import {BrowserRouter,Switch,Route, Redirect} from 'react-router-dom';
import Home from './pages/home';
import Erro404 from './pages/erro404';
import Topologia from './pages/topologia';
import Historia from './pages/historia';
import CriarConta from './pages/criarConta';
import EditarConta from './pages/editarConta';
import Login from './pages/login';
//import IsAuthenticated from './auth';

/*const PrivateRouter ({component: Component, ...rest}) =>(
  <Route {...rest} render={props => (
    IsAuthenticated () ?(
      <Component {...props} />
    ) :(
      <Redirect to ={{path= "/", state. {from: props.location}}}/>
    )
  }
  />
);*/


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
