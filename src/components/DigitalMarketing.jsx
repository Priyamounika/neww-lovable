import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Search, Users, Mail, BarChart3, Globe, Megaphone, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'Search Engine Optimization (SEO)',
    description: 'Improve your website ranking and visibility on search engines with our proven SEO strategies.'
  },
  {
    icon: BarChart3,
    title: 'Search Engine Marketing (SEM)',
    description: 'Drive targeted traffic and maximize ROI with effective paid advertising campaigns (Google Ads, Bing Ads).'
  },
  {
    icon: Users,
    title: 'Social Media Marketing (SMM)',
    description: 'Engage your audience and grow your brand on platforms like Facebook, Instagram, LinkedIn, and Twitter.'
  },
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Nurture leads and retain customers with personalized, automated email campaigns.'
  },
  {
    icon: Megaphone,
    title: 'Content Marketing',
    description: 'Attract and convert with high-quality blogs, articles, infographics, and videos.'
  },
  {
    icon: Globe,
    title: 'Web Analytics & Reporting',
    description: 'Track, analyze, and optimize your digital marketing performance with actionable insights.'
  }
];

const processSteps = [
  {
    step: '01',
    title: 'Discovery & Strategy',
    description: 'We analyze your business, audience, and goals to craft a tailored digital marketing strategy.'
  },
  {
    step: '02',
    title: 'Implementation',
    description: 'Our experts execute campaigns across SEO, SEM, SMM, and more, using best-in-class tools.'
  },
  {
    step: '03',
    title: 'Optimization',
    description: 'We monitor, test, and refine campaigns for maximum effectiveness and ROI.'
  },
  {
    step: '04',
    title: 'Reporting',
    description: 'Transparent, actionable reports keep you informed and drive continuous improvement.'
  }
];

const benefits = [
  'Increase brand visibility and reach',
  'Generate high-quality leads',
  'Boost website traffic and conversions',
  'Enhance customer engagement and loyalty',
  'Data-driven decision making',
  'Measurable results and ROI'
];

const DigitalMarketing = () => {
  return (
    <section className="bg-white min-h-screen pt-24 pb-12">
      {/* Hero Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Digital Marketing Services</h1>
          <p className="text-xl text-gray-600 mb-8">
            Accelerate your business growth with our comprehensive digital marketing solutions. From SEO to social media, we help you reach, engage, and convert your ideal customers online.
          </p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            Get a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Digital Marketing Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a full suite of digital marketing services to help your business thrive in the digital age.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center"
            >
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Our Approach</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A proven, transparent process to deliver measurable results for your business.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center shadow-md"
            >
              <div className="text-4xl font-bold text-blue-600 mb-2">{step.step}</div>
              <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto px-4 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Partner with Vedhanthi Technologies for digital marketing that delivers real business growth.
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 text-center"
            >
              <div className="w-10 h-10 mx-auto mb-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">{String.fromCharCode(0x2714)}</div>
              <p className="text-gray-700 font-medium">{benefit}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today for a free digital marketing consultation and see how we can help you achieve your goals.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default DigitalMarketing; 