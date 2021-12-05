import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="bg-white border-b h-16 flex items-center  ">
      <div className="w-3/5  flex justify-around ">
        <Link to=""> Link</Link>
        <Link to="appearance">Appearance</Link>
        <Link to="setting">Setting</Link>
        <Link to="pro">Pro</Link>
      </div>
    </div>
  );
}
