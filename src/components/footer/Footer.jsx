import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">OLEKSANDR SHCHIPKOV</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://t.me/shchipkov"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-telegram-alt"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/oleksandr-shchipkov"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-linkedin-alt"></i>
          </a>

          <a
            href="https://sanya-shch.github.io/resume"
            className="footer__social-link"
            target="_blank"
          >
            <i className="uil uil-github-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; OLEKSANDR SHCHIPKOV. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
