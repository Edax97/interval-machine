import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./about-page.scss";

export function AboutPage() {
  return (
    <div className="page-center">
      <div className="text-center">
        <h1 className="text-primary display-3 fw-bold">Interval Machine</h1>

        <section className="text-center mt-2 mt-lg-4">
          <p className="fs-5 fs-lg-4 opacity-75">Timer app for the browser.</p>
        </section>
        <section className="mt-4 text-center">
          <a
            href="https://github.com/Edax97/interval-machine"
            aria-label="Github repository"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="about-icon" />
          </a>
          <a
            className="ms-4 ms-lg-5"
            href="https://www.linkedin.com/in/edwin-edmar-campos-alarcon/"
            aria-label="My Linkedin"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className="about-icon" />
          </a>
        </section>
        <div className="text-center mt-3"></div>
      </div>
    </div>
  );
}
