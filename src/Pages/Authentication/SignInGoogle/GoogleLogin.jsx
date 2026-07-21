import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../../Hooks/UseAuth";

const GoogleLogin = () => {

const {GoogleLogin} = UseAuth()

const handleGoogleLogin = () =>{
    GoogleLogin()
    .then(result =>{
    console.log(result.user);
  })
  .catch(error =>{console.log(error)})
}
    return (
        <button onSubmit={handleGoogleLogin} className="btn btn-outline w-full rounded-xl">
          <FcGoogle size={22} />
          Continue with Google
        </button>
    );
};

export default GoogleLogin;