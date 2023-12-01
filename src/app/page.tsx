// "use client";

// import { useState } from "react";
import Link from "next/link";
import { Button, Card } from "flowbite-react";

import ThreeJsCarousel from "./components/ThreeJsCarousel/ThreeJsCarousel";

export default function Home() {
  const imgArr = [
    "/assets/images/carouselImages/cyberpunk-city-7415576_1280.jpg",
    "/assets/images/carouselImages/dreaming-7415565_1280.jpg",
    "/assets/images/carouselImages/northern-7415567_1280.jpg",
    "/assets/images/carouselImages/studio-ghibli-7415572_1280.jpg",
    // "/assets/images/carouselImages/wallpaper-7415568_1280.jpg",
    // "/assets/images/carouselImages/wallpaper-7415571_1280.jpg",
    "/assets/images/carouselImages/metaAF.png",
    "/assets/images/carouselImages/devMind.png",
  ];

  return (
    <>
      <div className="carousel-container">
        <ThreeJsCarousel imgArr={imgArr} />
      </div>
      <div className="container columns-3 mx-auto pt-3 w-100">
        <div className="w-full h-full">
          <Card className="w-full relative opacity-25">
            <p className="opacity-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illo corrupti doloremque voluptatibus, adipisci quisquam nisi nam hic deleniti repellat, debitis nulla dolorum voluptate quidem autem. Velit ab explicabo aliquam.
            </p>
          </Card>
        </div>
        <div className="w-full h-full">
          <h1 >Home</h1>
        </div>
        <div className="w-full h-full">
          <Card className="w-full relative">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illo corrupti doloremque voluptatibus, adipisci quisquam nisi nam hic deleniti repellat, debitis nulla dolorum voluptate quidem autem. Velit ab explicabo aliquam.
            </p>
          </Card>
        </div>
      </div>
    </>
  );
}
