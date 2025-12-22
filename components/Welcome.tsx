import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useMotionValue } from 'framer-motion';
import { BIRTHDAY_PERSON, HERO_IMAGE } from '../constants';
import { ChevronDown, Star } from 'lucide-react';

const Welcome: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Mouse move 3D effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left) / width - 0.5);
    mouseY.set((clientY - top) / height - 0.5);
  };

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10]);

  return (
    <div 
      ref={ref} 
      className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center px-4 perspective-1000 bg-stone-900"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image with Dark Luxury Overlay */}
      <motion.div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: `url(${HERO_IMAGE})`,
          y: backgroundY,
          scale: 1.1
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/40 via-stone-900/20 to-stone-900" />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]" />
      </motion.div>

      {/* Floating 3D Content */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto flex flex-col items-center justify-center perspective-1000"
        style={{ y: textY, opacity }}
      >
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          <motion.div 
            className="text-amber-200/90 text-sm md:text-lg font-serif tracking-[0.4em] uppercase mb-8 flex items-center gap-4 justify-center"
            style={{ transform: "translateZ(30px)" }}
          >
            <div className="h-[1px] w-12 bg-amber-200/50" />
            <span>A Special Day For</span>
            <div className="h-[1px] w-12 bg-amber-200/50" />
          </motion.div>

          {/* 3D Text Layers - Gold Effect */}
          <div className="relative mb-6">
            <h1 className="text-7xl md:text-[9rem] font-serif font-bold text-transparent bg-clip-text bg-gradient-to-b from-amber-100 via-yellow-200 to-amber-500 drop-shadow-2xl z-10 relative leading-tight">
               Happy Birthday
            </h1>
          </div>

          <motion.div 
            className="mt-4"
            style={{ transform: "translateZ(60px)" }}
          >
             <span className="text-6xl md:text-8xl font-script text-white drop-shadow-[0_0_15px_rgba(251,191,36,0.3)]">
                {BIRTHDAY_PERSON}
             </span>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="absolute bottom-12 z-10 text-amber-100/70 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
        onClick={() => {
          window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
        }}
      >
        <ChevronDown size={32} strokeWidth={1} />
      </motion.div>
    </div>
  );
};

export default Welcome;