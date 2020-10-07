import React, { useState } from "react";
import "./Experience.css";

function TimeLineItem(props) {
  return (
    <div
      className="experience-item"
      onClick={() => {
        props.setActiveTitle(props.title);
        props.setActiveDescription1(props.description1);
        props.setActiveDescription2(props.description2);
        props.setActiveDescription3(props.description3);
      }}
    >
      <div className="experience-info">
        <h4>{props.title}</h4>
      </div>
    </div>
  );
}

export default function ExperienceScreen() {
  const [activeTitle, setActiveTitle] = useState("");
  const [description1, setActiveDescription1] = useState("");
  const [description2, setActiveDescription2] = useState("");
  const [description3, setActiveDescription3] = useState("");

  return (
    <div className="screen-background">
      <div className="experience-background">
        <div className="timeline-background">
          <TimeLineItem
            title="School Extracurriculars"
            description1= "- Student Government: Class Council and ASB (3 years)"
            description2= "- Club Officer for BEcon and Career Connect (3 years)"
            description3= "- Varsity Swimming (4 years)"
            setActiveTitle={setActiveTitle}
            setActiveDescription1={setActiveDescription1}
            setActiveDescription2={setActiveDescription2}
            setActiveDescription3={setActiveDescription3}
          />
          <TimeLineItem
            title="Summer Jobs"
            description1="- HR Intern at Cloudera"
            description2="- French Tutor"
            description3="- Swim Instructor at YMCA"
            setActiveTitle={setActiveTitle}
            setActiveDescription1={setActiveDescription1}
            setActiveDescription2={setActiveDescription2}
            setActiveDescription3={setActiveDescription3}
          />
          <TimeLineItem
            title="Research"
            description1="- Conducted a data-driven project examining gender and ethnicity in legislatures @ Carleton College (2018)"
            description2="- Completed a field research project in the outskirts of Glacier National Park (2019)"
            description3="- Researched gender disparities in collegiate student governments and legislatures @ University of Chicago (2019)"
            setActiveTitle={setActiveTitle}
            setActiveDescription1={setActiveDescription1}
            setActiveDescription2={setActiveDescription2}
            setActiveDescription3={setActiveDescription3}
          />
          <TimeLineItem
            title="Miscellaneous"
            description1="- Knowledgeable in cartoons: especially Ratatouille, Avatar the Last Airbender, and  My Little Pony"
            description2="- Expert in ordering dim sum"
            description3="- Skilled at finding discounts online"
            setActiveTitle={setActiveTitle}
            setActiveDescription1={setActiveDescription1}
            setActiveDescription2={setActiveDescription2}
            setActiveDescription3={setActiveDescription3}
          />
        </div>
        <div className="highlight-experience-background">
          <h1>{activeTitle}</h1>
          <p>{description1}</p>
          <h2></h2>
          <p>{description2}</p>
          <h2></h2>
          <p>{description3}</p>
        </div>
      </div>
    </div>
  );
}
