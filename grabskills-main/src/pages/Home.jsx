import { motion, useMotionValue, animate, useInView, useScroll, useTransform } from "framer-motion";
import { useEffect, useState, useRef } from "react";

import { FaLeaf, FaUsers, FaLightbulb, FaHandHoldingHeart } from "react-icons/fa";
import FocusCard from "../components/FocusCard";
import { useNavigate } from "react-router-dom";


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
      <h3 className="text-4xl sm:text-5xl font-bold text-green-500">
        {count}{suffix}
      </h3>
      <p className="uppercase tracking-wide text-sm font-semibold mt-2">
        {label}
      </p>
      <p className="text-gray-600 text-sm mt-1 max-w-xs mx-auto">
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
function ProgramItem({ icon, title, desc, color, onClick }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ x: 6 }}
      onClick={onClick}
      className="flex items-start gap-6 cursor-pointer group"
    >
      <div className={`w-14 h-14 flex items-center justify-center rounded-xl ${color} text-2xl`}>
        {icon}
      </div>

      <div>
        <h3 className="font-extrabold tracking-wide text-lg group-hover:underline">
          {title}
        </h3>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-sm">
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
              className="text-5xl md:text-7xl font-black text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.5)]"
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
              className="text-5xl md:text-7xl font-black text-green-400 drop-shadow-[0_5px_15px_rgba(34,197,94,0.3)]"
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
            <p className="text-lg md:text-xl text-gray-100 font-medium leading-relaxed drop-shadow-lg">
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
            className="mt-10 bg-green-500 text-black px-10 py-4 rounded-full font-bold text-lg uppercase tracking-widest shadow-[0_0_20px_rgba(34,197,94,0.5)] transition-all"
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
      <section className="py-20 dark:bg-gray-900 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold">Why We Exist</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Millions of people lack access to quality education, sustainable
            livelihoods, and basic environmental protection. We exist to bridge
            this gap by empowering communities with scalable solutions.
          </p>
        </motion.div>
      </section>

      {/* IMPACT */}

      <section className="bg-gray-100 py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.3 }} // NOT once
          className="max-w-7xl mx-auto"
        >
          <h2 className="text-center text-3xl sm:text-4xl font-bold mb-12">
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

     {/* OUR PROGRAMS */}
<section id="programs" className="py-28 px-6 bg-white dark:bg-gray-950">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className="max-w-4xl mx-auto text-center mb-20"
  >
    <h2 className="text-4xl font-bold">Our Programs</h2>
    <p className="mt-4 text-gray-600 dark:text-gray-400">
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
        icon={<FaLeaf />}
        color="text-green-600 bg-green-100"
        title="ENVIRONMENT & CLIMATE ACTION"
        desc="Promoting sustainability, conservation, and climate resilience within communities."
        onClick={() => navigate("/environment")}
      />

      <ProgramItem
        icon={<FaUsers />}
        color="text-teal-600 bg-teal-100"
        title="ENTREPRENEURSHIP & INNOVATION"
        desc="Supporting entrepreneurs and startups to create inclusive economic opportunities."
        onClick={() => navigate("/entrepreneurship")}
      />

      <ProgramItem
        icon={<FaLightbulb />}
        color="text-yellow-600 bg-yellow-100"
        title="EDUCATION & SKILL DEVELOPMENT"
        desc="Enhancing learning outcomes and employability through education and training."
        onClick={() => navigate("/education")}
      />
    </div>

    {/* RIGHT COLUMN */}
    <div className="space-y-16">
      <ProgramItem
        icon={<FaHandHoldingHeart />}
        color="text-purple-600 bg-purple-100"
        title="HEALTH & HYGIENE"
        desc="Improving healthcare access and hygiene awareness in underserved communities."
        onClick={() => navigate("/health")}
      />

      <ProgramItem
        icon={<FaUsers />}
        color="text-pink-600 bg-pink-100"
        title="WOMEN EMPOWERMENT"
        desc="Empowering women through education, leadership, and community participation."
        onClick={() => navigate("/women-empowerment")}
      />

      <ProgramItem
        icon={<FaUsers />}
        color="text-orange-600 bg-orange-100"
        title="RURAL DEVELOPMENT & LIVELIHOOD"
        desc="Strengthening rural economies and sustainable livelihood opportunities."
        onClick={() => navigate("/rural-development")}
      />
    </div>
  </motion.div>
</section>

      {/* BLOGS */}
      <section className="py-24 px-6 bg-gray-100 dark:bg-gray-900">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold">Latest Blogs</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
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
              desc: "How grassroots initiatives are transforming rural livelihoods."
            },
            {
              title: "Education as a Catalyst for Change",
              date: "February 2025",
              desc: "Why skill-based education matters more than ever."
            },
            {
              title: "Women Leading the Way",
              date: "January 2025",
              desc: "Stories of women creating impact in their communities."
            },
            {
              title: "Innovation in Social Development",
              date: "December 2024",
              desc: "Using technology to solve real-world problems."
            },
            {
              title: "Health & Hygiene Awareness",
              date: "November 2024",
              desc: "Small habits that lead to healthier communities."
            },
            {
              title: "Climate Action at the Local Level",
              date: "October 2024",
              desc: "How local actions contribute to global impact."
            }
          ].map((blog, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="bg-white dark:bg-gray-950 rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <p className="text-sm text-primary font-semibold">{blog.date}</p>
              <h3 className="mt-3 text-xl font-bold">{blog.title}</h3>
              <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm">
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
      <section className="py-20 bg-primary text-white text-center px-6">
        <h2 className="text-4xl font-bold">Be the Change</h2>
        <p className="mt-4">
          Join us in creating a sustainable and inclusive future.
        </p>
        <motion.button
          onClick={() => navigate("/contact")}
          className="mt-6 px-8 py-3 bg-white text-primary rounded-lg font-semibold"
        >
          Contact Us
        </motion.button>
      </section>

    </div>
  );
}