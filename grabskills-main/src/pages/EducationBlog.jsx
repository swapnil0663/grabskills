import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import img1 from "../assets/education1.avif";
import img2 from "../assets/education.avif";

const EducationBlog = () => {
  const { scrollYProgress } = useScroll();
  
  // Parallax and Reveal Animations
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const fadeIn = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  };

  return (
    <div className="bg-[#FAF9F6] dark:bg-[#080B0A] text-[#1A1A1A] dark:text-[#E2E8E4] min-h-screen font-serif transition-colors duration-500 selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* --- READING PROGRESS --- */}
      <div className="fixed top-0 left-0 w-full h-1 z-[100] bg-black/5 dark:bg-white/5">
        <motion.div 
          style={{ width: progressWidth }} 
          className="h-full bg-blue-600 dark:bg-blue-500 shadow-[0_0_15px_#3b82f6]" 
        />
      </div>

      {/* --- HERO SECTION --- */}
      <header className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ scale: heroScale, opacity: heroOpacity }} className="absolute inset-0 z-0">
          <img 
           src={`${img1}`}
            alt="Education and growth"
            className="w-full h-full object-cover brightness-95 dark:brightness-[0.35] grayscale-[20%] dark:grayscale-[40%]"
          />
        </motion.div>
        
        <div className="relative z-10 text-center px-6 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, letterSpacing: "0.2em" }}
            animate={{ opacity: 1, letterSpacing: "0.5em" }}
            className="inline-block px-6 py-2 border border-blue-900/20 dark:border-blue-500/30 rounded-full bg-blue-100/50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-400 text-[10px] font-sans font-black uppercase mb-10"
          >
            Future of Learning
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[130px] font-light leading-none tracking-tighter"
          >
            Education as a <br /> <span className="italic text-blue-700 dark:text-blue-500 font-medium">Catalyst</span>
          </motion.h1>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-t from-blue-600 dark:from-blue-500 to-transparent opacity-40" />
      </header>

      {/* --- THE MANIFESTO --- */}
      <section className="py-40 px-6 max-w-5xl mx-auto text-center">
        <motion.div {...fadeIn}>
          <h2 className="text-xs uppercase tracking-[0.5em] text-blue-700 dark:text-blue-500 font-sans font-black mb-12">The Skill Shift</h2>
          <p className="text-4xl md:text-7xl leading-[1.1] font-light dark:text-white">
            Knowledge is <span className="italic text-blue-800/40 dark:text-white/20">abundance</span>, but <span className="font-bold underline decoration-blue-500/30 underline-offset-8">application</span> is power.
          </p>
          <div className="mt-20 grid md:grid-cols-2 gap-16 text-left">
            <p className="text-xl opacity-80 leading-relaxed font-sans">
              Traditional education models focus on the storage of information. In the age of AI, we must shift toward **Skill-Based Education**—fostering the ability to solve complex, real-world problems.
            </p>
            <p className="text-xl opacity-80 leading-relaxed italic">
              "The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn."
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- GRID: WHY SKILLS MATTER NOW --- */}
      <section className="pb-40 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCard 
            num="01" 
            title="Cognitive Flexibility" 
            desc="The ability to switch between different concepts or adapt to new information. This is the cornerstone of the modern workforce."
          />
          <SkillCard 
            num="02" 
            title="Technological Fluency" 
            desc="Moving beyond 'using' tools to 'orchestrating' them. Understanding the logic behind AI and automation."
          />
          <SkillCard 
            num="03" 
            title="Emotional Intelligence" 
            desc="As technical tasks automate, the human element—empathy, leadership, and collaboration—becomes the highest-paid skill."
          />
        </div>
      </section>

      {/* --- SECTION: BEYOND THE CLASSROOM --- */}
      <section className="bg-[#121615] text-[#FCFAF7] py-32 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 items-center">
          <motion.div {...fadeIn} className="lg:col-span-6">
            <h3 className="text-5xl md:text-7xl font-light italic mb-10 leading-tight">
              Redefining <br /> <span className="not-italic font-bold text-blue-400">Human Capital</span>
            </h3>
            <div className="space-y-12">
              <Point label="Micro-Credentials" text="The rise of specific, verifiable skills over broad, generalized degrees that lose relevance every 5 years." />
              <Point label="Project-Led Learning" text="Education that mimics the workplace: building, failing, and iterating on real products instead of passing exams." />
              <Point label="Lifelong Feedback" text="Shifting from 'End-of-School' to 'Subscription Learning' where education is a constant companion." />
            </div>
          </motion.div>

          <motion.div {...fadeIn} className="lg:col-span-6 relative">
            <div className="rounded-[4rem] overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src={`${img2}`}
                className="w-full h-full object-cover"
                alt="Digital learning"
              />
            </div>
            {/* Impact Stats */}
            <div className="absolute -bottom-10 -left-6 bg-blue-600 text-white p-10 rounded-3xl shadow-2xl max-w-[300px]">
              <p className="text-6xl font-black mb-2 tracking-tighter">85%</p>
              <p className="text-xs uppercase font-sans font-black tracking-widest opacity-80 leading-tight">of jobs that will exist in 2030 haven't been invented yet.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- ROADMAP: THE EVOLUTION --- */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <motion.h2 {...fadeIn} className="text-4xl font-bold mb-20 text-center tracking-tight italic dark:text-white">
          The Catalyst <span className="not-italic">Roadmap</span>
        </motion.h2>
        <div className="space-y-20">
          <RoadmapItem step="01" title="Digital Literacy as a Right" content="Ensuring every community has access to high-speed data and the hardware necessary to participate in the global digital economy." />
          <RoadmapItem step="02" title="Vocational Integration" content="Blurring the lines between trade schools and universities to create 'Master Makers' who understand both theory and practice." />
          <RoadmapItem step="03" title="Sustainable Innovation" content="Teaching kids not just how to build, but how to build for the planet—integrating circular economy principles into every curriculum." />
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <footer className="py-10 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
          <span className="text-[25rem] font-black uppercase tracking-tighter dark:text-white">LEARN</span>
        </div>

        <motion.div {...fadeIn} className="relative z-10">
          <h2 className="text-5xl md:text-[120px] font-light leading-none tracking-tighter mb-16 dark:text-white">
            The future belongs <br /> to the <span className="italic font-bold text-blue-600 dark:text-blue-500">skilled.</span>
          </h2>
          {/* <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <button className="px-14 py-6 bg-blue-600 text-white rounded-full font-sans font-bold uppercase tracking-widest text-[11px] hover:bg-blue-700 hover:scale-105 transition-all shadow-xl shadow-blue-500/20">
              Start Learning Today
            </button>
            <button className="px-14 py-6 border border-black/10 dark:border-white/20 rounded-full font-sans font-bold uppercase tracking-widest text-[11px] hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
              Our Educational Programs
            </button>
          </div> */}
        </motion.div>
      </footer>
    </div>
  );
};

