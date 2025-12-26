import { motion } from "framer-motion";
import healthHero from "../assets/health-hero.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

const imageReveal = {
  hidden: { scale: 0.8, opacity: 0, z: -100 },
  visible: {
    scale: 1,
    opacity: 1,
    z: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

const focusItemLeft = {
  hidden: { opacity: 0, x: 40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
};

const focusItemRight = {
  hidden: { opacity: 0, x: -40 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
};

export default function Health() {
  return (
    <div>

      {/* HERO SECTION */}
      <section id="health-hero" className="h-screen relative overflow-hidden flex items-center justify-center text-center">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${healthHero})` }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-3xl px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Health is not a privilege, <br /> it is a basic human right
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Ensuring access to essential healthcare and hygiene for underserved
            communities across India.
          </p>
        </motion.div>
      </section>

      {/* WHY HEALTH CARE */}
      <section id="why-health" className="py-24 px-6 bg-white dark:bg-gray-950">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text--gray--900 dark:text-white">Why Health & Hygiene</h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            Millions of people in India lack access to basic healthcare services,
            preventive care, and hygiene awareness. Poor health not only affects
            individuals but also limits education, employment, and overall
            quality of life. Our health initiatives aim to bridge this gap by
            bringing healthcare directly to communities that need it the most.
          </p>
        </motion.div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text--gray--900 dark:text-white">
            What We Do
          </h2>

          <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              We provide primary healthcare services through mobile medical units,
              community health camps, and local outreach programs. Our approach
              focuses on preventive care, early diagnosis, and continuous health
              monitoring for children, women, and elderly populations.
            </p>

            <p>
              Alongside medical services, we conduct hygiene awareness sessions
              and promote healthy practices related to sanitation, nutrition,
              maternal health, and disease prevention. By working closely with
              local health workers, we ensure sustainable and long-term impact.
            </p>
          </div>
        </motion.div>
      </section>

{/* OUR FOCUS */}
<section className="py-28 px-6 bg-white dark:bg-gray-950">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold mb-20 text-center text--gray--900 dark:text-white">Our Focus</h2>

    <div className="relative grid grid-cols-12 items-center gap-y-12">

      {/* LEFT SIDE */}
      <div className="col-span-12 md:col-span-4 space-y-10">
        {[
          "Menstrual Hygiene",
          "Rural Health Camps",
          "Sanitation & Clean Water"
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={focusItemLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="relative flex items-center justify-end"
          >
            <div className="bg-sky-200 px-6 py-4 rounded-xl font-semibold text-right w-64">
              {item}
            </div>
            <span className="hidden md:block h-[2px] w-10 bg-sky-400 ml-3"></span>
          </motion.div>
        ))}
      </div>

      {/* CENTER IMAGE */}
      <motion.div
        variants={imageReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="col-span-12 md:col-span-4 flex justify-center relative"
      >
        <img
          src={require("../assets/health-focus.png")}
          alt="Health focus"
          className="rounded-lg shadow-xl max-h-[420px]"
        />
      </motion.div>

      {/* RIGHT SIDE */}
      <div className="col-span-12 md:col-span-4 space-y-10">
        {[
          "Mental Health Awareness",
          "Preventive Healthcare",
          "Maternal & Child Healthcare"
        ].map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            variants={focusItemRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="relative flex items-center"
          >
            <span className="hidden md:block h-[2px] w-10 bg-green-400 mr-3"></span>
            <div className="bg-green-200 px-6 py-4 rounded-xl font-semibold w-64">
              {item}
            </div>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM */}

    </div>
  </div>
</section>


    {/* FOCUS DETAILS */}
    <section className="py-28 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto space-y-24">

        {/* Menstrual Hygiene */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center bg-sky-100 dark:bg-gray-800 rounded-3xl p-10"
        >
          <img
            src={require("../assets/focus-menstrual.png")}
            alt="Menstrual Hygiene"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h3 className="text-3xl font-bold mb-4 text-blue-300 dark:text-green-300">Menstrual Hygiene</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Menstrual hygiene is important because it helps girls and women manage their periods safely, comfortably, and with confidence. Proper menstrual hygiene includes using clean sanitary products, maintaining personal cleanliness, and understanding how to care for one’s health during menstruation. It prevents infections, reduces discomfort, and encourages regular school or work attendance. By spreading awareness and providing access to the right products, menstrual hygiene empowers girls and women to live healthy, dignified lives without fear or shame.
            </p>
          </div>
        </motion.div>

        {/* Rural Health Camps */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center bg-green-100 dark:bg-gray-800 rounded-3xl p-10"
        >
          <div>
            <h3 className="text-3xl font-bold mb-4 text-blue-300 dark:text-green-300">Rural Health Camps</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Rural health camps are community-based medical programs designed to bring essential healthcare services directly to villages where hospitals and doctors are often unavailable. These camps provide free check-ups, medicines, vaccinations, screenings for common diseases, and health awareness sessions. They are important because they help detect illnesses early, reduce health risks, and educate people about hygiene, nutrition, maternal care, and preventive health practices. By offering immediate treatment and guiding people on when to seek advanced care, rural health camps improve the overall well-being of underserved communities. They ensure that even the poorest and most remote families receive timely, affordable, and life-saving healthcare support.
            </p>
          </div>

          <img
            src={require("../assets/focus-rural.png")}
            alt="Rural Health Camps"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>

        {/* Sanitation & Clean Water */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center bg-cyan-100 dark:bg-gray-800 rounded-3xl p-10"
        >
          <img
            src={require("../assets/focus-sanitation.png")}
            alt="Sanitation and Clean Water"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h3 className="text-3xl font-bold mb-4 text-blue-300 dark:text-green-300">Sanitation & Clean Water</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Sanitation and clean water are essential for maintaining good health and preventing the spread of diseases in communities. Proper sanitation includes using clean toilets, practicing good hygiene, and safely managing waste, while clean drinking water protects people from waterborne illnesses. These services are especially important in rural and underserved areas, where lack of access can lead to serious health problems, poor school attendance, and reduced productivity. By promoting hygiene awareness, building safe toilets, and providing clean water facilities, communities become healthier, safer, and more empowered to lead better lives. Overall, sanitation and clean water are the foundation for good health, dignity, and sustainable development.
            </p>
          </div>
        </motion.div>
                {/* Mental health awareness */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center bg-green-100 dark:bg-gray-800 rounded-3xl p-10"
        >
          <div>
            <h3 className="text-3xl font-bold mb-4 text-blue-300 dark:text-green-300">Mental health awareness</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Mental health awareness helps individuals understand the importance of emotional well-being, stress management, and seeking support when needed. It encourages people to talk openly about their feelings, reduces stigma around mental health issues, and promotes early detection of problems like anxiety, depression, and stress. By educating communities about healthy coping methods, counseling support, and the value of self-care, mental health awareness empowers people to lead happier, balanced, and more productive lives. Overall, it strengthens emotional resilience, improves relationships, and builds a supportive environment where everyone feels heard, valued, and cared for.
            </p>
          </div>

          <img
            src={require("../assets/mental-health.png")}
            alt="Mental Health Awareness"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
        {/* Preventive healthcare */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center bg-cyan-100 dark:bg-gray-800 rounded-3xl p-10"
        >
          <img
            src={require("../assets/Preventive.jpg")}
            alt="Preventive healthcarer"
            className="rounded-2xl shadow-lg"
          />

          <div>
            <h3 className="text-3xl font-bold mb-4 text-blue-300 dark:text-green-300">Preventive healthcare</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Preventive healthcare focuses on reducing the risk of diseases before they occur by promoting healthy habits, regular check-ups, vaccinations, and early screenings. It is important because it helps people detect health issues at an early stage, avoid serious illnesses, and maintain a better quality of life. By educating communities about nutrition, hygiene, exercise, and disease prevention, preventive healthcare lowers medical costs, reduces hospital visits, and strengthens overall well-being. It empowers individuals to take responsibility for their health and supports healthier, longer, and more productive lives.
            </p>
          </div>    

        </motion.div>
        
      </div>
    </section>

    </div>
  );
}