import { FaPaintBrush, FaCode } from "react-icons/fa";
import { motion } from "framer-motion";

export function Services() {
  const services = [
    {
      icon: <FaPaintBrush className="text-4xl text-[#5AB8F3]" />,
      title: "UI/UX Design",
      description:
        "Design of attractive interfaces for both web and mobile users, making the most of the brand or product that the client wishes to exploit on their website.",
    },
    {
      icon: <FaCode className="text-4xl text-[#5AB8F3]" />,
      title: "Web Development",
      description:
        "Creation of well-structured web pages, good responsive design, palette, with interactions that give the user satisfaction when browsing the website.",
    },
  ];

  return (
    <div className="bg-black text-white py-16" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Section Header */}
        <section className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#5AB8F3] border-b-4 inline-block border-[#5AB8F3] pb-2">
            Services
          </h2>
        </section>

        {/* Animated Services Grid */}
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-[#38434B] transition-all duration-300 p-6 rounded-xl shadow-lg border border-[#5AB8F3]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-[#FFFFFF] mb-2">
                {service.title}
              </h3>
              <p className="text-[#F5F5F5]">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
