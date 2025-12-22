import React from 'react';
import { motion } from 'framer-motion';
import { CAT_IMAGE_URL } from '../constants';
import { Sparkles } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section className="py-32 px-4 bg-stone-900 relative overflow-hidden flex items-center justify-center min-h-[80vh]">
      {/* Ambient Lighting Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-4xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12"
        >
          <Sparkles className="w-8 h-8 text-amber-300 mx-auto mb-4 opacity-80" />
          <h2 className="text-4xl md:text-5xl font-serif text-amber-100 mb-4 tracking-wide">
            Just for You
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500 to-transparent mx-auto opacity-50" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
          whileInView={{ opacity: 1, scale: 1, rotateX: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
          className="relative inline-block"
        >
          {/* Gold Frame Effect */}
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-amber-600 via-yellow-200 to-amber-700 blur-[1px]" />
          <div className="absolute -inset-[2px] rounded-[2rem] bg-gradient-to-bl from-amber-900 via-stone-900 to-amber-800" />
          
          <div className="relative bg-stone-950 p-3 rounded-[2rem] shadow-2xl">
             <div className="overflow-hidden rounded-[1.5rem] aspect-[4/5] md:aspect-[3/4] max-w-md w-full">
                <img 
                  src={CAT_IMAGE_URL} 
                  alt="A cute cat" 
                  className="w-full h-full object-cover transform transition-transform duration-[1.5s] hover:scale-105"
                />
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;