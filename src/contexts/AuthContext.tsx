import { useState, createContext, useContext, ReactNode, Dispatch, SetStateAction } from "react";



interface AuthProviderProps {
  children: ReactNode;
}

interface User {
  name?: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

interface AuthContextInterface {
  user: User;
  login: (user: User) => void

}

const defaultState = {
  user: {
    name: '',
    email: '',
    password: '',
  },
  login: (user: User) => { },
} as AuthContextInterface

const AuthContext = createContext(defaultState);


export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    password: ''
  });


  const login = (user: User) => {
    setUser(user);
  };

  const logout = () => {
    setUser({
      name: '',
      email: '',
      password: ''
    });
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);