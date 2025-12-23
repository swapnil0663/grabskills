import { motion } from "framer-motion";
import river from "../assets/educationhero.png";

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

export default function Education() {
  return (
    <div>

      {/* HERO SECTION */}
      <section id="education-hero" className="h-screen relative overflow-hidden flex items-center justify-center text-center">
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
            "Education is the most powerful weapon, <br />which you can use to change the world"
          </h1>

          <p className="mt-6 text-lg text-gray-200">
          Working together to strengthen education, grow real‑world skills, and open lifelong opportunities for learners in communities across India.
          </p>
        </motion.div>
      </section>

      {/* WHY  */}
      <section id="why-education" className="py-24 px-6 bg-white dark:bg-gray-950">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold">Why Education and Skill Development</h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 leading-relaxed">
            Education and skill development are at the core of long‑term social change because they give
            young people the tools to think critically, solve problems, and participate fully in the economy 
            and their communities. When children and youth receive quality education and relevant skills,
            they are better able to access jobs, start enterprises, make informed decisions, and support their
            families, creating a powerful ripple effect that strengthens entire communities.
            They also align closely with national priorities and corporate responsibility,
            which is why education and skilling have emerged as the No. 1 sector in CSR funding in India, 
            channeling significant resources into classrooms, digital access, and employability programs. 
            By focusing on this area, our NGO not only transforms individual lives but also partners effectively 
            with companies, institutions, and governments to scale impact ensuring that every investment in learning 
            translates into opportunity, dignity, and shared prosperity.
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
              Education and skill development are at the heart of our NGO’s work because they turn potential into real, 
              tangible opportunity for young people. In our programs, students and youth build strong foundations in digital literacy, 
              communication, problem‑solving, and confidence, so they are ready for both higher education and the world of work. 
              We believe that learning should be practical and empowering, so every session is designed to help participants use knowledge in their daily lives—whether 
              that means filling out an online form, applying for a scholarship, or speaking up in a group. By focusing on education and skills, 
              we help young people move from uncertainty to clarity about their future paths.
            </p>

            <p>
             To make this vision real, our NGO runs a continuum of initiatives: digital literacy workshops, 
             employability‑skills training, AI and coding programs, school and college sessions, and one‑to‑one
              or small‑group career counselling. In digital literacy, participants learn to use devices, 
              online platforms, and digital payments safely and confidently; in employability programs, 
              they practice interviews, teamwork, and workplace behaviour; through AI and coding, they get a 
              first step into the tech world and see themselves as creators, not just users.By bringing these 
              services directly to underserved communities and institutions, we ensure that quality education 
              and skill development are not a privilege for a few, but a practical reality for many.
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
                "Digital Literacy",
                "Employability Skills",
                "Hackerthon Competitions",
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
                src={require("../assets/educationfocus.png")}
                alt="education focus"
                className="rounded-lg shadow-xl max-h-[420px]"
              />
            </motion.div>

            {/* RIGHT SIDE */}
            <div className="col-span-12 md:col-span-4 space-y-10">
              {[
                "AI & coding programs",
                "Career Counselling",
                "School/College Training"
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

          {/* Digital Literacy */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-sky-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <img
              src={require("../assets/digitalliteracy.jpg")}
              alt="Digital Literacy"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4"> Digital Literacy</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
             Digital literacy is important because it empowers individuals to confidently use computers, smartphones, and the internet in their daily lives. It helps people access information, apply for jobs, learn new skills, and stay connected with the world. With strong digital skills, individuals can study online, communicate effectively, manage online services, and improve their career opportunities. Overall, digital literacy builds confidence, increases independence, and opens doors to better education, employment, and personal growth.
              </p>
            </div>
          </motion.div>

          {/* Employability Skills */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-green-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4">  Employability Skills</h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Employable skills are the essential abilities that help individuals get a job, perform well at work, and grow in their career. These include communication, teamwork, problem-solving, time management, basic computer skills, and professionalism. Learning employable skills increases a person’s confidence, improves their chances of finding good job opportunities, and helps them adapt to different work environments. Overall, these skills prepare individuals to become job-ready, responsible, and capable of building a stable and successful future.
              </p>
            </div>

            <img
              src={require("../assets/skills.jpg")}
              alt="Employability Skills"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>

          {/* AI & Coding Programs */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-cyan-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <img
              src={require("../assets/ai.jpg")}
              alt="AI & Coding Programs"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4">AI & Coding Programs
                </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              AI and coding programs teach people how to build and use software and intelligent tools — from writing code that automates tasks to understanding basics of artificial intelligence like data, models, and simple machine learning applications. These programs give learners practical skills such as problem-solving, logical thinking, creating websites or apps, and using AI to analyze data or automate everyday work. By learning coding and AI, participants become more employable (software jobs, data roles, digital services), can start small businesses or freelance, and gain the confidence to adapt as technology changes — ultimately opening pathways to better jobs, higher income, and more control over their future.
               </p>
            </div>
          </motion.div>
          {/* Career Counselling */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-green-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <div>
              <h3 className="text-3xl font-bold mb-4"> Career Counselling
               </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
               Career counselling helps individuals understand their strengths, interests, and goals so they can choose the right career path with confidence. It provides guidance on education options, job opportunities, required skills, and how to prepare for future careers. Through expert advice and personalized support, career counselling helps people make informed decisions, avoid confusion, set clear goals, and build a strong plan for their future. Overall, it empowers individuals to choose a career that matches their abilities and leads to long-term growth and satisfaction.
              </p>
            </div>

            <img
              src={require("../assets/carrer.jpg")}
              alt="Rural micro-business training"
              className="rounded-2xl shadow-lg"
            />
          </motion.div>
          {/*School/College Training */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center bg-cyan-100 dark:bg-gray-800 rounded-3xl p-10"
          >
            <img
              src={require("../assets/training.jpg")}
              alt="Innovation labs in colleges"
              className="rounded-2xl shadow-lg"
            />

            <div>
              <h3 className="text-3xl font-bold mb-4"> School/College Training </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
               Colleges and school trainings provide students with practical knowledge, skill-building activities, and real-world exposure that help them grow academically and personally. These trainings strengthen important skills such as communication, teamwork, leadership, and basic technical abilities, making students more confident and prepared for future opportunities. They also help students understand their interests, choose the right career path, and develop the discipline needed for higher education and professional life. Overall, such training programs build a strong foundation for students to succeed in both studies and future careers.
                </p>
            </div>

          </motion.div>

        </div>
      </section>

    </div>
  );
}