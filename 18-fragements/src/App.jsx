import "./App.css";
import React from "react";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Item from "./components/Item";
function App() {
  let foodItems = ["Roti", "Sabji", "Salad", "Milk", "Fruits", "Ghee"];
  return (
    <>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
