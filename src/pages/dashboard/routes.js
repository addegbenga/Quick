import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import NotFound from "./NotFound";
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
        {element}
      </Suspense>
    </>
  );
}
