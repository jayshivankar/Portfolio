import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Download, Eye, Sparkles } from 'lucide-react';
import FloatingElements from './FloatingElements';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Jay_Shivankar_resume.pdf';
    link.download = 'Jay_Shivankar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 relative overflow-hidden">
      <FloatingElements />
      
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          background: [
            "radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 40% 80%, rgba(74, 144, 226, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 20% 50%, rgba(0, 212, 255, 0.3) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-screen flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Profile Image Section */}
          <motion.div
            className="flex justify-center lg:order-2"
            initial={{ opacity: 0, x: 100, rotateY: 45 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <motion.div
              className="relative w-80 h-80 lg:w-96 lg:h-96"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Outer rotating ring */}
              <motion.div
                className="absolute inset-0 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, rgba(0, 212, 255, 0.8), rgba(255, 107, 53, 0.8), rgba(74, 144, 226, 0.8), rgba(0, 212, 255, 0.8))"
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Middle ring */}
              <motion.div
                className="absolute inset-2 rounded-full bg-gray-900/90 backdrop-blur-sm"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              >
                {/* Inner glow ring */}
                <motion.div
                  className="absolute inset-4 rounded-full"
                  style={{
                    background: "conic-gradient(from 180deg, rgba(0, 212, 255, 0.4), rgba(255, 107, 53, 0.4), rgba(74, 144, 226, 0.4), rgba(0, 212, 255, 0.4))"
                  }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                
                {/* Profile image container */}
                <motion.div
                  className="absolute inset-6 rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl"
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 50px rgba(0, 212, 255, 0.5)"
                  }}
                  animate={{
                    boxShadow: [
                      "0 0 30px rgba(0, 212, 255, 0.3)",
                      "0 0 50px rgba(255, 107, 53, 0.3)",
                      "0 0 30px rgba(0, 212, 255, 0.3)"
                    ]
                  }}
                  transition={{ 
                    boxShadow: { duration: 3, repeat: Infinity },
                    scale: { type: "spring", stiffness: 300 }
                  }}
                >
                  <motion.img
                    src="/profile_img.jpg"
                    alt="Jay Shivankar"
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    whileHover={{ scale: 1.1 }}
                  />
                  
                  {/* Overlay gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
              
              {/* Floating particles around image */}
              {Array.from({ length: 12 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-cyan-400/60 rounded-full"
                  style={{
                    left: `${50 + 45 * Math.cos((i * 30) * Math.PI / 180)}%`,
                    top: `${50 + 45 * Math.sin((i * 30) * Math.PI / 180)}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    delay: i * 0.2,
                    repeat: Infinity,
                  }}
                />
              ))}
              
              {/* Sparkle effects */}
              <motion.div
                className="absolute -top-4 -right-4"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="text-cyan-400/60 w-8 h-8" />
              </motion.div>
              <motion.div
                className="absolute -bottom-4 -left-4"
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
              >
                <Sparkles className="text-orange-400/60 w-6 h-6" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            className="text-center lg:text-left relative z-10 lg:order-1"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {/* Sparkle effects */}
            <motion.div
              className="absolute -top-20 -left-20"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-cyan-400/40 w-8 h-8" />
            </motion.div>
            <motion.div
              className="absolute -top-10 -right-16"
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="text-orange-400/40 w-6 h-6" />
            </motion.div>

            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6 relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span
                className="bg-gradient-to-r from-orange-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Jay Shivankar
              </motion.span>
              
              {/* Glowing effect behind text */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-orange-400/20 via-cyan-400/20 to-blue-400/20 blur-3xl -z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.h1>

            <motion.div
              className="relative mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.p
                className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto lg:mx-0"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                Aspiring GenAI Engineer passionate about building impactful AI systems using{' '}
                <motion.span 
                  className="text-cyan-400 font-semibold"
                  whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(0, 212, 255, 0.8)" }}
                >
                  LangChain
                </motion.span>,{' '}
                <motion.span 
                  className="text-orange-400 font-semibold"
                  whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(255, 107, 53, 0.8)" }}
                >
                  Transformers
                </motion.span>, and{' '}
                <motion.span 
                  className="text-blue-400 font-semibold"
                  whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(74, 144, 226, 0.8)" }}
                >
                  FastAPI
                </motion.span>. 
                Skilled in NLP, CV, and scalable ML apps.
              </motion.p>
              
              {/* Floating particles around text */}
              {Array.from({ length: 8 }).map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-cyan-400/60 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    delay: Math.random() * 2,
                    repeat: Infinity,
                  }}
                />
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.button
                onClick={scrollToProjects}
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-white font-semibold flex items-center justify-center gap-2 overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
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
                <Eye size={20} className="relative z-10" />
                <span className="relative z-10">See My Work</span>
                
                {/* Ripple effect */}
                <motion.div
                  className="absolute inset-0 bg-white/20 rounded-full"
                  initial={{ scale: 0, opacity: 1 }}
                  whileHover={{ scale: 4, opacity: 0 }}
                  transition={{ duration: 0.6 }}
                />
              </motion.button>

              <motion.button
                onClick={downloadResume}
                className="group relative px-8 py-4 border-2 border-orange-400 text-orange-400 rounded-full font-semibold flex items-center justify-center gap-2 overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -2,
                  backgroundColor: "rgba(255, 107, 53, 0.1)",
                  boxShadow: "0 20px 40px rgba(255, 107, 53, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated border */}
                <motion.div
                  className="absolute inset-0 border-2 border-orange-300 rounded-full"
                  initial={{ scale: 1, opacity: 0 }}
                  whileHover={{ scale: 1.1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <Download size={20} className="relative z-10" />
                <span className="relative z-10">Download Resume</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToProjects}
        whileHover={{ scale: 1.2 }}
      >
        <motion.div
          className="relative"
          animate={{ 
            boxShadow: [
              "0 0 20px rgba(0, 212, 255, 0.3)",
              "0 0 30px rgba(0, 212, 255, 0.6)",
              "0 0 20px rgba(0, 212, 255, 0.3)"
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-gray-400 w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;