import { BrowserRouter, Routes, Route , useNavigate, Link} from "react-router-dom";
import React from "react";
import Logo from "../assets/logo";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="h-45 flex justify-center items-center bg-gradient-to-br from-purple-200 to-blue-100">
      <nav
        className="h-3/5 w-4/5 rounded-2xl flex justify-between items-center from-blue-100 to-purple-200"
        style={{ boxShadow: "0px 10px 25px #ccc" }}
      >
        <div className="h-full">
          <img
            src={Logo.AppLogo}
            alt="applogo"
            className="h-full cursor-pointer"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="h-full w-64 flex justify-evenly items-center">
          <Link
            to={"/register"}
            className="h-10 w-20 bg-purple-600 font-bold text-white rounded-2xl cursor-pointer flex justify-center items-center"
          >
            Sign up
          </Link>
          <Link
            to={"/login"}
            className="h-10 w-20 bg-purple-600 font-bold text-white rounded-2xl cursor-pointer flex justify-center items-center"
          >
            Sign in
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
