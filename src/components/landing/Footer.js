import React from "react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="px-6 pt-28 lg:pt-36  bg-textPrimaryColor ">
      <div className="flex items-center md:items-start  flex-col ">
        <div className="flex md:px-16 items-center flex-col border-b pb-20 lg:pb-36 border-opacity-30">
          <h1 className="text-3xl md:text-5xl lg:text-5xl lg:px-32 text-white text-center tracking-tighter  font-bold">
            Join thousands of businesses that trust weblinks to transform their
            store
          </h1>
          <button className="text-white px-10 lg:px-14 lg:py-6 lg:text-lg  font-semibold relative z-20 bg-buttonPrimary tracking-tight rounded-bl-full rounded-tl-full rounded-br-full py-5  mt-12">
            Try it for free now!
          </button>
          <p className="text-white  text-opacity-50 mt-4">
            No credit card required
          </p>
        </div>

        <div className="mt-14 md:px-8 lg:flex lg:flex-row-reverse lg:justify-start   md:mt-20">
          <div className="lg:flex lg:flex-col ">
            <span className="text-2xl md:text-3xl lg:text-2xl text-white font-black tracking-wide lg:tracking-wide">
              {" "}
              Weblinks
              <span className="text-buttonPrimary text-2xl  ml-0.5">.</span>
            </span>
            <p className="w-3/4 md:w-1/2 mt-3 md:text-lg text-white lg:w-full text-opacity-50">
              The modern retail platform for fast-moving brands
            </p>

            <div className="flex mt-5">
              <div className="bg-indigo-800 w-8 h-8 flex items-center justify-center rounded-full">
                <a href="#div  ">
                  <AiOutlineInstagram color="white" size={22} />
                </a>
              </div>
              <div className="bg-indigo-800  w-8 h-8 flex mx-3 items-center justify-center rounded-full">
                <a href="#div  ">
                  <AiOutlineTwitter color="white" size={22} />
                </a>
              </div>
              <div className="bg-indigo-800  w-8 h-8 flex items-center justify-center rounded-full">
                <a href="#div  ">
                  <FaTelegramPlane color="white" size={22} />
                </a>
              </div>
            </div>
          </div>

          <div className="mt-14 md:flex md:flex-row-reverse md:justify-between lg:justify-end lg:w-full  lg:mt-0 md:w-1/2">
            <div className="flex flex-col  lg:ml-32">
              <h1 className="text-xl lg:text-2xl mb-3 tracking-tighter text-white font-semibold">
                Account
              </h1>
              <a
                className="text-base mb-2 font-semibold text-white text-opacity-60"
                href="#div"
              >
                Log in
              </a>
              <a
                className="text-base font-semibold text-white text-opacity-60"
                href="#div"
              >
                Sign up
              </a>
            </div>

            <div className="flex flex-col mt-10 md:mt-0">
              <h1 className="text-xl lg:text-2xl mb-3 tracking-tighter text-white font-semibold">
                Pages
              </h1>
              <a
                className="text-base mb-2 font-semibold text-white text-opacity-60"
                href="#div"
              >
                Home
              </a>
              <a
                className="text-base mb-2 font-semibold text-white text-opacity-60"
                href="#div"
              >
                Pricing
              </a>
              <a
                className="text-base mb-2 font-semibold text-white text-opacity-60"
                href="#div"
              >
                Company
              </a>
              <a
                className="text-base mb-2 font-semibold text-white text-opacity-60"
                href="#div"
              >
                Blog
              </a>
            </div>
          </div>
        </div>
        <div className="mt-20 lg:px-8 py-10">
          <p className="text-white text-opacity-70">
            &copy; All rights reserved. Weblinks. Powered by{" "}
            <span className="font-semibold">React. facebook License info</span>
          </p>
        </div>
      </div>
    </div>
  );
}
