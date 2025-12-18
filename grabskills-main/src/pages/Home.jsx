import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";
import heroImage from "../assets/hero.jpg";
import { FaLeaf, FaUsers, FaLightbulb, FaHandHoldingHeart } from "react-icons/fa";
import FocusCard from "../components/FocusCard";
import { useNavigate } from "react-router-dom";

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
      className="inline-block"
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

  {/* Animated Background Image */}
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

  {/* Animated Dark Overlay */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 0.55 }}
    transition={{ duration: 0.8, delay: 0.8 }}
    className="absolute inset-0 bg-black"
  />

  {/* Animated Text Content */}
  <motion.div
    initial={{ opacity: 0, y: 80, scale: 0.95 }}
    animate={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.9, delay: 1.2, ease: "easeOut" }}
    className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 max-w-3xl mx-auto"
  >
    <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
      Empowering Communities <br /> for a Better Tomorrow
    </h1>

    <p className="mt-6 text-lg text-gray-200">
      We drive change through education, sustainability, and innovation.
    </p>

    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => navigate("/programs")}
      className="mt-8 px-8 py-3 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition"
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
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold">Why We Exist</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Millions of people lack access to quality education, sustainable livelihoods, and basic environmental protection. We exist to bridge this gap by creating scalable, community-driven solutions that empower individuals rather than make them dependent.
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
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold tracking-wide mb-16">
            OUR IMPACT
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">

            <div>
              <h3 className="text-5xl font-extrabold text-indigo-600">
                <Counter value={20} suffix="+" />
              </h3>
              <p className="mt-3 font-semibold uppercase tracking-wide">
                Lakh Lives
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Children and families supported every year
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-indigo-600">
                <Counter value={2000} suffix="+" />
              </h3>
              <p className="mt-3 font-semibold uppercase tracking-wide">
                Villages
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Rural and urban communities reached
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-indigo-600">
                <Counter value={400} suffix="+" />
              </h3>
              <p className="mt-3 font-semibold uppercase tracking-wide">
                Projects
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Focused on education, healthcare and empowerment
              </p>
            </div>

            <div>
              <h3 className="text-5xl font-extrabold text-indigo-600">
                <Counter value={27} suffix="+" />
              </h3>
              <p className="mt-3 font-semibold uppercase tracking-wide">
                States
              </p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Including remote and underserved regions
              </p>
            </div>

          </div>
        </motion.div>
      </section>

      {/* FOCUS */}
      <section className="py-20 px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6"
        >
          <motion.div variants={fadeUp}>
            <FocusCard icon={<FaLeaf />} title="Environment" desc="Climate & sustainability initiatives." />
          </motion.div>
          <motion.div variants={fadeUp}>
            <FocusCard icon={<FaUsers />} title="Education" desc="Learning, skills & mentoring." />
          </motion.div>
          <motion.div variants={fadeUp}>
            <FocusCard icon={<FaLightbulb />} title="Innovation" desc="Entrepreneurship & ideas." />
          </motion.div>
          <motion.div variants={fadeUp}>
            <FocusCard icon={<FaHandHoldingHeart />} title="Social Care" desc="Health & empowerment." />
          </motion.div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white text-center px-6">
        <h2 className="text-4xl font-bold">Be the Change</h2>
        <p className="mt-4">
          Join us in creating a sustainable and inclusive future.
        </p>
        <motion.button
          animate={{
            boxShadow: [
              "0 0 0px rgba(34,197,94,0.0)",
              "0 0 25px rgba(34,197,94,0.8)",
              "0 0 0px rgba(34,197,94,0.0)"
            ]
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
          onClick={() => navigate("/contact")}
          className="mt-6 px-8 py-3 bg-white text-primary rounded-lg font-semibold"
        >
          Contact Us
        </motion.button>
      </section>

    </div>
  );
}
