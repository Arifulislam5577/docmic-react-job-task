import React from "react";
import { FaPlus, FaRegCheckCircle } from "react-icons/fa";
const Hero = () => {
  const features = [
    { id: 1, title: "262k+", description: "recover paitients" },
    { id: 2, title: "96%", description: "satisfaction rate" },
    { id: 3, title: "86+", description: "expert doctors" },
  ];
  return (
    <section className="hero py-5">
      <div className="container flex flex-col lg:flex-row gap-10 items-center justify-between">
        <div className="hero-text-area w-full lg:w-1/2">
          <div className="text  lg:text-start">
            <h1 className="text-4xl lg:text-6xl font-semibold capitalize text-black tracking-tighter">
              your <span className="text-primary">health</span> is our top
              <span className="text-secondary"> priority</span>
            </h1>
            <p className="text-darkLight text-base font-normal max-w-md my-3 tracking-tighter">
              There are many variations of passages of lpsum available, but the
              majority hae suffered.
            </p>
            <button className="btn">meet our specialist</button>
          </div>
          <div className="info flexbox lg:justify-start gap-3 md:gap-5 lg:gap-8 mt-10">
            {features.map((feature) => {
              const { id, title, description } = feature;
              return (
                <figure key={id} className="text-center">
                  <h3 className="text-2xl font-semibold text-primary mb-1">
                    {title}
                  </h3>
                  <p className="text-darkLight capitalize text-sm">
                    {description}
                  </p>
                </figure>
              );
            })}
          </div>
        </div>
        <div className="hero-img-area lg:w-1/2 w-full">
          <img src="images/hero.png" alt="hero" className=" max-w-full " />
          <button className="px-5 py-3.5 bg-secondary capitalize text-white rounded font-normal transition-all duration-300 hover:bg-primary  flex items-center gap-2 absolute bottom-44 left-10 lg:left-0 lg:bottom-20">
            <FaRegCheckCircle />
            regular checkup
          </button>
          <div className="absolute bottom-0 left-10 lg:left-[20rem] lg:-bottom-10 ">
            <div className="bg-white p-5 shadow-xl rounded-lg w-[17rem]">
              <p className="text-sm capitalize text-dark">meet our doctors</p>
              <div className="flex mt-2">
                <img
                  src="images/doctor1.png"
                  alt="doctor"
                  className="h-10 w-10 rounded-full "
                />
                <img
                  src="images/doctor2.png"
                  alt="doctor"
                  className="shadow h-10 w-10 rounded-full "
                />
                <img
                  src="images/doctor3.png"
                  alt="doctor"
                  className="shadow h-10 w-10 rounded-full "
                />
                <img
                  src="images/doctor4.png"
                  alt="doctor"
                  className="shadow h-10 w-10 rounded-full "
                />
                <span className="h-10 w-10 rounded-full bg-primary flexbox ml-3">
                  <FaPlus size={24} className="text-white" />
                </span>
              </div>
              <div className="mt-3">
                <hr className="p-2 bg-gradient-to-r from-gradientOneFrom to-gradientOneTo rounded-full border-none mb-2" />
                <hr className="p-2 bg-gradient-to-r from-gradientTwoFrom to-gradientTwoTo rounded-full border-none " />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
