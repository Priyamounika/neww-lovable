import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, BarChart3, ShieldCheck, ArrowRight, Clock, Users, Headphones } from 'lucide-react';

const technologies = [
  {
    number: '01',
    title: 'Node JS',
    description: 'NodeJS development is designed to build fast and scalable web applications and develop solutions to increase traffic demand.'
  },
  {
    number: '02',
    title: 'AngularJS',
    description: 'AngularJS is an open-source JavaScript framework. The purpose of developing AngularJS is to enhance web applications with model-driven capabilities.'
  },
  {
    number: '03',
    title: 'PHP',
    description: 'For the beginners among us, PHP is a web development language that has been widely adopted for several websites in the world.'
  },
  {
    number: '04',
    title: 'Laravel',
    description: 'Laravel is an open-source PHP framework, used to develop web applications under the MVC architecture platform.'
  },
  {
    number: '05',
    title: 'CodeIgniter',
    description: 'CodeIgniter is an open-source application development framework based on PHP. It is more popular and powerful than other PHP frameworks.'
  },
  {
    number: '06',
    title: 'Yii',
    description: 'Yii is a large open-source web application development platform with MVC framework as the best platform for developers.'
  }
];

const whyChooseUs = [
  {
    icon: Code,
    title: 'Cutting-Edge Technology',
    description: 'We have the latest technology to make your work easier and more manageable. We believe that providing the best resource for Web Application development with cutting-edge technology is beneficial to the web and business.'
  },
  {
    icon: Clock,
    title: 'On-Time Delivery',
    description: 'Choose Web Application developers from Vedhanthi to deliver on time. We are punctual and support our words. With on-time delivery, we deliver projects with the highest quality services and solutions.'
  },
  {
    icon: Users,
    title: 'Effective Solutions',
    description: 'Our Web Application developers have expertise in Web Application development to provide the best solution for your framework. Real-time solutions are dynamic and effective for web applications and their use.'
  },
  {
    icon: Headphones,
    title: '24/7 Support And Maintenance',
    description: 'Web Application developers have provided support and maintenance to manage your projects accurately.'
  }
];

const WebDevelopment = () => (
  <section className="bg-white min-h-screen pt-24 pb-12">
    {/* Hero Section */}
    <div className="container mx-auto px-4 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Web Application Development</h1>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          Web application development is the introduction of software applications that are living on far off servers and are introduced to the user's tool over the Internet.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8 text-left">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Key Benefits:</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Reduce IT complexity, facilitate seamless workflows, and synchronize business processes</li>
              <li>• Detailed analysis and understanding of customer requirements</li>
              <li>• Unique business enhancements with cross-platform compatibility</li>
              <li>• Web applications that can keep pace with IT by preventing downtime and increasing productivity</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
            <h3 className="font-semibold text-lg mb-2">Our Approach:</h3>
            <p className="text-gray-700">
              We transform ideas into innovative web applications that drive your business forward. Our expert team delivers cutting-edge solutions tailored to your specific needs.
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
        <h2 className="text-3xl font-bold mb-4">Why Choose Vedhanthi's Web Application Developers?</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We deliver excellence through our proven expertise and commitment to quality.
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
        <h2 className="text-3xl font-bold mb-4">Web Application Development</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We leverage cutting-edge technologies to build robust and scalable web applications.
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
          "Transforming ideas into innovative web applications that drive your business forward."
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
          Contact us today for a free consultation and let's bring your vision to life.
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

export default WebDevelopment; 