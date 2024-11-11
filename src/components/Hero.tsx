import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            亀川プロジェクト
          </h1>
          <p className="text-xl md:text-2xl text-white">
            Kamegawa Project
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;