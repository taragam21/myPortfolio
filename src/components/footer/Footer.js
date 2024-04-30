import React from "react";
import { Fade } from "react-reveal";
import "./Footer.css";
import { NavLink, Link } from "react-router-dom";
import { greeting, pageEnabled } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
  el.style.borderRadius = "5%";
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const Footer = (props) => {
  const theme = props.theme;
  const styles = `
		.navic{
			background: ${theme.text}
		 }
		.navic:before,
		.navic:after {
			background: ${theme.text}
		}
	`;
  const viewExperience = pageEnabled.experience;
  const viewEducation = pageEnabled.education;
  const viewProjects = pageEnabled.projects;

  const MyLink = ({ name, link }) => {
    return (
      <li className="li">
        <NavLink
          to={link}
          tag={Link}
          style={({ isActive }) => ({
            fontWeight: isActive ? "bold" : "normal",
            color: theme.text,
          })}
          onMouseEnter={(event) => onMouseEnter(event, theme.jacketColor)}
          onMouseOut={(event) => onMouseOut(event)}
        >
          {name}
        </NavLink>
      </li>
    );
  };
  return (
    <Fade top duration={1000} distance="20px">
      <SeoHeader />
      <div>
        <style>{styles}</style>
        <header className="footer-header">
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon navic"></span>
          </label>
          <ul className="menu">
            <MyLink name="Home" link="/home" />
            {viewExperience && <MyLink name="Experience" link="/experience" />}
            {viewEducation && <MyLink name="Education" link="/education" />}
            {viewProjects && <MyLink name="Projects" link="/projects" />}
            <MyLink name="Contact" link="/contact" />
          </ul>
        </header>
      </div>
      <div>
        <p className="footer-text" style={{ color: props.theme.secondaryText }}>
          Copyright <span role="img">ⓒ</span> 2024 by {greeting.title}
        </p>
        <br />
      </div>
    </Fade>
  );
};

export default Footer;
