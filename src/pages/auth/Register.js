import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { AiFillFacebook } from "react-icons/ai";
import {registerUser} from "../../actions/authActions"
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "../landing/style.css";
export default function Register() {
  const loading = useSelector((state) => state.auth.apiloading);
  const dispatch = useDispatch();
  const [form, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(form))
  };
  return (
    <>
  
    <div className="flex justify-center pt-6 lg:pt-14 min-h-screen items-center  ">
      <div className="inline-block w-full pt-10 max-w-xl p-6 md:px-10 py-12 my-8 overflow-hidden text-left align-middle transition-all lg:border transform bg-white lg:card-shadow rounded-2xl">
        <h3 className="text-2xl tracking-tighter border-b pb-8 mb-10 border-blue-500 border-opacity-10 lg:pb-0 lg:border-0 text-textPrimaryColor lg:text-4xl text-center mb-6 font-semibold font-medium leading-6 text-gray-900">
          Create your Account
        </h3>

        {/* <div className="grid grid-cols-2 gap-5 lg:gap-10">
          <button
            style={{ background: "#fef0dd" }}
            className=" flex p-4 rounded-lg text-textPrimaryColor justify-center   font-medium"
          >
            <FcGoogle size={24} />
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
        <p className="text-center text-textPrimaryColor text-sm text-opacity-80 text-lg my-4 lg:my-5">
          Dont have an account?
        </p> */}
        <div>
          <form onSubmit={handleSubmit} className="grid grid-cols gap-3 ">
            <input
              type="text"
              id="username"
              required
              name="username"
              value={form.username}
              onChange={(e) => handleChange(e)}
              className="w-full outline-none text-sm py-5 lg:py-4  p-3 rounded-lg"
              placeholder="Enter your username"
              style={{ background: "#eff0f5" }}
            />

            <input
              type="text"
              name="email"
              onChange={(e) => handleChange(e)}
              value={form.email}
              required
              id="textbox"
              className="w-full outline-none text-sm py-5 lg:py-4  p-3 rounded-lg"
              placeholder="Enter your email"
              style={{ background: "#eff0f5" }}
            />

            <input
              type="password"
              required
              value={form.password}
              name="password"
              onChange={(e) => handleChange(e)}
              id="passwordbox"
              className="w-full text-sm py-5 lg:py-4  outline-none  p-3 rounded-lg "
              placeholder="Enter your password"
              style={{ background: "#eff0f5" }}
            />

            <div className="mt-4 mb-7">
              <button
                type="submit"
                className="inline-flex w-full p-4 justify-center text-white  text-base font-medium  bg-textPrimaryColor border border-transparent rounded-bl-full rounded-tl-full rounded-br-full hover:bg-buttonPrimary  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
              >
              {loading ? (
                  <>
                    <span>Continue</span>
                    <img src="/assets/loading.svg " className="w-8" alt="loading" />
                  </>
                ) : (
                  <span>Continue</span>
                )}
              </button>
            </div>
          </form>
        </div>

        <p className="text-textPrimaryColor text-center text-xs px-10 ">
          By clicking the Continue button, you agree to the terms of service and
          privacy policy.
        </p>
      </div>
    </div>

    </>
  );
}
