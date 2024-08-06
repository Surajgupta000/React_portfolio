import React from "react";
import { Link } from "react-router-dom";
import Tsection from "../../components/Tsection";

export default function About() {
  const skills = [
    "Javascript",
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Java",
    ".Net",
  ];

  return (
    <div>
      <Tsection title="About" />
      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <dotlottie-player
            src="https://lottie.host/188d40f3-1aa1-4999-aca1-01f445947215/rmgONTovly.json"
            background="transparent"
            speed="1"
            loop
            autoplay
          ></dotlottie-player>
        </div>
        <div className="flex flex-col gap-10 w-1/2 sm:w-full">
          <p className="text-white">
            • Welcome to My Portfolio! <br /> Hi, I'm Suraj, a passionate and
            dedicated web developer with a flair for creating dynamic and
            responsive web applications. With expertise in the MERN stack, I
            specialize in building robust, user-friendly, and visually appealing
            websites. I have hands-on experience with modern technologies like
            React, Tailwind CSS, and Node.js, ensuring that my projects are
            functional and aesthetically pleasing. Whether you're looking for a
            sleek single-page application or a complex web platform, I have the
            skills and creativity to bring your vision to life.
          </p>
          <p className="text-white">
            • Besides my technical prowess, I take pride in delivering clean,
            maintainable code and a seamless user experience. I'm constantly
            learning and adapting to new trends and technologies to stay ahead
            in the ever-evolving field of web development. Explore my portfolio
            to see some of my recent work and feel free to contact me if you'd
            like to collaborate on your next project. Let's create something
            amazing together!
          </p>
        </div>
      </div>

      <div className="py-5">
        <h1 className="text-tertiary text-xl">
          Here are a few technologies I have worked on.
        </h1>

        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <Link key={index} to={`/skills/${skill.toLowerCase()}`} className="border border-tertiary py-3 px-5">
              <h1 className="text-tertiary">{skill}</h1>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
