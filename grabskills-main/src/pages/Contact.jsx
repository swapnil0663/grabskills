import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 px-6 py-16">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-left"
        >
          <h1 className="text-4xl font-bold text-primary">
            Contact Us
          </h1>

          <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl">
            We believe collaboration creates impact. Connect with us to
            volunteer, partner, support our initiatives, or simply learn more
            about our mission.
          </p>

          <div className="mt-6 space-y-2 text-gray-700 dark:text-gray-300">
            <p><strong>Email:</strong> contact@ourngo.org</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> Hyderabad, Telangana, India</p>
          </div>
        </motion.div>

        {/* FORM CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8"
        >
          <form className="space-y-6">

            {/* NAME */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">First Name</label>
                <input
                  type="text"
                  placeholder="Enter your first name"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-transparent"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Last Name</label>
                <input
                  type="text"
                  placeholder="Enter your last name"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-transparent"
                />
              </div>
            </div>

            {/* EMAIL & PHONE */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-transparent"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Contact Number</label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-transparent"
                />
              </div>
            </div>

            {/* SUBJECT */}
            <div>
              <label className="block mb-2 font-medium">Subject</label>
              <input
                type="text"
                placeholder="What is this regarding?"
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-transparent"
              />
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block mb-2 font-medium">Message</label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary outline-none bg-transparent resize-none"
              ></textarea>
            </div>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              We usually respond within 24–48 hours.
            </p>

            {/* SUBMIT BUTTON */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white rounded-lg font-semibold shadow-md hover:bg-green-600 transition"
            >
              Submit
            </motion.button>

          </form>
        </motion.div>

      </div>
    </div>
  );
}