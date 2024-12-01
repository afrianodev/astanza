import React from 'react';

function Hero() {
  return (
    <div className="relative">
      <img
        src="https://i.imgur.com/aXiD9Do.jpg"
        alt="Fotografía de taller de arte con pinceles"
        className="w-full h-[35vh] object-cover"
      />
      <h2 className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold bg-black/50">
        Conservamos la belleza de lo invaluable.
      </h2>
    </div>
  );
}

export default Hero;