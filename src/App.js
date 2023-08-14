import React from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./components/HeaderComponents/HeaderComponent";
import BodyComponent from "./components/BodyComponents/BodyComponent";
import "./App.css";

export const AppLayout = () => {
    return (
      <div className="appLayout">
        <HeaderComponent />
        <BodyComponent />
      </div>
    );
  };
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<AppLayout />);