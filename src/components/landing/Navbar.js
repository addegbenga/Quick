import React from "react";
import { FaBars } from "react-icons/fa";
export default function Navbar() {
  return (
    <div style={{ background: "#e5f7fe" }}>
      <header className="flex justify-between items-center md:px-12 2xl:w-5/6 2xl:m-auto lg:px-20 xl:px-32 lg:py-6  2xl:py-12 px-5 py-4">
        <span className="text-textPrimaryColor md:text-3xl  2xl:text-4xl text-2xl font-black tracking-tight">
          {" "}
          weblinks<span className="text-buttonPrimary text-2xl 2xl:text-4xl">.</span>
        </span>
        <FaBars />
      </header>
    </div>
  );
}
