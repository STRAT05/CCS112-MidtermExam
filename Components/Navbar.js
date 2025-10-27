import React from "react"; 
import { Link, useLocation } from "react-router-dom"; 

function Navbar() {
  const location = useLocation(); // Hook to get the current route 

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> {/* Bootstrap Navbar */}
      <div className="container">  {/* Container for proper alignment */}
        {/* Navbar Brand */}
        <Link className="navbar-brand fw-bold" to="/">
          TaskFlow
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span> {/* Hamburger icon for mobile view */ }
        </button> {/* Collapsible part of the navbar */ }

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active" : "" 
                }`} 
                to="/"
              >
                View Tasks
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${
                  location.pathname === "/add" ? "active" : ""
                }`}
                to="/add"
              >
                Add Task
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
