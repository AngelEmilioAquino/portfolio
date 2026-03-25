"use client";

import { FaGithub } from "react-icons/fa";
import { FaLink, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { projects } from "@/data";
import { PinContainer } from "./ui/Pin";
import { useState } from "react";

const RecentProjects = () => {

const ITEMS_PER_PAGE = 4;
const [currentPage, setCurrentPage] = useState(1);

const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
const currentProjects = projects.slice(
  startIndex,
  startIndex + ITEMS_PER_PAGE
);

  return (
    <section id="projects" className="scroll-mt-100">
      <div className="py-20">
        <h1 className="heading text-center">
          My Projects <span className="text-purple">and Collaborations</span>
        </h1>

        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {currentProjects.map((item) => (
            <div
              key={item.id}
              className="lg:min-h-[32.5rem] h-[25rem] flex flex-col items-center justify-center sm:w-96 w-[80vw]"
            >
              <PinContainer
                title={item.title}
                {...(item.link ? { href: item.link } : {})}
                className="text-center items-center"
              >
                {item.link ? (
                  <a
                    href={item.link}
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
                ) : (
                  <div
                    className="block relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[25vh] lg:h-[35vh] mb-4 group rounded-3xl"
                    aria-hidden="true"
                  >
                    <div className="absolute inset-0 bg-[#13162D]" />

                    <img
                      src={item.img}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover z-10 scale-100 transition-transform duration-500 ease-out"
                    />

                    <div className="absolute inset-0 bg-black/10 opacity-0 transition-opacity duration-500 z-20" />
                  </div>
                )}

                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 hover:text-purple transition-colors"
                  >
                    {item.title}
                  </a>
                ) : (
                  <div className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 text-white">
                    {item.title}
                  </div>
                )}

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

        <div className="flex justify-center items-center gap-4 mt-16 flex-wrap">

          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center
              border border-white/20 transition-all duration-300
              ${
                currentPage === 1
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-110 hover:bg-white/10"
              }
            `}
          >
            <FaChevronLeft />
          </button>

          {Array.from({ length: totalPages }).map((_, index) => {
            const page = index + 1;
            const isActive = page === currentPage;

            return (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  text-sm font-medium transition-all duration-300
                  border border-white/20
                  ${
                    isActive
                      ? "bg-transparent text-white scale-125 shadow-lg shadow-white/20"
                      : "text-white/70 hover:bg-white/10 hover:scale-105"
                  }
                `}
              >
                {page}
              </button>
            );
          })}

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`
              w-10 h-10 rounded-full flex items-center justify-center
              border border-white/20 transition-all duration-300
              ${
                currentPage === totalPages
                  ? "opacity-40 cursor-not-allowed"
                  : "hover:scale-110 hover:bg-white/10"
              }
            `}
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default RecentProjects;


