import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/dashboard/Navbar";
import Sidebar from "../../components/dashboard/Sidebar";
import QwikkerPanel from "../../components/dashboard/QwikkerPanel";

export default function MyDashboard() {
  return (
    <>
      <Sidebar />
      <Navbar />
      <QwikkerPanel />
      <Outlet />
    </>
  );
}
