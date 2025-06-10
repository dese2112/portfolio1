import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        {/* Centered Heading with Animation */}
        <motion.section 
          className="my-10 text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-[#5AB8F3] inline-block border-b-4 border-[#5AB8F3] pb-2">
            About Me
          </h2>
        </motion.section>

        {/* Animated Content Section */}
        <motion.div 
          className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 px-6 md:px-16 py-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex-1 text-xl leading-relaxed">
            <p className="mb-6">
              Hello! My name is <span className="text-[#5AB8F3] font-semibold">Desalegn</span> and I enjoy creating things that live on the internet. 
              My interest in web development started back in 2020 when COVID-19 hit. I started editing custom Tumblr themes — turns out, 
              hacking together a custom reblog button taught me a lot about HTML & CSS! 
            </p>
            skills
            <p className="mb-6">
             
            </p>

            <ul className="list-disc list-inside space-y-2 pl-4 text-[#5AB8F3]">
              <li>HTML and CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>
        </motion.div>
        
      </div>
    </div>
  );
};

export default About;
