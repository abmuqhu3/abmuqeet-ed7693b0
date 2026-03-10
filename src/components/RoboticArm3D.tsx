import { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

type GrabState = 'idle' | 'reaching' | 'grabbing' | 'pulling' | 'releasing';

interface ArmTarget {
  direction: 'left' | 'right' | 'top' | 'bottom';
  label: string;
}

const TARGET_POSITIONS: Record<string, ArmTarget> = {
  projects: { direction: 'right', label: 'Projects' },
  publications: { direction: 'left', label: 'Publications' },
  resume: { direction: 'top', label: 'Resume' },
  contact: { direction: 'bottom', label: 'Contact' },
  about: { direction: 'left', label: 'About' },
  skills: { direction: 'right', label: 'Skills' },
  experience: { direction: 'top', label: 'Experience' },
};

function FloatingCard({ text, position, opacity }: { text: string; position: [number, number, number]; opacity: number }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 2) * 0.001;
    }
  });

  if (opacity < 0.01) return null;

  return (
    <mesh ref={meshRef} position={position}>
      <planeGeometry args={[1.8, 0.5]} />
      <meshStandardMaterial
        color="#0a1520"
        transparent
        opacity={opacity * 0.85}
        emissive="#00d4ff"
        emissiveIntensity={0.08}
      />
    </mesh>
  );
}

