import { motion } from "framer-motion";

export default function FocusCard({ icon, title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow"
    >
      <div className="text-4xl text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-400">{desc}</p>
    </motion.div>
  );
}