import React from "react";
import heroimage from "../assets/hero.svg";
import about1 from "../assets/Groupilllu1.svg";
import about2 from "../assets/Groupillu2.svg";
import about3 from "../assets/Frameillu3.svg";
import img1 from "../assets/img1.png";
// import img2 from "../assets/img2.png";
// import img3 from "../assets/img3.png";
import brandimg1 from "../assets/image 2brand1.svg";
import brandimg2 from "../assets/image 3brand2.svg";
import Navbar from "../nav/navbar";
import "./style.css";
export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="mt-36 mb-6 px-6 md:relative md:flex lg:w-11/12 lg:m-auto lg:mt-36 xl:w-10/12 xl:m-auto  xl:mt-36">
        <div className="text-center flex flex-col justify-center items-center md:block md:text-left md:mt-20 ">
          <div className="text-3xl md:text-4xl font-bold ">
            <h1> Sharing your profile </h1>
            <h1> is now easier than ever.</h1>
          </div>
          <div className="mt-7">
            <p className="md:w-1/2">
              Qwikker lets creatives share their social links easily we also
              provide you with a digital card that is customizable.
            </p>
          </div>
          <button className="bg-neutral-normal mt-7 font-semibold text-white px-8 py-3 rounded">
            Get started
          </button>
        </div>
        <img
          className="md:absolute mt-4 md:mt-0 pr-5 md:w-1/2 md:right-0"
          src={heroimage}
          alt="hero"
        />
      </div>
      {/* about section */}
      <div className="px-7 md:mt-28 text-center">
        <div className="flex flex-col md:flex-row-reverse items-center rounded mb-24">
          <div className="md:flex md:flex-col items-center text-center  md:pl-8">
            <h1 className="text-2xl font-semibold">Connect with Clients</h1>
            <p className="md:w-2/3 text-sm mt-2">
              With Qwikker card you can share your profile with clients reach
              your target audience and close more deals anywhere anytime.
            </p>
          </div>
          <div className="mt-6 bg-white  border rounded shadow-lg  p-8">
            <img className="w-72" src={about1} alt="about" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row rounded items-center mb-24">
          <div className="md:flex md:flex-col items-center   md:pr-8">
            <h1 className="text-2xl font-semibold">Easy to Manage</h1>
            <p className="md:w-2/3 text-sm mt-2">
              Use our simple drag-and-drop editor to Qwikker all your important
              content in seconds. No hosting, domain or coding required.
            </p>
          </div>
          <div className="mt-6 bg-white shadow-xl border shadow-lg rounded p-8">
            <img className="w-72" src={about2} alt="about" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse rounded items-center mb-24">
          <div className="md:flex md:flex-col items-center  md:pl-8">
            <h1 className="text-2xl font-semibold">Grow your business</h1>
            <p className="md:w-2/3 text-sm mt-2">
              Grow your business Qwikker card provides all the tools you need to
              build, grow and monetize your business in the simplest way
              possible.
            </p>
          </div>
          <div className="mt-6 bg-white shadow-lg border rounded p-8">
            <img className="w-72" src={about3} alt="about" />
          </div>
        </div>
      </div>

      {/* get your card now */}
      <div className="bg-neutral-normal text-center md:text-left py-20 px-4 ">
        <div className="md:flex md:items-center md:justify-between">
          <div>
            <h1 className="text-2xl pb-2 text-white">
              Get your Qwikker card today
            </h1>
            <p className="text-gray-300 md:w-2/3 text-sm">
              Share your socials, websites and contact info with just ONE TAP on
              your Qwikker card
            </p>
          </div>

          <button className="p-4 px-4 text-sm rounded md:px-4 text-black mt-6 bg-white">
            Get started
          </button>
        </div>
      </div>
      {/* 
      testmonials section */}

      <div className="p-4 mt-10 ">
        <h1 className="mb-8 font-semibold text-2xl testimonial">
          Testimonials
        </h1>
        <div>
          <div className="shadow-xl">
            <img
              className="w-full h-42 object-cover"
              src={img1}
              alt="reviews"
            />
            <div className="px-4 py-6 flex flex-col  ">
              <p className="text-center text-sm">
                "I love Qwikker because it helps me create a long lasting
                impression with a cool card while being eco-friendly. Major
                props to the Qwikker team, I can't wait for the future Updates
              </p>
              <h1 className="ml-auto pt-2 text-lg">-Bimpe</h1>
            </div>
          </div>
        </div>
      </div>

      {/* brands section */}
      <div className="my-20 font-semibold p-4">
        <h1 className="text-2xl mb-6 brands">Trusted Brands</h1>
        <div className="flex">
          <img className="w-24 mr-6" src={brandimg1} alt="brands" />
          <img className="w-24" src={brandimg2} alt="brands" />
        </div>
      </div>
      {/* 
      footer section */}

      <div className="bg-neutral-normal py-10 pb-20 flex justify-around">
        <div>
          <h1 className="text-white font-semibold">General</h1>
          <ul className="text-gray-100 text-sm">
            <li>Home</li>
            <li>Sign Up</li>
            <li>Sign in</li>
            <li>Contact us</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white font-semibold">Community</h1>
          <ul className="text-gray-100 text-sm">
            <li>Testimonials</li>
            <li>Instagram</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div>
          <h1 className="text-white font-semibold">More</h1>
          <ul className="text-gray-100 text-sm">
            <li>Privacy</li>
            <li>Terms &amp; condition</li>
          </ul>
        </div>
      </div>
    </>
  );
}
