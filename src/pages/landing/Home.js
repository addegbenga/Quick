import React from "react";
import { FaLongArrowAltRight, FaTelegramPlane } from "react-icons/fa";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import "./style.css";
const data = [
  {
    img: "/assets/qwikkerasset2.png",
    header: "Create beautiful pages with zero effort",
    description:
      "No need to learn how to code. No need to learn design. Publish engaing, interactive sites",
  },
  {
    img: "/assets/qwikkerasset3.png",
    header: "Adjust layouts and content on the go",
    description:
      "Selects Layouts that work smoothly across devices. Customize colors, themes, and cocntent easily",
  },
  {
    img: "/assets/qwikkerasset4.png",
    header: "Reach more customers and boost sales",
    description:
      "grow your business with an online store that lets you sell to anyone, anywhere. make your small business global",
  },
];

const data2 = [
  {
    img: "/assets/qwikkerasset10.svg",
    title: "Boost revenue easily",
    description:
      "Build storefronts that customers return to Get insights on what your customer love. and grow your business",
  },
  {
    img: "/assets/qwikkerasset11.svg",
    title: "Drive more traffic to your site",
    description:
      "Get better SEO strategies, find your target customers, and get more engagement with a professional site.",
  },
  {
    img: "/assets/qwikkerasset12.svg",
    title: "We've got your back",
    description:
      "Our world-class 24/7support will always be there to help you solve any issue, at any time, on any day",
  },
];

