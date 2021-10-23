import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function navbar() {
  return (
    <div className="bg-white shadow-lg md:shadow-none border w-full z-10 fixed w-full top-0">
      <div className=" lg:w-11/12 md:w-5/6 md:m-auto flex lg:m-auto justify-between items-center p-4 md:p-2 ">
        <img className="w-20 " src={logo} alt="logo" />
        <div className="flex items-center ">
          <ul className="hidden md:block md:mr-10 text-sm">
            <a href="#e">Home</a>
            <a className="mx-7"  href="#e">About</a>
            <a href="#e">Faqs</a>
          </ul>

          <button className="mr-8 py-1 border text-gray-700 px-4 font-semibold text-sm border-gray-500 rounded">
            <Link to="/register">Sign up</Link>
          </button>
          <i className="fas fa-lg  md:hidden fa-bars" />
        </div>
      </div>
    </div>
  );
}
