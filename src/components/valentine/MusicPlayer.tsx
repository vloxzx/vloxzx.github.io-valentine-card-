import React from 'react';
import { ChevronRight } from 'lucide-react';

interface MusicPlayerProps {
  onNext: () => void;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ onNext }) => {
  // TODO: Replace [Rachel] Canon in D Video ID found
  const videoId = 'P1k_1bC1IPY';

  return (
    <div className="relative max-w-2xl w-full mx-auto p-8 bg-[#fdfbf7] rounded-lg shadow-2xl text-center border-[#e0dbd1]">
      <h2 className="text-5xl text-[#8b1a1a] mb-4" style={{ fontFamily: 'Great Vibes, cursive' }}>
        Song for my Valentine
      </h2>
      <p className="text-[#8b1a1a] font-serif italic mb-6 text-lg">
        The song I think of when I think of you.
      </p>

      <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-inner border-4 border-[#8b1a1a] mb-8">
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Romantic Music"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      {onNext && (
        <button
          onClick={onNext}
          className="bg-[#8b1a1a] text-white p-3 rounded-full shadow-lg hover:bg-[#a02020] transition-transform hover:scale-110"
        >
          <ChevronRight size={24} />
        </button>
      )}
    </div>
  );
};

export default MusicPlayer;
