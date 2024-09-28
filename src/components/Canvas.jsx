"use client"

import { useEffect, useRef, useState } from 'react';
import * as fabric from 'fabric';
import { Button } from '@nextui-org/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faSquare, faCircle, faLinesLeaning, faFont, faImage } from '@fortawesome/free-solid-svg-icons';

export default function Canvas() {
  const canvasRef = useRef(null); 
  const fabricCanvasRef = useRef(null);
  const [isDrawingMode, setIsDrawingMode] = useState(false); 

  const initCanvas = (canvasElement) => {
    return new fabric.Canvas(canvasElement, {
      height: window.innerHeight - 100,
      width: window.innerWidth/2,
      backgroundColor: 'white',
    });
  };

  useEffect(() => {
    const canvasElement = canvasRef.current;

    if (canvasElement) {
      fabricCanvasRef.current = initCanvas(canvasElement);
      fabricCanvasRef.current.renderAll(); 
    }

    return () => {
      if (fabricCanvasRef.current) {
        fabricCanvasRef.current.dispose();
        fabricCanvasRef.current = null; 
      }
    };
  }, []);

  const addRectangle = () => {
    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'gray',
      width: 60,
      height: 60,
    });
    fabricCanvasRef.current.add(rect);
  };

  const addCircle = () => {
    const circle = new fabric.Circle({
      radius: 30,
      fill: 'gray',
      left: 150,
      top: 150,
    });
    fabricCanvasRef.current.add(circle);
  };

  const addLine = () => {
    const line = new fabric.Line([50, 100, 200, 100], {
      left: 170,
      top: 150,
      stroke: 'gray',
      strokeWidth: 3,
    });
    fabricCanvasRef.current.add(line);
  };

  const addText = () => {
    const text = new fabric.IText('Enter text', {
      left: 100,
      top: 200,
      fill: 'black',
      fontSize: 20,
      editable: true,   
      selectable: true, 
    });
    fabricCanvasRef.current.add(text);
  };

  const enableDrawing = () => {
    if (fabricCanvasRef.current) {
      const currentMode = !fabricCanvasRef.current.isDrawingMode; 
      fabricCanvasRef.current.isDrawingMode = currentMode; 
      setIsDrawingMode(currentMode); 
    }
  };

  const deleteSelectedObject = () => {
    const activeObject = fabricCanvasRef.current.getActiveObject();
    if (activeObject) {
      fabricCanvasRef.current.remove(activeObject);
    }
  };

  useEffect(() => {
    
    const handleDelEnter = (e) => {
      if (e.key === 'Delete') {
        deleteSelectedObject();
        e.preventDefault();
      }
    } 

    window.addEventListener("keydown",  handleDelEnter);
    return () => {
      window.removeEventListener('keydown', handleDelEnter);
    };
  }, []);

  return (
    <div>
      <div className='p-2 gap-2 flex items-center'>
        <Button radius='full' isIconOnly onClick={addRectangle}>
          <FontAwesomeIcon icon={faSquare} />
        </Button>
        <Button radius='full' isIconOnly onClick={addCircle}>
        <FontAwesomeIcon icon={faCircle} /> 
        </Button>
        <Button radius='full' isIconOnly onClick={addLine}>
          <FontAwesomeIcon icon={faLinesLeaning} />
        </Button>
        <Button radius='full' isIconOnly onClick={addText}>
          <FontAwesomeIcon icon={faFont} />
        </Button>
        <Button onClick={enableDrawing}>
          {isDrawingMode ? 'Disable' : 'Enable'} Drawing
        </Button>
        <Button isIconOnly onClick={deleteSelectedObject}>
          <FontAwesomeIcon icon={faEraser} />
        </Button>
        <Button radius='full' isIconOnly onClick={""}>
          <FontAwesomeIcon icon={faImage} />
        </Button>
      </div>
      <canvas className="border-1 border-[#acacac] shadow-lg" ref={canvasRef} id="canvas" />
    </div>
  );
}
