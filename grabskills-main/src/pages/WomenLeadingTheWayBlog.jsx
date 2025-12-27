import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from "../assets/woman.avif";
import img2 from "../assets/woman2.jpg";
import img3 from "../assets/woman3.avif";

const WomenLeadingTheWayBlog = () => {
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
    <div className="bg-[#FAF9F6] dark:bg-[#050505] text-[#1A1A1A] dark:text-[#EAEAEA] min-h-screen font-serif transition-colors duration-500 selection:bg-rose-500/30 overflow-x-hidden">
      
      {/* --- TOP PROGRESS BAR --- */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-black/5 dark:bg-white/5">
        <motion.div 
          style={{ width: progressBar }} 
          className="h-full bg-rose-600 dark:bg-rose-500 shadow-[0_0_15px_#f43f5e]" 
        />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <img 
            src={`${img1}`}
            alt="Woman leader"
            className="w-full h-full object-cover brightness-90 dark:brightness-[0.3] grayscale-[30%] dark:grayscale-[50%]"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="inline-block px-6 py-2 border border-rose-900/20 dark:border-rose-500/30 rounded-full bg-rose-100/50 dark:bg-rose-500/10 text-rose-800 dark:text-rose-400 text-[10px] font-sans font-black uppercase mb-10"
          >
            The Matriarchal Shift
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[130px] font-light leading-none tracking-tighter"
          >
            Leading the <br /> <span className="italic text-rose-700 dark:text-rose-500 font-medium">Way</span>
          </motion.h1>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-rose-600 dark:from-rose-500 to-transparent opacity-40" />
      </header>

      {/* --- MISSION STATEMENT --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <motion.div {...fadeIn}>
          <h2 className="text-xs uppercase tracking-[0.5em] text-rose-700 dark:text-rose-500 font-sans font-black mb-12">Empowering Communities</h2>
          <p className="text-4xl md:text-7xl leading-[1.1] font-light dark:text-white">
            When women lead, the <span className="italic text-rose-800/40 dark:text-white/20">entire</span> community <span className="font-bold underline decoration-rose-500/30 underline-offset-8">rises.</span>
          </p>
          <div className="mt-20 grid md:grid-cols-2 gap-16 text-left">
            <p className="text-xl opacity-80 leading-relaxed font-sans">
              Research shows that women invest up to 90% of their income back into their families and communities. Female leadership at the grassroots level isn't just a matter of equity—it is a strategic necessity for sustainable development.
            </p>
            <p className="text-xl opacity-80 leading-relaxed italic">
              "A woman is the full circle. Within her is the power to create, nurture, and transform."
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- GRID: PILLARS OF IMPACT --- */}
      <section className="pb-40 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <ImpactCard 
            title="Socio-Economic Mobility" 
            desc="Women-led micro-finance groups and cooperatives that break the cycle of predatory lending in rural landscapes."
          />
          <ImpactCard 
            title="Educational Advocacy" 
            desc="Creating safe spaces for girls to pursue STEM and vocational training, ensuring the next generation of leaders is diverse."
          />
          <ImpactCard 
            title="Systemic Resilience" 
            desc="Implementing community-based healthcare and nutritional programs that reduce infant mortality and improve overall village health."
          />
        </div>
      </section>

      {/* --- FEATURED STORIES SECTION --- */}
      <section className="bg-[#120a0b] text-[#fceef0] py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.h3 {...fadeIn} className="text-4xl md:text-6xl font-light italic mb-20 text-center">
            Stories of <span className="not-italic font-bold text-rose-400">Impact</span>
          </motion.h3>

          <div className="grid lg:grid-cols-2 gap-24 items-center mb-32">
             <motion.div {...fadeIn}>
                <div className="rounded-[3rem] overflow-hidden aspect-[4/5] relative">
                   <img src={`${img2}`} alt="Artisan leader" className="w-full h-full object-cover" />
                </div>
             </motion.div>
             <motion.div {...fadeIn} className="space-y-8">
                <span className="text-rose-400 font-sans font-black tracking-widest uppercase text-xs">The Weaver's Collective</span>
                <h4 className="text-4xl font-bold italic">Bypassing the Middleman</h4>
                <p className="text-xl opacity-70 leading-relaxed">
                  In a small rural cluster, Maya organized 50 local weavers into a digital-first cooperative. By training them in e-commerce and logistics, she increased their daily earnings by 400%, allowing them to fund a community school.
                </p>
                <div className="h-px w-20 bg-rose-500/50" />
             </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-24 items-center flex-row-reverse">
             <motion.div {...fadeIn} className="lg:order-2">
                <div className="rounded-[3rem] overflow-hidden aspect-[4/5] relative">
                   <img src={`${img3}`} alt="Solar engineer" className="w-full h-full object-cover" />
                </div>
             </motion.div>
             <motion.div {...fadeIn} className="space-y-8 lg:order-1">
                <span className="text-rose-400 font-sans font-black tracking-widest uppercase text-xs">Renewable Future</span>
                <h4 className="text-4xl font-bold italic">Bringing Light to the Dark</h4>
                <p className="text-xl opacity-70 leading-relaxed">
                  Fatima, a self-taught solar engineer, installed micro-grids in 12 villages that had never seen electricity. She now runs a "Solar Sisters" workshop, teaching young girls how to maintain and expand renewable energy infrastructure.
                </p>
                <div className="h-px w-20 bg-rose-500/50" />
             </motion.div>
          </div>
        </div>
      </section>

      {/* --- ROADMAP TO LEADERSHIP --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2 {...fadeIn} className="text-3xl font-bold mb-20 text-center tracking-tight italic dark:text-white">
          The <span className="not-italic">Ripple Effect</span>
        </motion.h2>
        <div className="space-y-24">
          <RoadmapStep phase="Step 01" title="Financial Autonomy" content="Establishing independent savings accounts and micro-credit lines that give women control over their economic destiny." />
          <RoadmapStep phase="Step 02" title="Voice & Visibility" content="Training in public speaking and community governance to ensure women hold seats at decision-making tables." />
          <RoadmapStep phase="Step 03" title="Generational Wealth" content="Mentorship programs that connect established female entrepreneurs with the next generation of community builders." />
        </div>
      </section>

      {/* --- CALL TO ACTION --- */}
      <footer className="py-10 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.02] pointer-events-none select-none">
          <span className="text-[25rem] font-black uppercase tracking-tighter dark:text-white">LEAD</span>
        </div>

        <motion.div {...fadeIn} className="relative z-10">
          <h2 className="text-5xl md:text-[110px] font-light leading-none tracking-tighter mb-16 dark:text-white">
            Support the <span className="italic font-bold text-rose-600 dark:text-rose-500 underline decoration-white/20">visionary</span> <br /> within every community.
          </h2>
          
        </motion.div>
      </footer>
    </div>
  );
};

