import React from "react";
import { FaBars } from "react-icons/fa";
const Navbar = () => {
  const navBar = [
    {
      id: 1,
      listName: "home",
      url: "/",
    },
    {
      id: 2,
      listName: "about",
      url: "/",
    },
    {
      id: 3,
      listName: "departments",
      url: "/",
    },
    {
      id: 4,
      listName: "pages",
      url: "/",
    },
    {
      id: 5,
      listName: "blog",
      url: "/",
    },
    {
      id: 6,
      listName: "contacts",
      url: "/",
    },
  ];
  return (
    <header className="py-6">
      <nav className="container flex items-center justify-between">
        <div className="logo">
          <img src="images/icons/logo.svg" alt="Docmic" />
        </div>
        <div className="hidden lg:block">
          <ul className="flex items-center justify-between gap-5">
            {navBar.map((nav) => (
              <li key={nav.id}>
                <a
                  href={nav.url}
                  className={
                    nav.listName === "home"
                      ? "navList-items active"
                      : "navList-items"
                  }
                >
                  {nav.listName}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <button className="btn lg:block hidden">free consultion</button>
        <button className="text-dark lg:hidden block">
          <FaBars size="24" />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
