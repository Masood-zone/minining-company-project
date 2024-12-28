import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ServiceNotFound() {
  const navigate = useNavigate();
  return (
    <div className="relative w-full h-screen bg-[#0f4de1]">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://ld-wt73.template-help.com/wt_prod-10987/theme/images/bg-404.jpg')",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white space-y-4">
        <motion.h1
          className="text-9xl font-bold"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
        >
          Opps!!!
        </motion.h1>
        <motion.p
          className="text-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Service Not Found
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg text-white"
          >
            Go Back
          </button>
        </motion.div>
      </div>
    </div>
  );
}
