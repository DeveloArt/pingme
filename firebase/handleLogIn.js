import {
    signInWithEmailAndPassword
  } from 'firebase/auth';
  import { auth } from './config';


export const handleLogin = async (email, password, navigate) => {
  let user
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigate('HomeTab');
    user = {user: userCredential.user.uid}
    addNewUser(user)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  
  return user
}