import React, { useState } from "react";

import "./header.css";

const NAV_LIST = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Experience", id: "experience" },
  { name: "Portfolio", id: "portfolio" },
  { name: "Contact", id: "contact" },
];

const Header = () => {
  window.addEventListener("scroll", function () {
    const element = document.querySelector(".header");

    if (this.scrollY >= 80) element.classList.add("scroll-header");
    else element.classList.remove("scroll-header");
  });

  const [toggle, showMenu] = useState(false);
  const [active, setActive] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          SHCHIPKOV
        </a>

        <div className={toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            {NAV_LIST.map((nav) => (
              <li key={nav.id} className="nav__item">
                <a
                  href={`#${nav.id}`}
                  onClick={() => setActive(`#${nav.id}`)}
                  className={
                    active === `#${nav.id}`
                      ? "nav__link active-link"
                      : "nav__link"
                  }
                >
                  <i className="uil uil-estate nav__icon"></i> {nav.name}
                </a>
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu((prev) => !prev)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu((prev) => !prev)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
