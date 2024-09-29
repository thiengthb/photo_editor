"use client";

import { useEffect, useState } from 'react';
import * as fabric from 'fabric';
import ActionBtn from "@/components/ActionBtn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEraser, faSquare, faCircle, faLinesLeaning, faFont, faPen, faDeleteLeft, faPlay } from '@fortawesome/free-solid-svg-icons';
import Modal from "@/components/Modal";
import { useCanvasContext } from "@/context/CanvasContext";
import drawCircle from "@/drawingTool/shapes/drawCircle";
import drawRectangle from "@/drawingTool/shapes/drawRectangle";
import drawText from "@/drawingTool/shapes/drawText";
import drawLine from "@/drawingTool/shapes/drawLine";
import drawTriangle from "@/drawingTool/shapes/drawTriangle";

export default function Canvas() {
  const [isDrawingMode, setIsDrawingMode] = useState(false);

  const { fabricObj, canvas, setCanvas, colorSelect } = useCanvasContext();

  useEffect(() => {
    const initCanvas = new fabric.Canvas(fabricObj.current, {
      width: window.innerWidth / 2,
      height: window.innerHeight - 100,
      backgroundColor: 'white',
    });
    setCanvas(initCanvas);

    return () => initCanvas.dispose();
    
  }, [fabricObj, setCanvas]);

  console.log(canvas)

  const enableDrawing = () => {
    canvas.on("mouse:move", ()=> {
      const currentMode = !canvas.isDrawingMode;
      canvas.isDrawingMode = currentMode;

      canvas.freeDrawingBrush.color = 'black';

      setIsDrawingMode(currentMode);
    })
  };

  const deleteSelectedObject = () => {
    if (canvas) {
      const activeObject = canvas.getActiveObject();
      if (activeObject) {
        canvas.remove(activeObject);
      }
    }
  };

  useEffect(() => {
    const handleDelEnter = (e) => {
      if (e.key === 'Delete') {
        deleteSelectedObject();
        e.preventDefault();
      }
    };

    window.addEventListener('keydown', handleDelEnter);
    return () => {
      window.removeEventListener('keydown', handleDelEnter);
    };
  }, [canvas]);

  return (
    <div>
      <div className='p-2 gap-2 flex items-center'>
        <ActionBtn onclick={() => drawRectangle(canvas, colorSelect)}>
          <FontAwesomeIcon icon={faSquare} />
        </ActionBtn>

        <ActionBtn onclick={() => drawCircle(canvas, colorSelect)}>
          <FontAwesomeIcon icon={faCircle} />
        </ActionBtn>

        <ActionBtn onclick={() => drawTriangle(canvas, colorSelect)}>
        <FontAwesomeIcon icon={faPlay} />
        </ActionBtn>

        <ActionBtn onclick={() => drawLine(canvas, colorSelect)}>
          <FontAwesomeIcon icon={faLinesLeaning} />
        </ActionBtn>

        <ActionBtn onclick={() => drawText(canvas, colorSelect)}>
          <FontAwesomeIcon icon={faFont} />
        </ActionBtn>

        <ActionBtn onclick={enableDrawing} active={isDrawingMode}>
          <FontAwesomeIcon icon={faPen} />
        </ActionBtn>

        <ActionBtn onclick={deleteSelectedObject}>
          <FontAwesomeIcon icon={faEraser} />
        </ActionBtn>

        <ActionBtn onclick={() => canvas.clear()}>
          <FontAwesomeIcon icon={faDeleteLeft} />
        </ActionBtn>

        <Modal canvas={canvas}/>
      </div>

      <canvas className="border-1 border-[#acacac] shadow-lg" ref={fabricObj} id="canvas" />
    </div>
  );
}
