import { Link } from "react-router-dom";
import logo from "../../../assets/Group.png";

const Logo = () => {
  return (
    <Link
      to="/"
      className="inline-flex items-center gap-3 group"
    >
      <div className="w-12 h-12 rounded-xl bg-white shadow-md flex items-center justify-center border border-gray-100 group-hover:shadow-lg transition-all duration-300">
        <img
          src={logo}
          alt="ZapShift Logo"
          className="w-8 h-8 object-contain"
        />
      </div>

      <div>
        <h1 className="text-3xl font-extrabold tracking-tight">
          <span className="text-lime-500">Zap</span>
          <span className="text-gray-800">Shift</span>
        </h1>
      </div>
    </Link>
  );
};

export default Logo;