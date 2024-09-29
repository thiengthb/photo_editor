"use client";

import { useEffect, useState } from 'react';
import * as fabric from 'fabric';
import ActionBtn from "@/components/ActionBtn";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEraser, 
  faSquare, 
  faCircle, 
  faLinesLeaning, 
  faFont, 
  faPen, 
  faDeleteLeft, 
  faPlay, 
  faUserGroup, 
  faUser, 
  faArrowRotateLeft,
  faArrowRotateRight
} from '@fortawesome/free-solid-svg-icons';
import Modal from "@/components/Modal";
import { useCanvasContext } from "@/context/CanvasContext";
import drawCircle from "@/drawingTool/drawCircle";
import drawRectangle from "@/drawingTool/drawRectangle";
import drawText from "@/drawingTool/drawText";
import drawLine from "@/drawingTool/drawLine";
import drawTriangle from "@/drawingTool/drawTriangle";
import {exportToSVG} from "@/feature/export";
import { groupObjects, ungroupObjects } from "@/feature/group"
import { saveHistory, undo, redo } from "@/feature/history";

export default function Canvas() {
  const [isDrawingMode, setIsDrawingMode] = useState(false);

  const { fabricObj, canvas, setCanvas, colorSelect, group, setGroup } = useCanvasContext();

  useEffect(() => {
    const canvas = new fabric.Canvas(fabricObj.current, {
      width: window.innerWidth / 2,
      height: window.innerHeight - 100,
      backgroundColor: 'white',
    });
    
    saveHistory(canvas);
  
    canvas.on('object:modified', () => saveHistory(canvas));
    canvas.on('object:added', () => saveHistory(canvas));
    canvas.on('object:removed', () => saveHistory(canvas));
  
    setCanvas(canvas);

    return () => canvas.dispose();
    
  }, [fabricObj, setCanvas]);

  const enableDrawing = () => {
    if (!canvas) return;
    const currentMode = !canvas.isDrawingMode;
    canvas.isDrawingMode = currentMode;
    setIsDrawingMode(currentMode);
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

  useEffect(() => {
    const resizeCanvas = () => {
      if (canvas) {
        canvas.setWidth(window.innerWidth / 2);
        canvas.setHeight(window.innerHeight - 100);
        canvas.renderAll();
      }
    };
  
    window.addEventListener('resize', resizeCanvas);
    return () => window.removeEventListener('resize', resizeCanvas);
  }, [canvas]);

  return (
    <div className='h-full'>
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

        <ActionBtn onclick={() => groupObjects(canvas, setGroup)}>
          <FontAwesomeIcon icon={faUserGroup} />
        </ActionBtn>

        <ActionBtn onclick={() => ungroupObjects(canvas, group)}>
          <FontAwesomeIcon icon={faUser} />
        </ActionBtn>

        <ActionBtn onclick={deleteSelectedObject}>
          <FontAwesomeIcon icon={faEraser} />
        </ActionBtn>

        <ActionBtn onclick={() => canvas.clear()}>
          <FontAwesomeIcon icon={faDeleteLeft} />
        </ActionBtn>
        
        <ActionBtn onclick={() => exportToSVG(canvas)}>
          SVG
        </ActionBtn>

        <Modal canvas={canvas}/>

        <ActionBtn onclick={() => undo(canvas)}>
          <FontAwesomeIcon icon={faArrowRotateLeft} />
        </ActionBtn>

        <ActionBtn onclick={() => redo(canvas)}>
          <FontAwesomeIcon icon={faArrowRotateRight} />
        </ActionBtn>
      </div>

      <canvas className="border-1 border-[#acacac] shadow-lg" ref={fabricObj} id="canvas" />
    </div>
  );
}
