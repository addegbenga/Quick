import React from "react";
import PanelNav from "./PanelNav";
import { FaLock } from "react-icons/fa";
import { useSelector } from "react-redux";

export default function QwikkerPanel() {
  const profile = useSelector((state) => state.profile.profile);
  const user = useSelector((state) => state.auth.user);
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
        className="bg-indigo-700 w-56 border-8 border-black m-auto mt-20 scrollbar overflow-y-auto "
      >
        <div className="flex items-center flex-col text-sm mt-8">
          <div className="h-16 w-16 rounded-full ">
            <img src={user.avatarUrl} alt="avatar" />
          </div>
          <h1 className="mt-1 text-white font-bold text-opacity-90">
            {user.username}
          </h1>
          <p className="text-white text-opacity-90">{user.bio}</p>
        </div>

        <div className=" w-11/12 m-auto mt-4">
          {profile?.map((item) =>
            item.published ? (
              <div key={item._id}>
                <div className="bg-white overflow-y-hidden h-8 rounded-full text-center px-3  flex justify-between items-center mb-3">
                  {item.linkAvatar ? (
                    <img
                      className="h-5 w-5 rounded"
                      src={item.linkAvatar}
                      alt="icn"
                    />
                  ) : (
                    <div className="h-5 w-5"></div>
                  )}
                  <a
                    href={item.linkurl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs text-black text-opacity-80"
                  >
                    {item.title}
                  </a>
                  <FaLock size={12} />
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </div>
  );
}
