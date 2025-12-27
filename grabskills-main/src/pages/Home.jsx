import { motion, useMotionValue, animate, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import educationImg from "../assets/eduicon.png";
import enovironmentImg from "../assets/environmenticon.png";
import womenImg from "../assets/womenicon.png";
import ruralImg from "../assets/ruralicon.png";
import enterpreneurImg from "../assets/entrepreneuricon.png";
import healthImg from "../assets/healthicon.png";


const ImpactItem = ({ value, suffix, label, description }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.4 }); // trigger when 40% visible
  const [count, setCount] = useState(0);
  

  useEffect(() => {
    if (!isInView) {
      setCount(0); // reset when leaving view
      return;
    }

    let start = 0;
    const duration = 1200;
    const increment = Math.ceil(value / (duration / 16));

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(counter);
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <h3 className="text-4xl sm:text-5xl font-bold text-green-500 dark:text-blue-600">
        {count}{suffix}
      </h3>
      <p className="uppercase tracking-wide text-sm font-semibold mt-2 dark:text-white">
        {label}
      </p>
      <p className="text-gray-600 text-sm mt-1 max-w-xs mx-auto dark:text-white">
        {description}
      </p>
    </div>
  );
};

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 3, y: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.5
    }
  }
};
function ProgramItem({ image, title, desc, titleColor, onClick }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -3 }}
      onClick={onClick}
      className="flex items-start gap-5 cursor-pointer"
    >
      {/* IMAGE ONLY */}
      <img
        src={image}
        alt={title}
        className="w-14 h-14 object-contain shrink-0"
      />

      {/* TEXT */}
      <div>
        <h3 className={`text-lg font-extrabold ${titleColor}`}>
          {title}
        </h3>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 max-w-sm">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

/* Counter */
function Counter({ value, suffix = "" }) {
  const [display, setDisplay] = useState(0);
  const count = useMotionValue(0);

  useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(Math.round(latest));
      }
    });

    return () => controls.stop();
  }, [value]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
    >
      {display}
      {suffix}
    </motion.span>
  );
}



