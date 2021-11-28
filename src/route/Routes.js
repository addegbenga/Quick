import React from "react";
import { Switch, Route } from "react-router-dom";
import ForgotPassword from "../auth/ForgotPassword";
import Signin from "../auth/Signin";
import Signup from "../auth/Signup";
import AdminDashboard from "../dashboard/admin";
import Landing from "../home/Landing";
// import { ProtectedRoute } from "./ProtectedRoute";

export default function Routes() {
  return (
    <>
      <div className="hidden lg:block">
        Desktop mood cooming soon, switch to mobile view
      </div>
      <div className="lg:hidden block">
        <Switch>
          <Route component={Landing} exact={true} path="/" />
          <Route component={Signin} exact={true} path="/login" />
          <Route component={Signup} exact={true} path="/register" />
          <Route
            component={ForgotPassword}
            exact={true}
            path="/forgot-password"
          />
          <Route path="/name" exact={true} component={AdminDashboard} />
          {/* <ProtectedRoute path="/name" exact={true} component={AdminDashboard} /> */}
        </Switch>
      </div>
    </>
  );
}
