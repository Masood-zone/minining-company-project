import { useState } from "react";
import { useParams } from "react-router-dom";
import { projects } from "../../components/offers/data";
import {
  Calendar,
  DollarSign,
  MapPinIcon as MapPinMinusIcon,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceNotFound from "../notfound/service-notfound";

function ProjectsIndex() {
  const { id } = useParams();
  const project = projects.find((project) => project.id === Number(id));
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) {
    return <ServiceNotFound />;
  }

  const nextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.5 }}
      >
        {project.title}
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4 text-base md:text-lg">{project.description}</p>
          </motion.div>
          <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-between items-start">
            <div className="flex space-x-4">
              {/* Social media buttons */}
              <button
                aria-label="Share on Facebook"
                className="text-blue-600 hover:text-blue-800"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                aria-label="Share on Twitter"
                className="text-blue-400 hover:text-blue-600"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
            </div>
            <motion.button
              className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-yellow-400 transition-colors duration-300 text-sm sm:text-base"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              CONTACT US
            </motion.button>
          </div>
        </div>

        <div className="mt-8 lg:mt-0">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={project.images[currentImageIndex]}
                alt={`Project image ${currentImageIndex + 1}`}
                className="w-full h-64 md:h-96 object-cover rounded-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              />
            </AnimatePresence>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6 text-gray-800" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all duration-200"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6 text-gray-800" />
            </button>
          </div>
          <motion.div
            className="flex justify-center mt-4 space-x-2 overflow-x-auto pb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {project.images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover cursor-pointer rounded-md ${
                  index === currentImageIndex ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <ServiceDetails
        client="Smith Ltd."
        year="2010"
        location={project.location}
        value="$1,299,525.00"
      />
    </motion.div>
  );
}

export default ProjectsIndex;

function ServiceDetails({
  client,
  year,
  location,
  value,
}: {
  client: string;
  year: string;
  location: string;
  value: string;
}) {
  return (
    <motion.div
      className="w-full lg:w-[600px] ml-auto p-6 mt-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ul className="space-y-4">
        <li className="flex items-center space-x-4 border p-4 rounded-lg">
          <User className="text-blue-500 w-5 h-5" />
          <span>
            <strong className="mr-2">Client:</strong> {client}
          </span>
        </li>
        <li className="flex items-center space-x-4 border p-4 rounded-lg">
          <Calendar className="text-blue-500 w-5 h-5" />
          <span>
            <strong className="mr-2">Year:</strong> {year}
          </span>
        </li>
        <li className="flex items-center space-x-4 border p-4 rounded-lg">
          <MapPinMinusIcon className="text-blue-500 w-5 h-5" />
          <span>
            <strong className="mr-2">Location:</strong> {location}
          </span>
        </li>
        <li className="flex items-center space-x-4 border p-4 rounded-lg">
          <DollarSign className="text-blue-500 w-5 h-5" />
          <span>
            <strong className="mr-2">Value:</strong> {value}
          </span>
        </li>
      </ul>
    </motion.div>
  );
}
