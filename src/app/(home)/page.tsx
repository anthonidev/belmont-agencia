"use client";
import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Loader,
  useGLTF,
  OrbitControls,
  PerspectiveCamera,
  Stars,
} from "@react-three/drei";
import Hero from "./components/Hero";
import Cta from "./components/Cta";
import NewsLetter from "./components/Newsletter";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
type ModelProps = {
  url: string;
};

function Model({ url }: ModelProps) {
  const { nodes } = useGLTF(url) as any;
  return (
    <group rotation={[-Math.PI / 2, 0, 0]} position={[0, -7, 0]} scale={7}>
      <group rotation={[Math.PI / 13.5, -Math.PI / 5.8, Math.PI / 5.6]}>
        <mesh
          receiveShadow
          castShadow
          geometry={nodes?.planet002?.geometry}
          material={nodes?.planet002?.material}
        />
        <mesh
          geometry={nodes?.planet003?.geometry}
          material={nodes?.planet003?.material}
        />
      </group>
    </group>
  );
}

export default function Home() {
  return (
    <>
      <div
        className="bg-black  w-screen flex overflow-hidden  z-0 overflow-y-hidden border-t"
        style={{ height: "calc(100vh - 5rem)" }}
      >
        <div className=" flex flex-col h-full justify-center   md:px-10 px-3 border-r  border-gray-300 ">
          <h1 className=" text-amber-400 text-xl md:text-2xl font-bold text-center tracking-wider ">
            <span className="text-base md:text-4xl  text-white ">
              Despegamos juntos
            </span>
            <br />
            Belmont Agencia, tu aliado para el éxito digital.
          </h1>
          <div className="flex justify-center mt-10">
            <button className="bg-white text-indigo-900 font-bold py-2 px-4 rounded-full hover:bg-amber-400 hover:text-white transition duration-300 ease-in-out">
              Contactanos
            </button>
          </div>
        </div>

        <Canvas dpr={[1.5, 2]} linear shadows>
          <fog attach="fog" args={["#272730", 16, 30]} />
          <ambientLight intensity={0.75} />
          <PerspectiveCamera makeDefault position={[0, 0, 16]} fov={75}>
            <pointLight intensity={1} position={[-10, -25, -10]} />
            <spotLight
              castShadow
              intensity={2.25}
              angle={0.2}
              penumbra={1}
              position={[-25, 20, -15]}
              shadow-mapSize={[1024, 1024]}
              shadow-bias={-0.0001}
            />
          </PerspectiveCamera>
          <Suspense fallback={null}>
            <Model url="/scene.glb" />
          </Suspense>
          <OrbitControls
            autoRotate
            enablePan={false}
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Stars radius={500} depth={50} count={2000} factor={10} />
        </Canvas>
        <Loader />
      </div>
      <Hero />
      <Cta />
      <NewsLetter />
      <Testimonials />
      <Contact />
    </>
  );
}
