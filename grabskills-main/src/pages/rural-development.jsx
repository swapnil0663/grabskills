import { motion } from "framer-motion";
import river from "../assets/ruralhero.png";

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

export default function Rural() {
  return (
    <div>

      {/* HERO SECTION */}
      <section id="rural-hero" className="h-screen relative overflow-hidden flex items-center justify-center text-center">
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
           Rural development is not charity,<br />It is a promise that every village can thrive with dignity and opportunity.
          </h1>

          <p className="mt-6 text-lg text-gray-200">
           Ensuring sustainable livelihoods,thriving farms and local economies for rural and tribal communities of India.
          </p>
        </motion.div>
      </section>

      {/* WHY HEALTH CARE */}
      <section id="why-Rural" className="py-24 px-6 bg-white dark:bg-gray-950">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold">Why Rural Development & Livelihood</h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
           Rural Development & Livelihood is vital because most of India’s farmers, artisans, 
           and tribal communities still struggle with unstable incomes, climate risks, 
           and limited market access. When rural families earn reliably and locally, they can invest in 
           better nutrition, education, health, and housing, creating a more resilient foundation for the
           next generation.This is also a high‑priority focus area for government schemes, 
           corporate social responsibility, and civil‑society organizations, which means strong alignment
            and support for impactful work on the ground. By placing rural development at the center of 
            our mission, our NGO helps ensure that national growth is inclusive
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
              Our NGO supports small and marginal farmers with training on improved cultivation practices,
               basic farm business planning, and access to information on schemes, inputs, and markets. 
               Through our organic farming initiatives, farmers learn to adopt eco‑friendly methods, reduce
                dependence on chemical inputs, and tap into growing demand for safe, sustainable produce, 
                improving both soil health and income stability.
            </p>

            <p>
             We work closely with tribal communities to strengthen traditional livelihoods, secure land and
              forest based rights, and introduce value addition opportunities that honour their culture and 
              environment. By helping rural youth and women set up micro enterprises such as food processing, 
              local services, or small retail .We create non farm income streams that reduce migration and vulnerability.
             Alongside this, we promote local handicrafts by organizing design support, quality improvement,
             branding, and market linkages, so that artisans receive fair prices and their skills are recognized 
             as a viable profession, not just a side activity.
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
                "Farmer Support",
                "Organic Farming",
                "Tribal Development"
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
                src={require("../assets/support.png")}
                alt="Health focus"
                className="rounded-lg shadow-xl max-h-[420px]"
              />
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="col-span-12 md:col-span-4 space-y-10">
              {[
                "Rural Development",
                "Rural Micro-Enterprises",
                "Handicraft Promotion"
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

          {/* Farmer support */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-sky-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <img
              src={require("../assets/support.png")}
              alt="Farmer Support"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4"> Farmer Support</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
               Farmer support programs help strengthen rural livelihoods by providing farmers with modern agricultural knowledge, improved tools, quality seeds, soil testing, and access to sustainable farming practices. These initiatives are important because most rural families depend on farming, yet face challenges like low productivity, climate change, limited market access, and lack of financial resources. By offering training in organic farming, water management, crop diversification, and digital agriculture, NGOs empower farmers to increase their yield and income. Support such as crop insurance awareness, access to government schemes, and direct market linkages reduces risks and ensures fair prices. Overall, farmer support improves food security, stabilizes rural economies, and builds stronger, more resilient agricultural communities.
              </p>
            </div>
          </motion.div>

          {/* Organic Farming */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-green-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">  Organic Farming</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Organic farming promotes healthy food production by avoiding chemical fertilizers and pesticides and using natural methods that protect soil, water, and biodiversity. It is important because it improves soil fertility, reduces pollution, enhances crop quality, and supports long-term sustainability for farmers and the environment. Organic produce is safer for consumers, healthier for families, and fetches better market prices, helping farmers increase their income. By adopting practices like composting, crop rotation, bio-fertilizers, and natural pest control, farmers reduce their dependence on costly chemicals and build climate-resilient farms. Organic farming not only strengthens rural livelihoods but also supports ecological balance and ensures a healthier future for communities.
              </p>
            </div>

            <img
              src={require("../assets/organic.webp")}
              alt="Rural Health Camps"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* Tribal Development */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-cyan-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <img
              src={require("../assets/tribal.jpg")}
              alt="Tribal Development"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4"> Tribal Development
                </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
               Tribal development focuses on improving the socio-economic conditions of tribal communities while preserving their culture, identity, and traditional knowledge. It is important because many tribal groups face challenges like limited access to education, healthcare, livelihood opportunities, and basic infrastructure. By providing skill development, education, healthcare support, sustainable livelihood training, and access to government schemes, tribal development programs empower communities to become self-reliant and improve their quality of life. These initiatives also promote forest-based livelihoods, protect land rights, and support traditional crafts, helping tribal families earn a stable income. Strengthening tribal communities creates long-term social inclusion, reduces poverty, and ensures that tribal heritage continues to thrive alongside modern development.
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
              src={require("../assets/microbusiness.jpeg")}
              alt="Rural micro-business training"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          {/*Handicraft promotion*/}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-cyan-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <img
              src={require("../assets/handicraft.jpeg")}
              alt="Handicraft Promotion"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4"> Handicraft Promotion</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Rural microenterprises are small, locally owned businesses that help villagers earn a stable income by using local skills, resources, and traditions. They are important because they create employment within rural communities, reduce migration to cities, and support economic self-reliance for families. By promoting activities like handicrafts, food processing, tailoring, dairy, small retail, and agri-based businesses, microenterprises enable rural youth and women to start their own ventures with low investment. These enterprises increase household income, boost local markets, and strengthen community resilience. When supported through training, mentorship, access to credit, and market linkages, rural microenterprises become powerful tools for poverty reduction, women’s empowerment, and sustainable development in underserved villages.
                </p>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}