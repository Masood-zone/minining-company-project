"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const clients = [
  {
    id: 1,
    name: "Stephen Adams",
    position: "AlphaIndustry, CEO",
    testimonial:
      "Minerals provided us with timely and efficient service. They showed a willingness throughout the process and solved all mining-related issues.",
    logo: "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/clients-1-200x90.png",
    avatar:
      "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/team-7-83x83.jpg",
  },
  {
    id: 2,
    name: "Emma Johnson",
    position: "TechMine Solutions, CTO",
    testimonial:
      "Their innovative approach to mining technology has significantly improved our operational efficiency.",
    logo: "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/clients-2-200x90.png",
    avatar:
      "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/team-5-83x83.jpg",
  },
  {
    id: 3,
    name: "Michael Chen",
    position: "Global Resources Inc., Operations Manager",
    testimonial:
      "The team's expertise in sustainable mining practices has been invaluable to our projects.",
    logo: "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/clients-3-200x90.png",
    avatar:
      "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/team-6-83x83.jpg",
  },
  {
    id: 4,
    name: "Sarah Thompson",
    position: "EcoMine Ventures, Sustainability Director",
    testimonial:
      "Their commitment to environmental responsibility aligns perfectly with our company values.",
    logo: "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/clients-4-200x90.png",
    avatar:
      "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/team-7-83x83.jpg",
  },
  {
    id: 5,
    name: "David Rodriguez",
    position: "InnovaMine Corp, Head of R&D",
    testimonial:
      "The cutting-edge solutions provided have revolutionized our extraction processes.",
    logo: "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/clients-5-200x90.png",
    avatar:
      "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/team-7-83x83.jpg",
  },
  {
    id: 6,
    name: "Lisa Nakamura",
    position: "Pacific Minerals Ltd., CFO",
    testimonial:
      "Their financial modeling and risk assessment services have been crucial for our expansion plans.",
    logo: "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/clients-6-200x90.png",
    avatar:
      "https://ld-wt73.template-help.com/wt_prod-10987/theme/images/team-6-83x83.jpg",
  },
];

export default function OurClients() {
  const [activeClient, setActiveClient] = useState(clients[0]);
  const [hoveredLogo, setHoveredLogo] = useState<number | null>(null);

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl text-center mb-12">OUR CLIENTS</h2>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 lg:w-2/3">
            {clients.map((client) => (
              <motion.a
                key={client.id}
                href="#"
                className="block relative"
                onMouseEnter={() => setHoveredLogo(client.id)}
                onMouseLeave={() => setHoveredLogo(null)}
                onClick={() => setActiveClient(client)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  width={200}
                  height={100}
                  className={`transition-opacity duration-300 ${
                    hoveredLogo === null || hoveredLogo === client.id
                      ? "opacity-100"
                      : "opacity-30"
                  }`}
                />
                {client.id === activeClient.id && (
                  <motion.div
                    className="absolute inset-0"
                    layoutId="outline"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
              </motion.a>
            ))}
          </div>
          <motion.div
            key={activeClient.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/3"
          >
            <blockquote className="text-xl italic mb-4">
              "{activeClient.testimonial}"
            </blockquote>
            <p className="font-bold">{activeClient.name}</p>
            <p className="text-gray-600 mb-6">{activeClient.position}</p>
            <div className="flex space-x-2">
              {clients.map((client) => (
                <motion.button
                  key={client.id}
                  onClick={() => setActiveClient(client)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <img
                    src={client.avatar}
                    alt={client.name}
                    width={50}
                    height={50}
                    className={`rounded-full transition-opacity duration-300 ${
                      client.id === activeClient.id
                        ? "ring-2 ring-blue-500"
                        : "opacity-50 hover:opacity-100"
                    }`}
                  />
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
