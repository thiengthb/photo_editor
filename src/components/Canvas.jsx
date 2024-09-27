"use client";
import React, { useEffect, useRef } from "react";
import * as fabric from "fabric";
import { drawCircle, drawRectangle, drawTriangle } from "@/drawingTool/shapes";

export default function App({shape}) {
  const canvasRef = useRef(null);
  const fabricCanvasRef = useRef(null);

  useEffect(() => {
    const canvasElement = canvasRef.current;

    if (canvasElement) {
      fabricCanvasRef.current = initCanvas(canvasElement);
      
      switch(shape) {
        case "circle":
          drawCircle(fabricCanvasRef.current, "red");
          break;
        case "rectangle":
          drawRectangle(fabricCanvasRef.current, "red");
          break;
        case "triangle":
          drawTriangle(fabricCanvasRef.current, "red");
          break;
        default:
          console.error("Invalid shape");
      }

      fabricCanvasRef.current.renderAll();
    }

    return () => {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose();
        fabricCanvasRef.current = null;
      }
    };
  }, [shape]);

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
