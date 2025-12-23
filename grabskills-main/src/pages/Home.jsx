import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import heroImage from "../assets/hero.jpg";
import { FaLeaf, FaUsers, FaLightbulb, FaHandHoldingHeart } from "react-icons/fa";
import FocusCard from "../components/FocusCard";
import { useNavigate } from "react-router-dom";

/* Animations */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
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
      viewport={{ once: true }}
    >
      {display}
      {suffix}
    </motion.span>
  );
}

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>

      {/* HERO */}
      <section className="h-screen w-full relative overflow-hidden">
        <motion.div
          initial={{ y: "-100%", scale: 1.1 }}
          animate={{ y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center"
          }}
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="absolute inset-0 bg-black"
        />

        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white">
            Empowering Communities <br /> for a Better Tomorrow
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            We drive change through education, sustainability, and innovation.
          </p>

          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const section = document.getElementById("programs");
              if (section) {
                section.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="mt-8 px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600"
          >
            Explore Programs
          </motion.button>
        </motion.div>
      </section>

      {/* WHY */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
      <section className="py-24 bg-gray-100 dark:bg-gray-950 px-6">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-16">OUR IMPACT</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-5xl font-extrabold text-indigo-600">
                <Counter value={15} suffix="+" />
              </h3>
              <p className="mt-3 font-semibold">Lakh Lives</p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-indigo-600">
                <Counter value={1500} suffix="+" />
              </h3>
              <p className="mt-3 font-semibold">Villages</p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-indigo-600">
                <Counter value={350} suffix="+" />
              </h3>
              <p className="mt-3 font-semibold">Projects</p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-indigo-600">
                <Counter value={10} suffix="+" />
              </h3>
              <p className="mt-3 font-semibold">States</p>
            </div>
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
    viewport={{ once: true }}
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
<section className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
  <motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
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
    viewport={{ once: true }}
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