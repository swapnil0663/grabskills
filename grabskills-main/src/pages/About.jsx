import { useNavigate } from "react-router-dom";
import {
  motion,
  useMotionValue,
  animate,
  useInView,
  useScroll,
  useTransform,
  useSpring
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import aboutHero from "../assets/about-hero.jpg";

/* ---------------- ANIMATIONS ---------------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

/* ---------------- SUB-COMPONENTS ---------------- */

function Counter({ value, suffix = "" }) {
  const [display, setDisplay] = useState(0);
  const count = useMotionValue(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      count.set(0);
      setDisplay(0);

      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
        onUpdate(latest) {
          setDisplay(Math.round(latest));
        }
      });

      return () => controls.stop();
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* --- JOURNEY TIMELINE --- */
const JourneySection = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scrollY = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 40,
    restDelta: 0.001,
  });

  const lineHeight = useTransform(scrollY, [0, 1], ["0%", "100%"]);

  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="max-w-6xl mx-auto"
      >
        {/* Fixed: Added dark:text-white */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-20 text-gray-900 dark:text-white">
          Our Journey
        </h2>

        <div ref={containerRef} className="relative space-y-20">
          <div className="absolute left-1/2 top-0 h-full w-[4px] -translate-x-1/2 bg-gray-200 dark:bg-gray-700" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-1/2 top-0 w-[4px] -translate-x-1/2 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 origin-top"
          />
          <motion.div
            style={{ top: lineHeight }}
            className="absolute left-1/2 -translate-x-1/2 w-6 h-6 z-20 rounded-full bg-white border-4 border-indigo-600 shadow-lg shadow-indigo-500/50"
          />

          {[
            { year: "2005", text: "Founded with a mission to uplift underserved communities." },
            { year: "2012", text: "Expanded programs across multiple regions." },
            { year: "2018", text: "Introduced integrated empowerment initiatives." },
            { year: "2024", text: "Reached millions through sustainable interventions." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={`relative z-10 flex ${
                index % 2 === 0 ? "justify-start" : "justify-end"
              }`}
            >
              <span className="absolute left-1/2 -translate-x-1/2 top-6 w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 border-2 border-white dark:border-gray-900" />
              <motion.div
                whileHover={{ y: -5 }}
                className="w-full md:w-[45%] bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800"
              >
                {/* Fixed: Lighter indigo for dark mode readability */}
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">{item.year}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">{item.text}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

/* --- COMMITMENT SECTION --- */
const CommitmentSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Our Commitment to the Future
        </h2>
        <p className="max-w-4xl mx-auto text-lg text-indigo-100 mb-16 leading-relaxed">
          Our future initiatives are guided by evidence-based planning, continuous
          research, and alignment with global development goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Evidence-Based Action",
              desc: "Programs guided by research and evaluation.",
            },
            {
              title: "Community-Led Solutions",
              desc: "Local leadership at the core of initiatives.",
            },
            {
              title: "Sustainable Impact",
              desc: "Long-term resilience beyond immediate relief.",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-xl"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">{card.title}</h3>
              <p className="text-indigo-100">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

/* ---------------- MAIN PAGE ---------------- */

export default function About() {
  const { scrollYProgress } = useScroll();
  const navigate = useNavigate();

  return (
    <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
      {/* SCROLL PROGRESS BAR */}
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="fixed top-0 left-0 right-0 h-1 origin-left bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50"
      />

      {/* ================= HERO ================= */}
      <section className="min-h-screen relative flex items-center justify-center text-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${aboutHero})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Building Hope. <br /> Empowering Lives.
          </h1>
          <p className="mt-6 text-lg text-gray-200">
            Creating sustainable change across communities.
          </p>
        </motion.div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="py-24 px-6 bg-white dark:bg-gray-950">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Fixed: Added dark:text-white */}
          <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Who We Are
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
           We are a people-first organization committed to creating meaningful
            and lasting social impact. Our work is grounded in the belief that
            every individual deserves access to opportunity, dignity, and a
            better quality of life, regardless of background or circumstance.
            <br /><br />
            By working closely with communities, institutions, and volunteers,
            we identify real challenges and co-create solutions that are
            inclusive, practical, and sustainable. We emphasize empowerment
            over dependency, enabling communities to take ownership of their
            development journey.
          </p>
        </motion.div>
      </section>

      {/* ================= OUR STORY ================= */}
      <section className="py-24 px-6 bg-gradient-to-br from-emerald-50 via-sky-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Fixed: Added dark:text-white */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Our journey began with a simple yet powerful belief — that
            sustainable social change requires long-term commitment, trust,
            and collaboration. From the beginning, we focused on addressing
            root causes rather than symptoms.
            <br /><br />
            Over the years, our work expanded across education, healthcare,
            livelihoods, and environmental sustainability. We continuously
            refine our programs using research, data analysis, and community
            feedback to ensure relevance and impact.
            <br /><br />
            Transparency and accountability guide every initiative we
            undertake. Our success is measured not only in numbers, but in
            improved quality of life, resilience, and empowered individuals
            shaping their own futures.
          </p>
        </motion.div>
      </section>

      {/* ================= IMPACT ================= */}
      <section className="py-20 px-6 bg-gradient-to-br from-green-50 to-cyan-50 dark:from-gray-900 dark:to-gray-800">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Fixed: Added dark:text-white */}
          <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-white">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {/* Added dark mode specific colors (lighter shades) for better contrast */}
            <div>
              <h3 className="text-5xl font-extrabold text-green-600 dark:text-green-400">
                <Counter value={20} suffix="+" />
              </h3>
              <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                Lakh Lives Impacted
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-extrabold text-blue-600 dark:text-blue-400">
                <Counter value={2000} suffix="+" />
              </h3>
              <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                Villages Reached
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-extrabold text-purple-600 dark:text-purple-400">
                <Counter value={400} suffix="+" />
              </h3>
              <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                Projects Implemented
              </p>
            </div>
            <div>
              <h3 className="text-5xl font-extrabold text-orange-600 dark:text-orange-400">
                <Counter value={27} suffix="+" />
              </h3>
              <p className="mt-2 font-semibold text-gray-800 dark:text-gray-200">
                States Covered
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= OUR JOURNEY ================= */}
      <JourneySection />

      {/* ================= COMMITMENT ================= */}
      <CommitmentSection />

      {/* ================= TRANSPARENCY ================= */}
      <section className="py-24 px-6 bg-white dark:bg-gray-950">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-6xl mx-auto text-center"
        >
          {/* Fixed: Added dark:text-white */}
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900 dark:text-white">
            Transparency & Partnerships
          </h2>
          <p className="max-w-4xl mx-auto text-lg text-gray-600 dark:text-gray-400 mb-16">
            Transparency is fundamental to our work. We ensure responsible fund
            utilization, strong governance, and continuous monitoring.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-green-50 dark:bg-gray-900/50 dark:border dark:border-green-900/30 shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-green-600 dark:text-green-400">Governance</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Ethical decision-making and compliance.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-blue-50 dark:bg-gray-900/50 dark:border dark:border-blue-900/30 shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-blue-600 dark:text-blue-400">Accountability</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Impact tracking and audits.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-purple-50 dark:bg-gray-900/50 dark:border dark:border-purple-900/30 shadow-lg">
              <h3 className="text-xl font-semibold mb-3 text-purple-600 dark:text-purple-400">Partnerships</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Collaborative stakeholder impact.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}
      <section className="relative overflow-hidden bg-white dark:bg-gray-950 py-24 px-6">
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.3em" }}
            viewport={{ once: false }}
            className="inline-block uppercase text-sm font-bold text-green-600 dark:text-green-400 mb-6 tracking-widest"
          >
            Our Shared Future
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white leading-tight mb-8"
          >
            BE THE <span className="text-green-600 dark:text-green-400">CHANGE</span>
            <br /> YOU WISH TO SEE.
          </motion.h2>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <button
              onClick={() => navigate("/contact")}
              className="px-10 py-5 bg-green-600 text-white font-bold rounded-full shadow-xl hover:bg-green-700 transition-colors"
            >
              Start Your Journey Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
