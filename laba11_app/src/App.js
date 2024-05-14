import PizzaCard from "./components/PizzaCard";
import img from "./components/img/pizza.png";
import "./App.css";
import { React, useState } from "react";


function App() {
  const [counter, setCounter] = useState(1);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function basket() {
    alert("Количество заказанного товара : " + counter)
  }

  return (
    <div className="card">
      <PizzaCard title="Пепперони" img={img} text1="Ничего лишнего! Томатный соус, колбаски Пепперони и Моцарелла" text2="550" />
      <div className="btns">
        <button onClick={decrement} className="btn">-</button>
        <p className="counter">{counter}</p>
        <button onClick={increment} className="btn">+</button>
        <button onClick={basket} className="btn_basket">🛒</button>
      </div>
    </div>
  );


}

export default App;
