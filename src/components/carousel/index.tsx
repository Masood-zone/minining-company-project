import { useCallback, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slides } from "./data";

export default function MiningCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredNav, setHoveredNav] = useState<"prev" | "next" | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  }, []);

  const getPrevIndex = () =>
    currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
  const getNextIndex = () =>
    currentIndex === slides.length - 1 ? 0 : currentIndex + 1;

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div
      className="relative w-full h-[90dvh] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <AnimatePresence initial={false} custom={currentIndex}>
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={slides[currentIndex].image}
            alt={slides[currentIndex].title}
            className="w-full h-full object-cover"
          />
          {/* <div className="absolute inset-0 bg-black bg-opacity-40" /> */}
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white w-[80%] px-20 m-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-4xl font-bold mb-4 w-[500px] leading-normal tracking-wider"
            >
              {slides[currentIndex].title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-2xl font-[600] mb-8 py-4"
            >
              {slides[currentIndex].subtitle}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-yellow-500 text-white font-bold py-8 px-10 hover:bg-blue-400 transition-colors duration-300"
            >
              VIEW MORE
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        onClick={prevSlide}
        onMouseEnter={() => setHoveredNav("prev")}
        onMouseLeave={() => setHoveredNav(null)}
        className="absolute left-0 top-80 bottom-0 flex items-center justify-center group h-10"
        aria-label="Previous slide"
      >
        <motion.div
          className="bg-black bg-opacity-50 text-white  flex items-center overflow-hidden"
          initial={{ width: 60 }}
          animate={{
            width: hoveredNav === "prev" ? 160 : 60,
            height: hoveredNav === "prev" ? 60 : 60,
          }}
          transition={{ duration: 0.3 }}
        >
          <ChevronLeft className="w-8 h-8 " />
          {hoveredNav === "prev" && (
            <div className="ml-4 overflow-hidden">
              <img
                src={slides[getPrevIndex()].image}
                alt="Previous slide"
                className="w-full h-16 object-cover"
              />
            </div>
          )}
        </motion.div>
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setHoveredNav("next")}
        onMouseLeave={() => setHoveredNav(null)}
        className="absolute right-0 top-80 bottom-0 flex items-center justify-center group h-10"
        aria-label="Next slide"
      >
        <motion.div
          className="bg-black bg-opacity-50 text-white  flex items-center gap-2 overflow-hidden"
          initial={{ width: 60 }}
          animate={{
            width: hoveredNav === "next" ? 160 : 60,
            height: hoveredNav === "next" ? 60 : 60,
          }}
          transition={{ duration: 0.3 }}
        >
          {hoveredNav === "next" && (
            <div className="overflow-hidden">
              <img
                src={slides[getNextIndex()].image}
                alt="Next slide"
                className="w-full h-16 object-cover"
              />
            </div>
          )}
          <ChevronRight className="w-8 h-8" />
        </motion.div>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex
                ? "bg-yellow-500"
                : "bg-white bg-opacity-50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
