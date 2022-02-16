import React from "react";
import Login from "../auth/Login";
import { ImSpinner9 } from "react-icons/im";
import NotFound from "../dashboard/NotFound";
import Register from "../auth/Register";
import { useRoutes } from "react-router-dom";
const UsersHome = React.lazy(() => import("../users/Home"));

export default function Index() {
  let route = [
    {
      path: "login",
      element: <Login />,
    },
    {
      path: ":name",
      element: <UsersHome />,
    },
    {
      path: "register",
      element: <Register />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];

  let routes = useRoutes(route);
  return (
    <>
      <React.Suspense
        fallback={
          <div className="flex justify-center items-center text-white h-screen text-4xl">
            <ImSpinner9 size={30} className="animate-spin" />
          </div>
        }
      >
        {routes}
      </React.Suspense>
    </>
  );
}
