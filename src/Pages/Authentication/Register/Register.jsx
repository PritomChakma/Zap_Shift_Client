import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import UseAuth from "../../../Hooks/UseAuth";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const { registerUser } = UseAuth();

  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (data) => {
    console.log(data);

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">

        {/* Heading */}
        <div className="mb-7">
          <h1 className="text-4xl font-bold text-gray-800">
            Create Account 🚀
          </h1>

        </div>

        <form
          onSubmit={handleSubmit(handleRegister)}
          className="space-y-4"
        >
          {/* Name */}

          <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              {...register("name")}
              className="input input-bordered w-full mt-2 rounded-xl"
            />
          </div>

          {/* Photo */}

          <div>
            <label className="text-sm font-medium text-gray-700">
              Photo URL
            </label>

            <input
              type="text"
              placeholder="Enter photo URL"
              {...register("photo")}
              className="input input-bordered w-full mt-2 rounded-xl"
            />
          </div>

          {/* Email */}

          <div>
            <label className="text-sm font-medium text-gray-700">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email")}
              className="input input-bordered w-full mt-2 rounded-xl"
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
                placeholder="Enter password"
                {...register("password")}
                className="input input-bordered w-full rounded-xl pr-12"
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

          {/* Register Button */}

          <button className="btn btn-primary w-full rounded-xl mt-2">
            Create Account
          </button>
        </form>

        <div className="divider text-xs text-gray-400 my-6">
          OR
        </div>

        {/* Google */}

        <button className="btn btn-outline w-full rounded-xl">
          <FcGoogle size={22} />
          Continue with Google
        </button>

        <p className="text-center text-sm mt-6 text-gray-600">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-primary font-semibold"
          >
            Login
          </Link>
        </p>

      </div>
    </div>
  );
};

export default Register;