import React, { Component } from "react";
import PizzaImgComponent from "../components/PizzaImage/PizzaImage";

class Pizza extends Component {
  render() {
    return (
      <div>
        <h1>The Pizza </h1>
        <PizzaImgComponent />
      </div>
    );
  }
}

export default Pizza;
