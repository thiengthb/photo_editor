import * as fabric from 'fabric';

export default function drawRectangle(canvas, colorSelect) {
    if (canvas instanceof fabric.Canvas) {  
        const rect = new fabric.Rect({
            id: 'rectangle',
            top: (canvas.height - 50) * Math.random(),
            left: (canvas.width - 50) * Math.random(),
            width: 100,
            height: 100,
            fill: colorSelect,
            objectCaching: false,
            padding: 10,
            rx: 2,
            ry: 2, 
            padding: 10,
            cornerColor: "black",
            cornerStyle: 'circle',
            cornerStrokeColor: "black",
            borderDashArray: [5, 5],
            borderColor: '#000000',
        });

        canvas.add(rect);
    }
}
