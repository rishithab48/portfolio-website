"use client";
import React, {useState} from "react";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedInIcon from "../../../public/images/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState("False");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();
    console.log(resData);
    if (response.status === "success") {
      console.log("Message sent.");
      setEmailSubmitted("True");
    }
  };
  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-full -left-4 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="z-0">
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>

        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I'm currently looking for new opporunities, my inbox is always open.
          Whether you have a new opporunity ot just want to sat hi, I'll try my
          best to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/rishithab48" passHref legacyBehavior>
          <a target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/rishitha-bura-36a035231/" passHref legacyBehavior>
          <a target="_blank">
            <Image src={LinkedInIcon} alt="Linkedin Icon" />
            </a>
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2"
              placeholder="jacob@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2"
              placeholder="Just saying hi...."
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            class="bg-primary-500 hover:primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
          {
            emailSubmitted && (
                <p className="text-green-500 text-sm mt-2">
                    Email sent successfully! Thank you for reaching out.
                </p>
            )
          }
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
