'use client'

import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-4 max-w-3xl mx-auto text-center bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
      >
        Get In Touch
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
        className="text-lg text-gray-700 dark:text-gray-300 mb-6"
      >
        I'm always open to new opportunities, collaborations, or just a friendly chat.
        Feel free to reach out!
      </motion.p>

      <motion.a
        href="mailto:Semenike60@gmail.com"
        whileHover={{ scale: 1.05 }}
        className="inline-block px-6 py-3 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
      >
        Say Hello
      </motion.a>

      <motion.div
        className="mt-8 flex justify-center gap-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <a href="https://github.com/sundaysage" target="_blank" rel="noopener noreferrer">
          <FiGithub className="text-2xl text-gray-800 dark:text-gray-200 hover:text-blue-600 transition" />
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
          <FiLinkedin className="text-2xl text-gray-800 dark:text-gray-200 hover:text-blue-600 transition" />
        </a>
        <a href="mailto:Semenike60@gmail.com">
          <FiMail className="text-2xl text-gray-800 dark:text-gray-200 hover:text-blue-600 transition" />
        </a>
      </motion.div>
    </section>
  )
}
