import * as fabric from "fabric";

export default function drawText(canvas, colorSelect) {
    if (canvas instanceof fabric.Canvas) {
        const text = new fabric.IText('Enter text', {
            top: (canvas.height - 50) * Math.random(),
            left: (canvas.width - 50) * Math.random(),
            fill: colorSelect,
            fontSize: 20,
            editable: true,
            selectable: true,
            padding: 10,
            cornerColor: "black",
            cornerStyle: 'circle',
            cornerStrokeColor: "black",
            borderDashArray: [5, 5],
            borderColor: '#000000',
        });
        canvas.add(text);
      }
}
