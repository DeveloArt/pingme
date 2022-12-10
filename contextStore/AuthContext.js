import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuth: false,
  isAuthenticated: (value) => {},
});

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState();
  const [user, setUser] = useState("");
  const [allUsers, setAllUsers] = useState([]);

  function isAuthenticated(value) {
    setIsAuth(value);
  }
  function setUserId(user) {
    setUser(user);
  }
  function getAllUsers(value) {
    setAllUsers(value);
  }
  const value = {
    isAuth: !!isAuth,
    user,
    isAuthenticated,
    setUserId,
    getAllUsers,
    allUsers,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
