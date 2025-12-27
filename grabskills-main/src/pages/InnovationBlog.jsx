import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img3 from "../assets/health1.avif";
import img2 from "../assets/innovatio2.jpg";
import img1 from "../assets/innovation1.avif";

const InnovationBlog = () => {
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
    <div className="bg-[#FAF9F6] dark:bg-[#040605] text-[#1A1A1A] dark:text-[#D1D5DB] min-h-screen font-serif transition-colors duration-500 selection:bg-cyan-500/30 overflow-x-hidden">
      
      {/* --- TOP PROGRESS BAR --- */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-black/5 dark:bg-white/5">
        <motion.div 
          style={{ width: progressBar }} 
          className="h-full bg-cyan-600 dark:bg-cyan-400 shadow-[0_0_15px_#22d3ee]" 
        />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <img 
            src={`${img1}`}
            alt="Technology for good"
            className="w-full h-full object-cover brightness-95 dark:brightness-[0.25] grayscale-[40%] dark:grayscale-[60%]"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="inline-block px-6 py-2 border border-cyan-900/20 dark:border-cyan-500/30 rounded-full bg-cyan-100/50 dark:bg-cyan-500/10 text-cyan-800 dark:text-cyan-400 text-[10px] font-sans font-black uppercase mb-10"
          >
            Tech For Humanity
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[130px] font-light leading-none tracking-tighter"
          >
            Innovation in <br /> <span className="italic text-cyan-700 dark:text-cyan-400 font-medium">Development</span>
          </motion.h1>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-cyan-600 dark:from-cyan-400 to-transparent opacity-40" />
      </header>

      {/* --- MISSION STATEMENT --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <motion.div {...fadeIn}>
          <h2 className="text-xs uppercase tracking-[0.5em] text-cyan-700 dark:text-cyan-400 font-sans font-black mb-12">The Digital Bridge</h2>
          <p className="text-4xl md:text-7xl leading-[1.1] font-light dark:text-white">
            Solving <span className="italic text-cyan-800/40 dark:text-white/20">real-world</span> problems with <span className="font-bold underline decoration-cyan-500/30 underline-offset-8">human-centric tech.</span>
          </p>
          <div className="mt-20 grid md:grid-cols-2 gap-16 text-left">
            <p className="text-xl opacity-80 leading-relaxed font-sans">
              Innovation isn't about the newest gadget; it's about applying existing technology—AI, Blockchain, and IoT—to bridge the gap in healthcare, education, and resource management for the most vulnerable.
            </p>
            <p className="text-xl opacity-80 leading-relaxed italic">
              "The most powerful use of technology is to make the invisible visible and the unreachable attainable."
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- GRID: TECH IMPACT PILLARS --- */}
      <section className="pb-40 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <TechCard 
            title="AI for Resource Mapping" 
            desc="Using machine learning and satellite imagery to predict drought patterns and optimize water distribution in rural zones."
          />
          <TechCard 
            title="Blockchain Transparency" 
            desc="Decentralized ledgers that ensure social development funds reach intended recipients without leakage or middleman interference."
          />
          <TechCard 
            title="IoT Precision Farming" 
            desc="Low-cost sensors providing small-scale farmers with real-time soil data to maximize yield with minimal water usage."
          />
        </div>
      </section>

      {/* --- FEATURED CASE STUDIES --- */}
      <section className="bg-[#080a0c] text-[#f0f9ff] py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h3 {...fadeIn} className="text-4xl md:text-6xl font-light italic mb-20 text-center">
            Technology <span className="not-italic font-bold text-cyan-400">At Work</span>
          </motion.h3>

          <div className="grid lg:grid-cols-12 gap-16 items-center mb-32">
             <motion.div {...fadeIn} className="lg:col-span-7">
                <div className="rounded-[3rem] overflow-hidden aspect-video relative shadow-2xl">
                   <img src={`${img2}`} alt="Tech in field" className="w-full h-full object-cover" />
                </div>
             </motion.div>
             <motion.div {...fadeIn} className="lg:col-span-5 space-y-6">
                <span className="text-cyan-400 font-sans font-black tracking-widest uppercase text-xs">The Solar Grid Project</span>
                <h4 className="text-4xl font-bold">Predictive Energy Grids</h4>
                <p className="text-xl opacity-70 leading-relaxed">
                  By implementing smart meters in off-grid villages, we use predictive analytics to balance energy loads, ensuring that community clinics have priority power during critical hours.
                </p>
                <div className="h-px w-20 bg-cyan-500/50" />
             </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
             <motion.div {...fadeIn} className="lg:col-span-5 lg:order-2">
                <div className="rounded-[3rem] overflow-hidden aspect-video relative shadow-2xl">
                   <img src={`${img3}`} alt="Health tech" className="w-full h-full object-cover" />
                </div>
             </motion.div>
             <motion.div {...fadeIn} className="lg:col-span-7 lg:order-1 space-y-6">
                <span className="text-cyan-400 font-sans font-black tracking-widest uppercase text-xs">Healthcare Accessibility</span>
                <h4 className="text-4xl font-bold italic">Tele-Diagnostic Hubs</h4>
                <p className="text-xl opacity-70 leading-relaxed">
                  Remote diagnostic tools connected via low-orbit satellites allow village health workers to consult with specialists globally, reducing the need for dangerous and expensive travel for patients.
                </p>
                <div className="h-px w-20 bg-cyan-500/50" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* --- ROADMAP TO SCALE --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2 {...fadeIn} className="text-3xl font-bold mb-20 text-center tracking-tight italic dark:text-white">
          Scaling <span className="not-italic">Social Innovation</span>
        </motion.h2>
        <div className="space-y-24">
          <RoadmapStep phase="Open Source" title="Democratizing Software" content="Building open-source platforms that allow different communities to adapt tools to their specific cultural and geographic needs." />
          <RoadmapStep phase="Human-In-The-Loop" title="Community Governance" content="Ensuring technology is always guided by local community leaders to prevent the 'digital divide' from widening." />
          <RoadmapStep phase="Ethical Data" title="Privacy as a Priority" content="Protecting the data of marginalized populations as a fundamental human right during the digital transformation process." />
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <footer className="py-10 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.02] pointer-events-none select-none">
          <span className="text-[25rem] font-black uppercase tracking-tighter dark:text-white">TECH</span>
        </div>

        <motion.div {...fadeIn} className="relative z-10">
          <h2 className="text-5xl md:text-[110px] font-light leading-none tracking-tighter mb-16 dark:text-white">
            Engineer a <span className="italic font-bold text-cyan-600 dark:text-cyan-400 underline decoration-white/20">better</span> <br /> world with us.
          </h2>
          
          
        </motion.div>
      </footer>
    </div>
  );
};

