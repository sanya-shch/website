import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://t.me/shchipkov"
        className="home_social-icon"
        target="_blank"
      >
        <i className="uil uil-telegram-alt"></i>
      </a>

      <a
        href="https://www.linkedin.com/in/oleksandr-shchipkov"
        className="home_social-icon"
        target="_blank"
      >
        <i className="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/sanya-shch"
        className="home_social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://sanya-shch.github.io/resume"
        className="home_social-icon"
        target="_blank"
      >
        <i className="uil uil-file"></i>
      </a>
    </div>
  );
};

export default Social;
