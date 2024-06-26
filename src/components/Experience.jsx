import React from "react";
import item from "./data/experience.json";

const Experience = () => {
  return (
    <div className="container ex" id="experience">
      <h1>EXPERIENCE</h1>
    
        <div
          key={item.id}
          className="ex-items text-center my-5"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="right">
            <h2>{item.role}</h2>
            <h4>
              <span style={{ color: "yellowgreen" }}>
                {item.startDate} - {item.endDate}
              </span>{" "}
              <span style={{ color: "yellow" }}>{item.location}</span>
            </h4>
            {item.experiences.map((experience, index) => (
              <h5 key={index} style={{ color: "yellow" }}>
                {experience}
              </h5>
            ))}
          </div>
        </div>
 
    </div>
  );
};

export default Experience;
