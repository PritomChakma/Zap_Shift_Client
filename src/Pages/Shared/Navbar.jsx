import { Link, NavLink } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import Logo from "./Logo/Logo";

const Navbar = () => {
  const { user, signLogout } = UseAuth();

  const handleLogout = () => {
    signLogout()
      .then(() => {
        console.log("Logout Success");
      })
      .catch((error) => console.log(error));
  };

  const links = (
    <>
      <li>
        <NavLink to="/services">Services</NavLink>
      </li>
      <li>
        <NavLink to="/coverage">Coverage</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/pricing">Pricing</NavLink>
      </li>
      <li>
        <NavLink to="/rider">Be a Rider</NavLink>
      </li>
    </>
  );

  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100 max-w-7xl mx-auto">
        {/* Left */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>

          <Link to="/">
            <Logo />
          </Link>
        </div>

        {/* Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-medium">{links}</ul>
        </div>

        {/* Right */}
        <div className="navbar-end gap-3">
          {user ? (
            <>
              {/* Profile */}
              <div
                className="tooltip tooltip-bottom"
                data-tip={user.displayName || "User"}
              >
                <div className="avatar">
                  <div className="w-11 rounded-full ring ring-[#CAEB66] ring-offset-2">
                    <img
                      src={
                        user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"
                      }
                      alt="profile"
                    />
                  </div>
                </div>
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="btn bg-red-500 hover:bg-red-600 text-white border-none rounded-xl"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login */}
              <Link to="/login" className="btn btn-outline rounded-xl">
                Login
              </Link>
            </>
          )}

          {/* Rider Button */}
          <button className="btn bg-[#CAEB66] hover:bg-lime-400 rounded-xl border-none">
            Be a Rider
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
