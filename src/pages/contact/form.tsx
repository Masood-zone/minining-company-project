import { useState } from "react";
import { Link } from "react-router-dom";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Get in Touch</h1>
      <div className="flex flex-col md:flex-row gap-8">
        <form onSubmit={handleSubmit} className="w-full md:w-2/3 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              required
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Your E-mail*"
              required
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="service"
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="">Select a Service</option>
              <option value="service1">Service 1</option>
              <option value="service2">Service 2</option>
              <option value="service3">Service 3</option>
            </select>
            <input
              type="tel"
              name="phone"
              placeholder="Your Phone*"
              required
              className="w-full p-2 border border-gray-300 rounded"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <textarea
            name="message"
            placeholder="Message"
            rows={6}
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          <button
            type="submit"
            className="bg-[#f0730c] text-white font-bold py-2 px-4 rounded hover:bg-[#be6114] transition duration-300"
          >
            CONTACT US
          </button>
        </form>
        <div className="w-full md:w-1/3 space-y-8">
          <div>
            <h2 className="text-xl font-bold mb-4">GET SOCIAL</h2>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61567627150976"
                target="_blank"
                className="text-gray-600 hover:text-black"
              >
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
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">PHONE</h2>
            <Link to="tel:+233206632799" className="hover:underline">
              <p className="flex items-center text-[#0f4de1]">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  ></path>
                </svg>
                +233 206 632 799
              </p>
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">E-MAIL</h2>
            <Link
              to="mailto:info@ramoth-services.com"
              className="hover:underline"
            >
              <p className="flex items-center text-[#0f4de1]">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
                info@ramoth-services.com
              </p>
            </Link>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">ADDRESS</h2>
            <p className="flex items-start text-blue-500">
              <svg
                className="w-5 h-5 mr-2 mt-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Kumasi,
              <br />
              Alexandria, VA, 2230
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
