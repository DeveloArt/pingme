import React from "react";
import { useEffect, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../contextStore/AuthContext';
import { ScrollView } from 'react-native-web'
import {
    collection, doc, setDoc, getDoc, getDocs, query, where,
  } from 'firebase/firestore';
  import { get } from 'react-hook-form';
  import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const FetchingScreen = () => {
    const authCtx = useContext(AuthContext);
    const userId = authCtx.user
    const { navigate } = useNavigation();
    const auth = getAuth();
    // signOut(auth).then(() => {
    //   }).catch((error) => { 
    //   });

const getAllUsers = async () => {
        const q = query(collection(firestore, "users"));
        const querySnapshot = await getDocs(q);
        const allSuppliers = []
        querySnapshot.forEach((doc) => { allSuppliers.push(doc.data()) });
        return allSuppliers
      }

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    authCtx.setUserId(uid)
    const users = getAllUsers()
    navigate('Home')
  } else {
    navigate('Login')
  }
});

  return (
	<ScrollView />
  )
}

export default FetchingScreen




