import { createContext, useState } from "react";

export const AuthContext = createContext({
  isAuth: false,
  user: "",
  allUsers: [],
  allMatches: [],
  isAuthenticated: (value) => {},
  getAllMatches: (value) => {},
  getAllUsers: (value) => {}
});

function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState();
  const [user, setUser] = useState("");
  const [allUsers, setAllUsers] = useState([]);
  const [allMatches, setAllMatches] = useState([])

  function isAuthenticated(value) {
    setIsAuth(value);
  }
  function setUserId(user) {
    setUser(user);
  }
  function getAllUsers(value) {
    setAllUsers(value);
  }
  function getAllMatches(value) {
    setAllMatches(value);
  }
  const value = {
    isAuth: !!isAuth,
    user,
    isAuthenticated,
    setUserId,
    getAllUsers,
    allUsers,
    getAllMatches, 
    allMatches
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
