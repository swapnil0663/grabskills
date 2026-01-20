import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Handle scroll effect for navbar shrinking
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 300);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-in-out px-6 py-4  ${
          scrolled ? "mt-2" : "mt-0"
        }`}
      >
        <div 
          className={`max-w-6xl mx-auto rounded-3xl transition-all duration-500  ${
            scrolled 
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-2xl shadow-2xl py-3 px-8" 
            : "bg-transparent py-3 px-6 shadow-2xl  backdrop-blur-2xl border-2xl "
          }`}
        >
          <div className="flex items-center justify-between">
            {/* LOGO with Hover Animation */}
            <motion.h1
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection("homeTop")}
              className="text-2xl font-black bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent cursor-pointer tracking-tighter"
            >
              NGO.
            </motion.h1>

            {/* DESKTOP NAV */}
            <div className="hidden md:flex items-center gap-8">
              <NavItem to="/" label="Home" />
              <NavItem to="/about" label="About" />
              <button
                onClick={() => scrollToSection("programs")}
                className={`relative font-semibold  hover:text-green-500 transition-colors group
                  ${
            scrolled 
            ? "text-gray-700 dark:text-white"
            : "text-green-500 dark:text-white"
          }`}
              >
                Programs
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full" />
              </button>
              <NavItem to="/contact" label="Contact" />
              
              <div className={`h-6 w-px ${
            scrolled 
            ? "bg-gray-700 dark:bg-white"
            : "bg-green-500 dark:bg-white"
          }`}/>

              <motion.button
                whileHover={{ rotate: 15, scale: 1.2 }}
                onClick={toggleDarkMode}
                className="text-xl "
              >
                {dark ? "☀️" : "🌙"}
              </motion.button>
            </div>

            {/* MOBILE TOGGLE */}
            <div className="md:hidden flex items-center gap-4">
               <button onClick={toggleDarkMode} className="text-xl">{dark ? "☀️" : "🌙"}</button>
               <motion.button
                whileTap={{ scale: 0.8 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-3xl text-green-500 dark:text-white"
              >
                {isOpen ? <HiX /> : <HiMenuAlt3 />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE OVERLAY MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-white dark:bg-gray-950 flex flex-col items-center justify-center gap-8 text-4xl font-bold md:hidden"
          >
            <MobileLink to="/" label="Home" onClick={() => setIsOpen(false)} />
            <MobileLink to="/about" label="About" onClick={() => setIsOpen(false)} />
            <motion.button 
              whileHover={{ scale: 1.1, italic: true }}
              onClick={() => scrollToSection("programs")}
              className="text-green-500 dark:text-white"
            >
              Programs
            </motion.button>
            <MobileLink to="/contact" label="Contact" onClick={() => setIsOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
  
  function NavItem({ to, label }) {
    return (
      <Link to={to} className={`relative font-semibold     ${
            scrolled 
            ? "text-gray-700 dark:text-white"
            : "text-green-500 dark:text-white"
          } hover:text-green-500 transition-colors group`}>
      {label}
      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all group-hover:w-full" />
    </Link>
  );
}

function MobileLink({ to, label, onClick }) {
  return (
    <motion.div whileHover={{ x: 10 }} whileTap={{ scale: 0.9 }}>
      <Link to={to} onClick={onClick} className="text-green-500 dark:text-white bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text hover:text-transparent">
        {label}
      </Link>
    </motion.div>
  );
}
}