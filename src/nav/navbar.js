import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function navbar() {
  return (
    <div className="bg-white shadow-lg border w-full z-10 fixed w-full top-0">
      <div className=" lg:w-11/12 flex lg:m-auto justify-between items-center p-5 ">
        <img className="w-20" src={logo} alt="logo" />
        <div className="flex items-center ">
          <button className="mr-8 py-2 border px-5 font-semibold text-sm  border-neutral-normal rounded">
            <Link to="/register">Sign up</Link>
          </button>
          <i className="fas fa-xl  fa-bars" />
        </div>
      </div>
    </div>
  );
}
