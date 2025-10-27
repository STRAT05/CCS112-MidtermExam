import React from "react";

import Drone2 from "../../Images/FirstDroneSection/DroneToCart-No.2.png";
import Drone4 from "../../Images/FirstDroneSection/DroneToCart-No.4.png";

export default function MainInfoCards() {
  return (


    <section className="info-section fade-in">
 
      <div className="info-card">
        <img src={Drone4} alt="Accessories" />
        <div className="info-content">
          <h2>Accessories</h2>
          <p>Controllers, goggles, batteries, and more</p>
          <a href="#">
            Buy Now <i className="fas fa-external-link-alt"></i>
          </a>
        </div>
      </div>

      <div className="info-card">
        <img src={Drone2} alt="Support" />
        <div className="info-content">
          <h2>Support</h2>
          <p>After-sale support and services for your drone</p>
          <a href="#">
            Learn More <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  );
}