/* --- MINI COMPONENTS --- */

const ImpactCard = ({ title, desc }) => (
  <motion.div 
    whileHover={{ y: -12 }}
    className="p-10 rounded-[3.5rem] bg-white dark:bg-[#0d0d0d] border border-black/5 dark:border-white/5 hover:border-rose-500/30 transition-all duration-500 shadow-xl shadow-black/[0.02] dark:shadow-none"
  >
    <div className="w-10 h-1 bg-rose-500 mb-8 rounded-full" />
    <h3 className="text-2xl font-bold mb-6 tracking-tight leading-snug dark:text-white">{title}</h3>
    <p className="text-md opacity-60 leading-relaxed font-sans font-medium">{desc}</p>
  </motion.div>
);

const RoadmapStep = ({ phase, title, content }) => (
  <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start group">
    <div className="flex-shrink-0">
      <span className="text-[10px] uppercase font-sans font-black tracking-[0.4em] text-rose-600 dark:text-rose-400 bg-rose-500/10 px-4 py-1 rounded-full">{phase}</span>
    </div>
    <div>
      <h4 className="text-3xl font-bold mb-4 group-hover:italic transition-all dark:text-white tracking-tight">{title}</h4>
      <p className="text-xl opacity-60 leading-relaxed max-w-2xl">{content}</p>
    </div>
  </div>
);

export default WomenLeadingTheWayBlog;