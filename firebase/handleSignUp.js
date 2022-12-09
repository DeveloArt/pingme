import {
   createUserWithEmailAndPassword
  } from 'firebase/auth';
  import { auth } from './config';
  
  export const handleSignUp = (
    email,
    password,
    navigate,
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      navigate('Home');
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
  };