import { useParams } from "react-router-dom";
import { services } from "../../components/offers/data";
import { motion } from "framer-motion";
import ServiceNotFound from "../notfound/service-notfound";

function ServicesIndex() {
  const { serviceId } = useParams();
  const service = services.find((service) => service.id === Number(serviceId));

  if (!service) {
    return <ServiceNotFound />;
  }

  return (
    <motion.div
      className="min-h-screen flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="relative flex-grow flex flex-col items-center justify-center text-white p-8"
        style={{
          backgroundImage: `url(${service.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-center relative z-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {service.title}
        </motion.h1>
      </div>
      <motion.div
        className="bg-white p-8 md:p-16 lg:p-24"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 max-w-3xl mx-auto">
          {service.description}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default ServicesIndex;
