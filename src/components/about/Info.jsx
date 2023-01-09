import React from "react";

import "./about.css";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i className="uil uil-award-alt about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">4 Years Working</span>
      </div>

      <div className="about__box">
        <i className="uil uil-briefcase-alt about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">6 Projects</span>
      </div>

      <div className="about__box">
        <i className="uil uil-house-user about__icon"></i>
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">30+ Projects</span>
        <div className="about__subtitle">(Non-Commercial)</div>
      </div>
    </div>
  );
};

export default Info;
