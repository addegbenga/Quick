import React from "react";

export default function Subnavbar() {
  return (
    <div className="bg-white border-b py-5  ">
      <div className="w-3/5 flex ml-7 text-sm ">
        <a className="font-semibold mr-3" href="#div">
          Life time analytics:
        </a>

        <div className="flex items-center mr-6">
          <p className="h-2 w-2 rounded-full bg-buttonPrimary mr-1.5"></p>
          <a href="#div">Views: 4</a>
        </div>
        <div className="flex items-center ">
          <p className="h-2 w-2 rounded-full bg-indigo-500 mr-1.5"></p>
          <a href="#div">Clicks: 0</a>
        </div>
      </div>
    </div>
  );
}
