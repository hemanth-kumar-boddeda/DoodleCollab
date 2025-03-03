import React, { useEffect } from "react";

import idea from "../../assets/Home/creative-writing.png";
import component from "../../assets/Home/abstract.png";
import project from "../../assets/Home/blueprint.png";
import collaborate from "../../assets/Home/collaborate.png";
import darkBackground from "../../assets/Home/dark-background.png";

import { useTheme } from "../../context/ThemeContext";
import "./homeabout.css";

const HomeAbout = () => {
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const aboutBox = document.querySelectorAll(".about-box");

    aboutBox.forEach((box) => {
      if (isDarkMode) {
        box.style.backgroundImage = `url(${darkBackground})`;
        box.style.backgroundSize = "cover";
      } else {
        box.style.backgroundImage = "none";
      }
    });
  }, [isDarkMode]);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          <div className="key-feature">Key Feature</div>
          <div className="about-head">
            <p>Why use DoodleCollab ?</p>
          </div>
          <div className="about-para">
            Lorem ipsum is typically a corrupted version of De finibus bonorum
            et malorum, a 1st-century BC text by the Roman statesman{" "}
          </div>
        </div>
        <div className="about-boxes">
          <div className="about-box">
            <img src={idea} alt="idea" />
            <div className="box-head">
              <b>Bring Ideas to Live</b>
            </div>
            <div className="box-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              has been the industrys
            </div>
            <a href="#" className="box-link">
              See How
            </a>
          </div>
          <div className="about-box">
            <img src={component} alt="abstract" />
            <div className="box-head">
              <b>Component Templates</b>
            </div>
            <div className="box-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              has been the industrys
            </div>
            <a href="#" className="box-link">
              See How
            </a>
          </div>
          <div className="about-box">
            <img src={project} alt="project" />
            <div className="box-head">
              <b>Project Management</b>
            </div>
            <div className="box-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              has been the industrys
            </div>
            <a href="#" className="box-link">
              See How
            </a>
          </div>
          <div className="about-box">
            <img src={collaborate} alt="collaborate" />
            <div className="box-head">
              <b>Live Collaboration</b>
            </div>
            <div className="box-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              has been the industrys
            </div>
            <a href="#" className="box-link">
              See How
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAbout;
