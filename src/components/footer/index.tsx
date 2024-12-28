import { Facebook } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="">
      {/* Latest news*/}
      {/* Footer */}
      <footer className="bg-footer text-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 overflow-hidden">
            {/* Quick Links Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">QUICK LINKS</h2>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Link
                    to="/services"
                    className="block hover:underline hover:text-gray-300"
                  >
                    Our Services
                  </Link>
                </div>
                <Link
                  to="/services"
                  className="block hover:underline hover:text-gray-300"
                >
                  Projects
                </Link>
                <Link
                  to="/contact-us"
                  className="block hover:underline hover:text-gray-300"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Get in Touch Section */}
            <div>
              <h2 className="text-lg font-semibold mb-4">GET IN TOUCH</h2>
              <div className="space-y-2">
                <Link to="tel:+233206632799" className="hover:underline">
                  <p className="flex items-center">
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
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    +233206632799
                  </p>
                </Link>
                <Link
                  to="mailto:info@ramoth-services.com"
                  className="hover:underline"
                >
                  <p className="flex items-center">
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
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    info@demolink.org
                  </p>
                </Link>
              </div>
              <button
                onClick={() => (window.location.href = "/contact")}
                className="bg-[#0f4de1] text-white font-bold py-4 mt-5 sm:py-6 md:py-6 px-6 sm:px-8 md:px-10 hover:bg-[#be6114] transition-colors duration-300 text-sm sm:text-base md:text-lg"
              >
                REQUEST A QUOTE
              </button>
            </div>

            {/* Map Placeholder */}
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15880.447091911736!2d-1.2794755!3d5.6969874!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdb9998d2004f49%3A0x459111bffee6e328!2sAkenten%20Appiah%20Menka%20University%20of%20Skills%20Training%20and%20Entrepreneurial%20Development!5e0!3m2!1sen!2sgh!4v1727833777212!5m2!1sen!2sgh"
                width="450"
                height="350"
                className="border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="mt-8 flex space-x-4 items-center">
            <span>Visit our Social Media</span>
            <Link
              to="https://www.facebook.com/profile.php?id=61567627150976"
              target="_blank"
              className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            >
              <Facebook className="w-5 h-5" />
            </Link>
            {/* <Link
              to="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            >
              <Twitter className="w-5 h-5" />
            </Link>
            <Link
              to="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            >
              <Instagram className="w-5 h-5" />
            </Link>
            <Link
              to="#"
              className="bg-gray-700 p-2 rounded-full hover:bg-gray-600"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 11v2.4h3.97c-.16 1.03-1.2 3.02-3.97 3.02-2.39 0-4.34-1.98-4.34-4.42s1.95-4.42 4.34-4.42c1.36 0 2.27.58 2.79 1.08l1.9-1.83C10.47 5.69 8.89 5 7 5c-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.72-2.84 6.72-6.84 0-.46-.05-.81-.11-1.16H7z" />
              </svg>
            </Link> */}
          </div>
        </div>

        {/* Copyright */}
        <div className="bg-gray-800 border-t border-gray-700 mt-8 py-4 text-center text-sm text-gray-400">
          © 2024 Ramoth Services Limited.{" "}
        </div>
      </footer>
    </footer>
  );
}

export default Footer;
