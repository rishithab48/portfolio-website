"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

const JOBS = [
  {
    job_title: "Software Development Intern",
    company: "365 Retail Markets",
    time_period: "May - Aug 2024",
    company_url: "https://365retailmarkets.com/",
    responsibilities: (
      <ul className="list-disc text-sm sm:text-base">
        <li>
          {" "}
          Implemented migrating the ProvisionAPI endpoint from legacy monolithic
          architecture (Java) to a microservice-based architecture (Kotlin)
          which resulted in performance improvement and higher fault tolerance.
        </li>
        <li>
          {" "}
          Refactored and updated components of the company's automated mailing
          system to V2, significantly improving code readability and
          consistency.
        </li>
        <li>
          Executed comprehensive postman tests for AccountAPI ensuring effective
          testing of API.
        </li>
        <li>
          Actively addressed and resolved three bugs affecting Kiosks and Pico
          Market ensuring proper error management processes were in place to
          prevent issues in the future.
        </li>
        <li>
          Developed two comprehensive Jest unit tests for Mobile Market
          application, contributing to overall reliability and robustness of the
          software.
        </li>
        <li>
          Recorded documentation on the projects I worked on and created code
          flow diagrams to understand the code architecture and changes better
          in the future.
        </li>
        <li>
          Took part in job shadowing sessions with different teams eagerly
          learning about a variety of tech stacks used by the company.
        </li>
        <li>
          Actively took part in the 365 Retail Markets Hackathon winning a prize
          for the challenge 'Hack For Hire' project.
        </li>
        <li>Participated in pair and mob programming.</li>
      </ul>
    ),
  },
  {
    job_title: "Software Development Intern",
    company: "365 Retail Markets",
    time_period: "May - Aug 2024",
    company_url: "https://365retailmarkets.com/",
    responsibilities: (
      <ul className="list-disc text-sm sm:text-base">
        <li>
          {" "}
          Implemented migrating the ProvisionAPI endpoint from legacy monolithic
          architecture (Java) to a microservice-based architecture (Kotlin)
          which resulted in performance improvement and higher fault tolerance.
        </li>
        </ul>
    ),
},
];
const WorkExperience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <section id="experience" className="text-white">
      <h1 className="text-4xl font-bold text-white mb-10 text-center">
        Work Experience
      </h1>
      <div className="md:px-8 sm:p-0">
        <div ref={ref} className="flex justify-start">
          <ul className="list-none border border-slate-300">
            {JOBS.map((job, index) => {
              return (
                <motion.li
                  key={index}
                  variants={cardVariants}
                  initial="inital"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.9, delay: index * 1 }}
                >
                  <div
                    key={index}
                    className="p-4 sm:py-10 flex flex-col sm:grid sm:grid-cols-2 hover:opacity-50 hover:bg-slate-800 rounded-lg group"
                  >
                    <div className="flex justify-center text-2xl text-transparent bg-clip-text bg-slate-300">
                      {job.time_period}
                    </div>
                    <div className="md:px-5 px-2">
                      <Link href={job.company_url} passHref legacyBehavior>
                        <a target="_blank">
                          <h1 className="font-semibold text-2xl text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-secondary-400 to-primary-600 md:text-3xl text-center sm:text-left">
                            {job.job_title}
                          </h1>
                          <h1 className="font-semibold text-xl md:text-xl text-white group-hover:text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 text-center sm:text-left">
                            {job.company}
                          </h1>

                          {job.responsibilities}
                        </a>
                      </Link>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
