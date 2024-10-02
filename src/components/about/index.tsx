import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Users, Leaf, PenToolIcon } from "lucide-react";
import { about1, about2, about3 } from "../../assets/images";

const sections = [
  { id: "values", title: "COMPANY VALUES" },
  { id: "mission", title: "OUR MISSION" },
  { id: "vision", title: "OUR VISION" },
  { id: "report", title: "VIEW REPORT" },
];

const values = [
  {
    icon: PenToolIcon,
    title: "Integrity",
    description:
      "We have an uncompromising commitment to ethics and zero harm. We care about everyone.",
  },
  {
    icon: CheckCircle,
    title: "Respect",
    description:
      "We hold each other, our customers, and the industries we serve in the highest regard.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "We work together to achieve results and to solve your toughest challenges.",
  },
  {
    icon: Leaf,
    title: "Diversity",
    description:
      "We appreciate our differences and embrace a broad range of perspectives and cultures.",
  },
];

export default function AboutCompany() {
  const [activeSection, setActiveSection] = useState("values");
  //   const [isOpen, setIsOpen] = useState(false);

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
                className={`block w-full text-left py-2 px-4 rounded mb-2 ${
                  activeSection === section.id
                    ? "bg-yellow-500 text-white"
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
                      <div className="bg-yellow-500 rounded-full p-3 mr-4">
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
              {activeSection === "mission" && (
                <motion.div
                  key="mission"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row"
                >
                  <img
                    src={about2}
                    alt="Mining worker"
                    className="w-full max-sm:h-44 md:w-1/3 object-cover mb-4 md:mb-0 md:mr-6"
                  />
                  <div>
                    <h3 className="font-bold text-2xl mb-4">Our Mission</h3>
                    <p className="text-gray-600">
                      We are a responsible mining corporation that discovers and
                      processes minerals and energy resources for the use of
                      society. Our company partners directly with customers to
                      enable them to achieve zero harm, the highest production,
                      and the lowest lifecycle cost for their mining operations,
                      while making every customer a reference.
                    </p>
                    <motion.button
                      className="mt-4 text-yellow-500 hover:underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                    </motion.button>
                  </div>
                </motion.div>
              )}
              {activeSection === "vision" && (
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
                      className="mt-4 text-yellow-500 hover:underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                    </motion.button>
                  </div>
                </motion.div>
              )}
              {activeSection === "report" && (
                <motion.div
                  key="report"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col md:flex-row"
                >
                  <img
                    src={about3}
                    alt="Mined rocks"
                    className="w-full md:w-1/3 max-sm:h-44 object-cover mb-4 md:mb-0 md:mr-6"
                  />
                  <div>
                    <h3 className="font-bold text-2xl mb-4">
                      2023 Annual Report
                    </h3>
                    <p className="text-gray-600">
                      We began this year with a celebration of our 50 years in
                      business, a milestone that is particularly significant for
                      a mining company. We ended the year strongly with the most
                      silver production and the highest revenue in our company's
                      history. The 17.2 million ounces of silver we produced
                      marked our third year of record-breaking production.
                    </p>
                    <motion.button
                      className="mt-4 text-yellow-500 hover:underline"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Read More
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
