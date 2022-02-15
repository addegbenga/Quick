import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaTimes, FaLock } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./style.css";

export default function PreviewModal(props) {
  const profile = useSelector((state) => state.profile.profile);
  const user = useSelector((state) => state.auth.user);
  return (
    <>
      <Transition appear show={props.isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 lg:hidden overflow-y-auto"
          onClose={props.closeModal}
        >
          <div className="min-h-screen  text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed bg-black bg-opacity-80 inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full h-screen max-w-md p-1 mb-10   text-left align-middle transition-all transform  shadow-xl rounded-2xl">
                <div>
                  <div
                    style={{
                      borderRadius: "4.3rem",
                      height: "100vh",
                      borderWidth: "1.3rem",
                    }}
                    className="bg-indigo-700 relative scrollbar overflow-y-auto   border-black  "
                  >
                    <div className="flex items-center flex-col text-sm mt-12">
                      <div className="h-24 w-24 rounded-full ">
                        <img src={user.avatarUrl} alt="avatar" />
                      </div>
                      <h1 className="mt-3 font-bold text-white text-lg text-opacity-90">
                        {user.username}
                      </h1>
                      <p className="text-white text-base font-medium text-opacity-90">
                        {user.bio}
                      </p>
                    </div>

                    <div className=" w-11/12 m-auto mt-6">
                      {profile?.map((item) =>
                        item.published ? (
                          <div key={item._id}>
                            <div className="bg-white overflow-y-hidden h-14 rounded-full text-center px-3  flex justify-between items-center mb-3">
                              {item.linkAvatar ? (
                                <img
                                  className="h-7 w-7 rounded"
                                  src={item.linkAvatar}
                                  alt="icn"
                                />
                              ) : (
                                <div className="h-5 w-5"></div>
                              )}
                              <a
                                href={item.linkurl}
                                target="_blank"
                                rel="noreferrer"
                                className=" text-black text-opacity-80"
                              >
                                {item.title}
                              </a>
                              <FaLock size={14} />
                            </div>
                          </div>
                        ) : null
                      )}
                    </div>
                    <div className="absolute bottom-6 flex items-center   w-full  justify-center">
                      <button
                        onClick={props.closeModal}
                        className=" bg-gray-300 p-4 rounded-full"
                      >
                        <FaTimes />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
