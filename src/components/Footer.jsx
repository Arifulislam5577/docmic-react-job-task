import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaGoogle,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  const footerNav = [
    { id: 1, navName: "about us", url: "/" },
    { id: 2, navName: "our pricing", url: "/" },
    { id: 3, navName: "our gallery", url: "/" },
    { id: 4, navName: "apponintment", url: "/" },
    { id: 5, navName: "privacy policy", url: "/" },
    { id: 6, navName: "services", url: "/" },
    { id: 7, navName: "our doctors", url: "/" },
    { id: 8, navName: "our latest news", url: "/" },
    { id: 9, navName: "career", url: "/" },
    { id: 10, navName: "contact us", url: "/" },
  ];
  return (
    <footer className="py-10 bg-lightBlue">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 grid-rows-2 lg:grid-rows-1 gap-5">
          <div>
            <img src="images/icons/logo.svg" alt="docmic" />
            <p className="text-sm text-darkLight tracking-tighter mt-3">
              simply dummy text of the printing and typesetting industry. Lorem
              Ipsum has bee
            </p>
            <ul className="flex items-center  gap-2 my-6">
              <li>
                <a href="/" className="social-style">
                  <FaFacebook size="24" />
                </a>
              </li>
              <li>
                <a href="/" className="social-style">
                  <FaInstagram size="24" />
                </a>
              </li>
              <li>
                <a href="/" className="social-style">
                  <FaGoogle size="24" />
                </a>
              </li>
              <li>
                <a href="/" className="social-style">
                  <FaTwitter size="24" />
                </a>
              </li>
              <li>
                <a href="/" className="social-style">
                  <FaYoutube size="24" />
                </a>
              </li>
            </ul>
            <p className="text-dark tracking-tighter text-xs">
              Copyright @222 Medicom All Rights Reserved
            </p>
          </div>
          <div className="flex flex-col items-start lg:items-center lg:justify-center justify-start">
            <h2 className="text-sm tracking-tighter text-primary font-medium capitalize mb-2 mr-5">
              Quick Links
            </h2>
            <ul className="">
              {footerNav.slice(0, 5).map((item) => {
                const { id, url, navName } = item;
                return (
                  <li key={id} className="mb-2">
                    <a
                      href={url}
                      className="capitalize text-sm text-dark hover:text-primary transition-all duration-300 "
                    >
                      {navName}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <ul className="lg:mt-7">
              {footerNav.slice(5).map((item) => {
                const { id, url, navName } = item;
                return (
                  <li key={id} className="mb-2">
                    <a
                      href={url}
                      className="capitalize text-sm text-dark hover:text-primary transition-all duration-300 "
                    >
                      {navName}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2 className="text-sm tracking-tighter text-primary font-medium capitalize mb-2 mr-5">
              opening hours
            </h2>

            <ul className="mt-3">
              <li className="mb-2 text-sm text-darkLight tracking-tighter flex items-center gap-3 ">
                <span className="text-primary">Mon-Tue</span>
                <span>08:00AM-05:00PM</span>
              </li>
              <li className="mb-2 text-sm text-darkLight tracking-tighter flex items-center gap-3">
                <span className="text-primary">Wed-Thu</span>
                <span>08:00AM-05:00PM</span>
              </li>
              <li className="mb-2 text-sm text-darkLight tracking-tighter flex items-center gap-3">
                <span className="text-primary">Fri-Sat</span>
                <span>10:00AM-07:00PM</span>
              </li>
              <li className="mb-2 text-sm text-darkLight tracking-tighter flex items-center gap-3">
                <span className="text-primary">Sunday</span>
                <span>Emergency</span>
              </li>
              <li className="mb-2 text-sm text-darkLight tracking-tighter flex items-center gap-3">
                <span className="text-primary">Personal</span>
                <span>Mon-05:00PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
