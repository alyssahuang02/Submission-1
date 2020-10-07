import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./LearnMore.css"

function TimeLineItem(props) {
  return (
    <div
      className="learnmore-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setSemicolon(props.semicolon);
        props.setActiveDescription(props.description);
      }}
    >
      <div className="learnmore-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function LearnMoreScreen() {
  const [activeTitle, setActiveTitle] = useState("");
  const [semicolon, setSemicolon] = useState("");
  const [activeDescription, setActiveDescription] = useState("");

  return (
    <div className="screen-background">
      <div className="learnmore-background">
        <div className="timeline-background">
          <TimeLineItem
            title="favorite snack"
            semicolon = ": "
            description="muddy buddies"
            setActiveTitle={setActiveTitle}
            setSemicolon={setSemicolon}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="favorite song"
            semicolon = ": "
            description="lonely eyes- lauv"
            setActiveTitle={setActiveTitle}
            setSemicolon={setSemicolon}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="favorite color"
            semicolon = ": "
            description="pink"
            setActiveTitle={setActiveTitle}
            setSemicolon={setSemicolon}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="favorite season"
            semicolon = ": "
            description="fall"
            setActiveTitle={setActiveTitle}
            setSemicolon={setSemicolon}
            setActiveDescription={setActiveDescription}
          />
          <Link to="./about">
          <button renderAs="button">
          <span> Back </span>
          </button>
          </Link>
        </div>
        <div className="highlight-learnmore-background">
        <p>{activeTitle} {semicolon} {activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
