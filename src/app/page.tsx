// "use client";

import ThreeJsCarousel from "./components/ThreeJsCarousel/ThreeJsCarousel";
import OpacityCard from "./components/OpacityCard/OpacityCard";

const cardText1 = 'codeKase Ltd. is a freelance web development company based in the USA and solely owned by Casey Miller. We specialise in building bespoke websites and web applications for small to medium sized businesses. We use the most modern technologies such as Next.js to develop lightning fast web applications that are SEO friendly and responsive. We also use the latest design trends to make sure your website looks great on any device.';

const cardText2 = 'Whatever your needs; from desktop to mobile, full-stack to graphic design, we have you covered. We can build your website from the ground up or we can work with your existing website to add new features or fix bugs. If you want flashy that is what you will get. If you want simple and clean we can provide. We work with you to make sure you get exactly what you want.';

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
      <div className="container h-full grid lg:grid-cols-5 mx-auto pt-3 w-100 gap-y-4 lg:gap-y-20 gap-x-2 px-2 pb-8">
        <div className="line w-full grid justify-center lg:col-span-5 lg:py-16">
          <h1 className=" flipY z-10 text-4xl md:text-6xl">Welcome to codeKase Ltd.</h1>
        </div>
        <div className="w-full lg:h-full lg:col-span-2">
          <OpacityCard
            className="text-xl"
            title="Who We Are"
            titleClass="text-center"
            textContent={cardText1}
            bgOpacity={0.25}
            textOpacity={0.9}
          />
        </div>
        <div> </div>

        <div className="w-full lg:h-full lg:col-span-2">
          <OpacityCard
            className="text-xl"
            title="What We Do"
            titleClass="text-center"
            textContent={cardText2}
            bgOpacity={0.25}
            textOpacity={0.9}
          />
        </div>
      </div>
    </>
  );
}
