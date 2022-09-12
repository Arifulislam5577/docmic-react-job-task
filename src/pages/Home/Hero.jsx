import React from "react";

const Hero = () => {
  return (
    <section className="hero py-5">
      <div className="container flex flex-col lg:flex-row gap-5 items-center justify-between">
        <div className="hero-text-area w-full lg:w-1/2">
          <div className="text">
            <h1 className="text-3xl font-bold">
              your <span>health</span> is our top <span>priority</span>
            </h1>
            <p>
              There are many variations of passages of lpsum available, but the
              majority hae suffered.
            </p>
            <button className="btn">meet our specialist</button>
          </div>
          <div className="info flex items-center justify-between">
            <figure>
              <h3>263+</h3>
              <p>recover paitients</p>
            </figure>
            <figure>
              <h3>96%</h3>
              <p>satisfaction rate</p>
            </figure>
            <figure>
              <h3>86+</h3>
              <p>expert doctors</p>
            </figure>
          </div>
        </div>
        <div className="hero-img-area w-full lg:w-1/2 flex items-center justify-center">
          <img src="images/hero.png" alt="hero" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
