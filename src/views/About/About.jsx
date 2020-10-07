import React from "react";
import "./About.css";
import "./LearnMore.jsx"
import CutePic from "../../assets/Alyssa.JPG";
import { render } from "@testing-library/react";
import {Link} from "react-router-dom";

export default function AboutScreen() {
  render()
  {
  return (
    <div className="screen-background">
      <div className="intro-background">
        <div className="intro-item">
          <img src={CutePic} className="intro-picture" />
        </div>
        <div className="intro-item">
          <p></p>
          <h2>Welcome to my website!</h2>
          <p></p>
          <p>Hi! My name is Alyssa, and I'm part of Harvard's Class of 2024.</p>
          <p>I am originally from Bay Area, California, but I am currently on campus in Canaday. </p>
          <p>I plan to concentrate in Computer Science and Linguistics.</p>
          <p>In my free time, I like to bike, bake, read, and swim. </p>
          <p></p>
          <Link to="/learnmore">
          <button renderAs="button">
          <span> Click here to learn more! </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
  }
}
