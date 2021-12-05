import React from "react";

export default function PanelNav() {
  return (
    <div className="lg:h-16 h-14 flex items-center justify-between px-6 border-b  bg-white ">
      <div className="flex text-sm">
        <h1 className="font-semibold mr-1">My Linktree:</h1>
        <a href="#div">https://linktree/drey</a>
      </div>
      <button className="border py-1 px-3 rounded text-base text-opacity-60 text-black">
        Share
      </button>
    </div>
  );
}
