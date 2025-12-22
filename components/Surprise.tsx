import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { motion, AnimatePresence } from 'framer-motion';
import { Gift, X, Star, Heart } from 'lucide-react';
import { BIRTHDAY_PERSON } from '../constants';

const Surprise: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const triggerSurprise = () => {
    // Gold and White confetti
    const duration = 3000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 5,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#FFD700', '#F0E68C', '#FFFFFF']
      });
      confetti({
        particleCount: 5,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#FFD700', '#F0E68C', '#FFFFFF']
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
    setShowModal(true);
  };

  return (
    <section className="py-40 px-4 bg-stone-100 flex flex-col items-center justify-center text-center relative overflow-hidden">
      {/* Luxury Pattern Background */}
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#44403c 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>

      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-xl mx-auto relative z-10"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-stone-800 mb-12">One Final Gift</h2>
        
        {/* Premium Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          onClick={triggerSurprise}
          className="group relative px-10 py-5 bg-stone-900 text-amber-50 rounded-full text-xl font-serif tracking-wide shadow-2xl overflow-hidden"
        >
          <span className="relative z-10 flex items-center gap-3">
            <Gift className="w-6 h-6 text-amber-400 group-hover:rotate-12 transition-transform" />
            Click to Open
          </span>
          
          {/* Shine Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
        </motion.button>
      </motion.div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/80 backdrop-blur-sm"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ type: "spring", duration: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#fafaf9] rounded-2xl p-8 md:p-12 max-w-2xl w-full relative shadow-2xl border border-stone-200 overflow-y-auto max-h-[90vh] scrollbar-hide"
            >
              <button 
                onClick={() => setShowModal(false)}
                className="absolute top-6 right-6 p-2 text-stone-400 hover:text-stone-800 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-left space-y-10">
                 <div className="text-center">
                    <Star className="w-10 h-10 text-amber-400 mx-auto mb-4 fill-amber-400" />
                    <h3 className="text-3xl md:text-4xl font-serif text-stone-800 mb-2">
                      Happy Birthday, {BIRTHDAY_PERSON}
                    </h3>
                    <div className="w-16 h-[2px] bg-amber-400 mx-auto mt-4" />
                 </div>
                 
                 {/* Note Content */}
                 <div className="space-y-8 font-serif text-stone-600 leading-loose">
                    <div>
                      <h4 className="flex items-center gap-2 text-xl text-stone-900 mb-4 font-bold">
                        <span>🌸</span> Birthday Note
                      </h4>
                      <p className="text-lg">
                        Today feels a little special because I got to meet you online on your birthday. Even through a screen, your kindness and positive energy come through so easily. You have a calm, genuine way of talking that instantly makes conversations feel comfortable.
                      </p>
                      <p className="text-lg mt-4">
                        On your birthday, I wish you happiness, confidence, and a year filled with new opportunities, meaningful moments, and reasons to smile. May this year bring you closer to your goals and surround you with good people and good energy.
                      </p>
                    </div>

                    <div className="bg-stone-100 p-8 rounded-xl border border-stone-200">
                      <h4 className="flex items-center gap-2 text-xl text-stone-900 mb-4 font-bold">
                        <span>🤍</span> A Promise for You
                      </h4>
                      <p className="text-lg italic text-stone-500">
                        I promise to always be respectful, honest, and supportive in every conversation we share. I promise to keep things genuine and to wish you nothing but the best—today and always.
                      </p>
                    </div>
                 </div>

                 <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setShowModal(false)}
                    className="w-full py-4 bg-stone-900 text-amber-50 rounded-lg font-serif text-lg tracking-wider hover:bg-stone-800 transition-colors"
                 >
                   Thank You
                 </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Surprise;