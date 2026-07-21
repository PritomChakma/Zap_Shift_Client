import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UseAuth from "../../../Hooks/UseAuth";
import GoogleLogin from "../SignInGoogle/GoogleLogin";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signInUser } = UseAuth();

  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (data) => {
    signInUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">

        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Welcome Back 👋
          </h1>
        </div>

        <form
          onSubmit={handleSubmit(handleLogin)}
          className="space-y-5"
        >
          {/* Email */}

          <div>
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="input input-bordered w-full mt-2 rounded-xl focus:border-primary"
            />
          </div>

          {/* Password */}

          <div>
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>

            <div className="relative mt-2">

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                {...register("password")}
                className="input input-bordered w-full rounded-xl pr-12 focus:border-primary"
              />

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>

            </div>
          </div>

          <div className="flex justify-end">
            <Link
              className="text-sm text-primary hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button className="btn btn-primary w-full rounded-xl">
            Login
          </button>
        </form>

        <div className="divider text-xs text-gray-400 my-6">
          OR
        </div>

       <GoogleLogin></GoogleLogin>

        <p className="text-center text-sm mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-primary font-semibold"
          >
            Register
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Login;