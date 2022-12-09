import {
    signInWithEmailAndPassword
  } from 'firebase/auth';
  import { auth } from './config';

export const handleLogin = async (email, password, navigate) => {
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigate('Home');
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    
  }