const data3 = [
  {
    img: "/assets/qwikkerasset20.png",
    title: "ECOMMERCE BRANDS –",
    description:
      "10 inexpensive ways in which FrittX boosted their ranking on Google.",
    logo: "/assets/qwikkerasset8.svg",
    link: "Read Case Study",
  },
  {
    logo: "/assets/qwikkerasset16.svg",
    title: "ECOMMERCE BRANDS –",
    description: "How to choose the correct domain name for your business.",
    img: "/assets/qwikkerasset19.png",
    link: "Read Case Study",
  },
];
export default function Home() {
  return (
    <>
      <div
        className=" relative  flex pt-24 2xl:pt-40 items-center flex-col bg-bgPrimary  items-center"
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
        <span className="mt-5 mb-4 md:mb-10 lg:mb-20  text-textPrimaryColor">
          No credit card required
        </span>
        <div className="-mb-16 md:-mb-32 lg:-mb-56 px-6 overflow-hidden relative">
          <img
            src="/assets/qwikkerasset1.png "
            className="relative z-10"
            alt="demo"
          />
          <img
            className="absolute top-28 w-56 -right-3"
            src="/assets/qwikkerasset17.png"
            alt="altdd"
          />
        </div>
      </div>
      {/* second section */}
      <div className="mt-40 md:mt-64 lg:mt-96 md:px-32 lg:px-0  ">
        <h1
          style={{ letterSpacing: "-0.2rem" }}
          className="px-5 text-center text-4xl md:text-5xl lg:text-5xl xl:text-6xl text-textPrimaryColor font-semibold"
        >
          The future of retail is in your hands
        </h1>
        <p className="mt-5 text-center xl:text-xl xl:px-72 text-textPrimaryColor lg:px-48 text-opacity-80">
          Set up a website for your online orders. Create responsive,
          customizable pages that get you better customers, with absolute ease
        </p>

        <div className="md:px-10 lg:px-0 lg:grid lg:grid-cols-3 lg:px-20 lg:gap-28">
          {data.map((item, ind) => (
            <div key={ind} className="flex flex-col mb-24 items-center mt-14 lg:mt-20">
              <img
                className=" w-72 lg:w-full  shadow-lg card-shadow  rounded-3xl "
                src={item.img}
                alt="dem"
              />
              <h1 className="  text-customMediumFontMobile xl:text-2xl  tracking-tighter lg:px-0 px-6 lg:text-left  text-center text-textPrimaryColor font-semibold mt-6">
                {item.header}
              </h1>
              <p className="px-5 lg:px-0 text-textPrimaryColor text-opacity-80 lg:text-left  text-center mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* second section */}

      {/* third section */}

      <div className="flex flex-col items-center mt-36 lg:mt-20 mb-32 lg:grid lg:grid-cols-2 lg:gap-10 lg:px-14">
        <img
          className="w-80 md:w-3/5 lg:w-3/4 card-shadow rounded-2xl"
          src="/assets/qwikkerasset5.png"
          alt="asse"
        />
        <div className="px-6 md:px-20 lg:px-0">
          <h1
            style={{ letterSpacing: "-0.2rem" }}
            className="text-4xl md:text-5xl mt-14 md:w-3/4 lg:w-full   text-textPrimaryColor   font-bold"
          >
            Easy to build, easy to manage.
          </h1>
          <p className="my-7 border-b pb-5 border-dashed md:text-lg text-textPrimaryColor text-opacity-80">
            Weblink helps you grow your online business without any hassle. get
            a powerful set of tools to create and monitor stunning pages for
            your customers
          </p>
          <p className="my-7 italic text-textPrimaryColor text-opacity-80">
            "Weblinks helped me build a clean and proffesional website with zero
            troubles. highly recommend."
          </p>
          <span className="my-7 text-textPrimaryColor ">
            Sam Stephan, Product Designer at Leesa
          </span>
          <img
            className="w-28 mt-3"
            src="/assets/qwikkerasset8.svg"
            alt="logo"
          />
        </div>
      </div>
      {/* third section */}
      <div className="px-4 py-24 mx-5 md:mx-16 rounded-3xl relative overflow-hidden    bg-bgAccent">
        <div className="lg:grid lg:grid-cols-2 w-11/12 lg:m-auto  relative  ">
          <img
            className="absolute w-48 left-0 top-6"
            src="/assets/qwikkerasset9.png"
            alt="asset"
          />
          <img
            className="absolute w-48 right-0 -bottom-14"
            src="/assets/qwikkerasset13.png"
            alt="asset"
          />
          <h1
            style={{ letterSpacing: "-0.2rem" }}
            className="text-3xl relative z-10 md:text-5xl lg:text-6xl lg:px-0  text-textPrimaryColor   font-bold"
          >
            Why to choose weblinks ?
          </h1>
          <p className="relative z-10 lg:hidden pt-3 md:text-lg text-textPrimaryColor text-opacity-80 font-semibold tracking-tight">
            East question, answers below-
          </p>
          <div className="mt-24 lg:mt-0 md:px-20 lg:px-0 lg:flex lg:flex-col   ">
            {data2.map((item, index) => (
              <div
                key={index}
                className={` ${
                  index === 0
                    ? "lg:absolute lg:left-0 lg:bottom-4"
                    : "lg:static lg:mb-10 "
                } mt-14 lg:px-0 lg:mt-0`}
              >
                <figure className="bg-white rounded-bl-3xl rounded-tl-3xl rounded-br-3xl relative z-10  inline-block p-4">
                  <img className="w-10 md:w-14" src={item.img} alt="asset" />
                </figure>
                <h1 className="text-customMediumFontMobile md:text-3xl tracking-tighter text-textPrimaryColor py-2 font-bold">
                  {item.title}
                </h1>
                <p
                  className={`${
                    index === 0 ? "lg:w-1/2" : ""
                  } text-textPrimaryColor md:text-lg relative z-10  text-opacity-8`}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 lg:px-0 md:px-20 mt-28 lg:mt-40 lg:flex lg:flex-col lg:items-center lg:justify-center">
        <h1
          style={{ letterSpacing: "-0.2rem" }}
          className="text-3xl md:text-5xl lg:text-6xl text-center px-10  lg:w-3/5 lg:m-auto xl:w-full  text-textPrimaryColor   font-bold"
        >
          Build your websites your way.
        </h1>
        <p className="text-center lg:px-10 lg:text-lg lg:w-3/5 xl:text-xl lg:m-auto lg:mt-6 mt-6 text-textPrimaryColor opacity-80">
          Create engaging, fast and smooth ecommerce pages your customers will
          rave about. Customize your site with a powerful suite of tools
        </p>

        <div className="md:px-28 lg:w-10/12 lg:m-auto    lg:px-0  lg:space-x-12 lg:flex lg:justify-center">
          {data3.map((item, index) => (
            <div
              key={index}
              className={`${
                index === 1 ? "lg:mt-32" : ""
              } mt-16  lg:w-imageWidthLg mb-28`}
            >
              <figure className="w-full">
                <img className="lg:w-imageWidthLg" src={item.img} alt="asses" />
              </figure>
              <h1 style={{ color: "#4bc2f1" }} className="mt-8">
                {item.title}
              </h1>
              <p className="text-textPrimaryColor lg:text-xl  my-4">
                {item.description}
              </p>

              <img className="mb-8 " src={item.logo} alt="logo" />
              <div className="flex items-center">
                <a className="text-textPrimaryColor text-lg" href="#div">
                  {item.link}
                </a>
                <div className="ml-2 text-textPrimaryColor">
                  <FaLongArrowAltRight size={20} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* footer section */}
      <div className="px-6 pt-28 lg:pt-36  bg-textPrimaryColor ">
        <div className="flex items-center md:items-start  flex-col ">
          <div className="flex md:px-16 items-center flex-col border-b pb-20 lg:pb-36 border-opacity-30">
            <h1 className="text-3xl md:text-5xl lg:text-6xl text-white text-center tracking-tighter  font-bold">
              Join thousands of businesses that trust weblinks to transform
              their store
            </h1>

            <button className="text-white px-10 lg:px-14 lg:py-6 lg:text-lg  font-semibold relative z-20 bg-buttonPrimary tracking-tight rounded-bl-full rounded-tl-full rounded-br-full py-5  mt-12">
              Try it for free now!
            </button>
            <p className="text-white  text-opacity-50 mt-4">
              No credit card required
            </p>
          </div>

          <div className="mt-10 md:px-8 lg:flex lg:flex-row-reverse lg:justify-start   md:mt-20">
            <div className="lg:flex lg:flex-col ">
              <span className="text-2xl md:text-3xl lg:text-2xl text-white font-black tracking-tight lg:tracking-wide">
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
          <div className="mt-24 px-8 py-10">
            <p className="text-white text-opacity-70">
              &copy; All rights reserved. Weblinks. Powered by{" "}
              <span className="font-semibold">
                React. facebook License info
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* footer section */}
    </>
  );
}
