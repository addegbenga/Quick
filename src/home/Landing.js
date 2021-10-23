import React from "react";
import Navbar from "../nav/navbar";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { IoRocketOutline } from "react-icons/io5";
import { BsDashLg } from "react-icons/bs";
const data = [
  {
    title: "Create An Account",
    icon: <MdOutlineManageAccounts color="#FF9C08" size={100} />,
    details:
      "Register an account with your unique username or login with google instantly.",
  },
  {
    title: "Setup your profile",
    icon: (
      <AiOutlineProfile
        style={{ color: "rgba(65, 133, 68, 0.87)" }}
        size={100}
      />
    ),
    details:
      "Setup your profile in no time by adding your social links and a profile picture you are good to go.",
  },
  {
    title: "Share your first link",
    icon: <IoRocketOutline color="#5351B1" size={100} />,
    details:
      "Start sharing your first custom links to friends and clients once you verify you account on a single click.",
  },
];
export default function Landing() {
  return (
    <>
      <Navbar />
      <div className="">
        <div className="mt-44 flex items-center flex-col text-center md:text-left">
          <div className="flex flex-col items-center md:justify-between md:items-start md:w-4/5 md:flex-row">
            <div className="md:w-6/12 ">
              <h1
                style={{ fontSize: "40px" }}
                className="font-bold px-8 md:px-0 md:mb-5 leading-10 mb-2 opacity-90"
              >
                Keep your links organized{" "}
              </h1>
              <p className="p-4  md:p-0 text-md mb-4 font-medium  text-gray-700">
                Qwikker lets you have your social links all in one place for
                easy access and let's you reach more audience easily.
              </p>
              <button className="px-5 mb-4 rounded py-3 text-sm bg-blue-800 text-white">
                Get started ⚡️
              </button>
            </div>

            <div className="mt-4 md:-mt-14">
              <img
                style={{ width: "20rem", height: "550px", objectFit: "cover" }}
                src="/homemockup.svg"
                alt="hero"
              />
            </div>
          </div>

          {/* how it works section */}
          <div className="mt-20 md:mb-22 bg-white w-full md:-mt-48 md:pt-20">
            <div className="mb-16 md:mb-4 md:flex md:flex-col md:items-center">
              <h1
                style={{ fontSize: "23px" }}
                className=" font-bold mb-3 opacity-75"
              >
                How it works
              </h1>
              <p className="font-medium md:w-3/5 md:text-center text-md px-5 md:px-0 text-gray-700">
                Get your account up and running following this simple step no
                long registration process you should be set in minutes.
              </p>
            </div>
            <div className="mb-20 md:mb-24 md:flex md:w-10/12 md:m-auto">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex md:m-2 md:rounded-lg md:bg-white md:border md:text-center bg-white  border-t border-gray-100 p-10  md:p-7 flex-col items-center "
                >
                  <div
                    style={{
                      background: `${
                        index === 0
                          ? "rgba(255, 156, 8, 0.3)"
                          : index === 1
                          ? "rgba(0, 255, 10, 0.26)"
                          : "rgba(5, 0, 255, 0.26)"
                      }`,
                    }}
                    className="p-4 w-14 h-14 md:w-12 cursor-pointer md:h-12 mb-4 flex items-center justify-center rounded-full"
                  >
                    {item.icon}
                  </div>
                  <h1 className="text-lg md:text-sm  opacity-75 font-semibold mb-2">
                    {item.title}
                  </h1>
                  <p className="text-sm px-2 md:px-0 md:font-normal md:text-xs font-medium text-gray-700">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* super app section */}
          <div className=" md:bg-white py-14 w-full">
            <div>
              <h1
                style={{ fontSize: "24px" }}
                className="font-bold px-6 md:px-0 pb-2 md:text-center md:w-2/3 md:m-auto opacity-70"
              >
                The super app that makes your life Easier⚡️
              </h1>
              <p className="md:text-center text-gray-700 font-medium px-4 md:w-2/5 text-sm md:m-auto">
                Get your brand well organized and more productive with our
                simple service
              </p>
            </div>
            <div className="md:flex md:flex-col md:w-11/12 md:m-auto ">
              <div className="mt-32 md:mt-10  flex flex-col md:flex-row p-6 rounded-lg ">
                <div className="md:mt-16">
                  {" "}
                  <h1 className="text-xl text-left font-bold opacity-80">
                    Add your Links 🖇️ -
                  </h1>
                  <p className="py-3 md:mt-3 text-left font-semibold text-sm md:px-0 md:text-sm font-medium md:font-medium text-gray-700">
                    share all your social link with a custom name having all
                    your social link in one place is all your need to reach more
                    audience
                  </p>
                  <div className="flex md:mt-5 items-center text-blue-700">
                    <BsDashLg />
                    <button className="ml-2 font-bold">Get started</button>
                  </div>
                </div>
                <img
                  className="md:w-3/5"
                  src="/assets/screen2.svg"
                  alt="customizable_illustration"
                />
              </div>
              <div className="mt-4 flex flex-col md:flex-row p-6 rounded-lg ">
                <div className="md:mt-16">
                  {" "}
                  <h1 className="text-xl text-left font-bold opacity-80">
                    Custom Profile 🤳️ -
                  </h1>
                  <p className="py-3 md:mt-3 text-left font-semibold text-sm md:px-0 md:text-sm md:font-medium text-gray-700">
                    Engage your client with a warm feel welcoming custom profile
                    with our drag and drop tool you can customize your profile
                    easily
                  </p>
                  <div className="flex items-center text-blue-700 md:mt-5">
                    <BsDashLg />
                    <button className="ml-2 font-bold">Get started</button>
                  </div>
                </div>
                <img
                  className="md:w-3/5"
                  src="/assets/screen2.svg"
                  alt="customizable_illustration"
                />
              </div>
            </div>
          </div>

          {/* footer section */}
          <div className="bg-blue-900 w-full ">
            <div className="flex flex-col items-center p-10 py-12 mb-12 ">
              <h1 className="text-white md:text-center text-xl font-bold px-6 mb-6 ">
                LETS BOOST YOUR PRODUCTIVITY TOGETHER
              </h1>
              <p className="text-gray-200 md:text-center md:w-3/4 ">
                Sign up for our newsletter to stay informed as we add more
                feature information is power
              </p>
              <button className="px-5 md:text-xs m-auto w-40 py-3 mt-5 bg-white text-gray-700 font-medium rounded">
                Newsletter
              </button>
            </div>
            <div className="flex justify-between item-center border-t border-gray-150 border-opacity-20 p-4 text-gray-100">
              <span className="text-xs">&copy; Qwikker 2021</span>
              <a href="https://www.codewars.com/users/addegbenga"> ✨️✨️ </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
