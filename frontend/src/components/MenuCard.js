import React from "react";

function MenuCard({ item }) {

  return (
    <div className="menu-card">

      <img src={item.image} alt={item.name} />

      <div className="menu-content">

        <h3>{item.name}</h3>

        <p className="price">₹{item.price}</p>

        <button className="add-btn">
          Add to Cart
        </button>

      </div>

    </div>
  );
}

export default MenuCard;