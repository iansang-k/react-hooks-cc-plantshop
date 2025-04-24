// src/components/PlantCard.js
import React, { useState } from "react";

function PlantCard({ plant }) {
  const [isSoldOut, setIsSoldOut] = useState(false);

  return (
    <li className="card" data-testid="plant-item">
      <img src={plant.image} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: {plant.price}</p>
      <button
        className={isSoldOut ? "sold-out" : ""}
        onClick={() => setIsSoldOut(!isSoldOut)}
      >
        {isSoldOut ? "Sold Out!" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantCard;
