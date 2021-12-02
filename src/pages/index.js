import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./landing/Layout";
import MyDashboard from "./dashboard/Layout";
import DashBoardPages from "./dashboard/routes";

import LandingPage from "./landing/routes";

export default function index() {
  return (
    <Routes>
      <Route  element={<Layout />}>
        <Route path="/*" element={<LandingPage />}></Route>
      </Route>
      <Route element={<MyDashboard />}>
        <Route path="dashboard//*" element={<DashBoardPages />}></Route>
      </Route>
    </Routes>
  );
}
