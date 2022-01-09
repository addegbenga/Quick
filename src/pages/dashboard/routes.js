import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./NotFound";
import Navbar from "../../components/dashboard/Navbar";
import QwikkerPanel from "../../components/dashboard/QwikkerPanel";
import Sidebar from "../../components/dashboard/Sidebar";
import PanelNav from "../../components/dashboard/PanelNav";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./style.css";

const Links = React.lazy(() => import("./Links"));
const Appearance = React.lazy(() => import("./Appearance"));
const Setting = React.lazy(() => import("./Setting"));
const Pro = React.lazy(() => import("./Pro"));

export default function Index() {
  const isAuth = useSelector((state) => state.auth.isAuthenticated);
  const loading = useSelector((state) => state.auth.loading);
  let routes = [
    {
      path: "",
      element: <Suspense  fallback={
        <div className="flex justify-center items-center text-white h-screen text-4xl">
          <img src="/assets/screenloader.svg" alt="loading"/>
        </div>
      }><Links /></Suspense>
    },
    {
      path: "appearance",
      element: <Suspense  fallback={
        <div className="flex justify-center items-center text-white h-screen text-4xl">
          <img src="/assets/screenloader.svg" alt="loading"/>
        </div>
      }><Appearance /></Suspense> 
    },

    {
      path: "setting",
      element: <Suspense   fallback={
        <div className="flex justify-center items-center text-white h-screen text-4xl">
          <img src="/assets/screenloader.svg" alt="loading"/>
        </div>
      } ><Setting /></Suspense> 
    },
    {
      path: "pro",
      element: <Suspense  fallback={
        <div className="flex justify-center items-center text-white h-screen text-4xl">
          <img src="/assets/screenloader.svg" alt="loading"/>
        </div>
      } ><Pro /></Suspense> 
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ];

  let element = useRoutes(routes);

  return loading ? (
    <div  style={{ background: "#fafbfc" }} className="flex justify-center items-center text-white h-screen text-4xl">
      <img src="/assets/screenloader.svg" alt="loading"/>
  </div>
  ) : isAuth ? (
 
      <div
        style={{ background: "#fafbfc" }}
        className="w-full grid overflow-hidden   min-h-screen  relative"
      >
        <div className="flex flex-col lg:flex-row">
          <Sidebar />
          <div className="w-full lg:w-3/5">
            <div className="lg:hidden">
              <PanelNav />
            </div>
            <Navbar />

            {element}
          </div>
          <QwikkerPanel />
        </div>
      </div>
  ) : (
    <Navigate to="/login" replace />
  );
}
