import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import heroPic from "../assets/images/hero-pic.png";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      season: "SUMMER 2020",
      title: "NEW COLLECTION",
      description:
        "We know how large objects will act, but things on a small scale.",
      image: heroPic,
    },
    // Diğer slide'lar buraya eklenebilir
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex justify-center items-center relative w-full h-[750px] md:h-[600px] overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-[#23856D] ">
        <div className="relative h-full">
          {/* Background Image */}
          <img
            src={slides[currentSlide].image}
            alt="Hero"
            className="w-full h-full object-cover object-center"
          />

          {/* Content Overlay */}
          <div className="absolute inset-0 bg-[#23856D]/40 flex items-center">
            <div className="container mx-auto px-20 flex flex-col justify-center items-center md:px-8 ">
              <div className="max-w-xl text-white flex flex-col justify-center items-center">
                {/* Season Tag */}
                <span className="inline-block mb-4 text-sm font-bold tracking-wider">
                  {slides[currentSlide].season}
                </span>

                {/* Main Title */}
                <h1 className="text-4xl md:text-5xl font-bold mb-4 mx-auto">
                  {slides[currentSlide].title}
                </h1>

                {/* Description */}
                <p className="mb-6 text-lg opacity-90">
                  {slides[currentSlide].description}
                </p>

                {/* CTA Button */}
                <button className="bg-[#2DC071] hover:bg-[#2DC071]/90 text-white px-8 py-3 rounded-md font-bold transition-colors">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 p-2 rounded-full transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Slide Indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
