//semelhante ao main da aplicação
import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/home';
import Erro404 from './pages/erro404';
import Topologia from './pages/topologia';
import Historia from './pages/historia';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/topologias" component= {Topologia} />
        <Route path="/historia" component= {Historia} />
        <Route component= {Erro404} />
      </Switch>
    </BrowserRouter>  
  );
}

export default App;

//<div >  
//      <h1>Hello,world</h1> 
//      Formando campeões  
//<Route path="/editais" component= {Editais} /> 
//<Route component= {Erro404} />   
//    </div>