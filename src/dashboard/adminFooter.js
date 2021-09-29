import React from "react";

export default function adminFooter() {
  return (
    <div className="fixed bg-white border w-full bottom-0 p-4">
        
      <div className="flex text-neutral-normal focus:text-neutral-secondary justify-around">
        <div className="flex flex-col items-center">
          <i className="fa fa-home"></i>
          <span className="text-xs mt-2 ">LINK</span>
        </div>

        <div className="flex flex-col items-center">
          <i className="fa fa-home"></i>
          <span className="text-xs mt-2 ">APPEARANCE</span>
        </div>

        <div className="flex flex-col items-center">
          <i className="fa fa-gears"></i>
          <span className="text-xs mt-2 ">SETTING</span>
        </div>
      </div>
    </div>
  );
}
