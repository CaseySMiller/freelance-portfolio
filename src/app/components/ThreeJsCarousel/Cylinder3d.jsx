'use client'

import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Decal, useTexture, OrbitControls } from "@react-three/drei";
import { degToRad } from "three/src/math/MathUtils";

function Cylinder3d({ imgArr, ...props }) {
  const ref = useRef();
  // set the rotation speed here⏩
  const speed = 0.0017;

  // const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  const [stopped, stop] = useState(speed);
  const [outputArr, setOutputArr] = useState([]);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    // ref.current.rotation.x += 0.01
    ref.current.rotation.y += stopped;
  });

  // make an array of textures from imgArr
  const textureArr = useTexture([...imgArr]);

  if (outputArr.length !== 12) {
    // make an array of 12 image uri's no matter the length of the imgArr
    let imgIndex = 0;
    const twelveArr = [];
    for (let i = 0; i < 12; i++) {
      twelveArr.push(textureArr[imgIndex]);
      // setOutputArr([...outputArr, textureArr[imgIndex]]);
      if (imgIndex >= textureArr.length - 1) {
        imgIndex = 0;
      } else {
        imgIndex++;
      }
    }
    setOutputArr(twelveArr);
  }

  return (
    <>
      {/* <OrbitControls /> */}
      <mesh
        {...props}
        ref={ref}
        scale={clicked ? 1.01 : 1}
        onClick={(e) => {
          stop(!stopped ? speed : 0);
          click(!clicked);
        }}
      >
        <cylinderGeometry args={[30.9, 30.9, 9, 12, undefined, false]} />
        <meshNormalMaterial wireframe={props.wireframe} color={"#b7b7b7"} />
        {/* apply image textures to all 12 faces */}
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[8.4, 0, 31]} // Position of the decal
          rotation={[0, degToRad(15), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshPhysicalMaterial
            map={outputArr[0]}
            polygonOffset
            polygonOffsetFactor={-1} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[22, 0, 22]} // Position of the decal
          rotation={[0, degToRad(45), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshPhysicalMaterial
            map={outputArr[1]}
            polygonOffset
            polygonOffsetFactor={-2} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[28.9, 0, 7.75]} // Position of the decal
          rotation={[0, degToRad(75), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshPhysicalMaterial
            map={outputArr[2]}
            polygonOffset
            polygonOffsetFactor={-3} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[30, 0, -8]} // Position of the decal
          rotation={[0, degToRad(105), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshPhysicalMaterial
            map={outputArr[3]}
            polygonOffset
            polygonOffsetFactor={-4} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[22.1, 0, -22]} // Position of the decal
          rotation={[0, degToRad(135), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshPhysicalMaterial
            map={outputArr[4]}
            polygonOffset
            polygonOffsetFactor={-5} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[7.85, 0, -29]} // Position of the decal
          rotation={[0, degToRad(165), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshPhysicalMaterial
            map={outputArr[5]}
            polygonOffset
            polygonOffsetFactor={-6} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[-7.97, 0, -30]} // Position of the decal
          rotation={[0, degToRad(195), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshPhysicalMaterial
            map={outputArr[6]}
            polygonOffset
            polygonOffsetFactor={-7} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[-21, 0, -21.08]} // Position of the decal
          rotation={[0, degToRad(225), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16.04, 9, 7]} // Scale of the decal
        >
          <meshPhysicalMaterial
            map={outputArr[7]}
            polygonOffset
            polygonOffsetFactor={-8} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[-29, 0, -7.78]} // Position of the decal
          rotation={[0, degToRad(255), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16.04, 9, 7]} // Scale of the decal
        >
          <meshPhysicalMaterial
            map={outputArr[8]}
            polygonOffset
            polygonOffsetFactor={-8} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[-30, 0, 8.08]} // Position of the decal
          rotation={[0, degToRad(285), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16.04, 9, 7]} // Scale of the decal
        >
          <meshPhysicalMaterial
            map={outputArr[9]}
            polygonOffset
            polygonOffsetFactor={-9} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[-21.865, 0, 22]} // Position of the decal
          rotation={[0, degToRad(315), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16.04, 9, 7]} // Scale of the decal
        >
          <meshPhysicalMaterial
            map={outputArr[10]}
            polygonOffset
            polygonOffsetFactor={-10} // The material should take precedence over the original
          />
        </Decal>
        <Decal
          // debug // Makes "bounding box" of the decal visible
          position={[-7.96, 0, 30]} // Position of the decal
          rotation={[0, degToRad(345), 0]} // Rotation of the decal (can be a vector or a degree in radians)
          scale={[16, 9, 7]} // Scale of the decal
        >
          <meshPhysicalMaterial
            map={outputArr[11]}
            polygonOffset
            polygonOffsetFactor={-11} // The material should take precedence over the original
          />
        </Decal>
      </mesh>
    </>
  );
}

export default Cylinder3d;
