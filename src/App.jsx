import { useEffect, useState, useContext } from "react";
import Routing from "./Router.jsx";
import { auth } from "./utils/firebase.js";
import { DataContext } from "./components/DataProvider/DataProvider.jsx";
import { Type } from "./utils/action.type.js";

function App() {
  const [{ user }, dispatch] = useContext(DataContext);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        dispatch({
          type: Type.SET_USER,
          user: authUser,
        });
      } else {
        dispatch({ type: Type.SET_USER, user: null });
      }
    });
  }, []);
  return <Routing />;
}

export default App;
