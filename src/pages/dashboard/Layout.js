import React from "react";
import { Outlet } from "react-router-dom";
import Index from "../../components/dashboard/Index";

export default function MyDashboard() {
  return (
    <>
      <Index />
      <Outlet />
    </>
  );
}
