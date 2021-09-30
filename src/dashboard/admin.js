import React, { Fragment, useState, useRef, useEffect } from "react";
import avatar from "../assets/avatar.svg";
import Navbar from "./adminNav";
import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import SocialModal from "../modals/SocialModal";
import OtherLinkModal from "../modals/OtherLinkModal";
import AvatarModal from "../modals/AvatarModal";
export default function Admin() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSocialModal, setSocialModal] = useState(false);
  const [openOtherLinkModal, setOpenOtherLinkModal] = useState(false);
  const [openAvatar, setOpenAvatar] = useState(false);

  // modal functions for profile updating
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  // modal functions for social media updating
  function handleSocialModalClose() {
    setSocialModal(false);
  }

  function handleSocialModalOpen() {
    setSocialModal(true);
  }

  // functions for other links updating
  function handleOtherLinkModalOpen() {
    setOpenOtherLinkModal(true);
  }

  function handleOtherLinkModalClose() {
    setOpenOtherLinkModal(false);
  }

  //functions for avatar updating

  function handleAvatarModalOpen() {
    setOpenAvatar(true);
  }

  function handleAvatarModalClose() {
    setOpenAvatar(false);
  }
  return (
    <>
      <AvatarModal isOpen={openAvatar} closeModal={handleAvatarModalClose} />
      <SocialModal
        isOpen={openSocialModal}
        closeModal={handleSocialModalClose}
      />
      <OtherLinkModal
        isOpen={openOtherLinkModal}
        closeModal={handleOtherLinkModalClose}
      />
      <Navbar />
      <div className=" flex flex-col items-center text-center p-4 py-16 ">
        <>
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
        </>

        <div className="relative">
          <button className="bg-black h-7 w-7 flex justify-center items-center absolute bg-white text-xs bottom-0 right-0 shadow rounded-full " onClick={handleAvatarModalOpen}>
            {" "}
            <i className="fa fa-edit"></i>
          </button>
          <img src={avatar} alt="avatar " />
        </div>
        <h1 className="text-2xl mt-3 font-semibold">Beatice Olawunmi</h1>
        <p className="mt-4 text-gray-700">
          Brand, Business &amp; Comms Whiz. Co-director, Startup Grind Lagos.
          Catalyst. Entrepreneur. Muse. I love to leave... See more{" "}
          <button
            type="button"
            onClick={openModal}
            className="px-3 py-2 text-sm font-medium text-white "
          >
            <i className="fas text-sm text-gray-400  fa-pen"></i>
          </button>
        </p>
        <div className="mt-4">
          <i className="fab shadow fa-twitter bg-gray-100 mr-2 rounded-full bg- p-3" />
          <i className="fab shadow fa-facebook bg-gray-100 mr-2 p-3 rounded-full" />
          <i className="fab shadow fa-dribbble bg-gray-100 mr-2 p-3 rounded-full" />
          <button onClick={handleSocialModalOpen}>
            <i className=" fa fa-plus bg-gray-100 mr-2 p-3 rounded-full text-neutral-secondary"></i>
          </button>
        </div>
        <div className="flex items-center border bg-white shadow-lg w-3/4 justify-between p-4 mt-10 rounded-full">
          <i className="fa fa-icons"></i>
          <p className="text-gray-700 text-sm">My websites</p>
          <i className="fa fa-lock"></i>
        </div>
        <button
          onClick={handleOtherLinkModalOpen}
          className="flex mt-8 items-center bg-gray-100 text-gray-500 border border-transparent px-4 p-4 rounded-md hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-500"
        >
          <i className="fa fa-plus rounded-full"></i>
          <span className="text-sm font-semibold ml-2">Add other link</span>
        </button>
      </div>
    </>
  );
}
