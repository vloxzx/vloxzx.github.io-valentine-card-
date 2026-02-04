import React from 'react';
import userPhoto from '../../assets/photo1.jpg';

const PhotoGallery = () => {
  // Static photos array
  const photos = [
    userPhoto,
    userPhoto,
    userPhoto,
    userPhoto,
    userPhoto,
    userPhoto,
  ];

  return (
    <div className="max-w-3xl mx-auto w-full p-6 bg-[#fdfbf7] rounded-lg shadow-2xl border border-[#e0dbd1] relative overflow-hidden max-h-[80vh] overflow-y-auto">
      {/* Decorative border pattern */}
      <div className="absolute inset-0 border-8 border-double border-[#8b1a1a]/10 rounded-lg pointer-events-none" />

      <div className="relative z-10">
        <h2 className="text-3xl md:text-4xl text-center text-[#8b1a1a] mb-6" style={{ fontFamily: 'Great Vibes, cursive' }}>
          Our Cherished Memories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((photo, index) => (
            <div key={index} className="aspect-[3/4] bg-white p-1.5 rounded-lg shadow-sm border border-[#8b1a1a]/20 transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full overflow-hidden rounded border border-gray-100">
                <img
                  src={photo}
                  alt={`Memory ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
