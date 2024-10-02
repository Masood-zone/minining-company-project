"use client";

import { MapPin } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { project1, project2, project3, project4 } from "../../assets/images";

const projects = [
  {
    id: 1,
    title: "Midland Phosphate Mine: Mining Machinery & Additional Services",
    location: "TEXAS",
    description:
      "We are providing this mine with some heavy machinery and contract mining services.",
    image: project1,
  },
  {
    id: 2,
    title:
      "Dickinson Iron Ore Mine Engineering, Procurement, and Equipment Setup",
    location: "NORTH DAKOTA",
    description:
      "This project included improvements that allowed the mine to process better ore with more fines.",
    image: project2,
  },
  {
    id: 3,
    title: "Copper Mountain Mine Expansion",
    location: "BRITISH COLUMBIA",
    description:
      "Our team provided engineering services for the expansion of this open-pit copper mine.",
    image: project3,
  },
  {
    id: 4,
    title: "Gold Fields Ghana Limited: Process Plant Optimization",
    location: "GHANA",
    description:
      "We implemented advanced process control systems to optimize gold recovery rates.",
    image: project4,
  },
];

export default function LatestProjects() {
  return (
    <div className="relative py-12">
      <div className="absolute inset-0 bg-latest bg-opacity-50 h-[75dvh] -z-10"></div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl text-center mb-6 md:mb-10 text-white font-bold">
        Latest Projects
      </h2>
      <div className="container mx-auto mt-8 md:mt-16 px-4 md:px-0">
        <Carousel projects={projects} />
      </div>
    </div>
  );
}

function Carousel({
  projects,
}: {
  projects: {
    id: number;
    title: string;
    location: string;
    description: string;
    image: string;
  }[];
}) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="mySwiper"
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      }}
    >
      {projects.map((project) => (
        <SwiperSlide key={project.id}>
          <ProjectCard project={project} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

function ProjectCard({
  project,
}: {
  project: {
    id: number;
    title: string;
    location: string;
    description: string;
    image: string;
  };
}) {
  return (
    <div className="p-2">
      <div className="h-48 md:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover scale-125 transition-transform transform hover:scale-110 duration-300"
        />
      </div>
      <div className="rounded-none pt-8 relative">
        <div className="absolute top-6 mx-auto right-0 left-0 w-5 h-5 -rotate-45 border-t-4 border-r-4 border-[#fff] border-b-4 border-l-4"></div>
        <div className="bg-white flex flex-col items-start gap-3 p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-medium mt-2 md:mt-3">
            {project.title}
          </h3>
          <p className="text-[#eeaf5e] flex items-center gap-2 text-xs md:text-sm">
            <span>
              <MapPin color="#eeaf5e" size={16} />
            </span>
            {project.location}
          </p>
          <p className="text-gray-600 text-sm md:text-base">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
