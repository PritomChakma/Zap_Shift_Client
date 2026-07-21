import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
import { AuthContext } from "./Authcontext";

const AuthProvider = ({ children }) => {
const provider = new GoogleAuthProvider();


  const registerUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

const GoogleLogin = () =>{
  return signInWithPopup(auth, provider)
}

  const authValue = {
    registerUser,
    signInUser,
    GoogleLogin
  };

  return (
    <AuthContext.Provider value={authValue}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;