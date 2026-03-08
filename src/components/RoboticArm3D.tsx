import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function RoboticArmModel({ scrollProgress = 0 }: { scrollProgress: number }) {
  const groupRef = useRef<THREE.Group>(null);
  const joint1Ref = useRef<THREE.Group>(null);
  const joint2Ref = useRef<THREE.Group>(null);
  const joint3Ref = useRef<THREE.Group>(null);
  const gripperLeftRef = useRef<THREE.Mesh>(null);
  const gripperRightRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    const sp = scrollProgress;

    // Base rotation - responds to scroll
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.4 + sp * Math.PI * 0.5;
    }

    // Shoulder joint
    if (joint1Ref.current) {
      joint1Ref.current.rotation.z = -0.5 + Math.sin(t * 0.4 + sp * 3) * 0.2 - sp * 0.3;
    }

    // Elbow joint
    if (joint2Ref.current) {
      joint2Ref.current.rotation.z = 0.7 + Math.sin(t * 0.35 + 1 + sp * 2) * 0.25 + sp * 0.4;
    }

    // Wrist joint
    if (joint3Ref.current) {
      joint3Ref.current.rotation.z = -0.3 + Math.sin(t * 0.5 + 2) * 0.15 - sp * 0.2;
    }

    // Gripper open/close
    const gripAnim = Math.sin(t * 0.7) * 0.08 + sp * 0.05;
    if (gripperLeftRef.current) gripperLeftRef.current.position.x = -0.12 - gripAnim;
    if (gripperRightRef.current) gripperRightRef.current.position.x = 0.12 + gripAnim;
  });

  return (
    <group ref={groupRef} position={[0, -3, 0]} scale={1.1}>
      {/* Base plate */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[1.4, 1.8, 0.25, 32]} />
        <meshStandardMaterial color="#0a0a14" metalness={0.95} roughness={0.1} />
      </mesh>

      {/* Base ring accent */}
      <mesh position={[0, 0.15, 0]}>
        <torusGeometry args={[1.1, 0.04, 12, 48]} />
        <meshStandardMaterial color="#00d4ff" metalness={0.8} roughness={0.2} emissive="#00d4ff" emissiveIntensity={0.3} />
      </mesh>

      {/* Base column */}
      <mesh position={[0, 0.55, 0]} castShadow>
        <cylinderGeometry args={[0.55, 0.75, 0.65, 24]} />
        <meshStandardMaterial color="#0d0d1a" metalness={0.93} roughness={0.12} />
      </mesh>

      {/* Shoulder joint */}
      <group ref={joint1Ref} position={[0, 0.9, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.38, 24, 24]} />
          <meshStandardMaterial color="#151525" metalness={0.92} roughness={0.15} />
        </mesh>

        {/* Joint ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.32, 0.025, 8, 32]} />
          <meshStandardMaterial color="#00d4ff" metalness={0.8} roughness={0.2} emissive="#00d4ff" emissiveIntensity={0.2} />
        </mesh>

        {/* Lower arm */}
        <mesh position={[0, 1.15, 0]} castShadow>
          <cylinderGeometry args={[0.18, 0.24, 1.9, 16]} />
          <meshStandardMaterial color="#0e0e1e" metalness={0.93} roughness={0.1} />
        </mesh>

        {/* Arm detail strips */}
        <mesh position={[0.22, 1.15, 0]}>
          <boxGeometry args={[0.03, 1.6, 0.06]} />
          <meshStandardMaterial color="#00d4ff" metalness={0.7} roughness={0.3} emissive="#00d4ff" emissiveIntensity={0.15} />
        </mesh>

        {/* Elbow joint */}
        <group ref={joint2Ref} position={[0, 2.15, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.3, 24, 24]} />
            <meshStandardMaterial color="#151525" metalness={0.92} roughness={0.15} />
          </mesh>

          {/* Joint ring */}
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.25, 0.02, 8, 32]} />
            <meshStandardMaterial color="#00d4ff" metalness={0.8} roughness={0.2} emissive="#00d4ff" emissiveIntensity={0.2} />
          </mesh>

          {/* Upper arm */}
          <mesh position={[0, 0.85, 0]} castShadow>
            <cylinderGeometry args={[0.13, 0.18, 1.4, 16]} />
            <meshStandardMaterial color="#0e0e1e" metalness={0.93} roughness={0.1} />
          </mesh>

          {/* Wrist joint */}
          <group ref={joint3Ref} position={[0, 1.55, 0]}>
            <mesh castShadow>
              <sphereGeometry args={[0.2, 24, 24]} />
              <meshStandardMaterial color="#151525" metalness={0.92} roughness={0.15} />
            </mesh>

            {/* Wrist connector */}
            <mesh position={[0, 0.3, 0]}>
              <cylinderGeometry args={[0.08, 0.1, 0.35, 12]} />
              <meshStandardMaterial color="#0a0a18" metalness={0.95} roughness={0.1} />
            </mesh>

            {/* Gripper mount */}
            <mesh position={[0, 0.55, 0]}>
              <boxGeometry args={[0.38, 0.1, 0.18]} />
              <meshStandardMaterial color="#0d0d1a" metalness={0.93} roughness={0.12} />
            </mesh>

            {/* Gripper left finger */}
            <mesh ref={gripperLeftRef} position={[-0.12, 0.78, 0]} castShadow>
              <boxGeometry args={[0.05, 0.4, 0.1]} />
              <meshStandardMaterial color="#151525" metalness={0.9} roughness={0.15} />
            </mesh>

            {/* Gripper right finger */}
            <mesh ref={gripperRightRef} position={[0.12, 0.78, 0]} castShadow>
              <boxGeometry args={[0.05, 0.4, 0.1]} />
              <meshStandardMaterial color="#151525" metalness={0.9} roughness={0.15} />
            </mesh>

            {/* Gripper tip accents */}
            <mesh position={[-0.12, 0.96, 0]}>
              <boxGeometry args={[0.055, 0.04, 0.105]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.4} metalness={0.8} roughness={0.2} />
            </mesh>
            <mesh position={[0.12, 0.96, 0]}>
              <boxGeometry args={[0.055, 0.04, 0.105]} />
              <meshStandardMaterial color="#00d4ff" emissive="#00d4ff" emissiveIntensity={0.4} metalness={0.8} roughness={0.2} />
            </mesh>
          </group>
        </group>
      </group>
    </group>
  );
}

function GroundPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.15, 0]} receiveShadow>
      <planeGeometry args={[30, 30]} />
      <meshStandardMaterial color="#050508" metalness={0.95} roughness={0.2} />
    </mesh>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 200;
  
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 15;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#00d4ff" transparent opacity={0.4} sizeAttenuation />
    </points>
  );
}

const RoboticArm3D = ({ scrollProgress = 0 }: { scrollProgress?: number }) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [4, 2.5, 6], fov: 40 }}
        gl={{ antialias: true, alpha: true }}
        shadows
        style={{ background: 'transparent' }}
      >
        <color attach="background" args={['#030308']} />
        <fog attach="fog" args={['#030308', 8, 25]} />
        
        <ambientLight intensity={0.08} />
        <directionalLight 
          position={[5, 8, 5]} 
          intensity={1.2} 
          color="#ffffff" 
          castShadow
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <directionalLight position={[-4, 3, -3]} intensity={0.4} color="#00d4ff" />
        <pointLight position={[0, 6, 0]} intensity={0.6} color="#00d4ff" distance={15} decay={2} />
        <pointLight position={[-3, 2, 3]} intensity={0.3} color="#7b61ff" distance={12} decay={2} />
        <spotLight
          position={[3, 10, 5]}
          angle={0.25}
          penumbra={0.6}
          intensity={1.5}
          castShadow
          color="#ffffff"
        />
        
        <RoboticArmModel scrollProgress={scrollProgress} />
        <GroundPlane />
        <Particles />
      </Canvas>
    </div>
  );
};

export default RoboticArm3D;
