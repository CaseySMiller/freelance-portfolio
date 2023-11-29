// "use client";

// import { useState } from "react";
import Link from "next/link";
import { Button } from "flowbite-react";

import ThreeJsCarousel from "./components/ThreeJsCarousel/ThreeJsCarousel";

export default function Home() {
  const imgArr = [
    "/assets/images/carouselImages/cyberpunk-city-7415576_1280.jpg",
    "/assets/images/carouselImages/dreaming-7415565_1280.jpg",
    "/assets/images/carouselImages/northern-7415567_1280.jpg",
    "/assets/images/carouselImages/studio-ghibli-7415572_1280.jpg",
    "/assets/images/carouselImages/wallpaper-7415568_1280.jpg",
    "/assets/images/carouselImages/wallpaper-7415571_1280.jpg",
  ];

  return (
    <>
      <div className="carousel-container">
        <ThreeJsCarousel imgArr={imgArr} />
      </div>
      <h1>Home</h1>
      <Link href="/movies">
        <Button outline gradientMonochrome="purple">
          Movies
        </Button>
      </Link>
    </>
  );
}
