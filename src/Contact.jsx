import { FaEnvelope, FaPhoneAlt, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export function Contact() {
  return (
    <section id="contact" className="py-20 px-6 bg-black text-white my-10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="flex items-center gap-4 my-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-[#5AB8F3] border-b-4 inline-block border-[#5AB8F3] pb-2">
            contact me
          </h2>
          
        </motion.div>

        <div className="flex flex-col md:flex-row gap-12 mb-10">
          {/* Contact Info */}
          <motion.div
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="mb-8 text-[#F5F5F5]">
              I am open to discussing exciting web development projects.
              I'm also available for graphic design work and creative collaboration.
              Let's connect and explore potential partnerships or freelance work.
            </p>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#5AB8F3] text-2xl" />
              <span className="text-lg text-[#F5F5F5]">deseagatente@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-[#5AB8F3] text-2xl" />
              <span className="text-lg text-[#F5F5F5]">0972105696</span>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkedAlt className="text-[#5AB8F3] text-2xl" />
              <span className="text-lg text-[#F5F5F5]">Debremarkos, Ethiopia</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            className="flex-1 space-y-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-semibold text-[#F5F5F5]">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-3 bg-[#38434B] text-white rounded-md border border-[#5AB8F3] focus:outline-none focus:ring-2 focus:ring-[#5AB8F3]"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-semibold text-[#F5F5F5]">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 bg-[#38434B] text-white rounded-md border border-[#5AB8F3] focus:outline-none focus:ring-2 focus:ring-[#5AB8F3]"
                placeholder="your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-semibold text-[#F5F5F5]">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full px-4 py-3 bg-[#38434B] text-white rounded-md border border-[#5AB8F3] focus:outline-none focus:ring-2 focus:ring-[#5AB8F3]"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-[#5AB8F3] hover:bg-[#3aaae8] text-white font-semibold py-3 rounded-md transition-colors"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
