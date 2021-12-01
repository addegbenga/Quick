import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/landing/Navbar";

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}
