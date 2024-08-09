import React from "react";
import { useSelector } from "react-redux";

const DynamicViewPanel = () => {
  const appConfig = useSelector((state) => state.app);

  const loadApp = () => {
    if (!appConfig) return <div>Select an app from the menu</div>;
    const { component: Component } = appConfig;
    return <Component />;
  };

  return (
    <div className="view-panel">
      <h2>Dynamic View Panel</h2>
      {loadApp()}
    </div>
  );
};

export default DynamicViewPanel;
