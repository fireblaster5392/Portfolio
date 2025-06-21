/*
Avatar component for 3D character model
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Avatar(props) {
  const group = useRef();
  
  const { scene, animations } = useGLTF("/models/avatar.glb");
  const { actions } = useAnimations(animations, group);

  // Play animations if they exist
  React.useEffect(() => {
    if (animations && animations.length > 0) {
      // Play the first animation by default
      const firstAnimation = Object.keys(actions)[0];
      if (firstAnimation && actions[firstAnimation]) {
        actions[firstAnimation].play();
      }
    }
  }, [actions, animations]);

  // Check if scene exists
  if (!scene) {
    console.error("Avatar scene not loaded");
    return (
      <group {...props}>
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="red" />
        </mesh>
      </group>
    );
  }

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  );
}

useGLTF.preload("/models/avatar.glb"); 