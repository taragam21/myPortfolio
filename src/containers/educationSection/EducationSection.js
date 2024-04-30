import React from "react";
import { Fade } from "react-reveal";
import EducationImg from "./EducationImg";
import "./EducationSection.css";

const EducationSection = (props) => {
  const theme = props.theme;
  return (
    <div className="basic-education">
      <Fade bottom duration={2000} distance="40px">
        <div className="heading-div">
          <div className="heading-img-div">
            {/* <img
									src={require("../../assests/images/education.svg")}
									alt=""
								/> */}
            <EducationImg theme={theme} />
          </div>
          <div className="heading-text-div">
            <h1 className="heading-text" style={{ color: theme.text }}>
              Education
            </h1>
            <p style={{ fontSize: 20 }}>
              Mon parcours académique est enrichi par plusieurs diplômes et
              certifications obtenus dans trois pays, à savoir le Cameroun, la
              France et la Corée du Sud.
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default EducationSection;
