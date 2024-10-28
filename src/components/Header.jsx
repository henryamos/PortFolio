import { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-10 p-4 ${
        scrolled ? "bg-opacity-80 bg-blue" : "bg-transparent"
      }`}
    >
      <nav className="flex justify-between items-center">
        <h2
          id="logo"
          className={`text-2xl font-bold ${
            scrolled
              ? "bg-secondary text-white"
              : "bg-blue-600 text-lightPrimary"
          } transition-all`}
        >
          HA
        </h2>
        <div
          id="hamburger"
          className="md:hidden flex flex-col space-y-1 cursor-pointer"
        >
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
          <span className="block w-6 h-1 bg-white"></span>
        </div>
        <ul className="hidden md:flex space-x-4">
          {["Home", "About Me", "Services", "Projects", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-lightPrimary hover:text-primary"
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
