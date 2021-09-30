import React, { Fragment } from "react";

import { Transition } from "@headlessui/react";
import { Dialog } from "@headlessui/react";
import youtube from "../assets/Youtube.svg";
import whatsapp from "../assets/WhatsApp.svg";
import wechat from "../assets/Wechat.svg";
import twitter from "../assets/Twitter.svg";
import tumblr from "../assets/Tumblr.svg";
import tiktok from "../assets/Tik Tok.svg";
import telegram from "../assets/Telegram.svg";
import spotify from "../assets/Spotify.svg";
import snapchat from "../assets/Snapchat.svg";
import slack from "../assets/Slack.svg";
import paypal from "../assets/PayPal.svg";
import lonkedin from "../assets/LinkedIN.svg";
import dribble from "../assets/Dribbble.svg";
import behance from "../assets/Behance.svg";
import github from "../assets/Github.svg";

const icons = [
  {
    name: "twitter",
    url: twitter,
    id: 1,
  },
  {
    name: "youtube",
    url: youtube,
    id: 2,
  },
  {
    name: "whatsapp",
    url: whatsapp,
    id: 3,
  },
  {
    name: "wechat",
    url: wechat,
    id: 4,
  },
  {
    name: "tumblr",
    url: tumblr,
    id: 5,
  },
  {
    name: "tiktok",
    url: tiktok,
    id: 6,
  },
  {
    name: "telegram",
    url: telegram,
    id: 7,
  },
  {
    name: "spotify",
    url: spotify,
    id: 8,
  },
  {
    name: "snapchat",
    url: snapchat,
    id: 9,
  },
  {
    name: "slack",
    url: slack,
    id: 10,
  },
  {
    name: "paypal",
    url: paypal,
    id: 11,
  },
  {
    name: "Linkedin",
    url: lonkedin,
    id: 12,
  },
  {
    name: "dribbble",
    url: dribble,
    id: 13,
  },
  {
    name: "Behance",
    url: behance,
    id: 14,
  },
  {
    name: "Behance",
    url: github,
    id: 15,
  },
];

export default function SocialModal({ isOpen, closeModal }) {
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
              <div className="flex justify-between pt-2 pb-4 mb-7 border-b items-center">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6  text-gray-900"
                >
                  Add your Social Links
                </Dialog.Title>
                <button onClick={closeModal}>
                  {" "}
                  <i className="fa fa-times" />
                </button>
              </div>
              <div className="flex flex-wrap pr-2">
                {icons.map((item) => (
                  <div className="p-3 bg-white  border mr-2  mb-2 rounded-full">
                    <img
                      className="h-5 w-5 object-fit  filter contrast-100"
                      src={item.url}
                      alt="icons"
                    />
                  </div>
                ))}
              </div>

              <div className="grid mt-5 mb-4">
                <label className="text-sm text-left text-semibold">
                  Enter url
                </label>
                <input
                  placeholder="https://github.com/addegbenga"
                  className="border-0 bg-gray-100 text-xs p-4   focus:ring-4 rounded mt-2"
                  type="text"
                />
              </div>
              <div className="mt-10 flex w-full">
                <button
                  type="button"
                  className="inline-flex w-full justify-center px-6 py-3 text-sm font-medium text-white bg-neutral-normal border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
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
