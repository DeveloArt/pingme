import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isAuth: false,
  isAuthenticated: (value) => {},
});

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState();

  function isAuthenticated(value) {
    setIsAuth(value);
  }

  const value = {
    isAuth: !!isAuth,
    isAuthenticated
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;