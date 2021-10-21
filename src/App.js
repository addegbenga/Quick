import { useEffect } from "react";
import "./App.css";
import Routes from "./route/Routes";

function App() {
  // useEffect(() => {
  //   // check for token in LS
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   }
  //   store.dispatch(loadUser());

  //   // log user out from all tabs if they log out in one tab
  //   window.addEventListener('storage', () => {
  //     if (!localStorage.token) store.dispatch({ type: LOGOUT });
  //   });
  // }, []);
  return (
    <>
      {/* <div className="desktop">Coming Soon</div> */}
  
        <Routes />
      
    </>
  );
}

export default App;
