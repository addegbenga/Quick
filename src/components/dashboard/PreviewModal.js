import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import "./style.css"

export default function PreviewModal(props) {
  const profile = useSelector((state) => state.profile.profile);
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
                    className="bg-indigo-500 relative scrollbar overflow-y-auto   border-black  "
                  >
                    <div className="flex items-center flex-col text-sm mt-12">
                      <div className="h-24 w-24 rounded-full bg-red-200"></div>
                      <h1 className="mt-3 font-semibold text-white text-lg text-opacity-90">
                        @Drey442
                      </h1>
                      <p className="text-white text-base text-opacity-90">
                        I am a rock star
                      </p>
                    </div>

                    <div className=" w-11/12 m-auto mt-6">
                      {profile?.map((item, index) => (
                        <div key={item._id}>
                          <div className="bg-white rounded-full text-center p-5 mb-3">
                            <a
                              href={item.linkurl}
                              target="_blank"
                              rel="noreferrer"
                              className="text-sm border-0 text-black text-opacity-80"
                            >
                              {item.title}
                            </a>
                          </div>
                        </div>
                      ))}
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
