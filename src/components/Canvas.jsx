"use client";
import React, { useEffect, useRef } from "react";
import * as fabric from "fabric";

export default function App() {
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;

    if (canvasElement) {
      fabricCanvasRef.current = initCanvas(canvasElement);

      const circle = new fabric.Circle({
        radius: 50,
        fill: "blue",
        left: 200,
        top: 200,
      });

      fabricCanvasRef.current.add(circle);
      fabricCanvasRef.current.renderAll();
    }

    return () => {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose();
        fabricCanvasRef.current = null;
      }
    };
  }, []);

  const initCanvas = (element) =>
    new fabric.Canvas(element, {
      height: 800,
      width: 800,
      backgroundColor: "pink",
      selection: false,
      renderOnAddRemove: true,
    });

  return (
    <div>
      <canvas id="canvas" ref={canvasRef} />
    </div>
  );
}
