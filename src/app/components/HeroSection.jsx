"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-7 flex flex-col justify-self-start text-center sm:text-left lg:text-left "
        >
          <h1 className="text-white text-left mb-4 text-4xl lg:text-7xl lg:leading-normal sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I'm{" "}
            </span>
            <br />
            <span>
              <TypeAnimation
                sequence={[
                  "Rishitha Bura",
                  2500,
                  "FullStack Developer",
                  2500,
                  "Web Developer",
                  2500,
                  "Data Analyst",
                  2500,
                ]}
                wrapper="span"
                speed={10}
                repeat={Infinity}
              />
            </span>
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Motivated and passionate computer science student with an interest
            in developing full-stack applications. Experienced working in both
            front-end and back-end development. Currently exploring Data
            Analytics and Machine Learning.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-pink-500 hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button
              className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/doc/Resume.pdf"; 
                link.download = "Rishitha Bura Resume";
                link.click();
              }}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download Resume
              </span>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.75 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="col-span-5 place-self-center mt-4 lg:mt-14"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero-image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
