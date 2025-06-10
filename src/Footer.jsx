import { FaGithub, FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-16">
      <motion.div
        className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Social Media Icons */}
        <div className="flex gap-6 text-[#5AB8F3] text-xl">
          <a
            href="https://github.com/dese2112"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8AD8FF] transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://t.me/+251972105696"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8AD8FF] transition-colors"
          >
            <FaTelegramPlane />
          </a>
          <a
            href="https://instagram.com/dese"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8AD8FF] transition-colors"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Author / Rights */}
        <p className="text-sm text-[#F5F5F5] text-center">
          © {new Date().getFullYear()} All rights reserved — Desalegn Dagnachew
        </p>
      </motion.div>
    </footer>
  );
}
