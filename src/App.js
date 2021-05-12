import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import Routers from "./Routes";
import "./components/styles/styles.css";
import { NavBar } from "./components/includes/NavBar/NavBar";

function App(props) {
  return (
    <div>
      <NavBar />

      <div style={{ minHeight: "70vh" }}>
        <Provider store={store}>
          <Routers />
        </Provider>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default App;
