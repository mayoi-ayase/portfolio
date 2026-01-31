import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      {/* <!--Made with Love by Larry Geams--> */}
      {/* <!--MENU--> */}
      <div className="title-container">
        <h1 className="title">
          <Link to="/">(´・ω・｀)</Link>
        </h1>
      </div>
      <nav className="menu">
        <ul>
          <li>
            <Link to="/commissions">Commissions</Link>
          </li>
          <li>
            <Link to="/art">Art</Link>
          </li>
          <li>
            <Link to="/videos">Videos</Link>
          </li>
          <li>
            <Link to="/vocals">Vocals</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Menu;
