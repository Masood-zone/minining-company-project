import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";

function History() {
  const [activeYear, setActiveYear] = useState(2023);
  const [showModal, setShowModal] = useState(false);
  const years = [2023, 2015, 2012, 2005];
  const history = [
    {
      id: 1,
      title: "Recognition of sustainable petroleum solutions",
      description:
        "We have been recognized by the United Nations for our sustainable petroleum solutions.",
      year: 2023,
    },
    {
      id: 2,
      title: "Opening new offices in European countries",
      description:
        "Ire cito ducunt ad neuter ratione. Nunquam transferre mortem. Tumultumque de placidus burgus, carpseris mons! Index de velox fuga, acquirere solitudo.",
      year: 2015,
    },
    {
      id: 3,
      title: "National expansion and promotion of our services",
      description:
        "Historia de azureus index, perdere messor! Abactor raptus mensa est. Heu, uria! Regius, noster bubos virtualiter resuscitabo de clemens, velox pars.",
      year: 2012,
    },
    {
      id: 4,
      title: "The beginning of Mining Company success",
      description:
        "Cottas credere! Canis de neuter tabes, convertam contencio! Nunquam consumere triticum. Cum nomen favere, omnes byssuses carpseris nobilis, dexter.",
      year: 2005,
    },
  ];

  const handleModalToggle = () => {
    setShowModal(!showModal);
  };

  return (
    <section className="w-full bg-gray-200 my-10 overflow-hidden md:p-0 pb-10">
      <div className="flex flex-col md:flex-row items-start w-full">
        {/* History */}
        <div className="w-full md:w-1/2 h-full flex flex-col">
          <div className="flex flex-col h-full p-5 md:p-10">
            <div className="mb-8 flex-none">
              <h2 className="text-4xl font-bold mb-4">OUR HISTORY</h2>
            </div>
            <div className="mb-8 flex-1">
              <AnimatePresence mode="wait">
                {history.map(
                  (item) =>
                    item.year === activeYear && (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5 }}
                      >
                        <h3 className="text-2xl font-semibold mb-4">
                          {item.title}
                        </h3>
                        <p className="text-gray-600">{item.description}</p>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
            </div>
          </div>
          {/* Year length */}
          <div className="relative mr-10">
            <div className="absolute w-full h-1 bg-blue-500 top-4"></div>
            <div className="flex justify-between relative">
              {years.map((year) => (
                <button
                  key={year}
                  className={`w-8 h-8 rounded-full ${
                    activeYear === 2023 ? "ml-10" : "ml-10"
                  } ${
                    //I want to show a dot in the active year
                    activeYear === year ? "bg-blue-500" : "bg-white"
                  } border-4 border-blue-500 focus:outline-none transition-colors duration-300 z-10`}
                  onClick={() => setActiveYear(year)}
                >
                  <span className="sr-only">{year}</span>
                </button>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              {years.map((year) => (
                <span
                  key={year}
                  className={`text-sm font-medium ${year === 2023 && "ml-10"}`}
                >
                  {year}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Background image with motion effect */}
        <div className="relative md:w-1/2 md:h-[550px] h-72 overflow-hidden w-96 md:ml-auto mx-auto md:mt-0 mt-8">
          <motion.div
            className="absolute inset-0 bg-no-repeat bg-center bg-cover"
            style={{
              backgroundImage: `url(https://ld-wt73.template-help.com/wt_prod-10987/theme/images/about-5-1110x710.jpg)`,
            }}
            animate={{
              backgroundPosition: ["50% 50%", "70% 50%", "50% 50%"],
            }}
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          ></motion.div>
          <div className="absolute bottom-0 right-0 bg-white p-4 ">
            <h3 className="text-lg font-semibold">HOW WE</h3>
            <div className="max-md:hidden group">
              <p
                onClick={handleModalToggle}
                className="text-3xl font-bold flex items-center cursor-pointer"
              >
                WORK
                <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Play />
                </span>
              </p>
            </div>
            <div className="md:hidden block cursor-pointer">
              <p
                onClick={handleModalToggle}
                className="text-3xl font-bold flex items-center"
              >
                WORK
                <Play />
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
          <div className="bg-white p-10 w-[90%] md:w-1/2 relative">
            {/* X button */}
            <button
              onClick={handleModalToggle}
              className="absolute top-5 right-5 focus:outline-none"
            >
              <X />
            </button>

            <h2 className="text-2xl font-semibold">How we work</h2>
            {/* YouTube embedded video here */}
            <div className="aspect-video mt-5 relative">
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent border-solid rounded-full animate-spin"></div>
              </div>
              <iframe
                src="https://www.youtube.com/embed/7e90gBu4pas"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
                loading="lazy"
                onLoad={(e) => {
                  const spinner = e.currentTarget.previousSibling;
                  if (spinner) spinner.remove();
                }}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default History;
