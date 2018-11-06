import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import Home from "./pages/home/home.pages";
import "./app.scss";

class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">Header</Link>
        </header>

        <Router>
          <Home path="/" />
          {/* <Details path="/details/:id" />
          <SearchParams path="search-params" /> */}
        </Router>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
