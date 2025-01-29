"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/core";

import "@splidejs/react-splide/css";

const PROJECTS = [
  {
    id: 1,
    name: "Blitzkrieg",
    description: `A feature-rich, browser-based Integrated Development Environment (IDE) designed to streamline the coding experience for developers. Built with modern web technologies, the IDE supports multiple programming languages, intelligent code completion, syntax highlighting, and live previews. It offers an intuitive interface with customizable themes, integrated version control, and debugging tools to boost productivity. The project demonstrates proficiency in building scalable and user-friendly front-end applications while ensuring seamless developer workflows.

.`,
    link: "https://blitzkrieg-beryl.vercel.app/",
    images: [
      "/assets/projects-screenshots/blitzkrieg/1.png",
      "/assets/projects-screenshots/blitzkrieg/2.png",
      "/assets/projects-screenshots/blitzkrieg/3.png",
      "/assets/projects-screenshots/blitzkrieg/4.png",
      "/assets/projects-screenshots/blitzkrieg/5.png",
    ],
  },
  {
    id: 2,
    name: "Dandelions",
    description: `A web application that allows users to download and personalize their folder icons with a variety of custom designs. This platform offers a simple and intuitive interface where users can browse through a collection of pre-designed icons or upload their own designs. The app supports customization options, including color schemes, styles, and icon shapes, making it easy to organize and personalize digital files. It showcases a seamless user experience, powered by modern web technologies, and offers fast, high-quality downloads of customized folder icons.`,
    link: "https://dandelionsicons.vercel.app/",
    images: [
      "/assets/projects-screenshots/dandelions/1.png",
      "/assets/projects-screenshots/dandelions/2.png",
      "/assets/projects-screenshots/dandelions/3.png",
      "/assets/projects-screenshots/dandelions/4.png",
    ],
  },
  {
    id: 3,
    name: "CodeForces Statistics ",
    description: `Community driven, highly customizable, no-code tool to stress test Codeforces user profiles. Capable of generating the comparison between user profiles and their ratings , with 100% accuracy. Techstack consisted of HTML, Tailwind CSS, JavaScript, React.js, MongoDB.`,
    link: "https://code-forces-visualiser-7s4l.vercel.app/individual",
    images: [
      "/assets/projects-screenshots/cf/1.png",
      "/assets/projects-screenshots/cf/2.png",
      "/assets/projects-screenshots/cf/3.png",
      "/assets/projects-screenshots/cf/4.png",
      "/assets/projects-screenshots/cf/5.png",
    ],
  },
  {
    id: 4,
    name: "Path Visualizer",
    description: `Developed a high-performing coding website, enabling users to find the path from source to destination using different searching algorithms. Leveraged A* Algorithm and Dijsktra Algorithm for finding the optimal path. Frontend is built in ReactJS and Material UI, Backend in Node.js, Express.js and DataBase is MongoDB.`,
    link: "https://sagar20-12.github.io/Path-Visualizer/",
    images: ["/assets/projects-screenshots/pathvisual/1.png"],
  },
];
function Page() {
  return (
    <>
      <div className="container mx-auto md:px-[50px] xl:px-[150px] text-zinc-300 h-full">
        <h1 className="text-4xl mt-[100px] mb-[50px]">Projects</h1>
        <ul className="grid  md:grid-cols-2 lg:grid-cols-3 gap-10 place-content-around ">
          {PROJECTS.map((project) => (
            <li
              className="w-[300px] h-[400px] border-[.5px] rounded-md border-zinc-600"
              key={project.id}
              style={{ backdropFilter: "blur(2px)" }}
            >
              <div className="h-[200px]">
                <Splide
                  options={{
                    type: "loop",
                    interval: 3000,
                    autoplay: true,
                    speed: 2000,
                    perMove: 1,
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                  aria-label="My Favorite Images"
                >
                  {project.images.map((image) => (
                    <SplideSlide key={image}>
                      <Image
                        src={image}
                        alt={`screenshot of "${project.name}`}
                        className="w-[300px] h-[200px] rounded-md bg-zinc-900 "
                        width={300}
                        height={400}
                        style={{ height: "200px" }}
                      />
                    </SplideSlide>
                  ))}
                </Splide>
              </div>
              <div className="p-4 text-zinc-300">
                <h2 className="text-xl">{project.name}</h2>
                <p className="mt-2 text-xs text-zinc-500">
                  {project.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Page;
