import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";
import {
  collection,
  doc,
  setDoc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { firestore } from "./config";
import setUserNameAndSurname from "../helpers/setUserNameAndSurrname";
export const handleSignUp = (email, password, navigate) => {
  let user;
  const addNewUser = (user) => {
    const usersRef = collection(firestore, "users");
    console.log({ email });
    console.log({ user });
    const { name, surname } = setUserNameAndSurname(email);
    setDoc(doc(usersRef), { name, surname, id: user.user }).catch((err) =>
      console.log(err)
    );
  };
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigate("HomeTab");
      user = { user: userCredential.user.uid };
      addNewUser(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  return user;
};
