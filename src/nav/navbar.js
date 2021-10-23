import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function navbar() {
  return (
    <div className="bg-white shadow-lg md:shadow-none border w-full z-10 fixed w-full top-0">
      <div className=" lg:w-5/6 md:w-5/6 md:m-auto flex lg:m-auto xl:w-5/6 xl:m-auto justify-between items-center p-4 md:p-6 lg:p-6 xl:p-6 ">
        <img className="w-20 lg:w-24 xl:w-28 " src={logo} alt="logo" />
        <div className="flex items-center ">
          <ul className="hidden md:block mr-10  text-sm">
            <a href="#e">Home</a>
            <a className="mx-7"  href="#e">About</a>
            <a href="#e">Faqs</a>
          </ul>

          <button className="mr-8 py-1 md:py-2 border text-gray-700 px-4 md:px-5 font-semibold text-sm border-gray-500 rounded">
            <Link to="/register">Sign up</Link>
          </button>
          <i className="fas fa-lg  md:hidden fa-bars" />
        </div>
      </div>
    </div>
  );
}
