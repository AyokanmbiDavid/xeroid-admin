"use client";

import React from "react";
import { Wrench, ArrowRight } from "lucide-react";
const projects = () => {
  const project = [
    {
      name: "Portfolio App",
      link: "https://ayokanmbi-david-portfolio.vercel.app/",
      img: "/images/img1.png",
    },
    {
      name: "Xeroid Movie App",
      link: "https://xeroid-movies.vercel.app/",
      img: "/images/img3.png",
    },
    {
      name: "Xeroid News",
      link: "https://xeroid-news.vercel.app/",
      img: "/images/img4.png",
    },
    {
      name: "Xeroid Task Tracker",
      link: "https://xeroid-task-tracker.vercel.app/",
      img: "/images/img2.png",
    },
  ];
  return (
    <div className="h-screen overflow-y-auto w-full p-3 px-7">
      <h1 className="text-sm font-bold flex gap-3 items-center">
        <Wrench size={15} /> PROJECTS
      </h1>

      <div className="mt-5 grid sm:grid-cols-3 grids-col-1 gap-3 max-md:gap-4">
        {project.map((item, e) => (
          <div className="w-full relative p-2 border dark:border-gray-600 rounded-3xl dark:bg-gray-800  border-gray-200">
            <img
              src={item.img}
              alt={item.name}
              className="w-full h-60 bg-gray-100 object-cover rounded-3xl"
            />
            {/* name */}
            <div className="absolute top-5 right-5 flex flex-col items-end  text-[#005fa3]">
              <span className="rounded-full bg-transparent backdrop-blur-md text-xs p-3">
                {item.name}
              </span>
              <span className="rounded-full mt-1 backdrop-blur-md bg-[#005fa3]/70 text-white text-xs p-2">
                update coming soon
              </span>
            </div>
            {/* copyright */}
            <h1 className="text-xs my-3 font-semibold dark:text-white text-gray-600">
              copyright issued, do not copy website 
            </h1>
            {/* visit */}
            <div className="flex w-full justify-end mt-5">
              <a
                href={item.link}
                className="flex items-center gap-3 p-2 rounded-full bg-yellow-600 text-white text-sm font-semibold"
              >
                visit
                <span className="rotate-[320deg]">
                  <ArrowRight />
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default projects;
