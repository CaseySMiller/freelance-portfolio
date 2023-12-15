// "use client";

// import { useState } from "react";
import Link from "next/link";
import { Button, Card } from "flowbite-react";

import ThreeJsCarousel from "./components/ThreeJsCarousel/ThreeJsCarousel";
import OpacityCard from "./components/OpacityCard/OpacityCard";

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
      <div className="container grid lg:grid-cols-5 mx-auto pt-3 w-100 gap-y-4 gap-x-2 px-2 pb-8">
        <div className="w-full  grid justify-center lg:col-span-5 lg:pt-16">
          <h1 className="z-10">Home</h1>
        </div>
        <div className="w-full lg:h-full lg:col-span-2">
          <OpacityCard
            className="self-center"
            title="Hi There"
            textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illo corrupti doloremque voluptatibus, adipisci quisquam nisi nam hic deleniti repellat, debitis nulla dolorum voluptate quidem autem. Velit ab explicabo aliquam."
            bgOpacity={0.25}
            textOpacity={0.9}
          />
        </div>
        <div> </div>

        <div className="w-full lg:h-full lg:col-span-2">
          <OpacityCard
            title="Hi There #2"
            textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, illo corrupti doloremque voluptatibus, adipisci quisquam nisi nam hic deleniti repellat, debitis nulla dolorum voluptate quidem autem. Velit ab explicabo aliquam."
            bgOpacity={0.25}
            textOpacity={0.9}
          />
        </div>
      </div>
    </>
  );
}
