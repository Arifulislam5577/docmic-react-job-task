import React from "react";

const Experience = () => {
  return (
    <section className="experience py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="experience-text w-full lg:w-1/2">
            <p className="text-primary text-base">16+ Years Experiences </p>
            <h2 className="text-3xl font-medium my-3 text-dark">
              We Are Always ensure Best Medical Treatment For Your Health
            </h2>
            <p className="text-sm text-darkLight font-normal tracking-tighter text-justify	">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has been the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley of type and scrambled
              it is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look lik
            </p>
          </div>
          <div className="experience-img w-full lg:w-1/2 flexbox">
            <img src="images/bestmedical.png" alt="bestmedical" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
