import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
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
        <span className="mt-5 mb-4 lg:mb-20  text-textPrimaryColor">
          No credit card required
        </span>
        <div className="-mb-16 px-6 overflow-hidden relative">
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
      <div className="mt-40 ">
        <h1
          style={{ letterSpacing: "-0.2rem" }}
          className="px-5 text-center text-4xl text-textPrimaryColor font-semibold"
        >
          The future of retail is in your hands
        </h1>
        <p className="mt-5 text-center text-textPrimaryColor text-opacity-80">
          Set up a website for your online orders. Create responsive,
          customizable pages that get you better customers, with absolute ease
        </p>

        <div>
          {data.map((item) => (
            <div className="flex flex-col mb-24 items-center mt-14">
              <img
                className=" w-72 shadow-lg card-shadow  rounded-3xl "
                src={item.img}
                alt="dem"
              />
              <h1 className="  text-customMediumFontMobile tracking-tighter px-6  text-center text-textPrimaryColor font-semibold mt-6">
                {item.header}
              </h1>
              <p className="px-5 text-textPrimaryColor text-opacity-80 text-center mt-3">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      {/* second section */}

      {/* third section */}

      <div className="flex flex-col items-center mt-36 mb-32">
        <img
          className="w-80 card-shadow rounded-2xl"
          src="/assets/qwikkerasset5.png"
          alt="asse"
        />
        <div className="px-6">
          <h1
            style={{ letterSpacing: "-0.2rem" }}
            className="text-4xl mt-14  text-textPrimaryColor   font-bold"
          >
            Easy to build, easy to manage.
          </h1>
          <p className="my-7 text-textPrimaryColor text-opacity-80">
            Weblink helps you grow your online business without any hassle. get
            a powerful set of tools to create and monitor stunning pages for
            your customers
          </p>
          <p className="my-7 font-italic text-textPrimaryColor text-opacity-80">
            "Weblinks helped me build a clean and proffesional website with zero
            troubles. highly recommend."
          </p>
          <span className="my-7 text-textPrimaryColor text-opacity-80">
            Sam Stephan, Product Designer at Leesa
          </span>
          <img className="w-28" src="/assets/qwikkerasset8.svg" alt="logo" />
        </div>
      </div>
      {/* third section */}
      <div className="px-4 py-24 mx-5 rounded-3xl relative overflow-hidden  bg-bgAccent">
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
          className="text-3xl relative z-10 text-textPrimaryColor   font-bold"
        >
          Why to choose weblinks ?
        </h1>
        <p className="relative z-10 pt-3 text-textPrimaryColor text-opacity-80 font-semibold tracking-tight">
          East question, answers below-
        </p>
        <div className="mt-24">
          {data2.map((item, index) => (
            <div key={index} className="mt-14">
              <figure className="bg-white rounded-bl-3xl rounded-tl-3xl rounded-br-3xl  inline-block p-4">
                <img className="w-10" src={item.img} alt="asset" />
              </figure>
              <h1 className="text-customMediumFontMobile tracking-tighter text-textPrimaryColor py-2 font-bold">
                {item.title}
              </h1>
              <p className="text-textPrimaryColor text-opacity-80">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="px-6 mt-28">
        <h1
          style={{ letterSpacing: "-0.2rem" }}
          className="text-4xl text-center px-10   text-textPrimaryColor   font-bold"
        >
          Build your websites your way.
        </h1>
        <p className="text-center mt-6 text-textPrimaryColor opacity-80">
          Create engaging, fast and smooth ecommerce pages your customers will
          rave about. Customize your site with a powerful suite of tools
        </p>

        <div>
          {data3.map((item, index) => (
            <div key={index} className="mt-16 mb-28">
              <figure>
                <img src={item.img} alt="asses" />
              </figure>
              <h1 style={{ color: "#4bc2f1" }} className="mt-8">
                {item.title}
              </h1>
              <p className="text-textPrimaryColor my-4">{item.description}</p>
              <img className="mb-8" src={item.logo} alt="logo" />
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
      <div>
        <h1>
          Join thousands of businesses that trust weblinks to transform their
          store
        </h1>

        <button>Try it for free now!</button>
        <span>No credit card required</span>

        <div>
          <h1>
            Weblinks<span>.</span>
          </h1>
          <p>The modern retail platform for fast-moving brands</p>
        </div>
      </div>
      {/* footer section */}
    </>
  );
}
