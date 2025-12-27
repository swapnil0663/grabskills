import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from "../assets/climate1.jpg";
import img2 from "../assets/climate2.webp";


const ClimateActionBlog = () => {
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
    <div className="bg-[#FBFAF7] dark:bg-[#070908] text-[#1D2921] dark:text-[#D9DDD9] min-h-screen font-serif transition-colors duration-500 selection:bg-lime-500/30 overflow-x-hidden">
      
      {/* --- TOP PROGRESS BAR --- */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-black/5 dark:bg-white/5">
        <motion.div 
          style={{ width: progressBar }} 
          className="h-full bg-lime-600 dark:bg-lime-400 shadow-[0_0_15px_#84cc16]" 
        />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <img 
            src={`${img1}`}
            alt="Local climate action"
            className="w-full h-full object-cover brightness-90 dark:brightness-[0.25] grayscale-[10%] dark:grayscale-[40%]"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="inline-block px-6 py-2 border border-lime-900/20 dark:border-lime-500/30 rounded-full bg-lime-100/50 dark:bg-lime-500/10 text-lime-800 dark:text-lime-400 text-[10px] font-sans font-black uppercase mb-10"
          >
            The Local Frontier
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[130px] font-light leading-none tracking-tighter"
          >
            Climate Action <br /> at the <span className="italic text-lime-700 dark:text-lime-400 font-medium">Local Level</span>
          </motion.h1>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-lime-600 dark:from-lime-400 to-transparent opacity-40" />
      </header>

      {/* --- THE MANIFESTO --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <motion.div {...fadeIn}>
          <h2 className="text-xs uppercase tracking-[0.5em] text-lime-700 dark:text-lime-400 font-sans font-black mb-12">Global Impact, Local Roots</h2>
          <p className="text-4xl md:text-7xl leading-[1.1] font-light dark:text-white">
            The climate crisis is global, but its <span className="italic text-lime-800/40 dark:text-white/20">solutions</span> are found in <span className="font-bold underline decoration-lime-500/30 underline-offset-8">local ecosystems.</span>
          </p>
          <div className="mt-20 grid md:grid-cols-2 gap-16 text-left">
            <p className="text-xl opacity-80 leading-relaxed font-sans">
              While international policies are crucial, the most effective and resilient climate actions begin at the grassroots. When communities restore their forests, manage their water, and grow their food sustainably, they collectively reduce global emissions and build climate immunity.
            </p>
            <p className="text-xl opacity-80 leading-relaxed italic">
              "Think globally, act locally – the mantra of effective climate stewardship."
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- GRID: LOCAL SOLUTIONS FOR GLOBAL CHANGE --- */}
      <section className="pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10">
          <ClimateCard 
            title="Community Reforestation" 
            desc="Establishing indigenous tree nurseries and planting millions of trees to restore local biodiversity and sequester carbon."
          />
          <ClimateCard 
            title="Bio-char Production" 
            desc="Converting agricultural waste into bio-char to enrich soil, boost crop yields, and lock carbon underground for centuries."
          />
          <ClimateCard 
            title="Decentralized Renewables" 
            desc="Developing solar and micro-hydro grids, reducing reliance on fossil fuels and providing clean energy independence."
          />
        </div>
      </section>

      {/* --- FEATURED INITIATIVE --- */}
      <section className="bg-[#0b100e] text-[#f0fdf4] py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
          <motion.div {...fadeIn} className="lg:col-span-6">
            <h3 className="text-5xl md:text-7xl font-light italic mb-10 leading-tight">
              Regenerative <br /> <span className="not-italic font-bold text-lime-400">Land Stewardship</span>
            </h3>
            <div className="space-y-12">
              <ClimatePoint label="Soil Carbon Sequestration" text="Implementing no-till farming and cover cropping techniques that turn farmlands into massive carbon sinks." />
              <ClimatePoint label="Water Harvesting Systems" text="Building rainwater catchment and greywater recycling systems to manage water scarcity and prevent runoff erosion." />
              <ClimatePoint label="Native Pollinator Habitats" text="Restoring natural habitats to protect local insect populations, vital for ecosystem health and food production." />
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="lg:col-span-6 relative">
            <div className="rounded-[4rem] overflow-hidden aspect-square shadow-2xl relative">
              <img 
                src={`${img2}`}
                className="w-full h-full object-cover grayscale-[10%]"
                alt="Community garden"
              />
            </div>
            {/* Climate Stat */}
            <div className="absolute -bottom-10 -right-4 md:right-10 bg-lime-600 text-white p-10 rounded-3xl shadow-2xl max-w-[280px]">
              <p className="text-6xl font-black mb-2 tracking-tighter">1.2B</p>
              <p className="text-xs uppercase font-sans font-black tracking-widest opacity-80">Trees planted by local communities in vulnerable ecosystems.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ROADMAP FOR LOCAL CLIMATE ACTION --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2 {...fadeIn} className="text-3xl font-bold mb-20 text-center tracking-tight italic dark:text-white">
          The Local Action <span className="not-italic">Roadmap</span>
        </motion.h2>
        <div className="space-y-24">
          <RoadmapStep phase="Assess" title="Ecological Baselines" content="Conducting community-led assessments of local environmental health, resource consumption, and vulnerability to climate change." />
          <RoadmapStep phase="Implement" title="Green Infrastructure" content="Building resilient systems: community gardens, solar micro-grids, and natural water management solutions." />
          <RoadmapStep phase="Scale" title="Knowledge Exchange" content="Sharing successful local climate models and best practices across regions, creating a ripple effect of action." />
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <footer className="py-10 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.02] pointer-events-none select-none">
          <span className="text-[25rem] font-black uppercase tracking-tighter dark:text-white">EARTH</span>
        </div>

        <motion.div {...fadeIn} className="relative z-10">
          <h2 className="text-5xl md:text-[110px] font-light leading-none tracking-tighter mb-16 dark:text-white">
            Heal the earth, <br /> one <span className="italic font-bold text-lime-600 dark:text-lime-400 underline decoration-white/20">community</span> at a time.
          </h2>
          
        </motion.div>
      </footer>
    </div>
  );
};

