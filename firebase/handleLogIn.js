import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./config";

export const signInWithEmail = (email, password, navigate) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigate("HomeTab");
      return userCredential.user.uid;
    })
    .catch((error) => {
      switch (error.code) {
        case "auth/user-not-found":
          // setLoginErrors('Nie ma takiego użytkownika');
          break;
        case "auth/wrong-password":
          // setLoginErrors('Błędne hasło');
          break;
        default:
        // setLoginErrors('Ups... coś poszło nie tak');
      }
    });
};
