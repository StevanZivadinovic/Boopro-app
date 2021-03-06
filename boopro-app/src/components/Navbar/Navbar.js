import React from "react";
import { Link } from "react-router-dom";
import { User } from "./../AuthContex/AuthContext.js";

const Navbar = () => {
  const { user, logOut } = User();

  const handleLogOut = (e) => {
    e.preventDefault();
    try {
      logOut(user.email);
    } catch (err) {
      console.dir(err);
    }
  };

  return (
    <div className="flex items-center justify-between p-4  w-full z-[10000]">
      <Link to="/">
        <h1 className="text-red-600 text-4xl font-bold cursor-pointer">
          Boopro - list movies -ReactJS{" "}
        </h1>
      </Link>
      <div>
        {user?.email ? (
          <>
            <button
              onClick={(e) => handleLogOut(e)}
              className="bg-red-600 py-3 px-6 rounded text-white cursor-pointer text-3xl"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="text-white pr-5 text-3xl cursor-pointer">
                Sign in
              </button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
