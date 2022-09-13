import React from "react";

const Feature = () => {
  const services = [
    {
      id: 1,
      title: "24 Hours Doctor Support",
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      icon: "images/icons/support.svg",
    },
    {
      id: 2,
      title: "Exclusive Supports",
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      icon: "images/icons/notify.svg",
    },
    {
      id: 3,
      title: "Friendly Environment",
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      icon: "images/icons/friendlyenv.svg",
    },
    {
      id: 4,
      title: "24 Hours Nurse Support",
      description:
        "simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's ",
      icon: "images/icons/nursesupport.svg",
    },
  ];
  return (
    <section className="feature py-10">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5">
          <div className="feature-img w-full lg:w-1/2 flexbox order-2 lg:order-1">
            <img src="images/fastservice.png" alt="fastservice" />
          </div>
          <div className="feature-text w-full lg:w-1/2 order-1 lg:order-2">
            <p className="text-primary text-base">Our Hospital Feature</p>
            <h2 className="text-3xl font-medium my-3 text-dark">
              Make An Appointment Easy And Fast Services
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {services.map((service) => {
                const { id, title, description, icon } = service;
                return (
                  <figure
                    key={id}
                    className="bg-white py-3 px-4 rounded-md shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-xs text-dark font-normal">{title}</p>
                      <img
                        src={icon}
                        alt={title}
                        className={`h-8 w-8 ${
                          id % 2 !== 0 ? "bg-iconbgOne" : "bg-iconbgTwo"
                        }  rounded-full p-1`}
                      />
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
        </div>
      </div>
    </section>
  );
};

export default Feature;
