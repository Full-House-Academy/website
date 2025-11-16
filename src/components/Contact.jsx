import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gray-600 via-[#0a0a0a] to-gray-600 text-whiteColor py-12 px-6"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-6 text-center">
        {/* Mail */}
        <a
          href="mailto:FullHouseAcademy@outlook.com"
          className="flex items-center gap-3 text-xl md:text-2xl font-semibold 
          hover:text-tertiaryColor transition-all duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl md:text-3xl" />
          FullHouseAcademy@outlook.com
        </a>

        {/* Divider */}
        <div className="w-40 h-[2px] bg-gradient-to-r from-primaryColor to-tertiaryColor rounded-full"></div>

        {/* Rights */}
        <p className="text-sm md:text-base text-gray-300 tracking-wide">
          © {new Date().getFullYear()} Full House Academy — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
