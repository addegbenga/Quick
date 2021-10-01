import React, { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import card from "../assets/logoicon.svg";

export default function adminNav() {
  return (
    <div className="relative">
      <div className="flex  items-center justify-between  border-b
       bg-white p-6">
        <div className="flex text-sm items-center">
          <i class="fas fa-link text-semibold  mr-2"></i>
          <a href="div">www.qwikker.com/akinkumi</a>
        </div>
        <Popover>
          {({ open }) => (
            <>
              <Popover.Button>
                <i
                  className={`fa focus:ring-4 fa-bars text-lg ${
                    open ? "fa fa-times" : ""
                  }`}
                ></i>
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute w-1/2 border text-gray-700 top-20 pl-6 pr-8 py-6 rounded bg-white shadow-lg right-4 z-10">
                  <div className="flex flex-col ">
                    <div className="flex text-sm pb-3 items-center">
                      <i className="fa text-xs  mr-2 fa-palette"></i>
                      <Link>Appearance</Link>
                    </div>
                    <div className="flex text-sm pb-3 items-center">
                      <i className="fas text-xs mr-2 fa-bell "></i>
                      <Link>Notifications</Link>
                    </div>
                    <div className="flex text-sm  pb-3 items-center">
                      <i className="fa text-xs  mr-2 fa-gears"></i>
                      <Link>Settings</Link>
                    </div>
                    <div className="flex text-xs p-2 rounded mb-3 items-center border-2  border-neutral-normal justify-center ">
                      <img className="w-3 mb-1 mr-2" src={card} alt="card" />
                      <Link>Get card</Link>
                    </div>
                    <div className="flex text-xs p-2 rounded mb-3 items-center text-white justify-center bg-neutral-secondary">
                      <i
                        // style={{ color: "#FFa385 " }}
                        className="fa text-xs  mr-2 fa-paper-plane"
                      ></i>
                      <Link>Preview</Link>
                    </div>
                  </div>
                
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
}
