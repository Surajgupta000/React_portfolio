import React from 'react'
import { projects } from '../../resources/projects';
import Tsection from '../../components/Tsection';

export default function Projects() {
    const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
  return (
    <div>
     <Tsection title= "Projects"/>
     <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/3 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((projects, index) => (
            <div
              onClick={() => {
                setselectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5
                  ${
                    selectedItemIndex === index
                      ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#a0eed15f] py-3"
                      : "text-white"
                  }`}
              >
                {projects.title}
              </h1>
            </div>
          ))}
        </div>


        <div className='flex items-center justify-center gap-10 sm:flex-col'>
            <img src= {projects[selectedItemIndex].image} alt='' className='h-60 w-72'/>
        <div className="flex flex-col gap-5">
          <h1 className="text-seconadry text-2xl">
            {projects[selectedItemIndex].title}
          </h1>
         
          <h1 className="text-white text-2xl">
            {projects[selectedItemIndex].description}
          </h1>
         
        </div>
        </div>
      </div>
    </div>
  )
}
