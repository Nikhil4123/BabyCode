import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Footer: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const footerLinks = {
    quickLinks: [
      { name: 'Courses', href: '#courses' },
      { name: 'Practice Tests', href: '#practice' },
      { name: 'Resources', href: '#resources' },
      { name: 'Blog', href: '#blog' }
    ],
    support: [
      { name: 'FAQ', href: '#faq' },
      { name: 'Contact Us', href: '#contact' },
      { name: 'Privacy Policy', href: '#privacy' },
      { name: 'Terms of Service', href: '#terms' }
    ],
    social: [
      { name: 'Facebook', icon: '📘', href: '#' },
      { name: 'Twitter', icon: '🐦', href: '#' },
      { name: 'Instagram', icon: '📷', href: '#' },
      { name: 'LinkedIn', icon: '💼', href: '#' }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 dark:from-gray-800 dark:via-gray-900 dark:to-black overflow-hidden transition-colors duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {/* Company Info */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                IELTS Pro
              </h3>
            </motion.div>
            <motion.p 
              className="text-gray-300 dark:text-gray-400 text-lg leading-relaxed mb-6"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.2 }}
            >
              Helping students achieve their dreams through expert IELTS guidance and comprehensive preparation programs.
            </motion.p>
            
            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              {footerLinks.social.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-12 h-12 bg-white/10 dark:bg-gray-700/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 dark:hover:bg-gray-600/30 transition-all duration-300 border border-white/20 dark:border-gray-600/30"
                  whileHover={{ 
                    scale: 1.1,
                    backgroundColor: "rgba(255, 255, 255, 0.2)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <span className="text-xl">{social.icon}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="text-white text-xl font-bold mb-6"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Quick Links
            </motion.h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                >
                  <motion.a 
                    href={link.href} 
                    className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mr-0 group-hover:mr-2 group-hover:w-2 transition-all duration-300"
                    />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Support */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="text-white text-xl font-bold mb-6"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Support
            </motion.h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <motion.a 
                    href={link.href} 
                    className="text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.span
                      className="w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mr-0 group-hover:mr-2 group-hover:w-2 transition-all duration-300"
                    />
                    {link.name}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h4 
              className="text-white text-xl font-bold mb-6"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Contact Us
            </motion.h4>
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div 
                className="flex items-center text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-blue-400 mr-3">📍</span>
                <span>123 Education Street<br />New York, NY 10001</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-blue-400 mr-3">📞</span>
                <span>(555) 123-4567</span>
              </motion.div>
              <motion.div 
                className="flex items-center text-gray-300 dark:text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <span className="text-blue-400 mr-3">✉️</span>
                <span>info@ieltspro.com</span>
              </motion.div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <h5 className="text-white font-semibold mb-3">Stay Updated</h5>
              <div className="flex">
                <motion.input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 bg-white/10 dark:bg-gray-700/20 backdrop-blur-sm border border-white/20 dark:border-gray-600/30 rounded-l-lg text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
                <motion.button
                  className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-r-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Bottom Border */}
        <motion.div 
          className="mt-16 pt-8 border-t border-white/20 dark:border-gray-700/30"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p 
              className="text-gray-400 dark:text-gray-500 text-center md:text-left"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              © {new Date().getFullYear()} IELTS Pro. All rights reserved.
            </motion.p>
            
            <motion.div 
              className="flex space-x-6 mt-4 md:mt-0"
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <motion.a 
                href="#privacy" 
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                href="#terms" 
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;