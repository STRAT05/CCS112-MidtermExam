import React, { useEffect, useState } from "react";

export default function MainNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // close mobile menu on resize > 768
    const onResize = () => {
      if (window.innerWidth > 768) setMobileOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const navLinks = [
    "Camera Drones",
    "Handheld",
    "Specialized",
    "Explore",
    "Support",
    "Where to Buy",
  ];

  return (
    <>
      <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-container">
          <div className="logo">DroneX</div>

          <nav className="nav-links" aria-label="Primary">
            {navLinks.map((t) => (
              <a key={t} href="#">{t}</a>
            ))}
          </nav>

          <div className="nav-icons">
            <button className="icon" aria-label="Profile"><i className="ri-user-3-line"></i></button>
            <button className="icon" aria-label="Search"><i className="ri-search-line"></i></button>
            <button className="buy-btn">Purchase</button>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </header>

      <div className={`mobile-menu ${mobileOpen ? "active" : ""}`}>
        {navLinks.map((t) => (
          <a key={t} href="#">{t}</a>
        ))}
      </div>
    </>
  );
}
