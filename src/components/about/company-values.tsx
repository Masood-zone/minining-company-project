import { useState } from "react";
import { motion } from "framer-motion";

export function CompanyValues() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sections = [
    { id: "about-ramoth", title: "ABOUT RAMOTH" },
    { id: "mission", title: "OUR MISSION" },
    { id: "goals", title: "OUR GOALS" },
    { id: "values", title: "COMPANY VALUES" },
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
            49+ years of experience
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
          <button className="block text-left md:py-5 py-2 px-4 mb-2 uppercase bg-[#0f4de1] hover:bg-[#f0730c] transition-colors hover:text-white duration-300 text-white md:my-6 mx-auto mt-2">
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
