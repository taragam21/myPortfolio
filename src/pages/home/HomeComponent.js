import React from "react";
import { Header, TopButton, Footer } from "../../components";
import { Greeting, Skills, Twitter, AboutMe } from "../../containers";

const Home = (props) => {
  const theme = props.theme;
  return (
    <div className="main-page">
      <Header theme={theme} />
      <Greeting theme={theme} />
      <Skills theme={theme} />
      <Twitter />
      <AboutMe theme={theme} />
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
};

export default Home;
