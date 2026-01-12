"use client";

import { useState } from "react";
import Image from "next/image";

const images = ["/sliderImg1.jpeg","/sliderImg2.jpeg","/sliderImg3.jpeg"];

const Carosal = () => {
  const [active, setActive] = useState(0);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Image
        src={images[active]}
        alt="slider"
        width={500}
        height={800}
        className="object-cover transition-all duration-500 rounded-r-3xl"
        priority
      />

      <div className="absolute bottom-20 left-1/3 -translate-x-1/2 flex gap-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`h-2 rounded-full transition-all duration-300
              ${active === index ? "w-8 bg-gray-900" : "w-4 bg-gray-700"}
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default Carosal;