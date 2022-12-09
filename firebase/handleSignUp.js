import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";
import {
  collection, doc, setDoc, getDoc, getDocs, query, where,
} from 'firebase/firestore';

export const handleSignUp = (email, password, navigate) => {
  const addNewUser = (user) => {
    const usersRef = collection(firestore, 'users');
    setDoc(doc(usersRef), user).catch((err) => console.log(err));
  };
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigate("Home");
      user = {user: userCredential.user.uid}
      addNewUser(user)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
