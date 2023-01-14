import React, { useState } from "react";

import "./qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggle === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-suitcase qualification__icon"></i> Experience
          </div>

          <div
            className={
              toggle === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggle === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">JS Developer</h3>
                <span className="qualification__subtitle">airSlate</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> From March 2022 to
                  the present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Front End Developer</h3>
                <span className="qualification__subtitle">memCrab</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> From April 2020 to
                  February 2022
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">FREELANCE</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> From June 2019 to
                  February 2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/*<div className="qualification__data">*/}
            {/*  <div></div>*/}

            {/*<div>*/}
            {/*  <span className="qualification__rounder"></span>*/}
            {/*  <span className="qualification__line"></span>*/}
            {/*</div>*/}

            {/*  <div>*/}
            {/*    <h3 className="qualification__title">Front End Developer</h3>*/}
            {/*    <span className="qualification__subtitle">memCrab</span>*/}
            {/*    <div className="qualification__calendar">*/}
            {/*      <i className="uil uil-calendar-alt"></i> 2022 - Present*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>

          <div
            className={
              toggle === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Master’s Degree</h3>
                <span className="qualification__subtitle">
                  State University Of Telecommunications
                </span>
                <span className="qualification__subtitle">
                  Faculty of Information technologies
                </span>
                <span className="qualification__subtitle">
                  Computer Engineering
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2019
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Bachelor’s Degree</h3>
                <span className="qualification__subtitle">
                  Vinnytsia National Technical University
                </span>
                <span className="qualification__subtitle">
                  Faculty of Computer Control Systems and Automatics
                </span>
                <span className="qualification__subtitle">
                  System Engineering
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2013 - 2017
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
