import { motion } from "framer-motion";
import { machineryItems } from "./data";
import { Link } from "react-router-dom";

const Machinery = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold mb-10">Mining Machinery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {machineryItems.map((item) => (
          <MachineryCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
};

const MachineryCard = ({
  item,
}: {
  item: {
    id: number;
    imgSrc: string;
    alt: string;
    price?: string;
  };
}) => {
  return (
    <motion.div
      className="relative overflow-hidden rounded-none shadow-lg"
      //   whileHover={{ scale: 1.05 }}
    >
      <motion.img
        src={item.imgSrc}
        alt={item.alt}
        className="w-full h-64 object-cover"
      />
      {item.price && (
        <motion.div
          className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0"
          whileHover={{ opacity: 1 }}
        >
          <div className="text-white text-xl font-semibold">
            <p className="hover:underline cursor-pointer">
              <Link
                className="hover:underline hover:cursor-pointer"
                to={`/services/machinery/${item.id}`}
              >
                {item.alt}
              </Link>
            </p>
            <p className="mt-2">{item.price}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Machinery;
