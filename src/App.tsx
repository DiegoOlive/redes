//semelhante ao main da aplicação
import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        
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