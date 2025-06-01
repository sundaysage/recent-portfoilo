'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section
      id="about"
      className="py-20 px-4 max-w-4xl mx-auto text-center bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white"
      >
        About Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed"
      >
        I’m a passionate Frontend Developer with over 4 years of experience crafting
        modern, responsive, and accessible user interfaces using technologies like <span className="font-semibold text-blue-600 dark:text-blue-400">React</span>, <span className="font-semibold text-blue-600 dark:text-blue-400">Next.js</span>, and <span className="font-semibold text-blue-600 dark:text-blue-400">Tailwind CSS</span>. I specialize in building seamless UX, optimizing performance, and integrating scalable frontend systems.
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300"
      >
        Outside of coding, I enjoy contributing to open-source, mentoring junior developers, and continuously learning to stay ahead in the frontend world.
      </motion.p>
    </section>
  )
}
