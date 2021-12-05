import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./NotFound";
import Navbar from "../../components/dashboard/Navbar";
import QwikkerPanel from "../../components/dashboard/QwikkerPanel";
import Sidebar from "../../components/dashboard/Sidebar";
import "./style.css";

const Links = React.lazy(() => import("./Links"));
const Appearance = React.lazy(() => import("./Appearance"));
const Setting = React.lazy(() => import("./Setting"));
const Pro = React.lazy(() => import("./Pro"));

export default function Index() {
  let routes = [
    {
      path: "",
      element: <Links />,
    },
    {
      path: "appearance",
      element: <Appearance />,
    },

    {
      path: "setting",
      element: <Setting />,
    },
    {
      path: "pro",
      element: <Pro />,
    },

    {
      path: "*",
      element: <NotFound />,
    },
  ];

  let element = useRoutes(routes);

  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center text-white h-screen text-4xl">
            loading...
          </div>
        }
      >
        <div className="w-full grid overflow-hidden   min-h-screen bg-bgSecondary relative">
          <div className="flex">
            <Sidebar />
            <div className="w-3/5">
              <Navbar />
              {element}
            </div>
            <QwikkerPanel />
          </div>
        </div>
      </Suspense>
    </>
  );
}
