import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar bg-dark">
      <div className="container-fluid">
        <Link to="/">
          <span className="navbar-brand mb-0 h1 text-light">Users</span>
        </Link>
        <Link to="/about">
          <span className="navbar-brand mb-0 h1 text-light">About</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
