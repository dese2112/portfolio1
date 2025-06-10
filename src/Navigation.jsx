import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { id: "about", label: "about" },
    { id: "services", label: "services" },
    { id: "projects", label: "Myworks" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="flex justify-between items-center py-10 px-4 relative z-50">
      <h1 className="text-2xl font-bold font-inter text-white">DESE</h1>

      {/* Desktop Navigation */}
      <nav className="gap-10 text-2xl font-bold font-inter text-white hidden md:flex">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="cursor-pointer hover:text-[#5AB8F3] transition-colors duration-300 capitalize"
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Hamburger Icon */}
      <div className="md:hidden z-50">
        {menuOpen ? (
          <FaTimes
            className="text-3xl text-[#5AB8F3] cursor-pointer transition duration-300"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <FaBars
            className="text-3xl text-[#5AB8F3] cursor-pointer transition duration-300"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        } md:hidden`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full bg-gray-800 flex flex-col items-center space-y-6 pt-24 pb-10 z-50 transition-all duration-300 ease-in-out ${
          menuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } md:hidden`}
      >
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={() => setMenuOpen(false)}
            className={`text-xl font-semibold transition duration-300 ${
              item.id === "contact"
                ? "bg-[#5AB8F3] text-slate-900 border border-[#5AB8F3] rounded-full px-5 py-2 hover:bg-transparent hover:text-[#5AB8F3]"
                : "text-white hover:text-[#5AB8F3]"
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}
