import React from 'react';
import { motion } from 'framer-motion';
import { 
  FiInstagram, FiTwitter, FiFacebook, FiYoutube, 
  FiArrowUp, FiHeart, FiMapPin, FiMail 
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
   const navigate = useNavigate();
 

  const footerLink = "text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300 cursor-pointer block py-1 hover:translate-x-2";

  return (
    <footer className="relative bg-[#f8fafc] dark:bg-[#030712] pt-20 pb-10 overflow-hidden">
      
      {/* --- TOP WAVE ANIMATION --- */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg className="relative block w-[calc(100%+1.3px)] h-[50px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
                className="fill-white dark:fill-gray-950"></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* BRAND COLUMN */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-black text-green-600 dark:text-green-400 tracking-tighter">
              NGO.
            </h2>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Empowering communities and building sustainable futures through transparency and local action.
            </p>
            <div className="flex gap-4">
              <SocialIcon icon={<FiInstagram />} />
              <SocialIcon icon={<FiTwitter />} />
              <SocialIcon icon={<FiFacebook />} />
              <SocialIcon icon={<FiYoutube />} />
            </div>
          </motion.div>

          {/* QUICK LINKS */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white">Quick Links</h4>
            <ul className="space-y-3 font-medium">
              <li className={footerLink} onClick={() => navigate("/about")}>About us</li>
              <li className={footerLink} onClick={() => navigate("/contact")}>Contact us</li>
              
              <li className={footerLink} onClick={() => navigate("/contact")}>Volunteer details</li>
              
            </ul>
          </div>

          {/* IMPACT REGIONS */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-gray-900 dark:text-white">Impact Areas</h4>
            <div className="space-y-4">
              <ContactMini icon={<FiMapPin />} text="Southeast Asia" />
              <ContactMini icon={<FiMapPin />} text="Sub-Saharan Africa" />
              <ContactMini icon={<FiMapPin />} text="Rural India" />
            </div>
          </div>

          {/* NEWSLETTER BOX */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 rounded-[2rem] bg-white dark:bg-gray-900 shadow-2xl shadow-green-500/10 border border-gray-100 dark:border-gray-800"
          >
            <h4 className="text-lg font-black mb-2 dark:text-white flex items-center gap-2">
              Stay Updated <FiHeart className="text-red-500" />
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 font-medium uppercase tracking-wider">
              Weekly impact stories
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email address" 
                className="w-full bg-gray-50 dark:bg-gray-800 py-3 pl-4 pr-12 rounded-xl outline-none focus:ring-2 ring-green-500/50 transition-all dark:text-white text-sm"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-green-600 p-2 rounded-lg text-white hover:bg-green-700 transition-colors">
                <FiArrowUp className="rotate-45" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM BAR */}
        <div className="pt-10 border-t border-gray-200 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 dark:text-gray-500 text-sm font-medium">
            © 2024 NGO Foundation. Made with <FiHeart className="inline text-red-500" /> for the world.
          </p>
          
          {/* BACK TO TOP */}
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white shadow-lg shadow-green-500/30"
          >
            <FiArrowUp />
          </motion.button>
        </div>
      </div>

      {/* BACKGROUND TEXT DECORATION */}
      <div className="absolute -bottom-12 -left-10 text-[10rem] font-black text-gray-200 dark:text-white/[0.02] pointer-events-none select-none">
        CHANGE
      </div>
    </footer>
  );
};

/* --- SUB COMPONENTS --- */

const SocialIcon = ({ icon }) => (
  <motion.div 
    whileHover={{ y: -5, scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    className="w-10 h-10 rounded-xl bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-green-600 hover:text-white transition-all cursor-pointer border border-gray-100 dark:border-gray-800"
  >
    {icon}
  </motion.div>
);

const ContactMini = ({ icon, text }) => (
  <div className="flex items-center gap-3  text-gray-500 dark:text-gray-400 group cursor-pointer">
    <span className="text-green-500 group-hover:scale-125 transition-transform">{icon}</span>
    <span className="text-sm font-bold group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{text}</span>
  </div>
);

export default Footer;