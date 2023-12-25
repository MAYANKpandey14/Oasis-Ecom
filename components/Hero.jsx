"use client";
import Link from "next/link";
import Image from "next/image";
import heroImage from "@/public/hehe.jpg";
import { CartProvider } from "@/lib/cartContext";
import { useState, useEffect } from "react";

  export default function Hero() {
    const images = [
      "/hehe.jpg",
      "/hehe1.jpg",
      "/hehe5.jpg",
      "/hehe2.jpg",
      "/hehe6.jpg",
      "/hehe4.jpg",
      "/hehe7.jpg",
      "/hehe3.jpg", // Add more image paths as needed
    ];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
      }, 1000); // Change image every 1 seconds (adjust as needed)
  
      return () => clearInterval(interval);
    }, [images.length]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-[85px]">
      <section className="">
        <div className="grid justify-between gap-2 max-w-screen-xl px-8 py-16 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          {/* px padding left and right */}
          {/* py padding top and botton */}

          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-9 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
              Best Fashion Collection
            </h1>
            <p className="max-w-5xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
              Quisquemos sodales suscipit tortor ditaemcos condimentum de cosmo
              lacus meleifend menean diverra loremous.
            </p>

            <div>
              <Link
                href="https://manishmalhotra.in/collection/fl-bridal-couture-2023-24"
                target="_blank"
              >
                <button
                  type="button"
                  class="mt-1.5 inline-block font-bold bg-black px-6 py-3 text-md tracking-wide text-white rounded-md shadow-md hover:shadow-xl ease-in-out duration-500"
                  >
                  Explore Shop Collection
                </button>
              </Link>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              // src={heroImage}
              src={images[currentImageIndex]}
              alt="Hero Image"
              width={1920}
              height={1080}
              className="rounded-lg ml-2"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
