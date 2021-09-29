import React, { Fragment, useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.svg";
import Navbar from "./adminNav";
import { Popover, Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import Modal from "../portals/Modal";
export default function Admin() {
  const [isOpen, setOpen] = useState(false);
  let myRef = useRef(null);

  const EditProfile = () => (
    <Popover>
      {({ open }) => (
        <>
          <Popover.Button>
            <i className="fas text-white text-xs absolute right-3 bg-neutral-secondary rounded-full h-10 w-10 flex items-center justify-center bottom-5 fa-pen shadow-lg border"></i>
          </Popover.Button>
          <Popover.Overlay
            className={`${
              open ? "opacity-50 fixed inset-0" : "opacity-0"
            } bg-black`}
          />
          {open && (
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute w-11/12 shadow-lg m-auto border text-gray-700 top-20 rounded bg-white shadow-lg left-0 right-0 z-10">
                <div className="p-4">
                  <div className="flex justify-between items-center mb-6 ">
                    <h1 className="text-xl font-semibold">Edit Profile</h1>
                    <i className="fa w-8 h-8 border flex justify-center items-center rounded-full fa-times"></i>
                  </div>
                  <div className="grid mb-4">
                    <label className="text-sm text-left text-semibold">
                      Full name
                    </label>
                    <input
                      placeholder="John doe"
                      className="border-2 bg-gray-100 text-sm p-2 flex-1 focus:ring-4 rounded border-neutral-normal mt-2"
                      type="text"
                    />
                  </div>
                  <div className="grid mb-4">
                    <label className="text-sm text-left text-semibold">
                      Your bio
                    </label>
                    <textarea
                      placeholder="Your story..."
                      className="border-2 bg-gray-100  p-2 text-sm focus:ring-4 rounded border-neutral-normal mt-2"
                      type="text"
                      rows="5"
                    />
                  </div>
                  <div className="flex justify-end ">
                    <button className="border p-2 ">Save</button>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          )}
        </>
      )}
    </Popover>
  );

  return (
    <div className="">
      <Navbar />
      <div className=" flex relative flex-col items-center text-center p-4 py-16 ">
        <button onClick={() => setOpen(!isOpen)}>open</button>
        <Modal isOpen={isOpen}>
          <div
            className={`${
              isOpen ? "absolute h-full overflow-y-scroll  w-full top-0 bg-black bg-opacity-50" : ""
            }`}
          >
          <div className="h-full  w-full">
            {/* <div className=" fixed h-full w-full top-0 "> */}
            <div className="absolute z-10 h-full  w-11/12 left-0 top-0 bottom-0 right-0 m-auto mt-40 ">
              <div className="p-4  bg-yellow-300 rounded">
                <div className="flex justify-between items-center mb-6 ">
                  <h1 className="text-xl font-semibold">Edit Profile</h1>
                  <button>
                    {" "}
                    <i
                      onClick={() => setOpen(false)}
                      className="fa w-8 h-8 border flex justify-center items-center rounded-full fa-times"
                    ></i>
                  </button>
                </div>
                <div className="grid mb-4">
                  <label className="text-sm text-left text-semibold">
                    Full name
                  </label>
                  <input
                    placeholder="John doe"
                    className="border-2 bg-gray-100 text-sm p-2 flex-1 focus:ring-4 rounded border-neutral-normal mt-2"
                    type="text"
                  />
                </div>
                <div className="grid mb-4">
                  <label className="text-sm text-left text-semibold">
                    Your bio
                  </label>
                  <textarea
                    placeholder="Your story..."
                    className="border-2 bg-gray-100  p-2 text-sm focus:ring-4 rounded border-neutral-normal mt-2"
                    type="text"
                    rows="5"
                  />
                </div>
                <div className="flex justify-end ">
                  <button className="border p-2 ">Save</button>
                </div>
              </div>
            </div>
          </div>
          </div>
        </Modal>

        <div className="relative">
          <i className="fa fa-edit absolute p-2 bg-white text-xs bottom-0 right-0 shadow rounded-full"></i>
          <img src={avatar} alt="avatar " />
        </div>
        <h1 className="text-2xl mt-3 font-semibold">Beatice Olawunmi</h1>
        <p className="mt-4 text-gray-700">
          Brand, Business &amp; Comms Whiz. Co-director, Startup Grind Lagos.
          Catalyst. Entrepreneur. Muse. I love to leave... See more
        </p>
        <div className="mt-4">
          <i className="fab shadow fa-twitter bg-gray-100 mr-2 rounded-full bg- p-3" />
          <i className="fab shadow fa-facebook bg-gray-100 mr-2 p-3 rounded-full" />
          <i className="fab shadow fa-dribbble bg-gray-100 mr-2 p-3 rounded-full" />
          <button>
            <i className=" fa fa-plus bg-gray-100 mr-2 p-3 rounded-full text-neutral-secondary"></i>
          </button>
        </div>
        <div className="flex items-center border bg-white shadow-lg w-3/4 justify-between p-4 mt-10 rounded-full">
          <i className="fa fa-icons"></i>
          <p className="text-gray-700 text-sm">My websites</p>
          <i className="fa fa-lock"></i>
        </div>
        <button className="flex mt-8 items-center bg-gray-200 p-4 px-4 rounded">
          <i className="fa fa-plus rounded-full"></i>
          <span className="text-sm font-semibold ml-2">Add other link</span>
        </button>
      </div>
    </div>
  );
}
