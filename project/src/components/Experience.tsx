import React from 'react';
import { motion } from 'framer-motion';
import { Building, Calendar, MapPin, Zap, Star, CheckCircle } from 'lucide-react';

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  points: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: 'Maestro Intellect',
    role: 'GenAI Intern',
    duration: 'Feb 2025 – Jun 2025',
    points: [
      'Developed LinkedIn-Echo AI content generator using LangChain, LLaMA 3 (Groq API), and Streamlit',
      'Improved influencer post consistency and reduced manual effort by 60%',
      'Built two-stage NLP pipeline to extract metadata (topic, tone, post length) from user history',
      'Enhanced LLM output personalization by 40% through guided few-shot prompting'
    ],
    skills: ['LangChain', 'LLaMA 3', 'Groq API', 'Streamlit', 'NLP Pipeline', 'Few-shot Prompting']
  },
  {
    company: 'Maitravaruna Technologies',
    role: 'ML Intern',
    duration: 'Dec 2023 – Apr 2024',
    points: [
      'Conducted research-driven ML project for optimizing industrial coating processes',
      'Enhanced corrosion resistance by 15%+ through real-world material science data analysis',
      'Applied supervised ML models (Random Forest, Linear Regression) using Scikit-learn and Python',
      'Reduced trial iterations by 30% through predictive coating effectiveness modeling'
    ],
    skills: ['Machine Learning', 'Random Forest', 'Linear Regression', 'Scikit-learn', 'Python', 'Material Science']
  }
];

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-800 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-orange-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              y: [0, -100],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 3,
              repeat: Infinity,
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
            className="absolute -top-6 left-1/2 transform -translate-x-1/2"
            animate={{ 
              rotate: 360,
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              rotate: { duration: 15, repeat: Infinity, ease: "linear" },
              scale: { duration: 2, repeat: Infinity }
            }}
          >
            <Star className="text-orange-400/40 w-8 h-8" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{ 
              backgroundImage: "linear-gradient(45deg, #FF6B35, #00D4FF, #FF6B35)",
              backgroundSize: "200% 200%",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            My Experience
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Professional journey in AI and machine learning, contributing to innovative solutions 
            and gaining hands-on experience with cutting-edge technologies.
          </motion.p>
        </motion.div>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.3,
                type: "spring",
                stiffness: 100
              }}
              className="relative"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content */}
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}
                  whileHover={{ x: index % 2 === 0 ? 10 : -10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 shadow-xl hover:shadow-2xl relative overflow-hidden group">
                    {/* Animated background gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-orange-500/5 opacity-0 group-hover:opacity-100"
                      animate={{
                        background: [
                          "linear-gradient(135deg, rgba(0, 212, 255, 0.05), transparent, rgba(255, 107, 53, 0.05))",
                          "linear-gradient(225deg, rgba(255, 107, 53, 0.05), transparent, rgba(0, 212, 255, 0.05))",
                          "linear-gradient(135deg, rgba(0, 212, 255, 0.05), transparent, rgba(255, 107, 53, 0.05))"
                        ]
                      }}
                      transition={{ duration: 4, repeat: Infinity }}
                    />

                    <motion.div 
                      className="flex items-center gap-3 mb-4 relative z-10"
                      whileHover={{ scale: 1.05 }}
                    >
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Building className="text-cyan-400" size={24} />
                      </motion.div>
                      <motion.h3 
                        className="text-2xl font-bold text-white"
                        whileHover={{ 
                          textShadow: "0 0 20px rgba(0, 212, 255, 0.8)" 
                        }}
                      >
                        {exp.company}
                      </motion.h3>
                    </motion.div>
                    
                    <motion.h4 
                      className="text-xl font-semibold text-orange-400 mb-2"
                      whileHover={{ scale: 1.05, x: 5 }}
                    >
                      {exp.role}
                    </motion.h4>
                    
                    <motion.div 
                      className="flex items-center gap-2 text-gray-400 mb-6"
                      whileHover={{ x: 5 }}
                    >
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </motion.div>
                    
                    {/* Bullet Points */}
                    <div className="space-y-3 mb-6">
                      {exp.points.map((point, pointIndex) => (
                        <motion.div
                          key={pointIndex}
                          className="flex items-start gap-3 text-gray-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: pointIndex * 0.1 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                        >
                          <motion.div
                            className="mt-1.5 flex-shrink-0"
                            animate={{
                              scale: [1, 1.2, 1],
                              rotate: [0, 360],
                            }}
                            transition={{
                              duration: 2,
                              delay: pointIndex * 0.3,
                              repeat: Infinity,
                              repeatDelay: 3
                            }}
                          >
                            <CheckCircle className="text-cyan-400 w-4 h-4" />
                          </motion.div>
                          <motion.span
                            className="text-sm leading-relaxed"
                            initial={{ opacity: 0.8 }}
                            whileHover={{ opacity: 1 }}
                          >
                            {point}
                          </motion.span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-3">
                      {exp.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skillIndex}
                          className="px-4 py-2 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 rounded-full text-sm font-medium"
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: skillIndex * 0.1 }}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "rgba(0, 212, 255, 0.2)",
                            boxShadow: "0 0 20px rgba(0, 212, 255, 0.4)"
                          }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Visual Element */}
                <motion.div 
                  className={`${index % 2 === 1 ? 'lg:order-1' : ''} flex justify-center`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.div
                    className="w-72 h-72 relative"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  >
                    {/* Outer ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-gradient-to-r from-cyan-400 to-blue-500"
                      style={{
                        background: "conic-gradient(from 0deg, rgba(0, 212, 255, 0.3), rgba(255, 107, 53, 0.3), rgba(74, 144, 226, 0.3), rgba(0, 212, 255, 0.3))"
                      }}
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Inner content */}
                    <motion.div
                      className="absolute inset-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border border-gray-600 shadow-2xl"
                      animate={{ rotate: [0, -360] }}
                      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    >
                      <motion.div
                        className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center relative"
                        animate={{ 
                          scale: [1, 1.1, 1],
                          boxShadow: [
                            "0 0 30px rgba(0, 212, 255, 0.3)",
                            "0 0 50px rgba(0, 212, 255, 0.6)",
                            "0 0 30px rgba(0, 212, 255, 0.3)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <Building size={48} className="text-white" />
                        
                        {/* Floating particles around the icon */}
                        {Array.from({ length: 6 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-white/60 rounded-full"
                            style={{
                              left: `${50 + 40 * Math.cos((i * 60) * Math.PI / 180)}%`,
                              top: `${50 + 40 * Math.sin((i * 60) * Math.PI / 180)}%`,
                            }}
                            animate={{
                              scale: [0, 1, 0],
                              opacity: [0, 1, 0],
                            }}
                            transition={{
                              duration: 2,
                              delay: i * 0.3,
                              repeat: Infinity,
                            }}
                          />
                        ))}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </div>

              {/* Enhanced Connection Line */}
              {index < experiences.length - 1 && (
                <motion.div 
                  className="absolute left-1/2 transform -translate-x-1/2 mt-12 flex flex-col items-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    className="w-1 h-16 bg-gradient-to-b from-cyan-400 via-orange-400 to-transparent rounded-full"
                    animate={{
                      background: [
                        "linear-gradient(to bottom, rgba(0, 212, 255, 0.8), rgba(255, 107, 53, 0.8), transparent)",
                        "linear-gradient(to bottom, rgba(255, 107, 53, 0.8), rgba(0, 212, 255, 0.8), transparent)",
                        "linear-gradient(to bottom, rgba(0, 212, 255, 0.8), rgba(255, 107, 53, 0.8), transparent)"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-3 h-3 bg-cyan-400 rounded-full mt-2"
                    animate={{
                      scale: [1, 1.5, 1],
                      boxShadow: [
                        "0 0 10px rgba(0, 212, 255, 0.5)",
                        "0 0 20px rgba(0, 212, 255, 0.8)",
                        "0 0 10px rgba(0, 212, 255, 0.5)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;