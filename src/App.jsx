// src/App.js
import React, { useEffect } from "react";
import { Provider, useDispatch } from "react-redux";
import store from "./redux/store";
import DynamicMenu from "./components/DynamicMenu";
import DynamicViewPanel from "./components/DynamicViewPanel";
import FlowDiagram from "./components/FlowDiagram";
import RegistrationFormV1 from "./components/RegistrationFormV1";
import RegistrationFormV2 from "./components/RegistrationFormV2";
import "./index.css";

const componentMap = {
  RegistrationFormV1,
  RegistrationFormV2,
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch configuration from JSON file
    fetch("/config.json")
      .then((response) => response.json())
      .then((config) => {
        // Map components using the configuration
        const menuConfig = config.menu.map((item) => ({
          ...item,
          component: componentMap[item.component],
        }));
        // Dispatch the menu configuration to Redux store
        dispatch({ type: "SET_MENU", payload: menuConfig });
      })
      .catch((error) => console.error("Error loading configuration:", error));
  }, [dispatch]);

  return (
    <div className="container">
      <header className="header">
        <h1>Dynamic Framework</h1>
      </header>
      <DynamicMenu />
      <DynamicViewPanel />
      <h2>React Flow Diagram</h2>
      <FlowDiagram />
    </div>
  );
};

const AppWrapper = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default AppWrapper;
