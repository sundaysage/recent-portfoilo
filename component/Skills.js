'use client'

import { motion } from 'framer-motion'
import { SiReact, SiNextdotjs, SiTailwindcss, SiJavascript, SiTypescript, SiFramer, SiGit, SiRedux } from 'react-icons/si'

const skills = [
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'Redux', icon: SiRedux },
  { name: 'Git', icon: SiGit }
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-20 px-4 max-w-5xl mx-auto text-center bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold mb-10 text-gray-900 dark:text-white"
      >
        My Skills
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8"
      >
        {skills.map(({ name, icon: Icon }) => (
          <motion.div
            key={name}
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center justify-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md transition"
          >
            <Icon className="text-4xl text-blue-600 dark:text-blue-400 mb-2" />
            <p className="text-sm font-medium text-gray-800 dark:text-gray-200">{name}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
