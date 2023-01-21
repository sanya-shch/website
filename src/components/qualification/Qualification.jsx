import React, { useState, useEffect } from "react";

import "./qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);

  const toggleTab = (index) => {
    setToggle(index);
  };

  const [activeModal, setActiveModal] = useState(0);

  const toggleModal = (index) => {
    setActiveModal(index);
  };

  useEffect(() => {
    if (activeModal !== 0) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [activeModal]);

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
                <span className="qualification__subtitle bold">airSlate</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> From March 2022
                  <br /> to the present
                </div>

                <span
                  onClick={() => toggleModal(1)}
                  className="qualification__modal-button"
                >
                  View More{" "}
                  <i className="uil uil-arrow-right qualification__modal-button-icon"></i>
                </span>

                <div
                  className={
                    activeModal === 1
                      ? "qualification__modal active-modal"
                      : "qualification__modal"
                  }
                >
                  <div className="qualification__modal-content">
                    <i
                      onClick={() => toggleModal(0)}
                      className="uil uil-times qualification__modal-close"
                    ></i>

                    <div className="custom_scrollbar">
                      <h3 className="qualification__modal-title">E-sign.</h3>
                      <p className="qualification__modal-description">
                        An enterprise-grade eSignature that scales with your
                        workflow. The app provides tools that empower
                        individuals and businesses to digitize their approval
                        processes, eliminate errors, create productive teams and
                        easily integrate eSignatures into the apps and systems.
                      </p>

                      <ul className="qualification__modal-list">
                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">React</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Redux</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            Redux Thunk
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Reselect</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            React Router
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            TypeScript
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Node.js</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Redis</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Hapi</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Joi</p>
                        </li>
                      </ul>
                    </div>
                  </div>
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
                <span className="qualification__subtitle bold">memCrab</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> From April 2020
                  <br /> to February 2022
                </div>

                <span
                  onClick={() => toggleModal(2)}
                  className="qualification__modal-button"
                >
                  View More{" "}
                  <i className="uil uil-arrow-right qualification__modal-button-icon"></i>
                </span>

                <div
                  className={
                    activeModal === 2
                      ? "qualification__modal active-modal"
                      : "qualification__modal"
                  }
                >
                  <div className="qualification__modal-content">
                    <i
                      onClick={() => toggleModal(0)}
                      className="uil uil-times qualification__modal-close"
                    ></i>

                    <div className="custom_scrollbar">
                      <h3 className="qualification__modal-title">
                        E-Commerce.
                      </h3>
                      <p className="qualification__modal-description">
                        Platform for the window industry, where window
                        manufacturers, sellers and installers can present their
                        products and services, as well as establish
                        partnerships.
                      </p>

                      <ul className="qualification__modal-list">
                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">React</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Redux</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            Redux Thunk
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Reselect</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Formik</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            React Router
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            CSS Modules
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            Node.js (SSR)
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Flow</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            Typed Contracts
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Jest</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            React Testing Library
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            React Intl
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Webpack</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Babel</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Husky</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">SVGR</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">PDFMake</p>
                        </li>
                      </ul>

                      <div className="divider" />

                      <h3 className="qualification__modal-title">
                        Learning platforms.
                      </h3>
                      <p className="qualification__modal-description">
                        It's an online platform for teaching and learning
                        online.
                      </p>

                      <ul className="qualification__modal-list">
                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">React</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            React Context Api
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Formik</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            React Router
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            CSS Modules
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            Node.js (SSR)
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Zod</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            TypeScript
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Jest</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            React Testing Library
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Lingui</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Webpack</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Babel</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Husky</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle bold">FREELANCE</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> From June 2019
                  <br /> to February 2020
                </div>

                <span
                  onClick={() => toggleModal(3)}
                  className="qualification__modal-button"
                >
                  View More{" "}
                  <i className="uil uil-arrow-right qualification__modal-button-icon"></i>
                </span>

                <div
                  className={
                    activeModal === 3
                      ? "qualification__modal active-modal"
                      : "qualification__modal"
                  }
                >
                  <div className="qualification__modal-content">
                    <i
                      onClick={() => toggleModal(0)}
                      className="uil uil-times qualification__modal-close"
                    ></i>

                    <div className="custom_scrollbar">
                      <h3 className="qualification__modal-title">
                        Vacation portal.
                      </h3>
                      <p className="qualification__modal-description">
                        Website where employees can track and set their
                        vacation.
                      </p>

                      <ul className="qualification__modal-list">
                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">React</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Redux</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            Redux Thunk
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Reselect</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            React Router
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            TypeScript
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Node.js</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Redis</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Hapi</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Joi</p>
                        </li>
                      </ul>

                      <div className="divider" />

                      <h3 className="qualification__modal-title">
                        E-Commerce.
                      </h3>
                      <p className="qualification__modal-description">
                        Online electronics store.
                      </p>

                      <ul className="qualification__modal-list">
                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">React</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            React Router
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Scss</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Node.js</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Express</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Mongoose</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">GraphQL</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Websocket</p>
                        </li>
                      </ul>

                      <div className="divider" />

                      <h3 className="qualification__modal-title">
                        E-Commerce.
                      </h3>
                      <p className="qualification__modal-description">
                        Online clothing store.
                      </p>

                      <ul className="qualification__modal-list">
                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">React</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Redux</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            Redux Thunk
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">Reselect</p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            React Router
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            React Intl
                          </p>
                        </li>

                        <li className="qualification__modal-list-item">
                          <p className="qualification__modal-info">
                            Styled Components
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
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
