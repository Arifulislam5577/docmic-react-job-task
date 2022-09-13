import React from "react";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "images/icons/cardiology.svg",
      title: "Cardiology",
      description: "Seduahag perspiciati under omnised atused error.",
    },
    {
      id: 2,
      icon: "images/icons/checkup.svg",
      title: "Monthly Check Up",
      description: "Seduahag perspiciati under omnised atused error.",
    },
    {
      id: 3,
      icon: "images/icons/dental.svg",
      title: "Dental Care",
      description: "Seduahag perspiciati under omnised atused error.",
    },
    {
      id: 4,
      icon: "images/icons/medicalbox.svg",
      title: "Opthalmology",
      description: "Seduahag perspiciati under omnised atused error.",
    },
  ];
  return (
    <section className="py-10">
      <div className="container">
        <div className="text-center mb-10">
          <p className=" font-normal text-primary capitalize mb-2">
            our services
          </p>
          <h2 className="text-dark text-3xl font-medium capitalize">
            Services For Your Health
          </h2>
        </div>
        <div className="grid items-center justify-between gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const { id, title, description, icon } = service;
            return (
              <figure
                key={id}
                className={`bg-white py-3 px-4 rounded-md shadow-sm ${
                  id === 3 && "border border-primary"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="text-xs text-dark font-normal">{title}</p>
                  <img src={icon} alt={title} />
                </div>
                <p className="text-sm text-darkLight my-2">{description}</p>
                <button
                  className={
                    id === 3
                      ? "capitalize text-base font-medium	 text-primary "
                      : "capitalize text-base font-medium	text-dark "
                  }
                >
                  explore now
                </button>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
