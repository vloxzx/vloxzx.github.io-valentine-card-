import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, MailOpen } from 'lucide-react';

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope: React.FC<EnvelopeProps> = ({ onOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(onOpen, 1000);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen relative z-10">
      <motion.div
        className="relative w-80 h-60 bg-red-100 shadow-2xl rounded-lg cursor-pointer flex items-center justify-center"
        onClick={handleOpen}
        whileHover={{ scale: 1.05 }}
        animate={isOpen ? { scale: 1.5, opacity: 0 } : {}}
      >
        <div className="absolute inset-0 border-4 border-red-300 rounded-lg" />

        {/* Flap */}
        <motion.div
          className="absolute top-0 left-0 w-full h-1/2 bg-red-200 origin-top z-20"
          style={{ clipPath: 'polygon(0 0, 50% 100%, 100% 0)' }}
          animate={isOpen ? { rotateX: 180 } : {}}
        />

        {/* Wax Seal */}
        <motion.div
          className="absolute z-30"
          animate={isOpen ? { opacity: 0 } : {}}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Wax_seal.svg/800px-Wax_seal.svg.png"
            alt="Wax Seal"
            className="w-24 h-24 drop-shadow-lg"
          />
        </motion.div>
      </motion.div>

      <div className="text-red-800 font-serif text-xl z-10 mt-10">
        For You
      </div>

      {!isOpen && (
        <motion.p
          className="mt-8 text-white text-xl font-serif italic drop-shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          Click the seal to open your surprise...
        </motion.p>
      )}
    </div>
  );
};

export default Envelope;
