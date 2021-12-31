import React, { useEffect } from "react";
import { AiOutlineAlignRight } from "react-icons/ai";
import { gsap, Power1 } from "gsap/all";
import { Link } from "react-router-dom";

export default function Navbar() {
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
        <Link to="../login" className="mb-4" href="#div">
          Sign In
        </Link>
        <button className="text-white w-1/3  p-4 rounded-bl-full rounded-tl-full rounded-br-full bg-buttonPrimary text-sm">
          <Link to="../register"> Try it for free</Link>
        </button>
      </div>
    </div>
  );

  return (
    <>
      <NavMenu />
      <div
        className="fixed top-0 w-full border-b border-opacity-5 border-textPrimaryColor z-30"
        style={{ background: "#e5f7fe" }}
      >
        <header className="flex justify-between items-center md:px-12 2xl:w-5/6 2xl:m-auto lg:px-20 xl:px-32 lg:py-3  2xl:py-12 px-5 py-4">
          <span className="text-textPrimaryColor md:text-2xl   2xl:text-4xl text-xl font-bold tracking-tight">
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
            <button className="font-semibold">
              <Link to="../login"> Sign in</Link>
            </button>
            <button className="px-6 font-semibold py-3.5 bg-white ml-6 rounded-bl-full rounded-tl-full rounded-br-full">
              <Link to="../register"> Try it for free </Link>
            </button>
          </div>

          <div
            onClick={() => {
              tl.reversed() ? tl.play() : tl.reverse();
            }}
            className="md:hidden "
          >
            <AiOutlineAlignRight size={20} />
          </div>
        </header>
      </div>
    </>
  );
}
