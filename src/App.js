import React, { useEffect } from "react";
import setAuthToken from "./utils/setAuthToken";
import store from "./store";
import { loadUser } from "./actions/authActions";
import { LOGOUT_USER } from "./actions/types";
import RoutesPages from "./pages/index";

export default function App() {
  useEffect(() => {
    // check for token in LS
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    store.dispatch(loadUser());

    // log user out from all tabs if they log out in one tab
    window.addEventListener("storage", () => {
      if (!localStorage.token) store.dispatch({ type: LOGOUT_USER });
    });
  }, []);


  return (
    <div>
      <RoutesPages />
    </div>
  );
}
