import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function navbar() {
  return (
    <div className="flex z-10 fixed w-full top-0 justify-between items-center bg-white p-4 shadow-lg">
      <img className="w-20" src={logo} alt="logo" />
      <div className="flex items-center ">
        <button className="mr-8 py-1 border px-5 font-semibold text-sm  border-neutral-normal rounded">
          <Link to="/register">Sign up</Link>
        </button>
        <i className="fas fa-xl  fa-bars" />
      </div>
    </div>
  );
}
