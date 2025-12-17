import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow relative flex items-center">
      
      {/* LOGO - LEFT */}
      <h1 className="text-xl font-bold text-primary">
        NGO Foundation
      </h1>

      {/* CENTER MENU */}
      <div className="absolute left-1/2 -translate-x-1/2">
        {/* MENU AREA */}
        <div
          className="relative"
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {/* HAMBURGER */}
          <div className="text-3xl cursor-pointer select-none">
            ☰
          </div>

          {/* HOVER MENU */}
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute left-1/2 -translate-x-1/2 mt-3 bg-white dark:bg-gray-950 shadow-lg rounded-lg px-6 py-3 flex flex-row gap-6"
              >
                <NavItem to="/" label="Home" />
                <NavItem to="/about" label="About" />
                <NavItem to="/programs" label="Programs" />
                <NavItem to="/contact" label="Contact" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* RIGHT CONTROLS */}
      <div className="ml-auto">
        <button
          onClick={toggleDarkMode}
          className="text-xl focus:outline-none"
          title="Toggle Dark Mode"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

/* MENU ITEM */
function NavItem({ to, label }) {
  return (
    <Link
      to={to}
      className="font-medium text-gray-700 dark:text-gray-200 hover:text-primary transition whitespace-nowrap"
    >
      {label}
    </Link>
  );
}