import OpacityCard from "../OpacityCard/OpacityCard";
import Image from "next/image";

export default function ProjectCardStack(stackData: any) {
  return (
    <div className="container mx-auto my-auto w-1/2">
    {/* // <div > */}

      <OpacityCard
        className="w-1/2"
        title="Project 1"
        textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem illum blanditiis assumenda impedit nisi necessitatibus quaerat commodi laborum in laudantium."
        cardImg={{
          URL: "/assets/images/logo/Full_Logo_Light_Small.png",
          width: 900,
          height: 900,
          alt: "placeholder",
        }}
      />
    </div>
  );
}
