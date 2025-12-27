import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import img1 from "../assets/health1.avif";
import img2 from "../assets/health2.avif";

const HealthAwarenessBlog = () => {
  const { scrollYProgress } = useScroll();
  
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const fadeIn = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-[#F8FAF9] dark:bg-[#050707] text-[#1E2923] dark:text-[#D1D9D4] min-h-screen font-serif transition-colors duration-500 selection:bg-mint-500/30 overflow-x-hidden">
      
      {/* --- TOP PROGRESS BAR --- */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-black/5 dark:bg-white/5">
        <motion.div 
          style={{ width: progressBar }} 
          className="h-full bg-teal-600 dark:bg-teal-400 shadow-[0_0_15px_#2dd4bf]" 
        />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <img 
            src={`${img1}`}
            alt="Wellness and hygiene"
            className="w-full h-full object-cover brightness-95 dark:brightness-[0.25] grayscale-[20%] dark:grayscale-[50%]"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="inline-block px-6 py-2 border border-teal-900/20 dark:border-teal-500/30 rounded-full bg-teal-100/50 dark:bg-teal-500/10 text-teal-800 dark:text-teal-400 text-[10px] font-sans font-black uppercase mb-10"
          >
            The Wellness Ripple
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[130px] font-light leading-none tracking-tighter"
          >
            Health & <br /> <span className="italic text-teal-700 dark:text-teal-400 font-medium">Hygiene</span>
          </motion.h1>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-teal-600 dark:from-teal-400 to-transparent opacity-40" />
      </header>

      {/* --- THE MANIFESTO --- */}
      <section className="py-40 px-6 max-w-5xl mx-auto text-center">
        <motion.div {...fadeIn}>
          <h2 className="text-xs uppercase tracking-[0.5em] text-teal-700 dark:text-teal-400 font-sans font-black mb-12">Small Habits, Big Impact</h2>
          <p className="text-4xl md:text-7xl leading-[1.1] font-light dark:text-white">
            Cleanliness is the <span className="italic text-teal-800/40 dark:text-white/20">silent</span> foundation of <span className="font-bold underline decoration-teal-500/30 underline-offset-8">prosperous nations.</span>
          </p>
          <div className="mt-20 grid md:grid-cols-2 gap-16 text-left">
            <p className="text-xl opacity-80 leading-relaxed font-sans">
              Hygiene is not a luxury; it is a fundamental human right. By instilling small, daily habits—from water purification to waste segregation—we reduce the global disease burden by up to 45%, unlocking billions in human potential.
            </p>
            <p className="text-xl opacity-80 leading-relaxed italic">
              "The greatest wealth is health, and the greatest health begins with a simple drop of clean water."
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- GRID: THE HABIT REVOLUTION --- */}
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <HealthCard 
            title="Point-of-Use Filtration" 
            desc="Empowering households with low-cost, ceramic or bio-sand filters to eliminate water-borne pathogens at the source."
          />
          <HealthCard 
            title="Sanitation Sovereignty" 
            desc="Building community-led ecological sanitation systems that convert human waste into safe, pathogen-free compost."
          />
          <HealthCard 
            title="Menstrual Health Equity" 
            desc="Breaking taboos through education and local production of biodegradable hygiene products, keeping girls in school."
          />
        </div>
      </section>

      {/* --- SECTION: THE VISUAL STORY --- */}
      <section className="bg-[#0b1210] text-[#e8f5f1] py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
          <motion.div {...fadeIn} className="lg:col-span-6">
            <h3 className="text-5xl md:text-7xl font-light italic mb-10 leading-tight">
              Prevention <br /> over <span className="not-italic font-bold text-teal-400">Prescription</span>
            </h3>
            <div className="space-y-12">
              <HealthPoint label="Handwashing Stations" text="Strategically placing contact-less washing units in markets and schools to reduce respiratory and enteric infections." />
              <HealthPoint label="Nutrition Intelligence" text="Using community gardens to supplement local diets, moving from 'stomach-filling' to 'body-nourishing' habits." />
              <HealthPoint label="Waste Circularity" text="Teaching communities to manage medical and organic waste, preventing the contamination of local groundwater." />
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="lg:col-span-6 relative">
            <div className="rounded-[4rem] overflow-hidden aspect-square shadow-2xl relative">
              <img 
                src={`${img2}`}
                className="w-full h-full object-cover grayscale-[20%]"
                alt="Hygiene and water"
              />
            </div>
            {/* Health Stats */}
            <div className="absolute -bottom-10 -right-4 md:right-10 bg-teal-600 text-white p-10 rounded-3xl shadow-2xl max-w-[280px]">
              <p className="text-6xl font-black mb-2 tracking-tighter">45%</p>
              <p className="text-xs uppercase font-sans font-black tracking-widest opacity-80">Decrease in childhood illness via basic hygiene education.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ROADMAP TO A HEALTHY COMMUNITY --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2 {...fadeIn} className="text-3xl font-bold mb-20 text-center tracking-tight italic dark:text-white">
          The Roadmap to <span className="not-italic">Vitality</span>
        </motion.h2>
        <div className="space-y-24">
          <RoadmapStep phase="Step 01" title="Community Literacy" content="Using visual storytelling and local languages to explain the 'Germ Theory' and the mechanics of infection." />
          <RoadmapStep phase="Step 02" title="Infrastructure Audit" content="Fixing the leaks—literally. Ensuring that community water sources are protected from livestock and runoff." />
          <RoadmapStep phase="Step 03" title="Behavioral Reinforcement" content="Creating 'Health Champions' within the community who model habits and lead local hygiene committees." />
        </div>
      </section>

      {/* --- FINAL VISION --- */}
      <footer className="py-20 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.02] pointer-events-none select-none">
          <span className="text-[25rem] font-black uppercase tracking-tighter dark:text-white">PURE</span>
        </div>

        <motion.div {...fadeIn} className="relative z-10">
          <h2 className="text-5xl md:text-[110px] font-light leading-none tracking-tighter mb-16 dark:text-white">
            Health is a <span className="italic font-bold text-teal-600 dark:text-teal-400 underline decoration-white/20">collective</span> <br /> responsibility.
          </h2>
          
        </motion.div>
      </footer>
    </div>
  );
};

