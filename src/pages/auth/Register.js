import React from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import "../landing/style.css";
export default function Register() {
  return (
    <div className="flex justify-center pt-8 lg:pt-20 ">
      <div className="inline-block w-full pt-10 max-w-xl p-6 md:px-10 py-12 my-8 overflow-hidden text-left align-middle transition-all lg:border transform bg-white card-shadow rounded-2xl">
        <h3 className="text-2xl text-textPrimaryColor lg:text-3xl text-center mb-6 font-semibold font-medium leading-6 text-gray-900">
          Register
        </h3>

        <div className="grid grid-cols-2 gap-20">
          <button
            style={{ background: "#fef0dd" }}
            className=" flex p-4 rounded-lg text-textPrimaryColor justify-center   font-medium"
          >
            <FcGoogle cl size={24} />
            Google
          </button>
          <button
            style={{ background: "#e5f7fe" }}
            className="bg-green-100 rounded-lg text-textPrimaryColor justify-center flex p-4 items-center font-medium"
          >
            <AiFillFacebook size={24} />
            Facebook
          </button>
        </div>
        <p className="text-center text-textPrimaryColor text-opacity-80 text-lg my-5">
          Dont have an account?
        </p>
        <div>
          <form className="grid grid-cols gap-3 ">
            <label htmlFor="username">
              <input
                type="text"
                id="username"
                className="w-full outline-none  p-3 rounded-lg"
                placeholder="Username"
                style={{ background: "#eff0f5" }}
              />
            </label>
            <label htmlFor="textbox">
              <input
                type="text"
                id="textbox"
                className="w-full outline-none  p-3 rounded-lg"
                placeholder="Email"
                style={{ background: "#eff0f5" }}
              />
            </label>
            <label htmlFor="passwordbox">
              <input
                type="password"
                id="passwordbox"
                className="w-full outline-none  p-3 rounded-lg "
                placeholder="Password"
                style={{ background: "#eff0f5" }}
              />
            </label>
          </form>
        </div>

        <div className="mt-4 mb-7">
          <button
            type="button"
            className="inline-flex w-full p-4 justify-center text-white  text-base font-medium  bg-textPrimaryColor border border-transparent rounded-bl-full rounded-tl-full rounded-br-full hover:bg-buttonPrimary  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          >
            Continue
          </button>
        </div>

        <p className="text-textPrimaryColor text-center text-xs px-10 ">
          By clicking the Continue button, you agree to the terms of service and
          privacy policy.
        </p>
      </div>
    </div>
  );
}
