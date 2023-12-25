import { useState, useEffect } from "react";
import Image from "next/image";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Change image every 5 seconds (adjust as needed)

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      <Image
        src={images[currentImageIndex]}
        alt="Carousel Image"
        width={1000}
        height={1000}
        className="rounded-lg"
      />
    </div>
  );
};

export default Carousel;

