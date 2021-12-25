import React from "react";
import PanelNav from "./PanelNav";
import { useSelector } from "react-redux";

export default function QwikkerPanel() {
  const profile = useSelector((state) => state.profile.profile);
  return (
    <div className=" w-1/2 hidden lg:block border-l h-screen overflow-hidden  ">
      {/* <div className="h-16 flex items-center justify-between px-6 border-b  bg-white ">
        <div className="flex text-sm">
          <h1 className="font-semibold mr-1">My Linktree:</h1>
          <a href="#div">https://linktree/drey</a>
        </div>
        <button className="border py-1 px-3 rounded text-base text-opacity-60 text-black">
          Share
        </button>
      </div> */}

      <PanelNav />
      <div
        style={{ height: "28rem", borderRadius: "2.5rem" }}
        className="bg-indigo-500 w-56 border-8 border-black m-auto mt-20 scrollbar overflow-y-auto "
      >
        <div className="flex items-center flex-col text-sm mt-8">
          <div className="h-16 w-16 rounded-full bg-red-200"></div>
          <h1 className="mt-1 text-white text-opacity-90">@Drey442</h1>
          <p className="text-white text-opacity-90">I am a rock star</p>
        </div>

        <div className=" w-11/12 m-auto mt-4">
          {profile.map((item, index) => (
            <div key={item._id}>
              <div className="bg-white h-8 rounded-full text-center  flex justify-center items-center mb-3">
                <a
                  href={item.linkurl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-black text-opacity-80"
                >
                  {item.title}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
