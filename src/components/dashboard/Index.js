import React from "react";
import Navbar from "./Navbar";
import Subnavbar from "./Subnavbar";
import QwikkerPanel from "./QwikkerPanel";
import Sidebar from "./Sidebar";
import "./style.css";



export default function Index() {
  return (
    <div className="w-full grid bg-red-100  relative">
      <Sidebar />
      <div className="flex ">
        <div className="w-1/2 ">
          <Navbar />
          <Subnavbar />
        </div>
        <QwikkerPanel />
      </div>
    </div>
  );
}
