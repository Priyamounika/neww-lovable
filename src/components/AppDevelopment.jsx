import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, Layers, Cloud, ShieldCheck, ArrowRight, Clock, Users, Headphones } from 'lucide-react';

const technologies = [
  {
    number: '01',
    title: 'React Native',
    description: 'Cross-platform mobile app development framework that allows us to build native apps for both iOS and Android using JavaScript.'
  },
  {
    number: '02',
    title: 'Flutter',
    description: 'Google\'s UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.'
  },
  {
    number: '03',
    title: 'iOS Development',
    description: 'Native iOS app development using Swift and Objective-C, ensuring optimal performance and user experience on Apple devices.'
  },
  {
    number: '04',
    title: 'Android Development',
    description: 'Native Android app development using Kotlin and Java, delivering high-performance apps for the Android ecosystem.'
  },
  {
    number: '05',
    title: 'Xamarin',
    description: 'Microsoft\'s cross-platform development tool that allows us to build native apps for iOS, Android, and Windows.'
  },
  {
    number: '06',
    title: 'Ionic',
    description: 'Open-source framework for building cross-platform mobile apps using web technologies like HTML, CSS, and JavaScript.'
  }
];

const whyChooseUs = [
  {
    icon: Smartphone,
    title: 'Cutting-Edge Technology',
    description: 'We leverage the latest mobile development technologies and frameworks to create high-performance, scalable mobile applications.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Our mobile app developers are committed to delivering projects on schedule with the highest quality standards and attention to detail.'
  },
  {
    icon: Users,
    title: 'Effective Solutions',
    description: 'We provide real-time, dynamic solutions that are effective for mobile applications and their diverse use cases across industries.'
  },
  {
    icon: Headphones,
    title: '24/7 Support And Maintenance',
    description: 'Our mobile app developers provide comprehensive support and maintenance to ensure your app runs smoothly and stays updated.'
  }
];

const AppDevelopment = () => (
  <section className="bg-white min-h-screen pt-24 pb-12">
    {/* Hero Section */}
    <div className="container mx-auto px-4 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Mobile Application Development</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Mobile application development is the process of creating software applications that run on mobile devices. We build native, hybrid, and cross-platform mobile apps that engage users and drive business growth.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Key Benefits:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Enhanced user engagement and accessibility</li>
              <li>• Cross-platform compatibility and seamless integration</li>
              <li>• Real-time data synchronization and offline capabilities</li>
              <li>• Scalable solutions that grow with your business</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Our Approach:</h3>
            <p className="text-gray-700">
              We transform your ideas into powerful, user-friendly mobile applications. Our expert team delivers end-to-end mobile solutions for startups and enterprises.
            </p>
          </div>
        </div>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
        >
          Get a Free Consultation
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </div>

    {/* Why Choose Us Section */}
    <div className="container mx-auto px-4 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Why Choose Vedhanthi's Mobile App Developers?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We deliver excellence through our proven expertise and commitment to quality mobile solutions.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {whyChooseUs.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
              <item.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Technologies Section */}
    <div className="container mx-auto px-4 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold mb-4">Mobile Application Development</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We leverage cutting-edge mobile technologies to build robust and scalable applications.
        </p>
      </motion.div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {technologies.map((tech, idx) => (
          <motion.div
            key={tech.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300"
          >
            <div className="text-3xl font-bold text-blue-600 mb-4">{tech.number}</div>
            <h3 className="text-xl font-bold mb-3">{tech.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </div>

    {/* Testimonial Section */}
    <div className="container mx-auto px-4 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white text-center"
      >
        <blockquote className="text-2xl font-semibold mb-6 italic">
          "Transforming ideas into innovative mobile applications that drive your business forward."
        </blockquote>
        <div className="flex items-center justify-center gap-4">
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-bold text-lg">R</span>
          </div>
          <div className="text-left">
            <div className="font-semibold">Ragha Priya</div>
            <div className="text-blue-200 text-sm">CEO Vedhanthi Technologies</div>
          </div>
        </div>
      </motion.div>
    </div>

    {/* CTA Section */}
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-12 border border-gray-200"
      >
        <h3 className="text-3xl font-bold mb-4 text-gray-800">We would love to hear more about your project?</h3>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Contact us today for a free consultation and let's build something amazing together.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
        >
          Get Enquiry
          <ArrowRight className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </div>
  </section>
);

export default AppDevelopment; 