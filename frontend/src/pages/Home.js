import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Specials from "../components/Specials";
import CategoryFilter from "../components/CategoryFilter";
import MenuCard from "../components/MenuCard";
import menuData from "../data/menuData";

function Home() {

  const [category, setCategory] = useState("All");

  const filteredMenu =
    category === "All"
      ? menuData
      : menuData.filter((item) => item.category === category);

  return (
    <>
      <Navbar />
      <Hero />
      <Specials />

      <section className="menu-section">

        <h2 className="menu-title">Our Menu</h2>

        <CategoryFilter
          category={category}
          setCategory={setCategory}
        />

        <div className="menu-grid">

          {filteredMenu.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}

        </div>

      </section>
    </>
  );
}

export default Home;