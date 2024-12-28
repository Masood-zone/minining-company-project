import { motion, AnimatePresence } from "framer-motion";
import { PhoneIcon } from "lucide-react";
import { useState } from "react";

const locationData = [
  {
    location_heading: "Kumasi",
    title: "Urban Sustainability Solutions",
    location_description:
      "In Kumasi, Ramoth Services Limited is enhancing urban sustainability through innovative waste management solutions. Known for its lush greenery, Kumasi faces increasing waste disposal challenges due to urban expansion.",
    email: "info@ramoth-services.com",
    phone: "+233206632799",
    image:
      "https://images.prismic.io/ramoth-company/ZwwMAoF3NbkBXXvJ_654d61bacd06c8284a65d8c2_pittsburgh-image-industrial-x-webflow-template-p-1600.jpg?auto=format,compress",
    location: "Kumasi",
  },
  {
    location_heading: "Obuasi",
    title: "Mining Environmental Management",
    location_description:
      "Obuasi's mining activities present unique environmental concerns, including land degradation and water pollution. Our services focus on sustainable mining practices and environmental restoration.",
    email: "info@ramoth-services.com",
    phone: "+233206632799",
    image:
      "https://images.prismic.io/ramoth-company/ZwwMAYF3NbkBXXvI_65b2b2e579c8878b9c4d5d5d_birmingham-image-industrial-x-webflow-template-p-2000.jpg?auto=format,compress",
    location: "Obuasi",
  },
  {
    location_heading: "Tarkwa",
    title: "Mining Waste Solutions",
    location_description:
      "In Tarkwa, we specialize in comprehensive mining waste management and environmental protection services, ensuring sustainable mining operations while preserving the local ecosystem.",
    email: "info@ramoth-services.com",
    phone: "+233206632799",
    image:
      "https://images.prismic.io/ramoth-company/ZwwMAIF3NbkBXXvH_65b2b2e615911ad2b415ab64_cleveland-image-industrial-x-webflow-template-p-2000.jpg?auto=format,compress",
    location: "Tarkwa",
  },
];

export default function Locations() {
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4">Visit our location</h2>
        <p className="text-gray-600 mb-8">
          Ramoth Services Limited is widespread. Aside our main office in
          Kumasi, we are found in 3 places here in Ghana.
        </p>

        {/* Location Navigation */}
        <div className="flex gap-8 mb-8">
          {locationData.map((location, index) => (
            <button
              key={location.location_heading}
              onClick={() => setActiveLocation(index)}
              className={`relative pb-2 text-lg ${
                activeLocation === index ? "text-black" : "text-gray-500"
              }`}
            >
              {location.location_heading}
              {activeLocation === index && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#f0730c]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Location Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeLocation}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative h-[600px] rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0">
              <img
                src={locationData[activeLocation].image}
                alt={locationData[activeLocation].location_heading}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
            </div>

            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <h3 className="text-3xl font-bold mb-2">
                {locationData[activeLocation].location_heading}
              </h3>
              <p className="text-lg mb-6 max-w-2xl">
                {locationData[activeLocation].location_description}
              </p>

              <div className="flex gap-12 bg-[#1a2942]/80 p-6 rounded-lg">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="space-x-2">
                      <span className="text-gray-300">Email:</span>
                      <a
                        href={`mailto:${locationData[activeLocation].email}`}
                        className="hover:text-gray-300"
                      >
                        {locationData[activeLocation].email}
                      </a>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <PhoneIcon size={20} />
                    <span className="space-x-2">
                      <span className="text-gray-300">Phone:</span>
                      <a
                        href={`tel:${locationData[activeLocation].phone}`}
                        className="hover:text-gray-300"
                      >
                        {locationData[activeLocation].phone}
                      </a>
                    </span>
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span className="text-gray-300">Our Location:</span>
                  </div>
                  <p>{locationData[activeLocation].location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
