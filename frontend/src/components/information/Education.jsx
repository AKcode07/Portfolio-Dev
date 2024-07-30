import React, { useEffect, useState } from "react";
import { useTheme } from "../../context/Isdarkmode";
import School from "/assets/Icon-assets/school.png";
import College from "/assets/Icon-assets/college.ico";
import IIITR from "/assets/Icon-assets/Indian_Institute_of_Information_Technology,_Ranchi_Logo.png";
import E_dark from "/assets/Icon-assets/education-dark.ico";
import E_light from "/assets/Icon-assets/education-light.ico";

const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Electronics and Communication (ES and IoT)",
    photo: IIITR,
    institution: "Indian Institute of Information Technology, Ranchi",
    year: "2021 - present",
    cgpa: "9.5",
    location: "Ranchi, Jharkhand",
  },
  {
    id: 2,
    degree: "PCMB (11th + 12th)",
    photo: College,
    institution: "Nashik Cambridge School, Nashik",
    year: "2019 - 2021",
    cgpa: "96",
    location: "Nashik, Maharashtra",
  },
  {
    id: 3,
    degree: "Primary Education (5th to 10th)",
    photo: School,
    institution: "Podar International School, Nashik",
    year: "2014 - 2019",
    cgpa: "90",
    location: "Nashik, Maharahtra",
  },
];

const Education = () => {
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

  return (
    <div
      className={`relative isolate font-poppins overflow-hidden ${
        theme === "dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-gray-900"
      } py-16 sm:py-32`}
      id="Education"
    >
      <div>
        <h2
          className={`text-3xl font-bold tracking-tight mt-10 sm:text-4xl md:text-5xl flex justify-center lg:mt-8`}
        >
          <img
            src={theme === "dark" ? E_light : E_dark}
            alt="Education Icon"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
          &nbsp;Education
        </h2>
        <div className="space-y-6 mt-24 px-4 lg:px-20">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`shadow-2xl  p-5 md:p-10 border ${theme=="dark"?"border-slate-300":"border-gray-900"}
               flex md:flex-row flex-col items-center 
               md:w-5xl rounded-3xl transition-transform duration-200 md:hover:scale-110`}
            >
              <div className={`flex md:flex-row flex-col items-center md:items-start`}>
                <img
                  src={edu.photo}
                  alt="Institution Logo"
                  className={`w-40 h-32 md:w-32 md:h-28 object-cover rounded-lg`}
                />
                <div className="md:ml-6 mt-4 md:mt-0 text-center md:text-left">
                  <h3 className="text-2xl font-bold">{edu.degree}</h3>
                  <p className="text-xl mt-2">{edu.institution}</p>
                  {/* <p className="text-lg mt-1">CGPA : {edu.cgpa} out of 10</p> */}
                  {
                    edu.id === 1 ? (<p className="text-lg mt-1">CGPA : {edu.cgpa} out of 10</p>) :
                      (<p className="text-lg mt-1">Percentage : {edu.cgpa} %</p>)
                  }
                </div>
              </div>
              <div className="mt-4 md:mt-0 md:ml-auto text-center md:text-right">
                <p>{edu.year}</p>
                <p>{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
