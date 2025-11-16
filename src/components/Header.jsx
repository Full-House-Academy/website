import { useState, useEffect } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
    setMenuOpen(false);
  };

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        // scrolling down
        setShowHeader(false);
      } else {
        // scrolling up
        setShowHeader(true);
      }

      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  return (
    <>
      <div
        className={`
          font-bold bg-tertiaryColor w-full flex flex-col shadow-xl/20
          fixed top-0 left-0 z-50 transition-transform duration-300
          ${showHeader ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        {/* Top Bar */}
        <div className="h-[70px] w-full flex justify-between items-center p-4">
          <img
            className="max-h-[60px] md:max-h-[70px]"
            src="/logo.png"
            alt="Full House Academy Logo"
          />

          <p className="text-xl md:text-2xl lg:text-3xl text-primaryColor uppercase select-none">
            Full House Academy
          </p>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 text-quaternaryColor text-xl lg:text-2xl cursor-pointer select-none">
            <li onClick={() => scrollToSection("courses")}>Courses</li>
            <li onClick={() => scrollToSection("about")}>About Us</li>
            <li onClick={() => scrollToSection("faqs")}>FAQs</li>
            <li onClick={() => scrollToSection("contact")}>Contact</li>
          </ul>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-between w-8 h-6 z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span
              className={`h-[3px] w-full bg-quaternaryColor rounded transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[10px]" : ""
              }`}
            ></span>
            <span
              className={`h-[3px] w-full bg-quaternaryColor rounded transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`h-[3px] w-full bg-quaternaryColor rounded transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[10px]" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`
            fixed top-[70px] left-0 w-full md:hidden overflow-hidden transition-all duration-500 bg-tertiaryColor
            ${menuOpen ? "max-h-64" : "max-h-0"}
          `}
        >
          <ul
            className={`
              flex flex-col text-quaternaryColor font-semibold p-4 gap-2
              transform transition-all duration-500
              ${
                menuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4"
              }
            `}
          >
            <li
              className="hover:bg-quaternaryColor hover:text-tertiaryColor w-[50%]"
              onClick={() => scrollToSection("courses")}
            >
              Courses
            </li>
            <span className="bg-quaternaryColor h-[1px] w-[50%]"></span>
            <li
              className="hover:bg-quaternaryColor hover:text-tertiaryColor w-[50%]"
              onClick={() => scrollToSection("about")}
            >
              About Us
            </li>
            <span className="bg-quaternaryColor h-[1px] w-[50%]"></span>
            <li
              className="hover:bg-quaternaryColor hover:text-tertiaryColor w-[50%]"
              onClick={() => scrollToSection("faqs")}
            >
              FAQs
            </li>
            <span className="bg-quaternaryColor h-[1px] w-[50%]"></span>
            <li
              className="hover:bg-quaternaryColor hover:text-tertiaryColor w-[50%]"
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </li>
          </ul>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-40 md:hidden animate-fadeIn"
          onClick={() => setMenuOpen(false)}
        ></div>
      )}
    </>
  );
}
