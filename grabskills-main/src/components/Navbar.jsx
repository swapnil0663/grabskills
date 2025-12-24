import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  };

  return (
   <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 shadow-lg border border-white/40 dark:border-gray-700/40">
    <div className="max-w-7xl mx-auto h-14 flex items-center justify-between px-8">

      {/* LOGO */}
      <h1 className="text-xl font-bold text-green-600 cursor-pointer" onClick={()=>{
              navigate("/")
              
              const section=document.getElementById("homeTop");
              if(section){
                section.scrollIntoView({behavior:"smooth"});
              }
            
            }}>
        NGO Foundation
      </h1>

      {/* NAV LINKS */}
      <div className="flex items-center gap-10">
        <NavItem to="/" label="Home" />
        <NavItem to="/about" label="About" />

        <button
          onClick={() => {
            if (location.pathname !== "/") {
              navigate("/");
              setTimeout(() => {
                const section = document.getElementById("programs");
                section?.scrollIntoView({ behavior: "smooth" });
              }, 150);
            } else {
              const section = document.getElementById("programs");
              section?.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="font-medium text-gray-700 dark:text-gray-200 hover:text-green-600 transition"
        >
          Programs
        </button>

        <NavItem to="/contact" label="Contact" />
      </div>

      {/* DARK MODE */}
      <button
        onClick={toggleDarkMode}
        className="text-xl"
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