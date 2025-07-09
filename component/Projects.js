'use client'

import { motion } from 'framer-motion'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import Image from 'next/image'

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A modern  portfolio built with Next.js, Tailwind CSS, Framer Motion, and fully responsive design.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    image: '/port.png', 
    github: 'https://github.com/sundaysage/oil.git',
    demo: 'https://your-portfolio.vercel.app'
    // demo: 'https://your-portfolio.vercel.app'
  },
  {
    title: 'Company Portfolio Website',
    description: 'A company portfolio built with Next.js, Tailwind CSS, Framer Motion, and fully responsive design.',
    tech: ['Next.js', 'Tailwind', 'Framer Motion'],
    image: '/Dlc.png',
    github: 'https://github.com/sundaysage/oil-and-gas.git',
    demo: 'https://www.dlcexploration.com/'
  },
  {
    title: 'Constuction company portfolio',
    description: 'Building  Construction portfolio site ,that show case past project built by the construction, their story and their clients and options to contact them .',
    tech: ['React', 'Tailwind', 'framer motion'],
    image: '/Construction.png',
    github: '/',
    demo: 'https://www.buildingnow.com/'
  },
  {
    title: 'Hospital Management System',
    description: 'This hospital management use for registering and storing clients information .',
    tech: ['React', 'Tailwind', 'Chart.js'],
    image: '/hospital.png',
    github: 'https://github.com/yourusername/ecommerce-dashboard',
    demo: 'https://hospitalseparated.netlify.app/'
  },
  // {
  //   title: 'E-commerce Dashboard',
  //   description: 'Admin dashboard for managing products, orders and users, featuring charts and authentication.',
  //   tech: ['React', 'Tailwind', 'Chart.js'],
  //   image: '/projects/ecommerce.jpg',
  //   github: 'https://github.com/yourusername/ecommerce-dashboard',
  //   demo: 'https://ecommerce-admin.vercel.app'
  // },
  // Add more projects here
]

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-20 px-4 max-w-6xl mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
      >
        Projects
      </motion.h2>

      <div className="grid gap-10 md:grid-cols-2">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden"
          >
            <div className="relative h-56 md:h-64 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-blue-600 dark:text-blue-400 font-medium hover:underline"
                >
                  <FiExternalLink /> Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-gray-800 dark:text-gray-300 hover:underline"
                >
                  <FiGithub /> GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
