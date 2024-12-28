import { values } from "./data";
import { motion } from "framer-motion";

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
