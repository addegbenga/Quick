import React from "react";

export default function Home() {
  return (
    <div
      className="px-5 relative flex pt-28 2xl:pt-40 items-center flex-col bg-bgPrimary  items-center"
      style={{ height: "100%", minHeight: "70vh" }}
    >
      <img
        className="absolute top-26 w-56 -left-10 "
        src="/assets/qwikkerasset17.png"
        alt="asset"
      />
      <h1
        style={{ letterSpacing: "-0.2rem" }}
        className=" text-customHeaderFontMobile md:text-5xl lg:text-7xl 2xl:text-8xl 2xl:w-3/4 2xl:leading-12 lg:px-20 xl:px-64 md:px-10 leading-10  relative z-20 text-textPrimaryColor font-black text-center"
      >
        The modern retail platform for fast-moving brands.
      </h1>

      <button className="text-white 2xl:text-lg relative z-20 bg-buttonPrimary text-base font-semibold tracking-tight rounded-bl-full rounded-tl-full rounded-br-full xl:px-14 2xl:px-20 xl:py-6  mt-8 2xl:mt-8 px-12 md:py-5 py-6">
        Try it for free now!
      </button>
      <span className="mt-5 mb-4  text-textPrimaryColor">
        No credit card required
      </span>
      <div className="-mb-16">
        <img src="/assets/qwikkerasset1.png" alt="demo" />
      </div>
    </div>
  );
}
