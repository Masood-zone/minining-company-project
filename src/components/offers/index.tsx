import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { slide1, slide2, slide3, slide4 } from "../../assets/images";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const offerItems = [
  {
    id: 1,
    title: "Mineral Production",
    description:
      "We explore, develop, and produce various minerals at mines all over the world.",
    image: slide1,
  },
  {
    id: 2,
    title: "Sustainable Mining",
    description:
      "Our practices focus on environmental responsibility and community engagement.",
    image: slide4,
  },
  {
    id: 3,
    title: "Expert Consultation",
    description:
      "We provide expert advice on mining operations and resource management.",
    image: slide2,
  },
  {
    id: 4,
    title: "Advanced Equipment",
    description:
      "We utilize state-of-the-art machinery for efficient and safe mining operations.",
    image: slide3,
  },
  {
    id: 5,
    title: "Modern Technology",
    description:
      "Our company uses top-notch technology to make mining safer and more productive.",
    image: slide4,
  },
  {
    id: 6,
    title: "Safety Training",
    description:
      "We offer safety training programs to ensure the well-being of our employees.",
    image: slide1,
  },
];

export default function WhatWeOfferSwiper() {
  return (
    <section className=" py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">WHAT WE OFFER</h2>
        <div className="relative">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev",
              nextEl: ".swiper-button-next",
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },

              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            {offerItems.map((item) => (
              <SwiperSlide key={item.id} className="py-10">
                <motion.div className="bg-white md:shadow-lg overflow-hidden sm:shadow-md shadow-md h-96">
                  <motion.div className="relative overflow-hidden">
                    <motion.img
                      src={item.image}
                      alt={item.title}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">
                      {String(item.id).padStart(2, "0")}
                    </div>
                  </motion.div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
