"use client";

import Canvas from "@/components/Canvas";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [shape, setShape] = useState("");

  return (
    <div className="">
      <Navbar setShape={setShape} />
      <Canvas shape={shape} />
    </div>
  );
}
