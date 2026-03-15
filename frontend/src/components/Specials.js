import React from "react";

function Specials() {

  const specials = [
    {
      name: "Chef Special Biryani",
      price: "₹299",
      img: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a"
    },
    {
      name: "Tandoori Platter",
      price: "₹349",
      img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"
    },
    {
      name: "Butter Chicken",
      price: "₹289",
      img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398"
    }
  ];

  return (
    <section className="specials">

      <h2>Chef Specials</h2>

      <div className="special-grid">

        {specials.map((item, index) => (

          <div className="special-card" key={index}>

            <img src={item.img} alt={item.name} />

            <h3>{item.name}</h3>

            <p>{item.price}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Specials;