/* --- MINI COMPONENTS --- */

const TechCard = ({ title, desc }) => (
  <motion.div 
    whileHover={{ y: -12 }}
    className="p-10 rounded-[3.5rem] bg-white dark:bg-[#0c0e10] border border-black/5 dark:border-white/5 hover:border-cyan-500/30 transition-all duration-500 shadow-xl shadow-black/[0.02] dark:shadow-none"
  >
    <div className="w-10 h-1 bg-cyan-500 mb-8 rounded-full" />
    <h3 className="text-2xl font-bold mb-6 tracking-tight leading-snug dark:text-white italic">{title}</h3>
    <p className="text-md opacity-60 leading-relaxed font-sans font-medium">{desc}</p>
  </motion.div>
);

const RoadmapStep = ({ phase, title, content }) => (
  <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start group">
    <div className="flex-shrink-0">
      <span className="text-[10px] uppercase font-sans font-black tracking-[0.4em] text-cyan-600 dark:text-cyan-400 bg-cyan-500/10 px-4 py-1 rounded-full">{phase}</span>
    </div>
    <div>
      <h4 className="text-3xl font-bold mb-4 group-hover:italic transition-all dark:text-white tracking-tight">{title}</h4>
      <p className="text-xl opacity-60 leading-relaxed max-w-2xl">{content}</p>
    </div>
  </div>
);

export default InnovationBlog;