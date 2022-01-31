import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h1 className="logo">MY BLOG</h1>
      <ul className="nav-link">
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/Profile"}>Profile</Link>
        </li>
        <li>
          <Link to={"/Blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"/Contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
