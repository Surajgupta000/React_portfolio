import React from "react";
import Tsection from "../../components/Tsection";

export default function About() {
    const skills=[
        "Javascript",
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Java",
        ".Net"
    ]
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
          <p className="text-white ">
            • Minimum criteria- Any engineering stream of B.E/B.Tech /ME/ Mtech
            or MCA or MSc (CS/IT) with Year of Passout being 2021/ 2022/ 2023/
            2024 • Completed the relevant degree in the stipulated duration of
            the degree. For example, B.Tech in 4 years or M.Tech/MSc in 2 years
            timeframe • No active backlogs in university during the recruitment
            process • Should not have appeared for any Accenture recruitment
            assessm
          </p>
          <p className="text-white ">
            • Minimum criteria- Any engineering stream of B.E/B.Tech /ME/ Mtech
            or MCA or MSc (CS/IT) with Year of Passout being 2021/ 2022/ 2023/
            2024 • Completed the relevant degree in the stipulated duration of
            the degree. For example, B.Tech in 4 years or M.Tech/MSc in 2 years
            timeframe • No active backlogs in university during the recruitment
            process • Should not have appeared for any Accenture recruitment
            assessm
          </p>
        </div>
      </div>
      
      <div className="py-5">
        <h1 className="text-tertiary text-xl">
           Here are few Technologies i have working on.
        </h1>
        
        <div className="flex flex-wrap gap-10 mt-5 "> 
          {skills.map((skill, index) => (
            <div key={index} className="border border-tertiary py-3 px-5">
              <h1 className="text-tertiary">{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
