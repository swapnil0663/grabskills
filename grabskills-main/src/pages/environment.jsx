import { motion } from "framer-motion";
import river from "../assets/rivers.png";

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

export default function Environment() {
  return (
    <div>

      {/* HERO SECTION */}
      <section id="health-hero" className="h-screen relative overflow-hidden flex items-center justify-center text-center">
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
            Protecting our environment <br /> is not a choice. It is a responsibility
          </h1>

          <p className="mt-6 text-lg text-gray-200">
            Working together to preserve nature, reduce pollution, and build a sustainable future for communities across India
          </p>
        </motion.div>
      </section>

      {/* WHY HEALTH CARE */}
      <section id="why-health" className="py-24 px-6 bg-white dark:bg-gray-950">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold">Why clean environment</h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            Million of communities across India faces growing environment challenges such
            as pollutions, waste management, deforestations and the impact of climate change
            environment degradation only not only harm  natural ecosystems but also
            directly affects public health livelihoods and the quality of life of vulnerable pollutions.
            Our environment initiatives aim to address these challenges by promoting sustainable
            practises protecting natural resources, and engage communities in conservation efforts.
            By creating awareness and encouraging collective actions, we worked towards building
            cleaner, greener and more resilient communities for the future.
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
              We work at the community level to protect the environment and promote sustainable
              living practises that create long term impact. Our initiative focus on waste management,
              plastic reduction, clean rivers and clean mountains campaigns, tree plantation, biodiversity
              conservation and promoting sustainable tourism.
            </p>

            <p>
              We actively engage local communities, schools, volunteers and stakeholders through awareness
              programmes, clean up drives and capacity building activities. By encouraging responsible use of
              natural resources and supporting eco-system practises, we aim to reduce environment
              damage, improve public health, and build resilient communities committed to safeguarding the
              plant for future generations.
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
                " Waste management",
                " Plastic reduction",
                " Clean Himalayas"
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
                src={require("../assets/waste.png")}
                alt="Health focus"
                className="rounded-lg shadow-xl max-h-[420px]"
              />
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="col-span-12 md:col-span-4 space-y-10">
              {[
                " Clean river missions",
                " Tree plantation & biodiversity projects",
                " Sustainable tourism"
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

          {/* Menstrual Hygiene */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-sky-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <img
              src={require("../assets/waste.png")}
              alt="Menstrual Hygiene"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4"> Waste management</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
               Effective waste management is essential to protect public health, reduce pollution, and keep our neighborhoods clean and livable. By segregating waste at source into wet, dry, and hazardous streams, communities can increase recycling, support composting, and reduce the load on landfills. When citizens, NGOs, and local governments collaborate through clean-up drives, awareness programs, and door-to-door collection, they help build greener cities and create new opportunities in recycling and resource recovery.
              </p>
            </div>
          </motion.div>

          {/* Rural Health Camps */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-green-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">  Plastic reduction</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Reducing plastic use is one of the simplest ways to protect the environment and our health. By choosing reusable bags and bottles, properly segregating plastic waste for recycling, and avoiding single‑use items, communities can cut pollution in landfills, streets, and oceans. These small daily actions conserve resources, reduce greenhouse gas emissions, and help keep parks, rivers, and neighborhoods clean for everyone.
              </p>
            </div>

            <img
              src={require("../assets/plastic.png")}
              alt="Rural Health Camps"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Sanitation & Clean Water */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-cyan-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <img
              src={require("../assets/rivers.png")}
              alt="Sanitation and Clean Water"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4"> Clean Himalayas/Clean river missions
                </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Clean Himalaya and clean river missions aim to protect fragile mountain ecosystems, safeguard drinking water, and preserve the cultural and spiritual value of rivers. These campaigns encourage citizens to remove litter from riverbanks, reduce plastic use, and manage waste responsibly so it does not flow downstream into towns and oceans. By involving local communities, tourists, schools, and NGOs, such initiatives help restore water quality, support biodiversity, and ensure that future generations can enjoy healthy rivers and pristine Himalayan landscapes.
              </p>
            </div>
          </motion.div>
          {/* Mental health awareness */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-green-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4"> Tree plantation & biodiversity projects
               </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
               Tree plantation plays a vital role in conserving biodiversity by creating and connecting habitats for countless species of plants, insects, birds, and animals. When native trees are planted and protected, they stabilize soil, enrich it with organic matter, and provide food and shelter that support complex, resilient ecosystems. Large, diverse green areas also act as carbon sinks, help regulate local climate, and maintain clean air and water, which are essential for both wildlife and human communities.
              </p>
            </div>

            <img
              src={require("../assets/trees.png")}
              alt="Mental Health Awareness"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          {/* Preventive healthcare */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-cyan-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <img
              src={require("../assets/tourism.png")}
              alt="Preventive healthcarer"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4">  Sustainable tourism </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Sustainable tourism is a way of traveling that protects the environment, respects local cultures, and benefits local communities. It focuses on reducing pollution and waste, conserving natural resources, and supporting businesses that treat workers fairly. By choosing eco‑friendly transport and stays, avoiding over‑touristed spots, and engaging responsibly with local people and wildlife, travelers help ensure that destinations remain healthy and vibrant for future generations.
              </p>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}