/* --- MINI COMPONENTS --- */

const ClimateCard = ({ title, desc }) => (
  <motion.div 
    whileHover={{ y: -12 }}
    className="p-12 rounded-[3.5rem] bg-white dark:bg-[#0c100e] border border-black/5 dark:border-white/5 hover:border-lime-500/30 transition-all duration-500 shadow-xl shadow-black/[0.02] dark:shadow-none"
  >
    <div className="w-12 h-1 bg-lime-500 mb-8 rounded-full" />
    <h3 className="text-2xl font-bold mb-6 tracking-tight leading-snug dark:text-white italic">{title}</h3>
    <p className="text-md opacity-70 leading-relaxed font-sans font-medium">{desc}</p>
  </motion.div>
);

const ClimatePoint = ({ label, text }) => (
  <div className="group border-b border-white/10 pb-8 transition-colors hover:border-lime-400">
    <p className="text-xs uppercase font-sans font-black tracking-widest text-lime-400 mb-2">{label}</p>
    <p className="text-xl opacity-80 leading-relaxed text-white">{text}</p>
  </div>
);

const RoadmapStep = ({ phase, title, content }) => (
  <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start group">
    <div className="flex-shrink-0">
      <span className="text-[10px] uppercase font-sans font-black tracking-[0.4em] text-lime-600 dark:text-lime-400 bg-lime-500/10 px-4 py-1 rounded-full">{phase}</span>
    </div>
    <div>
      <h4 className="text-3xl font-bold mb-4 group-hover:italic transition-all dark:text-white tracking-tight">{title}</h4>
      <p className="text-xl opacity-60 leading-relaxed max-w-2xl">{content}</p>
    </div>
  </div>
);

export default ClimateActionBlog;