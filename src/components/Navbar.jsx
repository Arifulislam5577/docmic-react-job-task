import React from "react";

const Navbar = () => {
  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <div className="logo">
          <img src="images/icons/logo.svg" alt="Docmic" />
        </div>
        <ul className="flex items-center justify-between gap-5">
          <li>
            <a href="/" className="navList-items active">
              home
            </a>
          </li>
          <li>
            <a href="/" className="navList-items">
              about
            </a>
          </li>
          <li>
            <a href="/" className="navList-items">
              departments
            </a>
          </li>
          <li>
            <a href="/" className="navList-items">
              pages
            </a>
          </li>
          <li>
            <a href="/" className="navList-items">
              blog
            </a>
          </li>
          <li>
            <a href="/" className="navList-items">
              contacts
            </a>
          </li>
        </ul>
        <button className="btn">free consultion</button>
      </nav>
    </header>
  );
};

export default Navbar;
