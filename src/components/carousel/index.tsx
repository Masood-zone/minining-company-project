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
          <div className="absolute inset-0 flex flex-col justify-center items-start text-white w-full px-4 sm:px-8 md:px-12 lg:px-20 m-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 leading-tight sm:leading-normal tracking-wide sm:tracking-wider max-w-full sm:max-w-[500px]"
            >
              {slides[currentIndex].title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl font-semibold mb-4 sm:mb-6 md:mb-8 py-2 sm:py-3 md:py-4"
            >
              {slides[currentIndex].subtitle}
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="bg-yellow-500 text-white font-bold py-4 sm:py-6 md:py-8 px-6 sm:px-8 md:px-10 hover:bg-blue-400 transition-colors duration-300 text-sm sm:text-base md:text-lg"
              onClick={() => (window.location.href = "/services")}
            >
              VIEW MORE
            </motion.button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Arrow navigation - hidden on mobile, visible on sm and above */}
      <div className="hidden sm:block">
        <button
          onClick={prevSlide}
          onMouseEnter={() => setHoveredNav("prev")}
          onMouseLeave={() => setHoveredNav(null)}
          className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center justify-center group h-10"
          aria-label="Previous slide"
        >
          <motion.div
            className="bg-black bg-opacity-50 text-white flex items-center overflow-hidden"
            initial={{ width: 40, height: 40 }}
            animate={{
              width: hoveredNav === "prev" ? 120 : 40,
              height: hoveredNav === "prev" ? 60 : 40,
            }}
            transition={{ duration: 0.3 }}
          >
            <ChevronLeft className="w-8 h-8" />
            {hoveredNav === "prev" && (
              <div className="ml-2 overflow-hidden">
                <img
                  src={slides[getPrevIndex()].image}
                  alt="Previous slide"
                  className="w-full h-12 object-cover"
                />
              </div>
            )}
          </motion.div>
        </button>

        <button
          onClick={nextSlide}
          onMouseEnter={() => setHoveredNav("next")}
          onMouseLeave={() => setHoveredNav(null)}
          className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center group h-10"
          aria-label="Next slide"
        >
          <motion.div
            className="bg-black bg-opacity-50 text-white flex items-center gap-2 overflow-hidden"
            initial={{ width: 40, height: 40 }}
            animate={{
              width: hoveredNav === "next" ? 120 : 40,
              height: hoveredNav === "next" ? 60 : 40,
            }}
            transition={{ duration: 0.3 }}
          >
            {hoveredNav === "next" && (
              <div className="overflow-hidden">
                <img
                  src={slides[getNextIndex()].image}
                  alt="Next slide"
                  className="w-full h-12 object-cover"
                />
              </div>
            )}
            <ChevronRight className="w-8 h-8" />
          </motion.div>
        </button>
      </div>

      {/* Dot navigation - visible on all screen sizes */}
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
