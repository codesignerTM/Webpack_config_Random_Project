import React from "react";
import classes from "./PizzaImage.css";
import PizzaImage from "../../assets/pizza.jpg";

const pizzaImg = props => (
  <div className={classes.PizzaImageCont}>
    <img src={PizzaImage} alt="Pizza Image" className={classes.PizzaImage} />
  </div>
);

export default pizzaImg;
