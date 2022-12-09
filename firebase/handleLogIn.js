import {
    signInWithEmailAndPassword
  } from 'firebase/auth';
  import { auth } from './config';
  import { AuthContext } from '../contextStore/AuthContext';


export const handleLogin = async (email, password, navigate) => {
  const authCtx = useContext(AuthContext);
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    navigate('Home');
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  authCtx.setUserId(user)
  console.log(authCtx.user)
}