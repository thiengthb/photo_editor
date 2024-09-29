"use client";

import Canvas from "@/components/Canvas";
import Adjustor from "@/components/Adjustor";

export default function Home() {
  return (
    <div>
      <div className="h-screen w-screen flex items-center justify-center">
        <Canvas />
        <Adjustor />
      </div>
    </div>
  );
}
