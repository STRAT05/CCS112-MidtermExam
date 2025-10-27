import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook
import MainVideo from "../../Images/Main Picture/MainVideo.mp4";

export default function MainHeroSection() {
  const navigate = useNavigate(); // ✅ initialize navigate

  useEffect(() => {
    // Smooth scroll for "Learn More" only
    const learnButton = document.querySelector(".btn[href='#learn']");
    if (learnButton) {
      learnButton.addEventListener("click", (e) => {
        e.preventDefault();
        window.scrollTo({ top: 600, behavior: "smooth" });
      });
    }

    return () => {
      if (learnButton)
        learnButton.removeEventListener("click", () => {});
    };
  }, []);

  // ✅ handle Buy Now click
  const handleBuyNow = (e) => {
    e.preventDefault();
    navigate("/shop"); // Navigate to ShopPage
  };

  return (
    <section className="hero">
      <video className="hero-video" src={MainVideo} autoPlay loop muted />
      <div className="hero-overlay"></div>

      <div className="hero-content fade-in">
        <h4>Dual-Camera Drone for Travel Photography</h4>
        <h1>DJI AIR 3S</h1>
        <h2>Chase the View</h2>
        <div className="hero-buttons">
          <a href="#learn" className="btn">Learn More</a>
          <a href="#buy" className="btn btn-outline" onClick={handleBuyNow}>
            Buy Now
          </a>
        </div>
      </div>
    </section>
  );
}
