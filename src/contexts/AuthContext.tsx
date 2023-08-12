

import { useState, createContext, useContext, ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IUser {
  email: string;
  password: string;
}

interface IAuthContext {
  user: IUser;
  login: (user: IUser) => void
  logout: () => void;
  logged: boolean;
}

const defaultState = {
  user: {
    email: '',
    password: '',
  },
  login: (user: IUser) => { },
  logout: (user: IUser) => { },
} as IAuthContext

export const AuthContext = createContext(defaultState);

interface AuthProviderProps {
  children: ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<IUser>({
    email: '',
    password: ''
  });
  const [logged, setLogged] = useState(false)
  const navigate = useNavigate()


  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      setUser(foundUser);
      setLogged(true)
    }
  }, []);

  const login = (user: IUser) => {
    setUser(user);
    localStorage.setItem('user', JSON.stringify(user))
    setLogged(true)
  };

  const logout = () => {
    setUser({
      email: '',
      password: ''
    });
    localStorage.clear();
    setLogged(false)
    navigate('/')
  };


  return (
    <AuthContext.Provider value={{ user, login, logout, logged }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);