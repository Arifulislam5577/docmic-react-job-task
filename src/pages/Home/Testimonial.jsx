import React from "react";
import { BsFillPlayFill } from "react-icons/bs";
const Testimonial = () => {
  return (
    <section className="Testimonial py-10">
      <div className="text-center mb-10">
        <p className=" font-normal text-primary capitalize mb-2">Testimonial</p>
        <h2 className="text-dark text-3xl font-medium capitalize">
          What they say?
        </h2>
      </div>
      <div className="container lg:w-3/4 w-full mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="hidden lg:block">
            <button className="h-14 w-14 rounded-full bg-lightBlue flexbox text-center shadow">
              <BsFillPlayFill
                color="#2D89FF"
                size="40"
                className="rotate-180"
              />
            </button>
          </div>
          <div className="flex items-center p-5 bg-white shadow-md rounded-md testimonial-box">
            <div className="testimonial-text lg:w-2/3 w-full order-2 lg:order-1">
              <p className="title text-sm text-dark">David Jeams</p>
              <span className="text-xs text-dark">Pratient</span>
              <p className="text-justify text-darkLight text-sm tracking-tighter my-3">
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it is a long established fact that a reader will
                be distracted by the readable content
              </p>
            </div>
            <div className="testimonial-img  lg:w-1/3 mx-auto flexbox order-1 lg:order-2">
              <img
                src="images/slider.png "
                alt="slider"
                className="h-44 hidden lg:block"
              />
            </div>
          </div>
          <div className="hidden lg:block">
            <button className="h-14 w-14 rounded-full bg-lightBlue flexbox text-center shadow">
              <BsFillPlayFill color="#2D89FF" size="40" />
            </button>
          </div>
          <div className="flexbox gap-5 mt-5 lg:hidden">
            <button className="h-14 w-14 rounded-full bg-lightBlue flexbox text-center shadow">
              <BsFillPlayFill
                color="#2D89FF"
                size="40"
                className="rotate-180"
              />
            </button>
            <button className="h-14 w-14 rounded-full bg-lightBlue flexbox text-center shadow">
              <BsFillPlayFill color="#2D89FF" size="40" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
