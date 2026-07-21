import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";

const Login = () => {
const {register, handleSubmit} = useForm()

const {signInUser} = UseAuth()

const handleLogin = data =>{
    console.log(data);
    signInUser(data.email, data.password)
    .then(result =>{
        console.log(result.user);
    })
    .catch(error =>{console.log(error)})
}

  return (
    <div>
        <h1>Welcome back "Login"</h1>
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email"  {...register("email")}/>
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" {...register("password")}/>
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
