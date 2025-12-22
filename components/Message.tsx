import React from 'react';
import { motion } from 'framer-motion';
import { WISHES } from '../constants';
import { Quote, Sparkles } from 'lucide-react';

const Message: React.FC = () => {
  return (
    <section className="py-32 px-4 relative overflow-hidden bg-stone-950">
      {/* Abstract Gold Dust Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,53,15,0.1),transparent_70%)]" />
        <div className="absolute top-[20%] right-[10%] w-72 h-72 bg-amber-600/10 rounded-full blur-[80px]" />
        <div className="absolute bottom-[20%] left-[10%] w-96 h-96 bg-yellow-600/5 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center mb-6"
          >
            <Sparkles className="text-amber-300/80 w-10 h-10 animate-pulse" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-100 mb-6 drop-shadow-sm"
          >
            Warmest Wishes
          </motion.h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {WISHES.map((wish, index) => (
            <motion.div
              key={wish.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-b from-amber-500/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 blur-sm" />
              
              <div className="relative h-full bg-stone-900/50 backdrop-blur-sm border border-white/5 p-8 md:p-10 rounded-2xl shadow-xl hover:shadow-2xl hover:bg-stone-900/80 transition-all duration-500 flex flex-col items-center text-center">
                <Quote className="text-amber-500/20 w-12 h-12 mb-6 rotate-180" />
                
                <p className="text-xl md:text-2xl font-serif text-stone-200 italic mb-8 leading-relaxed font-light">
                  "{wish.message}"
                </p>
                
                <div className="mt-auto pt-6 border-t border-white/5 w-full">
                  <span className="text-amber-400/90 text-sm uppercase tracking-[0.2em] font-medium">
                    {wish.author}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Message;