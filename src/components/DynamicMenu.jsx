import React from "react";
import { useSelector, useDispatch } from "react-redux";

const DynamicMenu = () => {
  const appConfig = useSelector((state) => state.app);
  const menu = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const handleMenuClick = (appConfig) => {
    dispatch({ type: "LOAD_APP", payload: appConfig });
  };

  return (
    <div className="menu">
      <h2>Dynamic Menu</h2>
      <ul>
        {menu.map((item, index) => (
          <li
            key={index}
            className={`${
              appConfig && appConfig.name === item.name ? "menu-active" : ""
            }`}
            onClick={() => handleMenuClick(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DynamicMenu;
