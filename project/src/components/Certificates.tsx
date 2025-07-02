import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, Star, Sparkles } from 'lucide-react';

interface Certificate {
  title: string;
  provider: string;
  date: string;
  image: string;
  description?: string;
  link: string;
}

const certificates: Certificate[] = [
  {
    title: 'Statistics for Data Science',
    provider: 'HackerRank',
    date: 'May 3, 2025',
    image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Advanced statistical analysis and data interpretation',
    link: 'https://simpli-web.app.link/e/RazoK7otFUb'
  },
  {
    title: 'Generative AI for Beginners',
    provider: 'SimpliLearn',
    date: 'June 30, 2025',
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Fundamentals of generative AI and machine learning',
    link: 'https://simpli-web.app.link/e/pCrLHWbtFUb'
  },
  {
    title: 'Foundations of Prompt Engineering',
    provider: 'AWS',
    date: 'July 1, 2025',
    image: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Advanced prompt engineering techniques for AI systems',
    link: 'blob:https://skillbuilder.aws/ce97b904-05e7-445b-9b24-4d784ffe3fb4'
  },
  {
    title: 'SQL Advanced',
    provider: 'HackerRank',
    date: 'May 29, 2025',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Complex database queries and optimization',
    link: 'https://www.hackerrank.com/certificates/1373e9de7eeb'
  },
  {
    title: 'Complete Python Bootcamp',
    provider: 'Udemy',
    date: 'Apr 26, 2025',
    image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400',
    description: 'Comprehensive Python programming from basics to advanced',
    link: 'https://www.udemy.com/certificate/UC-d4a3995e-da10-4f94-8de9-3bb32659529a/'
  }
];

const Certificates: React.FC = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 80%, rgba(0, 212, 255, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 50% 50%, rgba(74, 144, 226, 0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating stars */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 360],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              delay: Math.random() * 3,
              repeat: Infinity,
            }}
          >
            <Star className="text-yellow-400/30 w-4 h-4" />
          </motion.div>
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
              y: [0, -10, 0]
            }}
            transition={{ 
              rotate: { duration: 12, repeat: Infinity, ease: "linear" },
              y: { duration: 3, repeat: Infinity }
            }}
          >
            <Award className="text-yellow-400/40 w-12 h-12" />
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            animate={{
              textShadow: [
                "0 0 20px rgba(255, 107, 53, 0.3)",
                "0 0 40px rgba(0, 212, 255, 0.3)",
                "0 0 20px rgba(255, 107, 53, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              Certifications
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Continuous learning and professional development in AI, machine learning, 
            and software engineering through industry-recognized certifications.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, scale: 0.8, rotateY: 45 }}
              whileInView={{ opacity: 1, y: 0, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                y: -15,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(0, 212, 255, 0.3)"
              }}
              className="group cursor-pointer perspective-1000"
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 shadow-xl relative">
                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100"
                  animate={{
                    background: [
                      "linear-gradient(135deg, rgba(0, 212, 255, 0.1), transparent, rgba(255, 107, 53, 0.1))",
                      "linear-gradient(225deg, rgba(255, 107, 53, 0.1), transparent, rgba(0, 212, 255, 0.1))",
                      "linear-gradient(315deg, rgba(0, 212, 255, 0.1), transparent, rgba(255, 107, 53, 0.1))",
                      "linear-gradient(135deg, rgba(0, 212, 255, 0.1), transparent, rgba(255, 107, 53, 0.1))"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="relative overflow-hidden">
                  <motion.img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-all duration-500"
                    whileHover={{ scale: 1.2, rotate: 2 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Award icon with animation */}
                  <motion.div
                    className="absolute top-4 right-4"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                  >
                    <motion.div
                      className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg"
                      animate={{
                        boxShadow: [
                          "0 0 20px rgba(0, 212, 255, 0.3)",
                          "0 0 30px rgba(0, 212, 255, 0.6)",
                          "0 0 20px rgba(0, 212, 255, 0.3)"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Award className="text-white" size={24} />
                    </motion.div>
                  </motion.div>

                  {/* Sparkles effect */}
                  <motion.div
                    className="absolute top-2 left-4 opacity-0 group-hover:opacity-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="text-yellow-400 w-5 h-5" />
                  </motion.div>
                </div>

                <div className="p-6 relative">
                  <motion.h3
                    className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {cert.title}
                  </motion.h3>
                  
                  <motion.div 
                    className="flex items-center gap-2 text-orange-400 mb-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="font-semibold">{cert.provider}</span>
                  </motion.div>
                  
                  <motion.div 
                    className="flex items-center gap-2 text-gray-400 mb-3"
                    whileHover={{ x: 3 }}
                  >
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </motion.div>
                  
                  {cert.description && (
                    <motion.p
                      className="text-gray-300 text-sm mb-4"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {cert.description}
                    </motion.p>
                  )}
                  
                  <motion.a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium relative group/link"
                    whileHover={{ x: 8, scale: 1.05 }}
                  >
                    <span>View Certificate</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ExternalLink size={16} />
                    </motion.div>
                    
                    {/* Underline animation */}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-cyan-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                </div>

                {/* Floating particles on hover */}
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-400/60 rounded-full opacity-0 group-hover:opacity-100"
                    style={{
                      left: `${20 + Math.random() * 60}%`,
                      top: `${20 + Math.random() * 60}%`,
                    }}
                    animate={{
                      y: [0, -20, -40],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.2,
                      repeat: Infinity,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;