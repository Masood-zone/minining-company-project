import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { projects, services } from "../../components/offers/data";
import { truncateText } from "../../utils/truncateText";

function Services() {
  const navigate = useNavigate();
  const categories = ["All", "Services", "Projects"];

  const [currentCategory, setCurrentCategory] = useState("All");

  const filteredData =
    currentCategory === "All"
      ? [...projects, ...services]
      : [...projects, ...services].filter(
          (item) => item.category === currentCategory
        );

  return (
    <section className="w-full md:container mx-auto py-16">
      {/* Category Navbar */}
      <div className="flex justify-center items-center space-x-3 md:space-x-8 my-5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setCurrentCategory(category)}
            className={`${
              currentCategory === category
                ? "bg-blue-500 text-white"
                : "text-gray-600"
            } px-4 py-1 rounded-none`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Services Filter with Motion */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-7 md:p-0"
      >
        <AnimatePresence>
          {filteredData.map((item) => (
            <motion.div
              key={item.id}
              className="rounded-none shadow-md text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.4 }}
            >
              <img
                src={item.image}
                alt={item.title}
                onClick={() =>
                  item.category === "Projects"
                    ? navigate(`/services/projects/${item.id}`)
                    : navigate(`/services/${item.id}`)
                }
                className="w-full h-48 object-cover mb-4 hover:cursor-pointer"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  <Link
                    className="hover:underline hover:cursor-pointer"
                    to={
                      item.category === "Projects"
                        ? `/services/projects/${item.id}`
                        : `/services/${item.id}`
                    }
                  >
                    {item.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4">
                  {truncateText(item.description, 100)}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Services;
