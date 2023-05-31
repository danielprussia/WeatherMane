import React from "react";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li>
          <a
            href="#home"
            className={`nav-link ${currentPage === "home" && "active"}`}
            onClick={() => handlePageChange("home")}
          >
            Forecast
          </a>
        </li>
        <li>
          <a
            href="#radar"
            className={`nav-link ${currentPage === "radar" && "active"}`}
            onClick={() => handlePageChange("ContactMe")}
          >
            Radar
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
