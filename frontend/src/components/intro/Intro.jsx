import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/Isdarkmode";
import Typewriter from "typewriter-effect";
import "../../tailwind.css";
import handIcon from "/assets/Icon-assets/hand.ico";
import Avatar from "/assets/Icon-assets/port.jpg";

const Intro = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { theme } = useTheme();

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const texts = [
    "Web Developer,",
    "An Engineer,",
    "MERN-stack Developer",
    "Backend Developer",
    "Frontend Developer",
    "React Developer",
    "Software Engineer",
  ];

  const imageSizeClass = windowWidth <= 1024 ? "w-72 h-72" : "w-96 h-96";

  return (
    <div
      className={`hero min-h-screen ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      }`}
      id="Home"
    >
      <div className="hero-content lg:-mt-24 gap-20 flex-col lg:flex-row-reverse font-poppins">
        <img
          src={Avatar}
          alt="Profile"
          className={`rounded-full shadow-2xl ${imageSizeClass} mx-auto`}
        />
        <div
          className={`px-10 ${
            windowWidth <= 1024 ? "text-center" : "text-left"
          }`}
        >
          <h1
            className={`sm:text-4xl lg:text-5xl ${
              windowWidth <= 500 ? "text-3xl ml-16" : "text-4xl"
            } font-medium`}
          >
            Hello,
            <span className="wave px-4">
              <img
                src={handIcon}
                className={`inline-block ${windowWidth <= 1024 ? "h-6 w-6" : "h-10 w-10"}`}
                alt="Hand waving"
              />
            </span>
          </h1>
          <h1
            className={` ${
              windowWidth <= 500 ? "text-4xl" : "text-5xl"
            } py-4 sm:text-6xl lg:text-7xl whitespace-nowrap font-medium`}
          >
            I am Ashwin,
          </h1>
          <div className="Typewriter__wrapper text-3xl">
            <Typewriter
              options={{
                strings: texts,
                autoStart: true,
                loop: true,
                cursor: "|",
                delay: 70,
                deleteSpeed: 50,
              }}
            />
          </div>
          <button
            className={`btn btn-primary bg-indigo-600 text-base mt-4${
              theme === "dark" ? " text-slate-300" : " text-gray-900"
            } transition-transform duration-200 hover:scale-110`}
            onClick={() => {
              window.open(
                "https://drive.google.com/file/d/15TxsTsvUSEKH13hFu6u-BNVJd3pAcivX/view?usp=drive_link",
                "_blank"
              );
            }}
          >
            Resume/CV
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
