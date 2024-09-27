import * as fabric from "fabric";
import { v4 as uuidv4 } from 'uuid';


interface CustomFabricObject<T extends fabric.Object>
  extends fabric.Object {
  objectId?: string;
}

export const createRectangle = (pointer: PointerEvent) => {
    const rect = new fabric.Rect({
      left: pointer.x,
      top: pointer.y,
      width: 100,
      height: 100,
      fill: "#aabbcc",
      objectId: uuidv4(),
    } as CustomFabricObject<fabric.Rect>);
  
    return rect;
  };
  
  export const createTriangle = (pointer: PointerEvent) => {
    return new fabric.Triangle({
      left: pointer.x,
      top: pointer.y,
      width: 100,
      height: 100,
      fill: "#aabbcc",
      objectId: uuidv4(),
    } as CustomFabricObject<fabric.Triangle>);
  };
  
  export const createCircle = (pointer: PointerEvent) => {
    return new fabric.Circle({
      left: pointer.x,
      top: pointer.y,
      radius: 100,
      fill: "#aabbcc",
      objectId: uuidv4(),
    } as any);
  };
  
  export const createSpecificShape = (
    shapeType: string,
    pointer: PointerEvent
  ) => {
    switch (shapeType) {
      case "rectangle":
        return createRectangle(pointer);
  
      case "triangle":
        return createTriangle(pointer);
  
      case "circle":
        return createCircle(pointer);
  
      default:
        return null;
    }
  };

  export const createShape = (
    canvas: fabric.Canvas,
    pointer: PointerEvent,
    shapeType: string
  ) => {
    if (shapeType === "freeform") {
      canvas.isDrawingMode = true;
      return null;
    }
  
    return createSpecificShape(shapeType, pointer);
  };