import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Sparkles } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  image: string;
  githubUrl: string;
  tags: string[];
}

const projects: Project[] = [
  {
    title: 'Log Classification System',
    description: 'Hybrid NLP pipeline using Regex, Sentence Transformers, and LLMs for log triage',
    image: 'https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=400',
    githubUrl: 'https://github.com/jayshivankar/Log-Classification',
    tags: ['NLP', 'Transformers', 'Python']
  },
  {
    title: 'OrderBot',
    description: 'AI chatbot for food delivery built with FastAPI, Dialogflow, MySQL',
    image: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=400',
    githubUrl: 'https://github.com/jayshivankar/Order-Bot',
    tags: ['FastAPI', 'Dialogflow', 'MySQL']
  },
  {
    title: 'LinkedIn Echo',
    description: 'Personal branding content generator using LLaMA 3 + LangChain',
    image: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
    githubUrl: 'https://github.com/jayshivankar/LinkedIn-Echo',
    tags: ['LLaMA', 'LangChain', 'GenAI']
  },
  {
    title: 'Potato Disease Classifier',
    description: 'TensorFlow model for early detection of plant diseases deployed via FastAPI',
    image: 'https://images.pexels.com/photos/4750271/pexels-photo-4750271.jpeg?auto=compress&cs=tinysrgb&w=400',
    githubUrl: 'https://github.com/jayshivankar/Potato-Disease-Classification',
    tags: ['TensorFlow', 'Computer Vision', 'FastAPI']
  }
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 opacity-10"
        animate={{
          background: [
            "radial-gradient(circle at 0% 0%, rgba(0, 212, 255, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 100% 100%, rgba(255, 107, 53, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 100%, rgba(74, 144, 226, 0.3) 0%, transparent 50%)",
            "radial-gradient(circle at 0% 0%, rgba(0, 212, 255, 0.3) 0%, transparent 50%)"
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 relative"
        >
          <motion.div
            className="absolute -top-4 left-1/2 transform -translate-x-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles className="text-cyan-400/30 w-8 h-8" />
          </motion.div>
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4"
            animate={{ 
              textShadow: [
                "0 0 20px rgba(0, 212, 255, 0.3)",
                "0 0 40px rgba(255, 107, 53, 0.3)",
                "0 0 20px rgba(0, 212, 255, 0.3)"
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
              My Projects
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-400 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Innovative AI solutions that demonstrate my expertise in machine learning, 
            natural language processing, and full-stack development.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotateX: 45 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                scale: 1.02
              }}
              className="group perspective-1000"
            >
              <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-700 hover:border-cyan-500/50 relative">
                {/* Glowing effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(0, 212, 255, 0.1), transparent, rgba(255, 107, 53, 0.1))",
                      "linear-gradient(225deg, rgba(255, 107, 53, 0.1), transparent, rgba(0, 212, 255, 0.1))",
                      "linear-gradient(45deg, rgba(0, 212, 255, 0.1), transparent, rgba(255, 107, 53, 0.1))"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                <div className="relative overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-all duration-500"
                    whileHover={{ scale: 1.15 }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Floating sparkles on hover */}
                  <motion.div
                    className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  >
                    <Sparkles className="text-cyan-400 w-6 h-6" />
                  </motion.div>
                </div>
                
                <div className="p-6 relative">
                  <motion.h3
                    className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {project.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-gray-300 mb-4 line-clamp-3"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {project.description}
                  </motion.p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 bg-gray-700 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/30"
                        whileHover={{ 
                          scale: 1.1,
                          backgroundColor: "rgba(0, 212, 255, 0.1)",
                          boxShadow: "0 0 20px rgba(0, 212, 255, 0.3)"
                        }}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: tagIndex * 0.1 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                  
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full font-semibold relative overflow-hidden group/btn"
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 10px 30px rgba(0, 212, 255, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Button animation background */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "0%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <Github size={18} className="relative z-10" />
                    <span className="relative z-10">View Project</span>
                    <ExternalLink size={16} className="relative z-10" />
                    
                    {/* Ripple effect */}
                    <motion.div
                      className="absolute inset-0 bg-white/20 rounded-full"
                      initial={{ scale: 0, opacity: 1 }}
                      whileHover={{ scale: 4, opacity: 0 }}
                      transition={{ duration: 0.6 }}
                    />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;