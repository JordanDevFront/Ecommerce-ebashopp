import "./App.css";
import React from "react";
import RouterComponent from "./routes";
import { Header } from "./componentes/Header";

const App = () => {
  return (
    <div>
      {window.location.pathname === "/Login" ? null : (
        <Header />
      )}

      <RouterComponent />
    </div>
  );
};

export default App;