function RoboticArmModel({
  scrollProgress = 0,
  grabTarget,
  grabState,
  onGrabComplete,
}: {
  scrollProgress: number;
  grabTarget: string | null;
  grabState: GrabState;
  onGrabComplete?: () => void;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const joint1Ref = useRef<THREE.Group>(null);
  const joint2Ref = useRef<THREE.Group>(null);
  const joint3Ref = useRef<THREE.Group>(null);
  const gripperLeftRef = useRef<THREE.Mesh>(null);
  const gripperRightRef = useRef<THREE.Mesh>(null);
  const grabProgressRef = useRef(0);
  const [cardOpacity, setCardOpacity] = useState(0);
  const [cardPos, setCardPos] = useState<[number, number, number]>([0, 5, 0]);

  useEffect(() => {
    if (grabState === 'reaching') {
      grabProgressRef.current = 0;
    }
  }, [grabState, grabTarget]);

  useFrame((state, delta) => {
    const t = state.clock.elapsedTime;
    const sp = scrollProgress;

    const targetInfo = grabTarget ? TARGET_POSITIONS[grabTarget] : null;
    const isAnimating = grabState !== 'idle' && targetInfo;

    if (isAnimating) {
      grabProgressRef.current = Math.min(grabProgressRef.current + delta * 0.8, 1);
      const gp = grabProgressRef.current;
      const smoothGp = gp * gp * (3 - 2 * gp);

      const dir = targetInfo!.direction;

      let targetBaseY = 0;
      let targetJ1 = -0.5;
      let targetJ2 = 0.7;
      let targetJ3 = -0.3;
      let gripOpen = 0.15;

      if (grabState === 'reaching') {
        if (dir === 'right') targetBaseY = -0.8;
        if (dir === 'left') targetBaseY = 0.8;
        if (dir === 'top') { targetJ1 = -1.2; targetJ2 = 0.4; }
        if (dir === 'bottom') { targetJ1 = 0.1; targetJ2 = 1.2; }
        gripOpen = 0.2;
        setCardOpacity(0);
      } else if (grabState === 'grabbing') {
        if (dir === 'right') targetBaseY = -0.8;
        if (dir === 'left') targetBaseY = 0.8;
        if (dir === 'top') { targetJ1 = -1.2; targetJ2 = 0.4; }
        if (dir === 'bottom') { targetJ1 = 0.1; targetJ2 = 1.2; }
        gripOpen = 0.02;
        setCardOpacity(smoothGp);
      } else if (grabState === 'pulling') {
        targetBaseY = 0;
        targetJ1 = -0.3;
        targetJ2 = 0.5;
        targetJ3 = -0.1;
        gripOpen = 0.02;
        setCardOpacity(1 - smoothGp * 0.5);
      } else if (grabState === 'releasing') {
        gripOpen = 0.15 * smoothGp;
        setCardOpacity(Math.max(0, 1 - smoothGp * 2));
      }

      if (groupRef.current) {
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetBaseY, smoothGp * 0.12);
      }
      if (joint1Ref.current) {
        joint1Ref.current.rotation.z = THREE.MathUtils.lerp(joint1Ref.current.rotation.z, targetJ1, smoothGp * 0.1);
      }
      if (joint2Ref.current) {
        joint2Ref.current.rotation.z = THREE.MathUtils.lerp(joint2Ref.current.rotation.z, targetJ2, smoothGp * 0.1);
      }
      if (joint3Ref.current) {
        joint3Ref.current.rotation.z = THREE.MathUtils.lerp(joint3Ref.current.rotation.z, targetJ3, smoothGp * 0.1);
      }
      if (gripperLeftRef.current) gripperLeftRef.current.position.x = THREE.MathUtils.lerp(gripperLeftRef.current.position.x, -gripOpen, 0.08);
      if (gripperRightRef.current) gripperRightRef.current.position.x = THREE.MathUtils.lerp(gripperRightRef.current.position.x, gripOpen, 0.08);

      if (grabState === 'grabbing' || grabState === 'pulling') {
        setCardPos([0, 6.2 + Math.sin(t * 3) * 0.05, 0]);
      }

      if (gp >= 1 && onGrabComplete) {
        onGrabComplete();
      }
    } else {
      // Idle animation with smoother movement
      if (groupRef.current) {
        groupRef.current.rotation.y = Math.sin(t * 0.15) * 0.35 + sp * Math.PI * 0.5;
      }
      if (joint1Ref.current) {
        joint1Ref.current.rotation.z = -0.5 + Math.sin(t * 0.3 + sp * 3) * 0.2 - sp * 0.3;
      }
      if (joint2Ref.current) {
        joint2Ref.current.rotation.z = 0.7 + Math.sin(t * 0.25 + 1 + sp * 2) * 0.25 + sp * 0.4;
      }
      if (joint3Ref.current) {
        joint3Ref.current.rotation.z = -0.3 + Math.sin(t * 0.4 + 2) * 0.15 - sp * 0.2;
      }
      const gripAnim = Math.sin(t * 0.5) * 0.06 + sp * 0.05;
      if (gripperLeftRef.current) gripperLeftRef.current.position.x = -0.12 - gripAnim;
      if (gripperRightRef.current) gripperRightRef.current.position.x = 0.12 + gripAnim;
      setCardOpacity(0);
    }
  });

  const jointMaterial = { color: "#0d0d1a", metalness: 0.95, roughness: 0.08 };
  const accentMaterial = { color: "#00d4ff", metalness: 0.8, roughness: 0.2, emissive: "#00d4ff", emissiveIntensity: 0.35 };

  return (
    <group ref={groupRef} position={[0, -3, 0]} scale={1.15}>
      {/* Base */}
      <mesh position={[0, 0, 0]} castShadow>
        <cylinderGeometry args={[1.4, 1.8, 0.25, 32]} />
        <meshStandardMaterial color="#080812" metalness={0.97} roughness={0.08} />
      </mesh>
      <mesh position={[0, 0.15, 0]}>
        <torusGeometry args={[1.1, 0.04, 12, 48]} />
        <meshStandardMaterial {...accentMaterial} />
      </mesh>
      {/* Secondary ring */}
      <mesh position={[0, 0.08, 0]}>
        <torusGeometry args={[1.3, 0.02, 8, 48]} />
        <meshStandardMaterial color="#7b61ff" metalness={0.8} roughness={0.2} emissive="#7b61ff" emissiveIntensity={0.15} />
      </mesh>
      <mesh position={[0, 0.55, 0]} castShadow>
        <cylinderGeometry args={[0.55, 0.75, 0.65, 24]} />
        <meshStandardMaterial {...jointMaterial} />
      </mesh>

      {/* Shoulder */}
      <group ref={joint1Ref} position={[0, 0.9, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.38, 24, 24]} />
          <meshStandardMaterial color="#121222" metalness={0.94} roughness={0.12} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.32, 0.025, 8, 32]} />
          <meshStandardMaterial {...accentMaterial} emissiveIntensity={0.25} />
        </mesh>
        <mesh position={[0, 1.15, 0]} castShadow>
          <cylinderGeometry args={[0.18, 0.24, 1.9, 16]} />
          <meshStandardMaterial {...jointMaterial} />
        </mesh>
        {/* Accent stripe */}
        <mesh position={[0.22, 1.15, 0]}>
          <boxGeometry args={[0.03, 1.6, 0.06]} />
          <meshStandardMaterial {...accentMaterial} emissiveIntensity={0.2} />
        </mesh>
        {/* Purple accent */}
        <mesh position={[-0.22, 1.15, 0]}>
          <boxGeometry args={[0.02, 1.2, 0.04]} />
          <meshStandardMaterial color="#7b61ff" metalness={0.7} roughness={0.3} emissive="#7b61ff" emissiveIntensity={0.15} />
        </mesh>

        {/* Elbow */}
        <group ref={joint2Ref} position={[0, 2.15, 0]}>
          <mesh castShadow>
            <sphereGeometry args={[0.3, 24, 24]} />
            <meshStandardMaterial color="#121222" metalness={0.94} roughness={0.12} />
          </mesh>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.25, 0.02, 8, 32]} />
            <meshStandardMaterial {...accentMaterial} emissiveIntensity={0.25} />
          </mesh>
          <mesh position={[0, 0.85, 0]} castShadow>
            <cylinderGeometry args={[0.13, 0.18, 1.4, 16]} />
            <meshStandardMaterial {...jointMaterial} />
          </mesh>

          {/* Wrist */}
          <group ref={joint3Ref} position={[0, 1.55, 0]}>
            <mesh castShadow>
              <sphereGeometry args={[0.2, 24, 24]} />
              <meshStandardMaterial color="#121222" metalness={0.94} roughness={0.12} />
            </mesh>
            <mesh position={[0, 0.3, 0]}>
              <cylinderGeometry args={[0.08, 0.1, 0.35, 12]} />
              <meshStandardMaterial color="#0a0a18" metalness={0.95} roughness={0.08} />
            </mesh>
            <mesh position={[0, 0.55, 0]}>
              <boxGeometry args={[0.38, 0.1, 0.18]} />
              <meshStandardMaterial {...jointMaterial} />
            </mesh>

            {/* Grippers */}
            <mesh ref={gripperLeftRef} position={[-0.12, 0.78, 0]} castShadow>
              <boxGeometry args={[0.05, 0.4, 0.1]} />
              <meshStandardMaterial color="#151525" metalness={0.92} roughness={0.12} />
            </mesh>
            <mesh ref={gripperRightRef} position={[0.12, 0.78, 0]} castShadow>
              <boxGeometry args={[0.05, 0.4, 0.1]} />
              <meshStandardMaterial color="#151525" metalness={0.92} roughness={0.12} />
            </mesh>

            {/* Gripper tips with glow */}
            <mesh position={[-0.12, 0.96, 0]}>
              <boxGeometry args={[0.055, 0.04, 0.105]} />
              <meshStandardMaterial {...accentMaterial} emissiveIntensity={0.5} />
            </mesh>
            <mesh position={[0.12, 0.96, 0]}>
              <boxGeometry args={[0.055, 0.04, 0.105]} />
              <meshStandardMaterial {...accentMaterial} emissiveIntensity={0.5} />
            </mesh>

            <FloatingCard text={grabTarget || ''} position={[0, 0.5, 0.3]} opacity={cardOpacity} />
          </group>
        </group>
      </group>
    </group>
  );
}

