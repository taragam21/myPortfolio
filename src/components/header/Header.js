import React from "react";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, pageEnabled } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import ToggleSwitch from "../toggleSwitch/ToggleSwitch";
import "./Header.css";

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
  el.style.borderRadius = "5%";
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

const Header = (props) => {
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
  const viewSplash = pageEnabled.splash;
  const link = viewSplash ? "/splash" : "/home";

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
        <header className="header">
          <NavLink to={link} tag={Link} className="logo_img">
            <img
              className="logo_img"
              src={require(`../../assets/images/${greeting.logo_path}`)}
              alt={"Tarabai Gambara"}
            />
          </NavLink>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon navic"></span>
          </label>
          <ul className="menu">
            <MyLink name="Home" link="/home" />
            {viewExperience && <MyLink name="Expérience" link="/experience" />}
            {viewEducation && <MyLink name="Education" link="/education" />}
            {viewProjects && <MyLink name="Projets" link="/projects" />}
            <MyLink name="Contact" link="/contact" />
            <li className="li">
              <ToggleSwitch />
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
};
export default Header;
