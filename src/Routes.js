import React from "react";
import { Switch, Route } from "react-router-dom";
import ForgotPassword from "./auth/ForgotPassword";
import Signin from "./auth/Signin";
import Signup from "./auth/Signup";
import AdminDashboard from "./dashboard/admin";
import Landing from "./home/Landing";

export default function Routes() {
  return (
    <div>
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
      </Switch>
    </div>
  );
}
