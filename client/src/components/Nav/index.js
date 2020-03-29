import React from "react";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <h3 className="navbar-brand">
        Google Books
      </h3>
      <a className="nav-link text-white" href="/search">Search</a>
      <a className="nav-link text-white" href="/saved">Saved</a>
    </nav>
  );
}

export default Nav;
