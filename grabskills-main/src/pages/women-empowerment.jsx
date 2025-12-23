import { motion } from "framer-motion";
import river from "../assets/womenhero.png";

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

export default function Womenempowerment() {
  return (
    <div>

      {/* HERO SECTION */}
      <section id="women-hero" className="h-screen relative overflow-hidden flex items-center justify-center text-center">
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
           There is no limit to what we, as women, can accomplish.<br /> 
          </h1>

          <p className="mt-6 text-lg text-gray-200">
           Championing women’s voices and leadership,and creating pathways to opportunity for women in every community across India
          </p>
        </motion.div>
      </section>

      {/* WHY Women empowerment */}
      <section id="why-health" className="py-24 px-6 bg-white dark:bg-gray-950">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold">Why Women Empowerment</h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            Women’s empowerment is essential for inclusive and sustainable development because 
            when women learn, earn, and lead, families and entire communities benefit through better
             health, education, and income stability. Research consistently shows that empowering women 
             boosts GDP growth, reduces poverty, and improves outcomes for children, making it one of the
            most effective investments for social impact.
            Women and girls, especially from underserved backgrounds, still face barriers in access 
            to education, digital tools, safe jobs, and decision‑making spaces, which limits both their
            potential and the country’s progress. By focusing on skills, confidence, and opportunities 
            for women, our NGO helps close these gaps and ensures that half the population is not left 
            behind in the digital and economic transitions shaping India’s future.
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
              Women’s empowerment is at the heart of our mission because it is one of the most powerful ways to transform families, communities, and entire regions. When women have equal access to education, digital tools, and dignified work, they invest their earnings back into their children’s health, nutrition, and learning, creating a ripple effect that lasts for generations. Our NGO focuses on closing the opportunity gap that many girls and young women face—limited exposure to careers, lack of guidance, and low confidence around technology and the workplace. By combining digital literacy, employability skills, and future‑oriented training in AI and coding, we help them move from being passive recipients of support to active decision‑makers who can shape their own lives and contribute meaningfully to the economy.
            </p>
             To make this possible, we design an integrated support system around every participant instead of offering one‑off trainings. Our digital literacy sessions ensure that women are comfortable using smartphones, computers, online learning platforms, and digital payments, while our employability modules build communication, teamwork, problem‑solving, and basic English so they are ready for real workplaces. AI and coding programs introduce girls to the technologies shaping tomorrow, giving them the confidence to pursue STEM courses and tech careers, not just consume apps built by others. Alongside this, career counselling helps them discover their strengths, choose suitable courses or job paths, and navigate practical barriers like finances or family expectations. By partnering with schools and colleges, we take these programs directly to where girls already are, integrating workshops and clubs into the academic space so that leadership, entrepreneurship, and digital skills become a normal part of their growth—not a privilege reserved for a few.
            <p>
             
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
                "Safety Training",
                "Self-Help Group Support",
                "Skill Development Programs"
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
                src={require("../assets/selfhelp.png")}
                alt="Health focus"
                className="rounded-lg shadow-xl max-h-[420px]"
              />
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="col-span-12 md:col-span-4 space-y-10">
              {[
                "Safety Training",
                "Financial Literacy",
                "Entrepreneurship Programs"
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

          {/* Skill training*/}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-sky-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <img
              src={require("../assets/empowerment.jpg")}
              alt="Skill training"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4"> Skill training</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
               Skill training for women plays a crucial role in promoting empowerment by helping them gain financial independence, confidence, and social equality. Through vocational courses, digital literacy, entrepreneurship training, and job-oriented skills, women are able to secure better employment opportunities, start small businesses, and contribute to household and community income. This not only improves their quality of life but also strengthens families and boosts local economies. Empowered women make informed decisions about health, education, and finances, creating a positive ripple effect across generations. Skill training programs are therefore one of the most effective ways to break cycles of poverty, reduce gender inequality, and build inclusive, self-reliant communities.
               </p>
            </div>
          </motion.div>

          {/*Safety training */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-green-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">  Safety training</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                 Safety training equips individuals with the knowledge and skills needed to protect themselves and others in workplaces, schools, communities, and daily life. It includes awareness of hazards, safe handling of tools and equipment, emergency response, first aid, and understanding basic safety protocols. This training is important because it reduces accidents, injuries, and health risks, while building a culture of responsibility and preparedness. For women, youth, and workers in rural or vulnerable communities, safety training increases confidence, promotes self-protection, and supports safer working environments. By preventing avoidable incidents and improving overall wellbeing, safety training creates stronger, more resilient communities and contributes to long-term development and empowerment.
              </p>
            </div>

            <img
              src={require("../assets/safety.jpg")}
              alt="Rural Health Camps"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/*Financial literacy*/}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-cyan-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <img
              src={require("../assets/finance.png")}
              alt="Financial Literacy"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4"> Financial Literacy
                </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
               Financial literacy helps individuals understand how to manage money wisely, make informed financial decisions, and build secure futures. It includes basic skills like budgeting, saving, banking, understanding interest, using digital payments, and avoiding debt or financial fraud. This knowledge is especially important for women, youth, and rural communities who often lack access to formal financial education. When people learn how to plan expenses, save for emergencies, invest responsibly, and access government or banking services, they gain confidence and financial independence. Financial literacy reduces poverty, prevents exploitation, and empowers families to improve their standard of living. Overall, it creates economically stable households and stronger, more resilient communities.
              </p>
            </div>
          </motion.div>
          {/* Entrepreneurship programs */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-green-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4"> Entrepreneurship Programs
               </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
               Entrepreneurship programs empower individuals to start and grow their own businesses by teaching them essential skills such as idea development, financial planning, marketing, communication, and problem-solving. These programs are important because they create employment opportunities, reduce dependence on traditional jobs, and encourage innovation within communities. For women, youth, and rural populations, entrepreneurship training provides a pathway to financial independence and helps them turn local challenges into sustainable business opportunities. With support such as mentorship, market linkages, and access to micro-finance, participants gain the confidence and tools needed to build successful enterprises. Overall, entrepreneurship programs boost economic growth, strengthen communities, and promote long-term self-reliance.
              </p>
            </div>

            <img
              src={require("../assets/Entrepreneurship.webp")}
              alt="Entrepreneurship programs"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          {/* Self-help group support*/}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-cyan-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <img
              src={require("../assets/selfhelp.png")}
              alt="Self-help group support"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4">Self-Help Groups </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Self-Help Group (SHG) support empowers women and rural communities by helping them come together in small groups to save money, access loans, and build collective strength. SHGs provide a safe platform for women to learn financial management, start small businesses, and support each other's social and economic growth. This approach is important because it increases financial independence, reduces reliance on moneylenders, and builds confidence and leadership skills among members. With training in entrepreneurship, bookkeeping, digital payments, and livelihood activities, SHGs become powerful drivers of community development. SHG support not only improves household income but also leads to better education, health, and decision-making for families, creating stronger, self-reliant, and resilient communities.
              </p>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}