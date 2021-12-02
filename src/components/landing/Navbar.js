import React, { useState, useEffect } from "react";
import {RiBarChartLine} from "react-icons/ri"
import Login from "../auth/Login";
import Register from "../auth/Register";
import { gsap, Power1 } from "gsap/all";

export default function Navbar() {
  const [loginOpenModal, setLoginOpenModal] = useState(false);

  const [registerOpenModal, setRegisterOpenModal] = useState(false);

  let tl = gsap.timeline({
    paused: true,
    reversed: true,
  });

  const toggleTimelineFunc = () => {
    tl.fromTo(
      ".nav-show",
      { yPercent: "-100", ease: Power1.easeInOut, duration: 0.2 },
      { yPercent: "", autoAlpha: 1, ease: Power1.easeInOut, duration: 0.2 }
    );
  };
  useEffect(() => {
    toggleTimelineFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const NavMenu = () => (
    <div
      style={{ marginTop: "4rem" }}
      className="
       lg:hidden bg-white transform nav-show opacity-0   transition  z-30 py-10 px-5 fixed w-full"
    >
      <div className="flex flex-col text-textPrimaryColor">
        <a className="mb-4" href="#div">
          Pricing
        </a>
        <a className="mb-4" href="#div">
          Company
        </a>
        <a className="mb-4" href="#div">
          Blog
        </a>
        <a className="mb-4" href="#div">
          Sign In
        </a>
        <button className="text-white w-1/3  p-4 rounded-bl-full rounded-tl-full rounded-br-full bg-buttonPrimary text-sm">
          Try it for free
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Login isOpen={loginOpenModal} setIsOpen={setLoginOpenModal} />
      <Register isOpen={registerOpenModal} setIsOpen={setRegisterOpenModal} />
      <NavMenu />
      <div
        className="fixed top-0 w-full border-b border-opacity-5 border-textPrimaryColor z-30"
        style={{ background: "#e5f7fe" }}
      >
        <header className="flex justify-between items-center md:px-12 2xl:w-5/6 2xl:m-auto lg:px-20 xl:px-32 lg:py-6  2xl:py-12 px-5 py-4">
          <span className="text-textPrimaryColor md:text-3xl  2xl:text-4xl text-xl font-bold tracking-tight">
            {" "}
            {/* <img src="/assets/logoicon.svg" alt="logo"/> */}
            {/* <svg
              width="25"
              height="25"
              viewBox="0 0 174 173"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M149.781 143.49L130.046 123.915L94.5873 88.6172C93.1433 87.1731 91.0574 86.2104 88.9716 86.2104H61.0539C59.2889 86.3709 57.8449 87.8149 58.0054 89.5798C58.0054 90.3821 58.3263 91.0239 58.8076 91.5052L107.423 140.281L128.121 160.979L136.624 169.482C136.945 169.803 137.266 169.964 137.748 169.964H172.244C173.206 169.964 173.848 169.322 173.848 168.359C173.848 167.878 173.688 167.557 173.367 167.236L149.781 143.49Z"
                fill="#FF6F3D"
              />
              <path
                d="M82.2335 0.0508087C34.7411 2.13662 -2.00122 42.2484 0.084588 89.7407C2.1704 137.233 42.2822 173.975 89.7745 172.05C94.9088 171.89 100.043 171.087 105.017 169.964C109.67 168.841 114.162 167.558 118.494 165.632C119.297 165.311 119.618 164.349 119.297 163.546C119.136 163.386 119.136 163.225 118.976 163.065L99.4013 143.49C99.0804 143.17 98.4386 143.009 97.9573 143.009C66.5097 149.587 35.5434 129.532 28.9651 98.0839C23.9912 74.3378 34.0994 49.9498 54.6366 36.9536C64.9052 30.3753 76.9387 27.3268 89.1327 27.9686C118.655 29.7335 142.241 53.3192 144.006 82.681C144.647 94.3937 141.759 106.106 135.662 116.054C135.341 116.696 135.341 117.498 135.823 117.979L153.632 135.629C154.274 136.27 155.237 136.27 155.879 135.629L156.039 135.468C183.315 96.6399 174.009 42.8902 135.181 15.4537C119.618 4.86422 101.166 -0.590979 82.2335 0.0508087Z"
                fill="#151522"
              />
            </svg> */}
            Qwikker
            <span className="text-buttonPrimary text-2xl 2xl:text-4xl ml-0.5">
              .
            </span>
          </span>

          <div className="hidden lg:block text-textPrimaryColor">
            <a href="#div">Pricing</a>
            <a className="mx-12" href="#div">
              Company
            </a>
            <a href="#div">Blog</a>
          </div>
          <div className="hidden lg:block text-textPrimaryColor">
            <button
              onClick={() => setLoginOpenModal(true)}
              className="font-semibold"
            >
              Sign in
            </button>
            <button
              onClick={() => setRegisterOpenModal(true)}
              className="px-6 font-semibold py-3.5 bg-white ml-6 rounded-bl-full rounded-tl-full rounded-br-full"
            >
              Try it for free
            </button>
          </div>

          <div
            onClick={() => {
              tl.reversed() ? tl.play() : tl.reverse();
            }}
            className="md:hidden transform rotate-90"
          >
            <RiBarChartLine size={20} />
          </div>
        </header>
      </div>
    </>
  );
}
