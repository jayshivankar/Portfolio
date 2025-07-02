import React from 'react';
import { motion } from 'framer-motion';
import { Code, Cpu, Database, Zap, Brain, GitBranch, Sparkles, Star } from 'lucide-react';

const FloatingElements: React.FC = () => {
  const elements = [
    { Icon: Code, delay: 0, x: '10%', y: '20%', color: 'text-cyan-400' },
    { Icon: Cpu, delay: 1, x: '80%', y: '15%', color: 'text-orange-400' },
    { Icon: Database, delay: 2, x: '15%', y: '70%', color: 'text-blue-400' },
    { Icon: Zap, delay: 0.5, x: '75%', y: '60%', color: 'text-yellow-400' },
    { Icon: Brain, delay: 1.5, x: '90%', y: '40%', color: 'text-purple-400' },
    { Icon: GitBranch, delay: 2.5, x: '5%', y: '50%', color: 'text-green-400' },
  ];

  const stars = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 2 + Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Tech Icons */}
      {elements.map(({ Icon, delay, x, y, color }, index) => (
        <motion.div
          key={index}
          className={`absolute ${color}/30`}
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0, rotate: 0 }}
          animate={{ 
            opacity: [0, 1, 0.7, 0],
            scale: [0, 1.2, 1, 0],
            rotate: [0, 180, 360],
            y: [0, -50, -100],
          }}
          transition={{
            duration: 6,
            delay,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut"
          }}
        >
          <motion.div
            animate={{ 
              boxShadow: [
                `0 0 20px ${color.includes('cyan') ? 'rgba(0, 212, 255, 0.3)' : 
                           color.includes('orange') ? 'rgba(255, 107, 53, 0.3)' :
                           color.includes('blue') ? 'rgba(74, 144, 226, 0.3)' :
                           color.includes('yellow') ? 'rgba(255, 193, 7, 0.3)' :
                           color.includes('purple') ? 'rgba(147, 51, 234, 0.3)' :
                           'rgba(34, 197, 94, 0.3)'}`,
                `0 0 40px ${color.includes('cyan') ? 'rgba(0, 212, 255, 0.6)' : 
                           color.includes('orange') ? 'rgba(255, 107, 53, 0.6)' :
                           color.includes('blue') ? 'rgba(74, 144, 226, 0.6)' :
                           color.includes('yellow') ? 'rgba(255, 193, 7, 0.6)' :
                           color.includes('purple') ? 'rgba(147, 51, 234, 0.6)' :
                           'rgba(34, 197, 94, 0.6)'}`,
                `0 0 20px ${color.includes('cyan') ? 'rgba(0, 212, 255, 0.3)' : 
                           color.includes('orange') ? 'rgba(255, 107, 53, 0.3)' :
                           color.includes('blue') ? 'rgba(74, 144, 226, 0.3)' :
                           color.includes('yellow') ? 'rgba(255, 193, 7, 0.3)' :
                           color.includes('purple') ? 'rgba(147, 51, 234, 0.3)' :
                           'rgba(34, 197, 94, 0.3)'}`
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="rounded-full p-2"
          >
            <Icon size={32} />
          </motion.div>
        </motion.div>
      ))}
      
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute"
          style={{ left: `${star.x}%`, top: `${star.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 1 + Math.random() * 2,
          }}
        >
          <Star className="text-cyan-400/40 w-2 h-2" />
        </motion.div>
      ))}

      {/* Floating particles with trails */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `linear-gradient(45deg, 
              ${Math.random() > 0.5 ? '#00D4FF' : Math.random() > 0.5 ? '#FF6B35' : '#4A90E2'}, 
              transparent)`
          }}
          animate={{
            y: [0, -200, -400],
            x: [0, Math.random() * 100 - 50],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 3,
            delay: Math.random() * 3,
            repeat: Infinity,
            ease: "easeOut"
          }}
        />
      ))}

      {/* Pulsing orbs */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            width: `${20 + Math.random() * 40}px`,
            height: `${20 + Math.random() * 40}px`,
            background: `radial-gradient(circle, 
              ${Math.random() > 0.33 ? 'rgba(0, 212, 255, 0.1)' : 
                Math.random() > 0.5 ? 'rgba(255, 107, 53, 0.1)' : 'rgba(74, 144, 226, 0.1)'}, 
              transparent)`
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;