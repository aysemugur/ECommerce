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
    <div className="flex justify-center items-center relative w-full h-[750px] md:h-[715px] overflow-hidden">
      {/* Hero Background */}
      <div className="absolute inset-0 bg-[#23856D] ">
        <div className="relative h-full">
          {/* Background Image */}
          <img
            src={slides[currentSlide].image}
            alt="Hero"
            className="w-full h-full object-cover object-center "
          />

          {/* Content Overlay */}
          <div className="absolute inset-0  flex items-center justify-center md:text-left pl-16 ">
            <div className="container  md:px-8 md:pt-[90px] lg:pl-12  ">
              <div className="max-w-2xl text-white flex flex-col ">
                {/* Season Tag */}
                <span className="block mb-5 text-sm font-bold tracking-widest md: mx-0 text-left ">
                  {slides[currentSlide].season}
                </span>

                {/* Main Title */}
                <h1 className="text-4xl pr-[300px] font-semibold mb-5 md:mt-5 text-left mx-0">
                  {slides[currentSlide].title}
                </h1>

                {/* Description */}
                <p className="mb-6 text-lg pr-[50px] opacity-90 mx-0  md:pr-[350px] md:text-xlg ">
                  {slides[currentSlide].description}
                </p>

                {/* CTA Button */}
                <button className="block bg-[#2DC071] w-[50%] justify-center hover:bg-[#2DC071]/90 text-white  py-3 rounded-md  font-semibold transition-colors md:text-center mx-0 px-8 md:w-[25%]">
                  SHOP NOW
                </button>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/0 hover:bg-white/30 p-1 rounded-full transition-colors"
          >
            <ChevronLeft className="w-10 h-10 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/0 hover:bg-white/30 p-1 rounded-full transition-colors"
          >
            <ChevronRight className="w-10 h-10 text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
