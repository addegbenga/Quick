import React, { Fragment, useState, useRef, useEffect } from "react";
import avatar from "../assets/avatar.svg";
import Navbar from "./adminNav";
import SocialModal from "../modals/SocialModal";
import OtherLinkModal from "../modals/OtherLinkModal";
import AvatarModal from "../modals/AvatarModal";
import AboutModal from "../modals/AboutModal";
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
      <AboutModal isOpen={isOpen} closeModal={closeModal} />
      <Navbar />
      <div className=" flex flex-col items-center text-center p-4 py-16 ">
        <div className="relative">
          <button
            className="bg-black h-7 w-7 flex justify-center items-center absolute bg-white text-xs bottom-0 right-0 shadow rounded-full "
            onClick={handleAvatarModalOpen}
          >
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
