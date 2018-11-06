import React from "react";

class Home extends React.Component {
  state = {
    photos: [],
    active: 0
  };

  render() {
    return (
      <section className="page-home">
        <h1>Hello Home</h1>
      </section>
    );
  }
}

export default Home;
