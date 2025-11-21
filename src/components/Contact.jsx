import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <footer
      id="contact"
      className="bg-gradient-to-br from-gray-600 via-[#0a0a0a] to-gray-600 text-whiteColor py-12 px-6"
    >
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
        {/* Phone */}
        <a
          href="tel:+201044904414"
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xl md:text-2xl font-semibold 
          hover:text-tertiaryColor hover:underline transition-all duration-300"
        >
          <FontAwesomeIcon icon={faPhone} className="text-2xl md:text-3xl" />
          <span>+20 104 490 4414</span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/share/1BL9kmV61H/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xl md:text-2xl 
          font-semibold hover:text-[#1877F2] hover:underline transition-all duration-300"
        >
          <FontAwesomeIcon icon={faFacebook} className="text-2xl md:text-3xl" />
          <span>FullHouseAcademy</span>
        </a>

        <a
          href="https://www.instagram.com/fullhouseacademy_?igsh=anpyZmI4ZGxva2Jw&utm_source=qr"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xl md:text-2xl 
          font-semibold hover:text-[#E4405F] hover:underline transition-all duration-300"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-2xl md:text-3xl"
          />
          <span>fullhouseacademy_</span>
        </a>

        <a
          href="https://t.me/+201044904414"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xl md:text-2xl 
          font-semibold hover:text-[#0088cc] hover:underline transition-all duration-300"
        >
          <FontAwesomeIcon icon={faTelegram} className="text-2xl md:text-3xl" />
          <span>+20 104 490 4414</span>
        </a>

        <a
          href="mailto:FullHouseAcademy@outlook.com"
          className="col-span-1 md:col-span-2 flex items-center gap-3 text-xl md:text-2xl 
          font-semibold hover:text-[#0078D4] hover:underline transition-all duration-300"
        >
          <FontAwesomeIcon icon={faEnvelope} className="text-2xl md:text-3xl" />
          <span>FullHouseAcademy@outlook.com</span>
        </a>

        {/* Divider */}
        <div className="col-span-1 sm:col-span-2 lg:col-span-3 h-[2px] bg-gradient-to-r from-primaryColor to-tertiaryColor rounded-full"></div>
      </div>

      {/* Rights */}
      <p className="text-sm md:text-base text-gray-300 tracking-wide mt-6 text-center">
        © {new Date().getFullYear()} Full House Academy — All rights reserved.
      </p>
    </footer>
  );
}
