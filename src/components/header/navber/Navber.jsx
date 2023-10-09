import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import navUser from "../../../assets/images/user.png";
import { authContext } from "../../../providers/AuthProvider";

const Navber = () => {
  const { user, logOut } = useContext(authContext);
  const handleLogOut = () => {
    logOut().then(() => console.log("logout user"));
  };
  const navItems = (
    <>
      <li className="text-base">
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#e49239]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-base">
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#e49239]" : ""
          }
        >
          About
        </NavLink>
      </li>
      <li className="text-base">
        <NavLink
          to={"/works"}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline text-[#e49239]" : ""
          }
        >
          Our Works
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-white py-3 lg:px-16 md:px-10 px-6 font-semibold text-black">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-5 menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="rounded-full">
          <div className="flex items-center gap-3">
            <div>{user && user.displayName}</div>
            <div>
                {
                  user && <img  className="w-10 rounded-full" src={user?.photoURL ? user?.photoURL : navUser} />
                }
            </div>
          </div>
        </div>
        {user ? (
          <button
            onClick={handleLogOut}
            className="px-6 rounded-xl hover:text-[#e49239] hover:bg-white transition-all border-2 border-[#e49239] bg-[#222222] text-white font-semibold py-2"
          >
            Logout
          </button>
        ) : (
          <Link to={"/login"}>
            <button className="px-6 rounded-xl hover:text-[#e49239] hover:bg-white transition-all border-2 border-[#e49239] bg-[#222222] text-white font-semibold py-2">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navber;
