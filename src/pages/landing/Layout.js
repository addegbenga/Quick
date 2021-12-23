import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../components/landing/Navbar";
import Footer from "../../components/landing/Footer"

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
}
