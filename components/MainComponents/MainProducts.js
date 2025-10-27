import React from "react";

import Drone1 from "../../Images/FirstDroneSection/DroneToCart-No.1.png";
import Drone2 from "../../Images/FirstDroneSection/DroneToCart-No.2.png";
import Drone3 from "../../Images/FirstDroneSection/DroneToCart-No.3.png";
import Drone4 from "../../Images/FirstDroneSection/DroneToCart-No.4.png";


const sampleProducts = [
  { id: 1, img: Drone1, title: "CPI RS 3 Mini", price: "From USD $279", desc: "Lightweight and easy to carry, ideal for creators who need stable shots without heavy equipment." },
  { id: 2, img: Drone2, title: "CPI RS 3 Mini", price: "From USD $279", desc: "Lightweight and easy to carry, ideal for creators who need stable shots without heavy equipment." },
  { id: 3, img: Drone3, title: "CPI RS 3 Mini", price: "From USD $279", desc: "Lightweight and easy to carry, ideal for creators who need stable shots without heavy equipment." },
  { id: 4, img: Drone4, title: "CPI RS 3 Mini", price: "From USD $279", desc: "Lightweight and easy to carry, ideal for creators who need stable shots without heavy equipment." },
];


export default function MainProducts({ variant }) {
  // variant could be 'accessories' etc. For now we reuse same sample products.
  return (
  
    
 <section className="text-section">
    <h1>Our Top Drones</h1>
    <h2>Discover our most popular drones, loved by our customers for their performance</h2>


  <div className="product-grid fade-in">
    {Array.from({ length: 8 }).map((_, i) => {
      const p = sampleProducts[i % sampleProducts.length];
      return (
        <div className="product-card" key={`${variant || "main"}-${i}`}>
          <img src={p.img} alt={p.title} />
          <div className="product-info">
            <p className="tag"><span>New</span> • Lightweight Stabilizer</p>
            <h3>{p.title}</h3>
            <p className="desc">{p.desc}</p>
            <p className="price">{p.price}</p>
          </div>
        </div>
      );
    })}
  </div>

      
</section>
  );
}
