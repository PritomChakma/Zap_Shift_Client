import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";

const Register = () => {
  const { register, handleSubmit } = useForm();
const {registerUser} = UseAuth()

  const handleRegister = (data) => {
    console.log(data);
    registerUser(data.email, data.password)
    .then(result =>{
      console.log(result.user);
    })
    .catch(error =>{console.log(error)})
  };

  return (
    <div>
      <form onSubmit={handleSubmit(handleRegister)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input
            {...register("email")}
            type="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            {...register("password")}
            type="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Register;
