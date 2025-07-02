import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, Send, MapPin, Phone, Heart, Sparkles } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:shivankarjay@gmail.com',
      color: 'from-red-400 to-red-600',
      label: 'shivankarjay@gmail.com'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/in/jay-shivankar',
      color: 'from-blue-400 to-blue-600',
      label: 'linkedin.com/in/jay-shivankar'
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/jayshivankar',
      color: 'from-gray-400 to-gray-600',
      label: 'github.com/jayshivankar'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Enhanced Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 0% 0%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, rgba(255, 107, 53, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 0%, rgba(74, 144, 226, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 0%, rgba(0, 212, 255, 0.15) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating hearts and sparkles */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              rotate: [0, 360],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              delay: Math.random() * 4,
              repeat: Infinity,
            }}
          >
            {Math.random() > 0.5 ? (
              <Heart className="text-pink-400/20 w-4 h-4" />
            ) : (
              <Sparkles className="text-cyan-400/20 w-3 h-3" />
            )}
          </motion.div>
        ))}

        {/* Pulsing orbs */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              width: `${30 + Math.random() * 50}px`,
              height: `${30 + Math.random() * 50}px`,
              background: `radial-gradient(circle, 
                ${Math.random() > 0.33 ? 'rgba(0, 212, 255, 0.1)' : 
                  Math.random() > 0.5 ? 'rgba(255, 107, 53, 0.1)' : 'rgba(74, 144, 226, 0.1)'}, 
                transparent)`
            }}
            animate={{
              scale: [1, 1.8, 1],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              delay: Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            className="absolute -top-8 left-1/2 transform -translate-x-1/2"
            animate={{ 
              rotate: 360,
              scale: [1, 1.3, 1]
            }}
            transition={{ 
              rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            <Heart className="text-pink-400/40 w-10 h-10" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              textShadow: [
                "0 0 30px rgba(0, 212, 255, 0.3)",
                "0 0 50px rgba(255, 107, 53, 0.3)",
                "0 0 30px rgba(0, 212, 255, 0.3)"
              ]
            }}
            transition={{ 
              backgroundPosition: { duration: 5, repeat: Infinity },
              textShadow: { duration: 3, repeat: Infinity }
            }}
            style={{ 
              backgroundImage: "linear-gradient(45deg, #FF6B35, #00D4FF, #FF6B35)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            Let's Connect!
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Ready to collaborate on AI projects or discuss opportunities? 
            I'd love to hear from you. Let's build something amazing together!
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enhanced Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: 45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
          >
            <motion.div
              className="bg-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(0, 212, 255, 0.2)"
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-orange-500/5"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(0, 212, 255, 0.05), transparent, rgba(255, 107, 53, 0.05))",
                    "linear-gradient(225deg, rgba(255, 107, 53, 0.05), transparent, rgba(0, 212, 255, 0.05))",
                    "linear-gradient(135deg, rgba(0, 212, 255, 0.05), transparent, rgba(255, 107, 53, 0.05))"
                  ]
                }}
                transition={{ duration: 6, repeat: Infinity }}
              />

              <motion.h3
                className="text-2xl font-bold text-white mb-6 relative z-10"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(0, 212, 255, 0.8)"
                }}
              >
                Send me a message
              </motion.h3>
              
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    placeholder="Enter your name"
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)"
                    }}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300"
                    placeholder="Enter your email"
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)"
                    }}
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project or idea"
                    whileFocus={{ 
                      scale: 1.02,
                      boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)"
                    }}
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-semibold flex items-center justify-center gap-2 relative overflow-hidden group"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(0, 212, 255, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <Send size={20} className="relative z-10" />
                  <span className="relative z-10">Send Message</span>
                  
                  {/* Ripple effect */}
                  <motion.div
                    className="absolute inset-0 bg-white/20 rounded-lg"
                    initial={{ scale: 0, opacity: 1 }}
                    whileHover={{ scale: 4, opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.button>
              </form>
            </motion.div>
          </motion.div>

          {/* Enhanced Contact Info & Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: -45 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            className="space-y-8"
          >
            <motion.div
              className="bg-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(255, 107, 53, 0.2)"
              }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-cyan-500/5"
                animate={{
                  background: [
                    "linear-gradient(45deg, rgba(255, 107, 53, 0.05), transparent, rgba(0, 212, 255, 0.05))",
                    "linear-gradient(225deg, rgba(0, 212, 255, 0.05), transparent, rgba(255, 107, 53, 0.05))",
                    "linear-gradient(45deg, rgba(255, 107, 53, 0.05), transparent, rgba(0, 212, 255, 0.05))"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              />

              <motion.h3
                className="text-2xl font-bold text-white mb-6 relative z-10"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(255, 107, 53, 0.8)"
                }}
              >
                Get in touch
              </motion.h3>
              
              <div className="space-y-6 relative z-10">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-300 group relative overflow-hidden"
                    whileHover={{ 
                      scale: 1.05, 
                      x: 15,
                      boxShadow: "0 10px 30px rgba(0, 212, 255, 0.2)"
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {/* Hover background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />

                    <motion.div
                      className={`w-12 h-12 bg-gradient-to-br ${link.color} rounded-lg flex items-center justify-center shadow-lg relative z-10`}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 15,
                        boxShadow: "0 0 30px rgba(0, 212, 255, 0.5)"
                      }}
                    >
                      <link.icon className="text-white" size={24} />
                    </motion.div>
                    <div className="relative z-10">
                      <motion.h4
                        className="text-white font-semibold group-hover:text-cyan-400 transition-colors duration-300"
                        whileHover={{ x: 5 }}
                      >
                        {link.name}
                      </motion.h4>
                      <p className="text-gray-400 text-sm">{link.label}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-900 p-8 rounded-2xl border border-gray-700 shadow-xl relative overflow-hidden"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(74, 144, 226, 0.2)"
              }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-green-500/5"
                animate={{
                  background: [
                    "linear-gradient(135deg, rgba(74, 144, 226, 0.05), transparent, rgba(34, 197, 94, 0.05))",
                    "linear-gradient(225deg, rgba(34, 197, 94, 0.05), transparent, rgba(74, 144, 226, 0.05))",
                    "linear-gradient(135deg, rgba(74, 144, 226, 0.05), transparent, rgba(34, 197, 94, 0.05))"
                  ]
                }}
                transition={{ duration: 7, repeat: Infinity }}
              />

              <motion.h3
                className="text-2xl font-bold text-white mb-4 relative z-10"
                whileHover={{ 
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(74, 144, 226, 0.8)"
                }}
              >
                Available for
              </motion.h3>
              <div className="space-y-3 relative z-10">
                {[
                  { text: 'Freelance AI/ML Projects', color: 'bg-cyan-400' },
                  { text: 'Full-time GenAI Opportunities', color: 'bg-orange-400' },
                  { text: 'Technical Consultations', color: 'bg-blue-400' },
                  { text: 'Collaboration on Open Source', color: 'bg-green-400' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10, scale: 1.05 }}
                  >
                    <motion.div
                      className={`w-3 h-3 ${item.color} rounded-full`}
                      animate={{
                        scale: [1, 1.3, 1],
                        boxShadow: [
                          "0 0 10px rgba(0, 212, 255, 0.3)",
                          "0 0 20px rgba(0, 212, 255, 0.6)",
                          "0 0 10px rgba(0, 212, 255, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                    <span>{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;