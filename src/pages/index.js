import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./landing/Layout";
import MyDashboard from "./dashboard/Layout";
import DashBoardPages from "./dashboard/routes";
import NotFound from "./dashboard/NotFound";
const LazyLandingPages = React.lazy(() => import("./landing/routes"));

export default function index() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="flex justify-center lg:items-center mt-36  lg:-mt-32 text-white h-screen text-4xl">
                  {" "}
                  <img className="w-20 h-20 lg:w-full" src="/assets/loder.svg" alt="loader" />
                </div>
              }
            >
              <LazyLandingPages />
            </Suspense>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route element={<MyDashboard />}>
        <Route path="dashboard//*" element={<DashBoardPages />}></Route>
      </Route>
    </Routes>
  );
}
