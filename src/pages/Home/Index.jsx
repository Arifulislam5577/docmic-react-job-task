import React from "react";
import Experience from "./Experience";
import Faq from "./Faq";
import Feature from "./Feature";
import Hero from "./Hero";
import Services from "./Services";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Experience />
      <Feature />
      <Faq />
      <Testimonial />
    </>
  );
};

export default Home;
