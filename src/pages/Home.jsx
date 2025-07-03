import React from "react";
import Hero from "../components/Hero";
import Main from "../components/Main";
import ParallaxSection from "../components/Parallax";
import Performances from "../components/Performances";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <>
      <Hero />
      <Main />
      <Performances/>
      <Gallery />
      <ParallaxSection />
    </>
  );
};

export default Home;
