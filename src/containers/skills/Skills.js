import React from "react";
import { Fade } from "react-reveal";
import TechStack from "../../components/techStack/TechStack";
import LanguageStack from "../../components/languageStack/LanguageStack";
import SkillSection from "./SkillSection";
import "./Skills.css";

export default function Skills(props) {
  const theme = props.theme;
  return (
    <div className="main" id="skills">
      <div className="skills-header-div">
        <Fade bottom duration={2000} distance="20px">
          <h1 className="skills-header" style={{ color: theme.text }}>
            Compétences
          </h1>
        </Fade>
      </div>
      <SkillSection theme={theme} />
      <TechStack theme={theme} />
      <LanguageStack theme={theme} />
    </div>
  );
}
