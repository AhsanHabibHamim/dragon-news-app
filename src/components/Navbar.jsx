import React, { use } from "react";
import { Link, NavLink } from "react-router";
import UserIcon from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logout } = use(AuthContext);
  const handleLogOut = () => {
    logout()
      .then(() => {
        alert("You Have Logged Out");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="flex justify-between items-center">
      <div>
        {" "}
        <h1>{user && user.email}</h1>
      </div>
      <div className="gap-5 flex text-[#706F6F] text-sm active:underline">
        <NavLink to="/category/0">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="flex gap-5">
        <img src={UserIcon} alt="" />
        {user ? (
          <button
            onClick={handleLogOut}
            className="text-white btn bg-[#403F3F] px-6 py-1 text-xl"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="text-white btn bg-[#403F3F] px-6 py-1 text-xl "
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
