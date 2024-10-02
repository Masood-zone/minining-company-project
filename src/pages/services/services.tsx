import { useState } from "react";
import { machineryItems } from "../../components/machinery/data";
import { offerItems } from "../../components/offers/data";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function Services() {
  const navigate = useNavigate();
  const category = [
    { title: "All" },
    { title: "Construction" },
    { title: "Machinery" },
  ];

  const [currentCategory, setCurrentCategory] = useState("All");

  const filteredData =
    currentCategory === "All"
      ? [...machineryItems, ...offerItems]
      : currentCategory === "Construction"
      ? offerItems
      : machineryItems;

  return (
    <section className="w-full md:container mx-auto py-16">
      {/* Category Navbar */}
      <div className="flex justify-center items-center space-x-3 md:space-x-8 my-5">
        {category.map((item) => (
          <button
            key={item.title}
            onClick={() => setCurrentCategory(item.title)}
            className={`${
              currentCategory === item.title
                ? "bg-blue-500 text-white"
                : "text-gray-600"
            } px-4 py-1 rounded-none`}
          >
            {item.title}
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
              {"imgSrc" in item ? (
                <img
                  src={item.imgSrc}
                  alt={item.alt}
                  onClick={() => navigate(`/services/${item.id}`)}
                  className="w-full h-48 object-cover mb-4 hover:cursor-pointer"
                />
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  onClick={() => navigate(`/services/machinery/${item.id}`)}
                  className="w-full h-48 object-cover mb-4 hover:cursor-pointer"
                />
              )}
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">
                  {"title" in item ? (
                    <Link
                      className="hover:underline hover:cursor-pointer"
                      to={`/services/${item.id}`}
                    >
                      {item.title}
                    </Link>
                  ) : (
                    <Link
                      className="hover:underline hover:cursor-pointer"
                      to={`services/machinery/${item.id}`}
                    >
                      {item.alt}
                    </Link>
                  )}
                </h3>

                <p className="text-gray-600 mb-4">
                  {"description" in item ? item.description : item.price}
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
