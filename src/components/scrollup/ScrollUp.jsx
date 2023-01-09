import React from "react";

import "./scrollUp.css";

const ScrollUp = () => {
  window.addEventListener("scroll", function () {
    const element = document.querySelector(".scrollup");

    if (this.scrollY >= 560) element.classList.add("show-scroll");
    else element.classList.remove("show-scroll");
  });

  return (
    <a href="#" className="scrollup">
      <i className="uil uil-arrow-up scrollup__icon"></i>
    </a>
  );
};

export default ScrollUp;
