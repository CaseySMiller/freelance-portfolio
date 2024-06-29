// import UnderConstruction from "../components/UnderConstruction/UnderConstruction"
import Image from "next/image"
import OpacityCard from "../components/OpacityCard/OpacityCard";
import ProjectCardStack from "../components/ProjectCardStack/ProjectCardStack";
import { projectData } from "../lib/projectData";


export default function Projects() {

  // function to fill stackData with 5 projectData objects even if it has to repeat
  const fillStackData = () => {
    const stackOutput = [];

    let stackTracker = 0;
    for (let i = 0; i < 5; i++) {
      if (i - stackTracker < projectData.length) {
        stackOutput.push(projectData[i - stackTracker])        
      } else {
        stackTracker += projectData.length;
        stackOutput.push(projectData[i - stackTracker])
      }
    }
    return stackOutput;
  };

  const stackData = fillStackData();  
  
  return (
    <div className="container mx-auto my-auto h-full w-2/3 ">
      <ProjectCardStack stackData={stackData} />
    </div>
  );
}
