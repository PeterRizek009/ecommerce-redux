import { useState, useEffect } from "react";

const HeroSlider = () => {
  const images = [
    "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg",
    "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg"
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full h-[350px] rounded-xl overflow-hidden relative shadow-md">

      <img
        src={images[index]}
        className="w-full h-full object-cover transition-all duration-700"
      />

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full cursor-pointer transition 
              ${i === index ? "bg-red-500" : "bg-gray-300"}`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>

    </div>
  );
};

export default HeroSlider;
