import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Heart, Home } from 'lucide-react';
import Envelope from '../components/valentine/Envelope';
import PhotoGallery from '../components/valentine/PhotoGallery';
import SurpriseGifts from '../components/valentine/SurpriseGifts';
import MusicPlayer from '../components/valentine/MusicPlayer';

const ValentinePage = () => {
  const [step, setStep] = useState(0); // 0: Envelope, 1: Letter, 2: Gifts, 3: Music, 4: Photos

  const nextStep = () => setStep(prev => prev + 1);

  const variants = {
    enter: { x: 300, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -1000, opacity: 0 },
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-pink-200 via-red-200 to-purple-200 relative flex flex-col items-center justify-center">
      <div className="absolute inset-0 bg-pink-900/10" />

      <div className="relative z-10 w-full max-w-6xl p-4 min-h-screen flex flex-col justify-center">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="envelope"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex justify-center items-center min-h-screen"
            >
              <Envelope onOpen={nextStep} />
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="letter"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full py-8"
            >
              <div className="max-w-2xl mx-auto p-8 bg-[#fdfbf7] rounded-lg shadow-2xl border border-[#e0dbd1]/20" style={{ fontFamily: 'Great Vibes, cursive' }}>
                <h2 className="text-4xl md:text-5xl text-[#8b1a1a] mb-4 text-center border-b border-[#8b1a1a]/20 pb-4">
                  My Dearest Valentine
                </h2>

                <div className="text-xl md:text-2xl font-serif text-[#8b1a1a] leading-relaxed text-center space-y-4">
                  <p>
                    "Every moment with you is a treasure I hold dear. You bring so much joy, laughter, and light into my life."
                  </p>
                  <p>
                    I wanted to create this special digital keepsake just for you, to show you a fraction of how much you mean to me.
                  </p>
                </div>

                <div className="text-right mt-8 font-serif text-[#8b1a1a] font-medium text-lg">
                  ~ Forever Yours
                </div>

                <div className="mt-8 flex justify-center">
                  <button
                    onClick={nextStep}
                    className="bg-[#8b1a1a] hover:bg-[#a02020] text-white px-8 py-3 rounded-full flex items-center gap-2 transition-all hover:scale-105 shadow-lg"
                  >
                    Next Surprise <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="gifts"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full py-8"
            >
              <SurpriseGifts onComplete={nextStep} />

              <div className="mt-8 flex justify-center">
                <button
                  onClick={nextStep}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/50 px-6 py-3 rounded-full flex items-center gap-2 transition-all hover:scale-105"
                >
                  Skip to Music <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="music"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full py-8 flex flex-col justify-center"
            >
              <MusicPlayer onNext={nextStep} />
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="photos"
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="w-full py-8 flex flex-col justify-center"
            >
              <PhotoGallery />

              <div className="text-xl text-center font-serif italic drop-shadow-md flex items-center justify-center gap-2 mt-6">
                <button
                  onClick={() => {}}
                  className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/50 px-6 py-2 rounded-full flex items-center gap-2 mx-auto transition-colors"
                >
                  Happy Valentine's Day! <Heart className="fill-red-500 text-red-500" />
                </button>
              </div>

              <button
                onClick={() => setStep(0)}
                className="mt-4 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/50 px-4 py-2 rounded-full flex items-center gap-2 mx-auto transition-all hover:scale-105"
              >
                <Home size={16} /> Start Over
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ValentinePage;
