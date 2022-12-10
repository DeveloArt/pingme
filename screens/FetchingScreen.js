import React from "react";
import { useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../contextStore/AuthContext";
import { ScrollView } from "react-native-web";
import { collection, getDocs, query } from "firebase/firestore";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { firestore } from "../firebase/config";

const FetchingScreen = () => {
  const authCtx = useContext(AuthContext);
  const userId = authCtx.user;
  const { navigate } = useNavigation();
  const auth = getAuth();
  signOut(auth)
    .then(() => {})
    .catch((error) => {});

  const getAllUsers = async () => {
    const q = query(collection(firestore, "users"));
    const querySnapshot = await getDocs(q);
    const allSuppliers = [];
    querySnapshot.forEach((doc) => {
      allSuppliers.push(doc.data());
    });
    return allSuppliers;
  };
  const getAllMatches = async () => {
    const q = query(collection(firestore, "matches"));
    const querySnapshot = await getDocs(q);
    const allSuppliers = [];
    querySnapshot.forEach((doc) => {
      allSuppliers.push(doc.data());
    });
    return allSuppliers;
  };

  useEffect(() => {
    if (authCtx.user) {
      getAllUsers().then((data) => authCtx.getAllUsers(data));
      getAllMatches().then((data) => authCtx.getAllMatches(data));
      navigate("HomeTab");
    } else {
        getAllUsers().then((data) => authCtx.getAllUsers(data));
        getAllMatches().then((data) => authCtx.getAllMatches(data));
      navigate("Login");
    }
  }, []);

  return <ScrollView />;
};

export default FetchingScreen;
