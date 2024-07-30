import React from "react";
import Cat_boy from "/assets/Icon-assets/cat-boy.png";
import Phone from "/assets/Icon-assets/phone.ico";
import Mail from "/assets/Icon-assets/email.ico";
import Map from "/assets/Icon-assets/map.ico";
import Linkedin from "/assets/Icon-assets/linkedin (2).ico";
import Github from "/assets/Icon-assets/github.ico";
import Twitter from "/assets/Icon-assets/twitter.ico";
import Instagram from "/assets/Icon-assets/instagram.ico";
import Whatsapp from "/assets/Icon-assets/whatsapp.ico";
import Telegram from "/assets/Icon-assets/telegram.ico";
import Coffee from "/assets/Icon-assets/coffee.ico";
import { useEffect, useState } from "react";
import { useTheme } from "../../context/Isdarkmode";

const Footer = () => {
  const { theme } = useTheme();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
      className={`relative isolate  font-poppins overflow-hidden ${
        theme === "dark" ? "bg-gray-800" : "bg-blue-800"
      } py-6 lg:py-6 sm:py-32`}
      id="footer"
    >
      <h1 className="text-center text-2xl font-normal font-playwrite ">
        Ashwin's Portfolio
      </h1>
      <div
        className={`mx-auto max-w-7xl flex text-slate-200 ${
          windowWidth < 580 ? "flex-col items-center" : "justify-between"
        }  lg:px-8  px-6 lg:mt-14 `}
      >
        <div className="mx-auto mt-5 max-w-2xl lg:mx-0   relative lg:left-36 lg:gap-8">
          <h1 className="text-center sm:text-left sm:ml-14 sm:font-semibold sm:text-4xl text-2xl py-2 font-medium sm:h-16 sm:w-80">
            Contact info :
          </h1>
          <div className="flex flex-col lg:ml-12 ml-4">
            <p className=" inline-flex gap-3">
              <img src={Phone} alt="" className="w-10 h-10" />
              <span className="relative top-1 hover:text-yellow-400 transition-transform duration-200 hover:scale-110">
                +91 8668496805
              </span>
            </p>
            <p className="inline-flex gap-3">
              <img src={Mail} alt="" className="w-10 h-10" />
              <span className="relative top-1 hover:text-yellow-400 transition-transform duration-200 hover:scale-110">
                ashwin.21ug4029@iiitranchi.ac.in
              </span>
            </p>
            <p className="inline-flex gap-3">
              <img src={Map} alt="" className="w-10 h-10 " />
              <span className="relative top-1 hover:text-yellow-400 transition-transform duration-200 hover:scale-110">
                Nashik, Maharashtra-422006
              </span>
            </p>
            <div className="inline-flex gap-3 mt-5">
              <img
                src={Linkedin}
                alt="LinkedIn"
                className="w-10 h-10 transition-transform duration-200 hover:scale-110"
                onClick={()=>{
                  window.open("https://www.linkedin.com/in/ashwin-sunil-kumavat-0a25b9243/","_blank")
                }}
              />
              <img
                src={Github}
                alt="Github"
                className="w-10 h-10 transition-transform duration-200 hover:scale-110"
                onClick={()=>{
                  window.open("https://github.com/AKcode07","_blank")
                }}
              />
              <img
                src={Twitter}
                alt="Twitter"
                className="w-10 h-10 transition-transform duration-200 hover:scale-110"
                onClick={()=>{
                  window.open(" https://x.com/AshwinKumavat","_blank")
                }}
              />
              <img
                src={Instagram}
                alt="Instagram"
                className="w-10 h-10 transition-transform duration-200 hover:scale-110"
                onClick={()=>{
                  window.open("https://www.instagram.com/ashwin.kumavat.07","_blank")
                }}
              />
              <img
                src={Whatsapp}
                alt="WhatsApp"
                className="w-10 h-10 transition-transform duration-200 hover:scale-110"
                onClick={()=>{
                  window.open("https://api.whatsapp.com/send?phone=918668496805&text=Hi","_blank")
                }}
              />
              <img
                src={Telegram}
                alt="Telegram"
                className="w-10 h-10 transition-transform duration-200 hover:scale-110"
                onClick={()=>{
                  window.open("https://t.me/+918668496805","_blank")
                }}
              />
            </div>
          </div>
        </div>
        <div className=" max-w-2xl relative lg:right-16 lg:bottom-12 md:right-32">
          {windowWidth > 580 ? (
            <img
              src={Cat_boy}
              alt="avatar-cat-boy"
              className="h-84 w-72 lg:h-96 lg:w-96 lg:mr-16 "
            />
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <div className="divider divider-primary w-1/2"></div>
      </div>
      <div className="flex justify-center gap-2">
        <img src={Coffee} alt="" className="md:w-8 md:h-8 w-6 h-6" />
        <h1 className="text-center font-semibold lg:text-xl">I must be an exception because you have sure caught me.</h1>
      </div>
    </div>
  );
};

export default Footer;
