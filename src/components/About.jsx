import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Users, Award } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Users, number: "30+", label: "Projects Completed" },
    { icon: Award, number: "50+", label: "Happy Clients" },
    { icon: Target, number: "24/7", label: "Support Available" },
    { icon: Eye, number: "100%", label: "Client Satisfaction" },
  ];

  const features = [
    {
      icon: Target,
      title: "Mission",
      description: "To deliver innovative, high-quality digital solutions that empower businesses to achieve their goals and drive growth in the digital landscape."
    },
    {
      icon: Eye,
      title: "Vision",
      description: "To be the leading technology partner for businesses worldwide, known for excellence, innovation, and transformative digital solutions."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h4 className="text-blue-600 font-semibold text-lg mb-4">Our Heritage</h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Crafting Your Vision Into Reality
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Founded in 2022, VEDHANTHI Technologies is the privately held provider of software and web development solutions for information technology, Enterprise learning services, IT training and management professionals.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl opacity-20"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-gray-400 mb-4">VT</div>
                    <div className="text-gray-600 font-medium">Vedhanthi Technologies</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Additional About Section */}
      <div className="mt-20 bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl"></div>
                  <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl"></div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="aspect-square bg-gradient-to-br from-indigo-100 to-blue-100 rounded-2xl"></div>
                  <div className="aspect-square bg-gradient-to-br from-green-100 to-teal-100 rounded-2xl"></div>
                </div>
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h4 className="text-blue-600 font-semibold text-lg mb-4">WHO WE ARE</h4>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                We want to bring the <span className="text-blue-600">business</span> and the <span className="text-purple-600">digital</span> world together
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                We're a team of strategic digital marketing working globally with largest brands, We believe that progress only happens when you refused to play things safe. We combine ideas and behaviors, and insights with design, technological data to produce brand experiences that customers love our services.
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Developing a brand requires a great deal of effort in collaboration with strong and reliable development partners.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-600">Development partners turn your ideas and thoughts into an extraordinary reality that sets you apart from millions of competitors.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full mt-3 flex-shrink-0"></div>
                  <span className="text-gray-600">If you're looking for such a solution partner, Vedhanthi Technologies is the ultimate call for excellence!</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 