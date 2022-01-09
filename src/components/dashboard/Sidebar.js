import React from "react";
import { AiOutlineAlignRight } from "react-icons/ai";
import { LOGOUT_USER } from "../../actions/types";
import { useDispatch } from "react-redux";
import { Popover } from "@headlessui/react";

export default function Sidebar() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch({ type: LOGOUT_USER });
    localStorage.removeItem("token");
  };

  function MyPopover() {
    return (
      <Popover className="  lg:hidden   ">
        <Popover.Button>
          {" "}
          <AiOutlineAlignRight size={20} />
        </Popover.Button>

        <Popover.Panel className="absolute right-0 p-5 px-7 bg-white shadow-lg rounded border  z-10">
          <div className=" gap-3 flex flex-col ">
            <a href="/analytics">Analytics</a>
            <a href="/engagement">Engagement</a>
            <a href="/security">Security</a>
            <button
              onClick={handleLogOut}
              className="bg-red-500 px-8 text-white rounded p-1"
            >
              Log out
            </button>
          </div>
         
        </Popover.Panel>
      </Popover>
    );
  }
  return (
    <div className="  lg:block bg-white border relative  p-3 flex">
      <div className="flex h-full lg:flex-col items-center  justify-between w-full ">
        <svg
          width="20"
          height="20"
          viewBox="0 0 174 173"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M149.781 143.49L130.046 123.915L94.5873 88.6172C93.1433 87.1731 91.0574 86.2104 88.9716 86.2104H61.0539C59.2889 86.3709 57.8449 87.8149 58.0054 89.5798C58.0054 90.3821 58.3263 91.0239 58.8076 91.5052L107.423 140.281L128.121 160.979L136.624 169.482C136.945 169.803 137.266 169.964 137.748 169.964H172.244C173.206 169.964 173.848 169.322 173.848 168.359C173.848 167.878 173.688 167.557 173.367 167.236L149.781 143.49Z"
            fill="#FF6F3D"
          />
          <path
            d="M82.2335 0.0508087C34.7411 2.13662 -2.00122 42.2484 0.084588 89.7407C2.1704 137.233 42.2822 173.975 89.7745 172.05C94.9088 171.89 100.043 171.087 105.017 169.964C109.67 168.841 114.162 167.558 118.494 165.632C119.297 165.311 119.618 164.349 119.297 163.546C119.136 163.386 119.136 163.225 118.976 163.065L99.4013 143.49C99.0804 143.17 98.4386 143.009 97.9573 143.009C66.5097 149.587 35.5434 129.532 28.9651 98.0839C23.9912 74.3378 34.0994 49.9498 54.6366 36.9536C64.9052 30.3753 76.9387 27.3268 89.1327 27.9686C118.655 29.7335 142.241 53.3192 144.006 82.681C144.647 94.3937 141.759 106.106 135.662 116.054C135.341 116.696 135.341 117.498 135.823 117.979L153.632 135.629C154.274 136.27 155.237 136.27 155.879 135.629L156.039 135.468C183.315 96.6399 174.009 42.8902 135.181 15.4537C119.618 4.86422 101.166 -0.590979 82.2335 0.0508087Z"
            fill="#151522"
          />
        </svg>
        <button
          onClick={handleLogOut}
          className="hidden border text-black text-opacity-70 rounded p-2 lg:block"
        >
          Logout
        </button>

        <MyPopover />
      </div>
    </div>
  );
}
