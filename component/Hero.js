'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="py-20 px-4 max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12"
    >
      {/* Text Area */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center md:text-left"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hi, I’m <span className="text-blue-600 dark:text-blue-400">Emenike onyedikachi sunday</span>
        </h1>
        <h1 className="text-xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          AKA <span className="text-blue-600 dark:text-blue-400">Lord sage</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mb-6">
          Senior Frontend Developer crafting fast, accessible, and beautiful web experiences using React, Next.js & Tailwind CSS.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf" // place your resume in /public folder as resume.pdf
            download
            className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 rounded-full font-semibold hover:bg-blue-600 hover:text-white dark:hover:text-white dark:hover:bg-blue-500 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center md:justify-start gap-6 text-2xl text-gray-800 dark:text-gray-200">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <FiGithub className="hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
            <FiLinkedin className="hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
          <a href="mailto:youremail@example.com">
            <FiMail className="hover:text-blue-600 dark:hover:text-blue-400 transition" />
          </a>
        </div>
      </motion.div>

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg border-4 border-blue-600 dark:border-blue-400"
      >
        <Image
          src="/pics.jpg" // <-- Put your image in public/profile.jpg
          alt="Your Name"
          width={240}
          height={240}
          className="object-cover w-full h-full"
        />
      </motion.div>
    </section>
  )
}
