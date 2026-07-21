import { Outlet } from "react-router-dom";
import Logo from "../Pages/Shared/Logo/Logo";
import authImg from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="w-11/12 mx-auto py-6">

        <Logo />

        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Form */}
          <div className="flex justify-center">
            <Outlet />
          </div>

          {/* Image */}
          <div className="hidden lg:flex justify-center">
            <img
              src={authImg}
              alt=""
              className="w-[450px]"
            />
          </div>

        </div>
      </div>
    </div>
  );
};

export default AuthLayout;