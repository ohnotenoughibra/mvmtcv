'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, X, Search } from 'lucide-react';

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    // Simulate images loading
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === 'ArrowRight') {
        nextImage();
      } else if (e.key === 'ArrowLeft') {
        previousImage();
      } else if (e.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    
    // Prevent scroll when modal is open
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [selectedImage]);

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
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Hero Section with skewed background */}
      <div className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 to-red-800 skew-y-[-3deg] origin-top-left transform-gpu -translate-y-16"></div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white tracking-tight">
              Galerie
            </h1>
            <div className="w-24 h-1 bg-red-400 mb-8"></div>
            <p className="text-xl text-white/90 max-w-2xl leading-relaxed">
              Einblicke in unser Studio und Training
            </p>
          </div>
        </div>
      </div>

      {/* Gallery Grid with enhanced styling */}
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index}
              className="relative aspect-square cursor-pointer rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group"
              onClick={() => setSelectedImage(index)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Search className="w-12 h-12 text-white" />
              </div>
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h3 className="text-white font-medium truncate">{image.alt}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Enhanced Carousel Modal */}
      {selectedImage !== null && (
        <div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedImage(null);
          }}
        >
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white transition-colors z-10 bg-black/20 rounded-full p-2"
            aria-label="Close gallery"
          >
            <X size={28} />
          </button>
          
          <button 
            onClick={previousImage}
            className="absolute left-4 md:left-8 text-white/80 hover:text-white transition-colors z-10 bg-black/20 hover:bg-black/40 rounded-full p-2 transform transition-transform hover:scale-110"
            aria-label="Previous image"
          >
            <ChevronLeft size={32} />
          </button>

          <div className="relative w-full max-w-5xl aspect-video p-4">
            <Image
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              fill
              priority
              className="object-contain"
            />
            <div className="absolute bottom-8 left-0 right-0 text-center">
              <p className="text-white bg-black/50 inline-block py-2 px-4 rounded-lg backdrop-blur-sm">
                {selectedImage + 1} / {images.length}
              </p>
            </div>
          </div>

          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 text-white/80 hover:text-white transition-colors z-10 bg-black/20 hover:bg-black/40 rounded-full p-2 transform transition-transform hover:scale-110"
            aria-label="Next image"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </main>
  );
}