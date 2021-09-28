import React from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../assets/logoicon.svg";
import google from "../assets/image 4google.png";
import facebook from "../assets/logos_facebook.png";

export default function Signin() {
  const history = useHistory();
  return (
    <div style={{ height: "100vh", background: "#F9F9F9" }}>
      <button
        onClick={() => history.goBack()}
        className="absolute top-3 left-10"
      >
        <i className="fas text-xl fa-arrow-left"></i>
      </button>
      <div className=" w-2/3 m-auto pt-20 flex flex-col items-center ">
        <div className="flex flex-col items-center">
          <img className="w-10" src={logo} alt="logo" />
          <h1 className="text-center font-semibold text-2xl mt-3">
            Sign in to Qwikker
          </h1>
        </div>
        <div>
          <div className="  rounded p-6 mt-4 bg-white shadow-lg">
            <div className="flex flex-col mb-4">
              <label className="text-sm">Username or email address</label>
              <input
                className="border-2 p-1 focus:ring-4 rounded border-neutral-normal mt-2"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <label className="text-sm">Password</label>
                <Link className="text-sm text-neutral-secondary">
                  Forgot Password?
                </Link>
              </div>
              <input
                className="border-2 p-1 focus:ring-4 rounded  border-neutral-normal  mt-2"
                type="text"
              />
            </div>
            <button className="border bg-neutral-normal text-white rounded p-2 text-sm w-full mt-6">
              Sign in
            </button>
          </div>
          <button className="text-sm w-full rounded mt-4 p-3">
            New to Qwikker?{" "}
            <Link to="/register" className="text-neutral-secondary">
              Create an account.
            </Link>
          </button>
          <p className="text-center mt-4">Or</p>
          <div className="flex mt-4 justify-center">
            <img className="mr-2" src={google} alt="google" />
            <img src={facebook} alt="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
}
