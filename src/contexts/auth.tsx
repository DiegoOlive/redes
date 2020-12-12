import React, { createContext, useState, useEffect, useContext } from 'react';
import history from '../services/history';
import Conection from '../services/connection';

interface AuthContextData {
  signed: boolean;
  id: number;
  name: string;
  email: string;
  lastname: string,
  phone: number,
  senha: string;
  confSenha: string,
  course: string,
  degree: string,
  nivel: string,
  motivation: string,
  user: object | null;
  SignIn(user: object): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState<object | null>(null);


  useEffect(() => {
    const storagedUser = sessionStorage.getItem('@App:user');
    const storagedToken = sessionStorage.getItem('@App:token');

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      Conection.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);

  async function SignIn(userData: object) {
    const response = await Conection.post('/auth', userData)       
    setUser(response.data.user);

    Conection.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    sessionStorage.setItem('@App:user', JSON.stringify(response.data.user));
    sessionStorage.setItem('@App:token', response.data.token);
    sessionStorage.setItem('@App:id', response.data.user.id);
    sessionStorage.setItem('@App:name', response.data.user.name);
    sessionStorage.setItem('@App:email', response.data.user.email);
    sessionStorage.setItem('@App:lastname', response.data.user.lastname);
    sessionStorage.setItem('@App:phone', response.data.user.phone);
    sessionStorage.setItem('@App:senha', response.data.user.senha);
    sessionStorage.setItem('@App:confSenha', response.data.user.confSenha);
    sessionStorage.setItem('@App:course', response.data.user.course);
    sessionStorage.setItem('@App:degree', response.data.user.degree);
    sessionStorage.setItem('@App:nivel', response.data.user.nivel);
    sessionStorage.setItem('@App:motivation', response.data.user.motivation);
    
  }

  function Logout() {
    setUser(null);
    history.push("/");
    sessionStorage.clear();

  }

  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), id: Number(),
        name: String(),
        email: String(),       
        lastname: String(),
        phone: Number(),
        senha: String(),
        confSenha: String(),
        course: String(),
        degree: String(),
        nivel: String(),
        motivation: String(), user, SignIn, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}