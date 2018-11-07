import React from "react";
import { render } from "react-dom";
import { Router } from "@reach/router";
import Header from "./shared/header/header.component";
import Home from "./pages/home/home.pages";
import Stars from "./shared/stars/stars.component";
import "./app.scss";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Stars />
        <Header />
        <Router>
          <Home path="/" />
          {/* <Details path="/details/:id" />
          <SearchParams path="search-params" /> */}
        </Router>
      </React.Fragment>
    );
  }
}

render(<App />, document.getElementById("root"));
