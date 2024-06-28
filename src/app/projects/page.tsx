import UnderConstruction from "../components/UnderConstruction/UnderConstruction"
import OpacityCard from "../components/OpacityCard/OpacityCard"
import Image from "next/image"

export default function Projects() {
    return (
        <div className="container mx-auto my-auto w-1/2">
            {/* <h1>Projects</h1> */}

            <OpacityCard 
            className="w-1/2"
            title="Project 1"
            textContent="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem illum blanditiis assumenda impedit nisi necessitatibus quaerat commodi laborum in laudantium."
            imgOpacity={1}
            cardImg={{
                URL: "/assets/images/logo/Full_Logo_Light_Small.png",
                height: 480,
                width: 640,
                alt: "placeholder"
            }}
            />
        </div>
    )
}