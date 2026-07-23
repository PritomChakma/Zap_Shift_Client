import {
  FaBars,
  FaBoxOpen,
  FaHome,
  FaSignOutAlt,
  FaTruck,
  FaUser,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";

const DashboardLayout = () => {
  const { user } = UseAuth();

  const menuClass = ({ isActive }) =>
    `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300 ${
      isActive
        ? "bg-[#CAEB66] text-black font-semibold"
        : "text-gray-300 hover:bg-[#CAEB66] hover:text-black"
    }`;

  return (
    <div className="drawer lg:drawer-open min-h-screen bg-slate-100">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Main Content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <nav className="navbar sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm px-5">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-4"
              className="btn btn-square btn-ghost drawer-button"
            >
              <FaBars size={20} />
            </label>
          </div>

          <div className="flex-1">
            <h2 className="text-2xl font-bold text-slate-700">Dashboard</h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="avatar">
              <div className="w-11 rounded-full ring ring-[#CAEB66] ring-offset-2">
                <img
                  src={user.photoURL || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="profile"
                />
              </div>
            </div>
          </div>
        </nav>

        {/* Page Content */}
        <main className="flex-1 p-5 md:p-8">
          <Outlet />
        </main>
      </div>

      {/* Sidebar */}
      <div className="drawer-side z-40">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        <aside className="w-64 min-h-full bg-slate-900 text-white flex flex-col">
          {/* Logo */}
          <div className="border-b border-slate-700 py-7 text-center">
            <h1 className="text-3xl font-bold text-[#CAEB66]">Zap Shift</h1>

            <p className="text-sm text-gray-400 mt-1">Parcel Delivery</p>
          </div>

          {/* Menu */}
          <ul className="menu p-4 flex-1 space-y-2">
            <li>
              <NavLink to="/dashboard" end className={menuClass}>
                <FaHome />
                Dashboard
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/sendParcel" className={menuClass}>
                <FaTruck />
                Send Parcel
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/myParcels" className={menuClass}>
                <FaBoxOpen />
                My Parcels
              </NavLink>
            </li>

            <li>
              <NavLink to="/dashboard/profile" className={menuClass}>
                <FaUser />
                Profile
              </NavLink>
            </li>
          </ul>

          {/* Bottom Menu */}
          <div className="border-t border-slate-700 p-4 space-y-2">
            <NavLink to="/" className={menuClass}>
              <FaHome />
              Home
            </NavLink>

            <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300">
              <FaSignOutAlt />
              Logout
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default DashboardLayout;
