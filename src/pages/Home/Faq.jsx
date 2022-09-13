import React from "react";
import { FaPlus } from "react-icons/fa";
const Faq = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="faq-text w-full lg:w-1/2">
            <p className=" font-normal text-primary capitalize mb-2">
              FAQ Questions
            </p>
            <h2 className="text-dark text-3xl font-medium capitalize">
              Get Your General Answer
            </h2>

            <div className="accordion mt-5">
              <ul>
                <li className="flex items-center  justify-between mb-3">
                  <p className="text-xl font-normal tracking-tighter text-dark">
                    Get Your General Answer
                  </p>
                  <span className="text-primary">
                    <FaPlus />
                  </span>
                </li>
                <li className="flex items-center  justify-between mb-3">
                  <p className="text-xl font-normal tracking-tighter text-dark">
                    Will I always see my own doctor?
                  </p>
                  <span className="text-primary">
                    <FaPlus />
                  </span>
                </li>
                <li className="flex items-center  justify-between mb-3">
                  <p className="text-xl font-normal tracking-tighter text-dark">
                    What is one Medical’s care?
                  </p>
                  <span className="text-primary">
                    <FaPlus />
                  </span>
                </li>
                <li className="flex items-center  justify-between mb-3">
                  <p className="text-xl font-normal tracking-tighter text-dark">
                    What is evidence based medicine?
                  </p>
                  <span className="text-primary">
                    <FaPlus />
                  </span>
                </li>
                <li className="flex items-center  justify-between mb-3">
                  <p className="text-xl font-normal tracking-tighter text-dark">
                    What is an academic medical center?
                  </p>
                  <span className="text-primary">
                    <FaPlus />
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="faq-img w-full lg:w-1/2 flexbox">
            <img src="images/faq.png" alt="faq" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
