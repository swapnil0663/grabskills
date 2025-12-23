import { motion } from "framer-motion";
import river from "../assets/innovationhero.png";

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

export default function Entrepreneurship() {
  return (
    <div>

      {/* HERO SECTION */}
      <section id="entrepreneurship-hero" className="h-screen relative overflow-hidden flex items-center justify-center text-center">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${river})` }}
        />
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-4xl px-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Entrepreneurship is not a luxury, <br />It is right to dream, create, and earn with dignity.
          </h1>

          <p className="mt-6 text-lg text-gray-200">
           Working together to spark local entrepreneurship, nurture innovation, and build resilient livelihoods for communities across India
          </p>
        </motion.div>
      </section>

      {/* WHY HEALTH CARE */}
      <section id="why-entrepreneurship" className="py-24 px-6 bg-white dark:bg-gray-950">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold">Why Entrepreneurship</h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            Entrepreneurship and innovation help communities move from dependency to self-reliance, 
            creating local jobs and dignified livelihoods instead of short‑term charity. 
            When people are supported to turn ideas into enterprises, they generate income, build skills,
            and keep wealth circulating inside the community, which strengthens families and local institutions over the long term.
            Innovation also encourages creative problem‑solving for issues like health, education, environment,
            and digital access that traditional approaches have failed to solve. By combining new technologies
            with local knowledge, social enterprises can deliver solutions that are affordable, inclusive, and sustainable, 
            especially for rural and marginalized groups.
          </p>
        </motion.div>
      </section>

      {/* WHAT WE DO */}
      <section id="what-we-do" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            What We Do
          </h2>

          <div className="space-y-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            <p>
              Our NGO nurtures aspiring entrepreneurs from underserved communities by providing them 
              with practical training, mentoring, and tools to turn their ideas into viable enterprises. 
              Through workshops and bootcamps, participants learn essential skills such as problem identification, 
              business model design, basic finance, and digital literacy, so they can confidently launch and grow 
              their initiatives.Our NGO works to unlock the entrepreneurial potential of young people, women, and 
              rural communities, so that local ideas can become sustainable livelihoods. 
              Through our programs we help participants move from raw ideas to real ventures that create income, 
              jobs, and social impact in their own villages and towns.
            </p>

            <p>
             We also connect grassroots innovators with networks, markets, and impact‑oriented funding so that promising ideas
              do not die for lack of support but instead have a clear pathway from prototype to real‑world change. 
              Through curated linkages with local institutions, investors, incubators, and technical experts,
              we help social entrepreneurs access mentorship, early customers, and patient capital that match the 
              stage and needs of their ventures. By organizing exposure visits, demo days, and market linkages, 
              we enable teams to test their products and services directly in the communities they aim to serve, 
              gather honest feedback, and iteratively improve their solutions. This ecosystem‑building 
              approach ensures that high‑potential innovations are refined, validated, and ready to scale, ultimately 
              creating measurable social and environmental impact while strengthening the broader entrepreneurial 
              fabric of the region.
            </p>
          </div>
        </motion.div>
      </section>

      {/* OUR FOCUS */}
      <section className="py-28 px-6 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-20 text-center">Our Focus</h2>

          <div className="relative grid grid-cols-12 items-center gap-y-12">

            {/* LEFT SIDE */}
            <div className="col-span-12 md:col-span-4 space-y-10">
              {[
                "Startup bootcamps",
                "Startupthon competitions",
                "Innovation Camps"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={focusItemLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
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
              viewport={{ once: true }}
              className="col-span-12 md:col-span-4 flex justify-center relative"
            >
              <img
                src={require("../assets/innovation.png")}
                alt="Health focus"
                className="rounded-lg shadow-xl max-h-[420px]"
              />
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="col-span-12 md:col-span-4 space-y-10">
              {[
                "Women entrepreneurship",
                "Rural Micro-business training",
                "Innovation Labs in Colleges"
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  variants={focusItemRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
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
            {/* <div className="col-span-12 flex justify-center mt-16">
              <div className="bg-cyan-200 px-10 py-5 rounded-xl font-semibold text-center">
                Improve Access to Maternal & Child Healthcare
              </div>
            </div> */}

          </div>
        </div>
      </section>


      {/* FOCUS DETAILS */}
      <section className="py-28 px-6 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto space-y-24">

          {/* Startup Bootcamps */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-sky-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <img
              src={require("../assets/startups.png")}
              alt="Startup Bootcamps"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4"> Startup Bootcamps</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Startup bootcamps are intensive, short-term programs that help aspiring entrepreneurs rapidly turn ideas into viable ventures. They combine hands-on workshops, expert mentoring, and peer collaboration to build core skills in business models, product design, technology, and pitching. These bootcamps create a supportive environment where participants can test their concepts, learn from real-world feedback, and connect with a community of founders, investors, and industry leaders, ultimately accelerating their journey from idea to impact.
              </p>
            </div>
          </motion.div>

          {/* startupthons */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-green-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">  Startupthon Competitions</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Startupthon competitions are dynamic events that bring together aspiring entrepreneurs, students, and innovators to collaborate, ideate, and build solutions for real-world challenges. These competitions foster creativity, teamwork, and problem-solving, encouraging participants to develop business ideas, pitch them, and sometimes even launch startups.
              </p>
            </div>

            <img
              src={require("../assets/startupthons.png")}
              alt="Rural Health Camps"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Women entrepreneurship */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-cyan-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <img
              src={require("../assets/women.png")}
              alt="Women entrepreneurship"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4"> Women Entrepreneurship
                </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
               Women empowerment is about providing women with the confidence, resources, and opportunities to make independent choices and lead fulfilling lives. It involves breaking barriers, encouraging education, supporting entrepreneurship, and ensuring equal rights, helping women contribute meaningfully to society and the economy
               </p>
            </div>
          </motion.div>
          {/* Rural micro-business training */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-green-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4"> Rural Micro-business Training
               </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
               Rural micro-business training equips women and youth in villages with practical skills to start and grow small income-generating activities such as tailoring, handicrafts, and food processing. It focuses on hands-on learning, basic financial literacy, and group support so that participants can manage savings, access credit, and run their enterprises confidently. Such training strengthens local livelihoods, reduces dependency on migration, and builds self-reliance and dignity within the community.
              </p>
            </div>

            <img
              src={require("../assets/rural.png")}
              alt="Rural micro-business training"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          {/*Innovation labs in colleges */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-cyan-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <img
              src={require("../assets/innovation.png")}
              alt="Innovation labs in colleges"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4">  Innovation Labs in Colleges</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Innovation labs in colleges provide students with a creative space to experiment with new ideas, technologies, and solutions to real-world problems. These labs encourage teamwork, hands-on learning, and entrepreneurship by offering access to tools, mentorship, and resources that help students turn their concepts into workable prototypes and startups.
                </p>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}