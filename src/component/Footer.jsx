import { FaHome, FaInfoCircle, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Jr's Boutique. All rights reserved.
        </p>
        <div className="flex justify-center gap-6 mt-4 text-gray-400">
          <a href="/" aria-label="Home" className="hover:text-gray-200 transition">
            <FaHome size={24} />
          </a>
          <a href="/about" aria-label="About" className="hover:text-gray-200 transition">
            <FaInfoCircle size={24} />
          </a>
          <a href="/contact" aria-label="Contact" className="hover:text-gray-200 transition">
            <FaPhoneAlt size={24} />
          </a>
          <a
            href="mailto:support@jrsboutique.com"
            aria-label="Email"
            className="hover:text-gray-200 transition"
          >
            <FaEnvelope size={24} />
          </a>
          <a href="/location" aria-label="Location" className="hover:text-gray-200 transition">
            <FaMapMarkerAlt size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