/* --- MINI COMPONENTS --- */

const HealthCard = ({ title, desc }) => (
  <motion.div 
    whileHover={{ y: -12 }}
    className="p-12 rounded-[3.5rem] bg-white dark:bg-[#0c0e0e] border border-black/5 dark:border-white/5 hover:border-teal-500/30 transition-all duration-500 shadow-xl shadow-black/[0.02] dark:shadow-none"
  >
    <div className="w-12 h-1 bg-teal-500 mb-8 rounded-full" />
    <h3 className="text-2xl font-bold mb-6 tracking-tight leading-snug dark:text-white italic">{title}</h3>
    <p className="text-md opacity-70 leading-relaxed font-sans font-medium">{desc}</p>
  </motion.div>
);

const HealthPoint = ({ label, text }) => (
  <div className="group border-b border-white/10 pb-8 transition-colors hover:border-teal-400">
    <p className="text-xs uppercase font-sans font-black tracking-widest text-teal-400 mb-2">{label}</p>
    <p className="text-xl opacity-80 leading-relaxed text-white">{text}</p>
  </div>
);

const RoadmapStep = ({ phase, title, content }) => (
  <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start group">
    <div className="flex-shrink-0">
      <span className="text-[10px] uppercase font-sans font-black tracking-[0.4em] text-teal-600 dark:text-teal-400 bg-teal-500/10 px-4 py-1 rounded-full">{phase}</span>
    </div>
    <div>
      <h4 className="text-3xl font-bold mb-4 group-hover:italic transition-all dark:text-white tracking-tight">{title}</h4>
      <p className="text-xl opacity-60 leading-relaxed max-w-2xl">{content}</p>
    </div>
  </div>
);

export default HealthAwarenessBlog;