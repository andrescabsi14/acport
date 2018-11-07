import React from "react";
import "./stars.scss";

class Stars extends React.Component {
  state = {
    loading: true
  };

  render() {
    return (
      <div>
        <div className="stars" />
        <div className="twinkling" />
      </div>
    );
  }
}

export default Stars;
