import { createContext, useState } from 'react';

export const AuthContext = createContext({
  isAuth: false,
  isAuthenticated: (value) => {},
});

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState()
  const [user, setUser] = useState('')

  function isAuthenticated(value) {
    setIsAuth(value);
  }
  function setUserId(user) {
    setUser(user)
  }

  const value = {
    isAuth: !!isAuth,
    user,
    isAuthenticated,
    setUserId
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;