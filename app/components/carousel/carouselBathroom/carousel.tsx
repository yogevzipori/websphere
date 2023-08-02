import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const carouselItems = [
  '/bathroom-shower-remodeling-henderson-renovetaion-las-vegas.jpg',
  '/bathroom-shower-contractors-henderson-remodel-las-vegas.jpg',
  '/shower-las-vegas-henderson-new.jpg',
  '/bathroom-shower-remodeling-henderson-renovetaion-las-vegas2.jpg',
  '/bathroom-shower-contractors-henderson-renovetaion-las-vegas2.jpg',
  '/bathroom-remodeling-henderson-renovetaion-las-vegas.jpg',
  '/bathroom-remodeling-henderson-renovetaion-las-vegas.jpeg',


];


const Carousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length);
      }, 5000);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="flex items-center justify-center mt-20">
        <div className="relative w-full" data-carousel="slide">
          {/* Carousel wrapper */}
          <div className="relative h-56 md:h-96 overflow-hidden rounded-lg">
            {carouselItems.map((src, index) => (
              <div
                key={index}
                className={`${
                  index === currentSlide ? 'block' : 'hidden'
                } duration-700 ease-in-out`}
                data-carousel-item
              >
                <Image
                  src={src}
                  layout="fill"
                  objectFit="cover"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          {/* Slider indicators */}
          <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
            {carouselItems.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide
                    ? 'bg-white/30 dark:bg-gray-800/30'
                    : 'bg-transparent'
                }`}
                aria-current={index === currentSlide}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
              ></button>
            ))}
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-1/2 left-2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white/30 dark:bg-gray-800/30 group group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            data-carousel-prev
            onClick={() =>
              setCurrentSlide((prevSlide) =>
                prevSlide === 0 ? carouselItems.length - 1 : prevSlide - 1
              )
            }
          >
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="absolute top-1/2 right-2 z-30 flex items-center justify-center h-10 w-10 rounded-full bg-white/30 dark:bg-gray-800/30 group group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
            data-carousel-next
            onClick={() =>
              setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselItems.length)
            }
          >
            <svg
              className="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>
    );
  };

export default Carousel;
