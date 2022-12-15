import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./about-page.scss";

export function AboutPage() {
  return (
    <div className="page-center">
      <div className="text-center">
        <h1 className="text-primary display-3">Interval Machine</h1>
        <p className="text-muted">@Edmar Campos 2022</p>

        <div className="d-flex justify-content-center gap-3 gap-lg-4">
          <a href="github.com" aria-label="My github">
            <FaGithub className="about-icon" />
          </a>
          <a href="linkedin.com" aria-label="My Linkedin">
            <FaLinkedin className="about-icon" />
          </a>
        </div>
      </div>
    </div>
  );
}
