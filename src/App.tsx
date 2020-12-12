//semelhante ao main da aplicação
import React from 'react';
import Routes from '../src/routes';
import { AuthProvider } from '../src/contexts/auth';

function App() {
  return (   
    <AuthProvider>
    <Routes />
  </AuthProvider>
);
}

export default App;
