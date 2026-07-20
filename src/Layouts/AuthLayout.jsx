import { Outlet } from "react-router-dom";
import Logo from "../Pages/Shared/Logo/Logo";
import authImg from "../assets/authImage.png"

const AuthLayout = () => {
    return (
        <div className="w-11/12 mx-auto">
            <Logo></Logo>

            <div className="flex">
                <div className="flex-1">  <Outlet></Outlet>   </div>
                <div className="flex-1">
                    <img src={authImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;