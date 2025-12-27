import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from "../assets/communities.avif";
import img2 from "../assets/communities2.jpg";

const SustainableCommunitiesBlog = () => {
  const { scrollYProgress } = useScroll();
  
  // High-end parallax and scroll-linked animations
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.15]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const progressBar = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const fadeIn = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-[#FAF9F6] dark:bg-[#050807] text-[#1A2E05] dark:text-[#E2E8E4] min-h-screen font-serif transition-colors duration-500 selection:bg-emerald-500/30 overflow-x-hidden">
      
      {/* --- READING PROGRESS INDICATOR --- */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-black/5 dark:bg-white/5">
        <motion.div 
          style={{ width: progressBar }} 
          className="h-full bg-emerald-600 dark:bg-emerald-500 shadow-[0_0_15px_#10b981]" 
        />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <img 
            src={`${img1}`}
            alt="Sustainable rural village"
            className="w-full h-full object-cover brightness-95 dark:brightness-[0.3] grayscale-[10%] dark:grayscale-[40%]"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block px-5 py-2 border border-emerald-900/20 dark:border-emerald-500/30 rounded-full bg-emerald-100/50 dark:bg-emerald-500/10 text-emerald-800 dark:text-emerald-400 text-[10px] font-sans font-black uppercase tracking-[0.4em] mb-10"
          >
            Grassroots Revolution
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[140px] font-light leading-none tracking-tighter"
          >
            Rooted in <br /> <span className="italic text-emerald-700 dark:text-emerald-500 font-medium">Resilience</span>
          </motion.h1>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-t from-emerald-600 dark:from-emerald-500 to-transparent opacity-40" />
      </header>

      {/* --- THE CORE PHILOSOPHY --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto text-center">
        <motion.div {...fadeIn}>
          <h2 className="text-xs uppercase tracking-[0.5em] text-emerald-700 dark:text-emerald-500 font-sans font-black mb-12">The Grassroots Mandate</h2>
          <p className="text-3xl md:text-7xl leading-[1.1] font-light dark:text-white">
            Transformation begins <span className="italic text-emerald-800/40 dark:text-white/20">where</span> the <span className="font-bold underline decoration-emerald-500/30 underline-offset-8">soil meets the soul.</span>
          </p>
          <div className="mt-20 grid md:grid-cols-2 gap-16 text-left">
            <p className="text-xl opacity-80 leading-relaxed font-sans">
              Grassroots initiatives aren't just local projects; they are the fundamental building blocks of climate resilience. By empowering rural communities to own their energy, food, and water systems, we create a global network of self-sustaining hubs.
            </p>
            <p className="text-xl opacity-80 leading-relaxed italic">
              "When a village manages its own resources, it transitions from a recipient of aid to a pioneer of innovation."
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- GRID: TRANSFORMING LIVELIHOODS --- */}
      <section className="pb-40 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <CommunityCard 
            title="Sovereign Agro-Ecology" 
            desc="Moving away from industrial chemicals to indigenous farming that restores biodiversity while doubling farmer income through organic yields."
          />
          <CommunityCard 
            title="Decentralized Energy" 
            desc="Solar and biogas micro-grids owned by the community, providing 24/7 power for local industries without national grid dependency."
          />
          <CommunityCard 
            title="Circular Rural Economies" 
            desc="Waste-to-wealth programs that turn agricultural byproduct into sustainable packaging, building materials, and local currency."
          />
        </div>
      </section>

      {/* --- SECTION: THE HUMAN IMPACT --- */}
      <section className="bg-[#0D1411] text-[#E2E8E4] py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
          <motion.div {...fadeIn} className="lg:col-span-7">
            <h3 className="text-5xl md:text-[80px] font-light italic mb-12 leading-tight">
              Reviving the <br /> <span className="not-italic font-bold text-emerald-400">Rural Heartbeat</span>
            </h3>
            <div className="space-y-10">
              <ImpactRow label="01. Indigenous Seed Banks" text="Protecting over 400 varieties of heirloom seeds to ensure food security against erratic climate patterns." />
              <ImpactRow label="02. Digital Artisans" text="Training local craftspeople to use global P2P platforms, bypassing middlemen and tripling profit margins." />
              <ImpactRow label="03. Water Sovereignty" text="Ancient step-well restoration combined with smart IoT sensors to manage community water during droughts." />
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="lg:col-span-5 relative">
            <div className="rounded-[4rem] overflow-hidden aspect-[3/4] shadow-2xl">
              <img 
                src={`${img2}`}
                className="w-full h-full object-cover grayscale-[30%]"
                alt="Community Empowerment"
              />
            </div>
            {/* Stat Floating Badge */}
            <div className="absolute -bottom-8 -right-8 md:-right-12 bg-emerald-600 p-10 rounded-3xl shadow-2xl max-w-[280px]">
              <p className="text-5xl font-black text-white mb-2 tracking-tighter">72%</p>
              <p className="text-xs uppercase font-sans font-black tracking-widest text-emerald-100 leading-tight">Reduction in local poverty levels across pilot grassroots villages.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- STRATEGIC PILLARS SECTION --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2 {...fadeIn} className="text-4xl font-bold mb-20 text-center tracking-tight italic dark:text-white">
          The Pillars of <span className="not-italic">Rural Autonomy</span>
        </motion.h2>
        <div className="space-y-24">
          <PillarItem phase="Capacity Building" title="Wisdom-First Development" content="Instead of imposing external solutions, we provide the technical tools for communities to digitize and scale their existing ancestral knowledge." />
          <PillarItem phase="Infrastructure" title="The Living Grid" content="Implementing 'Lungs for the Village'—green spaces, natural filtration ponds, and solar-connected community centers." />
          <PillarItem phase="Governance" title="Hyper-Local Direct Democracy" content="Utilizing community-led committees to decide on infrastructure spending, ensuring 100% transparency and local buy-in." />
        </div>
      </section>

      {/* --- FINAL FOOTER / CTA --- */}
      <footer className="py-10 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] dark:opacity-[0.02] pointer-events-none select-none">
          <span className="text-[25rem] font-black uppercase tracking-tighter dark:text-white">ROOTS</span>
        </div>

        <motion.div {...fadeIn} className="relative z-10">
          <h2 className="text-5xl md:text-[110px] font-light leading-none tracking-tighter mb-16 dark:text-white">
            Build the future <br /> from the <span className="italic font-bold text-emerald-600 dark:text-emerald-500 underline decoration-white/20">ground up.</span>
          </h2>
          
        </motion.div>
      </footer>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const CommunityCard = ({ title, desc }) => (
  <motion.div 
    whileHover={{ y: -12 }}
    className="p-12 rounded-[3.5rem] bg-white dark:bg-[#0D1411] border border-black/5 dark:border-white/5 hover:border-emerald-500/30 transition-all duration-500 shadow-xl shadow-black/[0.02] dark:shadow-none"
  >
    <div className="w-12 h-1 bg-emerald-500 mb-8 rounded-full" />
    <h3 className="text-2xl font-bold mb-6 tracking-tight leading-snug dark:text-white italic">{title}</h3>
    <p className="text-md opacity-70 leading-relaxed font-sans font-medium">{desc}</p>
  </motion.div>
);

const ImpactRow = ({ label, text }) => (
  <div className="group border-b border-white/10 pb-8 transition-colors hover:border-emerald-400">
    <p className="text-xs uppercase font-sans font-black tracking-[0.3em] text-emerald-400 mb-2">{label}</p>
    <p className="text-2xl opacity-90 leading-relaxed">{text}</p>
  </div>
);

const PillarItem = ({ phase, title, content }) => (
  <div className="grid md:grid-cols-12 gap-6 items-start group">
    <div className="md:col-span-3">
      <span className="text-[10px] uppercase font-sans font-black tracking-[0.4em] text-emerald-600 dark:text-emerald-500 bg-emerald-500/10 px-4 py-1 rounded-full">{phase}</span>
    </div>
    <div className="md:col-span-9">
      <h4 className="text-3xl font-bold mb-4 group-hover:italic transition-all dark:text-white tracking-tight">{title}</h4>
      <p className="text-xl opacity-60 leading-relaxed max-w-2xl font-sans">{content}</p>
    </div>
  </div>
);

export default SustainableCommunitiesBlog;