import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Children } from "react";
import { auth } from "../Firebase/Firebase.init";
import { AuthContext } from "./Authcontext";

const AuthProvider = () => {
  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authValue = { registerUser, signInUser };

  return <AuthContext value={authValue}>{Children}</AuthContext>;
};

export default AuthProvider;
