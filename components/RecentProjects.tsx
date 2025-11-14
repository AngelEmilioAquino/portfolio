"use client";

import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";

const RecentProjects = () => {
  return (
    <section id="proyectos" className="scroll-mt-100">
      <div className="py-20">
        <h1 className="heading text-center">
          Mis Proyectos <span className="text-purple">y Colaboraciones</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item) => (
            <div
              key={item.id}
              className="lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer
                title={item.title}
                href={item.link || "#"}
                className="text-center items-center"
              >
                <a
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[25vh] lg:h-[35vh] mb-4 group rounded-3xl"
                >
                  <div className="absolute inset-0 bg-[#13162D]" />

                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover z-10 scale-100 transition-transform duration-500 ease-out group-hover:brightness-105"
                  />

                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-30 transition-opacity duration-500 z-20" />
                </a>

                <a
                  href={item.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 hover:text-purple transition-colors"
                >
                  {item.title}
                </a>

                <p
                  className="lg:text-lg font-light text-sm text-[#BEC1DD] line-clamp-2 mt-2"
                >
                  {item.des}
                </p>

                <div className="flex items-center justify-between mt-7 mb-3 w-full">
                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => (
                      <div
                        key={index}
                        className="border border-white/20 rounded-full bg-black/90 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index + 2}px)`,
                        }}
                      >
                        <img
                          src={icon}
                          alt={`icon-${index}`}
                          className="p-2"
                        />
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        className="border border-white/20 rounded-full bg-black/90 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center hover:scale-125 transition-transform duration-300"
                      >
                        <FaLink size={20} />
                      </a>
                    )}
                    {item.githubLink && (
                      <a
                        href={item.githubLink}
                        target="_blank"
                        className="border border-white/20 rounded-full bg-black/90 lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center hover:scale-125 transition-transform duration-300"
                      >
                        <FaGithub size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;


