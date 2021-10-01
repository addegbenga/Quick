import React, { Fragment, useState } from "react";

import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";

export default function OtherLinkModal({ isOpen, closeModal }) {
  const [form, setFormdata] = useState({
    linkname: "",
    linkurl: "",
  });
  const handleFormChange = (e) => {
    setFormdata({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = () => {
    console.log(form.linkname);
  };

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
              <div className="flex justify-between pb-4 mb-6 border-b items-center">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-700"
                >
                  Add a new Link
                </Dialog.Title>
                <button onClick={closeModal}>
                  {" "}
                  <i className="fa fa-times" />
                </button>
              </div>

              <div className="grid mb-4">
                <label className="text-sm text-left text-semibold">
                  Link Name
                </label>
                <input
                  name="linkname"
                  value={form.linkname}
                  onChange={(e) => handleFormChange(e)}
                  placeholder="My Portfolio"
                  className="border-0 bg-gray-100 text-sm p-4   focus:ring-4 rounded mt-2"
                  type="text"
                />
              </div>
              <div className="grid mb-4">
                <label className="text-sm text-left text-semibold">
                  Link url
                </label>
                <input
                  value={form.linkurl}
                  name="linkurl"
                  onChange={(e) => handleFormChange(e)}
                  placeholder="https://myportfolio.com"
                  className="border-0 bg-gray-100 text-sm p-4  focus:ring-4 rounded mt-2"
                  type="text"
                />
              </div>
              <div className="grid place-items-center mb-4 bg-white border text-gray-700 rounded p-7">
                <p className="mb-3 text-center text-lg ">
                  Add a thumbnail
                </p>
                <label className="w-64 flex flex-col items-center px-4 py-6  rounded-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-neutral-secondary hover:text-white text-gray-600 ease-linear transition-all duration-150">
                  <i className="fas fa-cloud-upload-alt fa-2x"></i>
                  <span className="mt-2 text-sm">
                    Select a file
                  </span>
                  <input type="file" className="hidden" />
                </label>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  className="inline-flex justify-center px-6 py-2 text-sm font-medium text-white bg-neutral-normal border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                  onClick={handleFormSubmit}
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
