import React, { useState } from "react";

function PlantCard({ plant }) {
  const [button, setButton] = useState(true)

  function renderOutOfStock(){
    setButton(!button)
    console.log(button)
  }
  
  return (
    <li className="card">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      {button ? (
        <button onClick={renderOutOfStock} className="primary">In Stock</button>
      ) : (
        <button onClick={renderOutOfStock}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
