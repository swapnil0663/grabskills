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
            onClick={() => navigate("/programs")}
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

      {/* OUR PROGRAMS (VERTICAL) */}
      <section className="py-24 px-6 bg-white dark:bg-gray-950">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold">Our Programs</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Focused initiatives designed to create long-term community impact.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <div className="flex flex-col gap-6">
            <motion.button variants={fadeUp} onClick={() => navigate("/environment")} className="text-left">
              <FocusCard icon={<FaLeaf />} title="Environment & Climate Action" desc="Promoting sustainability and climate resilience." />
            </motion.button>

            <motion.button variants={fadeUp} onClick={() => navigate("/entrepreneurship")} className="text-left">
              <FocusCard icon={<FaUsers />} title="Entrepreneurship & Innovation Development" desc="Supporting entrepreneurs and startups." />
            </motion.button>

            <motion.button variants={fadeUp} onClick={() => navigate("/education")} className="text-left">
              <FocusCard icon={<FaLightbulb />} title="Education & Skill Development" desc="Enhancing learning and employability." />
            </motion.button>
          </div>

          <div className="flex flex-col gap-6">
            <motion.button variants={fadeUp} onClick={() => navigate("/health")} className="text-left">
              <FocusCard icon={<FaHandHoldingHeart />} title="Health & Hygiene" desc="Improving healthcare access and hygiene awareness." />
            </motion.button>

            <motion.button variants={fadeUp} onClick={() => navigate("/women-empowerment")} className="text-left">
              <FocusCard icon={<FaUsers />} title="Women Empowerment" desc="Empowering women through education and leadership." />
            </motion.button>

            <motion.button variants={fadeUp} onClick={() => navigate("/rural-development")} className="text-left">
              <FocusCard icon={<FaUsers />} title="Rural Development & Livelihood" desc="Strengthening rural economies." />
            </motion.button>
          </div>
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
