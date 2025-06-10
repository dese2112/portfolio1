import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export function Project() {
  const projects = [
    {
      icon: <FaGithub className="text-4xl text-[#5AB8F3]" />,
      title: "Weather App",
      description:
        "A responsive weather forecast app that fetches real-time data from a weather API and displays current conditions based on user location.",
      link: "https://github.com/dese2112/weather-app",
    },
    {
      icon: <FaGithub className="text-4xl text-[#5AB8F3]" />,
      title: "Portfolio Website",
      description:
        "A personal portfolio built with React and Tailwind CSS showcasing projects, skills, and contact information in a modern design.",
      link: "https://github.com/dese2112/portfolio",
    },
    {
      icon: <FaGithub className="text-4xl text-[#5AB8F3]" />,
      title: "Blog Platform",
      description:
        "A full-stack blog application where users can read, create, edit, and delete posts. Built with Node.js, Express, MongoDB, and EJS.",
      link: "https://github.com/dese2112/blog-platform",
    },
  ];

  return (
    <div className="bg-black text-white py-16" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <motion.section
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#5AB8F3] border-b-4 inline-block border-[#5AB8F3] pb-2">
            Projects
          </h2>
        </motion.section>

        {/* Projects in column layout */}
        <div className="flex flex-col gap-8 max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#38434B] p-6 rounded-xl shadow-lg border border-[#5AB8F3] transition-all duration-300 hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="mb-4">{project.icon}</div>
              </a>
              <h3 className="text-2xl font-semibold text-[#FFFFFF] mb-2">
                {project.title}
              </h3>
              <p className="text-[#F5F5F5]">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
