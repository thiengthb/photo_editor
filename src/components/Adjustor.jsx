"use client"

import { useCanvasContext } from "@/context/CanvasContext";
import { Slider } from "@nextui-org/react";

export default function Adjustor() {

    const {canvas} = useCanvasContext();

  return (
    <div className="flex bg-[#c2c2c2] h-[600px] my-auto w-[250px] ml-4 p-4 justify-center rounded-lg" >
        <Slider 
            label="Stroke" 
            step={1} 
            maxValue={100} 
            minValue={0} 
            defaultValue={10}
            className="max-w-md"
            color="success"
        />
    </div>
  )
}
