import React, { useState } from "react";
import "./Education.css";

function TimeLineItem(props) {
  return (
    <div
      className="education-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveYears(props.years);
        props.setActiveDescription(props.description);
      }}
    >
      <div className="education-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function Education() {
  const [activeTitle, setActiveTitle] = useState("");
  const [activeYears, setActiveYears] = useState("");
  const [activeDescription, setActiveDescription] = useState("");

  return (
    <div className="screen-background">
      <div className="education-background">
        <div className="timeline-background">
          <TimeLineItem
            title="International School of the Peninsula"
            years = "Pre-K to 5th grade"
            description="Attended the French-English immersion program and went on two foreign exchange trips"
            setActiveTitle={setActiveTitle}
            setActiveYears = {setActiveYears}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="The Harker School"
            years = "6th to 12th grade"
            description="Involved with student government, language societies, business clubs, and Model UN"
            setActiveTitle={setActiveTitle}
            setActiveYears = {setActiveYears}
            setActiveDescription={setActiveDescription}
          />
          <TimeLineItem
            title="Harvard College"
            years = "Undergraduate Education"
            description="Interested in joining CS and data related clubs, as well as cultural organizations"
            setActiveTitle={setActiveTitle}
            setActiveYears = {setActiveYears}
            setActiveDescription={setActiveDescription}
          />
        </div>
        <div className="highlight-background">
          <h1>{activeTitle}</h1>
          <h4> {activeYears}</h4>
          <p>{activeDescription}</p>
        </div>
      </div>
    </div>
  );
}
