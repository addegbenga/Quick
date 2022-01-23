import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Footer from "../../components/landing/Footer";
import Navbar from "../../components/landing/Navbar";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    title: "ECOMMERCE BRANDS -",
    description: "How to choose the correct domain name for your business.",
    img: "/assets/qwikkerasset19.png",
    link: "Read Case Study",
  },
];
export default function Home() {
  // const [loginModalOpen, setLoginModalOpen] = useState(false);
  return (
    <>
    <Navbar/>
      {/* <Login isOpen={loginModalOpen} setIsOpen={setLoginModalOpen} /> */}
      <div
        className=" relative  flex pt-36 lg:pt-48 2xl:pt-80 items-center flex-col bg-bgPrimary  items-center"
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
          <Link to="login"> Try it for free now! </Link>
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
      <div style={{background:"#fafbfc"}} className="pt-40 md:pt-64 lg:pt-96 md:px-32 lg:px-0  ">
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
            <div
              key={ind}
              className="flex flex-col mb-24 items-center mt-14 lg:mt-20"
            >
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
      {/* <Footer /> */}
      {/* footer section */}
      <Footer/>
    </>
  );
}
