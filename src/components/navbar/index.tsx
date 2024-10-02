import { useState, useEffect } from "react";
import { Phone, MapPin, Facebook, Twitter, Instagram, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { logo } from "../../assets/images";

export default function MineralsNavbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    // Close the isMenuOpen state when the user clicks on a link\
    // in the mobile menu
    if (isMenuOpen) {
      window.addEventListener("click", (e) => {
        if (
          e.target instanceof HTMLElement &&
          e.target.closest("a") &&
          e.target.closest("a")?.getAttribute("href")
        ) {
          setIsMenuOpen(false);
        }
      });
    }
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow transition-all duration-300">
      <div
        className={`bg-gray-100 transition-all duration-300 ${
          isScrolled ? "h-0 overflow-hidden" : "h-10"
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="w-4 h-4 mr-1" />
              <span>
                <a href="tel:+233597812947" className=" hover:underline">
                  +233 597812947
                </a>
              </span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-4 h-4 mr-1" />
              <span>
                <a
                  href="https://maps.app.goo.gl/2K8CAmceedFEV7Zc8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:underline"
                >
                  Kumasi, Tanoso
                </a>
              </span>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Facebook className="w-4 h-4" />
            <Twitter className="w-4 h-4" />
            <Instagram className="w-4 h-4" />
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 11v2.4h3.97c-.16 1.03-1.2 3.02-3.97 3.02-2.39 0-4.34-1.98-4.34-4.42S4.61 7.58 7 7.58c1.36 0 2.27.58 2.79 1.08l1.9-1.83C10.47 5.69 8.89 5 7 5c-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.72-2.84 6.72-6.84 0-.46-.05-.81-.11-1.16H7z" />
            </svg>
          </div>
        </div>
      </div>
      <nav className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center">
          <img src={logo} alt="Minerals Logo" className="w-10 h-10 mr-2" />
          <div className="flex flex-col items-start">
            <span className="text-xl font-bold">MINERALS</span>
            <span className="text-sm text-gray-500">INDUSTRIAL COMPANY</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              isActive={location.pathname === href}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <button
          onClick={handleMenuToggle}
          className="md:hidden"
          aria-label="Open menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-white z-40 transition-transform duration-300 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          aria-label="Close menu"
          onClick={handleMenuToggle}
        >
          <X className="w-6 h-6" />
        </button>
        <div className="container mx-auto px-4 h-full flex flex-col items-center justify-center space-y-6">
          {navLinks.map(({ href, label }) => (
            <NavLink
              key={href}
              href={href}
              isActive={location.pathname === href}
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
  isActive = false,
}: {
  href: string;
  children: React.ReactNode;
  isActive?: boolean;
}) {
  return (
    <Link
      to={href}
      className={`text-lg uppercase font-medium hover:text-blue-500 transition-colors ${
        isActive ? "text-blue-500" : "text-gray-700"
      }`}
    >
      {children}
    </Link>
  );
}
