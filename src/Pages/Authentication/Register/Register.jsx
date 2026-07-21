import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import UseAuth from "../../../Hooks/UseAuth";
import GoogleLogin from "../SignInGoogle/GoogleLogin";

const Register = () => {
  const { register, handleSubmit, reset } = useForm();

  const { registerUser, updateUserProfile } = UseAuth();


  const [showPassword, setShowPassword] = useState(false);

const location = useLocation()
  const navigate = useNavigate();



  const handleRegister = async (data) => {
    try {
      // Image
      const image = data.photo[0];

      const formData = new FormData();
      formData.append("image", image);

      const imageAPI = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`;

      // Upload Image
      const imageRes = await axios.post(imageAPI, formData);

      if (!imageRes.data.success) {
        return console.log("Image Upload Failed");
      }

      const photoURL = imageRes.data.data.display_url;

      // Firebase Register
      await registerUser(data.email, data.password);

      // Update Profile
      await updateUserProfile(data.name, photoURL);

      console.log("Registration Successful");

      reset();
      const from = location.state?.from?.pathname || "/";
    navigate(from, { replace: true });

      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
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
            <label className="text-sm font-medium">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: true })}
              className="input input-bordered w-full mt-2 rounded-xl"
            />
          </div>

          {/* Photo */}

          <div>
            <label className="text-sm font-medium">
              Profile Photo
            </label>

            <input
              type="file"
              accept="image/*"
              {...register("photo", { required: true })}
              className="file-input file-input-bordered w-full mt-2 rounded-xl"
            />
          </div>

          {/* Email */}

          <div>
            <label className="text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="input input-bordered w-full mt-2 rounded-xl"
            />
          </div>

          {/* Password */}

          <div>
            <label className="text-sm font-medium">
              Password
            </label>

            <div className="relative mt-2">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                })}
                className="input input-bordered w-full pr-12 rounded-xl"
              />

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? (
                  <FaEyeSlash />
                ) : (
                  <FaEye />
                )}
              </button>
            </div>
          </div>

          <button className="btn btn-primary w-full rounded-xl">
            Create Account
          </button>
        </form>

        <div className="divider">OR</div>

        <GoogleLogin />

        <p className="text-center mt-5">
          Already have an account?
          <Link
            className="text-primary font-semibold ml-2"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;