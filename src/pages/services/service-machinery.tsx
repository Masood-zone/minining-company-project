import { useParams } from "react-router-dom";
import { machineryItems } from "../../components/machinery/data";
import { useState } from "react";
import { Calendar, DollarSign, MapPinMinusIcon, User } from "lucide-react";
import { motion } from "framer-motion";

export default function ServiceMachinery() {
  const { id } = useParams();
  const service = machineryItems.find((machine) => machine.id === Number(id));

  const images = [
    service?.imgSrc,
    "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/project-8-670x477.jpg",
    "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/project-7-670x477.jpg",
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!service) {
    return <div>Service not found</div>;
  }

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-8"
      initial={{ opacity: 0 }} // Start from transparent
      animate={{ opacity: 1 }} // Fade in
      exit={{ opacity: 0 }} // Fade out on unmount
      transition={{ duration: 0.5 }} // Smooth transition duration
    >
      <motion.h1
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -20 }} // Slide from top
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }} // Exit smoothly
        transition={{ duration: 0.5 }}
      >
        {service.alt}
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          {/* Descriptions */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-4">
              Primus repressors ducunt ad buxum. Fluctus sunt boreas de audax
              lixa. Fidess messis! Navis volares, tanquam superba decor. Sunt
              quadraes resuscitabo noster, nobilis victores. Etum de germanus
              luna, locus silva! Habitios crescere tanquam fatalis contencio.
              Cum lacta manducare, omnes biomassas aperto salvus, bi-color
              parmass. Rector, heuretes, et scutum. Abactuss messis in gratis
              chremisa!
            </p>
            <p className="mb-4">
              Nunquam experientia consilium. Ridetis vix ducunt ad fidelis
              devirginato. Demolitiones favere, tanquam rusticus artum.
              Coordinatae potus, tanquam azureus accola.
            </p>
            <p>
              Finis de gratis historia, attrahendam vortex! Ubi est brevis
              guttus? Nunquam contactus nomen. Credere aliquando ducunt ad albus
              calcaria. Cannabiss manducare! Nunquam capta fides. Cur hydra
              ridetis? Cum abactus studere, omnes demolitionees attrahendam
              velox, alter extumes.
            </p>
          </motion.div>
          {/* CTA */}
          <div className="mt-8 flex flex-col gap-5 justify-between items-start">
            <div className="flex space-x-4">
              <button className="text-gray-600 hover:text-black">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-black">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-black">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button className="text-gray-600 hover:text-black">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm5.82 7.116c.393.392.723.765.984 1.15.261.386.463.84.605 1.352.142.512.217 1.142.217 1.89v1.682c0 .898-.086 1.651-.257 2.248-.172.598-.454 1.095-.849 1.49-.394.392-.871.669-1.432.825-.562.155-1.266.233-2.108.233H7.332V7.116h4.657c1.656 0 2.867.349 3.631 1.05zm-3.982 8.071c.467 0 .845-.026 1.133-.076.288-.051.517-.137.688-.258.17-.12.292-.283.367-.487.075-.204.113-.457.113-.757v-1.692c0-.3-.037-.553-.113-.757-.075-.204-.197-.367-.367-.487-.17-.121-.4-.207-.688-.258-.288-.05-.666-.076-1.133-.076h-1.047v4.848h1.047z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            <motion.button
              className="bg-blue-500 text-white font-bold py-4 sm:py-6 md:py-6 px-6 sm:px-8 md:px-10 hover:bg-yellow-400 transition-colors duration-300 text-sm sm:text-base md:text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              CONTACT US
            </motion.button>
          </div>
        </div>

        <div>
          <div className="relative">
            <motion.img
              src={images[currentImageIndex]}
              alt={`Project image ${currentImageIndex + 1}`}
              className="w-full h-96 object-cover"
              key={currentImageIndex} // Re-render image on change
              initial={{ opacity: 0 }} // Start hidden
              animate={{ opacity: 1 }} // Fade in
              exit={{ opacity: 0 }} // Fade out on exit
              transition={{ duration: 0.5 }}
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
            >
              &lt;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full"
            >
              &gt;
            </button>
          </div>
          <motion.div
            className="flex justify-center mt-4 space-x-2"
            initial={{ opacity: 0, y: 20 }} // Slide from below
            animate={{ opacity: 1, y: 0 }} // Fade in
            exit={{ opacity: 0, y: 20 }} // Exit smoothly
            transition={{ duration: 0.5 }}
          >
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`w-16 h-16 object-cover cursor-pointer ${
                  index === currentImageIndex ? "border-2 border-blue-500" : ""
                }`}
                onClick={() => setCurrentImageIndex(index)}
                whileHover={{ scale: 1.1 }} // Slight scaling effect on hover
                transition={{ duration: 0.2 }}
              />
            ))}
          </motion.div>
        </div>
      </div>

      <ServiceDetails
        client="Smith Ltd."
        year="2010"
        location="Los Angeles"
        value="$1,299,525.00"
      />
    </motion.div>
  );
}

function ServiceDetails({
  client,
  year,
  location,
  value,
}: ServiceDetailsProps) {
  return (
    <motion.div
      className="w-full md:w-[600px] ml-auto p-6"
      initial={{ opacity: 0 }} // Fade in
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }} // Fade out on exit
      transition={{ duration: 0.5 }}
    >
      <ul className="space-y-4">
        {/* Client Row */}
        <li className="flex items-center space-x-4 border p-5">
          <User className="text-blue-500 w-5 h-5" />
          <span>
            <strong>Client:</strong> {client}
          </span>
        </li>

        {/* Year Row */}
        <li className="flex items-center space-x-4 border p-5">
          <Calendar className="text-blue-500 w-5 h-5" />
          <span>
            <strong>Year:</strong> {year}
          </span>
        </li>

        {/* Location Row */}
        <li className="flex items-center space-x-4 border p-5">
          <MapPinMinusIcon className="text-blue-500 w-5 h-5" />
          <span>
            <strong>Location:</strong> {location}
          </span>
        </li>

        {/* Value Row */}
        <li className="flex items-center space-x-4 border p-5">
          <DollarSign className="text-blue-500 w-5 h-5" />
          <span>
            <strong>Value:</strong> {value}
          </span>
        </li>
      </ul>
    </motion.div>
  );
}
