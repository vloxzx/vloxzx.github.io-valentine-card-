import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';

// Import the user's photo
import userPhoto from '../../assets/photo1.jpg';

const SurpriseGifts = ({ onComplete }: { onComplete: () => void }) => {
  const [opened, setOpened] = useState<[false, false, false]>([false, false, false]);

  const handleOpen = (index: number) => {
    const newOpened = [...opened];
    newOpened[index] = true;
    setOpened(newOpened as [false, false, false]);

    // If all opened, maybe trigger something?
    if (newOpened.every(o => o)) {
      setTimeout(onComplete, 2000);
    }
  };

  const gifts = [
    { id: 1, photo: userPhoto },
    { id: 2, photo: userPhoto }, // Reusing for demo
    { id: 3, photo: userPhoto }, // Reusing for demo
  ];

  return (
    <div className="w-full max-w-3xl mx-auto text-center p-6 bg-[#fdfbf7] rounded-lg shadow-2xl border border-[#e0dbd1]">
      <h2 className="text-4xl text-[#8b1a1a] mb-4" style={{ fontFamily: 'Great Vibes, cursive' }}>
        Surprise gifts for you
      </h2>
      <p className="text-[#8b1a1a] font-serif italic mb-6 text-base">
        I hope this brings a smile to your face and reminds you how special you are to me
      </p>

      <div className="grid grid-cols-3 justify-center gap-4 md-gap-6">
        {gifts.map((gift, index) => (
          <div key={gift.id} className="relative w-32 md-w-40 aspect-[3/4] cursor-pointer" onClick={() => handleOpen(index)}>
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-500 rounded-xl shadow-2xl z-10 border border-[#8b1a1a]"
              initial={{ opacity: 1 }}
              animate={{ opacity: opened[index] ? 0 : 1 }}
              whileHover={opened[index] ? {} : { scale: 1.0, opacity: 0.9 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center justify-center h-full">
                <span className="text-white font-serif text-sm font-medium tracking-wide">Tap to Open</span>
              </div>
            </motion.div>

            {/* Gift Behind */}
            <div className="w-full h-full overflow-hidden rounded-lg relative">
              <img
                src={gift.photo}
                alt="Surprise Memory"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 h-6">
        {opened.every(o => o) && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-[#8b1a1a] font-serif text-lg"
          >
            All surprises revealed! Proceeding to gallery...
          </motion.p>
        )}
      </div>
    </div>
  );
};

export default SurpriseGifts;
