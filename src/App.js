import React from "react";
import "./App.scss";
import Nav from "./components/Nav";
import routes from "./routes";
import { withRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      {routes}
    </div>
  );
}

export default withRouter(App);
