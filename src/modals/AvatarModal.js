import React, { Fragment } from "react";

import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";

export default function AvatarModal({ isOpen, closeModal }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
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
            <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-lg">
              <Dialog.Title
                as="h3"
                className="text-lg font-medium leading-6 pb-4 text-gray-900"
              >
                Edit your Profile
              </Dialog.Title>

              <div className="grid mb-4">
                <label className="text-sm text-left text-semibold">
                  Full name
                </label>
                <input
                  placeholder="John doe"
                  className="border-0 bg-gray-100 text-sm p-4   focus:ring-4 rounded mt-2"
                  type="text"
                />
              </div>
              <div className="grid mb-4">
                <label className="text-sm text-left text-semibold">
                  Enter bio
                </label>
                <textarea
                  rows="8"
                  placeholder="Enter your bio"
                  className="border-0 bg-gray-100 text-sm p-4  focus:ring-4 rounded mt-2"
                  type="text"
                />
              </div>

              <div className="mt-4 flex justify-end">
                <button
                  type="button"
                  className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-neutral-normal border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={closeModal}
                >
                  Save
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
