import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Award, awards } from "./data";

const Awards: React.FC = () => {
  const [selectedAward, setSelectedAward] = useState<Award | null>(null);
  const years = Array.from(new Set(awards.map((award) => award.year))).sort(
    (a, b) => b - a
  );

  const handleAwardClick = (award: Award) => {
    setSelectedAward(award);
  };

  const closeModal = () => {
    setSelectedAward(null);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">Our Awards</h2>
        <div className="space-y-12">
          {years.map((year) => (
            <div key={year} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-semibold mb-4">{year}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {awards
                  .filter((award) => award.year === year)
                  .map((award) => (
                    <motion.div
                      key={award.id}
                      className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleAwardClick(award)}
                    >
                      <img
                        src={award.image}
                        alt={award.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-semibold mb-2">{award.title}</h4>
                        <p className="text-sm text-gray-600">
                          {award.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedAward && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg p-6 max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedAward.title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X size={24} />
                </button>
              </div>
              <img
                src={selectedAward.image}
                alt={selectedAward.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <p className="text-lg mb-2">{selectedAward.description}</p>
              <p className="text-gray-600">Year: {selectedAward.year}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Awards;
