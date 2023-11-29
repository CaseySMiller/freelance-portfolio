'use client'

import { Canvas } from "@react-three/fiber";

import Cylinder3d from "./Cylinder3d";

// pass an imgArr prop to the Cylinder3d component
// imgArr should be an array of 3, 6 or 12 URL strings for images
// images should be 16:9 aspect ratio (1280x720)
const ThreeJsCarousel = ({ imgArr }) => {
  console.log('3jscar');
  return (
    <Canvas camera={{ fov: 75, position: [0, 4, 40] }}>
      {/* <axesHelper args={[30, 30, 30]} /> */}
      <pointLight position={[5, 4.5, 35]} intensity={250} />
      <directionalLight position={[15, 8, 30]} intensity={0.8} />
      {/* <ambientLight intensity={1} /> */}
      <Cylinder3d position={[0, 2, 0]} imgArr={imgArr} />
    </Canvas>
  );
};

export default ThreeJsCarousel;
