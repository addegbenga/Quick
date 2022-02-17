import React from "react";
import { useSelector } from "react-redux";

export default function PanelNav() {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="lg:h-16 h-14 flex items-center justify-between px-6 border-b  bg-white ">
      <div className="flex text-sm">
        <h1 className="font-semibold mr-1">My Linktree:</h1>
        <a
          href={"https://qwikker.netlify.app/" + user.username}
          target="_blank"
          rel="noreferrer"
        >{`https://qwikker/${user.username}`}</a>
      </div>
      <button className="border py-1 px-3 rounded text-base text-opacity-60 text-black">
        Share
      </button>
    </div>
  );
}
