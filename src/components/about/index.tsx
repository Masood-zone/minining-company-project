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

export function AboutCompany() {
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
                className={`block w-full text-left py-2 px-4 rounded-none mb-2 ${
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

export function CompanyValues() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sections = [
    { id: "about", title: "About us" },
    { id: "mission", title: "OUR MISSION" },
    { id: "goals", title: "OUR GOALS" },
    { id: "values", title: "Company values" },
  ];
  const data = [
    {
      id: 1,
      title: "A few words about us",
      description:
        "We are a responsible mining corporation that discovers and processes minerals and energy resources for the use of society. Our company partners directly with customers to enable them to achieve zero harm, the highest production, and the lowest lifecycle cost for their mining operations, while making every customer a reference.",
      image:
        "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/about-1-835x418.jpg",
    },
    {
      id: 2,
      title: "Satisfying growing energy needs",
      description:
        "Velum foris ducunt ad audax elogium. Sunt galluses imperium gratis, bi-color demolitionees. Tata, bursa, et tabes. Cum urbs favere, omnes mortemes desiderium brevis, azureus magisteres. Rusticus barcas superbe talems bulla est. Epos placidus finis est. Primus fraticinida mechanice quaestios demolitione est. Lacteas crescere, tanquam albus hippotoxota. Capios sunt mensas de varius caesium. Planeta gratis resistentia est. Cur devirginato persuadere? Cum ionicis tormento velum, omnes hilotaees imperium gratis, flavum nuclear vexatum iacerees. Cum burgus trabem, omnes buboes visum. Cum fiscina persuadere, omnes hippotoxotas assimilatio superbus, camerarius hippotoxotas.",
      image:
        "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/about-2-835x418.jpg",
    },
    {
      id: 3,
      title: "Creating energy for the future",
      description:
        "Est fatalis planeta, cesaris. Lixas unda in sala! Est secundus resistentia, cesaris. Dexter, nobilis sensorems grauiter manifestum de secundus, azureus tumultumque. Ratione, particula, et lumen.Ubi est camerarius tabes? Salvus elevatuss ducunt ad zeta. Pol, a bene tata, fatalis resistentia! Ecce, navis! Nuptia de flavum mineralis, acquirere medicina! A falsis, spatii nobilis candidatus. Cum luna congregabo, omnes tabeses demitto lotus, placidus gloses. Ubi est varius clabulare? Calceuss sunt poetas de superbus galatae. Magnum, salvus habenas rare acquirere de rusticus, barbatus abnoba.",
      image:
        "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/about-3-835x418.jpg",
    },
    {
      id: 4,
      title: "Our General Business principles",
      description:
        "Ubi est bassus mortem? Speciess sunt boreass de ferox cursus. Cum liberi messis, omnes demolitionees anhelare neuter, talis heureteses. Audax imber sed mire imperiums devirginato est.A falsis, demolitione varius extum. Ecce. Ubi est dexter luna? Cur extum observare? Velox byssus absolute reperires historia est. Lamias messis in gratis quadrata! Germanus, salvus fluctuss mechanice magicae de bi-color, grandis tata. Sunt bursaes quaestio superbus, peritus eraes. Quadras favere in castus cubiculum! Cum cotta prarere, omnes tataes carpseris castus, talis habitioes.",
      image:
        "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/about-4-835x418.jpg",
    },
  ];
  return (
    <section className="container mx-auto py-16">
      <div className="flex flex-col md:flex-row-reverse md:gap-5 gap-7">
        {/* Sections */}
        <div className="w-full md:w-1/4 md:h-64">
          <h2 className="text-2xl mb-4 max-md:text-center">
            20+ years of experience
          </h2>
          <div className="bg-gray-100 p-6 hidden md:block">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() =>
                  setActiveIndex(sections.findIndex((s) => s.id === section.id))
                }
                className={`block w-full text-left py-2 px-4 rounded mb-2 uppercase ${
                  activeIndex === sections.findIndex((s) => s.id === section.id)
                    ? "bg-yellow-500 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {section.title}
              </button>
            ))}
          </div>
          {/* Navbar like mobile view */}
          <div className="md:hidden flex flex-wrap items-center justify-center gap-2">
            {sections.map((section) => (
              <div key={section.id}>
                <button
                  onClick={() =>
                    setActiveIndex(
                      sections.findIndex((s) => s.id === section.id)
                    )
                  }
                  className={`block w-full md:text-left md:py-2 px-4 md:rounded text-sm mb-2 uppercase ${
                    activeIndex ===
                    sections.findIndex((s) => s.id === section.id)
                      ? "border-b-4 border-b-yellow-500 "
                      : "border-b-4 hover:border-b-gray-200"
                  }`}
                >
                  {section.title}
                </button>
              </div>
            ))}
          </div>
          {/* Contact us button */}
          <button className="block text-left md:py-5 py-2 px-4 mb-2 uppercase bg-blue-500 hover:bg-yellow-500 transition-colors hover:text-black duration-300 text-white md:my-6 mx-auto mt-2">
            Contact us
          </button>
        </div>

        {/* Value description */}
        <div className="w-full md:w-3/4 border rounded-xl p-6">
          {/* Motion.div for title and description */}
          <motion.div key={data[activeIndex].id} transition={{ duration: 0.5 }}>
            <motion.h2
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="md:text-3xl text-2xl font-bold mb-4"
            >
              {data[activeIndex].title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-gray-600 mb-4 text-sm md:text-base"
            >
              {data[activeIndex].description}
            </motion.p>
          </motion.div>

          {/* Motion.img for image transition */}
          <motion.img
            key={data[activeIndex].image}
            src={data[activeIndex].image}
            alt={data[activeIndex].title}
            className="w-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>
    </section>
  );
}

export function CompanyNotes() {
  return (
    <section className="px-12 py-20 bg-gray-100">
      <motion.div
        key="values"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 "
      >
        {values.slice(0, 3).map((value, index) => (
          <motion.div
            key={index}
            className="flex items-center flex-col md:flex-row md:gap-0 gap-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="bg-yellow-500 rounded-full p-3 mr-4">
              <value.icon className="text-white" size={44} />
            </div>
            <div className="flex flex-col items-center md:items-start md:w-full w-64 ">
              <h3 className="font-bold text-lg mb-2">{value.title}</h3>
              <p className="text-gray-600 md:text-left text-center">
                {value.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
