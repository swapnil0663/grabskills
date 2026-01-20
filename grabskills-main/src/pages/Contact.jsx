import React from "react";
import { motion } from "framer-motion";
import {
  FiMail,
  FiPhone,
  FiUser,
  FiMessageSquare,
  FiSend,
  FiGlobe,
  FiHeart,
  FiLayers,
} from "react-icons/fi";

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 },
    },
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] dark:bg-[#030712] transition-colors duration-500 overflow-hidden relative pt-24 pb-12 px-4">
      {/* --- CRAZY DECORATIVE FLOATING ELEMENTS --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Floating Heart */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 15, -15, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-[15%] left-[5%] text-red-400/30 dark:text-red-500/20 text-6xl hidden lg:block"
        >
          <FiHeart />
        </motion.div>

        {/* Floating Globe */}
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -10, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
          className="absolute bottom-[20%] right-[5%] text-green-400/30 dark:text-green-500/20 text-7xl hidden lg:block"
        >
          <FiGlobe />
        </motion.div>

        {/* Background Blur Orbs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute -top-24 -left-24 w-96 h-96 bg-green-500/10 dark:bg-green-500/20 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-2 rounded-full border-2 border-green-500/30 dark:border-green-400/20 bg-green-50/50 dark:bg-green-900/10 mb-2 backdrop-blur-sm"
          >
            <span className="text-green-600 dark:text-green-400 font-black uppercase tracking-[0.3em] text-xs">
              Get In Touch
            </span>
          </motion.div>

          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight"
          >
            Let's Make a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">
              Difference.
            </span>
          </motion.h1>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* LEFT SIDE: INFO */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="lg:col-span-2 space-y-8"
          >
            <div className="bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/20 dark:border-gray-800 shadow-2xl">
              <h3 className="text-2xl font-black mb-8 dark:text-white flex items-center gap-3">
                <FiLayers className="text-green-500" /> Contact Info
              </h3>
              <div className="space-y-8">
                <ContactInfoItem
                  icon={<FiPhone />}
                  title="Call Us"
                  detail="+91 9319772294"
                />
                <ContactInfoItem
                  icon={<FiMail />}
                  title="Email Us"
                  detail="info@uptoskills.com"
                />
                <ContactInfoItem
                  icon={<FiMessageSquare />}
                  title="Visit Us"
                  detail="Palam, New Delhi"
                />
              </div>
            </div>

            {/* VOLUNTEER CARD */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-green-600 to-emerald-700 p-8 rounded-[2.5rem] text-white shadow-2xl shadow-green-500/20 relative overflow-hidden group"
            >
              <h4 className="text-2xl font-black mb-2 relative z-10">
                Want to Volunteer?
              </h4>
              <p className="opacity-90 mb-6 relative z-10">
                Join our community of 500+ changemakers worldwide.
              </p>
              <button className="bg-white text-green-700 px-8 py-3 rounded-2xl font-black text-sm relative z-10 hover:bg-gray-100 transition-colors">
                Send Mail
              </button>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE: THE FORM */}
          <motion.form
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="lg:col-span-3 bg-white dark:bg-gray-900 p-8 md:p-12 rounded-[3rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-gray-100 dark:border-gray-800 relative"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <InputField
                label="First Name"
                placeholder="Swapnil"
                icon={<FiUser />}
              />
              <InputField
                label="Last Name"
                placeholder="Patil"
                icon={<FiUser />}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <InputField
                label="Email"
                placeholder="swap@example.com"
                icon={<FiMail />}
                type="email"
              />
              <InputField
                label="Contact Number"
                placeholder="+91 000 000 0000"
                icon={<FiPhone />}
                type="tel"
              />
            </div>

            <div className="mt-6">
              <InputField
                label="Subject"
                placeholder="How can we help?"
                icon={<FiLayers />}
              />
            </div>

            <div className="mt-6">
              <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3 ml-2">
                Your Message
              </label>
              <div className="relative group">
                <textarea
                  rows="4"
                  className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-green-500/50 dark:focus:border-green-400/30 rounded-3xl p-5 outline-none transition-all dark:text-white resize-none"
                  placeholder="Tell us about your vision..."
                ></textarea>
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-10 bg-gradient-to-r from-green-600 to-emerald-500 text-white py-5 rounded-3xl font-black text-lg flex items-center justify-center gap-3 shadow-xl shadow-green-500/30 hover:shadow-green-500/50 transition-all"
            >
              SEND MESSAGE <FiSend className="group-hover:translate-x-1" />
            </motion.button>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

/* HELPER COMPONENTS */
const InputField = ({ label, placeholder, icon, type = "text" }) => (
  <div className="w-full">
    <label className="block text-xs font-black text-gray-400 uppercase tracking-widest mb-3 ml-2">
      {label}
    </label>
    <div className="relative group">
      <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-green-500 transition-colors text-xl">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-gray-50 dark:bg-gray-800 border-2 border-transparent focus:border-green-500/50 dark:focus:border-green-400/30 rounded-2xl py-5 pl-14 pr-5 outline-none transition-all dark:text-white"
      />
    </div>
  </div>
);

const ContactInfoItem = ({ icon, title, detail }) => (
  <div className="flex items-center gap-5 group">
    <div className="w-14 h-14 rounded-2xl bg-green-50 dark:bg-green-500/5 flex items-center justify-center text-green-600 dark:text-green-400 text-2xl group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300 shadow-sm">
      {icon}
    </div>
    <div>
      <h4 className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-black mb-1">
        {title}
      </h4>
      <p className="text-gray-900 dark:text-gray-200 font-bold text-lg">
        {detail}
      </p>
    </div>
  </div>
);

export default ContactPage;
