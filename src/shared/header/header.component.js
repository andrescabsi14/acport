import React from "react";
import "./header.scss";

class Header extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  render() {
    return (
      <header>
        <div className="logo">
          <img src="logo.jpg" alt="Logo" />
        </div>
        <nav>
          <a href="/">sd</a>
        </nav>
      </header>
    );
  }
}

export default Header;
