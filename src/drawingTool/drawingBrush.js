import * as fabric from 'fabric';

export default function drawingBrush(canvas, colorSelect) {
    canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
    canvas.freeDrawingBrush.color = colorSelect;
    canvas.freeDrawingBrush.width = 5;
    canvas.isDrawingMode = true; 

    canvas.on('mouse:up', () => canvas.isDrawingMode = false);
}