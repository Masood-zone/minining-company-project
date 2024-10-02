import { motion } from "framer-motion";
import {
  machinery1,
  machinery2,
  machinery3,
  machinery4,
  machinery5,
  machinery6,
} from "../../assets/images";

const machineryItems = [
  {
    id: 1,
    imgSrc: machinery1,
    alt: "Loader",
    price: "$99/hour",
  },
  {
    id: 2,
    imgSrc: machinery2,
    alt: "Bulldozer",
    price: "$99/hour",
  },
  {
    id: 3,
    imgSrc: machinery3,
    alt: "Dump Truck",
    price: "$99/hour",
  },
  {
    id: 4,
    imgSrc: machinery4,
    alt: "Backhoe",
    price: "$99/hour",
  },
  {
    id: 5,
    imgSrc: machinery5,
    alt: "Excavator",
    price: "$99/hour",
  },
  {
    id: 6,
    imgSrc: machinery6,
    alt: "Drill Machine",
    price: "$99/hour",
  },
];

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
            <p className="hover:underline cursor-pointer">{item.alt}</p>
            <p className="mt-2">{item.price}</p>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Machinery;
