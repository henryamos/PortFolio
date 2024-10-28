import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed w-full top-0 z-20 p-4 transition-all duration-300 ${
        scrolled ? "bg-opacity-70 bg-blue text-white" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center">
        <h2
          id="logo"
          className={`text-2xl p-2 bg-blue text-lightPrimary rounded-md font-bold transition-all duration-300 ${
            scrolled ? "bg-black text-white" : "bg-blue-600 text-lightPrimary"
          }`}
        >
          HA
        </h2>

        {/* Hamburger Icon (Hidden when menu is open) */}
        <div
          id="hamburger"
          className={`md:hidden flex flex-col space-y-1 cursor-pointer ${
            isMenuOpen ? "hidden" : "block"
          }`}
          onClick={toggleMenu}
        >
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-4">
          {["Home", "About Me", "Services", "Projects", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-lightPrimary hover:text-primary transition-colors"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      {/* Mobile Menu with AnimatePresence and Framer Motion */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center z-20 bg-blue"
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={toggleMenu}
              className="absolute top-6 right-6 text-white text-3xl font-bold"
            >
              &times;
            </button>
            <ul className="flex flex-col space-y-6 text-center text-2xl">
              {["Home", "About Me", "Services", "Projects", "Contact"].map(
                (item, index) => (
                  <li key={index}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={toggleMenu} // Close menu on link click
                      className="text-lightPrimary hover:text-primary transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