/* --- SUB-COMPONENTS --- */

const SkillCard = ({ num, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="p-12 rounded-[3.5rem] bg-white dark:bg-[#0D1211] border border-black/5 dark:border-white/5 hover:border-blue-500/30 transition-all duration-500 shadow-xl shadow-black/[0.02] dark:shadow-none"
  >
    <p className="text-5xl font-black text-blue-900/10 dark:text-blue-500/10 mb-10 italic">{num}</p>
    <h3 className="text-2xl font-bold mb-6 tracking-tight leading-snug dark:text-white">{title}</h3>
    <p className="text-md opacity-60 leading-relaxed font-sans font-medium">{desc}</p>
  </motion.div>
);

const Point = ({ label, text }) => (
  <div className="group border-b border-white/10 pb-8 transition-colors hover:border-blue-400">
    <p className="text-xs uppercase font-sans font-black tracking-widest text-blue-400 mb-2">{label}</p>
    <p className="text-xl opacity-80 leading-relaxed text-white">{text}</p>
  </div>
);

const RoadmapItem = ({ step, title, content }) => (
  <div className="flex flex-col md:flex-row gap-8 md:gap-24 items-start group">
    <div className="flex-shrink-0">
      <p className="text-7xl font-black opacity-10 group-hover:opacity-100 group-hover:text-blue-500 transition-all duration-500 font-sans italic tracking-tighter">{step}</p>
    </div>
    <div>
      <h4 className="text-3xl font-bold mb-6 group-hover:italic transition-all dark:text-white">{title}</h4>
      <p className="text-xl opacity-60 leading-relaxed max-w-2xl">{content}</p>
    </div>
  </div>
);

export default EducationBlog;