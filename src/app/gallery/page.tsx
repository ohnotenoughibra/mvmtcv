// src/app/gallery/page.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: '/images/gallery/gym-1.jpg',
      alt: 'Movement Cave Training Area'
    },
    {
      src: '/images/gallery/gym-2.jpg',
      alt: 'Personal Training Session'
    },
    {
      src: '/images/gallery/gym-3.jpg',
      alt: 'Group Training'
    },
    {
      src: '/images/gallery/gym-4.jpg',
      alt: 'Equipment'
    },
    {
      src: '/images/gallery/gym-5.jpg',
      alt: 'Training Session'
    },
    {
      src: '/images/gallery/gym-6.jpg',
      alt: 'Workout Area'
    }
  ];

  const nextImage = () => {
    setSelectedImage(current => 
      current === null ? 0 : current === images.length - 1 ? 0 : current + 1
    );
  };

  const previousImage = () => {
    setSelectedImage(current => 
      current === null ? 0 : current === 0 ? images.length - 1 : current - 1
    );
  };

  return (
    <main className="min-h-screen pt-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-black to-red-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Galerie
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl">
            Einblicke in unser Studio und Training
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-square cursor-pointer group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover rounded-lg hover:opacity-90 transition-opacity"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity rounded-lg" />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
          >
            <X size={32} />
          </button>
          
          <button 
            onClick={previousImage}
            className="absolute left-4 text-white hover:text-gray-300"
          >
            <ChevronLeft size={48} />
          </button>

          <div className="relative w-full max-w-5xl aspect-video">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          <button 
            onClick={nextImage}
            className="absolute right-4 text-white hover:text-gray-300"
          >
            <ChevronRight size={48} />
          </button>
        </div>
      )}
    </main>
  );
}