function GroundPlane() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3.15, 0]} receiveShadow>
      <planeGeometry args={[40, 40]} />
      <meshStandardMaterial color="#040408" metalness={0.97} roughness={0.15} />
    </mesh>
  );
}

function GridLines() {
  const gridRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.position.z = (state.clock.elapsedTime * 0.3) % 2;
    }
  });

  return (
    <group ref={gridRef} position={[0, -3.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <gridHelper args={[30, 30, '#00d4ff', '#00d4ff']} rotation={[Math.PI / 2, 0, 0]}>
        <meshBasicMaterial color="#00d4ff" transparent opacity={0.03} />
      </gridHelper>
    </group>
  );
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null);
  const count = 350;

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 25;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 18;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
    // Mix cyan and purple particles
    const isCyan = Math.random() > 0.3;
    colors[i * 3] = isCyan ? 0 : 0.48;
    colors[i * 3 + 1] = isCyan ? 0.83 : 0.38;
    colors[i * 3 + 2] = isCyan ? 1 : 1;
  }

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.015;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.02;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} vertexColors transparent opacity={0.5} sizeAttenuation />
    </points>
  );
}

const RoboticArm3D = ({
  scrollProgress = 0,
  grabTarget,
  grabState,
  onGrabComplete,
}: {
  scrollProgress?: number;
  grabTarget?: string | null;
  grabState?: GrabState;
  onGrabComplete?: () => void;
}) => {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [4.5, 2.5, 6.5], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
        shadows
        style={{ background: 'transparent' }}
      >
        <color attach="background" args={['#040408']} />
        <fog attach="fog" args={['#040408', 10, 28]} />

        <ambientLight intensity={0.06} />
        <directionalLight position={[5, 8, 5]} intensity={1.0} color="#ffffff" castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
        <directionalLight position={[-5, 4, -3]} intensity={0.2} color="#00d4ff" />
        <pointLight position={[0, 7, 0]} intensity={0.35} color="#00d4ff" distance={18} decay={2} />
        <pointLight position={[-4, 2, 4]} intensity={0.15} color="#7b61ff" distance={15} decay={2} />
        <pointLight position={[4, 1, -3]} intensity={0.08} color="#ff6b35" distance={10} decay={2} />
        <spotLight position={[3, 12, 5]} angle={0.22} penumbra={0.7} intensity={1.2} castShadow color="#ffffff" />

        <RoboticArmModel
          scrollProgress={scrollProgress}
          grabTarget={grabTarget || null}
          grabState={grabState || 'idle'}
          onGrabComplete={onGrabComplete}
        />
        <GroundPlane />
        <Particles />
      </Canvas>
    </div>
  );
};

export default RoboticArm3D;
