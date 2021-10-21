import React from "react";
import Navbar from "../nav/navbar";
import { MdOutlineManageAccounts } from "react-icons/md";
import { AiOutlineProfile } from "react-icons/ai";
import { IoRocketOutline } from "react-icons/io5";
const data = [
  {
    title: "Create An Account",
    icon: <MdOutlineManageAccounts color="#FF9C08" size={100} />,
    details: "Lorem ipsum makes life easier for people and is quite fun to u",
  },
  {
    title: "Setup your profile",
    icon: (
      <AiOutlineProfile
        style={{ color: "rgba(65, 133, 68, 0.87)" }}
        size={100}
      />
    ),
    details: "Lorem ipsum makes life easier for people and is quite fun to u",
  },
  {
    title: "Share your first link",
    icon: <IoRocketOutline color="#5351B1" size={100} />,
    details: "Lorem ipsum makes life easier for people and is quite fun to u",
  },
];
export default function Landing() {
  return (
    <>
      <Navbar />
      <div>
        <div className="mt-44 flex items-center flex-col text-center">
          <h1
            style={{ fontSize: "40px" }}
            className="font-bold px-8 leading-10 mb-2"
          >
            Keep your links organized{" "}
          </h1>
          <p className="p-4 text-md mb-4 font-medium text-gray-700">
            Qwikker lets you have your social links all in one place for easy
            access and let's you reach more audience easily.
          </p>
          <button className="px-5 mb-4 rounded py-3 text-sm bg-blue-700 text-white">
            Get started
          </button>

          <div className="mt-4">
            <img
              style={{ width: "20rem", height: "550px", objectFit: "cover" }}
              src="/homemockup.svg"
              alt="hero"
            />
          </div>

          {/* how it works section */}
          <div className="mt-20">
            <div className="mb-16">
              <h1
                style={{ fontSize: "23px" }}
                className=" font-bold mb-3 opacity-75"
              >
                How it works
              </h1>
              <p className="font-medium text-md px-5 text-gray-700">
                Lorem ipsum makes life easier for people and is quite fun to use
                too so keep up the good work
              </p>
            </div>
            <div className="mb-20">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="flex bg-white border-t border-gray-100 p-10 flex-col items-center "
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
                    className="p-4 w-14 h-14 mb-4 flex items-center justify-center rounded-full"
                  >
                    {item.icon}
                  </div>
                  <h1 className="text-lg  opacity-75 font-semibold mb-2">
                    {item.title}
                  </h1>
                  <p className="text-sm px-2 font-medium text-gray-700">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-indigo-50 py-14">
              <div>
                <h1 style={{ fontSize: "24px" }} className="font-bold px-6 pb-4">
                  The super app that makes your life Easier⚡️
                </h1>
              </div>
              <div className="mt-14 flex flex-col items-center bg-white p-6 mx-5 rounded">
                <h1 className="text-xl font-semibold">Customize Easily</h1>
                <p className="py-3 px-3">
                  We offer you tools and free templates to customize your
                  profile
                </p>
                <img src="/assets/screen.svg" alt="customizable_illustration" />
              </div>
              <div className="mt-8 flex flex-col items-center bg-white p-6 mx-5 rounded">
                <h1 className="text-xl font-semibold">Customize Easily</h1>
                <p className="py-3 px-3">
                  We offer you tools and free templates to customize your
                  profile
                </p>
                <img src="/assets/screen.svg" alt="customizable_illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
