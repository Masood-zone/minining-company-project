import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { logo } from "../../assets/images";
import { values } from "./data";
import { useNavigate } from "react-router-dom";

const sections = [
  { id: "about-ramoth", title: "ABOUT RAMOTH" },
  { id: "values", title: "COMPANY VALUES" },
  // { id: "vision", title: "OUR VISION" },
  // { id: "report", title: "VIEW REPORT" },
];

export function AboutCompany() {
  const [activeSection, setActiveSection] = useState("about-ramoth");
  //   const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="relative bg-white md:shadow-lg rounded-lg overflow-hidden md:mt-[-100px] mx-auto max-w-6xl z-10">
      <motion.div className="h-40 bg-gray-100">
        <div className="container mx-auto px-6 py-4 flex items-center justify-center h-full">
          <motion.h2 className="text-3xl font-bold flex items-center justify-center cursor-pointer">
            About Company
          </motion.h2>
        </div>
      </motion.div>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col md:flex-row"
        >
          <div className="w-full md:w-1/4 bg-gray-100 p-6 ">
            {sections.map((section) => (
              <motion.button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`block w-full text-left py-2 px-4 rounded-none mb-2 ${
                  activeSection === section.id
                    ? "bg-[#f0730c] text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {section.title}
              </motion.button>
            ))}
          </div>
          <div className="w-full md:w-3/4 p-6">
            <AnimatePresence mode="wait">
              {activeSection === "values" && (
                <motion.div
                  key="values"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6 "
                >
                  {values.map((value, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <div className="bg-[#f0730c] rounded-full p-3 mr-4">
                        <value.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600">{value.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
              {activeSection === "about-ramoth" && (
                <motion.div
                  key="about-ramoth"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row"
                >
                  <img
                    src={logo}
                    alt="Mining worker"
                    className="w-full max-sm:h-44 md:w-1/3 object-cover mb-4 md:mb-0 md:mr-6"
                  />
                  <div>
                    <h3 className="font-bold text-2xl mb-4">About Ramoth</h3>
                    <p className="text-gray-600">
                      We are a civil and geotechnical engineering and building
                      construction company. We are also specialized in the
                      acquisition and sales of heavy mining and earth moving
                      equipment such as bulldozers, excavators, motor graders,
                      front end loader, crushing plants and etc As part of our
                      operations, we do undertake maintenance works on all heavy
                      mining and earth moving equipment.
                    </p>
                    <motion.button
                      className="mt-4 text-[#f0730c] hover:underline"
                      onClick={() => navigate("/about")}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                    </motion.button>
                  </div>
                </motion.div>
              )}
              {/* {activeSection === "vision" && (
                <motion.div
                  key="vision"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row"
                >
                  <img
                    src={about1}
                    alt="Mined rocks"
                    className="w-full max-sm:h-56 md:w-1/3 object-cover mb-4 md:mb-0 md:mr-6"
                  />
                  <div>
                    <h3 className="font-bold text-2xl mb-4">Our Vision</h3>
                    <p className="text-gray-600">
                      Our vision is to be a highly respected, world-class
                      natural-resource company committed to deliver excellent
                      value to its investors, employees, and other stakeholders.
                      We aspire to be a world-class service company delivering
                      the most reliable and efficient products, systems, and
                      solutions that solve the toughest mining challenges.
                    </p>
                    <motion.button
                      className="mt-4 text-[#f0730c] hover:underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                    </motion.button>
                  </div>
                </motion.div>
              )} */}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