export default function Home() {
  const navigate = useNavigate();

  // Animation for the background floating blobs
  const blobVariants = {
    animate: {
      scale: [1, 1.1, 1],
      rotate: [0, 90, 0],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };
  // Animation Variants
  const line1Variant = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 50 }
    }
  };

  const line2Variant = {
    hidden: { x: "100vw", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", damping: 20, stiffness: 50 }
    }
  };

  const typingContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03, // Speed of "typing"
      },
    },
  };

  const letterVariant = {
    hidden: { opacity: 0, display: "none" },
    visible: { opacity: 1, display: "inline" },
  };

  const subText = "We drive change through education, sustainability, and innovation. Join us in making a global impact today.";

  const containerRef = useRef(null);

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // 1. Heading Animations: Slide in/out based on scroll
  // As you scroll down (0 to 1), Line 1 goes from 0 to -500px, Line 2 goes 0 to 500px
  const xLeft = useTransform(scrollYProgress, [0, 1], [0, -800]);
  const xRight = useTransform(scrollYProgress, [0, 1], [0, 800]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // 2. Subtext "Erase" effect: Map scroll to width/opacity
  const textWidth = useTransform(scrollYProgress, [0, 0.4], ["100%", "0%"]);

  // 3. Background Parallax & Zoom
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.3]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <div id="homeTop">
      {/* HERO */}
      <section
        ref={containerRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center text-white"
      >
        {/* --- BACKGROUND ANIMATION --- */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear"
          }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=2070')`, // Replace with your heroImage variable
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}

        >
          {/* Dark Overlay with a subtle moving gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />
        </motion.div>

        {/* --- CONTENT --- */}
        <div className="relative z-10 text-center px-6 w-full max-w-6xl">

          {/* BIG TEXT: LINE 1 (From Left) */}
          <div className=" mb-2">
            <motion.h1
              style={{ x: xLeft, opacity: opacityFade }}
              initial={{ x: -2000 }}
              animate={{ x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-black text-white dark:text-green-500 drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
            >
              Empowering Communities
            </motion.h1>
          </div>

          {/* BIG TEXT: LINE 2 (From Right) */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              style={{ x: xRight, opacity: opacityFade }}
              initial={{ x: 2000 }}
              animate={{ x: 0 }}
              transition={{ duration: 2, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-black text-green-400 dark:text-white drop-shadow-[0_5px_15px_rgba(34,197,94,0.3)]"
            >
              for a Better Tomorrow
            </motion.h1>
          </div>

          {/* SMALL TEXT (Typewriter Animation) */}


          <motion.div
            variants={typingContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }}
            className="mx-auto max-w-2xl min-h-[3rem] text-center"
          // Prevents layout shift
          >
            <p className="text-lg md:text-xl text-gray-100 dark:text-green-500 font-medium leading-relaxed drop-shadow-lg">
              {subText.split("").map((char, index) => (
                <motion.span key={index} variants={letterVariant}>
                  {char}
                </motion.span>
              ))}
              {/* The "Blinking Cursor" */}
              <motion.span
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="inline-block w-[2px] h-5 bg-green-400 ml-1 align-middle"
              />
            </p>
          </motion.div>


          {/* CTA BUTTON */}
          <motion.button
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: false, amount: 0.6 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            whileHover={{ scale: 1.05, backgroundColor: "#22c55e" }}
            whileTap={{ scale: 0.95 }}
            onClick={()=>{
              const section=document.getElementById("programs");
              if(section){
                section.scrollIntoView({behavior:"smooth"});
              }
            }}
            className="mt-10 bg-green-500 dark:text-black text-white px-10 py-4 rounded-full font-bold text-lg uppercase tracking-widest shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all"
          >
            Explore programs
          </motion.button>
        </div>

        {/* Decorative Floating Elements for visual "Attractive" look */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl"
        />
      </section>

      {/* WHY */}
      <section className="py-20 dark:bg-black px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold dark:text-green-500">Why We Exist</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Millions of people lack access to quality education, sustainable
            livelihoods, and basic environmental protection. We exist to bridge
            this gap by empowering communities with scalable solutions.
          </p>
        </motion.div>
      </section>

      {/* IMPACT */}

      <section className="bg-gray-100 dark:bg-green-500 py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }} // NOT once
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12 dark:text-white">
            Our Impact
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            <ImpactItem
              value={20}
              suffix="+"
              label="Children"
              description="Children and families impacted every year"
            />
            <ImpactItem
              value={2000}
              suffix="+"
              label="Villages"
              description="Villages and slums reached nationwide"
            />
            <ImpactItem
              value={400}
              suffix="+"
              label="Projects"
              description="Projects in education, health & empowerment"
            />
            <ImpactItem
              value={27}
              suffix="+"
              label="States"
              description="States including remote regions"
            />
          </div>
        </motion.div>
      </section>

      {/* OUR PROGRAMS (VERTICAL) */}
      <section id="programs" className="py-10 px-6 bg-white dark:bg-gray-950 dark:text-green-500">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    className="max-w-4xl mx-auto text-center mb-20"
  >
    <h2 className="text-4xl font-bold">Our Programs</h2>
    <p className="mt-4 text-gray-600 dark:text-gray-300">
      We work across key areas to create sustainable, long-term impact at the grassroots level.
    </p>
  </motion.div>

  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: false }}
    className="max-w-6xl mx-auto grid md:grid-cols-2 gap-x-24 gap-y-16"
  >

    {/* LEFT COLUMN */}
    <div className="space-y-16">
      <ProgramItem
       image={enovironmentImg}
        title="ENVIRONMENT & CLIMATE ACTION"
        titleColor="text-green-300 dark:text-green-300"
        desc="Promoting sustainability, conservation, and climate resilience within communities."
        onClick={() => navigate("/environment")}
      />

      <ProgramItem
       image={enterpreneurImg}
        title="ENTREPRENEURSHIP & INNOVATION"
        titleColor="text-blue-300 dark:text-blue-300"
        desc="Supporting entrepreneurs and startups to create inclusive economic opportunities."
        onClick={() => navigate("/entrepreneurship")}
      />

      <ProgramItem
  image={educationImg}
  title="EDUCATION & SKILL DEVELOPMENT"
  titleColor="text-pink-300 dark:text-pink-300"
  desc="Enhancing learning outcomes and employability through education and training."
  onClick={() => navigate("/education")}
/>



    </div>

    {/* RIGHT COLUMN */}
    <div className="space-y-16">
      <ProgramItem
        image={healthImg}
        titleColor="text-purple-300 dark:text-purple-300"
        title="HEALTH & HYGIENE"
        desc="Improving healthcare access and hygiene awareness in underserved communities."
        onClick={() => navigate("/health")}
      />

      <ProgramItem
        image={womenImg}
        titleColor="text-pink-400 dark:text-pink-400"
        title="WOMEN EMPOWERMENT"
        desc="Empowering women through education, leadership, and community participation."
        onClick={() => navigate("/women-empowerment")}
      />

      <ProgramItem
        image={ruralImg}
        titleColor="text-orange-300 dark:text-orange-400"
        title="RURAL DEVELOPMENT & LIVELIHOOD"
        desc="Strengthening rural economies and sustainable livelihood opportunities."
        onClick={() => navigate("/rural-development")}
      />
    </div>
  </motion.div>
</section>

      {/* BLOGS */}
      <section className="py-12 px-6 bg-gray-100 dark:bg-gray-800 ">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold dark:text-green-500">Latest Blogs</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            Insights, stories, and updates from our work on the ground.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {[
            {
              title: "Building Sustainable Communities",
              date: "March 2025",
              desc: "How grassroots initiatives are transforming rural livelihoods.",
              adr:"/SustainableCommunitiesBlog",
            },
            {
              title: "Education as a Catalyst for Change",
              date: "February 2025",
              desc: "Why skill-based education matters more than ever.",
              adr:"/educationBlog",
            },
            {
              title: "Women Leading the Way",
              date: "January 2025",
              desc: "Stories of women creating impact in their communities.",
              adr:"/WomenLeadingTheWayBlog",
            },
            {
              title: "Innovation in Social Development",
              date: "December 2024",
              desc: "Using technology to solve real-world problems.",
              adr:"/innovationBlog",
            },
            {
              title: "Health & Hygiene Awareness",
              date: "November 2024",
              desc: "Small habits that lead to healthier communities.",
              adr:"/healthAwarenessBlog",
            },
            {
              title: "Climate Action at the Local Level",
              date: "October 2024",
              desc: "How local actions contribute to global impact.",
              adr:"/climateactionBlog",
            }
          ].map((blog, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white dark:bg-gray-950 rounded-xl shadow-md p-6 hover:shadow-lg transition"
              onClick={() => navigate(blog.adr)}
            >
              <p className="text-sm text-primary font-semibold">{blog.date}</p>
              <h3 className="mt-3 text-xl font-bold dark:text-white">{blog.title}</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-300 text-sm">
                {blog.desc}
              </p>

              <button className="mt-4 text-primary font-semibold hover:underline">
                Read More →
              </button>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA */}
     <section className="relative overflow-hidden bg-white dark:bg-gray-950 py-14 md:py-32 px-6">
      
      {/*  ANIMATED BACKGROUND ELEMENTS */}
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30 pointer-events-none">
        <motion.div 
          variants={blobVariants}
          animate="animate"
          className="absolute -top-20 -left-20 w-96 h-96 bg-green-400 rounded-full blur-[100px]"
        />
        <motion.div 
          variants={blobVariants}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            transition: { duration: 8, repeat: Infinity }
          }}
          className="absolute -bottom-20 -right-20 w-[500px] h-[500px] bg-emerald-500 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* SMALL TOP LABEL */}
        <motion.span 
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
          className="inline-block uppercase text-sm font-bold text-green-600 dark:text-green-400 mb-6 tracking-widest"
        >
          Our Shared Future
        </motion.span>

        {/* MAIN HEADLINE WITH STAGGERED REVEAL */}
        <motion.h2 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-[0.9] mb-8"
        >
          BE THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-400">CHANGE</span> <br />
          YOU WISH TO SEE.
        </motion.h2>

        {/* SUPPORTING TEXT */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xs md:text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We aren't just building projects, we are building hope. Join 5,000+ volunteers 
          and donors dedicated to creating a sustainable and inclusive future for all.
        </motion.p>

        {/* HIGH-END INTERACTIVE BUTTON */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <button className="group relative px-10 py-5 bg-green-600 text-white font-bold rounded-full overflow-hidden transition-all hover:pr-14 active:scale-95 shadow-xl shadow-green-500/20
          " onClick={()=>navigate("/contact")}>
            <span className="relative z-10">Start Your Journey Today</span>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all">
              →
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-green-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>

        {/* BOTTOM DECORATION: STATS OR SOCIAL PROOF */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 border-t border-green-200 dark:border-green-900 pt-12">
           {[
             { label: "Community Support", val: "98%" },
             { label: "Transparency Score", val: "A+" },
             { label: "Global Reach", val: "14 countries" }
           ].map((item, i) => (
             <motion.div 
               key={i}
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 * i }}
               className="text-left"
             >
               <p className="text-3xl font-bold text-gray-900 dark:text-white">{item.val}</p>
               <p className="text-xs uppercase tracking-tighter text-gray-400">{item.label}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </section>

    </div>
  );
}